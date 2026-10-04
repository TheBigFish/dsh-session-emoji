// @vitest-environment jsdom
// SPDX-License-Identifier: Apache-2.0
/**
 * The anchored emoji picker: rendering (search box, recents strip, category
 * tabs, grid), selection semantics (pick, clear-by-repicking, toggle), search
 * filtering, keyboard navigation, and dismissal (outside click, Esc, anchor
 * disconnect, dispose).
 *
 * @module dsh-session-emoji/test/emoji-picker.test
 */
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createEmojiPicker, type EmojiPickerFace } from '../src/emoji-picker.ts'
import { categoryRows } from '../src/emoji-catalog.ts'
import type { PinKey, PinTranslate } from '../src/faces.ts'
import {
  PICKER_CLASS, PICKER_GRID_CLASS, PICKER_HEADING_CLASS, PICKER_HINT_CLASS,
  PICKER_OPTION_ACTIVE_CLASS, PICKER_OPTION_CLASS, PICKER_OPTION_SELECTED_CLASS,
  PICKER_SEARCH_CLASS, PICKER_TAB_ACTIVE_CLASS, PICKER_TAB_CLASS, PICKER_TABS_CLASS,
} from '../src/pin-ui-shared.ts'

const SMILE = '😀'
const ROCKET = '🚀'

/** Copy the picker reads; every other key falls back to the key itself. */
const LABELS: Partial<Record<PinKey, string>> = {
  emojiPickerTitle: 'CHOOSE',
  emojiSearch: 'SEARCH',
  emojiRecent: 'RECENT',
  emojiNoResults: 'NOTHING',
  emojiMore: 'MORE',
  categorySmileys: 'SMILEYS',
  categoryPeople: 'PEOPLE',
  categoryAnimals: 'ANIMALS',
  categoryFood: 'FOOD',
  categoryTravel: 'TRAVEL',
  categoryActivities: 'ACTIVITY',
  categoryObjects: 'OBJECTS',
  categorySymbols: 'SYMBOLS',
}

const T: PinTranslate = key => LABELS[key] ?? key

interface Harness {
  picker: EmojiPickerFace
  anchor: HTMLButtonElement
  picks: Array<string | null>
  /** Open the picker over the anchor and return the popover root. */
  open(current?: string, recent?: readonly string[]): HTMLDivElement
}

let harnesses: Harness[] = []

function makeHarness(): Harness {
  const picks: Array<string | null> = []
  let recent: readonly string[] = []
  const picker = createEmojiPicker({
    doc: document,
    t: T,
    recent: () => recent,
  })
  const anchor = document.createElement('button')
  anchor.type = 'button'
  document.body.append(anchor)
  const harness: Harness = {
    picker,
    anchor,
    picks,
    open(current, nextRecent) {
      recent = nextRecent ?? []
      picker.open(anchor, current, (emoji) => {
        picks.push(emoji)
      })
      return document.querySelector<HTMLDivElement>(`.${PICKER_CLASS}`)!
    },
  }
  return harness
}

/** Flush one timer generation (the picker's reflow fallback). */
const tick = async (): Promise<void> => new Promise(resolve => setTimeout(resolve, 30))

function options(root: HTMLElement): HTMLButtonElement[] {
  return [...root.querySelectorAll<HTMLButtonElement>(`.${PICKER_OPTION_CLASS}`)]
}

function search(root: HTMLElement): HTMLInputElement {
  return root.querySelector<HTMLInputElement>(`.${PICKER_SEARCH_CLASS}`)!
}

function type(root: HTMLElement, value: string): void {
  const input = search(root)
  input.value = value
  input.dispatchEvent(new Event('input'))
}

beforeEach(() => {
  harnesses = []
})

afterEach(() => {
  for (const harness of harnesses) {
    harness.picker.dispose()
    harness.anchor.remove()
  }
  harnesses = []
})

