"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6111],{26111:function(e,t,i){i.r(t),i.d(t,{__N_SSP:function(){return S},default:function(){return D},messages:function(){return U}});var n=i(72438),r=i(50450),a=i(34779),o=i(41408),l=i(74922),s=i(25800),c=i(2829),d=i(53265),u=i(52866),g=i(52601),p=i(24115),f=i(35356),m=i(19841),h=i(44184),y=i(16215),b=i.n(y),x=i(9063),j=i(84692),v=i(68498),w=i(82662),k=i(35250);function O(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function M(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?O(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function E(e){let{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:r}=e,a=(0,x.Z)(),{layer:o}=(0,f.U3)("chatgpt_anon_chat_layer"),m=o.get("is_try_it_first_on_login_page_enabled",!1);return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[(0,k.jsx)("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:(0,k.jsx)("h1",{"aria-label":a.formatMessage(C.ariaLabel),children:(0,k.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,k.jsx)("div",{children:w.L})})})}),(0,k.jsxs)("div",{className:"relative flex w-full grow flex-col items-center justify-center",children:[(0,k.jsx)("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:(0,k.jsx)(j.Z,M({},C.pageTitle))}),(0,k.jsx)("div",{className:"mt-5 w-full max-w-[440px]",children:i?(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("div",{className:"flex w-full flex-col gap-3",children:[(0,k.jsx)(P,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E\")",onClick:()=>{d.A.logLogInButtonClicked({provider:"google",location:"Login page"}),(0,h.signIn)("openai",{callbackUrl:n},{prompt:"login",login_hint:(0,c.W_)({idp:"google"})})},children:(0,k.jsx)(j.Z,M({},C.continueWithGoogle))}),(0,k.jsx)(P,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Cpath fill='%23f25022' d='M1 1h9v9H1z'/%3E%3Cpath fill='%2300a4ef' d='M1 11h9v9H1z'/%3E%3Cpath fill='%237fba00' d='M11 1h9v9h-9z'/%3E%3Cpath fill='%23ffb900' d='M11 11h9v9h-9z'/%3E%3C/svg%3E\")",onClick:()=>{d.A.logLogInButtonClicked({provider:"microsoft",location:"Login page"}),(0,h.signIn)("openai",{callbackUrl:n},{prompt:"login",login_hint:(0,c.W_)({idp:"microsoft"})})},children:(0,k.jsx)(j.Z,M({},C.continueWithMicrosoft))}),(0,k.jsx)("div",{className:"my-2 w-full border-t border-black/5"}),(0,k.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,k.jsx)(P,{primary:!0,className:"justify-center",onClick:()=>{d.A.logLogInButtonClicked({provider:"openai",location:"Login page"}),(0,h.signIn)("openai",{callbackUrl:n},{prompt:"login",login_hint:(0,c.W_)({idp:"openai"})})},children:(0,k.jsx)(j.Z,M({},C.logIn))}),(0,k.jsx)(P,{primary:!0,className:"justify-center",onClick:()=>{d.A.logSignUpButtonClicked({provider:"openai",location:"Login page"}),(0,h.signIn)("openai",{callbackUrl:n},{prompt:"login",login_hint:(0,c.W_)({idp:"openai",screen:"signup"})})},children:(0,k.jsx)(j.Z,M({},C.signUp))})]})]})}):(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("div",{className:"grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0",children:[(0,k.jsx)(P,{primary:!0,testid:"login-button",onClick:()=>{d.A.logLogInButtonClicked({provider:"auth0",location:"Login page"}),(0,h.signIn)(t,{callbackUrl:n},{prompt:"login"})},children:(0,k.jsx)(j.Z,M({},C.logIn))}),(0,k.jsx)(P,{primary:!0,as:"button",onClick:()=>{d.A.logSignUpButtonClicked({provider:"auth0",location:"Login page"}),g.bX.setCookie(g.cn.SignupRedirectUrl,n,{maxAge:10800}),(0,h.signIn)(t,{callbackUrl:n},{prompt:"login",screen_hint:"signup"})},children:(0,k.jsx)(j.Z,M({},C.signUp))})]})})}),m?(0,k.jsx)("a",{href:"#",className:"mt-12 text-token-text-secondary underline",onClick:e=>{e.preventDefault(),d.A.logEvent(u.M.authTryItFirstLinkClicked),p.m9.logEvent("chatgpt_auth_try_it_first_link_clicked"),g.bX.setCookie(g.cn.HasClickedOnTryItFirstLink,!0,{maxAge:43200}),b().push("/")},children:(0,k.jsx)(j.Z,M({},C.tryItFirst))}):null]}),(0,k.jsxs)("div",{className:"mt-10 flex flex-col justify-center ",children:[(0,k.jsx)("div",{className:"flex justify-center text-gray-300 md:mb-3",children:(0,k.jsx)(l.nV,{className:"h-[22px] w-auto"})}),(0,k.jsx)(s.VL,{isStorageComplianceEnabled:r})]})]})})}function P(e){let{icon:t,children:i,className:n,onClick:r,testid:a,style:o="new",primary:l=!1}=e;return(0,k.jsxs)("button",{className:(0,m.default)("relative",n,{"btn-neutral flex items-center justify-center gap-3 rounded p-3 text-center text-base":"legacy"===o,"flex h-12 items-center justify-center rounded-md text-center text-base font-medium":"new"===o,"bg-black/5 hover:bg-black/10 dark:bg-[rgba(255,255,255,0.15)] dark:hover:bg-white/20":"new"===o&&!l,"bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]":"new"===o&&l}),"data-testid":a,onClick:r,children:[t?(0,k.jsx)("div",{className:(0,m.default)("h-5 w-5 justify-self-start",{"absolute left-5 top-1/2 -translate-y-1/2":"new"===o}),style:{backgroundImage:t}}):null,(0,k.jsx)("div",{className:(0,m.default)({"relative -top-[1px]":"new"===o}),children:i})]})}let C=(0,v.vU)({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"},tryItFirst:{id:"Login.tryItFirst",defaultMessage:"Try it first"}});var L=i(65733),N=i(77743);i(78374);var I=i(70079);function A(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?A(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):A(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var S=!0;function D(e){var t;let{serviceStatus:i,auth0Provider:n,enableNewAuthFlow:o,cfConnectingIp:l,isStorageComplianceEnabled:s,statsigShowCapacityGate:c}=e,p=(0,y.useRouter)(),{next:f}=p.query,m="string"==typeof f&&f.startsWith("/")?f:"/";p.asPath.includes("#")&&(m+="#"+p.asPath.split("#")[1]);let b=(0,x.Z)(),j=!!(null==i?void 0:i.oof)||!0===c,v=(0,I.useRef)(!1),w="sso"in p.query&&(null===(t=p.query.sso)||void 0===t||t),O=w?p.query.connection:void 0;return((0,I.useEffect)(()=>{if(w&&!j){var e;let t=null===(e=g.bX.getCookie(g.cn.DeviceId))||void 0===e?void 0:e.toString();(0,h.signIn)("openai"===w?"openai":"auth0",{callbackUrl:m},_(_({},t?{device_id:t}:{}),O?{connection:O}:{}))}},[m,w,O,j]),(0,I.useEffect)(()=>{d.A.logEvent(u.M.loggedOutOpenedAuthLogin,{cfConnectingIp:l})},[l]),(0,I.useEffect)(()=>{"#pricing"===window.location.hash&&g.bX.setCookie(g.cn.ShowPaymentModal,!0,{maxAge:21600})},[]),(0,I.useEffect)(()=>{if(v.current)return;v.current=!0;let{inv_ws_name:e,inv_email:t}=p.query;e=Array.isArray(e)?e[0]:e,t=Array.isArray(t)?t[0]:t,e&&t&&L.m.success(b.formatMessage(U.invitedToastMessage,{workspace_name:e,email:t}),{hasCloseButton:!0,duration:600})},[p.query,b]),j)?(0,k.jsx)(r.Z,{}):w?null:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a.Z,{}),(0,k.jsx)(T,{auth0Provider:n,enableNewAuthFlow:o,nextUrl:m,isStorageComplianceEnabled:s})]})}let T=e=>{let{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:r}=e;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(F,{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:r}),!1]})};function F(e){let{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:r}=e,{resolvedTheme:a}=(0,N.F)(),l="dark"===a,s=(0,I.useRef)(null);return(0,I.useEffect)(()=>{null===s.current&&(s.current=document.body.style.backgroundColor);let e=l?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=e,()=>{null!==s.current&&(document.body.style.backgroundColor=s.current)}},[l]),(0,k.jsxs)("div",{className:"flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",children:[(0,k.jsx)(o.O,{}),(0,k.jsx)(E,{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:r})]})}let U=(0,v.vU)({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"},invitedToastMessage:{id:"Login.invitedToastMessage",defaultMessage:"You have been invited to the {workspace_name} workspace! Login or sign up with {email} to accept the invitation."}})},73466:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(72438),r=i(57798),a=i(19841),o=i(35250);let l=["className","openNewTab","type"];function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function c(e){let{className:t,openNewTab:i=!1,type:c="primary"}=e,d=(0,r.Z)(e,l);return(0,o.jsx)("a",function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({rel:"noreferrer",className:(0,a.default)("cursor-pointer font-normal underline","primary"===c&&"text-green-600",t),target:i?"_blank":"_self"},d))}},25800:function(e,t,i){i.d(t,{VL:function(){return y},Wk:function(){return h},jI:function(){return x},xh:function(){return m}});var n,r=i(72438),a=i(25927),o=i(81147),l=i(84692),s=i(68498),c=i(21389),d=i(74922),u=i(73466),g=i(35250);function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach(function(t){(0,r.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}let m=c.Z.div(n||(n=(0,a.Z)(["w-96 flex flex-col flex-auto justify-center items-center"])));function h(e){let{children:t,showTerms:i=!0,isStorageComplianceEnabled:n}=e;return(0,g.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",children:[t,i&&(0,g.jsx)(y,{isStorageComplianceEnabled:n})]})}function y(e){let{isStorageComplianceEnabled:t}=e;return(0,g.jsxs)("div",{className:"flex gap-3 py-3 text-xs text-token-text-tertiary",children:[(0,g.jsx)(u.Z,{href:"https://openai.com/policies/terms-of-use",type:"neutral",openNewTab:!0,children:(0,g.jsx)(l.Z,f({},j.terms))}),(0,g.jsx)(b,{}),(0,g.jsx)(u.Z,{href:"https://openai.com/policies/privacy-policy",openNewTab:!0,type:"neutral",children:(0,g.jsx)(l.Z,f({},j.privacy))}),t&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{}),(0,g.jsx)("button",{className:"underline",onClick:()=>o.vm.openModal(o.B.CookieManagement),children:(0,g.jsx)(l.Z,f({},j.cookies))})]})]})}let b=()=>(0,g.jsx)("span",{className:"text-token-text-tertiary",children:"|"});function x(){return(0,g.jsx)("div",{className:"mb-5",children:(0,g.jsx)(d.nI,{})})}let j=(0,s.vU)({terms:{id:"AuthPage.terms",defaultMessage:"Terms of use"},privacy:{id:"AuthPage.privacy",defaultMessage:"Privacy policy"},cookies:{id:"AuthPage.cookies",defaultMessage:"Manage cookies"}})},41408:function(e,t,i){i.d(t,{O:function(){return O}});var n=i(71138),r=i(9063),a=i(68498),o=i(72438),l=i(85101),s=i(63329),c=i(75208),d=i(19841),u=i(37609),g=i(83737),p=i(59141),f=i.n(p),m=i(70079),h=i(84692),y=i(35250);function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function x(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach(function(t){(0,o.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function j(){let{0:e,1:t}=(0,m.useState)(0),i=(0,m.useRef)(f()(Object.values(w))),{currentLocale:n}=(0,l.b)();return(0,y.jsx)(u.M,{mode:"wait",initial:!1,children:(0,y.jsx)(g.E.div,{className:"-mt-4 flex w-full flex-col pr-5 md:pr-8 lg:pr-10",initial:{opacity:0,y:24},animate:{opacity:1,y:0},exit:{opacity:0,y:-24},transition:{duration:.2},children:(0,y.jsx)(h.Z,x(x({},i.current[e]),{},{values:{title:e=>(0,y.jsx)("p",{className:"font-bold",children:e}),body:e=>{let r=null==e?void 0:e[0];return"string"!=typeof r?null:(0,y.jsx)(v,{text:r,onFinishedTyping:()=>{setTimeout(()=>{t(e=>(e+1)%i.current.length)},2e3)}},n)}}}))},e)})}function v(e){let{text:t,onFinishedTyping:i}=e,n=(0,s.J)(t),r=n.length,{0:a,1:o}=(0,m.useState)(-12),l=(0,m.useRef)(!1);return(0,m.useEffect)(()=>{l.current||a!==r||(i(),l.current=!0)},[a,r,i]),(0,c.Z)(()=>{o(e=>e+1)},40),(0,y.jsxs)("p",{className:"font-normal",children:[n.slice(0,Math.max(a,0)).join(""),(0,y.jsx)("span",{className:(0,d.default)("font-circle",{invisible:a>r+12}),children:"●"})]})}let w=(0,a.vU)({marketingExample1:{id:"PvNRKc",defaultMessage:"<title>Recommend a dish</title><body>to bring to a potluck</body>"},marketingExample2:{id:"x6dDU4",defaultMessage:"<title>Recommend a dish</title><body>to impress a date who's a picky eater</body>"},marketingExample3:{id:"dVTBN5",defaultMessage:"<title>Help me debug</title><body>a Python script automating daily reports</body>"},marketingExample4:{id:"Hlddw+",defaultMessage:"<title>Help me debug</title><body>why the linked list appears empty after I've reversed it</body>"},marketingExample5:{id:"faJr4O",defaultMessage:"<title>Draft an email</title><body>to request a quote from local plumbers</body>"},marketingExample6:{id:"oV5RJ5",defaultMessage:"<title>Draft an email</title><body>requesting a deadline extension for my project</body>"},marketingExample7:{id:"vL3rX1",defaultMessage:"<title>Summarize this article</title><body>into three key points</body>"},marketingExample8:{id:"xo9nQj",defaultMessage:"<title>Summarize this article</title><body>as a table of pros and cons</body>"},marketingExample9:{id:"VVg3aa",defaultMessage:"<title>Write a text</title><body>asking a friend to be my plus-one at a wedding</body>"},marketingExample10:{id:"8Vl7TM",defaultMessage:"<title>Write a text</title><body>that goes with a kitten gif for a friend having a rough day</body>"},marketingExample11:{id:"dXqZbT",defaultMessage:"<title>Suggest fun activities</title><body>for a family of 4 to do indoors on a rainy day</body>"},marketingExample12:{id:"h09XOo",defaultMessage:"<title>Suggest fun activities</title><body>for a team-building day with remote employees</body>"},marketingExample13:{id:"6FcHEa",defaultMessage:"<title>Brainstorm names</title><body>for my fantasy football team</body>"},marketingExample14:{id:"O6iNBu",defaultMessage:"<title>Brainstorm names</title><body>for an orange cat we're adopting from the shelter</body>"},marketingExample15:{id:"uw95Qj",defaultMessage:"<title>Give me ideas</title><body>for what to do with my kids' art</body>"},marketingExample16:{id:"HQTYuP",defaultMessage:"<title>Give me ideas</title><body>for a customer loyalty program in a small bookstore</body>"},marketingExample17:{id:"s3Gh5S",defaultMessage:"<title>Plan a trip</title><body>to see the northern lights in Norway</body>"},marketingExample18:{id:"517NID",defaultMessage:"<title>Plan a trip</title><body>to experience Seoul like a local</body>"},marketingExample19:{id:"EASxoK",defaultMessage:"<title>Write a thank-you note</title><body>to my interviewer</body>"},marketingExample20:{id:"ozMspN",defaultMessage:"<title>Write a thank-you note</title><body>to our babysitter for the last-minute help</body>"},marketingExample21:{id:"2o1b9o",defaultMessage:"<title>Help me pick</title><body>a gift for my dad who loves fishing</body>"},marketingExample22:{id:"TysYjq",defaultMessage:"<title>Help me pick</title><body>an outfit that will look good on camera</body>"},marketingExample23:{id:"pVmQs6",defaultMessage:"<title>Improve my post</title><body>for hiring a store associate</body>"},marketingExample24:{id:"mvvlCD",defaultMessage:"<title>Improve my post</title><body>for selling a used vacuum in good condition</body>"}});var k=i(82662);function O(){var e;let t=(0,r.Z)(),i=null!==(e=(0,n.L)(()=>!0))&&void 0!==e&&e;return(0,y.jsxs)("div",{className:"relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8",children:[(0,y.jsx)("nav",{className:"left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8",children:(0,y.jsx)("h1",{"aria-label":t.formatMessage(M.ariaLabel),children:(0,y.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,y.jsx)("div",{children:k.L})})})}),(0,y.jsx)("div",{className:"flex flex-col text-[32px] leading-[1.2] md:text-[40px]","aria-hidden":"true",children:i?(0,y.jsx)(j,{}):null})]})}let M=(0,a.vU)({ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"}})},82662:function(e,t,i){i.d(t,{L:function(){return r}});var n=i(35250);let r=(0,n.jsxs)(n.Fragment,{children:["ChatGPT ",(0,n.jsx)("span",{className:"font-circle",children:"●"})]})},63329:function(e,t,i){i.d(t,{J:function(){return n}});function n(e){try{let t=new Intl.Segmenter("en-US",{granularity:"grapheme"}).segment(e),i=[];for(let e of t)i.push(e.segment);return i}catch{return e.split("")}}},75208:function(e,t,i){i.d(t,{Z:function(){return r}});var n=i(70079);function r(e,t){let i=(0,n.useRef)(e);(0,n.useEffect)(()=>{i.current=e},[e]),(0,n.useEffect)(()=>{if(null!=t){let e=window.setInterval(function(){i.current()},t);return()=>clearInterval(e)}},[t])}}}]);
//# sourceMappingURL=6111-dfb67153f7d73fa3.js.map