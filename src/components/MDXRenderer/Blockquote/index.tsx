import { useStyles } from './style'

interface BlockquoteProps {
  id: string
  children: React.ReactNode
}

const Blockquote: React.FC<React.BlockquoteHTMLAttributes<HTMLQuoteElement>> = (props) => {
  const { styles } = useStyles()
  return <blockquote {...props} className={styles.blockquote}></blockquote>
}

export default Blockquote
