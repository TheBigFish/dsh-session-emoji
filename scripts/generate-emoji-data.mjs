// SPDX-License-Identifier: Apache-2.0
/**
 * Generate `src/emoji-data.ts` from the Unicode emoji test data and the CLDR
 * annotation files. This script is run BY HAND (never from the build, never
 * from CI): the generated module is checked in so the plugin's runtime stays
 * dependency-free and offline, and the generator stays reproducible for future
 * Unicode/CLDR refreshes.
 *
 * Sources:
 * - https://unicode.org/Public/emoji/latest/emoji-test.txt — the RGI emoji
 *   sequences plus their group/subgroup, ordered as Unicode lists them.
 * - CLDR JSON annotations (en, zh) — short names (`tts`) and keyword
 *   annotations (`default`).
 *
 * Selection policy (agreed in the design review):
 * - only `fully-qualified` sequences (no duplicate minimally-qualified forms);
 * - the `Component` and `Flags` groups are dropped;
 * - every sequence containing a skin-tone modifier (U+1F3FB..U+1F3FF) is
 *   dropped — base emoji plus common ZWJ combinations only.
 *
 * Output format: compact rows `[char, en, zh, keywords, categoryIndex]` with
 * `keywords` a `|`-joined lower-case search haystack tail (zh + en), because
 * the esbuild bundle is not minified and the data rides every page load.
 *
 * Usage: `node scripts/generate-emoji-data.mjs` (network only when the
 * `.cache/` copies are absent). Override the sources with EMOJI_TEST_URL /
 * CLDR_EN_URL / CLDR_ZH_URL.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const CACHE = path.join(root, '.cache')
const OUT = path.join(root, 'src', 'emoji-data.ts')

const EMOJI_TEST_URL = process.env.EMOJI_TEST_URL ?? 'https://unicode.org/Public/emoji/latest/emoji-test.txt'
const CLDR_EN_URL = process.env.CLDR_EN_URL ?? 'https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json/cldr-annotations-full/annotations/en/annotations.json'
const CLDR_ZH_URL = process.env.CLDR_ZH_URL ?? 'https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json/cldr-annotations-full/annotations/zh/annotations.json'

/** Download one source into `.cache/` (or reuse the cached copy). */
async function source(url, file) {
  const cached = path.join(CACHE, file)
  if (existsSync(cached)) return readFileSync(cached, 'utf8')
  const response = await fetch(url)
  if (!response.ok) throw new Error(`fetch ${url}: HTTP ${String(response.status)}`)
  const text = await response.text()
  mkdirSync(CACHE, { recursive: true })
  writeFileSync(cached, text)
  return text
}

// ── Unicode emoji-test.txt ─────────────────────────────────────────────────

/** Category ids in Unicode group order; rows carry the index. */
const CATEGORIES = [
  { id: 'smileys', en: 'Smileys & Emotion', zh: '笑脸与情感' },
  { id: 'people', en: 'People & Body', zh: '人物与身体' },
  { id: 'animals', en: 'Animals & Nature', zh: '动物与自然' },
  { id: 'food', en: 'Food & Drink', zh: '食物与饮品' },
  { id: 'travel', en: 'Travel & Places', zh: '旅行与地点' },
  { id: 'activities', en: 'Activities', zh: '活动' },
  { id: 'objects', en: 'Objects', zh: '物品' },
  { id: 'symbols', en: 'Symbols', zh: '符号' },
]
const GROUP_TO_CATEGORY = new Map(CATEGORIES.map((category, index) => [category.en, index]))
const EXCLUDED_GROUPS = new Set(['Component', 'Flags'])
const SKIN_TONES = new Set(['1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'])

/** One parsed fully-qualified emoji-test row. */
function parseEmojiTest(text) {
  const rows = []
  let group = ''
  let version = ''
  let date = ''
  for (const line of text.split('\n')) {
    const header = /^#\s+Version:\s+(\S+)/u.exec(line)
    if (header !== null) version = header[1]
    const dated = /^#\s+Date:\s+(.+)$/u.exec(line)
    if (dated !== null) date = dated[1].trim()
    const groupLine = /^#\s+group:\s+(.+)$/u.exec(line)
    if (groupLine !== null) {
      group = groupLine[1].trim()
      continue
    }
    const match = /^([0-9A-F ]+)\s*;\s*(\S+)\s*#\s*(\S+)\s+E[\d.]+\s+(.+)$/u.exec(line)
    if (match === null) continue
    if (match[2] !== 'fully-qualified') continue
    const codePoints = match[1].trim().split(/\s+/u)
    if (codePoints.some(point => SKIN_TONES.has(point))) continue
    if (EXCLUDED_GROUPS.has(group)) continue
    const category = GROUP_TO_CATEGORY.get(group)
    if (category === undefined) continue
    rows.push({ codePoints, char: match[3], name: match[4].trim(), category })
  }
  return { rows, version, date }
}

