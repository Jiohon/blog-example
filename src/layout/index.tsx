import { App, message } from 'antd'
import { graphql } from 'graphql'
import { useEventListener } from 'ahooks'
import SiteThemeProvider from '@/context/siteThemeProvider'
import SiteStoreProvider from '@/context/siteStoreProvider'

import { Footer } from './footer/index'
import { Header } from './header/index'

import { useStyles } from './style'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { styles } = useStyles()
  const [messageApi, contextHolder] = message.useMessage()

  useEventListener('copy', () => {
    messageApi.open({
      type: 'success',
      content: 'Copied 🎉',
      duration: 2,
    })
  })

  return (
    <SiteStoreProvider>
      <SiteThemeProvider>
        <App>
          {contextHolder}
          <div className={styles.layout}>
            <Header />
            <main className={styles.content}>{children}</main>
            <Footer />
          </div>
        </App>
      </SiteThemeProvider>
    </SiteStoreProvider>
  )
}

export default Layout
