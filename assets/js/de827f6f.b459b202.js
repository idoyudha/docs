"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6187],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8897:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return v}});var r=n(5443),o=n(3010),a=(n(9496),n(9613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You need to have an Access Token that satisfies the following criteria:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"It's a valid token"),(0,a.kt)("li",null,"It's issued by your Logto instance"),(0,a.kt)("li",null,"Its audience (`aud`, i.e. the API identifier) points to ",(0,a.kt)("code",null,"https://api.logto.io"),"."),n.children&&(0,a.kt)("li",null,n.children)))}c.isMDXComponent=!0;var p=["components"],d={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Put that token in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," field of HTTP headers with Bearer format (",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer YOUR_TOKEN"),"), and you are good to go."))}s.isMDXComponent=!0;var u=["components"],m={},k="\ud83e\uddf1 Core Service",h={unversionedId:"docs/references/core/README",id:"docs/references/core/README",title:"\ud83e\uddf1 Core Service",description:"Introduction",source:"@site/docs/docs/references/core/README.mdx",sourceDirName:"docs/references/core",slug:"/docs/references/core/",permalink:"/docs/references/core/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/core/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udd0c Connectors",permalink:"/docs/references/connectors/"},next:{title:"Configuration",permalink:"/docs/references/core/configuration"}},f={},v=[{value:"Introduction",id:"introduction",level:2},{value:"OIDC Provider",id:"oidc-provider",level:2},{value:"Enabled OpenID features",id:"enabled-openid-features",level:3},{value:"Management API",id:"management-api",level:2},{value:"Authentication",id:"authentication",level:3},{value:"User API",id:"user-api",level:2},{value:"Authentication",id:"authentication-1",level:3},{value:"Frontend proxies",id:"frontend-proxies",level:2}],g={toc:v};function y(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-core-service"},"\ud83e\uddf1 Core Service"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Core Service")," is a monolith service for critical Logto duties. The source code is in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/master/packages/core"},(0,a.kt)("inlineCode",{parentName:"a"},"/packages/core")),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("em",{parentName:"p"},"Core Service")," and ",(0,a.kt)("em",{parentName:"p"},"SDK core")," are two separate concepts. See ",(0,a.kt)("a",{parentName:"p",href:"#"},"SDK core")," for the differences."))),(0,a.kt)("p",null,"To simplify, we divide Core Service into four major modules:"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"Mount Path"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"OIDC Provider"),(0,a.kt)("td",null,"An"," ",(0,a.kt)("a",{href:"https://openid.net/specs/openid-connect-core-1_0.html",target:"_blank",rel:"noreferrer"},"OpenID Provider"),"."),(0,a.kt)("td",null,(0,a.kt)("code",null,"/oidc"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Management API"),(0,a.kt)("td",null,"APIs for managing Logto. The admin role is required."),(0,a.kt)("td",null,(0,a.kt)("code",null,"/api"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"User API"),(0,a.kt)("td",null,"APIs for the currently signed-in user."),(0,a.kt)("td",null,(0,a.kt)("code",null,"/api/me"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Frontend proxies"),(0,a.kt)("td",null,"HTTP proxies or static file serving for frontend projects."),(0,a.kt)("td",null,"See ",(0,a.kt)("a",{href:"#"},"Frontend proxies")," for details.")))),(0,a.kt)("p",null,"Backend APIs, including OIDC, are built within the ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," package, while frontend proxies depend on the corresponding sibling packages in the Logto monorepo."),(0,a.kt)("h2",{id:"oidc-provider"},"OIDC Provider"),(0,a.kt)("p",null,"Logto uses the amazing certified ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect")," implementation ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/panva/node-oidc-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"node-oidc-provider"))," under the hood. The provider is mounted at ",(0,a.kt)("inlineCode",{parentName:"p"},"/oidc"),", and you can check relative configurations and files in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/master/packages/core/src/oidc"},(0,a.kt)("inlineCode",{parentName:"a"},"packages/core/src/oidc")),"."),(0,a.kt)("h3",{id:"enabled-openid-features"},"Enabled OpenID features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html"},"OpenID Connect Core"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"},"UserInfo Endpoint")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html"},"OpenID Connect Discovery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html"},"OpenID Connect RP-Initiated Logout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc7009.html"},"OAuth 2.0 Token Revocation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc8707.html"},"OAuth 2.0 Resource Indicators"))),(0,a.kt)("h2",{id:"management-api"},"Management API"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Management API")," is a set of APIs that manage and update Logto data. Only users with the ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," role have access to them."),(0,a.kt)("p",null,"It's mounted at ",(0,a.kt)("inlineCode",{parentName:"p"},"/api")," (except ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/me"),"). Head to ",(0,a.kt)("a",{parentName:"p",href:"/api"},"API Reference")," to see the details in your browser, or use ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/swagger.json")," for a Swagger result in JSON."),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Admin Console heavily depends on these APIs, while you can also call them manually."),(0,a.kt)(c,{mdxType:"BasicTokenRequirements"},"Its ",(0,a.kt)("code",null,"role_names")," array includes ",(0,a.kt)("code",null,'"admin"'),"."),(0,a.kt)(s,{mdxType:"BearerAuth"}),(0,a.kt)("h2",{id:"user-api"},"User API"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"User API")," is a set of APIs that fetch and update data of the currently signed-in user. It's mounted at ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/me"),"."),(0,a.kt)("h3",{id:"authentication-1"},"Authentication"),(0,a.kt)(c,{mdxType:"BasicTokenRequirements"}),(0,a.kt)(s,{mdxType:"BearerAuth"}),(0,a.kt)("h2",{id:"frontend-proxies"},"Frontend proxies"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"frontend proxy")," is a middleware function that serves a frontend project in an environment-related way:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If it's development, it proxies HTTP requests to the frontend dev server."),(0,a.kt)("li",{parentName:"ul"},"If it's production, it serves static frontend files directly.")),(0,a.kt)("p",null,"Logto has three frontend proxies:"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"Frontend Package"),(0,a.kt)("td",null,"Mount Path"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Admin Console proxy"),(0,a.kt)("td",null,(0,a.kt)("code",null,"/packages/console")),(0,a.kt)("td",null,(0,a.kt)("code",null,"/console"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Demo app proxy"),(0,a.kt)("td",null,(0,a.kt)("code",null,"/packages/demo-app")),(0,a.kt)("td",null,(0,a.kt)("code",null,"/demo-app"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"UI (sign-in experience) proxy"),(0,a.kt)("td",null,(0,a.kt)("code",null,"/packages/ui")),(0,a.kt)("td",null,(0,a.kt)("code",null,"/"))))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You may notice that the UI proxy uses the root path. Unlike other proxies, the UI proxy is a fallback proxy which means it only takes effect when no other proxy is matched."))))}y.isMDXComponent=!0}}]);