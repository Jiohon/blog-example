import { useRef, useState } from 'react'
import { raf } from '@react-spring/rafz'
import { useIsomorphicLayoutEffect } from './useIsomorphicEffect'

type SCROLL_UP = 'up'
type SCROLL_DOWN = 'down'
export type SCROLL_DIR = SCROLL_DOWN | SCROLL_UP

type UseWindowScrolling = (args: {
  threshold?: number | [down: number, up: number]
  active?: boolean
  yOffset?: number
  onScroll?: (e: Event) => void
}) => [direction: SCROLL_DIR | undefined, scrollTop: number]

/**
 * @description 用于处理窗口滚动的自定义Hook。
 * @date 12/05/2024
 * @export
 * @param {{
 *   threshold?: number | [down: number, up: number]
 *   active?: boolean
 *   yOffset?: number
 *   onScroll?: (e: Event) => void
 * }} {
 *   threshold,
 *   active,
 *   yOffset,
 *   onScroll,
 * }
 * @return {*}  {([direction: SCROLL_DIR | undefined, scrollTop: number])}
 */
export const useWindowScrolling: UseWindowScrolling = ({ active = true, threshold = 0, yOffset = 0, onScroll }) => {
  const [scrollTop, setScrollTop] = useState(0)
  const [direction, setDirection] = useState<SCROLL_DIR | undefined>(undefined)

  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useIsomorphicLayoutEffect(() => {
    const updateScrollDir = () => {
      const scrollY = window.scrollY

      const _direction = scrollY > lastScrollY.current ? 'down' : 'up'

      const thresholdValue = Array.isArray(threshold) ? threshold[_direction === 'down' ? 0 : 1] : threshold

      if (!active) {
        setDirection(undefined)
        return
      }

      if (scrollY < yOffset) {
        ticking.current = false
        return
      }

      if (Math.abs(scrollY - lastScrollY.current) < thresholdValue) {
        ticking.current = false
        return
      }

      lastScrollY.current = scrollY > 0 ? scrollY : 0
      ticking.current = false

      setDirection(_direction)
      setScrollTop(scrollY)
    }

    const handleScroll = (e?: Event) => {
      if (!ticking.current) {
        raf(updateScrollDir)
        ticking.current = true
      }
      if (onScroll && e) {
        onScroll(e)
      }
    }

    updateScrollDir()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [active, threshold])

  return [direction, scrollTop]
}
