"use strict";(self.webpackChunkhelpdesk_doku=self.webpackChunkhelpdesk_doku||[]).push([[75],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=c(n),f=i,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"Build erstellen"},l=void 0,a={unversionedId:"Entwicklung/Build",id:"Entwicklung/Build",title:"Build erstellen",description:"Mit npm run build wird das Projekt zu einem Build verpackt.",source:"@site/docs/04-Entwicklung/04-Build.md",sourceDirName:"04-Entwicklung",slug:"/Entwicklung/Build",permalink:"/Helpdeskinfo-Dokumentation/docs/Entwicklung/Build",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Build erstellen"},sidebar:"tutorialSidebar",previous:{title:"Electronegativity",permalink:"/Helpdeskinfo-Dokumentation/docs/Entwicklung/Electronegativity"}},u={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mit ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build")," wird das Projekt zu einem Build verpackt."),(0,i.kt)("p",null,"Unter ",(0,i.kt)("inlineCode",{parentName:"p"},"helpdeskinfo/dist/")," ist dann eine Setup.exe zu finden, mit der das Programm installiert werden kann.\nEbenfalls ist dort unter ",(0,i.kt)("inlineCode",{parentName:"p"},"helpdeskinfo/dist/win-unpacked/")," eine portable Version des Programms, die direkt ausgef\xfchrt werden kann."),(0,i.kt)("p",null,"Die Build-Konfiguration ist in ",(0,i.kt)("inlineCode",{parentName:"p"},"helpdeskinfo/package.json")," zu finden."))}d.isMDXComponent=!0}}]);