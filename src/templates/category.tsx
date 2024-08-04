import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'

import ArticleList from '@/components/ArticleList'
import BriefHeader from '@/components/BriefHeader'
import SEO from '@/components/SEO'
import ArchiveSidebar from '@/components/Sidebar/ArchiveSidebar'
import { simplifiedQueryData } from '@/utils/helpers'
import { useStyles } from './styles/style'

type CategoryTemplateProps = PageProps<
  allMdxNodesQuery<'articles'> & Record<'tags' | 'categories', Group>,
  { category: string }
>

/**
 * @description 类别页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const CategoryTemplate: React.FC<CategoryTemplateProps> = ({ data, pageContext }) => {
  const { styles } = useStyles()

  const articles = data.articles.nodes
  const categories = data.categories.group
  const tags = data.tags.group
  const totalCount = data?.articles.totalCount
  const { category } = pageContext

  const message = totalCount === 1 ? ' Article categorized as:' : ' Articles categorized as:'

  const simplifiedArticles = useMemo(() => simplifiedQueryData(articles), [articles])

  return (
    <div className={styles.container}>
      <div>
        <BriefHeader highlight={totalCount} description={message} title={category} />
        <ArticleList data={simplifiedArticles} />
      </div>
      <ArchiveSidebar tags={tags} categories={categories} />
    </div>
  )
}

export default CategoryTemplate

export const Head: HeadFC<allMdxNodesQuery<'categories'> & MdxNodesQuery, CategoryData> = (props) => {
  const { location, pageContext } = props
  const { category } = pageContext

  return (
    <>
      <SEO title={`articles tagged: ${category}`} description="Article categorized" pathName={location.pathname} />
    </>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String, $published: Boolean) {
    articles: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { categories: { in: [$category] }, published: { eq: $published } } }
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
