"use strict";(self.webpackChunkhelpdesk_doku=self.webpackChunkhelpdesk_doku||[]).push([[827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i="Projektstruktur",l={unversionedId:"Einstieg/Projektstruktur",id:"Einstieg/Projektstruktur",title:"Projektstruktur",description:"Ordner",source:"@site/docs/02-Einstieg/02-Projektstruktur.md",sourceDirName:"02-Einstieg",slug:"/Einstieg/Projektstruktur",permalink:"/Helpdeskinfo-Dokumentation/docs/Einstieg/Projektstruktur",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Voraussetzungen",permalink:"/Helpdeskinfo-Dokumentation/docs/Einstieg/Voraussetzungen"},next:{title:"Funktionsumfang",permalink:"/Helpdeskinfo-Dokumentation/docs/Einstieg/Funktionsumfang"}},p={},u=[{value:"Ordner",id:"ordner",level:2},{value:"Dateien",id:"dateien",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"projektstruktur"},"Projektstruktur"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helpdeskinfo\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 dist/\n\u251c\u2500\u2500 electron/\n\u251c\u2500\u2500 node_modules/\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 powershell/\n\u251c\u2500\u2500 public/\n\u251c\u2500\u2500 rollup.config.js\n\u2514\u2500\u2500 src/\n")),(0,a.kt)("h2",{id:"ordner"},"Ordner"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dist")," - Enth\xe4lt die fertigen Builds. Mehr dazu unter: ",(0,a.kt)("a",{parentName:"p",href:"/docs/Entwicklung/Build"},"Build erstellen"),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"electron")," - Enth\xe4lt Electron Dateien (Back-End). Mehr dazu unter: ",(0,a.kt)("a",{parentName:"p",href:"/docs/Projektaufbau/Electron"},"Electron"),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," - Enth\xe4lt die installierten Node Modules.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"powershell")," - Enth\xe4lt die PowerShell Skripte, die die Daten des PCs erheben. Diese Daten werden in der Electron App dargestellt. Mehr dazu unter: ",(0,a.kt)("a",{parentName:"p",href:"/docs/Entwicklung/Powershell-Erweiterbarkeit"},"PowerShell-Erweiterbarkeit"),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"public")," - Enth\xe4lt die Views (Front-End). Diese Dateien werden automatisch von Svelte generiert.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"src")," - Enth\xe4lt die Svelte Dateien. In diesen kann man das Front-End anpassen. Mehr dazu unter: ",(0,a.kt)("a",{parentName:"p",href:"/docs/Projektaufbau/Svelte"},"Svelte"),".  "),(0,a.kt)("h2",{id:"dateien"},"Dateien"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," - Hier k\xf6nnte man Ausnahmen definieren, wenn man Git benutzen will.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," - Wird automatisch von NPM generiert.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," - Projektinformationen und Dependencies. Mehr dazu unter ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/configuring-npm/package-json"},"package.json"),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"rollup.config.js")," - Rollup-Config (Kommt von Svelte)."))}c.isMDXComponent=!0}}]);