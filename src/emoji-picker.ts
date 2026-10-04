// SPDX-License-Identifier: Apache-2.0
/**
 * The anchored emoji picker: one popover shared by the DOM overlay and the
 * React row-slot surface, so both paths offer exactly the same control.
 *
 * Layout: a search input (auto-focused, filtering across zh/en names and
 * keywords), a "recently used" strip, category tabs, and an 8-column grid.
 * Keyboard: arrow keys move the highlight (search keeps focus), Enter picks,
 * Esc closes; clicking the option matching the anchor's current emoji clears
 * it, which is the pointer equivalent of Shift+clicking the row button.
 *
 * Positioning is `position: fixed` next to the anchor button, clamped to the
 * viewport, re-measured on scroll/resize, and closed the moment the anchor
 * leaves the document (the sidebar re-renders rows constantly).
 *
 * @module dsh-session-emoji/emoji-picker
 */
import { EMOJI_CATEGORIES, type EmojiRow } from './emoji-data.ts'
import { categoryRows, emojiLabel, emojiRow, searchEmoji } from './emoji-catalog.ts'
import type { PinKey, PinTranslate } from './faces.ts'
import {
  PICKER_BODY_CLASS, PICKER_CLASS, PICKER_GRID_CLASS, PICKER_HEADING_CLASS, PICKER_HINT_CLASS,
  PICKER_OPTION_ACTIVE_CLASS, PICKER_OPTION_CLASS, PICKER_OPTION_SELECTED_CLASS,
  PICKER_SEARCH_CLASS, PICKER_TAB_ACTIVE_CLASS, PICKER_TAB_CLASS, PICKER_TABS_CLASS,
} from './pin-ui-shared.ts'

/** Dependencies of the picker component. */
export interface EmojiPickerDeps {
  /** The document the popover attaches to. */
  doc: Document
  /** Translate one dictionary key. */
  t: PinTranslate
  /** Current recents, newest first (read on every render). */
  recent: () => readonly string[]
}

/** Picker face the row surfaces consume. */
export interface EmojiPickerFace {
  /**
   * Open the picker anchored to one button (calling it again for the same
   * anchor toggles it closed). The callback receives the picked emoji, or
   * null when the current emoji was clicked again.
   */
  open(anchor: HTMLElement, current: string | undefined, onPick: (emoji: string | null) => void): void
  /** Close the picker (no-op when already closed). */
  close(): void
  /** Whether the popover is currently in the document. */
  isOpen(): boolean
  /** Remove the popover and every listener. */
  dispose(): void
}

/** Grid columns (arrow-key stride). */
const COLUMNS = 8

/** Category id → locale key (the tabs' labels). */
const CATEGORY_KEYS: Record<string, PinKey> = {
  smileys: 'categorySmileys',
  people: 'categoryPeople',
  animals: 'categoryAnimals',
  food: 'categoryFood',
  travel: 'categoryTravel',
  activities: 'categoryActivities',
  objects: 'categoryObjects',
  symbols: 'categorySymbols',
}

/** One option's DOM id: `data-index`-addressed for keyboard moves. */
const optionId = (index: number): string => `dsh-session-emoji-option-${String(index)}`

/**
 * Build the picker component.
 * @param deps - document, translate, and the recents feed.
 * @returns the picker face.
 */
