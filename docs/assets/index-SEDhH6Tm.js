import{C as f}from"./cropperjs-o46FJETO.js";import{x as p,r as u,s as d,C as i,N as m,O as r,W as b,H as g,u as n}from"./element-plus-hgTYpOXD.js";const h={class:"max-w-full border"},C=p({inheritAttrs:!1,__name:"page-cropperjs",setup(_){const c=u(),a=d(null);i(o=>{const t=n(c);t&&(a.value=new f(t,{aspectRatio:1}),o(()=>{const e=n(a);e==null||e.destroy()}))});const l=()=>{const o=n(a);if(!o)return;const e=o.getCroppedCanvas().toDataURL(),s=document.createElement("a");s.download=`${Date.now()}.png`,s.href=e,s.click(),s.remove(),URL.revokeObjectURL(e)};return(o,t)=>(g(),m(b,null,[r("div",h,[r("img",{ref_key:"imgRef",ref:c,class:"w-96 h-96 block",src:"https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"},null,512)]),r("button",{onClick:l,class:"bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 outline-sky-500 active:bg-blue-300 rounded py-1 px-2 text-white"}," download ")],64))}});export{C as default};
