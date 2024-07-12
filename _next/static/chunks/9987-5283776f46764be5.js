"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9987],{95284:function(e,t,n){n.d(t,{a:function(){return x},q:function(){return h}});var s=n(94521),o=n(21904),i=n(5443),l=n(65530),r=n(41854),a=n(89987),c=n(2933),d=n(92379),u=n(62984),p=n(3445),m=n(651);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function h(e){var t,n,s;let{gizmoEditorData:i,onOpen:l}=e,r=null==i||null===(t=i.tools)||void 0===t?void 0:t.find(e=>e.type===o.qK.INTENT&&"prompt_config"in e.settings),{0:u}=(0,d.useState)(null!==(n=null==r?void 0:r.settings.prompt_config)&&void 0!==n?n:[]),{0:p}=(0,d.useState)(null!==(s=null==r?void 0:r.settings.state_keys)&&void 0!==s?s:[]);return(0,m.jsxs)(a.hj,{children:[(0,m.jsx)("div",{className:"text-sm",children:(0,m.jsx)(a.lX,{label:"Blocks + State",description:"Blocks and State for your GPT"})}),(0,m.jsxs)("div",{className:"mb space-y-1",children:[!(u||p)&&(0,m.jsx)("div",{className:"flex text-token-text-primary",children:"Add prompt blocks and state keys to your GPT"}),(0,m.jsx)(c.cY,{onClick:()=>l(),children:u||p?"Show Blocks & State":"Add Blocks & State"})]})]})}function x(e){var t,n,s;let{gizmoEditorData:l,updateGizmo:r,onClose:f}=e,h=null==l||null===(t=l.tools)||void 0===t?void 0:t.find(e=>e.type===o.qK.INTENT&&"prompt_config"in e.settings),{0:x,1:b}=(0,d.useState)(null!==(n=null==h?void 0:h.settings.prompt_config)&&void 0!==n?n:[]),{0:y,1:P}=(0,d.useState)(null!==(s=null==h?void 0:h.settings.state_keys)&&void 0!==s?s:[]),w={key_name:"",description:""},k={prompt_key:"",prompt:"",continuation:"",hidden:!1},O=()=>{r(e=>g(g({},e),{},{tools:h?e.tools.map(e=>e.type===o.qK.INTENT?g(g({},e),{},{settings:g(g({},e.settings),{},{prompt_config:x,state_keys:y})}):e):[...e.tools,{type:o.qK.INTENT,settings:{prompt_config:x,state_keys:y}}]}))};return(0,m.jsxs)("div",{className:"h-full overflow-auto px-4 pb-12 text-sm",children:[(0,m.jsxs)("div",{className:"relative flex flex-col items-center px-16 py-6 text-center",children:[(0,m.jsx)("div",{className:"absolute left-0 top-6",children:(0,m.jsx)(i.z,{color:"secondary",onClick:f,icon:p.DUf})}),(0,m.jsx)("div",{className:"text-xl font-semibold",children:(0,m.jsx)(u.Z,{id:"eIFoMg",defaultMessage:"Blocks & State"})}),(0,m.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,m.jsx)(u.Z,{id:"rdK8Dl",defaultMessage:"Construct your GPT with instruction blocks and state."})}),(0,m.jsx)(a.lX,{label:(0,m.jsx)("div",{className:"text-sm font-semibold text-token-text-tertiary",children:"Learn more"}),description:(0,m.jsxs)("div",{className:"space-y-2 text-sm font-normal",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Blocks"})," allow you to break up your GPT's instructions into smaller sections, letting the GPT decide which to load up in what scenario."]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"State"})," gives the GPT a per-user storage for data, that will be provided at the start of all new conversations."]})]})})]}),(0,m.jsx)(a.hj,{children:(0,m.jsxs)("div",{className:"mb-4",children:[(0,m.jsxs)("div",{className:"mb-4 space-y-5 text-lg",children:[(0,m.jsx)(a.lX,{label:(0,m.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,m.jsx)("span",{children:"Instruction Blocks"}),(0,m.jsx)(p.szr,{className:"icon-sm"})]}),description:(0,m.jsxs)("div",{className:"space-y-2",children:[(0,m.jsx)("div",{children:"Instruction Blocks are added to the end of your GPT's instructions when the GPT decides to use them."}),(0,m.jsx)("div",{children:"The GPT only knows these blocks by their name. and your initial GPT instructions must describe how to use at least one of these blocks."})]})}),(0,m.jsxs)("div",{className:"space-y-5 text-sm",children:[x.map((e,t)=>(0,m.jsx)(j,{promptKey:e.prompt_key,prompt:e.prompt,continuation:e.continuation,hidden:e.hidden,visible:!1,isDuplicate:x.filter(t=>t.prompt_key===e.prompt_key).length>1,onChange:e=>{let{promptKey:n,prompt:s,continuation:o,hidden:i}=e;b(e=>{let l=[...e];return l[t]={prompt_key:n,prompt:s,continuation:o,hidden:i},l}),O()},onDelete:e=>{let{promptKey:t}=e;b(e=>e.filter(e=>e.prompt_key!==t)),O()}},t)),(0,m.jsx)(c.cY,{onClick:()=>{b(e=>[...e,k])},children:"Add Block"})]}),(0,m.jsx)(a.lX,{label:(0,m.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,m.jsx)("span",{children:"Saved State"}),(0,m.jsx)(p.szr,{className:"icon-sm"})]}),description:(0,m.jsxs)("div",{className:"space-y-2",children:[(0,m.jsx)("div",{children:"State the GPT can save per-user, that will be provided at the start of all new conversations"}),(0,m.jsx)("div",{children:"Your GPT has access to write to these state entries, and read from them."}),(0,m.jsx)("div",{children:"The user can see this data."})]})}),y.map((e,t)=>(0,m.jsx)(v,{keyName:e.key_name,description:e.description,isDuplicate:y.filter(t=>t.key_name===e.key_name).length>1,onChange:e=>{let{keyName:n,description:s}=e;P(e=>{let o=[...e];return o[t]={key_name:n,description:s},o}),O()},onDelete:e=>{let{keyName:t}=e;P(e=>e.filter(e=>e.key_name!==t)),O()}},t))]}),(0,m.jsx)(c.cY,{onClick:()=>{P(e=>[...e,w])},children:"Add State Data"})]})})]})}function j(e){let{promptKey:t,prompt:n,continuation:s,hidden:o,visible:i,isDuplicate:c,onChange:u,onDelete:f}=e,{0:g,1:h}=(0,d.useState)(o),{0:x,1:j}=(0,d.useState)(i),v=[];t.length>20&&v.push({msg:"Block names work best when they are short"}),c&&v.push({msg:"Block names must be unique"});let y=v.length>0?p.ETw:void 0;return(0,m.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,m.jsxs)("div",{className:"flex space-x-2 text-sm",children:[(0,m.jsx)(a.lX,{collapsed:!x,label:"Block",onClick:()=>{j(!x)}}),(0,m.jsx)(l.Z,{name:"promptKey",value:t,onChange:e=>u({promptKey:e.target.value,prompt:n,continuation:s}),icon:y,className:"max-w-xs grow-0",placeholder:"Block name"})]}),v.map(e=>(0,m.jsx)("div",{className:"text-xs text-token-text-secondary",children:e.msg},e.msg)),x&&(0,m.jsxs)("div",{className:"mb-4 space-y-1",children:[(0,m.jsx)(r.Z,{rows:5,name:"prompt",value:n,onChange:e=>u({promptKey:t,prompt:e.target.value,continuation:s}),className:"grow",placeholder:"Block Text"}),b&&(0,m.jsxs)("div",{className:"flex space-x-2 text-sm",children:[(0,m.jsx)("div",{role:"button",className:"flex items-center space-x-2",onClick:()=>{u({promptKey:t,prompt:n,continuation:s,hidden:!g}),h(!g)},children:g?(0,m.jsx)(p.Xl7,{className:"icon-sm"}):(0,m.jsx)(p.tEF,{className:"icon-sm"})}),(0,m.jsx)(a.lX,{label:"Continue on to:",description:"When set, the GPT will automatically go to the that block after this one."}),(0,m.jsx)(l.Z,{name:"continuation",value:s,onChange:e=>u({promptKey:t,prompt:n,continuation:e.target.value}),className:"max-w-xs grow-0",placeholder:"Continuation"})]}),(0,m.jsx)("div",{role:"button",className:"flex items-center space-x-2",onClick:()=>{f({promptKey:t})},children:(0,m.jsx)(p.XHJ,{className:"icon-sm"})})]})]})}function v(e){let{keyName:t,description:n,isDuplicate:s,onChange:o,onDelete:i}=e,r=[];t.length>20&&r.push({msg:"State names work best when they are short"}),s&&r.push({msg:"State names must be unique"});let a=r.length>0?p.ETw:void 0;return(0,m.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,m.jsxs)("div",{className:"flex space-x-2 text-sm",children:[(0,m.jsx)(l.Z,{name:"key",value:t,onChange:e=>o({keyName:e.target.value,description:n}),icon:a,className:"max-w-xs grow-0",placeholder:"State Name"}),(0,m.jsx)(l.Z,{name:"description",value:n,onChange:e=>o({keyName:t,description:e.target.value}),className:"max-w-s flex-grow",placeholder:"Description"}),(0,m.jsx)("div",{role:"button",className:"flex items-center space-x-2",onClick:()=>{i({keyName:t})},children:(0,m.jsx)(p.XHJ,{className:"icon-sm"})})]}),r.map(e=>(0,m.jsx)("div",{className:"text-xs text-token-text-secondary",children:e.msg},e.msg))]})}let b=!1},89987:function(e,t,n){n.d(t,{yt:function(){return eb},lX:function(){return eN},hj:function(){return eP},B1:function(){return ew},r:function(){return eC},cK:function(){return e_},rv:function(){return eO},sY:function(){return eG}});var s,o,i,l,r=n(94521),a=n(41141),c=n(21904),d=n(38417),u=n(81816),p=n(62484),m=n(95284),f=n(5994),g=n(67165),h=n(92379),x=n(72349),j=n(75172),v=n(62984),b=n(50684),y=n(72693),P=n(3445),w=n(33403),k=n(52868),O=n(18532),N=n(61457),T=n(37234),C=n(58543),Z=n(83252),_=n(651);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function M(){return(0,_.jsx)("div",{className:"relative flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-token-border-medium",children:(0,_.jsx)(b.Z,{className:"h-1/4 w-1/4"})})}function D(e){let{gizmoEditorData:t,onFileChange:n,generateProfilePic:s,isGeneratingProfilePic:o,setIsGeneratingProfilePic:i}=e,l=(0,j.Z)(),{0:r,1:a}=(0,h.useState)(void 0),d=(0,h.useRef)(n);async function u(e){if(e.length>0){i(!1);let t=await (0,C.WI)(e[0],512),n=(0,T.W7)(t);a({tempId:n,file:t,status:N.XX.Uploading,progress:1,fileId:null,cdnUrl:null}),d.current("uploading"),(0,T.lU)(n,t,l,c.Ei.ProfilePicture,{onFileCreated(e,t,n){a(s=>"initial"!==s&&(null==s?void 0:s.tempId)===e&&s.status===N.XX.Uploading?G(G({},s),{},{progress:10,fileId:t,cdnUrl:n}):s)},onFileUploadProgress(e,t){a(n=>"initial"!==n&&(null==n?void 0:n.tempId)===e&&n.status===N.XX.Uploading?G(G({},n),{},{progress:t}):n)},onFileUploaded(e,t,n){a(t=>"initial"!==t&&(null==t?void 0:t.tempId)===e?(d.current(t),G(G({},t),{},{status:N.XX.Ready,progress:100,fileSpec:G({name:t.file.name,id:t.fileId,size:t.file.size},null!=n?n:{})})):t)},onError(e){a(t=>{if("initial"!==t&&(null==t?void 0:t.tempId)===e){d.current(void 0);return}return t})}})}}(0,h.useEffect)(()=>{d.current=n});let{open:p,getInputProps:m}=(0,x.uI)(G({disabled:!1,noClick:!0,onDropAccepted:u,onDropRejected:e=>(0,w.UJ)(e,l,N.AJ.ProfilePicture),multiple:!0,maxSize:O.xC},(0,C.Z8)(C.KL)));return(0,_.jsxs)("div",{className:"flex w-full items-center justify-center gap-4",children:[(0,_.jsxs)(g.d,{sideOffset:8,triggerButton:(0,_.jsx)("button",{className:"h-20 w-20",children:o?(0,_.jsx)(M,{}):null!=r&&"initial"!=r&&r.status!=N.XX.Ready?(0,_.jsxs)("div",{className:"relative h-full w-full overflow-hidden rounded-full",children:[(0,_.jsx)(k.l,{file:r.file}),r.status===N.XX.Uploading&&r.progress<90?(0,_.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black/5 text-white",children:(0,_.jsx)(y.Z,{percentage:r.progress,className:"h-6 w-6"})}):null]}):(null==t?void 0:t.profilePictureUrl)!=null&&(null==t?void 0:t.profilePictureUrl)!==""?(0,_.jsx)(Z.Z,{isFirstParty:!1,src:t.profilePictureUrl}):(0,_.jsx)("div",{className:"flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-token-border-medium",children:(0,_.jsx)(P.Vz5,{className:"text-4xl"})})}),children:[(0,_.jsx)(g.Z.Item,{onClick:p,children:(0,_.jsx)(v.Z,{id:"ERQwXg",defaultMessage:"Upload Photo"})}),(0,_.jsx)(g.Z.Item,{onClick:s,children:(0,_.jsx)(v.Z,{id:"NXAog/",defaultMessage:"Use DALL\xb7E"})})]}),(0,_.jsx)("input",G({},m()))]})}var S=n(5443),E=n(2933);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function U(e){var t,n,s;let{gizmoEditorData:o,updateGizmo:i}=e,l=null==o||null===(t=o.tools)||void 0===t?void 0:t.find(e=>e.type===c.qK.INTENT&&"intents"in e.settings),{0:r,1:a}=(0,h.useState)(null!==(n=null==l?void 0:l.settings.intents)&&void 0!==n?n:""),{0:d,1:u}=(0,h.useState)(null!==(s=null==l?void 0:l.settings.intent_hook)&&void 0!==s?s:""),{0:p,1:m}=(0,h.useState)(!1),f=(0,j.Z)(),g=()=>{i(e=>L(L({},e),{},{tools:l?e.tools.map(e=>e.type===c.qK.INTENT?L(L({},e),{},{settings:L(L({},e.settings),{},{intents:r,intent_hook:d})}):e):[...e.tools,{type:c.qK.INTENT,settings:{intents:r,intent_hook:d}}]})),m(!1)};return(0,_.jsxs)(eP,{children:[(0,_.jsx)(eN,{label:"GPT Script",description:f.formatMessage({id:"gizmo.gptScriptExplanation",defaultMessage:"Code and Intents to save GPT state"})}),p&&(0,_.jsxs)("div",{className:"mb-4",children:[(0,_.jsx)(eN,{label:"Intent Hook"}),(0,_.jsx)(ew,{value:d,rows:20,onChange:e=>u(e.target.value),placeholder:'def f(input):\nreturn {\n  "instructions": str(input.intent),\n  "conversation_state": input.conversation_state,\n  "user_state": input.user_state,\n  "pinned": {},\n}',className:"h-50 mb-4 block w-full resize-none rounded-md border border-gray-300 p-2 font-mono text-xs shadow-sm focus:border-blue-500 focus:ring-blue-500",spellCheck:"false"}),(0,_.jsx)(eN,{label:"Intents"}),(0,_.jsx)(ew,{value:r,rows:20,onChange:e=>a(e.target.value),placeholder:"Enter Intent",className:"h-50 mb-4"}),(0,_.jsx)(S.z,{color:"primary",onClick:()=>{g()},children:"Update"})]}),!p&&(0,_.jsx)(E.cY,{onClick:()=>m(!0),children:d?"Update Script":"Add Script"})]})}var A=n(94982),X=n(10852),B=n(4702),F=n(27603),R=n(48580),K=n(19841),q=n(7290),Y=n(556),W=n(18939),J=n.n(W),H=n(86078),Q=n.n(H),V=n(68306),$=n(74091),ee=n(95126),et=n(56489),en=n(83650);function es(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function eo(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?es(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):es(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ei(e){let{getInputProps:t,openFileDialog:n,gizmoId:s}=e,o=(0,ee.b)(),{gdrive_sync:i,o365:l}=function(){let{0:e,1:t}=(0,h.useState)({gdrive_sync:{already_oauth:!1,id:"",loaded:!1,access_token:""},o365:{already_oauth:!1,id:"",loaded:!1,access_token:""}});return(0,h.useEffect)(()=>{(async()=>{try{var e,n,s,o,i,l;let r=[c.PO.GDRIVE_SYNC_CONNECTOR,c.PO.O365],[a,d]=await Promise.all(r.map(e=>X.Z.getConnectorAccessToken(e)));t({gdrive_sync:{already_oauth:null!==(e=null==a?void 0:a.already_oauthed)&&void 0!==e&&e,id:null!==(n=null==a?void 0:a.id)&&void 0!==n?n:"",loaded:!0,access_token:null!==(s=null==a?void 0:a.access_token)&&void 0!==s?s:""},o365:{already_oauth:null!==(o=null==d?void 0:d.already_oauthed)&&void 0!==o&&o,id:null!==(i=null==d?void 0:d.id)&&void 0!==i?i:"",loaded:!0,access_token:null!==(l=null==d?void 0:d.access_token)&&void 0!==l?l:""}})}catch(e){t({gdrive_sync:{already_oauth:!1,id:"",loaded:!1,access_token:""},o365:{already_oauth:!1,id:"",loaded:!1,access_token:""}})}})()},[]),e}();return(0,_.jsx)("div",{children:(0,_.jsxs)(g.d,{contentAlign:"start",side:"top",triggerButton:(0,_.jsx)(S.z,{size:"medium",children:(0,_.jsx)(v.Z,{id:"aC1nyd",defaultMessage:"Upload"})}),children:[(0,_.jsx)(g.Z.Item,{children:(0,_.jsxs)(E.cY,{onClick:n,children:[(0,_.jsx)("input",eo({},t())),(0,_.jsx)(v.Z,{id:"fy5xdG",defaultMessage:"Upload files from desktop"})]})}),(0,_.jsxs)(g.Z.Item,{children:[i.loaded&&!i.already_oauth&&(0,_.jsxs)(E.cY,{onClick:()=>{(0,en.Up)({id:i.id},"gpts/editor/"+s)},children:[(0,_.jsx)("input",eo({},t())),(0,_.jsx)(v.Z,{id:"MgqCv4",defaultMessage:"Connect To Google Drive"})]}),i.loaded&&i.already_oauth&&(0,_.jsxs)(E.cY,{onClick:async()=>{(0,et.j)(o.currentLocale,c.PO.GDRIVE_SYNC_CONNECTOR,i.access_token,e=>{})},children:[(0,_.jsx)("input",eo({},t())),(0,_.jsx)(v.Z,{id:"/EdQ8p",defaultMessage:"Pick Folders From Google Drive"})]})]}),(0,_.jsxs)(g.Z.Item,{children:[l.loaded&&!l.already_oauth&&(0,_.jsxs)(E.cY,{onClick:()=>{(0,en.Up)({id:l.id},"gpts/editor/"+s)},children:[(0,_.jsx)("input",eo({},t())),(0,_.jsx)(v.Z,{id:"dVKP7F",defaultMessage:"Connect To One Drive"})]}),l.loaded&&l.already_oauth&&(0,_.jsxs)(E.cY,{onClick:()=>{},children:[(0,_.jsx)("input",eo({},t())),(0,_.jsx)(v.Z,{id:"mADD8i",defaultMessage:"Pick Files/Folders From One Drive"})]})]})]})})}var el=n(93747),er=n(15236),ea=n(51857),ec=n.n(ea);function ed(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function eu(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ed(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ed(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ep(e){var t,n;let{gizmoEditorData:s,requireGizmoId:o,currentModelConfig:i,updateGizmo:l}=e,r=(0,j.Z)(),{0:a,1:d}=(0,h.useState)(0),u=(0,h.useRef)(new Map),p=(0,C.Zp)(i,void 0),m=async e=>{el.A.logEvent(er.M.uploadFile,{client:"web",eventSource:"mouse",intent:"gizmo"});let t=await o();e.length>0&&await Promise.all(e.map(e=>{let n=(0,T.W7)(e);u.current.set(n,{tempId:n,gizmoId:t,file:e,status:N.XX.Uploading,progress:1,fileId:null,cdnUrl:null}),(0,T.cT)((0,T.W7)(e),e,r,{kind:c.Ei.Gizmo,gizmoId:t},{onFileUploaded:(e,t,n,s)=>{let o=u.current.get(e);null!=o&&null!=o.fileId&&(l(e=>{var t;return eu(eu({},e),{},{files:[...null!==(t=e.files)&&void 0!==t?t:[],{file_id:o.fileId,name:o.file.name,size:o.file.size,type:o.file.type,last_modified:o.file.lastModified,file_size_tokens:null==s?void 0:s.fileTokenSize}]})}),u.current.delete(e),d(e=>e+1))},onFileCreated:(n,s,o)=>{u.current.set(n,eu(eu({tempId:n,gizmoId:t,file:e,status:N.XX.Uploading,progress:1},u.current.get(n)),{},{fileId:s,cdnUrl:o})),d(e=>e+1)},onFileUploadProgress:(e,t)=>{let n=u.current.get(e);(null==n?void 0:n.status)===N.XX.Uploading&&u.current.set(e,eu(eu({},n),{},{progress:t})),d(e=>e+1)},onError:e=>{u.current.delete(e)}},{usesRetrievalIndex:null!=i&&(0,C._0)(i,e.type,e.name)===c.Cd.Retrieval})}))},{getInputProps:f,open:g}=(0,x.uI)(eu({disabled:!1,noClick:!0,onDropAccepted:m,multiple:!0,maxSize:O.xC,maxFiles:10},(0,C.Z8)(p))),b=null!==(t=null==s?void 0:s.files)&&void 0!==t?t:[];function y(e){return(0,_.jsx)(k.Z,{onRemoveFileClick:()=>{u.current.delete(e.tempId),d(e=>e+1)},file:e.file,loadingPercentage:e.status===N.XX.Uploading?e.progress:void 0},e.tempId)}function P(e){return(0,_.jsx)(k.Z,{file:e.name,fileId:e.file_id,onRemoveFileClick:()=>l(t=>{var n;return eu(eu({},t),{},{files:null==t||null===(n=t.files)||void 0===n?void 0:n.filter(t=>t.file_id!==e.file_id)})}),gizmoId:null==s?void 0:s.id},e.file_id)}let w=Array.from(u.current.values()).filter(e=>b.every(t=>t.file_id!==e.fileId)),[Z,I]=ec()(w,e=>null!=i&&(0,C._0)(i,e.file.type,e.file.name)===c.Cd.CodeInterpreter),[G,M]=ec()(b,e=>null!=i&&null!=e.type&&(0,C._0)(i,e.type,e.name)===c.Cd.CodeInterpreter),D=(0,h.useRef)(G.length);(0,h.useEffect)(()=>{G.length>D.current&&l(e=>{var t,n;return null!==(t=e.tools)&&void 0!==t&&t.some(e=>e.type===c.qK.PYTHON)?e:eu(eu({},e),{},{tools:[...null!==(n=e.tools)&&void 0!==n?n:[],{type:c.qK.PYTHON}]})}),D.current=G.length},[G.length]);let S=null!==(n=null==s?void 0:s.id)&&void 0!==n?n:"",{value:z}=(0,R.sB)("4037675415");return(0,_.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,_.jsx)("div",{className:"rounded-lg text-token-text-tertiary",children:(0,_.jsx)(v.Z,eu({},em.knowledgeWarning))}),I.length>0||M.length>0?(0,_.jsxs)("div",{className:"flex flex-wrap gap-2",children:[I.map(y),M.map(P)]}):null,Z.length>0||G.length>0?(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"mb-2 text-xs text-token-text-tertiary",children:(0,_.jsx)(v.Z,{id:"i/QurZ",defaultMessage:"The following files are only available for Code Interpreter:"})}),(0,_.jsxs)("div",{className:"flex flex-wrap gap-2",children:[Z.map(y),G.map(P)]})]}):null,z?(0,_.jsx)(ei,{getInputProps:f,openFileDialog:g,gizmoId:S}):(0,_.jsx)("div",{children:(0,_.jsxs)(E.cY,{onClick:g,children:[(0,_.jsx)("input",eu({},f())),(0,_.jsx)(v.Z,{id:"sr8Qp/",defaultMessage:"Upload files"})]})})]})}let em=(0,V.vU)({knowledgeWarning:{id:"gizmo.knowledgeWarning",defaultMessage:"If you upload files under Knowledge, conversations with your GPT may include file contents. Files can be downloaded when Code Interpreter is enabled"}});var ef=n(49217);function eg(e){let{placeholder:t,text:n,onChange:s,onClose:o}=e;return(0,_.jsx)(ef.Z,{className:"!max-h-[100vh] !max-w-[80vw]",type:"success",isOpen:!0,onClose:o,primaryButton:(0,_.jsx)(E.cY,{onClick:o,children:(0,_.jsx)(v.Z,{id:"FeFVdS",defaultMessage:"Close"})}),children:(0,_.jsx)("textarea",{className:"h-[70vh] w-full resize-none rounded-lg bg-token-main-surface-primary dark:border-gray-700",value:n,onChange:e=>{s(e.target.value)},placeholder:t})})}var eh=n(88454),ex=n(31310);function ej(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function ev(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ej(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ej(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let eb=$.Z.input(s||(s=(0,a.Z)(["w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary"]))),ey=$.Z.div(o||(o=(0,a.Z)(["text-sm text-red-500"]))),eP=$.Z.div(i||(i=(0,a.Z)(["mb-6"]))),ew=$.Z.textarea(l||(l=(0,a.Z)(["w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32"])));function ek(){return(0,_.jsx)("div",{className:"ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-semibold leading-none text-token-text-tertiary",children:"?"})}function eO(e){let{description:t}=e;return(0,_.jsx)(p.u,{wide:!0,label:t,delayDuration:0,children:(0,_.jsx)(ek,{})})}function eN(e){let{label:t,description:n,collapsed:s,onClick:o}=e,i=(0,_.jsx)("label",{className:"block font-semibold text-token-text-primary",children:t});return(0,_.jsxs)("div",{className:"mb-1.5 flex items-center",onClick:o,children:[void 0!==s&&(s?(0,_.jsx)(P.r0F,{className:"icon-sm"}):(0,_.jsx)(P.Tg4,{className:"icon-sm"})),n?(0,_.jsx)(p.u,{label:n,sideOffset:4,side:"top",delayDuration:0,children:i}):(0,_.jsx)(_.Fragment,{children:i})]})}function eT(e){let{children:t,collapsed:n,initial:s}=e;return(0,_.jsx)(q.M,{initial:s,children:!n&&(0,_.jsx)(Y.E.div,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},children:t})})}function eC(e){var t;let{actionTool:n,onShowActionsEditor:s,isDisabled:o}=e,i="metadata"in n?null===(t=n.metadata)||void 0===t?void 0:t.domain:void 0;return(0,_.jsxs)("div",{className:(0,K.default)("flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",o?"bg-token-main-surface-secondary":""),onClick:s,children:[(0,_.jsx)("div",{className:"h-9 grow px-3 py-2",children:null!=i?i:(0,_.jsx)("span",{className:"text-red-500",children:(0,_.jsx)(v.Z,{id:"TJYXrY",defaultMessage:"Invalid action"})})}),(0,_.jsx)("div",{className:"w-px bg-token-border-medium"}),(0,_.jsx)("button",{disabled:o,className:"flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",children:(0,_.jsx)(P.SWE,{className:"icon-sm"})})]})}function eZ(e){var t,n,s;let{gizmo:o,onShowActionsEditor:i,isDisabled:l}=e,r=(0,j.Z)(),a=(0,_.jsxs)("div",{className:"space-y-1",children:[null==o||null===(t=o.tools)||void 0===t?void 0:t.map((e,t)=>{var n;return e.type!==c.qK.JIT_PLUGIN?null:(0,_.jsxs)("div",{children:[(0,_.jsx)(eC,{isDisabled:l,actionTool:e,onShowActionsEditor:()=>i(e.metadata.domain)}),(null===(n=e.metadata.auth)||void 0===n?void 0:n.type)==="oauth"&&(0,_.jsx)(d.Z,{label:r.formatMessage(eG.callbackUrlLabel),value:"".concat("https://chat.openai.com","/aip/").concat(e.metadata.action_id,"/oauth/callback"),onCopied:()=>{A.m.success("Copied to clipboard",{duration:3})}})]},t)}),(null!==(n=null==o||null===(s=o.tools)||void 0===s?void 0:s.filter(e=>e.type===c.qK.JIT_PLUGIN))&&void 0!==n?n:[]).length>=f.L5?(0,_.jsx)("div",{children:r.formatMessage(eG.maxActionsReached,{number:f.L5})}):(0,_.jsx)(E.cY,{disabled:l,onClick:()=>{i("Unknown domain")},className:"mt-2",children:(0,_.jsx)(v.Z,ev({},eG.createActionLabel))})]});return l?(0,_.jsx)(p.u,{side:"top",label:r.formatMessage(eG.disabledCustomActionsTooltip),children:a}):a}function e_(e){var t,n,s,o,i,l,r,a;let{gizmoEditorData:d,updateGizmo:p,currentModelConfig:g,generateProfilePic:x,setIsUploadingProfilePic:b,isGeneratingProfilePic:y,setIsGeneratingProfilePic:w,requireGizmoId:k,onShowActionsEditor:O,onShowBlocksEditor:N}=e,T=null!==(t=null==d?void 0:d.tools)&&void 0!==t?t:[],{0:C,1:Z}=(0,h.useState)(!1),{0:I,1:G}=(0,h.useState)(!0),M=null!==(n=null==d?void 0:d.promptStarters)&&void 0!==n?n:[],S=[...M,...M.length<12?[""]:[]],z=(0,ex.bw)(d),L=(0,B.t)(),A=null==L?void 0:L.isWorkspaceAccount(),K=(0,u.C)(F.L0.WorkspaceGPTCustomActions),q=(0,j.Z)(),{value:Y}=(0,R.sB)("804300613"),{value:W}=(0,R.sB)("736089948"),{value:H}=(0,R.sB)("3047641741");return(0,_.jsxs)("div",{className:"flex h-full grow flex-col overflow-y-auto px-2 pt-6 text-sm",children:[(0,_.jsxs)("div",{className:"grow",children:[(0,_.jsxs)(eP,{children:[(0,_.jsx)(D,{gizmoEditorData:d,generateProfilePic:x,isGeneratingProfilePic:y,setIsGeneratingProfilePic:w,onFileChange:async e=>{if(null!=e&&"uploading"!==e&&null!=e.fileId){let t=await X.Z.getFileDownloadLink(e.fileId);t.status===c.KF.Success&&p({profilePictureId:null!=e.fileId?e.fileId:void 0,profilePictureUrl:t.download_url})}else p({profilePictureId:void 0,profilePictureUrl:void 0});b("uploading"===e)}}),(0,_.jsx)(eN,{label:(0,_.jsx)(v.Z,{id:"M4dZms",defaultMessage:"Name"}),description:(0,_.jsx)(v.Z,{id:"+Gkni2",defaultMessage:"The name of your GPT"})}),(0,_.jsx)(eb,{type:"text",placeholder:q.formatMessage(eG.gptNamePlaceholder),value:null!==(s=null==d?void 0:d.name)&&void 0!==s?s:"",onChange:e=>{p({name:e.target.value})},onBlurCapture:()=>p(e=>ev(ev({},e),{},{name:e.name.trim()}))}),z.includes(ex.hs.GizmoNameTooLong)?(0,_.jsx)(ey,{className:"mt-1",children:(0,_.jsx)(v.Z,ev(ev({},eG.nameTooLong),{},{values:{length:f.aI}}))}):null]}),(0,_.jsxs)(eP,{className:"mt-4",children:[(0,_.jsx)(eN,{label:(0,_.jsx)(v.Z,{id:"YDzNvf",defaultMessage:"Description"}),description:(0,_.jsx)(v.Z,{id:"dpxCw8",defaultMessage:"Short description of what this GPT does"})}),(0,_.jsx)(eb,{type:"text",placeholder:q.formatMessage(eG.descriptionPlaceholder),value:null!==(o=null==d?void 0:d.description)&&void 0!==o?o:"",onChange:e=>p({description:e.target.value}),onBlurCapture:()=>p(e=>{var t,n;return ev(ev({},e),{},{description:null!==(t=null===(n=e.description)||void 0===n?void 0:n.trim())&&void 0!==t?t:""})})}),z.includes(ex.hs.GizmoDescriptionTooLong)?(0,_.jsx)(ey,{className:"mt-1",children:(0,_.jsx)(v.Z,ev(ev({},eG.descriptionTooLong),{},{values:{length:f.P_}}))}):null]}),(0,_.jsxs)(eP,{children:[(0,_.jsx)(eN,{label:(0,_.jsx)(v.Z,{id:"2SO0RJ",defaultMessage:"Instructions"}),description:q.formatMessage(eG.instructionsSubtitle)}),(0,_.jsxs)("div",{className:"relative",children:[(0,_.jsx)(ew,{className:"resize-none",rows:8,value:null==d?void 0:d.instructions,onChange:e=>p({instructions:e.target.value}),onBlurCapture:()=>p(e=>ev(ev({},e),{},{instructions:e.instructions.trim()})),placeholder:q.formatMessage(eG.instructionsSubtitle)}),(0,_.jsx)("button",{className:"absolute bottom-3 right-2 text-token-text-tertiary",onClick:()=>Z(!0),children:(0,_.jsx)(P.Qq,{className:"icon-sm"})})]}),z.includes(ex.hs.GizmoInstructionsTooLong)?(0,_.jsx)(ey,{className:"mt-1",children:(0,_.jsx)(v.Z,ev(ev({},eG.instructionsTooLong),{},{values:{length:f.vi}}))}):null]}),(0,_.jsxs)(eP,{children:[(0,_.jsx)(eN,{label:(0,_.jsx)(v.Z,{id:"6rfYOX",defaultMessage:"Conversation starters"}),description:(0,_.jsx)(v.Z,{id:"OSOIpd",defaultMessage:"Examples for the user to start the conversation"})}),(0,_.jsx)("div",{className:"flex flex-col gap-1",children:S.map((e,t)=>(0,_.jsxs)("div",{className:"flex items-center",children:[(0,_.jsx)(eb,{className:"rounded-r-none",value:e,type:"text",onChange:e=>{let n=e.target.value;p(e=>{var s;return ev(ev({},e),{},{promptStarters:J()(t>=(null!==(s=M.length)&&void 0!==s?s:0)?[...null!=M?M:[],n]:M.map((e,s)=>{if(s===t){if(""===n)return;return n}return e}))})})}}),(0,_.jsx)("button",{className:"flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none border border-l-0 border-token-border-medium",onClick:()=>p(e=>ev(ev({},e),{},{promptStarters:M.filter((e,n)=>n!==t)})),children:(0,_.jsx)(P.tPq,{className:"icon-sm"})})]},t))})]}),(0,_.jsxs)(eP,{children:[(0,_.jsx)(eN,{label:(0,_.jsx)(v.Z,{id:"bwXSkU",defaultMessage:"Knowledge"}),description:q.formatMessage(eG.knowledgeExplanation)}),(0,_.jsx)(ep,{gizmoEditorData:d,requireGizmoId:k,currentModelConfig:g,updateGizmo:p})]}),(0,_.jsxs)(eP,{children:[(0,_.jsx)(eN,{label:(0,_.jsx)(v.Z,{id:"mcAwDU",defaultMessage:"Capabilities"}),description:(0,_.jsx)(v.Z,{id:"2exQT6",defaultMessage:"Functionality this GPT can use"})}),(0,_.jsx)(eh.W,{enabledTools:T,onEnabledToolsChange:e=>p({tools:e})})]}),(0,_.jsxs)(eP,{children:[(0,_.jsx)(eN,{label:(0,_.jsx)(v.Z,{id:"7r7v+u",defaultMessage:"Actions"}),description:(0,_.jsx)(v.Z,{id:"fBln7I",defaultMessage:"APIs this GPT can use"})}),(0,_.jsx)(eZ,{isDisabled:!!(A&&!K),gizmo:d,onShowActionsEditor:O})]}),!A&&((null!==(l=null===(r=d.files)||void 0===r?void 0:r.length)&&void 0!==l?l:0)>0||(null==d||null===(a=d.tools)||void 0===a?void 0:a.some(e=>e.type===c.qK.JIT_PLUGIN)))&&(0,_.jsxs)(eP,{children:[(0,_.jsx)(eN,{label:(0,_.jsx)(v.Z,{id:"R3KeU7",defaultMessage:"Additional Settings"}),collapsed:!!I,onClick:()=>{G(e=>!e)}}),(0,_.jsx)(eT,{collapsed:I,initial:!1,children:(0,_.jsx)(E.f8,{className:"mx-3 my-1",labelClassName:"w-full cursor-pointer",label:(0,_.jsx)(v.Z,{id:"tZgwFW",defaultMessage:"Use conversation data in your GPT to improve our models"}),id:"improve-chatgpt",checked:!d.trainingDisabled,onChange:()=>{p({trainingDisabled:!d.trainingDisabled})}})})]}),Y&&(0,_.jsx)(eI,{gizmoEditorData:d,updateGizmo:p}),W&&!H&&(0,_.jsx)(U,{gizmoEditorData:d,updateGizmo:p}),H&&(0,_.jsx)(m.q,{gizmoEditorData:d,onOpen:N})]}),C&&(0,_.jsx)(eg,{text:null!==(i=d.instructions)&&void 0!==i?i:"",onChange:e=>{p({instructions:e})},onClose:()=>Z(!1),placeholder:q.formatMessage(eG.instructionsSubtitle)})]})}let eI=Q()(()=>Promise.all([n.e(8682),n.e(5904),n.e(6594)]).then(n.bind(n,68980)).then(e=>e.GizmoContactsEditor),{loadableGenerated:{webpack:()=>[68980]}}),eG=(0,V.vU)({nameTooLong:{id:"gizmo.nameTooLong",defaultMessage:"GPT names cannot be longer than {length} characters."},knowledgeExplanation:{id:"gizmo.knowledgeExplanation",defaultMessage:"Additional files for this GPT to reference."},descriptionTooLong:{id:"gizmo.descriptionTooLong",defaultMessage:"GPT descriptions cannot be longer than {length} characters."},instructionsTooLong:{id:"gizmo.instructionsTooLong",defaultMessage:"GPT instructions cannot be longer than {length} characters."},disabledCustomActionsTooltip:{id:"gizmo.disabledCustomActionsTooltip",defaultMessage:"Custom actions are disabled for your workspace. Contact your admin to enable them."},createActionLabel:{id:"gizmo.createActionLabel",defaultMessage:"Create new action"},maxActionsReached:{id:"gizmo.maxActionsReached",defaultMessage:"GPTs can have a maximum of {number} actions"},descriptionPlaceholder:{id:"gizmo.descriptionPlaceholder",defaultMessage:"Add a short description about what this GPT does"},instructionsSubtitle:{id:"gizmo.instructionsSubtitle",defaultMessage:"What does this GPT do? How does it behave? What should it avoid doing?"},gptNamePlaceholder:{id:"gizmo.gptNamePlaceholder",defaultMessage:"Name your GPT"},callbackUrlLabel:{id:"gizmo.callbackUrlLabel",defaultMessage:"Callback URL"}})},88454:function(e,t,n){n.d(t,{W:function(){return h}});var s=n(94521),o=n(21904),i=n(81816),l=n(62484),r=n(89987),a=n(2933),c=n(27603);n(92379);var d=n(75172),u=n(62984),p=n(68306),m=n(651);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function g(e){let{label:t,toolType:n,enabledTools:s,onEnabledToolsChange:o,disabled:i,disabledTooltip:r}=e,c=e=>s.some(t=>t.type===e),d=(0,m.jsx)(a.f8,{labelClassName:"w-full cursor-pointer",id:n,label:t,checked:!i&&c(n),disabled:i,onChange:()=>{c(n)?o(s.filter(e=>e.type!==n)):o([...s,{type:n}])}});return null!=r?(0,m.jsx)("div",{className:"opacity-70",children:(0,m.jsx)(l.u,{side:"top",label:r,children:d})}):d}function h(e){let{enabledTools:t,onEnabledToolsChange:n}=e,l=(0,i.C)(c.L0.BrowsingAvailable),a=(0,d.Z)();return(0,m.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,m.jsx)(g,{label:(0,m.jsx)(u.Z,{id:"tNlef1",defaultMessage:"Web Browsing"}),toolType:o.qK.BROWSER,enabledTools:t,onEnabledToolsChange:n,disabled:!l,disabledTooltip:l?void 0:(0,m.jsx)(u.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},x.disabledBrowsingToolTip))}),(0,m.jsx)(g,{label:(0,m.jsx)(u.Z,{id:"uSmS/p",defaultMessage:"DALL\xb7E Image Generation"}),toolType:o.qK.DALLE,enabledTools:t,onEnabledToolsChange:n}),(0,m.jsx)(g,{label:(0,m.jsxs)("div",{className:"flex items-center",children:[(0,m.jsx)(u.Z,{id:"8Lv1lK",defaultMessage:"Code Interpreter & Data Analysis"}),(0,m.jsx)(r.rv,{description:a.formatMessage(x.codeInterpreterTooltip)})]}),toolType:o.qK.PYTHON,enabledTools:t,onEnabledToolsChange:n})]})}let x=(0,p.vU)({disabledBrowsingToolTip:{defaultMessage:"Web browsing is disabled for your workspace. Contact your admin to enable it.",id:"GizmoEditorModelPicker.disabledBrowsingToolTip"},codeInterpreterTooltip:{id:"GizmoEditorModelPicker.codeInterpreterTooltip",defaultMessage:"Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you’ve uploaded, do math, and more."},memoryTooltip:{id:"GizmoEditorModelPicker.memoryTooltip",defaultMessage:"Allow this GPT to pick up on users details and preferences to tailor its responses to them. When enabled, users will need to have memory on to use this GPT."}})},31310:function(e,t,n){n.d(t,{bw:function(){return m},hs:function(){return u},sw:function(){return p},x$:function(){return d}});var s,o=n(94521),i=n(21904),l=n(16645),r=n(5994);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t){return null==t?e:(t=function e(t){return"object"==typeof t&&null!=t?Array.isArray(t)?t.map(e):Object.fromEntries(Object.entries(t).map(t=>{let[n,s]=t;return[n,e(s)]})):null===t?void 0:t}(t),c(c({},e),t))}let u=((s={})[s.Loading=0]="Loading",s[s.UploadingProfilePic=1]="UploadingProfilePic",s[s.GeneratingProfilePic=2]="GeneratingProfilePic",s[s.GizmoNameTooLong=3]="GizmoNameTooLong",s[s.GizmoDescriptionTooLong=4]="GizmoDescriptionTooLong",s[s.GizmoInstructionsTooLong=5]="GizmoInstructionsTooLong",s[s.NameEmpty=6]="NameEmpty",s[s.MissingPublicActionPrivacyPolicyURL=7]="MissingPublicActionPrivacyPolicyURL",s[s.MissingCategory=8]="MissingCategory",s);function p(e){switch(e){case u.Loading:return"Loading";case u.UploadingProfilePic:return"Uploading profile picture";case u.GeneratingProfilePic:return"Generating profile picture";case u.GizmoNameTooLong:return"GPT name too long";case u.GizmoDescriptionTooLong:return"GPT description too long";case u.GizmoInstructionsTooLong:return"GPT instructions too long";case u.NameEmpty:return"GPT name cannot be empty";case u.MissingPublicActionPrivacyPolicyURL:return"Public actions require valid privacy policy URLs";case u.MissingCategory:return"Public GPTs must have a category"}}function m(e,t,n){var s,o,a,c,d,p;let m=e.name.length>r.aI,f=(null!==(s=null===(o=e.description)||void 0===o?void 0:o.length)&&void 0!==s?s:0)>r.P_,g=(null!==(a=null===(c=e.instructions)||void 0===c?void 0:c.length)&&void 0!==a?a:0)>r.vi,h=[];if((null==e?void 0:e.name)===""&&h.push(u.NameEmpty),m&&h.push(u.GizmoNameTooLong),f&&h.push(u.GizmoDescriptionTooLong),g&&h.push(u.GizmoInstructionsTooLong),null!=t&&("link"===t||"marketplace"===t))for(let t of null===(d=e.tools)||void 0===d?void 0:d.filter(e=>e.type===i.qK.JIT_PLUGIN)){let e=null===(p=t.metadata)||void 0===p?void 0:p.privacy_policy_url;if(null==e||!function(e){try{return new URL(e),!0}catch(e){return!1}}(e)){h.push(u.MissingPublicActionPrivacyPolicyURL);break}}return t===l.Zz.Marketplace&&null==n&&h.push(u.MissingCategory),h}}}]);
//# sourceMappingURL=9987-5283776f46764be5.js.map