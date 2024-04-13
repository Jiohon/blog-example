import { useDebounceEffect } from 'ahooks'
import React, { memo, useEffect } from 'react'

import { useSiteMetadata } from '@/hooks'
import { SiteStore, useSiteStore } from '@/store'

const isBrowser = typeof window !== 'undefined'

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

const useSyncState = <T extends keyof SiteStore>(
  key: T,
  value: SiteStore[T],
  updateMethod?: (key: T, value: SiteStore[T]) => void
) => {
  const updater = updateMethod ? updateMethod : (key: T, value: SiteStore[T]) => useSiteStore.setState({ [key]: value })

  // 如果是 Node 环境，直接更新一次 store
  // 但是为了避免多次更新 store，所以加一个标记
  if (!isBrowser && !SSRInit[key]) {
    updater(key, value)
    SSRInit[key] = true
  }

  useUpdater(() => {
    updater(key, value)
  }, [value])
}

export const StoreUpdater = memo(() => {
  const siteData = useSiteMetadata()

  useSyncState('siteData', siteData)

  return null
})
