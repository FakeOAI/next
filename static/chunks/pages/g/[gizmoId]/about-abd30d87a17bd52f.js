(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[290],{75390:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return m},default:function(){return p}});var n=r(72438),i=r(79259),o=r(71909),c=r(53265),u=r(52866),s=r(16215),l=r(70079),a=r(29386),d=r(35250);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function h(e){let{data:t}=(0,o.b9)(e.gizmoId),{0:r,1:n}=(0,l.useState)(!0);return(0,d.jsxs)(d.Fragment,{children:[t&&r&&(0,d.jsx)(i.Eu,{onClose:()=>n(!1),gizmoId:e.gizmoId,creatorId:t.gizmo.author.user_id,children:(0,d.jsx)(i.Bo,{onClick:()=>{c.A.logEvent(u.M.detailClickChat,{gizmo_id:e.gizmoId}),n(!1),window.history.pushState({},"",(0,o.m_)(t))}})}),(0,l.createElement)(a.GizmoChatWithRedirect,g(g({},e),{},{key:e.gizmoId}))]})}var m=!0;function p(e){let t=(0,s.useRouter)().query.gizmoId;return"chat_page"===e.kind?(0,l.createElement)(h,g(g({},e),{},{key:t,gizmoId:t})):(0,a.default)(e)}},29386:function(e,t,r){"use strict";r.r(t),r.d(t,{GizmoChatWithRedirect:function(){return v},__N_SSP:function(){return x},default:function(){return z}});var n=r(72438),i=r(3250),o=r(85647),c=r(25643),u=r(71909),s=r(98170),l=r(79603),a=r(55269),d=r(40806),f=r(88324),g=r(24115),h=r(16215),m=r.n(h),p=r(70079),j=r(84692),O=r(35250);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var x=!0;function z(e){let t=(0,h.useRouter)().query.gizmoId;switch(e.kind){case"anon_gizmo":return(0,O.jsx)(c.X,{gizmo:e.gizmo},t);case"chat_page":return(0,p.createElement)(v,y(y({},e),{},{key:t,gizmoId:t}))}}function v(e){var t;let{data:r,error:n}=(0,u.b9)(e.gizmoId),o=(0,f.t)(),c=null===(t=(0,g.sB)("chatgpt-gizmo-allow-unpaid-users-to-interact"))||void 0===t?void 0:t.value,s=(null==o?void 0:o.canInteractWithGizmos())||c;return((0,p.useEffect)(()=>{null==r&&null!=n&&m().push((0,d.M5)(d.LT.GIZMO_NOT_FOUND))},[r,n]),null!=n&&s)?(0,O.jsx)(P,{}):!1===s?(0,O.jsx)(_,{gizmo:r}):(0,p.createElement)(i.ZP,y(y({},e),{},{key:e.gizmoId}))}function P(){return(0,O.jsx)(l.Z,{children:(0,O.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[(0,O.jsx)("div",{className:"font-bold",children:(0,O.jsx)(j.Z,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),(0,O.jsx)(j.Z,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function _(e){let{gizmo:t}=e;return(0,O.jsx)(l.Z,{children:(0,O.jsx)(s.r,{gizmo:t,children:(0,O.jsxs)("div",{className:"mt-7 flex flex-col gap-4",children:[(0,O.jsx)(o.p,{onClick:()=>(0,a.MG)(),children:(0,O.jsx)(j.Z,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),(0,O.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,O.jsx)(j.Z,{id:"gizmo.upsellSubtext",defaultMessage:"Requires ChatGPT Plus"})})]})})})}},79603:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(67081),i=r(54848),o=r(11978),c=r(16215),u=r(49641),s=r(62190),l=r(35250);function a(e){let{children:t}=e,r=(0,c.useRouter)();return(0,l.jsx)(i.Z,{mobileHeaderRightContent:null,sidebar:(0,l.jsxs)(o.ZP,{onNewThread:()=>{r.push("/")},children:[(0,l.jsx)(s.Dy,{}),(0,l.jsx)(n.Z,{activeId:void 0})]}),children:(0,l.jsx)(u.Z,{children:t})})}},75613:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/g/[gizmoId]/about",function(){return r(75390)}])}},function(e){e.O(0,[4736,2888,9774,179],function(){return e(e.s=75613)}),_N_E=e.O()}]);
//# sourceMappingURL=about-abd30d87a17bd52f.js.map