"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8603],{44039:function(n,e,t){t.d(e,{I:function(){return c}});var r=t(38482),u=t.n(r),l=t(92379),o=t(651);let i=u()(()=>Promise.all([t.e(9504),t.e(4818)]).then(t.bind(t,34818)),{ssr:!1,loadableGenerated:{webpack:()=>[34818]}}),c=n=>{let{children:e,scrollViewClassName:t,scrollAnchorTopOffset:r=0}=n,u=(0,l.useRef)(null);return(0,o.jsx)("div",{className:"h-full",ref:u,children:(0,o.jsx)(i,{className:"h-full",followButtonClassName:"hidden",initialScrollBehavior:"auto",scrollViewClassName:t,scroller:()=>a(u,r)?0:1/0,children:e})})},a=(n,e)=>{let t=function(n){if(!n)return null;let e=n.querySelector('[data-scroll-anchor="true"]');return e?e.getBoundingClientRect().top-n.getBoundingClientRect().top:null}(n.current);return null!=t&&!(t>e)&&!(t<e-60)}},93396:function(n,e,t){t.d(e,{j:function(){return u}});var r=t(45120);function u(){return(0,r.fW)("2067628123").value}},87040:function(n,e,t){t.d(e,{$N:function(){return h},SK:function(){return f},hE:function(){return d},qn:function(){return s}});var r=t(99333),u=t(43878),l=t(58025),o=t(2721),i=t(84760),c=t(58695),a=t(92379);function f(){var n,e;let t=null===(n=(0,l.R1)(r.sh.VoiceName))||void 0===n?void 0:n.data,u=null===(e=(0,l.R1)(r.sh.VoiceMainLanguage))||void 0===e?void 0:e.data;return{voiceName:h(t,s()),voiceMainLanguage:null!=u?u:r.P9.Auto}}function s(){let n=d(),{currentLocale:e}=(0,u.b)();return(0,a.useCallback)(()=>{if(0===n.length)return"juniper";let t=n[0].voice;return e.startsWith("zh")&&(t="cove"),t},[n,e])}function d(){let{session:n}=(0,c.kP)(),{data:e}=(0,i.a)({queryKey:["getUserSettingVoices"],queryFn:()=>o.Z.getUserSettingVoices(),enabled:null!=n});return e?e.voices:[]}function h(n,e){return"sky"===n?"juniper":null!=n?n:e()}},26694:function(n,e,t){t.d(e,{L:function(){return r}});function r(n){let e=Math.floor(n/60),t=Math.floor(e/60),r=String(Math.floor(n)%60).padStart(2,"0"),u=String(e%60).padStart(2,"0");return 0===t?"".concat(u,":").concat(r):"".concat(t,":").concat(u,":").concat(r)}},28086:function(n,e,t){t.d(e,{h:function(){return f}});var r=t(15972),u=t(67437),l=t(86025),o=t(66290),i=t(42420),c=t(58695),a=t(92379);function f(n){let{clientThreadId:e,location:t}=n,f=(0,i.NL)(),{id:s}=(0,u.Xy)(e),d=(0,u.fm)(!0),h=(0,o.Z)();return(0,a.useCallback)(()=>{(0,l.P)((0,c.y_)(f))?(0,r.Xl)(h):d({modelId:s,location:t})},[f,t,s,d,h])}}}]);
//# sourceMappingURL=8603.9556bb74922be830.js.map