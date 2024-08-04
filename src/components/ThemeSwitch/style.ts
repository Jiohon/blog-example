import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, stylish, prefixCls }) => ({
  button: css`
    span {
      margin-inline-end: 0 !important;
    }
  `,
}))
