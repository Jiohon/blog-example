import { memo, useMemo, useRef } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { useThemeMode } from '@/hooks'
import { CodeNode, GetLanguageData, calculateLinesToHighlight } from '@/utils/code'
import { useStyles } from './style'
import Language from './Language'
import Title from './Title'

export interface PreHighlightProps extends GetLanguageData, CodeNode {
  codeString: string
} 

const PreHighlight: React.FC<PreHighlightProps> = memo((props) => {
  const { codeString, language = 'javascript', highlight = '', title } = props
  const highlightRef = useRef<HTMLPreElement>(null)
  const { styles, cx } = useStyles('syntax-preHighlight')
  const { appearance } = useThemeMode()

  const shouldHighlightLine = calculateLinesToHighlight(highlight)

  const theme = useMemo(() => (appearance === 'dark' ? themes.oneDark : themes.oneLight), [appearance])

  return (
    <Highlight code={codeString} language={language} theme={theme}>
      {({ tokens, getLineProps, getTokenProps }) => {
        return (
          <pre ref={highlightRef} className={styles.syntaxHighlight}>
            <Title title={title} />

            <Language code={codeString} language={language} highlightRef={highlightRef} />

            <div className={styles.syntaxHighlightCodeScorll}>
              <code className={styles.syntaxHighlightCode}>
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
          </pre>
        )
      }}
    </Highlight>
  )
})

export default PreHighlight
