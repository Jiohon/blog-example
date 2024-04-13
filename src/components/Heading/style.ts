import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r, cx, prefixCls }) => ({
  heading: cx(
    `${prefixCls}-heading`,
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 0;
      padding: 0;
    `
  ),

  title: cx(
    `${prefixCls}-heading-title`,
    css`
      &.${prefixCls}-typography {
        margin: 0 !important;

        ${r({
          tablet: css`
            font-size: 18px;
          `,
          mobile: css`
            font-size: 16px;
          `,
        })}
      }
    `
  ),

  link: cx(
    `${prefixCls}-heading-link`,
    css`
      ${stylish.tagLink}

      font-size: 0.8rem;
    `
  ),
}))
