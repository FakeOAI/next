"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4381,8539],{95638:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(24421),i=a(67629),s=a(51516);function l(e,t){(0,s.Z)(2,arguments);var a=(0,i.Z)(e),l=(0,i.Z)(t);return Math.round((a.getTime()-(0,n.Z)(a)-(l.getTime()-(0,n.Z)(l)))/864e5)}},26430:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(28734),i=a(51516);function s(e,t){return(0,i.Z)(2,arguments),(0,n.Z)(e).getTime()-(0,n.Z)(t).getTime()}},21508:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(28734),i=a(51516);function s(e){(0,i.Z)(1,arguments);var t=(0,n.Z)(e);return t.setHours(23,59,59,999),t}},60804:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var n,i=a(2346),s=a(98601),l=a(17247),r=a(47563),o=a(93951),c=a(92745),d=a(15913),u=a(92379),f=a(99976),x=a(61619),m=a(82363),p=a(19841),j=a(88600),h=a(21389),v=a(62984),b=a(15478),g=a(97537),y=a(73062),w=a(30853),k=a(3430),N=a(17004),O=a(39995),Z=a(59122),z=a(1313),E=a(94925),A=a(57575),M=a(44851),D=a(93561),I=a(88521),_=a(17007),C=a(651);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach(function(t){(0,s.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function T(e){let{visualization:t,clientThreadId:a,expanded:n=!1}=e;return"chart"===t.type?null==t.fallback_image?(m.U.addError("Chart visualizations require a fallback image message"),null):t.fallback_to_image?null==t.fallback_image?(m.U.addError("No fallback image message provided for fallback chart"),null):(0,C.jsx)(W,{visualization:t,expanded:n}):(0,C.jsx)(R,{visualization:t,clientThreadId:a,expanded:n}):"table"===t.type?(0,C.jsx)(V,{visualization:t,expanded:n}):(m.U.addError("Unsupported visualization type",t.type),null)}function V(e){let t,{visualization:a,expanded:n}=e,i=(0,N.E)(),s=i&&!n,{isLoading:l,data:r,isError:o}=(0,I.CJ)(a),{0:c,1:d}=(0,u.useState)(),f=(0,u.useCallback)(()=>{r&&(0,_.W)(r.download_url)},[r]),{0:x,1:m}=(0,u.useState)(0),{0:p,1:j}=(0,u.useState)(0),h=(0,u.useRef)(null);if(r){if(Array.isArray(r.content)){var v;t=null!==(v=r.content.find(e=>e.name===c))&&void 0!==v?v:r.content[0]}else t=r.content}let b=()=>{h.current&&j(h.current.offsetWidth)};return((0,u.useEffect)(()=>(b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)),[]),(0,u.useEffect)(()=>{let e=()=>{m(window.innerHeight-48)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),o)?(0,C.jsx)(U,{fileName:a.title}):(0,C.jsx)(q,{ref:h,focusObject:{type:O.zG.ADAVisualization,visualization:a},title:(0,C.jsxs)(C.Fragment,{children:[a.title,!s&&Array.isArray(null==r?void 0:r.content)&&(0,C.jsxs)(y.Z.Root,{defaultValue:c,onValueChange:e=>{d(e)},children:[(0,C.jsxs)(y.Z.Trigger,{className:"m-0 h-4 bg-transparent p-1 text-xs font-semibold",children:[null!=c?c:r.content[0].name,(0,C.jsx)(y.Z.Icon,{})]}),(0,C.jsx)(y.Z.Portal,{children:(0,C.jsx)(y.Z.Content,{children:r.content.map(e=>{var t;return(0,C.jsx)(y.Z.Item,{className:"text-xs font-semibold",value:null!==(t=e.name)&&void 0!==t?t:"",children:e.name},e.name)})})})]})]}),onDownload:f,expanded:n,children:l||null==t?(0,C.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,C.jsx)(g.Z,{})}):(0,C.jsx)("div",{className:"border-t border-token-border-light",children:(0,C.jsx)(E.Z,{table:S(S({},t),{},{name:a.title,sheetName:c}),height:n?x:300,width:p,isInFocusedView:i})})})}function F(e){let{showStatic:t,setShowStatic:a}=e;return(0,C.jsx)(w.u,{side:"top",sideOffset:4,label:t?(0,C.jsx)(v.Z,{id:"o0thnT",defaultMessage:"Switch to interactive chart"}):(0,C.jsx)(v.Z,{id:"cigiQO",defaultMessage:"Switch to static chart"}),children:(0,C.jsx)("button",{className:"flex",onClick:()=>{a(!t)},children:t?(0,C.jsx)(r.aoh,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"}):(0,C.jsx)(r.D2w,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"})})})}function G(e){let{type:t}=e;return(0,C.jsx)(L,{children:"chart"===t?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(v.Z,{id:"XBhWwK",defaultMessage:"Now interactive! (Beta)"})," ",(0,C.jsx)(r.D2w,{className:"icon-md"})]}):(0,C.jsx)(v.Z,{id:"N0TMRs",defaultMessage:"Now interactive!"})})}let L=b.Z.div(n||(n=(0,i.Z)(["flex flex-shrink-0 cursor-pointer flex-nowrap items-center gap-1 rounded-lg bg-blue-selection/[0.1] py-1 pl-2 pr-1.5 text-xs font-semibold text-blue-selection"])));function R(e){let{visualization:t,clientThreadId:a,expanded:n}=e,{isLoading:i,data:s,isError:l}=(0,I.VX)(t),r=(0,u.useRef)(null),{0:o,1:d}=(0,u.useState)(!1),m=(0,u.useCallback)(async()=>{if(o&&t.fallback_image)f.A.logEvent(x.M.adaDownloadedStaticChart),await (0,_.d)(t.fallback_image);else if(r.current){let e=r.current.getBase64Image();e&&(f.A.logEvent(x.M.adaDownloadedInteractiveChart),(0,_.W)(e,"".concat(t.title,".png")))}},[t.fallback_image,o,r,t.title]),{0:p,1:j}=(0,u.useState)(void 0),h=(0,c.XK)(a),v=function(e){let t=(0,u.useRef)(!1);return()=>{t.current||(e(),t.current=!0)}}(()=>{f.A.logEvent(x.M.adaToggledInteractiveChart,{conversationId:h})});return((0,u.useEffect)(()=>{f.A.logEvent(x.M.adaInteractiveChartShown)},[]),(0,u.useEffect)(()=>{if(s&&s.content!==p){let{chart_type:e,datasets:t,labels:a}=s.content,n=s.content;n.datasets=t.map((t,a)=>{let n=(0,M.i)(e,t,a);return S(S({},t),{},{colors:n})}),n.labels=Array.isArray(a)?a:[a],j(n)}},[p,s]),l)?(0,C.jsx)(U,{fileName:t.title}):(0,C.jsx)(q,{focusObject:{type:O.zG.ADAVisualization,visualization:t},title:t.title,onDownload:m,additionalActions:[(0,C.jsx)(F,{showStatic:o,setShowStatic:e=>{v(),d(e)}},0),(0,C.jsx)(A.t,{chartData:p,setChartData:j},1)],expanded:n,children:i||null==p?(0,C.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,C.jsx)(g.Z,{})}):o&&t.fallback_image?(0,C.jsx)(Z.Z,{jupyterMessage:t.fallback_image}):(0,C.jsx)(z.Z,{ref:r,chart:p})})}function W(e){let{visualization:t,expanded:a}=e,{0:n,1:i}=(0,u.useState)(!1),s=(0,I.BR)(),r=(0,u.useCallback)(async()=>{t.fallback_image&&await (0,_.d)(t.fallback_image)},[t.fallback_image]);return null==t.fallback_image?null:(0,C.jsx)(q,{focusObject:{type:O.zG.ADAVisualization,visualization:t},title:t.title,onDownload:r,expanded:a,children:(0,C.jsx)("div",{className:(0,p.default)("h-full w-full",a&&"cursor-pointer items-center justify-center"),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:(0,C.jsxs)("div",{className:(0,p.default)("relative flex h-full cursor-pointer items-center justify-center",!a&&"w-full"),children:[(0,C.jsx)(Z.Z,{jupyterMessage:t.fallback_image}),s&&(0,C.jsx)(l.$,{isHovered:n})]})})})}let q=u.forwardRef((e,t)=>{var a;let{focusObject:n,title:i="",onDownload:s=()=>{},additionalActions:l=[],expanded:c=!1,children:u}=e,f=(0,N.E)(),x=(0,O.rE)(),m=x&&x.type===O.zG.ADAVisualization&&x.type===n.type&&x.visualization.file_id===n.visualization.file_id&&n.visualization.title===x.visualization.title,b=(0,o.t)(),g=n.visualization.type,[y,Z]=(0,I.qc)(g,null!==(a=null==b?void 0:b.id)&&void 0!==a?a:""),z=(0,d.BL)(),E=n.visualization.type,{sourceUrl:A,contextConnectorName:M}=(0,D.W)(n.visualization);if(f&&!c||z)return(0,C.jsx)(Q,{focusObject:n,title:i,type:E,isFocused:null!=m&&m,disabled:z});let _=(0,C.jsxs)(C.Fragment,{children:[l.map((e,t)=>(0,C.jsx)("div",{className:"flex p-0",children:e},t)),A&&M&&(0,C.jsx)(w.u,{side:"top",sideOffset:4,label:(0,C.jsx)(v.Z,{id:"KG958Q",defaultMessage:"Open in {contextConnectorName}",values:{contextConnectorName:M}}),children:(0,C.jsx)("a",{className:"flex items-center text-xs",href:A,target:"_blank",children:(0,C.jsx)(r.Pfi,{className:(0,p.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),s&&(0,C.jsx)(w.u,{side:"top",sideOffset:4,label:(0,C.jsx)(v.Z,{id:"X0SJIT",defaultMessage:"Download {type}",values:{type:E}}),children:(0,C.jsx)("button",{onClick:s,className:"flex items-center text-xs",children:(0,C.jsx)(r._8t,{className:(0,p.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),(0,C.jsx)(w.u,{side:"top",sideOffset:4,label:m?(0,C.jsx)(v.Z,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:E}}):(0,C.jsx)(v.Z,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:E}}),children:(0,C.jsx)("button",{onClick:()=>{X(null!=m&&m,n)},className:"flex items-center text-xs",children:m?(0,C.jsx)(r.W5x,{className:(0,p.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")}):(0,C.jsx)(r.Qq,{className:(0,p.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})})]});return(0,C.jsxs)(j.E.div,S(S({className:(0,p.default)("relative overflow-hidden border-token-border-light text-token-text-primary",!c&&"rounded-2xl border"),ref:t,onMouseEnter:()=>{Z(!0)}},k.ee),{},{children:[(0,C.jsxs)("div",{className:(0,p.default)("flex items-center justify-between gap-2 bg-token-main-surface-primary px-4 py-3"),children:[(0,C.jsx)("span",{className:"flex-grow items-center truncate font-semibold capitalize",children:i}),(0,C.jsxs)("div",{className:"flex items-center gap-3",children:[(0,C.jsx)(h.M,{children:!y&&(0,C.jsx)(j.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",ease:"easeInOut",duration:.2},className:"absolute right-3 top-3",children:(0,C.jsx)(G,{type:E})})}),y&&_]})]}),(0,C.jsx)("div",{className:"flex items-center justify-center bg-token-main-surface-primary",style:{height:c?"calc(100vh - 48px)":"".concat("table"===E?300:350,"px")},children:u})]}))});function Q(e){let{focusObject:t,title:a="",type:n,isFocused:i,disabled:s=!1}=e,{0:l,1:o}=(0,u.useState)(!1),c="chart"===n?r.X5Q:r.tXQ,d=i||l||s;return(0,C.jsx)(j.E.div,S(S({className:(0,p.default)("relative w-52 overflow-hidden rounded-2xl border",i&&"border-blue-selection/[.3]",d?"text-token-text-primary":"text-token-text-secondary",!s&&"cursor-pointer"),onMouseEnter:()=>{s||o(!0)},onMouseLeave:()=>{s||o(!1)},onClick:()=>{s||X(i,t)}},k.ee),{},{children:(0,C.jsxs)("div",{className:"flex justify-between bg-token-main-surface-primary px-3 py-2",children:[(0,C.jsxs)("div",{className:"my-0 flex w-full items-center gap-2 overflow-hidden text-sm font-semibold capitalize",children:[(0,C.jsx)(c,{className:(0,p.default)("icon-lg flex-shrink-0",d?"text-brand-green-800":"text-token-text-quaternary")}),(0,C.jsx)("span",{className:"flex-grow truncate",children:a})]}),l&&(0,C.jsx)("div",{className:"flex items-center gap-2",children:(0,C.jsx)(w.u,{side:"top",sideOffset:4,label:i?(0,C.jsx)(v.Z,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:n}}):(0,C.jsx)(v.Z,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:n}}),children:i?(0,C.jsx)(r.W5x,{className:"icon-md icon-md text-token-text-secondary"}):(0,C.jsx)(r.Qq,{className:(0,p.default)("icon-md text-token-text-secondary")})})})]})}))}function U(e){let{fileName:t=""}=e;return(0,C.jsx)("div",{className:"w-full rounded-2xl border border-red-600 p-3",children:(0,C.jsxs)("div",{className:"my-0 flex items-center justify-between",children:[(0,C.jsx)("div",{className:"flex items-center gap-2",children:(0,C.jsx)("p",{className:"m-0 p-0 text-lg font-semibold capitalize",children:t})}),(0,C.jsx)("span",{className:"text-sm text-red-600",children:(0,C.jsx)(v.Z,{id:"ADAVisualzationComponent.unableToLoadOutput",defaultMessage:"Unable to display visualization"})})]})})}q.displayName="ADAVisualizationWrapper";let X=(e,t)=>{f.A.logEvent(x.M.adaFocusModeToggled),e?O.RT.close():O.RT.setFocusedObject(t)}},3430:function(e,t,a){a.d(t,{Jw:function(){return f},ZP:function(){return m},ee:function(){return x}});var n=a(98601),i=a(32242),s=a(21389),l=a(88600),r=a(75079),o=a(17004),c=a(651);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}let f=450,x={transition:{type:"spring",stiffness:300,damping:30,mass:1},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}};function m(e){let{children:t,clientThreadId:a,isOpen:n,onClose:d}=e;return(0,c.jsx)(s.M,{children:n&&(0,c.jsx)(i.f,{children:(0,c.jsx)(o.P.Provider,{value:{isEmbeddedInFocusedView:!0},children:(0,c.jsxs)("div",{className:"absolute inset-0 flex flex-col",children:[(0,c.jsx)(l.E.div,u({className:"h-full w-full bg-token-main-surface-secondary"},x)),(0,c.jsxs)("div",{className:"absolute inset-0 flex",children:[(0,c.jsx)("div",{className:"flex-grow overflow-auto",children:t}),(0,c.jsx)(l.E.div,u(u({className:"relative shrink-0 border-l border-token-border-medium bg-token-main-surface-primary",style:{width:f}},x),{},{children:(0,c.jsx)("div",{className:"h-[100vh] pb-4",children:(0,c.jsx)(r.Z,{clientThreadId:a,hideHeader:!0,hideFooter:!0,hideToolsOverlay:!0,messagesVerticalAlign:"bottom"},a)})}))]})]})})})})}},39995:function(e,t,a){a.d(t,{RT:function(){return p},qN:function(){return j},rE:function(){return m},zG:function(){return f}});var n,i=a(38482),s=a.n(i),l=a(92379),r=a(68810),o=a(3430),c=a(651);let d=s()(()=>a.e(2123).then(a.bind(a,32123)),{loadableGenerated:{webpack:()=>[32123]}}),u=s()(()=>Promise.all([a.e(8690),a.e(1085)]).then(a.bind(a,41085)).then(e=>e.ImageEditor),{loadableGenerated:{webpack:()=>[41085]}}),f=((n={})[n.ADAVisualization=0]="ADAVisualization",n[n.Image=1]="Image",n),x=(0,r.Ue)(()=>({focusedObject:null}));function m(){return x(e=>e.focusedObject)}let p={setFocusedObject:e=>{x.setState({focusedObject:e})},close(){x.setState({focusedObject:null})}};function j(e){let t,{clientThreadId:a}=e,n=m();return(0,l.useEffect)(()=>{p.close()},[a]),(null==n?void 0:n.type)===f.ADAVisualization?t=(0,c.jsx)(d,{clientThreadId:a,visualization:n.visualization}):(null==n?void 0:n.type)===f.Image&&(t=(0,c.jsx)(u,{clientThreadId:a,messageId:n.messageId,image:n.image,allImages:n.allImages},n.image.asset_pointer)),(0,c.jsx)(o.ZP,{clientThreadId:a,isOpen:null!=n,onClose:p.close,children:t})}}}]);
//# sourceMappingURL=4381.2904719b2f200308.js.map