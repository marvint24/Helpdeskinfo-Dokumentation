"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[291],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(t),k=a,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||i;return t?r.createElement(c,l(l({ref:n},d),{},{components:t})):r.createElement(c,l({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2705:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],o={},s=void 0,p={unversionedId:"Entwicklung/Powershell-Erweiterbarkeit",id:"Entwicklung/Powershell-Erweiterbarkeit",title:"Powershell-Erweiterbarkeit",description:"Die Daten, die in auf der Startseite der App angezeigt werden, werden aus PowerShell-Skripten ermittelt.",source:"@site/docs/04-Entwicklung/01-Powershell-Erweiterbarkeit.md",sourceDirName:"04-Entwicklung",slug:"/Entwicklung/Powershell-Erweiterbarkeit",permalink:"/Helpdeskinfo-Dokumentation/docs/Entwicklung/Powershell-Erweiterbarkeit",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Svelte",permalink:"/Helpdeskinfo-Dokumentation/docs/Projektaufbau/Svelte"},next:{title:"Hinzuf\xfcgen von weiteren Buttons",permalink:"/Helpdeskinfo-Dokumentation/docs/Entwicklung/Btns"}},d={},u=[{value:"Erstellen eines neuen PowerShell Skriptes",id:"erstellen-eines-neuen-powershell-skriptes",level:2},{value:"Testung der PowerShell Skripte",id:"testung-der-powershell-skripte",level:2}],m={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Die Daten, die in auf der ",(0,i.kt)("strong",{parentName:"p"},"Startseite")," der ",(0,i.kt)("strong",{parentName:"p"},"App")," angezeigt werden, werden aus ",(0,i.kt)("strong",{parentName:"p"},"PowerShell-Skripten")," ermittelt.\nIn diesem Guide wird erkl\xe4rt, wie man diese bearbeiten kann und weitere Skripte einbinden kann.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helpdeskinfo\n\u2514\u2500\u2500 powershell\n    \u251c\u2500\u2500 Beispiel.json\n    \u251c\u2500\u2500 deviceinfo.ps1\n    \u251c\u2500\u2500 netvolume.ps1\n    \u251c\u2500\u2500 printer.ps1\n    \u251c\u2500\u2500 PSTool.psm1\n    \u251c\u2500\u2500 result.json\n    \u251c\u2500\u2500 summary.ps1\n    \u251c\u2500\u2500 user.ps1\n    \u2514\u2500\u2500 volume.ps1\n")),(0,i.kt)("p",null,"Beim Start der App werden alle .ps1 Dateien aus dem ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell")," Ordner ausgef\xfchrt. Diese geben die ermittelten Daten als JSON an die App zur\xfcck.  "),(0,i.kt)("p",null,"In der ",(0,i.kt)("inlineCode",{parentName:"p"},"Beispiel.json")," ist ein Beispiel der JSON Struktur zu finden, die sp\xe4ter innerhalb der App verwendet wird."),(0,i.kt)("h2",{id:"erstellen-eines-neuen-powershell-skriptes"},"Erstellen eines neuen PowerShell Skriptes"),(0,i.kt)("p",null,"Der Name eines Skriptes kann frei entschieden werden und muss mit ",(0,i.kt)("inlineCode",{parentName:"p"},".ps1")," enden."),(0,i.kt)("p",null,"Jedes Skript sollte diesen grundlegenden Aufbau haben:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'$ErrorActionPreference="Stop" #Bei Fehlern wird das Skript beendet\nImport-Module "$PSScriptRoot\\PSTool.psm1" #Importieren des PS-Moduls, das die JSON Struktur aus PS-Objekten erstellt\n\n# Der Programmablauf sollte innerhalb eines try/catch-Blocks sein\ntry{   \n\n    # <----------------------------------------\x3e\n    # Hier der Alogrithmus zum Erheben der Daten\n    # <----------------------------------------\x3e\n\n    # Senden der Daten an die App\n    SendJsonData -CategoryName $categoryName -Position $position -Expanded $expanded -HashTable $PSObj\n\n}catch{\n    HandleError ($error[0] | Out-String) #Bei einem Fehler wird dieser mit der HandleError-Funktion behandelt\n}\n')),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Funktion")," ",(0,i.kt)("inlineCode",{parentName:"p"},"SendJsonData")," besitzt folgende Parameter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-CategoryName"),": Name der Kategorie, die angezeigt werden soll."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-Position"),": Position der Kategorie in der Liste.  ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Bitte hierbei beachten, dass die Position nicht bereits von einer anderen Kategorie benutzt wird.  ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-Expanded"),": Ist die Kategorie bereits aufgeklappt?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-HashTable"),": Das PS-Objekt, das die Daten der Kategorie enth\xe4lt.  ")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Funktion")," ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleError")," wird aufgerufen, wenn ein Fehler auftritt. Argument ist der letzte Fehler (als String konvertiert).  "),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Hier ein ",(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'$ErrorActionPreference="Stop"\nImport-Module "$PSScriptRoot\\PSTool.psm1"\ntry{\n    $position=0\n    $categoryName="PC-Infos"\n    $expanded=$true\n\n    $PSObj=[ordered]@{  #Ordered beachtet die Reihenfolge\n        "Testwert"="Test123";\n        "Testwert2"="Test456";\n    }    \n\n    SendJsonData -CategoryName $categoryName -Position $position -Expanded $expanded -HashTable $PSObj\n\n}catch{\n    HandleError ($error[0] | Out-String)\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unter ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell/Beispiel.json")," ist ein Beispiel, wie das Endergebnis aussehen sollte.")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Wichtig!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bitte keine Passw\xf6rter in Klartext in den Skripten verwenden."))),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("p",null,"M\xf6glichkeiten der ",(0,i.kt)("strong",{parentName:"p"},"Zuweisung"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'#Direkte Zuweisung in den {} Klammern\n$PSObj=[ordered]@{  \n    "Testwert"="Test123";\n} \n\n#Mit dem += Operator\n$PSObj=[ordered]@{}\n$PSObj+=@{"Testwert"="Test123"}\n\n#Durch Angabe des Keys in [] Klammern\n$PSObj=[ordered]@{}\n$PSObj["Testwert"]="Test123"\n\n#Mit einem .\n$PSObj=[ordered]@{}\n$PSObj.Testwert="Test123"\n')),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Die ",(0,i.kt)("inlineCode",{parentName:"p"},"AddArrayValue")," ",(0,i.kt)("strong",{parentName:"p"},"Funktion")," kann verwendet werden, um einem Key ein Array als Wert zuzuweisen.",(0,i.kt)("br",{parentName:"p"}),"\n","Die Funktion besitzt folgende Parameter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-Expanded"),": Ist die Kategorie bereits aufgeklappt?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-HashTable"),": Das PS-Objekt, das die Daten der Kategorie enth\xe4lt.  ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'$ErrorActionPreference="Stop"\nImport-Module "$PSScriptRoot\\PSTool.psm1"\ntry{\n    $position=0\n    $categoryName="PC-Infos"\n    $expanded=$true\n\n    #Ge\xe4ndeter Teil\n    #<-------------------------------------------------\x3e\n    $cpu=Get-CimInstance Win32_Processor -Property *\n    $CPUArray=[ordered]@{\n            "Geschwindigkeit"=$cpu.MaxClockSpeed;\n            "Hersteller"=$cpu.Manufacturer;\n            "Kerne"=$cpu.NumberOfCores;\n    }\n    #<-------------------------------------------------\x3e\n\n    $PSObj=[ordered]@{\n        "Testwert"="Test123";\n        "Testwert2"="Test456";\n        "CPU"=AddArrayValue -Expanded $false -HashTable $CPUArray #<======\n    }    \n\n    SendJsonData -CategoryName $categoryName -Position $position -Expanded $expanded -HashTable $PSObj\n\n}catch{\n    HandleError ($error[0] | Out-String)\n}\n\n')),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"testung-der-powershell-skripte"},"Testung der PowerShell Skripte"),(0,i.kt)("p",null,"Zun\xe4chst sollte getestet werden, ob die Skripte richtig ausgef\xfchrt werden k\xf6nnen.\nDazu kann man einfach das Skript starten. In der Konsole wird dann das Ergebnis des Skriptes angezeigt."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"PS-Skripte testen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Mit ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"npm run test-ps"))," werden alle PowerShell Skripte getestet und es wird ein Ergebnis ausgegeben."))),(0,i.kt)("img",{src:"/img/helpdeskinfo/tests.png",alt:"Testergebnisse",width:"500"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Es wird au\xdferdem eine Datei mit den Ergebnis der PS-Skripte unter ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell/result.json")," gespeichert.")),(0,i.kt)("p",null,"Wenn alle Testergebnisse ",(0,i.kt)("strong",{parentName:"p"},"OK")," sind, wurde alles richtig gemacht.\ud83e\udd19"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Error-Logs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Es werden au\xdferdem alle Errors geloggt. Man findet diese, wenn man in der App auf das ",(0,i.kt)("strong",{parentName:"p"},"?-Icon")," in der ",(0,i.kt)("strong",{parentName:"p"},"Titelleiste")," klickt und dann auf den Button ",(0,i.kt)("strong",{parentName:"p"},"Fehleraufzeichnung")))))}k.isMDXComponent=!0}}]);