"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6925],{87387:function(e,t,n){n.d(t,{aO:function(){return N},sH:function(){return P},sS:function(){return k}});var r,o=n(2346),s=n(98601),i=n(52088),c=n(99333),a=n(11550),l=n(16779),u=n(73062),d=n(24434),f=n(81014),h=n(23047),g=n(24740),m=n(58025),p=n(78571),y=n(56032),v=n(19841),S=n(99661),b=n(15478),x=n(52445),O=n(10798),w=n(651);let _=["children"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let P={debug_mode:!1,base_config:h.l.SCALLION,completion_model:void 0,eval_preset:"production",use_labrador:!0,show_image_to_model:!0,emulated_location:void 0};function k(e){let{children:t}=e,n=(0,i.Z)(e,_);return(0,w.jsx)(u.Z.Content,I(I({},n),{},{className:(0,v.default)("z-50",n.className),children:t}))}function N(e){var t;let{onClose:n}=e,{theme:r,setTheme:o}=(0,S.F)(),{data:s}=(0,m.R1)(c.sh.TrainingAllowed),i=(0,m.Gt)(),h=(t=()=>g.m.success("All search logs have been deleted",{duration:3}),(0,y.D)({mutationFn:f.A8,onSuccess:t})),[v,b]=(0,O.rV)(),_=(0,x.m)();return(0,w.jsx)(d.Z,{isOpen:!0,onClose:n,type:"success",size:"custom",className:"max-w-2xl",title:"SearchGPT Settings",showCloseButton:!0,children:(0,w.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,w.jsxs)(A,{children:[(0,w.jsx)(p._,{htmlFor:"theme",className:"text-sm",children:"Theme"}),(0,w.jsxs)(u.Z.Root,{value:r,onValueChange:e=>{e!==r&&o(e)},children:[(0,w.jsxs)(u.Z.Trigger,{id:"theme",children:[(0,w.jsx)(u.Z.Value,{}),(0,w.jsx)(u.Z.Icon,{})]}),(0,w.jsx)(u.Z.Portal,{children:(0,w.jsxs)(k,{children:[(0,w.jsx)(u.Z.Item,{value:"light",children:"Light"}),(0,w.jsx)(u.Z.Item,{value:"dark",children:"Dark"}),(0,w.jsx)(u.Z.Item,{value:"system",children:"System"})]})})]})]}),(0,w.jsxs)("div",{className:"flex flex-col border-t border-token-border-medium pt-1",children:[(0,w.jsxs)(A,{children:[(0,w.jsx)(p._,{htmlFor:"location",className:"text-sm",children:"Share precise location"}),(0,w.jsx)(l.Z,{onChange:e=>{b(I(I({},v),{},{useLocation:e}))},enabled:v.useLocation,disabled:!_||"denied"===_,label:"Use location from browser"})]}),(0,w.jsx)("div",{className:"text-xs text-token-text-secondary",children:"Improve searches using precise location data from your device e.g. “restaurants near me” will try to show you restaurants near your current location. (When precise location is off, we’ll still use general location info based on your IP address so we can help you search local weather, etc.)"})]}),(0,w.jsxs)("div",{className:"flex flex-col border-t border-token-border-medium pt-1",children:[(0,w.jsxs)(A,{children:[(0,w.jsx)(p._,{htmlFor:"trainingAllowed",className:"text-sm",children:"Improve search for everyone"}),(0,w.jsx)(l.Z,{onChange:e=>{i.mutate({setting:c.sh.TrainingAllowed,value:e})},enabled:null==s||s,label:"Use location from browser"})]}),(0,w.jsxs)("div",{className:"text-xs text-token-text-secondary",children:["Allow your conversations to be used to improve our search functionality, which makes our services better for you and everyone who uses them. We take steps to protect your privacy."," ",(0,w.jsx)("a",{className:"underline",href:"https://openai.com/policies/privacy-policy/",target:"_blank",children:"Learn more"})]})]}),(0,w.jsx)("div",{className:"flex flex-col border-t border-token-border-medium pt-2",children:(0,w.jsxs)(A,{children:[(0,w.jsx)(p._,{htmlFor:"deleteLogs",className:"text-sm",children:"Delete search logs"}),(0,w.jsx)(a.z,{color:"danger",loading:h.isPending,onClick:()=>h.mutate(),children:"Delete All"})]})})]})})}let A=b.Z.div(r||(r=(0,o.Z)(["flex justify-between items-center gap-2 min-h-[36px]"])))},81014:function(e,t,n){n.d(t,{A8:function(){return f},K8:function(){return g},NK:function(){return b},Y5:function(){return x},a2:function(){return v},dN:function(){return d},k4:function(){return m},lw:function(){return h},mH:function(){return p},mO:function(){return u},pV:function(){return y},qE:function(){return O},tF:function(){return _},v5:function(){return w},zq:function(){return S}});var r=n(98601),o=n(16351),s=n(72409),i=n(82363),c=n(23047);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let u=async e=>{let{queryKey:t}=e,[n,r]=t;if(r.length<2)return[];let i=new URLSearchParams({query_fragment:r});return s.c.get("".concat(o.rq,"/suggestions?").concat(i.toString())).then(e=>e.suggestions).catch(()=>[])};async function d(e){let{threadId:t,sessionId:n,query:r,agentSettingsOverrides:c,metadata:a}=e,u=h(c),d=t?"".concat(o.rq,"/threads/").concat(t,"/turns?blocking=false"):"".concat(o.rq,"/turns?nonce=").concat(n);c.emulated_location&&(a=l(l({},a),c.emulated_location));let f=new PerformanceObserver(e=>{let t=e.getEntriesByName(d,"resource");if(t.length){let e=t[0];if(e.connectEnd){let t=e.connectEnd-e.fetchStart;i.U.addAction("sonic.web.home.new_turn_connection_time",{durationMs:t})}f.disconnect()}});return f.observe({type:"resource"}),s.c.post(d,l(l({},u),{},{turn:{user_query:r},user_metadata:a}))}async function f(){return s.c.delete("".concat(o.rq,"/threads"))}function h(e){var t;return{settings_overrides:{search_results:{search_engines:e.use_labrador?{bing:{}}:{bing:{ranking_model:null,rrf_alpha:1,rrf_input_threshold:0},labrador:null}},model_response:{enable_multimodal:e.show_image_to_model,completion_model:e.completion_model?{model:e.completion_model,clip_model:"@mmapi",direct_connection_urls:[]}:{}}},base_config:null!==(t=e.base_config)&&void 0!==t?t:c.l.SCALLION,eval_preset:e.eval_preset}}async function g(e){let{threadId:t,threadUserId:n,routePrefix:r}=e,i=o.rq;r&&(i+=r);let c=new URL("".concat(i,"/threads/").concat(t,"/with_turns"));return n&&c.searchParams.append("thread_user_id",n),await s.c.get(c.toString())}async function m(e){let t=new FormData;return t.append("feedback",JSON.stringify({thread_id:e.threadId,turn_index:e.turnIndex,rating:e.rating,search_query:e.searchQuery,text:e.text,model_instructions:e.modelInstructions,tags:e.tags,user_email:e.userEmail})),e.screenshot&&t.append("file",new File([e.screenshot],"screenshot.jpeg",{type:"image/jpeg"})),s.c.post("".concat(o.rq,"/feedback/turns"),t)}async function p(e,t){return s.c.post("".concat(o.rq,"/threads/").concat(e,"/turns/").concat(t,"/images_try_hard"))}async function y(){return s.c.get("".concat(o.rq,"/feedback/turns"))}async function v(e,t){return s.c.get("".concat(o.rq,"/feedback/turns/").concat(e,"/").concat(t))}async function S(e,t){return s.c.get("".concat(o.rq,"/feedback/links/").concat(e,"/").concat(t))}async function b(e){let t=new FormData;return e.screenshot&&t.append("file",new File([e.screenshot],"screenshot.jpeg",{type:"image/jpeg"})),t.append("feedback",JSON.stringify({thread_id:e.threadId,url:e.url,title:e.title,snippet:e.snippet,rating:e.rating,search_query:e.searchQuery,text:e.text,tags:e.tags,user_email:e.userEmail})),s.c.post("".concat(o.rq,"/feedback/links"),t)}function x(e){let t=h(e.agentSettingsOverrides);s.c.post("".concat(o.rq,"/prefetch"),l(l({},t),{},{turn:{user_query:e.query},user_metadata:e.metadata}))}function O(){return s.c.get("".concat(o.rq,"/healthcheck"))}function w(){return s.c.post("".concat(o.rq,"/waitlist"))}function _(){return s.c.delete("".concat(o.rq,"/waitlist"))}},26925:function(e,t,n){n.d(t,{HC:function(){return p},ne:function(){return m},po:function(){return h}});var r,o,s=n(98601),i=n(87387),c=n(25579),a=n(44544),l=n(5132),u=n(651);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let h=((r={})[r.InitialPending=0]="InitialPending",r[r.Active=1]="Active",r);var g=((o=g||{}).HasSearched="oai/apps/hasSearched",o.HasDismissedExtensionUpsell="oai/apps/dismissExtensionUpsell",o.HasDismissedAddToHome="oai/apps/dismissAddToHome",o);class m extends(0,c.R)()(e=>{var t,n,r,o;return{queryInput:null!==(t=null==e?void 0:e.initialQuery)&&void 0!==t?t:"",followupQueryInput:"",initialQuery:null!==(n=null==e?void 0:e.initialQuery)&&void 0!==n?n:void 0,shouldShowComposer:!1,agentSettingsOverrides:null!==(r=null==e?void 0:e.initialAgentSettingsOverrides)&&void 0!==r?r:v(),currentSearch:null!=e&&e.initialQuery?{config:{threadId:null!==(o=e.initialThreadId)&&void 0!==o?o:null,query:e.initialQuery,isFollowup:!1,querySource:"url_query"},state:h.InitialPending}:void 0,lastPrefetchedQuery:void 0,shouldShowAddToHomePopover:!1,hasSearched:"1"===localStorage.getItem(g.HasSearched),hasDismissedExtensionUpsell:"1"===localStorage.getItem(g.HasDismissedExtensionUpsell),hasDismissedAddToHome:"1"===localStorage.getItem(g.HasDismissedAddToHome)}}){setQueryInput(e){this.setState({queryInput:e})}setFollowupQueryInput(e){this.setState({followupQueryInput:e})}setCurrentSearch(e){this.setState({currentSearch:e})}setLastPrefetchedQuery(e){this.setState({lastPrefetchedQuery:e})}handlePendingInitialSearch(){var e;let t=this.getState();if((null===(e=t.currentSearch)||void 0===e?void 0:e.state)===h.InitialPending){let e=f(f({},t.currentSearch),{},{state:h.Active});return this.setState({currentSearch:e}),e}}updateAgentSettingsOverrides(e){let t=f(f({},this.getState().agentSettingsOverrides),e);this.setState({agentSettingsOverrides:t}),t===i.sH?(0,a.deleteCookie)(y):(0,a.setCookie)(y,JSON.stringify(t),{maxAge:l.to})}markHasSearched(){this.getState().hasSearched||(this.setState({hasSearched:!0}),localStorage.setItem(g.HasSearched,"1"))}dismissExtensionUpsell(){this.getState().hasDismissedExtensionUpsell||(this.setState({hasDismissedExtensionUpsell:!0}),localStorage.setItem(g.HasDismissedExtensionUpsell,"1"))}dismissAddToHomePrompt(){this.getState().hasDismissedAddToHome||(this.setState({hasDismissedAddToHome:!0}),localStorage.setItem(g.HasDismissedAddToHome,"1"))}}function p(e){let{children:t,serverProps:n}=e;return(0,u.jsx)(m.Provider,{store:()=>new m(n),children:t})}(0,s.Z)(m,"selectQueryInput",e=>e.queryInput),(0,s.Z)(m,"selectFollowupQueryInput",e=>e.followupQueryInput),(0,s.Z)(m,"selectAgentSettingsOverrides",e=>e.agentSettingsOverrides),(0,s.Z)(m,"selectLastSubmittedQuery",e=>{var t;return null===(t=e.currentSearch)||void 0===t?void 0:t.config.query}),(0,s.Z)(m,"selectWasCurrentSearchPrefetched",e=>{var t;return(null===(t=e.currentSearch)||void 0===t?void 0:t.config.query)===e.lastPrefetchedQuery});let y="agent_overrides";function v(e){let t={};try{let n=(0,a.getCookie)(y,e);"string"==typeof n&&(t=JSON.parse(n))}catch{}return f(f({},i.sH),t)}},23047:function(e,t,n){var r;n.d(t,{l:function(){return o}});let o=((r={}).SCALLION="scallion",r.SCALLION_RC="scallion-rc",r)},95628:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(92379);function o(e,t,n){try{var r;let o=JSON.parse(null!==(r=window.localStorage.getItem(e))&&void 0!==r?r:"");if(!n(o))return t;return o}catch(e){return t}}function s(e,t,n){let{0:s,1:i}=(0,r.useState)(()=>o(e,t,n));return(0,r.useEffect)(()=>{i(()=>o(e,t,n))},[e,t,n]),(0,r.useEffect)(()=>{window.localStorage.setItem(e,JSON.stringify(s))},[e,s]),[s,i]}},52445:function(e,t,n){n.d(t,{m:function(){return a},w:function(){return c}});var r=n(92379),o=n(5132),s=n(651);let i=(0,r.createContext)(null),c=e=>{let{children:t}=e,{0:n,1:c}=(0,r.useState)(null);return(0,r.useEffect)(()=>{(0,o.XM)().then(e=>{null!=e&&(c(e.state),e.onchange=()=>{c(e.state)})})},[]),(0,s.jsx)(i.Provider,{value:n,children:t})};function a(){return(0,r.useContext)(i)}},10798:function(e,t,n){n.d(t,{OR:function(){return p},Ws:function(){return f},lM:function(){return g},nf:function(){return d},rV:function(){return m}});var r=n(13249),o=n(92379),s=n(95628),i=n(651);function c(e){return"object"==typeof e&&"boolean"==typeof e.suggestions}let a={version:0,useLocation:!1};function l(e){try{let t=r.m.getItem(r.F.SearchSettings,{userId:e});return"number"==typeof t.version&&t.version>=a.version?t:a}catch{return a}}let u=(0,o.createContext)({settings:a,setSettings:()=>{}}),d=e=>{let{userId:t,children:n}=e,{0:s,1:c}=(0,o.useState)(()=>l(t));return(0,o.useEffect)(()=>c(l(t)),[t]),(0,o.useEffect)(()=>{r.m.setItem(r.F.SearchSettings,s,{userId:t})},[s,t]),(0,i.jsx)(u.Provider,{value:{settings:s,setSettings:c},children:n})},f={suggestions:!0,showInlineFollowups:!1},h=(0,o.createContext)({settings:f,setSettings:()=>{}}),g=e=>{let{userId:t,children:n}=e,[r,o]=(0,s.ZP)("_INTERNAL_".concat(t,"_").concat("SONIC_SETTINGS_1717364375"),f,c);return(0,i.jsx)(h.Provider,{value:{settings:r,setSettings:o},children:n})};function m(){let{settings:e,setSettings:t}=(0,o.useContext)(u);return[e,t]}function p(){let{settings:e,setSettings:t}=(0,o.useContext)(h);return[e,t]}},5132:function(e,t,n){n.d(t,{XB:function(){return l},XM:function(){return a},ri:function(){return u},t5:function(){return d},to:function(){return o}});var r=n(65012);let o=2592e3,s="last_checked_loc",i="last_denied_loc",c={latitude:null,longitude:null,locationAccuracy:null};async function a(){var e;return null!==(e=navigator)&&void 0!==e&&e.permissions?await navigator.permissions.query({name:"geolocation"}):null}async function l(e){var t;let{enabled:n}=e;if(!n)return u();if((null===(t=await a())||void 0===t?void 0:t.state)!=="granted"){let e=localStorage.getItem(s);if(e){let t=Number(e);if(Date.now()-864e5<t)try{return JSON.parse(r.bX.getCookie(r.cn.LastLocation))}catch{}}}let c=localStorage.getItem(i);if(c){let e=Number(c);if(Date.now()-36e5<e)return null}return await new Promise(e=>{navigator.geolocation.getCurrentPosition(t=>{let n={latitude:t.coords.latitude,longitude:t.coords.longitude,locationAccuracy:t.coords.accuracy};r.bX.setCookie(r.cn.LastLocation,JSON.stringify(n),{maxAge:o}),localStorage.setItem(s,Date.now().toString()),e(n)},()=>{localStorage.setItem(i,Date.now().toString()),e(u())},{enableHighAccuracy:!0,maximumAge:0})})}function u(){return r.bX.setCookie(r.cn.LastLocation,JSON.stringify(c),{maxAge:o}),localStorage.removeItem(s),localStorage.removeItem(i),null}function d(e,t){return"".concat("https://chatgpt.com","/search/evals/permalink/").concat(e,"/").concat(t)}}}]);
//# sourceMappingURL=6925.546ebb413563e8ae.js.map