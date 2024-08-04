import { PrismTheme } from 'prism-react-renderer'

interface MenuItem {
  url: string
  label: string
  icon?: any
  show: boolean
}

interface Theme {
  backgroundColor: string
  cardBackgroundColor: string
  codeHighlight: PrismTheme
}

/**
 * @description 主题配置信息
 * @date 08/04/2024
 * @interface Themes
 */
interface Themes {
  brandColor: string
  light: Theme
  dark: Theme
}

/**
 * @description 头部配置信息
 * @date 08/04/2024
 * @interface Headers
 */
interface Headers {
  menu: Omit<MenuItem, 'icon'>[]
  // 导航栏右侧的社交链接
  social: MenuItem[]
}

/**
 * @description 底部配置信息
 * @date 08/04/2024
 * @interface Footers
 */
interface Footers {
  menu: MenuItem[]
  // 友情链接
  friend: MenuItem[]
  ICPRecord?: string
}

/**
 * @description 站点配置信息
 * @date 08/04/2024
 * @interface Config
 * @extends {SiteMetadata}
 */
interface SiteConfig {
  comment: boolean
  themes: Themes
  headers: Headers
  footers: Footers
}

export default SiteConfig
