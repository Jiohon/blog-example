import { ThemeMode, ThemeContextState, useThemeMode as useAntdThemeMode } from 'antd-style'
import { useThemeStore } from '@/store/useThemeStore'
import { safeStartTransition } from '@/utils/safeStartTransition'
import Cookies from 'js-cookie'
import { useIsomorphicLayoutEffect } from './useIsomorphicEffect'

/**
 * @description 主题外观模式。
 * @date 23/10/2022
 * @export
 * @return {*} ThemeContextState
 */
export const useThemeMode = (): ThemeContextState => {
  const { storeTheme, setStoreTheme } = useThemeStore()
  const theme = useAntdThemeMode()

  const setThemeMode = (mode: ThemeMode) => {
      safeStartTransition(() => {
        setStoreTheme(mode)
        theme.setThemeMode(mode)
        // Cookies.set('theme', mode)
      })
  }

  // useIsomorphicLayoutEffect(() => {
  //   const cookieTheme = Cookies.get('theme')

  //   if (cookieTheme) {
  //     console.log(cookieTheme, storeTheme)
  //     // setThemeMode(cookieTheme as ThemeMode)
  //   }
  // }, [])


  return { ...theme, themeMode: storeTheme, setThemeMode }
}