import type { GetCustomToken } from 'antd-style'

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends SiteToken {}
}

/**
 * @title 站点主题 Token
 * @description 站点的一些基础配置信息
 */
export interface SiteToken {
  /**
   * @title 头部高度
   */
  headerHeight: number
  /**
   * @title 头部高度移动端
   */
  headerHeightMobile: number
  /**
   * @title 内容最大宽度
   * @description 文本内容的最大宽度 1100
   */
  contentMaxWidth: number
  /**
   * @title 底部高度
   */
  footerHeight: number
  /**
   * @title 底部高度移动端
   */
  footerHeightMobile: number
  /**
   * @title Logo渐变
   */
  gradientLogo: string

  /**
   * @title 代码块字体
   */
  fontFamilyHighlighter: string
  /**
   * @title 表格head背景色
   */
  tableHeaderBg: string
  /**
   * @title 第四级阴影样式
   */
  boxShadowFourth: string
}

export const createCustomToken: GetCustomToken<SiteToken> = ({ isDarkMode, token }) => {
  return {
    headerHeight: 64,
    headerHeightMobile: 50,

    contentMaxWidth: 1100,

    footerHeight: 160,
    footerHeightMobile: 130,

    gradientLogo: `linear-gradient(30deg,#90d5ff 35%,${token.colorPrimary})`,

    fontFamilyHighlighter: 'SF Mono',

    borderRadius: 8,

    tableHeaderBg: isDarkMode ? '#1d1d1d' : '#fafafa',

    highlightBackgroundColor: '',
    boxShadowFourth: isDarkMode
      ? ''
      : '0 1px 4px 0 rgba(0, 0, 0, 0.04), 0 1px 8px -1px rgba(0, 0, 0, 0.03), 0 2px 6px 0 rgba(0, 0, 0, 0.03)',
  }
}
