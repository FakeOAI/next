(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2490],{40188:function(e,t,i){var n=i(61984),r=i(69191);e.exports=function(e){return r(n(e))}},14545:function(e){var t=Math.floor,i=Math.random;e.exports=function(e,n){return e+t(i()*(n-e+1))}},83082:function(e,t,i){var n=i(69191),r=i(52657);e.exports=function(e){return n(r(e))}},69588:function(e,t,i){var n=i(67631);e.exports=function(e,t){return n(t,function(t){return e[t]})}},61984:function(e){e.exports=function(e,t){var i=-1,n=e.length;for(t||(t=Array(n));++i<n;)t[i]=e[i];return t}},69191:function(e,t,i){var n=i(14545);e.exports=function(e,t){var i=-1,r=e.length,o=r-1;for(t=void 0===t?r:t;++i<t;){var a=n(i,o),l=e[a];e[a]=e[i],e[i]=l}return e.length=t,e}},59141:function(e,t,i){var n=i(40188),r=i(83082),o=i(2428);e.exports=function(e){return(o(e)?n:r)(e)}},52657:function(e,t,i){var n=i(69588),r=i(58834);e.exports=function(e){return null==e?[]:n(e,r(e))}},62490:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSP:function(){return Z},default:function(){return W},messages:function(){return B}});var n=i(98601),r=i(23148),o=i(195),a=i(43121),l=i(11550),s=i(25162),c=i(35088),u=i(58695),d=i(4132),g=i(99976),f=i(61619),p=i(65012),m=i(177),h=i(82826),y=i(88667),x=i(45120),b=i(19841),v=i(87161),j=i(34977),k=i.n(j),w=i(75172),O=i(62984),M=i(68306),E=i(56919),P=i(651);function C(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function L(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?C(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function N(e){let{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:r}=e,o=(0,w.Z)(),{layer:a}=(0,x.U3)("3637408529"),l=a.get("is_try_it_first_on_login_page_enabled",!1),b=(0,h.L)();return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[(0,P.jsx)("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:(0,P.jsx)("h1",{"aria-label":o.formatMessage(I.ariaLabel),children:(0,P.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,P.jsx)("div",{children:E.L})})})}),(0,P.jsxs)("div",{className:"relative flex w-full grow flex-col items-center justify-center",children:[(0,P.jsx)("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:(0,P.jsx)(O.Z,L({},I.pageTitle))}),(0,P.jsx)("div",{className:"mt-5 w-full max-w-[440px]",children:i?(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("div",{className:"flex w-full flex-col gap-3",children:[(0,P.jsx)(A,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E\")",onClick:()=>{g.A.logLogInButtonClicked({provider:"google",location:"Login page"}),(0,v.signIn)("openai",{callbackUrl:n},L({prompt:"login",login_hint:(0,u.W_)({idp:"google"})},(0,d.gk)((0,m.f3)())))},children:(0,P.jsx)(O.Z,L({},I.continueWithGoogle))}),(0,P.jsx)(A,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Cpath fill='%23f25022' d='M1 1h9v9H1z'/%3E%3Cpath fill='%2300a4ef' d='M1 11h9v9H1z'/%3E%3Cpath fill='%237fba00' d='M11 1h9v9h-9z'/%3E%3Cpath fill='%23ffb900' d='M11 11h9v9h-9z'/%3E%3C/svg%3E\")",onClick:()=>{g.A.logLogInButtonClicked({provider:"microsoft",location:"Login page"}),(0,v.signIn)("openai",{callbackUrl:n},L({prompt:"login",login_hint:(0,u.W_)({idp:"microsoft"})},(0,d.gk)((0,m.f3)())))},children:(0,P.jsx)(O.Z,L({},I.continueWithMicrosoft))}),(0,P.jsx)("div",{className:"my-2 w-full border-t border-black/5"}),(0,P.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,P.jsx)(A,{blue:!0,className:"justify-center",onClick:()=>{g.A.logLogInButtonClicked({provider:"openai",location:"Login page"}),(0,v.signIn)("openai",{callbackUrl:n},L({prompt:"login",login_hint:(0,u.W_)({idp:"openai"})},(0,d.gk)((0,m.f3)())))},children:(0,P.jsx)(O.Z,L({},I.logIn))}),(0,P.jsx)(A,{blue:!0,className:"justify-center",onClick:()=>{g.A.logSignUpButtonClicked({provider:"openai",location:"Login page"}),(0,v.signIn)("openai",{callbackUrl:n},L({prompt:"login",login_hint:(0,u.W_)({idp:"openai",screen:"signup"})},(0,d.gk)((0,m.f3)())))},children:(0,P.jsx)(O.Z,L({},I.signUp))})]})]})}):(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("div",{className:"grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0",children:[(0,P.jsx)(A,{blue:!0,testid:"login-button",onClick:()=>{g.A.logLogInButtonClicked({provider:t,location:"Login page"});let e=b();(0,v.signIn)(t,{callbackUrl:n},L(L({prompt:"login"},(0,d.gk)((0,m.f3)())),e?{use_email_otp:"true"}:{}))},children:(0,P.jsx)(O.Z,L({},I.logIn))}),(0,P.jsx)(A,{blue:!0,testid:"signup-button",onClick:()=>{g.A.logSignUpButtonClicked({provider:"auth0",location:"Login page"}),p.bX.setCookie(p.cn.SignupRedirectUrl,n,{maxAge:10800}),(0,v.signIn)(t,{callbackUrl:n},L({prompt:"login",screen_hint:"signup"},(0,d.gk)((0,m.f3)())))},children:(0,P.jsx)(O.Z,L({},I.signUp))})]})})}),l?(0,P.jsx)("a",{href:"#",className:"mt-12 text-token-text-secondary underline",onClick:e=>{e.preventDefault(),g.A.logEvent(f.M.authTryItFirstLinkClicked),y.m9.logEvent("chatgpt_auth_try_it_first_link_clicked"),p.bX.setCookie(p.cn.HasClickedOnTryItFirstLink,!0,{maxAge:43200}),k().push("/")},children:(0,P.jsx)(O.Z,L({},I.tryItFirst))}):null]}),(0,P.jsxs)("div",{className:"mt-10 flex flex-col justify-center ",children:[(0,P.jsx)("div",{className:"flex justify-center text-gray-300 md:mb-3",children:(0,P.jsx)(s.nV,{className:"h-[22px] w-auto"})}),(0,P.jsx)(c.VL,{isStorageComplianceEnabled:r})]})]})})}function A(e){let{icon:t,children:i,className:n,onClick:r,testid:o,blue:a=!1}=e;return(0,P.jsxs)(l.z,{color:a?"blue":"primary",size:"large","data-testid":o,onClick:r,className:n,children:[t?(0,P.jsx)("div",{className:(0,b.default)("h-5 w-5 justify-self-start",{}),style:{backgroundImage:t}}):null,(0,P.jsx)("span",{children:i})]})}let I=(0,M.vU)({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"},tryItFirst:{id:"Login.tryItFirst",defaultMessage:"Try it first"}});var _=i(24740),S=i(99661);i(24098);var D=i(92379);function T(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function U(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?T(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):T(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var Z=!0;function W(e){var t;let{serviceStatus:i,auth0Provider:n,enableNewAuthFlow:a,cfConnectingIp:l,isStorageComplianceEnabled:s,statsigShowCapacityGate:c}=e,m=(0,j.useRouter)(),{next:h}=m.query,x="string"==typeof h&&h.startsWith("/")?h:"/";m.asPath.includes("#")&&(x+="#"+m.asPath.split("#")[1]);let b=(0,w.Z)(),k=!!(null==i?void 0:i.oof)||!0===c,O=(0,D.useRef)(!1),M="sso"in m.query&&(null===(t=m.query.sso)||void 0===t||t),E=M?m.query.connection:void 0,C=(0,u._0)((0,y.xb)("1977905538").config.value);return((0,D.useEffect)(()=>{if(M&&!k){var e;let t=null===(e=p.bX.getCookie(p.cn.DeviceId))||void 0===e?void 0:e.toString();(0,v.signIn)("openai"===M?"openai":"auth0",{callbackUrl:x},U(U(U(U({},t?{device_id:t}:{}),E?{connection:E}:{}),(0,d.gk)(t)),(0,u.zC)(C)))}},[x,M,E,k,C]),(0,D.useEffect)(()=>{g.A.logEvent(f.M.loggedOutOpenedAuthLogin,{cfConnectingIp:l})},[l]),(0,D.useEffect)(()=>{"#pricing"===window.location.hash&&p.bX.setCookie(p.cn.ShowPaymentModal,!0,{maxAge:21600})},[]),(0,D.useEffect)(()=>{if(O.current)return;O.current=!0;let{inv_ws_name:e,inv_email:t}=m.query;e=Array.isArray(e)?e[0]:e,t=Array.isArray(t)?t[0]:t,e&&t&&_.m.success(b.formatMessage(B.invitedToastMessage,{workspace_name:e,email:t}),{hasCloseButton:!0,duration:600})},[m.query,b]),k)?(0,P.jsx)(r.Z,{}):M?null:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(o.Z,{}),(0,P.jsx)(F,{auth0Provider:n,enableNewAuthFlow:a,nextUrl:x,isStorageComplianceEnabled:s})]})}let F=e=>{let{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:r}=e;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(G,{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:r}),!1]})};function G(e){let{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:r}=e,{resolvedTheme:o}=(0,S.F)(),l="dark"===o,s=(0,D.useRef)(null);return(0,D.useEffect)(()=>{null===s.current&&(s.current=document.body.style.backgroundColor);let e=l?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=e,()=>{null!==s.current&&(document.body.style.backgroundColor=s.current)}},[l]),(0,P.jsxs)("div",{className:"flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",children:[(0,P.jsx)(a.O,{}),(0,P.jsx)(N,{auth0Provider:t,enableNewAuthFlow:i,nextUrl:n,isStorageComplianceEnabled:r})]})}let B=(0,M.vU)({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"},invitedToastMessage:{id:"Login.invitedToastMessage",defaultMessage:"You have been invited to the {workspace_name} workspace! Login or sign up with {email} to accept the invitation."}})},92609:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(98601),r=i(52088),o=i(19841),a=i(651);let l=["className","openNewTab","type"];function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function c(e){let{className:t,openNewTab:i=!1,type:c="primary"}=e,u=(0,r.Z)(e,l);return(0,a.jsx)("a",function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({rel:"noreferrer",className:(0,o.default)("cursor-pointer font-normal underline","primary"===c&&"text-green-600",t),target:i?"_blank":"_self"},u))}},35088:function(e,t,i){"use strict";i.d(t,{VL:function(){return y},Wk:function(){return h},jI:function(){return b},xh:function(){return m}});var n,r=i(98601),o=i(2346),a=i(31438),l=i(62984),s=i(68306),c=i(15478),u=i(25162),d=i(92609),g=i(651);function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach(function(t){(0,r.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}let m=c.Z.div(n||(n=(0,o.Z)(["w-96 flex flex-col flex-auto justify-center items-center"])));function h(e){let{children:t,showTerms:i=!0,isStorageComplianceEnabled:n}=e;return(0,g.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",children:[t,i&&(0,g.jsx)(y,{isStorageComplianceEnabled:n})]})}function y(e){let{isStorageComplianceEnabled:t}=e;return(0,g.jsxs)("div",{className:"flex gap-3 py-3 text-xs text-token-text-tertiary",children:[(0,g.jsx)(d.Z,{href:"https://openai.com/policies/terms-of-use",type:"neutral",openNewTab:!0,children:(0,g.jsx)(l.Z,p({},v.terms))}),(0,g.jsx)(x,{}),(0,g.jsx)(d.Z,{href:"https://openai.com/policies/privacy-policy",openNewTab:!0,type:"neutral",children:(0,g.jsx)(l.Z,p({},v.privacy))}),t&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{}),(0,g.jsx)("button",{className:"underline",onClick:()=>a.vm.openModal(a.B.CookieManagement),children:(0,g.jsx)(l.Z,p({},v.cookies))})]})]})}let x=()=>(0,g.jsx)("span",{className:"text-token-text-tertiary",children:"|"});function b(){return(0,g.jsx)("div",{className:"mb-5",children:(0,g.jsx)(u.nI,{})})}let v=(0,s.vU)({terms:{id:"AuthPage.terms",defaultMessage:"Terms of use"},privacy:{id:"AuthPage.privacy",defaultMessage:"Privacy policy"},cookies:{id:"AuthPage.cookies",defaultMessage:"Manage cookies"}})},43121:function(e,t,i){"use strict";i.d(t,{O:function(){return O}});var n=i(30474),r=i(75172),o=i(68306),a=i(98601),l=i(43878),s=i(85302),c=i(39696),u=i(19841),d=i(21389),g=i(88600),f=i(59141),p=i.n(f),m=i(92379),h=i(62984),y=i(651);function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach(function(t){(0,a.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function v(){let{0:e,1:t}=(0,m.useState)(0),i=(0,m.useRef)(p()(Object.values(k))),{currentLocale:n}=(0,l.b)();return(0,y.jsx)(d.M,{mode:"wait",initial:!1,children:(0,y.jsx)(g.E.div,{className:"-mt-4 flex w-full flex-col pr-5 md:pr-8 lg:pr-10",initial:{opacity:0,y:24},animate:{opacity:1,y:0},exit:{opacity:0,y:-24},transition:{duration:.2},children:(0,y.jsx)(h.Z,b(b({},i.current[e]),{},{values:{title:e=>(0,y.jsx)("p",{className:"font-bold",children:e}),body:e=>{let r=null==e?void 0:e[0];return"string"!=typeof r?null:(0,y.jsx)(j,{text:r,onFinishedTyping:()=>{setTimeout(()=>{t(e=>(e+1)%i.current.length)},2500)}},n)}}}))},e)})}function j(e){let{text:t,onFinishedTyping:i}=e,n=(0,s.J)(t),r=n.length,{0:o,1:a}=(0,m.useState)(-12),l=(0,m.useRef)(!1);return(0,m.useEffect)(()=>{l.current||o!==r||(i(),l.current=!0)},[o,r,i]),(0,c.Z)(()=>{a(e=>e+1)},40),(0,y.jsxs)("p",{className:"font-normal",children:[n.slice(0,Math.max(o,0)).join(""),(0,y.jsxs)("span",{className:(0,u.default)("font-circle",{invisible:o>r+12}),children:["​","●"]})]})}let k=(0,o.vU)({marketingExample1:{id:"PvNRKc",defaultMessage:"<title>Recommend a dish</title><body>to bring to a potluck</body>"},marketingExample2:{id:"x6dDU4",defaultMessage:"<title>Recommend a dish</title><body>to impress a date who's a picky eater</body>"},marketingExample3:{id:"dVTBN5",defaultMessage:"<title>Help me debug</title><body>a Python script automating daily reports</body>"},marketingExample4:{id:"Hlddw+",defaultMessage:"<title>Help me debug</title><body>why the linked list appears empty after I've reversed it</body>"},marketingExample5:{id:"faJr4O",defaultMessage:"<title>Draft an email</title><body>to request a quote from local plumbers</body>"},marketingExample6:{id:"oV5RJ5",defaultMessage:"<title>Draft an email</title><body>requesting a deadline extension for my project</body>"},marketingExample7:{id:"vL3rX1",defaultMessage:"<title>Summarize this article</title><body>into three key points</body>"},marketingExample8:{id:"xo9nQj",defaultMessage:"<title>Summarize this article</title><body>as a table of pros and cons</body>"},marketingExample9:{id:"VVg3aa",defaultMessage:"<title>Write a text</title><body>asking a friend to be my plus-one at a wedding</body>"},marketingExample10:{id:"8Vl7TM",defaultMessage:"<title>Write a text</title><body>that goes with a kitten gif for a friend having a rough day</body>"},marketingExample11:{id:"dXqZbT",defaultMessage:"<title>Suggest fun activities</title><body>for a family of 4 to do indoors on a rainy day</body>"},marketingExample12:{id:"h09XOo",defaultMessage:"<title>Suggest fun activities</title><body>for a team-building day with remote employees</body>"},marketingExample13:{id:"6FcHEa",defaultMessage:"<title>Brainstorm names</title><body>for my fantasy football team</body>"},marketingExample14:{id:"O6iNBu",defaultMessage:"<title>Brainstorm names</title><body>for an orange cat we're adopting from the shelter</body>"},marketingExample15:{id:"uw95Qj",defaultMessage:"<title>Give me ideas</title><body>for what to do with my kids' art</body>"},marketingExample16:{id:"HQTYuP",defaultMessage:"<title>Give me ideas</title><body>for a customer loyalty program in a small bookstore</body>"},marketingExample17:{id:"s3Gh5S",defaultMessage:"<title>Plan a trip</title><body>to see the northern lights in Norway</body>"},marketingExample18:{id:"517NID",defaultMessage:"<title>Plan a trip</title><body>to experience Seoul like a local</body>"},marketingExample19:{id:"EASxoK",defaultMessage:"<title>Write a thank-you note</title><body>to my interviewer</body>"},marketingExample20:{id:"ozMspN",defaultMessage:"<title>Write a thank-you note</title><body>to our babysitter for the last-minute help</body>"},marketingExample21:{id:"2o1b9o",defaultMessage:"<title>Help me pick</title><body>a gift for my dad who loves fishing</body>"},marketingExample22:{id:"TysYjq",defaultMessage:"<title>Help me pick</title><body>an outfit that will look good on camera</body>"},marketingExample23:{id:"pVmQs6",defaultMessage:"<title>Improve my post</title><body>for hiring a store associate</body>"},marketingExample24:{id:"mvvlCD",defaultMessage:"<title>Improve my post</title><body>for selling a used vacuum in good condition</body>"}});var w=i(56919);function O(){var e;let t=(0,r.Z)(),i=null!==(e=(0,n.L)(()=>!0))&&void 0!==e&&e;return(0,y.jsxs)("div",{className:"relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8",children:[(0,y.jsx)("nav",{className:"left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8",children:(0,y.jsx)("h1",{"aria-label":t.formatMessage(M.ariaLabel),children:(0,y.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,y.jsx)("div",{children:w.L})})})}),(0,y.jsx)("div",{className:"flex flex-col text-[32px] leading-[1.2] md:text-[40px]","aria-hidden":"true",children:i?(0,y.jsx)(v,{}):null})]})}let M=(0,o.vU)({ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"}})},56919:function(e,t,i){"use strict";i.d(t,{L:function(){return r}});var n=i(651);let r=(0,n.jsxs)(n.Fragment,{children:["ChatGPT ",(0,n.jsx)("span",{className:"font-circle",children:"●"})]})},85302:function(e,t,i){"use strict";function n(e){try{let t=new Intl.Segmenter("en-US",{granularity:"grapheme"}).segment(e),i=[];for(let e of t)i.push(e.segment);return i}catch{return e.split("")}}i.d(t,{J:function(){return n}})},39696:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(92379);function r(e,t){let i=(0,n.useRef)(e);(0,n.useEffect)(()=>{i.current=e},[e]),(0,n.useEffect)(()=>{if(null!=t){let e=window.setInterval(function(){i.current()},t);return()=>clearInterval(e)}},[t])}},4132:function(e,t,i){"use strict";i.d(t,{gk:function(){return r}});var n=i(95947);function r(e){return{"ext-statsig-tier":n.uG,"ext-oai-did":e}}},82826:function(e,t,i){"use strict";i.d(t,{L:function(){return r}});var n=i(45120);function r(){let{layer:e}=(0,n.AH)("1346366956");return()=>e.get("use_email_otp",!1)}}}]);
//# sourceMappingURL=2490-5f1cb01438e1b810.js.map