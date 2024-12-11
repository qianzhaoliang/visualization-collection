"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[8009],{8009:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(96540),n=a(6442),l=a(65633),o=a.n(l);const c={container:"KillPlanetGame_container__vvfOM",startBtn:"KillPlanetGame_startBtn__FPFMD",continueBtn:"KillPlanetGame_continueBtn__5B77g",restartBtn:"KillPlanetGame_restartBtn__fkzEb",gamepause:"KillPlanetGame_gamepause__zAhE9",gameover:"KillPlanetGame_gameover__UP574",scoreBox:"KillPlanetGame_scoreBox__6Sndm",pauseBtn:"KillPlanetGame_pauseBtn__WWb15"};var i=a(74848);let s=2.5,u=0,f=0,d=0,m=0;var v=function(e){return e[e.toPlay=0]="toPlay",e[e.playing=1]="playing",e[e.pause=2]="pause",e[e.gameover=3]="gameover",e}(v||{}),p=function(e){return e[e.player=0]="player",e[e.bullet=1]="bullet",e[e.planet=2]="planet",e[e.particle=3]="particle",e}(p||{});const h=()=>{const e=(0,n.A)(),t=(0,r.useRef)(null),a=(0,r.useRef)(null),l=(0,r.useRef)(null),h=(0,r.useRef)(null),[g,y]=(0,r.useState)(v.toPlay),b=(0,r.useRef)(v.toPlay),[x,M]=(0,r.useState)(0),_=e=>{e.fillStyle="rgba(0, 0, 0, .2)",e.fillRect(0,0,u,f)},G=e=>{const{ctx:t}=e;_(t)},C=e=>{const{globuleList:t}=e,a=t.filter((e=>{const{id:t,alpha:a,x:r,y:n,radius:l}=e;return(t.role!==p.particle||0!==a)&&(t.role!==p.bullet||!(r<-l||n<-l||r>u+l||n>f+l))}));e.updateGlobuleList(a)},P=e=>{const{inCollisionGlobule:t,inCollisionGlobuleList:r}=e;if(t)for(let e=0,t=r.length;e<t;e++){var n;if(r[e].id.role===p.planet)return null===(n=a.current)||void 0===n||n.stop(),y(v.gameover),void(b.current=v.gameover)}},B=e=>{const{inCollisionGlobule:t,inCollisionGlobuleList:r}=e;if(a.current&&t)for(let t=0,n=r.length;t<n;t++){const n=r[t],{id:l,x:o,y:c,vx:i,vy:s,radius:u,color:f}=n;if(l.role===p.planet){let t=!1;u-16>10?(t=!0,M(x+100)):M(x+250);const r=a.current.globuleList.filter((t=>t!==e&&t!==n));if(t){const e=a.current.createGlobule({id:{role:p.planet},initX:o,initY:c,radius:u-16,color:f,vx:i,vy:s,receiveOutForce:!1,receiveWallForce:!1});r.unshift(e)}for(let e=0;e<8*u;e++){const e=(Math.random()-.5)*(8*Math.random()),t=(Math.random()-.5)*(8*Math.random()),n=a.current.createGlobule({id:{role:p.particle},initX:o,initY:c,radius:4*Math.random(),color:f,alphaChangeV:-.02,vx:e,vy:t,moveLossV:.03,receiveOutForce:!1,receiveWallForce:!1});r.unshift(n)}return void a.current.updateGlobuleList(r)}}},j=()=>{u=0,f=0,d=0,m=0;const e=document.getElementById("myCanvas2");if(e){if(0!==x&&M(0),s=2.5,!t.current)return;{const{offsetWidth:e,offsetHeight:a,offsetLeft:r,offsetTop:n}=t.current;u=e,f=a,d=r,m=n}e.width=u,e.height=f;const r=e.getContext("2d");_(r);const n=new(o())(r,e,[{id:{role:p.player},initX:u/2,initY:f/2,radius:20,color:"#ffffff",fixedPos:!0,receiveOutForce:!1,onlyCheckCollision:!0,afterCalculateNextFrameGlobule:P}],{beforeDrawGlobules:G,afterDrawGlobules:C});a.current=n}};(0,r.useEffect)((()=>(j(),()=>{var e;null===(e=a.current)||void 0===e||e.stop(),l.current&&clearInterval(l.current),h.current&&clearInterval(h.current)})),[]);return(0,i.jsxs)("div",{className:c.container,ref:t,onMouseDown:e=>{if(g!==v.playing||!a.current)return;const t=Math.atan2(e.clientY-m-f/2,e.clientX-d-u/2),r=5*Math.cos(t),n=5*Math.sin(t),l=a.current.createGlobule({id:{role:p.bullet},initX:u/2,initY:f/2,radius:5,color:"#ffffff",vx:r,vy:n,receiveWallForce:!1,receiveOutForce:!1,onlyCheckCollision:!0,afterCalculateNextFrameGlobule:B});a.current.globuleList.unshift(l)},style:{backgroundColor:[v.toPlay].includes(g)?"#000":"transparent"},children:[(0,i.jsx)("canvas",{id:"myCanvas2",children:e.formatMessage({id:"common.browserTooLow"})}),g===v.toPlay&&(0,i.jsx)("button",{className:c.startBtn,onClick:()=>{y(v.playing),b.current=v.playing,a.current&&(a.current.start(),l.current&&(clearInterval(l.current),l.current=0),l.current=window.setInterval((()=>{if(b.current!==v.playing||!a.current)return;const e=20*Math.random()+15,t="hsl(".concat(360*Math.random(),", 50%, 50%)");let r,n;Math.random()<.5?(r=Math.random()<.5?0-e:u+e,n=Math.random()*f+e):(r=Math.random()*u+e,n=Math.random()<.5?0-e:f+e);const l=Math.atan2(f/2-n,u/2-r),o=Math.cos(l)*s,c=Math.sin(l)*s,i=a.current.createGlobule({id:{role:p.planet},initX:r,initY:n,radius:e,color:t,vx:o,vy:c,receiveOutForce:!1,receiveWallForce:!1});a.current.globuleList.unshift(i)}),1500),h.current&&(clearInterval(h.current),h.current=0),h.current=window.setInterval((function(){s+=1}),2e4))},children:e.formatMessage({id:"page.canvasDynamicEffect.startGame"})}),g!==v.toPlay&&(0,i.jsxs)("div",{className:c.scoreBox,children:[(0,i.jsxs)("span",{children:[e.formatMessage({id:"page.canvasDynamicEffect.score"}),"："]}),(0,i.jsx)("span",{className:c.score,children:x})]}),[v.playing,v.pause].includes(g)&&(0,i.jsx)("div",{className:c.pauseBtn,onClick:()=>{var e;g===v.playing&&(y(v.pause),b.current=v.pause,null===(e=a.current)||void 0===e||e.stop())},children:e.formatMessage({id:"page.canvasDynamicEffect.pause"})}),g===v.pause&&(0,i.jsxs)("div",{className:c.gamepause,children:[(0,i.jsx)("h1",{children:e.formatMessage({id:"page.canvasDynamicEffect.gameHasPaused"})}),(0,i.jsx)("button",{className:c.continueBtn,onClick:()=>{var e;y(v.playing),b.current=v.playing,null===(e=a.current)||void 0===e||e.start()},children:e.formatMessage({id:"page.canvasDynamicEffect.continueTheGame"})})]}),g===v.gameover&&(0,i.jsxs)("div",{className:c.gameover,children:[(0,i.jsxs)("h1",{children:[e.formatMessage({id:"page.canvasDynamicEffect.score"}),"：",(0,i.jsx)("span",{className:c.finallyScore,children:x})]}),(0,i.jsx)("button",{className:c.restartBtn,onClick:()=>{y(v.toPlay),b.current=v.toPlay,j()},children:e.formatMessage({id:"page.canvasDynamicEffect.restart"})})]})]})}}}]);