import { Divider, Space, Typography } from 'antd'
import { useSiteMetadata } from '@/hooks'
import config from '@/config'
import { useStyles } from './style'

export const Footer = () => {
  const { styles } = useStyles()
  const site = useSiteMetadata()

  const footerMenu = config.footers.menu
  const footerFriend = config.footers.friend
  const ICPRecord = config.footers.ICPRecord

  return (
    <footer className={styles.footer}>
      <Typography.Text className={styles.text}>Power By {site.author}</Typography.Text>

      <Space size="middle" className={styles.footerContainer}>
        {footerMenu.map(
          (menu) =>
            menu.show && (
              <Typography.Link
                className={styles.href}
                key={menu.url}
                href={menu.url}
                title={menu.label}
                target="_blank"
              >
                <span>{menu.label}</span>
                <img className="image" src={menu.icon} alt={menu.label} />
              </Typography.Link>
            )
        )}

        {footerFriend.length > 0 && <Divider type="vertical" />}

        {footerFriend.map(
          (friend) =>
            friend.show && (
              <Typography.Link
                className={styles.href}
                key={friend.url}
                href={friend.url}
                title={friend.label}
                target="_blank"
              >
                <span>{friend.label}</span>
                <img className="image" src={friend.icon} alt={friend.label} />
              </Typography.Link>
            )
        )}
      </Space>

      {ICPRecord && (
        <Typography.Link className={styles.href} href="https://beian.miit.gov.cn/" target="_blank">
          {ICPRecord}
        </Typography.Link>
      )}
    </footer>
  )
}
