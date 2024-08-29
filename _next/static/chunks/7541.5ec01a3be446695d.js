"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7541],{39358:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(98601),s=n(92379),r=n(47584),l=n(75325),o=n(15478),i=n(15174),c=n(30853),d=n(11433),u=n(651);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let p=(0,r.vU)({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function m(e){let{buttonText:t,shouldChangeText:n=!0,iconClassName:a="icon-sm",onCopy:r,className:o}=e,{0:f,1:m}=(0,s.useState)(!1),b=(0,i.Z)(),j=(0,s.useCallback)(e=>{e.stopPropagation(),r(),m(!0),setTimeout(()=>{b()&&m(!1)},2e3)},[b,r]),g=t;return n&&f?g=(0,u.jsx)(l.Z,x({},p.copied)):!0===t&&(g=(0,u.jsx)(l.Z,x({},p.copy))),(0,u.jsxs)(u.Fragment,{children:[!f&&(0,u.jsx)(c.u,{label:(0,u.jsx)(l.Z,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:(0,u.jsxs)(h,{onClick:j,className:o,children:[(0,u.jsx)(d.TIy,{className:a}),g]})}),f&&(0,u.jsxs)(h,{className:o,children:[(0,u.jsx)(d.$As,{className:a}),g]})]})}let h=o.Z.button`flex gap-1 items-center`},19042:function(e,t,n){n.r(t),n.d(t,{DebugJsonViewer:function(){return D},DebugModal:function(){return C},DebugModalContents:function(){return V}});var a=n(11550),s=n(39358),r=n(30115),l=n(11433),o=n(24434),i=n(67330),c=n(91111),d=n(97193),u=n(27313),f=n(5132),x=n(30757),p=n(79746),m=n(19841),h=n(38482),b=n.n(h),j=n(92379),g=n(15478),v=n(19229),y=n(651);let w=b()(()=>Promise.all([n.e(3904),n.e(6476)]).then(n.bind(n,16476)),{ssr:!1,loadableGenerated:{webpack:()=>[16476]}});function C(e){let{threadId:t,threadUserId:n}=e;return(0,d.W6)(d.bM.isDebugModalOpen)&&(0,y.jsx)(o.Z,{isOpen:!0,onClose:()=>d.vm.toggleDebugModalOpen(),type:"success",size:"fullscreen",noPadding:!0,rootClassName:"z-50",children:(0,y.jsx)(V,{threadId:t,threadUserId:n,onClose:()=>d.vm.toggleDebugModalOpen()})})}let _=(e,t)=>{let n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),a=window.URL.createObjectURL(n),s=document.createElement("a");s.href=a,s.download=e,s.click(),window.URL.revokeObjectURL(a)},k="<|im_start|>",N="<|im_sep|>",O="<|im_end|>";function M(e){let{prompt:t}=e,n=[],a=0;for(;;){let e=t.indexOf(k,a);if(-1===e)break;let s=t.indexOf(N,e);if(-1===s)break;let r=t.indexOf(O,s),l=t.indexOf("<|fim_suffix|>",s);if(-1!==l&&(-1===r||l<r)&&(r=l),-1===r)break;let o=t.substring(e+k.length,s),i=t.substring(s+N.length,r);n.push((0,y.jsxs)("div",{children:[(0,y.jsxs)("span",{className:"font-semibold",children:["[",o,"]"]})," ",i]},e)),a=r+O.length}return n}let E=g.Z.div`mb-[-5px] px-2 pb-1 font-semibold uppercase border-b-2 ${e=>{let{$isSelected:t}=e;return t?"border-black dark:border-white":"border-transparent"}}`;function V(e){let{threadId:t,threadUserId:n,message:s,onClose:o}=e,{sessionUser:d}=(0,c.A)(),{0:p,1:h}=(0,j.useState)(s?"message":"json"),{data:b,isLoading:g,refetch:v}=(0,u.Y)({threadId:t,threadUserId:n,refetchOnMount:"always"}),w=b?.thread;if((0,j.useEffect)(()=>{h(s?"message":w?.turns.length?`turn${w?.turns.length-1}`:"thread")},[w?.turns.length,s]),!g&&!w&&!s)return(0,y.jsxs)(i.bW,{onClickRetry:()=>v(),children:["Failed to load."," "]});if(g)return(0,y.jsx)("div",{className:"flex h-full w-full items-center justify-center",children:"Loading..."});let C=w?.turns,k=w?.turns[w.turns.length-1]?.artifacts__?.model_snapshots?.default_id,N=n&&t?(0,f.t5)(n,t):null;return(0,y.jsx)("div",{className:"flex flex-col gap-2 break-words font-mono text-xs",children:(0,y.jsxs)(x.fC,{orientation:"vertical",value:p,onValueChange:e=>h(e),children:[(0,y.jsxs)(x.aV,{className:"flex items-center justify-center gap-2 px-4 py-1",children:[s&&(0,y.jsx)(x.xz,{value:"message",children:(0,y.jsx)(E,{$isSelected:"message"===p,children:"Message"})},"message"),w&&(0,y.jsx)(x.xz,{value:"thread",children:(0,y.jsx)(E,{$isSelected:"thread"===p,children:"Thread"})},"thread"),C?.map((e,t)=>y.jsxs(j.Fragment,{children:[y.jsx(x.xz,{value:`turn${t}`,children:y.jsxs(E,{$isSelected:p===`turn${t}`,children:["Turn[",t,"]"]})},t),e.artifacts__?.debug_ddtrace_urls?.map(e=>y.jsx(E,{$isSelected:!1,children:y.jsxs("a",{target:"_blank",href:e,className:"text-nowrap",children:["Trace[",t,"] ↗"]})},e))]},t)),(0,y.jsx)("div",{className:"flex-grow"}),k&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(P,{name:"Model",id:k})," ",(0,y.jsx)("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),d&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(P,{name:"User ID",id:d.id})," ",(0,y.jsx)("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),N&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(P,{name:"Permalink",id:N}),(0,y.jsx)("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),w&&(0,y.jsxs)(a.z,{size:"small",color:"secondary",onClick:()=>_("thread.json",w),children:[(0,y.jsx)(l._8t,{className:"icon-sm"})," thread.json"]}),(0,y.jsx)(r.P,{onClick:o})]}),C?.map((e,t)=>y.jsxs(x.VY,{value:`turn${t}`,className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth",children:[y.jsxs("div",{className:m.default("flex flex-col gap-1 p-6",e.index%2==0&&"bg-token-main-surface-tertiary"),children:[y.jsx(M,{prompt:e.artifacts__?.debug_info?.main_model_response?.prompt_string??""}),y.jsxs("div",{children:[y.jsx("span",{className:"font-semibold",children:"[assistant]"})," ",e.model_response?.text]})]})," "]},t)),w&&(0,y.jsx)(x.VY,{value:"thread",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-6",children:(0,y.jsx)(D,{data:w,collapsed:4})}),s&&(0,y.jsx)(x.VY,{value:"message",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-6",children:(0,y.jsx)(D,{data:s,collapsed:4})})]},w?.turns.length??"message")})}function D(e){let{data:t,collapsed:n}=e,{0:a,1:s}=(0,j.useState)(n??!0);return(0,y.jsxs)("div",{className:"flex flex-col items-start gap-1",children:[(0,y.jsx)("button",{onClick:()=>s(!a),className:"flex items-center gap-1",children:a?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(v.rIY,{size:14})," Expand all"]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(v.NsE,{size:14})," Collapse all"]})}),(0,y.jsx)("div",{className:"w-full",children:(0,y.jsx)(w,{json:t,jsonViewProps:{collapsed:a,shortenTextAfterLength:0}},String(a))})]})}function P(e){let{name:t,id:n}=e,a=(0,j.useCallback)(()=>{(0,p.v)(n)},[n]);return(0,y.jsxs)("div",{className:"flex items-center gap-2 truncate",children:[(0,y.jsxs)("span",{className:"text-nowrap font-semibold",children:[t,":"]}),(0,y.jsx)("span",{title:n,className:"truncate text-gray-500 dark:text-white",children:n}),(0,y.jsx)(s.Z,{onCopy:a})]})}},15174:function(e,t,n){var a=n(92379);t.Z=function(){let e=(0,a.useRef)(!1);return(0,a.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,a.useCallback)(()=>e.current,[])}},30757:function(e,t,n){n.d(t,{VY:function(){return M},aV:function(){return N},fC:function(){return k},xz:function(){return O}});var a=n(37088),s=n(92379),r=n(10132),l=n(31541),o=n(65954),i=n(79813),c=n(52125),d=n(76228),u=n(48758),f=n(28531);let x="Tabs",[p,m]=(0,l.b)(x,[o.Pc]),h=(0,o.Pc)(),[b,j]=p(x),g=(0,s.forwardRef)((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:l,defaultValue:o,orientation:i="horizontal",dir:x,activationMode:p="automatic",...m}=e,h=(0,d.gm)(x),[j,g]=(0,u.T)({prop:r,onChange:l,defaultProp:o});return(0,s.createElement)(b,{scope:n,baseId:(0,f.M)(),value:j,onValueChange:g,orientation:i,dir:h,activationMode:p},(0,s.createElement)(c.WV.div,(0,a.Z)({dir:h,"data-orientation":i},m,{ref:t})))}),v=(0,s.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:r=!0,...l}=e,i=j("TabsList",n),d=h(n);return(0,s.createElement)(o.fC,(0,a.Z)({asChild:!0},d,{orientation:i.orientation,dir:i.dir,loop:r}),(0,s.createElement)(c.WV.div,(0,a.Z)({role:"tablist","aria-orientation":i.orientation},l,{ref:t})))}),y=(0,s.forwardRef)((e,t)=>{let{__scopeTabs:n,value:l,disabled:i=!1,...d}=e,u=j("TabsTrigger",n),f=h(n),x=C(u.baseId,l),p=_(u.baseId,l),m=l===u.value;return(0,s.createElement)(o.ck,(0,a.Z)({asChild:!0},f,{focusable:!i,active:m}),(0,s.createElement)(c.WV.button,(0,a.Z)({type:"button",role:"tab","aria-selected":m,"aria-controls":p,"data-state":m?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:x},d,{ref:t,onMouseDown:(0,r.M)(e.onMouseDown,e=>{i||0!==e.button||!1!==e.ctrlKey?e.preventDefault():u.onValueChange(l)}),onKeyDown:(0,r.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&u.onValueChange(l)}),onFocus:(0,r.M)(e.onFocus,()=>{let e="manual"!==u.activationMode;m||i||!e||u.onValueChange(l)})})))}),w=(0,s.forwardRef)((e,t)=>{let{__scopeTabs:n,value:r,forceMount:l,children:o,...d}=e,u=j("TabsContent",n),f=C(u.baseId,r),x=_(u.baseId,r),p=r===u.value,m=(0,s.useRef)(p);return(0,s.useEffect)(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.createElement)(i.z,{present:l||p},({present:n})=>(0,s.createElement)(c.WV.div,(0,a.Z)({"data-state":p?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":f,hidden:!n,id:x,tabIndex:0},d,{ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0}}),n&&o))});function C(e,t){return`${e}-trigger-${t}`}function _(e,t){return`${e}-content-${t}`}let k=g,N=v,O=y,M=w}}]);
//# sourceMappingURL=7541.5ec01a3be446695d.js.map