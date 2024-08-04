import { createContext, useRef, useMemo, PropsWithChildren } from 'react'
import { createStore } from 'zustand'

import { useSiteMetadata } from '@/hooks/useSiteMetadata'
import type { SiteMetadata } from '@/hooks/useSiteMetadata'

import type { ZustandStore } from './zustandTypes'

export type SiteStore = {
  siteMetadata: SiteMetadata

  // testing with no store actions
  // a pattern that "doesn't offer any downsides" according to the docs.
  //   increment: () => void;
}

export type StoreType = ZustandStore<SiteStore>

export const StoreContext = createContext<StoreType>(null!)

export const SiteStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<StoreType>()
  const siteMetadata = useSiteMetadata()

  const initState = useMemo(() => ({ ...siteMetadata }), [])
  if (!storeRef.current) {
    storeRef.current = createStore(() => ({
      siteMetadata,
    }))
  }
  return <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>
}

export default SiteStoreProvider
