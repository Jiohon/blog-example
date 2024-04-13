import { themes } from 'prism-react-renderer'
import GithubSvg from '@/assets/svg/github.svg'

import gatsby from '@/assets/image/gatsby.png'
import github from '@/assets/image/github.png'
import gatsbyConfig from '@/../gatsby-config'
import SiteConfig from './type'

const siteConfig: SiteConfig = {
  comment: true,
  themes: {
    brandColor: '#565EFF',
    light: {
      backgroundColor: '#f9f9fa',
      cardBackgroundColor: '#ffffff',
      codeHighlight: themes.oneLight,
      commentTheme: 'light',
    },
    dark: {
      backgroundColor: '#0c0c0e',
      cardBackgroundColor: '#1e1e20',
      codeHighlight: themes.oneDark,
      commentTheme: 'dark',
    },
  },
  headers: {
    menu: [
      { url: '/me', label: 'Me', icon: '', show: true },
      { url: '/archive', label: 'Archive', icon: '', show: true },
    ],
    social: [{ url: gatsbyConfig.siteMetadata.repository, label: 'GitHub', icon: GithubSvg, show: true }],
  },
  footers: {
    menu: [
      { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby, show: true },
      { url: gatsbyConfig.siteMetadata.repository, label: 'GitHub', icon: github, show: true },
    ],
    friend: [],
    ICPRecord: '',
  },
}

export default siteConfig
