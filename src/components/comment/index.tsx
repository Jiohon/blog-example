import Giscus from '@giscus/react'
import config from '@/config'
import { useThemeMode } from '@/hooks'
import { useStyles } from './style'

interface CommentProps {}

const Comment: React.FC<CommentProps> = () => {
  if (!config.comment) return
  const { styles } = useStyles()

  const { appearance } = useThemeMode()

  return (
    <div className={styles.comment}>
      <Giscus
        id="comments"
        repo="jiohon/blog-example"
        repoId="R_kgDOLr6i6g"
        category="Announcements"
        categoryId="DIC_kwDOLr6i6s4Cek0U"
        mapping="specific"
        term="Welcome to giscus!"
        reactionsEnabled="0"
        inputPosition="top"
        theme={`noborder_${appearance}`}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  )
}

export default Comment
