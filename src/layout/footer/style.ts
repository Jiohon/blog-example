import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r, cx, token, prefixCls }) => ({
  footer: cx(
    `${prefixCls}-layout-footer`,
    css`
      display: flex;
      flex-wrap: wrap;
      align-content: space-evenly;
      justify-content: center;
      min-height: ${token.footerHeight}px;
      padding-block: 2.5rem;
      margin-block-start: 2rem;
      color: ${token.colorTextTertiary};
      gap: 1.2rem;

      ${r({
        mobile: css`
          height: ${token.footerHeightMobile}px;
          padding-block: 0.8rem;
        `,
      })}
    `
  ),

  footerContainer: css`
    justify-content: center;
    color: ${token.colorTextTertiary};
    width: 100%;
  `,

  text: css`
    display: flex;
    align-items: center;
    color: inherit;
    font-size: 0.85rem;
    line-height: 1.2;
    padding-inline: 0.5rem;
  `,

  href: css`
    display: flex;
    align-items: center;
    color: inherit !important;
    font-size: 0.85rem;
    line-height: 1.2;
    padding-inline: 0.5rem;

    .image {
      display: inline-block;
      max-height: 20px;
      width: auto;
      margin-block: 0.5rem;
      margin-inline: 0.5rem;
    }

    &:hover {
      text-decoration: underline;
      color: ${token.colorText} !important;
    }
  `,
}))
