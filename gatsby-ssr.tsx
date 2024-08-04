import React from 'react'
import type { GatsbySSR } from 'gatsby'
import { renderToString } from 'react-dom/server'
import { extractStaticStyle } from 'antd-style'
import Cookies from 'js-cookie'

import Layout from './src/layout'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()

  const antdCache = (global as any).__ANTD_CACHE__

  // 提取 antd-style 样式
  const styles = extractStaticStyle('', { antdCache })

  replaceHeadComponents([...headComponents, ...styles.map((item) => <style key={item.key} {...item.style.props} />)])
}

export const onRenderBody = ({ setHeadComponents }) => {
  // console.log('Cookies-theme', Cookies.get('theme'))
  // const theme = Cookies.get('theme') || 'auto'
  // setHeadComponents([
  //   <script
  //     key="themeCookieScript"
  //     dangerouslySetInnerHTML={{
  //       __html: `document.cookie = "theme=${theme}";`,
  //     }}
  //   />,
  // ])
}
