// SPDX-License-Identifier: Apache-2.0
/**
 * Plugin-owned UI constants: badge/control class names (hashed core CSS never
 * shares them), the shared pushpin glyph, the row emoji-button classes, and
 * the one injected stylesheet covering the row badges, the emoji button, the
 * emoji picker popover, the session-header toggle, the sidebar foot action,
 * and the overlay panel.
 * @module dsh-session-emoji/pin-ui-shared
 */

/** Row badge classes (DOM overlay). */
export const BADGE_CLASS = '__dsh-session-emoji-badge__'
/** Pinned-state class shared by every plugin control. */
export const PINNED_CLASS = '__dsh-session-emoji-pinned__'
/** Session-header toggle button. */
export const HEADER_CLASS = '__dsh-session-emoji-header__'
/** Sidebar foot action. */
export const FOOTER_CLASS = '__dsh-session-emoji-footer__'
/** Overlay panel root. */
export const PANEL_CLASS = '__dsh-session-emoji-panel__'
/** Overlay panel row (one pinned session/workspace). */
export const PANEL_ROW_CLASS = '__dsh-session-emoji-panel-row__'
/** Overlay panel section heading. */
export const PANEL_SECTION_CLASS = '__dsh-session-emoji-panel-section__'
/** Overlay panel row emoji slot (read-only). */
export const PANEL_EMOJI_CLASS = '__dsh-session-emoji-panel-emoji__'
/** Overlay panel board-group header (collapsible). */
export const PANEL_GROUP_CLASS = '__dsh-session-emoji-panel-group__'
/** Overlay panel board-group toggle chevron. */
export const PANEL_GROUP_TOGGLE_CLASS = '__dsh-session-emoji-panel-group-toggle__'
/** Per-row manage button (assign board / edit tags). */
export const MANAGE_CLASS = '__dsh-session-emoji-manage__'
/** Inline per-row board/tag editor. */
export const PANEL_EDITOR_CLASS = '__dsh-session-emoji-editor__'
/** Row-level controls wrapper ([pin][emoji]) stamped by both render paths. */
export const ROW_CONTROLS_CLASS = '__dsh-session-emoji-row-controls__'
/** Emoji button rendered after the pin badge (the picker anchor). */
export const EMOJI_BUTTON_CLASS = '__dsh-session-emoji-emoji__'
/** Emoji picker popover root. */
export const PICKER_CLASS = '__dsh-session-emoji-picker__'
/** Emoji picker search input. */
export const PICKER_SEARCH_CLASS = '__dsh-session-emoji-picker-search__'
/** Emoji picker category tab strip. */
export const PICKER_TABS_CLASS = '__dsh-session-emoji-picker-tabs__'
/** One emoji picker category tab. */
export const PICKER_TAB_CLASS = '__dsh-session-emoji-picker-tab__'
/** Active emoji picker category tab. */
export const PICKER_TAB_ACTIVE_CLASS = '__dsh-session-emoji-picker-tab-active__'
/** Emoji picker scrollable body. */
export const PICKER_BODY_CLASS = '__dsh-session-emoji-picker-body__'
/** Emoji picker section heading (recents). */
export const PICKER_HEADING_CLASS = '__dsh-session-emoji-picker-heading__'
/** Emoji picker option grid. */
export const PICKER_GRID_CLASS = '__dsh-session-emoji-picker-grid__'
/** One emoji option button. */
export const PICKER_OPTION_CLASS = '__dsh-session-emoji-picker-option__'
/** Keyboard-highlighted emoji option. */
export const PICKER_OPTION_ACTIVE_CLASS = '__dsh-session-emoji-picker-option-active__'
/** Emoji option matching the anchor's current emoji. */
export const PICKER_OPTION_SELECTED_CLASS = '__dsh-session-emoji-picker-option-selected__'
/** Emoji picker hint row (no results / more results). */
export const PICKER_HINT_CLASS = '__dsh-session-emoji-picker-hint__'

/** Inline pushpin glyph — Lucide-style stroke icon (currentColor). */
export const PIN_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>'

const CONTROL_STYLE = [
  'all:unset;display:inline-flex;align-items:center;justify-content:center;',
  'cursor:pointer;border-radius:4px;color:#8b949e;',
  'transition:color 120ms ease,background-color 120ms ease;',
  'box-sizing:border-box;flex:none;',
].join('')

