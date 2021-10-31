import{j as d,u,L as p,r as m,B as x,S as h,R as f,a as y,b}from"./vendor.1dfb7d26.js";const g=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};g();const r=d.exports.jsx,c=d.exports.jsxs,v=()=>{const l=u();return r("div",{className:"flex items-center justify-center gap-12 w-full h-20 bg-gray-800 text-gray-50",children:Object.entries({"/":"Index","/coffee":"Buy Me a Coffee"}).map(([o,n],e)=>r(p,{to:o,className:`
            text-2xl
            ${l.pathname===o?"text-red-500":"hover:text-red-500"}
          `,children:n},e))})},j=()=>r("div",{children:r("h1",{children:"Home"})}),N=()=>{const[l,s]=m.exports.useState(!1),o=[{name:"BTC",color:"text-yellow-500",address:"hhr98aer8avrn98vr98eanryu"},{name:"LTC",color:"text-gray-300",address:"a80sb7vr80s7bvras8rb7ar9as7sa7r9sbr6va"},{name:"DOGE",color:"text-yellow-200",address:"0sabsa8fysasafbasfsaf6fbas7f6asf"}],n=()=>{s(!0),setTimeout(()=>{s(!1)},2e3)},e=()=>{s(!1)};return c("div",{className:"flex flex-col justify-center items-center w-full py-5",children:[o.map(({name:t,color:a,address:i},L)=>c("div",{className:"flex justify-center items-center gap-3 w-full",children:[c("span",{className:`text-3xl text-semibold ${a}`,children:[t,":"]}),r("button",{className:"text-3xl text-white hover:text-red-500",onClick:()=>{navigator.clipboard.writeText(i),n()},children:i})]},t)),r("div",{className:`
          flex justify-center items-center
          absolute bottom-10 left-[calc(50%-100px)]
          w-[200px]
          py-3
          text-black bg-gray-300
          rounded cursor-pointer select-none
          transition-all duration-500

          hover:bg-gray-400

          ${l?"opacity-100":"opacity-0"}
        `,onClick:e,children:"Copied to clipboard!"})]})},w=()=>r(x,{children:c("div",{className:"App h-screen bg-black",children:[r(v,{}),c(h,{children:[r(f,{exact:!0,path:"/",children:r(j,{})}),r(f,{path:"/coffee",children:r(N,{})})]})]})});y.render(r(b.StrictMode,{children:r(w,{})}),document.getElementById("root"));
