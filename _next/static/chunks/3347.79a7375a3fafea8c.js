"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3347,1014],{81014:function(e,t,n){n.d(t,{A8:function(){return g},K8:function(){return m},NK:function(){return S},Y5:function(){return w},a2:function(){return y},dN:function(){return f},k4:function(){return p},lw:function(){return d},mH:function(){return _},mO:function(){return l},pV:function(){return h},qE:function(){return O},tF:function(){return $},v5:function(){return v},zq:function(){return b}});var r=n(98601),o=n(16351),c=n(72409),i=n(82363),u=n(23047);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let l=async e=>{let{queryKey:t}=e,[n,r]=t;if(r.length<2)return[];let i=new URLSearchParams({query_fragment:r});return c.c.get(`${o.rq}/suggestions?${i.toString()}`).then(e=>e.suggestions).catch(()=>[])};async function f(e){let{threadId:t,sessionId:n,query:r,agentSettingsOverrides:u,metadata:a}=e,l=d(u),f=t?`${o.rq}/threads/${t}/turns?blocking=false`:`${o.rq}/turns?nonce=${n}`;u.emulated_location&&(a=s(s({},a),u.emulated_location));let g=new PerformanceObserver(e=>{let t=e.getEntriesByName(f,"resource");if(t.length){let e=t[0];if(e.connectEnd){let t=e.connectEnd-e.fetchStart;i.U.addAction("sonic.web.home.new_turn_connection_time",{durationMs:t})}g.disconnect()}});return g.observe({type:"resource"}),c.c.post(f,s(s({},l),{},{turn:{user_query:r},user_metadata:a}))}async function g(){return c.c.delete(`${o.rq}/threads`)}function d(e){return{settings_overrides:{search_results:{search_engines:e.use_labrador?{bing:{}}:{bing:{ranking_model:null,rrf_alpha:1,rrf_input_threshold:0},labrador:null}},model_response:{enable_multimodal:e.show_image_to_model,completion_model:e.completion_model?{model:e.completion_model,clip_model:"@mmapi",direct_connection_urls:[]}:{}}},base_config:e.base_config??u.l.SCALLION,eval_preset:e.eval_preset}}async function m(e){let{threadId:t,threadUserId:n,routePrefix:r}=e,i=o.rq;r&&(i+=r);let u=new URL(`${i}/threads/${t}/with_turns`);return n&&u.searchParams.append("thread_user_id",n),await c.c.get(u.toString())}async function p(e){let t=new FormData;return t.append("feedback",JSON.stringify({thread_id:e.threadId,turn_index:e.turnIndex,rating:e.rating,search_query:e.searchQuery,text:e.text,model_instructions:e.modelInstructions,tags:e.tags,user_email:e.userEmail})),e.screenshot&&t.append("file",new File([e.screenshot],"screenshot.jpeg",{type:"image/jpeg"})),c.c.post(`${o.rq}/feedback/turns`,t)}async function _(e,t){return c.c.post(`${o.rq}/threads/${e}/turns/${t}/images_try_hard`)}async function h(){return c.c.get(`${o.rq}/feedback/turns`)}async function y(e,t){return c.c.get(`${o.rq}/feedback/turns/${e}/${t}`)}async function b(e,t){return c.c.get(`${o.rq}/feedback/links/${e}/${t}`)}async function S(e){let t=new FormData;return e.screenshot&&t.append("file",new File([e.screenshot],"screenshot.jpeg",{type:"image/jpeg"})),t.append("feedback",JSON.stringify({thread_id:e.threadId,url:e.url,title:e.title,snippet:e.snippet,rating:e.rating,search_query:e.searchQuery,text:e.text,tags:e.tags,user_email:e.userEmail})),c.c.post(`${o.rq}/feedback/links`,t)}function w(e){let t=d(e.agentSettingsOverrides);c.c.post(`${o.rq}/prefetch`,s(s({},t),{},{turn:{user_query:e.query},user_metadata:e.metadata}))}function O(){return c.c.get(`${o.rq}/healthcheck`)}function v(){return c.c.post(`${o.rq}/waitlist`)}function $(){return c.c.delete(`${o.rq}/waitlist`)}},23047:function(e,t,n){var r;n.d(t,{l:function(){return o}});let o=((r={}).SCALLION="scallion",r.SCALLION_RC="scallion-rc",r)},95628:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(92379);function o(e,t,n){try{let r=JSON.parse(window.localStorage.getItem(e)??"");if(!n(r))return t;return r}catch(e){return t}}function c(e,t,n){let{0:c,1:i}=(0,r.useState)(()=>o(e,t,n));return(0,r.useEffect)(()=>{i(()=>o(e,t,n))},[e,t,n]),(0,r.useEffect)(()=>{window.localStorage.setItem(e,JSON.stringify(c))},[e,c]),[c,i]}},10798:function(e,t,n){n.d(t,{OR:function(){return _},Ws:function(){return g},lM:function(){return m},nf:function(){return f},rV:function(){return p}});var r=n(13249),o=n(92379),c=n(95628),i=n(651);function u(e){return"object"==typeof e&&"boolean"==typeof e.suggestions}let a={version:0,useLocation:!1};function s(e){try{let t=r.m.getItem(r.F.SearchSettings,{userId:e});return"number"==typeof t.version&&t.version>=a.version?t:a}catch{return a}}let l=(0,o.createContext)({settings:a,setSettings:()=>{}}),f=e=>{let{userId:t,children:n}=e,{0:c,1:u}=(0,o.useState)(()=>s(t));return(0,o.useEffect)(()=>u(s(t)),[t]),(0,o.useEffect)(()=>{r.m.setItem(r.F.SearchSettings,c,{userId:t})},[c,t]),(0,i.jsx)(l.Provider,{value:{settings:c,setSettings:u},children:n})},g={suggestions:!0,showInlineFollowups:!1},d=(0,o.createContext)({settings:g,setSettings:()=>{}}),m=e=>{let{userId:t,children:n}=e,[r,o]=(0,c.ZP)(`_INTERNAL_${t}_SONIC_SETTINGS_1717364375`,g,u);return(0,i.jsx)(d.Provider,{value:{settings:r,setSettings:o},children:n})};function p(){let{settings:e,setSettings:t}=(0,o.useContext)(l);return[e,t]}function _(){let{settings:e,setSettings:t}=(0,o.useContext)(d);return[e,t]}},5132:function(e,t,n){n.d(t,{XB:function(){return s},XM:function(){return a},ri:function(){return l},t5:function(){return f},to:function(){return o}});var r=n(65012);let o=2592e3,c="last_checked_loc",i="last_denied_loc",u={latitude:null,longitude:null,locationAccuracy:null};async function a(){return navigator?.permissions?await navigator.permissions.query({name:"geolocation"}):null}async function s(e){let{enabled:t}=e;if(!t)return l();if((await a())?.state!=="granted"){let e=localStorage.getItem(c);if(e){let t=Number(e);if(Date.now()-864e5<t)try{return JSON.parse(r.bX.getCookie(r.cn.LastLocation))}catch{}}}let n=localStorage.getItem(i);if(n){let e=Number(n);if(Date.now()-36e5<e)return null}return await new Promise(e=>{navigator.geolocation.getCurrentPosition(t=>{let n={latitude:t.coords.latitude,longitude:t.coords.longitude,locationAccuracy:t.coords.accuracy};r.bX.setCookie(r.cn.LastLocation,JSON.stringify(n),{maxAge:o}),localStorage.setItem(c,Date.now().toString()),e(n)},()=>{localStorage.setItem(i,Date.now().toString()),e(l())},{enableHighAccuracy:!0,maximumAge:0})})}function l(){return r.bX.setCookie(r.cn.LastLocation,JSON.stringify(u),{maxAge:o}),localStorage.removeItem(c),localStorage.removeItem(i),null}function f(e,t){return`https://chatgpt.com/search/evals/permalink/${e}/${t}`}}}]);
//# sourceMappingURL=3347.79a7375a3fafea8c.js.map