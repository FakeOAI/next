(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7705],{51516:function(e,t,s){"use strict";function r(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}s.d(t,{Z:function(){return r}})},45846:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return V},default:function(){return $}});var r=s(94521),a=s(70657),n=s(94982),o=s(93223),l=s(4702),i=s(35226),u=s(14816),c=s(52134),d=s(96053),p=s(19841),g=s(71126),m=s.n(g),x=s(92379),f=s(26123),j=s(72256),h=s(25940),y=s(66246),w=s(651);function b(e){let{checked:t}=e;return(0,w.jsx)("div",{className:"p-2",children:(0,w.jsx)(y.Tg4,{className:"icon-sm"})})}var Z=s(5443),v=s(65530),k=s(11823);function O(e){let{className:t,inputClassName:s,value:r,onChange:a,placeholder:n}=e;return(0,w.jsxs)("div",{className:(0,p.default)("relative",t),children:[(0,w.jsx)(y.W1M,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,w.jsx)("input",{type:"text",value:r,onChange:a,placeholder:n,className:(0,p.default)("rounded-lg border border-gray-200 pl-8 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700",s),autoComplete:"off"})]})}var S=s(50684),M=s(67165),N=s(69482),C=s(49217),P=s(62484),D=s(59031),E=s(61888),G=s(24768),A=s(3671),_=s(41854);function q(e){let{group:t,isOpen:s,onClose:r}=e,a=(0,f.Z)(),i=a.formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:t.name}),u=(0,l.t)(),{0:c,1:d}=(0,x.useState)([]),{0:p,1:g}=(0,x.useState)(!1);async function m(){let e=null==u?void 0:u.getWorkspaceId();if(!e)throw Error("No workspace ID found");g(!0);let s=await o.Z.bulkAddWorkspaceGroupUsers(e,t.id,c);n.m.success(a.formatMessage({id:"yU4Zf0",defaultMessage:"Added {numUsers} users to the group"},{numUsers:s.added_group_users.length})),null==r||r(),g(!1)}return(0,w.jsxs)(C.Z,{isOpen:s,onClose:null!=r?r:E.noop,title:i,type:"success",showCloseButton:!0,primaryButton:(0,w.jsx)(Z.z,{onClick:m,disabled:0===c.length||c.length>1e3,loading:p,children:(0,w.jsx)(j.Z,{id:"EpbOzA",defaultMessage:"Add users to group"})}),children:[(0,w.jsx)(Q,{onChange:d}),c.length>1e3&&(0,w.jsx)("div",{className:"mt-2 text-sm text-token-text-error",children:(0,w.jsx)(j.Z,{id:"9lp0Tc",defaultMessage:"Email list is limited to {maxEmails} users at once",values:{maxEmails:1e3}})})]})}function Q(e){let{onChange:t}=e,{0:s,1:r}=(0,x.useState)("");return(0,w.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,w.jsxs)("label",{htmlFor:"group-email-paste",children:[(0,w.jsx)(j.Z,{id:"qvGcSC",defaultMessage:"Emails"}),(0,w.jsx)("br",{}),(0,w.jsx)("span",{className:"text-sm text-token-text-tertiary",children:(0,w.jsx)(j.Z,{id:"Fhd+5h",defaultMessage:"Paste email addresses here, one per line:"})})]}),(0,w.jsx)(_.Z,{id:"group-email-paste",className:"h-[250px] text-sm",value:s,onChange:e=>{r(e.target.value),t(e.target.value.split("\n").map(e=>e.trim()).filter(e=>e.length>0).filter(e=>A.F.test(e)))},placeholder:"jean@example.com\njoohyun@example.com\nmuhammed@example.com\nsusan@example.com"})]})}function T(e){let{group:t,isOpen:s,onClose:r}=e,a=(0,f.Z)().formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:t.name}),n=(0,l.t)(),o=null==n?void 0:n.getWorkspaceId(),{0:i,1:u}=(0,x.useState)(""),{0:d,1:p}=(0,x.useState)(0),{data:g}=(0,G.Z)(o,d*G.I,i,G.I,c.Wk),{0:m,1:h}=(0,x.useState)([]),{0:b,1:v}=(0,x.useState)([]),{0:S,1:M}=(0,x.useState)("interactive"),P=g?Math.ceil(g.total/G.I):0;async function A(e){v(t=>[...t,e]);try{await W(o,t.id,e),h(t=>[...t,e])}catch(e){D.U.addError(e)}finally{v(t=>t.filter(t=>t!==e))}}return"batch"===S?(0,w.jsx)(q,{group:t,isOpen:s,onClose:r}):(0,w.jsx)(C.Z,{type:"warning",isOpen:s,onClose:null!=r?r:E.noop,title:a,size:"custom",className:"max-w-screen-md",showCloseButton:!0,primaryButton:(0,w.jsx)(Z.z,{onClick:r,children:(0,w.jsx)(j.Z,{id:"0NAzDq",defaultMessage:"Done"})}),children:(0,w.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,w.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,w.jsx)("p",{children:a}),(0,w.jsx)(Z.z,{onClick:()=>{M("batch")},color:"secondary",children:(0,w.jsx)(j.Z,{id:"5GPldp",defaultMessage:"Bulk add users"})})]}),(0,w.jsx)(O,{value:i,inputClassName:"w-full",onChange:e=>{u(e.target.value)}}),(0,w.jsxs)(N.Z.Root,{className:"min-w-full",children:[(0,w.jsxs)(N.Z.Header,{children:[(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.addMember.name",defaultMessage:"Name"})}),(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.addMember.email",defaultMessage:"Email"})}),(0,w.jsx)(N.Z.HeaderCell,{})]}),(0,w.jsx)(N.Z.Body,{children:null==g?void 0:g.items.map(e=>(0,w.jsxs)(N.Z.Row,{children:[(0,w.jsx)(N.Z.Cell,{children:e.name}),(0,w.jsx)(N.Z.Cell,{children:e.email}),(0,w.jsx)(N.Z.Cell,{textAlign:"right",className:"pr-1",children:(0,w.jsx)(Z.z,{size:"small",color:"secondary",disabled:b.includes(e.id),onClick:()=>{m.includes(e.id)||A(e.id)},icon:m.includes(e.id)?y.$As:y.Vz5,children:m.includes(e.id)?(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.addMember.addButton",defaultMessage:"Added"}):(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.addMember.addedButton",defaultMessage:"Add"})})})]},e.id))})]}),(0,w.jsx)("div",{className:"flex flex-row justify-center",children:(0,w.jsx)(k.t,{currentPage:d,onChangeIndex:e=>{p(e)},length:P})})]})})}async function W(e,t,s){await o.Z.addWorkspaceGroupUser(e,t,s)}function I(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function B(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?I(Object(s),!0).forEach(function(t){(0,r.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):I(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function F(e){let{workspaceId:t,group:s,readOnly:r}=e,a=(0,f.Z)(),{0:n,1:l}=(0,x.useState)(!1),{0:g,1:m}=(0,x.useState)(""),{0:h,1:b}=(0,x.useState)(0),{data:v,isLoading:O,isPlaceholderData:C}=(0,u.a)({queryKey:[t,"groups",s.id,g,"members-page-".concat(h)],queryFn:()=>o.Z.listWorkspaceGroupMembers(t,s.id,g,10*h),placeholderData:c.Wk}),{0:D,1:E}=(0,x.useState)(!1),G=(0,x.useRef)(null),A=(0,i.NL)();(0,x.useEffect)(()=>{n&&G.current&&G.current.focus()},[n]);let{mutateAsync:_}=(0,d.D)({mutationFn:async e=>await o.Z.removeWorkspaceGroupMember(t,s.id,e),onMutate:e=>(A.cancelQueries({queryKey:[t,"groups",s.id]}),A.setQueryData([t,"groups",s.id,g,"members-page-".concat(h)],t=>t?B(B({},t),{},{items:t.items.filter(t=>t.id!==e),total:t.total-1}):{limit:10,offset:0,items:[],total:0}),{previousData:v}),onError:(e,r,a)=>{A.setQueryData([t,"groups",s.id,"members-page-".concat(h)],null==a?void 0:a.previousData),A.invalidateQueries({queryKey:[t,"groups",s.id]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),A.invalidateQueries({queryKey:[t,"groups"]})}});return(0,w.jsxs)("div",{className:"flex w-full flex-col",children:[(0,w.jsxs)("div",{className:"flex flex-row items-center ",children:[(0,w.jsx)("div",{className:"border-token-border-dark mt-3 inline-block h-8 grow-0 border-b-2 text-sm font-semibold",children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.membersTableTitle",defaultMessage:"Group members"})}),(0,w.jsx)("div",{className:"grow"}),(0,w.jsx)(P.u,{label:a.formatMessage({id:"workspaceSettings.groups.searchButtonTooltip",defaultMessage:"Search members"}),children:(0,w.jsx)("div",{className:"cursor-pointer p-2",onClick:()=>{l(!0)},children:(0,w.jsx)(y.W1M,{className:"icon-sm"})})}),(0,w.jsx)("input",{type:"text",ref:G,placeholder:a.formatMessage({id:"workspaceSettings.groups.searchMembers",defaultMessage:"Filter by name or email..."}),className:(0,p.default)("bg-token-surface-primary dark:bg-token-surface-secondary border-none px-0 transition-width duration-300 ease-in-out focus:ring-0",n?"w-64":"w-0"),value:g,onChange:()=>{var e,t;b(0),m(null!==(e=null===(t=G.current)||void 0===t?void 0:t.value)&&void 0!==e?e:"")}})]}),(0,w.jsxs)(N.Z.Root,{className:"min-w-full",children:[(0,w.jsxs)(N.Z.Header,{children:[(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.memberName",defaultMessage:"Name"})}),(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.email",defaultMessage:"Email"})}),(0,w.jsx)(N.Z.HeaderCell,{})]}),(0,w.jsx)(N.Z.Body,{className:O||C?"opacity-50":void 0,children:null==v?(0,w.jsx)(N.Z.Row,{children:(0,w.jsx)(N.Z.Cell,{colSpan:3,children:(0,w.jsx)(S.Z,{})})}):0===v.items.length?(0,w.jsx)(N.Z.Row,{children:(0,w.jsx)(N.Z.Cell,{colSpan:3,children:""===g?(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.noMembers",defaultMessage:"No members"}):(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.noMembersForSearch",defaultMessage:"No members matched the filter"})})}):v.items.map(e=>(0,w.jsxs)(N.Z.Row,{children:[(0,w.jsx)(N.Z.Cell,{children:(0,w.jsx)("span",{className:"ml-3",children:e.name})}),(0,w.jsx)(N.Z.Cell,{children:e.email}),(0,w.jsx)(N.Z.Cell,{textAlign:"right",children:!r&&(0,w.jsxs)(M.Z.Root,{children:[(0,w.jsx)(M.Z.Trigger,{className:"-my-2",children:(0,w.jsx)(y.nWS,{className:"icon-sm"})}),(0,w.jsx)(M.Z.Portal,{children:(0,w.jsx)(M.Z.Content,{children:(0,w.jsx)(M.Z.Item,{onClick:()=>_(e.id),children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.removeMember",defaultMessage:"Remove member"})})})})]})})]},e.id))})]}),(0,w.jsxs)("div",{className:"my-2 flex flex-row justify-center",children:[!r&&(0,w.jsx)(Z.z,{color:"secondary",onClick:()=>E(!0),children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})}),(0,w.jsx)("div",{className:"grow"}),v&&v.items.length>0&&(0,w.jsx)(k.t,{currentPage:h,onChangeIndex:e=>{b(e)},length:Math.ceil(v.total/10)})]}),D&&(0,w.jsx)(T,{isOpen:!0,onClose:()=>{A.invalidateQueries({queryKey:[t,"groups"]}),E(!1)},group:s})]})}function R(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function z(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?R(Object(s),!0).forEach(function(t){(0,r.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):R(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function H(e){let{workspaceId:t}=e,s=(0,f.Z)(),r=(0,l.t)(),a=!(null!=r&&r.isAdminOfAccount()||null!=r&&r.isOwnerOfAccount()),g=(0,i.NL)(),{0:m,1:h}=(0,x.useState)(""),{0:y,1:b}=(0,x.useState)(0),{data:v,isLoading:M,isPlaceholderData:C}=(0,u.a)({queryKey:""===m?[t,"groups","page-".concat(y)]:[t,"groups","filtered",m,"page-".concat(y)],queryFn:()=>o.Z.getWorkspaceGroups(t,{query:m,offset:10*y}),placeholderData:c.Wk}),{0:P,1:D}=(0,x.useState)(!1),E=e=>{e&&(b(0),h("")),D(e)},{mutateAsync:G}=(0,d.D)({mutationFn:async e=>{let{workspaceId:t,name:s}=e;return await o.Z.createWorkspaceGroup(t,s)},onMutate:e=>{let{workspaceId:t,name:s}=e;return g.cancelQueries({queryKey:[t,"groups"]}),g.setQueryData([t,"groups","page-0"],e=>(e||(e={limit:10,offset:0,items:[],total:0}),z(z({},e),{},{items:[{id:"new",name:s,num_members:0,created_time:""},...e.items.slice(0,9)]}))),{previousGroups:v}},onError:(e,r,a)=>{g.setQueryData([t,"groups","page-0"],null==a?void 0:a.previousGroups),g.invalidateQueries({queryKey:[t,"groups"]}),"Group with this name already exists."===e.message&&n.m.warning(s.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),g.invalidateQueries({queryKey:[t,"groups"]})}}),{mutateAsync:A}=(0,d.D)({mutationFn:async e=>await o.Z.deleteWorkspaceGroup(t,e),onMutate:e=>(g.cancelQueries({queryKey:[t,"groups","page-0"]}),g.setQueryData([t,"groups","page-0"],t=>(t||(t={items:[]}),z(z({},t),{},{items:t.items.filter(t=>t.id!==e)}))),{previousGroups:v}),onError:(e,s,r)=>{g.setQueryData([t,"groups","page-0"],null==r?void 0:r.previousGroups),g.invalidateQueries({queryKey:[t,"groups"]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),g.invalidateQueries({queryKey:[t,"groups"]})}}),{mutateAsync:_}=(0,d.D)({mutationFn:async e=>{let{workspaceId:t,groupID:s,name:r}=e;return await o.Z.updateWorkspaceGroup(t,s,r)},onMutate:e=>{let{workspaceId:t,groupID:s,name:r}=e,a=g.getQueryData([t,"groups","page-".concat(y)]);return g.setQueryData([t,"groups","page-".concat(y)],e=>(e||(e={items:[]}),z(z({},e),{},{items:e.items.map(e=>e.id===s?z(z({},e),{},{name:r}):e)}))),{previousGroups:a}},onError:(e,t,r)=>{g.setQueryData([t,"groups","page-".concat(y)],null==r?void 0:r.previousGroups),"Group with this name already exists."===e.message&&n.m.warning(s.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),g.invalidateQueries({queryKey:[t,"groups"]})}});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"mb-3 mt-6 flex flex-row justify-between gap-2",children:[(0,w.jsx)(O,{inputClassName:"w-[250px]",value:m,onChange:e=>{h(e.target.value),b(0)},placeholder:s.formatMessage({id:"workspaceSettings.groups.search",defaultMessage:"Search group name"})}),!a&&(0,w.jsx)(Z.z,{onClick:()=>E(!0),children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.create",defaultMessage:"Create group"})})]}),(0,w.jsxs)("div",{children:[(0,w.jsxs)(N.Z.Root,{className:"min-w-full",children:[(0,w.jsxs)(N.Z.Header,{children:[(0,w.jsx)(N.Z.HeaderCell,{}),(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.groupName",defaultMessage:"Group name"})}),(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.members",defaultMessage:"Members"})}),(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.created",defaultMessage:"Created"})}),(0,w.jsx)(N.Z.HeaderCell,{})]}),(0,w.jsxs)(N.Z.Body,{className:(0,p.default)((M||C)&&"opacity-50"),children:[P&&(0,w.jsx)(U,{group:"new",workspaceId:t,onChangeName:async e=>{""!==e.trim()&&(G({workspaceId:t,name:e}),E(!1))},onDelete:()=>null,readOnly:a}),null==v?(0,w.jsx)(N.Z.Row,{children:(0,w.jsx)(N.Z.Cell,{colSpan:5,textAlign:"center",children:(0,w.jsx)(S.Z,{})})}):0===v.items.length?(0,w.jsx)(N.Z.Row,{children:(0,w.jsx)(N.Z.Cell,{colSpan:5,textAlign:"center",children:""===m?(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.noGroups",defaultMessage:"No groups found."}):(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.noGroupsWithFIlter",defaultMessage:"No groups found. Try changing the search query."})})}):v.items.map(e=>(0,w.jsx)(U,{group:e,workspaceId:t,onDelete:A,onChangeName:async s=>{_({workspaceId:t,groupID:e.id,name:s})},readOnly:a},e.id))]})]}),v&&(0,w.jsx)("div",{className:"text-center",children:(0,w.jsx)(k.t,{length:Math.ceil(v.total/10),currentPage:Math.min(y,Math.ceil(v.total/10)),onChangeIndex:e=>b(e)})})]})]})}function K(e){let{currentWorkspaceId:t}=e,s=(0,f.Z)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m(),{children:(0,w.jsx)("title",{children:s.formatMessage(X.title)})}),(0,w.jsx)(a.yG,{title:s.formatMessage(X.title),subtitle:(0,w.jsx)(j.Z,{id:"NDDzzF",defaultMessage:"Only workspace admins can edit these settings."})}),(0,w.jsx)(a.hb,{showSpinner:!1,children:(0,w.jsx)(H,{workspaceId:t})})]})}function U(e){let{group:t,workspaceId:s,onChangeName:r,onDelete:a,readOnly:n}=e,o=(0,f.Z)(),{0:l,1:i}=(0,x.useState)(!1),{0:u,1:c}=(0,x.useState)("new"===t?"":t.name),{0:d,1:p}=(0,x.useState)(!1),{0:g,1:m}=(0,x.useState)("new"===t),{0:Z,1:k}=(0,x.useState)(null),O=(0,x.useRef)(null);(0,x.useEffect)(()=>{if("new"===t||g){var e;null===(e=O.current)||void 0===e||e.focus()}},[t,g]);let S=async()=>{if(""===u.trim()){c("new"===t?"":t.name),m(!1),p(!1);return}r&&(p(!0),await r(u)),p(!1),m(!1)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(N.Z.Row,{onClick:()=>i(e=>!e),className:"hover:bg-token-surface-secondary cursor-pointer",children:[(0,w.jsx)(N.Z.Cell,{children:(0,w.jsx)(b,{checked:l})}),(0,w.jsx)(N.Z.Cell,{children:"new"===t||g?(0,w.jsx)(v.Z,{ref:O,name:"newGroupName",value:u,disabled:d,placeholder:o.formatMessage({id:"workspaceSettings.groups.groupNamePlaceholder",defaultMessage:"New group name..."}),onChange:e=>c(e.target.value),onBlur:()=>{u!==("new"===t?"":t.name)&&S()},onPressEnter:S}):t.name}),(0,w.jsx)(N.Z.Cell,{children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.memberCount",defaultMessage:"{count} members",values:{count:"new"===t?"0":t.num_members}})}),(0,w.jsx)(N.Z.Cell,{children:"new"!==t&&t.created_time?(0,w.jsx)(h.Ji,{value:t.created_time,year:"numeric",month:"long",day:"numeric"}):""}),(0,w.jsx)(N.Z.Cell,{textAlign:"right",children:"new"!==t&&!n&&(0,w.jsxs)(M.Z.Root,{children:[(0,w.jsx)(M.Z.Trigger,{className:"-my-2",children:(0,w.jsx)(y.nWS,{className:"icon-sm"})}),(0,w.jsx)(M.Z.Portal,{children:(0,w.jsxs)(M.Z.Content,{children:[(0,w.jsx)(M.Z.Item,{onClick:e=>{m(!0),setTimeout(()=>{var e;null===(e=O.current)||void 0===e||e.focus()},120),e.stopPropagation()},children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.changeName",defaultMessage:"Edit name"})}),(0,w.jsx)(M.Z.Item,{onClick:e=>{k(t),e.stopPropagation()},children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.edit",defaultMessage:"Delete group"})})]})})]})})]}),l&&"new"!==t&&(0,w.jsx)(N.Z.Row,{children:(0,w.jsx)(N.Z.Cell,{colSpan:5,className:"pl-8",children:(0,w.jsx)(F,{group:t,workspaceId:s,readOnly:n})})}),Z&&(0,w.jsx)(L,{group:Z,onDelete:a,onClose:()=>k(null)})]})}function L(e){let{group:t,onDelete:s,onClose:r}=e,a=(0,f.Z)().formatMessage({id:"workspaceSettings.groups.deleteGroupTitle",defaultMessage:"Delete group {groupName}?"},{groupName:t.name});return(0,w.jsx)(C.Z,{type:"warning",isOpen:!0,onClose:r,title:a,showCloseButton:!0,primaryButton:(0,w.jsx)(Z.z,{color:"danger",onClick:async()=>{s(t.id),r()},children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.confirmDelete",defaultMessage:"Delete"})}),secondaryButton:(0,w.jsx)(Z.z,{onClick:r,color:"secondary",children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.cancelDelete",defaultMessage:"Cancel"})}),children:(0,w.jsx)("p",{children:(0,w.jsx)(j.Z,{id:"workspaceSettings.groups.deleteGroupWarning",defaultMessage:'Are you sure you want to delete the "{groupName}" group? This action cannot be undone.',values:{groupName:t.name}})})})}let X=(0,h.vU)({title:{id:"admin.groupsSettings.title",defaultMessage:"Groups"}});function J(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}var V=!0;function $(e){return(0,w.jsx)(K,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?J(Object(s),!0).forEach(function(t){(0,r.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):J(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({},e))}$.getLayout=function(e){return(0,w.jsx)(a.ZP,{mobilePageTitle:"Groups",children:e})}},41854:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var r=s(94521),a=s(17379),n=s(19841),o=s(651);let l=["className"];function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function u(e){let{className:t}=e,s=(0,a.Z)(e,l);return(0,o.jsx)("textarea",function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach(function(t){(0,r.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({className:(0,n.default)("form-textarea w-full rounded-lg border border-token-border-light bg-token-main-surface-secondary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary",t)},s))}},53408:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/groups",function(){return s(45846)}])}},function(e){e.O(0,[6271,7349,3718,4368,5365,2349,210,4834,7126,8890,9511,0,5165,657,2888,9774,179],function(){return e(e.s=53408)}),_N_E=e.O()}]);
//# sourceMappingURL=groups-b480291971fa68c7.js.map