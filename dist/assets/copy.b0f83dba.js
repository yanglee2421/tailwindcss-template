import{_ as f,r as v,g,o as n,c as r,e as i,h as u,i as h,v as x,T as y,F as b,f as k,p as I,j as S}from"./index.73447187.js";const V=e=>(I("data-v-c5442b98"),e=e(),S(),e),T={class:"b"},w=k(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae officiis hic saepe minus! Libero dolorem ipsum voluptates eos repellendus porro. Illum itaque officia id dolorum, animi magnam numquam fugit. "),B=[w],D=V(()=>i("li",null,"\u590D\u5236",-1)),L=[D],q={__name:"copy",setup(e){const s=v({menuVis:!1}),t=g(),p=l=>{const o=getSelection();l.oncontextmenu=a=>{a.preventDefault();const{clientX:_,clientY:d}=a;t.value.style.transform=`translate(${_}px,${d}px)`,t.value.oncontextmenu=c=>{c.preventDefault()},t.value.onclick=c=>{c.stopPropagation(),o.selectAllChildren(a.target);const m=o.toString();navigator.clipboard.writeText(m)},s.menuVis=!0,document.body.addEventListener("click",()=>{s.menuVis=!1,o.removeAllRanges()},{once:!0})}};return console.log(globalThis),(l,o)=>(n(),r(b,null,[i("div",null,[u((n(),r("div",T,B)),[[p]])]),(n(),h(y,{to:"body"},[u(i("ul",{ref_key:"menu",ref:t,class:"fixed menu"},L,512),[[x,s.menuVis]])]))],64))}},C=f(q,[["__scopeId","data-v-c5442b98"]]);export{C as default};
