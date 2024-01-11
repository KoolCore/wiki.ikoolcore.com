import{_ as o,d as Re,u as De,a as Ee,r as a,c as z,w as j,o as Ae,b as Te,G as fe,M as X,e as Z,f as O,g as P,h as D,i as R,j as m,k as y,l as G,t as V,F as M,m as x,n as Y,p as W,S as Ie,I as Ce,B as Le,D as ge,R as Pe,q as we,s as He,v as be,x as Ne,N as J,y as ze,z as Ve}from"./vendor-a79c0d81.js";import"./__commonjsHelpers__-725317a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();const h=(e,t)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((n,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})},{DOC_LANGUAGE:ye,DOC_NAVIGATIONS:Ue}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/iKOOLCORE.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["iKOOLCORE"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "简体中文","value": "zh-CN"},{"content": "繁體中文","value": "zh-HK"}]',DOC_NAVIGATIONS:'[{"name": "R2","value": "R2","disabled":"false","order": 1},{"name": "R1","value": "R1","disabled":"false","order": 2}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function Se(){const e=[],t=JSON.parse(Ue),r=JSON.parse(ye);return t.forEach(n=>{r.forEach(i=>{const l=q($(ke(n,i),{nav:n,lang:i}),i);e.push({nav:n,lang:i,children:l})})}),e}function q(e,t){return e.forEach(r=>{r.title=r[`${t.value}Title`],r.children&&q(r.children,t)}),e}function $(e,t){return e.forEach((r,n)=>{var l;const i=`${t.nav.value}/${t.lang.value}`;(l=r.disabled)!=null&&l.includes(i)&&e.splice(n,1),r.children&&$(r.children,t)}),e}function ke(e,t){return[{"zh-CNTitle":"设计",enTitle:"Design","zh-HKTitle":"設計",type:"doc",children:[{"zh-CNTitle":"硬件设计",enTitle:"Hardware","zh-HKTitle":"硬件設計",path:`/${e.value}/${t.value}/design/hardware`,component:()=>h(Object.assign({"./docs/R1/en/design/hardware.md":()=>o(()=>import("./hardware-52bc4436.js"),["./hardware-52bc4436.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-CN/design/hardware.md":()=>o(()=>import("./hardware-ccd65d30.js"),["./hardware-ccd65d30.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-HK/design/hardware.md":()=>o(()=>import("./hardware-ebfa37fa.js"),["./hardware-ebfa37fa.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/en/design/hardware.md":()=>o(()=>import("./hardware-b5bf4415.js"),["./hardware-b5bf4415.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-CN/design/hardware.md":()=>o(()=>import("./hardware-43199986.js"),["./hardware-43199986.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-HK/design/hardware.md":()=>o(()=>import("./hardware-d4965627.js"),["./hardware-d4965627.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/design/hardware.md`)},{"zh-CNTitle":"结构设计",enTitle:"Structual","zh-HKTitle":"結構設計",path:`/${e.value}/${t.value}/design/stuctural`,component:()=>h(Object.assign({"./docs/R1/en/design/structural-design.md":()=>o(()=>import("./structural-design-8e25056d.js"),["./structural-design-8e25056d.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-CN/design/structural-design.md":()=>o(()=>import("./structural-design-59b746f3.js"),["./structural-design-59b746f3.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-HK/design/structural-design.md":()=>o(()=>import("./structural-design-91fa6850.js"),["./structural-design-91fa6850.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/en/design/structural-design.md":()=>o(()=>import("./structural-design-64464dad.js"),["./structural-design-64464dad.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-CN/design/structural-design.md":()=>o(()=>import("./structural-design-6cb670d1.js"),["./structural-design-6cb670d1.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-HK/design/structural-design.md":()=>o(()=>import("./structural-design-83798647.js"),["./structural-design-83798647.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/design/structural-design.md`)}]},{"zh-CNTitle":"玩机",enTitle:"Drivers & BIOS","zh-HKTitle":"玩機",type:"doc",children:[{"zh-CNTitle":"安装驱动",enTitle:"Drives","zh-HKTitle":"驅動程式",path:`/${e.value}/${t.value}/resource/drivers`,component:()=>h(Object.assign({"./docs/R1/en/resource/drivers.md":()=>o(()=>import("./drivers-a94b01d9.js"),["./drivers-a94b01d9.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-CN/resource/drivers.md":()=>o(()=>import("./drivers-159e8667.js"),["./drivers-159e8667.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-HK/resource/drivers.md":()=>o(()=>import("./drivers-8749370e.js"),["./drivers-8749370e.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/en/resource/drivers.md":()=>o(()=>import("./drivers-e796d7ac.js"),["./drivers-e796d7ac.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-CN/resource/drivers.md":()=>o(()=>import("./drivers-445912d6.js"),["./drivers-445912d6.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-HK/resource/drivers.md":()=>o(()=>import("./drivers-adf0f5c1.js"),["./drivers-adf0f5c1.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/drivers.md`)},{"zh-CNTitle":"升级BIOS",enTitle:"BIOS","zh-HKTitle":"燒錄BIOS程式",path:`/${e.value}/${t.value}/resource/bios`,component:()=>h(Object.assign({"./docs/R1/en/resource/bios.md":()=>o(()=>import("./bios-5d5f89cc.js"),["./bios-5d5f89cc.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-CN/resource/bios.md":()=>o(()=>import("./bios-aaefc9c0.js"),["./bios-aaefc9c0.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-HK/resource/bios.md":()=>o(()=>import("./bios-81bd0f7c.js"),["./bios-81bd0f7c.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/en/resource/bios.md":()=>o(()=>import("./bios-d6894ddd.js"),["./bios-d6894ddd.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-CN/resource/bios.md":()=>o(()=>import("./bios-6a91163a.js"),["./bios-6a91163a.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-HK/resource/bios.md":()=>o(()=>import("./bios-9d42585d.js"),["./bios-9d42585d.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/bios.md`)},{"zh-CNTitle":"系统兼容性",enTitle:"Systems","zh-HKTitle":"系統兼容性",path:`/${e.value}/${t.value}/resource/systems`,component:()=>h(Object.assign({"./docs/R1/en/resource/systems.md":()=>o(()=>import("./systems-13892e6d.js"),["./systems-13892e6d.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-CN/resource/systems.md":()=>o(()=>import("./systems-4a2c21f8.js"),["./systems-4a2c21f8.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-HK/resource/systems.md":()=>o(()=>import("./systems-900152b6.js"),["./systems-900152b6.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/en/resource/systems.md":()=>o(()=>import("./systems-d221c4a1.js"),["./systems-d221c4a1.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-CN/resource/systems.md":()=>o(()=>import("./systems-af1ca93f.js"),["./systems-af1ca93f.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-HK/resource/systems.md":()=>o(()=>import("./systems-b994f3e0.js"),["./systems-b994f3e0.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/systems.md`)},{"zh-CNTitle":"推荐Docker",enTitle:"Docker","zh-HKTitle":"Docker實例",path:`/${e.value}/${t.value}/resource/docker`,component:()=>h(Object.assign({"./docs/R1/en/resource/docker.md":()=>o(()=>import("./docker-5704170d.js"),["./docker-5704170d.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-CN/resource/docker.md":()=>o(()=>import("./docker-96be99fe.js"),["./docker-96be99fe.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-HK/resource/docker.md":()=>o(()=>import("./docker-cc9dded2.js"),["./docker-cc9dded2.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/en/resource/docker.md":()=>o(()=>import("./docker-21b52c0e.js"),["./docker-21b52c0e.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-CN/resource/docker.md":()=>o(()=>import("./docker-8a5c07fe.js"),["./docker-8a5c07fe.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-HK/resource/docker.md":()=>o(()=>import("./docker-86e1fef4.js"),["./docker-86e1fef4.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/resource/docker.md`)}]},{"zh-CNTitle":"FAQs",enTitle:"FAQs","zh-HKTitle":"常見問題",type:"doc",children:[{"zh-CNTitle":"新手FAQs",enTitle:"Beginners","zh-HKTitle":"新手FAQs",path:`/${e.value}/${t.value}/FAQs/Beginners`,component:()=>h(Object.assign({"./docs/R1/en/FAQs/Beginners.md":()=>o(()=>import("./Beginners-a6df094a.js"),["./Beginners-a6df094a.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-CN/FAQs/Beginners.md":()=>o(()=>import("./Beginners-eacb69ed.js"),["./Beginners-eacb69ed.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-HK/FAQs/Beginners.md":()=>o(()=>import("./Beginners-3bec929c.js"),["./Beginners-3bec929c.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/en/FAQs/Beginners.md":()=>o(()=>import("./Beginners-24c2aa2c.js"),["./Beginners-24c2aa2c.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-CN/FAQs/Beginners.md":()=>o(()=>import("./Beginners-14aae2df.js"),["./Beginners-14aae2df.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-HK/FAQs/Beginners.md":()=>o(()=>import("./Beginners-1e4582b3.js"),["./Beginners-1e4582b3.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/FAQs/Beginners.md`)},{"zh-CNTitle":"玩机FAQ",enTitle:"BIOS Settings","zh-HKTitle":"自助問答",path:`/${e.value}/${t.value}/FAQs/BIOS_FAQ`,component:()=>h(Object.assign({"./docs/R1/en/FAQs/BIOS_FAQ.md":()=>o(()=>import("./BIOS_FAQ-a595ad7d.js"),["./BIOS_FAQ-a595ad7d.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-CN/FAQs/BIOS_FAQ.md":()=>o(()=>import("./BIOS_FAQ-360b9fb5.js"),["./BIOS_FAQ-360b9fb5.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-HK/FAQs/BIOS_FAQ.md":()=>o(()=>import("./BIOS_FAQ-3f76653d.js"),["./BIOS_FAQ-3f76653d.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/en/FAQs/BIOS_FAQ.md":()=>o(()=>import("./BIOS_FAQ-b40a77fc.js"),["./BIOS_FAQ-b40a77fc.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-CN/FAQs/BIOS_FAQ.md":()=>o(()=>import("./BIOS_FAQ-6d407a15.js"),["./BIOS_FAQ-6d407a15.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-HK/FAQs/BIOS_FAQ.md":()=>o(()=>import("./BIOS_FAQ-06654232.js"),["./BIOS_FAQ-06654232.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/FAQs/BIOS_FAQ.md`)},{"zh-CNTitle":"虚拟机",enTitle:"Virtual Machines","zh-HKTitle":"虛擬機VM",path:`/${e.value}/${t.value}/FAQs/VM`,component:()=>h(Object.assign({"./docs/R1/en/FAQs/VM.md":()=>o(()=>import("./VM-57950aca.js"),["./VM-57950aca.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-CN/FAQs/VM.md":()=>o(()=>import("./VM-278a208e.js"),["./VM-278a208e.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-HK/FAQs/VM.md":()=>o(()=>import("./VM-b319b8ad.js"),["./VM-b319b8ad.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/en/FAQs/VM.md":()=>o(()=>import("./VM-e3bcd7d6.js"),["./VM-e3bcd7d6.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-CN/FAQs/VM.md":()=>o(()=>import("./VM-2e670eaa.js"),["./VM-2e670eaa.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-HK/FAQs/VM.md":()=>o(()=>import("./VM-8f54410e.js"),["./VM-8f54410e.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/FAQs/VM.md`)},{"zh-CNTitle":"玩转OpenWRT",enTitle:"OPNsense Tutorial","zh-HKTitle":"OpenWRT",path:`/${e.value}/${t.value}/FAQs/os_tutorial`,component:()=>h(Object.assign({"./docs/R1/en/FAQs/os_tutorial.md":()=>o(()=>import("./os_tutorial-d3c70e82.js"),["./os_tutorial-d3c70e82.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-CN/FAQs/os_tutorial.md":()=>o(()=>import("./os_tutorial-7b8105f1.js"),["./os_tutorial-7b8105f1.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R1/zh-HK/FAQs/os_tutorial.md":()=>o(()=>import("./os_tutorial-7a391ab6.js"),["./os_tutorial-7a391ab6.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/en/FAQs/os_tutorial.md":()=>o(()=>import("./os_tutorial-7052d970.js"),["./os_tutorial-7052d970.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-CN/FAQs/os_tutorial.md":()=>o(()=>import("./os_tutorial-5c610ffc.js"),["./os_tutorial-5c610ffc.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/R2/zh-HK/FAQs/os_tutorial.md":()=>o(()=>import("./os_tutorial-37a744f0.js"),["./os_tutorial-37a744f0.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/FAQs/os_tutorial.md`)}]}]}const ee=Se();function Fe(e){const t=[];e.forEach((n,i)=>{const{top:l}=n.getBoundingClientRect();t[i]=l});const r=Ke(t);return r>=0?r:e.length-1}function Ke(e){let t=-1,r=1/0;for(let n=0;n<e.length;n++)e[n]>0&&e[n]<r&&(r=e[n],t=n);return t}const Ge='<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 2750 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="WordMark" x="-0" y="0" width="2750" height="500" style="fill:none;"/><g id="WordMark1" serif:id="WordMark"><g><path d="M1654.27,120.077c-25.693,-17.165 -55.899,-26.327 -86.799,-26.327c-86.237,-0 -156.25,70.013 -156.25,156.25c-0,86.237 70.013,156.25 156.25,156.25c63.489,0 120.666,-38.417 144.661,-97.198l-54.929,-22.422c-14.884,36.461 -50.35,60.291 -89.732,60.291c-53.492,-0 -96.921,-43.429 -96.921,-96.921c-0,-53.492 43.429,-96.921 96.921,-96.921c19.167,0 37.904,5.683 53.841,16.331l32.958,-49.333Z"/><path d="M648.964,93.75c86.237,-0 156.25,70.013 156.25,156.25c0,86.237 -70.013,156.25 -156.25,156.25c-86.237,0 -156.25,-70.013 -156.25,-156.25c0,-86.237 70.013,-156.25 156.25,-156.25Zm0,62.5c51.742,-0 93.75,42.008 93.75,93.75c0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c0,-51.742 42.008,-93.75 93.75,-93.75Z"/><path d="M994.797,93.75c86.237,-0 156.25,70.013 156.25,156.25c0,86.237 -70.013,156.25 -156.25,156.25c-86.236,0 -156.25,-70.013 -156.25,-156.25c0,-86.237 70.014,-156.25 156.25,-156.25Zm0,62.5c51.742,-0 93.75,42.008 93.75,93.75c0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c0,-51.742 42.008,-93.75 93.75,-93.75Z"/><path d="M1893.38,93.75c86.237,-0 156.25,70.013 156.25,156.25c-0,86.237 -70.013,156.25 -156.25,156.25c-86.237,0 -156.25,-70.013 -156.25,-156.25c-0,-86.237 70.013,-156.25 156.25,-156.25Zm-0,62.5c51.742,-0 93.75,42.008 93.75,93.75c-0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c-0,-51.742 42.008,-93.75 93.75,-93.75Z"/><rect x="1192.71" y="93.75" width="58.333" height="312.5"/><use xlink:href="#_Image1" x="2099.63" y="93.75" width="252px" height="313px"/><g><rect x="2400.67" y="93.75" width="58.333" height="312.5"/><path d="M2617.34,152.083l0,-58.333l-216.666,0l-0,58.333l216.666,0Z"/><path d="M2617.34,406.25l0,-58.333l-216.666,-0l-0,58.333l216.666,-0Z"/><path d="M2592.34,279.167l0,-58.334l-191.666,0l-0,58.334l191.666,-0Z"/></g><rect x="132.662" y="181.25" width="58.333" height="225"/><g><rect x="237.636" y="93.75" width="58.333" height="312.5"/><path d="M421.168,93.75l-125.198,156.25l125.198,156.25l74.802,0l-125.199,-156.25l125.199,-156.25l-74.802,-0Z"/></g><rect x="132.662" y="93.75" width="58.333" height="58.333" style="fill:#007bfc;"/><path d="M1392.71,406.25l0,-58.333l-200,-0l0,58.333l200,-0Z"/></g></g><defs><image id="_Image1" width="252px" height="313px" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAE5CAYAAAC0+U3UAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAWeUlEQVR4nO3dfVBVdf4H8Pe9l3sV5KICEjdd8WGDmlS0yRFXUiA3mRIyB2FwA61Ga3aZ1qeWLcpH1kzMzf6InGnFpUUxn2BKBXRRRG1KIqbWjF11VXwq15ZN3CyVu3/8dv2tK8IF7jmfc873/Zph0nvPPefdTO++5557OR8bAC+IdJacnIxRo0YhLCwM0dHRiImJwZAhQxAQECAdzdJsYOHJIAICAjB06FDExMTg3nvvRUxMzM2f8PBw6XiWwMKTKURGRiIhIQFJSUlISkrCkCFDYLPZpGOZDgtPpjRw4MCb5U9MTMSAAQOkI5kCC0+WEB0djcTEREyZMgUTJ07ktYA7YOHJcu666y787Gc/Q3Z2NmJjY6XjGAoLT5Y2fPhwZGdnY/r06bj77rul44hj4UkJdrsdEydORHZ2Np544gkEBQVJRxLBwpNywsLCMGfOHOTk5KBPnz7ScXTFwpOyQkJCkJOTgzlz5qBfv37ScXTBwpPygoKCMHv2bCxYsAD9+/eXjqMpFp7o31wuF5566ink5uZi8ODB0nE0wcIT/Q+Hw4Fnn30W+fn56Nu3r3Qcv2Lhie6gX79+WLVqFbKysizzNV4WnqgDDz30EN566y0MGzZMOkq32aUDEBldbW0tRo4ciRdeeAEtLS3ScbqFKzxRJ/Tv3x+//e1vkZaWZsrTfBaeqAsee+wxFBUVme7zexaeqIv69++PjRs34qGHHpKO4jMHgMXSIYjM6PLlyyguLobT6cS4ceNMcYrPFZ7IDyZNmoTi4mJERERIR2kXC0/kJx6PBxs3bsSECROko9wRT+mJ/KSlpQXFxcUICAhAfHy8IU/xucITaWDKlCnYsGEDAgMDpaPcgoUn0sj48eNRXl5uqN+5Z+GJNDRixAhUVFTA4/FIRwHAwhNpbtCgQaiqqsI999wjHYXfpSfS2smTJzFu3Dh88skn0lFYeCI9XLx4EQkJCdizZ49oDhaeSCctLS149NFHsXXrVrEMfA9PpDOn04kdO3bgpz/9qe7HZuGJBPTq1Qv79u3Dgw8+qOtxWXgiIeHh4Th48CCio6N1OyYLTyQoKioKhw4d0m0MFi/aEQk6deoUkpOT0dzcrMvxWHgiYZ9//jlSU1Px3XffaX4sFp7IAGpra5GZmYkbN25oehz+eiyRQTQ2NsLhcGj6+/S8aEdkIHa7HXv27EFiYqIm+2fhiQwmMjISDQ0NuOuuu/y+b76HJzKYCxcu4Mknn9Tk/TzfwxMZ0IkTJ+B0OjF+/Hi/7pen9EQGZbfbUV1d7deLeCw8kYF5PB40NDT47fbXfA9PZGDnz5/HjBkz4PX6Z11m4YkMrqKiAps2bfLLvnhKT2QCHo8HX375JUJCQrq1H16lJzKBlpYWXL16FcnJyd3aD1d4IpOw2+2or69HbGxs1/fhxzxEpKHW1lb8/Oc/R2tra5f3wVN6IhNpampCVFQURo0a1aXX85SeyGTCwsLQ2NiIsLCwTr+Wp/REJnPp0iW8+OKLXXotV3giE7Lb7fjyyy87Pb6KKzyRCbW2tmLFihWdfh1XeCKTCggIwPHjxzFw4ECfX8MVnsikrl+/jpUrV3bqNVzhiUysR48eOHnyJCIjI33aXpnCr169Gj/60Y+kY1iK3W5Hz5490bNnTwQGBt7yz3379uHcuXO3/Vy4cAHXrl2Tjm4pCxYsQEFBgU/bKlP4rVu3YurUqdIxlOf1enHx4kWcPn0aVVVVKC8vR11dXbe+Paa6Xr164dSpUz59Lq/Me3j+B2UMNpsNERERePDBB/HSSy/ho48+QlNTEwoLCzFp0iS4XC7piKZz5coVvPnmmz5tq8wKv3nzZqSlpUnHoA5cvnwZO3fuxJYtW7B9+3bNBzNYRZ8+fXD69Gm43e52t1NmhSdzcLvdyMjIwObNm/Hpp5/i0Ucfhc1mk45leM3NzdiyZUuH27HwZFjDhw/Hjh07UF1djdGjR0vHMbzi4uIOt2HhyfASEhLw8ccfo7S0FEOHDpWOY1j79u3DqVOn2t2GhSfTyMjIwNGjR7FmzRr06tVLOo4hlZSUtPs8C0+m4nQ68fzzz+PAgQOd+kqpKoqLi9u9wy0LT6Y0cuRIHD58GD/5yU+koxhKY2MjDh8+fMfnWXgyrYiICOzduxczZ86UjmIo7V28Y+HJ1FwuF4qKivD666/D4XBIxzGE0tJS/PDDD20+x8KTJcybNw8ffPABevfuLR1F3KVLl7Br1642n2PhyTKSk5Px3nvvISAgQDqKuO3bt7f5OAtPlvLII4/4/JtjVrZ37942r9az8GQ5c+bMwdNPPy0dQ9Tp06dx4sSJ2x5n4cmS3n77bcTHx0vHEFVdXX3bYyw8WZLT6cS2bdsQFRUlHUUMC09K6devH8rLyxEcHCwdRURb7+NZeLK02NjYTt/o0Sq++uorHD169JbHWHiyvNmzZyMmJkY6hoj/Pa1n4cnyHA4Hli9fLh1DBAtPSpo6dSrGjh0rHUN3e/fuveV+jiw8KWPlypXK3S6rubkZZ8+evfl3Fp6UER8fj5SUFOkYumtsbLz5ZxaelLJixQrlvmvPwpOy7rvvPmRkZEjH0BULT0pTbT4BC09KmzRpEoKCgqRj6IaFJ6UFBgZi4sSJ0jF0c/r0aXz33XcAWHhS1JQpU6Qj6Mbr9eIvf/kLABaeFJWSkqLUPfD+c1rPwpOSwsPDlbrF9Z///GcALDwp7PHHH5eOoJu//e1vAFh4UlhycrJ0BN1cvnwZAAtPClNpVBULT8pzu91wu93SMXTBwhMB8Hg80hF0wcITgYUnUsrdd98tHUEXLDwRWHgipbDwRApRpfBXr17F9evXWXhSm92uTgW8Xi8LT2o7d+6cdARd9OjRA06nk4UntalS+P98wYiFJ6Wx8EQKOX/+vHQEXbDwROAKT6QUFp5IEVeuXLn5hRSrY+FJeWfOnIHX65WOoQsWnpS3e/du6Qi6YeFJeWVlZdIRdBMaGgqAhSdFNTc3Y//+/dIxdHPPPfcAYOFJUTt27MC1a9ekY+gmJiYGAAtPiiovL5eOoKvo6GgALDwp6IcffkBFRYV0DN0MGDAAwcHBAFh4UtAf//hHZT5/B/7/dB5g4UlB27Ztk46gKxaelHXy5Em8++670jF0xcKTsvLy8vD9999Lx9AVC09Kqq+vR2lpqXQM3bHwpKTc3Fy0trZKx9CV2+2+ZYYeC09KqKqqwp49e6Rj6G78+PG33KiThSfL83q9yM3NlY4hIikp6Za/s/BkeSUlJWhoaJCOIYKFJ6UcO3YMv/zlL6VjiAgNDcWIESNueYyFJ8v69ttvkZqaim+++UY6iojExMTbBm2w8GRJXq8XmZmZOHr0qHQUMf97Og+w8GRRL7zwAnbu3CkdQxQLT0pYv349Vq9eLR1DlMfjueULN//BwpOlfPjhh3juueeUuTnlnSQlJcFms932OAtPlvHRRx9hypQpyn1Xvi0pKSltPs7CkyW8++67SEhIwNdffy0dRVxISAhSU1PbfI6FJ1Pzer341a9+hRkzZuDq1avScQwhPT0dgYGBbT4XoHMWIr+5fPkyMjMzsWPHDukohpKVlXXH51h4MqXjx48jNTUVX3zxhXQUQxk0aBDi4+Pv+DxP6cl0SktLMWbMGJa9DVlZWbd9u+6/sfBkGtXV1Rg9ejQyMzNx6dIl6TiG1N7pPMBTejKBzz77DLm5uaisrFT+8/X2xMXF3Zwwcydc4cmwmpqaMGPGDDzwwAOoqKhg2TuQnZ3d4TZc4clQbty4gZqaGmzZsgVFRUX8qM1HvXr1QkZGRofbsfAk7sqVK9i1axfKy8uxc+dOZX+dtTuee+65mxNi26NM4du7ckn6unHjBs6ePYvKykqUlZWhurqaK3k39OjRA/Pnz/dpW2UKf+nSJdTU1EjHsAybzQan0wmXy4UePXrA5XLd8ucPP/wQ586du+Xn/PnzOHfuHC5evIgbN25I/ytYxjPPPAOPx+PTtjYAvBJCZFIBAQE4duwYoqKifNqe57lEJpaVleVz2QGu8ESmZbfbcfTo0Zuz3316jYZ5iEhD6enpnSo7wBWeyLQ+++wzDB8+vFOv4QpPZEKZmZmdLjvAFZ7IdNxuNxobG33+KO6/cYUnMplly5Z1qewAV3giU4mNjUVdXR0CArr2nTmu8EQmUlhY2OWyAyw8kWk888wzGDt2bLf2wVN6IhMIDQ1FY2MjwsPDu7UfrvBEJrBixYpulx3gCk9keOPGjcP+/fv98iveLDyRgfXt2xcNDQ0YOHCgX/bHU3oiA/v973/vt7IDLDyRYc2fP/+OQyG7iqf0RAYUFxeH/fv3w+l0+nW/LDyRwfTt2xeffvppp25s4Sue0hMZzPr16zUpO8DCExnKvHnz7jjb3R94Sk9kEAkJCaisrITL5dLsGCw8kQGMHDkSNTU1CAkJ0fQ4LDyRsCFDhuDgwYOIjIzU/FgsPJGgiIgIHDp0CEOHDtXleLxoRyTE7XajoqJCt7IDLDyRCJfLhbKyMowaNUrX47LwRDqz2WwoKSlBUlKS7sdm4Yl0ZLPZsHbtWqSlpYkcX5npsUTSnE4n/vCHPyA9PV0sAwtPpIPg4GCUlZXh4YcfFs3BwhNpLCIiArt27cIDDzwgHYWFJ9LS4MGDUVVVhR//+MfSUQDwoh2RZmJjY3Hw4EHDlB1g4Yk0MWHCBNTU1HR5JJRWWHgiP3v++edRWVmJ3r17S0e5Dd/DE/lJ7969UVRUhCeeeEI6yh2x8ER+MHr0aGzatAmDBw+WjtIuntITddPcuXNx4MABw5cd4ApP1GV9+vTB+vXr8fjjj0tH8RkLT9QFY8eOxcaNGzW72aRWeEpP1Al9+vRBYWEhamtrTVd2gCs8kc9mzpyJ1157DREREdJRuoyFJ+rAsGHDUFhYiPj4eOko3cZTeqI7CA4Oxuuvv476+npLlB3gCk/UpvT0dKxevRr9+/eXjuJXXOGJ/s1msyEtLQ319fXYtGmT5coOcIUngsPhwPTp0/Hiiy/ivvvuk46jKRaelOV0OvHUU08hNzcXQ4YMkY6jCxaelNOzZ088++yzWLBgAQYMGCAdR1ecPEPKmTx5Mt5//33pGCJYeFKOzWZDXV2dIe4xpzdepSfleL1evPzyy9IxRHCFJ2UdOHAA48aNk46hK67wpKy8vDzpCLpj4UlZNTU12L17t3QMXfGUnpQ2evRofPzxx9IxdMMVnpR2+PBhlJeXS8fQjTIr/DvvvIPU1FTpGKZSUFCAgoIC6RiaGz58OBoaGmC3W3/9U6bw7733HqZNmyYdw1S+/fZbDB48GN988410FM2VlJRg+vTp0jE0Z/3/pVGXhYSEIDc3VzqGLhYtWoTr169Lx9AcC0/tysnJQWRkpHQMzR07dgzr16+XjqE5Fp7aFRQUpMzn1UuXLsX3338vHUNTLDx1aPbs2aa8Q2tnNTU1Ye3atdIxNMXCU4dcLhcWLVokHUMXy5cvxz//+U/pGJph4ckn2dnZiImJkY6hua+++gpvvvmmdAzNsPDkE4fDgSVLlkjH0MXKlSvxj3/8QzqGJlh48ll6ejpiY2OlY2ju73//O1atWiUdQxMsPPnMZrNh2bJl0jF08cYbb+DixYvSMfyOhadOSUlJQVxcnHQMzbW0tGDFihXSMfyOhadO+81vfiMdQRdvvfUWzp49Kx3Dr1h46rSkpCQkJSVJx9Dc1atXkZ+fLx3Dr1h46hJVVvnf/e53+Otf/yodw29YeOqSuLg4TJ48WTqG5q5du2apLx2x8NRl+fn5sNls0jE0V1JSgi+++EI6hl+w8NRlsbGxStxjoLW1FQsXLpSO4RcsPHXL0qVL4XA4pGNobtu2baivr5eO0W0sPHVLTEwMsrOzpWNozirDK1h46rZFixbB5XJJx9Dcrl27cPDgQekY3cLCU7dFRUVh1qxZ0jF0YfabgbDw5Bd5eXkIDAyUjqE5sw+vYOHJLzweD3JycqRj6MLMqzwLT36Tm5uLkJAQ6RiaO3z4MMrKyqRjdAkLT34TFhaGuXPnSsfQxSuvvILW1lbpGJ3GwpNfzZ8/H2FhYdIxNPenP/0JpaWl0jE6jYUnv3K73RxeYWAsPPldTk4OPB6PdAzNmXF4BQtPfhcYGGjqK9mdYbbhFSw8aWLWrFkcXmFALDxpQrXhFVeuXJGO4RMWnjTD4RXGw8KTZhwOB5YuXSodQxcFBQWmGF7BwpOmpk2bhpEjR0rH0JxZhlew8KQpDq8wFhaeNDd58mQOrzAIFp50ocptrY0+vIKFJ12oNLzCyG9hWHjSjSqr/Lp163DixAnpGG1i4Uk3cXFxSElJkY6huWvXrmHx4sXSMdrEwpOuli1bxuEVglh40lVsbCzS09OlY2jOqMMrWHjS3ZIlSzi8QggLT7rj8Ao5LDyJ4PAKGSw8iVBpeMVLL70kHeEmFp7EvPzyywgKCpKOobn9+/ejqqpKOgYAFp4ERUZGKjO8wijv5Vl4EsXhFfpi4UlUaGgo5s2bJx1DF0YYXsHCk7h58+ZxeIVOWHgSx+EV+mHhyRBUGl5RVFQkdnwWngwhMDDQMFeytbZs2TKx4RUsPBnGrFmzMGjQIOkYmmtqasLbb78tcmwWngzD6XRyeIXGWHgylKysLNx7773SMTT39ddfiwyvYOHJUBwOB5YsWSIdQxcSwytYeDIcDq/QDgtPhsPhFdph4cmQJk+ejLFjx0rH0FxLSwteffVV3Y7HwpNhqXJb68LCQt2GV7DwZFiJiYl4+OGHpWNoTs/hFSw8GZoqq7xewytYeDK0MWPGcHiFH7HwZHgcXuE/LDwZnkrDK1555RVNj8HCkymoNLzik08+0Wz/LDyZgirDKwBtb3jJwpNpqDK8oqKiAgcOHNBk3yw8mUZUVBRmz54tHUMXeXl5muyXhSdTycvL4/CKbmDhyVRUGl6hxSrPwpPpqDK8oq6uDtu3b/frPll4Mh0Or+g6Fp5MSZXhFUeOHMHGjRv9tj8WnkzJ7Xbj17/+tXQMXfhzeAULT6b1i1/8QonhFcePH/fb8AoWnkyLwys6j4UnU1NpeEVhYWG398PCk6mpNLzi1Vdf7fbwChaeTE+l4RVr1qzp1j5YeDI91YZXNDc3d/n1LDxZgirDK5qbm7s1vIKFJ0uw2WzIz8+XjqGLNWvWdHl4BQtPlvHYY49xeEUHWHiyFFVua11YWIgzZ850+nUsPFkKh1e0j4Uny1FllV+3bh2OHz/eqdew8GQ5qgyvuH79eqeHV7DwZEn5+flKDK/YsGEDjhw54vP2LDxZ0ogRI5CRkSEdQ3Otra1YuHChz9uz8GRZKg2vqKur82lbFp4sKzo6GjNmzJCOoQtff02YhSdLW7hwoRLDKyorK1FbW9vhdiw8WRqHV9yKhSfLU2V4RW1tLSorK9vdhoUny1NpeEVH7+VZeFICh1f8HxaelBAaGor58+dLx9BFe8MrWHhSxty5cxEeHi4dQ3NHjhzBhg0b2nyOhSdluN1u5ObmSsfQxeLFi9scXsHCk1JUGl6xbt262x5n4Ukpqg+vYOFJOaoMrzhz5sxtwytYeFKOysMrWHhSkkrDK954442bf2fhSUkOhwNLly6VjqGLVatW3RxewcKTstLS0pQZXlFQUAAACFDlvcz9998vHYEMxmazYe3atdi5c6d0FM0FBwcDAP4F0NiaP/0ZOEUAAAAASUVORK5CYII="/></defs></svg>',Me={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/iKOOLCORE.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["iKOOLCORE"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "简体中文","value": "zh-CN"},{"content": "繁體中文","value": "zh-HK"}]',DOC_NAVIGATIONS:'[{"name": "R2","value": "R2","disabled":"false","order": 1},{"name": "R1","value": "R1","disabled":"false","order": 2}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1},{DOC_LANGUAGE:xe,DOC_NAVIGATIONS:Be,DOC_ROUTER_MODE:Qe}=Me,je=Re({setup(){const e=De(),t=Ee(),r=a(null),n=a(Qe==="hash"),i=a(null),l=a(!1),u=a(Ge),E=a(null),A=a(null),_=a([]),T=z(()=>_.value.length),H=a(0),f=a([]),L=a(null),d=a(!1),v=a(!1),w=a(JSON.parse(xe)),re=a(JSON.parse(Be)),[,se,ie]=e.fullPath.split("/"),S=a(se),g=a(ie),ne=z(()=>s=>e.fullPath.includes(s)),k=z(()=>ee.filter(s=>s.nav.value===S.value&&s.lang.value===g.value)[0].children),le=z(()=>w.value.filter(s=>s.value===g.value)[0].content),b=()=>{document.querySelector("#gitalk").innerHTML="";const{DOC_GITHUB_CLIENTID:s,DOC_GIHUB_CLIENT_SECRET:c,DOC_GITHUB_REPO:p,DOC_GITHUB_OWNER:I,DOC_GITHUB_ADMIN:C,DOC_GITALK:N}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/iKOOLCORE.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["iKOOLCORE"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "简体中文","value": "zh-CN"},{"content": "繁體中文","value": "zh-HK"}]',DOC_NAVIGATIONS:'[{"name": "R2","value": "R2","disabled":"false","order": 1},{"name": "R1","value": "R1","disabled":"false","order": 2}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};N==="true"&&(E.value=new fe({clientID:s,clientSecret:c,repo:p,owner:I,admin:JSON.parse(C),id:location.pathname,language:g.value,distractionFreeMode:!1}),E.value.render("gitalk"))},Q=s=>{var c;_.value.forEach(p=>{p.classList.remove("active")}),(c=_.value[s])==null||c.classList.add("active")},ce=()=>{const s=document.querySelector(".page-content"),c={attributes:!0,childList:!0,subtree:!0};new MutationObserver(()=>{_.value=document.querySelectorAll(".table-of-contents li"),f.value=document.querySelectorAll(".markdown-body h2, .markdown-body h3"),d.value=s.offsetWidth<800}).observe(s,c)},F=()=>{r.value.routerList=k.value},de=s=>{if(s.disabled&&s.disabled==="true"){X.info("开发中！");return}const c=e.fullPath,[,p,I]=c.split("/"),{value:C}=s;if(p===C)return;const N=c.split("/");N[1]=C,S.value=C;let K=N.join("/");t.getRoutes().map(ve=>ve.path).includes(K)||(K=`/${s.value}`),t.push(K),b(),v.value=!1},ae=()=>{r.value.onchange=({detail:s})=>{H.value=0,b(),e.path!==s&&(l.value=!1,t.push(s),window.scrollTo(0,0))}},ue=s=>{g.value=s.value},_e=s=>{if(!T.value)return;const c=s>68;L.value.style.position="fixed",L.value.style.top=c?"0px":"68px"},me=()=>{const s=Fe(f.value);H.value=s,Q(s),Oe(s)},pe=()=>{let s=0,c=!1;function p(I){_.value.length<1||(_e(I),me())}window.addEventListener("scroll",I=>{s=window.scrollY,c||window.requestAnimationFrame(()=>{p(s),c=!1}),c=!0})},he=()=>{const{hash:s}=e;f.value.forEach(c=>{s.includes(c.id)&&c.offsetTop+c.parentNode.getBoundingClientRect().top})},Oe=s=>{_.value[s].offsetTop};return j(g,s=>{const c=e.fullPath.split("/");c[2]=s;const p=c.join("/");t.push(p),F();const I=w.value.filter(C=>C.value===s)[0].content;X.info(`当前语言【${I}】`),b(),v.value=!1}),j(k,s=>{F()}),Ae(()=>{_.value=document.querySelectorAll(".table-of-contents li"),L.value=document.querySelector(".table-of-contents"),f.value=document.querySelectorAll(".markdown-body h2, .markdown-body h3"),F(),ae(),b(),ce(),Q(0),he(),document.body.offsetWidth>800&&pe()}),Te(()=>{L.value=document.querySelector(".table-of-contents")}),{aside:r,header:i,menuList:k,languages:w,visible:v,navigations:re,cnav:S,clang:g,titles:f,logo:u,gitalk:A,isActive:ne,currentLanguage:le,isHash:n,isPhone:d,hasToc:T,onNavClick:de,onLanguageChange:ue}}});const te=(e,t)=>{const r=e.__vccOpts||e;for(const[n,i]of t)r[n]=i;return r},Xe={ref:"header",slot:"header","disabled-icon":"","header-menu":"[]"},Ye=["innerHTML"],We={key:1,slot:"right"},Ze={class:"mobile-menu"},Je=["onClick"],qe=D("ldesign-theme",null,null,-1),$e={ref:"aside"},et={id:"gitalk",ref:"gitalk"},tt=D("ldesign-backtop",null,null,-1);function ot(e,t,r,n,i,l){const u=Ie,E=Ce,A=Le,_=ge,T=He,H=Pe,f=we,L=Z("router-view");return O(),P("ldesign-page",null,[D("ldesign-header",Xe,[R(u,{slot:"logo"},{default:m(()=>[D("div",{class:"logo",innerHTML:e.logo},null,8,Ye)]),_:1}),e.isPhone?Y("",!0):(O(),y(u,{key:0,align:"center",size:"16px",style:{"margin-right":"16px"}},{default:m(()=>[R(_,{"min-column-width":"100px",options:e.languages,onClick:e.onLanguageChange},{default:m(()=>[R(A,{variant:"text"},{suffix:m(()=>[R(E,{name:"chevron-down"})]),default:m(()=>[G(V(e.currentLanguage)+" ",1)]),_:1})]),_:1},8,["options","onClick"]),(O(!0),P(M,null,x(e.navigations,(d,v)=>(O(),y(A,{key:v,variant:e.isActive(d.value)?"base":"text",onClick:w=>e.onNavClick(d)},{default:m(()=>[G(V(d.name),1)]),_:2},1032,["variant","onClick"]))),128))]),_:1})),e.isPhone?(O(),P("div",We,[R(A,{variant:"text",shape:"square",onClick:t[0]||(t[0]=d=>e.visible=!e.visible)},{icon:m(()=>[R(E,{name:"bulletpoint"})]),_:1}),R(f,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=d=>e.visible=d)},{footer:m(()=>[qe]),default:m(()=>[R(H,{slot:"header",modelValue:e.clang,"onUpdate:modelValue":t[1]||(t[1]=d=>e.clang=d),variant:"default-filled"},{default:m(()=>[(O(!0),P(M,null,x(e.languages,(d,v)=>(O(),y(T,{key:v,value:d.value},{default:m(()=>[G(V(d.content),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),D("ul",Ze,[(O(!0),P(M,null,x(e.navigations,(d,v)=>(O(),P("li",{key:v,class:W({active:d.value===e.cnav})},[D("p",{onClick:w=>e.onNavClick(d)},V(d.name),9,Je)],2))),128))])]),_:1},8,["visible"])])):Y("",!0)],512),D("ldesign-aside",$e,null,512),D("div",{class:W(["page-content",{"has-toc":e.hasToc}])},[R(L,{style:{visibility:"visible"}}),D("div",et,null,512)],2),tt])}const rt=te(je,[["render",ot]]),{DOC_LANGUAGE:st,DOC_NAVIGATIONS:it}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE WIKI 硬酷科技wiki",DOC_LOGO:"https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/iKOOLCORE.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["iKOOLCORE"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "简体中文","value": "zh-CN"},{"content": "繁體中文","value": "zh-HK"}]',DOC_NAVIGATIONS:'[{"name": "R2","value": "R2","disabled":"false","order": 1},{"name": "R1","value": "R1","disabled":"false","order": 2}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1},nt=JSON.parse(it)[0],lt=JSON.parse(st);function oe(e,t){let r=[],n;return e.forEach(i=>{const l=i.type||t;let{children:u}=i;i.type==="component"&&(u=i.children.sort((E,A)=>{const _=E.name.toUpperCase(),T=A.name.toUpperCase();return _<T?-1:_>T?1:0})),u?r=r.concat(oe(u,l)):(n={...i},r.push(n))}),r}function ct(){const e=[];return ee.forEach(t=>{e.push({path:`/${t.nav.value}`,component:rt,redirect:t.lang.value===lt[0].value?`${t.children[0].children[0].path}`:"",children:oe(t.children)})}),e}const dt=[{path:"/",redirect:`/${nt.value}`},{path:"/:w+",redirect:"/404"}].concat(ct()),B=be({routes:dt,history:Ne("./")});B.beforeEach((e,t,r)=>{J.start(),r()});B.afterEach(()=>{J.done()});const at={};function ut(e,t){const r=Z("router-view");return O(),y(r)}const _t=te(at,[["render",ut]]),mt=ze(),U=Ve(_t);U.config.performance=!0;U.use(B);U.use(mt);U.mount("#app");
