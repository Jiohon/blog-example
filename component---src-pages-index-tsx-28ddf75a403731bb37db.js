"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[245],{78301:function(e,i,t){t.d(i,{A:function(){return l}});const r=(0,t(521).rU)((e=>{let{css:i,stylish:t,cx:r,responsive:n,token:l,prefixCls:a}=e;return{briefHeader:r(`${a}-briefHeader`,i`
      position: relative;
      width: 100%;
      padding-block: 4rem 3rem;

      ${n({mobile:i`
          padding-block: 3rem 2.5rem;
        `})}
    `),description:r(`${a}-briefHeader-description`,i`
      color: ${l.colorTextDescription};
      font-weight: 500;
      font-size: 1.2rem;
      margin-block-end: 0.4rem;

      span {
        color: ${l.colorPrimaryHover};
        font-family: Prisma;
        font-size: 1.6rem;
      }
    `),title:r(`${a}-briefHeader-title`,i`
      line-height: 1.2;
      font-weight: 700;
      font-size: 2rem;
      letter-spacing: 0.1rem;
      margin: 0 !important;

      ${n({tablet:i`
          font-size: 1.9rem;
        `,mobile:i`
          font-size: 1.8rem;
        `})}
    `),greeting:r(`${a}-briefHeader-greeting`,i`
      font-family: Coalhandluketrial;
      font-weight: normal;
      letter-spacing: 0.15rem;
      font-size: 2.2rem;
      line-height: 1.2;
      letter-spacing: 0.3rem;
      margin: 0 !important;

      ${n({tablet:i`
          font-size: 1.9rem;
        `,mobile:i`
          font-size: 1.8rem;
        `})}
    `),highlightText:r(`${a}-briefHeader-highlightText`,i`
      color: ${l.colorPrimaryBorderHover};
    `)}}));var n=t(74848);var l=e=>{let{title:i,greeting:t,highlight:l,description:a,children:s}=e;const{styles:o}=r();return(0,n.jsxs)("div",{className:o.briefHeader,children:[a&&(0,n.jsxs)("div",{className:o.description,children:[l&&(0,n.jsx)("span",{children:l}),a]}),t&&(0,n.jsx)("div",{className:o.greeting,children:t}),i&&(0,n.jsx)("div",{className:o.title,children:i}),s&&s]})}},63647:function(e,i,t){t.r(i),t.d(i,{Head:function(){return u},default:function(){return b}});var r=t(42702),n=t(11575),l=t(64810),a=t(96540),s=t(78301),o=t(50669),c=t(521);const d=(0,c.rU)((e=>{let{css:i,stylish:t,responsive:r,cx:n,prefixCls:l}=e;return{heading:n(`${l}-heading`,i`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 0;
      padding: 0;
    `),title:n(`${l}-heading-title`,i`
      &.${l}-typography {
        margin: 0 !important;

        ${r({tablet:i`
            font-size: 18px;
          `,mobile:i`
            font-size: 16px;
          `})}
      }
    `),link:n(`${l}-heading-link`,i`
      ${t.tagLink}

      font-size: 0.8rem;
    `)}}));var m=t(74848);var h=e=>{let{title:i,slug:t}=e;const{styles:r}=d();return(0,m.jsxs)("div",{className:r.heading,children:[(0,m.jsx)(o.A.Title,{level:4,className:r.title,children:i}),t&&(0,m.jsx)(l.N_,{className:r.link,to:t,children:"View all"})]})},g=t(54727),p=t(82088),f=t(17437);const x=(0,c.rU)((e=>{let{css:i,stylish:t,cx:r,responsive:n,token:l,prefixCls:a}=e;return{container:r(`${a}-home`,i`
      ${t.container}
    `),briefDescription:r(`${a}-home-description`,i`
      -webkit-font-smoothing: antialiased;
      margin-block-start: 2rem;
      margin-block-end: 0;
      font-size: 1rem;
      line-height: 1.4;
      color: ${l.colorTextSecondary};
      font-family: Coalhandluketrial;

      ${n({tablet:i`
          font-size: 0.9rem;
          margin-block-start: 2rem;
        `})}
    `),preview:r(`${a}-home-preview`,i`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;

      ${n({laptop:i`
          gap: 2.5rem;
        `,tablet:i`
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        `,mobile:i`
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        `})}
    `),recentCard:r(`${a}-recentCard`,i`
      min-height: 10rem;

      .${a}-card-body {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
      }

      ${n({laptop:i`
          min-height: 9rem;
        `,tablet:i`
          min-height: 8.5rem;
        `,mobile:i`
          min-height: 8rem;
        `})}
    `),highlightCard:r(`${a}-highlightCard`,i`
      min-height: 10rem;

      .${a}-card-body {
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
    `),time:r(`${a}-card-time`,i`
      display: block;
      color: ${l["magenta-5"]};
      font-size: 0.75rem;

      ${n({tablet:i`
          font-size: 0.7rem;
        `})}
    `),titleLink:r(`${a}-card-titleLink`,i`
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 0.95rem;
      line-height: 1.2;
      color: ${l.colorText};
      font-weight: 600;
      padding: 0;
      border: 0;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: ${l.colorText};
      }

      ${n({tablet:i`
          font-size: 0.85rem;
        `})}
    `),tagLinks:r(`${a}-card-tagLinks`,i`
      display: flex;
      align-items: flex-end;

      a {
        font-size: 0.75rem;
        color: ${l.colorTextDescription};
        &:hover {
          text-decoration: underline;
          color: ${l.colorText};
        }

        ${n({tablet:i`
            font-size: 0.7rem;
          `})}
      }
    `)}}));var b=e=>{let{data:i}=e;const{styles:t}=x(),o=i.latest.nodes,c=i.Highlights.nodes,d=(0,a.useMemo)((()=>(0,f.x)(o)),[i]),g=(0,a.useMemo)((()=>(0,f.x)(c)),[i]);return(0,m.jsxs)(r.A,{className:t.container,direction:"vertical",size:"large",children:[(0,m.jsxs)(s.A,{greeting:"Hey, I'm   Jhon",children:[(0,m.jsx)("p",{className:t.briefDescription,children:"I hope you live a life you're proud of. If you find that you're not, I hope you have the courage to start over."}),(0,m.jsx)("p",{className:t.briefDescription,children:"「 我希望你过着自己引以为傲的生活。如果你发现事实并非如此，我希望你有勇气重新开始 」"}),(0,m.jsx)("p",{className:t.briefDescription,children:"Have a good day. "})]}),(0,m.jsx)(h,{title:"最近内容",slug:"/archive"}),(0,m.jsx)("div",{className:t.preview,children:d.map((e=>(0,m.jsxs)(n.A,{className:t.recentCard,bordered:!0,children:[(0,m.jsx)("time",{className:t.time,children:e.date}),(0,m.jsx)(l.N_,{className:t.titleLink,to:e.slug,children:e.title}),(0,m.jsx)("div",{className:t.tagLinks,children:e.categories&&e.categories.filter((e=>"Highlight"!==e)).map((e=>(0,m.jsx)(l.N_,{to:`/categories/${e}`,children:e},`cat-${e}`)))})]},e.slug)))}),g.length>0&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h,{title:"热门内容"}),(0,m.jsx)("div",{className:t.preview,children:g.map((e=>(0,m.jsxs)(n.A,{className:t.highlightCard,children:[(0,m.jsx)(p.A,{id:e.icon,width:"5em",height:"5em"}),(0,m.jsxs)("div",{className:"content",children:[(0,m.jsx)("time",{className:t.time,children:e.date}),(0,m.jsx)(l.N_,{className:t.titleLink,to:e.slug,children:e.title})]})]},`Highlight-${e.slug}`)))})]})]})};const u=e=>{const{location:i}=e;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(g.A,{pathName:i.pathname})})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-28ddf75a403731bb37db.js.map