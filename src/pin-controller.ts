// SPDX-License-Identifier: Apache-2.0
/**
 * PinController: the framework-free state machine over the two-level pinned
 * set (sessions and workspaces), the per-level row-emoji maps, and the shared
 * recent-emoji list. It owns the state transitions the browser UI triggers
 * (explicit set / toggle, emoji pick / clear, and the list-ready lifecycle:
 * stale-pin pruning plus the re-assertion of pinned order) and republishes a
 * subscription feed for every consumer (DOM overlay, slot components, tests).
 * Persistence lives in the injected {@link PinStore}; ordering in the injected
 * {@link PinReorderer}; the sessions/workspaces lists in the injected sources;
 * the optional log-backed write channel (session pins only) in the injected
 * {@link PinRemoteLike} — all narrow structural faces, so no cordis or DOM
 * type reaches this module.
 *
 * Write precedence: when the remote (upstream `session.setPinned` RPC) is
 * present, session-emoji commits go through it first — the session log is the
 * canonical residence — and the store write mirrors the commit so the ordered
 * list, panel, and reordering stay consistent. A failing remote self-disables
 * and the store takes over; `connection/reset` re-enables it. Workspace pins
 * and both emoji maps are plugin-local state and always write to the store.
 * @module dsh-session-emoji/pin-controller
 */
import { isEmojiChar, normalizePins, pruneEmoji, prunePins, rememberEmoji } from './pin-core.ts'
import {
  assignPinToBoard, removeBoard, reorderBoards as reorderBoardRegistry, saveView, setEntityTags, upsertBoard,
  type BoardRegistry, type SavedView,
} from './navigator.ts'
import type { PinRemoteLike } from './faces.ts'
import type { PinStore, PinStoreSnapshot } from './pin-store.ts'

/** The ready phase of the sessions list (pruning and initial reorder gate). */
const LIST_READY = 'ready'

/** Deep equality for the plain JSON-shaped values one section field carries. */
function sameSectionValue(left: unknown, right: unknown): boolean {
  return JSON.stringify(left ?? null) === JSON.stringify(right ?? null)
}

/** Sessions-list slice the controller reads (phase + authoritative ids). */
export interface PinListSource {
  getSnapshot(): { phase: string; ids: readonly string[] }
  subscribe(listener: () => void): () => void
}

/** Workspaces-list slice the controller reads (phase + authoritative ids). */
export interface PinWorkspaceSource {
  getSnapshot(): { phase: string; ids: readonly string[] }
  subscribe(listener: () => void): () => void
}

/** Ordering sinks (the browser glue wraps `ctx.workspaces`). */
export interface PinReorderer {
  /**
   * Move one pinned session to the front of its workspace account. A no-op
   * when the session is ungrouped or already first.
   * @param id - session id to move.
   */
  moveToTop(id: string): Promise<void>
  /**
   * Re-assert every pinned session's front position in pin order. Must be
   * idempotent (no-op when the front already matches), so repeated calls on
   * workspace-list changes cannot loop.
   * @param pinned - normalized pinned ids, newest pin first.
   */
  reapplyOrder(pinned: readonly string[]): void
  /**
   * Move one pinned workspace to the front of the workspace list.
   * @param id - workspace id to move.
   */
  moveWorkspaceToTop(id: string): Promise<void>
  /**
   * Re-assert the pinned workspace prefix (newest pin first), idempotently.
   * @param pinned - normalized pinned workspace ids, newest pin first.
   */
  reapplyWorkspaceOrder(pinned: readonly string[]): void
}

/** Outcome of one commit attempt. */
export type PinToggleResult = 'pinned' | 'unpinned' | 'limit'

/**
 * The controller. Construction resolves the first store snapshot;
 * {@link start} subscribes and flushes the lifecycle hooks.
 */
export class PinController {
  private snapshot: PinStoreSnapshot
  private readonly listeners = new Set<() => void>()
  private readonly disposers: Array<() => void> = []
  /** Locally committed field values shadowing a lagging Host echo. */
  private readonly pending = new Map<string, unknown>()
  private started = false

  constructor(
    private readonly store: PinStore,
    private readonly list: PinListSource,
    private readonly workspaceList: PinWorkspaceSource,
    private readonly reorderer: PinReorderer,
    private readonly remote?: PinRemoteLike,
  ) {
    this.snapshot = store.read()
  }

  /** Subscribe the store and list feeds and run the initial refresh. Idempotent. */
  start(): void {
    if (this.started) return
    this.started = true
    this.disposers.push(
      this.store.subscribe(() => this.refresh()),
      this.list.subscribe(() => this.onListChange()),
      this.workspaceList.subscribe(() => this.onWorkspaceListChange()),
    )
    this.refresh()
    this.onListChange()
    this.onWorkspaceListChange()
  }

