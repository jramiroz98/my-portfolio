import{o as m}from"./runtime.q1C_IGH6.js";const f=[];function l(){}function w(t,s){return{subscribe:q(t,s).subscribe}}function j(t,s){return t!=t?s==s:t!==s||t&&typeof t=="object"||typeof t=="function"}function q(t,s=l){let o=null;const r=new Set;function u(n){if(j(t,n)&&(t=n,o)){const i=!f.length;for(const e of r)e[1](),f.push(e,t);if(i){for(let e=0;e<f.length;e+=2)f[e][0](f[e+1]);f.length=0}}}function a(n){u(n(t))}function b(n,i=l){const e=[n,i];return r.add(e),r.size===1&&(o=s(u,a)||l),n(t),()=>{r.delete(e),r.size===0&&o&&(o(),o=null)}}return{set:u,update:a,subscribe:b}}function k(t){return t()}function v(t){t.forEach(k)}function A(t,s,o){const r=!Array.isArray(t),u=r?[t]:t;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=s.length<2;return w(o,(b,n)=>{let i=!1;const e=[];let p=0,_=l;const h=()=>{if(p)return;_();const c=s(r?e[0]:e,b,n);a?b(c):_=typeof c=="function"?c:l},y=u.map((c,d)=>m(c,g=>{e[d]=g,p&=~(1<<d),i&&h()},()=>{p|=1<<d}));return i=!0,h(),function(){v(y),_(),i=!1}})}const x=globalThis.__sveltekit_13s5hmj?.base??"/my-portfolio",E=globalThis.__sveltekit_13s5hmj?.assets??x;export{E as a,x as b,A as d,w as r,q as w};
