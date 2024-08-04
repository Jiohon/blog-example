import React, { Suspense, useMemo } from 'react'
import { Skeleton } from 'antd'
import { useTheme } from 'antd-style'
import { useThemeMode } from '@/hooks/useThemeMode'
import type { SandpackProps } from '@codesandbox/sandpack-react'
import { getReactFiles } from './files'
import { useStyles } from './style'

const OriginSandpack = React.lazy(() => import('./Sandpack'))

const SandpackFallback = () => {
  const { styles } = useStyles()

  return (
    <div className={styles.fallback}>
      <Skeleton.Node active style={{ height: 300, width: '100%' }}>
        <span className={styles.placeholder}>Loading Demo...</span>
      </Skeleton.Node>
    </div>
  )
}

interface SandpackSyntaxHighlightProps extends SandpackProps {
  codeString: string
}

const SandpackSyntaxHighlight: React.FC<React.PropsWithChildren<SandpackSyntaxHighlightProps>> = (props) => {
  const { customSetup, options, files, template, codeString } = props

  const { styles } = useStyles()
  const token = useTheme()
  const { appearance } = useThemeMode()

  const insideOptions = {
    activeFile: 'index.tsx',
    editorWidthPercentage: 60,
    showLineNumbers: true,
    showConsoleButton: true,
    showConsole: false,
    showRefreshButton: true,
    editorHeight: '400px',
    autorun: true,
    ...options,
  }

  const theme = {
    colors: {
      surface1: token.colorBgElevated,
      surface2: 'none',
    },
    font: {
      size: '0.95rem',
      mono: 'SF Mono',
      lineHeight: '22px',
    },
  }

  const insideFiles = useMemo(() => {
    return getReactFiles(appearance === 'dark', codeString)
  }, [appearance, template])

  return (
    <Suspense fallback={<SandpackFallback />}>
      {/* @ts-ignore */}
      <OriginSandpack className={styles.sandpack} theme={theme} options={insideOptions} {...insideFiles} />
    </Suspense>
  )
}

export default SandpackSyntaxHighlight