function make(): Harness {
  const harness = makeHarness()
  harnesses.push(harness)
  return harness
}

describe('createEmojiPicker rendering', () => {
  it('renders the search box, category tabs, and the first category grid', () => {
    const harness = make()
    const root = harness.open()
    expect(document.body.contains(root)).toBe(true)
    expect(search(root).getAttribute('placeholder')).toBe('SEARCH')
    expect(search(root).getAttribute('aria-label')).toBe('SEARCH')
    expect(root.getAttribute('aria-label')).toBe('CHOOSE')
    expect(document.activeElement).toBe(search(root))
    const tabs = [...root.querySelectorAll<HTMLButtonElement>(`.${PICKER_TAB_CLASS}`)]
    expect(tabs).toHaveLength(8)
    expect(tabs[0]?.textContent).toBe('SMILEYS')
    expect(tabs[0]?.classList.contains(PICKER_TAB_ACTIVE_CLASS)).toBe(true)
    const grid = root.querySelector<HTMLElement>(`.${PICKER_GRID_CLASS}`)
    expect(grid?.getAttribute('role')).toBe('listbox')
    expect(options(root)).toHaveLength(categoryRows(0).length)
    expect(options(root)[0]?.dataset.emoji).toBe(categoryRows(0)[0]?.[0])
    expect(root.querySelector(`.${PICKER_HEADING_CLASS}`)).toBeNull()
    // First option carries the keyboard highlight.
    expect(options(root)[0]?.classList.contains(PICKER_OPTION_ACTIVE_CLASS)).toBe(true)
    expect(search(root).getAttribute('aria-activedescendant')).toBe('dsh-session-emoji-option-0')
  })

  it('renders the recents strip ahead of the category grid when recents exist', () => {
    const harness = make()
    const root = harness.open(undefined, [ROCKET, SMILE])
    expect(root.querySelector(`.${PICKER_HEADING_CLASS}`)?.textContent).toBe('RECENT')
    const all = options(root)
    expect(all[0]?.dataset.emoji).toBe(ROCKET)
    expect(all[1]?.dataset.emoji).toBe(SMILE)
    expect(all[2]?.dataset.emoji).toBe(categoryRows(0)[0]?.[0])
  })

  it('marks the current emoji as selected', () => {
    const harness = make()
    const root = harness.open(SMILE)
    const selected = options(root).find(option => option.dataset.emoji === SMILE)!
    expect(selected.classList.contains(PICKER_OPTION_SELECTED_CLASS)).toBe(true)
    expect(selected.getAttribute('aria-selected')).toBe('true')
  })

  it('switches category grids from the tabs', () => {
    const harness = make()
    const root = harness.open()
    const tabs = [...root.querySelectorAll<HTMLButtonElement>(`.${PICKER_TAB_CLASS}`)]
    tabs[3]!.click()
    // The tab strip is re-rendered, so re-query instead of reusing the stale nodes.
    const after = [...root.querySelectorAll<HTMLButtonElement>(`.${PICKER_TAB_CLASS}`)]
    expect(after[3]!.classList.contains(PICKER_TAB_ACTIVE_CLASS)).toBe(true)
    expect(after[0]!.classList.contains(PICKER_TAB_ACTIVE_CLASS)).toBe(false)
    const rows = categoryRows(3)
    expect(options(root)).toHaveLength(rows.length)
    expect(options(root)[0]?.dataset.emoji).toBe(rows[0]?.[0])
  })
})

describe('createEmojiPicker selection', () => {
  it('reports the picked emoji and closes', () => {
    const harness = make()
    const root = harness.open()
    options(root)[0]!.click()
    expect(harness.picks).toEqual([categoryRows(0)[0]?.[0]])
    expect(harness.picker.isOpen()).toBe(false)
    expect(document.body.contains(root)).toBe(false)
  })

  it('clicking the anchor current emoji reports null (the clear affordance)', () => {
    const harness = make()
    const root = harness.open(SMILE)
    options(root).find(option => option.dataset.emoji === SMILE)!.click()
    expect(harness.picks).toEqual([null])
    expect(harness.picker.isOpen()).toBe(false)
  })

  it('picks from the recents strip', () => {
    const harness = make()
    const root = harness.open(undefined, [ROCKET])
    options(root)[0]!.click()
    expect(harness.picks).toEqual([ROCKET])
  })
})

