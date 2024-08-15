"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{57098:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(84760),s=n(82363),a=n(651);function i(e){let{url:t,size:n=16,minSize:r,fallback:i,className:u}=e,d=function(e,t){if(!e)return null;try{let{origin:n}=new URL(e);return`https://www.google.com/s2/favicons?domain=${n}&sz=${t}`}catch(e){return s.U.addError(e),null}}(t,n);return null==d?i??null:null!=r?(0,a.jsx)(o,{faviconUrl:d,size:n,minSize:r,fallback:i,className:u}):(0,a.jsx)(l,{faviconUrl:d,size:n,className:u})}function o(e){let{faviconUrl:t,size:n,minSize:s,fallback:i,className:o}=e,{data:u,isLoading:d}=(0,r.a)({queryKey:["imageSize",t],queryFn:()=>new Promise((e,n)=>{let r=new Image;r.onload=()=>{e(Math.min(r.width,r.height))},r.onerror=()=>{n()},r.src=t})});return d?(0,a.jsx)("div",{className:o}):null==u||u<s?i??null:(0,a.jsx)(l,{faviconUrl:t,size:n,className:o})}function l(e){let{faviconUrl:t,size:n,className:r}=e;return(0,a.jsx)("img",{src:t,alt:"Favicon",width:n,height:n,className:r})}},22594:function(e,t,n){n.d(t,{D:function(){return m},Z:function(){return x}});var r=n(21389),s=n(88600),a=n(89678),i=n.n(a),o=n(92379),l=n(75172),u=n(62984),d=n(15478),c=n(11550),p=n(6440),f=n(28146),h=n(24434),g=n(651);function x(e){let{tagOptions:t,onSubmit:n,onMoreClicked:a,onCancel:d,maxInlineTags:x=5,modalOnly:y=!1,modalTitle:b,multiple:v,children:w,allowEmptySubmit:_=!1}=e,M=(0,l.Z)(),{0:T,1:C}=(0,o.useState)(y?"modal":"inline"),{0:j,1:P}=(0,o.useState)([]),{0:k,1:N}=(0,o.useState)(void 0),O=(0,o.useCallback)(e=>{n(e),C("submitted"),setTimeout(()=>{C("closed")},1500)},[n]),E=(0,o.useMemo)(()=>i()(O,500),[O]),F=e=>{let t=[];return P(t=v?j.includes(e)?j.filter(t=>t!==e):[...j,e]:[e]),t},U=()=>{O({tags:j,textFeedback:k,tagChoices:L,source:"modal"})},L=t.map(e=>e.value),Z=function(e){let t={};return e.forEach(e=>{let n=e.group??"Default";t[n]||(t[n]=[]),t[n].push(e)}),t}(t),A=Object.keys(Z);return(0,g.jsxs)(g.Fragment,{children:[!y&&(0,g.jsx)(r.M,{children:"closed"!==T&&(0,g.jsxs)(s.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"min-h-[96px] w-full",children:["submitted"===T&&(0,g.jsx)(s.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"text-center",children:(0,g.jsx)("div",{className:"inline-flex rounded-lg border border-token-border-light p-4",children:(0,g.jsx)("div",{className:"text-sm",children:(0,g.jsx)(u.Z,{id:"ConversationTurnInlineMessageFeedback.submitted",defaultMessage:"Thanks for your feedback!"})})})}),["inline","modal"].includes(T)&&(0,g.jsxs)("div",{className:"relative mt-2 flex w-full flex-col gap-3 rounded-lg border border-token-border-light p-4",children:[(0,g.jsx)("button",{className:"absolute right-4 top-4 text-sm font-bold",onClick:()=>{C("closed"),E.cancel(),d?.()},children:(0,g.jsx)(f.tPq,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})}),(0,g.jsx)("div",{className:"text-sm text-token-text-secondary",children:(0,g.jsx)(u.Z,{id:"ConversationTurnInlineMessageFeedback.inlineTitle",defaultMessage:"Tell us more:"})}),(0,g.jsxs)("div",{className:"flex flex-wrap gap-3",children:[t.slice(0,x).map(e=>(0,g.jsx)(m,{$selected:j.includes(e.value),onClick:()=>{E({tags:F(e.value),tagChoices:L,source:"inline"})},children:e.label},e.value)),(0,g.jsx)(m,{onClick:()=>{a?.(),E.cancel(),C("modal")},children:(0,g.jsx)(u.Z,{id:"ConversationTurnInlineMessageFeedback.moreOptions.1",defaultMessage:"More..."})})]})]})]},"main")}),"modal"===T&&(0,g.jsxs)(h.Z,{type:"success",isOpen:!0,className:"max-w-xl",size:"custom",title:b??(0,g.jsx)(u.Z,{id:"ConversationTurnInlineMessageFeedback.modalTitle",defaultMessage:"Provide additional feedback"}),onClose:()=>{P([]),C(y?"closed":"inline"),y&&d?.()},showCloseButton:!0,primaryButton:(0,g.jsx)(c.z,{color:"primary",disabled:0===j.length&&!k&&!_,onClick:U,children:(0,g.jsx)(u.Z,{id:"ConversationTurnInlineMessageFeedback.submit",defaultMessage:"Submit"})}),rootClassName:"z-50",children:[(0,g.jsx)("div",{className:"flex flex-col gap-6",children:A.map(e=>(0,g.jsxs)("div",{children:[A.length>1&&(0,g.jsx)("div",{className:"mb-3 text-sm font-semibold",children:e}),(0,g.jsx)("div",{className:"flex flex-wrap gap-3",children:Z[e].map(e=>(0,g.jsx)(m,{$selected:j.includes(e.value),onClick:()=>F(e.value),children:e.label},e.value))},e)]},e))}),(0,g.jsx)(p.Z,{name:"feedback",type:"text",className:"mt-6",placeholder:M.formatMessage({id:"ConversationTurnInlineMessageFeedback.feedbackPlaceholder.1",defaultMessage:"(Optional) Feel free to add specific details"}),value:k??"",onChange:e=>N(e.target.value),onPressEnter:U}),w]})]})}let m=d.Z.button`
  rounded-lg border border-token-border-light px-3 py-1 text-sm text-token-text-secondary hover:text-token-text-primary hover:bg-token-main-surface-secondary
  ${e=>{let{$selected:t}=e;return t&&"!bg-token-text-primary !text-token-main-surface-primary"}}
