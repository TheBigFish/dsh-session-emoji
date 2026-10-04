// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it, vi } from 'vitest'
import { createPinStore, STORAGE_KEY, type PinScope, type PinSection, type StorageEventsLike, type StorageLike } from '../src/pin-store.ts'
import { emptyStoredPins } from '../src/pin-core.ts'

/** Two shipped catalog emoji used across the tests. */
const SMILE = '😀'
const ROCKET = '🚀'

/** One settings-scope snapshot. */
type ScopeSnapshot = {
  mode: 'host' | 'memory'
  status: 'loading' | 'ready' | 'unavailable'
  value?: PinSection
}

/** In-memory storage double with event plumbing. */
function storageDouble(initial: Record<string, string> = {}): {
  storage: StorageLike
  events: StorageEventsLike
  emit(key: string | null): void
  map: Map<string, string>
} {
  const map = new Map(Object.entries(initial))
  const listeners = new Set<(event: { key: string | null }) => void>()
  return {
    map,
    storage: {
      getItem: key => map.get(key) ?? null,
      setItem: (key, value) => {
        map.set(key, value)
      },
    },
    events: {
      addEventListener: (_type, listener) => {
        listeners.add(listener)
      },
      removeEventListener: (_type, listener) => {
        listeners.delete(listener)
      },
    },
    emit: key => {
      for (const listener of [...listeners]) listener({ key })
    },
  }
}

function scopeDouble(initial: Partial<ScopeSnapshot> = {}): {
  scope: PinScope
  set(value: Partial<ScopeSnapshot>): void
  setters: Array<{ field: string; value: unknown }>
} {
  const listeners = new Set<() => void>()
  const setters: Array<{ field: string; value: unknown }> = []
  let snapshot: ScopeSnapshot = {
    mode: 'host',
    status: 'ready',
    ...initial,
  }
  return {
    setters,
    scope: {
      getSnapshot: () => snapshot,
      subscribe: (listener) => {
        listeners.add(listener)
        return () => {
          listeners.delete(listener)
        }
      },
      set: async (field, value) => {
        setters.push({ field, value })
        snapshot = {
          ...snapshot,
          value: { ...(snapshot.value ?? {}), [field]: value },
        }
        for (const listener of [...listeners]) listener()
      },
    },
    set(value) {
      snapshot = { ...snapshot, ...value }
      for (const listener of [...listeners]) listener()
    },
  }
}

