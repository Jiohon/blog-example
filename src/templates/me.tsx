import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'

import SEO from '@/components/SEO'
import MeSidebar from '@/components/Sidebar/MeSidebar'
import PrismSyntaxHighlight from '@/components/PrismSyntaxHighlight'
import { useStyles } from './styles/style'

/**
 * @description 个人介绍页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const MeTemplate: React.FC<PageProps<MdxNodesQuery<'me'>, MdxQuery>> = (props) => {
  const { data, children } = props
  const { styles } = useStyles()

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>{data.me.frontmatter.title}</h2>
        <PrismSyntaxHighlight>{children}</PrismSyntaxHighlight>
      </div>

      <MeSidebar />
    </div>
  )
}

export default MeTemplate

export const Head: HeadFC<MdxQuery> = ({ location, data }) => {
  const frontmatter = data.frontmatter

  return (
    <>
      <SEO
        title={frontmatter?.title || 'About me'}
        description={frontmatter?.description}
        pathName={location.pathname}
      />
    </>
  )
}

export const pageQuery = graphql`
  query MeBySlug($slug: String!) {
    me: mdx(frontmatter: { slug: { eq: $slug } }) {
      ...FrontmatterFragment
    }
  }
`
