import { safeStartTransition } from './safeStartTransition'

/**
 * @description 判断是否为SSR
 * @date 30/09/2022
 */
export const isSSR = (function () {
  try {
    return !(typeof window !== 'undefined' && document !== undefined)
  } catch (e) {
    return true
  }
})()

/**
 * @description 提取href值
 * @date 16/11/2022
 * @param {string} str
 * @return {*}  {string}
 */
export const getHref = (str: string): string => {
  const value = /(?<=<a.*href=").*(?=")/.exec(str)
  return value?.length ? value[0] : ''
}

/**
 * @description 提取标签内的值
 * @date 16/11/2022
 * @param {string} str
 * @return {*}  {string}
 */
export const getValue = (str: string): string => {
  const value = /(?<=">).*(?=<\/a)/.exec(str)
  return value?.length ? value[0] : ''
}

/**
 * @description 提取标签的id
 * @date 16/11/2022
 * @param {string} str
 * @return {*}  {string}
 */
export const getID = (str: string): string => {
  const value = str.match(/(?<=<h4.*id=").*(?="\sstyle)/)
  return value?.length ? value[0].replace(/-/g, ' ') : ''
}

/**
 * @description 获取path
 */
export const getPathname = (path: string): string => {
  return path.split('/')[2]
}

/**
 * @description object转换为url参数
 * @param obj
 * @returns
 */
export const objectToUrlParams = (obj: Record<string, any>) => {
  const params = new URLSearchParams()
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      params.append(key, obj[key])
    }
  }
  return params.toString()
}
/**
 * @description 从字符串提取数字
 * @date 15/10/2023
 * @param {string} tag
 * @return {*}  {(number | null)}
 */
export const getNumber = (tag: string): number | null => {
  const number = tag.match(/\d+(\.\d+)?/g)?.join()

  return number ? Number(number) : null
}

/**
 * @description 删除所有空的兄弟节点
 * @date 04/04/2024
 * @param {(HTMLDivElement | null)} currentNode
 */
export const removeSiblingNodesWithoutChildren = (currentNode: HTMLDivElement | null) => {
  if (!currentNode) return
  const childNodes = currentNode.parentNode?.childNodes
  if (!childNodes) return
  for (let i = 0; i < childNodes.length; i++) {
    const node = childNodes[i]
    if (!node.hasChildNodes()) {
      safeStartTransition(() => {
        node.remove()
        // setTimeout(() => node.remove(), 0)
      })
    }
  }
}
