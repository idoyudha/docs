"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[8376],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(a,".").concat(d)]||f[d]||l[d]||c;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20665:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var n=r(665),o=r(40151),c=(r(59496),r(49613)),i=["components"],u={sidebar_position:4},a="\ud83e\uddd1\u200d\ud83d\udd2c \u521b\u5efa\u4f60\u7684\u8fde\u63a5\u5668",s={unversionedId:"docs/recipes/create-your-connector/README",id:"docs/recipes/create-your-connector/README",title:"\ud83e\uddd1\u200d\ud83d\udd2c \u521b\u5efa\u4f60\u7684\u8fde\u63a5\u5668",description:"\u76ee\u524d\uff0cLogto \u5df2\u7ecf\u63d0\u4f9b\u4e86\u8bb8\u591a\u7528\u9014\u5e7f\u6cdb\u7684\u793e\u4ea4\u767b\u5f55\u8fde\u63a5\u5668\uff0c\u8bf8\u5982\u5fae\u4fe1\uff0c\u652f\u4ed8\u5b9d\uff0cGoogle\uff0cFacebook \u7b49\u7b49\uff1b\u4ee5\u53ca\u963f\u91cc\u4e91\uff0cSendGrid\uff0cTwilio \u7b49\u77ed\u4fe1\u6216\u90ae\u4ef6\u8fde\u63a5\u5668\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/create-your-connector/README.md",sourceDirName:"docs/recipes/create-your-connector",slug:"/docs/recipes/create-your-connector/",permalink:"/zh-cn/docs/recipes/create-your-connector/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/create-your-connector/README.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"\u4f7f\u7528\u6761\u6b3e\u548c\u8bed\u8a00",permalink:"/zh-cn/docs/recipes/customize-sie/tou-and-language"},next:{title:"\u8fde\u63a5\u5668\u7684\u6587\u4ef6\u7ed3\u6784",permalink:"/zh-cn/docs/recipes/create-your-connector/connector-file-structure"}},p={},l=[],f={toc:l};function d(e){var t=e.components,u=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"-\u521b\u5efa\u4f60\u7684\u8fde\u63a5\u5668"},"\ud83e\uddd1\u200d\ud83d\udd2c \u521b\u5efa\u4f60\u7684\u8fde\u63a5\u5668"),(0,c.kt)("p",null,"\u76ee\u524d\uff0cLogto \u5df2\u7ecf\u63d0\u4f9b\u4e86\u8bb8\u591a\u7528\u9014\u5e7f\u6cdb\u7684\u793e\u4ea4\u767b\u5f55\u8fde\u63a5\u5668\uff0c\u8bf8\u5982\u5fae\u4fe1\uff0c\u652f\u4ed8\u5b9d\uff0cGoogle\uff0cFacebook \u7b49\u7b49\uff1b\u4ee5\u53ca\u963f\u91cc\u4e91\uff0cSendGrid\uff0cTwilio \u7b49\u77ed\u4fe1\u6216\u90ae\u4ef6\u8fde\u63a5\u5668\u3002"),(0,c.kt)("p",null,"\u4e0b\u9762\u7684\u67b6\u6784\u56fe\u5c55\u793a\u4e86\u8fde\u63a5\u5668\u662f\u5982\u4f55\u548c Logto \u6838\u5fc3\u670d\u52a1\u534f\u540c\u5de5\u4f5c\u7684\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Connector Framework",src:r(55913).Z,width:"3467",height:"2982"})),(0,c.kt)("p",null,"\u4ed6\u4eec\u73b0\u5728\u6765\u770b\u5e94\u8be5\u80fd\u591f\u6ee1\u8db3\u591a\u6570\u7528\u6237\u7684\u9700\u6c42\u4e86\uff0c\u4f46\u662f ",(0,c.kt)("em",{parentName:"p"},"\u6211\u4eec\u8fd8\u4f1a\u9646\u7eed\u63a8\u51fa\u66f4\u591a\u7684\u8fde\u63a5\u5668"),"\u3002\ud83d\udd25"),(0,c.kt)("p",null,"\u5728\u6211\u4eec\u7814\u53d1\u66f4\u591a\u8fde\u63a5\u5668\u7684\u65f6\u5019\uff0c\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u5f00\u53d1\u81ea\u5df1\u7684\u8fde\u63a5\u5668\uff0c\u6211\u4eec\u8fd8\u9f13\u52b1\u4f60\u628a\u81ea\u5df1\u5f00\u53d1\u7684\u8fde\u63a5\u5668\u5206\u4eab\u7ed9\u6574\u4e2a\u793e\u533a\u6765\u4f7f\u7528\u3002"),(0,c.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u642d\u5efa\u4e00\u4e2a\u65b0\u7684\u8fde\u63a5\u5668\uff0c\u4e3a Logto \u9879\u76ee\u8d21\u732e\u4f60\u7684\u529b\u91cf\u5427\uff01\u2615"))}d.isMDXComponent=!0},55913:function(e,t,r){t.Z=r.p+"assets/images/architecture-f41f667c2f4df97d545318303d6ca5bc.png"}}]);