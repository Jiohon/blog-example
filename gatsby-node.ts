import { createFilePath } from 'gatsby-source-filesystem'
import readingTime from 'reading-time'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin'
import type { GatsbyNode } from 'gatsby'

const __dirname = dirname(fileURLToPath(import.meta.url))

const { GATSBY_PUBLISHED } = process.env

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
      author: String!
      description: String!
      siteUrl: String!
      feedUrl: String!
      logo: String!
      version: String!
      repository: String!
    }

    type Mdx implements Node {
				frontmatter: Frontmatter!
		}

    type Frontmatter {
      title: String!
      date: Date! @dateformat
      lastUpdated: Date! @dateformat
      icon: String!
      slug: String!
      template: String!
      tags: [String!]!
      categories: [String!]!
      published: Boolean!
      description: String
    }

    type Fields {
      slug: String!
    }
  `)
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ loaders, actions }) => {
  // if (stage === 'build-html' || stage === 'develop-html') {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@@': path.resolve(__dirname, 'src/assets'),
        '@static': path.resolve(__dirname, 'static'),
      },
    },
    plugins: [new NodePolyfillPlugin({ includeAliases: ['path', 'url', 'stream'] })],
  })
  // }
}

const articlePage = path.resolve('./src/templates/article.tsx')
const aboutPage = path.resolve('./src/templates/about.tsx')
const tagPage = path.resolve('./src/templates/tag.tsx')
const categoryPage = path.resolve('./src/templates/category.tsx')

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  try {
    const { createPage, createRedirect } = actions

    createRedirect({ fromPath: '/rss', toPath: '/rss.xml', statusCode: 200 })

    const result = await graphql<allMdxNodesQuery<'articles'>>(`
      query PagesData {
        articles: allMdx(sort: { frontmatter: { date: DESC } }) {
          nodes {
            frontmatter {
              title
              description
              date(formatString: "YYYY-MM-DD")
              lastUpdated(formatString: "YYYY-MM-DD")
              icon
              slug
              template
              tags
              categories
              published
            }
            tableOfContents(maxDepth: 4)
            internal {
              contentFilePath
            }
          }
        }
      }
    `)

    if (result.errors || !result.data) {
      reporter.panicOnBuild('Error while running GraphQL query.', result.errors)
      return
    }

    const nodes = result?.data.articles.nodes
    const articles = nodes.filter((node) => node.frontmatter.template === 'article')
    const pages = nodes.filter((node) => node.frontmatter.template === 'page')
    const tagSet = new Set()
    const categorySet = new Set()

    // =====================================================================================
    // articles
    // =====================================================================================
    articles.forEach((article, i) => {
      const previous = i === articles.length - 1 ? null : articles[i + 1]
      const next = i === 0 ? null : articles[i - 1]

      if (article.frontmatter.tags) {
        article.frontmatter.tags.forEach((tag) => {
          tagSet.add(tag)
        })
      }

      if (article.frontmatter.categories) {
        article.frontmatter.categories.forEach((category) => {
          categorySet.add(category)
        })
      }

      createPage({
        path: article.frontmatter.slug,
        component: `${articlePage}?__contentFilePath=${article.internal.contentFilePath}`,
        context: {
          slug: article.frontmatter.slug,
          previous,
          next,
          frontmatter: article.frontmatter,
          tableOfContents: article.tableOfContents,
          published: true,
        },
      })
    })

    // =====================================================================================
    // aboutPage
    // =====================================================================================

    pages.forEach((page) => {
      createPage({
        path: page.frontmatter.slug,
        component: `${aboutPage}?__contentFilePath=${page.internal.contentFilePath}`,
        context: {
          slug: page.frontmatter.slug,
        },
      })
    })

    // =====================================================================================
    // Tags
    // =====================================================================================

    const tagList = Array.from(tagSet)
    tagList.forEach((tag) => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagPage,
        context: {
          tag,
          published: true,
        },
      })
    })

    // =====================================================================================
    // Categories
    // =====================================================================================

    const categoryList = Array.from(categorySet)
    categoryList.forEach((category) => {
      createPage({
        path: `/categories/${category}/`,
        component: categoryPage,
        context: {
          category,
          published: true,
        },
      })
    })
  } catch (error) {
    console.error(error)
  }
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // =====================================================================================
  // Slugs
  // =====================================================================================
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })

    createNodeField({
      node,
      name: 'timeToRead',
      value: readingTime(node.body as string),
    })
  }
}
