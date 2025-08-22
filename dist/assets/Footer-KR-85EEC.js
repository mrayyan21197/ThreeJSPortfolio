import{a as n,j as r}from"./index-DH80OnjG.js";import{a as f}from"./index-BYNCCIuH.js";/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,s)=>s?s.toUpperCase():a.toLowerCase()),h=t=>{const e=v(t);return e.charAt(0).toUpperCase()+e.slice(1)},d=(...t)=>t.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim(),g=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:i="",children:o,iconNode:x,...l},m)=>n.createElement("svg",{ref:m,...y,width:e,height:e,stroke:t,strokeWidth:s?Number(a)*24/Number(e):a,className:d("lucide",i),...!o&&!g(l)&&{"aria-hidden":"true"},...l},[...x.map(([p,u])=>n.createElement(p,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=(t,e)=>{const a=n.forwardRef(({className:s,...i},o)=>n.createElement(k,{ref:o,iconNode:e,className:d(`lucide-${w(h(t))}`,`lucide-${t}`,s),...i}));return a.displayName=h(t),a};/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],N=c("external-link",j);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],C=c("github",b);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],A=c("linkedin",_);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],M=c("mail",L);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],q=c("twitter",$),R=()=>{const t=e=>{switch(e.toLowerCase()){case"github":return r.jsx(C,{className:"w-5 h-5 hover:text-blue-400 transition-colors"});case"linkedin":return r.jsx(A,{className:"w-5 h-5 hover:text-blue-600 transition-colors"});case"twitter":return r.jsx(q,{className:"w-5 h-5 hover:text-blue-400 transition-colors"});case"email":return r.jsx(M,{className:"w-5 h-5 hover:text-red-400 transition-colors"});default:return r.jsx(N,{className:"w-5 h-5 hover:text-gray-300 transition-colors"})}};return r.jsxs("section",{className:"flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space",children:[r.jsx("div",{className:"mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"}),r.jsxs("div",{className:"flex gap-4 text-xs",children:[r.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Terms & Conditions"}),r.jsx("span",{className:"text-neutral-600",children:"|"}),r.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Privacy Policy"})]}),r.jsx("div",{className:"flex gap-4",children:f.map((e,a)=>r.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg hover:bg-neutral-800 transition-all duration-200 group",title:e.name,children:t(e.name)},a))}),r.jsx("p",{className:"text-xs",children:"© 2025 Rayyan. All rights reserved."})]})};export{R as default};
