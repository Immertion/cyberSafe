(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{6084:function(e){!function(){var a=[,,,,];function t(){var e=a[0]^a[0]<<11;return a[0]=a[1],a[1]=a[2],a[2]=a[3],a[3]=a[3]^a[3]>>19^e^e>>8,(a[3]>>>0)/2147483648}function o(){return"hsl("+Math.floor(360*t())+","+(60*t()+40)+"%,"+(t()+t()+t()+t())*25+"%)"}function s(e){var t={};return t.size=e.size||8,t.scale=e.scale||4,t.seed=e.seed||Math.floor(1e16*Math.random()).toString(16),t.color=e.color||o(),t.bgcolor=e.bgcolor||o(),t.spotcolor=e.spotcolor||o(),!function(e){for(var t=0;t<a.length;t++)a[t]=0;for(var t=0;t<e.length;t++)a[t%4]=(a[t%4]<<5)-a[t%4]+e.charCodeAt(t)}(t.seed),t}function r(e,a){var e=s(e||{}),o=function(e){for(var a=Math.ceil(e/2),o=e-a,s=[],r=0;r<e;r++){for(var n=[],d=0;d<a;d++)n[d]=Math.floor(2.3*t());var i=n.slice(0,o);i.reverse(),n=n.concat(i);for(var l=0;l<n.length;l++)s.push(n[l])}return s}(e.size),r=Math.sqrt(o.length);a.width=a.height=e.size*e.scale;var n=a.getContext("2d");n.fillStyle=e.bgcolor,n.fillRect(0,0,a.width,a.height),n.fillStyle=e.color;for(var d=0;d<o.length;d++)if(o[d]){var i=Math.floor(d/r),l=d%r;n.fillStyle=1==o[d]?e.color:e.spotcolor,n.fillRect(l*e.scale,i*e.scale,e.scale,e.scale)}return a}var n={create:function(e){var e=s(e||{}),a=document.createElement("canvas");return r(e,a),a},render:r};e.exports=n,"undefined"!=typeof window&&(window.blockies=n)}()},5511:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return t(8190)}])},8190:function(e,a,t){"use strict";t.r(a);var o=t(5893),s=t(9554),r=t.n(s),n=t(7294),d=t(1664),i=t.n(d),l=t(1163),c=t(6084),u=t.n(c);a.default=()=>{let[e,a]=(0,n.useState)(""),[t,s]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[x,b]=(0,n.useState)(""),[p,f]=(0,n.useState)(""),[m,g]=(0,n.useState)(""),[h,j]=(0,n.useState)(""),y=(0,l.useRouter)(),w=async a=>{var o,s,r;if(a.preventDefault(),o=document.getElementById("error_message"),t!==x?(o.textContent="Passwords don't match",o.style.display="block",!1):(o.style.display="none",!0)){document.getElementById("loadingBackground").style.display="flex";try{let a=await fetch("http://192.168.0.5/sign-up",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:d,mail:e,password:t})});(console.log(a),a.ok)?(console.log("Login success"),document.getElementById("modalBackground").style.display="flex",document.getElementById("modalBackground").addEventListener("click",function(e){e.target===this&&(this.style.display="none")})):(s=a.status,r=document.getElementById("error_message"),400==s?(r.textContent="Account already exists",r.style.display="block"):r.style.display="none",console.log("Login failed"));let o=await a.json();g(o.id),document.getElementById("loadingBackground").style.display="none"}catch(e){console.error("Failed to submit form",e)}}(0,l.useEffect)(()=>{(async()=>{try{let e=await fetch("http://192.168.0.5/wallet/addressETC",{method:"GET",headers:{Authorization:"Bearer "+token}});if(!e.ok)throw Error("Network response was not ok "+e.statusText);let a=await e.json();j(a)}catch(e){console.error("There was a problem with your fetch operation:",e)}})()})},v=async e=>{e.preventDefault();var a,t,o=u().create({seed:h,size:10,scale:8}).toDataURL();try{let e=await fetch("http://192.168.0.5/activation/check/"+m,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:p,icon_url:o})});e.ok&&(localStorage.setItem("activateAcc",!0),y.replace("auth")),a=e.status,t=document.getElementById("error_message_code"),400==a?(t.textContent="Invalid code",t.style.display="block"):t.style.display="none"}catch(e){console.error("Failed to submit form",e)}};return(0,o.jsxs)("div",{className:"jsx-5a0a395d1fbae06a body",children:[(0,o.jsxs)("div",{className:"jsx-5a0a395d1fbae06a container",children:[(0,o.jsx)("h1",{className:"jsx-5a0a395d1fbae06a title",children:"Sign up"}),(0,o.jsx)("p",{className:"jsx-5a0a395d1fbae06a description",children:"Please enter your credentials:"}),(0,o.jsxs)("form",{onSubmit:w,className:"jsx-5a0a395d1fbae06a",children:[(0,o.jsx)("input",{type:"text",name:"username",placeholder:"Login",required:!0,value:d,onChange:e=>c(e.target.value),className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("br",{className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("input",{type:"password",name:"password",placeholder:"Password",required:!0,value:t,onChange:e=>s(e.target.value),className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("br",{className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("input",{type:"password",name:"password",placeholder:"Repeat password",required:!0,value:x,onChange:e=>b(e.target.value),className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("br",{className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("input",{type:"email",name:"email",placeholder:"Email",required:!0,value:e,onChange:e=>a(e.target.value),className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("br",{className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("button",{type:"submit",className:"jsx-5a0a395d1fbae06a start-btn",children:"Enter"})]}),(0,o.jsx)("br",{className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("div",{id:"error_message",className:"jsx-5a0a395d1fbae06a"}),(0,o.jsxs)("p",{className:"jsx-5a0a395d1fbae06a register-invitation",children:["If you already have an account,",(0,o.jsx)(i(),{href:"auth",children:" click here "})," to log in."]})]}),(0,o.jsx)("div",{id:"modalBackground",className:"jsx-5a0a395d1fbae06a modal-background",children:(0,o.jsxs)("div",{id:"codeModal",className:"jsx-5a0a395d1fbae06a modal",children:[(0,o.jsx)("p",{className:"jsx-5a0a395d1fbae06a codeActiv",children:"Please enter your code:"}),(0,o.jsxs)("form",{onSubmit:v,className:"jsx-5a0a395d1fbae06a",children:[(0,o.jsx)("input",{type:"text",id:"codeInput",placeholder:"Code",required:!0,value:p,onChange:e=>f(e.target.value),className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("br",{className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("div",{id:"error_message_code",className:"jsx-5a0a395d1fbae06a"}),(0,o.jsx)("button",{id:"confirmCode",className:"jsx-5a0a395d1fbae06a button",children:"Enter"})]})]})}),(0,o.jsx)("div",{id:"loadingBackground",className:"jsx-5a0a395d1fbae06a loading-background",children:(0,o.jsx)("div",{className:"jsx-5a0a395d1fbae06a spinner"})}),(0,o.jsx)(r(),{id:"5a0a395d1fbae06a",children:'input[type="text"].jsx-5a0a395d1fbae06a,input[type="email"].jsx-5a0a395d1fbae06a,input[type="password"].jsx-5a0a395d1fbae06a{width:50%;padding:10px;margin-bottom:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid#ddd;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type="text"].jsx-5a0a395d1fbae06a:focus,input[type="email"].jsx-5a0a395d1fbae06a:focus,input[type="password"].jsx-5a0a395d1fbae06a:focus{border-color:#007bff;outline:none}.codeActiv.jsx-5a0a395d1fbae06a{font-size:1.4em;margin-bottom:1em;color:#afaabe}.modal-background.jsx-5a0a395d1fbae06a{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7);z-index:1000;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.modal.jsx-5a0a395d1fbae06a{background:#232323;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;width:400px;-webkit-box-shadow:0 4px 10px rgba(0,0,0,.5);-moz-box-shadow:0 4px 10px rgba(0,0,0,.5);box-shadow:0 4px 10px rgba(0,0,0,.5);text-align:center;color:#fff}.modal.jsx-5a0a395d1fbae06a input[type="text"].jsx-5a0a395d1fbae06a{width:95%;margin-top:10px;padding:10px;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-bottom:20px}.modal.jsx-5a0a395d1fbae06a button.jsx-5a0a395d1fbae06a{padding:10px 20px;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-color:#6a5acd;color:#fff;cursor:pointer;margin-top:10px}.modal.jsx-5a0a395d1fbae06a button.jsx-5a0a395d1fbae06a:hover{background-color:#7b68ee}'})]})}},1163:function(e,a,t){e.exports=t(3035)}},function(e){e.O(0,[902,888,774,179],function(){return e(e.s=5511)}),_N_E=e.O()}]);