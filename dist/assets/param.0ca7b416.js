import{e as _,o as c,c as r,b as o,t as E,f as v,r as d,a as u,k as i,h as x,u as m,l as b,m as g,n as V,q as F,s as D,_ as S,w as f,d as $}from"./index.d09da64e.js";const U=o("h3",null,"\u7236\u5411\u5B50\uFF1A\u5B50",-1),y=_({__name:"Son",props:{value:{type:String,default:""}},setup(a){return(e,s)=>(c(),r("div",null,[U,o("span",null,"\u513F\u5B50\u6536\u5230\u7684\uFF1A"+E(a.value),1)]))}}),A=o("h3",null,"\u7236\u5411\u5B50\uFF1A\u7236",-1),k={class:"p-1 mt-1 b"},C=_({__name:"Father",setup(a){const e=v({value:""});return(s,t)=>{const n=d("el-input");return c(),r("div",null,[A,u(n,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l)},null,8,["modelValue"]),o("div",k,[u(y,{value:e.value},null,8,["value"])])])}}}),N=o("h3",null,"\u513F\u5B50\u4E2D",-1),j=_({__name:"Son",props:{value:{type:String,default:""}},emits:["update"],setup(a,{emit:e}){const s=a,t=v({});return t.value=i({get(){return s.value},set(n){e("update",n)}}),(n,l)=>{const p=d("el-input");return c(),r("div",null,[N,u(p,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=h=>t.value=h)},null,8,["modelValue"])])}}}),w=o("h3",null,"\u7236\u4EB2\u4E2D",-1),O={class:"p-1 mt-1 b"},R=_({__name:"Father",setup(a){const e=x("\u7236\u4EB2\u7ED9\u513F\u5B50\u7684");return(s,t)=>(c(),r("div",null,[o("div",null,[w,o("span",null,"\u7236\u4EB2\u6536\u5230\u7684\uFF1A"+E(e.value),1),o("div",O,[u(j,{value:e.value,onUpdate:t[0]||(t[0]=n=>e.value=n)},null,8,["value"])])])]))}}),q=o("h3",null,"\u540E\u4EE3\u4E2D",-1),I=_({__name:"Offspring",setup(a){const e=b("state");return(s,t)=>{const n=d("el-input");return c(),r("div",null,[q,u(n,{modelValue:m(e).value,"onUpdate:modelValue":t[0]||(t[0]=l=>m(e).value=l)},null,8,["modelValue"])])}}}),L=o("h3",null,"\u7956\u5148\u7684",-1),T={class:"p-1 mt-1 b"},z=_({__name:"Ancestor",setup(a){const e=v({value:""});return g("state",e),(s,t)=>{const n=d("el-input");return c(),r("div",null,[L,u(n,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l)},null,8,["modelValue"]),o("div",T,[u(I)])])}}}),G={class:"b p-1"},H=o("b",null,"\u5DE6",-1),J=_({__name:"Left",setup(a){const e=F(),s=i({get(){return e.state.mod1.value},set(t){e.dispatch("mod1/value",t)}});return(t,n)=>{const l=d("el-input");return c(),r("div",G,[H,u(l,{modelValue:m(s),"onUpdate:modelValue":n[0]||(n[0]=p=>V(s)?s.value=p:null)},null,8,["modelValue"])])}}}),K={class:"b p-1"},M=o("b",null,"\u53F3",-1),P=_({__name:"Right",setup(a){const e=F();console.log(e.state);const s=D({mes:"aaa"}),t=v({});Object.keys(s).forEach(l=>{t[l]=i(s[l].bind({$store:e}))}),console.log(t);const n=i({get(){return e.state.mod1.value},set(l){e.dispatch("mod1/value",l)}});return(l,p)=>{const h=d("el-input");return c(),r("div",K,[M,u(h,{modelValue:m(n),"onUpdate:modelValue":p[0]||(p[0]=B=>V(n)?n.value=B:null)},null,8,["modelValue"])])}}}),Q={class:"box"},W=_({__name:"Father",setup(a){return(e,s)=>(c(),r("div",Q,[u(J),u(P)]))}});const X=S(W,[["__scopeId","data-v-de90bb48"]]),Y=$("\u534E\u4E3D\u7684\u5206\u9694\u7EBF"),Z=$("\u534E\u4E3D\u7684\u5206\u9694\u7EBF"),ee=$("\u534E\u4E3D\u7684\u5206\u9694\u7EBF"),ue=_({__name:"param",setup(a){return(e,s)=>{const t=d("el-divider");return c(),r("div",null,[u(C),u(t,null,{default:f(()=>[Y]),_:1}),u(R),u(t,null,{default:f(()=>[Z]),_:1}),u(z),u(t,null,{default:f(()=>[ee]),_:1}),u(X)])}}});export{ue as default};
