// SPDX-License-Identifier: Apache-2.0
/**
 * Pure pin-set logic shared by the host half, the browser half, the
 * controller, and the unit tests. No DOM, no cordis, no I/O: everything here
 * is a deterministic transform. Two pin levels share this module — sessions
 * and workspaces — plus the per-row emoji decoration: one shipped emoji char
 * per entity, validated against the generated catalog.
 * @module dsh-session-emoji/pin-core
 */
import { EMOJI_BY_CHAR } from './emoji-catalog.ts'

/** Maximum remembered recently-used emoji, shared by both levels. */
export const MAX_RECENT_EMOJI = 12

/**
 * Normalize an unknown pin list (settings wire value or localStorage JSON):
 * strings only, deduplicated, first occurrence order.
 * @param value - candidate pinned ids.
 * @returns the normalized id list, or an empty list for malformed input.
 */
export function normalizePins(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  const seen = new Set<string>()
  const out: string[] = []
  for (const item of value) {
    if (typeof item !== 'string' || item.length === 0 || seen.has(item)) continue
    seen.add(item)
    out.push(item)
  }
  return out
}

/**
 * Toggle one id's membership in the pin list.
 * @param pinned - current normalized pin list.
 * @param id - entity id to pin or unpin.
 * @param maxPins - maximum pinned count; 0 means unlimited. Unpinning always
 * succeeds; pinning beyond the limit returns null.
 * @returns the next pin list (newly pinned ids go to the front), or null when
 * the pin would exceed the limit.
 */
export function togglePin(pinned: readonly string[], id: string, maxPins = 0): string[] | null {
  const without = pinned.filter(item => item !== id)
  if (without.length !== pinned.length) return without
  if (maxPins > 0 && pinned.length >= maxPins) return null
  return [id, ...pinned]
}

/**
 * Resolve the anchor for moving one pinned entity to the top of its ordered
 * list (insert-before semantics).
 * @param orderedIds - the ordered ids of one account/list.
 * @param id - the entity to move.
 * @returns the id to insert before, or undefined when the entity is already
 * first or absent from the list.
 */
export function topAnchor(orderedIds: readonly string[], id: string): string | undefined {
  const index = orderedIds.indexOf(id)
  if (index <= 0) return undefined
  return orderedIds[0]
}

// ── Row emoji ─────────────────────────────────────────────────────────────

/** Whether a candidate value is one shipped emoji char (the only values the store accepts). */
export function isEmojiChar(value: unknown): value is string {
  return typeof value === 'string' && EMOJI_BY_CHAR.has(value)
}

/**
 * Normalize one unknown emoji value: a shipped emoji char, or undefined.
 * Arbitrary strings fail closed — only catalog members can render.
 * @param value - candidate emoji from the settings wire, log, or storage.
 * @returns the accepted char, or undefined.
 */
export function normalizeEmoji(value: unknown): string | undefined {
  return isEmojiChar(value) ? value : undefined
}

/**
 * Normalize an unknown id→emoji map: non-empty string keys only, values kept
 * only when they are shipped emoji chars (an unknown sequence could not render
 * and would only diverge the store).
 * @param value - candidate emoji map from the settings wire or storage.
 * @returns the normalized map.
 */
export function normalizeEmojiMap(value: unknown): Record<string, string> {
  const out: Record<string, string> = {}
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return out
  for (const [key, emoji] of Object.entries(value as Record<string, unknown>)) {
    if (key.length === 0 || !isEmojiChar(emoji)) continue
    out[key] = emoji
  }
  return out
}

/**
 * Normalize the recent-emoji list: shipped chars only, deduplicated, order
 * preserved, capped at {@link MAX_RECENT_EMOJI}.
 * @param value - candidate recents from the settings wire or storage.
 * @returns the normalized list (newest first).
 */
export function normalizeRecentEmoji(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  const seen = new Set<string>()
  const out: string[] = []
  for (const item of value) {
    if (!isEmojiChar(item) || seen.has(item)) continue
    seen.add(item)
    out.push(item)
    if (out.length >= MAX_RECENT_EMOJI) break
  }
  return out
}

/**
 * Remember one freshly picked emoji: move it to the front, dedupe, cap the
 * list. Unknown chars leave the list untouched.
 * @param recent - current normalized recents (newest first).
 * @param emoji - the picked emoji.
 * @returns the next recents list.
 */
export function rememberEmoji(recent: readonly string[], emoji: string): string[] {
  if (!isEmojiChar(emoji)) return [...recent]
  return [emoji, ...recent.filter(item => item !== emoji)].slice(0, MAX_RECENT_EMOJI)
}

/**
 * Drop emoji entries whose ids are absent from the live set (emoji ride
 * entity lifetime; unpinning alone never clears one).
 * @param emoji - normalized id→emoji map.
 * @param liveIds - the ids a ready list currently contains.
 * @returns the pruned map.
 */
export function pruneEmoji(emoji: Record<string, string>, liveIds: ReadonlySet<string>): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [id, char] of Object.entries(emoji)) {
    if (liveIds.has(id)) out[id] = char
  }
  return out
}

// ── Browser-local storage envelope ────────────────────────────────────────

import { emptyBoards, normalizeBoards, normalizeTags, normalizeViews, type BoardRegistry, type SavedView } from './navigator.ts'

