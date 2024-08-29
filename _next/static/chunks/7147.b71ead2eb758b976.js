"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7147],{64854:function(e,t,a){a.d(t,{Z:function(){return o}});var s=a(19841),r=a(11433),l=a(651);function o(e){let{className:t,checked:a}=e;return(0,l.jsx)(r.Tg4,{className:(0,s.default)("icon-sm transform transition-transform duration-200",t,a?"rotate-0":"ltr:-rotate-90 rtl:rotate-90")})}},37147:function(e,t,a){a.r(t),a.d(t,{GizmoActionsEditor:function(){return B}});var s=a(52088),r=a(98601),l=a(99333),o=a(16757),n=a(11550),i=a(59358),c=a(93951),d=a(19841),u=a(89678),p=a.n(u),m=a(65925),h=a.n(m),x=a(92379),f=a(49764),g=a(75325),y=a(47584),j=a(1703),v=a(64854),b=a(6440),N=a(43991),M=a(651);let w=["className","children"];function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach(function(t){(0,r.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var T={Root:function(e){let{className:t,children:a}=e,r=(0,s.Z)(e,w);return(0,M.jsx)(N.fC,k(k({className:t},r),{},{children:a}))}},P=a(11433),O=a(24434);function C(e){let{onSelectExample:t}=e,a=(0,f.Z)(),s=(0,x.useRef)(null);return(0,M.jsxs)("select",{onChange:e=>{"label"!==e.target.value&&(t(V[parseInt(e.target.value)].spec),s.current.value="label")},className:"h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",ref:s,children:[(0,M.jsx)("option",{value:"label",children:a.formatMessage(S.examples)}),V.map((e,t)=>(0,M.jsx)("option",{value:t,children:a.formatMessage(e.displayName)},t))]})}let I=`# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml

openapi: "3.0.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  license:
    name: MIT
servers:
  - url: https://petstore.swagger.io/v1
paths:
  /pets:
    get:
      summary: List all pets
      operationId: listPets
      tags:
        - pets
      parameters:
        - name: limit
          in: query
          description: How many items to return at one time (max 100)
          required: false
          schema:
            type: integer
            maximum: 100
            format: int32
      responses:
        '200':
          description: A paged array of pets
          headers:
            x-next:
              description: A link to the next page of responses
              schema:
                type: string
          content:
            application/json:    
              schema:
                $ref: "#/components/schemas/Pets"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
    post:
      summary: Create a pet
      operationId: createPets
      tags:
        - pets
      responses:
        '201':
          description: Null response
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
  /pets/{petId}:
    get:
      summary: Info for a specific pet
      operationId: showPetById
      tags:
        - pets
      parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pet"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
