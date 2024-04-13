import { Card } from 'antd'
import { useStyles } from './style'

import Sticky from '../Sticky'
import MenuBar from '../MenuBar'
import { useGetTaxonomies } from '@/hooks'

/**
 * @description 归档页面 - 侧边类别、标签信息
 */

const ArchiveSidebar = () => {
  const { styles } = useStyles()

  const { tags, categories } = useGetTaxonomies()

  return (
    <Sticky>
      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>类别</MenuBar.Title>
          {categories.map((c) => (
            <MenuBar.Link marker={false} key={c.path} to={c.path} extra={c.totalCount}>
              {c.name}
            </MenuBar.Link>
          ))}
        </MenuBar>
      </Card>
      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>标签</MenuBar.Title>
          {tags.map((t) => (
            <MenuBar.Tag key={t.path} to={t.path}>
              {t.name}
            </MenuBar.Tag>
          ))}
        </MenuBar>
      </Card>
    </Sticky>
  )
}

export default ArchiveSidebar
