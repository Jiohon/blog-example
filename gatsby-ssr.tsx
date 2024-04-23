import React from 'react'
import { renderToString } from 'react-dom/server'
import { extractStaticStyle } from 'antd-style'
import type { GatsbySSR } from 'gatsby'
import gatsbyConfig from './gatsby-config'

import SiteThemeProvider from './src/container/SiteThemeProvider'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
  return (
    <>
      <SiteThemeProvider {...props}>{element}</SiteThemeProvider>
    </>
  )
}

export const replaceRenderer = ({ replaceBodyHTMLString, bodyComponent, setHeadComponents }) => {
  const html = renderToString(<>{bodyComponent}</>)

  const antdCache = (global as any).__ANTD_CACHE__

  // 提取 antd-style 样式
  const styles = extractStaticStyle(html, { antdCache }).map((item) => item)

  // 添加 css样式到 head
  styles.forEach((item) => {
    setHeadComponents([<style key={item.key} {...item.style.props} />])
  })
  replaceBodyHTMLString(html)
}