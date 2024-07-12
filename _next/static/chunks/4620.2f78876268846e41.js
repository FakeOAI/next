"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4620],{74620:function(e,t,a){a.r(t),a.d(t,{BrowsingMessage:function(){return w},getVisitedUrl:function(){return j}});var s,r=a(41141),n=a(85734),l=a(96243),i=a(62538),o=a(3445),d=a(10852),u=a(27860),c=a(91257),g=a(19841),m=a(7290),f=a(556),h=a(75172),x=a(74091),v=a(33423),p=a(44512),M=a(72427),k=a(651);function w(e){var t,a;let{messages:s,isRequestActive:r,isLastMessageInTurn:i,isRetrieval:o,isUsingGizmo:d}=e,c=s.map(e=>e.message),g=c.map((e,t)=>{if(e.author.role!==n.uU.Tool||t>0&&y(e)&&y(c[t-1]))return null;let a=e.metadata;if(!a)return null;let{command:s,status:r}=a;return s?{type:s,status:r,didError:e.content.content_type===n.PX.SystemError,message:e}:null}).filter(l.l),m=g.filter(e=>(function(e,t){switch(e.type){case n.$x.Search:return!0;case n.$x.Click:case n.$x.Lookup:case n.$x.MultiClick:case n.$x.OpenUrl:case n.$x.Quote:case n.$x.QuoteFull:case n.$x.QuoteLines:return t?null!=function(e){var t;let a=null===(t=e.message.metadata)||void 0===t||null===(t=t._cite_metadata)||void 0===t?void 0:t.metadata_list[0];return null!=a&&"file"===a.type?a.name:null}(e):null!=j(e);case n.$x.Back:case n.$x.Scroll:return!1}})(e,!1)),f=null!==(t=m[m.length-1])&&void 0!==t?t:void 0,x=(0,h.Z)();if(c.filter(e=>e.author.role===n.uU.Tool).some(e=>{let{content:t}=e;return t.content_type===n.PX.SystemError}))return null;let w=v.X.Running,$={count:m.length,domain:f?(0,u.SX)(null!==(a=j(f))&&void 0!==a?a:""):void 0,query:f?S(f):void 0},E=o?d?x.formatMessage({id:"browsingMessage.searchingKnowledge",defaultMessage:"Searching my knowledge"}):x.formatMessage({id:"browsingMessage.startingRetrieval",defaultMessage:"Reading documents"}):x.formatMessage({id:"message.tools.browse.running",defaultMessage:"Searching the web"});return(c.some(M.We)?(w=v.X.Stopped,E=o?d?x.formatMessage({id:"browsingMessage.searchingKnowledgeStopped",defaultMessage:"Stopped searching knowledge"}):x.formatMessage({id:"browsingMessage.retrievalStopped",defaultMessage:"Stopped reading documents"}):x.formatMessage({id:"message.tools.browse.stopped",defaultMessage:"Search stopped"})):i&&r?m.length>0&&(E=function(e,t,a,s,r){switch(null==r?void 0:r.type){case n.$x.Click:case n.$x.MultiClick:case n.$x.Lookup:case n.$x.OpenUrl:case n.$x.Quote:case n.$x.QuoteFull:case n.$x.QuoteLines:case n.$x.Scroll:case n.$x.Back:return e.formatMessage({id:"message.tools.browse.reading",defaultMessage:"Browsing {domain}"},t);case n.$x.Search:case void 0:if(a)return s?e.formatMessage({id:"browsingMessage.searchingKnowledge",defaultMessage:"Searching my knowledge"}):e.formatMessage({id:"browsingMessage.startingRetrieval",defaultMessage:"Reading documents"});return e.formatMessage({id:"message.tools.browse.searching",defaultMessage:'Searching "{query}"'},t)}}(x,$,o,d,m[m.length-1])):g.length>0&&g.every(e=>e.didError)?(w=v.X.Error,E=o?d?x.formatMessage({id:"browsingMessage.searchingKnowledgeFailed",defaultMessage:"Error searching knowledge"}):x.formatMessage({id:"browsingMessage.retrievalFailed",defaultMessage:"Error reading documents"}):x.formatMessage({id:"message.tools.browse.failed",defaultMessage:"Search failed"})):(w=v.X.Finished,E=o?null:0===$.count?x.formatMessage({id:"message.tools.browse.started",defaultMessage:"Searching the web..."}):x.formatMessage({id:"message.tools.browse.finished",defaultMessage:"Searched {count, plural, =0 {0 sites} one {# site} other {# sites}}"},$)),m.length>0&&w!==v.X.Error)?(0,k.jsx)(p.D,{highlightedCommand:E,showWorkUserSetting:!1,status:w,children:0===m.length?null:(0,k.jsx)(b,{commands:m})}):(0,k.jsx)(_,{$isError:w===v.X.Error,children:E})}function y(e){var t,a,s;return(null===(t=e.metadata)||void 0===t?void 0:t.command)==="quote"||(null===(a=e.metadata)||void 0===a?void 0:a.command)==="quote_full"||(null===(s=e.metadata)||void 0===s?void 0:s.command)==="quote_lines"}function b(e){let{commands:t}=e,a=(0,h.Z)(),s=t.map(j).filter(e=>null!=e),r=(0,c.u)(s);return(0,k.jsx)("div",{className:"mb-4 divide-y divide-token-border-light rounded-xl border border-token-border-light text-sm",children:(0,k.jsx)(m.M,{initial:!1,children:t.map((e,s)=>{let{icon:l,url:c,title:m,externalLink:h}=function(e){var t;switch(e.type){case n.$x.Search:{let t=S(e);return{icon:o.W1M,url:"bing.com",externalLink:function(e){var t;let a=null===(t=e.message.metadata)||void 0===t||null===(t=t.args)||void 0===t?void 0:t[0];return void 0===a?null:d.Z.getBingLink({query:a})}(e),title:t?"“".concat(t,"”"):{id:"message.tools.browse.querying",defaultMessage:"Querying",description:"Status message when issuing a query"}}}case n.$x.Click:case n.$x.MultiClick:case n.$x.Lookup:case n.$x.OpenUrl:case n.$x.Quote:case n.$x.QuoteFull:case n.$x.QuoteLines:case n.$x.Scroll:return{url:j(e),title:null!==(t=function(e){var t;let a=null===(t=e.message.metadata)||void 0===t||null===(t=t._cite_metadata)||void 0===t?void 0:t.metadata_list[0];return null!=a&&"file"!==a.type?a.title:null}(e))&&void 0!==t?t:void 0};case n.$x.Back:return{}}}(e),x=c?(0,u.SX)(c):void 0,v=m?"string"==typeof m?m:a.formatMessage(m):null,p=c?r.get(c):null;return(0,k.jsx)(f.E.div,{initial:"collapsed",animate:"open",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},children:(0,k.jsxs)($,{url:null!=h?h:c,className:(0,g.default)("flex items-start gap-3 px-4 py-3",m?"text-token-text-secondary":"text-token-text-primary",0===s&&"rounded-t-xl",s===t.length-1&&"rounded-b-xl"),children:[l?(0,k.jsx)(l,{className:"icon-sm mt-0.5 flex-shrink-0 text-token-text-secondary"}):c?(0,k.jsx)(i.Z,{url:c,className:"mt-1"}):null,(0,k.jsxs)("div",{children:[v&&(0,k.jsxs)("div",{className:"line-clamp-1 text-token-text-primary",children:[p&&"".concat(p," — "),v]}),(0,k.jsx)("div",{children:x})]})]})},s)})})})}function $(e){let{url:t,children:a,className:s}=e;return t?(0,k.jsxs)("a",{href:t,target:"_blank",className:(0,g.default)(s,"group relative hover:bg-token-main-surface-secondary"),children:[a,(0,k.jsx)("div",{className:"invisible absolute right-3 bg-gradient-to-l from-token-main-surface-secondary to-transparent pl-4  group-hover:visible",children:(0,k.jsx)(o.Pfi,{className:"icon-md text-token-text-secondary"})})]}):(0,k.jsx)("div",{className:s,children:a})}function S(e){var t;return null===(t=e.message.metadata)||void 0===t||null===(t=t.args)||void 0===t?void 0:t[0]}function j(e){var t;let a=null===(t=e.message.metadata)||void 0===t||null===(t=t._cite_metadata)||void 0===t?void 0:t.metadata_list[0];return null!=a&&"file"!==a.type?a.url:null}let _=x.Z.p(s||(s=(0,r.Z)(["juice:first:mt-0 my-1.5 juice:h-8 flex items-center ltr:mr-auto rtl:ml-auto empty:hidden\n",""])),e=>{let{$isError:t}=e;return t?"text-token-text-error":"text-token-text-secondary"})}}]);
//# sourceMappingURL=4620.2f78876268846e41.js.map