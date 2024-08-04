import { Card } from 'antd'
import { useStyles } from './style'

import Sticky from '../Sticky'
import MenuBar from '../MenuBar'

interface ArchiveSidebarProps {
  tags: GroupItem[]
  categories: GroupItem[]
}

/**
 * @description 归档页面 - 侧边类别、标签信息
 */
const ArchiveSidebar: React.FC<ArchiveSidebarProps> = ({ tags, categories }) => {
  const { styles } = useStyles()

  const Categories = categories.map((category) => ({ ...category, path: `/categories/${category.name}/` }))
  const Tags = tags.map((tag) => ({ ...tag, path: `/tags/${tag.name}/` }))

  return (
    <Sticky>
      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>类别</MenuBar.Title>
          {Categories.map((c) => (
            <MenuBar.Link marker={false} key={c.name} to={c.path} extra={c.totalCount}>
              {c.name}
            </MenuBar.Link>
          ))}
        </MenuBar>
      </Card>
      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>标签</MenuBar.Title>
          {Tags.map((t) => (
            <MenuBar.Tag key={t.name} to={t.path}>
              {t.name}
            </MenuBar.Tag>
          ))}
        </MenuBar>
      </Card>
    </Sticky>
  )
}

export default ArchiveSidebar
