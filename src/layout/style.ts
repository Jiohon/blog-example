import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, token, prefixCls, cx, responsive: r }) => {
  return {
    layout: cx(
      `${prefixCls}-layout`,
      css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        ${r({
          laptop: css`
            padding-inline: 2.5rem;
          `,
          tablet: css`
            padding-inline: 2rem;
          `,
          mobile: css`
            padding-inline: 1.5rem;
          `,
        })}
      `
    ),

    content: cx(
      `${prefixCls}-layout-content`,
      css`
        flex: 1;
        min-height: calc(100vh - 64px);
      `
    ),
  }
})
