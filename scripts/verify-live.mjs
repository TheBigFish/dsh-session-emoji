// SPDX-License-Identifier: Apache-2.0
/**
 * Live verification of dsh-session-emoji against a running `dsh web`:
 * 1. opens the GUI through the authenticated URL (a `?token=` launch URL mints
 *    the browser session cookie; a loopback server without auth also works);
 * 2. asserts the boot manifest carries the plugin and its client bundle is served;
 * 3. drives a headless Chromium session: creates/uses a benign demo session,
 *    checks the duplicate-pin regression (one [pin][emoji] pair per session
 *    row), hovers a session row (gray pin + placeholder emoji circle), pins it
 *    (amber pin + moved to the top of its workspace account), opens the emoji
 *    picker, picks an emoji through its search (the row button shows the
 *    glyph), re-opens the picker and clicks the selected emoji to clear it,
 *    sets it again, clears it with Shift+click, sets it once more for the
 *    persistence pass, toggles the pin through the session-header button,
 *    opens the sidebar panel (which shows the row emoji), checks workspace
 *    header rows carry [pin][emoji] controls, reloads, and re-asserts both the
 *    pin and the emoji survived;
 * 4. writes results.json (including the DSH version under test) plus cropped
 *    element screenshots for the README.
 *
 * Run against the running GUI: `node scripts/verify-live.mjs`.
 * `DSH_BASE_URL` overrides the clean base URL (default http://127.0.0.1:3080);
 * `DSH_AUTH_URL` supplies the launch URL carrying the `?token=` query when the
 * server enforces browser authentication, and `DSH_AUTH_COOKIE` /
 * `DSH_AUTH_COOKIE_FILE` seed an already-minted `dsh-auth-*` browser-session
 * cookie instead (useful when the process launch token is no longer available).
 * `DSH_CHROMIUM` pins the browser executable when the cached Playwright build
 * does not match this Playwright version. The harness checkout resolves from
 * DSH_CHECKOUT, defaulting to the plugin's own repository parent (three levels
 * up). All state (frames, results) lands under the gitignored verify-live/ dir.
 */
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { join, resolve } from 'node:path'

const BASE = process.env.DSH_BASE_URL ?? 'http://127.0.0.1:3080'
const AUTH_URL = process.env.DSH_AUTH_URL ?? `${BASE}/`
const PLUGIN_ID = 'dsh-session-emoji'
const BADGE = 'button.__dsh-session-emoji-badge__'
const EMOJI = 'button.__dsh-session-emoji-emoji__'
const PICKER = 'div.__dsh-session-emoji-picker__'
const PICKER_SEARCH = 'input.__dsh-session-emoji-picker-search__'
const PICKER_OPTION = 'button.__dsh-session-emoji-picker-option__'
const PICKER_SELECTED = '__dsh-session-emoji-picker-option-selected__'
const PANEL_EMOJI = 'span.__dsh-session-emoji-panel-emoji__'
const HEADER = 'button.__dsh-session-emoji-header__'
const FOOTER = 'button.__dsh-session-emoji-footer__'
const PANEL = 'div.__dsh-session-emoji-panel__'
const PINNED = '__dsh-session-emoji-pinned__'
/** The emoji the live pass picks (travel/searchable, stable across releases). */
const DEMO_EMOJI = '🚀'
const OUT_DIR = fileURLToPath(new URL('../verify-live/', import.meta.url))
mkdirSync(OUT_DIR, { recursive: true })

// Harness checkout: explicit env, then the plugin's own repository parent
// (scripts → dsh-session-emoji → Plugins → Project → checkout).
const CHECKOUT = resolve(process.env.DSH_CHECKOUT ?? fileURLToPath(new URL('../../../../', import.meta.url)))
const CHECKOUT_PKG = join(CHECKOUT, 'package.json')
if (!existsSync(CHECKOUT_PKG)) {
  console.error(`DSH checkout not found at ${CHECKOUT} (set DSH_CHECKOUT)`)
  process.exit(1)
}
const DSH_VERSION = JSON.parse(readFileSync(CHECKOUT_PKG, 'utf8')).version ?? 'unknown'

