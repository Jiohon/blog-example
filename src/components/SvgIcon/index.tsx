import gatsbyConfig from '@/../gatsby-config'
import { Languages } from '@/utils/code'

type SVGIconProps = {
  id: Languages
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

/**
 * Using a SVG sprite for performance reasons
 */
const SVGIcon = ({ id, ...props }: SVGIconProps) => (
  <svg aria-hidden focusable="false" {...props}>
    <use href={`${gatsbyConfig.pathPrefix}/svg/languages.svg#${id}`} />
  </svg>
)
export default SVGIcon
