import { createStyles } from 'antd-style'

const Cardinality = 0.28
const Interval = 0.5

export const useStyles = createStyles(
  ({ css, cx, token, responsive: r, stylish, prefixCls, isDarkMode }, level: number) => {
    const anchorLevel = Array.from({ length: level }).map((_, i) => {
      const currentLevel = level - i
      const maxWidth = Cardinality + Interval * level

      const width = Cardinality + Interval * currentLevel

      return css`
        .level-${i + 1} {
          display: flex;
          align-items: center;
          padding-block: 0.3rem;
          text-indent: calc(${maxWidth}rem - ${width}rem);

          .${prefixCls}-anchor-link-title {
            font-weight: ${level > 1 && currentLevel === level ? 'bold' : ''};
          }

          &::before {
            content: '';
            width: ${width}rem;
            height: 0.25rem;
            border-radius: 2rem;
            margin-inline-end: 1rem;
            margin-inline-start: -0.8rem;
            transition: all 0.6s;
          }
        }
      `
    })

    return {
      card: css`
        ${stylish.card}
        margin-block-start: 1rem;
        background-color: transparent !important;
        box-shadow: none !important;
      `,

      title: cx(
        `.${prefixCls}-sidebar-title`,
        css`
          color: ${token.colorText};
          font-size: 0.9rem;
          border: none;
          margin-block-end: 1rem !important;
          text-transform: uppercase;
          font-weight: 700;
        `
      ),

      anchor: cx(
        `.${prefixCls}-sidebar-anchor`,
        css`
          .${prefixCls}-anchor {
            font-size: 0.9rem;

            &-ink {
              display: none !important;
            }

            .${prefixCls}-anchor-link {
              &::before {
                background-color: ${isDarkMode ? '#373737' : '#e5e5e5'};
              }

              &-title {
                color: ${token.colorTextSecondary};
                letter-spacing: 0.5px;
                opacity: 0;
                transition: all 0.5s;
              }

              &:hover {
                &::before {
                  transform: scale(1.16);
                  background-color: ${token.colorPrimaryBorderHover} !important;
                }

                .${prefixCls}-anchor-link-title {
                  color: ${token.colorPrimaryHover};
                }
              }
            }

            .${prefixCls}-anchor-link-active {
              &::before {
                background-color: ${token.colorPrimaryBorderHover};
                transform: scale(1.16) !important;
              }

              .${prefixCls}-anchor-link-title {
                color: ${token.colorPrimaryHover};
                opacity: 1;
              }
            }

            &::before {
              border-inline-start: none !important;
            }

            &:hover {
              .${prefixCls}-anchor-link-title {
                opacity: 1;
              }
            }

            ${anchorLevel}
          }
        `
      ),

      link: cx(
        `.${prefixCls}-sidebar-link`,
        css`
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
        `
      ),

      tag: cx(
        `.${prefixCls}-sidebar-tag`,
        css`
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
        `
      ),

      articles: cx(
        `.${prefixCls}-sidebar-articles`,
        css`
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
        `
      ),
    }
  }
)
