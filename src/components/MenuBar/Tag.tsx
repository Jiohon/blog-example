import { FunctionComponent, ReactNode, useMemo } from 'react'
import { navigate } from 'gatsby'
import { Tag as AntdTag } from 'antd'
import { isSSR } from '@/utils/func'
import { useStyles } from './style'

interface TagProps {
  to: string
  children: ReactNode
}

const Tag: FunctionComponent<TagProps> = ({ to, children }) => {
  const { styles, cx } = useStyles()

  const pathname = useMemo(() => {
    if (isSSR) return ''
    return location.pathname
  }, [])

  const checked = useMemo(() => to === pathname, [pathname])

  return (
    <>
      <AntdTag.CheckableTag
        className={cx(styles.tag)}
        checked={checked}
        onClick={() => {
          navigate(to)
        }}
      >
        {children}
      </AntdTag.CheckableTag>
    </>
  )
}

export default Tag
