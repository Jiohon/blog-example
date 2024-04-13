import { useStyles } from './style'

interface TitleProps {
  title?: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  const { styles, cx } = useStyles('syntax-preHighlight')

  return (
    <div className={styles.TitleBox}>
      <div className={styles.titleStyle}>{title}</div>
    </div>
  )
}

export default Title
