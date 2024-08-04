import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, prefixCls }) => {
  const menuBarItem = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 1.6rem;
    text-decoration: none;
    border-radius: ${token.borderRadius};
    color: ${token.colorTextSecondary};
    font-size: 0.88rem;
    font-weight: 500;
    margin-block-end: 0.7rem;

    .inkVisible {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      margin-inline-start: 0.45rem;
      margin-inline-end: 0.85rem;
      background-color: ${token.colorPrimaryHover};
      opacity: 0.8;
    }
  `
  const hover = css`
    &:hover {
      color: ${token.colorPrimaryTextHover};
      text-decoration: none;
    }
  `

  return {
    menuBar: cx(
      `${prefixCls}-menuBar`,
      css`
        div:last-child {
          margin-block-end: 0rem;
        }
      `
    ),

    item: cx(menuBarItem),

    hover: cx(hover),

    title: cx(
      `${prefixCls}-menuBar-title`,
      css`
        color: ${token.colorText};
        font-size: 0.98rem;
        font-weight: 700;
        margin-block-end: 0.6rem;
        margin-block-start: 0.4rem;

        &:first-child {
          margin-block-start: 0;
        }
      `
    ),

    text: cx(
      `${prefixCls}-menuBar-text`,
      css`
        ${menuBarItem}
      `
    ),

    link: cx(
      `${prefixCls}-menuBar-link`,
      css`
        ${menuBarItem}
        ${hover}

        .link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: inherit;
          width: 100%;

          &.active {
            color: ${token.colorPrimary} !important;
          }
        }
      `
    ),

    tag: cx(
      `${prefixCls}-menuBar-tag`,
      css`
        font-size: 0.88rem;
        color: ${token.colorTextSecondary};
        background-color: ${token.colorFillQuaternary};
        text-transform: capitalize;
        margin-block-start: 0.7rem;

        &:hover {
          color: ${token.colorPrimary}!important;
          background-color: ${token.colorPrimaryBg}!important;
        }

        &.site-tag-checkable-checked {
          color: ${token.colorPrimaryActive} !important;
          background-color: ${token.colorPrimaryBg};
        }
      `
    ),
  }
})
