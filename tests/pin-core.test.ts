// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest'
import {
  decodeStoredPins, emptyStoredPins, encodeStoredPins, isEmojiChar, MAX_RECENT_EMOJI,
  normalizeEmoji, normalizeEmojiMap, normalizePins, normalizeRecentEmoji, pruneEmoji, prunePins,
  rememberEmoji, reorderMoves, togglePin, topAnchor,
} from '../src/pin-core.ts'
import { EMOJI_BY_CHAR } from '../src/emoji-catalog.ts'

/** Two shipped catalog emoji used across the tests. */
const SMILE = '😀'
const ROCKET = '🚀'

describe('normalizePins', () => {
  it('accepts a plain string array unchanged', () => {
    expect(normalizePins(['a', 'b'])).toEqual(['a', 'b'])
  })

  it('deduplicates keeping first occurrence order', () => {
    expect(normalizePins(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c'])
  })

  it('drops non-string entries and empties', () => {
    expect(normalizePins(['a', 1, null, '', 'b'])).toEqual(['a', 'b'])
  })

  it('returns an empty list for malformed input', () => {
    expect(normalizePins(undefined)).toEqual([])
    expect(normalizePins('a,b')).toEqual([])
    expect(normalizePins({ pinned: ['a'] })).toEqual([])
  })
})

describe('togglePin', () => {
  it('appends an unpinned id to the front', () => {
    expect(togglePin(['a', 'b'], 'c')).toEqual(['c', 'a', 'b'])
  })

  it('removes a pinned id', () => {
    expect(togglePin(['a', 'b'], 'a')).toEqual(['b'])
  })

  it('rejects pinning beyond the limit without blocking unpin', () => {
    expect(togglePin(['a', 'b'], 'c', 2)).toBeNull()
    expect(togglePin(['a', 'b'], 'b', 2)).toEqual(['a'])
  })

  it('treats 0 (and negatives) as unlimited', () => {
    expect(togglePin(['a', 'b'], 'c', 0)).toEqual(['c', 'a', 'b'])
    expect(togglePin(['a', 'b'], 'c', -1)).toEqual(['c', 'a', 'b'])
  })
})

describe('topAnchor', () => {
  it('returns the current first id for a mid-list entity', () => {
    expect(topAnchor(['x', 'y', 'z'], 'z')).toBe('x')
  })

  it('returns undefined when the entity is already first', () => {
    expect(topAnchor(['z', 'x'], 'z')).toBeUndefined()
  })

  it('returns undefined when the entity is absent', () => {
    expect(topAnchor(['x', 'y'], 'ghost')).toBeUndefined()
  })
})

describe('emoji catalog helpers', () => {
  it('ships the sample emoji the tests rely on', () => {
    expect(EMOJI_BY_CHAR.has(SMILE)).toBe(true)
    expect(EMOJI_BY_CHAR.has(ROCKET)).toBe(true)
  })

  it('accepts exactly the shipped catalog chars', () => {
    expect(isEmojiChar(SMILE)).toBe(true)
    expect(isEmojiChar(ROCKET)).toBe(true)
    // Flags and skin-tone variants are deliberately outside the catalog.
    expect(isEmojiChar('🇺🇸')).toBe(false)
    expect(isEmojiChar('👋🏻')).toBe(false)
    expect(isEmojiChar('#f97316')).toBe(false)
    expect(isEmojiChar(undefined)).toBe(false)
    expect(isEmojiChar(7)).toBe(false)
    expect(isEmojiChar('')).toBe(false)
  })

  it('normalizes single emoji values against the catalog', () => {
    expect(normalizeEmoji(SMILE)).toBe(SMILE)
    expect(normalizeEmoji('not-an-emoji')).toBeUndefined()
    expect(normalizeEmoji(null)).toBeUndefined()
  })

  it('normalizes emoji maps to catalog values only', () => {
    expect(normalizeEmojiMap({ a: SMILE, b: '#badbad', c: 1, '': ROCKET })).toEqual({ a: SMILE })
    expect(normalizeEmojiMap('nope')).toEqual({})
    expect(normalizeEmojiMap(['x'])).toEqual({})
    expect(normalizeEmojiMap(null)).toEqual({})
  })

  it('normalizes recents: catalog chars, deduped, capped', () => {
    expect(normalizeRecentEmoji([SMILE, ROCKET, SMILE, 'nope', 7])).toEqual([SMILE, ROCKET])
    expect(normalizeRecentEmoji('nope')).toEqual([])
    const long = Array.from({ length: MAX_RECENT_EMOJI + 4 }, (_, index) => [...EMOJI_BY_CHAR.keys()][index]!)
    expect(normalizeRecentEmoji(long)).toHaveLength(MAX_RECENT_EMOJI)
  })

  it('remembers one pick by moving it to the front and capping the list', () => {
    expect(rememberEmoji([SMILE, ROCKET], ROCKET)).toEqual([ROCKET, SMILE])
    expect(rememberEmoji([SMILE], SMILE)).toEqual([SMILE])
    expect(rememberEmoji([SMILE], 'nope')).toEqual([SMILE])
    const long = Array.from({ length: MAX_RECENT_EMOJI }, (_, index) => [...EMOJI_BY_CHAR.keys()][index]!)
    const next = rememberEmoji(long, ROCKET)
    expect(next).toHaveLength(MAX_RECENT_EMOJI)
    expect(next[0]).toBe(ROCKET)
  })
})

describe('stored-pin envelope', () => {
  const fullDoc = {
    pinned: ['b', 'a'],
    workspacePinned: ['w2', 'w1'],
    emoji: { a: SMILE },
    workspaceEmoji: { w1: ROCKET },
    recentEmoji: [ROCKET, SMILE],
    boards: { byId: { work: { name: 'Work', order: 0 } }, membership: { a: 'work' } },
    tags: { a: ['release', 'research'] },
    views: [{ id: 'v1', name: 'work view', text: '', tags: [], board: 'work' }],
  }

  it('round-trips through the v4 envelope', () => {
    expect(decodeStoredPins(JSON.parse(encodeStoredPins(fullDoc)))).toEqual(fullDoc)
  })

  it('reads the legacy bare array form (session pins only)', () => {
    expect(decodeStoredPins(['a', 'b'])).toEqual({ ...emptyStoredPins(), pinned: ['a', 'b'] })
  })

  it('migrates the v1 envelope (session pins only)', () => {
    expect(decodeStoredPins({ v: 1, pinned: ['a', 'b', 'a', 7] })).toEqual({ ...emptyStoredPins(), pinned: ['a', 'b'] })
  })

  it('migrates v2 payloads and drops the retired color maps', () => {
    expect(decodeStoredPins({
      v: 2,
      pinned: ['a', 'a'],
      workspacePinned: [1, 'w'],
      colors: { a: '#f97316' },
      workspaceColors: { w: '#22c55e' },
    })).toEqual({
      ...emptyStoredPins(),
      pinned: ['a'],
      workspacePinned: ['w'],
    })
  })

  it('migrates v3 payloads (navigator data kept, colors dropped)', () => {
    expect(decodeStoredPins({
      v: 3,
      pinned: ['a'],
      workspacePinned: ['w'],
      colors: { a: '#f97316' },
      boards: { byId: { work: { name: 'Work', order: 0 } }, membership: { a: 'work' } },
      tags: { a: ['x'] },
      views: [{ id: 'v1', name: 'view', text: '', tags: [], board: 'work' }],
    })).toEqual({
      ...emptyStoredPins(),
      pinned: ['a'],
      workspacePinned: ['w'],
      boards: { byId: { work: { name: 'Work', order: 0 } }, membership: { a: 'work' } },
      tags: { a: ['x'] },
      views: [{ id: 'v1', name: 'view', text: '', tags: [], board: 'work' }],
    })
  })

  it('rejects unknown envelope versions and malformed documents', () => {
    expect(decodeStoredPins({ v: 9, pinned: ['a'] })).toEqual(emptyStoredPins())
    expect(decodeStoredPins('a,b')).toEqual(emptyStoredPins())
    expect(decodeStoredPins(null)).toEqual(emptyStoredPins())
    expect(decodeStoredPins({ v: 2 })).toEqual(emptyStoredPins())
  })
})

describe('prunePins', () => {
  it('drops ids absent from the live set, preserving order', () => {
    expect(prunePins(['a', 'b', 'c'], new Set(['a', 'c']))).toEqual(['a', 'c'])
  })

  it('keeps everything when every id is live', () => {
    expect(prunePins(['a', 'b'], new Set(['a', 'b']))).toEqual(['a', 'b'])
  })
})

describe('pruneEmoji', () => {
  it('drops emoji entries for ids absent from the live set', () => {
    expect(pruneEmoji({ a: SMILE, ghost: ROCKET }, new Set(['a']))).toEqual({ a: SMILE })
  })

  it('returns an empty map when nothing matches', () => {
    expect(pruneEmoji({ x: SMILE }, new Set())).toEqual({})
  })
})

describe('reorderMoves', () => {
  it('plans no moves when the pinned prefix already matches pin order', () => {
    expect(reorderMoves(['b', 'a', 'x'], ['b', 'a'])).toEqual([])
  })

  it('plans oldest-first moves so the newest pin ends up front', () => {
    expect(reorderMoves(['x', 'a', 'y', 'b'], ['b', 'a'])).toEqual(['a', 'b'])
  })

  it('moves only the pins present in the account', () => {
    expect(reorderMoves(['x', 'a'], ['b', 'a'])).toEqual(['a'])
  })

  it('plans nothing when no pinned id lives in the account', () => {
    expect(reorderMoves(['x', 'y'], ['b'])).toEqual([])
  })
})
