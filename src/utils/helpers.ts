type ResponseData<T> = T & SimplifiedQueryData

// 定义函数类型
type SimplifiedQueryDataFunction = {
  <T>(
    nodes: ReadonlyArray<T extends null ? GraphqlNode : T>,
    callback?: (e: ResponseData<T>) => ResponseData<T>
  ): ResponseData<T>[]
}

// 定义泛型函数
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
