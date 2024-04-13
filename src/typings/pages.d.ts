type TableOfContentsItem = {
  url: string
  title: string
}

type Frontmatter = {
  title: string
  description: string
  date: string
  lastUpdated: string
  icon: SVGIconTypes
  slug: string
  template: string
  tags: string[]
  categories: string[]
  published: boolean
}

type fields = {
  slug: string
}

type tableOfContents = {
  items: TableOfContentsItem[]
}

type Internal = {
  contentFilePath: string
}

type GraphqlNode = {
  frontmatter: Frontmatter
  fields: fields
  tableOfContents: tableOfContents
  internal: Internal
}

interface CategoryData {
  category: string
}

interface TagData {
  tag: string
}

interface SimplifiedQueryData extends Frontmatter {
  id: string
}

type YearListData = Record<string, Frontmatter[]>

type MdxQuery = GraphqlNode

type AllMdxQuery = {
  nodes: GraphqlNode[]
  totalCount: number
  fields: {
    slug
  }
}

type MdxNodesQuery<T = 'mdx', V = MdxQuery> = Record<T extends null ? 'mdx' : T, V>

type allMdxNodesQuery<T = 'allMdx', V = AllMdxQuery> = Record<T extends null ? 'allMdx' : T, V>

interface ImageItem {
  id: number
  idx: number
  name: string
  url: string
  thumbnail: string
}

interface HeadNodeProps<DT = unknown, PT = unknown, CT = unknown, ST = unknown> {
  data: DT
  pathname: {
    location: string
  }
  pageContext: PT
  params: CT
  serverData: ST
}
