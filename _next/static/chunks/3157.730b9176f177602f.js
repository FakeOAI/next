(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3157],{43157:function(e,t,r){"use strict";r.r(t),r.d(t,{RichTextInput:function(){return er},WrapProsemirrorComposerController:function(){return et}});var n,a,s,i,o,c=r(98601),l=r(17643),p=r(19841),u=r(92379),d=r(34443),m=r(1256),h=r.n(m),g=r(63969),f=r(75122),b=r(52789),v=r(92569),y=r(2794),O=r(31610),w=r(12498),j=Object.create,T=Object.defineProperty,P=Object.defineProperties,C=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,A=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),N=e=>{throw TypeError(e)},H=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&H(e,r,t[r]);if(S)for(var r of S(t))D.call(t,r)&&H(e,r,t[r]);return e},_=(e,t)=>P(e,E(t)),B=(e,t)=>T(e,"name",{value:t,configurable:!0}),F=["class","method","getter","setter","accessor","field","value","get","set"],I=e=>void 0!==e&&"function"!=typeof e?N("Function expected"):e,$=(e,t,r,n,a)=>({kind:F[e],name:t,metadata:n,addInitializer:e=>r._?N("Already initialized"):a.push(I(e||null))}),K=(e,t)=>H(t,A("metadata"),e[3]),L=(e,t,r,n)=>{for(var a=0,s=e[t>>1],i=s&&s.length;a<i;a++)1&t?s[a].call(r):n=s[a].call(r,n);return n},Z=(e,t,r,n,a,s)=>{var i,o,c,l,p,u=7&t,d=!!(8&t),m=!!(16&t),h=u>3?e.length+1:u?d?1:2:0,g=F[u+5],f=u>3&&(e[h-1]=[]),b=e[h]||(e[h]=[]),v=u&&(m||d||(a=a.prototype),u<5&&(u>3||!m)&&C(u<4?a:{get[r](){return Q(this,s)},set[r](x){return R(this,s,x)}},r));u?m&&u<4&&B(s,(u>2?"set ":u>1?"get ":"")+r):B(a,r);for(var y=n.length-1;y>=0;y--)l=$(u,r,c={},e[3],b),u&&(l.static=d,l.private=m,p=l.access={has:m?e=>X(a,e):e=>r in e},3^u&&(p.get=m?e=>(1^u?Q:W)(e,a,4^u?s:v.get):e=>e[r]),u>2&&(p.set=m?(e,t)=>R(e,a,t,4^u?s:v.set):(e,t)=>e[r]=t)),o=(0,n[y])(u?u<4?m?s:v[g]:u>4?void 0:{get:v.get,set:v.set}:a,l),c._=1,4^u||void 0===o?I(o)&&(u>4?f.unshift(o):u?m?s=o:v[g]=o:a=o):"object"!=typeof o||null===o?N("Object expected"):(I(i=o.get)&&(v.get=i),I(i=o.set)&&(v.set=i),I(i=o.init)&&f.unshift(i));return u||K(e,a),v&&T(a,r,v),m?4^u?s:v:a},V=(e,t,r)=>t.has(e)||N("Cannot "+r),X=(e,t)=>Object(t)!==t?N('Cannot use the "in" operator on this value'):e.has(t),Q=(e,t,r)=>(V(e,t,"read from private field"),r?r.call(e):t.get(e)),R=(e,t,r,n)=>(V(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),W=(e,t,r)=>(V(e,t,"access private method"),r);i=[(0,v.AOx)({defaultPriority:y.xV.Low})];var z=class extends(s=v.QR,a=[(0,v.WDe)()],s){constructor(){super(...arguments),L(o,5,this)}get name(){return"hardBreak"}createTags(){return[y.eX.InlineNode]}createNodeSpec(e,t){var r;return _(M({inline:!0,selectable:!1,atom:!0,leafText:()=>"\n"},t),{attrs:e.defaults(),parseDOM:[{tag:"br",getAttrs:e.parse},...null!=(r=t.parseDOM)?r:[]],toDOM:t=>["br",e.dom(t)]})}createKeymap(){let e=(0,O.QF)((0,O.A_)(w.uo),()=>(this.store.commands.insertHardBreak(),!0));return{"Mod-Enter":e,"Shift-Enter":e}}insertHardBreak(){return e=>{let{tr:t,dispatch:r}=e;return null==r||r(t.replaceSelectionWith(this.type.create()).scrollIntoView()),!0}}};Z(o=[,,,j(null!=(n=null==s?void 0:s[A("metadata")])?n:null)],1,"insertHardBreak",a,z),z=Z(o,0,"HardBreakExtension",i,z),L(o,1,z);let G=(0,v.AOx)({defaultPriority:y.xV.Low,defaultOptions:{}})(class extends z{createKeymap(){return{"Shift-Enter":(0,O.QF)((0,O.A_)(w.uo),()=>(this.store.commands.insertHardBreak(),!0))}}});var q=r(67997),J=r(70879),U=r(651);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let ee=[(0,p.default)([h()["prosemirror-parent"]])],et=e=>{let{children:t}=e,{manager:r,state:n}=function(){let{manager:e,state:t}=(0,l.iF)({extensions:()=>[new q.N({matchers:[{name:"slash",char:"/",appendText:" ",mentionClassName:"shimmer-blue"}]}),new G,new f.Q({}),new b.xv({}),new g.X({})],content:"",selection:"start",stringHandler:"html"});return{manager:e,state:t}}(),{0:a}=(0,u.useState)(()=>new d.F(r));return(0,U.jsx)(l.O1,{manager:r,initialContent:n,classNames:ee,children:t(a)})},er=e=>{let{composerController:t,placeholder:r}=e;if(!(t instanceof d.F))throw Error(`Expected instance of ProseMirrorComposerController but got ${t.constructor.name}`);let{getRootProps:n}=(0,l.rj)(),a=(0,l.TS)().current;return(0,u.useEffect)(()=>{a&&(a.id=J.hB)},[a]),(0,u.useEffect)(()=>{t.setPlaceholder(r)},[r,t]),(0,u.useEffect)(()=>{t.logPageMount()},[]),(0,U.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach(function(t){(0,c.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},n()))}},34443:function(e,t,r){"use strict";r.d(t,{F:function(){return i}});var n=r(98601),a=r(63969),s=r(48710);class i extends s.N{constructor(e){super(),(0,n.Z)(this,"manager",void 0),this.manager=e}isEmpty(){return!this.manager.view.state.doc.textContent}trimLeadingText(e){let t=this.manager.view.state.tr,r=!1,n=!1;return t.doc.descendants((a,s)=>{!r&&a.isText&&(r=!0,a.text?.startsWith(e)&&(n=!0,t.insertText(a.text.replace(e,""),s,s+a.text.length)))}),n&&this.manager.view.dispatch(t),n}replaceAll(e,t){let r=this.manager.view.state.tr,n=[],a=0;r.doc.descendants((e,t)=>{e.isText&&void 0!==e.text&&(n.push({node:e,pos:t}),a=Math.max(a,t))}),n.reverse(),n.forEach(n=>{let{node:a,pos:s}=n;a.isText&&void 0!==a.text&&a.text.includes(e)&&r.insertText(a.text.replaceAll(e,t),s,s+a.text.length)}),this.manager.view.dispatch(r)}appendText(e){this.manager.view.dispatch(this.manager.view.state.tr.insertText(e))}focus(){this.manager.view.dom.focus()}setText(e){this.manager.view.updateState(this.manager.createState({content:e}))}getCurrentText(){return this.manager.view.state.doc.textContent}resize(){}isReady(){return this.manager.mounted}setPlaceholder(e){this.manager.getExtension(a.X).setOptions({placeholder:e})}getSelectionStart(){return this.manager.view.state.selection.ranges[0].$from.pos}subscribe(e,t){return this.manager.view.dom?.addEventListener(e,t),()=>{this.manager.view.dom?.removeEventListener(e,t)}}getSystemHints(){var e;let t;return e=this.manager.tr.doc,t=null,e.descendants(e=>{if(t)return!1;"systemHintAtom"===e.type.name&&"string"==typeof e.attrs?.id&&(t=e.attrs.id)}),t?[t]:[]}}},67997:function(e,t,r){"use strict";r.d(t,{N:function(){return f}});var n=r(52088),a=r(98601),s=r(92569),i=r(45430),o=r(2794),c=r(99229),l=r(27117),p=r(34530),u=r.n(p),d=r(50813);let m=["appendText","replacementType"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let f=(0,s.AOx)({defaultOptions:{selectable:!0,draggable:!1,mentionTag:"span",matchers:[],appendText:" ",suggestTag:"span",disableDecorations:!1,invalidMarks:[],invalidNodes:[],isValidPosition:()=>!0,validMarks:null,validNodes:null},handlerKeyOptions:{onClick:{earlyReturnValue:!0}},handlerKeys:["onChange","onClick"],staticKeys:["selectable","draggable","mentionTag","matchers"],customHandlerKeys:[]})(class extends s.QR{constructor(){super(...arguments),(0,a.Z)(this,"_createSystemHintAtom",(e,t)=>{var r;let{name:a,range:s}=e,l=this.options.matchers.some(e=>a===e.name);(0,i.kG)(l,{code:o.mA.EXTENSION,message:`Invalid name '${a}' provided when creating a mention. Please ensure you only use names that were configured on the matchers when creating the \`SystemHintAtomExtension\`.`});let{appendText:p,replacementType:u}=t,d=(0,n.Z)(t,m),{from:h,to:f}={from:s.from,to:"partial"===u?s.cursor:s.to};return(0,c.lp)({type:this.type,appendText:(r=this.options.appendText,(0,i.HD)(p)?p:(0,i.HD)(r)?r:b.appendText),attrs:g({name:a},d),selection:{from:h,to:f}})})}get name(){return"systemHintAtom"}createTags(){return[o.eX.InlineNode,o.eX.Behavior]}createNodeSpec(e,t){let r="data-mention-atom-id",n="data-mention-atom-name";return g(g({inline:!0,marks:"",selectable:this.options.selectable,draggable:this.options.draggable,atom:!0,leafText:e=>e.attrs.label},t),{},{attrs:g(g({},e.defaults()),{},{id:{},label:{},name:{}}),parseDOM:[...this.options.matchers.map(t=>({tag:`${t.mentionTag??this.options.mentionTag}[${r}]`,getAttrs:t=>{if(!(0,c.jd)(t))return!1;let a=t.getAttribute(r),s=t.getAttribute(n),i=t.textContent;return g(g({},e.parse(t)),{},{id:a,label:i,name:s})}})),...t.parseDOM??[]],toDOM:t=>{let{label:a,id:s,name:i}=(0,c.Kh)(t.attrs,e),o=this.options.matchers.find(e=>e.name===i),p=o?.mentionClassName??"",u=g(g({},e.dom(t)),{},{class:i?`${p} ${p}-${(0,l.GL)(i)}`:p,[r]:s,[n]:i});return[o?.mentionTag??this.options.mentionTag,u,a]}})}createCommands(){return{createSystemHintAtom:this._createSystemHintAtom}}createEventHandlers(){return{click:(e,t)=>{if(!t.direct)return;let r=t.getNode(this.type);if(r)return this.options.onClick(e,r)}}}createSuggesters(){let e=u()(this.options,["invalidMarks","invalidNodes","isValidPosition","validMarks","validNodes","suggestTag","disableDecorations","appendText"]);return this.options.matchers.map(t=>g(g(g(g({},b),e),t),{},{onChange:e=>{let{name:t,range:r}=e,{createSystemHintAtom:n}=this.store.commands;this.options.onChange(e,function(e){n({name:t,range:r},e)})}}))}}),b=g(g({},u()(d.ZF,["startOfLine","supportedCharacters","validPrefixCharacters","invalidPrefixCharacters"])),{},{appendText:""})},1256:function(e){e.exports={"prosemirror-parent":"prompt-prosemirror_prosemirror-parent__iCwnZ"}}}]);
//# sourceMappingURL=3157.730b9176f177602f.js.map