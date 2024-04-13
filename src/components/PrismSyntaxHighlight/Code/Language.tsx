import { useState, useRef } from 'react'
import { Button, App } from 'antd'
import { useSpring, animated } from '@react-spring/web'
import { useDebounceFn, useHover } from 'ahooks'
import copyToClipboard from 'copy-to-clipboard'
import { Languages } from '@/utils/code'
import { useStyles } from './style'

interface LanguageProps {
  code: string
  language: Languages
  highlightRef: React.RefObject<HTMLPreElement>
}

const Language: React.FC<LanguageProps> = ({ code, language, highlightRef }) => {
  const { styles } = useStyles()
  const { message } = App.useApp()
  const [copied, setCopied] = useState<boolean>(false)
  const isHover = useHover(highlightRef)

  // 定义两个不同的样式
  const languageElementProps = useSpring({
    opacity: isHover ? 0 : 1,
    display: isHover ? 'none' : 'block',
  })

  const copyElementProps = useSpring({
    opacity: isHover ? 1 : 0,
    display: isHover ? 'block' : 'none',
  })

  const { run } = useDebounceFn(
    () => {
      setCopied(false)
    },
    {
      wait: 2000,
    }
  )

  const copyClick = () => {
    copyToClipboard(code)
    setCopied(true)
    message.open({
      type: 'success',
      content: 'Copied 🎉',
      duration: 2,
    })
    run()
  }
  return (
    <div className={styles.language}>
      <animated.div style={copyElementProps}>
        <Button size="small" type="dashed" className="copyButton" onClick={copyClick}>
          {/* {copied ? 'Copied!' : 'Copy'} */}
          {copied ? <CopiedIcon /> : <CopyIcon />}
        </Button>
      </animated.div>
      <animated.div className="language" style={languageElementProps}>
        {language}
      </animated.div>
    </div>
  )
}

const CopyIcon = () => {
  const { theme } = useStyles()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" height={18} width={18}>
      <g id="empty-clipboard--work-plain-clipboard-task-list-company-office">
        <path
          id="Rectangle 659"
          fill={theme.colorPrimaryBorder}
          d="M1.6071428571428572 3.2142857142857144A1.9285714285714288 1.9285714285714288 0 0 1 3.535714285714286 1.2857142857142858h10.928571428571429a1.9285714285714288 1.9285714285714288 0 0 1 1.9285714285714288 1.9285714285714288v12.857142857142858a1.9285714285714288 1.9285714285714288 0 0 1 -1.9285714285714288 1.9285714285714288h-10.928571428571429a1.9285714285714288 1.9285714285714288 0 0 1 -1.9285714285714288 -1.9285714285714288v-12.857142857142858Z"
          strokeWidth={1}
        />
        <path
          id="Union"
          fill={theme.colorPrimaryHover}
          d="M5.7857142857142865 1.2857142857142858a1.2857142857142858 1.2857142857142858 0 0 1 1.2857142857142858 -1.2857142857142858h3.8571428571428577a1.2857142857142858 1.2857142857142858 0 0 1 1.2857142857142858 1.2857142857142858v0.6428571428571429a1.2857142857142858 1.2857142857142858 0 0 1 -1.2857142857142858 1.2857142857142858h-3.8571428571428577a1.2857142857142858 1.2857142857142858 0 0 1 -1.2857142857142858 -1.2857142857142858V1.2857142857142858Z"
          strokeWidth={1}
        />
      </g>
    </svg>
  )
}

const CopiedIcon = () => {
  const { theme } = useStyles()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" height={18} width={18}>
      <g id="clipboard-check--checkmark-edit-task-edition-checklist-check-success-clipboard-form">
        <path
          id="Rectangle 659"
          fill={theme.colorPrimaryBorder}
          d="M1.6071428571428572 3.2142857142857144A1.9285714285714288 1.9285714285714288 0 0 1 3.535714285714286 1.2857142857142858h10.928571428571429a1.9285714285714288 1.9285714285714288 0 0 1 1.9285714285714288 1.9285714285714288v12.857142857142858a1.9285714285714288 1.9285714285714288 0 0 1 -1.9285714285714288 1.9285714285714288h-10.928571428571429a1.9285714285714288 1.9285714285714288 0 0 1 -1.9285714285714288 -1.9285714285714288v-12.857142857142858Z"
          strokeWidth={1}
        />
        <path
          id="Union"
          fill={theme.colorPrimaryHover}
          fillRule="evenodd"
          d="M7.071428571428572 0a1.2857142857142858 1.2857142857142858 0 0 0 -1.2857142857142858 1.2857142857142858v0.6428571428571429a1.2857142857142858 1.2857142857142858 0 0 0 1.2857142857142858 1.2857142857142858h3.8571428571428577a1.2857142857142858 1.2857142857142858 0 0 0 1.2857142857142858 -1.2857142857142858V1.2857142857142858a1.2857142857142858 1.2857142857142858 0 0 0 -1.2857142857142858 -1.2857142857142858h-3.8571428571428577Zm5.914285714285715 8.935714285714287a0.9642857142857144 0.9642857142857144 0 0 0 -1.542857142857143 -1.1571428571428573L8.133428571428572 12.191142857142857l-1.1700000000000002 -0.7791428571428571a0.9642857142857144 0.9642857142857144 0 0 0 -1.0697142857142858 1.6045714285714288l1.9285714285714288 1.2857142857142858A0.9642857142857144 0.9642857142857144 0 0 0 9.128571428571428 14.07857142857143l3.8571428571428577 -5.142857142857143Z"
          clipRule="evenodd"
          strokeWidth={1}
        />
      </g>
    </svg>
  )
}

export default Language
