(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1522],{40188:function(e,t,n){var i=n(61984),r=n(69191);e.exports=function(e){return r(i(e))}},14545:function(e){var t=Math.floor,n=Math.random;e.exports=function(e,i){return e+t(n()*(i-e+1))}},83082:function(e,t,n){var i=n(69191),r=n(52657);e.exports=function(e){return i(r(e))}},69588:function(e,t,n){var i=n(67631);e.exports=function(e,t){return i(t,function(t){return e[t]})}},61984:function(e){e.exports=function(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}},69191:function(e,t,n){var i=n(14545);e.exports=function(e,t){var n=-1,r=e.length,o=r-1;for(t=void 0===t?r:t;++n<t;){var a=i(n,o),l=e[a];e[a]=e[n],e[n]=l}return e.length=t,e}},59141:function(e,t,n){var i=n(40188),r=n(83082),o=n(2428);e.exports=function(e){return(o(e)?i:r)(e)}},52657:function(e,t,n){var i=n(69588),r=n(58834);e.exports=function(e){return null==e?[]:i(e,r(e))}},91522:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return Z},default:function(){return W},messages:function(){return B}});var i=n(94521),r=n(4091),o=n(81652),a=n(96033),l=n(5443),s=n(55257),c=n(60351),u=n(50406),d=n(53985),g=n(93747),f=n(15236),p=n(27033),m=n(58328),h=n(47858),y=n(48580),x=n(12214),b=n(19841),v=n(83263),j=n(43128),k=n.n(j),w=n(75172),O=n(62984),M=n(68306),E=n(6136),P=n(651);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function N(e){let{auth0Provider:t,enableNewAuthFlow:n,nextUrl:i,isStorageComplianceEnabled:r}=e,o=(0,w.Z)(),{layer:a}=(0,x.U3)("chatgpt_anon_chat_layer"),l=a.get("is_try_it_first_on_login_page_enabled",!1),b=(0,h.L)();return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[(0,P.jsx)("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:(0,P.jsx)("h1",{"aria-label":o.formatMessage(I.ariaLabel),children:(0,P.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,P.jsx)("div",{children:E.L})})})}),(0,P.jsxs)("div",{className:"relative flex w-full grow flex-col items-center justify-center",children:[(0,P.jsx)("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:(0,P.jsx)(O.Z,L({},I.pageTitle))}),(0,P.jsx)("div",{className:"mt-5 w-full max-w-[440px]",children:n?(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("div",{className:"flex w-full flex-col gap-3",children:[(0,P.jsx)(A,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E\")",onClick:()=>{g.A.logLogInButtonClicked({provider:"google",location:"Login page"}),(0,v.signIn)("openai",{callbackUrl:i},L({prompt:"login",login_hint:(0,u.W_)({idp:"google"})},(0,d.gk)((0,m.f3)())))},children:(0,P.jsx)(O.Z,L({},I.continueWithGoogle))}),(0,P.jsx)(A,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Cpath fill='%23f25022' d='M1 1h9v9H1z'/%3E%3Cpath fill='%2300a4ef' d='M1 11h9v9H1z'/%3E%3Cpath fill='%237fba00' d='M11 1h9v9h-9z'/%3E%3Cpath fill='%23ffb900' d='M11 11h9v9h-9z'/%3E%3C/svg%3E\")",onClick:()=>{g.A.logLogInButtonClicked({provider:"microsoft",location:"Login page"}),(0,v.signIn)("openai",{callbackUrl:i},L({prompt:"login",login_hint:(0,u.W_)({idp:"microsoft"})},(0,d.gk)((0,m.f3)())))},children:(0,P.jsx)(O.Z,L({},I.continueWithMicrosoft))}),(0,P.jsx)("div",{className:"my-2 w-full border-t border-black/5"}),(0,P.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,P.jsx)(A,{blue:!0,className:"justify-center",onClick:()=>{g.A.logLogInButtonClicked({provider:"openai",location:"Login page"}),(0,v.signIn)("openai",{callbackUrl:i},L({prompt:"login",login_hint:(0,u.W_)({idp:"openai"})},(0,d.gk)((0,m.f3)())))},children:(0,P.jsx)(O.Z,L({},I.logIn))}),(0,P.jsx)(A,{blue:!0,className:"justify-center",onClick:()=>{g.A.logSignUpButtonClicked({provider:"openai",location:"Login page"}),(0,v.signIn)("openai",{callbackUrl:i},L({prompt:"login",login_hint:(0,u.W_)({idp:"openai",screen:"signup"})},(0,d.gk)((0,m.f3)())))},children:(0,P.jsx)(O.Z,L({},I.signUp))})]})]})}):(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("div",{className:"grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0",children:[(0,P.jsx)(A,{blue:!0,testid:"login-button",onClick:()=>{g.A.logLogInButtonClicked({provider:t,location:"Login page"});let e=b();(0,v.signIn)(t,{callbackUrl:i},L(L({prompt:"login"},(0,d.gk)((0,m.f3)())),e?{use_email_otp:"true"}:{}))},children:(0,P.jsx)(O.Z,L({},I.logIn))}),(0,P.jsx)(A,{blue:!0,onClick:()=>{g.A.logSignUpButtonClicked({provider:"auth0",location:"Login page"}),p.bX.setCookie(p.cn.SignupRedirectUrl,i,{maxAge:10800}),(0,v.signIn)(t,{callbackUrl:i},L({prompt:"login",screen_hint:"signup"},(0,d.gk)((0,m.f3)())))},children:(0,P.jsx)(O.Z,L({},I.signUp))})]})})}),l?(0,P.jsx)("a",{href:"#",className:"mt-12 text-token-text-secondary underline",onClick:e=>{e.preventDefault(),g.A.logEvent(f.M.authTryItFirstLinkClicked),y.m9.logEvent("chatgpt_auth_try_it_first_link_clicked"),p.bX.setCookie(p.cn.HasClickedOnTryItFirstLink,!0,{maxAge:43200}),k().push("/")},children:(0,P.jsx)(O.Z,L({},I.tryItFirst))}):null]}),(0,P.jsxs)("div",{className:"mt-10 flex flex-col justify-center ",children:[(0,P.jsx)("div",{className:"flex justify-center text-gray-300 md:mb-3",children:(0,P.jsx)(s.nV,{className:"h-[22px] w-auto"})}),(0,P.jsx)(c.VL,{isStorageComplianceEnabled:r})]})]})})}function A(e){let{icon:t,children:n,className:i,onClick:r,testid:o,blue:a=!1}=e;return(0,P.jsxs)(l.z,{color:a?"blue":"primary",size:"large","data-testid":o,onClick:r,className:i,children:[t?(0,P.jsx)("div",{className:(0,b.default)("h-5 w-5 justify-self-start",{}),style:{backgroundImage:t}}):null,(0,P.jsx)("span",{children:n})]})}let I=(0,M.vU)({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"},tryItFirst:{id:"Login.tryItFirst",defaultMessage:"Try it first"}});var _=n(94982),S=n(64331);n(40319);var D=n(92379);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Z=!0;function W(e){var t;let{serviceStatus:n,auth0Provider:i,enableNewAuthFlow:a,cfConnectingIp:l,isStorageComplianceEnabled:s,statsigShowCapacityGate:c}=e,u=(0,j.useRouter)(),{next:m}=u.query,h="string"==typeof m&&m.startsWith("/")?m:"/";u.asPath.includes("#")&&(h+="#"+u.asPath.split("#")[1]);let y=(0,w.Z)(),x=!!(null==n?void 0:n.oof)||!0===c,b=(0,D.useRef)(!1),k="sso"in u.query&&(null===(t=u.query.sso)||void 0===t||t),O=k?u.query.connection:void 0;return((0,D.useEffect)(()=>{if(k&&!x){var e;let t=null===(e=p.bX.getCookie(p.cn.DeviceId))||void 0===e?void 0:e.toString();(0,v.signIn)("openai"===k?"openai":"auth0",{callbackUrl:h},U(U(U({},t?{device_id:t}:{}),O?{connection:O}:{}),(0,d.gk)(t)))}},[h,k,O,x]),(0,D.useEffect)(()=>{g.A.logEvent(f.M.loggedOutOpenedAuthLogin,{cfConnectingIp:l})},[l]),(0,D.useEffect)(()=>{"#pricing"===window.location.hash&&p.bX.setCookie(p.cn.ShowPaymentModal,!0,{maxAge:21600})},[]),(0,D.useEffect)(()=>{if(b.current)return;b.current=!0;let{inv_ws_name:e,inv_email:t}=u.query;e=Array.isArray(e)?e[0]:e,t=Array.isArray(t)?t[0]:t,e&&t&&_.m.success(y.formatMessage(B.invitedToastMessage,{workspace_name:e,email:t}),{hasCloseButton:!0,duration:600})},[u.query,y]),x)?(0,P.jsx)(r.Z,{}):k?null:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(o.Z,{}),(0,P.jsx)(F,{auth0Provider:i,enableNewAuthFlow:a,nextUrl:h,isStorageComplianceEnabled:s})]})}let F=e=>{let{auth0Provider:t,enableNewAuthFlow:n,nextUrl:i,isStorageComplianceEnabled:r}=e;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(G,{auth0Provider:t,enableNewAuthFlow:n,nextUrl:i,isStorageComplianceEnabled:r}),!1]})};function G(e){let{auth0Provider:t,enableNewAuthFlow:n,nextUrl:i,isStorageComplianceEnabled:r}=e,{resolvedTheme:o}=(0,S.F)(),l="dark"===o,s=(0,D.useRef)(null);return(0,D.useEffect)(()=>{null===s.current&&(s.current=document.body.style.backgroundColor);let e=l?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=e,()=>{null!==s.current&&(document.body.style.backgroundColor=s.current)}},[l]),(0,P.jsxs)("div",{className:"flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",children:[(0,P.jsx)(a.O,{}),(0,P.jsx)(N,{auth0Provider:t,enableNewAuthFlow:n,nextUrl:i,isStorageComplianceEnabled:r})]})}let B=(0,M.vU)({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"},invitedToastMessage:{id:"Login.invitedToastMessage",defaultMessage:"You have been invited to the {workspace_name} workspace! Login or sign up with {email} to accept the invitation."}})},26675:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(94521),r=n(17379),o=n(19841),a=n(651);let l=["className","openNewTab","type"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function c(e){let{className:t,openNewTab:n=!1,type:c="primary"}=e,u=(0,r.Z)(e,l);return(0,a.jsx)("a",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({rel:"noreferrer",className:(0,o.default)("cursor-pointer font-normal underline","primary"===c&&"text-green-600",t),target:n?"_blank":"_self"},u))}},60351:function(e,t,n){"use strict";n.d(t,{VL:function(){return y},Wk:function(){return h},jI:function(){return b},xh:function(){return m}});var i,r=n(94521),o=n(41141),a=n(55371),l=n(62984),s=n(68306),c=n(74091),u=n(55257),d=n(26675),g=n(651);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let m=c.Z.div(i||(i=(0,o.Z)(["w-96 flex flex-col flex-auto justify-center items-center"])));function h(e){let{children:t,showTerms:n=!0,isStorageComplianceEnabled:i}=e;return(0,g.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",children:[t,n&&(0,g.jsx)(y,{isStorageComplianceEnabled:i})]})}function y(e){let{isStorageComplianceEnabled:t}=e;return(0,g.jsxs)("div",{className:"flex gap-3 py-3 text-xs text-token-text-tertiary",children:[(0,g.jsx)(d.Z,{href:"https://openai.com/policies/terms-of-use",type:"neutral",openNewTab:!0,children:(0,g.jsx)(l.Z,p({},v.terms))}),(0,g.jsx)(x,{}),(0,g.jsx)(d.Z,{href:"https://openai.com/policies/privacy-policy",openNewTab:!0,type:"neutral",children:(0,g.jsx)(l.Z,p({},v.privacy))}),t&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{}),(0,g.jsx)("button",{className:"underline",onClick:()=>a.vm.openModal(a.B.CookieManagement),children:(0,g.jsx)(l.Z,p({},v.cookies))})]})]})}let x=()=>(0,g.jsx)("span",{className:"text-token-text-tertiary",children:"|"});function b(){return(0,g.jsx)("div",{className:"mb-5",children:(0,g.jsx)(u.nI,{})})}let v=(0,s.vU)({terms:{id:"AuthPage.terms",defaultMessage:"Terms of use"},privacy:{id:"AuthPage.privacy",defaultMessage:"Privacy policy"},cookies:{id:"AuthPage.cookies",defaultMessage:"Manage cookies"}})},96033:function(e,t,n){"use strict";n.d(t,{O:function(){return O}});var i=n(93180),r=n(75172),o=n(68306),a=n(94521),l=n(95126),s=n(34910),c=n(6037),u=n(19841),d=n(7290),g=n(556),f=n(59141),p=n.n(f),m=n(92379),h=n(62984),y=n(651);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(){let{0:e,1:t}=(0,m.useState)(0),n=(0,m.useRef)(p()(Object.values(k))),{currentLocale:i}=(0,l.b)();return(0,y.jsx)(d.M,{mode:"wait",initial:!1,children:(0,y.jsx)(g.E.div,{className:"-mt-4 flex w-full flex-col pr-5 md:pr-8 lg:pr-10",initial:{opacity:0,y:24},animate:{opacity:1,y:0},exit:{opacity:0,y:-24},transition:{duration:.2},children:(0,y.jsx)(h.Z,b(b({},n.current[e]),{},{values:{title:e=>(0,y.jsx)("p",{className:"font-bold",children:e}),body:e=>{let r=null==e?void 0:e[0];return"string"!=typeof r?null:(0,y.jsx)(j,{text:r,onFinishedTyping:()=>{setTimeout(()=>{t(e=>(e+1)%n.current.length)},2500)}},i)}}}))},e)})}function j(e){let{text:t,onFinishedTyping:n}=e,i=(0,s.J)(t),r=i.length,{0:o,1:a}=(0,m.useState)(-12),l=(0,m.useRef)(!1);return(0,m.useEffect)(()=>{l.current||o!==r||(n(),l.current=!0)},[o,r,n]),(0,c.Z)(()=>{a(e=>e+1)},40),(0,y.jsxs)("p",{className:"font-normal",children:[i.slice(0,Math.max(o,0)).join(""),(0,y.jsxs)("span",{className:(0,u.default)("font-circle",{invisible:o>r+12}),children:["​","●"]})]})}let k=(0,o.vU)({marketingExample1:{id:"PvNRKc",defaultMessage:"<title>Recommend a dish</title><body>to bring to a potluck</body>"},marketingExample2:{id:"x6dDU4",defaultMessage:"<title>Recommend a dish</title><body>to impress a date who's a picky eater</body>"},marketingExample3:{id:"dVTBN5",defaultMessage:"<title>Help me debug</title><body>a Python script automating daily reports</body>"},marketingExample4:{id:"Hlddw+",defaultMessage:"<title>Help me debug</title><body>why the linked list appears empty after I've reversed it</body>"},marketingExample5:{id:"faJr4O",defaultMessage:"<title>Draft an email</title><body>to request a quote from local plumbers</body>"},marketingExample6:{id:"oV5RJ5",defaultMessage:"<title>Draft an email</title><body>requesting a deadline extension for my project</body>"},marketingExample7:{id:"vL3rX1",defaultMessage:"<title>Summarize this article</title><body>into three key points</body>"},marketingExample8:{id:"xo9nQj",defaultMessage:"<title>Summarize this article</title><body>as a table of pros and cons</body>"},marketingExample9:{id:"VVg3aa",defaultMessage:"<title>Write a text</title><body>asking a friend to be my plus-one at a wedding</body>"},marketingExample10:{id:"8Vl7TM",defaultMessage:"<title>Write a text</title><body>that goes with a kitten gif for a friend having a rough day</body>"},marketingExample11:{id:"dXqZbT",defaultMessage:"<title>Suggest fun activities</title><body>for a family of 4 to do indoors on a rainy day</body>"},marketingExample12:{id:"h09XOo",defaultMessage:"<title>Suggest fun activities</title><body>for a team-building day with remote employees</body>"},marketingExample13:{id:"6FcHEa",defaultMessage:"<title>Brainstorm names</title><body>for my fantasy football team</body>"},marketingExample14:{id:"O6iNBu",defaultMessage:"<title>Brainstorm names</title><body>for an orange cat we're adopting from the shelter</body>"},marketingExample15:{id:"uw95Qj",defaultMessage:"<title>Give me ideas</title><body>for what to do with my kids' art</body>"},marketingExample16:{id:"HQTYuP",defaultMessage:"<title>Give me ideas</title><body>for a customer loyalty program in a small bookstore</body>"},marketingExample17:{id:"s3Gh5S",defaultMessage:"<title>Plan a trip</title><body>to see the northern lights in Norway</body>"},marketingExample18:{id:"517NID",defaultMessage:"<title>Plan a trip</title><body>to experience Seoul like a local</body>"},marketingExample19:{id:"EASxoK",defaultMessage:"<title>Write a thank-you note</title><body>to my interviewer</body>"},marketingExample20:{id:"ozMspN",defaultMessage:"<title>Write a thank-you note</title><body>to our babysitter for the last-minute help</body>"},marketingExample21:{id:"2o1b9o",defaultMessage:"<title>Help me pick</title><body>a gift for my dad who loves fishing</body>"},marketingExample22:{id:"TysYjq",defaultMessage:"<title>Help me pick</title><body>an outfit that will look good on camera</body>"},marketingExample23:{id:"pVmQs6",defaultMessage:"<title>Improve my post</title><body>for hiring a store associate</body>"},marketingExample24:{id:"mvvlCD",defaultMessage:"<title>Improve my post</title><body>for selling a used vacuum in good condition</body>"}});var w=n(6136);function O(){var e;let t=(0,r.Z)(),n=null!==(e=(0,i.L)(()=>!0))&&void 0!==e&&e;return(0,y.jsxs)("div",{className:"relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8",children:[(0,y.jsx)("nav",{className:"left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8",children:(0,y.jsx)("h1",{"aria-label":t.formatMessage(M.ariaLabel),children:(0,y.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,y.jsx)("div",{children:w.L})})})}),(0,y.jsx)("div",{className:"flex flex-col text-[32px] leading-[1.2] md:text-[40px]","aria-hidden":"true",children:n?(0,y.jsx)(v,{}):null})]})}let M=(0,o.vU)({ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"}})},6136:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var i=n(651);let r=(0,i.jsxs)(i.Fragment,{children:["ChatGPT ",(0,i.jsx)("span",{className:"font-circle",children:"●"})]})},34910:function(e,t,n){"use strict";function i(e){try{let t=new Intl.Segmenter("en-US",{granularity:"grapheme"}).segment(e),n=[];for(let e of t)n.push(e.segment);return n}catch{return e.split("")}}n.d(t,{J:function(){return i}})},6037:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(92379);function r(e,t){let n=(0,i.useRef)(e);(0,i.useEffect)(()=>{n.current=e},[e]),(0,i.useEffect)(()=>{if(null!=t){let e=window.setInterval(function(){n.current()},t);return()=>clearInterval(e)}},[t])}},53985:function(e,t,n){"use strict";n.d(t,{gk:function(){return r}});var i=n(24660);function r(e){return{"ext-statsig-tier":i.uG,"ext-oai-did":e}}},47858:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var i=n(12214);function r(){let{layer:e}=(0,i.AH)("chatgpt_login_signup_layer");return()=>e.get("use_email_otp",!1)}}}]);
//# sourceMappingURL=1522-c6f7d92110b476a7.js.map