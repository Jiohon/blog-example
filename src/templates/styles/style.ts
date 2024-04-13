import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, stylish, responsive: r, prefixCls, iconPrefixCls }) => ({
  container: css`
    ${stylish.container}

    display: grid;
    grid-template-columns: auto 260px;
    gap: 4rem;

    .content {
      & > pre:last-child {
        margin-block-end: 0px;
        > div {
          margin-block-end: 0px;
        }
      }
    }

    ${r({
      tablet: css`
        display: block;

        .content {
          margin-block-end: 2rem;
        }
      `,
    })}
  `,

  title: cx(
    `${prefixCls}-article-title`,
    css`
      &.${prefixCls}-typography {
        padding-block-start: 5.6rem;
        padding-block-end: 1rem;
        margin: 0;
        font-weight: bold;
        font-family: ${token.fontFamilyCode};

        ${r({
          tablet: css`
            padding-block-start: 3.5rem;
            padding-block-end: 3rem;
            font-size: 23px;
          `,
          mobile: css`
            font-size: 22px;
          `,
        })}
      }
    `
  ),

  description: cx(`${prefixCls}-article-description`, css``),

  spacerLine: css`
    width: 100%;
    border-block-end: 1px dashed ${token.colorBorder};
    margin-block: 3.2rem;
  `,

  main: cx(
    `${prefixCls}-article-main`,
    css`
      padding-block-end: 5rem;
    `
  ),

  card: cx(
    `${prefixCls}-article-card`,
    css`
      ${stylish.card}
    `
  ),
}))
