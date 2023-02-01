"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1022],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,h=d["".concat(s,".").concat(f)]||d[f]||l[f]||c;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29602:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var o=r(665),n=r(40151),c=(r(59496),r(49613)),a=["components"],i={},s="Protect your resource with RBAC",p={unversionedId:"docs/recipes/rbac/protect-resource",id:"docs/recipes/rbac/protect-resource",title:"Protect your resource with RBAC",description:"Add scopes to access token",source:"@site/docs/docs/recipes/rbac/protect-resource.md",sourceDirName:"docs/recipes/rbac",slug:"/docs/recipes/rbac/protect-resource",permalink:"/zh-cn/docs/recipes/rbac/protect-resource",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/rbac/protect-resource.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Manage permissions and roles",permalink:"/zh-cn/docs/recipes/rbac/manage-permissions-and-roles"},next:{title:"\ud83e\ude9d Web hooks",permalink:"/zh-cn/docs/recipes/web-hooks/"}},u={},l=[{value:"Add scopes to access token",id:"add-scopes-to-access-token",level:2},{value:"Validate scopes in access token",id:"validate-scopes-in-access-token",level:2}],d={toc:l};function f(e){var t=e.components,r=(0,n.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"protect-your-resource-with-rbac"},"Protect your resource with RBAC"),(0,c.kt)("h2",{id:"add-scopes-to-access-token"},"Add scopes to access token"),(0,c.kt)("p",null,"When integrating with your application, ensure that you include both ",(0,c.kt)("inlineCode",{parentName:"p"},"scope")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"resources")," in the configuration when importing and initializing the LogtoClient."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'scopes = "<your-scope>"\nresources = "<your-resource>"\n')),(0,c.kt)("p",null,"This will ensure that if a user has access to them, they will be added to the access token. The specific parameters and syntax may vary depending on the language and platform of your app. Refer to the ",(0,c.kt)("a",{parentName:"p",href:"/docs/recipes/integrate-logto/"},"application integration guide")," for more information on adding scopes and resources."),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},'In code, the term "scope" is used to align with OIDC standards. However, in the Admin Console, it is referred to as "permission" for better readability and understanding of the real-world scenario. Both terms refer to the same concept.')),(0,c.kt)("h2",{id:"validate-scopes-in-access-token"},"Validate scopes in access token"),(0,c.kt)("p",null,'Don\'t forget to validate the scopes in the access token. To accomplish that, you can utilize a JWT library to decode the token and check the "scope" claim. Logto issues a standard JWT format authorization token for each authorized API request, which could include a "scope" claim that holds a list of the scopes that the token has been issued for. By checking if the required scope is present in the list, you can confirm the validity of the scope. For more information, please refer to the "',(0,c.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/#validate-the-api-requests-authorization-token"},"Validate the API request's authorization token"),'" section.'))}f.isMDXComponent=!0}}]);