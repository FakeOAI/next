(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4474],{1343:function(t,e,i){var o=i(98958);t.exports=function(t){return"function"==typeof t?t:o}},84649:function(t,e,i){var o=i(85606),s=i(1343),r=i(5890),n=Math.min;t.exports=function(t,e){if((t=r(t))<1||t>9007199254740991)return[];var i=4294967295,l=n(t,4294967295);e=s(e),t-=4294967295;for(var u=o(l,e);++i<t;)e(i);return u}},50399:function(t,e,i){"use strict";i.d(e,{l:function(){return o}});let o=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return t=>{e.forEach(e=>{"function"==typeof e?e(t):e&&(e.current=t)})}}},83995:function(t,e,i){var o;o=function(t){"use strict";var e="undefined"==typeof window,i=function(){},o=!e&&"ResizeObserver"in window?new ResizeObserver(function(t){for(var e=0;e<t.length;e++){var i=t[e],o=i.target,s=o.getBoundingClientRect(),r=o.$$useElementDimensionsSet;r&&r(Object.assign(s,i))}}):{observe:i,unobserve:i},s=e?t.useEffect:t.useLayoutEffect,r=function(){function t(){this.bottom=0,this.height=0,this.left=0,this.right=0,this.top=0,this.width=0,this.x=0,this.y=0}return t.prototype.toJSON=function(){return JSON.stringify(this)},t}(),n=new r,l=new r,u={inlineSize:0,blockSize:0},h=Object.assign(l,{contentBoxSize:u,borderBoxSize:u,contentRect:n,target:null});return function(){var e=t.useRef(null),i=t.useState(h),r=i[0],n=i[1],l=t.useCallback(function(t){e.current&&o.unobserve(e.current),t instanceof Element&&(t.$$useElementDimensionsSet=n,o.observe(t))},[]);return s(function(){return function(){e.current&&o.unobserve(e.current)}},[]),[r,l]}},t.exports=o(i(92379))},80136:function(t,e,i){"use strict";i.d(e,{q:function(){return r}});var o=i(60314),s=i(70348);function r(t={}){return new o.Sy({view:e=>new n(e,t)})}class n{constructor(t,e){var i;this.editorView=t,this.cursorPos=null,this.element=null,this.timeout=-1,this.width=null!==(i=e.width)&&void 0!==i?i:1,this.color=!1===e.color?void 0:e.color||"black",this.class=e.class,this.handlers=["dragover","dragend","drop","dragleave"].map(e=>{let i=t=>{this[e](t)};return t.dom.addEventListener(e,i),{name:e,handler:i}})}destroy(){this.handlers.forEach(({name:t,handler:e})=>this.editorView.dom.removeEventListener(t,e))}update(t,e){null!=this.cursorPos&&e.doc!=t.state.doc&&(this.cursorPos>t.state.doc.content.size?this.setCursor(null):this.updateOverlay())}setCursor(t){t!=this.cursorPos&&(this.cursorPos=t,null==t?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())}updateOverlay(){let t,e,i=this.editorView.state.doc.resolve(this.cursorPos),o=!i.parent.inlineContent,s;if(o){let t=i.nodeBefore,e=i.nodeAfter;if(t||e){let i=this.editorView.nodeDOM(this.cursorPos-(t?t.nodeSize:0));if(i){let o=i.getBoundingClientRect(),r=t?o.bottom:o.top;t&&e&&(r=(r+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2),s={left:o.left,right:o.right,top:r-this.width/2,bottom:r+this.width/2}}}}if(!s){let t=this.editorView.coordsAtPos(this.cursorPos);s={left:t.left-this.width/2,right:t.left+this.width/2,top:t.top,bottom:t.bottom}}let r=this.editorView.dom.offsetParent;if(!this.element&&(this.element=r.appendChild(document.createElement("div")),this.class&&(this.element.className=this.class),this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none;",this.color&&(this.element.style.backgroundColor=this.color)),this.element.classList.toggle("prosemirror-dropcursor-block",o),this.element.classList.toggle("prosemirror-dropcursor-inline",!o),r&&(r!=document.body||"static"!=getComputedStyle(r).position)){let i=r.getBoundingClientRect();t=i.left-r.scrollLeft,e=i.top-r.scrollTop}else t=-pageXOffset,e=-pageYOffset;this.element.style.left=s.left-t+"px",this.element.style.top=s.top-e+"px",this.element.style.width=s.right-s.left+"px",this.element.style.height=s.bottom-s.top+"px"}scheduleRemoval(t){clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.setCursor(null),t)}dragover(t){if(!this.editorView.editable)return;let e=this.editorView.posAtCoords({left:t.clientX,top:t.clientY}),i=e&&e.inside>=0&&this.editorView.state.doc.nodeAt(e.inside),o=i&&i.type.spec.disableDropCursor,r="function"==typeof o?o(this.editorView,e,t):o;if(e&&!r){let t=e.pos;if(this.editorView.dragging&&this.editorView.dragging.slice){let e=(0,s.nj)(this.editorView.state.doc,t,this.editorView.dragging.slice);null!=e&&(t=e)}this.setCursor(t),this.scheduleRemoval(5e3)}}dragend(){this.scheduleRemoval(20)}drop(){this.scheduleRemoval(20)}dragleave(t){t.target!=this.editorView.dom&&this.editorView.dom.contains(t.relatedTarget)||this.setCursor(null)}}}}]);
//# sourceMappingURL=4474.186701c57ac2ee59.js.map