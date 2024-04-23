import { Alert, Tag } from 'antd'
import _ from 'lodash'
import { MergeComponents } from '@mdx-js/react/lib'

import { preToCodeParams, toCodeParams } from '@/utils/code'
import Headings from './Heading'
import PreHighlight from './Code/PreHighlight'
import CodeHighlight from './Code/CodeHighlight'
import Blockquote from './Blockquote'
import Lists from './Lists'
import Table from './Table'

const components = {
  code: (props) => {
    const { className, children } = toCodeParams(props)

    return <CodeHighlight children={children}></CodeHighlight>
  },
  pre: (props) => {
    const preProps = preToCodeParams(props)

    return <PreHighlight {...preProps!}></PreHighlight>
  },
  a: (props) => {
    return (
      <a {...props} target="_blank">
        {props.children}
      </a>
    )
  },
  ...Headings,
  Alert: (props) => {
    const { children, message } = props

    return <Alert {...props} message={children || message} style={{ marginBlockStart: '1.2rem' }} />
  },
  Tag: (props) => (
    <Tag {...props} bordered={false}>
      {props.children}
    </Tag>
  ),
  blockquote: Blockquote,
  ...Lists,
  table: Table,
} as unknown as MergeComponents


export default components 