const results = { dshVersion: DSH_VERSION, baseUrl: BASE, steps: [], ok: true }
const log = (message) => {
  results.steps.push(message)
  console.log(message)
}
const fail = (message) => {
  results.ok = false
  results.error = message
  console.error('FAIL:', message)
  process.exitCode = 1
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// ── headless browser + browser session ─────────────────────────────────────
// Playwright comes from the harness checkout's apps/web; when the checkout is
// a pruned/CI-less tree without it, fall back to this plugin's own install.
let requireWeb
try {
  requireWeb = createRequire(join(CHECKOUT, 'apps/web/package.json'))
  requireWeb.resolve('playwright')
} catch {
  requireWeb = createRequire(import.meta.url)
}
const { chromium } = requireWeb('playwright')
// `DSH_CHROMIUM` points at an already-installed browser binary when the local
// Playwright build expects a revision that is not in the browser cache.
const executablePath = process.env.DSH_CHROMIUM
/**
 * Dismiss the first-run dialogs a fresh DSH home shows (API-key prompt, welcome
 * tour). Their modal mask intercepts pointer events, so every interaction pass
 * after a page load has to clear them first — the dialog mounts a moment after
 * the sidebar, and a declined key form can hand over to a tour, so this retries
 * until the mask stays gone.
 * @param log - step logger.
 */
async function dismissFirstRun(log) {
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const maskVisible = await page.evaluate(() =>
      [...document.querySelectorAll('[class*="_mask_"]')].some((node) => node.getBoundingClientRect().width > 0))
    if (!maskVisible) {
      if (attempt >= 2) return
      await page.waitForTimeout(1000)
      continue
    }
    let clicked = false
    for (const label of ['稍后配置', '跳过', '继续', '知道了', '完成']) {
      const dismiss = page.locator(`button:text-is("${label}")`).first()
      if (await dismiss.count() === 0) continue
      if (!(await dismiss.isVisible().catch(() => false))) continue
      await dismiss.click({ timeout: 5000 }).catch(() => {})
      await page.waitForTimeout(1200)
      log(`step ui: dismissed first-run dialog "${label}"`)
      clicked = true
      break
    }
    if (!clicked) await page.waitForTimeout(1000)
  }
  log('step ui: WARN a modal mask is still present')
}

const browser = await chromium.launch({ headless: true, ...(executablePath !== undefined && executablePath.length > 0 ? { executablePath } : {}) })
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })

// Optional pre-minted browser-session cookie (`name=value`), for hosts where the
// process launch token is gone and only the persisted signing secret remains.
const cookieFile = process.env.DSH_AUTH_COOKIE_FILE
const authCookie = process.env.DSH_AUTH_COOKIE ?? (cookieFile !== undefined && existsSync(cookieFile) ? readFileSync(cookieFile, 'utf8').trim() : undefined)
if (authCookie !== undefined && authCookie.length > 0) {
  const at = authCookie.indexOf('=')
  if (at <= 0) fail('DSH_AUTH_COOKIE must be a name=value pair')
  await context.addCookies([{ name: authCookie.slice(0, at), value: authCookie.slice(at + 1), url: BASE }])
  log(`step auth: seeded a browser-session cookie for ${new URL(BASE).host}`)
}

const page = await context.newPage()

