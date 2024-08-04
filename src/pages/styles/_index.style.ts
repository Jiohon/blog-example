import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, cx, responsive: r, token, prefixCls }) => ({
  container: cx(
    `${prefixCls}-home`,
    css`
      ${stylish.container}
    `
  ),

  briefDescription: cx(
    `${prefixCls}-home-description`,
    css`
      -webkit-font-smoothing: antialiased;
      margin-block-start: 2rem;
      margin-block-end: 0;
      font-size: 1rem;
      line-height: 1.4;
      color: ${token.colorTextSecondary};
      font-family: Coalhandluketrial;

      ${r({
        tablet: css`
          font-size: 0.9rem;
          margin-block-start: 2rem;
        `,
      })}
    `
  ),

  preview: cx(
    `${prefixCls}-home-preview`,
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;

      ${r({
        laptop: css`
          gap: 2.5rem;
        `,
        tablet: css`
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        `,
        mobile: css`
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        `,
      })}
    `
  ),

  recentCard: cx(
    `${prefixCls}-recentCard`,
    css`
      min-height: 10rem;

      .${prefixCls}-card-body {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
      }

      ${r({
        laptop: css`
          min-height: 9rem;
        `,
        tablet: css`
          min-height: 8.5rem;
        `,
        mobile: css`
          min-height: 8rem;
        `,
      })}
    `
  ),

  highlightCard: cx(
    `${prefixCls}-highlightCard`,
    css`
      min-height: 10rem;

      .${prefixCls}-card-body {
        display: flex;
        align-items: center;
        height: 100%;
      }

      .content {
        display: flex;
        flex-wrap: wrap;
        align-content: space-evenly;
        height: 100%;
        margin-inline-start: 1.2rem;
      }
    `
  ),

  time: cx(
    `${prefixCls}-card-time`,
    css`
      display: block;
      color: ${token['magenta-5']};
      font-size: 0.75rem;

      ${r({
        tablet: css`
          font-size: 0.7rem;
        `,
      })}
    `
  ),

  titleLink: cx(
    `${prefixCls}-card-titleLink`,
    css`
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 0.95rem;
      line-height: 1.2;
      color: ${token.colorText};
      font-weight: 600;
      padding: 0;
      border: 0;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: ${token.colorText};
      }

      ${r({
        tablet: css`
          font-size: 0.85rem;
        `,
      })}
    `
  ),

  tagLinks: cx(
    `${prefixCls}-card-tagLinks`,
    css`
      display: flex;
      align-items: flex-end;

      a {
        font-size: 0.75rem;
        color: ${token.colorTextDescription};
        &:hover {
          text-decoration: underline;
          color: ${token.colorText};
        }

        ${r({
          tablet: css`
            font-size: 0.7rem;
          `,
        })}
      }
    `
  ),
}))
