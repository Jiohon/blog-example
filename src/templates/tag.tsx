import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'

import ArticleList from '@/components/ArticleList'
import BriefHeader from '@/components/BriefHeader'
import SEO from '@/components/SEO'
import ArchiveSidebar from '@/components/Sidebar/ArchiveSidebar'
import { simplifiedQueryData } from '@/utils/helpers'
import { useStyles } from './styles/style'

type TagTemplateProps = PageProps<allMdxNodesQuery<'articles'> & Record<'tags' | 'categories', Group>, { tag: string }>

/**
 * @description 标签页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const TagTemplate: React.FC<TagTemplateProps> = (props) => {
  const { data, pageContext } = props
  const { styles } = useStyles()

  const totalCount = data.articles.totalCount
  const nodes = data.articles.nodes
  const categories = data.categories.group
  const tags = data.tags.group
  const message = totalCount === 1 ? ' Article tagged:' : ' Articles tagged:'
  const { tag } = pageContext

  const simplifiedArticles = useMemo(() => simplifiedQueryData(nodes), [nodes])

  return (
    <div className={styles.container}>
      <div>
        <BriefHeader highlight={totalCount} description={message} title={tag} />
        <ArticleList data={simplifiedArticles} />
      </div>
      <ArchiveSidebar tags={tags} categories={categories} />
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
  query TagPage($tag: String, $published: Boolean) {
    articles: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: $published } } }
    ) {
      totalCount
      nodes {
        ...FrontmatterFragment
      }
    }
    tags: allMdx(filter: { frontmatter: { published: { eq: $published } } }) {
      group(field: { frontmatter: { tags: SELECT } }) {
        name: fieldValue
        totalCount
      }
    }
    categories: allMdx(filter: { frontmatter: { published: { eq: $published } } }) {
      group(field: { frontmatter: { categories: SELECT } }) {
        name: fieldValue
        totalCount
      }
    }
  }
`
