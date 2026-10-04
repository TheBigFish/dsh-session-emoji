// SPDX-License-Identifier: Apache-2.0
/**
 * One-shot import of the settings namespace this plugin was forked from.
 *
 * The upstream plugin — and this fork while it was still called
 * `dsh-session-pin` — kept its pin lists, emoji maps, recents, and organizer
 * state in the live Config form of the `session-pin` profile entry (or, on a
 * browser without a host half, in the legacy browser-local key). Renaming the
 * plugin moved the durable namespace to `session-emoji`, so an existing
 * profile would look empty; this module copies the old values across exactly
 * once.
 *
 * The import never overwrites: it only fills fields that are still empty in
 * the new namespace. A profile that already uses this plugin keeps its own
 * state, and a second run is a no-op because the filled fields are no longer
 * empty.
 * @module dsh-session-emoji/legacy-import
 */

import {
  decodeStoredPins,
  normalizeEmojiMap,
  normalizePins,
  normalizeRecentEmoji,
  type StoredPinsDoc,
} from './pin-core.ts'
import { normalizeBoards, normalizeTags, normalizeViews } from './navigator.ts'
import {
  LEGACY_STORAGE_KEY,
  type PinScope,
  type PinSection,
  type PinStoreSnapshot,
  type StorageLike,
} from './pin-store.ts'

/** Legacy settings entry id: the fork's former name. */
export const LEGACY_ENTRY_ID = 'session-pin'

/**
 * State fields carried across (policy scalars keep the new row's defaults).
 * `Partial<Pick<…>>` keeps the patch assignable to the controller's commit.
 */
export type LegacyImportPatch = Partial<Pick<PinStoreSnapshot,
  'pinned' | 'workspacePinned' | 'emoji' | 'workspaceEmoji' | 'recentEmoji' | 'boards' | 'tags' | 'views'>>

/** An empty array/map has nothing to carry over. */
function empty(value: unknown): boolean {
  if (value === undefined || value === null) return true
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value as Record<string, unknown>).length === 0
  return false
}

/**
 * Decide what a legacy source contributes to an empty new namespace.
 * @param legacy - legacy section values, or `undefined` when there is none.
 * @param current - the new namespace's current section.
 * @returns the patch to write, or `null` when there is nothing to import.
 */
export function planLegacyImport(legacy: Partial<PinSection> | StoredPinsDoc | undefined, current: PinSection): LegacyImportPatch | null {
  if (legacy === undefined) return null
  const patch: LegacyImportPatch = {}
  const pins = normalizePins(legacy.pinned ?? [])
  if (pins.length > 0 && empty(current.pinned)) patch.pinned = pins
  const workspacePins = normalizePins(legacy.workspacePinned ?? [])
  if (workspacePins.length > 0 && empty(current.workspacePinned)) patch.workspacePinned = workspacePins
  const emoji = normalizeEmojiMap(legacy.emoji ?? {})
  if (Object.keys(emoji).length > 0 && empty(current.emoji)) patch.emoji = emoji
  const workspaceEmoji = normalizeEmojiMap(legacy.workspaceEmoji ?? {})
  if (Object.keys(workspaceEmoji).length > 0 && empty(current.workspaceEmoji)) patch.workspaceEmoji = workspaceEmoji
  const recentEmoji = normalizeRecentEmoji(legacy.recentEmoji ?? [])
  if (recentEmoji.length > 0 && empty(current.recentEmoji)) patch.recentEmoji = recentEmoji
  // The organizer registries normalize into fixed-shape containers, so they are
  // checked field by field instead of by object identity.
  const boards = normalizeBoards(legacy.boards)
  if ((Object.keys(boards.byId).length > 0 || Object.keys(boards.membership).length > 0) && empty(current.boards)) patch.boards = boards
  const tags = normalizeTags(legacy.tags)
  if (Object.keys(tags).length > 0 && empty(current.tags)) patch.tags = tags
  const views = normalizeViews(legacy.views)
  if (views.length > 0 && empty(current.views)) patch.views = views
  return Object.keys(patch).length === 0 ? null : patch
}

/** Dependencies of {@link runLegacyImport}. */
export interface LegacyImportDeps {
  /** The new namespace's form. */
  scope: PinScope
  /** Resolves the legacy entry's form, or `undefined` when it is not installed. */
  legacyScope(): PinScope | undefined
  /** Browser-local storage face, for the legacy key fallback. */
  storage: StorageLike
  /** Applies the patch through the controller (adopt + Host write). */
  apply(patch: LegacyImportPatch): Promise<void>
  /** Host logger for the one warning this path may emit. */
  logger: { warn(message: string): void }
}

/**
 * Run the import once both forms have loaded, then stop: it never retries a
 * successful import, and a profile without the legacy plugin resolves to a
 * one-time storage read.
 * @param deps - scope, legacy source, sink, and logger.
 * @returns the disposer (unsubscribes from both feeds).
 */
export function runLegacyImport(deps: LegacyImportDeps): () => void {
  let finished = false
  const attempt = (): void => {
    if (finished) return
    const legacy = deps.legacyScope()
    const own = deps.scope.getSnapshot()
    if (own.status === 'loading') return
    let patch: LegacyImportPatch | null = null
    if (legacy !== undefined) {
      const snapshot = legacy.getSnapshot()
      if (snapshot.status === 'loading') return
      patch = snapshot.status === 'ready' && snapshot.value !== undefined
        ? planLegacyImport(snapshot.value, own.value ?? {})
        : null
    } else {
      patch = planLegacyImport(readLegacyDocument(deps.storage), own.value ?? {})
    }
    finished = true
    if (patch === null) return
    void deps.apply(patch).then(
      () => undefined,
      (error: unknown) => {
        deps.logger.warn(`session-emoji: legacy state import failed: ${String(error)}`)
      },
    )
  }
  const disposeOwn = deps.scope.subscribe(attempt)
  const legacy = deps.legacyScope()
  const disposeLegacy = legacy === undefined ? (): void => {} : legacy.subscribe(attempt)
  attempt()
  return () => {
    disposeOwn()
    disposeLegacy()
  }
}

/**
 * Read the legacy browser-local document (the fork's former storage key).
 * @param storage - storage face.
 * @returns decoded legacy values, or `undefined` when absent/unreadable.
 */
function readLegacyDocument(storage: StorageLike): Partial<PinSection> | undefined {
  try {
    const raw = storage.getItem(LEGACY_STORAGE_KEY)
    if (raw === null || raw.length === 0) return undefined
    return decodeStoredPins(JSON.parse(raw))
  } catch {
    return undefined
  }
}