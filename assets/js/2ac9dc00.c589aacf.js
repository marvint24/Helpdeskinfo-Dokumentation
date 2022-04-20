"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23],{3905:function(e,n,i){i.d(n,{Zo:function(){return c},kt:function(){return o}});var l=i(7294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function d(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,l)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?d(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function I(e,n){if(null==e)return{};var i,l,t=function(e,n){if(null==e)return{};var i,l,t={},d=Object.keys(e);for(l=0;l<d.length;l++)i=d[l],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)i=d[l],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var Z=l.createContext({}),m=function(e){var n=l.useContext(Z),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},c=function(e){var n=m(e.components);return l.createElement(Z.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},r=l.forwardRef((function(e,n){var i=e.components,t=e.mdxType,d=e.originalType,Z=e.parentName,c=I(e,["components","mdxType","originalType","parentName"]),r=m(i),o=t,b=r["".concat(Z,".").concat(o)]||r[o]||s[o]||d;return i?l.createElement(b,a(a({ref:n},c),{},{components:i})):l.createElement(b,a({ref:n},c))}));function o(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var d=i.length,a=new Array(d);a[0]=r;var I={};for(var Z in n)hasOwnProperty.call(n,Z)&&(I[Z]=n[Z]);I.originalType=e,I.mdxType="string"==typeof e?e:t,a[1]=I;for(var m=2;m<d;m++)a[m]=i[m];return l.createElement.apply(null,a)}return l.createElement.apply(null,i)}r.displayName="MDXCreateElement"},7698:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return Z},default:function(){return o},frontMatter:function(){return I},metadata:function(){return m},toc:function(){return s}});var l=i(7462),t=i(3366),d=(i(7294),i(3905)),a=["components"],I={},Z=void 0,m={unversionedId:"Projektaufbau/Electron",id:"Projektaufbau/Electron",title:"Electron",description:"Electron ist ein Framework, um Desktop Applikationen mit Webtechnologien (JavaScript, HTML und CSS) bauen zu k\xf6nnen.",source:"@site/docs/03-Projektaufbau/01-Electron.md",sourceDirName:"03-Projektaufbau",slug:"/Projektaufbau/Electron",permalink:"/Helpdeskinfo-Dokumentation/docs/Projektaufbau/Electron",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Funktionsumfang",permalink:"/Helpdeskinfo-Dokumentation/docs/Einstieg/Funktionsumfang"},next:{title:"Svelte",permalink:"/Helpdeskinfo-Dokumentation/docs/Projektaufbau/Svelte"}},c={},s=[{value:"Main.js",id:"mainjs",level:3},{value:"Renderer",id:"renderer",level:3},{value:"Preload.js",id:"preloadjs",level:3},{value:"Kommunikationsablauf",id:"kommunikationsablauf",level:2},{value:"Inter-Process Communication",id:"inter-process-communication",level:3},{value:"Context Isolation",id:"context-isolation",level:3},{value:"Struktur",id:"struktur",level:2},{value:"App starten",id:"app-starten",level:2}],r={toc:s};function o(e){var n=e.components,I=(0,t.Z)(e,a);return(0,d.kt)("wrapper",(0,l.Z)({},r,I,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://www.electronjs.org/de/docs/latest/"},"Electron")," ist ein Framework, um Desktop Applikationen mit Webtechnologien (JavaScript, HTML und CSS) bauen zu k\xf6nnen.\nElectron benutzt Chromium zum Rendern von Views und Node.js zum Ausf\xfchren von JavaScript mit Zugriff auf Systemfunktionen. Das Framework erm\xf6glicht dadurch die Programmierung von plattformunabh\xe4ngigen Applikationen."),(0,d.kt)("h3",{id:"mainjs"},"Main.js"),(0,d.kt)("p",null,"Startpunkt jeder Electron App ist der ",(0,d.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/tutorial/process-model#the-main-process"},"Main-Process"),".",(0,d.kt)("br",{parentName:"p"}),"\n","Dieser ist der Einstiegspunkt der App, verwaltet die Views und hat Zugriff auf Systemfunktionen. Au\xdferdem hat man hier die M\xf6glichkeit Node Packages zu importieren."),(0,d.kt)("h3",{id:"renderer"},"Renderer"),(0,d.kt)("p",null,"Ein ",(0,d.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/tutorial/process-model#the-renderer-process"},"Renderer-Process")," ist verantwortlich f\xfcr ein BrowserWindow (also im Endeffekt ein Fenster). Dies ist im Normalfall einfach ein HTML-Dokument, das unseren Content darstellt. Der Renderer-Process hat dieselben, stark eingeschr\xe4nkten Rechte, wie auch eine normale Website im Browser."),(0,d.kt)("h3",{id:"preloadjs"},"Preload.js"),(0,d.kt)("p",null,"Damit wir nun sicher vom Renderer auf Systemfunktionen zugreifen k\xf6nnen, ben\xf6tigen wir ein ",(0,d.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts"},"Preload-Skript"),".\nDas Preload-Skript hat eingeschr\xe4nkte Systemfunktionen, bietet allerdings eine Schnittstelle zwischen Main.js und Renderer.\nDas Preload-Skript hat sowohl Zugriff auf die DOM-Elemente des Renderers als auch auf Systemfunktionen, die man \xfcber IPC (Inter-process communication) ansprechen kann."),(0,d.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,d.kt)("div",{parentName:"div",className:"admonition-heading"},(0,d.kt)("h5",{parentName:"div"},(0,d.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,d.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,d.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,d.kt)("div",{parentName:"div",className:"admonition-content"},(0,d.kt)("p",{parentName:"div"},"Wir geben so dem Renderer so wenig Zugriffsrechte wie n\xf6tig."))),(0,d.kt)("h2",{id:"kommunikationsablauf"},"Kommunikationsablauf"),(0,d.kt)("h3",{id:"inter-process-communication"},"Inter-Process Communication"),(0,d.kt)("p",null,"Das IPC Modul von Electron erm\xf6glicht es Nachrichten zwischen Main.js und Renderer (Preload.js) zu versenden.  "),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"Ein Beispiel: (Renderer to main)"),(0,d.kt)("br",{parentName:"p"}),"\n","Im Preload-Skript k\xf6nnen wir auf einem Kanal Nachrichten versenden.\nIm Main.js h\xf6ren wir diesen Kanal ab und reagieren mit einer Callback-Funktion darauf.",(0,d.kt)("br",{parentName:"p"}),"\n",(0,d.kt)("img",{alt:"App",src:i(2657).Z,width:"488",height:"156"}),"  "),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.js"',title:'"main.js"'},"const {app, BrowserWindow, ipcMain} = require('electron')\nconst path = require('path')\n\napp.whenReady().then(() => {\n    var mainWindow = new BrowserWindow({\n        webPreferences: {\n            preload: path.join(__dirname, 'preload.js')\n        }\n    })\n\n    mainWindow.loadFile('index.html')\n\n    ipcMain.on('test12', (event, message) => {\n        //Do stuff (mit Zugriff auf Systemfunktionen)\n        console.log(message)\n    })\n\n})\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="preload.js"',title:'"preload.js"'},"const { ipcRenderer } = require('electron')\n\nlet message='Hello world'\nipcRenderer.send('test12', message)\n")),(0,d.kt)("p",null,'Es w\xfcrde nun in der Konsole "Hello world" ausgegeben werden.'),(0,d.kt)("hr",null),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"Weitere Funktionen sind in der ",(0,d.kt)("a",{parentName:"strong",href:"https://www.electronjs.org/docs/latest/tutorial/ipc"},"offiziellen Dokumentation")," von Electron zu finden.")," Dort sind auch die folgenden weiteren Szenarien beschrieben:",(0,d.kt)("br",{parentName:"p"}),"\n","Renderer to main (two-way)",(0,d.kt)("br",{parentName:"p"}),"\n","Main to renderer",(0,d.kt)("br",{parentName:"p"}),"\n","Renderer to renderer  "),(0,d.kt)("br",null),(0,d.kt)("p",null,"Hier sind nochmals weitere hilfreiche Verlinkungen:",(0,d.kt)("br",{parentName:"p"}),"\n",(0,d.kt)("a",{parentName:"p",href:"https://www.electronjs.org/de/docs/latest/api/ipc-main"},"ipcMain"),(0,d.kt)("br",{parentName:"p"}),"\n",(0,d.kt)("a",{parentName:"p",href:"https://www.electronjs.org/de/docs/latest/api/ipc-renderer"},"ipcRenderer"),(0,d.kt)("br",{parentName:"p"}),"\n",(0,d.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/web-contents#contentssendchannel-args"},"webContents.send"),(0,d.kt)("br",{parentName:"p"}),"\n",(0,d.kt)("a",{parentName:"p",href:"https://www.electronjs.org/de/docs/latest/api/browser-window"},"BrowserWindow"),"  "),(0,d.kt)("hr",null),(0,d.kt)("h3",{id:"context-isolation"},"Context Isolation"),(0,d.kt)("p",null,"Die ",(0,d.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/tutorial/context-isolation"},"Context Isolation")," ist ein Security-Feature von Electron, das die oben genannten Prozesse jeweils in einem separaten Kontext unterteilt.  "),(0,d.kt)("p",null,"Normalerweise k\xf6nnen Nachrichten direkt \xfcber IPC zwischen Main.js und Renderer versendet werden. Durch die Context Isolation ist dies allerdings nicht mehr m\xf6glich. Der Renderer-Prozess wird nochmals vom System abgeschirmt und es wird verhindert, dass im Renderer Module \xfcber ",(0,d.kt)("inlineCode",{parentName:"p"},"require()")," geladen werden k\xf6nnen."),(0,d.kt)("p",null,"Damit wir nun eine Kommunikation zwischen Main.js und Renderer aufbauen k\xf6nnen, m\xfcssen wir im Preload-Skript die IPC Funktionen im Form von einer API dem Renderer freigeben.  "),(0,d.kt)("p",null,(0,d.kt)("img",{alt:"App",src:i(7975).Z,width:"685",height:"156"})," "),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"main.js siehe oben"),"  "),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="preload.js"',title:'"preload.js"'},"const { contextBridge, ipcRenderer } = require('electron')\n\ncontextBridge.exposeInMainWorld('api123', {\n    sendTest: (message) => ipcRenderer.send('test12', message)\n})\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="renderer.html"',title:'"renderer.html"'},"<html>\n    <head>\n        <script>\n            api123.sendTest('Hello World')\n        <\/script>\n    </head>\n    <body>\n        <p>Hier steht ein Text</p>\n    </body>\n</html>\n\n")),(0,d.kt)("p",null,'Nun wird wieder "Hello world" in der Konsole ausgegeben.'),(0,d.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,d.kt)("div",{parentName:"div",className:"admonition-heading"},(0,d.kt)("h5",{parentName:"div"},(0,d.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,d.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,d.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,d.kt)("div",{parentName:"div",className:"admonition-content"},(0,d.kt)("p",{parentName:"div"},'Statt "Hello world" auszugeben kann man hier zum Beispiel das System neu starten, Files einlesen, ...'))),(0,d.kt)("hr",null),(0,d.kt)("h2",{id:"struktur"},"Struktur"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"helpdeskinfo\n\u2514\u2500\u2500 electron\n    \u251c\u2500\u2500 checkPS1.test.js\n    \u251c\u2500\u2500 collectPS1Data.js\n    \u251c\u2500\u2500 main.js\n    \u251c\u2500\u2500 preload.js\n    \u2514\u2500\u2500 sidebar/\n")),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"checkPS1.test.js")," Jest Tests zu den PowerShell-Skripts und collectPS1Data.js.",(0,d.kt)("br",{parentName:"p"}),"\n",(0,d.kt)("inlineCode",{parentName:"p"},"collectPS1Data.js")," startet die PowerShell-Skripts parallel und erstellt das JSON-Objekt, dass in der App dargestellt wird.",(0,d.kt)("br",{parentName:"p"}),"\n",(0,d.kt)("inlineCode",{parentName:"p"},"main.js")," der Main-Prozess.",(0,d.kt)("br",{parentName:"p"}),"\n",(0,d.kt)("inlineCode",{parentName:"p"},"preload.js")," das Preload-Skript.",(0,d.kt)("br",{parentName:"p"}),"\n",(0,d.kt)("inlineCode",{parentName:"p"},"sidebar")," enth\xe4lt zus\xe4tzliche Skripte f\xfcr die Selfservice-Funktionen."),(0,d.kt)("hr",null),(0,d.kt)("h2",{id:"app-starten"},"App starten"),(0,d.kt)("p",null,"Mit dem Befehl ",(0,d.kt)("inlineCode",{parentName:"p"},"npm run electron")," wird die App gestartet.  "),(0,d.kt)("p",null,"Mit ",(0,d.kt)("inlineCode",{parentName:"p"},"STRG+R")," kann die App neugeladen werden."))}o.isMDXComponent=!0},7975:function(e,n){n.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI2ODVweCIgaGVpZ2h0PSIxNTZweCIgdmlld0JveD0iLTAuNSAtMC41IDY4NSAxNTYiIGNvbnRlbnQ9IiZsdDtteGZpbGUmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7TW1hZmhpZUNlU2N6SGRxa1A0Y1MmcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsmZ3Q7MVZoYmM5c29GUDQxbXRsOWlFWUl5NWZIMms2ek85UHVaSktIYmZ0R0pDeXhRY0tEY0d6MzF5OVlJQW5oUzZ6YUU5Y1BIczRCRHVoY1BqN3c0Q3pmUEhDMHpMNnlCRk12REpLTkIrZGVHSTdEUVA0cnhiWlNETUNvVXFTY0pKVUtOSXBuOGhOcnBaNlhya2lDUzJ1Z1lJd0tzclNWTVNzS0hBdExoemhuYTN2WWdsRjcxU1ZLc2FONGpoRjF0ZitTUkdTVmRoUUVqZjR2VE5KTXJ4eWFqaGNVdjZhY3JRcTluQmZDeGU1WGRlZkltTkxqeXd3bGJOMVN3WHNQempoam9tcmxteG1teXJQR2E5Vzh6d2Q2NjIxelhJajNURUQzYjNQKzVla0hvU0hNbi81NVdPUi9yKzVnWmVVTjBaVjJ4eVBIbEtIRS82L1UyeFpiNDZuZHgySmxMdkRnZEowUmdaK1hLRmE5YTVrYVVwZUpuRW9KeUthN1BiM2pOOHdGM3JSVWVyc1BtT1ZZOEswY29udkRzWjZ5TlRHcHhIVVRKbUM4bTdWQ05OUTZwRE1qclMwMzdwRU43YUV6dkJVNTNuSjhoSXZrazBwS0tjVVVsU1dKYmJmWVBwUys0ZHR2U3ZBakkzNXY5ODAzbHJRMVVpSlRXQy9LdU1oWXlncEU3eHZ0RkcrSXFBeUhrUlpydzdMZDJGV0NNWHN3Wm1xOW94RnJoU1RhRXhHams3bUZCSG16SzI5Zm1QUUtqNHpJbmRRSkFZZjdFOEpZS05tS3gxaFBhcGRDeHc0WUhMY2pFRSt4Y096SXdLSnRhOWhTRFNpUGJEZll1OHloWFhXSHcrUER1eDloRDVlTmFydE50dGZoNmw4QUk2Y0F5REora2ptUE9lWitLUnQveEJtU09FMExsR012bkNWSW9EL2RJcEhwOUFXOXlIUEVxZzFFU1Zxb3dwSHBoN2xVS0tnZ0Vxay82WTZjSk1rdXV6a3V5VS8wc3JPbkVsZEhRaHFQcGw0MDM1dktSeXU2aTBuMWNhTVhzVEI3SDFZRlBvamcyQXJJSGJoSTBvTVJ0TXgyTGJERm9zU2lFL3VMUkh0NEd1N1VBYmg4UDlTZjdkYkpqWjBBNExSTGZ2R1VQQnFKMDBmbmgza21kRHp6RlpGaVJ5T0dWQzQrZmVHeWxZcjZvMXN1a3g4bHJnY0ZhQ1ZZV2RGT1pib1VuTDNpR2FOTTJwMFhyRkJXRm9UU2p1cmlvVEV3SDlubDdLYjB2aE0wdkZwR0J4Y25OV2VRazFHYm5JQis1S1E2OVU4WGJYV3FueWJETjBKMlFBZjdRTlNYN1VTMkljTVVMazEzUUlldWcxTjhaM0IwL0hVWURIQVJYRktZSFZTeG9rTmVKTnhRZGN1N1pRSlRsKzhOTTVnN01KN1lkcS9DWWR3VDZHd2dNOEFFV3Fpa3IyWUhjYW0rdzkwRmZnQ0FkWTN6bzBaeDZDcW5wRWZNaWZ4U2xUTXRyT3NBVVQvd2d5NzR3WStFdGNpOG41aXE3NTVzNzRXMVFkZ3hCTjRIYXoweXkzMGxrYldsU011VUV4V2ozNGpQN01FSko2c09Rc1JnWUx0ODRuS1h5Wlc0eXdXZVh1cENCWDRBUjNhZERvYkRQblZhRTVrejhLSmZiUTl2cll6SG5WU1k5S3ppd2NUdnZIdklRdmJWTTJ2OWc5ZXFhL2VDYTk0eW5PVHFjYXY3cFZLTFJyWi9yM2p6bFdMekNsMTVzWG5vaC9mL0F3PT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyI+PGRlZnMvPjxnPjxyZWN0IHg9IjI3NSIgeT0iNDciIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogNzdweDsgbWFyZ2luLWxlZnQ6IDI3NnB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+UHJlbG9hZC5qczwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzMzUiIHk9IjgxIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UHJlbG9hZC5qczwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSAzNTUgNDcgTCAyOTUgNDcgTCAyOTUgNyBMIDEzNSA3IEwgMTM1IDQwLjYzIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAxMzUgNDUuODggTCAxMzEuNSAzOC44OCBMIDEzNSA0MC42MyBMIDEzOC41IDM4Ljg4IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjhweDsgbWFyZ2luLWxlZnQ6IDM5NnB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMXB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij5pcGNSZW5kZXJlci5zZW5kKGNoYW5uZWxuYW1lLGRhdGEpPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjM5NiIgeT0iMzEiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMXB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5pcGNSZW5kZXJlci5zZW5kKGNoYW5uZWxuYW1lLGRhdGEpPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSI4NSIgeT0iNDciIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA3N3B4OyBtYXJnaW4tbGVmdDogMTQ1cHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogbm9uZTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPk1haW4uanM8YnIgLz48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTQ1IiB5PSI4MSIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1haW4uanMKPC90ZXh0Pjwvc3dpdGNoPjwvZz48cGF0aCBkPSJNIDE3NSAxMDcgTCAxNzUgMTQ3IEwgMzM1IDE0NyBMIDMzNSAxMTMuMzciIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PHBhdGggZD0iTSAzMzUgMTA4LjEyIEwgMzM4LjUgMTE1LjEyIEwgMzM1IDExMy4zNyBMIDMzMS41IDExNS4xMiBaIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxMjhweDsgbWFyZ2luLWxlZnQ6IDg1cHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDExcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij5pcGNNYWluLm9uKGNoYW5uZWxuYW1lLGNhbGxiYWNrKTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI4NSIgeT0iMTMxIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTFweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+aXBjTWFpbi5vbihjaGFubmVsbmFtZSxjYWxsYmFjayk8L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gMzk1IDc3IEwgNDI2LjY0IDc3LjE4IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPjxwYXRoIGQ9Ik0gNDMxLjg5IDc3LjIxIEwgNDI0Ljg3IDgwLjY3IEwgNDI2LjY0IDc3LjE4IEwgNDI0LjkxIDczLjY3IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMXB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDc3cHg7IG1hcmdpbi1sZWZ0OiA0NzlweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBub25lOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+Y29udGV4dEJyaWRnZTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI0NzkiIHk9IjgxIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Y29udGV4dEJyaWRnZTwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSA1NjQgNzcgTCA1MzMuNyA3Ni40NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48cGF0aCBkPSJNIDUyOC40NSA3Ni4zNCBMIDUzNS41MSA3Mi45NyBMIDUzMy43IDc2LjQ0IEwgNTM1LjM4IDc5Ljk3IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48cmVjdCB4PSI1NjQiIHk9IjQ3IiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA3N3B4OyBtYXJnaW4tbGVmdDogNTY1cHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogbm9uZTsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+UmVuZGVyZXI8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNjI0IiB5PSI4MSIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJlbmRlcmVyPC90ZXh0Pjwvc3dpdGNoPjwvZz48L2c+PHN3aXRjaD48ZyByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiLz48YSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC01KSIgeGxpbms6aHJlZj0iaHR0cHM6Ly93d3cuZGlhZ3JhbXMubmV0L2RvYy9mYXEvc3ZnLWV4cG9ydC10ZXh0LXByb2JsZW1zIiB0YXJnZXQ9Il9ibGFuayI+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMHB4IiB4PSI1MCUiIHk9IjEwMCUiPlZpZXdlciBkb2VzIG5vdCBzdXBwb3J0IGZ1bGwgU1ZHIDEuMTwvdGV4dD48L2E+PC9zd2l0Y2g+PC9zdmc+"},2657:function(e,n){n.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI0ODhweCIgaGVpZ2h0PSIxNTZweCIgdmlld0JveD0iLTAuNSAtMC41IDQ4OCAxNTYiIGNvbnRlbnQ9IiZsdDtteGZpbGUmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7TW1hZmhpZUNlU2N6SGRxa1A0Y1MmcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsmZ3Q7elZqWmNwc3dGUDBhWnRxSGVCQUtkdndZTDBrN2szUXl5VU9YTnhsa1VDTVFJK1N0WDk4ckl4YUJnNVBVbWRvUEh1bm9jaVR1cG1NN2VKcHNieVhKNG5zUlV1NTRicmgxOE16eHZQRVl3YmNHZGdYZ0kxd0FrV1JoQWFFYWVHSi9xQUZkZzY1WVNIUExVQW5CRmN0c01CQnBTZ05sWVVSS3NiSE5sb0xidTJZa29oM2dLU0M4aTM1bm9Zck5XN2h1algraExJck56bDY1c0NEQmN5VEZLalhiT1I2KzJYK0s1WVNVVk1ZK2owa29OZzBJengwOGxVS29ZcFJzcDVScno1WmVLNTY3ZVdHMU9yYWtxWHJOQTJTK25zbTd4MStNZXpoNS9IYTdUTDZ1TGt5bzFvU3ZqRHNlSk9XQ2hJUGZ1VG0yMnBXZTJyOHMxWFN1Z3llYm1DbjZsSkZBcjI0Z05RQ0xWY0poaG1EWVBaNDU4WnBLUmJjTnlCejNsb3FFS3JrREU3UHFYWmxIVEdhTmpDYzNkWmhRNmQyNEVhS2h3WWpKaktoaXJ0MERBK09oTjNqTDczaXI0eU9haHRjNktXRVdjSkxuTExEZFl2c1FmQ04zUC9SazRKZlRuODIxMmRhYTdjcFpDQ2xzTmhWU3hTSVNLZUh6R3AzUUxWTUZzZWViYVVVTTQ1cFhUMHJhRjJPbTkrdU4yS1paT2QySWxCamtGbEZzYlZmZW9UQ1pIUjRFZzVOVUNZR0hoeE9pWk1qRlNnYlVQTlFzaFJZUHV1em5VVVJHVkhWNElMQmsxekRMdEVIZWMxejM0RFl2bmFwdGp2dk4yeTlobThPZ09HNmQ3Vlc0M2w4QW8wNEJzQ3g0aEp5bmtzcEJEb05QUVV5Z1QvT1VKTlR4cGlGUjVITzNTQ0NkN3NnQzdoR3JOZ2huVWFvTEI5S1BTZ0IwcTJEUXFhL05Rc0xDY0ovZGt1YnNEMW5zK1hUaW1rZ0F1VDl4L05uQlZPNnQ2SFpQcXE0YnM0blZzdy8xS25lQWZIeGxCZVFDblNUcDBRaGJ0RzBHc1Z6bVZMVmlmNUpvRDQrM08zMEJacTl2OVc5MjYvak1iZ0IwM0NYL2VFdjJSdUw0MWZuZlBPTjFQSE5QV0xxWEVVTU9tMDhXRWthUnFsNjY0VEo0S2ZWeHJZQ3NsTWdMMmFtcGN5WEZNNTBLTG9CM2xvcFVzeXdaNXkzbzVLRXAyN3h2bDNNM3BRL2RvTjZIWmJSN2NsSHpCbkV5YW9vVDlENXhVdHo2eDR1MnVOV1BpK0V6RVR1bzFmdVEvMTYxNDl0RXBWSTR0ZHhCTGJtT2p1bWR5MTc3ajFFd3FOdkJRY0xzVzVWSVcrSUYyZzNYdi9MT1djQlU1WHZHQ3VZQ1hZMXQzbE5vR0pqV1A1NEw4L3IvQ1R6L0N3PT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyI+PGRlZnMvPjxnPjxyZWN0IHg9IjI3NSIgeT0iNDciIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogNzdweDsgbWFyZ2luLWxlZnQ6IDI3NnB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+UHJlbG9hZC5qczwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzMzUiIHk9IjgxIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UHJlbG9hZC5qczwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSAzNTUgNDcgTCAyOTUgNDcgTCAyOTUgNyBMIDEzNSA3IEwgMTM1IDQwLjYzIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAxMzUgNDUuODggTCAxMzEuNSAzOC44OCBMIDEzNSA0MC42MyBMIDEzOC41IDM4Ljg4IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjhweDsgbWFyZ2luLWxlZnQ6IDM5NnB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMXB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij5pcGNSZW5kZXJlci5zZW5kKGNoYW5uZWxuYW1lLGRhdGEpPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjM5NiIgeT0iMzEiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMXB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5pcGNSZW5kZXJlci5zZW5kKGNoYW5uZWxuYW1lLGRhdGEpPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSI4NSIgeT0iNDciIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA3N3B4OyBtYXJnaW4tbGVmdDogMTQ1cHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogbm9uZTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPk1haW4uanM8YnIgLz48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTQ1IiB5PSI4MSIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1haW4uanMKPC90ZXh0Pjwvc3dpdGNoPjwvZz48cGF0aCBkPSJNIDE3NSAxMDcgTCAxNzUgMTQ3IEwgMzM1IDE0NyBMIDMzNSAxMTMuMzciIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PHBhdGggZD0iTSAzMzUgMTA4LjEyIEwgMzM4LjUgMTE1LjEyIEwgMzM1IDExMy4zNyBMIDMzMS41IDExNS4xMiBaIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxMjhweDsgbWFyZ2luLWxlZnQ6IDg1cHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDExcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij5pcGNNYWluLm9uKGNoYW5uZWxuYW1lLGNhbGxiYWNrKTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI4NSIgeT0iMTMxIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTFweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+aXBjTWFpbi5vbihjaGFubmVsbmFtZSxjYWxsYmFjayk8L3RleHQ+PC9zd2l0Y2g+PC9nPjwvZz48c3dpdGNoPjxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPjxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL3d3dy5kaWFncmFtcy5uZXQvZG9jL2ZhcS9zdmctZXhwb3J0LXRleHQtcHJvYmxlbXMiIHRhcmdldD0iX2JsYW5rIj48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwcHgiIHg9IjUwJSIgeT0iMTAwJSI+Vmlld2VyIGRvZXMgbm90IHN1cHBvcnQgZnVsbCBTVkcgMS4xPC90ZXh0PjwvYT48L3N3aXRjaD48L3N2Zz4="}}]);