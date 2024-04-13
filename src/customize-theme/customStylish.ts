import { GetCustomStylish } from 'antd-style'

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomStylish extends SiteStylish {}
}

export interface SiteStylish {
  container: string
  wrapper: string
  tagLink: string
  card: string
}

export const getCustomStylish: GetCustomStylish<SiteStylish> = ({ css, token, isDarkMode }) => {
  return {
    container: css`
      display: flex;
      margin: 0 auto;
      max-width: ${token.contentMaxWidth}px;

      @media screen and (max-width: ${token.screenXL}px) {
        padding-inline: 1.3rem;
      }
    `,

    wrapper: css`
      margin-block-start: 1.6rem;
      margin-block-end: 3rem;

      @media screen and (max-width: ${token.screenXL}) {
        margin-block-start: 1.5rem;
        margin-block-end: 1.5rem;
      }
    `,

    tagLink: css`
      min-height: 24px;
      line-height: 1.75;
      font-size: 0.75rem;
      font-weight: 400;
      padding-block: 0.1rem;
      padding-inline: 0.6rem;
      border: 1px solid ${token.colorFillSecondary};
      border-radius: ${token.borderRadiusSM}px;
      color: ${token.colorText};

      text-decoration: none;
      text-transform: capitalize;
      display: inline-block;
      text-align: center;

      &.active {
        color: ${token.colorPrimary};
        border-color: ${token.colorPrimaryBgHover};
        background-color: ${token.colorPrimaryBg};
      }

      &:hover {
        color: ${token.colorPrimary};
        border-color: ${token.colorPrimaryBgHover};
        background-color: ${token.colorPrimaryBg};
      }
    `,

    card: css`
      width: 100%;
      margin-block-start: 2rem;
      background-color: ${token.colorBgElevated};
      box-shadow: ${token.boxShadowTertiary} !important;
    `,
  }
}
