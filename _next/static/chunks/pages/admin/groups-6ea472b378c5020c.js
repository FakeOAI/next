(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7705,6638],{43062:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return et},default:function(){return er}});var n=r(98601),a=r(68986),s=r(76638),o=r(89794),i=r(30853),l=r(24740),u=r(2721),c=r(93951),d=r(42420),p=r(84760),f=r(52134),m=r(56032),g=r(88667),x=r(19841),h=r(11941),y=r.n(h),j=r(92379),w=r(75172),b=r(62984),v=r(68306),M=r(64854),k=r(11550),Z=r(6440),C=r(13350),S=r(28146),O=r(651);function N(e){let{className:t,inputClassName:r,value:n,onChange:a,placeholder:s}=e;return(0,O.jsxs)("div",{className:(0,x.default)("relative",t),children:[(0,O.jsx)(S.W1M,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,O.jsx)("input",{type:"text",value:n,onChange:a,placeholder:s,className:(0,x.default)("rounded-lg border border-gray-200 pl-8 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700",r),autoComplete:"off"})]})}var _=r(97537),E=r(98095),P=r(36792),D=r(24434),F=r(82363),T=r(91530),U=r.n(T),I=r(18898),R=r(60464),A=r(66587);function G(e){let{group:t,isOpen:r,onClose:n}=e,a=(0,w.Z)(),s=a.formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:t.name}),o=(0,c.t)(),{0:i,1:d}=(0,j.useState)([]),{0:p,1:f}=(0,j.useState)(!1);async function m(){let e=o?.getWorkspaceId();if(!e)throw Error("No workspace ID found");f(!0);let r=await u.Z.bulkAddWorkspaceGroupUsers(e,t.id,i);l.m.success(a.formatMessage({id:"yU4Zf0",defaultMessage:"Added {numUsers} users to the group"},{numUsers:r.added_group_users.length})),n?.(),f(!1)}return(0,O.jsxs)(D.Z,{isOpen:r,onClose:n??U(),title:s,type:"success",showCloseButton:!0,primaryButton:(0,O.jsx)(k.z,{onClick:m,disabled:0===i.length||i.length>1e3,loading:p,children:(0,O.jsx)(b.Z,{id:"EpbOzA",defaultMessage:"Add users to group"})}),children:[(0,O.jsx)(B,{onChange:d}),i.length>1e3&&(0,O.jsx)("div",{className:"mt-2 text-sm text-token-text-error",children:(0,O.jsx)(b.Z,{id:"9lp0Tc",defaultMessage:"Email list is limited to {maxEmails} users at once",values:{maxEmails:1e3}})})]})}function B(e){let{onChange:t}=e,{0:r,1:n}=(0,j.useState)("");return(0,O.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,O.jsxs)("label",{htmlFor:"group-email-paste",children:[(0,O.jsx)(b.Z,{id:"qvGcSC",defaultMessage:"Emails"}),(0,O.jsx)("br",{}),(0,O.jsx)("span",{className:"text-sm text-token-text-tertiary",children:(0,O.jsx)(b.Z,{id:"Fhd+5h",defaultMessage:"Paste email addresses here, one per line:"})})]}),(0,O.jsx)(A.Z,{id:"group-email-paste",className:"h-[250px] text-sm",value:r,onChange:e=>{n(e.target.value),t(e.target.value.split("\n").map(e=>e.trim()).filter(e=>e.length>0).filter(e=>R.F.test(e)))},placeholder:"jean@example.com\njoohyun@example.com\nmuhammed@example.com\nsusan@example.com"})]})}function q(e){let{group:t,isOpen:r,onClose:n}=e,a=(0,w.Z)().formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:t.name}),s=(0,c.t)(),o=s?.getWorkspaceId(),{0:i,1:l}=(0,j.useState)(""),{0:u,1:d}=(0,j.useState)(0),{data:p}=(0,I.Z)(o,u*I.I,i,I.I,f.Wk),{0:m,1:g}=(0,j.useState)([]),{0:x,1:h}=(0,j.useState)([]),{0:y,1:v}=(0,j.useState)("interactive"),M=p?Math.ceil(p.total??0/I.I):0;async function Z(e){h(t=>[...t,e]);try{await z(o,t.id,e),g(t=>[...t,e])}catch(e){F.U.addError(e)}finally{h(t=>t.filter(t=>t!==e))}}return"batch"===y?(0,O.jsx)(G,{group:t,isOpen:r,onClose:n}):(0,O.jsx)(D.Z,{type:"warning",isOpen:r,onClose:n??U(),title:a,size:"custom",className:"max-w-screen-md",showCloseButton:!0,primaryButton:(0,O.jsx)(k.z,{onClick:n,children:(0,O.jsx)(b.Z,{id:"0NAzDq",defaultMessage:"Done"})}),children:(0,O.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,O.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,O.jsx)("p",{children:a}),(0,O.jsx)(k.z,{onClick:()=>{v("batch")},color:"secondary",children:(0,O.jsx)(b.Z,{id:"5GPldp",defaultMessage:"Bulk add users"})})]}),(0,O.jsx)(N,{value:i,inputClassName:"w-full",onChange:e=>{l(e.target.value)}}),(0,O.jsxs)(P.Z.Root,{className:"min-w-full",children:[(0,O.jsxs)(P.Z.Header,{children:[(0,O.jsx)(P.Z.HeaderCell,{children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.addMember.name",defaultMessage:"Name"})}),(0,O.jsx)(P.Z.HeaderCell,{children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.addMember.email",defaultMessage:"Email"})}),(0,O.jsx)(P.Z.HeaderCell,{})]}),(0,O.jsx)(P.Z.Body,{children:p?.items.map(e=>O.jsxs(P.Z.Row,{children:[O.jsx(P.Z.Cell,{children:e.name}),O.jsx(P.Z.Cell,{children:e.email}),O.jsx(P.Z.Cell,{textAlign:"right",className:"pr-1",children:O.jsx(k.z,{size:"small",color:"secondary",disabled:x.includes(e.id),onClick:()=>{m.includes(e.id)||Z(e.id)},icon:m.includes(e.id)?S.$As:S.Vz5,children:m.includes(e.id)?O.jsx(b.Z,{id:"workspaceSettings.groups.addMember.addButton",defaultMessage:"Added"}):O.jsx(b.Z,{id:"workspaceSettings.groups.addMember.addedButton",defaultMessage:"Add"})})})]},e.id))})]}),(0,O.jsx)("div",{className:"flex flex-row justify-center",children:(0,O.jsx)(C.t,{currentPage:u,onChangeIndex:e=>{d(e)},length:M})})]})})}async function z(e,t,r){await u.Z.addWorkspaceGroupUser(e,t,r)}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function L(e){let{workspaceId:t,group:r,readOnly:n}=e,a=(0,w.Z)(),{0:s,1:l}=(0,j.useState)(!1),{0:c,1:g}=(0,j.useState)(""),{0:h,1:y}=(0,j.useState)(0),{data:v,isLoading:M,isPlaceholderData:Z}=(0,p.a)({queryKey:[t,"groups",r.id,c,`members-page-${h}`],queryFn:()=>u.Z.listWorkspaceGroupMembers(t,r.id,c,10*h),placeholderData:f.Wk}),{0:N,1:D}=(0,j.useState)(!1),F=(0,j.useRef)(null),T=(0,d.NL)();(0,j.useEffect)(()=>{s&&F.current&&F.current.focus()},[s]);let{mutateAsync:U}=(0,m.D)({mutationFn:async e=>await u.Z.removeWorkspaceGroupMember(t,r.id,e),onMutate:e=>(T.cancelQueries({queryKey:[t,"groups",r.id]}),T.setQueryData([t,"groups",r.id,c,`members-page-${h}`],t=>t?W(W({},t),{},{items:t.items.filter(t=>t.id!==e),total:t.total-1}):{limit:10,offset:0,items:[],total:0}),{previousData:v}),onError:(e,n,a)=>{T.setQueryData([t,"groups",r.id,`members-page-${h}`],a?.previousData),T.invalidateQueries({queryKey:[t,"groups",r.id]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),T.invalidateQueries({queryKey:[t,"groups"]})}});return(0,O.jsxs)("div",{className:"flex w-full flex-col",children:[(0,O.jsxs)("div",{className:"flex flex-row items-center",children:[(0,O.jsx)("div",{className:"border-token-border-dark mt-3 inline-block h-8 grow-0 border-b-2 text-sm font-semibold",children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.membersTableTitle",defaultMessage:"Group members"})}),(0,O.jsx)("div",{className:"grow"}),(0,O.jsx)(i.u,{label:a.formatMessage({id:"workspaceSettings.groups.searchButtonTooltip",defaultMessage:"Search members"}),children:(0,O.jsx)("div",{className:"cursor-pointer p-2",onClick:()=>{l(!0)},children:(0,O.jsx)(S.W1M,{className:"icon-sm"})})}),(0,O.jsx)("input",{type:"text",ref:F,placeholder:a.formatMessage({id:"workspaceSettings.groups.searchMembers",defaultMessage:"Filter by name or email..."}),className:(0,x.default)("bg-token-surface-primary dark:bg-token-surface-secondary border-none px-0 transition-width duration-300 ease-in-out focus:ring-0",s?"w-64":"w-0"),value:c,onChange:()=>{y(0),g(F.current?.value??"")}})]}),(0,O.jsxs)(P.Z.Root,{className:"min-w-full",children:[(0,O.jsxs)(P.Z.Header,{children:[(0,O.jsx)(P.Z.HeaderCell,{children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.memberName",defaultMessage:"Name"})}),(0,O.jsx)(P.Z.HeaderCell,{children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.email",defaultMessage:"Email"})}),(0,O.jsx)(P.Z.HeaderCell,{})]}),(0,O.jsx)(P.Z.Body,{className:M||Z?"opacity-50":void 0,children:null==v?(0,O.jsx)(P.Z.Row,{children:(0,O.jsx)(P.Z.Cell,{colSpan:3,children:(0,O.jsx)(_.Z,{})})}):0===v.items.length?(0,O.jsx)(P.Z.Row,{children:(0,O.jsx)(P.Z.Cell,{colSpan:3,children:""===c?(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.noMembers",defaultMessage:"No members"}):(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.noMembersForSearch",defaultMessage:"No members matched the filter"})})}):v.items.map(e=>(0,O.jsxs)(P.Z.Row,{children:[(0,O.jsx)(P.Z.Cell,{children:(0,O.jsx)("span",{className:"ml-3",children:e.name})}),(0,O.jsx)(P.Z.Cell,{children:e.email}),(0,O.jsx)(P.Z.Cell,{textAlign:"right",children:!n&&(r.is_scim_managed?(0,O.jsx)(E.Z.Root,{children:(0,O.jsx)(E.Z.Trigger,{disabled:!0,children:(0,O.jsx)(i.u,{sideOffset:0,label:a.formatMessage(o.s.managedViaSCIMTooltip),className:"flex",side:"right",children:(0,O.jsx)(S.nWS,{className:"icon-sm"})})})}):(0,O.jsxs)(E.Z.Root,{children:[(0,O.jsx)(E.Z.Trigger,{className:"-my-2",children:(0,O.jsx)(S.nWS,{className:"icon-sm"})}),(0,O.jsx)(E.Z.Portal,{children:(0,O.jsx)(E.Z.Content,{children:(0,O.jsx)(E.Z.Item,{onClick:()=>U(e.id),children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.removeMember",defaultMessage:"Remove member"})})})})]}))})]},e.id))})]}),(0,O.jsxs)("div",{className:"my-2 flex flex-row justify-center",children:[!n&&!r.is_scim_managed&&(0,O.jsx)(k.z,{color:"secondary",onClick:()=>D(!0),children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})}),!n&&r.is_scim_managed&&(0,O.jsx)(i.u,{label:a.formatMessage(o.s.managedViaSCIMTooltip),side:"right",sideOffset:0,children:(0,O.jsx)(k.z,{color:"secondary",disabled:!0,children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})})}),(0,O.jsx)("div",{className:"grow"}),v&&v.items.length>0&&(0,O.jsx)(C.t,{currentPage:h,onChangeIndex:e=>{y(e)},length:Math.ceil(v.total/10)})]}),N&&(0,O.jsx)(q,{isOpen:!0,onClose:()=>{T.invalidateQueries({queryKey:[t,"groups"]}),D(!1)},group:r})]})}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function $(e){let{workspaceId:t}=e,r=(0,w.Z)(),n=(0,c.t)(),a=!(n?.isAdminOfAccount()||n?.isOwnerOfAccount()),s=(0,d.NL)(),{0:o,1:i}=(0,j.useState)(""),{0:g,1:h}=(0,j.useState)(0),{data:y,isLoading:v,isPlaceholderData:M}=(0,p.a)({queryKey:""===o?[t,"groups",`page-${g}`]:[t,"groups","filtered",o,`page-${g}`],queryFn:()=>u.Z.getWorkspaceGroups(t,{query:o,offset:10*g}),placeholderData:f.Wk}),{0:Z,1:S}=(0,j.useState)(!1),E=e=>{e&&(h(0),i("")),S(e)},{mutateAsync:D}=(0,m.D)({mutationFn:async e=>{let{workspaceId:t,name:r}=e;return await u.Z.createWorkspaceGroup(t,r)},onMutate:e=>{let{workspaceId:t,name:r}=e;return s.cancelQueries({queryKey:[t,"groups"]}),s.setQueryData([t,"groups","page-0"],e=>(e||(e={limit:10,offset:0,items:[],total:0}),K(K({},e),{},{items:[{id:"new",name:r,num_members:0,created_time:""},...e.items.slice(0,9)]}))),{previousGroups:y}},onError:(e,n,a)=>{s.setQueryData([t,"groups","page-0"],a?.previousGroups),s.invalidateQueries({queryKey:[t,"groups"]}),"Group with this name already exists."===e.message&&l.m.warning(r.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),s.invalidateQueries({queryKey:[t,"groups"]})}}),{mutateAsync:F}=(0,m.D)({mutationFn:async e=>await u.Z.deleteWorkspaceGroup(t,e),onMutate:e=>(s.cancelQueries({queryKey:[t,"groups","page-0"]}),s.setQueryData([t,"groups","page-0"],t=>(t||(t={items:[]}),K(K({},t),{},{items:t.items.filter(t=>t.id!==e)}))),{previousGroups:y}),onError:(e,r,n)=>{s.setQueryData([t,"groups","page-0"],n?.previousGroups),s.invalidateQueries({queryKey:[t,"groups"]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),s.invalidateQueries({queryKey:[t,"groups"]})}}),{mutateAsync:T}=(0,m.D)({mutationFn:async e=>{let{workspaceId:t,groupID:r,name:n}=e;return await u.Z.updateWorkspaceGroup(t,r,n)},onMutate:e=>{let{workspaceId:t,groupID:r,name:n}=e,a=s.getQueryData([t,"groups",`page-${g}`]);return s.setQueryData([t,"groups",`page-${g}`],e=>(e||(e={items:[]}),K(K({},e),{},{items:e.items.map(e=>e.id===r?K(K({},e),{},{name:n}):e)}))),{previousGroups:a}},onError:(e,t,n)=>{s.setQueryData([t,"groups",`page-${g}`],n?.previousGroups),"Group with this name already exists."===e.message&&l.m.warning(r.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),s.invalidateQueries({queryKey:[t,"groups"]})}});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("div",{className:"mb-3 mt-6 flex flex-row justify-between gap-2",children:[(0,O.jsx)(N,{inputClassName:"w-[250px]",value:o,onChange:e=>{i(e.target.value),h(0)},placeholder:r.formatMessage({id:"workspaceSettings.groups.search",defaultMessage:"Search group name"})}),!a&&(0,O.jsx)(k.z,{onClick:()=>E(!0),children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.create",defaultMessage:"Create group"})})]}),(0,O.jsxs)("div",{children:[(0,O.jsxs)(P.Z.Root,{className:"min-w-full",children:[(0,O.jsxs)(P.Z.Header,{children:[(0,O.jsx)(P.Z.HeaderCell,{}),(0,O.jsx)(P.Z.HeaderCell,{children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.groupName",defaultMessage:"Group name"})}),(0,O.jsx)(P.Z.HeaderCell,{children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.members",defaultMessage:"Members"})}),(0,O.jsx)(P.Z.HeaderCell,{children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.created",defaultMessage:"Created"})}),(0,O.jsx)(P.Z.HeaderCell,{})]}),(0,O.jsxs)(P.Z.Body,{className:(0,x.default)((v||M)&&"opacity-50"),children:[Z&&(0,O.jsx)(X,{group:"new",workspaceId:t,onChangeName:async e=>{""!==e.trim()&&(D({workspaceId:t,name:e}),E(!1))},onDelete:()=>null,readOnly:a}),null==y?(0,O.jsx)(P.Z.Row,{children:(0,O.jsx)(P.Z.Cell,{colSpan:5,textAlign:"center",children:(0,O.jsx)(_.Z,{})})}):0===y.items.length?(0,O.jsx)(P.Z.Row,{children:(0,O.jsx)(P.Z.Cell,{colSpan:5,textAlign:"center",children:""===o?(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.noGroups",defaultMessage:"No groups found."}):(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.noGroupsWithFIlter",defaultMessage:"No groups found. Try changing the search query."})})}):y.items.map(e=>(0,O.jsx)(X,{group:e,workspaceId:t,onDelete:F,onChangeName:async r=>{T({workspaceId:t,groupID:e.id,name:r})},readOnly:a},e.id))]})]}),y&&(0,O.jsx)("div",{className:"text-center",children:(0,O.jsx)(C.t,{length:Math.ceil(y.total/10),currentPage:Math.min(g,Math.ceil(y.total/10)),onChangeIndex:e=>h(e)})})]})]})}function J(e){let{currentWorkspaceId:t}=e,r=(0,w.Z)();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(y(),{children:(0,O.jsx)("title",{children:r.formatMessage(Y.title)})}),(0,O.jsx)(a.yG,{title:r.formatMessage(Y.title),subtitle:(0,O.jsx)(b.Z,{id:"NDDzzF",defaultMessage:"Only workspace admins can edit these settings."})}),(0,O.jsx)(a.hb,{showSpinner:!1,children:(0,O.jsx)($,{workspaceId:t})})]})}function X(e){let{group:t,workspaceId:r,onChangeName:n,onDelete:a,readOnly:l}=e,u=(0,w.Z)(),{value:c}=(0,g.sB)("2091463435"),{0:d,1:p}=(0,j.useState)(!1),{0:f,1:m}=(0,j.useState)("new"===t?"":t.name),{0:x,1:h}=(0,j.useState)(!1),{0:y,1:k}=(0,j.useState)("new"===t),{0:C,1:N}=(0,j.useState)(null),_=(0,j.useRef)(null);(0,j.useEffect)(()=>{("new"===t||y)&&_.current?.focus()},[t,y]);let D=async()=>{if(""===f.trim()){m("new"===t?"":t.name),k(!1),h(!1);return}n&&(h(!0),await n(f)),h(!1),k(!1)};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(P.Z.Row,{onClick:()=>p(e=>!e),className:"hover:bg-token-surface-secondary cursor-pointer",children:[(0,O.jsx)(P.Z.Cell,{children:(0,O.jsx)(M.Z,{checked:d})}),(0,O.jsxs)(P.Z.Cell,{children:["new"===t||y?(0,O.jsx)(Z.Z,{ref:_,name:"newGroupName",value:f,disabled:x,placeholder:u.formatMessage({id:"workspaceSettings.groups.groupNamePlaceholder",defaultMessage:"New group name..."}),onChange:e=>m(e.target.value),onBlur:()=>{f!==("new"===t?"":t.name)&&D()},onPressEnter:D}):t.name,c&&"new"!==t&&t.is_scim_managed&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("span",{className:"flex-grow"}),(0,O.jsx)(s.DirectorySyncResourceManagedIndication,{})]})]}),(0,O.jsx)(P.Z.Cell,{children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.memberCount",defaultMessage:"{count} members",values:{count:"new"===t?"0":t.num_members}})}),(0,O.jsx)(P.Z.Cell,{children:"new"!==t&&t.created_time?(0,O.jsx)(v.Ji,{value:t.created_time,year:"numeric",month:"long",day:"numeric"}):""}),(0,O.jsx)(P.Z.Cell,{textAlign:"right",children:"new"!==t&&!l&&(t.is_scim_managed?(0,O.jsx)(E.Z.Root,{children:(0,O.jsx)(E.Z.Trigger,{disabled:!0,children:(0,O.jsx)(i.u,{sideOffset:0,label:u.formatMessage(o.s.managedViaSCIMTooltip),className:"flex",side:"right",children:(0,O.jsx)(S.nWS,{className:"icon-sm"})})})}):(0,O.jsxs)(E.Z.Root,{children:[(0,O.jsx)(E.Z.Trigger,{className:"-my-2",children:(0,O.jsx)(S.nWS,{className:"icon-sm"})}),(0,O.jsx)(E.Z.Portal,{children:(0,O.jsxs)(E.Z.Content,{children:[(0,O.jsx)(E.Z.Item,{onClick:e=>{k(!0),setTimeout(()=>{_.current?.focus()},120),e.stopPropagation()},children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.changeName",defaultMessage:"Edit name"})}),(0,O.jsx)(E.Z.Item,{onClick:e=>{N(t),e.stopPropagation()},children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.edit",defaultMessage:"Delete group"})})]})})]}))})]}),d&&"new"!==t&&(0,O.jsx)(P.Z.Row,{children:(0,O.jsx)(P.Z.Cell,{colSpan:5,className:"pl-8",children:(0,O.jsx)(L,{group:t,workspaceId:r,readOnly:l})})}),C&&(0,O.jsx)(V,{group:C,onDelete:a,onClose:()=>N(null)})]})}function V(e){let{group:t,onDelete:r,onClose:n}=e,a=(0,w.Z)().formatMessage({id:"workspaceSettings.groups.deleteGroupTitle",defaultMessage:"Delete group {groupName}?"},{groupName:t.name});return(0,O.jsx)(D.Z,{type:"warning",isOpen:!0,onClose:n,title:a,showCloseButton:!0,primaryButton:(0,O.jsx)(k.z,{color:"danger",onClick:async()=>{r(t.id),n()},children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.confirmDelete",defaultMessage:"Delete"})}),secondaryButton:(0,O.jsx)(k.z,{onClick:n,color:"secondary",children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.cancelDelete",defaultMessage:"Cancel"})}),children:(0,O.jsx)("p",{children:(0,O.jsx)(b.Z,{id:"workspaceSettings.groups.deleteGroupWarning",defaultMessage:'Are you sure you want to delete the "{groupName}" group? This action cannot be undone.',values:{groupName:t.name}})})})}let Y=(0,v.vU)({title:{id:"admin.groupsSettings.title",defaultMessage:"Groups"}});function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var et=!0;function er(e){return(0,O.jsx)(J,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}er.getLayout=function(e){return(0,O.jsx)(a.ZP,{mobilePageTitle:"Groups",children:e})}},64854:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(19841),a=r(28146),s=r(651);function o(e){let{className:t,checked:r}=e;return(0,s.jsx)(a.Tg4,{className:(0,n.default)("icon-sm transform transition-transform duration-200",t,r?"rotate-0":"ltr:-rotate-90 rtl:rotate-90")})}},66587:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(98601),a=r(52088),s=r(19841),o=r(651);let i=["className"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){let{className:t}=e,r=(0,a.Z)(e,i);return(0,o.jsx)("textarea",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({className:(0,s.default)("form-textarea w-full rounded-lg border border-token-border-light bg-token-main-surface-secondary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary",t)},r))}},76638:function(e,t,r){"use strict";r.r(t),r.d(t,{DirectorySyncResourceManagedIndication:function(){return l}});var n=r(98601),a=r(62984),s=r(68306),o=r(651);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(){return(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)("div",{className:"flex rounded-md bg-orange-300 px-1 text-center text-white dark:bg-orange-800",children:(0,o.jsx)("span",{className:"text-[0.5em] font-bold leading-4",children:(0,o.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},u.scimIndicatorText))})})})}let u=(0,s.vU)({scimIndicatorText:{id:"workspaceIdentity.directorySyncResourceTagTitle",defaultMessage:"SCIM"}})},42606:function(e,t,r){"use strict";r.d(t,{I:function(){return s},o:function(){return o}});let n=["xlsx","pptx","docx"],a={"application/vnd.google-apps.spreadsheet":"xlsx","application/vnd.google-apps.presentation":"pptx","application/vnd.google-apps.document":"docx"};function s(e){return e?a[e.split(";")[0]]??null:null}function o(e){return e&&n.includes(e)?e:null}},84082:function(e,t,r){"use strict";r.d(t,{$e:function(){return s},EZ:function(){return o},Ql:function(){return a},dO:function(){return n},xC:function(){return i}});let n=10,a=4,s={duration:20,hasCloseButton:!0},o=512,i=536870912},93866:function(e,t,r){"use strict";r.d(t,{AJ:function(){return o},XX:function(){return l},xA:function(){return i}});var n,a,s=r(42606);let o=((n={})[n.None=0]="None",n[n.Multimodal=1]="Multimodal",n[n.Interpreter=2]="Interpreter",n[n.Retrieval=3]="Retrieval",n[n.ContextConnector=4]="ContextConnector",n[n.ProfilePicture=5]="ProfilePicture",n);function i(e){if(e)return{contextConnector:e.context_connector,sourceUrl:e.source_url,syntheticExtension:(0,s.o)(e.synthetic_extension),type:e.type}}let l=((a={}).Uploading="uploading",a.Ready="ready",a)},98628:function(e,t,r){"use strict";r.d(t,{E1:function(){return h},Sj:function(){return j},W7:function(){return f},cT:function(){return g},lU:function(){return x},po:function(){return m},sY:function(){return w}});var n=r(99333),a=r(2721),s=r(92319),o=r(99976),i=r(61619),l=r(68306),u=r(88815),c=r(24740),d=r(66114);let p={duration:20,hasCloseButton:!0};function f(e){return JSON.stringify({file:e.name,modified:e.lastModified,currentTime:new Date().toString()})}function m(e){return new Promise((t,r)=>{let n=new FileReader,a=new Image;n.onload=()=>{a.onload=()=>t(a),a.onerror=e=>r(e),a.src=n.result},n.readAsDataURL(e)})}async function g(e,t,r,l,d,f){let m=u.N.getState().resetRateLimits,g=n.EG.Initial;o.A.logEvent(i.M.uploadFileInitiated,{client:"web",useCase:l.kind,uploadEntry:"local"});let x=f.usesRetrievalIndex?performance.now():void 0;try{let{file_id:s,upload_url:o}=await a.Z.createFile(t.name,t.size,l,!!m);d.onFileCreated(e,s,o),g=n.EG.FileCreated;let i=l.kind===n.Ei.Gizmo?l.gizmoId:void 0,u=f.shouldUpdateProgress??!1,j=f.usesRetrievalIndex??!1,b=await a.Z.uploadFileToAzureStorage(t,o,t=>{u&&d.onFileUploadProgress(e,10+80*t)});if(d.onFileUploadProgress(e,90),201!==b.status&&y(b,s,j),g=n.EG.FileUploaded,await a.Z.processFileUpload(s,{gizmoId:i}),g=n.EG.FileProcessed,f.usesRetrievalIndex){let t=await h(s,i);t?.status===n.Xf.Skipped&&c.m.danger(r.formatMessage(w.retrievalSkippedFile,{fileName:t.name}),p),d.onFileUploaded(e,s,void 0,{fileTokenSize:t.file_size_tokens}),g=n.EG.RetrievalIndexCreated}else d.onFileUploaded(e,s,f.imageDimensions);null!=x&&a.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-x,type:"file"})}catch(a){j(r,t.name,a);let n="NotInstanceOfError";a instanceof s.gK?n=a.name:a instanceof s.Q0?n=`FatalServerError_type_${a.type??"undefined"}`:a instanceof Error?n=a.name:a instanceof s.vq&&(n=a.name),d.onError(e,"error",n,l,g)}}async function x(e,t,r,n,a){let{width:s,height:o}=await m(t);return g(e,t,r,{kind:n},a,{imageDimensions:{width:s,height:o}})}async function h(e,t){let r=Date.now()+6e4,o=e=>new Promise(t=>setTimeout(t,e)),i=0;for(;Date.now()<r;){let r=await a.Z.getRetrievalStatus(e,t);if(r.status===n.Xf.Success||r.status===n.Xf.Skipped)return r;if(r.status===n.Xf.Failed)throw new s.vq("Context extraction failed",r.error_code);i++,await o(Math.min(1e3,100*i))}throw new s.vq("Retrieval indexing timed out")}async function y(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="Unknown error";try{n=await e.data}catch(e){}throw r&&a.Z.markFileUploadFailed(t,{error:n}),new s.vq("File upload to blobstore failed","failed_upload_to_blobstore")}function j(e,t,r){let n=(0,d.kr)(e,"default_upload_error",{fileName:t});r instanceof s.vq&&null!=r.code&&(n=(0,d.kr)(e,r.code)),c.m.danger(n,p)}let w=(0,l.vU)({retrievalSkippedFile:{id:"useFilePickerState.retrievalSkippedFile",defaultMessage:'Unable to extract text from "{fileName}"'}})},66114:function(e,t,r){"use strict";r.d(t,{$H:function(){return x},$p:function(){return N},Ad:function(){return U},B:function(){return T},BV:function(){return P},CO:function(){return _},Iy:function(){return m},KL:function(){return S},L8:function(){return g},O6:function(){return j},Tu:function(){return D},VF:function(){return y},Vm:function(){return E},WI:function(){return F},YN:function(){return b},Z8:function(){return O},Zp:function(){return Z},_0:function(){return k},kr:function(){return h},p0:function(){return C},s1:function(){return v},ww:function(){return w},xs:function(){return M}});var n=r(99333),a=r(16757),s=r(2721),o=r(86025),i=r(58695),l=r(82363),u=r(92379),c=r(75172),d=r(68306),p=r(24740),f=r(93866);function m(e){return e.replace("file-service://","")}function g(e){return"file-service://"+e}function x(e){return e.startsWith("file-service://")}function h(e,t,r){switch(t){case"file_zero_bytes":return e.formatMessage(I.fileZeroBytes,r);case"file_too_large":return e.formatMessage(I.fileTooLarge,r);case"over_user_quota":return e.formatMessage(I.overUserQuota,r);case"file_not_found":case"file_expired":return e.formatMessage(I.fileNotFound,r);case"file_timed_out":return e.formatMessage(I.fileTimedOut,r);case"ace_pod_expired":return e.formatMessage(I.codeInterpreterSessionTimeout,r);case"permission_error":return e.formatMessage(I.permissionError,r);case"default_upload_error":case"file_rejected":return e.formatMessage(I.defaultCreateEntryError,r);case"default_download_link_error":return e.formatMessage(I.defaultDownloadLinkError,r);case"file_empty":return e.formatMessage(I.fileEmpty,r);case"too_many_tokens":return e.formatMessage(I.fileTooManyTokens,r);case"file_encrypted":return e.formatMessage(I.fileEncrypted,r);case"file_corrupted":return e.formatMessage(I.fileCorrupted,r);case"failed_upload_to_blobstore":return e.formatMessage(I.failedUploadToBlobStore,r);default:return e.formatMessage(I.unknownError)}}function y(){let e=(0,c.Z)();return(0,u.useCallback)((t,r)=>h(e,t,r),[e])}function j(){let{session:e}=(0,i.kP)(),{isUnauthenticated:t}=(0,o.u)(),r=(0,c.Z)();return async(a,o)=>{if(!t&&null==e)return p.m.danger(r.formatMessage(I.fileDownloadFailed)),!1;try{let e=await s.Z.getFileDownloadLink(a,void 0,t);if(e.status!==n.KF.Success)throw Error("File is not ready to download: "+JSON.stringify(e));let r=e.download_url,i=document.createElement("a");i.href=r,i.download=o,i.click(),window.open(r,"_blank")}catch(e){return p.m.danger(r.formatMessage(I.fileDownloadFailed)),!1}return!0}}function w(e,t){return t?.kind===a.OL.GizmoInteraction||t?.kind===a.OL.GizmoTest?t.gizmo?.product_features:e?.product_features}function b(e,t){let r=w(e,t);return r?.attachments?.type===n.Cd.CodeInterpreter?f.AJ.Interpreter:r?.attachments?.type===n.Cd.Multimodal?f.AJ.Multimodal:r?.attachments?.type===n.Cd.Retrieval?f.AJ.Retrieval:r?.attachments?.type===n.Cd.ContextConnector?f.AJ.ContextConnector:f.AJ.None}function v(e){return({md:"text/markdown",java:"text/x-java",py:"text/x-script.python",c:"text/x-c",cpp:"text/x-c++",h:"text/x-c++",php:"text/x-php",rb:"text/x-ruby",tex:"application/x-latext",ts:"text/x-typescript",cs:"text/x-csharp"})[e.split(".").pop()?.toLowerCase()??""]||""}function M(e,t,r,n,a){if(null==a)return e;let s=v(t);s&&(r=s),n&&(r=function(e){switch(e){case"application/vnd.google-apps.spreadsheet":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"application/vnd.google-apps.document":case"application/vnd.google-apps.presentation":return"text/plain";default:return e}}(r));let{accepted_mime_types:o,can_accept_all_mime_types:i}=a;return null!=o&&0!==o.length&&i?o.includes(r)?e:f.AJ.Interpreter:e}function k(e,t,r){let a=""!==t?t:v(r),s=e?.product_features?.attachments;return null==s?void 0:s.accepted_mime_types?.includes(a)?s.type:s.image_mime_types?.includes(a)?n.Cd.Multimodal:n.Cd.CodeInterpreter}function Z(e,t){let r=w(e,t);return r?.attachments?.can_accept_all_mime_types?void 0:r?.attachments?.accepted_mime_types}function C(e,t){let{attachments:r}=w(e,t)??{};return r?.image_mime_types?r.image_mime_types:r?.type==="multimodal"?r.accepted_mime_types??S:[]}let S=["image/png","image/jpeg","image/gif","image/webp"];function O(e){return(0,u.useMemo)(()=>{if(void 0===e)return{};let t={"image/jpeg":[".jpg",".jpeg"],"image/svg+xml":[".svg"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]};return{accept:e.reduce((e,r)=>(r in t?e[r]=t[r]:r.includes("/")&&(e[r]=[`.${r.split("/")[1]}`]),e),{})}},[e])}function N(e){return e.split(".").pop()?.toLowerCase()}function _(e){let t=N(e);return null!=t&&["jpg","jpeg","png","gif","webp"].includes(t)}function E(e){let t=N(e);return null!=t&&["xls","xlsx","csv"].includes(t)}function P(e){let t=N(e);return null!=t&&["xls","xlsx"].includes(t)}function D(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fit";return new Promise((n,a)=>{let s=new FileReader;s.onerror=e=>{l.U.addError(Error("File reading has failed:",{cause:e})),a(Error("Failed to read the file."))},s.onload=s=>{let o=new Image;o.onerror=e=>{l.U.addError(Error("Image loading has failed:",{cause:e})),a(Error("Failed to load the image."))},o.onload=()=>{let s=document.createElement("canvas"),i,u=0,c=0;switch(r){case"fill":case"square":i=t/Math.min(o.width,o.height);break;case"fit":i=t/Math.max(o.width,o.height)}let d=o.width*i,p=o.height*i;"square"===r?(s.width=t,s.height=t,u=(t-d)/2,c=(t-p)/2):(s.width=d,s.height=p);let f=s.getContext("2d");if(null==f){l.U.addError("Canvas context creation failed. Your environment might not fully support HTML5 canvas."),a(Error("Failed to create canvas context."));return}f.drawImage(o,u,c,d,p);let m=e.type||"image/png";s.toBlob(t=>{t?n(new File([t],e.name,{type:m})):(l.U.addError("Blob creation failed. Blob is null."),a(Error("Failed to create blob from image data.")))},m)},null==s.target?(l.U.addError("Event target is null. Failed to load image."),a("Failed to load image.")):o.src=s.target.result},s.readAsDataURL(e)})}function F(e,t){return D(e,t,"square")}function T(e){let t=e.name.split("/")??[];return(t[t.length-1]??"").replace(/[-_]/g," ").split(".")[0]}function U(e,t){return t?e.slice(0,-t.length-1):e}let I=(0,d.vU)({defaultCreateEntryError:{id:"fileUpload.defaultCreateEntryError",defaultMessage:"Unable to upload {fileName}"},defaultDownloadLinkError:{id:"fileUpload.defaultDownloadLinkError",defaultMessage:"Failed to get upload status for {fileName}"},unknownError:{id:"fileUpload.unknownError",defaultMessage:"Unknown error occurred"},fileZeroBytes:{id:"fileUpload.fileZeroBytes",defaultMessage:"File is empty"},fileTooLarge:{id:"fileUpload.fileTooLarge",defaultMessage:"File is too large"},overUserQuota:{id:"fileUpload.overUserQuota",defaultMessage:"User quota exceeded"},fileNotFound:{id:"fileUpload.fileNotFound",defaultMessage:"File not found"},fileTimedOut:{id:"fileUpload.fileTimedOut",defaultMessage:"File upload timed out. Please try again."},fileEmpty:{id:"fileUpload.fileEmpty",defaultMessage:"No text could be extracted from this file."},fileTooManyTokens:{id:"fileUpload.fileTooManyTokens",defaultMessage:"This file contains too much text content. Please try again with a smaller file."},fileEncrypted:{id:"fileUpload.fileEncrypted",defaultMessage:"This file is encrypted/requires a password to access. Please try again with an unencrypted file."},fileCorrupted:{id:"fileUpload.fileCorrupted",defaultMessage:"This file is corrupted. Please ensure the file is not corrupted and try again."},codeInterpreterSessionTimeout:{id:"fileUpload.codeInterpreterSessionTimeout",defaultMessage:"Code interpreter session expired"},permissionError:{id:"fileUpload.permissionError",defaultMessage:"Missing permission to access file"},fileDownloadFailed:{id:"filesModal.fileDownloadFailed",defaultMessage:"File download failed. Please try again."},failedUploadToBlobStore:{id:"fileUpload.failedUploadToBlobStore",defaultMessage:"Failed upload to files.oaiusercontent.com. Please ensure your network settings allow access to this site or contact your network administrator."}})},88815:function(e,t,r){"use strict";r.d(t,{J:function(){return a},N:function(){return s}});var n=r(68810);let a={label:"Auto",value:""},s=(0,n.Ue)(()=>({forceParagen:!1,forceParagenModel:a,forceNulligen:!1,forceIndepthFeedback:!1,forceIndepthFeedbackPrompt:"The user has opted in to provide additional feedback on the previous response. Encourage the user to share feedback that you can store in a memory to better meet their needs in future. Use no more than 3 turns. If at any point the user indicates no longer wanting to provide feedback, return to the original topic.",forceRateLimit:!1,resetRateLimits:!1,showDebugConversationTurns:!1,rebaseSystemMessageContent:null}))},68865:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/groups",function(){return r(43062)}])}},function(e){e.O(0,[9237,2342,4198,4089,1133,3718,3088,5696,1612,2349,2745,5162,9113,9725,6803,5011,3666,3127,3662,2888,9774,179],function(){return e(e.s=68865)}),_N_E=e.O()}]);
//# sourceMappingURL=groups-6ea472b378c5020c.js.map