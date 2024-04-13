import React from 'react'
import { HeadFC, navigate } from 'gatsby'
import { Button } from 'antd'

import SEO from '@/components/SEO'
import { useStyles } from './styles/_404.style'

const FourOhFour = () => {
  const { styles } = useStyles()

  const ToHome = () => {
    navigate('/')
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles[404]}>404</div>
        <Button type="text" onClick={ToHome}>
          Back to home page
        </Button>
      </div>
    </>
  )
}
export default FourOhFour

export const Head: HeadFC = (props) => {
  const { location } = props

  return (
    <>
      <SEO title="404" description="Page not found" pathName={location.pathname} />
    </>
  )
}
