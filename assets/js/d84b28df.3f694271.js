"use strict";(self.webpackChunkprojects=self.webpackChunkprojects||[]).push([[379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},o="Rei",l={unversionedId:"base/rei",id:"base/rei",title:"Rei",description:"Rei is a minimalist programming language built to for optimal systems design. Backward compatibility is not an excuse, and in Rei, many FFIs and legacy APIs and ideals may not even be supported at all.",source:"@site/docs/base/rei.md",sourceDirName:"base",slug:"/base/rei",permalink:"/docs/base/rei",draft:!1,editUrl:"https://github.com/hyperswine/projects/docs/base/rei.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"main",previous:{title:"Universal Creator",permalink:"/docs/base/universal-creator"},next:{title:"Nova",permalink:"/docs/base/nova"}},s={},p=[{value:"What can you do?",id:"what-can-you-do",level:2},{value:"Rei VM",id:"rei-vm",level:2},{value:"Progress List",id:"progress-list",level:2},{value:"Todo",id:"todo",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rei"},"Rei"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hyperswine.github.io/rei"},"Rei")," is a minimalist programming language built to for optimal systems design. Backward compatibility is not an excuse, and in Rei, many FFIs and legacy APIs and ideals may not even be supported at all."),(0,r.kt)("p",null,"Rei allows one to do anything imaginable. It is a beyonder language whose job is to take the hardware beyond unenlightenment."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hyperswine.github.io/rei"},"Check it out!")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Libraries:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"core")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"std"),". Stdliberals are needed whether you like them or not",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"core::arch")," for complete wrappers around platform dependent primitives"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"std::spectro"),", an actual functional HDL for building all sorts of hardware"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arcen"),", a very light gui framework"))),(0,r.kt)("h2",{id:"what-can-you-do"},"What can you do?"),(0,r.kt)("p",null,"With less enlightened languages, one may be forced into a specific programming style. I don't mean intentional programming or modular programming. I mean OOP (object oriented pain), 10-line templates, make, etc."),(0,r.kt)("p",null,"Rei on the other hand, just works. Its base spec is quite simple and does not have many rules. If you want to code for embedded, you choose a low level of abstraction ",(0,r.kt)("inlineCode",{parentName:"p"},"core"),". If you want a higher level, use ",(0,r.kt)("inlineCode",{parentName:"p"},"std")," or your own abstractions ontop of the base language."),(0,r.kt)("p",null,"This means one can write anything very concisely and elegantly. The compiler does not thow a hissy fit and everything flows (phanta rei). This includes anything ranging from kernels, firmware, userspace tools, full desktop or web apps, games, and scientific computing. The strict, default constness of rei also ensures safety and validity at compile time."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Don't know how it works? Try it in ",(0,r.kt)("inlineCode",{parentName:"p"},"rein"),", a lightweight environment built specifically for rei development. It has a full language analyzer (not server) that actively prevents you from doing something potentially bad.")),(0,r.kt)("h2",{id:"rei-vm"},"Rei VM"),(0,r.kt)("p",null,"Even though rei is meant to be a language for neutron core and app development, it works in a VM too (also riscv and arm, but we'll talk about that later)."),(0,r.kt)("p",null,"The VM is pretty much a complete platform for running rei programs. Most std functionalities just work. ",(0,r.kt)("inlineCode",{parentName:"p"},"core::arch")," are specific to platforms your developing for."),(0,r.kt)("h2",{id:"progress-list"},"Progress List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drew up codebase for main libraries"),(0,r.kt)("li",{parentName:"ul"},"Refactor the idea to take arbitrary expressions and treat macros like any other keyword"),(0,r.kt)("li",{parentName:"ul"},"Ability to treat macros like any other function and simply use them by including the base prelude library which exports ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr")," among other parser nodes")),(0,r.kt)("h2",{id:"todo"},"Todo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implementation of each component and tests in rust"),(0,r.kt)("li",{parentName:"ul"},"Type inference and smart consteval and caching"),(0,r.kt)("li",{parentName:"ul"},"High level interpretation and std impl ",(0,r.kt)("inlineCode",{parentName:"li"},"use Rust::std::"))))}u.isMDXComponent=!0}}]);