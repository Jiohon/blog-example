import gatsbyConfig from '@/../gatsby-config'

export type SVGIconTypes =
  | 'cli'
  | 'discord'
  | 'elitepvpers'
  | 'gatsby'
  | 'general'
  | 'javascript'
  | 'mdx'
  | 'python'
  | 'react'
  | 'typescript'
  | 'pause'
  | 'play'
  | 'close'
  | 'check'
  | 'info'
  | 'warning'
  | 'lightbulb'
  | 'star'
  | 'arrow-right'
  | 'share'
  | 'moon'
  | 'sun'
  | 'computer'
  | 'refresh'
  | 'export'
  | 'backward'
  | 'download'
  | 'rust'
  | 'grid'
  | 'list'
  | 'masonry'

type SVGIconProps = {
  id: SVGIconTypes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

/**
 * Using a SVG sprite for performance reasons
 */
const SVGIcon = ({ id, ...props }: SVGIconProps) => (
  <svg aria-hidden focusable="false" {...props}>
    <use href={`${gatsbyConfig.pathPrefix}/svg/icons.svg#${id}`} />
  </svg>
)
export default SVGIcon
