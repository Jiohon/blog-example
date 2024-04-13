import { Card, Space } from 'antd'
import type { HeadFC, PageProps } from 'gatsby'
import { Link, graphql } from 'gatsby'
import { useMemo } from 'react'

import { useSiteMetadata } from '@/hooks'
import BriefHeader from '@/components/BriefHeader'
import Heading from '@/components/Heading'
import SEO from '@/components/SEO'
import SVGIcon from '@/components/SvgIcon'
import { simplifiedQueryData } from '@/utils/helpers'
import { useStyles } from './styles/_index.style'

/**
 * @description 首页
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const Home: React.FC<PageProps<allMdxNodesQuery<'latest' | 'Highlights'> & MdxNodesQuery>> = ({ data }) => {
  const { styles } = useStyles()
  const site = useSiteMetadata()

  const latest = data.latest.nodes
  const Highlights = data.Highlights.nodes

  const simplifiedLatest = useMemo(() => simplifiedQueryData(latest), [data])
  const simplifiedHighlights = useMemo(() => simplifiedQueryData(Highlights), [data])

  return (
    <Space className={styles.container} direction="vertical" size="large">
      <BriefHeader greeting={`Hey, I'm ${site.author}`}>
        <p className={styles.briefDescription}>
          𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒍𝒊𝒗𝒆 𝒂 𝒍𝒊𝒇𝒆 𝒚𝒐𝒖‘𝒓𝒆 𝒑𝒓𝒐𝒖𝒅 𝒐𝒇. 𝑰𝒇 𝒚𝒐𝒖 𝒇𝒊𝒏𝒅 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖’𝒓𝒆 𝒏𝒐𝒕, 𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒕𝒉𝒆 𝒔𝒕𝒓𝒆𝒏𝒈𝒕𝒉 𝒕𝒐 𝒔𝒕𝒂𝒓𝒕 𝒂𝒍𝒍
          𝒐𝒗𝒆𝒓 𝒂𝒈𝒂𝒊𝒏.
        </p>
        <p className={styles.briefDescription}>
          我希望你过着自己引以为傲的生活。 如果你发现事实并非如此，我希望你有勇气重新开始。
        </p>
        <p className={styles.briefDescription}>𝑯𝒂𝒗𝒆 𝒂 𝒈𝒐𝒐𝒅 𝒅𝒂𝒚... </p>
      </BriefHeader>
      <Heading title="最近内容" slug="/archive" />
      <div className={styles.preview}>
        {simplifiedLatest.map((item) => {
          return (
            <Card className={styles.recentCard} key={item.slug} bordered={false}>
              <time className={styles.time}>{item.date}</time>
              <Link className={styles.titleLink} to={item.slug}>
                {item.title}
              </Link>
              <div className={styles.tagLinks}>
                {item.categories &&
                  item.categories
                    .filter((cat) => cat !== 'Highlight')
                    .map((cat) => {
                      return (
                        <Link to={`/categories/${cat}`} key={`cat-${cat}`}>
                          {cat}
                        </Link>
                      )
                    })}
              </div>
            </Card>
          )
        })}
      </div>

      {/* 查找目录下带有 Highlight 的markdown文件 */}
      {simplifiedHighlights.length > 0 && (
        <>
          <Heading title="热门内容" />

          <div className={styles.preview}>
            {simplifiedHighlights.map((item) => {
              return (
                <Card className={styles.highlightCard} key={`Highlight-${item.slug}`} bordered={false}>
                  <SVGIcon id={item.icon} width="5em" height="5em"></SVGIcon>
                  <div className="content">
                    <time className={styles.time}>{item.date}</time>
                    <Link className={styles.titleLink} to={item.slug}>
                      {item.title}
                    </Link>
                  </div>
                </Card>
              )
            })}
          </div>
        </>
      )}
    </Space>
  )
}

export default Home

export const Head: HeadFC = (props) => {
  const { location } = props

  return (
    <>
      <SEO pathName={location.pathname}></SEO>
    </>
  )
}

export const pageQuery = graphql`
  query {
    latest: allMdx(
      limit: 6
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "article" } } }
    ) {
      nodes {
        ...FrontmatterFragment
      }
    }
    Highlights: allMdx(
      limit: 6
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { categories: { eq: "Highlight" } } }
    ) {
      nodes {
        ...FrontmatterFragment
      }
    }

    mdx {
      ...FrontmatterFragment
    }
  }
`
