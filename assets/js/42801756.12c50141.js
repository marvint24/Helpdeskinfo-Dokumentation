"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={},p=void 0,s={unversionedId:"Projektaufbau/Svelte",id:"Projektaufbau/Svelte",title:"Svelte",description:"Svelte ist ein JavaScript-Framework f\xfcr die Frontend-Entwicklung von User Interfaces, \xe4hnlich zu React, Angular und Vue.",source:"@site/docs/03-Projektaufbau/02-Svelte.md",sourceDirName:"03-Projektaufbau",slug:"/Projektaufbau/Svelte",permalink:"/docs/Projektaufbau/Svelte",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Electron",permalink:"/docs/Projektaufbau/Electron"},next:{title:"Powershell-Erweiterbarkeit",permalink:"/docs/Entwicklung/Powershell-Erweiterbarkeit"}},u={},d=[{value:"Struktur",id:"struktur",level:3},{value:"Svelte kompilieren",id:"svelte-kompilieren",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Svelte ist ein JavaScript-Framework f\xfcr die Frontend-Entwicklung von User Interfaces, \xe4hnlich zu React, Angular und Vue.\nDer gr\xf6\xdfte Unterschied ist allerdings, dass Svelte keine Dependencies hat. Svelte compiliert den Code zu vanilla HTML, Javascript und CSS.\nSomit ist es m\xf6glich, dass ein Svelte Projekt auf jedem Webserver lauff\xe4hig ist.  "),(0,a.kt)("p",null,"Ein weiterer Vorteil ist, dass man in Svelte mehrere M\xf6glichkeiten der Programmierung hat und dass Svelte die Interaktion von Javascript mit dem DOM (Document Object Model der HTML-Seite) erleichtert."),(0,a.kt)("p",null,"So kann man, falls Svelte einem nicht zusagt, auch einfach nur mit HTML, JavaScript und CSS programmieren."),(0,a.kt)("p",null,"Svelte bietet au\xdferdem ein sehr gutes, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://svelte.dev/tutorial/basics"},"interaktives Tutorial"))," und eine gute ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://svelte.dev/docs"},"Dokumentation")),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hier ein Beispiel:"),"  "),(0,a.kt)("p",null,"The Svelte Way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="example.svelte"',title:'"example.svelte"'},"<script>\nvar counter=0\n\nfunction add(){\n    counter++\n}\n<\/script>\n\n<p>Der Counter ist: {counter} </p>\n<button on:click={add}>+</button>\n")),(0,a.kt)("p",null,"Ohne Svelte:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="example.html"',title:'"example.html"'},'<!DOCTYPE html>\n<html>\n    <head>\n        <script>\n            function add(){\n                let element = document.getElementById("counter")\n                element.innerHTML = parseInt(element.innerHTML) + 1\n            }\n        <\/script>\n    </head>\n    <body>\n        <div>Der Counter ist:<p id="counter">0</p></div>\n        <button onclick="add()">+</button>\n    </body>\n</html>\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"struktur"},"Struktur"),(0,a.kt)("p",null,"In dem Ordner ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," liegen alle Svelte-Dateien. Diese sind f\xfcr die UI zust\xe4ndig."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helpdeskinfo\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 App.svelte\n    \u251c\u2500\u2500 main.js\n    \u251c\u2500\u2500 Popup.svelte\n    \u251c\u2500\u2500 popups/\n    |   \u2514\u2500\u2500 AppInfo.svelte\n    \u251c\u2500\u2500 Sidebar.svelte\n    \u251c\u2500\u2500 store.js\n    \u251c\u2500\u2500 Table.svelte\n    \u251c\u2500\u2500 TableData.svelte\n    \u2514\u2500\u2500 TableEntry.svelte\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"App.svelte")," ist die Haupt-Svelte-Datei. Hier werden die anderen ",(0,a.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/nested-components"},"Svelte-Komponenten")," geladen.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"main.js")," dies ist eine Datei, die standardm\xe4\xdfig durch Svelte erstellt wurde.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Popup.svelte")," ist eine Svelte-Komponente, die es erm\xf6glicht eigene Pop-Ups zu bauen.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"popups")," ist ein Ordner in dem selbsterstellte Pop-Ups gespeichert werden sollen.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"AppInfo.svelte")," ist ein Pop-Up, was auf die Popup.svelte Komponente aufbaut.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Sidebar.svelte")," ist die Sidebar rechts, enth\xe4lt die Selfservice Buttons.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"store.js")," enth\xe4lt einen ",(0,a.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/writable-stores"},"Svelte-Store"),", dieser ist zum Datenaustausch zwischen Komponenten (wird zwischen ",(0,a.kt)("strong",{parentName:"p"},"AppInfo.svelte")," und ",(0,a.kt)("strong",{parentName:"p"},"Table.svelte")," verwendet).",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Table.svelte")," enth\xe4lt die linke Seite der App (Tabelle, Suche, Buttons).",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"TableData.svelte")," ist f\xfcr die ausklappbaren Men\xfcs verantwortlich.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"TableEntry.svelte")," ist f\xfcr die einzelnen kopierbaren Daten verantwortlich.  "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"svelte-kompilieren"},"Svelte kompilieren"),(0,a.kt)("p",null,"Mit dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run svelte-build")," wird das Svelte-Projekt kompiliert.",(0,a.kt)("br",{parentName:"p"}),"\n","Der kompilierte Code ist unter ",(0,a.kt)("inlineCode",{parentName:"p"},"helpdeskinfo/public/build")," zu finden.  "),(0,a.kt)("p",null,"Unter ",(0,a.kt)("inlineCode",{parentName:"p"},"helpdeskinfo/public/")," sind ebenfalls die verwendeten Icons und die Ladeanimation in jeweils dem entsprechenden Ordner abgelegt.  "),(0,a.kt)("p",null,"(Mit ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run electron")," wird das Svelte-Projekt auch kompiliert und die App gestartet.)"))}m.isMDXComponent=!0}}]);