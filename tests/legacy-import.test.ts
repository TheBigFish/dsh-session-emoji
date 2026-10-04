// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it, vi } from 'vitest'
import { LEGACY_STORAGE_KEY, type PinScope, type PinSection, type StorageLike } from '../src/pin-store.ts'
import { LEGACY_ENTRY_ID, planLegacyImport, runLegacyImport, type LegacyImportPatch } from '../src/legacy-import.ts'

/** Two shipped catalog emoji plus one char the catalog does not carry. */
const ROCKET = '🚀'
const FIRE = '🔥'
const NOT_AN_EMOJI = 'zzz-not-in-catalog'

/** One settings-scope snapshot (same shape the store consumes). */
type ScopeSnapshot = {
  mode: 'host' | 'memory'
  status: 'loading' | 'ready' | 'unavailable'
  value?: PinSection
}

/** Settings-scope double with a controllable snapshot and subscription feed. */
function scopeDouble(initial: Partial<ScopeSnapshot> = {}): {
  scope: PinScope
  publish(value: Partial<ScopeSnapshot>): void
} {
  const listeners = new Set<() => void>()
  let snapshot: ScopeSnapshot = { mode: 'host', status: 'ready', ...initial }
  return {
    scope: {
      getSnapshot: () => snapshot,
      subscribe: listener => {
        listeners.add(listener)
        return () => listeners.delete(listener)
      },
      set: () => Promise.resolve(true),
    },
    publish(value) {
      snapshot = { ...snapshot, ...value }
      for (const listener of [...listeners]) listener()
    },
  }
}

/** Minimal storage face. */
function storageDouble(initial: Record<string, string> = {}): StorageLike & { map: Map<string, string> } {
  const map = new Map(Object.entries(initial))
  return {
    map,
    getItem: key => map.get(key) ?? null,
    setItem: (key, value) => {
      map.set(key, value)
    },
  }
}

const current = (value: PinSection = {}): PinSection => value

describe('planLegacyImport', () => {
  it('carries pins, emoji, recents, and organizer state into an empty namespace', () => {
    const patch = planLegacyImport({
      pinned: ['session-a', 'session-b'],
      workspacePinned: ['workspace-a'],
      emoji: { 'session-a': ROCKET },
      workspaceEmoji: { 'workspace-a': FIRE },
      recentEmoji: [ROCKET, FIRE],
      boards: { byId: { later: { name: 'Later', order: 1 } }, membership: { 'session-a': 'later' } },
      tags: { 'session-a': ['focus'] },
      views: [{ id: 'view-1', name: 'Focus', text: 'focus', tags: [] }],
    }, current())

    expect(patch).not.toBeNull()
    expect(patch?.pinned).toEqual(['session-a', 'session-b'])
    expect(patch?.workspacePinned).toEqual(['workspace-a'])
    expect(patch?.emoji).toEqual({ 'session-a': ROCKET })
    expect(patch?.workspaceEmoji).toEqual({ 'workspace-a': FIRE })
    expect(patch?.recentEmoji).toEqual([ROCKET, FIRE])
    expect(patch?.boards).toEqual({ byId: { later: { name: 'Later', order: 1 } }, membership: { 'session-a': 'later' } })
    expect(patch?.tags).toEqual({ 'session-a': ['focus'] })
    expect(patch?.views).toEqual([{ id: 'view-1', name: 'Focus', text: 'focus', tags: [] }])
  })

  it('never overwrites a field the new namespace already populated', () => {
    const patch = planLegacyImport(
      { pinned: ['legacy'], emoji: { 'session-a': ROCKET }, recentEmoji: [FIRE] },
      current({ pinned: ['mine'], emoji: { 'session-b': FIRE } }),
    )

    expect(patch).toEqual({ recentEmoji: [FIRE] })
  })

  it('normalizes fail-closed: unshipped emoji and duplicate pins are dropped', () => {
    const patch = planLegacyImport(
      { pinned: ['session-a', 'session-a', ''], emoji: { 'session-a': NOT_AN_EMOJI, 'session-b': ROCKET } },
      current(),
    )

    expect(patch?.pinned).toEqual(['session-a'])
    expect(patch?.emoji).toEqual({ 'session-b': ROCKET })
  })

  it('returns null when the legacy namespace has nothing to carry', () => {
    expect(planLegacyImport(undefined, current())).toBeNull()
    expect(planLegacyImport({}, current())).toBeNull()
    expect(planLegacyImport({ pinned: [] }, current())).toBeNull()
  })
})

