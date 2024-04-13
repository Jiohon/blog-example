import type { ColorMapToken } from 'antd/es/theme/interface/maps/colors'

import { NeutralPaletteOptions, SeedColors, TokenType } from './paletteGenerator'

export type TokenRelationship = (type: TokenType) => Partial<Record<keyof ColorMapToken, number>>

export interface MapTokenAlgorithmParams extends NeutralPaletteOptions {
  relationship?: TokenRelationship
  seedColors?: Partial<SeedColors>
  infoColorFollowPrimary?: boolean
  adjustWarning?: boolean
  brandColor?: string
}

type Magenta =
  | 'colorMagentaBg'
  | 'colorMagentaBgHover'
  | 'colorMagentaBorder'
  | 'colorMagentaBorderHover'
  | 'colorMagentaHover'
  | 'colorMagenta'
  | 'colorMagentaActive'
  | 'colorMagentaTextHover'
  | 'colorMagentaText'
  | 'colorMagentaTextActive'

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface FullToken extends Record<Magenta, string> {}
}
