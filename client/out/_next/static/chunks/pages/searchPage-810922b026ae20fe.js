(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[594],{6476:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/searchPage",function(){return t(9200)}])},9200:function(n,e,t){"use strict";t.r(e);var r=t(2729),i=t(5893),s=t(7294),a=t(7066),l=t(508),c=t(381),o=t.n(c);function d(){let n=(0,r._)(["\n  body {\n    background-color: #1a1a2e;\n    color: #fff;\n    font-family: 'Arial', sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n  }\n"]);return d=function(){return n},n}function u(){let n=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 90%;\n  max-width: 900px;\n  background-color: #222831;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  margin: 20px;\n"]);return u=function(){return n},n}function h(){let n=(0,r._)(["\n  color: #e94560;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  font-size: 2em;\n"]);return h=function(){return n},n}function x(){let n=(0,r._)(["\n  color: #e94560;\n  margin-top: 20px;\n  margin-bottom: 10px;\n"]);return x=function(){return n},n}function f(){let n=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background-color: #16213e;\n  padding: 20px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n"]);return f=function(){return n},n}function j(){let n=(0,r._)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 10px 0;\n  flex-wrap: wrap;\n"]);return j=function(){return n},n}function p(){let n=(0,r._)(["\n  font-weight: bold;\n  color: #00adb5;\n  min-width: 150px;\n"]);return p=function(){return n},n}function m(){let n=(0,r._)(["\n  word-break: break-all;\n  color: #eeeeee;\n"]);return m=function(){return n},n}function g(){let n=(0,r._)(["\n  color: #e94560;\n"]);return g=function(){return n},n}let b=(0,l.vJ)(d()),_=l.ZP.div(u()),y=l.ZP.h1(h());l.ZP.h2(x());let N=l.ZP.div(f()),w=l.ZP.div(j()),P=l.ZP.div(p()),k=l.ZP.div(m()),A=l.ZP.div(g()),v=n=>{let{transaction:e,timestamp:t}=n;if(!e)return(0,i.jsx)(A,{children:"Transaction data not available."});console.log("Transaction Data:",e);let r=t?o().unix(t).format("MMMM Do YYYY, h:mm:ss a"):"N/A",s=e.gas?parseInt(21e3,10):"N/A";console.log(parseInt(e.gas,10));let a=e.gasPrice?parseInt(8e9,10):"N/A",l="N/A"!==s&&"N/A"!==a?s*a/1e18:"N/A";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{children:"Transaction Details"}),(0,i.jsxs)(N,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(P,{children:"Hash:"}),(0,i.jsx)(k,{children:e.hash})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(P,{children:"Block Number:"}),(0,i.jsx)(k,{children:e.blockNumber||"N/A"})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(P,{children:"From:"}),(0,i.jsx)(k,{children:e.from})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(P,{children:"To:"}),(0,i.jsx)(k,{children:e.to||"Contract Creation"})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(P,{children:"Value:"}),(0,i.jsxs)(k,{children:[e.value?e.value/1e18:"N/A"," Ether"]})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(P,{children:"Gas Used:"}),(0,i.jsx)(k,{children:s})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(P,{children:"Gas Price:"}),(0,i.jsxs)(k,{children:["N/A"!==a?a/1e9:"N/A"," Gwei"]})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(P,{children:"Gas Cost:"}),(0,i.jsxs)(k,{children:["N/A"!==l?l.toFixed(6):"N/A"," Ether"]})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(P,{children:"Date:"}),(0,i.jsx)(k,{children:r})]})]})]})},Z=n=>{let{address:e,balance:t}=n;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{children:"Address Details"}),(0,i.jsxs)(N,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(P,{children:"Address:"}),(0,i.jsx)(k,{children:e})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(P,{children:"Balance:"}),(0,i.jsxs)(k,{children:[t/1e18," Ether"]})]})]})]})},E="U9ZR3EP6E9VZ2KGXQDM9JP5YDAXP9SB2Z5",D=n=>{let{query:e}=n,[t,r]=(0,s.useState)(null),[l,c]=(0,s.useState)(null),[o,d]=(0,s.useState)(!0),u="address"===e.type,h=e.id;return((0,s.useEffect)(()=>{(async()=>{let n;n=u?"https://api.etherscan.io/api?module=account&action=balance&address=".concat(h,"&tag=latest&apikey=").concat(E):"https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=".concat(h,"&apikey=").concat(E);try{let e=await a.Z.get(n);if(u)r({balance:e.data.result,address:h});else{console.log(n);let t=e.data.result,i=t.blockNumber,s="https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=".concat(i,"&boolean=true&apikey=").concat(E),l=await a.Z.get(s);r(t),c(parseInt(l.data.result.timestamp,16))}}catch(n){console.error("Error fetching data:",n),r(null)}finally{d(!1)}})()},[h,u]),o)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{}),(0,i.jsx)(_,{children:(0,i.jsx)(A,{children:"Loading..."})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{}),(0,i.jsx)(_,{children:u?(0,i.jsx)(Z,{address:null==t?void 0:t.address,balance:null==t?void 0:t.balance}):(0,i.jsx)(v,{transaction:t,timestamp:l})})]})};D.getInitialProps=n=>{let{query:e}=n;return{query:e}},e.default=D}},function(n){n.O(0,[885,130,888,774,179],function(){return n(n.s=6476)}),_N_E=n.O()}]);