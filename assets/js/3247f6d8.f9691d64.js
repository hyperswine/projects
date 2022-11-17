"use strict";(self.webpackChunkprojects=self.webpackChunkprojects||[]).push([[941],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5},i="Nova",s={unversionedId:"base/nova",id:"base/nova",title:"Nova",description:"Nova",source:"@site/docs/base/nova.md",sourceDirName:"base",slug:"/base/nova",permalink:"/docs/base/nova",draft:!1,editUrl:"https://github.com/hyperswine/projects/docs/base/nova.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"main",previous:{title:"Rei",permalink:"/docs/base/rei"}},c={},l=[{value:"How does Nova work?",id:"how-does-nova-work",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nova"},"Nova"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Nova",src:r(4310).Z,width:"2527",height:"2445"})),(0,o.kt)("p",null,"Nova is a complete FPGA solution for all your simulation and verification needs. It includes boards and software (spectro), all free of charge."),(0,o.kt)("h2",{id:"how-does-nova-work"},"How does Nova work?"),(0,o.kt)("p",null,"Nova is engineered to be an SoC simulator. It can be configured with 4-12 fpga ICs and up to 1MB SRAM and 8GB LPDDR6X. Includes extra ROM and USB ports if you really want. It is primarily programmed through the spectro protocol, which is a very simple and fast protocol that flashes a compiled HDL to the fpga ICs via USB."))}u.isMDXComponent=!0},4310:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/NOVA-FPGA-26eacf23f6f2baafd59c0390ef3d4977.png"}}]);