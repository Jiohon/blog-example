import { useStaticQuery, graphql } from 'gatsby'

export type SiteMetadata = {
  /**
   * @title 站点作者
   */
  author: string
  /**
   * @title 站点名称
   */
  title: string
  /**
   * @title 站点地址
   */
  siteUrl: string
  /**
   * @title 站点仓库地址
   */
  repository: string
  /**
   * @title 站点logo
   */
  logo: string
  /**
   * @title 站点描述
   */
  description: string
  /**
   * @title 站点rss地址
   */
  feedUrl: string
  /**
   * @title 站点版本
   */
  version: string
}

export type SiteMetadataType = {
  site: {
    siteMetadata: SiteMetadata
  }
}

type UseSiteMetadataType = SiteMetadataType['site']['siteMetadata']

export const useSiteMetadata = (): UseSiteMetadataType => {
  const { site } = useStaticQuery<SiteMetadataType>(graphql`
    query siteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          logo
          siteUrl
          feedUrl
          version
          repository
        }
      }
    }
  `)
  return site.siteMetadata
}


