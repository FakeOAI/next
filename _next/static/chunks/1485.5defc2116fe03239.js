"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1485],{51485:function(e,t,r){r.r(t),r.d(t,{TextMessageEditor:function(){return C}});var n,a=r(98601),o=r(52088),c=r(22433),s=r(2346),l=r(93866),i=r(15913),d=r(99976),u=r(61619),f=r(92379),p=r(62984),b=r(15478),v=r(16757),g=r(92745),j=r(11550),O=r(19841),h=r(651);let m=["className"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let w=(0,f.forwardRef)(function(e,t){let{className:r}=e,n=(0,o.Z)(e,m);return(0,h.jsxs)("div",{className:"grid",children:[(0,h.jsx)("textarea",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({className:(0,O.default)("col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden p-0",r),ref:t},n)),(0,h.jsxs)("span",{className:"invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-0",children:[e.value," "]})]})});var x=r(45027);function P(e){let{initialText:t,clientThreadId:r,currentLeaf:n,onChangeItemInView:a,onExitEdit:o,onRequestCompletion:c,disabled:s,attachments:b}=e,O=(0,f.useId)(),m="".concat(n,"-").concat(O),{0:y,1:P}=(0,f.useState)(null!=t?t:""),k=(0,f.useRef)(null),N=(0,i.BL)(),C=(0,f.useCallback)(e=>{P(e.currentTarget.value)},[]),M=(0,f.useCallback)(()=>{c({type:v.Os.Next,promptId:m,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:g.iN.getConversationMode(r)},updateTree:()=>{g.tQ.updateTree(r,e=>{let t=e.getParentId(n);e.addNode(m,y,t,v.uU.User,void 0,b?{attachments:b}:void 0)}),a(m)}}),o(),d.A.logEvent(u.M.changeNode,{intent:"edit_save"})},[b,r,n,m,y,a,c,o]),D=(0,f.useCallback)(()=>{a(n),d.A.logEvent(u.M.changeNode,{intent:"edit_cancel"}),o(),d.A.logEvent(u.M.cancelEditPrompt,{threadId:g.tQ.getServerThreadId(r)})},[n,a,o,r]);(0,f.useEffect)(()=>{let e=k.current;if(e){e.focus();let t=e.value.length;e.setSelectionRange(t,t)}},[]),(0,f.useEffect)(()=>{let e=k.current,t=e=>{"Enter"===e.key&&e.metaKey?M():"Escape"===e.key&&D()};return e&&e.addEventListener("keydown",t),()=>{e&&e.removeEventListener("keydown",t)}},[D,M]);let S=b&&b.length>0&&(0,h.jsx)(E,{children:b.map(e=>(0,h.jsx)(x.Z,{width:N?"normal":"wide",file:e.name,contextConnectorInfo:(0,l.xA)(e.context_connector_info)},e.id))}),Z=(0,h.jsx)("div",{className:"m-2 max-h-[25dvh] overflow-auto",children:(0,h.jsx)(w,{ref:k,value:y,onChange:C,className:"m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0"})});return(0,h.jsxs)("div",{className:"rounded-3xl bg-token-main-surface-tertiary px-3 py-3",children:[S,Z,(0,h.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,h.jsx)(j.z,{as:"button",color:"secondary",onClick:D,children:(0,h.jsx)(p.Z,{id:"D9gbPp",defaultMessage:"Cancel"})}),(0,h.jsx)(j.z,{as:"button",onClick:M,disabled:s,children:(0,h.jsx)(p.Z,{id:"KGxIJG",defaultMessage:"Send"})})]})]})}let E=b.Z.div(n||(n=(0,s.Z)(["flex gap-2 flex-wrap"]))),k=["message"];function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function C(e){var t;let{message:r}=e,n=(0,o.Z)(e,k);return(0,h.jsx)(P,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({currentLeaf:r.nodeId,initialText:(0,c.RR)(r.message),attachments:null===(t=r.message.metadata)||void 0===t?void 0:t.attachments},n))}}}]);
//# sourceMappingURL=1485.5defc2116fe03239.js.map