"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[615],{56914:function(e,r,o){o.d(r,{A:function(){return N}});var n=o(96540),t=o(46942),l=o.n(t),a=o(19853),c=o(54121),i=o(70064),s=o(40682),d=o(76130),m=o(62279),g=o(52802),p=o(24978),u=o(25905),b=o(14277),h=o(37358);const f=e=>{const{lineWidth:r,fontSizeIcon:o,calc:n}=e,t=e.fontSizeSM;return(0,b.oX)(e,{tagFontSize:t,tagLineHeight:(0,g.zA)(n(e.lineHeightSM).mul(t).equal()),tagIconSize:n(o).sub(n(r).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},k=e=>({defaultBg:new p.q(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var y=(0,h.OF)("Tag",(e=>(e=>{const{paddingXXS:r,lineWidth:o,tagPaddingHorizontal:n,componentCls:t,calc:l}=e,a=l(n).sub(o).equal(),c=l(r).sub(o).equal();return{[t]:Object.assign(Object.assign({},(0,u.dF)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:a,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,g.zA)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${t}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${t}-close-icon`]:{marginInlineStart:c,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${t}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${t}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:a}}),[`${t}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}})(f(e))),k),$=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]])}return o};const x=n.forwardRef(((e,r)=>{const{prefixCls:o,style:t,className:a,checked:c,onChange:i,onClick:s}=e,d=$(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:g,tag:p}=n.useContext(m.QO),u=g("tag",o),[b,h,f]=y(u),k=l()(u,`${u}-checkable`,{[`${u}-checkable-checked`]:c},null==p?void 0:p.className,a,h,f);return b(n.createElement("span",Object.assign({},d,{ref:r,style:Object.assign(Object.assign({},t),null==p?void 0:p.style),className:k,onClick:e=>{null==i||i(!c),null==s||s(e)}})))}));var v=x,C=o(31108);var j=(0,h.bf)(["Tag","preset"],(e=>(e=>(0,C.A)(e,((r,o)=>{let{textColor:n,lightBorderColor:t,lightColor:l,darkColor:a}=o;return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:n,background:l,borderColor:t,"&-inverse":{color:e.colorTextLightSolid,background:a,borderColor:a},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}})))(f(e))),k);const P=(e,r,o)=>{const n="string"!=typeof(t=o)?t:t.charAt(0).toUpperCase()+t.slice(1);var t;return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:e[`color${o}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var S=(0,h.bf)(["Tag","status"],(e=>{const r=f(e);return[P(r,"success","Success"),P(r,"processing","Info"),P(r,"error","Error"),P(r,"warning","Warning")]}),k),w=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]])}return o};const O=n.forwardRef(((e,r)=>{const{prefixCls:o,className:t,rootClassName:g,style:p,children:u,icon:b,color:h,onClose:f,bordered:k=!0,visible:$}=e,x=w(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:v,direction:C,tag:P}=n.useContext(m.QO),[O,B]=n.useState(!0),N=(0,a.A)(x,["closeIcon","closable"]);n.useEffect((()=>{void 0!==$&&B($)}),[$]);const T=(0,c.nP)(h),z=(0,c.ZZ)(h),H=T||z,A=Object.assign(Object.assign({backgroundColor:h&&!H?h:void 0},null==P?void 0:P.style),p),I=v("tag",o),[E,F,M]=y(I),R=l()(I,null==P?void 0:P.className,{[`${I}-${h}`]:H,[`${I}-has-color`]:h&&!H,[`${I}-hidden`]:!O,[`${I}-rtl`]:"rtl"===C,[`${I}-borderless`]:!k},t,g,F,M),L=e=>{e.stopPropagation(),null==f||f(e),e.defaultPrevented||B(!1)},[,q]=(0,i.A)((0,i.d)(e),(0,i.d)(P),{closable:!1,closeIconRender:e=>{const r=n.createElement("span",{className:`${I}-close-icon`,onClick:L},e);return(0,s.fx)(e,r,(e=>({onClick:r=>{var o;null===(o=null==e?void 0:e.onClick)||void 0===o||o.call(e,r),L(r)},className:l()(null==e?void 0:e.className,`${I}-close-icon`)})))}}),U="function"==typeof x.onClick||u&&"a"===u.type,D=b||null,Q=D?n.createElement(n.Fragment,null,D,u&&n.createElement("span",null,u)):u,W=n.createElement("span",Object.assign({},N,{ref:r,className:R,style:A}),Q,q,T&&n.createElement(j,{key:"preset",prefixCls:I}),z&&n.createElement(S,{key:"status",prefixCls:I}));return E(U?n.createElement(d.A,{component:"Tag"},W):W)})),B=O;B.CheckableTag=v;var N=B},51405:function(e,r,o){o.d(r,{A:function(){return b}});const n=(0,o(521).rU)((e=>{let{css:r,cx:o,token:n,prefixCls:t}=e;const l=r`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 1.6rem;
    text-decoration: none;
    border-radius: ${n.borderRadius};
    color: ${n.colorTextSecondary};
    font-size: 0.88rem;
    font-weight: 500;
    margin-block-end: 0.7rem;

    .inkVisible {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      margin-inline-start: 0.45rem;
      margin-inline-end: 0.85rem;
      background-color: ${n.colorPrimaryHover};
      opacity: 0.8;
    }
  `,a=r`
    &:hover {
      color: ${n.colorPrimaryTextHover};
      text-decoration: none;
    }
  `;return{menuBar:o(`${t}-menuBar`,r`
        div:last-child {
          margin-block-end: 0rem;
        }
      `),item:o(l),hover:o(a),title:o(`${t}-menuBar-title`,r`
        color: ${n.colorText};
        font-size: 0.98rem;
        font-weight: 700;
        margin-block-end: 0.6rem;
        margin-block-start: 0.4rem;

        &:first-child {
          margin-block-start: 0;
        }
      `),text:o(`${t}-menuBar-text`,r`
        ${l}
      `),link:o(`${t}-menuBar-link`,r`
        ${l}
        ${a}

        .link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: inherit;
          width: 100%;

          &.active {
            color: ${n.colorPrimary} !important;
          }
        }
      `),tag:o(`${t}-menuBar-tag`,r`
        font-size: 0.88rem;
        color: ${n.colorTextSecondary};
        background-color: ${n.colorFillQuaternary};
        text-transform: capitalize;
        margin-block-start: 0.7rem;

        &:hover {
          color: ${n.colorPrimary}!important;
          background-color: ${n.colorPrimaryBg}!important;
        }

        &.site-tag-checkable-checked {
          color: ${n.colorPrimaryActive} !important;
          background-color: ${n.colorPrimaryBg};
        }
      `)}}));var t=o(74848);var l=e=>{const{styles:r}=n();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:r.menuBar,children:e.children})})};var a=e=>{let{children:r}=e;const{styles:o}=n();return(0,t.jsx)("div",{className:o.title,children:r})},c=o(64810);var i=e=>{let{children:r,marker:o=!0,extra:l,to:a,...i}=e;const{styles:s,cx:d}=n(),m=()=>"object"!=typeof l?(0,t.jsx)("span",{className:"extra",children:l}):l;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:d(s.link),children:(0,t.jsxs)(c.N_,{...i,to:a,className:"link",style:{paddingInline:o?"0":"0.6em"},activeClassName:"active",children:[(0,t.jsxs)("div",{children:[o&&(0,t.jsx)("span",{className:"inkVisible"}),r]}),(0,t.jsx)(m,{})]})})})};var s=e=>{let{children:r,marker:o=!0,extra:l}=e;const{styles:a,cx:c}=n(),i=()=>"object"!=typeof l?(0,t.jsx)("span",{className:"extra",children:l}):l;return(0,t.jsxs)("div",{className:c(a.text),children:[(0,t.jsxs)("div",{children:[o&&(0,t.jsx)("span",{className:"inkVisible"}),r]}),(0,t.jsx)(i,{})]})},d=o(96540),m=o(56914),g=o(74304);var p=e=>{let{to:r,children:o}=e;const{styles:l,cx:a}=n(),i=(0,d.useMemo)((()=>g.fU?"":location.pathname),[]),s=(0,d.useMemo)((()=>r===i),[i]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(m.A.CheckableTag,{className:a(l.tag),checked:s,onClick:()=>{(0,c.oo)(r)},children:o})})};const u=l;u.Title=a,u.Link=i,u.Text=s,u.Tag=p;var b=u},59669:function(e,r,o){o.d(r,{I:function(){return t}});var n=o(521);const t=(0,n.rU)(((e,r)=>{let{css:o,cx:n,token:t,responsive:l,stylish:a,prefixCls:c,isDarkMode:i}=e;const s=Array.from({length:r}).map(((e,n)=>{const t=r-n,l=.28+.5*t;return o`
        .level-${n+1} {
          display: flex;
          align-items: center;
          padding-block: 0.3rem;
          text-indent: calc(${.28+.5*r}rem - ${l}rem);

          .${c}-anchor-link-title {
            font-weight: ${r>1&&t===r?"bold":""};
          }

          &::before {
            content: '';
            width: ${l}rem;
            height: 0.25rem;
            border-radius: 2rem;
            margin-inline-end: 1rem;
            margin-inline-start: -0.8rem;
            transition: all 0.6s;
          }
        }
      `}));return{card:o`
        ${a.card}
        margin-block-start: 1rem;
        background-color: transparent !important;
        box-shadow: none !important;
      `,title:n(`.${c}-sidebar-title`,o`
          color: ${t.colorText};
          font-size: 0.9rem;
          border: none;
          margin-block-end: 1rem !important;
          text-transform: uppercase;
          font-weight: 700;
        `),anchor:n(`.${c}-sidebar-anchor`,o`
          .${c}-anchor {
            font-size: 0.9rem;

            &-ink {
              display: none !important;
            }

            .${c}-anchor-link {
              &::before {
                background-color: ${i?"#373737":"#e5e5e5"};
              }

              &-title {
                color: ${t.colorTextSecondary};
                letter-spacing: 0.5px;
                opacity: 0;
                transition: all 0.5s;
              }

              &:hover {
                &::before {
                  transform: scale(1.16);
                  background-color: ${t.colorPrimaryBorderHover} !important;
                }

                .${c}-anchor-link-title {
                  color: ${t.colorPrimaryHover};
                }
              }
            }

            .${c}-anchor-link-active {
              &::before {
                background-color: ${t.colorPrimaryBorderHover};
                transform: scale(1.16) !important;
              }

              .${c}-anchor-link-title {
                color: ${t.colorPrimaryHover};
                opacity: 1;
              }
            }

            &::before {
              border-inline-start: none !important;
            }

            &:hover {
              .${c}-anchor-link-title {
                opacity: 1;
              }
            }

            ${s}
          }
        `),link:n(`.${c}-sidebar-link`,o`
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          background-color: transparent;
          border-radius: ${t.borderRadius};
          color: ${t.colorTextSecondary};
          font-size: 0.86rem;
          margin-block-end: 0.6rem;
          padding-block: 0.1rem;
          padding-inline: 0.3rem;

          span {
            color: inherit;
          }

          &:last-child {
            margin-block-end: 0rem;
          }

          &.active {
            color: ${t.colorPrimary};
            font-weight: bold;
          }

          &:hover {
            color: ${t.colorPrimaryHover};
            text-decoration: none;
          }
        `),tag:n(`.${c}-sidebar-tag`,o`
          cursor: pointer;
          font-size: 0.8rem;
          color: ${t.colorTextSecondary};
          text-transform: capitalize;

          &.${c}-tag-checkable-checked {
            color: ${t.colorPrimary};
            background-color: ${t.colorPrimaryBg};
          }

          &:hover {
            color: ${t.colorPrimary};
            background-color: ${t.colorPrimaryBg};
          }
        `),articles:n(`.${c}-sidebar-articles`,o`
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          gap: 1rem;
          color: ${t.colorTextSecondary};
          margin-block-end: 0.6rem;
          margin-inline-start: 0.5rem;

          .title {
            font-size: 0.9rem;
          }

          & {
            .active {
              color: ${t.colorPrimary};
              font-weight: bold;
            }

            &:hover {
              color: ${t.colorPrimary};
              text-decoration: none;
            }

            &:last-child {
              margin-block-end: 0;
            }
          }
        `)}}))},51591:function(e,r,o){o.d(r,{A:function(){return l}});const n=(0,o(521).rU)((e=>{let{css:r,cx:o,token:n,responsive:t,stylish:l,prefixCls:a}=e;return{sticky:r`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: sticky;
    top: calc(${n.headerHeight}px + 20px);

    ${t({mobile:r`
        top: ${n.headerHeightMobile};
      `})}
  `}}));var t=o(74848);var l=e=>{let{children:r}=e;const{styles:o}=n();return(0,t.jsx)("aside",{children:(0,t.jsx)("div",{className:o.sticky,children:r})})}}}]);
//# sourceMappingURL=3c12cdb6324fd5ff13ffcef65ee285e45986f87d-7962d59593bf42a6a2d0.js.map