// ── CLDR annotations ───────────────────────────────────────────────────────

/** Flatten one CLDR annotations document into a code-point-keyed map. */
function annotations(parsed) {
  const map = new Map()
  const table = parsed?.annotations?.annotations
  if (typeof table !== 'object' || table === null) throw new Error('unexpected CLDR annotations shape')
  for (const [key, value] of Object.entries(table)) {
    if (typeof value !== 'object' || value === null) continue
    map.set(key, {
      tts: Array.isArray(value.tts) ? value.tts.filter(item => typeof item === 'string') : [],
      keywords: Array.isArray(value.default) ? value.default.filter(item => typeof item === 'string') : [],
    })
  }
  return map
}

/** Look one emoji up in a CLDR map, tolerating VS16 spelling differences. */
function lookup(map, char) {
  const direct = map.get(char)
  if (direct !== undefined) return direct
  const stripped = char.replace(/\uFE0F/gu, '')
  return map.get(stripped)
}

/** Cap + dedupe keyword annotations, dropping tokens equal to the name. */
function keywords(list, name, cap = 4) {
  const seen = new Set()
  const out = []
  for (const item of list) {
    const token = item.trim()
    const key = token.toLowerCase()
    if (token === '' || key === name.toLowerCase() || seen.has(key)) continue
    seen.add(key)
    out.push(key)
    if (out.length >= cap) break
  }
  return out
}

// ── Emit ───────────────────────────────────────────────────────────────────

const emojiTest = await source(EMOJI_TEST_URL, 'emoji-test.txt')
const { rows, version, date } = parseEmojiTest(emojiTest)
const en = annotations(JSON.parse(await source(CLDR_EN_URL, 'annotations-en.json')))
const zh = annotations(JSON.parse(await source(CLDR_ZH_URL, 'annotations-zh.json')))
const fetched = new Date().toISOString().slice(0, 10)

const entries = rows.map((row) => {
  const enAnnotation = lookup(en, row.char)
  const zhAnnotation = lookup(zh, row.char)
  const nameEn = enAnnotation?.tts[0] ?? row.name
  const nameZh = zhAnnotation?.tts[0] ?? nameEn
  const words = [
    ...keywords(zhAnnotation?.keywords ?? [], nameZh),
    ...keywords(enAnnotation?.keywords ?? [], nameEn),
  ]
  return [row.char, nameEn, nameZh, words.join('|'), row.category]
})

const header = [
  '// SPDX-License-Identifier: Apache-2.0',
  '/**',
  ` * Generated by scripts/generate-emoji-data.mjs from Unicode ${version} emoji-test.txt`,
  ` * (${date}) plus CLDR JSON annotations (en, zh; fetched ${fetched}). DO NOT EDIT BY HAND —`,
  ' * run `pnpm run emoji:generate` to refresh.',
  ' *',
  ' * Rows are `[char, English name, Chinese name, keywords, categoryIndex]`; keywords are a',
  ' * `|`-joined lower-case zh+en search tail (the two names are joined in at search time, so',
  ' * nothing is duplicated in the bundle). Skin-tone variants, flags, and non-fully-qualified',
  ' * sequences are excluded by the generator.',
  ' *',
  ' * Unicode data is used under the Unicode License v3; CLDR JSON under the Unicode License.',
  ' * See THIRD_PARTY_NOTICES.md.',
  ' */',
  '',
  `export const EMOJI_DATA_VERSION = ${JSON.stringify(`Unicode ${version} + CLDR (${fetched})`)}`,
  '',
  '/** One emoji row: char, English name, Chinese name, keyword tail, category index. */',
  'export type EmojiRow = readonly [string, string, string, string, number]',
  '',
  '/** One picker category (Unicode group order; row category indexes point here). */',
  'export interface EmojiCategory {',
  '  readonly id: string',
  '  readonly en: string',
  '  readonly zh: string',
  '}',
  '',
  '/** The shipped categories, in Unicode group order. */',
  `export const EMOJI_CATEGORIES: readonly EmojiCategory[] = ${JSON.stringify(CATEGORIES, null, 2)}`,
  '',
  '/** Every shipped emoji row, in Unicode listing order within each category. */',
  'export const EMOJI_ROWS: readonly EmojiRow[] = [',
  ...entries.map(entry => `  [${entry.map(item => JSON.stringify(item)).join(', ')}],`),
  ']',
  '',
].join('\n')

writeFileSync(OUT, header)
console.log(`generated ${OUT}: ${String(entries.length)} emoji across ${String(CATEGORIES.length)} categories, Unicode ${version}`)