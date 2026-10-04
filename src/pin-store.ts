// SPDX-License-Identifier: Apache-2.0
/**
 * PinStore: the persistence adapter between the PinController and the two
 * durable stores — the host half's live `session-emoji` Config form (host mode:
 * the settings write queue round-trips to the profile patch) and browser-local
 * storage (local mode: memory/unavailable settings — remote browsers and
 * builds whose web proxy does not serve the entry — degrade to per-browser
 * persistence). Mode switches are re-evaluated on every read, so a settings
 * transport that (re-)connects adopts the Host store live.
 *
 * The stored document carries both pin levels (sessions and workspaces), the
 * per-level row-emoji maps, and the shared recent-emoji list. Cross-tab
 * consistency in local mode rides the window `storage` event: a write in
 * another tab republishes through the subscribe feed.
 * @module dsh-session-emoji/pin-store
 */
import { decodeStoredPins, emptyStoredPins, encodeStoredPins, normalizeEmojiMap, normalizePins, normalizeRecentEmoji } from './pin-core.ts'
import { normalizeBoards, normalizeTags, normalizeViews, type BoardRegistry, type SavedView } from './navigator.ts'

/** Browser-local storage key (remote-browser fallback). */
export const STORAGE_KEY = 'dsh.session-emoji.pinned'

/**
 * Browser-local key of the namespace this plugin was forked from. Read once by
 * the legacy import (never written) so a profile that only ever used the
 * browser-local fallback keeps its state across the rename.
 */
export const LEGACY_STORAGE_KEY = 'dsh.session-pin.pinned'

/** Pin-section fields of the host half's `session-emoji` Config form. */
export interface PinSection {
  pinned?: string[]
  workspacePinned?: string[]
  emoji?: Record<string, string>
  workspaceEmoji?: Record<string, string>
  recentEmoji?: string[]
  maxPins?: number
  reorderOnLoad?: boolean
  pruneStale?: boolean
  /** Pin groups (boards) and their membership. */
  boards?: BoardRegistry
  /** Session/workspace id → tags. */
  tags?: Record<string, string[]>
  /** Saved filter views. */
  views?: SavedView[]
  /** Feature switches mirrored from the host Config base. */
  enableBoards?: boolean
  enableTags?: boolean
  enableViews?: boolean
  enableHealth?: boolean
  enableGoto?: boolean
}

/** One consistent read of the pin store. */
export interface PinStoreSnapshot {
  /** Normalized pinned session ids, newest pin first. */
  pinned: string[]
  /** Normalized pinned workspace ids, newest pin first. */
  workspacePinned: string[]
  /** Session id → shipped emoji char. */
  emoji: Record<string, string>
  /** Workspace id → shipped emoji char. */
  workspaceEmoji: Record<string, string>
  /** Recently picked emoji, newest first (shared by both levels). */
  recentEmoji: string[]
  /** Pin groups (boards) and their membership. */
  boards: BoardRegistry
  /** Session/workspace id → tags. */
  tags: Record<string, string[]>
  /** Saved filter views (newest last). */
  views: SavedView[]
  /** Whether persistence is browser-local (no Host settings transport). */
  local: boolean
  /** Pin-count limit visible in this mode (per level); 0 = unlimited. */
  maxPins: number
  /** Re-assert pinned order once the session/workspace lists are ready. */
  reorderOnLoad: boolean
  /** Drop pins for entities absent from a ready list (deleted/archived). */
  pruneStale: boolean
  /** Feature switches mirrored from the host Config base. */
  enableBoards: boolean
  enableTags: boolean
  enableViews: boolean
  enableHealth: boolean
  enableGoto: boolean
}

/**
 * The settings-form slice the store reads and writes through. Structurally
 * this is the client settings service's `ConfigForm<PinSection>`
 * (`ctx.configForms.get(entryId)`): same snapshot shape, same subscription,
 * same per-field write queue — `set` answers with the Host's acceptance:
 * `false` means the Host did not apply the edit (the form has already re-read
 * Host state by then), which the store retries once and then reports as a
 * failed write.
 */
