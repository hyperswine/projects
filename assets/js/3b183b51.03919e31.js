"use strict";(self.webpackChunkprojects=self.webpackChunkprojects||[]).push([[264],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(a),h=s,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||r;return a?n.createElement(d,i(i({ref:t},l),{},{components:a})):n.createElement(d,i({ref:t},l))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const r={sidebar_position:1},i="Spectre System",o={unversionedId:"spectre-system",id:"spectre-system",title:"Spectre System",description:"Spectre",source:"@site/docs/spectre-system.md",sourceDirName:".",slug:"/spectre-system",permalink:"/docs/spectre-system",draft:!1,editUrl:"https://github.com/hyperswine/projects/docs/spectre-system.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Neutron",permalink:"/docs/neutron"}},c={},p=[{value:"Spectre-U and Spectre-S",id:"spectre-u-and-spectre-s",level:2},{value:"Executors",id:"executors",level:2},{value:"Functions",id:"functions",level:3},{value:"Peripheral Communication",id:"peripheral-communication",level:3},{value:"Spectre ISA",id:"spectre-isa",level:2},{value:"Note on Chip Design",id:"note-on-chip-design",level:3},{value:"Expected Performance",id:"expected-performance",level:2},{value:"Mathematical Analysis of Possible Performance",id:"mathematical-analysis-of-possible-performance",level:3},{value:"Notes",id:"notes",level:2},{value:"Backers",id:"backers",level:2}],l={toc:p};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"spectre-system"},"Spectre System"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Spectre",src:a(378).Z,width:"1309",height:"554"})),(0,s.kt)("p",null,"The spectre system is a computing platform that is built from first principles.\nMinimalism, user-centric, efficiency and scalablility are philosophies I like."),(0,s.kt)("h2",{id:"spectre-u-and-spectre-s"},"Spectre-U and Spectre-S"),(0,s.kt)("p",null,"Spectre User is the user optimised configuration of the spectre system. It is the config that you and I would want to use on daily basis in our smartphones, watches, laptops, etc. There is a subset of Spectre-S (Spectre-E) that is used in embedded."),(0,s.kt)("p",null,"Spectre Server is the high end optimised configuration of the spectre system. Instead of focusing on efficiency, heat generation, etc. We mainly focus on scalability and the highest performance possible."),(0,s.kt)("h2",{id:"executors"},"Executors"),(0,s.kt)("p",null,"How does spectre work exactly?"),(0,s.kt)("p",null,'First, we start with a concept known as an "executor". An executor is an hardware unit whose sole job is to execute a function. We also have something known as an array executor. An array executor can be seen as an SIMD unit. This may be similar to other accelerators such as the SHA-256 and etc.'),(0,s.kt)("p",null,"There are three main types of executors:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"I-type executors"),(0,s.kt)("li",{parentName:"ul"},"D-type SIMT executors"),(0,s.kt)("li",{parentName:"ul"},"Accelerator executors")),(0,s.kt)("p",null,"A spectre instruction targets a specific executor. It first gets decoded in decode stage 1 and placed into queue stage 1. There it is dequeued to a chosen executor cluster. It is then decoded again and queued to execute in an available executor suited for it."),(0,s.kt)("h3",{id:"functions"},"Functions"),(0,s.kt)("p",null,'Functions are defined as parameterised blocks of code to be "called" into, ran from start to finish, and be "returned" from.'),(0,s.kt)("p",null,"The spectre architecture knows of functions in the above form. The first thing that's run on a spectre system is the ",(0,s.kt)("inlineCode",{parentName:"p"},"_entry")," function of a process. The first process to exist is the BIOS firmware process, which is semi hardcoded into the uarch. All subsequent processes follow a similar route of entry. Each time a process exits it returns from ",(0,s.kt)("inlineCode",{parentName:"p"},"_entry")," to the caller. In the context of userspace applications, this is the in memory scheduler driver library. In the context of the kernel, it is the bootloader and BIOS, and eventually the ",(0,s.kt)("inlineCode",{parentName:"p"},"_reset")," instruction which is like a hard return."),(0,s.kt)("p",null,"Functions are called by jumping to their absolute addresses, or relative addresses if you want to save memory. All arguments passed to the function would be saved onto the thread's stack beforehand. The way it does so is through the spectre calling convention. Its actually quite simple:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"// language code\nf: (int: i32) => int + 1\n\nf()\n\n// machine code\nf:\n    store $sp + 1\n    jump $sp - size_of_args\n\ncallee:\n    store return_addr\n    store int\n    jump f\n    // would then pop if need be \n")),(0,s.kt)("p",null,"Now would it possibly use more memory sometimes? Maybe. But I think it is a worthy tradeoff for efficiency."),(0,s.kt)("h3",{id:"peripheral-communication"},"Peripheral Communication"),(0,s.kt)("p",null,"Any device or system not embedded on the main system (usually the SoC) itself would require peripheral protocols. These include PCIe, USB, Motherboard bus, etc."),(0,s.kt)("p",null,'Furthermore, the latency (and possibly throughput) associated with peripheral communication are orders of magnitude slower than inter-SoC communication. "Functions" executed by peripheral systems may also be subject to sporadic user input, unstable internet connections, etc. Hence the concept of direct function execution cannot be applied as easily. Instead, a hardware based effect system is used to manage and wait on peripheral systems which may take their time to reply.'),(0,s.kt)("p",null,"We refer to peripheral communication as IO. Most IO are performed through memory mapped reads and writes. A userspace application would link a driver in execute only mode and call it through a library each time it wants to e.g. read from disk, communicate with devices and computers through the wireless card. The driver code may request a DMA transaction by writing to the memory mapped DMA controller with the request struct. If not contentious, the request would be promptly processed and the controller would stream the request packet to the desired device."),(0,s.kt)("h2",{id:"spectre-isa"},"Spectre ISA"),(0,s.kt)("p",null,"The spectre system is unique in that is has a uniform instruction set. That means to program all executors you simply use the same context. Unlike cpu-gpu splits where you have to program each separately through e.g. shaders."),(0,s.kt)("p",null,"The spectre ISA is quite simple. It consists of like 10 atomic instructions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"Type1 addr, addr:\n    Add\n    Sub\n    Mult\n    Div\n    And\n    Or\n    Xor\n    // map array, function\n    Map\nType2 addr:\n    Not\n    Jump\n    StoreVal\nType3:\n    Return\nType4 addr, size:\n    Sha256\n    Lookup\n    FourierTransform\nType5 addr, addr, size:\n    Read\n    Write\n")),(0,s.kt)("h3",{id:"note-on-chip-design"},"Note on Chip Design"),(0,s.kt)("p",null,"The latest SoA designs use chiplets and die stacking. As well as maximising the bandwidth of buses. Spectre utilises SoC based chiplets for combining executor clusters, memory units, and caches. It forces as many components together as possible and utilises wireless networking where possible to interface with peripheral devices. Gone are the days of USB, HDMI, PCIe, or what have you. Everything is packaged together nicely and can be upgraded together if you wish to reuse the chassis or the board."),(0,s.kt)("p",null,"Less is more."),(0,s.kt)("h2",{id:"expected-performance"},"Expected Performance"),(0,s.kt)("p",null,"I haven't tested it yet. But Im quite confident that it could see some pretty significant performance increases."),(0,s.kt)("p",null,"The biggest parts come from the lack of interrupts and pipeline flushing, less code to execute (maybe much less), enlightening compiler that generates efficient code based on SIMD on ",(0,s.kt)("inlineCode",{parentName:"p"},"map"),' and in-place/uniqueness values. Functions are never inlined and jump is fast. I-cache and D-cache are increased, especially D-cache. In a typical userspace GUI app, there is literally nothing that could interrupt the user\'s input so there is minimal latency. Since the CPU and PPU are combined into an MPU there is also minimal latency between CPU and PPU, and in fact, you can write "shaders" right in normal software and the shader functions/instructions get compiled in the same program to form specific D-type instructions. If you want specific accleration, use the acceleration library afforded by neutronapi or rei::std.'),(0,s.kt)("h3",{id:"mathematical-analysis-of-possible-performance"},"Mathematical Analysis of Possible Performance"),(0,s.kt)("p",null,"Here I will attempt to analyse exactly how much performance a spectre-v1 SoC can afford vs a chip like the Snapdragon 888."),(0,s.kt)("p",null,"Notice that the SN888 is arm-based and has a ton of extra stuff on it which I kind of just think is bloat."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let sn888 = Chip {\n    cpu: [CortexA77(); 8]\n}\n")),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("p",null,"Sure, you don't need to be ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"100"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"100\\%")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"100%")))))," efficient, but even ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"97"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"97\\%")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"97%")))))," is much much better than ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"40"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"40\\%")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"40%")))))," or even ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"70"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"70\\%")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"70%"))))),". Especially for devices we carry on us and use as supplementing tools. For high end servers and computing racks, the philosophy changes somewhat."),(0,s.kt)("p",null,"The spectre hardware design involves a set of compute units such as a minimalist SoC and interconnect system. We rely more on wireless connectivity through 2.4-5GHz connections for peripherals such as mice and keyboards, headsets and displays. Charging is done through magnetised thunderbolt 5. Other peripherals such as 2FA keys and crypto keys are accomplished through NFC."),(0,s.kt)("h2",{id:"backers"},"Backers"),(0,s.kt)("p",null,"If you back spectre, you will get a few free samples when they are available."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/support"},"Pledge Here")),(0,s.kt)("p",null,"People who have pleged:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Quantii")))}m.isMDXComponent=!0},378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Spectre-3b395325cd86a0e335865769357d7dc9.png"}}]);