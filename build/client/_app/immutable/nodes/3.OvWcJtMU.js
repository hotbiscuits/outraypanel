import{A as B,t as $,s as fe,B as re,f as F,a as pe,g as w,h as C,C as he,c as me,d as D,j as R,D as H,E as V,i as se,x as k,F as ue,y as z,G as ve,z as K}from"../chunks/scheduler.Ia5wE9Hu.js";import{e as X,g as oe}from"../chunks/spread.EI4AyUUD.js";import{S as ge,i as Ee}from"../chunks/index.vg01QSH7.js";import{j as be}from"../chunks/singletons.EYvsvChX.js";import{d as le,w as ae,r as ce,a as ye}from"../chunks/index.4HhxYWZ4.js";const _e=be("goto");function Y(e,t,n=!0){return t===e.length-1?n?e[0]:e[t]:e[t+1]}function J(e,t,n=!0){return t<=0?n?e[e.length-1]:e[0]:e[t-1]}function Ae(e){return e[e.length-1]}function Ie(e){return Object.keys(e).reduce((t,n)=>e[n]===void 0?t:t+`${n}:${e[n]};`,"")}function xe(e){return e?!0:void 0}const Fe={type:"hidden","aria-hidden":!0,hidden:!0,tabIndex:-1,style:Ie({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"})};function Q(e){function t(n){return n(e),()=>{}}return{subscribe:t}}const j=e=>new Proxy(e,{get(t,n,s){return Reflect.get(t,n,s)},ownKeys(t){return Reflect.ownKeys(t).filter(n=>n!=="action")}}),Z=e=>typeof e=="function";function N(e,t){const{stores:n,action:s,returned:l}=t??{},o=(()=>{if(n&&l)return le(n,p=>{const u=l(p);if(Z(u)){const m=(...h)=>j({...u(...h),[`data-melt-${e}`]:"",action:s??P});return m.action=s??P,m}return j({...u,[`data-melt-${e}`]:"",action:s??P})});{const u=l?.();if(Z(u)){const m=(...h)=>j({...u(...h),[`data-melt-${e}`]:"",action:s??P});return m.action=s??P,Q(m)}return Q(j({...u,[`data-melt-${e}`]:"",action:s??P}))}})(),a=s??(()=>{});return a.subscribe=o.subscribe,a}function we(e){const t=o=>o?`${e}-${o}`:e,n=o=>`data-melt-${e}${o?`-${o}`:""}`,s=o=>`[data-melt-${e}${o?`-${o}`:""}]`;return{name:t,attribute:n,selector:s,getEl:o=>document.querySelector(s(o))}}const De=typeof document<"u";function ie(e){return e instanceof HTMLElement}function Se(e){return e instanceof HTMLInputElement}function ke(...e){return(...t)=>{for(const n of e)typeof n=="function"&&n(...t)}}function P(){}function de(e,t,n,s){const l=Array.isArray(t)?t:[t];return l.forEach(o=>e.addEventListener(o,n,s)),()=>{l.forEach(o=>e.removeEventListener(o,n,s))}}function T(e,t,n,s){const l=Array.isArray(t)?t:[t];if(typeof n=="function"){const o=Te(a=>n(a));return l.forEach(a=>e.addEventListener(a,o,s)),()=>{l.forEach(a=>e.removeEventListener(a,o,s))}}return()=>void 0}function Pe(e){const t=e.currentTarget;if(!ie(t))return null;const n=new CustomEvent(`m-${e.type}`,{detail:{originalEvent:e},cancelable:!0});return t.dispatchEvent(n),n}function Te(e){return t=>{if(!Pe(t)?.defaultPrevented)return e(t)}}function Le(e,...t){const n={};for(const s of Object.keys(e))t.includes(s)||(n[s]=e[s]);return n}const Ce=(e,t)=>{const n=(l,o)=>{e.update(a=>{const p=l(a);let u=p;return t&&(u=t({curr:a,next:p})),o?.(u),u})};return{...e,update:n,set:l=>{n(()=>l)}}};let Re="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",Me=(e=21)=>{let t="",n=e;for(;n--;)t+=Re[Math.random()*64|0];return t};function Oe(){return Me(10)}function qe(e){return e.reduce((t,n)=>(t[n]=Oe(),t),{})}const $e={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"};function ee(e){const t={};return Object.keys(e).forEach(n=>{const s=n,l=e[s];t[s]=ae(l)}),t}ce(void 0,e=>{function t(s){e(s),e(void 0)}return de(document,"pointerup",t,{passive:!1,capture:!0})});ce(void 0,e=>{function t(s){s&&s.key===$e.ESCAPE&&e(s),e(void 0)}return de(document,"keydown",t,{passive:!1})});const{name:U,selector:G}=we("pin-input"),M=e=>{const t=e.closest(G());if(!ie(t))return{inputs:null,el:e,elIndex:-1};const n=Array.from(t.querySelectorAll(G("input"))).filter(s=>Se(s));return{elIndex:n.indexOf(e),inputs:n}},je={placeholder:"○",disabled:!1,type:"text",name:void 0,defaultValue:[]},He=["root"];function Ve(e){const t={...je,...e},n=ee(Le(t,"value","ids")),{placeholder:s,disabled:l,type:o,name:a}=n,p=t.value??ae(t.defaultValue),u=Ce(p,t?.onValueChange),m=le(u,r=>r.join("")),h=ee({...qe(He),...t.ids}),A=N(U(),{stores:[u,h.root],returned:([r,v])=>({id:v,"data-complete":r.length&&r.every(E=>E.length>0)?"":void 0})});let f=0;const L=()=>{if(!De)return 1/0;const r=document.getElementById(B(h.root));return r?Array.from(r.querySelectorAll(G("input"))).length:1/0},S=N(U("input"),{stores:[u,s,l,o],returned:([r,v,E,i])=>()=>{const c=L(),_=f%c;f=(f+1)%c;const g=r[_]??"";return{"data-complete":r.length&&r.every(I=>I.length>0)?"":void 0,placeholder:v,disabled:xe(E),type:i,value:g}},action:r=>{const{elIndex:v}=M(r);u.update(i=>(i[v]=r.value,i));const E=ke(T(r,"keydown",i=>{const{inputs:c,elIndex:_}=M(r);if(c){if(i.key==="Backspace")if(i.preventDefault(),r.value)r.value="",$().then(()=>r.placeholder=""),u.set(c.map(g=>g.value.slice(-1)??void 0));else{const g=J(c,_,!1);g.focus(),g.value="",$().then(()=>g.placeholder=""),u.set(c.map(I=>I.value.slice(-1)??void 0))}i.key==="Delete"&&(i.preventDefault(),r.value="",$().then(()=>r.placeholder=""),u.set(c.map(g=>g.value.slice(-1)??void 0))),i.key==="ArrowLeft"&&(i.preventDefault(),J(c,_,!1).focus()),i.key==="ArrowRight"&&(i.preventDefault(),Y(c,_,!1).focus()),i.key==="Home"&&(i.preventDefault(),c[0].focus()),i.key==="End"&&(i.preventDefault(),Ae(c).focus())}}),T(r,"input",i=>{const{inputs:c,elIndex:_}=M(r);if(!c)return;const I=(b=>{const x=B(u)[_],q=b.selectionStart??1;return x?q>1?b.value.slice(1):b.value.slice(0,Math.max(b.value.length-2,1)):b.value})(r);i.inputType!=="insertFromPaste"&&(r.value=I.slice(-1),r.value.length!==0&&Y(c,_,!1).focus(),u.set(c.map(b=>b.value.slice(-1)??void 0)))}),T(r,"paste",i=>{i.preventDefault();const{inputs:c,elIndex:_}=M(r);if(!c)return;const I=i.clipboardData;if(!I)return;const O=I.getData("text"),b=O.length>=c.length?0:_,W=Math.min(b+O.length,c.length);for(let x=b;x<W;x++){const q=c[x];q.value=O[x-b],q.focus()}c[W]?.focus(),u.set(c.map(x=>x.value.slice(-1)??void 0))}),T(r,"change",()=>{const{inputs:i}=M(r);i&&u.set(i.map(c=>c.value.slice(-1)??void 0))}),T(r,"focus",()=>{r.setSelectionRange(1,1),r.placeholder="",$().then(()=>{r.placeholder=""})}),T(r,"blur",()=>{r.placeholder=B(s)}));return{destroy(){E()}}}}),d=N(U("hidden-input"),{stores:[m,a],returned:([r,v])=>({...Fe,value:r,name:v})}),y=()=>{u.update(r=>(r.forEach((v,E)=>r[E]=""),r))};return{ids:h,elements:{root:A,input:S,hiddenInput:d},states:{value:u,valueStr:ye(m)},helpers:{clear:y},options:n}}function te(e,t,n){const s=e.slice();s[7]=t[n];const l=s[1]();return s[8]=l,s}function ne(e){let t,n,s,l=[{class:"text-magnum-900 square-12 w-12 rounded-md bg-white text-center text-lg shadow-sm"},e[8]],o={};for(let a=0;a<l.length;a+=1)o=re(o,l[a]);return{c(){t=F("input"),this.h()},l(a){t=w(a,"INPUT",{class:!0}),this.h()},h(){H(t,o),V(t,"svelte-u2g9qa",!0)},m(a,p){se(a,t,p),t.autofocus&&t.focus(),n||(s=ue(e[8].action(t)),n=!0)},p(a,p){H(t,o=oe(l,[{class:"text-magnum-900 square-12 w-12 rounded-md bg-white text-center text-lg shadow-sm"},p&2&&a[8]])),V(t,"svelte-u2g9qa",!0)},d(a){a&&D(t),n=!1,s()}}}function We(e){let t,n,s,l,o,a="Bibendum Parser Login",p,u,m,h,A=X(Array.from({length:4})),f=[];for(let d=0;d<A.length;d+=1)f[d]=ne(te(e,A,d));let L=[e[0],{class:"flex w-1/2 items-center justify-center gap-2"}],S={};for(let d=0;d<L.length;d+=1)S=re(S,L[d]);return{c(){t=F("body"),n=F("div"),s=F("div"),l=F("div"),o=F("p"),o.textContent=a,p=pe(),u=F("div");for(let d=0;d<f.length;d+=1)f[d].c();this.h()},l(d){t=w(d,"BODY",{class:!0});var y=C(t);n=w(y,"DIV",{class:!0});var r=C(n);s=w(r,"DIV",{class:!0});var v=C(s);l=w(v,"DIV",{class:!0});var E=C(l);o=w(E,"P",{class:!0,"data-svelte-h":!0}),he(o)!=="svelte-1405bje"&&(o.textContent=a),p=me(E),u=w(E,"DIV",{class:!0});var i=C(u);for(let c=0;c<f.length;c+=1)f[c].l(i);i.forEach(D),E.forEach(D),v.forEach(D),r.forEach(D),y.forEach(D),this.h()},h(){R(o,"class","pb-2"),H(u,S),V(u,"svelte-u2g9qa",!0),R(l,"class","m-6 flex min-h-[200px] flex-col items-center justify-center rounded-md bg-white sm:p-8"),R(s,"class","w-1/3"),R(n,"class","flex h-screen items-center justify-center"),R(t,"class","svelte-u2g9qa")},m(d,y){se(d,t,y),k(t,n),k(n,s),k(s,l),k(l,o),k(l,p),k(l,u);for(let r=0;r<f.length;r+=1)f[r]&&f[r].m(u,null);m||(h=ue(e[0].action(u)),m=!0)},p(d,[y]){if(y&2){A=X(Array.from({length:4}));let r;for(r=0;r<A.length;r+=1){const v=te(d,A,r);f[r]?f[r].p(v,y):(f[r]=ne(v),f[r].c(),f[r].m(u,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=A.length}H(u,S=oe(L,[y&1&&d[0],{class:"flex w-1/2 items-center justify-center gap-2"}])),V(u,"svelte-u2g9qa",!0)},i:z,o:z,d(d){d&&D(t),ve(f,d),m=!1,h()}}}function Be(e,t,n){let s,l,o;const a=Ve({defaultValue:["","","",""]}),{elements:{root:p,input:u},states:{valueStr:m}}=a;return K(e,p,h=>n(0,l=h)),K(e,u,h=>n(1,o=h)),K(e,m,h=>n(5,s=h)),e.$$.update=()=>{e.$$.dirty&32&&s&&setTimeout(()=>{s==="1332"&&_e("/user")},0)},[l,o,p,u,m,s]}class Xe extends ge{constructor(t){super(),Ee(this,t,Be,We,fe,{})}}export{Xe as component};