import{y as p,X as T,G as I,s as N,S as U}from"./scheduler.GmzjPCox.js";const f=[];function L(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let s;const o=new Set;function r(n){if(N(e,n)&&(e=n,s)){const l=!f.length;for(const i of o)i[1](),f.push(i,e);if(l){for(let i=0;i<f.length;i+=2)f[i][0](f[i+1]);f.length=0}}}function c(n){r(n(e))}function a(n,l=p){const i=[n,l];return o.add(i),o.size===1&&(s=t(r,c)||p),n(e),()=>{o.delete(i),o.size===0&&s&&(s(),s=null)}}return{set:r,update:c,subscribe:a}}function K(e,t,s){const o=!Array.isArray(e),r=o?[e]:e;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const c=t.length<2;return L(s,(a,n)=>{let l=!1;const i=[];let _=0,g=p;const v=()=>{if(_)return;g();const u=t(o?i[0]:i,a,n);c?a(u):g=U(u)?u:p},R=r.map((u,h)=>T(u,S=>{i[h]=S,_&=~(1<<h),l&&v()},()=>{_|=1<<h}));return l=!0,v(),function(){I(R),g(),l=!1}})}function X(e){return{subscribe:e.subscribe.bind(e)}}const O=globalThis.__sveltekit_wsgevs?.base??"",x=globalThis.__sveltekit_wsgevs?.assets??O,Y="1705146427639",j="sveltekit:snapshot",q="sveltekit:scroll",D="sveltekit:states",H="sveltekit:pageurl",$="sveltekit:history",z="sveltekit:navigation",k={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},w=location.origin;function B(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const s=document.getElementsByTagName("base");t=s.length?s[0].href:document.URL}return new URL(e,t)}function C(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...k,"":k.hover};function A(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function W(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=A(e)}}function F(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!s||!!o||P(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=s?.origin===w&&e.hasAttribute("download");return{url:s,external:r,target:o,download:c}}function J(e){let t=null,s=null,o=null,r=null,c=null,a=null,n=e;for(;n&&n!==document.documentElement;)o===null&&(o=d(n,"preload-code")),r===null&&(r=d(n,"preload-data")),t===null&&(t=d(n,"keepfocus")),s===null&&(s=d(n,"noscroll")),c===null&&(c=d(n,"reload")),a===null&&(a=d(n,"replacestate")),n=A(n);function l(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:y[o??"off"],preload_data:y[r??"off"],keepfocus:l(t),noscroll:l(s),reload:l(c),replace_state:l(a)}}function m(e){const t=b(e);let s=!0;function o(){s=!0,t.update(a=>a)}function r(a){s=!1,t.set(a)}function c(a){let n;return t.subscribe(l=>{(n===void 0||s&&l!==n)&&a(n=l)})}return{notify:o,set:r,subscribe:c}}function G(){const{set:e,subscribe:t}=b(!1);let s;async function o(){clearTimeout(s);try{const r=await fetch(`${x}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==Y;return a&&(e(!0),clearTimeout(s)),a}catch{return!1}}return{subscribe:t,check:o}}function P(e,t){return e.origin!==w||!e.pathname.startsWith(t)}let E;function M(e){E=e.client}function Q(e){return(...t)=>E[e](...t)}const Z={url:m({}),page:m({}),navigating:b(null),updated:G()};export{$ as H,z as N,H as P,q as S,D as a,j as b,J as c,Z as d,O as e,W as f,F as g,k as h,P as i,M as j,Q as k,K as l,L as m,X as n,w as o,B as r,C as s,b as w};
