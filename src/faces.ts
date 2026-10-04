// SPDX-License-Identifier: Apache-2.0
/**
 * Narrow structural faces crossing the plugin's own module boundaries
 * (controller ↔ overlay ↔ slot components ↔ browser glue). They exist so the
 * framework-free modules stay testable without the deepseek client types
 * and the glue performs the one branded-id adaptation per boundary.
 * @module dsh-session-emoji/faces
 */

/** Outcome of one pin commit attempt. */
export type PinToggleResult = 'pinned' | 'unpinned' | 'limit'

/**
 * Pin-state read/write face the UI consumes: two pin levels (sessions and
 * workspaces) plus the per-level row-emoji maps and the shared recents list.
 */
export interface PinReadFace {
  getPinned(): readonly string[]
  isPinned(id: string): boolean
  getWorkspacePinned(): readonly string[]
  isWorkspacePinned(id: string): boolean
  getMaxPins(): number
  /**
   * Whether a settings write is still unacknowledged by the Host. Settles true
   * after every commit and false once the Host republishes the committed value
   * (or refuses it), so the UI can show a syncing state — and a page reload can
   * wait for durability instead of racing a queued write.
   */
  hasPendingWrites(): boolean
  /** Toggle one session id's membership (store-truth based). */
  toggle(id: string): Promise<PinToggleResult>
  /** Commit an explicit next session-emoji state (projection-aware callers use this). */
  setPinned(id: string, next: boolean): Promise<PinToggleResult>
  /** Toggle one workspace id's membership (store-truth based). */
  toggleWorkspace(id: string): Promise<PinToggleResult>
  /** Commit an explicit next workspace-pin state. */
  setWorkspacePinned(id: string, next: boolean): Promise<PinToggleResult>
  /** Stored row emoji of one session, or undefined. */
  getEmoji(id: string): string | undefined
  /** Stored row emoji of one workspace, or undefined. */
  getWorkspaceEmoji(id: string): string | undefined
  /** The recently picked emoji, newest first (shared by both levels). */
  getRecentEmoji(): readonly string[]
  /** Commit one session emoji (null clears; catalog chars only). */
  setEmoji(id: string, emoji: string | null): Promise<void>
  /** Remove one session's emoji. */
  clearEmoji(id: string): Promise<void>
  /** Commit one workspace emoji (null clears; catalog chars only). */
  setWorkspaceEmoji(id: string, emoji: string | null): Promise<void>
  /** Remove one workspace's emoji. */
  clearWorkspaceEmoji(id: string): Promise<void>
  /** The board registry (pin groups + membership). */
  getBoards(): import('./navigator.ts').BoardRegistry
  /** The id → tags map. */
  getTags(): Record<string, string[]>
  /** The saved filter views, newest last. */
  getViews(): readonly import('./navigator.ts').SavedView[]
  subscribe(listener: () => void): () => void
}

/**
 * Organizer write face the pinned panel consumes: board lifecycle, pin→board
 * assignment, entity tagging, and saved views. `PinController` satisfies it.
 */
export interface PinOrganizerFace extends PinReadFace {
  /** Create a board (or rename when the id exists). */
  createBoard(id: string, name: string): Promise<void>
  /** Rename an existing board. */
  renameBoard(id: string, name: string): Promise<void>
  /** Remove a board; its pins fall back to the ungrouped section. */
  removeBoard(id: string): Promise<void>
  /** Persist a drag-reordered board sequence. */
  reorderBoards(orderedIds: readonly string[]): Promise<void>
  /** Assign one pinned entity to a board ('' ungroups). */
  assignBoard(pinId: string, boardId: string): Promise<void>
  /** Set one entity's tags (empty list removes the entry). */
  setTags(id: string, tags: readonly string[]): Promise<void>
  /** Save a filter view (same id replaces). */
  saveView(view: import('./navigator.ts').SavedView): Promise<void>
}

/**
 * Optional log-backed write channel (the upstream `session.setPinned` RPC).
 * Absent on baselines without it; a failing remote disables itself until the
 * next connection generation re-enables it. Workspace pins and emoji never
 * ride this channel — they are plugin-local state.
 */
export interface PinRemoteLike {
  setPinned(id: string, pinned: boolean): Promise<{ ok: true } | { ok: false }>
  reenable(): void
}

/** Sessions-list slice the UI reads (ids are plain strings at this boundary). */
export interface SessionListFace {
  getSnapshot(): {
    phase: string
    ids: readonly string[]
    byId: Record<string, { displayTitle: string; blank: boolean } | undefined>
  }
  subscribe(listener: () => void): () => void
}

/** Workspaces-list slice the UI reads (ids and labels as plain strings). */
export interface WorkspaceListFace {
  getSnapshot(): {
    phase: string
    items: readonly { workspaceId: string; title: string }[]
  }
  subscribe(listener: () => void): () => void
}

/** Dictionary keys of the plugin's `session-emoji` locale namespace. */
export type PinKey =
  | 'pin'
  | 'unpin'
  | 'limit'
  | 'pinWorkspace'
  | 'unpinWorkspace'
  | 'limitWorkspace'
  | 'emojiPick'
  | 'emojiPickerTitle'
  | 'emojiSearch'
  | 'emojiRecent'
  | 'emojiNoResults'
  | 'emojiMore'
  | 'categorySmileys'
  | 'categoryPeople'
  | 'categoryAnimals'
  | 'categoryFood'
  | 'categoryTravel'
  | 'categoryActivities'
  | 'categoryObjects'
  | 'categorySymbols'
  | 'panelTitle'
  | 'panelEmpty'
  | 'panelSessions'
  | 'panelWorkspaces'
  | 'footerTitle'
  | 'ungrouped'
  | 'manageRow'
  | 'boardLabel'
  | 'tagsLabel'
  | 'save'
  | 'close'

/** Translate one plugin dictionary key (bound locale or English fallback). */
export type PinTranslate = (key: PinKey) => string

/** Open/close state of the pinned-sessions panel (tiny observable). */
export interface PinUiState {
  getSnapshot(): { open: boolean }
  subscribe(listener: () => void): () => void
  setOpen(open: boolean): void
  toggle(): void
}
