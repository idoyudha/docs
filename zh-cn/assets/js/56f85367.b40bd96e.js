"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6402],{49613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(n),k=a,s=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(s,i(i({ref:e},u),{},{components:n})):r.createElement(s,i({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44737:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var r=n(665),a=n(40151),l=(n(59496),n(49613)),i=["components"],o={},p="\u914d\u7f6e",d={unversionedId:"docs/references/core/configuration",id:"docs/references/core/configuration",title:"\u914d\u7f6e",description:"\u7528\u6cd5",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/references/core/configuration.md",sourceDirName:"docs/references/core",slug:"/docs/references/core/configuration",permalink:"/zh-cn/docs/references/core/configuration",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/references/core/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83e\uddf1 \u6838\u5fc3\u670d\u52a1",permalink:"/zh-cn/docs/references/core/"},next:{title:"\ud83d\udcc1 API \u8d44\u6e90",permalink:"/zh-cn/docs/references/resources/"}},u={},m=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u521d\u6b21\u8bbe\u7f6e\u7684\u95ee\u9898",id:"questions",level:2},{value:"\u53d8\u91cf\u5217\u8868",id:"\u53d8\u91cf\u5217\u8868",level:2},{value:"\u901a\u7528",id:"\u901a\u7528",level:3},{value:"OIDC",id:"oidc",level:3},{value:"\u652f\u6301\u7684 private key \u7c7b\u578b",id:"\u652f\u6301\u7684-private-key-\u7c7b\u578b",level:4},{value:"\u542f\u7528 HTTPS",id:"\u542f\u7528-https",level:2},{value:"\u4f7f\u7528 Node",id:"\u4f7f\u7528-node",level:3},{value:"\u4f7f\u7528 HTTPS \u4ee3\u7406",id:"\u4f7f\u7528-https-\u4ee3\u7406",level:3}],c={toc:m};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,l.kt)("p",null,"Logto \u6309\u5982\u4e0b\u987a\u5e8f\u5904\u7406\u73af\u5883\u53d8\u91cf (environment variables)\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7b26\u5408 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/motdotla/dotenv#readme"},"dotenv")," \u683c\u5f0f\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},".env")," \u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u73af\u5883\u53d8\u91cf")),(0,l.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4f1a\u8986\u76d6 ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," \u5df2\u5b58\u5728\u7684\u503c\u3002"),(0,l.kt)("h2",{id:"questions"},"\u521d\u6b21\u8bbe\u7f6e\u7684\u95ee\u9898"),(0,l.kt)("p",null,"\u5f53\u4f60\u7b2c\u4e00\u6b21\u5728\u6ca1\u6709\u73af\u5883\u53d8\u91cf\u7684\u60c5\u51b5\u4e0b\u542f\u52a8 Logto \u65f6\uff0c\u9664\u975e\u5728 arguments \u91cc\u6307\u5b9a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-inquiry"),"\uff0c\u5426\u5219 Logto \u5c06\u4f1a\u95ee\u4f60\u51e0\u4e2a\u7b80\u5355\u7684\u95ee\u9898\u6ee1\u8db3\u6700\u5c0f\u7684\u8fd0\u884c\u9700\u6c42\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f60\u662f\u5426\u60f3\u4e3a OIDC provider \u81ea\u52a8\u751f\u6210\u4e00\u4e2a cookie key \u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},"\u4f60\u662f\u5426\u60f3\u4e3a OIDC provider \u81ea\u52a8\u751f\u6210\u4e00\u4e2a private key"),(0,l.kt)("li",{parentName:"ul"},"\u4f60\u662f\u5426\u60f3\u8bbe\u7f6e\u4e00\u4e2a\u5168\u65b0\u7684 Logto \u6570\u636e\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165 ",(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6"},"Postgres DSN"))),(0,l.kt)("p",null,"\u5927\u591a\u6570\u90fd\u662f\u7b80\u5355\u7684 yes/no \u95ee\u9898\uff0c\u9664\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6"},"Postgres DSN"),"\uff0c\u4f60\u90fd\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u9ed8\u8ba4\u9009\u9879\u3002"),(0,l.kt)("p",null,"\u4e3a OIDC provider \u751f\u6210\u7684 private key \u5c06\u4f1a\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"./oidc-private-key.pem"),"\uff0c\u5176\u4ed6\u7684\u503c\u5c06\u4f1a\u8ffd\u52a0\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"./.env")," \u91cc\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5728 Docker \u955c\u50cf\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-inquiry")," argument \u662f\u9ed8\u8ba4\u6307\u5b9a\u7684\u3002")),(0,l.kt)("h2",{id:"\u53d8\u91cf\u5217\u8868"},"\u53d8\u91cf\u5217\u8868"),(0,l.kt)("h3",{id:"\u901a\u7528"},"\u901a\u7528"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm start")," \u5728\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c Logto\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u5c06\u6c38\u8fdc\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"production"),"\u3002")),(0,l.kt)("p",null,"\u5728\u9ed8\u8ba4\u503c\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"protocol")," \u5c06\u4f1a\u6839\u636e\u4f60\u7684 HTTPS \u914d\u7f6e\u53d6\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"http")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"https"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NODE_ENV"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"'production' ","|"," 'test' ","|"," undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"Logto \u8fd0\u884c\u5728\u4ec0\u4e48\u6837\u7684\u73af\u5883\u91cc\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PORT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3001")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Logto \u76d1\u542c\u7684\u672c\u5730\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Logto \u6570\u636e\u5e93\u7684 ",(0,l.kt)("a",{parentName:"td",href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6"},"Postgres DSN"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HTTPS_CERT_PATH"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"#%E5%90%AF%E7%94%A8-https"},"\u542f\u7528 HTTPS"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HTTPS_KEY_PATH"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TRUST_PROXY_HEADER"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENDPOINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'protocol://localhost:$PORT'")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u5e26\u6709\u81ea\u5b9a\u4e49\u57df\u540d\u7684\u6307\u5411 Logto \u7684 URL\uff0c\u7528\u4e8e\u5728\u7ebf\u6d4b\u8bd5\u6216\u751f\u4ea7\u73af\u5883\u3002\u8fd9\u4e5f\u4f1a\u5f71\u54cd\u5230 ",(0,l.kt)("a",{parentName:"td",href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier"},"OIDC issuer identifier")," \u548c\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300dRedirect URIs \u7684\u503c\u3002")))),(0,l.kt)("h3",{id:"oidc"},"OIDC"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OIDC_COOKIE_KEYS"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys"},"Signing cookie keys")," \u7684\u5b57\u7b26\u4e32\u6570\u7ec4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OIDC_PRIVATE_KEY"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://openid.net/specs/openid-connect-core-1_0.html#Signing"},"OIDC JWT \u7b7e\u540d")," \u7684 private key \u5185\u5bb9\u3002",(0,l.kt)("br",null)," \u5982\u679c\u4f60\u60f3\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},".env")," \u4e2d\u8bbe\u7f6e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/motdotla/dotenv#multiline-values"},"\u591a\u884c\u503c")," \u6765\u5b9e\u73b0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OIDC_PRIVATE_KEY_PATH"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'./oidc-private-key.pem'")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://openid.net/specs/openid-connect-core-1_0.html#Signing"},"OIDC JWT \u7b7e\u540d")," \u7684 private key \u6587\u4ef6\u8def\u5f84\u3002 ",(0,l.kt)("br",null)," \u6ce8\u610f\uff1a\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"td"},"OIDC_PRIVATE_KEY")," \u975e\u7a7a\uff0cLogto \u5c06 ",(0,l.kt)("em",{parentName:"td"},"\u5ffd\u7565")," \u8be5\u503c\u3002")))),(0,l.kt)("h4",{id:"\u652f\u6301\u7684-private-key-\u7c7b\u578b"},"\u652f\u6301\u7684 private key \u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RSA"),(0,l.kt)("li",{parentName:"ul"},"OKP (Ed25519, Ed448, X25519, X448 sub types)"),(0,l.kt)("li",{parentName:"ul"},"EC (P-256, secp256k1, P-384, and P-521 curves)")),(0,l.kt)("h2",{id:"\u542f\u7528-https"},"\u542f\u7528 HTTPS"),(0,l.kt)("h3",{id:"\u4f7f\u7528-node"},"\u4f7f\u7528 Node"),(0,l.kt)("p",null,"Node \u539f\u751f\u652f\u6301 HTTPS\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS_CERT_PATH")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS_KEY_PATH")," ",(0,l.kt)("strong",{parentName:"p"},"\u540c\u65f6")," \u88ab\u63d0\u4f9b\u65f6\u624d\u4f1a\u901a\u8fc7 Node \u542f\u7528 HTTPS\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS_CERT_PATH")," \u662f\u4f60\u7684 HTTPS certificate \u7684\u8def\u5f84\uff1b",(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS_KEY_PATH")," \u662f\u4f60\u7684 HTTPS key \u7684\u8def\u5f84\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528-https-\u4ee3\u7406"},"\u4f7f\u7528 HTTPS \u4ee3\u7406"),(0,l.kt)("p",null,"\u53e6\u4e00\u4e2a\u60ef\u5e38\u7684\u505a\u6cd5\u662f\u5728 Node \u524d\u653e\u7f6e\u4e00\u4e2a HTTPS \u4ee3\u7406\uff08\u4f8b\u5982 Nginx\uff09\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u6837\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u5f88\u53ef\u80fd\u9700\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"TRUST_PROXY_HEADER")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u4ee5\u8868\u660e\u4ee3\u7406 header \u7684\u5b57\u6bb5\u662f\u5426\u5e94\u8be5\u88ab\u4fe1\u4efb\u3002Logto \u5c06\u628a\u6b64\u503c\u4f20\u9012\u7ed9 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/koajs/koa/blob/master/docs/api/index.md#settings"},"Koa \u5e94\u7528\u8bbe\u7f6e"),"\u3002"),(0,l.kt)("p",null,"\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies"},"Trusting TLS offloading proxies")," \u4ee5\u4e86\u89e3\u4f55\u65f6\u9700\u8981\u914d\u7f6e\u6b64\u5b57\u6bb5\u3002"))}k.isMDXComponent=!0}}]);