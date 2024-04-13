import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, responsive: r, token }) => ({
  container: css`
    ${stylish.container}
    height: calc(100vh - ${token.headerHeight}px - ${token.footerHeight}px);
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    ${r({
      mobile: css`
        height: calc(100vh - ${token.headerHeightMobile}px - ${token.footerHeightMobile}px);
      `,
    })}
  `,

  404: css`
    width: 100%;
    text-align: center;
    font-family: Prisma;
    font-size: 5rem;
    letter-spacing: 4px;
    color: ${token.colorPrimaryBorder};

    ${r({
      laptop: css`
        font-size: 4rem;
      `,
      mobile: css`
        font-size: 3rem;
      `,
    })}
  `,
}))
