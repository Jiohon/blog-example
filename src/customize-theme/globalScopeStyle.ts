import { createGlobalStyle } from 'antd-style'

export const GlobalScopeStyle = createGlobalStyle`
  @font-face {
    font-family: 'SF Mono';
    src: url('/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
    url('/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Prisma';
    src: url('/fonts/Prisma/Prisma.woff2') format('woff2'),
    url('/fonts/Prisma/Prisma.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Coalhandluketrial';
    src: url('/fonts/Coalhandluketrial/Coalhandluketrial.woff2') format('woff2'),
    url('/fonts/Coalhandluketrial/Coalhandluketrial.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    background: rgba(125,138,255,.35);
  }

  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }

  html {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: ${(p) => {
      console.log(p);
      
      return p.theme.fontFamily
    }};
    font-size: ${(p) => p.theme.fontSize}px;
    font-weight: normal;
    font-kerning: normal;
    background-color: ${(p) => p.theme.colorBgLayout};
  }

  body {
    position: relative;
    overflow: overlay;
    margin: 0;
    padding: 0;
  }
`
