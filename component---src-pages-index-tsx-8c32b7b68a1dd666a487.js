"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[245],{8301:function(e,t,i){i.d(t,{A:function(){return l}});const r=(0,i(521).rU)((e=>{let{css:t,stylish:i,cx:r,responsive:n,token:l,prefixCls:s}=e;return{briefHeader:r(`${s}-briefHeader`,t`
      position: relative;
      width: 100%;
      padding-block: 4rem 3rem;

      ${n({mobile:t`
          padding-block: 3rem 2.5rem;
        `})}
    `),description:r(`${s}-briefHeader-description`,t`
      color: ${l.colorTextDescription};
      font-weight: 500;
      font-size: 1.2rem;
      margin-block-end: 0.4rem;

      span {
        color: ${l.colorPrimaryHover};
        font-family: Prisma;
        font-size: 1.6rem;
      }
    `),title:r(`${s}-briefHeader-title`,t`
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
    `),greeting:r(`${s}-briefHeader-greeting`,t`
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
    `),highlightText:r(`${s}-briefHeader-highlightText`,t`
      color: ${l.colorPrimaryBorderHover};
    `)}}));var n=i(4848);var l=e=>{let{title:t,greeting:i,highlight:l,description:s,children:a}=e;const{styles:o}=r();return(0,n.jsxs)("div",{className:o.briefHeader,children:[s&&(0,n.jsxs)("div",{className:o.description,children:[l&&(0,n.jsx)("span",{children:l}),s]}),i&&(0,n.jsx)("div",{className:o.greeting,children:i}),t&&(0,n.jsx)("div",{className:o.title,children:t}),a&&a]})}},2069:function(e,t,i){var r=i(4848);t.A=e=>{let{id:t,style:i,...n}=e;return(0,r.jsx)("svg",{"aria-hidden":!0,focusable:"false",...n,children:(0,r.jsx)("use",{href:`/svg/languages.svg#${t}`})})}},3647:function(e,t,i){i.r(t),i.d(t,{Head:function(){return $},default:function(){return u}});var r=i(2702),n=i(1575),l=i(4810),s=i(6540),a=i(8301),o=i(669),c=i(521);const d=(0,c.rU)((e=>{let{css:t,stylish:i,responsive:r,cx:n,prefixCls:l}=e;return{heading:n(`${l}-heading`,t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 0;
      padding: 0;
    `),title:n(`${l}-heading-title`,t`
      &.${l}-typography {
        margin: 0 !important;

        ${r({tablet:t`
            font-size: 18px;
          `,mobile:t`
            font-size: 16px;
          `})}
      }
    `),link:n(`${l}-heading-link`,t`
      ${i.tagLink}

      font-size: 0.8rem;
    `)}}));var m=i(4848);var h=e=>{let{title:t,slug:i}=e;const{styles:r}=d();return(0,m.jsxs)("div",{className:r.heading,children:[(0,m.jsx)(o.A.Title,{level:4,className:r.title,children:t}),i&&(0,m.jsx)(l.N_,{className:r.link,to:i,children:"View all"})]})},g=i(4727),f=i(2069),p=i(7437);const x=(0,c.rU)((e=>{let{css:t,stylish:i,cx:r,responsive:n,token:l,prefixCls:s}=e;return{container:r(`${s}-home`,t`
      ${i.container}
    `),briefDescription:r(`${s}-home-description`,t`
      -webkit-font-smoothing: antialiased;
      margin-block-start: 2rem;
      margin-block-end: 0;
      font-size: 1rem;
      line-height: 1.4;
      color: ${l.colorTextSecondary};
      font-family: Coalhandluketrial;

      ${n({tablet:t`
          font-size: 0.9rem;
          margin-block-start: 2rem;
        `})}
    `),preview:r(`${s}-home-preview`,t`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;

      ${n({laptop:t`
          gap: 2.5rem;
        `,tablet:t`
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        `,mobile:t`
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        `})}
    `),recentCard:r(`${s}-recentCard`,t`
      min-height: 10rem;

      .${s}-card-body {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
      }

      ${n({laptop:t`
          min-height: 9rem;
        `,tablet:t`
          min-height: 8.5rem;
        `,mobile:t`
          min-height: 8rem;
        `})}
    `),highlightCard:r(`${s}-highlightCard`,t`
      min-height: 10rem;

      .${s}-card-body {
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
    `),time:r(`${s}-card-time`,t`
      display: block;
      color: ${l["magenta-5"]};
      font-size: 0.75rem;

      ${n({tablet:t`
          font-size: 0.7rem;
        `})}
    `),titleLink:r(`${s}-card-titleLink`,t`
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

      ${n({tablet:t`
          font-size: 0.85rem;
        `})}
    `),tagLinks:r(`${s}-card-tagLinks`,t`
      display: flex;
      align-items: flex-end;

      a {
        font-size: 0.75rem;
        color: ${l.colorTextDescription};
        &:hover {
          text-decoration: underline;
          color: ${l.colorText};
        }

        ${n({tablet:t`
            font-size: 0.7rem;
          `})}
      }
    `)}}));var u=e=>{let{data:t}=e;const{styles:i}=x(),o=t.latest.nodes,c=t.Highlights.nodes,d=(0,s.useMemo)((()=>(0,p.x)(o)),[t]),g=(0,s.useMemo)((()=>(0,p.x)(c)),[t]);return(0,m.jsxs)(r.A,{className:i.container,direction:"vertical",size:"large",children:[(0,m.jsxs)(a.A,{greeting:"Hey, I'm   Jhon",children:[(0,m.jsx)("p",{className:i.briefDescription,children:"I hope you live a life you're proud of. If you find that you're not, I hope you have the courage to start over."}),(0,m.jsx)("p",{className:i.briefDescription,children:"「 我希望你过着自己引以为傲的生活。如果你发现事实并非如此，我希望你有勇气重新开始 」"}),(0,m.jsx)("p",{className:i.briefDescription,children:"Have a good day. "})]}),(0,m.jsx)(h,{title:"最近内容",slug:"/archive"}),(0,m.jsx)("div",{className:i.preview,children:d.map((e=>(0,m.jsxs)(n.A,{className:i.recentCard,bordered:!0,children:[(0,m.jsx)("time",{className:i.time,children:e.date}),(0,m.jsx)(l.N_,{className:i.titleLink,to:e.slug,children:e.title}),(0,m.jsx)("div",{className:i.tagLinks,children:e.categories&&e.categories.filter((e=>"Highlight"!==e)).map((e=>(0,m.jsx)(l.N_,{to:`/categories/${e}`,children:e},`cat-${e}`)))})]},e.slug)))}),g.length>0&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h,{title:"热门内容"}),(0,m.jsx)("div",{className:i.preview,children:g.map((e=>(0,m.jsxs)(n.A,{className:i.highlightCard,children:[(0,m.jsx)(f.A,{id:e.icon,width:"5em",height:"5em"}),(0,m.jsxs)("div",{className:"content",children:[(0,m.jsx)("time",{className:i.time,children:e.date}),(0,m.jsx)(l.N_,{className:i.titleLink,to:e.slug,children:e.title})]})]},`Highlight-${e.slug}`)))})]})]})};const $=e=>{const{location:t}=e;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(g.A,{pathName:t.pathname})})}},7437:function(e,t,i){i.d(t,{$:function(){return l},x:function(){return n}});var r=i(436);const n=(e,t)=>{if(!e)return[];return e.map((e=>{const{frontmatter:i}=e,r={...e,...i};return t?t(r):r})).filter((e=>null!==e))},l=(e,t)=>e.reduce(((e,i,n)=>i.items?[].concat((0,r.A)(e),[{key:i.title,href:`#${i.title}`,title:i.title,className:`level-${t}`,level:t}],(0,r.A)(l(i.items,t+1))):[].concat((0,r.A)(e),[{key:i.title,href:`#${i.title}`,title:i.title,className:`level-${t}`,level:t}])),[])}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8c32b7b68a1dd666a487.js.map