export interface PinScope {
  getSnapshot(): {
    mode: 'host' | 'memory'
    status: 'loading' | 'ready' | 'unavailable'
    value?: PinSection
  }
  subscribe(listener: () => void): () => void
  set(field: string, value: unknown): Promise<unknown>
}

/** Synchronous browser-local key/value storage (localStorage face). */
export interface StorageLike {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

/** Storage event face (window `storage` events for cross-tab sync). */
export interface StorageEventLike {
  key: string | null
}

/** Event-target slice for storage events. */
export interface StorageEventsLike {
  addEventListener(type: 'storage', listener: (event: StorageEventLike) => void): void
  removeEventListener(type: 'storage', listener: (event: StorageEventLike) => void): void
}

/** Read/write/subscribe face the controller consumes. */
export interface PinStore {
  read(): PinStoreSnapshot
  /** Merge a partial section write (host mode: per-field settings RPCs). */
  write(section: Partial<PinSection>): void | Promise<void>
  subscribe(listener: () => void): () => void
}

/** Whether the settings transport cannot carry this namespace to the Host. */
function isLocalMode(scope: PinScope): boolean {
  const snapshot = scope.getSnapshot()
  return snapshot.mode === 'memory' || snapshot.status === 'unavailable'
}

/**
 * Write one field through the settings form, honouring its acceptance answer.
 * A refused write is retried once: the usual cause is a revision conflict with
 * a concurrent document edit, and the form re-reads Host state after a refusal,
 * so the retry runs against a fresh revision. Only a second refusal fails.
 * @param scope - bound settings scope.
 * @param field - section field to write.
 * @param value - value to write.
 */
async function writeField(scope: PinScope, field: string, value: unknown): Promise<void> {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const accepted = await scope.set(field, value)
    if (accepted !== false) return
  }
  throw new Error(`the Host did not accept the ${field} write`)
}

/**
 * Build the pin store over one settings scope and one browser-local storage.
 * @param scope - bound `session-emoji` settings scope.
 * @param storage - browser-local key/value storage.
 * @param storageEvents - window storage-event source.
 * @returns the store face.
 */
