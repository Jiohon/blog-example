import { GetAntdTheme } from 'antd-style'
import { darkTheme, lightTheme } from './theme'

export const getAntdTheme: GetAntdTheme = (appearance) => {
  return appearance === 'dark' ? darkTheme : lightTheme
}
