import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ThemeMode } from 'antd-style'

type Store = {
  storeTheme: ThemeMode
  setStoreTheme: (mode: ThemeMode) => void
}

export const useThemeStore = create<Store>()(
  persist(
    (set) => ({
      storeTheme: 'auto' as ThemeMode,
      setStoreTheme: (mode: ThemeMode) => {
        set({ storeTheme: mode })
      },
    }),
    { name: 'SITE_THEME_MODE' }
  )
)
