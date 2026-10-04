<div align="center">

# 📌 dsh-session-emoji
- **1024 store channel**: `npm i -g dsh1024` once, then `dsh1024 plugin --profile web add dsh-session-emoji` (counts toward the [deepseek1024.com](https://deepseek1024.com) install ranking).
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/TheBigFish/dsh-session-emoji/badge)](https://api.securityscorecards.dev/projects/github.com/TheBigFish/dsh-session-emoji)

**Pin sessions and workspaces to the top of the DeepSeek Harness sidebar, and stamp each one with an emoji you pick.**

*A dual-face (host + browser) plugin: two pin levels, a searchable emoji picker per row (recents, categories, keyboard navigation), and a navigation organizer — boards, tags, saved views, health summaries, and `/goto`.*

> **Fork.** dsh-session-emoji is a fork of [dsh-session-pin](https://github.com/PerryLink/dsh-session-pin) (Apache-2.0): the original project and its pin feature are by [@PerryLink](https://github.com/PerryLink); this fork adds the per-row emoji picker and is maintained at [TheBigFish/dsh-session-emoji](https://github.com/TheBigFish/dsh-session-emoji).

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![DSH plugin](https://img.shields.io/badge/dsh--plugin-✅-green)](https://github.com/topics/dsh-plugin)
[![Node](https://img.shields.io/badge/node-%5E22.19%20%7C%7C%20%3E%3D24-brightgreen.svg)](#)
[![CI](https://img.shields.io/github/actions/workflow/status/TheBigFish/dsh-session-emoji/ci.yml?branch=main&label=CI)](https://github.com/TheBigFish/dsh-session-emoji/actions)
[![Version](https://img.shields.io/github/v/tag/TheBigFish/dsh-session-emoji?label=version)](https://github.com/TheBigFish/dsh-session-emoji/releases)
[![npm version](https://img.shields.io/npm/v/dsh-session-emoji)](https://www.npmjs.com/package/dsh-session-emoji)
[![npm downloads](https://img.shields.io/npm/dm/dsh-session-emoji)](https://www.npmjs.com/package/dsh-session-emoji)

[English](README.md) · [简体中文](README-zh.md) · [Español](README-es.md) · [Português](README-pt.md) · [हिन्दी](README-hi.md)

</div>

---

<!-- star-cta -->
## ⭐ 如果它帮到了你

本分支基于 [DSH 插件家族](https://github.com/PerryLink) 的 dsh-session-pin（家族 40+ 个插件，全部 Apache-2.0）。如果你在用，**给个 star** —— 它不会解锁任何功能，但会让下一个人在搜索里更容易找到它。

*English:* part of a 40+ plugin family for DeepSeek Harness. If it is useful, **a star helps the next person find it** — nothing is gated behind it.


## Screenshots

![Emoji picker](https://raw.githubusercontent.com/TheBigFish/dsh-session-emoji/main/docs/demo-picker.png)

*Pick an emoji from the searchable popover; Shift+click clears the mark.*

## Compatibility

| Surface | Status |
|---|---|
| Harness | DeepSeek Harness `dsh-v0.1.7-rc.2` (GitHub tag; verified 2026-10-04: dual-ruler typecheck + unit/composition suites + static seam checks + a scripted browser pass against a live GUI). npm dependency line `0.1.7-rc.2`, peers `>=0.1.2-rc.1 <0.2.0 \|\| >=0.1.5-alpha.1 <0.2.0 \|\| >=0.1.6-0 <0.2.0 \|\| >=0.1.7-0 <0.2.0`. |
| Node | `>= 22` (development floor) |
| Platforms | Web GUI (dual-face: host + browser) |
| Model | Any (UI-only — no model traffic, no session events) |
| `session/pin` events | Pre-flight-gated: written only when the host's runtime event vocabulary knows the type (the alpha-line append can no longer stamp the `ignorable` marker, so the vocabulary is the single gate signal — adapted 2026-09-18); otherwise the projection degrades to the settings cache and one warning fires before the first write. |

## What you get

`dsh-session-emoji` keeps the conversations that matter at the top of the sidebar and marks them with an emoji so you can find them at a glance:

- **Two pin levels** — pin whole workspaces and individual sessions; a pinned workspace moves to the front of the workspace list and a pinned session to the front of its account.
- **A searchable emoji badge per row** — click the circle after the pin to open an anchored picker: recently used emoji, eight categories, zh/en name and keyword search, and full keyboard navigation (arrows, Enter, Esc). Picking the current emoji again — or Shift+clicking the row button — clears it. One emoji per row, no colors: the row keeps its normal background.
- **Four pin surfaces** — a hover `[pin][emoji]` pair on every row, a pin toggle in the session header, a sidebar foot action with a pinned panel that shows each row's emoji, and per-profile durable state that keeps pins and emoji across restarts.
- **Click-to-open** — clicking a pinned row in the sidebar or the pinned panel opens the session in the current window (the same seam `/goto` uses); both navigate through the host's session-retain channel on the alpha line.
- **Zero core changes** — a standalone plugin for the stock DSH Web GUI; every surface degrades gracefully on older baselines.

```text
┌─ Workspaces ────────────────────────────┐
│ 📌 Workbench                            │  ← pinned workspace
│   📌 🚀 Implement login flow      3h    │  ← pinned session with a picked emoji
│     Fix the auth bug              1h    │  ← hover shows pin + empty emoji circle
│   Refactor the DB layer           2d    │
└─────────────────────────────────────────┘
```

## Navigation organizer

Four browser-local capabilities organize multi-session work on top of pinning. All state rides the same `session-emoji` store (per-browser; nothing is uploaded), and each has a Config switch.

- **Boards** — pins join named groups; the board chip row creates, renames, and deletes boards and drag-reorders them (order persists per-browser), while the pinned panel groups each board's pins under a collapsible header.
- **Tags & views** — entities carry up to 8 tags (≤24 chars each), set per row from the panel's manage button (which also assigns the pin's board); the filter bar matches text and tags, and any filter state saves as a named view (up to 20) for one-click switching.
- **Health summary** — each pinned session row appends a read-only, sanitized line (`N msgs · you|ai · relative time`) derived from the public session snapshot — counts and directions only, never content.
- **`/goto <keyword>`** — a composer line starting with `/goto` plus Enter jumps: a unique title/tag match opens it, several matches list in a prompt, none explains. The command line never reaches the model.

## How it works

- **Host half** (`src/index.ts`) — declares the `session-emoji` settings form as the plugin's own live Config: the two pinned id lists, the two emoji maps, the recently-used list, the organizer state, and the host policy (`maxPins`/`reorderOnLoad`/`pruneStale` plus the five feature switches) are all `.volatile()` fields. On the `0.1.7` settings contract a form's namespace is the local id of its profile entry, so the bundle patch's `id: session-emoji` row names the form, the Plugins page edits it, and accepted edits are hot-applied to the running plugin; no session events, no model traffic.
- **Browser half** (`src/client.ts`) — assembles a framework-free `PinStore` (the host half's live Config form read through `ctx.configForms.get(entryId)`, degrading to a versioned `localStorage` document with cross-tab sync), a `PinController` (two-level toggle / emoji set-clear / prune / reorder state machine), and the UI: the row overlay, the optional row-slot registration, the one shared emoji picker both row paths open, the header toggle, the sidebar foot action, and the pinned panel. Ordering goes through `ctx.workspaces`.
- **Emoji data** (`src/emoji-data.ts`, `src/emoji-catalog.ts`, `src/emoji-picker.ts`) — a generated, checked-in catalog (1653 fully-qualified sequences across eight categories, filtered to drop flags, components, and skin-tone variants) with CLDR zh/en names and keywords, indexed at module load for lookups and token-AND search; the picker is plain DOM anchored to the row button. No runtime fetch, no dependency, no network: `pnpm run emoji:generate` rebuilds the dataset offline from the cached Unicode/CLDR sources (see `THIRD_PARTY_NOTICES.md`).
- **Log-backed write channel** — on builds mounting the built-in `dsh-session-emoji` service, every session toggle commits through the `session.setPinned` RPC first (the `session/pin` event log is the canonical residence) and mirrors the commit into the settings store; a failed or slow RPC degrades to a direct settings write.
- **Log-backed projection read** — `enableLogBacking` (host Config, fail-closed default off) mounts a projection reader that folds live `session/pin` events into the canonical pin set and mirrors the folded `pinned`/`emoji` into the live Config, which becomes the idempotent cache for the log-backed state. The event schema, the pure fold (`foldPinEvents`), and the pre-flight-gated append seam (`PinLogAppender`) live in `src/pin-log.ts`: the host's runtime event vocabulary alone gates the write BEFORE the first append (the alpha-line append can no longer stamp the `ignorable` marker, so the old marker probe is gone), so hosts that cannot safely carry the event — a vocabulary that does not know the type fails closed on read — never receive one; the live Config/localStorage store remains the compat + degradation path.
- **Client seam** — the browser half reads `SessionId`/`WorkspaceId` brands from `@deepseek-ai/dsh-client-connection` (the removed `dsh-client-runtime` package no longer exists on current hosts); the session-header slot's standard-kit seats are typed as a local structural contract. On `0.1.2-rc.1` hosts the `sessions.row.action` row slot is not declared, so session rows fall back to the DOM overlay and the row-slot registration stays deferred.
- **Build** — esbuild emits the host ESM half and the client CJS half wrapped in the web boot factory (`window.__ModuleLoader__.load({ id, factory })`); `react` is externalized onto the shell's own React, and a purity gate fails the build if any `@deepseek-ai/*` value import leaks into the browser bundle.

**Extension points used:** `settings` (host); `sessions`, `workspaces`, `configForms`, `connection`, `slots` (client); `locale` (client, optional); `conversation.session.header.actions`, `sidebar.footer.action`, `shell.overlay`, and the upstream `sessions.row.action` row slot when declared (`0.1.2-rc.1` hosts do not declare it — the DOM overlay covers session rows there). **Model-visible effects: none** — this is a UI-only plugin: it adds no session events and no tokens to any model request.

## Quick start

```sh
# 1. install the bundle into your profile
dsh plugin --profile web add "github:TheBigFish/dsh-session-emoji#main"

# or from npm (published releases)
dsh plugin --profile web add dsh-session-emoji

# 2. restart and verify the row
dsh --profile web --dump-config | grep -A3 'id: session-emoji'
```

> **Loader entry id.** On harness builds whose `dsh-base` bundle mounts the built-in host service `@deepseek-ai/dsh-session-emoji` (entry id `session-emoji`), give this plugin a distinct entry id such as `id: session-emoji-ui` in the profile patch row — a duplicate `session-emoji` id fails the boot with "duplicate loader entry id".

## Install & uninstall

- **git channel** (latest `main`): `dsh plugin --profile web add "github:TheBigFish/dsh-session-emoji#main"` — `pnpm run build` emits the host half (`lib/index.js`) and the browser half (`lib/client.js`).
- **npm channel** (published releases): `dsh plugin --profile web add dsh-session-emoji`.
- **tarball channel**: `pnpm pack` in this repo, then `dsh plugin --profile web add ./dsh-session-emoji-<version>.tgz`.
- **uninstall**: `dsh plugin --profile web remove dsh-session-emoji` (or remove the row from the profile patch — the row IS the settings form namespace, so removing it also removes the stored form values).

## Configuration

All tunables are Schemastery `Config` fields. Every field below is `.volatile()`, so it is editable live from the profile's Plugins page as well as from `cordis.yml` (an accepted edit is committed into the running plugin without a remount); pin lists, emoji maps, the recents list, and organizer state are the same kind of field, which is what makes the browser half's store durable. `enableLogBacking` is deliberately NOT volatile: it was never part of the editable surface and no browser half reads it. `cordis.patch.yml` mounts the bundle with the defaults below.

| Key | Default | Meaning |
|---|---|---|
| `maxPins` | `0` | Maximum pinned entities per level (sessions and workspaces each have their own budget); `0` = unlimited |
| `reorderOnLoad` | `true` | Re-assert the pinned prefixes (newest pin first) once the lists are ready |
| `pruneStale` | `true` | Drop pins and emoji for entities absent from a ready list (deleted/archived) |
| `enableBoards` | `true` | Enable pin groups (boards) in the sidebar panel |
| `enableTags` | `true` | Enable session/workspace tags and the panel filter bar |
| `enableViews` | `true` | Enable saved filter views |
| `enableHealth` | `true` | Enable the per-pinned-session health summary (read-only, sanitized) |
| `enableGoto` | `true` | Enable the `/goto <keyword>` composer command |
| `enableLogBacking` | `false` | Fold `session/pin` events into a log-backed projection and mirror it into the settings cache (fail-closed: the session log is canonical when enabled) |

## Tools & surfaces

| Surface | Kind | Notes |
|---|---|---|
| `[pin][emoji]` row controls | UI slot / DOM overlay | Hover controls on every session and workspace row; the emoji button opens the shared picker and Shift+click clears the badge |
| Session header toggle | UI slot | The same pin control in the header action row, keyed by session id |
| Sidebar foot + pinned panel | UI slot / overlay | Lists pinned workspaces and sessions, grouped by board (collapsible) with per-row board/tag manage and each row's emoji |
| `/goto <keyword>` | command | Composer quick-jump by title/tag; the line never reaches the model |
| `session-emoji` settings form | host service | The plugin's own live Config, durable per profile: pins, emoji, recents, and organizer state |

## Permissions & data

- **Permissions**: the `dshWorkshop` manifest declares `browser:local-storage`, `settings:read`, and `settings:write`.
- **Data**: pins, emoji, recents, and organizer state live in the plugin's `session-emoji` settings form (the `pinned`/`workspacePinned`/`emoji`/`workspaceEmoji`/`recentEmoji`/`boards`/`tags`/`views` volatile Config fields), degrading to a versioned `localStorage` document where the web proxy does not serve the entry (v1–v3 documents migrate; the retired color maps are dropped on purpose). Nothing is uploaded. With `enableLogBacking`, the live Config becomes the idempotent cache for the log-backed `session/pin` projection. The emoji catalog is a generated, checked-in dataset (Unicode 18.0 with CLDR zh/en annotations — see `THIRD_PARTY_NOTICES.md`), and the plugin never fetches anything at runtime.
- **Session log**: none by default — this plugin adds no session events and no tokens to any model request. When `enableLogBacking` is on, the host folds the log-only `session/pin` event (written by the upstream `session.setPinned` RPC) into the canonical pin projection; `PinLogAppender` pre-flight-gates its own writes on the runtime event vocabulary, so hosts that cannot carry the event never receive one. Model-visible effects remain none.

## Security boundaries

- **UI-only.** No model-visible effects, no network, no subprocesses; every surface degrades gracefully on older baselines.
- **Durable, bounded state.** Pins and emoji are pruned with deleted entities (`pruneStale`); `maxPins` caps the pinned count per level.
- **Read-only health.** The health summary derives counts and directions from the public session snapshot and writes nothing back.

## Known limitations

- **Persistence scope** — the log-backed canonical residence is opt-in (`enableLogBacking`, fail-closed default off) and its live read loop requires builds that emit the `session/pin` event (the upstream `session.setPinned` RPC); on baselines without it, pins and emoji fall back to the plugin's `session-emoji` settings form, then to browser-local `localStorage`. On hosts whose event vocabulary does not know the type, the pre-flight gate disables log appends entirely (the fail-closed read path would reject such logs), so the projection degrades to the settings cache there.
- **Ordering scope** — the pinned position is stable only under **Manual** order; under **Updated** order the core's activity promotion re-fronts active sessions, and `reorderOnLoad` re-asserts the prefixes on load.
- **Remote browsers** — settings RPCs are loopback-only on the baseline; remote browsers fall back to browser-local `localStorage`.
- **Row badge fallback** — where the upstream row slot is unavailable, session rows are matched by title text; with duplicate titles the badge shows on every matching row and toggles the first match (cosmetic).
- **Row DOM dependency** — the overlay relies on the core rows' `role="treeitem"` structure and must follow upstream UI changes.

## Roadmap

- ~~Canonical residence: a log-backed `session/pin` event + `pin` projection + write RPC (upstream) — the settings namespace then retires as the durable store and the plugin consumes `useProjection('pin')`.~~ **Landed (P0):** the plugin ships the `session/pin` event schema, the pure projection fold (`foldPinEvents`), the pre-flight-gated append seam (`PinLogAppender`), and a host projection reader (`enableLogBacking`) that folds live `session/pin` events back into the live Config cache. The live Config/localStorage store remains the compat + degradation path; the log is canonical when enabled.
- Self-build write fallback: wire `PinLogAppender` to append `session/pin` events on builds without the upstream `session.setPinned` RPC, so no-upstream baselines also log canonically.
- Consume the upstream `pin` projection (`useProjection('pin')`) on the client once `@deepseek-ai/dsh-session-emoji` ships in the npm baseline; today the host mirror covers the read path on master builds.
- Right-click / row-menu "Pin" entry (needs a core row-level menu slot; the row badge slot is upstream now).
- Custom row labels (a short text badge next to the emoji) once the core row anatomy exposes a label seat; the picker-backed emoji badge covers marking today.

## Development

```sh
pnpm install                    # install dependencies
pnpm run typecheck              # tsc --noEmit
pnpm test                       # vitest unit tests
pnpm run build                  # dual-half build + client-bundle purity check
pnpm run emoji:generate         # regenerate src/emoji-data.ts from the cached Unicode/CLDR sources
node scripts/verify-live.mjs    # live check against a running `dsh web` (DSH_CHECKOUT env)
```

## Topics

`deepseek-harness`, `dsh`, `dsh-plugin`, `session-emoji`, `pin`, `workspace`

## Contributors

- [@PerryLink](https://github.com/PerryLink) — original author and maintainer of dsh-session-pin: pin UX, durable persistence, workspace ordering, the navigation organizer, and the five-language docs (this fork adds the picker-backed emoji badges and is maintained by [@TheBigFish](https://github.com/TheBigFish)).

## PerryLink DSH Plugin Family

This project is one of the **45 DeepSeek Harness plugins** maintained by [PerryLink](https://github.com/PerryLink). If this one helps you, the others likely will too:

| Plugin | One-liner |
|---|---|
| **[dsh-auto-review](https://github.com/PerryLink/dsh-auto-review)** | Second-model auto-review on the approval chain, fail-closed by default | |
| **[dsh-autotier](https://github.com/PerryLink/dsh-autotier)** | Automatic strong/cheap model-tier routing with deterministic risk guards and a `/tier` command | |
| **[dsh-background-agents](https://github.com/PerryLink/dsh-background-agents)** | Durable background child agents with a Web UI sidebar, messaging and interrupt | |
| **[dsh-budget](https://github.com/PerryLink/dsh-budget)** | Cost governance for DeepSeek Harness: budgets, carbon, and latency in one panel. | |
| **[dsh-catalog](https://github.com/PerryLink/dsh-catalog)** | DSH Desktop Market standard catalog source for the PerryLink family | |
| **[dsh-cert-mcp](https://github.com/PerryLink/dsh-cert-mcp)** | Read-only MCP server exposing the certification registry: grades, snapshots and five-dimension evidence | |
| **[dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind)** | Claude Code /rewind-equivalent: snapshots, session forks, one-shot restore | |
| **[dsh-claude-move](https://github.com/PerryLink/dsh-claude-move)** | Migrate Claude Code sessions, memory, skills and CLAUDE.md into DSH | |
| **[dsh-click](https://github.com/PerryLink/dsh-click)** | Cross-platform native desktop control for DeepSeek Harness — Windows first. | |
| **[dsh-composer-history](https://github.com/PerryLink/dsh-composer-history)** | Terminal-style input history for the web composer: arrows, Ctrl+R search | |
| **[dsh-data-quality](https://github.com/PerryLink/dsh-data-quality)** | Dataset quality checks and citation cross-checks (the optional numeric bridge consumed here) | |
| **[dsh-defend](https://github.com/PerryLink/dsh-defend)** | Prompt-injection, jailbreak, and secret-leak defense for DeepSeek Harness. | |
| **[dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck)** | Engineering-discipline guard: requirements grill, test gates, adversary review | |
| **[dsh-draw](https://github.com/PerryLink/dsh-draw)** | Unified static-image generation routing for DeepSeek Harness. | |
| **[dsh-fast](https://github.com/PerryLink/dsh-fast)** | Read-only performance diagnostics for DeepSeek Harness. | |
| **[dsh-fund-research](https://github.com/PerryLink/dsh-fund-research)** | Deterministic research reports for Chinese public mutual funds | |
| **[dsh-github](https://github.com/PerryLink/dsh-github)** | GitHub PR/issues integration for DSH, every write gated by approval | |
| **[dsh-industry-research](https://github.com/PerryLink/dsh-industry-research)** | Industry research orchestration that seals its deliverables through this plugin's `ctx.researchReport.assemble` | |
| **[dsh-laya](https://github.com/PerryLink/dsh-laya)** | Laya typed decisions (`noul`/`choice`/`score`) as a first-class Cordis service and model-visible tools | |
| **[dsh-library](https://github.com/PerryLink/dsh-library)** | Local document knowledge base for DeepSeek Harness. | |
| **[dsh-local-ai](https://github.com/PerryLink/dsh-local-ai)** | Local-model (Ollama) integration for DeepSeek Harness. | |
| **[dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions)** | LSP diagnostics, formatting, completion, code actions and rename over language servers | |
| **[dsh-mask](https://github.com/PerryLink/dsh-mask)** | PII masking middleware: anonymize at the model boundary, restore at the display layer | |
| **[dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel)** | Read-only MCP runtime panel: /mcp command + Settings tab with status, tools and errors | |
| **[dsh-memento](https://github.com/PerryLink/dsh-memento)** | Approval-gated cross-session memory: ctx.memory seam + SQLite + memory tool | |
| **[dsh-observe](https://github.com/PerryLink/dsh-observe)** | OpenTelemetry and Langfuse observability exporter for DeepSeek Harness. | |
| **[dsh-output-styles](https://github.com/PerryLink/dsh-output-styles)** | Claude Code outputStyles-equivalent runtime style switching | |
| **[dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules)** | Claude Code-style declarative allow/deny/ask permission rules with audit | |
| **[dsh-plugin-certification](https://github.com/PerryLink/dsh-plugin-certification)** | Community certification registry with repro-checkable grades and badges | |
| **[dsh-plugin-doctor](https://github.com/PerryLink/dsh-plugin-doctor)** | Zero-dependency static + sandbox smoke detector for DSH plugins | |
| **[dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide)** | Plugin-development knowledge base as an on-demand agent skill | |
| **[dsh-plugin-kit](https://github.com/PerryLink/dsh-plugin-kit)** | Shared zero-runtime-dependency toolkit for the PerryLink DSH plugins | |
| **[dsh-plugin-upgrade](https://github.com/PerryLink/dsh-plugin-upgrade)** | One-package, one-corridor-index plugin upgrade skill: routes a repository to the matching closed corridor card | |
| **[dsh-plugin-upgrade-015](https://github.com/PerryLink/dsh-plugin-upgrade-015)** | Merged `0.1.3-alpha.1` → `0.1.5-rc.1` upgrade corridor card plus a zero-dependency seam scanner | |
| **[dsh-reach](https://github.com/PerryLink/dsh-reach)** | Multi-channel approval/question bridge: WeChat/Telegram/Feishu, session console | |
| **[dsh-research-report](https://github.com/PerryLink/dsh-research-report)** | Verifiable research-report engine: content-addressed evidence ledger and sealed versions | |
| **[dsh-score](https://github.com/PerryLink/dsh-score)** | Multi-dimensional quality scoring for DeepSeek Harness plugins. | |
| **[dsh-session-emoji](https://github.com/TheBigFish/dsh-session-emoji)** | Pin sessions in the Web sidebar with durable ordering | |
| **[dsh-session-sync](https://github.com/PerryLink/dsh-session-sync)** | Cross-device session sync for DeepSeek Harness — a dedicated git mirror of your session store. | |
| **[dsh-skill-pack-security](https://github.com/PerryLink/dsh-skill-pack-security)** | Security-audit skill pack: secret scan, dependency and supply-chain review | |
| **[dsh-talk](https://github.com/PerryLink/dsh-talk)** | Voice-first session loop for DeepSeek Harness: talk to it, hear it answer. | |
| **[dsh-team-rooms](https://github.com/PerryLink/dsh-team-rooms)** | Cross-session team rooms: shared message bus, task board and timeline | |
| **[dsh-test-drive](https://github.com/PerryLink/dsh-test-drive)** | Isolated install-and-smoke test drives for DeepSeek Harness plugins. | |
| **[dsh-ticktick](https://github.com/PerryLink/dsh-ticktick)** | TickTick/Dida365 task bridge: session-header panel + 11 tools | |
| **[dsh-translate](https://github.com/PerryLink/dsh-translate)** | Vendor parameter translation and deterministic JSON repair for DeepSeek Harness. | |


### Install from the DSH Desktop Market

All PerryLink plugins are browsable in the built-in DSH Desktop Market: **Market → Sources → add source → paste** `https://perrylink-dsh-catalog.perrylink.workers.dev/catalog-source.json` **→ select it**. Installation still goes through the Market's npm-identity verification and your confirmation.

## License

[Apache License 2.0](LICENSE) © 2026 dsh-session-emoji contributors
