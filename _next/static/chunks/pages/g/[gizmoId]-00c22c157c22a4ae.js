(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43,8086],{4171:function(e,t,n){"use strict";n.r(t),n.d(t,{GizmoChatWithRedirect:function(){return y},__N_SSP:function(){return z},default:function(){return b}});var r=n(94521),i=n(18),s=n(40876),o=n(82823),l=n(46868),a=n(40806),c=n(80006),u=n(44254),d=n(73570),g=n(4702),f=n(43128),x=n.n(f),h=n(92379),m=n(62984),j=n(651);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var z=!0;function b(e){let t=(0,f.useRouter)().query.gizmoId;switch(e.kind){case"anon_gizmo":return(0,j.jsx)(s.X,{gizmo:e.gizmo},t);case"chat_page":return(0,h.createElement)(y,v(v({},e),{},{key:t,gizmoId:t}))}}function y(e){let{data:t,error:n}=(0,o.b9)(e.gizmoId),r=(0,g.t)(),s=null==r?void 0:r.canInteractWithGizmos();return((0,h.useEffect)(()=>{null==t&&null!=n&&x().push((0,d.M5)(d.LT.GIZMO_NOT_FOUND))},[t,n]),null!=n&&s)?(0,j.jsx)(O,{}):!1===s?(0,j.jsx)(Z,{gizmo:t}):(0,h.createElement)(i.ZP,v(v({},e),{},{key:e.gizmoId}))}function O(){return(0,j.jsx)(a.Z,{children:(0,j.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[(0,j.jsx)("div",{className:"font-bold",children:(0,j.jsx)(m.Z,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),(0,j.jsx)(m.Z,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function Z(e){let{gizmo:t}=e;return(0,j.jsx)(a.Z,{children:(0,j.jsx)(l.r,{gizmo:t,children:(0,j.jsxs)("div",{className:"mt-7 flex flex-col gap-4",children:[(0,j.jsx)(c.p,{onClick:()=>(0,u.MG)("Gizmo page upsell button"),children:(0,j.jsx)(m.Z,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),(0,j.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,j.jsx)(m.Z,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}},40876:function(e,t,n){"use strict";n.d(t,{S:function(){return v},X:function(){return p}});var r=n(55257),i=n(82823),s=n(2915),o=n(18454),l=n(48580),a=n(19841),c=n(40319),u=n.n(c),d=n(92379),g=n(62984),f=n(5443),x=n(46868),h=n(69817),m=n(80006),j=n(651);function p(e){var t;let{gizmo:n}=e,r=(0,i.i6)(n),{0:a,1:c}=(0,d.useState)(!1),u=null===(t=(0,l.sB)("1855896025"))||void 0===t?void 0:t.value,f=(0,o.b)();return(0,j.jsxs)("div",{className:"flex h-full flex-col",children:[(0,j.jsx)(s.N,{gizmo:n}),(0,j.jsx)(v,{redirectUrl:r}),(0,j.jsxs)("div",{className:"flex grow flex-col items-center justify-center p-2",children:[(0,j.jsx)(x.r,{gizmo:n,isAnon:!0,children:(0,j.jsxs)("div",{className:"mt-7 flex flex-col items-center gap-4",children:[(0,j.jsx)(m.p,{onClick:()=>f({callbackUrl:r}),children:(0,j.jsx)(g.Z,{id:"gizmo.anonLandingPage.login",defaultMessage:"Sign up to chat"})}),(0,j.jsxs)("div",{className:"flex gap-2 whitespace-nowrap text-sm text-token-text-tertiary",children:[(0,j.jsx)("div",{children:(0,j.jsx)(g.Z,{id:"gizmo.anonLandingPage.loginSubtext",defaultMessage:"Sign up or Log in to chat"})}),u&&(0,j.jsxs)(j.Fragment,{children:["|",(0,j.jsx)("div",{onClick:()=>c(!0),className:"cursor-pointer",children:(0,j.jsx)(g.Z,{id:"gizmo.anonLandingPage.report",defaultMessage:"Report illegal content"})})]})]})]})}),a&&(0,j.jsx)(h.W,{onClose:()=>c(!1),gizmoId:n.gizmo.id})]})]})}function v(e){let{redirectUrl:t,className:n}=e,r=(0,o.b)();return(0,j.jsxs)("div",{className:(0,a.default)("flex items-center justify-between px-7 py-4",n),children:[(0,j.jsx)(z,{}),(0,j.jsx)(f.z,{color:"primary",onClick:()=>r({callbackUrl:t}),children:(0,j.jsx)(g.Z,{id:"gizmo.anonLandingPage.signup",defaultMessage:"Sign up"})})]})}function z(){return(0,j.jsx)(u(),{href:"/",children:(0,j.jsx)(r.nI,{className:"h-8 w-8"})})}},69817:function(e,t,n){"use strict";n.d(t,{W:function(){return h},i:function(){return m}});var r=n(21904),i=n(82823),s=n(86021),o=n(23653),l=n(48580),a=n(92379),c=n(75172),u=n(62984),d=n(49217),g=n(7050),f=n(70604),x=n(651);function h(e){let{gizmoId:t,onClose:n}=e,{data:s}=(0,i.b9)(t),{data:l}=(0,o.sQ)(r.CD.Gizmo),a=(0,c.Z)(),u=(0,o.gm)(a,t,r.CD.Gizmo);if(null==l)return null;let d=null!=s?"Report ".concat(s.gizmo.display.name):"Report";return(0,x.jsx)(f.UM,{reasons:l.reasons,submitReport:u,title:d,onClose:n,header:l.header,subHeader:l.header_explanation})}function m(e){var t,n,r;let{gizmoId:i,clientThreadId:o,onClose:m}=e,j=(0,c.Z)(),p=null===(t=(0,l.sB)("1855896025"))||void 0===t?void 0:t.value,v=null===(n=(0,l.sB)("3376455464"))||void 0===n?void 0:n.value,z=(0,s.XK)(o),b=null===(r=(0,l.sB)("90459671"))||void 0===r?void 0:r.value,{0:y,1:O}=(0,a.useState)();return p&&v&&"gpt"!==y&&b&&null!=z?"conversation"===y?(0,x.jsx)(g.E,{serverThreadId:z,onClose:m}):(0,x.jsxs)(d.Z,{title:j.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:m,isOpen:!0,showCloseButton:!0,type:"success",children:[(0,x.jsx)(f.Rh,{header:j.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),(0,x.jsxs)(f._4,{children:[(0,x.jsx)(f.Ag,{onClick:e=>{e.preventDefault(),O("conversation")},children:(0,x.jsx)(u.Z,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),(0,x.jsx)(f.Ag,{onClick:e=>{e.preventDefault(),O("gpt")},children:(0,x.jsx)(u.Z,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]}):(0,x.jsx)(h,{gizmoId:i,onClose:m})}},40806:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(2027),i=n(1e4),s=n(59585),o=n(43128),l=n.n(o),a=n(37968),c=n(65034),u=n(73746),d=n(9085),g=n(651);function f(e){let{children:t,header:n}=e,o=(0,u.Q)();return(0,g.jsxs)(i.Z,{mobileHeaderRightContent:null,sidebar:(0,g.jsxs)(s.ZP,{navHeader:o?(0,g.jsx)(a.$,{className:"flex h-14 items-center",onNewThread:()=>l().push("/"),historyDisabled:!1}):null,children:[(0,g.jsx)(d.Dy,{}),(0,g.jsx)(r.Z,{activeId:void 0})]}),children:[n,(0,g.jsx)(c.Z,{children:t})]})}},33493:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/g/[gizmoId]",function(){return n(4171)}])}},function(e){e.O(0,[3391,7349,9207,6271,4984,6441,8868,5257,7639,6797,5943,5815,5904,488,2888,9774,179],function(){return e(e.s=33493)}),_N_E=e.O()}]);
//# sourceMappingURL=[gizmoId]-00c22c157c22a4ae.js.map