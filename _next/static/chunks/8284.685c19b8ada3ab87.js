"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8284],{48284:function(e,n,t){t.d(n,{$N:function(){return g},SK:function(){return s},hE:function(){return v},qn:function(){return f}});var u=t(21904),i=t(50663),r=t(43852),o=t(93223),c=t(14816),a=t(50406),l=t(92379);function s(){var e,n;let t=null===(e=(0,r.R1)(u.sh.VoiceName))||void 0===e?void 0:e.data,i=null===(n=(0,r.R1)(u.sh.VoiceMainLanguage))||void 0===n?void 0:n.data;return{voiceName:g(t,f()),voiceMainLanguage:null!=i?i:u.P9.Auto}}function f(){let e=v(),{currentLocale:n}=(0,i.b)();return(0,l.useCallback)(()=>{if(0===e.length)return"juniper";let t=e[0].voice;return n.startsWith("zh")&&(t="cove"),t},[e,n])}function v(){let{session:e}=(0,a.kP)(),{data:n}=(0,c.a)({queryKey:["getUserSettingVoices"],queryFn:()=>o.Z.getUserSettingVoices(),enabled:null!=e});return n?n.voices:[]}function g(e,n){return"sky"===e?"juniper":null!=e?e:n()}}}]);
//# sourceMappingURL=8284.685c19b8ada3ab87.js.map