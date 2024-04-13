const visit = require(`unist-util-visit`)

import type { Plugin, Transformer } from 'unified'
import _ from 'lodash'

const extractData = (inputString: string): string => {
  // 匹配括号内的数据，这里使用非贪婪模式匹配
  const regex: RegExp = /\{(.*?)\}/g
  const matches: string[] = []
  let match: RegExpExecArray | null

  // 循环匹配所有符合条件的结果
  while ((match = regex.exec(inputString))) {
    // 将匹配结果存入数组
    matches.push(match[1])
  }

  return matches.join()
}

const transformer: Transformer = (ast) => {
  const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g

  visit(ast, `element`, (node: any) => {
    let match
    if (node.tagName === `code` && node.children[0].value) {
      let inputString = node.children[0].value
      // 找到最后一个换行符的索引
      var lastIndex = inputString.lastIndexOf('\n')
      // 如果找到了换行符
      if (lastIndex !== -1) {
        // 删除最后一个换行符
        var modifiedString = inputString.substring(0, lastIndex) + inputString.substring(lastIndex + 1)
        node.children[0].value = modifiedString
      }
    }
    if (node.tagName === `code` && node.data && node.data.meta) {
      re.lastIndex = 0 // Reset regex.
      while ((match = re.exec(node.data.meta))) {
        if (match[0].includes('=')) {
          const value = match[2] || match[3] || match[4]

          node.properties[match[1]] = value
          continue
        }

        node.properties[match[1]] = true
      }

      node.properties.highlight = extractData(node.data.meta)
    }
  })
}

const rehypeMetaAsAttributes: Plugin = () => transformer

export default rehypeMetaAsAttributes
