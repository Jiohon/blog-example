import { useStyles } from './style'

/**
 * @description 有序列表元素
 * @param props
 * @returns
 */
export const UL: React.FC<React.HTMLAttributes<HTMLUListElement>> = (props) => {
  const { styles } = useStyles()
  return <ul {...props} className={styles.ul}></ul>
}
/**
 * @description 无序列表元素
 * @param props
 * @returns
 */
const OL: React.FC<React.OlHTMLAttributes<HTMLOListElement>> = (props) => {
  const { styles } = useStyles()
  return <ol {...props} className={styles.ol}></ol>
}

/**
 * @description 列表条目元素
 * @param props
 * @returns
 */
const LI: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = (props) => {
  const { styles } = useStyles()
  return <li {...props} className={styles.li}></li>
}

const lists = {
  ul: UL,
  ol: OL,
  li: LI,
}

export default lists
