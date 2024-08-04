import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, prefixCls }) => {
  return {
    blockquote: cx(
      `${prefixCls}-blockquote`,
      css`
        width: 100%;
        margin-inline: 0;
        margin-block: 2rem;
        padding-block: 0.8rem;
        padding-inline: 1rem;
        background: ${token.colorPrimaryBg};
        border-radius: ${token.borderRadius}px;
        border-inline-start: 4px solid ${token.colorPrimaryBorder};

        code {
          background-color: transparent;
        }

        p {
          font-size: 0.96rem;
          line-height: 1.9;
          font-weight: 400;
          overflow: overlay;

          &:last-of-type {
            margin: 0;
          }
        }
      `
    ),
  }
})