  /** Dispose every subscription; the controller becomes inert. */
  stop(): void {
    for (const dispose of this.disposers.splice(0)) dispose()
    this.listeners.clear()
    this.started = false
  }

  /**
   * Subscribe to pin/emoji-state changes.
   * @param listener - invoked after each adopted or refreshed state.
   * @returns the unsubscribe function.
   */
  // Arrow property, not a prototype method: slot components hand
  // `pin.subscribe` to React's useSyncExternalStore, which invokes it
  // unbound — a method body would lose `this` and crash on the first render.
  readonly subscribe = (listener: () => void): () => void => {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  /** The normalized pinned session ids, newest pin first (stable reference between changes). */
  getPinned(): readonly string[] {
    return this.snapshot.pinned
  }

  /** Whether one session id is currently pinned. */
  isPinned(id: string): boolean {
    return this.snapshot.pinned.includes(id)
  }

  /** The normalized pinned workspace ids, newest pin first (stable reference between changes). */
  getWorkspacePinned(): readonly string[] {
    return this.snapshot.workspacePinned
  }

  /** Whether one workspace id is currently pinned. */
  isWorkspacePinned(id: string): boolean {
    return this.snapshot.workspacePinned.includes(id)
  }

  /** The pin-count limit in force, per level (0 = unlimited). */
  getMaxPins(): number {
    return this.snapshot.maxPins
  }

  /**
   * Whether a settings write is still unacknowledged by the Host. The settings
   * round trip takes about a second, so the UI can surface a syncing state and
   * a reload can wait for durability instead of racing a queued write.
   * @returns true while at least one committed field awaits its Host echo.
   */
  hasPendingWrites(): boolean {
    return this.pending.size > 0
  }

  /** Stored row emoji of one session, or undefined. */
  getEmoji(id: string): string | undefined {
    return this.snapshot.emoji[id]
  }

  /** Stored row emoji of one workspace, or undefined. */
  getWorkspaceEmoji(id: string): string | undefined {
    return this.snapshot.workspaceEmoji[id]
  }

  /** The recently picked emoji, newest first (shared by both levels). */
  getRecentEmoji(): readonly string[] {
    return this.snapshot.recentEmoji
  }

  // ── Navigation organizer (boards / tags / views) ────────────────────────

  /** The board registry (pin groups + membership). */
  getBoards(): BoardRegistry {
    return this.snapshot.boards
  }

  /** The id → tags map. */
  getTags(): Record<string, string[]> {
    return this.snapshot.tags
  }

  /** The saved filter views, newest last. */
  getViews(): readonly SavedView[] {
    return this.snapshot.views
  }

  /** Create a board (or rename when the id exists) and persist.
   * @param id - stable board id.
   * @param name - display name.
   */
  async createBoard(id: string, name: string): Promise<void> {
    const boards = upsertBoard(this.snapshot.boards, id, name)
    await this.commit({ boards })
  }

  /** Remove a board; its pins fall back to the ungrouped section.
   * @param id - board id.
   */
  async removeBoard(id: string): Promise<void> {
    const boards = removeBoard(this.snapshot.boards, id)
    await this.commit({ boards })
  }

  /** Rename an existing board (a missing id creates it, mirroring createBoard).
   * @param id - board id.
   * @param name - new display name.
   */
  async renameBoard(id: string, name: string): Promise<void> {
    return this.createBoard(id, name)
  }

  /** Persist a drag-reordered board sequence (unknown ids keep trailing order).
   * @param orderedIds - the desired board order.
   */
  async reorderBoards(orderedIds: readonly string[]): Promise<void> {
    const boards = reorderBoardRegistry(this.snapshot.boards, orderedIds)
    await this.commit({ boards })
  }

  /** Assign one pinned entity to a board ('' ungroups).
   * @param pinId - session or workspace id.
   * @param boardId - board id or ''.
   */
  async assignBoard(pinId: string, boardId: string): Promise<void> {
    const boards = assignPinToBoard(this.snapshot.boards, pinId, boardId)
    await this.commit({ boards })
  }

  /** Set one entity's tags (empty list removes the entry).
   * @param id - session or workspace id.
   * @param tags - next tags.
   */
  async setTags(id: string, tags: readonly string[]): Promise<void> {
    const next = setEntityTags(this.snapshot.tags, id, tags)
    await this.commit({ tags: next })
  }

  /** Save a filter view (same id replaces; the list caps at MAX_VIEWS).
   * @param view - the view to save.
   */
  async saveView(view: SavedView): Promise<void> {
    const views = saveView(this.snapshot.views, view)
    await this.commit({ views })
  }

  /**
   * Toggle one session id based on the store's membership. Callers with a
   * fresher truth (the log-backed projection) use {@link setPinned} with the
   * explicit next state instead.
   * @param id - session id to pin or unpin.
   * @returns the outcome.
   */
  async toggle(id: string): Promise<PinToggleResult> {
    return this.setPinned(id, !this.snapshot.pinned.includes(id))
  }

  /**
   * Commit an explicit next session-emoji state. Unpinning always succeeds;
   * pinning beyond the limit answers `'limit'` without a write. A successful
   * pin also moves the session to the front of its workspace account.
   * @param id - session id to pin or unpin.
   * @param next - the explicit post-change membership.
   * @returns the outcome.
   */
  async setPinned(id: string, next: boolean): Promise<PinToggleResult> {
    const currently = this.snapshot.pinned.includes(id)
    if (next === currently) return next ? 'pinned' : 'unpinned'
    if (next && this.snapshot.maxPins > 0 && this.snapshot.pinned.length >= this.snapshot.maxPins) return 'limit'
    const candidate = next
      ? [id, ...this.snapshot.pinned.filter(item => item !== id)]
      : this.snapshot.pinned.filter(item => item !== id)

    if (this.remote !== undefined) {
      const result = await this.remote.setPinned(id, next)
      if (result.ok) {
        // Mirror the log-backed commit into the store so the ordered list,
        // panel, and workspace reordering stay consistent.
        await this.commit({ pinned: candidate })
        if (next) void this.reorderer.moveToTop(id)
        return next ? 'pinned' : 'unpinned'
      }
      // Remote absent or failed: the store path takes over.
    }
    // Paint the commit at the click; the shadow keeps it until the settings
    // round trip echoes it back. A rejected write reloads Host state.
    await this.commit({ pinned: candidate })
    if (next) void this.reorderer.moveToTop(id)
    return next ? 'pinned' : 'unpinned'
  }

  /** Toggle one workspace id based on the store's membership.
   * @param id - workspace id to pin or unpin.
   * @returns the outcome.
   */
  async toggleWorkspace(id: string): Promise<PinToggleResult> {
    return this.setWorkspacePinned(id, !this.snapshot.workspacePinned.includes(id))
  }

  /**
   * Commit an explicit next workspace-pin state (store-only; no remote).
   * A successful pin moves the workspace to the front of the workspace list.
   * @param id - workspace id to pin or unpin.
   * @param next - the explicit post-change membership.
   * @returns the outcome.
   */
  async setWorkspacePinned(id: string, next: boolean): Promise<PinToggleResult> {
    const currently = this.snapshot.workspacePinned.includes(id)
    if (next === currently) return next ? 'pinned' : 'unpinned'
    if (next && this.snapshot.maxPins > 0 && this.snapshot.workspacePinned.length >= this.snapshot.maxPins) return 'limit'
    const candidate = next
      ? [id, ...this.snapshot.workspacePinned.filter(item => item !== id)]
      : this.snapshot.workspacePinned.filter(item => item !== id)
    await this.commit({ workspacePinned: candidate })
    if (next) void this.reorderer.moveWorkspaceToTop(id)
    return next ? 'pinned' : 'unpinned'
  }

  /** Commit one session emoji (null clears; catalog chars only). Picking an
   * emoji also moves it to the front of the shared recents list.
   * @param id - session id.
   * @param emoji - next emoji or null to clear.
   */
  async setEmoji(id: string, emoji: string | null): Promise<void> {
    if (emoji !== null && !isEmojiChar(emoji)) return
    const map = { ...this.snapshot.emoji }
    if (emoji === null) delete map[id]
    else map[id] = emoji
    const recentEmoji = emoji === null ? this.snapshot.recentEmoji : rememberEmoji(this.snapshot.recentEmoji, emoji)
    await this.commit(emoji === null ? { emoji: map } : { emoji: map, recentEmoji })
  }

  /** Remove one session's emoji. */
  async clearEmoji(id: string): Promise<void> {
    await this.setEmoji(id, null)
  }

  /** Commit one workspace emoji (null clears; catalog chars only). Picking an
   * emoji also moves it to the front of the shared recents list.
   * @param id - workspace id.
   * @param emoji - next emoji or null to clear.
   */
  async setWorkspaceEmoji(id: string, emoji: string | null): Promise<void> {
    if (emoji !== null && !isEmojiChar(emoji)) return
    const map = { ...this.snapshot.workspaceEmoji }
    if (emoji === null) delete map[id]
    else map[id] = emoji
    const recentEmoji = emoji === null ? this.snapshot.recentEmoji : rememberEmoji(this.snapshot.recentEmoji, emoji)
    await this.commit(emoji === null ? { workspaceEmoji: map } : { workspaceEmoji: map, recentEmoji })
  }

  /** Remove one workspace's emoji. */
  async clearWorkspaceEmoji(id: string): Promise<void> {
    await this.setWorkspaceEmoji(id, null)
  }

  /**
   * Re-assert pinned order against the current workspace accounts and the
   * workspace list. Glue wires this to workspace-list changes; the
   * reorderer's idempotence makes repeated calls safe.
   */
  reapplyOrder(): void {
    if (!this.snapshot.reorderOnLoad) return
    if (this.snapshot.pinned.length > 0) this.reorderer.reapplyOrder(this.snapshot.pinned)
    if (this.snapshot.workspacePinned.length > 0) this.reorderer.reapplyWorkspaceOrder(this.snapshot.workspacePinned)
  }

  /** Store feed arrived: re-read the snapshot and republish. */
  private refresh(): void {
    const next = this.store.read()
    // Keep locally committed values visible until the Host echoes them back.
    // Per-field snapshots can arrive out of order, so a late echo of an
    // earlier write must not visibly revert a newer one (the row would lose
    // the emoji it just gained while the Host kept it). Deleting the visited
    // entry during Map iteration is defined behaviour.
    for (const [field, value] of this.pending) {
      const observed = (next as unknown as Record<string, unknown>)[field]
      if (sameSectionValue(observed, value)) this.pending.delete(field)
      else (next as unknown as Record<string, unknown>)[field] = value
    }
    this.snapshot = next
    this.notify()
  }

  /**
   * Commit one partial section: paint it at the click and keep it authoritative
   * until the Host echo agrees. A rejected write drops the shadow and re-reads
   * the Host truth.
   * @param section - the partial section to persist.
   */
  private async commit(section: Partial<PinStoreSnapshot>): Promise<void> {
    this.adopt(section)
    const shadowed = Object.keys(section).map(field =>
      [field, (this.snapshot as unknown as Record<string, unknown>)[field]] as const)
    for (const [field, value] of shadowed) this.pending.set(field, value)
    try {
      await this.store.write(section)
    } catch {
      for (const [field, value] of shadowed) {
        if (sameSectionValue(this.pending.get(field), value)) this.pending.delete(field)
      }
      this.refresh()
    }
  }

  /** Sessions list changed: gate pruning and initial reorder on the ready phase. */
  private onListChange(): void {
    const list = this.list.getSnapshot()
    if (list.phase !== LIST_READY) return
    if (this.snapshot.pruneStale) {
      const live = new Set(list.ids)
      const pruned = prunePins(this.snapshot.pinned, live)
      const emoji = pruneEmoji(this.snapshot.emoji, live)
      if (pruned.length !== this.snapshot.pinned.length || Object.keys(emoji).length !== Object.keys(this.snapshot.emoji).length) {
        void this.commit({ pinned: pruned, emoji })
      }
    }
    this.reapplyOrder()
  }

  /** Workspaces list changed: gate pruning and initial reorder on the ready phase. */
  private onWorkspaceListChange(): void {
    const list = this.workspaceList.getSnapshot()
    if (list.phase !== LIST_READY) return
    if (this.snapshot.pruneStale) {
      const live = new Set(list.ids)
      const pruned = prunePins(this.snapshot.workspacePinned, live)
      const emoji = pruneEmoji(this.snapshot.workspaceEmoji, live)
      if (pruned.length !== this.snapshot.workspacePinned.length || Object.keys(emoji).length !== Object.keys(this.snapshot.workspaceEmoji).length) {
        void this.commit({ workspacePinned: pruned, workspaceEmoji: emoji })
      }
    }
    this.reapplyOrder()
  }

  /** Adopt locally computed partial state and republish. */
  /**
   * One-shot migration entry (legacy-namespace import): commit a whole section
   * patch through the usual adopt → shadow → Host write sequence, so the UI
   * shows the imported state immediately and the pending flag covers the round
   * trip. Callers decide the patch; the controller never inspects it.
   * @param section - section fields to write.
   */
  async importSection(section: Partial<PinStoreSnapshot>): Promise<void> {
    await this.commit(section)
  }

  private adopt(partial: Partial<PinStoreSnapshot>): void {
    const next = { ...this.snapshot }
    if (partial.pinned !== undefined) next.pinned = normalizePins(partial.pinned)
    if (partial.workspacePinned !== undefined) next.workspacePinned = normalizePins(partial.workspacePinned)
    if (partial.emoji !== undefined) next.emoji = { ...partial.emoji }
    if (partial.workspaceEmoji !== undefined) next.workspaceEmoji = { ...partial.workspaceEmoji }
    if (partial.recentEmoji !== undefined) next.recentEmoji = [...partial.recentEmoji]
    if (partial.boards !== undefined) next.boards = partial.boards
    if (partial.tags !== undefined) next.tags = partial.tags
    if (partial.views !== undefined) next.views = partial.views
    this.snapshot = next
    this.notify()
  }

  private notify(): void {
    for (const listener of [...this.listeners]) listener()
  }
}