try {
  // 1 ── authenticate + gateway readiness ───────────────────────────────────
  // A launch URL carrying the process token answers 303 and mints the cookie
  // for this context; requests below reuse the context's cookie jar (whether
  // that cookie came from the token exchange or from DSH_AUTH_COOKIE_FILE).
  let indexHtml = ''
  await page.goto(authCookie === undefined ? AUTH_URL : `${BASE}/`, { waitUntil: 'domcontentloaded', timeout: 120000 })
  let ready = false
  for (let attempt = 0; attempt < 120; attempt += 1) {
    try {
      const response = await context.request.get(`${BASE}/`)
      if (response.ok()) {
        indexHtml = await response.text()
        if (indexHtml.includes('__DSH_BOOT__')) { ready = true; break }
      }
    } catch { /* not listening yet */ }
    await sleep(1000)
  }
  if (!ready) {
    const body = indexHtml.length > 0 ? indexHtml : await page.content().catch(() => '')
    if (/authentication required/u.test(body)) {
      fail('the GUI enforces browser authentication: pass DSH_AUTH_URL with the ?token= launch URL or DSH_AUTH_COOKIE_FILE')
    } else {
      fail('gateway never became ready on the base URL')
    }
  } else {
    log(`step gateway: ready (DSH ${DSH_VERSION})`)
  }

  const boot = indexHtml.includes(PLUGIN_ID)
  log(`step boot-manifest: plugin ${boot ? 'present' : 'MISSING'}`)
  if (!boot) fail('boot manifest does not include the plugin')

  // The host may serve the client half from the combined `plugins/??` route;
  // prefer the URL the boot manifest itself carries and keep the plain
  // per-plugin path as a fallback for older layouts.
  const entryMatch = indexHtml.match(new RegExp(`"id":"${PLUGIN_ID}","url":"([^"]+)"`, 'u'))
  const bundleUrlText = entryMatch?.[1]?.replaceAll('&amp;', '&')
  const bundleUrl = bundleUrlText !== undefined ? `${BASE}/${bundleUrlText}` : `${BASE}/plugins/${PLUGIN_ID}/client.js`
  const bundleResponse = await context.request.get(bundleUrl)
  const bundleText = bundleResponse.ok() ? await bundleResponse.text() : ''
  const bundleIsEmojiBuild = bundleText.includes('__dsh-session-emoji-picker__')
  const bundleIsLegacy = bundleText.includes('__dsh-session-emoji-swatch__')
  log(`step client-bundle: HTTP ${bundleResponse.status()}, emoji build: ${bundleIsEmojiBuild ? 'yes' : 'no'}`)
  if (!bundleResponse.ok()) fail(`client bundle not served at ${bundleUrl}`)
  else if (!bundleIsEmojiBuild || bundleIsLegacy) fail('the served bundle is not the emoji build (stale install)')

  // 2 ── row controls: [pin][emoji] on session rows ─────────────────────────
  const rows = page.locator('[role="treeitem"]')
  await rows.first().waitFor({ state: 'visible', timeout: 120000 })
  log('step ui: session row visible')
  await dismissFirstRun(log)
  // A fresh browser context starts with the workspace groups collapsed.
  const collapsed = page.locator('[role="treeitem"][aria-expanded="false"]')
  for (let index = 0; index < (await collapsed.count()); index += 1) {
    await collapsed.nth(index).click().catch(() => {})
  }
  await page.waitForTimeout(800)

  let target = null
  let badge = null
  let emojiButton = null
  let targetKey = null
  // Session rows carry `aria-selected`; workspace rows carry `aria-expanded`.
  // The target must be a session with content: the bare "new session" entry is
  // also a session row, but it renders no conversation header to toggle.
  // Its `data-row-key` is captured so later steps keep addressing the same
  // session even after pinning reorders the list.
  const sessionRows = page.locator('[role="treeitem"][aria-selected]')
  const emptySessionEntry = /^(?:新会话|新建会话|New session|新建)/iu
  for (let index = 0; index < (await sessionRows.count()); index += 1) {
    const candidate = sessionRows.nth(index)
    const candidateEmoji = candidate.locator(EMOJI)
    if ((await candidateEmoji.count()) === 0) continue
    if (emptySessionEntry.test(((await candidate.textContent()) ?? '').trim())) continue
    const rowKey = await candidate.getAttribute('data-row-key')
    if (rowKey === null || rowKey.length === 0) continue
    // Never clobber a mark the profile owner made: this run sets and clears its
    // own emoji/pin, so it needs a row that starts unmarked.
    if ((await candidate.locator(`${BADGE}.${PINNED}`).count()) > 0) continue
    if ((await candidate.locator(`${EMOJI}[data-emoji]`).count()) > 0) continue
    await candidate.hover()
    const candidateBadge = candidate.locator(BADGE)
    if (await candidateBadge.isVisible() && await candidateEmoji.isVisible()) {
      targetKey = rowKey
      break
    }
  }
  if (targetKey !== null) {
    target = page.locator(`[role="treeitem"][data-row-key="${targetKey}"]`)
    badge = target.locator(BADGE).first()
    emojiButton = target.locator(EMOJI).first()
  }
  // Document-wide badge/emoji queries pick whichever row happens to be first,
  // so every assertion below is scoped to the captured row key.
  const waitRowEmoji = (value) => page.waitForFunction(({ key, emojiClass, value }) => {
    const row = document.querySelector(`[role="treeitem"][data-row-key="${key}"]`)
    return row !== null && row.querySelector(`button.${emojiClass}[data-emoji="${value}"]`) !== null
  }, { key: targetKey, emojiClass: EMOJI.replace('button.', ''), value }, { timeout: 15000 })
  const waitRowEmojiGone = (value) => page.waitForFunction(({ key, emojiClass, value }) => {
    const row = document.querySelector(`[role="treeitem"][data-row-key="${key}"]`)
    return row !== null && row.querySelector(`button.${emojiClass}[data-emoji="${value}"]`) === null
  }, { key: targetKey, emojiClass: EMOJI.replace('button.', ''), value }, { timeout: 15000 })
  if (target === null || badge === null || emojiButton === null) {
    fail('no session row with [pin][emoji] controls found')
  } else {
    const title = (await target.textContent()) ?? 'session'
    log(`step ui: target row "${title.trim().slice(0, 40)}"`)

    // Gray pin + empty-circle placeholder on hover.
    await badge.waitFor({ state: 'visible', timeout: 15000 })
    const placeholderEmpty = await emojiButton.evaluate((button) => !button.hasAttribute('data-emoji'))
    log(`step ui: hover shows the pin badge (emoji placeholder empty: ${placeholderEmpty ? 'yes' : 'no'})`)
    await target.screenshot({ path: join(OUT_DIR, 'demo-hover.png') })

    // Known starting state: a leftover pin or emoji from an earlier run would
    // turn the first toggle into the opposite operation, so normalize both
    // before the assertions below.
    if (await badge.getAttribute('aria-pressed') === 'true') {
      await badge.click()
      await page.waitForTimeout(1500)
    }
    if ((await emojiButton.getAttribute('data-emoji')) !== null) {
      await emojiButton.click({ modifiers: ['Shift'] })
      await page.waitForTimeout(1500)
    }

    // Duplicate-control regression: at most one [pin][emoji] pair per row.
    const controlCounts = await page.evaluate(({ badgeClass, emojiClass }) => {
      const sessionRows = [...document.querySelectorAll('[role="treeitem"][aria-selected]')]
      return sessionRows.map(row => [row.querySelectorAll(`button.${badgeClass}`).length, row.querySelectorAll(`button.${emojiClass}`).length])
    }, { badgeClass: BADGE.replace('button.', ''), emojiClass: EMOJI.replace('button.', '') })
    const duplicated = controlCounts.some(([pins, emojis]) => pins > 1 || emojis > 1)
    if (duplicated) {
      fail(`duplicate row controls on session rows: ${controlCounts.map(pair => pair.join('/')).join(',')}`)
    } else {
      log(`step regression: one [pin][emoji] pair per session row (counts: ${controlCounts.map(pair => pair.join('/')).join(',')})`)
    }

    // Pin it: amber. The row may re-render between hover and click; retry
    // once through a fresh locator when the first attempt leaves it unpinned.
    await badge.click()
    const pinnedWait = async () => page.waitForFunction(({ key, pinClass }) => {
      const row = document.querySelector(`[role="treeitem"][data-row-key="${key}"]`)
      const pin = row === null ? null : row.querySelector(`button.${pinClass}`)
      return pin !== null && pin.classList.contains('__dsh-session-emoji-pinned__')
    }, { key: targetKey, pinClass: BADGE.replace('button.', '') }, { timeout: 8000 })
    try {
      await pinnedWait()
    } catch {
      await page.waitForTimeout(2000)
      await target.locator(BADGE).first().click()
      await pinnedWait()
    }
    log('step ui: badge turned amber (pinned)')
    await target.screenshot({ path: join(OUT_DIR, 'demo-pinned.png') })

    // Emoji picker: search, pick, clear-by-repicking, Shift+click clear.
    await target.hover()
    await emojiButton.click()
    const picker = page.locator(PICKER).first()
    await picker.waitFor({ state: 'visible', timeout: 15000 })
    log('step ui: emoji picker opened from the row button')
    await page.screenshot({ path: join(OUT_DIR, 'demo-picker.png') })
    await picker.locator(PICKER_SEARCH).fill('rocket')
    const option = picker.locator(`${PICKER_OPTION}[data-emoji="${DEMO_EMOJI}"]`).first()
    await option.waitFor({ state: 'visible', timeout: 15000 })
    await option.click()
    await picker.waitFor({ state: 'detached', timeout: 15000 })
    await waitRowEmoji(DEMO_EMOJI)
    log(`step ui: picked ${DEMO_EMOJI} through the picker search`)
    await target.screenshot({ path: join(OUT_DIR, 'demo-emoji.png') })

    // Re-opening marks the current emoji; clicking it clears the row.
    await target.hover()
    await emojiButton.click()
    await picker.waitFor({ state: 'visible', timeout: 15000 })
    const selected = picker.locator(`.${PICKER_SELECTED}`).first()
    await selected.waitFor({ state: 'visible', timeout: 15000 })
    log('step ui: re-opened picker marks the current emoji as selected')
    await selected.click()
    await waitRowEmojiGone(DEMO_EMOJI)
    log('step ui: clicking the selected emoji cleared it')

    // Set it again, then clear with Shift+click.
    await target.hover()
    await emojiButton.click()
    await picker.waitFor({ state: 'visible', timeout: 15000 })
    await picker.locator(PICKER_SEARCH).fill('rocket')
    await option.waitFor({ state: 'visible', timeout: 15000 })
    await option.click()
    await picker.waitFor({ state: 'detached', timeout: 15000 })
    await target.hover()
    await emojiButton.click({ modifiers: ['Shift'] })
    await waitRowEmojiGone(DEMO_EMOJI)
    log('step ui: Shift+click cleared the row emoji')

    // Leave the emoji set for the persistence pass.
    await target.hover()
    await emojiButton.click()
    await picker.waitFor({ state: 'visible', timeout: 15000 })
    await picker.locator(PICKER_SEARCH).fill('rocket')
    await option.waitFor({ state: 'visible', timeout: 15000 })
    await option.click()
    await picker.waitFor({ state: 'detached', timeout: 15000 })
    await waitRowEmoji(DEMO_EMOJI)
    log(`step ui: ${DEMO_EMOJI} set for the reload pass`)

    // Workspace rows: the overlay path must carry [pin][emoji] controls
    // (presence only — clicking would reorder the operator's workspace list).
    const wsRows = page.locator('[role="treeitem"][aria-expanded]')
    let wsControlsFound = false
    for (let index = 0; index < (await wsRows.count()); index += 1) {
      const candidate = wsRows.nth(index)
      if (await candidate.getAttribute('aria-selected') !== null) continue
      if ((await candidate.locator(BADGE).count()) === 1 && (await candidate.locator(EMOJI).count()) === 1) {
        wsControlsFound = true
        break
      }
    }
    if (wsControlsFound) {
      log('step ui: workspace header rows carry [pin][emoji] controls')
      await page.screenshot({ path: join(OUT_DIR, 'demo-workspace.png') })
    } else {
      log('step ui: SKIP workspace header controls (no named workspace row in this home)')
    }

    // Open the session and toggle through the header button (the
    // authoritative sessionId path — no title matching involved). Clicking the
    // row returns the conversation view; if a hit test lands on a control that
    // swallows the event, fall back to a synthetic click on the row itself.
    const headerButton = page.locator(HEADER).first()
    let opened = false
    for (const strategy of ['left', 'mid', 'synthetic']) {
      if (strategy === 'left') await target.click({ position: { x: 40, y: 12 } }).catch(() => {})
      else if (strategy === 'mid') await target.click({ position: { x: 200, y: 12 } }).catch(() => {})
      else await (await target.elementHandle())?.evaluate((element) => element.click()).catch(() => {})
      opened = await headerButton.waitFor({ state: 'visible', timeout: 6000 }).then(() => true, () => false)
      if (opened) break
    }
    if (!opened) fail('the session header control did not render after opening the session')
    await page.waitForFunction((sel) => {
      const button = document.querySelector(sel)
      return button !== null && button.classList.contains('__dsh-session-emoji-pinned__')
    }, HEADER, { timeout: 15000 })
    log('step ui: header toggle shows pinned state for the open session')
    await page.screenshot({ path: join(OUT_DIR, 'demo-header.png') })
    await headerButton.click()
    await page.waitForFunction((sel) => {
      const button = document.querySelector(sel)
      return button !== null && !button.classList.contains('__dsh-session-emoji-pinned__')
    }, HEADER, { timeout: 15000 })
    log('step ui: header toggle unpinned')
    await headerButton.click()
    await page.waitForFunction((sel) => {
      const button = document.querySelector(sel)
      return button !== null && button.classList.contains('__dsh-session-emoji-pinned__')
    }, HEADER, { timeout: 15000 })
    log('step ui: header toggle re-pinned')

    // Sidebar panel: open through the foot action; the pinned row shows the emoji.
    const footer = page.locator(FOOTER).first()
    await footer.click()
    const panel = page.locator(PANEL).first()
    await panel.waitFor({ state: 'visible', timeout: 15000 })
    const panelEmoji = panel.locator(`${PANEL_EMOJI}[data-emoji="${DEMO_EMOJI}"]`).first()
    const panelShowsEmoji = await panelEmoji.count() > 0
    log(`step ui: pinned-sessions panel opened (emoji slot shows ${DEMO_EMOJI}: ${panelShowsEmoji ? 'yes' : 'no'})`)
    if (!panelShowsEmoji) fail('the pinned panel does not show the row emoji')
    await page.screenshot({ path: join(OUT_DIR, 'demo-panel.png') })
    await panel.locator('[role="button"]').first().click()
    await panel.waitFor({ state: 'detached', timeout: 15000 }).catch(() => {})
    log('step ui: panel row jumped to the session and closed')

    // The settings round trip is asynchronous (~1 s per field), and a reload
    // tears the page down and drops whatever the write queue still holds. The
    // footer marks `data-pending` while a commit awaits its Host echo, so wait
    // for acknowledgement before reloading.
    const drainFooter = page.locator(FOOTER).first()
    if (await drainFooter.count() > 0) {
      const acknowledged = await page.waitForFunction((sel) => {
        const button = document.querySelector(sel)
        return button !== null && !button.hasAttribute('data-pending')
      }, FOOTER, { timeout: 30000 }).then(() => true, () => false)
      if (!acknowledged) fail('the Host never acknowledged the queued settings writes')
      log('step persistence: Host acknowledged the queued settings writes')
    } else {
      await page.waitForTimeout(3000)
      log('step persistence: SKIP write-acknowledgement wait (no footer control in this home)')
    }

    // Persistence: reload, no hover, the pin must still be amber and the
    // emoji still on the SAME row (scoped by data-row-key so a stray pinned
    // row elsewhere in the profile can never satisfy the assertion).
    await page.reload({ waitUntil: 'domcontentloaded' })
    await page.waitForTimeout(3000)
    await dismissFirstRun(log)
    const collapsedAfterReload = page.locator('[role="treeitem"][aria-expanded="false"]')
    for (let index = 0; index < (await collapsedAfterReload.count()); index += 1) {
      await collapsedAfterReload.nth(index).click().catch(() => {})
    }
    await page.waitForFunction(({ key, pinClass, emojiClass, value }) => {
      const row = document.querySelector(`[role="treeitem"][data-row-key="${key}"]`)
      if (row === null) return false
      const pin = row.querySelector(`button.${pinClass}`)
      const emoji = row.querySelector(`button.${emojiClass}[data-emoji="${value}"]`)
      return pin !== null && pin.classList.contains('__dsh-session-emoji-pinned__') && emoji !== null
    }, { key: targetKey, pinClass: PINNED, emojiClass: EMOJI.replace('button.', ''), value: DEMO_EMOJI }, { timeout: 60000 })
    log('step persistence: pin and emoji survived reload (settings host mode or localStorage fallback)')
    await target.screenshot({ path: join(OUT_DIR, 'demo-persisted.png') })

    // Cleanup: unpin and clear the emoji so the verification leaves no state.
    await target.hover()
    await target.locator(BADGE).first().click()
    // The badge keeps its own class; the pinned marker leaves it on unpin.
    const unpinned = await page.waitForFunction(({ key, badgeClass, pinClass }) => {
      const row = document.querySelector(`[role="treeitem"][data-row-key="${key}"]`)
      const badge = row?.querySelector(`button.${badgeClass}`)
      return badge !== undefined && badge !== null && !badge.classList.contains(pinClass)
    }, { key: targetKey, badgeClass: BADGE.replace('button.', ''), pinClass: PINNED }, { timeout: 15000 })
      .then(() => true, () => false)
    if (!unpinned) {
      const diagnostics = await target.evaluate((node) => ({
        rowKey: node.getAttribute('data-row-key'),
        role: node.getAttribute('role'),
        selected: node.getAttribute('aria-selected'),
        controls: [...node.querySelectorAll('button')].map(button =>
          `${button.className.replace(/__dsh-session-emoji-|-__/g, '').slice(0, 26)}:${button.getAttribute('aria-pressed')}`),
        pinnedRows: document.querySelectorAll(`button.${'__dsh-session-emoji-pinned__'}`).length,
      })).catch(() => null)
      const selectorHit = await page.evaluate((key) =>
        document.querySelector(`[role="treeitem"][data-row-key="${key}"]`) !== null, targetKey)
      log(`step cleanup: DIAG ${JSON.stringify(diagnostics)} targetKey=${targetKey} selectorHit=${selectorHit}`)
      fail('cleanup: the pin badge stayed pinned after the unpin click')
    } else {
      log('step cleanup: unpin committed')
    }
    await target.hover()
    await target.locator(EMOJI).first().click({ modifiers: ['Shift'] })
    await page.waitForFunction(({ key, emojiClass, value }) => {
      const row = document.querySelector(`[role="treeitem"][data-row-key="${key}"]`)
      return row !== null && row.querySelector(`button.${emojiClass}[data-emoji="${value}"]`) === null
    }, { key: targetKey, emojiClass: EMOJI.replace('button.', ''), value: DEMO_EMOJI }, { timeout: 15000 }).catch(() => {
      fail('cleanup: the row emoji survived the Shift+click')
    })
    log('step cleanup: emoji cleared')
    // Both cleanup writes still have to reach the Host before the browser
    // closes, or the verification leaves its state behind.
    await page.waitForFunction((sel) => {
      const button = document.querySelector(sel)
      return button === null || !button.hasAttribute('data-pending')
    }, FOOTER, { timeout: 30000 }).catch(() => {
      fail('cleanup: the Host never acknowledged the cleanup writes')
    })
    log('step cleanup: unpinned and cleared the row emoji')
  }
} catch (error) {
  fail(`browser step failed: ${String(error)}`)
} finally {
  await browser.close()
}

writeFileSync(join(OUT_DIR, 'results.json'), JSON.stringify(results, null, 2))
console.log(`verify-live done, ok=${results.ok}`)
process.exit(results.ok ? 0 : 1)