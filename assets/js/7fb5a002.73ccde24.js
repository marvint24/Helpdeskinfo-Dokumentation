"use strict";(self.webpackChunkhelpdesk_doku=self.webpackChunkhelpdesk_doku||[]).push([[349],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var s=2;s<i;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={title:"Hinzuf\xfcgen von weiteren Buttons"},p=void 0,a={unversionedId:"Entwicklung/Btns",id:"Entwicklung/Btns",title:"Hinzuf\xfcgen von weiteren Buttons",description:"Zum Hinzuf\xfcgen von weiteren Buttons, muss man die Datei helpdeskinfo/src/Sidebar.svelte bearbeiten.",source:"@site/docs/04-Entwicklung/02-Btns.md",sourceDirName:"04-Entwicklung",slug:"/Entwicklung/Btns",permalink:"/Helpdeskinfo-Dokumentation/docs/Entwicklung/Btns",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Hinzuf\xfcgen von weiteren Buttons"},sidebar:"tutorialSidebar",previous:{title:"Powershell-Erweiterbarkeit",permalink:"/Helpdeskinfo-Dokumentation/docs/Entwicklung/Powershell-Erweiterbarkeit"},next:{title:"Electronegativity",permalink:"/Helpdeskinfo-Dokumentation/docs/Entwicklung/Electronegativity"}},l={},s=[],u={toc:s};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Zum Hinzuf\xfcgen von weiteren Buttons, muss man die Datei ",(0,o.kt)("inlineCode",{parentName:"p"},"helpdeskinfo/src/Sidebar.svelte")," bearbeiten.",(0,o.kt)("br",{parentName:"p"}),"\n","Au\xdferdem sollte man vorher ",(0,o.kt)("a",{parentName:"p",href:"/docs/Projektaufbau/Electron"},"Electron")," und ",(0,o.kt)("a",{parentName:"p",href:"/docs/Projektaufbau/Svelte"},"Svelte")," gelesen haben."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Sidebar.svelte"',title:'"Sidebar.svelte"'},'<script>\nimport {popupComponentStore} from "./store.js"\n\nfunction openSupport(){\n    api.open_supportSite()\n}\n\n// Hier Button Funktionalit\xe4t einf\xfcgen\n<\/script>\n\n\n<section id="sidebar">\n    <div class="logo-container">\n        <img class="logo selctfalse" src="./icon/logo.svg" alt="logo">\n    </div>\n    \n    <div class="scrollable">\n        <button on:click="{openSupport}" title="\xd6ffnet das BeyondTrust Supportportal">Support Sitzung</button>\n        \x3c!--Hier den neuen Button einbinden--\x3e\n    </div>\n\n</section>\n[...]\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Falls man ein Pop-Up-Fenster wie in ",(0,o.kt)("inlineCode",{parentName:"p"},"AppInfo.svelte")," ben\xf6tigt, kann man die ",(0,o.kt)("inlineCode",{parentName:"p"},"Popup.svelte")," Komponente daf\xfcr benutzen.",(0,o.kt)("br",{parentName:"p"}),"\n","Wenn man unter ",(0,o.kt)("inlineCode",{parentName:"p"},"helpdeskinfo/src/popups")," eine Komponente namens ",(0,o.kt)("inlineCode",{parentName:"p"},"Test12.svelte")," hat, sieht die Anpassung so aus:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Popup.svelte"',title:'"Popup.svelte"'},'<script>\n    import AppInfo from "./popups/AppInfo.svelte"\n    // Die Komponente importieren\n    import Test12 from "./popups/Test12.svelte"\n    // In das imported Objekt speichern\n    const imported = {AppInfo,Test12}\n    [...]\n<\/script>\n[...]\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Sidebar.svelte"',title:'"Sidebar.svelte"'},'<script>\nimport {popupComponentStore} from "./store.js"\n\nfunction openSupport(){\n    api.open_supportSite()\n}\n\n// Funktion, die das Pop-Up \xf6ffnet\nfunction showTest12(){\n    $popupComponentStore = null\n    $popupComponentStore = "Test12"\n}\n\n<\/script>\n\n\n<section id="sidebar">\n    <div class="logo-container">\n        <img class="logo selctfalse" src="./icon/logo.svg" alt="logo">\n    </div>\n    \n    <div class="scrollable">\n        <button on:click="{openSupport}" title="\xd6ffnet das BeyondTrust Supportportal">Support Sitzung</button>\n        \x3c!--Neuer Button--\x3e\n        <button on:click="{showTest12}" title="\xd6ffnet Test12 Pop-Up">Test12</button>\n    </div>\n\n</section>\n[...]\n\n')))}c.isMDXComponent=!0}}]);