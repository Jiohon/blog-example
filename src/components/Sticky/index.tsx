import { FunctionComponent } from 'react'
import { useStyles } from './style'

interface StickyProps {
  children
}

const Sticky: FunctionComponent<StickyProps> = ({ children }) => {
  const { styles } = useStyles()

  return (
    <aside>
      <div className={styles.sticky}>{children}</div>
    </aside>
  )
}

export default Sticky
