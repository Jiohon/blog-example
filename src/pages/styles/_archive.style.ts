import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, stylish, responsive: r, prefixCls }) => ({
  container: css`
    ${stylish.container}
    display: grid;
    grid-template-columns: auto 260px;
    gap: 4rem;

    ${r({
      tablet: css`
        display: block;
      `,
    })}
  `,

  card: css`
    ${stylish.card}
  `,
}))