/** The complete pin document the browser-local store persists (v4). */
export interface StoredPinsDoc {
  /** Normalized pinned session ids, newest pin first. */
  pinned: string[]
  /** Normalized pinned workspace ids, newest pin first. */
  workspacePinned: string[]
  /** Session id → shipped emoji char. */
  emoji: Record<string, string>
  /** Workspace id → shipped emoji char. */
  workspaceEmoji: Record<string, string>
  /** Recently picked emoji, newest first (capped). */
  recentEmoji: string[]
  /** Pin groups (boards) and their membership. */
  boards: BoardRegistry
  /** Session/workspace id → tags. */
  tags: Record<string, string[]>
  /** Saved filter views (newest last). */
  views: SavedView[]
}

/** Empty document baseline. */
export function emptyStoredPins(): StoredPinsDoc {
  return {
    pinned: [],
    workspacePinned: [],
    emoji: {},
    workspaceEmoji: {},
    recentEmoji: [],
    boards: emptyBoards(),
    tags: {},
    views: [],
  }
}

/** Versioned browser-local storage envelope (v4). */
export interface StoredPinsV4 extends StoredPinsDoc {
  /** Envelope version discriminator. */
  v: 4
}

/**
 * Encode the pin document for browser-local storage. Always writes the
 * versioned envelope so future format changes can migrate.
 * @param doc - the normalized pin document.
 * @returns the JSON document to store.
 */
export function encodeStoredPins(doc: StoredPinsDoc): string {
  const payload: StoredPinsV4 = {
    v: 4,
    pinned: [...doc.pinned],
    workspacePinned: [...doc.workspacePinned],
    emoji: { ...doc.emoji },
    workspaceEmoji: { ...doc.workspaceEmoji },
    recentEmoji: normalizeRecentEmoji(doc.recentEmoji),
    boards: normalizeBoards(doc.boards),
    tags: normalizeTags(doc.tags),
    views: normalizeViews(doc.views),
  }
  return JSON.stringify(payload)
}

/**
 * Decode a stored pin document: the v4 envelope (full navigator data), the
 * v3 envelope (pins + colors + navigator data), the v2 envelope (pins +
 * colors), the v1 envelope (session pins only), or a legacy bare string array
 * from pre-envelope versions. Older documents migrate forward with empty
 * boards/tags/views/emoji; the retired color maps are deliberately NOT
 * carried over (the emoji feature replaced them). Malformed input yields the
 * empty document.
 * @param value - parsed JSON from browser-local storage.
 * @returns the normalized pin document.
 */
export function decodeStoredPins(value: unknown): StoredPinsDoc {
  const empty = emptyStoredPins()
  if (Array.isArray(value)) return { ...empty, pinned: normalizePins(value) }
  if (typeof value === 'object' && value !== null) {
    const candidate = value as {
      v?: unknown
      pinned?: unknown
      workspacePinned?: unknown
      emoji?: unknown
      workspaceEmoji?: unknown
      recentEmoji?: unknown
      boards?: unknown
      tags?: unknown
      views?: unknown
    }
    if (candidate.v === 1 && Array.isArray(candidate.pinned)) {
      return { ...empty, pinned: normalizePins(candidate.pinned) }
    }
    if (candidate.v === 2) {
      return {
        ...empty,
        pinned: normalizePins(candidate.pinned),
        workspacePinned: normalizePins(candidate.workspacePinned),
      }
    }
    if (candidate.v === 3) {
      return {
        ...empty,
        pinned: normalizePins(candidate.pinned),
        workspacePinned: normalizePins(candidate.workspacePinned),
        boards: normalizeBoards(candidate.boards),
        tags: normalizeTags(candidate.tags),
        views: normalizeViews(candidate.views),
      }
    }
    if (candidate.v === 4) {
      return {
        pinned: normalizePins(candidate.pinned),
        workspacePinned: normalizePins(candidate.workspacePinned),
        emoji: normalizeEmojiMap(candidate.emoji),
        workspaceEmoji: normalizeEmojiMap(candidate.workspaceEmoji),
        recentEmoji: normalizeRecentEmoji(candidate.recentEmoji),
        boards: normalizeBoards(candidate.boards),
        tags: normalizeTags(candidate.tags),
        views: normalizeViews(candidate.views),
      }
    }
  }
  return empty
}

/**
 * Drop ids absent from the authoritative live set (deleted or archived
 * entities no longer listed), preserving order.
 * @param pinned - normalized pinned ids.
 * @param liveIds - the ids a ready list currently contains.
 * @returns the pruned list.
 */
export function prunePins(pinned: readonly string[], liveIds: ReadonlySet<string>): string[] {
  return pinned.filter(id => liveIds.has(id))
}

/**
 * Plan the moves that re-assert one ordered list's pinned prefix: pinned
 * entities must sit at the list front in pin-recency order (newest pin
 * first). Returns ids to move, oldest pin first, so sequential
 * insert-before-front calls end with the newest pin first. Empty when the
 * front already matches, or no pinned id lives in the list.
 * @param orderedIds - the ordered ids of one list.
 * @param pinned - normalized pinned ids, newest pin first.
 * @returns ids to move, oldest pin first.
 */
export function reorderMoves(orderedIds: readonly string[], pinned: readonly string[]): string[] {
  const present = pinned.filter(id => orderedIds.includes(id))
  if (present.length === 0) return []
  // The list head must be exactly the pinned prefix in pin order.
  const head = orderedIds.slice(0, present.length)
  const inOrder = head.length === present.length
    && head.every((id, index) => id === present[index])
  if (inOrder) return []
  return [...present].reverse()
}
