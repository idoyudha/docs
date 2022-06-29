"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5076],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6194:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(5443),r=n(3010),i=(n(9496),n(9613)),s=["components"],o={sidebar_label:"Using Admin Console",sidebar_position:1},l="Manage users using Admin Console",d={unversionedId:"docs/recipes/manage-users/using-admin-console",id:"docs/recipes/manage-users/using-admin-console",title:"Manage users using Admin Console",description:"TODO: screenshots",source:"@site/docs/docs/recipes/manage-users/using-admin-console.md",sourceDirName:"docs/recipes/manage-users",slug:"/docs/recipes/manage-users/using-admin-console",permalink:"/docs/recipes/manage-users/using-admin-console",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/manage-users/using-admin-console.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Using Admin Console",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users",permalink:"/docs/recipes/manage-users/"},next:{title:"Using Management API",permalink:"/docs/recipes/manage-users/using-management-api"}},c={},u=[{value:"List and search users",id:"list-and-search-users",level:2},{value:"Add user",id:"add-user",level:2},{value:"View and update user profile",id:"view-and-update-user-profile",level:2},{value:"View user activities",id:"view-user-activities",level:2},{value:"Delete user",id:"delete-user",level:2},{value:"Reset user password",id:"reset-user-password",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manage-users-using-admin-console"},"Manage users using Admin Console"),(0,i.kt)("p",null,"TODO: screenshots"),(0,i.kt)("h2",{id:"list-and-search-users"},"List and search users"),(0,i.kt)("p",null,"In Admin Console, click the ",(0,i.kt)("strong",{parentName:"p"},"User Management")," tab on the left, and you'll see a user table view on the right."),(0,i.kt)("p",null,"There are three columns in the table:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User"),": The user info may include the avatar, full name, username, phone number, email, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"From application"),": The name of the application that the user initially registered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Latest sign in"),": The timestamp when the user signed in last time.")),(0,i.kt)("p",null,'Input a keyword in the search box above the user table, click the "Search" button, and you\'ll see the matching users in the table.'),(0,i.kt)("p",null,"Support the partial search on the user properties: name, username, email, or phone number."),(0,i.kt)("h2",{id:"add-user"},"Add user"),(0,i.kt)("p",null,"Admin users could create a new account through Admin Console in the name of an end-user."),(0,i.kt)("p",null,'Click the "+ Add User" button in the upper right corner.\nIn the opening modal, fill out the username and full name, and click the "Add User" button to confirm.'),(0,i.kt)("p",null,"After you add the user, copy the ",(0,i.kt)("strong",{parentName:"p"},"username")," and ",(0,i.kt)("strong",{parentName:"p"},"initial password")," to send to the end-user."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Once the "Add User" modal is closed, you can no longer view the password.\nIf you forget to keep it, you can ',(0,i.kt)("a",{parentName:"p",href:"#reset-user-password"},"reset the password"),"."))),(0,i.kt)("h2",{id:"view-and-update-user-profile"},"View and update user profile"),(0,i.kt)("p",null,'Click the user table row to jump to the "',(0,i.kt)("strong",{parentName:"p"},"User details"),"\" panel.\nYou'll see the user profile, including the avatar, full name, user ID, email, phone, username, social connections, etc."),(0,i.kt)("p",null,'"Social connections" is a list of social connectors the user has connected to. Suppose the user has signed in with Facebook using the social connector; a "Facebook" item will be on the list.\nSee ',(0,i.kt)("a",{parentName:"p",href:"../../references/users/#identities"},"identities")," for details."),(0,i.kt)("p",null,"The full name, avatar image URL, and custom data are editable, the social connections are removable, and the other properties are read-only."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before removing the social connection, you SHOULD confirm the user has another sign-in method, such as another social connection, phone number, email, or username-with-password. Otherwise, the user CANNOT sign in to this account again."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Don\'t forget to click "Save changes" after updating.'))),(0,i.kt)("h2",{id:"view-user-activities"},"View user activities"),(0,i.kt)("p",null,'On the "User details" panel, switch to the "',(0,i.kt)("strong",{parentName:"p"},"User logs"),"\" sub-tab.\nYou'll see the user's recent activities in the table, including the action, result, related application, and the time when the user acted."),(0,i.kt)("p",null,"Click the table row to see more details in the user log, e.g., IP address, user agent, raw data, etc."),(0,i.kt)("h2",{id:"delete-user"},"Delete user"),(0,i.kt)("p",null,'On the "User details" panel, click "MORE OPTIONS" -> "Delete" button.'),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be careful! The user data deletion CANNOT be undone."))),(0,i.kt)("h2",{id:"reset-user-password"},"Reset user password"),(0,i.kt)("p",null,'On the "User details" panel, click "MORE OPTIONS" -> "Reset password" button.'),(0,i.kt)("p",null,"After you reset the password, copy and send it to the end-user."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'After closing the "Reset password" dialog, you can no longer view the password.\nIf you forget to keep it, you have to reset it again.'))))}m.isMDXComponent=!0}}]);