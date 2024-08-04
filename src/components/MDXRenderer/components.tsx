import { Alert, Tag } from 'antd'
import { MergeComponents } from '@mdx-js/react/lib'

import { toCodeParams, ToPreParams } from '@/utils/code'
import Headings from './Heading'
import PreHighlight from './Pre'
import CodeHighlight from './Code'
import Blockquote from './Blockquote'
import Lists from './Lists'
import Table from './Table'

const components = {
  code: (props) => {
    const codeProps = toCodeParams(props)

    return <CodeHighlight {...codeProps} />
  },
  pre: (props) => {
    const preProps = ToPreParams(props)

    return <PreHighlight {...preProps!} />
  },
  a: (props) => {
    return <a {...props} target="_blank" />
  },
  Alert: (props) => {
    const { children, message } = props

    return <Alert {...props} message={children || message} style={{ marginBlockStart: '1.2rem' }} />
  },
  Tag: (props) => {
    return <Tag {...props} bordered={false} />
  },
  ...Headings,
  ...Lists,
  blockquote: Blockquote,
  table: Table,
} as unknown as MergeComponents

export default components
