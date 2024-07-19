"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7017],{6465:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(84760),r=n(7569),i=n(651);function a(e){let{url:t,size:n=16,minSize:s,fallback:a,className:u}=e,c=function(e,t){if(!e)return null;try{let{origin:n}=new URL(e);return"https://www.google.com/s2/favicons?domain=".concat(n,"&sz=").concat(t)}catch(e){return r.U.addError(e),null}}(t,n);return null==c?null!=a?a:null:null!=s?(0,i.jsx)(l,{faviconUrl:c,size:n,minSize:s,fallback:a,className:u}):(0,i.jsx)(o,{faviconUrl:c,size:n,className:u})}function l(e){let{faviconUrl:t,size:n,minSize:r,fallback:a,className:l}=e,{data:u,isLoading:c}=(0,s.a)({queryKey:["imageSize",t],queryFn:()=>new Promise((e,n)=>{let s=new Image;s.onload=()=>{e(Math.min(s.width,s.height))},s.onerror=()=>{n()},s.src=t})});return c?(0,i.jsx)("div",{className:l}):null==u||u<r?null!=a?a:null:(0,i.jsx)(o,{faviconUrl:t,size:n,className:l})}function o(e){let{faviconUrl:t,size:n,className:s}=e;return(0,i.jsx)("img",{src:t,alt:"Favicon",width:n,height:n,className:s})}},37083:function(e,t,n){n.d(t,{D:function(){return v},Z:function(){return y}});var s,r=n(15316),i=n(21389),a=n(88600),l=n(89678),o=n.n(l),u=n(92379),c=n(75172),d=n(62984),h=n(15478),x=n(9519),p=n(11121),f=n(48198),g=n(32863),m=n(651);function y(e){let{tagOptions:t,onSubmit:n,onMoreClicked:s,onCancel:r,maxInlineTags:l=5,modalOnly:h=!1,modalTitle:y,multiple:b,children:j}=e,C=(0,c.Z)(),{0:w,1:_}=(0,u.useState)(h?"modal":"inline"),{0:k,1:M}=(0,u.useState)([]),{0:N,1:T}=(0,u.useState)(void 0),P=(0,u.useCallback)(e=>{n(e),_("submitted"),setTimeout(()=>{_("closed")},1500)},[n]),O=(0,u.useMemo)(()=>o()(P,500),[P]),L=e=>{let t=[];return M(t=b?k.includes(e)?k.filter(t=>t!==e):[...k,e]:[e]),t},E=()=>{P({tags:k,textFeedback:N,tagChoices:A,source:"modal"})},A=t.map(e=>e.value),F=function(e){let t={};return e.forEach(e=>{var n;let s=null!==(n=e.group)&&void 0!==n?n:"Default";t[s]||(t[s]=[]),t[s].push(e)}),t}(t),D=Object.keys(F);return(0,m.jsxs)(m.Fragment,{children:[!h&&(0,m.jsx)(i.M,{children:"closed"!==w&&(0,m.jsxs)(a.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"min-h-[96px] w-full",children:["submitted"===w&&(0,m.jsx)(a.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"text-center",children:(0,m.jsx)("div",{className:"inline-flex rounded-lg border border-token-border-light p-4",children:(0,m.jsx)("div",{className:"text-sm",children:(0,m.jsx)(d.Z,{id:"ConversationTurnInlineMessageFeedback.submitted",defaultMessage:"Thanks for your feedback!"})})})}),["inline","modal"].includes(w)&&(0,m.jsxs)("div",{className:"relative mt-2 flex w-full flex-col gap-3 rounded-lg border border-token-border-light p-4",children:[(0,m.jsx)("button",{className:"absolute right-4 top-4 text-sm font-bold",onClick:()=>{_("closed"),O.cancel(),null==r||r()},children:(0,m.jsx)(f.tPq,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})}),(0,m.jsx)("div",{className:"text-sm text-token-text-secondary",children:(0,m.jsx)(d.Z,{id:"ConversationTurnInlineMessageFeedback.inlineTitle",defaultMessage:"Tell us more:"})}),(0,m.jsxs)("div",{className:"flex flex-wrap gap-3",children:[t.slice(0,l).map(e=>(0,m.jsx)(v,{$selected:k.includes(e.value),onClick:()=>{O({tags:L(e.value),tagChoices:A,source:"inline"})},children:e.label},e.value)),(0,m.jsx)(v,{onClick:()=>{null==s||s(),O.cancel(),_("modal")},children:(0,m.jsx)(d.Z,{id:"ConversationTurnInlineMessageFeedback.moreOptions.1",defaultMessage:"More..."})})]})]})]},"main")}),"modal"===w&&(0,m.jsxs)(g.Z,{type:"success",isOpen:!0,className:"max-w-xl",size:"custom",title:null!=y?y:(0,m.jsx)(d.Z,{id:"ConversationTurnInlineMessageFeedback.modalTitle",defaultMessage:"Provide additional feedback"}),onClose:()=>{M([]),_(h?"closed":"inline"),h&&(null==r||r())},showCloseButton:!0,primaryButton:(0,m.jsx)(x.z,{color:"primary",disabled:0===k.length&&!N,onClick:E,children:(0,m.jsx)(d.Z,{id:"ConversationTurnInlineMessageFeedback.submit",defaultMessage:"Submit"})}),rootClassName:"z-50",children:[(0,m.jsx)("div",{className:"flex flex-col gap-6",children:D.map(e=>(0,m.jsxs)("div",{children:[D.length>1&&(0,m.jsx)("div",{className:"mb-3 text-sm font-semibold",children:e}),(0,m.jsx)("div",{className:"flex flex-wrap gap-3",children:F[e].map(e=>(0,m.jsx)(v,{$selected:k.includes(e.value),onClick:()=>L(e.value),children:e.label},e.value))},e)]},e))}),(0,m.jsx)(p.Z,{name:"feedback",type:"text",className:"mt-6",placeholder:C.formatMessage({id:"ConversationTurnInlineMessageFeedback.feedbackPlaceholder.1",defaultMessage:"(Optional) Feel free to add specific details"}),value:null!=N?N:"",onChange:e=>T(e.target.value),onPressEnter:E}),j]})]})}let v=h.Z.button(s||(s=(0,r.Z)(["\n  rounded-lg border border-token-border-light px-3 py-1 text-sm text-token-text-secondary hover:text-token-text-primary hover:bg-token-main-surface-secondary\n  ","\n"])),e=>{let{$selected:t}=e;return t&&"!bg-token-text-primary !text-token-main-surface-primary"})},70083:function(e,t,n){n.d(t,{p:function(){return s}});let s="citation"},80212:function(e,t,n){n.d(t,{lx:function(){return a}});var s=n(47453),r=n.n(s);let i=r()(()=>Promise.all([n.e(6617),n.e(5632),n.e(4895),n.e(9010)]).then(n.bind(n,69010)).then(e=>e.FormattedText),{loadableGenerated:{webpack:()=>[69010]}});t.ZP=i;let a=r()(()=>Promise.all([n.e(6617),n.e(5632),n.e(4895),n.e(9010)]).then(n.bind(n,69010)).then(e=>e.UserFormattedText),{loadableGenerated:{webpack:()=>[69010]}})},63519:function(e,t,n){n.d(t,{R3:function(){return c},Zl:function(){return x},fL:function(){return d}});var s=n(97410),r=n(23763),i=n.n(r),a=n(3836);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}class o{constructor(e,t){(0,s.Z)(this,"requestUpdateRaf",null),(0,s.Z)(this,"_requestUpdate",()=>{this.requestUpdateRaf||(this.requestUpdateRaf=window.requestAnimationFrame(()=>{this._update(),this.requestUpdateRaf=null}))}),this.updateReactComponentDisplay=t}destroy(){this.requestUpdateRaf&&(window.cancelAnimationFrame(this.requestUpdateRaf),this.requestUpdateRaf=null)}}class u extends o{constructor(e,t){super(e,t),(0,s.Z)(this,"_update",()=>{this.updateReactComponentDisplay((0,a.$w)(this.textMessageParts,this.displayedTextLength))}),this.updateReactComponentDisplay=t,this.textMessageParts=e,this.textMessagePartsTextLength=(0,a.Vh)(this.textMessageParts).length,this.displayedTextLength=this.textMessagePartsTextLength,this.displayNextCharDelayMs=u.MAX_BUFFERING_MS_PER_CHAR}displayNextChar(){this.displayNextCharTimeout=void 0,this.isBuffering()&&(this.displayedTextLength++,this._requestUpdate(),this.displayNextCharTimeout=window.setTimeout(()=>this.displayNextChar(),this.displayNextCharDelayMs))}isBuffering(){return this.displayedTextLength<this.textMessagePartsTextLength}onMessagePartsUpdated(e){this.textMessageParts=e,this.textMessagePartsTextLength=(0,a.Vh)(this.textMessageParts).length;let t=this.textMessagePartsTextLength-this.displayedTextLength;if(t>0){let e=u.MAX_BUFFERING_LAG_MS/t;this.displayNextCharDelayMs=Math.min(e,u.MAX_BUFFERING_MS_PER_CHAR)}null==this.displayNextCharTimeout&&this.displayNextChar()}destroy(){super.destroy(),window.clearTimeout(this.displayNextCharTimeout)}}(0,s.Z)(u,"MAX_BUFFERING_LAG_MS",500),(0,s.Z)(u,"MAX_BUFFERING_MS_PER_CHAR",30);class c extends o{constructor(e,t){super(e,t),(0,s.Z)(this,"_update",()=>{this.updateReactComponentDisplay((0,a.$w)(this.textMessageParts,this.displayedTextLength))}),this.updateReactComponentDisplay=t,this.textMessageParts=e,this.textMessagePartsTextLength=(0,a.Vh)(this.textMessageParts).length,this.displayedTextLength=this.textMessagePartsTextLength,this.chunkLength=0}displayNextChunk(){this.displayNextChunkTimeout=void 0,this.isBuffering()&&(this.displayedTextLength=Math.min(this.displayedTextLength+this.chunkLength,this.textMessagePartsTextLength),this._requestUpdate(),this.displayNextChunkTimeout=window.setTimeout(()=>this.displayNextChunk(),c.UPDATE_FREQUENCY_MS))}isBuffering(){return this.displayedTextLength<this.textMessagePartsTextLength}onMessagePartsUpdated(e){this.textMessageParts=e,this.textMessagePartsTextLength=(0,a.Vh)(this.textMessageParts).length;let t=this.textMessagePartsTextLength-this.displayedTextLength;t>=c.MIN_CHARS_BEHIND_TO_CATCHUP?(this.chunkLength=Math.ceil(t*c.UPDATE_FREQUENCY_MS/c.CATCHUP_TIME_MS),null==this.displayNextChunkTimeout&&this.displayNextChunk()):(this.displayNextChunkTimeout=void 0,window.clearTimeout(this.displayNextChunkTimeout),this.displayedTextLength=this.textMessagePartsTextLength,this.updateReactComponentDisplay((0,a.$w)(this.textMessageParts,this.displayedTextLength)))}destroy(){super.destroy(),window.clearTimeout(this.displayNextChunkTimeout)}}(0,s.Z)(c,"MIN_CHARS_BEHIND_TO_CATCHUP",20),(0,s.Z)(c,"CATCHUP_TIME_MS",300),(0,s.Z)(c,"UPDATE_FREQUENCY_MS",30);class d extends o{constructor(e,t,n){var r;super(e,t),(0,s.Z)(this,"LAG_FACTORS",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({".":15,"!":15,"?":15,"\n":15,",":8,":":8,";":8,DEFAULT_LAG_FACTOR:.9,BUFFER_FACTOR:.08},window.__PUNCTUATION_BUFFER_LAG_FACTORS)),(0,s.Z)(this,"_update",()=>{let e=(0,a.$w)(this.textMessageParts,this.displayedTextLength);this.updateReactComponentDisplay(e)}),(0,s.Z)(this,"_throttledDebugLog",i()(e=>{this.debug&&console.debug(e)},500,{leading:!0,trailing:!0})),this.updateReactComponentDisplay=t,this.textMessageParts=e,this.textMessagePartsTextLength=(0,a.Vh)(this.textMessageParts).length,this.displayedTextLength=this.textMessagePartsTextLength,this.concatenatedText=(0,a.Vh)(this.textMessageParts),this.isActivelyStreaming=!1,this.debug=null!==(r=null==n?void 0:n.debug)&&void 0!==r&&r,this.streamStartMs=0,this.averageMsPerChar=0,this.debug&&console.debug(["PunctuationBuffer:","[lagFactors: ".concat(JSON.stringify(this.LAG_FACTORS,null,2),"]")].join("\n"))}displayNextChar(){this.displayNextCharTimeout=void 0,this.isBuffering()&&(this.displayedTextLength++,this._requestUpdate(),this.displayNextCharTimeout=window.setTimeout(()=>this.displayNextChar(),this._getNextCharDelayMs()))}isBuffering(){return this.displayedTextLength<this.textMessagePartsTextLength}onMessagePartsUpdated(e,t){this.textMessageParts=e,this.isActivelyStreaming=t;let n=(0,a.Vh)(this.textMessageParts);this.concatenatedText=n,this.textMessagePartsTextLength=n.length,0===this.streamStartMs?this.streamStartMs=Date.now():this.averageMsPerChar=(Date.now()-this.streamStartMs)/this.textMessagePartsTextLength,this.displayNextCharTimeout||this.displayNextChar()}destroy(){super.destroy(),window.clearTimeout(this.displayNextCharTimeout)}_getNextCharDelayMs(){var e;let t=this.concatenatedText[this.displayedTextLength-1],n=this.textMessagePartsTextLength-this.displayedTextLength,s=1/Math.max(n*this.LAG_FACTORS.BUFFER_FACTOR,1),r=(null!==(e=this.LAG_FACTORS[t])&&void 0!==e?e:this.LAG_FACTORS.DEFAULT_LAG_FACTOR)*s,i=this.averageMsPerChar*r;return this._throttledDebugLog(["PunctuationBuffer:","[lagMs: ".concat(i,"]"),'[lastChar: "'.concat(t,'"]'),"[averageMsPerChar: ".concat(this.averageMsPerChar,"]"),"[lagFactor: ".concat(r,"]"),"[bufferLagFactor: ".concat(s,"]"),"[numBufferedChars: ".concat(n,"]"),"==="].join("\n")),i}}function h(e){return"text"===e.type}class x{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";(0,s.Z)(this,"updateReactComponentDisplay",e=>{let t=e.filter(h).map(e=>e.text).join("");this.onFlush(t)}),this.buffer=new e([n],this.updateReactComponentDisplay),this.onFlush=t,this.text=n}appendText(e){this.text+=e,this.buffer.onMessagePartsUpdated([this.text],!0)}setText(e){this.text=e,this.buffer.onMessagePartsUpdated([this.text],!0)}isBuffering(){return this.buffer.isBuffering()}}},39265:function(e,t,n){n.d(t,{O1:function(){return j},XX:function(){return p},Xt:function(){return g},cm:function(){return x},i$:function(){return v},xB:function(){return f}});var s=n(88628),r=n(11655),i=n(80212),a=n(7569),l=n(19841),o=n(45896),u=n(92379),c=n(75172),d=n(91735),h=n(651);let x=(0,u.createContext)({isWithinDataAnalysisToolMessage:!1});function p(e){let{message:t}=e,{resolvedTheme:n}=(0,o.F)();return(0,h.jsx)(x.Provider,{value:{isWithinDataAnalysisToolMessage:!0},children:(0,h.jsx)(i.ZP,{className:(0,l.default)("markdown prose w-full break-words dark:prose-invert","dark"===n?"dark":"light"),children:f(t)})})}function f(e){function t(e,t){return"```".concat(t,"\n").concat(e,"\n```")}if("code"===e.content.content_type)return t(e.content.text,"python");if("python"===e.recipient){if("text"!==e.content.content_type)throw Error("Unexpected content type for code message");let n=e.content.parts;if(1!==n.length||"string"!=typeof n[0])throw Error("Unexpected parts for code message");return t(n[0],"python")}throw Error("Unexpected code message format")}function g(e){var t;let{message:n}=e,r=(0,c.Z)();if(n.content.content_type!==s.PX.ExecutionOutput)return null;let i=null===(t=n.metadata)||void 0===t?void 0:t.aggregate_result;if(!i)return a.U.addError("Corrupt code execution result message"),null;let l=i.messages.filter(b),o=l.length>0,u=null!=i.final_expression_output,d=null!=i.in_kernel_exception;return(0,h.jsxs)(h.Fragment,{children:[o&&(0,h.jsx)(m,{label:"STDOUT/STDERR",output:l.map((e,t)=>(0,h.jsx)("span",{className:"stderr"===e.stream_name?"text-red-500":"",children:e.text},"".concat(t)))}),u&&(0,h.jsx)(m,{label:r.formatMessage({id:"codeInterpreterMessage.resultLabel",defaultMessage:"Result"}),output:i.final_expression_output}),d&&(0,h.jsx)(y,{traceback:i.in_kernel_exception.traceback.join("")})]})}function m(e){let{label:t,output:n}=e;return(0,h.jsxs)("div",{className:"bg-gray-700 p-4 text-xs",children:[(0,h.jsx)("div",{className:"mb-1 text-gray-400",children:t}),(0,h.jsx)("div",{className:"prose flex flex-col-reverse text-white",children:(0,h.jsx)("pre",{className:"shrink-0",children:n})})]})}function y(e){let{traceback:t}=e;return(0,h.jsx)("div",{className:"overflow-auto border-t border-gray-500 text-white",children:(0,h.jsx)("div",{className:"border-l-4 border-red-500 p-2 text-xs",children:(0,h.jsx)("div",{className:"scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",children:(0,h.jsx)("pre",{className:"shrink-0",children:t})})})})}function v(e){var t;let{message:n}=e;if(n.content.content_type!==s.PX.ExecutionOutput)return null;let r=null===(t=n.metadata)||void 0===t?void 0:t.aggregate_result;return r?(0,h.jsx)(h.Fragment,{children:r.messages.filter(j).map((e,t)=>(0,h.jsx)(d.Z,{jupyterMessage:e},t))}):(a.U.addError("Corrupt code execution result message"),null)}function b(e){return"stream"===e.message_type}function j(e){return"image"===e.message_type||"image_url"in e&&(0,r.$H)(e.image_url+"")}},91735:function(e,t,n){n.d(t,{Z:function(){return g}});var s=n(97410),r=n(34608),i=n(48198),a=n(11655),l=n(89721),o=n(94867),u=n(84760),c=n(92379),d=n(75172),h=n(62984),x=n(68306),p=n(651);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function g(e){let{jupyterMessage:t}=e,n=(0,o.h9)(),r=(0,d.Z)();if(n)return(0,p.jsxs)("div",{className:"my-1 flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-token-text-tertiary dark:border-white/10",children:[(0,p.jsx)(i.zS0,{className:"icon-lg"}),(0,p.jsx)(h.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},v.imageNotSupported))]});if(null!=t.image_payload)return(0,p.jsx)("img",{className:"my-1",src:"data:image/png;base64,".concat(t.image_payload),alt:r.formatMessage(v.altText)});if(null!=t.image_url){let e=(0,a.Iy)(t.image_url);return(0,p.jsx)(y,{fileId:e})}return null}let m=Math.log(151)/Math.log(1.5);function y(e){let{fileId:t}=e,n=(0,d.Z)(),{data:s,isLoading:i,refetch:a}=(0,u.a)({queryKey:["getFileDownloadLink",t],queryFn:()=>l.Z.getFileDownloadLink(t),refetchInterval:e=>{var t;let n=e.state.dataUpdateCount;return(null===(t=e.state.data)||void 0===t?void 0:t.status)!==r.KF.Success&&!(n>m)&&e.state.status!==r.KF.Error&&100*Math.pow(1.5,n)}});return((0,c.useEffect)(()=>{if((null==s?void 0:s.status)===r.KF.Success){let e=new URL(s.download_url,location.toString()).searchParams.get("se");null!=e&&!i&&new Date>new Date(e)&&a()}},[s,i,a]),(null==s?void 0:s.status)!==r.KF.Success)?null:(0,p.jsx)("img",{src:s.download_url,className:"my-1 max-h-full max-w-full",alt:n.formatMessage(v.altText)})}let v=(0,x.vU)({imageNotSupported:{id:"CodeExecutionOutputImage.imageNotSupported",defaultMessage:"Image output is not supported in a shared chat"},altText:{id:"CodeExecutionOutputImage.altText",defaultMessage:"Output image"}})},3836:function(e,t,n){n.d(t,{$w:function(){return a},Lm:function(){return l},Qq:function(){return i},Vh:function(){return r}});var s=n(88628);function r(e){return e.map(e=>"string"==typeof e?e:"").join("")}function i(e){return e.map(e=>"text"===e.type?e.text:"").join("\n")}function a(e,t){let n=[],r=0;for(let i=0;i<e.length;i++){let a=e[i];if("string"==typeof a){if(null!=t&&t<r+a.length){n.push({type:"text",text:a.slice(0,t-r)});break}n.push({type:"text",text:a}),r+=a.length}else if(a.content_type===s.wW.ImageAssetPointer){let e=i>0?n[i-1]:null;(null==e?void 0:e.type)==="images"?e.imageAssets.push(a):n.push({type:"images",imageAssets:[a]})}else a.content_type===s.wW.AudioTranscription&&n.push({type:"transcription",text:a.text})}return n}function l(e){let{isUserTurn:t,parts:n}=e;if(!t)return a(n);let r={text:[],images:[]};for(let e=0;e<n.length;e++){let t=n[e];"string"==typeof t?t.trim().length>0&&r.text.push({type:"text",text:t}):t.content_type===s.wW.AudioTranscription?r.text.push({type:"transcription",text:t.text}):t.content_type===s.wW.ImageAssetPointer&&r.images.push(t)}let i=[];return r.images.length>0&&i.unshift({type:"images",imageAssets:r.images}),i.push(...r.text.map(e=>({type:e.type,text:e.text}))),i}},54652:function(e,t,n){n.d(t,{QU:function(){return G},Zn:function(){return q},h7:function(){return V},s8:function(){return J},aK:function(){return et},vC:function(){return X},gP:function(){return eo},HY:function(){return $},tS:function(){return K}});var s,r,i=n(97410),a=n(48198),l=n(70083),o=n(35895),u=n(13300),c=n(651);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function x(e){return(0,c.jsxs)(u.A0,h(h({width:"19",height:"15",viewBox:"0 0 19 15",fill:"none"},e),{},{children:[(0,c.jsx)("path",{d:"M4.42 0.75H2.8625H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V11.65C0.75 12.7546 1.64543 13.65 2.75 13.65H2.8625C2.8625 13.65 2.8625 13.65 2.8625 13.65C2.8625 13.65 4.00751 13.65 4.42 13.65M13.98 13.65H15.5375H15.65C16.7546 13.65 17.65 12.7546 17.65 11.65V2.75C17.65 1.64543 16.7546 0.75 15.65 0.75H15.5375H13.98",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.16045 7.41534C5.32257 7.228 4.69638 6.47988 4.69638 5.58551C4.69638 4.54998 5.53584 3.71051 6.57136 3.71051C7.60689 3.71051 8.44635 4.54998 8.44635 5.58551C8.44635 5.8965 8.37064 6.1898 8.23664 6.448C8.22998 6.48984 8.21889 6.53136 8.20311 6.57208L6.77017 10.2702C6.63182 10.6272 6.18568 10.7873 5.7737 10.6276C5.36172 10.468 5.13991 10.0491 5.27826 9.69206L6.16045 7.41534ZM11.4177 7.41534C10.5798 7.228 9.95362 6.47988 9.95362 5.58551C9.95362 4.54998 10.7931 3.71051 11.8286 3.71051C12.8641 3.71051 13.7036 4.54998 13.7036 5.58551C13.7036 5.8965 13.6279 6.1898 13.4939 6.448C13.4872 6.48984 13.4761 6.53136 13.4604 6.57208L12.0274 10.2702C11.8891 10.6272 11.4429 10.7873 11.0309 10.6276C10.619 10.468 10.3971 10.0491 10.5355 9.69206L11.4177 7.41534Z",fill:"currentColor"})]}))}function p(e){return(0,c.jsxs)(u.A0,h(h({width:"19",height:"15",viewBox:"0 0 19 15",fill:"none"},e),{},{children:[(0,c.jsx)("path",{d:"M4.42 0.75H2.8625H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V11.65C0.75 12.7546 1.64543 13.65 2.75 13.65H2.8625C2.8625 13.65 2.8625 13.65 2.8625 13.65C2.8625 13.65 4.00751 13.65 4.42 13.65M13.98 13.65H15.5375H15.65C16.7546 13.65 17.65 12.7546 17.65 11.65V2.75C17.65 1.64543 16.7546 0.75 15.65 0.75H15.5375H13.98",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,c.jsx)("path",{d:"M5.55283 4.21963C5.25993 3.92674 4.78506 3.92674 4.49217 4.21963C4.19927 4.51252 4.19927 4.9874 4.49217 5.28029L6.36184 7.14996L4.49217 9.01963C4.19927 9.31252 4.19927 9.7874 4.49217 10.0803C4.78506 10.3732 5.25993 10.3732 5.55283 10.0803L7.95283 7.68029C8.24572 7.3874 8.24572 6.91252 7.95283 6.61963L5.55283 4.21963Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,c.jsx)("path",{d:"M9.77753 8.75003C9.3357 8.75003 8.97753 9.10821 8.97753 9.55003C8.97753 9.99186 9.3357 10.35 9.77753 10.35H13.2775C13.7194 10.35 14.0775 9.99186 14.0775 9.55003C14.0775 9.10821 13.7194 8.75003 13.2775 8.75003H9.77753Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.1"})]}))}var f=n(6242),g=n(6415),m=n(75172),y=n(68306),v=n(39265);function b(e){let{codeMessage:t,codeExecutionOutputMessage:n,onDismiss:s}=e,r=(0,m.Z)();return(0,c.jsx)(f.Z.Root,{isOpen:!0,onClose:s,children:(0,c.jsx)(f.Z.Overlay,{children:(0,c.jsxs)(f.Z.Content,{className:"flex max-h-[75vh] max-w-lg flex-col overflow-hidden",children:[(0,c.jsx)(f.Z.Header,{title:r.formatMessage(j.title),type:"success",closeButton:(0,c.jsx)(g.P,{onClick:s})}),(0,c.jsxs)("div",{className:"flex flex-1 flex-col overflow-auto bg-black",children:[(0,c.jsx)("div",{children:(0,c.jsx)(v.XX,{message:t})}),(0,c.jsx)("div",{children:(0,c.jsx)(v.Xt,{message:n})})]})]})})})}let j=(0,y.vU)({title:{id:"CodeExecutionOutputModal.title",defaultMessage:"Analysis"}});var C=n(94867),w=n(12520),_=n(59594),k=n(99140),M=n(66943),N=n(90681),T=n(19841),P=n(26169),O=n.n(P),L=n(46667),E=n.n(L),A=n(92379),F=n(62984),D=n(88628),R=n(6465),U=n(80197),S=n(11655),Z=n(39016),I=n(95290),H=n(42493);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}let q=((s={})[s.Standard=0]="Standard",s[s.CodeExecution=1]="CodeExecution",s),G=((r={}).default="default",r.expandLink="expand-link",r.expandAll="expand-all",r),V=(0,A.createContext)(void 0),z="&#8203;";function X(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,s=[];if(t.length>0){let n=t.filter(t=>t.end_ix<=e.length),r=(0,H.J)(e);for(let e=n.length-1;e>=0;e--){let t=n[e],{citation_format_type:i,start_ix:a,end_ix:l,metadata:o,invalid_reason:u}=t;if("tether_markdown"===i){if(o&&"file"!==o.type){let e=r.slice(a,l).join("").replace(/\[(.*?)\]\((\d+)\)/g,"[$1](".concat(o.url,")"));r=r.slice(0,a).concat((0,H.J)(e),r.slice(l))}}else{let i={type:q.Standard};o?i.metadata=o:null!=u&&(i.invalid_reason=u);let c=!1;if(e>0){let s=n[e-1];null!=s.metadata&&null!=o&&ea(s.metadata)===ea(o)&&0===r.slice(s.end_ix,t.start_ix).join("").trim().length&&(r=r.slice(0,s.end_ix).concat(r.slice(t.end_ix)),c=!0)}if(!c){let e=s.length;r=r.slice(0,a).concat(W(e),r.slice(l)),s.push(i)}}}e=r.join("")}if(null!=n){let t=n.find(e=>(0,I.rH)(e)===I.Cs.CodeInterpreter),r=n.find(e=>(0,I.rH)(e)===I.Cs.CodeInterpreterTool);if(null!=t&&null!=r){let n=s.length;e=e+" "+W(n),s.push({type:q.CodeExecution,codeMessage:t,codeExecutionOutputMessage:r})}}return{text:e,displayedCitations:s}}function W(e){return"".concat(z,":").concat(l.p,"[oaicite:").concat(e,"]{index=").concat(e,"}").concat(z)}function $(){let{value:e}=(0,N.sB)("4037675415"),t=(0,N.xb)("3168246095");return e?t.config.get("gizmo_ids",[],Q):[]}function K(){let{value:e}=(0,N.sB)("4037675415"),t=(0,N.xb)("3168246095");return e?t.config.get("workspace_ids",[],Q):[]}function Q(e){return Array.isArray(e)&&e.every(e=>"string"==typeof e)}function J(e){let{index:t,displayInfo:n,displayType:s}=e;switch(n.type){case q.Standard:return(0,c.jsx)(ee,{index:t,displayInfo:n,displayType:s});case q.CodeExecution:return(0,c.jsx)(er,{displayInfo:n})}}function Y(e){return E()(e,O())}function ee(e){var t,n,s,r,i;let a,l;let{index:u,displayInfo:d,displayType:h,children:p}=e,f=(0,S.O6)(),g=(0,A.useContext)(V),m=(0,C.XK)(null!==(t=null==g?void 0:g.clientThreadId)&&void 0!==t?t:D.Zq),y=(0,C.WA)(null!==(n=null==g?void 0:g.clientThreadId)&&void 0!==n?n:D.Zq),v=$(),b=null==g||null===(s=g.message.metadata)||void 0===s?void 0:s.gizmo_id,j=!!b&&v.includes(b),_=(0,N.ep)("668322707"),{onCitationHovered:P,onCitationClicked:O,onCitationUnhovered:L}=null!=g?g:{},E=eo(j,d.metadata),F=(null==E?void 0:E.type)==="file",R=!F&&null!=g&&!g.isActivelyStreaming,Z=R?{conversation_id:null==m?void 0:m.toString(),model_slug:null==g||null===(r=g.message.metadata)||void 0===r?void 0:r.model_slug,message_id:null==g?void 0:g.message.id,url:null==E?void 0:E.url,citation_number:u,display_type:h}:null;(0,A.useEffect)(()=>{null!=Z&&(k.A.logEvent(M.M.browsingDisplayCitation,Z),N.m9.logEvent("chatgpt_browsing_display_citation",null,Y(Z)))},[R]);let I=(0,o.B)(y);if(F&&(I&&!j||h===G.expandAll)||null==E&&(I||h===G.expandAll)||F&&null==E&&N.m9.getExperimentValue({experimentName:"3402030333",key:N.Hy.TREATMENT,defaultValue:"ba"}))return null;if(h===G.expandAll&&null!=E)return(0,c.jsx)(en,{citationMetadata:E,index:u,children:p});if(h===G.expandLink&&E&&"webpage"===E.type)a=et(E.url,null==g?void 0:g.attributions),l=!0;else if(F&&!_.isLoading&&_.layer.get("show_citations_with_title",!1)){let e=function(e){let t=e.split("."),n=e;return t.length>1&&t.slice(0,-1).some(e=>e.length>0)&&(n=t.slice(0,-1).join(".")),n.length>24&&(n=n.slice(0,23)+"…"),n}(E.name);a="(".concat(e,")"),l=!0}else a=(0,c.jsx)(x,{className:"-mt-0.5 ml-0.5 inline-block text-token-link hover:text-token-link-hover"}),l=!1;return(0,c.jsx)(U.u,{label:(0,c.jsx)(ei,{citationMetadata:E,invalidReason:d.invalid_reason,onClick:()=>{null!=Z&&(k.A.logEvent(M.M.browsingClickCitation,Z),N.m9.logEvent("chatgpt_browsing_click_citation",null,Y(Z))),E&&(null==O||O(E,u))}}),onOpenChange:e=>{e?(null!=Z&&(k.A.logEvent(M.M.browsingHoverCitation,Z),N.m9.logEvent("chatgpt_browsing_hover_citation",null,Y(Z))),E&&(null==P||P(E,u))):null==L||L(u)},side:"top",sideOffset:4,withArrow:!1,delayDuration:150,interactive:!0,wide:!0,children:E&&F?null!==(i=E.extra)&&void 0!==i&&i.cloud_doc_url?(0,c.jsxs)("a",{href:E.extra.cloud_doc_url,target:"_blank",rel:"noreferrer",className:"px-0.5 text-green-600",children:[a,p]}):(0,c.jsxs)("button",{onClick:()=>f(E.id,E.name),className:"px-0.5 text-green-600",children:[a,p]}):(0,c.jsxs)(c.Fragment,{children:[l&&(0,c.jsx)("span",{className:"text-token-text-secondary",children:" ("}),(0,c.jsxs)("a",{href:(0,w.k)(null==E?void 0:E.url),target:"_blank",rel:"noreferrer",className:(0,T.default)("text-green-600 !no-underline",!l&&"px-0.5"),onClick:()=>{null!=Z&&(k.A.logEvent(M.M.browsingClickCitation,Z),N.m9.logEvent("chatgpt_browsing_click_citation",null,Y(Z)))},children:[a,p]}),l&&(0,c.jsx)("span",{className:"text-token-text-secondary",children:")"})]})})}function et(e,t){var n;return null!==(n=null==t?void 0:t.get(e))&&void 0!==n?n:(0,Z.p)(e)}function en(e){let{citationMetadata:t,index:n,children:s}=e,r=(0,A.useContext)(V);if("file"===t.type)return null;let i=et(t.url,null==r?void 0:r.attributions);return(0,c.jsxs)("span",{className:"text-nowrap",children:[(0,c.jsx)("span",{className:"text-token-text-primary",children:"("}),(0,c.jsx)(es,{citationMetadata:t,className:"inline-block font-normal",index:n,children:(0,c.jsxs)("span",{className:"text-token-link underline-offset-2 hover:underline",children:[i,s]})}),(0,c.jsx)("span",{className:"text-token-text-primary",children:")"})]})}function es(e){let{citationMetadata:t,children:n,index:s,sideOffset:r,className:i}=e,a=(0,A.useContext)(V);if("file"===t.type)return null;let l=et(t.url,null==a?void 0:a.attributions),{onCitationHovered:o,onCitationClicked:u,onCitationUnhovered:d}=null!=a?a:{};return(0,c.jsxs)(_.fC,{delayDuration:150,onOpenChange:e=>{e?null==o||o(t,s):null==d||d(s)},children:[(0,c.jsx)(_.xz,{asChild:!0,children:(0,c.jsx)("a",{href:t.url,onClick:()=>null==u?void 0:u(t,s),target:"_blank",rel:"noreferrer",className:i,children:n})}),(0,c.jsx)(_.h_,{children:(0,c.jsx)(_.VY,{side:"bottom",sideOffset:r,children:(0,c.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:(0,c.jsxs)("div",{className:"max-w-xs rounded-lg border border-token-border-light bg-token-main-surface-secondary p-1 shadow-sm",children:[(0,c.jsxs)("div",{className:(0,T.default)("flex items-center gap-2 text-xs text-token-text-secondary",null==t.title&&null==t.text?"mb-1 px-3 pt-2":"mb-0.5 px-2 pt-0.5"),children:[(0,c.jsx)(R.Z,{url:t.url,size:32,className:"icon-sm rounded"}),l]}),t.title&&(0,c.jsx)("div",{className:"mb-2 line-clamp-2 px-3 text-sm font-semibold",children:t.title}),t.text&&(0,c.jsx)("div",{className:"rounded-md border border-token-border-light bg-token-main-surface-secondary p-1",children:(0,c.jsx)("div",{className:"m-2 line-clamp-5 text-sm",children:t.text})})]})})})})]})}function er(e){let{displayInfo:t}=e,{0:n,1:s}=(0,A.useState)(!1),r=(0,m.Z)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(U.u,{label:r.formatMessage(el.viewAnalysis),side:"top",sideOffset:4,withArrow:!1,delayDuration:150,children:(0,c.jsx)("button",{onClick:()=>s(!0),children:(0,c.jsx)(p,{className:"-mt-0.5 ml-0.5 inline-block text-token-link hover:text-token-link-hover"})})}),n&&(0,c.jsx)(b,{codeMessage:t.codeMessage,codeExecutionOutputMessage:t.codeExecutionOutputMessage,onDismiss:()=>s(!1)})]})}function ei(e){var t;let{citationMetadata:n,invalidReason:s,onClick:r}=e,l=(0,S.O6)(),o=(null==n?void 0:n.type)==="file",u=n?(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)("div",{className:"flex shrink-0 items-center justify-center",children:o?(0,c.jsx)(a.h3O,{className:"icon-xs"}):(0,c.jsx)(R.Z,{url:n.url,className:"my-0"})}),(0,c.jsx)("div",{className:"max-w-xs truncate",children:o?n.name:n.title}),(0,c.jsx)("div",{className:"shrink-0",children:(0,c.jsx)(a.Pfi,{className:"icon-xs"})})]}):(0,c.jsx)("div",{className:"text-red-500",children:null!=s?s:(0,c.jsx)(F.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},el.invalid))});return o?null!==(t=n.extra)&&void 0!==t&&t.cloud_doc_url?(0,c.jsx)("a",{href:n.extra.cloud_doc_url,target:"_blank",rel:"noreferrer",className:"text-xs",children:u}):(0,c.jsx)("button",{onClick:()=>{l(n.id,n.name),null==r||r()},className:"text-xs",children:u}):(0,c.jsx)("a",{href:(0,w.k)(null==n?void 0:n.url),target:"_blank",rel:"noreferrer",className:"text-xs !no-underline",onClick:r,children:u})}function ea(e){return"file"===e.type?e.id:e.url}let el=(0,y.vU)({invalid:{id:"citations.invalid",defaultMessage:"Invalid citation"},viewAnalysis:{id:"citations.viewAnalysis",defaultMessage:"View analysis"}});function eo(e,t){let n;if(!t||!e||"file"!==t.type)return t;let s=t.name.split("\xa4");if(3!==s.length)return t;let[r,i,a]=s,l=a,o=a.lastIndexOf(".");-1!==o&&(l=a.slice(0,o));let u="Google Drive";if("gdrive"===r)n="https://drive.google.com/file/d/".concat(i,"/view"),u="Google Drive";else if("gdoc"===r)n="https://docs.google.com/document/d/".concat(i),u="Google Docs";else{if("notion"!==r)return t;n="https://www.notion.so/openai/".concat(i),u="Notion"}return{type:"webpage",url:n,title:l,text:u}}},12520:function(e,t,n){n.d(t,{k:function(){return r}});let s=["https:","mailto:","tel:"],r=e=>{let t;if(void 0!==e){try{t=new URL(e,window.location.origin)}catch(e){return}if(!s.includes(t.protocol))return;return t.href}}},39016:function(e,t,n){n.d(t,{p:function(){return s}});function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"short";try{let n=new URL(e).hostname.replace("www.","");if("hostname"===t)return n;return n.replace(/\.[^.]*$/,"")}catch(t){return e}}},42493:function(e,t,n){n.d(t,{J:function(){return s}});function s(e){try{let t=new Intl.Segmenter("en-US",{granularity:"grapheme"}).segment(e),n=[];for(let e of t)n.push(e.segment);return n}catch{return e.split("")}}},42193:function(e,t,n){n.d(t,{d:function(){return f},u:function(){return g}});var s=n(48449),r=n(53642),i=n(42420),a=n(84760),l=n(19464),o=n(71220),u=n(18939),c=n.n(u),d=n(74153),h=n.n(d),x=n(85149);let p=h()(e=>o.Ue({fetcher:async t=>{let n=new Map;for await(let r of s.c.streamedJsonPost("".concat(x.B,"/attributions"),{urls:t}))r.attribution&&n.set(r.url,r.attribution),e.setQueryData(["attribution",{url:r.url}],r.attribution);return c()(t.map(e=>{let t=n.get(e);return t&&{url:e,attribution:t}}))},resolver:o.rp("url"),scheduler:o.ck(100)}));function f(e){let{useBaseUrl:t=!0,enabled:n=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t?(0,r.FH)(e):e,l=p((0,i.NL)());return(0,a.a)({queryKey:["attribution",{url:s}],queryFn:async()=>(await l.fetch(s)).attribution,enabled:n&&!!e})}function g(e){let{useBaseUrl:t=!0,enabled:n=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t?e.map(r.FH):e,a=p((0,i.NL)());return(0,l.h)({queries:s.map(e=>({queryKey:["attribution",{url:e}],queryFn:async()=>(await a.fetch(e)).attribution,enabled:s.length>0&&n})),combine:t=>{let n=new Map;for(let s=0;s<t.length;s++){let r=t[s].data;r&&n.set(e[s],r)}return n}})}},46124:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(92379);function r(e,t){let n=(0,s.useRef)(e);(0,s.useEffect)(()=>{n.current=e},[e]),(0,s.useEffect)(()=>{if(null!=t){let e=window.setInterval(function(){n.current()},t);return()=>clearInterval(e)}},[t])}},20951:function(e,t,n){var s=n(92379);t.Z=function(){let e=(0,s.useRef)(!1);return(0,s.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,s.useCallback)(()=>e.current,[])}}}]);
//# sourceMappingURL=7017-4a5f7ddab61df855.js.map