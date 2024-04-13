import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, stylish, responsive: r, prefixCls }) => ({
  container: css`
    ${stylish.container}
    height: calc(100vh - ${token.headerHeight}px - ${token.footerHeight}px);
    padding: 0;

    ${r({
      mobile: css`
        display: block;
        height: calc(100vh - ${token.headerHeightMobile}px - ${token.footerHeightMobile}px);
        padding: 0;
      `,
    })}
  `,
}))
