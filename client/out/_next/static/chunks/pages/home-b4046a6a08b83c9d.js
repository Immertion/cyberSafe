(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{5732:function(e,c,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return s(2674)}])},2674:function(e,c,s){"use strict";s.r(c);var a=s(5893),n=s(9554),t=s.n(n),r=s(1664),i=s.n(r),o=s(1955),d=s(1163),l=s(7294);c.default=()=>{(0,d.useRouter)();let e=o.Z.get("jwtToken"),[c,s]=(0,l.useState)("");return console.log(e),(0,l.useEffect)(()=>{fetch("http://localhost:8080/wallet/etc").then(e=>{if(!e.ok)throw Error("Network response was not ok "+e.statusText);return e.json()}).then(e=>{s(Math.round(1e3*e.balanceUsd)/1e3+" usd"),document.getElementById("spinner").style.display="none"}).catch(e=>{console.error("There was a problem with your fetch operation:",e)})}),(0,a.jsxs)("div",{className:"jsx-c484d0c84241ca6f body",children:[(0,a.jsx)("header",{className:"jsx-c484d0c84241ca6f",children:(0,a.jsxs)("div",{className:"jsx-c484d0c84241ca6f navbar",children:[(0,a.jsx)("div",{className:"jsx-c484d0c84241ca6f logo ",children:"CryptoSafe"}),(0,a.jsxs)("div",{className:"jsx-c484d0c84241ca6f nav-links",children:[(0,a.jsx)(i(),{href:"home",className:"active",children:"Home"}),(0,a.jsx)(i(),{href:"#",children:"Wallets"}),(0,a.jsx)(i(),{href:"#",children:"Transactions"}),(0,a.jsx)(i(),{href:"#",children:"Security"})]}),(0,a.jsxs)("div",{className:"jsx-c484d0c84241ca6f search-bar",children:[(0,a.jsx)("input",{type:"search",placeholder:"Search",className:"jsx-c484d0c84241ca6f"}),(0,a.jsx)("button",{type:"submit",className:"jsx-c484d0c84241ca6f",children:"\uD83D\uDD0D"})]})]})}),(0,a.jsx)("div",{className:"jsx-c484d0c84241ca6f container_home",children:(0,a.jsxs)("div",{className:"jsx-c484d0c84241ca6f split-container",children:[(0,a.jsxs)("div",{className:"jsx-c484d0c84241ca6f left-pane",children:[(0,a.jsx)("div",{className:"jsx-c484d0c84241ca6f title",children:"Wallet"}),(0,a.jsx)("div",{className:"jsx-c484d0c84241ca6f description",children:"Your personal wallet management system"}),(0,a.jsxs)("div",{className:"jsx-c484d0c84241ca6f balance",children:[(0,a.jsx)("h2",{className:"jsx-c484d0c84241ca6f",children:"Total balance"}),(0,a.jsxs)("p",{className:"jsx-c484d0c84241ca6f",children:[(0,a.jsx)("div",{id:"spinner",className:"jsx-c484d0c84241ca6f spinner"}),c]})]}),(0,a.jsx)("button",{className:"jsx-c484d0c84241ca6f start-btn",children:"Send"}),(0,a.jsx)("div",{className:"jsx-c484d0c84241ca6f register-invitation"})]}),(0,a.jsx)("div",{className:"jsx-c484d0c84241ca6f right-pane",children:(0,a.jsxs)("div",{className:"jsx-c484d0c84241ca6f transactions",children:[(0,a.jsx)("h2",{className:"jsx-c484d0c84241ca6f h-tran",children:"Transactions history"}),(0,a.jsx)("div",{className:"jsx-c484d0c84241ca6f chart"})]})})]})}),(0,a.jsx)("footer",{className:"jsx-c484d0c84241ca6f",children:(0,a.jsx)("div",{className:"jsx-c484d0c84241ca6f footer-container",children:(0,a.jsx)("p",{className:"jsx-c484d0c84241ca6f",children:"CryptoSafe"})})}),(0,a.jsx)(t(),{id:"c484d0c84241ca6f",children:".container_home.jsx-c484d0c84241ca6f{text-align:left;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#222;padding:2em;max-width:1200px;width:100%;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.7);-moz-box-shadow:0 4px 16px rgba(0,0,0,.7);box-shadow:0 4px 16px rgba(0,0,0,.7)}.h-tran.jsx-c484d0c84241ca6f{padding:20px}"})]})}},1955:function(e,c,s){"use strict";/*! js-cookie v3.0.5 | MIT */function a(e){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var a in s)e[a]=s[a]}return e}s.d(c,{Z:function(){return n}});var n=function e(c,s){function n(e,n,t){if("undefined"!=typeof document){"number"==typeof(t=a({},s,t)).expires&&(t.expires=new Date(Date.now()+864e5*t.expires)),t.expires&&(t.expires=t.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var i in t)t[i]&&(r+="; "+i,!0!==t[i]&&(r+="="+t[i].split(";")[0]));return document.cookie=e+"="+c.write(n,e)+r}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var s=document.cookie?document.cookie.split("; "):[],a={},n=0;n<s.length;n++){var t=s[n].split("="),r=t.slice(1).join("=");try{var i=decodeURIComponent(t[0]);if(a[i]=c.read(r,i),e===i)break}catch(e){}}return e?a[e]:a}},remove:function(e,c){n(e,"",a({},c,{expires:-1}))},withAttributes:function(c){return e(this.converter,a({},this.attributes,c))},withConverter:function(c){return e(a({},this.converter,c),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(c)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[664,353,888,774,179],function(){return e(e.s=5732)}),_N_E=e.O()}]);