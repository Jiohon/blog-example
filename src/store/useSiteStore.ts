import React, { useContext, useEffect } from 'react'
import { useDebounceEffect } from 'ahooks'
import { useStoreWithEqualityFn } from 'zustand/traditional'
import { SiteStore, StoreContext, StoreType } from '@/context/siteStoreProvider'
import { ExtractState } from '@/context/siteStoreProvider/zustandTypes'
import { isSSR } from '@/utils/func'

const SSRInit: Record<string, boolean> = {}

const useReact18xUpdater = (effect: React.EffectCallback, deps?: React.DependencyList) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(React as any).startTransition(() => {
      effect()
    })
  }, deps)
}
const useLegacyUpdater = (effect: React.EffectCallback, deps?: React.DependencyList) => {
  useDebounceEffect(
    () => {
      effect()
    },
    deps,
    { wait: 32, maxWait: 96 }
  )
}

const useUpdater = typeof (React as any).startTransition === 'function' ? useReact18xUpdater : useLegacyUpdater

export function useStoreApi() {
  return useContext(StoreContext)
}

export const useSyncState = <T extends keyof SiteStore>(
  key: T,
  value: SiteStore[T],
  updateMethod?: (key: T, value: SiteStore[T], storeApi: StoreType) => void
  // updateMethod?: (key: T, value: SiteStore[T]) => void
) => {
  const storeApi = useStoreApi()
  const updater = updateMethod ? updateMethod : (key: T, value: SiteStore[T]) => storeApi.setState({ [key]: value })

  // 如果是 Node 环境，直接更新一次 store
  // 但是为了避免多次更新 store，所以加一个标记
  if (isSSR && !SSRInit[key]) {
    updater(key, value, storeApi)
    SSRInit[key] = true
  }

  useUpdater(() => {
    updater(key, value, storeApi)
  }, [value])
}

export function useSiteStore<U>(selector: (state: ExtractState<StoreType>) => U) {
  const store = useContext(StoreContext)
  if (!store) throw 'Missing SiteStoreProvider'
  //@deprecated...
  //return useStore(store, selector);
  return useStoreWithEqualityFn(store, selector)
}
