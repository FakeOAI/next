"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7776],{17776:function(A,e,t){t.r(e),t.d(e,{ModelOnboardingNUXModal:function(){return v}});var o=t(72438),l=t(83054),s=t(45592),a=t(36275),n=t(78880),r=t(59892),i=t(88342),d=t(41947),c=t(88324),u=t(44260),g=t(53265),m=t(52866),p=t(61888),f=t(77743),E=t(93906),h=t.n(E),x={src:"https://cdn.oaistatic.com/_next/static/media/gpt4o_nux_bg.59b50c3b.jpg",height:1159,width:2579,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAAGsKN//xAAWEAEBAQAAAAAAAAAAAAAAAAADAhT/2gAIAQEAAQUCU50f/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQIA/9oACAEDAQE/AaBp3//EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAgEBPwEUyX//xAAWEAADAAAAAAAAAAAAAAAAAAAAMXP/2gAIAQEABj8Coz//xAAZEAEAAgMAAAAAAAAAAAAAAAABABExQWH/2gAIAQEAAT8hpBLMbzZP/9oADAMBAAIAAwAAABD3/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBB/9oACAEDAQE/EEBNv//EABcRAAMBAAAAAAAAAAAAAAAAAAABEUH/2gAIAQIBAT8QnDw//8QAGBABAAMBAAAAAAAAAAAAAAAAAQARIVH/2gAIAQEAAT8QSmMKMHBwan//2Q==",blurWidth:8,blurHeight:4},O=t(70079),b=t(9063),w=t(84692),B=t(68498),y=t(35250);function N(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable})),t.push.apply(t,o)}return t}function j(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?N(Object(t),!0).forEach(function(e){(0,o.Z)(A,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach(function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))})}return A}let v=A=>{let{onClose:e}=A,t=(0,b.Z)(),{eligible:o,isLoading:E}=(0,a.g)(),{markAsViewed:B}=(0,n.qg)(n.pm.AG8PqS2q),N=(0,d.fm)(!1),v=(0,d.fm)(!0),P=(0,r.xT)(),{doesUserHaveAnyAccountsWithPlusFeatures:M}=(0,c.al)(),{resolvedTheme:D}=(0,f.F)(),{categories:I,isLoading:T}=(0,d.OX)(),z=(0,c.t)(),C=I.find(A=>A.category===i.ft.GPT4o),k=o&&!E&&!T&&C;if((0,O.useEffect)(()=>{k&&g.A.logEvent(m.M.gpt4oNUXModalShown,{plan_type:null==z?void 0:z.planType})},[k,null==z?void 0:z.planType]),!k)return null;let _=()=>{B(),(0,s.go)(),e()};return(0,y.jsx)(l.ZP.Root,{isOpen:!0,onClose:p.noop,children:(0,y.jsx)(l.ZP.Overlay,{children:(0,y.jsxs)(l.ZP.Content,{preventAutoFocusOnOpen:!0,className:"relative flex max-w-md flex-col items-center rounded-xl p-0 pb-10 text-center focus:outline-none",children:[(0,y.jsxs)("div",{className:"relative flex w-full items-center justify-center overflow-hidden bg-clip-content",children:[(0,y.jsx)(h(),{src:x,alt:"GPT‑4o NUX",height:210,priority:!0,className:"rounded-t-xl"}),(0,y.jsx)("div",{className:"absolute right-0 top-0 m-4 cursor-pointer",children:(0,y.jsx)(l.ZP.CloseButton,{onClose:()=>{g.A.logEvent(m.M.gpt4oNUXModalDismissed,{plan_type:null==z?void 0:z.planType,switch_to_gpt4o:!0}),N({modelId:C.default_model,location:"GPT‑4o NUX Modal"}),P(C.default_model),_()}})})]}),(0,y.jsxs)("div",{className:"mb-5 mt-8 flex flex-col px-6",children:[(0,y.jsx)(u.Dx,{as:"h2",className:"font-medium leading-6 ",children:(0,y.jsx)(w.Z,j(j({},Q.title),{},{values:{modelName:"GPT‑4o"}}))}),(0,y.jsx)(u.dk,{className:"pt-3 text-sm text-token-text-secondary",children:M?(0,y.jsx)(w.Z,j(j({},Q.bodyPaidFinal),{},{values:{modelName:"GPT‑4o",anotherModelName:"GPT‑4"}})):(0,y.jsx)(w.Z,j(j({},Q.bodyFreeFinal),{},{values:{modelName:"GPT‑4o"}}))})]}),(0,y.jsx)("div",{className:"flex justify-center gap-4",children:(0,y.jsx)(l.ZP.Button,{onClick:()=>{g.A.logEvent(m.M.gpt4oNUXModalTryItNowClicked,{plan_type:null==z?void 0:z.planType}),v({modelId:C.default_model,location:"GPT‑4o NUX Modal"}),P(C.default_model),_()},title:t.formatMessage(Q.buttonTryItNow),className:"rounded-xl px-5",color:"dark"===D?"light":"dark"})})]})})})},Q=(0,B.vU)({title:{id:"1kewDD",defaultMessage:"Introducing {modelName}"},bodyPaidFinal:{id:"Z6KHqN",defaultMessage:"You can now try our newest model, {modelName}. It’s faster than {anotherModelName}, better at understanding images, and speaks more languages."},bodyFreeFinal:{id:"w8Y79o",defaultMessage:"You now have limited access to our latest model, {modelName}. It’s smarter, understands images, can browse the web, and speaks more languages."},buttonTryItNow:{id:"RHbQLy",defaultMessage:"Try it now"}})}}]);
//# sourceMappingURL=7776.b3b84235171455f6.js.map