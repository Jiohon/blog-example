import React, { memo, useMemo, useRef } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { useThemeMode } from '@/hooks/useThemeMode'
import { CodeNode, GetLanguageData, calculateLinesToHighlight } from '@/utils/code'
import { useStyles } from './style'

export interface PrismSyntaxHighlightProps extends GetLanguageData, CodeNode {
  codeString: string
}

const PrismSyntaxHighlight: React.FC<PrismSyntaxHighlightProps> = memo((props) => {
  const { codeString, language = 'javascript', highlight = '', title = '' } = props
  const { styles, cx } = useStyles('prism')

  const highlightRef = useRef<HTMLPreElement>(null)
  const { appearance } = useThemeMode()

  const shouldHighlightLine = calculateLinesToHighlight(highlight)

  const theme = useMemo(() => (appearance === 'dark' ? themes.oneDark : themes.oneLight), [appearance])

  return (
    <Highlight code={codeString} language={language} theme={theme}>
      {({ tokens, getLineProps, getTokenProps }) => {
        return (
          <div className={styles.PrismScorll}>
            <code className={styles.PrismCode}>
              <div className={styles.lineNumbers}>
                {tokens.map((line, i) => (
                  <span key={`number-${i}`} className={cx('number', shouldHighlightLine(i) && styles.LineHighlight)}>
                    {i + 1}
                    {shouldHighlightLine(i)}
                  </span>
                ))}
              </div>
              <div className={styles.lines}>
                {tokens.map((line, i) => (
                  <div
                    key={`line-${i}`}
                    {...getLineProps({ line })}
                    className={cx('line', shouldHighlightLine(i) && styles.LineHighlight)}
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </div>
            </code>
          </div>
        )
      }}
    </Highlight>
  )
})

export default PrismSyntaxHighlight
