import { themes } from 'prism-react-renderer'
import GithubSvg from '@/assets/svg/github.svg'

import GatsbyFooterSvg from '@/assets/svg/gatsby-footer.svg'
import GithubFooterSvg from '@/assets/svg/github-footer.svg'

import SiteConfig from './type'

const siteConfig: SiteConfig = {
  comment: true,
  themes: {
    brandColor: '#5066FF',
    light: {
      backgroundColor: '#ffffff',
      cardBackgroundColor: '#fafafb',
      codeHighlight: themes.oneLight,
    },
    dark: {
      backgroundColor: '#0f0f11',
      cardBackgroundColor: '#1d1d1e',
      codeHighlight: themes.oneDark,
    },
  },
  headers: {
    menu: [
      { url: '/about', label: 'About', show: true },
      { url: '/archive', label: 'Archive', show: true },
    ],
    social: [{ url: 'https://github.com/jiohon', label: 'GitHub', icon: GithubSvg, show: true }],
  },
  footers: {
    menu: [
      { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: GatsbyFooterSvg, show: true },
      { url: 'https://github.com/jiohon', label: 'GitHub', icon: GithubFooterSvg, show: true },
    ],
    friend: [],
    ICPRecord: '蜀ICP备2022009836号',
  },
}

export default siteConfig
