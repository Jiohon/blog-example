"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[453],{54727:function(t,e,i){var n=i(88864),r=i(74848);e.A=t=>{let{title:e,description:i,pathName:o,children:a}=t;const c=(0,n.Q)(),s={author:c.author,title:e?`${e} | ${c.title}`:c.title,description:i||c.description,image:`${c.logo}`,ico:`${c.siteUrl}/favicon.ico`,url:`${c.siteUrl}${o}`,repository:`${c.repository}`},l=[{"@context":"http://schema.org","@type":"WebSite",url:c.siteUrl,name:s.title,alternateName:s.title}];return o&&l.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":s.url,name:s.title,image:s.image}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:c.siteUrl,name:s.title,alternateName:s.title,headline:s.title,image:{"@type":"ImageObject",url:s.image},description:s.description}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:s.title}),(0,r.jsx)("meta",{name:"creator",content:s.author}),(0,r.jsx)("meta",{name:"description",content:s.description}),(0,r.jsx)("meta",{name:"image",content:s.image}),(0,r.jsx)("meta",{property:"og:url",content:s.url}),(0,r.jsx)("meta",{property:"og:title",content:s.title}),(0,r.jsx)("meta",{property:"og:description",content:s.description}),(0,r.jsx)("meta",{property:"og:image",content:s.image}),(0,r.jsx)("meta",{property:"og:type",content:"webSite"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:url",content:s.url}),(0,r.jsx)("meta",{name:"twitter:title",content:s.title}),(0,r.jsx)("meta",{name:"twitter:description",content:s.description}),(0,r.jsx)("meta",{name:"twitter:image",content:s.image}),(0,r.jsx)("link",{rel:"shortcut icon",type:"image/png",href:"/favicon.ico"}),(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(l)}),a]})}},92355:function(t,e,i){i.r(e),i.d(e,{Head:function(){return l},default:function(){return s}});var n=i(64810),r=i(68777),o=i(54727);const a=(0,i(521).rU)((t=>{let{css:e,stylish:i,responsive:n,token:r}=t;return{container:e`
    ${i.container}
    height: calc(100vh - ${r.headerHeight}px - ${r.footerHeight}px);
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    ${n({mobile:e`
        height: calc(100vh - ${r.headerHeightMobile}px - ${r.footerHeightMobile}px);
      `})}
  `,404:e`
    width: 100%;
    text-align: center;
    font-family: Prisma;
    font-size: 5rem;
    letter-spacing: 4px;
    color: ${r.colorPrimaryBorder};

    ${n({laptop:e`
        font-size: 4rem;
      `,mobile:e`
        font-size: 3rem;
      `})}
  `}}));var c=i(74848);var s=()=>{const{styles:t}=a();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:t.container,children:[(0,c.jsx)("div",{className:t[404],children:"404"}),(0,c.jsx)(r.Ay,{type:"text",onClick:()=>{(0,n.oo)("/")},children:"Back to home page"})]})})};const l=t=>{const{location:e}=t;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.A,{title:"404",description:"Page not found",pathName:e.pathname})})}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-4cb1b447a2f3c6fa36f6.js.map