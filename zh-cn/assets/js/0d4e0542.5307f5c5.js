"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3773],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=d(r),m=a,u=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63897:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var n=r(665),a=r(40151),o=(r(59496),r(49613)),i=["components"],p={},l=void 0,d={unversionedId:"sdk/JavaScript/browser/types/LogtoConfig",id:"sdk/JavaScript/browser/types/LogtoConfig",title:"LogtoConfig",description:"LogtoConfig: Object",source:"@site/docs/sdk/JavaScript/browser/types/LogtoConfig.md",sourceDirName:"sdk/JavaScript/browser/types",slug:"/sdk/JavaScript/browser/types/LogtoConfig",permalink:"/zh-cn/sdk/JavaScript/browser/types/LogtoConfig",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/JavaScript/browser/types/LogtoConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"LogtoClientErrorCode",permalink:"/zh-cn/sdk/JavaScript/browser/types/LogtoClientErrorCode"},next:{title:"LogtoErrorCode",permalink:"/zh-cn/sdk/JavaScript/browser/types/LogtoErrorCode"}},c={},s=[{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4}],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LogtoConfig"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"appId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"persistAccessToken?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"prompt?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/zh-cn/sdk/JavaScript/browser/enums/Prompt"},(0,o.kt)("inlineCode",{parentName:"a"},"Prompt")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"resources?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"scopes?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"),"[]")))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,"packages/client/lib/index.d.ts:34"))}m.isMDXComponent=!0}}]);