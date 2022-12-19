import{d as $n,r as q,a as jr,b as Br,c as N,i as ue,e as Pt,f as Yr,g as La,o as le,h as w,j as H,k as be,l as nt,m as Aa,u as Ye,n as Oa,T as ln,p as g,q as x,s as z,t as je,v as X,w as re,x as Ca,_ as j,y as Ur,z as v,A as Wr,B as Vr,C as Ue,D as qr,E as Ta,F as Gr,G as Xr,H as cn,I as Pa,J as Kr,K as un,L as Ae,M as ve,N as F,O as oe,P as xe,Q as V,R as I,S as It,U as K,V as ee,W as zn,X as Zr,Y as Qr,Z as Jr,$ as kt,a0 as xt,a1 as Ia,a2 as eo,a3 as to,a4 as no,a5 as ao,a6 as ro,a7 as oo,a8 as io}from"./framework-e3c4e60b.js";const so="modulepreload",lo=function(e){return"/"+e},Mn={},St=function(t,n,a){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=lo(o),o in Mn)return;Mn[o]=!0;const i=o.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(!!a)for(let c=r.length-1;c>=0;c--){const f=r[c];if(f.href===o&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":so,i||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),i)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},co={"v-8daa1a0e":()=>St(()=>import("./index.html-e8162b11.js"),[]).then(({data:e})=>e),"v-3706649a":()=>St(()=>import("./404.html-60b35caa.js"),[]).then(({data:e})=>e)},uo=JSON.parse('{"base":"/","lang":"en-US","title":"aciddotEXE","description":"Merry Christmas!","head":[["link",{"rel":"icon","href":"/logo.png"}]],"locales":{}}'),Na={"v-8daa1a0e":$n(()=>St(()=>import("./index.html-b67be25a.js"),["assets/index.html-b67be25a.js","assets/framework-e3c4e60b.js"])),"v-3706649a":$n(()=>St(()=>import("./404.html-927443ad.js"),["assets/404.html-927443ad.js","assets/framework-e3c4e60b.js"]))};var fo=Symbol(""),mo=q(co),$a=jr({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),ke=q($a),Ie=()=>ke,za=Symbol(""),de=()=>{const e=be(za);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},Ma=Symbol(""),vo=()=>{const e=be(Ma);if(!e)throw new Error("usePageHead() is called without provider.");return e},po=Symbol(""),Ra=Symbol(""),go=()=>{const e=be(Ra);if(!e)throw new Error("usePageLang() is called without provider.");return e},Da=Symbol(""),ho=()=>{const e=be(Da);if(!e)throw new Error("usePageLayout() is called without provider.");return e},fn=Symbol(""),Nt=()=>{const e=be(fn);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},Re=q(uo),bo=()=>Re,Ha=Symbol(""),dn=()=>{const e=be(Ha);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},yo=Symbol(""),_o="Layout",wo="NotFound",fe=Br({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageData:async e=>{const t=mo.value[e];return await(t==null?void 0:t())??$a},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,n)=>{const a=ue(t.description)?t.description:n.description,r=[...Pt(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:a}]];return Yr(r)},resolvePageHeadTitle:(e,t)=>`${e.title?`${e.title}`:""}${t.title?` | ${t.title}`:""}`,resolvePageLang:e=>e.lang||"en",resolvePageLayout:(e,t)=>{let n;if(e.path){const a=e.frontmatter.layout;ue(a)?n=a:n=_o}else n=wo;return t[n]},resolveRouteLocale:(e,t)=>La(e,t),resolveSiteLocaleData:(e,t)=>({...e,...e.locales[t]})}),mn=N({name:"ClientOnly",setup(e,t){const n=q(!1);return le(()=>{n.value=!0}),()=>{var a,r;return n.value?(r=(a=t.slots).default)==null?void 0:r.call(a):null}}}),ko=N({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const t=Ie(),n=w(()=>Na[e.pageKey||t.value.key]);return()=>n.value?H(n.value):H("div","404 Not Found")}}),Oe=(e={})=>e,vn=e=>nt(e)?e:`/${Aa(e)}`;function Fa(e,t,n){var a,r,o;t===void 0&&(t=50),n===void 0&&(n={});var i=(a=n.isImmediate)!=null&&a,s=(r=n.callback)!=null&&r,l=n.maxWait,u=Date.now(),c=[];function f(){if(l!==void 0){var p=Date.now()-u;if(p+t>=l)return l-p}return t}var d=function(){var p=[].slice.call(arguments),y=this;return new Promise(function(S,k){var E=i&&o===void 0;if(o!==void 0&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,u=Date.now(),!i){var L=e.apply(y,p);s&&s(L),c.forEach(function(B){return(0,B.resolve)(L)}),c=[]}},f()),E){var C=e.apply(y,p);return s&&s(C),S(C)}c.push({resolve:S,reject:k})})};return d.cancel=function(p){o!==void 0&&clearTimeout(o),c.forEach(function(y){return(0,y.reject)(p)}),c=[]},d}const xo=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:a=5})=>{const r=Ye(),i=Fa(()=>{var S,k;const s=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(s-0)<a){Rn(r,"");return}const u=window.innerHeight+s,c=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),f=Math.abs(c-u)<a,d=Array.from(document.querySelectorAll(e)),y=Array.from(document.querySelectorAll(t)).filter(E=>d.some(C=>C.hash===E.hash));for(let E=0;E<y.length;E++){const C=y[E],L=y[E+1],B=s>=(((S=C.parentElement)==null?void 0:S.offsetTop)??0)-a,$=!L||s<(((k=L.parentElement)==null?void 0:k.offsetTop)??0)-a;if(!(B&&$))continue;const b=decodeURIComponent(r.currentRoute.value.hash),m=decodeURIComponent(C.hash);if(b===m)return;if(f){for(let M=E+1;M<y.length;M++)if(b===decodeURIComponent(y[M].hash))return}Rn(r,m);return}},n);le(()=>{window.addEventListener("scroll",i)}),Oa(()=>{window.removeEventListener("scroll",i)})},Rn=async(e,t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:t,force:!0}).finally(()=>e.options.scrollBehavior=n)},So="a.sidebar-item",Eo=".header-anchor",Lo=300,Ao=5,Oo=Oe({setup(){xo({headerLinkSelector:So,headerAnchorSelector:Eo,delay:Lo,offset:Ao})}}),Dn=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,Co=()=>window.scrollTo({top:0,behavior:"smooth"});const To=N({name:"BackToTop",setup(){const e=q(0),t=w(()=>e.value>300),n=Fa(()=>{e.value=Dn()},100);le(()=>{e.value=Dn(),window.addEventListener("scroll",()=>n())});const a=H("div",{class:"back-to-top",onClick:Co});return()=>H(ln,{name:"back-to-top"},()=>t.value?a:null)}}),Po=Oe({rootComponents:[To]});const Io=H("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[H("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),H("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),No=N({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const t=Nt(),n=w(()=>e.locales[t.value]??{openInNewWindow:"open in new window"});return()=>H("span",[Io,H("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}}),$o={"/":{openInNewWindow:"open in new window"}},zo=Oe({enhance({app:e}){e.component("ExternalLinkIcon",H(No,{locales:$o}))}});var Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},st=function(t){return t.tagName==="IMG"},Mo=function(t){return NodeList.prototype.isPrototypeOf(t)},yt=function(t){return t&&t.nodeType===1},Hn=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Fn=function(t){try{return Array.isArray(t)?t.filter(st):Mo(t)?[].slice.call(t).filter(st):yt(t)?[t].filter(st):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(st):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Ro=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},Do=function(t){var n=t.getBoundingClientRect(),a=n.top,r=n.left,o=n.width,i=n.height,s=t.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,u=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return s.removeAttribute("id"),s.style.position="absolute",s.style.top=a+l+"px",s.style.left=r+u+"px",s.style.width=o+"px",s.style.height=i+"px",s.style.transform="",s},Me=function(t,n){var a=Ce({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,a);var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,a.bubbles,a.cancelable,a.detail),r},Ho=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=window.Promise||function(A){function O(){}A(O,O)},r=function(A){var O=A.target;if(O===M){y();return}L.indexOf(O)!==-1&&S({target:O})},o=function(){if(!($||!m.original)){var A=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(J-A)>b.scrollOffset&&setTimeout(y,150)}},i=function(A){var O=A.key||A.keyCode;(O==="Escape"||O==="Esc"||O===27)&&y()},s=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},O=A;if(A.background&&(M.style.background=A.background),A.container&&A.container instanceof Object&&(O.container=Ce({},b.container,A.container)),A.template){var U=yt(A.template)?A.template:document.querySelector(A.template);O.template=U}return b=Ce({},b,O),L.forEach(function(G){G.dispatchEvent(Me("medium-zoom:update",{detail:{zoom:Y}}))}),Y},l=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(Ce({},b,A))},u=function(){for(var A=arguments.length,O=Array(A),U=0;U<A;U++)O[U]=arguments[U];var G=O.reduce(function(T,te){return[].concat(T,Fn(te))},[]);return G.filter(function(T){return L.indexOf(T)===-1}).forEach(function(T){L.push(T),T.classList.add("medium-zoom-image")}),B.forEach(function(T){var te=T.type,ie=T.listener,ze=T.options;G.forEach(function(_e){_e.addEventListener(te,ie,ze)})}),Y},c=function(){for(var A=arguments.length,O=Array(A),U=0;U<A;U++)O[U]=arguments[U];m.zoomed&&y();var G=O.length>0?O.reduce(function(T,te){return[].concat(T,Fn(te))},[]):L;return G.forEach(function(T){T.classList.remove("medium-zoom-image"),T.dispatchEvent(Me("medium-zoom:detach",{detail:{zoom:Y}}))}),L=L.filter(function(T){return G.indexOf(T)===-1}),Y},f=function(A,O){var U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return L.forEach(function(G){G.addEventListener("medium-zoom:"+A,O,U)}),B.push({type:"medium-zoom:"+A,listener:O,options:U}),Y},d=function(A,O){var U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return L.forEach(function(G){G.removeEventListener("medium-zoom:"+A,O,U)}),B=B.filter(function(G){return!(G.type==="medium-zoom:"+A&&G.listener.toString()===O.toString())}),Y},p=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},O=A.target,U=function(){var T={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},te=void 0,ie=void 0;if(b.container)if(b.container instanceof Object)T=Ce({},T,b.container),te=T.width-T.left-T.right-b.margin*2,ie=T.height-T.top-T.bottom-b.margin*2;else{var ze=yt(b.container)?b.container:document.querySelector(b.container),_e=ze.getBoundingClientRect(),Dt=_e.width,Tr=_e.height,Pr=_e.left,Ir=_e.top;T=Ce({},T,{width:Dt,height:Tr,left:Pr,top:Ir})}te=te||T.width-b.margin*2,ie=ie||T.height-b.margin*2;var Ve=m.zoomedHd||m.original,Nr=Hn(Ve)?te:Ve.naturalWidth||te,$r=Hn(Ve)?ie:Ve.naturalHeight||ie,it=Ve.getBoundingClientRect(),zr=it.top,Mr=it.left,Ht=it.width,Ft=it.height,Rr=Math.min(Math.max(Ht,Nr),te)/Ht,Dr=Math.min(Math.max(Ft,$r),ie)/Ft,jt=Math.min(Rr,Dr),Hr=(-Mr+(te-Ht)/2+b.margin+T.left)/jt,Fr=(-zr+(ie-Ft)/2+b.margin+T.top)/jt,Nn="scale("+jt+") translate3d("+Hr+"px, "+Fr+"px, 0)";m.zoomed.style.transform=Nn,m.zoomedHd&&(m.zoomedHd.style.transform=Nn)};return new a(function(G){if(O&&L.indexOf(O)===-1){G(Y);return}var T=function Dt(){$=!1,m.zoomed.removeEventListener("transitionend",Dt),m.original.dispatchEvent(Me("medium-zoom:opened",{detail:{zoom:Y}})),G(Y)};if(m.zoomed){G(Y);return}if(O)m.original=O;else if(L.length>0){var te=L;m.original=te[0]}else{G(Y);return}if(m.original.dispatchEvent(Me("medium-zoom:open",{detail:{zoom:Y}})),J=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,$=!0,m.zoomed=Do(m.original),document.body.appendChild(M),b.template){var ie=yt(b.template)?b.template:document.querySelector(b.template);m.template=document.createElement("div"),m.template.appendChild(ie.content.cloneNode(!0)),document.body.appendChild(m.template)}if(m.original.parentElement&&m.original.parentElement.tagName==="PICTURE"&&m.original.currentSrc&&(m.zoomed.src=m.original.currentSrc),document.body.appendChild(m.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),m.original.classList.add("medium-zoom-image--hidden"),m.zoomed.classList.add("medium-zoom-image--opened"),m.zoomed.addEventListener("click",y),m.zoomed.addEventListener("transitionend",T),m.original.getAttribute("data-zoom-src")){m.zoomedHd=m.zoomed.cloneNode(),m.zoomedHd.removeAttribute("srcset"),m.zoomedHd.removeAttribute("sizes"),m.zoomedHd.removeAttribute("loading"),m.zoomedHd.src=m.zoomed.getAttribute("data-zoom-src"),m.zoomedHd.onerror=function(){clearInterval(ze),console.warn("Unable to reach the zoom image target "+m.zoomedHd.src),m.zoomedHd=null,U()};var ze=setInterval(function(){m.zoomedHd.complete&&(clearInterval(ze),m.zoomedHd.classList.add("medium-zoom-image--opened"),m.zoomedHd.addEventListener("click",y),document.body.appendChild(m.zoomedHd),U())},10)}else if(m.original.hasAttribute("srcset")){m.zoomedHd=m.zoomed.cloneNode(),m.zoomedHd.removeAttribute("sizes"),m.zoomedHd.removeAttribute("loading");var _e=m.zoomedHd.addEventListener("load",function(){m.zoomedHd.removeEventListener("load",_e),m.zoomedHd.classList.add("medium-zoom-image--opened"),m.zoomedHd.addEventListener("click",y),document.body.appendChild(m.zoomedHd),U()})}else U()})},y=function(){return new a(function(A){if($||!m.original){A(Y);return}var O=function U(){m.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(m.zoomed),m.zoomedHd&&document.body.removeChild(m.zoomedHd),document.body.removeChild(M),m.zoomed.classList.remove("medium-zoom-image--opened"),m.template&&document.body.removeChild(m.template),$=!1,m.zoomed.removeEventListener("transitionend",U),m.original.dispatchEvent(Me("medium-zoom:closed",{detail:{zoom:Y}})),m.original=null,m.zoomed=null,m.zoomedHd=null,m.template=null,A(Y)};$=!0,document.body.classList.remove("medium-zoom--opened"),m.zoomed.style.transform="",m.zoomedHd&&(m.zoomedHd.style.transform=""),m.template&&(m.template.style.transition="opacity 150ms",m.template.style.opacity=0),m.original.dispatchEvent(Me("medium-zoom:close",{detail:{zoom:Y}})),m.zoomed.addEventListener("transitionend",O)})},S=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},O=A.target;return m.original?y():p({target:O})},k=function(){return b},E=function(){return L},C=function(){return m.original},L=[],B=[],$=!1,J=0,b=n,m={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?b=t:(t||typeof t=="string")&&u(t),b=Ce({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},b);var M=Ro(b.background);document.addEventListener("click",r),document.addEventListener("keyup",i),document.addEventListener("scroll",o),window.addEventListener("resize",y);var Y={open:p,close:y,toggle:S,update:s,clone:l,attach:u,detach:c,on:f,off:d,getOptions:k,getImages:E,getZoomedImage:C};return Y};function Fo(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var jo=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Fo(jo);const Bo=Ho,Yo=Symbol("mediumZoom");const Uo=".theme-default-content > img, .theme-default-content :not(a) > img",Wo={},Vo=300,qo=Oe({enhance({app:e,router:t}){const n=Bo(Wo);n.refresh=(a=Uo)=>{n.detach(),n.attach(a)},e.provide(Yo,n),t.afterEach(()=>{setTimeout(()=>n.refresh(),Vo)})}});const P={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const t=P.isStarted();e=Bt(e,P.settings.minimum,1),P.status=e===1?null:e;const n=P.render(!t),a=n.querySelector(P.settings.barSelector),r=P.settings.speed,o=P.settings.easing;return n.offsetWidth,Go(i=>{lt(a,{transform:"translate3d("+jn(e)+"%,0,0)",transition:"all "+r+"ms "+o}),e===1?(lt(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){lt(n,{transition:"all "+r+"ms linear",opacity:"0"}),setTimeout(function(){P.remove(),i()},r)},r)):setTimeout(()=>i(),r)}),P},isStarted:()=>typeof P.status=="number",start:()=>{P.status||P.set(0);const e=()=>{setTimeout(()=>{P.status&&(P.trickle(),e())},P.settings.trickleSpeed)};return P.settings.trickle&&e(),P},done:e=>!e&&!P.status?P:P.inc(.3+.5*Math.random()).set(1),inc:e=>{let t=P.status;return t?(typeof e!="number"&&(e=(1-t)*Bt(Math.random()*t,.1,.95)),t=Bt(t+e,0,.994),P.set(t)):P.start()},trickle:()=>P.inc(Math.random()*P.settings.trickleRate),render:e=>{if(P.isRendered())return document.getElementById("nprogress");Bn(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=P.settings.template;const n=t.querySelector(P.settings.barSelector),a=e?"-100":jn(P.status||0),r=document.querySelector(P.settings.parent);return lt(n,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),r!==document.body&&Bn(r,"nprogress-custom-parent"),r==null||r.appendChild(t),t},remove:()=>{Yn(document.documentElement,"nprogress-busy"),Yn(document.querySelector(P.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&Xo(e)},isRendered:()=>!!document.getElementById("nprogress")},Bt=(e,t,n)=>e<t?t:e>n?n:e,jn=e=>(-1+e)*100,Go=function(){const e=[];function t(){const n=e.shift();n&&n(t)}return function(n){e.push(n),e.length===1&&t()}}(),lt=function(){const e=["Webkit","O","Moz","ms"],t={};function n(i){return i.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(s,l){return l.toUpperCase()})}function a(i){const s=document.body.style;if(i in s)return i;let l=e.length;const u=i.charAt(0).toUpperCase()+i.slice(1);let c;for(;l--;)if(c=e[l]+u,c in s)return c;return i}function r(i){return i=n(i),t[i]||(t[i]=a(i))}function o(i,s,l){s=r(s),i.style[s]=l}return function(i,s){for(const l in s){const u=s[l];u!==void 0&&Object.prototype.hasOwnProperty.call(s,l)&&o(i,l,u)}}}(),ja=(e,t)=>(typeof e=="string"?e:pn(e)).indexOf(" "+t+" ")>=0,Bn=(e,t)=>{const n=pn(e),a=n+t;ja(n,t)||(e.className=a.substring(1))},Yn=(e,t)=>{const n=pn(e);if(!ja(e,t))return;const a=n.replace(" "+t+" "," ");e.className=a.substring(1,a.length-1)},pn=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),Xo=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};const Ko=()=>{le(()=>{const e=Ye(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||P.start()}),e.afterEach(n=>{t.add(n.path),P.done()})})},Zo=Oe({setup(){Ko()}}),Qo=JSON.parse(`{"logo":"/logo.png","sidebar":false,"navbar":[{"icon":"fa-brands fa-twitch","text":"Twitch","link":"https://www.twitch.tv/aciddotexe"},{"icon":"fa-brands fa-mastodon","text":"Mastodon","link":"https://mastodon.au/@aciddotEXE","rel":"me noopener noreferrer"},{"icon":"fa-brands fa-twitter","text":"Twitter","link":"https://twitter.com/aciddotexe"}],"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),Jo=q(Qo),ei=()=>Jo,Ba=Symbol(""),ti=()=>{const e=be(Ba);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},ni=(e,t)=>{var n;return{...e,...(n=e.locales)==null?void 0:n[t]}},ai=Oe({enhance({app:e}){const t=ei(),n=e._context.provides[fn],a=w(()=>ni(t.value,n.value));e.provide(Ba,a),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return a.value}}})}}),ri=N({__name:"Badge",props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(e){return(t,n)=>(g(),x("span",{class:re(["badge",e.type]),style:Ca({verticalAlign:e.vertical})},[z(t.$slots,"default",{},()=>[je(X(e.text),1)])],6))}}),oi=j(ri,[["__file","Badge.vue"]]),ii=N({name:"CodeGroup",setup(e,{slots:t}){const n=q(-1),a=q([]),r=(s=n.value)=>{s<a.value.length-1?n.value=s+1:n.value=0,a.value[n.value].focus()},o=(s=n.value)=>{s>0?n.value=s-1:n.value=a.value.length-1,a.value[n.value].focus()},i=(s,l)=>{s.key===" "||s.key==="Enter"?(s.preventDefault(),n.value=l):s.key==="ArrowRight"?(s.preventDefault(),r(l)):s.key==="ArrowLeft"&&(s.preventDefault(),o(l))};return()=>{var l;const s=(((l=t.default)==null?void 0:l.call(t))||[]).filter(u=>u.type.name==="CodeGroupItem").map(u=>(u.props===null&&(u.props={}),u));return s.length===0?null:(n.value<0||n.value>s.length-1?(n.value=s.findIndex(u=>u.props.active===""||u.props.active===!0),n.value===-1&&(n.value=0)):s.forEach((u,c)=>{u.props.active=c===n.value}),H("div",{class:"code-group"},[H("div",{class:"code-group__nav"},H("ul",{class:"code-group__ul"},s.map((u,c)=>{const f=c===n.value;return H("li",{class:"code-group__li"},H("button",{ref:d=>{d&&(a.value[c]=d)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":f},ariaPressed:f,ariaExpanded:f,onClick:()=>n.value=c,onKeydown:d=>i(d,c)},u.props.title))}))),s]))}}}),si=["aria-selected"],li=N({name:"CodeGroupItem"}),ci=N({...li,props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(e){return(t,n)=>(g(),x("div",{class:re(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[z(t.$slots,"default")],10,si))}}),ui=j(ci,[["__file","CodeGroupItem.vue"]]);var Un;const Ya=typeof window<"u",fi=e=>typeof e=="function",di=e=>typeof e=="string",mi=()=>{};Ya&&((Un=window==null?void 0:window.navigator)!=null&&Un.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Et(e){return typeof e=="function"?e():v(e)}function vi(e,t){function n(...a){e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})}return n}const Ua=e=>e();function pi(e=Ua){const t=q(!0);function n(){t.value=!1}function a(){t.value=!0}return{isActive:t,pause:n,resume:a,eventFilter:(...o)=>{t.value&&e(...o)}}}function gi(e){return e}function Wa(e){return Wr()?(Vr(e),!0):!1}function hi(e){return typeof e=="function"?w(e):q(e)}function bi(e,t=!0){qr()?le(e):t?e():Ta(e)}function yi(e=!1,t={}){const{truthyValue:n=!0,falsyValue:a=!1}=t,r=Ur(e),o=q(e);function i(s){if(arguments.length)return o.value=s,o.value;{const l=Et(n);return o.value=o.value===l?Et(a):l,o.value}}return r?i:[o,i]}var Wn=Object.getOwnPropertySymbols,_i=Object.prototype.hasOwnProperty,wi=Object.prototype.propertyIsEnumerable,ki=(e,t)=>{var n={};for(var a in e)_i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&Wn)for(var a of Wn(e))t.indexOf(a)<0&&wi.call(e,a)&&(n[a]=e[a]);return n};function xi(e,t,n={}){const a=n,{eventFilter:r=Ua}=a,o=ki(a,["eventFilter"]);return Ue(e,vi(r,t),o)}var Si=Object.defineProperty,Ei=Object.defineProperties,Li=Object.getOwnPropertyDescriptors,Lt=Object.getOwnPropertySymbols,Va=Object.prototype.hasOwnProperty,qa=Object.prototype.propertyIsEnumerable,Vn=(e,t,n)=>t in e?Si(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ai=(e,t)=>{for(var n in t||(t={}))Va.call(t,n)&&Vn(e,n,t[n]);if(Lt)for(var n of Lt(t))qa.call(t,n)&&Vn(e,n,t[n]);return e},Oi=(e,t)=>Ei(e,Li(t)),Ci=(e,t)=>{var n={};for(var a in e)Va.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&Lt)for(var a of Lt(e))t.indexOf(a)<0&&qa.call(e,a)&&(n[a]=e[a]);return n};function Ti(e,t,n={}){const a=n,{eventFilter:r}=a,o=Ci(a,["eventFilter"]),{eventFilter:i,pause:s,resume:l,isActive:u}=pi(r);return{stop:xi(e,t,Oi(Ai({},o),{eventFilter:i})),pause:s,resume:l,isActive:u}}function Pi(e){var t;const n=Et(e);return(t=n==null?void 0:n.$el)!=null?t:n}const At=Ya?window:void 0;function Ii(...e){let t,n,a,r;if(di(e[0])||Array.isArray(e[0])?([n,a,r]=e,t=At):[t,n,a,r]=e,!t)return mi;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const o=[],i=()=>{o.forEach(c=>c()),o.length=0},s=(c,f,d)=>(c.addEventListener(f,d,r),()=>c.removeEventListener(f,d,r)),l=Ue(()=>Pi(t),c=>{i(),c&&o.push(...n.flatMap(f=>a.map(d=>s(c,f,d))))},{immediate:!0,flush:"post"}),u=()=>{l(),i()};return Wa(u),u}function Ni(e,t=!1){const n=q(),a=()=>n.value=Boolean(e());return a(),bi(a,t),n}function $i(e,t={}){const{window:n=At}=t,a=Ni(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const o=q(!1),i=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",s):r.removeListener(s))},s=()=>{a.value&&(i(),r=n.matchMedia(hi(e).value),o.value=r.matches,"addEventListener"in r?r.addEventListener("change",s):r.addListener(s))};return Xr(s),Wa(()=>i()),o}const Gt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xt="__vueuse_ssr_handlers__";Gt[Xt]=Gt[Xt]||{};const zi=Gt[Xt];function Mi(e,t){return zi[e]||t}function Ri(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Di=Object.defineProperty,qn=Object.getOwnPropertySymbols,Hi=Object.prototype.hasOwnProperty,Fi=Object.prototype.propertyIsEnumerable,Gn=(e,t,n)=>t in e?Di(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xn=(e,t)=>{for(var n in t||(t={}))Hi.call(t,n)&&Gn(e,n,t[n]);if(qn)for(var n of qn(t))Fi.call(t,n)&&Gn(e,n,t[n]);return e};const ji={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Bi(e,t,n,a={}){var r;const{flush:o="pre",deep:i=!0,listenToStorageChanges:s=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:c,window:f=At,eventFilter:d,onError:p=b=>{console.error(b)}}=a,y=(c?Gr:q)(t);if(!n)try{n=Mi("getDefaultStorage",()=>{var b;return(b=At)==null?void 0:b.localStorage})()}catch(b){p(b)}if(!n)return y;const S=Et(t),k=Ri(S),E=(r=a.serializer)!=null?r:ji[k],{pause:C,resume:L}=Ti(y,()=>B(y.value),{flush:o,deep:i,eventFilter:d});return f&&s&&Ii(f,"storage",J),J(),y;function B(b){try{b==null?n.removeItem(e):n.setItem(e,E.write(b))}catch(m){p(m)}}function $(b){C();try{const m=b?b.newValue:n.getItem(e);if(m==null)return l&&S!==null&&n.setItem(e,E.write(S)),S;if(!b&&u){const M=E.read(m);return fi(u)?u(M,S):k==="object"&&!Array.isArray(M)?Xn(Xn({},S),M):M}else return typeof m!="string"?m:E.read(m)}catch(m){p(m)}finally{L()}}function J(b){if(!(b&&b.storageArea!==n)){if(b&&b.key===null){y.value=S;return}b&&b.key!==e||(y.value=$(b))}}}function Yi(e){return $i("(prefers-color-scheme: dark)",e)}var Kn;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Kn||(Kn={}));var Ui=Object.defineProperty,Zn=Object.getOwnPropertySymbols,Wi=Object.prototype.hasOwnProperty,Vi=Object.prototype.propertyIsEnumerable,Qn=(e,t,n)=>t in e?Ui(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qi=(e,t)=>{for(var n in t||(t={}))Wi.call(t,n)&&Qn(e,n,t[n]);if(Zn)for(var n of Zn(t))Vi.call(t,n)&&Qn(e,n,t[n]);return e};const Gi={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};qi({linear:gi},Gi);const ne=()=>ti(),Ga=Symbol(""),gn=()=>{const e=be(Ga);if(!e)throw new Error("useDarkMode() is called without provider.");return e},Xi=()=>{const e=ne(),t=Yi(),n=Bi("vuepress-color-scheme",e.value.colorMode),a=w({get(){return e.value.colorModeSwitch?n.value==="auto"?t.value:n.value==="dark":e.value.colorMode==="dark"},set(r){r===t.value?n.value="auto":n.value=r?"dark":"light"}});cn(Ga,a),Ki(a)},Ki=e=>{const t=(n=e.value)=>{const a=window==null?void 0:window.document.querySelector("html");a==null||a.classList.toggle("dark",n)};le(()=>{Ue(e,t,{immediate:!0})}),Pa(()=>t())},Xa=(...e)=>{const n=Ye().resolve(...e),a=n.matched[n.matched.length-1];if(!(a!=null&&a.redirect))return n;const{redirect:r}=a,o=Kr(r)?r(n):r,i=ue(o)?{path:o}:o;return Xa({hash:n.hash,query:n.query,params:n.params,...i})},hn=e=>{const t=Xa(encodeURI(e));return{text:t.meta.title||e,link:t.name==="404"?e:t.fullPath}};let Yt=null,qe=null;const Zi={wait:()=>Yt,pending:()=>{Yt=new Promise(e=>qe=e)},resolve:()=>{qe==null||qe(),Yt=null,qe=null}},Ka=()=>Zi,Za=Symbol("sidebarItems"),bn=()=>{const e=be(Za);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},Qi=()=>{const e=ne(),t=de(),n=w(()=>Ji(t.value,e.value));cn(Za,n)},Ji=(e,t)=>{const n=e.sidebar??t.sidebar??"auto",a=e.sidebarDepth??t.sidebarDepth??2;return e.home||n===!1?[]:n==="auto"?ts(a):Pt(n)?Qa(n,a):un(n)?ns(n,a):[]},es=(e,t)=>({text:e.title,link:e.link,children:yn(e.children,t)}),yn=(e,t)=>t>0?e.map(n=>es(n,t-1)):[],ts=e=>{const t=Ie();return[{text:t.value.title,children:yn(t.value.headers,e)}]},Qa=(e,t)=>{const n=Ae(),a=Ie(),r=o=>{var s;let i;if(ue(o)?i=hn(o):i=o,i.children)return{...i,children:i.children.map(l=>r(l))};if(i.link===n.path){const l=((s=a.value.headers[0])==null?void 0:s.level)===1?a.value.headers[0].children:a.value.headers;return{...i,children:yn(l,t)}}return i};return e.map(o=>r(o))},ns=(e,t)=>{const n=Ae(),a=La(e,n.path),r=e[a]??[];return Qa(r,t)},as={},rs={class:"theme-default-content"};function os(e,t){const n=ve("Content");return g(),x("div",rs,[F(n)])}const is=j(as,[["render",os],["__file","HomeContent.vue"]]),ss={key:0,class:"features"},ls=N({__name:"HomeFeatures",setup(e){const t=de(),n=w(()=>Pt(t.value.features)?t.value.features:[]);return(a,r)=>v(n).length?(g(),x("div",ss,[(g(!0),x(oe,null,xe(v(n),o=>(g(),x("div",{key:o.title,class:"feature"},[I("h2",null,X(o.title),1),I("p",null,X(o.details),1)]))),128))])):V("v-if",!0)}}),cs=j(ls,[["__file","HomeFeatures.vue"]]),us=["innerHTML"],fs=["textContent"],ds=N({__name:"HomeFooter",setup(e){const t=de(),n=w(()=>t.value.footer),a=w(()=>t.value.footerHtml);return(r,o)=>v(n)?(g(),x(oe,{key:0},[V(" eslint-disable-next-line vue/no-v-html "),v(a)?(g(),x("div",{key:0,class:"footer",innerHTML:v(n)},null,8,us)):(g(),x("div",{key:1,class:"footer",textContent:X(v(n))},null,8,fs))],64)):V("v-if",!0)}}),ms=j(ds,[["__file","HomeFooter.vue"]]),vs=["href","rel","target","aria-label"],ps=N({inheritAttrs:!1}),gs=N({...ps,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(e){const t=e,n=Ae(),a=bo(),{item:r}=It(t),o=w(()=>nt(r.value.link)),i=w(()=>Zr(r.value.link)||Qr(r.value.link)),s=w(()=>{if(!i.value){if(r.value.target)return r.value.target;if(o.value)return"_blank"}}),l=w(()=>s.value==="_blank"),u=w(()=>!o.value&&!i.value&&!l.value),c=w(()=>{if(!i.value){if(r.value.rel)return r.value.rel;if(l.value)return"noopener noreferrer"}}),f=w(()=>r.value.ariaLabel||r.value.text),d=w(()=>{const S=Object.keys(a.value.locales);return S.length?!S.some(k=>k===r.value.link):r.value.link!=="/"}),p=w(()=>d.value?n.path.startsWith(r.value.link):!1),y=w(()=>u.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(n.path):p.value:!1);return(S,k)=>{const E=ve("RouterLink"),C=ve("AutoLinkExternalIcon");return v(u)?(g(),K(E,zn({key:0,class:{"router-link-active":v(y)},to:v(r).link,"aria-label":v(f)},S.$attrs),{default:ee(()=>[z(S.$slots,"before"),je(" "+X(v(r).text)+" ",1),z(S.$slots,"after")]),_:3},16,["class","to","aria-label"])):(g(),x("a",zn({key:1,class:"external-link",href:v(r).link,rel:v(c),target:v(s),"aria-label":v(f)},S.$attrs),[z(S.$slots,"before"),je(" "+X(v(r).text)+" ",1),v(l)?(g(),K(C,{key:0})):V("v-if",!0),z(S.$slots,"after")],16,vs))}}}),hs=j(gs,[["__file","AutoLink.vue"]]),bs={__name:"AcidicAutoLink",props:{item:{type:Object,required:!0}},setup(e){const t=e,{item:n}=It(t);return(a,r)=>(g(),K(hs,{item:v(n)},Jr({_:2},[v(n).icon?{name:"before",fn:ee(()=>[I("i",{class:re(v(n).icon),"aria-hidden":"true"},null,2)]),key:"0"}:void 0]),1032,["item"]))}},me=j(bs,[["__file","AcidicAutoLink.vue"]]),ys={class:"hero"},_s={key:0,id:"main-title"},ws={key:1,class:"description"},ks={key:2,class:"actions"},xs=N({__name:"HomeHero",setup(e){const t=de(),n=dn(),a=gn(),r=w(()=>a.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),o=w(()=>t.value.heroAlt||s.value||"hero"),i=w(()=>t.value.heroHeight||280),s=w(()=>t.value.heroText===null?null:t.value.heroText||n.value.title||"Hello"),l=w(()=>t.value.tagline===null?null:t.value.tagline||n.value.description||"Welcome to your VuePress site"),u=w(()=>Pt(t.value.actions)?t.value.actions.map(({text:f,link:d,type:p="primary"})=>({text:f,link:d,type:p})):[]),c=()=>{if(!r.value)return null;const f=H("img",{src:vn(r.value),alt:o.value,height:i.value});return t.value.heroImageDark===void 0?f:H(mn,()=>f)};return(f,d)=>(g(),x("header",ys,[F(c),v(s)?(g(),x("h1",_s,X(v(s)),1)):V("v-if",!0),v(l)?(g(),x("p",ws,X(v(l)),1)):V("v-if",!0),v(u).length?(g(),x("p",ks,[(g(!0),x(oe,null,xe(v(u),p=>(g(),K(me,{key:p.text,class:re(["action-button",[p.type]]),item:p},null,8,["class","item"]))),128))])):V("v-if",!0)]))}}),Ss=j(xs,[["__file","HomeHero.vue"]]),Es={class:"home"},Ls=N({__name:"Home",setup(e){return(t,n)=>(g(),x("main",Es,[F(Ss),F(cs),F(is),F(ms)]))}}),As=j(Ls,[["__file","Home.vue"]]),Os=N({__name:"NavbarBrand",setup(e){const t=Nt(),n=dn(),a=ne(),r=gn(),o=w(()=>a.value.home||t.value),i=w(()=>n.value.title),s=w(()=>r.value&&a.value.logoDark!==void 0?a.value.logoDark:a.value.logo),l=()=>{if(!s.value)return null;const u=H("img",{class:"logo",src:vn(s.value),alt:i.value});return a.value.logoDark===void 0?u:H(mn,()=>u)};return(u,c)=>{const f=ve("RouterLink");return g(),K(f,{to:v(o)},{default:ee(()=>[F(l),v(i)?(g(),x("span",{key:0,class:re(["site-name",{"can-hide":v(s)}])},X(v(i)),3)):V("v-if",!0)]),_:1},8,["to"])}}}),Cs=j(Os,[["__file","NavbarBrand.vue"]]),Ts=N({__name:"DropdownTransition",setup(e){const t=a=>{a.style.height=a.scrollHeight+"px"},n=a=>{a.style.height=""};return(a,r)=>(g(),K(ln,{name:"dropdown",onEnter:t,onAfterEnter:n,onBeforeLeave:t},{default:ee(()=>[z(a.$slots,"default")]),_:3}))}}),Ja=j(Ts,[["__file","DropdownTransition.vue"]]),Ps=["aria-label"],Is={class:"title"},Ns=I("span",{class:"arrow down"},null,-1),$s=["aria-label"],zs={class:"title"},Ms={class:"navbar-dropdown"},Rs={class:"navbar-dropdown-subtitle"},Ds={key:1},Hs={class:"navbar-dropdown-subitem-wrapper"},Fs=N({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(e){const t=e,{item:n}=It(t),a=w(()=>n.value.ariaLabel||n.value.text),r=q(!1),o=Ae();Ue(()=>o.path,()=>{r.value=!1});const i=l=>{l.detail===0?r.value=!r.value:r.value=!1},s=(l,u)=>u[u.length-1]===l;return(l,u)=>(g(),x("div",{class:re(["navbar-dropdown-wrapper",{open:r.value}])},[I("button",{class:"navbar-dropdown-title",type:"button","aria-label":v(a),onClick:i},[I("span",Is,X(v(n).text),1),Ns],8,Ps),I("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":v(a),onClick:u[0]||(u[0]=c=>r.value=!r.value)},[I("span",zs,X(v(n).text),1),I("span",{class:re(["arrow",r.value?"down":"right"])},null,2)],8,$s),F(Ja,null,{default:ee(()=>[kt(I("ul",Ms,[(g(!0),x(oe,null,xe(v(n).children,c=>(g(),x("li",{key:c.text,class:"navbar-dropdown-item"},[c.children?(g(),x(oe,{key:0},[I("h4",Rs,[c.link?(g(),K(me,{key:0,item:c,onFocusout:f=>s(c,v(n).children)&&c.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(g(),x("span",Ds,X(c.text),1))]),I("ul",Hs,[(g(!0),x(oe,null,xe(c.children,f=>(g(),x("li",{key:f.link,class:"navbar-dropdown-subitem"},[F(me,{item:f,onFocusout:d=>s(f,c.children)&&s(c,v(n).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(g(),K(me,{key:1,item:c,onFocusout:f=>s(c,v(n).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[xt,r.value]])]),_:1})],2))}}),js=j(Fs,[["__file","NavbarDropdown.vue"]]),Jn=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Bs=(e,t)=>{if(t.hash===e)return!0;const n=Jn(t.path),a=Jn(e);return n===a},er=(e,t)=>e.link&&Bs(e.link,t)?!0:e.children?e.children.some(n=>er(n,t)):!1,tr=e=>!nt(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Ys={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Us=({docsRepo:e,editLinkPattern:t})=>{if(t)return t;const n=tr(e);return n!==null?Ys[n]:null},Ws=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:a,editLinkPattern:r})=>{if(!a)return null;const o=Us({docsRepo:e,editLinkPattern:r});return o?o.replace(/:repo/,nt(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Aa(`${Ia(n)}/${a}`)):null},Vs={key:0,class:"navbar-items"},qs=N({__name:"NavbarItems",setup(e){const t=()=>{const c=Ye(),f=Nt(),d=dn(),p=ne();return w(()=>{const y=Object.keys(d.value.locales);if(y.length<2)return[];const S=c.currentRoute.value.path,k=c.currentRoute.value.fullPath,E=c.currentRoute.value.hash;return[{text:p.value.selectLanguageText??"unknown language",ariaLabel:p.value.selectLanguageAriaLabel??p.value.selectLanguageText??"unknown language",children:y.map(L=>{var M,Y;const B=((M=d.value.locales)==null?void 0:M[L])??{},$=((Y=p.value.locales)==null?void 0:Y[L])??{},J=`${B.lang}`,b=$.selectLanguageName??J;let m;if(J===d.value.lang)m=k;else{const Q=S.replace(f.value,L);c.getRoutes().some(A=>A.path===Q)?m=`${Q}${E}`:m=$.home??L}return{text:b,link:m}})}]})},n=()=>{const c=ne(),f=w(()=>c.value.repo),d=w(()=>f.value?tr(f.value):null),p=w(()=>f.value&&!nt(f.value)?`https://github.com/${f.value}`:f.value),y=w(()=>p.value?c.value.repoLabel?c.value.repoLabel:d.value===null?"Source":d.value:null);return w(()=>!p.value||!y.value?[]:[{text:y.value,link:p.value}])},a=c=>ue(c)?hn(c):c.children?{...c,children:c.children.map(a)}:c,r=()=>{const c=ne();return w(()=>(c.value.navbar||[]).map(a))},o=q(!1),i=r(),s=t(),l=n(),u=w(()=>[...i.value,...s.value,...l.value]);return le(()=>{const f=()=>{window.innerWidth<719?o.value=!0:o.value=!1};f(),window.addEventListener("resize",f,!1),window.addEventListener("orientationchange",f,!1)}),(c,f)=>v(u).length?(g(),x("nav",Vs,[(g(!0),x(oe,null,xe(v(u),d=>(g(),x("div",{key:d.text,class:"navbar-item"},[d.children?(g(),K(js,{key:0,item:d,class:re(o.value?"mobile":"")},null,8,["item","class"])):(g(),K(me,{key:1,item:d},null,8,["item"]))]))),128))])):V("v-if",!0)}}),nr=j(qs,[["__file","NavbarItems.vue"]]),Gs=["title"],Xs={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ks=eo('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Zs=[Ks],Qs={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Js=I("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),el=[Js],tl=N({__name:"ToggleColorModeButton",setup(e){const t=ne(),n=gn(),a=()=>{n.value=!n.value};return(r,o)=>(g(),x("button",{class:"toggle-color-mode-button",title:v(t).toggleColorMode,onClick:a},[kt((g(),x("svg",Xs,Zs,512)),[[xt,!v(n)]]),kt((g(),x("svg",Qs,el,512)),[[xt,v(n)]])],8,Gs))}}),nl=j(tl,[["__file","ToggleColorModeButton.vue"]]),al=["title"],rl=I("div",{class:"icon","aria-hidden":"true"},[I("span"),I("span"),I("span")],-1),ol=[rl],il=N({__name:"ToggleSidebarButton",emits:["toggle"],setup(e){const t=ne();return(n,a)=>(g(),x("div",{class:"toggle-sidebar-button",title:v(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:a[0]||(a[0]=r=>n.$emit("toggle"))},ol,8,al))}}),sl=j(il,[["__file","ToggleSidebarButton.vue"]]),ll=N({__name:"Navbar",emits:["toggle-sidebar"],setup(e){const t=ne(),n=q(null),a=q(null),r=q(0),o=w(()=>r.value?{maxWidth:r.value+"px"}:{});le(()=>{const l=i(n.value,"paddingLeft")+i(n.value,"paddingRight"),u=()=>{var c;window.innerWidth<719?r.value=0:r.value=n.value.offsetWidth-l-(((c=a.value)==null?void 0:c.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function i(s,l){var f,d,p;const u=(p=(d=(f=s==null?void 0:s.ownerDocument)==null?void 0:f.defaultView)==null?void 0:d.getComputedStyle(s,null))==null?void 0:p[l],c=Number.parseInt(u,10);return Number.isNaN(c)?0:c}return(s,l)=>{const u=ve("NavbarSearch");return g(),x("header",{ref_key:"navbar",ref:n,class:"navbar"},[F(sl,{onToggle:l[0]||(l[0]=c=>s.$emit("toggle-sidebar"))}),I("span",{ref_key:"navbarBrand",ref:a},[F(Cs)],512),I("div",{class:"navbar-items-wrapper",style:Ca(v(o))},[z(s.$slots,"before"),F(nr,{class:"can-hide"}),z(s.$slots,"after"),v(t).colorModeSwitch?(g(),K(nl,{key:0})):V("v-if",!0),F(u)],4)],512)}}}),cl=j(ll,[["__file","Navbar.vue"]]),ul={class:"page-meta"},fl={key:0,class:"meta-item edit-link"},dl={key:1,class:"meta-item last-updated"},ml={class:"meta-item-label"},vl={class:"meta-item-info"},pl={key:2,class:"meta-item contributors"},gl={class:"meta-item-label"},hl={class:"meta-item-info"},bl=["title"],yl=N({__name:"PageMeta",setup(e){const t=()=>{const l=ne(),u=Ie(),c=de();return w(()=>{if(!(c.value.editLink??l.value.editLink??!0))return null;const{repo:d,docsRepo:p=d,docsBranch:y="main",docsDir:S="",editLinkText:k}=l.value;if(!p)return null;const E=Ws({docsRepo:p,docsBranch:y,docsDir:S,filePathRelative:u.value.filePathRelative,editLinkPattern:c.value.editLinkPattern??l.value.editLinkPattern});return E?{text:k??"Edit this page",link:E}:null})},n=()=>{const l=ne(),u=Ie(),c=de();return w(()=>{var p,y;return!(c.value.lastUpdated??l.value.lastUpdated??!0)||!((p=u.value.git)!=null&&p.updatedTime)?null:new Date((y=u.value.git)==null?void 0:y.updatedTime).toLocaleString()})},a=()=>{const l=ne(),u=Ie(),c=de();return w(()=>{var d;return c.value.contributors??l.value.contributors??!0?((d=u.value.git)==null?void 0:d.contributors)??null:null})},r=ne(),o=t(),i=n(),s=a();return(l,u)=>{const c=ve("ClientOnly");return g(),x("footer",ul,[v(o)?(g(),x("div",fl,[F(me,{class:"meta-item-label",item:v(o)},null,8,["item"])])):V("v-if",!0),v(i)?(g(),x("div",dl,[I("span",ml,X(v(r).lastUpdatedText)+": ",1),F(c,null,{default:ee(()=>[I("span",vl,X(v(i)),1)]),_:1})])):V("v-if",!0),v(s)&&v(s).length?(g(),x("div",pl,[I("span",gl,X(v(r).contributorsText)+": ",1),I("span",hl,[(g(!0),x(oe,null,xe(v(s),(f,d)=>(g(),x(oe,{key:d},[I("span",{class:"contributor",title:`email: ${f.email}`},X(f.name),9,bl),d!==v(s).length-1?(g(),x(oe,{key:0},[je(", ")],64)):V("v-if",!0)],64))),128))])])):V("v-if",!0)])}}}),_l=j(yl,[["__file","PageMeta.vue"]]),wl={key:0,class:"page-nav"},kl={class:"inner"},xl={key:0,class:"prev"},Sl={key:1,class:"next"},El=N({__name:"PageNav",setup(e){const t=l=>l===!1?null:ue(l)?hn(l):un(l)?l:!1,n=(l,u,c)=>{const f=l.findIndex(d=>d.link===u);if(f!==-1){const d=l[f+c];return d!=null&&d.link?d:null}for(const d of l)if(d.children){const p=n(d.children,u,c);if(p)return p}return null},a=de(),r=bn(),o=Ae(),i=w(()=>{const l=t(a.value.prev);return l!==!1?l:n(r.value,o.path,-1)}),s=w(()=>{const l=t(a.value.next);return l!==!1?l:n(r.value,o.path,1)});return(l,u)=>v(i)||v(s)?(g(),x("nav",wl,[I("p",kl,[v(i)?(g(),x("span",xl,[F(me,{item:v(i)},null,8,["item"])])):V("v-if",!0),v(s)?(g(),x("span",Sl,[F(me,{item:v(s)},null,8,["item"])])):V("v-if",!0)])])):V("v-if",!0)}}),Ll=j(El,[["__file","PageNav.vue"]]),Al={class:"page"},Ol={class:"theme-default-content"},Cl=N({__name:"Page",setup(e){return(t,n)=>{const a=ve("Content");return g(),x("main",Al,[z(t.$slots,"top"),I("div",Ol,[z(t.$slots,"content-top"),F(a),z(t.$slots,"content-bottom")]),F(_l),F(Ll),z(t.$slots,"bottom")])}}}),Tl=j(Cl,[["__file","Page.vue"]]),Pl=["onKeydown"],Il={class:"sidebar-item-children"},Nl=N({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(e){const t=e,{item:n,depth:a}=It(t),r=Ae(),o=Ye(),i=w(()=>er(n.value,r)),s=w(()=>({"sidebar-item":!0,"sidebar-heading":a.value===0,active:i.value,collapsible:n.value.collapsible})),l=w(()=>n.value.collapsible?i.value:!0),[u,c]=yi(l.value),f=p=>{n.value.collapsible&&(p.preventDefault(),c())},d=o.afterEach(p=>{Ta(()=>{u.value=l.value})});return Oa(()=>{d()}),(p,y)=>{var k;const S=ve("SidebarItem",!0);return g(),x("li",null,[v(n).link?(g(),K(me,{key:0,class:re(v(s)),item:v(n)},null,8,["class","item"])):(g(),x("p",{key:1,tabindex:"0",class:re(v(s)),onClick:f,onKeydown:to(f,["enter"])},[je(X(v(n).text)+" ",1),v(n).collapsible?(g(),x("span",{key:0,class:re(["arrow",v(u)?"down":"right"])},null,2)):V("v-if",!0)],42,Pl)),(k=v(n).children)!=null&&k.length?(g(),K(Ja,{key:2},{default:ee(()=>[kt(I("ul",Il,[(g(!0),x(oe,null,xe(v(n).children,E=>(g(),K(S,{key:`${v(a)}${E.text}${E.link}`,item:E,depth:v(a)+1},null,8,["item","depth"]))),128))],512),[[xt,v(u)]])]),_:1})):V("v-if",!0)])}}}),$l=j(Nl,[["__file","SidebarItem.vue"]]),zl={key:0,class:"sidebar-items"},Ml=N({__name:"SidebarItems",setup(e){const t=Ae(),n=bn();return le(()=>{Ue(()=>t.hash,a=>{const r=document.querySelector(".sidebar");if(!r)return;const o=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${a}"]`);if(!o)return;const{top:i,height:s}=r.getBoundingClientRect(),{top:l,height:u}=o.getBoundingClientRect();l<i?o.scrollIntoView(!0):l+u>i+s&&o.scrollIntoView(!1)})}),(a,r)=>v(n).length?(g(),x("ul",zl,[(g(!0),x(oe,null,xe(v(n),o=>(g(),K($l,{key:`${o.text}${o.link}`,item:o},null,8,["item"]))),128))])):V("v-if",!0)}}),Rl=j(Ml,[["__file","SidebarItems.vue"]]),Dl={class:"sidebar"},Hl=N({__name:"Sidebar",setup(e){return(t,n)=>(g(),x("aside",Dl,[F(nr),z(t.$slots,"top"),F(Rl),z(t.$slots,"bottom")]))}}),Fl=j(Hl,[["__file","Sidebar.vue"]]),jl=N({__name:"Layout",setup(e){const t=Ie(),n=de(),a=ne(),r=w(()=>n.value.navbar!==!1&&a.value.navbar!==!1),o=bn(),i=q(!1),s=k=>{i.value=typeof k=="boolean"?k:!i.value},l={x:0,y:0},u=k=>{l.x=k.changedTouches[0].clientX,l.y=k.changedTouches[0].clientY},c=k=>{const E=k.changedTouches[0].clientX-l.x,C=k.changedTouches[0].clientY-l.y;Math.abs(E)>Math.abs(C)&&Math.abs(E)>40&&(E>0&&l.x<=80?s(!0):s(!1))},f=w(()=>[{"no-navbar":!r.value,"no-sidebar":!o.value.length,"sidebar-open":i.value},n.value.pageClass]);let d;le(()=>{d=Ye().afterEach(()=>{s(!1)})}),Pa(()=>{d()});const p=Ka(),y=p.resolve,S=p.pending;return(k,E)=>(g(),x("div",{class:re(["theme-container",v(f)]),onTouchstart:u,onTouchend:c},[z(k.$slots,"navbar",{},()=>[v(r)?(g(),K(cl,{key:0,onToggleSidebar:s},{before:ee(()=>[z(k.$slots,"navbar-before")]),after:ee(()=>[z(k.$slots,"navbar-after")]),_:3})):V("v-if",!0)]),I("div",{class:"sidebar-mask",onClick:E[0]||(E[0]=C=>s(!1))}),z(k.$slots,"sidebar",{},()=>[F(Fl,null,{top:ee(()=>[z(k.$slots,"sidebar-top")]),bottom:ee(()=>[z(k.$slots,"sidebar-bottom")]),_:3})]),z(k.$slots,"page",{},()=>[v(n).home?(g(),K(As,{key:0})):(g(),K(ln,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:v(y),onBeforeLeave:v(S)},{default:ee(()=>[(g(),K(Tl,{key:v(t).path},{top:ee(()=>[z(k.$slots,"page-top")]),"content-top":ee(()=>[z(k.$slots,"page-content-top")]),"content-bottom":ee(()=>[z(k.$slots,"page-content-bottom")]),bottom:ee(()=>[z(k.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}}),Bl=j(jl,[["__file","Layout.vue"]]),Yl={class:"theme-container"},Ul={class:"page"},Wl={class:"theme-default-content"},Vl=I("h1",null,"404",-1),ql=N({__name:"NotFound",setup(e){const t=Nt(),n=ne(),a=n.value.notFound??["Not Found"],r=()=>a[Math.floor(Math.random()*a.length)],o=n.value.home??t.value,i=n.value.backToHome??"Back to home";return(s,l)=>{const u=ve("RouterLink");return g(),x("div",Yl,[I("main",Ul,[I("div",Wl,[Vl,I("blockquote",null,X(r()),1),F(u,{to:v(o)},{default:ee(()=>[je(X(v(i)),1)]),_:1},8,["to"])])])])}}}),Gl=j(ql,[["__file","NotFound.vue"]]);const Xl=Oe({enhance({app:e,router:t}){e.component("Badge",oi),e.component("CodeGroup",ii),e.component("CodeGroupItem",ui),e.component("AutoLinkExternalIcon",()=>{const a=e.component("ExternalLinkIcon");return a?H(a):null}),e.component("NavbarSearch",()=>{const a=e.component("Docsearch")||e.component("SearchBox");return a?H(a):null});const n=t.options.scrollBehavior;t.options.scrollBehavior=async(...a)=>(await Ka().wait(),n(...a))},setup(){Xi(),Qi()},layouts:{Layout:Bl,NotFound:Gl}});function ea(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ea(Object(n),!0).forEach(function(a){Z(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ea(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ot(e){return Ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ot(e)}function Kl(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ta(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Zl(e,t,n){return t&&ta(e.prototype,t),n&&ta(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _n(e,t){return Jl(e)||tc(e,t)||ar(e,t)||ac()}function at(e){return Ql(e)||ec(e)||ar(e)||nc()}function Ql(e){if(Array.isArray(e))return Kt(e)}function Jl(e){if(Array.isArray(e))return e}function ec(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(a.push(i.value),!(t&&a.length===t));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function ar(e,t){if(e){if(typeof e=="string")return Kt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kt(e,t)}}function Kt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function nc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ac(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var na=function(){},wn={},rr={},or=null,ir={mark:na,measure:na};try{typeof window<"u"&&(wn=window),typeof document<"u"&&(rr=document),typeof MutationObserver<"u"&&(or=MutationObserver),typeof performance<"u"&&(ir=performance)}catch{}var rc=wn.navigator||{},aa=rc.userAgent,ra=aa===void 0?"":aa,Se=wn,D=rr,oa=or,ct=ir;Se.document;var ye=!!D.documentElement&&!!D.head&&typeof D.addEventListener=="function"&&typeof D.createElement=="function",sr=~ra.indexOf("MSIE")||~ra.indexOf("Trident/"),ut,ft,dt,mt,vt,pe="___FONT_AWESOME___",Zt=16,lr="fa",cr="svg-inline--fa",Ne="data-fa-i2svg",Qt="data-fa-pseudo-element",oc="data-fa-pseudo-element-pending",kn="data-prefix",xn="data-icon",ia="fontawesome-i2svg",ic="async",sc=["HTML","HEAD","STYLE","SCRIPT"],ur=function(){try{return!0}catch{return!1}}(),R="classic",W="sharp",Sn=[R,W];function rt(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[R]}})}var Ze=rt((ut={},Z(ut,R,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Z(ut,W,{fa:"solid",fass:"solid","fa-solid":"solid"}),ut)),Qe=rt((ft={},Z(ft,R,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Z(ft,W,{solid:"fass"}),ft)),Je=rt((dt={},Z(dt,R,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Z(dt,W,{fass:"fa-solid"}),dt)),lc=rt((mt={},Z(mt,R,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Z(mt,W,{"fa-solid":"fass"}),mt)),cc=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,fr="fa-layers-text",uc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,fc=rt((vt={},Z(vt,R,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Z(vt,W,{900:"fass"}),vt)),dr=[1,2,3,4,5,6,7,8,9,10],dc=dr.concat([11,12,13,14,15,16,17,18,19,20]),mc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Te={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},et=new Set;Object.keys(Qe[R]).map(et.add.bind(et));Object.keys(Qe[W]).map(et.add.bind(et));var vc=[].concat(Sn,at(et),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Te.GROUP,Te.SWAP_OPACITY,Te.PRIMARY,Te.SECONDARY]).concat(dr.map(function(e){return"".concat(e,"x")})).concat(dc.map(function(e){return"w-".concat(e)})),Xe=Se.FontAwesomeConfig||{};function pc(e){var t=D.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function gc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(D&&typeof D.querySelector=="function"){var hc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hc.forEach(function(e){var t=_n(e,2),n=t[0],a=t[1],r=gc(pc(n));r!=null&&(Xe[a]=r)})}var mr={styleDefault:"solid",familyDefault:"classic",cssPrefix:lr,replacementClass:cr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xe.familyPrefix&&(Xe.cssPrefix=Xe.familyPrefix);var Be=h(h({},mr),Xe);Be.autoReplaceSvg||(Be.observeMutations=!1);var _={};Object.keys(mr).forEach(function(e){Object.defineProperty(_,e,{enumerable:!0,set:function(n){Be[e]=n,Ke.forEach(function(a){return a(_)})},get:function(){return Be[e]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(t){Be.cssPrefix=t,Ke.forEach(function(n){return n(_)})},get:function(){return Be.cssPrefix}});Se.FontAwesomeConfig=_;var Ke=[];function bc(e){return Ke.push(e),function(){Ke.splice(Ke.indexOf(e),1)}}var we=Zt,ce={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yc(e){if(!(!e||!ye)){var t=D.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=D.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return D.head.insertBefore(t,a),e}}var _c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){for(var e=12,t="";e-- >0;)t+=_c[Math.random()*62|0];return t}function We(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function En(e){return e.classList?We(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function vr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(vr(e[n]),'" ')},"").trim()}function $t(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ln(e){return e.size!==ce.size||e.x!==ce.x||e.y!==ce.y||e.rotate!==ce.rotate||e.flipX||e.flipY}function kc(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function xc(e){var t=e.transform,n=e.width,a=n===void 0?Zt:n,r=e.height,o=r===void 0?Zt:r,i=e.startCentered,s=i===void 0?!1:i,l="";return s&&sr?l+="translate(".concat(t.x/we-a/2,"em, ").concat(t.y/we-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/we,"em), calc(-50% + ").concat(t.y/we,"em)) "):l+="translate(".concat(t.x/we,"em, ").concat(t.y/we,"em) "),l+="scale(".concat(t.size/we*(t.flipX?-1:1),", ").concat(t.size/we*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Sc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function pr(){var e=lr,t=cr,n=_.cssPrefix,a=_.replacementClass,r=Sc;if(n!==e||a!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var sa=!1;function Ut(){_.autoAddCss&&!sa&&(yc(pr()),sa=!0)}var Ec={mixout:function(){return{dom:{css:pr,insertCss:Ut}}},hooks:function(){return{beforeDOMElementCreation:function(){Ut()},beforeI2svg:function(){Ut()}}}},ge=Se||{};ge[pe]||(ge[pe]={});ge[pe].styles||(ge[pe].styles={});ge[pe].hooks||(ge[pe].hooks={});ge[pe].shims||(ge[pe].shims=[]);var se=ge[pe],gr=[],Lc=function e(){D.removeEventListener("DOMContentLoaded",e),Ct=1,gr.map(function(t){return t()})},Ct=!1;ye&&(Ct=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),Ct||D.addEventListener("DOMContentLoaded",Lc));function Ac(e){ye&&(Ct?setTimeout(e,0):gr.push(e))}function ot(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?vr(e):"<".concat(t," ").concat(wc(a),">").concat(o.map(ot).join(""),"</").concat(t,">")}function la(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Oc=function(t,n){return function(a,r,o,i){return t.call(n,a,r,o,i)}},Wt=function(t,n,a,r){var o=Object.keys(t),i=o.length,s=r!==void 0?Oc(n,r):n,l,u,c;for(a===void 0?(l=1,c=t[o[0]]):(l=0,c=a);l<i;l++)u=o[l],c=s(c,t[u],u,t);return c};function Cc(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Jt(e){var t=Cc(e);return t.length===1?t[0].toString(16):null}function Tc(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ca(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function en(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=ca(t);typeof se.hooks.addPack=="function"&&!r?se.hooks.addPack(e,ca(t)):se.styles[e]=h(h({},se.styles[e]||{}),o),e==="fas"&&en("fa",t)}var pt,gt,ht,De=se.styles,Pc=se.shims,Ic=(pt={},Z(pt,R,Object.values(Je[R])),Z(pt,W,Object.values(Je[W])),pt),An=null,hr={},br={},yr={},_r={},wr={},Nc=(gt={},Z(gt,R,Object.keys(Ze[R])),Z(gt,W,Object.keys(Ze[W])),gt);function $c(e){return~vc.indexOf(e)}function zc(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!$c(r)?r:null}var kr=function(){var t=function(o){return Wt(De,function(i,s,l){return i[l]=Wt(s,o,{}),i},{})};hr=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),br=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),wr=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in De||_.autoFetchSvg,a=Wt(Pc,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});yr=a.names,_r=a.unicodes,An=zt(_.styleDefault,{family:_.familyDefault})};bc(function(e){An=zt(e.styleDefault,{family:_.familyDefault})});kr();function On(e,t){return(hr[e]||{})[t]}function Mc(e,t){return(br[e]||{})[t]}function Pe(e,t){return(wr[e]||{})[t]}function xr(e){return yr[e]||{prefix:null,iconName:null}}function Rc(e){var t=_r[e],n=On("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ee(){return An}var Cn=function(){return{prefix:null,iconName:null,rest:[]}};function zt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?R:n,r=Ze[a][e],o=Qe[a][e]||Qe[a][r],i=e in se.styles?e:null;return o||i||null}var ua=(ht={},Z(ht,R,Object.keys(Je[R])),Z(ht,W,Object.keys(Je[W])),ht);function Mt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,o=(t={},Z(t,R,"".concat(_.cssPrefix,"-").concat(R)),Z(t,W,"".concat(_.cssPrefix,"-").concat(W)),t),i=null,s=R;(e.includes(o[R])||e.some(function(u){return ua[R].includes(u)}))&&(s=R),(e.includes(o[W])||e.some(function(u){return ua[W].includes(u)}))&&(s=W);var l=e.reduce(function(u,c){var f=zc(_.cssPrefix,c);if(De[c]?(c=Ic[s].includes(c)?lc[s][c]:c,i=c,u.prefix=c):Nc[s].indexOf(c)>-1?(i=c,u.prefix=zt(c,{family:s})):f?u.iconName=f:c!==_.replacementClass&&c!==o[R]&&c!==o[W]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var d=i==="fa"?xr(u.iconName):{},p=Pe(u.prefix,u.iconName);d.prefix&&(i=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!De.far&&De.fas&&!_.autoFetchSvg&&(u.prefix="fas")}return u},Cn());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===W&&(De.fass||_.autoFetchSvg)&&(l.prefix="fass",l.iconName=Pe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Ee()||"fas"),l}var Dc=function(){function e(){Kl(this,e),this.definitions={}}return Zl(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=h(h({},n.definitions[s]||{}),i[s]),en(s,i[s]);var l=Je[R][s];l&&en(l,i[s]),kr()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,u=i.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),fa=[],He={},Fe={},Hc=Object.keys(Fe);function Fc(e,t){var n=t.mixoutsTo;return fa=e,He={},Object.keys(Fe).forEach(function(a){Hc.indexOf(a)===-1&&delete Fe[a]}),fa.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),Ot(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){He[i]||(He[i]=[]),He[i].push(o[i])})}a.provides&&a.provides(Fe)}),n}function tn(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=He[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=He[e]||[];r.forEach(function(o){o.apply(null,n)})}function he(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Fe[e]?Fe[e].apply(null,t):void 0}function nn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ee();if(t)return t=Pe(n,t)||t,la(Sr.definitions,n,t)||la(se.styles,n,t)}var Sr=new Dc,jc=function(){_.autoReplaceSvg=!1,_.observeMutations=!1,$e("noAuto")},Bc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ye?($e("beforeI2svg",t),he("pseudoElements2svg",t),he("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,Ac(function(){Uc({autoReplaceSvgRoot:n}),$e("watch",t)})}},Yc={icon:function(t){if(t===null)return null;if(Ot(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=zt(t[0]);return{prefix:a,iconName:Pe(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(_.cssPrefix,"-"))>-1||t.match(cc))){var r=Mt(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ee(),iconName:Pe(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=Ee();return{prefix:o,iconName:Pe(o,t)||t}}}},ae={noAuto:jc,config:_,dom:Bc,parse:Yc,library:Sr,findIconDefinition:nn,toHtml:ot},Uc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?D:n;(Object.keys(se.styles).length>0||_.autoFetchSvg)&&ye&&_.autoReplaceSvg&&ae.dom.i2svg({node:a})};function Rt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return ot(a)})}}),Object.defineProperty(e,"node",{get:function(){if(ye){var a=D.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Wc(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(Ln(i)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=$t(h(h({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Vc(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(_.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:i}),children:a}]}]}function Tn(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,p=d===void 0?!1:d,y=a.found?a:n,S=y.width,k=y.height,E=r==="fak",C=[_.replacementClass,o?"".concat(_.cssPrefix,"-").concat(o):""].filter(function(M){return f.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(f.classes).join(" "),L={children:[],attributes:h(h({},f.attributes),{},{"data-prefix":r,"data-icon":o,class:C,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(k)})},B=E&&!~f.classes.indexOf("fa-fw")?{width:"".concat(S/k*16*.0625,"em")}:{};p&&(L.attributes[Ne]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(c||tt())},children:[l]}),delete L.attributes.title);var $=h(h({},L),{},{prefix:r,iconName:o,main:n,mask:a,maskId:u,transform:i,symbol:s,styles:h(h({},B),f.styles)}),J=a.found&&n.found?he("generateAbstractMask",$)||{children:[],attributes:{}}:he("generateAbstractIcon",$)||{children:[],attributes:{}},b=J.children,m=J.attributes;return $.children=b,$.attributes=m,s?Vc($):Wc($)}function da(e){var t=e.content,n=e.width,a=e.height,r=e.transform,o=e.title,i=e.extra,s=e.watchable,l=s===void 0?!1:s,u=h(h(h({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(u[Ne]="");var c=h({},i.styles);Ln(r)&&(c.transform=xc({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var f=$t(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function qc(e){var t=e.content,n=e.title,a=e.extra,r=h(h(h({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=$t(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var Vt=se.styles;function an(e){var t=e[0],n=e[1],a=e.slice(4),r=_n(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(Te.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(Te.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(Te.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:i}}var Gc={found:!1,width:512,height:512};function Xc(e,t){!ur&&!_.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function rn(e,t){var n=t;return t==="fa"&&_.styleDefault!==null&&(t=Ee()),new Promise(function(a,r){if(he("missingIconAbstract"),n==="fa"){var o=xr(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Vt[t]&&Vt[t][e]){var i=Vt[t][e];return a(an(i))}Xc(e,t),a(h(h({},Gc),{},{icon:_.showMissingIcons&&e?he("missingIconAbstract")||{}:{}}))})}var ma=function(){},on=_.measurePerformance&&ct&&ct.mark&&ct.measure?ct:{mark:ma,measure:ma},Ge='FA "6.2.1"',Kc=function(t){return on.mark("".concat(Ge," ").concat(t," begins")),function(){return Er(t)}},Er=function(t){on.mark("".concat(Ge," ").concat(t," ends")),on.measure("".concat(Ge," ").concat(t),"".concat(Ge," ").concat(t," begins"),"".concat(Ge," ").concat(t," ends"))},Pn={begin:Kc,end:Er},_t=function(){};function va(e){var t=e.getAttribute?e.getAttribute(Ne):null;return typeof t=="string"}function Zc(e){var t=e.getAttribute?e.getAttribute(kn):null,n=e.getAttribute?e.getAttribute(xn):null;return t&&n}function Qc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(_.replacementClass)}function Jc(){if(_.autoReplaceSvg===!0)return wt.replace;var e=wt[_.autoReplaceSvg];return e||wt.replace}function eu(e){return D.createElementNS("http://www.w3.org/2000/svg",e)}function tu(e){return D.createElement(e)}function Lr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?eu:tu:n;if(typeof e=="string")return D.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(Lr(i,{ceFn:a}))}),r}function nu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var wt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Lr(r),n)}),n.getAttribute(Ne)===null&&_.keepOriginalSource){var a=D.createComment(nu(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~En(n).indexOf(_.replacementClass))return wt.replace(t);var r=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===_.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return ot(s)}).join(`
`);n.setAttribute(Ne,""),n.innerHTML=i}};function pa(e){e()}function Ar(e,t){var n=typeof t=="function"?t:_t;if(e.length===0)n();else{var a=pa;_.mutateApproach===ic&&(a=Se.requestAnimationFrame||pa),a(function(){var r=Jc(),o=Pn.begin("mutate");e.map(r),o(),n()})}}var In=!1;function Or(){In=!0}function sn(){In=!1}var Tt=null;function ga(e){if(oa&&_.observeMutations){var t=e.treeCallback,n=t===void 0?_t:t,a=e.nodeCallback,r=a===void 0?_t:a,o=e.pseudoElementsCallback,i=o===void 0?_t:o,s=e.observeMutationsRoot,l=s===void 0?D:s;Tt=new oa(function(u){if(!In){var c=Ee();We(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!va(f.addedNodes[0])&&(_.searchPseudoElements&&i(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&_.searchPseudoElements&&i(f.target.parentNode),f.type==="attributes"&&va(f.target)&&~mc.indexOf(f.attributeName))if(f.attributeName==="class"&&Zc(f.target)){var d=Mt(En(f.target)),p=d.prefix,y=d.iconName;f.target.setAttribute(kn,p||c),y&&f.target.setAttribute(xn,y)}else Qc(f.target)&&r(f.target)})}}),ye&&Tt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function au(){Tt&&Tt.disconnect()}function ru(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function ou(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Mt(En(e));return r.prefix||(r.prefix=Ee()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Mc(r.prefix,e.innerText)||On(r.prefix,Jt(e.innerText))),!r.iconName&&_.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function iu(e){var t=We(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return _.autoA11y&&(n?t["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(a||tt()):(t["aria-hidden"]="true",t.focusable="false")),t}function su(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ce,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ou(e),a=n.iconName,r=n.prefix,o=n.rest,i=iu(e),s=tn("parseNodeAttributes",{},e),l=t.styleParser?ru(e):[];return h({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:ce,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var lu=se.styles;function Cr(e){var t=_.autoReplaceSvg==="nest"?ha(e,{styleParser:!1}):ha(e);return~t.extra.classes.indexOf(fr)?he("generateLayersText",e,t):he("generateSvgReplacementMutation",e,t)}var Le=new Set;Sn.map(function(e){Le.add("fa-".concat(e))});Object.keys(Ze[R]).map(Le.add.bind(Le));Object.keys(Ze[W]).map(Le.add.bind(Le));Le=at(Le);function ba(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ye)return Promise.resolve();var n=D.documentElement.classList,a=function(f){return n.add("".concat(ia,"-").concat(f))},r=function(f){return n.remove("".concat(ia,"-").concat(f))},o=_.autoFetchSvg?Le:Sn.map(function(c){return"fa-".concat(c)}).concat(Object.keys(lu));o.includes("fa")||o.push("fa");var i=[".".concat(fr,":not([").concat(Ne,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Ne,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=We(e.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Pn.begin("onTree"),u=s.reduce(function(c,f){try{var d=Cr(f);d&&c.push(d)}catch(p){ur||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Ar(d,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function cu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cr(e).then(function(n){n&&Ar([n],t)})}function uu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:nn(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:nn(r||{})),e(a,h(h({},n),{},{mask:r}))}}var fu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?ce:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,p=n.titleId,y=p===void 0?null:p,S=n.classes,k=S===void 0?[]:S,E=n.attributes,C=E===void 0?{}:E,L=n.styles,B=L===void 0?{}:L;if(t){var $=t.prefix,J=t.iconName,b=t.icon;return Rt(h({type:"icon"},t),function(){return $e("beforeDOMElementCreation",{iconDefinition:t,params:n}),_.autoA11y&&(d?C["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(y||tt()):(C["aria-hidden"]="true",C.focusable="false")),Tn({icons:{main:an(b),mask:l?an(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:J,transform:h(h({},ce),r),symbol:i,title:d,maskId:c,titleId:y,extra:{attributes:C,styles:B,classes:k}})})}},du={mixout:function(){return{icon:uu(fu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ba,n.nodeCallback=cu,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?D:a,o=n.callback,i=o===void 0?function(){}:o;return ba(r,i)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,l=a.transform,u=a.symbol,c=a.mask,f=a.maskId,d=a.extra;return new Promise(function(p,y){Promise.all([rn(r,s),c.iconName?rn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var k=_n(S,2),E=k[0],C=k[1];p([n,Tn({icons:{main:E,mask:C},prefix:s,iconName:r,transform:l,symbol:u,maskId:f,title:o,titleId:i,extra:d,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=$t(s);l.length>0&&(r.style=l);var u;return Ln(i)&&(u=he("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},mu={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return Rt({type:"layer"},function(){$e("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers")].concat(at(o)).join(" ")},children:i}]})}}}},vu={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,u=l===void 0?{}:l,c=a.styles,f=c===void 0?{}:c;return Rt({type:"counter",content:n},function(){return $e("beforeDOMElementCreation",{content:n,params:a}),qc({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(_.cssPrefix,"-layers-counter")].concat(at(s))}})})}}}},pu={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?ce:r,i=a.title,s=i===void 0?null:i,l=a.classes,u=l===void 0?[]:l,c=a.attributes,f=c===void 0?{}:c,d=a.styles,p=d===void 0?{}:d;return Rt({type:"text",content:n},function(){return $e("beforeDOMElementCreation",{content:n,params:a}),da({content:n,transform:h(h({},ce),o),title:s,extra:{attributes:f,styles:p,classes:["".concat(_.cssPrefix,"-layers-text")].concat(at(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,l=null;if(sr){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return _.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,da({content:n.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},gu=new RegExp('"',"ug"),ya=[1105920,1112319];function hu(e){var t=e.replace(gu,""),n=Tc(t,0),a=n>=ya[0]&&n<=ya[1],r=t.length===2?t[0]===t[1]:!1;return{value:Jt(r?t[0]:t),isSecondary:a||r}}function _a(e,t){var n="".concat(oc).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var o=We(e.children),i=o.filter(function(b){return b.getAttribute(Qt)===t})[0],s=Se.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(uc),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?W:R,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qe[d][l[2].toLowerCase()]:fc[d][u],y=hu(f),S=y.value,k=y.isSecondary,E=l[0].startsWith("FontAwesome"),C=On(p,S),L=C;if(E){var B=Rc(S);B.iconName&&B.prefix&&(C=B.iconName,p=B.prefix)}if(C&&!k&&(!i||i.getAttribute(kn)!==p||i.getAttribute(xn)!==L)){e.setAttribute(n,L),i&&e.removeChild(i);var $=su(),J=$.extra;J.attributes[Qt]=t,rn(C,p).then(function(b){var m=Tn(h(h({},$),{},{icons:{main:b,mask:Cn()},prefix:p,iconName:L,extra:J,watchable:!0})),M=D.createElement("svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=m.map(function(Y){return ot(Y)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function bu(e){return Promise.all([_a(e,"::before"),_a(e,"::after")])}function yu(e){return e.parentNode!==document.head&&!~sc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Qt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wa(e){if(ye)return new Promise(function(t,n){var a=We(e.querySelectorAll("*")).filter(yu).map(bu),r=Pn.begin("searchPseudoElements");Or(),Promise.all(a).then(function(){r(),sn(),t()}).catch(function(){r(),sn(),n()})})}var _u={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wa,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?D:a;_.searchPseudoElements&&wa(r)}}},ka=!1,wu={mixout:function(){return{dom:{unwatch:function(){Or(),ka=!0}}}},hooks:function(){return{bootstrap:function(){ga(tn("mutationObserverCallbacks",{}))},noAuto:function(){au()},watch:function(n){var a=n.observeMutationsRoot;ka?sn():ga(tn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},xa=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},ku={mixout:function(){return{parse:{transform:function(n){return xa(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=xa(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:f,path:d};return{tag:"g",attributes:h({},p.outer),children:[{tag:"g",attributes:h({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:h(h({},a.icon.attributes),p.path)}]}]}}}},qt={x:0,y:0,width:"100%",height:"100%"};function Sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function xu(e){return e.tag==="g"?e.children:[e]}var Su={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?Mt(r.split(" ").map(function(i){return i.trim()})):Cn();return o.prefix||(o.prefix=Ee()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,u=o.width,c=o.icon,f=i.width,d=i.icon,p=kc({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:h(h({},qt),{},{fill:"white"})},S=c.children?{children:c.children.map(Sa)}:{},k={tag:"g",attributes:h({},p.inner),children:[Sa(h({tag:c.tag,attributes:h(h({},c.attributes),p.path)},S))]},E={tag:"g",attributes:h({},p.outer),children:[k]},C="mask-".concat(s||tt()),L="clip-".concat(s||tt()),B={tag:"mask",attributes:h(h({},qt),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,E]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:xu(d)},B]};return a.push($,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},qt)}),{children:a,attributes:r}}}},Eu={provides:function(t){var n=!1;Se.matchMedia&&(n=Se.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=h(h({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:h(h({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:h(h({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Lu={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},Au=[Ec,du,mu,vu,pu,_u,wu,ku,Su,Eu,Lu];Fc(Au,{mixoutsTo:ae});ae.noAuto;ae.config;var Ou=ae.library,Cu=ae.dom;ae.parse;ae.findIconDefinition;ae.toHtml;ae.icon;ae.layer;ae.text;ae.counter;var Tu={prefix:"fab",iconName:"twitch",icon:[512,512,[],"f1e8","M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"]},Pu={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},Iu={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"]};Ou.add(Tu,Iu,Pu);Cu.watch();const Nu=Oe(),bt=[Oo,Po,zo,qo,Zo,ai,Xl,Nu],$u=[["v-8daa1a0e","/",{title:"aciddotEXE"},["/index.html","/README.md"]],["v-3706649a","/404.html",{title:""},["/404"]]];var Ea=N({name:"Vuepress",setup(){const e=ho();return()=>H(e.value)}}),zu=()=>$u.reduce((e,[t,n,a,r])=>(e.push({name:t,path:n,component:Ea,meta:a},...r.map(o=>({path:o,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:Ea}]),Mu=io,Ru=()=>{const e=ro({history:Mu(Ia("/")),routes:zu(),scrollBehavior:(t,n,a)=>a||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{var a;(t.path!==n.path||n===oo)&&([ke.value]=await Promise.all([fe.resolvePageData(t.name),(a=Na[t.name])==null?void 0:a.__asyncLoader()]))}),e},Du=e=>{e.component("ClientOnly",mn),e.component("Content",ko)},Hu=(e,t,n)=>{const a=w(()=>fe.resolveLayouts(n)),r=w(()=>fe.resolveRouteLocale(Re.value.locales,t.currentRoute.value.path)),o=w(()=>fe.resolveSiteLocaleData(Re.value,r.value)),i=w(()=>fe.resolvePageFrontmatter(ke.value)),s=w(()=>fe.resolvePageHeadTitle(ke.value,o.value)),l=w(()=>fe.resolvePageHead(s.value,i.value,o.value)),u=w(()=>fe.resolvePageLang(ke.value)),c=w(()=>fe.resolvePageLayout(ke.value,a.value));return e.provide(fo,a),e.provide(za,i),e.provide(po,s),e.provide(Ma,l),e.provide(Ra,u),e.provide(Da,c),e.provide(fn,r),e.provide(Ha,o),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>i.value},$head:{get:()=>l.value},$headTitle:{get:()=>s.value},$lang:{get:()=>u.value},$page:{get:()=>ke.value},$routeLocale:{get:()=>r.value},$site:{get:()=>Re.value},$siteLocale:{get:()=>o.value},$withBase:{get:()=>vn}}),{layouts:a,pageData:ke,pageFrontmatter:i,pageHead:l,pageHeadTitle:s,pageLang:u,pageLayout:c,routeLocale:r,siteData:Re,siteLocaleData:o}},Fu=()=>{const e=Ae(),t=vo(),n=go(),a=q([]),r=()=>{t.value.forEach(i=>{const s=ju(i);s&&a.value.push(s)})},o=()=>{document.documentElement.lang=n.value,a.value.forEach(i=>{i.parentNode===document.head&&document.head.removeChild(i)}),a.value.splice(0,a.value.length),t.value.forEach(i=>{const s=Bu(i);s!==null&&(document.head.appendChild(s),a.value.push(s))})};cn(yo,o),le(()=>{r(),o(),Ue(()=>e.path,()=>o())})},ju=([e,t,n=""])=>{const a=Object.entries(t).map(([s,l])=>ue(l)?`[${s}=${JSON.stringify(l)}]`:l===!0?`[${s}]`:"").join(""),r=`head > ${e}${a}`;return Array.from(document.querySelectorAll(r)).find(s=>s.innerText===n)||null},Bu=([e,t,n])=>{if(!ue(e))return null;const a=document.createElement(e);return un(t)&&Object.entries(t).forEach(([r,o])=>{ue(o)?a.setAttribute(r,o):o===!0&&a.setAttribute(r,"")}),ue(n)&&a.appendChild(document.createTextNode(n)),a},Yu=no,Uu=async()=>{var n;const e=Yu({name:"VuepressApp",setup(){var a;Fu();for(const r of bt)(a=r.setup)==null||a.call(r);return()=>[H(ao),...bt.flatMap(({rootComponents:r=[]})=>r.map(o=>H(o)))]}}),t=Ru();Du(e),Hu(e,t,bt);for(const a of bt)await((n=a.enhance)==null?void 0:n.call(a,{app:e,router:t,siteData:Re}));return e.use(t),{app:e,router:t}};Uu().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{Uu as createVueApp};
