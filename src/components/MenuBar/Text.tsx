import { FunctionComponent, ReactNode } from 'react'
import { useStyles } from './style'

interface TextProps {
  children: ReactNode
  extra?: ReactNode
  marker?: boolean
}

const Text: FunctionComponent<TextProps> = ({ children, marker = true, extra }) => {
  const { styles, cx } = useStyles()

  const ExtraChildren = () => {
    if (typeof extra !== 'object') {
      return <span className="extra">{extra}</span>
    }

    return extra
  }

  return (
    <div className={cx(styles.text)}>
      <div>
        {marker && <span className="inkVisible"></span>}
        {children}
      </div>
      <ExtraChildren />
    </div>
  )
}

export default Text
