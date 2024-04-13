import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, prefixCls }) => ({
  comment: cx(
    `${prefixCls}-comment`,
    css`
      margin-block-start: 5rem;
    `
  ),
}))
