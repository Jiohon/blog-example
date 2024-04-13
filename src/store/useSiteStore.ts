import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { SiteMetadata } from '@/hooks'

export interface SiteStore {
  siteData: SiteMetadata
}

const initialState: SiteStore = {
  siteData: {
    author: '',
    title: '',
    siteUrl: '',
    logo: '',
    description: '',
    feedUrl: '',
    version: '',
    repository: '',
  },
}

export const useSiteStore = create<SiteStore>()(
  devtools(
    () => ({
      ...initialState,
    }),
    { name: 'SITE_DATA' }
  )
)
