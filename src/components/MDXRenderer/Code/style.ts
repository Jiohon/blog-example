import { createStyles } from 'antd-style'

export const useStyles = createStyles(
  ({ css, cx, token, isDarkMode, stylish, prefixCls: prefix }, prefixCls: string) => {
    return {
      // code
      code: cx(
        `${prefix}-code`,
        css`
          color: ${token.colorPrimary};
          font-size: 0.95rem;
          background-color: ${token.colorFillQuaternary};
          padding-block: 0.2rem;
          padding-inline: 0.35rem;
          border-radius: ${token.borderRadiusOuter}px;
          margin-inline: 0.3rem;
          font-family: ${token.fontFamilyHighlighter};
        `
      ),
    }
  }
)
