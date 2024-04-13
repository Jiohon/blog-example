import React from 'react'
import { Link } from 'gatsby'
import { Typography } from 'antd'
import { useStyles } from './style'

/**
 * @description 标题
 */

interface HeadingProps {
  title: string
  description?: string
  slug?: string
}

const Heading: React.FC<HeadingProps> = ({ title, slug }) => {
  const { styles } = useStyles()

  return (
    <div className={styles.heading}>
      <Typography.Title level={4} className={styles.title}>
        {title}
      </Typography.Title>
      {slug && (
        <Link className={styles.link} to={slug}>
          View all
        </Link>
      )}
    </div>
  )
}

export default Heading
