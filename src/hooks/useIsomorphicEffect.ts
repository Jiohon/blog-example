import { useEffect, useLayoutEffect } from 'react'
import { isSSR } from '@/utils/func'

// For server-side rendering: https://github.com/react-spring/zustand/pull/34
// Deno support: https://github.com/pmndrs/zustand/issues/347

export const useIsomorphicLayoutEffect = isSSR ? useEffect : useLayoutEffect
