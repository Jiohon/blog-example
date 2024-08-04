import type { AnchorLinkItemProps } from 'antd/es/anchor/Anchor'

type ResponseData<T> = T & SimplifiedQueryData

type SimplifiedQueryDataFunction = <T>(
  nodes: ReadonlyArray<T extends null ? GraphqlNode : T>,
  callback?: (e: ResponseData<T>) => ResponseData<T>
) => ResponseData<T>[]

/**
 * @description 简化查询数据
 * @date 20/04/2024
 * @param {ReadonlyArray<T extends null ? GraphqlNode : T>} nodes
 * @param {(e: ResponseData<T>) => ResponseData<T>} callback
 * @return {*}  {SimplifiedQueryDataFunction}
 */
export const simplifiedQueryData: SimplifiedQueryDataFunction = (nodes, callback) => {
  if (!nodes) return []
  const result = nodes
    .map((node) => {
      const { frontmatter } = node as any

      const newNode = {
        ...node,
        ...frontmatter,
      }

      if (callback) {
        return callback(newNode)
      }

      return newNode
    })
    .filter((e) => e !== null)
  return result
}

export type HeadingItem = {
  level: number
} & AnchorLinkItemProps

type FlattenHead = (arr: any[], level: number) => HeadingItem[]

/**
 * @description 递归扁平化目录
 * @date 20/04/2024
 * @param {any[]} arr
 * @param {number} level
 * @return {*}  {HeadingItem[]}
 */

export const flattenHead: FlattenHead = (arr, level) =>
  arr.reduce((acc, cur, i) => {
    if (cur.items) {
      return [
        ...acc,
        { key: cur.title, href: `#${cur.title}`, title: cur.title, className: `level-${level}`, level },
        ...flattenHead(cur.items, level + 1),
      ]
    }
    return [...acc, { key: cur.title, href: `#${cur.title}`, title: cur.title, className: `level-${level}`, level }]
  }, [])
