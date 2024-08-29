"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2873,8913],{51516:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}},17224:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}},27313:function(e,t,r){r.d(t,{Y:function(){return i},v:function(){return c}});var n=r(84760),u=r(92379),a=r(81014),s=r(12381);function i(e){let{threadId:t,threadUserId:r,refetchOnMount:u}=e;return(0,n.a)({queryKey:["thread",t,r],queryFn:async()=>{if(!t)return{thread:null,turns:null};let e=await (0,a.K8)({threadId:t,threadUserId:r}),n=e.turns;return{thread:e,turns:n}},enabled:!!t,refetchOnMount:u})}function c(e){let{threadId:t,threadUserId:r}=e,n=i({threadId:t,threadUserId:r}),a=n.data;return(0,u.useEffect)(()=>{t&&s.P3.setThread(t,a?.turns??[])},[t,a]),{query:n.data?.turns[0]?.user_query,refetch:n.refetch,isLoading:n.isLoading,isError:n.isError}}},78571:function(e,t,r){r.d(t,{_:function(){return s}});var n=r(37088),u=r(92379),a=r(52125);let s=(0,u.forwardRef)((e,t)=>(0,u.createElement)(a.WV.label,(0,n.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},19856:function(e,t,r){r.d(t,{N:function(){return i}});var n=r(60083),u=r(23418),a=class extends n.z{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:(0,u.Gm)()},t)}getOptimisticResult(e){return e.behavior=(0,u.Gm)(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){let{state:r}=e,n=super.createResult(e,t),{isFetching:a,isRefetching:s}=n,i=a&&r.fetchMeta?.fetchMore?.direction==="forward",c=a&&r.fetchMeta?.fetchMore?.direction==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,u.Qy)(t,r.data),hasPreviousPage:(0,u.ZF)(t,r.data),isFetchingNextPage:i,isFetchingPreviousPage:c,isRefetching:s&&!i&&!c}}},s=r(56537);function i(e,t){return(0,s.r)(e,a,t)}},79208:function(e,t,r){r.d(t,{Ue:function(){return u},rp:function(){return a},ck:function(){return s}});let n=()=>{let e,t;let r=new Promise((r,n)=>{e=r,t=n});return{resolve:e,reject:t,value:r}},u=(e,t)=>{let r=e.name??`batcher:${Math.random().toString(16).slice(2)})`,u=e.scheduler??s(10),a=globalThis.__BATSHIT_DEVTOOLS__?.for(r),i=t??{seq:0,batch:new Set,currentRequest:n(),timer:void 0,start:null,latest:null};a?.create({seq:i.seq});let c=()=>{i.batch=new Set,i.currentRequest=n(),i.timer=void 0,i.start=null,i.latest=null};return{fetch:t=>{i.start||(i.start=Date.now()),i.latest=Date.now(),i.batch.add(t),clearTimeout(i.timer);let r=u(i.start,i.latest,i.batch.size);a?.queue({seq:i.seq,query:t,batch:[...i.batch],scheduled:r,latest:i.latest,start:i.start});let n=()=>{let t=i.seq,r=e.fetcher([...i.batch]),n=i.currentRequest;return a?.fetch({seq:t,batch:[...i.batch]}),c(),r.then(e=>{a?.data({seq:t,data:e}),n.resolve(e)}).catch(e=>{a?.error({seq:t,error:e}),n.reject(e)}),i.seq++,r};if("immediate"===r){let r=i.currentRequest;return n(),r.value.then(r=>e.resolver(r,t))}return"never"===r?i.currentRequest.value.then(r=>e.resolver(r,t)):(i.timer=setTimeout(n,r),i.currentRequest.value.then(r=>e.resolver(r,t)))}}},a=e=>(t,r)=>t.find(t=>t[e]==r),s=e=>(t,r)=>e-(r-t)}}]);
//# sourceMappingURL=2873.68805e0a6edb8ce3.js.map