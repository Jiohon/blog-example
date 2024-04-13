import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, responsive: r, token }) => ({
  years: css`
    margin-block-end: 3rem;
  `,
  year: css`
    color: ${token.colorPrimary};
    padding-block-end: 0.8rem;
    border-block-end: 2px solid ${token.colorBorderSecondary};
    font-size: 1.8rem;
    opacity: 0.8;
    font-weight: bold;
    ${r({
      mobile: css`
        font-size: 1.5rem;
      `,
    })}
  `,

  link: css`
    display: flex;
    align-items: center;
    padding-block: 0.3rem;
    margin-block: 1.6rem;
    background-color: transparent;
    transition: all ${token.motionDurationSlow};
    color: inherit;

    &:hover {
      transform: translate3d(0.85rem, 0px, 0px);
      .infos {
        opacity: 1;
      }
    }

    .infos {
      flex: 1;
      padding-inline: 1.3rem;
      color: ${token.colorText};
      opacity: 0.7;
      transition: opacity ${token.motionDurationMid};
    }
    h5 {
      flex: 1;
      margin: 0;
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1.5;
      color: inherit;

      ${r({
        tablet: css`
          font-size: 0.85rem;
        `,
      })}
    }

    time {
      display: block;
      margin-inline-start: auto;
      color: inherit;
      font-size: 0.8rem;
      font-weight: 500;
    }
  `,
}))
