import { FunctionComponent, ReactNode } from 'react'
import { useStyles } from './style'

interface MenuBarProps {
  children?: ReactNode
}

const MenuBar: FunctionComponent<MenuBarProps> = (props) => {
  const { styles } = useStyles()

  return (
    <>
      <div className={styles.menuBar}>{props.children}</div>
    </>
  )
}

export default MenuBar
