"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3421],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1321:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=r(5443),o=r(3010),a=(r(9496),r(9613)),i=["components"],s={toc:[]};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,"Property Name")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Property Description")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Required")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API Name"),(0,a.kt)("td",null,"A user friendly name that can help you to identify the API resource."),(0,a.kt)("td",null,"true")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"API Identifier"),(0,a.kt)("td",null,"The unique ",(0,a.kt)("a",{href:"https://www.rfc-editor.org/rfc/rfc8707.html"},"API Resource Indicator")," ","value, with restrictions listed above.",(0,a.kt)("br",null),"Logto will use it to identify the requested API resource and grant the authorization tokens accordingly."),(0,a.kt)("td",null,"true")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Token expiration time ",(0,a.kt)("i",null,"(in seconds)")),(0,a.kt)("td",null,"The expiration time set for ",(0,a.kt)("strong",null,"access_token"),". The default expiration value is"," ",(0,a.kt)("strong",null,"86400"),"."),(0,a.kt)("td",null,"false")))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Requests with a expired ",(0,a.kt)("strong",null,"access_token")," should be restricted.\nThis is implemented to protect your API from a abused token.\nThe larger value is set, the longer will a issued ",(0,a.kt)("strong",null,"access_token")," survive, and the more vulnerable your API will be."))))}c.isMDXComponent=!0;var l=["components"],u={},d="\ud83d\udcc1 API Resource",p={unversionedId:"docs/references/resources/README",id:"docs/references/resources/README",title:"\ud83d\udcc1 API Resource",description:"Introduction",source:"@site/docs/docs/references/resources/README.md",sourceDirName:"docs/references/resources",slug:"/docs/references/resources/",permalink:"/docs/references/resources/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/resources/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docs/references/core/configuration"},next:{title:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users",permalink:"/docs/references/users/"}},h={},m=[{value:"Introduction",id:"introduction",level:2},{value:"What is an API resource?",id:"what-is-an-api-resource",level:3},{value:"Why is API resource needed?",id:"why-is-api-resource-needed",level:3},{value:"Definitions",id:"definitions",level:2},{value:"Resource Indicator",id:"resource-indicator",level:3},{value:"Logto API Resource Schema",id:"logto-api-resource-schema",level:3},{value:"How does it work",id:"how-does-it-work",level:2},{value:"1. Authorization request",id:"1-authorization-request",level:3},{value:"2. Access Token request",id:"2-access-token-request",level:3},{value:"3. API resource request",id:"3-api-resource-request",level:3}],k={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-api-resource"},"\ud83d\udcc1 API Resource"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"what-is-an-api-resource"},"What is an API resource?"),(0,a.kt)("p",null,"API resources, a.k.a. ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8707.html"},"Resource Indicators"),", indicate the target services or resources to be requested. Usually in a URI format variable, representing the resource's identity."),(0,a.kt)("h3",{id:"why-is-api-resource-needed"},"Why is API resource needed?"),(0,a.kt)("p",null,"Logto, as an authorization server, is designed to serve a large number of diverse resources and APIs. By indicating which API resource an end-user intends to request, Logto will be able to determine the type and content of authorization tokens to be issued, how tokens are encrypted, and apply audience restrictions accordingly."),(0,a.kt)("p",null,"A guarded request with an authorization token provided will help you protect your private resources from being accessed and attacked by anonymous identities."),(0,a.kt)("h2",{id:"definitions"},"Definitions"),(0,a.kt)("h3",{id:"resource-indicator"},"Resource Indicator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A resource value indicates the target service or resource to which access is being requested."),(0,a.kt)("li",{parentName:"ul"},"Its value ",(0,a.kt)("strong",{parentName:"li"},"MUST")," be an absolute URI."),(0,a.kt)("li",{parentName:"ul"},"The URI ",(0,a.kt)("strong",{parentName:"li"},"MUST NOT")," include a fragment component."),(0,a.kt)("li",{parentName:"ul"},"It ",(0,a.kt)("strong",{parentName:"li"},"SHOULD NOT")," include a query component."),(0,a.kt)("li",{parentName:"ul"},"You ",(0,a.kt)("strong",{parentName:"li"},"SHOULD")," provide the most specific URI it can for the complete API or set of resources it intends to access. (In practice, a client will know a base URI for the application or resource that it interacts with, which is appropriate to use as the value of the resource parameter.)")),(0,a.kt)("p",null,"i.e., Logto management API base URI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://api.logto.io\n")),(0,a.kt)("p",null,"By default, this API resource is pre-registered. All the management APIs under this URI are protected by Logto server."),(0,a.kt)("h3",{id:"logto-api-resource-schema"},"Logto API Resource Schema"),(0,a.kt)(c,{mdxType:"APIResourceSchema"}),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,a.kt)("h3",{id:"1-authorization-request"},"1. Authorization request"),(0,a.kt)("p",null,"When the resource parameter is used in an authorization request to the authorization endpoint, it indicates the identity of the protected resource(s) to which access is being requested."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GET https://logto.dev/oidc/auth?response_type=code\n    &client_id=s6BhdRkqt3\n    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI\n    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fapplications\n    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fusers\n")),(0,a.kt)("p",null,"Logto will validate and process these resource indicators and grant the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization_code"),"."),(0,a.kt)("h3",{id:"2-access-token-request"},"2. Access Token request"),(0,a.kt)("p",null,"When the resource parameter is used on an access token request made to the token endpoint, it indicates the target service or protected resource where the client intends to use the requested access token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"POST https://logto.dev/oidc/token HTTP/1.1\n\n    grant_type=authorization_code\n    redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ\n    resource=https%3A%2F%2Flogto.test.dev%2Fusers\n")),(0,a.kt)("p",null,"An access token with the audience restricted to the requested resource will be granted by Logto."),(0,a.kt)("h3",{id:"3-api-resource-request"},"3. API resource request"),(0,a.kt)("p",null,"Client request for the API resource with ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," provided as Authorization header. Audience info and token expiration time are encoded in the encrypted ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GET https://logto.dev/api/users\n\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek\n\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please follow our ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},(0,a.kt)("strong",{parentName:"a"},"Protect Your API"))," guide to implement the token validation on your server-side APIs and make your resources well protected."))),(0,a.kt)("p",null,"Logto follows the standard token-based authorization protocol to protect your API resources. To learn more about OAuth 2.0, please refer to OAuth 2.0's ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1"},"official document"),"."))}f.isMDXComponent=!0}}]);