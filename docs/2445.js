"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[2445],{68755:(e,A,s)=>{s.d(A,{A:()=>g});var i=s(96540),t=s(73621),n=s(74848);const o=(e,A)=>{let{options:s={},renderType:o="canvas",style:g={width:"100%",height:"100%"},onHoverChange:l,onClickChange:Q,legendSelectChanged:r,onGlobalout:E}=e;const I=(0,i.useRef)(null),u=(0,i.useRef)(null);(0,i.useImperativeHandle)(A,(()=>u),[]);const B=(0,i.useCallback)((()=>{if(I.current){var e,A,i,n,g,B;const c=null===t.A||void 0===t.A?void 0:t.A.getInstanceByDom(I.current);if(u.current=c||(null===t.A||void 0===t.A?void 0:t.A.init(I.current,void 0,{renderer:o})),Q&&(null===(e=u.current)||void 0===e||e.on("click",(e=>{Q(e)}))),l&&(null===(A=u.current)||void 0===A||A.on("mousemove",(e=>{l(e)}))),r&&(null===(i=u.current)||void 0===i||i.on("legendselectchanged",(e=>{r(e)}))),"pie"===(s.series&&(null!==(n=null===(g=s.series[0])||void 0===g?void 0:g.type)&&void 0!==n?n:""))){(null==s?void 0:s.series)[0].labelLayout=e=>((e,A)=>{const s=e.labelRect.x<A.getWidth()/2,i=e.labelLinePoints;return i?(i[2][0]=s?e.labelRect.x:e.labelRect.x+e.labelRect.width,{labelLinePoints:i}):{}})(e,u.current)}E&&(null===(B=u.current)||void 0===B||B.on("globalout",E)),u.current.setOption(s)}}),[s,o]);return(0,i.useEffect)((()=>{const e=()=>{const e=null==u?void 0:u.current;e&&e.resize()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,i.useEffect)((()=>(B(),()=>{const{current:e}=u;e&&e.dispose()})),[s]),(0,n.jsx)("div",{ref:I,style:g})},g=i.forwardRef(o,{})},73621:(e,A,s)=>{s.d(A,{A:()=>b,P:()=>d});var i=s(3087),t=s(18857),n=s(76302),o=s(42981),g=s(9286),l=s(17763),Q=s(69380),r=s(74064),E=s(93809),I=s(6641),u=s(82724),B=s(14555),c=s(58688),a=s(81972),D=s(35278),G=s(30597),k=s(39539);i.Y([n.a,o.a,g.a,l.a,Q.a,r.a,E.a,I.a,B.a,c.a,a.a,D._,G.i,k.a,u.a]);const d=()=>[{type:"image",left:"center",top:"middle",z:900,style:{image:"data:image/png;base64,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",width:450,height:103,opacity:.1},silent:!0}],b=t},22003:(e,A,s)=>{s.d(A,{A:()=>B});var i=s(60346),t=s(83117),n=s(62306);const o=1e3,g=1e12,l=1e9,Q=1e6,r=Object.freeze({thousand:"K",million:"M",billion:"B",trillion:"T"}),E=/([0])\1{2}/,I=function(e){let A=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.isZero()&&!A)return"N/A";if(e.isZero()&&A)return"0";if(e.gte(g)||e.isEqualTo(g))return e.div(g).toFormat(1)+r.trillion;if((e.gte(l)||e.isEqualTo(l))&&e.lte(g))return e.div(l).toFormat(1)+r.billion;if((e.gte(Q)||e.isEqualTo(Q))&&e.lte(g)&&e.lte(l))return e.div(Q).toFormat(1)+r.million;if(e.gte(1e4))return e.div(1e3).toFormat(1)+r.thousand;if(e.gte(o)&&e.lte(1e4))return e.div(1e3).toFormat(2)+r.thousand;const s=e.toFixed().split(".")[1];return e.lte(o)&&!E.test(s)?0===e.dp()?e.toFormat(0):e.dp(4).toNumber():e.lte(o)&&E.test(s)?"".concat(e.integerValue(i.A.ROUND_DOWN),".").concat(u(s)):"N/A"},u=e=>{let A=e.toString().split(""),s=[];for(let e=1;e<=A.length&&new i.A(A[e]).isEqualTo(new i.A(A[e-1]));e++)new i.A(+A[e]).isZero()&&s.push(A[e]);return s.length<=1?A.splice(0,4).join(""):"0{".concat(s.length+1,"}").concat(A.splice(s.length+1,4).join(""))},B=function(e){let A=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,t.I)(e)||(0,n.g)(e))return"N/A";const s=new i.A(e);if(s.isNegative()){const e=I(s.absoluteValue(),A);return"N/A"===e||"0"===e?e:"-".concat(e)}return I(s,A)}}}]);