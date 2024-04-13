import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from './components'

export type PrismSyntaxHighlightProps = {
  children:React.ReactNode
}

export const PrismSyntaxHighlight: React.FC<React.PropsWithChildren<PrismSyntaxHighlightProps>> = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}

export default PrismSyntaxHighlight
