"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[375],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5355:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={title:"Docker"},c=void 0,u={unversionedId:"Computer/docker/docker",id:"Computer/docker/docker",title:"Docker",description:"2022/7/30",source:"@site/docs/Computer/docker/docker.md",sourceDirName:"Computer/docker",slug:"/Computer/docker/",permalink:"/docs/Computer/docker/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Computer/docker/docker.md",tags:[],version:"current",frontMatter:{title:"Docker"},sidebar:"tutorialSidebar",previous:{title:"gitignore",permalink:"/docs/Computer/git/gitignore"},next:{title:"re",permalink:"/docs/Computer/python/re"}},s=[{value:"Cheatsheet",id:"cheatsheet",children:[],level:4},{value:"Container is not virtualization",id:"container-is-not-virtualization",children:[],level:4},{value:"Namespaces",id:"namespaces",children:[],level:4},{value:"\u89e3\u51b3\u7684\u95ee\u9898",id:"\u89e3\u51b3\u7684\u95ee\u9898",children:[],level:4},{value:"\u8fd0\u884c\u73af\u5883",id:"\u8fd0\u884c\u73af\u5883",children:[],level:4},{value:"State transition",id:"state-transition",children:[],level:4},{value:"In-memory storage",id:"in-memory-storage",children:[],level:4},{value:"Network",id:"network",children:[],level:4},{value:"Resource Limit",id:"resource-limit",children:[],level:4},{value:"UID space",id:"uid-space",children:[],level:4},{value:"Layers",id:"layers",children:[],level:4},{value:"Dockerfile",id:"dockerfile",children:[],level:4}],p={toc:s};function d(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"2022/7/30"),(0,o.kt)("p",null,"\u4e4b\u524d\u4e00\u76f4\u6ca1\u6709\u7cfb\u7edf\u5730\u6574\u7406Docker\u76f8\u5173\u7684\u77e5\u8bc6\uff0c\u63a8\u8350\u4e00\u672c\u597d\u4e66"),(0,o.kt)("p",null,"Docker in Action"),(0,o.kt)("p",null,"\u91cc\u9762\u8bf4\u5f97\u975e\u5e38\u8be6\u7ec6"),(0,o.kt)("h4",{id:"cheatsheet"},"Cheatsheet"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run -it "),"interactive"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run -d")," daemon"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"}," --env DB_HOST=<xxx>"),"  environment injection"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--privileged")," run with full privilege"),(0,o.kt)("h4",{id:"container-is-not-virtualization"},"Container is not virtualization"),(0,o.kt)("p",null,"container\u66f4\u50cf\u662f\u53ea\u80fd\u8bbf\u95ee\u6307\u5b9a\u8d44\u6e90\u7684process\uff0c\u800c\u4e0d\u662f\u7cfb\u7edf\u3002VM\u662f\u4e00\u6574\u4e2a\u7cfb\u7edf\u73af\u5883\uff0c\u521b\u5efa\u548c\u542f\u52a8\u90fd\u9700\u8981\u5f88\u957f\u65f6\u95f4\u3002"),(0,o.kt)("h4",{id:""}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220730140106669",src:n(7357).Z,width:"1252",height:"592"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220730140158890",src:n(9509).Z,width:"1276",height:"786"})),(0,o.kt)("h4",{id:"namespaces"},"Namespaces"),(0,o.kt)("p",null,"PID namespace\u2014Process identifiers and capabilities "),(0,o.kt)("p",null,"UTS namespace\u2014Host and domain name "),(0,o.kt)("p",null,"MNT namespace\u2014Filesystem access and structure "),(0,o.kt)("p",null,"IPC namespace\u2014Process communication over shared memory "),(0,o.kt)("p",null,"NET namespace\u2014Network access and structure "),(0,o.kt)("p",null,"USR namespace\u2014User names and identifiers "),(0,o.kt)("p",null,"chroot syscall\u2014Controls the location of the filesystem root "),(0,o.kt)("p",null,"cgroups\u2014Resource protection "),(0,o.kt)("p",null,"CAP drop\u2014Operating system feature restrictions "),(0,o.kt)("p",null,"Security modules\u2014Mandatory access controls"),(0,o.kt)("h4",{id:"\u89e3\u51b3\u7684\u95ee\u9898"},"\u89e3\u51b3\u7684\u95ee\u9898"),(0,o.kt)("p",null,"\u8f6f\u4ef6\u7684\u5b89\u88c5/\u5378\u8f7d\uff0c\u73af\u5883\u4f9d\u8d56"),(0,o.kt)("p",null,"\u73af\u5883\u8fc1\u79fb"),(0,o.kt)("p",null,"\u4fdd\u62a4host\u4e3b\u673a"),(0,o.kt)("h4",{id:"\u8fd0\u884c\u73af\u5883"},"\u8fd0\u884c\u73af\u5883"),(0,o.kt)("p",null,"currently Docker can run only applications that can run on a Linux operating system, or Windows applications on Windows Server."),(0,o.kt)("h4",{id:"state-transition"},"State transition"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220730142343405",src:n(370).Z,width:"1386",height:"712"})),(0,o.kt)("h4",{id:"in-memory-storage"},"In-memory storage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run --rm \\ --mount type=tmpfs,dst=/tmp \\ --entrypoint mount \\ alpine:latest -v")),(0,o.kt)("p",null,"tmpfs on /tmp type tmpfs (rw,nosuid,nodev,noexec,relatime)"),(0,o.kt)("h4",{id:"network"},"Network"),(0,o.kt)("p",null,"Bridge: intercontainer"),(0,o.kt)("p",null,"Host: host"),(0,o.kt)("p",null,"Null: no network"),(0,o.kt)("h4",{id:"resource-limit"},"Resource Limit"),(0,o.kt)("p",null,"CPU"),(0,o.kt)("p",null,"\u6bcf100ms\u8f6e\u8f6c\uff0cLinux Completely Fair Scheduler"),(0,o.kt)("p",null," The defaults won\u2019t limit the container, and it will be able to use 100% of the CPU if the machine is otherwise idle."),(0,o.kt)("p",null,"\u4ec5\u4ec5\u662f\u5728\u4e89\u62a2cpu\u8d44\u6e90\u65f6\uff0c\u8be5\u9650\u5236\u4f1a\u8fdb\u884c\u8f6e\u8f6c\uff0c\u5426\u5219\u8fd8\u662f\u4f1a\u5403\u6ee1\u8d44\u6e90\u3002"),(0,o.kt)("h4",{id:"uid-space"},"UID space"),(0,o.kt)("p",null,"Container \u548chost share UID space\u3002\u56e0\u6b64container\u91cc\u7684root\u53ef\u4ee5\u4fee\u6539mount\u7684\u6587\u4ef6"),(0,o.kt)("p",null,"UID remapping USR"),(0,o.kt)("p",null,"0->5000"),(0,o.kt)("p",null,"1->50001"),(0,o.kt)("h4",{id:"layers"},"Layers"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220730150712466",src:n(3028).Z,width:"1470",height:"970"})),(0,o.kt)("h4",{id:"dockerfile"},"Dockerfile"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/"},"https://docs.docker.com/engine/reference/builder/")))}d.isMDXComponent=!0},7357:function(e,t,n){t.Z=n.p+"assets/images/image-20220730140106669-5de8bc89d378453dec5a9db9c2735d9c.png"},9509:function(e,t,n){t.Z=n.p+"assets/images/image-20220730140158890-6d10d353eadbaf723d4539f92828c0f3.png"},370:function(e,t,n){t.Z=n.p+"assets/images/image-20220730142343405-f2cf194fc9791732f833cde1ffda23cc.png"},3028:function(e,t,n){t.Z=n.p+"assets/images/image-20220730150712466-2a034febc437c54facbda0b203275b43.png"}}]);