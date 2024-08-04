import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, cx, responsive: r, token, prefixCls }) => ({
  briefHeader: cx(
    `${prefixCls}-briefHeader`,
    css`
      position: relative;
      width: 100%;
      padding-block: 4rem 3rem;

      ${r({
        mobile: css`
          padding-block: 3rem 2.5rem;
        `,
      })}
    `
  ),

  description: cx(
    `${prefixCls}-briefHeader-description`,
    css`
      color: ${token.colorTextDescription};
      font-weight: 500;
      font-size: 1.2rem;
      margin-block-end: 0.4rem;

      span {
        color: ${token.colorPrimaryHover};
        font-family: Prisma;
        font-size: 1.6rem;
      }
    `
  ),

  title: cx(
    `${prefixCls}-briefHeader-title`,
    css`
      line-height: 1.2;
      font-weight: 700;
      font-size: 2rem;
      letter-spacing: 0.1rem;
      margin: 0 !important;

      ${r({
        tablet: css`
          font-size: 1.9rem;
        `,
        mobile: css`
          font-size: 1.8rem;
        `,
      })}
    `
  ),

  greeting: cx(
    `${prefixCls}-briefHeader-greeting`,
    css`
      font-family: Coalhandluketrial;
      font-weight: normal;
      letter-spacing: 0.15rem;
      font-size: 2.2rem;
      line-height: 1.2;
      letter-spacing: 0.3rem;
      margin: 0 !important;

      ${r({
        tablet: css`
          font-size: 1.9rem;
        `,
        mobile: css`
          font-size: 1.8rem;
        `,
      })}
    `
  ),

  highlightText: cx(
    `${prefixCls}-briefHeader-highlightText`,
    css`
      color: ${token.colorPrimaryBorderHover};
    `
  ),
}))
