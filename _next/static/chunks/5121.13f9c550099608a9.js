"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5121],{55121:function(e,t,n){n.r(t),n.d(t,{SystemHintSuggestor:function(){return P}});var r=n(98601),s=n(92379),a=n(50863),i=n(34443),o=n(17643),l=n(58276),c=n(50813),u=n(67997);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=n(28146),g=n(2721),h=n(84760),f=n(19841),y=n(49764),x=n(25009),b=n(651);let v=e=>{let{svgString:t,className:n}=e,r=(0,b.jsx)("div",{className:n});return(0,b.jsx)(x.S,{name:"StringToSVG",fallback:r,children:(0,b.jsx)("div",{className:(0,f.default)("[&_svg]:h-full [&_svg]:w-full",n),dangerouslySetInnerHTML:{__html:t}})})};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function w(e){return{id:e.systemHint,label:e.name}}let S=(0,b.jsx)("span",{children:"..."});function T(e){let{composerController:t}=e,n=(0,h.a)({queryKey:["system-hints"],queryFn:async()=>(await g.Z.getSystemHints()).system_hints.map(e=>{let{name:t,description:n,logo:r,system_hint:s}=e;return{name:t,description:n,logo:r,systemHint:s}}),select:void 0,staleTime:1/0}),{0:r,1:i}=(0,s.useState)([]),d=(0,s.useMemo)(()=>n.data??[],[n.data]);(0,s.useEffect)(()=>{n.isSuccess&&i(d)},[n.isSuccess,d]);let p=!t.useState(e=>e.getSystemHints().length>0),{state:f,getItemProps:x,indexIsHovered:O,indexIsSelected:T}=function(e){let{ignoreMatchesOnDismiss:t=!0,items:n,replacementType:r}=e,{0:a,1:i}=(0,s.useState)(null),d=(0,o.z8)(),p=0===n.length,g=!!a&&!p,h=(0,s.useCallback)(()=>{if(!a)return!1;let{range:e,name:n}=a;return t&&d.getSuggestMethods().addIgnored({from:e.from,name:n,specific:!0}),i(null),!0},[d,t,a]),f=(0,s.useCallback)(e=>!!a&&(a.command(m({replacementType:r},e)),!0),[a,r]),y=(0,l.XU)({items:n,isOpen:g,onDismiss:h,onSubmit:f,dismissKeys:["Escape"],submitKeys:["Tab","Enter"]}),{setIndex:x}=y,b=(0,s.useCallback)((e,t)=>{let{query:n,range:r,name:s,exitReason:a,changeReason:o,text:l}=e;if(a){i(null);return}o&&(o!==c.$Y.Move&&x(0),i({query:n,range:r,name:s,reason:o,text:l,command:e=>{t(e),i(null)}}))},[x]);(0,o.zf)(u.N,"onChange",b);let v=(0,s.useCallback)(e=>{g&&"Enter"===e.key&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},[g]);return(0,l.xN)("keydown",v),(0,s.useMemo)(()=>m(m({},y),{},{state:a}),[y,a])}({items:r.map(e=>w(e))}),P=null!==f,N=f?.query.full;(0,s.useEffect)(()=>{if(!p){i([]);return}if(!P||void 0===N)return;let e=N.toLowerCase();i(d.filter(t=>t.name.toLowerCase().includes(e)))},[N,P,d,p]),x({item:{id:"imagine",label:"Imagine"},index:0});let C=(0,y.Z)();return f&&n.data?.length!==0&&!n.error&&r.length&&p?(0,b.jsx)(a.w5,{className:"max-w-60",children:n.isLoading?(0,b.jsx)(k,{title:C.formatMessage({id:"gN/1Ui",defaultMessage:"Loading hints"}),icon:S}):r.map((e,t)=>(0,b.jsx)("div",j(j({},x({index:t,item:w(e)})),{},{children:(0,b.jsx)(a.gG,{autoFocus:!1,className:"rounded-xl px-1 py-2",spoofHovered:O(t)||T(t),children:(0,b.jsx)(k,{title:e.name,description:e.description,spoofHovered:O(t)||T(t),icon:e.logo?(0,b.jsx)(v,{svgString:e.logo,className:"icon-lg text-token-text-secondary"}):S,checked:!1})})}),e.systemHint))}):null}function k(e){let{title:t,description:n,icon:r,onClick:s,checked:a}=e;return(0,b.jsxs)("div",{className:"inline-flex w-full items-center justify-start gap-1.5 pl-1.5 pr-3",onClick:s,children:[(0,b.jsx)("div",{className:"flex h-7 w-7 items-center justify-center gap-2.5",children:r}),(0,b.jsxs)("div",{className:"shrink grow basis-0",children:[(0,b.jsxs)("span",{className:"text-sm font-normal leading-tight text-token-text-primary",children:[t,(0,b.jsx)("br",{})]}),!!n&&(0,b.jsx)("span",{className:"text-[13px] font-normal leading-[18px] text-token-text-secondary",children:n})]}),a&&(0,b.jsx)(p.kvR,{className:(0,f.default)("icon-md text-token-text-primary",{"group-hover:hidden":!a})})]})}function P(e){let{composerController:t}=e;return t instanceof i.F?(0,b.jsx)(T,{composerController:t}):null}},34443:function(e,t,n){n.d(t,{F:function(){return i}});var r=n(98601),s=n(63969),a=n(48710);class i extends a.N{constructor(e){super(),(0,r.Z)(this,"manager",void 0),this.manager=e}isEmpty(){return!this.manager.view.state.doc.textContent}trimLeadingText(e){let t=this.manager.view.state.tr,n=!1,r=!1;return t.doc.descendants((s,a)=>{!n&&s.isText&&(n=!0,s.text?.startsWith(e)&&(r=!0,t.insertText(s.text.replace(e,""),a,a+s.text.length)))}),r&&this.manager.view.dispatch(t),r}replaceAll(e,t){let n=this.manager.view.state.tr,r=[],s=0;n.doc.descendants((e,t)=>{e.isText&&void 0!==e.text&&(r.push({node:e,pos:t}),s=Math.max(s,t))}),r.reverse(),r.forEach(r=>{let{node:s,pos:a}=r;s.isText&&void 0!==s.text&&s.text.includes(e)&&n.insertText(s.text.replaceAll(e,t),a,a+s.text.length)}),this.manager.view.dispatch(n)}appendText(e){this.manager.view.dispatch(this.manager.view.state.tr.insertText(e))}focus(){this.manager.view.dom.focus()}setText(e){this.manager.view.updateState(this.manager.createState({content:e}))}getCurrentText(){return this.manager.view.state.doc.textContent}resize(){}isReady(){return this.manager.mounted}setPlaceholder(e){this.manager.getExtension(s.X).setOptions({placeholder:e})}getSelectionStart(){return this.manager.view.state.selection.ranges[0].$from.pos}subscribe(e,t){return this.manager.view.dom?.addEventListener(e,t),()=>{this.manager.view.dom?.removeEventListener(e,t)}}getSystemHints(){var e;let t;return e=this.manager.tr.doc,t=null,e.descendants(e=>{if(t)return!1;"systemHintAtom"===e.type.name&&"string"==typeof e.attrs?.id&&(t=e.attrs.id)}),t?[t]:[]}}},67997:function(e,t,n){n.d(t,{N:function(){return f}});var r=n(52088),s=n(98601),a=n(92569),i=n(45430),o=n(2794),l=n(99229),c=n(27117),u=n(34530),d=n.n(u),m=n(50813);let p=["appendText","replacementType"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let f=(0,a.AOx)({defaultOptions:{selectable:!0,draggable:!1,mentionTag:"span",matchers:[],appendText:" ",suggestTag:"span",disableDecorations:!1,invalidMarks:[],invalidNodes:[],isValidPosition:()=>!0,validMarks:null,validNodes:null},handlerKeyOptions:{onClick:{earlyReturnValue:!0}},handlerKeys:["onChange","onClick"],staticKeys:["selectable","draggable","mentionTag","matchers"],customHandlerKeys:[]})(class extends a.QR{constructor(){super(...arguments),(0,s.Z)(this,"_createSystemHintAtom",(e,t)=>{var n;let{name:s,range:a}=e,c=this.options.matchers.some(e=>s===e.name);(0,i.kG)(c,{code:o.mA.EXTENSION,message:`Invalid name '${s}' provided when creating a mention. Please ensure you only use names that were configured on the matchers when creating the \`SystemHintAtomExtension\`.`});let{appendText:u,replacementType:d}=t,m=(0,r.Z)(t,p),{from:g,to:f}={from:a.from,to:"partial"===d?a.cursor:a.to};return(0,l.lp)({type:this.type,appendText:(n=this.options.appendText,(0,i.HD)(u)?u:(0,i.HD)(n)?n:y.appendText),attrs:h({name:s},m),selection:{from:g,to:f}})})}get name(){return"systemHintAtom"}createTags(){return[o.eX.InlineNode,o.eX.Behavior]}createNodeSpec(e,t){let n="data-mention-atom-id",r="data-mention-atom-name";return h(h({inline:!0,marks:"",selectable:this.options.selectable,draggable:this.options.draggable,atom:!0,leafText:e=>e.attrs.label},t),{},{attrs:h(h({},e.defaults()),{},{id:{},label:{},name:{}}),parseDOM:[...this.options.matchers.map(t=>({tag:`${t.mentionTag??this.options.mentionTag}[${n}]`,getAttrs:t=>{if(!(0,l.jd)(t))return!1;let s=t.getAttribute(n),a=t.getAttribute(r),i=t.textContent;return h(h({},e.parse(t)),{},{id:s,label:i,name:a})}})),...t.parseDOM??[]],toDOM:t=>{let{label:s,id:a,name:i}=(0,l.Kh)(t.attrs,e),o=this.options.matchers.find(e=>e.name===i),u=o?.mentionClassName??"",d=h(h({},e.dom(t)),{},{class:i?`${u} ${u}-${(0,c.GL)(i)}`:u,[n]:a,[r]:i});return[o?.mentionTag??this.options.mentionTag,d,s]}})}createCommands(){return{createSystemHintAtom:this._createSystemHintAtom}}createEventHandlers(){return{click:(e,t)=>{if(!t.direct)return;let n=t.getNode(this.type);if(n)return this.options.onClick(e,n)}}}createSuggesters(){let e=d()(this.options,["invalidMarks","invalidNodes","isValidPosition","validMarks","validNodes","suggestTag","disableDecorations","appendText"]);return this.options.matchers.map(t=>h(h(h(h({},y),e),t),{},{onChange:e=>{let{name:t,range:n}=e,{createSystemHintAtom:r}=this.store.commands;this.options.onChange(e,function(e){r({name:t,range:n},e)})}}))}}),y=h(h({},d()(m.ZF,["startOfLine","supportedCharacters","validPrefixCharacters","invalidPrefixCharacters"])),{},{appendText:""})}}]);
//# sourceMappingURL=5121.13f9c550099608a9.js.map