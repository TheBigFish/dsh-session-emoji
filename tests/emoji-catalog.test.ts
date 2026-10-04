// SPDX-License-Identifier: Apache-2.0
/**
 * Catalog invariants for the generated emoji dataset plus the runtime index:
 * lookups, category slices, labels, and the zh/en search (cap + exact-char
 * paste-to-find). The dataset itself is checked in; these tests pin the
 * properties the rest of the plugin relies on rather than exact counts.
 *
 * @module dsh-session-emoji/test/emoji-catalog.test
 */
import { describe, expect, it } from 'vitest'
import { EMOJI_CATEGORIES, EMOJI_ROWS } from '../src/emoji-data.ts'
import {
  EMOJI_BY_CHAR, EMOJI_SEARCH_LIMIT, categoryRows, emojiLabel, emojiRow, searchEmoji,
} from '../src/emoji-catalog.ts'

const SMILE = '😀'
const ROCKET = '🚀'

describe('shipped emoji dataset', () => {
  it('carries unique chars with five columns each and in-range category indices', () => {
    const seen = new Set<string>()
    for (const row of EMOJI_ROWS) {
      expect(row).toHaveLength(5)
      expect(row[0].length).toBeGreaterThan(0)
      expect(row[1].length).toBeGreaterThan(0)
      expect(row[2].length).toBeGreaterThan(0)
      expect(Number.isInteger(row[4])).toBe(true)
      expect(row[4]).toBeGreaterThanOrEqual(0)
      expect(row[4]).toBeLessThan(EMOJI_CATEGORIES.length)
      expect(seen.has(row[0]), `duplicate emoji ${row[0]}`).toBe(false)
      seen.add(row[0])
    }
    expect(EMOJI_BY_CHAR.size).toBe(EMOJI_ROWS.length)
  })

  it('excludes flags, skin-tone variants, and the component group', () => {
    for (const row of EMOJI_ROWS) {
      expect(/\p{Regional_Indicator}/u.test(row[0]), `flag sequence ${row[0]}`).toBe(false)
      expect(/\p{Emoji_Modifier}/u.test(row[0]), `skin-tone sequence ${row[0]}`).toBe(false)
    }
    expect(EMOJI_BY_CHAR.has('🇺🇸')).toBe(false)
    expect(EMOJI_BY_CHAR.has('👋🏻')).toBe(false)
    expect(EMOJI_CATEGORIES.some(category => category.id === 'flags' || category.id === 'components')).toBe(false)
  })

  it('keeps common sequences and every ZWJ family member', () => {
    for (const char of [SMILE, ROCKET, '✅', '❤️', '⭐', '🔥', '❤️‍🔥']) {
      expect(EMOJI_BY_CHAR.has(char), `${char} missing from the catalog`).toBe(true)
    }
  })

  it('covers every row with a non-empty category and an en/zh name', () => {
    let accounted = 0
    EMOJI_CATEGORIES.forEach((category, index) => {
      expect(category.en.length).toBeGreaterThan(0)
      expect(category.zh.length).toBeGreaterThan(0)
      const rows = categoryRows(index)
      expect(rows.length).toBeGreaterThan(0)
      for (const row of rows) expect(row[4]).toBe(index)
      accounted += rows.length
    })
    expect(accounted).toBe(EMOJI_ROWS.length)
    expect(categoryRows(99)).toEqual([])
  })
})

describe('catalog lookups', () => {
  it('resolves rows by char and rejects anything unshipped', () => {
    expect(emojiRow(ROCKET)?.[0]).toBe(ROCKET)
    expect(emojiRow('🇺🇸')).toBeUndefined()
    expect(emojiRow('not-emoji')).toBeUndefined()
    expect(emojiRow('')).toBeUndefined()
  })

  it('labels rows bilingually, falling back to the English name alone', () => {
    expect(emojiLabel(emojiRow(ROCKET)!)).toBe('火箭 · rocket')
    // Rows without a zh annotation repeat the English name; the label then
    // collapses to a single name instead of printing it twice.
    const fallback = EMOJI_ROWS.find(row => row[1] === row[2])
    expect(fallback).toBeDefined()
    expect(emojiLabel(fallback!)).toBe(fallback![1])
  })
})

describe('searchEmoji', () => {
  it('returns the whole catalog for an empty query', () => {
    expect(searchEmoji('')).toEqual({ rows: EMOJI_ROWS, total: EMOJI_ROWS.length })
    expect(searchEmoji('   ').rows).toBe(EMOJI_ROWS)
  })

  it('matches English names and keywords, and zh names', () => {
    expect(searchEmoji('rocket').rows.some(row => row[0] === ROCKET)).toBe(true)
    expect(searchEmoji('火箭').rows.some(row => row[0] === ROCKET)).toBe(true)
    expect(searchEmoji('grinning').rows.some(row => row[0] === SMILE)).toBe(true)
  })

  it('requires every whitespace-separated token to match (AND)', () => {
    expect(searchEmoji('rocket travel').rows.some(row => row[0] === ROCKET)).toBe(true)
    expect(searchEmoji('rocket 没有这样的词').rows).toEqual([])
    expect(searchEmoji('rocket 没有这样的词').total).toBe(0)
  })

  it('puts an exact pasted emoji char first, even though it is not searchable text', () => {
    const result = searchEmoji(ROCKET)
    expect(result.rows[0]?.[0]).toBe(ROCKET)
    expect(result.total).toBeGreaterThanOrEqual(1)
  })

  it('caps the rendered rows while reporting the full match count', () => {
    const result = searchEmoji('face')
    expect(result.total).toBeGreaterThan(EMOJI_SEARCH_LIMIT)
    expect(result.rows).toHaveLength(EMOJI_SEARCH_LIMIT)
  })

  it('returns nothing for a query no row can match', () => {
    expect(searchEmoji('zzzzqqqxyzzy')).toEqual({ rows: [], total: 0 })
  })
})