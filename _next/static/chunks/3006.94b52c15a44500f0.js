"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3006],{23006:function(A,e,t){t.r(e),t.d(e,{ModelOnboardingNUXModal:function(){return M}});var o=t(98601),a=t(59144),s=t(3945),l=t(70879),n=t(24907),r=t(60682),i=t(99501),d=t(67437),c=t(93951),u=t(66583),g=t(99976),p=t(61619),m=t(91530),f=t.n(m),E=t(86481),x=t.n(E),h=t(9512),b=t(92379),w=t(75172),O=t(62984),y=t(68306),N=t(30115),j=t(651);function B(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable})),t.push.apply(t,o)}return t}function P(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?B(Object(t),!0).forEach(function(e){(0,o.Z)(A,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach(function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))})}return A}let M=A=>{let{onClose:e}=A,t=(0,w.Z)(),{eligible:o,isLoading:m}=(0,n.g)(),{markAsViewed:E}=(0,r.qg)(r.pm.AG8PqS2q),y=(0,d.fm)(!1),B=(0,d.fm)(!0),M=(0,i.xT)(),{doesUserHaveAnyAccountsWithPlusFeatures:D}=(0,c.al)(),{categories:v,isLoading:T}=(0,d.OX)(),z=(0,c.t)(),C=v.find(A=>{let{categoryId:e}=A;return e===s.ft.GPT4o}),I=o&&!m&&!T&&C;if((0,b.useEffect)(()=>{I&&g.A.logEvent(p.M.gpt4oNUXModalShown,{plan_type:z?.planType})},[I,z?.planType]),!I)return null;let k=()=>{E(),(0,l.go)(),e()};return(0,j.jsx)(a.Z.Root,{isOpen:!0,onClose:f(),children:(0,j.jsx)(a.Z.Overlay,{children:(0,j.jsxs)(a.Z.Content,{className:"relative flex max-w-md flex-col items-center rounded-xl p-0 pb-10 text-center focus:outline-none",children:[(0,j.jsxs)("div",{className:"relative flex w-full items-center justify-center overflow-hidden bg-clip-content",children:[(0,j.jsx)(x(),{src:h.Z,alt:"GPT‑4o NUX",height:210,priority:!0,className:"rounded-t-xl"}),(0,j.jsx)(N.P,{className:"absolute right-0 top-0 m-4",onClick:()=>{g.A.logEvent(p.M.gpt4oNUXModalDismissed,{plan_type:z?.planType,switch_to_gpt4o:!0}),y({modelId:C.defaultModel,location:"GPT‑4o NUX Modal"}),M(C.defaultModel),k()}})]}),(0,j.jsxs)("div",{className:"mb-5 mt-8 flex flex-col px-6",children:[(0,j.jsx)(u.Dx,{className:"font-semibold leading-6",children:(0,j.jsx)(O.Z,P(P({},Q.title),{},{values:{modelName:"GPT‑4o"}}))}),(0,j.jsx)(u.dk,{className:"pt-3 text-sm text-token-text-secondary",children:D?(0,j.jsx)(O.Z,P(P({},Q.bodyPaidFinal),{},{values:{modelName:"GPT‑4o",anotherModelName:"GPT‑4"}})):(0,j.jsx)(O.Z,P(P({},Q.bodyFreeFinal),{},{values:{modelName:"GPT‑4o"}}))})]}),(0,j.jsx)("div",{className:"flex justify-center gap-4",children:(0,j.jsx)(a.Z.Button,{onClick:()=>{g.A.logEvent(p.M.gpt4oNUXModalTryItNowClicked,{plan_type:z?.planType}),B({modelId:C.defaultModel,location:"GPT‑4o NUX Modal"}),M(C.defaultModel),k()},title:t.formatMessage(Q.buttonTryItNow),className:"rounded-xl px-5",color:"primary"})})]})})})},Q=(0,y.vU)({title:{id:"1kewDD",defaultMessage:"Introducing {modelName}"},bodyPaidFinal:{id:"Z6KHqN",defaultMessage:"You can now try our newest model, {modelName}. It’s faster than {anotherModelName}, better at understanding images, and speaks more languages."},bodyFreeFinal:{id:"w8Y79o",defaultMessage:"You now have limited access to our latest model, {modelName}. It’s smarter, understands images, can browse the web, and speaks more languages."},buttonTryItNow:{id:"RHbQLy",defaultMessage:"Try it now"},titleNoAuth:{id:"k9PG/O",defaultMessage:"Sign up to try GPT‑4o"},bodyNoAuth:{id:"Pd71un",defaultMessage:"Get smarter responses, upload files, analyze images, and browse the web with our latest model."}})},9512:function(A,e){e.Z={src:"https://cdn.oaistatic.com/_next/static/media/gpt4o_nux_bg.59b50c3b.jpg",height:1159,width:2579,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAAGsJN//xAAWEAEBAQAAAAAAAAAAAAAAAAADAhT/2gAIAQEAAQUCU50f/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQIA/9oACAEDAQE/AaBp3//EABYRAQEBAAAAAAAAAAAAAAAAAAECAP/aAAgBAgEBPwEpJN//xAAWEAADAAAAAAAAAAAAAAAAAAAAMXP/2gAIAQEABj8Coz//xAAZEAEAAgMAAAAAAAAAAAAAAAABABExQWH/2gAIAQEAAT8hpBLMbzZP/9oADAMBAAIAAwAAABD/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAQf/aAAgBAwEBPxBATb//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EJQ5h//EABkQAQACAwAAAAAAAAAAAAAAAAEAESExUf/aAAgBAQABPxBaYwo04HBqf//Z",blurWidth:8,blurHeight:4}}}]);
//# sourceMappingURL=3006.94b52c15a44500f0.js.map