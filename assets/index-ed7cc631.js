import{d as De,r as p,c as k,w as X,o as Ce,a as Re,u as Te,G as Ee,M as Y,b as we,e as f,f as y,g as T,h as R,i as v,j as H,k as W,n as Z,S as Ae,B as Ie,D as Le,l as M,t as P,F,m as V,I as ge,p as ye,R as be,q as Q,s as Ne,v as Ue,x as ke,N as q,y as Pe,z as He}from"./vendor-a7b6b0c4.js";import"./__commonjsHelpers__-725317a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const Ge="modulepreload",Se=function(e,t){return new URL(e,t).href},J={},a=function(t,o,l){if(!o||o.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(o.map(r=>{if(r=Se(r,l),r in J)return;J[r]=!0;const d=r.endsWith(".css"),_=d?'[rel="stylesheet"]':"";if(!!l)for(let h=n.length-1;h>=0;h--){const D=n[h];if(D.href===r&&(!d||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${_}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":Ge,d||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),d)return new Promise((h,D)=>{c.addEventListener("load",h),c.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},O=(e,t)=>{const o=e[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((l,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})},{DOC_LANGUAGE:xe,DOC_NAVIGATIONS:ze}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://yun.swimly.cn/source/ikoolcore/iKoolCore.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["swimly","KoolCore"]',DOC_LANGUAGE:'[{"content": "简体中文","value": "zh-CN"},{"content": "English","value": "en"}]',DOC_NAVIGATIONS:'[{"name": "R1","value": "R1"}, {"name": "R2","value": "R2","disabled":"false"}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0};function je(){const e=[],t=JSON.parse(ze),o=JSON.parse(xe);return t.forEach(l=>{o.forEach(n=>{const r=$(ee(Me(l,n),{nav:l,lang:n}),n);e.push({nav:l,lang:n,children:r})})}),e}function $(e,t){return e.forEach(o=>{o.title=o[`${t.value}Title`],o.children&&$(o.children,t)}),e}function ee(e,t){return e.forEach((o,l)=>{var r;const n=`${t.nav.value}/${t.lang.value}`;(r=o.disabled)!=null&&r.includes(n)&&e.splice(l,1),o.children&&ee(o.children,t)}),e}function Me(e,t){return[{"zh-CNTitle":"项目",enTitle:"Describe",type:"doc",children:[{"zh-CNTitle":"了解项目",enTitle:"Learn about the R1 project",disabled:["R2/zh-CN","R2/en"],path:`/${e.value}/${t.value}/project/know-about-the-project`,component:()=>O(Object.assign({"./docs/R1/en/project/know-about-the-project.md":()=>a(()=>import("./know-about-the-project-113917ff.js"),["./know-about-the-project-113917ff.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/project/know-about-the-project.md":()=>a(()=>import("./know-about-the-project-8b6b2cb5.js"),["./know-about-the-project-8b6b2cb5.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/project/know-about-the-project.md`)},{"zh-CNTitle":"产品定位",enTitle:"Positioning",path:`/${e.value}/${t.value}/project/Positioning`,component:()=>O(Object.assign({"./docs/R1/en/project/Positioning.md":()=>a(()=>import("./Positioning-bbc58e85.js"),["./Positioning-bbc58e85.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/project/Positioning.md":()=>a(()=>import("./Positioning-bccbf8a8.js"),["./Positioning-bccbf8a8.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/project/Positioning.md`)}]},{"zh-CNTitle":"设计",enTitle:"Design",type:"doc",children:[{"zh-CNTitle":"硬件设计",enTitle:"hardware design",path:`/${e.value}/${t.value}/design/hardware`,component:()=>O(Object.assign({"./docs/R1/en/design/hardware.md":()=>a(()=>import("./hardware-de261331.js"),["./hardware-de261331.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/design/hardware.md":()=>a(()=>import("./hardware-7dd8ecc9.js"),["./hardware-7dd8ecc9.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/design/hardware.md`)},{"zh-CNTitle":"结构设计",enTitle:"structual design",path:`/${e.value}/${t.value}/design/stuctural`,component:()=>O(Object.assign({"./docs/R1/en/design/structural-design.md":()=>a(()=>import("./structural-design-3278e912.js"),["./structural-design-3278e912.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/design/structural-design.md":()=>a(()=>import("./structural-design-5dd61a81.js"),["./structural-design-5dd61a81.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/design/structural-design.md`)}]},{"zh-CNTitle":"购买",enTitle:"Buying",type:"doc",children:[{"zh-CNTitle":"售价",enTitle:"Configuration and Price",path:`/${e.value}/${t.value}/sale/platform`,component:()=>O(Object.assign({"./docs/R1/zh-CN/sale/platform.md":()=>a(()=>import("./platform-a9d27e34.js"),["./platform-a9d27e34.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/sale/platform.md`)},{"zh-CNTitle":"升级套件",enTitle:"parts for iKOOLCORE R1",path:`/${e.value}/${t.value}/sale/part-prices`,component:()=>O(Object.assign({"./docs/R1/zh-CN/sale/part-prices.md":()=>a(()=>import("./part-prices-3c12fb8b.js"),["./part-prices-3c12fb8b.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/sale/part-prices.md`)}]},{"zh-CNTitle":"搞机资源",enTitle:"Resource for iKOOLCORE R1",type:"doc",children:[{"zh-CNTitle":"驱动",enTitle:"Service Content",path:`/${e.value}/${t.value}/resource/drivers`,component:()=>O(Object.assign({"./docs/R1/en/resource/drivers.md":()=>a(()=>import("./drivers-94394032.js"),["./drivers-94394032.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/resource/drivers.md":()=>a(()=>import("./drivers-e5153400.js"),["./drivers-e5153400.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/drivers.md`)},{"zh-CNTitle":"BIOS",enTitle:"BIOS",path:`/${e.value}/${t.value}/resource/bios`,component:()=>O(Object.assign({"./docs/R1/en/resource/bios.md":()=>a(()=>import("./bios-80f909b6.js"),["./bios-80f909b6.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/resource/bios.md":()=>a(()=>import("./bios-6c63a82a.js"),["./bios-6c63a82a.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/bios.md`)},{"zh-CNTitle":"预装系统",enTitle:"default systems",path:`/${e.value}/${t.value}/resource/default-system`,component:()=>O(Object.assign({"./docs/R1/en/resource/default-system.md":()=>a(()=>import("./default-system-6d26fae1.js"),["./default-system-6d26fae1.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/resource/default-system.md":()=>a(()=>import("./default-system-3d1e209b.js"),["./default-system-3d1e209b.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/default-system.md`)},{"zh-CNTitle":"镜像资源",enTitle:"Other-sources",path:`/${e.value}/${t.value}/resource/other-sources`,component:()=>O(Object.assign({"./docs/R1/en/resource/other-sources.md":()=>a(()=>import("./other-sources-c746a331.js"),["./other-sources-c746a331.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url),"./docs/R1/zh-CN/resource/other-sources.md":()=>a(()=>import("./other-sources-2759f4f4.js"),["./other-sources-2759f4f4.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/other-sources.md`)}]},{"zh-CNTitle":"FAQs",enTitle:"FAQs",type:"doc",children:[{"zh-CNTitle":"新手指南",enTitle:"Jinshui Tips",path:`/${e.value}/${t.value}/FAQs/new-to-R1`,component:()=>O(Object.assign({"./docs/R1/zh-CN/FAQs/new-to-R1.md":()=>a(()=>import("./new-to-R1-181fd2db.js"),["./new-to-R1-181fd2db.js","./vendor-a7b6b0c4.js","./__commonjsHelpers__-725317a4.js","./vendor-592f52cf.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/FAQs/new-to-R1.md`)}]}]}const te=je();function Fe(e){const t=[];e.forEach((l,n)=>{const{top:r}=l.getBoundingClientRect();t[n]=r});const o=Ve(t);return o>=0?o:e.length-1}function Ve(e){let t=-1,o=1/0;for(let l=0;l<e.length;l++)e[l]>0&&e[l]<o&&(o=e[l],t=l);return t}const Be='<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 2750 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="WordMark" x="-0" y="0" width="2750" height="500" style="fill:none;"/><g id="WordMark1" serif:id="WordMark"><g><path d="M1654.27,120.077c-25.693,-17.165 -55.899,-26.327 -86.799,-26.327c-86.237,-0 -156.25,70.013 -156.25,156.25c-0,86.237 70.013,156.25 156.25,156.25c63.489,0 120.666,-38.417 144.661,-97.198l-54.929,-22.422c-14.884,36.461 -50.35,60.291 -89.732,60.291c-53.492,-0 -96.921,-43.429 -96.921,-96.921c-0,-53.492 43.429,-96.921 96.921,-96.921c19.167,0 37.904,5.683 53.841,16.331l32.958,-49.333Z"/><path d="M648.964,93.75c86.237,-0 156.25,70.013 156.25,156.25c0,86.237 -70.013,156.25 -156.25,156.25c-86.237,0 -156.25,-70.013 -156.25,-156.25c0,-86.237 70.013,-156.25 156.25,-156.25Zm0,62.5c51.742,-0 93.75,42.008 93.75,93.75c0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c0,-51.742 42.008,-93.75 93.75,-93.75Z"/><path d="M994.797,93.75c86.237,-0 156.25,70.013 156.25,156.25c0,86.237 -70.013,156.25 -156.25,156.25c-86.236,0 -156.25,-70.013 -156.25,-156.25c0,-86.237 70.014,-156.25 156.25,-156.25Zm0,62.5c51.742,-0 93.75,42.008 93.75,93.75c0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c0,-51.742 42.008,-93.75 93.75,-93.75Z"/><path d="M1893.38,93.75c86.237,-0 156.25,70.013 156.25,156.25c-0,86.237 -70.013,156.25 -156.25,156.25c-86.237,0 -156.25,-70.013 -156.25,-156.25c-0,-86.237 70.013,-156.25 156.25,-156.25Zm-0,62.5c51.742,-0 93.75,42.008 93.75,93.75c-0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c-0,-51.742 42.008,-93.75 93.75,-93.75Z"/><rect x="1192.71" y="93.75" width="58.333" height="312.5"/><use xlink:href="#_Image1" x="2099.63" y="93.75" width="252px" height="313px"/><g><rect x="2400.67" y="93.75" width="58.333" height="312.5"/><path d="M2617.34,152.083l0,-58.333l-216.666,0l-0,58.333l216.666,0Z"/><path d="M2617.34,406.25l0,-58.333l-216.666,-0l-0,58.333l216.666,-0Z"/><path d="M2592.34,279.167l0,-58.334l-191.666,0l-0,58.334l191.666,-0Z"/></g><rect x="132.662" y="181.25" width="58.333" height="225"/><g><rect x="237.636" y="93.75" width="58.333" height="312.5"/><path d="M421.168,93.75l-125.198,156.25l125.198,156.25l74.802,0l-125.199,-156.25l125.199,-156.25l-74.802,-0Z"/></g><rect x="132.662" y="93.75" width="58.333" height="58.333" style="fill:#007bfc;"/><path d="M1392.71,406.25l0,-58.333l-200,-0l0,58.333l200,-0Z"/></g></g><defs><image id="_Image1" width="252px" height="313px" xlink:href="data:image/png;base64,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"/></defs></svg>',Ke={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://yun.swimly.cn/source/ikoolcore/iKoolCore.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["swimly","KoolCore"]',DOC_LANGUAGE:'[{"content": "简体中文","value": "zh-CN"},{"content": "English","value": "en"}]',DOC_NAVIGATIONS:'[{"name": "R1","value": "R1"}, {"name": "R2","value": "R2","disabled":"false"}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0},{DOC_LANGUAGE:Xe,DOC_NAVIGATIONS:Ye,DOC_ROUTER_MODE:We}=Ke,Ze=De({setup(){const e=Te(),t=we(),o=p(null),l=p(We==="hash"),n=p(null),r=p(!1),d=p(Be),_=p(null),E=p(null),c=p([]),h=k(()=>c.value.length),D=p(0),w=p([]),L=p(null),u=p(!1),C=p(!1),b=p(JSON.parse(Xe)),se=p(JSON.parse(Ye)),[,re,le]=e.fullPath.split("/"),S=p(re),g=p(le),ie=k(()=>s=>e.fullPath.includes(s)),x=k(()=>te.filter(s=>s.nav.value===S.value&&s.lang.value===g.value)[0].children),ce=k(()=>b.value.filter(s=>s.value===g.value)[0].content),N=()=>{document.querySelector("#gitalk").innerHTML="";const{DOC_GITHUB_CLIENTID:s,DOC_GIHUB_CLIENT_SECRET:i,DOC_GITHUB_REPO:m,DOC_GITHUB_OWNER:A,DOC_GITHUB_ADMIN:I,DOC_GITALK:U}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://yun.swimly.cn/source/ikoolcore/iKoolCore.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["swimly","KoolCore"]',DOC_LANGUAGE:'[{"content": "简体中文","value": "zh-CN"},{"content": "English","value": "en"}]',DOC_NAVIGATIONS:'[{"name": "R1","value": "R1"}, {"name": "R2","value": "R2","disabled":"false"}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0};U==="true"&&(_.value=new Ee({clientID:s,clientSecret:i,repo:m,owner:A,admin:JSON.parse(I),id:location.pathname,language:g.value,distractionFreeMode:!1}),_.value.render("gitalk"))},K=s=>{var i;c.value.forEach(m=>{m.classList.remove("active")}),(i=c.value[s])==null||i.classList.add("active")},ae=()=>{const s=document.querySelector(".page-content"),i={attributes:!0,childList:!0,subtree:!0};new MutationObserver(()=>{c.value=document.querySelectorAll(".table-of-contents li"),w.value=document.querySelectorAll(".markdown-body h2, .markdown-body h3"),u.value=s.offsetWidth<800}).observe(s,i)},z=()=>{o.value.routerList=x.value},de=s=>{if(s.disabled&&s.disabled==="true"){Y.info("开发中！");return}const i=e.fullPath,[,m,A]=i.split("/"),{value:I}=s;if(m===I)return;const U=i.split("/");U[1]=I,S.value=I;let j=U.join("/");t.getRoutes().map(_e=>_e.path).includes(j)||(j=`/${s.value}`),t.push(j),N(),C.value=!1},ue=()=>{o.value.onchange=({detail:s})=>{D.value=0,N(),e.path!==s&&(r.value=!1,t.push(s),window.scrollTo(0,0))}},pe=s=>{g.value=s.value},he=s=>{if(!h.value)return;const i=s>68;L.value.style.position="fixed",L.value.style.top=i?"0px":"68px"},ve=()=>{const s=Fe(w.value);D.value=s,K(s),fe(s)},Oe=()=>{let s=0,i=!1;function m(A){c.value.length<1||(he(A),ve())}window.addEventListener("scroll",A=>{s=window.scrollY,i||window.requestAnimationFrame(()=>{m(s),i=!1}),i=!0})},me=()=>{const{hash:s}=e;w.value.forEach(i=>{s.includes(i.id)&&i.offsetTop+i.parentNode.getBoundingClientRect().top})},fe=s=>{c.value[s].offsetTop};return X(g,s=>{const i=e.fullPath.split("/");i[2]=s;const m=i.join("/");t.push(m),z();const A=b.value.filter(I=>I.value===s)[0].content;Y.info(`当前语言【${A}】`),N(),C.value=!1}),X(x,s=>{z()}),Ce(()=>{c.value=document.querySelectorAll(".table-of-contents li"),L.value=document.querySelector(".table-of-contents"),w.value=document.querySelectorAll(".markdown-body h2, .markdown-body h3"),z(),ue(),N(),ae(),K(0),me(),document.body.offsetWidth>800&&Oe()}),Re(()=>{L.value=document.querySelector(".table-of-contents")}),{aside:o,header:n,menuList:x,languages:b,visible:C,navigations:se,cnav:S,clang:g,titles:w,logo:d,gitalk:E,isActive:ie,currentLanguage:ce,isHash:l,isPhone:u,hasToc:h,onNavClick:de,onLanguageChange:pe}}});const oe=(e,t)=>{const o=e.__vccOpts||e;for(const[l,n]of t)o[l]=n;return o},Je={ref:"header",slot:"header","disabled-icon":"","header-menu":"[]"},Qe=["innerHTML"],qe={key:1,slot:"right"},$e={class:"mobile-menu"},et=["onClick"],tt=T("ldesign-theme",null,null,-1),ot={ref:"aside"},nt={id:"gitalk",ref:"gitalk"},st=T("ldesign-backtop",null,null,-1);function rt(e,t,o,l,n,r){const d=Ae,_=ge,E=Ie,c=ye,h=Ne,D=be,w=Le,L=Q("router-view");return f(),y("ldesign-page",null,[T("ldesign-header",Je,[R(d,{slot:"logo"},{default:v(()=>[T("div",{class:"logo",innerHTML:e.logo},null,8,Qe)]),_:1}),e.isPhone?W("",!0):(f(),H(d,{key:0,align:"center",size:"16px",style:{"margin-right":"16px"}},{default:v(()=>[R(c,{"min-column-width":"100px",options:e.languages,onClick:e.onLanguageChange},{default:v(()=>[R(E,{variant:"text"},{suffix:v(()=>[R(_,{name:"chevron-down"})]),default:v(()=>[M(P(e.currentLanguage)+" ",1)]),_:1})]),_:1},8,["options","onClick"]),(f(!0),y(F,null,V(e.navigations,(u,C)=>(f(),H(E,{key:C,variant:e.isActive(u.value)?"base":"text",onClick:b=>e.onNavClick(u)},{default:v(()=>[M(P(u.name),1)]),_:2},1032,["variant","onClick"]))),128))]),_:1})),e.isPhone?(f(),y("div",qe,[R(E,{variant:"text",shape:"square",onClick:t[0]||(t[0]=u=>e.visible=!e.visible)},{icon:v(()=>[R(_,{name:"bulletpoint"})]),_:1}),R(w,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=u=>e.visible=u)},{footer:v(()=>[tt]),default:v(()=>[R(D,{slot:"header",modelValue:e.clang,"onUpdate:modelValue":t[1]||(t[1]=u=>e.clang=u),variant:"default-filled"},{default:v(()=>[(f(!0),y(F,null,V(e.languages,(u,C)=>(f(),H(h,{key:C,value:u.value},{default:v(()=>[M(P(u.content),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),T("ul",$e,[(f(!0),y(F,null,V(e.navigations,(u,C)=>(f(),y("li",{key:C,class:Z({active:u.value===e.cnav})},[T("p",{onClick:b=>e.onNavClick(u)},P(u.name),9,et)],2))),128))])]),_:1},8,["visible"])])):W("",!0)],512),T("ldesign-aside",ot,null,512),T("div",{class:Z(["page-content",{"has-toc":e.hasToc}])},[R(L,{style:{visibility:"visible"}}),T("div",nt,null,512)],2),st])}const lt=oe(Ze,[["render",rt]]),{DOC_LANGUAGE:it,DOC_NAVIGATIONS:ct}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://yun.swimly.cn/source/ikoolcore/iKoolCore.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["swimly","KoolCore"]',DOC_LANGUAGE:'[{"content": "简体中文","value": "zh-CN"},{"content": "English","value": "en"}]',DOC_NAVIGATIONS:'[{"name": "R1","value": "R1"}, {"name": "R2","value": "R2","disabled":"false"}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0},at=JSON.parse(ct)[0],dt=JSON.parse(it);function ne(e,t){let o=[],l;return e.forEach(n=>{const r=n.type||t;let{children:d}=n;n.type==="component"&&(d=n.children.sort((_,E)=>{const c=_.name.toUpperCase(),h=E.name.toUpperCase();return c<h?-1:c>h?1:0})),d?o=o.concat(ne(d,r)):(l={...n},o.push(l))}),o}function ut(){const e=[];return te.forEach(t=>{e.push({path:`/${t.nav.value}`,component:lt,redirect:t.lang.value===dt[0].value?`${t.children[0].children[0].path}`:"",children:ne(t.children)})}),e}const pt=[{path:"/",redirect:`/${at.value}`},{path:"/:w+",redirect:"/404"}].concat(ut()),B=Ue({routes:pt,history:ke("./")});B.beforeEach((e,t,o)=>{q.start(),o()});B.afterEach(()=>{q.done()});const ht={};function vt(e,t){const o=Q("router-view");return f(),H(o)}const Ot=oe(ht,[["render",vt]]),mt=Pe(),G=He(Ot);G.config.performance=!0;G.use(B);G.use(mt);G.mount("#app");
