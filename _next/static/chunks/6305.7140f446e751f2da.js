"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6305],{78976:function(e,t,o){o.d(t,{W:function(){return f},i:function(){return y}});var n=o(99333),r=o(39004),a=o(92745),s=o(13503),i=o(88667),d=o(92379),c=o(75172),l=o(62984),g=o(24434),u=o(75856),p=o(94219),h=o(651);function f(e){let{gizmoId:t,onClose:o}=e,{data:a}=(0,r.b9)(t),{data:i}=(0,s.sQ)(n.CD.Gizmo),d=(0,c.Z)(),l=(0,s.gm)(d,t,n.CD.Gizmo);if(null==i)return null;let g=null!=a?`Report ${a.gizmo.display.name}`:"Report";return(0,h.jsx)(p.UM,{reasons:i.reasons,submitReport:l,title:g,onClose:o,header:i.header,subHeader:i.header_explanation})}function y(e){let{gizmoId:t,clientThreadId:o,onClose:n}=e,r=(0,c.Z)(),s=i.sB("1855896025")?.value,y=i.sB("3376455464")?.value,b=(0,a.XK)(o),m=i.sB("90459671")?.value,{0:k,1:C}=(0,d.useState)();return s&&y&&"gpt"!==k&&m&&null!=b?"conversation"===k?(0,h.jsx)(u.E,{serverThreadId:b,onClose:n}):(0,h.jsxs)(g.Z,{title:r.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:n,isOpen:!0,showCloseButton:!0,type:"success",children:[(0,h.jsx)(p.Rh,{header:r.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),(0,h.jsxs)(p._4,{children:[(0,h.jsx)(p.Ag,{onClick:e=>{e.preventDefault(),C("conversation")},children:(0,h.jsx)(l.Z,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),(0,h.jsx)(p.Ag,{onClick:e=>{e.preventDefault(),C("gpt")},children:(0,h.jsx)(l.Z,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]}):(0,h.jsx)(f,{gizmoId:t,onClose:n})}},51517:function(e,t,o){o.r(t),o.d(t,{ThreadHeaderGizmoDropdown:function(){return u}});var n=o(28146),r=o(92379),a=o(15478),s=o(39004),i=o(52245),d=o(78976),c=o(10080),l=o(651);let g=a.Z.div`group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 text-token-text-secondary font-semibold hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary overflow-hidden whitespace-nowrap`;function u(e){let{clientThreadId:t,inMobileHeader:o,gizmoId:a,triggerButton:u}=e,{0:p,1:h}=(0,r.useState)(!1),{data:f}=(0,s.b9)(a);return null==f?null:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.GizmoInformationDropdown,{clientThreadId:t,gizmoResource:f,showReportModal:()=>{h(!0)},inMobileHeader:o,children:u||(0,l.jsxs)(g,{children:[f.gizmo.display.name,f.gizmo.tags?.includes(c.U9.Beta)&&(0,l.jsx)("div",{className:"rounded-full bg-token-main-surface-secondary px-1.5 text-xs text-token-text-primary",children:"Beta"}),(0,l.jsx)(n.Tg4,{className:"icon-md text-token-text-tertiary"})]})}),p&&(0,l.jsx)(d.i,{gizmoId:a,clientThreadId:t,onClose:()=>{h(!1)}})]})}},13391:function(e,t,o){o.d(t,{n:function(){return T},A3:function(){return S},yx:function(){return z},JS:function(){return L}});var n,r=o(98601),a=o(15858),s=o(70879),i=o(99976),d=o(61619),c=o(79746),l=o(82363),g=o(91530),u=o.n(g),p=o(92379),h=o(68306),f=o(16757),y=o(24740),b=o(92745),m=o(31438),k=o(49763),C=o(22433),M=o(45248);let v=p.useLayoutEffect;function x(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}let w=/```.*?\n([\s\S]+?)\n?```[^`]*$/gms;var j=((n=j||{}).Core="Core",n.Chat="Chat",n.Settings="Settings",n);let A=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?x(Object(o),!0).forEach(function(t){(0,r.Z)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):x(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({Mod:"mod",Comma:","},a.s),B={[A.Mod]:/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"⌘":"Ctrl",[A.Comma]:",",[A.Enter]:"⏎",[A.Escape]:"Esc",[A.ArrowUp]:"↑",[A.ArrowDown]:"↓",[A.ArrowLeft]:"←",[A.ArrowRight]:"→",[A.Backspace]:"⌫",[A.Delete]:"⌦",[A.Tab]:"⇥",[A.Control]:"Ctrl",[A.Shift]:"Shift"},S=e=>e.map(e=>B[e]??e),D=(0,h.vU)({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat"},archiveChat:{id:"keyboardActions.archiveChat",defaultMessage:"Archive chat"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts"}}),T=new k.V,O=e=>{let{resetThreadAction:t,clientThreadId:o}=e;return[{key:"newChat",action:t||u(),actionMessageDescriptor:D.newChat,group:j.Core,keyboardBinding:[A.Mod,A.Shift,"o"],altKeyboardBindings:[[A.Mod,"k"]]},{key:"focusPromptTextarea",action:s.go,actionMessageDescriptor:D.focusPromptTextarea,group:j.Chat,keyboardBinding:[A.Shift,A.Escape]},{key:"copyLastCodeBlock",action:()=>{if(null!=o){let e=b.tQ.getThreadCurrentLeafId(o),t=b.tQ.getThreadConversationTurns(o,e);for(let e=t.length-1;e>=0;e--){let{messages:o}=t[e],n=[...o.reduce((e,t)=>null==t.err&&t.message.author.role===f.uU.Assistant&&"all"===t.message.recipient?e+(e?"\n\n":"")+(0,C.RR)(t.message):e,"").matchAll(w)],r=n.length?n[n.length-1][1]:null;if(null!=r){(0,c.v)(r).then(()=>{y.m.success("Copied code block to clipboard")});break}}}},actionMessageDescriptor:D.copyLastCodeBlock,group:j.Chat,keyboardBinding:[A.Mod,A.Shift,";"],altKeyboardBindings:[[A.Mod,A.Shift,":"]]},{key:"copyLastResponse",action:()=>{null!=o&&b.tQ.copyLastMessageToClipboard(o,"keyboard").then(()=>{y.m.success("Last response copied to clipboard")})},actionMessageDescriptor:D.copyLastResponse,group:j.Chat,keyboardBinding:[A.Mod,A.Shift,"c"]},{key:"toggleCustomInstructions",action:()=>m.vm.toggleModal(m.B.UserContext),actionMessageDescriptor:D.toggleCustomInstructions,group:j.Settings,keyboardBinding:[A.Mod,A.Shift,"i"]},{key:"navigationToggle",action:()=>m.vm.toggleNavSidebar(),actionMessageDescriptor:D.navigationToggle,group:j.Core,keyboardBinding:[A.Mod,A.Shift,"s"]},{key:"deleteChat",action:()=>{if(o){let e=b.tQ.getServerThreadId(o);e&&T.publish({kind:"deleteChat",serverThreadId:e})}},actionMessageDescriptor:D.deleteChat,group:j.Chat,keyboardBinding:[A.Mod,A.Shift,A.Backspace],altKeyboardBindings:[[A.Mod,A.Shift,A.Delete]]},{key:"toggleKeyboardActions",action:()=>m.vm.toggleModal(m.B.KeyboardActions),actionMessageDescriptor:D.toggleKeyboardActions,group:j.Settings,keyboardBinding:[A.Mod,"/"]}]},P=e=>(function(e,t,o){let n=e.map(e=>{let{keyboardBinding:t}=e,o=t.join("+");if(e.altKeyboardBindings){o=[o];let t=e.altKeyboardBindings.map(e=>e.join("+"));o=o.concat(t)}return(0,M.ZP)(o,{byKey:!0})});v(()=>{if(o?.enabled===!1)return;let r=o=>{if(!o.repeat)for(let r=0;r<n.length;r++)n[r](o)&&(void 0===e[r].enabled||e[r].enabled)&&(o.preventDefault(),t(e[r]),e[r].action())},a=e=>{void 0!==e.key&&r(e)},s=document;return s.addEventListener("keydown",a),()=>{s.removeEventListener("keydown",a)}},[e,o])})(e,e=>{i.A.logEvent(d.M.keyboardShortcut,{keyboardActionKey:e.key}),l.U.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:e.key})},{enabled:!0}),L=function(){let{resetThreadAction:e,clientThreadId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,p.useMemo)(()=>O({resetThreadAction:e,clientThreadId:t}).filter(e=>{let{enabled:t=!0}=e;return t}),[t,e])},z=e=>{let{resetThreadAction:t,clientThreadId:o}=e;P(L({resetThreadAction:t,clientThreadId:o}))}}}]);
//# sourceMappingURL=6305.7140f446e751f2da.js.map