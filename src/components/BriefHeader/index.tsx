import React from 'react'
import { useStyles } from './style'

/**
 * @description 简介
 */

interface BriefHeaderProps {
  title?: string
  greeting?: string
  highlight?: number
  description?: string
  children?: React.ReactNode
}

const BriefHeader: React.FC<BriefHeaderProps> = ({ title, greeting, highlight, description, children }) => {
  const { styles } = useStyles()

  return (
    <div className={styles.briefHeader}>
      {description && (
        <div className={styles.description}>
          {highlight && <span>{highlight}</span>}
          {description}
        </div>
      )}
      {greeting && <div className={styles.greeting}>{greeting}</div>}
      {title && <div className={styles.title}>{title}</div>}
      {children && children}
    </div>
  )
}

export default BriefHeader
