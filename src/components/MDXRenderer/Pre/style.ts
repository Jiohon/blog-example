import { createStyles } from 'antd-style'

export const useStyles = createStyles(
  ({ css, cx, token, isDarkMode, stylish, prefixCls: prefix }, prefixCls: string) => {
    return {
      Pre: cx(
        `${prefix}-${prefixCls}`,
        css`
          ${stylish.card}
          position: relative;
          border-radius: ${token.borderRadius * 1.3}px;
          margin-block: 1.6rem;
          padding-block-end: 0.9rem;
          border: 1px solid ${token.colorBorderSecondary};
          overflow: overlay;
        `
      ),

      // title
      TitleBox: cx(
        `${prefix}-${prefixCls}-titleBox`,
        css`
          position: relative;
          left: 0;
          display: flex;
          color: ${token.colorTextTertiary};
          font-size: 0.95rem;
          padding-block: 0.6rem 0.25rem;
          padding-inline: 1.5rem 1.2rem;
          gap: 0.8rem;
          display: flex;
          justify-content: space-between;
        `
      ),

      titleStyle: cx(
        `${prefix}-${prefixCls}-titleBox-title`,
        css`
          color: ${token.colorTextTertiary};
        `
      ),

      stackblitz: cx(
        `${prefix}-${prefixCls}-titleBox-stackblitz`,
        css`
          display: flex;
          align-items: center;
          color: ${token.colorTextTertiary};
          margin-inline-end: 0.3rem;
          opacity: 0.8;
        `
      ),

      language: cx(
        `${prefix}-${prefixCls}-language`,
        css`
          display: flex;
          align-items: center;
          font-family: ${token.fontFamilyCode};
          font-size: 0.9rem;
          color: ${token.colorTextQuaternary};
        `
      ),

      copy: cx(
        `${prefix}-${prefixCls}-copy`,
        css`
          position: absolute;
          top: 0.85rem;
          right: 1.2rem;
          z-index: 10;
          height: 32px;
          padding-block: 5px;
          padding-inline: 7px;
          box-shadow: ${token.boxShadowFourth};
        `
      ),
    }
  }
)
