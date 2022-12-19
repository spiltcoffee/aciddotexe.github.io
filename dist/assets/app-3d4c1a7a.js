import{d as Gt,r as q,a as Br,b as Yr,c as N,i as ue,e as It,f as Ur,g as La,o as le,h as w,j,k as be,l as at,m as Aa,u as Ye,n as Oa,T as cn,p as g,q as k,s as M,t as je,v as X,w as se,x as Ca,_ as F,y as Wr,z as v,A as Vr,B as qr,C as Ue,D as Gr,E as Ta,F as Xr,G as Kr,H as un,I as Pa,J as Zr,K as fn,L as Ae,M as ve,N as D,O as ae,P as xe,Q as V,R as I,S as rt,U as K,V as ee,W as Mn,X as Qr,Y as Jr,Z as St,$ as Et,a0 as Ia,a1 as eo,a2 as to,a3 as no,a4 as ao,a5 as ro,a6 as oo,a7 as io}from"./framework-8fa3e4ce.js";const so="modulepreload",lo=function(e){return"/"+e},zn={},Ze=function(t,n,a){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=lo(o),o in zn)return;zn[o]=!0;const i=o.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(!!a)for(let c=r.length-1;c>=0;c--){const f=r[c];if(f.href===o&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":so,i||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),i)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},co={"v-8daa1a0e":()=>Ze(()=>import("./index.html-23f96295.js"),[]).then(({data:e})=>e),"v-3706649a":()=>Ze(()=>import("./404.html-60b35caa.js"),[]).then(({data:e})=>e)},uo=JSON.parse('{"base":"/","lang":"en-US","title":"aciddotEXE","description":"Local yelling lady","head":[["link",{"rel":"icon","href":"/logo.png"}]],"locales":{}}'),Na={"v-8daa1a0e":Gt(()=>Ze(()=>import("./index.html-291d2faf.js"),["assets/index.html-291d2faf.js","assets/framework-8fa3e4ce.js"])),"v-3706649a":Gt(()=>Ze(()=>import("./404.html-91dc2652.js"),["assets/404.html-91dc2652.js","assets/framework-8fa3e4ce.js"]))};var fo=Symbol(""),mo=q(co),$a=Br({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),ke=q($a),Ie=()=>ke,Ma=Symbol(""),de=()=>{const e=be(Ma);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},za=Symbol(""),vo=()=>{const e=be(za);if(!e)throw new Error("usePageHead() is called without provider.");return e},po=Symbol(""),Ra=Symbol(""),go=()=>{const e=be(Ra);if(!e)throw new Error("usePageLang() is called without provider.");return e},Da=Symbol(""),ho=()=>{const e=be(Da);if(!e)throw new Error("usePageLayout() is called without provider.");return e},dn=Symbol(""),Nt=()=>{const e=be(dn);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},Re=q(uo),bo=()=>Re,Ha=Symbol(""),mn=()=>{const e=be(Ha);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},yo=Symbol(""),_o="Layout",wo="NotFound",fe=Yr({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageData:async e=>{const t=mo.value[e];return await(t==null?void 0:t())??$a},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,n)=>{const a=ue(t.description)?t.description:n.description,r=[...It(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:a}]];return Ur(r)},resolvePageHeadTitle:(e,t)=>`${e.title?`${e.title}`:""}${t.title?` | ${t.title}`:""}`,resolvePageLang:e=>e.lang||"en",resolvePageLayout:(e,t)=>{let n;if(e.path){const a=e.frontmatter.layout;ue(a)?n=a:n=_o}else n=wo;return t[n]},resolveRouteLocale:(e,t)=>La(e,t),resolveSiteLocaleData:(e,t)=>({...e,...e.locales[t]})}),vn=N({name:"ClientOnly",setup(e,t){const n=q(!1);return le(()=>{n.value=!0}),()=>{var a,r;return n.value?(r=(a=t.slots).default)==null?void 0:r.call(a):null}}}),ko=N({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const t=Ie(),n=w(()=>Na[e.pageKey||t.value.key]);return()=>n.value?j(n.value):j("div","404 Not Found")}}),Oe=(e={})=>e,pn=e=>at(e)?e:`/${Aa(e)}`;function Fa(e,t,n){var a,r,o;t===void 0&&(t=50),n===void 0&&(n={});var i=(a=n.isImmediate)!=null&&a,s=(r=n.callback)!=null&&r,l=n.maxWait,u=Date.now(),c=[];function f(){if(l!==void 0){var p=Date.now()-u;if(p+t>=l)return l-p}return t}var d=function(){var p=[].slice.call(arguments),y=this;return new Promise(function(S,x){var E=i&&o===void 0;if(o!==void 0&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,u=Date.now(),!i){var L=e.apply(y,p);s&&s(L),c.forEach(function(B){return(0,B.resolve)(L)}),c=[]}},f()),E){var C=e.apply(y,p);return s&&s(C),S(C)}c.push({resolve:S,reject:x})})};return d.cancel=function(p){o!==void 0&&clearTimeout(o),c.forEach(function(y){return(0,y.reject)(p)}),c=[]},d}const xo=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:a=5})=>{const r=Ye(),i=Fa(()=>{var S,x;const s=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(s-0)<a){Rn(r,"");return}const u=window.innerHeight+s,c=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),f=Math.abs(c-u)<a,d=Array.from(document.querySelectorAll(e)),y=Array.from(document.querySelectorAll(t)).filter(E=>d.some(C=>C.hash===E.hash));for(let E=0;E<y.length;E++){const C=y[E],L=y[E+1],B=s>=(((S=C.parentElement)==null?void 0:S.offsetTop)??0)-a,$=!L||s<(((x=L.parentElement)==null?void 0:x.offsetTop)??0)-a;if(!(B&&$))continue;const b=decodeURIComponent(r.currentRoute.value.hash),m=decodeURIComponent(C.hash);if(b===m)return;if(f){for(let z=E+1;z<y.length;z++)if(b===decodeURIComponent(y[z].hash))return}Rn(r,m);return}},n);le(()=>{window.addEventListener("scroll",i)}),Oa(()=>{window.removeEventListener("scroll",i)})},Rn=async(e,t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:t,force:!0}).finally(()=>e.options.scrollBehavior=n)},So="a.sidebar-item",Eo=".header-anchor",Lo=300,Ao=5,Oo=Oe({setup(){xo({headerLinkSelector:So,headerAnchorSelector:Eo,delay:Lo,offset:Ao})}}),Dn=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,Co=()=>window.scrollTo({top:0,behavior:"smooth"});const To=N({name:"BackToTop",setup(){const e=q(0),t=w(()=>e.value>300),n=Fa(()=>{e.value=Dn()},100);le(()=>{e.value=Dn(),window.addEventListener("scroll",()=>n())});const a=j("div",{class:"back-to-top",onClick:Co});return()=>j(cn,{name:"back-to-top"},()=>t.value?a:null)}}),Po=Oe({rootComponents:[To]});const Io=j("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[j("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),j("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),No=N({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const t=Nt(),n=w(()=>e.locales[t.value]??{openInNewWindow:"open in new window"});return()=>j("span",[Io,j("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}}),$o={"/":{openInNewWindow:"open in new window"}},Mo=Oe({enhance({app:e}){e.component("ExternalLinkIcon",j(No,{locales:$o}))}});var Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ct=function(t){return t.tagName==="IMG"},zo=function(t){return NodeList.prototype.isPrototypeOf(t)},wt=function(t){return t&&t.nodeType===1},Hn=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Fn=function(t){try{return Array.isArray(t)?t.filter(ct):zo(t)?[].slice.call(t).filter(ct):wt(t)?[t].filter(ct):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(ct):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Ro=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},Do=function(t){var n=t.getBoundingClientRect(),a=n.top,r=n.left,o=n.width,i=n.height,s=t.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,u=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return s.removeAttribute("id"),s.style.position="absolute",s.style.top=a+l+"px",s.style.left=r+u+"px",s.style.width=o+"px",s.style.height=i+"px",s.style.transform="",s},ze=function(t,n){var a=Ce({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,a);var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,a.bubbles,a.cancelable,a.detail),r},Ho=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=window.Promise||function(A){function O(){}A(O,O)},r=function(A){var O=A.target;if(O===z){y();return}L.indexOf(O)!==-1&&S({target:O})},o=function(){if(!($||!m.original)){var A=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(J-A)>b.scrollOffset&&setTimeout(y,150)}},i=function(A){var O=A.key||A.keyCode;(O==="Escape"||O==="Esc"||O===27)&&y()},s=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},O=A;if(A.background&&(z.style.background=A.background),A.container&&A.container instanceof Object&&(O.container=Ce({},b.container,A.container)),A.template){var U=wt(A.template)?A.template:document.querySelector(A.template);O.template=U}return b=Ce({},b,O),L.forEach(function(G){G.dispatchEvent(ze("medium-zoom:update",{detail:{zoom:Y}}))}),Y},l=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(Ce({},b,A))},u=function(){for(var A=arguments.length,O=Array(A),U=0;U<A;U++)O[U]=arguments[U];var G=O.reduce(function(T,te){return[].concat(T,Fn(te))},[]);return G.filter(function(T){return L.indexOf(T)===-1}).forEach(function(T){L.push(T),T.classList.add("medium-zoom-image")}),B.forEach(function(T){var te=T.type,oe=T.listener,Me=T.options;G.forEach(function(_e){_e.addEventListener(te,oe,Me)})}),Y},c=function(){for(var A=arguments.length,O=Array(A),U=0;U<A;U++)O[U]=arguments[U];m.zoomed&&y();var G=O.length>0?O.reduce(function(T,te){return[].concat(T,Fn(te))},[]):L;return G.forEach(function(T){T.classList.remove("medium-zoom-image"),T.dispatchEvent(ze("medium-zoom:detach",{detail:{zoom:Y}}))}),L=L.filter(function(T){return G.indexOf(T)===-1}),Y},f=function(A,O){var U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return L.forEach(function(G){G.addEventListener("medium-zoom:"+A,O,U)}),B.push({type:"medium-zoom:"+A,listener:O,options:U}),Y},d=function(A,O){var U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return L.forEach(function(G){G.removeEventListener("medium-zoom:"+A,O,U)}),B=B.filter(function(G){return!(G.type==="medium-zoom:"+A&&G.listener.toString()===O.toString())}),Y},p=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},O=A.target,U=function(){var T={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},te=void 0,oe=void 0;if(b.container)if(b.container instanceof Object)T=Ce({},T,b.container),te=T.width-T.left-T.right-b.margin*2,oe=T.height-T.top-T.bottom-b.margin*2;else{var Me=wt(b.container)?b.container:document.querySelector(b.container),_e=Me.getBoundingClientRect(),Dt=_e.width,Pr=_e.height,Ir=_e.left,Nr=_e.top;T=Ce({},T,{width:Dt,height:Pr,left:Ir,top:Nr})}te=te||T.width-b.margin*2,oe=oe||T.height-b.margin*2;var Ve=m.zoomedHd||m.original,$r=Hn(Ve)?te:Ve.naturalWidth||te,Mr=Hn(Ve)?oe:Ve.naturalHeight||oe,lt=Ve.getBoundingClientRect(),zr=lt.top,Rr=lt.left,Ht=lt.width,Ft=lt.height,Dr=Math.min(Math.max(Ht,$r),te)/Ht,Hr=Math.min(Math.max(Ft,Mr),oe)/Ft,jt=Math.min(Dr,Hr),Fr=(-Rr+(te-Ht)/2+b.margin+T.left)/jt,jr=(-zr+(oe-Ft)/2+b.margin+T.top)/jt,$n="scale("+jt+") translate3d("+Fr+"px, "+jr+"px, 0)";m.zoomed.style.transform=$n,m.zoomedHd&&(m.zoomedHd.style.transform=$n)};return new a(function(G){if(O&&L.indexOf(O)===-1){G(Y);return}var T=function Dt(){$=!1,m.zoomed.removeEventListener("transitionend",Dt),m.original.dispatchEvent(ze("medium-zoom:opened",{detail:{zoom:Y}})),G(Y)};if(m.zoomed){G(Y);return}if(O)m.original=O;else if(L.length>0){var te=L;m.original=te[0]}else{G(Y);return}if(m.original.dispatchEvent(ze("medium-zoom:open",{detail:{zoom:Y}})),J=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,$=!0,m.zoomed=Do(m.original),document.body.appendChild(z),b.template){var oe=wt(b.template)?b.template:document.querySelector(b.template);m.template=document.createElement("div"),m.template.appendChild(oe.content.cloneNode(!0)),document.body.appendChild(m.template)}if(m.original.parentElement&&m.original.parentElement.tagName==="PICTURE"&&m.original.currentSrc&&(m.zoomed.src=m.original.currentSrc),document.body.appendChild(m.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),m.original.classList.add("medium-zoom-image--hidden"),m.zoomed.classList.add("medium-zoom-image--opened"),m.zoomed.addEventListener("click",y),m.zoomed.addEventListener("transitionend",T),m.original.getAttribute("data-zoom-src")){m.zoomedHd=m.zoomed.cloneNode(),m.zoomedHd.removeAttribute("srcset"),m.zoomedHd.removeAttribute("sizes"),m.zoomedHd.removeAttribute("loading"),m.zoomedHd.src=m.zoomed.getAttribute("data-zoom-src"),m.zoomedHd.onerror=function(){clearInterval(Me),console.warn("Unable to reach the zoom image target "+m.zoomedHd.src),m.zoomedHd=null,U()};var Me=setInterval(function(){m.zoomedHd.complete&&(clearInterval(Me),m.zoomedHd.classList.add("medium-zoom-image--opened"),m.zoomedHd.addEventListener("click",y),document.body.appendChild(m.zoomedHd),U())},10)}else if(m.original.hasAttribute("srcset")){m.zoomedHd=m.zoomed.cloneNode(),m.zoomedHd.removeAttribute("sizes"),m.zoomedHd.removeAttribute("loading");var _e=m.zoomedHd.addEventListener("load",function(){m.zoomedHd.removeEventListener("load",_e),m.zoomedHd.classList.add("medium-zoom-image--opened"),m.zoomedHd.addEventListener("click",y),document.body.appendChild(m.zoomedHd),U()})}else U()})},y=function(){return new a(function(A){if($||!m.original){A(Y);return}var O=function U(){m.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(m.zoomed),m.zoomedHd&&document.body.removeChild(m.zoomedHd),document.body.removeChild(z),m.zoomed.classList.remove("medium-zoom-image--opened"),m.template&&document.body.removeChild(m.template),$=!1,m.zoomed.removeEventListener("transitionend",U),m.original.dispatchEvent(ze("medium-zoom:closed",{detail:{zoom:Y}})),m.original=null,m.zoomed=null,m.zoomedHd=null,m.template=null,A(Y)};$=!0,document.body.classList.remove("medium-zoom--opened"),m.zoomed.style.transform="",m.zoomedHd&&(m.zoomedHd.style.transform=""),m.template&&(m.template.style.transition="opacity 150ms",m.template.style.opacity=0),m.original.dispatchEvent(ze("medium-zoom:close",{detail:{zoom:Y}})),m.zoomed.addEventListener("transitionend",O)})},S=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},O=A.target;return m.original?y():p({target:O})},x=function(){return b},E=function(){return L},C=function(){return m.original},L=[],B=[],$=!1,J=0,b=n,m={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?b=t:(t||typeof t=="string")&&u(t),b=Ce({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},b);var z=Ro(b.background);document.addEventListener("click",r),document.addEventListener("keyup",i),document.addEventListener("scroll",o),window.addEventListener("resize",y);var Y={open:p,close:y,toggle:S,update:s,clone:l,attach:u,detach:c,on:f,off:d,getOptions:x,getImages:E,getZoomedImage:C};return Y};function Fo(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var jo=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Fo(jo);const Bo=Ho,Yo=Symbol("mediumZoom");const Uo=".theme-default-content > img, .theme-default-content :not(a) > img",Wo={},Vo=300,qo=Oe({enhance({app:e,router:t}){const n=Bo(Wo);n.refresh=(a=Uo)=>{n.detach(),n.attach(a)},e.provide(Yo,n),t.afterEach(()=>{setTimeout(()=>n.refresh(),Vo)})}});const P={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const t=P.isStarted();e=Bt(e,P.settings.minimum,1),P.status=e===1?null:e;const n=P.render(!t),a=n.querySelector(P.settings.barSelector),r=P.settings.speed,o=P.settings.easing;return n.offsetWidth,Go(i=>{ut(a,{transform:"translate3d("+jn(e)+"%,0,0)",transition:"all "+r+"ms "+o}),e===1?(ut(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){ut(n,{transition:"all "+r+"ms linear",opacity:"0"}),setTimeout(function(){P.remove(),i()},r)},r)):setTimeout(()=>i(),r)}),P},isStarted:()=>typeof P.status=="number",start:()=>{P.status||P.set(0);const e=()=>{setTimeout(()=>{P.status&&(P.trickle(),e())},P.settings.trickleSpeed)};return P.settings.trickle&&e(),P},done:e=>!e&&!P.status?P:P.inc(.3+.5*Math.random()).set(1),inc:e=>{let t=P.status;return t?(typeof e!="number"&&(e=(1-t)*Bt(Math.random()*t,.1,.95)),t=Bt(t+e,0,.994),P.set(t)):P.start()},trickle:()=>P.inc(Math.random()*P.settings.trickleRate),render:e=>{if(P.isRendered())return document.getElementById("nprogress");Bn(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=P.settings.template;const n=t.querySelector(P.settings.barSelector),a=e?"-100":jn(P.status||0),r=document.querySelector(P.settings.parent);return ut(n,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),r!==document.body&&Bn(r,"nprogress-custom-parent"),r==null||r.appendChild(t),t},remove:()=>{Yn(document.documentElement,"nprogress-busy"),Yn(document.querySelector(P.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&Xo(e)},isRendered:()=>!!document.getElementById("nprogress")},Bt=(e,t,n)=>e<t?t:e>n?n:e,jn=e=>(-1+e)*100,Go=function(){const e=[];function t(){const n=e.shift();n&&n(t)}return function(n){e.push(n),e.length===1&&t()}}(),ut=function(){const e=["Webkit","O","Moz","ms"],t={};function n(i){return i.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(s,l){return l.toUpperCase()})}function a(i){const s=document.body.style;if(i in s)return i;let l=e.length;const u=i.charAt(0).toUpperCase()+i.slice(1);let c;for(;l--;)if(c=e[l]+u,c in s)return c;return i}function r(i){return i=n(i),t[i]||(t[i]=a(i))}function o(i,s,l){s=r(s),i.style[s]=l}return function(i,s){for(const l in s){const u=s[l];u!==void 0&&Object.prototype.hasOwnProperty.call(s,l)&&o(i,l,u)}}}(),ja=(e,t)=>(typeof e=="string"?e:gn(e)).indexOf(" "+t+" ")>=0,Bn=(e,t)=>{const n=gn(e),a=n+t;ja(n,t)||(e.className=a.substring(1))},Yn=(e,t)=>{const n=gn(e);if(!ja(e,t))return;const a=n.replace(" "+t+" "," ");e.className=a.substring(1,a.length-1)},gn=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),Xo=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};const Ko=()=>{le(()=>{const e=Ye(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||P.start()}),e.afterEach(n=>{t.add(n.path),P.done()})})},Zo=Oe({setup(){Ko()}}),Qo=JSON.parse(`{"logo":"/logo.png","sidebar":false,"navbar":[{"icon":"fa-brands fa-twitch","text":"Twitch","link":"https://www.twitch.tv/aciddotexe"},{"icon":"fa-brands fa-mastodon","text":"Mastodon","link":"https://mastodon.au/@aciddotEXE","rel":"me noopener noreferrer"},{"icon":"fa-brands fa-twitter","text":"Twitter","link":"https://twitter.com/aciddotexe"}],"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),Jo=q(Qo),ei=()=>Jo,Ba=Symbol(""),ti=()=>{const e=be(Ba);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},ni=(e,t)=>{var n;return{...e,...(n=e.locales)==null?void 0:n[t]}},ai=Oe({enhance({app:e}){const t=ei(),n=e._context.provides[dn],a=w(()=>ni(t.value,n.value));e.provide(Ba,a),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return a.value}}})}}),ri=N({__name:"Badge",props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(e){return(t,n)=>(g(),k("span",{class:se(["badge",e.type]),style:Ca({verticalAlign:e.vertical})},[M(t.$slots,"default",{},()=>[je(X(e.text),1)])],6))}}),oi=F(ri,[["__file","Badge.vue"]]),ii=N({name:"CodeGroup",setup(e,{slots:t}){const n=q(-1),a=q([]),r=(s=n.value)=>{s<a.value.length-1?n.value=s+1:n.value=0,a.value[n.value].focus()},o=(s=n.value)=>{s>0?n.value=s-1:n.value=a.value.length-1,a.value[n.value].focus()},i=(s,l)=>{s.key===" "||s.key==="Enter"?(s.preventDefault(),n.value=l):s.key==="ArrowRight"?(s.preventDefault(),r(l)):s.key==="ArrowLeft"&&(s.preventDefault(),o(l))};return()=>{var l;const s=(((l=t.default)==null?void 0:l.call(t))||[]).filter(u=>u.type.name==="CodeGroupItem").map(u=>(u.props===null&&(u.props={}),u));return s.length===0?null:(n.value<0||n.value>s.length-1?(n.value=s.findIndex(u=>u.props.active===""||u.props.active===!0),n.value===-1&&(n.value=0)):s.forEach((u,c)=>{u.props.active=c===n.value}),j("div",{class:"code-group"},[j("div",{class:"code-group__nav"},j("ul",{class:"code-group__ul"},s.map((u,c)=>{const f=c===n.value;return j("li",{class:"code-group__li"},j("button",{ref:d=>{d&&(a.value[c]=d)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":f},ariaPressed:f,ariaExpanded:f,onClick:()=>n.value=c,onKeydown:d=>i(d,c)},u.props.title))}))),s]))}}}),si=["aria-selected"],li=N({name:"CodeGroupItem"}),ci=N({...li,props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(e){return(t,n)=>(g(),k("div",{class:se(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[M(t.$slots,"default")],10,si))}}),ui=F(ci,[["__file","CodeGroupItem.vue"]]);var Un;const Ya=typeof window<"u",fi=e=>typeof e=="function",di=e=>typeof e=="string",mi=()=>{};Ya&&((Un=window==null?void 0:window.navigator)!=null&&Un.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Lt(e){return typeof e=="function"?e():v(e)}function vi(e,t){function n(...a){e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})}return n}const Ua=e=>e();function pi(e=Ua){const t=q(!0);function n(){t.value=!1}function a(){t.value=!0}return{isActive:t,pause:n,resume:a,eventFilter:(...o)=>{t.value&&e(...o)}}}function gi(e){return e}function Wa(e){return Vr()?(qr(e),!0):!1}function hi(e){return typeof e=="function"?w(e):q(e)}function bi(e,t=!0){Gr()?le(e):t?e():Ta(e)}function yi(e=!1,t={}){const{truthyValue:n=!0,falsyValue:a=!1}=t,r=Wr(e),o=q(e);function i(s){if(arguments.length)return o.value=s,o.value;{const l=Lt(n);return o.value=o.value===l?Lt(a):l,o.value}}return r?i:[o,i]}var Wn=Object.getOwnPropertySymbols,_i=Object.prototype.hasOwnProperty,wi=Object.prototype.propertyIsEnumerable,ki=(e,t)=>{var n={};for(var a in e)_i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&Wn)for(var a of Wn(e))t.indexOf(a)<0&&wi.call(e,a)&&(n[a]=e[a]);return n};function xi(e,t,n={}){const a=n,{eventFilter:r=Ua}=a,o=ki(a,["eventFilter"]);return Ue(e,vi(r,t),o)}var Si=Object.defineProperty,Ei=Object.defineProperties,Li=Object.getOwnPropertyDescriptors,At=Object.getOwnPropertySymbols,Va=Object.prototype.hasOwnProperty,qa=Object.prototype.propertyIsEnumerable,Vn=(e,t,n)=>t in e?Si(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ai=(e,t)=>{for(var n in t||(t={}))Va.call(t,n)&&Vn(e,n,t[n]);if(At)for(var n of At(t))qa.call(t,n)&&Vn(e,n,t[n]);return e},Oi=(e,t)=>Ei(e,Li(t)),Ci=(e,t)=>{var n={};for(var a in e)Va.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&At)for(var a of At(e))t.indexOf(a)<0&&qa.call(e,a)&&(n[a]=e[a]);return n};function Ti(e,t,n={}){const a=n,{eventFilter:r}=a,o=Ci(a,["eventFilter"]),{eventFilter:i,pause:s,resume:l,isActive:u}=pi(r);return{stop:xi(e,t,Oi(Ai({},o),{eventFilter:i})),pause:s,resume:l,isActive:u}}function Pi(e){var t;const n=Lt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Ot=Ya?window:void 0;function Ii(...e){let t,n,a,r;if(di(e[0])||Array.isArray(e[0])?([n,a,r]=e,t=Ot):[t,n,a,r]=e,!t)return mi;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const o=[],i=()=>{o.forEach(c=>c()),o.length=0},s=(c,f,d)=>(c.addEventListener(f,d,r),()=>c.removeEventListener(f,d,r)),l=Ue(()=>Pi(t),c=>{i(),c&&o.push(...n.flatMap(f=>a.map(d=>s(c,f,d))))},{immediate:!0,flush:"post"}),u=()=>{l(),i()};return Wa(u),u}function Ni(e,t=!1){const n=q(),a=()=>n.value=Boolean(e());return a(),bi(a,t),n}function $i(e,t={}){const{window:n=Ot}=t,a=Ni(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const o=q(!1),i=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",s):r.removeListener(s))},s=()=>{a.value&&(i(),r=n.matchMedia(hi(e).value),o.value=r.matches,"addEventListener"in r?r.addEventListener("change",s):r.addListener(s))};return Kr(s),Wa(()=>i()),o}const Xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Kt="__vueuse_ssr_handlers__";Xt[Kt]=Xt[Kt]||{};const Mi=Xt[Kt];function zi(e,t){return Mi[e]||t}function Ri(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Di=Object.defineProperty,qn=Object.getOwnPropertySymbols,Hi=Object.prototype.hasOwnProperty,Fi=Object.prototype.propertyIsEnumerable,Gn=(e,t,n)=>t in e?Di(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xn=(e,t)=>{for(var n in t||(t={}))Hi.call(t,n)&&Gn(e,n,t[n]);if(qn)for(var n of qn(t))Fi.call(t,n)&&Gn(e,n,t[n]);return e};const ji={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Bi(e,t,n,a={}){var r;const{flush:o="pre",deep:i=!0,listenToStorageChanges:s=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:c,window:f=Ot,eventFilter:d,onError:p=b=>{console.error(b)}}=a,y=(c?Xr:q)(t);if(!n)try{n=zi("getDefaultStorage",()=>{var b;return(b=Ot)==null?void 0:b.localStorage})()}catch(b){p(b)}if(!n)return y;const S=Lt(t),x=Ri(S),E=(r=a.serializer)!=null?r:ji[x],{pause:C,resume:L}=Ti(y,()=>B(y.value),{flush:o,deep:i,eventFilter:d});return f&&s&&Ii(f,"storage",J),J(),y;function B(b){try{b==null?n.removeItem(e):n.setItem(e,E.write(b))}catch(m){p(m)}}function $(b){C();try{const m=b?b.newValue:n.getItem(e);if(m==null)return l&&S!==null&&n.setItem(e,E.write(S)),S;if(!b&&u){const z=E.read(m);return fi(u)?u(z,S):x==="object"&&!Array.isArray(z)?Xn(Xn({},S),z):z}else return typeof m!="string"?m:E.read(m)}catch(m){p(m)}finally{L()}}function J(b){if(!(b&&b.storageArea!==n)){if(b&&b.key===null){y.value=S;return}b&&b.key!==e||(y.value=$(b))}}}function Yi(e){return $i("(prefers-color-scheme: dark)",e)}var Kn;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Kn||(Kn={}));var Ui=Object.defineProperty,Zn=Object.getOwnPropertySymbols,Wi=Object.prototype.hasOwnProperty,Vi=Object.prototype.propertyIsEnumerable,Qn=(e,t,n)=>t in e?Ui(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qi=(e,t)=>{for(var n in t||(t={}))Wi.call(t,n)&&Qn(e,n,t[n]);if(Zn)for(var n of Zn(t))Vi.call(t,n)&&Qn(e,n,t[n]);return e};const Gi={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};qi({linear:gi},Gi);const ne=()=>ti(),Ga=Symbol(""),hn=()=>{const e=be(Ga);if(!e)throw new Error("useDarkMode() is called without provider.");return e},Xi=()=>{const e=ne(),t=Yi(),n=Bi("vuepress-color-scheme",e.value.colorMode),a=w({get(){return e.value.colorModeSwitch?n.value==="auto"?t.value:n.value==="dark":e.value.colorMode==="dark"},set(r){r===t.value?n.value="auto":n.value=r?"dark":"light"}});un(Ga,a),Ki(a)},Ki=e=>{const t=(n=e.value)=>{const a=window==null?void 0:window.document.querySelector("html");a==null||a.classList.toggle("dark",n)};le(()=>{Ue(e,t,{immediate:!0})}),Pa(()=>t())},Xa=(...e)=>{const n=Ye().resolve(...e),a=n.matched[n.matched.length-1];if(!(a!=null&&a.redirect))return n;const{redirect:r}=a,o=Zr(r)?r(n):r,i=ue(o)?{path:o}:o;return Xa({hash:n.hash,query:n.query,params:n.params,...i})},bn=e=>{const t=Xa(encodeURI(e));return{text:t.meta.title||e,link:t.name==="404"?e:t.fullPath}};let Yt=null,qe=null;const Zi={wait:()=>Yt,pending:()=>{Yt=new Promise(e=>qe=e)},resolve:()=>{qe==null||qe(),Yt=null,qe=null}},Ka=()=>Zi,Za=Symbol("sidebarItems"),yn=()=>{const e=be(Za);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},Qi=()=>{const e=ne(),t=de(),n=w(()=>Ji(t.value,e.value));un(Za,n)},Ji=(e,t)=>{const n=e.sidebar??t.sidebar??"auto",a=e.sidebarDepth??t.sidebarDepth??2;return e.home||n===!1?[]:n==="auto"?ts(a):It(n)?Qa(n,a):fn(n)?ns(n,a):[]},es=(e,t)=>({text:e.title,link:e.link,children:_n(e.children,t)}),_n=(e,t)=>t>0?e.map(n=>es(n,t-1)):[],ts=e=>{const t=Ie();return[{text:t.value.title,children:_n(t.value.headers,e)}]},Qa=(e,t)=>{const n=Ae(),a=Ie(),r=o=>{var s;let i;if(ue(o)?i=bn(o):i=o,i.children)return{...i,children:i.children.map(l=>r(l))};if(i.link===n.path){const l=((s=a.value.headers[0])==null?void 0:s.level)===1?a.value.headers[0].children:a.value.headers;return{...i,children:_n(l,t)}}return i};return e.map(o=>r(o))},ns=(e,t)=>{const n=Ae(),a=La(e,n.path),r=e[a]??[];return Qa(r,t)},as={},rs={class:"theme-default-content"};function os(e,t){const n=ve("Content");return g(),k("div",rs,[D(n)])}const is=F(as,[["render",os],["__file","HomeContent.vue"]]),ss={key:0,class:"features"},ls=N({__name:"HomeFeatures",setup(e){const t=de(),n=w(()=>It(t.value.features)?t.value.features:[]);return(a,r)=>v(n).length?(g(),k("div",ss,[(g(!0),k(ae,null,xe(v(n),o=>(g(),k("div",{key:o.title,class:"feature"},[I("h2",null,X(o.title),1),I("p",null,X(o.details),1)]))),128))])):V("v-if",!0)}}),cs=F(ls,[["__file","HomeFeatures.vue"]]),us=["innerHTML"],fs=["textContent"],ds=N({__name:"HomeFooter",setup(e){const t=de(),n=w(()=>t.value.footer),a=w(()=>t.value.footerHtml);return(r,o)=>v(n)?(g(),k(ae,{key:0},[V(" eslint-disable-next-line vue/no-v-html "),v(a)?(g(),k("div",{key:0,class:"footer",innerHTML:v(n)},null,8,us)):(g(),k("div",{key:1,class:"footer",textContent:X(v(n))},null,8,fs))],64)):V("v-if",!0)}}),ms=F(ds,[["__file","HomeFooter.vue"]]),vs=["href","rel","target","aria-label"],ps=N({inheritAttrs:!1}),gs=N({...ps,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(e){const t=e,n=Ae(),a=bo(),{item:r}=rt(t),o=w(()=>at(r.value.link)),i=w(()=>Qr(r.value.link)||Jr(r.value.link)),s=w(()=>{if(!i.value){if(r.value.target)return r.value.target;if(o.value)return"_blank"}}),l=w(()=>s.value==="_blank"),u=w(()=>!o.value&&!i.value&&!l.value),c=w(()=>{if(!i.value){if(r.value.rel)return r.value.rel;if(l.value)return"noopener noreferrer"}}),f=w(()=>r.value.ariaLabel||r.value.text),d=w(()=>{const S=Object.keys(a.value.locales);return S.length?!S.some(x=>x===r.value.link):r.value.link!=="/"}),p=w(()=>d.value?n.path.startsWith(r.value.link):!1),y=w(()=>u.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(n.path):p.value:!1);return(S,x)=>{const E=ve("RouterLink"),C=ve("AutoLinkExternalIcon");return v(u)?(g(),K(E,Mn({key:0,class:{"router-link-active":v(y)},to:v(r).link,"aria-label":v(f)},S.$attrs),{default:ee(()=>[M(S.$slots,"before"),je(" "+X(v(r).text)+" ",1),M(S.$slots,"after")]),_:3},16,["class","to","aria-label"])):(g(),k("a",Mn({key:1,class:"external-link",href:v(r).link,rel:v(c),target:v(s),"aria-label":v(f)},S.$attrs),[M(S.$slots,"before"),je(" "+X(v(r).text)+" ",1),v(l)?(g(),K(C,{key:0})):V("v-if",!0),M(S.$slots,"after")],16,vs))}}}),hs=F(gs,[["__file","AutoLink.vue"]]);function Jn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jn(Object(n),!0).forEach(function(a){Z(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ct(e){return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ct(e)}function bs(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ea(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ys(e,t,n){return t&&ea(e.prototype,t),n&&ea(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wn(e,t){return ws(e)||xs(e,t)||Ja(e,t)||Es()}function ot(e){return _s(e)||ks(e)||Ja(e)||Ss()}function _s(e){if(Array.isArray(e))return Zt(e)}function ws(e){if(Array.isArray(e))return e}function ks(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xs(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(a.push(i.value),!(t&&a.length===t));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function Ja(e,t){if(e){if(typeof e=="string")return Zt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zt(e,t)}}function Zt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Ss(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Es(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ta=function(){},kn={},er={},tr=null,nr={mark:ta,measure:ta};try{typeof window<"u"&&(kn=window),typeof document<"u"&&(er=document),typeof MutationObserver<"u"&&(tr=MutationObserver),typeof performance<"u"&&(nr=performance)}catch{}var Ls=kn.navigator||{},na=Ls.userAgent,aa=na===void 0?"":na,Se=kn,H=er,ra=tr,ft=nr;Se.document;var ye=!!H.documentElement&&!!H.head&&typeof H.addEventListener=="function"&&typeof H.createElement=="function",ar=~aa.indexOf("MSIE")||~aa.indexOf("Trident/"),dt,mt,vt,pt,gt,pe="___FONT_AWESOME___",Qt=16,rr="fa",or="svg-inline--fa",Ne="data-fa-i2svg",Jt="data-fa-pseudo-element",As="data-fa-pseudo-element-pending",xn="data-prefix",Sn="data-icon",oa="fontawesome-i2svg",Os="async",Cs=["HTML","HEAD","STYLE","SCRIPT"],ir=function(){try{return!0}catch{return!1}}(),R="classic",W="sharp",En=[R,W];function it(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[R]}})}var Qe=it((dt={},Z(dt,R,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Z(dt,W,{fa:"solid",fass:"solid","fa-solid":"solid"}),dt)),Je=it((mt={},Z(mt,R,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Z(mt,W,{solid:"fass"}),mt)),et=it((vt={},Z(vt,R,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Z(vt,W,{fass:"fa-solid"}),vt)),Ts=it((pt={},Z(pt,R,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Z(pt,W,{"fa-solid":"fass"}),pt)),Ps=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,sr="fa-layers-text",Is=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ns=it((gt={},Z(gt,R,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Z(gt,W,{900:"fass"}),gt)),lr=[1,2,3,4,5,6,7,8,9,10],$s=lr.concat([11,12,13,14,15,16,17,18,19,20]),Ms=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Te={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tt=new Set;Object.keys(Je[R]).map(tt.add.bind(tt));Object.keys(Je[W]).map(tt.add.bind(tt));var zs=[].concat(En,ot(tt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Te.GROUP,Te.SWAP_OPACITY,Te.PRIMARY,Te.SECONDARY]).concat(lr.map(function(e){return"".concat(e,"x")})).concat($s.map(function(e){return"w-".concat(e)})),Xe=Se.FontAwesomeConfig||{};function Rs(e){var t=H.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ds(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(H&&typeof H.querySelector=="function"){var Hs=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hs.forEach(function(e){var t=wn(e,2),n=t[0],a=t[1],r=Ds(Rs(n));r!=null&&(Xe[a]=r)})}var cr={styleDefault:"solid",familyDefault:"classic",cssPrefix:rr,replacementClass:or,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xe.familyPrefix&&(Xe.cssPrefix=Xe.familyPrefix);var Be=h(h({},cr),Xe);Be.autoReplaceSvg||(Be.observeMutations=!1);var _={};Object.keys(cr).forEach(function(e){Object.defineProperty(_,e,{enumerable:!0,set:function(n){Be[e]=n,Ke.forEach(function(a){return a(_)})},get:function(){return Be[e]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(t){Be.cssPrefix=t,Ke.forEach(function(n){return n(_)})},get:function(){return Be.cssPrefix}});Se.FontAwesomeConfig=_;var Ke=[];function Fs(e){return Ke.push(e),function(){Ke.splice(Ke.indexOf(e),1)}}var we=Qt,ce={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function js(e){if(!(!e||!ye)){var t=H.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=H.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return H.head.insertBefore(t,a),e}}var Bs="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nt(){for(var e=12,t="";e-- >0;)t+=Bs[Math.random()*62|0];return t}function We(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ln(e){return e.classList?We(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ur(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ys(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ur(e[n]),'" ')},"").trim()}function $t(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function An(e){return e.size!==ce.size||e.x!==ce.x||e.y!==ce.y||e.rotate!==ce.rotate||e.flipX||e.flipY}function Us(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Ws(e){var t=e.transform,n=e.width,a=n===void 0?Qt:n,r=e.height,o=r===void 0?Qt:r,i=e.startCentered,s=i===void 0?!1:i,l="";return s&&ar?l+="translate(".concat(t.x/we-a/2,"em, ").concat(t.y/we-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/we,"em), calc(-50% + ").concat(t.y/we,"em)) "):l+="translate(".concat(t.x/we,"em, ").concat(t.y/we,"em) "),l+="scale(".concat(t.size/we*(t.flipX?-1:1),", ").concat(t.size/we*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Vs=`:root, :host {
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
}`;function fr(){var e=rr,t=or,n=_.cssPrefix,a=_.replacementClass,r=Vs;if(n!==e||a!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var ia=!1;function Ut(){_.autoAddCss&&!ia&&(js(fr()),ia=!0)}var qs={mixout:function(){return{dom:{css:fr,insertCss:Ut}}},hooks:function(){return{beforeDOMElementCreation:function(){Ut()},beforeI2svg:function(){Ut()}}}},ge=Se||{};ge[pe]||(ge[pe]={});ge[pe].styles||(ge[pe].styles={});ge[pe].hooks||(ge[pe].hooks={});ge[pe].shims||(ge[pe].shims=[]);var ie=ge[pe],dr=[],Gs=function e(){H.removeEventListener("DOMContentLoaded",e),Tt=1,dr.map(function(t){return t()})},Tt=!1;ye&&(Tt=(H.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(H.readyState),Tt||H.addEventListener("DOMContentLoaded",Gs));function Xs(e){ye&&(Tt?setTimeout(e,0):dr.push(e))}function st(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?ur(e):"<".concat(t," ").concat(Ys(a),">").concat(o.map(st).join(""),"</").concat(t,">")}function sa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ks=function(t,n){return function(a,r,o,i){return t.call(n,a,r,o,i)}},Wt=function(t,n,a,r){var o=Object.keys(t),i=o.length,s=r!==void 0?Ks(n,r):n,l,u,c;for(a===void 0?(l=1,c=t[o[0]]):(l=0,c=a);l<i;l++)u=o[l],c=s(c,t[u],u,t);return c};function Zs(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function en(e){var t=Zs(e);return t.length===1?t[0].toString(16):null}function Qs(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function la(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function tn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=la(t);typeof ie.hooks.addPack=="function"&&!r?ie.hooks.addPack(e,la(t)):ie.styles[e]=h(h({},ie.styles[e]||{}),o),e==="fas"&&tn("fa",t)}var ht,bt,yt,De=ie.styles,Js=ie.shims,el=(ht={},Z(ht,R,Object.values(et[R])),Z(ht,W,Object.values(et[W])),ht),On=null,mr={},vr={},pr={},gr={},hr={},tl=(bt={},Z(bt,R,Object.keys(Qe[R])),Z(bt,W,Object.keys(Qe[W])),bt);function nl(e){return~zs.indexOf(e)}function al(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!nl(r)?r:null}var br=function(){var t=function(o){return Wt(De,function(i,s,l){return i[l]=Wt(s,o,{}),i},{})};mr=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),vr=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),hr=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in De||_.autoFetchSvg,a=Wt(Js,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});pr=a.names,gr=a.unicodes,On=Mt(_.styleDefault,{family:_.familyDefault})};Fs(function(e){On=Mt(e.styleDefault,{family:_.familyDefault})});br();function Cn(e,t){return(mr[e]||{})[t]}function rl(e,t){return(vr[e]||{})[t]}function Pe(e,t){return(hr[e]||{})[t]}function yr(e){return pr[e]||{prefix:null,iconName:null}}function ol(e){var t=gr[e],n=Cn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ee(){return On}var Tn=function(){return{prefix:null,iconName:null,rest:[]}};function Mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?R:n,r=Qe[a][e],o=Je[a][e]||Je[a][r],i=e in ie.styles?e:null;return o||i||null}var ca=(yt={},Z(yt,R,Object.keys(et[R])),Z(yt,W,Object.keys(et[W])),yt);function zt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,o=(t={},Z(t,R,"".concat(_.cssPrefix,"-").concat(R)),Z(t,W,"".concat(_.cssPrefix,"-").concat(W)),t),i=null,s=R;(e.includes(o[R])||e.some(function(u){return ca[R].includes(u)}))&&(s=R),(e.includes(o[W])||e.some(function(u){return ca[W].includes(u)}))&&(s=W);var l=e.reduce(function(u,c){var f=al(_.cssPrefix,c);if(De[c]?(c=el[s].includes(c)?Ts[s][c]:c,i=c,u.prefix=c):tl[s].indexOf(c)>-1?(i=c,u.prefix=Mt(c,{family:s})):f?u.iconName=f:c!==_.replacementClass&&c!==o[R]&&c!==o[W]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var d=i==="fa"?yr(u.iconName):{},p=Pe(u.prefix,u.iconName);d.prefix&&(i=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!De.far&&De.fas&&!_.autoFetchSvg&&(u.prefix="fas")}return u},Tn());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===W&&(De.fass||_.autoFetchSvg)&&(l.prefix="fass",l.iconName=Pe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Ee()||"fas"),l}var il=function(){function e(){bs(this,e),this.definitions={}}return ys(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=h(h({},n.definitions[s]||{}),i[s]),tn(s,i[s]);var l=et[R][s];l&&tn(l,i[s]),br()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,u=i.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),ua=[],He={},Fe={},sl=Object.keys(Fe);function ll(e,t){var n=t.mixoutsTo;return ua=e,He={},Object.keys(Fe).forEach(function(a){sl.indexOf(a)===-1&&delete Fe[a]}),ua.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),Ct(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){He[i]||(He[i]=[]),He[i].push(o[i])})}a.provides&&a.provides(Fe)}),n}function nn(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=He[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=He[e]||[];r.forEach(function(o){o.apply(null,n)})}function he(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Fe[e]?Fe[e].apply(null,t):void 0}function an(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ee();if(t)return t=Pe(n,t)||t,sa(_r.definitions,n,t)||sa(ie.styles,n,t)}var _r=new il,cl=function(){_.autoReplaceSvg=!1,_.observeMutations=!1,$e("noAuto")},ul={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ye?($e("beforeI2svg",t),he("pseudoElements2svg",t),he("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,Xs(function(){dl({autoReplaceSvgRoot:n}),$e("watch",t)})}},fl={icon:function(t){if(t===null)return null;if(Ct(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=Mt(t[0]);return{prefix:a,iconName:Pe(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(_.cssPrefix,"-"))>-1||t.match(Ps))){var r=zt(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ee(),iconName:Pe(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=Ee();return{prefix:o,iconName:Pe(o,t)||t}}}},re={noAuto:cl,config:_,dom:ul,parse:fl,library:_r,findIconDefinition:an,toHtml:st},dl=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?H:n;(Object.keys(ie.styles).length>0||_.autoFetchSvg)&&ye&&_.autoReplaceSvg&&re.dom.i2svg({node:a})};function Rt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return st(a)})}}),Object.defineProperty(e,"node",{get:function(){if(ye){var a=H.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function ml(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(An(i)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=$t(h(h({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function vl(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(_.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:i}),children:a}]}]}function Pn(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,p=d===void 0?!1:d,y=a.found?a:n,S=y.width,x=y.height,E=r==="fak",C=[_.replacementClass,o?"".concat(_.cssPrefix,"-").concat(o):""].filter(function(z){return f.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(f.classes).join(" "),L={children:[],attributes:h(h({},f.attributes),{},{"data-prefix":r,"data-icon":o,class:C,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(x)})},B=E&&!~f.classes.indexOf("fa-fw")?{width:"".concat(S/x*16*.0625,"em")}:{};p&&(L.attributes[Ne]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(c||nt())},children:[l]}),delete L.attributes.title);var $=h(h({},L),{},{prefix:r,iconName:o,main:n,mask:a,maskId:u,transform:i,symbol:s,styles:h(h({},B),f.styles)}),J=a.found&&n.found?he("generateAbstractMask",$)||{children:[],attributes:{}}:he("generateAbstractIcon",$)||{children:[],attributes:{}},b=J.children,m=J.attributes;return $.children=b,$.attributes=m,s?vl($):ml($)}function fa(e){var t=e.content,n=e.width,a=e.height,r=e.transform,o=e.title,i=e.extra,s=e.watchable,l=s===void 0?!1:s,u=h(h(h({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(u[Ne]="");var c=h({},i.styles);An(r)&&(c.transform=Ws({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var f=$t(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function pl(e){var t=e.content,n=e.title,a=e.extra,r=h(h(h({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=$t(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var Vt=ie.styles;function rn(e){var t=e[0],n=e[1],a=e.slice(4),r=wn(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(Te.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(Te.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(Te.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:i}}var gl={found:!1,width:512,height:512};function hl(e,t){!ir&&!_.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function on(e,t){var n=t;return t==="fa"&&_.styleDefault!==null&&(t=Ee()),new Promise(function(a,r){if(he("missingIconAbstract"),n==="fa"){var o=yr(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Vt[t]&&Vt[t][e]){var i=Vt[t][e];return a(rn(i))}hl(e,t),a(h(h({},gl),{},{icon:_.showMissingIcons&&e?he("missingIconAbstract")||{}:{}}))})}var da=function(){},sn=_.measurePerformance&&ft&&ft.mark&&ft.measure?ft:{mark:da,measure:da},Ge='FA "6.2.1"',bl=function(t){return sn.mark("".concat(Ge," ").concat(t," begins")),function(){return wr(t)}},wr=function(t){sn.mark("".concat(Ge," ").concat(t," ends")),sn.measure("".concat(Ge," ").concat(t),"".concat(Ge," ").concat(t," begins"),"".concat(Ge," ").concat(t," ends"))},In={begin:bl,end:wr},kt=function(){};function ma(e){var t=e.getAttribute?e.getAttribute(Ne):null;return typeof t=="string"}function yl(e){var t=e.getAttribute?e.getAttribute(xn):null,n=e.getAttribute?e.getAttribute(Sn):null;return t&&n}function _l(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(_.replacementClass)}function wl(){if(_.autoReplaceSvg===!0)return xt.replace;var e=xt[_.autoReplaceSvg];return e||xt.replace}function kl(e){return H.createElementNS("http://www.w3.org/2000/svg",e)}function xl(e){return H.createElement(e)}function kr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?kl:xl:n;if(typeof e=="string")return H.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(kr(i,{ceFn:a}))}),r}function Sl(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(kr(r),n)}),n.getAttribute(Ne)===null&&_.keepOriginalSource){var a=H.createComment(Sl(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~Ln(n).indexOf(_.replacementClass))return xt.replace(t);var r=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===_.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return st(s)}).join(`
`);n.setAttribute(Ne,""),n.innerHTML=i}};function va(e){e()}function xr(e,t){var n=typeof t=="function"?t:kt;if(e.length===0)n();else{var a=va;_.mutateApproach===Os&&(a=Se.requestAnimationFrame||va),a(function(){var r=wl(),o=In.begin("mutate");e.map(r),o(),n()})}}var Nn=!1;function Sr(){Nn=!0}function ln(){Nn=!1}var Pt=null;function pa(e){if(ra&&_.observeMutations){var t=e.treeCallback,n=t===void 0?kt:t,a=e.nodeCallback,r=a===void 0?kt:a,o=e.pseudoElementsCallback,i=o===void 0?kt:o,s=e.observeMutationsRoot,l=s===void 0?H:s;Pt=new ra(function(u){if(!Nn){var c=Ee();We(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!ma(f.addedNodes[0])&&(_.searchPseudoElements&&i(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&_.searchPseudoElements&&i(f.target.parentNode),f.type==="attributes"&&ma(f.target)&&~Ms.indexOf(f.attributeName))if(f.attributeName==="class"&&yl(f.target)){var d=zt(Ln(f.target)),p=d.prefix,y=d.iconName;f.target.setAttribute(xn,p||c),y&&f.target.setAttribute(Sn,y)}else _l(f.target)&&r(f.target)})}}),ye&&Pt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function El(){Pt&&Pt.disconnect()}function Ll(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Al(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=zt(Ln(e));return r.prefix||(r.prefix=Ee()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=rl(r.prefix,e.innerText)||Cn(r.prefix,en(e.innerText))),!r.iconName&&_.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ol(e){var t=We(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return _.autoA11y&&(n?t["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(a||nt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Cl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ce,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Al(e),a=n.iconName,r=n.prefix,o=n.rest,i=Ol(e),s=nn("parseNodeAttributes",{},e),l=t.styleParser?Ll(e):[];return h({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:ce,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Tl=ie.styles;function Er(e){var t=_.autoReplaceSvg==="nest"?ga(e,{styleParser:!1}):ga(e);return~t.extra.classes.indexOf(sr)?he("generateLayersText",e,t):he("generateSvgReplacementMutation",e,t)}var Le=new Set;En.map(function(e){Le.add("fa-".concat(e))});Object.keys(Qe[R]).map(Le.add.bind(Le));Object.keys(Qe[W]).map(Le.add.bind(Le));Le=ot(Le);function ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ye)return Promise.resolve();var n=H.documentElement.classList,a=function(f){return n.add("".concat(oa,"-").concat(f))},r=function(f){return n.remove("".concat(oa,"-").concat(f))},o=_.autoFetchSvg?Le:En.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Tl));o.includes("fa")||o.push("fa");var i=[".".concat(sr,":not([").concat(Ne,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Ne,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=We(e.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=In.begin("onTree"),u=s.reduce(function(c,f){try{var d=Er(f);d&&c.push(d)}catch(p){ir||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){xr(d,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function Pl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Er(e).then(function(n){n&&xr([n],t)})}function Il(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:an(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:an(r||{})),e(a,h(h({},n),{},{mask:r}))}}var Nl=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?ce:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,p=n.titleId,y=p===void 0?null:p,S=n.classes,x=S===void 0?[]:S,E=n.attributes,C=E===void 0?{}:E,L=n.styles,B=L===void 0?{}:L;if(t){var $=t.prefix,J=t.iconName,b=t.icon;return Rt(h({type:"icon"},t),function(){return $e("beforeDOMElementCreation",{iconDefinition:t,params:n}),_.autoA11y&&(d?C["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(y||nt()):(C["aria-hidden"]="true",C.focusable="false")),Pn({icons:{main:rn(b),mask:l?rn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:J,transform:h(h({},ce),r),symbol:i,title:d,maskId:c,titleId:y,extra:{attributes:C,styles:B,classes:x}})})}},$l={mixout:function(){return{icon:Il(Nl)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ha,n.nodeCallback=Pl,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?H:a,o=n.callback,i=o===void 0?function(){}:o;return ha(r,i)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,l=a.transform,u=a.symbol,c=a.mask,f=a.maskId,d=a.extra;return new Promise(function(p,y){Promise.all([on(r,s),c.iconName?on(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var x=wn(S,2),E=x[0],C=x[1];p([n,Pn({icons:{main:E,mask:C},prefix:s,iconName:r,transform:l,symbol:u,maskId:f,title:o,titleId:i,extra:d,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=$t(s);l.length>0&&(r.style=l);var u;return An(i)&&(u=he("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},Ml={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return Rt({type:"layer"},function(){$e("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers")].concat(ot(o)).join(" ")},children:i}]})}}}},zl={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,u=l===void 0?{}:l,c=a.styles,f=c===void 0?{}:c;return Rt({type:"counter",content:n},function(){return $e("beforeDOMElementCreation",{content:n,params:a}),pl({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(_.cssPrefix,"-layers-counter")].concat(ot(s))}})})}}}},Rl={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?ce:r,i=a.title,s=i===void 0?null:i,l=a.classes,u=l===void 0?[]:l,c=a.attributes,f=c===void 0?{}:c,d=a.styles,p=d===void 0?{}:d;return Rt({type:"text",content:n},function(){return $e("beforeDOMElementCreation",{content:n,params:a}),fa({content:n,transform:h(h({},ce),o),title:s,extra:{attributes:f,styles:p,classes:["".concat(_.cssPrefix,"-layers-text")].concat(ot(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,l=null;if(ar){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return _.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,fa({content:n.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},Dl=new RegExp('"',"ug"),ba=[1105920,1112319];function Hl(e){var t=e.replace(Dl,""),n=Qs(t,0),a=n>=ba[0]&&n<=ba[1],r=t.length===2?t[0]===t[1]:!1;return{value:en(r?t[0]:t),isSecondary:a||r}}function ya(e,t){var n="".concat(As).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var o=We(e.children),i=o.filter(function(b){return b.getAttribute(Jt)===t})[0],s=Se.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Is),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?W:R,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Je[d][l[2].toLowerCase()]:Ns[d][u],y=Hl(f),S=y.value,x=y.isSecondary,E=l[0].startsWith("FontAwesome"),C=Cn(p,S),L=C;if(E){var B=ol(S);B.iconName&&B.prefix&&(C=B.iconName,p=B.prefix)}if(C&&!x&&(!i||i.getAttribute(xn)!==p||i.getAttribute(Sn)!==L)){e.setAttribute(n,L),i&&e.removeChild(i);var $=Cl(),J=$.extra;J.attributes[Jt]=t,on(C,p).then(function(b){var m=Pn(h(h({},$),{},{icons:{main:b,mask:Tn()},prefix:p,iconName:L,extra:J,watchable:!0})),z=H.createElement("svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=m.map(function(Y){return st(Y)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Fl(e){return Promise.all([ya(e,"::before"),ya(e,"::after")])}function jl(e){return e.parentNode!==document.head&&!~Cs.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Jt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _a(e){if(ye)return new Promise(function(t,n){var a=We(e.querySelectorAll("*")).filter(jl).map(Fl),r=In.begin("searchPseudoElements");Sr(),Promise.all(a).then(function(){r(),ln(),t()}).catch(function(){r(),ln(),n()})})}var Bl={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_a,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?H:a;_.searchPseudoElements&&_a(r)}}},wa=!1,Yl={mixout:function(){return{dom:{unwatch:function(){Sr(),wa=!0}}}},hooks:function(){return{bootstrap:function(){pa(nn("mutationObserverCallbacks",{}))},noAuto:function(){El()},watch:function(n){var a=n.observeMutationsRoot;wa?ln():pa(nn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ka=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Ul={mixout:function(){return{parse:{transform:function(n){return ka(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=ka(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:f,path:d};return{tag:"g",attributes:h({},p.outer),children:[{tag:"g",attributes:h({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:h(h({},a.icon.attributes),p.path)}]}]}}}},qt={x:0,y:0,width:"100%",height:"100%"};function xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Wl(e){return e.tag==="g"?e.children:[e]}var Vl={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?zt(r.split(" ").map(function(i){return i.trim()})):Tn();return o.prefix||(o.prefix=Ee()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,u=o.width,c=o.icon,f=i.width,d=i.icon,p=Us({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:h(h({},qt),{},{fill:"white"})},S=c.children?{children:c.children.map(xa)}:{},x={tag:"g",attributes:h({},p.inner),children:[xa(h({tag:c.tag,attributes:h(h({},c.attributes),p.path)},S))]},E={tag:"g",attributes:h({},p.outer),children:[x]},C="mask-".concat(s||nt()),L="clip-".concat(s||nt()),B={tag:"mask",attributes:h(h({},qt),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,E]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Wl(d)},B]};return a.push($,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},qt)}),{children:a,attributes:r}}}},ql={provides:function(t){var n=!1;Se.matchMedia&&(n=Se.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=h(h({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:h(h({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:h(h({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Gl={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},Xl=[qs,$l,Ml,zl,Rl,Bl,Yl,Ul,Vl,ql,Gl];ll(Xl,{mixoutsTo:re});re.noAuto;re.config;var Kl=re.library;re.dom;var Zl=re.parse,Ql=re.findIconDefinition;re.toHtml;var Jl=re.icon;re.layer;re.text;re.counter;const ec=["innerHTML"],tc={__name:"AcidicIcon",props:{icon:{type:String,required:!0}},setup(e){const t=e,{icon:n}=rt(t),a=w(()=>Jl(Ql(Zl.icon(n.value))).html);return(r,o)=>(g(),k("span",{innerHTML:v(a)},null,8,ec))}},Lr=F(tc,[["__file","AcidicIcon.vue"]]),nc=Object.freeze(Object.defineProperty({__proto__:null,default:Lr},Symbol.toStringTag,{value:"Module"})),ac={__name:"AcidicAutoLink",props:{item:{type:Object,required:!0}},setup(e){const t=e,{item:n}=rt(t);return(a,r)=>(g(),k(ae,null,[v(n).icon?(g(),K(Lr,{key:0,icon:v(n).icon,class:"mr-2"},null,8,["icon"])):V("v-if",!0),D(hs,{item:v(n)},null,8,["item"])],64))}},me=F(ac,[["__file","AcidicAutoLink.vue"]]),rc={class:"hero"},oc={key:0,id:"main-title"},ic={key:1,class:"description"},sc={key:2,class:"actions"},lc=N({__name:"HomeHero",setup(e){const t=de(),n=mn(),a=hn(),r=w(()=>a.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),o=w(()=>t.value.heroAlt||s.value||"hero"),i=w(()=>t.value.heroHeight||280),s=w(()=>t.value.heroText===null?null:t.value.heroText||n.value.title||"Hello"),l=w(()=>t.value.tagline===null?null:t.value.tagline||n.value.description||"Welcome to your VuePress site"),u=w(()=>It(t.value.actions)?t.value.actions.map(({text:f,link:d,type:p="primary"})=>({text:f,link:d,type:p})):[]),c=()=>{if(!r.value)return null;const f=j("img",{src:pn(r.value),alt:o.value,height:i.value});return t.value.heroImageDark===void 0?f:j(vn,()=>f)};return(f,d)=>(g(),k("header",rc,[D(c),v(s)?(g(),k("h1",oc,X(v(s)),1)):V("v-if",!0),v(l)?(g(),k("p",ic,X(v(l)),1)):V("v-if",!0),v(u).length?(g(),k("p",sc,[(g(!0),k(ae,null,xe(v(u),p=>(g(),K(me,{key:p.text,class:se(["action-button",[p.type]]),item:p},null,8,["class","item"]))),128))])):V("v-if",!0)]))}}),cc=F(lc,[["__file","HomeHero.vue"]]),uc={class:"home"},fc=N({__name:"Home",setup(e){return(t,n)=>(g(),k("main",uc,[D(cc),D(cs),D(is),D(ms)]))}}),dc=F(fc,[["__file","Home.vue"]]),mc=N({__name:"NavbarBrand",setup(e){const t=Nt(),n=mn(),a=ne(),r=hn(),o=w(()=>a.value.home||t.value),i=w(()=>n.value.title),s=w(()=>r.value&&a.value.logoDark!==void 0?a.value.logoDark:a.value.logo),l=()=>{if(!s.value)return null;const u=j("img",{class:"logo",src:pn(s.value),alt:i.value});return a.value.logoDark===void 0?u:j(vn,()=>u)};return(u,c)=>{const f=ve("RouterLink");return g(),K(f,{to:v(o)},{default:ee(()=>[D(l),v(i)?(g(),k("span",{key:0,class:se(["site-name",{"can-hide":v(s)}])},X(v(i)),3)):V("v-if",!0)]),_:1},8,["to"])}}}),vc=F(mc,[["__file","NavbarBrand.vue"]]),pc=N({__name:"DropdownTransition",setup(e){const t=a=>{a.style.height=a.scrollHeight+"px"},n=a=>{a.style.height=""};return(a,r)=>(g(),K(cn,{name:"dropdown",onEnter:t,onAfterEnter:n,onBeforeLeave:t},{default:ee(()=>[M(a.$slots,"default")]),_:3}))}}),Ar=F(pc,[["__file","DropdownTransition.vue"]]),gc=["aria-label"],hc={class:"title"},bc=I("span",{class:"arrow down"},null,-1),yc=["aria-label"],_c={class:"title"},wc={class:"navbar-dropdown"},kc={class:"navbar-dropdown-subtitle"},xc={key:1},Sc={class:"navbar-dropdown-subitem-wrapper"},Ec=N({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(e){const t=e,{item:n}=rt(t),a=w(()=>n.value.ariaLabel||n.value.text),r=q(!1),o=Ae();Ue(()=>o.path,()=>{r.value=!1});const i=l=>{l.detail===0?r.value=!r.value:r.value=!1},s=(l,u)=>u[u.length-1]===l;return(l,u)=>(g(),k("div",{class:se(["navbar-dropdown-wrapper",{open:r.value}])},[I("button",{class:"navbar-dropdown-title",type:"button","aria-label":v(a),onClick:i},[I("span",hc,X(v(n).text),1),bc],8,gc),I("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":v(a),onClick:u[0]||(u[0]=c=>r.value=!r.value)},[I("span",_c,X(v(n).text),1),I("span",{class:se(["arrow",r.value?"down":"right"])},null,2)],8,yc),D(Ar,null,{default:ee(()=>[St(I("ul",wc,[(g(!0),k(ae,null,xe(v(n).children,c=>(g(),k("li",{key:c.text,class:"navbar-dropdown-item"},[c.children?(g(),k(ae,{key:0},[I("h4",kc,[c.link?(g(),K(me,{key:0,item:c,onFocusout:f=>s(c,v(n).children)&&c.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(g(),k("span",xc,X(c.text),1))]),I("ul",Sc,[(g(!0),k(ae,null,xe(c.children,f=>(g(),k("li",{key:f.link,class:"navbar-dropdown-subitem"},[D(me,{item:f,onFocusout:d=>s(f,c.children)&&s(c,v(n).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(g(),K(me,{key:1,item:c,onFocusout:f=>s(c,v(n).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[Et,r.value]])]),_:1})],2))}}),Lc=F(Ec,[["__file","NavbarDropdown.vue"]]),Sa=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ac=(e,t)=>{if(t.hash===e)return!0;const n=Sa(t.path),a=Sa(e);return n===a},Or=(e,t)=>e.link&&Ac(e.link,t)?!0:e.children?e.children.some(n=>Or(n,t)):!1,Cr=e=>!at(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Oc={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Cc=({docsRepo:e,editLinkPattern:t})=>{if(t)return t;const n=Cr(e);return n!==null?Oc[n]:null},Tc=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:a,editLinkPattern:r})=>{if(!a)return null;const o=Cc({docsRepo:e,editLinkPattern:r});return o?o.replace(/:repo/,at(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Aa(`${Ia(n)}/${a}`)):null},Pc={key:0,class:"navbar-items"},Ic=N({__name:"NavbarItems",setup(e){const t=()=>{const c=Ye(),f=Nt(),d=mn(),p=ne();return w(()=>{const y=Object.keys(d.value.locales);if(y.length<2)return[];const S=c.currentRoute.value.path,x=c.currentRoute.value.fullPath,E=c.currentRoute.value.hash;return[{text:p.value.selectLanguageText??"unknown language",ariaLabel:p.value.selectLanguageAriaLabel??p.value.selectLanguageText??"unknown language",children:y.map(L=>{var z,Y;const B=((z=d.value.locales)==null?void 0:z[L])??{},$=((Y=p.value.locales)==null?void 0:Y[L])??{},J=`${B.lang}`,b=$.selectLanguageName??J;let m;if(J===d.value.lang)m=x;else{const Q=S.replace(f.value,L);c.getRoutes().some(A=>A.path===Q)?m=`${Q}${E}`:m=$.home??L}return{text:b,link:m}})}]})},n=()=>{const c=ne(),f=w(()=>c.value.repo),d=w(()=>f.value?Cr(f.value):null),p=w(()=>f.value&&!at(f.value)?`https://github.com/${f.value}`:f.value),y=w(()=>p.value?c.value.repoLabel?c.value.repoLabel:d.value===null?"Source":d.value:null);return w(()=>!p.value||!y.value?[]:[{text:y.value,link:p.value}])},a=c=>ue(c)?bn(c):c.children?{...c,children:c.children.map(a)}:c,r=()=>{const c=ne();return w(()=>(c.value.navbar||[]).map(a))},o=q(!1),i=r(),s=t(),l=n(),u=w(()=>[...i.value,...s.value,...l.value]);return le(()=>{const f=()=>{window.innerWidth<719?o.value=!0:o.value=!1};f(),window.addEventListener("resize",f,!1),window.addEventListener("orientationchange",f,!1)}),(c,f)=>v(u).length?(g(),k("nav",Pc,[(g(!0),k(ae,null,xe(v(u),d=>(g(),k("div",{key:d.text,class:"navbar-item"},[d.children?(g(),K(Lc,{key:0,item:d,class:se(o.value?"mobile":"")},null,8,["item","class"])):(g(),K(me,{key:1,item:d},null,8,["item"]))]))),128))])):V("v-if",!0)}}),Tr=F(Ic,[["__file","NavbarItems.vue"]]),Nc=["title"],$c={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Mc=eo('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),zc=[Mc],Rc={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Dc=I("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Hc=[Dc],Fc=N({__name:"ToggleColorModeButton",setup(e){const t=ne(),n=hn(),a=()=>{n.value=!n.value};return(r,o)=>(g(),k("button",{class:"toggle-color-mode-button",title:v(t).toggleColorMode,onClick:a},[St((g(),k("svg",$c,zc,512)),[[Et,!v(n)]]),St((g(),k("svg",Rc,Hc,512)),[[Et,v(n)]])],8,Nc))}}),jc=F(Fc,[["__file","ToggleColorModeButton.vue"]]),Bc=["title"],Yc=I("div",{class:"icon","aria-hidden":"true"},[I("span"),I("span"),I("span")],-1),Uc=[Yc],Wc=N({__name:"ToggleSidebarButton",emits:["toggle"],setup(e){const t=ne();return(n,a)=>(g(),k("div",{class:"toggle-sidebar-button",title:v(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:a[0]||(a[0]=r=>n.$emit("toggle"))},Uc,8,Bc))}}),Vc=F(Wc,[["__file","ToggleSidebarButton.vue"]]),qc=N({__name:"Navbar",emits:["toggle-sidebar"],setup(e){const t=ne(),n=q(null),a=q(null),r=q(0),o=w(()=>r.value?{maxWidth:r.value+"px"}:{});le(()=>{const l=i(n.value,"paddingLeft")+i(n.value,"paddingRight"),u=()=>{var c;window.innerWidth<719?r.value=0:r.value=n.value.offsetWidth-l-(((c=a.value)==null?void 0:c.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function i(s,l){var f,d,p;const u=(p=(d=(f=s==null?void 0:s.ownerDocument)==null?void 0:f.defaultView)==null?void 0:d.getComputedStyle(s,null))==null?void 0:p[l],c=Number.parseInt(u,10);return Number.isNaN(c)?0:c}return(s,l)=>{const u=ve("NavbarSearch");return g(),k("header",{ref_key:"navbar",ref:n,class:"navbar"},[D(Vc,{onToggle:l[0]||(l[0]=c=>s.$emit("toggle-sidebar"))}),I("span",{ref_key:"navbarBrand",ref:a},[D(vc)],512),I("div",{class:"navbar-items-wrapper",style:Ca(v(o))},[M(s.$slots,"before"),D(Tr,{class:"can-hide"}),M(s.$slots,"after"),v(t).colorModeSwitch?(g(),K(jc,{key:0})):V("v-if",!0),D(u)],4)],512)}}}),Gc=F(qc,[["__file","Navbar.vue"]]),Xc={class:"page-meta"},Kc={key:0,class:"meta-item edit-link"},Zc={key:1,class:"meta-item last-updated"},Qc={class:"meta-item-label"},Jc={class:"meta-item-info"},eu={key:2,class:"meta-item contributors"},tu={class:"meta-item-label"},nu={class:"meta-item-info"},au=["title"],ru=N({__name:"PageMeta",setup(e){const t=()=>{const l=ne(),u=Ie(),c=de();return w(()=>{if(!(c.value.editLink??l.value.editLink??!0))return null;const{repo:d,docsRepo:p=d,docsBranch:y="main",docsDir:S="",editLinkText:x}=l.value;if(!p)return null;const E=Tc({docsRepo:p,docsBranch:y,docsDir:S,filePathRelative:u.value.filePathRelative,editLinkPattern:c.value.editLinkPattern??l.value.editLinkPattern});return E?{text:x??"Edit this page",link:E}:null})},n=()=>{const l=ne(),u=Ie(),c=de();return w(()=>{var p,y;return!(c.value.lastUpdated??l.value.lastUpdated??!0)||!((p=u.value.git)!=null&&p.updatedTime)?null:new Date((y=u.value.git)==null?void 0:y.updatedTime).toLocaleString()})},a=()=>{const l=ne(),u=Ie(),c=de();return w(()=>{var d;return c.value.contributors??l.value.contributors??!0?((d=u.value.git)==null?void 0:d.contributors)??null:null})},r=ne(),o=t(),i=n(),s=a();return(l,u)=>{const c=ve("ClientOnly");return g(),k("footer",Xc,[v(o)?(g(),k("div",Kc,[D(me,{class:"meta-item-label",item:v(o)},null,8,["item"])])):V("v-if",!0),v(i)?(g(),k("div",Zc,[I("span",Qc,X(v(r).lastUpdatedText)+": ",1),D(c,null,{default:ee(()=>[I("span",Jc,X(v(i)),1)]),_:1})])):V("v-if",!0),v(s)&&v(s).length?(g(),k("div",eu,[I("span",tu,X(v(r).contributorsText)+": ",1),I("span",nu,[(g(!0),k(ae,null,xe(v(s),(f,d)=>(g(),k(ae,{key:d},[I("span",{class:"contributor",title:`email: ${f.email}`},X(f.name),9,au),d!==v(s).length-1?(g(),k(ae,{key:0},[je(", ")],64)):V("v-if",!0)],64))),128))])])):V("v-if",!0)])}}}),ou=F(ru,[["__file","PageMeta.vue"]]),iu={key:0,class:"page-nav"},su={class:"inner"},lu={key:0,class:"prev"},cu={key:1,class:"next"},uu=N({__name:"PageNav",setup(e){const t=l=>l===!1?null:ue(l)?bn(l):fn(l)?l:!1,n=(l,u,c)=>{const f=l.findIndex(d=>d.link===u);if(f!==-1){const d=l[f+c];return d!=null&&d.link?d:null}for(const d of l)if(d.children){const p=n(d.children,u,c);if(p)return p}return null},a=de(),r=yn(),o=Ae(),i=w(()=>{const l=t(a.value.prev);return l!==!1?l:n(r.value,o.path,-1)}),s=w(()=>{const l=t(a.value.next);return l!==!1?l:n(r.value,o.path,1)});return(l,u)=>v(i)||v(s)?(g(),k("nav",iu,[I("p",su,[v(i)?(g(),k("span",lu,[D(me,{item:v(i)},null,8,["item"])])):V("v-if",!0),v(s)?(g(),k("span",cu,[D(me,{item:v(s)},null,8,["item"])])):V("v-if",!0)])])):V("v-if",!0)}}),fu=F(uu,[["__file","PageNav.vue"]]),du={class:"page"},mu={class:"theme-default-content"},vu=N({__name:"Page",setup(e){return(t,n)=>{const a=ve("Content");return g(),k("main",du,[M(t.$slots,"top"),I("div",mu,[M(t.$slots,"content-top"),D(a),M(t.$slots,"content-bottom")]),D(ou),D(fu),M(t.$slots,"bottom")])}}}),pu=F(vu,[["__file","Page.vue"]]),gu=["onKeydown"],hu={class:"sidebar-item-children"},bu=N({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(e){const t=e,{item:n,depth:a}=rt(t),r=Ae(),o=Ye(),i=w(()=>Or(n.value,r)),s=w(()=>({"sidebar-item":!0,"sidebar-heading":a.value===0,active:i.value,collapsible:n.value.collapsible})),l=w(()=>n.value.collapsible?i.value:!0),[u,c]=yi(l.value),f=p=>{n.value.collapsible&&(p.preventDefault(),c())},d=o.afterEach(p=>{Ta(()=>{u.value=l.value})});return Oa(()=>{d()}),(p,y)=>{var x;const S=ve("SidebarItem",!0);return g(),k("li",null,[v(n).link?(g(),K(me,{key:0,class:se(v(s)),item:v(n)},null,8,["class","item"])):(g(),k("p",{key:1,tabindex:"0",class:se(v(s)),onClick:f,onKeydown:to(f,["enter"])},[je(X(v(n).text)+" ",1),v(n).collapsible?(g(),k("span",{key:0,class:se(["arrow",v(u)?"down":"right"])},null,2)):V("v-if",!0)],42,gu)),(x=v(n).children)!=null&&x.length?(g(),K(Ar,{key:2},{default:ee(()=>[St(I("ul",hu,[(g(!0),k(ae,null,xe(v(n).children,E=>(g(),K(S,{key:`${v(a)}${E.text}${E.link}`,item:E,depth:v(a)+1},null,8,["item","depth"]))),128))],512),[[Et,v(u)]])]),_:1})):V("v-if",!0)])}}}),yu=F(bu,[["__file","SidebarItem.vue"]]),_u={key:0,class:"sidebar-items"},wu=N({__name:"SidebarItems",setup(e){const t=Ae(),n=yn();return le(()=>{Ue(()=>t.hash,a=>{const r=document.querySelector(".sidebar");if(!r)return;const o=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${a}"]`);if(!o)return;const{top:i,height:s}=r.getBoundingClientRect(),{top:l,height:u}=o.getBoundingClientRect();l<i?o.scrollIntoView(!0):l+u>i+s&&o.scrollIntoView(!1)})}),(a,r)=>v(n).length?(g(),k("ul",_u,[(g(!0),k(ae,null,xe(v(n),o=>(g(),K(yu,{key:`${o.text}${o.link}`,item:o},null,8,["item"]))),128))])):V("v-if",!0)}}),ku=F(wu,[["__file","SidebarItems.vue"]]),xu={class:"sidebar"},Su=N({__name:"Sidebar",setup(e){return(t,n)=>(g(),k("aside",xu,[D(Tr),M(t.$slots,"top"),D(ku),M(t.$slots,"bottom")]))}}),Eu=F(Su,[["__file","Sidebar.vue"]]),Lu=N({__name:"Layout",setup(e){const t=Ie(),n=de(),a=ne(),r=w(()=>n.value.navbar!==!1&&a.value.navbar!==!1),o=yn(),i=q(!1),s=x=>{i.value=typeof x=="boolean"?x:!i.value},l={x:0,y:0},u=x=>{l.x=x.changedTouches[0].clientX,l.y=x.changedTouches[0].clientY},c=x=>{const E=x.changedTouches[0].clientX-l.x,C=x.changedTouches[0].clientY-l.y;Math.abs(E)>Math.abs(C)&&Math.abs(E)>40&&(E>0&&l.x<=80?s(!0):s(!1))},f=w(()=>[{"no-navbar":!r.value,"no-sidebar":!o.value.length,"sidebar-open":i.value},n.value.pageClass]);let d;le(()=>{d=Ye().afterEach(()=>{s(!1)})}),Pa(()=>{d()});const p=Ka(),y=p.resolve,S=p.pending;return(x,E)=>(g(),k("div",{class:se(["theme-container",v(f)]),onTouchstart:u,onTouchend:c},[M(x.$slots,"navbar",{},()=>[v(r)?(g(),K(Gc,{key:0,onToggleSidebar:s},{before:ee(()=>[M(x.$slots,"navbar-before")]),after:ee(()=>[M(x.$slots,"navbar-after")]),_:3})):V("v-if",!0)]),I("div",{class:"sidebar-mask",onClick:E[0]||(E[0]=C=>s(!1))}),M(x.$slots,"sidebar",{},()=>[D(Eu,null,{top:ee(()=>[M(x.$slots,"sidebar-top")]),bottom:ee(()=>[M(x.$slots,"sidebar-bottom")]),_:3})]),M(x.$slots,"page",{},()=>[v(n).home?(g(),K(dc,{key:0})):(g(),K(cn,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:v(y),onBeforeLeave:v(S)},{default:ee(()=>[(g(),K(pu,{key:v(t).path},{top:ee(()=>[M(x.$slots,"page-top")]),"content-top":ee(()=>[M(x.$slots,"page-content-top")]),"content-bottom":ee(()=>[M(x.$slots,"page-content-bottom")]),bottom:ee(()=>[M(x.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}}),Au=F(Lu,[["__file","Layout.vue"]]),Ou={class:"theme-container"},Cu={class:"page"},Tu={class:"theme-default-content"},Pu=I("h1",null,"404",-1),Iu=N({__name:"NotFound",setup(e){const t=Nt(),n=ne(),a=n.value.notFound??["Not Found"],r=()=>a[Math.floor(Math.random()*a.length)],o=n.value.home??t.value,i=n.value.backToHome??"Back to home";return(s,l)=>{const u=ve("RouterLink");return g(),k("div",Ou,[I("main",Cu,[I("div",Tu,[Pu,I("blockquote",null,X(r()),1),D(u,{to:v(o)},{default:ee(()=>[je(X(v(i)),1)]),_:1},8,["to"])])])])}}}),Nu=F(Iu,[["__file","NotFound.vue"]]);const $u=Oe({enhance({app:e,router:t}){e.component("Badge",oi),e.component("CodeGroup",ii),e.component("CodeGroupItem",ui),e.component("AutoLinkExternalIcon",()=>{const a=e.component("ExternalLinkIcon");return a?j(a):null}),e.component("NavbarSearch",()=>{const a=e.component("Docsearch")||e.component("SearchBox");return a?j(a):null});const n=t.options.scrollBehavior;t.options.scrollBehavior=async(...a)=>(await Ka().wait(),n(...a))},setup(){Xi(),Qi()},layouts:{Layout:Au,NotFound:Nu}}),Mu={enhance:({app:e})=>{e.component("Icon",Gt(()=>Ze(()=>Promise.resolve().then(()=>nc),void 0)))}};var zu={prefix:"fab",iconName:"twitch",icon:[512,512,[],"f1e8","M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"]},Ru={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},Du={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"]};Kl.add(zu,Du,Ru);const Hu=Oe(),_t=[Oo,Po,Mo,qo,Zo,ai,$u,Mu,Hu],Fu=[["v-8daa1a0e","/",{title:"Welcome!"},["/index.html","/README.md"]],["v-3706649a","/404.html",{title:""},["/404"]]];var Ea=N({name:"Vuepress",setup(){const e=ho();return()=>j(e.value)}}),ju=()=>Fu.reduce((e,[t,n,a,r])=>(e.push({name:t,path:n,component:Ea,meta:a},...r.map(o=>({path:o,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:Ea}]),Bu=io,Yu=()=>{const e=ro({history:Bu(Ia("/")),routes:ju(),scrollBehavior:(t,n,a)=>a||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{var a;(t.path!==n.path||n===oo)&&([ke.value]=await Promise.all([fe.resolvePageData(t.name),(a=Na[t.name])==null?void 0:a.__asyncLoader()]))}),e},Uu=e=>{e.component("ClientOnly",vn),e.component("Content",ko)},Wu=(e,t,n)=>{const a=w(()=>fe.resolveLayouts(n)),r=w(()=>fe.resolveRouteLocale(Re.value.locales,t.currentRoute.value.path)),o=w(()=>fe.resolveSiteLocaleData(Re.value,r.value)),i=w(()=>fe.resolvePageFrontmatter(ke.value)),s=w(()=>fe.resolvePageHeadTitle(ke.value,o.value)),l=w(()=>fe.resolvePageHead(s.value,i.value,o.value)),u=w(()=>fe.resolvePageLang(ke.value)),c=w(()=>fe.resolvePageLayout(ke.value,a.value));return e.provide(fo,a),e.provide(Ma,i),e.provide(po,s),e.provide(za,l),e.provide(Ra,u),e.provide(Da,c),e.provide(dn,r),e.provide(Ha,o),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>i.value},$head:{get:()=>l.value},$headTitle:{get:()=>s.value},$lang:{get:()=>u.value},$page:{get:()=>ke.value},$routeLocale:{get:()=>r.value},$site:{get:()=>Re.value},$siteLocale:{get:()=>o.value},$withBase:{get:()=>pn}}),{layouts:a,pageData:ke,pageFrontmatter:i,pageHead:l,pageHeadTitle:s,pageLang:u,pageLayout:c,routeLocale:r,siteData:Re,siteLocaleData:o}},Vu=()=>{const e=Ae(),t=vo(),n=go(),a=q([]),r=()=>{t.value.forEach(i=>{const s=qu(i);s&&a.value.push(s)})},o=()=>{document.documentElement.lang=n.value,a.value.forEach(i=>{i.parentNode===document.head&&document.head.removeChild(i)}),a.value.splice(0,a.value.length),t.value.forEach(i=>{const s=Gu(i);s!==null&&(document.head.appendChild(s),a.value.push(s))})};un(yo,o),le(()=>{r(),o(),Ue(()=>e.path,()=>o())})},qu=([e,t,n=""])=>{const a=Object.entries(t).map(([s,l])=>ue(l)?`[${s}=${JSON.stringify(l)}]`:l===!0?`[${s}]`:"").join(""),r=`head > ${e}${a}`;return Array.from(document.querySelectorAll(r)).find(s=>s.innerText===n)||null},Gu=([e,t,n])=>{if(!ue(e))return null;const a=document.createElement(e);return fn(t)&&Object.entries(t).forEach(([r,o])=>{ue(o)?a.setAttribute(r,o):o===!0&&a.setAttribute(r,"")}),ue(n)&&a.appendChild(document.createTextNode(n)),a},Xu=no,Ku=async()=>{var n;const e=Xu({name:"VuepressApp",setup(){var a;Vu();for(const r of _t)(a=r.setup)==null||a.call(r);return()=>[j(ao),..._t.flatMap(({rootComponents:r=[]})=>r.map(o=>j(o)))]}}),t=Yu();Uu(e),Wu(e,t,_t);for(const a of _t)await((n=a.enhance)==null?void 0:n.call(a,{app:e,router:t,siteData:Re}));return e.use(t),{app:e,router:t}};Ku().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{Ku as createVueApp};
