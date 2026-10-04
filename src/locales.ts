// SPDX-License-Identifier: Apache-2.0
/**
 * Plugin copy: the `session-emoji` locale namespace (dictionary keys merged
 * into the slot system's LocaleNamespaceMap so the typed `bind`/`register`
 * faces check every key), the zh/en dictionaries, and the English fallback
 * used when no locale service is mounted in the composition.
 * @module dsh-session-emoji/locales
 */
import type {} from '@deepseek-ai/dsh-client-ui-slots'
import type { PinKey } from './faces.ts'

/** Namespace owning this plugin's copy. */
export const LOCALE_NS = 'session-emoji'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    'session-emoji': PinKey
  }
}

/** English dictionary (also the fallback translate and the zh-miss chain tail). */
export const ENGLISH: Record<PinKey, string> = {
  pin: 'Pin session',
  unpin: 'Unpin session',
  limit: 'Pin limit reached; unpin another session first',
  pinWorkspace: 'Pin workspace',
  unpinWorkspace: 'Unpin workspace',
  limitWorkspace: 'Workspace pin limit reached; unpin another workspace first',
  emojiPick: 'Select emoji (Shift+click to clear)',
  emojiPickerTitle: 'Choose an emoji',
  emojiSearch: 'Search emoji…',
  emojiRecent: 'Recently used',
  emojiNoResults: 'No matching emoji',
  emojiMore: 'More matches — keep typing to narrow the list',
  categorySmileys: 'Smileys',
  categoryPeople: 'People',
  categoryAnimals: 'Animals',
  categoryFood: 'Food',
  categoryTravel: 'Travel',
  categoryActivities: 'Activity',
  categoryObjects: 'Objects',
  categorySymbols: 'Symbols',
  panelTitle: 'Pinned sessions',
  panelEmpty: 'Nothing pinned yet',
  panelSessions: 'Sessions',
  panelWorkspaces: 'Workspaces',
  footerTitle: 'Pinned sessions',
  ungrouped: 'Ungrouped',
  manageRow: 'Assign board or tags',
  boardLabel: 'Board',
  tagsLabel: 'Tags',
  save: 'Save',
  close: 'Close',
}

/** Complete zh/en dictionaries for the locale registry. */
export const LOCALE_DICTS: { zh: Record<PinKey, string>; en: Record<PinKey, string> } = {
  zh: {
    pin: '置顶会话',
    unpin: '取消置顶',
    limit: '已达置顶上限，请先取消其他会话',
    pinWorkspace: '置顶工作区',
    unpinWorkspace: '取消工作区置顶',
    limitWorkspace: '已达工作区置顶上限，请先取消其他工作区',
    emojiPick: '选择表情（Shift+点击清除）',
    emojiPickerTitle: '选择表情',
    emojiSearch: '搜索表情…',
    emojiRecent: '最近使用',
    emojiNoResults: '没有匹配的表情',
    emojiMore: '结果过多，继续输入以缩小范围',
    categorySmileys: '笑脸',
    categoryPeople: '人物',
    categoryAnimals: '动物',
    categoryFood: '食物',
    categoryTravel: '旅行',
    categoryActivities: '活动',
    categoryObjects: '物品',
    categorySymbols: '符号',
    panelTitle: '已置顶的会话',
    panelEmpty: '还没有置顶任何内容',
    panelSessions: '会话',
    panelWorkspaces: '工作区',
    footerTitle: '已置顶的会话',
    ungrouped: '未分组',
    manageRow: '归组或设置标签',
    boardLabel: '分组',
    tagsLabel: '标签',
    save: '保存',
    close: '关闭',
  },
  en: ENGLISH,
}

/** English fallback translate (compositions without the locale service). */
export const fallbackTranslate: (key: PinKey) => string = key => ENGLISH[key]