export function createPinStore(scope: PinScope, storage: StorageLike, storageEvents: StorageEventsLike): PinStore {
  /** One in-flight write per field plus the latest value queued behind it. */
  const fieldWrites = new Map<string, {
    running: boolean
    queued?: { value: unknown; settle: Array<{ resolve: () => void; reject: (error: unknown) => void }> }
  }>()

  /**
   * Drain one field: write the queued value, then re-check — a newer value that
   * arrived meanwhile replaced the queue entry and is written next.
   * @param field - section field to drain.
   */
  const drainField = async (field: string): Promise<void> => {
    const state = fieldWrites.get(field)
    if (state === undefined) return
    while (state.queued !== undefined) {
      const { value, settle } = state.queued
      state.queued = undefined
      try {
        await writeField(scope, field, value)
        for (const waiter of settle) waiter.resolve()
      } catch (error) {
        for (const waiter of settle) waiter.reject(error)
      }
    }
    state.running = false
  }

  /**
   * Queue one field write, coalescing with an unstarted predecessor: the newest
   * value wins and the superseded callers settle as covered by it.
   * @param field - section field to write.
   * @param value - value to write.
   * @returns resolution once this value or a newer one has been applied.
   */
  const queueField = (field: string, value: unknown): Promise<void> => {
    const state = fieldWrites.get(field) ?? { running: false }
    fieldWrites.set(field, state)
    return new Promise<void>((resolve, reject) => {
      if (state.queued === undefined) state.queued = { value, settle: [] }
      else state.queued.value = value
      state.queued.settle.push({ resolve, reject })
      if (!state.running) {
        state.running = true
        void drainField(field)
      }
    })
  }

  const readLocal = (): {
    pinned: string[]
    workspacePinned: string[]
    emoji: Record<string, string>
    workspaceEmoji: Record<string, string>
    recentEmoji: string[]
    boards: BoardRegistry
    tags: Record<string, string[]>
    views: SavedView[]
  } => {
    try {
      return decodeStoredPins(JSON.parse(storage.getItem(STORAGE_KEY) ?? '[]'))
    } catch {
      return emptyStoredPins()
    }
  }

  const snapshot = (): PinStoreSnapshot => {
    if (isLocalMode(scope)) {
      // Remote browsers cannot read the Host base layer (settings RPCs are
      // loopback-only): unlimited limit and default policy until the
      // transport carries the namespace again.
      return {
        ...readLocal(),
        local: true,
        maxPins: 0,
        reorderOnLoad: true,
        pruneStale: true,
        enableBoards: true,
        enableTags: true,
        enableViews: true,
        enableHealth: true,
        enableGoto: true,
      }
    }
    const value = scope.getSnapshot().value
    return {
      pinned: normalizePins(value?.pinned ?? []),
      workspacePinned: normalizePins(value?.workspacePinned ?? []),
      emoji: normalizeEmojiMap(value?.emoji ?? {}),
      workspaceEmoji: normalizeEmojiMap(value?.workspaceEmoji ?? {}),
      recentEmoji: normalizeRecentEmoji(value?.recentEmoji ?? []),
      boards: normalizeBoards(value?.boards),
      tags: normalizeTags(value?.tags),
      views: normalizeViews(value?.views),
      local: false,
      maxPins: value?.maxPins ?? 0,
      reorderOnLoad: value?.reorderOnLoad ?? true,
      pruneStale: value?.pruneStale ?? true,
      enableBoards: value?.enableBoards ?? true,
      enableTags: value?.enableTags ?? true,
      enableViews: value?.enableViews ?? true,
      enableHealth: value?.enableHealth ?? true,
      enableGoto: value?.enableGoto ?? true,
    }
  }

  return {
    read: snapshot,
    write(section) {
      if (isLocalMode(scope)) {
        const doc = readLocal()
        if (section.pinned !== undefined) doc.pinned = normalizePins(section.pinned)
        if (section.workspacePinned !== undefined) doc.workspacePinned = normalizePins(section.workspacePinned)
        if (section.emoji !== undefined) doc.emoji = normalizeEmojiMap(section.emoji)
        if (section.workspaceEmoji !== undefined) doc.workspaceEmoji = normalizeEmojiMap(section.workspaceEmoji)
        if (section.recentEmoji !== undefined) doc.recentEmoji = normalizeRecentEmoji(section.recentEmoji)
        if (section.boards !== undefined) doc.boards = normalizeBoards(section.boards)
        if (section.tags !== undefined) doc.tags = normalizeTags(section.tags)
        if (section.views !== undefined) doc.views = normalizeViews(section.views)
        try {
          storage.setItem(STORAGE_KEY, encodeStoredPins(doc))
        } catch {
          /* private mode / disabled storage: pinning degrades to session-lifetime */
        }
        return
      }
      // Host mode: the settings round trip takes about a second per field, so
      // writes are serialized per field and coalesced latest-wins. Ordering
      // matters — the transport may deliver an older value last and silently
      // revert the newest one (a rapid unpin→pin pair ending unpinned,
      // invisible until the next reload); coalescing matters because a burst of
      // clicks must not queue a second of writes per click, all of which the
      // page would drop on reload. A write the Host refuses (its form resolves
      // `false`: a revision conflict with a concurrent document edit is the
      // usual cause) is retried once, when the form has re-read Host state, and
      // only then reported as failed so the caller can drop its optimistic
      // value.
      const writes: Array<Promise<unknown>> = []
      for (const [field, value] of Object.entries(section)) writes.push(queueField(field, value))
      return Promise.all(writes).then(() => undefined)
    },
    subscribe(listener) {
      const disposeScope = scope.subscribe(listener)
      const onStorage = (event: StorageEventLike): void => {
        // null key = clear() swept the whole storage; republish either way.
        if (event.key === null || event.key === STORAGE_KEY) listener()
      }
      storageEvents.addEventListener('storage', onStorage)
      return () => {
        storageEvents.removeEventListener('storage', onStorage)
        disposeScope()
      }
    },
  }
}
