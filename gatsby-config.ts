import type { GatsbyConfig } from 'gatsby'
import packageJson from './package.json'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeMetaAsAttributes from './plugins/rehype-meta-as-attributes'
import { SiteMetadataType } from './src/hooks/useSiteMetadata'

const dotenv = require('dotenv')

dotenv.config({ path: [`.env`, `.env.${process.env.NODE_ENV}`] }).parsed

const __dirname = dirname(fileURLToPath(import.meta.url))

type GatsbyConfigType = GatsbyConfig & {
  siteMetadata: SiteMetadataType['site']['siteMetadata']
}

const siteMetadata: SiteMetadataType['site']['siteMetadata'] = {
  title: packageJson.title,
  author: packageJson.author,
  description: packageJson.description,
  siteUrl: packageJson.homepage,
  feedUrl: `${packageJson.homepage}/rss.xml`,
  logo: `${packageJson.homepage}/logo.png`,
  version: packageJson.version,
  repository: packageJson.repository.url,
}

const config: GatsbyConfigType = {
  jsxRuntime: 'automatic',
  flags: {
    DEV_SSR: true,
  },
  graphqlTypegen: true,
  pathPrefix: '/',
  siteMetadata,
  plugins: [
    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-page-creator
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/src/templates`,
    //   },
    // },

    // ===================================================================================
    // Meta
    // ===================================================================================
    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            query: `{
                      allMdx(
                        limit: 30
                        sort: {frontmatter: {date: DESC}}
                        filter: {frontmatter: {published: {eq: true}}}
                      ) {
                        nodes {
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
                      }
                    }`,

            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                const { frontmatter } = node
                const { siteMetadata } = site

                return Object.assign({}, frontmatter, {
                  description: frontmatter.description,
                  date: frontmatter.date,
                  url: siteMetadata.siteUrl + frontmatter.slug,
                  guid: siteMetadata.siteUrl + frontmatter.slug,
                  custom_elements: [
                    {
                      'content:encoded': `<p>${frontmatter.description}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${siteMetadata.siteUrl}${frontmatter.slug}">Keep reading</a>.</strong></div><br /> <br />`,
                    },
                  ],
                })
              })
            },

            output: '/rss.xml',
            title: 'Hush | RSS Feed',
          },
        ],
      },
    },

    // ===================================================================================
    // Images and static
    // ===================================================================================

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, 'png'],
          placeholder: `none`,
          backgroundColor: `transparent`,
        },
      },
    },

    // @see: https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/
    'gatsby-transformer-sharp',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
    'gatsby-plugin-image',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `.${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `.${__dirname}/src/assets/`,
      },
    },

    // ===================================================================================
    // Markdown
    // ===================================================================================

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeMetaAsAttributes],
        },
        gatsbyRemarkPlugins: [
          // @see: https://www.gatsbyjs.com/plugins/gatsby-remark-images/
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },
  ],
}

export default config
