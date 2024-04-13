import { theme, ThemeConfig } from 'antd'

import { genMapTokenAlgorithm } from '../algorithms/themeAlgorithm'
import { components } from './components'
import config from '@/config'

const darkMode = genMapTokenAlgorithm()

export const darkTheme: ThemeConfig = {
  components,
  token: {
    ...darkMode.tokens,

    colorPrimary: darkMode.brandColor,

    colorBgLayout: config.themes.dark.backgroundColor, // Layout 颜色
    colorBgElevated: config.themes.dark.cardBackgroundColor, // Card 背景色

    boxShadowTertiary:
      '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 7px -1px rgba(0, 0, 0, 0.03), 0 2px 5px 0 rgba(0, 0, 0, 0.03)',
  },
  algorithm: (seedToken, mapToken) => {
    return {
      ...theme.darkAlgorithm(seedToken, mapToken),

      ...darkMode.tokens,
    }
  },
}
