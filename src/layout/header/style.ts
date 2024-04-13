import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r, cx, token, prefixCls }) => ({
  header: cx(
    `${prefixCls}-layout-header`,
    css`
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 20;
      height: ${token.headerHeight}px;
      backdrop-filter: saturate(50%) blur(4px);
      background-size: 3px 3px;
      background-image: radial-gradient(transparent 1px, ${token.colorBgLayout} 1px);

      ${r({
        mobile: css`
          height: ${token.headerHeightMobile}px;
        `,
      })}
    `
  ),
  headerContainer: cx(
    `${prefixCls}-layout-header-container`,
    css`
      ${stylish.container}

      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      color: ${token.colorTextSecondary};
    `
  ),

  navigationLink: cx(
    `${prefixCls}-layout-header-container-link`,
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      color: inherit;
      padding: 0;
      border: none;
      border-radius: 0;
      border-block-start: 2px solid transparent;
      border-block-end: 2px solid transparent;
      margin-inline-end: 1.2rem;

      &:hover {
        color: ${token.colorText};
        .logo {
          transform: scale(1.1);
        }
      }

      .logo {
        line-height: 1.2;
        font-size: 1.2rem;
        font-weight: normal;
        color: transparent;
        background: ${token.gradientLogo};
        background-clip: text;
        transition: all ${token.motionDurationSlow};
        font-family: Pacifico;
      }
    `
  ),
}))
