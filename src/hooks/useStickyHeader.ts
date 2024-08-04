import { useState } from 'react'
import { useResponsive } from 'antd-style'

import { useIsomorphicLayoutEffect } from './useIsomorphicEffect'
import { useWindowScrolling } from './useWindowScrolling'

/**
 * @description Header组件的动画效果。
 * @date 12/05/2024
 * @param {[desktop: number, mobile: number]} heights
 * @return {boolean} stickyHeader
 */
export const useStickyHeader = (heights: [desktop: number, mobile: number]) => {
  const { mobile } = useResponsive()
  const [stickyHeader, setStickyHeader] = useState(false)

  const [direction, scrollTop] = useWindowScrolling({
    active: true,
  })

  useIsomorphicLayoutEffect(() => {
    const limit = mobile ? heights[0] : heights[1]

    if (scrollTop >= limit && direction === 'down') {
      setStickyHeader(true)
    } else if (direction === 'up' && scrollTop === 0) {
      setStickyHeader(false)
    }
  }, [scrollTop, direction])

  return stickyHeader
}
