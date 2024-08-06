(self.webpackChunkblog=self.webpackChunkblog||[]).push([[623],{7817:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getParameters=void 0;var o=n(2992);t.getParameters=function(e){return t=JSON.stringify(e),o.compressToBase64(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var t}},4777:function(e,t,n){"use strict";t.b=void 0;var o=n(7817);t.b=o.getParameters},2887:function(e,t,n){"use strict";n.d(t,{A:function(){return ut}});var o=n(8453),r=n(6540),i=n(8811),s=n(6029),l=n(7852),a=n(7541),c=n(7850),d=n(6942),p=n.n(d),u=n(754),m=n(2065),h=n(8719),f=n(682),g=n(2279),b=n(2802),v=n(5905),y=n(7358);const x=(e,t,n,o,r)=>({background:e,border:`${(0,b.zA)(o.lineWidth)} ${o.lineType} ${t}`,[`${r}-icon`]:{color:n}}),w=e=>{const{componentCls:t,motionDurationSlow:n,marginXS:o,marginSM:r,fontSize:i,fontSizeLG:s,lineHeight:l,borderRadiusLG:a,motionEaseInOutCirc:c,withDescriptionIconSize:d,colorText:p,colorTextHeading:u,withDescriptionPadding:m,defaultPadding:h}=e;return{[t]:Object.assign(Object.assign({},(0,v.dF)(e)),{position:"relative",display:"flex",alignItems:"center",padding:h,wordWrap:"break-word",borderRadius:a,[`&${t}-rtl`]:{direction:"rtl"},[`${t}-content`]:{flex:1,minWidth:0},[`${t}-icon`]:{marginInlineEnd:o,lineHeight:0},"&-description":{display:"none",fontSize:i,lineHeight:l},"&-message":{color:u},[`&${t}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${n} ${c}, opacity ${n} ${c},\n        padding-top ${n} ${c}, padding-bottom ${n} ${c},\n        margin-bottom ${n} ${c}`},[`&${t}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${t}-with-description`]:{alignItems:"flex-start",padding:m,[`${t}-icon`]:{marginInlineEnd:r,fontSize:d,lineHeight:0},[`${t}-message`]:{display:"block",marginBottom:o,color:u,fontSize:s},[`${t}-description`]:{display:"block",color:p}},[`${t}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},$=e=>{const{componentCls:t,colorSuccess:n,colorSuccessBorder:o,colorSuccessBg:r,colorWarning:i,colorWarningBorder:s,colorWarningBg:l,colorError:a,colorErrorBorder:c,colorErrorBg:d,colorInfo:p,colorInfoBorder:u,colorInfoBg:m}=e;return{[t]:{"&-success":x(r,o,n,e,t),"&-info":x(m,u,p,e,t),"&-warning":x(l,s,i,e,t),"&-error":Object.assign(Object.assign({},x(d,c,a,e,t)),{[`${t}-description > pre`]:{margin:0,padding:0}})}}},k=e=>{const{componentCls:t,iconCls:n,motionDurationMid:o,marginXS:r,fontSizeIcon:i,colorIcon:s,colorIconHover:l}=e;return{[t]:{"&-action":{marginInlineStart:r},[`${t}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:i,lineHeight:(0,b.zA)(i),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${n}-close`]:{color:s,transition:`color ${o}`,"&:hover":{color:l}}},"&-close-text":{color:s,transition:`color ${o}`,"&:hover":{color:l}}}}};var j=(0,y.OF)("Alert",(e=>[w(e),$(e),k(e)]),(e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`}))),S=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const E={success:i.A,info:c.A,error:s.A,warning:a.A},C=e=>{const{icon:t,prefixCls:n,type:o}=e,i=E[o]||null;return t?(0,f.fx)(t,r.createElement("span",{className:`${n}-icon`},t),(()=>({className:p()(`${n}-icon`,{[t.props.className]:t.props.className})}))):r.createElement(i,{className:`${n}-icon`})},_=e=>{const{isClosable:t,prefixCls:n,closeIcon:o,handleClose:i,ariaProps:s}=e,a=!0===o||void 0===o?r.createElement(l.A,null):o;return t?r.createElement("button",Object.assign({type:"button",onClick:i,className:`${n}-close-icon`,tabIndex:0},s),a):null},A=r.forwardRef(((e,t)=>{const{description:n,prefixCls:o,message:i,banner:s,className:l,rootClassName:a,style:c,onMouseEnter:d,onMouseLeave:f,onClick:b,afterClose:v,showIcon:y,closable:x,closeText:w,closeIcon:$,action:k,id:E}=e,A=S(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[N,P]=r.useState(!1);const I=r.useRef(null);r.useImperativeHandle(t,(()=>({nativeElement:I.current})));const{getPrefixCls:z,direction:M,alert:B}=r.useContext(g.QO),O=z("alert",o),[T,L,R]=j(O),H=t=>{var n;P(!0),null===(n=e.onClose)||void 0===n||n.call(e,t)},D=r.useMemo((()=>void 0!==e.type?e.type:s?"warning":"info"),[e.type,s]),F=r.useMemo((()=>!("object"!=typeof x||!x.closeIcon)||(!!w||("boolean"==typeof x?x:!1!==$&&null!=$||!!(null==B?void 0:B.closable)))),[w,$,x,null==B?void 0:B.closable]),U=!(!s||void 0!==y)||y,q=p()(O,`${O}-${D}`,{[`${O}-with-description`]:!!n,[`${O}-no-icon`]:!U,[`${O}-banner`]:!!s,[`${O}-rtl`]:"rtl"===M},null==B?void 0:B.className,l,a,R,L),W=(0,m.A)(A,{aria:!0,data:!0}),V=r.useMemo((()=>{var e,t;return"object"==typeof x&&x.closeIcon?x.closeIcon:w||(void 0!==$?$:"object"==typeof(null==B?void 0:B.closable)&&(null===(e=null==B?void 0:B.closable)||void 0===e?void 0:e.closeIcon)?null===(t=null==B?void 0:B.closable)||void 0===t?void 0:t.closeIcon:null==B?void 0:B.closeIcon)}),[$,x,w,null==B?void 0:B.closeIcon]),G=r.useMemo((()=>{const e=null!=x?x:null==B?void 0:B.closable;if("object"==typeof e){const{closeIcon:t}=e;return S(e,["closeIcon"])}return{}}),[x,null==B?void 0:B.closable]);return T(r.createElement(u.Ay,{visible:!N,motionName:`${O}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:v},((t,o)=>{let{className:s,style:l}=t;return r.createElement("div",Object.assign({id:E,ref:(0,h.K4)(I,o),"data-show":!N,className:p()(q,s),style:Object.assign(Object.assign(Object.assign({},null==B?void 0:B.style),c),l),onMouseEnter:d,onMouseLeave:f,onClick:b,role:"alert"},W),U?r.createElement(C,{description:n,icon:e.icon,prefixCls:O,type:D}):null,r.createElement("div",{className:`${O}-content`},i?r.createElement("div",{className:`${O}-message`},i):null,n?r.createElement("div",{className:`${O}-description`},n):null),k?r.createElement("div",{className:`${O}-action`},k):null,r.createElement(_,{isClosable:F,prefixCls:O,closeIcon:V,handleClose:H,ariaProps:G}))})))}));var N=A,P=n(3029),I=n(2901),z=n(3954),M=n(2176),B=n(6822);var O=n(5501);let T=function(e){function t(){var e,n,o,r;return(0,P.A)(this,t),n=this,o=t,r=arguments,o=(0,z.A)(o),(e=(0,B.A)(n,(0,M.A)()?Reflect.construct(o,r||[],(0,z.A)(n).constructor):o.apply(n,r))).state={error:void 0,info:{componentStack:""}},e}return(0,O.A)(t,e),(0,I.A)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){const{message:e,description:t,id:n,children:o}=this.props,{error:i,info:s}=this.state,l=(null==s?void 0:s.componentStack)||null,a=void 0===e?(i||"").toString():e,c=void 0===t?l:t;return i?r.createElement(N,{id:n,type:"error",message:a,description:r.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},c)}):o}}])}(r.Component);var L=T;const R=N;R.ErrorBoundary=L;var H=R,D=n(6914);const F=e=>({language:e.split("language-").pop()});var U=n(669),q=n(521);const W=(0,q.rU)((e=>{let{css:t,cx:n,token:o,responsive:r,prefixCls:i}=e;return{levelStyle:n(`${i}-level`,t`
        &.h1 {
          ${r({tablet:t`
              font-size: 37.5px;
            `,mobile:t`
              font-size: 37px;
            `})}
        }
        &.h2 {
          margin-block: 7rem 3rem;
          ${r({tablet:t`
              font-size: 29.5px;
            `,mobile:t`
              font-size: 29px;
            `})}
        }
        &.h3 {
          margin-block: 5rem 2rem;
          ${r({tablet:t`
              font-size: 23.5px;
            `,mobile:t`
              font-size: 23px;
            `})}
        }
        &.h4 {
          margin-block: 3rem 1.5rem;
          ${r({tablet:t`
              font-size: 19.5px;
            `,mobile:t`
              font-size: 19px;
            `})}
        }
        &.h5 {
          margin-block-end: 1rem;
          ${r({tablet:t`
              font-size: 15.5px;
            `,mobile:t`
              font-size: 15px;
            `})}
        }
      `),heading:t`
      &.${i}-typography {
        position: relative;
        color: ${o.colorText};
        font-family: ${o.fontFamilyCode};
      }

      a {
        color: ${o.colorPrimaryHover};
      }

      &:hover {
        a {
          opacity: 1;
          color: ${o.colorPrimaryHover};
        }
      }
    `,link:n(`${i}-link`,t`
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        scroll-margin-top: 90px;
        transform: translateX(-100%);
        padding-inline-end: 4px;
        height: 100%;
        opacity: 0;
      `)}}));var V=n(4848);const{Title:G,Link:K}=U.A,Z=e=>t=>{let{children:n}=t;const{styles:o,cx:i}=W(),s=(0,r.useRef)(null);return(0,V.jsxs)(G,{level:e,id:`#${n}`,className:i(o.heading,o.levelStyle,`h${e}`),children:[(0,V.jsx)(K,{ref:s,id:`${n}`,className:o.link,onClick:e=>(e=>{var t;e.preventDefault(),null===(t=s.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})})(e),children:(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16",height:"16",children:(0,V.jsx)("path",{d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59c-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0c-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606c.648 17.722 3.826 35.527 9.69 52.721c1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96c28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83c-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37c-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569c-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51c27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612c5.864 17.194 9.042 34.999 9.69 52.721c.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z",fill:"currentColor"})})}),n]})};var J={h1:Z(1),h2:Z(2),h3:Z(3),h4:Z(4),h5:Z(5),h6:Z(6)},Q=n(7450),X=n(44);const Y=(0,q.rU)(((e,t)=>{let{css:n,cx:o,token:r,isDarkMode:i,stylish:s,prefixCls:l}=e;return{PrismScorll:o(`${l}-${t}-code-scorll`,n`
          overflow: overlay;
        `),PrismCode:o(`${l}-${t}-code`,n`
          display: inline-flex;
          flex-wrap: nowrap;

          font-size: 0.95rem;
          font-family: SF Mono;
          font-weight: normal;
          background-color: transparent;
          word-spacing: normal;
          word-break: normal;
          overflow-wrap: normal;
          tab-size: 4;
          hyphens: none;
          width: auto;
          min-width: 100%;
          line-height: 22px;
          margin: 0;
          padding: 0;
        `),lineNumbers:o(`${l}-${t}-code-lineNumbers`,n`
          display: flex;
          flex-direction: column;
          position: sticky;
          left: 0;
          z-index: 1;
          font-size: 0.85rem;
          line-height: 22px;

          .number {
            display: inline-block;
            user-select: none;
            padding-inline-start: 1rem;
            padding-inline-end: 0.4rem;
            text-align: right;
            background-color: ${r.colorBgElevated};
            color: ${r.colorTextQuaternary};
          }
        `),lines:o(`${l}-${t}-code-lines`,n`
          font-family: inherit !important;
          flex: 1;

          .line {
            position: relative;
            padding-inline-start: 0.8rem;
            padding-inline-end: 1.3rem;

            span {
              font-family: inherit;
            }
          }
        `),LineHighlight:o(`${l}-${t}-code-CodeHighlight`,n`
          &.number {
            background: linear-gradient(
              90deg,
              ${r.colorPrimaryBorderHover} 0% 10%,
              ${r.colorPrimaryBgHover} 10% 100%
            );
          }
          &.line {
            background-color: ${r.colorPrimaryBgHover};
          }
        `)}}));var ee=(0,r.memo)((e=>{const{codeString:t,language:n="javascript",highlight:o="",title:i=""}=e,{styles:s,cx:l}=Y("prism"),{appearance:a}=((0,r.useRef)(null),(0,X.e)()),c=(e=>{if(!e)return()=>!1;const t=e.split(",").map((e=>e.split("-").map(Number)));return e=>{const n=e+1;return t.some((e=>{let[t,o]=e;return o?n>=t&&n<=o:n===t}))}})(o),d=(0,r.useMemo)((()=>"dark"===a?Q.Zj.oneDark:Q.Zj.oneLight),[a]);return(0,V.jsx)(Q.f4,{code:t,language:n,theme:d,children:e=>{let{tokens:t,getLineProps:n,getTokenProps:o}=e;return(0,V.jsx)("div",{className:s.PrismScorll,children:(0,V.jsxs)("code",{className:s.PrismCode,children:[(0,V.jsx)("div",{className:s.lineNumbers,children:t.map(((e,t)=>(0,V.jsxs)("span",{className:l("number",c(t)&&s.LineHighlight),children:[t+1,c(t)]},`number-${t}`)))}),(0,V.jsx)("div",{className:s.lines,children:t.map(((e,t)=>(0,V.jsx)("div",{...n({line:e}),className:l("line",c(t)&&s.LineHighlight),children:e.map(((e,t)=>(0,V.jsx)("span",{...o({token:e})},t)))},`line-${t}`)))})]})})}})})),te=n(9140);const ne=(0,q.rU)((e=>{let{token:t,css:n}=e;return{fallback:n`
    width: 100%;
    > * {
      width: 100% !important;
      border-radius: ${t.borderRadiusLG}px;
    }
  `,placeholder:n`
    color: ${t.colorTextDescription};
    font-size: ${t.fontSizeLG}px;
  `,sandpack:n`
    .sp-layout {
      border-radius: ${1.2*t.borderRadius}px;
    }

    .cm-scroller {
      padding: 0 0 0.9rem 0 !important;
    }

    .cm-lineNumbers {
      padding-left: 8px;
      font-size: 0.85rem !important;
    }
  `}})),oe=r.lazy((()=>Promise.all([n.e(657),n.e(809),n.e(318)]).then(n.bind(n,3237)))),re=()=>{const{styles:e}=ne();return(0,V.jsx)("div",{className:e.fallback,children:(0,V.jsx)(te.A.Node,{active:!0,style:{height:300,width:"100%"},children:(0,V.jsx)("span",{className:e.placeholder,children:"Loading Demo..."})})})};var ie=e=>{const{customSetup:t,options:n,files:o,template:i,codeString:s}=e,{styles:l}=ne(),a=(0,q.DP)(),{appearance:c}=(0,X.e)(),d={activeFile:"index.tsx",editorWidthPercentage:60,showLineNumbers:!0,showConsoleButton:!0,showConsole:!1,showRefreshButton:!0,editorHeight:"400px",autorun:!0,...n},p={colors:{surface1:a.colorBgElevated,surface2:"none"},font:{size:"0.95rem",mono:"SF Mono",lineHeight:"22px"}},u=(0,r.useMemo)((()=>({customSetup:{dependencies:{react:"^18.0.0","react-dom":"^18.0.0",antd:"^5.0.0"},devDependencies:{"@types/react":"^18.0.0","@types/react-dom":"^18.0.0",typescript:"^5"},entry:"index.tsx"},files:{"index.tsx":"import React from 'react';\n\t\t\t\timport { createRoot } from 'react-dom/client';\n\t\t\t\timport App from './app';\n\t\t\t\timport './index.css';\n\n\t\t\t\tconst root = createRoot(document.getElementById(\"root\"));\n\t\t\t\troot.render(<App />);\n\t\t\t","index.css":`html, body {\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tbackground: ${"dark"===c?"#000":"#fff"};\n\t\t\t\t}\n\n\t\t\t\t#root {\n\t\t\t\t\tpadding: 24px;\n\t\t\t\t}`,"app.tsx":s}})),[c,i]);return(0,V.jsx)(r.Suspense,{fallback:(0,V.jsx)(re,{}),children:(0,V.jsx)(oe,{className:l.sandpack,theme:p,options:d,...u})})},se=n(367),le=n(8777);const ae=300,ce="https://stackblitz.com",de=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],pe=["project","search","ports","settings"],ue=["light","dark"],me=["editor","preview"],he={clickToLoad:e=>ge("ctl",e),devToolsHeight:e=>be("devtoolsheight",e),forceEmbedLayout:e=>ge("embed",e),hideDevTools:e=>ge("hidedevtools",e),hideExplorer:e=>ge("hideExplorer",e),hideNavigation:e=>ge("hideNavigation",e),openFile:e=>ye("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>ve("sidebarView",e,pe),startScript:e=>ye("startScript",e),terminalHeight:e=>be("terminalHeight",e),theme:e=>ve("theme",e,ue),view:e=>ve("view",e,me),zenMode:e=>ge("zenMode",e),organization:e=>`${ye("orgName",e?.name)}&${ye("orgProvider",e?.provider)}`,crossOriginIsolated:e=>ge("corp",e)};function fe(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&he.hasOwnProperty(e)?he[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function ge(e,t){return!0===t?`${e}=1`:""}function be(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function ve(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function ye(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function xe(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function we(e,t){return`${ke(t)}${e}${fe(t)}`}function $e(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${ke(n)}${e}${fe(n)}`}function ke(e={}){return("string"==typeof e.origin?e.origin:ce).replace(/\/$/,"")}function je(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${ae}`,o=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),o?e.setAttribute("width",o):e.setAttribute("style","width:100%;")}(t,n),function(e,t,n={}){const o=e.allow?.split(";")?.map((e=>e.trim()))??[];n.crossOriginIsolated&&!o.includes("cross-origin-isolated")&&o.push("cross-origin-isolated");o.length>0&&(t.allow=o.join("; "))}(e,t,n),e.replaceWith(t)}function Se(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function Ee(e){return e&&!1===e.newWindow?"_self":"_blank"}class Ce{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,o)=>{const r=xe();this.pending[r]={resolve:n,reject:o},this.port.postMessage({type:e,payload:{...t,__reqid:r}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:o,__success:r,__error:i}=n;this.pending[o]&&(r?this.pending[o].resolve(this.cleanResult(n)):this.pending[o].reject(i?`${t}: ${i}`:t),delete this.pending[o])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class _e{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new Ce(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const Ae=[];class Ne{constructor(e){this.id=xe(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new _e(n[0],t.payload),e(this.vm),r())},o=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function r(){window.clearInterval(s),window.removeEventListener("message",n)}window.addEventListener("message",n),o();let i=0;const s=window.setInterval((()=>{if(this.vm)r();else{if(i>=20)return r(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void Ae.forEach(((e,t)=>{e.id===this.id&&Ae.splice(t,1)}));i++,o()}}),500)})),Ae.push(this)}}const Pe=e=>{const t=e instanceof Element?"element":"id";return Ae.find((n=>n[t]===e))??null};function Ie({template:e,title:t,description:n,dependencies:o,files:r,settings:i}){if(!de.includes(e)){const e=de.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const s=[],l=(e,t,n="")=>{s.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};l("project[title]",t),"string"==typeof n&&n.length>0&&l("project[description]",n),l("project[template]",e,"javascript"),o&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):l("project[dependencies]",JSON.stringify(o))),i&&l("project[settings]",JSON.stringify(i)),Object.entries(r).forEach((([e,t])=>{l(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.append(...s),a}function ze(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(Pe(e)??new Ne(e)).pending}const Me={connect:ze,embedGithubProject:function(e,t,n){const o=Se(e),r=document.createElement("iframe");return r.src=$e(`/github/${t}`,n),je(o,r,n),ze(r)},embedProject:function(e,t,n){const o=Se(e),r=function(e,t){const n=Ie(e);return n.action=$e("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),i=document.createElement("iframe");return je(o,i,n),i.contentDocument?.write(r),ze(i)},embedProjectId:function(e,t,n){const o=Se(e),r=document.createElement("iframe");return r.src=$e(`/edit/${t}`,n),je(o,r,n),ze(r)},openGithubProject:function(e,t){const n=we(`/github/${e}`,t),o=Ee(t);window.open(n,o)},openProject:function(e,t){!function(e,t){const n=Ie(e);n.action=we("/run",t),n.target=Ee(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=we(`/edit/${e}`,t),o=Ee(t);window.open(n,o)}};var Be=n(4777),Oe=n(8168),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"}}]},name:"code-sandbox",theme:"outlined"},Le=n(7064),Re=function(e,t){return r.createElement(Le.A,(0,Oe.A)({},e,{ref:t,icon:Te}))};var He=r.forwardRef(Re),De=n(3336),Fe=n.n(De);const Ue=(0,q.rU)(((e,t)=>{let{css:n,cx:o,token:r,isDarkMode:i,stylish:s,prefixCls:l}=e;return{Pre:o(`${l}-${t}`,n`
          ${s.card}
          position: relative;
          border-radius: ${1.3*r.borderRadius}px;
          margin-block: 1.6rem;
          padding-block-end: 0.9rem;
          border: 1px solid ${r.colorBorderSecondary};
          overflow: overlay;
        `),TitleBox:o(`${l}-${t}-titleBox`,n`
          position: relative;
          left: 0;
          display: flex;
          color: ${r.colorTextTertiary};
          font-size: 0.95rem;
          padding-block: 0.6rem 0.25rem;
          padding-inline: 1.5rem 1.2rem;
          gap: 0.8rem;
          display: flex;
          justify-content: space-between;
        `),titleStyle:o(`${l}-${t}-titleBox-title`,n`
          color: ${r.colorTextTertiary};
        `),stackblitz:o(`${l}-${t}-titleBox-stackblitz`,n`
          display: flex;
          align-items: center;
          color: ${r.colorTextTertiary};
          margin-inline-end: 0.3rem;
          opacity: 0.8;
        `),language:o(`${l}-${t}-language`,n`
          display: flex;
          align-items: center;
          font-family: ${r.fontFamilyCode};
          font-size: 0.9rem;
          color: ${r.colorTextQuaternary};
        `),copy:o(`${l}-${t}-copy`,n`
          position: absolute;
          top: 0.85rem;
          right: 1.2rem;
          z-index: 10;
          height: 32px;
          padding-block: 5px;
          padding-inline: 7px;
          box-shadow: ${r.boxShadowFourth};
        `)}}));var qe=n(394),We=n(3207),Ve=n(1635);var Ge=function(e,t){void 0===e&&(e=!1);var n=(0,Ve.zs)((0,r.useState)(e),2),o=n[0],i=n[1];return[o,(0,r.useMemo)((function(){var n=void 0===t?!e:t;return{toggle:function(){return i((function(t){return t===e?n:e}))},set:function(e){return i(e)},setLeft:function(){return i(e)},setRight:function(){return i(n)}}}),[])]};var Ke=n(7917),Ze=function(e,t){var n=t||{},o=n.onEnter,i=n.onLeave,s=n.onChange,l=(0,Ve.zs)(function(e){void 0===e&&(e=!1);var t=(0,Ve.zs)(Ge(!!e),2),n=t[0],o=t[1],i=o.toggle,s=o.set;return[n,(0,r.useMemo)((function(){return{toggle:i,set:function(e){return s(!!e)},setTrue:function(){return s(!0)},setFalse:function(){return s(!1)}}}),[])]}(!1),2),a=l[0],c=l[1],d=c.setTrue,p=c.setFalse;return(0,Ke.A)("mouseenter",(function(){null==o||o(),d(),null==s||s(!0)}),{target:e}),(0,Ke.A)("mouseleave",(function(){null==i||i(),p(),null==s||s(!1)}),{target:e}),a},Je=n(1234),Qe=n(7965),Xe=n.n(Qe);const Ye=()=>{const{theme:e}=Ue();return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",height:18,width:18,children:(0,V.jsxs)("g",{id:"empty-clipboard--work-plain-clipboard-task-list-company-office",children:[(0,V.jsx)("path",{id:"Rectangle 659",fill:e.colorPrimaryBorder,d:"M1.6071428571428572 3.2142857142857144A1.9285714285714288 1.9285714285714288 0 0 1 3.535714285714286 1.2857142857142858h10.928571428571429a1.9285714285714288 1.9285714285714288 0 0 1 1.9285714285714288 1.9285714285714288v12.857142857142858a1.9285714285714288 1.9285714285714288 0 0 1 -1.9285714285714288 1.9285714285714288h-10.928571428571429a1.9285714285714288 1.9285714285714288 0 0 1 -1.9285714285714288 -1.9285714285714288v-12.857142857142858Z",strokeWidth:1}),(0,V.jsx)("path",{id:"Union",fill:e.colorPrimaryHover,d:"M5.7857142857142865 1.2857142857142858a1.2857142857142858 1.2857142857142858 0 0 1 1.2857142857142858 -1.2857142857142858h3.8571428571428577a1.2857142857142858 1.2857142857142858 0 0 1 1.2857142857142858 1.2857142857142858v0.6428571428571429a1.2857142857142858 1.2857142857142858 0 0 1 -1.2857142857142858 1.2857142857142858h-3.8571428571428577a1.2857142857142858 1.2857142857142858 0 0 1 -1.2857142857142858 -1.2857142857142858V1.2857142857142858Z",strokeWidth:1})]})})},et=()=>{const{theme:e}=Ue();return(0,V.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",height:18,width:18,children:(0,V.jsxs)("g",{id:"clipboard-check--checkmark-edit-task-edition-checklist-check-success-clipboard-form",children:[(0,V.jsx)("path",{id:"Rectangle 659",fill:e.colorPrimaryBorder,d:"M1.6071428571428572 3.2142857142857144A1.9285714285714288 1.9285714285714288 0 0 1 3.535714285714286 1.2857142857142858h10.928571428571429a1.9285714285714288 1.9285714285714288 0 0 1 1.9285714285714288 1.9285714285714288v12.857142857142858a1.9285714285714288 1.9285714285714288 0 0 1 -1.9285714285714288 1.9285714285714288h-10.928571428571429a1.9285714285714288 1.9285714285714288 0 0 1 -1.9285714285714288 -1.9285714285714288v-12.857142857142858Z",strokeWidth:1}),(0,V.jsx)("path",{id:"Union",fill:e.colorPrimaryHover,fillRule:"evenodd",d:"M7.071428571428572 0a1.2857142857142858 1.2857142857142858 0 0 0 -1.2857142857142858 1.2857142857142858v0.6428571428571429a1.2857142857142858 1.2857142857142858 0 0 0 1.2857142857142858 1.2857142857142858h3.8571428571428577a1.2857142857142858 1.2857142857142858 0 0 0 1.2857142857142858 -1.2857142857142858V1.2857142857142858a1.2857142857142858 1.2857142857142858 0 0 0 -1.2857142857142858 -1.2857142857142858h-3.8571428571428577Zm5.914285714285715 8.935714285714287a0.9642857142857144 0.9642857142857144 0 0 0 -1.542857142857143 -1.1571428571428573L8.133428571428572 12.191142857142857l-1.1700000000000002 -0.7791428571428571a0.9642857142857144 0.9642857142857144 0 0 0 -1.0697142857142858 1.6045714285714288l1.9285714285714288 1.2857142857142858A0.9642857142857144 0.9642857142857144 0 0 0 9.128571428571428 14.07857142857143l3.8571428571428577 -5.142857142857143Z",clipRule:"evenodd",strokeWidth:1})]})})};var tt=e=>{let{code:t,highlightRef:n}=e;const{styles:o}=Ue(),{message:i}=qe.A.useApp(),{0:s,1:l}=(0,r.useState)(!1),a=Ze(n),c=(0,We.zh)({opacity:a?1:0,display:a?"flex":"none"}),{run:d}=(0,Je.A)((()=>{l(!1)}),{wait:2e3});return(0,V.jsx)(We.CS.div,{style:{...c,position:"absolute",top:"0px",right:"0px"},children:(0,V.jsx)(le.Ay,{className:o.copy,size:"small",type:"dashed",onClick:()=>{Xe()(t),l(!0),i.open({type:"success",content:"Copied 🎉",duration:2}),d()},children:s?(0,V.jsx)(et,{}):(0,V.jsx)(Ye,{})})})};var nt=e=>{let{title:t,codeString:n,language:o,highlightRef:r}=e;const{styles:i,cx:s}=Ue("syntax-preHighlight");return(0,V.jsxs)("div",{className:i.TitleBox,children:[(0,V.jsx)("div",{className:i.titleStyle,children:t}),(0,V.jsxs)("div",{className:i.language,children:[(0,V.jsx)(se.A,{title:"在 Stackblitz 中打开",children:(0,V.jsx)(le.Ay,{className:i.stackblitz,size:"small",type:"link",onClick:()=>{Me.openProject({title:t||"index.js",description:"",template:"javascript",files:{"index.html":'<div id="app"></div>',"index.js":n},settings:{compile:{trigger:"auto",clearConsole:!1}}},{newWindow:!0,showSidebar:!1,devToolsHeight:100})},children:(0,V.jsx)(Fe(),{})})}),(0,V.jsx)(se.A,{title:"在 CodeSandbox 中打开",children:(0,V.jsx)(le.Ay,{className:i.stackblitz,size:"small",type:"link",onClick:async()=>{try{const e=`https://codesandbox.io/api/v1/sandboxes/define?parameters=${(0,Be.b)({files:{"index.js":{content:n,isBinary:!1},"package.json":{content:JSON.stringify({dependencies:{}}),isBinary:!1}}})}&utm_medium=sandpack`;window.open(e,"_blank")}catch(e){console.error("Error creating sandbox:",e)}},children:(0,V.jsx)(He,{style:{fontSize:"1.1em"}})})}),(0,V.jsx)("span",{children:o})]}),(0,V.jsx)(tt,{code:n,highlightRef:r})]})};var ot=e=>{const{codeString:t,language:n="javascript",highlight:o="",title:i="",template:s,environment:l}=e,{styles:a,cx:c}=Ue("pre"),d=(0,r.useRef)(null),p={"index.js":t},u={entry:"index.tsx",environment:l};return s?(0,V.jsx)(ie,{codeString:t,files:p,customSetup:u}):(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)("pre",{ref:d,className:a.Pre,children:[(0,V.jsx)(nt,{title:i,codeString:t,language:n,highlightRef:d}),(0,V.jsx)(ee,{...e})]})})};const rt=(0,q.rU)(((e,t)=>{let{css:n,cx:o,token:r,isDarkMode:i,stylish:s,prefixCls:l}=e;return{code:o(`${l}-code`,n`
          color: ${r.colorPrimary};
          font-size: 0.95rem;
          background-color: ${r.colorFillQuaternary};
          padding-block: 0.2rem;
          padding-inline: 0.35rem;
          border-radius: ${r.borderRadiusOuter}px;
          margin-inline: 0.3rem;
          font-family: ${r.fontFamilyHighlighter};
        `)}}));var it=e=>{const{styles:t}=rt();return(0,V.jsx)("code",{...e,className:t.code})};const st=(0,q.rU)((e=>{let{css:t,cx:n,token:o,responsive:r,prefixCls:i}=e;return{blockquote:n(`${i}-blockquote`,t`
        width: 100%;
        margin-inline: 0;
        margin-block: 2rem;
        padding-block: 0.8rem;
        padding-inline: 1rem;
        background: ${o.colorPrimaryBg};
        border-radius: ${o.borderRadius}px;
        border-inline-start: 4px solid ${o.colorPrimaryBorder};

        code {
          background-color: transparent;
        }

        p {
          font-size: 0.96rem;
          line-height: 1.9;
          font-weight: 400;
          overflow: overlay;

          &:last-of-type {
            margin: 0;
          }
        }
      `)}}));var lt=e=>{const{styles:t}=st();return(0,V.jsx)("blockquote",{...e,className:t.blockquote})};const at=(0,q.rU)((e=>{let{css:t,cx:n,token:o,responsive:r,prefixCls:i}=e;return{ul:n(`${i}-ul`,t`
        padding-inline-start: 1.5rem;
      `),ol:n(`${i}-ol`,t`
        padding-inline-start: 1.2rem;
      `),li:n(`${i}-li`,t`
        line-height: 1.9;
        margin-block-end: 0.8rem;
        padding-inline-start: 0.25rem;
        &::marker {
          font-size: 1.1rem;
          line-height: 1;
          color: ${o.colorPrimaryHover};
        }
      `)}}));var ct={ul:e=>{const{styles:t}=at();return(0,V.jsx)("ul",{...e,className:t.ul})},ol:e=>{const{styles:t}=at();return(0,V.jsx)("ol",{...e,className:t.ol})},li:e=>{const{styles:t}=at();return(0,V.jsx)("li",{...e,className:t.li})}};const dt=(0,q.rU)((e=>{let{css:t,cx:n,token:o,responsive:r,prefixCls:i}=e;return{table:n(`${i}-table`,t`
        display: table;
        border-collapse: separate;
        border-spacing: 0;
        max-width: 100%;
        overflow-x: auto;
        width: 100%;
        line-height: 1.5;
        margin-block-start: 0;
        margin-block-end: 1.5rem;
        border: 1px solid ${o.colorBorderSecondary};
        border-block-end: none;
        border-radius: ${o.borderRadiusLG}px;
        overflow: hidden;

        tr {
          transition: background-color ${o.motionDurationMid};
          &:hover {
            background-color: ${o.colorBgElevated};
          }
        }

        td,
        th {
          position: relative;
          hyphens: auto;
          padding-block: 0.5rem;
          padding-inline: 0.5rem;
          text-align: left;
          word-break: break-word;
          border-block-end: 1px solid ${o.colorBgElevated};

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            inset-inline-end: 0;
            width: 1px;
            height: 1.6em;
            background-color: ${o.colorBorderSecondary};
            transform: translateY(-50%);
            transition: ${o.motionDurationMid};
          }

          &:last-child {
            &::before {
              content: '';
              width: 0;
            }
          }
        }

        th {
          background: ${o.colorBgElevated};
        }
      `)}}));var pt={code:e=>{const t=(e=>{const{children:t,className:n="",...o}=e,{language:r}=F(n);return{children:t,codeString:t,language:r,className:n,...o}})(e);return(0,V.jsx)(it,{...t})},pre:e=>{const t=(e=>{const{children:t,className:n="",...o}=e.children.props,{language:r}=F(n);return{children:t,codeString:t.trim(),language:r,className:n,...o}})(e);return(0,V.jsx)(ot,{...t})},a:e=>(0,V.jsx)("a",{...e,target:"_blank"}),Alert:e=>{const{children:t,message:n}=e;return(0,V.jsx)(H,{...e,message:t||n,style:{marginBlockStart:"1.2rem"}})},Tag:e=>(0,V.jsx)(D.A,{...e,bordered:!1}),...J,...ct,blockquote:lt,table:e=>{const{styles:t}=dt();return(0,V.jsx)("table",{...e,className:t.table})}};var ut=e=>{let{children:t}=e;return(0,V.jsx)(o.x,{components:pt,children:t})}},9868:function(e,t,n){"use strict";n.d(t,{I:function(){return o}});const o=(0,n(521).rU)((e=>{let{css:t,cx:n,token:o,stylish:r,responsive:i,prefixCls:s}=e;return{container:t`
    ${r.container}

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

    ${i({tablet:t`
        display: block;

        .content {
          margin-block-end: 2rem;
        }
      `})}
  `,spacerLine:t`
    width: 100%;
    border-block-end: 1px dashed ${o.colorBorder};
    margin-block-end: 3.2rem;
  `,title:n(t`
    &.${s}-typography {
      padding-block-start: 5.6rem;
      padding-block-end: 4rem;
      margin: 0;
      font-weight: bold;
      font-family: ${o.fontFamilyCode};

      ${i({tablet:t`
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
    ${r.card}
  `}}))},2992:function(e,t,n){var o,r=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={};function r(e,t){if(!o[e]){o[e]={};for(var n=0;n<e.length;n++)o[e][e.charAt(n)]=n}return o[e][t]}var i={compressToBase64:function(e){if(null==e)return"";var n=i._compress(e,6,(function(e){return t.charAt(e)}));switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:i._decompress(e.length,32,(function(n){return r(t,e.charAt(n))}))},compressToUTF16:function(t){return null==t?"":i._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:i._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=i.compress(e),n=new Uint8Array(2*t.length),o=0,r=t.length;o<r;o++){var s=t.charCodeAt(o);n[2*o]=s>>>8,n[2*o+1]=s%256}return n},decompressFromUint8Array:function(t){if(null==t)return i.decompress(t);for(var n=new Array(t.length/2),o=0,r=n.length;o<r;o++)n[o]=256*t[2*o]+t[2*o+1];var s=[];return n.forEach((function(t){s.push(e(t))})),i.decompress(s.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":i._compress(e,6,(function(e){return n.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),i._decompress(e.length,32,(function(t){return r(n,e.charAt(t))})))},compress:function(t){return i._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,n){if(null==e)return"";var o,r,i,s={},l={},a="",c="",d="",p=2,u=3,m=2,h=[],f=0,g=0;for(i=0;i<e.length;i+=1)if(a=e.charAt(i),Object.prototype.hasOwnProperty.call(s,a)||(s[a]=u++,l[a]=!0),c=d+a,Object.prototype.hasOwnProperty.call(s,c))d=c;else{if(Object.prototype.hasOwnProperty.call(l,d)){if(d.charCodeAt(0)<256){for(o=0;o<m;o++)f<<=1,g==t-1?(g=0,h.push(n(f)),f=0):g++;for(r=d.charCodeAt(0),o=0;o<8;o++)f=f<<1|1&r,g==t-1?(g=0,h.push(n(f)),f=0):g++,r>>=1}else{for(r=1,o=0;o<m;o++)f=f<<1|r,g==t-1?(g=0,h.push(n(f)),f=0):g++,r=0;for(r=d.charCodeAt(0),o=0;o<16;o++)f=f<<1|1&r,g==t-1?(g=0,h.push(n(f)),f=0):g++,r>>=1}0==--p&&(p=Math.pow(2,m),m++),delete l[d]}else for(r=s[d],o=0;o<m;o++)f=f<<1|1&r,g==t-1?(g=0,h.push(n(f)),f=0):g++,r>>=1;0==--p&&(p=Math.pow(2,m),m++),s[c]=u++,d=String(a)}if(""!==d){if(Object.prototype.hasOwnProperty.call(l,d)){if(d.charCodeAt(0)<256){for(o=0;o<m;o++)f<<=1,g==t-1?(g=0,h.push(n(f)),f=0):g++;for(r=d.charCodeAt(0),o=0;o<8;o++)f=f<<1|1&r,g==t-1?(g=0,h.push(n(f)),f=0):g++,r>>=1}else{for(r=1,o=0;o<m;o++)f=f<<1|r,g==t-1?(g=0,h.push(n(f)),f=0):g++,r=0;for(r=d.charCodeAt(0),o=0;o<16;o++)f=f<<1|1&r,g==t-1?(g=0,h.push(n(f)),f=0):g++,r>>=1}0==--p&&(p=Math.pow(2,m),m++),delete l[d]}else for(r=s[d],o=0;o<m;o++)f=f<<1|1&r,g==t-1?(g=0,h.push(n(f)),f=0):g++,r>>=1;0==--p&&(p=Math.pow(2,m),m++)}for(r=2,o=0;o<m;o++)f=f<<1|1&r,g==t-1?(g=0,h.push(n(f)),f=0):g++,r>>=1;for(;;){if(f<<=1,g==t-1){h.push(n(f));break}g++}return h.join("")},decompress:function(e){return null==e?"":""==e?null:i._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,n,o){var r,i,s,l,a,c,d,p=[],u=4,m=4,h=3,f="",g=[],b={val:o(0),position:n,index:1};for(r=0;r<3;r+=1)p[r]=r;for(s=0,a=Math.pow(2,2),c=1;c!=a;)l=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=o(b.index++)),s|=(l>0?1:0)*c,c<<=1;switch(s){case 0:for(s=0,a=Math.pow(2,8),c=1;c!=a;)l=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=o(b.index++)),s|=(l>0?1:0)*c,c<<=1;d=e(s);break;case 1:for(s=0,a=Math.pow(2,16),c=1;c!=a;)l=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=o(b.index++)),s|=(l>0?1:0)*c,c<<=1;d=e(s);break;case 2:return""}for(p[3]=d,i=d,g.push(d);;){if(b.index>t)return"";for(s=0,a=Math.pow(2,h),c=1;c!=a;)l=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=o(b.index++)),s|=(l>0?1:0)*c,c<<=1;switch(d=s){case 0:for(s=0,a=Math.pow(2,8),c=1;c!=a;)l=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=o(b.index++)),s|=(l>0?1:0)*c,c<<=1;p[m++]=e(s),d=m-1,u--;break;case 1:for(s=0,a=Math.pow(2,16),c=1;c!=a;)l=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=o(b.index++)),s|=(l>0?1:0)*c,c<<=1;p[m++]=e(s),d=m-1,u--;break;case 2:return g.join("")}if(0==u&&(u=Math.pow(2,h),h++),p[d])f=p[d];else{if(d!==m)return null;f=i+i.charAt(0)}g.push(f),p[m++]=i+f.charAt(0),i=f,0==--u&&(u=Math.pow(2,h),h++)}}};return i}();void 0===(o=function(){return r}.call(t,n,t,e))||(e.exports=o)},3336:function(e,t,n){var o=n(6540);function r(e){return o.createElement("svg",e,o.createElement("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"}))}r.defaultProps={viewBox:"64 64 896 896",focusable:"false","data-icon":"thunderbolt",width:"1.2em",height:"1.2em",fill:"currentColor","aria-hidden":"true",display:"flex",alignItems:"center"},e.exports=r,r.default=r},8453:function(e,t,n){"use strict";n.d(t,{R:function(){return s},x:function(){return l}});var o=n(6540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
//# sourceMappingURL=5410eae4037b98598b227322b344e236161e7614-b9920a85155e34fcd140.js.map