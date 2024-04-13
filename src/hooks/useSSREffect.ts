import { useEffect, useLayoutEffect } from 'react'

export const useSSREffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
