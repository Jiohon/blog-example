import { Anchor, Card } from 'antd'
import { Link } from 'gatsby'
import { useStyles } from './style'

import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor'
import SVGIcon from '../SvgIcon'
import MenuBar from '../MenuBar'
import Sticky from '../Sticky'
import { HeadingItem } from '@/utils/helpers'

interface ArticleSidebarProps {
  date?: string
  tags?: Record<'name' | 'path', string>[]
  categories?: Record<'name' | 'path', string>[]
  icon?: any
  headings: HeadingItem[]
  articles: Frontmatter[]
}

/**
 * @description 文章详细信息侧边
 */

const ArticleSidebar: React.FC<ArticleSidebarProps> = ({
  tags = [],
  date,
  categories = [],
  icon,
  headings,
  articles,
}) => {
  const getLevel = () => headings.reduce((acc, cur) => (acc > cur.level ? acc : cur.level), 1)

  const { styles } = useStyles(getLevel())

  const recentArticles = articles.slice(0, 6)

  const handleChange = (link: string) => {
    if (!link || link === location.hash) return

    // history.pushState(null, '', link)
  }

  return (
    <Sticky>
      <SVGIcon id={icon!} width="7em" height="7em"></SVGIcon>
      {/* <Card bordered={false} className={styles.card}>
          <h2>About me</h2>
        </Card> */}

      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>日期</MenuBar.Title>
          <MenuBar.Text>发布于 {date}</MenuBar.Text>

          <MenuBar.Title>类别</MenuBar.Title>
          {categories.map((c) => (
            <MenuBar.Link key={c.path} to={c.path}>
              {c.name}
            </MenuBar.Link>
          ))}

          <MenuBar.Title>标签</MenuBar.Title>
          {tags.map((t) => (
            <MenuBar.Tag key={t.path} to={t.path}>
              {t.name}
            </MenuBar.Tag>
          ))}
        </MenuBar>
      </Card>

      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>目录</MenuBar.Title>
          <Anchor className={styles.anchor} offsetTop={90} affix={false} items={headings} onChange={handleChange} />
        </MenuBar>
      </Card>

      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>近期发布</MenuBar.Title>
          {recentArticles.map((article) => (
            <Link className={styles.articles} to={`/${article.slug}`} key={article.slug}>
              <SVGIcon id={article.icon} width="2em" height="2em"></SVGIcon>
              <div className="title">{article.title.split('-')[1]}</div>
            </Link>
          ))}
        </MenuBar>
      </Card>
    </Sticky>
  )
}

export default ArticleSidebar