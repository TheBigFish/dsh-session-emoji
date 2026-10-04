// SPDX-License-Identifier: Apache-2.0
/**
 * Runtime index over the generated emoji dataset: the whitelist state
 * validation consults, per-category slices for the picker tabs, and the
 * zh/en search. Everything is derived from `emoji-data.ts` at module load —
 * no I/O, no DOM, no framework.
 * @module dsh-session-emoji/emoji-catalog
 */
import { EMOJI_CATEGORIES, EMOJI_ROWS, type EmojiRow } from './emoji-data.ts'

/** Every shipped emoji char, keyed to its row (state validation + label lookup). */
export const EMOJI_BY_CHAR: ReadonlyMap<string, EmojiRow> = new Map(EMOJI_ROWS.map(row => [row[0], row]))

/** The picker's live search-result cap: every match is rendered in one pass. */
export const EMOJI_SEARCH_LIMIT = 120

/** Lower-case search haystacks: both names plus the keyword tail, one per row. */
const HAYSTACKS: readonly string[] = EMOJI_ROWS.map(row => `${row[1]} ${row[2]} ${row[3].replaceAll('|', ' ')}`.toLowerCase())

/** Rows grouped by category index (picker tabs), in Unicode order. */
const BY_CATEGORY: readonly (readonly EmojiRow[])[] = EMOJI_CATEGORIES.map((_, index) => EMOJI_ROWS.filter(row => row[4] === index))

/** One row's display label: Chinese name first, English appended when they differ. */
export function emojiLabel(row: EmojiRow): string {
  return row[2] === row[1] ? row[1] : `${row[2]} · ${row[1]}`
}

/** The rows of one category, in Unicode order (empty for an unknown index). */
export function categoryRows(index: number): readonly EmojiRow[] {
  return BY_CATEGORY[index] ?? []
}

/** Resolve one row by char (the recent strip and selected-state rendering). */
export function emojiRow(char: string): EmojiRow | undefined {
  return EMOJI_BY_CHAR.get(char)
}

/** One search outcome plus the unclipped match count (drives the "more" hint). */
export interface EmojiSearchResult {
  /** The capped, ordered matches. */
  readonly rows: readonly EmojiRow[]
  /** The full match count before the cap. */
  readonly total: number
}

/**
 * Search emoji by zh/en name or keyword: every whitespace-separated token must
 * appear in a row's haystack. A query that is itself one shipped emoji char
 * matches that emoji first (paste-to-find).
 * @param query - raw search input.
 * @returns the capped matching rows plus the full match count.
 */
export function searchEmoji(query: string): EmojiSearchResult {
  const trimmed = query.trim()
  if (trimmed === '') return { rows: EMOJI_ROWS, total: EMOJI_ROWS.length }
  const tokens = trimmed.toLowerCase().split(/\s+/u)
  const rows: EmojiRow[] = []
  const exact = EMOJI_BY_CHAR.get(trimmed)
  if (exact !== undefined) rows.push(exact)
  let total = rows.length
  for (let index = 0; index < EMOJI_ROWS.length; index++) {
    const row = EMOJI_ROWS[index]
    if (row === undefined || row === exact) continue
    const haystack = HAYSTACKS[index]
    if (haystack === undefined || !tokens.every(token => haystack.includes(token))) continue
    total += 1
    if (rows.length < EMOJI_SEARCH_LIMIT) rows.push(row)
  }
  return { rows, total }
}