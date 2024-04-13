import { useMemo } from 'react'
import { ThemeMode, ThemeContextState, useThemeMode as useAntdThemeMode } from 'antd-style'
import { useThemeStore } from '@/store/useThemeStore'
import { safeStartTransition } from '@/utils/safeStartTransition'

/**
 * @description 主题外观模式。
 * @date 23/10/2022
 * @export
 * @return {*}
 */
export const useThemeMode = (): ThemeContextState => {
  // const storageTheme = useThemeStore((s) => s.storageTheme)
  const { storeTheme, setStoreTheme } = useThemeStore()
  const theme = useAntdThemeMode()

  const setThemeMode = (mode: ThemeMode) => {
    safeStartTransition(() => {
      setStoreTheme(mode)
      theme.setThemeMode(mode)
    })
  }

  const isDarkMode = useMemo(() => {
    if (storeTheme === 'auto') {
      return theme.browserPrefers === 'dark'
    }
    return storeTheme === 'dark'
  }, [storeTheme])

  return { ...theme, themeMode: storeTheme, isDarkMode, setThemeMode }
}
