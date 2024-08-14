"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{60804:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var s=a(98601),i=a(17247),l=a(28146),n=a(93951),r=a(92745),o=a(15913),c=a(92379),d=a(99976),u=a(61619),x=a(82363),f=a(19841),m=a(88600),p=a(21389),j=a(62984),h=a(15478),y=a(97537),b=a(73062),v=a(30853),g=a(17004),w=a(44442),k=a(75290),N=a(81652),z=a(59122),E=a(1313),O=a(94925),M=a(57575),Z=a(44851),A=a(93561),_=a(88521),C=a(17007),D=a(651);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach(function(t){(0,s.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function L(e){let{visualization:t,clientThreadId:a,expanded:s=!1}=e;return"chart"===t.type?null==t.fallback_image?(x.U.addError("Chart visualizations require a fallback image message"),null):t.fallback_to_image?null==t.fallback_image?(x.U.addError("No fallback image message provided for fallback chart"),null):(0,D.jsx)(W,{visualization:t,expanded:s}):(0,D.jsx)(R,{visualization:t,clientThreadId:a,expanded:s}):"table"===t.type?(0,D.jsx)(P,{visualization:t,expanded:s}):(x.U.addError("Unsupported visualization type",t.type),null)}function P(e){let t,{visualization:a,expanded:s}=e,i=(0,g.E)(),l=i&&!s,{isLoading:n,data:r,isError:o}=(0,_.CJ)(a),{0:d,1:u}=(0,c.useState)(),x=(0,c.useCallback)(()=>{r&&(0,C.W)(r.download_url)},[r]),{0:f,1:m}=(0,c.useState)(0),{0:p,1:j}=(0,c.useState)(0),h=(0,c.useRef)(null);r&&(t=Array.isArray(r.content)?r.content.find(e=>e.name===d)??r.content[0]:r.content);let v=()=>{h.current&&j(h.current.offsetWidth)};return((0,c.useEffect)(()=>(v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)),[]),(0,c.useEffect)(()=>{let e=()=>{m(window.innerHeight-48)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),o)?(0,D.jsx)(q,{fileName:a.title}):(0,D.jsx)(Q,{ref:h,focusObject:{type:N.z.ADAVisualization,visualization:a},title:(0,D.jsxs)(D.Fragment,{children:[a.title,!l&&Array.isArray(r?.content)&&(0,D.jsxs)(b.Z.Root,{defaultValue:d,onValueChange:e=>{u(e)},children:[(0,D.jsxs)(b.Z.Trigger,{className:"m-0 h-4 bg-transparent p-1 text-xs font-semibold",children:[d??r.content[0].name,(0,D.jsx)(b.Z.Icon,{})]}),(0,D.jsx)(b.Z.Portal,{children:(0,D.jsx)(b.Z.Content,{children:r.content.map(e=>(0,D.jsx)(b.Z.Item,{className:"text-xs font-semibold",value:e.name??"",children:e.name},e.name))})})]})]}),onDownload:x,expanded:s,children:n||null==t?(0,D.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,D.jsx)(y.Z,{})}):(0,D.jsx)("div",{className:"border-t border-token-border-light",children:(0,D.jsx)(O.Z,{table:I(I({},t),{},{name:a.title,sheetName:d}),height:s?f:300,width:p,isInFocusedView:i})})})}function T(e){let{showStatic:t,setShowStatic:a}=e;return(0,D.jsx)(v.u,{side:"top",sideOffset:4,label:t?(0,D.jsx)(j.Z,{id:"o0thnT",defaultMessage:"Switch to interactive chart"}):(0,D.jsx)(j.Z,{id:"cigiQO",defaultMessage:"Switch to static chart"}),children:(0,D.jsx)("button",{className:"flex",onClick:()=>{a(!t)},children:t?(0,D.jsx)(l.aoh,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"}):(0,D.jsx)(l.D2w,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"})})})}function V(e){let{type:t}=e;return(0,D.jsx)(F,{children:"chart"===t?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(j.Z,{id:"XBhWwK",defaultMessage:"Now interactive! (Beta)"})," ",(0,D.jsx)(l.D2w,{className:"icon-md"})]}):(0,D.jsx)(j.Z,{id:"N0TMRs",defaultMessage:"Now interactive!"})})}let F=h.Z.div`flex flex-shrink-0 cursor-pointer flex-nowrap items-center gap-1 rounded-lg bg-blue-selection/[0.1] py-1 pl-2 pr-1.5 text-xs font-semibold text-blue-selection`;function R(e){let{visualization:t,clientThreadId:a,expanded:s}=e,{isLoading:i,data:l,isError:n}=(0,_.VX)(t),o=(0,c.useRef)(null),x=(0,_.KW)(),{0:f,1:m}=(0,c.useState)(!x),p=(0,c.useCallback)(async()=>{if(f&&t.fallback_image)d.A.logEvent(u.M.adaDownloadedStaticChart),await (0,C.d)(t.fallback_image);else if(o.current){let e=o.current.getBase64Image();e&&(d.A.logEvent(u.M.adaDownloadedInteractiveChart),(0,C.W)(e,`${t.title}.png`))}},[t.fallback_image,f,o,t.title]),{0:j,1:h}=(0,c.useState)(void 0),b=(0,r.XK)(a),v=function(e){let t=(0,c.useRef)(!1);return()=>{t.current||(e(),t.current=!0)}}(()=>{d.A.logEvent(u.M.adaToggledInteractiveChart,{conversationId:b})});return((0,c.useEffect)(()=>{d.A.logEvent(u.M.adaInteractiveChartShown)},[]),(0,c.useEffect)(()=>{if(l&&l.content!==j){let{chart_type:e,datasets:t,labels:a}=l.content,s=l.content;s.datasets=t.map((t,a)=>{let s=(0,Z.i)(e,t,a);return I(I({},t),{},{colors:s})}),s.labels=Array.isArray(a)?a:[a],h(s)}},[j,l]),n)?(0,D.jsx)(q,{fileName:t.title}):(0,D.jsx)(Q,{focusObject:{type:N.z.ADAVisualization,visualization:t},title:t.title,onDownload:p,additionalActions:[(0,D.jsx)(T,{showStatic:f,setShowStatic:e=>{v(),m(e)}},0),(0,D.jsx)(M.t,{chartData:j,setChartData:h},1)],expanded:s,children:i||null==j?(0,D.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,D.jsx)(y.Z,{})}):f&&t.fallback_image?(0,D.jsx)(z.Z,{jupyterMessage:t.fallback_image}):(0,D.jsx)(E.Z,{ref:o,chart:j})})}function W(e){let{visualization:t,expanded:a}=e,{0:s,1:l}=(0,c.useState)(!1),n=(0,_.BR)(),r=(0,c.useCallback)(async()=>{t.fallback_image&&await (0,C.d)(t.fallback_image)},[t.fallback_image]);return null==t.fallback_image?null:(0,D.jsx)(Q,{focusObject:{type:N.z.ADAVisualization,visualization:t},title:t.title,onDownload:r,expanded:a,children:(0,D.jsx)("div",{className:(0,f.default)("h-full w-full",a&&"cursor-pointer items-center justify-center"),onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:(0,D.jsxs)("div",{className:(0,f.default)("relative flex h-full cursor-pointer items-center justify-center",!a&&"w-full"),children:[(0,D.jsx)(z.Z,{jupyterMessage:t.fallback_image}),n&&(0,D.jsx)(i.$,{isHovered:s})]})})})}let Q=c.forwardRef((e,t)=>{let{focusObject:a,title:s="",onDownload:i=()=>{},additionalActions:r=[],expanded:c=!1,children:d}=e,u=(0,g.E)(),x=(0,k.rE)(),h=x&&x.type===N.z.ADAVisualization&&x.type===a.type&&x.visualization.file_id===a.visualization.file_id&&a.visualization.title===x.visualization.title,y=(0,n.t)(),b=a.visualization.type,[z,E]=(0,_.qc)(b,y?.id??""),O=(0,o.BL)(),M=a.visualization.type,{sourceUrl:Z,contextConnectorName:C}=(0,A.W)(a.visualization);if(u&&!c||O)return(0,D.jsx)(X,{focusObject:a,title:s,type:M,isFocused:h??!1,disabled:O});let S=(0,D.jsxs)(D.Fragment,{children:[r.map((e,t)=>(0,D.jsx)("div",{className:"flex p-0",children:e},t)),Z&&C&&(0,D.jsx)(v.u,{side:"top",sideOffset:4,label:(0,D.jsx)(j.Z,{id:"KG958Q",defaultMessage:"Open in {contextConnectorName}",values:{contextConnectorName:C}}),children:(0,D.jsx)("a",{className:"flex items-center text-xs",href:Z,target:"_blank",children:(0,D.jsx)(l.Pfi,{className:(0,f.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),i&&(0,D.jsx)(v.u,{side:"top",sideOffset:4,label:(0,D.jsx)(j.Z,{id:"X0SJIT",defaultMessage:"Download {type}",values:{type:M}}),children:(0,D.jsx)("button",{onClick:i,className:"flex items-center text-xs",children:(0,D.jsx)(l._8t,{className:(0,f.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),(0,D.jsx)(v.u,{side:"top",sideOffset:4,label:h?(0,D.jsx)(j.Z,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:M}}):(0,D.jsx)(j.Z,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:M}}),children:(0,D.jsx)("button",{onClick:()=>{B(h??!1,a)},className:"flex items-center text-xs",children:h?(0,D.jsx)(l.W5x,{className:(0,f.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")}):(0,D.jsx)(l.Qq,{className:(0,f.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})})]});return(0,D.jsxs)(m.E.div,I(I({className:(0,f.default)("relative overflow-hidden border-token-border-light text-token-text-primary",!c&&"rounded-2xl border"),ref:t,onMouseEnter:()=>{E(!0)}},w.e),{},{children:[(0,D.jsxs)("div",{className:(0,f.default)("flex items-center justify-between gap-2 bg-token-main-surface-primary px-4 py-3"),children:[(0,D.jsx)("span",{className:"flex-grow items-center truncate font-semibold capitalize",children:s}),(0,D.jsxs)("div",{className:"flex items-center gap-3",children:[(0,D.jsx)(p.M,{children:!z&&(0,D.jsx)(m.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",ease:"easeInOut",duration:.2},className:"absolute right-3 top-3",children:(0,D.jsx)(V,{type:M})})}),z&&S]})]}),(0,D.jsx)("div",{className:"flex items-center justify-center bg-token-main-surface-primary",style:{height:c?"calc(100vh - 48px)":`${"table"===M?300:350}px`},children:d})]}))});function X(e){let{focusObject:t,title:a="",type:s,isFocused:i,disabled:n=!1}=e,{0:r,1:o}=(0,c.useState)(!1),d="chart"===s?l.X5Q:l.tXQ,u=i||r||n;return(0,D.jsx)(m.E.div,I(I({className:(0,f.default)("relative w-52 overflow-hidden rounded-2xl border",i&&"border-blue-selection/[.3]",u?"text-token-text-primary":"text-token-text-secondary",!n&&"cursor-pointer"),onMouseEnter:()=>{n||o(!0)},onMouseLeave:()=>{n||o(!1)},onClick:()=>{n||B(i,t)}},w.e),{},{children:(0,D.jsxs)("div",{className:"flex justify-between bg-token-main-surface-primary px-3 py-2",children:[(0,D.jsxs)("div",{className:"my-0 flex w-full items-center gap-2 overflow-hidden text-sm font-semibold capitalize",children:[(0,D.jsx)(d,{className:(0,f.default)("icon-lg flex-shrink-0",u?"text-brand-green-800":"text-token-text-quaternary")}),(0,D.jsx)("span",{className:"flex-grow truncate",children:a})]}),r&&(0,D.jsx)("div",{className:"flex items-center gap-2",children:(0,D.jsx)(v.u,{side:"top",sideOffset:4,label:i?(0,D.jsx)(j.Z,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:s}}):(0,D.jsx)(j.Z,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:s}}),children:i?(0,D.jsx)(l.W5x,{className:"icon-md icon-md text-token-text-secondary"}):(0,D.jsx)(l.Qq,{className:(0,f.default)("icon-md text-token-text-secondary")})})})]})}))}function q(e){let{fileName:t=""}=e;return(0,D.jsx)("div",{className:"w-full rounded-2xl border border-red-600 p-3",children:(0,D.jsxs)("div",{className:"my-0 flex items-center justify-between",children:[(0,D.jsx)("div",{className:"flex items-center gap-2",children:(0,D.jsx)("p",{className:"m-0 p-0 text-lg font-semibold capitalize",children:t})}),(0,D.jsx)("span",{className:"text-sm text-red-600",children:(0,D.jsx)(j.Z,{id:"ADAVisualzationComponent.unableToLoadOutput",defaultMessage:"Unable to display visualization"})})]})})}Q.displayName="ADAVisualizationWrapper";let B=(e,t)=>{d.A.logEvent(u.M.adaFocusModeToggled),e?k.RT.close():k.RT.setFocusedObject(t)}}}]);
//# sourceMappingURL=804.707a2288dc2fa7cf.js.map