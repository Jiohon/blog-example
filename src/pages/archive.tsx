import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'

import ArticleList from '@/components/ArticleList'
import BriefHeader from '@/components/BriefHeader'
import SEO from '@/components/SEO'
import ArchiveSidebar from '@/components/Sidebar/ArchiveSidebar'
import { simplifiedQueryData } from '@/utils/helpers'
import { useStyles } from './styles/_archive.style'

type ArchiveProps = PageProps<allMdxNodesQuery<'archive'> & Record<'tags' | 'categories', Group>>

/**
 * @description 归档页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const Archive: React.FC<ArchiveProps> = (props) => {
  const { data } = props
  const title = '文章归档'
  const description = 'Notes & tutorials'

  const nodes = data.archive.nodes
  const categories = data.categories.group
  const tags = data.tags.group

  const { styles } = useStyles()

  const articles = useMemo(() => simplifiedQueryData(nodes), [data])

  return (
    <div className={styles.container}>
      <div>
        <BriefHeader title={title} />
        <ArticleList data={articles} />
      </div>

      <ArchiveSidebar tags={tags} categories={categories} />
    </div>
  )
}

export default Archive

export const Head: HeadFC = (props) => {
  const { location } = props

  return (
    <>
      <SEO title="文章归档" description="Notes & tutorials & Archives" pathName={location.pathname} />
    </>
  )
}

export const blogQuery = graphql`
  query {
    archive: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "article" }, published: { eq: true } } }
    ) {
      nodes {
        ...FrontmatterFragment
      }
    }
    tags: allMdx(filter: { frontmatter: { published: { eq: true } } }) {
      group(field: { frontmatter: { tags: SELECT } }) {
        name: fieldValue
        totalCount
      }
    }
    categories: allMdx(filter: { frontmatter: { published: { eq: true } } }) {
      group(field: { frontmatter: { categories: SELECT } }) {
        name: fieldValue
        totalCount
      }
    }
  }
`
