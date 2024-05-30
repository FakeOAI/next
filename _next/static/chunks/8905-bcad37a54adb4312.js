"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8905],{28905:function(e,t,i){i.r(t),i.d(t,{__N_SSP:function(){return U},default:function(){return W},messages:function(){return G}});var n=i(24312),a=i(90465),l=i(13862),r=i(63824),o=i(73581),s=i(52337),c=i(65329),d=i(89334),u=i(95028),g=i(16602),p=i(8025),f=i(23890),m=i(96117),h=i(45232),y=i(14953),x=i(19841),b=i(83263),v=i(34442),j=i.n(v),k=i(26123),w=i(72256),O=i(25940),M=i(82397),E=i(651);function C(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function L(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?C(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function P(e){let{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:a}=e,l=(0,k.Z)(),{layer:r}=(0,y.U3)("chatgpt_anon_chat_layer"),o=r.get("is_try_it_first_on_login_page_enabled",!1),x=(0,y.Dg)();return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[(0,E.jsx)("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:(0,E.jsx)("h1",{"aria-label":l.formatMessage(N.ariaLabel),children:(0,E.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,E.jsx)("div",{children:M.L})})})}),(0,E.jsxs)("div",{className:"relative flex w-full grow flex-col items-center justify-center",children:[(0,E.jsx)("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:(0,E.jsx)(w.Z,L({},N.pageTitle))}),(0,E.jsx)("div",{className:"mt-5 w-full max-w-[440px]",children:i?(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)("div",{className:"flex w-full flex-col gap-3",children:[(0,E.jsx)(I,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E\")",onClick:()=>{g.A.logLogInButtonClicked({provider:"google",location:"Login page"}),(0,b.signIn)("openai",{callbackUrl:n},L({prompt:"login",login_hint:(0,d.W_)({idp:"google"})},(0,u.gk)((0,m.f3)())))},children:(0,E.jsx)(w.Z,L({},N.continueWithGoogle))}),(0,E.jsx)(I,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Cpath fill='%23f25022' d='M1 1h9v9H1z'/%3E%3Cpath fill='%2300a4ef' d='M1 11h9v9H1z'/%3E%3Cpath fill='%237fba00' d='M11 1h9v9h-9z'/%3E%3Cpath fill='%23ffb900' d='M11 11h9v9h-9z'/%3E%3C/svg%3E\")",onClick:()=>{g.A.logLogInButtonClicked({provider:"microsoft",location:"Login page"}),(0,b.signIn)("openai",{callbackUrl:n},L({prompt:"login",login_hint:(0,d.W_)({idp:"microsoft"})},(0,u.gk)((0,m.f3)())))},children:(0,E.jsx)(w.Z,L({},N.continueWithMicrosoft))}),(0,E.jsx)("div",{className:"my-2 w-full border-t border-black/5"}),(0,E.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,E.jsx)(I,{blue:!0,className:"justify-center",onClick:()=>{g.A.logLogInButtonClicked({provider:"openai",location:"Login page"}),(0,b.signIn)("openai",{callbackUrl:n},L({prompt:"login",login_hint:(0,d.W_)({idp:"openai"})},(0,u.gk)((0,m.f3)())))},children:(0,E.jsx)(w.Z,L({},N.logIn))}),(0,E.jsx)(I,{blue:!0,className:"justify-center",onClick:()=>{g.A.logSignUpButtonClicked({provider:"openai",location:"Login page"}),(0,b.signIn)("openai",{callbackUrl:n},L({prompt:"login",login_hint:(0,d.W_)({idp:"openai",screen:"signup"})},(0,u.gk)((0,m.f3)())))},children:(0,E.jsx)(w.Z,L({},N.signUp))})]})]})}):(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)("div",{className:"grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0",children:[(0,E.jsx)(I,{blue:!0,testid:"login-button",onClick:()=>{g.A.logLogInButtonClicked({provider:"auth0",location:"Login page"}),(0,b.signIn)(t,{callbackUrl:n},L(L({prompt:"login"},(0,u.gk)((0,m.f3)())),x?{use_email_otp:"true"}:{}))},children:(0,E.jsx)(w.Z,L({},N.logIn))}),(0,E.jsx)(I,{blue:!0,onClick:()=>{g.A.logSignUpButtonClicked({provider:"auth0",location:"Login page"}),f.bX.setCookie(f.cn.SignupRedirectUrl,n,{maxAge:10800}),(0,b.signIn)(t,{callbackUrl:n},L({prompt:"login",screen_hint:"signup"},(0,u.gk)((0,m.f3)())))},children:(0,E.jsx)(w.Z,L({},N.signUp))})]})})}),o?(0,E.jsx)("a",{href:"#",className:"mt-12 text-token-text-secondary underline",onClick:e=>{e.preventDefault(),g.A.logEvent(p.M.authTryItFirstLinkClicked),h.m9.logEvent("chatgpt_auth_try_it_first_link_clicked"),f.bX.setCookie(f.cn.HasClickedOnTryItFirstLink,!0,{maxAge:43200}),j().push("/")},children:(0,E.jsx)(w.Z,L({},N.tryItFirst))}):null]}),(0,E.jsxs)("div",{className:"mt-10 flex flex-col justify-center ",children:[(0,E.jsx)("div",{className:"flex justify-center text-gray-300 md:mb-3",children:(0,E.jsx)(s.nV,{className:"h-[22px] w-auto"})}),(0,E.jsx)(c.VL,{isStorageComplianceEnabled:a})]})]})})}function I(e){let{icon:t,children:i,className:n,onClick:a,testid:l,blue:r=!1}=e;return(0,E.jsxs)(o.z,{color:r?"blue":"primary",size:"large","data-testid":l,onClick:a,className:n,children:[t?(0,E.jsx)("div",{className:(0,x.default)("h-5 w-5 justify-self-start",{}),style:{backgroundImage:t}}):null,(0,E.jsx)("span",{children:i})]})}let N=(0,O.vU)({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"},tryItFirst:{id:"Login.tryItFirst",defaultMessage:"Try it first"}});var A=i(43446),_=i(64331);i(61546);var S=i(92379);function D(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function T(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?D(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var U=!0;function W(e){var t;let{serviceStatus:i,auth0Provider:n,enableNewAuthFlow:r,cfConnectingIp:o,isStorageComplianceEnabled:s,statsigShowCapacityGate:c}=e,d=(0,v.useRouter)(),{next:m}=d.query,h="string"==typeof m&&m.startsWith("/")?m:"/";d.asPath.includes("#")&&(h+="#"+d.asPath.split("#")[1]);let x=(0,k.Z)(),j=!!(null==i?void 0:i.oof)||!0===c,w=(0,S.useRef)(!1),O="sso"in d.query&&(null===(t=d.query.sso)||void 0===t||t),M=O?d.query.connection:void 0,C=(0,y.Dg)();return((0,S.useEffect)(()=>{if(O&&!j){var e;let t=null===(e=f.bX.getCookie(f.cn.DeviceId))||void 0===e?void 0:e.toString();(0,b.signIn)("openai"===O?"openai":"auth0",{callbackUrl:h},T(T(T(T({},t?{device_id:t}:{}),M?{connection:M}:{}),(0,u.gk)(t)),C?{use_email_otp:"true"}:{}))}},[h,O,M,j,C]),(0,S.useEffect)(()=>{g.A.logEvent(p.M.loggedOutOpenedAuthLogin,{cfConnectingIp:o})},[o]),(0,S.useEffect)(()=>{"#pricing"===window.location.hash&&f.bX.setCookie(f.cn.ShowPaymentModal,!0,{maxAge:21600})},[]),(0,S.useEffect)(()=>{if(w.current)return;w.current=!0;let{inv_ws_name:e,inv_email:t}=d.query;e=Array.isArray(e)?e[0]:e,t=Array.isArray(t)?t[0]:t,e&&t&&A.m.success(x.formatMessage(G.invitedToastMessage,{workspace_name:e,email:t}),{hasCloseButton:!0,duration:600})},[d.query,x]),j)?(0,E.jsx)(a.Z,{}):O?null:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(l.Z,{}),(0,E.jsx)(Z,{auth0Provider:n,enableNewAuthFlow:r,nextUrl:h,isStorageComplianceEnabled:s})]})}let Z=e=>{let{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:a}=e;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(F,{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:a}),!1]})};function F(e){let{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:a}=e,{resolvedTheme:l}=(0,_.F)(),o="dark"===l,s=(0,S.useRef)(null);return(0,S.useEffect)(()=>{null===s.current&&(s.current=document.body.style.backgroundColor);let e=o?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=e,()=>{null!==s.current&&(document.body.style.backgroundColor=s.current)}},[o]),(0,E.jsxs)("div",{className:"flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",children:[(0,E.jsx)(r.O,{}),(0,E.jsx)(P,{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:a})]})}let G=(0,O.vU)({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"},invitedToastMessage:{id:"Login.invitedToastMessage",defaultMessage:"You have been invited to the {workspace_name} workspace! Login or sign up with {email} to accept the invitation."}})},65329:function(e,t,i){i.d(t,{VL:function(){return y},Wk:function(){return h},jI:function(){return b},xh:function(){return m}});var n,a=i(24312),l=i(81669),r=i(79014),o=i(72256),s=i(25940),c=i(74091),d=i(52337),u=i(3698),g=i(651);function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach(function(t){(0,a.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}let m=c.Z.div(n||(n=(0,l.Z)(["w-96 flex flex-col flex-auto justify-center items-center"])));function h(e){let{children:t,showTerms:i=!0,isStorageComplianceEnabled:n}=e;return(0,g.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",children:[t,i&&(0,g.jsx)(y,{isStorageComplianceEnabled:n})]})}function y(e){let{isStorageComplianceEnabled:t}=e;return(0,g.jsxs)("div",{className:"flex gap-3 py-3 text-xs text-token-text-tertiary",children:[(0,g.jsx)(u.Z,{href:"https://openai.com/policies/terms-of-use",type:"neutral",openNewTab:!0,children:(0,g.jsx)(o.Z,f({},v.terms))}),(0,g.jsx)(x,{}),(0,g.jsx)(u.Z,{href:"https://openai.com/policies/privacy-policy",openNewTab:!0,type:"neutral",children:(0,g.jsx)(o.Z,f({},v.privacy))}),t&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{}),(0,g.jsx)("button",{className:"underline",onClick:()=>r.vm.openModal(r.B.CookieManagement),children:(0,g.jsx)(o.Z,f({},v.cookies))})]})]})}let x=()=>(0,g.jsx)("span",{className:"text-token-text-tertiary",children:"|"});function b(){return(0,g.jsx)("div",{className:"mb-5",children:(0,g.jsx)(d.nI,{})})}let v=(0,s.vU)({terms:{id:"AuthPage.terms",defaultMessage:"Terms of use"},privacy:{id:"AuthPage.privacy",defaultMessage:"Privacy policy"},cookies:{id:"AuthPage.cookies",defaultMessage:"Manage cookies"}})},63824:function(e,t,i){i.d(t,{O:function(){return O}});var n=i(5402),a=i(26123),l=i(25940),r=i(24312),o=i(21597),s=i(31681),c=i(35649),d=i(19841),u=i(7290),g=i(58164),p=i(59141),f=i.n(p),m=i(92379),h=i(72256),y=i(651);function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach(function(t){(0,r.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function v(){let{0:e,1:t}=(0,m.useState)(0),i=(0,m.useRef)(f()(Object.values(k))),{currentLocale:n}=(0,o.b)();return(0,y.jsx)(u.M,{mode:"wait",initial:!1,children:(0,y.jsx)(g.E.div,{className:"-mt-4 flex w-full flex-col pr-5 md:pr-8 lg:pr-10",initial:{opacity:0,y:24},animate:{opacity:1,y:0},exit:{opacity:0,y:-24},transition:{duration:.2},children:(0,y.jsx)(h.Z,b(b({},i.current[e]),{},{values:{title:e=>(0,y.jsx)("p",{className:"font-bold",children:e}),body:e=>{let a=null==e?void 0:e[0];return"string"!=typeof a?null:(0,y.jsx)(j,{text:a,onFinishedTyping:()=>{setTimeout(()=>{t(e=>(e+1)%i.current.length)},2500)}},n)}}}))},e)})}function j(e){let{text:t,onFinishedTyping:i}=e,n=(0,s.J)(t),a=n.length,{0:l,1:r}=(0,m.useState)(-12),o=(0,m.useRef)(!1);return(0,m.useEffect)(()=>{o.current||l!==a||(i(),o.current=!0)},[l,a,i]),(0,c.Z)(()=>{r(e=>e+1)},40),(0,y.jsxs)("p",{className:"font-normal",children:[n.slice(0,Math.max(l,0)).join(""),(0,y.jsxs)("span",{className:(0,d.default)("font-circle",{invisible:l>a+12}),children:["​","●"]})]})}let k=(0,l.vU)({marketingExample1:{id:"PvNRKc",defaultMessage:"<title>Recommend a dish</title><body>to bring to a potluck</body>"},marketingExample2:{id:"x6dDU4",defaultMessage:"<title>Recommend a dish</title><body>to impress a date who's a picky eater</body>"},marketingExample3:{id:"dVTBN5",defaultMessage:"<title>Help me debug</title><body>a Python script automating daily reports</body>"},marketingExample4:{id:"Hlddw+",defaultMessage:"<title>Help me debug</title><body>why the linked list appears empty after I've reversed it</body>"},marketingExample5:{id:"faJr4O",defaultMessage:"<title>Draft an email</title><body>to request a quote from local plumbers</body>"},marketingExample6:{id:"oV5RJ5",defaultMessage:"<title>Draft an email</title><body>requesting a deadline extension for my project</body>"},marketingExample7:{id:"vL3rX1",defaultMessage:"<title>Summarize this article</title><body>into three key points</body>"},marketingExample8:{id:"xo9nQj",defaultMessage:"<title>Summarize this article</title><body>as a table of pros and cons</body>"},marketingExample9:{id:"VVg3aa",defaultMessage:"<title>Write a text</title><body>asking a friend to be my plus-one at a wedding</body>"},marketingExample10:{id:"8Vl7TM",defaultMessage:"<title>Write a text</title><body>that goes with a kitten gif for a friend having a rough day</body>"},marketingExample11:{id:"dXqZbT",defaultMessage:"<title>Suggest fun activities</title><body>for a family of 4 to do indoors on a rainy day</body>"},marketingExample12:{id:"h09XOo",defaultMessage:"<title>Suggest fun activities</title><body>for a team-building day with remote employees</body>"},marketingExample13:{id:"6FcHEa",defaultMessage:"<title>Brainstorm names</title><body>for my fantasy football team</body>"},marketingExample14:{id:"O6iNBu",defaultMessage:"<title>Brainstorm names</title><body>for an orange cat we're adopting from the shelter</body>"},marketingExample15:{id:"uw95Qj",defaultMessage:"<title>Give me ideas</title><body>for what to do with my kids' art</body>"},marketingExample16:{id:"HQTYuP",defaultMessage:"<title>Give me ideas</title><body>for a customer loyalty program in a small bookstore</body>"},marketingExample17:{id:"s3Gh5S",defaultMessage:"<title>Plan a trip</title><body>to see the northern lights in Norway</body>"},marketingExample18:{id:"517NID",defaultMessage:"<title>Plan a trip</title><body>to experience Seoul like a local</body>"},marketingExample19:{id:"EASxoK",defaultMessage:"<title>Write a thank-you note</title><body>to my interviewer</body>"},marketingExample20:{id:"ozMspN",defaultMessage:"<title>Write a thank-you note</title><body>to our babysitter for the last-minute help</body>"},marketingExample21:{id:"2o1b9o",defaultMessage:"<title>Help me pick</title><body>a gift for my dad who loves fishing</body>"},marketingExample22:{id:"TysYjq",defaultMessage:"<title>Help me pick</title><body>an outfit that will look good on camera</body>"},marketingExample23:{id:"pVmQs6",defaultMessage:"<title>Improve my post</title><body>for hiring a store associate</body>"},marketingExample24:{id:"mvvlCD",defaultMessage:"<title>Improve my post</title><body>for selling a used vacuum in good condition</body>"}});var w=i(82397);function O(){var e;let t=(0,a.Z)(),i=null!==(e=(0,n.L)(()=>!0))&&void 0!==e&&e;return(0,y.jsxs)("div",{className:"relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8",children:[(0,y.jsx)("nav",{className:"left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8",children:(0,y.jsx)("h1",{"aria-label":t.formatMessage(M.ariaLabel),children:(0,y.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,y.jsx)("div",{children:w.L})})})}),(0,y.jsx)("div",{className:"flex flex-col text-[32px] leading-[1.2] md:text-[40px]","aria-hidden":"true",children:i?(0,y.jsx)(v,{}):null})]})}let M=(0,l.vU)({ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"}})},82397:function(e,t,i){i.d(t,{L:function(){return a}});var n=i(651);let a=(0,n.jsxs)(n.Fragment,{children:["ChatGPT ",(0,n.jsx)("span",{className:"font-circle",children:"●"})]})},31681:function(e,t,i){i.d(t,{J:function(){return n}});function n(e){try{let t=new Intl.Segmenter("en-US",{granularity:"grapheme"}).segment(e),i=[];for(let e of t)i.push(e.segment);return i}catch{return e.split("")}}},35649:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(92379);function a(e,t){let i=(0,n.useRef)(e);(0,n.useEffect)(()=>{i.current=e},[e]),(0,n.useEffect)(()=>{if(null!=t){let e=window.setInterval(function(){i.current()},t);return()=>clearInterval(e)}},[t])}}}]);
//# sourceMappingURL=8905-bcad37a54adb4312.js.map