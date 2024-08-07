import gatsbyConfig from '@/../gatsby-config'
import { Languages } from '@/utils/code'

type SVGIconProps = {
  id: Languages
  width: string
  height: string
  style?: any
}

/**
 * Using a SVG sprite for performance reasons
 */
const SVGIcon = ({ id, style, ...props }: SVGIconProps) => (
  <svg aria-hidden focusable="false" {...props}>
    <use href={`${gatsbyConfig.pathPrefix}/svg/languages.svg#${id}`} />
  </svg>
)
export default SVGIcon
