import { useResponsive } from 'antd-style'
import { SpringValue, useSpring } from '@react-spring/web'
import { useIsomorphicLayoutEffect } from './useIsomorphicEffect'
import { useStickyHeader } from './useStickyHeader'
import { useWindowScrolling, SCROLL_DIR } from './useWindowScrolling'

type UseAnimatedHeaderProps = {
  isHeader?: boolean
  heights: [desktop: number, mobile: number]
}

/**
 * @description Header组件的动画效果。
 * @date 12/05/2024
 * @param {UseAnimatedHeaderProps} {
 *   isHeader = true,
 *   heights,
 * }
 * @return {*}  {([
 *   styles: { top: SpringValue<number> },
 *   isStuck: boolean,
 *   scrollTop: number,
 *   direction: SCROLL_DIR | undefined
 * ])}
 */
export const useAnimatedHeader = ({
  isHeader = true,
  heights,
}: UseAnimatedHeaderProps): [
  styles: { top: SpringValue<number> },
  scrollTop: number,
  direction: SCROLL_DIR | undefined
] => {
  const { mobile } = useResponsive()

  const [direction, scrollTop] = useWindowScrolling({
    active: true,
    threshold: [0, 20],
  })

  const isStuck = useStickyHeader(heights)

  const [styles, api] = useSpring(() => ({
    top: 0,
    y: 0,
  }))

  /**
   * Handles forcing the main nav to
   * drop back down when scrolling up.
   * Handles _not_ showing the main nav
   * if a subnav link is clicked to scroll
   * back up.
   */
  useIsomorphicLayoutEffect(() => {
    const limit = mobile ? heights[0] : heights[1]
    if (direction === 'down') {
      api.start({
        top: isHeader ? limit * -1 : 0,
        y: isHeader ? limit * -1 : 0,
      })
    } else if (direction === 'up') {
      api.start({
        top: 0,
        y: 0,
      })
    }
  }, [direction, isStuck])

  return [styles, scrollTop, direction]
}
