import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ token, css }) => ({
  fallback: css`
    width: 100%;
    > * {
      width: 100% !important;
      border-radius: ${token.borderRadiusLG}px;
    }
  `,
  placeholder: css`
    color: ${token.colorTextDescription};
    font-size: ${token.fontSizeLG}px;
  `,

  sandpack: css`
    .sp-layout {
      border-radius: ${token.borderRadius * 1.2}px;
    }

    .cm-scroller {
      padding: 0 0 0.9rem 0 !important;
    }

    .cm-lineNumbers {
      padding-left: 8px;
      font-size: 0.85rem !important;
    }
  `,
}))
