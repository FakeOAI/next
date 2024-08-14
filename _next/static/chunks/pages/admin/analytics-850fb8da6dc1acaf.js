(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{92266:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return L},default:function(){return O}});var n=r(98601),a=r(68986),o=r(2721),s=r(84760),i=r(65998),l=r(99661),u=r(11941),c=r.n(u),d=r(92379),f=r(55969),p=r(75172),g=r(62984),m=r(68306),y=r(15478),h=r(651);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}async function v(e){let{queryKey:[t,{workspaceId:r}]}=e;return o.Z.getWorkspaceAnalytics(r)}function b(e){let{data:t,label:r,getWeekValue:n}=e,a=(0,p.Z)(),o=(0,l.F)().theme,s=(0,d.useMemo)(()=>(function(e){let t=getComputedStyle(document.body);return{animation:!1,scales:{y:{position:"right",beginAtZero:!0,ticks:{stepSize:3,color:t.getPropertyValue("--text-tertiary"),padding:12},grid:{tickLength:0,color:t.getPropertyValue("--border-medium")},border:{display:!1}},x:{grid:{display:!1},ticks:{color:t.getPropertyValue("--text-tertiary"),padding:20}}},plugins:{legend:!1,tooltip:{backgroundColor:t.getPropertyValue("--surface-primary"),titleColor:t.getPropertyValue("--text-primary"),bodyColor:t.getPropertyValue("--text-secondary"),displayColors:!1,padding:{top:8,left:8,right:8,bottom:8}}}}})(0),[o]),i=(0,d.useMemo)(()=>getComputedStyle(document.body).getPropertyValue("--text-secondary"),[o]),u={labels:t.weekly_data.map(e=>a.formatDate(e.week,{month:"numeric",day:"numeric"})),datasets:[{label:r,data:t.weekly_data.map(n),borderWidth:0,backgroundColor:i,barThickness:20}]};return(0,h.jsx)("div",{className:"flex h-full w-full items-center justify-center bg-token-main-surface-secondary p-4",children:(0,h.jsx)(f.$Q,{options:s,data:u,height:192})})}function k(e){let{label:t,value:r}=e;return(0,h.jsxs)("div",{className:"w-1/3 rounded bg-token-main-surface-secondary px-4 py-2",children:[(0,h.jsx)("label",{className:"text-sm text-token-text-secondary",children:t}),(0,h.jsx)("div",{className:"text-xl font-semibold text-token-text-primary",children:r})]})}function _(e){let{data:t}=e,r=(0,p.Z)(),n=t.weekly_data[t.weekly_data.length-2];return(0,h.jsxs)("div",{className:"mt-10",children:[(0,h.jsx)("div",{className:"mb-2 font-semibold text-token-text-primary",children:(0,h.jsx)(g.Z,w({},F.totals))}),(0,h.jsxs)("div",{className:"mb-16 flex gap-4",children:[(0,h.jsx)(k,{label:r.formatMessage(F.usersLabel),value:t.total_users}),(0,h.jsx)(k,{label:r.formatMessage(F.conversationsLabel),value:t.total_conversations}),(0,h.jsx)(k,{label:r.formatMessage(F.messagesLabel),value:t.total_messages})]}),(0,h.jsxs)(M,{children:[(0,h.jsx)("div",{className:"flex flex-col justify-between p-4",children:(0,h.jsxs)("div",{children:[(0,h.jsx)(j,{children:(0,h.jsx)(g.Z,w({},F.usageTitle))}),null!=n&&(0,h.jsxs)("div",{children:[(0,h.jsx)(E,{children:n.message_count}),(0,h.jsx)(U,{children:(0,h.jsx)(g.Z,w({},F.messagesLastWeek))})]})]})}),(0,h.jsx)("div",{children:(0,h.jsx)(b,{data:t,label:r.formatMessage(F.messagesChartLabel),getWeekValue:e=>e.message_count})})]}),(0,h.jsxs)(M,{children:[(0,h.jsx)("div",{children:(0,h.jsx)(b,{data:t,label:r.formatMessage(F.activeUsersChartLabel),getWeekValue:e=>e.active_users_count})}),(0,h.jsx)("div",{className:"flex grow flex-col justify-between p-4",children:(0,h.jsxs)("div",{children:[(0,h.jsx)(j,{children:(0,h.jsx)(g.Z,w({},F.weeklyUsersTitle))}),null!=n&&(0,h.jsxs)("div",{children:[(0,h.jsx)(E,{children:n.active_users_count}),(0,h.jsx)(U,{children:(0,h.jsx)(g.Z,w({},F.activeUsersLastWeek))})]})]})})]})]})}i.kL.register(i.uw,i.f$,i.od,i.ZL,i.Dx,i.u,i.De);let M=y.Z.div`mb-12 grid grid-cols-1 rounded-lg overflow-hidden border border-token-border-light sm:grid-cols-2`,j=y.Z.div`font-semibold`,E=y.Z.div`font-semibold text-3xl`,U=y.Z.div`text-sm text-token-text-tertiary`;function C(e){let{currentWorkspaceId:t}=e,r=(0,p.Z)(),{data:n,isLoading:o}=(0,s.a)({queryKey:["workspace-analytics",{workspaceId:t}],queryFn:v});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c(),{children:(0,h.jsx)("title",{children:r.formatMessage(F.title)})}),(0,h.jsx)(a.yG,{title:r.formatMessage(F.title),subtitle:r.formatMessage(F.pageDescription)}),(0,h.jsx)(a.hb,{showSpinner:o,children:void 0!==n?(0,h.jsx)(_,{data:n}):null})]})}let F=(0,m.vU)({title:{id:"workspaceAnalytics.title",defaultMessage:"Workspace Analytics"},pageDescription:{id:"workspaceAnalytics.understand",defaultMessage:"Understand how your workspace is using ChatGPT"},totals:{id:"workspaceAnalytics.totals",defaultMessage:"Totals over last 30 days"},usersLabel:{id:"workspaceAnalytics.usersLabel",defaultMessage:"Users"},conversationsLabel:{id:"workspaceAnalytics.conversationsLabel",defaultMessage:"Conversations"},messagesLabel:{id:"workspaceAnalytics.messagesLabel",defaultMessage:"Messages"},usageTitle:{id:"workspaceAnalytics.usageTitle",defaultMessage:"Usage"},messagesLastWeek:{id:"workspaceAnalytics.messagesLastWeek",defaultMessage:"Messages processed last week"},messagesLast30Days:{id:"workspaceAnalytics.messagesLast30Days",defaultMessage:"{count, plural, =0 {No messages} one {# message} other {# messages}} processed over last 30 days"},messagesChartLabel:{id:"workspaceAnalytics.messagesChartLabel",defaultMessage:"Messages"},weeklyUsersTitle:{id:"workspaceAnalytics.weeklyUsersTitle",defaultMessage:"Weekly users"},activeUsersChartLabel:{id:"workspaceAnalytics.activeUsersChartLabel",defaultMessage:"Active users"},activeUsersLastWeek:{id:"workspaceAnalytics.activeUsersLastWeek",defaultMessage:"Active users last week"},usersLast30Days:{id:"workspaceAnalytics.usersLast30Days",defaultMessage:"{count, plural, =0 {No active users} one {# active user} other {# active user}} over last 30 days"}});function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var L=!0;function O(e){return(0,h.jsx)(C,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}O.getLayout=function(e){return(0,h.jsx)(a.ZP,{mobilePageTitle:"Analytics",requireAdminPrivileges:!0,children:e})}},42606:function(e,t,r){"use strict";r.d(t,{I:function(){return o},o:function(){return s}});let n=["xlsx","pptx","docx"],a={"application/vnd.google-apps.spreadsheet":"xlsx","application/vnd.google-apps.presentation":"pptx","application/vnd.google-apps.document":"docx"};function o(e){return e?a[e.split(";")[0]]??null:null}function s(e){return e&&n.includes(e)?e:null}},84082:function(e,t,r){"use strict";r.d(t,{$e:function(){return o},EZ:function(){return s},Ql:function(){return a},dO:function(){return n},xC:function(){return i}});let n=10,a=4,o={duration:20,hasCloseButton:!0},s=512,i=536870912},93866:function(e,t,r){"use strict";r.d(t,{AJ:function(){return s},XX:function(){return l},xA:function(){return i}});var n,a,o=r(42606);let s=((n={})[n.None=0]="None",n[n.Multimodal=1]="Multimodal",n[n.Interpreter=2]="Interpreter",n[n.Retrieval=3]="Retrieval",n[n.ContextConnector=4]="ContextConnector",n[n.ProfilePicture=5]="ProfilePicture",n);function i(e){if(e)return{contextConnector:e.context_connector,sourceUrl:e.source_url,syntheticExtension:(0,o.o)(e.synthetic_extension),type:e.type}}let l=((a={}).Uploading="uploading",a.Ready="ready",a)},98628:function(e,t,r){"use strict";r.d(t,{E1:function(){return h},Sj:function(){return w},W7:function(){return p},cT:function(){return m},lU:function(){return y},po:function(){return g},sY:function(){return v}});var n=r(99333),a=r(2721),o=r(92319),s=r(99976),i=r(61619),l=r(68306),u=r(88815),c=r(24740),d=r(66114);let f={duration:20,hasCloseButton:!0};function p(e){return JSON.stringify({file:e.name,modified:e.lastModified,currentTime:new Date().toString()})}function g(e){return new Promise((t,r)=>{let n=new FileReader,a=new Image;n.onload=()=>{a.onload=()=>t(a),a.onerror=e=>r(e),a.src=n.result},n.readAsDataURL(e)})}async function m(e,t,r,l,d,p){let g=u.N.getState().resetRateLimits,m=n.EG.Initial;s.A.logEvent(i.M.uploadFileInitiated,{client:"web",useCase:l.kind,uploadEntry:"local"});let y=p.usesRetrievalIndex?performance.now():void 0;try{let{file_id:o,upload_url:s}=await a.Z.createFile(t.name,t.size,l,!!g);d.onFileCreated(e,o,s),m=n.EG.FileCreated;let i=l.kind===n.Ei.Gizmo?l.gizmoId:void 0,u=p.shouldUpdateProgress??!1,w=p.usesRetrievalIndex??!1,b=await a.Z.uploadFileToAzureStorage(t,s,t=>{u&&d.onFileUploadProgress(e,10+80*t)});if(d.onFileUploadProgress(e,90),201!==b.status&&x(b,o,w),m=n.EG.FileUploaded,await a.Z.processFileUpload(o,{gizmoId:i}),m=n.EG.FileProcessed,p.usesRetrievalIndex){let t=await h(o,i);t?.status===n.Xf.Skipped&&c.m.danger(r.formatMessage(v.retrievalSkippedFile,{fileName:t.name}),f),d.onFileUploaded(e,o,void 0,{fileTokenSize:t.file_size_tokens}),m=n.EG.RetrievalIndexCreated}else d.onFileUploaded(e,o,p.imageDimensions);null!=y&&a.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-y,type:"file"})}catch(a){w(r,t.name,a);let n="NotInstanceOfError";a instanceof o.gK?n=a.name:a instanceof o.Q0?n=`FatalServerError_type_${a.type??"undefined"}`:a instanceof Error?n=a.name:a instanceof o.vq&&(n=a.name),d.onError(e,"error",n,l,m)}}async function y(e,t,r,n,a){let{width:o,height:s}=await g(t);return m(e,t,r,{kind:n},a,{imageDimensions:{width:o,height:s}})}async function h(e,t){let r=Date.now()+6e4,s=e=>new Promise(t=>setTimeout(t,e)),i=0;for(;Date.now()<r;){let r=await a.Z.getRetrievalStatus(e,t);if(r.status===n.Xf.Success||r.status===n.Xf.Skipped)return r;if(r.status===n.Xf.Failed)throw new o.vq("Context extraction failed",r.error_code);i++,await s(Math.min(1e3,100*i))}throw new o.vq("Retrieval indexing timed out")}async function x(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="Unknown error";try{n=await e.data}catch(e){}throw r&&a.Z.markFileUploadFailed(t,{error:n}),new o.vq("File upload to blobstore failed","failed_upload_to_blobstore")}function w(e,t,r){let n=(0,d.kr)(e,"default_upload_error",{fileName:t});r instanceof o.vq&&null!=r.code&&(n=(0,d.kr)(e,r.code)),c.m.danger(n,f)}let v=(0,l.vU)({retrievalSkippedFile:{id:"useFilePickerState.retrievalSkippedFile",defaultMessage:'Unable to extract text from "{fileName}"'}})},66114:function(e,t,r){"use strict";r.d(t,{$H:function(){return y},$p:function(){return F},Ad:function(){return S},B:function(){return A},BV:function(){return O},CO:function(){return P},Iy:function(){return g},KL:function(){return U},L8:function(){return m},O6:function(){return w},Tu:function(){return T},VF:function(){return x},Vm:function(){return L},WI:function(){return N},YN:function(){return b},Z8:function(){return C},Zp:function(){return j},_0:function(){return M},kr:function(){return h},p0:function(){return E},s1:function(){return k},ww:function(){return v},xs:function(){return _}});var n=r(99333),a=r(16757),o=r(2721),s=r(86025),i=r(58695),l=r(82363),u=r(92379),c=r(75172),d=r(68306),f=r(24740),p=r(93866);function g(e){return e.replace("file-service://","")}function m(e){return"file-service://"+e}function y(e){return e.startsWith("file-service://")}function h(e,t,r){switch(t){case"file_zero_bytes":return e.formatMessage(D.fileZeroBytes,r);case"file_too_large":return e.formatMessage(D.fileTooLarge,r);case"over_user_quota":return e.formatMessage(D.overUserQuota,r);case"file_not_found":case"file_expired":return e.formatMessage(D.fileNotFound,r);case"file_timed_out":return e.formatMessage(D.fileTimedOut,r);case"ace_pod_expired":return e.formatMessage(D.codeInterpreterSessionTimeout,r);case"permission_error":return e.formatMessage(D.permissionError,r);case"default_upload_error":case"file_rejected":return e.formatMessage(D.defaultCreateEntryError,r);case"default_download_link_error":return e.formatMessage(D.defaultDownloadLinkError,r);case"file_empty":return e.formatMessage(D.fileEmpty,r);case"too_many_tokens":return e.formatMessage(D.fileTooManyTokens,r);case"file_encrypted":return e.formatMessage(D.fileEncrypted,r);case"file_corrupted":return e.formatMessage(D.fileCorrupted,r);case"failed_upload_to_blobstore":return e.formatMessage(D.failedUploadToBlobStore,r);default:return e.formatMessage(D.unknownError)}}function x(){let e=(0,c.Z)();return(0,u.useCallback)((t,r)=>h(e,t,r),[e])}function w(){let{session:e}=(0,i.kP)(),{isUnauthenticated:t}=(0,s.u)(),r=(0,c.Z)();return async(a,s)=>{if(!t&&null==e)return f.m.danger(r.formatMessage(D.fileDownloadFailed)),!1;try{let e=await o.Z.getFileDownloadLink(a,void 0,t);if(e.status!==n.KF.Success)throw Error("File is not ready to download: "+JSON.stringify(e));let r=e.download_url,i=document.createElement("a");i.href=r,i.download=s,i.click(),window.open(r,"_blank")}catch(e){return f.m.danger(r.formatMessage(D.fileDownloadFailed)),!1}return!0}}function v(e,t){return t?.kind===a.OL.GizmoInteraction||t?.kind===a.OL.GizmoTest?t.gizmo?.product_features:e?.product_features}function b(e,t){let r=v(e,t);return r?.attachments?.type===n.Cd.CodeInterpreter?p.AJ.Interpreter:r?.attachments?.type===n.Cd.Multimodal?p.AJ.Multimodal:r?.attachments?.type===n.Cd.Retrieval?p.AJ.Retrieval:r?.attachments?.type===n.Cd.ContextConnector?p.AJ.ContextConnector:p.AJ.None}function k(e){return({md:"text/markdown",java:"text/x-java",py:"text/x-script.python",c:"text/x-c",cpp:"text/x-c++",h:"text/x-c++",php:"text/x-php",rb:"text/x-ruby",tex:"application/x-latext",ts:"text/x-typescript",cs:"text/x-csharp"})[e.split(".").pop()?.toLowerCase()??""]||""}function _(e,t,r,n,a){if(null==a)return e;let o=k(t);o&&(r=o),n&&(r=function(e){switch(e){case"application/vnd.google-apps.spreadsheet":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"application/vnd.google-apps.document":case"application/vnd.google-apps.presentation":return"text/plain";default:return e}}(r));let{accepted_mime_types:s,can_accept_all_mime_types:i}=a;return null!=s&&0!==s.length&&i?s.includes(r)?e:p.AJ.Interpreter:e}function M(e,t,r){let a=""!==t?t:k(r),o=e?.product_features?.attachments;return null==o?void 0:o.accepted_mime_types?.includes(a)?o.type:o.image_mime_types?.includes(a)?n.Cd.Multimodal:n.Cd.CodeInterpreter}function j(e,t){let r=v(e,t);return r?.attachments?.can_accept_all_mime_types?void 0:r?.attachments?.accepted_mime_types}function E(e,t){let{attachments:r}=v(e,t)??{};return r?.image_mime_types?r.image_mime_types:r?.type==="multimodal"?r.accepted_mime_types??U:[]}let U=["image/png","image/jpeg","image/gif","image/webp"];function C(e){return(0,u.useMemo)(()=>{if(void 0===e)return{};let t={"image/jpeg":[".jpg",".jpeg"],"image/svg+xml":[".svg"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]};return{accept:e.reduce((e,r)=>(r in t?e[r]=t[r]:r.includes("/")&&(e[r]=[`.${r.split("/")[1]}`]),e),{})}},[e])}function F(e){return e.split(".").pop()?.toLowerCase()}function P(e){let t=F(e);return null!=t&&["jpg","jpeg","png","gif","webp"].includes(t)}function L(e){let t=F(e);return null!=t&&["xls","xlsx","csv"].includes(t)}function O(e){let t=F(e);return null!=t&&["xls","xlsx"].includes(t)}function T(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fit";return new Promise((n,a)=>{let o=new FileReader;o.onerror=e=>{l.U.addError(Error("File reading has failed:",{cause:e})),a(Error("Failed to read the file."))},o.onload=o=>{let s=new Image;s.onerror=e=>{l.U.addError(Error("Image loading has failed:",{cause:e})),a(Error("Failed to load the image."))},s.onload=()=>{let o=document.createElement("canvas"),i,u=0,c=0;switch(r){case"fill":case"square":i=t/Math.min(s.width,s.height);break;case"fit":i=t/Math.max(s.width,s.height)}let d=s.width*i,f=s.height*i;"square"===r?(o.width=t,o.height=t,u=(t-d)/2,c=(t-f)/2):(o.width=d,o.height=f);let p=o.getContext("2d");if(null==p){l.U.addError("Canvas context creation failed. Your environment might not fully support HTML5 canvas."),a(Error("Failed to create canvas context."));return}p.drawImage(s,u,c,d,f);let g=e.type||"image/png";o.toBlob(t=>{t?n(new File([t],e.name,{type:g})):(l.U.addError("Blob creation failed. Blob is null."),a(Error("Failed to create blob from image data.")))},g)},null==o.target?(l.U.addError("Event target is null. Failed to load image."),a("Failed to load image.")):s.src=o.target.result},o.readAsDataURL(e)})}function N(e,t){return T(e,t,"square")}function A(e){let t=e.name.split("/")??[];return(t[t.length-1]??"").replace(/[-_]/g," ").split(".")[0]}function S(e,t){return t?e.slice(0,-t.length-1):e}let D=(0,d.vU)({defaultCreateEntryError:{id:"fileUpload.defaultCreateEntryError",defaultMessage:"Unable to upload {fileName}"},defaultDownloadLinkError:{id:"fileUpload.defaultDownloadLinkError",defaultMessage:"Failed to get upload status for {fileName}"},unknownError:{id:"fileUpload.unknownError",defaultMessage:"Unknown error occurred"},fileZeroBytes:{id:"fileUpload.fileZeroBytes",defaultMessage:"File is empty"},fileTooLarge:{id:"fileUpload.fileTooLarge",defaultMessage:"File is too large"},overUserQuota:{id:"fileUpload.overUserQuota",defaultMessage:"User quota exceeded"},fileNotFound:{id:"fileUpload.fileNotFound",defaultMessage:"File not found"},fileTimedOut:{id:"fileUpload.fileTimedOut",defaultMessage:"File upload timed out. Please try again."},fileEmpty:{id:"fileUpload.fileEmpty",defaultMessage:"No text could be extracted from this file."},fileTooManyTokens:{id:"fileUpload.fileTooManyTokens",defaultMessage:"This file contains too much text content. Please try again with a smaller file."},fileEncrypted:{id:"fileUpload.fileEncrypted",defaultMessage:"This file is encrypted/requires a password to access. Please try again with an unencrypted file."},fileCorrupted:{id:"fileUpload.fileCorrupted",defaultMessage:"This file is corrupted. Please ensure the file is not corrupted and try again."},codeInterpreterSessionTimeout:{id:"fileUpload.codeInterpreterSessionTimeout",defaultMessage:"Code interpreter session expired"},permissionError:{id:"fileUpload.permissionError",defaultMessage:"Missing permission to access file"},fileDownloadFailed:{id:"filesModal.fileDownloadFailed",defaultMessage:"File download failed. Please try again."},failedUploadToBlobStore:{id:"fileUpload.failedUploadToBlobStore",defaultMessage:"Failed upload to files.oaiusercontent.com. Please ensure your network settings allow access to this site or contact your network administrator."}})},88815:function(e,t,r){"use strict";r.d(t,{J:function(){return a},N:function(){return o}});var n=r(68810);let a={label:"Auto",value:""},o=(0,n.Ue)(()=>({forceParagen:!1,forceParagenModel:a,forceNulligen:!1,forceIndepthFeedback:!1,forceIndepthFeedbackPrompt:"The user has opted in to provide additional feedback on the previous response. Encourage the user to share feedback that you can store in a memory to better meet their needs in future. Use no more than 3 turns. If at any point the user indicates no longer wanting to provide feedback, return to the original topic.",forceRateLimit:!1,resetRateLimits:!1,showDebugConversationTurns:!1,rebaseSystemMessageContent:null}))},61062:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/analytics",function(){return r(92266)}])}},function(e){e.O(0,[6835,9237,2342,4198,4089,1133,3718,3088,5696,1612,2349,893,2745,5162,9113,9725,6803,5011,3666,3127,3662,2888,9774,179],function(){return e(e.s=61062)}),_N_E=e.O()}]);
//# sourceMappingURL=analytics-850fb8da6dc1acaf.js.map