components:
  schemas:
    Pet:
      type: object
      required:
        - id
        - name
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        tag:
          type: string
    Pets:
      type: array
      maxItems: 100
      items:
        $ref: "#/components/schemas/Pet"
    Error:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string`,S=(0,y.vU)({examples:{id:"gizmo.actions.examples",defaultMessage:"Examples"},weatherExampleTitle:{id:"gizmo.actions.weatherExampleTitle",defaultMessage:"Weather (JSON)"},petStoreExampleTitle:{id:"gizmo.actions.petStoreExampleTitle",defaultMessage:"Pet Store (YAML)"},blankExampleTitle:{id:"gizmo.actions.blankExampleTitle",defaultMessage:"Blank Template"}}),V=[{displayName:S.weatherExampleTitle,spec:JSON.stringify({openapi:"3.1.0",info:{title:"Get weather data",description:"Retrieves current weather data for a location.",version:"v1.0.0"},servers:[{url:"https://weather.example.com"}],paths:{"/location":{get:{description:"Get temperature for a specific location",operationId:"GetCurrentWeather",parameters:[{name:"location",in:"query",description:"The city and state to retrieve the weather for",required:!0,schema:{type:"string"}}],deprecated:!1}}},components:{schemas:{}}},null,2)},{displayName:S.petStoreExampleTitle,spec:I},{displayName:S.blankExampleTitle,spec:JSON.stringify({openapi:"3.1.0",info:{title:"Untitled",description:"Your OpenAPI specification",version:"v1.0.0"},servers:[{url:""}],paths:{},components:{schemas:{}}},null,2)}];var A=a(88301),Z=a(90945),E=a(99555),J=a(71090);function z(e){let{content:t,button:a,onClick:s}=e;return(0,M.jsxs)("div",{className:"flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",onClick:s,children:[(0,M.jsx)("div",{className:"h-9 grow px-3 py-2",children:t}),(0,M.jsx)("div",{className:"w-px bg-token-border-medium"}),a]})}let U=["oauth_client_id","oauth_client_secret"],G=["api_key"];function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach(function(t){(0,r.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function R(e){let{children:t}=e;return(0,M.jsx)("label",{className:"mb-1 block text-sm font-semibold",children:t})}function H(e){let{jitPluginTool:t,onUpdateTool:a,onClose:s}=e,r=(0,f.Z)(),{0:l,1:i}=(0,x.useState)({apiKeyValue:"",oauthClientIdValue:"",oauthClientSecretValue:"",oauthAuthUrlValue:t?.metadata?.auth?.client_url??"",oauthTokenUrlValue:t?.metadata?.auth?.authorization_url??"",oauthScopeValue:t?.metadata?.auth?.scope??"",authTypeValue:t?.metadata?.auth?.type??o.Jv.None,httpAuthTypeValue:t?.metadata?.auth?.authorization_type??"basic",customHeaderValue:t?.metadata?.auth?.custom_auth_header??"",tokenExchangeMethodValue:t?.metadata?.auth?.token_exchange_method??"default_post"});function c(e){i(t=>D(D({},t),e))}return(0,M.jsxs)(O.Z,{type:"success",isOpen:!0,title:r.formatMessage({id:"kZ040s",defaultMessage:"Authentication"}),primaryButton:(0,M.jsx)(n.z,{color:"primary",onClick:()=>{a(l.authTypeValue===o.Jv.None?{type:o.Jv.None}:l.authTypeValue===o.Jv.OAuth?{type:o.Jv.OAuth,client_url:l.oauthAuthUrlValue,authorization_url:l.oauthTokenUrlValue,authorization_content_type:"application/x-www-form-urlencoded",scope:l.oauthScopeValue,token_exchange_method:l.tokenExchangeMethodValue,oauth_client_id:l.oauthClientIdValue,oauth_client_secret:l.oauthClientSecretValue}:{type:o.Jv.ServiceHTTP,authorization_type:l.httpAuthTypeValue,custom_auth_header:l.customHeaderValue,api_key:l.apiKeyValue}),s()},children:(0,M.jsx)(g.Z,{id:"dchvRM",defaultMessage:"Save"})}),secondaryButton:(0,M.jsx)(n.z,{color:"secondary",onClick:s,children:(0,M.jsx)(g.Z,{id:"xHBR5t",defaultMessage:"Cancel"})}),onClose:s,children:[(0,M.jsxs)("div",{className:"mb-4",children:[(0,M.jsx)(g.Z,{id:"la7zPT",defaultMessage:"Authentication Type"}),(0,M.jsxs)(T.Root,{onValueChange:e=>{c({authTypeValue:e})},value:l.authTypeValue,className:"mt-2 flex gap-4",children:[(0,M.jsx)(J.Xb,{label:r.formatMessage({id:"Ml5rNZ",defaultMessage:"None"}),value:o.Jv.None}),(0,M.jsx)(J.Xb,{label:r.formatMessage({id:"rN0uCi",defaultMessage:"API Key"}),value:o.Jv.ServiceHTTP}),(0,M.jsx)(J.Xb,{label:r.formatMessage({id:"qG7Z4O",defaultMessage:"OAuth"}),value:o.Jv.OAuth})]})]}),"service_http"===l.authTypeValue?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(R,{children:(0,M.jsx)(g.Z,{id:"hSd+5k",defaultMessage:"API Key"})}),(0,M.jsx)(A.yt,{placeholder:r.formatMessage({id:"9W9lGr",defaultMessage:"[HIDDEN]"}),type:"password",value:l.apiKeyValue,onChange:e=>{c({apiKeyValue:e.target.value})},className:"mb-2",dir:"ltr"}),(0,M.jsx)(R,{children:(0,M.jsx)(g.Z,{id:"PSnRGf",defaultMessage:"Auth Type"})}),(0,M.jsxs)(T.Root,{className:"mb-2 flex gap-6 overflow-hidden rounded-lg",value:l.httpAuthTypeValue,required:!0,onValueChange:e=>{c({httpAuthTypeValue:e})},children:[(0,M.jsx)(J.Xb,{value:"basic",label:"Basic"}),(0,M.jsx)(J.Xb,{value:"bearer",label:"Bearer"}),(0,M.jsx)(J.Xb,{value:"custom",label:r.formatMessage({id:"6kqx38",defaultMessage:"Custom"})})]}),"custom"===l.httpAuthTypeValue&&(0,M.jsxs)("div",{className:"mt-2",children:[(0,M.jsx)(R,{children:(0,M.jsx)(g.Z,{id:"XqdT/P",defaultMessage:"Custom Header Name"})}),(0,M.jsx)(A.yt,{value:l.customHeaderValue,onChange:e=>{c({customHeaderValue:e.target.value})},className:"mb-2",placeholder:"X-Api-Key",dir:"ltr"})]})]}):"oauth"===l.authTypeValue?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(R,{children:(0,M.jsx)(g.Z,{id:"lS4nvz",defaultMessage:"Client ID"})}),(0,M.jsx)(A.yt,{placeholder:"<HIDDEN>",type:"password",value:l.oauthClientIdValue,onChange:e=>{c({oauthClientIdValue:e.target.value})},className:"mb-2",dir:"ltr"}),(0,M.jsx)(R,{children:(0,M.jsx)(g.Z,{id:"OvwGR3",defaultMessage:"Client Secret"})}),(0,M.jsx)(A.yt,{placeholder:"<HIDDEN>",type:"password",value:l.oauthClientSecretValue,onChange:e=>{c({oauthClientSecretValue:e.target.value})},className:"mb-2",dir:"ltr"}),(0,M.jsx)(R,{children:(0,M.jsx)(g.Z,{id:"I27qZU",defaultMessage:"Authorization URL"})}),(0,M.jsx)(A.yt,{value:l.oauthAuthUrlValue,onChange:e=>{c({oauthAuthUrlValue:e.target.value})},className:"mb-2",dir:"ltr"}),(0,M.jsx)(R,{children:(0,M.jsx)(g.Z,{id:"QywIpF",defaultMessage:"Token URL"})}),(0,M.jsx)(A.yt,{value:l.oauthTokenUrlValue,onChange:e=>{c({oauthTokenUrlValue:e.target.value})},className:"mb-2",dir:"ltr"}),(0,M.jsx)(R,{children:(0,M.jsx)(g.Z,{id:"1VAJqN",defaultMessage:"Scope"})}),(0,M.jsx)(A.yt,{value:l.oauthScopeValue,onChange:e=>{c({oauthScopeValue:e.target.value})},className:"mb-2",dir:"ltr"}),(0,M.jsx)(R,{children:(0,M.jsx)(g.Z,{id:"9MvwPc",defaultMessage:"Token Exchange Method"})}),(0,M.jsxs)(T.Root,{value:l.tokenExchangeMethodValue,required:!0,onValueChange:e=>{c({tokenExchangeMethodValue:e})},children:[(0,M.jsx)(J.Xb,{value:"default_post",label:r.formatMessage({id:"vXIzoE",defaultMessage:"Default (POST request)"})}),(0,M.jsx)(J.Xb,{value:"basic_auth_header",label:r.formatMessage({id:"38o+yX",defaultMessage:"Basic authorization header"})})]})]}):null]})}function L(e){let{onImport:t,onClose:a}=e,{0:s,1:r}=(0,x.useState)(""),{0:l,1:o}=(0,x.useState)(!1);async function n(){let e;try{e=new URL(s)}catch{return}if(e?.hostname){o(!0);try{let e=await E.U.fetchOpenAPISpec(s);t(e.content),a()}finally{o(!1)}}}return(0,M.jsxs)("div",{className:"flex items-center gap-2",children:[(0,M.jsx)("input",{name:"url",value:s,onChange:e=>{r(e.target.value)},placeholder:"https://...",className:"h-8 rounded border border-token-border-light px-2 text-sm",autoFocus:!0,dir:"ltr"}),(0,M.jsx)(J.cY,{color:"primary",size:"small",loading:l,onClick:n,children:(0,M.jsx)(g.Z,{id:"7sLuEB",defaultMessage:"Import"})}),(0,M.jsx)(J.cY,{color:"secondary",size:"small",onClick:a,children:(0,M.jsx)(g.Z,{id:"xHBR5t",defaultMessage:"Cancel"})})]})}function K(e){let{rootDomain:t,operations:a}=e;return null==a||0===a.length?(0,M.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,M.jsx)(g.Z,{id:"L69u6d",defaultMessage:"Operations in your schema will show here"})}):(0,M.jsx)("table",{className:"w-full text-sm",children:(0,M.jsxs)("tbody",{children:[(0,M.jsxs)("tr",{className:"border-b border-token-border-light text-left text-xs text-token-text-tertiary",children:[(0,M.jsx)("th",{className:"py-1 font-normal",children:(0,M.jsx)(g.Z,{id:"JizDcr",defaultMessage:"Name"})}),(0,M.jsx)("th",{className:"py-1 font-normal",children:(0,M.jsx)(g.Z,{id:"zN16fd",defaultMessage:"Method"})}),(0,M.jsx)("th",{className:"py-1 font-normal",children:(0,M.jsx)(g.Z,{id:"y2WJvt",defaultMessage:"Path"})}),(0,M.jsx)("th",{className:"py-1 font-normal"})]}),a.map(e=>(0,M.jsxs)("tr",{className:"border-b border-token-border-light",children:[(0,M.jsx)("td",{className:"py-2",children:e.operationName}),(0,M.jsx)("td",{className:"py-2 uppercase",children:e.method}),(0,M.jsx)("td",{className:"py-2",dir:"ltr",style:{textAlign:"match-parent"},children:e.path}),(0,M.jsx)("td",{className:"py-2",children:(0,M.jsx)(J.cY,{color:"secondary",onClick:()=>{t&&Z.gP.publish({kind:Z.f7.TestGizmoAction,rootDomain:t,operationName:e.operationName})},children:(0,M.jsx)(g.Z,{id:"Ag71GQ",defaultMessage:"Test"})})})]},e.operationName))]})})}function X(e){let{validationResponse:t}=e,a=(0,f.Z)();return(0,M.jsxs)("div",{children:[(0,M.jsx)(A.lX,{label:a.formatMessage({id:"hKfo5R",defaultMessage:"Available actions"})}),(0,M.jsx)(K,{rootDomain:t.success?t.spec.root_domain:void 0,operations:t.success?t.spec.operations:void 0})]})}function B(e){let{currentlyEditingActionDomain:t,gizmoEditorData:a,updateGizmo:r,onClose:u}=e,m=(0,f.Z)(),{0:N,1:w}=(0,x.useState)(t),_=(0,x.useRef)(N),k=(0,c.t)(),{data:T}=(0,i.C)(k?.getWorkspaceId());(0,x.useEffect)(()=>{_.current=N},[N]);let O=a?.tools?.find(e=>e.type===l.qK.JIT_PLUGIN&&e.metadata.domain===N),{0:I}=(0,x.useState)(()=>null==O),S=O?.metadata?.raw_spec??"",{0:V,1:Z}=(0,x.useState)(!1),{0:q,1:R}=(0,x.useState)(!1),{0:K,1:B}=(0,x.useState)(!1);function W(e){r(t=>D(D({},t),{},{tools:O?t.tools.map(t=>t.type===l.qK.JIT_PLUGIN&&t.metadata.domain===N?D(D({},t),{},{metadata:D(D(D({},t.metadata),e),{},{json_schema:void 0})}):t):[...t.tools,{type:l.qK.JIT_PLUGIN,metadata:D(D({raw_spec:"",domain:N??"Unknown domain",action_id:""},e),{},{json_schema:void 0})}]}))}let{0:Y,1:$}=(0,x.useState)(),{0:F}=(0,x.useState)(()=>p()(async function(e){let t=await E.U.validateOpenAPISpec(e);$(t);let s=t.success?t.spec.root_domain:void 0;if(s){if(s!==_.current&&a?.tools?.find(e=>e.type===l.qK.JIT_PLUGIN&&e.metadata.domain===s)){$({success:!1,errors:[m.formatMessage({id:"nwBcmJ",defaultMessage:"Action sets cannot have duplicate domains - {domain} already exists on another action"},{domain:s})]});return}r(e=>D(D({},e),{},{tools:e.tools.map(e=>e.type===l.qK.JIT_PLUGIN&&e.metadata.domain===_.current?D(D({},e),{},{metadata:D(D({},e.metadata),{},{domain:s})}):e)})),w(s)}if(t.success&&t.known_auth&&t.known_privacy_policy&&O){let e=D({type:o.Jv.OAuth},t.known_auth);h()(O.metadata.auth,e)||W({auth:D({type:o.Jv.OAuth},t.known_auth)}),O.metadata.privacy_policy_url!==t.known_privacy_policy&&W({privacy_policy_url:t.known_privacy_policy})}},1e3)),Q=null!=Y?Y.success?Y.warnings:Y.errors:void 0;(0,x.useEffect)(()=>{""===S?($(void 0),F.cancel()):F(S)},[F,S]);let ee=e=>{try{W({raw_spec:JSON.stringify(JSON.parse(e),null,2)})}catch{try{W({raw_spec:j.default.stringify(j.default.parse(e),{lineWidth:120,indent:2})})}catch{}}};return(0,M.jsxs)("div",{className:"h-full overflow-auto px-4 pb-12 text-sm",children:[(0,M.jsxs)("div",{className:"relative flex flex-col items-center px-16 py-6 text-center",children:[(0,M.jsx)("div",{className:"absolute left-0 top-6",children:(0,M.jsx)(n.z,{color:"secondary",onClick:u,icon:P.DUf})}),null!=O&&(0,M.jsx)("div",{className:"absolute right-0 top-6",children:(0,M.jsx)(n.z,{color:"secondary",onClick:()=>{window.confirm("Are you sure you want to delete this action?")&&(r(e=>D(D({},e),{},{tools:e.tools.filter(e=>e.type!==l.qK.JIT_PLUGIN||e.metadata.domain!==N)})),u())},className:"text-red-500",children:(0,M.jsx)(P.XHJ,{className:"icon-md"})})}),(0,M.jsx)("div",{className:"text-xl font-semibold",children:I?(0,M.jsx)(g.Z,{id:"LEn2vt",defaultMessage:"Add actions"}):(0,M.jsx)(g.Z,{id:"WtVYgh",defaultMessage:"Edit actions"})}),(0,M.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,M.jsx)(g.Z,{id:"f0WG0Q",defaultMessage:"Let your GPT retrieve information or take actions outside of ChatGPT."})}),(0,M.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,M.jsx)("a",{href:"https://help.openai.com/en/articles/8554397-creating-a-gpt",target:"_blank",rel:"noreferrer",className:"font-semibold",children:(0,M.jsx)(g.Z,{id:"44M7/B",defaultMessage:"Learn more."})})})]}),(0,M.jsxs)(A.hj,{className:"relative",children:[(0,M.jsx)(A.lX,{label:m.formatMessage({id:"kZ040s",defaultMessage:"Authentication"})}),(0,M.jsx)(z,{onClick:()=>{Z(!0)},content:m.formatMessage(function(e){switch(e){case o.Jv.None:return(0,y.Em)({id:"G9qfIC",defaultMessage:"None"});case o.Jv.OAuth:return(0,y.Em)({id:"t8MwwT",defaultMessage:"OAuth"});case o.Jv.ServiceHTTP:return(0,y.Em)({id:"rN0uCi",defaultMessage:"API Key"})}}(O?.metadata?.auth?.type??o.Jv.None)),button:(0,M.jsx)("button",{color:"secondary",className:"flex items-center gap-2 px-3",children:(0,M.jsx)(P.SWE,{className:"icon-sm"})})}),V&&(0,M.jsx)(H,{jitPluginTool:O,onUpdateTool:e=>{switch(e.type){case o.Jv.None:W({auth:{type:o.Jv.None}});break;case o.Jv.OAuth:{let{oauth_client_id:t,oauth_client_secret:a}=e;W({auth:(0,s.Z)(e,U),oauth_client_id:t,oauth_client_secret:a});break}case o.Jv.ServiceHTTP:{let{api_key:t}=e;W({auth:(0,s.Z)(e,G),api_key:t})}}},onClose:()=>{Z(!1)}})]}),(0,M.jsxs)("div",{children:[(0,M.jsxs)("div",{className:"mb-1 flex h-8 items-center justify-between",children:[(0,M.jsx)("label",{className:"font-semibold text-token-text-primary",children:(0,M.jsx)(g.Z,{id:"+xKwQg",defaultMessage:"Schema"})}),(0,M.jsx)("div",{className:"flex items-center",children:q?(0,M.jsx)(L,{onImport:e=>{ee(e)},onClose:()=>{R(!1)}}):(0,M.jsxs)("div",{className:"flex items-center gap-2",children:[(0,M.jsx)(J.cY,{color:"secondary",size:"small",onClick:()=>{R(!0)},children:(0,M.jsx)(g.Z,{id:"kTR+Ef",defaultMessage:"Import from URL"})}),(0,M.jsx)(C,{onSelectExample:e=>{W({raw_spec:e})}})]})})]}),(0,M.jsxs)("div",{className:"mb-8 overflow-hidden rounded-lg border border-token-border-light",children:[(0,M.jsxs)("div",{className:"relative",children:[(0,M.jsx)("textarea",{value:S,onChange:e=>{W({raw_spec:e.target.value})},spellCheck:!1,placeholder:m.formatMessage({id:"zBM3o0",defaultMessage:"Enter your OpenAPI schema here"}),className:"block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",dir:"ltr"}),(0,M.jsx)("div",{className:"absolute bottom-2 right-2 flex gap-2",children:""!==S?(0,M.jsx)(J.cY,{onClick:()=>{ee(S)},children:(0,M.jsx)(g.Z,{id:"vJWnIM",defaultMessage:"Format"})}):(0,M.jsxs)(J.cY,{as:"a",to:"https://chatgpt.com/g/g-TYEliDU6A-actionsgpt",openNewTab:!0,size:"small",children:[(0,M.jsx)(g.Z,{id:"gizmo.actions.actionsGptHelp",defaultMessage:"Get help from ActionsGPT"}),(0,M.jsx)(P.Pfi,{className:"icon-md"})]})})]}),null!=Q&&Q?.length>0&&(0,M.jsx)("div",{className:"border-t border-token-border-light p-2 text-red-500",children:Q.map((e,t)=>(0,M.jsx)("div",{children:e},t))})]})]}),null!=Y&&(0,M.jsx)(X,{validationResponse:Y}),T?.allowed_custom_actions_domains!=null&&(T?.allowed_custom_actions_domains.length>0?(0,M.jsxs)("div",{className:"mt-4",children:[(0,M.jsxs)("p",{className:"mb-1 cursor-pointer font-semibold",onClick:()=>B(!K),children:[(0,M.jsx)(g.Z,{id:"Gcxir6",defaultMessage:"Domains allowed by your workspace"}),(0,M.jsx)(v.Z,{className:"inline",checked:K})]}),(0,M.jsx)("ul",{className:(0,d.default)("list-disc ps-4",!K&&"hidden"),children:T?.allowed_custom_actions_domains.map(e=>M.jsx("li",{children:e},e))})]}):(0,M.jsx)("p",{className:"text-sm italic",children:(0,M.jsx)(g.Z,{id:"wWCl0j",defaultMessage:"No domains are allowed by your workspace's settings."})})),(0,M.jsxs)("div",{className:"mt-4",children:[(0,M.jsx)(A.lX,{label:m.formatMessage({id:"Pbk0Gp",defaultMessage:"Privacy policy"}),description:"Privacy policy is required for all public GPTs."}),(0,M.jsx)(b.Z,{name:"privacyPolicyUrl",value:O?.metadata?.privacy_policy_url??"",placeholder:"https://app.example.com/privacy",onChange:e=>{W({privacy_policy_url:e.target.value})}})]})]})}}}]);
//# sourceMappingURL=7147.b71ead2eb758b976.js.map