describe('createPinStore', () => {
  it('reads both pin levels, emoji, recents, and policy from the host settings snapshot', () => {
    const { scope } = scopeDouble({
      value: {
        pinned: ['a', 'b'],
        workspacePinned: ['w1'],
        emoji: { a: SMILE },
        workspaceEmoji: { w1: ROCKET },
        recentEmoji: [ROCKET, SMILE],
        maxPins: 3,
        reorderOnLoad: false,
        pruneStale: false,
      },
    })
    const { storage, events } = storageDouble()
    const store = createPinStore(scope, storage, events)
    expect(store.read()).toEqual({
      pinned: ['a', 'b'],
      workspacePinned: ['w1'],
      emoji: { a: SMILE },
      workspaceEmoji: { w1: ROCKET },
      recentEmoji: [ROCKET, SMILE],
      boards: { byId: {}, membership: {} }, tags: {}, views: [],
      local: false, maxPins: 3, reorderOnLoad: false, pruneStale: false,
      enableBoards: true, enableTags: true, enableViews: true, enableHealth: true, enableGoto: true,
    })
  })

  it('applies host-mode defaults for absent policy fields', () => {
    const { scope } = scopeDouble({ value: { pinned: ['a'] } })
    const { storage, events } = storageDouble()
    const store = createPinStore(scope, storage, events)
    expect(store.read()).toEqual({
      pinned: ['a'], workspacePinned: [], emoji: {}, workspaceEmoji: {}, recentEmoji: [],
      boards: { byId: {}, membership: {} }, tags: {}, views: [],
      local: false, maxPins: 0, reorderOnLoad: true, pruneStale: true,
      enableBoards: true, enableTags: true, enableViews: true, enableHealth: true, enableGoto: true,
    })
  })

  it('degrades to browser-local storage in memory mode with unlimited policy', () => {
    const { scope } = scopeDouble({ mode: 'memory', status: 'unavailable', value: undefined })
    const { storage, events } = storageDouble({
      [STORAGE_KEY]: JSON.stringify({ v: 2, ...emptyStoredPins(), pinned: ['x'] }),
    })
    const store = createPinStore(scope, storage, events)
    expect(store.read()).toEqual({
      ...emptyStoredPins(), pinned: ['x'], local: true, maxPins: 0, reorderOnLoad: true, pruneStale: true,
      enableBoards: true, enableTags: true, enableViews: true, enableHealth: true, enableGoto: true,
    })
  })

  it('reads the legacy bare-array document from browser-local storage', () => {
    const { scope } = scopeDouble({ status: 'unavailable' })
    const { storage, events } = storageDouble({ [STORAGE_KEY]: JSON.stringify(['legacy']) })
    const store = createPinStore(scope, storage, events)
    expect(store.read().pinned).toEqual(['legacy'])
    expect(store.read().workspacePinned).toEqual([])
    expect(store.read().emoji).toEqual({})
    expect(store.read().recentEmoji).toEqual([])
  })

  it('writes the v4 envelope in local mode and merges partial writes', () => {
    const { scope } = scopeDouble({ status: 'unavailable' })
    const { storage, events } = storageDouble({
      [STORAGE_KEY]: JSON.stringify({ v: 3, ...emptyStoredPins(), pinned: ['a'], colors: { a: '#f97316' } }),
    })
    const store = createPinStore(scope, storage, events)
    void store.write({ workspacePinned: ['w'], emoji: { a: SMILE }, recentEmoji: [SMILE] })
    const doc = JSON.parse(storage.getItem(STORAGE_KEY) ?? '{}') as unknown
    expect(doc).toEqual({
      ...emptyStoredPins(),
      v: 4,
      pinned: ['a'],
      workspacePinned: ['w'],
      emoji: { a: SMILE },
      recentEmoji: [SMILE],
    })
  })

  it('writes through the settings scope per field in host mode', async () => {
    const { scope, setters } = scopeDouble({ value: { pinned: [] } })
    const { storage, events } = storageDouble()
    const store = createPinStore(scope, storage, events)
    await store.write({ pinned: ['a'], emoji: { a: ROCKET } })
    expect(setters).toEqual([
      { field: 'pinned', value: ['a'] },
      { field: 'emoji', value: { a: ROCKET } },
    ])
  })

  it('republishes on scope changes and same-key storage events only', () => {
    const { scope } = scopeDouble({ status: 'unavailable' })
    const { storage, events, emit } = storageDouble()
    const store = createPinStore(scope, storage, events)
    const listener = vi.fn()
    const dispose = store.subscribe(listener)
    emit('other-key')
    expect(listener).not.toHaveBeenCalled()
    emit(STORAGE_KEY)
    expect(listener).toHaveBeenCalledTimes(1)
    emit(null)
    expect(listener).toHaveBeenCalledTimes(2)
    dispose()
    emit(STORAGE_KEY)
    expect(listener).toHaveBeenCalledTimes(2)
  })

  it('switches to the host store live when the transport becomes ready', () => {
    const { scope, set } = scopeDouble({ status: 'unavailable' })
    const { storage, events } = storageDouble({
      [STORAGE_KEY]: JSON.stringify({ v: 2, ...emptyStoredPins(), pinned: ['local'] }),
    })
    const store = createPinStore(scope, storage, events)
    expect(store.read().local).toBe(true)
    set({ mode: 'host', status: 'ready', value: { pinned: ['host'], maxPins: 2 } })
    expect(store.read()).toEqual({
      ...emptyStoredPins(), pinned: ['host'], local: false, maxPins: 2, reorderOnLoad: true, pruneStale: true,
      enableBoards: true, enableTags: true, enableViews: true, enableHealth: true, enableGoto: true,
    })
  })

  // Rapid commits are common (unpin → re-pin at the same row). The transport
  // carries each field separately and may otherwise deliver the pair out of
  // order, leaving the Host on the older value with no visible discrepancy
  // until the next reload.
  it('serializes per-field host writes so the newest commit lands last', async () => {
    const flush = async (): Promise<void> => new Promise(resolve => setTimeout(resolve, 0))
    const setters: Array<{ value: unknown; release: () => void }> = []
    let snapshot: ScopeSnapshot = { mode: 'host', status: 'ready', value: {} }
    const scope: PinScope = {
      getSnapshot: () => snapshot,
      subscribe: () => () => {},
      set: (field, value) => new Promise<void>((resolve) => {
        setters.push({
          value,
          release: () => {
            snapshot = { ...snapshot, value: { ...snapshot.value, [field]: value } }
            resolve()
          },
        })
      }),
    }
    const { storage, events } = storageDouble()
    const store = createPinStore(scope, storage, events)
    const first = store.write({ pinned: ['a'] })
    const second = store.write({ pinned: ['b'] })
    await flush()
    // The second write waits for the first instead of racing it.
    expect(setters.map(entry => entry.value)).toEqual([['a']])
    setters[0]?.release()
    await first
    await flush()
    expect(setters.map(entry => entry.value)).toEqual([['a'], ['b']])
    setters[1]?.release()
    await second
    expect(store.read().pinned).toEqual(['b'])
  })

  // The settings form answers a refused write (a revision conflict with a
  // concurrent document edit) with `false` and re-reads Host state instead of
  // rejecting. Treating that as success left the caller's optimistic value
  // standing while the Host kept the old one, until the next reload.
  it('retries a write the Host refused, then reports a lasting refusal', async () => {
    const answers = [false, true, false, false]
    const setters: Array<{ field: string; value: unknown }> = []
    const scope: PinScope = {
      getSnapshot: () => ({ mode: 'host', status: 'ready', value: {} }),
      subscribe: () => () => {},
      set: (field, value) => {
        setters.push({ field, value })
        return Promise.resolve(answers.shift() ?? true)
      },
    }
    const { storage, events } = storageDouble()
    const store = createPinStore(scope, storage, events)
    await store.write({ pinned: ['a'] })
    expect(setters).toEqual([{ field: 'pinned', value: ['a'] }, { field: 'pinned', value: ['a'] }])
    await expect(store.write({ pinned: ['b'] })).rejects.toThrow('did not accept the pinned write')
    expect(setters).toEqual([
      { field: 'pinned', value: ['a'] },
      { field: 'pinned', value: ['a'] },
      { field: 'pinned', value: ['b'] },
      { field: 'pinned', value: ['b'] },
    ])
  })

  // A burst of clicks must not queue a second of writes per click: the settings
  // round trip is slow, and a page reload drops whatever is still queued.
  it('coalesces a burst per field to the newest value', async () => {
    const flush = async (): Promise<void> => new Promise(resolve => setTimeout(resolve, 0))
    const setters: Array<{ value: unknown; release: () => void }> = []
    let snapshot: ScopeSnapshot = { mode: 'host', status: 'ready', value: {} }
    const scope: PinScope = {
      getSnapshot: () => snapshot,
      subscribe: () => () => {},
      set: (_field, value) => new Promise<void>((resolve) => {
        setters.push({
          value,
          release: () => {
            snapshot = { ...snapshot, value: { ...snapshot.value, pinned: value as string[] } }
            resolve()
          },
        })
      }),
    }
    const { storage, events } = storageDouble()
    const store = createPinStore(scope, storage, events)
    const first = store.write({ pinned: ['a'] })
    const second = store.write({ pinned: ['b'] })
    const third = store.write({ pinned: ['c'] })
    await flush()
    expect(setters.map(entry => entry.value)).toEqual([['a']])
    setters[0]?.release()
    await flush()
    // 'a' was in flight; 'b' and 'c' collapsed into a single newest write.
    expect(setters.map(entry => entry.value)).toEqual([['a'], ['c']])
    setters[1]?.release()
    await Promise.all([first, second, third])
    expect(setters).toHaveLength(2)
    expect(store.read().pinned).toEqual(['c'])
  })
})
