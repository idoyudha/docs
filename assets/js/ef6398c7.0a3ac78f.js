"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3874],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81907:function(e,t,n){n.d(t,{Z:function(){return l}});n(59496);var r=n(45924),a="tabItem_B9jv",o=n(4637);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:n,children:t})}},19774:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(59496),a=n(45924),o=n(43226),l=n(55660),i=n(59731),u=n(58867);function s(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,o.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(u),(0,r.useCallback)((function(e){if(u){var t=new URLSearchParams(i.location.search);t.set(u,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[u,i])]}function m(e){var t,n,a,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,m=e.groupId,g=c(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:g})})),f=h[0],k=h[1],b=d({queryString:s,groupId:m}),v=b[0],y=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],C=w[1],T=function(){var e=null!=v?v:N;return p({value:e,tabValues:g})?e:null}();return(0,r.useEffect)((function(){T&&k(T)}),[T]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),C(e)}),[y,C,g]),tabValues:g}}var g=n(75831),h=n(75836),f="tabList_tI2j",k="tabItem_zDC9",b=n(4637);function v(e){var t=e.className,n=e.block,r=e.selectedValue,o=e.selectValue,l=e.tabValues,i=[],u=(0,g.o5)().blockElementScrollPositionUntilNextRender,s=function(e){var t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(u(t),o(a))},c=function(e){var t,n=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;n=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var o,l=i.indexOf(e.currentTarget)-1;n=null!=(o=i[l])?o:i[i.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return i.push(e)},onKeyDown:c,onClick:s},o,{className:(0,a.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=m(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",f),children:[(0,b.jsx)(v,Object.assign({},e,t)),(0,b.jsx)(y,Object.assign({},e,t))]})}function N(e){var t=(0,h.Z)();return(0,b.jsx)(w,Object.assign({},e),String(t))}},66586:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return g}});var r=n(665),a=n(40151),o=(n(59496),n(49613)),l=n(81907),i=n(19774),u=n.p+"assets/images/gitpod-running-b10e27a7c1a1dd8eb2202034cdfa7a1f.png",s=["components"],c={},p="\u26a1 Get started",d={unversionedId:"docs/tutorials/get-started/README",id:"docs/tutorials/get-started/README",title:"\u26a1 Get started",description:"Launch Logto",source:"@site/docs/docs/tutorials/get-started/README.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/",permalink:"/docs/tutorials/get-started/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/get-started/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udc81 Introduction",permalink:"/"},next:{title:"Check out the demo app",permalink:"/docs/tutorials/get-started/check-out-demo"}},m={},g=[{value:"Launch Logto",id:"launch-logto",level:2},{value:"Online",id:"online",level:3},{value:"Local",id:"local",level:3},{value:"Quick troubleshooting",id:"quick-troubleshooting",level:3},{value:"Create an admin account",id:"create-an-admin-account",level:2},{value:"The Get Started tab",id:"the-get-started-tab",level:2}],h={toc:g};function f(e){var t=e.components,c=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-get-started"},"\u26a1 Get started"),(0,o.kt)("h2",{id:"launch-logto"},"Launch Logto"),(0,o.kt)("h3",{id:"online"},"Online"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://gitpod.io/#https://github.com/logto-io/demo",target:"_blank",rel:"noopener"},"Click here"),"\xa0",(0,o.kt)("span",null,"to start a GitPod workspace for Logto. Wait a few moment, you'll see the message like:")),(0,o.kt)("img",{src:u,alt:"Gitpod is running",width:"600px"}),(0,o.kt)("p",null,"Press Ctrl (or Cmd) and click the link that starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://3001-...")," to continue your Logto journey. Enjoy!"),(0,o.kt)("h3",{id:"local"},"Local"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"docker-compose",label:"Docker Compose",mdxType:"TabItem"},(0,o.kt)("p",null,"Docker Compose CLI usually comes with ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Do not use our docker compose command for production! Since we currently have a built-in Postgres database bundled together with the Logto app in ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),",\nevery time you re-execute the command a new database instance will be created, and any data persisted previously will be lost.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before the first stable version is available, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"prerelease")," tag for the Docker image.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | TAG=prerelease docker compose -p logto -f - up\n")),(0,o.kt)("p",null,"After a successful composition, you will see the message like:")),(0,o.kt)(l.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,o.kt)("h3",null,"Step 1"),(0,o.kt)("p",null,"Prepare a ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),"@^14.0 instance, and using ",(0,o.kt)("a",{href:"/docs/tutorials/using-cli/"},"Logto CLI")," to seed a database for Logto:"),(0,o.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto db seed\n"))),(0,o.kt)(l.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db seed\n")))),(0,o.kt)("h3",null,"Step 2"),(0,o.kt)("p",null,"Pull the image:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before the first stable version is available, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"prerelease")," tag for the Docker image.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# ghcr\ndocker pull ghcr.io/logto-io/logto:prerelease\n# DockerHub\ndocker pull svhd/logto:prerelease\n")),(0,o.kt)("h3",null,"Step 3"),(0,o.kt)("p",null,"Map the container port, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"3001:3001"),"; and set the following environment variables to the container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"TRUST_PROXY_HEADER: 1 # Set to 1 if you have an HTTPS proxy (e.g. Nginx) in front of Logto\nENDPOINT: http://localhost:3001 # Replace with your Logto endpoint URL if you are using a custom domain\nDB_URL: postgres://username:password@your_postgres_url:port/db_name # Replace with your Postgres DSN\n")),(0,o.kt)("p",null,"Run the container with all the environment variables above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n--name logto \\\n-p 3001:3001 \\\n-e TRUST_PROXY_HEADER=1 \\\n-e ENDPOINT=https://your-domain-url \\\n-e DB_URL=postgres://username:password@your_postgres_url:port/db_name \\\nghcr.io/logto-io/logto:prerelease\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If you are using Docker Hub, use ",(0,o.kt)("inlineCode",{parentName:"li"},"svhd/logto:prerelease")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"ghcr.io/logto-io/logto:prerelease"),"."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"host.docker.internal")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"172.17.0.1")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"DB_URL")," to refer to the host IP."))),(0,o.kt)("p",null,"Finally, you will see the message like:")),(0,o.kt)(l.Z,{value:"npm",label:"npm-init",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prerequisites")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," ",(0,o.kt)("inlineCode",{parentName:"li"},"^18.12.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://postgresql.org/"},"PostgreSQL")," ",(0,o.kt)("inlineCode",{parentName:"li"},"^14.0"))),(0,o.kt)("p",null,"Higher versions usually work but are not guaranteed."),(0,o.kt)("p",null,"We recommend using a new empty database which is dedicated for Logto, while it","'","s not a hard requirement."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Download and start")),(0,o.kt)("p",null,"In your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init @logto@latest\n")),(0,o.kt)("p",null,"Once you complete the init process and start Logto, you will see the message like:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"App is running at http://localhost:3001\nApp is running at https://your-domain-url\n")),(0,o.kt)("p",null,"Heading to ",(0,o.kt)("a",{target:"_blank",href:"http://localhost:3001/",rel:"noopener"},"http://localhost:3001/")," to continue your Logto journey. Enjoy!"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Configuration (optional)"),(0,o.kt)("p",null,"Logto uses environment variables for configuration, along with ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file support. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/core/configuration"},"Configuration")," for detailed usage and full variable list.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Check out ",(0,o.kt)("a",{parentName:"em",href:"/docs/references/core/"},"Core Service")," if you want more advanced controls or programmatic access to Logto.")),(0,o.kt)("h3",{id:"quick-troubleshooting"},"Quick troubleshooting"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"My browser cannot load Admin Console (showing error ",(0,o.kt)("code",null,"Crypto.subtle is unavailable..."),")"),(0,o.kt)("p",null,"Admin Console uses ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"},"Web Crypto API"),", which requires ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"},"secure contexts"),", i.e. HTTPS or HTTP with ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,o.kt)("p",null,"If you use HTTP with an IP address or custom domain, then the browser cannot load Admin Console.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"I'm using a custom domain, but my browser cannot load Admin Console (showing error"," ",(0,o.kt)("code",null,'"code": "oidc.invalid_redirect_uri"'),")"),(0,o.kt)("p",null,"If you are using a custom domain rather than ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", you need to set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"ENDPOINT")," to the Logto URL. It is because of the strict requirement of Redirect URI in OIDC. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/core/configuration#general"},"Configuration")," for details.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"I'm using an HTTPS proxy (e.g., Nginx) in front of Logto, but I failed on sign-in (showing error"," ",(0,o.kt)("code",null,"TypeError: Failed to fetch"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, make sure you have set the node environment variable ",(0,o.kt)("inlineCode",{parentName:"li"},"TRUST_PROXY_HEADER")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),". See ",(0,o.kt)("a",{parentName:"li",href:"/docs/references/core/configuration#using-a-https-proxy"},"Configuration")," for details."),(0,o.kt)("li",{parentName:"ul"},"Also, you need to set ",(0,o.kt)("inlineCode",{parentName:"li"},"X-Forwarded-Proto")," header to ",(0,o.kt)("inlineCode",{parentName:"li"},"https")," in your proxy config. See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies"},"Trusting TLS offloading proxies")," for details."))),(0,o.kt)("h2",{id:"create-an-admin-account"},"Create an admin account"),(0,o.kt)("p",null,'Open the link and you will see a welcome page that briefly introduces Admin Console. Click "Create Account" to create an admin account.'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For now, you cannot create multiple admin accounts via Admin Console, and only the first account will have admin access. If you want to create multiple admin accounts, use the Management API instead.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Once you create the first account, the welcome page will be unavailable.")),(0,o.kt)("p",null,"On the create account page, enter your username and password to continue."),(0,o.kt)("h2",{id:"the-get-started-tab"},"The Get Started tab"),(0,o.kt)("p",null,'Once you create the admin account, the browser will redirect you to the "Get Started" tab in Admin Console, which shows a few things that Logto can do at a glance.'),(0,o.kt)("p",null,"Our tutorial will follow the order you are seeing. So let's begin!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get started",src:n(29703).Z,width:"1920",height:"1160"})))}f.isMDXComponent=!0},29703:function(e,t,n){t.Z=n.p+"assets/images/get-started-0a25fd0e75ae7746aab3830e1380049f.png"}}]);