export function createEmojiPicker(deps: EmojiPickerDeps): EmojiPickerFace {
  const { doc, t } = deps
  const win = doc.defaultView ?? undefined

  let root: HTMLDivElement | undefined
  let search: HTMLInputElement | undefined
  let body: HTMLDivElement | undefined
  let anchor: HTMLElement | undefined
  let current: string | undefined
  let onPick: ((emoji: string | null) => void) | undefined
  let query = ''
  /** Category tab selection persists for the session, not across reloads. */
  let categoryIndex = 0
  let visible: readonly EmojiRow[] = []
  let activeIndex = -1
  let listening = false
  let reflowFrame = false

  /** Build the detached popover shell once (content is rendered per open). */
  const build = (): void => {
    if (root !== undefined) return
    root = doc.createElement('div')
    root.className = PICKER_CLASS
    root.setAttribute('role', 'dialog')
    root.setAttribute('aria-modal', 'false')
    search = doc.createElement('input')
    search.type = 'search'
    search.className = PICKER_SEARCH_CLASS
    search.setAttribute('autocomplete', 'off')
    search.addEventListener('input', () => {
      query = search?.value ?? ''
      render()
    })
    root.addEventListener('keydown', onKeyDown)
    body = doc.createElement('div')
    body.className = PICKER_BODY_CLASS
    root.append(search, body)
  }

  /** Replace the body with the current query / category view. */
  const render = (): void => {
    if (root === undefined || body === undefined) return
    root.setAttribute('aria-label', t('emojiPickerTitle'))
    search?.setAttribute('placeholder', t('emojiSearch'))
    search?.setAttribute('aria-label', t('emojiSearch'))
    body.textContent = ''
    if (query.trim() !== '') {
      const result = searchEmoji(query)
      visible = result.rows
      if (result.rows.length === 0) body.append(hint(t('emojiNoResults')))
      else body.append(grid(result.rows, 0))
      if (result.total > result.rows.length) body.append(hint(t('emojiMore')))
      setActive(result.rows.length > 0 ? 0 : -1)
      return
    }
    const recentRows = deps.recent().map(char => emojiRow(char)).filter((row): row is EmojiRow => row !== undefined)
    const rows = categoryRows(categoryIndex)
    visible = recentRows.length === 0 ? rows : [...recentRows, ...rows]
    body.append(tabs())
    if (recentRows.length > 0) body.append(heading(t('emojiRecent')), grid(recentRows, 0))
    body.append(grid(rows, recentRows.length))
    setActive(visible.length > 0 ? 0 : -1)
  }

  /** The category tab strip. */
  const tabs = (): HTMLDivElement => {
    const strip = doc.createElement('div')
    strip.className = PICKER_TABS_CLASS
    EMOJI_CATEGORIES.forEach((category, index) => {
      const tab = doc.createElement('button')
      tab.type = 'button'
      tab.className = index === categoryIndex ? `${PICKER_TAB_CLASS} ${PICKER_TAB_ACTIVE_CLASS}` : PICKER_TAB_CLASS
      const key = CATEGORY_KEYS[category.id]
      tab.textContent = key === undefined ? category.en : t(key)
      tab.title = category.en
      tab.addEventListener('click', () => {
        categoryIndex = index
        render()
      })
      strip.append(tab)
    })
    return strip
  }

  /** One heading row (recents). */
  const heading = (label: string): HTMLDivElement => {
    const element = doc.createElement('div')
    element.className = PICKER_HEADING_CLASS
    element.textContent = label
    return element
  }

  /** One non-interactive hint row. */
  const hint = (label: string): HTMLDivElement => {
    const element = doc.createElement('div')
    element.className = PICKER_HINT_CLASS
    element.textContent = label
    return element
  }

  /** One option grid; `offset` is the grid's position within the visible list. */
  const grid = (rows: readonly EmojiRow[], offset: number): HTMLDivElement => {
    const element = doc.createElement('div')
    element.className = PICKER_GRID_CLASS
    element.setAttribute('role', 'listbox')
    rows.forEach((row, index) => {
      const listIndex = offset + index
      const option = doc.createElement('button')
      option.type = 'button'
      option.className = row[0] === current ? `${PICKER_OPTION_CLASS} ${PICKER_OPTION_SELECTED_CLASS}` : PICKER_OPTION_CLASS
      option.textContent = row[0]
      option.title = emojiLabel(row)
      option.setAttribute('aria-label', emojiLabel(row))
      option.setAttribute('role', 'option')
      option.setAttribute('aria-selected', String(row[0] === current))
      option.id = optionId(listIndex)
      option.dataset.index = String(listIndex)
      option.dataset.emoji = row[0]
      option.addEventListener('click', () => {
        choose(row[0])
      })
      element.append(option)
    })
    return element
  }

  /** Move the keyboard highlight (clamped to the visible list). */
  const setActive = (index: number): void => {
    if (root === undefined) return
    if (visible.length === 0 || index < 0) {
      activeIndex = -1
      search?.removeAttribute('aria-activedescendant')
      return
    }
    activeIndex = Math.min(index, visible.length - 1)
    const cell = root.querySelector<HTMLElement>(`[data-index="${String(activeIndex)}"]`)
    for (const previous of root.querySelectorAll(`.${PICKER_OPTION_ACTIVE_CLASS}`)) previous.classList.remove(PICKER_OPTION_ACTIVE_CLASS)
    cell?.classList.add(PICKER_OPTION_ACTIVE_CLASS)
    search?.setAttribute('aria-activedescendant', optionId(activeIndex))
    if (cell !== null && typeof cell.scrollIntoView === 'function') cell.scrollIntoView({ block: 'nearest' })
  }

  /** Keyboard handling: arrows move, Enter picks, Esc closes. */
  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      close()
      return
    }
    if (event.key === 'Enter') {
      const row = visible[activeIndex]
      if (row === undefined) return
      event.preventDefault()
      choose(row[0])
      return
    }
    const stride = event.key === 'ArrowDown' ? COLUMNS
      : event.key === 'ArrowUp' ? -COLUMNS
      : event.key === 'ArrowRight' ? 1
      : event.key === 'ArrowLeft' ? -1
      : 0
    if (stride === 0) return
    event.preventDefault()
    setActive(activeIndex + stride)
  }

  /** Pick one emoji: clicking the anchor's current emoji clears it. */
  const choose = (char: string): void => {
    const chosen = char === current ? null : char
    const callback = onPick
    close()
    callback?.(chosen)
  }

  /** Place the popover next to the anchor, clamped to the viewport. */
  const position = (): void => {
    if (root === undefined || anchor === undefined) return
    const rect = anchor.getBoundingClientRect()
    const width = root.offsetWidth > 0 ? root.offsetWidth : 296
    const height = root.offsetHeight > 0 ? root.offsetHeight : 360
    const vw = win?.innerWidth ?? 1024
    const vh = win?.innerHeight ?? 768
    let left = rect.left
    let top = rect.bottom + 4
    if (left < 8) left = 8
    if (left + width > vw - 8) left = Math.max(8, vw - width - 8)
    if (top + height > vh - 8) top = Math.max(8, rect.top - height - 4)
    root.style.left = `${String(Math.round(left))}px`
    root.style.top = `${String(Math.round(top))}px`
  }

  /** Coalesced re-measure on scroll/resize. */
  const reflow = (): void => {
    if (reflowFrame) return
    reflowFrame = true
    const run = (): void => {
      reflowFrame = false
      if (anchor !== undefined && !anchor.isConnected) {
        close()
        return
      }
      position()
    }
    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(run)
    else setTimeout(run, 0)
  }

  /** Document-level dismissal: outside click; scroll/resize re-anchoring. */
  const onDocumentClick = (event: MouseEvent): void => {
    const target = event.target
    if (!(target instanceof Node)) return
    if (root?.contains(target) === true) return
    if (anchor !== undefined && (target === anchor || anchor.contains(target))) return
    close()
  }

  const listen = (): void => {
    if (listening) return
    listening = true
    doc.addEventListener('click', onDocumentClick, true)
    win?.addEventListener('scroll', reflow, true)
    win?.addEventListener('resize', reflow)
  }

  const unlisten = (): void => {
    if (!listening) return
    listening = false
    doc.removeEventListener('click', onDocumentClick, true)
    win?.removeEventListener('scroll', reflow, true)
    win?.removeEventListener('resize', reflow)
  }

  const open = (nextAnchor: HTMLElement, nextCurrent: string | undefined, nextOnPick: (emoji: string | null) => void): void => {
    if (anchor === nextAnchor && root?.isConnected === true) {
      close()
      return
    }
    close()
    build()
    anchor = nextAnchor
    current = nextCurrent
    onPick = nextOnPick
    query = ''
    if (search !== undefined) search.value = ''
    if (root !== undefined) doc.body.append(root)
    render()
    position()
    listen()
    search?.focus()
  }

  const close = (): void => {
    unlisten()
    root?.remove()
    anchor = undefined
    current = undefined
    onPick = undefined
    visible = []
    activeIndex = -1
    // Focus is intentionally left where the caller had it: the anchor button
    // keeps its own tab stop and the row keeps its highlight state.
  }

  return {
    open,
    close,
    isOpen: () => root?.isConnected === true,
    dispose: () => {
      close()
      root?.remove()
      root = undefined
      search = undefined
      body = undefined
    },
  }
}