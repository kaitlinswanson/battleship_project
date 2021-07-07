document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".grid-user"),t=document.querySelector(".grid-computer"),n=document.querySelector(".grid-display"),s=document.querySelectorAll(".ship"),r=document.querySelector(".destroyer-container"),i=document.querySelector(".submarine-container"),o=document.querySelector(".cruiser-container"),c=document.querySelector(".battleship-container"),a=document.querySelector(".carrier-container"),d=document.getElementById("start"),l=document.getElementById("rotate"),u=document.getElementById("turn"),m=document.getElementById("message");let L=!0,h=!1,g="user";const p=[],f=[],E=10;function v(e,t,n){for(let s=0;s<n*n;s++){const n=document.createElement("div");n.dataset.id=s,e.appendChild(n),t.push(n)}}v(e,p,E),v(t,f,E);const M=[{name:"destroyer",directions:[[0,1],[0,E]]},{name:"submarine",directions:[[0,1,2],[0,E,20]]},{name:"cruiser",directions:[[0,1,2],[0,E,20]]},{name:"battleship",directions:[[0,1,2,3],[0,E,20,30]]},{name:"carrier",directions:[[0,1,2,3,4],[0,E,20,30,40]]}];function b(e){let t=Math.floor(Math.random()*e.directions.length),n=e.directions[t];0===t&&(direction=1),1===t&&(direction=10);let s=Math.abs(Math.floor(Math.random()*f.length-e.directions[0].length*direction));const r=n.some((e=>f[s+e].classList.contains("taken"))),i=n.some((e=>(s+e)%E==9)),o=n.some((e=>(s+e)%E==0));r||i||o?b(e):n.forEach((t=>f[s+t].classList.add("taken",e.name)))}let y,k,T;function H(){k=this,T=this.childNodes.length}function I(e){e.preventDefault()}function S(e){e.preventDefault()}function Y(){console.log("drag leave")}function q(){let e=k.lastChild.id,t=e.slice(0,-2);console.log(t);let s=parseInt(e.substr(-1)),r=s+parseInt(this.dataset.id),i=[0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93].splice(0,10*s),o=[99,98,97,96,95,94,93,92,91,90,89,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60].splice(0,10*s);if(selectedShipIndex=parseInt(y.substr(-1)),r-=selectedShipIndex,console.log(r),L&&!i.includes(r))for(let e=0;e<T;e++)p[parseInt(this.dataset.id)-selectedShipIndex+e].classList.add("taken",t);else{if(L||o.includes(r))return;for(let e=0;e<T;e++)p[parseInt(this.dataset.id)-selectedShipIndex+E*e].classList.add("taken",t)}n.removeChild(k)}function C(){console.log("dragend")}function x(){h||("user"===g&&(u.innerHTML="Your Turn!",f.forEach((e=>e.addEventListener("click",(function(t){!function(e){e.classList.contains("boom")||(e.classList.contains("destroyer")&&B++,e.classList.contains("submarine")&&D++,e.classList.contains("cruiser")&&w++,e.classList.contains("battleship")&&A++,e.classList.contains("carrier")&&O++),e.classList.contains("taken")?e.classList.add("boom"):e.classList.add("miss"),z(),g="computer",x()}(e)}))))),"computer"===g&&(u.innerHTML="Computers Turn!",setTimeout(j,1e3)))}b(M[0]),b(M[1]),b(M[2]),b(M[3]),b(M[4]),l.addEventListener("click",(function(){return L?(r.classList.toggle("destroyer-container-vertical"),i.classList.toggle("submarine-container-vertical"),o.classList.toggle("cruiser-container-vertical"),c.classList.toggle("battleship-container-vertical"),a.classList.toggle("carrier-container-vertical"),void(L=!1)):L?void 0:(r.classList.toggle("destroyer-container"),i.classList.toggle("submarine-container"),o.classList.toggle("cruiser-container"),c.classList.toggle("battleship-container"),a.classList.toggle("carrier-container"),void(L=!0))})),s.forEach((e=>e.addEventListener("dragstart",H))),p.forEach((e=>e.addEventListener("dragstart",H))),p.forEach((e=>e.addEventListener("dragover",I))),p.forEach((e=>e.addEventListener("dragenter",S))),p.forEach((e=>e.addEventListener("dragleave",Y))),p.forEach((e=>e.addEventListener("drop",q))),p.forEach((e=>e.addEventListener("dragend",C))),s.forEach((e=>e.addEventListener("mousedown",(e=>{y=e.target.id})))),d.addEventListener("click",x);let B=0,D=0,w=0,A=0,O=0,W=0,G=0,N=0,R=0,V=0;function j(){let e=Math.floor(Math.random()*p.length);p[e].classList.contains("boom")?j():(p[e].classList.add("boom"),p[e].classList.contains("destroyer")&&W++,p[e].classList.contains("submarine")&&G++,p[e].classList.contains("cruiser")&&N++,p[e].classList.contains("battleship")&&R++,p[e].classList.contains("carrier")&&V++,z()),g="user",u.innerHTML="Your Turn"}function z(){2===B&&(console.log("working"),m.innerHTML="You sunk the computers destroyer",B=10),3===D&&(m.innerHTML="You sunk the computers submarine",D=10),3===w&&(m.innerHTML="You sunk the computers cruiser",w=10),4===A&&(m.innerHTML="You sunk the computers battleship",A=10),5===O&&(m.innerHTML="You sunk the computers carrier",O=10),2===W&&(m.innerHTML="You sunk the computers destroyer",cpuDestroyreCount=10),3===G&&(m.innerHTML="You sunk the computers submarine",G=10),3===N&&(m.innerHTML="You sunk the computers cruiser",N=10),4===R&&(m.innerHTML="You sunk the computers battleship",R=10),5===V&&(m.innerHTML="You sunk the computers carrier",V=10),B+D+w+A+O===50&&(m.innerHTML="You Win!",F()),W+G+N+R+V===50&&(m.innerHTML="Computer Wins!",F())}function F(){h=!0,d.removeEventListener("click",x),u.innerHTML="GAME OVER"}}));