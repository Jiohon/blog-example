import { createStyles } from 'antd-style'

export const useStyles = createStyles(
  ({ css, cx, token, isDarkMode, stylish, prefixCls: prefix }, prefixCls: string) => {
    return {
      PrismScorll: cx(
        `${prefix}-${prefixCls}-code-scorll`,
        css`
          overflow: overlay;
        `
      ),

      PrismCode: cx(
        `${prefix}-${prefixCls}-code`,
        css`
          display: inline-flex;
          flex-wrap: nowrap;

          font-size: 0.95rem;
          font-family: SF Mono;
          font-weight: normal;
          background-color: transparent;
          word-spacing: normal;
          word-break: normal;
          overflow-wrap: normal;
          tab-size: 4;
          hyphens: none;
          width: auto;
          min-width: 100%;
          line-height: 22px;
          margin: 0;
          padding: 0;
        `
      ),

      lineNumbers: cx(
        `${prefix}-${prefixCls}-code-lineNumbers`,
        css`
          display: flex;
          flex-direction: column;
          position: sticky;
          left: 0;
          z-index: 1;
          font-size: 0.85rem;
          line-height: 22px;

          .number {
            display: inline-block;
            user-select: none;
            padding-inline-start: 1rem;
            padding-inline-end: 0.4rem;
            text-align: right;
            background-color: ${token.colorBgElevated};
            color: ${token.colorTextQuaternary};
          }
        `
      ),

      lines: cx(
        `${prefix}-${prefixCls}-code-lines`,
        css`
          font-family: inherit !important;
          flex: 1;

          .line {
            position: relative;
            padding-inline-start: 0.8rem;
            padding-inline-end: 1.3rem;

            span {
              font-family: inherit;
            }
          }
        `
      ),

      LineHighlight: cx(
        `${prefix}-${prefixCls}-code-CodeHighlight`,
        css`
          &.number {
            background: linear-gradient(
              90deg,
              ${token.colorPrimaryBorderHover} 0% 10%,
              ${token.colorPrimaryBgHover} 10% 100%
            );
          }
          &.line {
            background-color: ${token.colorPrimaryBgHover};
          }
        `
      ),
    }
  }
)
