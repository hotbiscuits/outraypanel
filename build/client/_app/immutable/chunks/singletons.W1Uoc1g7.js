import{w as u}from"./index.xNFlRHgx.js";const v=globalThis.__sveltekit_1emd1g1?.base??"",k=globalThis.__sveltekit_1emd1g1?.assets??v,m="1705224921944",T="sveltekit:snapshot",w="sveltekit:scroll",I="sveltekit:states",S="sveltekit:pageurl",y="sveltekit:history",N="sveltekit:navigation",f={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},_=location.origin;function U(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function L(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function g(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function O(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=g(e)}}function Y(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!a||A(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=n?.origin===_&&e.hasAttribute("download");return{url:n,external:r,target:a,download:l}}function x(e){let t=null,n=null,a=null,r=null,l=null,o=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=c(s,"preload-code")),r===null&&(r=c(s,"preload-data")),t===null&&(t=c(s,"keepfocus")),n===null&&(n=c(s,"noscroll")),l===null&&(l=c(s,"reload")),o===null&&(o=c(s,"replacestate")),s=g(s);function i(b){switch(b){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:d[a??"off"],preload_data:d[r??"off"],keepfocus:i(t),noscroll:i(n),reload:i(l),replace_state:i(o)}}function p(e){const t=u(e);let n=!0;function a(){n=!0,t.update(o=>o)}function r(o){n=!1,t.set(o)}function l(o){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&o(s=i)})}return{notify:a,set:r,subscribe:l}}function E(){const{set:e,subscribe:t}=u(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${k}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const o=(await r.json()).version!==m;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:a}}function A(e,t){return e.origin!==_||!e.pathname.startsWith(t)}let h;function P(e){h=e.client}function V(e){return(...t)=>h[e](...t)}const G={url:p({}),page:p({}),navigating:u(null),updated:E()};export{y as H,N,S as P,w as S,I as a,T as b,x as c,G as d,v as e,O as f,Y as g,f as h,A as i,P as j,V as k,_ as o,U as r,L as s};
