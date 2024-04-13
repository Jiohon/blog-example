import type { ColorMapToken } from 'antd/es/theme/interface/maps/colors'

import { MapTokenAlgorithmParams, TokenRelationship } from './types'
import { ColorPalettes, TokenType, generateColorPalette } from './paletteGenerator'
import config from '@/config'

const defaultRelationship: TokenRelationship = (type) => {
  const key = type.toUpperCase()[0] + type.slice(1)

  return {
    [`color${key}Bg`]: 1,
    [`color${key}BgHover`]: 2,
    [`color${key}Border`]: 3,
    [`color${key}BorderHover`]: 4,
    [`color${key}Hover`]: 5,
    [`color${key}`]: 6,
    [`color${key}Active`]: 7,
    [`color${key}TextHover`]: 8,
    [`color${key}Text`]: 9,
    [`color${key}TextActive`]: 10,
  }
}

export const genMapTokenAlgorithm = (params?: MapTokenAlgorithmParams) => {
  const { relationship = defaultRelationship, brandColor = config.themes.brandColor } = params || {}

  const seedColors = {
    primary: brandColor,
    ...params?.seedColors,

    magenta: '#d952b1',
  }

  const palettes: ColorPalettes = {
    magenta: generateColorPalette(seedColors.magenta, params).map((c) => c.hex),
  }

  let tokens = {} as Partial<Record<keyof ColorMapToken, string>>

  const types: TokenType[] = ['magenta']

  types.forEach((type) => {
    Object.entries(relationship(type)).forEach(([key, value]) => {
      tokens[key as keyof ColorMapToken] = palettes[type][value]
    })
  })

  return { brandColor, palettes, tokens }
}
