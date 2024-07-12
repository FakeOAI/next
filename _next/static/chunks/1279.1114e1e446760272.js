"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1279],{91279:function(e,t,n){n.r(t),n.d(t,{ImageEditor:function(){return ea},ImageEditorMode:function(){return en}});var a,s,i,r=n(85734),l=n(72500),o=n(70522),d=n(75973),c=n(88568),u=n(72427),g=n(47285),m=n(86021),f=n(92524),h=n(20408),x=n(35226),p=n(59031),j=n(86078),b=n.n(j),v=n(92379),w=n(75172),y=n(68306),k=n(41141),I=n(94521),E=n(5443),O=n(79330),C=n(62484),N=n(3445),D=n(58543),M=n(77047),S=n(43967),P=n(54591),T=n(10160),_=n(93747),L=n(15236),Z=n(48538),A=n(48580),R=n(19841),z=n(556),B=n(62984),F=n(74091),G=n(651);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach(function(t){(0,I.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function W(e){let{imageAsset:t,mode:n,setMode:a,clientThreadId:s,messageId:i,cursorWidth:r,setCursorWidth:d,inpaintingDrawingState:u,isLoadingNewImage:g}=e,f=m.tQ.getServerThreadId(s),{canUndoDrawing:h,undoDrawing:x,canRedoDrawing:p,redoDrawing:j,clearAllDrawings:b}=u,v=(0,w.Z)();return(0,G.jsxs)(z.E.div,U(U({className:"flex h-16 w-full justify-between px-4"},l.ee),{},{children:[(0,G.jsx)("div",{className:"flex items-center",children:n===en.Inpaint&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)("div",{className:(0,R.default)("flex items-center gap-3",g&&"opacity-50"),children:[(0,G.jsx)(J,{className:"h-[11px] w-[11px]"}),(0,G.jsxs)(T.fC,{className:"relative flex w-[90px] items-center",min:32,max:240,step:.01,value:[r],onValueChange:e=>d(e[0]),disabled:g,children:[(0,G.jsx)(T.fQ,{className:"relative h-[2px] grow bg-token-text-quaternary",children:(0,G.jsx)(T.e6,{className:"absolute h-full bg-token-text-secondary"})}),(0,G.jsx)(T.bU,{className:"block h-[11px] w-[11px] rounded-full bg-token-text-secondary"})]}),(0,G.jsx)(J,{className:"h-6 w-6"})]}),(0,G.jsx)(X,{}),(0,G.jsx)(V,{disabled:!h||g,onClick:x,children:(0,G.jsx)(M.UE,{})}),(0,G.jsx)(V,{disabled:!p||g,onClick:j,children:(0,G.jsx)(M.zG,{})}),(0,G.jsx)(X,{}),(0,G.jsx)(V,{disabled:!h||g,onClick:b,children:(0,G.jsx)(B.Z,{id:"imageEditorControls.clearSelectionButtonLabel",defaultMessage:"Clear selection"})})]})}),(0,G.jsx)("div",{className:"flex items-center",children:n===en.Inpaint?(0,G.jsx)(V,{onClick:()=>a(en.Default),disabled:g,children:(0,G.jsx)(B.Z,{id:"imageEditorControls.cancelButtonLabel",defaultMessage:"Cancel"})}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Q,{imageAsset:t,setMode:a,messageId:i,serverThreadId:f}),(0,G.jsx)(V,{tooltip:v.formatMessage({id:"imageEditorControls.downloadButtonTooltip",defaultMessage:"Save"}),onClick:()=>(0,c.HR)(t,f,i),children:(0,G.jsx)(N._8t,{})}),(0,G.jsx)(q,{prompt:(0,c.hG)(t),children:(0,G.jsx)(V,{tooltip:v.formatMessage({id:"imageEditorControls.promptButtonTooltip",defaultMessage:"Prompt"}),children:(0,G.jsx)(N.szr,{})})}),(0,G.jsx)(V,{tooltip:v.formatMessage({id:"imageEditorControls.closeButtonTooltip",defaultMessage:"Close"}),onClick:o.RT.close,children:(0,G.jsx)(N.tPq,{className:"icon-lg"})})]})})]}))}function q(e){let{prompt:t,children:n}=e,{0:a,1:s}=(0,v.useState)(!1),i=(0,w.Z)();return(0,G.jsx)(O.J,{sideOffset:4,alignAgainstAnchor:"end",triggerButton:(0,G.jsx)("div",{className:"group",children:n}),className:"z-10",size:"none",children:(0,G.jsxs)("div",{className:"flex max-w-sm flex-col gap-3 p-4",children:[(0,G.jsx)("div",{className:"text-token-text-secondary",children:(0,G.jsx)(B.Z,{id:"imageEditorControls.promptPopoverLabel",defaultMessage:"Prompt"})}),(0,G.jsx)("div",{children:t}),(0,G.jsx)("div",{children:(0,G.jsx)(E.z,{color:"secondary",disabled:a,onClick:()=>{s(!0),(0,Z.v)(t),setTimeout(()=>s(!1),2e3)},icon:N.TIy,children:a?i.formatMessage({id:"imageEditorControls.copiedButtonLabel",defaultMessage:"Copied!"}):i.formatMessage({id:"imageEditorControls.copyButtonLabel",defaultMessage:"Copy"})})})]})})}function V(e){let{children:t,tooltip:n,disabled:a,onClick:s}=e,i=(0,G.jsx)("button",{className:(0,R.default)("rounded p-2 font-semibold hover:bg-token-main-surface-tertiary group-radix-state-open:bg-token-main-surface-tertiary",a?"text-token-text-quaternary":"text-token-text-secondary"),disabled:a,onClick:s,children:t});return null!=n?(0,G.jsx)(C.u,{label:n,sideOffset:4,children:i}):i}function Q(e){let{imageAsset:t,setMode:n,messageId:a,serverThreadId:s,disabled:i}=e,r=(0,w.Z)(),l=(0,P.qg)(P.pm.DalleEditingOnboarding),o=l.eligible&&!l.isLoading,d=(0,G.jsx)(V,{tooltip:o?void 0:r.formatMessage({id:"imageEditorControls.inpaintButtonTooltip",defaultMessage:"Select"}),onClick:()=>{var e,i,r,l,o,d;n(en.Inpaint),A.m9.logEvent("chatgpt_dalle_inpaint_click",null,{sourceOperation:null!==(e=null===(i=t.metadata)||void 0===i||null===(i=i.dalle)||void 0===i?void 0:i.edit_op)&&void 0!==e?e:"none",hasParent:(null===(r=t.metadata)||void 0===r||null===(r=r.dalle)||void 0===r?void 0:r.parent_gen_id)!=null?"true":"false"}),_.A.logEvent(L.M.dalleImageClickInpaint,{conversationId:s,messageId:a,generationId:null===(l=t.metadata)||void 0===l||null===(l=l.dalle)||void 0===l?void 0:l.gen_id,fileId:(0,D.Iy)(t.asset_pointer),parentGenerationId:null===(o=t.metadata)||void 0===o||null===(o=o.dalle)||void 0===o?void 0:o.parent_gen_id,sourceOperation:null===(d=t.metadata)||void 0===d||null===(d=d.dalle)||void 0===d?void 0:d.edit_op})},disabled:i,children:(0,G.jsx)(M.GN,{})});return o?(0,G.jsx)(S.v,{show:!0,side:"bottom",sideOffset:0,title:r.formatMessage({id:"imageEditorNUX.title",defaultMessage:"Select area of the image to edit"}),description:r.formatMessage({id:"imageEditorNUX.description",defaultMessage:"Highlight the area and describe changes in chat."}),onDismiss:l.markAsViewed,children:(0,G.jsx)("div",{children:d})}):d}let X=F.Z.div(s||(s=(0,k.Z)(["mx-3 w-[1px] h-6 bg-token-border-light"]))),J=F.Z.div(i||(i=(0,k.Z)(["rounded-full border-2 border-token-text-secondary"])));function K(e){let{mode:t,imageIndex:n,allImages:a,onSwitchImage:s,isLoadingNewImage:i}=e,r=n>0,l=(0,v.useCallback)(()=>{r&&s(a[n-1])},[r,a,n,s]),o=n<a.length-1,d=(0,v.useCallback)(()=>{o&&s(a[n+1])},[o,a,n,s]);return(0,v.useEffect)(()=>{function e(e){e.target instanceof HTMLTextAreaElement||t!==en.Default||("ArrowLeft"===e.key?l():"ArrowRight"===e.key&&d())}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[t,l,d]),(0,G.jsx)("div",{className:"flex h-16 w-full items-center justify-center gap-3 font-semibold text-token-text-secondary",children:t===en.Inpaint?!i&&(0,G.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,G.jsx)(B.Z,{id:"imageEditor.selectArea",defaultMessage:"Select an area to edit"}),(0,G.jsx)("a",{href:"https://help.openai.com/en/articles/9055440",target:"_blank",rel:"noreferrer",children:(0,G.jsx)(N.szr,{className:"icon-md"})})]}):a.length>1?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("button",{disabled:!r,className:"disabled:text-token-text-tertiary",onClick:l,children:(0,G.jsx)(N.DUf,{className:"icon-lg"})}),(0,G.jsx)("div",{children:(0,G.jsx)(B.Z,{id:"imageEditor.imageNumber",defaultMessage:"Image {num} of {numImages}",values:{num:n+1,numImages:a.length}})}),(0,G.jsx)("button",{disabled:!o,className:"disabled:text-token-text-tertiary",onClick:d,children:(0,G.jsx)(N.ob9,{className:"icon-lg"})})]}):null})}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach(function(t){(0,I.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ee(e){let{imageAsset:t,children:n,containerDimensions:a,isLoadingNewImage:s}=e;return(0,G.jsxs)(z.E.div,Y(Y({className:"absolute",style:function(e,t){let{width:n,height:a}=e,{width:s,height:i}=t,r=s-0,l=i-128,o=n/a,d=o>r/l,c=d?r:l*o,u=d?r/o:l;return{top:(i-u)/2,left:(s-c)/2,width:c,height:u}}(t,a)},l.ee),{},{children:[n,(0,G.jsx)("div",{className:(0,R.default)("absolute inset-0 flex items-center justify-center bg-token-main-surface-primary transition-opacity duration-1000",s?"pointer-events-auto opacity-60":"pointer-events-none opacity-0")})]}))}let et=b()(()=>Promise.all([n.e(7806),n.e(345),n.e(8638)]).then(n.bind(n,21899)).then(e=>e.DynamicDrawingCanvas),{loadableGenerated:{webpack:()=>[21899]}}),en=((a={})[a.Default=0]="Default",a[a.Inpaint=1]="Inpaint",a);function ea(e){let{clientThreadId:t,messageId:n,image:a,allImages:s}=e,i=(0,m.oq)(t),l=(0,m.uj)(t,i),c=null==l?void 0:l.messages[l.messages.length-1],g=null!=c&&(0,f.rH)(c.message)===f.Cs.Dalle&&!(0,u.We)(c.message),j=(0,x.NL)();return(0,v.useEffect)(()=>{async function e(e,t){try{let n=await (0,d.Mn)(j,e);o.RT.setFocusedObject({type:o.zG.Image,image:n[0],allImages:n,messageId:t})}catch(e){p.U.addError(Error("Failed to load newly created images:",{cause:e}))}}null!=c&&(0,f.rH)(c.message)===f.Cs.DalleTool&&c.message.content.content_type===r.PX.MultimodalText&&e(h.U.getImageAssetPointers(c.message),c.message.id)},[j,c]),(0,G.jsx)(es,{image:a,allImages:s,isLoadingNewImage:g,clientThreadId:t,messageId:n})}function es(e){let{image:t,allImages:n,isLoadingNewImage:a,clientThreadId:s,messageId:i}=e,{0:r,1:u}=(0,v.useState)(en.Default),{0:m,1:f}=(0,v.useState)({width:window.innerWidth-l.Jw,height:window.innerHeight}),h=(0,v.useRef)(null),{0:x,1:p}=(0,v.useState)(136),j=function(){let{0:e,1:t}=(0,v.useState)({undoStack:[],currentIndex:-1});return{currentDrawnShape:e.undoStack.length>0?e.undoStack[e.currentIndex]:null,onNewDrawnShape:function(e){t(t=>({undoStack:[...t.undoStack.slice(0,t.currentIndex+1),e],currentIndex:t.currentIndex+1}))},canUndoDrawing:e.currentIndex>=0,undoDrawing:function(){t(e=>({undoStack:e.undoStack,currentIndex:Math.max(e.currentIndex-1,-1)}))},canRedoDrawing:e.currentIndex<e.undoStack.length-1,redoDrawing:function(){t(e=>({undoStack:e.undoStack,currentIndex:Math.min(e.currentIndex+1,e.undoStack.length-1)}))},clearAllDrawings:function(){t({undoStack:[],currentIndex:-1})}}}(),{currentDrawnShape:b,onNewDrawnShape:k,clearAllDrawings:I}=j,E=(0,v.useRef)(null),O=(0,w.Z)(),{setTargetedContent:C}=(0,g.Q)();(0,v.useEffect)(()=>{let e=new ResizeObserver(e=>{let{width:t,height:n}=e[0].contentRect;f({width:t,height:n})});return h.current&&e.observe(h.current),()=>{e.disconnect()}},[]),(0,v.useEffect)(()=>{function e(e){"Escape"===e.key&&(r===en.Inpaint?u(en.Default):o.RT.close())}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[r]),(0,v.useEffect)(()=>(null==b?C({type:"object",placeholderTextOverride:(0,y.Em)({id:"imageEditor.transformationTextareaPlaceholder",defaultMessage:"Edit image…"}),shouldPersistAcrossMessages:!0,isFocusedViewContent:!0,createNewCompletionParams:e=>(0,c.$K)(e,t)}):C({type:"object",label:O.formatMessage({id:"imageEditor.inpaintingTargetedContentLabel",defaultMessage:"Edit selection"}),isFocusedViewContent:!0,createNewCompletionParams:async e=>{var n;return await (0,c.hx)(e,t,null===(n=E.current)||void 0===n?void 0:n.getImageData(),O)},onCleared:()=>u(en.Default)}),()=>{C(void 0)}),[t,O,C,b]),(0,v.useEffect)(()=>{r!==en.Inpaint&&I()},[r]),(0,v.useEffect)(()=>{u(en.Default)},[t]);let N=n.findIndex(e=>e.asset_pointer===t.asset_pointer);return(0,G.jsxs)("div",{ref:h,className:"flex h-full w-full flex-col justify-between",children:[(0,G.jsx)(W,{imageAsset:t,mode:r,setMode:u,clientThreadId:s,messageId:i,cursorWidth:x,setCursorWidth:p,inpaintingDrawingState:j,isLoadingNewImage:a}),(0,G.jsx)(K,{mode:r,imageIndex:N,allImages:n,onSwitchImage:e=>{o.RT.setFocusedObject({type:o.zG.Image,image:e,allImages:n,messageId:i})},isLoadingNewImage:a}),(0,G.jsxs)(ee,{imageAsset:t,containerDimensions:m,isLoadingNewImage:a,children:[(0,G.jsx)(d.sH,{className:"h-full w-full",alt:(0,c.hG)(t),src:t.url,width:t.width,height:t.height,fadeIn:!1}),r===en.Inpaint&&(0,G.jsx)("div",{className:"absolute inset-0",children:(0,G.jsx)(et,{drawingCanvasRef:E,color:"rgba(0, 122, 255, 0.5)",dashedOutlineColor:"rgba(255, 255, 255, 0.65)",cursorWidth:x,canvasWidth:t.width,canvasHeight:t.height,currentDrawnShape:b,onNewDrawnShape:k})})]})]})}}}]);
//# sourceMappingURL=1279.1114e1e446760272.js.map