/** One injected stylesheet for every plugin-owned surface. */
export const STYLE_TEXT = [
  // Row controls wrapper: the [pin][emoji] pair, hidden until row hover /
  // pinned / decorated / keyboard focus.
  `span.${ROW_CONTROLS_CLASS}{display:inline-flex;align-items:center;gap:2px;margin-right:4px;flex:none;}`,
  `button.${BADGE_CLASS}{`,
  CONTROL_STYLE,
  'width:16px;height:16px;opacity:0;',
  'transition:opacity 80ms ease,color 120ms ease,background-color 120ms ease;',
  '}',
  `button.${EMOJI_BUTTON_CLASS}{`,
  CONTROL_STYLE,
  'width:16px;height:16px;opacity:0;position:relative;font-size:12px;line-height:1;',
  'transition:opacity 80ms ease,color 120ms ease,background-color 120ms ease;',
  '}',
  // Empty-circle placeholder until an emoji is set (the color-era affordance).
  `button.${EMOJI_BUTTON_CLASS}::after{`,
  'content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);',
  'width:9px;height:9px;border-radius:50%;',
  'border:1.5px solid currentColor;background-color:transparent;',
  '}',
  `[role="treeitem"]:hover button.${BADGE_CLASS},`,
  `[role="treeitem"]:hover button.${EMOJI_BUTTON_CLASS},`,
  `button.${BADGE_CLASS}.${PINNED_CLASS},`,
  `button.${BADGE_CLASS}:focus-visible,`,
  `button.${EMOJI_BUTTON_CLASS}:focus-visible,`,
  `button.${EMOJI_BUTTON_CLASS}[data-emoji]{opacity:1;}`,
  // A set emoji replaces the placeholder and renders at glyph size.
  `button.${EMOJI_BUTTON_CLASS}[data-emoji]::after{display:none;}`,
  `button.${BADGE_CLASS}:hover{color:#57606a;background-color:rgba(140,149,159,.12);}`,
  `button.${EMOJI_BUTTON_CLASS}:hover{color:#57606a;background-color:rgba(140,149,159,.12);}`,
  `button.${BADGE_CLASS}.${PINNED_CLASS}{color:#eab308;}`,
  `button.${BADGE_CLASS}.${PINNED_CLASS}:hover{color:#fbbf24;background-color:rgba(234,179,8,.12);}`,
  // Session-header toggle: always visible, amber while pinned.
  `button.${HEADER_CLASS}{`,
  CONTROL_STYLE,
  'width:24px;height:24px;',
  '}',
  `button.${HEADER_CLASS}:hover{color:#57606a;background-color:rgba(140,149,159,.12);}`,
  `button.${HEADER_CLASS}:focus-visible{outline:2px solid #3884ff;outline-offset:1px;}`,
  `button.${HEADER_CLASS}.${PINNED_CLASS}{color:#eab308;background-color:rgba(234,179,8,.12);}`,
  // Sidebar foot action.
  `button.${FOOTER_CLASS}{`,
  CONTROL_STYLE,
  'gap:6px;width:100%;height:28px;padding:0 8px;font-size:12px;',
  '}',
  `button.${FOOTER_CLASS}:hover{color:#57606a;background-color:rgba(140,149,159,.12);}`,
  `button.${FOOTER_CLASS}:focus-visible{outline:2px solid #3884ff;outline-offset:1px;}`,
  // Overlay panel: floats over the frame; opts back into pointer events.
  `div.${PANEL_CLASS}{`,
  'position:fixed;top:48px;right:12px;width:280px;max-height:60vh;overflow:auto;',
  'background:#1f2428;border:1px solid #30363d;border-radius:8px;',
  'box-shadow:0 8px 24px rgba(0,0,0,.4);padding:8px;pointer-events:auto;',
  'color:#e6edf3;font-size:13px;z-index:1000;',
  '}',
  `div.${PANEL_SECTION_CLASS}{`,
  'padding:4px 8px 2px;font-size:11px;letter-spacing:.4px;color:#8b949e;',
  'text-transform:uppercase;',
  '}',
  `div.${PANEL_ROW_CLASS}{`,
  'display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:6px;',
  'cursor:pointer;',
  '}',
  `div.${PANEL_ROW_CLASS}:hover{background:rgba(140,149,159,.12);}`,
  // Panel row emoji slot: read-only; empty circle when the row has no emoji.
  `span.${PANEL_EMOJI_CLASS}{width:14px;height:14px;flex:none;display:inline-flex;`,
  'align-items:center;justify-content:center;font-size:13px;line-height:1;',
  '}',
  `span.${PANEL_EMOJI_CLASS}::after{`,
  'content:"";width:9px;height:9px;border-radius:50%;',
  'border:1.5px solid #8b949e;background-color:transparent;',
  '}',
  `span.${PANEL_EMOJI_CLASS}[data-emoji]::after{display:none;}`,
  // Board-group header: collapsible, uppercase like the section headings.
  `button.${PANEL_GROUP_CLASS}{`,
  'all:unset;display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;',
  'padding:3px 8px;border-radius:6px;cursor:pointer;font-size:11px;letter-spacing:.4px;',
  'text-transform:uppercase;color:#8b949e;',
  '}',
  `button.${PANEL_GROUP_CLASS}:hover{background:rgba(140,149,159,.12);color:#e6edf3;}`,
  `span.${PANEL_GROUP_TOGGLE_CLASS}{width:12px;text-align:center;flex:none;}`,
  // Per-row manage button: hidden until the row hovers / is keyboard focused.
  `button.${MANAGE_CLASS}{`,
  CONTROL_STYLE,
  'width:16px;height:16px;margin-left:auto;opacity:0;font-size:12px;',
  '}',
  `div.${PANEL_ROW_CLASS}:hover button.${MANAGE_CLASS},`,
  `button.${MANAGE_CLASS}:focus-visible{opacity:1;}`,
  `button.${MANAGE_CLASS}:hover{color:#e6edf3;background-color:rgba(140,149,159,.12);}`,
  // Inline per-row board/tag editor.
  `div.${PANEL_EDITOR_CLASS}{`,
  'display:flex;flex-direction:column;gap:4px;padding:6px 8px;margin:0 4px 4px;',
  'border:1px solid #30363d;border-radius:6px;background:#10151b;',
  '}',
  `div.${PANEL_EDITOR_CLASS} select,div.${PANEL_EDITOR_CLASS} input{`,
  'all:unset;box-sizing:border-box;width:100%;padding:3px 6px;border-radius:4px;',
  'background:#1f2428;border:1px solid #3d444d;color:#e6edf3;font-size:12px;',
  '}',
  `div.${PANEL_EDITOR_CLASS} label{font-size:10px;color:#8b949e;letter-spacing:.4px;text-transform:uppercase;}`,
  // Emoji picker popover: anchored, above every other plugin surface.
  `div.${PICKER_CLASS}{`,
  'position:fixed;z-index:1100;width:296px;box-sizing:border-box;',
  'background:#1f2428;border:1px solid #30363d;border-radius:8px;',
  'box-shadow:0 8px 24px rgba(0,0,0,.45);padding:8px;color:#e6edf3;font-size:13px;',
  '}',
  `input.${PICKER_SEARCH_CLASS}{`,
  'all:unset;box-sizing:border-box;width:100%;padding:5px 8px;border-radius:6px;',
  'background:#10151b;border:1px solid #3d444d;color:#e6edf3;font-size:12px;',
  '}',
  `input.${PICKER_SEARCH_CLASS}::placeholder{color:#8b949e;}`,
  `input.${PICKER_SEARCH_CLASS}:focus-visible{outline:2px solid #3884ff;outline-offset:1px;}`,
  `div.${PICKER_TABS_CLASS}{display:flex;gap:2px;overflow-x:auto;margin:6px 0 2px;}`,
  `button.${PICKER_TAB_CLASS}{`,
  'all:unset;flex:none;padding:2px 6px;border-radius:6px;cursor:pointer;',
  'font-size:11px;color:#8b949e;white-space:nowrap;',
  '}',
  `button.${PICKER_TAB_CLASS}:hover{color:#e6edf3;background:rgba(140,149,159,.12);}`,
  `button.${PICKER_TAB_CLASS}:focus-visible{outline:2px solid #3884ff;outline-offset:1px;}`,
  `button.${PICKER_TAB_CLASS}.${PICKER_TAB_ACTIVE_CLASS}{color:#eab308;background:rgba(234,179,8,.12);}`,
  `div.${PICKER_BODY_CLASS}{max-height:320px;overflow-y:auto;}`,
  `div.${PICKER_HEADING_CLASS}{`,
  'padding:4px 2px 2px;font-size:10px;letter-spacing:.4px;',
  'text-transform:uppercase;color:#8b949e;',
  '}',
  `div.${PICKER_GRID_CLASS}{display:grid;grid-template-columns:repeat(8,1fr);gap:2px;}`,
  `button.${PICKER_OPTION_CLASS}{`,
  'all:unset;box-sizing:border-box;width:100%;height:30px;display:inline-flex;',
  'align-items:center;justify-content:center;font-size:17px;line-height:1;',
  'border-radius:6px;cursor:pointer;',
  '}',
  `button.${PICKER_OPTION_CLASS}:hover{background:rgba(140,149,159,.16);}`,
  `button.${PICKER_OPTION_CLASS}.${PICKER_OPTION_ACTIVE_CLASS}{background:rgba(140,149,159,.2);outline:1px solid #3d444d;}`,
  `button.${PICKER_OPTION_CLASS}.${PICKER_OPTION_SELECTED_CLASS}{background:rgba(234,179,8,.16);outline:1px solid #eab308;}`,
  `div.${PICKER_HINT_CLASS}{padding:6px 2px;font-size:11px;color:#8b949e;}`,
].join('')