import { useStyles } from './style'

interface CodeHighlightProps {
  children: string | React.ReactNode
}

const CodeHighlight: React.FC<CodeHighlightProps> = (props) => {
  const { styles } = useStyles()

  return <code {...props} className={styles.code}></code>
}

export default CodeHighlight
