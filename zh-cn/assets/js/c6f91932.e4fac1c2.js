"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[8892],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81907:function(e,t,n){n.d(t,{Z:function(){return l}});n(59496);var r=n(45924),a="tabItem_B9jv",o=n(4637);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:n,children:t})}},19774:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(59496),a=n(45924),o=n(43226),l=n(55660),i=n(59731),u=n(58867);function s(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,o.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(u),(0,r.useCallback)((function(e){if(u){var t=new URLSearchParams(i.location.search);t.set(u,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[u,i])]}function f(e){var t,n,a,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,f=e.groupId,g=c(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:g})})),b=m[0],v=m[1],h=d({queryString:s,groupId:f}),y=h[0],k=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=w[0],O=w[1],T=function(){var e=null!=y?y:x;return p({value:e,tabValues:g})?e:null}();return(0,r.useEffect)((function(){T&&v(T)}),[T]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),O(e)}),[k,O,g]),tabValues:g}}var g=n(75831),m=n(75836),b="tabList_tI2j",v="tabItem_zDC9",h=n(4637);function y(e){var t=e.className,n=e.block,r=e.selectedValue,o=e.selectValue,l=e.tabValues,i=[],u=(0,g.o5)().blockElementScrollPositionUntilNextRender,s=function(e){var t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(u(t),o(a))},c=function(e){var t,n=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;n=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var o,l=i.indexOf(e.currentTarget)-1;n=null!=(o=i[l])?o:i[i.length-1]}null==(t=n)||t.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,h.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return i.push(e)},onKeyDown:c,onClick:s},o,{className:(0,a.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=f(e);return(0,h.jsxs)("div",{className:(0,a.Z)("tabs-container",b),children:[(0,h.jsx)(y,Object.assign({},e,t)),(0,h.jsx)(k,Object.assign({},e,t))]})}function x(e){var t=(0,m.Z)();return(0,h.jsx)(w,Object.assign({},e),String(t))}},39163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=n(665),a=n(40151),o=(n(59496),n(49613)),l=n(81907),i=n(19774),u=["components"],s={sidebar_position:1},c="Install Logto",p={unversionedId:"docs/tutorials/using-cli/install-logto",id:"docs/tutorials/using-cli/install-logto",title:"Install Logto",description:"Interactive",source:"@site/docs/docs/tutorials/using-cli/install-logto.mdx",sourceDirName:"docs/tutorials/using-cli",slug:"/docs/tutorials/using-cli/install-logto",permalink:"/zh-cn/docs/tutorials/using-cli/install-logto",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/using-cli/install-logto.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83d\udda5 Using Logto CLI",permalink:"/zh-cn/docs/tutorials/using-cli/"},next:{title:"Manage connectors",permalink:"/zh-cn/docs/tutorials/using-cli/manage-connectors"}},d={},f=[{value:"Interactive",id:"interactive",level:2},{value:"Options and silent installation",id:"options-and-silent-installation",level:2}],g={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-logto"},"Install Logto"),(0,o.kt)("h2",{id:"interactive"},"Interactive"),(0,o.kt)("p",null,"Run the command below to proceed an interactive installation in your terminal:"),(0,o.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto init\n"))),(0,o.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init @logto@latest\n")))),(0,o.kt)("h2",{id:"options-and-silent-installation"},"Options and silent installation"),(0,o.kt)("p",null,"Alternatively, you can add the options below to skip some questions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# All these options are optional\n--db-url      The Postgres URL to Logto database\n-p, --path    Path to your Logto instance, must be a non-existing path\n--ss          Skip Logto database seeding\n--oc          Add official connectors after installation\n")),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"logto init --help")," for full help info."),(0,o.kt)("p",null,"Here's an example for performing a silent installation (e.g., in CI):"),(0,o.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto init -p ./logto --db-url postgresql://your-postgres-dsn:5432/logto --oc\n"))),(0,o.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli init -p ./logto --db-url postgresql://your-postgres-dsn:5432/logto --oc\n")))),(0,o.kt)("p",null,"It will do the following things in order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and extract Logto into ",(0,o.kt)("inlineCode",{parentName:"li"},"./logto")),(0,o.kt)("li",{parentName:"ol"},"Try to init and seed database with URL ",(0,o.kt)("inlineCode",{parentName:"li"},"postgresql://your-postgres-dsn:5432/logto")),(0,o.kt)("li",{parentName:"ol"},"Add Logto official connectors to ",(0,o.kt)("inlineCode",{parentName:"li"},"./logto/packages/core/connectors"))))}m.isMDXComponent=!0}}]);