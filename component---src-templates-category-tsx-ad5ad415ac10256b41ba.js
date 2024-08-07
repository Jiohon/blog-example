(self.webpackChunkblog=self.webpackChunkblog||[]).push([[192],{87070:function(e,t,r){"use strict";r.d(t,{A:function(){return m}});var i=r(60436),n=r(96540),o=r(64810),a=r(82088),s=r(69941),l=r.n(s);const c=(0,r(521).rU)((e=>{let{css:t,responsive:r,token:i}=e;return{years:t`
    margin-block-end: 3rem;
  `,year:t`
    color: ${i.colorPrimaryHover};
    padding-block-end: 0.8rem;
    border-block-end: 2px solid ${i.colorBorderSecondary};
    font-size: 1.8rem;
    opacity: 0.8;
    font-weight: bold;
    ${r({mobile:t`
        font-size: 1.5rem;
      `})}
  `,link:t`
    display: flex;
    align-items: center;
    padding-block: 0.3rem;
    margin-block: 1.6rem;
    background-color: transparent;
    transition: all ${i.motionDurationSlow};
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
      color: ${i.colorText};
      opacity: 0.7;
      transition: opacity ${i.motionDurationMid};
    }
    h5 {
      flex: 1;
      margin: 0;
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1.5;
      color: inherit;

      ${r({tablet:t`
          font-size: 0.85rem;
        `})}
    }

    time {
      display: block;
      margin-inline-start: auto;
      color: inherit;
      font-size: 0.8rem;
      font-weight: 500;
    }
  `}}));var d=r(74848);var m=e=>{let{data:t}=e;const{styles:r}=c(),s=(0,n.useMemo)((()=>{const e={};return t.forEach((t=>{var r;const n=null===(r=t.date)||void 0===r?void 0:r.split(", ")[1];e[n]=[].concat((0,i.A)(e[n]||[]),[t])})),e}),[t]),m=(0,n.useMemo)((()=>Object.keys(s).reverse()),[s]);return(0,d.jsx)(d.Fragment,{children:m.map((e=>(0,d.jsxs)("div",{className:r.years,children:[(0,d.jsx)("div",{className:r.year,children:e}),s[e].map((e=>(0,d.jsxs)(o.N_,{className:r.link,to:`/${e.slug}`,children:[(0,d.jsx)(a.A,{id:e.icon,width:"3.2em",height:"3.2em"}),(0,d.jsxs)("div",{className:"infos",children:[(0,d.jsx)("h5",{children:e.title}),(0,d.jsx)("time",{children:e.date})]}),(0,d.jsx)(l(),{})]},e.slug)))]},e)))})}},78301:function(e,t,r){"use strict";r.d(t,{A:function(){return o}});const i=(0,r(521).rU)((e=>{let{css:t,stylish:r,cx:i,responsive:n,token:o,prefixCls:a}=e;return{briefHeader:i(`${a}-briefHeader`,t`
      position: relative;
      width: 100%;
      padding-block: 4rem 3rem;

      ${n({mobile:t`
          padding-block: 3rem 2.5rem;
        `})}
    `),description:i(`${a}-briefHeader-description`,t`
      color: ${o.colorTextDescription};
      font-weight: 500;
      font-size: 1.2rem;
      margin-block-end: 0.4rem;

      span {
        color: ${o.colorPrimaryHover};
        font-family: Prisma;
        font-size: 1.6rem;
      }
    `),title:i(`${a}-briefHeader-title`,t`
      line-height: 1.2;
      font-weight: 700;
      font-size: 2rem;
      letter-spacing: 0.1rem;
      margin: 0 !important;

      ${n({tablet:t`
          font-size: 1.9rem;
        `,mobile:t`
          font-size: 1.8rem;
        `})}
    `),greeting:i(`${a}-briefHeader-greeting`,t`
      font-family: Coalhandluketrial;
      font-weight: normal;
      letter-spacing: 0.15rem;
      font-size: 2.2rem;
      line-height: 1.2;
      letter-spacing: 0.3rem;
      margin: 0 !important;

      ${n({tablet:t`
          font-size: 1.9rem;
        `,mobile:t`
          font-size: 1.8rem;
        `})}
    `),highlightText:i(`${a}-briefHeader-highlightText`,t`
      color: ${o.colorPrimaryBorderHover};
    `)}}));var n=r(74848);var o=e=>{let{title:t,greeting:r,highlight:o,description:a,children:s}=e;const{styles:l}=i();return(0,n.jsxs)("div",{className:l.briefHeader,children:[a&&(0,n.jsxs)("div",{className:l.description,children:[o&&(0,n.jsx)("span",{children:o}),a]}),r&&(0,n.jsx)("div",{className:l.greeting,children:r}),t&&(0,n.jsx)("div",{className:l.title,children:t}),s&&s]})}},57500:function(e,t,r){"use strict";var i=r(11575),n=r(59669),o=r(51591),a=r(51405),s=r(74848);t.A=e=>{let{tags:t,categories:r}=e;const{styles:l}=(0,n.I)(),c=r.map((e=>({...e,path:`/categories/${e.name}/`}))),d=t.map((e=>({...e,path:`/tags/${e.name}/`})));return(0,s.jsxs)(o.A,{children:[(0,s.jsx)(i.A,{bordered:!1,className:l.card,children:(0,s.jsxs)(a.A,{children:[(0,s.jsx)(a.A.Title,{children:"类别"}),c.map((e=>(0,s.jsx)(a.A.Link,{marker:!1,to:e.path,extra:e.totalCount,children:e.name},e.name)))]})}),(0,s.jsx)(i.A,{bordered:!1,className:l.card,children:(0,s.jsxs)(a.A,{children:[(0,s.jsx)(a.A.Title,{children:"标签"}),d.map((e=>(0,s.jsx)(a.A.Tag,{to:e.path,children:e.name},e.name)))]})})]})}},8064:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return m}});var i=r(96540),n=r(87070),o=r(78301),a=r(54727),s=r(57500),l=r(17437),c=r(39868),d=r(74848);t.default=e=>{let{data:t,pageContext:r}=e;const{styles:a}=(0,c.I)(),m=t.articles.nodes,g=t.categories.group,h=t.tags.group,p=null==t?void 0:t.articles.totalCount,{category:f}=r,u=1===p?" Article categorized as:":" Articles categorized as:",x=(0,i.useMemo)((()=>(0,l.x)(m)),[m]);return(0,d.jsxs)("div",{className:a.container,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(o.A,{highlight:p,description:u,title:f}),(0,d.jsx)(n.A,{data:x})]}),(0,d.jsx)(s.A,{tags:h,categories:g})]})};const m=e=>{const{location:t,pageContext:r}=e,{category:i}=r;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.A,{title:`articles tagged: ${i}`,description:"Article categorized",pathName:t.pathname})})}},39868:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});const i=(0,r(521).rU)((e=>{let{css:t,cx:r,token:i,stylish:n,responsive:o,prefixCls:a}=e;return{container:t`
    ${n.container}

    display: grid;
    grid-template-columns: auto 260px;
    gap: 4rem;

    .content {
      & > pre:last-child {
        margin-block-end: 0px;
        > div {
          margin-block-end: 0px;
        }
      }
    }

    ${o({tablet:t`
        display: block;

        .content {
          margin-block-end: 2rem;
        }
      `})}
  `,spacerLine:t`
    width: 100%;
    border-block-end: 1px dashed ${i.colorBorder};
    margin-block-end: 3.2rem;
  `,title:r(t`
    &.${a}-typography {
      padding-block-start: 5.6rem;
      padding-block-end: 4rem;
      margin: 0;
      font-weight: bold;
      font-family: ${i.fontFamilyCode};

      ${o({tablet:t`
          padding-block-start: 3.5rem;
          padding-block-end:  3rem;
          font-size: 23px;
        `,mobile:t`
          font-size: 22px;
        `})}
    }
  `),main:t`
    padding-block-end: 5rem;
  `,card:t`
    ${n.card}
  `}}))},69941:function(e,t,r){var i=r(96540);function n(e){return i.createElement("svg",e,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}))}n.defaultProps={focusable:"false",height:"1.25em",width:"1.25em",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-templates-category-tsx-ad5ad415ac10256b41ba.js.map