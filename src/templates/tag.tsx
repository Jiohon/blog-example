import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'

import ArticleList from '@/components/ArticleList'
import BriefHeader from '@/components/BriefHeader'
import SEO from '@/components/SEO'
import ArchiveSidebar from '@/components/Sidebar/ArchiveSidebar'
import { simplifiedQueryData } from '@/utils/helpers'
import { useStyles } from './styles/style'
import { getPathname } from '@/utils/func'

/**
 * @description 标签页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const TagTemplate: React.FC<PageProps<allMdxNodesQuery<'tags'> & MdxNodesQuery, TagData>> = ({ data, pageContext }) => {
  const { styles } = useStyles()

  const totalCount = data?.tags.totalCount
  const nodes = data?.tags.nodes
  const message = totalCount === 1 ? ' Article tagged:' : ' Articles tagged:'
  const { tag } = pageContext

  const simplifiedArticles = useMemo(() => simplifiedQueryData(nodes), [nodes])

  return (
    <div className={styles.container}>
      <div>
        <BriefHeader highlight={totalCount} description={message} title={tag} />
        <ArticleList data={simplifiedArticles} />
      </div>
      <ArchiveSidebar />
    </div>
  )
}

export default TagTemplate

export const Head: HeadFC<allMdxNodesQuery<'tags'> & MdxNodesQuery, TagData> = (props) => {
  const { location, pageContext } = props
  const { tag } = pageContext

  return (
    <>
      <SEO title={`articles tagged: ${tag}`} description="Article tagged" pathName={location.pathname} />
    </>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    tags: allMdx(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      nodes {
        ...FrontmatterFragment
      }
    }
    mdx {
      ...FrontmatterFragment
    }
  }
`