describe('createEmojiPicker search', () => {
  it('filters by name/keyword and keeps the exact pasted emoji first', () => {
    const harness = make()
    const root = harness.open()
    type(root, 'rocket')
    expect(options(root).some(option => option.dataset.emoji === ROCKET)).toBe(true)
    expect(root.querySelector(`.${PICKER_TABS_CLASS}`)).toBeNull()
    type(root, ROCKET)
    expect(options(root)).toHaveLength(1)
    expect(options(root)[0]?.dataset.emoji).toBe(ROCKET)
  })

  it('shows the empty hint when nothing matches', () => {
    const harness = make()
    const root = harness.open()
    type(root, 'zzzzqqqxyzzy')
    expect(options(root)).toEqual([])
    expect(root.querySelector(`.${PICKER_HINT_CLASS}`)?.textContent).toBe('NOTHING')
    expect(search(root).hasAttribute('aria-activedescendant')).toBe(false)
  })

  it('shows the more hint when matches exceed the render cap', () => {
    const harness = make()
    const root = harness.open()
    type(root, 'face')
    const hints = [...root.querySelectorAll<HTMLElement>(`.${PICKER_HINT_CLASS}`)]
    expect(hints.map(hint => hint.textContent)).toContain('MORE')
  })

  it('clears the filter when reopened', () => {
    const harness = make()
    const root = harness.open()
    type(root, 'rocket')
    harness.picker.close()
    harness.open()
    expect(search(root).value).toBe('')
    expect(root.querySelector(`.${PICKER_TABS_CLASS}`)).not.toBeNull()
  })
})

describe('createEmojiPicker keyboard + dismissal', () => {
  it('moves the highlight with the arrows and picks with Enter', () => {
    const harness = make()
    const root = harness.open()
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    expect(options(root)[1]?.classList.contains(PICKER_OPTION_ACTIVE_CLASS)).toBe(true)
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    expect(options(root)[9]?.classList.contains(PICKER_OPTION_ACTIVE_CLASS)).toBe(true)
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    expect(harness.picks).toEqual([categoryRows(0)[9]?.[0]])
  })

  it('clamps the highlight at the end of the list', () => {
    const harness = make()
    const root = harness.open()
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }))
    expect(options(root)[0]?.classList.contains(PICKER_OPTION_ACTIVE_CLASS)).toBe(true)
  })

  it('Esc closes without picking', () => {
    const harness = make()
    const root = harness.open()
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(harness.picks).toEqual([])
    expect(harness.picker.isOpen()).toBe(false)
  })

  it('an outside click closes; clicking the anchor does not', () => {
    const harness = make()
    harness.open()
    harness.anchor.click()
    expect(harness.picker.isOpen()).toBe(true)
    document.body.click()
    expect(harness.picker.isOpen()).toBe(false)
  })

  it('re-opening on the same anchor toggles the popover closed', () => {
    const harness = make()
    harness.open()
    harness.open()
    expect(harness.picker.isOpen()).toBe(false)
  })

  it('closes at the next reflow once the anchor leaves the document', async () => {
    const harness = make()
    harness.open()
    harness.anchor.remove()
    window.dispatchEvent(new Event('scroll'))
    await tick()
    expect(harness.picker.isOpen()).toBe(false)
  })

  it('dispose removes the popover and the open state', () => {
    const harness = make()
    const root = harness.open()
    harness.picker.dispose()
    expect(document.body.contains(root)).toBe(false)
    expect(harness.picker.isOpen()).toBe(false)
  })
})