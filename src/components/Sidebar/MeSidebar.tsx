import React from 'react'
import { Card } from 'antd'
import { useStyles } from './style'
import Sticky from '../Sticky'
import MenuBar from '../MenuBar'

/**
 * @description Me页面 - 侧边个人介绍
 */

const MeSidebar = () => {
  const { styles } = useStyles()
  return (
    <Sticky>
      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>Me</MenuBar.Title>
        </MenuBar>
      </Card>
    </Sticky>
  )
}

export default MeSidebar
