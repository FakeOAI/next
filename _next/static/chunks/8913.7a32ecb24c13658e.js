"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8913],{51516:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}},17224:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}},78571:function(e,t,r){r.d(t,{_:function(){return u}});var n=r(37088),a=r(92379),s=r(52125);let u=(0,a.forwardRef)((e,t)=>(0,a.createElement)(s.WV.label,(0,n.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},19856:function(e,t,r){r.d(t,{N:function(){return c}});var n=r(60083),a=r(23418),s=class extends n.z{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:(0,a.Gm)()},t)}getOptimisticResult(e){return e.behavior=(0,a.Gm)(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){let{state:r}=e,n=super.createResult(e,t),{isFetching:s,isRefetching:u}=n,c=s&&r.fetchMeta?.fetchMore?.direction==="forward",i=s&&r.fetchMeta?.fetchMore?.direction==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,a.Qy)(t,r.data),hasPreviousPage:(0,a.ZF)(t,r.data),isFetchingNextPage:c,isFetchingPreviousPage:i,isRefetching:u&&!c&&!i}}},u=r(56537);function c(e,t){return(0,u.r)(e,s,t)}},79208:function(e,t,r){r.d(t,{Ue:function(){return a},rp:function(){return s},ck:function(){return u}});let n=()=>{let e,t;let r=new Promise((r,n)=>{e=r,t=n});return{resolve:e,reject:t,value:r}},a=(e,t)=>{let r=e.name??`batcher:${Math.random().toString(16).slice(2)})`,a=e.scheduler??u(10),s=globalThis.__BATSHIT_DEVTOOLS__?.for(r),c=t??{seq:0,batch:new Set,currentRequest:n(),timer:void 0,start:null,latest:null};s?.create({seq:c.seq});let i=()=>{c.batch=new Set,c.currentRequest=n(),c.timer=void 0,c.start=null,c.latest=null};return{fetch:t=>{c.start||(c.start=Date.now()),c.latest=Date.now(),c.batch.add(t),clearTimeout(c.timer);let r=a(c.start,c.latest,c.batch.size);s?.queue({seq:c.seq,query:t,batch:[...c.batch],scheduled:r,latest:c.latest,start:c.start});let n=()=>{let t=c.seq,r=e.fetcher([...c.batch]),n=c.currentRequest;return s?.fetch({seq:t,batch:[...c.batch]}),i(),r.then(e=>{s?.data({seq:t,data:e}),n.resolve(e)}).catch(e=>{s?.error({seq:t,error:e}),n.reject(e)}),c.seq++,r};if("immediate"===r){let r=c.currentRequest;return n(),r.value.then(r=>e.resolver(r,t))}return"never"===r?c.currentRequest.value.then(r=>e.resolver(r,t)):(c.timer=setTimeout(n,r),c.currentRequest.value.then(r=>e.resolver(r,t)))}}},s=e=>(t,r)=>t.find(t=>t[e]==r),u=e=>(t,r)=>e-(r-t)}}]);
//# sourceMappingURL=8913.7a32ecb24c13658e.js.map