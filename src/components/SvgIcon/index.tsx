import { Languages } from '@/utils/code'

type SVGIconProps = {
  id: Languages
  width: string
  height: string
  style?: any
}

// https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/abap.svg
/**
 * Using a SVG sprite for performance reasons
 */
const SVGIcon = ({ id, style, ...props }: SVGIconProps) => {
  return (
    <svg aria-hidden focusable="false" {...props}>
      <use href={`/svg/languages.svg#${id}`} />
    </svg>
  )
}
export default SVGIcon
