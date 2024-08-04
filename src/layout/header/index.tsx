import { Link } from 'gatsby'
import { Space } from 'antd'
import { useTheme } from 'antd-style'
import { animated } from '@react-spring/web'
import config from '@/config'
import ThemeSwitch from '@/components/ThemeSwitch'
import { useAnimatedHeader } from '@/hooks/useAnimatedHeader'
import { useStyles } from './style'

export const Header = () => {
  const { styles } = useStyles()
  const token = useTheme()

  const { headerHeight, headerHeightMobile } = token

  const [_styles] = useAnimatedHeader({
    isHeader: true,
    heights: [headerHeight, headerHeightMobile],
  })

  const headerMenu = config.headers.menu.filter((item) => item.show)
  const headerSocial = config.headers.social.filter((item) => item.show)

  return (
    <>
      <animated.header className={styles.header} style={{ ..._styles }}>
        <div className={styles.headerContainer}>
          <Space size="large">
            <Link to="/" className={styles.navigationLink}>
              <span className="logo">J</span>
            </Link>

            {headerMenu.map((item) => (
              <Link className={styles.navigationLink} to={item.url} key={item.label}>
                {item.label}
              </Link>
            ))}

            {headerSocial.map((item) => (
              <a className={styles.navigationLink} key={item.label} href={item.url} target="_blank" rel="noreferrer">
                <item.icon />
              </a>
            ))}
          </Space>

          <ThemeSwitch />
        </div>
      </animated.header>
    </>
  )
}