describe('runLegacyImport', () => {
  it('waits for both forms to load, then imports exactly once', async () => {
    const legacy = scopeDouble({ status: 'loading' })
    const own = scopeDouble({ status: 'loading' })
    const apply = vi.fn<(patch: LegacyImportPatch) => Promise<void>>(() => Promise.resolve())
    const dispose = runLegacyImport({
      scope: own.scope,
      legacyScope: () => legacy.scope,
      storage: storageDouble(),
      apply,
      logger: { warn: vi.fn() },
    })

    legacy.publish({ status: 'ready', value: { pinned: ['session-a'], emoji: { 'session-a': ROCKET } } })
    expect(apply).not.toHaveBeenCalled()

    own.publish({ status: 'ready', value: {} })
    expect(apply).toHaveBeenCalledTimes(1)
    expect(apply.mock.calls[0]?.[0]).toEqual({ pinned: ['session-a'], emoji: { 'session-a': ROCKET } })

    // A later feed must not import again (the fields are no longer empty).
    own.publish({ value: { pinned: ['session-a'] } })
    expect(apply).toHaveBeenCalledTimes(1)
    dispose()
  })

  it('skips the import when the namespace already has state', () => {
    const legacy = scopeDouble({ value: { pinned: ['legacy'] } })
    const own = scopeDouble({ value: { pinned: ['mine'] } })
    const apply = vi.fn<(patch: LegacyImportPatch) => Promise<void>>(() => Promise.resolve())
    runLegacyImport({
      scope: own.scope,
      legacyScope: () => legacy.scope,
      storage: storageDouble(),
      apply,
      logger: { warn: vi.fn() },
    })

    expect(apply).not.toHaveBeenCalled()
  })

  it('falls back to the legacy browser-local key when the old plugin is gone', () => {
    const document = JSON.stringify({ v: 4, pinned: ['session-a'], emoji: { 'session-a': FIRE }, recentEmoji: [FIRE] })
    const storage = storageDouble({ [LEGACY_STORAGE_KEY]: document })
    const apply = vi.fn<(patch: LegacyImportPatch) => Promise<void>>(() => Promise.resolve())
    runLegacyImport({
      scope: scopeDouble({ value: {} }).scope,
      legacyScope: () => undefined,
      storage,
      apply,
      logger: { warn: vi.fn() },
    })

    expect(apply).toHaveBeenCalledTimes(1)
    expect(apply.mock.calls[0]?.[0]).toEqual({ pinned: ['session-a'], emoji: { 'session-a': FIRE }, recentEmoji: [FIRE] })
  })

  it('does nothing when neither source exists, and unsubscribes on dispose', () => {
    const legacy = scopeDouble({ value: {} })
    const own = scopeDouble({ value: {} })
    const apply = vi.fn<(patch: LegacyImportPatch) => Promise<void>>(() => Promise.resolve())
    const dispose = runLegacyImport({
      scope: own.scope,
      legacyScope: () => legacy.scope,
      storage: storageDouble(),
      apply,
      logger: { warn: vi.fn() },
    })

    expect(apply).not.toHaveBeenCalled()
    dispose()
    legacy.publish({ value: { pinned: ['session-a'] } })
    expect(apply).not.toHaveBeenCalled()
    expect(LEGACY_ENTRY_ID).toBe('session-pin')
  })

  it('warns when the Host refuses the imported write', async () => {
    const warn = vi.fn()
    const failure = new Error('refused')
    runLegacyImport({
      scope: scopeDouble({ value: {} }).scope,
      legacyScope: () => scopeDouble({ value: { pinned: ['session-a'] } }).scope,
      storage: storageDouble(),
      apply: () => Promise.reject(failure),
      logger: { warn },
    })
    await vi.waitFor(() => {
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('legacy state import failed'))
    })
  })
})