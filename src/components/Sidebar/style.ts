import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, cx, token, responsive: r, stylish, prefixCls }) => ({
  sticky: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: sticky;
    top: calc(${token.headerHeight}px + 20px);

    ${r({
      mobile: css`
        top: ${token.headerHeightMobile};
      `,
    })}
  `,

  card: css`
    ${stylish.card}
  `,

  title: css`
    color: ${token.colorText};
    font-size: 0.9rem;
    border: none;
    margin-block-end: 1rem !important;
    text-transform: uppercase;
    font-weight: 700;
  `,

  anchor: cx(
    `${prefixCls}-anchor`,

    css`
      .${prefixCls}-anchor {
        font-size: 0.9rem;

        &::before {
          border-inline-start: none !important;
        }

        &-link {
          padding-inline: 1.55rem 0 !important;

          &-title:not(&-title-active) {
            color: ${token.colorTextSecondary};
          }
        }

        &-ink-visible {
          width: 0.4rem !important;
          height: 0.4rem !important;
          border-radius: 50%;
          margin-inline-start: 0.5rem;
          background-color: ${token.colorPrimaryHover} !important;
          opacity: 0.7;
        }
      }
    `
  ),

  link: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    background-color: transparent;
    border-radius: ${token.borderRadius};
    color: ${token.colorTextSecondary};
    font-size: 0.86rem;
    margin-block-end: 0.6rem;
    padding-block: 0.1rem;
    padding-inline: 0.3rem;

    span {
      color: inherit;
    }

    &:last-child {
      margin-block-end: 0rem;
    }

    &.active {
      color: ${token.colorPrimary};
      font-weight: bold;
    }

    &:hover {
      color: ${token.colorPrimaryHover};
      text-decoration: none;
    }
  `,

  tag: css`
    cursor: pointer;
    font-size: 0.8rem;
    color: ${token.colorTextSecondary};
    text-transform: capitalize;

    &.${prefixCls}-tag-checkable-checked {
      color: ${token.colorPrimary};
      background-color: ${token.colorPrimaryBg};
    }

    &:hover {
      color: ${token.colorPrimary};
      background-color: ${token.colorPrimaryBg};
    }
  `,

  articles: css`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 1rem;
    color: ${token.colorTextSecondary};
    margin-block-end: 0.6rem;
    margin-inline-start: 0.5rem;

    .title {
      font-size: 0.9rem;
    }

    & {
      .active {
        color: ${token.colorPrimary};
        font-weight: bold;
      }

      &:hover {
        color: ${token.colorPrimary};
        text-decoration: none;
      }

      &:last-child {
        margin-block-end: 0;
      }
    }
  `,
}))
