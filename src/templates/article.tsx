import { HeadFC, PageProps, graphql } from 'gatsby'
import { Typography } from 'antd'

import SEO from '@/components/SEO'
import ArticleSidebar from '@/components/Sidebar/ArticleSidebar'
import MDXRenderer from '@/components/MDXRenderer'
import Comment from '@/components/Comment'
import { useStyles } from './styles/style'
import { flattenHead } from '@/utils/helpers'

/**
 * @description 文章页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const ArticleTemplate: React.FC<PageProps<allMdxNodesQuery<'allArticle'> & MdxNodesQuery<'currentArticle'>>> = (
  props
) => {
  const { children, data } = props
  const { allArticle, currentArticle } = data
  const { styles } = useStyles()

  const frontmatter = currentArticle.frontmatter
  const headings = flattenHead(currentArticle.tableOfContents.items, 1)
  const articles = allArticle.nodes.map((e) => ({ ...e.frontmatter })).filter((a) => a.slug !== frontmatter.slug)
  const tags = frontmatter?.tags.map((t) => ({ name: t, path: `/tags/${t}` }))
  const categories = frontmatter?.categories.map((c) => ({ name: c, path: `/categories/${c}` }))

  return (
    <div className={styles.container}>
      <div className="content">
        <Typography.Title level={3} className={styles.title}>
          {frontmatter?.title}
        </Typography.Title>
        <div className={styles.spacerLine}></div>
        <MDXRenderer>{children}</MDXRenderer>
        <Comment />
      </div>

      <ArticleSidebar
        date={frontmatter?.date}
        tags={tags}
        categories={categories}
        icon={frontmatter?.icon}
        headings={headings}
        articles={articles}
      />
    </div>
  )
}

export default ArticleTemplate

export const Head: HeadFC<allMdxNodesQuery<'allArticle'> & MdxNodesQuery<'currentArticle'>> = (props) => {
  const { location, data } = props
  const frontmatter = data.currentArticle.frontmatter

  return (
    <>
      <SEO title={frontmatter?.title} description={frontmatter.description} pathName={location.pathname} />
    </>
  )
}

export const recentQuery = graphql`
  query ArticlePage($slug: String!) {
    allArticle: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "article" }, published: { eq: true } } }
    ) {
      nodes {
        ...FrontmatterFragment
      }
    }
    currentArticle: mdx(frontmatter: { slug: { eq: $slug } }) {
      ...FrontmatterFragment
      newFrontmatter: frontmatter {
        date(formatString: "YYYY-MM-DD")
      }
      tableOfContents(maxDepth: 5)
    }
  }
`

export const FrontmatterFragmentQuery = graphql`
  fragment FrontmatterFragment on Mdx {
    frontmatter {
      title
      description
      date(formatString: "MMMM DD, YYYY")
      lastUpdated(formatString: "MMMM DD, YYYY")
      icon
      slug
      template
      tags
      categories
      published
    }
  }
`
