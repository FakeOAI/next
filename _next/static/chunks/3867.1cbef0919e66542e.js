(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3867,8939],{18939:function(e){e.exports=function(e){for(var r=-1,n=null==e?0:e.length,t=0,u=[];++r<n;){var i=e[r];i&&(u[t++]=i)}return u}},21214:function(e,r,n){"use strict";n.r(r),n.d(r,{PermalinkPage:function(){return y}});var t=n(63024),u=n(26925),i=n(27313),s=n(97537),l=n(2428),a=n.n(l),o=n(38482),d=n.n(o),c=n(34977),f=n(92379),h=n(51837),v=n(651);let x=d()(()=>Promise.all([n.e(8682),n.e(6923),n.e(757)]).then(n.bind(n,4168)).then(e=>e.DebugModal),{ssr:!1,loadableGenerated:{webpack:()=>[4168]}});function j(){return(0,v.jsx)("div",{className:"mt-3 flex justify-center",children:(0,v.jsx)(s.Z,{})})}function y(){return(0,v.jsx)(u.HC,{children:(0,v.jsx)(g,{})})}function g(){let{permalink:e}=(0,c.useRouter)().query;if(!a()(e)||2!==e.length)throw Error("Invalid permalink");let[r,n]=e,{query:s,isLoading:l}=(0,i.v)({threadId:n,threadUserId:r}),o=u.ne.useStore();(0,f.useEffect)(()=>{l||o.setQueryInput(s)},[o,l]);let d=(0,h.L)();return l?(0,v.jsx)(j,{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.u,{}),d&&(0,v.jsx)(x,{threadId:n,threadUserId:r})]})}},27313:function(e,r,n){"use strict";n.d(r,{Y:function(){return l},v:function(){return a}});var t=n(84760),u=n(92379),i=n(81014),s=n(12381);function l(e){let{threadId:r,threadUserId:n,refetchOnMount:u}=e;return(0,t.a)({queryKey:["thread",r,n],queryFn:async()=>{if(!r)return{thread:null,turns:null};let e=await (0,i.K8)({threadId:r,threadUserId:n}),t=e.turns;return{thread:e,turns:t}},enabled:!!r,refetchOnMount:u})}function a(e){var r;let{threadId:n,threadUserId:t}=e,i=l({threadId:n,threadUserId:t}),a=i.data;return(0,u.useEffect)(()=>{if(n){var e;s.P3.setThread(n,null!==(e=null==a?void 0:a.turns)&&void 0!==e?e:[])}},[n,a]),{query:null===(r=i.data)||void 0===r||null===(r=r.turns[0])||void 0===r?void 0:r.user_query,refetch:i.refetch,isLoading:i.isLoading,isError:i.isError}}}}]);
//# sourceMappingURL=3867.1cbef0919e66542e.js.map