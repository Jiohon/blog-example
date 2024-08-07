import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, prefixCls }) => {
  return {
    levelStyle: cx(
      `${prefixCls}-level`,
      css`
        &.h1 {
          ${r({
            tablet: css`
              font-size: 37.5px;
            `,
            mobile: css`
              font-size: 37px;
            `,
          })}
        }
        &.h2 {
          margin-block: 7rem 3rem;
          ${r({
            tablet: css`
              font-size: 29.5px;
            `,
            mobile: css`
              font-size: 29px;
            `,
          })}
        }
        &.h3 {
          margin-block: 5rem 2rem;
          ${r({
            tablet: css`
              font-size: 23.5px;
            `,
            mobile: css`
              font-size: 23px;
            `,
          })}
        }
        &.h4 {
          margin-block: 3rem 1.5rem;
          ${r({
            tablet: css`
              font-size: 19.5px;
            `,
            mobile: css`
              font-size: 19px;
            `,
          })}
        }
        &.h5 {
          margin-block-end: 1rem;
          ${r({
            tablet: css`
              font-size: 15.5px;
            `,
            mobile: css`
              font-size: 15px;
            `,
          })}
        }
      `
    ),

    heading: css`
      &.${prefixCls}-typography {
        position: relative;
        color: ${token.colorText};
        font-family: ${token.fontFamilyCode};
      }

      a {
        color: ${token.colorPrimaryHover};
      }

      &:hover {
        a {
          opacity: 1;
          color: ${token.colorPrimaryHover};
        }
      }
    `,

    link: cx(
      `${prefixCls}-link`,
      css`
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        scroll-margin-top: 90px;
        transform: translateX(-100%);
        padding-inline-end: 4px;
        height: 100%;
        opacity: 0;
      `
    ),
  }
})
