"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6992],{38417:function(t,n,e){var i=e(48538),c=e(5443),o=e(66246),a=e(651);n.Z=t=>{let{label:n,value:e,onCopied:r}=t,l=()=>{(0,i.v)(e),r()};return(0,a.jsxs)("div",{className:"flex flex-col space-y-2",children:[void 0!==n&&(0,a.jsx)("label",{className:"font-semibold",children:n}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("div",{onClick:l,className:"w-full cursor-pointer break-all rounded-lg bg-token-main-surface-tertiary px-4 py-2 font-mono text-sm text-token-text-primary",children:e}),(0,a.jsx)(c.z,{color:"ghost",onClick:l,icon:o.TIy})]})]})}},83252:function(t,n,e){e.d(n,{M:function(){return s},Z:function(){return l}});var i=e(55257),c=e(66246),o=e(82823),a=e(16645),r=e(651);function l(t){let{isFirstParty:n,src:e,alt:o,className:a}=t;return(0,r.jsx)("div",{className:a,children:null!=e?(0,r.jsx)("div",{className:"gizmo-shadow-stroke overflow-hidden rounded-full",children:(0,r.jsx)("img",{src:e,className:"h-full w-full bg-token-main-surface-secondary",alt:null!=o?o:"GPT",width:80,height:80})}):(0,r.jsx)("div",{className:"gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-token-main-surface-primary text-token-text-primary",children:n?(0,r.jsx)(i.nI,{className:"h-2/3 w-2/3"}):(0,r.jsx)(c.uy2,{className:"h-2/3 w-2/3 text-gray-400"})})})}function s(t){var n,e;let{gizmoId:i,className:c}=t,{data:s}=(0,o.b9)(i);return(0,r.jsx)(l,{src:null==s?void 0:s.gizmo.display.profile_picture_url,isFirstParty:null!==(n=null==s||null===(e=s.gizmo.tags)||void 0===e?void 0:e.includes(a.U9.FirstParty))&&void 0!==n&&n,className:c})}},83650:function(t,n,e){e.d(n,{Up:function(){return c},doConnectorOauthRedirect:function(){return o},wP:function(){return a}});var i=e(93223);async function c(t,n){let e="".concat("https://chat.openai.com","/aip/").concat(t.id,"/oauth/callback"),c=await i.Z.pluginOauthRedirect(t.id,e,n);window.location.href=c.redirect_uri}async function o(t,n){let e="".concat(window.location.origin,"/ccc/").concat(t.id,"/oauth/callback"),c=await i.Z.connectorOauthRedirect(t.id,e,n);window.location.href=c.redirect_uri}async function a(t){await i.Z.deleteUserConnectedApp(t),window.location.reload()}e(92379),e(2630),e(99642),e(6774)},2630:function(t,n,e){function i(t){var n;return n=t.domain,/^localhost:\d+$/.test(n)?!!"http://".concat(n):!!/^https?:\/\/localhost:\d+$/.test(n)&&!!n}e.d(n,{cf:function(){return i}}),e(85734),e(93223),e(59031),e(94982)},99642:function(t,n,e){e.d(n,{V:function(){return i}}),e(93223),e(59031);let i=["approvedAip"]},6774:function(t,n,e){e.d(n,{Z:function(){return i}}),e(93223),e(59031),e(92379);let i=["installedAip"]}}]);
//# sourceMappingURL=6992-1ddfc8d4e6d67797.js.map