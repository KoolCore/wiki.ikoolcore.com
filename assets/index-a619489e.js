import{d as De,r as p,c as U,w as X,o as Ce,a as Te,u as Re,G as Ee,M as Y,b as Ae,e as _,f as y,g as R,h as T,i as m,j as H,k as W,n as Q,S as we,B as Ie,D as Le,l as j,t as P,F as V,m as M,I as Ne,p as ye,R as be,q as J,s as ge,v as ke,x as Ue,N as q,y as Pe,z as He}from"./vendor-a7b6b0c4.js";import"./__commonjsHelpers__-725317a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const Se="modulepreload",Ge=function(e,t){return new URL(e,t).href},Z={},i=function(t,o,l){if(!o||o.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(o.map(r=>{if(r=Ge(r,l),r in Z)return;Z[r]=!0;const u=r.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!l)for(let v=n.length-1;v>=0;v--){const D=n[v];if(D.href===r&&(!u||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${f}`))return;const a=document.createElement("link");if(a.rel=u?"stylesheet":Se,u||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),u)return new Promise((v,D)=>{a.addEventListener("load",v),a.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},h=(e,t)=>{const o=e[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((l,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})},{DOC_LANGUAGE:ze,DOC_NAVIGATIONS:xe}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://yun.swimly.cn/source/ikoolcore/iKoolCore.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["swimly","KoolCore"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "简体中文","value": "zh-CN"}]',DOC_NAVIGATIONS:'[{"name": "R1","value": "R1"}, {"name": "R2","value": "R2","disabled":"false"}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0};function Fe(){const e=[],t=JSON.parse(xe),o=JSON.parse(ze);return t.forEach(l=>{o.forEach(n=>{const r=$(ee(je(l,n),{nav:l,lang:n}),n);e.push({nav:l,lang:n,children:r})})}),e}function $(e,t){return e.forEach(o=>{o.title=o[`${t.value}Title`],o.children&&$(o.children,t)}),e}function ee(e,t){return e.forEach((o,l)=>{var r;const n=`${t.nav.value}/${t.lang.value}`;(r=o.disabled)!=null&&r.includes(n)&&e.splice(l,1),o.children&&ee(o.children,t)}),e}function je(e,t){return[{"zh-CNTitle":"项目",enTitle:"Describe",type:"doc",children:[{"zh-CNTitle":"了解项目",enTitle:"Introduction",disabled:["R2/zh-CN","R2/en"],path:`/${e.value}/${t.value}/project/know-about-the-project`,component:()=>h(Object.assign({"./docs/R1/en/project/know-about-the-project.md":()=>i(()=>import("./know-about-the-project-865a6f5e.js"),["./know-about-the-project-865a6f5e.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/project/know-about-the-project.md":()=>i(()=>import("./know-about-the-project-0c31cf45.js"),["./know-about-the-project-0c31cf45.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/project/know-about-the-project.md`)},{"zh-CNTitle":"产品定位",enTitle:"Solutions",path:`/${e.value}/${t.value}/project/Solutions`,component:()=>h(Object.assign({"./docs/R1/en/project/Solutions.md":()=>i(()=>import("./Solutions-20848b27.js"),["./Solutions-20848b27.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/project/Solutions.md`)}]},{"zh-CNTitle":"设计",enTitle:"Design",type:"doc",children:[{"zh-CNTitle":"硬件设计",enTitle:"Hardware",path:`/${e.value}/${t.value}/design/hardware`,component:()=>h(Object.assign({"./docs/R1/en/design/hardware.md":()=>i(()=>import("./hardware-1b02b9f5.js"),["./hardware-1b02b9f5.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/design/hardware.md":()=>i(()=>import("./hardware-d8015683.js"),["./hardware-d8015683.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/design/hardware.md`)},{"zh-CNTitle":"结构设计",enTitle:"Structual",path:`/${e.value}/${t.value}/design/stuctural`,component:()=>h(Object.assign({"./docs/R1/en/design/structural-design.md":()=>i(()=>import("./structural-design-3278e912.js"),["./structural-design-3278e912.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/design/structural-design.md":()=>i(()=>import("./structural-design-a40bffa6.js"),["./structural-design-a40bffa6.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/design/structural-design.md`)}]},{"zh-CNTitle":"购买",enTitle:"Buying",type:"doc",children:[{"zh-CNTitle":"产品售价",enTitle:"Price",path:`/${e.value}/${t.value}/sale/price`,component:()=>h(Object.assign({"./docs/R1/zh-CN/sale/price.md":()=>i(()=>import("./price-79eaee29.js"),["./price-79eaee29.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/sale/price.md`)},{"zh-CNTitle":"升级套件",enTitle:"Accessories",path:`/${e.value}/${t.value}/sale/part-prices`,component:()=>h(Object.assign({"./docs/R1/zh-CN/sale/part-prices.md":()=>i(()=>import("./part-prices-013c934d.js"),["./part-prices-013c934d.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/sale/part-prices.md`)},{"zh-CNTitle":"购买店铺",enTitle:"Stores",path:`/${e.value}/${t.value}/sale/channel`,component:()=>h(Object.assign({"./docs/R1/zh-CN/sale/channel.md":()=>i(()=>import("./channel-4af6408f.js"),["./channel-4af6408f.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/sale/channel.md`)},{"zh-CNTitle":"售后服务",enTitle:"Service",path:`/${e.value}/${t.value}/sale/service`,component:()=>h(Object.assign({"./docs/R1/zh-CN/sale/service.md":()=>i(()=>import("./service-8796d77a.js"),["./service-8796d77a.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/sale/service.md`)}]},{"zh-CNTitle":"玩机",enTitle:"Resources",type:"doc",children:[{"zh-CNTitle":"安装驱动",enTitle:"Drives",path:`/${e.value}/${t.value}/resource/drivers`,component:()=>h(Object.assign({"./docs/R1/en/resource/drivers.md":()=>i(()=>import("./drivers-e9e8d6f4.js"),["./drivers-e9e8d6f4.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/resource/drivers.md":()=>i(()=>import("./drivers-38018e4b.js"),["./drivers-38018e4b.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/drivers.md`)},{"zh-CNTitle":"升级BIOS",enTitle:"BIOS",path:`/${e.value}/${t.value}/resource/bios`,component:()=>h(Object.assign({"./docs/R1/en/resource/bios.md":()=>i(()=>import("./bios-80f909b6.js"),["./bios-80f909b6.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/resource/bios.md":()=>i(()=>import("./bios-65162603.js"),["./bios-65162603.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/bios.md`)},{"zh-CNTitle":"预装系统",enTitle:"Systems",path:`/${e.value}/${t.value}/resource/default-system`,component:()=>h(Object.assign({"./docs/R1/en/resource/default-system.md":()=>i(()=>import("./default-system-6d26fae1.js"),["./default-system-6d26fae1.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/resource/default-system.md":()=>i(()=>import("./default-system-47debdeb.js"),["./default-system-47debdeb.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/default-system.md`)},{"zh-CNTitle":"Docker容器",enTitle:"Docker",path:`/${e.value}/${t.value}/resource/Docker`,component:()=>h(Object.assign({"./docs/R1/zh-CN/resource/Docker.md":()=>i(()=>import("./Docker-505d2eb3.js"),["./Docker-505d2eb3.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/Docker.md`)},{"zh-CNTitle":"镜像资源",enTitle:"Othe Sources",path:`/${e.value}/${t.value}/resource/other-sources`,component:()=>h(Object.assign({"./docs/R1/en/resource/other-sources.md":()=>i(()=>import("./other-sources-c746a331.js"),["./other-sources-c746a331.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/resource/other-sources.md":()=>i(()=>import("./other-sources-88ad732d.js"),["./other-sources-88ad732d.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/other-sources.md`)}]},{"zh-CNTitle":"FAQs",enTitle:"FAQs",type:"doc",children:[{"zh-CNTitle":"新手指南",enTitle:"Beginners",path:`/${e.value}/${t.value}/FAQs/new-to-R1`,component:()=>h(Object.assign({"./docs/R1/zh-CN/FAQs/new-to-R1.md":()=>i(()=>import("./new-to-R1-3c039c0e.js"),["./new-to-R1-3c039c0e.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/FAQs/new-to-R1.md`)},{"zh-CNTitle":"搞机问答",enTitle:"BIOS Settings",path:`/${e.value}/${t.value}/FAQs/fuck-the-R1`,component:()=>h(Object.assign({"./docs/R1/zh-CN/FAQs/fuck-the-R1.md":()=>i(()=>import("./fuck-the-R1-25cfe9bd.js"),["./fuck-the-R1-25cfe9bd.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/FAQs/fuck-the-R1.md`)},{"zh-CNTitle":"刷机教程",enTitle:"OS Tutorial",path:`/${e.value}/${t.value}/FAQs/installations`,component:()=>h(Object.assign({"./docs/R1/zh-CN/FAQs/installations.md":()=>i(()=>import("./installations-bf6565fc.js"),["./installations-bf6565fc.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/FAQs/installations.md`)},{"zh-CNTitle":"PVE下升级OpenWRT",enTitle:"OpenWRT",path:`/${e.value}/${t.value}/FAQs/reinstall-openwrt-in-pve`,component:()=>h(Object.assign({"./docs/R1/zh-CN/FAQs/reinstall-openwrt-in-pve.md":()=>i(()=>import("./reinstall-openwrt-in-pve-16a1d0f0.js"),["./reinstall-openwrt-in-pve-16a1d0f0.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/FAQs/reinstall-openwrt-in-pve.md`)}]}]}const te=Fe();function Ve(e){const t=[];e.forEach((l,n)=>{const{top:r}=l.getBoundingClientRect();t[n]=r});const o=Me(t);return o>=0?o:e.length-1}function Me(e){let t=-1,o=1/0;for(let l=0;l<e.length;l++)e[l]>0&&e[l]<o&&(o=e[l],t=l);return t}const Be='<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 2750 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="WordMark" x="-0" y="0" width="2750" height="500" style="fill:none;"/><g id="WordMark1" serif:id="WordMark"><g><path d="M1654.27,120.077c-25.693,-17.165 -55.899,-26.327 -86.799,-26.327c-86.237,-0 -156.25,70.013 -156.25,156.25c-0,86.237 70.013,156.25 156.25,156.25c63.489,0 120.666,-38.417 144.661,-97.198l-54.929,-22.422c-14.884,36.461 -50.35,60.291 -89.732,60.291c-53.492,-0 -96.921,-43.429 -96.921,-96.921c-0,-53.492 43.429,-96.921 96.921,-96.921c19.167,0 37.904,5.683 53.841,16.331l32.958,-49.333Z"/><path d="M648.964,93.75c86.237,-0 156.25,70.013 156.25,156.25c0,86.237 -70.013,156.25 -156.25,156.25c-86.237,0 -156.25,-70.013 -156.25,-156.25c0,-86.237 70.013,-156.25 156.25,-156.25Zm0,62.5c51.742,-0 93.75,42.008 93.75,93.75c0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c0,-51.742 42.008,-93.75 93.75,-93.75Z"/><path d="M994.797,93.75c86.237,-0 156.25,70.013 156.25,156.25c0,86.237 -70.013,156.25 -156.25,156.25c-86.236,0 -156.25,-70.013 -156.25,-156.25c0,-86.237 70.014,-156.25 156.25,-156.25Zm0,62.5c51.742,-0 93.75,42.008 93.75,93.75c0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c0,-51.742 42.008,-93.75 93.75,-93.75Z"/><path d="M1893.38,93.75c86.237,-0 156.25,70.013 156.25,156.25c-0,86.237 -70.013,156.25 -156.25,156.25c-86.237,0 -156.25,-70.013 -156.25,-156.25c-0,-86.237 70.013,-156.25 156.25,-156.25Zm-0,62.5c51.742,-0 93.75,42.008 93.75,93.75c-0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c-0,-51.742 42.008,-93.75 93.75,-93.75Z"/><rect x="1192.71" y="93.75" width="58.333" height="312.5"/><use xlink:href="#_Image1" x="2099.63" y="93.75" width="252px" height="313px"/><g><rect x="2400.67" y="93.75" width="58.333" height="312.5"/><path d="M2617.34,152.083l0,-58.333l-216.666,0l-0,58.333l216.666,0Z"/><path d="M2617.34,406.25l0,-58.333l-216.666,-0l-0,58.333l216.666,-0Z"/><path d="M2592.34,279.167l0,-58.334l-191.666,0l-0,58.334l191.666,-0Z"/></g><rect x="132.662" y="181.25" width="58.333" height="225"/><g><rect x="237.636" y="93.75" width="58.333" height="312.5"/><path d="M421.168,93.75l-125.198,156.25l125.198,156.25l74.802,0l-125.199,-156.25l125.199,-156.25l-74.802,-0Z"/></g><rect x="132.662" y="93.75" width="58.333" height="58.333" style="fill:#007bfc;"/><path d="M1392.71,406.25l0,-58.333l-200,-0l0,58.333l200,-0Z"/></g></g><defs><image id="_Image1" width="252px" height="313px" xlink:href="data:image/png;base64,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"/></defs></svg>',Ke={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://yun.swimly.cn/source/ikoolcore/iKoolCore.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["swimly","KoolCore"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "简体中文","value": "zh-CN"}]',DOC_NAVIGATIONS:'[{"name": "R1","value": "R1"}, {"name": "R2","value": "R2","disabled":"false"}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0},{DOC_LANGUAGE:Xe,DOC_NAVIGATIONS:Ye,DOC_ROUTER_MODE:We}=Ke,Qe=De({setup(){const e=Re(),t=Ae(),o=p(null),l=p(We==="hash"),n=p(null),r=p(!1),u=p(Be),f=p(null),E=p(null),a=p([]),v=U(()=>a.value.length),D=p(0),A=p([]),L=p(null),d=p(!1),C=p(!1),b=p(JSON.parse(Xe)),se=p(JSON.parse(Ye)),[,re,le]=e.fullPath.split("/"),G=p(re),N=p(le),ie=U(()=>s=>e.fullPath.includes(s)),z=U(()=>te.filter(s=>s.nav.value===G.value&&s.lang.value===N.value)[0].children),ce=U(()=>b.value.filter(s=>s.value===N.value)[0].content),g=()=>{document.querySelector("#gitalk").innerHTML="";const{DOC_GITHUB_CLIENTID:s,DOC_GIHUB_CLIENT_SECRET:c,DOC_GITHUB_REPO:O,DOC_GITHUB_OWNER:w,DOC_GITHUB_ADMIN:I,DOC_GITALK:k}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://yun.swimly.cn/source/ikoolcore/iKoolCore.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["swimly","KoolCore"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "简体中文","value": "zh-CN"}]',DOC_NAVIGATIONS:'[{"name": "R1","value": "R1"}, {"name": "R2","value": "R2","disabled":"false"}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0};k==="true"&&(f.value=new Ee({clientID:s,clientSecret:c,repo:O,owner:w,admin:JSON.parse(I),id:location.pathname,language:N.value,distractionFreeMode:!1}),f.value.render("gitalk"))},K=s=>{var c;a.value.forEach(O=>{O.classList.remove("active")}),(c=a.value[s])==null||c.classList.add("active")},ae=()=>{const s=document.querySelector(".page-content"),c={attributes:!0,childList:!0,subtree:!0};new MutationObserver(()=>{a.value=document.querySelectorAll(".table-of-contents li"),A.value=document.querySelectorAll(".markdown-body h2, .markdown-body h3"),d.value=s.offsetWidth<800}).observe(s,c)},x=()=>{o.value.routerList=z.value},ue=s=>{if(s.disabled&&s.disabled==="true"){Y.info("开发中！");return}const c=e.fullPath,[,O,w]=c.split("/"),{value:I}=s;if(O===I)return;const k=c.split("/");k[1]=I,G.value=I;let F=k.join("/");t.getRoutes().map(fe=>fe.path).includes(F)||(F=`/${s.value}`),t.push(F),g(),C.value=!1},de=()=>{o.value.onchange=({detail:s})=>{D.value=0,g(),e.path!==s&&(r.value=!1,t.push(s),window.scrollTo(0,0))}},pe=s=>{N.value=s.value},he=s=>{if(!v.value)return;const c=s>68;L.value.style.position="fixed",L.value.style.top=c?"0px":"68px"},ve=()=>{const s=Ve(A.value);D.value=s,K(s),_e(s)},me=()=>{let s=0,c=!1;function O(w){a.value.length<1||(he(w),ve())}window.addEventListener("scroll",w=>{s=window.scrollY,c||window.requestAnimationFrame(()=>{O(s),c=!1}),c=!0})},Oe=()=>{const{hash:s}=e;A.value.forEach(c=>{s.includes(c.id)&&c.offsetTop+c.parentNode.getBoundingClientRect().top})},_e=s=>{a.value[s].offsetTop};return X(N,s=>{const c=e.fullPath.split("/");c[2]=s;const O=c.join("/");t.push(O),x();const w=b.value.filter(I=>I.value===s)[0].content;Y.info(`当前语言【${w}】`),g(),C.value=!1}),X(z,s=>{x()}),Ce(()=>{a.value=document.querySelectorAll(".table-of-contents li"),L.value=document.querySelector(".table-of-contents"),A.value=document.querySelectorAll(".markdown-body h2, .markdown-body h3"),x(),de(),g(),ae(),K(0),Oe(),document.body.offsetWidth>800&&me()}),Te(()=>{L.value=document.querySelector(".table-of-contents")}),{aside:o,header:n,menuList:z,languages:b,visible:C,navigations:se,cnav:G,clang:N,titles:A,logo:u,gitalk:E,isActive:ie,currentLanguage:ce,isHash:l,isPhone:d,hasToc:v,onNavClick:ue,onLanguageChange:pe}}});const oe=(e,t)=>{const o=e.__vccOpts||e;for(const[l,n]of t)o[l]=n;return o},Ze={ref:"header",slot:"header","disabled-icon":"","header-menu":"[]"},Je=["innerHTML"],qe={key:1,slot:"right"},$e={class:"mobile-menu"},et=["onClick"],tt=R("ldesign-theme",null,null,-1),ot={ref:"aside"},nt={id:"gitalk",ref:"gitalk"},st=R("ldesign-backtop",null,null,-1);function rt(e,t,o,l,n,r){const u=we,f=Ne,E=Ie,a=ye,v=ge,D=be,A=Le,L=J("router-view");return _(),y("ldesign-page",null,[R("ldesign-header",Ze,[T(u,{slot:"logo"},{default:m(()=>[R("div",{class:"logo",innerHTML:e.logo},null,8,Je)]),_:1}),e.isPhone?W("",!0):(_(),H(u,{key:0,align:"center",size:"16px",style:{"margin-right":"16px"}},{default:m(()=>[T(a,{"min-column-width":"100px",options:e.languages,onClick:e.onLanguageChange},{default:m(()=>[T(E,{variant:"text"},{suffix:m(()=>[T(f,{name:"chevron-down"})]),default:m(()=>[j(P(e.currentLanguage)+" ",1)]),_:1})]),_:1},8,["options","onClick"]),(_(!0),y(V,null,M(e.navigations,(d,C)=>(_(),H(E,{key:C,variant:e.isActive(d.value)?"base":"text",onClick:b=>e.onNavClick(d)},{default:m(()=>[j(P(d.name),1)]),_:2},1032,["variant","onClick"]))),128))]),_:1})),e.isPhone?(_(),y("div",qe,[T(E,{variant:"text",shape:"square",onClick:t[0]||(t[0]=d=>e.visible=!e.visible)},{icon:m(()=>[T(f,{name:"bulletpoint"})]),_:1}),T(A,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=d=>e.visible=d)},{footer:m(()=>[tt]),default:m(()=>[T(D,{slot:"header",modelValue:e.clang,"onUpdate:modelValue":t[1]||(t[1]=d=>e.clang=d),variant:"default-filled"},{default:m(()=>[(_(!0),y(V,null,M(e.languages,(d,C)=>(_(),H(v,{key:C,value:d.value},{default:m(()=>[j(P(d.content),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),R("ul",$e,[(_(!0),y(V,null,M(e.navigations,(d,C)=>(_(),y("li",{key:C,class:Q({active:d.value===e.cnav})},[R("p",{onClick:b=>e.onNavClick(d)},P(d.name),9,et)],2))),128))])]),_:1},8,["visible"])])):W("",!0)],512),R("ldesign-aside",ot,null,512),R("div",{class:Q(["page-content",{"has-toc":e.hasToc}])},[T(L,{style:{visibility:"visible"}}),R("div",nt,null,512)],2),st])}const lt=oe(Qe,[["render",rt]]),{DOC_LANGUAGE:it,DOC_NAVIGATIONS:ct}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://yun.swimly.cn/source/ikoolcore/iKoolCore.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["swimly","KoolCore"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "简体中文","value": "zh-CN"}]',DOC_NAVIGATIONS:'[{"name": "R1","value": "R1"}, {"name": "R2","value": "R2","disabled":"false"}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0},at=JSON.parse(ct)[0],ut=JSON.parse(it);function ne(e,t){let o=[],l;return e.forEach(n=>{const r=n.type||t;let{children:u}=n;n.type==="component"&&(u=n.children.sort((f,E)=>{const a=f.name.toUpperCase(),v=E.name.toUpperCase();return a<v?-1:a>v?1:0})),u?o=o.concat(ne(u,r)):(l={...n},o.push(l))}),o}function dt(){const e=[];return te.forEach(t=>{e.push({path:`/${t.nav.value}`,component:lt,redirect:t.lang.value===ut[0].value?`${t.children[0].children[0].path}`:"",children:ne(t.children)})}),e}const pt=[{path:"/",redirect:`/${at.value}`},{path:"/:w+",redirect:"/404"}].concat(dt()),B=ke({routes:pt,history:Ue("./")});B.beforeEach((e,t,o)=>{q.start(),o()});B.afterEach(()=>{q.done()});const ht={};function vt(e,t){const o=J("router-view");return _(),H(o)}const mt=oe(ht,[["render",vt]]),Ot=Pe(),S=He(mt);S.config.performance=!0;S.use(B);S.use(Ot);S.mount("#app");