import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import SiteThemeProvider from './src/container/SiteThemeProvider'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  return (
    <>
      <SiteThemeProvider {...props}>{element}</SiteThemeProvider>
    </>
  )
}
