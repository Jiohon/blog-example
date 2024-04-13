import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, stylish, prefixCls }) => ({
  sticky: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: sticky;
    top: calc(${token.headerHeight}px + 30px);

    ${r({
      mobile: css`
        top: ${token.headerHeightMobile};
      `,
    })}
  `,
}))
