(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[352],{4040:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transaction",function(){return a(796)}])},4363:function(e,t){"use strict";t.Z={src:"/_next/static/media/copy.b46a9453.svg",height:800,width:800,blurWidth:0,blurHeight:0}},1117:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var s=a(5893),o=a(7294),i=a(1664),n=a.n(i),r=a(9554),c=a.n(r),l=a(7066);let x="U9ZR3EP6E9VZ2KGXQDM9JP5YDAXP9SB2Z5";var d=()=>{let[e,t]=(0,o.useState)(""),[a,i]=(0,o.useState)(""),n=async()=>{if(e){let t=/^0x[a-fA-F0-9]{40}$/.test(e),a=/^0x([A-Fa-f0-9]{64})$/.test(e);if(t)try{if((await l.Z.get("https://api.etherscan.io/api?module=account&action=balance&address=".concat(e,"&tag=latest&apikey=").concat(x))).data.result){let t="https://etherscan.io/address/".concat(e);window.open(t,"_blank")}else i("Invalid wallet address.")}catch(e){i("Error validating wallet address.")}else if(a)try{if((await l.Z.get("https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=".concat(e,"&apikey=").concat(x))).data.result){let t="https://etherscan.io/tx/".concat(e);window.open(t,"_blank")}else i("Invalid transaction hash.")}catch(e){i("Error validating transaction hash.")}else i("Please enter a valid wallet address or transaction hash.")}};return(0,s.jsxs)("div",{className:"jsx-8e28e6147cadaffb search-container",children:[(0,s.jsx)("input",{type:"text",placeholder:"Search",value:e,onChange:e=>{t(e.target.value),i("")},className:"jsx-8e28e6147cadaffb"}),(0,s.jsx)("button",{onClick:n,className:"jsx-8e28e6147cadaffb",children:"\uD83D\uDD0D"}),a&&(0,s.jsx)("div",{className:"jsx-8e28e6147cadaffb error-search",children:a}),(0,s.jsx)(c(),{id:"8e28e6147cadaffb",children:".search-container.jsx-8e28e6147cadaffb{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.search-container.jsx-8e28e6147cadaffb input.jsx-8e28e6147cadaffb{padding:.5em;background-color:#333;border:1px solid#444;color:white;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;outline:none;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin-right:.5em}.search-container.jsx-8e28e6147cadaffb button.jsx-8e28e6147cadaffb{background-color:#7B2EFF;border:none;padding:.5em;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:40px;height:40px}.search-container.jsx-8e28e6147cadaffb button.jsx-8e28e6147cadaffb:hover{background-color:#9A4EFF}.error-search.jsx-8e28e6147cadaffb{position:absolute;top:100%;left:0;right:0;background-color:#f5625d;color:white;padding:.5em;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;font-size:.875em;text-align:center;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.1);-moz-box-shadow:0 2px 4px rgba(0,0,0,.1);box-shadow:0 2px 4px rgba(0,0,0,.1);-webkit-animation:fadeIn.3s ease;-moz-animation:fadeIn.3s ease;-o-animation:fadeIn.3s ease;animation:fadeIn.3s ease}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-moz-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-o-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}"})]})};function p(e){let{activeWindow:t}=e,[a,i]=(0,o.useState)(!1);return(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"navbar unselectable",children:[(0,s.jsx)("div",{className:"logo ",children:"CryptoSafe"}),(0,s.jsx)("div",{className:"menu-icon",onClick:()=>{i(!a),console.log(a)},children:"☰"}),(0,s.jsxs)("div",{className:"nav-links ".concat(a?"show-nav-links":""),children:[(0,s.jsx)(n(),{href:"home",className:"home"==t?"active":"",children:"Home"}),(0,s.jsx)(n(),{href:"wallet",className:"wallet"==t?"active":"",children:"Wallets"}),(0,s.jsx)(n(),{href:"transaction",className:"transaction"==t?"active":"",children:"Transactions"}),(0,s.jsx)(n(),{href:"security",className:"security"==t?"active":"",children:"Settings"})]}),(0,s.jsx)("div",{className:"search-bar",children:(0,s.jsx)(d,{})})]})})}},796:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var s=a(5893),o=a(9554),i=a.n(o),n=a(3595),r=a(3717),c=a(7294),l=a(1955),x=a(5675),d=a.n(x),p=a(4363),m={src:"/_next/static/media/etherscan-logo-circle.fe12855d.svg",height:123,width:123,blurWidth:0,blurHeight:0},f=a(1163),b=a(1117);let h="U9ZR3EP6E9VZ2KGXQDM9JP5YDAXP9SB2Z5",u=e=>"1"===e?"success":"0"===e?"failed":"pending";var w=()=>{let[e,t]=(0,c.useState)(""),[a,o]=(0,c.useState)(""),x=l.Z.get("jwtToken"),[w,y]=(0,c.useState)(!1),[g,j]=(0,c.useState)([]),[k,z]=(0,c.useState)(!0),[v,N]=(0,c.useState)(1),[I,E]=(0,c.useState)(0),[_,S]=(0,c.useState)(1),C=(0,f.useRouter)();(0,c.useEffect)(()=>{null==x&&C.push("auth")}),(0,c.useEffect)(()=>{(async()=>{try{let e=await fetch("http://192.168.0.5/wallet/addressETC",{method:"GET",headers:{Authorization:"Bearer "+x}});if(!e.ok)throw Error("Network response was not ok "+e.statusText);let a=await e.json();t(a),y(!0)}catch(e){console.error("There was a problem with your fetch operation:",e)}})()});let F=e=>(e/1e18).toFixed(6),P=e=>{let t=(0,n.D)(new Date(1e3*e).toISOString());return(0,r.WU)(t,"PPPppp").replace("GMT","").trim()},T=async e=>{try{await navigator.clipboard.writeText(e),o("txHash copied!"),setTimeout(()=>o(""),3e3)}catch(e){o("Failed to copy"),setTimeout(()=>o(""),3e3)}},B=async()=>{try{let e=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&YOUR_API_KEY=CG-ZGGmfKAQj2FCLiRRkhhLRtna"),t=await e.json();E(t[0].current_price)}catch(e){console.error("Error fetching ETH to USD price:",e)}},Z=async()=>{try{let t=await fetch("https://api.etherscan.io/api?module=account&action=txlist&address=".concat(e,"&startblock=0&endblock=99999999&page=").concat(0,"&offset=").concat(5,"&sort=desc&apikey=").concat(h)),a=await t.json();"1"===a.status?S(a.result.length):console.error("Failed to fetch all transactions:",a.message)}catch(e){console.error("Error fetching all transactions:",e)}},D=async t=>{z(!0);try{let a=await fetch("https://api.etherscan.io/api?module=account&action=txlist&address=".concat(e,"&startblock=0&endblock=99999999&page=").concat(t,"&offset=").concat(5,"&sort=desc&apikey=").concat(h)),s=await a.json();"1"===s.status?j(s.result||[]):console.error("Failed to fetch transactions:",s.message)}catch(e){console.error("Error fetching transactions:",e)}finally{z(!1)}};return(0,c.useEffect)(()=>{w&&(Z(),D(v),B())},[w,v]),(0,s.jsxs)("div",{className:"jsx-135448036394e366 body",children:[(0,s.jsx)(b.Z,{activeWindow:"transaction"}),(0,s.jsxs)("div",{className:"jsx-135448036394e366 container",children:[(0,s.jsx)("div",{className:"jsx-135448036394e366 transactionList",children:k?(0,s.jsx)("div",{id:"spinner",className:"jsx-135448036394e366 spinner"}):g.length>0?g.map(t=>(0,s.jsxs)("div",{className:"jsx-135448036394e366 transaction",children:[(0,s.jsx)("div",{className:"jsx-135448036394e366",children:(0,s.jsxs)("div",{className:"jsx-135448036394e366 time",children:["Date: ",P(t.timeStamp)]})}),(0,s.jsxs)("div",{className:"jsx-135448036394e366 "+((t.to.toLowerCase()===e.toLowerCase()?"amountIn":"amountOut")||""),children:[t.to.toLowerCase()===e.toLowerCase()?"+":"-",F(t.value)," ETH ($",(F(t.value)*I).toFixed(2),")"]}),(0,s.jsxs)("div",{className:"jsx-135448036394e366 fee",children:["Fee: ",F(t.gasUsed*t.gasPrice)," ETH ($",(F(t.gasUsed*t.gasPrice)*I).toFixed(2),")"]}),(0,s.jsxs)("div",{className:"jsx-135448036394e366 hash",children:[(0,s.jsxs)("span",{className:"jsx-135448036394e366",children:["txHash: ",t.hash]}),(0,s.jsx)("button",{onClick:()=>T(t.hash),className:"jsx-135448036394e366 copy-button icon-button",children:(0,s.jsx)(d(),{src:p.Z,className:"unselectable",alt:"copyIcon",width:30,height:30})})]}),(0,s.jsxs)("div",{className:"jsx-135448036394e366 "+"status ".concat(u(t.txreceipt_status)),children:["Status: ","1"===t.txreceipt_status?"Success":"0"===t.txreceipt_status?"Failed":"Pending"]}),(0,s.jsxs)("a",{href:"https://etherscan.io/tx/".concat(t.hash),target:"_blank",rel:"noopener noreferrer",className:"jsx-135448036394e366 link",children:[(0,s.jsx)(d(),{src:m,className:"unselectable Image",alt:"etherscanIcon",width:30,height:30})," Etherscan"]})]},t.hash)):(0,s.jsx)("div",{className:"jsx-135448036394e366",children:"No transactions found for this account."})}),!k&&g.length>0&&(0,s.jsxs)("div",{className:"jsx-135448036394e366 pagination",children:[(0,s.jsx)("button",{onClick:()=>N(v-1),disabled:1===v,className:"jsx-135448036394e366 pageButton",children:"\xab"}),(0,s.jsxs)("span",{className:"jsx-135448036394e366 pageInfo",children:[" Page ",v," of ",Math.ceil(_/5)," "]}),(0,s.jsx)("button",{onClick:()=>N(v+1),disabled:v>=Math.ceil(_/5),className:"jsx-135448036394e366 pageButton",children:"\xbb"})]})]}),a&&(0,s.jsx)("div",{className:"jsx-135448036394e366 notification",children:a}),(0,s.jsx)("footer",{className:"jsx-135448036394e366",children:(0,s.jsx)("div",{className:"jsx-135448036394e366 footer-container",children:(0,s.jsx)("p",{className:"jsx-135448036394e366",children:"CryptoSafe"})})}),(0,s.jsx)(i(),{id:"135448036394e366",children:".container.jsx-135448036394e366{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px;padding:20px;max-width:800px;margin:0 auto;background-color:#121212;color:white;font-family:Arial,sans-serif}.transactionList.jsx-135448036394e366{max-height:65vh;overflow-y:auto;padding-right:10px}.transaction.jsx-135448036394e366{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px;background-color:#1e1e1e;padding:20px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border:1px solid#333;margin-bottom:10px}.transaction.jsx-135448036394e366>div.jsx-135448036394e366{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.icon.jsx-135448036394e366{font-size:24px}.time.jsx-135448036394e366{font-size:16px}.status.jsx-135448036394e366{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;font-weight:bold}.status.success.jsx-135448036394e366{color:#4caf50}.status.failed.jsx-135448036394e366{color:#f44336}.status.pending.jsx-135448036394e366{color:#ff9800}.amountIn.jsx-135448036394e366{color:green;font-size:18px}.amountOut.jsx-135448036394e366{color:red;font-size:18px}.fee.jsx-135448036394e366{color:#ccc;margin-top:5px}.hash.jsx-135448036394e366{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#888}.hash.jsx-135448036394e366 span.jsx-135448036394e366{color:white;margin-right:10px;word-break:break-all}.copyButton.jsx-135448036394e366{background:none;border:none;color:white;cursor:pointer;font-size:16px;margin-left:10px}.link.jsx-135448036394e366{color:white;text-decoration:none;font-size:20px;margin-top:10px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.link.jsx-135448036394e366::before{margin-right:5px}.pagination.jsx-135448036394e366{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px}.pageButton.jsx-135448036394e366{background:#333;color:#fff;border:1px solid#555;padding:10px 20px;cursor:pointer;margin:0 5px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.pageButton.jsx-135448036394e366:disabled{cursor:not-allowed;opacity:.5}.pageInfo.jsx-135448036394e366{font-size:1em}.icon-button.jsx-135448036394e366{background:transparent;border:none;outline:none;-webkit-filter:invert(100%);filter:invert(100%);padding:0;margin:0;cursor:pointer;-webkit-transition:box-shadow.3s ease-in-out;-moz-transition:box-shadow.3s ease-in-out;-o-transition:box-shadow.3s ease-in-out;transition:box-shadow.3s ease-in-out}.copy-button.jsx-135448036394e366{cursor:pointer;-webkit-border-radius:20%;-moz-border-radius:20%;border-radius:20%}.spinner.jsx-135448036394e366{margin-left:48%}.notification.jsx-135448036394e366{position:fixed;right:20px;bottom:20px;background-color:#7B2EFF;color:white;padding:16px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2);z-index:1000;-webkit-transition:-webkit-transform.5s,opacity.5s;-moz-transition:-moz-transform.5s,opacity.5s;-o-transition:-o-transform.5s,opacity.5s;transition:-webkit-transform.5s,opacity.5s;transition:-moz-transform.5s,opacity.5s;transition:-o-transform.5s,opacity.5s;transition:transform.5s,opacity.5s;-webkit-transform:translatey(100%);-moz-transform:translatey(100%);-ms-transform:translatey(100%);-o-transform:translatey(100%);transform:translatey(100%);opacity:0;-webkit-animation:slideIn.5s forwards;-moz-animation:slideIn.5s forwards;-o-animation:slideIn.5s forwards;animation:slideIn.5s forwards}@-webkit-keyframes slideIn{from{-webkit-transform:translatey(100%);transform:translatey(100%);opacity:0}to{-webkit-transform:translatey(0);transform:translatey(0);opacity:1}}@-moz-keyframes slideIn{from{-moz-transform:translatey(100%);transform:translatey(100%);opacity:0}to{-moz-transform:translatey(0);transform:translatey(0);opacity:1}}@-o-keyframes slideIn{from{-o-transform:translatey(100%);transform:translatey(100%);opacity:0}to{-o-transform:translatey(0);transform:translatey(0);opacity:1}}@keyframes slideIn{from{-webkit-transform:translatey(100%);-moz-transform:translatey(100%);-o-transform:translatey(100%);transform:translatey(100%);opacity:0}to{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0);opacity:1}}@media(max-width:1200px){.container.jsx-135448036394e366{max-width:700px;padding:15px}}@media(max-width:768px){.container.jsx-135448036394e366{max-width:100%;padding:10px}.transaction.jsx-135448036394e366{padding:15px}.icon.jsx-135448036394e366{font-size:20px}.time.jsx-135448036394e366,.amountIn.jsx-135448036394e366,.amountOut.jsx-135448036394e366{font-size:14px}.hash.jsx-135448036394e366{font-size:12px}.copyButton.jsx-135448036394e366{font-size:14px}.link.jsx-135448036394e366{font-size:18px}.pageButton.jsx-135448036394e366{padding:8px 16px}.pageInfo.jsx-135448036394e366{font-size:.9em}.notification.jsx-135448036394e366{right:10px;bottom:10px;padding:12px;font-size:.9em}}@media(max-width:480px){.container.jsx-135448036394e366{max-width:100%;padding:5px}.transaction.jsx-135448036394e366{padding:10px}.icon.jsx-135448036394e366{font-size:18px}.time.jsx-135448036394e366,.amountIn.jsx-135448036394e366,.amountOut.jsx-135448036394e366{font-size:12px}.hash.jsx-135448036394e366{font-size:10px}.copyButton.jsx-135448036394e366{font-size:12px}.link.jsx-135448036394e366{font-size:16px}.pageButton.jsx-135448036394e366{padding:6px 12px}.pageInfo.jsx-135448036394e366{font-size:.8em}.notification.jsx-135448036394e366{right:5px;bottom:5px;padding:10px;font-size:.8em}}"})]})}}},function(e){e.O(0,[902,66,321,589,888,774,179],function(){return e(e.s=4040)}),_N_E=e.O()}]);