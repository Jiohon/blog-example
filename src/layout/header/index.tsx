import { Link } from 'gatsby'
import { Space } from 'antd'
import { useSiteMetadata } from '@/hooks'
import ThemeSwitch from '@/components/ThemeSwitch'
import config from '@/config'
import { useStyles } from './style'

export const Header = () => {
  const { styles } = useStyles()
  const site = useSiteMetadata()

  const headerMenu = config.headers.menu
  const headerSocial = config.headers.social

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Space size="middle">
            <Link to="/" className={styles.navigationLink}>
              <span className="logo">{site.author}</span>
            </Link>

            {headerMenu.map(
              (menu) =>
                menu.show && (
                  <Link className={styles.navigationLink} to={menu.url} key={menu.label}>
                    <span className="label">{menu.label}</span>
                  </Link>
                )
            )}

            {headerSocial.map(
              (social) =>
                social.show && (
                  <a
                    className={styles.navigationLink}
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <social.icon />
                  </a>
                )
            )}
          </Space>

          <ThemeSwitch />
        </div>
      </header>
    </>
  )
}
