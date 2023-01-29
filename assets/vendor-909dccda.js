import{c as io}from"./__commonjsHelpers__-725317a4.js";function qo(e,t){const n=Object.create(null),i=e.split(",");for(let o=0;o<i.length;o++)n[i[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}function Wo(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],o=_1(i)?C3(i):Wo(i);if(o)for(const l in o)t[l]=o[l]}return t}else{if(_1(e))return e;if(y1(e))return e}}const h3=/;(?![^(]*\))/g,v3=/:([^]+)/,w3=/\/\*.*?\*\//gs;function C3(e){const t={};return e.replace(w3,"").split(h3).forEach(n=>{if(n){const i=n.split(v3);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ko(e){let t="";if(_1(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const i=Ko(e[n]);i&&(t+=i+" ")}else if(y1(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const m3="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x3=qo(m3);function Jl(e){return!!e||e===""}const Pp=e=>_1(e)?e:e==null?"":Q(e)||y1(e)&&(e.toString===n5||!n1(e.toString))?JSON.stringify(e,Ql,2):String(e),Ql=(e,t)=>t&&t.__v_isRef?Ql(e,t.value):rt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,o])=>(n[`${i} =>`]=o,n),{})}:e5(t)?{[`Set(${t.size})`]:[...t.values()]}:y1(t)&&!Q(t)&&!i5(t)?String(t):t,L1={},lt=[],te=()=>{},L3=()=>!1,y3=/^on[^a-z]/,ri=e=>y3.test(e),Go=e=>e.startsWith("onUpdate:"),A1=Object.assign,Yo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},b3=Object.prototype.hasOwnProperty,d1=(e,t)=>b3.call(e,t),Q=Array.isArray,rt=e=>si(e)==="[object Map]",e5=e=>si(e)==="[object Set]",n1=e=>typeof e=="function",_1=e=>typeof e=="string",Xo=e=>typeof e=="symbol",y1=e=>e!==null&&typeof e=="object",t5=e=>y1(e)&&n1(e.then)&&n1(e.catch),n5=Object.prototype.toString,si=e=>n5.call(e),_3=e=>si(e).slice(8,-1),i5=e=>si(e)==="[object Object]",Jo=e=>_1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=qo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ai=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},H3=/-(\w)/g,pe=ai(e=>e.replace(H3,(t,n)=>n?n.toUpperCase():"")),M3=/\B([A-Z])/g,Ht=ai(e=>e.replace(M3,"-$1").toLowerCase()),ci=ai(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ei=ai(e=>e?`on${ci(e)}`:""),tn=(e,t)=>!Object.is(e,t),zt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Qo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let W0;const k3=()=>W0||(W0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let re;class V3{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=re,!t&&re&&(this.index=(re.scopes||(re.scopes=[])).push(this)-1)}run(t){if(this.active){const n=re;try{return re=this,t()}finally{re=n}}}on(){re=this}off(){re=this.parent}stop(t){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function Z3(e,t=re){t&&t.active&&t.effects.push(e)}const e0=e=>{const t=new Set(e);return t.w=0,t.n=0,t},o5=e=>(e.w&Be)>0,l5=e=>(e.n&Be)>0,E3=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Be},A3=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const o=t[i];o5(o)&&!l5(o)?o.delete(e):t[n++]=o,o.w&=~Be,o.n&=~Be}t.length=n}},oo=new WeakMap;let Ft=0,Be=1;const lo=30;let Q1;const We=Symbol(""),ro=Symbol("");class t0{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Z3(this,i)}run(){if(!this.active)return this.fn();let t=Q1,n=Ae;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Q1,Q1=this,Ae=!0,Be=1<<++Ft,Ft<=lo?E3(this):K0(this),this.fn()}finally{Ft<=lo&&A3(this),Be=1<<--Ft,Q1=this.parent,Ae=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Q1===this?this.deferStop=!0:this.active&&(K0(this),this.onStop&&this.onStop(),this.active=!1)}}function K0(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ae=!0;const r5=[];function Mt(){r5.push(Ae),Ae=!1}function kt(){const e=r5.pop();Ae=e===void 0?!0:e}function P1(e,t,n){if(Ae&&Q1){let i=oo.get(e);i||oo.set(e,i=new Map);let o=i.get(n);o||i.set(n,o=e0()),s5(o)}}function s5(e,t){let n=!1;Ft<=lo?l5(e)||(e.n|=Be,n=!o5(e)):n=!e.has(Q1),n&&(e.add(Q1),Q1.deps.push(e))}function Ce(e,t,n,i,o,l){const r=oo.get(e);if(!r)return;let s=[];if(t==="clear")s=[...r.values()];else if(n==="length"&&Q(e)){const a=Qo(i);r.forEach((c,d)=>{(d==="length"||d>=a)&&s.push(c)})}else switch(n!==void 0&&s.push(r.get(n)),t){case"add":Q(e)?Jo(n)&&s.push(r.get("length")):(s.push(r.get(We)),rt(e)&&s.push(r.get(ro)));break;case"delete":Q(e)||(s.push(r.get(We)),rt(e)&&s.push(r.get(ro)));break;case"set":rt(e)&&s.push(r.get(We));break}if(s.length===1)s[0]&&so(s[0]);else{const a=[];for(const c of s)c&&a.push(...c);so(e0(a))}}function so(e,t){const n=Q(e)?e:[...e];for(const i of n)i.computed&&G0(i);for(const i of n)i.computed||G0(i)}function G0(e,t){(e!==Q1||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const S3=qo("__proto__,__v_isRef,__isVue"),a5=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xo)),$3=n0(),B3=n0(!1,!0),T3=n0(!0),Y0=F3();function F3(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=f1(this);for(let l=0,r=this.length;l<r;l++)P1(i,"get",l+"");const o=i[t](...n);return o===-1||o===!1?i[t](...n.map(f1)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const i=f1(this)[t].apply(this,n);return kt(),i}}),e}function n0(e=!1,t=!1){return function(i,o,l){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&l===(e?t?J3:f5:t?g5:p5).get(i))return i;const r=Q(i);if(!e&&r&&d1(Y0,o))return Reflect.get(Y0,o,l);const s=Reflect.get(i,o,l);return(Xo(o)?a5.has(o):S3(o))||(e||P1(i,"get",o),t)?s:V1(s)?r&&Jo(o)?s:s.value:y1(s)?e?u5(s):un(s):s}}const O3=c5(),R3=c5(!0);function c5(e=!1){return function(n,i,o,l){let r=n[i];if(dt(r)&&V1(r)&&!V1(o))return!1;if(!e&&(!Un(o)&&!dt(o)&&(r=f1(r),o=f1(o)),!Q(n)&&V1(r)&&!V1(o)))return r.value=o,!0;const s=Q(n)&&Jo(i)?Number(i)<n.length:d1(n,i),a=Reflect.set(n,i,o,l);return n===f1(l)&&(s?tn(o,r)&&Ce(n,"set",i,o):Ce(n,"add",i,o)),a}}function P3(e,t){const n=d1(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&Ce(e,"delete",t,void 0),i}function N3(e,t){const n=Reflect.has(e,t);return(!Xo(t)||!a5.has(t))&&P1(e,"has",t),n}function I3(e){return P1(e,"iterate",Q(e)?"length":We),Reflect.ownKeys(e)}const d5={get:$3,set:O3,deleteProperty:P3,has:N3,ownKeys:I3},j3={get:T3,set(e,t){return!0},deleteProperty(e,t){return!0}},z3=A1({},d5,{get:B3,set:R3}),i0=e=>e,di=e=>Reflect.getPrototypeOf(e);function xn(e,t,n=!1,i=!1){e=e.__v_raw;const o=f1(e),l=f1(t);n||(t!==l&&P1(o,"get",t),P1(o,"get",l));const{has:r}=di(o),s=i?i0:n?r0:nn;if(r.call(o,t))return s(e.get(t));if(r.call(o,l))return s(e.get(l));e!==o&&e.get(t)}function Ln(e,t=!1){const n=this.__v_raw,i=f1(n),o=f1(e);return t||(e!==o&&P1(i,"has",e),P1(i,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function yn(e,t=!1){return e=e.__v_raw,!t&&P1(f1(e),"iterate",We),Reflect.get(e,"size",e)}function X0(e){e=f1(e);const t=f1(this);return di(t).has.call(t,e)||(t.add(e),Ce(t,"add",e,e)),this}function J0(e,t){t=f1(t);const n=f1(this),{has:i,get:o}=di(n);let l=i.call(n,e);l||(e=f1(e),l=i.call(n,e));const r=o.call(n,e);return n.set(e,t),l?tn(t,r)&&Ce(n,"set",e,t):Ce(n,"add",e,t),this}function Q0(e){const t=f1(this),{has:n,get:i}=di(t);let o=n.call(t,e);o||(e=f1(e),o=n.call(t,e)),i&&i.call(t,e);const l=t.delete(e);return o&&Ce(t,"delete",e,void 0),l}function e2(){const e=f1(this),t=e.size!==0,n=e.clear();return t&&Ce(e,"clear",void 0,void 0),n}function bn(e,t){return function(i,o){const l=this,r=l.__v_raw,s=f1(r),a=t?i0:e?r0:nn;return!e&&P1(s,"iterate",We),r.forEach((c,d)=>i.call(o,a(c),a(d),l))}}function _n(e,t,n){return function(...i){const o=this.__v_raw,l=f1(o),r=rt(l),s=e==="entries"||e===Symbol.iterator&&r,a=e==="keys"&&r,c=o[e](...i),d=n?i0:t?r0:nn;return!t&&P1(l,"iterate",a?ro:We),{next(){const{value:w,done:u}=c.next();return u?{value:w,done:u}:{value:s?[d(w[0]),d(w[1])]:d(w),done:u}},[Symbol.iterator](){return this}}}}function be(e){return function(...t){return e==="delete"?!1:this}}function D3(){const e={get(l){return xn(this,l)},get size(){return yn(this)},has:Ln,add:X0,set:J0,delete:Q0,clear:e2,forEach:bn(!1,!1)},t={get(l){return xn(this,l,!1,!0)},get size(){return yn(this)},has:Ln,add:X0,set:J0,delete:Q0,clear:e2,forEach:bn(!1,!0)},n={get(l){return xn(this,l,!0)},get size(){return yn(this,!0)},has(l){return Ln.call(this,l,!0)},add:be("add"),set:be("set"),delete:be("delete"),clear:be("clear"),forEach:bn(!0,!1)},i={get(l){return xn(this,l,!0,!0)},get size(){return yn(this,!0)},has(l){return Ln.call(this,l,!0)},add:be("add"),set:be("set"),delete:be("delete"),clear:be("clear"),forEach:bn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=_n(l,!1,!1),n[l]=_n(l,!0,!1),t[l]=_n(l,!1,!0),i[l]=_n(l,!0,!0)}),[e,n,t,i]}const[U3,q3,W3,K3]=D3();function o0(e,t){const n=t?e?K3:W3:e?q3:U3;return(i,o,l)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(d1(n,o)&&o in i?n:i,o,l)}const G3={get:o0(!1,!1)},Y3={get:o0(!1,!0)},X3={get:o0(!0,!1)},p5=new WeakMap,g5=new WeakMap,f5=new WeakMap,J3=new WeakMap;function Q3(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function er(e){return e.__v_skip||!Object.isExtensible(e)?0:Q3(_3(e))}function un(e){return dt(e)?e:l0(e,!1,d5,G3,p5)}function tr(e){return l0(e,!1,z3,Y3,g5)}function u5(e){return l0(e,!0,j3,X3,f5)}function l0(e,t,n,i,o){if(!y1(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=o.get(e);if(l)return l;const r=er(e);if(r===0)return e;const s=new Proxy(e,r===2?i:n);return o.set(e,s),s}function st(e){return dt(e)?st(e.__v_raw):!!(e&&e.__v_isReactive)}function dt(e){return!!(e&&e.__v_isReadonly)}function Un(e){return!!(e&&e.__v_isShallow)}function h5(e){return st(e)||dt(e)}function f1(e){const t=e&&e.__v_raw;return t?f1(t):e}function v5(e){return Dn(e,"__v_skip",!0),e}const nn=e=>y1(e)?un(e):e,r0=e=>y1(e)?u5(e):e;function w5(e){Ae&&Q1&&(e=f1(e),s5(e.dep||(e.dep=e0())))}function C5(e,t){e=f1(e),e.dep&&so(e.dep)}function V1(e){return!!(e&&e.__v_isRef===!0)}function Dt(e){return m5(e,!1)}function nr(e){return m5(e,!0)}function m5(e,t){return V1(e)?e:new ir(e,t)}class ir{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:f1(t),this._value=n?t:nn(t)}get value(){return w5(this),this._value}set value(t){const n=this.__v_isShallow||Un(t)||dt(t);t=n?t:f1(t),tn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:nn(t),C5(this))}}function Se(e){return V1(e)?e.value:e}const or={get:(e,t,n)=>Se(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return V1(o)&&!V1(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function x5(e){return st(e)?e:new Proxy(e,or)}function Np(e){const t=Q(e)?new Array(e.length):{};for(const n in e)t[n]=rr(e,n);return t}class lr{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function rr(e,t,n){const i=e[t];return V1(i)?i:new lr(e,t,n)}var L5;class sr{constructor(t,n,i,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[L5]=!1,this._dirty=!0,this.effect=new t0(t,()=>{this._dirty||(this._dirty=!0,C5(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=i}get value(){const t=f1(this);return w5(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}L5="__v_isReadonly";function ar(e,t,n=!1){let i,o;const l=n1(e);return l?(i=e,o=te):(i=e.get,o=e.set),new sr(i,o,l||!o,n)}function $e(e,t,n,i){let o;try{o=i?e(...i):e()}catch(l){hn(l,t,n)}return o}function q1(e,t,n,i){if(n1(e)){const l=$e(e,t,n,i);return l&&t5(l)&&l.catch(r=>{hn(r,t,n)}),l}const o=[];for(let l=0;l<e.length;l++)o.push(q1(e[l],t,n,i));return o}function hn(e,t,n,i=!0){const o=t?t.vnode:null;if(t){let l=t.parent;const r=t.proxy,s=n;for(;l;){const c=l.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,r,s)===!1)return}l=l.parent}const a=t.appContext.config.errorHandler;if(a){$e(a,null,10,[e,r,s]);return}}cr(e,n,o,i)}function cr(e,t,n,i=!0){console.error(e)}let on=!1,ao=!1;const S1=[];let ce=0;const at=[];let ve=null,je=0;const y5=Promise.resolve();let s0=null;function a0(e){const t=s0||y5;return e?t.then(this?e.bind(this):e):t}function dr(e){let t=ce+1,n=S1.length;for(;t<n;){const i=t+n>>>1;ln(S1[i])<e?t=i+1:n=i}return t}function pi(e){(!S1.length||!S1.includes(e,on&&e.allowRecurse?ce+1:ce))&&(e.id==null?S1.push(e):S1.splice(dr(e.id),0,e),b5())}function b5(){!on&&!ao&&(ao=!0,s0=y5.then(H5))}function pr(e){const t=S1.indexOf(e);t>ce&&S1.splice(t,1)}function gr(e){Q(e)?at.push(...e):(!ve||!ve.includes(e,e.allowRecurse?je+1:je))&&at.push(e),b5()}function t2(e,t=on?ce+1:0){for(;t<S1.length;t++){const n=S1[t];n&&n.pre&&(S1.splice(t,1),t--,n())}}function _5(e){if(at.length){const t=[...new Set(at)];if(at.length=0,ve){ve.push(...t);return}for(ve=t,ve.sort((n,i)=>ln(n)-ln(i)),je=0;je<ve.length;je++)ve[je]();ve=null,je=0}}const ln=e=>e.id==null?1/0:e.id,fr=(e,t)=>{const n=ln(e)-ln(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function H5(e){ao=!1,on=!0,S1.sort(fr);const t=te;try{for(ce=0;ce<S1.length;ce++){const n=S1[ce];n&&n.active!==!1&&$e(n,null,14)}}finally{ce=0,S1.length=0,_5(),on=!1,s0=null,(S1.length||at.length)&&H5()}}function ur(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||L1;let o=n;const l=t.startsWith("update:"),r=l&&t.slice(7);if(r&&r in i){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:w,trim:u}=i[d]||L1;u&&(o=n.map(m=>_1(m)?m.trim():m)),w&&(o=n.map(Qo))}let s,a=i[s=Ei(t)]||i[s=Ei(pe(t))];!a&&l&&(a=i[s=Ei(Ht(t))]),a&&q1(a,e,6,o);const c=i[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,q1(c,e,6,o)}}function M5(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(o!==void 0)return o;const l=e.emits;let r={},s=!1;if(!n1(e)){const a=c=>{const d=M5(c,t,!0);d&&(s=!0,A1(r,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!l&&!s?(y1(e)&&i.set(e,null),null):(Q(l)?l.forEach(a=>r[a]=null):A1(r,l),y1(e)&&i.set(e,r),r)}function gi(e,t){return!e||!ri(t)?!1:(t=t.slice(2).replace(/Once$/,""),d1(e,t[0].toLowerCase()+t.slice(1))||d1(e,Ht(t))||d1(e,t))}let R1=null,k5=null;function qn(e){const t=R1;return R1=e,k5=e&&e.type.__scopeId||null,t}function hr(e,t=R1,n){if(!t||e._n)return e;const i=(...o)=>{i._d&&g2(-1);const l=qn(t);let r;try{r=e(...o)}finally{qn(l),i._d&&g2(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function Ai(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:l,propsOptions:[r],slots:s,attrs:a,emit:c,render:d,renderCache:w,data:u,setupState:m,ctx:g,inheritAttrs:v}=e;let L,y;const p=qn(e);try{if(n.shapeFlag&4){const h=o||i;L=ae(d.call(h,h,w,l,m,u,g)),y=a}else{const h=t;L=ae(h.length>1?h(l,{attrs:a,slots:s,emit:c}):h(l,null)),y=t.props?a:vr(a)}}catch(h){Kt.length=0,hn(h,e,1),L=Z1(ne)}let f=L;if(y&&v!==!1){const h=Object.keys(y),{shapeFlag:C}=f;h.length&&C&7&&(r&&h.some(Go)&&(y=wr(y,r)),f=me(f,y))}return n.dirs&&(f=me(f),f.dirs=f.dirs?f.dirs.concat(n.dirs):n.dirs),n.transition&&(f.transition=n.transition),L=f,qn(p),L}const vr=e=>{let t;for(const n in e)(n==="class"||n==="style"||ri(n))&&((t||(t={}))[n]=e[n]);return t},wr=(e,t)=>{const n={};for(const i in e)(!Go(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Cr(e,t,n){const{props:i,children:o,component:l}=e,{props:r,children:s,patchFlag:a}=t,c=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?n2(i,r,c):!!r;if(a&8){const d=t.dynamicProps;for(let w=0;w<d.length;w++){const u=d[w];if(r[u]!==i[u]&&!gi(c,u))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:i===r?!1:i?r?n2(i,r,c):!0:!!r;return!1}function n2(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const l=i[o];if(t[l]!==e[l]&&!gi(n,l))return!0}return!1}function mr({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const V5=e=>e.__isSuspense;function xr(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):gr(e)}function Rn(e,t){if(k1){let n=k1.provides;const i=k1.parent&&k1.parent.provides;i===n&&(n=k1.provides=Object.create(i)),n[e]=t}}function W1(e,t,n=!1){const i=k1||R1;if(i){const o=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&n1(t)?t.call(i.proxy):t}}function Lr(e,t){return c0(e,null,t)}const Hn={};function ct(e,t,n){return c0(e,t,n)}function c0(e,t,{immediate:n,deep:i,flush:o,onTrack:l,onTrigger:r}=L1){const s=k1;let a,c=!1,d=!1;if(V1(e)?(a=()=>e.value,c=Un(e)):st(e)?(a=()=>e,i=!0):Q(e)?(d=!0,c=e.some(f=>st(f)||Un(f)),a=()=>e.map(f=>{if(V1(f))return f.value;if(st(f))return Ue(f);if(n1(f))return $e(f,s,2)})):n1(e)?t?a=()=>$e(e,s,2):a=()=>{if(!(s&&s.isUnmounted))return w&&w(),q1(e,s,3,[u])}:a=te,t&&i){const f=a;a=()=>Ue(f())}let w,u=f=>{w=y.onStop=()=>{$e(f,s,4)}},m;if(gt)if(u=te,t?n&&q1(t,s,3,[a(),d?[]:void 0,u]):a(),o==="sync"){const f=w4();m=f.__watcherHandles||(f.__watcherHandles=[])}else return te;let g=d?new Array(e.length).fill(Hn):Hn;const v=()=>{if(y.active)if(t){const f=y.run();(i||c||(d?f.some((h,C)=>tn(h,g[C])):tn(f,g)))&&(w&&w(),q1(t,s,3,[f,g===Hn?void 0:d&&g[0]===Hn?[]:g,u]),g=f)}else y.run()};v.allowRecurse=!!t;let L;o==="sync"?L=v:o==="post"?L=()=>E1(v,s&&s.suspense):(v.pre=!0,s&&(v.id=s.uid),L=()=>pi(v));const y=new t0(a,L);t?n?v():g=y.run():o==="post"?E1(y.run.bind(y),s&&s.suspense):y.run();const p=()=>{y.stop(),s&&s.scope&&Yo(s.scope.effects,y)};return m&&m.push(p),p}function yr(e,t,n){const i=this.proxy,o=_1(e)?e.includes(".")?Z5(i,e):()=>i[e]:e.bind(i,i);let l;n1(t)?l=t:(l=t.handler,n=t);const r=k1;pt(this);const s=c0(o,l.bind(i),n);return r?pt(r):Ke(),s}function Z5(e,t){const n=t.split(".");return()=>{let i=e;for(let o=0;o<n.length&&i;o++)i=i[n[o]];return i}}function Ue(e,t){if(!y1(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),V1(e))Ue(e.value,t);else if(Q(e))for(let n=0;n<e.length;n++)Ue(e[n],t);else if(e5(e)||rt(e))e.forEach(n=>{Ue(n,t)});else if(i5(e))for(const n in e)Ue(e[n],t);return e}function br(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return p0(()=>{e.isMounted=!0}),ui(()=>{e.isUnmounting=!0}),e}const I1=[Function,Array],_r={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:I1,onEnter:I1,onAfterEnter:I1,onEnterCancelled:I1,onBeforeLeave:I1,onLeave:I1,onAfterLeave:I1,onLeaveCancelled:I1,onBeforeAppear:I1,onAppear:I1,onAfterAppear:I1,onAppearCancelled:I1},setup(e,{slots:t}){const n=wi(),i=br();let o;return()=>{const l=t.default&&S5(t.default(),!0);if(!l||!l.length)return;let r=l[0];if(l.length>1){for(const v of l)if(v.type!==ne){r=v;break}}const s=f1(e),{mode:a}=s;if(i.isLeaving)return Si(r);const c=i2(r);if(!c)return Si(r);const d=co(c,s,i,n);Wn(c,d);const w=n.subTree,u=w&&i2(w);let m=!1;const{getTransitionKey:g}=c.type;if(g){const v=g();o===void 0?o=v:v!==o&&(o=v,m=!0)}if(u&&u.type!==ne&&(!ze(c,u)||m)){const v=co(u,s,i,n);if(Wn(u,v),a==="out-in")return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Si(r);a==="in-out"&&c.type!==ne&&(v.delayLeave=(L,y,p)=>{const f=A5(i,u);f[String(u.key)]=u,L._leaveCb=()=>{y(),L._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=p})}return r}}},E5=_r;function A5(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function co(e,t,n,i){const{appear:o,mode:l,persisted:r=!1,onBeforeEnter:s,onEnter:a,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:w,onLeave:u,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:L,onAfterAppear:y,onAppearCancelled:p}=t,f=String(e.key),h=A5(n,e),C=(V,Z)=>{V&&q1(V,i,9,Z)},x=(V,Z)=>{const S=Z[1];C(V,Z),Q(V)?V.every(R=>R.length<=1)&&S():V.length<=1&&S()},k={mode:l,persisted:r,beforeEnter(V){let Z=s;if(!n.isMounted)if(o)Z=v||s;else return;V._leaveCb&&V._leaveCb(!0);const S=h[f];S&&ze(e,S)&&S.el._leaveCb&&S.el._leaveCb(),C(Z,[V])},enter(V){let Z=a,S=c,R=d;if(!n.isMounted)if(o)Z=L||a,S=y||c,R=p||d;else return;let T=!1;const K=V._enterCb=p1=>{T||(T=!0,p1?C(R,[V]):C(S,[V]),k.delayedLeave&&k.delayedLeave(),V._enterCb=void 0)};Z?x(Z,[V,K]):K()},leave(V,Z){const S=String(e.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return Z();C(w,[V]);let R=!1;const T=V._leaveCb=K=>{R||(R=!0,Z(),K?C(g,[V]):C(m,[V]),V._leaveCb=void 0,h[S]===e&&delete h[S])};h[S]=e,u?x(u,[V,T]):T()},clone(V){return co(V,t,n,i)}};return k}function Si(e){if(vn(e))return e=me(e),e.children=null,e}function i2(e){return vn(e)?e.children?e.children[0]:void 0:e}function Wn(e,t){e.shapeFlag&6&&e.component?Wn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function S5(e,t=!1,n){let i=[],o=0;for(let l=0;l<e.length;l++){let r=e[l];const s=n==null?r.key:String(n)+String(r.key!=null?r.key:l);r.type===se?(r.patchFlag&128&&o++,i=i.concat(S5(r.children,t,s))):(t||r.type!==ne)&&i.push(s!=null?me(r,{key:s}):r)}if(o>1)for(let l=0;l<i.length;l++)i[l].patchFlag=-2;return i}function d0(e){return n1(e)?{setup:e,name:e.name}:e}const Ut=e=>!!e.type.__asyncLoader;function Ip(e){n1(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:i,delay:o=200,timeout:l,suspensible:r=!0,onError:s}=e;let a=null,c,d=0;const w=()=>(d++,a=null,u()),u=()=>{let m;return a||(m=a=t().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),s)return new Promise((v,L)=>{s(g,()=>v(w()),()=>L(g),d+1)});throw g}).then(g=>m!==a&&a?a:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return d0({name:"AsyncComponentWrapper",__asyncLoader:u,get __asyncResolved(){return c},setup(){const m=k1;if(c)return()=>$i(c,m);const g=p=>{a=null,hn(p,m,13,!i)};if(r&&m.suspense||gt)return u().then(p=>()=>$i(p,m)).catch(p=>(g(p),()=>i?Z1(i,{error:p}):null));const v=Dt(!1),L=Dt(),y=Dt(!!o);return o&&setTimeout(()=>{y.value=!1},o),l!=null&&setTimeout(()=>{if(!v.value&&!L.value){const p=new Error(`Async component timed out after ${l}ms.`);g(p),L.value=p}},l),u().then(()=>{v.value=!0,m.parent&&vn(m.parent.vnode)&&pi(m.parent.update)}).catch(p=>{g(p),L.value=p}),()=>{if(v.value&&c)return $i(c,m);if(L.value&&i)return Z1(i,{error:L.value});if(n&&!y.value)return Z1(n)}}})}function $i(e,t){const{ref:n,props:i,children:o,ce:l}=t.vnode,r=Z1(e,i,o);return r.ref=n,r.ce=l,delete t.vnode.ce,r}const vn=e=>e.type.__isKeepAlive,Hr={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=wi(),i=n.ctx;if(!i.renderer)return()=>{const p=t.default&&t.default();return p&&p.length===1?p[0]:p};const o=new Map,l=new Set;let r=null;const s=n.suspense,{renderer:{p:a,m:c,um:d,o:{createElement:w}}}=i,u=w("div");i.activate=(p,f,h,C,x)=>{const k=p.component;c(p,f,h,0,s),a(k.vnode,p,f,h,k,s,C,p.slotScopeIds,x),E1(()=>{k.isDeactivated=!1,k.a&&zt(k.a);const V=p.props&&p.props.onVnodeMounted;V&&D1(V,k.parent,p)},s)},i.deactivate=p=>{const f=p.component;c(p,u,null,1,s),E1(()=>{f.da&&zt(f.da);const h=p.props&&p.props.onVnodeUnmounted;h&&D1(h,f.parent,p),f.isDeactivated=!0},s)};function m(p){Bi(p),d(p,n,s,!0)}function g(p){o.forEach((f,h)=>{const C=wo(f.type);C&&(!p||!p(C))&&v(h)})}function v(p){const f=o.get(p);!r||f.type!==r.type?m(f):r&&Bi(r),o.delete(p),l.delete(p)}ct(()=>[e.include,e.exclude],([p,f])=>{p&&g(h=>Ot(p,h)),f&&g(h=>!Ot(f,h))},{flush:"post",deep:!0});let L=null;const y=()=>{L!=null&&o.set(L,Ti(n.subTree))};return p0(y),B5(y),ui(()=>{o.forEach(p=>{const{subTree:f,suspense:h}=n,C=Ti(f);if(p.type===C.type){Bi(C);const x=C.component.da;x&&E1(x,h);return}m(p)})}),()=>{if(L=null,!t.default)return null;const p=t.default(),f=p[0];if(p.length>1)return r=null,p;if(!Gn(f)||!(f.shapeFlag&4)&&!(f.shapeFlag&128))return r=null,f;let h=Ti(f);const C=h.type,x=wo(Ut(h)?h.type.__asyncResolved||{}:C),{include:k,exclude:V,max:Z}=e;if(k&&(!x||!Ot(k,x))||V&&x&&Ot(V,x))return r=h,f;const S=h.key==null?C:h.key,R=o.get(S);return h.el&&(h=me(h),f.shapeFlag&128&&(f.ssContent=h)),L=S,R?(h.el=R.el,h.component=R.component,h.transition&&Wn(h,h.transition),h.shapeFlag|=512,l.delete(S),l.add(S)):(l.add(S),Z&&l.size>parseInt(Z,10)&&v(l.values().next().value)),h.shapeFlag|=256,r=h,V5(f.type)?f:h}}},jp=Hr;function Ot(e,t){return Q(e)?e.some(n=>Ot(n,t)):_1(e)?e.split(",").includes(t):e.test?e.test(t):!1}function Mr(e,t){$5(e,"a",t)}function kr(e,t){$5(e,"da",t)}function $5(e,t,n=k1){const i=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(fi(t,i,n),n){let o=n.parent;for(;o&&o.parent;)vn(o.parent.vnode)&&Vr(i,t,n,o),o=o.parent}}function Vr(e,t,n,i){const o=fi(t,e,i,!0);T5(()=>{Yo(i[t],o)},n)}function Bi(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ti(e){return e.shapeFlag&128?e.ssContent:e}function fi(e,t,n=k1,i=!1){if(n){const o=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;Mt(),pt(n);const s=q1(t,n,e,r);return Ke(),kt(),s});return i?o.unshift(l):o.push(l),l}}const ye=e=>(t,n=k1)=>(!gt||e==="sp")&&fi(e,(...i)=>t(...i),n),Zr=ye("bm"),p0=ye("m"),Er=ye("bu"),B5=ye("u"),ui=ye("bum"),T5=ye("um"),Ar=ye("sp"),Sr=ye("rtg"),$r=ye("rtc");function Br(e,t=k1){fi("ec",e,t)}function zp(e,t){const n=R1;if(n===null)return e;const i=Ci(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[r,s,a,c=L1]=t[l];r&&(n1(r)&&(r={mounted:r,updated:r}),r.deep&&Ue(s),o.push({dir:r,instance:i,value:s,oldValue:void 0,arg:a,modifiers:c}))}return e}function Oe(e,t,n,i){const o=e.dirs,l=t&&t.dirs;for(let r=0;r<o.length;r++){const s=o[r];l&&(s.oldValue=l[r].value);let a=s.dir[i];a&&(Mt(),q1(a,n,8,[e.el,s,e,t]),kt())}}const g0="components",Tr="directives";function Dp(e,t){return f0(g0,e,!0,t)||e}const F5=Symbol();function Up(e){return _1(e)?f0(g0,e,!1)||e:e||F5}function qp(e){return f0(Tr,e)}function f0(e,t,n=!0,i=!1){const o=R1||k1;if(o){const l=o.type;if(e===g0){const s=wo(l,!1);if(s&&(s===t||s===pe(t)||s===ci(pe(t))))return l}const r=o2(o[e]||l[e],t)||o2(o.appContext[e],t);return!r&&i?l:r}}function o2(e,t){return e&&(e[t]||e[pe(t)]||e[ci(pe(t))])}function Wp(e,t,n,i){let o;const l=n&&n[i];if(Q(e)||_1(e)){o=new Array(e.length);for(let r=0,s=e.length;r<s;r++)o[r]=t(e[r],r,void 0,l&&l[r])}else if(typeof e=="number"){o=new Array(e);for(let r=0;r<e;r++)o[r]=t(r+1,r,void 0,l&&l[r])}else if(y1(e))if(e[Symbol.iterator])o=Array.from(e,(r,s)=>t(r,s,void 0,l&&l[s]));else{const r=Object.keys(e);o=new Array(r.length);for(let s=0,a=r.length;s<a;s++){const c=r[s];o[s]=t(e[c],c,s,l&&l[s])}}else o=[];return n&&(n[i]=o),o}const po=e=>e?K5(e)?Ci(e)||e.proxy:po(e.parent):null,qt=A1(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>po(e.parent),$root:e=>po(e.root),$emit:e=>e.emit,$options:e=>u0(e),$forceUpdate:e=>e.f||(e.f=()=>pi(e.update)),$nextTick:e=>e.n||(e.n=a0.bind(e.proxy)),$watch:e=>yr.bind(e)}),Fi=(e,t)=>e!==L1&&!e.__isScriptSetup&&d1(e,t),Fr={get({_:e},t){const{ctx:n,setupState:i,data:o,props:l,accessCache:r,type:s,appContext:a}=e;let c;if(t[0]!=="$"){const m=r[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return l[t]}else{if(Fi(i,t))return r[t]=1,i[t];if(o!==L1&&d1(o,t))return r[t]=2,o[t];if((c=e.propsOptions[0])&&d1(c,t))return r[t]=3,l[t];if(n!==L1&&d1(n,t))return r[t]=4,n[t];go&&(r[t]=0)}}const d=qt[t];let w,u;if(d)return t==="$attrs"&&P1(e,"get",t),d(e);if((w=s.__cssModules)&&(w=w[t]))return w;if(n!==L1&&d1(n,t))return r[t]=4,n[t];if(u=a.config.globalProperties,d1(u,t))return u[t]},set({_:e},t,n){const{data:i,setupState:o,ctx:l}=e;return Fi(o,t)?(o[t]=n,!0):i!==L1&&d1(i,t)?(i[t]=n,!0):d1(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:l}},r){let s;return!!n[r]||e!==L1&&d1(e,r)||Fi(t,r)||(s=l[0])&&d1(s,r)||d1(i,r)||d1(qt,r)||d1(o.config.globalProperties,r)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:d1(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let go=!0;function Or(e){const t=u0(e),n=e.proxy,i=e.ctx;go=!1,t.beforeCreate&&l2(t.beforeCreate,e,"bc");const{data:o,computed:l,methods:r,watch:s,provide:a,inject:c,created:d,beforeMount:w,mounted:u,beforeUpdate:m,updated:g,activated:v,deactivated:L,beforeDestroy:y,beforeUnmount:p,destroyed:f,unmounted:h,render:C,renderTracked:x,renderTriggered:k,errorCaptured:V,serverPrefetch:Z,expose:S,inheritAttrs:R,components:T,directives:K,filters:p1}=t;if(c&&Rr(c,i,null,e.appContext.config.unwrapInjectedRef),r)for(const e1 in r){const q=r[e1];n1(q)&&(i[e1]=q.bind(n))}if(o){const e1=o.call(n,n);y1(e1)&&(e.data=un(e1))}if(go=!0,l)for(const e1 in l){const q=l[e1],o1=n1(q)?q.bind(n,n):n1(q.get)?q.get.bind(n,n):te,m1=!n1(q)&&n1(q.set)?q.set.bind(n):te,x1=U1({get:o1,set:m1});Object.defineProperty(i,e1,{enumerable:!0,configurable:!0,get:()=>x1.value,set:t1=>x1.value=t1})}if(s)for(const e1 in s)O5(s[e1],i,n,e1);if(a){const e1=n1(a)?a.call(n):a;Reflect.ownKeys(e1).forEach(q=>{Rn(q,e1[q])})}d&&l2(d,e,"c");function i1(e1,q){Q(q)?q.forEach(o1=>e1(o1.bind(n))):q&&e1(q.bind(n))}if(i1(Zr,w),i1(p0,u),i1(Er,m),i1(B5,g),i1(Mr,v),i1(kr,L),i1(Br,V),i1($r,x),i1(Sr,k),i1(ui,p),i1(T5,h),i1(Ar,Z),Q(S))if(S.length){const e1=e.exposed||(e.exposed={});S.forEach(q=>{Object.defineProperty(e1,q,{get:()=>n[q],set:o1=>n[q]=o1})})}else e.exposed||(e.exposed={});C&&e.render===te&&(e.render=C),R!=null&&(e.inheritAttrs=R),T&&(e.components=T),K&&(e.directives=K)}function Rr(e,t,n=te,i=!1){Q(e)&&(e=fo(e));for(const o in e){const l=e[o];let r;y1(l)?"default"in l?r=W1(l.from||o,l.default,!0):r=W1(l.from||o):r=W1(l),V1(r)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):t[o]=r}}function l2(e,t,n){q1(Q(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function O5(e,t,n,i){const o=i.includes(".")?Z5(n,i):()=>n[i];if(_1(e)){const l=t[e];n1(l)&&ct(o,l)}else if(n1(e))ct(o,e.bind(n));else if(y1(e))if(Q(e))e.forEach(l=>O5(l,t,n,i));else{const l=n1(e.handler)?e.handler.bind(n):t[e.handler];n1(l)&&ct(o,l,e)}}function u0(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,s=l.get(t);let a;return s?a=s:!o.length&&!n&&!i?a=t:(a={},o.length&&o.forEach(c=>Kn(a,c,r,!0)),Kn(a,t,r)),y1(t)&&l.set(t,a),a}function Kn(e,t,n,i=!1){const{mixins:o,extends:l}=t;l&&Kn(e,l,n,!0),o&&o.forEach(r=>Kn(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const s=Pr[r]||n&&n[r];e[r]=s?s(e[r],t[r]):t[r]}return e}const Pr={data:r2,props:Ie,emits:Ie,methods:Ie,computed:Ie,beforeCreate:B1,created:B1,beforeMount:B1,mounted:B1,beforeUpdate:B1,updated:B1,beforeDestroy:B1,beforeUnmount:B1,destroyed:B1,unmounted:B1,activated:B1,deactivated:B1,errorCaptured:B1,serverPrefetch:B1,components:Ie,directives:Ie,watch:Ir,provide:r2,inject:Nr};function r2(e,t){return t?e?function(){return A1(n1(e)?e.call(this,this):e,n1(t)?t.call(this,this):t)}:t:e}function Nr(e,t){return Ie(fo(e),fo(t))}function fo(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function B1(e,t){return e?[...new Set([].concat(e,t))]:t}function Ie(e,t){return e?A1(A1(Object.create(null),e),t):t}function Ir(e,t){if(!e)return t;if(!t)return e;const n=A1(Object.create(null),e);for(const i in t)n[i]=B1(e[i],t[i]);return n}function jr(e,t,n,i=!1){const o={},l={};Dn(l,vi,1),e.propsDefaults=Object.create(null),R5(e,t,o,l);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:tr(o):e.type.props?e.props=o:e.props=l,e.attrs=l}function zr(e,t,n,i){const{props:o,attrs:l,vnode:{patchFlag:r}}=e,s=f1(o),[a]=e.propsOptions;let c=!1;if((i||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let w=0;w<d.length;w++){let u=d[w];if(gi(e.emitsOptions,u))continue;const m=t[u];if(a)if(d1(l,u))m!==l[u]&&(l[u]=m,c=!0);else{const g=pe(u);o[g]=uo(a,s,g,m,e,!1)}else m!==l[u]&&(l[u]=m,c=!0)}}}else{R5(e,t,o,l)&&(c=!0);let d;for(const w in s)(!t||!d1(t,w)&&((d=Ht(w))===w||!d1(t,d)))&&(a?n&&(n[w]!==void 0||n[d]!==void 0)&&(o[w]=uo(a,s,w,void 0,e,!0)):delete o[w]);if(l!==s)for(const w in l)(!t||!d1(t,w))&&(delete l[w],c=!0)}c&&Ce(e,"set","$attrs")}function R5(e,t,n,i){const[o,l]=e.propsOptions;let r=!1,s;if(t)for(let a in t){if(On(a))continue;const c=t[a];let d;o&&d1(o,d=pe(a))?!l||!l.includes(d)?n[d]=c:(s||(s={}))[d]=c:gi(e.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,r=!0)}if(l){const a=f1(n),c=s||L1;for(let d=0;d<l.length;d++){const w=l[d];n[w]=uo(o,a,w,c[w],e,!d1(c,w))}}return r}function uo(e,t,n,i,o,l){const r=e[n];if(r!=null){const s=d1(r,"default");if(s&&i===void 0){const a=r.default;if(r.type!==Function&&n1(a)){const{propsDefaults:c}=o;n in c?i=c[n]:(pt(o),i=c[n]=a.call(null,t),Ke())}else i=a}r[0]&&(l&&!s?i=!1:r[1]&&(i===""||i===Ht(n))&&(i=!0))}return i}function P5(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const l=e.props,r={},s=[];let a=!1;if(!n1(e)){const d=w=>{a=!0;const[u,m]=P5(w,t,!0);A1(r,u),m&&s.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!a)return y1(e)&&i.set(e,lt),lt;if(Q(l))for(let d=0;d<l.length;d++){const w=pe(l[d]);s2(w)&&(r[w]=L1)}else if(l)for(const d in l){const w=pe(d);if(s2(w)){const u=l[d],m=r[w]=Q(u)||n1(u)?{type:u}:Object.assign({},u);if(m){const g=d2(Boolean,m.type),v=d2(String,m.type);m[0]=g>-1,m[1]=v<0||g<v,(g>-1||d1(m,"default"))&&s.push(w)}}}const c=[r,s];return y1(e)&&i.set(e,c),c}function s2(e){return e[0]!=="$"}function a2(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function c2(e,t){return a2(e)===a2(t)}function d2(e,t){return Q(t)?t.findIndex(n=>c2(n,e)):n1(t)&&c2(t,e)?0:-1}const N5=e=>e[0]==="_"||e==="$stable",h0=e=>Q(e)?e.map(ae):[ae(e)],Dr=(e,t,n)=>{if(t._n)return t;const i=hr((...o)=>h0(t(...o)),n);return i._c=!1,i},I5=(e,t,n)=>{const i=e._ctx;for(const o in e){if(N5(o))continue;const l=e[o];if(n1(l))t[o]=Dr(o,l,i);else if(l!=null){const r=h0(l);t[o]=()=>r}}},j5=(e,t)=>{const n=h0(t);e.slots.default=()=>n},Ur=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=f1(t),Dn(t,"_",n)):I5(t,e.slots={})}else e.slots={},t&&j5(e,t);Dn(e.slots,vi,1)},qr=(e,t,n)=>{const{vnode:i,slots:o}=e;let l=!0,r=L1;if(i.shapeFlag&32){const s=t._;s?n&&s===1?l=!1:(A1(o,t),!n&&s===1&&delete o._):(l=!t.$stable,I5(t,o)),r=t}else t&&(j5(e,t),r={default:1});if(l)for(const s in o)!N5(s)&&!(s in r)&&delete o[s]};function z5(){return{app:null,config:{isNativeTag:L3,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wr=0;function Kr(e,t){return function(i,o=null){n1(i)||(i=Object.assign({},i)),o!=null&&!y1(o)&&(o=null);const l=z5(),r=new Set;let s=!1;const a=l.app={_uid:Wr++,_component:i,_props:o,_container:null,_context:l,_instance:null,version:m0,get config(){return l.config},set config(c){},use(c,...d){return r.has(c)||(c&&n1(c.install)?(r.add(c),c.install(a,...d)):n1(c)&&(r.add(c),c(a,...d))),a},mixin(c){return l.mixins.includes(c)||l.mixins.push(c),a},component(c,d){return d?(l.components[c]=d,a):l.components[c]},directive(c,d){return d?(l.directives[c]=d,a):l.directives[c]},mount(c,d,w){if(!s){const u=Z1(i,o);return u.appContext=l,d&&t?t(u,c):e(u,c,w),s=!0,a._container=c,c.__vue_app__=a,Ci(u.component)||u.component.proxy}},unmount(){s&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,d){return l.provides[c]=d,a}};return a}}function ho(e,t,n,i,o=!1){if(Q(e)){e.forEach((u,m)=>ho(u,t&&(Q(t)?t[m]:t),n,i,o));return}if(Ut(i)&&!o)return;const l=i.shapeFlag&4?Ci(i.component)||i.component.proxy:i.el,r=o?null:l,{i:s,r:a}=e,c=t&&t.r,d=s.refs===L1?s.refs={}:s.refs,w=s.setupState;if(c!=null&&c!==a&&(_1(c)?(d[c]=null,d1(w,c)&&(w[c]=null)):V1(c)&&(c.value=null)),n1(a))$e(a,s,12,[r,d]);else{const u=_1(a),m=V1(a);if(u||m){const g=()=>{if(e.f){const v=u?d1(w,a)?w[a]:d[a]:a.value;o?Q(v)&&Yo(v,l):Q(v)?v.includes(l)||v.push(l):u?(d[a]=[l],d1(w,a)&&(w[a]=d[a])):(a.value=[l],e.k&&(d[e.k]=a.value))}else u?(d[a]=r,d1(w,a)&&(w[a]=r)):m&&(a.value=r,e.k&&(d[e.k]=r))};r?(g.id=-1,E1(g,n)):g()}}}const E1=xr;function Gr(e){return Yr(e)}function Yr(e,t){const n=k3();n.__VUE__=!0;const{insert:i,remove:o,patchProp:l,createElement:r,createText:s,createComment:a,setText:c,setElementText:d,parentNode:w,nextSibling:u,setScopeId:m=te,insertStaticContent:g}=e,v=(b,M,E,$=null,B=null,I=null,D=!1,N=null,j=!!M.dynamicChildren)=>{if(b===M)return;b&&!ze(b,M)&&($=P(b),t1(b,B,I,!0),b=null),M.patchFlag===-2&&(j=!1,M.dynamicChildren=null);const{type:F,ref:Y,shapeFlag:W}=M;switch(F){case hi:L(b,M,E,$);break;case ne:y(b,M,E,$);break;case Pn:b==null&&p(M,E,$,D);break;case se:T(b,M,E,$,B,I,D,N,j);break;default:W&1?C(b,M,E,$,B,I,D,N,j):W&6?K(b,M,E,$,B,I,D,N,j):(W&64||W&128)&&F.process(b,M,E,$,B,I,D,N,j,l1)}Y!=null&&B&&ho(Y,b&&b.ref,I,M||b,!M)},L=(b,M,E,$)=>{if(b==null)i(M.el=s(M.children),E,$);else{const B=M.el=b.el;M.children!==b.children&&c(B,M.children)}},y=(b,M,E,$)=>{b==null?i(M.el=a(M.children||""),E,$):M.el=b.el},p=(b,M,E,$)=>{[b.el,b.anchor]=g(b.children,M,E,$,b.el,b.anchor)},f=({el:b,anchor:M},E,$)=>{let B;for(;b&&b!==M;)B=u(b),i(b,E,$),b=B;i(M,E,$)},h=({el:b,anchor:M})=>{let E;for(;b&&b!==M;)E=u(b),o(b),b=E;o(M)},C=(b,M,E,$,B,I,D,N,j)=>{D=D||M.type==="svg",b==null?x(M,E,$,B,I,D,N,j):Z(b,M,B,I,D,N,j)},x=(b,M,E,$,B,I,D,N)=>{let j,F;const{type:Y,props:W,shapeFlag:G,transition:J,dirs:s1}=b;if(j=b.el=r(b.type,I,W&&W.is,W),G&8?d(j,b.children):G&16&&V(b.children,j,null,$,B,I&&Y!=="foreignObject",D,N),s1&&Oe(b,null,$,"created"),W){for(const g1 in W)g1!=="value"&&!On(g1)&&l(j,g1,null,W[g1],I,b.children,$,B,z);"value"in W&&l(j,"value",null,W.value),(F=W.onVnodeBeforeMount)&&D1(F,$,b)}k(j,b,b.scopeId,D,$),s1&&Oe(b,null,$,"beforeMount");const h1=(!B||B&&!B.pendingBranch)&&J&&!J.persisted;h1&&J.beforeEnter(j),i(j,M,E),((F=W&&W.onVnodeMounted)||h1||s1)&&E1(()=>{F&&D1(F,$,b),h1&&J.enter(j),s1&&Oe(b,null,$,"mounted")},B)},k=(b,M,E,$,B)=>{if(E&&m(b,E),$)for(let I=0;I<$.length;I++)m(b,$[I]);if(B){let I=B.subTree;if(M===I){const D=B.vnode;k(b,D,D.scopeId,D.slotScopeIds,B.parent)}}},V=(b,M,E,$,B,I,D,N,j=0)=>{for(let F=j;F<b.length;F++){const Y=b[F]=N?ke(b[F]):ae(b[F]);v(null,Y,M,E,$,B,I,D,N)}},Z=(b,M,E,$,B,I,D)=>{const N=M.el=b.el;let{patchFlag:j,dynamicChildren:F,dirs:Y}=M;j|=b.patchFlag&16;const W=b.props||L1,G=M.props||L1;let J;E&&Re(E,!1),(J=G.onVnodeBeforeUpdate)&&D1(J,E,M,b),Y&&Oe(M,b,E,"beforeUpdate"),E&&Re(E,!0);const s1=B&&M.type!=="foreignObject";if(F?S(b.dynamicChildren,F,N,E,$,s1,I):D||q(b,M,N,null,E,$,s1,I,!1),j>0){if(j&16)R(N,M,W,G,E,$,B);else if(j&2&&W.class!==G.class&&l(N,"class",null,G.class,B),j&4&&l(N,"style",W.style,G.style,B),j&8){const h1=M.dynamicProps;for(let g1=0;g1<h1.length;g1++){const M1=h1[g1],J1=W[M1],et=G[M1];(et!==J1||M1==="value")&&l(N,M1,J1,et,B,b.children,E,$,z)}}j&1&&b.children!==M.children&&d(N,M.children)}else!D&&F==null&&R(N,M,W,G,E,$,B);((J=G.onVnodeUpdated)||Y)&&E1(()=>{J&&D1(J,E,M,b),Y&&Oe(M,b,E,"updated")},$)},S=(b,M,E,$,B,I,D)=>{for(let N=0;N<M.length;N++){const j=b[N],F=M[N],Y=j.el&&(j.type===se||!ze(j,F)||j.shapeFlag&70)?w(j.el):E;v(j,F,Y,null,$,B,I,D,!0)}},R=(b,M,E,$,B,I,D)=>{if(E!==$){if(E!==L1)for(const N in E)!On(N)&&!(N in $)&&l(b,N,E[N],null,D,M.children,B,I,z);for(const N in $){if(On(N))continue;const j=$[N],F=E[N];j!==F&&N!=="value"&&l(b,N,F,j,D,M.children,B,I,z)}"value"in $&&l(b,"value",E.value,$.value)}},T=(b,M,E,$,B,I,D,N,j)=>{const F=M.el=b?b.el:s(""),Y=M.anchor=b?b.anchor:s("");let{patchFlag:W,dynamicChildren:G,slotScopeIds:J}=M;J&&(N=N?N.concat(J):J),b==null?(i(F,E,$),i(Y,E,$),V(M.children,E,Y,B,I,D,N,j)):W>0&&W&64&&G&&b.dynamicChildren?(S(b.dynamicChildren,G,E,B,I,D,N),(M.key!=null||B&&M===B.subTree)&&v0(b,M,!0)):q(b,M,E,Y,B,I,D,N,j)},K=(b,M,E,$,B,I,D,N,j)=>{M.slotScopeIds=N,b==null?M.shapeFlag&512?B.ctx.activate(M,E,$,D,j):p1(M,E,$,B,I,D,j):H1(b,M,j)},p1=(b,M,E,$,B,I,D)=>{const N=b.component=d4(b,$,B);if(vn(b)&&(N.ctx.renderer=l1),p4(N),N.asyncDep){if(B&&B.registerDep(N,i1),!b.el){const j=N.subTree=Z1(ne);y(null,j,M,E)}return}i1(N,b,M,E,B,I,D)},H1=(b,M,E)=>{const $=M.component=b.component;if(Cr(b,M,E))if($.asyncDep&&!$.asyncResolved){e1($,M,E);return}else $.next=M,pr($.update),$.update();else M.el=b.el,$.vnode=M},i1=(b,M,E,$,B,I,D)=>{const N=()=>{if(b.isMounted){let{next:Y,bu:W,u:G,parent:J,vnode:s1}=b,h1=Y,g1;Re(b,!1),Y?(Y.el=s1.el,e1(b,Y,D)):Y=s1,W&&zt(W),(g1=Y.props&&Y.props.onVnodeBeforeUpdate)&&D1(g1,J,Y,s1),Re(b,!0);const M1=Ai(b),J1=b.subTree;b.subTree=M1,v(J1,M1,w(J1.el),P(J1),b,B,I),Y.el=M1.el,h1===null&&mr(b,M1.el),G&&E1(G,B),(g1=Y.props&&Y.props.onVnodeUpdated)&&E1(()=>D1(g1,J,Y,s1),B)}else{let Y;const{el:W,props:G}=M,{bm:J,m:s1,parent:h1}=b,g1=Ut(M);if(Re(b,!1),J&&zt(J),!g1&&(Y=G&&G.onVnodeBeforeMount)&&D1(Y,h1,M),Re(b,!0),W&&X){const M1=()=>{b.subTree=Ai(b),X(W,b.subTree,b,B,null)};g1?M.type.__asyncLoader().then(()=>!b.isUnmounted&&M1()):M1()}else{const M1=b.subTree=Ai(b);v(null,M1,E,$,b,B,I),M.el=M1.el}if(s1&&E1(s1,B),!g1&&(Y=G&&G.onVnodeMounted)){const M1=M;E1(()=>D1(Y,h1,M1),B)}(M.shapeFlag&256||h1&&Ut(h1.vnode)&&h1.vnode.shapeFlag&256)&&b.a&&E1(b.a,B),b.isMounted=!0,M=E=$=null}},j=b.effect=new t0(N,()=>pi(F),b.scope),F=b.update=()=>j.run();F.id=b.uid,Re(b,!0),F()},e1=(b,M,E)=>{M.component=b;const $=b.vnode.props;b.vnode=M,b.next=null,zr(b,M.props,$,E),qr(b,M.children,E),Mt(),t2(),kt()},q=(b,M,E,$,B,I,D,N,j=!1)=>{const F=b&&b.children,Y=b?b.shapeFlag:0,W=M.children,{patchFlag:G,shapeFlag:J}=M;if(G>0){if(G&128){m1(F,W,E,$,B,I,D,N,j);return}else if(G&256){o1(F,W,E,$,B,I,D,N,j);return}}J&8?(Y&16&&z(F,B,I),W!==F&&d(E,W)):Y&16?J&16?m1(F,W,E,$,B,I,D,N,j):z(F,B,I,!0):(Y&8&&d(E,""),J&16&&V(W,E,$,B,I,D,N,j))},o1=(b,M,E,$,B,I,D,N,j)=>{b=b||lt,M=M||lt;const F=b.length,Y=M.length,W=Math.min(F,Y);let G;for(G=0;G<W;G++){const J=M[G]=j?ke(M[G]):ae(M[G]);v(b[G],J,E,null,B,I,D,N,j)}F>Y?z(b,B,I,!0,!1,W):V(M,E,$,B,I,D,N,j,W)},m1=(b,M,E,$,B,I,D,N,j)=>{let F=0;const Y=M.length;let W=b.length-1,G=Y-1;for(;F<=W&&F<=G;){const J=b[F],s1=M[F]=j?ke(M[F]):ae(M[F]);if(ze(J,s1))v(J,s1,E,null,B,I,D,N,j);else break;F++}for(;F<=W&&F<=G;){const J=b[W],s1=M[G]=j?ke(M[G]):ae(M[G]);if(ze(J,s1))v(J,s1,E,null,B,I,D,N,j);else break;W--,G--}if(F>W){if(F<=G){const J=G+1,s1=J<Y?M[J].el:$;for(;F<=G;)v(null,M[F]=j?ke(M[F]):ae(M[F]),E,s1,B,I,D,N,j),F++}}else if(F>G)for(;F<=W;)t1(b[F],B,I,!0),F++;else{const J=F,s1=F,h1=new Map;for(F=s1;F<=G;F++){const O1=M[F]=j?ke(M[F]):ae(M[F]);O1.key!=null&&h1.set(O1.key,F)}let g1,M1=0;const J1=G-s1+1;let et=!1,D0=0;const Vt=new Array(J1);for(F=0;F<J1;F++)Vt[F]=0;for(F=J;F<=W;F++){const O1=b[F];if(M1>=J1){t1(O1,B,I,!0);continue}let le;if(O1.key!=null)le=h1.get(O1.key);else for(g1=s1;g1<=G;g1++)if(Vt[g1-s1]===0&&ze(O1,M[g1])){le=g1;break}le===void 0?t1(O1,B,I,!0):(Vt[le-s1]=F+1,le>=D0?D0=le:et=!0,v(O1,M[le],E,null,B,I,D,N,j),M1++)}const U0=et?Xr(Vt):lt;for(g1=U0.length-1,F=J1-1;F>=0;F--){const O1=s1+F,le=M[O1],q0=O1+1<Y?M[O1+1].el:$;Vt[F]===0?v(null,le,E,q0,B,I,D,N,j):et&&(g1<0||F!==U0[g1]?x1(le,E,q0,2):g1--)}}},x1=(b,M,E,$,B=null)=>{const{el:I,type:D,transition:N,children:j,shapeFlag:F}=b;if(F&6){x1(b.component.subTree,M,E,$);return}if(F&128){b.suspense.move(M,E,$);return}if(F&64){D.move(b,M,E,l1);return}if(D===se){i(I,M,E);for(let W=0;W<j.length;W++)x1(j[W],M,E,$);i(b.anchor,M,E);return}if(D===Pn){f(b,M,E);return}if($!==2&&F&1&&N)if($===0)N.beforeEnter(I),i(I,M,E),E1(()=>N.enter(I),B);else{const{leave:W,delayLeave:G,afterLeave:J}=N,s1=()=>i(I,M,E),h1=()=>{W(I,()=>{s1(),J&&J()})};G?G(I,s1,h1):h1()}else i(I,M,E)},t1=(b,M,E,$=!1,B=!1)=>{const{type:I,props:D,ref:N,children:j,dynamicChildren:F,shapeFlag:Y,patchFlag:W,dirs:G}=b;if(N!=null&&ho(N,null,E,b,!0),Y&256){M.ctx.deactivate(b);return}const J=Y&1&&G,s1=!Ut(b);let h1;if(s1&&(h1=D&&D.onVnodeBeforeUnmount)&&D1(h1,M,b),Y&6)A(b.component,E,$);else{if(Y&128){b.suspense.unmount(E,$);return}J&&Oe(b,null,M,"beforeUnmount"),Y&64?b.type.remove(b,M,E,B,l1,$):F&&(I!==se||W>0&&W&64)?z(F,M,E,!1,!0):(I===se&&W&384||!B&&Y&16)&&z(j,M,E),$&&$1(b)}(s1&&(h1=D&&D.onVnodeUnmounted)||J)&&E1(()=>{h1&&D1(h1,M,b),J&&Oe(b,null,M,"unmounted")},E)},$1=b=>{const{type:M,el:E,anchor:$,transition:B}=b;if(M===se){u1(E,$);return}if(M===Pn){h(b);return}const I=()=>{o(E),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(b.shapeFlag&1&&B&&!B.persisted){const{leave:D,delayLeave:N}=B,j=()=>D(E,I);N?N(b.el,I,j):j()}else I()},u1=(b,M)=>{let E;for(;b!==M;)E=u(b),o(b),b=E;o(M)},A=(b,M,E)=>{const{bum:$,scope:B,update:I,subTree:D,um:N}=b;$&&zt($),B.stop(),I&&(I.active=!1,t1(D,b,M,E)),N&&E1(N,M),E1(()=>{b.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve())},z=(b,M,E,$=!1,B=!1,I=0)=>{for(let D=I;D<b.length;D++)t1(b[D],M,E,$,B)},P=b=>b.shapeFlag&6?P(b.component.subTree):b.shapeFlag&128?b.suspense.next():u(b.anchor||b.el),U=(b,M,E)=>{b==null?M._vnode&&t1(M._vnode,null,null,!0):v(M._vnode||null,b,M,null,null,null,E),t2(),_5(),M._vnode=b},l1={p:v,um:t1,m:x1,r:$1,mt:p1,mc:V,pc:q,pbc:S,n:P,o:e};let c1,X;return t&&([c1,X]=t(l1)),{render:U,hydrate:c1,createApp:Kr(U,c1)}}function Re({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function v0(e,t,n=!1){const i=e.children,o=t.children;if(Q(i)&&Q(o))for(let l=0;l<i.length;l++){const r=i[l];let s=o[l];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[l]=ke(o[l]),s.el=r.el),n||v0(r,s)),s.type===hi&&(s.el=r.el)}}function Xr(e){const t=e.slice(),n=[0];let i,o,l,r,s;const a=e.length;for(i=0;i<a;i++){const c=e[i];if(c!==0){if(o=n[n.length-1],e[o]<c){t[i]=o,n.push(i);continue}for(l=0,r=n.length-1;l<r;)s=l+r>>1,e[n[s]]<c?l=s+1:r=s;c<e[n[l]]&&(l>0&&(t[i]=n[l-1]),n[l]=i)}}for(l=n.length,r=n[l-1];l-- >0;)n[l]=r,r=t[r];return n}const Jr=e=>e.__isTeleport,Wt=e=>e&&(e.disabled||e.disabled===""),p2=e=>typeof SVGElement<"u"&&e instanceof SVGElement,vo=(e,t)=>{const n=e&&e.to;return _1(n)?t?t(n):null:n},Qr={__isTeleport:!0,process(e,t,n,i,o,l,r,s,a,c){const{mc:d,pc:w,pbc:u,o:{insert:m,querySelector:g,createText:v,createComment:L}}=c,y=Wt(t.props);let{shapeFlag:p,children:f,dynamicChildren:h}=t;if(e==null){const C=t.el=v(""),x=t.anchor=v("");m(C,n,i),m(x,n,i);const k=t.target=vo(t.props,g),V=t.targetAnchor=v("");k&&(m(V,k),r=r||p2(k));const Z=(S,R)=>{p&16&&d(f,S,R,o,l,r,s,a)};y?Z(n,x):k&&Z(k,V)}else{t.el=e.el;const C=t.anchor=e.anchor,x=t.target=e.target,k=t.targetAnchor=e.targetAnchor,V=Wt(e.props),Z=V?n:x,S=V?C:k;if(r=r||p2(x),h?(u(e.dynamicChildren,h,Z,o,l,r,s),v0(e,t,!0)):a||w(e,t,Z,S,o,l,r,s,!1),y)V||Mn(t,n,C,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const R=t.target=vo(t.props,g);R&&Mn(t,R,null,c,0)}else V&&Mn(t,x,k,c,1)}D5(t)},remove(e,t,n,i,{um:o,o:{remove:l}},r){const{shapeFlag:s,children:a,anchor:c,targetAnchor:d,target:w,props:u}=e;if(w&&l(d),(r||!Wt(u))&&(l(c),s&16))for(let m=0;m<a.length;m++){const g=a[m];o(g,t,n,!0,!!g.dynamicChildren)}},move:Mn,hydrate:e4};function Mn(e,t,n,{o:{insert:i},m:o},l=2){l===0&&i(e.targetAnchor,t,n);const{el:r,anchor:s,shapeFlag:a,children:c,props:d}=e,w=l===2;if(w&&i(r,t,n),(!w||Wt(d))&&a&16)for(let u=0;u<c.length;u++)o(c[u],t,n,2);w&&i(s,t,n)}function e4(e,t,n,i,o,l,{o:{nextSibling:r,parentNode:s,querySelector:a}},c){const d=t.target=vo(t.props,a);if(d){const w=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Wt(t.props))t.anchor=c(r(e),t,s(e),n,i,o,l),t.targetAnchor=w;else{t.anchor=r(e);let u=w;for(;u;)if(u=r(u),u&&u.nodeType===8&&u.data==="teleport anchor"){t.targetAnchor=u,d._lpa=t.targetAnchor&&r(t.targetAnchor);break}c(w,t,d,n,i,o,l)}D5(t)}return t.anchor&&r(t.anchor)}const Kp=Qr;function D5(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const se=Symbol(void 0),hi=Symbol(void 0),ne=Symbol(void 0),Pn=Symbol(void 0),Kt=[];let ee=null;function t4(e=!1){Kt.push(ee=e?null:[])}function n4(){Kt.pop(),ee=Kt[Kt.length-1]||null}let rn=1;function g2(e){rn+=e}function U5(e){return e.dynamicChildren=rn>0?ee||lt:null,n4(),rn>0&&ee&&ee.push(e),e}function Gp(e,t,n,i,o,l){return U5(W5(e,t,n,i,o,l,!0))}function i4(e,t,n,i,o){return U5(Z1(e,t,n,i,o,!0))}function Gn(e){return e?e.__v_isVNode===!0:!1}function ze(e,t){return e.type===t.type&&e.key===t.key}const vi="__vInternal",q5=({key:e})=>e??null,Nn=({ref:e,ref_key:t,ref_for:n})=>e!=null?_1(e)||V1(e)||n1(e)?{i:R1,r:e,k:t,f:!!n}:e:null;function W5(e,t=null,n=null,i=0,o=null,l=e===se?0:1,r=!1,s=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&q5(t),ref:t&&Nn(t),scopeId:k5,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:R1};return s?(w0(a,n),l&128&&e.normalize(a)):n&&(a.shapeFlag|=_1(n)?8:16),rn>0&&!r&&ee&&(a.patchFlag>0||l&6)&&a.patchFlag!==32&&ee.push(a),a}const Z1=o4;function o4(e,t=null,n=null,i=0,o=null,l=!1){if((!e||e===F5)&&(e=ne),Gn(e)){const s=me(e,t,!0);return n&&w0(s,n),rn>0&&!l&&ee&&(s.shapeFlag&6?ee[ee.indexOf(e)]=s:ee.push(s)),s.patchFlag|=-2,s}if(h4(e)&&(e=e.__vccOpts),t){t=l4(t);let{class:s,style:a}=t;s&&!_1(s)&&(t.class=Ko(s)),y1(a)&&(h5(a)&&!Q(a)&&(a=A1({},a)),t.style=Wo(a))}const r=_1(e)?1:V5(e)?128:Jr(e)?64:y1(e)?4:n1(e)?2:0;return W5(e,t,n,i,o,r,l,!0)}function l4(e){return e?h5(e)||vi in e?A1({},e):e:null}function me(e,t,n=!1){const{props:i,ref:o,patchFlag:l,children:r}=e,s=t?s4(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&q5(s),ref:t&&t.ref?n&&o?Q(o)?o.concat(Nn(t)):[o,Nn(t)]:Nn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==se?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&me(e.ssContent),ssFallback:e.ssFallback&&me(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function r4(e=" ",t=0){return Z1(hi,null,e,t)}function Yp(e,t){const n=Z1(Pn,null,e);return n.staticCount=t,n}function Xp(e="",t=!1){return t?(t4(),i4(ne,null,e)):Z1(ne,null,e)}function ae(e){return e==null||typeof e=="boolean"?Z1(ne):Q(e)?Z1(se,null,e.slice()):typeof e=="object"?ke(e):Z1(hi,null,String(e))}function ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:me(e)}function w0(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),w0(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(vi in t)?t._ctx=R1:o===3&&R1&&(R1.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else n1(t)?(t={default:t,_ctx:R1},n=32):(t=String(t),i&64?(n=16,t=[r4(t)]):n=8);e.children=t,e.shapeFlag|=n}function s4(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=Ko([t.class,i.class]));else if(o==="style")t.style=Wo([t.style,i.style]);else if(ri(o)){const l=t[o],r=i[o];r&&l!==r&&!(Q(l)&&l.includes(r))&&(t[o]=l?[].concat(l,r):r)}else o!==""&&(t[o]=i[o])}return t}function D1(e,t,n,i=null){q1(e,t,7,[n,i])}const a4=z5();let c4=0;function d4(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||a4,l={uid:c4++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new V3(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P5(i,o),emitsOptions:M5(i,o),emit:null,emitted:null,propsDefaults:L1,inheritAttrs:i.inheritAttrs,ctx:L1,data:L1,props:L1,attrs:L1,slots:L1,refs:L1,setupState:L1,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=ur.bind(null,l),e.ce&&e.ce(l),l}let k1=null;const wi=()=>k1||R1,pt=e=>{k1=e,e.scope.on()},Ke=()=>{k1&&k1.scope.off(),k1=null};function K5(e){return e.vnode.shapeFlag&4}let gt=!1;function p4(e,t=!1){gt=t;const{props:n,children:i}=e.vnode,o=K5(e);jr(e,n,o,t),Ur(e,i);const l=o?g4(e,t):void 0;return gt=!1,l}function g4(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=v5(new Proxy(e.ctx,Fr));const{setup:i}=n;if(i){const o=e.setupContext=i.length>1?u4(e):null;pt(e),Mt();const l=$e(i,e,0,[e.props,o]);if(kt(),Ke(),t5(l)){if(l.then(Ke,Ke),t)return l.then(r=>{f2(e,r,t)}).catch(r=>{hn(r,e,0)});e.asyncDep=l}else f2(e,l,t)}else G5(e,t)}function f2(e,t,n){n1(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:y1(t)&&(e.setupState=x5(t)),G5(e,n)}let u2;function G5(e,t,n){const i=e.type;if(!e.render){if(!t&&u2&&!i.render){const o=i.template||u0(e).template;if(o){const{isCustomElement:l,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=A1(A1({isCustomElement:l,delimiters:s},r),a);i.render=u2(o,c)}}e.render=i.render||te}pt(e),Mt(),Or(e),kt(),Ke()}function f4(e){return new Proxy(e.attrs,{get(t,n){return P1(e,"get","$attrs"),t[n]}})}function u4(e){const t=i=>{e.exposed=i||{}};let n;return{get attrs(){return n||(n=f4(e))},slots:e.slots,emit:e.emit,expose:t}}function Ci(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(x5(v5(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qt)return qt[n](e)},has(t,n){return n in t||n in qt}}))}function wo(e,t=!0){return n1(e)?e.displayName||e.name:e.name||t&&e.__name}function h4(e){return n1(e)&&"__vccOpts"in e}const U1=(e,t)=>ar(e,t,gt);function C0(e,t,n){const i=arguments.length;return i===2?y1(t)&&!Q(t)?Gn(t)?Z1(e,null,[t]):Z1(e,t):Z1(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Gn(n)&&(n=[n]),Z1(e,t,n))}const v4=Symbol(""),w4=()=>W1(v4),m0="3.2.45",C4="http://www.w3.org/2000/svg",De=typeof document<"u"?document:null,h2=De&&De.createElement("template"),m4={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t?De.createElementNS(C4,e):De.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>De.createTextNode(e),createComment:e=>De.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>De.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,o,l){const r=n?n.previousSibling:t.lastChild;if(o&&(o===l||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===l||!(o=o.nextSibling)););else{h2.innerHTML=i?`<svg>${e}</svg>`:e;const s=h2.content;if(i){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}t.insertBefore(s,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function x4(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function L4(e,t,n){const i=e.style,o=_1(n);if(n&&!o){for(const l in n)Co(i,l,n[l]);if(t&&!_1(t))for(const l in t)n[l]==null&&Co(i,l,"")}else{const l=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=l)}}const v2=/\s*!important$/;function Co(e,t,n){if(Q(n))n.forEach(i=>Co(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=y4(e,t);v2.test(n)?e.setProperty(Ht(i),n.replace(v2,""),"important"):e[i]=n}}const w2=["Webkit","Moz","ms"],Oi={};function y4(e,t){const n=Oi[t];if(n)return n;let i=pe(t);if(i!=="filter"&&i in e)return Oi[t]=i;i=ci(i);for(let o=0;o<w2.length;o++){const l=w2[o]+i;if(l in e)return Oi[t]=l}return t}const C2="http://www.w3.org/1999/xlink";function b4(e,t,n,i,o){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(C2,t.slice(6,t.length)):e.setAttributeNS(C2,t,n);else{const l=x3(t);n==null||l&&!Jl(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function _4(e,t,n,i,o,l,r){if(t==="innerHTML"||t==="textContent"){i&&r(i,o,l),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n??"";(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Jl(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function H4(e,t,n,i){e.addEventListener(t,n,i)}function M4(e,t,n,i){e.removeEventListener(t,n,i)}function k4(e,t,n,i,o=null){const l=e._vei||(e._vei={}),r=l[t];if(i&&r)r.value=i;else{const[s,a]=V4(t);if(i){const c=l[t]=A4(i,o);H4(e,s,c,a)}else r&&(M4(e,s,r,a),l[t]=void 0)}}const m2=/(?:Once|Passive|Capture)$/;function V4(e){let t;if(m2.test(e)){t={};let i;for(;i=e.match(m2);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}let Ri=0;const Z4=Promise.resolve(),E4=()=>Ri||(Z4.then(()=>Ri=0),Ri=Date.now());function A4(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;q1(S4(i,n.value),t,5,[i])};return n.value=e,n.attached=E4(),n}function S4(e,t){if(Q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>o=>!o._stopped&&i&&i(o))}else return t}const x2=/^on[a-z]/,$4=(e,t,n,i,o=!1,l,r,s,a)=>{t==="class"?x4(e,i,o):t==="style"?L4(e,n,i):ri(t)?Go(t)||k4(e,t,n,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):B4(e,t,i,o))?_4(e,t,i,l,r,s,a):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),b4(e,t,i,o))};function B4(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&x2.test(t)&&n1(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||x2.test(t)&&_1(n)?!1:t in e}const _e="transition",Zt="animation",Y5=(e,{slots:t})=>C0(E5,T4(e),t);Y5.displayName="Transition";const X5={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Y5.props=A1({},E5.props,X5);const Pe=(e,t=[])=>{Q(e)?e.forEach(n=>n(...t)):e&&e(...t)},L2=e=>e?Q(e)?e.some(t=>t.length>1):e.length>1:!1;function T4(e){const t={};for(const T in e)T in X5||(t[T]=e[T]);if(e.css===!1)return t;const{name:n="v",type:i,duration:o,enterFromClass:l=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:a=l,appearActiveClass:c=r,appearToClass:d=s,leaveFromClass:w=`${n}-leave-from`,leaveActiveClass:u=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,g=F4(o),v=g&&g[0],L=g&&g[1],{onBeforeEnter:y,onEnter:p,onEnterCancelled:f,onLeave:h,onLeaveCancelled:C,onBeforeAppear:x=y,onAppear:k=p,onAppearCancelled:V=f}=t,Z=(T,K,p1)=>{Ne(T,K?d:s),Ne(T,K?c:r),p1&&p1()},S=(T,K)=>{T._isLeaving=!1,Ne(T,w),Ne(T,m),Ne(T,u),K&&K()},R=T=>(K,p1)=>{const H1=T?k:p,i1=()=>Z(K,T,p1);Pe(H1,[K,i1]),y2(()=>{Ne(K,T?a:l),He(K,T?d:s),L2(H1)||b2(K,i,v,i1)})};return A1(t,{onBeforeEnter(T){Pe(y,[T]),He(T,l),He(T,r)},onBeforeAppear(T){Pe(x,[T]),He(T,a),He(T,c)},onEnter:R(!1),onAppear:R(!0),onLeave(T,K){T._isLeaving=!0;const p1=()=>S(T,K);He(T,w),P4(),He(T,u),y2(()=>{T._isLeaving&&(Ne(T,w),He(T,m),L2(h)||b2(T,i,L,p1))}),Pe(h,[T,p1])},onEnterCancelled(T){Z(T,!1),Pe(f,[T])},onAppearCancelled(T){Z(T,!0),Pe(V,[T])},onLeaveCancelled(T){S(T),Pe(C,[T])}})}function F4(e){if(e==null)return null;if(y1(e))return[Pi(e.enter),Pi(e.leave)];{const t=Pi(e);return[t,t]}}function Pi(e){return Qo(e)}function He(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Ne(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function y2(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let O4=0;function b2(e,t,n,i){const o=e._endId=++O4,l=()=>{o===e._endId&&i()};if(n)return setTimeout(l,n);const{type:r,timeout:s,propCount:a}=R4(e,t);if(!r)return i();const c=r+"end";let d=0;const w=()=>{e.removeEventListener(c,u),l()},u=m=>{m.target===e&&++d>=a&&w()};setTimeout(()=>{d<a&&w()},s+1),e.addEventListener(c,u)}function R4(e,t){const n=window.getComputedStyle(e),i=g=>(n[g]||"").split(", "),o=i(`${_e}Delay`),l=i(`${_e}Duration`),r=_2(o,l),s=i(`${Zt}Delay`),a=i(`${Zt}Duration`),c=_2(s,a);let d=null,w=0,u=0;t===_e?r>0&&(d=_e,w=r,u=l.length):t===Zt?c>0&&(d=Zt,w=c,u=a.length):(w=Math.max(r,c),d=w>0?r>c?_e:Zt:null,u=d?d===_e?l.length:a.length:0);const m=d===_e&&/\b(transform|all)(,|$)/.test(i(`${_e}Property`).toString());return{type:d,timeout:w,propCount:u,hasTransform:m}}function _2(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>H2(n)+H2(e[i])))}function H2(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function P4(){return document.body.offsetHeight}const Jp={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Et(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Et(e,!0),i.enter(e)):i.leave(e,()=>{Et(e,!1)}):Et(e,t))},beforeUnmount(e,{value:t}){Et(e,t)}};function Et(e,t){e.style.display=t?e._vod:"none"}const N4=A1({patchProp:$4},m4);let M2;function I4(){return M2||(M2=Gr(N4))}const Qp=(...e)=>{const t=I4().createApp(...e),{mount:n}=t;return t.mount=i=>{const o=j4(i);if(!o)return;const l=t._component;!n1(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.innerHTML="";const r=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function j4(e){return _1(e)?document.querySelector(e):e}function z4(e){return e=Object.create(e),"HTMLElement"in e||Object.defineProperty(e,"HTMLElement",{value:class{constructor(){throw Error("Current context does not support defining custom elements")}}}),"document"in e||Object.defineProperty(e,"document",{value:{importNode:()=>{throw Error("Current context does not support importing nodes")}}}),e}const r1=typeof window=="object"?window:z4(globalThis),k2=new Map;function mi(e){let t=k2.get(e);return t===void 0&&(t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),k2.set(e,t)),t}function ie(e,t,n={}){return e.dispatchEvent(new r1.CustomEvent(t,{bubbles:!1,...n}))}function J5(e){return`<${String(e.tagName).toLowerCase()}>`}function Yn(e,t){e.nodeType===r1.Node.ELEMENT_NODE&&(t(e),e.shadowRoot&&Yn(e.shadowRoot,t));const n=r1.document.createTreeWalker(e,r1.NodeFilter.SHOW_ELEMENT,null,!1);for(;n.nextNode();){const i=n.currentNode;t(i),i.shadowRoot&&Yn(i.shadowRoot,t)}}const Q5=Promise.resolve(),D4=new WeakMap,mo=Yn.name==="walkInShadow",sn=new Set;function x0(e){sn.size||Q5.then(q4),sn.add(e)}function U4(e){sn.delete(e)}function q4(){for(const e of sn)try{e()}catch(t){console.error(t)}sn.clear()}const Xn=new WeakMap,Rt=new Set;function e9(e){const t=new Set,n=t.values();for(;e;){if(e.resolved=!1,e.deps){for(const i of e.deps)i.contexts.delete(e);e.deps.clear()}if(e.contexts)for(const i of e.contexts)Rt.has(i)||(t.add(i),e.contexts.delete(i));e.observe&&x0(e.observe),e=n.next().value}}function xi(e,t){let n=Xn.get(e);n||(n=new Map,Xn.set(e,n));let i=n.get(t);return i||(i={key:t,target:e,value:void 0,lastValue:void 0,resolved:!1,contexts:void 0,deps:void 0,observe:void 0},n.set(t,i)),i}let j1=null;function t9(e,t,n){const i=xi(e,t);if(j1&&(i.contexts||(i.contexts=new Set),j1.deps||(j1.deps=new Set),i.contexts.add(j1),j1.deps.add(i)),i.resolved)return i.value;const o=j1;try{if(Rt.has(i))throw Error(`Circular get invocation is forbidden: '${t}'`);j1=i,Rt.add(i),i.value=n(e,i.value),i.resolved=!0,j1=o,Rt.delete(i)}catch(l){throw j1=o,Rt.delete(i),j1&&(j1.deps.delete(i),i.contexts.delete(j1)),l}return i.value}function W4(e,t,n,i){const o=xi(e,t),l=n(e,i,o.value);l!==o.value&&(o.value=l,e9(o))}function K4(e,t,n,i){const o=xi(e,t);return o.observe=()=>{const l=t9(e,t,n);l!==o.lastValue&&(i(e,l,o.lastValue),o.lastValue=l)},x0(o.observe),()=>{U4(o.observe),o.observe=void 0,o.lastValue=void 0}}const kn=new Set;function G4(e){kn.size||setTimeout(()=>{for(const t of kn)if(!t.contexts||t.contexts.size===0){if(t.deps)for(const n of t.deps)n.contexts.delete(t);Xn.get(t.target).delete(t.key)}kn.clear()}),kn.add(e)}function n9(e,t){e9(e),t.clearValue&&(e.value=void 0,e.lastValue=void 0),t.deleteEntry&&G4(e)}function i9(e,t,n={}){const i=xi(e,t);n9(i,n)}function Y4(e,t={}){const n=Xn.get(e);if(n)for(const i of n.values())n9(i,t)}function V2(e,t){return{get:t?n=>{const i=e(n),o=n.shadowRoot||n.attachShadow({mode:"open",delegatesFocus:e.delegatesFocus||!1});return()=>(i(n,o),o)}:n=>{const i=e(n);return()=>(i(n,n),n)},observe(n,i){i()}}}function X4(e,t){const n=e.value;return{get:(i,o)=>o===void 0?i.getAttribute(t)||n:o,set:(i,o)=>(o=String(o),o?i.setAttribute(t,o):i.removeAttribute(t),o),connect:n!==""?(i,o,l)=>(!i.hasAttribute(t)&&i[o]===n&&i.setAttribute(t,n),e.connect&&e.connect(i,o,l)):e.connect,observe:e.observe}}function J4(e,t){const n=e.value;return{get:(i,o)=>o===void 0?Number(i.getAttribute(t)||n):o,set:(i,o)=>(o=Number(o),i.setAttribute(t,o),o),connect:(i,o,l)=>(!i.hasAttribute(t)&&i[o]===n&&i.setAttribute(t,n),e.connect&&e.connect(i,o,l)),observe:e.observe}}function Q4(e,t){const n=e.value;return{get:(i,o)=>o===void 0?i.hasAttribute(t)||n:o,set:(i,o)=>(o=Boolean(o),o?i.setAttribute(t,""):i.removeAttribute(t),o),connect:n===!0?(i,o,l)=>(!i.hasAttribute(t)&&i[o]===n&&i.setAttribute(t,""),e.connect&&e.connect(i,o,l)):e.connect,observe:e.observe}}function es(e,t){const n=e.value;return{get:(i,o)=>o===void 0?i.getAttribute(t)||n:o,set:(i,o)=>o,connect:e.connect,observe:e.observe}}function ts(e,t){const n=typeof t.value,i=mi(e);switch(n){case"string":return X4(t,i);case"number":return J4(t,i);case"boolean":return Q4(t,i);case"undefined":return es(t,i);default:throw TypeError(`Invalid default value for '${e}' property - it must be a string, number, boolean or undefined: ${n}`)}}const Vn=new WeakMap;function xo(e,t){if(t){if(e===t.hybrids)return t;for(const o of Object.keys(t.hybrids))delete t.prototype[o]}else t=class extends r1.HTMLElement{connectedCallback(){for(const l of Object.keys(this)){const r=this[l];delete this[l],this[l]=r}const o=new Set;Vn.set(this,o),x0(()=>{if(o===Vn.get(this)){for(const l of this.constructor.connects)o.add(l(this));for(const l of this.constructor.observers)o.add(l(this))}})}disconnectedCallback(){const o=Vn.get(this);for(const l of o)l&&l();Vn.delete(this),Y4(this)}};t.hybrids=e;const n=new Set,i=new Set;for(const o of Object.keys(e)){if(o==="tag")continue;let l=e[o];const r=typeof l;if(r==="function")o==="render"?l=V2(l,!0):o==="content"?l=V2(l):l={get:l};else if(r!=="object"||l===null)l={value:l};else if(l.set){if(hasOwnProperty.call(l,"value"))throw TypeError(`Invalid property descriptor for '${o}' property - it must not have 'value' and 'set' properties at the same time.`);const s=mi(o),a=l.get||((c,d)=>d);l.get=(c,d)=>(d===void 0&&(d=l.set(c,c.getAttribute(s)||d)),a(c,d))}if(hasOwnProperty.call(l,"value"))l=ts(o,l);else if(!l.get)throw TypeError(`Invalid descriptor for '${o}' property - it must contain 'value' or 'get' option`);Object.defineProperty(t.prototype,o,{get:function(){return t9(this,o,l.get)},set:l.set&&function(s){W4(this,o,l.set,s)},enumerable:!0,configurable:!0}),l.connect&&n.add(s=>l.connect(s,o,()=>{i9(s,o)})),l.observe&&i.add(s=>K4(s,o,l.get,l.observe))}return t.connects=n,t.observers=i,t}const At=new Map;function ns(e){At.size||Q5.then(()=>{Yn(r1.document.body,t=>{if(At.has(t.constructor)){const n=At.get(t.constructor),i=t.constructor.hybrids;t.disconnectedCallback();for(const o of Object.keys(i)){const l=typeof i[o],r=l!=="object"&&l!=="function"&&i[o]!==n[o];i9(t,o,{clearValue:r})}t.connectedCallback()}}),At.clear()}),At.set(e,e.hybrids)}function o9(e){if(!e.tag)throw TypeError("Error while defining hybrids: 'tag' property with dashed tag name is required");const t=r1.customElements.get(e.tag);if(t){if(t.hybrids)return ns(t),xo(e,t),Object.freeze(e);throw TypeError(`Custom element with '${e.tag}' tag name already defined outside of the hybrids context`)}return r1.customElements.define(e.tag,xo(e)),Object.freeze(e)}function is(e,t={}){const{root:n="",prefix:i}=t,o=Object.keys(e);if(o.length===0)return e;for(const l of o){const r=e[l];if(!r.tag){const s=mi([].concat(n).reduce((a,c)=>a.replace(c,""),l).replace(/^[./]+/,"").replace(/\//g,"-").replace(/\.[a-zA-Z]+$/,""));r.tag=i?`${i}-${s}`:s}o9(r)}return e}const C1=Object.freeze(Object.assign(o9,{compile:e=>xo(e),from:is})),Lo=new WeakMap;function we(e){let t=Lo.get(e);return t||(Lo.set(e,t={}),t)}function Li(e){let t;for(;e&&(t=we(e))&&t.endNode;)e=t.endNode;return e}function an(e){const t=we(e);if(t.styles&&t.styles(),e.nodeType===r1.Node.TEXT_NODE){if(t.startNode){const n=Li(t.endNode);let i=t.startNode;const o=n.nextSibling;for(;i;){const l=i.nextSibling;i.parentNode.removeChild(i),i=l!==o&&l}}}else{let n=e.childNodes[0];for(;n;)e.removeChild(n),n=e.childNodes[0]}Lo.delete(e)}const os=Date.now(),xe=(e=0)=>`H-${os}-${e}`,L0=!!r1.document.adoptedStyleSheets,Ni=/^\d+$/,ls={block:(e,t)=>({display:"block","text-align":t}),inline:({display:e})=>({display:`inline${e?`-${e}`:""}`}),contents:{display:"contents"},hidden:{display:"none"},...["row","row-reverse","column","column-reverse"].reduce((e,t)=>(e[t]=(n,i="nowrap")=>({display:"flex","flex-flow":`${t} ${i}`}),e),{}),grow:(e,t=1)=>({"flex-grow":t}),shrink:(e,t=1)=>({"flex-shrink":t}),basis:(e,t)=>({"flex-basis":w1(t)}),order:(e,t=0)=>({order:t}),grid:(e,t="1",n="",i="",o="")=>({display:"grid",...["columns","rows"].reduce((l,r)=>{const s=r==="columns"?t:n;return l[`grid-template-${r}`]=s&&s.split("|").map(a=>a.match(Ni)?`repeat(${a}, minmax(0, 1fr))`:w1(a)).join(" "),l},{}),"grid-auto-flow":`${i} ${o&&"dense"}`}),area:(e,t="",n="")=>({"grid-column":t.match(Ni)?`span ${t}`:t,"grid-row":n.match(Ni)?`span ${n}`:n}),gap:(e,t=1,n="")=>({"column-gap":w1(t),"row-gap":w1(n||t)}),items:(e,t="start",n="")=>({"place-items":`${t} ${n}`}),content:(e,t="start",n="")=>({"place-content":`${t} ${n}`}),self:(e,t="start",n="")=>({"place-self":`${t} ${n}`}),center:{"place-items":"center","place-content":"center"},size:(e,t,n=t)=>({width:w1(t),height:w1(n),"box-sizing":"border-box"}),width:(e,t,n,i)=>({width:w1(t),"min-width":w1(n),"max-width":w1(i),"box-sizing":"border-box"}),height:(e,t,n,i)=>({height:w1(t),"min-height":w1(n),"max-height":w1(i),"box-sizing":"border-box"}),ratio:(e,t)=>({"aspect-ratio":t}),overflow:(e,t="hidden",n="")=>{const i=n?`-${t}`:"",o=n||t;return{[`overflow${i}`]:o,...o==="scroll"?{"flex-grow":e["flex-grow"]||1,"flex-basis":0,"overscroll-behavior":"contain","--webkit-overflow-scrolling":"touch"}:{}}},margin:(e,t="1",n,i,o)=>t.match(/top|bottom|left|right/)?{[`margin-${t}`]:w1(n||"1")}:{margin:`${w1(t)} ${w1(n)} ${w1(i)} ${w1(o)}`},padding:(e,t="1",n,i,o)=>t.match(/top|bottom|left|right/)?{[`padding-${t}`]:w1(n||"1")}:{padding:`${w1(t)} ${w1(n)} ${w1(i)} ${w1(o)}`},absolute:{position:"absolute"},relative:{position:"relative"},fixed:{position:"fixed"},sticky:{position:"sticky"},static:{position:"static"},inset:(e,t=0)=>{const n=w1(t);return{top:n,right:n,bottom:n,left:n}},top:(e,t=0)=>({top:w1(t)}),bottom:(e,t=0)=>({bottom:w1(t)}),left:(e,t=0)=>({left:w1(t)}),right:(e,t=0)=>({right:w1(t)}),layer:(e,t=1)=>({"z-index":t})},rs={min:"min-content",max:"max-content",fit:"fit-content",full:"100%"},ss={portrait:"orientation: portrait",landscape:"orientation: landscape"};function w1(e){return e=rs[e]||e,/^-?\d+(\.\d+)*$/.test(String(e))?`${e*8}px`:e||""}let tt;function l9(){if(tt)return tt;if(L0)tt=new r1.CSSStyleSheet;else{const e=r1.document.createElement("style");e.appendChild(r1.document.createTextNode("")),r1.document.head.appendChild(e),tt=e.sheet}return tt.insertRule(":host([hidden]) { display: none; }"),tt}const Z2=new WeakMap;let yo=new WeakSet;function as(e){const t=e.getRootNode();if(yo.has(t))return;const n=l9();if(L0)t.adoptedStyleSheets=[...t.adoptedStyleSheets,n];else{if(t===r1.document)return;let i=Z2.get(t);i||(i=r1.document.createElement("style"),t.appendChild(i),Z2.set(t,i));let o="";for(let l=0;l<n.cssRules.length;l++)o+=n.cssRules[l].cssText;i.textContent=o}yo.add(t)}const E2=new Map;function A2(e,t,n,i){let o=E2.get(e);o||(o=`l-${Math.random().toString(36).substr(2,5)}`,E2.set(e,o)),L0||(yo=new WeakSet);const l=l9(),[r,s=""]=t.split("@"),a=Object.entries(n.replace(/\s+/g," ").trim().split(" ").reduce((d,w)=>{const[u,...m]=w.split(":"),g=ls[u];if(!g)throw TypeError(`Unsupported layout rule: '${u}'`);return Object.assign(d,typeof g=="function"?g(d,...m.map(v=>v.match(/--.*/)?`var(${v})`:v)):g)},{})).reduce((d,[w,u])=>u!==void 0&&u!==""?d+`${w}: ${u};`:d,""),c=s.split(":").reduce((d,w)=>w===""?d:d+` and (${ss[w]||`min-width: ${w}`})`,"@media screen");if(i){const d=`:host(.${o}-s${r})`,w=`:where(.${o}-c${r})`;[d,w].forEach(u=>{l.insertRule(s?`${c} { ${u} { ${a} } }`:`${u} { ${a} }`,l.cssRules.length)})}else{const d=`.${o}${r}`;l.insertRule(s?`${c} { ${d} { ${a} } }`:`${d} { ${a} }`,l.cssRules.length)}return o}const bo=new WeakMap;function cs(e,t){const n=we(e),i=n.startNode,o=Li(n.endNode);t.parentNode.insertBefore(e,t.nextSibling);let l=e,r=i;for(;r;){const s=r.nextSibling;l.parentNode.insertBefore(r,l.nextSibling),l=r,r=s!==o.nextSibling&&s}}function ds(e,t,n,i,o){let l=bo.get(t);const r=n.map((d,w)=>({id:hasOwnProperty.call(d,"id")?d.id:w,value:d,placeholder:null,available:!0}));if(bo.set(t,r),l){const d=new Set;for(const w of r)d.add(w.id);l=l.filter(w=>d.has(w.id)?!0:(an(w.placeholder),w.placeholder.parentNode.removeChild(w.placeholder),!1))}let s=t;const a=n.length-1,c=we(t);for(let d=0;d<r.length;d+=1){const w=r[d];let u;if(l){for(let m=0;m<l.length;m+=1)if(l[m].available&&l[m].id===w.id){u=l[m];break}}u?(u.available=!1,w.placeholder=u.placeholder,w.placeholder.previousSibling!==s&&cs(w.placeholder,s),u.value!==w.value&&i(e,w.placeholder,w.value,u.value,o)):(w.placeholder=r1.document.createTextNode(""),s.parentNode.insertBefore(w.placeholder,s.nextSibling),i(e,w.placeholder,w.value,void 0,o)),s=Li(we(w.placeholder).endNode||w.placeholder),d===0&&(c.startNode=w.placeholder),d===a&&(c.endNode=s)}if(l)for(const d of l)d.available&&(an(d.placeholder),d.placeholder.parentNode.removeChild(d.placeholder))}function ps(e,t,n){an(t);const i=we(t);i.startNode=i.endNode=n,t.parentNode.insertBefore(n,t.nextSibling)}function S2(e){const t=typeof e;if(t==="object"){if(Array.isArray(e))return"array";if(e instanceof r1.Node)return"node"}return t}function cn(e,t,n,i,o){const l=S2(n),r=S2(i);switch(r!=="undefined"&&l!==r&&(l!=="function"&&an(t),r==="array"?bo.delete(t):r!=="node"&&r!=="function"&&(t.textContent="")),l){case"array":ds(e,t,n,cn,o);break;case"node":ps(e,t,n);break;case"function":o&&(n.useLayout=!0),n(e,t);break;default:t.textContent=l==="number"||n?n:""}}const Ii=new WeakMap;function gs(e){return(t,n,i,o)=>{if(o){const l=Ii.get(n);l&&n.removeEventListener(e,l.get(o),o.options!==void 0?o.options:!1)}if(i){if(typeof i!="function")throw Error(`Event listener must be a function: ${typeof i}`);let l=Ii.get(n);l||(l=new WeakMap,Ii.set(n,l));const r=i.bind(null,t);l.set(i,r),n.addEventListener(e,r,i.options!==void 0?i.options:!1)}}}function fs(e,t=new Set){if(Array.isArray(e))for(const n of e)n&&t.add(n);else if(e!==null&&typeof e=="object")for(const[n,i]of Object.entries(e))n&&i&&t.add(n);else e&&t.add(e);return t}const $2=new WeakMap;function us(e,t,n){const i=$2.get(t)||new Set,o=fs(n);$2.set(t,o);for(const l of o)t.classList.add(l),i.delete(l);for(const l of i)t.classList.remove(l)}const B2=new WeakMap;function hs(e,t,n){if(n===null||typeof n!="object")throw TypeError(`Style value must be an object in ${J5(t)}:`,n);const i=B2.get(t)||new Map,o=new Map;for(const l of Object.keys(n)){const r=mi(l),s=n[l];!s&&s!==0?t.style.removeProperty(r):t.style.setProperty(r,s),o.set(r,s),i.delete(r)}for(const l of i.keys())t.style[l]="";B2.set(t,o)}function vs(e,t,n){if(t.substr(0,2)==="on"){const i=t.substr(2);return gs(i)}switch(e){case"class":return us;case"style":return hs;default:{let i=!1;return(o,l,r)=>{if(i=i||!n&&!(l instanceof r1.SVGElement)&&t in l,i)l[t]=r;else if(r===!1||r===void 0||r===null)l.removeAttribute(e);else{const s=r===!0?"":String(r);l.setAttribute(e,s)}}}}}const r9=xe("(\\d+)"),St=new RegExp(`^${r9}$`),it=new RegExp(r9,"g"),ws=/^[^A-Za-z]+$/;function Cs(e){let t=e[0],n=!1;for(let i=1;i<e.length;i+=1)n=n||e[i-1].match(/<\s*(table|tr|thead|tbody|tfoot|colgroup)([^<>]|"[^"]*"|'[^']*')*>\s*$/),t+=(n?`<!--${xe(i-1)}-->`:xe(i-1))+e[i],n=n&&!e[i].match(/<\/\s*(table|tr|thead|tbody|tfoot|colgroup)\s*>/);return t}function ms(e){return e.replace(/\s*=\s*['"]*$/g,"").split(/\s+/).pop()}function T2(e){return r1.document.createTreeWalker(e,r1.NodeFilter.SHOW_ELEMENT|r1.NodeFilter.SHOW_TEXT|r1.NodeFilter.SHOW_COMMENT,null,!1)}function xs(e,t=0){e=e.replace(/(^[\n\s\t ]+)|([\n\s\t ]+$)+/g,"");let n=e.indexOf(`
`);if(n>-1){let i=0-t-2;for(n+=1;e[n]===" "&&n<e.length;n+=1)i+=1;return e.replace(/\n +/g,o=>o.substr(0,Math.max(o.length-i,1)))}return e}function F2(e,t){const n=xe(t);return`${xs(e).split(`
`).filter(i=>i).map(i=>{const o=i.indexOf(n);return o>-1?`| ${i}
--${"-".repeat(o)}${"^".repeat(6)}`:`| ${i}`}).join(`
`).replace(it,"${...}")}`}const O2=new Map;function Ls(e){if(e.adoptedStyleSheets){let n;return i=>{const o=e.adoptedStyleSheets;i?(i=i.map(l=>{let r=l;return r instanceof r1.CSSStyleSheet||(r=O2.get(l),r||(r=new r1.CSSStyleSheet,r.replaceSync(l),O2.set(l,r))),r}),(!n||n.some((l,r)=>l!==i[r]))&&(e.adoptedStyleSheets=(n?o.filter(l=>!n.includes(l)):o).concat(i))):n&&(e.adoptedStyleSheets=o.filter(l=>!n.includes(l))),n=i}}let t;return n=>{if(n){t||(t=r1.document.createElement("style"),e=Li(e),e.nodeType===r1.Node.TEXT_NODE?e.parentNode.insertBefore(t,e.nextSibling):e.appendChild(t));const i=[...n].join(`
/*------*/
`);t.textContent!==i&&(t.textContent=i)}else t&&(t.parentNode.removeChild(t),t=null)}}function ys(e,t,n,i){let o=r1.document.createElement("template");const l={},r=n?e:Cs(e);if(o.innerHTML=t?`<svg>${r}</svg>`:r,t){const g=o.content.firstChild;o.content.removeChild(g);for(const v of Array.from(g.childNodes))o.content.appendChild(v)}let s;const a=o.content.children[0];if(a instanceof r1.HTMLTemplateElement){for(const g of Array.from(a.attributes)){const v=g.value.trim();if(g.name.startsWith("layout")&&v){if(v.match(it))throw Error("Layout attribute cannot contain expressions");s=A2(a,g.name.substr(6),v,!0)}}if(s!==void 0&&o.content.children.length>1)throw Error("Template, which uses layout system must have only the '<template>' root element");i=!0,o=a}const c=T2(o.content),d=[];let w=0,u=null;for(;c.nextNode();){let g=c.currentNode;if(u&&!u.contains(g)&&(u=null),g.nodeType===r1.Node.COMMENT_NODE&&St.test(g.textContent)&&(g.parentNode.insertBefore(r1.document.createTextNode(g.textContent),g.nextSibling),c.nextNode(),g.parentNode.removeChild(g),g=c.currentNode),g.nodeType===r1.Node.TEXT_NODE){let v=g.textContent;const L=v.match(St);if(L)g.textContent="",l[L[1]]=[w,cn];else{if(Ts()&&!n&&!u&&!v.match(/^\s*$/)){let p;const f=v.trim(),h=f.replace(/\s+/g," ").replace(it,(C,x)=>(x=Number(x),p===void 0&&(p=x),`\${${x-p}}`));if(!h.match(ws)){let C=g.previousSibling&&g.previousSibling.nodeType===r1.Node.COMMENT_NODE?g.previousSibling:"";C&&(C.parentNode.removeChild(C),w-=1,C=(C.textContent.split("|")[1]||"").trim().replace(/\s+/g," "));const x=Fs(h,C).replace(/\${(\d+)}/g,(k,V)=>xe(Number(V)+p));v=v.replace(f,x),g.textContent=v}}const y=v.match(it);if(y){let p=g;y.reduce((f,h)=>{const[C,x]=f.pop().split(h);return C&&f.push(C),f.push(h),x&&f.push(x),f},[v]).forEach((f,h)=>{h===0?p.textContent=f:(p=p.parentNode.insertBefore(r1.document.createTextNode(f),p.nextSibling),c.currentNode=p,w+=1);const C=p.textContent.match(St);C&&(p.textContent="",l[C[1]]=[w,cn])})}}}else if(g.nodeType===r1.Node.ELEMENT_NODE){if(!u&&(g.getAttribute("translate")==="no"||g.tagName.toLowerCase()==="script"||g.tagName.toLowerCase()==="style")&&(u=g),mo){const v=g.tagName.toLowerCase();v.match(/.+-.+/)&&!r1.customElements.get(v)&&!d.includes(v)&&d.push(v)}for(const v of Array.from(g.attributes)){const L=v.value.trim(),y=v.name;if(i&&y.startsWith("layout")&&L){if(L.match(it))throw Error("Layout attribute cannot contain expressions");const f=A2(g,y.substr(6),L);g.removeAttribute(y),g.classList.add(f);continue}const p=L.match(St);if(p){const f=ms(e[p[1]]);l[p[1]]=[w,vs(y,f,t)],g.removeAttribute(v.name)}else{const f=L.match(it);if(f){const h=`attr__${y}`;for(const[C,x]of f.entries()){const[,k]=x.match(St);let V=!1;l[k]=[w,(Z,S,R)=>{const T=we(S);T[h]=(T[h]||L).replace(x,R??""),(f.length===1||C+1===f.length)&&(V=V||!t&&!(S instanceof r1.SVGElement)&&y in S,V?S[y]=T[h]:S.setAttribute(y,T[h]),T[h]=void 0)}]}v.value=""}}}}w+=1}mo&&d.length&&console.warn(`Not defined ${d.map(g=>`<${g}>`).join(", ")} element${d.length>1?"s":""} found in the template:
${F2(r,-1)}`);const m=Object.keys(l);return function(g,v,L,y){let p=we(v);if(o!==p.template){const f=r1.document.importNode(o.content,!0),h=T2(f),C=[];let x=0,k=0,V=l[m[k]];for(;h.nextNode();){const Z=h.currentNode;for(;V&&V[0]===x;)C.push({index:m[k],node:Z,fn:V[1]}),k+=1,V=l[m[k]];x+=1}if(p.hostLayout&&g.classList.remove(p.hostLayout),an(v),p=we(v),p.template=o,p.markers=C,p.styles=Ls(v),v.nodeType===r1.Node.TEXT_NODE){p.startNode=f.childNodes[0],p.endNode=f.childNodes[f.childNodes.length-1];let Z=v,S=f.childNodes[0];for(;S;)v.parentNode.insertBefore(S,Z.nextSibling),Z=S,S=f.childNodes[0]}else{if(i){const Z=`${s}-${g===v?"c":"s"}`;g.classList.add(Z),p.hostLayout=Z}v.appendChild(f)}i&&as(v)}p.styles(y);for(const f of p.markers){const h=L[f.index],C=p.prevArgs&&p.prevArgs[f.index];if(!(p.prevArgs&&h===C))try{f.fn(g,f.node,h,C,i)}catch(x){throw console.error(`Following error was thrown when updating a template expression in ${J5(g)}
${F2(r,f.index)}`),x}}p.prevArgs=L}}function R2({target:e,detail:t},n){let i;switch(e.type){case"radio":case"checkbox":i=e.checked&&e.value;break;case"file":i=e.files;break;default:i=t&&hasOwnProperty.call(t,"value")?t.value:e.value}n(i)}function bs(e,t){return e.split(".").reverse().reduce((n,i)=>n?{[i]:n}:{[i]:t},null)}const P2=new Map;function _s(e,t){if(!e)throw Error(`The first argument must be a property name or an object instance: ${e}`);if(typeof e=="object"){if(t===void 0)throw Error("For model instance property the second argument must be defined");const i=D4.get(e);if(!i)throw Error("Provided object must be a model instance of the store");return t===null?()=>{i.set(e,null)}:(o,l)=>{R2(l,r=>{i.set(e,bs(t,r))})}}if(arguments.length===2)return i=>{i[e]=t};let n=P2.get(e);return n||(n=(i,o)=>{R2(o,l=>{i[e]=l})},P2.set(e,n)),n}const ji=new WeakMap;function Hs(e,t,n=200){return function i(o,l){const r=i.useLayout;let s;t&&(s=setTimeout(()=>{s=void 0,cn(o,l,t,void 0,r)},n)),ji.set(l,e),e.then(a=>{s&&clearTimeout(s),ji.get(l)===e&&(cn(o,l,a,t&&!s?t:void 0,r),ji.set(l,null))})}}const Ms=Object.freeze(Object.defineProperty({__proto__:null,set:_s,resolve:Hs},Symbol.toStringTag,{value:"Module"})),ks=xe(),Vs=xe("svg"),Zs=xe("msg"),Es=xe("layout"),As={key(e){return this.id=e,this},style(...e){return this.styleSheets=this.styleSheets||[],this.styleSheets.push(...e),this},css(e,...t){this.styleSheets=this.styleSheets||[];let n=e[0];for(let i=1;i<e.length;i++)n+=(t[i-1]!==void 0?t[i-1]:"")+e[i];return this.styleSheets.push(n),this}},N2=new Map;function Ss(e,t,n,i){function o(l,r=l){let s=i?e+Zs:e.join(ks);n&&(s+=Vs);const a=o.useLayout;a&&(s+=Es);let c=N2.get(s);c||(c=ys(e,n,i,a),N2.set(s,c)),c(l,r,t,o.styleSheets)}return Object.assign(o,As)}function O(e,...t){return Ss(e,t,!1,!1)}Object.freeze(Object.assign(O,Ms));const In=new Map,I2=new Map;let $s=null;const Bs=(()=>{let e;try{e=r1.navigator.languages||[r1.navigator.language]}catch{e=[]}return e.reduce((t,n)=>{const i=n.split("-")[0];return t.add(n),n!==i&&t.add(i),t},new Set)})();function Ts(){return In.size}const j2=new Map;function Fs(e,t,n=[]){e=e.trim().replace(/\s+/g," "),t=t.trim();const i=`${e} | ${t}`;let o=I2.get(i);if(!o){if(In.size)for(const l of Bs){const r=In.get(l);if(r&&(o=r[i]||r[e],o)){if(o=o.message,typeof o=="object"){let s=j2.get(l);s||(s=new Intl.PluralRules(l),j2.set(l,s));const a=o;o=c=>c===0&&a.zero||a[s.select(c)]||a.other||""}break}}o||o||(o=e,(In.size||$s)&&mo&&console.warn(`Missing translation: "${e}"${t?` [${t}]`:""}`)),I2.set(i,o)}return typeof o=="function"?o(n[0]):o}var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s9={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,i){e.exports=i()})(_o,function(){var n={};n.version="0.2.0";var i=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(g){var v,L;for(v in g)L=g[v],L!==void 0&&g.hasOwnProperty(v)&&(i[v]=L);return this},n.status=null,n.set=function(g){var v=n.isStarted();g=o(g,i.minimum,1),n.status=g===1?null:g;var L=n.render(!v),y=L.querySelector(i.barSelector),p=i.speed,f=i.easing;return L.offsetWidth,s(function(h){i.positionUsing===""&&(i.positionUsing=n.getPositioningCSS()),a(y,r(g,p,f)),g===1?(a(L,{transition:"none",opacity:1}),L.offsetWidth,setTimeout(function(){a(L,{transition:"all "+p+"ms linear",opacity:0}),setTimeout(function(){n.remove(),h()},p)},p)):setTimeout(h,p)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var g=function(){setTimeout(function(){!n.status||(n.trickle(),g())},i.trickleSpeed)};return i.trickle&&g(),this},n.done=function(g){return!g&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(g){var v=n.status;return v?(typeof g!="number"&&(g=(1-v)*o(Math.random()*v,.1,.95)),v=o(v+g,0,.994),n.set(v)):n.start()},n.trickle=function(){return n.inc(Math.random()*i.trickleRate)},function(){var g=0,v=0;n.promise=function(L){return!L||L.state()==="resolved"?this:(v===0&&n.start(),g++,v++,L.always(function(){v--,v===0?(g=0,n.done()):n.set((g-v)/g)}),this)}}(),n.render=function(g){if(n.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var v=document.createElement("div");v.id="nprogress",v.innerHTML=i.template;var L=v.querySelector(i.barSelector),y=g?"-100":l(n.status||0),p=document.querySelector(i.parent),f;return a(L,{transition:"all 0 linear",transform:"translate3d("+y+"%,0,0)"}),i.showSpinner||(f=v.querySelector(i.spinnerSelector),f&&m(f)),p!=document.body&&d(p,"nprogress-custom-parent"),p.appendChild(v),v},n.remove=function(){w(document.documentElement,"nprogress-busy"),w(document.querySelector(i.parent),"nprogress-custom-parent");var g=document.getElementById("nprogress");g&&m(g)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var g=document.body.style,v="WebkitTransform"in g?"Webkit":"MozTransform"in g?"Moz":"msTransform"in g?"ms":"OTransform"in g?"O":"";return v+"Perspective"in g?"translate3d":v+"Transform"in g?"translate":"margin"};function o(g,v,L){return g<v?v:g>L?L:g}function l(g){return(-1+g)*100}function r(g,v,L){var y;return i.positionUsing==="translate3d"?y={transform:"translate3d("+l(g)+"%,0,0)"}:i.positionUsing==="translate"?y={transform:"translate("+l(g)+"%,0)"}:y={"margin-left":l(g)+"%"},y.transition="all "+v+"ms "+L,y}var s=function(){var g=[];function v(){var L=g.shift();L&&L(v)}return function(L){g.push(L),g.length==1&&v()}}(),a=function(){var g=["Webkit","O","Moz","ms"],v={};function L(h){return h.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(C,x){return x.toUpperCase()})}function y(h){var C=document.body.style;if(h in C)return h;for(var x=g.length,k=h.charAt(0).toUpperCase()+h.slice(1),V;x--;)if(V=g[x]+k,V in C)return V;return h}function p(h){return h=L(h),v[h]||(v[h]=y(h))}function f(h,C,x){C=p(C),h.style[C]=x}return function(h,C){var x=arguments,k,V;if(x.length==2)for(k in C)V=C[k],V!==void 0&&C.hasOwnProperty(k)&&f(h,k,V);else f(h,x[1],x[2])}}();function c(g,v){var L=typeof g=="string"?g:u(g);return L.indexOf(" "+v+" ")>=0}function d(g,v){var L=u(g),y=L+v;c(L,v)||(g.className=y.substring(1))}function w(g,v){var L=u(g),y;!c(g,v)||(y=L.replace(" "+v+" "," "),g.className=y.substring(1,y.length-1))}function u(g){return(" "+(g.className||"")+" ").replace(/\s+/gi," ")}function m(g){g&&g.parentNode&&g.parentNode.removeChild(g)}return n})})(s9);const Pt=s9.exports,Os=`:host{--content-margin-left: var(--aside-width)}@media screen and (max-width: 1200px){:host{--content-margin-left: 0}}.ldesign-page-doc{min-height:100vh;max-width:100vw;overflow-x:hidden}.ldesign-page-doc .ldesign-body{min-height:100vh;transition:all .2s var(--anim-time-fn-easing)}.ldesign-page-doc .ldesign-body.row{margin-left:var(--content-margin-left)}
`;Pt.configure({showSpinner:!1});const Rs={tag:"ldesign-page",direction:"row",loaded:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:(e,t)=>{Pt.start();function n(){Object.assign(e,{[t]:!0}),Pt.done()}return setTimeout(()=>Pt.done(),3e3),window.NProgress=Pt,window.addEventListener("load",n),()=>window.removeEventListener("load",n)}},render:({direction:e})=>O`
      <div class="ldesign-page-doc">
        <slot name="header"></slot>
        <div class="ldesign-body ${e}">
          <slot></slot>
        </div>
      </div>
    `.css`${Os}`};C1(Rs);function a9(e=t=>{}){const t=document.documentElement,n={attributes:!0},i=l=>{for(const r of l)if(r.attributeName==="theme-mode"){const s=r.target.getAttribute("theme-mode")||"light";s&&e(s)}},o=new MutationObserver(i);return o.observe(t,n),o}function c9(e){if(!e)return;function t(){requestAnimationFrame(()=>{if(!e||!e.shadowRoot||e.patchDom)return;const n=document.createElement("div");n.setAttribute("slot","__render_content__"),n.innerHTML=e.shadowRoot.innerHTML,e.appendChild(n)})}return window.addEventListener("load",t),()=>window.removeEventListener("load",t)}const y0={get:(e,t)=>t||{},set:(e,t)=>t,connect:(e,t)=>{const n=()=>{const i={};if(e.platform==="mobile"){const o=/\/components\//.test(location.pathname);window.innerWidth<960?i.paddingRight="0px":i.paddingRight=o?"400px":""}e.mobileBodyStyle=i};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}};function Ps(){const e=location.host.includes("https")||location.host.includes(".cn")||location.host.includes(".com");return console.log(e),e}function d9(e){if(e===0)return O`<span class="disable-tag">待上线</span>`;if(e===1)return O``;if(e===2)return O`<span class="alpha-tag">Alpha</span>`;if(e===3)return O`<span class="beta-tag">Beta</span>`}function p9(e,t,n){t.preventDefault(),n.status&&(location.href=e.isdev?`http://${window.location.hostname}:${n.port}`:n.path)}function Ns(e,t){return{"@ldesign/desktop":"https://git.longrise.cn:6285/ldesign/ldesign-desktop","@ldesign/desktop-next":"https://git.longrise.cn:6285/ldesign/ldesign-desktop-next","@ldesign/mobile-next":"https://git.longrise.cn:6285/ldesign/ldesign-mobile-next","@ldesign/miniprogram":"https://git.longrise.cn:6285/ldesign/ldesign-miniprogram"}[t]}function Is(e){return{"@ldesign/desktop":"https://www.npmjs.com/package/@ldesign/desktop","@ldesign/desktop-next":"https://www.npmjs.com/package/@ldesign/desktop-next","@ldesign/mobile-next":"https://www.npmjs.com/package/@ldesign/mobile-next","@ldesign/miniprogram":"https://www.npmjs.com/package/@ldesign/miniprogram"}[e]}const js=`:host{position:relative;--header-inner-max-width: 100%;--header-inner-padding: 0 24px;--search-display: block}@media screen and (max-width: 1200px){:host{--search-display: none}}.ldesign-header{height:var(--header-height);background-color:var(--bg-color-container);color:var(--text-secondary);position:relative;z-index:1400;box-shadow:var(--header-box-shadow)}.ldesign-header-inner{padding:var(--header-inner-padding);height:100%;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;max-width:var(--header-inner-max-width);margin:auto;transition:all .25s var(--anim-time-fn-easing)}.ldesign-header-left{display:flex;align-items:center}.ldesign-header-mid{flex:1;display:flex;justify-content:flex-end}.ldesign-header .slot-search{display:var(--search-display)}.ldesign-header-nav{display:flex;align-items:center;justify-content:flex-start;column-gap:8px}.ldesign-header-nav__link{cursor:pointer;padding:4px 16px;margin-left:8px;box-sizing:border-box;height:32px;line-height:24px;color:var(--text-primary);text-decoration:none;border-radius:var(--border-radius);transition:all .1s;display:inline-block;vertical-align:middle;word-break:keep-all;flex-shrink:0}.ldesign-header-nav__link:hover{background:var(--bg-color-container-hover)}.ldesign-header-nav__link:hover .icon svg path{d:path("M3.75 10.2002L7.99274 5.7998L12.2361 10.0425")}.ldesign-header-nav__link.active{color:var(--text-primary);background:var(--bg-color-container-select)}.ldesign-header-nav__link .icon{width:16px;height:16px;display:inline-block;vertical-align:middle;margin-top:-4px;margin-left:4px}.ldesign-header-nav__link .icon svg path{transition:d .2s;stroke:currentColor}.ldesign-header-nav__git{display:inline-flex;color:var(--text-primary);border-radius:var(--border-radius);transition:all .2s linear;width:32px;height:32px;align-items:center;margin:0 8px 0 0;justify-content:center}.ldesign-header-nav__git:hover{background:var(--bg-color-container-hover)}.ldesign-header-nav__git-icon{width:24px;height:24px;display:inline-block}.ldesign-header-nav td-theme-tabs{margin-left:8px}
`,zs=`.ldesign-base-components-links{display:flex;flex-direction:column;padding:24px;width:784px;box-sizing:border-box;row-gap:24px}.ldesign-base-components-links__web,.ldesign-base-components-links__mobile{display:flex;flex-direction:column;row-gap:16px}.ldesign-base-components-links__list{display:flex;flex-wrap:wrap;gap:8px}.ldesign-base-components-links .title{color:var(--text-placeholder);margin:0 8px;font-size:14px;line-height:22px;text-align:left;align-items:flex-start;padding:0}.ldesign-base-components-links .link{border-radius:6px;transition:all .2s linear;color:var(--text-secondary);text-decoration:none;padding:8px;display:inline-flex;align-items:center;width:240px;box-sizing:border-box}.ldesign-base-components-links .link:not(.disabled):hover{color:var(--text-primary);background:var(--bg-color-container-hover)}.ldesign-base-components-links .link .details{display:flex;flex-direction:column;flex:1;margin-left:16px}.ldesign-base-components-links .link .name{font-size:16px;line-height:24px;height:24px}.ldesign-base-components-links .link .version{font-size:14px;line-height:22px;color:var(--text-placeholder)}.ldesign-base-components-links .link .icon{max-width:40px;max-height:40px;margin-right:16px}.ldesign-base-components-links .link.active{color:var(--text-primary);background:var(--bg-color-container-select)}.ldesign-base-components-links .link.disabled{cursor:no-drop}.ldesign-base-components-links .link .disable-tag,.ldesign-base-components-links .link .alpha-tag,.ldesign-base-components-links .link .beta-tag{font-size:12px;border-radius:var(--border-radius);padding:2px 4px;margin-left:8px;vertical-align:bottom}.ldesign-base-components-links .link .disable-tag{color:var(--text-secondary);background:var(--bg-color-tag)}.ldesign-base-components-links .link .alpha-tag{color:var(--brand-main);background:var(--brand-main-light);font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}.ldesign-base-components-links .link .beta-tag{color:var(--success-main);background:var(--success-main-light);font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}
`,Ds=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path fill-rule="evenodd" clip-rule="evenodd"\r
    d="M12 2.23999C6.475 2.23999 2 6.71499 2 12.24C2 16.665 4.8625 20.4025 8.8375 21.7275C9.3375 21.815 9.525 21.515 9.525 21.2525C9.525 21.015 9.5125 20.2275 9.5125 19.39C7 19.8525 6.35 18.7775 6.15 18.215C6.0375 17.9275 5.55 17.04 5.125 16.8025C4.775 16.615 4.275 16.1525 5.1125 16.14C5.9 16.1275 6.4625 16.865 6.65 17.165C7.55 18.6775 8.9875 18.2525 9.5625 17.99C9.65 17.34 9.9125 16.9025 10.2 16.6525C7.975 16.4025 5.65 15.54 5.65 11.715C5.65 10.6275 6.0375 9.72749 6.675 9.02749C6.575 8.77749 6.225 7.75249 6.775 6.37749C6.775 6.37749 7.6125 6.11499 9.525 7.40249C10.325 7.17749 11.175 7.06499 12.025 7.06499C12.875 7.06499 13.725 7.17749 14.525 7.40249C16.4375 6.10249 17.275 6.37749 17.275 6.37749C17.825 7.75249 17.475 8.77749 17.375 9.02749C18.0125 9.72749 18.4 10.615 18.4 11.715C18.4 15.5525 16.0625 16.4025 13.8375 16.6525C14.2 16.965 14.5125 17.565 14.5125 18.5025C14.5125 19.84 14.5 20.915 14.5 21.2525C14.5 21.515 14.6875 21.8275 15.1875 21.7275C17.1727 21.0573 18.8977 19.7815 20.1198 18.0795C21.3419 16.3776 21.9995 14.3352 22 12.24C22 6.71499 17.525 2.23999 12 2.23999Z"\r
    fill="currentColor" />\r
</svg>`,Us=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M3.75 5.7998L7.99274 10.0425L12.2361 5.79921" stroke="currentColor" />\r
</svg>\r
`,Gt=`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M24.0133 5.06641L19.9833 12.0465L15.9535 5.06641H2.5332L19.9835 35.2915L37.4337 5.06641H24.0133Z" fill="#42B983"/>\r
<path d="M24.0137 5.06641L19.9837 12.0465L15.9538 5.06641H9.51367L19.9838 23.2011L30.4539 5.06641H24.0137Z" fill="#35495E"/>\r
</svg>\r
`,qs=`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<mask id="mask0_22539_139637" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">\r
<rect width="40" height="40" fill="white"/>\r
</mask>\r
<g mask="url(#mask0_22539_139637)">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.4972 4.95434C35.1486 6.25306 36.7951 8.81475 37.3777 12.1934C37.9432 15.473 36.4782 18.0897 34.8157 19.8171C33.1907 21.5055 31.1401 22.6188 29.704 23.0506C28.3818 23.4482 26.9876 22.6987 26.59 21.3764C26.1924 20.0542 26.942 18.66 28.2642 18.2624C28.8967 18.0722 30.1971 17.4056 31.2131 16.3499C32.1915 15.3333 32.6572 14.2419 32.4504 13.043C32.0677 10.8235 31.1629 9.86839 30.2978 9.4446C29.3298 8.97047 27.8151 8.86811 25.7622 9.53967C23.2029 10.3769 22.7262 12.1074 22.6585 12.7263V28.3271L22.6246 28.5308C22.3096 30.4256 21.0062 32.7905 18.9145 34.4353C16.6883 36.1857 13.5289 37.1461 9.75544 35.9603C5.964 34.7689 3.98007 32.1666 3.23478 29.4408C2.53713 26.8892 2.92557 24.2691 3.68407 22.6241C4.14363 21.6274 5.13716 20.3341 6.39848 19.2718C7.67494 18.1968 9.53668 17.0968 11.7876 17.0101C13.1673 16.9569 14.3289 18.0322 14.3821 19.4119C14.4353 20.7916 13.3599 21.9532 11.9802 22.0063C11.2523 22.0344 10.4251 22.4177 9.61935 23.0962C8.79849 23.7876 8.31664 24.5182 8.22464 24.7177C7.94126 25.3323 7.68144 26.7458 8.05776 28.1221C8.38644 29.3243 9.19871 30.5443 11.2543 31.1903C13.3279 31.8419 14.7885 31.319 15.8239 30.5048C16.8991 29.6594 17.4928 28.509 17.6585 27.8677V12.5293L17.6648 12.4407C17.8097 10.4042 19.1476 6.44281 24.2076 4.7875C26.9814 3.8801 29.9486 3.70596 32.4972 4.95434Z" fill="#00A870"/>\r
</g>\r
</svg>\r
`,Ws='<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1672371994812" class="icon" width="24" height="24" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2676" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M768 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h298.666667V469.333333h170.666666v426.666667h42.666667a128 128 0 0 0 128-128V256a128 128 0 0 0-128-128z" p-id="2677" fill="currentColor"></path></svg>',Ks={headerList:[{name:"生态",type:"base",target:"_self",children:[{name:"Web 桌面端",type:"web",links:[{name:"vue2桌面端",icon:Gt,path:"/ldesign/desktop/",port:16e3,npm:"@ldesign/desktop",status:2},{name:"vue3桌面端",icon:Gt,path:"/ldesign/desktop-next/",port:17e3,npm:"@ldesign/desktop-next",status:2}]},{name:"Mobile 移动端",type:"mobile",links:[{name:"vue3移动端",icon:Gt,path:"/ldesign/mobile-next/",port:18e3,npm:"@ldesign/mobile-next",status:3},{name:"微信小程序",icon:qs,path:"/ldesign/miniprogram/",port:19e3,npm:"@ldesign/miniprogram",status:3}]}]}],baseComponentPrefix:["desktop","desktop-next","mobile-next","miniprogram"]},{headerList:Gs,baseComponentPrefix:Ys}=Ks;function g9(e){return/^https?:/.test(e)?location.href.includes(e):location.pathname.includes(e)}function Xs(e,t,n){return O`
    <ldesign-popup trigger-type="hover" placement="bottom" portalStyle="${zs}">
      ${t}
      <div
        slot="content"
        class="ldesign-base-components-links"
      >
        ${n.map(i=>O`
            <div
              class="ldesign-base-components-links__${i.type}"
            >
              <p class="title">
                ${i.name}
              </p>
              <div
                class="ldesign-base-components-links__list"
              >
                ${i.links.map(o=>O`
                    <a
                      href="${o.path}"
                      class="link ${g9(o.path)?"active":""} ${o.status?"":"disabled"}"
                      onclick=${(l,r)=>p9(l,r,o)}
                    >
                      ${o.icon.includes("http")?O`
                          <img src="${o.icon}"/>
                        `:O`
                          <span innerHTML="${o.icon}"></span>
                        `}
                      <div class="details">
                        <span class="name">
                          ${o.name} ${d9(o.status)}
                        </span>
                        <span class="version">
                          ${o.status?`Version：${e.npmVersions[o.npm]}`:"未发布"}
                        </span>
                      </div>
                    </a>
                  `)}
              </div>
            </div>
          `)}
      </div>
    </ldesign-popup>
  `}function Js(e,t,n,i){const{ishash:o,disabledIcon:l}=e;let r=O`
    <a
      class="ldesign-header-nav__git"
      href="${Ns(n,i)}"
      id="${n}"
      target="_blank"
    >
      <span
        class="ldesign-header-nav__git-icon"
        innerHTML="${Ds}"
      ></span>
    </a>
  `,s=O`
    <a
      class="ldesign-header-nav__git"
      href="${Is(i)}"
      id="${n}"
      target="_blank"
    >
      <span
        class="ldesign-header-nav__git-icon"
        innerHTML="${Ws}"
      ></span>
    </a>
  `;const a=()=>{const[,c]=location.pathname.split("/");return Ys.includes(c)};return l&&(r=s=O``),t.map(c=>{if(c.type==="base"){const d=O`
          <span
            class="ldesign-header-nav__link ${a()?"active":""}"
          >
            ${c.name} <i class="icon" innerHTML="${Us}"></i>
          </span>
        `;return Xs(e,d,c.children)}return O`
        <a
          class="ldesign-header-nav__link ${g9(c.path)?"active":""}"
          href="${o?`#${c.path}`:`.${c.path}`}"
          target="${c.target}"
          >${c.name}</a
        >
      `}).concat(r).concat(s)}const Qs={tag:"ldesign-header",platform:"web",framework:"vue",logo:{get:(e,t)=>t,set:(e,t)=>t},title:{get:(e,t)=>t,set:(e,t)=>t},isdev:{get:(e,t)=>t,set:(e,t)=>t},ishash:{get:(e,t)=>t,set:(e,t)=>t},headerMenu:{get:(e,t)=>t||Gs,set:(e,t)=>typeof t=="string"?JSON.parse(t):t},logoMenu:{get:(e,t)=>t,set:(e,t)=>t},disabledTheme:!1,disabledIcon:!1,npmVersions:{get:(e,t)=>t||{},set:(e,t)=>t,connect:e=>{var t,n;const{headerMenu:i}=e,o=(n=(t=i.filter(l=>l.type==="base")[0])==null?void 0:t.children)==null?void 0:n.map(l=>l.links).flat();o==null||o.forEach(l=>{fetch(`https://registry.npmjs.org/${l.npm}`).then(r=>r.json()).then(r=>{const s=r["dist-tags"].latest;e.npmVersions={...e.npmVersions,[l.npm]:s}})})}},collapseMenu:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:(e,t)=>{function n(){const i=window.innerWidth<960;Object.assign(e,{[t]:i})}return requestAnimationFrame(()=>n()),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}},render:e=>{const{platform:t,framework:n,disabledTheme:i,collapseMenu:o,logoMenu:l,headerMenu:r,isdev:s,logo:a,title:c}=e;return O`
      <header class="ldesign-header">
        <div class="ldesign-header-inner">
          <div class="ldesign-header-left">
            <slot name="logo">
              <ldesign-logo title="${c}" image="${a}" isdev="${s}" menu-list="${l}"></ldesign-logo>
            </slot>
          </div>
          <div class="ldesign-header-mid">
            <slot/>
          </div>
          <div class="ldesign-header-nav">
            <slot name="right">
            ${o?O`
              <ldesign-collapse-menu
                disabledTheme="${i}"
                platform="${t}"
                framework="${n}"
                headerList="${r}"
              >
              </ldesign-collapse-menu>
            `:O`
              <div class="slot-search">
                <slot name="search"></slot>
              </div>
              ${Js(e,r,t,n)}
              ${i?O``:O`<ldesign-theme></ldesign-theme>`}
            `}
            </slot>
          </div>
        </div>
      </header>
    `.css`${js}`}};C1(Qs);const ea=`.ldesign-header-logo{height:32px;display:inline-flex;align-items:center}.ldesign-header-logo .home{color:var(--text-primary);text-decoration:none;display:flex;align-items:center;font-family:InputSans;font-weight:700;font-size:22px}.ldesign-header-logo .home svg{display:block;height:32px;width:32px;margin-right:8px}.ldesign-header-logo .divider{width:1px;height:16px;background:var(--component-stroke);margin:0 16px}.ldesign-header-logo__menu{height:32px;cursor:pointer}.ldesign-header-logo__menu svg{border-radius:var(--border-radius);padding:4px;width:32px;height:32px;box-sizing:border-box;transition:all .2s linear;color:var(--text-secondary)}.ldesign-header-logo__menu svg:hover{background-color:var(--bg-color-container-hover)}
`,ta=`<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M36 36V0H0.0140381V36V72H36.014C55.8907 72 72 55.8766 72 36H36Z" fill="url(#paint0_linear_136_261)"/>\r
<path d="M36 36H72C72 16.1234 55.8907 0 36 0V36Z" fill="url(#paint1_linear_136_261)"/>\r
<path d="M37.8555 71.9438C38.3897 71.9157 38.9098 71.8735 39.4299 71.8173C39.5143 71.8032 39.5986 71.8032 39.6829 71.8032C40.1187 71.761 40.5545 71.6907 40.9902 71.6345C41.1589 71.6064 41.3135 71.5923 41.4822 71.5783C41.8618 71.5221 42.2273 71.4518 42.5927 71.3815C42.8176 71.3393 43.0426 71.3112 43.2534 71.269C43.6611 71.1847 44.0547 71.0863 44.4483 70.9879C44.631 70.9457 44.8137 70.9036 44.9965 70.8614C45.4604 70.7349 45.9242 70.6084 46.3881 70.4678C46.4865 70.4397 46.599 70.4116 46.6974 70.3834C47.1332 70.2429 47.5689 70.0882 48.0047 69.9336C48.1312 69.8914 48.2437 69.8493 48.3702 69.8071C49.9586 69.2308 51.4768 68.542 52.9528 67.7548C53.023 67.7126 53.0933 67.6845 53.1495 67.6564C54.1195 67.1222 55.0613 66.5599 55.975 65.9414C56.0172 65.9133 56.0734 65.8852 56.1156 65.8571C59.911 63.2847 63.2003 60.0234 65.7728 56.228C65.8009 56.1999 65.8149 56.1718 65.843 56.1296C67.4315 53.7681 68.7528 51.2237 69.7509 48.5107C69.7649 48.4686 69.779 48.4264 69.8071 48.3842C70.1726 47.3862 70.4818 46.36 70.763 45.3339C70.7911 45.2214 70.8333 45.123 70.8614 45.0105C71.6064 42.1289 72 39.1207 72 36.0141H36V0C16.1234 0 0 16.1093 0 36C0 55.8907 16.1234 72 36 72C36.4077 72 36.8153 71.9859 37.2089 71.9719C37.4338 71.9578 37.6447 71.9578 37.8555 71.9438Z" fill="url(#paint2_linear_136_261)"/>\r
<defs>\r
<linearGradient id="paint0_linear_136_261" x1="36.0067" y1="70.4146" x2="36.0067" y2="2.14917" gradientUnits="userSpaceOnUse">\r
<stop stop-color="#126CD8"/>\r
<stop offset="1" stop-color="#09ACD8"/>\r
</linearGradient>\r
<linearGradient id="paint1_linear_136_261" x1="35.9352" y1="36.0718" x2="63.9011" y2="8.10597" gradientUnits="userSpaceOnUse">\r
<stop stop-color="#042354"/>\r
<stop offset="1" stop-color="#075099"/>\r
</linearGradient>\r
<linearGradient id="paint2_linear_136_261" x1="12.2604" y1="19.7091" x2="53.4512" y2="60.8999" gradientUnits="userSpaceOnUse">\r
<stop stop-color="#126CD8"/>\r
<stop offset="0.0959" stop-color="#1670CF"/>\r
<stop offset="0.2524" stop-color="#1F7CB7"/>\r
<stop offset="0.4501" stop-color="#2F8F8F"/>\r
<stop offset="0.6811" stop-color="#44A958"/>\r
<stop offset="0.9375" stop-color="#60CA12"/>\r
<stop offset="1" stop-color="#67D300"/>\r
</linearGradient>\r
</defs>\r
</svg>\r
`,na=`.ldesign-header-logo__content{--menu-list-width: 600px;--list-direction: row;padding:16px;border-radius:6px;width:var(--menu-list-width);box-sizing:border-box}@media screen and (max-width: 750px){.ldesign-header-logo__content{--list-direction: column;--menu-list-width: 212px}}.ldesign-header-logo__content span.title:hover{cursor:auto;color:var(--text-primary);font-family:InputSans}.ldesign-header-logo__content .title{color:var(--text-primary);display:inline-flex;align-items:flex-end;margin:0 16px 8px;line-height:22px;transition:color .2s linear;text-decoration:none;font-family:InputSans;align-items:flex-start}.ldesign-header-logo__content .title:hover{color:var(--brand-main)}.ldesign-header-logo__content .title i{width:16px;height:16px;margin-left:4px;margin-bottom:2px}.ldesign-header-logo__content .list{display:flex;flex-wrap:wrap;flex-direction:var(--list-direction)}.ldesign-header-logo__content .list-item{width:50%;box-sizing:border-box;padding:8px}.ldesign-header-logo__content .list .item{text-decoration:none;padding:12px;width:100%;border-radius:var(--border-radius);box-sizing:border-box;display:flex;align-items:center;transition:all .2s linear}.ldesign-header-logo__content .list .item span{display:flex;flex-direction:row;align-items:center}.ldesign-header-logo__content .list .item svg,.ldesign-header-logo__content .list .item img{width:48px;height:48px;margin-right:8px}.ldesign-header-logo__content .list .item:hover{color:var(--text-primary);background:var(--bg-color-container-hover)}.ldesign-header-logo__content .list .item.active{color:var(--text-primary);background:var(--bg-color-container-select)}.ldesign-header-logo__content .list .item .icon{width:40px;height:40px;margin-right:16px}.ldesign-header-logo__content .list .item .icon svg{width:100%;height:100%}.ldesign-header-logo__content .list .item .details{display:flex;justify-content:center;flex-direction:column}.ldesign-header-logo__content .list .item .details .name{color:var(--text-primary);font-family:TencentSansW7;margin-bottom:8px}.ldesign-header-logo__content .list .item .details .desc{font-size:12px;line-height:20px;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ldesign-header-logo__content .line{width:100%;height:1px;margin:16px 0;background-color:var(--component-stroke)}
`,ia=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M6.46042 12.4592L5.54119 11.54L9.08157 7.99961L5.54119 4.45923L6.46042 3.53999L10.92 7.99961L6.46042 12.4592Z" fill="currentColor" />\r
</svg>\r
`,oa=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 4.5C6 5.32846 5.32846 6 4.5 6C3.67154 6 3 5.32846 3 4.5C3 3.67154 3.67154 3 4.5 3C5.32846 3 6 3.67154 6 4.5Z" fill="currentColor" />\r
<path d="M6 12C6 12.8285 5.32846 13.5 4.5 13.5C3.67154 13.5 3 12.8285 3 12C3 11.1715 3.67154 10.5 4.5 10.5C5.32846 10.5 6 11.1715 6 12Z" fill="currentColor" />\r
<path d="M4.5 21C5.32846 21 6 20.3285 6 19.5C6 18.6715 5.32846 18 4.5 18C3.67154 18 3 18.6715 3 19.5C3 20.3285 3.67154 21 4.5 21Z" fill="currentColor" />\r
<path d="M13.5 4.5C13.5 5.32846 12.8285 6 12 6C11.1715 6 10.5 5.32846 10.5 4.5C10.5 3.67154 11.1715 3 12 3C12.8285 3 13.5 3.67154 13.5 4.5Z" fill="currentColor" />\r
<path d="M12 13.5C12.8285 13.5 13.5 12.8285 13.5 12C13.5 11.1715 12.8285 10.5 12 10.5C11.1715 10.5 10.5 11.1715 10.5 12C10.5 12.8285 11.1715 13.5 12 13.5Z" fill="currentColor" />\r
<path d="M13.5 19.5C13.5 20.3285 12.8285 21 12 21C11.1715 21 10.5 20.3285 10.5 19.5C10.5 18.6715 11.1715 18 12 18C12.8285 18 13.5 18.6715 13.5 19.5Z" fill="currentColor" />\r
<path d="M19.5 6C20.3285 6 21 5.32846 21 4.5C21 3.67154 20.3285 3 19.5 3C18.6715 3 18 3.67154 18 4.5C18 5.32846 18.6715 6 19.5 6Z" fill="currentColor" />\r
<path d="M21 12C21 12.8285 20.3285 13.5 19.5 13.5C18.6715 13.5 18 12.8285 18 12C18 11.1715 18.6715 10.5 19.5 10.5C20.3285 10.5 21 11.1715 21 12Z" fill="currentColor" />\r
<path d="M19.5 21C20.3285 21 21 20.3285 21 19.5C21 18.6715 20.3285 18 19.5 18C18.6715 18 18 18.6715 18 19.5C18 20.3285 18.6715 21 19.5 21Z" fill="currentColor" />\r
</svg>\r
`,la=`<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M57.4577 24L28 71.9095L164.768 150L28 230.623L58.0889 276L222 173.849V126.151L57.4577 24Z" fill="#2F72A0" />
	<path d="M107.458 24L78 71.9095L214.768 150L78 230.623L108.089 276L272 173.849V126.151L107.458 24Z" fill="#5FB9CE" />
</svg>
`,z2=[{category_title:"开源项目",category_url:"",children:[{key:"@ldesign/site-component",title:"site-component",url:"https://www.npmjs.com/package/@ldesign/site-component",image:la,desc:"基于webcomponent的文档解决方案"},{key:"@ldesign/icons-vue",title:"icons-vue",url:"https://www.npmjs.com/package/@ldesign/icons-vue",image:Gt,desc:"基于vue2的图标综合解决方案"},{key:"@ldesign/icons-vue-next",title:"icons-vue-next",url:"https://www.npmjs.com/package/@ldesign/icons-vue-next",image:Gt,desc:"基于vue3的图标综合解决方案"}]}];function ra(e=[]){return O`
    <div class="list">
      ${e.map(t=>O`
        <div class="list-item">
          <a class="item" href="${t.url}" target="${t.target}">
          ${t.image.includes(".svg")?O`
              <img src="${t.image}"/>
            `:O`
              <span innerHTML="${t.image}"></span>
            `}
            <div class="details">
              <span class="name">${t.title}</span>
              <span class="desc">${t.desc}</span>
            </div>
          </a>
        </div>
      `)}
    </div>`}function sa(e){const t=e.length;return e.map((n,i)=>O`
    ${n.category_url?O`
        <a href="${n.category_url}" class="title" target="${n.target}">
          ${n.category_title} <i innerHTML="${ia}"></i>
        </a>
      `:O`
        <span class="title">
          ${n.category_title}
        </span>
      `}
    ${ra(n.children)}
    ${i<t-1?O`<div class="line"></div>`:O``}
  `)}function aa(e){const{isdev:t}=e;return t?`http://${window.location.hostname}:3000`:"/ldesign"}const ca={tag:"ldesign-logo",image:{get:(e,t)=>t||ta,set:(e,t)=>t},title:{get:(e,t)=>t||"LDesign",set:(e,t)=>t},menuList:{get:(e,t)=>t||[],set:(e,t)=>typeof t=="string"?JSON.parse(t):t},isdev:{get:(e,t)=>t,set:(e,t)=>t},isIntranet:{get:()=>Ps(),set:e=>e,connect:e=>{e.menuList.length||z2&&Object.assign(e,{menuList:z2})}},render:e=>{const{menuList:t,image:n,title:i}=e;return O`
      <div class="ldesign-header-logo">
        <a class="home" href="${aa(e)}" title="ldesign">
          <span innerHTML=${n}></span>
          <span>${i}</span>
        </a>
        <span class="divider"></span>
        <ldesign-popup trigger-type="click" portalStyle="${na}" placement="bottom-start">
          <div class="ldesign-header-logo__menu" innerHTML=${oa}></div>
          <div slot="content" class="ldesign-header-logo__content">
            ${sa(t)}
          </div>
        </ldesign-popup>
      </div>
    `.css`${ea}`}};C1(ca);var T1="top",G1="bottom",Y1="right",F1="left",b0="auto",wn=[T1,G1,Y1,F1],ft="start",dn="end",da="clippingParents",f9="viewport",$t="popper",pa="reference",D2=wn.reduce(function(e,t){return e.concat([t+"-"+ft,t+"-"+dn])},[]),u9=[].concat(wn,[b0]).reduce(function(e,t){return e.concat([t,t+"-"+ft,t+"-"+dn])},[]),ga="beforeRead",fa="read",ua="afterRead",ha="beforeMain",va="main",wa="afterMain",Ca="beforeWrite",ma="write",xa="afterWrite",La=[ga,fa,ua,ha,va,wa,Ca,ma,xa];function ge(e){return e?(e.nodeName||"").toLowerCase():null}function X1(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Ye(e){var t=X1(e).Element;return e instanceof t||e instanceof Element}function K1(e){var t=X1(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function _0(e){if(typeof ShadowRoot>"u")return!1;var t=X1(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function ya(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var i=t.styles[n]||{},o=t.attributes[n]||{},l=t.elements[n];!K1(l)||!ge(l)||(Object.assign(l.style,i),Object.keys(o).forEach(function(r){var s=o[r];s===!1?l.removeAttribute(r):l.setAttribute(r,s===!0?"":s)}))})}function ba(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(i){var o=t.elements[i],l=t.attributes[i]||{},r=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:n[i]),s=r.reduce(function(a,c){return a[c]="",a},{});!K1(o)||!ge(o)||(Object.assign(o.style,s),Object.keys(l).forEach(function(a){o.removeAttribute(a)}))})}}const _a={name:"applyStyles",enabled:!0,phase:"write",fn:ya,effect:ba,requires:["computeStyles"]};function de(e){return e.split("-")[0]}var Ge=Math.max,Jn=Math.min,ut=Math.round;function Ho(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function h9(){return!/^((?!chrome|android).)*safari/i.test(Ho())}function ht(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var i=e.getBoundingClientRect(),o=1,l=1;t&&K1(e)&&(o=e.offsetWidth>0&&ut(i.width)/e.offsetWidth||1,l=e.offsetHeight>0&&ut(i.height)/e.offsetHeight||1);var r=Ye(e)?X1(e):window,s=r.visualViewport,a=!h9()&&n,c=(i.left+(a&&s?s.offsetLeft:0))/o,d=(i.top+(a&&s?s.offsetTop:0))/l,w=i.width/o,u=i.height/l;return{width:w,height:u,top:d,right:c+w,bottom:d+u,left:c,x:c,y:d}}function H0(e){var t=ht(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function v9(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_0(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function Le(e){return X1(e).getComputedStyle(e)}function Ha(e){return["table","td","th"].indexOf(ge(e))>=0}function Te(e){return((Ye(e)?e.ownerDocument:e.document)||window.document).documentElement}function yi(e){return ge(e)==="html"?e:e.assignedSlot||e.parentNode||(_0(e)?e.host:null)||Te(e)}function U2(e){return!K1(e)||Le(e).position==="fixed"?null:e.offsetParent}function Ma(e){var t=/firefox/i.test(Ho()),n=/Trident/i.test(Ho());if(n&&K1(e)){var i=Le(e);if(i.position==="fixed")return null}var o=yi(e);for(_0(o)&&(o=o.host);K1(o)&&["html","body"].indexOf(ge(o))<0;){var l=Le(o);if(l.transform!=="none"||l.perspective!=="none"||l.contain==="paint"||["transform","perspective"].indexOf(l.willChange)!==-1||t&&l.willChange==="filter"||t&&l.filter&&l.filter!=="none")return o;o=o.parentNode}return null}function Cn(e){for(var t=X1(e),n=U2(e);n&&Ha(n)&&Le(n).position==="static";)n=U2(n);return n&&(ge(n)==="html"||ge(n)==="body"&&Le(n).position==="static")?t:n||Ma(e)||t}function M0(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Yt(e,t,n){return Ge(e,Jn(t,n))}function ka(e,t,n){var i=Yt(e,t,n);return i>n?n:i}function w9(){return{top:0,right:0,bottom:0,left:0}}function C9(e){return Object.assign({},w9(),e)}function m9(e,t){return t.reduce(function(n,i){return n[i]=e,n},{})}var Va=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,C9(typeof e!="number"?e:m9(e,wn))};function Za(e){var t,n=e.state,i=e.name,o=e.options,l=n.elements.arrow,r=n.modifiersData.popperOffsets,s=de(n.placement),a=M0(s),c=[F1,Y1].indexOf(s)>=0,d=c?"height":"width";if(!(!l||!r)){var w=Va(o.padding,n),u=H0(l),m=a==="y"?T1:F1,g=a==="y"?G1:Y1,v=n.rects.reference[d]+n.rects.reference[a]-r[a]-n.rects.popper[d],L=r[a]-n.rects.reference[a],y=Cn(l),p=y?a==="y"?y.clientHeight||0:y.clientWidth||0:0,f=v/2-L/2,h=w[m],C=p-u[d]-w[g],x=p/2-u[d]/2+f,k=Yt(h,x,C),V=a;n.modifiersData[i]=(t={},t[V]=k,t.centerOffset=k-x,t)}}function Ea(e){var t=e.state,n=e.options,i=n.element,o=i===void 0?"[data-popper-arrow]":i;if(o!=null&&!(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o))){if(!v9(t.elements.popper,o))return;t.elements.arrow=o}}const Aa={name:"arrow",enabled:!0,phase:"main",fn:Za,effect:Ea,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function vt(e){return e.split("-")[1]}var Sa={top:"auto",right:"auto",bottom:"auto",left:"auto"};function $a(e){var t=e.x,n=e.y,i=window,o=i.devicePixelRatio||1;return{x:ut(t*o)/o||0,y:ut(n*o)/o||0}}function q2(e){var t,n=e.popper,i=e.popperRect,o=e.placement,l=e.variation,r=e.offsets,s=e.position,a=e.gpuAcceleration,c=e.adaptive,d=e.roundOffsets,w=e.isFixed,u=r.x,m=u===void 0?0:u,g=r.y,v=g===void 0?0:g,L=typeof d=="function"?d({x:m,y:v}):{x:m,y:v};m=L.x,v=L.y;var y=r.hasOwnProperty("x"),p=r.hasOwnProperty("y"),f=F1,h=T1,C=window;if(c){var x=Cn(n),k="clientHeight",V="clientWidth";if(x===X1(n)&&(x=Te(n),Le(x).position!=="static"&&s==="absolute"&&(k="scrollHeight",V="scrollWidth")),x=x,o===T1||(o===F1||o===Y1)&&l===dn){h=G1;var Z=w&&x===C&&C.visualViewport?C.visualViewport.height:x[k];v-=Z-i.height,v*=a?1:-1}if(o===F1||(o===T1||o===G1)&&l===dn){f=Y1;var S=w&&x===C&&C.visualViewport?C.visualViewport.width:x[V];m-=S-i.width,m*=a?1:-1}}var R=Object.assign({position:s},c&&Sa),T=d===!0?$a({x:m,y:v}):{x:m,y:v};if(m=T.x,v=T.y,a){var K;return Object.assign({},R,(K={},K[h]=p?"0":"",K[f]=y?"0":"",K.transform=(C.devicePixelRatio||1)<=1?"translate("+m+"px, "+v+"px)":"translate3d("+m+"px, "+v+"px, 0)",K))}return Object.assign({},R,(t={},t[h]=p?v+"px":"",t[f]=y?m+"px":"",t.transform="",t))}function Ba(e){var t=e.state,n=e.options,i=n.gpuAcceleration,o=i===void 0?!0:i,l=n.adaptive,r=l===void 0?!0:l,s=n.roundOffsets,a=s===void 0?!0:s,c={placement:de(t.placement),variation:vt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,q2(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,q2(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Ta={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ba,data:{}};var Zn={passive:!0};function Fa(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,l=o===void 0?!0:o,r=i.resize,s=r===void 0?!0:r,a=X1(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return l&&c.forEach(function(d){d.addEventListener("scroll",n.update,Zn)}),s&&a.addEventListener("resize",n.update,Zn),function(){l&&c.forEach(function(d){d.removeEventListener("scroll",n.update,Zn)}),s&&a.removeEventListener("resize",n.update,Zn)}}const Oa={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Fa,data:{}};var Ra={left:"right",right:"left",bottom:"top",top:"bottom"};function jn(e){return e.replace(/left|right|bottom|top/g,function(t){return Ra[t]})}var Pa={start:"end",end:"start"};function W2(e){return e.replace(/start|end/g,function(t){return Pa[t]})}function k0(e){var t=X1(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function V0(e){return ht(Te(e)).left+k0(e).scrollLeft}function Na(e,t){var n=X1(e),i=Te(e),o=n.visualViewport,l=i.clientWidth,r=i.clientHeight,s=0,a=0;if(o){l=o.width,r=o.height;var c=h9();(c||!c&&t==="fixed")&&(s=o.offsetLeft,a=o.offsetTop)}return{width:l,height:r,x:s+V0(e),y:a}}function Ia(e){var t,n=Te(e),i=k0(e),o=(t=e.ownerDocument)==null?void 0:t.body,l=Ge(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),r=Ge(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-i.scrollLeft+V0(e),a=-i.scrollTop;return Le(o||n).direction==="rtl"&&(s+=Ge(n.clientWidth,o?o.clientWidth:0)-l),{width:l,height:r,x:s,y:a}}function Z0(e){var t=Le(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function x9(e){return["html","body","#document"].indexOf(ge(e))>=0?e.ownerDocument.body:K1(e)&&Z0(e)?e:x9(yi(e))}function Xt(e,t){var n;t===void 0&&(t=[]);var i=x9(e),o=i===((n=e.ownerDocument)==null?void 0:n.body),l=X1(i),r=o?[l].concat(l.visualViewport||[],Z0(i)?i:[]):i,s=t.concat(r);return o?s:s.concat(Xt(yi(r)))}function Mo(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ja(e,t){var n=ht(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function K2(e,t,n){return t===f9?Mo(Na(e,n)):Ye(t)?ja(t,n):Mo(Ia(Te(e)))}function za(e){var t=Xt(yi(e)),n=["absolute","fixed"].indexOf(Le(e).position)>=0,i=n&&K1(e)?Cn(e):e;return Ye(i)?t.filter(function(o){return Ye(o)&&v9(o,i)&&ge(o)!=="body"}):[]}function Da(e,t,n,i){var o=t==="clippingParents"?za(e):[].concat(t),l=[].concat(o,[n]),r=l[0],s=l.reduce(function(a,c){var d=K2(e,c,i);return a.top=Ge(d.top,a.top),a.right=Jn(d.right,a.right),a.bottom=Jn(d.bottom,a.bottom),a.left=Ge(d.left,a.left),a},K2(e,r,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function L9(e){var t=e.reference,n=e.element,i=e.placement,o=i?de(i):null,l=i?vt(i):null,r=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,a;switch(o){case T1:a={x:r,y:t.y-n.height};break;case G1:a={x:r,y:t.y+t.height};break;case Y1:a={x:t.x+t.width,y:s};break;case F1:a={x:t.x-n.width,y:s};break;default:a={x:t.x,y:t.y}}var c=o?M0(o):null;if(c!=null){var d=c==="y"?"height":"width";switch(l){case ft:a[c]=a[c]-(t[d]/2-n[d]/2);break;case dn:a[c]=a[c]+(t[d]/2-n[d]/2);break}}return a}function pn(e,t){t===void 0&&(t={});var n=t,i=n.placement,o=i===void 0?e.placement:i,l=n.strategy,r=l===void 0?e.strategy:l,s=n.boundary,a=s===void 0?da:s,c=n.rootBoundary,d=c===void 0?f9:c,w=n.elementContext,u=w===void 0?$t:w,m=n.altBoundary,g=m===void 0?!1:m,v=n.padding,L=v===void 0?0:v,y=C9(typeof L!="number"?L:m9(L,wn)),p=u===$t?pa:$t,f=e.rects.popper,h=e.elements[g?p:u],C=Da(Ye(h)?h:h.contextElement||Te(e.elements.popper),a,d,r),x=ht(e.elements.reference),k=L9({reference:x,element:f,strategy:"absolute",placement:o}),V=Mo(Object.assign({},f,k)),Z=u===$t?V:x,S={top:C.top-Z.top+y.top,bottom:Z.bottom-C.bottom+y.bottom,left:C.left-Z.left+y.left,right:Z.right-C.right+y.right},R=e.modifiersData.offset;if(u===$t&&R){var T=R[o];Object.keys(S).forEach(function(K){var p1=[Y1,G1].indexOf(K)>=0?1:-1,H1=[T1,G1].indexOf(K)>=0?"y":"x";S[K]+=T[H1]*p1})}return S}function Ua(e,t){t===void 0&&(t={});var n=t,i=n.placement,o=n.boundary,l=n.rootBoundary,r=n.padding,s=n.flipVariations,a=n.allowedAutoPlacements,c=a===void 0?u9:a,d=vt(i),w=d?s?D2:D2.filter(function(g){return vt(g)===d}):wn,u=w.filter(function(g){return c.indexOf(g)>=0});u.length===0&&(u=w);var m=u.reduce(function(g,v){return g[v]=pn(e,{placement:v,boundary:o,rootBoundary:l,padding:r})[de(v)],g},{});return Object.keys(m).sort(function(g,v){return m[g]-m[v]})}function qa(e){if(de(e)===b0)return[];var t=jn(e);return[W2(e),t,W2(t)]}function Wa(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=n.mainAxis,l=o===void 0?!0:o,r=n.altAxis,s=r===void 0?!0:r,a=n.fallbackPlacements,c=n.padding,d=n.boundary,w=n.rootBoundary,u=n.altBoundary,m=n.flipVariations,g=m===void 0?!0:m,v=n.allowedAutoPlacements,L=t.options.placement,y=de(L),p=y===L,f=a||(p||!g?[jn(L)]:qa(L)),h=[L].concat(f).reduce(function(u1,A){return u1.concat(de(A)===b0?Ua(t,{placement:A,boundary:d,rootBoundary:w,padding:c,flipVariations:g,allowedAutoPlacements:v}):A)},[]),C=t.rects.reference,x=t.rects.popper,k=new Map,V=!0,Z=h[0],S=0;S<h.length;S++){var R=h[S],T=de(R),K=vt(R)===ft,p1=[T1,G1].indexOf(T)>=0,H1=p1?"width":"height",i1=pn(t,{placement:R,boundary:d,rootBoundary:w,altBoundary:u,padding:c}),e1=p1?K?Y1:F1:K?G1:T1;C[H1]>x[H1]&&(e1=jn(e1));var q=jn(e1),o1=[];if(l&&o1.push(i1[T]<=0),s&&o1.push(i1[e1]<=0,i1[q]<=0),o1.every(function(u1){return u1})){Z=R,V=!1;break}k.set(R,o1)}if(V)for(var m1=g?3:1,x1=function(u1){var A=h.find(function(z){var P=k.get(z);if(P)return P.slice(0,u1).every(function(U){return U})});if(A)return Z=A,"break"},t1=m1;t1>0;t1--){var $1=x1(t1);if($1==="break")break}t.placement!==Z&&(t.modifiersData[i]._skip=!0,t.placement=Z,t.reset=!0)}}const Ka={name:"flip",enabled:!0,phase:"main",fn:Wa,requiresIfExists:["offset"],data:{_skip:!1}};function G2(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Y2(e){return[T1,Y1,G1,F1].some(function(t){return e[t]>=0})}function Ga(e){var t=e.state,n=e.name,i=t.rects.reference,o=t.rects.popper,l=t.modifiersData.preventOverflow,r=pn(t,{elementContext:"reference"}),s=pn(t,{altBoundary:!0}),a=G2(r,i),c=G2(s,o,l),d=Y2(a),w=Y2(c);t.modifiersData[n]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:w},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":w})}const Ya={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ga};function Xa(e,t,n){var i=de(e),o=[F1,T1].indexOf(i)>=0?-1:1,l=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,r=l[0],s=l[1];return r=r||0,s=(s||0)*o,[F1,Y1].indexOf(i)>=0?{x:s,y:r}:{x:r,y:s}}function Ja(e){var t=e.state,n=e.options,i=e.name,o=n.offset,l=o===void 0?[0,0]:o,r=u9.reduce(function(d,w){return d[w]=Xa(w,t.rects,l),d},{}),s=r[t.placement],a=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=r}const Qa={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ja};function e6(e){var t=e.state,n=e.name;t.modifiersData[n]=L9({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const t6={name:"popperOffsets",enabled:!0,phase:"read",fn:e6,data:{}};function n6(e){return e==="x"?"y":"x"}function i6(e){var t=e.state,n=e.options,i=e.name,o=n.mainAxis,l=o===void 0?!0:o,r=n.altAxis,s=r===void 0?!1:r,a=n.boundary,c=n.rootBoundary,d=n.altBoundary,w=n.padding,u=n.tether,m=u===void 0?!0:u,g=n.tetherOffset,v=g===void 0?0:g,L=pn(t,{boundary:a,rootBoundary:c,padding:w,altBoundary:d}),y=de(t.placement),p=vt(t.placement),f=!p,h=M0(y),C=n6(h),x=t.modifiersData.popperOffsets,k=t.rects.reference,V=t.rects.popper,Z=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,S=typeof Z=="number"?{mainAxis:Z,altAxis:Z}:Object.assign({mainAxis:0,altAxis:0},Z),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(x){if(l){var K,p1=h==="y"?T1:F1,H1=h==="y"?G1:Y1,i1=h==="y"?"height":"width",e1=x[h],q=e1+L[p1],o1=e1-L[H1],m1=m?-V[i1]/2:0,x1=p===ft?k[i1]:V[i1],t1=p===ft?-V[i1]:-k[i1],$1=t.elements.arrow,u1=m&&$1?H0($1):{width:0,height:0},A=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:w9(),z=A[p1],P=A[H1],U=Yt(0,k[i1],u1[i1]),l1=f?k[i1]/2-m1-U-z-S.mainAxis:x1-U-z-S.mainAxis,c1=f?-k[i1]/2+m1+U+P+S.mainAxis:t1+U+P+S.mainAxis,X=t.elements.arrow&&Cn(t.elements.arrow),b=X?h==="y"?X.clientTop||0:X.clientLeft||0:0,M=(K=R==null?void 0:R[h])!=null?K:0,E=e1+l1-M-b,$=e1+c1-M,B=Yt(m?Jn(q,E):q,e1,m?Ge(o1,$):o1);x[h]=B,T[h]=B-e1}if(s){var I,D=h==="x"?T1:F1,N=h==="x"?G1:Y1,j=x[C],F=C==="y"?"height":"width",Y=j+L[D],W=j-L[N],G=[T1,F1].indexOf(y)!==-1,J=(I=R==null?void 0:R[C])!=null?I:0,s1=G?Y:j-k[F]-V[F]-J+S.altAxis,h1=G?j+k[F]+V[F]-J-S.altAxis:W,g1=m&&G?ka(s1,j,h1):Yt(m?s1:Y,j,m?h1:W);x[C]=g1,T[C]=g1-j}t.modifiersData[i]=T}}const o6={name:"preventOverflow",enabled:!0,phase:"main",fn:i6,requiresIfExists:["offset"]};function l6(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function r6(e){return e===X1(e)||!K1(e)?k0(e):l6(e)}function s6(e){var t=e.getBoundingClientRect(),n=ut(t.width)/e.offsetWidth||1,i=ut(t.height)/e.offsetHeight||1;return n!==1||i!==1}function a6(e,t,n){n===void 0&&(n=!1);var i=K1(t),o=K1(t)&&s6(t),l=Te(t),r=ht(e,o,n),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(i||!i&&!n)&&((ge(t)!=="body"||Z0(l))&&(s=r6(t)),K1(t)?(a=ht(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):l&&(a.x=V0(l))),{x:r.left+s.scrollLeft-a.x,y:r.top+s.scrollTop-a.y,width:r.width,height:r.height}}function c6(e){var t=new Map,n=new Set,i=[];e.forEach(function(l){t.set(l.name,l)});function o(l){n.add(l.name);var r=[].concat(l.requires||[],l.requiresIfExists||[]);r.forEach(function(s){if(!n.has(s)){var a=t.get(s);a&&o(a)}}),i.push(l)}return e.forEach(function(l){n.has(l.name)||o(l)}),i}function d6(e){var t=c6(e);return La.reduce(function(n,i){return n.concat(t.filter(function(o){return o.phase===i}))},[])}function p6(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function g6(e){var t=e.reduce(function(n,i){var o=n[i.name];return n[i.name]=o?Object.assign({},o,i,{options:Object.assign({},o.options,i.options),data:Object.assign({},o.data,i.data)}):i,n},{});return Object.keys(t).map(function(n){return t[n]})}var X2={placement:"bottom",modifiers:[],strategy:"absolute"};function J2(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function f6(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,i=n===void 0?[]:n,o=t.defaultOptions,l=o===void 0?X2:o;return function(r,s,a){a===void 0&&(a=l);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},X2,l),modifiersData:{},elements:{reference:r,popper:s},attributes:{},styles:{}},d=[],w=!1,u={state:c,setOptions:function(v){var L=typeof v=="function"?v(c.options):v;g(),c.options=Object.assign({},l,c.options,L),c.scrollParents={reference:Ye(r)?Xt(r):r.contextElement?Xt(r.contextElement):[],popper:Xt(s)};var y=d6(g6([].concat(i,c.options.modifiers)));return c.orderedModifiers=y.filter(function(p){return p.enabled}),m(),u.update()},forceUpdate:function(){if(!w){var v=c.elements,L=v.reference,y=v.popper;if(!J2(L,y))return;c.rects={reference:a6(L,Cn(y),c.options.strategy==="fixed"),popper:H0(y)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(Z){return c.modifiersData[Z.name]=Object.assign({},Z.data)});for(var p=0,f=0;f<c.orderedModifiers.length;f++){if(c.reset===!0){c.reset=!1,f=-1;continue}var h=c.orderedModifiers[f],C=h.fn,x=h.options,k=x===void 0?{}:x,V=h.name;typeof C=="function"&&(c=C({state:c,options:k,name:V,instance:u})||c)}}},update:p6(function(){return new Promise(function(v){u.forceUpdate(),v(c)})}),destroy:function(){g(),w=!0}};if(!J2(r,s))return u;u.setOptions(a).then(function(v){!w&&a.onFirstUpdate&&a.onFirstUpdate(v)});function m(){c.orderedModifiers.forEach(function(v){var L=v.name,y=v.options,p=y===void 0?{}:y,f=v.effect;if(typeof f=="function"){var h=f({state:c,name:L,instance:u,options:p}),C=function(){};d.push(h||C)}})}function g(){d.forEach(function(v){return v()}),d=[]}return u}}var u6=[Oa,t6,Ta,_a,Qa,Ka,o6,Aa,Ya],h6=f6({defaultModifiers:u6});const v6=`.ldesign-popup{flex-shrink:0;box-sizing:border-box;display:inline-flex}
`;function Q2(e){e.triggerType==="click"&&(e.visible=!e.visible,ie(e,"visible-change",{detail:{visible:e.visible}}))}function En(e,t){e.triggerType==="hover"&&(t==="enter"?e.visible=!0:e.visible=!1,ie(e,"visible-change",{detail:{visible:e.visible}}))}const w6={tag:"ldesign-popup",reference:({render:e})=>e().querySelector(".ldesign-popup"),placement:"bottom-end",portalClass:"",portalStyle:"",triggerType:"hover",visible:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:e=>{const{reference:t,placement:n}=e;requestAnimationFrame(()=>{e.portals=document.getElementById("__ld_portals__"),e.portals||(e.portals=document.createElement("div"),e.portals.id="__ld_portals__",document.body.appendChild(e.portals));const o=e.querySelector('[slot="content"]'),l=`<style>${e.portalStyle}</style>`;e.portal=document.createElement("ldesign-portal"),e.portal.className=e.portalClass,e.portal.innerHTML=l,e.portal.appendChild(o),e.portal.addEventListener("click",r=>Q2(e)),e.portal.addEventListener("mouseenter",()=>En(e,"enter")),e.portal.addEventListener("mouseleave",()=>En(e,"leave")),e.portals.appendChild(e.portal),requestAnimationFrame(()=>{const r=["top","bottom"].some(s=>n.includes(s));e.popper=h6(t,e.portal,{placement:n,modifiers:[{name:"offset",options:{offset:r?[0,8]:[0,16]}}]}),r&&(e.popper.state.styles.popper.minWidth=`${t.offsetWidth}px`)})});function i(o){!o.path||!t||e.contains(o.path[0])||(e.visible=!1,ie(e,"visible-change",{detail:{visible:e.visible}}))}return document.addEventListener("click",i),()=>{let o,l;(l=(o=e.portals)==null?void 0:o.removeChild)==null||l.call(o,e.portal),document.removeEventListener("click",i)}},observe:(e,t)=>{let n,i;!e.portal||(e.portal.visible=t,(i=(n=e.popper)==null?void 0:n.update)==null||i.call(n))}},render:e=>{const{placement:t}=e;return O`
      <div
        class="ldesign-popup"
        data-placement="${t}"
        onclick="${Q2}"
        onmouseenter="${n=>En(n,"enter")}"
        onmouseleave="${n=>En(n,"leave")}"
      >
        <slot></slot>
      </div>
    `.css`${v6}`}};C1(w6);const C6=`:host{--portal-border-radius: 9px;--portal-filter: blur(6px);--portal-background: var(--bg-color-container-transparent);position:absolute;z-index:3000;opacity:0;visibility:hidden;transition:clip-path .25s var(--anim-time-fn-easing),opacity .25s linear,visibility .25s linear;clip-path:polygon(-10% -10%,110% -10%,110% -10%,-10% -10%)}:host([visible]){opacity:1;visibility:visible;clip-path:polygon(-10% -10%,110% 0%,110% 110%,-10% 110%)}.ldesign-portal{padding:var(--portal-padding, 2px);box-shadow:var(--portal-box-shadow);border-radius:var(--portal-border-radius);background-color:var(--portal-background);backdrop-filter:var(--portal-filter);-webkit-backdrop-filter:var(--portal-filter);box-sizing:border-box;display:block}
`,m6={tag:"ldesign-portal",visible:!1,portalStyle:"",render:e=>O`
      ${e.portalStyle?O`<style>${e.portalStyle}</style>`:""}
      <slot class="ldesign-portal" name="content"></slot>
    `.css`${C6}`};C1(m6);const x6=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M3.75 5.7998L7.99274 10.0425L12.2361 5.79921" stroke="currentColor" />\r
</svg>\r
`,L6=`:host{--input-width: 210px}.ldesign-select-input{width:var(--input-width, 100%);display:inline-flex;align-items:center;gap:8px;border:1px solid var(--component-border);border-radius:3px;padding:0 8px;transition:all .2s linear;box-sizing:border-box;height:32px;line-height:32px}.ldesign-select-input:hover{border-color:var(--brand-main)}.ldesign-select-input.focus{border-color:var(--brand-main);box-shadow:0 0 0 2px var(--brand-main-focus)}.ldesign-select-input--borderless{border-color:transparent}.ldesign-select-input--borderless:hover{border-color:var(--component-border)}.ldesign-select-input--borderless.focus{border-color:var(--brand-main);box-shadow:0 0 0 2px var(--brand-main-focus)}.ldesign-select-input__inner{flex:1;border:none;outline:none;padding:0;max-width:100%;min-width:0;color:var(--text-primary);height:100%;background-color:transparent}.ldesign-select-input__inner:read-only{cursor:pointer}.ldesign-select-input .suffix-icon{display:inline-flex}.ldesign-select-input .suffix-icon svg path{transition:d .2s;stroke:currentColor}.ldesign-select-input .suffix-icon.up svg path{d:path("M3.75 10.2002L7.99274 5.7998L12.2361 10.0425")}
`,y6=`.ldesign-portal{--portal-padding: 0;--portal-filter: none;--portal-border-radius: 3px;--portal-box-shadow: none;--portal-background: var(--bg-color-container)}.ldesign-select-dropdown{width:var(--input-width, 100%);max-height:300px;box-shadow:var(--shadow-1);border-radius:3px;box-sizing:border-box;padding:6px;overflow:auto}.ldesign-select-dropdown::-webkit-scrollbar{width:12px;background:transparent}.ldesign-select-dropdown::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:var(--bg-color-scroll)}.ldesign-select-list{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:4px}.ldesign-select-list__item{list-style:none;cursor:pointer;margin:0;padding:4px 8px;height:28px;line-height:20px;box-sizing:border-box;border-radius:3px;transition:all .2s var(--anim-time-fn-easing)}.ldesign-select-list__item:hover{background:var(--bg-color-container-hover)}.ldesign-select-list__item.is-active{color:var(--brand-main);background-color:var(--brand-main-light)}
`;function b6(e){const{options:t=[]}=e;function n(i,o){i.value=o.value,requestAnimationFrame(()=>{i.visible=!1}),ie(i,"change",{detail:{value:i.value}})}return O`
    <ul class="ldesign-select-list">
      ${t.map(i=>{const o=i.value==e.value;return O`
          <li
            onclick="${l=>n(l,i)}"
            class="ldesign-select-list__item ${o?"is-active":""}"
          >
            ${i.label}
          </li>
        `})}
    </ul>
  `}const _6={tag:"ldesign-select",borderless:!1,value:"",visible:!1,options:{get:(e,t)=>t||[],set:(e,t)=>t},render:e=>{const{options:t,value:n,visible:i,borderless:o}=e,l=(t.find(r=>r.value==n)||{}).label||"";return O`
      <ldesign-popup
        visible="${i}"
        placement="bottom-start"
        trigger-type="click"
        portal-class="td-select-portal"
        portalStyle="${y6}"
        onvisible-change="${(r,s)=>r.visible=s.detail.visible}"
      >
        <div class="${{focus:i,"ldesign-select-input":!0,"ldesign-select-input--borderless":o}}">
          <input
            class="ldesign-select-input__inner"
            readonly
            value="${l}"
          />
          <i
            class="suffix-icon ${i?"up":""}"
            innerHTML="${x6}"
          ></i>
        </div>
        <div slot="content" class="ldesign-select-dropdown">${b6(e)}</div>
      </ldesign-popup>
    `.css`${L6}`}};C1(_6);const H6=`.ldesign-switch{position:relative;display:inline-flex;vertical-align:middle;align-items:center;outline:none;border:0;padding:0;height:20px;border-radius:10px;min-width:36px;transition:all .2s var(--anim-time-fn-ease-out);background-color:var(--bg-color-thead);cursor:pointer;user-select:none}.ldesign-switch.size-small{min-width:28px;height:16px;line-height:16px;border-radius:8px}.ldesign-switch.size-small .ldesign-switch__handle{width:12px;height:12px}.ldesign-switch.size-large{min-width:44px;height:24px;line-height:24px;border-radius:12px}.ldesign-switch.size-large .ldesign-switch__handle{width:20px;height:20px}.ldesign-switch.is-checked{background-color:var(--brand-main)}.ldesign-switch.is-checked .ldesign-switch__handle{left:calc(100% - 2px);transform:translate(-100%)}.ldesign-switch__handle{position:absolute;display:flex;align-items:center;justify-content:center;top:2px;left:2px;width:16px;height:16px;border-radius:12px;transition:all .2s var(--anim-time-fn-easing)}.ldesign-switch__handle:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:12px;background-color:var(--text-anti);transition:all .2s var(--anim-time-fn-easing)}.ldesign-switch:active:not(.is-disabled) .ldesign-switch__handle:before{left:0;right:-6px}.ldesign-switch:active:not(.is-disabled).is-checked .ldesign-switch__handle:before{right:0;left:-6px}.ldesign-switch:active:not(.is-disabled) .ldesign-switch__content{opacity:0}
`;function M6(e){e.value=!e.value,ie(e,"change",{detail:{value:e.value}})}const k6={tag:"ldesign-switch",value:!1,size:"medium",render:e=>{const{value:t,size:n}=e,i={"ldesign-switch":!0,"is-checked":t,[`size-${n}`]:n};return O`
      <button
        type="button"
        class="${i}"
        onclick="${M6}"
      >
        <span class="ldesign-switch__handle"></span>
      </button>
    `.css`${H6}`}};C1(k6);const V6=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path fill="currentColor" d="M1.73734 0.5V1.75H14.2373V0.5H1.73734Z" />\r
  <path fill="currentColor" d="M15.0669 8.86364L14.1831 9.74752L8.62087 4.18534V15.5426H7.37087V4.18534L1.80869 9.74752L0.924805 8.86364L7.99587 1.79257L15.0669 8.86364Z" />\r
</svg>`,Z6=`:host{position:fixed;right:24px;bottom:80px;z-index:300}:host .ldesign-backtop{width:48px;height:48px;display:flex;justify-content:center;align-items:center;border-radius:6px;box-sizing:border-box;backdrop-filter:blur(10px);background-color:var(--component-border);cursor:pointer;transition:all .2s ease;opacity:0;visibility:hidden;color:var(--text-secondary)}:host .ldesign-backtop.show{opacity:1;visibility:visible}:host .ldesign-backtop:hover{color:var(--text-primary)}:host .ldesign-backtop:hover .ldesign-backtop__inner{transform:scale(.95)}:host .ldesign-backtop__inner{width:calc(100% - 2px);height:calc(100% - 2px);border-radius:5px;display:flex;justify-content:center;align-items:center;background-color:var(--bg-color-container-transparent);box-sizing:border-box;transition:all .2s ease}:host .ldesign-backtop__inner svg{width:20px;height:20px}
`;function E6(){window.scrollTo({top:0,behavior:"smooth"})}const A6={tag:"ldesign-backtop",backtopShow:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:(e,t,n)=>{function i(){const{scrollTop:o}=document.documentElement;o>0?Object.assign(e,{[t]:!0}):Object.assign(e,{[t]:!1}),n()}return document.addEventListener("scroll",i),()=>document.removeEventListener("scroll",i)}},render:({backtopShow:e})=>O`
      <div class="ldesign-backtop ${e?"show":""}" onclick="${E6}">
        <div class="ldesign-backtop__inner" innerHTML=${V6}></div>
      </div>
    `.css`${Z6}`};C1(A6);const S6=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path fill="currentColor" d="M9.99993 3.12494C6.20294 3.12494 3.12488 6.203 3.12488 10C3.12488 13.797 6.20294 16.8751 9.99993 16.8751C13.7969 16.8751 16.875 13.797 16.875 10C16.875 9.52352 16.8264 9.0577 16.7337 8.6075C16.6752 8.32295 16.4282 8.11628 16.1378 8.10872C15.8474 8.10117 15.5901 8.29473 15.5168 8.57585C15.1411 10.0167 13.8302 11.0795 12.2727 11.0795C10.4212 11.0795 8.92039 9.57869 8.92039 7.72726C8.92039 6.16969 9.98319 4.85879 11.4241 4.48312C11.7052 4.40983 11.8988 4.15249 11.8912 3.86207C11.8836 3.57165 11.677 3.32473 11.3924 3.26616C10.9422 3.1735 10.4764 3.12494 9.99993 3.12494Z" />\r
</svg>\r
`,$6=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path fill="currentColor" d="M9.99996 3.15217C10.5252 3.15217 10.951 2.72636 10.951 2.20109C10.951 1.67582 10.5252 1.25 9.99996 1.25C9.47469 1.25 9.04887 1.67582 9.04887 2.20109C9.04887 2.72636 9.47469 3.15217 9.99996 3.15217Z" />\r
  <path fill="currentColor" d="M9.99992 4.29348C6.84829 4.29348 4.2934 6.84838 4.2934 10C4.2934 13.1516 6.84829 15.7065 9.99992 15.7065C13.1515 15.7065 15.7064 13.1516 15.7064 10C15.7064 6.84838 13.1515 4.29348 9.99992 4.29348Z" />\r
  <path fill="currentColor" d="M16.4673 4.4837C16.4673 5.00896 16.0415 5.43478 15.5162 5.43478C14.991 5.43478 14.5652 5.00896 14.5652 4.4837C14.5652 3.95843 14.991 3.53261 15.5162 3.53261C16.0415 3.53261 16.4673 3.95843 16.4673 4.4837Z" />\r
  <path fill="currentColor" d="M17.7989 10.9511C18.3241 10.9511 18.75 10.5253 18.75 10C18.75 9.47474 18.3241 9.04891 17.7989 9.04891C17.2736 9.04891 16.8478 9.47474 16.8478 10C16.8478 10.5253 17.2736 10.9511 17.7989 10.9511Z" />\r
  <path fill="currentColor" d="M16.4673 15.5163C16.4673 16.0416 16.0415 16.4674 15.5162 16.4674C14.991 16.4674 14.5652 16.0416 14.5652 15.5163C14.5652 14.991 14.991 14.5652 15.5162 14.5652C16.0415 14.5652 16.4673 14.991 16.4673 15.5163Z" />\r
  <path fill="currentColor" d="M9.99996 18.75C10.5252 18.75 10.951 18.3242 10.951 17.7989C10.951 17.2736 10.5252 16.8478 9.99996 16.8478C9.47469 16.8478 9.04887 17.2736 9.04887 17.7989C9.04887 18.3242 9.47469 18.75 9.99996 18.75Z" />\r
  <path fill="currentColor" d="M5.43469 15.5163C5.43469 16.0416 5.00887 16.4674 4.4836 16.4674C3.95833 16.4674 3.53252 16.0416 3.53252 15.5163C3.53252 14.991 3.95833 14.5652 4.4836 14.5652C5.00887 14.5652 5.43469 14.991 5.43469 15.5163Z" />\r
  <path fill="currentColor" d="M2.20096 10.9511C2.72623 10.9511 3.15205 10.5253 3.15205 10C3.15205 9.47474 2.72623 9.04891 2.20096 9.04891C1.67569 9.04891 1.24988 9.47474 1.24988 10C1.24988 10.5253 1.67569 10.9511 2.20096 10.9511Z" />\r
  <path fill="currentColor" d="M5.43469 4.4837C5.43469 5.00896 5.00887 5.43478 4.4836 5.43478C3.95833 5.43478 3.53252 5.00896 3.53252 4.4837C3.53252 3.95843 3.95833 3.53261 4.4836 3.53261C5.00887 3.53261 5.43469 3.95843 5.43469 4.4837Z" />\r
</svg>\r
`,B6=`:host{flex-shrink:0}.ldesign-theme-tabs{min-width:60px;width:100%;height:32px;padding:2px;box-sizing:border-box;border-radius:var(--border-radius);background:var(--bg-color-component);position:relative;display:flex;justify-content:space-between}.ldesign-theme-tabs__block{background-color:var(--bg-color-tab-select);box-shadow:0 2px 4px #00000026;position:absolute;height:calc(100% - 4px);transition:all var(--anim-time-fn-easing) var(--anim-duration-moderate);border-radius:var(--border-radius)}.ldesign-theme-tabs .item{width:50%;height:28px;padding:4px;display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;color:var(--text-disabled);position:relative;cursor:pointer}.ldesign-theme-tabs .item svg{width:16px;height:16px;pointer-events:none;transition:all .2s linear}.ldesign-theme-tabs .item:hover:not(.active){color:var(--text-secondary)}.ldesign-theme-tabs .item.active.sun{color:#ffbd2e}.ldesign-theme-tabs .item.active.moon{color:#fff}
`,T6=new CustomEvent("storageChange");function el(e,t){document.documentElement.removeAttribute("theme-mode"),Object.assign(e,{theme:t}),document.documentElement.setAttribute("theme-mode",t)}function F6(e){requestAnimationFrame(()=>{const{shadowRoot:t}=e,n=t.querySelectorAll(".item");let i={};n.forEach(o=>{if(!o.offsetWidth)i=null;else{const{theme:l}=o.dataset;i[l]={width:`${o.offsetWidth}px`,left:`${o.offsetLeft}px`}}}),Object.assign(e,{blockStyleMap:i})})}const O6={tag:"ldesign-theme",theme:{get:(e,t)=>t||"light",set:(e,t)=>(t&&(sessionStorage.setItem("--tdesign-theme",t),window.dispatchEvent(T6)),t),connect:(e,t,n)=>{const i=sessionStorage.getItem("--tdesign-theme");i&&(document.documentElement.removeAttribute("theme-mode"),Object.assign(e,{[t]:i}),document.documentElement.setAttribute("theme-mode",i),n());const o=a9(l=>Object.assign(e,{[t]:l}));return()=>o.disconnect()}},blockStyleMap:{get:(e,t)=>t||void 0,set:(e,t)=>t},render:e=>{const{theme:t,blockStyleMap:n}=e;n||F6(e);const i=n?n[t]:{};return O`
      <div class="ldesign-theme-tabs">
        <div class="ldesign-theme-tabs__block" style=${i||{}}></div>
        <div onclick=${o=>el(o,"light")} data-theme="light" class="item sun ${t==="light"?"active":""}" innerHTML=${$6}></div>
        <div onclick=${o=>el(o,"dark")} data-theme="dark" class="item moon ${t==="dark"?"active":""}" innerHTML=${S6}></div>
      </div>
    `.css`${B6}`}};C1(O6);const R6=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M3.99902 7.97265L27.9978 8.00026L28.0001 6.00026L4.00132 5.97266L3.99902 7.97265Z" fill="currentColor" />\r
  <path d="M15.0002 17.0003H27.999V15.0003H15.0002V17.0003Z" fill="currentColor" />\r
  <path d="M3.99902 25.9727L27.9978 26.0003L28.0001 24.0003L4.00132 23.9727L3.99902 25.9727Z" fill="currentColor" />\r
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9335 15.1864C12.4668 15.5864 12.4668 16.3864 11.9335 16.7864L5.60017 21.5364C4.94094 22.0308 4.00017 21.5604 4.00017 20.7364L4.00017 11.2364C4.00017 10.4124 4.94094 9.94197 5.60017 10.4364L11.9335 15.1864ZM6.00017 13.2364L9.66684 15.9864L6.00017 18.7364L6.00017 13.2364Z" fill="currentColor" />\r
</svg>\r
`,P6=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M28.0011 24.0276L4.0023 24L4 26L27.9988 26.0276L28.0011 24.0276Z" fill="currentColor" />\r
  <path d="M16.9999 15L4.00115 15L4.00115 17L16.9999 17V15Z" fill="currentColor" />\r
  <path d="M28.0011 6.02761L4.0023 6L4 8L27.9988 8.02761L28.0011 6.02761Z" fill="currentColor" />\r
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0666 16.8139C19.5333 16.4139 19.5333 15.6139 20.0666 15.2139L26.3999 10.4639C27.0592 9.96944 27.9999 10.4398 27.9999 11.2639L27.9999 20.7639C27.9999 21.5879 27.0592 22.0583 26.3999 21.5639L20.0666 16.8139ZM25.9999 18.7639L22.3333 16.0139L25.9999 13.2639L25.9999 18.7639Z" fill="currentColor" />\r
</svg>`,N6=`:host{--collapse-display: none}@media screen and (max-width: 1200px){:host{--collapse-display: flex}}.ldesign-doc-aside{position:absolute;left:0;top:64px;height:100vh;width:var(--aside-width, 260px);z-index:1300;box-sizing:border-box;padding-bottom:32px;background-color:var(--bg-color-container);color:var(--text-secondary);box-shadow:var(--aside-box-shadow);transition:transform .2s var(--anim-time-fn-easing),outline .2s var(--anim-time-fn-easing);outline:9999px solid transparent}.ldesign-doc-aside.hide{transform:translate3d(calc(-1 * var(--aside-width)),0,0)}.ldesign-doc-aside.show{transform:translateZ(0);outline-color:var(--text-disabled)}.ldesign-doc-aside.show+.ldesign-doc-aside-mask{display:block}.ldesign-doc-aside:after{content:"";width:100%;height:100px;position:absolute;left:0;bottom:-100px;background-color:var(--bg-color-container)}.ldesign-doc-aside__title{margin:8px 12px;font-size:16px;height:40px;line-height:40px;font-family:TencentSansW7}.ldesign-doc-aside__extra{max-width:calc(var(--aside-width) - 24px);position:relative;padding:0 12px;display:block}.ldesign-doc-aside-mask{content:"";position:fixed;left:0;top:0;width:100%;height:100%;z-index:600;display:none}.ldesign-doc-aside-collapse{position:fixed;left:var(--aside-width);top:160px;border-radius:0 3px 3px 0;box-shadow:2px 0 8px #00000042;width:40px;height:40px;align-items:center;justify-content:center;background-color:var(--bg-color-container);transition:all .2s var(--anim-time-fn-easing);display:var(--collapse-display)}.ldesign-doc-aside-collapse .icon svg{width:24px;height:24px;color:var(--text-primary)}.ldesign-doc-sidenav{height:100%;padding:0 0 0 12px;overflow:auto}.ldesign-doc-sidenav:hover::-webkit-scrollbar-thumb{background-color:var(--bg-color-scroll)}.ldesign-doc-sidenav::-webkit-scrollbar{width:12px;background:transparent}.ldesign-doc-sidenav::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:transparent}.ldesign-doc-sidenav-group__title{display:flex;align-items:center;font-size:12px;color:var(--text-placeholder);padding:14px 12px 4px;height:40px;box-sizing:border-box;position:relative;margin-top:8px;border-radius:var(--border-radius)}.ldesign-doc-sidenav-group__children{overflow:hidden}.ldesign-doc-sidenav-item{position:relative;margin-top:4px;max-width:calc(var(--aside-width) - 24px)}.ldesign-doc-sidenav-item .ldesign-doc-sidenav-link{display:block;height:40px;padding:0 12px;line-height:40px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary);text-decoration:none;border-radius:var(--border-radius);transition:all .2s linear}.ldesign-doc-sidenav-item .ldesign-doc-sidenav-link:hover{color:var(--text-primary);background:var(--bg-color-container-hover)}.ldesign-doc-sidenav-item .ldesign-doc-sidenav-link.active{color:var(--text-anti);background-color:var(--brand-main)}
`,I6=new CustomEvent("replaceState"),j6=window.history.replaceState;window.history.replaceState=(...e)=>{j6.apply(window.history,e),window.dispatchEvent(I6)};function z6(e,t,n){t.preventDefault(),t.target.getRootNode().querySelectorAll(".active").forEach(i=>i.classList.remove("active")),t.target.classList.toggle("active"),requestAnimationFrame(()=>ie(e,"change",{detail:n}))}function ko(e,t=0){const n=location.pathname===e.path||location.hash.slice(1)===e.path||location.pathname.includes(e.path);return Array.isArray(e)?e.map(i=>ko(i,t)):e.children?O`
      <div class="ldesign-doc-sidenav-group ldesign-doc-sidenav-group--deep${t}">
        <span class="ldesign-doc-sidenav-group__title">${e.title}</span>
        <div class="ldesign-doc-sidenav-group__children">${ko(e.children,t+1)}</div>
      </div>
    `:O`
    <div class="ldesign-doc-sidenav-item">
      <a
        href="${e.path}"
        class="ldesign-doc-sidenav-link ${n?"active":""}"
        onclick=${(i,o)=>z6(i,o,e.path)}
      >
        ${e.title}
      </a>
    </div>
  `}function tl(e){if(!e.shadowRoot)return;const t=e.shadowRoot.querySelector(".ldesign-doc-aside").classList;t.contains("hide")?(t.remove("hide"),t.add("show")):(t.remove("show"),t.add("hide")),Object.assign(e,{collapse:!e.collapse})}const D6={tag:"ldesign-aside",routerList:{get:(e,t)=>t||[],set:(e,t)=>t},title:"",patchDom:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:c9},asideStyle:{get:(e,t)=>t||void 0,set:(e,t)=>t,connect:e=>{function t(){if(!e.shadowRoot)return;const{shadowRoot:l}=e,{scrollTop:r}=document.documentElement,s=l.querySelector(".ldesign-doc-aside")||{style:{}};r>=64?Object.assign(s.style,{position:"fixed",top:"0"}):Object.assign(s.style,{position:"absolute",top:"64px"})}function n(){if(!e.shadowRoot)return;const l=window.innerWidth<1200,r=e.shadowRoot.querySelector(".ldesign-doc-aside").classList;if(l){if(r.contains("show"))return;r.remove("show"),r.remove("hide"),r.add("hide")}else r.remove("hide"),r.remove("show")}function i(){Object.assign(e,{routerList:e.routerList.slice()})}function o(l){if(!e.shadowRoot)return;const{shadowRoot:r}=e;requestAnimationFrame(()=>{let s=location.pathname;location.hash&&(s=location.hash.slice(1));const a=Array.from(r.querySelectorAll(".ldesign-doc-sidenav-link")),c=Array.from(r.querySelectorAll(".ldesign-doc-sidenav-link.active")),d=a.find(w=>{const u=new URL(w.href);return u.host===location.host&&s.includes(u.pathname)});!d||c.length===1&&c.some(w=>w.href===d.href)||(c.forEach(w=>w.classList.remove("active")),d.classList.toggle("active"))})}return requestAnimationFrame(()=>{n()}),window.addEventListener("load",i),window.addEventListener("resize",n),document.addEventListener("scroll",t),window.addEventListener("popstate",o),window.addEventListener("pushState",o),window.addEventListener("replaceState",o),()=>{window.removeEventListener("load",i),window.removeEventListener("resize",n),document.removeEventListener("scroll",t),window.removeEventListener("popstate",o),window.removeEventListener("pushState",o),window.removeEventListener("replaceState",o)}}},collapse:!1,render:e=>{const{routerList:t,title:n,collapse:i}=e;return O`
      <aside class="ldesign-doc-aside">
        <div class="ldesign-doc-aside-collapse" onclick="${tl}">
          <i class="icon" innerHTML="${i?P6:R6}"></i>
        </div>
        <div class="ldesign-doc-sidenav">
          ${n&&O`<h2 class="ldesign-doc-aside__title">${n}</h2>`}
          <slot class="ldesign-doc-aside__extra" name="extra"></slot>
          ${ko(t)}
        </div>
      </aside>
      <div class="ldesign-doc-aside-mask" onclick="${tl}"></div>
    `.css`${N6}`}};C1(D6);const U6=`.ldesign-doc-content{display:flex;flex-direction:column;position:relative;background:var(--bg-color-docpage)}.ldesign-doc-content.hidden{opacity:0;visibility:hidden}.ldesign-doc-content.show{opacity:1;visibility:visible;transition:all 0s linear}.ldesign-doc-content .ldesign-doc-body{min-height:calc(100vh - var(--footer-height));color:var(--text-primary);padding-right:var(--content-padding-right)}.ldesign-doc-content .ldesign-doc-body__inner{width:100%;padding:64px var(--content-padding-left-right) 120px var(--content-padding-left-right);margin:0 auto;box-sizing:border-box;min-width:320px;max-width:var(--content-max-width)}.ldesign-doc-content__backtop{width:40px;height:40px;position:fixed;right:24px;bottom:40px;display:flex;justify-content:center;align-items:center;background-color:var(--bg-color-scroll);border-radius:100%;cursor:pointer;transition:all .2s linear;opacity:0;visibility:hidden;color:var(--text-secondary)}.ldesign-doc-content__backtop.show{opacity:1;visibility:visible}.ldesign-doc-content__backtop:hover{color:var(--text-primary);background-color:var(--text-disabled)}
`,q6=228;function W6(){const e=['div[name="DEMO"]','div[name="API"]','div[name="DESIGN"]','div[name="DOC"]'];function t(i){return i.map(o=>{const[,l]=decodeURIComponent(o.href).split("#");return document.getElementById(l)}).map(o=>{if(!o)return 0;const{top:l}=o.getBoundingClientRect();return l+document.documentElement.scrollTop})}function n(i,o){const{scrollTop:l}=document.documentElement;for(let r=0;r<o.length;r++)if(l<=o[r]){if(i[r].classList.contains("active"))break;i.forEach(s=>s.classList.remove("active")),i[r].classList.add("active");break}}e.forEach(i=>{const o=document.querySelector(i);if(!o)return;const l=Array.from(o.querySelectorAll(".ldesign-toc_list_item_a"))||[],r=t(l);n(l,r)})}const K6={tag:"ldesign-content",platform:"web",pageStatus:"show",mobileBodyStyle:y0,fixedAnchor:{get:(e,t)=>t||void 0,set:(e,t)=>t,connect:()=>{function e(){const{scrollTop:i}=document.documentElement,o=document.querySelectorAll(".ldesign-toc_container");i>q6?o.forEach(l=>{Object.assign(l.style,{position:"fixed",top:"152px"})}):o.forEach(l=>{Object.assign(l.style,{position:"absolute",top:"316px"})}),W6()}function t(i){if(i.target.tagName!=="A")return;const{target:o}=i,l=decodeURIComponent(o.href);if(!l.includes("#"))return;const[,r=""]=l.split("#");if(o.classList.contains("ldesign-header-anchor")||o.classList.contains("ldesign-toc_list_item_a")){const s=document.getElementById(r);if(!s)return;const{top:a}=s.getBoundingClientRect(),c=a+document.documentElement.scrollTop;requestAnimationFrame(()=>window.scrollTo({top:c-120,left:0}))}}function n(){const i=decodeURIComponent(location.href);if(!i.includes("#"))return;const[,o=""]=i.split("#"),l=document.getElementById(o);if(!l)return;const{top:r}=l.getBoundingClientRect(),s=r+document.documentElement.scrollTop;requestAnimationFrame(()=>window.scrollTo({top:s-120,left:0}))}return document.addEventListener("scroll",e),document.addEventListener("click",t),window.addEventListener("load",n),()=>{document.removeEventListener("scroll",e),document.removeEventListener("click",t),window.removeEventListener("load",n)}}},render:e=>O`
      <div class="ldesign-doc-content ${e.pageStatus}">
        <slot name="doc-header"></slot>

        <div class="ldesign-doc-body" style=${e.mobileBodyStyle}>
          <div class="ldesign-doc-body__inner">
            <slot></slot>
          </div>
        </div>

        <slot name="doc-footer"></slot>

        <ldesign-backtop></ldesign-backtop>
      </div>
    `.css`${U6}`};C1(K6);const G6=`:host{width:100%;background-color:var(--bg-color-container);box-shadow:var(--header-box-shadow);position:relative}@media screen and (max-width: 960px){:host{--spline-visible: hidden;--issue-display: none;--title-font-size: 32px}}.ldesign-doc-header{height:var(--doc-header-height);padding-right:var(--content-padding-right)}.ldesign-doc-header__inner{padding:48px var(--content-padding-left-right);box-sizing:border-box;position:relative;display:flex;flex-direction:column;width:100%;height:100%;min-width:320px;max-width:var(--content-max-width);margin:0 auto}.ldesign-doc-header__thumb{position:absolute;height:calc(100% - 1px);width:1200px;max-width:100%;right:0;top:0;border:0;z-index:450;visibility:var(--spline-visible)}.ldesign-doc-header__thumb.light{display:var(--theme-block-light-display)}.ldesign-doc-header__thumb.dark{display:var(--theme-block-dark-display)}.ldesign-doc-header__badge{max-width:100%;display:flex}.ldesign-doc-header__badge img{margin-right:8px}.ldesign-doc-header__background{width:100%;position:absolute;left:0;bottom:0;height:88px;z-index:400;background:var(--bg-color-container);box-shadow:var(--header-box-shadow)}.ldesign-doc-header__content{display:flex;justify-content:flex-end;flex-direction:column;align-items:flex-end;margin-top:130px;flex:1;position:relative;z-index:500}.ldesign-doc-header__info{position:absolute;bottom:0;left:0}.ldesign-doc-header__info-title{font-size:var(--title-font-size, 32px);color:var(--text-primary);text-align:left;line-height:56px;margin:0;transition:top .2s var(--anim-time-fn-easing),opacity .2s linear,visibility .2s linear}.ldesign-doc-header__info-describe{margin-top:16px;font-size:14px;color:var(--text-secondary);line-height:22px;width:100%;box-sizing:border-box;transition:all .2s linear}
`,b1="https://yun.swimly.cn/source/ldesign",Vo={explain:`${b1}/spline/explain/index.html`,source:`${b1}/spline/source/index.html`,base:`${b1}/spline/base/index.html`,data:`${b1}/spline/data/index.html`,form:`${b1}/spline/form/index.html`,layout:`${b1}/spline/layout/index.html`,message:`${b1}/spline/message/index.html`,navigation:`${b1}/spline/navigation/index.html`,"design-mode":`${b1}/spline/design/mode_light/index.html`,"design-mode-dark":`${b1}/spline/design/mode_dark/index.html`,"design-layout":`${b1}/spline/design/layout_light/index.html`,"design-layout-dark":`${b1}/spline/design/layout_dark/index.html`,"design-motion":`${b1}/spline/design/motion_light/index.html`,"design-motion-dark":`${b1}/spline/design/motion_dark/index.html`,"design-color":`${b1}/spline/design/color_light/index.html`,"design-color-dark":`${b1}/spline/design/color_dark/index.html`,"design-value":`${b1}/spline/design/value_light/index.html`,"design-value-dark":`${b1}/spline/design/value_dark/index.html`,"design-icon":`${b1}/spline/design/icon_light/index.html`,"design-icon-dark":`${b1}/spline/design/icon_dark/index.html`,"design-font":`${b1}/spline/design/font_light/index.html`,"design-font-dark":`${b1}/spline/design/font_dark/index.html`};let Zo=null,nl=null;function il(e,t){if(!t.shadowRoot)return;const n=t.shadowRoot.getElementById("__iframe__");let i="";e==="dark"?i=Vo[`${t.spline}-dark`]:i=Vo[t.spline],n&&i&&i!==n.src&&(clearTimeout(Zo),n.style="max-height: 0;",n.src=i)}function Y6(e){if(!e.shadowRoot)return;const t=e.shadowRoot.getElementById("__iframe__");clearTimeout(Zo),Zo=setTimeout(()=>{t&&(t.style=`
      max-height: 280px;
      transition: max-height .25s .2s var(--anim-time-fn-easing);
      -webkit-transition: max-height .25s .2s var(--anim-time-fn-easing);
    `)},600)}const X6={tag:"ldesign-banner",spline:{get:(e,t)=>t||"",set:(e,t)=>t,connect:e=>{const t=a9(n=>il(n,e));return()=>t.disconnect()},observe:e=>{clearTimeout(nl);const t=document.documentElement.getAttribute("theme-mode")||"light";nl=setTimeout(()=>{il(t,e)},600)}},platform:"web",mobileBodyStyle:y0,docInfo:{get:(e,t)=>t||void 0,set:(e,t)=>t,observe:(e,t)=>{if(document.getElementById("__td_doc_title__")||!t)return;const n=document.createElement("h1");n.id="__td_doc_title__",n.innerText=t.title,e.appendChild(n)}},fixedTitle:{get:(e,t)=>t||void 0,set:(e,t)=>t,connect:e=>{function t(){if(!e.shadowRoot)return;const{shadowRoot:n}=e,{scrollTop:i}=document.documentElement,o=n.querySelector(".ldesign-doc-header__background")||{style:{}},l=n.querySelector(".ldesign-doc-header__info-title")||{style:{}},r=n.querySelector(".ldesign-doc-header__info-describe")||{style:{}},s=n.querySelector(".ldesign-doc-header__thumb")||{style:{}},a=n.querySelector("ldesign-issue")||{style:{}},c=document.querySelector("ldesign-tabs"),d=window.innerWidth<1200?0:"260px";i>=228?l.style.position!=="fixed"&&(Object.assign(l.style,{position:"fixed",top:c?"16px":"28px",fontSize:"24px",lineHeight:"32px",opacity:1,visibility:"visible"}),Object.assign(o.style,{position:"fixed",top:"0",left:d}),c&&Object.assign(c.style,{position:"fixed",top:"64px",zIndex:500}),Object.assign(a.style,{position:"fixed",top:"24px",right:"24px"})):i>192&&i<228?l.style.visibility!=="hidden"&&(Object.assign(l.style,{opacity:0,visibility:"hidden"}),Object.assign(s.style,{opacity:0,visibility:"hidden"}),Object.assign(r.style,{opacity:0,visibility:"hidden"}),Object.assign(o.style,{position:"absolute",top:"unset",left:"0"}),c&&Object.assign(c.style,{position:"absolute",top:"228px"}),Object.assign(a.style,{position:"absolute",top:"calc(100% - 32px - 12px)"})):(l.style.position==="fixed"||l.style.visibility==="hidden")&&(Object.assign(l.style,{position:"unset",fontSize:"32px",lineHeight:"56px",opacity:1,visibility:"visible"}),Object.assign(r.style,{opacity:1,visibility:"visible"}),Object.assign(o.style,{position:"absolute",top:"unset",left:"0"}),c&&Object.assign(c.style,{position:"absolute",top:"228px"}),Object.assign(a.style,{position:"absolute",top:"calc(100% - 32px - 12px)"}),Object.assign(s.style,{opacity:1,visibility:"visible"}))}return document.addEventListener("scroll",t),()=>document.removeEventListener("scroll",t)}},render:e=>{const{docInfo:t,spline:n}=e,i={...e.mobileBodyStyle},o=Vo[n];return O`
    ${o?O`
      <iframe id="__iframe__"
        class="ldesign-doc-header__thumb"
        onload="${Y6}"
      ></iframe>`:O``}
      <div class="ldesign-doc-header" style="${i}">
        <div class="ldesign-doc-header__inner">
          <div class="ldesign-doc-header__badge">
            <slot name="badge"></slot>
          </div>
          <div class="ldesign-doc-header__content">
            <div class="ldesign-doc-header__info">
              ${t?O`
                <h1 class="ldesign-doc-header__info-title">${t.title}</h1>
                <div class="ldesign-doc-header__info-describe">
                  <div innerHTML="${t.desc}"></div>
                </div>
              `:O``}
            </div>
          </div>
        </div>
      </div>
      <div class="ldesign-doc-header__background"></div>
      <ldesign-issue></ldesign-issue>
    `.css`${G6}`}};C1(X6);const J6=`:host{font-size:14px;color:var(--text-secondary);min-height:var(--footer-height);box-sizing:border-box;--footer-logo-position: absolute;--footer-inner-position: static;--content-max-width: 1400px}.ldesign-doc-footer{position:relative;height:calc(var(--footer-height) - 56px);background-color:var(--bg-color-footer);box-shadow:var(--footer-box-shadow)}.ldesign-doc-footer__inner{position:var(--footer-inner-position);margin:0 auto;padding:40px var(--content-padding-left-right);height:100%;box-sizing:border-box;display:flex;justify-content:space-between;max-width:var(--content-max-width)}.ldesign-doc-footer__content{display:flex;flex-direction:row;column-gap:24px;width:100%}.ldesign-doc-footer__content-block{display:flex;flex-direction:column;min-width:120px}.ldesign-doc-footer__content-block .title{font-size:14px;font-weight:400;line-height:22px;margin-top:0;margin-bottom:24px;color:var(--text-placeholder)}.ldesign-doc-footer__content-block .link{cursor:pointer;text-decoration:none;color:var(--text-primary);font-size:14px;line-height:22px;margin-bottom:16px;transition:all var(--anim-duration-base) linear}.ldesign-doc-footer__content-block .link:hover{color:var(--text-interactive)}.ldesign-doc-footer__logos{display:inline-flex;align-items:center;row-gap:32px;column-gap:32px}.ldesign-doc-footer__qrcode{width:192px;padding:24px;box-sizing:border-box;border-radius:9px;background:var(--bg-color-code);border:1px solid var(--component-border);display:flex;flex-direction:column;align-items:center;position:absolute;right:48px;top:40px}.ldesign-doc-footer__qrcode-title{margin:0 0 4px;font-size:16px;line-height:24px;font-weight:700;color:var(--text-primary)}.ldesign-doc-footer__qrcode-desc{margin:0;font-size:14px;line-height:22px;color:var(--text-secondary)}.ldesign-doc-footer__bottom{height:56px;overflow:hidden;color:var(--text-placeholder);background:var(--bg-color-secondaryfooter)}.ldesign-doc-footer__bottom .ldesign-doc-footer__inner{align-items:center;column-gap:24px}.ldesign-doc-footer__bottom .ldesign-doc-footer__logos{position:var(--footer-logo-position);right:48px;bottom:0;height:56px}.ldesign-doc-footer__bottom .logo{height:34px;display:inline-flex;align-items:center}.ldesign-doc-footer__bottom .logo svg{transition:color .2s linear;color:var(--text-placeholder)}.ldesign-doc-footer__bottom .logo:not(i):hover svg{color:var(--text-secondary)}.ldesign-doc-footer__bottom .copyright{margin:0}@media screen and (max-width: 960px){.ldesign-doc-footer{height:auto}.ldesign-doc-footer__qrcode{position:unset}.ldesign-doc-footer__content{flex-direction:column;align-items:center;text-align:center;row-gap:24px}.ldesign-doc-footer__content .title{color:var(--text-primary);margin-bottom:12px}.ldesign-doc-footer__content .link{color:var(--text-placeholder)}.ldesign-doc-footer__bottom{height:112px}.ldesign-doc-footer__bottom .ldesign-doc-footer__inner{flex-direction:column-reverse;padding-top:16px;padding-bottom:16px}.ldesign-doc-footer__bottom .ldesign-doc-footer__logos{position:unset;height:auto}.ldesign-doc-footer__bottom .copyright{text-align:center}}
`,Q6=[{title:"开源",links:[{name:"Site-component",url:"https://www.npmjs.com/package/@ldesign/site-component",target:"_blank"},{name:"LDesign Icons",url:"https://www.npmjs.com/package/@ldesign/icons",target:"_blank"}]},{title:"设计",links:[{name:"LDesign",url:"/design",target:"_blank"}]},{title:"关于",links:[{name:"关于我们",url:"/about/introduce",target:"_self"},{name:"联系我们",url:"/about/contact",target:"_self"},{name:"意见反馈",url:"/",target:"_blank"}]}],e7={tag:"ldesign-footer",footerLinks:{get:(e,t)=>t||Q6,set:(e,t)=>t},mobileBodyStyle:y0,platform:"web",patchDom:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:c9},render:e=>{const{footerLinks:t}=e,n={...e.mobileBodyStyle};return O`
      <div class="ldesign-doc-footer" style="${n}">
        <div class="ldesign-doc-footer__inner">
          <div class="ldesign-doc-footer__content">

            ${t.map(i=>O`
              <div class="ldesign-doc-footer__content-block">
                <p class="title">${i.title}</p>
                ${i.links.map(o=>O`
                  <a class="link" href="${o.url}" target="${o.target}">
                    <span>${o.name}</span>
                  </a>
                `)}
              </div>
            `)}
          </div>
        </div>
      </div>
      <div class="ldesign-doc-footer__bottom" style="${n}">
        <div class="ldesign-doc-footer__inner">
          <p class="copyright">Copyright 1998-2023永兴元科技版权所有</p>
          <div class="ldesign-doc-footer__logos">
            <i class="logo"></i>
            <a class="logo" href="https://cloud.tencent.com/" target="_blank" innerHTML=""></a>
          </div>
        </div>
      </div>
    `.css`${J6}`}};C1(e7);var wt={},t7=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},y9={},N1={};let E0;const n7=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];N1.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};N1.getSymbolTotalCodewords=function(e){return n7[e]};N1.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};N1.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');E0=e};N1.isKanjiModeEnabled=function(){return typeof E0<"u"};N1.toSJIS=function(e){return E0(e)};var bi={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},e.from=function(n,i){if(e.isValid(n))return n;try{return t(n)}catch{return i}}})(bi);function b9(){this.buffer=[],this.length=0}b9.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var i7=b9;function mn(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}mn.prototype.set=function(e,t,n,i){const o=e*this.size+t;this.data[o]=n,i&&(this.reservedBit[o]=!0)};mn.prototype.get=function(e,t){return this.data[e*this.size+t]};mn.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};mn.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var o7=mn,_9={};(function(e){const t=N1.getSymbolSize;e.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,o=t(n),l=o===145?26:Math.ceil((o-13)/(2*i-2))*2,r=[o-7];for(let s=1;s<i-1;s++)r[s]=r[s-1]-l;return r.push(6),r.reverse()},e.getPositions=function(n){const i=[],o=e.getRowColCoords(n),l=o.length;for(let r=0;r<l;r++)for(let s=0;s<l;s++)r===0&&s===0||r===0&&s===l-1||r===l-1&&s===0||i.push([o[r],o[s]]);return i}})(_9);var H9={};const l7=N1.getSymbolSize,ol=7;H9.getPositions=function(e){const t=l7(e);return[[0,0],[t-ol,0],[0,t-ol]]};var M9={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},e.from=function(i){return e.isValid(i)?parseInt(i,10):void 0},e.getPenaltyN1=function(i){const o=i.size;let l=0,r=0,s=0,a=null,c=null;for(let d=0;d<o;d++){r=s=0,a=c=null;for(let w=0;w<o;w++){let u=i.get(d,w);u===a?r++:(r>=5&&(l+=t.N1+(r-5)),a=u,r=1),u=i.get(w,d),u===c?s++:(s>=5&&(l+=t.N1+(s-5)),c=u,s=1)}r>=5&&(l+=t.N1+(r-5)),s>=5&&(l+=t.N1+(s-5))}return l},e.getPenaltyN2=function(i){const o=i.size;let l=0;for(let r=0;r<o-1;r++)for(let s=0;s<o-1;s++){const a=i.get(r,s)+i.get(r,s+1)+i.get(r+1,s)+i.get(r+1,s+1);(a===4||a===0)&&l++}return l*t.N2},e.getPenaltyN3=function(i){const o=i.size;let l=0,r=0,s=0;for(let a=0;a<o;a++){r=s=0;for(let c=0;c<o;c++)r=r<<1&2047|i.get(a,c),c>=10&&(r===1488||r===93)&&l++,s=s<<1&2047|i.get(c,a),c>=10&&(s===1488||s===93)&&l++}return l*t.N3},e.getPenaltyN4=function(i){let o=0;const l=i.data.length;for(let r=0;r<l;r++)o+=i.data[r];return Math.abs(Math.ceil(o*100/l/5)-10)*t.N4};function n(i,o,l){switch(i){case e.Patterns.PATTERN000:return(o+l)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return l%3===0;case e.Patterns.PATTERN011:return(o+l)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(l/3))%2===0;case e.Patterns.PATTERN101:return o*l%2+o*l%3===0;case e.Patterns.PATTERN110:return(o*l%2+o*l%3)%2===0;case e.Patterns.PATTERN111:return(o*l%3+(o+l)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(i,o){const l=o.size;for(let r=0;r<l;r++)for(let s=0;s<l;s++)o.isReserved(s,r)||o.xor(s,r,n(i,s,r))},e.getBestMask=function(i,o){const l=Object.keys(e.Patterns).length;let r=0,s=1/0;for(let a=0;a<l;a++){o(a),e.applyMask(a,i);const c=e.getPenaltyN1(i)+e.getPenaltyN2(i)+e.getPenaltyN3(i)+e.getPenaltyN4(i);e.applyMask(a,i),c<s&&(s=c,r=a)}return r}})(M9);var _i={};const Ze=bi,An=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Sn=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];_i.getBlocksCount=function(e,t){switch(t){case Ze.L:return An[(e-1)*4+0];case Ze.M:return An[(e-1)*4+1];case Ze.Q:return An[(e-1)*4+2];case Ze.H:return An[(e-1)*4+3];default:return}};_i.getTotalCodewordsCount=function(e,t){switch(t){case Ze.L:return Sn[(e-1)*4+0];case Ze.M:return Sn[(e-1)*4+1];case Ze.Q:return Sn[(e-1)*4+2];case Ze.H:return Sn[(e-1)*4+3];default:return}};var k9={},Hi={};const Jt=new Uint8Array(512),Qn=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)Jt[t]=e,Qn[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)Jt[t]=Jt[t-255]})();Hi.log=function(e){if(e<1)throw new Error("log("+e+")");return Qn[e]};Hi.exp=function(e){return Jt[e]};Hi.mul=function(e,t){return e===0||t===0?0:Jt[Qn[e]+Qn[t]]};(function(e){const t=Hi;e.mul=function(n,i){const o=new Uint8Array(n.length+i.length-1);for(let l=0;l<n.length;l++)for(let r=0;r<i.length;r++)o[l+r]^=t.mul(n[l],i[r]);return o},e.mod=function(n,i){let o=new Uint8Array(n);for(;o.length-i.length>=0;){const l=o[0];for(let s=0;s<i.length;s++)o[s]^=t.mul(i[s],l);let r=0;for(;r<o.length&&o[r]===0;)r++;o=o.slice(r)}return o},e.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let o=0;o<n;o++)i=e.mul(i,new Uint8Array([1,t.exp(o)]));return i}})(k9);const V9=k9;function A0(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}A0.prototype.initialize=function(e){this.degree=e,this.genPoly=V9.generateECPolynomial(this.degree)};A0.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=V9.mod(t,this.genPoly),i=this.degree-n.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(n,i),o}return n};var r7=A0,Z9={},Fe={},S0={};S0.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var ue={};const E9="[0-9]+",s7="[A-Z $%*+\\-./:]+";let gn="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";gn=gn.replace(/u/g,"\\u");const a7="(?:(?![A-Z0-9 $%*+\\-./:]|"+gn+`)(?:.|[\r
]))+`;ue.KANJI=new RegExp(gn,"g");ue.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");ue.BYTE=new RegExp(a7,"g");ue.NUMERIC=new RegExp(E9,"g");ue.ALPHANUMERIC=new RegExp(s7,"g");const c7=new RegExp("^"+gn+"$"),d7=new RegExp("^"+E9+"$"),p7=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");ue.testKanji=function(e){return c7.test(e)};ue.testNumeric=function(e){return d7.test(e)};ue.testAlphanumeric=function(e){return p7.test(e)};(function(e){const t=S0,n=ue;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,l){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(l))throw new Error("Invalid version: "+l);return l>=1&&l<10?o.ccBits[0]:l<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return n.testNumeric(o)?e.NUMERIC:n.testAlphanumeric(o)?e.ALPHANUMERIC:n.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(o,l){if(e.isValid(o))return o;try{return i(o)}catch{return l}}})(Fe);(function(e){const t=N1,n=_i,i=bi,o=Fe,l=S0,r=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,s=t.getBCHDigit(r);function a(u,m,g){for(let v=1;v<=40;v++)if(m<=e.getCapacity(v,g,u))return v}function c(u,m){return o.getCharCountIndicator(u,m)+4}function d(u,m){let g=0;return u.forEach(function(v){const L=c(v.mode,m);g+=L+v.getBitsLength()}),g}function w(u,m){for(let g=1;g<=40;g++)if(d(u,g)<=e.getCapacity(g,m,o.MIXED))return g}e.from=function(u,m){return l.isValid(u)?parseInt(u,10):m},e.getCapacity=function(u,m,g){if(!l.isValid(u))throw new Error("Invalid QR Code version");typeof g>"u"&&(g=o.BYTE);const v=t.getSymbolTotalCodewords(u),L=n.getTotalCodewordsCount(u,m),y=(v-L)*8;if(g===o.MIXED)return y;const p=y-c(g,u);switch(g){case o.NUMERIC:return Math.floor(p/10*3);case o.ALPHANUMERIC:return Math.floor(p/11*2);case o.KANJI:return Math.floor(p/13);case o.BYTE:default:return Math.floor(p/8)}},e.getBestVersionForData=function(u,m){let g;const v=i.from(m,i.M);if(Array.isArray(u)){if(u.length>1)return w(u,v);if(u.length===0)return 1;g=u[0]}else g=u;return a(g.mode,g.getLength(),v)},e.getEncodedBits=function(u){if(!l.isValid(u)||u<7)throw new Error("Invalid QR Code version");let m=u<<12;for(;t.getBCHDigit(m)-s>=0;)m^=r<<t.getBCHDigit(m)-s;return u<<12|m}})(Z9);var A9={};const Eo=N1,S9=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,g7=1<<14|1<<12|1<<10|1<<4|1<<1,ll=Eo.getBCHDigit(S9);A9.getEncodedBits=function(e,t){const n=e.bit<<3|t;let i=n<<10;for(;Eo.getBCHDigit(i)-ll>=0;)i^=S9<<Eo.getBCHDigit(i)-ll;return(n<<10|i)^g7};var $9={};const f7=Fe;function Ct(e){this.mode=f7.NUMERIC,this.data=e.toString()}Ct.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Ct.prototype.getLength=function(){return this.data.length};Ct.prototype.getBitsLength=function(){return Ct.getBitsLength(this.data.length)};Ct.prototype.write=function(e){let t,n,i;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),i=parseInt(n,10),e.put(i,10);const o=this.data.length-t;o>0&&(n=this.data.substr(t),i=parseInt(n,10),e.put(i,o*3+1))};var u7=Ct;const h7=Fe,zi=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function mt(e){this.mode=h7.ALPHANUMERIC,this.data=e}mt.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};mt.prototype.getLength=function(){return this.data.length};mt.prototype.getBitsLength=function(){return mt.getBitsLength(this.data.length)};mt.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=zi.indexOf(this.data[t])*45;n+=zi.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(zi.indexOf(this.data[t]),6)};var v7=mt,w7=function(e){for(var t=[],n=e.length,i=0;i<n;i++){var o=e.charCodeAt(i);if(o>=55296&&o<=56319&&n>i+1){var l=e.charCodeAt(i+1);l>=56320&&l<=57343&&(o=(o-55296)*1024+l-56320+65536,i+=1)}if(o<128){t.push(o);continue}if(o<2048){t.push(o>>6|192),t.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){t.push(o>>12|224),t.push(o>>6&63|128),t.push(o&63|128);continue}if(o>=65536&&o<=1114111){t.push(o>>18|240),t.push(o>>12&63|128),t.push(o>>6&63|128),t.push(o&63|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer};const C7=w7,m7=Fe;function xt(e){this.mode=m7.BYTE,typeof e=="string"&&(e=C7(e)),this.data=new Uint8Array(e)}xt.getBitsLength=function(e){return e*8};xt.prototype.getLength=function(){return this.data.length};xt.prototype.getBitsLength=function(){return xt.getBitsLength(this.data.length)};xt.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var x7=xt;const L7=Fe,y7=N1;function Lt(e){this.mode=L7.KANJI,this.data=e}Lt.getBitsLength=function(e){return e*13};Lt.prototype.getLength=function(){return this.data.length};Lt.prototype.getBitsLength=function(){return Lt.getBitsLength(this.data.length)};Lt.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=y7.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var b7=Lt,B9={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,i,o){var l={},r={};r[i]=0;var s=t.PriorityQueue.make();s.push(i,0);for(var a,c,d,w,u,m,g,v,L;!s.empty();){a=s.pop(),c=a.value,w=a.cost,u=n[c]||{};for(d in u)u.hasOwnProperty(d)&&(m=u[d],g=w+m,v=r[d],L=typeof r[d]>"u",(L||v>g)&&(r[d]=g,s.push(d,g),l[d]=c))}if(typeof o<"u"&&typeof r[o]>"u"){var y=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(y)}return l},extract_shortest_path_from_predecessor_list:function(n,i){for(var o=[],l=i;l;)o.push(l),n[l],l=n[l];return o.reverse(),o},find_path:function(n,i,o){var l=t.single_source_shortest_paths(n,i,o);return t.extract_shortest_path_from_predecessor_list(l,o)},PriorityQueue:{make:function(n){var i=t.PriorityQueue,o={},l;n=n||{};for(l in i)i.hasOwnProperty(l)&&(o[l]=i[l]);return o.queue=[],o.sorter=n.sorter||i.default_sorter,o},default_sorter:function(n,i){return n.cost-i.cost},push:function(n,i){var o={value:n,cost:i};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(B9);(function(e){const t=Fe,n=u7,i=v7,o=x7,l=b7,r=ue,s=N1,a=B9.exports;function c(y){return unescape(encodeURIComponent(y)).length}function d(y,p,f){const h=[];let C;for(;(C=y.exec(f))!==null;)h.push({data:C[0],index:C.index,mode:p,length:C[0].length});return h}function w(y){const p=d(r.NUMERIC,t.NUMERIC,y),f=d(r.ALPHANUMERIC,t.ALPHANUMERIC,y);let h,C;return s.isKanjiModeEnabled()?(h=d(r.BYTE,t.BYTE,y),C=d(r.KANJI,t.KANJI,y)):(h=d(r.BYTE_KANJI,t.BYTE,y),C=[]),p.concat(f,h,C).sort(function(x,k){return x.index-k.index}).map(function(x){return{data:x.data,mode:x.mode,length:x.length}})}function u(y,p){switch(p){case t.NUMERIC:return n.getBitsLength(y);case t.ALPHANUMERIC:return i.getBitsLength(y);case t.KANJI:return l.getBitsLength(y);case t.BYTE:return o.getBitsLength(y)}}function m(y){return y.reduce(function(p,f){const h=p.length-1>=0?p[p.length-1]:null;return h&&h.mode===f.mode?(p[p.length-1].data+=f.data,p):(p.push(f),p)},[])}function g(y){const p=[];for(let f=0;f<y.length;f++){const h=y[f];switch(h.mode){case t.NUMERIC:p.push([h,{data:h.data,mode:t.ALPHANUMERIC,length:h.length},{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.ALPHANUMERIC:p.push([h,{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.KANJI:p.push([h,{data:h.data,mode:t.BYTE,length:c(h.data)}]);break;case t.BYTE:p.push([{data:h.data,mode:t.BYTE,length:c(h.data)}])}}return p}function v(y,p){const f={},h={start:{}};let C=["start"];for(let x=0;x<y.length;x++){const k=y[x],V=[];for(let Z=0;Z<k.length;Z++){const S=k[Z],R=""+x+Z;V.push(R),f[R]={node:S,lastCount:0},h[R]={};for(let T=0;T<C.length;T++){const K=C[T];f[K]&&f[K].node.mode===S.mode?(h[K][R]=u(f[K].lastCount+S.length,S.mode)-u(f[K].lastCount,S.mode),f[K].lastCount+=S.length):(f[K]&&(f[K].lastCount=S.length),h[K][R]=u(S.length,S.mode)+4+t.getCharCountIndicator(S.mode,p))}}C=V}for(let x=0;x<C.length;x++)h[C[x]].end=0;return{map:h,table:f}}function L(y,p){let f;const h=t.getBestModeForData(y);if(f=t.from(p,h),f!==t.BYTE&&f.bit<h.bit)throw new Error('"'+y+'" cannot be encoded with mode '+t.toString(f)+`.
 Suggested mode is: `+t.toString(h));switch(f===t.KANJI&&!s.isKanjiModeEnabled()&&(f=t.BYTE),f){case t.NUMERIC:return new n(y);case t.ALPHANUMERIC:return new i(y);case t.KANJI:return new l(y);case t.BYTE:return new o(y)}}e.fromArray=function(y){return y.reduce(function(p,f){return typeof f=="string"?p.push(L(f,null)):f.data&&p.push(L(f.data,f.mode)),p},[])},e.fromString=function(y,p){const f=w(y,s.isKanjiModeEnabled()),h=g(f),C=v(h,p),x=a.find_path(C.map,"start","end"),k=[];for(let V=1;V<x.length-1;V++)k.push(C.table[x[V]].node);return e.fromArray(m(k))},e.rawSplit=function(y){return e.fromArray(w(y,s.isKanjiModeEnabled()))}})($9);const Mi=N1,Di=bi,_7=i7,H7=o7,M7=_9,k7=H9,Ao=M9,So=_i,V7=r7,ei=Z9,Z7=A9,E7=Fe,Ui=$9;function A7(e,t){const n=e.size,i=k7.getPositions(t);for(let o=0;o<i.length;o++){const l=i[o][0],r=i[o][1];for(let s=-1;s<=7;s++)if(!(l+s<=-1||n<=l+s))for(let a=-1;a<=7;a++)r+a<=-1||n<=r+a||(s>=0&&s<=6&&(a===0||a===6)||a>=0&&a<=6&&(s===0||s===6)||s>=2&&s<=4&&a>=2&&a<=4?e.set(l+s,r+a,!0,!0):e.set(l+s,r+a,!1,!0))}}function S7(e){const t=e.size;for(let n=8;n<t-8;n++){const i=n%2===0;e.set(n,6,i,!0),e.set(6,n,i,!0)}}function $7(e,t){const n=M7.getPositions(t);for(let i=0;i<n.length;i++){const o=n[i][0],l=n[i][1];for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++)r===-2||r===2||s===-2||s===2||r===0&&s===0?e.set(o+r,l+s,!0,!0):e.set(o+r,l+s,!1,!0)}}function B7(e,t){const n=e.size,i=ei.getEncodedBits(t);let o,l,r;for(let s=0;s<18;s++)o=Math.floor(s/3),l=s%3+n-8-3,r=(i>>s&1)===1,e.set(o,l,r,!0),e.set(l,o,r,!0)}function qi(e,t,n){const i=e.size,o=Z7.getEncodedBits(t,n);let l,r;for(l=0;l<15;l++)r=(o>>l&1)===1,l<6?e.set(l,8,r,!0):l<8?e.set(l+1,8,r,!0):e.set(i-15+l,8,r,!0),l<8?e.set(8,i-l-1,r,!0):l<9?e.set(8,15-l-1+1,r,!0):e.set(8,15-l-1,r,!0);e.set(i-8,8,1,!0)}function T7(e,t){const n=e.size;let i=-1,o=n-1,l=7,r=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let a=0;a<2;a++)if(!e.isReserved(o,s-a)){let c=!1;r<t.length&&(c=(t[r]>>>l&1)===1),e.set(o,s-a,c),l--,l===-1&&(r++,l=7)}if(o+=i,o<0||n<=o){o-=i,i=-i;break}}}function F7(e,t,n){const i=new _7;n.forEach(function(a){i.put(a.mode.bit,4),i.put(a.getLength(),E7.getCharCountIndicator(a.mode,e)),a.write(i)});const o=Mi.getSymbolTotalCodewords(e),l=So.getTotalCodewordsCount(e,t),r=(o-l)*8;for(i.getLengthInBits()+4<=r&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const s=(r-i.getLengthInBits())/8;for(let a=0;a<s;a++)i.put(a%2?17:236,8);return O7(i,e,t)}function O7(e,t,n){const i=Mi.getSymbolTotalCodewords(t),o=So.getTotalCodewordsCount(t,n),l=i-o,r=So.getBlocksCount(t,n),s=i%r,a=r-s,c=Math.floor(i/r),d=Math.floor(l/r),w=d+1,u=c-d,m=new V7(u);let g=0;const v=new Array(r),L=new Array(r);let y=0;const p=new Uint8Array(e.buffer);for(let k=0;k<r;k++){const V=k<a?d:w;v[k]=p.slice(g,g+V),L[k]=m.encode(v[k]),g+=V,y=Math.max(y,V)}const f=new Uint8Array(i);let h=0,C,x;for(C=0;C<y;C++)for(x=0;x<r;x++)C<v[x].length&&(f[h++]=v[x][C]);for(C=0;C<u;C++)for(x=0;x<r;x++)f[h++]=L[x][C];return f}function R7(e,t,n,i){let o;if(Array.isArray(e))o=Ui.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const d=Ui.rawSplit(e);c=ei.getBestVersionForData(d,n)}o=Ui.fromString(e,c||40)}else throw new Error("Invalid data");const l=ei.getBestVersionForData(o,n);if(!l)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=l;else if(t<l)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+l+`.
`);const r=F7(t,n,o),s=Mi.getSymbolSize(t),a=new H7(s);return A7(a,t),S7(a),$7(a,t),qi(a,n,0),t>=7&&B7(a,t),T7(a,r),isNaN(i)&&(i=Ao.getBestMask(a,qi.bind(null,a,n))),Ao.applyMask(i,a),qi(a,n,i),{modules:a,version:t,errorCorrectionLevel:n,maskPattern:i,segments:o}}y9.create=function(e,t){if(typeof e>"u"||e==="")throw new Error("No input text");let n=Di.M,i,o;return typeof t<"u"&&(n=Di.from(t.errorCorrectionLevel,Di.M),i=ei.from(t.version),o=Ao.from(t.maskPattern),t.toSJISFunc&&Mi.setToSJISFunction(t.toSJISFunc)),R7(e,i,n,o)};var T9={},$0={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let i=n.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+n);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(l){return[l,l]}))),i.length===6&&i.push("F","F");const o=parseInt(i.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,o=n.width&&n.width>=21?n.width:void 0,l=n.scale||4;return{width:o,scale:o?4:l,margin:i,color:{dark:t(n.color.dark||"#000000ff"),light:t(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},e.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},e.getImageWidth=function(n,i){const o=e.getScale(n,i);return Math.floor((n+i.margin*2)*o)},e.qrToImageData=function(n,i,o){const l=i.modules.size,r=i.modules.data,s=e.getScale(l,o),a=Math.floor((l+o.margin*2)*s),c=o.margin*s,d=[o.color.light,o.color.dark];for(let w=0;w<a;w++)for(let u=0;u<a;u++){let m=(w*a+u)*4,g=o.color.light;if(w>=c&&u>=c&&w<a-c&&u<a-c){const v=Math.floor((w-c)/s),L=Math.floor((u-c)/s);g=d[r[v*l+L]?1:0]}n[m++]=g.r,n[m++]=g.g,n[m++]=g.b,n[m]=g.a}}})($0);(function(e){const t=$0;function n(o,l,r){o.clearRect(0,0,l.width,l.height),l.style||(l.style={}),l.height=r,l.width=r,l.style.height=r+"px",l.style.width=r+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,l,r){let s=r,a=l;typeof s>"u"&&(!l||!l.getContext)&&(s=l,l=void 0),l||(a=i()),s=t.getOptions(s);const c=t.getImageWidth(o.modules.size,s),d=a.getContext("2d"),w=d.createImageData(c,c);return t.qrToImageData(w.data,o,s),n(d,a,c),d.putImageData(w,0,0),a},e.renderToDataURL=function(o,l,r){let s=r;typeof s>"u"&&(!l||!l.getContext)&&(s=l,l=void 0),s||(s={});const a=e.render(o,l,s),c=s.type||"image/png",d=s.rendererOpts||{};return a.toDataURL(c,d.quality)}})(T9);var F9={};const P7=$0;function rl(e,t){const n=e.a/255,i=t+'="'+e.hex+'"';return n<1?i+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function Wi(e,t,n){let i=e+t;return typeof n<"u"&&(i+=" "+n),i}function N7(e,t,n){let i="",o=0,l=!1,r=0;for(let s=0;s<e.length;s++){const a=Math.floor(s%t),c=Math.floor(s/t);!a&&!l&&(l=!0),e[s]?(r++,s>0&&a>0&&e[s-1]||(i+=l?Wi("M",a+n,.5+c+n):Wi("m",o,0),o=0,l=!1),a+1<t&&e[s+1]||(i+=Wi("h",r),r=0)):o++}return i}F9.render=function(e,t,n){const i=P7.getOptions(t),o=e.modules.size,l=e.modules.data,r=o+i.margin*2,s=i.color.light.a?"<path "+rl(i.color.light,"fill")+' d="M0 0h'+r+"v"+r+'H0z"/>':"",a="<path "+rl(i.color.dark,"stroke")+' d="'+N7(l,o,i.margin)+'"/>',c='viewBox="0 0 '+r+" "+r+'"',d='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+c+' shape-rendering="crispEdges">'+s+a+`</svg>
`;return typeof n=="function"&&n(null,d),d};const I7=t7,$o=y9,O9=T9,j7=F9;function B0(e,t,n,i,o){const l=[].slice.call(arguments,1),r=l.length,s=typeof l[r-1]=="function";if(!s&&!I7())throw new Error("Callback required as last argument");if(s){if(r<2)throw new Error("Too few arguments provided");r===2?(o=n,n=t,t=i=void 0):r===3&&(t.getContext&&typeof o>"u"?(o=i,i=void 0):(o=i,i=n,n=t,t=void 0))}else{if(r<1)throw new Error("Too few arguments provided");return r===1?(n=t,t=i=void 0):r===2&&!t.getContext&&(i=n,n=t,t=void 0),new Promise(function(a,c){try{const d=$o.create(n,i);a(e(d,t,i))}catch(d){c(d)}})}try{const a=$o.create(n,i);o(null,e(a,t,i))}catch(a){o(a)}}wt.create=$o.create;wt.toCanvas=B0.bind(null,O9.render);wt.toDataURL=B0.bind(null,O9.renderToDataURL);wt.toString=B0.bind(null,function(e,t,n){return j7.render(e,n)});const z7=`:host{--phone-display: block;--phone-collapse-display: none;--phone-body-height: 520px}@media screen and (max-width: 960px){:host{--phone-display: none;--phone-collapse-display: flex}}.ldesign-doc-phone{width:375px;width:min(75vw,375px);border-radius:6px;border:1px solid var(--component-border);outline:9999px solid transparent;position:absolute;top:316px;right:24px;display:var(--phone-display)}.ldesign-doc-phone.hide{visibility:hidden;opacity:0}.ldesign-doc-phone.show{position:fixed;left:50%;top:50%!important;transform:translate3d(-50%,-50%,0);outline-color:var(--text-disabled);transition:transform .2s var(--anim-time-fn-easing),opacity .2s linear,visibility .2s linear;visibility:visible;opacity:1;z-index:800;display:block}.ldesign-doc-phone.show .ldesign-doc-phone__close{opacity:1;visibility:visible}.ldesign-doc-phone.show+.ldesign-doc-phone-mask{display:block}.ldesign-doc-phone__close{width:40px;height:40px;display:flex;justify-content:center;align-items:center;border:1px solid var(--component-border);border-radius:0 6px 6px 0;position:absolute;right:-42px;top:42px;background-color:var(--bg-color-container);visibility:hidden;opacity:0;transition:all .2s linear}.ldesign-doc-phone__close svg{color:var(--text-primary);width:24px;height:24px}.ldesign-doc-phone__header{height:48px;padding:8px;border-radius:6px 6px 0 0;box-sizing:border-box;background:var(--bg-color-demo);display:flex}.ldesign-doc-phone__header_input{flex:1;background:var(--bg-color-code);padding:8px 12px;border-radius:3px;margin:0 8px;outline:none;border:none}.ldesign-doc-phone__header_btn{padding:8px 12px;outline:none;border:none;display:flex;align-items:center;cursor:pointer;color:var(--brand-main);background-color:transparent}.ldesign-doc-phone__header-icons{display:flex;height:100%}.ldesign-doc-phone__header-icons .icon{width:32px;height:32px;border-radius:var(--border-radius);transition:all .1s;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-secondary)}.ldesign-doc-phone__header-icons .icon:hover{color:var(--text-primary);background-color:var(--bg-color-demo-hover)}.ldesign-doc-phone__header-icons .icon.active{color:var(--text-primary);background-color:var(--bg-color-demo-select)}.ldesign-doc-phone__header-icons .qrcode-wrapper{display:flex;justify-content:center;align-items:center;border-radius:3px;overflow:hidden;max-width:200px;max-height:200px}.ldesign-doc-phone__body{width:100%;height:var(--phone-body-height);border-radius:0 0 6px 6px;background-color:var(--bg-color-demo)}.ldesign-doc-phone-mask{content:"";position:fixed;left:0;top:0;width:100%;height:100%;z-index:300;display:none}.ldesign-doc-phone-collapse{position:fixed;right:0;top:400px;z-index:400;border-radius:3px 0 0 3px;box-shadow:2px 0 8px #00000042;width:40px;height:40px;align-items:center;justify-content:center;background-color:var(--bg-color-container);transition:all .2s var(--anim-time-fn-easing);display:var(--phone-collapse-display)}.ldesign-doc-phone-collapse .icon svg{width:24px;height:24px;color:var(--text-primary)}
`,D7=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M8.75 5H5V8.75H8.75V5Z" fill="currentColor"/>\r
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C10.6904 2.5 11.25 3.05964 11.25 3.75V10C11.25 10.6904 10.6904 11.25 10 11.25H3.75C3.05964 11.25 2.5 10.6904 2.5 10V3.75C2.5 3.05964 3.05964 2.5 3.75 2.5H10ZM10 3.75H3.75V10H10V3.75Z" fill="currentColor"/>\r
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 3.75C17.5 3.05964 16.9404 2.5 16.25 2.5H13.75C13.0596 2.5 12.5 3.05964 12.5 3.75V6.25C12.5 6.94036 13.0596 7.5 13.75 7.5H16.25C16.9404 7.5 17.5 6.94036 17.5 6.25V3.75ZM13.75 3.75H16.25V6.25H13.75V3.75Z" fill="currentColor"/>\r
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 12.5C6.94036 12.5 7.5 13.0596 7.5 13.75V16.25C7.5 16.9404 6.94036 17.5 6.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V13.75C2.5 13.0596 3.05964 12.5 3.75 12.5H6.25ZM6.25 16.25V13.75H3.75V16.25H6.25Z" fill="currentColor"/>\r
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 13.75C17.5 13.0596 16.9404 12.5 16.25 12.5H13.75C13.0596 12.5 12.5 13.0596 12.5 13.75V16.25C12.5 16.9404 13.0596 17.5 13.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V13.75ZM13.75 16.25V13.75H16.25V16.25H13.75Z" fill="currentColor"/>\r
  <path d="M12.5 9.35091H13.75V10.6009H12.5V9.35091Z" fill="currentColor"/>\r
  <path d="M15 9.35091H17.5V10.6009H15V9.35091Z" fill="currentColor"/>\r
  <path d="M10.6301 15.0165H9.38007V17.5165H10.6301V15.0165Z" fill="currentColor"/>\r
  <path d="M9.38007 12.5H10.6301V13.75H9.38007V12.5Z" fill="currentColor"/>\r
</svg>\r
`,U7=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M13 26H19V24H13V26Z" fill="currentColor" />\r
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.89543 7.89543 3 9 3H23C24.1046 3 25 3.89543 25 5V28C25 29.1046 24.1046 30 23 30H9C7.89543 30 7 29.1046 7 28V5ZM9 5H23V28H9L9 5Z" fill="currentColor" />\r
</svg>`,q7=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path\r
    d="M16 17.8385L22.1518 23.9903L23.9903 22.1518L17.8385 16L23.9903 9.84817L22.1518 8.0097L16 14.1615L9.84812 8.00964L8.00964 9.84812L14.1615 16L8.00964 22.1518L9.84812 23.9903L16 17.8385Z"\r
    fill="currentColor" />\r
</svg>`;function Ki(e){if(!e.shadowRoot)return;const t=e.shadowRoot.querySelector(".ldesign-doc-phone").classList;t.contains("hide")?(t.remove("hide"),t.add("show")):(t.remove("show"),t.add("hide"))}const W7={tag:"ldesign-phone",headless:!1,QRCode:()=>wt,qrCanvas:({render:e})=>e().querySelector("#qrcode"),qrcodeUrl:{get:(e,t)=>t,set:(e,t)=>t,connect:e=>{requestAnimationFrame(()=>{const t=e.querySelector('[slot="qrcode"]'),n=e.shadowRoot.querySelector('[slot="content"]');!t||!n||(n.innerHTML=t.outerHTML)})},observe:(e,t)=>{!e.qrCanvas||wt.toCanvas(e.qrCanvas,t,{width:96,height:96})}},fixedStyle:{get:(e,t)=>t||{},set:(e,t)=>t,connect:(e,t)=>{function n(){if(window.innerWidth<960)return;const{scrollTop:o,scrollHeight:l,clientHeight:r}=document.documentElement,s=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--footer-height")),a=parseFloat(getComputedStyle(e).getPropertyValue("--phone-body-height")),c=64,d=l-s-a-c-64,w=r<=s+a+64;o>=228?o+88>=d&&w?Object.assign(e,{[t]:{...e.fixedStyle,position:"absolute",top:`${d}px`}}):Object.assign(e,{[t]:{...e.fixedStyle,position:"fixed",top:"152px"}}):Object.assign(e,{[t]:{...e.fixedStyle,position:"absolute",top:"316px"}})}function i(){if(!e.shadowRoot)return;const o=window.innerWidth<960,l=e.shadowRoot.querySelector(".ldesign-doc-phone");o?(l.classList.remove("show"),l.classList.add("hide")):(l.classList.remove("show"),l.classList.remove("hide"))}return document.addEventListener("scroll",n),window.addEventListener("resize",i),window.addEventListener("load",i),()=>{document.removeEventListener("scroll",n),window.removeEventListener("resize",i),window.removeEventListener("load",i)}}},render:({headless:e,fixedStyle:t,qrcodeUrl:n})=>O`
      <div class="ldesign-doc-phone" style=${t}>
        ${e?O``:O`
          <div class="ldesign-doc-phone__header">
            <div class="ldesign-doc-phone__header-icons">
              <ldesign-popup placement="left-start">
                <span class="icon qrcode" innerHTML=${D7}></span>
                <div slot="content" class="qrcode-wrapper">
                  <slot name="qrcode">
                    <canvas id="qrcode"></canvas>
                  </slot>
                </div>
              </ldesign-popup>
            </div>
          </div>
        `}
        <div class="ldesign-doc-phone__body">
          <slot></slot>
        </div>
        <div class="ldesign-doc-phone__close" innerHTML="${q7}" onclick="${Ki}"></div>
      </div>
      <div class="ldesign-doc-phone-mask" onclick="${Ki}"></div>
      <div class="ldesign-doc-phone-collapse" onclick="${Ki}">
        <i class="icon" innerHTML="${U7}"></i>
      </div>
    `.css`${z7}`};C1(W7);const K7=`:host{--block-base-width: 16px;position:absolute;top:228px;z-index:1100}@media screen and (max-width: 960px){:host{--block-base-width: 14px}}.ldesign-doc-tabs{display:flex;align-items:center;justify-content:center;border-radius:6px;background:var(--bg-color-tab);height:calc(var(--block-base-width) * 3);box-sizing:border-box;cursor:pointer;border:1px solid var(--component-border)}.ldesign-doc-tabs__block{background-color:var(--bg-color-tab-select);box-shadow:0 2px 4px #00000026;position:absolute;height:calc(100% - 8px);left:4px;transition:all var(--anim-time-fn-easing) var(--anim-duration-moderate);border-radius:var(--border-radius)}.ldesign-doc-tabs .item+.item{margin-left:8px}.ldesign-doc-tabs .item{margin:4px;padding:8px calc(var(--block-base-width) * 1.5);font-size:var(--block-base-width);box-sizing:border-box;transition:all var(--anim-time-fn-easing) var(--anim-duration-moderate);border-radius:var(--border-radius);color:var(--text-secondary);position:relative;word-break:keep-all;white-space:nowrap}.ldesign-doc-tabs .item:hover,.ldesign-doc-tabs .item.active{color:var(--text-primary)}
`,G7=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}];function Y7(e,t){e.tabScrollMap[e.tab]=document.documentElement.scrollTop;const{tab:n}=t.target.dataset;Object.assign(e,{tab:n}),ie(e,"change",{detail:n}),e.autoScroll&&requestAnimationFrame(()=>{window.scrollTo({left:0,top:e.tabScrollMap[n],behavior:"smooth"})})}const X7={tag:"ldesign-tabs",tab:"demo",autoScroll:!0,tabScrollMap:{get:(e,t)=>{const n={};return e.tabs.forEach(({tab:i})=>{n[i]=0}),t||n},set:(e,t)=>t},tabs:{get:(e,t)=>t||G7,set:(e,t)=>t},blockStyleMap:{get:(e,t)=>t||void 0,set:(e,t)=>t,connect:(e,t)=>{function n(){if(!e.shadowRoot){setTimeout(n,300);return}const i=e.shadowRoot.querySelectorAll(".item");let o={};i.forEach(l=>{if(!l.offsetWidth)o=null;else{const{tab:r}=l.dataset;o[r]={width:`${l.offsetWidth}px`,transform:`translate3d(${l.offsetLeft-4}px, 0, 0)`}}}),Object.assign(e,{[t]:o})}return requestAnimationFrame(n),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}},render:e=>{const{tab:t,tabs:n,blockStyleMap:i}=e,o=i?i[t]:{};return n.length?O`
      <div class="ldesign-doc-tabs">
        <span class="ldesign-doc-tabs__block" style="${o}"></span>
        ${n.map(l=>O`
            <div
              data-tab=${l.tab}
              onclick="${Y7}"
              class="item ${l.tab===t?"active":""}"
            >
              ${l.name}
            </div>
          `)}
      </div>
    `.css`${K7}`:O``}};C1(X7);var R9={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(i){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,r={},s={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function p(f){return f instanceof a?new a(f.type,p(f.content),f.alias):Array.isArray(f)?f.map(p):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++l}),p.__id},clone:function p(f,h){h=h||{};var C,x;switch(s.util.type(f)){case"Object":if(x=s.util.objId(f),h[x])return h[x];C={},h[x]=C;for(var k in f)f.hasOwnProperty(k)&&(C[k]=p(f[k],h));return C;case"Array":return x=s.util.objId(f),h[x]?h[x]:(C=[],h[x]=C,f.forEach(function(V,Z){C[Z]=p(V,h)}),C);default:return f}},getLanguage:function(p){for(;p;){var f=o.exec(p.className);if(f)return f[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,f){p.className=p.className.replace(RegExp(o,"gi"),""),p.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(p){var f=document.getElementsByTagName("script");for(var h in f)if(f[h].src==p)return f[h]}return null}},isActive:function(p,f,h){for(var C="no-"+f;p;){var x=p.classList;if(x.contains(f))return!0;if(x.contains(C))return!1;p=p.parentElement}return!!h}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(p,f){var h=s.util.clone(s.languages[p]);for(var C in f)h[C]=f[C];return h},insertBefore:function(p,f,h,C){C=C||s.languages;var x=C[p],k={};for(var V in x)if(x.hasOwnProperty(V)){if(V==f)for(var Z in h)h.hasOwnProperty(Z)&&(k[Z]=h[Z]);h.hasOwnProperty(V)||(k[V]=x[V])}var S=C[p];return C[p]=k,s.languages.DFS(s.languages,function(R,T){T===S&&R!=p&&(this[R]=k)}),k},DFS:function p(f,h,C,x){x=x||{};var k=s.util.objId;for(var V in f)if(f.hasOwnProperty(V)){h.call(f,V,f[V],C||V);var Z=f[V],S=s.util.type(Z);S==="Object"&&!x[k(Z)]?(x[k(Z)]=!0,p(Z,h,null,x)):S==="Array"&&!x[k(Z)]&&(x[k(Z)]=!0,p(Z,h,V,x))}}},plugins:{},highlightAll:function(p,f){s.highlightAllUnder(document,p,f)},highlightAllUnder:function(p,f,h){var C={callback:h,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),s.hooks.run("before-all-elements-highlight",C);for(var x=0,k;k=C.elements[x++];)s.highlightElement(k,f===!0,C.callback)},highlightElement:function(p,f,h){var C=s.util.getLanguage(p),x=s.languages[C];s.util.setLanguage(p,C);var k=p.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(k,C);var V=p.textContent,Z={element:p,language:C,grammar:x,code:V};function S(T){Z.highlightedCode=T,s.hooks.run("before-insert",Z),Z.element.innerHTML=Z.highlightedCode,s.hooks.run("after-highlight",Z),s.hooks.run("complete",Z),h&&h.call(Z.element)}if(s.hooks.run("before-sanity-check",Z),k=Z.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!Z.code){s.hooks.run("complete",Z),h&&h.call(Z.element);return}if(s.hooks.run("before-highlight",Z),!Z.grammar){S(s.util.encode(Z.code));return}if(f&&i.Worker){var R=new Worker(s.filename);R.onmessage=function(T){S(T.data)},R.postMessage(JSON.stringify({language:Z.language,code:Z.code,immediateClose:!0}))}else S(s.highlight(Z.code,Z.grammar,Z.language))},highlight:function(p,f,h){var C={code:p,grammar:f,language:h};if(s.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=s.tokenize(C.code,C.grammar),s.hooks.run("after-tokenize",C),a.stringify(s.util.encode(C.tokens),C.language)},tokenize:function(p,f){var h=f.rest;if(h){for(var C in h)f[C]=h[C];delete f.rest}var x=new w;return u(x,x.head,p),d(p,x,f,x.head,0),g(x)},hooks:{all:{},add:function(p,f){var h=s.hooks.all;h[p]=h[p]||[],h[p].push(f)},run:function(p,f){var h=s.hooks.all[p];if(!(!h||!h.length))for(var C=0,x;x=h[C++];)x(f)}},Token:a};i.Prism=s;function a(p,f,h,C){this.type=p,this.content=f,this.alias=h,this.length=(C||"").length|0}a.stringify=function p(f,h){if(typeof f=="string")return f;if(Array.isArray(f)){var C="";return f.forEach(function(S){C+=p(S,h)}),C}var x={type:f.type,content:p(f.content,h),tag:"span",classes:["token",f.type],attributes:{},language:h},k=f.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(x.classes,k):x.classes.push(k)),s.hooks.run("wrap",x);var V="";for(var Z in x.attributes)V+=" "+Z+'="'+(x.attributes[Z]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+V+">"+x.content+"</"+x.tag+">"};function c(p,f,h,C){p.lastIndex=f;var x=p.exec(h);if(x&&C&&x[1]){var k=x[1].length;x.index+=k,x[0]=x[0].slice(k)}return x}function d(p,f,h,C,x,k){for(var V in h)if(!(!h.hasOwnProperty(V)||!h[V])){var Z=h[V];Z=Array.isArray(Z)?Z:[Z];for(var S=0;S<Z.length;++S){if(k&&k.cause==V+","+S)return;var R=Z[S],T=R.inside,K=!!R.lookbehind,p1=!!R.greedy,H1=R.alias;if(p1&&!R.pattern.global){var i1=R.pattern.toString().match(/[imsuy]*$/)[0];R.pattern=RegExp(R.pattern.source,i1+"g")}for(var e1=R.pattern||R,q=C.next,o1=x;q!==f.tail&&!(k&&o1>=k.reach);o1+=q.value.length,q=q.next){var m1=q.value;if(f.length>p.length)return;if(!(m1 instanceof a)){var x1=1,t1;if(p1){if(t1=c(e1,o1,p,K),!t1||t1.index>=p.length)break;var z=t1.index,$1=t1.index+t1[0].length,u1=o1;for(u1+=q.value.length;z>=u1;)q=q.next,u1+=q.value.length;if(u1-=q.value.length,o1=u1,q.value instanceof a)continue;for(var A=q;A!==f.tail&&(u1<$1||typeof A.value=="string");A=A.next)x1++,u1+=A.value.length;x1--,m1=p.slice(o1,u1),t1.index-=o1}else if(t1=c(e1,0,m1,K),!t1)continue;var z=t1.index,P=t1[0],U=m1.slice(0,z),l1=m1.slice(z+P.length),c1=o1+m1.length;k&&c1>k.reach&&(k.reach=c1);var X=q.prev;U&&(X=u(f,X,U),o1+=U.length),m(f,X,x1);var b=new a(V,T?s.tokenize(P,T):P,H1,P);if(q=u(f,X,b),l1&&u(f,q,l1),x1>1){var M={cause:V+","+S,reach:c1};d(p,f,h,q.prev,o1,M),k&&M.reach>k.reach&&(k.reach=M.reach)}}}}}}function w(){var p={value:null,prev:null,next:null},f={value:null,prev:p,next:null};p.next=f,this.head=p,this.tail=f,this.length=0}function u(p,f,h){var C=f.next,x={value:h,prev:f,next:C};return f.next=x,C.prev=x,p.length++,x}function m(p,f,h){for(var C=f.next,x=0;x<h&&C!==p.tail;x++)C=C.next;f.next=C,C.prev=f,p.length-=x}function g(p){for(var f=[],h=p.head.next;h!==p.tail;)f.push(h.value),h=h.next;return f}if(!i.document)return i.addEventListener&&(s.disableWorkerMessageHandler||i.addEventListener("message",function(p){var f=JSON.parse(p.data),h=f.language,C=f.code,x=f.immediateClose;i.postMessage(s.highlight(C,s.languages[h],h)),x&&i.close()},!1)),s;var v=s.util.currentScript();v&&(s.filename=v.src,v.hasAttribute("data-manual")&&(s.manual=!0));function L(){s.manual||s.highlightAll()}if(!s.manual){var y=document.readyState;y==="loading"||y==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",L):window.requestAnimationFrame?window.requestAnimationFrame(L):window.setTimeout(L,16)}return s}(t);e.exports&&(e.exports=n),typeof _o<"u"&&(_o.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,o){var l={};l["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};r["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var s={};s[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(i,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(i){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var l=i.languages.markup;l&&(l.tag.addInlined("style","css"),l.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading…",o=function(v,L){return"✖ Error "+v+" while fetching file: "+L},l="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",a="loading",c="loaded",d="failed",w="pre[data-src]:not(["+s+'="'+c+'"]):not(['+s+'="'+a+'"])';function u(v,L,y){var p=new XMLHttpRequest;p.open("GET",v,!0),p.onreadystatechange=function(){p.readyState==4&&(p.status<400&&p.responseText?L(p.responseText):p.status>=400?y(o(p.status,p.statusText)):y(l))},p.send(null)}function m(v){var L=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(L){var y=Number(L[1]),p=L[2],f=L[3];return p?f?[y,Number(f)]:[y,void 0]:[y,y]}}n.hooks.add("before-highlightall",function(v){v.selector+=", "+w}),n.hooks.add("before-sanity-check",function(v){var L=v.element;if(L.matches(w)){v.code="",L.setAttribute(s,a);var y=L.appendChild(document.createElement("CODE"));y.textContent=i;var p=L.getAttribute("data-src"),f=v.language;if(f==="none"){var h=(/\.(\w+)$/.exec(p)||[,"none"])[1];f=r[h]||h}n.util.setLanguage(y,f),n.util.setLanguage(L,f);var C=n.plugins.autoloader;C&&C.loadLanguages(f),u(p,function(x){L.setAttribute(s,c);var k=m(L.getAttribute("data-range"));if(k){var V=x.split(/\r\n?|\n/g),Z=k[0],S=k[1]==null?V.length:k[1];Z<0&&(Z+=V.length),Z=Math.max(0,Math.min(Z-1,V.length)),S<0&&(S+=V.length),S=Math.max(0,Math.min(S,V.length)),x=V.slice(Z,S).join(`
`),L.hasAttribute("data-start")||L.setAttribute("data-start",String(Z+1))}y.textContent=x,n.highlightElement(y)},function(x){L.setAttribute(s,d),y.textContent=x})}}),n.plugins.fileHighlight={highlight:function(v){for(var L=(v||document).querySelectorAll(w),y=0,p;p=L[y++];)n.highlightElement(p)}};var g=!1;n.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(R9);const yt=R9.exports,J7=`code[class*=language-],pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}code[class*=language-]::selection,pre[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}pre[class*=language-]{overflow:auto;position:relative}.language-css>code,.language-sass>code,.language-scss>code{color:#c24c08}[class*=language-] .namespace{opacity:.7}.token.atrule{color:#6d3bac}.token.attr-name{color:#007edf}.token.attr-value,.token.attribute{color:#d29c00}.token.boolean{color:#6d3bac}.token.builtin,.token.cdata,.token.char,.token.class{color:#007edf}.token.class-name{color:#003cbf}.token.comment{color:#97a3b7}.token.constant{color:#6d3bac}.token.deleted{color:#b01531}.token.doctype{color:#97a3b7}.token.entity{color:#b01531}.token.function{color:#6d3bac}.token.hexcode{color:#c24c08}.token.id,.token.important{color:#6d3bac;font-weight:700}.token.inserted{color:#007edf}.token.keyword{color:#6d3bac}.token.number{color:#c24c08}.token.operator{color:#007edf}.token.prolog{color:#97a3b7}.token.property{color:#007edf}.token.pseudo-class,.token.pseudo-element{color:#d29c00}.token.punctuation{color:#007edf}.token.regex{color:#003cbf}.token.selector{color:#b01531}.token.string{color:#d29c00}.token.symbol{color:#6d3bac}.token.tag{color:#b01531}.token.unit{color:#c24c08}.token.url,.token.variable{color:#b01531}:root[theme-mode=dark] code[class*=language-],:root[theme-mode=dark] pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}:root[theme-mode=dark] code[class*=language-]::selection,:root[theme-mode=dark] pre[class*=language-]::selection,:root[theme-mode=dark] code[class*=language-] ::selection,:root[theme-mode=dark] pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:root[theme-mode=dark] :not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}:root[theme-mode=dark] pre[class*=language-]{overflow:auto;position:relative}:root[theme-mode=dark] .language-css>code,:root[theme-mode=dark] .language-sass>code,:root[theme-mode=dark] .language-scss>code{color:#f2995f}:root[theme-mode=dark] [class*=language-] .namespace{opacity:.7}:root[theme-mode=dark] .token.atrule{color:#ae78f0}:root[theme-mode=dark] .token.attr-name{color:#3280ff}:root[theme-mode=dark] .token.attr-value{color:#fbca25}:root[theme-mode=dark] .token.attribute{color:#fbca25}:root[theme-mode=dark] .token.boolean{color:#ae78f0}:root[theme-mode=dark] .token.builtin{color:#3280ff}:root[theme-mode=dark] .token.cdata{color:#3280ff}:root[theme-mode=dark] .token.char{color:#3280ff}:root[theme-mode=dark] .token.class{color:#3280ff}:root[theme-mode=dark] .token.class-name{color:#5cc5fc}:root[theme-mode=dark] .token.comment{color:#97a3b7}:root[theme-mode=dark] .token.constant{color:#ae78f0}:root[theme-mode=dark] .token.deleted{color:#48c79c}:root[theme-mode=dark] .token.doctype{color:#97a3b7}:root[theme-mode=dark] .token.entity{color:#48c79c}:root[theme-mode=dark] .token.function{color:#ae78f0}:root[theme-mode=dark] .token.hexcode{color:#f2995f}:root[theme-mode=dark] .token.id{color:#ae78f0;font-weight:700}:root[theme-mode=dark] .token.important{color:#f6c;font-weight:700}:root[theme-mode=dark] .token.inserted{color:#3280ff}:root[theme-mode=dark] .token.keyword{color:#f6c}:root[theme-mode=dark] .token.number{color:#f2995f}:root[theme-mode=dark] .token.operator{color:#3280ff}:root[theme-mode=dark] .token.prolog{color:#97a3b7}:root[theme-mode=dark] .token.property{color:#3280ff}:root[theme-mode=dark] .token.pseudo-class{color:#fbca25}:root[theme-mode=dark] .token.pseudo-element{color:#fbca25}:root[theme-mode=dark] .token.punctuation{color:#3280ff}:root[theme-mode=dark] .token.regex{color:#5cc5fc}:root[theme-mode=dark] .token.selector{color:#f36d78}:root[theme-mode=dark] .token.string{color:#fbca25}:root[theme-mode=dark] .token.symbol{color:#f6c}:root[theme-mode=dark] .token.tag{color:#48c79c}:root[theme-mode=dark] .token.unit{color:#f2995f}:root[theme-mode=dark] .token.url{color:#48c79c}:root[theme-mode=dark] .token.variable{color:#48c79c}.ldesign-doc-demo{margin:24px 0 48px;background-color:var(--bg-color-demo);color:var(--text-primary);border:1px solid var(--component-border);border-radius:6px}.ldesign-doc-demo.open{background:var(--bg-color-code)}.ldesign-doc-demo.open .ldesign-doc-demo__footer{border-radius:6px}.ldesign-doc-demo.open .ldesign-doc-demo__btns{position:relative}.ldesign-doc-demo.open .ldesign-doc-demo__btns:after{content:"";width:100%;height:20px;position:absolute;top:100%;left:0;z-index:1;background:var(--bg-color-code-linear)}.ldesign-doc-demo.open .ldesign-doc-demo__btns .action:hover{background-color:var(--bg-color-component-hover)}.ldesign-doc-demo__footer{border-radius:0 0 5px 5px}.ldesign-doc-demo__btns{height:48px;padding:8px;display:flex;justify-content:flex-end;column-gap:8px;align-items:center;box-sizing:border-box}.ldesign-doc-demo__btns .action{height:32px;width:32px;padding:8px;box-sizing:border-box;border-radius:var(--border-radius);cursor:pointer;user-select:none;transition:all .1s;display:inline-flex;color:var(--text-secondary)}.ldesign-doc-demo__btns .action:hover{color:var(--text-primary);background-color:var(--bg-color-demo-hover)}.ldesign-doc-demo__btns .action.active{color:var(--text-primary);background-color:var(--bg-color-demo-select)}.ldesign-doc-demo__code{border-radius:0 0 6px 6px;overflow:hidden;max-height:560px}.ldesign-doc-demo__code pre{margin:0;padding:20px 24px;max-height:560px;box-sizing:border-box;overflow:auto;background:var(--bg-color-code);color:var(--text-primary);border-top:1px solid var(--component-border)}.ldesign-doc-demo__code pre:hover::-webkit-scrollbar-thumb{background-color:var(--bg-color-scroll)}.ldesign-doc-demo__code pre::-webkit-scrollbar{width:12px;height:12px;background:transparent}.ldesign-doc-demo__code pre::-webkit-scrollbar-corner{width:0}.ldesign-doc-demo__code pre::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:transparent}
`,Q7=`<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path fill="currentColor" d="M10.3736 0.498413L11.581 0.821937L7.69869 15.3108L6.49128 14.9873L10.3736 0.498413Z" />\r
  <path fill="currentColor" d="M13.687 2.66028L17.3046 6.79909C17.8786 7.45583 17.9195 8.41353 17.4255 9.11321L17.3115 9.25899L13.6894 13.4505L12.7436 12.6332C12.7436 12.6332 16.645 8.25979 16.5103 8.0325L12.7459 3.4829L13.687 2.66028Z" />\r
  <path fill="currentColor" d="M0.667582 6.90809L3.84161 2.67255L4.8419 3.42215L1.51505 7.99998C1.41314 8.20784 4.8419 12.6428 4.8419 12.6428L3.84161 13.3924L0.667582 9.1569L0.5612 8.99891C0.171134 8.35104 0.206595 7.52325 0.667582 6.90809Z" />\r
</svg>\r
`,e8={tag:"ldesign-demo",code:"",language:"jsx",showCode:!1,mode:"auto",theme:{get:(e,t)=>t||sessionStorage.getItem("--tdesign-theme")||"light",set:(e,t)=>t,connect(e,t,n){function i(){const o=sessionStorage.getItem("--tdesign-theme");Object.assign(e,{[t]:o}),n()}return window.addEventListener("storageChange",i),()=>window.removeEventListener("storageChange",i)}},render:e=>{const{code:t,language:n,showCode:i,mode:o,theme:l}=e,r=yt.highlight(t,yt.languages[n],n),s={transitionDuration:".2s",maxHeight:i?"560px":0,transitionTimingFunction:i?"cubic-bezier(.82, 0, 1, .9)":"ease"};return O`
      <div class="ldesign-doc-demo ${o}">
        <slot></slot>
        <div class="ldesign-doc-demo__footer">
          <div class="ldesign-doc-demo__btns">
            <slot name="action"></slot>
            <ldesign-copy code=${t} theme=${o==="open"?"dark":"light"}></ldesign-copy>
            ${o==="open"?O``:O`<span class="action code ${i?"active":""}" onclick=${O.set("showCode",!i)} innerHTML=${Q7}></span>`}
          </div>
          <div class="ldesign-doc-demo__code ${l}" style="${s}">
            <pre class="language-${n}"><code class="language-${n}" innerHTML="${r}"></code></pre>
          </div>
        </div>
      </div>
    `.css`${J7}`}};C1(e8);const t8=`.ldesign-doc-copy{height:32px;position:relative}.ldesign-doc-copy.dark .ldesign-doc-copy__inner:hover{background-color:var(--bg-color-component-hover)}.ldesign-doc-copy__inner{height:32px;width:32px;padding:8px;box-sizing:border-box;border-radius:var(--border-radius);cursor:pointer;user-select:none;transition:all .1s;display:inline-flex;color:var(--text-secondary)}.ldesign-doc-copy__inner:hover{color:var(--text-primary);background-color:var(--bg-color-demo-hover)}.ldesign-doc-copy__popup{position:absolute;top:-36px;left:-12px;color:var(--text-primary);border-radius:var(--border-radius);padding:4px 8px;word-break:keep-all;line-height:22px;visibility:hidden;opacity:0;transition:all .2s linear;background-color:var(--bg-color-container);box-shadow:0 3px 14px 2px #0000000d,0 8px 10px 1px #0000000f,0 5px 5px -3px #0000001a}.ldesign-doc-copy__popup:after{content:"";z-index:2;width:0;height:0;border-style:solid;border-width:6px;border-color:transparent;border-top-color:var(--bg-color-container);bottom:-12px;left:50%;position:absolute;margin-left:-6px;font-size:12px}.ldesign-doc-copy__popup.show{opacity:1;visibility:visible}
`,n8=`<svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.24985 0.249871C3.55956 0.249951 3 0.809572 3 1.49987V14C3 14.6904 3.55964 15.25 4.25 15.25H14.25C14.9404 15.25 15.5 14.6904 15.5 14V5.2489C15.5 4.91698 15.368 4.59868 15.1331 4.36419L11.3763 0.61444C11.1419 0.380487 10.8243 0.249107 10.4931 0.249146L4.24985 0.249871ZM10.4933 1.49915L4.25 1.49987V14H14.25V6.50002L9.25 6.50001V1.50001L10.4933 1.49915ZM10.5 5.25002H14.25L10.5 1.50587V5.25002Z" />\r
  <path fill="currentColor" d="M0.5 5.25001V16.5C0.5 17.1904 1.05964 17.75 1.75 17.75L14.25 17.75V16.5L1.88889 16.5V5.25001H0.5Z" />\r
</svg>`;function i8(e){if("clipboard"in navigator){navigator.clipboard.writeText(e.code).then(()=>{Object.assign(e,{showTip:!0}),setTimeout(()=>Object.assign(e,{showTip:!1}),800),ie(e,"copy",{detail:e.code})});return}const t=document.createElement("textarea");t.textContent=e.code,t.style.width=0,t.style.height=0,document.body.appendChild(t);const n=document.getSelection(),i=document.createRange();i.selectNode(t),n.removeAllRanges(),n.addRange(i),document.execCommand("copy"),n.removeAllRanges(),document.body.removeChild(t),ie(e,"copy",{detail:e.code})}const o8={tag:"ldesign-copy",code:"",render:()=>O`
      <ldesign-tooltip duration="800">
        <div class="ldesign-doc-copy__inner" innerHTML=${n8} onclick=${i8}></div>
        <span slot="content">已复制</span>
      </ldesign-tooltip>
    `.css`${t8}`};C1(o8);const l8=`.ldesign-doc-empty .light{display:var(--theme-block-light-display)}.ldesign-doc-empty .dark{display:var(--theme-block-dark-display)}.ldesign-doc-empty__design{display:flex;justify-content:center;align-items:center;padding:48px;border:1px solid var(--component-border);border-radius:6px}.ldesign-doc-empty__design img{width:50%;height:auto;min-width:240px}
`;function r8(e){if(e==="design")return O`
      <div class="ldesign-doc-empty__design">
        <img class="light" src="https://tdesign.gtimg.com/site/webcomponents/empty-light.png" />
        <img class="dark" src="https://tdesign.gtimg.com/site/webcomponents/empty-dark.png" />
      </div>
    `}const s8={tag:"ldesign-empty",type:"design",render:e=>{const{type:t}=e;return O`
      <div class="ldesign-doc-empty">
        ${r8(t)}
      </div>
    `.css`${l8}`}};C1(s8);const a8=`:host{font-size:14px;line-height:24px}.ldesign-doc-history{padding:7px 12px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;color:var(--text-primary);background-color:var(--bg-color-code);border:1px solid var(--component-border)}.ldesign-doc-history .icon{margin-right:8px;display:inline-flex}.ldesign-doc-history .icon svg{color:var(--text-placeholder)}.ldesign-doc-history .text{margin-right:4px;color:var(--text-secondary)}
`,c8=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path\r
    d="M7.90582 2.79363C10.8499 2.79364 13.2095 5.14029 13.2095 8.00195C13.2095 10.8636 10.8499 13.2103 7.90581 13.2103C5.44426 13.2103 3.39128 11.5698 2.78447 9.35939L1.75098 9.52803C2.44243 12.2422 4.93584 14.252 7.90581 14.252C11.4103 14.252 14.2512 11.4537 14.2512 8.00196C14.2512 4.55018 11.4103 1.75195 7.90582 1.75195C5.80622 1.75195 3.9448 2.75638 2.78981 4.304L2.78981 2.6451H1.75098V5.7916C1.75098 6.06774 1.97483 6.2916 2.25098 6.2916L5.37759 6.2916V5.24707H3.40454C4.33896 3.77709 5.99992 2.79363 7.90582 2.79363Z"\r
    fill="currentColor" />\r
  <path d="M6.99951 5.50024V8.38917L9.64596 11.0356L10.3531 10.3285L7.99951 7.97496V5.50024H6.99951Z" fill="currentColor" />\r
</svg>`;function d8(e){let t=e;return/^\d+$/.test(e)&&(t=new Date(parseFloat(e)).toLocaleString("en-US")),t}const p8={tag:"ldesign-time",time:"",content:"",render:({time:e,content:t})=>O`
      <div class="ldesign-doc-history">
        <i class="icon" innerHTML="${c8}"></i>
        ${t||O`
          <span class="text">Last Update: </span>
          ${d8(e)}
        `}
      </div>
    `.css`${a8}`};C1(p8);const g8=`code[class*=language-],pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}code[class*=language-]::selection,pre[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}pre[class*=language-]{overflow:auto;position:relative}.language-css>code,.language-sass>code,.language-scss>code{color:#c24c08}[class*=language-] .namespace{opacity:.7}.token.atrule{color:#6d3bac}.token.attr-name{color:#007edf}.token.attr-value,.token.attribute{color:#d29c00}.token.boolean{color:#6d3bac}.token.builtin,.token.cdata,.token.char,.token.class{color:#007edf}.token.class-name{color:#003cbf}.token.comment{color:#97a3b7}.token.constant{color:#6d3bac}.token.deleted{color:#b01531}.token.doctype{color:#97a3b7}.token.entity{color:#b01531}.token.function{color:#6d3bac}.token.hexcode{color:#c24c08}.token.id,.token.important{color:#6d3bac;font-weight:700}.token.inserted{color:#007edf}.token.keyword{color:#6d3bac}.token.number{color:#c24c08}.token.operator{color:#007edf}.token.prolog{color:#97a3b7}.token.property{color:#007edf}.token.pseudo-class,.token.pseudo-element{color:#d29c00}.token.punctuation{color:#007edf}.token.regex{color:#003cbf}.token.selector{color:#b01531}.token.string{color:#d29c00}.token.symbol{color:#6d3bac}.token.tag{color:#b01531}.token.unit{color:#c24c08}.token.url,.token.variable{color:#b01531}:root[theme-mode=dark] code[class*=language-],:root[theme-mode=dark] pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}:root[theme-mode=dark] code[class*=language-]::selection,:root[theme-mode=dark] pre[class*=language-]::selection,:root[theme-mode=dark] code[class*=language-] ::selection,:root[theme-mode=dark] pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:root[theme-mode=dark] :not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}:root[theme-mode=dark] pre[class*=language-]{overflow:auto;position:relative}:root[theme-mode=dark] .language-css>code,:root[theme-mode=dark] .language-sass>code,:root[theme-mode=dark] .language-scss>code{color:#f2995f}:root[theme-mode=dark] [class*=language-] .namespace{opacity:.7}:root[theme-mode=dark] .token.atrule{color:#ae78f0}:root[theme-mode=dark] .token.attr-name{color:#3280ff}:root[theme-mode=dark] .token.attr-value{color:#fbca25}:root[theme-mode=dark] .token.attribute{color:#fbca25}:root[theme-mode=dark] .token.boolean{color:#ae78f0}:root[theme-mode=dark] .token.builtin{color:#3280ff}:root[theme-mode=dark] .token.cdata{color:#3280ff}:root[theme-mode=dark] .token.char{color:#3280ff}:root[theme-mode=dark] .token.class{color:#3280ff}:root[theme-mode=dark] .token.class-name{color:#5cc5fc}:root[theme-mode=dark] .token.comment{color:#97a3b7}:root[theme-mode=dark] .token.constant{color:#ae78f0}:root[theme-mode=dark] .token.deleted{color:#48c79c}:root[theme-mode=dark] .token.doctype{color:#97a3b7}:root[theme-mode=dark] .token.entity{color:#48c79c}:root[theme-mode=dark] .token.function{color:#ae78f0}:root[theme-mode=dark] .token.hexcode{color:#f2995f}:root[theme-mode=dark] .token.id{color:#ae78f0;font-weight:700}:root[theme-mode=dark] .token.important{color:#f6c;font-weight:700}:root[theme-mode=dark] .token.inserted{color:#3280ff}:root[theme-mode=dark] .token.keyword{color:#f6c}:root[theme-mode=dark] .token.number{color:#f2995f}:root[theme-mode=dark] .token.operator{color:#3280ff}:root[theme-mode=dark] .token.prolog{color:#97a3b7}:root[theme-mode=dark] .token.property{color:#3280ff}:root[theme-mode=dark] .token.pseudo-class{color:#fbca25}:root[theme-mode=dark] .token.pseudo-element{color:#fbca25}:root[theme-mode=dark] .token.punctuation{color:#3280ff}:root[theme-mode=dark] .token.regex{color:#5cc5fc}:root[theme-mode=dark] .token.selector{color:#f36d78}:root[theme-mode=dark] .token.string{color:#fbca25}:root[theme-mode=dark] .token.symbol{color:#f6c}:root[theme-mode=dark] .token.tag{color:#48c79c}:root[theme-mode=dark] .token.unit{color:#f2995f}:root[theme-mode=dark] .token.url{color:#48c79c}:root[theme-mode=dark] .token.variable{color:#48c79c}:host{--context-max-height: 400px}:host ldesign-select{--input-width: 120px}.ldesign-doc-usage{border-radius:6px;border:1px solid var(--component-border);overflow:hidden}.ldesign-doc-usage__content{height:var(--context-max-height);background:var(--bg-color-demo);display:flex;justify-content:space-between}.ldesign-doc-usage__render{min-width:365px;display:flex;flex:1;flex-direction:column;justify-content:space-between;max-width:calc(100% - 240px)}.ldesign-doc-usage__render-slot{overflow:auto;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;padding:16px;gap:8px;height:100%}.ldesign-doc-usage__render-slot::-webkit-scrollbar-corner{width:0}.ldesign-doc-usage__render-slot::-webkit-scrollbar{width:12px;height:12px;background:transparent}.ldesign-doc-usage__render-slot::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:var(--bg-color-scroll)}.ldesign-doc-usage__render-header{min-height:48px;display:flex;box-sizing:border-box;box-shadow:var(--header-box-shadow);overflow:auto hidden;position:relative}.ldesign-doc-usage__render-header .header-panel{padding:8px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer}.ldesign-doc-usage__render-header .header-panel:hover .panel-inner{background:var(--bg-color-container-hover)}.ldesign-doc-usage__render-header .header-panel .panel-inner{padding:8px;transition:all .2s linear;border-radius:3px}.ldesign-doc-usage__render-header .header-panel .panel-inner.active{color:var(--brand-main)}.ldesign-doc-usage__render-header .active-line{height:1px;position:absolute;left:0;bottom:0px;z-index:10;background:var(--brand-main);transition:all .2s var(--anim-time-fn-easing)}.ldesign-doc-usage__render-footer{height:48px;display:flex;padding:0 8px;flex-shrink:0;justify-content:flex-end;gap:8px;align-items:center;box-sizing:border-box}.ldesign-doc-usage__render-footer .action{height:32px;width:32px;padding:8px;box-sizing:border-box;border-radius:var(--border-radius);cursor:pointer;user-select:none;transition:all .1s;display:inline-flex;color:var(--text-secondary)}.ldesign-doc-usage__render-footer .action:hover{color:var(--text-primary);background-color:var(--bg-color-demo-hover)}.ldesign-doc-usage__render-footer .action.active{color:var(--text-primary);background-color:var(--bg-color-demo-select)}.ldesign-doc-usage__config{width:240px;box-sizing:border-box;flex-shrink:0;border-left:1px solid var(--component-stroke)}.ldesign-doc-usage__config-title{display:flex;height:48px;gap:4px;align-items:center;padding:12px 16px;box-sizing:border-box;border-bottom:1px solid var(--component-stroke)}.ldesign-doc-usage__config-title span{font-size:14px;line-height:24px;color:var(--text-primary)}.ldesign-doc-usage__config-title i{display:inline-flex}.ldesign-doc-usage__config-content{padding:16px;overflow:hidden auto;display:flex;flex-direction:column;gap:12px;max-height:352px;box-sizing:border-box}.ldesign-doc-usage__config-content::-webkit-scrollbar-corner{width:0}.ldesign-doc-usage__config-content::-webkit-scrollbar{width:12px;height:12px;background:transparent}.ldesign-doc-usage__config-content::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:var(--bg-color-scroll)}.ldesign-doc-usage__config-divider{width:100%;border-top:1px solid var(--component-stroke)}.ldesign-doc-usage__config-list{display:flex;flex-direction:column;gap:4px;list-style:none;margin:0;padding:0}.ldesign-doc-usage__config-list .item{display:inline-flex;align-items:center;height:32px;justify-content:space-between;--input-width: 120px}.ldesign-doc-usage__config-list .item .name{width:90%;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary)}.ldesign-doc-usage__code{border-radius:0 0 6px 6px;overflow:hidden;max-height:240px}.ldesign-doc-usage__code pre{margin:0;padding:20px 24px;max-height:240px;box-sizing:border-box;overflow:auto;background:var(--bg-color-code);color:var(--text-primary)}.ldesign-doc-usage__code pre:hover::-webkit-scrollbar-thumb{background-color:var(--bg-color-scroll)}.ldesign-doc-usage__code pre::-webkit-scrollbar{width:12px;height:12px;background:transparent}.ldesign-doc-usage__code pre::-webkit-scrollbar-corner{width:0}.ldesign-doc-usage__code pre::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:transparent}
`,f8=`<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path fill="currentColor" d="M10.3736 0.498413L11.581 0.821937L7.69869 15.3108L6.49128 14.9873L10.3736 0.498413Z" />\r
  <path fill="currentColor" d="M13.687 2.66028L17.3046 6.79909C17.8786 7.45583 17.9195 8.41353 17.4255 9.11321L17.3115 9.25899L13.6894 13.4505L12.7436 12.6332C12.7436 12.6332 16.645 8.25979 16.5103 8.0325L12.7459 3.4829L13.687 2.66028Z" />\r
  <path fill="currentColor" d="M0.667582 6.90809L3.84161 2.67255L4.8419 3.42215L1.51505 7.99998C1.41314 8.20784 4.8419 12.6428 4.8419 12.6428L3.84161 13.3924L0.667582 9.1569L0.5612 8.99891C0.171134 8.35104 0.206595 7.52325 0.667582 6.90809Z" />\r
</svg>\r
`,u8=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8 1C6.6247 1 5.36829 1.5546 4.46644 2.46644C3.5546 3.36829 3 4.6247 3 6C3 7.37457 3.554 8.63036 4.46498 9.53211C4.77388 9.84935 5.12363 10.1126 5.5 10.3289V12C5.5 12.5523 5.94772 13 6.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12V10.3289C10.8764 10.1126 11.2261 9.84935 11.535 9.5321C12.446 8.63036 13 7.37456 13 6C13 3.23386 10.7661 1 8 1Z" fill="#FFBD2E"/>\r
<path d="M6 14C5.72386 14 5.5 14.2239 5.5 14.5C5.5 14.7761 5.72386 15 6 15H10C10.2761 15 10.5 14.7761 10.5 14.5C10.5 14.2239 10.2761 14 10 14H6Z" fill="#FFBD2E"/>\r
</svg>\r
`;function h8(e){const{panelList:t,panel:n}=e,i=t.findIndex(s=>s.value===n);if(i===-1||!e.shadowRoot)return"";const o=e.shadowRoot.querySelectorAll(".header-panel"),{offsetLeft:l,offsetWidth:r}=o[i];return`width: ${r}px; left: ${l}px`}function sl(e,t,n){const{detail:i}=t;ie(e,"ConfigChange",{detail:{value:i.value,name:n.name,type:n.type}})}function v8(e=[]){const t=[],n=[];return e.forEach(i=>{/boolean/i.test(i.type)&&t.push(i),/enum/i.test(i.type)&&n.push(i)}),O`
    ${t.length?O`
          <ul class="ldesign-doc-usage__config-list">
            ${t.map(i=>O`
                <li class="item">
                  <span class="name" title="${i.name}">${i.name}</span>
                  <ldesign-switch
                    size="small"
                    value="${i.defaultValue}"
                    onchange="${(o,l)=>sl(o,l,i)}"
                  ></ldesign-switch>
                </li>
              `)}
          </ul>
        `:""}
    ${n.length?O`
          ${t.length?O`<div class="ldesign-doc-usage__config-divider"></div>`:""}
          <ul class="ldesign-doc-usage__config-list">
            ${n.map(i=>O`
                <li class="item">
                  <span class="name" title="${i.name}">${i.name}</span>
                  <ldesign-select
                    borderless
                    value="${i.defaultValue}"
                    options="${i.options}"
                    onchange="${(o,l)=>sl(o,l,i)}"
                  ></ldesign-select>
                </li>
              `)}
          </ul>
        `:""}
  `}const w8={tag:"ldesign-usage",code:"",showCode:!1,language:"markup",panel:{set:(e,t,n)=>(t&&n!==t&&ie(e,"PanelChange",{detail:{value:t}}),t),get:(e,t)=>{let n;return t||((n=e.panelList[0])==null?void 0:n.value)},observe:e=>{if(!e.shadowRoot)return;const t=e.shadowRoot.querySelector(".active-line");t.style=h8(e)}},panelList:{get:(e,t)=>t||[],set:(e,t)=>t},configList:{get:(e,t)=>t||[],set:(e,t)=>t},render:e=>{const{code:t,language:n,showCode:i,configList:o,panelList:l,panel:r}=e,s=yt.highlight(t,yt.languages[n],n),a={transitionDuration:".2s",maxHeight:i?"240px":0,transitionTimingFunction:i?"cubic-bezier(.82, 0, 1, .9)":"ease"};return O`
      <div class="ldesign-doc-usage">
        <div class="ldesign-doc-usage__content">
          <div class="ldesign-doc-usage__render">
            <div class="ldesign-doc-usage__render-header">
              ${l.map(c=>O`
                  <div
                    class="header-panel"
                    onclick="${O.set("panel",c.value)}"
                  >
                    <span
                      class="panel-inner ${r===c.value?"active":""}"
                      >${c.label}</span
                    >
                  </div>
                `)}

              <span class="active-line"></span>
            </div>

            <slot name="${r}" class="ldesign-doc-usage__render-slot"></slot>

            <div class="ldesign-doc-usage__render-footer">
              <slot name="action"></slot>
              <ldesign-copy code=${t}></ldesign-copy>
              <span
                class="action code ${i?"active":""}"
                onclick=${O.set("showCode",!i)}
                innerHTML=${f8}
              ></span>
            </div>
          </div>

          <div class="ldesign-doc-usage__config">
            <div class="ldesign-doc-usage__config-title">
              <i innerHTML="${u8}"></i>
              <span>配置</span>
            </div>

            <div class="ldesign-doc-usage__config-content">
              ${v8(o)}
            </div>
          </div>
        </div>
        <div class="ldesign-doc-usage__code" style="${a}">
          <pre
            class="language-${n}"
          ><code class="language-${n}" innerHTML="${s}"></code></pre>
        </div>
      </div>
    `.css`${g8}`}};C1(w8);const C8=`:host{display:inline;line-height:calc(100% + 8px);font-size:12px;margin:0 2px;padding:2px 6px;border-radius:3px;color:var(--error-8);background:var(--error-1)}.ldesign-code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}
`,m8={tag:"ldesign-code",text:"",render:({text:e})=>O`
      <code class="ldesign-code">${e}</code>
    `.css`${C8}`};C1(m8);const x8=`code[class*=language-],pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}code[class*=language-]::selection,pre[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}pre[class*=language-]{overflow:auto;position:relative}.language-css>code,.language-sass>code,.language-scss>code{color:#c24c08}[class*=language-] .namespace{opacity:.7}.token.atrule{color:#6d3bac}.token.attr-name{color:#007edf}.token.attr-value,.token.attribute{color:#d29c00}.token.boolean{color:#6d3bac}.token.builtin,.token.cdata,.token.char,.token.class{color:#007edf}.token.class-name{color:#003cbf}.token.comment{color:#97a3b7}.token.constant{color:#6d3bac}.token.deleted{color:#b01531}.token.doctype{color:#97a3b7}.token.entity{color:#b01531}.token.function{color:#6d3bac}.token.hexcode{color:#c24c08}.token.id,.token.important{color:#6d3bac;font-weight:700}.token.inserted{color:#007edf}.token.keyword{color:#6d3bac}.token.number{color:#c24c08}.token.operator{color:#007edf}.token.prolog{color:#97a3b7}.token.property{color:#007edf}.token.pseudo-class,.token.pseudo-element{color:#d29c00}.token.punctuation{color:#007edf}.token.regex{color:#003cbf}.token.selector{color:#b01531}.token.string{color:#d29c00}.token.symbol{color:#6d3bac}.token.tag{color:#b01531}.token.unit{color:#c24c08}.token.url,.token.variable{color:#b01531}:root[theme-mode=dark] code[class*=language-],:root[theme-mode=dark] pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}:root[theme-mode=dark] code[class*=language-]::selection,:root[theme-mode=dark] pre[class*=language-]::selection,:root[theme-mode=dark] code[class*=language-] ::selection,:root[theme-mode=dark] pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:root[theme-mode=dark] :not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}:root[theme-mode=dark] pre[class*=language-]{overflow:auto;position:relative}:root[theme-mode=dark] .language-css>code,:root[theme-mode=dark] .language-sass>code,:root[theme-mode=dark] .language-scss>code{color:#f2995f}:root[theme-mode=dark] [class*=language-] .namespace{opacity:.7}:root[theme-mode=dark] .token.atrule{color:#ae78f0}:root[theme-mode=dark] .token.attr-name{color:#3280ff}:root[theme-mode=dark] .token.attr-value{color:#fbca25}:root[theme-mode=dark] .token.attribute{color:#fbca25}:root[theme-mode=dark] .token.boolean{color:#ae78f0}:root[theme-mode=dark] .token.builtin{color:#3280ff}:root[theme-mode=dark] .token.cdata{color:#3280ff}:root[theme-mode=dark] .token.char{color:#3280ff}:root[theme-mode=dark] .token.class{color:#3280ff}:root[theme-mode=dark] .token.class-name{color:#5cc5fc}:root[theme-mode=dark] .token.comment{color:#97a3b7}:root[theme-mode=dark] .token.constant{color:#ae78f0}:root[theme-mode=dark] .token.deleted{color:#48c79c}:root[theme-mode=dark] .token.doctype{color:#97a3b7}:root[theme-mode=dark] .token.entity{color:#48c79c}:root[theme-mode=dark] .token.function{color:#ae78f0}:root[theme-mode=dark] .token.hexcode{color:#f2995f}:root[theme-mode=dark] .token.id{color:#ae78f0;font-weight:700}:root[theme-mode=dark] .token.important{color:#f6c;font-weight:700}:root[theme-mode=dark] .token.inserted{color:#3280ff}:root[theme-mode=dark] .token.keyword{color:#f6c}:root[theme-mode=dark] .token.number{color:#f2995f}:root[theme-mode=dark] .token.operator{color:#3280ff}:root[theme-mode=dark] .token.prolog{color:#97a3b7}:root[theme-mode=dark] .token.property{color:#3280ff}:root[theme-mode=dark] .token.pseudo-class{color:#fbca25}:root[theme-mode=dark] .token.pseudo-element{color:#fbca25}:root[theme-mode=dark] .token.punctuation{color:#3280ff}:root[theme-mode=dark] .token.regex{color:#5cc5fc}:root[theme-mode=dark] .token.selector{color:#f36d78}:root[theme-mode=dark] .token.string{color:#fbca25}:root[theme-mode=dark] .token.symbol{color:#f6c}:root[theme-mode=dark] .token.tag{color:#48c79c}:root[theme-mode=dark] .token.unit{color:#f2995f}:root[theme-mode=dark] .token.url{color:#48c79c}:root[theme-mode=dark] .token.variable{color:#48c79c}:host{display:block}.ldesign-code-block{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;border-radius:6px;border:1px solid var(--component-border);position:relative}.ldesign-code-block ldesign-copy{position:absolute;right:8px;top:8px;z-index:10}.ldesign-code-block__header{min-height:48px;display:flex;box-sizing:border-box;box-shadow:var(--header-box-shadow);overflow:auto hidden;position:relative}.ldesign-code-block__header .header-panel{padding:8px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer}.ldesign-code-block__header .header-panel:hover .panel-inner{background:var(--bg-color-container-hover)}.ldesign-code-block__header .header-panel .panel-inner{padding:8px;transition:all .2s linear;border-radius:3px}.ldesign-code-block__header .header-panel .panel-inner.active{color:var(--brand-main)}.ldesign-code-block__header .active-line{height:1px;position:absolute;left:0;bottom:0px;z-index:10;background:var(--brand-main);transition:all .2s var(--anim-time-fn-easing)}.ldesign-code-block__body{max-height:334px;box-sizing:border-box;background-color:var(--bg-color-code)}.ldesign-code-block__body pre{margin:0;padding:24px;max-height:334px;box-sizing:border-box;overflow:auto;background:var(--bg-color-code);color:var(--text-primary)}.ldesign-code-block__body pre:hover::-webkit-scrollbar-thumb{background-color:var(--bg-color-scroll)}.ldesign-code-block__body pre::-webkit-scrollbar{width:12px;height:12px;background:transparent}.ldesign-code-block__body pre::-webkit-scrollbar-corner{width:0}.ldesign-code-block__body pre::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:transparent}
`;function L8(e){const{slotsName:t,panel:n}=e,i=(t==null?void 0:t.findIndex(s=>s===n))||0;if(i===-1||!e.shadowRoot)return"";const o=e.shadowRoot.querySelectorAll(".header-panel"),{offsetLeft:l,offsetWidth:r}=o[i];return`width: ${r}px; left: ${l}px`}function y8(e){const t=Array.from(e.querySelectorAll("ldesign-code-block > [slot]")),n=[],i={};return t.forEach(o=>{n.push(o.slot),i[o.slot]={name:o.slot,lang:o.lang,content:decodeURIComponent(o.innerHTML)}}),e.slotsName=n,{slotsEl:t,slotsName:n,slotsContentMap:i}}const b8={tag:"ldesign-code-block",panel:{get:(e,t)=>t||"",set:(e,t)=>t,observe:e=>{if(!e.shadowRoot)return;const t=e.shadowRoot.querySelector(".active-line");t.style=L8(e)}},render:e=>{const{panel:t}=e,{slotsName:n,slotsContentMap:i}=y8(e),o=i[t],l=yt.highlight(o.content,yt.languages[o.lang],o.lang);return O`
      <div class="ldesign-code-block">
        <ldesign-copy code="${o.content}"></ldesign-copy>
        <div class="ldesign-code-block__header">
          ${n.map(r=>O`
            <div class="header-panel" onclick="${O.set("panel",r)}">
              <span class="panel-inner ${t===r?"active":""}">${r}</span>
            </div>
          `)}

          <span class="active-line"></span>
        </div>

        <div class="ldesign-code-block__body">
          <pre class="language-${o.lang}" innerHTML="${l}"></pre>
        </div>
      </div>
    `.css`${x8}`}};C1(b8);const _8=`.ldesign-message .l-message{width:fit-content;font-size:14px;outline:0;border-radius:3px;background-color:var(--bg-color-container);box-shadow:var(--shadow-3),var(--shadow-inset-top),var(--shadow-inset-right),var(--shadow-inset-bottom),var(--shadow-inset-left);box-sizing:border-box;align-items:center;color:var(--text-primary);line-height:22px;padding:13px 16px;position:fixed;top:0;left:50%;display:flex;transform:translate(-50%);transition:top .2s}.ldesign-message .l-message.l-message-enter{top:32px}.ldesign-message .l-message.l-message-leave{top:-100px}.ldesign-message .l-message>.l-icon{color:var(--brand-main);margin-right:8px;font-size:16px}.ldesign-message .l-message.l-is-success>.l-icon{color:var(--success-main)}.ldesign-message .l-message.l-is-warning>.l-icon{color:var(--warning-main)}.ldesign-message .l-message.l-is-error>.l-icon{color:var(--error-main)}
`,H8='<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="l-icon l-icon-info-circle-filled"><path fill="currentColor" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fill-opacity="0.9"></path></svg>',M8='<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="l-icon l-icon-error-circle-filled"><path fill="currentColor" d="M15 8A7 7 0 101 8a7 7 0 0014 0zM8.5 4v5.5h-1V4h1zm-1.1 7h1.2v1.2H7.4V11z" fill-opacity="0.9"></path></svg>',k8='<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="l-icon l-icon-check-circle-filled"><path fill="currentColor" d="M8 15A7 7 0 108 1a7 7 0 000 14zM4.5 8.2l.7-.7L7 9.3l3.8-3.8.7.7L7 10.7 4.5 8.2z" fill-opacity="0.9"></path></svg>',V8='<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="l-icon l-icon-help-circle-filled"><path fill="currentColor" d="M15 8A7 7 0 101 8a7 7 0 0014 0zM5.8 6.63a2.2 2.2 0 014.39 0c0 .97-.75 1.72-1.49 2.02a.34.34 0 00-.2.32v.8h-1v-.8c0-.56.33-1.04.82-1.24.5-.2.87-.66.87-1.1a1.2 1.2 0 00-2.39 0h-1zm1.67 4.54a.53.53 0 111.05 0 .53.53 0 01-1.05 0z" fill-opacity="0.9"></path></svg>';function Z8(e){if(e==="info")return H8;if(e==="success")return k8;if(["warning","error"].includes(e))return M8;if(e==="question")return V8}window.showTdMessage=function({content:e,duration:t,theme:n}){const i="__tdesign_message__";if(!document.getElementById(i)){const o=document.createElement("td-message");o.setAttribute("id",i),document.body.appendChild(o)}setTimeout(()=>{document.getElementById(i).show({content:e,duration:t,theme:n})})};const E8={tag:"ldesign-message",theme:"info",duration:3e3,zIndex:5e3,content:"",showMessage:!1,show:e=>({content:t,theme:n,duration:i})=>{Object.assign(e,{showMessage:!0,content:t,theme:n||e.theme}),setTimeout(()=>{Object.assign(e,{showMessage:!1})},i||e.duration)},render:e=>{const{theme:t,zIndex:n,content:i,showMessage:o}=e,l=`${Z8(t)}${i}`,r={zIndex:n},s=["l-message",`l-is-${t}`].concat(o?"l-message-enter":"l-message-leave");return O`
      <div class="ldesign-message">
        <div
          style=${r}
          class="${s}"
          innerHTML=${l}
        ></div>
      </div>
    `.css`${_8}`}};C1(E8);const A8=`.ldesign-avatar{margin-right:8px;display:inline-flex;align-items:center;justify-content:center}.ldesign-avatar .avatar{width:40px;height:40px;display:inline-block}.ldesign-avatar .avatar img{width:40px;height:40px;border-radius:100%}
`,S8={tag:"ldesign-avatar",content:"",username:"",src:"",href:"",render:({content:e,username:t,src:n,href:i})=>{const o=`https://avatars.githubusercontent.com/${t}`,l=`https://github.com/${t}`;return O`
      <div class="ldesign-avatar">
        <ldesign-tooltip trigger-type="hover">
          <a class="avatar" target="_blank" href="${i||l}">
            <img src="${n||o}" />
          </a>
          <div slot="content">${e||t}</div>
        </ldesign-tooltip>
      </div>
    `.css`${A8}`}};C1(S8);const $8=`.ldesign-contributors .title{font-weight:700;font-size:20px;line-height:28px;margin:48px 0 16px}.ldesign-contributors__content{display:flex;flex-wrap:wrap}.ldesign-contributors__content td-tooltip{margin-right:8px}.ldesign-contributors__content img{width:40px;height:40px;border-radius:100%}.ldesign-contributors__content .avatar{width:40px;height:40px;display:inline-block}
`,B8="https://service-edbzjd6y-1257786608.hk.apigw.tencentcs.com/release/github-contributors/list";function T8(e){if(!e.length)return O``;const t=e.filter(n=>typeof n=="object"&&n!==null);return O`
    <section class="TDesign-contributors">
      <h3 class="title">Contributors</h3>
      <div class="TDesign-contributors__content">
        ${t.map(n=>O`
          <td-avatar username="${n==null?void 0:n.username}" content="${n==null?void 0:n.roleNames} ${n==null?void 0:n.username}"></td-avatar>
        `)}
      </div>
    </section>
  `}function F8(e,t,n,i){const o=new RegExp(`api|interaction|design|ui|^${t}$|${t}-test`);if(!e||!t||!n||!i[e])return[];const l=i[e].find(a=>a.name===n);if(!l)return[];let{tasks:r}=l;r=r.filter(a=>a.name.search(o)!==-1&&a.contributors.length>0);const s={};return r.forEach(a=>{["contributors","pmcs"].forEach(c=>{a[c].forEach(d=>{s[d]?(s[d].role.push(a.name),s[d].roleName.push(a.fullName)):s[d]={role:[a.name],roleName:[a.fullName]}})})}),Object.keys(s).map(a=>({username:a,roleNames:[...new Set(s[a].roleName)].join("/"),...s[a]}))}const O8={tag:"ldesign-contributors",platform:"",framework:"",componentName:"",contributorsData:{get:(e,t)=>t||{},set:(e,t)=>t,connect:(e,t,n)=>{const i=sessionStorage.getItem("__tdesign_contributors__");if(i){const o=JSON.parse(i);Object.assign(e,{[t]:o}),n()}else fetch(B8).then(o=>o.json()).then(o=>{Object.assign(e,{[t]:o}),sessionStorage.setItem("__tdesign_contributors__",JSON.stringify(o)),n()}).catch(o=>{console.error(o)})}},render:e=>{const{platform:t,framework:n,componentName:i}=e,o=F8(t,n,i,e.contributorsData);return T8(o).css`${$8}`}};C1(O8);const R8=`.ldesign-tooltip{position:relative}.ldesign-tooltip[data-placement=top] .ldesign-tooltip__popup{top:-36px}.ldesign-tooltip[data-placement=top] .ldesign-tooltip__popup:after{bottom:-12px;border-top-color:var(--bg-color-container)}.ldesign-tooltip[data-placement=bottom] .ldesign-tooltip__popup{bottom:-36px}.ldesign-tooltip[data-placement=bottom] .ldesign-tooltip__popup:after{top:-12px;border-bottom-color:var(--bg-color-container)}.ldesign-tooltip__popup{position:absolute;left:50%;transform:translate(-50%);color:var(--text-primary);border-radius:var(--border-radius);padding:4px 8px;white-space:nowrap;line-height:22px;visibility:hidden;opacity:0;z-index:900;transition:all .2s linear;background-color:var(--bg-color-container);box-shadow:0 3px 14px 2px #0000000d,0 8px 10px 1px #0000000f,0 5px 5px -3px #0000001a}.ldesign-tooltip__popup:after{content:"";z-index:2;width:0;height:0;border-style:solid;border-width:6px;border-color:transparent;left:50%;position:absolute;margin-left:-6px}.ldesign-tooltip__popup.show{opacity:1;visibility:visible}
`;function P8(e){e.triggerType==="click"&&(Object.assign(e,{showTip:!0}),setTimeout(()=>Object.assign(e,{showTip:!1}),e.duration))}function al(e){e.triggerType==="hover"&&Object.assign(e,{showTip:!0})}function cl(e){e.triggerType==="hover"&&Object.assign(e,{showTip:!1})}const N8={tag:"ldesign-tooltip",placement:"top",showTip:!1,duration:1800,triggerType:"click",render:e=>{const{showTip:t,placement:n}=e;return O`
      <div class="ldesign-tooltip" data-placement="${n}">
        <div onmouseover=${al} onmouseout=${cl} onclick=${P8}>
          <slot></slot>
        </div>
        <div class="ldesign-tooltip__popup ${t?"show":""}" onmouseover=${al} onmouseout=${cl}>
          <slot name="content"></slot>
        </div>
      </div>
    `.css`${R8}`}};C1(N8);const I8=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M21.0001 4.50004L7.50007 4.5L7.50006 6L21.0001 6.00004V4.50004Z" fill="currentColor" />\r
  <path d="M5.25007 4.5L3.00098 4.5L3.00098 6L5.25007 6V4.5Z" fill="currentColor" />\r
  <path d="M7.50007 11.2501L21.0001 11.2501V12.7501L7.50006 12.7501L7.50007 11.2501Z" fill="currentColor" />\r
  <path d="M3.00098 11.2501H5.25007V12.7501H3.00098L3.00098 11.2501Z" fill="currentColor" />\r
  <path d="M7.50007 18L21.0001 18V19.5L7.50006 19.5L7.50007 18Z" fill="currentColor" />\r
  <path d="M3.00098 18H5.25007V19.5H3.00098L3.00098 18Z" fill="currentColor" />\r
</svg>`,j8=`.ldesign-collapse-menu{position:relative;display:flex;align-items:center;height:var(--header-height)}.ldesign-collapse-menu .collapse-icon{width:24px;height:24px;cursor:pointer}.ldesign-collapse-menu .collapse-icon svg{color:var(--text-primary)}
`,z8=`.ldesign-collapse-menu__list{min-height:32px;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);display:flex;padding:8px;width:240px;box-sizing:border-box;flex-direction:column;transition:all .2s var(--anim-time-fn-easing)}.ldesign-collapse-menu__list .link+.link{margin-top:4px}.ldesign-collapse-menu__list .link{display:flex;align-items:center;height:32px;box-sizing:border-box;padding:8px;text-decoration:none;color:var(--text-secondary);font-size:14px;border-radius:3px;transition:all .2s linear}.ldesign-collapse-menu__list .link:hover{color:var(--text-primary);background:var(--bg-color-container-hover)}.ldesign-collapse-menu__list .link .icon{max-width:16px;max-height:16px;margin-right:8px}.ldesign-collapse-menu__list .link svg{width:16px;height:16px}.ldesign-collapse-menu__list .link.active{color:var(--text-primary);background:var(--bg-color-container-select)}.ldesign-collapse-menu__list .link.disabled{cursor:no-drop}.ldesign-collapse-menu__list .link .disable-tag,.ldesign-collapse-menu__list .link .alpha-tag,.ldesign-collapse-menu__list .link .beta-tag{font-size:12px;border-radius:var(--border-radius);padding:2px 4px;margin-left:8px}.ldesign-collapse-menu__list .link .disable-tag{color:var(--text-secondary);background:var(--bg-color-tag)}.ldesign-collapse-menu__list .link .alpha-tag{color:var(--brand-main);background:var(--brand-main-light);font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}.ldesign-collapse-menu__list .link .beta-tag{color:var(--success-main);background:var(--success-main-light);font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}.ldesign-collapse-menu__list .divider{width:100%;height:1px;margin:8px 0;background-color:var(--component-stroke)}.ldesign-collapse-menu__list .divider+.title{margin-top:0}.ldesign-collapse-menu__list .title{font-size:12px;margin:8px 8px 4px;color:var(--text-placeholder)}.ldesign-collapse-menu__list td-theme-tabs{margin-top:4px}
`;function D8({headerList:e,platform:t,framework:n}){const i=o=>location.pathname.includes(o);return O`
    ${e.map(o=>o.type==="base"?o.children.map(l=>O`
          <div class="title">${l.name}</div>
          ${l.links.map(r=>O`
              <a
                href="${r.path}"
                class="link ${i(r.path)?"active":""}"
                onclick=${(s,a)=>p9(s,a,r)}
              >
                <span class="icon" innerHTML="${r.icon}"></span>
                ${r.name}
                ${d9(r.status)}
              </a>
            `)}
        `):O`
      <a class="link ${i(o.path)?"active":""}" href="${o.path}">${o.name}</a>
      <div class="divider"></div>
      `)}
  `}const U8={tag:"ldesign-collapse-menu",headerList:{get:(e,t)=>t||[],set:(e,t)=>t},platform:"web",framework:"vue",disabledTheme:!1,render:e=>O`
      <div class="ldesign-collapse-menu">
        <ldesign-popup portalStyle="${z8}" trigger-type="click">
          <div class="collapse-icon" innerHTML="${I8}"></div>
          <div slot="content" class="ldesign-collapse-menu__list">
            ${D8(e)}
            ${e.disabledTheme?O``:O`<ldesign-theme></ldesign-theme>`}
          </div>
        </ldesign-popup>
      </div>
    `.css`${j8}`};C1(U8);function q8(e){return e=Object.create(e),"requestAnimationFrame"in e||Object.defineProperty(e,"requestAnimationFrame",{value:function(n){return setTimeout(n,0)}}),"HTMLElement"in e||Object.defineProperty(e,"HTMLElement",{value:class{constructor(){throw Error("Current context does not support defining custom elements")}}}),e}const a1=typeof window=="object"?window:q8(globalThis),ti=new WeakMap,qe=new Set;function P9(){try{qe.forEach(e=>{try{ti.get(e)(),qe.delete(e)}catch(t){throw qe.delete(e),t}})}catch(e){throw qe.size&&P9(),e}}function N9(e){ti.has(e)&&(qe.size||a1.requestAnimationFrame(P9),qe.add(e))}function W8(e,t){return ti.set(e,t),N9(e),function(){qe.delete(e),ti.delete(e)}}const Bo=new WeakMap,Ee=new WeakSet;function ki(e,t){let n=Bo.get(e);n||(n=new Map,Bo.set(e,n));let i=n.get(t);return i||(i={target:e,key:t,value:void 0,lastValue:void 0,contexts:new Set,deps:new Set,state:0,depState:0,resolved:!1},n.set(t,i)),i}function T0(e){e.contexts.forEach(t=>{Ee.has(t.target)&&(Object.assign(t,{depState:0,resolved:!1}),e.contexts.delete(t),T0(t))})}function F0(e){e.resolved=!1,Ee.has(e.target)||N9(e),T0(e),e.contexts.forEach(F0)}let z1=null;const Nt=new Set;function I9(e,t,n){const i=ki(e,t);if(z1&&!Ee.has(z1.target)&&(z1.deps.add(i),i.contexts.add(z1)),!Ee.has(e)){if(T0(i),i.resolved)return i.value;if(i.depState>i.state){let l=i.state;for(const r of i.deps){if(r.target[r.key],!r.resolved){l=!1;break}l+=r.state}if(l&&l===i.depState)return i.resolved=!0,i.value}}const o=z1;try{if(Nt.has(i))throw Error(`Circular get invocation is forbidden: '${t}'`);i.deps.forEach(s=>{s.contexts.delete(i)}),i.deps.clear(),z1=i,Nt.add(i);const l=n(e,i.value);z1=o,l!==i.value&&(i.value=l,i.state+=1);let r=i.state;i.deps.forEach(s=>{r+=s.state}),i.depState=r,i.resolved=!Ee.has(e),Nt.delete(i)}catch(l){throw z1=o,Nt.delete(i),i.resolved=!1,z1&&!Ee.has(z1)&&(z1.deps.delete(i),i.contexts.delete(z1)),l}return i.value}function K8(e,t,n,i){const o=ki(e,t),l=n(e,i,o.value);l!==o.value&&(o.value=l,o.state+=1,o.depState=0,F0(o))}const $n=new Set;function G8(e){$n.size||a1.requestAnimationFrame(()=>{$n.forEach(t=>{t.contexts.size===0&&(t.deps.forEach(i=>{i.contexts.delete(t)}),Bo.get(t.target).delete(t.key))}),$n.clear()}),$n.add(e)}function Y8(e,t){e.depState=0,F0(e),t.clearValue&&(e.value=void 0,e.lastValue=void 0),t.deleteEntry&&G8(e),t.force&&(e.state+=1)}function j9(e,t,n={}){if(Nt.size)throw Error(`Invalidating property in chain of get calls is forbidden: '${t}'`);const i=ki(e,t);Y8(i,n)}function X8(e,t,n,i){const o=ki(e,t);return W8(o,()=>{const l=I9(e,t,n);l!==o.lastValue&&(i(e,l,o.lastValue),o.lastValue=l)})}function dl(e){Ee.add(e)}function J8(e){Ee.delete(e)}const pl=new Map;function O0(e){let t=pl.get(e);return t===void 0&&(t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),pl.set(e,t)),t}function z9(e,t){const n=a1.ShadyCSS;return n&&!n.nativeShadow?e(n):t}function D9(e){return`<${String(e.tagName).toLowerCase()}>`}function ni(e,t){e.nodeType===a1.Node.ELEMENT_NODE&&(t(e),e.shadowRoot&&ni(e.shadowRoot,t));const n=a1.document.createTreeWalker(e,a1.NodeFilter.SHOW_ELEMENT,null,!1);for(;n.nextNode();){const i=n.currentNode;t(i),i.shadowRoot&&ni(i.shadowRoot,t)}}const Q8=Promise.resolve(),ec=new WeakMap,gl=ni.name==="walkInShadow",To=new WeakMap,fl=new WeakMap,U9=new WeakMap;class tc extends a1.HTMLElement{constructor(){super();const t=To.get(this.constructor);for(let n=0;n<t.length;n+=1){const i=t[n];if(hasOwnProperty.call(this,i)){const o=this[i];delete this[i],this[i]=o}}dl(this)}connectedCallback(){J8(this);const t=U9.get(this.constructor),n=[];for(let i=0;i<t.length;i+=1){const o=t[i](this);o&&n.push(o)}fl.set(this,n)}disconnectedCallback(){dl(this);const t=fl.get(this);for(let n=0;n<t.length;n+=1)t[n]()}}function ul(e,t){return{get:t?n=>{const i=e(n),o=n.shadowRoot||n.attachShadow({mode:"open",delegatesFocus:e.delegatesFocus||!1});return()=>(i(n,o),o)}:n=>{const i=e(n);return()=>(i(n,n),n)},observe(n,i){i()}}}const nc={string:String,number:Number,boolean:Boolean,undefined:e=>e};function ic(e,t){const n=typeof t.value,i=nc[n];if(!i)throw TypeError(`Invalid default value for '${e}' property - it must be a string, number, boolean or undefined: ${n}`);const o=t.value,l=O0(e),r=(s,a)=>(!a&&a!==0||typeof a=="object"&&a.toString()===void 0?s.removeAttribute(l):s.setAttribute(l,n==="boolean"?"":a),a);return{get:(s,a)=>{if(a===void 0)if(s.hasAttribute(l))a=i(n==="boolean"||s.getAttribute(l));else return o;return a},set:n!=="undefined"?(s,a)=>r(s,i(a)):(s,a)=>a,connect:n!=="undefined"?(s,a,c)=>(!s.hasAttribute(l)&&s[e]===o&&r(s,o),t.connect&&t.connect(s,a,c)):t.connect,observe:t.observe}}function Fo(e,t){if(t){if(e===t.hybrids)return t;To.get(t).forEach(o=>{delete t.prototype[o]})}else t=class extends tc{};t.hybrids=e;const n=[],i=Object.keys(e);return U9.set(t,n),To.set(t,i),i.forEach(o=>{if(o==="tag")return;let l=e[o];const r=typeof l;if(r==="function")o==="render"?l=ul(l,!0):o==="content"?l=ul(l):l={get:l};else if(r!=="object"||l===null)l={value:l};else if(l.set){const s=O0(o),a=l.get||((c,d)=>d);l.get=(c,d)=>(d===void 0&&(d=l.set(c,c.getAttribute(s)||d)),a(c,d))}if(hasOwnProperty.call(l,"value"))l=ic(o,l);else if(!l.get)throw TypeError(`Invalid descriptor for '${o}' property - it must contain 'value' or 'get' option`);Object.defineProperty(t.prototype,o,{get:function(){return I9(this,o,l.get)},set:l.set&&function(a){K8(this,o,l.set,a)},enumerable:!0,configurable:!0}),l.observe&&n.unshift(s=>X8(s,o,l.get,l.observe)),l.connect&&n.push(s=>{function a(c){j9(s,o,{force:typeof c=="object"&&c.force===!0})}return l.connect(s,o,a)})}),t}const Bt=new Map;function oc(e){Bt.size||Q8.then(()=>{ni(a1.document.body,t=>{if(Bt.has(t.constructor)){const n=Bt.get(t.constructor),i=t.constructor.hybrids;t.disconnectedCallback(),Object.keys(i).forEach(o=>{const l=typeof i[o],r=l!=="object"&&l!=="function"&&i[o]!==n[o];j9(t,o,{clearValue:r})}),t.connectedCallback()}}),Bt.clear()}),Bt.set(e,e.hybrids)}function lc(e){if(!e.tag)throw TypeError("Error while defining hybrids: 'tag' property with dashed tag name is required");const t=a1.customElements.get(e.tag);if(t){if(t.hybrids)return oc(t),Fo(e,t),Object.freeze(e);throw TypeError(`Custom element with '${e.tag}' tag name already defined outside of the hybrids context`)}return a1.customElements.define(e.tag,Fo(e)),Object.freeze(e)}const rc=Object.freeze(Object.assign(lc,{compile:e=>Fo(e)})),Gi=new WeakMap,fe={get(e,t){const n=Gi.get(e);return n||(t&&Gi.set(e,t),t)},set(e,t){return Gi.set(e,t),t}};function R0(e){let t;for(;e&&(t=fe.get(e))&&t.endNode;)e=t.endNode;return e}function ii(e){if(e.nodeType!==a1.Node.TEXT_NODE){let t=e.childNodes[0];for(;t;)e.removeChild(t),t=e.childNodes[0]}else{const t=fe.get(e);if(t.startNode){const n=R0(t.endNode);let i=t.startNode;const o=n.nextSibling;for(;i;){const l=i.nextSibling;i.parentNode.removeChild(i),i=l!==o&&l}}}}const Oo=new WeakMap;function sc(e,t){const n=fe.get(e),i=n.startNode,o=R0(n.endNode);t.parentNode.insertBefore(e,t.nextSibling);let l=e,r=i;for(;r;){const s=r.nextSibling;l.parentNode.insertBefore(r,l.nextSibling),l=r,r=s!==o.nextSibling&&s}}function ac(e,t,n,i){let o=Oo.get(t);const l=n.map((c,d)=>({id:hasOwnProperty.call(c,"id")?c.id:d,value:c,placeholder:null,available:!0}));if(Oo.set(t,l),o){const c=new Set;l.forEach(d=>c.add(d.id)),o=o.filter(d=>c.has(d.id)?!0:(ii(d.placeholder),d.placeholder.parentNode.removeChild(d.placeholder),!1))}let r=t;const s=n.length-1,a=fe.get(t);for(let c=0;c<l.length;c+=1){const d=l[c];let w;if(o){for(let u=0;u<o.length;u+=1)if(o[u].available&&o[u].id===d.id){w=o[u];break}}w?(w.available=!1,d.placeholder=w.placeholder,d.placeholder.previousSibling!==r&&sc(d.placeholder,r),w.value!==d.value&&i(e,d.placeholder,d.value,w.value)):(d.placeholder=a1.document.createTextNode(""),r.parentNode.insertBefore(d.placeholder,r.nextSibling),i(e,d.placeholder,d.value)),r=R0(fe.get(d.placeholder).endNode||d.placeholder),c===0&&(a.startNode=d.placeholder),c===s&&(a.endNode=r)}o&&o.forEach(c=>{c.available&&(ii(c.placeholder),c.placeholder.parentNode.removeChild(c.placeholder))})}function cc(e,t,n,i){const o=fe.get(t,{});i&&i.parentNode.removeChild(i),o.startNode=n,o.endNode=n,t.parentNode.insertBefore(n,t.nextSibling)}function P0(e,t,n,i){let o=typeof n;Array.isArray(n)?o="array":n instanceof a1.Node&&(o="node");let l=fe.get(t,{});switch(l.type!==o&&(ii(t),o==="array"&&Oo.delete(t),l=fe.set(t,{type:o}),t.textContent!==""&&(t.textContent="")),o){case"function":n(e,t);break;case"array":ac(e,t,n,P0);break;case"node":cc(e,t,n,i);break;default:t.textContent=o==="number"||n?n:""}}const Yi=new WeakMap;function dc(e){return(t,n,i,o)=>{if(o){const l=Yi.get(n);l&&n.removeEventListener(e,l.get(o),o.options!==void 0?o.options:!1)}if(i){if(typeof i!="function")throw Error(`Event listener must be a function: ${typeof i}`);let l=Yi.get(n);l||(l=new WeakMap,Yi.set(n,l));const r=i.bind(null,t);l.set(i,r),n.addEventListener(e,r,i.options!==void 0?i.options:!1)}}}function pc(e,t=new Set){return Array.isArray(e)?e.forEach(n=>t.add(n)):e!==null&&typeof e=="object"?Object.keys(e).forEach(n=>e[n]&&t.add(n)):t.add(e),t}const hl=new WeakMap;function gc(e,t,n){const i=hl.get(t)||new Set,o=pc(n);hl.set(t,o),o.forEach(l=>{t.classList.add(l),i.delete(l)}),i.forEach(l=>{t.classList.remove(l)})}const vl=new WeakMap;function fc(e,t,n){if(n===null||typeof n!="object")throw TypeError(`Style value must be an object in ${D9(t)}:`,n);const i=vl.get(t)||new Map,o=Object.keys(n).reduce((l,r)=>{const s=O0(r),a=n[r];return!a&&a!==0?t.style.removeProperty(s):t.style.setProperty(s,a),l.set(s,a),i.delete(s),l},new Map);i.forEach((l,r)=>{t.style[r]=""}),vl.set(t,o)}function uc(e,t,n){if(t.substr(0,2)==="on"){const i=t.substr(2);return dc(i)}switch(e){case"class":return gc;case"style":return fc;default:{let i=!1;return(o,l,r)=>{if(i=i||!n&&!(l instanceof a1.SVGElement)&&t in l,i)l[t]=r;else if(r===!1||r===void 0||r===null)l.removeAttribute(e);else{const s=r===!0?"":String(r);l.setAttribute(e,s)}}}}}const hc=Date.now(),Xe=(e=0)=>`{{h-${hc}-${e}}}`,q9=Xe("(\\d+)"),It=new RegExp(`^${q9}$`),Ro=new RegExp(q9,"g"),wl=new WeakMap;function vc(e,t){return t?z9(n=>{let i=wl.get(e);i||(i=new Map,wl.set(e,i));let o=i.get(t);if(!o){o=a1.document.createElement("template"),o.content.appendChild(e.content.cloneNode(!0)),i.set(t,o);const l=o.content.querySelectorAll("style");Array.from(l).forEach(r=>{const s=r.childNodes.length+1;for(let a=0;a<s;a+=1)r.parentNode.insertBefore(a1.document.createTextNode(Xe()),r)}),n.prepareTemplate(o,t.toLowerCase())}return o},e):e}function wc(e,t){let n=e.reduce((i,o,l)=>l===0?o:e.slice(l).join("").match(/^\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)?`${i}<!--${Xe(l-1)}-->${o}`:i+Xe(l-1)+o,"");return t&&(n+=`<style>
${t.join(`
/*------*/
`)}
</style>`),n}function Cc(e){return e.replace(/\s*=\s*['"]*$/g,"").split(/\s+/).pop()}function mc(e){const t=a1.document.createNodeIterator(e,a1.NodeFilter.SHOW_COMMENT,null,!1);let n;for(;n=t.nextNode();)It.test(n.textContent)&&(n.parentNode.insertBefore(a1.document.createTextNode(n.textContent),n),n.parentNode.removeChild(n))}function xc(e){let t;return{get currentNode(){return t},nextNode(){if(t===void 0)t=e.childNodes[0];else if(t.childNodes.length)t=t.childNodes[0];else if(t.nextSibling)t=t.nextSibling;else{let n=t.parentNode;for(t=n.nextSibling;!t&&n!==e;)n=n.parentNode,t=n.nextSibling}return!!t}}}function Lc(e){return a1.document.createTreeWalker(e,a1.NodeFilter.SHOW_ELEMENT|a1.NodeFilter.SHOW_TEXT,null,!1)}const Cl=typeof a1.ShadyDOM=="object"&&a1.ShadyDOM.inUse?xc:Lc,ml=new Map;function yc(e,t=0){e=e.replace(/(^[\n\s\t ]+)|([\n\s\t ]+$)+/g,"");let n=e.indexOf(`
`);if(n>-1){let i=0-t-2;for(n+=1;e[n]===" "&&n<e.length;n+=1)i+=1;return e.replace(/\n +/g,o=>o.substr(0,Math.max(o.length-i,1)))}return e}function xl(e,t){const n=Xe(t);return`${yc(e).split(`
`).filter(o=>o).map(o=>{const l=o.indexOf(n);return l>-1?`| ${o}
--${"-".repeat(l)}${"^".repeat(6)}`:`| ${o}`}).join(`
`).replace(Ro,"${...}")}`}function bc(e,t,n){const i=a1.document.createElement("template"),o=[],l=wc(e,n);if(i.innerHTML=t?`<svg>${l}</svg>`:l,t){const c=i.content.firstChild;i.content.removeChild(c),Array.from(c.childNodes).forEach(d=>i.content.appendChild(d))}mc(i.content);const r=Cl(i.content),s=[];let a=0;for(;r.nextNode();){const c=r.currentNode;if(c.nodeType===a1.Node.TEXT_NODE){const d=c.textContent;if(!d.match(It)){const u=d.match(Ro);if(u){let m=c;u.reduce((g,v)=>{const[L,y]=g.pop().split(v);return L&&g.push(L),g.push(v),y&&g.push(y),g},[d]).forEach((g,v)=>{v===0?m.textContent=g:m=m.parentNode.insertBefore(a1.document.createTextNode(g),m.nextSibling)})}}const w=c.textContent.match(It);w&&(c.textContent="",o[w[1]]=[a,P0])}else if(c.nodeType===a1.Node.ELEMENT_NODE){if(gl){const d=c.tagName.toLowerCase();d.match(/.+-.+/)&&!a1.customElements.get(d)&&!s.includes(d)&&s.push(d)}Array.from(c.attributes).forEach(d=>{const w=d.value.trim(),u=d.name,m=w.match(It);if(m){const g=Cc(e[m[1]]);o[m[1]]=[a,uc(u,g,t)],c.removeAttribute(d.name)}else{const g=w.match(Ro);if(g){const v=`attr__${u}`;g.forEach((L,y)=>{const[,p]=L.match(It);let f=!1;o[p]=[a,(h,C,x)=>{const k=fe.get(C,{});k[v]=(k[v]||w).replace(L,x??""),(g.length===1||y+1===g.length)&&(f=f||!t&&!(C instanceof a1.SVGElement)&&u in C,f?C[u]=k[v]:C.setAttribute(u,k[v]),k[v]=void 0)}]}),d.value=""}}})}a+=1}return gl&&s.length&&console.warn(`Not defined ${s.map(c=>`<${c}>`).join(", ")} element${s.length>1?"s":""} found in the template:
${xl(l,-1)}`),function(d,w,u,m){const g=fe.get(w,{type:"function"});if(i!==g.template){(g.template||w.nodeType!==a1.Node.TEXT_NODE)&&ii(w),g.prevArgs=null;const y=a1.document.importNode(vc(i,d.tagName).content,!0),p=Cl(y),f=o.slice(0);let h=0,C=f.shift();const x=[];for(g.template=i,g.markers=x;p.nextNode();){const k=p.currentNode;for(;C&&C[0]===h;)x.push([k,C[1]]),C=f.shift();h+=1}if(w.nodeType===a1.Node.TEXT_NODE){g.startNode=y.childNodes[0],g.endNode=y.childNodes[y.childNodes.length-1];let k=w,V=y.childNodes[0];for(;V;)w.parentNode.insertBefore(V,k.nextSibling),k=V,V=y.childNodes[0]}else w.appendChild(y)}const v=w.adoptedStyleSheets;if(m){let y=!1;if(m=m.map(p=>{if(p instanceof a1.CSSStyleSheet)return p;let f=ml.get(p);return f||(f=new a1.CSSStyleSheet,f.replaceSync(p),ml.set(p,f)),f}),m.length===v.length){y=!0;for(let p=0;p<m.length;p+=1)if(m[p]!==v[p]){y=!1;break}}y||(w.adoptedStyleSheets=m)}else v&&v.length&&(w.adoptedStyleSheets=[]);const L=g.prevArgs;g.prevArgs=u;for(let y=0;y<g.markers.length;y+=1){if(L&&L[y]===u[y])continue;const[p,f]=g.markers[y];try{f(d,p,u[y],L&&L[y])}catch(h){throw console.error(`Following error was thrown when updating a template expression in ${D9(d)}
${xl(l,y)}`),h}}w.nodeType!==a1.Node.TEXT_NODE&&z9(y=>{d.shadowRoot&&(L?y.styleSubtree(d):y.styleElement(d))})}}function Ll({target:e,detail:t},n){let i;switch(e.type){case"radio":case"checkbox":i=e.checked&&e.value;break;case"file":i=e.files;break;default:i=t&&hasOwnProperty.call(t,"value")?t.value:e.value}n(i)}function _c(e,t){return e.split(".").reverse().reduce((n,i)=>n?{[i]:n}:{[i]:t},null)}const yl=new Map,Bn=new WeakMap;function Hc(e,t){if(!e)throw Error(`The first argument must be a property name or an object instance: ${e}`);if(typeof e=="object"){if(t===void 0)throw Error("For model instance property the second argument must be defined");const i=ec.get(e);if(!i)throw Error("Provided object must be a model instance of the store");return t===null?()=>{i.set(e,null)}:(o,l)=>{Ll(l,r=>{const s=Bn.get(e);s||a1.requestAnimationFrame(()=>{const a=Bn.get(e);Bn.delete(e),i.set(e,a).catch(()=>{})}),Bn.set(e,{...s,..._c(t,r)})})}}if(arguments.length===2)return i=>{i[e]=t};let n=yl.get(e);return n||(n=(i,o)=>{Ll(o,l=>{i[e]=l})},yl.set(e,n)),n}const Xi=new WeakMap;function Mc(e,t,n=200){return(i,o)=>{let l;t&&(l=setTimeout(()=>{l=void 0,a1.requestAnimationFrame(()=>{t(i,o)})},n)),Xi.set(o,e),e.then(r=>{l&&clearTimeout(l),Xi.get(o)===e&&(P0(i,o,r),Xi.set(o,null))})}}const W9=Object.freeze(Object.defineProperty({__proto__:null,resolve:Mc,set:Hc},Symbol.toStringTag,{value:"Module"})),bl=Xe(),kc=Xe("svg"),Vc=/@import/,_l=new Map,jt=new WeakMap,Zc={key(e){return this.id=e,this},style(...e){return jt.set(this,(jt.get(this)||[]).concat(e.filter(t=>t))),this},css(e,...t){return jt.set(this,(jt.get(this)||[]).concat(e.reduce((n,i,o)=>`${n}${i}${t[o]||""}`,""))),this}};function K9(e,t,n){const i=(o,l=o)=>{const r=jt.get(i);let s,a=e.join(bl);if(r){const d=r.join(bl);s=!!l.adoptedStyleSheets&&!Vc.test(d),s||(a+=d)}n&&(a+=kc);let c=_l.get(a);c||(c=bc(e,n,!s&&r),_l.set(a,c)),c(o,l,t,s&&r)};return Object.assign(i,Zc)}function Qe(e,...t){return K9(e,t)}function Ec(e,...t){return K9(e,t,!0)}Object.assign(Qe,W9);Object.assign(Ec,W9);function Ac(e){const t=document.createElement("pre");return t.style.width="1px",t.style.height="1px",t.style.position="fixed",t.style.top="5px",t.textContent=e,t}function G9(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e.textContent);const t=getSelection();if(t==null)return Promise.reject(new Error);t.removeAllRanges();const n=document.createRange();return n.selectNodeContents(e),t.addRange(n),document.execCommand("copy"),t.removeAllRanges(),Promise.resolve()}function Po(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e);const t=document.body;if(!t)return Promise.reject(new Error);const n=Ac(e);return t.appendChild(n),G9(n),t.removeChild(n),Promise.resolve()}function Y9(e){const t=e.getAttribute("for"),n=e.getAttribute("value");function i(){e.dispatchEvent(new CustomEvent("clipboard-copy",{bubbles:!0}))}if(n)Po(n).then(i);else if(t){const o="getRootNode"in Element.prototype?e.getRootNode():e.ownerDocument;if(!(o instanceof Document||"ShadowRoot"in window&&o instanceof ShadowRoot))return;const l=o.getElementById(t);l&&Sc(l).then(i)}}function Sc(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?Po(e.value):e instanceof HTMLAnchorElement&&e.hasAttribute("href")?Po(e.href):G9(e)}function $c(e){const t=e.currentTarget;t instanceof HTMLElement&&Y9(t)}function X9(e){if(e.key===" "||e.key==="Enter"){const t=e.currentTarget;t instanceof HTMLElement&&(e.preventDefault(),Y9(t))}}function Bc(e){e.currentTarget.addEventListener("keydown",X9)}function Tc(e){e.currentTarget.removeEventListener("keydown",X9)}class Hl extends HTMLElement{constructor(){super(),this.addEventListener("click",$c),this.addEventListener("focus",Bc),this.addEventListener("blur",Tc)}connectedCallback(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.hasAttribute("role")||this.setAttribute("role","button")}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",t)}}window.customElements.get("clipboard-copy")||(window.ClipboardCopyElement=Hl,window.customElements.define("clipboard-copy",Hl));function Je(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Ml,kl,Vl,Zl,El,Al,Sl;function Fc(e,t){var n=new Blob([t],{type:"image/svg+xml"}),i=URL.createObjectURL(n),o=document.createElement("a");o.download="".concat(e,".svg"),o.target="_blank",o.href=i,o.click()}function No(){window.showTdMessage&&window.showTdMessage({content:"复制成功",theme:"success",duration:1e3})}var Oc=`
  .l-icons-view__wrapper { 
    width: calc(1 / 6 * 100%);
    height: 100px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer; 
    border-radius: 6px;
    position: relative;
  }
  .l-icons-view__wrapper:hover { background:var(--bg-color-demo-hover)}
  .l-icons-view__wrapper:hover > .l-icons-view__name {
    opacity: 0;
    visibility: hidden;
  }
  .l-icons-view__wrapper:hover > .l-icons-view__actions {
    opacity: 1;
    visibility: visible;
  }
  .l-icons-view__actions {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    opacity: 0;
    visibility: hidden;
    transition: all .1s linear;
  }
  .l-icons-view__actions-divider {
    border-left: 1px solid var(--component-border);
    border-top: 0;
    display: inline-block;
    height: 0.9em;
    margin: 0 8px;
    vertical-align: middle;
  }

  .l-icons-view__actions span {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    transition: all .2s linear;
    color: var(--text-secondary);
  }

  .l-icons-view__actions span:hover {
    color: var(--text-primary);
  }
`,Rc=Qe(Ml||(Ml=Je(['<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="l-icon l-icon-download"><path fill="currentColor" d="M12.26 5.81L8.5 9.58V.5h-1v9.08L3.74 5.8l-.71.71 4.62 4.62c.2.2.5.2.7 0l4.62-4.62-.7-.7z" fill-opacity="0.9"></path><path fill="currentColor" d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2h-1v2H3v-2H2z" fill-opacity="0.9"></path></svg>']))),Pc=Qe(kl||(kl=Je([`<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="l-icon l-icon-file-icon"><path d="M3.5 2V14H11.2336V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 5.01275H11.8215L9.50008 2.64645V5.01275Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.48145 9H6.48145V9.8H5.88145V12.2H6.48145V13H4.48145V12.2H5.08145V9.8H4.48145V9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.99999 9H7.79246C7.35479 9 6.99999 9.35817 6.99999 9.8V12.2C6.99999 12.6418 7.35479 13 7.79246 13H8.99999V12.2H7.79246V9.8H8.99999V9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.7972 9.8L13.7972 13H13L13 9H14.7434C15.1837 9 15.5406 9.35817 15.5406 9.8V13H14.7434V9.8H13.7972Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 9.80928L9.5 12.201C9.5 12.6413 9.85693 12.9982 10.2972 12.9982H11.4931C11.9334 12.9982 12.2903 12.6413 12.2903 12.201V9.80928C12.2903 9.36899 11.9334 9.01205 11.4931 9.01205H10.2972C9.85693 9.01205 9.5 9.36899 9.5 9.80928ZM10.2972 12.201L10.2972 9.80928H11.4931V12.201H10.2972Z" fill="currentColor" fill-opacity="0.9"/>
</svg>`]))),J9=Qe(Vl||(Vl=Je(['<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="l-icon l-icon-file-copy"><path fill="currentColor" d="M4 1.92C4 1.34 4.52 1 5 1h4.37a1 1 0 01.71.3L13.71 5a1 1 0 01.29.7v6.38c0 .58-.52.92-1 .92H5c-.48 0-1-.34-1-.92V1.92zM5 2v10h8V6.01H9V2H5zm5 .65V5h2.32L10 2.65z" fill-opacity="0.9"></path><path fill="currentColor" d="M2 5v9.01a1 1 0 001 1h8v-1H3V5H2z" fill-opacity="0.9"></path></svg>']))),_=function(t,n){return Qe(Zl||(Zl=Je([`
<clipboard-copy value='`,`'>
  <span onclick=`,">",`</span>
</clipboard-copy>
<div class="l-icons-view__actions-divider"></div>
<clipboard-copy value='<`,`Icon />'>
  <span onclick=`,">",`</span>
</clipboard-copy>
`])),t,No,J9,n,No,Pc)},H=function(t,n){return Qe(El||(El=Je(["<clipboard-copy value='",`'>
  <span onclick=`,">",`</span>
</clipboard-copy>
<div class="l-icons-view__actions-divider"></div>
<span onclick=`,">","</span>"])),n,No,J9,function(){return Fc(t,n)},Rc)};rc({tag:"ld-icons-view",showType:"develop",render:function(t){var n=t.showType;return Qe(Sl||(Sl=Je([`<div style="display:flex;flex-wrap:wrap"><div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 8.5H4.5V7.5H7.5V4.5H8.5V7.5H11.5V8.5H8.5V11.5H7.5V8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">add-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 11V8.5H5V7.5H7.5V5H8.5V7.5H11V8.5H8.5V11H7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">add-rectangle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.34998 8.64998V12.5H8.64998V8.64998H12.5V7.34998H8.64998V3.5H7.34998V7.34998H3.5V8.64998H7.34998Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">add</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 1.75C9.59315 1.75 8.25 3.09315 8.25 4.75C8.25 6.40685 9.59315 7.75 11.25 7.75C12.9069 7.75 14.25 6.40685 14.25 4.75C14.25 3.09315 12.9069 1.75 11.25 1.75ZM9.25 4.75C9.25 3.64543 10.1454 2.75 11.25 2.75C12.3546 2.75 13.25 3.64543 13.25 4.75C13.25 5.85457 12.3546 6.75 11.25 6.75C10.1454 6.75 9.25 5.85457 9.25 4.75Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H6.5C7.05228 2 7.5 2.44772 7.5 3V6.5C7.5 7.05228 7.05228 7.5 6.5 7.5H3C2.44772 7.5 2 7.05228 2 6.5V3ZM3 3V6.5H6.5V3H3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 9.5C2 8.94772 2.44772 8.5 3 8.5H6.5C7.05228 8.5 7.5 8.94772 7.5 9.5V13C7.5 13.5523 7.05228 14 6.5 14H3C2.44772 14 2 13.5523 2 13V9.5ZM3 9.5V13H6.5V9.5H3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5H13C13.5523 8.5 14 8.94772 14 9.5V13C14 13.5523 13.5523 14 13 14H9.5C8.94772 14 8.5 13.5523 8.5 13V9.5ZM9.5 13H13V9.5H9.5V13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">app</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7458 7.54711L8.5 9.79289L8.5 4.5L7.5 4.5L7.5 9.79289L5.25422 7.54711L4.54711 8.25422L8 11.7071L11.4529 8.25422L10.7458 7.54711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">arrow-down-rectangle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.50009 2.00014L8.49992 12.0858L12.1462 8.4395L12.8533 9.14661L8.21203 13.7879C8.09488 13.9051 7.90493 13.9051 7.78777 13.7879L3.14648 9.14661L3.85359 8.4395L7.49992 12.0858L7.50009 2.00012L8.50009 2.00014Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">arrow-down</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.91423 8.49963L7.56053 12.1459L6.85342 12.853L2.21213 8.21174C2.09497 8.09458 2.09497 7.90463 2.21213 7.78748L6.85342 3.14619L7.56053 3.8533L3.91419 7.49963L13.9999 7.4998L13.9999 8.4998L3.91423 8.49963Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">arrow-left</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0857 7.50013L8.43938 3.85384L9.14649 3.14673L13.7878 7.78802C13.9049 7.90517 13.9049 8.09512 13.7878 8.21228L9.14649 12.8536L8.43938 12.1465L12.0857 8.50013L2 8.49996L2.00002 7.49996L12.0857 7.50013Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">arrow-right</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49988 3.91436L3.85359 7.56065L3.14648 6.85354L7.78777 2.21226C7.90493 2.0951 8.09488 2.0951 8.21204 2.21226L12.8533 6.85354L12.1462 7.56065L8.49988 3.91432L8.49971 14L7.49971 14L7.49988 3.91436Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">arrow-up</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1269 3.85578C11.3379 3.07643 10.0678 3.08032 9.28361 3.86448L2.07405 11.074L1.36694 10.3669L8.57651 3.15737C9.74951 1.98437 11.6495 1.97856 12.8297 3.14436C14.0201 4.32029 14.0259 6.24042 12.8427 7.42361L7.00276 13.2636C6.26721 13.9991 5.07466 13.9991 4.33912 13.2636C3.60357 12.5281 3.60357 11.3355 4.33912 10.6L10.0131 4.92602L10.7202 5.63313L5.04622 11.3071C4.7012 11.6521 4.7012 12.2115 5.04622 12.5565C5.39124 12.9015 5.95063 12.9015 6.29565 12.5565L12.1356 6.7165C12.9266 5.92553 12.9227 4.6419 12.1269 3.85578Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">attach</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49755 8.19542L5.9441 9.72019L5.2282 9.02199L8.00185 6.29956L10.8007 9.02923L10.087 9.72972L8.50841 8.19011L8.50847 11.9988L7.49761 11.9989L7.49755 8.19542Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.49903 5.4989H11.499V4.4989H4.49903V5.4989Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.99903 1.9989C2.44674 1.9989 1.99903 2.44662 1.99903 2.9989L1.99902 12.9989C1.99902 13.5512 2.44674 13.9989 2.99902 13.9989L12.999 13.9989C13.5513 13.9989 13.999 13.5512 13.999 12.9989L13.999 2.9989C13.999 2.44662 13.5513 1.9989 12.999 1.9989L2.99903 1.9989ZM12.999 2.9989L12.999 12.9989L2.99902 12.9989L2.99903 2.9989L12.999 2.9989Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">backtop-rectangle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99902 2.9989H13.999V1.9989H1.99902V2.9989Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.37689 10.2293L7.48663 6.19544L7.48666 14.8438L8.49751 14.8437L8.49748 6.1901L12.6779 10.2672L13.3915 9.56668L8.34115 4.64112C8.14651 4.45129 7.83584 4.45178 7.64181 4.64224L2.661 9.53108L3.37689 10.2293Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">backtop</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.242 8.39077C0.991274 8.1906 0.991274 7.80944 1.242 7.60927L6.87938 3.1086C7.20684 2.84717 7.69133 3.08033 7.69133 3.49935L7.69133 7.76543C7.72075 7.71 7.76134 7.65903 7.81309 7.6159L13.1795 3.14379C13.5052 2.8724 13.9996 3.10398 13.9996 3.5279L13.9996 12.4721C13.9996 12.896 13.5052 13.1276 13.1795 12.8562L7.81309 8.38412C7.76134 8.34099 7.72075 8.29002 7.69133 8.23459L7.69133 12.5007C7.69133 12.9197 7.20684 13.1529 6.87937 12.8914L1.242 8.39077ZM6.69133 11.4617L6.69133 4.53833L2.35535 8.00002L6.69133 11.4617ZM12.9996 11.4046L12.9996 4.59544L8.9142 8.00001L12.9996 11.4046Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">backward</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2V14H2V2H4ZM14 2V14H12V2H14ZM11 2V14H10V2H11ZM9 2V14H7V2H9ZM6 2V14H5V2H6Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">barcode</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99902 9.27825L3.99902 12.0782V2.9989H11.999V12.0782L7.99902 9.27825ZM7.99902 10.4989L12.2123 13.4482C12.5437 13.6802 12.999 13.4431 12.999 13.0386V2.9989C12.999 2.44662 12.5513 1.9989 11.999 1.9989H3.99902C3.44674 1.9989 2.99902 2.44662 2.99902 2.9989V13.0386C2.99902 13.4431 3.45437 13.6802 3.78576 13.4482L7.99902 10.4989Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">books</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7732 11.9803L12.1465 13.3535L12.8535 12.6464L3.14969 2.94257L2.44266 3.64972L3.65332 4.86032C2.60522 5.58542 1.72754 6.57559 1.11694 7.76987L1 7.99985L1.11694 8.22983C2.46143 10.8698 5.10156 12.4998 8.00488 12.4998C8.96875 12.4998 9.9043 12.319 10.7732 11.9803ZM9.99121 11.1982C9.35718 11.3957 8.68921 11.4998 8.00488 11.4998C5.5498 11.4998 3.3186 10.1698 2.1106 7.99985C2.66992 6.99502 3.44873 6.17038 4.36743 5.57443L5.45093 6.65799C5.2395 7.05868 5.11987 7.51529 5.11987 7.99985C5.11987 9.59036 6.40918 10.8797 7.99976 10.8797C8.48438 10.8797 8.94092 10.76 9.34155 10.5487L9.99121 11.1982ZM6.21143 7.41855L8.58105 9.78811C8.39795 9.84756 8.20264 9.87973 7.99976 9.87973C6.96143 9.87973 6.11987 9.03805 6.11987 7.99985C6.11987 7.79696 6.15186 7.60159 6.21143 7.41855Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.8831 8.22983L15 7.99985L14.8831 7.76987C13.5386 5.13986 10.8984 3.49985 8.00488 3.49985C7.14868 3.49985 6.31519 3.64248 5.53125 3.91116L6.3313 4.71133C6.87012 4.57242 7.4314 4.49985 8.00488 4.49985C10.4502 4.49985 12.6814 5.82986 13.8992 7.99985C13.3894 8.91531 12.696 9.6813 11.8809 10.261L12.5894 10.9693C13.53 10.2635 14.3201 9.33523 14.8831 8.22983Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.8796 7.99985C10.8796 8.37375 10.8083 8.73099 10.6787 9.05874L9.86401 8.24399C9.87427 8.16409 9.87964 8.08255 9.87964 7.99985C9.87964 6.96164 9.03784 6.12002 7.99976 6.12002C7.91699 6.12002 7.83545 6.12533 7.75562 6.13571L6.94092 5.32089C7.26855 5.19125 7.62598 5.12002 7.99976 5.12002C9.59033 5.12002 10.8796 6.40939 10.8796 7.99985Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">browse-off</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8796 7.99988C10.8796 9.59039 9.59033 10.8798 7.99976 10.8798C6.40918 10.8798 5.11987 9.59039 5.11987 7.99988C5.11987 6.40942 6.40918 5.12006 7.99976 5.12006C9.59033 5.12006 10.8796 6.40942 10.8796 7.99988ZM9.87964 7.99988C9.87964 6.96167 9.03784 6.12006 7.99976 6.12006C6.96143 6.12006 6.11987 6.96167 6.11987 7.99988C6.11987 9.03809 6.96143 9.87976 7.99976 9.87976C9.03784 9.87976 9.87964 9.03809 9.87964 7.99988Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.11694 8.22986C2.46143 10.8699 5.10156 12.4999 8.00488 12.4999C10.8984 12.4999 13.5386 10.8699 14.8831 8.22986L15 7.99988L14.8831 7.7699C13.5386 5.13989 10.8984 3.49988 8.00488 3.49988C5.10156 3.49988 2.46143 5.13989 1.11694 7.7699L1 7.99988L1.11694 8.22986ZM8.00488 11.4999C5.5498 11.4999 3.3186 10.1699 2.1106 7.99988C3.3186 5.8299 5.5498 4.49988 8.00488 4.49988C10.4502 4.49988 12.6814 5.8299 13.8992 7.99988C12.6909 10.1699 10.4502 11.4999 8.00488 11.4999Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">browse</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9999 3.00002L4.99988 3L4.99988 4L13.9999 4.00002V3.00002Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.49988 3L2.00049 3L2.00049 4L3.49988 4V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.99988 7.50006L13.9999 7.50009V8.50009L4.99988 8.50006L4.99988 7.50006Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.00049 7.50006H3.49988V8.50006H2.00049L2.00049 7.50006Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.99988 12L13.9999 12V13L4.99988 13L4.99988 12Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.00049 12H3.49988V13H2.00049L2.00049 12Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">bulletpoint</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3H6L6 1.5H5L5 3H3C2.44772 3 2 3.44771 2 4V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V4C14 3.44772 13.5523 3 13 3H11V1.5H10L10 3ZM5 5L6 5L6 4H10L10 5L11 5V4H13V6H3V4H5L5 5ZM3 7H13V13H3L3 7Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">calendar</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9996 11.0571C14.0094 11.656 13.8406 12.3013 13.4825 12.8172L13.3562 12.9841C13.1203 13.3295 12.7802 13.5823 12.3763 13.7333C12.0957 13.8382 11.92 13.8686 11.467 13.9206C9.51866 14.1028 7.38954 13.1934 5.28719 11.3231C3.8828 10.0711 2.83116 8.50511 2.32479 6.90415C2.11109 6.22714 1.99984 5.57675 1.99984 4.9881C1.99984 4.28226 2.15924 3.67085 2.47982 3.21159C2.78397 2.79386 3.36194 2.44687 4.23086 2.1189C4.65696 1.95807 5.13791 2.10548 5.40072 2.47746L7.06606 4.83489C7.34085 5.22387 7.30316 5.75267 6.97604 6.09879L6.7593 6.32024L6.49703 6.57443C6.43153 6.62982 6.33187 6.76339 6.33187 6.76339C6.30907 7.07011 6.63615 7.70117 7.58846 8.67568L7.87185 8.9415C8.75003 9.75141 8.98642 9.81638 9.25619 9.62851L9.34609 9.55508C9.44154 9.48247 9.69138 9.30859 10.2242 8.94226C10.5298 8.73213 10.9267 8.70843 11.2551 8.88068L11.4976 9.00892C13.1606 9.8967 13.9203 10.431 13.9937 10.9791L13.9996 11.0571ZM12.9997 11.0731C13.001 11.1553 12.8854 11.0287 12.6447 10.8549C12.2936 10.6014 11.7532 10.279 11.0283 9.89197L10.7907 9.7663L10.0027 10.3101C9.98437 10.322 9.97594 10.3268 9.97927 10.323C9.11992 10.9979 8.37978 10.8086 6.88619 9.38735C5.74004 8.21495 5.28626 7.33947 5.33425 6.69456C5.35666 6.34167 5.59986 6.0185 5.8359 5.82509C5.9363 5.72853 6.03513 5.63144 6.12417 5.54118L6.24929 5.41186L4.58401 3.05447C3.88251 3.31925 3.4487 3.57965 3.29391 3.79216C3.10764 4.05918 2.99984 4.47289 2.99984 4.9881C2.99984 5.46852 3.09399 6.01883 3.27834 6.60286C3.72853 8.02618 4.67843 9.44076 5.95223 10.5764C7.86462 12.2776 9.73829 13.0779 11.3635 12.926L11.621 12.8939C11.799 12.8686 11.8995 12.8439 12.0261 12.7966C12.2452 12.7147 12.4181 12.5862 12.5589 12.382C12.8261 12.0557 12.9688 11.6382 12.9954 11.2418L12.9997 11.0731Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">call</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6H5L8 10.5L11 6Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">caret-down-small</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99958 10.3334L3.99958 5.00002L11.9996 5.00002L7.99958 10.3334ZM7.59958 11.4667C7.79958 11.7334 8.19958 11.7334 8.39958 11.4667L13.3996 4.80002C13.6468 4.4704 13.4116 4.00002 12.9996 4.00002L2.99958 4.00002C2.58756 4.00002 2.35237 4.4704 2.59958 4.80002L7.59958 11.4667Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">caret-down</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 5L10.5 11L6 8L10.5 5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">caret-left-small</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66683 7.99976L10.0002 3.99976L10.0002 11.9998L4.66683 7.99976ZM3.5335 7.59976C3.26683 7.79976 3.26683 8.19976 3.5335 8.39976L10.2002 13.3998C10.5298 13.647 11.0002 13.4118 11.0002 12.9998L11.0002 2.99976C11.0002 2.58774 10.5298 2.35255 10.2002 2.59976L3.5335 7.59976Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">caret-left</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 5L6 11L10.5 8L6 5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">caret-right-small</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3337 7.99999L6.00032 12L6.00033 3.99999L11.3337 7.99999ZM12.467 8.39999C12.7337 8.19999 12.7337 7.79999 12.467 7.59999L5.80033 2.59999C5.47071 2.35278 5.00033 2.58797 5.00033 2.99999L5.00032 13C5.00032 13.412 5.4707 13.6472 5.80032 13.4L12.467 8.39999Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">caret-right</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 10.5H5L8 6L11 10.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">caret-up-small</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00042 5.66665L12.0004 11L4.00042 11L8.00042 5.66665ZM8.40042 4.53331C8.20042 4.26665 7.80042 4.26665 7.60042 4.53331L2.60042 11.2C2.35321 11.5296 2.5884 12 3.00042 12L13.0004 12C13.4124 12 13.6476 11.5296 13.4004 11.2L8.40042 4.53331Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">caret-up</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3H2.57644L3.96502 11.3315C4.02931 11.7173 4.36307 12 4.75414 12H14V11H4.92356L4.59023 9H13.2239C13.591 9 13.911 8.75016 14 8.39403L14.85 4.99403C14.9762 4.48911 14.5943 4 14.0739 4H3.7569L3.53498 2.66848C3.47069 2.28273 3.13693 2 2.74586 2H1V3ZM13.0677 8H4.42356L3.92356 5H13.8177L13.0677 8Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.75 14.5C5.16421 14.5 5.5 14.1642 5.5 13.75C5.5 13.3358 5.16421 13 4.75 13C4.33579 13 4 13.3358 4 13.75C4 14.1642 4.33579 14.5 4.75 14.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.813 14.5C13.2272 14.5 13.563 14.1642 13.563 13.75C13.563 13.3358 13.2272 13 12.813 13C12.3987 13 12.063 13.3358 12.063 13.75C12.063 14.1642 12.3987 14.5 12.813 14.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">cart</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2L7.5 14H8.5L8.5 2H7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.5 6V14H3.5L3.5 6H2.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.5 14L12.5 10H13.5L13.5 14H12.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chart-bar</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5.5C9 7.15686 7.65674 8.5 6 8.5C4.34326 8.5 3 7.15686 3 5.5C3 3.84314 4.34326 2.5 6 2.5C7.65674 2.5 9 3.84314 9 5.5ZM8 5.5C8 4.39543 7.10449 3.5 6 3.5C4.89551 3.5 4 4.39543 4 5.5C4 6.60457 4.89551 7.5 6 7.5C7.10449 7.5 8 6.60457 8 5.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14 10C14 11.3807 12.8806 12.5 11.5 12.5C10.1194 12.5 9 11.3807 9 10C9 8.61929 10.1194 7.5 11.5 7.5C12.8806 7.5 14 8.61929 14 10ZM13 10C13 9.17157 12.3284 8.5 11.5 8.5C10.6716 8.5 10 9.17157 10 10C10 10.8284 10.6716 11.5 11.5 11.5C12.3284 11.5 13 10.8284 13 10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5 12C5 12.8284 4.32837 13.5 3.5 13.5C2.67163 13.5 2 12.8284 2 12C2 11.1716 2.67163 10.5 3.5 10.5C4.32837 10.5 5 11.1716 5 12Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13 4.5C13.5522 4.5 14 4.05229 14 3.5C14 2.94771 13.5522 2.5 13 2.5C12.4478 2.5 12 2.94771 12 3.5C12 4.05229 12.4478 4.5 13 4.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chart-bubble</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.9795 8.5H7.5V2.02054C4.42023 2.27461 2 4.85467 2 8C2 11.3137 4.68629 14 8 14C11.1453 14 13.7254 11.5798 13.9795 8.5ZM13.9795 7.5C13.739 4.5851 11.4149 2.26101 8.5 2.02054V7.5H13.9795Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chart-pie</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.49999 12L4.5 7.49994L5.5 7.49994L5.49999 12H4.49999Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7.5 4.5L7.5 12H8.5L8.5 4.5H7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.5 12L10.5 9L11.5 9L11.5 12H10.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14C2.44771 14 2 13.5523 2 13V3ZM3 3L3 13L13 13L13 3L3 3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chart</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.63795 10.5H13V4H3V11.865L4.63795 10.5ZM2.49205 13.59C2.29666 13.7528 2 13.6138 2 13.3595V4C2 3.44771 2.44772 3 3 3H13C13.5523 3 14 3.44772 14 4V10.5C14 11.0523 13.5523 11.5 13 11.5H5L2.49205 13.59Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chat</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM4.5 8.2065L5.2065 7.5L7 9.293L10.7925 5.5L11.5 6.2075L7 10.707L4.5 8.2065Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">check-circle-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8.2065L7 10.707L11.5 6.2075L10.7925 5.5L7 9.293L5.2065 7.5L4.5 8.2065Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM4.66658 12.9888C5.65328 13.6481 6.81332 14 8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.81331 13.6481 5.65327 12.9888 4.66658C12.3295 3.67988 11.3925 2.91085 10.2961 2.45672C9.19975 2.0026 7.99335 1.88378 6.82946 2.11529C5.66558 2.3468 4.59648 2.91824 3.75736 3.75736C2.91825 4.59647 2.3468 5.66557 2.11529 6.82946C1.88378 7.99334 2.0026 9.19974 2.45673 10.2961C2.91085 11.3925 3.67989 12.3295 4.66658 12.9888Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">check-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM6.99997 9.35708L10.7748 5.58229L11.4819 6.28941L6.99999 10.7712L4.51343 8.28491L5.2205 7.57777L6.99997 9.35708Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">check-rectangle-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7748 5.58229L6.99995 9.35708L5.22048 7.57777L4.51341 8.28491L6.99997 10.7712L11.4819 6.28941L10.7748 5.58229Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">check-rectangle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.43348 9.92151L12.6561 3.69885L13.5754 4.61809L6.43348 11.76L1.97412 7.30063L2.89336 6.38139L6.43348 9.92151Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">check</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7929 6.20707L7.99996 9L5.20704 6.20707L4.49993 6.91418L7.99996 10.4142L11.5 6.91418L10.7929 6.20707Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1 8C1 4.13401 4.13401 0.999999 8 0.999999C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-down-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7929 6.20711L7.99999 9L5.20711 6.20711L4.5 6.91421L7.99999 10.4142L11.5 6.91421L10.7929 6.20711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14 13C14 13.5523 13.5523 14 13 14L3 14C2.44771 14 2 13.5523 2 13L2 3C2 2.44771 2.44772 2 3 2L13 2C13.5523 2 14 2.44772 14 3L14 13ZM13 13L13 3L3 3L3 13L13 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-down-rectangle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.54028 6.45964L4.45952 5.54041L7.9999 9.08079L11.5403 5.54041L12.4595 6.45964L7.9999 10.9193L3.54028 6.45964Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-down</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79293 10.7929L7 7.99996L9.79293 5.20703L9.08582 4.49993L5.58579 7.99996L9.08582 11.5L9.79293 10.7929Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-left-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0404 4.45952L12.1212 3.54028L7.66155 7.9999L12.1212 12.4595L13.0404 11.5403L9.50003 7.9999L13.0404 4.45952Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.04048 4.45952L7.12124 3.54028L2.66162 7.9999L7.12124 12.4595L8.04048 11.5403L4.5001 7.9999L8.04048 4.45952Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-left-double</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79289 10.7929L7 7.99999L9.79289 5.20711L9.08579 4.5L5.58579 7.99999L9.08579 11.5L9.79289 10.7929Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13L2 3C2 2.44771 2.44772 2 3 2L13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3ZM3 13H13V3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-left-rectangle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5397 3.53998L10.4589 4.45922L6.91856 7.9996L10.4589 11.54L9.5397 12.4592L5.08008 7.9996L9.5397 3.53998Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-left</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.20707 5.20711L9 8.00004L6.20707 10.793L6.91418 11.5001L10.4142 8.00004L6.91418 4.5L6.20707 5.20711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-right-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.95972 11.5405L3.87896 12.4597L8.33858 8.0001L3.87896 3.54048L2.95972 4.45972L6.5001 8.0001L2.95972 11.5405ZM7.95965 11.5405L8.87889 12.4597L13.3385 8.0001L8.87889 3.54048L7.95965 4.45972L11.5 8.0001L7.95965 11.5405Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-right-double</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.20711 5.20711L9 8.00001L6.20711 10.7929L6.91421 11.5L10.4142 8.00001L6.91421 4.5L6.20711 5.20711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44771 14 2 13.5523 2 13L2 3C2 2.44772 2.44772 2 3 2L13 2ZM13 3L3 3L3 13H13V3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-right-rectangle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.4603 12.4592L5.54106 11.54L9.08144 7.99961L5.54106 4.45923L6.4603 3.53999L10.9199 7.99961L6.4603 12.4592Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-right</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20711 9.79293L8.00004 7L10.793 9.79293L11.5001 9.08582L8.00004 5.58579L4.5 9.08582L5.20711 9.79293Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-up-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20711 9.79289L8.00001 7L10.7929 9.79289L11.5 9.08579L8.00001 5.58579L4.5 9.08579L5.20711 9.79289Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 13H13V3H3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-up-rectangle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4595 9.54074L11.5403 10.46L7.9999 6.91959L4.45952 10.46L3.54028 9.54073L7.9999 5.08112L12.4595 9.54074Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">chevron-up</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4H9V2H7V4ZM10 2V4H13C13.5523 4 14 4.44772 14 5V7C14 7.50427 13.6267 7.92137 13.1414 7.99007L13.8369 12.8586C13.923 13.461 13.4555 14 12.847 14H3.15301C2.54446 14 2.077 13.461 2.16306 12.8586L2.85856 7.99007C2.37326 7.92137 2 7.50427 2 7V5C2 4.44772 2.44772 4 3 4H6V2C6 1.44772 6.44772 1 7 1H9C9.55228 1 10 1.44772 10 2ZM12.1327 7H13V5H9H7H3L3 7H3.8673H12.1327ZM12.1327 8H3.8673L3.15301 13H5V11H6V13H7.5V11H8.5V13H10V11H11V13H12.847L12.1327 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">clear</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM5.67091 4.94754L8.00001 7.29075L10.3291 4.94754L11.0384 5.65251L8.70499 8L11.0383 10.3475L10.3291 11.0525L8.00001 8.70925L5.67092 11.0525L4.96168 10.3475L7.29503 8L4.96167 5.65251L5.67091 4.94754Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">close-circle-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.98094 10.3119L7.29289 7.99995L4.98104 5.6881L5.68814 4.98099L8 7.29284L10.3119 4.98099L11.019 5.6881L8.7071 7.99995L11.0191 10.3119L10.3119 11.019L8 8.70706L5.68805 11.019L4.98094 10.3119Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">close-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.818 10.4748L7.29291 7.99994L4.81812 5.52515L5.52522 4.81804L8.00001 7.29283L10.4749 4.81799L11.182 5.5251L8.70712 7.99994L11.1821 10.4749L10.475 11.182L8.00001 8.70705L5.52511 11.182L4.818 10.4748Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">close-rectangle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00005 8.91923L11.076 11.9951L11.9952 11.0759L8.91929 7.99999L11.9952 4.92409L11.076 4.00485L8.00005 7.08075L4.92412 4.00482L4.00488 4.92406L7.08081 7.99999L4.00488 11.0759L4.92412 11.9952L8.00005 8.91923Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">close</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 6.26257L4.0185 6.34565C2.89613 6.47654 2 7.45287 2 8.66667C2 9.8761 2.89038 10.848 4 10.9838V11.989C2.32292 11.8501 1 10.4132 1 8.66667C1 6.95238 2.26933 5.54286 3.90267 5.35238C4.31333 3.42857 5.99333 2 8 2C10.0067 2 11.6867 3.42857 12.0973 5.35238C13.7307 5.54286 15 6.95238 15 8.66667C15 10.4132 13.6771 11.8501 12 11.989V10.9838C13.1096 10.848 14 9.8761 14 8.66667C14 7.45287 13.1039 6.47654 11.9815 6.34565L11.2691 6.26257L11.1194 5.56114C10.8032 4.08009 9.51599 3 8 3C6.48401 3 5.19679 4.08009 4.88063 5.56114L4.7309 6.26257Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.79665 11.2999L8.50332 12.589L8.50338 7.99696L7.50172 7.99694L7.50165 12.589L6.20828 11.2999L5.5 12.0058L7.6495 14.1482C7.84463 14.3427 8.16031 14.3427 8.35543 14.1482L10.5049 12.0058L9.79665 11.2999Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">cloud-download</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 6.26257L4.0185 6.34565C2.89613 6.47654 2 7.45287 2 8.66667C2 9.8761 2.89038 10.848 4 10.9838V11.989C2.32292 11.8501 1 10.4132 1 8.66667C1 6.95238 2.26933 5.54286 3.90267 5.35238C4.31333 3.42857 5.99333 2 8 2C10.0067 2 11.6867 3.42857 12.0973 5.35238C13.7307 5.54286 15 6.95238 15 8.66667C15 10.4132 13.6771 11.8501 12 11.989V10.9838C13.1096 10.848 14 9.8761 14 8.66667C14 7.45287 13.1039 6.47654 11.9815 6.34565L11.2691 6.26257L11.1194 5.56114C10.8032 4.08009 9.51599 3 8 3C6.48401 3 5.19679 4.08009 4.88063 5.56114L4.7309 6.26257Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6.14062 10.7202L7.49824 9.38764L7.53164 14.5069L8.54247 14.5L8.5092 9.39884L9.88196 10.7377L10.5956 10.0372L8.34437 7.84156C8.14972 7.65173 7.83906 7.65223 7.64502 7.84268L5.42472 10.022L6.14062 10.7202Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">cloud-upload</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 7.26147L4.88063 6.56004C5.19679 5.07899 6.48401 3.9989 8 3.9989C9.51599 3.9989 10.8032 5.07899 11.1194 6.56004L11.2691 7.26147L11.9815 7.34455C13.1039 7.47544 14 8.45177 14 9.66557C14 10.9705 12.9634 11.9989 11.7333 11.9989H4.26667C3.03657 11.9989 2 10.9705 2 9.66557C2 8.45177 2.89613 7.47544 4.0185 7.34455L4.7309 7.26147ZM12.0973 6.35128C11.6867 4.42747 10.0067 2.9989 8 2.9989C5.99333 2.9989 4.31333 4.42747 3.90267 6.35128C2.26933 6.54176 1 7.95128 1 9.66557C1 11.5037 2.46533 12.9989 4.26667 12.9989H11.7333C13.5347 12.9989 15 11.5037 15 9.66557C15 7.95128 13.7307 6.54176 12.0973 6.35128Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">cloud</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.94034 2.55798L6.09333 13.1832L7.05925 13.442L9.90626 2.8168L8.94034 2.55798Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.14982 8.00001L5.57495 11.4251L4.86784 12.1323L1.15987 8.42428C0.925551 8.18996 0.925553 7.81006 1.15987 7.57575L4.86784 3.86777L5.57495 4.57488L2.14982 8.00001Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.846 8.00001L10.4054 11.4016L11.1085 12.1127L14.8368 8.42668C15.0744 8.19183 15.0744 7.80819 14.8368 7.57333L11.1085 3.88732L10.4054 4.59845L13.846 8.00001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">code</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4953 4.24999L8.46882 0.770621C8.17876 0.603152 7.82139 0.603152 7.53132 0.770621L1.50488 4.24999V11.2087C1.50488 11.5437 1.68357 11.8532 1.97363 12.0206L8.00007 15.5L14.0265 12.0206C14.3166 11.8532 14.4953 11.5437 14.4953 11.2087V4.24999ZM7.99907 7.42199L3.00419 4.53826L8.00007 1.65399L12.9954 4.53845L7.99907 7.42199ZM8.50007 8.28866L13.4951 5.4048V11.172L8.50007 14.0554V8.28866ZM7.50007 8.28866V14.0554L2.50407 11.172V5.40422L7.50007 8.28866Z" fill="currentColor"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">control-platform</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 11H6.5V10H3.5V11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 12V4C15 3.44772 14.5523 3 14 3H2C1.44772 3 1 3.44772 1 4V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12ZM14 4V5.5H2V4H14ZM2 12V6.5H14V12H2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">creditcard</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M13.8745 4.90662L9.37556 9.40553L8.66845 8.69843L13.1674 4.19951L13.8745 4.90662Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.02203 11.052C7.46974 11.052 7.02203 10.6043 7.02203 10.052C7.02203 9.49972 7.46974 9.052 8.02203 9.052C8.57431 9.052 9.02203 9.49972 9.02203 10.052C9.02203 10.6043 8.57431 11.052 8.02203 11.052ZM8.02203 12.052C9.1266 12.052 10.022 11.1566 10.022 10.052C10.022 8.94743 9.1266 8.052 8.02203 8.052C6.91746 8.052 6.02203 8.94743 6.02203 10.052C6.02203 11.1566 6.91746 12.052 8.02203 12.052Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 3.5C4.41015 3.5 1.5 6.41015 1.5 10C1.5 11.3817 1.93054 12.6613 2.66478 13.714L1.8446 14.286C0.997092 13.071 0.5 11.5928 0.5 10C0.5 5.85786 3.85786 2.5 8 2.5C9.2547 2.5 10.4388 2.8085 11.4792 3.35421L11.0147 4.23978C10.1142 3.76743 9.08905 3.5 8 3.5ZM14.5 10C14.5 8.91685 14.2355 7.89696 13.7679 6.99999L14.6547 6.53776C15.1948 7.57405 15.5 8.75212 15.5 10C15.5 11.5928 15.0029 13.071 14.1554 14.286L13.3352 13.714C14.0695 12.6613 14.5 11.3817 14.5 10Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">dashboard</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12V6H7V12H6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 6V12H10V6H9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.5 3H14V4H13V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V4H2V3H5.5L5.5 1.8C5.5 1.35817 5.85817 1 6.3 1H9.7C10.1418 1 10.5 1.35817 10.5 1.8V3ZM6.5 3H9.5L9.5 2L6.5 2V3ZM4 4V14H12V4H4Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">delete</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 11H7.5V13H3V14H13V13H8.5V11H13.5C14.0523 11 14.5 10.5523 14.5 10V3C14.5 2.44772 14.0523 2 13.5 2H2.5C1.94771 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11ZM2.5 3L13.5 3V10L2.5 10L2.5 3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">desktop</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.98714 5.32938C7.44495 5.78719 7.44495 6.52946 6.98714 6.98728C6.52932 7.4451 5.78705 7.4451 5.32923 6.98728C4.87141 6.52946 4.87141 5.78719 5.32923 5.32938C5.78705 4.87156 6.52932 4.87156 6.98714 5.32938Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 7.72999C1.99999 7.99522 2.10535 8.24958 2.29289 8.43713L8.20507 14.3493C8.5956 14.7398 9.22876 14.7398 9.61929 14.3493L14.3493 9.6193C14.7398 9.22877 14.7399 8.59561 14.3493 8.20508L8.43714 2.29289C8.2496 2.10535 7.99524 2 7.73002 2L2.00017 2.00005L2 7.72999ZM7.69424 4.62227C8.54259 5.47061 8.54259 6.84605 7.69424 7.69439C6.8459 8.54273 5.47047 8.54273 4.62212 7.69439C3.77378 6.84605 3.77378 5.47061 4.62212 4.62227C5.47047 3.77393 6.8459 3.77393 7.69424 4.62227Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">discount-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.83885 5.01035C7.0578 4.2293 5.79147 4.2293 5.01042 5.01035C4.22937 5.7914 4.22937 7.05773 5.01042 7.83877C5.79147 8.61982 7.0578 8.61982 7.83885 7.83877C8.6199 7.05773 8.6199 5.7914 7.83885 5.01035ZM7.13174 5.71745C7.52227 6.10798 7.52227 6.74114 7.13174 7.13167C6.74122 7.52219 6.10805 7.52219 5.71753 7.13167C5.32701 6.74114 5.32701 6.10798 5.71753 5.71745C6.10805 5.32693 6.74122 5.32693 7.13174 5.71745Z" fill="currentColor" fill-opacity="0.9"/>
    <path d="M2 7.94985L2.00002 2L7.94975 2.0001C8.21497 2.0001 8.46931 2.10546 8.65685 2.29299L14.7903 8.42646C15.1808 8.81698 15.1808 9.45014 14.7903 9.84067L9.84057 14.7904C9.45004 15.1809 8.81688 15.1809 8.42635 14.7904L2.29289 8.65696C2.10536 8.46942 2 8.21507 2 7.94985ZM7.94974 3.0001L3.00002 3.00002L3 7.94985L9.13346 14.0833L14.0832 9.13356L7.94974 3.0001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>
    
    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">discount</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2636 5.81387L8.5 9.57746L8.49998 0.5L7.49998 0.500002L7.5 9.57746L3.73641 5.81387L3.02931 6.52098L7.64645 11.1381C7.84171 11.3334 8.15829 11.3334 8.35355 11.1381L12.9707 6.52098L12.2636 5.81387Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11H13V13H3V11H2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">download</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M14.1321 4.95049L10.8888 1.70711L11.5959 1L14.8393 4.24338L14.1321 4.95049Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5.97196 13.1108L2.359 13.8334C2.14909 13.8754 1.96401 13.6903 2.00599 13.4804L2.72858 9.86742L10.0262 2.56982L13.2696 5.8132L5.97196 13.1108ZM11.8554 5.8132L10.0262 3.98403L3.64979 10.3604L3.19249 12.6469L5.47895 12.1896L11.8554 5.8132Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 11H11V12H15V11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 13H8.5V14H15V13Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">edit-1</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8819 1.73695L14.1253 4.98033L14.8324 4.27322L11.589 1.02985L10.8819 1.73695Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.35217 13.8632L5.96513 13.1406L13.2627 5.84304L10.0194 2.59966L2.72175 9.89727L1.99916 13.5102C1.95717 13.7201 2.14225 13.9052 2.35217 13.8632ZM10.0194 4.01388L11.8485 5.84304L5.47212 12.2194L3.18566 12.6767L3.64295 10.3903L10.0194 4.01388Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">edit</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9C2.44775 9 2 8.55228 2 8C2 7.44772 2.44775 7 3 7C3.55225 7 4 7.44772 4 8C4 8.55228 3.55225 9 3 9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7 8C7 8.55228 7.44775 9 8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 8C12 8.55228 12.4478 9 13 9C13.5522 9 14 8.55228 14 8C14 7.44772 13.5522 7 13 7C12.4478 7 12 7.44772 12 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">ellipsis</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 4V10H4.20718L5.85363 8.35355L5.14652 7.64645L2.64652 10.1464C2.45126 10.3417 2.45126 10.6583 2.64652 10.8536L5.14652 13.3536L5.85363 12.6464L4.20718 11H13.0001C13.5524 11 14.0001 10.5523 14.0001 10V4H13.0001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">enter</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM8.5 4.0003V9.49999H7.5V4.0003H8.5ZM7.39429 11H8.59429V12.2H7.39429V11Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">error-circle-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 4.00037V9.5H7.5V4.00037H8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.59424 10.5H7.39429V11.7H8.59424V10.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8C1 11.866 4.13403 15 8 15C11.866 15 15 11.866 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68628 14 2 11.3137 2 8C2 4.68628 4.68628 2 8 2C11.3137 2 14 4.68628 14 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">error-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49975 2H7.49975V11H8.49975V2ZM8.60137 12.8H7.40137V14H8.60137V12.8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">error</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 1C3.44386 1 3 1.44386 3 2V13C3 13.5561 3.44386 14 4 14H8.53613V13H4V2H8V6H12V8.48438H13V5.70711C13 5.44189 12.8946 5.18754 12.7071 5L12.6246 4.91753L12.6236 4.91644L8.91355 1.20645C8.82878 1.12167 8.72835 1.07544 8.62863 1.05804C8.52186 1.01999 8.40841 1 8.29289 1H4ZM11.2929 5H9V2.70711L11.2929 5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 15V13H10V12H12V10H13V12H15V13H13V15H12Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">file-add</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99995 1.92191C3.99995 1.33727 4.52001 1 4.9953 1H9.36584C9.63437 1 9.89162 1.108 10.0797 1.29969L13.7139 5.00415C13.8972 5.19093 13.9999 5.44209 14.0001 5.70375L14.0046 12.0777C14.0046 12.6624 13.4846 13 13.0093 13H4.99995C4.52472 13 4.00474 12.6628 4.00461 12.0783L3.99995 1.92191ZM4.99999 2L5.00457 12H13.0046L13.0003 6.01275H9.00004V2H4.99999ZM10 2.64645V5.01275H12.3215L10 2.64645Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 5.00001V14.0128C2 14.565 2.44772 15.0128 3 15.0128H11V14.0128L3 14.0128V5.00001H2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">file-copy</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 1.99988V13.9999H8V14.9999H3.49534C3.02005 14.9999 2.5 14.6626 2.5 14.078V1.92179C2.5 1.33715 3.02005 0.999878 3.49534 0.999878H8.86589C9.13442 0.999878 9.39167 1.10788 9.57972 1.29957L13.2138 5.00388C13.3973 5.19083 13.5 5.44229 13.5 5.70419V7.49988H12.5V6.01263H8.50008V1.99988H3.5ZM9.50008 2.64633V5.01263H11.8215L9.50008 2.64633Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.3363 9.79198L10.3363 8.95227L9.3363 8.95228L9.33631 9.79198C9.33631 10.05 9.42442 10.3004 9.58607 10.5015L10.7767 11.9832L9.58607 13.4649C9.42442 13.666 9.33631 13.9164 9.33631 14.1744L9.33631 15.0141L10.3363 15.0141L10.3363 14.1744C10.3363 14.1442 10.3466 14.1148 10.3656 14.0913L11.4181 12.7814L12.4707 14.0913C12.4896 14.1148 12.5 14.1442 12.5 14.1744V15.0141H13.5V14.1744C13.5 13.9164 13.4119 13.666 13.2502 13.4649L12.0596 11.9832L13.2502 10.5015C13.4119 10.3004 13.5 10.05 13.5 9.79198V8.95227H12.5V9.79198C12.5 9.82222 12.4896 9.85155 12.4707 9.87512L11.4181 11.185L10.3656 9.87512C10.3466 9.85155 10.3363 9.82222 10.3363 9.79198Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">file-excel</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H11.2336V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 5.01275H11.8215L9.50008 2.64645V5.01275Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.48145 9H6.48145V9.8H5.88145V12.2H6.48145V13H4.48145V12.2H5.08145V9.8H4.48145V9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.99999 9H7.79246C7.35479 9 6.99999 9.35817 6.99999 9.8V12.2C6.99999 12.6418 7.35479 13 7.79246 13H8.99999V12.2H7.79246V9.8H8.99999V9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.7972 9.8L13.7972 13H13L13 9H14.7434C15.1837 9 15.5406 9.35817 15.5406 9.8V13H14.7434V9.8H13.7972Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 9.80928L9.5 12.201C9.5 12.6413 9.85693 12.9982 10.2972 12.9982H11.4931C11.9334 12.9982 12.2903 12.6413 12.2903 12.201V9.80928C12.2903 9.36899 11.9334 9.01205 11.4931 9.01205H10.2972C9.85693 9.01205 9.5 9.36899 9.5 9.80928ZM10.2972 12.201L10.2972 9.80928H11.4931V12.201H10.2972Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">file-icon</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.57127 1C3.09598 1 2.57593 1.33727 2.57593 1.92191V14.0781C2.57593 14.6627 3.09598 15 3.57127 15H12.5048C12.9801 15 13.5001 14.6627 13.5001 14.0781V5.70431C13.5001 5.44241 13.3974 5.19096 13.214 5.004L9.57985 1.29969C9.3918 1.108 9.13455 1 8.86601 1H3.57127ZM3.57593 11.3636V2H8.57604V6.0092H12.5001V10.2878L10.5759 8.3636L7.57593 11.3636L5.57593 9.3636L3.57593 11.3636ZM3.57593 12.6364L5.57593 10.6364L6.93953 12L4.93953 14H3.57593V12.6364ZM10.5759 9.6364L12.5001 11.5606V14H6.21232L10.5759 9.6364ZM11.8182 5.0092H9.57604V2.72374L11.8182 5.0092Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">file-image</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 11.5H5V12.5H11V11.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.5 1.92191C2.5 1.33727 3.02005 1 3.49534 1L8.7929 1.00007C9.05812 1.00007 9.31246 1.10543 9.5 1.29296L13.2071 5.00007C13.3946 5.18761 13.5 5.44196 13.5 5.70718V14.0782C13.5 14.6628 12.9799 15.0001 12.5047 15.0001L3.49534 15C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191ZM3.5 2V14L12.5 14.0001V6.01283H8.50005V2.00007L3.5 2ZM9.50005 5.01283H11.8056L9.50005 2.70722V5.01283Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">file-paste</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 14V2H8.50008V6.01275H12.5V7.5H13.5V5.70431C13.5 5.44241 13.3973 5.19096 13.2138 5.004L9.57972 1.29969C9.39167 1.108 9.13442 1 8.86589 1H3.49534C3.02005 1 2.5 1.33727 2.5 1.92191V14.0781C2.5 14.6627 3.02005 15 3.49534 15H12V14H3.5ZM11.8215 5.01275H9.50008V2.64645L11.8215 5.01275Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.37695 9H10.2384C10.7216 9 11.1134 9.39175 11.1134 9.875V12.1064C11.1134 12.5897 10.7216 12.9814 10.2384 12.9814H8.37695V9ZM9.12695 9.75V12.2314H10.2384C10.3074 12.2314 10.3634 12.1755 10.3634 12.1064L10.3634 9.875C10.3634 9.80596 10.3074 9.75 10.2384 9.75H9.12695Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5 9.00593H6.86142C7.34467 9.00593 7.73642 9.39768 7.73642 9.88093V10.9327C7.73642 11.416 7.34467 11.8077 6.86142 11.8077H5.75V12.9977H5V9.00593ZM5.75 11.0577H6.86142C6.93046 11.0577 6.98642 11.0017 6.98642 10.9327V9.88093C6.98642 9.81189 6.93046 9.75593 6.86142 9.75593H5.75V11.0577Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.7539 12.9977H12.5039V11.4166H14.1153V10.6666H12.5039V9.75005H14.1153V9.00005H11.7539V12.9977Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">file-pdf</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H8V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 2.64645V5.01275H11.8215L9.50008 2.64645Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.5 8.5H9.5V15H10.5V12.5H12.5C13.0523 12.5 13.5 12.0523 13.5 11.5V9.5C13.5 8.94772 13.0523 8.5 12.5 8.5ZM12.5 11.5H10.5V9.5H12.5V11.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">file-powerpoint</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H9V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.78616C9.05469 1 9.31194 1.108 9.5 1.29969L13.1341 5.004C13.3175 5.19096 13.4203 5.44241 13.4203 5.70431V7.5H12.4203V6.01275H8.42036V2H3.5ZM9.42036 2.64645V5.01275H11.7418L9.42036 2.64645Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.4203 8.42065C10.3495 8.42065 9.42028 9.24178 9.42028 10.3222H10.4203C10.4203 9.85692 10.8368 9.42065 11.4203 9.42065C12.0038 9.42065 12.4203 9.85692 12.4203 10.3222C12.4203 10.6216 12.1402 10.9812 11.7014 11.1477L11.699 11.1487C11.2559 11.3196 10.9203 11.7405 10.9203 12.2599V12.9207H11.9203V12.2599C11.9203 12.1949 11.9616 12.1195 12.0579 12.0821C12.7159 11.8317 13.4203 11.1914 13.4203 10.3222C13.4203 9.24178 12.491 8.42065 11.4203 8.42065Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.4202 13.8C11.0888 13.8 10.8202 14.0686 10.8202 14.4C10.8202 14.7314 11.0888 15 11.4202 15C11.7515 15 12.0202 14.7314 12.0202 14.4C12.0202 14.0686 11.7515 13.8 11.4202 13.8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">file-unknown</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2.00006V14.0001H6.5V15.0001H3.49534C3.02005 15.0001 2.5 14.6628 2.5 14.0781V1.92197C2.5 1.33733 3.02005 1.00006 3.49534 1.00006L8.8658 1C9.13433 1 9.39158 1.108 9.57964 1.29969L13.2138 5.004C13.3972 5.19096 13.4999 5.44241 13.4999 5.70431V8H12.4999V6.01275H8.5V2L3.5 2.00006ZM9.5 2.64645V5.01275H11.8215L9.5 2.64645Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 14L9 9.5H8L8 14C8 14.5523 8.44772 15 9 15H12.5C13.0523 15 13.5 14.5523 13.5 14V9.5H12.5L12.5 14H11.25L11.25 9.5H10.25L10.25 14H9Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">file-word</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49534 1C3.02005 1 2.5 1.33727 2.5 1.92191V14.0781C2.5 14.6627 3.02005 15 3.49534 15L12.5047 15.0001C12.9799 15.0001 13.5 14.6628 13.5 14.0782V5.70718C13.5 5.44196 13.3946 5.18761 13.2071 5.00007L9.5 1.29296C9.31246 1.10543 9.05812 1.00007 8.7929 1.00007L3.49534 1ZM8.50005 2.00007V6.01283H12.5V14.0001L3.5 14V2L8.50005 2.00007ZM9.50005 2.70722L11.8056 5.01283H9.50005V2.70722Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">file</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00293 2H10.9975C11.5498 2 11.9975 2.44772 11.9975 3C11.9975 3.27469 11.8845 3.53729 11.685 3.72615L8.00004 7.214V12.75L5.00004 15L4.99904 7.214L1.31537 3.72612C0.945188 3.3756 0.902004 2.80934 1.19622 2.40887L1.27681 2.31243C1.46567 2.11298 1.72825 2 2.00293 2ZM10.9975 3H2.00293L6.00004 6.78486L5.99904 12.999L7.00004 12.249V6.78485L10.9975 3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.7071 10L12.1214 11.4143L13.5357 10L14.2428 10.7071L12.8285 12.1214L14.2426 13.5355L13.5355 14.2426L12.1214 12.8285L10.7073 14.2426L10.0002 13.5355L11.4143 12.1214L10 10.7071L10.7071 10Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">filter-clear</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V4.78597L9.75 7.28597V14H6.25V7.28597L2 4.78597V3ZM13 3H3V4.21403L7.25 6.71403V13H8.75V6.71403L13 4.21403V3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">filter</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2H13.46C13.7582 2 14 2.24177 14 2.54V9.46C14 9.75823 13.7582 10 13.46 10H4V15H3V10L3 2ZM4 3V9H13V3H4Z" fill="currentColor" fill-opacity="0.9"/>
</svg>
    
    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">flag</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3C1.5 2.44772 1.94772 2 2.5 2H6.0906L8.16202 3.5H13C13.5523 3.5 14 3.94772 14 4.5V8.5H13V4.5H7.83798L5.76655 3L2.5 3V12H8.5V13H2.5C1.94772 13 1.5 12.5523 1.5 12V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 15V13H10V12H12V10H13V12H15V13H13V15H12Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">folder-add</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2.74396H6.42857L8.5 4.39468H13.5V3.39468H8.84972L6.77829 1.74396L2.5 1.74396V2.74396Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.5 4.39466C1.94772 4.39466 1.5 4.84237 1.5 5.39466V13C1.5 13.5523 1.94772 14 2.5 14L13.5 14C14.0523 14 14.5 13.5523 14.5 13V7.04537C14.5 6.49309 14.0523 6.04537 13.5 6.04537H8.17486L6.10343 4.39465L2.5 4.39466ZM2.5 5.39466L5.75371 5.39465L7.82514 7.04537H13.5V13L2.5 13V5.39466Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">folder-open</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3.5C1.5 2.94771 1.94772 2.5 2.5 2.5H5.42857H5.5906L5.72183 2.59503L7.66202 4H13.5C14.0523 4 14.5 4.44772 14.5 5V13C14.5 13.5523 14.0523 14 13.5 14H2.5C1.94772 14 1.5 13.5523 1.5 13L1.5 3.5ZM5.26655 3.5L2.5 3.5V13H13.5V5H7.5H7.33798L7.20675 4.90497L5.26655 3.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">folder</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2.5C6 2.22386 6.22386 2 6.5 2H9.5C9.77614 2 10 2.22386 10 2.5V5.5C10 5.77614 9.77614 6 9.5 6H8.5V8H11.5C12.0523 8 12.5 8.44772 12.5 9V10H13.5C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H10.5C10.2239 14 10 13.7761 10 13.5V10.5C10 10.2239 10.2239 10 10.5 10H11.5V9H4.5V10H5.5C5.77614 10 6 10.2239 6 10.5V13.5C6 13.7761 5.77614 14 5.5 14H2.5C2.22386 14 2 13.7761 2 13.5V10.5C2 10.2239 2.22386 10 2.5 10H3.5V9C3.5 8.44772 3.94772 8 4.5 8H7.5V6H6.5C6.22386 6 6 5.77614 6 5.5V2.5ZM7 5H9V3H7V5ZM3 11V13H5V11H3ZM11 11V13H13V11H11Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">fork</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14L13 2H14L14 14H13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.5 14V6H9.5V14H10.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.5 6L3.5 14H2.5V6H3.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">format-horizontal-align-bottom</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14L13 2H14L14 14H13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.5 12V4H9.5V12H10.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.5 4L3.5 12H2.5V4H3.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">format-horizontal-align-center</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2L2.5 11H3.5L3.5 2H2.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 11L9.5 2H10.5L10.5 11H9.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13 14L13 2H14L14 14H13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">format-horizontal-align-top</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4 6.5H12V5.5H4V6.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 13.5H4V12.5H12V13.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 10H14V9H2V10Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">format-vertical-align-center</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 6.5H11V5.5H2V6.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11 13.5H2V12.5H11V13.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 10H14V9H2V10Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">format-vertical-align-left</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3ZM5 6.5H14V5.5H5V6.5ZM14 13.5H5V12.5H14V13.5ZM2 10H14V9H2V10Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">format-vertical-align-right</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7579 7.60926C15.0086 7.80943 15.0086 8.19058 14.7579 8.39075L9.12049 12.8914C8.79303 13.1529 8.30854 12.9197 8.30854 12.5007L8.30854 8.23459C8.27912 8.29002 8.23853 8.341 8.18678 8.38412L2.82034 12.8562C2.49468 13.1276 2.00024 12.896 2.00024 12.4721L2.00025 3.5279C2.00025 3.10398 2.49468 2.87241 2.82034 3.1438L8.18678 7.61591C8.23853 7.65903 8.27912 7.71 8.30854 7.76544L8.30854 3.49935C8.30854 3.08033 8.79303 2.84717 9.12049 3.1086L14.7579 7.60926ZM9.30854 4.53833L9.30854 11.4617L13.6445 8.00001L9.30854 4.53833ZM3.00025 4.59544L3.00024 11.4046L7.08567 8.00001L3.00025 4.59544Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">forward</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.50004 5.79293V3.00004L7.50004 3.00004V7.00004C7.50004 7.27618 7.27618 7.50004 7.00004 7.50004L3.00004 7.50004L3.00004 6.50004L5.79293 6.50004L2.14648 2.85359L2.85359 2.14648L6.50004 5.79293Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.50004 10.2071V13H8.50004V9.00004C8.50004 8.7239 8.7239 8.50004 9.00004 8.50004H13V9.50004H10.2071L13.8536 13.1465L13.1465 13.8536L9.50004 10.2071Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">fullscreen-exit</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4.20711V7H2.5V3C2.5 2.72386 2.72386 2.5 3 2.5L7 2.5V3.5H4.2071L7.35355 6.64646L6.64645 7.35357L3.5 4.20711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.5 11.7929V9H13.5V13C13.5 13.2761 13.2761 13.5 13 13.5L9 13.5L9 12.5H11.7929L8.64645 9.35353L9.35355 8.64643L12.5 11.7929Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">fullscreen</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.67828C6.067 1.67828 4.5 3.24529 4.5 5.17828C4.5 6.94604 5.81055 8.4077 7.51306 8.64468L7.51311 10.0021H5.51315V11.0021H7.51315L7.51329 14.502L8.51329 14.502L8.51315 11.0021H10.5132V10.0021H8.51311L8.51306 8.64095C10.2028 8.39273 11.5 6.93699 11.5 5.17828C11.5 3.24529 9.933 1.67828 8 1.67828ZM8 2.67828C9.38071 2.67828 10.5 3.79757 10.5 5.17828C10.5 6.559 9.38071 7.67828 8 7.67828C6.61929 7.67828 5.5 6.559 5.5 5.17828C5.5 3.79757 6.61929 2.67828 8 2.67828Z" fill="currentColor"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">gender-female</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9997 3.6C12.9997 3.26863 12.7311 3 12.3997 3H8.99975V4L11.3825 4L7.67208 7.7104C6.29899 6.64114 4.31234 6.73766 3.05003 7.99998C1.68319 9.36682 1.68319 11.5829 3.05003 12.9497C4.41686 14.3166 6.63294 14.3166 7.99978 12.9497C9.23096 11.7185 9.35315 9.79831 8.36634 8.43036L11.9997 4.79693V7H12.9997V3.6ZM3.75714 12.2426C2.78082 11.2663 2.78082 9.6834 3.75714 8.70709C4.73345 7.73078 6.31636 7.73078 7.29267 8.70709C8.26898 9.6834 8.26898 11.2663 7.29267 12.2426C6.31636 13.2189 4.73345 13.2189 3.75714 12.2426Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">gender-male</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4C3.5 4.5628 3.68597 5.08217 3.99982 5.5H2.5C2.22386 5.5 2 5.72386 2 6V14C2 14.2761 2.22386 14.5 2.5 14.5H13.5C13.7761 14.5 14 14.2761 14 14V6C14 5.72386 13.7761 5.5 13.5 5.5H12.0002C12.314 5.08217 12.5 4.5628 12.5 4C12.5 2.61929 11.3807 1.5 10 1.5C9.1822 1.5 8.45611 1.89267 8 2.49976C7.54388 1.89267 6.8178 1.5 6 1.5C4.61929 1.5 3.5 2.61929 3.5 4ZM11.5 4C11.5 4.82843 10.8284 5.5 10 5.5H8.5V4C8.5 3.17157 9.17157 2.5 10 2.5C10.8284 2.5 11.5 3.17157 11.5 4ZM7.5 6.5V11H8.5V6.5H13V13.5H3V6.5H7.5ZM7.5 5.5H6C5.17157 5.5 4.5 4.82843 4.5 4C4.5 3.17157 5.17157 2.5 6 2.5C6.82843 2.5 7.5 3.17157 7.5 4V5.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">gift</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6.61283C2 3.69894 5.46385 2.17518 7.61184 4.14417L8 4.49999L8.38816 4.14418C10.5362 2.17518 14 3.69893 14 6.61283C14 7.50101 13.6472 8.35282 13.0191 8.98086L8.14571 13.8543C8.06523 13.9348 7.93477 13.9348 7.85429 13.8543L2.98087 8.98086C2.35283 8.35282 2 7.50101 2 6.61283Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">heart-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5.85656L9.06389 4.88133C10.5705 3.50029 13 4.56904 13 6.61283C13 7.2358 12.7525 7.83325 12.312 8.27375L8 12.5858L3.68798 8.27376C3.24747 7.83325 3 7.2358 3 6.61283C3 4.56904 5.42952 3.50029 6.93611 4.88133L8 5.85656ZM7.61184 4.14417C5.46385 2.17518 2 3.69894 2 6.61283C2 7.50101 2.35283 8.35282 2.98087 8.98086L7.85429 13.8543C7.93477 13.9348 8.06523 13.9348 8.14571 13.8543L13.0191 8.98086C13.6472 8.35282 14 7.50101 14 6.61283C14 3.69893 10.5362 2.17518 8.38816 4.14418L8 4.49999L7.61184 4.14417Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">heart</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9944 8C14.9944 4.13401 11.8604 1 7.99439 1C4.12839 0.999998 0.994386 4.134 0.994385 8C0.994383 11.866 4.12839 15 7.99438 15C11.8604 15 14.9944 11.866 14.9944 8ZM5.80273 6.6315C5.80273 5.42262 6.78535 4.44 7.99424 4.44C9.20312 4.44 10.1857 5.42262 10.1857 6.6315C10.1857 7.60163 9.44315 8.35248 8.70124 8.65455C8.58029 8.70488 8.49428 8.82451 8.49428 8.97008V9.7675H7.49428V8.97008C7.49428 8.41041 7.83313 7.931 8.32065 7.7298L8.3232 7.72875C8.81796 7.52775 9.18574 7.07185 9.18574 6.6315C9.18574 5.9749 8.65084 5.44 7.99424 5.44C7.33764 5.44 6.80273 5.9749 6.80273 6.6315H5.80273ZM7.46697 11.1734C7.46697 10.8823 7.70302 10.6462 7.99419 10.6462C8.28537 10.6462 8.52141 10.8823 8.52141 11.1734C8.52141 11.4646 8.28537 11.7007 7.99419 11.7007C7.70302 11.7007 7.46697 11.4646 7.46697 11.1734Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">help-circle-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.39404 11.6C7.39404 11.2686 7.66267 11 7.99404 11C8.32541 11 8.59404 11.2686 8.59404 11.6C8.59404 11.9314 8.32541 12.2 7.99404 12.2C7.66267 12.2 7.39404 11.9314 7.39404 11.6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7.99409 4.0061C6.65645 4.0061 5.56909 5.09346 5.56909 6.4311H6.56909C6.56909 5.64574 7.20873 5.0061 7.99409 5.0061C8.77945 5.0061 9.41909 5.64574 9.41909 6.4311C9.41909 6.96885 8.9746 7.50808 8.39445 7.74376L8.3919 7.74481C7.86235 7.96335 7.49414 8.48413 7.49414 9.0925V10H8.49414V9.0925C8.49414 8.89828 8.60945 8.73731 8.77236 8.66961C9.59969 8.33289 10.4191 7.49869 10.4191 6.4311C10.4191 5.09346 9.33173 4.0061 7.99409 4.0061Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.9941 8C14.9941 4.13401 11.8601 1 7.99414 1C4.12815 0.999998 0.994142 4.134 0.994141 8C0.994138 11.866 4.12815 15 7.99414 15C11.8601 15 14.9941 11.866 14.9941 8ZM13.9941 8C13.9941 11.3137 11.3078 14 7.99414 14C4.68043 14 1.99414 11.3137 1.99414 8C1.99414 4.68629 4.68043 2 7.99414 2C11.3079 2 13.9941 4.68629 13.9941 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">help-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2.5C6.10262 2.5 4.5 3.94793 4.5 5.8H5.5C5.5 4.56407 6.58881 3.5 8 3.5C9.41119 3.5 10.5 4.56407 10.5 5.8C10.5 6.68407 9.72532 7.55083 8.73987 7.92448L8.73742 7.92542C8.02449 8.20003 7.5 8.86853 7.5 9.68V11H8.5V9.68C8.5 9.32382 8.72935 9.0006 9.09579 8.859C10.3042 8.40029 11.5 7.25137 11.5 5.8C11.5 3.94793 9.89738 2.5 8 2.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 12C7.58579 12 7.25 12.3358 7.25 12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75C8.75 12.3358 8.41421 12 8 12Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">help</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.90582 2.79339C10.8499 2.79339 13.2095 5.14005 13.2095 8.00171C13.2095 10.8634 10.8499 13.21 7.90581 13.21C5.44426 13.21 3.39128 11.5695 2.78447 9.35914L1.75098 9.52779C2.44243 12.2419 4.93584 14.2517 7.90581 14.2517C11.4103 14.2517 14.2512 11.4535 14.2512 8.00171C14.2512 4.54993 11.4103 1.75171 7.90582 1.75171C5.80622 1.75171 3.9448 2.75613 2.78981 4.30376L2.78981 2.64486H1.75098V5.79135C1.75098 6.0675 1.97483 6.29135 2.25098 6.29135L5.37759 6.29135V5.24683H3.40454C4.33896 3.77685 5.99992 2.79339 7.90582 2.79339Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6.99951 5.5V8.38893L9.64596 11.0354L10.3531 10.3283L7.99951 7.97471V5.5H6.99951Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">history</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00004 11V12H10V11H6.00004Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7.64648 1.64646C7.84175 1.4512 8.15833 1.4512 8.35359 1.64646L14.8536 8.14646L14.1465 8.85357L13 7.70712V13.5C13 14.0523 12.5523 14.5 12 14.5H4.00004C3.44775 14.5 3.00004 14.0523 3.00004 13.5V7.70712L1.85359 8.85357L1.14648 8.14646L7.64648 1.64646ZM8.00004 2.70712L4.00004 6.70712V13.5H12V6.70712L8.00004 2.70712Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">home</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 7.11557L12 3.79931V2.5H4V3.79932L7.99992 7.11557ZM3 4.26923V2.5C3 1.94771 3.44772 1.5 4 1.5H12C12.5523 1.5 13 1.94772 13 2.5V4.26923L8.49992 8.00002L13 11.7308V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V11.7308L7.49992 8.00002L3 4.26923ZM4 12.2007V13.5H12V12.2007L7.99992 8.88447L4 12.2007Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">hourglass</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13V8H3L3 10.2929L6 7.29289L11.7071 13H13L13 3L8 3V2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14C2.44772 14 2 13.5523 2 13ZM6 8.70711L3 11.7071L3 13L10.2929 13L6 8.70711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 6C12 7.10457 11.1046 8 10 8C8.89543 8 8 7.10457 8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7C10.5523 7 11 6.55228 11 6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6.28208 5.55923L5.57497 6.26634L4.16076 4.85213L2.74654 6.26634L2.03943 5.55923L3.45365 4.14502L2.03943 2.73081L2.74654 2.0237L4.16076 3.43791L5.57497 2.0237L6.28208 2.73081L4.86786 4.14502L6.28208 5.55923Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">image-error</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8ZM10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM3 11.7071L6 8.70711L10.2929 13L3 13L3 11.7071ZM3 10.2929L3 3L13 3L13 13H11.7071L6 7.29289L3 10.2929Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">image</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.3999 4H8.59985V5.19995H7.3999V4ZM7.50562 6.5H8.50562V11.9998H7.50562V6.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">info-circle-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50562 11.9998V6.5H8.50562V11.9998H7.50562Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.59985 4H7.3999V5.19995H8.59985V4Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1 8C1 11.866 4.13403 15 8 15C11.866 15 15 11.866 15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8ZM2 8C2 4.68628 4.68628 2 8 2C11.3137 2 14 4.68628 14 8C14 11.3137 11.3137 14 8 14C4.68628 14 2 11.3137 2 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">info-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.1001 7.9C1.1001 4.08927 4.18928 1.00005 8 1C11.8108 1 14.9001 4.08923 14.9001 7.9V8.1C14.9001 11.9108 11.8109 15 8.0001 15C4.18938 14.9999 1.1001 11.9107 1.1001 8.1V7.9ZM13.8868 8.5H10.8869C10.7905 10.419 10.1384 12.3152 8.93067 13.927C11.6183 13.5012 13.7019 11.2606 13.8868 8.5ZM10.8869 7.5H13.8868C13.7019 4.73941 11.6183 2.4988 8.93067 2.07297C10.1384 3.68475 10.7905 5.58102 10.8869 7.5ZM9.88552 7.5C9.78624 5.72473 9.15773 3.97354 8 2.50303C6.84227 3.97354 6.21376 5.72473 6.11448 7.5H9.88552ZM5.11307 8.5H2.11344C2.29825 11.2605 4.38178 13.5011 7.06931 13.927C5.8616 12.3152 5.20952 10.419 5.11307 8.5ZM5.11307 7.5C5.20952 5.58103 5.86159 3.68478 7.06931 2.07301C4.38177 2.49893 2.29825 4.73949 2.11344 7.5H5.11307ZM9.88552 8.5H6.11448C6.21376 10.2753 6.84227 12.0265 8 13.497C9.15773 12.0265 9.78624 10.2753 9.88552 8.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">internet</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.29329 13.7067C2.48075 13.8942 2.73489 13.9996 3 14H13C13.2651 13.9996 13.5193 13.8942 13.7067 13.7067C13.8942 13.5193 13.9996 13.2651 14 13V8.5H13V13H3V3H7.5V2H3C2.73489 2.00036 2.48075 2.10583 2.29329 2.29329C2.10583 2.48075 2.00036 2.73489 2 3V13C2.00036 13.2651 2.10583 13.5193 2.29329 13.7067Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 3V2H13.5C13.7761 2 14 2.22386 14 2.5V7H13V3.707L8.707 8L8 7.293L12.293 3H9Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">jump</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 12C1.94771 12 1.5 11.5523 1.5 11V4C1.5 3.44772 1.94772 3 2.5 3L13.5 3C14.0523 3 14.5 3.44772 14.5 4V11C14.5 11.5523 14.0523 12 13.5 12H2.5ZM2.5 11L13.5 11V4L2.5 4V11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 13H1V14H15V13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">laptop</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0731 4.97791L7.99976 7.50841L1.92641 4.97791C1.51598 4.8069 1.51598 4.20041 1.92641 4.0294L7.99976 1.4989L14.0731 4.0294C14.4835 4.20041 14.4835 4.8069 14.0731 4.97791ZM3.42727 4.50366L7.99976 6.40881L12.5722 4.50366L7.99976 2.5985L3.42727 4.50366Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.49902 7.02665V8.25379L8.00001 11.1119L14.499 8.25466V7.02752L8.00001 9.8848L1.49902 7.02665Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.49902 10.4194V11.6466L8.00011 14.5048L14.499 11.6475V10.4204L8.00011 13.2776L1.49902 10.4194Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">layers</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1.99994L6 3.99994L7 3.99994V1.99994H6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.1767 9.59098L5.8786 11.8891C5.39045 12.3772 4.59899 12.3772 4.11084 11.8891C3.62268 11.4009 3.62268 10.6095 4.11084 10.1213L6.40893 7.82321L5.70183 7.11611L3.40373 9.4142C2.52505 10.2929 2.52505 11.7175 3.40373 12.5962C4.28241 13.4749 5.70703 13.4749 6.58571 12.5962L8.88381 10.2981L8.1767 9.59098Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.59091 8.17677L10.298 8.88387L12.5961 6.58578C13.4748 5.7071 13.4748 4.28248 12.5961 3.4038C11.7174 2.52512 10.2928 2.52512 9.41414 3.4038L7.11604 5.70189L7.82315 6.409L10.1212 4.1109C10.6094 3.62275 11.4009 3.62275 11.889 4.1109C12.3772 4.59906 12.3772 5.39051 11.889 5.87867L9.59091 8.17677Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 8.99988H14V9.99988H12V8.99988Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 6.99994H4V5.99994H2V6.99994Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 11.9999V13.9999H9L9 11.9999H10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.7322 11.025L13.3536 12.6463L12.6464 13.3534L11.0251 11.7321L11.7322 11.025Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.64645 3.35343L4.26777 4.97475L4.97487 4.26765L3.35355 2.64632L2.64645 3.35343Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">link-unlink</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.23229 11.8891L8.35361 9.76776L9.06072 10.4749L6.9394 12.5962C5.96309 13.5725 4.38017 13.5725 3.40386 12.5962C2.42755 11.6199 2.42755 10.037 3.40386 9.06066L5.52518 6.93934L6.23229 7.64644L4.11097 9.76776C3.52518 10.3536 3.52518 11.3033 4.11097 11.8891C4.69676 12.4749 5.6465 12.4749 6.23229 11.8891Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.4749 9.06066L9.76783 8.35355L11.8891 6.23223C12.4749 5.64644 12.4749 4.6967 11.8891 4.11091C11.3034 3.52512 10.3536 3.52512 9.76782 4.11091L7.6465 6.23223L6.9394 5.52512L9.06072 3.4038C10.037 2.42749 11.6199 2.42749 12.5963 3.4038C13.5726 4.38011 13.5726 5.96303 12.5963 6.93934L10.4749 9.06066Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.06087 6.23225L6.23244 9.06068L6.93955 9.76778L9.76798 6.93936L9.06087 6.23225Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">link</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.5C4.41038 1.5 1.5 4.41038 1.5 8C1.5 11.5896 4.41038 14.5 8 14.5V12.875C5.30761 12.875 3.125 10.6924 3.125 8C3.125 5.30761 5.30761 3.125 8 3.125C10.6924 3.125 12.875 5.30761 12.875 8H14.5C14.5 4.41038 11.5896 1.5 8 1.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">loading</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5001 5.99999C10.5001 7.3807 9.3808 8.49999 8.00009 8.49999C6.61938 8.49999 5.50009 7.3807 5.50009 5.99999C5.50009 4.61928 6.61938 3.49999 8.00009 3.49999C9.3808 3.49999 10.5001 4.61928 10.5001 5.99999ZM9.50009 5.99999C9.50009 5.17156 8.82852 4.49999 8.00009 4.49999C7.17166 4.49999 6.50009 5.17156 6.50009 5.99999C6.50009 6.82842 7.17166 7.49999 8.00009 7.49999C8.82852 7.49999 9.50009 6.82842 9.50009 5.99999Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.36196 14.4684C8.18821 14.7236 7.81196 14.7236 7.63822 14.4684L3.85557 8.91174C2.50041 6.92103 2.75204 4.24804 4.45488 2.54519C6.41284 0.587231 9.58733 0.58723 11.5453 2.54519C13.2481 4.24804 13.4998 6.92103 12.1446 8.91174L8.36196 14.4684ZM11.318 8.34901C12.4028 6.75536 12.2014 4.61551 10.8382 3.2523C9.27075 1.68486 6.72943 1.68486 5.16199 3.2523C3.79878 4.61551 3.59735 6.75536 4.68221 8.34901L8.00009 13.2229L11.318 8.34901Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">location</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11V10H10V11H6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.5 6V5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5H10.5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5V6H13C13.2761 6 13.5 6.22386 13.5 6.5V13.5C13.5 13.7761 13.2761 14 13 14H3C2.72386 14 2.5 13.7761 2.5 13.5V6.5C2.5 6.22386 2.72386 6 3 6H4.5ZM3.5 13H12.5V7H3.5V13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">lock-off</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.99999V11H10V9.99999H6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.5 4.99084V5.99998H3C2.72386 5.99998 2.5 6.22384 2.5 6.49998V13.5C2.5 13.7761 2.72386 14 3 14H13C13.2761 14 13.5 13.7761 13.5 13.5V6.49998C13.5 6.22384 13.2761 5.99998 13 5.99998H11.5V4.99084C11.5 3.05785 9.933 1.49084 8 1.49084C6.067 1.49084 4.5 3.05785 4.5 4.99084ZM10.5 5.99998H5.5V4.99084C5.5 3.61013 6.61929 2.49084 8 2.49084C9.38071 2.49084 10.5 3.61013 10.5 4.99084V5.99998ZM3.5 6.99998H12.5V13H3.5V6.99998Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">lock-on</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.47744 7.49999L6.23166 5.25421L6.93877 4.5471L10.0381 7.64644C10.2334 7.8417 10.2334 8.15828 10.0381 8.35355L6.93877 11.4529L6.23166 10.7458L8.47745 8.49999L1 8.49998L1 7.49997L8.47744 7.49999Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.00006 5V3H12.0001V13H4.00006V11H3.00006V13.5C3.00006 13.7761 3.22391 14 3.50006 14H12.5001C12.7762 14 13.0001 13.7761 13.0001 13.5V2.5C13.0001 2.22386 12.7762 2 12.5001 2H3.50006C3.22391 2 3.00006 2.22386 3.00006 2.5V5H4.00006Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">login</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.31701 8.37857C5.31701 8.00808 5.61735 7.70773 5.98784 7.70773C6.35833 7.70773 6.65868 8.00808 6.65868 8.37857C6.65868 8.74906 6.35833 9.0494 5.98784 9.0494C5.61735 9.0494 5.31701 8.74906 5.31701 8.37857Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.0129 7.70773C9.64236 7.70773 9.34202 8.00808 9.34202 8.37857C9.34202 8.74906 9.64236 9.0494 10.0129 9.0494C10.3833 9.0494 10.6837 8.74906 10.6837 8.37857C10.6837 8.00808 10.3833 7.70773 10.0129 7.70773Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.31638 4L3.9958 5.67942C5.11346 4.84654 6.49933 4.35355 8.00035 4.35355C9.50137 4.35355 10.8872 4.84654 12.0049 5.67942L13.6843 4L14.3914 4.70711L12.762 6.33656C13.8933 7.47647 14.618 9.02038 14.7008 10.7327C14.706 10.8418 14.7087 10.9515 14.7087 11.0619V11.7327H1.29199V11.0619C1.29199 10.9515 1.29466 10.8418 1.29993 10.7327C1.38266 9.02038 2.10744 7.47647 3.23872 6.33656L1.60927 4.70711L2.31638 4ZM2.30132 10.7327H13.6994C13.5288 7.73328 11.0425 5.35355 8.00035 5.35355C4.95819 5.35355 2.47185 7.73328 2.30132 10.7327Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-android</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6858 1C10.7724 1.78958 10.4538 2.58273 9.98364 3.15353C9.51181 3.72324 8.73978 4.1671 7.98282 4.10843C7.88056 3.33311 8.26219 2.52735 8.69865 2.02125C9.18583 1.45099 10.0072 1.02742 10.6858 1Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.1277 5.60474C12.9822 5.69544 11.6658 6.51624 11.6822 8.16735C11.7001 10.1607 13.3917 10.8541 13.4878 10.8935C13.4901 10.8945 13.4919 10.8952 13.4919 10.8952C13.491 10.8979 13.4893 10.9033 13.4868 10.9115C13.4444 11.0464 13.1713 11.9167 12.5576 12.8138C11.9956 13.6358 11.413 14.4533 10.494 14.47C10.0522 14.4785 9.75708 14.3508 9.45018 14.218C9.1291 14.0791 8.79514 13.9346 8.26696 13.9346C7.71347 13.9346 7.36398 14.0836 7.02734 14.2271C6.73567 14.3514 6.45365 14.4716 6.05696 14.4873C5.17032 14.521 4.49451 13.5998 3.92782 12.7812C2.76867 11.1063 1.88341 8.04809 3.07299 5.98448C3.66244 4.95912 4.71823 4.30991 5.86367 4.29291C6.35713 4.28421 6.83526 4.47406 7.25372 4.64022C7.57365 4.76725 7.8587 4.88043 8.08903 4.88043C8.29595 4.88043 8.57336 4.77102 8.89682 4.64344C9.40607 4.44259 10.0295 4.19671 10.6716 4.26193C11.1111 4.28002 12.3459 4.43904 13.1385 5.59791C13.1364 5.59931 13.1328 5.60158 13.1277 5.60474Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-apple-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.29006 4.00804C8.39216 4.00804 8.49363 4.00196 8.59399 3.99C9.16299 3.92218 9.69626 3.66534 10.1056 3.25603C10.5149 2.84672 10.7717 2.31345 10.8395 1.74445C10.8515 1.64409 10.8576 1.54262 10.8576 1.44052V1H10.4171C10.315 1 10.2135 1.00608 10.1131 1.01804C9.54414 1.08586 9.01086 1.3427 8.60155 1.75201C8.19224 2.16132 7.9354 2.69459 7.86759 3.26359C7.85565 3.36373 7.84957 3.46497 7.84954 3.56684V4.00804H8.29006ZM9.57917 2.72962C9.3173 2.99149 8.98397 3.16546 8.62502 3.23256C8.69212 2.87361 8.86609 2.54028 9.12796 2.27842C9.38982 2.01655 9.72315 1.84258 10.0821 1.77548C10.015 2.13443 9.84103 2.46776 9.57917 2.72962Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.6931 5.08954C12.9171 5.26573 13.133 5.48579 13.3255 5.76088C13.3038 5.77264 13.1447 5.86243 12.9359 6.03364C12.4712 6.41459 11.7606 7.19865 11.7714 8.42318C11.7947 10.547 13.6752 11.2524 13.6985 11.26C13.6952 11.2714 13.6793 11.3244 13.6496 11.4103C13.5986 11.5579 13.5068 11.8027 13.3675 12.1011C13.2101 12.4383 12.992 12.8439 12.7039 13.2548C12.1055 14.1119 11.4839 14.9614 10.5047 14.9765C10.0319 14.9877 9.71618 14.8546 9.38781 14.7161C9.04705 14.5723 8.69261 14.4228 8.13464 14.4228C7.54173 14.4228 7.16869 14.5783 6.80938 14.7281C6.49998 14.857 6.20075 14.9817 5.78009 14.9993C4.83205 15.0296 4.11714 14.0739 3.51102 13.2244C2.27546 11.4799 1.33519 8.30941 2.60183 6.16288C3.23127 5.09341 4.35026 4.41836 5.57028 4.40319C6.09584 4.39025 6.60635 4.58803 7.05329 4.76118C7.39273 4.89268 7.69551 5.00998 7.94037 5.00998C8.15548 5.00998 8.43608 4.90234 8.76801 4.77501C9.29941 4.57115 9.96241 4.31682 10.699 4.37285C11.0542 4.39635 11.9224 4.48359 12.6931 5.08954ZM10.6393 5.27485L10.6304 5.27426C10.2284 5.24369 9.82647 5.34827 9.38919 5.507C9.32293 5.53106 9.22662 5.56773 9.12493 5.60646C8.98504 5.65974 8.83454 5.71706 8.73726 5.75104C8.53876 5.82038 8.24562 5.91396 7.94037 5.91396C7.64946 5.91396 7.37621 5.83645 7.1757 5.76982C7.02455 5.71959 6.85603 5.65429 6.70724 5.59663C6.65817 5.57762 6.61125 5.55943 6.5678 5.5429C6.16487 5.38953 5.86112 5.30028 5.59251 5.30689L5.58152 5.30709C4.6936 5.31813 3.85761 5.81141 3.38037 6.62229C2.89586 7.44337 2.79895 8.5289 3.00766 9.68362C3.21513 10.8314 3.70666 11.9362 4.24784 12.7007C4.55663 13.1335 4.83541 13.5075 5.1276 13.7749C5.41383 14.0368 5.60819 14.0992 5.74752 14.0959C6.00039 14.0845 6.16227 14.0175 6.49116 13.8813L6.53909 13.8615C6.91849 13.7046 7.40861 13.5189 8.13464 13.5189C8.87008 13.5189 9.35948 13.7231 9.72037 13.8752C10.0534 14.0156 10.2133 14.0792 10.4834 14.0728L10.4907 14.0727C10.6923 14.0696 10.8904 13.9891 11.1381 13.7633C11.4046 13.5204 11.6555 13.1772 11.9626 12.7373L11.9638 12.7357C12.2313 12.3543 12.4318 11.9746 12.5733 11.6646C12.4273 11.5619 12.273 11.4401 12.1192 11.297C11.5041 10.7248 10.8824 9.79485 10.8674 8.43311L10.8674 8.4311C10.8572 7.26653 11.3496 6.40488 11.8343 5.84749C11.8825 5.79208 11.9308 5.73937 11.9789 5.68934C11.4696 5.35557 10.9236 5.29366 10.6393 5.27485Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-apple</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0228 4.43168C14.0438 4.46717 14.0442 4.51119 14.0238 4.54704C14.0034 4.58294 13.9653 4.60507 13.9241 4.60507H8.30612C8.30286 4.60507 8.29955 4.60493 8.2963 4.60461C8.19614 4.59607 8.09649 4.59166 8 4.59166C6.44508 4.59166 5.08772 5.64321 4.69917 7.14885C4.68751 7.19397 4.64973 7.22758 4.60355 7.23387C4.59837 7.23456 4.59313 7.23492 4.58799 7.23492C4.54742 7.23492 4.50932 7.21335 4.48866 7.17754L2.5181 3.76427C2.49447 3.72337 2.49832 3.67218 2.52784 3.63527C3.86532 1.96052 5.85984 1 8 1C9.23664 1 10.4522 1.32694 11.515 1.94551C12.5462 2.54562 13.4134 3.40534 14.0228 4.43168Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 10.6167C6.55745 10.6167 5.38388 9.4431 5.38388 8.00048C5.38388 6.55787 6.55745 5.38421 8 5.38421C9.44246 5.38421 10.6159 6.55787 10.6159 8.00048C10.6159 9.44305 9.44246 10.6167 8 10.6167Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.03439 11.3252C9.00589 11.2883 8.95806 11.2725 8.91294 11.2849C8.61655 11.3675 8.30942 11.4093 8 11.4093C6.68533 11.4093 5.47367 10.6382 4.91307 9.44484C4.91169 9.4419 4.91018 9.43906 4.90857 9.43621L2.09755 4.56715C2.07708 4.53157 2.03917 4.50977 1.99818 4.50977C1.95696 4.51 1.9184 4.53226 1.8982 4.56816C1.31062 5.61089 1 6.79777 1 8.00048C1 9.68772 1.60866 11.3175 2.71383 12.5896C3.80803 13.849 5.31443 14.6778 6.95565 14.9234C6.96134 14.9243 6.96703 14.9246 6.97268 14.9246C7.01321 14.9246 7.05131 14.903 7.07201 14.8672L9.04307 11.4529C9.06639 11.4125 9.06294 11.362 9.03439 11.3252Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.465 5.37081H14.4113C14.4585 5.37081 14.5009 5.39968 14.5181 5.44366C14.8379 6.25811 15 7.11832 15 8.00048C15 9.85642 14.2811 11.605 12.9757 12.9241C11.6714 14.2421 9.93246 14.9793 8.07941 15H8.07812C8.03741 15 7.99968 14.9784 7.97907 14.9432C7.95828 14.9076 7.95814 14.8636 7.97875 14.8279L10.7946 9.95035C10.7962 9.94755 10.7979 9.94484 10.7998 9.94218C11.1981 9.36956 11.4086 8.69815 11.4086 8.00048C11.4086 7.07889 11.0449 6.21487 10.3846 5.56751C10.3514 5.53492 10.3411 5.48534 10.3587 5.44219C10.3763 5.39904 10.4183 5.37081 10.465 5.37081Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-chrome-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50019 1.93783C7.84824 0.00483471 12.1294 1.15196 14.0624 4.50001C15.9954 7.84806 14.8482 12.1292 11.5002 14.0622C8.15214 15.9952 3.87101 14.8481 1.93801 11.5C0.00501782 8.15196 1.15214 3.87083 4.50019 1.93783ZM13.4542 5.49839L10.452 5.49837C11.5424 6.56769 11.8338 8.26397 11.078 9.66049L11.0792 9.66116L8.59007 13.9724C9.41475 13.8915 10.2358 13.6375 11.0002 13.1962C13.7062 11.6338 14.7349 8.28186 13.4542 5.49839ZM7.43459 13.9738L8.93933 11.3675C8.81644 11.4017 8.6917 11.4293 8.56571 11.4501C8.31959 11.4917 8.07155 11.5064 7.8258 11.4953C6.5146 11.4407 5.38974 10.6647 4.83771 9.55389L2.52418 5.54674C1.76575 7.24342 1.80376 9.26747 2.80404 11C3.81294 12.7475 5.56813 13.7954 7.43459 13.9738ZM5.00019 2.80386C4.22219 3.25304 3.58283 3.85015 3.09715 4.53915L4.58571 7.11742C4.94941 5.71465 6.16124 4.65352 7.64124 4.51397L7.68118 4.51033C7.83386 4.49628 7.98779 4.4922 8.14195 4.49837L12.873 4.49839C11.0969 2.0206 7.69573 1.24759 5.00019 2.80386ZM7.97256 5.49837C7.91118 5.4984 7.85031 5.50065 7.79004 5.50503L7.75173 5.50823C6.97838 5.58575 6.25223 6.02168 5.83395 6.74616C5.14359 7.94189 5.55328 9.47087 6.74901 10.1612C7.20527 10.4246 7.71005 10.5279 8.19824 10.4884C9.47385 10.375 10.4739 9.30347 10.4739 7.99837C10.4739 6.61811 9.35535 5.4991 7.97526 5.49837H7.97256Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-chrome</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.53218 5.5873C1.36714 5.70019 1.29592 5.88732 1.31854 6.06428L1.31854 9.93573C1.29592 10.1127 1.36714 10.2998 1.53218 10.4127L7.71758 14.6433C7.88776 14.7597 8.11195 14.7597 8.28213 14.6433L14.4675 10.4127C14.6286 10.3026 14.7003 10.1217 14.6826 9.94852V6.05151C14.7003 5.87837 14.6286 5.69748 14.4675 5.58731L8.28212 1.35671C8.11194 1.24031 7.88776 1.24031 7.71757 1.35671L1.53218 5.5873ZM2.43442 6.00001L7.57485 2.48413V5.45433L4.60573 7.48511L2.43442 6.00001ZM8.42485 5.45433V2.48413L13.5653 6.00001L11.394 7.48511L8.42485 5.45433ZM3.85291 8.00001L2.16854 9.15206V6.84796L3.85291 8.00001ZM13.8326 6.84696V9.15307L12.1468 8.00001L13.8326 6.84696ZM11.394 8.51492L13.5653 10L8.42485 13.5159V10.5457L11.394 8.51492ZM7.57485 10.5457V13.5159L2.43442 10L4.60573 8.51491L7.57485 10.5457ZM10.6412 8.00001L7.99985 9.80657L5.35855 8.00001L7.99985 6.19345L10.6412 8.00001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-codepen</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C4.13483 1 1 4.21349 1 8.17696C1 11.348 3.0055 14.0381 5.78742 14.9873C6.13683 15.0537 6.25 14.8312 6.25 14.6422V13.3061C4.30283 13.7403 3.89742 12.4592 3.89742 12.4592C3.57892 11.6297 3.11983 11.409 3.11983 11.409C2.48458 10.9634 3.16825 10.973 3.16825 10.973C3.87117 11.0232 4.241 11.7128 4.241 11.7128C4.86517 12.8097 5.87842 12.4927 6.278 12.3091C6.34042 11.8456 6.52183 11.5286 6.7225 11.3498C5.16792 11.1674 3.53342 10.5519 3.53342 7.80256C3.53342 7.01848 3.807 6.37854 4.25442 5.87615C4.18208 5.69493 3.94233 4.96467 4.32267 3.97664C4.32267 3.97664 4.91067 3.78406 6.24825 4.71228C6.8065 4.55319 7.405 4.47365 8 4.47066C8.595 4.47365 9.19408 4.55319 9.7535 4.71228C11.0899 3.78406 11.6768 3.97664 11.6768 3.97664C12.0577 4.96527 11.8179 5.69553 11.7456 5.87615C12.1947 6.37854 12.466 7.01908 12.466 7.80256C12.466 10.5591 10.8286 11.1662 9.26992 11.3438C9.52075 11.5663 9.75 12.0029 9.75 12.6727V14.6422C9.75 14.833 9.862 15.0573 10.2172 14.9867C12.9968 14.0364 15 11.3468 15 8.17696C15 4.21349 11.8658 1 8 1Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-github-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50039 14.5V12.6941H4.59414C3.87089 12.6941 3.28457 12.1078 3.28455 11.3846C3.28455 11.1308 3.07878 10.925 2.82496 10.925H2.09473V10.075H2.82496C2.88111 10.075 2.93644 10.0785 2.99073 10.0854C3.02585 10.0898 3.06053 10.0957 3.09473 10.1028C3.51724 10.1913 3.86489 10.4834 4.03033 10.8718C4.09742 11.0293 4.13455 11.2026 4.13455 11.3846C4.13456 11.6063 4.29153 11.7913 4.50039 11.8346C4.53066 11.8409 4.56201 11.8441 4.59414 11.8441H5.50039V11.4628C5.50039 11.3371 5.51221 11.2129 5.53515 11.0915C5.57033 10.9053 5.63168 10.7258 5.71663 10.5583C5.39228 10.4479 5.08476 10.3144 4.79775 10.1606L4.77682 10.1493C4.27921 9.88006 3.84399 9.54951 3.49058 9.17236C2.86084 8.5003 2.49093 7.68026 2.49093 6.79514C2.49093 5.95029 2.82795 5.16473 3.40626 4.51055L3.36157 4.29107C3.16545 3.32799 3.36011 2.32645 3.90269 1.50695C4.88369 1.44681 5.84838 1.779 6.58437 2.43038L6.93558 2.74123C7.27093 2.69292 7.61713 2.66764 7.97116 2.66764C8.36121 2.66764 8.74174 2.69833 9.10872 2.75668L9.47732 2.43045C10.2133 1.77907 11.178 1.44688 12.159 1.50701C12.7016 2.32652 12.8962 3.32806 12.7001 4.29114L12.6324 4.6235C13.1516 5.25433 13.4514 5.99837 13.4514 6.79514C13.4514 8.17549 12.5517 9.39757 11.17 10.1469C10.8833 10.3024 10.5759 10.4375 10.2515 10.5494C10.3621 10.7498 10.4379 10.9685 10.4747 11.1962C10.4917 11.3011 10.5004 11.4079 10.5004 11.5156V14.5H5.50039ZM7.07815 3.73101L6.61969 3.79705L5.92162 3.17922C5.51701 2.82113 5.01772 2.59517 4.48997 2.52415C4.2876 3.01671 4.23364 3.56208 4.34146 4.09153L4.48561 4.79943L4.15547 5.17288C3.71402 5.67224 3.49093 6.22919 3.49093 6.79514C3.49093 7.89333 4.38156 9.04753 6.03885 9.61164L7.12962 9.98291L6.60851 11.0106C6.53829 11.149 6.50039 11.3035 6.50039 11.4628V13.5H9.50039V11.5156C9.50039 11.3448 9.45674 11.179 9.37594 11.0325L8.80183 9.99188L9.9253 9.60416C11.5692 9.03682 12.4514 7.88849 12.4514 6.79514C12.4514 6.26048 12.2527 5.73566 11.8603 5.25899L11.5574 4.89099L11.7202 4.0916C11.828 3.56215 11.7741 3.01677 11.5717 2.52422C11.044 2.59524 10.5447 2.82119 10.1401 3.17929L9.41795 3.8184L8.9517 3.74427C8.63682 3.69421 8.3088 3.66764 7.97116 3.66764C7.6647 3.66764 7.36615 3.68953 7.07815 3.73101Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-github</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5662 9.0391H14.9633C14.9895 8.81289 15 8.58172 15 8.34541C15 7.23681 14.69 6.19698 14.1491 5.30153C14.7086 3.8739 14.6887 2.66224 13.9396 1.93809C13.2273 1.25711 11.3162 1.36766 9.15576 2.28633C8.99595 2.27472 8.8346 2.26875 8.67172 2.26875C5.70638 2.26875 3.21841 4.22822 2.53076 6.86845C3.46096 5.72486 4.43959 4.89573 5.74691 4.29191C5.62804 4.39887 4.93446 5.06098 4.8178 5.17308C1.37033 8.48243 0.283168 12.8054 1.45294 13.9289C2.34213 14.7826 3.95356 14.6384 5.80456 13.7679C6.66526 14.1888 7.63947 14.4262 8.67162 14.4262C11.451 14.4262 13.8065 12.7082 14.6598 10.3157H11.2365C10.7654 11.1501 9.8442 11.718 8.78689 11.718C7.72958 11.718 6.80825 11.1501 6.33721 10.3157C6.12782 9.93872 6.00744 9.50652 6.00744 9.04905V9.0391H11.5662ZM6.01254 7.43574C6.09106 6.09377 7.25309 5.02314 8.67162 5.02314C10.0901 5.02314 11.2522 6.09374 11.3307 7.43574H6.01254ZM13.9086 2.61293C14.3911 3.08112 14.3791 3.9425 13.9664 5.01774C13.2593 3.98258 12.2319 3.16688 11.0191 2.70112C12.3159 2.16718 13.3708 2.09645 13.9086 2.61293ZM2.34533 13.7158C1.72963 13.1245 1.91523 11.8832 2.7084 10.3878C3.20214 11.7182 4.16419 12.835 5.40444 13.5545C4.03109 14.1531 2.907 14.2547 2.34533 13.7158Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-ie-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.34101 7.31389C5.61303 7.00343 5.90178 6.69471 6.20618 6.39031L6.21573 6.38077H9.82136C9.61419 5.57584 8.8835 4.98109 8.01391 4.98109C7.92741 4.98109 7.8423 4.98697 7.75893 4.99836C8.13148 4.70069 8.50405 4.42796 8.87221 4.182C9.99838 4.54437 10.8133 5.60067 10.8133 6.84733V7.31389H5.34101Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.74372 14.9996C3.02134 15.0093 2.28332 14.8198 1.73174 14.2683C1.18016 13.7167 0.990659 12.9787 1.00035 12.2563C1.00999 11.538 1.21364 10.757 1.53993 9.97391C1.58589 9.86359 1.63467 9.75234 1.68618 9.64027C1.55291 9.12028 1.48205 8.57528 1.48205 8.01373C1.48205 4.40629 4.40646 1.48188 8.01391 1.48188C8.5755 1.48188 9.12054 1.55276 9.64057 1.68605C9.75254 1.63458 9.86369 1.58585 9.97391 1.53993C10.757 1.21364 11.538 1.00999 12.2563 1.00035C12.9787 0.990659 13.7167 1.18016 14.2683 1.73174C14.8198 2.28332 15.0093 3.02134 14.9996 3.74372C14.99 4.46198 14.7864 5.243 14.4601 6.02609C14.418 6.12698 14.3736 6.22866 14.327 6.33102C14.4697 6.86789 14.5458 7.43193 14.5458 8.01373C14.5458 8.35498 14.5196 8.69041 14.469 9.01805L14.4079 9.41342H6.20646C6.41363 10.2184 7.14431 10.8131 8.01391 10.8131C8.62418 10.8131 9.16601 10.5207 9.50728 10.0663L9.64726 9.87998H14.3144L14.045 10.5261C13.061 12.8857 10.7318 14.5456 8.01391 14.5456C7.43215 14.5456 6.86815 14.4695 6.33132 14.3268C6.22886 14.3736 6.12708 14.418 6.02609 14.4601C5.243 14.7864 4.46198 14.99 3.74372 14.9996ZM5.03857 13.8301C4.08492 13.3413 3.26722 12.6249 2.6572 11.7525C2.76124 11.4064 2.90313 11.0414 3.08047 10.6631C4.02537 12.4189 5.88026 13.6125 8.01391 13.6125C10.0856 13.6125 11.8954 12.4871 12.8637 10.8131H10.1004C9.58841 11.3852 8.84327 11.7462 8.01391 11.7462C6.46787 11.7462 5.21454 10.4929 5.21454 8.94686V8.4803H13.5935C13.6062 8.32653 13.6126 8.17093 13.6126 8.01373C13.6126 5.92145 12.4649 4.09723 10.7648 3.13627C11.1581 2.9676 11.535 2.83943 11.8885 2.75462C12.6994 3.35308 13.367 4.13463 13.8302 5.03826C14.1954 3.88522 14.1504 2.9335 13.6084 2.39156C12.333 1.11613 8.7881 2.59318 5.69064 5.69064C2.59318 8.7881 1.11613 12.333 2.39156 13.6084C2.93355 14.1504 3.88539 14.1954 5.03857 13.8301ZM8.28136 2.42128C8.19273 2.41711 8.10357 2.415 8.01391 2.415C4.92181 2.415 2.41517 4.92164 2.41517 8.01373C2.41517 8.10336 2.41728 8.1925 2.42145 8.28109C3.09224 7.19746 3.97858 6.08307 5.03082 5.03082C6.08316 3.97849 7.19765 3.09209 8.28136 2.42128Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-ie</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4763 9.77042C13.3516 9.3686 13.1814 8.89989 13.0085 8.45074L12.3787 6.87895C12.3787 6.8603 12.3873 6.55085 12.3873 6.39113C12.3873 3.70171 11.1177 1 7.99644 1C4.87517 1 3.606 3.70171 3.606 6.39022C3.606 6.54994 3.61419 6.85939 3.61464 6.87804L2.98438 8.44983C2.81191 8.89989 2.64172 9.3686 2.51658 9.76951C1.92136 11.6849 2.1143 12.4776 2.26129 12.4953C2.57619 12.5336 3.48996 11.0532 3.48996 11.0532C3.48996 11.9106 3.93137 13.0291 4.88609 13.8369C4.52887 13.947 4.09155 14.1163 3.80987 14.3238C3.55731 14.5108 3.58871 14.701 3.63421 14.7788C3.83444 15.116 7.06629 14.9941 7.99917 14.889C8.93251 14.9941 12.1644 15.1165 12.3641 14.7788C12.4096 14.7019 12.4415 14.5117 12.1885 14.3238C11.9072 14.1163 11.469 13.947 11.1118 13.8369C12.0674 13.0291 12.5079 11.9106 12.5079 11.0532C12.5079 11.0532 13.4181 12.5336 13.7343 12.4953C13.879 12.4785 14.072 11.6858 13.4763 9.77042Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-qq</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.55014C1 4.20298 3.26552 2.30005 6.06021 2.30005C8.58473 2.30005 10.6089 3.85282 10.99 5.88329C10.9678 5.88221 10.9496 5.88122 10.9334 5.88034C10.8834 5.87761 10.8529 5.87594 10.7832 5.87594C8.23432 5.87594 6.16822 7.61153 6.16822 9.75217C6.16822 10.1132 6.22806 10.4623 6.3381 10.7939C6.24606 10.798 6.15351 10.8005 6.06021 10.8005C5.48273 10.8005 4.92529 10.7173 4.40842 10.5675C4.36138 10.553 4.31156 10.5453 4.25971 10.5453C4.16247 10.5453 4.07436 10.5751 3.99119 10.6234L2.88316 11.268C2.85235 11.2861 2.82256 11.2996 2.78579 11.2996C2.69261 11.2996 2.61718 11.2237 2.61718 11.1297C2.61718 11.098 2.62656 11.0663 2.63575 11.0354C2.63873 11.0254 2.64169 11.0154 2.64431 11.0055C2.64974 10.985 2.75058 10.6058 2.83294 10.2961L2.87225 10.1482C2.88214 10.112 2.89013 10.0776 2.89013 10.04C2.89013 9.92547 2.83409 9.82443 2.74839 9.76282C1.68168 8.98377 1 7.83098 1 6.55014ZM3.77516 5.1902C3.77516 5.52312 4.04305 5.79315 4.37368 5.79315C4.70381 5.79315 4.97169 5.52312 4.97169 5.1902C4.97169 4.85715 4.70381 4.58725 4.37368 4.58725C4.04305 4.58725 3.77516 4.85715 3.77516 5.1902ZM7.14872 5.1902C7.14872 5.52312 7.4166 5.79303 7.74698 5.79303C8.07736 5.79303 8.34525 5.52312 8.34525 5.1902C8.34525 4.85715 8.07736 4.58725 7.74698 4.58725C7.4166 4.58725 7.14872 4.85715 7.14872 5.1902Z" fill="currentColor" fill-opacity="0.9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 9.7521C15 10.8193 14.432 11.7799 13.5431 12.4293C13.4716 12.4806 13.4249 12.565 13.4249 12.6601C13.4249 12.6914 13.4316 12.7203 13.4397 12.7504C13.5109 13.0173 13.6245 13.4448 13.6298 13.4648C13.632 13.4734 13.6346 13.482 13.6372 13.4908C13.6447 13.5162 13.6525 13.5422 13.6525 13.5685C13.6525 13.6466 13.5896 13.7101 13.5119 13.7101C13.4813 13.7101 13.4564 13.6984 13.4305 13.6837L12.5075 13.1464C12.4381 13.106 12.3645 13.0812 12.2837 13.0812C12.2404 13.0812 12.1988 13.0879 12.1597 13.0999C11.7289 13.2247 11.2642 13.294 10.7831 13.294C8.45434 13.294 6.56624 11.7083 6.56624 9.7521C6.56624 7.79592 8.45434 6.21044 10.7831 6.21044C13.1122 6.21044 15 7.79592 15 9.7521ZM8.85103 8.61884C8.85103 8.91182 9.08683 9.14927 9.37754 9.14927C9.66836 9.14927 9.90404 8.91182 9.90404 8.61884C9.90404 8.32573 9.66836 8.08815 9.37754 8.08815C9.08683 8.08815 8.85103 8.32573 8.85103 8.61884ZM11.6626 8.61884C11.6626 8.91182 11.898 9.14927 12.1888 9.14927C12.4797 9.14927 12.7153 8.91182 12.7153 8.61884C12.7153 8.32573 12.4797 8.08815 12.1888 8.08815C11.898 8.08815 11.6626 8.32573 11.6626 8.61884Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-wechat</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2529 3.95905C11.623 4.34224 11.9247 4.77013 12.149 5.23125C12.4506 5.85106 12.6036 6.50835 12.6036 7.18432C12.6036 7.29806 12.5985 7.41153 12.5897 7.52475C12.5862 7.5206 12.5827 7.51641 12.5792 7.51223C12.5706 7.50189 12.562 7.49158 12.5524 7.48186C12.2833 7.21292 11.8727 7.17569 11.5621 7.36581C11.5626 7.35453 11.5632 7.34324 11.5638 7.33195C11.566 7.2882 11.5682 7.2444 11.5682 7.20068C11.5682 6.66962 11.4476 6.15259 11.2098 5.66365C11.0305 5.2954 10.7886 4.95239 10.4908 4.64429C9.72201 3.84918 8.63902 3.33615 7.44127 3.2C7.22372 3.17527 7.00861 3.16278 6.80201 3.16278C6.6052 3.16278 6.39924 3.17437 6.18993 3.19717C4.98651 3.32791 3.89721 3.83823 3.12244 4.63412C2.82336 4.94144 2.58018 5.28381 2.39959 5.65116C2.15783 6.14332 2.0352 6.66459 2.0352 7.20068C2.0352 7.89133 2.24709 8.57464 2.64767 9.1768C2.81782 9.43274 3.0203 9.67141 3.25099 9.89025C3.33317 9.96818 3.41844 10.0438 3.5077 10.1164C3.56579 10.1638 3.62118 10.2067 3.67669 10.2479C3.78579 10.3273 3.85122 10.4565 3.85122 10.5933C3.85122 10.6427 3.84079 10.6869 3.83036 10.7236C3.80575 10.8179 3.77664 10.9291 3.74766 11.0392C3.7385 11.0741 3.72936 11.1089 3.7204 11.1431C3.70378 11.2064 3.68778 11.2673 3.67347 11.322C3.66198 11.3661 3.65166 11.4053 3.64287 11.4387C3.63737 11.4596 3.63247 11.4783 3.62826 11.4944L3.58885 11.6532C3.58885 11.692 3.61924 11.7235 3.6566 11.7235C3.66793 11.7235 3.68043 11.7188 3.70245 11.7059L3.70361 11.7052L4.76612 11.079C4.77326 11.0748 4.7804 11.0713 4.78753 11.0679C4.79212 11.0656 4.7967 11.0634 4.80129 11.061C4.89145 11.0143 4.98058 10.9899 5.07242 10.9899C5.13115 10.9899 5.18873 10.9987 5.24283 11.0161C5.50907 11.0939 5.78458 11.1509 6.06319 11.188C6.07587 11.1897 6.08855 11.1914 6.10123 11.1932C6.13079 11.1973 6.16036 11.2015 6.18993 11.2047C6.39293 11.2271 6.59876 11.2385 6.80201 11.2385C7.00887 11.2385 7.22385 11.2258 7.44127 11.2011C7.79947 11.1604 8.14609 11.0848 8.47789 10.9794C8.44865 11.2853 8.59574 11.5945 8.87989 11.757C8.92755 11.7842 8.97688 11.806 9.02711 11.8226C8.56277 11.9893 8.07357 12.1065 7.56492 12.1644C7.30641 12.1937 7.04957 12.2086 6.80201 12.2086C6.55908 12.2086 6.31307 12.1952 6.07066 12.1685C5.6979 12.1275 5.34407 12.0622 4.98767 11.9599L3.33162 12.7911C3.32536 12.7955 3.31886 12.7992 3.31232 12.8029C3.30931 12.8046 3.30629 12.8063 3.30329 12.8081C3.30166 12.809 3.29994 12.8097 3.29828 12.8106C3.29784 12.8108 3.2974 12.811 3.29698 12.8113C3.23167 12.8488 3.15709 12.8718 3.07646 12.8718C2.84526 12.8718 2.65733 12.6952 2.6344 12.4702C2.6339 12.4648 2.63318 12.4595 2.63247 12.4541C2.63118 12.4445 2.6299 12.435 2.6299 12.4253C2.6299 12.4164 2.63107 12.4078 2.63225 12.3993C2.63298 12.394 2.6337 12.3887 2.63415 12.3834C2.63443 12.3804 2.63471 12.3775 2.63499 12.3745C2.63643 12.359 2.63786 12.3436 2.6411 12.3287C2.64507 12.3108 2.65148 12.294 2.65792 12.2771C2.65858 12.2753 2.65925 12.2736 2.65991 12.2719L2.83392 10.9028V10.902C2.44841 10.5602 2.02954 10.075 1.77334 9.6897C1.2674 8.92911 1 8.0629 1 7.18432C1 6.50204 1.1556 5.8396 1.46215 5.21554C1.68795 4.75571 1.99102 4.32872 2.36301 3.94643C3.30535 2.97833 4.62238 2.35826 6.07156 2.20087C6.32054 2.17369 6.56617 2.16003 6.80201 2.16003C7.04931 2.16003 7.30589 2.17498 7.56492 2.20434C9.00753 2.36831 10.3172 2.9916 11.2529 3.95905Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.3472 9.0505C11.0323 8.73544 11.0323 8.2246 11.3472 7.90955C11.6622 7.59449 12.1731 7.59449 12.4881 7.90955C12.5909 8.01246 12.66 8.13611 12.6958 8.26698C12.7034 8.29519 12.7095 8.32365 12.7141 8.35225C12.7183 8.37814 12.7211 8.40428 12.7227 8.43056C12.8158 8.89632 13.0426 9.34057 13.4038 9.70161C13.4222 9.72002 13.4408 9.73793 13.4596 9.75557C13.4691 9.76214 13.4781 9.76936 13.4866 9.77786C13.4914 9.78275 13.4959 9.78778 13.5 9.79306C13.5615 9.86879 13.557 9.98021 13.4866 10.0507C13.4111 10.126 13.2892 10.126 13.2137 10.0507C13.1884 10.0232 13.1627 9.99592 13.136 9.96939C12.7667 9.60011 12.3105 9.37122 11.833 9.28222C11.8168 9.28054 11.8006 9.27822 11.7843 9.27552C11.7682 9.27281 11.7521 9.26972 11.7362 9.26599C11.5937 9.23314 11.4582 9.16153 11.3472 9.0505Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.7637 10.1909C14.4488 9.87587 13.9378 9.87587 13.6228 10.1909C13.5117 10.302 13.4401 10.4373 13.4073 10.5799C13.4037 10.5959 13.4004 10.612 13.3977 10.6281C13.3952 10.6443 13.3927 10.6605 13.391 10.6766C13.302 11.1541 13.0731 11.6105 12.7037 11.9798C12.6772 12.0064 12.65 12.0322 12.6226 12.0572L12.6227 12.0574C12.5472 12.1327 12.5472 12.2548 12.6227 12.3301C12.693 12.4006 12.8045 12.4051 12.8803 12.3438C12.8853 12.3396 12.8905 12.335 12.8955 12.3301C12.9039 12.3217 12.9111 12.3127 12.9178 12.3032C12.9353 12.2845 12.9532 12.2658 12.9716 12.2474C13.3327 11.8864 13.7769 11.6594 14.2428 11.5666C14.269 11.5649 14.2951 11.5621 14.321 11.5577C14.3497 11.5533 14.3781 11.547 14.4063 11.5394C14.5373 11.5036 14.6611 11.4345 14.7637 11.3319C15.0788 11.0168 15.0788 10.506 14.7637 10.1909Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.3432 11.4664C10.2726 11.5367 10.2682 11.6481 10.3295 11.7239C10.3336 11.7291 10.3381 11.7342 10.3432 11.7392C10.3515 11.7476 10.3607 11.7548 10.3701 11.7615C10.3889 11.7789 10.4076 11.7971 10.4259 11.8153C10.7869 12.1765 11.0139 12.6207 11.107 13.0865C11.1085 13.1126 11.1114 13.1388 11.1157 13.1648C11.1202 13.1933 11.1263 13.2217 11.1339 13.2499C11.1696 13.3809 11.2387 13.5044 11.3415 13.6074C11.6566 13.9224 12.1674 13.9224 12.4824 13.6074C12.7974 13.2923 12.7974 12.7815 12.4824 12.4664C12.3713 12.3554 12.2358 12.2838 12.0934 12.2509C12.0775 12.2473 12.0614 12.2441 12.0453 12.2414C12.0292 12.2387 12.013 12.2365 11.9965 12.2347C11.5192 12.1458 11.0628 11.9168 10.6936 11.5475C10.667 11.521 10.6411 11.4938 10.6161 11.4662L10.616 11.4664C10.5782 11.4286 10.5289 11.4098 10.4796 11.4098C10.4301 11.4098 10.3808 11.4286 10.3432 11.4664Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.4318 10.889C10.4345 10.8727 10.4367 10.8565 10.4385 10.8402C10.5277 10.363 10.7566 9.90652 11.1257 9.53723C11.1524 9.5107 11.1796 9.48481 11.2071 9.45969L11.207 9.45956C11.2823 9.38421 11.2823 9.26211 11.207 9.18676C11.1365 9.1163 11.025 9.11179 10.9494 9.17323C10.9441 9.17748 10.9391 9.18186 10.9342 9.18676C10.9258 9.19526 10.9185 9.20427 10.9119 9.21368C10.8943 9.23261 10.8763 9.25103 10.8579 9.26958C10.497 9.63049 10.0526 9.85744 9.58675 9.95057C9.56074 9.95211 9.53459 9.95495 9.50844 9.9592C9.47985 9.96371 9.45138 9.96989 9.42343 9.97762C9.29244 10.0133 9.16865 10.0823 9.06587 10.1851C8.75068 10.5002 8.75068 11.011 9.06587 11.3262C9.38092 11.6413 9.89176 11.6413 10.2068 11.3262C10.3178 11.215 10.3896 11.0795 10.4224 10.9372C10.426 10.9212 10.4293 10.9051 10.4318 10.889Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-wecom</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2.50403H2.5V7.50403H7.5V2.50403Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.5 2.50403H8.5V7.50403H13.5V2.50403Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.5 8.50403H13.5V13.504H8.5V8.50403Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7.5 8.50403H2.5V13.504H7.5V8.50403Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-windows-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H13ZM7.5 3H3L3 7.5H7.5V3ZM8.5 13H13V8.5H8.5V13ZM7.5 8.5H3L3 13H7.5V8.5ZM8.5 7.5H13V3H8.5V7.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logo-windows</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3V5H10V2.5C10 2.22386 9.77614 2 9.5 2H1.5C1.22386 2 1 2.22386 1 2.5V13.5C1 13.7761 1.22386 14 1.5 14H9.5C9.77614 14 10 13.7761 10 13.5V11H9V13H2V3H9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.2316 5.25423L13.4774 7.50001L5.99994 7.49999L5.99994 8.49999L13.4774 8.50001L11.2316 10.7458L11.9387 11.4529L15.038 8.35356C15.2333 8.1583 15.2333 7.84172 15.038 7.64646L11.9387 4.54712L11.2316 5.25423Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">logout</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49902 3.9989C1.49902 3.44662 1.94674 2.9989 2.49902 2.9989H13.499C14.0513 2.9989 14.499 3.44662 14.499 3.9989V11.9989C14.499 12.5512 14.0513 12.9989 13.499 12.9989H2.49902C1.94674 12.9989 1.49902 12.5512 1.49902 11.9989V3.9989ZM13.0976 3.9989H2.90041L7.99902 7.39798L13.0976 3.9989ZM2.49902 4.93316L2.49902 11.9989H13.499V4.93316L7.99902 8.59983L2.49902 4.93316Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">mail</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99951 3.98621L13.9989 4.00001L14.0001 3.00001L2.00066 2.98621L1.99951 3.98621Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7.50009 8.50001H13.9995V7.50001H7.50009V8.50001Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.99951 12.9862L13.9989 13L14.0001 12L2.00066 11.9862L1.99951 12.9862Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5.96675 7.59308C6.23342 7.79308 6.23342 8.19308 5.96675 8.39308L2.80009 10.7681C2.47047 11.0153 2.00009 10.7801 2.00009 10.3681L2.00009 5.61808C2.00009 5.20605 2.47047 4.97086 2.80009 5.21808L5.96675 7.59308ZM3.00009 6.61808L3.00009 9.36808L4.83342 7.99308L3.00009 6.61808Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">menu-fold</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0005 12.0138L2.00115 12L2 13L13.9994 13.0138L14.0005 12.0138Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.49997 7.5L2.00058 7.5L2.00058 8.5L8.49997 8.5V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.0005 3.0138L2.00115 3L2 4L13.9994 4.0138L14.0005 3.0138Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.0333 8.40693C9.76663 8.20693 9.76663 7.80693 10.0333 7.60693L13.2 5.23193C13.5296 4.98472 14 5.21991 14 5.63193L14 10.3819C14 10.794 13.5296 11.0291 13.2 10.7819L10.0333 8.40693ZM13 9.38193L13 6.63193L11.1666 8.00693L13 9.38193Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">menu-unfold</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.5 8.5H4.5V7.5H11.5V8.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">minus-circle-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8.5H11.5V7.5H4.5V8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">minus-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM11 8.5H5V7.5H11V8.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">minus-rectangle-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8.5H11V7.5H5V8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">minus-rectangle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50024 1H8.50024V15H7.50024V1Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.7196 12.4367C14.7504 12.6777 14.6034 12.906 14.3712 12.9777C14.2991 13 14.1963 13 13.9907 13H10.6501C10.5106 13 10.4409 13 10.3834 12.9862C10.2006 12.9423 10.0578 12.7995 10.0139 12.6167C10.0001 12.5592 10.0001 12.4895 10.0001 12.35V5.0008C10.0001 4.47031 10.0001 4.20506 10.041 4.11027C10.1768 3.79537 10.5821 3.70757 10.8361 3.93804C10.9126 4.00742 11.0223 4.24889 11.2418 4.73183L14.5824 12.081C14.6675 12.2682 14.71 12.3618 14.7196 12.4367ZM11.0001 12H13.4471L11.0001 6.61661V12Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.62907 12.9777C1.70117 13 1.80398 13 2.00959 13H5.35014C5.48959 13 5.55932 13 5.61686 12.9862C5.79969 12.9423 5.94243 12.7995 5.98633 12.6167C6.00014 12.5592 6.00014 12.4895 6.00014 12.35V5.0008C6.00014 4.47031 6.00014 4.20506 5.95925 4.11027C5.82341 3.79537 5.4181 3.70757 5.16413 3.93804C5.08768 4.00742 4.97792 4.24889 4.7584 4.73183L1.41786 12.081C1.33277 12.2682 1.29023 12.3618 1.28067 12.4367C1.24989 12.6777 1.39688 12.906 1.62907 12.9777ZM5.00014 6.61661V12H2.55315L5.00014 6.61661Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">mirror</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13H9.5V12H6.5V13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5 1.5C4.44772 1.5 4 1.94772 4 2.5V14C4 14.5523 4.44772 15 5 15H11C11.5523 15 12 14.5523 12 14V2.5C12 1.94772 11.5523 1.5 11 1.5H5ZM11 2.5V14H5V2.5H11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 4V13H3V4H2Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13 4V13H14V4H13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">mobile-vibrate</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13H9.5V12H6.5V13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.5 2.5C3.5 1.94772 3.94772 1.5 4.5 1.5H11.5C12.0523 1.5 12.5 1.94772 12.5 2.5V14C12.5 14.5523 12.0523 15 11.5 15H4.5C3.94772 15 3.5 14.5523 3.5 14V2.5ZM4.5 2.5L4.5 14H11.5V2.5H4.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">mobile</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 7.5H8.5V8.5H10.5V9.5H8.5V12H7.5V9.5H5.5V8.5H7.5V7.5H5.5V6.5H6.95969L5.60956 4.81235L6.39043 4.18765L8 6.19961L9.60956 4.18765L10.3904 4.81235L9.04031 6.5H10.5V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">money-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 4C8.55225 4 9 3.55228 9 3C9 2.44772 8.55225 2 8 2C7.44775 2 7 2.44772 7 3C7 3.55228 7.44775 4 8 4Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8C7 8.55228 7.44775 9 8 9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 13C9 13.5523 8.55225 14 8 14C7.44775 14 7 13.5523 7 13C7 12.4477 7.44775 12 8 12C8.55225 12 9 12.4477 9 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">more</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1C4.44772 1 4 1.44772 4 2C4 2.55228 4.44772 3 5 3C5.55228 3 6 2.55228 6 2C6 1.44772 5.55228 1 5 1Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11 1C10.4477 1 10 1.44772 10 2C10 2.55228 10.4477 3 11 3C11.5523 3 12 2.55228 12 2C12 1.44772 11.5523 1 11 1Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4 6C4 5.44772 4.44772 5 5 5C5.55228 5 6 5.44772 6 6C6 6.55228 5.55228 7 5 7C4.44772 7 4 6.55228 4 6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4 10C4 9.44771 4.44772 9 5 9C5.55228 9 6 9.44771 6 10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 10C10 9.44771 10.4477 9 11 9C11.5523 9 12 9.44771 12 10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11 13C10.4477 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">move</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2H13L13 14H12L12 2Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.8512 7.58022C11.1557 7.77724 11.1557 8.22276 10.8512 8.41979L3.77162 13.0007C3.43894 13.216 3 12.9772 3 12.5809V3.41907C3 3.02282 3.43895 2.78402 3.77163 2.99929L10.8512 7.58022ZM4 4.33814L4 11.6619L9.65923 8L4 4.33814Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">next</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49993 2.02746V1H7.49993V2.02746C5.24996 2.27619 3.49993 4.18372 3.49993 6.5V11L2.59993 12.2C2.35272 12.5296 2.58791 13 2.99993 13H5.54994C5.78158 14.1411 6.79045 15 7.99993 15C9.20941 15 10.2183 14.1411 10.4499 13H12.9999C13.412 13 13.6471 12.5296 13.3999 12.2L12.4999 11V6.5C12.4999 4.18372 10.7499 2.27619 8.49993 2.02746Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">notification-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49993 2.02746V1H7.49993V2.02746C5.24996 2.27619 3.49993 4.18372 3.49993 6.5V11L2.59993 12.2C2.35272 12.5296 2.58791 13 2.99993 13H5.54994C5.78158 14.1411 6.79045 15 7.99993 15C9.20941 15 10.2183 14.1411 10.4499 13H12.9999C13.412 13 13.6471 12.5296 13.3999 12.2L12.4999 11V6.5C12.4999 4.18372 10.7499 2.27619 8.49993 2.02746ZM4.49993 11.3333V6.5C4.49993 4.567 6.06693 3 7.99993 3C9.93293 3 11.4999 4.567 11.4999 6.5V11.3333L11.9999 12H3.99993L4.49993 11.3333ZM7.99993 14C7.34682 14 6.7912 13.5826 6.58528 13H9.41458C9.20866 13.5826 8.65304 14 7.99993 14Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">notification</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 8.49999V15H8.5V8.5L13.1566 8.5L11.4651 10.1915L12.1722 10.8986L14.7172 8.35356C14.9125 8.15829 14.9125 7.84171 14.7172 7.64645L12.1722 5.10141L11.4651 5.80852L13.1566 7.5L8.5 7.5V1H7.5V7.49999L2.84586 7.5L4.53734 5.80852L3.83023 5.10141L1.28519 7.64645C1.08993 7.84171 1.08993 8.15829 1.28519 8.35355L3.83023 10.8986L4.53734 10.1915L2.84585 8.5L7.5 8.49999Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">order-adjustment-column</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13.5L12 3.70712L14.1464 5.85357L14.8535 5.14646L11.9048 2.19768C11.5709 1.8638 11 2.10026 11 2.57244L11 13.5H12Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 13.5L2 13.5V12.5L9.5 12.5V13.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 8.50002L9.5 8.50002V7.50002L2 7.50002V8.50002Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 3.50002L2 3.50002V2.50002L9.5 2.50002V3.50002Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">order-ascending</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 2.5H2V3.5L9.5 3.5V2.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 2.5L12 12.2929L14.1464 10.1464L14.8535 10.8536L11.9048 13.8023C11.5709 14.1362 11 13.8998 11 13.4276L11 2.5H12Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 7.5H9.5V8.5H2V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 12.5H2V13.5H9.5V12.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">order-descending</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4053 4.45952L11.486 3.54028L7.02642 7.9999L11.486 12.4595L12.4053 11.5403L8.86489 7.9999L12.4053 4.45952ZM4.79568 4L4.79568 12L6.09568 12L6.09568 4L4.79568 4Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">page-first</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.59473 11.5405L4.51397 12.4597L8.97358 8.00009L4.51397 3.54047L3.59473 4.45971L7.13511 8.00009L3.59473 11.5405ZM11.2046 12L11.2046 3.99999L9.90459 3.99999L9.90459 12H11.2046Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">page-last</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM6 5V11H7V5H6ZM10 5.00001H9V11H10V5.00001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">pause-circle-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6.05352 2C5.85291 2 5.66557 2.10026 5.55429 2.26718L4.73241 3.5H2.01C1.72834 3.5 1.5 3.72833 1.5 4.01V12.49C1.5 12.7717 1.72833 13 2.01 13H13.99C14.2716 13 14.5 12.7717 14.5 12.49V4.01C14.5 3.72834 14.2717 3.5 13.99 3.5H11.2676L10.4457 2.26718C10.3344 2.10026 10.1471 2 9.94648 2H6.05352ZM6.26759 3H9.73241L10.7324 4.5H13.5V12H2.5V4.5H5.26759L6.26759 3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">photo</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5179 1.33919C12.2975 1.11875 11.9449 1.10385 11.7067 1.30492L7.66167 4.71867L6.89055 3.94755C6.65623 3.71324 6.27633 3.71324 6.04202 3.94755L3.93734 6.05223C3.70302 6.28655 3.70302 6.66645 3.93734 6.90076L6.16478 9.12821L2.05713 13.2359L2.76424 13.943L6.87189 9.83532L9.09922 12.0626C9.33353 12.297 9.71343 12.297 9.94774 12.0626L12.0524 9.95796C12.2867 9.72364 12.2867 9.34375 12.0524 9.10943L11.2813 8.33831L14.6951 4.29331C14.8961 4.05506 14.8812 3.70252 14.6608 3.48208L12.5179 1.33919Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">pin-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5179 1.33919C12.2975 1.11875 11.9449 1.10385 11.7067 1.30492L7.66167 4.71867L6.89055 3.94755C6.65623 3.71324 6.27633 3.71324 6.04202 3.94755L3.93734 6.05223C3.70302 6.28655 3.70302 6.66645 3.93734 6.90076L6.16478 9.12821L2.05713 13.2359L2.76424 13.943L6.87189 9.83532L9.09922 12.0626C9.33353 12.297 9.71343 12.297 9.94774 12.0626L12.0524 9.95796C12.2867 9.72364 12.2867 9.34375 12.0524 9.10943L11.2813 8.33831L14.6951 4.29331C14.8961 4.05506 14.8812 3.70252 14.6608 3.48208L12.5179 1.33919ZM12.0707 2.30621L13.6938 3.92927L9.92441 8.39563L11.0625 9.53369L9.52348 11.0727L4.92729 6.4765L6.46628 4.9375L7.60435 6.07557L12.0707 2.30621Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">pin</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM10.9844 8.22791L6.51038 10.811C6.33493 10.9123 6.11561 10.7857 6.11561 10.5831L6.11561 5.41691C6.11561 5.21432 6.33493 5.0877 6.51038 5.18899L10.9844 7.77207C11.1599 7.87337 11.1599 8.12661 10.9844 8.22791Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">play-circle-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M11.55 7.74017C11.75 7.85564 11.75 8.14432 11.55 8.25979L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445L6 5.0555C6 4.82456 6.25 4.68022 6.45 4.79569L11.55 7.74017ZM7 6.26793V9.73204L10 7.99998L7 6.26793Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">play-circle-stroke</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M11.55 7.74017C11.75 7.85564 11.75 8.14432 11.55 8.25979L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445L6 5.0555C6 4.82456 6.25 4.68022 6.45 4.79569L11.55 7.74017Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">play-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.55 7.74018C11.75 7.85565 11.75 8.14433 11.55 8.2598L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445V5.05551C6 4.82457 6.25 4.68024 6.45 4.79571L11.55 7.74018Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">play</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 1V8H8.5V1H7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.5 8.50007C1.5 6.00518 2.90561 3.83859 4.96813 2.74901L5.46865 3.61594C3.70487 4.53193 2.5 6.3753 2.5 8.50008C2.5 11.5376 4.96243 14.0001 8 14.0001C11.0376 14.0001 13.5 11.5376 13.5 8.50008C13.5 6.37522 12.295 4.53179 10.5311 3.61583L11.0317 2.7489C13.0943 3.83844 14.5 6.0051 14.5 8.50008C14.5 12.0899 11.5898 15.0001 8 15.0001C4.41015 15.0001 1.5 12.0899 1.5 8.50007Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">poweroff</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M7.5 1.5V5H8.5V1.5H7.5ZM6.23223 5.52513L2.6967 1.98959L1.98959 2.6967L5.52513 6.23223L6.23223 5.52513ZM9.76777 5.52513L13.3033 1.98959L14.0104 2.6967L10.4749 6.23223L9.76777 5.52513ZM9 8C9 8.55229 8.55229 9 8 9C7.62986 9 7.30669 8.7989 7.13378 8.5H1.5V7.5H7.13378C7.30669 7.2011 7.62986 7 8 7C8.55229 7 9 7.44772 9 8ZM5.52513 9.76777L1.98959 13.3033L2.6967 14.0104L6.23223 10.4749L5.52513 9.76777ZM10.4749 9.76777L14.0104 13.3033L13.3033 14.0104L9.76777 10.4749L10.4749 9.76777ZM14.5 7.5H11V8.5H14.5V7.5ZM7.5 14.5V11H8.5V14.5H7.5Z" fill="currentColor"/>
</g>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">precise-monitor</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14H3V2H4L4 14Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5.14876 8.41978C4.84426 8.22276 4.84426 7.77724 5.14876 7.58021L12.2284 2.99929C12.5611 2.78402 13 3.02282 13 3.41907V12.5809C13 12.9772 12.5611 13.216 12.2284 13.0007L5.14876 8.41978ZM12 11.6619V4.33814L6.34077 8L12 11.6619Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">previous</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99902 1.9989V3.9989H2.99902C2.44288 3.9989 1.99902 4.44276 1.99902 4.9989V9.9989C1.99902 10.555 2.44288 10.9989 2.99902 10.9989H3.99902V13.9989H11.999V10.9989H12.999C13.5552 10.9989 13.999 10.555 13.999 9.9989V4.9989C13.999 4.44276 13.5552 3.9989 12.999 3.9989H11.999V1.9989H3.99902ZM10.999 3.9989H4.99902V2.9989H10.999V3.9989ZM2.99902 4.9989H12.999V9.9989H11.999V7.9989H3.99902V9.9989H2.99902V4.9989ZM4.99902 12.9989V8.9989H10.999V12.9989H4.99902Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">print</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 4H4V6H6V4Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.5 2C2.22386 2 2 2.22386 2 2.5V7.5C2 7.77614 2.22386 8 2.5 8H7.5C7.77614 8 8 7.77614 8 7.5V2.5C8 2.22386 7.77614 2 7.5 2H2.5ZM3 3H7V7H3V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.5 2C10.2239 2 10 2.22386 10 2.5V5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2H10.5ZM11 5V3H13V5H11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 10.5C10 10.2239 10.2239 10 10.5 10H13.5C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H10.5C10.2239 14 10 13.7761 10 13.5V10.5ZM11 13H13V11H11V13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.5 10C2.22386 10 2 10.2239 2 10.5V13.5C2 13.7761 2.22386 14 2.5 14H5.5C5.77614 14 6 13.7761 6 13.5V10.5C6 10.2239 5.77614 10 5.5 10H2.5ZM3 11H5V13H3V11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14 7.5L10 7.5V8.5L14 8.5V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.5 11V14H7.5V11H8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.5 10V9H7.5V10H8.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">qrcode</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3H13V12H14V3C14 2.44772 13.5523 2 13 2H4V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6.58325 9.41669V12.3334L7.58325 12.3334V9.41669H10.3334V8.41669H7.58325V5.66669H6.58325V8.41669H3.66675V9.41669H6.58325Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 13C2 13.5523 2.44772 14 3 14L11 14C11.5523 14 12 13.5523 12 13L12 5C12 4.44772 11.5523 4 11 4H3C2.44772 4 2 4.44772 2 5V13ZM3 5L11 5L11 13L3 13L3 5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">queue</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13C2 13.5523 2.44772 14 3 14ZM3 13L3 3L13 3L13 13L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>
    
    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">rectangle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 2.71134C10.8965 2.71134 13.2534 5.0736 13.2534 7.99868H14.2148C14.2148 4.54763 11.4324 1.75 8.00016 1.75C5.76382 1.75 3.80336 2.93771 2.7087 4.72001L2.7087 2.64252H1.75V5.74894C1.75 6.02508 1.97386 6.24894 2.25 6.24894L5.33676 6.24894V5.28498L3.49045 5.28498C4.40906 3.74211 6.08692 2.71134 8.00016 2.71134Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.78554 7.99863H2.74687C2.74687 10.9237 5.10379 13.286 8.00015 13.286C9.91339 13.286 11.5912 12.2553 12.5099 10.7124H10.6632V9.74843H13.75C14.0261 9.74843 14.25 9.97228 14.25 10.2484V13.3548H13.2913V11.2779C12.1966 13.0599 10.2363 14.2474 8.00015 14.2474C4.56792 14.2474 1.78554 11.4497 1.78554 7.99863Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">refresh</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5H2.5C1.94772 5.5 1.5 5.94772 1.5 6.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5H6.5C5.94772 1.5 5.5 1.94772 5.5 2.5V5.5ZM6.5 2.5H13.5V9.5H10.5V6.5C10.5 5.94772 10.0523 5.5 9.5 5.5H6.5V2.5ZM9.5 10.5V13.5H2.5V6.5H5.5V9.5C5.5 10.0523 5.94772 10.5 6.5 10.5H9.5ZM9.5 9.5H6.5V6.5H9.5V9.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>
    
    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">relativity</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 7.34998H12.5V8.64998H3.5V7.34998Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">remove</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.20718 5.00004L5.85363 3.35359L5.14652 2.64648L2.64652 5.14648C2.45126 5.34175 2.45126 5.65833 2.64652 5.85359L5.14652 8.35359L5.85363 7.64648L4.20718 6.00004H10.0001C11.6569 6.00004 13.0001 7.34318 13.0001 9.00004C13.0001 10.6569 11.6569 12 10.0001 12H5.00008V13H10.0001C12.2092 13 14.0001 11.2092 14.0001 9.00004C14.0001 6.7909 12.2092 5.00004 10.0001 5.00004H4.20718Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">rollback</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0859 5.00004L10.4394 3.35359L11.1465 2.64648L13.6465 5.14648C13.8418 5.34175 13.8418 5.65833 13.6465 5.85359L11.1465 8.35359L10.4394 7.64648L12.0859 6.00004H6.29297C4.63611 6.00004 3.29297 7.34318 3.29297 9.00004C3.29297 10.6569 4.63611 12 6.29297 12H11.293V13H6.29297C4.08383 13 2.29297 11.2092 2.29297 9.00004C2.29297 6.7909 4.08383 5.00004 6.29297 5.00004H12.0859Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">rollfront</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M4.5 5H11.5V6H4.5V5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 7.5H4.5V8.5H9V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 2C2.44772 2 2 2.44771 2 3V13C2 13.5523 2.44771 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3ZM13 3V13H3L3 3H13Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">root-list</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H3V8.08296C5.5125 8.50448 7.49552 10.4875 7.91704 13H14V14H3C2.44772 14 2 13.5523 2 13V2ZM6.89998 13C6.5023 11.0409 4.95913 9.4977 3 9.10002V13L6.89998 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">rotation</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 11.5C6.067 11.5 4.5 9.933 4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5ZM8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">round</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2L14 5V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H11ZM10 3L6 3V4.5H10V3ZM11 3.41421V5.5H5V3L3 3L3 13H5V8H11V13H13V5.41421L11 3.41421ZM10 13V9H6V13H10Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">save</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.5H4V6.5H3V3.5C3 2.94769 3.44775 2.5 4 2.5H12C12.5522 2.5 13 2.94769 13 3.5V6.5H12V3.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 9.5H4V12.5H12V9.5H13V12.5C13 13.0523 12.5522 13.5 12 13.5H4C3.44775 13.5 3 13.0523 3 12.5V9.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14 7.5H2V8.5H14V7.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">scan</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51033 10.2186C8.69189 10.8814 7.64943 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64942 10.8814 8.69189 10.2186 9.51034L13.75 13.0417L13.0417 13.75L9.51033 10.2186ZM10.2768 6.51421C10.2768 4.43623 8.59224 2.75168 6.51424 2.75168C4.43623 2.75168 2.75168 4.43623 2.75168 6.51421C2.75168 8.59219 4.43623 10.2767 6.51424 10.2767C8.59224 10.2767 10.2768 8.59219 10.2768 6.51421Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">search</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.3894 9.92886L10.9644 6.35379L10.2573 5.64669L7.38939 8.51464L5.74265 6.8679L5.03555 7.57501L7.3894 9.92886Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.50003 2L2.5 9.00005C2.5 10.4165 3.24315 11.729 4.45772 12.4578L7.99979 14.5831L11.5423 12.4578C12.7569 11.729 13.5 10.4165 13.5 9.00005L13.5001 2H2.50003ZM3.5 9.00005L3.50002 3H12.5001L12.5 9.00005C12.5 10.0652 11.9412 11.0523 11.0278 11.6003L7.99982 13.417L4.97223 11.6003C4.05886 11.0523 3.5 10.0652 3.5 9.00005Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">secured</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5.25H4V4.25H7V5.25Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.50024 2.50014C1.50017 2.22394 1.72405 2 2.00024 2H14.0002C14.2763 2 14.5002 2.22377 14.5002 2.49986L14.5012 6.99988C14.5013 7.27608 14.2774 7.50002 14.0012 7.50002H2.00119C1.7251 7.50002 1.50127 7.27624 1.50119 7.00015L1.50024 2.50014ZM2.50106 6.50002H13.5011L13.5004 3H2.50038L2.50106 6.50002Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.00011 11.75H7.00011V10.75H4.00011V11.75Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.50133 9.00001C1.50133 8.72387 1.72519 8.50001 2.00133 8.50001H14.0013C14.2775 8.50001 14.5013 8.72387 14.5013 9.00001V13.5C14.5013 13.7761 14.2775 14 14.0013 14H2.00133C1.72519 14 1.50133 13.7761 1.50133 13.5V9.00001ZM2.50133 13H13.5013V9.50001H2.50133V13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">server</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.51604 6.37387C2.73216 3.5341 5.10482 1.29718 7.99995 1.29718C10.8949 1.29718 13.2674 3.5338 13.4838 6.37328C13.4944 6.41375 13.5 6.45622 13.5 6.5V10.5C13.5 10.5506 13.4925 10.5995 13.4785 10.6455C13.2561 12.923 11.3359 14.7028 9 14.7028H8V13.7028H9C10.6587 13.7028 12.048 12.5489 12.4088 11H10.5C10.2239 11 10 10.7761 10 10.5V6.5C10 6.22386 10.2239 6 10.5 6H12.4295C12.0532 3.89498 10.2132 2.29718 7.99995 2.29718C5.78672 2.29718 3.94667 3.89498 3.57038 6H5.5C5.77614 6 6 6.22386 6 6.5V10.5C6 10.7761 5.77614 11 5.5 11H3C2.72386 11 2.5 10.7761 2.5 10.5V6.5C2.5 6.45643 2.50557 6.41416 2.51604 6.37387ZM12.4999 7H11V10H12.5L12.4999 7ZM3.5 7V10H5V7H3.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">service</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0002 8C11.0002 9.65685 9.65702 11 8.00017 11C6.34331 11 5.00017 9.65685 5.00017 8C5.00017 6.34315 6.34331 5 8.00017 5C9.65702 5 11.0002 6.34315 11.0002 8ZM10.0002 8C10.0002 6.89543 9.10474 6 8.00017 6C6.8956 6 6.00017 6.89543 6.00017 8C6.00017 9.10457 6.8956 10 8.00017 10C9.10474 10 10.0002 9.10457 10.0002 8Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.00017 1.25L14.0623 4.625V11.375L8.00017 14.75L1.93799 11.375V4.625L8.00017 1.25ZM2.93799 5.2128V10.7872L8.00017 13.6055L13.0623 10.7872V5.2128L8.00017 2.39453L2.93799 5.2128Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">setting</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.93164 5.35774C10.355 5.81616 10.9612 6.10324 11.6344 6.10324C12.9142 6.10324 13.9517 5.06575 13.9517 3.78594C13.9517 2.50612 12.9142 1.46863 11.6344 1.46863C10.3546 1.46863 9.3171 2.50612 9.3171 3.78594C9.3171 4.03296 9.35575 4.27096 9.42734 4.49422L6.06804 6.45463C5.64466 5.99613 5.03844 5.709 4.36516 5.709C3.08535 5.709 2.04785 6.74649 2.04785 8.02631C2.04785 9.30612 3.08535 10.3436 4.36516 10.3436C5.03854 10.3436 5.64484 10.0564 6.06822 9.59778L9.4282 11.5557C9.35606 11.7797 9.3171 12.0187 9.3171 12.2667C9.3171 13.5465 10.3546 14.584 11.6344 14.584C12.9142 14.584 13.9517 13.5465 13.9517 12.2667C13.9517 10.9869 12.9142 9.94937 11.6344 9.94937C10.9622 9.94937 10.3568 10.2356 9.93356 10.6928L6.57236 8.73416C6.64386 8.51103 6.68247 8.27318 6.68247 8.02631C6.68247 7.77934 6.64383 7.5414 6.57228 7.31819L9.93164 5.35774ZM11.6344 2.46863C12.3619 2.46863 12.9517 3.05841 12.9517 3.78594C12.9517 4.51346 12.3619 5.10324 11.6344 5.10324C11.1607 5.10324 10.7454 4.85324 10.5133 4.47798C10.5084 4.4681 10.5031 4.45831 10.4974 4.44864C10.4918 4.43887 10.4858 4.42937 10.4795 4.42015C10.376 4.23201 10.3171 4.01585 10.3171 3.78594C10.3171 3.05841 10.9069 2.46863 11.6344 2.46863ZM5.48783 7.33682C5.49239 7.34584 5.49725 7.35478 5.50242 7.36363C5.50761 7.37253 5.51305 7.38122 5.5187 7.38968C5.62306 7.57838 5.68247 7.79541 5.68247 8.02631C5.68247 8.25725 5.62304 8.47431 5.51864 8.66304C5.51295 8.67156 5.50748 8.68031 5.50226 8.68928C5.49717 8.698 5.49239 8.70681 5.48789 8.7157C5.25607 9.09243 4.83995 9.34361 4.36516 9.34361C3.63763 9.34361 3.04785 8.75383 3.04785 8.02631C3.04785 7.29878 3.63763 6.709 4.36516 6.709C4.83991 6.709 5.256 6.96014 5.48783 7.33682ZM10.3171 12.2667C10.3171 12.0491 10.3699 11.8438 10.4633 11.663C10.4779 11.6445 10.4914 11.6247 10.5037 11.6037C10.5154 11.5835 10.5256 11.5628 10.5343 11.5418C10.77 11.1849 11.1747 10.9494 11.6344 10.9494C12.3619 10.9494 12.9517 11.5391 12.9517 12.2667C12.9517 12.9942 12.3619 13.584 11.6344 13.584C10.9069 13.584 10.3171 12.9942 10.3171 12.2667Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">share</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C6.61929 1 5.5 2.11929 5.5 3.5V5H3.5C3.22386 5 3 5.22386 3 5.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V5.5C13 5.22386 12.7761 5 12.5 5H10.5V3.5C10.5 2.11929 9.38071 1 8 1ZM9.5 6V8H10.5V6H12V14H4V6H5.5V8H6.5V6H9.5ZM9.5 5H6.5V3.5C6.5 2.67157 7.17157 2 8 2C8.82843 2 9.5 2.67157 9.5 3.5V5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">shop</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.06689 13.8122L11.0669 1.68787L11.9329 2.18787L4.93292 14.3122L4.06689 13.8122Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">slash</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99991 11L8.24266 13.5457C8.57592 13.7456 8.99991 13.5056 8.99991 13.1169V2.8831C8.99991 2.49445 8.57592 2.25439 8.24266 2.45435L3.99991 5H2.10473C1.77358 5 1.50504 5.26829 1.50473 5.59944L1.50024 10.3994C1.49993 10.731 1.76865 11 2.10024 11H3.99991ZM4.99991 5.56619L7.99991 3.76619V12.2338L4.99991 10.4338V5.56619ZM3.99991 10H2.50062L2.50435 6H3.99991V10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.515 5.72686C13.194 5.00368 12.7215 4.34191 12.1209 3.78131L12.8032 3.05025C13.4996 3.70026 14.0521 4.47194 14.429 5.32122C14.8059 6.1705 14.9999 7.08075 14.9999 8C14.9999 8.91925 14.8059 9.8295 14.429 10.6788C14.0521 11.5281 13.4996 12.2997 12.8032 12.9497L12.1209 12.2187C12.7215 11.6581 13.194 10.9963 13.515 10.2731C13.8358 9.55017 13.9999 8.77797 13.9999 8C13.9999 7.22203 13.8358 6.44984 13.515 5.72686Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.5 8.00027C11.5007 7.12735 11.1403 6.24663 10.4274 5.54638L11.1282 4.83301C12.023 5.71203 12.501 6.84639 12.5 8.00113C12.499 9.15589 12.0191 10.2897 11.1227 11.1675L10.423 10.453C11.1372 9.75363 11.4992 8.87324 11.5 8.00027Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">sound</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.59756 1.81764C7.76262 1.48318 8.23955 1.48318 8.40462 1.81764L10.2053 5.46619L14.2317 6.05126C14.6008 6.10489 14.7482 6.55848 14.4811 6.81882L11.5675 9.65881L12.2553 13.6689C12.3184 14.0366 11.9325 14.3169 11.6024 14.1433L8.00109 12.25L4.39976 14.1433C4.06963 14.3169 3.68378 14.0366 3.74683 13.669L4.43463 9.65881L1.52109 6.81882C1.25401 6.55848 1.40139 6.10489 1.77049 6.05126L5.79689 5.46619L7.59756 1.81764Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">star-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.54158 6.3802L8.00145 3.25955L6.46132 6.3802L3.01749 6.88062L5.50947 9.3097L4.9212 12.7396L8.00145 11.1202L11.0817 12.7396L10.4934 9.3097L12.9854 6.88062L9.54158 6.3802ZM14.5328 6.09497C14.7789 6.13072 14.8771 6.43311 14.6991 6.60667L11.5679 9.65882L12.3071 13.9685C12.3491 14.2136 12.0919 14.4005 11.8718 14.2848L8.00145 12.25L4.13111 14.2848C3.91102 14.4005 3.65379 14.2136 3.69582 13.9685L4.43499 9.65882L1.30382 6.60667C1.12576 6.43311 1.22401 6.13072 1.47008 6.09497L5.79726 5.46619L7.73243 1.5451C7.84248 1.32212 8.16043 1.32213 8.27047 1.5451L10.2056 5.46619L14.5328 6.09497Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">star</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.49796 5.49805H10.502V10.5021H5.49796V5.49805Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM8 2C9.18669 2 10.3467 2.35189 11.3334 3.01118C12.3201 3.67047 13.0892 4.60754 13.5433 5.7039C13.9974 6.80026 14.1162 8.00666 13.8847 9.17054C13.6532 10.3344 13.0818 11.4035 12.2426 12.2426C11.4035 13.0818 10.3344 13.6532 9.17054 13.8847C8.00666 14.1162 6.80026 13.9974 5.7039 13.5433C4.60755 13.0892 3.67047 12.3201 3.01119 11.3334C2.3519 10.3467 2 9.18669 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">stop-circle-1</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM5.49991 5.49995V10.5001H10.5001V5.49995H5.49991Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">stop-circle-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5H6V11H7V5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 5H9V11H10V5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM11.3334 3.01118C10.3467 2.35189 9.18669 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.18669 2.3519 10.3467 3.01119 11.3334C3.67047 12.3201 4.60755 13.0892 5.7039 13.5433C6.80026 13.9974 8.00666 14.1162 9.17054 13.8847C10.3344 13.6532 11.4035 13.0818 12.2426 12.2426C13.0818 11.4035 13.6532 10.3344 13.8847 9.17054C14.1162 8.00666 13.9974 6.80026 13.5433 5.7039C13.0892 4.60754 12.3201 3.67047 11.3334 3.01118Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">stop-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5H6V11H7V5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 5H9V11H10V5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">stop</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.20739 8.99975L15.0002 8.99976L15.0002 9.99976L2.07267 9.99975C1.60049 9.99975 1.36402 9.42885 1.69792 9.09497L5.6467 5.14637L6.35379 5.85349L3.20739 8.99975Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">swap-left</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7931 8.99975L1.00024 8.99976L1.00024 9.99976L13.9278 9.99975C14.4 9.99975 14.6365 9.42884 14.3026 9.09497L10.3538 5.14637L9.6467 5.8535L12.7931 8.99975Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">swap-right</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25024 6.00005L13.0082 6.00005L9.16404 2.25121L9.86221 1.53528L14.5334 6.09061C14.8738 6.4225 14.6388 7.00005 14.1634 7.00005L1.25024 7.00005V6.00005Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.75 10.0001L3.02026 10.0001L6.83053 13.6005L6.14372 14.3273L1.47454 9.91528C1.1261 9.58601 1.35906 9.00005 1.83855 9.00005L14.75 9.00005V10.0001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">swap</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9.771H13.2192C13.8698 9.771 14.3472 9.15961 14.1894 8.52846L12.6894 2.52846C12.5781 2.08329 12.1781 1.771 11.7192 1.771L3 1.771C2.44772 1.771 2 2.21871 2 2.771L2 7.771C2 8.32328 2.44772 8.771 3 8.771L5 8.771L7 13.771H9C9.55229 13.771 10 13.3233 10 12.771V9.771ZM6 8.57841L6 2.771L11.7192 2.771L13.2192 8.771H9L9 12.771H7.67703L6 8.57841ZM5 7.771L3 7.771L3 2.771L5 2.771L5 7.771Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">thumb-down</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6H13.2192C13.8698 6 14.3472 6.61139 14.1894 7.24254L12.6894 13.2425C12.5781 13.6877 12.1781 14 11.7192 14H3C2.44772 14 2 13.5523 2 13V8C2 7.44772 2.44772 7 3 7H5L7 2H9C9.55228 2 10 2.44772 10 3V6ZM6 7.19258V13H11.7192L13.2192 7H9V3H7.67703L6 7.19258ZM5 8H3V13H5V8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">thumb-up</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.5 5H8.5V7.97471L11.3538 10.8285L10.6467 11.5356L7.5 8.38892V5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">time-filled</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4V8.38892L10.0002 11L10.7074 10.2929L8.5 7.97471V4H7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">time</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C6.6247 1 5.36829 1.5546 4.46644 2.46644C3.5546 3.36829 3 4.6247 3 6C3 7.37457 3.554 8.63036 4.46498 9.53211C4.77388 9.84935 5.12363 10.1126 5.5 10.3289V12C5.5 12.5523 5.94772 13 6.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12V10.3289C10.8764 10.1126 11.2261 9.84935 11.535 9.5321C12.446 8.63036 13 7.37456 13 6C13 3.23386 10.7661 1 8 1ZM5.17572 3.17138C5.89371 2.44452 6.8964 2 8 2C10.2139 2 12 3.78614 12 6C12 7.1036 11.5555 8.10629 10.8286 8.82428L10.8214 8.83161C10.5255 9.13619 10.173 9.3845 9.77639 9.58279L9.5 9.72098V12H6.5V9.72098L6.22361 9.58279C5.82703 9.3845 5.47452 9.13619 5.17864 8.83161L5.17138 8.82428C4.44452 8.10629 4 7.1036 4 6C4 4.8964 4.44452 3.89371 5.17138 3.17572L5.17572 3.17138Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5.5 14V15H10.5V14H5.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">tips</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75056 8.24943L10.3118 8.40417C11.3109 8.67963 12.3996 8.42901 13.1581 7.67052C13.8303 6.99831 14.1035 6.06341 13.9654 5.16621L12.909 6.22262C12.3232 6.80839 11.3735 6.80841 10.7877 6.22265L10.3634 5.7984C9.77758 5.21262 9.77757 4.26285 10.3634 3.67705L11.4198 2.62058C10.5226 2.48241 9.58765 2.75565 8.91542 3.42788C8.15697 4.18632 7.90634 5.27494 8.18172 6.27395L8.33641 6.83516L2.53207 12.6395L3.94628 14.0537L9.75056 8.24943ZM12.2439 1.7965C12.5739 1.90785 12.893 2.06333 13.1918 2.26284L11.0705 4.38415C10.8752 4.57942 10.8752 4.89601 11.0705 5.09127L11.4948 5.51552C11.69 5.71077 12.0066 5.71077 12.2019 5.51551L14.3231 3.39423C14.5227 3.69303 14.6781 4.01209 14.7895 4.34211C15.255 5.72209 14.9491 7.29373 13.8652 8.37763C12.8375 9.40526 11.3715 9.73365 10.046 9.3682L4.65339 14.7608C4.26287 15.1513 3.6297 15.1513 3.23918 14.7608L1.82496 13.3466C1.43444 12.9561 1.43444 12.3229 1.82496 11.9324L7.21767 6.53969C6.85233 5.21428 7.18074 3.74834 8.20831 2.72077C9.29223 1.63686 10.8639 1.33087 12.2439 1.7965Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">tools</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.3556 2.12549L8.00004 5.81174L11.6445 2.12549L12.3556 2.82855L8.42672 6.80251C8.19187 7.04006 7.80822 7.04006 7.57337 6.80251L3.64447 2.82855L4.3556 2.12549Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.30769 13.8306L8.00003 10.1382L11.6924 13.8306L12.3995 13.1235L8.42429 9.14829C8.18998 8.91397 7.81008 8.91397 7.57577 9.14829L3.60059 13.1235L4.30769 13.8306Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">unfold-less</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6445 6.84005L8.00001 3.1538L4.35559 6.84005L3.64446 6.13699L7.57334 2.16303C7.80819 1.92548 8.19183 1.92548 8.42669 2.16303L12.3556 6.13699L11.6445 6.84005Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.6924 9.15791L8.00003 12.8503L4.30769 9.15791L3.60059 9.86502L7.57576 13.8402C7.81008 14.0745 8.18998 14.0745 8.42429 13.8402L12.3995 9.86502L11.6924 9.15791Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">unfold-more</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.73759 6.6778L7.50118 2.91421L7.5012 11.5L8.5012 11.5L8.50118 2.91422L12.2648 6.6778L12.9719 5.97069L8.35473 1.35355C8.15947 1.15829 7.84289 1.15829 7.64762 1.35355L3.03048 5.9707L3.73759 6.6778Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11H13V13H3V11H2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">upload</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 6H5.5V5H7.5V6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.5 6H10.5V5H8.5V6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4 8V2.5C4 2.22386 4.22386 2 4.5 2H11.5C11.7761 2 12 2.22386 12 2.5V8C12.5523 8 13 8.44772 13 9V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V9C3 8.44772 3.44772 8 4 8ZM5 8H11V3H5V8ZM4 9V14H12V9H4Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">usb</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5ZM8 7.5C6.61929 7.5 5.5 6.38071 5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5Z" fill="currentColor"/>
<path d="M11.5 10.9864C10.3864 10.6698 9.21367 10.5 8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H9.5V14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C9.20942 9.5 10.3814 9.65652 11.5 9.9498V10.9864Z" fill="currentColor"/>
<path d="M12.75 13.75V16H13.75V13.75H16V12.75H13.75V10.5H12.75V12.75H10.5V13.75H12.75Z" fill="currentColor"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">user-add</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10.5C9.24124 10.5 10.4221 10.8126 11.5 11.3795V12.5L12.5 12.5V11.3584C12.5 11.0106 12.3213 10.6842 12.0145 10.5204C10.7893 9.86653 9.43252 9.5 8 9.5C6.56748 9.5 5.21075 9.86653 3.9855 10.5204C3.67873 10.6842 3.5 11.0106 3.5 11.3584V12.5H4.5V11.3795C5.57794 10.8126 6.75876 10.5 8 10.5Z" fill="currentColor"/>
<path d="M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6ZM9.5 6C9.5 5.17157 8.82843 4.5 8 4.5C7.17157 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17157 7.5 8 7.5C8.82843 7.5 9.5 6.82843 9.5 6Z" fill="currentColor"/>
<path d="M2.5 1.5C1.94772 1.5 1.5 1.94772 1.5 2.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H13.5C14.0523 14.5 14.5 14.0523 14.5 13.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5H2.5ZM13.5 2.5V13.5H2.5L2.5 2.5H13.5Z" fill="currentColor"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">user-avatar</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M8 9C9.53535 9 10.78 7.75535 10.78 6.22C10.78 4.68465 9.53535 3.44 8 3.44C6.46465 3.44 5.22 4.68465 5.22 6.22C5.22 7.75535 6.46465 9 8 9ZM8 8C7.01693 8 6.22 7.20307 6.22 6.22C6.22 5.23693 7.01693 4.44 8 4.44C8.98307 4.44 9.78 5.23693 9.78 6.22C9.78 7.20307 8.98307 8 8 8Z" fill="currentColor"/>
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM12.9955 11.3246C11.4748 10.4765 9.78555 10 7.99998 10C6.21441 10 4.52519 10.4765 3.00451 11.3246C2.36991 10.3729 2 9.22966 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.22966 13.6301 10.3729 12.9955 11.3246ZM12.3632 12.1185C11.2693 13.277 9.71909 14 8 14C6.2809 14 4.73066 13.277 3.63675 12.1185C4.9805 11.3976 6.45282 11 7.99998 11C9.54714 11 11.0195 11.3976 12.3632 12.1185Z" fill="currentColor"/>
</g>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">user-circle</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5ZM8 7.5C6.61929 7.5 5.5 6.38071 5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5Z" fill="currentColor"/>
<path d="M10.5 10.7452C9.69127 10.5844 8.85582 10.5 8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H10.5V14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C8.85386 9.5 9.68908 9.57802 10.5 9.7271V10.7452Z" fill="currentColor"/>
<path d="M11.4038 14.2929L12.9947 12.702L11.4037 11.1109L12.1108 10.4038L13.7018 11.9949L15.2929 10.4038L16 11.1109L14.4089 12.702L15.9999 14.2929L15.2928 15L13.7018 13.4091L12.1109 15L11.4038 14.2929Z" fill="currentColor"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">user-clear</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3284 7.82844C14.8905 6.26634 14.8905 3.73368 13.3284 2.17158L14.0355 1.46448C15.9881 3.4171 15.9881 6.58292 14.0355 8.53555L13.3284 7.82844Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11 5C11 6.933 9.433 8.5 7.5 8.5C5.567 8.5 4 6.933 4 5C4 3.067 5.567 1.5 7.5 1.5C9.433 1.5 11 3.067 11 5ZM10 5C10 3.61929 8.88071 2.5 7.5 2.5C6.11929 2.5 5 3.61929 5 5C5 6.38071 6.11929 7.5 7.5 7.5C8.88071 7.5 10 6.38071 10 5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.4631 10.8528C13.797 11.0122 14 11.3547 14 11.7246L14 14C14 14.2761 13.7761 14.5 13.5 14.5L1.5 14.5C1.22386 14.5 1 14.2761 1 14V11.7246C1 11.3547 1.20302 11.0122 1.53686 10.8528C3.3494 9.98707 5.36651 9.5 7.5 9.5C9.63349 9.5 11.6506 9.98708 13.4631 10.8528ZM7.5 10.5C5.5334 10.5 3.67434 10.9457 2 11.7398L2 13.5H13V11.7398C11.3257 10.9457 9.4666 10.5 7.5 10.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.9142 3.58577C12.6953 4.36682 12.6953 5.63315 11.9142 6.4142L12.6213 7.1213C13.7929 5.94973 13.7929 4.05023 12.6213 2.87866L11.9142 3.58577Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">user-talk</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 5C11.5 6.933 9.933 8.5 8 8.5C6.067 8.5 4.5 6.933 4.5 5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5ZM10.5 5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5C5.5 6.38071 6.61929 7.5 8 7.5C9.38071 7.5 10.5 6.38071 10.5 5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.9631 10.8528C14.297 11.0122 14.5 11.3547 14.5 11.7246V14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C10.1335 9.5 12.1506 9.98708 13.9631 10.8528ZM8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H13.5V11.7398C11.8257 10.9457 9.9666 10.5 8 10.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">user</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2349 12.75V14.5H14.2349V12.75H15.9849V11.75H14.2349V10H13.2349V11.75H11.4849V12.75H13.2349Z" fill="currentColor"/>
<path d="M7.46171 1.34645C7.02232 1.12482 6.52575 1 6.00003 1C4.2051 1 2.75003 2.45507 2.75003 4.25C2.75003 6.02947 4.18015 7.47491 5.95373 7.49968V6.49953C4.73246 6.47488 3.75003 5.47717 3.75003 4.25C3.75003 3.00736 4.75739 2 6.00003 2C6.2937 2 6.57424 2.05626 6.83144 2.1586L7.46171 1.34645Z" fill="currentColor"/>
<path d="M5.95373 8.22094C4.01922 8.22779 2.18917 8.66419 0.540929 9.43593C0.204537 9.59344 0 9.9372 0 10.3086V12.5C0 12.7761 0.223857 13 0.5 13H2.85709V12H1V10.3252C2.51071 9.62379 4.18421 9.22774 5.95373 9.22095V8.22094Z" fill="currentColor"/>
<path d="M13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354ZM12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354Z" fill="currentColor"/>
<path d="M12 10.5988C11.35 10.4879 10.6821 10.43 9.99997 10.43C8.21334 10.43 6.52384 10.8269 4.99996 11.5344V13.5H12V14.5H4.49996C4.22382 14.5 3.99996 14.2761 3.99996 14V11.5178C3.99996 11.1464 4.2045 10.8026 4.54089 10.6451C6.20227 9.86723 8.04837 9.43005 9.99997 9.43005C10.6806 9.43005 11.3484 9.48322 12 9.58548V10.5988Z" fill="currentColor"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">usergroup-add</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.46171 1.34645C7.02232 1.12482 6.52575 1 6.00003 1C4.2051 1 2.75003 2.45507 2.75003 4.25C2.75003 6.02947 4.18015 7.47491 5.95373 7.49968V6.49953C4.73246 6.47488 3.75003 5.47717 3.75003 4.25C3.75003 3.00736 4.75739 2 6.00003 2C6.2937 2 6.57424 2.05626 6.83144 2.1586L7.46171 1.34645Z" fill="currentColor"/>
<path d="M5.95373 8.22094C4.01922 8.22779 2.18917 8.66419 0.540929 9.43593C0.204537 9.59344 0 9.9372 0 10.3086V12.5C0 12.7761 0.223857 13 0.5 13H2.85709V12H1V10.3252C2.51071 9.62379 4.18421 9.22774 5.95373 9.22095V8.22094Z" fill="currentColor"/>
<path d="M13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354ZM12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354Z" fill="currentColor"/>
<path d="M11 10.4718C10.6704 10.4442 10.3369 10.43 9.99997 10.43C8.21334 10.43 6.52384 10.8269 4.99996 11.5344V13.5H10.5V14.5H4.49996C4.22382 14.5 3.99996 14.2761 3.99996 14V11.5178C3.99996 11.1464 4.2045 10.8026 4.54089 10.6451C6.20227 9.86723 8.04837 9.43005 9.99997 9.43005C10.3366 9.43005 10.6701 9.44305 11 9.46857V10.4718Z" fill="currentColor"/>
<path d="M13.1369 12.344L11.6881 13.7929L12.3952 14.5L13.844 13.0512L15.2929 14.5L16 13.7929L14.5512 12.344L16.0001 10.8951L15.293 10.188L13.844 11.6369L12.3951 10.188L11.688 10.8951L13.1369 12.344Z" fill="currentColor"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">usergroup-clear</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00003 1C6.52575 1 7.02232 1.12482 7.46171 1.34645L6.83144 2.1586C6.57424 2.05626 6.2937 2 6.00003 2C4.75739 2 3.75003 3.00736 3.75003 4.25C3.75003 5.47717 4.73246 6.47488 5.95373 6.49953V7.49968C4.18015 7.47491 2.75003 6.02947 2.75003 4.25C2.75003 2.45507 4.2051 1 6.00003 1Z" fill="currentColor"/>
<path d="M0.540929 9.43593C2.18917 8.66419 4.01922 8.22779 5.95373 8.22094V9.22095C4.18421 9.22774 2.51071 9.62379 1 10.3252V12H2.85709V13H0.5C0.223857 13 0 12.7761 0 12.5V10.3086C0 9.9372 0.204537 9.59344 0.540929 9.43593Z" fill="currentColor"/>
<path d="M9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354ZM9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354Z" fill="currentColor"/>
<path d="M16 11.5178C16 11.1464 15.7954 10.8026 15.459 10.6451C13.7977 9.86723 11.9516 9.43005 9.99997 9.43005C8.04837 9.43005 6.20227 9.86723 4.54089 10.6451C4.2045 10.8026 3.99996 11.1464 3.99996 11.5178V14C3.99996 14.2761 4.22382 14.5 4.49996 14.5H15.5C15.7761 14.5 16 14.2761 16 14V11.5178ZM15 11.5344V13.5H4.99996V11.5344C6.52384 10.8269 8.21334 10.43 9.99997 10.43C11.7866 10.43 13.4761 10.8269 15 11.5344Z" fill="currentColor"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">usergroup</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.05 7.74017C11.25 7.85564 11.25 8.14432 11.05 8.25979L5.95 11.2043C5.75 11.3198 5.5 11.1754 5.5 10.9445L5.5 5.0555C5.5 4.82456 5.75 4.68023 5.95 4.7957L11.05 7.74017ZM6.5 6.26794V9.73204L9.5 7.99998L6.5 6.26794Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 13H13V3H3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">video</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H4.5L4.5 2H3.5ZM7.5 14L7.5 2H8.5L8.5 14H7.5ZM11.5 14L11.5 2H12.5L12.5 14H11.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">view-column</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4.5H2V3.5H14V4.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14 8.5H2V7.5H14V8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 12.5H14V11.5H2V12.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">view-list</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7.5L11 7.5V8.5L4 8.5V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 10L4 10V11H10V10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 5H13V3H3ZM3 6L3 13H13V6H3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">view-module</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 4.5L13.5 4.5C14.0523 4.5 14.5 4.94772 14.5 5.5V12C14.5 12.5523 14.0523 13 13.5 13H2.5C1.94772 13 1.5 12.5523 1.5 12V3C1.5 2.44771 1.94772 2 2.5 2H10.5C11.0523 2 11.5 2.44771 11.5 3V4.5ZM10.5 3L2.5 3V4.5L10.5 4.5V3ZM13.5 5.5H2.5L2.5 12H13.5V5.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">wallet</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1536 10.7038L10.8516 9.98785C10.0271 9.14905 9.02319 8.68872 7.98486 8.68872C6.95923 8.68872 5.96704 9.13806 5.14819 9.9577L5.84595 10.6735C6.50903 10.0049 7.26538 9.68872 7.98486 9.68872C8.71533 9.68872 9.4834 10.0145 10.1536 10.7038Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.1785 8.6272L12.8767 7.91101C11.5029 6.49567 9.77637 5.71283 7.9856 5.71283C6.20728 5.71283 4.49219 6.48474 3.12329 7.88123L3.82153 8.59729C5.02856 7.35767 6.50391 6.71283 7.9856 6.71283C9.479 6.71283 10.9658 7.36804 12.1785 8.6272Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.1331 6.62256L14.8315 5.90631C12.9297 3.94031 10.5042 2.8493 7.98584 2.8493C5.47998 2.8493 3.06616 3.92938 1.1687 5.87677L1.86694 6.59296C3.59912 4.80591 5.77148 3.8493 7.98584 3.8493C10.2124 3.8493 12.3962 4.81647 14.1331 6.62256Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 12.5C9 13.0523 8.55225 13.5 8 13.5C7.44775 13.5 7 13.0523 7 12.5C7 11.9477 7.44775 11.5 8 11.5C8.55225 11.5 9 11.9477 9 12.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">wifi</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 7V9H7V7H9V6H7V4H6V6H4V7H6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.51099 10.2181C8.69245 10.8812 7.64973 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64972 10.8812 8.69245 10.2181 9.511L13.7494 13.0423L13.0423 13.7494L9.51099 10.2181ZM10.2785 6.51421C10.2785 4.4353 8.59317 2.75 6.51424 2.75C4.4353 2.75 2.75 4.4353 2.75 6.51421C2.75 8.59312 4.4353 10.2784 6.51424 10.2784C8.59317 10.2784 10.2785 8.59312 10.2785 6.51421Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">zoom-in</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="l-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7H4V6H9V7Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.51099 10.2181C8.69245 10.8812 7.64973 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64972 10.8812 8.69245 10.2181 9.511L13.7494 13.0423L13.0423 13.7494L9.51099 10.2181ZM10.2785 6.51421C10.2785 4.4353 8.59317 2.75 6.51424 2.75C4.4353 2.75 2.75 4.4353 2.75 6.51421C2.75 8.59312 4.4353 10.2784 6.51424 10.2784C8.59317 10.2784 10.2785 8.59312 10.2785 6.51421Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="l-icons-view__name" style="margin-top: 12px; text-align:center">zoom-out</div>
    <div class="l-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div></div>`])),n==="develop"?_("add-circle","AddCircle"):H("add-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 8.5H4.5V7.5H7.5V4.5H8.5V7.5H11.5V8.5H8.5V11.5H7.5V8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("add-rectangle","AddRectangle"):H("add-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 11V8.5H5V7.5H7.5V5H8.5V7.5H11V8.5H8.5V11H7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("add","Add"):H("add",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.34998 8.64998V12.5H8.64998V8.64998H12.5V7.34998H8.64998V3.5H7.34998V7.34998H3.5V8.64998H7.34998Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("app","App"):H("app",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 1.75C9.59315 1.75 8.25 3.09315 8.25 4.75C8.25 6.40685 9.59315 7.75 11.25 7.75C12.9069 7.75 14.25 6.40685 14.25 4.75C14.25 3.09315 12.9069 1.75 11.25 1.75ZM9.25 4.75C9.25 3.64543 10.1454 2.75 11.25 2.75C12.3546 2.75 13.25 3.64543 13.25 4.75C13.25 5.85457 12.3546 6.75 11.25 6.75C10.1454 6.75 9.25 5.85457 9.25 4.75Z" fill="black" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H6.5C7.05228 2 7.5 2.44772 7.5 3V6.5C7.5 7.05228 7.05228 7.5 6.5 7.5H3C2.44772 7.5 2 7.05228 2 6.5V3ZM3 3V6.5H6.5V3H3Z" fill="black" fill-opacity="0.9"/>
<path d="M2 9.5C2 8.94772 2.44772 8.5 3 8.5H6.5C7.05228 8.5 7.5 8.94772 7.5 9.5V13C7.5 13.5523 7.05228 14 6.5 14H3C2.44772 14 2 13.5523 2 13V9.5ZM3 9.5V13H6.5V9.5H3Z" fill="black" fill-opacity="0.9"/>
<path d="M8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5H13C13.5523 8.5 14 8.94772 14 9.5V13C14 13.5523 13.5523 14 13 14H9.5C8.94772 14 8.5 13.5523 8.5 13V9.5ZM9.5 13H13V9.5H9.5V13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("arrow-down-rectangle","ArrowDownRectangle"):H("arrow-down-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7458 7.54711L8.5 9.79289L8.5 4.5L7.5 4.5L7.5 9.79289L5.25422 7.54711L4.54711 8.25422L8 11.7071L11.4529 8.25422L10.7458 7.54711Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("arrow-down","ArrowDown"):H("arrow-down",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.50009 2.00014L8.49992 12.0858L12.1462 8.4395L12.8533 9.14661L8.21203 13.7879C8.09488 13.9051 7.90493 13.9051 7.78777 13.7879L3.14648 9.14661L3.85359 8.4395L7.49992 12.0858L7.50009 2.00012L8.50009 2.00014Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("arrow-left","ArrowLeft"):H("arrow-left",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.91423 8.49963L7.56053 12.1459L6.85342 12.853L2.21213 8.21174C2.09497 8.09458 2.09497 7.90463 2.21213 7.78748L6.85342 3.14619L7.56053 3.8533L3.91419 7.49963L13.9999 7.4998L13.9999 8.4998L3.91423 8.49963Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("arrow-right","ArrowRight"):H("arrow-right",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0857 7.50013L8.43938 3.85384L9.14649 3.14673L13.7878 7.78802C13.9049 7.90517 13.9049 8.09512 13.7878 8.21228L9.14649 12.8536L8.43938 12.1465L12.0857 8.50013L2 8.49996L2.00002 7.49996L12.0857 7.50013Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("arrow-up","ArrowUp"):H("arrow-up",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49988 3.91436L3.85359 7.56065L3.14648 6.85354L7.78777 2.21226C7.90493 2.0951 8.09488 2.0951 8.21204 2.21226L12.8533 6.85354L12.1462 7.56065L8.49988 3.91432L8.49971 14L7.49971 14L7.49988 3.91436Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("attach","Attach"):H("attach",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1269 3.85578C11.3379 3.07643 10.0678 3.08032 9.28361 3.86448L2.07405 11.074L1.36694 10.3669L8.57651 3.15737C9.74951 1.98437 11.6495 1.97856 12.8297 3.14436C14.0201 4.32029 14.0259 6.24042 12.8427 7.42361L7.00276 13.2636C6.26721 13.9991 5.07466 13.9991 4.33912 13.2636C3.60357 12.5281 3.60357 11.3355 4.33912 10.6L10.0131 4.92602L10.7202 5.63313L5.04622 11.3071C4.7012 11.6521 4.7012 12.2115 5.04622 12.5565C5.39124 12.9015 5.95063 12.9015 6.29565 12.5565L12.1356 6.7165C12.9266 5.92553 12.9227 4.6419 12.1269 3.85578Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("backtop-rectangle","BacktopRectangle"):H("backtop-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49755 8.19542L5.9441 9.72019L5.2282 9.02199L8.00185 6.29956L10.8007 9.02923L10.087 9.72972L8.50841 8.19011L8.50847 11.9988L7.49761 11.9989L7.49755 8.19542Z" fill="black" fill-opacity="0.9"/>
<path d="M4.49903 5.4989H11.499V4.4989H4.49903V5.4989Z" fill="black" fill-opacity="0.9"/>
<path d="M2.99903 1.9989C2.44674 1.9989 1.99903 2.44662 1.99903 2.9989L1.99902 12.9989C1.99902 13.5512 2.44674 13.9989 2.99902 13.9989L12.999 13.9989C13.5513 13.9989 13.999 13.5512 13.999 12.9989L13.999 2.9989C13.999 2.44662 13.5513 1.9989 12.999 1.9989L2.99903 1.9989ZM12.999 2.9989L12.999 12.9989L2.99902 12.9989L2.99903 2.9989L12.999 2.9989Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("backtop","Backtop"):H("backtop",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99902 2.9989H13.999V1.9989H1.99902V2.9989Z" fill="black" fill-opacity="0.9"/>
<path d="M3.37689 10.2293L7.48663 6.19544L7.48666 14.8438L8.49751 14.8437L8.49748 6.1901L12.6779 10.2672L13.3915 9.56668L8.34115 4.64112C8.14651 4.45129 7.83584 4.45178 7.64181 4.64224L2.661 9.53108L3.37689 10.2293Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("backward","Backward"):H("backward",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.242 8.39077C0.991274 8.1906 0.991274 7.80944 1.242 7.60927L6.87938 3.1086C7.20684 2.84717 7.69133 3.08033 7.69133 3.49935L7.69133 7.76543C7.72075 7.71 7.76134 7.65903 7.81309 7.6159L13.1795 3.14379C13.5052 2.8724 13.9996 3.10398 13.9996 3.5279L13.9996 12.4721C13.9996 12.896 13.5052 13.1276 13.1795 12.8562L7.81309 8.38412C7.76134 8.34099 7.72075 8.29002 7.69133 8.23459L7.69133 12.5007C7.69133 12.9197 7.20684 13.1529 6.87937 12.8914L1.242 8.39077ZM6.69133 11.4617L6.69133 4.53833L2.35535 8.00002L6.69133 11.4617ZM12.9996 11.4046L12.9996 4.59544L8.9142 8.00001L12.9996 11.4046Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("barcode","Barcode"):H("barcode",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2V14H2V2H4ZM14 2V14H12V2H14ZM11 2V14H10V2H11ZM9 2V14H7V2H9ZM6 2V14H5V2H6Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("books","Books"):H("books",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99902 9.27825L3.99902 12.0782V2.9989H11.999V12.0782L7.99902 9.27825ZM7.99902 10.4989L12.2123 13.4482C12.5437 13.6802 12.999 13.4431 12.999 13.0386V2.9989C12.999 2.44662 12.5513 1.9989 11.999 1.9989H3.99902C3.44674 1.9989 2.99902 2.44662 2.99902 2.9989V13.0386C2.99902 13.4431 3.45437 13.6802 3.78576 13.4482L7.99902 10.4989Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("browse-off","BrowseOff"):H("browse-off",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7732 11.9803L12.1465 13.3535L12.8535 12.6464L3.14969 2.94257L2.44266 3.64972L3.65332 4.86032C2.60522 5.58542 1.72754 6.57559 1.11694 7.76987L1 7.99985L1.11694 8.22983C2.46143 10.8698 5.10156 12.4998 8.00488 12.4998C8.96875 12.4998 9.9043 12.319 10.7732 11.9803ZM9.99121 11.1982C9.35718 11.3957 8.68921 11.4998 8.00488 11.4998C5.5498 11.4998 3.3186 10.1698 2.1106 7.99985C2.66992 6.99502 3.44873 6.17038 4.36743 5.57443L5.45093 6.65799C5.2395 7.05868 5.11987 7.51529 5.11987 7.99985C5.11987 9.59036 6.40918 10.8797 7.99976 10.8797C8.48438 10.8797 8.94092 10.76 9.34155 10.5487L9.99121 11.1982ZM6.21143 7.41855L8.58105 9.78811C8.39795 9.84756 8.20264 9.87973 7.99976 9.87973C6.96143 9.87973 6.11987 9.03805 6.11987 7.99985C6.11987 7.79696 6.15186 7.60159 6.21143 7.41855Z" fill="black" fill-opacity="0.9"/>
<path d="M14.8831 8.22983L15 7.99985L14.8831 7.76987C13.5386 5.13986 10.8984 3.49985 8.00488 3.49985C7.14868 3.49985 6.31519 3.64248 5.53125 3.91116L6.3313 4.71133C6.87012 4.57242 7.4314 4.49985 8.00488 4.49985C10.4502 4.49985 12.6814 5.82986 13.8992 7.99985C13.3894 8.91531 12.696 9.6813 11.8809 10.261L12.5894 10.9693C13.53 10.2635 14.3201 9.33523 14.8831 8.22983Z" fill="black" fill-opacity="0.9"/>
<path d="M10.8796 7.99985C10.8796 8.37375 10.8083 8.73099 10.6787 9.05874L9.86401 8.24399C9.87427 8.16409 9.87964 8.08255 9.87964 7.99985C9.87964 6.96164 9.03784 6.12002 7.99976 6.12002C7.91699 6.12002 7.83545 6.12533 7.75562 6.13571L6.94092 5.32089C7.26855 5.19125 7.62598 5.12002 7.99976 5.12002C9.59033 5.12002 10.8796 6.40939 10.8796 7.99985Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("browse","Browse"):H("browse",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8796 7.99988C10.8796 9.59039 9.59033 10.8798 7.99976 10.8798C6.40918 10.8798 5.11987 9.59039 5.11987 7.99988C5.11987 6.40942 6.40918 5.12006 7.99976 5.12006C9.59033 5.12006 10.8796 6.40942 10.8796 7.99988ZM9.87964 7.99988C9.87964 6.96167 9.03784 6.12006 7.99976 6.12006C6.96143 6.12006 6.11987 6.96167 6.11987 7.99988C6.11987 9.03809 6.96143 9.87976 7.99976 9.87976C9.03784 9.87976 9.87964 9.03809 9.87964 7.99988Z" fill="black" fill-opacity="0.9"/>
<path d="M1.11694 8.22986C2.46143 10.8699 5.10156 12.4999 8.00488 12.4999C10.8984 12.4999 13.5386 10.8699 14.8831 8.22986L15 7.99988L14.8831 7.7699C13.5386 5.13989 10.8984 3.49988 8.00488 3.49988C5.10156 3.49988 2.46143 5.13989 1.11694 7.7699L1 7.99988L1.11694 8.22986ZM8.00488 11.4999C5.5498 11.4999 3.3186 10.1699 2.1106 7.99988C3.3186 5.8299 5.5498 4.49988 8.00488 4.49988C10.4502 4.49988 12.6814 5.8299 13.8992 7.99988C12.6909 10.1699 10.4502 11.4999 8.00488 11.4999Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("bulletpoint","Bulletpoint"):H("bulletpoint",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9999 3.00002L4.99988 3L4.99988 4L13.9999 4.00002V3.00002Z" fill="black" fill-opacity="0.9"/>
<path d="M3.49988 3L2.00049 3L2.00049 4L3.49988 4V3Z" fill="black" fill-opacity="0.9"/>
<path d="M4.99988 7.50006L13.9999 7.50009V8.50009L4.99988 8.50006L4.99988 7.50006Z" fill="black" fill-opacity="0.9"/>
<path d="M2.00049 7.50006H3.49988V8.50006H2.00049L2.00049 7.50006Z" fill="black" fill-opacity="0.9"/>
<path d="M4.99988 12L13.9999 12V13L4.99988 13L4.99988 12Z" fill="black" fill-opacity="0.9"/>
<path d="M2.00049 12H3.49988V13H2.00049L2.00049 12Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("calendar","Calendar"):H("calendar",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3H6L6 1.5H5L5 3H3C2.44772 3 2 3.44771 2 4V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V4C14 3.44772 13.5523 3 13 3H11V1.5H10L10 3ZM5 5L6 5L6 4H10L10 5L11 5V4H13V6H3V4H5L5 5ZM3 7H13V13H3L3 7Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("call","Call"):H("call",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9996 11.0571C14.0094 11.656 13.8406 12.3013 13.4825 12.8172L13.3562 12.9841C13.1203 13.3295 12.7802 13.5823 12.3763 13.7333C12.0957 13.8382 11.92 13.8686 11.467 13.9206C9.51866 14.1028 7.38954 13.1934 5.28719 11.3231C3.8828 10.0711 2.83116 8.50511 2.32479 6.90415C2.11109 6.22714 1.99984 5.57675 1.99984 4.9881C1.99984 4.28226 2.15924 3.67085 2.47982 3.21159C2.78397 2.79386 3.36194 2.44687 4.23086 2.1189C4.65696 1.95807 5.13791 2.10548 5.40072 2.47746L7.06606 4.83489C7.34085 5.22387 7.30316 5.75267 6.97604 6.09879L6.7593 6.32024L6.49703 6.57443C6.43153 6.62982 6.33187 6.76339 6.33187 6.76339C6.30907 7.07011 6.63615 7.70117 7.58846 8.67568L7.87185 8.9415C8.75003 9.75141 8.98642 9.81638 9.25619 9.62851L9.34609 9.55508C9.44154 9.48247 9.69138 9.30859 10.2242 8.94226C10.5298 8.73213 10.9267 8.70843 11.2551 8.88068L11.4976 9.00892C13.1606 9.8967 13.9203 10.431 13.9937 10.9791L13.9996 11.0571ZM12.9997 11.0731C13.001 11.1553 12.8854 11.0287 12.6447 10.8549C12.2936 10.6014 11.7532 10.279 11.0283 9.89197L10.7907 9.7663L10.0027 10.3101C9.98437 10.322 9.97594 10.3268 9.97927 10.323C9.11992 10.9979 8.37978 10.8086 6.88619 9.38735C5.74004 8.21495 5.28626 7.33947 5.33425 6.69456C5.35666 6.34167 5.59986 6.0185 5.8359 5.82509C5.9363 5.72853 6.03513 5.63144 6.12417 5.54118L6.24929 5.41186L4.58401 3.05447C3.88251 3.31925 3.4487 3.57965 3.29391 3.79216C3.10764 4.05918 2.99984 4.47289 2.99984 4.9881C2.99984 5.46852 3.09399 6.01883 3.27834 6.60286C3.72853 8.02618 4.67843 9.44076 5.95223 10.5764C7.86462 12.2776 9.73829 13.0779 11.3635 12.926L11.621 12.8939C11.799 12.8686 11.8995 12.8439 12.0261 12.7966C12.2452 12.7147 12.4181 12.5862 12.5589 12.382C12.8261 12.0557 12.9688 11.6382 12.9954 11.2418L12.9997 11.0731Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("caret-down-small","CaretDownSmall"):H("caret-down-small",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6H5L8 10.5L11 6Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("caret-down","CaretDown"):H("caret-down",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99958 10.3334L3.99958 5.00002L11.9996 5.00002L7.99958 10.3334ZM7.59958 11.4667C7.79958 11.7334 8.19958 11.7334 8.39958 11.4667L13.3996 4.80002C13.6468 4.4704 13.4116 4.00002 12.9996 4.00002L2.99958 4.00002C2.58756 4.00002 2.35237 4.4704 2.59958 4.80002L7.59958 11.4667Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("caret-left-small","CaretLeftSmall"):H("caret-left-small",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 5L10.5 11L6 8L10.5 5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("caret-left","CaretLeft"):H("caret-left",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66683 7.99976L10.0002 3.99976L10.0002 11.9998L4.66683 7.99976ZM3.5335 7.59976C3.26683 7.79976 3.26683 8.19976 3.5335 8.39976L10.2002 13.3998C10.5298 13.647 11.0002 13.4118 11.0002 12.9998L11.0002 2.99976C11.0002 2.58774 10.5298 2.35255 10.2002 2.59976L3.5335 7.59976Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("caret-right-small","CaretRightSmall"):H("caret-right-small",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 5L6 11L10.5 8L6 5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("caret-right","CaretRight"):H("caret-right",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3337 7.99999L6.00032 12L6.00033 3.99999L11.3337 7.99999ZM12.467 8.39999C12.7337 8.19999 12.7337 7.79999 12.467 7.59999L5.80033 2.59999C5.47071 2.35278 5.00033 2.58797 5.00033 2.99999L5.00032 13C5.00032 13.412 5.4707 13.6472 5.80032 13.4L12.467 8.39999Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("caret-up-small","CaretUpSmall"):H("caret-up-small",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 10.5H5L8 6L11 10.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("caret-up","CaretUp"):H("caret-up",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00042 5.66665L12.0004 11L4.00042 11L8.00042 5.66665ZM8.40042 4.53331C8.20042 4.26665 7.80042 4.26665 7.60042 4.53331L2.60042 11.2C2.35321 11.5296 2.5884 12 3.00042 12L13.0004 12C13.4124 12 13.6476 11.5296 13.4004 11.2L8.40042 4.53331Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("cart","Cart"):H("cart",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3H2.57644L3.96502 11.3315C4.02931 11.7173 4.36307 12 4.75414 12H14V11H4.92356L4.59023 9H13.2239C13.591 9 13.911 8.75016 14 8.39403L14.85 4.99403C14.9762 4.48911 14.5943 4 14.0739 4H3.7569L3.53498 2.66848C3.47069 2.28273 3.13693 2 2.74586 2H1V3ZM13.0677 8H4.42356L3.92356 5H13.8177L13.0677 8Z" fill="black" fill-opacity="0.9"/>
<path d="M4.75 14.5C5.16421 14.5 5.5 14.1642 5.5 13.75C5.5 13.3358 5.16421 13 4.75 13C4.33579 13 4 13.3358 4 13.75C4 14.1642 4.33579 14.5 4.75 14.5Z" fill="black" fill-opacity="0.9"/>
<path d="M12.813 14.5C13.2272 14.5 13.563 14.1642 13.563 13.75C13.563 13.3358 13.2272 13 12.813 13C12.3987 13 12.063 13.3358 12.063 13.75C12.063 14.1642 12.3987 14.5 12.813 14.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chart-bar","ChartBar"):H("chart-bar",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2L7.5 14H8.5L8.5 2H7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2.5 6V14H3.5L3.5 6H2.5Z" fill="black" fill-opacity="0.9"/>
<path d="M12.5 14L12.5 10H13.5L13.5 14H12.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chart-bubble","ChartBubble"):H("chart-bubble",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5.5C9 7.15686 7.65674 8.5 6 8.5C4.34326 8.5 3 7.15686 3 5.5C3 3.84314 4.34326 2.5 6 2.5C7.65674 2.5 9 3.84314 9 5.5ZM8 5.5C8 4.39543 7.10449 3.5 6 3.5C4.89551 3.5 4 4.39543 4 5.5C4 6.60457 4.89551 7.5 6 7.5C7.10449 7.5 8 6.60457 8 5.5Z" fill="black" fill-opacity="0.9"/>
<path d="M14 10C14 11.3807 12.8806 12.5 11.5 12.5C10.1194 12.5 9 11.3807 9 10C9 8.61929 10.1194 7.5 11.5 7.5C12.8806 7.5 14 8.61929 14 10ZM13 10C13 9.17157 12.3284 8.5 11.5 8.5C10.6716 8.5 10 9.17157 10 10C10 10.8284 10.6716 11.5 11.5 11.5C12.3284 11.5 13 10.8284 13 10Z" fill="black" fill-opacity="0.9"/>
<path d="M5 12C5 12.8284 4.32837 13.5 3.5 13.5C2.67163 13.5 2 12.8284 2 12C2 11.1716 2.67163 10.5 3.5 10.5C4.32837 10.5 5 11.1716 5 12Z" fill="black" fill-opacity="0.9"/>
<path d="M13 4.5C13.5522 4.5 14 4.05229 14 3.5C14 2.94771 13.5522 2.5 13 2.5C12.4478 2.5 12 2.94771 12 3.5C12 4.05229 12.4478 4.5 13 4.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chart-pie","ChartPie"):H("chart-pie",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.9795 8.5H7.5V2.02054C4.42023 2.27461 2 4.85467 2 8C2 11.3137 4.68629 14 8 14C11.1453 14 13.7254 11.5798 13.9795 8.5ZM13.9795 7.5C13.739 4.5851 11.4149 2.26101 8.5 2.02054V7.5H13.9795Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chart","Chart"):H("chart",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.49999 12L4.5 7.49994L5.5 7.49994L5.49999 12H4.49999Z" fill="black" fill-opacity="0.9"/>
<path d="M7.5 4.5L7.5 12H8.5L8.5 4.5H7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M10.5 12L10.5 9L11.5 9L11.5 12H10.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2 3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14C2.44771 14 2 13.5523 2 13V3ZM3 3L3 13L13 13L13 3L3 3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chat","Chat"):H("chat",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.63795 10.5H13V4H3V11.865L4.63795 10.5ZM2.49205 13.59C2.29666 13.7528 2 13.6138 2 13.3595V4C2 3.44771 2.44772 3 3 3H13C13.5523 3 14 3.44772 14 4V10.5C14 11.0523 13.5523 11.5 13 11.5H5L2.49205 13.59Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("check-circle-filled","CheckCircleFilled"):H("check-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM4.5 8.2065L5.2065 7.5L7 9.293L10.7925 5.5L11.5 6.2075L7 10.707L4.5 8.2065Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("check-circle","CheckCircle"):H("check-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8.2065L7 10.707L11.5 6.2075L10.7925 5.5L7 9.293L5.2065 7.5L4.5 8.2065Z" fill="black" fill-opacity="0.9"/>
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM4.66658 12.9888C5.65328 13.6481 6.81332 14 8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.81331 13.6481 5.65327 12.9888 4.66658C12.3295 3.67988 11.3925 2.91085 10.2961 2.45672C9.19975 2.0026 7.99335 1.88378 6.82946 2.11529C5.66558 2.3468 4.59648 2.91824 3.75736 3.75736C2.91825 4.59647 2.3468 5.66557 2.11529 6.82946C1.88378 7.99334 2.0026 9.19974 2.45673 10.2961C2.91085 11.3925 3.67989 12.3295 4.66658 12.9888Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("check-rectangle-filled","CheckRectangleFilled"):H("check-rectangle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM6.99997 9.35708L10.7748 5.58229L11.4819 6.28941L6.99999 10.7712L4.51343 8.28491L5.2205 7.57777L6.99997 9.35708Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("check-rectangle","CheckRectangle"):H("check-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7748 5.58229L6.99995 9.35708L5.22048 7.57777L4.51341 8.28491L6.99997 10.7712L11.4819 6.28941L10.7748 5.58229Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("check","Check"):H("check",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.43348 9.92151L12.6561 3.69885L13.5754 4.61809L6.43348 11.76L1.97412 7.30063L2.89336 6.38139L6.43348 9.92151Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-down-circle","ChevronDownCircle"):H("chevron-down-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7929 6.20707L7.99996 9L5.20704 6.20707L4.49993 6.91418L7.99996 10.4142L11.5 6.91418L10.7929 6.20707Z" fill="black" fill-opacity="0.9"/>
<path d="M1 8C1 4.13401 4.13401 0.999999 8 0.999999C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-down-rectangle","ChevronDownRectangle"):H("chevron-down-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7929 6.20711L7.99999 9L5.20711 6.20711L4.5 6.91421L7.99999 10.4142L11.5 6.91421L10.7929 6.20711Z" fill="black" fill-opacity="0.9"/>
<path d="M14 13C14 13.5523 13.5523 14 13 14L3 14C2.44771 14 2 13.5523 2 13L2 3C2 2.44771 2.44772 2 3 2L13 2C13.5523 2 14 2.44772 14 3L14 13ZM13 13L13 3L3 3L3 13L13 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-down","ChevronDown"):H("chevron-down",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.54028 6.45964L4.45952 5.54041L7.9999 9.08079L11.5403 5.54041L12.4595 6.45964L7.9999 10.9193L3.54028 6.45964Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-left-circle","ChevronLeftCircle"):H("chevron-left-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79293 10.7929L7 7.99996L9.79293 5.20703L9.08582 4.49993L5.58579 7.99996L9.08582 11.5L9.79293 10.7929Z" fill="black" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-left-double","ChevronLeftDouble"):H("chevron-left-double",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0404 4.45952L12.1212 3.54028L7.66155 7.9999L12.1212 12.4595L13.0404 11.5403L9.50003 7.9999L13.0404 4.45952Z" fill="black" fill-opacity="0.9"/>
<path d="M8.04048 4.45952L7.12124 3.54028L2.66162 7.9999L7.12124 12.4595L8.04048 11.5403L4.5001 7.9999L8.04048 4.45952Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-left-rectangle","ChevronLeftRectangle"):H("chevron-left-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79289 10.7929L7 7.99999L9.79289 5.20711L9.08579 4.5L5.58579 7.99999L9.08579 11.5L9.79289 10.7929Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13L2 3C2 2.44771 2.44772 2 3 2L13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3ZM3 13H13V3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-left","ChevronLeft"):H("chevron-left",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5397 3.53998L10.4589 4.45922L6.91856 7.9996L10.4589 11.54L9.5397 12.4592L5.08008 7.9996L9.5397 3.53998Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-right-circle","ChevronRightCircle"):H("chevron-right-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.20707 5.20711L9 8.00004L6.20707 10.793L6.91418 11.5001L10.4142 8.00004L6.91418 4.5L6.20707 5.20711Z" fill="black" fill-opacity="0.9"/>
<path d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-right-double","ChevronRightDouble"):H("chevron-right-double",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.95972 11.5405L3.87896 12.4597L8.33858 8.0001L3.87896 3.54048L2.95972 4.45972L6.5001 8.0001L2.95972 11.5405ZM7.95965 11.5405L8.87889 12.4597L13.3385 8.0001L8.87889 3.54048L7.95965 4.45972L11.5 8.0001L7.95965 11.5405Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-right-rectangle","ChevronRightRectangle"):H("chevron-right-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.20711 5.20711L9 8.00001L6.20711 10.7929L6.91421 11.5L10.4142 8.00001L6.91421 4.5L6.20711 5.20711Z" fill="black" fill-opacity="0.9"/>
<path d="M13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44771 14 2 13.5523 2 13L2 3C2 2.44772 2.44772 2 3 2L13 2ZM13 3L3 3L3 13H13V3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-right","ChevronRight"):H("chevron-right",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.4603 12.4592L5.54106 11.54L9.08144 7.99961L5.54106 4.45923L6.4603 3.53999L10.9199 7.99961L6.4603 12.4592Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-up-circle","ChevronUpCircle"):H("chevron-up-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20711 9.79293L8.00004 7L10.793 9.79293L11.5001 9.08582L8.00004 5.58579L4.5 9.08582L5.20711 9.79293Z" fill="black" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-up-rectangle","ChevronUpRectangle"):H("chevron-up-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20711 9.79289L8.00001 7L10.7929 9.79289L11.5 9.08579L8.00001 5.58579L4.5 9.08579L5.20711 9.79289Z" fill="black" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 13H13V3H3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("chevron-up","ChevronUp"):H("chevron-up",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4595 9.54074L11.5403 10.46L7.9999 6.91959L4.45952 10.46L3.54028 9.54073L7.9999 5.08112L12.4595 9.54074Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("circle","Circle"):H("circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?_("clear","Clear"):H("clear",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4H9V2H7V4ZM10 2V4H13C13.5523 4 14 4.44772 14 5V7C14 7.50427 13.6267 7.92137 13.1414 7.99007L13.8369 12.8586C13.923 13.461 13.4555 14 12.847 14H3.15301C2.54446 14 2.077 13.461 2.16306 12.8586L2.85856 7.99007C2.37326 7.92137 2 7.50427 2 7V5C2 4.44772 2.44772 4 3 4H6V2C6 1.44772 6.44772 1 7 1H9C9.55228 1 10 1.44772 10 2ZM12.1327 7H13V5H9H7H3L3 7H3.8673H12.1327ZM12.1327 8H3.8673L3.15301 13H5V11H6V13H7.5V11H8.5V13H10V11H11V13H12.847L12.1327 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("close-circle-filled","CloseCircleFilled"):H("close-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM5.67091 4.94754L8.00001 7.29075L10.3291 4.94754L11.0384 5.65251L8.70499 8L11.0383 10.3475L10.3291 11.0525L8.00001 8.70925L5.67092 11.0525L4.96168 10.3475L7.29503 8L4.96167 5.65251L5.67091 4.94754Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("close-circle","CloseCircle"):H("close-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.98094 10.3119L7.29289 7.99995L4.98104 5.6881L5.68814 4.98099L8 7.29284L10.3119 4.98099L11.019 5.6881L8.7071 7.99995L11.0191 10.3119L10.3119 11.019L8 8.70706L5.68805 11.019L4.98094 10.3119Z" fill="black" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("close-rectangle","CloseRectangle"):H("close-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.818 10.4748L7.29291 7.99994L4.81812 5.52515L5.52522 4.81804L8.00001 7.29283L10.4749 4.81799L11.182 5.5251L8.70712 7.99994L11.1821 10.4749L10.475 11.182L8.00001 8.70705L5.52511 11.182L4.818 10.4748Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("close","Close"):H("close",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00005 8.91923L11.076 11.9951L11.9952 11.0759L8.91929 7.99999L11.9952 4.92409L11.076 4.00485L8.00005 7.08075L4.92412 4.00482L4.00488 4.92406L7.08081 7.99999L4.00488 11.0759L4.92412 11.9952L8.00005 8.91923Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("cloud-download","CloudDownload"):H("cloud-download",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 6.26257L4.0185 6.34565C2.89613 6.47654 2 7.45287 2 8.66667C2 9.8761 2.89038 10.848 4 10.9838V11.989C2.32292 11.8501 1 10.4132 1 8.66667C1 6.95238 2.26933 5.54286 3.90267 5.35238C4.31333 3.42857 5.99333 2 8 2C10.0067 2 11.6867 3.42857 12.0973 5.35238C13.7307 5.54286 15 6.95238 15 8.66667C15 10.4132 13.6771 11.8501 12 11.989V10.9838C13.1096 10.848 14 9.8761 14 8.66667C14 7.45287 13.1039 6.47654 11.9815 6.34565L11.2691 6.26257L11.1194 5.56114C10.8032 4.08009 9.51599 3 8 3C6.48401 3 5.19679 4.08009 4.88063 5.56114L4.7309 6.26257Z" fill="black" fill-opacity="0.9"/>
<path d="M9.79665 11.2999L8.50332 12.589L8.50338 7.99696L7.50172 7.99694L7.50165 12.589L6.20828 11.2999L5.5 12.0058L7.6495 14.1482C7.84463 14.3427 8.16031 14.3427 8.35543 14.1482L10.5049 12.0058L9.79665 11.2999Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("cloud-upload","CloudUpload"):H("cloud-upload",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 6.26257L4.0185 6.34565C2.89613 6.47654 2 7.45287 2 8.66667C2 9.8761 2.89038 10.848 4 10.9838V11.989C2.32292 11.8501 1 10.4132 1 8.66667C1 6.95238 2.26933 5.54286 3.90267 5.35238C4.31333 3.42857 5.99333 2 8 2C10.0067 2 11.6867 3.42857 12.0973 5.35238C13.7307 5.54286 15 6.95238 15 8.66667C15 10.4132 13.6771 11.8501 12 11.989V10.9838C13.1096 10.848 14 9.8761 14 8.66667C14 7.45287 13.1039 6.47654 11.9815 6.34565L11.2691 6.26257L11.1194 5.56114C10.8032 4.08009 9.51599 3 8 3C6.48401 3 5.19679 4.08009 4.88063 5.56114L4.7309 6.26257Z" fill="black" fill-opacity="0.9"/>
<path d="M6.14062 10.7202L7.49824 9.38764L7.53164 14.5069L8.54247 14.5L8.5092 9.39884L9.88196 10.7377L10.5956 10.0372L8.34437 7.84156C8.14972 7.65173 7.83906 7.65223 7.64502 7.84268L5.42472 10.022L6.14062 10.7202Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("cloud","Cloud"):H("cloud",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 7.26147L4.88063 6.56004C5.19679 5.07899 6.48401 3.9989 8 3.9989C9.51599 3.9989 10.8032 5.07899 11.1194 6.56004L11.2691 7.26147L11.9815 7.34455C13.1039 7.47544 14 8.45177 14 9.66557C14 10.9705 12.9634 11.9989 11.7333 11.9989H4.26667C3.03657 11.9989 2 10.9705 2 9.66557C2 8.45177 2.89613 7.47544 4.0185 7.34455L4.7309 7.26147ZM12.0973 6.35128C11.6867 4.42747 10.0067 2.9989 8 2.9989C5.99333 2.9989 4.31333 4.42747 3.90267 6.35128C2.26933 6.54176 1 7.95128 1 9.66557C1 11.5037 2.46533 12.9989 4.26667 12.9989H11.7333C13.5347 12.9989 15 11.5037 15 9.66557C15 7.95128 13.7307 6.54176 12.0973 6.35128Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("code","Code"):H("code",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.94034 2.55798L6.09333 13.1832L7.05925 13.442L9.90626 2.8168L8.94034 2.55798Z" fill="black" fill-opacity="0.9"/>
<path d="M2.14982 8.00001L5.57495 11.4251L4.86784 12.1323L1.15987 8.42428C0.925551 8.18996 0.925553 7.81006 1.15987 7.57575L4.86784 3.86777L5.57495 4.57488L2.14982 8.00001Z" fill="black" fill-opacity="0.9"/>
<path d="M13.846 8.00001L10.4054 11.4016L11.1085 12.1127L14.8368 8.42668C15.0744 8.19183 15.0744 7.80819 14.8368 7.57333L11.1085 3.88732L10.4054 4.59845L13.846 8.00001Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("control-platform","ControlPlatform"):H("control-platform",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4953 4.24999L8.46882 0.770621C8.17876 0.603152 7.82139 0.603152 7.53132 0.770621L1.50488 4.24999V11.2087C1.50488 11.5437 1.68357 11.8532 1.97363 12.0206L8.00007 15.5L14.0265 12.0206C14.3166 11.8532 14.4953 11.5437 14.4953 11.2087V4.24999ZM7.99907 7.42199L3.00419 4.53826L8.00007 1.65399L12.9954 4.53845L7.99907 7.42199ZM8.50007 8.28866L13.4951 5.4048V11.172L8.50007 14.0554V8.28866ZM7.50007 8.28866V14.0554L2.50407 11.172V5.40422L7.50007 8.28866Z" fill="black"/>
</svg>
`),n==="develop"?_("creditcard","Creditcard"):H("creditcard",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 11H6.5V10H3.5V11Z" fill="black" fill-opacity="0.9"/>
<path d="M15 12V4C15 3.44772 14.5523 3 14 3H2C1.44772 3 1 3.44772 1 4V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12ZM14 4V5.5H2V4H14ZM2 12V6.5H14V12H2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("dashboard","Dashboard"):H("dashboard",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M13.8745 4.90662L9.37556 9.40553L8.66845 8.69843L13.1674 4.19951L13.8745 4.90662Z" fill="black" fill-opacity="0.9"/>
<path d="M8.02203 11.052C7.46974 11.052 7.02203 10.6043 7.02203 10.052C7.02203 9.49972 7.46974 9.052 8.02203 9.052C8.57431 9.052 9.02203 9.49972 9.02203 10.052C9.02203 10.6043 8.57431 11.052 8.02203 11.052ZM8.02203 12.052C9.1266 12.052 10.022 11.1566 10.022 10.052C10.022 8.94743 9.1266 8.052 8.02203 8.052C6.91746 8.052 6.02203 8.94743 6.02203 10.052C6.02203 11.1566 6.91746 12.052 8.02203 12.052Z" fill="black" fill-opacity="0.9"/>
<path d="M8 3.5C4.41015 3.5 1.5 6.41015 1.5 10C1.5 11.3817 1.93054 12.6613 2.66478 13.714L1.8446 14.286C0.997092 13.071 0.5 11.5928 0.5 10C0.5 5.85786 3.85786 2.5 8 2.5C9.2547 2.5 10.4388 2.8085 11.4792 3.35421L11.0147 4.23978C10.1142 3.76743 9.08905 3.5 8 3.5ZM14.5 10C14.5 8.91685 14.2355 7.89696 13.7679 6.99999L14.6547 6.53776C15.1948 7.57405 15.5 8.75212 15.5 10C15.5 11.5928 15.0029 13.071 14.1554 14.286L13.3352 13.714C14.0695 12.6613 14.5 11.3817 14.5 10Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?_("delete","Delete"):H("delete",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12V6H7V12H6Z" fill="black" fill-opacity="0.9"/>
<path d="M9 6V12H10V6H9Z" fill="black" fill-opacity="0.9"/>
<path d="M10.5 3H14V4H13V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V4H2V3H5.5L5.5 1.8C5.5 1.35817 5.85817 1 6.3 1H9.7C10.1418 1 10.5 1.35817 10.5 1.8V3ZM6.5 3H9.5L9.5 2L6.5 2V3ZM4 4V14H12V4H4Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("desktop","Desktop"):H("desktop",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 11H7.5V13H3V14H13V13H8.5V11H13.5C14.0523 11 14.5 10.5523 14.5 10V3C14.5 2.44772 14.0523 2 13.5 2H2.5C1.94771 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11ZM2.5 3L13.5 3V10L2.5 10L2.5 3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("discount-filled","DiscountFilled"):H("discount-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.98714 5.32938C7.44495 5.78719 7.44495 6.52946 6.98714 6.98728C6.52932 7.4451 5.78705 7.4451 5.32923 6.98728C4.87141 6.52946 4.87141 5.78719 5.32923 5.32938C5.78705 4.87156 6.52932 4.87156 6.98714 5.32938Z" fill="black" fill-opacity="0.9"/>
<path d="M2 7.72999C1.99999 7.99522 2.10535 8.24958 2.29289 8.43713L8.20507 14.3493C8.5956 14.7398 9.22876 14.7398 9.61929 14.3493L14.3493 9.6193C14.7398 9.22877 14.7399 8.59561 14.3493 8.20508L8.43714 2.29289C8.2496 2.10535 7.99524 2 7.73002 2L2.00017 2.00005L2 7.72999ZM7.69424 4.62227C8.54259 5.47061 8.54259 6.84605 7.69424 7.69439C6.8459 8.54273 5.47047 8.54273 4.62212 7.69439C3.77378 6.84605 3.77378 5.47061 4.62212 4.62227C5.47047 3.77393 6.8459 3.77393 7.69424 4.62227Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("discount","Discount"):H("discount",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.83885 5.01035C7.0578 4.2293 5.79147 4.2293 5.01042 5.01035C4.22937 5.7914 4.22937 7.05773 5.01042 7.83877C5.79147 8.61982 7.0578 8.61982 7.83885 7.83877C8.6199 7.05773 8.6199 5.7914 7.83885 5.01035ZM7.13174 5.71745C7.52227 6.10798 7.52227 6.74114 7.13174 7.13167C6.74122 7.52219 6.10805 7.52219 5.71753 7.13167C5.32701 6.74114 5.32701 6.10798 5.71753 5.71745C6.10805 5.32693 6.74122 5.32693 7.13174 5.71745Z" fill="black" fill-opacity="0.9"/>
    <path d="M2 7.94985L2.00002 2L7.94975 2.0001C8.21497 2.0001 8.46931 2.10546 8.65685 2.29299L14.7903 8.42646C15.1808 8.81698 15.1808 9.45014 14.7903 9.84067L9.84057 14.7904C9.45004 15.1809 8.81688 15.1809 8.42635 14.7904L2.29289 8.65696C2.10536 8.46942 2 8.21507 2 7.94985ZM7.94974 3.0001L3.00002 3.00002L3 7.94985L9.13346 14.0833L14.0832 9.13356L7.94974 3.0001Z" fill="black" fill-opacity="0.9"/>
</svg>
    `),n==="develop"?_("download","Download"):H("download",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2636 5.81387L8.5 9.57746L8.49998 0.5L7.49998 0.500002L7.5 9.57746L3.73641 5.81387L3.02931 6.52098L7.64645 11.1381C7.84171 11.3334 8.15829 11.3334 8.35355 11.1381L12.9707 6.52098L12.2636 5.81387Z" fill="black" fill-opacity="0.9"/>
<path d="M2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11H13V13H3V11H2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("edit-1","Edit1"):H("edit-1",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M14.1321 4.95049L10.8888 1.70711L11.5959 1L14.8393 4.24338L14.1321 4.95049Z" fill="black" fill-opacity="0.9"/>
<path d="M5.97196 13.1108L2.359 13.8334C2.14909 13.8754 1.96401 13.6903 2.00599 13.4804L2.72858 9.86742L10.0262 2.56982L13.2696 5.8132L5.97196 13.1108ZM11.8554 5.8132L10.0262 3.98403L3.64979 10.3604L3.19249 12.6469L5.47895 12.1896L11.8554 5.8132Z" fill="black" fill-opacity="0.9"/>
<path d="M15 11H11V12H15V11Z" fill="black" fill-opacity="0.9"/>
<path d="M15 13H8.5V14H15V13Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?_("edit","Edit"):H("edit",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8819 1.73695L14.1253 4.98033L14.8324 4.27322L11.589 1.02985L10.8819 1.73695Z" fill="black" fill-opacity="0.9"/>
<path d="M2.35217 13.8632L5.96513 13.1406L13.2627 5.84304L10.0194 2.59966L2.72175 9.89727L1.99916 13.5102C1.95717 13.7201 2.14225 13.9052 2.35217 13.8632ZM10.0194 4.01388L11.8485 5.84304L5.47212 12.2194L3.18566 12.6767L3.64295 10.3903L10.0194 4.01388Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("ellipsis","Ellipsis"):H("ellipsis",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9C2.44775 9 2 8.55228 2 8C2 7.44772 2.44775 7 3 7C3.55225 7 4 7.44772 4 8C4 8.55228 3.55225 9 3 9Z" fill="black" fill-opacity="0.9"/>
<path d="M7 8C7 8.55228 7.44775 9 8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8Z" fill="black" fill-opacity="0.9"/>
<path d="M12 8C12 8.55228 12.4478 9 13 9C13.5522 9 14 8.55228 14 8C14 7.44772 13.5522 7 13 7C12.4478 7 12 7.44772 12 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("enter","Enter"):H("enter",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 4V10H4.20718L5.85363 8.35355L5.14652 7.64645L2.64652 10.1464C2.45126 10.3417 2.45126 10.6583 2.64652 10.8536L5.14652 13.3536L5.85363 12.6464L4.20718 11H13.0001C13.5524 11 14.0001 10.5523 14.0001 10V4H13.0001Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("error-circle-filled","ErrorCircleFilled"):H("error-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM8.5 4.0003V9.49999H7.5V4.0003H8.5ZM7.39429 11H8.59429V12.2H7.39429V11Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("error-circle","ErrorCircle"):H("error-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 4.00037V9.5H7.5V4.00037H8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M8.59424 10.5H7.39429V11.7H8.59424V10.5Z" fill="black" fill-opacity="0.9"/>
<path d="M15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8C1 11.866 4.13403 15 8 15C11.866 15 15 11.866 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68628 14 2 11.3137 2 8C2 4.68628 4.68628 2 8 2C11.3137 2 14 4.68628 14 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("error","Error"):H("error",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49975 2H7.49975V11H8.49975V2ZM8.60137 12.8H7.40137V14H8.60137V12.8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("file-add","FileAdd"):H("file-add",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 1C3.44386 1 3 1.44386 3 2V13C3 13.5561 3.44386 14 4 14H8.53613V13H4V2H8V6H12V8.48438H13V5.70711C13 5.44189 12.8946 5.18754 12.7071 5L12.6246 4.91753L12.6236 4.91644L8.91355 1.20645C8.82878 1.12167 8.72835 1.07544 8.62863 1.05804C8.52186 1.01999 8.40841 1 8.29289 1H4ZM11.2929 5H9V2.70711L11.2929 5Z" fill="black" fill-opacity="0.9"/>
<path d="M12 15V13H10V12H12V10H13V12H15V13H13V15H12Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("file-copy","FileCopy"):H("file-copy",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99995 1.92191C3.99995 1.33727 4.52001 1 4.9953 1H9.36584C9.63437 1 9.89162 1.108 10.0797 1.29969L13.7139 5.00415C13.8972 5.19093 13.9999 5.44209 14.0001 5.70375L14.0046 12.0777C14.0046 12.6624 13.4846 13 13.0093 13H4.99995C4.52472 13 4.00474 12.6628 4.00461 12.0783L3.99995 1.92191ZM4.99999 2L5.00457 12H13.0046L13.0003 6.01275H9.00004V2H4.99999ZM10 2.64645V5.01275H12.3215L10 2.64645Z" fill="black" fill-opacity="0.9"/>
<path d="M2 5.00001V14.0128C2 14.565 2.44772 15.0128 3 15.0128H11V14.0128L3 14.0128V5.00001H2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("file-excel","FileExcel"):H("file-excel",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 1.99988V13.9999H8V14.9999H3.49534C3.02005 14.9999 2.5 14.6626 2.5 14.078V1.92179C2.5 1.33715 3.02005 0.999878 3.49534 0.999878H8.86589C9.13442 0.999878 9.39167 1.10788 9.57972 1.29957L13.2138 5.00388C13.3973 5.19083 13.5 5.44229 13.5 5.70419V7.49988H12.5V6.01263H8.50008V1.99988H3.5ZM9.50008 2.64633V5.01263H11.8215L9.50008 2.64633Z" fill="black" fill-opacity="0.9"/>
<path d="M10.3363 9.79198L10.3363 8.95227L9.3363 8.95228L9.33631 9.79198C9.33631 10.05 9.42442 10.3004 9.58607 10.5015L10.7767 11.9832L9.58607 13.4649C9.42442 13.666 9.33631 13.9164 9.33631 14.1744L9.33631 15.0141L10.3363 15.0141L10.3363 14.1744C10.3363 14.1442 10.3466 14.1148 10.3656 14.0913L11.4181 12.7814L12.4707 14.0913C12.4896 14.1148 12.5 14.1442 12.5 14.1744V15.0141H13.5V14.1744C13.5 13.9164 13.4119 13.666 13.2502 13.4649L12.0596 11.9832L13.2502 10.5015C13.4119 10.3004 13.5 10.05 13.5 9.79198V8.95227H12.5V9.79198C12.5 9.82222 12.4896 9.85155 12.4707 9.87512L11.4181 11.185L10.3656 9.87512C10.3466 9.85155 10.3363 9.82222 10.3363 9.79198Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("file-icon","FileIcon"):H("file-icon",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H11.2336V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 5.01275H11.8215L9.50008 2.64645V5.01275Z" fill="black" fill-opacity="0.9"/>
<path d="M4.48145 9H6.48145V9.8H5.88145V12.2H6.48145V13H4.48145V12.2H5.08145V9.8H4.48145V9Z" fill="black" fill-opacity="0.9"/>
<path d="M8.99999 9H7.79246C7.35479 9 6.99999 9.35817 6.99999 9.8V12.2C6.99999 12.6418 7.35479 13 7.79246 13H8.99999V12.2H7.79246V9.8H8.99999V9Z" fill="black" fill-opacity="0.9"/>
<path d="M13.7972 9.8L13.7972 13H13L13 9H14.7434C15.1837 9 15.5406 9.35817 15.5406 9.8V13H14.7434V9.8H13.7972Z" fill="black" fill-opacity="0.9"/>
<path d="M9.5 9.80928L9.5 12.201C9.5 12.6413 9.85693 12.9982 10.2972 12.9982H11.4931C11.9334 12.9982 12.2903 12.6413 12.2903 12.201V9.80928C12.2903 9.36899 11.9334 9.01205 11.4931 9.01205H10.2972C9.85693 9.01205 9.5 9.36899 9.5 9.80928ZM10.2972 12.201L10.2972 9.80928H11.4931V12.201H10.2972Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("file-image","FileImage"):H("file-image",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.57127 1C3.09598 1 2.57593 1.33727 2.57593 1.92191V14.0781C2.57593 14.6627 3.09598 15 3.57127 15H12.5048C12.9801 15 13.5001 14.6627 13.5001 14.0781V5.70431C13.5001 5.44241 13.3974 5.19096 13.214 5.004L9.57985 1.29969C9.3918 1.108 9.13455 1 8.86601 1H3.57127ZM3.57593 11.3636V2H8.57604V6.0092H12.5001V10.2878L10.5759 8.3636L7.57593 11.3636L5.57593 9.3636L3.57593 11.3636ZM3.57593 12.6364L5.57593 10.6364L6.93953 12L4.93953 14H3.57593V12.6364ZM10.5759 9.6364L12.5001 11.5606V14H6.21232L10.5759 9.6364ZM11.8182 5.0092H9.57604V2.72374L11.8182 5.0092Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("file-paste","FilePaste"):H("file-paste",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 11.5H5V12.5H11V11.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2.5 1.92191C2.5 1.33727 3.02005 1 3.49534 1L8.7929 1.00007C9.05812 1.00007 9.31246 1.10543 9.5 1.29296L13.2071 5.00007C13.3946 5.18761 13.5 5.44196 13.5 5.70718V14.0782C13.5 14.6628 12.9799 15.0001 12.5047 15.0001L3.49534 15C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191ZM3.5 2V14L12.5 14.0001V6.01283H8.50005V2.00007L3.5 2ZM9.50005 5.01283H11.8056L9.50005 2.70722V5.01283Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("file-pdf","FilePdf"):H("file-pdf",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 14V2H8.50008V6.01275H12.5V7.5H13.5V5.70431C13.5 5.44241 13.3973 5.19096 13.2138 5.004L9.57972 1.29969C9.39167 1.108 9.13442 1 8.86589 1H3.49534C3.02005 1 2.5 1.33727 2.5 1.92191V14.0781C2.5 14.6627 3.02005 15 3.49534 15H12V14H3.5ZM11.8215 5.01275H9.50008V2.64645L11.8215 5.01275Z" fill="black" fill-opacity="0.9"/>
<path d="M8.37695 9H10.2384C10.7216 9 11.1134 9.39175 11.1134 9.875V12.1064C11.1134 12.5897 10.7216 12.9814 10.2384 12.9814H8.37695V9ZM9.12695 9.75V12.2314H10.2384C10.3074 12.2314 10.3634 12.1755 10.3634 12.1064L10.3634 9.875C10.3634 9.80596 10.3074 9.75 10.2384 9.75H9.12695Z" fill="black" fill-opacity="0.9"/>
<path d="M5 9.00593H6.86142C7.34467 9.00593 7.73642 9.39768 7.73642 9.88093V10.9327C7.73642 11.416 7.34467 11.8077 6.86142 11.8077H5.75V12.9977H5V9.00593ZM5.75 11.0577H6.86142C6.93046 11.0577 6.98642 11.0017 6.98642 10.9327V9.88093C6.98642 9.81189 6.93046 9.75593 6.86142 9.75593H5.75V11.0577Z" fill="black" fill-opacity="0.9"/>
<path d="M11.7539 12.9977H12.5039V11.4166H14.1153V10.6666H12.5039V9.75005H14.1153V9.00005H11.7539V12.9977Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("file-powerpoint","FilePowerpoint"):H("file-powerpoint",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H8V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 2.64645V5.01275H11.8215L9.50008 2.64645Z" fill="black" fill-opacity="0.9"/>
<path d="M12.5 8.5H9.5V15H10.5V12.5H12.5C13.0523 12.5 13.5 12.0523 13.5 11.5V9.5C13.5 8.94772 13.0523 8.5 12.5 8.5ZM12.5 11.5H10.5V9.5H12.5V11.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("file-unknown","FileUnknown"):H("file-unknown",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H9V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.78616C9.05469 1 9.31194 1.108 9.5 1.29969L13.1341 5.004C13.3175 5.19096 13.4203 5.44241 13.4203 5.70431V7.5H12.4203V6.01275H8.42036V2H3.5ZM9.42036 2.64645V5.01275H11.7418L9.42036 2.64645Z" fill="black" fill-opacity="0.9"/>
<path d="M11.4203 8.42065C10.3495 8.42065 9.42028 9.24178 9.42028 10.3222H10.4203C10.4203 9.85692 10.8368 9.42065 11.4203 9.42065C12.0038 9.42065 12.4203 9.85692 12.4203 10.3222C12.4203 10.6216 12.1402 10.9812 11.7014 11.1477L11.699 11.1487C11.2559 11.3196 10.9203 11.7405 10.9203 12.2599V12.9207H11.9203V12.2599C11.9203 12.1949 11.9616 12.1195 12.0579 12.0821C12.7159 11.8317 13.4203 11.1914 13.4203 10.3222C13.4203 9.24178 12.491 8.42065 11.4203 8.42065Z" fill="black" fill-opacity="0.9"/>
<path d="M11.4202 13.8C11.0888 13.8 10.8202 14.0686 10.8202 14.4C10.8202 14.7314 11.0888 15 11.4202 15C11.7515 15 12.0202 14.7314 12.0202 14.4C12.0202 14.0686 11.7515 13.8 11.4202 13.8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("file-word","FileWord"):H("file-word",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2.00006V14.0001H6.5V15.0001H3.49534C3.02005 15.0001 2.5 14.6628 2.5 14.0781V1.92197C2.5 1.33733 3.02005 1.00006 3.49534 1.00006L8.8658 1C9.13433 1 9.39158 1.108 9.57964 1.29969L13.2138 5.004C13.3972 5.19096 13.4999 5.44241 13.4999 5.70431V8H12.4999V6.01275H8.5V2L3.5 2.00006ZM9.5 2.64645V5.01275H11.8215L9.5 2.64645Z" fill="black" fill-opacity="0.9"/>
<path d="M9 14L9 9.5H8L8 14C8 14.5523 8.44772 15 9 15H12.5C13.0523 15 13.5 14.5523 13.5 14V9.5H12.5L12.5 14H11.25L11.25 9.5H10.25L10.25 14H9Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("file","File"):H("file",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49534 1C3.02005 1 2.5 1.33727 2.5 1.92191V14.0781C2.5 14.6627 3.02005 15 3.49534 15L12.5047 15.0001C12.9799 15.0001 13.5 14.6628 13.5 14.0782V5.70718C13.5 5.44196 13.3946 5.18761 13.2071 5.00007L9.5 1.29296C9.31246 1.10543 9.05812 1.00007 8.7929 1.00007L3.49534 1ZM8.50005 2.00007V6.01283H12.5V14.0001L3.5 14V2L8.50005 2.00007ZM9.50005 2.70722L11.8056 5.01283H9.50005V2.70722Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("filter-clear","FilterClear"):H("filter-clear",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00293 2H10.9975C11.5498 2 11.9975 2.44772 11.9975 3C11.9975 3.27469 11.8845 3.53729 11.685 3.72615L8.00004 7.214V12.75L5.00004 15L4.99904 7.214L1.31537 3.72612C0.945188 3.3756 0.902004 2.80934 1.19622 2.40887L1.27681 2.31243C1.46567 2.11298 1.72825 2 2.00293 2ZM10.9975 3H2.00293L6.00004 6.78486L5.99904 12.999L7.00004 12.249V6.78485L10.9975 3Z" fill="black" fill-opacity="0.9"/>
<path d="M10.7071 10L12.1214 11.4143L13.5357 10L14.2428 10.7071L12.8285 12.1214L14.2426 13.5355L13.5355 14.2426L12.1214 12.8285L10.7073 14.2426L10.0002 13.5355L11.4143 12.1214L10 10.7071L10.7071 10Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("filter","Filter"):H("filter",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V4.78597L9.75 7.28597V14H6.25V7.28597L2 4.78597V3ZM13 3H3V4.21403L7.25 6.71403V13H8.75V6.71403L13 4.21403V3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("flag","Flag"):H("flag",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2H13.46C13.7582 2 14 2.24177 14 2.54V9.46C14 9.75823 13.7582 10 13.46 10H4V15H3V10L3 2ZM4 3V9H13V3H4Z" fill="black" fill-opacity="0.9"/>
</svg>
    `),n==="develop"?_("folder-add","FolderAdd"):H("folder-add",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3C1.5 2.44772 1.94772 2 2.5 2H6.0906L8.16202 3.5H13C13.5523 3.5 14 3.94772 14 4.5V8.5H13V4.5H7.83798L5.76655 3L2.5 3V12H8.5V13H2.5C1.94772 13 1.5 12.5523 1.5 12V3Z" fill="black" fill-opacity="0.9"/>
<path d="M12 15V13H10V12H12V10H13V12H15V13H13V15H12Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("folder-open","FolderOpen"):H("folder-open",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2.74396H6.42857L8.5 4.39468H13.5V3.39468H8.84972L6.77829 1.74396L2.5 1.74396V2.74396Z" fill="black" fill-opacity="0.9"/>
<path d="M2.5 4.39466C1.94772 4.39466 1.5 4.84237 1.5 5.39466V13C1.5 13.5523 1.94772 14 2.5 14L13.5 14C14.0523 14 14.5 13.5523 14.5 13V7.04537C14.5 6.49309 14.0523 6.04537 13.5 6.04537H8.17486L6.10343 4.39465L2.5 4.39466ZM2.5 5.39466L5.75371 5.39465L7.82514 7.04537H13.5V13L2.5 13V5.39466Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("folder","Folder"):H("folder",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3.5C1.5 2.94771 1.94772 2.5 2.5 2.5H5.42857H5.5906L5.72183 2.59503L7.66202 4H13.5C14.0523 4 14.5 4.44772 14.5 5V13C14.5 13.5523 14.0523 14 13.5 14H2.5C1.94772 14 1.5 13.5523 1.5 13L1.5 3.5ZM5.26655 3.5L2.5 3.5V13H13.5V5H7.5H7.33798L7.20675 4.90497L5.26655 3.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("fork","Fork"):H("fork",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2.5C6 2.22386 6.22386 2 6.5 2H9.5C9.77614 2 10 2.22386 10 2.5V5.5C10 5.77614 9.77614 6 9.5 6H8.5V8H11.5C12.0523 8 12.5 8.44772 12.5 9V10H13.5C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H10.5C10.2239 14 10 13.7761 10 13.5V10.5C10 10.2239 10.2239 10 10.5 10H11.5V9H4.5V10H5.5C5.77614 10 6 10.2239 6 10.5V13.5C6 13.7761 5.77614 14 5.5 14H2.5C2.22386 14 2 13.7761 2 13.5V10.5C2 10.2239 2.22386 10 2.5 10H3.5V9C3.5 8.44772 3.94772 8 4.5 8H7.5V6H6.5C6.22386 6 6 5.77614 6 5.5V2.5ZM7 5H9V3H7V5ZM3 11V13H5V11H3ZM11 11V13H13V11H11Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("format-horizontal-align-bottom","FormatHorizontalAlignBottom"):H("format-horizontal-align-bottom",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14L13 2H14L14 14H13Z" fill="black" fill-opacity="0.9"/>
<path d="M10.5 14V6H9.5V14H10.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3.5 6L3.5 14H2.5V6H3.5Z" fill="black" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("format-horizontal-align-center","FormatHorizontalAlignCenter"):H("format-horizontal-align-center",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14L13 2H14L14 14H13Z" fill="black" fill-opacity="0.9"/>
<path d="M10.5 12V4H9.5V12H10.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3.5 4L3.5 12H2.5V4H3.5Z" fill="black" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("format-horizontal-align-top","FormatHorizontalAlignTop"):H("format-horizontal-align-top",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2L2.5 11H3.5L3.5 2H2.5Z" fill="black" fill-opacity="0.9"/>
<path d="M9.5 11L9.5 2H10.5L10.5 11H9.5Z" fill="black" fill-opacity="0.9"/>
<path d="M13 14L13 2H14L14 14H13Z" fill="black" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("format-vertical-align-center","FormatVerticalAlignCenter"):H("format-vertical-align-center",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3Z" fill="black" fill-opacity="0.9"/>
<path d="M4 6.5H12V5.5H4V6.5Z" fill="black" fill-opacity="0.9"/>
<path d="M12 13.5H4V12.5H12V13.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2 10H14V9H2V10Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("format-vertical-align-left","FormatVerticalAlignLeft"):H("format-vertical-align-left",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3Z" fill="black" fill-opacity="0.9"/>
<path d="M2 6.5H11V5.5H2V6.5Z" fill="black" fill-opacity="0.9"/>
<path d="M11 13.5H2V12.5H11V13.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2 10H14V9H2V10Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("format-vertical-align-right","FormatVerticalAlignRight"):H("format-vertical-align-right",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3ZM5 6.5H14V5.5H5V6.5ZM14 13.5H5V12.5H14V13.5ZM2 10H14V9H2V10Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("forward","Forward"):H("forward",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7579 7.60926C15.0086 7.80943 15.0086 8.19058 14.7579 8.39075L9.12049 12.8914C8.79303 13.1529 8.30854 12.9197 8.30854 12.5007L8.30854 8.23459C8.27912 8.29002 8.23853 8.341 8.18678 8.38412L2.82034 12.8562C2.49468 13.1276 2.00024 12.896 2.00024 12.4721L2.00025 3.5279C2.00025 3.10398 2.49468 2.87241 2.82034 3.1438L8.18678 7.61591C8.23853 7.65903 8.27912 7.71 8.30854 7.76544L8.30854 3.49935C8.30854 3.08033 8.79303 2.84717 9.12049 3.1086L14.7579 7.60926ZM9.30854 4.53833L9.30854 11.4617L13.6445 8.00001L9.30854 4.53833ZM3.00025 4.59544L3.00024 11.4046L7.08567 8.00001L3.00025 4.59544Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("fullscreen-exit","FullscreenExit"):H("fullscreen-exit",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.50004 5.79293V3.00004L7.50004 3.00004V7.00004C7.50004 7.27618 7.27618 7.50004 7.00004 7.50004L3.00004 7.50004L3.00004 6.50004L5.79293 6.50004L2.14648 2.85359L2.85359 2.14648L6.50004 5.79293Z" fill="black" fill-opacity="0.9"/>
<path d="M9.50004 10.2071V13H8.50004V9.00004C8.50004 8.7239 8.7239 8.50004 9.00004 8.50004H13V9.50004H10.2071L13.8536 13.1465L13.1465 13.8536L9.50004 10.2071Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("fullscreen","Fullscreen"):H("fullscreen",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4.20711V7H2.5V3C2.5 2.72386 2.72386 2.5 3 2.5L7 2.5V3.5H4.2071L7.35355 6.64646L6.64645 7.35357L3.5 4.20711Z" fill="black" fill-opacity="0.9"/>
<path d="M12.5 11.7929V9H13.5V13C13.5 13.2761 13.2761 13.5 13 13.5L9 13.5L9 12.5H11.7929L8.64645 9.35353L9.35355 8.64643L12.5 11.7929Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("gender-female","GenderFemale"):H("gender-female",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.67828C6.067 1.67828 4.5 3.24529 4.5 5.17828C4.5 6.94604 5.81055 8.4077 7.51306 8.64468L7.51311 10.0021H5.51315V11.0021H7.51315L7.51329 14.502L8.51329 14.502L8.51315 11.0021H10.5132V10.0021H8.51311L8.51306 8.64095C10.2028 8.39273 11.5 6.93699 11.5 5.17828C11.5 3.24529 9.933 1.67828 8 1.67828ZM8 2.67828C9.38071 2.67828 10.5 3.79757 10.5 5.17828C10.5 6.559 9.38071 7.67828 8 7.67828C6.61929 7.67828 5.5 6.559 5.5 5.17828C5.5 3.79757 6.61929 2.67828 8 2.67828Z" fill="black"/>
</svg>
`),n==="develop"?_("gender-male","GenderMale"):H("gender-male",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9997 3.6C12.9997 3.26863 12.7311 3 12.3997 3H8.99975V4L11.3825 4L7.67208 7.7104C6.29899 6.64114 4.31234 6.73766 3.05003 7.99998C1.68319 9.36682 1.68319 11.5829 3.05003 12.9497C4.41686 14.3166 6.63294 14.3166 7.99978 12.9497C9.23096 11.7185 9.35315 9.79831 8.36634 8.43036L11.9997 4.79693V7H12.9997V3.6ZM3.75714 12.2426C2.78082 11.2663 2.78082 9.6834 3.75714 8.70709C4.73345 7.73078 6.31636 7.73078 7.29267 8.70709C8.26898 9.6834 8.26898 11.2663 7.29267 12.2426C6.31636 13.2189 4.73345 13.2189 3.75714 12.2426Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("gift","Gift"):H("gift",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4C3.5 4.5628 3.68597 5.08217 3.99982 5.5H2.5C2.22386 5.5 2 5.72386 2 6V14C2 14.2761 2.22386 14.5 2.5 14.5H13.5C13.7761 14.5 14 14.2761 14 14V6C14 5.72386 13.7761 5.5 13.5 5.5H12.0002C12.314 5.08217 12.5 4.5628 12.5 4C12.5 2.61929 11.3807 1.5 10 1.5C9.1822 1.5 8.45611 1.89267 8 2.49976C7.54388 1.89267 6.8178 1.5 6 1.5C4.61929 1.5 3.5 2.61929 3.5 4ZM11.5 4C11.5 4.82843 10.8284 5.5 10 5.5H8.5V4C8.5 3.17157 9.17157 2.5 10 2.5C10.8284 2.5 11.5 3.17157 11.5 4ZM7.5 6.5V11H8.5V6.5H13V13.5H3V6.5H7.5ZM7.5 5.5H6C5.17157 5.5 4.5 4.82843 4.5 4C4.5 3.17157 5.17157 2.5 6 2.5C6.82843 2.5 7.5 3.17157 7.5 4V5.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("heart-filled","HeartFilled"):H("heart-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6.61283C2 3.69894 5.46385 2.17518 7.61184 4.14417L8 4.49999L8.38816 4.14418C10.5362 2.17518 14 3.69893 14 6.61283C14 7.50101 13.6472 8.35282 13.0191 8.98086L8.14571 13.8543C8.06523 13.9348 7.93477 13.9348 7.85429 13.8543L2.98087 8.98086C2.35283 8.35282 2 7.50101 2 6.61283Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("heart","Heart"):H("heart",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5.85656L9.06389 4.88133C10.5705 3.50029 13 4.56904 13 6.61283C13 7.2358 12.7525 7.83325 12.312 8.27375L8 12.5858L3.68798 8.27376C3.24747 7.83325 3 7.2358 3 6.61283C3 4.56904 5.42952 3.50029 6.93611 4.88133L8 5.85656ZM7.61184 4.14417C5.46385 2.17518 2 3.69894 2 6.61283C2 7.50101 2.35283 8.35282 2.98087 8.98086L7.85429 13.8543C7.93477 13.9348 8.06523 13.9348 8.14571 13.8543L13.0191 8.98086C13.6472 8.35282 14 7.50101 14 6.61283C14 3.69893 10.5362 2.17518 8.38816 4.14418L8 4.49999L7.61184 4.14417Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("help-circle-filled","HelpCircleFilled"):H("help-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9944 8C14.9944 4.13401 11.8604 1 7.99439 1C4.12839 0.999998 0.994386 4.134 0.994385 8C0.994383 11.866 4.12839 15 7.99438 15C11.8604 15 14.9944 11.866 14.9944 8ZM5.80273 6.6315C5.80273 5.42262 6.78535 4.44 7.99424 4.44C9.20312 4.44 10.1857 5.42262 10.1857 6.6315C10.1857 7.60163 9.44315 8.35248 8.70124 8.65455C8.58029 8.70488 8.49428 8.82451 8.49428 8.97008V9.7675H7.49428V8.97008C7.49428 8.41041 7.83313 7.931 8.32065 7.7298L8.3232 7.72875C8.81796 7.52775 9.18574 7.07185 9.18574 6.6315C9.18574 5.9749 8.65084 5.44 7.99424 5.44C7.33764 5.44 6.80273 5.9749 6.80273 6.6315H5.80273ZM7.46697 11.1734C7.46697 10.8823 7.70302 10.6462 7.99419 10.6462C8.28537 10.6462 8.52141 10.8823 8.52141 11.1734C8.52141 11.4646 8.28537 11.7007 7.99419 11.7007C7.70302 11.7007 7.46697 11.4646 7.46697 11.1734Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("help-circle","HelpCircle"):H("help-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.39404 11.6C7.39404 11.2686 7.66267 11 7.99404 11C8.32541 11 8.59404 11.2686 8.59404 11.6C8.59404 11.9314 8.32541 12.2 7.99404 12.2C7.66267 12.2 7.39404 11.9314 7.39404 11.6Z" fill="black" fill-opacity="0.9"/>
<path d="M7.99409 4.0061C6.65645 4.0061 5.56909 5.09346 5.56909 6.4311H6.56909C6.56909 5.64574 7.20873 5.0061 7.99409 5.0061C8.77945 5.0061 9.41909 5.64574 9.41909 6.4311C9.41909 6.96885 8.9746 7.50808 8.39445 7.74376L8.3919 7.74481C7.86235 7.96335 7.49414 8.48413 7.49414 9.0925V10H8.49414V9.0925C8.49414 8.89828 8.60945 8.73731 8.77236 8.66961C9.59969 8.33289 10.4191 7.49869 10.4191 6.4311C10.4191 5.09346 9.33173 4.0061 7.99409 4.0061Z" fill="black" fill-opacity="0.9"/>
<path d="M14.9941 8C14.9941 4.13401 11.8601 1 7.99414 1C4.12815 0.999998 0.994142 4.134 0.994141 8C0.994138 11.866 4.12815 15 7.99414 15C11.8601 15 14.9941 11.866 14.9941 8ZM13.9941 8C13.9941 11.3137 11.3078 14 7.99414 14C4.68043 14 1.99414 11.3137 1.99414 8C1.99414 4.68629 4.68043 2 7.99414 2C11.3079 2 13.9941 4.68629 13.9941 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("help","Help"):H("help",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2.5C6.10262 2.5 4.5 3.94793 4.5 5.8H5.5C5.5 4.56407 6.58881 3.5 8 3.5C9.41119 3.5 10.5 4.56407 10.5 5.8C10.5 6.68407 9.72532 7.55083 8.73987 7.92448L8.73742 7.92542C8.02449 8.20003 7.5 8.86853 7.5 9.68V11H8.5V9.68C8.5 9.32382 8.72935 9.0006 9.09579 8.859C10.3042 8.40029 11.5 7.25137 11.5 5.8C11.5 3.94793 9.89738 2.5 8 2.5Z" fill="black" fill-opacity="0.9"/>
<path d="M8 12C7.58579 12 7.25 12.3358 7.25 12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75C8.75 12.3358 8.41421 12 8 12Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("history","History"):H("history",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.90582 2.79339C10.8499 2.79339 13.2095 5.14005 13.2095 8.00171C13.2095 10.8634 10.8499 13.21 7.90581 13.21C5.44426 13.21 3.39128 11.5695 2.78447 9.35914L1.75098 9.52779C2.44243 12.2419 4.93584 14.2517 7.90581 14.2517C11.4103 14.2517 14.2512 11.4535 14.2512 8.00171C14.2512 4.54993 11.4103 1.75171 7.90582 1.75171C5.80622 1.75171 3.9448 2.75613 2.78981 4.30376L2.78981 2.64486H1.75098V5.79135C1.75098 6.0675 1.97483 6.29135 2.25098 6.29135L5.37759 6.29135V5.24683H3.40454C4.33896 3.77685 5.99992 2.79339 7.90582 2.79339Z" fill="black" fill-opacity="0.9"/>
<path d="M6.99951 5.5V8.38893L9.64596 11.0354L10.3531 10.3283L7.99951 7.97471V5.5H6.99951Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("home","Home"):H("home",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00004 11V12H10V11H6.00004Z" fill="black" fill-opacity="0.9"/>
<path d="M7.64648 1.64646C7.84175 1.4512 8.15833 1.4512 8.35359 1.64646L14.8536 8.14646L14.1465 8.85357L13 7.70712V13.5C13 14.0523 12.5523 14.5 12 14.5H4.00004C3.44775 14.5 3.00004 14.0523 3.00004 13.5V7.70712L1.85359 8.85357L1.14648 8.14646L7.64648 1.64646ZM8.00004 2.70712L4.00004 6.70712V13.5H12V6.70712L8.00004 2.70712Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("hourglass","Hourglass"):H("hourglass",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 7.11557L12 3.79931V2.5H4V3.79932L7.99992 7.11557ZM3 4.26923V2.5C3 1.94771 3.44772 1.5 4 1.5H12C12.5523 1.5 13 1.94772 13 2.5V4.26923L8.49992 8.00002L13 11.7308V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V11.7308L7.49992 8.00002L3 4.26923ZM4 12.2007V13.5H12V12.2007L7.99992 8.88447L4 12.2007Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("image-error","ImageError"):H("image-error",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13V8H3L3 10.2929L6 7.29289L11.7071 13H13L13 3L8 3V2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14C2.44772 14 2 13.5523 2 13ZM6 8.70711L3 11.7071L3 13L10.2929 13L6 8.70711Z" fill="black" fill-opacity="0.9"/>
<path d="M12 6C12 7.10457 11.1046 8 10 8C8.89543 8 8 7.10457 8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7C10.5523 7 11 6.55228 11 6Z" fill="black" fill-opacity="0.9"/>
<path d="M6.28208 5.55923L5.57497 6.26634L4.16076 4.85213L2.74654 6.26634L2.03943 5.55923L3.45365 4.14502L2.03943 2.73081L2.74654 2.0237L4.16076 3.43791L5.57497 2.0237L6.28208 2.73081L4.86786 4.14502L6.28208 5.55923Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("image","Image"):H("image",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8ZM10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z" fill="black" fill-opacity="0.9"/>
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM3 11.7071L6 8.70711L10.2929 13L3 13L3 11.7071ZM3 10.2929L3 3L13 3L13 13H11.7071L6 7.29289L3 10.2929Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("info-circle-filled","InfoCircleFilled"):H("info-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.3999 4H8.59985V5.19995H7.3999V4ZM7.50562 6.5H8.50562V11.9998H7.50562V6.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("info-circle","InfoCircle"):H("info-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50562 11.9998V6.5H8.50562V11.9998H7.50562Z" fill="black" fill-opacity="0.9"/>
<path d="M8.59985 4H7.3999V5.19995H8.59985V4Z" fill="black" fill-opacity="0.9"/>
<path d="M1 8C1 11.866 4.13403 15 8 15C11.866 15 15 11.866 15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8ZM2 8C2 4.68628 4.68628 2 8 2C11.3137 2 14 4.68628 14 8C14 11.3137 11.3137 14 8 14C4.68628 14 2 11.3137 2 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("internet","Internet"):H("internet",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.1001 7.9C1.1001 4.08927 4.18928 1.00005 8 1C11.8108 1 14.9001 4.08923 14.9001 7.9V8.1C14.9001 11.9108 11.8109 15 8.0001 15C4.18938 14.9999 1.1001 11.9107 1.1001 8.1V7.9ZM13.8868 8.5H10.8869C10.7905 10.419 10.1384 12.3152 8.93067 13.927C11.6183 13.5012 13.7019 11.2606 13.8868 8.5ZM10.8869 7.5H13.8868C13.7019 4.73941 11.6183 2.4988 8.93067 2.07297C10.1384 3.68475 10.7905 5.58102 10.8869 7.5ZM9.88552 7.5C9.78624 5.72473 9.15773 3.97354 8 2.50303C6.84227 3.97354 6.21376 5.72473 6.11448 7.5H9.88552ZM5.11307 8.5H2.11344C2.29825 11.2605 4.38178 13.5011 7.06931 13.927C5.8616 12.3152 5.20952 10.419 5.11307 8.5ZM5.11307 7.5C5.20952 5.58103 5.86159 3.68478 7.06931 2.07301C4.38177 2.49893 2.29825 4.73949 2.11344 7.5H5.11307ZM9.88552 8.5H6.11448C6.21376 10.2753 6.84227 12.0265 8 13.497C9.15773 12.0265 9.78624 10.2753 9.88552 8.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("jump","Jump"):H("jump",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.29329 13.7067C2.48075 13.8942 2.73489 13.9996 3 14H13C13.2651 13.9996 13.5193 13.8942 13.7067 13.7067C13.8942 13.5193 13.9996 13.2651 14 13V8.5H13V13H3V3H7.5V2H3C2.73489 2.00036 2.48075 2.10583 2.29329 2.29329C2.10583 2.48075 2.00036 2.73489 2 3V13C2.00036 13.2651 2.10583 13.5193 2.29329 13.7067Z" fill="black" fill-opacity="0.9"/>
<path d="M9 3V2H13.5C13.7761 2 14 2.22386 14 2.5V7H13V3.707L8.707 8L8 7.293L12.293 3H9Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("laptop","Laptop"):H("laptop",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 12C1.94771 12 1.5 11.5523 1.5 11V4C1.5 3.44772 1.94772 3 2.5 3L13.5 3C14.0523 3 14.5 3.44772 14.5 4V11C14.5 11.5523 14.0523 12 13.5 12H2.5ZM2.5 11L13.5 11V4L2.5 4V11Z" fill="black" fill-opacity="0.9"/>
<path d="M15 13H1V14H15V13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("layers","Layers"):H("layers",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0731 4.97791L7.99976 7.50841L1.92641 4.97791C1.51598 4.8069 1.51598 4.20041 1.92641 4.0294L7.99976 1.4989L14.0731 4.0294C14.4835 4.20041 14.4835 4.8069 14.0731 4.97791ZM3.42727 4.50366L7.99976 6.40881L12.5722 4.50366L7.99976 2.5985L3.42727 4.50366Z" fill="black" fill-opacity="0.9"/>
<path d="M1.49902 7.02665V8.25379L8.00001 11.1119L14.499 8.25466V7.02752L8.00001 9.8848L1.49902 7.02665Z" fill="black" fill-opacity="0.9"/>
<path d="M1.49902 10.4194V11.6466L8.00011 14.5048L14.499 11.6475V10.4204L8.00011 13.2776L1.49902 10.4194Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("link-unlink","LinkUnlink"):H("link-unlink",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1.99994L6 3.99994L7 3.99994V1.99994H6Z" fill="black" fill-opacity="0.9"/>
<path d="M8.1767 9.59098L5.8786 11.8891C5.39045 12.3772 4.59899 12.3772 4.11084 11.8891C3.62268 11.4009 3.62268 10.6095 4.11084 10.1213L6.40893 7.82321L5.70183 7.11611L3.40373 9.4142C2.52505 10.2929 2.52505 11.7175 3.40373 12.5962C4.28241 13.4749 5.70703 13.4749 6.58571 12.5962L8.88381 10.2981L8.1767 9.59098Z" fill="black" fill-opacity="0.9"/>
<path d="M9.59091 8.17677L10.298 8.88387L12.5961 6.58578C13.4748 5.7071 13.4748 4.28248 12.5961 3.4038C11.7174 2.52512 10.2928 2.52512 9.41414 3.4038L7.11604 5.70189L7.82315 6.409L10.1212 4.1109C10.6094 3.62275 11.4009 3.62275 11.889 4.1109C12.3772 4.59906 12.3772 5.39051 11.889 5.87867L9.59091 8.17677Z" fill="black" fill-opacity="0.9"/>
<path d="M12 8.99988H14V9.99988H12V8.99988Z" fill="black" fill-opacity="0.9"/>
<path d="M2 6.99994H4V5.99994H2V6.99994Z" fill="black" fill-opacity="0.9"/>
<path d="M10 11.9999V13.9999H9L9 11.9999H10Z" fill="black" fill-opacity="0.9"/>
<path d="M11.7322 11.025L13.3536 12.6463L12.6464 13.3534L11.0251 11.7321L11.7322 11.025Z" fill="black" fill-opacity="0.9"/>
<path d="M2.64645 3.35343L4.26777 4.97475L4.97487 4.26765L3.35355 2.64632L2.64645 3.35343Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("link","Link"):H("link",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.23229 11.8891L8.35361 9.76776L9.06072 10.4749L6.9394 12.5962C5.96309 13.5725 4.38017 13.5725 3.40386 12.5962C2.42755 11.6199 2.42755 10.037 3.40386 9.06066L5.52518 6.93934L6.23229 7.64644L4.11097 9.76776C3.52518 10.3536 3.52518 11.3033 4.11097 11.8891C4.69676 12.4749 5.6465 12.4749 6.23229 11.8891Z" fill="black" fill-opacity="0.9"/>
<path d="M10.4749 9.06066L9.76783 8.35355L11.8891 6.23223C12.4749 5.64644 12.4749 4.6967 11.8891 4.11091C11.3034 3.52512 10.3536 3.52512 9.76782 4.11091L7.6465 6.23223L6.9394 5.52512L9.06072 3.4038C10.037 2.42749 11.6199 2.42749 12.5963 3.4038C13.5726 4.38011 13.5726 5.96303 12.5963 6.93934L10.4749 9.06066Z" fill="black" fill-opacity="0.9"/>
<path d="M9.06087 6.23225L6.23244 9.06068L6.93955 9.76778L9.76798 6.93936L9.06087 6.23225Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("loading","Loading"):H("loading",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.5C4.41038 1.5 1.5 4.41038 1.5 8C1.5 11.5896 4.41038 14.5 8 14.5V12.875C5.30761 12.875 3.125 10.6924 3.125 8C3.125 5.30761 5.30761 3.125 8 3.125C10.6924 3.125 12.875 5.30761 12.875 8H14.5C14.5 4.41038 11.5896 1.5 8 1.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("location","Location"):H("location",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5001 5.99999C10.5001 7.3807 9.3808 8.49999 8.00009 8.49999C6.61938 8.49999 5.50009 7.3807 5.50009 5.99999C5.50009 4.61928 6.61938 3.49999 8.00009 3.49999C9.3808 3.49999 10.5001 4.61928 10.5001 5.99999ZM9.50009 5.99999C9.50009 5.17156 8.82852 4.49999 8.00009 4.49999C7.17166 4.49999 6.50009 5.17156 6.50009 5.99999C6.50009 6.82842 7.17166 7.49999 8.00009 7.49999C8.82852 7.49999 9.50009 6.82842 9.50009 5.99999Z" fill="black" fill-opacity="0.9"/>
<path d="M8.36196 14.4684C8.18821 14.7236 7.81196 14.7236 7.63822 14.4684L3.85557 8.91174C2.50041 6.92103 2.75204 4.24804 4.45488 2.54519C6.41284 0.587231 9.58733 0.58723 11.5453 2.54519C13.2481 4.24804 13.4998 6.92103 12.1446 8.91174L8.36196 14.4684ZM11.318 8.34901C12.4028 6.75536 12.2014 4.61551 10.8382 3.2523C9.27075 1.68486 6.72943 1.68486 5.16199 3.2523C3.79878 4.61551 3.59735 6.75536 4.68221 8.34901L8.00009 13.2229L11.318 8.34901Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("lock-off","LockOff"):H("lock-off",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11V10H10V11H6Z" fill="black" fill-opacity="0.9"/>
<path d="M4.5 6V5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5H10.5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5V6H13C13.2761 6 13.5 6.22386 13.5 6.5V13.5C13.5 13.7761 13.2761 14 13 14H3C2.72386 14 2.5 13.7761 2.5 13.5V6.5C2.5 6.22386 2.72386 6 3 6H4.5ZM3.5 13H12.5V7H3.5V13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("lock-on","LockOn"):H("lock-on",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.99999V11H10V9.99999H6Z" fill="black" fill-opacity="0.9"/>
<path d="M4.5 4.99084V5.99998H3C2.72386 5.99998 2.5 6.22384 2.5 6.49998V13.5C2.5 13.7761 2.72386 14 3 14H13C13.2761 14 13.5 13.7761 13.5 13.5V6.49998C13.5 6.22384 13.2761 5.99998 13 5.99998H11.5V4.99084C11.5 3.05785 9.933 1.49084 8 1.49084C6.067 1.49084 4.5 3.05785 4.5 4.99084ZM10.5 5.99998H5.5V4.99084C5.5 3.61013 6.61929 2.49084 8 2.49084C9.38071 2.49084 10.5 3.61013 10.5 4.99084V5.99998ZM3.5 6.99998H12.5V13H3.5V6.99998Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("login","Login"):H("login",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.47744 7.49999L6.23166 5.25421L6.93877 4.5471L10.0381 7.64644C10.2334 7.8417 10.2334 8.15828 10.0381 8.35355L6.93877 11.4529L6.23166 10.7458L8.47745 8.49999L1 8.49998L1 7.49997L8.47744 7.49999Z" fill="black" fill-opacity="0.9"/>
<path d="M4.00006 5V3H12.0001V13H4.00006V11H3.00006V13.5C3.00006 13.7761 3.22391 14 3.50006 14H12.5001C12.7762 14 13.0001 13.7761 13.0001 13.5V2.5C13.0001 2.22386 12.7762 2 12.5001 2H3.50006C3.22391 2 3.00006 2.22386 3.00006 2.5V5H4.00006Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-android","LogoAndroid"):H("logo-android",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.31701 8.37857C5.31701 8.00808 5.61735 7.70773 5.98784 7.70773C6.35833 7.70773 6.65868 8.00808 6.65868 8.37857C6.65868 8.74906 6.35833 9.0494 5.98784 9.0494C5.61735 9.0494 5.31701 8.74906 5.31701 8.37857Z" fill="black" fill-opacity="0.9"/>
<path d="M10.0129 7.70773C9.64236 7.70773 9.34202 8.00808 9.34202 8.37857C9.34202 8.74906 9.64236 9.0494 10.0129 9.0494C10.3833 9.0494 10.6837 8.74906 10.6837 8.37857C10.6837 8.00808 10.3833 7.70773 10.0129 7.70773Z" fill="black" fill-opacity="0.9"/>
<path d="M2.31638 4L3.9958 5.67942C5.11346 4.84654 6.49933 4.35355 8.00035 4.35355C9.50137 4.35355 10.8872 4.84654 12.0049 5.67942L13.6843 4L14.3914 4.70711L12.762 6.33656C13.8933 7.47647 14.618 9.02038 14.7008 10.7327C14.706 10.8418 14.7087 10.9515 14.7087 11.0619V11.7327H1.29199V11.0619C1.29199 10.9515 1.29466 10.8418 1.29993 10.7327C1.38266 9.02038 2.10744 7.47647 3.23872 6.33656L1.60927 4.70711L2.31638 4ZM2.30132 10.7327H13.6994C13.5288 7.73328 11.0425 5.35355 8.00035 5.35355C4.95819 5.35355 2.47185 7.73328 2.30132 10.7327Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-apple-filled","LogoAppleFilled"):H("logo-apple-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6858 1C10.7724 1.78958 10.4538 2.58273 9.98364 3.15353C9.51181 3.72324 8.73978 4.1671 7.98282 4.10843C7.88056 3.33311 8.26219 2.52735 8.69865 2.02125C9.18583 1.45099 10.0072 1.02742 10.6858 1Z" fill="black" fill-opacity="0.9"/>
<path d="M13.1277 5.60474C12.9822 5.69544 11.6658 6.51624 11.6822 8.16735C11.7001 10.1607 13.3917 10.8541 13.4878 10.8935C13.4901 10.8945 13.4919 10.8952 13.4919 10.8952C13.491 10.8979 13.4893 10.9033 13.4868 10.9115C13.4444 11.0464 13.1713 11.9167 12.5576 12.8138C11.9956 13.6358 11.413 14.4533 10.494 14.47C10.0522 14.4785 9.75708 14.3508 9.45018 14.218C9.1291 14.0791 8.79514 13.9346 8.26696 13.9346C7.71347 13.9346 7.36398 14.0836 7.02734 14.2271C6.73567 14.3514 6.45365 14.4716 6.05696 14.4873C5.17032 14.521 4.49451 13.5998 3.92782 12.7812C2.76867 11.1063 1.88341 8.04809 3.07299 5.98448C3.66244 4.95912 4.71823 4.30991 5.86367 4.29291C6.35713 4.28421 6.83526 4.47406 7.25372 4.64022C7.57365 4.76725 7.8587 4.88043 8.08903 4.88043C8.29595 4.88043 8.57336 4.77102 8.89682 4.64344C9.40607 4.44259 10.0295 4.19671 10.6716 4.26193C11.1111 4.28002 12.3459 4.43904 13.1385 5.59791C13.1364 5.59931 13.1328 5.60158 13.1277 5.60474Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-apple","LogoApple"):H("logo-apple",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.29006 4.00804C8.39216 4.00804 8.49363 4.00196 8.59399 3.99C9.16299 3.92218 9.69626 3.66534 10.1056 3.25603C10.5149 2.84672 10.7717 2.31345 10.8395 1.74445C10.8515 1.64409 10.8576 1.54262 10.8576 1.44052V1H10.4171C10.315 1 10.2135 1.00608 10.1131 1.01804C9.54414 1.08586 9.01086 1.3427 8.60155 1.75201C8.19224 2.16132 7.9354 2.69459 7.86759 3.26359C7.85565 3.36373 7.84957 3.46497 7.84954 3.56684V4.00804H8.29006ZM9.57917 2.72962C9.3173 2.99149 8.98397 3.16546 8.62502 3.23256C8.69212 2.87361 8.86609 2.54028 9.12796 2.27842C9.38982 2.01655 9.72315 1.84258 10.0821 1.77548C10.015 2.13443 9.84103 2.46776 9.57917 2.72962Z" fill="black" fill-opacity="0.9"/>
<path d="M12.6931 5.08954C12.9171 5.26573 13.133 5.48579 13.3255 5.76088C13.3038 5.77264 13.1447 5.86243 12.9359 6.03364C12.4712 6.41459 11.7606 7.19865 11.7714 8.42318C11.7947 10.547 13.6752 11.2524 13.6985 11.26C13.6952 11.2714 13.6793 11.3244 13.6496 11.4103C13.5986 11.5579 13.5068 11.8027 13.3675 12.1011C13.2101 12.4383 12.992 12.8439 12.7039 13.2548C12.1055 14.1119 11.4839 14.9614 10.5047 14.9765C10.0319 14.9877 9.71618 14.8546 9.38781 14.7161C9.04705 14.5723 8.69261 14.4228 8.13464 14.4228C7.54173 14.4228 7.16869 14.5783 6.80938 14.7281C6.49998 14.857 6.20075 14.9817 5.78009 14.9993C4.83205 15.0296 4.11714 14.0739 3.51102 13.2244C2.27546 11.4799 1.33519 8.30941 2.60183 6.16288C3.23127 5.09341 4.35026 4.41836 5.57028 4.40319C6.09584 4.39025 6.60635 4.58803 7.05329 4.76118C7.39273 4.89268 7.69551 5.00998 7.94037 5.00998C8.15548 5.00998 8.43608 4.90234 8.76801 4.77501C9.29941 4.57115 9.96241 4.31682 10.699 4.37285C11.0542 4.39635 11.9224 4.48359 12.6931 5.08954ZM10.6393 5.27485L10.6304 5.27426C10.2284 5.24369 9.82647 5.34827 9.38919 5.507C9.32293 5.53106 9.22662 5.56773 9.12493 5.60646C8.98504 5.65974 8.83454 5.71706 8.73726 5.75104C8.53876 5.82038 8.24562 5.91396 7.94037 5.91396C7.64946 5.91396 7.37621 5.83645 7.1757 5.76982C7.02455 5.71959 6.85603 5.65429 6.70724 5.59663C6.65817 5.57762 6.61125 5.55943 6.5678 5.5429C6.16487 5.38953 5.86112 5.30028 5.59251 5.30689L5.58152 5.30709C4.6936 5.31813 3.85761 5.81141 3.38037 6.62229C2.89586 7.44337 2.79895 8.5289 3.00766 9.68362C3.21513 10.8314 3.70666 11.9362 4.24784 12.7007C4.55663 13.1335 4.83541 13.5075 5.1276 13.7749C5.41383 14.0368 5.60819 14.0992 5.74752 14.0959C6.00039 14.0845 6.16227 14.0175 6.49116 13.8813L6.53909 13.8615C6.91849 13.7046 7.40861 13.5189 8.13464 13.5189C8.87008 13.5189 9.35948 13.7231 9.72037 13.8752C10.0534 14.0156 10.2133 14.0792 10.4834 14.0728L10.4907 14.0727C10.6923 14.0696 10.8904 13.9891 11.1381 13.7633C11.4046 13.5204 11.6555 13.1772 11.9626 12.7373L11.9638 12.7357C12.2313 12.3543 12.4318 11.9746 12.5733 11.6646C12.4273 11.5619 12.273 11.4401 12.1192 11.297C11.5041 10.7248 10.8824 9.79485 10.8674 8.43311L10.8674 8.4311C10.8572 7.26653 11.3496 6.40488 11.8343 5.84749C11.8825 5.79208 11.9308 5.73937 11.9789 5.68934C11.4696 5.35557 10.9236 5.29366 10.6393 5.27485Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-chrome-filled","LogoChromeFilled"):H("logo-chrome-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0228 4.43168C14.0438 4.46717 14.0442 4.51119 14.0238 4.54704C14.0034 4.58294 13.9653 4.60507 13.9241 4.60507H8.30612C8.30286 4.60507 8.29955 4.60493 8.2963 4.60461C8.19614 4.59607 8.09649 4.59166 8 4.59166C6.44508 4.59166 5.08772 5.64321 4.69917 7.14885C4.68751 7.19397 4.64973 7.22758 4.60355 7.23387C4.59837 7.23456 4.59313 7.23492 4.58799 7.23492C4.54742 7.23492 4.50932 7.21335 4.48866 7.17754L2.5181 3.76427C2.49447 3.72337 2.49832 3.67218 2.52784 3.63527C3.86532 1.96052 5.85984 1 8 1C9.23664 1 10.4522 1.32694 11.515 1.94551C12.5462 2.54562 13.4134 3.40534 14.0228 4.43168Z" fill="black" fill-opacity="0.9"/>
<path d="M8 10.6167C6.55745 10.6167 5.38388 9.4431 5.38388 8.00048C5.38388 6.55787 6.55745 5.38421 8 5.38421C9.44246 5.38421 10.6159 6.55787 10.6159 8.00048C10.6159 9.44305 9.44246 10.6167 8 10.6167Z" fill="black" fill-opacity="0.9"/>
<path d="M9.03439 11.3252C9.00589 11.2883 8.95806 11.2725 8.91294 11.2849C8.61655 11.3675 8.30942 11.4093 8 11.4093C6.68533 11.4093 5.47367 10.6382 4.91307 9.44484C4.91169 9.4419 4.91018 9.43906 4.90857 9.43621L2.09755 4.56715C2.07708 4.53157 2.03917 4.50977 1.99818 4.50977C1.95696 4.51 1.9184 4.53226 1.8982 4.56816C1.31062 5.61089 1 6.79777 1 8.00048C1 9.68772 1.60866 11.3175 2.71383 12.5896C3.80803 13.849 5.31443 14.6778 6.95565 14.9234C6.96134 14.9243 6.96703 14.9246 6.97268 14.9246C7.01321 14.9246 7.05131 14.903 7.07201 14.8672L9.04307 11.4529C9.06639 11.4125 9.06294 11.362 9.03439 11.3252Z" fill="black" fill-opacity="0.9"/>
<path d="M10.465 5.37081H14.4113C14.4585 5.37081 14.5009 5.39968 14.5181 5.44366C14.8379 6.25811 15 7.11832 15 8.00048C15 9.85642 14.2811 11.605 12.9757 12.9241C11.6714 14.2421 9.93246 14.9793 8.07941 15H8.07812C8.03741 15 7.99968 14.9784 7.97907 14.9432C7.95828 14.9076 7.95814 14.8636 7.97875 14.8279L10.7946 9.95035C10.7962 9.94755 10.7979 9.94484 10.7998 9.94218C11.1981 9.36956 11.4086 8.69815 11.4086 8.00048C11.4086 7.07889 11.0449 6.21487 10.3846 5.56751C10.3514 5.53492 10.3411 5.48534 10.3587 5.44219C10.3763 5.39904 10.4183 5.37081 10.465 5.37081Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-chrome","LogoChrome"):H("logo-chrome",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50019 1.93783C7.84824 0.00483471 12.1294 1.15196 14.0624 4.50001C15.9954 7.84806 14.8482 12.1292 11.5002 14.0622C8.15214 15.9952 3.87101 14.8481 1.93801 11.5C0.00501782 8.15196 1.15214 3.87083 4.50019 1.93783ZM13.4542 5.49839L10.452 5.49837C11.5424 6.56769 11.8338 8.26397 11.078 9.66049L11.0792 9.66116L8.59007 13.9724C9.41475 13.8915 10.2358 13.6375 11.0002 13.1962C13.7062 11.6338 14.7349 8.28186 13.4542 5.49839ZM7.43459 13.9738L8.93933 11.3675C8.81644 11.4017 8.6917 11.4293 8.56571 11.4501C8.31959 11.4917 8.07155 11.5064 7.8258 11.4953C6.5146 11.4407 5.38974 10.6647 4.83771 9.55389L2.52418 5.54674C1.76575 7.24342 1.80376 9.26747 2.80404 11C3.81294 12.7475 5.56813 13.7954 7.43459 13.9738ZM5.00019 2.80386C4.22219 3.25304 3.58283 3.85015 3.09715 4.53915L4.58571 7.11742C4.94941 5.71465 6.16124 4.65352 7.64124 4.51397L7.68118 4.51033C7.83386 4.49628 7.98779 4.4922 8.14195 4.49837L12.873 4.49839C11.0969 2.0206 7.69573 1.24759 5.00019 2.80386ZM7.97256 5.49837C7.91118 5.4984 7.85031 5.50065 7.79004 5.50503L7.75173 5.50823C6.97838 5.58575 6.25223 6.02168 5.83395 6.74616C5.14359 7.94189 5.55328 9.47087 6.74901 10.1612C7.20527 10.4246 7.71005 10.5279 8.19824 10.4884C9.47385 10.375 10.4739 9.30347 10.4739 7.99837C10.4739 6.61811 9.35535 5.4991 7.97526 5.49837H7.97256Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-codepen","LogoCodepen"):H("logo-codepen",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.53218 5.5873C1.36714 5.70019 1.29592 5.88732 1.31854 6.06428L1.31854 9.93573C1.29592 10.1127 1.36714 10.2998 1.53218 10.4127L7.71758 14.6433C7.88776 14.7597 8.11195 14.7597 8.28213 14.6433L14.4675 10.4127C14.6286 10.3026 14.7003 10.1217 14.6826 9.94852V6.05151C14.7003 5.87837 14.6286 5.69748 14.4675 5.58731L8.28212 1.35671C8.11194 1.24031 7.88776 1.24031 7.71757 1.35671L1.53218 5.5873ZM2.43442 6.00001L7.57485 2.48413V5.45433L4.60573 7.48511L2.43442 6.00001ZM8.42485 5.45433V2.48413L13.5653 6.00001L11.394 7.48511L8.42485 5.45433ZM3.85291 8.00001L2.16854 9.15206V6.84796L3.85291 8.00001ZM13.8326 6.84696V9.15307L12.1468 8.00001L13.8326 6.84696ZM11.394 8.51492L13.5653 10L8.42485 13.5159V10.5457L11.394 8.51492ZM7.57485 10.5457V13.5159L2.43442 10L4.60573 8.51491L7.57485 10.5457ZM10.6412 8.00001L7.99985 9.80657L5.35855 8.00001L7.99985 6.19345L10.6412 8.00001Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-github-filled","LogoGithubFilled"):H("logo-github-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C4.13483 1 1 4.21349 1 8.17696C1 11.348 3.0055 14.0381 5.78742 14.9873C6.13683 15.0537 6.25 14.8312 6.25 14.6422V13.3061C4.30283 13.7403 3.89742 12.4592 3.89742 12.4592C3.57892 11.6297 3.11983 11.409 3.11983 11.409C2.48458 10.9634 3.16825 10.973 3.16825 10.973C3.87117 11.0232 4.241 11.7128 4.241 11.7128C4.86517 12.8097 5.87842 12.4927 6.278 12.3091C6.34042 11.8456 6.52183 11.5286 6.7225 11.3498C5.16792 11.1674 3.53342 10.5519 3.53342 7.80256C3.53342 7.01848 3.807 6.37854 4.25442 5.87615C4.18208 5.69493 3.94233 4.96467 4.32267 3.97664C4.32267 3.97664 4.91067 3.78406 6.24825 4.71228C6.8065 4.55319 7.405 4.47365 8 4.47066C8.595 4.47365 9.19408 4.55319 9.7535 4.71228C11.0899 3.78406 11.6768 3.97664 11.6768 3.97664C12.0577 4.96527 11.8179 5.69553 11.7456 5.87615C12.1947 6.37854 12.466 7.01908 12.466 7.80256C12.466 10.5591 10.8286 11.1662 9.26992 11.3438C9.52075 11.5663 9.75 12.0029 9.75 12.6727V14.6422C9.75 14.833 9.862 15.0573 10.2172 14.9867C12.9968 14.0364 15 11.3468 15 8.17696C15 4.21349 11.8658 1 8 1Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-github","LogoGithub"):H("logo-github",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50039 14.5V12.6941H4.59414C3.87089 12.6941 3.28457 12.1078 3.28455 11.3846C3.28455 11.1308 3.07878 10.925 2.82496 10.925H2.09473V10.075H2.82496C2.88111 10.075 2.93644 10.0785 2.99073 10.0854C3.02585 10.0898 3.06053 10.0957 3.09473 10.1028C3.51724 10.1913 3.86489 10.4834 4.03033 10.8718C4.09742 11.0293 4.13455 11.2026 4.13455 11.3846C4.13456 11.6063 4.29153 11.7913 4.50039 11.8346C4.53066 11.8409 4.56201 11.8441 4.59414 11.8441H5.50039V11.4628C5.50039 11.3371 5.51221 11.2129 5.53515 11.0915C5.57033 10.9053 5.63168 10.7258 5.71663 10.5583C5.39228 10.4479 5.08476 10.3144 4.79775 10.1606L4.77682 10.1493C4.27921 9.88006 3.84399 9.54951 3.49058 9.17236C2.86084 8.5003 2.49093 7.68026 2.49093 6.79514C2.49093 5.95029 2.82795 5.16473 3.40626 4.51055L3.36157 4.29107C3.16545 3.32799 3.36011 2.32645 3.90269 1.50695C4.88369 1.44681 5.84838 1.779 6.58437 2.43038L6.93558 2.74123C7.27093 2.69292 7.61713 2.66764 7.97116 2.66764C8.36121 2.66764 8.74174 2.69833 9.10872 2.75668L9.47732 2.43045C10.2133 1.77907 11.178 1.44688 12.159 1.50701C12.7016 2.32652 12.8962 3.32806 12.7001 4.29114L12.6324 4.6235C13.1516 5.25433 13.4514 5.99837 13.4514 6.79514C13.4514 8.17549 12.5517 9.39757 11.17 10.1469C10.8833 10.3024 10.5759 10.4375 10.2515 10.5494C10.3621 10.7498 10.4379 10.9685 10.4747 11.1962C10.4917 11.3011 10.5004 11.4079 10.5004 11.5156V14.5H5.50039ZM7.07815 3.73101L6.61969 3.79705L5.92162 3.17922C5.51701 2.82113 5.01772 2.59517 4.48997 2.52415C4.2876 3.01671 4.23364 3.56208 4.34146 4.09153L4.48561 4.79943L4.15547 5.17288C3.71402 5.67224 3.49093 6.22919 3.49093 6.79514C3.49093 7.89333 4.38156 9.04753 6.03885 9.61164L7.12962 9.98291L6.60851 11.0106C6.53829 11.149 6.50039 11.3035 6.50039 11.4628V13.5H9.50039V11.5156C9.50039 11.3448 9.45674 11.179 9.37594 11.0325L8.80183 9.99188L9.9253 9.60416C11.5692 9.03682 12.4514 7.88849 12.4514 6.79514C12.4514 6.26048 12.2527 5.73566 11.8603 5.25899L11.5574 4.89099L11.7202 4.0916C11.828 3.56215 11.7741 3.01677 11.5717 2.52422C11.044 2.59524 10.5447 2.82119 10.1401 3.17929L9.41795 3.8184L8.9517 3.74427C8.63682 3.69421 8.3088 3.66764 7.97116 3.66764C7.6647 3.66764 7.36615 3.68953 7.07815 3.73101Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-ie-filled","LogoIeFilled"):H("logo-ie-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5662 9.0391H14.9633C14.9895 8.81289 15 8.58172 15 8.34541C15 7.23681 14.69 6.19698 14.1491 5.30153C14.7086 3.8739 14.6887 2.66224 13.9396 1.93809C13.2273 1.25711 11.3162 1.36766 9.15576 2.28633C8.99595 2.27472 8.8346 2.26875 8.67172 2.26875C5.70638 2.26875 3.21841 4.22822 2.53076 6.86845C3.46096 5.72486 4.43959 4.89573 5.74691 4.29191C5.62804 4.39887 4.93446 5.06098 4.8178 5.17308C1.37033 8.48243 0.283168 12.8054 1.45294 13.9289C2.34213 14.7826 3.95356 14.6384 5.80456 13.7679C6.66526 14.1888 7.63947 14.4262 8.67162 14.4262C11.451 14.4262 13.8065 12.7082 14.6598 10.3157H11.2365C10.7654 11.1501 9.8442 11.718 8.78689 11.718C7.72958 11.718 6.80825 11.1501 6.33721 10.3157C6.12782 9.93872 6.00744 9.50652 6.00744 9.04905V9.0391H11.5662ZM6.01254 7.43574C6.09106 6.09377 7.25309 5.02314 8.67162 5.02314C10.0901 5.02314 11.2522 6.09374 11.3307 7.43574H6.01254ZM13.9086 2.61293C14.3911 3.08112 14.3791 3.9425 13.9664 5.01774C13.2593 3.98258 12.2319 3.16688 11.0191 2.70112C12.3159 2.16718 13.3708 2.09645 13.9086 2.61293ZM2.34533 13.7158C1.72963 13.1245 1.91523 11.8832 2.7084 10.3878C3.20214 11.7182 4.16419 12.835 5.40444 13.5545C4.03109 14.1531 2.907 14.2547 2.34533 13.7158Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-ie","LogoIe"):H("logo-ie",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.34101 7.31389C5.61303 7.00343 5.90178 6.69471 6.20618 6.39031L6.21573 6.38077H9.82136C9.61419 5.57584 8.8835 4.98109 8.01391 4.98109C7.92741 4.98109 7.8423 4.98697 7.75893 4.99836C8.13148 4.70069 8.50405 4.42796 8.87221 4.182C9.99838 4.54437 10.8133 5.60067 10.8133 6.84733V7.31389H5.34101Z" fill="black" fill-opacity="0.9"/>
<path d="M3.74372 14.9996C3.02134 15.0093 2.28332 14.8198 1.73174 14.2683C1.18016 13.7167 0.990659 12.9787 1.00035 12.2563C1.00999 11.538 1.21364 10.757 1.53993 9.97391C1.58589 9.86359 1.63467 9.75234 1.68618 9.64027C1.55291 9.12028 1.48205 8.57528 1.48205 8.01373C1.48205 4.40629 4.40646 1.48188 8.01391 1.48188C8.5755 1.48188 9.12054 1.55276 9.64057 1.68605C9.75254 1.63458 9.86369 1.58585 9.97391 1.53993C10.757 1.21364 11.538 1.00999 12.2563 1.00035C12.9787 0.990659 13.7167 1.18016 14.2683 1.73174C14.8198 2.28332 15.0093 3.02134 14.9996 3.74372C14.99 4.46198 14.7864 5.243 14.4601 6.02609C14.418 6.12698 14.3736 6.22866 14.327 6.33102C14.4697 6.86789 14.5458 7.43193 14.5458 8.01373C14.5458 8.35498 14.5196 8.69041 14.469 9.01805L14.4079 9.41342H6.20646C6.41363 10.2184 7.14431 10.8131 8.01391 10.8131C8.62418 10.8131 9.16601 10.5207 9.50728 10.0663L9.64726 9.87998H14.3144L14.045 10.5261C13.061 12.8857 10.7318 14.5456 8.01391 14.5456C7.43215 14.5456 6.86815 14.4695 6.33132 14.3268C6.22886 14.3736 6.12708 14.418 6.02609 14.4601C5.243 14.7864 4.46198 14.99 3.74372 14.9996ZM5.03857 13.8301C4.08492 13.3413 3.26722 12.6249 2.6572 11.7525C2.76124 11.4064 2.90313 11.0414 3.08047 10.6631C4.02537 12.4189 5.88026 13.6125 8.01391 13.6125C10.0856 13.6125 11.8954 12.4871 12.8637 10.8131H10.1004C9.58841 11.3852 8.84327 11.7462 8.01391 11.7462C6.46787 11.7462 5.21454 10.4929 5.21454 8.94686V8.4803H13.5935C13.6062 8.32653 13.6126 8.17093 13.6126 8.01373C13.6126 5.92145 12.4649 4.09723 10.7648 3.13627C11.1581 2.9676 11.535 2.83943 11.8885 2.75462C12.6994 3.35308 13.367 4.13463 13.8302 5.03826C14.1954 3.88522 14.1504 2.9335 13.6084 2.39156C12.333 1.11613 8.7881 2.59318 5.69064 5.69064C2.59318 8.7881 1.11613 12.333 2.39156 13.6084C2.93355 14.1504 3.88539 14.1954 5.03857 13.8301ZM8.28136 2.42128C8.19273 2.41711 8.10357 2.415 8.01391 2.415C4.92181 2.415 2.41517 4.92164 2.41517 8.01373C2.41517 8.10336 2.41728 8.1925 2.42145 8.28109C3.09224 7.19746 3.97858 6.08307 5.03082 5.03082C6.08316 3.97849 7.19765 3.09209 8.28136 2.42128Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-qq","LogoQq"):H("logo-qq",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4763 9.77042C13.3516 9.3686 13.1814 8.89989 13.0085 8.45074L12.3787 6.87895C12.3787 6.8603 12.3873 6.55085 12.3873 6.39113C12.3873 3.70171 11.1177 1 7.99644 1C4.87517 1 3.606 3.70171 3.606 6.39022C3.606 6.54994 3.61419 6.85939 3.61464 6.87804L2.98438 8.44983C2.81191 8.89989 2.64172 9.3686 2.51658 9.76951C1.92136 11.6849 2.1143 12.4776 2.26129 12.4953C2.57619 12.5336 3.48996 11.0532 3.48996 11.0532C3.48996 11.9106 3.93137 13.0291 4.88609 13.8369C4.52887 13.947 4.09155 14.1163 3.80987 14.3238C3.55731 14.5108 3.58871 14.701 3.63421 14.7788C3.83444 15.116 7.06629 14.9941 7.99917 14.889C8.93251 14.9941 12.1644 15.1165 12.3641 14.7788C12.4096 14.7019 12.4415 14.5117 12.1885 14.3238C11.9072 14.1163 11.469 13.947 11.1118 13.8369C12.0674 13.0291 12.5079 11.9106 12.5079 11.0532C12.5079 11.0532 13.4181 12.5336 13.7343 12.4953C13.879 12.4785 14.072 11.6858 13.4763 9.77042Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-wechat","LogoWechat"):H("logo-wechat",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.55014C1 4.20298 3.26552 2.30005 6.06021 2.30005C8.58473 2.30005 10.6089 3.85282 10.99 5.88329C10.9678 5.88221 10.9496 5.88122 10.9334 5.88034C10.8834 5.87761 10.8529 5.87594 10.7832 5.87594C8.23432 5.87594 6.16822 7.61153 6.16822 9.75217C6.16822 10.1132 6.22806 10.4623 6.3381 10.7939C6.24606 10.798 6.15351 10.8005 6.06021 10.8005C5.48273 10.8005 4.92529 10.7173 4.40842 10.5675C4.36138 10.553 4.31156 10.5453 4.25971 10.5453C4.16247 10.5453 4.07436 10.5751 3.99119 10.6234L2.88316 11.268C2.85235 11.2861 2.82256 11.2996 2.78579 11.2996C2.69261 11.2996 2.61718 11.2237 2.61718 11.1297C2.61718 11.098 2.62656 11.0663 2.63575 11.0354C2.63873 11.0254 2.64169 11.0154 2.64431 11.0055C2.64974 10.985 2.75058 10.6058 2.83294 10.2961L2.87225 10.1482C2.88214 10.112 2.89013 10.0776 2.89013 10.04C2.89013 9.92547 2.83409 9.82443 2.74839 9.76282C1.68168 8.98377 1 7.83098 1 6.55014ZM3.77516 5.1902C3.77516 5.52312 4.04305 5.79315 4.37368 5.79315C4.70381 5.79315 4.97169 5.52312 4.97169 5.1902C4.97169 4.85715 4.70381 4.58725 4.37368 4.58725C4.04305 4.58725 3.77516 4.85715 3.77516 5.1902ZM7.14872 5.1902C7.14872 5.52312 7.4166 5.79303 7.74698 5.79303C8.07736 5.79303 8.34525 5.52312 8.34525 5.1902C8.34525 4.85715 8.07736 4.58725 7.74698 4.58725C7.4166 4.58725 7.14872 4.85715 7.14872 5.1902Z" fill="black" fill-opacity="0.9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 9.7521C15 10.8193 14.432 11.7799 13.5431 12.4293C13.4716 12.4806 13.4249 12.565 13.4249 12.6601C13.4249 12.6914 13.4316 12.7203 13.4397 12.7504C13.5109 13.0173 13.6245 13.4448 13.6298 13.4648C13.632 13.4734 13.6346 13.482 13.6372 13.4908C13.6447 13.5162 13.6525 13.5422 13.6525 13.5685C13.6525 13.6466 13.5896 13.7101 13.5119 13.7101C13.4813 13.7101 13.4564 13.6984 13.4305 13.6837L12.5075 13.1464C12.4381 13.106 12.3645 13.0812 12.2837 13.0812C12.2404 13.0812 12.1988 13.0879 12.1597 13.0999C11.7289 13.2247 11.2642 13.294 10.7831 13.294C8.45434 13.294 6.56624 11.7083 6.56624 9.7521C6.56624 7.79592 8.45434 6.21044 10.7831 6.21044C13.1122 6.21044 15 7.79592 15 9.7521ZM8.85103 8.61884C8.85103 8.91182 9.08683 9.14927 9.37754 9.14927C9.66836 9.14927 9.90404 8.91182 9.90404 8.61884C9.90404 8.32573 9.66836 8.08815 9.37754 8.08815C9.08683 8.08815 8.85103 8.32573 8.85103 8.61884ZM11.6626 8.61884C11.6626 8.91182 11.898 9.14927 12.1888 9.14927C12.4797 9.14927 12.7153 8.91182 12.7153 8.61884C12.7153 8.32573 12.4797 8.08815 12.1888 8.08815C11.898 8.08815 11.6626 8.32573 11.6626 8.61884Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-wecom","LogoWecom"):H("logo-wecom",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2529 3.95905C11.623 4.34224 11.9247 4.77013 12.149 5.23125C12.4506 5.85106 12.6036 6.50835 12.6036 7.18432C12.6036 7.29806 12.5985 7.41153 12.5897 7.52475C12.5862 7.5206 12.5827 7.51641 12.5792 7.51223C12.5706 7.50189 12.562 7.49158 12.5524 7.48186C12.2833 7.21292 11.8727 7.17569 11.5621 7.36581C11.5626 7.35453 11.5632 7.34324 11.5638 7.33195C11.566 7.2882 11.5682 7.2444 11.5682 7.20068C11.5682 6.66962 11.4476 6.15259 11.2098 5.66365C11.0305 5.2954 10.7886 4.95239 10.4908 4.64429C9.72201 3.84918 8.63902 3.33615 7.44127 3.2C7.22372 3.17527 7.00861 3.16278 6.80201 3.16278C6.6052 3.16278 6.39924 3.17437 6.18993 3.19717C4.98651 3.32791 3.89721 3.83823 3.12244 4.63412C2.82336 4.94144 2.58018 5.28381 2.39959 5.65116C2.15783 6.14332 2.0352 6.66459 2.0352 7.20068C2.0352 7.89133 2.24709 8.57464 2.64767 9.1768C2.81782 9.43274 3.0203 9.67141 3.25099 9.89025C3.33317 9.96818 3.41844 10.0438 3.5077 10.1164C3.56579 10.1638 3.62118 10.2067 3.67669 10.2479C3.78579 10.3273 3.85122 10.4565 3.85122 10.5933C3.85122 10.6427 3.84079 10.6869 3.83036 10.7236C3.80575 10.8179 3.77664 10.9291 3.74766 11.0392C3.7385 11.0741 3.72936 11.1089 3.7204 11.1431C3.70378 11.2064 3.68778 11.2673 3.67347 11.322C3.66198 11.3661 3.65166 11.4053 3.64287 11.4387C3.63737 11.4596 3.63247 11.4783 3.62826 11.4944L3.58885 11.6532C3.58885 11.692 3.61924 11.7235 3.6566 11.7235C3.66793 11.7235 3.68043 11.7188 3.70245 11.7059L3.70361 11.7052L4.76612 11.079C4.77326 11.0748 4.7804 11.0713 4.78753 11.0679C4.79212 11.0656 4.7967 11.0634 4.80129 11.061C4.89145 11.0143 4.98058 10.9899 5.07242 10.9899C5.13115 10.9899 5.18873 10.9987 5.24283 11.0161C5.50907 11.0939 5.78458 11.1509 6.06319 11.188C6.07587 11.1897 6.08855 11.1914 6.10123 11.1932C6.13079 11.1973 6.16036 11.2015 6.18993 11.2047C6.39293 11.2271 6.59876 11.2385 6.80201 11.2385C7.00887 11.2385 7.22385 11.2258 7.44127 11.2011C7.79947 11.1604 8.14609 11.0848 8.47789 10.9794C8.44865 11.2853 8.59574 11.5945 8.87989 11.757C8.92755 11.7842 8.97688 11.806 9.02711 11.8226C8.56277 11.9893 8.07357 12.1065 7.56492 12.1644C7.30641 12.1937 7.04957 12.2086 6.80201 12.2086C6.55908 12.2086 6.31307 12.1952 6.07066 12.1685C5.6979 12.1275 5.34407 12.0622 4.98767 11.9599L3.33162 12.7911C3.32536 12.7955 3.31886 12.7992 3.31232 12.8029C3.30931 12.8046 3.30629 12.8063 3.30329 12.8081C3.30166 12.809 3.29994 12.8097 3.29828 12.8106C3.29784 12.8108 3.2974 12.811 3.29698 12.8113C3.23167 12.8488 3.15709 12.8718 3.07646 12.8718C2.84526 12.8718 2.65733 12.6952 2.6344 12.4702C2.6339 12.4648 2.63318 12.4595 2.63247 12.4541C2.63118 12.4445 2.6299 12.435 2.6299 12.4253C2.6299 12.4164 2.63107 12.4078 2.63225 12.3993C2.63298 12.394 2.6337 12.3887 2.63415 12.3834C2.63443 12.3804 2.63471 12.3775 2.63499 12.3745C2.63643 12.359 2.63786 12.3436 2.6411 12.3287C2.64507 12.3108 2.65148 12.294 2.65792 12.2771C2.65858 12.2753 2.65925 12.2736 2.65991 12.2719L2.83392 10.9028V10.902C2.44841 10.5602 2.02954 10.075 1.77334 9.6897C1.2674 8.92911 1 8.0629 1 7.18432C1 6.50204 1.1556 5.8396 1.46215 5.21554C1.68795 4.75571 1.99102 4.32872 2.36301 3.94643C3.30535 2.97833 4.62238 2.35826 6.07156 2.20087C6.32054 2.17369 6.56617 2.16003 6.80201 2.16003C7.04931 2.16003 7.30589 2.17498 7.56492 2.20434C9.00753 2.36831 10.3172 2.9916 11.2529 3.95905Z" fill="black" fill-opacity="0.9"/>
<path d="M11.3472 9.0505C11.0323 8.73544 11.0323 8.2246 11.3472 7.90955C11.6622 7.59449 12.1731 7.59449 12.4881 7.90955C12.5909 8.01246 12.66 8.13611 12.6958 8.26698C12.7034 8.29519 12.7095 8.32365 12.7141 8.35225C12.7183 8.37814 12.7211 8.40428 12.7227 8.43056C12.8158 8.89632 13.0426 9.34057 13.4038 9.70161C13.4222 9.72002 13.4408 9.73793 13.4596 9.75557C13.4691 9.76214 13.4781 9.76936 13.4866 9.77786C13.4914 9.78275 13.4959 9.78778 13.5 9.79306C13.5615 9.86879 13.557 9.98021 13.4866 10.0507C13.4111 10.126 13.2892 10.126 13.2137 10.0507C13.1884 10.0232 13.1627 9.99592 13.136 9.96939C12.7667 9.60011 12.3105 9.37122 11.833 9.28222C11.8168 9.28054 11.8006 9.27822 11.7843 9.27552C11.7682 9.27281 11.7521 9.26972 11.7362 9.26599C11.5937 9.23314 11.4582 9.16153 11.3472 9.0505Z" fill="black" fill-opacity="0.9"/>
<path d="M14.7637 10.1909C14.4488 9.87587 13.9378 9.87587 13.6228 10.1909C13.5117 10.302 13.4401 10.4373 13.4073 10.5799C13.4037 10.5959 13.4004 10.612 13.3977 10.6281C13.3952 10.6443 13.3927 10.6605 13.391 10.6766C13.302 11.1541 13.0731 11.6105 12.7037 11.9798C12.6772 12.0064 12.65 12.0322 12.6226 12.0572L12.6227 12.0574C12.5472 12.1327 12.5472 12.2548 12.6227 12.3301C12.693 12.4006 12.8045 12.4051 12.8803 12.3438C12.8853 12.3396 12.8905 12.335 12.8955 12.3301C12.9039 12.3217 12.9111 12.3127 12.9178 12.3032C12.9353 12.2845 12.9532 12.2658 12.9716 12.2474C13.3327 11.8864 13.7769 11.6594 14.2428 11.5666C14.269 11.5649 14.2951 11.5621 14.321 11.5577C14.3497 11.5533 14.3781 11.547 14.4063 11.5394C14.5373 11.5036 14.6611 11.4345 14.7637 11.3319C15.0788 11.0168 15.0788 10.506 14.7637 10.1909Z" fill="black" fill-opacity="0.9"/>
<path d="M10.3432 11.4664C10.2726 11.5367 10.2682 11.6481 10.3295 11.7239C10.3336 11.7291 10.3381 11.7342 10.3432 11.7392C10.3515 11.7476 10.3607 11.7548 10.3701 11.7615C10.3889 11.7789 10.4076 11.7971 10.4259 11.8153C10.7869 12.1765 11.0139 12.6207 11.107 13.0865C11.1085 13.1126 11.1114 13.1388 11.1157 13.1648C11.1202 13.1933 11.1263 13.2217 11.1339 13.2499C11.1696 13.3809 11.2387 13.5044 11.3415 13.6074C11.6566 13.9224 12.1674 13.9224 12.4824 13.6074C12.7974 13.2923 12.7974 12.7815 12.4824 12.4664C12.3713 12.3554 12.2358 12.2838 12.0934 12.2509C12.0775 12.2473 12.0614 12.2441 12.0453 12.2414C12.0292 12.2387 12.013 12.2365 11.9965 12.2347C11.5192 12.1458 11.0628 11.9168 10.6936 11.5475C10.667 11.521 10.6411 11.4938 10.6161 11.4662L10.616 11.4664C10.5782 11.4286 10.5289 11.4098 10.4796 11.4098C10.4301 11.4098 10.3808 11.4286 10.3432 11.4664Z" fill="black" fill-opacity="0.9"/>
<path d="M10.4318 10.889C10.4345 10.8727 10.4367 10.8565 10.4385 10.8402C10.5277 10.363 10.7566 9.90652 11.1257 9.53723C11.1524 9.5107 11.1796 9.48481 11.2071 9.45969L11.207 9.45956C11.2823 9.38421 11.2823 9.26211 11.207 9.18676C11.1365 9.1163 11.025 9.11179 10.9494 9.17323C10.9441 9.17748 10.9391 9.18186 10.9342 9.18676C10.9258 9.19526 10.9185 9.20427 10.9119 9.21368C10.8943 9.23261 10.8763 9.25103 10.8579 9.26958C10.497 9.63049 10.0526 9.85744 9.58675 9.95057C9.56074 9.95211 9.53459 9.95495 9.50844 9.9592C9.47985 9.96371 9.45138 9.96989 9.42343 9.97762C9.29244 10.0133 9.16865 10.0823 9.06587 10.1851C8.75068 10.5002 8.75068 11.011 9.06587 11.3262C9.38092 11.6413 9.89176 11.6413 10.2068 11.3262C10.3178 11.215 10.3896 11.0795 10.4224 10.9372C10.426 10.9212 10.4293 10.9051 10.4318 10.889Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-windows-filled","LogoWindowsFilled"):H("logo-windows-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2.50403H2.5V7.50403H7.5V2.50403Z" fill="black" fill-opacity="0.9"/>
<path d="M13.5 2.50403H8.5V7.50403H13.5V2.50403Z" fill="black" fill-opacity="0.9"/>
<path d="M8.5 8.50403H13.5V13.504H8.5V8.50403Z" fill="black" fill-opacity="0.9"/>
<path d="M7.5 8.50403H2.5V13.504H7.5V8.50403Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logo-windows","LogoWindows"):H("logo-windows",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H13ZM7.5 3H3L3 7.5H7.5V3ZM8.5 13H13V8.5H8.5V13ZM7.5 8.5H3L3 13H7.5V8.5ZM8.5 7.5H13V3H8.5V7.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("logout","Logout"):H("logout",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3V5H10V2.5C10 2.22386 9.77614 2 9.5 2H1.5C1.22386 2 1 2.22386 1 2.5V13.5C1 13.7761 1.22386 14 1.5 14H9.5C9.77614 14 10 13.7761 10 13.5V11H9V13H2V3H9Z" fill="black" fill-opacity="0.9"/>
<path d="M11.2316 5.25423L13.4774 7.50001L5.99994 7.49999L5.99994 8.49999L13.4774 8.50001L11.2316 10.7458L11.9387 11.4529L15.038 8.35356C15.2333 8.1583 15.2333 7.84172 15.038 7.64646L11.9387 4.54712L11.2316 5.25423Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("mail","Mail"):H("mail",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49902 3.9989C1.49902 3.44662 1.94674 2.9989 2.49902 2.9989H13.499C14.0513 2.9989 14.499 3.44662 14.499 3.9989V11.9989C14.499 12.5512 14.0513 12.9989 13.499 12.9989H2.49902C1.94674 12.9989 1.49902 12.5512 1.49902 11.9989V3.9989ZM13.0976 3.9989H2.90041L7.99902 7.39798L13.0976 3.9989ZM2.49902 4.93316L2.49902 11.9989H13.499V4.93316L7.99902 8.59983L2.49902 4.93316Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("menu-fold","MenuFold"):H("menu-fold",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99951 3.98621L13.9989 4.00001L14.0001 3.00001L2.00066 2.98621L1.99951 3.98621Z" fill="black" fill-opacity="0.9"/>
<path d="M7.50009 8.50001H13.9995V7.50001H7.50009V8.50001Z" fill="black" fill-opacity="0.9"/>
<path d="M1.99951 12.9862L13.9989 13L14.0001 12L2.00066 11.9862L1.99951 12.9862Z" fill="black" fill-opacity="0.9"/>
<path d="M5.96675 7.59308C6.23342 7.79308 6.23342 8.19308 5.96675 8.39308L2.80009 10.7681C2.47047 11.0153 2.00009 10.7801 2.00009 10.3681L2.00009 5.61808C2.00009 5.20605 2.47047 4.97086 2.80009 5.21808L5.96675 7.59308ZM3.00009 6.61808L3.00009 9.36808L4.83342 7.99308L3.00009 6.61808Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("menu-unfold","MenuUnfold"):H("menu-unfold",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0005 12.0138L2.00115 12L2 13L13.9994 13.0138L14.0005 12.0138Z" fill="black" fill-opacity="0.9"/>
<path d="M8.49997 7.5L2.00058 7.5L2.00058 8.5L8.49997 8.5V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M14.0005 3.0138L2.00115 3L2 4L13.9994 4.0138L14.0005 3.0138Z" fill="black" fill-opacity="0.9"/>
<path d="M10.0333 8.40693C9.76663 8.20693 9.76663 7.80693 10.0333 7.60693L13.2 5.23193C13.5296 4.98472 14 5.21991 14 5.63193L14 10.3819C14 10.794 13.5296 11.0291 13.2 10.7819L10.0333 8.40693ZM13 9.38193L13 6.63193L11.1666 8.00693L13 9.38193Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("minus-circle-filled","MinusCircleFilled"):H("minus-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.5 8.5H4.5V7.5H11.5V8.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("minus-circle","MinusCircle"):H("minus-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8.5H11.5V7.5H4.5V8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("minus-rectangle-filled","MinusRectangleFilled"):H("minus-rectangle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM11 8.5H5V7.5H11V8.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("minus-rectangle","MinusRectangle"):H("minus-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8.5H11V7.5H5V8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("mirror","Mirror"):H("mirror",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50024 1H8.50024V15H7.50024V1Z" fill="black" fill-opacity="0.9"/>
<path d="M14.7196 12.4367C14.7504 12.6777 14.6034 12.906 14.3712 12.9777C14.2991 13 14.1963 13 13.9907 13H10.6501C10.5106 13 10.4409 13 10.3834 12.9862C10.2006 12.9423 10.0578 12.7995 10.0139 12.6167C10.0001 12.5592 10.0001 12.4895 10.0001 12.35V5.0008C10.0001 4.47031 10.0001 4.20506 10.041 4.11027C10.1768 3.79537 10.5821 3.70757 10.8361 3.93804C10.9126 4.00742 11.0223 4.24889 11.2418 4.73183L14.5824 12.081C14.6675 12.2682 14.71 12.3618 14.7196 12.4367ZM11.0001 12H13.4471L11.0001 6.61661V12Z" fill="black" fill-opacity="0.9"/>
<path d="M1.62907 12.9777C1.70117 13 1.80398 13 2.00959 13H5.35014C5.48959 13 5.55932 13 5.61686 12.9862C5.79969 12.9423 5.94243 12.7995 5.98633 12.6167C6.00014 12.5592 6.00014 12.4895 6.00014 12.35V5.0008C6.00014 4.47031 6.00014 4.20506 5.95925 4.11027C5.82341 3.79537 5.4181 3.70757 5.16413 3.93804C5.08768 4.00742 4.97792 4.24889 4.7584 4.73183L1.41786 12.081C1.33277 12.2682 1.29023 12.3618 1.28067 12.4367C1.24989 12.6777 1.39688 12.906 1.62907 12.9777ZM5.00014 6.61661V12H2.55315L5.00014 6.61661Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("mobile-vibrate","MobileVibrate"):H("mobile-vibrate",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13H9.5V12H6.5V13Z" fill="black" fill-opacity="0.9"/>
<path d="M5 1.5C4.44772 1.5 4 1.94772 4 2.5V14C4 14.5523 4.44772 15 5 15H11C11.5523 15 12 14.5523 12 14V2.5C12 1.94772 11.5523 1.5 11 1.5H5ZM11 2.5V14H5V2.5H11Z" fill="black" fill-opacity="0.9"/>
<path d="M2 4V13H3V4H2Z" fill="black" fill-opacity="0.9"/>
<path d="M13 4V13H14V4H13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("mobile","Mobile"):H("mobile",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13H9.5V12H6.5V13Z" fill="black" fill-opacity="0.9"/>
<path d="M3.5 2.5C3.5 1.94772 3.94772 1.5 4.5 1.5H11.5C12.0523 1.5 12.5 1.94772 12.5 2.5V14C12.5 14.5523 12.0523 15 11.5 15H4.5C3.94772 15 3.5 14.5523 3.5 14V2.5ZM4.5 2.5L4.5 14H11.5V2.5H4.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("money-circle","MoneyCircle"):H("money-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 7.5H8.5V8.5H10.5V9.5H8.5V12H7.5V9.5H5.5V8.5H7.5V7.5H5.5V6.5H6.95969L5.60956 4.81235L6.39043 4.18765L8 6.19961L9.60956 4.18765L10.3904 4.81235L9.04031 6.5H10.5V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("more","More"):H("more",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 4C8.55225 4 9 3.55228 9 3C9 2.44772 8.55225 2 8 2C7.44775 2 7 2.44772 7 3C7 3.55228 7.44775 4 8 4Z" fill="black" fill-opacity="0.9"/>
<path d="M8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8C7 8.55228 7.44775 9 8 9Z" fill="black" fill-opacity="0.9"/>
<path d="M9 13C9 13.5523 8.55225 14 8 14C7.44775 14 7 13.5523 7 13C7 12.4477 7.44775 12 8 12C8.55225 12 9 12.4477 9 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("move","Move"):H("move",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1C4.44772 1 4 1.44772 4 2C4 2.55228 4.44772 3 5 3C5.55228 3 6 2.55228 6 2C6 1.44772 5.55228 1 5 1Z" fill="black" fill-opacity="0.9"/>
<path d="M11 1C10.4477 1 10 1.44772 10 2C10 2.55228 10.4477 3 11 3C11.5523 3 12 2.55228 12 2C12 1.44772 11.5523 1 11 1Z" fill="black" fill-opacity="0.9"/>
<path d="M4 6C4 5.44772 4.44772 5 5 5C5.55228 5 6 5.44772 6 6C6 6.55228 5.55228 7 5 7C4.44772 7 4 6.55228 4 6Z" fill="black" fill-opacity="0.9"/>
<path d="M11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5Z" fill="black" fill-opacity="0.9"/>
<path d="M4 10C4 9.44771 4.44772 9 5 9C5.55228 9 6 9.44771 6 10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10Z" fill="black" fill-opacity="0.9"/>
<path d="M5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13Z" fill="black" fill-opacity="0.9"/>
<path d="M10 10C10 9.44771 10.4477 9 11 9C11.5523 9 12 9.44771 12 10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10Z" fill="black" fill-opacity="0.9"/>
<path d="M11 13C10.4477 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("next","Next"):H("next",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2H13L13 14H12L12 2Z" fill="black" fill-opacity="0.9"/>
<path d="M10.8512 7.58022C11.1557 7.77724 11.1557 8.22276 10.8512 8.41979L3.77162 13.0007C3.43894 13.216 3 12.9772 3 12.5809V3.41907C3 3.02282 3.43895 2.78402 3.77163 2.99929L10.8512 7.58022ZM4 4.33814L4 11.6619L9.65923 8L4 4.33814Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("notification-filled","NotificationFilled"):H("notification-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49993 2.02746V1H7.49993V2.02746C5.24996 2.27619 3.49993 4.18372 3.49993 6.5V11L2.59993 12.2C2.35272 12.5296 2.58791 13 2.99993 13H5.54994C5.78158 14.1411 6.79045 15 7.99993 15C9.20941 15 10.2183 14.1411 10.4499 13H12.9999C13.412 13 13.6471 12.5296 13.3999 12.2L12.4999 11V6.5C12.4999 4.18372 10.7499 2.27619 8.49993 2.02746Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("notification","Notification"):H("notification",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49993 2.02746V1H7.49993V2.02746C5.24996 2.27619 3.49993 4.18372 3.49993 6.5V11L2.59993 12.2C2.35272 12.5296 2.58791 13 2.99993 13H5.54994C5.78158 14.1411 6.79045 15 7.99993 15C9.20941 15 10.2183 14.1411 10.4499 13H12.9999C13.412 13 13.6471 12.5296 13.3999 12.2L12.4999 11V6.5C12.4999 4.18372 10.7499 2.27619 8.49993 2.02746ZM4.49993 11.3333V6.5C4.49993 4.567 6.06693 3 7.99993 3C9.93293 3 11.4999 4.567 11.4999 6.5V11.3333L11.9999 12H3.99993L4.49993 11.3333ZM7.99993 14C7.34682 14 6.7912 13.5826 6.58528 13H9.41458C9.20866 13.5826 8.65304 14 7.99993 14Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("order-adjustment-column","OrderAdjustmentColumn"):H("order-adjustment-column",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 8.49999V15H8.5V8.5L13.1566 8.5L11.4651 10.1915L12.1722 10.8986L14.7172 8.35356C14.9125 8.15829 14.9125 7.84171 14.7172 7.64645L12.1722 5.10141L11.4651 5.80852L13.1566 7.5L8.5 7.5V1H7.5V7.49999L2.84586 7.5L4.53734 5.80852L3.83023 5.10141L1.28519 7.64645C1.08993 7.84171 1.08993 8.15829 1.28519 8.35355L3.83023 10.8986L4.53734 10.1915L2.84585 8.5L7.5 8.49999Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("order-ascending","OrderAscending"):H("order-ascending",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13.5L12 3.70712L14.1464 5.85357L14.8535 5.14646L11.9048 2.19768C11.5709 1.8638 11 2.10026 11 2.57244L11 13.5H12Z" fill="black" fill-opacity="0.9"/>
<path d="M9.5 13.5L2 13.5V12.5L9.5 12.5V13.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2 8.50002L9.5 8.50002V7.50002L2 7.50002V8.50002Z" fill="black" fill-opacity="0.9"/>
<path d="M9.5 3.50002L2 3.50002V2.50002L9.5 2.50002V3.50002Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("order-descending","OrderDescending"):H("order-descending",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 2.5H2V3.5L9.5 3.5V2.5Z" fill="black" fill-opacity="0.9"/>
<path d="M12 2.5L12 12.2929L14.1464 10.1464L14.8535 10.8536L11.9048 13.8023C11.5709 14.1362 11 13.8998 11 13.4276L11 2.5H12Z" fill="black" fill-opacity="0.9"/>
<path d="M2 7.5H9.5V8.5H2V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M9.5 12.5H2V13.5H9.5V12.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("page-first","PageFirst"):H("page-first",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4053 4.45952L11.486 3.54028L7.02642 7.9999L11.486 12.4595L12.4053 11.5403L8.86489 7.9999L12.4053 4.45952ZM4.79568 4L4.79568 12L6.09568 12L6.09568 4L4.79568 4Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("page-last","PageLast"):H("page-last",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.59473 11.5405L4.51397 12.4597L8.97358 8.00009L4.51397 3.54047L3.59473 4.45971L7.13511 8.00009L3.59473 11.5405ZM11.2046 12L11.2046 3.99999L9.90459 3.99999L9.90459 12H11.2046Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("pause-circle-filled","PauseCircleFilled"):H("pause-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM6 5V11H7V5H6ZM10 5.00001H9V11H10V5.00001Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("photo","Photo"):H("photo",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z" fill="black" fill-opacity="0.9"/>
<path d="M6.05352 2C5.85291 2 5.66557 2.10026 5.55429 2.26718L4.73241 3.5H2.01C1.72834 3.5 1.5 3.72833 1.5 4.01V12.49C1.5 12.7717 1.72833 13 2.01 13H13.99C14.2716 13 14.5 12.7717 14.5 12.49V4.01C14.5 3.72834 14.2717 3.5 13.99 3.5H11.2676L10.4457 2.26718C10.3344 2.10026 10.1471 2 9.94648 2H6.05352ZM6.26759 3H9.73241L10.7324 4.5H13.5V12H2.5V4.5H5.26759L6.26759 3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("pin-filled","PinFilled"):H("pin-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5179 1.33919C12.2975 1.11875 11.9449 1.10385 11.7067 1.30492L7.66167 4.71867L6.89055 3.94755C6.65623 3.71324 6.27633 3.71324 6.04202 3.94755L3.93734 6.05223C3.70302 6.28655 3.70302 6.66645 3.93734 6.90076L6.16478 9.12821L2.05713 13.2359L2.76424 13.943L6.87189 9.83532L9.09922 12.0626C9.33353 12.297 9.71343 12.297 9.94774 12.0626L12.0524 9.95796C12.2867 9.72364 12.2867 9.34375 12.0524 9.10943L11.2813 8.33831L14.6951 4.29331C14.8961 4.05506 14.8812 3.70252 14.6608 3.48208L12.5179 1.33919Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("pin","Pin"):H("pin",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5179 1.33919C12.2975 1.11875 11.9449 1.10385 11.7067 1.30492L7.66167 4.71867L6.89055 3.94755C6.65623 3.71324 6.27633 3.71324 6.04202 3.94755L3.93734 6.05223C3.70302 6.28655 3.70302 6.66645 3.93734 6.90076L6.16478 9.12821L2.05713 13.2359L2.76424 13.943L6.87189 9.83532L9.09922 12.0626C9.33353 12.297 9.71343 12.297 9.94774 12.0626L12.0524 9.95796C12.2867 9.72364 12.2867 9.34375 12.0524 9.10943L11.2813 8.33831L14.6951 4.29331C14.8961 4.05506 14.8812 3.70252 14.6608 3.48208L12.5179 1.33919ZM12.0707 2.30621L13.6938 3.92927L9.92441 8.39563L11.0625 9.53369L9.52348 11.0727L4.92729 6.4765L6.46628 4.9375L7.60435 6.07557L12.0707 2.30621Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("play-circle-filled","PlayCircleFilled"):H("play-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM10.9844 8.22791L6.51038 10.811C6.33493 10.9123 6.11561 10.7857 6.11561 10.5831L6.11561 5.41691C6.11561 5.21432 6.33493 5.0877 6.51038 5.18899L10.9844 7.77207C11.1599 7.87337 11.1599 8.12661 10.9844 8.22791Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("play-circle-stroke","PlayCircleStroke"):H("play-circle-stroke",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M11.55 7.74017C11.75 7.85564 11.75 8.14432 11.55 8.25979L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445L6 5.0555C6 4.82456 6.25 4.68022 6.45 4.79569L11.55 7.74017ZM7 6.26793V9.73204L10 7.99998L7 6.26793Z" fill="black" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?_("play-circle","PlayCircle"):H("play-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M11.55 7.74017C11.75 7.85564 11.75 8.14432 11.55 8.25979L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445L6 5.0555C6 4.82456 6.25 4.68022 6.45 4.79569L11.55 7.74017Z" fill="black" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?_("play","Play"):H("play",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.55 7.74018C11.75 7.85565 11.75 8.14433 11.55 8.2598L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445V5.05551C6 4.82457 6.25 4.68024 6.45 4.79571L11.55 7.74018Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("poweroff","Poweroff"):H("poweroff",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 1V8H8.5V1H7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M1.5 8.50007C1.5 6.00518 2.90561 3.83859 4.96813 2.74901L5.46865 3.61594C3.70487 4.53193 2.5 6.3753 2.5 8.50008C2.5 11.5376 4.96243 14.0001 8 14.0001C11.0376 14.0001 13.5 11.5376 13.5 8.50008C13.5 6.37522 12.295 4.53179 10.5311 3.61583L11.0317 2.7489C13.0943 3.83844 14.5 6.0051 14.5 8.50008C14.5 12.0899 11.5898 15.0001 8 15.0001C4.41015 15.0001 1.5 12.0899 1.5 8.50007Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("precise-monitor","PreciseMonitor"):H("precise-monitor",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M7.5 1.5V5H8.5V1.5H7.5ZM6.23223 5.52513L2.6967 1.98959L1.98959 2.6967L5.52513 6.23223L6.23223 5.52513ZM9.76777 5.52513L13.3033 1.98959L14.0104 2.6967L10.4749 6.23223L9.76777 5.52513ZM9 8C9 8.55229 8.55229 9 8 9C7.62986 9 7.30669 8.7989 7.13378 8.5H1.5V7.5H7.13378C7.30669 7.2011 7.62986 7 8 7C8.55229 7 9 7.44772 9 8ZM5.52513 9.76777L1.98959 13.3033L2.6967 14.0104L6.23223 10.4749L5.52513 9.76777ZM10.4749 9.76777L14.0104 13.3033L13.3033 14.0104L9.76777 10.4749L10.4749 9.76777ZM14.5 7.5H11V8.5H14.5V7.5ZM7.5 14.5V11H8.5V14.5H7.5Z" fill="black"/>
</g>
</svg>
`),n==="develop"?_("previous","Previous"):H("previous",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14H3V2H4L4 14Z" fill="black" fill-opacity="0.9"/>
<path d="M5.14876 8.41978C4.84426 8.22276 4.84426 7.77724 5.14876 7.58021L12.2284 2.99929C12.5611 2.78402 13 3.02282 13 3.41907V12.5809C13 12.9772 12.5611 13.216 12.2284 13.0007L5.14876 8.41978ZM12 11.6619V4.33814L6.34077 8L12 11.6619Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("print","Print"):H("print",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99902 1.9989V3.9989H2.99902C2.44288 3.9989 1.99902 4.44276 1.99902 4.9989V9.9989C1.99902 10.555 2.44288 10.9989 2.99902 10.9989H3.99902V13.9989H11.999V10.9989H12.999C13.5552 10.9989 13.999 10.555 13.999 9.9989V4.9989C13.999 4.44276 13.5552 3.9989 12.999 3.9989H11.999V1.9989H3.99902ZM10.999 3.9989H4.99902V2.9989H10.999V3.9989ZM2.99902 4.9989H12.999V9.9989H11.999V7.9989H3.99902V9.9989H2.99902V4.9989ZM4.99902 12.9989V8.9989H10.999V12.9989H4.99902Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("qrcode","Qrcode"):H("qrcode",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 4H4V6H6V4Z" fill="black" fill-opacity="0.9"/>
<path d="M2.5 2C2.22386 2 2 2.22386 2 2.5V7.5C2 7.77614 2.22386 8 2.5 8H7.5C7.77614 8 8 7.77614 8 7.5V2.5C8 2.22386 7.77614 2 7.5 2H2.5ZM3 3H7V7H3V3Z" fill="black" fill-opacity="0.9"/>
<path d="M10.5 2C10.2239 2 10 2.22386 10 2.5V5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2H10.5ZM11 5V3H13V5H11Z" fill="black" fill-opacity="0.9"/>
<path d="M10 10.5C10 10.2239 10.2239 10 10.5 10H13.5C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H10.5C10.2239 14 10 13.7761 10 13.5V10.5ZM11 13H13V11H11V13Z" fill="black" fill-opacity="0.9"/>
<path d="M2.5 10C2.22386 10 2 10.2239 2 10.5V13.5C2 13.7761 2.22386 14 2.5 14H5.5C5.77614 14 6 13.7761 6 13.5V10.5C6 10.2239 5.77614 10 5.5 10H2.5ZM3 11H5V13H3V11Z" fill="black" fill-opacity="0.9"/>
<path d="M14 7.5L10 7.5V8.5L14 8.5V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M8.5 11V14H7.5V11H8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M8.5 10V9H7.5V10H8.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("queue","Queue"):H("queue",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3H13V12H14V3C14 2.44772 13.5523 2 13 2H4V3Z" fill="black" fill-opacity="0.9"/>
<path d="M6.58325 9.41669V12.3334L7.58325 12.3334V9.41669H10.3334V8.41669H7.58325V5.66669H6.58325V8.41669H3.66675V9.41669H6.58325Z" fill="black" fill-opacity="0.9"/>
<path d="M2 13C2 13.5523 2.44772 14 3 14L11 14C11.5523 14 12 13.5523 12 13L12 5C12 4.44772 11.5523 4 11 4H3C2.44772 4 2 4.44772 2 5V13ZM3 5L11 5L11 13L3 13L3 5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("rectangle","Rectangle"):H("rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13C2 13.5523 2.44772 14 3 14ZM3 13L3 3L13 3L13 13L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
    `),n==="develop"?_("refresh","Refresh"):H("refresh",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 2.71134C10.8965 2.71134 13.2534 5.0736 13.2534 7.99868H14.2148C14.2148 4.54763 11.4324 1.75 8.00016 1.75C5.76382 1.75 3.80336 2.93771 2.7087 4.72001L2.7087 2.64252H1.75V5.74894C1.75 6.02508 1.97386 6.24894 2.25 6.24894L5.33676 6.24894V5.28498L3.49045 5.28498C4.40906 3.74211 6.08692 2.71134 8.00016 2.71134Z" fill="black" fill-opacity="0.9"/>
<path d="M1.78554 7.99863H2.74687C2.74687 10.9237 5.10379 13.286 8.00015 13.286C9.91339 13.286 11.5912 12.2553 12.5099 10.7124H10.6632V9.74843H13.75C14.0261 9.74843 14.25 9.97228 14.25 10.2484V13.3548H13.2913V11.2779C12.1966 13.0599 10.2363 14.2474 8.00015 14.2474C4.56792 14.2474 1.78554 11.4497 1.78554 7.99863Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("relativity","Relativity"):H("relativity",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5H2.5C1.94772 5.5 1.5 5.94772 1.5 6.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5H6.5C5.94772 1.5 5.5 1.94772 5.5 2.5V5.5ZM6.5 2.5H13.5V9.5H10.5V6.5C10.5 5.94772 10.0523 5.5 9.5 5.5H6.5V2.5ZM9.5 10.5V13.5H2.5V6.5H5.5V9.5C5.5 10.0523 5.94772 10.5 6.5 10.5H9.5ZM9.5 9.5H6.5V6.5H9.5V9.5Z" fill="black" fill-opacity="0.9"/>
</svg>
    `),n==="develop"?_("remove","Remove"):H("remove",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 7.34998H12.5V8.64998H3.5V7.34998Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("rollback","Rollback"):H("rollback",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.20718 5.00004L5.85363 3.35359L5.14652 2.64648L2.64652 5.14648C2.45126 5.34175 2.45126 5.65833 2.64652 5.85359L5.14652 8.35359L5.85363 7.64648L4.20718 6.00004H10.0001C11.6569 6.00004 13.0001 7.34318 13.0001 9.00004C13.0001 10.6569 11.6569 12 10.0001 12H5.00008V13H10.0001C12.2092 13 14.0001 11.2092 14.0001 9.00004C14.0001 6.7909 12.2092 5.00004 10.0001 5.00004H4.20718Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("rollfront","Rollfront"):H("rollfront",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0859 5.00004L10.4394 3.35359L11.1465 2.64648L13.6465 5.14648C13.8418 5.34175 13.8418 5.65833 13.6465 5.85359L11.1465 8.35359L10.4394 7.64648L12.0859 6.00004H6.29297C4.63611 6.00004 3.29297 7.34318 3.29297 9.00004C3.29297 10.6569 4.63611 12 6.29297 12H11.293V13H6.29297C4.08383 13 2.29297 11.2092 2.29297 9.00004C2.29297 6.7909 4.08383 5.00004 6.29297 5.00004H12.0859Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("root-list","RootList"):H("root-list",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M4.5 5H11.5V6H4.5V5Z" fill="black" fill-opacity="0.9"/>
<path d="M9 7.5H4.5V8.5H9V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3 2C2.44772 2 2 2.44771 2 3V13C2 13.5523 2.44771 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3ZM13 3V13H3L3 3H13Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?_("rotation","Rotation"):H("rotation",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H3V8.08296C5.5125 8.50448 7.49552 10.4875 7.91704 13H14V14H3C2.44772 14 2 13.5523 2 13V2ZM6.89998 13C6.5023 11.0409 4.95913 9.4977 3 9.10002V13L6.89998 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("round","Round"):H("round",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 11.5C6.067 11.5 4.5 9.933 4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5ZM8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("save","Save"):H("save",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2L14 5V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H11ZM10 3L6 3V4.5H10V3ZM11 3.41421V5.5H5V3L3 3L3 13H5V8H11V13H13V5.41421L11 3.41421ZM10 13V9H6V13H10Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("scan","Scan"):H("scan",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.5H4V6.5H3V3.5C3 2.94769 3.44775 2.5 4 2.5H12C12.5522 2.5 13 2.94769 13 3.5V6.5H12V3.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3 9.5H4V12.5H12V9.5H13V12.5C13 13.0523 12.5522 13.5 12 13.5H4C3.44775 13.5 3 13.0523 3 12.5V9.5Z" fill="black" fill-opacity="0.9"/>
<path d="M14 7.5H2V8.5H14V7.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("search","Search"):H("search",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51033 10.2186C8.69189 10.8814 7.64943 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64942 10.8814 8.69189 10.2186 9.51034L13.75 13.0417L13.0417 13.75L9.51033 10.2186ZM10.2768 6.51421C10.2768 4.43623 8.59224 2.75168 6.51424 2.75168C4.43623 2.75168 2.75168 4.43623 2.75168 6.51421C2.75168 8.59219 4.43623 10.2767 6.51424 10.2767C8.59224 10.2767 10.2768 8.59219 10.2768 6.51421Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("secured","Secured"):H("secured",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.3894 9.92886L10.9644 6.35379L10.2573 5.64669L7.38939 8.51464L5.74265 6.8679L5.03555 7.57501L7.3894 9.92886Z" fill="black" fill-opacity="0.9"/>
<path d="M2.50003 2L2.5 9.00005C2.5 10.4165 3.24315 11.729 4.45772 12.4578L7.99979 14.5831L11.5423 12.4578C12.7569 11.729 13.5 10.4165 13.5 9.00005L13.5001 2H2.50003ZM3.5 9.00005L3.50002 3H12.5001L12.5 9.00005C12.5 10.0652 11.9412 11.0523 11.0278 11.6003L7.99982 13.417L4.97223 11.6003C4.05886 11.0523 3.5 10.0652 3.5 9.00005Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("server","Server"):H("server",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5.25H4V4.25H7V5.25Z" fill="black" fill-opacity="0.9"/>
<path d="M1.50024 2.50014C1.50017 2.22394 1.72405 2 2.00024 2H14.0002C14.2763 2 14.5002 2.22377 14.5002 2.49986L14.5012 6.99988C14.5013 7.27608 14.2774 7.50002 14.0012 7.50002H2.00119C1.7251 7.50002 1.50127 7.27624 1.50119 7.00015L1.50024 2.50014ZM2.50106 6.50002H13.5011L13.5004 3H2.50038L2.50106 6.50002Z" fill="black" fill-opacity="0.9"/>
<path d="M4.00011 11.75H7.00011V10.75H4.00011V11.75Z" fill="black" fill-opacity="0.9"/>
<path d="M1.50133 9.00001C1.50133 8.72387 1.72519 8.50001 2.00133 8.50001H14.0013C14.2775 8.50001 14.5013 8.72387 14.5013 9.00001V13.5C14.5013 13.7761 14.2775 14 14.0013 14H2.00133C1.72519 14 1.50133 13.7761 1.50133 13.5V9.00001ZM2.50133 13H13.5013V9.50001H2.50133V13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("service","Service"):H("service",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.51604 6.37387C2.73216 3.5341 5.10482 1.29718 7.99995 1.29718C10.8949 1.29718 13.2674 3.5338 13.4838 6.37328C13.4944 6.41375 13.5 6.45622 13.5 6.5V10.5C13.5 10.5506 13.4925 10.5995 13.4785 10.6455C13.2561 12.923 11.3359 14.7028 9 14.7028H8V13.7028H9C10.6587 13.7028 12.048 12.5489 12.4088 11H10.5C10.2239 11 10 10.7761 10 10.5V6.5C10 6.22386 10.2239 6 10.5 6H12.4295C12.0532 3.89498 10.2132 2.29718 7.99995 2.29718C5.78672 2.29718 3.94667 3.89498 3.57038 6H5.5C5.77614 6 6 6.22386 6 6.5V10.5C6 10.7761 5.77614 11 5.5 11H3C2.72386 11 2.5 10.7761 2.5 10.5V6.5C2.5 6.45643 2.50557 6.41416 2.51604 6.37387ZM12.4999 7H11V10H12.5L12.4999 7ZM3.5 7V10H5V7H3.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("setting","Setting"):H("setting",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0002 8C11.0002 9.65685 9.65702 11 8.00017 11C6.34331 11 5.00017 9.65685 5.00017 8C5.00017 6.34315 6.34331 5 8.00017 5C9.65702 5 11.0002 6.34315 11.0002 8ZM10.0002 8C10.0002 6.89543 9.10474 6 8.00017 6C6.8956 6 6.00017 6.89543 6.00017 8C6.00017 9.10457 6.8956 10 8.00017 10C9.10474 10 10.0002 9.10457 10.0002 8Z" fill="black" fill-opacity="0.9"/>
<path d="M8.00017 1.25L14.0623 4.625V11.375L8.00017 14.75L1.93799 11.375V4.625L8.00017 1.25ZM2.93799 5.2128V10.7872L8.00017 13.6055L13.0623 10.7872V5.2128L8.00017 2.39453L2.93799 5.2128Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("share","Share"):H("share",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.93164 5.35774C10.355 5.81616 10.9612 6.10324 11.6344 6.10324C12.9142 6.10324 13.9517 5.06575 13.9517 3.78594C13.9517 2.50612 12.9142 1.46863 11.6344 1.46863C10.3546 1.46863 9.3171 2.50612 9.3171 3.78594C9.3171 4.03296 9.35575 4.27096 9.42734 4.49422L6.06804 6.45463C5.64466 5.99613 5.03844 5.709 4.36516 5.709C3.08535 5.709 2.04785 6.74649 2.04785 8.02631C2.04785 9.30612 3.08535 10.3436 4.36516 10.3436C5.03854 10.3436 5.64484 10.0564 6.06822 9.59778L9.4282 11.5557C9.35606 11.7797 9.3171 12.0187 9.3171 12.2667C9.3171 13.5465 10.3546 14.584 11.6344 14.584C12.9142 14.584 13.9517 13.5465 13.9517 12.2667C13.9517 10.9869 12.9142 9.94937 11.6344 9.94937C10.9622 9.94937 10.3568 10.2356 9.93356 10.6928L6.57236 8.73416C6.64386 8.51103 6.68247 8.27318 6.68247 8.02631C6.68247 7.77934 6.64383 7.5414 6.57228 7.31819L9.93164 5.35774ZM11.6344 2.46863C12.3619 2.46863 12.9517 3.05841 12.9517 3.78594C12.9517 4.51346 12.3619 5.10324 11.6344 5.10324C11.1607 5.10324 10.7454 4.85324 10.5133 4.47798C10.5084 4.4681 10.5031 4.45831 10.4974 4.44864C10.4918 4.43887 10.4858 4.42937 10.4795 4.42015C10.376 4.23201 10.3171 4.01585 10.3171 3.78594C10.3171 3.05841 10.9069 2.46863 11.6344 2.46863ZM5.48783 7.33682C5.49239 7.34584 5.49725 7.35478 5.50242 7.36363C5.50761 7.37253 5.51305 7.38122 5.5187 7.38968C5.62306 7.57838 5.68247 7.79541 5.68247 8.02631C5.68247 8.25725 5.62304 8.47431 5.51864 8.66304C5.51295 8.67156 5.50748 8.68031 5.50226 8.68928C5.49717 8.698 5.49239 8.70681 5.48789 8.7157C5.25607 9.09243 4.83995 9.34361 4.36516 9.34361C3.63763 9.34361 3.04785 8.75383 3.04785 8.02631C3.04785 7.29878 3.63763 6.709 4.36516 6.709C4.83991 6.709 5.256 6.96014 5.48783 7.33682ZM10.3171 12.2667C10.3171 12.0491 10.3699 11.8438 10.4633 11.663C10.4779 11.6445 10.4914 11.6247 10.5037 11.6037C10.5154 11.5835 10.5256 11.5628 10.5343 11.5418C10.77 11.1849 11.1747 10.9494 11.6344 10.9494C12.3619 10.9494 12.9517 11.5391 12.9517 12.2667C12.9517 12.9942 12.3619 13.584 11.6344 13.584C10.9069 13.584 10.3171 12.9942 10.3171 12.2667Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("shop","Shop"):H("shop",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C6.61929 1 5.5 2.11929 5.5 3.5V5H3.5C3.22386 5 3 5.22386 3 5.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V5.5C13 5.22386 12.7761 5 12.5 5H10.5V3.5C10.5 2.11929 9.38071 1 8 1ZM9.5 6V8H10.5V6H12V14H4V6H5.5V8H6.5V6H9.5ZM9.5 5H6.5V3.5C6.5 2.67157 7.17157 2 8 2C8.82843 2 9.5 2.67157 9.5 3.5V5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("slash","Slash"):H("slash",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.06689 13.8122L11.0669 1.68787L11.9329 2.18787L4.93292 14.3122L4.06689 13.8122Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("sound","Sound"):H("sound",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99991 11L8.24266 13.5457C8.57592 13.7456 8.99991 13.5056 8.99991 13.1169V2.8831C8.99991 2.49445 8.57592 2.25439 8.24266 2.45435L3.99991 5H2.10473C1.77358 5 1.50504 5.26829 1.50473 5.59944L1.50024 10.3994C1.49993 10.731 1.76865 11 2.10024 11H3.99991ZM4.99991 5.56619L7.99991 3.76619V12.2338L4.99991 10.4338V5.56619ZM3.99991 10H2.50062L2.50435 6H3.99991V10Z" fill="black" fill-opacity="0.9"/>
<path d="M13.515 5.72686C13.194 5.00368 12.7215 4.34191 12.1209 3.78131L12.8032 3.05025C13.4996 3.70026 14.0521 4.47194 14.429 5.32122C14.8059 6.1705 14.9999 7.08075 14.9999 8C14.9999 8.91925 14.8059 9.8295 14.429 10.6788C14.0521 11.5281 13.4996 12.2997 12.8032 12.9497L12.1209 12.2187C12.7215 11.6581 13.194 10.9963 13.515 10.2731C13.8358 9.55017 13.9999 8.77797 13.9999 8C13.9999 7.22203 13.8358 6.44984 13.515 5.72686Z" fill="black" fill-opacity="0.9"/>
<path d="M11.5 8.00027C11.5007 7.12735 11.1403 6.24663 10.4274 5.54638L11.1282 4.83301C12.023 5.71203 12.501 6.84639 12.5 8.00113C12.499 9.15589 12.0191 10.2897 11.1227 11.1675L10.423 10.453C11.1372 9.75363 11.4992 8.87324 11.5 8.00027Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("star-filled","StarFilled"):H("star-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.59756 1.81764C7.76262 1.48318 8.23955 1.48318 8.40462 1.81764L10.2053 5.46619L14.2317 6.05126C14.6008 6.10489 14.7482 6.55848 14.4811 6.81882L11.5675 9.65881L12.2553 13.6689C12.3184 14.0366 11.9325 14.3169 11.6024 14.1433L8.00109 12.25L4.39976 14.1433C4.06963 14.3169 3.68378 14.0366 3.74683 13.669L4.43463 9.65881L1.52109 6.81882C1.25401 6.55848 1.40139 6.10489 1.77049 6.05126L5.79689 5.46619L7.59756 1.81764Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("star","Star"):H("star",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.54158 6.3802L8.00145 3.25955L6.46132 6.3802L3.01749 6.88062L5.50947 9.3097L4.9212 12.7396L8.00145 11.1202L11.0817 12.7396L10.4934 9.3097L12.9854 6.88062L9.54158 6.3802ZM14.5328 6.09497C14.7789 6.13072 14.8771 6.43311 14.6991 6.60667L11.5679 9.65882L12.3071 13.9685C12.3491 14.2136 12.0919 14.4005 11.8718 14.2848L8.00145 12.25L4.13111 14.2848C3.91102 14.4005 3.65379 14.2136 3.69582 13.9685L4.43499 9.65882L1.30382 6.60667C1.12576 6.43311 1.22401 6.13072 1.47008 6.09497L5.79726 5.46619L7.73243 1.5451C7.84248 1.32212 8.16043 1.32213 8.27047 1.5451L10.2056 5.46619L14.5328 6.09497Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("stop-circle-1","StopCircle1"):H("stop-circle-1",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.49796 5.49805H10.502V10.5021H5.49796V5.49805Z" fill="black" fill-opacity="0.9"/>
<path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM8 2C9.18669 2 10.3467 2.35189 11.3334 3.01118C12.3201 3.67047 13.0892 4.60754 13.5433 5.7039C13.9974 6.80026 14.1162 8.00666 13.8847 9.17054C13.6532 10.3344 13.0818 11.4035 12.2426 12.2426C11.4035 13.0818 10.3344 13.6532 9.17054 13.8847C8.00666 14.1162 6.80026 13.9974 5.7039 13.5433C4.60755 13.0892 3.67047 12.3201 3.01119 11.3334C2.3519 10.3467 2 9.18669 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("stop-circle-filled","StopCircleFilled"):H("stop-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM5.49991 5.49995V10.5001H10.5001V5.49995H5.49991Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("stop-circle","StopCircle"):H("stop-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5H6V11H7V5Z" fill="black" fill-opacity="0.9"/>
<path d="M10 5H9V11H10V5Z" fill="black" fill-opacity="0.9"/>
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM11.3334 3.01118C10.3467 2.35189 9.18669 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.18669 2.3519 10.3467 3.01119 11.3334C3.67047 12.3201 4.60755 13.0892 5.7039 13.5433C6.80026 13.9974 8.00666 14.1162 9.17054 13.8847C10.3344 13.6532 11.4035 13.0818 12.2426 12.2426C13.0818 11.4035 13.6532 10.3344 13.8847 9.17054C14.1162 8.00666 13.9974 6.80026 13.5433 5.7039C13.0892 4.60754 12.3201 3.67047 11.3334 3.01118Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("stop","Stop"):H("stop",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5H6V11H7V5Z" fill="black" fill-opacity="0.9"/>
<path d="M10 5H9V11H10V5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("swap-left","SwapLeft"):H("swap-left",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.20739 8.99975L15.0002 8.99976L15.0002 9.99976L2.07267 9.99975C1.60049 9.99975 1.36402 9.42885 1.69792 9.09497L5.6467 5.14637L6.35379 5.85349L3.20739 8.99975Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("swap-right","SwapRight"):H("swap-right",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7931 8.99975L1.00024 8.99976L1.00024 9.99976L13.9278 9.99975C14.4 9.99975 14.6365 9.42884 14.3026 9.09497L10.3538 5.14637L9.6467 5.8535L12.7931 8.99975Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("swap","Swap"):H("swap",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25024 6.00005L13.0082 6.00005L9.16404 2.25121L9.86221 1.53528L14.5334 6.09061C14.8738 6.4225 14.6388 7.00005 14.1634 7.00005L1.25024 7.00005V6.00005Z" fill="black" fill-opacity="0.9"/>
<path d="M14.75 10.0001L3.02026 10.0001L6.83053 13.6005L6.14372 14.3273L1.47454 9.91528C1.1261 9.58601 1.35906 9.00005 1.83855 9.00005L14.75 9.00005V10.0001Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("thumb-down","ThumbDown"):H("thumb-down",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9.771H13.2192C13.8698 9.771 14.3472 9.15961 14.1894 8.52846L12.6894 2.52846C12.5781 2.08329 12.1781 1.771 11.7192 1.771L3 1.771C2.44772 1.771 2 2.21871 2 2.771L2 7.771C2 8.32328 2.44772 8.771 3 8.771L5 8.771L7 13.771H9C9.55229 13.771 10 13.3233 10 12.771V9.771ZM6 8.57841L6 2.771L11.7192 2.771L13.2192 8.771H9L9 12.771H7.67703L6 8.57841ZM5 7.771L3 7.771L3 2.771L5 2.771L5 7.771Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("thumb-up","ThumbUp"):H("thumb-up",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6H13.2192C13.8698 6 14.3472 6.61139 14.1894 7.24254L12.6894 13.2425C12.5781 13.6877 12.1781 14 11.7192 14H3C2.44772 14 2 13.5523 2 13V8C2 7.44772 2.44772 7 3 7H5L7 2H9C9.55228 2 10 2.44772 10 3V6ZM6 7.19258V13H11.7192L13.2192 7H9V3H7.67703L6 7.19258ZM5 8H3V13H5V8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("time-filled","TimeFilled"):H("time-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.5 5H8.5V7.97471L11.3538 10.8285L10.6467 11.5356L7.5 8.38892V5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("time","Time"):H("time",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4V8.38892L10.0002 11L10.7074 10.2929L8.5 7.97471V4H7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("tips","Tips"):H("tips",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C6.6247 1 5.36829 1.5546 4.46644 2.46644C3.5546 3.36829 3 4.6247 3 6C3 7.37457 3.554 8.63036 4.46498 9.53211C4.77388 9.84935 5.12363 10.1126 5.5 10.3289V12C5.5 12.5523 5.94772 13 6.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12V10.3289C10.8764 10.1126 11.2261 9.84935 11.535 9.5321C12.446 8.63036 13 7.37456 13 6C13 3.23386 10.7661 1 8 1ZM5.17572 3.17138C5.89371 2.44452 6.8964 2 8 2C10.2139 2 12 3.78614 12 6C12 7.1036 11.5555 8.10629 10.8286 8.82428L10.8214 8.83161C10.5255 9.13619 10.173 9.3845 9.77639 9.58279L9.5 9.72098V12H6.5V9.72098L6.22361 9.58279C5.82703 9.3845 5.47452 9.13619 5.17864 8.83161L5.17138 8.82428C4.44452 8.10629 4 7.1036 4 6C4 4.8964 4.44452 3.89371 5.17138 3.17572L5.17572 3.17138Z" fill="black" fill-opacity="0.9"/>
<path d="M5.5 14V15H10.5V14H5.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("tools","Tools"):H("tools",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75056 8.24943L10.3118 8.40417C11.3109 8.67963 12.3996 8.42901 13.1581 7.67052C13.8303 6.99831 14.1035 6.06341 13.9654 5.16621L12.909 6.22262C12.3232 6.80839 11.3735 6.80841 10.7877 6.22265L10.3634 5.7984C9.77758 5.21262 9.77757 4.26285 10.3634 3.67705L11.4198 2.62058C10.5226 2.48241 9.58765 2.75565 8.91542 3.42788C8.15697 4.18632 7.90634 5.27494 8.18172 6.27395L8.33641 6.83516L2.53207 12.6395L3.94628 14.0537L9.75056 8.24943ZM12.2439 1.7965C12.5739 1.90785 12.893 2.06333 13.1918 2.26284L11.0705 4.38415C10.8752 4.57942 10.8752 4.89601 11.0705 5.09127L11.4948 5.51552C11.69 5.71077 12.0066 5.71077 12.2019 5.51551L14.3231 3.39423C14.5227 3.69303 14.6781 4.01209 14.7895 4.34211C15.255 5.72209 14.9491 7.29373 13.8652 8.37763C12.8375 9.40526 11.3715 9.73365 10.046 9.3682L4.65339 14.7608C4.26287 15.1513 3.6297 15.1513 3.23918 14.7608L1.82496 13.3466C1.43444 12.9561 1.43444 12.3229 1.82496 11.9324L7.21767 6.53969C6.85233 5.21428 7.18074 3.74834 8.20831 2.72077C9.29223 1.63686 10.8639 1.33087 12.2439 1.7965Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("unfold-less","UnfoldLess"):H("unfold-less",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.3556 2.12549L8.00004 5.81174L11.6445 2.12549L12.3556 2.82855L8.42672 6.80251C8.19187 7.04006 7.80822 7.04006 7.57337 6.80251L3.64447 2.82855L4.3556 2.12549Z" fill="black" fill-opacity="0.9"/>
<path d="M4.30769 13.8306L8.00003 10.1382L11.6924 13.8306L12.3995 13.1235L8.42429 9.14829C8.18998 8.91397 7.81008 8.91397 7.57577 9.14829L3.60059 13.1235L4.30769 13.8306Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("unfold-more","UnfoldMore"):H("unfold-more",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6445 6.84005L8.00001 3.1538L4.35559 6.84005L3.64446 6.13699L7.57334 2.16303C7.80819 1.92548 8.19183 1.92548 8.42669 2.16303L12.3556 6.13699L11.6445 6.84005Z" fill="black" fill-opacity="0.9"/>
<path d="M11.6924 9.15791L8.00003 12.8503L4.30769 9.15791L3.60059 9.86502L7.57576 13.8402C7.81008 14.0745 8.18998 14.0745 8.42429 13.8402L12.3995 9.86502L11.6924 9.15791Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("upload","Upload"):H("upload",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.73759 6.6778L7.50118 2.91421L7.5012 11.5L8.5012 11.5L8.50118 2.91422L12.2648 6.6778L12.9719 5.97069L8.35473 1.35355C8.15947 1.15829 7.84289 1.15829 7.64762 1.35355L3.03048 5.9707L3.73759 6.6778Z" fill="black" fill-opacity="0.9"/>
<path d="M2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11H13V13H3V11H2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("usb","Usb"):H("usb",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 6H5.5V5H7.5V6Z" fill="black" fill-opacity="0.9"/>
<path d="M8.5 6H10.5V5H8.5V6Z" fill="black" fill-opacity="0.9"/>
<path d="M4 8V2.5C4 2.22386 4.22386 2 4.5 2H11.5C11.7761 2 12 2.22386 12 2.5V8C12.5523 8 13 8.44772 13 9V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V9C3 8.44772 3.44772 8 4 8ZM5 8H11V3H5V8ZM4 9V14H12V9H4Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("user-add","UserAdd"):H("user-add",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5ZM8 7.5C6.61929 7.5 5.5 6.38071 5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5Z" fill="black"/>
<path d="M11.5 10.9864C10.3864 10.6698 9.21367 10.5 8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H9.5V14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C9.20942 9.5 10.3814 9.65652 11.5 9.9498V10.9864Z" fill="black"/>
<path d="M12.75 13.75V16H13.75V13.75H16V12.75H13.75V10.5H12.75V12.75H10.5V13.75H12.75Z" fill="black"/>
</svg>
`),n==="develop"?_("user-avatar","UserAvatar"):H("user-avatar",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10.5C9.24124 10.5 10.4221 10.8126 11.5 11.3795V12.5L12.5 12.5V11.3584C12.5 11.0106 12.3213 10.6842 12.0145 10.5204C10.7893 9.86653 9.43252 9.5 8 9.5C6.56748 9.5 5.21075 9.86653 3.9855 10.5204C3.67873 10.6842 3.5 11.0106 3.5 11.3584V12.5H4.5V11.3795C5.57794 10.8126 6.75876 10.5 8 10.5Z" fill="black"/>
<path d="M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6ZM9.5 6C9.5 5.17157 8.82843 4.5 8 4.5C7.17157 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17157 7.5 8 7.5C8.82843 7.5 9.5 6.82843 9.5 6Z" fill="black"/>
<path d="M2.5 1.5C1.94772 1.5 1.5 1.94772 1.5 2.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H13.5C14.0523 14.5 14.5 14.0523 14.5 13.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5H2.5ZM13.5 2.5V13.5H2.5L2.5 2.5H13.5Z" fill="black"/>
</svg>
`),n==="develop"?_("user-circle","UserCircle"):H("user-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M8 9C9.53535 9 10.78 7.75535 10.78 6.22C10.78 4.68465 9.53535 3.44 8 3.44C6.46465 3.44 5.22 4.68465 5.22 6.22C5.22 7.75535 6.46465 9 8 9ZM8 8C7.01693 8 6.22 7.20307 6.22 6.22C6.22 5.23693 7.01693 4.44 8 4.44C8.98307 4.44 9.78 5.23693 9.78 6.22C9.78 7.20307 8.98307 8 8 8Z" fill="black"/>
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM12.9955 11.3246C11.4748 10.4765 9.78555 10 7.99998 10C6.21441 10 4.52519 10.4765 3.00451 11.3246C2.36991 10.3729 2 9.22966 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.22966 13.6301 10.3729 12.9955 11.3246ZM12.3632 12.1185C11.2693 13.277 9.71909 14 8 14C6.2809 14 4.73066 13.277 3.63675 12.1185C4.9805 11.3976 6.45282 11 7.99998 11C9.54714 11 11.0195 11.3976 12.3632 12.1185Z" fill="black"/>
</g>
</svg>
`),n==="develop"?_("user-clear","UserClear"):H("user-clear",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5ZM8 7.5C6.61929 7.5 5.5 6.38071 5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5Z" fill="black"/>
<path d="M10.5 10.7452C9.69127 10.5844 8.85582 10.5 8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H10.5V14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C8.85386 9.5 9.68908 9.57802 10.5 9.7271V10.7452Z" fill="black"/>
<path d="M11.4038 14.2929L12.9947 12.702L11.4037 11.1109L12.1108 10.4038L13.7018 11.9949L15.2929 10.4038L16 11.1109L14.4089 12.702L15.9999 14.2929L15.2928 15L13.7018 13.4091L12.1109 15L11.4038 14.2929Z" fill="black"/>
</svg>
`),n==="develop"?_("user-talk","UserTalk"):H("user-talk",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3284 7.82844C14.8905 6.26634 14.8905 3.73368 13.3284 2.17158L14.0355 1.46448C15.9881 3.4171 15.9881 6.58292 14.0355 8.53555L13.3284 7.82844Z" fill="black" fill-opacity="0.9"/>
<path d="M11 5C11 6.933 9.433 8.5 7.5 8.5C5.567 8.5 4 6.933 4 5C4 3.067 5.567 1.5 7.5 1.5C9.433 1.5 11 3.067 11 5ZM10 5C10 3.61929 8.88071 2.5 7.5 2.5C6.11929 2.5 5 3.61929 5 5C5 6.38071 6.11929 7.5 7.5 7.5C8.88071 7.5 10 6.38071 10 5Z" fill="black" fill-opacity="0.9"/>
<path d="M13.4631 10.8528C13.797 11.0122 14 11.3547 14 11.7246L14 14C14 14.2761 13.7761 14.5 13.5 14.5L1.5 14.5C1.22386 14.5 1 14.2761 1 14V11.7246C1 11.3547 1.20302 11.0122 1.53686 10.8528C3.3494 9.98707 5.36651 9.5 7.5 9.5C9.63349 9.5 11.6506 9.98708 13.4631 10.8528ZM7.5 10.5C5.5334 10.5 3.67434 10.9457 2 11.7398L2 13.5H13V11.7398C11.3257 10.9457 9.4666 10.5 7.5 10.5Z" fill="black" fill-opacity="0.9"/>
<path d="M11.9142 3.58577C12.6953 4.36682 12.6953 5.63315 11.9142 6.4142L12.6213 7.1213C13.7929 5.94973 13.7929 4.05023 12.6213 2.87866L11.9142 3.58577Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("user","User"):H("user",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 5C11.5 6.933 9.933 8.5 8 8.5C6.067 8.5 4.5 6.933 4.5 5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5ZM10.5 5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5C5.5 6.38071 6.61929 7.5 8 7.5C9.38071 7.5 10.5 6.38071 10.5 5Z" fill="black" fill-opacity="0.9"/>
<path d="M13.9631 10.8528C14.297 11.0122 14.5 11.3547 14.5 11.7246V14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C10.1335 9.5 12.1506 9.98708 13.9631 10.8528ZM8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H13.5V11.7398C11.8257 10.9457 9.9666 10.5 8 10.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("usergroup-add","UsergroupAdd"):H("usergroup-add",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2349 12.75V14.5H14.2349V12.75H15.9849V11.75H14.2349V10H13.2349V11.75H11.4849V12.75H13.2349Z" fill="black"/>
<path d="M7.46171 1.34645C7.02232 1.12482 6.52575 1 6.00003 1C4.2051 1 2.75003 2.45507 2.75003 4.25C2.75003 6.02947 4.18015 7.47491 5.95373 7.49968V6.49953C4.73246 6.47488 3.75003 5.47717 3.75003 4.25C3.75003 3.00736 4.75739 2 6.00003 2C6.2937 2 6.57424 2.05626 6.83144 2.1586L7.46171 1.34645Z" fill="black"/>
<path d="M5.95373 8.22094C4.01922 8.22779 2.18917 8.66419 0.540929 9.43593C0.204537 9.59344 0 9.9372 0 10.3086V12.5C0 12.7761 0.223857 13 0.5 13H2.85709V12H1V10.3252C2.51071 9.62379 4.18421 9.22774 5.95373 9.22095V8.22094Z" fill="black"/>
<path d="M13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354ZM12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354Z" fill="black"/>
<path d="M12 10.5988C11.35 10.4879 10.6821 10.43 9.99997 10.43C8.21334 10.43 6.52384 10.8269 4.99996 11.5344V13.5H12V14.5H4.49996C4.22382 14.5 3.99996 14.2761 3.99996 14V11.5178C3.99996 11.1464 4.2045 10.8026 4.54089 10.6451C6.20227 9.86723 8.04837 9.43005 9.99997 9.43005C10.6806 9.43005 11.3484 9.48322 12 9.58548V10.5988Z" fill="black"/>
</svg>
`),n==="develop"?_("usergroup-clear","UsergroupClear"):H("usergroup-clear",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.46171 1.34645C7.02232 1.12482 6.52575 1 6.00003 1C4.2051 1 2.75003 2.45507 2.75003 4.25C2.75003 6.02947 4.18015 7.47491 5.95373 7.49968V6.49953C4.73246 6.47488 3.75003 5.47717 3.75003 4.25C3.75003 3.00736 4.75739 2 6.00003 2C6.2937 2 6.57424 2.05626 6.83144 2.1586L7.46171 1.34645Z" fill="black"/>
<path d="M5.95373 8.22094C4.01922 8.22779 2.18917 8.66419 0.540929 9.43593C0.204537 9.59344 0 9.9372 0 10.3086V12.5C0 12.7761 0.223857 13 0.5 13H2.85709V12H1V10.3252C2.51071 9.62379 4.18421 9.22774 5.95373 9.22095V8.22094Z" fill="black"/>
<path d="M13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354ZM12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354Z" fill="black"/>
<path d="M11 10.4718C10.6704 10.4442 10.3369 10.43 9.99997 10.43C8.21334 10.43 6.52384 10.8269 4.99996 11.5344V13.5H10.5V14.5H4.49996C4.22382 14.5 3.99996 14.2761 3.99996 14V11.5178C3.99996 11.1464 4.2045 10.8026 4.54089 10.6451C6.20227 9.86723 8.04837 9.43005 9.99997 9.43005C10.3366 9.43005 10.6701 9.44305 11 9.46857V10.4718Z" fill="black"/>
<path d="M13.1369 12.344L11.6881 13.7929L12.3952 14.5L13.844 13.0512L15.2929 14.5L16 13.7929L14.5512 12.344L16.0001 10.8951L15.293 10.188L13.844 11.6369L12.3951 10.188L11.688 10.8951L13.1369 12.344Z" fill="black"/>
</svg>
`),n==="develop"?_("usergroup","Usergroup"):H("usergroup",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00003 1C6.52575 1 7.02232 1.12482 7.46171 1.34645L6.83144 2.1586C6.57424 2.05626 6.2937 2 6.00003 2C4.75739 2 3.75003 3.00736 3.75003 4.25C3.75003 5.47717 4.73246 6.47488 5.95373 6.49953V7.49968C4.18015 7.47491 2.75003 6.02947 2.75003 4.25C2.75003 2.45507 4.2051 1 6.00003 1Z" fill="black"/>
<path d="M0.540929 9.43593C2.18917 8.66419 4.01922 8.22779 5.95373 8.22094V9.22095C4.18421 9.22774 2.51071 9.62379 1 10.3252V12H2.85709V13H0.5C0.223857 13 0 12.7761 0 12.5V10.3086C0 9.9372 0.204537 9.59344 0.540929 9.43593Z" fill="black"/>
<path d="M9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354ZM9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354Z" fill="black"/>
<path d="M16 11.5178C16 11.1464 15.7954 10.8026 15.459 10.6451C13.7977 9.86723 11.9516 9.43005 9.99997 9.43005C8.04837 9.43005 6.20227 9.86723 4.54089 10.6451C4.2045 10.8026 3.99996 11.1464 3.99996 11.5178V14C3.99996 14.2761 4.22382 14.5 4.49996 14.5H15.5C15.7761 14.5 16 14.2761 16 14V11.5178ZM15 11.5344V13.5H4.99996V11.5344C6.52384 10.8269 8.21334 10.43 9.99997 10.43C11.7866 10.43 13.4761 10.8269 15 11.5344Z" fill="black"/>
</svg>
`),n==="develop"?_("video","Video"):H("video",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.05 7.74017C11.25 7.85564 11.25 8.14432 11.05 8.25979L5.95 11.2043C5.75 11.3198 5.5 11.1754 5.5 10.9445L5.5 5.0555C5.5 4.82456 5.75 4.68023 5.95 4.7957L11.05 7.74017ZM6.5 6.26794V9.73204L9.5 7.99998L6.5 6.26794Z" fill="black" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 13H13V3H3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("view-column","ViewColumn"):H("view-column",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H4.5L4.5 2H3.5ZM7.5 14L7.5 2H8.5L8.5 14H7.5ZM11.5 14L11.5 2H12.5L12.5 14H11.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("view-list","ViewList"):H("view-list",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4.5H2V3.5H14V4.5Z" fill="black" fill-opacity="0.9"/>
<path d="M14 8.5H2V7.5H14V8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2 12.5H14V11.5H2V12.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("view-module","ViewModule"):H("view-module",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7.5L11 7.5V8.5L4 8.5V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M10 10L4 10V11H10V10Z" fill="black" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 5H13V3H3ZM3 6L3 13H13V6H3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("wallet","Wallet"):H("wallet",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 4.5L13.5 4.5C14.0523 4.5 14.5 4.94772 14.5 5.5V12C14.5 12.5523 14.0523 13 13.5 13H2.5C1.94772 13 1.5 12.5523 1.5 12V3C1.5 2.44771 1.94772 2 2.5 2H10.5C11.0523 2 11.5 2.44771 11.5 3V4.5ZM10.5 3L2.5 3V4.5L10.5 4.5V3ZM13.5 5.5H2.5L2.5 12H13.5V5.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("wifi","Wifi"):H("wifi",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1536 10.7038L10.8516 9.98785C10.0271 9.14905 9.02319 8.68872 7.98486 8.68872C6.95923 8.68872 5.96704 9.13806 5.14819 9.9577L5.84595 10.6735C6.50903 10.0049 7.26538 9.68872 7.98486 9.68872C8.71533 9.68872 9.4834 10.0145 10.1536 10.7038Z" fill="black" fill-opacity="0.9"/>
<path d="M12.1785 8.6272L12.8767 7.91101C11.5029 6.49567 9.77637 5.71283 7.9856 5.71283C6.20728 5.71283 4.49219 6.48474 3.12329 7.88123L3.82153 8.59729C5.02856 7.35767 6.50391 6.71283 7.9856 6.71283C9.479 6.71283 10.9658 7.36804 12.1785 8.6272Z" fill="black" fill-opacity="0.9"/>
<path d="M14.1331 6.62256L14.8315 5.90631C12.9297 3.94031 10.5042 2.8493 7.98584 2.8493C5.47998 2.8493 3.06616 3.92938 1.1687 5.87677L1.86694 6.59296C3.59912 4.80591 5.77148 3.8493 7.98584 3.8493C10.2124 3.8493 12.3962 4.81647 14.1331 6.62256Z" fill="black" fill-opacity="0.9"/>
<path d="M9 12.5C9 13.0523 8.55225 13.5 8 13.5C7.44775 13.5 7 13.0523 7 12.5C7 11.9477 7.44775 11.5 8 11.5C8.55225 11.5 9 11.9477 9 12.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("zoom-in","ZoomIn"):H("zoom-in",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 7V9H7V7H9V6H7V4H6V6H4V7H6Z" fill="black" fill-opacity="0.9"/>
<path d="M9.51099 10.2181C8.69245 10.8812 7.64973 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64972 10.8812 8.69245 10.2181 9.511L13.7494 13.0423L13.0423 13.7494L9.51099 10.2181ZM10.2785 6.51421C10.2785 4.4353 8.59317 2.75 6.51424 2.75C4.4353 2.75 2.75 4.4353 2.75 6.51421C2.75 8.59312 4.4353 10.2784 6.51424 10.2784C8.59317 10.2784 10.2785 8.59312 10.2785 6.51421Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?_("zoom-out","ZoomOut"):H("zoom-out",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7H4V6H9V7Z" fill="black" fill-opacity="0.9"/>
<path d="M9.51099 10.2181C8.69245 10.8812 7.64973 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64972 10.8812 8.69245 10.2181 9.511L13.7494 13.0423L13.0423 13.7494L9.51099 10.2181ZM10.2785 6.51421C10.2785 4.4353 8.59317 2.75 6.51424 2.75C4.4353 2.75 2.75 4.4353 2.75 6.51421C2.75 8.59312 4.4353 10.2784 6.51424 10.2784C8.59317 10.2784 10.2785 8.59312 10.2785 6.51421Z" fill="black" fill-opacity="0.9"/>
</svg>
`)).css(Al||(Al=Je(["",""])),Oc)}});var $l={},Nc={get exports(){return $l},set exports(e){$l=e}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(i){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,r={},s={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function p(f){return f instanceof a?new a(f.type,p(f.content),f.alias):Array.isArray(f)?f.map(p):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++l}),p.__id},clone:function p(f,h){h=h||{};var C,x;switch(s.util.type(f)){case"Object":if(x=s.util.objId(f),h[x])return h[x];C={},h[x]=C;for(var k in f)f.hasOwnProperty(k)&&(C[k]=p(f[k],h));return C;case"Array":return x=s.util.objId(f),h[x]?h[x]:(C=[],h[x]=C,f.forEach(function(V,Z){C[Z]=p(V,h)}),C);default:return f}},getLanguage:function(p){for(;p;){var f=o.exec(p.className);if(f)return f[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,f){p.className=p.className.replace(RegExp(o,"gi"),""),p.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(p){var f=document.getElementsByTagName("script");for(var h in f)if(f[h].src==p)return f[h]}return null}},isActive:function(p,f,h){for(var C="no-"+f;p;){var x=p.classList;if(x.contains(f))return!0;if(x.contains(C))return!1;p=p.parentElement}return!!h}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(p,f){var h=s.util.clone(s.languages[p]);for(var C in f)h[C]=f[C];return h},insertBefore:function(p,f,h,C){C=C||s.languages;var x=C[p],k={};for(var V in x)if(x.hasOwnProperty(V)){if(V==f)for(var Z in h)h.hasOwnProperty(Z)&&(k[Z]=h[Z]);h.hasOwnProperty(V)||(k[V]=x[V])}var S=C[p];return C[p]=k,s.languages.DFS(s.languages,function(R,T){T===S&&R!=p&&(this[R]=k)}),k},DFS:function p(f,h,C,x){x=x||{};var k=s.util.objId;for(var V in f)if(f.hasOwnProperty(V)){h.call(f,V,f[V],C||V);var Z=f[V],S=s.util.type(Z);S==="Object"&&!x[k(Z)]?(x[k(Z)]=!0,p(Z,h,null,x)):S==="Array"&&!x[k(Z)]&&(x[k(Z)]=!0,p(Z,h,V,x))}}},plugins:{},highlightAll:function(p,f){s.highlightAllUnder(document,p,f)},highlightAllUnder:function(p,f,h){var C={callback:h,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),s.hooks.run("before-all-elements-highlight",C);for(var x=0,k;k=C.elements[x++];)s.highlightElement(k,f===!0,C.callback)},highlightElement:function(p,f,h){var C=s.util.getLanguage(p),x=s.languages[C];s.util.setLanguage(p,C);var k=p.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(k,C);var V=p.textContent,Z={element:p,language:C,grammar:x,code:V};function S(T){Z.highlightedCode=T,s.hooks.run("before-insert",Z),Z.element.innerHTML=Z.highlightedCode,s.hooks.run("after-highlight",Z),s.hooks.run("complete",Z),h&&h.call(Z.element)}if(s.hooks.run("before-sanity-check",Z),k=Z.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!Z.code){s.hooks.run("complete",Z),h&&h.call(Z.element);return}if(s.hooks.run("before-highlight",Z),!Z.grammar){S(s.util.encode(Z.code));return}if(f&&i.Worker){var R=new Worker(s.filename);R.onmessage=function(T){S(T.data)},R.postMessage(JSON.stringify({language:Z.language,code:Z.code,immediateClose:!0}))}else S(s.highlight(Z.code,Z.grammar,Z.language))},highlight:function(p,f,h){var C={code:p,grammar:f,language:h};if(s.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=s.tokenize(C.code,C.grammar),s.hooks.run("after-tokenize",C),a.stringify(s.util.encode(C.tokens),C.language)},tokenize:function(p,f){var h=f.rest;if(h){for(var C in h)f[C]=h[C];delete f.rest}var x=new w;return u(x,x.head,p),d(p,x,f,x.head,0),g(x)},hooks:{all:{},add:function(p,f){var h=s.hooks.all;h[p]=h[p]||[],h[p].push(f)},run:function(p,f){var h=s.hooks.all[p];if(!(!h||!h.length))for(var C=0,x;x=h[C++];)x(f)}},Token:a};i.Prism=s;function a(p,f,h,C){this.type=p,this.content=f,this.alias=h,this.length=(C||"").length|0}a.stringify=function p(f,h){if(typeof f=="string")return f;if(Array.isArray(f)){var C="";return f.forEach(function(S){C+=p(S,h)}),C}var x={type:f.type,content:p(f.content,h),tag:"span",classes:["token",f.type],attributes:{},language:h},k=f.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(x.classes,k):x.classes.push(k)),s.hooks.run("wrap",x);var V="";for(var Z in x.attributes)V+=" "+Z+'="'+(x.attributes[Z]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+V+">"+x.content+"</"+x.tag+">"};function c(p,f,h,C){p.lastIndex=f;var x=p.exec(h);if(x&&C&&x[1]){var k=x[1].length;x.index+=k,x[0]=x[0].slice(k)}return x}function d(p,f,h,C,x,k){for(var V in h)if(!(!h.hasOwnProperty(V)||!h[V])){var Z=h[V];Z=Array.isArray(Z)?Z:[Z];for(var S=0;S<Z.length;++S){if(k&&k.cause==V+","+S)return;var R=Z[S],T=R.inside,K=!!R.lookbehind,p1=!!R.greedy,H1=R.alias;if(p1&&!R.pattern.global){var i1=R.pattern.toString().match(/[imsuy]*$/)[0];R.pattern=RegExp(R.pattern.source,i1+"g")}for(var e1=R.pattern||R,q=C.next,o1=x;q!==f.tail&&!(k&&o1>=k.reach);o1+=q.value.length,q=q.next){var m1=q.value;if(f.length>p.length)return;if(!(m1 instanceof a)){var x1=1,t1;if(p1){if(t1=c(e1,o1,p,K),!t1||t1.index>=p.length)break;var z=t1.index,$1=t1.index+t1[0].length,u1=o1;for(u1+=q.value.length;z>=u1;)q=q.next,u1+=q.value.length;if(u1-=q.value.length,o1=u1,q.value instanceof a)continue;for(var A=q;A!==f.tail&&(u1<$1||typeof A.value=="string");A=A.next)x1++,u1+=A.value.length;x1--,m1=p.slice(o1,u1),t1.index-=o1}else if(t1=c(e1,0,m1,K),!t1)continue;var z=t1.index,P=t1[0],U=m1.slice(0,z),l1=m1.slice(z+P.length),c1=o1+m1.length;k&&c1>k.reach&&(k.reach=c1);var X=q.prev;U&&(X=u(f,X,U),o1+=U.length),m(f,X,x1);var b=new a(V,T?s.tokenize(P,T):P,H1,P);if(q=u(f,X,b),l1&&u(f,q,l1),x1>1){var M={cause:V+","+S,reach:c1};d(p,f,h,q.prev,o1,M),k&&M.reach>k.reach&&(k.reach=M.reach)}}}}}}function w(){var p={value:null,prev:null,next:null},f={value:null,prev:p,next:null};p.next=f,this.head=p,this.tail=f,this.length=0}function u(p,f,h){var C=f.next,x={value:h,prev:f,next:C};return f.next=x,C.prev=x,p.length++,x}function m(p,f,h){for(var C=f.next,x=0;x<h&&C!==p.tail;x++)C=C.next;f.next=C,C.prev=f,p.length-=x}function g(p){for(var f=[],h=p.head.next;h!==p.tail;)f.push(h.value),h=h.next;return f}if(!i.document)return i.addEventListener&&(s.disableWorkerMessageHandler||i.addEventListener("message",function(p){var f=JSON.parse(p.data),h=f.language,C=f.code,x=f.immediateClose;i.postMessage(s.highlight(C,s.languages[h],h)),x&&i.close()},!1)),s;var v=s.util.currentScript();v&&(s.filename=v.src,v.hasAttribute("data-manual")&&(s.manual=!0));function L(){s.manual||s.highlightAll()}if(!s.manual){var y=document.readyState;y==="loading"||y==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",L):window.requestAnimationFrame?window.requestAnimationFrame(L):window.setTimeout(L,16)}return s}(t);e.exports&&(e.exports=n),typeof io<"u"&&(io.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,l){var r={};r["language-"+l]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[l]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+l]={pattern:/[\s\S]+/,inside:n.languages[l]};var a={};a[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(i,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(i){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var l=i.languages.markup;l&&(l.tag.addInlined("style","css"),l.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading…",o=function(v,L){return"✖ Error "+v+" while fetching file: "+L},l="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",a="loading",c="loaded",d="failed",w="pre[data-src]:not(["+s+'="'+c+'"]):not(['+s+'="'+a+'"])';function u(v,L,y){var p=new XMLHttpRequest;p.open("GET",v,!0),p.onreadystatechange=function(){p.readyState==4&&(p.status<400&&p.responseText?L(p.responseText):p.status>=400?y(o(p.status,p.statusText)):y(l))},p.send(null)}function m(v){var L=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(L){var y=Number(L[1]),p=L[2],f=L[3];return p?f?[y,Number(f)]:[y,void 0]:[y,y]}}n.hooks.add("before-highlightall",function(v){v.selector+=", "+w}),n.hooks.add("before-sanity-check",function(v){var L=v.element;if(L.matches(w)){v.code="",L.setAttribute(s,a);var y=L.appendChild(document.createElement("CODE"));y.textContent=i;var p=L.getAttribute("data-src"),f=v.language;if(f==="none"){var h=(/\.(\w+)$/.exec(p)||[,"none"])[1];f=r[h]||h}n.util.setLanguage(y,f),n.util.setLanguage(L,f);var C=n.plugins.autoloader;C&&C.loadLanguages(f),u(p,function(x){L.setAttribute(s,c);var k=m(L.getAttribute("data-range"));if(k){var V=x.split(/\r\n?|\n/g),Z=k[0],S=k[1]==null?V.length:k[1];Z<0&&(Z+=V.length),Z=Math.max(0,Math.min(Z-1,V.length)),S<0&&(S+=V.length),S=Math.max(0,Math.min(S,V.length)),x=V.slice(Z,S).join(`
`),L.hasAttribute("data-start")||L.setAttribute("data-start",String(Z+1))}y.textContent=x,n.highlightElement(y)},function(x){L.setAttribute(s,d),y.textContent=x})}}),n.plugins.fileHighlight={highlight:function(L){for(var y=(L||document).querySelectorAll(w),p=0,f;f=y[p++];)n.highlightElement(f)}};var g=!1;n.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Nc);(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},i={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:i},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:i},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:i.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:i.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=i.variable[1].inside,r=0;r<o.length;r++)l[o[r]]=e.languages.bash[o[r]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};o["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var l={};l[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",l)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){function t(n,i){return"___"+n.toUpperCase()+i+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,i,o,l){if(n.language===i){var r=n.tokenStack=[];n.code=n.code.replace(o,function(s){if(typeof l=="function"&&!l(s))return s;for(var a=r.length,c;n.code.indexOf(c=t(i,a))!==-1;)++a;return r[a]=s,c}),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,i){if(n.language!==i||!n.tokenStack)return;n.grammar=e.languages[i];var o=0,l=Object.keys(n.tokenStack);function r(s){for(var a=0;a<s.length&&!(o>=l.length);a++){var c=s[a];if(typeof c=="string"||c.content&&typeof c.content=="string"){var d=l[o],w=n.tokenStack[d],u=typeof c=="string"?c:c.content,m=t(i,d),g=u.indexOf(m);if(g>-1){++o;var v=u.substring(0,g),L=new e.Token(i,e.tokenize(w,n.grammar),"language-"+i,w),y=u.substring(g+m.length),p=[];v&&p.push.apply(p,r([v])),p.push(L),y&&p.push.apply(p,r([y])),typeof c=="string"?s.splice.apply(s,[a,1].concat(p)):c.content=p}}else c.content&&r(c.content)}return s}r(n.tokens)}}})})(Prism);function Io(e,t={},n){for(const i in e){const o=e[i],l=n?`${n}:${i}`:i;typeof o=="object"&&o!==null?Io(o,t,l):typeof o=="function"&&(t[l]=o)}return t}function Ic(e,t){return e.reduce((n,i)=>n.then(()=>i.apply(void 0,t)),Promise.resolve())}function jc(e,t){return Promise.all(e.map(n=>n.apply(void 0,t)))}function Ji(e,t){for(const n of e)n(t)}class zc{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,i={}){if(!t||typeof n!="function")return()=>{};const o=t;let l;for(;this._deprecatedHooks[t];)l=this._deprecatedHooks[t],t=l.to;if(l&&!i.allowDeprecated){let r=l.message;r||(r=`${o} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let i,o=(...l)=>(typeof i=="function"&&i(),i=void 0,o=void 0,n(...l));return i=this.hook(t,o),i}removeHook(t,n){if(this._hooks[t]){const i=this._hooks[t].indexOf(n);i!==-1&&this._hooks[t].splice(i,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const i=this._hooks[t]||[];this._hooks[t]=void 0;for(const o of i)this.hook(t,o)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Io(t),i=Object.keys(n).map(o=>this.hook(o,n[o]));return()=>{for(const o of i.splice(0,i.length))o()}}removeHooks(t){const n=Io(t);for(const i in n)this.removeHook(i,n[i])}callHook(t,...n){return this.callHookWith(Ic,t,...n)}callHookParallel(t,...n){return this.callHookWith(jc,t,...n)}callHookWith(t,n,...i){const o=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&Ji(this._before,o);const l=t(this._hooks[n]||[],i);return l instanceof Promise?l.finally(()=>{this._after&&o&&Ji(this._after,o)}):(this._after&&o&&Ji(this._after,o),l)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}function Dc(){return new zc}const Uc=["script","style","noscript"],qc=["base","meta","link","style","script","noscript"],Wc=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function Kc(e,t){const{props:n,tag:i}=e;if(Wc.includes(i))return i;if(i==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const o=["id"];i==="meta"&&o.push("name","property","http-equiv");for(const l of o)if(typeof n[l]<"u"){const r=String(n[l]);return t&&!t(r)?!1:`${i}:${l}:${r}`}return!1}const Tn=(e,t)=>{const{tag:n,$el:i}=e;i&&(Object.entries(n.props).forEach(([o,l])=>{l=String(l);const r=`attr:${o}`;if(o==="class"){if(!l)return;for(const s of l.split(" ")){const a=`${r}:${s}`;t&&t(e,a,()=>i.classList.remove(s)),i.classList.contains(s)||i.classList.add(s)}return}t&&!o.startsWith("data-h-")&&t(e,r,()=>i.removeAttribute(o)),i.getAttribute(o)!==l&&i.setAttribute(o,l)}),Uc.includes(n.tag)&&i.innerHTML!==(n.children||"")&&(i.innerHTML=n.children||""))};function N0(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function Q9(e,t={}){var d,w;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const i=t.document||window.document,o=e._popSideEffectQueue();e.headEntries().map(u=>u._sde).forEach(u=>{Object.entries(u).forEach(([m,g])=>{o[m]=g})});const l=async u=>{const m=e.headEntries().find(v=>v._i===u._e),g={renderId:u._d||N0(JSON.stringify({...u,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:u,entry:m,staleSideEffects:o};return await e.hooks.callHook("dom:beforeRenderTag",g),g},r=[],s={body:[],head:[]},a=(u,m,g)=>{m=`${u.renderId}:${m}`,u.entry&&(u.entry._sde[m]=g),delete o[m]},c=u=>{e._elMap[u.renderId]=u.$el,r.push(u),a(u,"el",()=>{var m;(m=u.$el)==null||m.remove(),delete e._elMap[u.renderId]})};for(const u of await e.resolveTags()){const m=await l(u);if(!m.shouldRender)continue;const{tag:g}=m;if(g.tag==="title"){i.title=g.children||"",r.push(m);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){m.$el=i[g.tag==="htmlAttrs"?"documentElement":"body"],Tn(m,a),r.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&g._hash&&(m.$el=i.querySelector(`${(d=g.tagPosition)!=null&&d.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._hash}]`)),m.$el){m.tag._d&&Tn(m),c(m);continue}m.$el=i.createElement(g.tag),Tn(m),s[(w=g.tagPosition)!=null&&w.startsWith("body")?"body":"head"].push(m)}Object.entries(s).forEach(([u,m])=>{var v;if(!m.length)return;const g=(v=i==null?void 0:i[u])==null?void 0:v.children;if(g){for(const L of[...g].reverse()){const y=L.tagName.toLowerCase();if(!qc.includes(y))continue;const p=Kc({tag:y,props:L.getAttributeNames().reduce((h,C)=>({...h,[C]:L.getAttribute(C)}),{})}),f=m.findIndex(h=>h&&(h.tag._d===p||L.isEqualNode(h.$el)));if(f!==-1){const h=m[f];h.$el=L,Tn(h),c(h),delete m[f]}}m.forEach(L=>{if(L.$el){switch(L.tag.tagPosition){case"bodyClose":i.body.appendChild(L.$el);break;case"bodyOpen":i.body.insertBefore(L.$el,i.body.firstChild);break;case"head":default:i.head.appendChild(L.$el);break}c(L)}})}});for(const u of r)await e.hooks.callHook("dom:renderTag",u);Object.values(o).forEach(u=>u())}let zn=null;async function Gc(e,t={}){function n(){return zn=null,Q9(e,t)}const i=t.delayFn||(o=>setTimeout(o,10));return zn=zn||new Promise(o=>i(()=>o(n())))}const Yc={__proto__:null,debouncedRenderDOMHead:Gc,get domUpdatePromise(){return zn},hashCode:N0,renderDOMHead:Q9},Xc=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Jc=["tagPosition","tagPriority","tagDuplicateStrategy"];async function Qc(e,t){const n={tag:e,props:{}};return e==="title"||e==="titleTemplate"?(n.children=t instanceof Promise?await t:t,n):(n.props=await ed({...t}),["children","innerHtml","innerHTML"].forEach(i=>{typeof n.props[i]<"u"&&(n.children=n.props[i],typeof n.children=="object"&&(n.children=JSON.stringify(n.children)),delete n.props[i])}),Object.keys(n.props).filter(i=>Jc.includes(i)).forEach(i=>{n[i]=n.props[i],delete n.props[i]}),typeof n.props.class=="object"&&!Array.isArray(n.props.class)&&(n.props.class=Object.keys(n.props.class).filter(i=>n.props.class[i])),Array.isArray(n.props.class)&&(n.props.class=n.props.class.join(" ")),n.props.content&&Array.isArray(n.props.content)?n.props.content.map((i,o)=>{const l={...n,props:{...n.props}};return l.props.content=i,l.key=`${n.props.name||n.props.property}:${o}`,l}):n)}async function ed(e){for(const t of Object.keys(e))e[t]instanceof Promise&&(e[t]=await e[t]),String(e[t])==="true"?e[t]="":String(e[t])==="false"&&delete e[t];return e}const Bl=e=>{if(typeof e.tagPriority=="number")return e.tagPriority;switch(e.tagPriority){case"critical":return 2;case"high":return 9;case"low":return 12}switch(e.tag){case"base":return-1;case"title":return 1;case"meta":return e.props.charset?-2:e.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},td=(e,t)=>Bl(e)-Bl(t),nd=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function id(e,t){const{props:n,tag:i}=e;if(nd.includes(i))return i;if(i==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const o=["id"];i==="meta"&&o.push("name","property","http-equiv");for(const l of o)if(typeof n[l]<"u"){const r=String(n[l]);return t&&!t(r)?!1:`${i}:${l}:${r}`}return!1}const Tl=(e,t)=>e==null?t||null:typeof e=="function"?e(t):e.replace("%s",t??"");function od(e){let t=e.findIndex(i=>i.tag==="titleTemplate");const n=e.findIndex(i=>i.tag==="title");if(n!==-1&&t!==-1){const i=Tl(e[t].children,e[n].children);i!==null?e[n].children=i||e[n].children:delete e[n]}else if(t!==-1){const i=Tl(e[t].children);i!==null&&(e[t].children=i,e[t].tag="title",t=-1)}return t!==-1&&delete e[t],e.filter(Boolean)}const ld=e=>{e=e||{};const t=e.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:n}){t.forEach(o=>{n.props[o]&&(n.key=n.props[o],delete n.props[o])});const i=n.key?`${n.tag}:${n.key}`:id(n);i&&(n._d=i)},"tags:resolve":function(n){const i={};n.tags.forEach(o=>{let l=o._d||o._p;const r=i[l];if(r){let s=o==null?void 0:o.tagDuplicateStrategy;if(!s&&(o.tag==="htmlAttrs"||o.tag==="bodyAttrs")&&(s="merge"),s==="merge"){const c=r.props;["class","style"].forEach(d=>{o.props[d]&&c[d]&&(d==="style"&&!c[d].endsWith(";")&&(c[d]+=";"),o.props[d]=`${c[d]} ${o.props[d]}`)}),i[l].props={...c,...o.props};return}else o._e===r._e&&(l=o._d=`${l}:${o._p}`);const a=Object.keys(o.props).length;if((a===0||a===1&&typeof o.props["data-h-key"]<"u")&&!o.children){delete i[l];return}}i[l]=o}),n.tags=Object.values(i)}}}},rd=()=>({hooks:{"tags:resolve":e=>{const t=n=>{var i;return(i=e.tags.find(o=>o._d===n))==null?void 0:i._p};for(const n of e.tags){if(!n.tagPriority||typeof n.tagPriority=="number")continue;const i=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:o,offset:l}of i)if(n.tagPriority.startsWith(o)){const r=n.tagPriority.replace(o,""),s=t(r);typeof s<"u"&&(n._p=s+l)}}e.tags.sort((n,i)=>n._p-i._p).sort(td)}}}),sd=()=>({hooks:{"tags:resolve":e=>{e.tags=od(e.tags)}}}),ad=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),cd=typeof window<"u",dd=()=>({hooks:{"tag:normalise":e=>{var o,l;const{tag:t,entry:n}=e,i=typeof t.props._dynamic<"u";!e3.includes(t.tag)||!t.key||(t._hash=N0(JSON.stringify({tag:t.tag,key:t.key})),!(cd||(l=(o=n3())==null?void 0:o.resolvedOptions)!=null&&l.document)&&(n._m==="server"||i)&&(t.props[`data-h-${t._hash}`]=""))},"tags:resolve":e=>{e.tags=e.tags.map(t=>(delete t.props._dynamic,t))}}}),pd=e=>({hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Promise.resolve().then(function(){return Yc}).then(({debouncedRenderDOMHead:i})=>{i(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})})}}}),gd=()=>{const e=(t,n)=>{const i={},o={};Object.entries(n.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"?o[r]=s:i[r]=s});let l;return t==="dom"&&n.tag==="script"&&typeof i.src=="string"&&typeof o.onload<"u"&&(l=i.src,delete i.src),{props:i,eventHandlers:o,delayedSrc:l}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(n.props=e("ssr",n).props,n))},"dom:beforeRenderTag":function(t){const{props:n,eventHandlers:i,delayedSrc:o}=e("dom",t.tag);Object.keys(i).length&&(t.tag.props=n,t.tag._eventHandlers=i,t.tag._delayedSrc=o)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const i=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([o,l])=>{const r=`${t.tag._d||t.tag._p}:${o}`,s=o.slice(2).toLowerCase(),a=`data-h-${s}`;if(delete t.staleSideEffects[r],n.hasAttribute(a))return;const c=l;n.setAttribute(a,""),i.addEventListener(s,c),t.entry&&(t.entry._sde[r]=()=>{i.removeEventListener(s,c),n.removeAttribute(a)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}};function fd(e){return Array.isArray(e)?e:[e]}const e3=["base","meta","link","style","script","noscript"];let t3;const ud=e=>t3=e,n3=()=>t3,hd=10;async function vd(e){const t=[];return Object.entries(e.resolvedInput||e.input).filter(([n,i])=>typeof i<"u"&&Xc.includes(n)).forEach(([n,i])=>{const o=fd(i);t.push(...o.map(l=>Qc(n,l)).flat())}),(await Promise.all(t)).flat().map((n,i)=>(n._e=e._i,n._p=(e._i<<hd)+i,n))}const wd=()=>[ld(),rd(),sd(),dd(),gd(),ad()],Cd=(e={})=>[pd({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function md(e={}){const t=xd({...e,plugins:[...Cd(e),...(e==null?void 0:e.plugins)||[]]});return ud(t),t}function xd(e={}){let t=[],n={},i=0;const o=Dc();e!=null&&e.hooks&&o.addHooks(e.hooks),e.plugins=[...wd(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(s=>s.hooks&&o.addHooks(s.hooks));const l=()=>o.callHook("entries:updated",r),r={resolvedOptions:e,headEntries(){return t},get hooks(){return o},use(s){s.hooks&&o.addHooks(s.hooks)},push(s,a){const c={_i:i++,input:s,_sde:{}};return a!=null&&a.mode&&(c._m=a==null?void 0:a.mode),t.push(c),l(),{dispose(){t=t.filter(d=>d._i!==c._i?!0:(n={...n,...d._sde||{}},d._sde={},l(),!1))},patch(d){t=t.map(w=>(w._i===c._i&&(c.input=w.input=d,l()),w))}}},async resolveTags(){const s={tags:[],entries:[...t]};await o.callHook("entries:resolve",s);for(const a of s.entries)for(const c of await vd(a)){const d={tag:c,entry:a};await o.callHook("tag:normalise",d),s.tags.push(d.tag)}return await o.callHook("tags:resolve",s),s.tags},_elMap:{},_popSideEffectQueue(){const s={...n};return n={},s}};return r.hooks.callHook("init",r),r}function Ld(e){return typeof e=="function"?e():Se(e)}function oi(e,t=""){if(e instanceof Promise)return e;const n=Ld(e);if(!e||!n)return n;if(Array.isArray(n))return n.map(i=>oi(i,t));if(typeof n=="object"){let i=!1;const o=Object.fromEntries(Object.entries(n).map(([l,r])=>l==="titleTemplate"||l.startsWith("on")?[l,Se(r)]:((typeof r=="function"||V1(r))&&(i=!0),[l,oi(r,l)])));return i&&e3.includes(String(t))&&(o._dynamic=!0),o}return n}const yd=m0.startsWith("3"),bd=typeof window<"u",i3="usehead";function I0(){return wi()&&W1(i3)||n3()}function _d(e={}){const t=md({...e,domDelayFn:i=>setTimeout(()=>a0(()=>i()),10),plugins:[Hd(),...(e==null?void 0:e.plugins)||[]]}),n={install(i){yd&&(i.config.globalProperties.$unhead=t,i.provide(i3,t))}};return t.install=n.install,t}const Hd=()=>({hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=oi(t.input)}}});function Md(e,t={}){const n=I0(),i=Dt({});Lr(()=>{i.value=oi(e)});const o=n.push(i.value,t);return ct(i,r=>o.patch(r)),wi()&&ui(()=>{o.dispose()}),o}function kd(e,t={}){return I0().push(e,t)}function Vd(e,t={}){var i;const n=I0();if(n){const o=bd||!!((i=n.resolvedOptions)!=null&&i.document);return t.mode==="server"&&o||t.mode==="client"&&!o?void 0:o?Md(e,t):kd(e,t)}}const Zd=["script","style","noscript"],Ed=["base","meta","link","style","script","noscript"],Ad=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function Sd(e,t){const{props:n,tag:i}=e;if(Ad.includes(i))return i;if(i==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const o=["id"];i==="meta"&&o.push("name","property","http-equiv");for(const l of o)if(typeof n[l]<"u"){const r=String(n[l]);return t&&!t(r)?!1:`${i}:${l}:${r}`}return!1}const Fn=(e,t)=>{const{tag:n,$el:i}=e;i&&(Object.entries(n.props).forEach(([o,l])=>{l=String(l);const r=`attr:${o}`;if(o==="class"){if(!l)return;for(const s of l.split(" ")){const a=`${r}:${s}`;t&&t(e,a,()=>i.classList.remove(s)),i.classList.contains(s)||i.classList.add(s)}return}t&&!o.startsWith("data-h-")&&t(e,r,()=>i.removeAttribute(o)),i.getAttribute(o)!==l&&i.setAttribute(o,l)}),Zd.includes(n.tag)&&i.innerHTML!==(n.children||"")&&(i.innerHTML=n.children||""))};function $d(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function o3(e,t={}){var d,w;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const i=t.document||window.document,o=e._popSideEffectQueue();e.headEntries().map(u=>u._sde).forEach(u=>{Object.entries(u).forEach(([m,g])=>{o[m]=g})});const l=async u=>{const m=e.headEntries().find(v=>v._i===u._e),g={renderId:u._d||$d(JSON.stringify({...u,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:u,entry:m,staleSideEffects:o};return await e.hooks.callHook("dom:beforeRenderTag",g),g},r=[],s={body:[],head:[]},a=(u,m,g)=>{m=`${u.renderId}:${m}`,u.entry&&(u.entry._sde[m]=g),delete o[m]},c=u=>{e._elMap[u.renderId]=u.$el,r.push(u),a(u,"el",()=>{var m;(m=u.$el)==null||m.remove(),delete e._elMap[u.renderId]})};for(const u of await e.resolveTags()){const m=await l(u);if(!m.shouldRender)continue;const{tag:g}=m;if(g.tag==="title"){i.title=g.children||"",r.push(m);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){m.$el=i[g.tag==="htmlAttrs"?"documentElement":"body"],Fn(m,a),r.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&g._hash&&(m.$el=i.querySelector(`${(d=g.tagPosition)!=null&&d.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._hash}]`)),m.$el){m.tag._d&&Fn(m),c(m);continue}m.$el=i.createElement(g.tag),Fn(m),s[(w=g.tagPosition)!=null&&w.startsWith("body")?"body":"head"].push(m)}Object.entries(s).forEach(([u,m])=>{var v;if(!m.length)return;const g=(v=i==null?void 0:i[u])==null?void 0:v.children;if(g){for(const L of[...g].reverse()){const y=L.tagName.toLowerCase();if(!Ed.includes(y))continue;const p=Sd({tag:y,props:L.getAttributeNames().reduce((h,C)=>({...h,[C]:L.getAttribute(C)}),{})}),f=m.findIndex(h=>h&&(h.tag._d===p||L.isEqualNode(h.$el)));if(f!==-1){const h=m[f];h.$el=L,Fn(h),c(h),delete m[f]}}m.forEach(L=>{if(L.$el){switch(L.tag.tagPosition){case"bodyClose":i.body.appendChild(L.$el);break;case"bodyOpen":i.body.insertBefore(L.$el,i.body.firstChild);break;case"head":default:i.head.appendChild(L.$el);break}c(L)}})}});for(const u of r)await e.hooks.callHook("dom:renderTag",u);Object.values(o).forEach(u=>u())}let Qi=null;async function Bd(e,t={}){function n(){return Qi=null,o3(e,t)}const i=t.delayFn||(o=>setTimeout(o,10));return Qi=Qi||new Promise(o=>i(()=>o(n())))}function tg(e){const t=_d(),n={unhead:t,install(i){m0.startsWith("3")&&(i.config.globalProperties.$head=t,i.provide("usehead",t))},use(i){t.use(i)},resolveTags(){return t.resolveTags()},headEntries(){return t.headEntries()},headTags(){return t.resolveTags()},push(i,o){return t.push(i,o)},addEntry(i,o){return t.push(i,o)},addHeadObjs(i,o){return t.push(i,o)},addReactiveEntry(i,o){const l=Vd(i,o);return typeof l<"u"?l.dispose:()=>{}},removeHeadObjs(){},updateDOM(i,o){o?o3(t,{document:i}):Bd(t,{delayFn:l=>setTimeout(()=>l(),50),document:i})},internalHooks:t.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return t.addHeadObjs=n.addHeadObjs,t.updateDOM=n.updateDOM,t.hooks.hook("dom:beforeRender",i=>{for(const o of n.hooks["before:dom"])o()===!1&&(i.shouldRender=!1)}),e&&n.addHeadObjs(e),n}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ot=typeof window<"u";function Td(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const v1=Object.assign;function eo(e,t){const n={};for(const i in t){const o=t[i];n[i]=oe(o)?o.map(e):e(o)}return n}const Qt=()=>{},oe=Array.isArray,Fd=/\/$/,Od=e=>e.replace(Fd,"");function to(e,t,n="/"){let i,o={},l="",r="";const s=t.indexOf("#");let a=t.indexOf("?");return s<a&&s>=0&&(a=-1),a>-1&&(i=t.slice(0,a),l=t.slice(a+1,s>-1?s:t.length),o=e(l)),s>-1&&(i=i||t.slice(0,s),r=t.slice(s,t.length)),i=Id(i??t,n),{fullPath:i+(l&&"?")+l+r,path:i,query:o,hash:r}}function Rd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Fl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Pd(e,t,n){const i=t.matched.length-1,o=n.matched.length-1;return i>-1&&i===o&&bt(t.matched[i],n.matched[o])&&l3(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function bt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function l3(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Nd(e[n],t[n]))return!1;return!0}function Nd(e,t){return oe(e)?Ol(e,t):oe(t)?Ol(t,e):e===t}function Ol(e,t){return oe(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Id(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let o=n.length-1,l,r;for(l=0;l<i.length;l++)if(r=i[l],r!==".")if(r==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+i.slice(l-(l===i.length?1:0)).join("/")}var fn;(function(e){e.pop="pop",e.push="push"})(fn||(fn={}));var en;(function(e){e.back="back",e.forward="forward",e.unknown=""})(en||(en={}));function jd(e){if(!e)if(ot){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Od(e)}const zd=/^[^#]+#/;function Dd(e,t){return e.replace(zd,"#")+t}function Ud(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Vi=()=>({left:window.pageXOffset,top:window.pageYOffset});function qd(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Ud(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Rl(e,t){return(history.state?history.state.position-t:-1)+e}const jo=new Map;function Wd(e,t){jo.set(e,t)}function Kd(e){const t=jo.get(e);return jo.delete(e),t}let Gd=()=>location.protocol+"//"+location.host;function r3(e,t){const{pathname:n,search:i,hash:o}=t,l=e.indexOf("#");if(l>-1){let s=o.includes(e.slice(l))?e.slice(l).length:1,a=o.slice(s);return a[0]!=="/"&&(a="/"+a),Fl(a,"")}return Fl(n,e)+i+o}function Yd(e,t,n,i){let o=[],l=[],r=null;const s=({state:u})=>{const m=r3(e,location),g=n.value,v=t.value;let L=0;if(u){if(n.value=m,t.value=u,r&&r===g){r=null;return}L=v?u.position-v.position:0}else i(m);o.forEach(y=>{y(n.value,g,{delta:L,type:fn.pop,direction:L?L>0?en.forward:en.back:en.unknown})})};function a(){r=n.value}function c(u){o.push(u);const m=()=>{const g=o.indexOf(u);g>-1&&o.splice(g,1)};return l.push(m),m}function d(){const{history:u}=window;u.state&&u.replaceState(v1({},u.state,{scroll:Vi()}),"")}function w(){for(const u of l)u();l=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",d),{pauseListeners:a,listen:c,destroy:w}}function Pl(e,t,n,i=!1,o=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:o?Vi():null}}function Xd(e){const{history:t,location:n}=window,i={value:r3(e,n)},o={value:t.state};o.value||l(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(a,c,d){const w=e.indexOf("#"),u=w>-1?(n.host&&document.querySelector("base")?e:e.slice(w))+a:Gd()+e+a;try{t[d?"replaceState":"pushState"](c,"",u),o.value=c}catch(m){console.error(m),n[d?"replace":"assign"](u)}}function r(a,c){const d=v1({},t.state,Pl(o.value.back,a,o.value.forward,!0),c,{position:o.value.position});l(a,d,!0),i.value=a}function s(a,c){const d=v1({},o.value,t.state,{forward:a,scroll:Vi()});l(d.current,d,!0);const w=v1({},Pl(i.value,a,null),{position:d.position+1},c);l(a,w,!1),i.value=a}return{location:i,state:o,push:s,replace:r}}function Jd(e){e=jd(e);const t=Xd(e),n=Yd(e,t.state,t.location,t.replace);function i(l,r=!0){r||n.pauseListeners(),history.go(l)}const o=v1({location:"",base:e,go:i,createHref:Dd.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function ng(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Jd(e)}function Qd(e){return typeof e=="string"||e&&typeof e=="object"}function s3(e){return typeof e=="string"||typeof e=="symbol"}const Me={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},a3=Symbol("");var Nl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Nl||(Nl={}));function _t(e,t){return v1(new Error,{type:e,[a3]:!0},t)}function he(e,t){return e instanceof Error&&a3 in e&&(t==null||!!(e.type&t))}const Il="[^/]+?",ep={sensitive:!1,strict:!1,start:!0,end:!0},tp=/[.+*?^${}()[\]/\\]/g;function np(e,t){const n=v1({},ep,t),i=[];let o=n.start?"^":"";const l=[];for(const c of e){const d=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let w=0;w<c.length;w++){const u=c[w];let m=40+(n.sensitive?.25:0);if(u.type===0)w||(o+="/"),o+=u.value.replace(tp,"\\$&"),m+=40;else if(u.type===1){const{value:g,repeatable:v,optional:L,regexp:y}=u;l.push({name:g,repeatable:v,optional:L});const p=y||Il;if(p!==Il){m+=10;try{new RegExp(`(${p})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${g}" (${p}): `+h.message)}}let f=v?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;w||(f=L&&c.length<2?`(?:/${f})`:"/"+f),L&&(f+="?"),o+=f,m+=20,L&&(m+=-8),v&&(m+=-20),p===".*"&&(m+=-50)}d.push(m)}i.push(d)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const r=new RegExp(o,n.sensitive?"":"i");function s(c){const d=c.match(r),w={};if(!d)return null;for(let u=1;u<d.length;u++){const m=d[u]||"",g=l[u-1];w[g.name]=m&&g.repeatable?m.split("/"):m}return w}function a(c){let d="",w=!1;for(const u of e){(!w||!d.endsWith("/"))&&(d+="/"),w=!1;for(const m of u)if(m.type===0)d+=m.value;else if(m.type===1){const{value:g,repeatable:v,optional:L}=m,y=g in c?c[g]:"";if(oe(y)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const p=oe(y)?y.join("/"):y;if(!p)if(L)u.length<2&&(d.endsWith("/")?d=d.slice(0,-1):w=!0);else throw new Error(`Missing required param "${g}"`);d+=p}}return d||"/"}return{re:r,score:i,keys:l,parse:s,stringify:a}}function ip(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function op(e,t){let n=0;const i=e.score,o=t.score;for(;n<i.length&&n<o.length;){const l=ip(i[n],o[n]);if(l)return l;n++}if(Math.abs(o.length-i.length)===1){if(jl(i))return 1;if(jl(o))return-1}return o.length-i.length}function jl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const lp={type:0,value:""},rp=/[a-zA-Z0-9_]/;function sp(e){if(!e)return[[]];if(e==="/")return[[lp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,i=n;const o=[];let l;function r(){l&&o.push(l),l=[]}let s=0,a,c="",d="";function w(){c&&(n===0?l.push({type:0,value:c}):n===1||n===2||n===3?(l.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:c,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),c="")}function u(){c+=a}for(;s<e.length;){if(a=e[s++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(c&&w(),r()):a===":"?(w(),n=1):u();break;case 4:u(),n=i;break;case 1:a==="("?n=2:rp.test(a)?u():(w(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&s--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:w(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&s--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),w(),r(),o}function ap(e,t,n){const i=np(sp(e.path),n),o=v1(i,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function cp(e,t){const n=[],i=new Map;t=Ul({strict:!1,end:!0,sensitive:!1},t);function o(d){return i.get(d)}function l(d,w,u){const m=!u,g=dp(d);g.aliasOf=u&&u.record;const v=Ul(t,d),L=[g];if("alias"in d){const f=typeof d.alias=="string"?[d.alias]:d.alias;for(const h of f)L.push(v1({},g,{components:u?u.record.components:g.components,path:h,aliasOf:u?u.record:g}))}let y,p;for(const f of L){const{path:h}=f;if(w&&h[0]!=="/"){const C=w.record.path,x=C[C.length-1]==="/"?"":"/";f.path=w.record.path+(h&&x+h)}if(y=ap(f,w,v),u?u.alias.push(y):(p=p||y,p!==y&&p.alias.push(y),m&&d.name&&!Dl(y)&&r(d.name)),g.children){const C=g.children;for(let x=0;x<C.length;x++)l(C[x],y,u&&u.children[x])}u=u||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&a(y)}return p?()=>{r(p)}:Qt}function r(d){if(s3(d)){const w=i.get(d);w&&(i.delete(d),n.splice(n.indexOf(w),1),w.children.forEach(r),w.alias.forEach(r))}else{const w=n.indexOf(d);w>-1&&(n.splice(w,1),d.record.name&&i.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function s(){return n}function a(d){let w=0;for(;w<n.length&&op(d,n[w])>=0&&(d.record.path!==n[w].record.path||!c3(d,n[w]));)w++;n.splice(w,0,d),d.record.name&&!Dl(d)&&i.set(d.record.name,d)}function c(d,w){let u,m={},g,v;if("name"in d&&d.name){if(u=i.get(d.name),!u)throw _t(1,{location:d});v=u.record.name,m=v1(zl(w.params,u.keys.filter(p=>!p.optional).map(p=>p.name)),d.params&&zl(d.params,u.keys.map(p=>p.name))),g=u.stringify(m)}else if("path"in d)g=d.path,u=n.find(p=>p.re.test(g)),u&&(m=u.parse(g),v=u.record.name);else{if(u=w.name?i.get(w.name):n.find(p=>p.re.test(w.path)),!u)throw _t(1,{location:d,currentLocation:w});v=u.record.name,m=v1({},w.params,d.params),g=u.stringify(m)}const L=[];let y=u;for(;y;)L.unshift(y.record),y=y.parent;return{name:v,path:g,params:m,matched:L,meta:gp(L)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:c,removeRoute:r,getRoutes:s,getRecordMatcher:o}}function zl(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function dp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:pp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function pp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function Dl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function gp(e){return e.reduce((t,n)=>v1(t,n.meta),{})}function Ul(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function c3(e,t){return t.children.some(n=>n===e||c3(e,n))}const d3=/#/g,fp=/&/g,up=/\//g,hp=/=/g,vp=/\?/g,p3=/\+/g,wp=/%5B/g,Cp=/%5D/g,g3=/%5E/g,mp=/%60/g,f3=/%7B/g,xp=/%7C/g,u3=/%7D/g,Lp=/%20/g;function j0(e){return encodeURI(""+e).replace(xp,"|").replace(wp,"[").replace(Cp,"]")}function yp(e){return j0(e).replace(f3,"{").replace(u3,"}").replace(g3,"^")}function zo(e){return j0(e).replace(p3,"%2B").replace(Lp,"+").replace(d3,"%23").replace(fp,"%26").replace(mp,"`").replace(f3,"{").replace(u3,"}").replace(g3,"^")}function bp(e){return zo(e).replace(hp,"%3D")}function _p(e){return j0(e).replace(d3,"%23").replace(vp,"%3F")}function Hp(e){return e==null?"":_p(e).replace(up,"%2F")}function li(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Mp(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<i.length;++o){const l=i[o].replace(p3," "),r=l.indexOf("="),s=li(r<0?l:l.slice(0,r)),a=r<0?null:li(l.slice(r+1));if(s in t){let c=t[s];oe(c)||(c=t[s]=[c]),c.push(a)}else t[s]=a}return t}function ql(e){let t="";for(let n in e){const i=e[n];if(n=bp(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(oe(i)?i.map(l=>l&&zo(l)):[i&&zo(i)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function kp(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=oe(i)?i.map(o=>o==null?null:""+o):i==null?i:""+i)}return t}const Vp=Symbol(""),Wl=Symbol(""),Zi=Symbol(""),z0=Symbol(""),Do=Symbol("");function Tt(){let e=[];function t(i){return e.push(i),()=>{const o=e.indexOf(i);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ve(e,t,n,i,o){const l=i&&(i.enterCallbacks[o]=i.enterCallbacks[o]||[]);return()=>new Promise((r,s)=>{const a=w=>{w===!1?s(_t(4,{from:n,to:t})):w instanceof Error?s(w):Qd(w)?s(_t(2,{from:t,to:w})):(l&&i.enterCallbacks[o]===l&&typeof w=="function"&&l.push(w),r())},c=e.call(i&&i.instances[o],t,n,a);let d=Promise.resolve(c);e.length<3&&(d=d.then(a)),d.catch(w=>s(w))})}function no(e,t,n,i){const o=[];for(const l of e)for(const r in l.components){let s=l.components[r];if(!(t!=="beforeRouteEnter"&&!l.instances[r]))if(Zp(s)){const c=(s.__vccOpts||s)[t];c&&o.push(Ve(c,n,i,l,r))}else{let a=s();o.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=Td(c)?c.default:c;l.components[r]=d;const u=(d.__vccOpts||d)[t];return u&&Ve(u,n,i,l,r)()}))}}return o}function Zp(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Kl(e){const t=W1(Zi),n=W1(z0),i=U1(()=>t.resolve(Se(e.to))),o=U1(()=>{const{matched:a}=i.value,{length:c}=a,d=a[c-1],w=n.matched;if(!d||!w.length)return-1;const u=w.findIndex(bt.bind(null,d));if(u>-1)return u;const m=Gl(a[c-2]);return c>1&&Gl(d)===m&&w[w.length-1].path!==m?w.findIndex(bt.bind(null,a[c-2])):u}),l=U1(()=>o.value>-1&&$p(n.params,i.value.params)),r=U1(()=>o.value>-1&&o.value===n.matched.length-1&&l3(n.params,i.value.params));function s(a={}){return Sp(a)?t[Se(e.replace)?"replace":"push"](Se(e.to)).catch(Qt):Promise.resolve()}return{route:i,href:U1(()=>i.value.href),isActive:l,isExactActive:r,navigate:s}}const Ep=d0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kl,setup(e,{slots:t}){const n=un(Kl(e)),{options:i}=W1(Zi),o=U1(()=>({[Yl(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Yl(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:C0("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},l)}}}),Ap=Ep;function Sp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $p(e,t){for(const n in t){const i=t[n],o=e[n];if(typeof i=="string"){if(i!==o)return!1}else if(!oe(o)||o.length!==i.length||i.some((l,r)=>l!==o[r]))return!1}return!0}function Gl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Yl=(e,t,n)=>e??t??n,Bp=d0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=W1(Do),o=U1(()=>e.route||i.value),l=W1(Wl,0),r=U1(()=>{let c=Se(l);const{matched:d}=o.value;let w;for(;(w=d[c])&&!w.components;)c++;return c}),s=U1(()=>o.value.matched[r.value]);Rn(Wl,U1(()=>r.value+1)),Rn(Vp,s),Rn(Do,o);const a=Dt();return ct(()=>[a.value,s.value,e.name],([c,d,w],[u,m,g])=>{d&&(d.instances[w]=c,m&&m!==d&&c&&c===u&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),c&&d&&(!m||!bt(d,m)||!u)&&(d.enterCallbacks[w]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=o.value,d=e.name,w=s.value,u=w&&w.components[d];if(!u)return Xl(n.default,{Component:u,route:c});const m=w.props[d],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,L=C0(u,v1({},g,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(w.instances[d]=null)},ref:a}));return Xl(n.default,{Component:L,route:c})||L}}});function Xl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Tp=Bp;function ig(e){const t=cp(e.routes,e),n=e.parseQuery||Mp,i=e.stringifyQuery||ql,o=e.history,l=Tt(),r=Tt(),s=Tt(),a=nr(Me);let c=Me;ot&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=eo.bind(null,A=>""+A),w=eo.bind(null,Hp),u=eo.bind(null,li);function m(A,z){let P,U;return s3(A)?(P=t.getRecordMatcher(A),U=z):U=A,t.addRoute(U,P)}function g(A){const z=t.getRecordMatcher(A);z&&t.removeRoute(z)}function v(){return t.getRoutes().map(A=>A.record)}function L(A){return!!t.getRecordMatcher(A)}function y(A,z){if(z=v1({},z||a.value),typeof A=="string"){const b=to(n,A,z.path),M=t.resolve({path:b.path},z),E=o.createHref(b.fullPath);return v1(b,M,{params:u(M.params),hash:li(b.hash),redirectedFrom:void 0,href:E})}let P;if("path"in A)P=v1({},A,{path:to(n,A.path,z.path).path});else{const b=v1({},A.params);for(const M in b)b[M]==null&&delete b[M];P=v1({},A,{params:w(A.params)}),z.params=w(z.params)}const U=t.resolve(P,z),l1=A.hash||"";U.params=d(u(U.params));const c1=Rd(i,v1({},A,{hash:yp(l1),path:U.path})),X=o.createHref(c1);return v1({fullPath:c1,hash:l1,query:i===ql?kp(A.query):A.query||{}},U,{redirectedFrom:void 0,href:X})}function p(A){return typeof A=="string"?to(n,A,a.value.path):v1({},A)}function f(A,z){if(c!==A)return _t(8,{from:z,to:A})}function h(A){return k(A)}function C(A){return h(v1(p(A),{replace:!0}))}function x(A){const z=A.matched[A.matched.length-1];if(z&&z.redirect){const{redirect:P}=z;let U=typeof P=="function"?P(A):P;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=p(U):{path:U},U.params={}),v1({query:A.query,hash:A.hash,params:"path"in U?{}:A.params},U)}}function k(A,z){const P=c=y(A),U=a.value,l1=A.state,c1=A.force,X=A.replace===!0,b=x(P);if(b)return k(v1(p(b),{state:typeof b=="object"?v1({},l1,b.state):l1,force:c1,replace:X}),z||P);const M=P;M.redirectedFrom=z;let E;return!c1&&Pd(i,U,P)&&(E=_t(16,{to:M,from:U}),m1(U,U,!0,!1)),(E?Promise.resolve(E):Z(M,U)).catch($=>he($)?he($,2)?$:o1($):e1($,M,U)).then($=>{if($){if(he($,2))return k(v1({replace:X},p($.to),{state:typeof $.to=="object"?v1({},l1,$.to.state):l1,force:c1}),z||M)}else $=R(M,U,!0,X,l1);return S(M,U,$),$})}function V(A,z){const P=f(A,z);return P?Promise.reject(P):Promise.resolve()}function Z(A,z){let P;const[U,l1,c1]=Fp(A,z);P=no(U.reverse(),"beforeRouteLeave",A,z);for(const b of U)b.leaveGuards.forEach(M=>{P.push(Ve(M,A,z))});const X=V.bind(null,A,z);return P.push(X),nt(P).then(()=>{P=[];for(const b of l.list())P.push(Ve(b,A,z));return P.push(X),nt(P)}).then(()=>{P=no(l1,"beforeRouteUpdate",A,z);for(const b of l1)b.updateGuards.forEach(M=>{P.push(Ve(M,A,z))});return P.push(X),nt(P)}).then(()=>{P=[];for(const b of A.matched)if(b.beforeEnter&&!z.matched.includes(b))if(oe(b.beforeEnter))for(const M of b.beforeEnter)P.push(Ve(M,A,z));else P.push(Ve(b.beforeEnter,A,z));return P.push(X),nt(P)}).then(()=>(A.matched.forEach(b=>b.enterCallbacks={}),P=no(c1,"beforeRouteEnter",A,z),P.push(X),nt(P))).then(()=>{P=[];for(const b of r.list())P.push(Ve(b,A,z));return P.push(X),nt(P)}).catch(b=>he(b,8)?b:Promise.reject(b))}function S(A,z,P){for(const U of s.list())U(A,z,P)}function R(A,z,P,U,l1){const c1=f(A,z);if(c1)return c1;const X=z===Me,b=ot?history.state:{};P&&(U||X?o.replace(A.fullPath,v1({scroll:X&&b&&b.scroll},l1)):o.push(A.fullPath,l1)),a.value=A,m1(A,z,P,X),o1()}let T;function K(){T||(T=o.listen((A,z,P)=>{if(!u1.listening)return;const U=y(A),l1=x(U);if(l1){k(v1(l1,{replace:!0}),U).catch(Qt);return}c=U;const c1=a.value;ot&&Wd(Rl(c1.fullPath,P.delta),Vi()),Z(U,c1).catch(X=>he(X,12)?X:he(X,2)?(k(X.to,U).then(b=>{he(b,20)&&!P.delta&&P.type===fn.pop&&o.go(-1,!1)}).catch(Qt),Promise.reject()):(P.delta&&o.go(-P.delta,!1),e1(X,U,c1))).then(X=>{X=X||R(U,c1,!1),X&&(P.delta&&!he(X,8)?o.go(-P.delta,!1):P.type===fn.pop&&he(X,20)&&o.go(-1,!1)),S(U,c1,X)}).catch(Qt)}))}let p1=Tt(),H1=Tt(),i1;function e1(A,z,P){o1(A);const U=H1.list();return U.length?U.forEach(l1=>l1(A,z,P)):console.error(A),Promise.reject(A)}function q(){return i1&&a.value!==Me?Promise.resolve():new Promise((A,z)=>{p1.add([A,z])})}function o1(A){return i1||(i1=!A,K(),p1.list().forEach(([z,P])=>A?P(A):z()),p1.reset()),A}function m1(A,z,P,U){const{scrollBehavior:l1}=e;if(!ot||!l1)return Promise.resolve();const c1=!P&&Kd(Rl(A.fullPath,0))||(U||!P)&&history.state&&history.state.scroll||null;return a0().then(()=>l1(A,z,c1)).then(X=>X&&qd(X)).catch(X=>e1(X,A,z))}const x1=A=>o.go(A);let t1;const $1=new Set,u1={currentRoute:a,listening:!0,addRoute:m,removeRoute:g,hasRoute:L,getRoutes:v,resolve:y,options:e,push:h,replace:C,go:x1,back:()=>x1(-1),forward:()=>x1(1),beforeEach:l.add,beforeResolve:r.add,afterEach:s.add,onError:H1.add,isReady:q,install(A){const z=this;A.component("RouterLink",Ap),A.component("RouterView",Tp),A.config.globalProperties.$router=z,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>Se(a)}),ot&&!t1&&a.value===Me&&(t1=!0,h(o.location).catch(l1=>{}));const P={};for(const l1 in Me)P[l1]=U1(()=>a.value[l1]);A.provide(Zi,z),A.provide(z0,un(P)),A.provide(Do,a);const U=A.unmount;$1.add(A),A.unmount=function(){$1.delete(A),$1.size<1&&(c=Me,T&&T(),T=null,a.value=Me,t1=!1,i1=!1),U()}}};return u1}function nt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Fp(e,t){const n=[],i=[],o=[],l=Math.max(t.matched.length,e.matched.length);for(let r=0;r<l;r++){const s=t.matched[r];s&&(e.matched.find(c=>bt(c,s))?i.push(s):n.push(s));const a=e.matched[r];a&&(t.matched.find(c=>bt(c,a))||o.push(a))}return[n,i,o]}function og(){return W1(Zi)}function lg(){return W1(z0)}var Uo={},Op={get exports(){return Uo},set exports(e){Uo=e}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,i){e.exports=i()})(io,function(){var n={};n.version="0.2.0";var i=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(g){var v,L;for(v in g)L=g[v],L!==void 0&&g.hasOwnProperty(v)&&(i[v]=L);return this},n.status=null,n.set=function(g){var v=n.isStarted();g=o(g,i.minimum,1),n.status=g===1?null:g;var L=n.render(!v),y=L.querySelector(i.barSelector),p=i.speed,f=i.easing;return L.offsetWidth,s(function(h){i.positionUsing===""&&(i.positionUsing=n.getPositioningCSS()),a(y,r(g,p,f)),g===1?(a(L,{transition:"none",opacity:1}),L.offsetWidth,setTimeout(function(){a(L,{transition:"all "+p+"ms linear",opacity:0}),setTimeout(function(){n.remove(),h()},p)},p)):setTimeout(h,p)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var g=function(){setTimeout(function(){n.status&&(n.trickle(),g())},i.trickleSpeed)};return i.trickle&&g(),this},n.done=function(g){return!g&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(g){var v=n.status;return v?(typeof g!="number"&&(g=(1-v)*o(Math.random()*v,.1,.95)),v=o(v+g,0,.994),n.set(v)):n.start()},n.trickle=function(){return n.inc(Math.random()*i.trickleRate)},function(){var g=0,v=0;n.promise=function(L){return!L||L.state()==="resolved"?this:(v===0&&n.start(),g++,v++,L.always(function(){v--,v===0?(g=0,n.done()):n.set((g-v)/g)}),this)}}(),n.render=function(g){if(n.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var v=document.createElement("div");v.id="nprogress",v.innerHTML=i.template;var L=v.querySelector(i.barSelector),y=g?"-100":l(n.status||0),p=document.querySelector(i.parent),f;return a(L,{transition:"all 0 linear",transform:"translate3d("+y+"%,0,0)"}),i.showSpinner||(f=v.querySelector(i.spinnerSelector),f&&m(f)),p!=document.body&&d(p,"nprogress-custom-parent"),p.appendChild(v),v},n.remove=function(){w(document.documentElement,"nprogress-busy"),w(document.querySelector(i.parent),"nprogress-custom-parent");var g=document.getElementById("nprogress");g&&m(g)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var g=document.body.style,v="WebkitTransform"in g?"Webkit":"MozTransform"in g?"Moz":"msTransform"in g?"ms":"OTransform"in g?"O":"";return v+"Perspective"in g?"translate3d":v+"Transform"in g?"translate":"margin"};function o(g,v,L){return g<v?v:g>L?L:g}function l(g){return(-1+g)*100}function r(g,v,L){var y;return i.positionUsing==="translate3d"?y={transform:"translate3d("+l(g)+"%,0,0)"}:i.positionUsing==="translate"?y={transform:"translate("+l(g)+"%,0)"}:y={"margin-left":l(g)+"%"},y.transition="all "+v+"ms "+L,y}var s=function(){var g=[];function v(){var L=g.shift();L&&L(v)}return function(L){g.push(L),g.length==1&&v()}}(),a=function(){var g=["Webkit","O","Moz","ms"],v={};function L(h){return h.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(C,x){return x.toUpperCase()})}function y(h){var C=document.body.style;if(h in C)return h;for(var x=g.length,k=h.charAt(0).toUpperCase()+h.slice(1),V;x--;)if(V=g[x]+k,V in C)return V;return h}function p(h){return h=L(h),v[h]||(v[h]=y(h))}function f(h,C,x){C=p(C),h.style[C]=x}return function(h,C){var x=arguments,k,V;if(x.length==2)for(k in C)V=C[k],V!==void 0&&C.hasOwnProperty(k)&&f(h,k,V);else f(h,x[1],x[2])}}();function c(g,v){var L=typeof g=="string"?g:u(g);return L.indexOf(" "+v+" ")>=0}function d(g,v){var L=u(g),y=L+v;c(L,v)||(g.className=y.substring(1))}function w(g,v){var L=u(g),y;c(g,v)&&(y=L.replace(" "+v+" "," "),g.className=y.substring(1,y.length-1))}function u(g){return(" "+(g.className||"")+" ").replace(/\s+/gi," ")}function m(g){g&&g.parentNode&&g.parentNode.removeChild(g)}return n})})(Op);const rg=Uo;export{ct as A,zp as B,qp as C,un as D,T5 as E,ne as F,se as G,Zr as H,s4 as I,a0 as J,jp as K,hi as L,Kp as M,rg as N,Rn as O,Jp as P,B5 as Q,ui as R,lg as S,Y5 as T,og as U,Pp as V,Wp as W,Xp as X,Ko as Y,Ip as a,Up as b,i4 as c,d0 as d,ig as e,ng as f,Dp as g,tg as h,Qp as i,Gp as j,W5 as k,Z1 as l,Yp as m,r4 as n,t4 as o,wi as p,W1 as q,Dt as r,nr as s,U1 as t,Vd as u,C0 as v,hr as w,Gn as x,p0 as y,Np as z};
