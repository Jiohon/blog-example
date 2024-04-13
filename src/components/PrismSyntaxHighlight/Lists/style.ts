import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, prefixCls }) => {
  return {
    ul: cx(
      `${prefixCls}-ul`,
      css`
        padding-inline-start: 1.5rem;
      `
    ),
    ol: cx(
      `${prefixCls}-ol`,
      css`
        padding-inline-start: 1.2rem;
      `
    ),
    li: cx(
      `${prefixCls}-li`,
      css`
        line-height: 1.9;
        margin-block-end: 0.8rem;
        padding-inline-start: 0.25rem;
        &::marker {
          font-size: 1.1rem;
          line-height: 1;
          color: ${token.colorPrimaryHover};
        }
      `
    ),
  }
})