`},42606:function(e,t,n){n.d(t,{I:function(){return a},o:function(){return i}});let r=["xlsx","pptx","docx"],s={"application/vnd.google-apps.spreadsheet":"xlsx","application/vnd.google-apps.presentation":"pptx","application/vnd.google-apps.document":"docx"};function a(e){return e?s[e.split(";")[0]]??null:null}function i(e){return e&&r.includes(e)?e:null}},93866:function(e,t,n){n.d(t,{AJ:function(){return i},XX:function(){return l},xA:function(){return o}});var r,s,a=n(42606);let i=((r={})[r.None=0]="None",r[r.Multimodal=1]="Multimodal",r[r.Interpreter=2]="Interpreter",r[r.Retrieval=3]="Retrieval",r[r.ContextConnector=4]="ContextConnector",r[r.ProfilePicture=5]="ProfilePicture",r);function o(e){if(e)return{contextConnector:e.context_connector,sourceUrl:e.source_url,syntheticExtension:(0,a.o)(e.synthetic_extension),type:e.type}}let l=((s={}).Uploading="uploading",s.Ready="ready",s)},66114:function(e,t,n){n.d(t,{$H:function(){return x},$p:function(){return N},Ad:function(){return A},B:function(){return Z},BV:function(){return F},CO:function(){return O},Iy:function(){return h},KL:function(){return P},L8:function(){return g},O6:function(){return b},Tu:function(){return U},VF:function(){return y},Vm:function(){return E},WI:function(){return L},YN:function(){return w},Z8:function(){return k},Zp:function(){return C},_0:function(){return T},kr:function(){return m},p0:function(){return j},s1:function(){return _},ww:function(){return v},xs:function(){return M}});var r=n(99333),s=n(16757),a=n(2721),i=n(86025),o=n(58695),l=n(82363),u=n(92379),d=n(75172),c=n(68306),p=n(24740),f=n(93866);function h(e){return e.replace("file-service://","")}function g(e){return"file-service://"+e}function x(e){return e.startsWith("file-service://")}function m(e,t,n){switch(t){case"file_zero_bytes":return e.formatMessage(D.fileZeroBytes,n);case"file_too_large":return e.formatMessage(D.fileTooLarge,n);case"over_user_quota":return e.formatMessage(D.overUserQuota,n);case"file_not_found":case"file_expired":return e.formatMessage(D.fileNotFound,n);case"file_timed_out":return e.formatMessage(D.fileTimedOut,n);case"ace_pod_expired":return e.formatMessage(D.codeInterpreterSessionTimeout,n);case"permission_error":return e.formatMessage(D.permissionError,n);case"default_upload_error":case"file_rejected":return e.formatMessage(D.defaultCreateEntryError,n);case"default_download_link_error":return e.formatMessage(D.defaultDownloadLinkError,n);case"file_empty":return e.formatMessage(D.fileEmpty,n);case"too_many_tokens":return e.formatMessage(D.fileTooManyTokens,n);case"file_encrypted":return e.formatMessage(D.fileEncrypted,n);case"file_corrupted":return e.formatMessage(D.fileCorrupted,n);case"failed_upload_to_blobstore":return e.formatMessage(D.failedUploadToBlobStore,n);default:return e.formatMessage(D.unknownError)}}function y(){let e=(0,d.Z)();return(0,u.useCallback)((t,n)=>m(e,t,n),[e])}function b(){let{session:e}=(0,o.kP)(),{isUnauthenticated:t}=(0,i.u)(),n=(0,d.Z)();return async(s,i)=>{if(!t&&null==e)return p.m.danger(n.formatMessage(D.fileDownloadFailed)),!1;try{let e=await a.Z.getFileDownloadLink(s,void 0,t);if(e.status!==r.KF.Success)throw Error("File is not ready to download: "+JSON.stringify(e));let n=e.download_url,o=document.createElement("a");o.href=n,o.download=i,o.click(),window.open(n,"_blank")}catch(e){return p.m.danger(n.formatMessage(D.fileDownloadFailed)),!1}return!0}}function v(e,t){return t?.kind===s.OL.GizmoInteraction||t?.kind===s.OL.GizmoTest?t.gizmo?.product_features:e?.product_features}function w(e,t){let n=v(e,t);return n?.attachments?.type===r.Cd.CodeInterpreter?f.AJ.Interpreter:n?.attachments?.type===r.Cd.Multimodal?f.AJ.Multimodal:n?.attachments?.type===r.Cd.Retrieval?f.AJ.Retrieval:n?.attachments?.type===r.Cd.ContextConnector?f.AJ.ContextConnector:f.AJ.None}function _(e){return({md:"text/markdown",java:"text/x-java",py:"text/x-script.python",c:"text/x-c",cpp:"text/x-c++",h:"text/x-c++",php:"text/x-php",rb:"text/x-ruby",tex:"application/x-latext",ts:"text/x-typescript",cs:"text/x-csharp"})[e.split(".").pop()?.toLowerCase()??""]||""}function M(e,t,n,r,s){if(null==s)return e;let a=_(t);a&&(n=a),r&&(n=function(e){switch(e){case"application/vnd.google-apps.spreadsheet":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"application/vnd.google-apps.document":case"application/vnd.google-apps.presentation":return"text/plain";default:return e}}(n));let{accepted_mime_types:i,can_accept_all_mime_types:o}=s;return null!=i&&0!==i.length&&o?i.includes(n)?e:f.AJ.Interpreter:e}function T(e,t,n){let s=""!==t?t:_(n),a=e?.product_features?.attachments;return null==a?void 0:a.accepted_mime_types?.includes(s)?a.type:a.image_mime_types?.includes(s)?r.Cd.Multimodal:r.Cd.CodeInterpreter}function C(e,t){let n=v(e,t);return n?.attachments?.can_accept_all_mime_types?void 0:n?.attachments?.accepted_mime_types}function j(e,t){let{attachments:n}=v(e,t)??{};return n?.image_mime_types?n.image_mime_types:n?.type==="multimodal"?n.accepted_mime_types??P:[]}let P=["image/png","image/jpeg","image/gif","image/webp"];function k(e){return(0,u.useMemo)(()=>{if(void 0===e)return{};let t={"image/jpeg":[".jpg",".jpeg"],"image/svg+xml":[".svg"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]};return{accept:e.reduce((e,n)=>(n in t?e[n]=t[n]:n.includes("/")&&(e[n]=[`.${n.split("/")[1]}`]),e),{})}},[e])}function N(e){return e.split(".").pop()?.toLowerCase()}function O(e){let t=N(e);return null!=t&&["jpg","jpeg","png","gif","webp"].includes(t)}function E(e){let t=N(e);return null!=t&&["xls","xlsx","csv"].includes(t)}function F(e){let t=N(e);return null!=t&&["xls","xlsx"].includes(t)}function U(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fit";return new Promise((r,s)=>{let a=new FileReader;a.onerror=e=>{l.U.addError(Error("File reading has failed:",{cause:e})),s(Error("Failed to read the file."))},a.onload=a=>{let i=new Image;i.onerror=e=>{l.U.addError(Error("Image loading has failed:",{cause:e})),s(Error("Failed to load the image."))},i.onload=()=>{let a=document.createElement("canvas"),o,u=0,d=0;switch(n){case"fill":case"square":o=t/Math.min(i.width,i.height);break;case"fit":o=t/Math.max(i.width,i.height)}let c=i.width*o,p=i.height*o;"square"===n?(a.width=t,a.height=t,u=(t-c)/2,d=(t-p)/2):(a.width=c,a.height=p);let f=a.getContext("2d");if(null==f){l.U.addError("Canvas context creation failed. Your environment might not fully support HTML5 canvas."),s(Error("Failed to create canvas context."));return}f.drawImage(i,u,d,c,p);let h=e.type||"image/png";a.toBlob(t=>{t?r(new File([t],e.name,{type:h})):(l.U.addError("Blob creation failed. Blob is null."),s(Error("Failed to create blob from image data.")))},h)},null==a.target?(l.U.addError("Event target is null. Failed to load image."),s("Failed to load image.")):i.src=a.target.result},a.readAsDataURL(e)})}function L(e,t){return U(e,t,"square")}function Z(e){let t=e.name.split("/")??[];return(t[t.length-1]??"").replace(/[-_]/g," ").split(".")[0]}function A(e,t){return t?e.slice(0,-t.length-1):e}let D=(0,c.vU)({defaultCreateEntryError:{id:"fileUpload.defaultCreateEntryError",defaultMessage:"Unable to upload {fileName}"},defaultDownloadLinkError:{id:"fileUpload.defaultDownloadLinkError",defaultMessage:"Failed to get upload status for {fileName}"},unknownError:{id:"fileUpload.unknownError",defaultMessage:"Unknown error occurred"},fileZeroBytes:{id:"fileUpload.fileZeroBytes",defaultMessage:"File is empty"},fileTooLarge:{id:"fileUpload.fileTooLarge",defaultMessage:"File is too large"},overUserQuota:{id:"fileUpload.overUserQuota",defaultMessage:"User quota exceeded"},fileNotFound:{id:"fileUpload.fileNotFound",defaultMessage:"File not found"},fileTimedOut:{id:"fileUpload.fileTimedOut",defaultMessage:"File upload timed out. Please try again."},fileEmpty:{id:"fileUpload.fileEmpty",defaultMessage:"No text could be extracted from this file."},fileTooManyTokens:{id:"fileUpload.fileTooManyTokens",defaultMessage:"This file contains too much text content. Please try again with a smaller file."},fileEncrypted:{id:"fileUpload.fileEncrypted",defaultMessage:"This file is encrypted/requires a password to access. Please try again with an unencrypted file."},fileCorrupted:{id:"fileUpload.fileCorrupted",defaultMessage:"This file is corrupted. Please ensure the file is not corrupted and try again."},codeInterpreterSessionTimeout:{id:"fileUpload.codeInterpreterSessionTimeout",defaultMessage:"Code interpreter session expired"},permissionError:{id:"fileUpload.permissionError",defaultMessage:"Missing permission to access file"},fileDownloadFailed:{id:"filesModal.fileDownloadFailed",defaultMessage:"File download failed. Please try again."},failedUploadToBlobStore:{id:"fileUpload.failedUploadToBlobStore",defaultMessage:"Failed upload to files.oaiusercontent.com. Please ensure your network settings allow access to this site or contact your network administrator."}})},47313:function(e,t,n){n.d(t,{G:function(){return r}});let r=(0,n(92379).createContext)(void 0)},65994:function(e,t,n){n.d(t,{b:function(){return r}});let r="contentReference"},76482:function(e,t,n){n.d(t,{lx:function(){return i}});var r=n(38482),s=n.n(r);let a=s()(()=>Promise.all([n.e(6835),n.e(6617),n.e(893),n.e(1981),n.e(6731),n.e(4169),n.e(9027),n.e(9373),n.e(3347)]).then(n.bind(n,31343)).then(e=>e.FormattedText),{loadableGenerated:{webpack:()=>[31343]}});t.ZP=a;let i=s()(()=>Promise.all([n.e(6835),n.e(6617),n.e(893),n.e(1981),n.e(6731),n.e(4169),n.e(9027),n.e(9373),n.e(3347)]).then(n.bind(n,31343)).then(e=>e.UserFormattedText),{loadableGenerated:{webpack:()=>[31343]}})},44885:function(e,t,n){n.d(t,{R3:function(){return d},Zl:function(){return f},fL:function(){return c}});var r=n(98601),s=n(23763),a=n.n(s),i=n(56290);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}class l{constructor(e,t){this.updateReactComponentDisplay=t,(0,r.Z)(this,"requestUpdateRaf",null),(0,r.Z)(this,"_requestUpdate",()=>{this.requestUpdateRaf||(this.requestUpdateRaf=window.requestAnimationFrame(()=>{this._update(),this.requestUpdateRaf=null}))})}destroy(){this.requestUpdateRaf&&(window.cancelAnimationFrame(this.requestUpdateRaf),this.requestUpdateRaf=null)}}class u extends l{constructor(e,t){super(e,t),this.updateReactComponentDisplay=t,(0,r.Z)(this,"textMessageParts",void 0),(0,r.Z)(this,"textMessagePartsTextLength",void 0),(0,r.Z)(this,"displayedTextLength",void 0),(0,r.Z)(this,"displayNextCharTimeout",void 0),(0,r.Z)(this,"displayNextCharDelayMs",void 0),(0,r.Z)(this,"_update",()=>{this.updateReactComponentDisplay((0,i.$w)(this.textMessageParts,this.displayedTextLength))}),this.textMessageParts=e,this.textMessagePartsTextLength=(0,i.Vh)(this.textMessageParts).length,this.displayedTextLength=this.textMessagePartsTextLength,this.displayNextCharDelayMs=u.MAX_BUFFERING_MS_PER_CHAR}displayNextChar(){this.displayNextCharTimeout=void 0,this.isBuffering()&&(this.displayedTextLength++,this._requestUpdate(),this.displayNextCharTimeout=window.setTimeout(()=>this.displayNextChar(),this.displayNextCharDelayMs))}isBuffering(){return this.displayedTextLength<this.textMessagePartsTextLength}onMessagePartsUpdated(e){this.textMessageParts=e,this.textMessagePartsTextLength=(0,i.Vh)(this.textMessageParts).length;let t=this.textMessagePartsTextLength-this.displayedTextLength;if(t>0){let e=u.MAX_BUFFERING_LAG_MS/t;this.displayNextCharDelayMs=Math.min(e,u.MAX_BUFFERING_MS_PER_CHAR)}null==this.displayNextCharTimeout&&this.displayNextChar()}destroy(){super.destroy(),window.clearTimeout(this.displayNextCharTimeout)}}(0,r.Z)(u,"MAX_BUFFERING_LAG_MS",500),(0,r.Z)(u,"MAX_BUFFERING_MS_PER_CHAR",30);class d extends l{constructor(e,t){super(e,t),this.updateReactComponentDisplay=t,(0,r.Z)(this,"textMessageParts",void 0),(0,r.Z)(this,"textMessagePartsTextLength",void 0),(0,r.Z)(this,"displayedTextLength",void 0),(0,r.Z)(this,"chunkLength",void 0),(0,r.Z)(this,"displayNextChunkTimeout",void 0),(0,r.Z)(this,"_update",()=>{this.updateReactComponentDisplay((0,i.$w)(this.textMessageParts,this.displayedTextLength))}),this.textMessageParts=e,this.textMessagePartsTextLength=(0,i.Vh)(this.textMessageParts).length,this.displayedTextLength=this.textMessagePartsTextLength,this.chunkLength=0}displayNextChunk(){this.displayNextChunkTimeout=void 0,this.isBuffering()&&(this.displayedTextLength=Math.min(this.displayedTextLength+this.chunkLength,this.textMessagePartsTextLength),this._requestUpdate(),this.displayNextChunkTimeout=window.setTimeout(()=>this.displayNextChunk(),d.UPDATE_FREQUENCY_MS))}isBuffering(){return this.displayedTextLength<this.textMessagePartsTextLength}onMessagePartsUpdated(e){this.textMessageParts=e,this.textMessagePartsTextLength=(0,i.Vh)(this.textMessageParts).length;let t=this.textMessagePartsTextLength-this.displayedTextLength;t>=d.MIN_CHARS_BEHIND_TO_CATCHUP?(this.chunkLength=Math.ceil(t*d.UPDATE_FREQUENCY_MS/d.CATCHUP_TIME_MS),null==this.displayNextChunkTimeout&&this.displayNextChunk()):(this.displayNextChunkTimeout=void 0,window.clearTimeout(this.displayNextChunkTimeout),this.displayedTextLength=this.textMessagePartsTextLength,this.updateReactComponentDisplay((0,i.$w)(this.textMessageParts,this.displayedTextLength)))}destroy(){super.destroy(),window.clearTimeout(this.displayNextChunkTimeout)}}(0,r.Z)(d,"MIN_CHARS_BEHIND_TO_CATCHUP",20),(0,r.Z)(d,"CATCHUP_TIME_MS",300),(0,r.Z)(d,"UPDATE_FREQUENCY_MS",30);class c extends l{constructor(e,t,n){super(e,t),this.updateReactComponentDisplay=t,(0,r.Z)(this,"LAG_FACTORS",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({".":15,"!":15,"?":15,"\n":15,",":8,":":8,";":8,DEFAULT_LAG_FACTOR:.9,BUFFER_FACTOR:.08},window.__PUNCTUATION_BUFFER_LAG_FACTORS)),(0,r.Z)(this,"textMessageParts",void 0),(0,r.Z)(this,"textMessagePartsTextLength",void 0),(0,r.Z)(this,"concatenatedText",void 0),(0,r.Z)(this,"displayedTextLength",void 0),(0,r.Z)(this,"displayNextCharTimeout",void 0),(0,r.Z)(this,"isActivelyStreaming",void 0),(0,r.Z)(this,"debug",void 0),(0,r.Z)(this,"streamStartMs",void 0),(0,r.Z)(this,"averageMsPerChar",void 0),(0,r.Z)(this,"_update",()=>{let e=(0,i.$w)(this.textMessageParts,this.displayedTextLength);this.updateReactComponentDisplay(e)}),(0,r.Z)(this,"_throttledDebugLog",a()(e=>{this.debug&&console.debug(e)},500,{leading:!0,trailing:!0})),this.textMessageParts=e,this.textMessagePartsTextLength=(0,i.Vh)(this.textMessageParts).length,this.displayedTextLength=this.textMessagePartsTextLength,this.concatenatedText=(0,i.Vh)(this.textMessageParts),this.isActivelyStreaming=!1,this.debug=n?.debug??!1,this.streamStartMs=0,this.averageMsPerChar=0,this.debug&&console.debug(`PunctuationBuffer:
[lagFactors: ${JSON.stringify(this.LAG_FACTORS,null,2)}]`)}displayNextChar(){this.displayNextCharTimeout=void 0,this.isBuffering()&&(this.displayedTextLength++,this._requestUpdate(),this.displayNextCharTimeout=window.setTimeout(()=>this.displayNextChar(),this._getNextCharDelayMs()))}isBuffering(){return this.displayedTextLength<this.textMessagePartsTextLength}onMessagePartsUpdated(e,t){this.textMessageParts=e,this.isActivelyStreaming=t;let n=(0,i.Vh)(this.textMessageParts);this.concatenatedText=n,this.textMessagePartsTextLength=n.length,0===this.streamStartMs?this.streamStartMs=Date.now():this.averageMsPerChar=(Date.now()-this.streamStartMs)/this.textMessagePartsTextLength,this.displayNextCharTimeout||this.displayNextChar()}destroy(){super.destroy(),window.clearTimeout(this.displayNextCharTimeout)}_getNextCharDelayMs(){let e=this.concatenatedText[this.displayedTextLength-1],t=this.textMessagePartsTextLength-this.displayedTextLength,n=1/Math.max(t*this.LAG_FACTORS.BUFFER_FACTOR,1),r=(this.LAG_FACTORS[e]??this.LAG_FACTORS.DEFAULT_LAG_FACTOR)*n,s=this.averageMsPerChar*r;return this._throttledDebugLog(`PunctuationBuffer:
[lagMs: ${s}]
[lastChar: "${e}"]
[averageMsPerChar: ${this.averageMsPerChar}]
[lagFactor: ${r}]
[bufferLagFactor: ${n}]
[numBufferedChars: ${t}]
===`),s}}function p(e){return"text"===e.type}class f{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";(0,r.Z)(this,"buffer",void 0),(0,r.Z)(this,"text",void 0),(0,r.Z)(this,"onFlush",void 0),(0,r.Z)(this,"updateReactComponentDisplay",e=>{let t=e.filter(p).map(e=>e.text).join("");this.onFlush(t)}),this.buffer=new e([n],this.updateReactComponentDisplay),this.onFlush=t,this.text=n}appendText(e){this.text+=e,this.buffer.onMessagePartsUpdated([this.text],!0)}setText(e){this.text=e,this.buffer.onMessagePartsUpdated([this.text],!0)}isBuffering(){return this.buffer.isBuffering()}}},41871:function(e,t,n){n.d(t,{O1:function(){return v},XX:function(){return f},Xt:function(){return g},i$:function(){return y},xB:function(){return h}});var r=n(16757),s=n(66114),a=n(76482),i=n(47416),o=n(82363),l=n(19841),u=n(99661);n(92379);var d=n(75172),c=n(59122),p=n(651);function f(e){let{message:t}=e,{resolvedTheme:n}=(0,u.F)();return(0,p.jsx)(i.c.Provider,{value:{isWithinDataAnalysisToolMessage:!0},children:(0,p.jsx)(a.ZP,{className:(0,l.default)("markdown prose w-full break-words dark:prose-invert","dark"===n?"dark":"light"),children:h(t)})})}function h(e){function t(e,t){return`\`\`\`${t}
${e}
\`\`\``}if("code"===e.content.content_type)return t(e.content.text,"python");if("python"===e.recipient){if("text"!==e.content.content_type)throw Error("Unexpected content type for code message");let n=e.content.parts;if(1!==n.length||"string"!=typeof n[0])throw Error("Unexpected parts for code message");return t(n[0],"python")}throw Error("Unexpected code message format")}function g(e){let{message:t}=e,n=(0,d.Z)();if(t.content.content_type!==r.PX.ExecutionOutput)return null;let s=t.metadata?.aggregate_result;if(!s)return o.U.addError("Corrupt code execution result message"),null;let a=s.messages.filter(b),i=a.length>0,l=null!=s.final_expression_output,u=null!=s.in_kernel_exception;return(0,p.jsxs)(p.Fragment,{children:[i&&(0,p.jsx)(x,{label:"STDOUT/STDERR",output:a.map((e,t)=>(0,p.jsx)("span",{className:"stderr"===e.stream_name?"text-red-500":"",children:e.text},`${t}`))}),l&&(0,p.jsx)(x,{label:n.formatMessage({id:"codeInterpreterMessage.resultLabel",defaultMessage:"Result"}),output:s.final_expression_output}),u&&(0,p.jsx)(m,{traceback:s.in_kernel_exception.traceback.join("")})]})}function x(e){let{label:t,output:n}=e;return(0,p.jsxs)("div",{className:"bg-gray-700 p-4 text-xs",children:[(0,p.jsx)("div",{className:"mb-1 text-gray-400",children:t}),(0,p.jsx)("div",{className:"prose flex flex-col-reverse text-white",children:(0,p.jsx)("pre",{className:"shrink-0",children:n})})]})}function m(e){let{traceback:t}=e;return(0,p.jsx)("div",{className:"overflow-auto border-t border-gray-500 text-white",children:(0,p.jsx)("div",{className:"border-l-4 border-red-500 p-2 text-xs",children:(0,p.jsx)("div",{className:"scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",children:(0,p.jsx)("pre",{className:"shrink-0",children:t})})})})}function y(e){let{message:t}=e;if(t.content.content_type!==r.PX.ExecutionOutput)return null;let n=t.metadata?.aggregate_result;return n?(0,p.jsx)(p.Fragment,{children:n.messages.filter(v).map((e,t)=>(0,p.jsx)(c.Z,{jupyterMessage:e},t))}):(o.U.addError("Corrupt code execution result message"),null)}function b(e){return"stream"===e.message_type}function v(e){return"image"===e.message_type||"image_url"in e&&(0,s.$H)(e.image_url+"")}},59122:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(98601),s=n(99333),a=n(28146),i=n(66114),o=n(2721),l=n(92745),u=n(84760),d=n(92379),c=n(75172),p=n(62984),f=n(68306),h=n(651);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){let{jupyterMessage:t}=e,n=(0,l.h9)(),s=(0,c.Z)();if(n)return(0,h.jsxs)("div",{className:"my-1 flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-token-text-tertiary dark:border-white/10",children:[(0,h.jsx)(a.zS0,{className:"icon-lg"}),(0,h.jsx)(p.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},b.imageNotSupported))]});if(null!=t.image_payload)return(0,h.jsx)("img",{className:"my-1",src:`data:image/png;base64,${t.image_payload}`,alt:s.formatMessage(b.altText)});if(null!=t.image_url){let e=(0,i.Iy)(t.image_url);return(0,h.jsx)(y,{fileId:e})}return null}let m=Math.log(151)/Math.log(1.5);function y(e){let{fileId:t}=e,n=(0,c.Z)(),{data:r,isLoading:a,refetch:i}=(0,u.a)({queryKey:["getFileDownloadLink",t],queryFn:()=>o.Z.getFileDownloadLink(t),refetchInterval:e=>{let t=e.state.dataUpdateCount;return e.state.data?.status!==s.KF.Success&&!(t>m)&&e.state.status!==s.KF.Error&&100*Math.pow(1.5,t)}});return((0,d.useEffect)(()=>{if(r?.status===s.KF.Success){let e=new URL(r.download_url,location.toString()).searchParams.get("se");null!=e&&!a&&new Date>new Date(e)&&i()}},[r,a,i]),r?.status!==s.KF.Success)?null:(0,h.jsx)("img",{src:r.download_url,className:"my-1 max-h-full max-w-full",alt:n.formatMessage(b.altText)})}let b=(0,f.vU)({imageNotSupported:{id:"CodeExecutionOutputImage.imageNotSupported",defaultMessage:"Image output is not supported in a shared chat"},altText:{id:"CodeExecutionOutputImage.altText",defaultMessage:"Output image"}})},47416:function(e,t,n){n.d(t,{c:function(){return r}});let r=(0,n(92379).createContext)({isWithinDataAnalysisToolMessage:!1})},56290:function(e,t,n){n.d(t,{$w:function(){return i},Lm:function(){return o},Qq:function(){return a},Vh:function(){return s},xz:function(){return l}});var r=n(16757);function s(e){return e.map(e=>"string"==typeof e?e:"").join("")}function a(e){return e.map(e=>"text"===e.type?e.text:"").join("\n")}function i(e,t){let n=[],s=0;for(let a=0;a<e.length;a++){let i=e[a];if("string"==typeof i){if(null!=t&&t<s+i.length){n.push({type:"text",text:i.slice(0,t-s)});break}n.push({type:"text",text:i}),s+=i.length}else if(i.content_type===r.wW.ImageAssetPointer){let e=a>0?n[a-1]:null;e?.type==="images"?e.imageAssets.push(i):n.push({type:"images",imageAssets:[i]})}else i.content_type===r.wW.AudioTranscription&&n.push({type:"transcription",text:i.text})}return n}function o(e){let{isUserTurn:t,parts:n}=e;if(!t)return i(n);let s={text:[],images:[]};for(let e=0;e<n.length;e++){let t=n[e];"string"==typeof t?t.trim().length>0&&s.text.push({type:"text",text:t}):t.content_type===r.wW.AudioTranscription?s.text.push({type:"transcription",text:t.text}):t.content_type===r.wW.ImageAssetPointer&&s.images.push(t)}let a=[];return s.images.length>0&&a.unshift({type:"images",imageAssets:s.images}),a.push(...s.text.map(e=>({type:e.type,text:e.text}))),a}function l(e){let t=e&&new Date(e),n=t&&new Date(t);return n?`after ${n.getHours()%12||12}:${10>n.getMinutes()?"0":""}${n.getMinutes()} ${n.getHours()>=12?"PM":"AM"}`:"later"}},40833:function(e,t,n){n.d(t,{v:function(){return f}});var r=n(98601),s=n(10449),a=n(19841),i=n(92379),o=n(62984),l=n(68306),u=n(28146),d=n(651);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(e){let{align:t,arrowPadding:n,alignOffset:r,show:l,onDismiss:c,children:f,title:g,side:x,sideOffset:m,theme:y="default",badge:b="new",description:v,dismissOnOutsideClick:w=!1}=e,_=(0,i.useRef)(null);return(0,d.jsxs)(s.fC,{open:l,onOpenChange:e=>{e||c()},children:[(0,d.jsx)(s.xz,{asChild:!0,onClick:()=>{c()},ref:_,children:f}),(0,d.jsx)(s.h_,{children:(0,d.jsxs)(s.VY,{arrowPadding:n,alignOffset:r,align:t,side:x,sideOffset:m,onOpenAutoFocus:e=>{e.preventDefault()},onCloseAutoFocus:e=>{e.preventDefault()},onInteractOutside:e=>{e.target instanceof Element&&_.current?.contains(e.target)?e.preventDefault():w?c():e.preventDefault()},updatePositionStrategy:"always",className:(0,a.default)("relative z-10 animate-slideLeftAndFade select-none rounded-xl p-4 text-sm shadow-sm","default"===y?"bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-700":"bg-blue-400 text-white"),children:[(0,d.jsxs)("div",{className:"flex max-w-xs flex-col gap-1",children:[(0,d.jsxs)("div",{className:"mb-0.5 flex gap-2",children:["new"===b?(0,d.jsx)("span",{className:(0,a.default)("rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase leading-normal","default"===y?"bg-green-500 text-white":"bg-white text-blue-selection"),children:(0,d.jsx)(o.Z,p({},h.new))}):"beta"===b&&(0,d.jsx)("span",{className:"rounded-full bg-blue-100 px-1.5 text-[10px] font-semibold text-blue-600",children:(0,d.jsx)(o.Z,p({},h.beta))}),(0,d.jsx)("div",{className:"grow font-semibold",children:g}),(0,d.jsx)(s.x8,{className:"-my-1 -mr-1 p-1 opacity-70 transition hover:opacity-100",children:(0,d.jsx)(u.tPq,{className:"icon-sm"})})]}),void 0!==v&&(0,d.jsx)("div",{className:"",children:v})]}),(0,d.jsx)(s.Eh,{asChild:!0,children:(0,d.jsx)("div",{className:(0,a.default)("relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm","default"===y?"bg-gray-900 dark:bg-gray-50":"bg-blue-400")})})]})})]})}let h=(0,l.vU)({new:{id:"announcementTooltip.new",defaultMessage:"New"},beta:{id:"announcementTooltip.beta",defaultMessage:"Beta"}})},31353:function(e,t,n){n.d(t,{AW:function(){return h},Cp:function(){return c}});var r=n(98601),s=n(65994),a=n(22433),i=n(85302),o=n(18939),l=n.n(o);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,u=0,c=!1,p=!1,g=[...n].sort((e,t)=>e.start_idx-t.start_idx||e.end_idx-t.end_idx).reduce((t,n)=>{let r,a;if(n.end_idx>e.length)return t;switch(n.type){default:case"invalid":case"hidden":r=d(d({},n),{},{type:"hidden",invalid:"invalid"===n.type});break;case"image_v2":case"nav_list":case"tldr":case"optimistic_image_citation":a="block",r=d({},n);break;case"file":case"title_citation":case"location_search":case"time":a="inline",r=d({},n);break;case"webpage":case"webpage_extended":a="inline",r=o?{type:"grouped_webpages",items:[d(d({},n),{},{type:"webpage"})]}:d(d({},n),{},{type:"webpage"});break;case"calculator":case"stock":case"forecast":a="block",c=!0,p="stock"===n.type,r=d({},n);break;case"optimistic_image_inline":a="block",r="done"===n.status?d(d({},n),{},{type:"optimistic_image_citation"}):d(d({},n),{},{images:null!=n.image?[n.image]:[],type:"image_v2"})}return t.push({originalContentReference:n,newContentReference:r,index:u++,displayType:a}),s&&t.push({originalContentReference:n,newContentReference:d({type:"debug",matched_text:n.matched_text.replace(/(^【|】$)/g,"")},"webpage_extended"===n.type&&n.pub_date&&{pub_date:new Date(1e3*n.pub_date).toLocaleString()}),index:u++}),t},[]);o&&function(e){let t=new Map;e.forEach((n,r)=>{let{originalContentReference:s,newContentReference:a,index:i}=n;if("grouped_webpages"!==a.type)return;a.items=a.items.map(e=>(t.has(e.url)||t.set(e.url,{index:i??r}),d(d({},e),{},{index:t.get(e.url)?.index})));let o=e[r+1];if(null==o)return;let{newContentReference:l,originalContentReference:u}=o;"grouped_webpages"===l.type&&s.end_idx+1>=u.start_idx&&(l.items=[...a.items.map(e=>d(d({},e),{},{index:i??void 0})),...l.items],n.displayType=void 0)})}(g);let x=l()(g.filter(e=>{let{index:t,displayType:n}=e;return null!=t&&n}).map(e=>{let{newContentReference:t}=e;return t})),m=function(e,t){let n="",r=0,s=(0,i.J)(t),a=new Set(["forecast"]),o=-1,l=0;for(let t of e){let{originalContentReference:e,displayType:i}=t;a.has(e.type)&&(o=l);let{start_idx:u,end_idx:d}=e;if(n+=s.slice(r,u).join(""),r=d,i){if("block"===i)n+=f(l,"leaf","newline","newline");else{let e=0!==n.length&&n[n.length-1].match(/\s/)?void 0:"zero-width-space";n+=f(l,"inline",e)}l++}}return n+=s.slice(r).join(""),o>-1&&(n=f(o,"leaf")),n}(g,e);return m=h(m),t=x,x=c?t.map(e=>"tldr"===e.type?d(d({},e),{},{url:""}):e):t,p&&(x=function(e,t){let n=(t??[]).find(e=>"tldr"===e.type);return n?.url?e.map(e=>"stock"===e.type?d(d({},e),{},{url:e.url??n.url??""}):e):e}(x,n)),r&&({updatedText:m,updatedReferences:x}=function(e,t,n){let r=e.find(e=>(0,a.rH)(e)===a.Cs.CodeInterpreter),s=e.find(e=>(0,a.rH)(e)===a.Cs.CodeInterpreterTool);if(null!=r&&null!=s){let e=t.length;n.endsWith("```")&&(n+="\n"),n+=" "+f(e,"inline","zero-width-space","zero-width-space"),t.push({type:"code_execution",codeMessage:r,codeExecutionOutputMessage:s})}return{updatedText:n,updatedReferences:t}}(r,x,m)),{processedText:m,displayedContentReferences:x}}let p="&#8203;";function f(e,t,n,r){let a=`${s.b}[oaicite:${e}]{index=${e}}`;return`${"zero-width-space"===n?p:"newline"===n?"\n":""}${"leaf"===t?"::":":"}${a}${"zero-width-space"===r?p:"newline"===n?"\n":""}`}function h(e){let t=e,n=(t=t.replace(/【[^】]*$/g,"")).match(/(\n|^):::/g);return n&&n.length%2==1&&(t+="\n:::"),t=t.replace(/^\d+$/,"")}},39696:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(92379);function s(e,t){let n=(0,r.useRef)(e);(0,r.useEffect)(()=>{n.current=e},[e]),(0,r.useEffect)(()=>{if(null!=t){let e=window.setInterval(function(){n.current()},t);return()=>clearInterval(e)}},[t])}},15174:function(e,t,n){var r=n(92379);t.Z=function(){let e=(0,r.useRef)(!1);return(0,r.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,r.useCallback)(()=>e.current,[])}}}]);
//# sourceMappingURL=991-952e7f7376184590.js.map