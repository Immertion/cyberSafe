(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{5511:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return s(8190)}])},8190:function(e,a,s){"use strict";s.r(a);var d=s(5893),t=s(9554),o=s.n(t),n=s(7294),l=s(1664),r=s.n(l),i=s(1163);a.default=()=>{let[e,a]=(0,n.useState)(""),[s,t]=(0,n.useState)(""),[l,c]=(0,n.useState)(""),[u,x]=(0,n.useState)(""),[m,b]=(0,n.useState)(""),[p,j]=(0,n.useState)(""),g=(0,i.useRouter)(),y=async a=>{var d,t,o;if(a.preventDefault(),d=document.getElementById("error_message"),s!==u?(d.textContent="Passwords don't match",d.style.display="block",!1):(d.style.display="none",!0)){document.getElementById("loadingBackground").style.display="flex";try{let a=await fetch("http://localhost:8080/sign-up",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:l,mail:e,password:s})});(console.log(a),a.ok)?(console.log("Login success"),document.getElementById("modalBackground").style.display="flex",document.getElementById("modalBackground").addEventListener("click",function(e){e.target===this&&(this.style.display="none")})):(t=a.status,o=document.getElementById("error_message"),400==t?(o.textContent="Account already exists",o.style.display="block"):o.style.display="none",console.log("Login failed"));let d=await a.json();j(d.id),document.getElementById("loadingBackground").style.display="none"}catch(e){console.error("Failed to submit form",e)}}},h=async e=>{e.preventDefault();try{var a,s;let e=await fetch("http://localhost:8080/activation/check/"+p,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:m})});e.ok&&(localStorage.setItem("activateAcc",!0),g.push("auth")),a=e.status,s=document.getElementById("error_message_code"),400==a?(s.textContent="Invalid code",s.style.display="block"):s.style.display="none"}catch(e){console.error("Failed to submit form",e)}};return(0,d.jsxs)("div",{className:"jsx-2dbd125aa9295765 body",children:[(0,d.jsxs)("div",{className:"jsx-2dbd125aa9295765 container",children:[(0,d.jsx)("h1",{className:"jsx-2dbd125aa9295765 title",children:"Sign up"}),(0,d.jsx)("p",{className:"jsx-2dbd125aa9295765 description",children:"Please enter your credentials:"}),(0,d.jsxs)("form",{onSubmit:y,className:"jsx-2dbd125aa9295765",children:[(0,d.jsx)("input",{type:"text",name:"username",placeholder:"Login",required:!0,value:l,onChange:e=>c(e.target.value),className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("br",{className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("input",{type:"password",name:"password",placeholder:"Password",required:!0,value:s,onChange:e=>t(e.target.value),className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("br",{className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("input",{type:"password",name:"password",placeholder:"Repeat password",required:!0,value:u,onChange:e=>x(e.target.value),className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("br",{className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("input",{type:"email",name:"email",placeholder:"Email",required:!0,value:e,onChange:e=>a(e.target.value),className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("br",{className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("button",{type:"submit",className:"jsx-2dbd125aa9295765 start-btn",children:"Enter"})]}),(0,d.jsx)("br",{className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("div",{id:"error_message",className:"jsx-2dbd125aa9295765"}),(0,d.jsxs)("p",{className:"jsx-2dbd125aa9295765 register-invitation",children:["If you already have an account,",(0,d.jsx)(r(),{href:"auth",children:" click here "})," to log in."]})]}),(0,d.jsx)("div",{id:"modalBackground",className:"jsx-2dbd125aa9295765 modal-background",children:(0,d.jsxs)("div",{id:"codeModal",className:"jsx-2dbd125aa9295765 modal",children:[(0,d.jsx)("p",{className:"jsx-2dbd125aa9295765 codeActiv",children:"Please enter your code:"}),(0,d.jsxs)("form",{onSubmit:h,className:"jsx-2dbd125aa9295765",children:[(0,d.jsx)("input",{type:"text",id:"codeInput",placeholder:"Code",required:!0,value:m,onChange:e=>b(e.target.value),className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("br",{className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("div",{id:"error_message_code",className:"jsx-2dbd125aa9295765"}),(0,d.jsx)("button",{id:"confirmCode",className:"jsx-2dbd125aa9295765 button",children:"Enter"})]})]})}),(0,d.jsx)("div",{id:"loadingBackground",className:"jsx-2dbd125aa9295765 loading-background",children:(0,d.jsx)("div",{className:"jsx-2dbd125aa9295765 spinner"})}),(0,d.jsx)(o(),{id:"2dbd125aa9295765",children:'input[type="text"].jsx-2dbd125aa9295765,input[type="email"].jsx-2dbd125aa9295765,input[type="password"].jsx-2dbd125aa9295765{width:50%;padding:10px;margin-bottom:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid#ddd;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type="text"].jsx-2dbd125aa9295765:focus,input[type="email"].jsx-2dbd125aa9295765:focus,input[type="password"].jsx-2dbd125aa9295765:focus{border-color:#007bff;outline:none}.codeActiv.jsx-2dbd125aa9295765{font-size:1.4em;margin-bottom:1em;color:#afaabe}'})]})}}},function(e){e.O(0,[664,353,888,774,179],function(){return e(e.s=5511)}),_N_E=e.O()}]);