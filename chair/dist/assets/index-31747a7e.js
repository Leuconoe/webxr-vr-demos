(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="181",Mp=0,Dh=1,bp=2,Uc=1,Sp=2,ci=3,Rn=0,tn=1,Ot=2,pi=0,Ns=1,Ih=2,Nh=3,Uh=4,Tp=5,Zi=100,Ep=101,wp=102,Ap=103,Rp=104,Cp=200,Pp=201,Lp=202,Dp=203,xl=204,gl=205,Ip=206,Np=207,Up=208,Fp=209,Op=210,Bp=211,zp=212,kp=213,Vp=214,_l=0,vl=1,yl=2,ks=3,Ml=4,bl=5,Sl=6,Tl=7,Fc=0,Hp=1,Gp=2,Li=0,Wp=1,Xp=2,qp=3,Tf=4,Yp=5,Kp=6,jp=7,Fh="attached",Jp="detached",Ef=300,Vs=301,Hs=302,El=303,wl=304,ro=306,Gs=1e3,Sn=1001,Wa=1002,Jt=1003,wf=1004,yr=1005,Ct=1006,Na=1007,Xn=1008,Jn=1009,Af=1010,Rf=1011,Ir=1012,Oc=1013,as=1014,en=1015,qn=1016,Bc=1017,zc=1018,Nr=1020,Cf=35902,Pf=35899,Lf=1021,Df=1022,Tn=1023,Ur=1026,Fr=1027,kc=1028,Vc=1029,Hc=1030,Gc=1031,Wc=1033,Ua=33776,Fa=33777,Oa=33778,Ba=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Ll=36196,Dl=37492,Il=37496,Nl=37808,Ul=37809,Fl=37810,Ol=37811,Bl=37812,zl=37813,kl=37814,Vl=37815,Hl=37816,Gl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,Kl=36492,jl=36494,Jl=36495,Zl=36283,$l=36284,Ql=36285,ec=36286,Or=2300,Br=2301,_o=2302,Oh=2400,Bh=2401,zh=2402,Zp=2500,$p=0,If=1,tc=2,Qp=3200,em=3201,Xc=0,tm=1,wi="",It="srgb",Wt="srgb-linear",Xa="linear",ht="srgb",ps=7680,kh=519,nm=512,im=513,sm=514,Nf=515,rm=516,am=517,om=518,lm=519,nc=35044,Vh="300 es",Yn=2e3,qa=2001;function Uf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function zr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cm(){const r=zr("canvas");return r.style.display="block",r}const Hh={};function Ya(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ce(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Je(...r){const e="THREE."+r.shift();console.error(e,...r)}function kr(...r){const e=r.join(" ");e in Hh||(Hh[e]=!0,Ce(...r))}function hm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const Er=Math.PI/180,Ws=180/Math.PI;function An(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Ke(r,e,t){return Math.max(e,Math.min(t,r))}function qc(r,e){return(r%e+e)%e}function um(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function fm(r,e,t){return r!==e?(t-r)/(e-r):0}function wr(r,e,t){return(1-t)*r+t*e}function dm(r,e,t,n){return wr(r,e,1-Math.exp(-t*n))}function pm(r,e=1){return e-Math.abs(qc(r,e*2)-e)}function mm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function xm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _m(r,e){return r+Math.random()*(e-r)}function vm(r){return r*(.5-Math.random())}function ym(r){r!==void 0&&(Gh=r);let e=Gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mm(r){return r*Er}function bm(r){return r*Ws}function Sm(r){return(r&r-1)===0&&r!==0}function Tm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Em(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wm(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*x,l*d,o*c);break;case"YXY":r.set(l*d,o*h,l*x,o*c);break;case"ZYZ":r.set(l*x,l*d,o*h,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Am={DEG2RAD:Er,RAD2DEG:Ws,generateUUID:An,clamp:Ke,euclideanModulo:qc,mapLinear:um,inverseLerp:fm,lerp:wr,damp:dm,pingpong:pm,smoothstep:mm,smootherstep:xm,randInt:gm,randFloat:_m,randFloatSpread:vm,seededRandom:ym,degToRad:Mm,radToDeg:bm,isPowerOfTwo:Sm,ceilPowerOfTwo:Tm,floorPowerOfTwo:Em,setQuaternionFromProperEuler:wm,normalize:at,denormalize:Nn};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],x=s[a+2],g=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=g;return}if(u!==g||l!==f||c!==d||h!==x){let m=l*f+c*d+h*x+u*g;m<0&&(f=-f,d=-d,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),_=Math.sin(b);p=Math.sin(p*b)/_,o=Math.sin(o*b)/_,l=l*p+f*o,c=c*p+d*o,h=h*p+x*o,u=u*p+g*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+x*o,u=u*p+g*o;const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],x=s[a+3];return e[t]=o*x+h*u+l*d-c*f,e[t+1]=l*x+h*f+c*u-o*d,e[t+2]=c*x+h*d+o*f-l*u,e[t+3]=h*x-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),x=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new N,Wh=new $n;class qe{constructor(e,t,n,i,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],g=i[0],m=i[3],p=i[6],b=i[1],_=i[4],y=i[7],E=i[2],T=i[5],A=i[8];return s[0]=a*g+o*b+l*E,s[3]=a*m+o*_+l*T,s[6]=a*p+o*y+l*A,s[1]=c*g+h*b+u*E,s[4]=c*m+h*_+u*T,s[7]=c*p+h*y+u*A,s[2]=f*g+d*b+x*E,s[5]=f*m+d*_+x*T,s[8]=f*p+d*y+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,x=t*u+n*f+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yo.makeScale(e,t)),this}rotate(e){return this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new qe,Xh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rm(){const r={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wi?Xa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Wt]:{primaries:e,whitePoint:n,transfer:Xa,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),r}const nt=Rm();function mi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ms;class Cm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=zr("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pm=0;class Yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Mo(i[a].image)):s.push(Mo(i[a]))}else s=Mo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Mo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Cm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Lm=0;const bo=new N;class Ut extends ir{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Sn,i=Sn,s=Ct,a=Xn,o=Tn,l=Jn,c=Ut.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=An(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bo).x}get height(){return this.source.getSize(bo).y}get depth(){return this.source.getSize(bo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Ef;Ut.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(d+1)/2,E=(p+1)/2,T=(h+f)/4,A=(u+g)/4,R=(x+m)/4;return _>y&&_>E?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=A/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=R/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=A/s,i=R/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(u-g)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dm extends ir{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Ut(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Yc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends Dm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ff extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Im extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),sa.subVectors(this.max,cr),xs.subVectors(e.a,cr),gs.subVectors(e.b,cr),_s.subVectors(e.c,cr),vi.subVectors(gs,xs),yi.subVectors(_s,gs),ki.subVectors(xs,_s);let t=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-ki.z,ki.y,vi.z,0,-vi.x,yi.z,0,-yi.x,ki.z,0,-ki.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-ki.y,ki.x,0];return!So(t,xs,gs,_s,sa)||(t=[1,0,0,0,1,0,0,0,1],!So(t,xs,gs,_s,sa))?!1:(ra.crossVectors(vi,yi),t=[ra.x,ra.y,ra.z],So(t,xs,gs,_s,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new N,new N,new N,new N,new N,new N,new N,new N],Ln=new N,ia=new _i,xs=new N,gs=new N,_s=new N,vi=new N,yi=new N,ki=new N,cr=new N,sa=new N,ra=new N,Vi=new N;function So(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Vi.fromArray(r,s);const o=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Nm=new _i,hr=new N,To=new N;class Qn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(To)),this.expandByPoint(hr.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ii=new N,Eo=new N,aa=new N,Mi=new N,wo=new N,oa=new N,Ao=new N;class $r{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eo.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Eo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(aa),o=Mi.dot(this.direction),l=-Mi.dot(aa),c=Mi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,x;if(h>0)if(u=a*l-o,f=a*o-l,x=s*h,u>=0)if(f>=-x)if(f<=x){const g=1/h;u*=g,f*=g,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Eo).addScaledVector(aa,f),d}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,i,s){wo.subVectors(t,e),oa.subVectors(n,e),Ao.crossVectors(wo,oa);let a=this.direction.dot(Ao),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(oa.crossVectors(Mi,oa));if(l<0)return null;const c=o*this.direction.dot(wo.cross(Mi));if(c<0||l+c>a)return null;const h=-o*Mi.dot(Ao);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,s,a,o,l,c,h,u,f,d,x,g,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,f,d,x,g,m)}set(e,t,n,i,s,a,o,l,c,h,u,f,d,x,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,d=a*u,x=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+x*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=x+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,x=c*h,g=c*u;t[0]=f+g*o,t[4]=x*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-x,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,x=c*h,g=c*u;t[0]=f-g*o,t[4]=-a*u,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*h,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,x=o*h,g=o*u;t[0]=l*h,t[4]=x*c-d,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,x=o*l,g=o*c;t[0]=l*h,t[4]=g-f*u,t[8]=x*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+x,t[10]=f-g*u}else if(e.order==="XZY"){const f=a*l,d=a*c,x=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=a*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=o*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Um,e,Fm)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),bi.crossVectors(n,un),bi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),bi.crossVectors(n,un)),bi.normalize(),la.crossVectors(un,bi),i[0]=bi.x,i[4]=la.x,i[8]=un.x,i[1]=bi.y,i[5]=la.y,i[9]=un.y,i[2]=bi.z,i[6]=la.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],g=n[6],m=n[10],p=n[14],b=n[3],_=n[7],y=n[11],E=n[15],T=i[0],A=i[4],R=i[8],v=i[12],M=i[1],L=i[5],I=i[9],U=i[13],F=i[2],B=i[6],k=i[10],X=i[14],H=i[3],ne=i[7],ie=i[11],xe=i[15];return s[0]=a*T+o*M+l*F+c*H,s[4]=a*A+o*L+l*B+c*ne,s[8]=a*R+o*I+l*k+c*ie,s[12]=a*v+o*U+l*X+c*xe,s[1]=h*T+u*M+f*F+d*H,s[5]=h*A+u*L+f*B+d*ne,s[9]=h*R+u*I+f*k+d*ie,s[13]=h*v+u*U+f*X+d*xe,s[2]=x*T+g*M+m*F+p*H,s[6]=x*A+g*L+m*B+p*ne,s[10]=x*R+g*I+m*k+p*ie,s[14]=x*v+g*U+m*X+p*xe,s[3]=b*T+_*M+y*F+E*H,s[7]=b*A+_*L+y*B+E*ne,s[11]=b*R+_*I+y*k+E*ie,s[15]=b*v+_*U+y*X+E*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],g=e[7],m=e[11],p=e[15];return x*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*d-n*l*d)+g*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*h-s*l*h)+m*(+t*c*u-t*o*d-s*a*u+n*a*d+s*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],g=e[13],m=e[14],p=e[15],b=u*m*c-g*f*c+g*l*d-o*m*d-u*l*p+o*f*p,_=x*f*c-h*m*c-x*l*d+a*m*d+h*l*p-a*f*p,y=h*g*c-x*u*c+x*o*d-a*g*d-h*o*p+a*u*p,E=x*u*l-h*g*l-x*o*f+a*g*f+h*o*m-a*u*m,T=t*b+n*_+i*y+s*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=b*A,e[1]=(g*f*s-u*m*s-g*i*d+n*m*d+u*i*p-n*f*p)*A,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*d-n*l*d)*A,e[4]=_*A,e[5]=(h*m*s-x*f*s+x*i*d-t*m*d-h*i*p+t*f*p)*A,e[6]=(x*l*s-a*m*s-x*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*f*s-h*l*s+h*i*c-t*f*c-a*i*d+t*l*d)*A,e[8]=y*A,e[9]=(x*u*s-h*g*s-x*n*d+t*g*d+h*n*p-t*u*p)*A,e[10]=(a*g*s-x*o*s+x*n*c-t*g*c-a*n*p+t*o*p)*A,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*d-t*o*d)*A,e[12]=E*A,e[13]=(h*g*i-x*u*i+x*n*f-t*g*f-h*n*m+t*u*m)*A,e[14]=(x*o*i-a*g*i-x*n*l+t*g*l+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,x=s*u,g=a*h,m=a*u,p=o*u,b=l*c,_=l*h,y=l*u,E=n.x,T=n.y,A=n.z;return i[0]=(1-(g+p))*E,i[1]=(d+y)*E,i[2]=(x-_)*E,i[3]=0,i[4]=(d-y)*T,i[5]=(1-(f+p))*T,i[6]=(m+b)*T,i[7]=0,i[8]=(x+_)*A,i[9]=(m-b)*A,i[10]=(1-(f+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=vs.set(i[0],i[1],i[2]).length();const a=vs.set(i[4],i[5],i[6]).length(),o=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Dn.copy(this);const c=1/s,h=1/a,u=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Yn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let x,g;if(l)x=s/(a-s),g=a*s/(a-s);else if(o===Yn)x=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===qa)x=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Yn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let x,g;if(l)x=1/(a-s),g=a/(a-s);else if(o===Yn)x=-2/(a-s),g=-(a+s)/(a-s);else if(o===qa)x=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new N,Dn=new Xe,Um=new N(0,0,0),Fm=new N(1,1,1),bi=new N,la=new N,un=new N,Yh=new Xe,Kh=new $n;class On{constructor(e=0,t=0,n=0,i=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Om=0;const jh=new N,ys=new $n,si=new Xe,ca=new N,ur=new N,Bm=new N,zm=new $n,Jh=new N(1,0,0),Zh=new N(0,1,0),$h=new N(0,0,1),Qh={type:"added"},km={type:"removed"},Ms={type:"childadded",child:null},Ro={type:"childremoved",child:null};class gt extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new N,t=new On,n=new $n,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new qe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return jh.copy(e).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ca.copy(e):ca.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ur,ca,this.up):si.lookAt(ca,ur,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),ys.setFromRotationMatrix(si),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new N(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new N,ri=new N,Co=new N,ai=new N,bs=new N,Ss=new N,eu=new N,Po=new N,Lo=new N,Do=new N,Io=new st,No=new st,Uo=new st;class Un{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),In.subVectors(e,t),i.cross(In);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){In.subVectors(i,t),ri.subVectors(n,t),Co.subVectors(e,t);const a=In.dot(In),o=In.dot(ri),l=In.dot(Co),c=ri.dot(ri),h=ri.dot(Co),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,x=(a*h-o*l)*f;return s.set(1-d-x,x,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Io.setScalar(0),No.setScalar(0),Uo.setScalar(0),Io.fromBufferAttribute(e,t),No.fromBufferAttribute(e,n),Uo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Io,s.x),a.addScaledVector(No,s.y),a.addScaledVector(Uo,s.z),a}static isFrontFacing(e,t,n,i){return In.subVectors(n,t),ri.subVectors(e,t),In.cross(ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),In.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;bs.subVectors(i,n),Ss.subVectors(s,n),Po.subVectors(e,n);const l=bs.dot(Po),c=Ss.dot(Po);if(l<=0&&c<=0)return t.copy(n);Lo.subVectors(e,i);const h=bs.dot(Lo),u=Ss.dot(Lo);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(bs,a);Do.subVectors(e,s);const d=bs.dot(Do),x=Ss.dot(Do);if(x>=0&&d<=x)return t.copy(s);const g=d*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Ss,o);const m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return eu.subVectors(s,i),o=(u-h)/(u-h+(d-x)),t.copy(i).addScaledVector(eu,o);const p=1/(m+g+f);return a=g*p,o=f*p,t.copy(n).addScaledVector(bs,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Fo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=qc(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fo(a,s,e+1/3),this.g=Fo(a,s,e),this.b=Fo(a,s,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Of[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return nt.workingToColorSpace(kt.copy(this),e),Math.round(Ke(kt.r*255,0,255))*65536+Math.round(Ke(kt.g*255,0,255))*256+Math.round(Ke(kt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,s=kt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=It){nt.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(ha);const n=wr(Si.h,ha.h,t),i=wr(Si.s,ha.s,t),s=wr(Si.l,ha.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Fe;Fe.NAMES=Of;let Vm=0;class Fn extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Ns,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=gl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dt extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fi=Hm();function Hm(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Gm(r){Math.abs(r)>65504&&Ce("DataUtils.toHalfFloat(): Value out of range."),r=Ke(r,-65504,65504),fi.floatView[0]=r;const e=fi.uint32View[0],t=e>>23&511;return fi.baseTable[t]+((e&8388607)>>fi.shiftTable[t])}function Wm(r){const e=r>>10;return fi.uint32View[0]=fi.mantissaTable[fi.offsetTable[e]+(r&1023)]+fi.exponentTable[e],fi.floatView[0]}class ua{static toHalfFloat(e){return Gm(e)}static fromHalfFloat(e){return Wm(e)}}const At=new N,fa=new ue;let Xm=0;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nc,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nc&&(e.usage=this.usage),e}}class Bf extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zf extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qm=0;const vn=new Xe,Oo=new gt,Ts=new N,fn=new _i,fr=new _i,Dt=new N;class ln extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uf(e)?zf:Bf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(fn.min,fr.min),fn.expandByPoint(Dt),Dt.addVectors(fn.max,fr.max),fn.expandByPoint(Dt)):(fn.expandByPoint(fr.min),fn.expandByPoint(fr.max))}fn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(e,c),Dt.add(Ts)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new N,l[R]=new N;const c=new N,h=new N,u=new N,f=new ue,d=new ue,x=new ue,g=new N,m=new N;function p(R,v,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,v),x.fromBufferAttribute(s,M),h.sub(c),u.sub(c),d.sub(f),x.sub(f);const L=1/(d.x*x.y-x.x*d.y);isFinite(L)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(L),o[R].add(g),o[v].add(g),o[M].add(g),l[R].add(m),l[v].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,v=b.length;R<v;++R){const M=b[R],L=M.start,I=M.count;for(let U=L,F=L+I;U<F;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new N,y=new N,E=new N,T=new N;function A(R){E.fromBufferAttribute(i,R),T.copy(E);const v=o[R];_.copy(v),_.sub(E.multiplyScalar(E.dot(v))).normalize(),y.crossVectors(T,v);const L=y.dot(l[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,L)}for(let R=0,v=b.length;R<v;++R){const M=b[R],L=M.start,I=M.count;for(let U=L,F=L+I;U<F;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new N,s=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const x=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new Zt(f,h,u)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tu=new Xe,Hi=new $r,da=new Qn,nu=new N,pa=new N,ma=new N,xa=new N,Bo=new N,ga=new N,iu=new N,_a=new N;class Qe extends gt{constructor(e=new ln,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Bo.fromBufferAttribute(u,e),a?ga.addScaledVector(Bo,h):ga.addScaledVector(Bo.sub(t),h))}t.add(ga)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),Hi.copy(e.ray).recast(e.near),!(da.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(da,nu)===null||Hi.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(tu),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=f.length;x<g;x++){const m=f[x],p=a[m.materialIndex],b=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,E=_;y<E;y+=3){const T=o.getX(y),A=o.getX(y+1),R=o.getX(y+2);i=va(this,p,e,n,c,h,u,T,A,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){const b=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);i=va(this,a,e,n,c,h,u,b,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=f.length;x<g;x++){const m=f[x],p=a[m.materialIndex],b=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,E=_;y<E;y+=3){const T=y,A=y+1,R=y+2;i=va(this,p,e,n,c,h,u,T,A,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){const b=m,_=m+1,y=m+2;i=va(this,a,e,n,c,h,u,b,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ym(r,e,t,n,i,s,a,o){let l;if(e.side===tn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Rn,o),l===null)return null;_a.copy(o),_a.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:r}}function va(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,pa),r.getVertexPosition(l,ma),r.getVertexPosition(c,xa);const h=Ym(r,e,t,n,pa,ma,xa,iu);if(h){const u=new N;Un.getBarycoord(iu,pa,ma,xa,u),i&&(h.uv=Un.getInterpolatedAttribute(i,o,l,c,u,new ue)),s&&(h.uv1=Un.getInterpolatedAttribute(s,o,l,c,u,new ue)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};Un.getNormal(pa,ma,xa,f.normal),h.face=f,h.barycoord=u}return h}class sr extends ln{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function x(g,m,p,b,_,y,E,T,A,R,v){const M=y/A,L=E/R,I=y/2,U=E/2,F=T/2,B=A+1,k=R+1;let X=0,H=0;const ne=new N;for(let ie=0;ie<k;ie++){const xe=ie*L-U;for(let Ae=0;Ae<B;Ae++){const Le=Ae*M-I;ne[g]=Le*b,ne[m]=xe*_,ne[p]=F,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[p]=T>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ae/A),u.push(1-ie/R),X+=1}}for(let ie=0;ie<R;ie++)for(let xe=0;xe<A;xe++){const Ae=f+xe+B*ie,Le=f+xe+B*(ie+1),Ve=f+(xe+1)+B*(ie+1),je=f+(xe+1)+B*ie;l.push(Ae,Le,je),l.push(Le,Ve,je),H+=6}o.addGroup(d,H,v),d+=H,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(r){const e={};for(let t=0;t<r.length;t++){const n=Xs(r[t]);for(const i in n)e[i]=n[i]}return e}function Km(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const jm={clone:Xs,merge:Yt};var Jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jm,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Km(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vf extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new N,su=new ue,ru=new ue;class Kt extends Vf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,su,ru),t.subVectors(ru,su)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,ws=1;class $m extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(Es,ws,e,t);i.layers=this.layers,this.add(i);const s=new Kt(Es,ws,e,t);s.layers=this.layers,this.add(s);const a=new Kt(Es,ws,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Es,ws,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Es,ws,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Es,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Hf extends Ut{constructor(e=[],t=Vs,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qm extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new sr(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:pi});s.uniforms.tEquirect.value=t;const a=new Qe(i,s),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Ct),new $m(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Qi extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e0={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class t0 extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class n0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nc,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new N;class jc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const au=new N,ou=new st,lu=new st,i0=new N,cu=new Xe,ya=new N,ko=new Qn,hu=new Xe,Vo=new $r;class s0 extends Qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _i),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ya),this.boundingBox.expandByPoint(ya)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ya),this.boundingSphere.expandByPoint(ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(i),e.ray.intersectsSphere(ko)!==!1&&(hu.copy(i).invert(),Vo.copy(e.ray).applyMatrix4(hu),!(this.boundingBox!==null&&Vo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ou.fromBufferAttribute(i.attributes.skinIndex,e),lu.fromBufferAttribute(i.attributes.skinWeight,e),au.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=lu.getComponent(s);if(a!==0){const o=ou.getComponent(s);cu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(i0.copy(au).applyMatrix4(cu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gf extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ao extends Ut{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Jt,h=Jt,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=new Xe,r0=new Xe;class Jc{constructor(e=[],t=[]){this.uuid=An(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:r0;uu.multiplyMatrices(o,t[s]),uu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ao(t,e,e,Tn,en);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Ce("Skeleton: No bone found with UUID:",s),a=new Gf),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ic extends Zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const As=new Xe,fu=new Xe,Ma=[],du=new _i,a0=new Xe,dr=new Qe,pr=new Qn;class o0 extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,a0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),du.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(du)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),pr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,As),fu.multiplyMatrices(n,As),dr.matrixWorld=fu,dr.raycast(e,Ma);for(let a=0,o=Ma.length;a<o;a++){const l=Ma[a];l.instanceId=s,l.object=this,t.push(l)}Ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ao(new Float32Array(i*this.count),i,this.count,kc,en));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ho=new N,l0=new N,c0=new qe;class ji{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ho.subVectors(n,t).cross(l0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||c0.getNormalMatrix(e),i=this.coplanarPoint(Ho).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Qn,h0=new ue(.5,.5),ba=new N;class Zc{constructor(e=new ji,t=new ji,n=new ji,i=new ji,s=new ji,a=new ji){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],x=s[8],g=s[9],m=s[10],p=s[11],b=s[12],_=s[13],y=s[14],E=s[15];if(i[0].setComponents(c-a,d-h,p-x,E-b).normalize(),i[1].setComponents(c+a,d+h,p+x,E+b).normalize(),i[2].setComponents(c+o,d+u,p+g,E+_).normalize(),i[3].setComponents(c-o,d-u,p-g,E-_).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,d-f,p-m,E-y).normalize();else if(i[4].setComponents(c-l,d-f,p-m,E-y).normalize(),t===Yn)i[5].setComponents(c+l,d+f,p+m,E+y).normalize();else if(t===qa)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const t=h0.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ba.x=i.normal.x>0?e.max.x:e.min.x,ba.y=i.normal.y>0?e.max.y:e.min.y,ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wf extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ka=new N,ja=new N,pu=new Xe,mr=new $r,Sa=new Qn,Go=new N,mu=new N;class $c extends gt{constructor(e=new ln,t=new Wf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ka.fromBufferAttribute(t,i-1),ja.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ka.distanceTo(ja);e.setAttribute("lineDistance",new Bt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(i),Sa.radius+=s,e.ray.intersectsSphere(Sa)===!1)return;pu.copy(i).invert(),mr.copy(e.ray).applyMatrix4(pu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let g=d,m=x-1;g<m;g+=c){const p=h.getX(g),b=h.getX(g+1),_=Ta(this,e,mr,l,p,b,g);_&&t.push(_)}if(this.isLineLoop){const g=h.getX(x-1),m=h.getX(d),p=Ta(this,e,mr,l,g,m,x-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let g=d,m=x-1;g<m;g+=c){const p=Ta(this,e,mr,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=Ta(this,e,mr,l,x-1,d,x-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ta(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Ka.fromBufferAttribute(o,i),ja.fromBufferAttribute(o,s),t.distanceSqToSegment(Ka,ja,Go,mu)>n)return;Go.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Go);if(!(c<e.near||c>e.far))return{distance:c,point:mu.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const xu=new N,gu=new N;class u0 extends $c{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)xu.fromBufferAttribute(t,i),gu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xu.distanceTo(gu);e.setAttribute("lineDistance",new Bt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class f0 extends $c{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xf extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _u=new Xe,sc=new $r,Ea=new Qn,wa=new N;class d0 extends gt{constructor(e=new ln,t=new Xf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(i),Ea.radius+=s,e.ray.intersectsSphere(Ea)===!1)return;_u.copy(i).invert(),sc.copy(e.ray).applyMatrix4(_u);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let x=f,g=d;x<g;x++){const m=c.getX(x);wa.fromBufferAttribute(u,m),vu(wa,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let x=f,g=d;x<g;x++)wa.fromBufferAttribute(u,x),vu(wa,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vu(r,e,t,n,i,s,a){const o=sc.distanceSqToPoint(r);if(o<t){const l=new N;sc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qf extends Ut{constructor(e,t,n=as,i,s,a,o=Jt,l=Jt,c,h=Ur,u=1){if(h!==Ur&&h!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yf extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qc extends ln{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let x=0;const g=[],m=n/2;let p=0;b(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(d,2));function b(){const y=new N,E=new N;let T=0;const A=(t-e)/n;for(let R=0;R<=s;R++){const v=[],M=R/s,L=M*(t-e)+e;for(let I=0;I<=i;I++){const U=I/i,F=U*l+o,B=Math.sin(F),k=Math.cos(F);E.x=L*B,E.y=-M*n+m,E.z=L*k,u.push(E.x,E.y,E.z),y.set(B,A,k).normalize(),f.push(y.x,y.y,y.z),d.push(U,1-M),v.push(x++)}g.push(v)}for(let R=0;R<i;R++)for(let v=0;v<s;v++){const M=g[v][R],L=g[v+1][R],I=g[v+1][R+1],U=g[v][R+1];(e>0||v!==0)&&(h.push(M,L,U),T+=3),(t>0||v!==s-1)&&(h.push(L,I,U),T+=3)}c.addGroup(p,T,0),p+=T}function _(y){const E=x,T=new ue,A=new N;let R=0;const v=y===!0?e:t,M=y===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),x++;const L=x;for(let I=0;I<=i;I++){const F=I/i*l+o,B=Math.cos(F),k=Math.sin(F);A.x=v*k,A.y=m*M,A.z=v*B,u.push(A.x,A.y,A.z),f.push(0,M,0),T.x=B*.5+.5,T.y=k*.5*M+.5,d.push(T.x,T.y),x++}for(let I=0;I<i;I++){const U=E+I,F=L+I;y===!0?h.push(F,F+1,U):h.push(F+1,F,U),R+=3}c.addGroup(p,R,y===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ue:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,i=[],s=[],a=[],o=new N,l=new Xe;for(let d=0;d<=e;d++){const x=d/e;i[d]=this.getTangentAt(x,new N)}s[0]=new N,a[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Ke(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Ke(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(i[x],d*x)),a[x].crossVectors(i[x],s[x])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class eh extends ei{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class p0 extends eh{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function th(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Aa=new N,Wo=new th,Xo=new th,qo=new th;class m0 extends ei{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Aa.subVectors(i[0],i[1]).add(i[0]),c=Aa);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Aa.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Aa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),Wo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,g,m),Xo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,g,m),qo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(Wo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Xo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),qo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Wo.calc(l),Xo.calc(l),qo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function yu(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function x0(r,e){const t=1-r;return t*t*e}function g0(r,e){return 2*(1-r)*r*e}function _0(r,e){return r*r*e}function Ar(r,e,t,n){return x0(r,e)+g0(r,t)+_0(r,n)}function v0(r,e){const t=1-r;return t*t*t*e}function y0(r,e){const t=1-r;return 3*t*t*r*e}function M0(r,e){return 3*(1-r)*r*r*e}function b0(r,e){return r*r*r*e}function Rr(r,e,t,n,i){return v0(r,e)+y0(r,t)+M0(r,n)+b0(r,i)}class Kf extends ei{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,i.x,s.x,a.x,o.x),Rr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class S0 extends ei{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,i.x,s.x,a.x,o.x),Rr(e,i.y,s.y,a.y,o.y),Rr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jf extends ei{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T0 extends ei{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jf extends ei{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ar(e,i.x,s.x,a.x),Ar(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E0 extends ei{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ar(e,i.x,s.x,a.x),Ar(e,i.y,s.y,a.y),Ar(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zf extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(yu(o,l.x,c.x,h.x,u.x),yu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var rc=Object.freeze({__proto__:null,ArcCurve:p0,CatmullRomCurve3:m0,CubicBezierCurve:Kf,CubicBezierCurve3:S0,EllipseCurve:eh,LineCurve:jf,LineCurve3:T0,QuadraticBezierCurve:Jf,QuadraticBezierCurve3:E0,SplineCurve:Zf});class w0 extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new rc[i.type]().fromJSON(i))}return this}}class ac extends w0{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new jf(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Jf(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Kf(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Zf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new eh(e,t,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class za extends ac{constructor(e){super(e),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ac().fromJSON(i))}return this}}function A0(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=$f(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=D0(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,u=l;for(let f=t;f<i;f+=t){const d=r[f],x=r[f+1];d<o&&(o=d),x<l&&(l=x),d>h&&(h=d),x>u&&(u=x)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Vr(s,a,t,o,l,c,0),a}function $f(r,e,t,n,i){let s;if(i===G0(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=Mu(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Mu(a/n|0,r[a],r[a+1],s);return s&&qs(s,s.next)&&(Gr(s),s=s.next),s}function ls(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(qs(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&O0(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?C0(r,n,i,s):R0(r)){e.push(l.i,r.i,c.i),Gr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=P0(ls(r),e),Vr(r,e,t,n,i,s,2)):a===2&&L0(r,e,t,n,i,s):Vr(ls(r),e,t,n,i,s,1);break}}}function R0(r){const e=r.prev,t=r,n=r.next;if(Mt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),f=Math.max(i,s,a),d=Math.max(o,l,c);let x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&Mr(i,o,s,l,a,c,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function C0(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Mt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,f=a.y,d=Math.min(o,l,c),x=Math.min(h,u,f),g=Math.max(o,l,c),m=Math.max(h,u,f),p=oc(d,x,e,t,n),b=oc(g,m,e,t,n);let _=r.prevZ,y=r.nextZ;for(;_&&_.z>=p&&y&&y.z<=b;){if(_.x>=d&&_.x<=g&&_.y>=x&&_.y<=m&&_!==i&&_!==a&&Mr(o,h,l,u,c,f,_.x,_.y)&&Mt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=g&&y.y>=x&&y.y<=m&&y!==i&&y!==a&&Mr(o,h,l,u,c,f,y.x,y.y)&&Mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=g&&_.y>=x&&_.y<=m&&_!==i&&_!==a&&Mr(o,h,l,u,c,f,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=g&&y.y>=x&&y.y<=m&&y!==i&&y!==a&&Mr(o,h,l,u,c,f,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function P0(r,e){let t=r;do{const n=t.prev,i=t.next.next;!qs(n,i)&&ed(n,t,t.next,i)&&Hr(n,i)&&Hr(i,n)&&(e.push(n.i,t.i,i.i),Gr(t),Gr(t.next),t=r=i),t=t.next}while(t!==r);return ls(t)}function L0(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&k0(a,o)){let l=td(a,o);a=ls(a,a.next),l=ls(l,l.next),Vr(a,e,t,n,i,s,0),Vr(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function D0(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=$f(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(z0(c))}i.sort(I0);for(let s=0;s<i.length;s++)t=N0(i[s],t);return t}function I0(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function N0(r,e){const t=U0(r,e);if(!t)return e;const n=td(t,r);return ls(n,n.next),ls(t,t.next)}function U0(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(qs(r,t))return t;do{if(qs(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Qf(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Hr(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&F0(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function F0(r,e){return Mt(r.prev,r,e.prev)<0&&Mt(e.next,r,r.next)<0}function O0(r,e,t,n){let i=r;do i.z===0&&(i.z=oc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,B0(i)}function B0(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function oc(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function z0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Qf(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Mr(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&Qf(r,e,t,n,i,s,a,o)}function k0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!V0(r,e)&&(Hr(r,e)&&Hr(e,r)&&H0(r,e)&&(Mt(r.prev,r,e.prev)||Mt(r,e.prev,e))||qs(r,e)&&Mt(r.prev,r,r.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function qs(r,e){return r.x===e.x&&r.y===e.y}function ed(r,e,t,n){const i=Ca(Mt(r,e,t)),s=Ca(Mt(r,e,n)),a=Ca(Mt(t,n,r)),o=Ca(Mt(t,n,e));return!!(i!==s&&a!==o||i===0&&Ra(r,t,e)||s===0&&Ra(r,n,e)||a===0&&Ra(t,r,n)||o===0&&Ra(t,e,n))}function Ra(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ca(r){return r>0?1:r<0?-1:0}function V0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&ed(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Hr(r,e){return Mt(r.prev,r,r.next)<0?Mt(r,e,r.next)>=0&&Mt(r,r.prev,e)>=0:Mt(r,e,r.prev)<0||Mt(r,r.next,e)<0}function H0(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function td(r,e){const t=lc(r.i,r.x,r.y),n=lc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Mu(r,e,t,n){const i=lc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function lc(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G0(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class W0{static triangulate(e,t,n=2){return A0(e,t,n)}}class es{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return es.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];bu(e),Su(n,e);let a=e.length;t.forEach(bu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Su(n,t[l]);const o=W0.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function bu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Su(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class nh extends ln{constructor(e=new za([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Bt(i,3)),this.setAttribute("uv",new Bt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:X0;let _,y=!1,E,T,A,R;p&&(_=p.getSpacedPoints(h),y=!0,f=!1,E=p.computeFrenetFrames(h,!1),T=new N,A=new N,R=new N),f||(m=0,d=0,x=0,g=0);const v=o.extractPoints(c);let M=v.shape;const L=v.holes;if(!es.isClockWise(M)){M=M.reverse();for(let $=0,C=L.length;$<C;$++){const j=L[$];es.isClockWise(j)&&(L[$]=j.reverse())}}function U($){const j=10000000000000001e-36;let se=$[0];for(let re=1;re<=$.length;re++){const ee=re%$.length,be=$[ee],fe=be.x-se.x,ye=be.y-se.y,P=fe*fe+ye*ye,S=Math.max(Math.abs(be.x),Math.abs(be.y),Math.abs(se.x),Math.abs(se.y)),V=j*S*S;if(P<=V){$.splice(ee,1),re--;continue}se=be}}U(M),L.forEach(U);const F=L.length,B=M;for(let $=0;$<F;$++){const C=L[$];M=M.concat(C)}function k($,C,j){return C||Je("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(C,j)}const X=M.length;function H($,C,j){let se,re,ee;const be=$.x-C.x,fe=$.y-C.y,ye=j.x-$.x,P=j.y-$.y,S=be*be+fe*fe,V=be*P-fe*ye;if(Math.abs(V)>Number.EPSILON){const Y=Math.sqrt(S),Q=Math.sqrt(ye*ye+P*P),q=C.x-fe/Y,Re=C.y+be/Y,de=j.x-P/Q,De=j.y+ye/Q,we=((de-q)*P-(De-Re)*ye)/(be*P-fe*ye);se=q+be*we-$.x,re=Re+fe*we-$.y;const te=se*se+re*re;if(te<=2)return new ue(se,re);ee=Math.sqrt(te/2)}else{let Y=!1;be>Number.EPSILON?ye>Number.EPSILON&&(Y=!0):be<-Number.EPSILON?ye<-Number.EPSILON&&(Y=!0):Math.sign(fe)===Math.sign(P)&&(Y=!0),Y?(se=-fe,re=be,ee=Math.sqrt(S)):(se=be,re=fe,ee=Math.sqrt(S/2))}return new ue(se/ee,re/ee)}const ne=[];for(let $=0,C=B.length,j=C-1,se=$+1;$<C;$++,j++,se++)j===C&&(j=0),se===C&&(se=0),ne[$]=H(B[$],B[j],B[se]);const ie=[];let xe,Ae=ne.concat();for(let $=0,C=F;$<C;$++){const j=L[$];xe=[];for(let se=0,re=j.length,ee=re-1,be=se+1;se<re;se++,ee++,be++)ee===re&&(ee=0),be===re&&(be=0),xe[se]=H(j[se],j[ee],j[be]);ie.push(xe),Ae=Ae.concat(xe)}let Le;if(m===0)Le=es.triangulateShape(B,L);else{const $=[],C=[];for(let j=0;j<m;j++){const se=j/m,re=d*Math.cos(se*Math.PI/2),ee=x*Math.sin(se*Math.PI/2)+g;for(let be=0,fe=B.length;be<fe;be++){const ye=k(B[be],ne[be],ee);Pe(ye.x,ye.y,-re),se===0&&$.push(ye)}for(let be=0,fe=F;be<fe;be++){const ye=L[be];xe=ie[be];const P=[];for(let S=0,V=ye.length;S<V;S++){const Y=k(ye[S],xe[S],ee);Pe(Y.x,Y.y,-re),se===0&&P.push(Y)}se===0&&C.push(P)}}Le=es.triangulateShape($,C)}const Ve=Le.length,je=x+g;for(let $=0;$<X;$++){const C=f?k(M[$],Ae[$],je):M[$];y?(A.copy(E.normals[0]).multiplyScalar(C.x),T.copy(E.binormals[0]).multiplyScalar(C.y),R.copy(_[0]).add(A).add(T),Pe(R.x,R.y,R.z)):Pe(C.x,C.y,0)}for(let $=1;$<=h;$++)for(let C=0;C<X;C++){const j=f?k(M[C],Ae[C],je):M[C];y?(A.copy(E.normals[$]).multiplyScalar(j.x),T.copy(E.binormals[$]).multiplyScalar(j.y),R.copy(_[$]).add(A).add(T),Pe(R.x,R.y,R.z)):Pe(j.x,j.y,u/h*$)}for(let $=m-1;$>=0;$--){const C=$/m,j=d*Math.cos(C*Math.PI/2),se=x*Math.sin(C*Math.PI/2)+g;for(let re=0,ee=B.length;re<ee;re++){const be=k(B[re],ne[re],se);Pe(be.x,be.y,u+j)}for(let re=0,ee=L.length;re<ee;re++){const be=L[re];xe=ie[re];for(let fe=0,ye=be.length;fe<ye;fe++){const P=k(be[fe],xe[fe],se);y?Pe(P.x,P.y+_[h-1].y,_[h-1].x+j):Pe(P.x,P.y,u+j)}}}K(),Z();function K(){const $=i.length/3;if(f){let C=0,j=X*C;for(let se=0;se<Ve;se++){const re=Le[se];Se(re[2]+j,re[1]+j,re[0]+j)}C=h+m*2,j=X*C;for(let se=0;se<Ve;se++){const re=Le[se];Se(re[0]+j,re[1]+j,re[2]+j)}}else{for(let C=0;C<Ve;C++){const j=Le[C];Se(j[2],j[1],j[0])}for(let C=0;C<Ve;C++){const j=Le[C];Se(j[0]+X*h,j[1]+X*h,j[2]+X*h)}}n.addGroup($,i.length/3-$,0)}function Z(){const $=i.length/3;let C=0;_e(B,C),C+=B.length;for(let j=0,se=L.length;j<se;j++){const re=L[j];_e(re,C),C+=re.length}n.addGroup($,i.length/3-$,1)}function _e($,C){let j=$.length;for(;--j>=0;){const se=j;let re=j-1;re<0&&(re=$.length-1);for(let ee=0,be=h+m*2;ee<be;ee++){const fe=X*ee,ye=X*(ee+1),P=C+se+fe,S=C+re+fe,V=C+re+ye,Y=C+se+ye;We(P,S,V,Y)}}}function Pe($,C,j){l.push($),l.push(C),l.push(j)}function Se($,C,j){rt($),rt(C),rt(j);const se=i.length/3,re=b.generateTopUV(n,i,se-3,se-2,se-1);Oe(re[0]),Oe(re[1]),Oe(re[2])}function We($,C,j,se){rt($),rt(C),rt(se),rt(C),rt(j),rt(se);const re=i.length/3,ee=b.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);Oe(ee[0]),Oe(ee[1]),Oe(ee[3]),Oe(ee[1]),Oe(ee[2]),Oe(ee[3])}function rt($){i.push(l[$*3+0]),i.push(l[$*3+1]),i.push(l[$*3+2])}function Oe($){s.push($.x),s.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return q0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new rc[i.type]().fromJSON(i)),new nh(n,e.options)}}const X0={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ue(s,a),new ue(o,l),new ue(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],x=e[i*3+2],g=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-u),new ue(f,1-x),new ue(g,1-p)]:[new ue(o,1-l),new ue(h,1-u),new ue(d,1-x),new ue(m,1-p)]}};function q0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class bn extends ln{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],x=[],g=[],m=[];for(let p=0;p<h;p++){const b=p*f-a;for(let _=0;_<c;_++){const y=_*u-s;x.push(y,-b,0),g.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const _=b+c*p,y=b+c*(p+1),E=b+1+c*(p+1),T=b+1+c*p;d.push(_,y,T),d.push(y,E,T)}this.setIndex(d),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ys extends ln{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new N,f=new N,d=[],x=[],g=[],m=[];for(let p=0;p<=n;p++){const b=[],_=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const T=E/t;u.x=-e*Math.cos(i+T*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(i+T*s)*Math.sin(a+_*o),x.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(T+y,1-_),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const _=h[p][b+1],y=h[p][b],E=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&d.push(_,y,T),(p!==n-1||l<Math.PI)&&d.push(y,E,T)}this.setIndex(d),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oo extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ti extends oo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tu extends Fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y0 extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K0 extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Pa(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function j0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function J0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Eu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function nd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Qr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Z0 extends Qr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bh:s=e,o=2*t-n;break;case zh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:a=e,l=2*n-t;break;case zh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(i-t),g=x*x,m=g*x,p=-f*m+2*f*g-f*x,b=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*x+1,_=(-1-d)*m+(1.5+d)*g+.5*x,y=d*m-d*g;for(let E=0;E!==o;++E)s[E]=p*a[h+E]+b*a[c+E]+_*a[l+E]+y*a[u+E];return s}}class $0 extends Qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}}class Q0 extends Qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Q0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Z0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case _o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return _o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&j0(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_o,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){const g=t[u+x];if(g!==t[f+x]||g!==t[d+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Br;class rr extends zn{constructor(e,t,n){super(e,t,n)}}rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Or;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class id extends zn{constructor(e,t,n,i){super(e,t,n,i)}}id.prototype.ValueTypeName="color";class Ks extends zn{constructor(e,t,n,i){super(e,t,n,i)}}Ks.prototype.ValueTypeName="number";class ex extends Qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)$n.slerpFlat(s,0,a,c-o,a,c,l);return s}}class js extends zn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ex(this.times,this.values,this.getValueSize(),e)}}js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends zn{constructor(e,t,n){super(e,t,n)}}ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Or;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends zn{constructor(e,t,n,i){super(e,t,n,i)}}Js.prototype.ValueTypeName="vector";class tx{constructor(e="",t=-1,n=[],i=Zp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=An(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ix(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(zn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=J0(l);l=Eu(l,1,h),c=Eu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ks(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Ce("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Je("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,x,g){if(d.length!==0){const m=[],p=[];nd(d,m,p,x),m.length!==0&&g.push(new u(f,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let g=0;g<f[x].morphTargets.length;g++)d[f[x].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let b=0;b!==f[x].morphTargets.length;++b){const _=f[x];m.push(_.time),p.push(_.morphTarget===g?1:0)}i.push(new Ks(".morphTargetInfluence["+g+"]",m,p))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(Js,d+".position",f,"pos",i),n(js,d+".quaternion",f,"rot",i),n(Js,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function nx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ks;case"vector":case"vector2":case"vector3":case"vector4":return Js;case"color":return id;case"quaternion":return js;case"bool":case"boolean":return rr;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ix(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=nx(r.type);if(r.times===void 0){const t=[],n=[];nd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const di={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class sx{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const rx=new sx;class Fi{constructor(e){this.manager=e!==void 0?e:rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Fi.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class ax extends Error{constructor(e,t){super(e),this.response=t}}class lo extends Fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=di.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:n,onError:i});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=oi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0;let g=0;const m=new ReadableStream({start(p){b();function b(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{g+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:d});for(let T=0,A=h.length;T<A;T++){const R=h[T];R.onProgress&&R.onProgress(E)}p.enqueue(y),b()}},_=>{p.error(_)})}}});return new Response(m)}else throw new ax(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(x=>d.decode(x))}}}).then(c=>{di.add(`file:${e}`,c);const h=oi[e];delete oi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete oi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Rs=new WeakMap;class ox extends Fi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=di.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Rs.get(a);u===void 0&&(u=[],Rs.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=zr("img");function l(){h(),t&&t(this);const u=Rs.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Rs.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),di.remove(`image:${e}`);const f=Rs.get(this)||[];for(let d=0;d<f.length;d++){const x=f[d];x.onError&&x.onError(u)}Rs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),di.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class lx extends Fi{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ao,o=new lo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{h(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Sn,a.wrapT=c.wrapT!==void 0?c.wrapT:Sn,a.magFilter=c.magFilter!==void 0?c.magFilter:Ct,a.minFilter=c.minFilter!==void 0?c.minFilter:Ct,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Xn),c.mipmapCount===1&&(a.minFilter=Ct),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class sd extends Fi{constructor(e){super(e)}load(e,t,n,i){const s=new Ut,a=new ox(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class co extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Yo=new Xe,wu=new N,Au=new N;class ih{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(wu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cx extends ih{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hx extends co{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new cx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ru=new Xe,xr=new N,Ko=new N;class ux extends ih{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),xr.setFromMatrixPosition(e.matrixWorld),n.position.copy(xr),Ko.copy(n.position),Ko.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ko),n.updateMatrixWorld(),i.makeTranslation(-xr.x,-xr.y,-xr.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru,n.coordinateSystem,n.reversedDepth)}}class fx extends co{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ux}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sh extends Vf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dx extends ih{constructor(){super(new sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cc extends co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new dx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class px extends co{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const jo=new WeakMap;class mx extends Fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=di.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(jo.has(a)===!0)i&&i(jo.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return di.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),jo.set(l,c),di.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});di.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class xx extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class rd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const rh="\\[\\]\\.:\\/",gx=new RegExp("["+rh+"]","g"),ah="[^"+rh+"]",_x="[^"+rh.replace("\\.","")+"]",vx=/((?:WC+[\/:])*)/.source.replace("WC",ah),yx=/(WCOD+)?/.source.replace("WCOD",_x),Mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),Sx=new RegExp("^"+vx+yx+Mx+bx+"$"),Tx=["material","materials","bones","map"];class Ex{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gx,"")}static parseTrackName(e){const t=Sx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Tx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=Ex;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Cu=new Xe;class wx{constructor(e,t,n=0,i=1/0){this.ray=new $r(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cu),this}intersectObject(e,t=!0,n=[]){return hc(e,this,n,t),n.sort(Pu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)hc(e[i],this,n,t);return n.sort(Pu),n}}function Pu(r,e){return r.distance-e.distance}function hc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)hc(s[a],e,t,!0)}}class Ax{constructor(){this.type="ShapePath",this.color=new Fe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ac,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const b=[];for(let _=0,y=p.length;_<y;_++){const E=p[_],T=new za;T.curves=E.curves,b.push(T)}return b}function n(p,b){const _=b.length;let y=!1;for(let E=_-1,T=0;T<_;E=T++){let A=b[E],R=b[T],v=R.x-A.x,M=R.y-A.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(A=b[T],v=-v,R=b[E],M=-M),p.y<A.y||p.y>R.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{const L=M*(p.x-A.x)-v*(p.y-A.y);if(L===0)return!0;if(L<0)continue;y=!y}}else{if(p.y!==A.y)continue;if(R.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=R.x)return!0}}return y}const i=es.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new za,l.curves=o.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],x=0,g;f[x]=void 0,d[x]=[];for(let p=0,b=s.length;p<b;p++)o=s[p],g=o.getPoints(),a=i(g),a=e?!a:a,a?(!h&&f[x]&&x++,f[x]={s:new za,p:g},f[x].s.curves=o.curves,h&&x++,d[x]=[]):d[x].push({h:o,p:g[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,b=0;for(let _=0,y=f.length;_<y;_++)u[_]=[];for(let _=0,y=f.length;_<y;_++){const E=d[_];for(let T=0;T<E.length;T++){const A=E[T];let R=!0;for(let v=0;v<f.length;v++)n(A.p,f[v].p)&&(_!==v&&b++,R?(R=!1,u[v].push(A)):p=!0);R&&u[_].push(A)}}b>0&&p===!1&&(d=u)}let m;for(let p=0,b=f.length;p<b;p++){l=f[p].s,c.push(l),m=d[p];for(let _=0,y=m.length;_<y;_++)l.holes.push(m[_].h)}return c}}function Lu(r,e,t,n){const i=Rx(n);switch(t){case Lf:return r*e;case kc:return r*e/i.components*i.byteLength;case Vc:return r*e/i.components*i.byteLength;case Hc:return r*e*2/i.components*i.byteLength;case Gc:return r*e*2/i.components*i.byteLength;case Df:return r*e*3/i.components*i.byteLength;case Tn:return r*e*4/i.components*i.byteLength;case Wc:return r*e*4/i.components*i.byteLength;case Ua:case Fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ba:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Pl:return Math.max(r,16)*Math.max(e,8)/4;case Al:case Cl:return Math.max(r,8)*Math.max(e,8)/2;case Ll:case Dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Il:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case kl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kl:case jl:case Jl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Zl:case $l:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ql:case ec:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rx(r){switch(r){case Jn:case Af:return{byteLength:1,components:1};case Ir:case Rf:case qn:return{byteLength:2,components:1};case Bc:case zc:return{byteLength:2,components:4};case as:case Oc:case en:return{byteLength:4,components:1};case Cf:case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ad(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Cx(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){const x=u[f],g=u[d];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){const g=u[d];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,r_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,__=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,W_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,K_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,J_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ev=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ov=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Px,alphahash_pars_fragment:Lx,alphamap_fragment:Dx,alphamap_pars_fragment:Ix,alphatest_fragment:Nx,alphatest_pars_fragment:Ux,aomap_fragment:Fx,aomap_pars_fragment:Ox,batching_pars_vertex:Bx,batching_vertex:zx,begin_vertex:kx,beginnormal_vertex:Vx,bsdfs:Hx,iridescence_fragment:Gx,bumpmap_pars_fragment:Wx,clipping_planes_fragment:Xx,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:Kx,color_fragment:jx,color_pars_fragment:Jx,color_pars_vertex:Zx,color_vertex:$x,common:Qx,cube_uv_reflection_fragment:eg,defaultnormal_vertex:tg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:sg,emissivemap_pars_fragment:rg,colorspace_fragment:ag,colorspace_pars_fragment:og,envmap_fragment:lg,envmap_common_pars_fragment:cg,envmap_pars_fragment:hg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:bg,envmap_vertex:fg,fog_vertex:dg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:xg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:_g,lights_lambert_fragment:vg,lights_lambert_pars_fragment:yg,lights_pars_begin:Mg,lights_toon_fragment:Sg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Eg,lights_phong_pars_fragment:wg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Rg,lights_fragment_begin:Cg,lights_fragment_maps:Pg,lights_fragment_end:Lg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ig,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Ug,map_fragment:Fg,map_pars_fragment:Og,map_particle_fragment:Bg,map_particle_pars_fragment:zg,metalnessmap_fragment:kg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Hg,morphcolor_vertex:Gg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:qg,normal_fragment_begin:Yg,normal_fragment_maps:Kg,normal_pars_fragment:jg,normal_pars_vertex:Jg,normal_vertex:Zg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:e_,clearcoat_pars_fragment:t_,iridescence_pars_fragment:n_,opaque_fragment:i_,packing:s_,premultiplied_alpha_fragment:r_,project_vertex:a_,dithering_fragment:o_,dithering_pars_fragment:l_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:h_,shadowmap_pars_fragment:u_,shadowmap_pars_vertex:f_,shadowmap_vertex:d_,shadowmask_pars_fragment:p_,skinbase_vertex:m_,skinning_pars_vertex:x_,skinning_vertex:g_,skinnormal_vertex:__,specularmap_fragment:v_,specularmap_pars_fragment:y_,tonemapping_fragment:M_,tonemapping_pars_fragment:b_,transmission_fragment:S_,transmission_pars_fragment:T_,uv_pars_fragment:E_,uv_pars_vertex:w_,uv_vertex:A_,worldpos_vertex:R_,background_vert:C_,background_frag:P_,backgroundCube_vert:L_,backgroundCube_frag:D_,cube_vert:I_,cube_frag:N_,depth_vert:U_,depth_frag:F_,distanceRGBA_vert:O_,distanceRGBA_frag:B_,equirect_vert:z_,equirect_frag:k_,linedashed_vert:V_,linedashed_frag:H_,meshbasic_vert:G_,meshbasic_frag:W_,meshlambert_vert:X_,meshlambert_frag:q_,meshmatcap_vert:Y_,meshmatcap_frag:K_,meshnormal_vert:j_,meshnormal_frag:J_,meshphong_vert:Z_,meshphong_frag:$_,meshphysical_vert:Q_,meshphysical_frag:ev,meshtoon_vert:tv,meshtoon_frag:nv,points_vert:iv,points_frag:sv,shadow_vert:rv,shadow_frag:av,sprite_vert:ov,sprite_frag:lv},pe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Gn={basic:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Yt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Yt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Yt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Yt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Yt([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Yt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Yt([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Yt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Yt([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Yt([pe.common,pe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Yt([pe.lights,pe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Gn.physical={uniforms:Yt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const La={r:0,b:0,g:0},Wi=new On,cv=new Xe;function hv(r,e,t,n,i,s,a){const o=new Fe(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function x(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function g(_){let y=!1;const E=x(_);E===null?p(o,l):E&&E.isColor&&(p(E,1),y=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,y){const E=x(y);E&&(E.isCubeTexture||E.mapping===ro)?(h===void 0&&(h=new Qe(new sr(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Xs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Wi.copy(y.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cv.makeRotationFromEuler(Wi)),h.material.toneMapped=nt.getTransfer(E.colorSpace)!==ht,(u!==E||f!==E.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Qe(new bn(2,2),new Bn({name:"BackgroundMaterial",uniforms:Xs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(La,kf(r)),n.buffers.color.setClear(La.r,La.g,La.b,y,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:g,addToRenderList:m,dispose:b}}function uv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(M,L,I,U,F){let B=!1;const k=u(U,I,L);s!==k&&(s=k,c(s.object)),B=d(M,U,I,F),B&&x(M,U,I,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(M,L,I,U),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,L,I){const U=I.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let B=F[L.id];B===void 0&&(B={},F[L.id]=B);let k=B[U];return k===void 0&&(k=f(l()),B[U]=k),k}function f(M){const L=[],I=[],U=[];for(let F=0;F<t;F++)L[F]=0,I[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,L,I,U){const F=s.attributes,B=L.attributes;let k=0;const X=I.getAttributes();for(const H in X)if(X[H].location>=0){const ie=F[H];let xe=B[H];if(xe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),ie===void 0||ie.attribute!==xe||xe&&ie.data!==xe.data)return!0;k++}return s.attributesNum!==k||s.index!==U}function x(M,L,I,U){const F={},B=L.attributes;let k=0;const X=I.getAttributes();for(const H in X)if(X[H].location>=0){let ie=B[H];ie===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const xe={};xe.attribute=ie,ie&&ie.data&&(xe.data=ie.data),F[H]=xe,k++}s.attributes=F,s.attributesNum=k,s.index=U}function g(){const M=s.newAttributes;for(let L=0,I=M.length;L<I;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const I=s.newAttributes,U=s.enabledAttributes,F=s.attributeDivisors;I[M]=1,U[M]===0&&(r.enableVertexAttribArray(M),U[M]=1),F[M]!==L&&(r.vertexAttribDivisor(M,L),F[M]=L)}function b(){const M=s.newAttributes,L=s.enabledAttributes;for(let I=0,U=L.length;I<U;I++)L[I]!==M[I]&&(r.disableVertexAttribArray(I),L[I]=0)}function _(M,L,I,U,F,B,k){k===!0?r.vertexAttribIPointer(M,L,I,F,B):r.vertexAttribPointer(M,L,I,U,F,B)}function y(M,L,I,U){g();const F=U.attributes,B=I.getAttributes(),k=L.defaultAttributeValues;for(const X in B){const H=B[X];if(H.location>=0){let ne=F[X];if(ne===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const ie=ne.normalized,xe=ne.itemSize,Ae=e.get(ne);if(Ae===void 0)continue;const Le=Ae.buffer,Ve=Ae.type,je=Ae.bytesPerElement,K=Ve===r.INT||Ve===r.UNSIGNED_INT||ne.gpuType===Oc;if(ne.isInterleavedBufferAttribute){const Z=ne.data,_e=Z.stride,Pe=ne.offset;if(Z.isInstancedInterleavedBuffer){for(let Se=0;Se<H.locationSize;Se++)p(H.location+Se,Z.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Se=0;Se<H.locationSize;Se++)m(H.location+Se);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let Se=0;Se<H.locationSize;Se++)_(H.location+Se,xe/H.locationSize,Ve,ie,_e*je,(Pe+xe/H.locationSize*Se)*je,K)}else{if(ne.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)p(H.location+Z,ne.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let Z=0;Z<H.locationSize;Z++)_(H.location+Z,xe/H.locationSize,Ve,ie,xe*je,xe/H.locationSize*Z*je,K)}}else if(k!==void 0){const ie=k[X];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(H.location,ie);break;case 3:r.vertexAttrib3fv(H.location,ie);break;case 4:r.vertexAttrib4fv(H.location,ie);break;default:r.vertexAttrib1fv(H.location,ie)}}}}b()}function E(){R();for(const M in n){const L=n[M];for(const I in L){const U=L[I];for(const F in U)h(U[F].object),delete U[F];delete L[I]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const I in L){const U=L[I];for(const F in U)h(U[F].object),delete U[F];delete L[I]}delete n[M.id]}function A(M){for(const L in n){const I=n[L];if(I[M.id]===void 0)continue;const U=I[M.id];for(const F in U)h(U[F].object),delete U[F];delete I[M.id]}}function R(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function fv(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g]*f[g];t.update(x,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Tn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Jn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==en&&!R)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=x>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:E,maxSamples:T}}function pv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ji,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||x===null||x.length===0||s&&!m)s?h(null):c();else{const b=s?0:n,_=b*4;let y=p.clippingState||null;l.value=y,y=h(x,f,_,d);for(let E=0;E!==_;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const p=d+g*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=d;_!==g;++_,y+=4)a.copy(u[_]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function mv(r){let e=new WeakMap;function t(a,o){return o===El?a.mapping=Vs:o===wl&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===El||o===wl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qm(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ai=4,Du=[.125,.215,.35,.446,.526,.582],$i=20,xv=512,gr=new sh,Iu=new Fe;let Jo=null,Zo=0,$o=0,Qo=!1;const gv=new N;class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=gv}=s;Jo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Zo,$o),this._renderer.xr.enabled=Qo,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:qn,format:Tn,colorSpace:Wt,depthBuffer:!1},i=Nu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_v(s)),this._blurMaterial=yv(s,e,t)}return i}_compileMaterial(e){const t=new Qe(new ln,e);this._renderer.compile(t,gr)}_sceneToCubeUV(e,t,n,i,s){const l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Iu),u.toneMapping=Li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qe(new sr,new dt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(Iu),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const E=this._cubeSize;Cs(i,y*E,_>2?E:0,E,E),u.setRenderTarget(i),p&&u.render(g,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vs||e.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,gr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const b=3*Math.max(this._cubeSize,16),_=4*this._cubeSize;this._ggxMaterial=vv(this._lodMax,b,_)}const a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=.05+c*.95,d=u*f,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-Ai?n-x+Ai:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=x-t,Cs(s,m,p,3*g,2*g),i.setRenderTarget(s),i.render(o,gr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Cs(e,m,p,3*g,2*g),i.setRenderTarget(e),i.render(o,gr)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*$i-1),g=s/x,m=isFinite(s)?1+Math.floor(h*g):$i;m>$i&&Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let b=0;for(let A=0;A<$i;++A){const R=A/g,v=Math.exp(-R*R/2);p.push(v),A===0?b+=v:A<m&&(b+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;const y=this._sizeLods[i],E=3*y*(i>_-Ai?i-_+Ai:0),T=4*(this._cubeSize-y);Cs(t,E,T,3*y,2*y),l.setRenderTarget(t),l.render(u,gr)}}function _v(r){const e=[],t=[],n=[];let i=r;const s=r-Ai+1+Du.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ai?l=Du[a-r+Ai-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,g=3,m=2,p=1,b=new Float32Array(g*x*d),_=new Float32Array(m*x*d),y=new Float32Array(p*x*d);for(let T=0;T<d;T++){const A=T%3*2/3-1,R=T>2?0:-1,v=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];b.set(v,g*x*T),_.set(f,m*x*T);const M=[T,T,T,T,T,T];y.set(M,p*x*T)}const E=new ln;E.setAttribute("position",new Zt(b,g)),E.setAttribute("uv",new Zt(_,m)),E.setAttribute("faceIndex",new Zt(y,p)),n.push(new Qe(E,null)),i>Ai&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Nu(r,e,t){const n=new os(r,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function vv(r,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function yv(r,e,t){const n=new Float32Array($i),i=new N(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Uu(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Fu(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===El||l===wl,h=l===Vs||l===Hs;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new uc(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new uc(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function bv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&kr("WebGLRenderer: "+n+" extension not supported."),i}}}function Sv(r,e,t,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,x=u.attributes.position;let g=0;if(d!==null){const b=d.array;g=d.version;for(let _=0,y=b.length;_<y;_+=3){const E=b[_+0],T=b[_+1],A=b[_+2];f.push(E,T,T,A,A,E)}}else if(x!==void 0){const b=x.array;g=x.version;for(let _=0,y=b.length/3-1;_<y;_+=3){const E=_+0,T=_+1,A=_+2;f.push(E,T,T,A,A,E)}}else return;const m=new(Uf(f)?zf:Bf)(f,1);m.version=g;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Tv(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,x){x!==0&&(r.drawElementsInstanced(n,d,s,f*a,x),t.update(d,n,x))}function h(f,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];t.update(m,n,1)}function u(f,d,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,x);let p=0;for(let b=0;b<x;b++)p+=d[b]*g[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ev(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wv(r,e,t){const n=new WeakMap,i=new st;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;x===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let E=o.attributes.position.count*y,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*T*4*u),R=new Ff(A,E,T,u);R.type=en,R.needsUpdate=!0;const v=y*4;for(let L=0;L<u;L++){const I=p[L],U=b[L],F=_[L],B=E*T*4*L;for(let k=0;k<I.count;k++){const X=k*v;x===!0&&(i.fromBufferAttribute(I,k),A[B+X+0]=i.x,A[B+X+1]=i.y,A[B+X+2]=i.z,A[B+X+3]=0),g===!0&&(i.fromBufferAttribute(U,k),A[B+X+4]=i.x,A[B+X+5]=i.y,A[B+X+6]=i.z,A[B+X+7]=0),m===!0&&(i.fromBufferAttribute(F,k),A[B+X+8]=i.x,A[B+X+9]=i.y,A[B+X+10]=i.z,A[B+X+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:R,size:new ue(E,T)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const g=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Av(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const od=new Ut,Ou=new qf(1,1),ld=new Ff,cd=new Im,hd=new Hf,Bu=[],zu=[],ku=new Float32Array(16),Vu=new Float32Array(9),Hu=new Float32Array(4);function or(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Bu[i];if(s===void 0&&(s=new Float32Array(i),Bu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function uo(r,e){let t=zu[e];t===void 0&&(t=new Int32Array(e),zu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Rv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2fv(this.addr,e),Lt(t,e)}}function Pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;r.uniform3fv(this.addr,e),Lt(t,e)}}function Lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4fv(this.addr,e),Lt(t,e)}}function Dv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Hu.set(n),r.uniformMatrix2fv(this.addr,!1,Hu),Lt(t,n)}}function Iv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Vu.set(n),r.uniformMatrix3fv(this.addr,!1,Vu),Lt(t,n)}}function Nv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;ku.set(n),r.uniformMatrix4fv(this.addr,!1,ku),Lt(t,n)}}function Uv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2iv(this.addr,e),Lt(t,e)}}function Ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3iv(this.addr,e),Lt(t,e)}}function Bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4iv(this.addr,e),Lt(t,e)}}function zv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2uiv(this.addr,e),Lt(t,e)}}function Vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3uiv(this.addr,e),Lt(t,e)}}function Hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4uiv(this.addr,e),Lt(t,e)}}function Gv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ou.compareFunction=Nf,s=Ou):s=od,t.setTexture2D(e||s,i)}function Wv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cd,i)}function Xv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hd,i)}function qv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ld,i)}function Yv(r){switch(r){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Lv;case 35674:return Dv;case 35675:return Iv;case 35676:return Nv;case 5124:case 35670:return Uv;case 35667:case 35671:return Fv;case 35668:case 35672:return Ov;case 35669:case 35673:return Bv;case 5125:return zv;case 36294:return kv;case 36295:return Vv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}function Kv(r,e){r.uniform1fv(this.addr,e)}function jv(r,e){const t=or(e,this.size,2);r.uniform2fv(this.addr,t)}function Jv(r,e){const t=or(e,this.size,3);r.uniform3fv(this.addr,t)}function Zv(r,e){const t=or(e,this.size,4);r.uniform4fv(this.addr,t)}function $v(r,e){const t=or(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Qv(r,e){const t=or(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ey(r,e){const t=or(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ty(r,e){r.uniform1iv(this.addr,e)}function ny(r,e){r.uniform2iv(this.addr,e)}function iy(r,e){r.uniform3iv(this.addr,e)}function sy(r,e){r.uniform4iv(this.addr,e)}function ry(r,e){r.uniform1uiv(this.addr,e)}function ay(r,e){r.uniform2uiv(this.addr,e)}function oy(r,e){r.uniform3uiv(this.addr,e)}function ly(r,e){r.uniform4uiv(this.addr,e)}function cy(r,e,t){const n=this.cache,i=e.length,s=uo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||od,s[a])}function hy(r,e,t){const n=this.cache,i=e.length,s=uo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||cd,s[a])}function uy(r,e,t){const n=this.cache,i=e.length,s=uo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||hd,s[a])}function fy(r,e,t){const n=this.cache,i=e.length,s=uo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ld,s[a])}function dy(r){switch(r){case 5126:return Kv;case 35664:return jv;case 35665:return Jv;case 35666:return Zv;case 35674:return $v;case 35675:return Qv;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return ry;case 36294:return ay;case 36295:return oy;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return fy}}class py{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yv(t.type)}}class my{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dy(t.type)}}class xy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const el=/(\w+)(\])?(\[|\.)?/g;function Gu(r,e){r.seq.push(e),r.map[e.id]=e}function gy(r,e,t){const n=r.name,i=n.length;for(el.lastIndex=0;;){const s=el.exec(n),a=el.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Gu(t,c===void 0?new py(o,r,e):new my(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new xy(o),Gu(t,u)),t=u}}}class ka{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);gy(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Wu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const _y=37297;let vy=0;function yy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Xu=new qe;function My(r){nt._getMatrix(Xu,nt.workingColorSpace,r);const e=`mat3( ${Xu.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(r)){case Xa:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function qu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+yy(r.getShaderSource(e),o)}else return s}function by(r,e){const t=My(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sy(r,e){let t;switch(e){case Wp:t="Linear";break;case Xp:t="Reinhard";break;case qp:t="Cineon";break;case Tf:t="ACESFilmic";break;case Kp:t="AgX";break;case jp:t="Neutral";break;case Yp:t="Custom";break;default:Ce("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Da=new N;function Ty(){nt.getLuminanceCoefficients(Da);const r=Da.x.toFixed(4),e=Da.y.toFixed(4),t=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ey(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function wy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ay(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function br(r){return r!==""}function Yu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(r){return r.replace(Ry,Py)}const Cy=new Map;function Py(r,e){let t=Ye[e];if(t===void 0){const n=Cy.get(e);if(n!==void 0)t=Ye[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}const Ly=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(r){return r.replace(Ly,Dy)}function Dy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ju(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Iy(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Ny(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vs:case Hs:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Uy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function Fy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Fc:e="ENVMAP_BLENDING_MULTIPLY";break;case Hp:e="ENVMAP_BLENDING_MIX";break;case Gp:e="ENVMAP_BLENDING_ADD";break}return e}function Oy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function By(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Iy(t),c=Ny(t),h=Uy(t),u=Fy(t),f=Oy(t),d=Ey(t),x=wy(s),g=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(br).join(`
`),p.length>0&&(p+=`
`)):(m=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Li?Sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,by("linearToOutputTexel",t.outputColorSpace),Ty(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=fc(a),a=Yu(a,t),a=Ku(a,t),o=fc(o),o=Yu(o,t),o=Ku(o,t),a=ju(a),o=ju(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=b+m+a,y=b+p+o,E=Wu(i,i.VERTEX_SHADER,_),T=Wu(i,i.FRAGMENT_SHADER,y);i.attachShader(g,E),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(L){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(E)||"",F=i.getShaderInfoLog(T)||"",B=I.trim(),k=U.trim(),X=F.trim();let H=!0,ne=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,E,T);else{const ie=qu(i,E,"vertex"),xe=qu(i,T,"fragment");Je("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+ie+`
`+xe)}else B!==""?Ce("WebGLProgram: Program Info Log:",B):(k===""||X==="")&&(ne=!1);ne&&(L.diagnostics={runnable:H,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(E),i.deleteShader(T),R=new ka(i,g),v=Ay(i,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,_y)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=T,this}let zy=0;class ky{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vy(e),t.set(e,n)),n}}class Vy{constructor(e){this.id=zy++,this.code=e,this.usedTimes=0}}function Hy(r,e,t,n,i,s,a){const o=new Kc,l=new ky,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,M,L,I,U){const F=I.fog,B=U.geometry,k=v.isMeshStandardMaterial?I.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),H=X&&X.mapping===ro?X.image.height:null,ne=x[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,xe=ie!==void 0?ie.length:0;let Ae=0;B.morphAttributes.position!==void 0&&(Ae=1),B.morphAttributes.normal!==void 0&&(Ae=2),B.morphAttributes.color!==void 0&&(Ae=3);let Le,Ve,je,K;if(ne){const lt=Gn[ne];Le=lt.vertexShader,Ve=lt.fragmentShader}else Le=v.vertexShader,Ve=v.fragmentShader,l.update(v),je=l.getVertexShaderID(v),K=l.getFragmentShaderID(v);const Z=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Pe=U.isInstancedMesh===!0,Se=U.isBatchedMesh===!0,We=!!v.map,rt=!!v.matcap,Oe=!!X,$=!!v.aoMap,C=!!v.lightMap,j=!!v.bumpMap,se=!!v.normalMap,re=!!v.displacementMap,ee=!!v.emissiveMap,be=!!v.metalnessMap,fe=!!v.roughnessMap,ye=v.anisotropy>0,P=v.clearcoat>0,S=v.dispersion>0,V=v.iridescence>0,Y=v.sheen>0,Q=v.transmission>0,q=ye&&!!v.anisotropyMap,Re=P&&!!v.clearcoatMap,de=P&&!!v.clearcoatNormalMap,De=P&&!!v.clearcoatRoughnessMap,we=V&&!!v.iridescenceMap,te=V&&!!v.iridescenceThicknessMap,le=Y&&!!v.sheenColorMap,ze=Y&&!!v.sheenRoughnessMap,Ue=!!v.specularMap,ve=!!v.specularColorMap,He=!!v.specularIntensityMap,D=Q&&!!v.transmissionMap,me=Q&&!!v.thicknessMap,ce=!!v.gradientMap,he=!!v.alphaMap,ae=v.alphaTest>0,J=!!v.alphaHash,Te=!!v.extensions;let Ge=Li;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ge=r.toneMapping);const mt={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:Le,fragmentShader:Ve,defines:v.defines,customVertexShaderID:je,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Se,batchingColor:Se&&U._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&U.instanceColor!==null,instancingMorph:Pe&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Wt,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:rt,envMap:Oe,envMapMode:Oe&&X.mapping,envMapCubeUVHeight:H,aoMap:$,lightMap:C,bumpMap:j,normalMap:se,displacementMap:f&&re,emissiveMap:ee,normalMapObjectSpace:se&&v.normalMapType===tm,normalMapTangentSpace:se&&v.normalMapType===Xc,metalnessMap:be,roughnessMap:fe,anisotropy:ye,anisotropyMap:q,clearcoat:P,clearcoatMap:Re,clearcoatNormalMap:de,clearcoatRoughnessMap:De,dispersion:S,iridescence:V,iridescenceMap:we,iridescenceThicknessMap:te,sheen:Y,sheenColorMap:le,sheenRoughnessMap:ze,specularMap:Ue,specularColorMap:ve,specularIntensityMap:He,transmission:Q,transmissionMap:D,thicknessMap:me,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Ns&&v.alphaToCoverage===!1,alphaMap:he,alphaTest:ae,alphaHash:J,combine:v.combine,mapUv:We&&g(v.map.channel),aoMapUv:$&&g(v.aoMap.channel),lightMapUv:C&&g(v.lightMap.channel),bumpMapUv:j&&g(v.bumpMap.channel),normalMapUv:se&&g(v.normalMap.channel),displacementMapUv:re&&g(v.displacementMap.channel),emissiveMapUv:ee&&g(v.emissiveMap.channel),metalnessMapUv:be&&g(v.metalnessMap.channel),roughnessMapUv:fe&&g(v.roughnessMap.channel),anisotropyMapUv:q&&g(v.anisotropyMap.channel),clearcoatMapUv:Re&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ze&&g(v.sheenRoughnessMap.channel),specularMapUv:Ue&&g(v.specularMap.channel),specularColorMapUv:ve&&g(v.specularColorMap.channel),specularIntensityMapUv:He&&g(v.specularIntensityMap.channel),transmissionMapUv:D&&g(v.transmissionMap.channel),thicknessMapUv:me&&g(v.thicknessMap.channel),alphaMapUv:he&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(se||ye),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(We||he),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ge,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===ht,decodeVideoTextureEmissive:ee&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ot,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Te&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&v.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)M.push(L),M.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(b(M,v),_(M,v),M.push(r.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function b(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function _(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const M=x[v.type];let L;if(M){const I=Gn[M];L=jm.clone(I.uniforms)}else L=v.uniforms;return L}function E(v,M){let L;for(let I=0,U=h.length;I<U;I++){const F=h[I];if(F.cacheKey===M){L=F,++L.usedTimes;break}}return L===void 0&&(L=new By(r,M,v,s),h.push(L)),L}function T(v){if(--v.usedTimes===0){const M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function A(v){l.remove(v)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:R}}function Gy(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Wy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $u(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,x,g,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,f,d,x,g,m){const p=a(u,f,d,x,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,x,g,m){const p=a(u,f,d,x,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||Wy),n.length>1&&n.sort(f||Zu),i.length>1&&i.sort(f||Zu)}function h(){for(let u=e,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Xy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new $u,r.set(n,[a])):i>=s.length?(a=new $u,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function qy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Fe};break;case"SpotLight":t={position:new N,direction:new N,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function Yy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ky=0;function jy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Jy(r){const e=new qy,t=Yy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new Xe,a=new Xe;function o(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,x=0,g=0,m=0,p=0,b=0,_=0,y=0,E=0,T=0,A=0;c.sort(jy);for(let v=0,M=c.length;v<M;v++){const L=c[v],I=L.color,U=L.intensity,F=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=I.r*U,u+=I.g*U,f+=I.b*U;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],U);A++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,H=t.get(L);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=L.shadow.matrix,b++}n.directional[d]=k,d++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(I).multiplyScalar(U),k.distance=F,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[g]=k;const X=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,X.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[g]=X.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=B,y++}g++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(I).multiplyScalar(U),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=k,m++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const X=L.shadow,H=t.get(L);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=B,n.pointShadowMatrix[x]=L.shadow.matrix,_++}n.point[x]=k,x++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(U),k.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[p]=k,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==x||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==_||R.numSpotShadows!==y||R.numSpotMaps!==E||R.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,R.directionalLength=d,R.pointLength=x,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=_,R.numSpotShadows=y,R.numSpotMaps=E,R.numLightProbes=A,n.version=Ky++)}function l(c,h){let u=0,f=0,d=0,x=0,g=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const _=c[p];if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(_.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Qu(r){const e=new Jy(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Zy(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Qu(r),e.set(i,[o])):s>=a.length?(o=new Qu(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const $y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eM(r,e,t){let n=new Zc;const i=new ue,s=new ue,a=new st,o=new Y0({depthPacking:em}),l=new K0,c={},h=t.maxTextureSize,u={[Rn]:tn,[tn]:Rn,[Ot]:Ot},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:$y,fragmentShader:Qy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const x=new ln;x.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Qe(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let p=this.type;this.render=function(T,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const v=r.getRenderTarget(),M=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),I=r.state;I.setBlending(pi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==ci&&this.type===ci,F=p===ci&&this.type!==ci;for(let B=0,k=T.length;B<k;B++){const X=T[B],H=X.shadow;if(H===void 0){Ce("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ne=H.getFrameExtents();if(i.multiply(ne),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,H.mapSize.y=s.y)),H.map===null||U===!0||F===!0){const xe=this.type!==ci?{minFilter:Jt,magFilter:Jt}:{};H.map!==null&&H.map.dispose(),H.map=new os(i.x,i.y,xe),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const ie=H.getViewportCount();for(let xe=0;xe<ie;xe++){const Ae=H.getViewport(xe);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),I.viewport(a),H.updateMatrices(X,xe),n=H.getFrustum(),y(A,R,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===ci&&b(H,R),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,M,L)};function b(T,A){const R=e.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new os(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,R,f,g,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,R,d,g,null)}function _(T,A,R,v){let M=null;const L=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=M.uuid,U=A.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let B=F[U];B===void 0&&(B=M.clone(),F[U]=B,A.addEventListener("dispose",E)),M=B}if(M.visible=A.visible,M.wireframe=A.wireframe,v===ci?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=r.properties.get(M);I.light=R}return M}function y(T,A,R,v,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ci)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const U=e.update(T),F=T.material;if(Array.isArray(F)){const B=U.groups;for(let k=0,X=B.length;k<X;k++){const H=B[k],ne=F[H.materialIndex];if(ne&&ne.visible){const ie=_(T,ne,v,M);T.onBeforeShadow(r,T,A,R,U,ie,H),r.renderBufferDirect(R,null,U,ie,T,H),T.onAfterShadow(r,T,A,R,U,ie,H)}}}else if(F.visible){const B=_(T,F,v,M);T.onBeforeShadow(r,T,A,R,U,B,null),r.renderBufferDirect(R,null,U,B,T,null),T.onAfterShadow(r,T,A,R,U,B,null)}}const I=T.children;for(let U=0,F=I.length;U<F;U++)y(I[U],A,R,v,M)}function E(T){T.target.removeEventListener("dispose",E);for(const R in c){const v=c[R],M=T.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const tM={[_l]:vl,[yl]:Sl,[Ml]:Tl,[ks]:bl,[vl]:_l,[Sl]:yl,[Tl]:Ml,[bl]:ks};function nM(r,e){function t(){let D=!1;const me=new st;let ce=null;const he=new st(0,0,0,0);return{setMask:function(ae){ce!==ae&&!D&&(r.colorMask(ae,ae,ae,ae),ce=ae)},setLocked:function(ae){D=ae},setClear:function(ae,J,Te,Ge,mt){mt===!0&&(ae*=Ge,J*=Ge,Te*=Ge),me.set(ae,J,Te,Ge),he.equals(me)===!1&&(r.clearColor(ae,J,Te,Ge),he.copy(me))},reset:function(){D=!1,ce=null,he.set(-1,0,0,0)}}}function n(){let D=!1,me=!1,ce=null,he=null,ae=null;return{setReversed:function(J){if(me!==J){const Te=e.get("EXT_clip_control");J?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),me=J;const Ge=ae;ae=null,this.setClear(Ge)}},getReversed:function(){return me},setTest:function(J){J?Z(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(J){ce!==J&&!D&&(r.depthMask(J),ce=J)},setFunc:function(J){if(me&&(J=tM[J]),he!==J){switch(J){case _l:r.depthFunc(r.NEVER);break;case vl:r.depthFunc(r.ALWAYS);break;case yl:r.depthFunc(r.LESS);break;case ks:r.depthFunc(r.LEQUAL);break;case Ml:r.depthFunc(r.EQUAL);break;case bl:r.depthFunc(r.GEQUAL);break;case Sl:r.depthFunc(r.GREATER);break;case Tl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=J}},setLocked:function(J){D=J},setClear:function(J){ae!==J&&(me&&(J=1-J),r.clearDepth(J),ae=J)},reset:function(){D=!1,ce=null,he=null,ae=null,me=!1}}}function i(){let D=!1,me=null,ce=null,he=null,ae=null,J=null,Te=null,Ge=null,mt=null;return{setTest:function(lt){D||(lt?Z(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(lt){me!==lt&&!D&&(r.stencilMask(lt),me=lt)},setFunc:function(lt,kn,Pn){(ce!==lt||he!==kn||ae!==Pn)&&(r.stencilFunc(lt,kn,Pn),ce=lt,he=kn,ae=Pn)},setOp:function(lt,kn,Pn){(J!==lt||Te!==kn||Ge!==Pn)&&(r.stencilOp(lt,kn,Pn),J=lt,Te=kn,Ge=Pn)},setLocked:function(lt){D=lt},setClear:function(lt){mt!==lt&&(r.clearStencil(lt),mt=lt)},reset:function(){D=!1,me=null,ce=null,he=null,ae=null,J=null,Te=null,Ge=null,mt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],x=null,g=!1,m=null,p=null,b=null,_=null,y=null,E=null,T=null,A=new Fe(0,0,0),R=0,v=!1,M=null,L=null,I=null,U=null,F=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=X>=2);let ne=null,ie={};const xe=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),Le=new st().fromArray(xe),Ve=new st().fromArray(Ae);function je(D,me,ce,he){const ae=new Uint8Array(4),J=r.createTexture();r.bindTexture(D,J),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Te=0;Te<ce;Te++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(me+Te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return J}const K={};K[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(ks),j(!1),se(Dh),Z(r.CULL_FACE),$(pi);function Z(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function _e(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Pe(D,me){return u[D]!==me?(r.bindFramebuffer(D,me),u[D]=me,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=me),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=me),!0):!1}function Se(D,me){let ce=d,he=!1;if(D){ce=f.get(me),ce===void 0&&(ce=[],f.set(me,ce));const ae=D.textures;if(ce.length!==ae.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Te=ae.length;J<Te;J++)ce[J]=r.COLOR_ATTACHMENT0+J;ce.length=ae.length,he=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,he=!0);he&&r.drawBuffers(ce)}function We(D){return x!==D?(r.useProgram(D),x=D,!0):!1}const rt={[Zi]:r.FUNC_ADD,[Ep]:r.FUNC_SUBTRACT,[wp]:r.FUNC_REVERSE_SUBTRACT};rt[Ap]=r.MIN,rt[Rp]=r.MAX;const Oe={[Cp]:r.ZERO,[Pp]:r.ONE,[Lp]:r.SRC_COLOR,[xl]:r.SRC_ALPHA,[Op]:r.SRC_ALPHA_SATURATE,[Up]:r.DST_COLOR,[Ip]:r.DST_ALPHA,[Dp]:r.ONE_MINUS_SRC_COLOR,[gl]:r.ONE_MINUS_SRC_ALPHA,[Fp]:r.ONE_MINUS_DST_COLOR,[Np]:r.ONE_MINUS_DST_ALPHA,[Bp]:r.CONSTANT_COLOR,[zp]:r.ONE_MINUS_CONSTANT_COLOR,[kp]:r.CONSTANT_ALPHA,[Vp]:r.ONE_MINUS_CONSTANT_ALPHA};function $(D,me,ce,he,ae,J,Te,Ge,mt,lt){if(D===pi){g===!0&&(_e(r.BLEND),g=!1);return}if(g===!1&&(Z(r.BLEND),g=!0),D!==Tp){if(D!==m||lt!==v){if((p!==Zi||y!==Zi)&&(r.blendEquation(r.FUNC_ADD),p=Zi,y=Zi),lt)switch(D){case Ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ih:r.blendFunc(r.ONE,r.ONE);break;case Nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Je("WebGLState: Invalid blending: ",D);break}else switch(D){case Ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ih:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Nh:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uh:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",D);break}b=null,_=null,E=null,T=null,A.set(0,0,0),R=0,m=D,v=lt}return}ae=ae||me,J=J||ce,Te=Te||he,(me!==p||ae!==y)&&(r.blendEquationSeparate(rt[me],rt[ae]),p=me,y=ae),(ce!==b||he!==_||J!==E||Te!==T)&&(r.blendFuncSeparate(Oe[ce],Oe[he],Oe[J],Oe[Te]),b=ce,_=he,E=J,T=Te),(Ge.equals(A)===!1||mt!==R)&&(r.blendColor(Ge.r,Ge.g,Ge.b,mt),A.copy(Ge),R=mt),m=D,v=!1}function C(D,me){D.side===Ot?_e(r.CULL_FACE):Z(r.CULL_FACE);let ce=D.side===tn;me&&(ce=!ce),j(ce),D.blending===Ns&&D.transparent===!1?$(pi):$(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const he=D.stencilWrite;o.setTest(he),he&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function j(D){M!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),M=D)}function se(D){D!==Mp?(Z(r.CULL_FACE),D!==L&&(D===Dh?r.cullFace(r.BACK):D===bp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),L=D}function re(D){D!==I&&(k&&r.lineWidth(D),I=D)}function ee(D,me,ce){D?(Z(r.POLYGON_OFFSET_FILL),(U!==me||F!==ce)&&(r.polygonOffset(me,ce),U=me,F=ce)):_e(r.POLYGON_OFFSET_FILL)}function be(D){D?Z(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function fe(D){D===void 0&&(D=r.TEXTURE0+B-1),ne!==D&&(r.activeTexture(D),ne=D)}function ye(D,me,ce){ce===void 0&&(ne===null?ce=r.TEXTURE0+B-1:ce=ne);let he=ie[ce];he===void 0&&(he={type:void 0,texture:void 0},ie[ce]=he),(he.type!==D||he.texture!==me)&&(ne!==ce&&(r.activeTexture(ce),ne=ce),r.bindTexture(D,me||K[D]),he.type=D,he.texture=me)}function P(){const D=ie[ne];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function V(){try{r.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function Y(){try{r.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Q(){try{r.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Re(){try{r.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function de(){try{r.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function De(){try{r.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function we(){try{r.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function te(){try{r.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function le(D){Le.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Le.copy(D))}function ze(D){Ve.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ve.copy(D))}function Ue(D,me){let ce=c.get(me);ce===void 0&&(ce=new WeakMap,c.set(me,ce));let he=ce.get(D);he===void 0&&(he=r.getUniformBlockIndex(me,D.name),ce.set(D,he))}function ve(D,me){const he=c.get(me).get(D);l.get(me)!==he&&(r.uniformBlockBinding(me,he,D.__bindingPointIndex),l.set(me,he))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,ie={},u={},f=new WeakMap,d=[],x=null,g=!1,m=null,p=null,b=null,_=null,y=null,E=null,T=null,A=new Fe(0,0,0),R=0,v=!1,M=null,L=null,I=null,U=null,F=null,Le.set(0,0,r.canvas.width,r.canvas.height),Ve.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:_e,bindFramebuffer:Pe,drawBuffers:Se,useProgram:We,setBlending:$,setMaterial:C,setFlipSided:j,setCullFace:se,setLineWidth:re,setPolygonOffset:ee,setScissorTest:be,activeTexture:fe,bindTexture:ye,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:we,texImage3D:te,updateUBOMapping:Ue,uniformBlockBinding:ve,texStorage2D:de,texStorage3D:De,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Re,scissor:le,viewport:ze,reset:He}}function iM(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,S){return d?new OffscreenCanvas(P,S):zr("canvas")}function g(P,S,V){let Y=1;const Q=ye(P);if((Q.width>V||Q.height>V)&&(Y=V/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(Y*Q.width),Re=Math.floor(Y*Q.height);u===void 0&&(u=x(q,Re));const de=S?x(q,Re):u;return de.width=q,de.height=Re,de.getContext("2d").drawImage(P,0,0,q,Re),Ce("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Re+")."),de}else return"data"in P&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(P,S,V,Y,Q=!1){if(P!==null){if(r[P]!==void 0)return r[P];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=S;if(S===r.RED&&(V===r.FLOAT&&(q=r.R32F),V===r.HALF_FLOAT&&(q=r.R16F),V===r.UNSIGNED_BYTE&&(q=r.R8)),S===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(q=r.R8UI),V===r.UNSIGNED_SHORT&&(q=r.R16UI),V===r.UNSIGNED_INT&&(q=r.R32UI),V===r.BYTE&&(q=r.R8I),V===r.SHORT&&(q=r.R16I),V===r.INT&&(q=r.R32I)),S===r.RG&&(V===r.FLOAT&&(q=r.RG32F),V===r.HALF_FLOAT&&(q=r.RG16F),V===r.UNSIGNED_BYTE&&(q=r.RG8)),S===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(q=r.RG8UI),V===r.UNSIGNED_SHORT&&(q=r.RG16UI),V===r.UNSIGNED_INT&&(q=r.RG32UI),V===r.BYTE&&(q=r.RG8I),V===r.SHORT&&(q=r.RG16I),V===r.INT&&(q=r.RG32I)),S===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(q=r.RGB8UI),V===r.UNSIGNED_SHORT&&(q=r.RGB16UI),V===r.UNSIGNED_INT&&(q=r.RGB32UI),V===r.BYTE&&(q=r.RGB8I),V===r.SHORT&&(q=r.RGB16I),V===r.INT&&(q=r.RGB32I)),S===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),V===r.UNSIGNED_INT&&(q=r.RGBA32UI),V===r.BYTE&&(q=r.RGBA8I),V===r.SHORT&&(q=r.RGBA16I),V===r.INT&&(q=r.RGBA32I)),S===r.RGB&&(V===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),S===r.RGBA){const Re=Q?Xa:nt.getTransfer(Y);V===r.FLOAT&&(q=r.RGBA32F),V===r.HALF_FLOAT&&(q=r.RGBA16F),V===r.UNSIGNED_BYTE&&(q=Re===ht?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(P,S){let V;return P?S===null||S===as||S===Nr?V=r.DEPTH24_STENCIL8:S===en?V=r.DEPTH32F_STENCIL8:S===Ir&&(V=r.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===as||S===Nr?V=r.DEPTH_COMPONENT24:S===en?V=r.DEPTH_COMPONENT32F:S===Ir&&(V=r.DEPTH_COMPONENT16),V}function E(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==Ct?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){const S=P.target;S.removeEventListener("dispose",T),R(S),S.isVideoTexture&&h.delete(S)}function A(P){const S=P.target;S.removeEventListener("dispose",A),M(S)}function R(P){const S=n.get(P);if(S.__webglInit===void 0)return;const V=P.source,Y=f.get(V);if(Y){const Q=Y[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(P),Object.keys(Y).length===0&&f.delete(V)}n.remove(P)}function v(P){const S=n.get(P);r.deleteTexture(S.__webglTexture);const V=P.source,Y=f.get(V);delete Y[S.__cacheKey],a.memory.textures--}function M(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let Q=0;Q<S.__webglFramebuffer[Y].length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Y][Q]);else r.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)r.deleteFramebuffer(S.__webglFramebuffer[Y]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=P.textures;for(let Y=0,Q=V.length;Y<Q;Y++){const q=n.get(V[Y]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(P)}let L=0;function I(){L=0}function U(){const P=L;return P>=i.maxTextures&&Ce("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function F(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function B(P,S){const V=n.get(P);if(P.isVideoTexture&&be(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const Y=P.image;if(Y===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,P,S);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+S)}function k(P,S){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){K(V,P,S);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+S)}function X(P,S){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){K(V,P,S);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+S)}function H(P,S){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Z(V,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+S)}const ne={[Gs]:r.REPEAT,[Sn]:r.CLAMP_TO_EDGE,[Wa]:r.MIRRORED_REPEAT},ie={[Jt]:r.NEAREST,[wf]:r.NEAREST_MIPMAP_NEAREST,[yr]:r.NEAREST_MIPMAP_LINEAR,[Ct]:r.LINEAR,[Na]:r.LINEAR_MIPMAP_NEAREST,[Xn]:r.LINEAR_MIPMAP_LINEAR},xe={[nm]:r.NEVER,[lm]:r.ALWAYS,[im]:r.LESS,[Nf]:r.LEQUAL,[sm]:r.EQUAL,[om]:r.GEQUAL,[rm]:r.GREATER,[am]:r.NOTEQUAL};function Ae(P,S){if(S.type===en&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ct||S.magFilter===Na||S.magFilter===yr||S.magFilter===Xn||S.minFilter===Ct||S.minFilter===Na||S.minFilter===yr||S.minFilter===Xn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ne[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ne[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ne[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ie[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jt||S.minFilter!==yr&&S.minFilter!==Xn||S.type===en&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Le(P,S){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",T));const Y=S.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const q=F(S);if(q!==P.__cacheKey){Q[q]===void 0&&(Q[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[q].usedTimes++;const Re=Q[P.__cacheKey];Re!==void 0&&(Q[P.__cacheKey].usedTimes--,Re.usedTimes===0&&v(S)),P.__cacheKey=q,P.__webglTexture=Q[q].texture}return V}function Ve(P,S,V){return Math.floor(Math.floor(P/V)/S)}function je(P,S,V,Y){const q=P.updateRanges;if(q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,V,Y,S.data);else{q.sort((te,le)=>te.start-le.start);let Re=0;for(let te=1;te<q.length;te++){const le=q[Re],ze=q[te],Ue=le.start+le.count,ve=Ve(ze.start,S.width,4),He=Ve(le.start,S.width,4);ze.start<=Ue+1&&ve===He&&Ve(ze.start+ze.count-1,S.width,4)===ve?le.count=Math.max(le.count,ze.start+ze.count-le.start):(++Re,q[Re]=ze)}q.length=Re+1;const de=r.getParameter(r.UNPACK_ROW_LENGTH),De=r.getParameter(r.UNPACK_SKIP_PIXELS),we=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let te=0,le=q.length;te<le;te++){const ze=q[te],Ue=Math.floor(ze.start/4),ve=Math.ceil(ze.count/4),He=Ue%S.width,D=Math.floor(Ue/S.width),me=ve,ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,He),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,He,D,me,ce,V,Y,S.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,de),r.pixelStorei(r.UNPACK_SKIP_PIXELS,De),r.pixelStorei(r.UNPACK_SKIP_ROWS,we)}}function K(P,S,V){let Y=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=r.TEXTURE_3D);const Q=Le(P,S),q=S.source;t.bindTexture(Y,P.__webglTexture,r.TEXTURE0+V);const Re=n.get(q);if(q.version!==Re.__version||Q===!0){t.activeTexture(r.TEXTURE0+V);const de=nt.getPrimaries(nt.workingColorSpace),De=S.colorSpace===wi?null:nt.getPrimaries(S.colorSpace),we=S.colorSpace===wi||de===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let te=g(S.image,!1,i.maxTextureSize);te=fe(S,te);const le=s.convert(S.format,S.colorSpace),ze=s.convert(S.type);let Ue=_(S.internalFormat,le,ze,S.colorSpace,S.isVideoTexture);Ae(Y,S);let ve;const He=S.mipmaps,D=S.isVideoTexture!==!0,me=Re.__version===void 0||Q===!0,ce=q.dataReady,he=E(S,te);if(S.isDepthTexture)Ue=y(S.format===Fr,S.type),me&&(D?t.texStorage2D(r.TEXTURE_2D,1,Ue,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,Ue,te.width,te.height,0,le,ze,null));else if(S.isDataTexture)if(He.length>0){D&&me&&t.texStorage2D(r.TEXTURE_2D,he,Ue,He[0].width,He[0].height);for(let ae=0,J=He.length;ae<J;ae++)ve=He[ae],D?ce&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ve.width,ve.height,le,ze,ve.data):t.texImage2D(r.TEXTURE_2D,ae,Ue,ve.width,ve.height,0,le,ze,ve.data);S.generateMipmaps=!1}else D?(me&&t.texStorage2D(r.TEXTURE_2D,he,Ue,te.width,te.height),ce&&je(S,te,le,ze)):t.texImage2D(r.TEXTURE_2D,0,Ue,te.width,te.height,0,le,ze,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,Ue,He[0].width,He[0].height,te.depth);for(let ae=0,J=He.length;ae<J;ae++)if(ve=He[ae],S.format!==Tn)if(le!==null)if(D){if(ce)if(S.layerUpdates.size>0){const Te=Lu(ve.width,ve.height,S.format,S.type);for(const Ge of S.layerUpdates){const mt=ve.data.subarray(Ge*Te/ve.data.BYTES_PER_ELEMENT,(Ge+1)*Te/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,Ge,ve.width,ve.height,1,le,mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,te.depth,le,ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,Ue,ve.width,ve.height,te.depth,0,ve.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,te.depth,le,ze,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,Ue,ve.width,ve.height,te.depth,0,le,ze,ve.data)}else{D&&me&&t.texStorage2D(r.TEXTURE_2D,he,Ue,He[0].width,He[0].height);for(let ae=0,J=He.length;ae<J;ae++)ve=He[ae],S.format!==Tn?le!==null?D?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,ve.width,ve.height,le,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,Ue,ve.width,ve.height,0,ve.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ce&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ve.width,ve.height,le,ze,ve.data):t.texImage2D(r.TEXTURE_2D,ae,Ue,ve.width,ve.height,0,le,ze,ve.data)}else if(S.isDataArrayTexture)if(D){if(me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,Ue,te.width,te.height,te.depth),ce)if(S.layerUpdates.size>0){const ae=Lu(te.width,te.height,S.format,S.type);for(const J of S.layerUpdates){const Te=te.data.subarray(J*ae/te.data.BYTES_PER_ELEMENT,(J+1)*ae/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,le,ze,Te)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,ze,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,te.width,te.height,te.depth,0,le,ze,te.data);else if(S.isData3DTexture)D?(me&&t.texStorage3D(r.TEXTURE_3D,he,Ue,te.width,te.height,te.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,ze,te.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,te.width,te.height,te.depth,0,le,ze,te.data);else if(S.isFramebufferTexture){if(me)if(D)t.texStorage2D(r.TEXTURE_2D,he,Ue,te.width,te.height);else{let ae=te.width,J=te.height;for(let Te=0;Te<he;Te++)t.texImage2D(r.TEXTURE_2D,Te,Ue,ae,J,0,le,ze,null),ae>>=1,J>>=1}}else if(He.length>0){if(D&&me){const ae=ye(He[0]);t.texStorage2D(r.TEXTURE_2D,he,Ue,ae.width,ae.height)}for(let ae=0,J=He.length;ae<J;ae++)ve=He[ae],D?ce&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,le,ze,ve):t.texImage2D(r.TEXTURE_2D,ae,Ue,le,ze,ve);S.generateMipmaps=!1}else if(D){if(me){const ae=ye(te);t.texStorage2D(r.TEXTURE_2D,he,Ue,ae.width,ae.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,ze,te)}else t.texImage2D(r.TEXTURE_2D,0,Ue,le,ze,te);m(S)&&p(Y),Re.__version=q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Z(P,S,V){if(S.image.length!==6)return;const Y=Le(P,S),Q=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);const q=n.get(Q);if(Q.version!==q.__version||Y===!0){t.activeTexture(r.TEXTURE0+V);const Re=nt.getPrimaries(nt.workingColorSpace),de=S.colorSpace===wi?null:nt.getPrimaries(S.colorSpace),De=S.colorSpace===wi||Re===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,le=[];for(let J=0;J<6;J++)!we&&!te?le[J]=g(S.image[J],!0,i.maxCubemapSize):le[J]=te?S.image[J].image:S.image[J],le[J]=fe(S,le[J]);const ze=le[0],Ue=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),He=_(S.internalFormat,Ue,ve,S.colorSpace),D=S.isVideoTexture!==!0,me=q.__version===void 0||Y===!0,ce=Q.dataReady;let he=E(S,ze);Ae(r.TEXTURE_CUBE_MAP,S);let ae;if(we){D&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,He,ze.width,ze.height);for(let J=0;J<6;J++){ae=le[J].mipmaps;for(let Te=0;Te<ae.length;Te++){const Ge=ae[Te];S.format!==Tn?Ue!==null?D?ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Ge.width,Ge.height,Ue,Ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,He,Ge.width,Ge.height,0,Ge.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Ge.width,Ge.height,Ue,ve,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,He,Ge.width,Ge.height,0,Ue,ve,Ge.data)}}}else{if(ae=S.mipmaps,D&&me){ae.length>0&&he++;const J=ye(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,He,J.width,J.height)}for(let J=0;J<6;J++)if(te){D?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,le[J].width,le[J].height,Ue,ve,le[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,le[J].width,le[J].height,0,Ue,ve,le[J].data);for(let Te=0;Te<ae.length;Te++){const mt=ae[Te].image[J].image;D?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,mt.width,mt.height,Ue,ve,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,He,mt.width,mt.height,0,Ue,ve,mt.data)}}else{D?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,ve,le[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,Ue,ve,le[J]);for(let Te=0;Te<ae.length;Te++){const Ge=ae[Te];D?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,Ue,ve,Ge.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,He,Ue,ve,Ge.image[J])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),q.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function _e(P,S,V,Y,Q,q){const Re=s.convert(V.format,V.colorSpace),de=s.convert(V.type),De=_(V.internalFormat,Re,de,V.colorSpace),we=n.get(S),te=n.get(V);if(te.__renderTarget=S,!we.__hasExternalTextures){const le=Math.max(1,S.width>>q),ze=Math.max(1,S.height>>q);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,De,le,ze,S.depth,0,Re,de,null):t.texImage2D(Q,q,De,le,ze,0,Re,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ee(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,Q,te.__webglTexture,0,re(S)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,Q,te.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(P,S,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const Y=S.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=y(S.stencilBuffer,Q),Re=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=re(S);ee(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,q,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,q,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,q,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Re,r.RENDERBUFFER,P)}else{const Y=S.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],Re=s.convert(q.format,q.colorSpace),de=s.convert(q.type),De=_(q.internalFormat,Re,de,q.colorSpace),we=re(S);V&&ee(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,De,S.width,S.height):ee(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,De,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,De,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const Q=Y.__webglTexture,q=re(S);if(S.depthTexture.format===Ur)ee(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Fr)ee(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function We(P){const S=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Y}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Y=P.texture.mipmaps;Y&&Y.length>0?Se(S.__webglFramebuffer[0],P):Se(S.__webglFramebuffer,P)}else if(V){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=r.createRenderbuffer(),Pe(S.__webglDepthbuffer[Y],P,!1);else{const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,q)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Pe(S.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(P,S,V){const Y=n.get(P);S!==void 0&&_e(Y.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&We(P)}function Oe(P){const S=P.texture,V=n.get(P),Y=n.get(S);P.addEventListener("dispose",A);const Q=P.textures,q=P.isWebGLCubeRenderTarget===!0,Re=Q.length>1;if(Re||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=S.version,a.memory.textures++),q){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let De=0;De<S.mipmaps.length;De++)V.__webglFramebuffer[de][De]=r.createFramebuffer()}else V.__webglFramebuffer[de]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)V.__webglFramebuffer[de]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Re)for(let de=0,De=Q.length;de<De;de++){const we=n.get(Q[de]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&ee(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const De=Q[de];V.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const we=s.convert(De.format,De.colorSpace),te=s.convert(De.type),le=_(De.internalFormat,we,te,De.colorSpace,P.isXRRenderTarget===!0),ze=re(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,le,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,V.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,S);for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0)for(let De=0;De<S.mipmaps.length;De++)_e(V.__webglFramebuffer[de][De],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,De);else _e(V.__webglFramebuffer[de],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,De=Q.length;de<De;de++){const we=Q[de],te=n.get(we);let le=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),Ae(le,we),_e(V.__webglFramebuffer,P,we,r.COLOR_ATTACHMENT0+de,le,0),m(we)&&p(le)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Y.__webglTexture),Ae(de,S),S.mipmaps&&S.mipmaps.length>0)for(let De=0;De<S.mipmaps.length;De++)_e(V.__webglFramebuffer[De],P,S,r.COLOR_ATTACHMENT0,de,De);else _e(V.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,de,0);m(S)&&p(de),t.unbindTexture()}P.depthBuffer&&We(P)}function $(P){const S=P.textures;for(let V=0,Y=S.length;V<Y;V++){const Q=S[V];if(m(Q)){const q=b(P),Re=n.get(Q).__webglTexture;t.bindTexture(q,Re),p(q),t.unbindTexture()}}}const C=[],j=[];function se(P){if(P.samples>0){if(ee(P)===!1){const S=P.textures,V=P.width,Y=P.height;let Q=r.COLOR_BUFFER_BIT;const q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=n.get(P),de=S.length>1;if(de)for(let we=0;we<S.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const De=P.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let we=0;we<S.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const te=n.get(S[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,V,Y,0,0,V,Y,Q,r.NEAREST),l===!0&&(C.length=0,j.length=0,C.push(r.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(C.push(q),j.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,j)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let we=0;we<S.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const te=n.get(S[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function re(P){return Math.min(i.maxSamples,P.samples)}function ee(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function be(P){const S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function fe(P,S){const V=P.colorSpace,Y=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Wt&&V!==wi&&(nt.getTransfer(V)===ht?(Y!==Tn||Q!==Jn)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",V)),S}function ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=rt,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ee}function sM(r,e){function t(n,i=wi){let s;const a=nt.getTransfer(i);if(n===Jn)return r.UNSIGNED_BYTE;if(n===Bc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Cf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Pf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Af)return r.BYTE;if(n===Rf)return r.SHORT;if(n===Ir)return r.UNSIGNED_SHORT;if(n===Oc)return r.INT;if(n===as)return r.UNSIGNED_INT;if(n===en)return r.FLOAT;if(n===qn)return r.HALF_FLOAT;if(n===Lf)return r.ALPHA;if(n===Df)return r.RGB;if(n===Tn)return r.RGBA;if(n===Ur)return r.DEPTH_COMPONENT;if(n===Fr)return r.DEPTH_STENCIL;if(n===kc)return r.RED;if(n===Vc)return r.RED_INTEGER;if(n===Hc)return r.RG;if(n===Gc)return r.RG_INTEGER;if(n===Wc)return r.RGBA_INTEGER;if(n===Ua||n===Fa||n===Oa||n===Ba)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Pl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ll||n===Dl||n===Il)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ll||n===Dl)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Il)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===jl||n===Jl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Kl)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===$l||n===Ql||n===ec)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Yf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:rM,fragmentShader:aM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lM extends ir{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null;const g=typeof XRWebGLBinding<"u",m=new oM,p={},b=t.getContextAttributes();let _=null,y=null;const E=[],T=[],A=new ue;let R=null;const v=new Kt;v.viewport=new st;const M=new Kt;M.viewport=new st;const L=[v,M],I=new xx;let U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Z=E[K];return Z===void 0&&(Z=new zo,E[K]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(K){let Z=E[K];return Z===void 0&&(Z=new zo,E[K]=Z),Z.getGripSpace()},this.getHand=function(K){let Z=E[K];return Z===void 0&&(Z=new zo,E[K]=Z),Z.getHandSpace()};function B(K){const Z=T.indexOf(K.inputSource);if(Z===-1)return;const _e=E[Z];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",X);for(let K=0;K<E.length;K++){const Z=T[K];Z!==null&&(T[K]=null,E[K].disconnect(Z))}U=null,F=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(_),d=null,f=null,u=null,i=null,y=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",k),i.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,Se=null;b.depth&&(Se=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?Fr:Ur,Pe=b.stencil?Nr:as);const We={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(We),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new os(f.textureWidth,f.textureHeight,{format:Tn,type:Jn,depthTexture:new qf(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new os(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(K){for(let Z=0;Z<K.removed.length;Z++){const _e=K.removed[Z],Pe=T.indexOf(_e);Pe>=0&&(T[Pe]=null,E[Pe].disconnect(_e))}for(let Z=0;Z<K.added.length;Z++){const _e=K.added[Z];let Pe=T.indexOf(_e);if(Pe===-1){for(let We=0;We<E.length;We++)if(We>=T.length){T.push(_e),Pe=We;break}else if(T[We]===null){T[We]=_e,Pe=We;break}if(Pe===-1)break}const Se=E[Pe];Se&&Se.connect(_e)}}const H=new N,ne=new N;function ie(K,Z,_e){H.setFromMatrixPosition(Z.matrixWorld),ne.setFromMatrixPosition(_e.matrixWorld);const Pe=H.distanceTo(ne),Se=Z.projectionMatrix.elements,We=_e.projectionMatrix.elements,rt=Se[14]/(Se[10]-1),Oe=Se[14]/(Se[10]+1),$=(Se[9]+1)/Se[5],C=(Se[9]-1)/Se[5],j=(Se[8]-1)/Se[0],se=(We[8]+1)/We[0],re=rt*j,ee=rt*se,be=Pe/(-j+se),fe=be*-j;if(Z.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(fe),K.translateZ(be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(Z.projectionMatrix),K.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ye=rt+be,P=Oe+be,S=re-fe,V=ee+(Pe-fe),Y=$*Oe/P*ye,Q=C*Oe/P*ye;K.projectionMatrix.makePerspective(S,V,Y,Q,ye,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function xe(K,Z){Z===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Z.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let Z=K.near,_e=K.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),I.near=M.near=v.near=Z,I.far=M.far=v.far=_e,(U!==I.near||F!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,F=I.far),I.layers.mask=K.layers.mask|6,v.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Pe=K.parent,Se=I.cameras;xe(I,Pe);for(let We=0;We<Se.length;We++)xe(Se[We],Pe);Se.length===2?ie(I,v,M):I.projectionMatrix.copy(v.projectionMatrix),Ae(K,I,Pe)};function Ae(K,Z,_e){_e===null?K.matrix.copy(Z.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(Z.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Z.projectionMatrix),K.projectionMatrixInverse.copy(Z.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ws*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(K){return p[K]};let Le=null;function Ve(K,Z){if(h=Z.getViewerPose(c||a),x=Z,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Pe=!1;_e.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let Oe=0;Oe<_e.length;Oe++){const $=_e[Oe];let C=null;if(d!==null)C=d.getViewport($);else{const se=u.getViewSubImage(f,$);C=se.viewport,Oe===0&&(e.setRenderTargetTextures(y,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(y))}let j=L[Oe];j===void 0&&(j=new Kt,j.layers.enable(Oe),j.viewport=new st,L[Oe]=j),j.matrix.fromArray($.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray($.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(C.x,C.y,C.width,C.height),Oe===0&&(I.matrix.copy(j.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(j)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const Oe=u.getDepthInformation(_e[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,i.renderState)}if(Se&&Se.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let Oe=0;Oe<_e.length;Oe++){const $=_e[Oe].camera;if($){let C=p[$];C||(C=new Yf,p[$]=C);const j=u.getCameraImage($);C.sourceTexture=j}}}}for(let _e=0;_e<E.length;_e++){const Pe=T[_e],Se=E[_e];Pe!==null&&Se!==void 0&&Se.update(Pe,Z,c||a)}Le&&Le(K,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),x=null}const je=new ad;je.setAnimationLoop(Ve),this.setAnimationLoop=function(K){Le=K},this.dispose=function(){}}}const Xi=new On,cM=new Xe;function hM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,kf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),_=b.envMap,y=b.envMapRotation;_&&(m.envMap.value=_,Xi.copy(y),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(cM.makeRotationFromEuler(Xi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uM(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){const y=_.program;n.uniformBlockBinding(b,y)}function c(b,_){let y=i[b.id];y===void 0&&(x(b),y=h(b),i[b.id]=y,b.addEventListener("dispose",m));const E=_.program;n.updateUBOMapping(b,E);const T=e.render.frame;s[b.id]!==T&&(f(b),s[b.id]=T)}function h(b){const _=u();b.__bindingPointIndex=_;const y=r.createBuffer(),E=b.__size,T=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const _=i[b.id],y=b.uniforms,E=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let T=0,A=y.length;T<A;T++){const R=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,M=R.length;v<M;v++){const L=R[v];if(d(L,T,v,E)===!0){const I=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let B=0;B<U.length;B++){const k=U[B],X=g(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,I+F,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,F),F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(b,_,y,E){const T=b.value,A=_+"_"+y;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{const R=E[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return E[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function x(b){const _=b.uniforms;let y=0;const E=16;for(let A=0,R=_.length;A<R;A++){const v=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,L=v.length;M<L;M++){const I=v[M],U=Array.isArray(I.value)?I.value:[I.value];for(let F=0,B=U.length;F<B;F++){const k=U[F],X=g(k),H=y%E,ne=H%X.boundary,ie=H+ne;y+=ne,ie!==0&&E-ie<X.storage&&(y+=E-ie),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=X.storage}}}const T=y%E;return T>0&&(y+=E-T),b.__size=y,b.__cache={},this}function g(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ce("WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){const _=b.target;_.removeEventListener("dispose",m);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}const fM=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let li=null;function dM(){return li===null&&(li=new ao(fM,32,32,Hc,qn),li.minFilter=Ct,li.magFilter=Ct,li.wrapS=Sn,li.wrapT=Sn,li.generateMipmaps=!1,li.needsUpdate=!0),li}class pM{constructor(e={}){const{canvas:t=cm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const x=new Set([Wc,Gc,Vc]),g=new Set([Jn,as,Ir,Nr,Bc,zc]),m=new Uint32Array(4),p=new Int32Array(4);let b=null,_=null;const y=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let A=!1;this._outputColorSpace=It;let R=0,v=0,M=null,L=-1,I=null;const U=new st,F=new st;let B=null;const k=new Fe(0);let X=0,H=t.width,ne=t.height,ie=1,xe=null,Ae=null;const Le=new st(0,0,H,ne),Ve=new st(0,0,H,ne);let je=!1;const K=new Zc;let Z=!1,_e=!1;const Pe=new Xe,Se=new N,We=new st,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function $(){return M===null?ie:1}let C=n;function j(w,O){return t.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nc}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",Te,!1),C===null){const O="webgl2";if(C=j(O,w),C===null)throw j(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let se,re,ee,be,fe,ye,P,S,V,Y,Q,q,Re,de,De,we,te,le,ze,Ue,ve,He,D,me;function ce(){se=new bv(C),se.init(),He=new sM(C,se),re=new dv(C,se,e,He),ee=new nM(C,se),re.reversedDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),be=new Ev(C),fe=new Gy,ye=new iM(C,se,ee,fe,re,He,be),P=new mv(T),S=new Mv(T),V=new Cx(C),D=new uv(C,V),Y=new Sv(C,V,be,D),Q=new Av(C,Y,V,be),ze=new wv(C,re,ye),we=new pv(fe),q=new Hy(T,P,S,se,re,D,we),Re=new hM(T,fe),de=new Xy,De=new Zy(se),le=new hv(T,P,S,ee,Q,d,l),te=new eM(T,Q,re),me=new uM(C,be,re,ee),Ue=new fv(C,se,be),ve=new Tv(C,se,be),be.programs=q.programs,T.capabilities=re,T.extensions=se,T.properties=fe,T.renderLists=de,T.shadowMap=te,T.state=ee,T.info=be}ce();const he=new lM(T,C);this.xr=he,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(H,ne,!1))},this.getSize=function(w){return w.set(H,ne)},this.setSize=function(w,O,G=!0){if(he.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,ne=O,t.width=Math.floor(w*ie),t.height=Math.floor(O*ie),G===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(H*ie,ne*ie).floor()},this.setDrawingBufferSize=function(w,O,G){H=w,ne=O,ie=G,t.width=Math.floor(w*G),t.height=Math.floor(O*G),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Le)},this.setViewport=function(w,O,G,W){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,O,G,W),ee.viewport(U.copy(Le).multiplyScalar(ie).round())},this.getScissor=function(w){return w.copy(Ve)},this.setScissor=function(w,O,G,W){w.isVector4?Ve.set(w.x,w.y,w.z,w.w):Ve.set(w,O,G,W),ee.scissor(F.copy(Ve).multiplyScalar(ie).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(w){ee.setScissorTest(je=w)},this.setOpaqueSort=function(w){xe=w},this.setTransparentSort=function(w){Ae=w},this.getClearColor=function(w){return w.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,G=!0){let W=0;if(w){let z=!1;if(M!==null){const oe=M.texture.format;z=x.has(oe)}if(z){const oe=M.texture.type,ge=g.has(oe),Ee=le.getClearColor(),Me=le.getClearAlpha(),Be=Ee.r,ke=Ee.g,Ie=Ee.b;ge?(m[0]=Be,m[1]=ke,m[2]=Ie,m[3]=Me,C.clearBufferuiv(C.COLOR,0,m)):(p[0]=Be,p[1]=ke,p[2]=Ie,p[3]=Me,C.clearBufferiv(C.COLOR,0,p))}else W|=C.COLOR_BUFFER_BIT}O&&(W|=C.DEPTH_BUFFER_BIT),G&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),le.dispose(),de.dispose(),De.dispose(),fe.dispose(),P.dispose(),S.dispose(),Q.dispose(),D.dispose(),me.dispose(),q.dispose(),he.dispose(),he.removeEventListener("sessionstart",Eh),he.removeEventListener("sessionend",wh),Bi.stop()};function ae(w){w.preventDefault(),Ya("WebGLRenderer: Context Lost."),A=!0}function J(){Ya("WebGLRenderer: Context Restored."),A=!1;const w=be.autoReset,O=te.enabled,G=te.autoUpdate,W=te.needsUpdate,z=te.type;ce(),be.autoReset=w,te.enabled=O,te.autoUpdate=G,te.needsUpdate=W,te.type=z}function Te(w){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ge(w){const O=w.target;O.removeEventListener("dispose",Ge),mt(O)}function mt(w){lt(w),fe.remove(w)}function lt(w){const O=fe.get(w).programs;O!==void 0&&(O.forEach(function(G){q.releaseProgram(G)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,G,W,z,oe){O===null&&(O=rt);const ge=z.isMesh&&z.matrixWorld.determinant()<0,Ee=mp(w,O,G,W,z);ee.setMaterial(W,ge);let Me=G.index,Be=1;if(W.wireframe===!0){if(Me=Y.getWireframeAttribute(G),Me===void 0)return;Be=2}const ke=G.drawRange,Ie=G.attributes.position;let $e=ke.start*Be,ct=(ke.start+ke.count)*Be;oe!==null&&($e=Math.max($e,oe.start*Be),ct=Math.min(ct,(oe.start+oe.count)*Be)),Me!==null?($e=Math.max($e,0),ct=Math.min(ct,Me.count)):Ie!=null&&($e=Math.max($e,0),ct=Math.min(ct,Ie.count));const St=ct-$e;if(St<0||St===1/0)return;D.setup(z,W,Ee,G,Me);let Tt,ut=Ue;if(Me!==null&&(Tt=V.get(Me),ut=ve,ut.setIndex(Tt)),z.isMesh)W.wireframe===!0?(ee.setLineWidth(W.wireframeLinewidth*$()),ut.setMode(C.LINES)):ut.setMode(C.TRIANGLES);else if(z.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),ee.setLineWidth(Ne*$()),z.isLineSegments?ut.setMode(C.LINES):z.isLineLoop?ut.setMode(C.LINE_LOOP):ut.setMode(C.LINE_STRIP)}else z.isPoints?ut.setMode(C.POINTS):z.isSprite&&ut.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)kr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ne=z._multiDrawStarts,_t=z._multiDrawCounts,it=z._multiDrawCount,cn=Me?V.get(Me).bytesPerElement:1,ds=fe.get(W).currentProgram.getUniforms();for(let hn=0;hn<it;hn++)ds.setValue(C,"_gl_DrawID",hn),ut.render(Ne[hn]/cn,_t[hn])}else if(z.isInstancedMesh)ut.renderInstances($e,St,z.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_t=Math.min(G.instanceCount,Ne);ut.renderInstances($e,St,_t)}else ut.render($e,St)};function kn(w,O,G){w.transparent===!0&&w.side===Ot&&w.forceSinglePass===!1?(w.side=tn,w.needsUpdate=!0,na(w,O,G),w.side=Rn,w.needsUpdate=!0,na(w,O,G),w.side=Ot):na(w,O,G)}this.compile=function(w,O,G=null){G===null&&(G=w),_=De.get(G),_.init(O),E.push(_),G.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),w!==G&&w.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),_.setupLights();const W=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const oe=z.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const Ee=oe[ge];kn(Ee,G,z),W.add(Ee)}else kn(oe,G,z),W.add(oe)}),_=E.pop(),W},this.compileAsync=function(w,O,G=null){const W=this.compile(w,O,G);return new Promise(z=>{function oe(){if(W.forEach(function(ge){fe.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){z(w);return}setTimeout(oe,10)}se.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Pn=null;function pp(w){Pn&&Pn(w)}function Eh(){Bi.stop()}function wh(){Bi.start()}const Bi=new ad;Bi.setAnimationLoop(pp),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(w){Pn=w,he.setAnimationLoop(w),w===null?Bi.stop():Bi.start()},he.addEventListener("sessionstart",Eh),he.addEventListener("sessionend",wh),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(O),O=he.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,O,M),_=De.get(w,E.length),_.init(O),E.push(_),Pe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(Pe,Yn,O.reversedDepth),_e=this.localClippingEnabled,Z=we.init(this.clippingPlanes,_e),b=de.get(w,y.length),b.init(),y.push(b),he.enabled===!0&&he.isPresenting===!0){const oe=T.xr.getDepthSensingMesh();oe!==null&&xo(oe,O,-1/0,T.sortObjects)}xo(w,O,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(xe,Ae),Oe=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Oe&&le.addToRenderList(b,w),this.info.render.frame++,Z===!0&&we.beginShadows();const G=_.state.shadowsArray;te.render(G,w,O),Z===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=b.opaque,z=b.transmissive;if(_.setupLights(),O.isArrayCamera){const oe=O.cameras;if(z.length>0)for(let ge=0,Ee=oe.length;ge<Ee;ge++){const Me=oe[ge];Rh(W,z,w,Me)}Oe&&le.render(w);for(let ge=0,Ee=oe.length;ge<Ee;ge++){const Me=oe[ge];Ah(b,w,Me,Me.viewport)}}else z.length>0&&Rh(W,z,w,O),Oe&&le.render(w),Ah(b,w,O);M!==null&&v===0&&(ye.updateMultisampleRenderTarget(M),ye.updateRenderTargetMipmap(M)),w.isScene===!0&&w.onAfterRender(T,w,O),D.resetDefaultState(),L=-1,I=null,E.pop(),E.length>0?(_=E[E.length-1],Z===!0&&we.setGlobalState(T.clippingPlanes,_.state.camera)):_=null,y.pop(),y.length>0?b=y[y.length-1]:b=null};function xo(w,O,G,W){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){W&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pe);const ge=Q.update(w),Ee=w.material;Ee.visible&&b.push(w,ge,Ee,G,We.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const ge=Q.update(w),Ee=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),We.copy(ge.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ee)){const Me=ge.groups;for(let Be=0,ke=Me.length;Be<ke;Be++){const Ie=Me[Be],$e=Ee[Ie.materialIndex];$e&&$e.visible&&b.push(w,ge,$e,G,We.z,Ie)}}else Ee.visible&&b.push(w,ge,Ee,G,We.z,null)}}const oe=w.children;for(let ge=0,Ee=oe.length;ge<Ee;ge++)xo(oe[ge],O,G,W)}function Ah(w,O,G,W){const{opaque:z,transmissive:oe,transparent:ge}=w;_.setupLightsView(G),Z===!0&&we.setGlobalState(T.clippingPlanes,G),W&&ee.viewport(U.copy(W)),z.length>0&&ta(z,O,G),oe.length>0&&ta(oe,O,G),ge.length>0&&ta(ge,O,G),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Rh(w,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[W.id]===void 0&&(_.state.transmissionRenderTarget[W.id]=new os(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?qn:Jn,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const oe=_.state.transmissionRenderTarget[W.id],ge=W.viewport||U;oe.setSize(ge.z*T.transmissionResolutionScale,ge.w*T.transmissionResolutionScale);const Ee=T.getRenderTarget(),Me=T.getActiveCubeFace(),Be=T.getActiveMipmapLevel();T.setRenderTarget(oe),T.getClearColor(k),X=T.getClearAlpha(),X<1&&T.setClearColor(16777215,.5),T.clear(),Oe&&le.render(G);const ke=T.toneMapping;T.toneMapping=Li;const Ie=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),_.setupLightsView(W),Z===!0&&we.setGlobalState(T.clippingPlanes,W),ta(w,G,W),ye.updateMultisampleRenderTarget(oe),ye.updateRenderTargetMipmap(oe),se.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ct=0,St=O.length;ct<St;ct++){const Tt=O[ct],{object:ut,geometry:Ne,material:_t,group:it}=Tt;if(_t.side===Ot&&ut.layers.test(W.layers)){const cn=_t.side;_t.side=tn,_t.needsUpdate=!0,Ch(ut,G,W,Ne,_t,it),_t.side=cn,_t.needsUpdate=!0,$e=!0}}$e===!0&&(ye.updateMultisampleRenderTarget(oe),ye.updateRenderTargetMipmap(oe))}T.setRenderTarget(Ee,Me,Be),T.setClearColor(k,X),Ie!==void 0&&(W.viewport=Ie),T.toneMapping=ke}function ta(w,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,oe=w.length;z<oe;z++){const ge=w[z],{object:Ee,geometry:Me,group:Be}=ge;let ke=ge.material;ke.allowOverride===!0&&W!==null&&(ke=W),Ee.layers.test(G.layers)&&Ch(Ee,O,G,Me,ke,Be)}}function Ch(w,O,G,W,z,oe){w.onBeforeRender(T,O,G,W,z,oe),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(T,O,G,W,w,oe),z.transparent===!0&&z.side===Ot&&z.forceSinglePass===!1?(z.side=tn,z.needsUpdate=!0,T.renderBufferDirect(G,O,W,z,w,oe),z.side=Rn,z.needsUpdate=!0,T.renderBufferDirect(G,O,W,z,w,oe),z.side=Ot):T.renderBufferDirect(G,O,W,z,w,oe),w.onAfterRender(T,O,G,W,z,oe)}function na(w,O,G){O.isScene!==!0&&(O=rt);const W=fe.get(w),z=_.state.lights,oe=_.state.shadowsArray,ge=z.state.version,Ee=q.getParameters(w,z.state,oe,O,G),Me=q.getProgramCacheKey(Ee);let Be=W.programs;W.environment=w.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(w.isMeshStandardMaterial?S:P).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Ge),Be=new Map,W.programs=Be);let ke=Be.get(Me);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===ge)return Lh(w,Ee),ke}else Ee.uniforms=q.getUniforms(w),w.onBeforeCompile(Ee,T),ke=q.acquireProgram(Ee,Me),Be.set(Me,ke),W.uniforms=Ee.uniforms;const Ie=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=we.uniform),Lh(w,Ee),W.needsLights=gp(w),W.lightsStateVersion=ge,W.needsLights&&(Ie.ambientLightColor.value=z.state.ambient,Ie.lightProbe.value=z.state.probe,Ie.directionalLights.value=z.state.directional,Ie.directionalLightShadows.value=z.state.directionalShadow,Ie.spotLights.value=z.state.spot,Ie.spotLightShadows.value=z.state.spotShadow,Ie.rectAreaLights.value=z.state.rectArea,Ie.ltc_1.value=z.state.rectAreaLTC1,Ie.ltc_2.value=z.state.rectAreaLTC2,Ie.pointLights.value=z.state.point,Ie.pointLightShadows.value=z.state.pointShadow,Ie.hemisphereLights.value=z.state.hemi,Ie.directionalShadowMap.value=z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ie.spotShadowMap.value=z.state.spotShadowMap,Ie.spotLightMatrix.value=z.state.spotLightMatrix,Ie.spotLightMap.value=z.state.spotLightMap,Ie.pointShadowMap.value=z.state.pointShadowMap,Ie.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function Ph(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=ka.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Lh(w,O){const G=fe.get(w);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function mp(w,O,G,W,z){O.isScene!==!0&&(O=rt),ye.resetTextureUnits();const oe=O.fog,ge=W.isMeshStandardMaterial?O.environment:null,Ee=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Wt,Me=(W.isMeshStandardMaterial?S:P).get(W.envMap||ge),Be=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!G.morphAttributes.position,$e=!!G.morphAttributes.normal,ct=!!G.morphAttributes.color;let St=Li;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(St=T.toneMapping);const Tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=Tt!==void 0?Tt.length:0,Ne=fe.get(W),_t=_.state.lights;if(Z===!0&&(_e===!0||w!==I)){const Xt=w===I&&W.id===L;we.setState(W,w,Xt)}let it=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==_t.state.version||Ne.outputColorSpace!==Ee||z.isBatchedMesh&&Ne.batching===!1||!z.isBatchedMesh&&Ne.batching===!0||z.isBatchedMesh&&Ne.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ne.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ne.instancing===!1||!z.isInstancedMesh&&Ne.instancing===!0||z.isSkinnedMesh&&Ne.skinning===!1||!z.isSkinnedMesh&&Ne.skinning===!0||z.isInstancedMesh&&Ne.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ne.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ne.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ne.instancingMorph===!1&&z.morphTexture!==null||Ne.envMap!==Me||W.fog===!0&&Ne.fog!==oe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==we.numPlanes||Ne.numIntersection!==we.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==ke||Ne.morphTargets!==Ie||Ne.morphNormals!==$e||Ne.morphColors!==ct||Ne.toneMapping!==St||Ne.morphTargetsCount!==ut)&&(it=!0):(it=!0,Ne.__version=W.version);let cn=Ne.currentProgram;it===!0&&(cn=na(W,O,z));let ds=!1,hn=!1,lr=!1;const vt=cn.getUniforms(),$t=Ne.uniforms;if(ee.useProgram(cn.program)&&(ds=!0,hn=!0,lr=!0),W.id!==L&&(L=W.id,hn=!0),ds||I!==w){ee.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(C,"projectionMatrix",w.projectionMatrix),vt.setValue(C,"viewMatrix",w.matrixWorldInverse);const Qt=vt.map.cameraPosition;Qt!==void 0&&Qt.setValue(C,Se.setFromMatrixPosition(w.matrixWorld)),re.logarithmicDepthBuffer&&vt.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),I!==w&&(I=w,hn=!0,lr=!0)}if(z.isSkinnedMesh){vt.setOptional(C,z,"bindMatrix"),vt.setOptional(C,z,"bindMatrixInverse");const Xt=z.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),vt.setValue(C,"boneTexture",Xt.boneTexture,ye))}z.isBatchedMesh&&(vt.setOptional(C,z,"batchingTexture"),vt.setValue(C,"batchingTexture",z._matricesTexture,ye),vt.setOptional(C,z,"batchingIdTexture"),vt.setValue(C,"batchingIdTexture",z._indirectTexture,ye),vt.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&vt.setValue(C,"batchingColorTexture",z._colorsTexture,ye));const _n=G.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ze.update(z,G,cn),(hn||Ne.receiveShadow!==z.receiveShadow)&&(Ne.receiveShadow=z.receiveShadow,vt.setValue(C,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&($t.envMap.value=Me,$t.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&($t.envMapIntensity.value=O.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=dM()),hn&&(vt.setValue(C,"toneMappingExposure",T.toneMappingExposure),Ne.needsLights&&xp($t,lr),oe&&W.fog===!0&&Re.refreshFogUniforms($t,oe),Re.refreshMaterialUniforms($t,W,ie,ne,_.state.transmissionRenderTarget[w.id]),ka.upload(C,Ph(Ne),$t,ye)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ka.upload(C,Ph(Ne),$t,ye),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(C,"center",z.center),vt.setValue(C,"modelViewMatrix",z.modelViewMatrix),vt.setValue(C,"normalMatrix",z.normalMatrix),vt.setValue(C,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Xt=W.uniformsGroups;for(let Qt=0,go=Xt.length;Qt<go;Qt++){const zi=Xt[Qt];me.update(zi,cn),me.bind(zi,cn)}}return cn}function xp(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function gp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,O,G){const W=fe.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),fe.get(w.texture).__webglTexture=O,fe.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const G=fe.get(w);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const _p=C.createFramebuffer();this.setRenderTarget=function(w,O=0,G=0){M=w,R=O,v=G;let W=!0,z=null,oe=!1,ge=!1;if(w){const Me=fe.get(w);if(Me.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Me.__webglFramebuffer===void 0)ye.setupRenderTarget(w);else if(Me.__hasExternalTextures)ye.rebindTextures(w,fe.get(w.texture).__webglTexture,fe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ie=w.depthTexture;if(Me.__boundDepthTexture!==Ie){if(Ie!==null&&fe.has(Ie)&&(w.width!==Ie.image.width||w.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(w)}}const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);const ke=fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?z=ke[O][G]:z=ke[O],oe=!0):w.samples>0&&ye.useMultisampledRTT(w)===!1?z=fe.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[G]:z=ke,U.copy(w.viewport),F.copy(w.scissor),B=w.scissorTest}else U.copy(Le).multiplyScalar(ie).floor(),F.copy(Ve).multiplyScalar(ie).floor(),B=je;if(G!==0&&(z=_p),ee.bindFramebuffer(C.FRAMEBUFFER,z)&&W&&ee.drawBuffers(w,z),ee.viewport(U),ee.scissor(F),ee.setScissorTest(B),oe){const Me=fe.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,G)}else if(ge){const Me=O;for(let Be=0;Be<w.textures.length;Be++){const ke=fe.get(w.textures[Be]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Be,ke.__webglTexture,G,Me)}}else if(w!==null&&G!==0){const Me=fe.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Me.__webglTexture,G)}L=-1},this.readRenderTargetPixels=function(w,O,G,W,z,oe,ge,Ee=0){if(!(w&&w.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){ee.bindFramebuffer(C.FRAMEBUFFER,Me);try{const Be=w.textures[Ee],ke=Be.format,Ie=Be.type;if(!re.textureFormatReadable(ke)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ie)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-W&&G>=0&&G<=w.height-z&&(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ee),C.readPixels(O,G,W,z,He.convert(ke),He.convert(Ie),oe))}finally{const Be=M!==null?fe.get(M).__webglFramebuffer:null;ee.bindFramebuffer(C.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,O,G,W,z,oe,ge,Ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me)if(O>=0&&O<=w.width-W&&G>=0&&G<=w.height-z){ee.bindFramebuffer(C.FRAMEBUFFER,Me);const Be=w.textures[Ee],ke=Be.format,Ie=Be.type;if(!re.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ee),C.readPixels(O,G,W,z,He.convert(ke),He.convert(Ie),0);const ct=M!==null?fe.get(M).__webglFramebuffer:null;ee.bindFramebuffer(C.FRAMEBUFFER,ct);const St=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await hm(C,St,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer($e),C.deleteSync(St),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,G=0){const W=Math.pow(2,-G),z=Math.floor(w.image.width*W),oe=Math.floor(w.image.height*W),ge=O!==null?O.x:0,Ee=O!==null?O.y:0;ye.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,ge,Ee,z,oe),ee.unbindTexture()};const vp=C.createFramebuffer(),yp=C.createFramebuffer();this.copyTextureToTexture=function(w,O,G=null,W=null,z=0,oe=null){oe===null&&(z!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=z,z=0):oe=0);let ge,Ee,Me,Be,ke,Ie,$e,ct,St;const Tt=w.isCompressedTexture?w.mipmaps[oe]:w.image;if(G!==null)ge=G.max.x-G.min.x,Ee=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,Be=G.min.x,ke=G.min.y,Ie=G.isBox3?G.min.z:0;else{const _n=Math.pow(2,-z);ge=Math.floor(Tt.width*_n),Ee=Math.floor(Tt.height*_n),w.isDataArrayTexture?Me=Tt.depth:w.isData3DTexture?Me=Math.floor(Tt.depth*_n):Me=1,Be=0,ke=0,Ie=0}W!==null?($e=W.x,ct=W.y,St=W.z):($e=0,ct=0,St=0);const ut=He.convert(O.format),Ne=He.convert(O.type);let _t;O.isData3DTexture?(ye.setTexture3D(O,0),_t=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ye.setTexture2DArray(O,0),_t=C.TEXTURE_2D_ARRAY):(ye.setTexture2D(O,0),_t=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const it=C.getParameter(C.UNPACK_ROW_LENGTH),cn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ds=C.getParameter(C.UNPACK_SKIP_PIXELS),hn=C.getParameter(C.UNPACK_SKIP_ROWS),lr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Tt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Tt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Be),C.pixelStorei(C.UNPACK_SKIP_ROWS,ke),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ie);const vt=w.isDataArrayTexture||w.isData3DTexture,$t=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const _n=fe.get(w),Xt=fe.get(O),Qt=fe.get(_n.__renderTarget),go=fe.get(Xt.__renderTarget);ee.bindFramebuffer(C.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,go.__webglFramebuffer);for(let zi=0;zi<Me;zi++)vt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,fe.get(w).__webglTexture,z,Ie+zi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,fe.get(O).__webglTexture,oe,St+zi)),C.blitFramebuffer(Be,ke,ge,Ee,$e,ct,ge,Ee,C.DEPTH_BUFFER_BIT,C.NEAREST);ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||fe.has(w)){const _n=fe.get(w),Xt=fe.get(O);ee.bindFramebuffer(C.READ_FRAMEBUFFER,vp),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,yp);for(let Qt=0;Qt<Me;Qt++)vt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_n.__webglTexture,z,Ie+Qt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_n.__webglTexture,z),$t?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Xt.__webglTexture,oe,St+Qt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Xt.__webglTexture,oe),z!==0?C.blitFramebuffer(Be,ke,ge,Ee,$e,ct,ge,Ee,C.COLOR_BUFFER_BIT,C.NEAREST):$t?C.copyTexSubImage3D(_t,oe,$e,ct,St+Qt,Be,ke,ge,Ee):C.copyTexSubImage2D(_t,oe,$e,ct,Be,ke,ge,Ee);ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else $t?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(_t,oe,$e,ct,St,ge,Ee,Me,ut,Ne,Tt.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(_t,oe,$e,ct,St,ge,Ee,Me,ut,Tt.data):C.texSubImage3D(_t,oe,$e,ct,St,ge,Ee,Me,ut,Ne,Tt):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,oe,$e,ct,ge,Ee,ut,Ne,Tt.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,oe,$e,ct,Tt.width,Tt.height,ut,Tt.data):C.texSubImage2D(C.TEXTURE_2D,oe,$e,ct,ge,Ee,ut,Ne,Tt);C.pixelStorei(C.UNPACK_ROW_LENGTH,it),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,cn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ds),C.pixelStorei(C.UNPACK_SKIP_ROWS,hn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,lr),oe===0&&O.generateMipmaps&&C.generateMipmap(_t),ee.unbindTexture()},this.initRenderTarget=function(w){fe.get(w).__webglFramebuffer===void 0&&ye.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ye.setTextureCube(w,0):w.isData3DTexture?ye.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ye.setTexture2DArray(w,0):ye.setTexture2D(w,0),ee.unbindTexture()},this.resetState=function(){R=0,v=0,M=null,ee.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}function hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ud(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zs={duration:.5,overwrite:!1,delay:0},oh,Ht,xt,En=1e8,pt=1/En,dc=Math.PI*2,mM=dc/4,xM=0,fd=Math.sqrt,gM=Math.cos,_M=Math.sin,Ft=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},xi=function(e){return typeof e=="number"},lh=function(e){return typeof e>"u"},Zn=function(e){return typeof e=="object"},nn=function(e){return e!==!1},ch=function(){return typeof window<"u"},Ia=function(e){return Et(e)||Ft(e)},dd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gt=Array.isArray,pc=/(?:-?\.?\d|\.)+/gi,pd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,md=/[+-]=-?[.\d]+/,xd=/[^,'"\[\]\s]+/gi,vM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,Hn,mc,hh,gn={},Ja={},gd,_d=function(e){return(Ja=cs(e,gn))&&on},uh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wr=function(e,t){return!t&&console.warn(e)},vd=function(e,t){return e&&(gn[e]=t)&&Ja&&(Ja[e]=t)||gn},Xr=function(){return 0},yM={suppressEvents:!0,isStart:!0,kill:!1},Va={suppressEvents:!0,kill:!1},MM={suppressEvents:!0},fh={},Di=[],xc={},yd,dn={},nl={},ef=30,Ha=[],dh="",ph=function(e){var t=e[0],n,i;if(Zn(t)||Et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ha.length;i--&&!Ha[i].targetTest(t););n=Ha[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Wd(e[i],n)))||e.splice(i,1);return e},ns=function(e){return e._gsap||ph(wn(e))[0]._gsap},Md=function(e,t,n){return(n=e[t])&&Et(n)?e[t]():lh(n)&&e.getAttribute&&e.getAttribute(t)||n},sn=function(e,t){return(e=e.split(",")).forEach(t)||e},wt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},Fs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},bM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Za=function(){var e=Di.length,t=Di.slice(0),n,i;for(xc={},Di.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bd=function(e,t,n,i){Di.length&&!Ht&&Za(),e.render(t,n,i||Ht&&t<0&&(e._initted||e._startAt)),Di.length&&!Ht&&Za()},Sd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(xd).length<2?t:Ft(e)?e.trim():e},Td=function(e){return e},Cn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},SM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},cs=function(e,t){for(var n in t)e[n]=t[n];return e},tf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},$a=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Pr=function(e){var t=e.parent||yt,n=e.keyframes?SM(Gt(e.keyframes)):Cn;if(nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},TM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ed=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},fo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ni=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},is=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},EM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},gc=function(e,t,n,i){return e._startAt&&(Ht?e._startAt.revert(Va):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},wM=function r(e){return!e||e._ts&&r(e.parent)},nf=function(e){return e._repeat?$s(e._tTime,e=e.duration()+e._rDelay)*e:0},$s=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Qa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},po=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},mo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Nt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),po(e),n._dirty||is(n,e)),e},wd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Qa(e.rawTime(),t),(!t._dur||ea(0,t.totalDuration(),n)-t._tTime>pt)&&t.render(n,!0)),is(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-pt}},Wn=function(e,t,n,i){return t.parent&&Ni(t),t._start=Nt((xi(n)?n:n||e!==yt?yn(e,n,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ed(e,t,"_first","_last",e._sort?"_start":0),_c(t)||(e._recent=t),i||wd(e,t),e._ts<0&&mo(e,e._tTime),e},Ad=function(e,t){return(gn.ScrollTrigger||uh("scrollTrigger",t))&&gn.ScrollTrigger.create(t,e)},Rd=function(e,t,n,i,s){if(xh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ht&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yd!==pn.frame)return Di.push(e),e._lazy=[s,i],1},AM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},_c=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},RM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&AM(e)&&!(!e._initted&&_c(e))||(e._ts<0||e._dp._ts<0)&&!_c(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=ea(0,e._tDur,t),h=$s(l,o),e._yoyo&&h&1&&(a=1-a),h!==$s(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ht||i||e._zTime===pt||!t&&e._zTime){if(!e._initted&&Rd(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?pt:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&gc(e,t,n,!0),e._onUpdate&&!n&&mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ni(e,1),!n&&!Ht&&(mn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},CM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Qs=function(e,t,n,i){var s=e._repeat,a=Nt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Nt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&mo(e,e._tTime=e._tDur*o),e.parent&&po(e),n||is(e.parent,e),e},sf=function(e){return e instanceof jt?is(e):Qs(e,e._dur)},PM={_start:0,endTime:Xr,totalDuration:Xr},yn=function r(e,t,n){var i=e.labels,s=e._recent||PM,a=e.duration()>=En?s.endTime(!1):e._dur,o,l,c;return Ft(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Gt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Lr=function(e,t,n){var i=xi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=nn(l.vars.inherit)&&l.parent;a.immediateRender=nn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Rt(t[0],a,t[s+1])},Oi=function(e,t){return e||e===0?t(e):t},ea=function(e,t,n){return n<e?e:n>t?t:n},Vt=function(e,t){return!Ft(e)||!(t=vM.exec(e))?"":t[1]},LM=function(e,t,n){return Oi(n,function(i){return ea(e,t,i)})},vc=[].slice,Cd=function(e,t){return e&&Zn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zn(e[0]))&&!e.nodeType&&e!==Hn},DM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ft(i)&&!t||Cd(i,1)?(s=n).push.apply(s,wn(i)):n.push(i)})||n},wn=function(e,t,n){return xt&&!t&&xt.selector?xt.selector(e):Ft(e)&&!n&&(mc||!er())?vc.call((t||hh).querySelectorAll(e),0):Gt(e)?DM(e,n):Cd(e)?vc.call(e,0):e?[e]:[]},yc=function(e){return e=wn(e)[0]||Wr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wn(t,n.querySelectorAll?n:n===e?Wr("Invalid scope")||hh.createElement("div"):e)}},Pd=function(e){return e.sort(function(){return .5-Math.random()})},Ld=function(e){if(Et(e))return e;var t=Zn(e)?e:{each:e},n=ss(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Ft(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,x){var g=(x||t).length,m=a[g],p,b,_,y,E,T,A,R,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,En])[1],!v){for(A=-En;A<(A=x[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],p=l?Math.min(v,g)*h-.5:i%v,b=v===En?0:l?g*u/v-.5:i/v|0,A=0,R=En,T=0;T<g;T++)_=T%v-p,y=b-(T/v|0),m[T]=E=c?Math.abs(c==="y"?y:_):fd(_*_+y*y),E>A&&(A=E),E<R&&(R=E);i==="random"&&Pd(m),m.max=A-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Vt(t.amount||t.each)||0,n=n&&g<0?Vd(n):n}return g=(m[f]-m.min)/m.max||0,Nt(m.b+(n?n(g):g)*m.v)+m.u}},Mc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Nt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(xi(n)?0:Vt(n))}},Dd=function(e,t){var n=Gt(e),i,s;return!n&&Zn(e)&&(i=n=e.radius||En,e.values?(e=wn(e.values),(s=!xi(e[0]))&&(i*=i)):e=Mc(e.increment)),Oi(t,n?Et(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=En,h=0,u=e.length,f,d;u--;)s?(f=e[u].x-o,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:a,s||h===a||xi(a)?h:h+Vt(a)}:Mc(e))},Id=function(e,t,n,i){return Oi(Gt(e)?!t:n===!0?!!(n=0):!i,function(){return Gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},IM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},NM=function(e,t){return function(n){return e(parseFloat(n))+(t||Vt(n))}},UM=function(e,t,n){return Ud(e,t,0,1,n)},Nd=function(e,t,n){return Oi(n,function(i){return e[~~t(i)]})},FM=function r(e,t,n){var i=t-e;return Gt(e)?Nd(e,r(0,e.length),t):Oi(n,function(s){return(i+(s-e)%i)%i+e})},OM=function r(e,t,n){var i=t-e,s=i*2;return Gt(e)?Nd(e,r(0,e.length-1),t):Oi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},qr=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?xd:pc),n+=e.substr(t,i-t)+Id(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Ud=function(e,t,n,i,s){var a=t-e,o=i-n;return Oi(s,function(l){return n+((l-e)/a*o||0)})},BM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Ft(e),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Gt(e)&&!Gt(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(x){x*=u;var g=Math.min(f,~~x);return h[g](x-g)},n=t}else i||(e=cs(Gt(e)?[]:{},e));if(!h){for(l in t)mh.call(o,e,l,"get",t[l]);s=function(x){return vh(x,o)||(a?e.p:e)}}}return Oi(n,s)},rf=function(e,t,n){var i=e.labels,s=En,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},mn=function(e,t,n){var i=e.vars,s=i[t],a=xt,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Di.length&&Za(),o&&(xt=o),h=l?s.apply(c,l):s.call(c),xt=a,h},Sr=function(e){return Ni(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ht),e.progress()<1&&mn(e,"onInterrupt"),e},Ds,Fd=[],Od=function(e){if(e)if(e=!e.name&&e.default||e,ch()||e.headless){var t=e.name,n=Et(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Xr,render:vh,add:mh,kill:eb,modifier:QM,rawVars:0},a={targetTest:0,get:0,getSetter:_h,aliases:{},register:0};if(er(),e!==i){if(dn[t])return;Cn(i,Cn($a(e,s),a)),cs(i.prototype,cs(s,$a(e,a))),dn[i.prop=t]=i,e.targetTest&&(Ha.push(i),fh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}vd(t,i),e.register&&e.register(on,i,rn)}else Fd.push(e)},ft=255,Tr={aqua:[0,ft,ft],lime:[0,ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ft],navy:[0,0,128],white:[ft,ft,ft],olive:[128,128,0],yellow:[ft,ft,0],orange:[ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ft,0,0],pink:[ft,192,203],cyan:[0,ft,ft],transparent:[ft,ft,ft,0]},il=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ft+.5|0},Bd=function(e,t,n){var i=e?xi(e)?[e>>16,e>>8&ft,e&ft]:0:Tr.black,s,a,o,l,c,h,u,f,d,x;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Tr[e])i=Tr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ft,i&ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ft,e&ft]}else if(e.substr(0,3)==="hsl"){if(i=x=e.match(pc),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=il(l+1/3,s,a),i[1]=il(l,s,a),i[2]=il(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(pd),n&&i.length<4&&(i[3]=1),i}else i=e.match(pc)||Tr.transparent;i=i.map(Number)}return t&&!x&&(s=i[0]/ft,a=i[1]/ft,o=i[2]/ft,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},zd=function(e){var t=[],n=[],i=-1;return e.split(Ii).forEach(function(s){var a=s.match(Ls)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},af=function(e,t,n){var i="",s=(e+i).match(Ii),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(f){return(f=Bd(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=zd(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Ii,"1").split(Ls),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Ii),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},Ii=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Tr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),zM=/hsl[a]?\(/,kd=function(e){var t=e.join(" "),n;if(Ii.lastIndex=0,Ii.test(t))return n=zM.test(t),e[1]=af(e[1],n),e[0]=af(e[0],n,zd(e[1])),!0},Yr,pn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,d,x=function g(m){var p=r()-i,b=m===!0,_,y,E,T;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,_=E-a,(_>0||b)&&(T=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,a+=_+(_>=s?4:s-_),y=1),b||(l=c(g)),y)for(d=0;d<o.length;d++)o[d](E,f,T,m)};return u={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){gd&&(!mc&&ch()&&(Hn=mc=window,hh=Hn.document||{},gn.gsap=on,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(on.version),_d(Ja||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),Fd.forEach(Od)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Yr=1,x(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Yr=0,c=Xr},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,b){var _=p?function(y,E,T,A){m(y,E,T,A),u.remove(_)}:m;return u.remove(m),o[b?"unshift":"push"](_),er(),_},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u}(),er=function(){return!Yr&&pn.wake()},tt={},kM=/^[\d.\-M][\d.\-,\s]/,VM=/["']/g,HM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(VM,"").trim():+c,i=l.substr(o+1).trim();return t},GM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},WM=function(e){var t=(e+"").split("("),n=tt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[HM(t[1])]:GM(e).split(",").map(Sd)):tt._CE&&kM.test(e)?tt._CE("",e):n},Vd=function(e){return function(t){return 1-e(1-t)}},Hd=function r(e,t){for(var n=e._first,i;n;)n instanceof jt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ss=function(e,t){return e&&(Et(e)?e:tt[e]||WM(e))||t},fs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return sn(e,function(o){tt[o]=gn[o]=s,tt[a=o.toLowerCase()]=n;for(var l in s)tt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=tt[o+"."+l]=s[l]}),s},Gd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/dc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*_M((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Gd(o);return s=dc/s,l.config=function(c,h){return r(e,c,h)},l},rl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Gd(n);return i.config=function(s){return r(e,s)},i};sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;fs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});tt.Linear.easeNone=tt.none=tt.Linear.easeIn;fs("Elastic",sl("in"),sl("out"),sl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};fs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);fs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});fs("Circ",function(r){return-(fd(1-r*r)-1)});fs("Sine",function(r){return r===1?1:-gM(r*mM)+1});fs("Back",rl("in"),rl("out"),rl());tt.SteppedEase=tt.steps=gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-pt;return function(o){return((i*ea(0,a,o)|0)+s)*n}}};Zs.ease=tt["quad.out"];sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return dh+=r+","+r+"Params,"});var Wd=function(e,t){this.id=xM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Md,this.set=t?t.getSetter:_h},Kr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qs(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),Yr||pn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(er(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(mo(this,n),!s._dp||s.parent||wd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),bd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?$s(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Qa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pt?0:this._rts,this.totalTime(ea(-Math.abs(this._delay),this._tDur,s),i!==!1),po(this),EM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(er(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Wn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=MM);var i=Ht;return Ht=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ht=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,sf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(yn(this,n),nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,nn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-pt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Et(n)?n:Td,o=function(){var c=i.then;i.then=null,Et(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Sr(this)},r}();Cn(Kr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var jt=function(r){ud(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=nn(n.sortChildren),yt&&Wn(n.parent||yt,hi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ad(hi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Lr(0,arguments,this),this},t.from=function(i,s,a){return Lr(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Lr(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Pr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Rt(i,s,yn(this,a),1),this},t.call=function(i,s,a){return Wn(this,Rt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Rt(i,a,yn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Pr(a).immediateRender=nn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,Pr(o).immediateRender=nn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Nt(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,x,g,m,p,b,_,y,E,T,A;if(this!==yt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,_=this._ts,p=!_,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=Nt(h%m),h===l?(g=this._repeat,f=c):(g=~~(h/m),g&&g===h/m&&(f=c,g--),f>c&&(f=c)),E=$s(this._tTime,m),!o&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),T&&g&1&&(f=c-f,A=1),g!==E&&!this._lock){var R=T&&E&1,v=R===(T&&g&1);if(g<E&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(A?0:Nt(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Hd(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=CM(this,Nt(o),Nt(f)),b&&(h-=f-(f=b._start))),this._tTime=h,this._time=f,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!g&&(mn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(x=d._next,(d._act||f>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){b=0,x&&(h+=this._zTime=-pt);break}}d=x}else{d=this._last;for(var M=i<0?i:f;d;){if(x=d._prev,(d._act||M<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,a||Ht&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){b=0,x&&(h+=this._zTime=M?-pt:pt);break}}d=x}}if(b&&!s&&(this.pause(),b.render(f>=o?0:-pt)._zTime=f>=o?1:-1,this._ts))return this._start=y,po(this),this.render(i,s,a);this._onUpdate&&!s&&mn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ni(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(mn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(xi(s)||(s=yn(this,s,i)),!(i instanceof Kr)){if(Gt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ft(i))return this.addLabel(i,s);if(Et(i))i=Rt.delayedCall(0,i);else return this}return this!==i?Wn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-En);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Rt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Ft(i)?this.removeLabel(i):Et(i)?this.killTweensOf(i):(fo(this,i),i===this._recent&&(this._recent=this._last),is(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=yn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Rt.delayedCall(0,s||Xr,a);return o.data="isPause",this._hasPause=1,Wn(this,o,yn(this,i))},t.removePause=function(i){var s=this._first;for(i=yn(this,i);s;)s._start===i&&s.data==="isPause"&&Ni(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ri!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=wn(i),l=this._first,c=xi(s),h;l;)l instanceof Rt?bM(l._targets,o)&&(c?(!Ri||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=yn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,x=Rt.to(a,Cn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||pt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());x._dur!==m&&Qs(x,m,0,1).render(x._time,!0,!0),d=1}h&&h.apply(x,u||[])}},s));return f?x.render(0):x},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Cn({startAt:{time:yn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),rf(this,yn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),rf(this,yn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return is(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),is(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=En,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Wn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Qs(a,a===yt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(yt._ts&&(bd(yt,Qa(i,yt)),yd=pn.frame),pn.frame>=ef){ef+=xn.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&xn.autoSleep&&pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pn.sleep()}}},e}(Kr);Cn(jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var XM=function(e,t,n,i,s,a,o){var l=new rn(this._pt,e,t,0,1,Jd,null,s),c=0,h=0,u,f,d,x,g,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=qr(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),f=n.match(tl)||[];u=tl.exec(i);)x=u[0],g=i.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),x!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:x.charAt(1)==="="?Fs(m,x)-m:parseFloat(x)-m,m:d&&d<4?Math.round:0},c=tl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(md.test(i)||p)&&(l.e=0),this._pt=l,l},mh=function(e,t,n,i,s,a,o,l,c,h){Et(i)&&(i=i(s||0,e,a));var u=e[t],f=n!=="get"?n:Et(u)?c?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=Et(u)?c?JM:Kd:gh,x;if(Ft(i)&&(~i.indexOf("random(")&&(i=qr(i)),i.charAt(1)==="="&&(x=Fs(f,i)+(Vt(f)||0),(x||x===0)&&(i=x))),!h||f!==i||bc)return!isNaN(f*i)&&i!==""?(x=new rn(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?$M:jd,0,d),c&&(x.fp=c),o&&x.modifier(o,this,e),this._pt=x):(!u&&!(t in e)&&uh(t,i),XM.call(this,e,t,f,i,d,l||xn.stringFilter,c))},qM=function(e,t,n,i,s){if(Et(e)&&(e=Dr(e,s,t,n,i)),!Zn(e)||e.style&&e.nodeType||Gt(e)||dd(e))return Ft(e)?Dr(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Dr(e[o],s,t,n,i);return a},Xd=function(e,t,n,i,s,a){var o,l,c,h;if(dn[e]&&(o=new dn[e]).init(s,o.rawVars?t[e]:qM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new rn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ds))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Ri,bc,xh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,x=e._dur,g=e._startAt,m=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:m,_=e._overwrite==="auto"&&!oh,y=e.timeline,E,T,A,R,v,M,L,I,U,F,B,k,X;if(y&&(!f||!s)&&(s="none"),e._ease=ss(s,Zs.ease),e._yEase=u?Vd(ss(u===!0?s:u,Zs.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(I=m[0]?ns(m[0]).harness:0,k=I&&i[I.prop],E=$a(i,fh),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!d?g.render(-1,!0):g.revert(h&&x?Va:yM),g._lazy=0),a){if(Ni(e._startAt=Rt.set(m,Cn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&nn(l),startAt:null,delay:0,onUpdate:c&&function(){return mn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht||!o&&!d)&&e._startAt.revert(Va),o&&x&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&x&&!g){if(t&&(o=!1),A=Cn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&nn(l),immediateRender:o,stagger:0,parent:p},E),k&&(A[I.prop]=k),Ni(e._startAt=Rt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht?e._startAt.revert(Va):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&nn(l)||l&&!x,T=0;T<m.length;T++){if(v=m[T],L=v._gsap||ph(m)[T]._gsap,e._ptLookup[T]=F={},xc[L.id]&&Di.length&&Za(),B=b===m?T:b.indexOf(v),I&&(U=new I).init(v,k||E,e,B,b)!==!1&&(e._pt=R=new rn(e._pt,v,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(H){F[H]=R}),U.priority&&(M=1)),!I||k)for(A in E)dn[A]&&(U=Xd(A,E,e,B,v,b))?U.priority&&(M=1):F[A]=R=mh.call(e,v,A,"get",E[A],B,b,0,i.stringFilter);e._op&&e._op[T]&&e.kill(v,e._op[T]),_&&e._pt&&(Ri=e,yt.killTweensOf(v,F,e.globalTime(t)),X=!e.parent,Ri=0),e._pt&&l&&(xc[L.id]=1)}M&&Zd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&y.render(En,!0,!0)},YM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return bc=1,e.vars[t]="+=0",xh(e,o),bc=0,l?Wr(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=wt(n)+Vt(u.e)),u.b&&(u.b=h.s+Vt(u.b))},KM=function(e,t){var n=e[0]?ns(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=cs({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},jM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Gt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Dr=function(e,t,n,i,s){return Et(e)?e.call(t,n,i,s):Ft(e)&&~e.indexOf("random(")?qr(e):e},qd=dh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yd={};sn(qd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yd[r]=1});var Rt=function(r){ud(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Pr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,x=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,b=i.parent||yt,_=(Gt(n)||dd(n)?xi(n[0]):"length"in i)?[n]:wn(n),y,E,T,A,R,v,M,L;if(o._targets=_.length?ph(_):Wr("GSAP target "+n+" not found. https://gsap.com",!xn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,x||f||Ia(c)||Ia(h)){if(i=o.vars,y=o.timeline=new jt({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:_}),y.kill(),y.parent=y._dp=hi(o),y._start=0,f||Ia(c)||Ia(h)){if(A=_.length,M=f&&Ld(f),Zn(f))for(R in f)~qd.indexOf(R)&&(L||(L={}),L[R]=f[R]);for(E=0;E<A;E++)T=$a(i,Yd),T.stagger=0,p&&(T.yoyoEase=p),L&&cs(T,L),v=_[E],T.duration=+Dr(c,hi(o),E,v,_),T.delay=(+Dr(h,hi(o),E,v,_)||0)-o._delay,!f&&A===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),y.to(v,T,M?M(E,v,_):0),y._ease=tt.none;y.duration()?c=h=0:o.timeline=0}else if(x){Pr(Cn(y.vars.defaults,{ease:"none"})),y._ease=ss(x.ease||i.ease||"none");var I=0,U,F,B;if(Gt(x))x.forEach(function(k){return y.to(_,k,">")}),y.duration();else{T={};for(R in x)R==="ease"||R==="easeEach"||jM(R,x[R],T,x.easeEach);for(R in T)for(U=T[R].sort(function(k,X){return k.t-X.t}),I=0,E=0;E<U.length;E++)F=U[E],B={ease:F.e,duration:(F.t-(E?U[E-1].t:0))/100*c},B[R]=F.v,y.to(_,B,I),I+=B.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!oh&&(Ri=hi(o),yt.killTweensOf(_),Ri=0),Wn(b,hi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!x&&o._start===Nt(b._time)&&nn(u)&&wM(hi(o))&&b.data!=="nested")&&(o._tTime=-pt,o.render(Math.max(0,-h)||0)),m&&Ad(hi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-pt&&!h?l:i<pt?0:i,f,d,x,g,m,p,b,_,y;if(!c)RM(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,_=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(f=Nt(u%g),u===l?(x=this._repeat,f=c):(x=~~(u/g),x&&x===Nt(u/g)&&(f=c,x--),f>c&&(f=c)),p=this._yoyo&&x&1,p&&(y=this._yEase,f=c-f),m=$s(this._tTime,g),f===o&&!a&&this._initted&&x===m)return this._tTime=u,this;x!==m&&(_&&this._yEase&&Hd(_,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(Nt(g*x),!0).invalidate()._lock=0))}if(!this._initted){if(Rd(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&x!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!o&&!s&&!x&&(mn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;_&&_.render(i<0?i:_._dur*_._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&gc(this,i,s,a),mn(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&mn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&gc(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ni(this,1),!s&&!(h&&!o)&&(u||o||p)&&(mn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Yr||pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||xh(this,c),h=this._ease(c/this._dur),YM(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(mo(this,0),this.parent||Ed(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Sr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ri&&Ri.vars.overwrite!==!0)._first||Sr(this),this.parent&&a!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?wn(i):o,c=this._ptLookup,h=this._pt,u,f,d,x,g,m,p;if((!s||s==="all")&&TM(o,l))return s==="all"&&(this._pt=0),Sr(this);for(u=this._op=this._op||[],s!=="all"&&(Ft(s)&&(g={},sn(s,function(b){return g[b]=1}),s=g),s=KM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(u[p]=s,x=f,d={}):(d=u[p]=u[p]||{},x=s);for(g in x)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&fo(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&Sr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Lr(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Lr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return yt.killTweensOf(i,s,a)},e}(Kr);Cn(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});sn("staggerTo,staggerFrom,staggerFromTo",function(r){Rt[r]=function(){var e=new jt,t=vc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var gh=function(e,t,n){return e[t]=n},Kd=function(e,t,n){return e[t](n)},JM=function(e,t,n,i){return e[t](i.fp,n)},ZM=function(e,t,n){return e.setAttribute(t,n)},_h=function(e,t){return Et(e[t])?Kd:lh(e[t])&&e.setAttribute?ZM:gh},jd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$M=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Jd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},vh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},QM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},eb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?fo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},tb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Zd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},rn=function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||jd,this.d=l||this,this.set=c||gh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=tb,this.m=n,this.mt=s,this.tween=i},r}();sn(dh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return fh[r]=1});gn.TweenMax=gn.TweenLite=Rt;gn.TimelineLite=gn.TimelineMax=jt;yt=new jt({sortChildren:!1,defaults:Zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xn.stringFilter=kd;var rs=[],Ga={},nb=[],of=0,ib=0,al=function(e){return(Ga[e]||nb).map(function(t){return t()})},Sc=function(){var e=Date.now(),t=[];e-of>2&&(al("matchMediaInit"),rs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Hn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),al("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),of=e,al("matchMedia"))},$d=function(){function r(t,n){this.selector=n&&yc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ib++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Et(n)&&(s=i,i=n,n=Et);var a=this,o=function(){var c=xt,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=yc(s)),xt=a,u=i.apply(a,arguments),Et(u)&&a._r.push(u),xt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Et?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=xt;xt=null,n(this),xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Rt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof jt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Rt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=rs.length;a--;)rs[a].id===this.id&&rs.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),sb=function(){function r(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Zn(n)||(n={matches:n});var a=new $d(0,s||this.scope),o=a.conditions={},l,c,h;xt&&!a.selector&&(a.selector=xt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Hn.matchMedia(n[c]),l&&(rs.indexOf(a)<0&&rs.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Sc):l.addEventListener("change",Sc)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),eo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Od(i)})},timeline:function(e){return new jt(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ft(e)&&(e=wn(e)[0]);var s=ns(e||{}).get,a=n?Td:Sd;return n==="native"&&(n=""),e&&(t?a((dn[t]&&dn[t].get||s)(e,t,n,i)):function(o,l,c){return a((dn[o]&&dn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=wn(e),e.length>1){var i=e.map(function(h){return on.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var a=dn[t],o=ns(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;Ds._pt=0,u.init(e,n?h+n:h,Ds,0,[e]),u.render(1,u),Ds._pt&&vh(1,Ds)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=on.to(e,cs((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ss(e.ease,Zs.ease)),tf(Zs,e||{})},config:function(e){return tf(xn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!dn[o]&&!gn[o]&&Wr(t+" effect requires "+o+" plugin.")}),nl[t]=function(o,l,c){return n(wn(o),Cn(l||{},s),c)},a&&(jt.prototype[t]=function(o,l,c){return this.add(nl[t](o,Zn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){tt[e]=ss(t)},parseEase:function(e,t){return arguments.length?ss(e,t):tt},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new jt(e),i,s;for(n.smoothChildTiming=nn(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,i=yt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Rt&&i.vars.onComplete===i._targets[0]))&&Wn(n,i,i._start-i._delay),i=s;return Wn(yt,n,0),n},context:function(e,t){return e?new $d(e,t):xt},matchMedia:function(e){return new sb(e)},matchMediaRefresh:function(){return rs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Sc()},addEventListener:function(e,t){var n=Ga[e]||(Ga[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ga[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:FM,wrapYoyo:OM,distribute:Ld,random:Id,snap:Dd,normalize:UM,getUnit:Vt,clamp:LM,splitColor:Bd,toArray:wn,selector:yc,mapRange:Ud,pipe:IM,unitize:NM,interpolate:BM,shuffle:Pd},install:_d,effects:nl,ticker:pn,updateRoot:jt.updateRoot,plugins:dn,globalTimeline:yt,core:{PropTween:rn,globals:vd,Tween:Rt,Timeline:jt,Animation:Kr,getCache:ns,_removeLinkedListItem:fo,reverting:function(){return Ht},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return oh=e}}};sn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return eo[r]=Rt[r]});pn.add(jt.updateRoot);Ds=eo.to({},{duration:0});var rb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ab=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=rb(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},ol=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ft(s)&&(l={},sn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ab(o,s)}}}},on=eo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ht?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ol("roundProps",Mc),ol("modifiers"),ol("snap",Dd))||eo;Rt.version=jt.version=on.version="3.12.5";gd=1;ch()&&er();tt.Power0;tt.Power1;tt.Power2;tt.Power3;tt.Power4;tt.Linear;tt.Quad;tt.Cubic;tt.Quart;tt.Quint;tt.Strong;tt.Elastic;tt.Back;tt.SteppedEase;tt.Bounce;tt.Sine;tt.Expo;tt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var lf,Ci,Os,yh,ts,cf,Mh,ob=function(){return typeof window<"u"},gi={},Ji=180/Math.PI,Bs=Math.PI/180,Ps=Math.atan2,hf=1e8,bh=/([A-Z])/g,lb=/(left|right|width|margin|padding|x)/i,cb=/[\s,\(]\S/,Kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ub=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Qd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ep=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},db=function(e,t,n){return e.style[t]=n},pb=function(e,t,n){return e.style.setProperty(t,n)},mb=function(e,t,n){return e._gsap[t]=n},xb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},gb=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},_b=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},bt="transform",an=bt+"Origin",vb=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in gi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Kn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ui(i,o)}):this.tfm[e]=a.x?a[e]:ui(i,e),e===an&&(this.tfm.zOrigin=a.zOrigin);else return Kn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(bt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(an,t,"")),e=bt}(s||t)&&this.props.push(e,t,s[e])},tp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},yb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(bh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Mh(),(!s||!s.isStart)&&!n[bt]&&(tp(n),i.zOrigin&&n[an]&&(n[an]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},np=function(e,t){var n={target:e,props:[],revert:yb,save:vb};return e._gsap||on.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},ip,Ec=function(e,t){var n=Ci.createElementNS?Ci.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ci.createElement(e);return n&&n.style?n:Ci.createElement(e)},jn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(bh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,tr(t)||t,1)||""},uf="O,Moz,ms,Ms,Webkit".split(","),tr=function(e,t,n){var i=t||ts,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(uf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?uf[a]:"")+e},wc=function(){ob()&&window.document&&(lf=window,Ci=lf.document,Os=Ci.documentElement,ts=Ec("div")||{style:{}},Ec("div"),bt=tr(bt),an=bt+"Origin",ts.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ip=!!tr("perspective"),Mh=on.core.reverting,yh=1)},ll=function r(e){var t=Ec("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Os.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Os.removeChild(t),this.style.cssText=s,a},ff=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},sp=function(e){var t;try{t=e.getBBox()}catch{t=ll.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ll||(t=ll.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ff(e,["x","cx","x1"])||0,y:+ff(e,["y","cy","y1"])||0,width:0,height:0}:t},rp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&sp(e))},hs=function(e,t){if(t){var n=e.style,i;t in gi&&t!==an&&(t=bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(bh,"-$1").toLowerCase())):n.removeAttribute(t)}},Pi=function(e,t,n,i,s,a){var o=new rn(e._pt,t,n,0,1,a?ep:Qd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},df={deg:1,rad:1,turn:1},Mb={grid:1,flex:1},Ui=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ts.style,l=lb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",x,g,m,p;if(i===a||!s||df[i]||df[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&rp(e),(d||a==="%")&&(gi[t]||~t.indexOf("adius")))return x=p?e.getBBox()[l?"width":"height"]:e[h],wt(d?s/x*u:s/100*x);if(o[l?"width":"height"]=u+(f?a:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ci||!g.appendChild)&&(g=Ci.body),m=g._gsap,m&&d&&m.width&&l&&m.time===pn.time&&!m.uncache)return wt(s/m.width*u);if(d&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=u+i,x=e[h],b?e.style[t]=b:hs(e,t)}else(d||a==="%")&&!Mb[jn(g,"display")]&&(o.position=jn(e,"position")),g===e&&(o.position="static"),g.appendChild(ts),x=ts[h],g.removeChild(ts),o.position="absolute";return l&&d&&(m=ns(g),m.time=pn.time,m.width=g[h]),wt(f?x*s/u:x&&s?u/x*s:0)},ui=function(e,t,n,i){var s;return yh||wc(),t in Kn&&t!=="transform"&&(t=Kn[t],~t.indexOf(",")&&(t=t.split(",")[0])),gi[t]&&t!=="transform"?(s=Jr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:no(jn(e,an))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=to[t]&&to[t](e,t,n)||jn(e,t)||Md(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ui(e,t,s,n)+n:s},bb=function(e,t,n,i){if(!n||n==="none"){var s=tr(t,e,1),a=s&&jn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=jn(e,"borderTopColor"))}var o=new rn(this._pt,e.style,t,0,1,Jd),l=0,c=0,h,u,f,d,x,g,m,p,b,_,y,E;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=jn(e,t)||i,g?e.style[t]=g:hs(e,t)),h=[n,i],kd(h),n=h[0],i=h[1],f=n.match(Ls)||[],E=i.match(Ls)||[],E.length){for(;u=Ls.exec(i);)m=u[0],b=i.substring(l,u.index),x?x=(x+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(x=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),m.charAt(1)==="="&&(m=Fs(d,m)+y),p=parseFloat(m),_=m.substr((p+"").length),l=Ls.lastIndex-_.length,_||(_=_||xn.units[t]||y,l===i.length&&(i+=_,o.e+=_)),y!==_&&(d=Ui(e,t,g,_)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:d,c:p-d,m:x&&x<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?ep:Qd;return md.test(i)&&(o.e=0),this._pt=o,o},pf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Sb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=pf[n]||n,t[1]=pf[i]||i,t.join(" ")},Tb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],gi[o]&&(l=1,o=o==="transformOrigin"?an:bt),hs(n,o);l&&(hs(n,bt),a&&(a.svg&&n.removeAttribute("transform"),Jr(n,1),a.uncache=1,tp(i)))}},to={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new rn(e._pt,t,n,0,0,Tb);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},jr=[1,0,0,1,0,0],ap={},op=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},mf=function(e){var t=jn(e,bt);return op(t)?jr:t.substr(7).match(pd).map(wt)},Sh=function(e,t){var n=e._gsap||ns(e),i=e.style,s=mf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?jr:s):(s===jr&&!e.offsetParent&&e!==Os&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Os.appendChild(e)),s=mf(e),l?i.display=l:hs(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Os.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ac=function(e,t,n,i,s,a){var o=e._gsap,l=s||Sh(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],x=l[1],g=l[2],m=l[3],p=l[4],b=l[5],_=t.split(" "),y=parseFloat(_[0])||0,E=parseFloat(_[1])||0,T,A,R,v;n?l!==jr&&(A=d*m-x*g)&&(R=y*(m/A)+E*(-g/A)+(g*b-m*p)/A,v=y*(-x/A)+E*(d/A)-(d*b-x*p)/A,y=R,E=v):(T=sp(e),y=T.x+(~_[0].indexOf("%")?y/100*T.width:y),E=T.y+(~(_[1]||_[0]).indexOf("%")?E/100*T.height:E)),i||i!==!1&&o.smooth?(p=y-c,b=E-h,o.xOffset=u+(p*d+b*g)-p,o.yOffset=f+(p*x+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[an]="0px 0px",a&&(Pi(a,o,"xOrigin",c,y),Pi(a,o,"yOrigin",h,E),Pi(a,o,"xOffset",u,o.xOffset),Pi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},Jr=function(e,t){var n=e._gsap||new Wd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=jn(e,an)||"0",h,u,f,d,x,g,m,p,b,_,y,E,T,A,R,v,M,L,I,U,F,B,k,X,H,ne,ie,xe,Ae,Le,Ve,je;return h=u=f=g=m=p=b=_=y=0,d=x=1,n.svg=!!(e.getCTM&&rp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),i.scale=i.rotate=i.translate="none"),A=Sh(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Ac(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),E=n.xOrigin||0,T=n.yOrigin||0,A!==jr&&(L=A[0],I=A[1],U=A[2],F=A[3],h=B=A[4],u=k=A[5],A.length===6?(d=Math.sqrt(L*L+I*I),x=Math.sqrt(F*F+U*U),g=L||I?Ps(I,L)*Ji:0,b=U||F?Ps(U,F)*Ji+g:0,b&&(x*=Math.abs(Math.cos(b*Bs))),n.svg&&(h-=E-(E*L+T*U),u-=T-(E*I+T*F))):(je=A[6],Le=A[7],ie=A[8],xe=A[9],Ae=A[10],Ve=A[11],h=A[12],u=A[13],f=A[14],R=Ps(je,Ae),m=R*Ji,R&&(v=Math.cos(-R),M=Math.sin(-R),X=B*v+ie*M,H=k*v+xe*M,ne=je*v+Ae*M,ie=B*-M+ie*v,xe=k*-M+xe*v,Ae=je*-M+Ae*v,Ve=Le*-M+Ve*v,B=X,k=H,je=ne),R=Ps(-U,Ae),p=R*Ji,R&&(v=Math.cos(-R),M=Math.sin(-R),X=L*v-ie*M,H=I*v-xe*M,ne=U*v-Ae*M,Ve=F*M+Ve*v,L=X,I=H,U=ne),R=Ps(I,L),g=R*Ji,R&&(v=Math.cos(R),M=Math.sin(R),X=L*v+I*M,H=B*v+k*M,I=I*v-L*M,k=k*v-B*M,L=X,B=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=wt(Math.sqrt(L*L+I*I+U*U)),x=wt(Math.sqrt(k*k+je*je)),R=Ps(B,k),b=Math.abs(R)>2e-4?R*Ji:0,y=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!op(jn(e,bt)),X&&e.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(d*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(x*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=wt(d),n.scaleY=wt(x),n.rotation=wt(g)+o,n.rotationX=wt(m)+o,n.rotationY=wt(p)+o,n.skewX=b+o,n.skewY=_+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[an]=no(c)),n.xOffset=n.yOffset=0,n.force3D=xn.force3D,n.renderTransform=n.svg?wb:ip?lp:Eb,n.uncache=0,n},no=function(e){return(e=e.split(" "))[0]+" "+e[1]},cl=function(e,t,n){var i=Vt(t);return wt(parseFloat(t)+parseFloat(Ui(e,"x",n+"px",i)))+i},Eb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lp(e,t)},qi="0deg",_r="0px",Yi=") ",lp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,x=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,_=n.zOrigin,y="",E=p==="auto"&&e&&e!==1||p===!0;if(_&&(u!==qi||h!==qi)){var T=parseFloat(h)*Bs,A=Math.sin(T),R=Math.cos(T),v;T=parseFloat(u)*Bs,v=Math.cos(T),a=cl(b,a,A*v*-_),o=cl(b,o,-Math.sin(T)*-_),l=cl(b,l,R*v*-_+_)}m!==_r&&(y+="perspective("+m+Yi),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||a!==_r||o!==_r||l!==_r)&&(y+=l!==_r||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Yi),c!==qi&&(y+="rotate("+c+Yi),h!==qi&&(y+="rotateY("+h+Yi),u!==qi&&(y+="rotateX("+u+Yi),(f!==qi||d!==qi)&&(y+="skew("+f+", "+d+Yi),(x!==1||g!==1)&&(y+="scale("+x+", "+g+Yi),b.style[bt]=y||"translate(0, 0)"},wb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,x=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,_=parseFloat(a),y=parseFloat(o),E,T,A,R,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Bs,c*=Bs,E=Math.cos(l)*u,T=Math.sin(l)*u,A=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=Bs,v=Math.tan(c-h),v=Math.sqrt(1+v*v),A*=v,R*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),E*=v,T*=v)),E=wt(E),T=wt(T),A=wt(A),R=wt(R)):(E=u,R=f,T=A=0),(_&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(_=Ui(d,"x",a,"px"),y=Ui(d,"y",o,"px")),(x||g||m||p)&&(_=wt(_+x-(x*E+g*A)+m),y=wt(y+g-(x*T+g*R)+p)),(i||s)&&(v=d.getBBox(),_=wt(_+i/100*v.width),y=wt(y+s/100*v.height)),v="matrix("+E+","+T+","+A+","+R+","+_+","+y+")",d.setAttribute("transform",v),b&&(d.style[bt]=v)},Ab=function(e,t,n,i,s){var a=360,o=Ft(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ji:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*hf)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*hf)%a-~~(c/a)*a)),e._pt=f=new rn(e._pt,t,n,i,c,hb),f.e=h,f.u="deg",e._props.push(n),f},xf=function(e,t){for(var n in t)e[n]=t[n];return e},Rb=function(e,t,n){var i=xf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,x;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[bt]=t,o=Jr(n,1),hs(n,bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[bt],a[bt]=t,o=Jr(n,1),a[bt]=c);for(l in gi)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=Vt(c),x=Vt(h),u=d!==x?Ui(n,l,c,x):parseFloat(c),f=parseFloat(h),e._pt=new rn(e._pt,o,l,u,f-u,Tc),e._pt.u=x||0,e._props.push(l));xf(o,i)};sn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});to[e>1?"border"+r:r]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(x){return ui(o,x,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(x,g){return d[x]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,u)}});var cp={name:"css",register:wc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,f,d,x,g,m,p,b,_,y,E,T,A,R;yh||wc(),this.styles=this.styles||np(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(dn[g]&&Xd(g,t,n,i,e,s)))){if(d=typeof h,x=to[g],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=qr(h)),x)x(this,e,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",Ii.lastIndex=0,Ii.test(c)||(m=Vt(c),p=Vt(h)),p?m!==p&&(c=Ui(e,g,c,p)+p):m&&(h+=m),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Ft(c)&&~c.indexOf("random(")&&(c=qr(c)),Vt(c+"")||c==="auto"||(c+=xn.units[g]||Vt(ui(e,g))||""),(c+"").charAt(1)==="="&&(c=ui(e,g))):c=ui(e,g),f=parseFloat(c),b=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),g in Kn&&(g==="autoAlpha"&&(f===1&&ui(e,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,o.visibility),Pi(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Kn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),_=g in gi,_){if(this.styles.save(g),y||(E=e._gsap,E.renderTransform&&!t.parseTransform||Jr(e,t.parseTransform),T=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new rn(this._pt,o,bt,0,1,E.renderTransform,E,0,-1),y.dep=1),g==="scale")this._pt=new rn(this._pt,E,"scaleY",E.scaleY,(b?Fs(E.scaleY,b+u):u)-E.scaleY||0,Tc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(an,0,o[an]),h=Sb(h),E.svg?Ac(e,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==E.zOrigin&&Pi(this,E,"zOrigin",E.zOrigin,p),Pi(this,o,g,no(c),no(h)));continue}else if(g==="svgOrigin"){Ac(e,h,1,T,0,this);continue}else if(g in ap){Ab(this,E,g,f,b?Fs(f,b+h):h);continue}else if(g==="smoothOrigin"){Pi(this,E,"smooth",E.smooth,h);continue}else if(g==="force3D"){E[g]=h;continue}else if(g==="transform"){Rb(this,h,e);continue}}else g in o||(g=tr(g)||g);if(_||(u||u===0)&&(f||f===0)&&!cb.test(h)&&g in o)m=(c+"").substr((f+"").length),u||(u=0),p=Vt(h)||(g in xn.units?xn.units[g]:m),m!==p&&(f=Ui(e,g,c,p)),this._pt=new rn(this._pt,_?E:o,g,f,(b?Fs(f,b+u):u)-f,!_&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?fb:Tc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ub);else if(g in o)bb.call(this,e,g,c,b?b+h:h);else if(g in e)this.add(e,g,c||e[g],b?b+h:h,i,s);else if(g!=="parseTransform"){uh(g,h);continue}_||(g in o?R.push(g,0,o[g]):R.push(g,1,c||e[g])),a.push(g)}}A&&Zd(this)},render:function(e,t){if(t.tween._time||!Mh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ui,aliases:Kn,getSetter:function(e,t,n){var i=Kn[t];return i&&i.indexOf(",")<0&&(t=i),t in gi&&t!==an&&(e._gsap.x||ui(e,"x"))?n&&cf===n?t==="scale"?xb:mb:(cf=n||{})&&(t==="scale"?gb:_b):e.style&&!lh(e.style[t])?db:~t.indexOf("-")?pb:_h(e,t)},core:{_removeProperty:hs,_getMatrix:Sh}};on.utils.checkPrefix=tr;on.core.getStyleSaver=np;(function(r,e,t,n){var i=sn(r+","+e+","+t,function(s){gi[s]=1});sn(e,function(s){xn.units[s]="deg",ap[s]=1}),Kn[i[13]]=r+","+e,sn(n,function(s){var a=s.split(":");Kn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){xn.units[r]="px"});on.registerPlugin(cp);var et=on.registerPlugin(cp)||on;et.core.Tween;class nr{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function h(d){d.addEventListener("end",u),await e.xr.setSession(d),n.textContent="EXIT VR",c=d}function u(){c.removeEventListener("end",u),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",f).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(d=>{console.warn(d)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){s(),n.textContent="VR NOT SUPPORTED"}function o(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():a(),c&&nr.xrSessionIsGranted&&n.click()}).catch(o),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{nr.xrSessionIsGranted=!0})}}}nr.xrSessionIsGranted=!1;nr.registerSessionGrantedListener();function Cb(){const r=new t0;r.background=new Fe(0);const e=new Kt(50,window.innerWidth/window.innerHeight,.1,50);e.position.set(0,1.6,3),r.add(e);const t=new pM({antialias:!1,stencil:!1,depth:!0,powerPreference:"high-performance",alpha:!0});t.setSize(window.innerWidth,window.innerHeight),t.xr.enabled=!0,t.shadowMap.enabled=!0,t.shadowMap.type=Uc,t.outputColorSpace=It,t.toneMapping=Tf,t.toneMappingExposure=1.4,document.body.appendChild(t.domElement);const n=nr.createButton(t,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});return n.style.display="none",["VRButton","ARButton","XRButton"].forEach(i=>{const s=document.getElementById(i);s&&s.parentNode&&s.parentNode.removeChild(s)}),document.querySelectorAll('.vr-button, .ar-button, .webxr-button, .xr-button, button[aria-label="Enter VR"], button[aria-label="Enter XR"], button[aria-label="Enter AR"]').forEach(i=>{i&&i.parentNode&&i.parentNode.removeChild(i)}),document.body.style.cursor="pointer",document.body.addEventListener("click",()=>{n.click()}),document.body.style.transition="background-color 0.3s ease",document.body.addEventListener("mouseenter",()=>{document.body.style.backgroundColor="rgba(0,0,0,0.1)"}),document.body.addEventListener("mouseleave",()=>{document.body.style.backgroundColor=""}),window.addEventListener("resize",()=>{const i=window.innerWidth,s=window.innerHeight;e.aspect=i/s,e.updateProjectionMatrix(),t.setSize(i,s)}),{scene:r,camera:e,renderer:t}}function Pb(r,{onSessionStart:e,onSessionEnd:t}={}){r.xr.addEventListener("sessionstart",()=>{e&&e()}),r.xr.addEventListener("sessionend",()=>{t&&t()})}const Lb=.002,Db=.006,gf=.02,Ib=new URLSearchParams(window.location.search).has("debug");class Nb{constructor(e,t){this.renderer=e,this.scene=t;const n=new Ys(Lb,16,16),i=new dt({color:16711680,opacity:0,transparent:!0});this.lThumbObj=new Qe(n,i.clone()),this.lIndexObj=new Qe(n,i.clone()),this.rThumbObj=new Qe(n,i.clone()),this.rIndexObj=new Qe(n,i.clone()),t.add(this.lThumbObj,this.lIndexObj,this.rThumbObj,this.rIndexObj);const s=new Ys(Db,16,16),a=new Tu({color:16777215}),o=new Tu({color:65280});this.lPinchSphere=new Qe(s,a),this.rPinchSphere=new Qe(s,o),t.add(this.lPinchSphere,this.rPinchSphere),this.lPinchSphere.visible=!1,this.rPinchSphere.visible=!1,this.hand1=e.xr.getHand(0),this.hand2=e.xr.getHand(1),t.add(this.hand1),t.add(this.hand2),this.controller1=e.xr.getController(0),this.controller2=e.xr.getController(1),this.controller1Selecting=!1,this.controller2Selecting=!1,this.hand1Tracked=!1,this.hand2Tracked=!1,this._setupController(this.controller1,"controller 0",l=>{this.controller1Selecting=l}),this._setupController(this.controller2,"controller 1",l=>{this.controller2Selecting=l}),t.add(this.controller1,this.controller2),e.xr.addEventListener("sessionstart",()=>{const l=e.xr.getSession();this._debugLog("xr sessionstart",{inputSources:l?Array.from(l.inputSources).map(this._describeInputSource):[]})}),e.xr.addEventListener("sessionend",()=>{this.controller1Selecting=!1,this.controller2Selecting=!1,this._debugLog("xr sessionend")}),this.lPinchOn=!1,this.rPinchOn=!1,this.leftHandRotationActive=!1,this.rightHandRotationActive=!1,this.lastLeftHandX=0,this.lastRightHandX=0,this.chairRotationSpeed=5,this.onRotateChair=null,this._tmp=new N,this._raycaster=new wx,this._controllerDirection=new N,this._controllerQuaternion=new $n}_setupController(e,t,n){e.addEventListener("selectstart",()=>{n(!0),this._debugLog(`${t} selectstart`)}),e.addEventListener("selectend",()=>{n(!1),this._debugLog(`${t} selectend`)}),e.addEventListener("connected",i=>{this._debugLog(`${t} connected`,this._describeInputSource(i.data))})}_describeInputSource(e){return e?{handedness:e.handedness||"none",targetRayMode:e.targetRayMode||"unknown",hasHand:!!e.hand,profiles:e.profiles||[]}:null}_debugLog(e,t=null){Ib&&(t===null?console.log(`[chair-vr] ${e}`):console.log(`[chair-vr] ${e}`,t))}_getAvailableHands(){const e=[];return this._hasTrackedPinchJoints(this.hand1)&&e.push(this.hand1),this._hasTrackedPinchJoints(this.hand2)&&e.push(this.hand2),e}_isJointTracked(e){var t,n,i;return!!e&&Number.isFinite((t=e.position)==null?void 0:t.x)&&Number.isFinite((n=e.position)==null?void 0:n.y)&&Number.isFinite((i=e.position)==null?void 0:i.z)&&e.visible!==!1}_hasTrackedPinchJoints(e){return!!(e!=null&&e.joints)&&this._isJointTracked(e.joints["thumb-tip"])&&this._isJointTracked(e.joints["index-finger-tip"])}_getControllerHitPoint(e,t=[]){if(!e)return null;e.updateMatrixWorld(!0),this._raycaster.ray.origin.setFromMatrixPosition(e.matrixWorld),e.getWorldQuaternion(this._controllerQuaternion),this._raycaster.ray.direction.set(0,0,-1).applyQuaternion(this._controllerQuaternion).normalize();const n=t.filter(Boolean);if(!n.length)return null;const i=this._raycaster.intersectObjects(n,!0);return i.length?i[0].point:null}_updateFallbackPinch(e,t,n,i=[]){if(!e)return!1;const s=this._getControllerHitPoint(e,i);return s?t.position.copy(s):(e.updateMatrixWorld(!0),e.getWorldPosition(t.position)),n.position.copy(t.position),!0}getPointerPositions(){const e=[];return(this.hand1Tracked||this.controller1Selecting)&&e.push(this.lIndexObj.position),(this.hand2Tracked||this.controller2Selecting)&&e.push(this.rIndexObj.position),e}update(e,t={}){const{chairModel:n,pointerTargets:i=[]}=t,s=this._hasTrackedPinchJoints(this.hand1)?this.hand1:null,a=this._hasTrackedPinchJoints(this.hand2)?this.hand2:null,o=[s,a].filter(Boolean);if(this.hand1Tracked=!!s,this.hand2Tracked=!!a,this.lPinchSphere.visible=!1,this.rPinchSphere.visible=!1,s&&s.joints){const l=s.joints["thumb-tip"],c=s.joints["index-finger-tip"];l&&this.lThumbObj.position.copy(l.position),c&&this.lIndexObj.position.copy(c.position)}if(a&&a.joints){const l=a.joints["thumb-tip"],c=a.joints["index-finger-tip"];l&&this.rThumbObj.position.copy(l.position),c&&this.rIndexObj.position.copy(c.position)}if(this.lPinchOn=!1,this.rPinchOn=!1,s&&s.joints&&s.joints["thumb-tip"]&&s.joints["index-finger-tip"]){const l=s.joints["thumb-tip"];s.joints["index-finger-tip"].position.distanceTo(l.position)<gf&&(this.lPinchOn=!0,this.lPinchSphere.position.copy(l.position))}else this.controller1Selecting&&this._updateFallbackPinch(this.controller1,this.lThumbObj,this.lIndexObj,i)&&(this.lPinchOn=!0,this.lPinchSphere.position.copy(this.lThumbObj.position));if(a&&a.joints&&a.joints["thumb-tip"]&&a.joints["index-finger-tip"]){const l=a.joints["thumb-tip"];a.joints["index-finger-tip"].position.distanceTo(l.position)<gf&&(this.rPinchOn=!0,this.rPinchSphere.position.copy(l.position))}else this.controller2Selecting&&this._updateFallbackPinch(this.controller2,this.rThumbObj,this.rIndexObj,i)&&(this.rPinchOn=!0,this.rPinchSphere.position.copy(this.rThumbObj.position));if(n&&this.onRotateChair){if(this.lPinchOn){const l=this.lPinchSphere.position.x;if(!this.leftHandRotationActive)this.leftHandRotationActive=!0,this.lastLeftHandX=l;else{const c=l-this.lastLeftHandX;Math.abs(c)>.001&&this.onRotateChair(c*this.chairRotationSpeed),this.lastLeftHandX=l}}else this.leftHandRotationActive=!1;if((o.length>1||this.controller2Selecting)&&this.rPinchOn&&(a||this.controller2Selecting)){const l=this.rPinchSphere.position.x;if(!this.rightHandRotationActive)this.rightHandRotationActive=!0,this.lastRightHandX=l;else{const c=l-this.lastRightHandX;Math.abs(c)>.001&&this.onRotateChair(c*this.chairRotationSpeed),this.lastRightHandX=l}}else this.rightHandRotationActive=!1}}}function _f(r,e){if(e===$p)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===tc||e===If){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===tc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Ub extends Fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new eS(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Cr.extractUrlBase(e);a=Cr.resolveURL(c,this.path)}else a=Cr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new lo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hp){try{a[Ze.KHR_BINARY_GLTF]=new tS(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new pS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:a[u]=new Bb;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new nS(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[u]=new iS;break;case Ze.KHR_MESH_QUANTIZATION:a[u]=new sS;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Fb(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ob{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Fe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Wt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new cc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new fx(h),c.distance=u;break;case"spot":c=new hx(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Vn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Bb{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return dt}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Wt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,It))}return Promise.all(i)}}class zb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class kb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(o,o)}return Promise.all(s)}}class Vb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Hb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Gb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Wt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Wb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Xb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(o[0],o[1],o[2],Wt),Promise.all(s)}}class qb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Yb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(o[0],o[1],o[2],Wt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(s)}}class Kb{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class jb{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Jb{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Zb{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class $b{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Qb{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class eS{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const x of u){const g=new Xe,m=new N,p=new $n,b=new N(1,1,1),_=new o0(x.geometry,x.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,g.compose(m,p,b));for(const y in l)if(y==="_COLOR_0"){const E=l[y];_.instanceColor=new ic(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&x.geometry.setAttribute(y,l[y]);gt.prototype.copy.call(_,x),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const hp="glTF",vr=12,vf={JSON:1313821514,BIN:5130562};class tS{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-vr,s=new DataView(e,vr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===vf.JSON){const c=new Uint8Array(e,vr+a,o);this.content=n.decode(c)}else if(l===vf.BIN){const c=vr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class nS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Rc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Rc[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=zs[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const x in d.attributes){const g=d.attributes[x],m=l[x];m!==void 0&&(g.normalized=m)}u(d)},o,c,Wt,f)})})}}class iS{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class sS{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class up extends Qr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,x=e*c,g=x-c,m=-2*d+3*f,p=d-f,b=1-m,_=p-f+u;for(let y=0;y!==o;y++){const E=a[g+y+o],T=a[g+y+l]*h,A=a[x+y+o],R=a[x+y]*h;s[y]=b*E+_*T+m*A+p*R}return s}}const rS=new $n;class aS extends up{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return rS.fromArray(s).normalize().toArray(s),s}}const Mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yf={9728:Jt,9729:Ct,9984:wf,9985:Na,9986:yr,9987:Xn},Mf={33071:Sn,33648:Wa,10497:Gs},hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oS={CUBICSPLINE:void 0,LINEAR:Br,STEP:Or},ul={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new oo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Rn})),r.DefaultMaterial}function Ki(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cS(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function hS(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uS(r){let e;const t=r.extensions&&r.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fl(t.attributes):e=r.indices+":"+fl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+fl(r.targets[n]);return e}function fl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Cc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fS(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const dS=new Xe;class pS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new sd(this.options.manager):this.textureLoader=new mx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ki(s,o,i),Vn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Cr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=hl[i.type],o=zs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Zt(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=hl[i.type],c=zs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let g,m;if(d&&d!==u){const p=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(b);_||(g=new c(o,p*d,i.count*d/h),_=new n0(g,d/h),t.cache.add(b,_)),m=new jc(_,l,f%d/h,x)}else o===null?g=new c(i.count*l):g=new c(o,f,i.count*l),m=new Zt(g,l,x);if(i.sparse!==void 0){const p=hl.SCALAR,b=zs[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,E=new b(a[1],_,i.sparse.count*p),T=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,R=E.length;A<R;A++){const v=E[A];if(m.setX(v,T[A*l]),l>=2&&m.setY(v,T[A*l+1]),l>=3&&m.setZ(v,T[A*l+2]),l>=4&&m.setW(v,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return h.magFilter=yf[f.magFilter]||Ct,h.minFilter=yf[f.minFilter]||Xn,h.wrapS=Mf[f.wrapS]||Gs,h.wrapT=Mf[f.wrapT]||Gs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Jt&&h.minFilter!==Ct,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let x=f;t.isImageBitmapLoader===!0&&(x=function(g){const m=new Ut(g);m.needsUpdate=!0,f(m)}),t.load(Cr.resolveURL(u,s.path),x,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Vn(u,a),u.userData.mimeType=a.mimeType||fS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Xf,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Wf,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return oo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const u=i[Ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Fe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Wt),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,It)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ot);const h=s.alphaMode||ul.OPAQUE;if(h===ul.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ul.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==dt&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ue(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==dt&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==dt){const u=s.emissiveFactor;o.emissive=new Fe().setRGB(u[0],u[1],u[2],Wt)}return s.emissiveTexture!==void 0&&a!==dt&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,It)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Vn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ki(i,u,s),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return bf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=uS(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=bf(new ln,c,t),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?lS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,x=h.length;d<x;d++){const g=h[d],m=a[d];let p;const b=c[d];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new s0(g,b):new Qe(g,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=_f(p.geometry,If):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=_f(p.geometry,tc));else if(m.mode===Mn.LINES)p=new u0(g,b);else if(m.mode===Mn.LINE_STRIP)p=new $c(g,b);else if(m.mode===Mn.LINE_LOOP)p=new f0(g,b);else if(m.mode===Mn.POINTS)p=new d0(g,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&hS(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Vn(p,s),m.extensions&&Ki(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,x=u.length;d<x;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&Ki(i,u[0],s),u[0];const f=new Qi;s.extensions&&Ki(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,x=u.length;d<x;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(Am.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new sh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const f=new Xe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Jc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],x=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[x.input]:x.input,b=i.parameters!==void 0?i.parameters[x.output]:x.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(x),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],x=u[2],g=u[3],m=u[4],p=[];for(let _=0,y=f.length;_<y;_++){const E=f[_],T=d[_],A=x[_],R=g[_],v=m[_];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const M=n._createAnimationTracks(E,T,A,R,v);if(M)for(let L=0;L<M.length;L++)p.push(M[L])}const b=new tx(s,void 0,p);return Vn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,dS)});for(let d=0,x=u.length;d<x;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Gf:c.length>1?h=new Qi:c.length===1?h=c[0]:h=new gt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Vn(h,s),s.extensions&&Ki(n,h,s),s.matrix!==void 0){const u=new Xe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Qi;n.name&&(s.name=i.createUniqueName(n.name)),Vn(s,n),n.extensions&&Ki(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Fn||f instanceof Ut)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Ei[s.path]===Ei.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Ei[s.path]){case Ei.weights:c=Ks;break;case Ei.rotation:c=js;break;case Ei.translation:case Ei.scale:c=Js;break;default:switch(n.itemSize){case 1:c=Ks;break;case 2:case 3:default:c=Js;break}break}const h=i.interpolation!==void 0?oS[i.interpolation]:Br,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const x=new c(l[f]+"."+Ei[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Cc(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof js?aS:up;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mS(r,e,t){const n=e.attributes,i=new _i;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){const h=Cc(zs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new N,l=new N;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){const g=Cc(zs[f.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Qn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function bf(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Rc[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return nt.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Vn(r,e),mS(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cS(r,e.targets,t):r})}class xS extends lx{constructor(e){super(e),this.type=qn}parse(e){const a=function(R,v){switch(R){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(v||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(v||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(v||""))}},h=`
`,u=function(R,v,M){v=v||1024;let I=R.pos,U=-1,F=0,B="",k=String.fromCharCode.apply(null,new Uint16Array(R.subarray(I,I+128)));for(;0>(U=k.indexOf(h))&&F<v&&I<R.byteLength;)B+=k,F+=k.length,I+=128,k+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(I,I+128)));return-1<U?(M!==!1&&(R.pos+=F+U+1),B+k.slice(0,U)):!1},f=function(R){const v=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let B,k;for((R.pos>=R.byteLength||!(B=u(R)))&&a(1,"no header found"),(k=B.match(v))||a(3,"bad initial token"),F.valid|=1,F.programtype=k[1],F.string+=B+`
`;B=u(R),B!==!1;){if(F.string+=B+`
`,B.charAt(0)==="#"){F.comments+=B+`
`;continue}if((k=B.match(M))&&(F.gamma=parseFloat(k[1])),(k=B.match(L))&&(F.exposure=parseFloat(k[1])),(k=B.match(I))&&(F.valid|=2,F.format=k[1]),(k=B.match(U))&&(F.valid|=4,F.height=parseInt(k[1],10),F.width=parseInt(k[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||a(3,"missing format specifier"),F.valid&4||a(3,"missing image size specifier"),F},d=function(R,v,M){const L=v;if(L<8||L>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);L!==(R[2]<<8|R[3])&&a(3,"wrong scanline width");const I=new Uint8Array(4*v*M);I.length||a(4,"unable to allocate buffer space");let U=0,F=0;const B=4*L,k=new Uint8Array(4),X=new Uint8Array(B);let H=M;for(;H>0&&F<R.byteLength;){F+4>R.byteLength&&a(1),k[0]=R[F++],k[1]=R[F++],k[2]=R[F++],k[3]=R[F++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=L)&&a(3,"bad rgbe scanline format");let ne=0,ie;for(;ne<B&&F<R.byteLength;){ie=R[F++];const Ae=ie>128;if(Ae&&(ie-=128),(ie===0||ne+ie>B)&&a(3,"bad scanline data"),Ae){const Le=R[F++];for(let Ve=0;Ve<ie;Ve++)X[ne++]=Le}else X.set(R.subarray(F,F+ie),ne),ne+=ie,F+=ie}const xe=L;for(let Ae=0;Ae<xe;Ae++){let Le=0;I[U]=X[Ae+Le],Le+=L,I[U+1]=X[Ae+Le],Le+=L,I[U+2]=X[Ae+Le],Le+=L,I[U+3]=X[Ae+Le],U+=4}H--}return I},x=function(R,v,M,L){const I=R[v+3],U=Math.pow(2,I-128)/255;M[L+0]=R[v+0]*U,M[L+1]=R[v+1]*U,M[L+2]=R[v+2]*U,M[L+3]=1},g=function(R,v,M,L){const I=R[v+3],U=Math.pow(2,I-128)/255;M[L+0]=ua.toHalfFloat(Math.min(R[v+0]*U,65504)),M[L+1]=ua.toHalfFloat(Math.min(R[v+1]*U,65504)),M[L+2]=ua.toHalfFloat(Math.min(R[v+2]*U,65504)),M[L+3]=ua.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=f(m),b=p.width,_=p.height,y=d(m.subarray(m.pos),b,_);let E,T,A;switch(this.type){case en:A=y.length/4;const R=new Float32Array(A*4);for(let M=0;M<A;M++)x(y,M*4,R,M*4);E=R,T=en;break;case qn:A=y.length/4;const v=new Uint16Array(A*4);for(let M=0;M<A;M++)g(y,M*4,v,M*4);E=v,T=qn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:b,height:_,data:E,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){switch(a.type){case en:case qn:a.colorSpace=Wt,a.minFilter=Ct,a.magFilter=Ct,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,i)}}class fp extends Fi{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new lo(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=s.parse(JSON.parse(o));t&&t(l)},n,i)}parse(e){return new gS(e)}}class gS{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,n="ltr"){const i=[],s=_S(e,t,this.data,n);for(let a=0,o=s.length;a<o;a++)i.push(...s[a].toShapes());return i}}function _S(r,e,t,n){const i=Array.from(r),s=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let l=0,c=0;(n=="rtl"||n=="tb")&&i.reverse();for(let h=0;h<i.length;h++){const u=i[h];if(u===`
`)l=0,c-=a;else{const f=vS(u,s,l,c,t);n=="tb"?(l=0,c+=t.ascender*s):l+=f.offsetX,o.push(f.path)}}return o}function vS(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const a=new Ax;let o,l,c,h,u,f,d,x;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":o=g[m++]*e+t,l=g[m++]*e+n,a.moveTo(o,l);break;case"l":o=g[m++]*e+t,l=g[m++]*e+n,a.lineTo(o,l);break;case"q":c=g[m++]*e+t,h=g[m++]*e+n,u=g[m++]*e+t,f=g[m++]*e+n,a.quadraticCurveTo(u,f,c,h);break;case"b":c=g[m++]*e+t,h=g[m++]*e+n,u=g[m++]*e+t,f=g[m++]*e+n,d=g[m++]*e+t,x=g[m++]*e+n,a.bezierCurveTo(u,f,d,x,c,h);break}}return{offsetX:s.ha*e,path:a}}class Is extends nh{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}function yS(r){const e=new sd,t=new bn(.4,.6),n=e.load("/static/ui_frame.png"),i=new dt({map:n,transparent:!0,opacity:.4,side:Rn}),s=new Qe(t,i);s.position.set(0,0,0),r.add(s);const a=new bn(.38666,.0661),o=e.load("/static/ui_header-toggle.png"),l=new dt({map:o,transparent:!0,opacity:1,side:Ot,depthTest:!1,depthWrite:!1}),c=new Qe(a,l);c.position.set(0,.26,0),c.scale.set(0,0,0),r.add(c);const h=.38666*.432,u=h*44/145,f=new bn(h,u),d=e.load("/static/ui_header-toggle-switch.png"),x=new dt({map:d,transparent:!0,opacity:1,side:Ot,depthTest:!1,depthWrite:!1}),g=new Qe(f,x),m=new N(-.1,0,.001),p=new N(.05,0,.001);g.position.copy(m),c.add(g);let b=null,_=null;new fp().load("/static/fonts/helvetiker_regular.typeface.json",C=>{const j=new dt({color:16777215,transparent:!0,opacity:.9}),se=new dt({color:16766720,transparent:!0,opacity:.9}),re=new Is("Material",{font:C,size:.02,depth:0,curveSegments:12,bevelEnabled:!1});b=new Qe(re,se),re.computeBoundingBox(),b.position.set(m.x,m.y-.01,m.z+.002),b.position.x-=re.boundingBox.max.x*.5,c.add(b);const ee=new Is("Sizes",{font:C,size:.02,depth:0,curveSegments:12,bevelEnabled:!1});_=new Qe(ee,j),ee.computeBoundingBox(),_.position.set(p.x,p.y-.01,p.z+.002),_.position.x-=ee.boundingBox.max.x*.5,c.add(_),b.userData=b.userData||{},_.userData=_.userData||{},b.userData.defaultMaterial=j,b.userData.activeMaterial=se,_.userData.defaultMaterial=j,_.userData.activeMaterial=se});const E=new bn(.091,.278),T=new dt({transparent:!0,opacity:0,side:Ot,depthTest:!1,depthWrite:!1}),A=new Qe(E,T);A.position.set(-.26,0,.06),r.add(A);const R=e.load("/static/ui_button1.png"),v=e.load("/static/ui_button2.png"),M=e.load("/static/ui_button3.png"),L=e.load("/static/ui_buttonstroke.png");function I(C,j){const se=new bn(.06,.06),re=new dt({map:C,transparent:!0,opacity:1,side:Rn,depthTest:!1,depthWrite:!1}),ee=new Qe(se,re);return ee.position.set(0,j,0),A.add(ee),ee}const U=I(R,.09),F=I(v,0),B=I(M,-.09);function k(C){const j=new bn(.08,.08),se=new dt({map:L,transparent:!0,opacity:1,side:Ot,depthTest:!1,depthWrite:!1}),re=new Qe(j,se);return re.position.set(0,C,-.001),A.add(re),re}const X=k(.09);X.scale.set(1,1,1);const H=k(0);H.scale.set(0,0,0);const ne=k(-.09);ne.scale.set(0,0,0);const ie=new bn(.25,.25),xe=e.load("/static/ui_info.png"),Ae=new dt({map:xe,transparent:!0,opacity:1,side:Ot,depthTest:!1,depthWrite:!1}),Le=new Qe(ie,Ae);Le.position.set(.2,-.17,.16),r.add(Le);const Ve=new Ys(.018,32,32),je=new dt({color:16766720}),K=new Qe(Ve,je);K.position.set(.16,.26,0),r.add(K);const Z=new bn(.066,.0462),_e=e.load("/static/ui_pull.png"),Pe=new dt({map:_e,transparent:!0,side:Ot,depthTest:!1,depthWrite:!1}),Se=new Qe(Z,Pe);Se.position.set(.16,.31,.01),r.add(Se);const We=new gt;We.position.copy(K.position),r.add(We);const rt=new Ys(.006,32,32),Oe=new dt({color:16777215,depthTest:!1,depthWrite:!1}),$=new Qe(rt,Oe);return $.position.set(.16,.26,0),r.add($),{uiFrame:s,headerToggle:c,headerToggleSwitchMesh:g,togglePosA:m,togglePosB:p,materialTextMesh:b,sizesTextMesh:_,colorPanel:A,button1Mesh:U,button2Mesh:F,button3Mesh:B,buttonStroke1Mesh:X,buttonStroke2Mesh:H,buttonStroke3Mesh:ne,infoPanel:Le,switchButton:K,switchDot:$,pullPlane:Se,switchRoot:We}}let io="",so="",dl=null,Pc=!1,Lc="",Dc="",pl=null,Sf=!1;function MS(){if(io&&so)return Promise.resolve();if(Pc)return Promise.reject(new Error("Fresnel shader load previously failed."));const r=fetch("/static/shaders/fresnel_vertex.glsl").then(t=>t.text()).then(t=>{io=t}),e=fetch("/static/shaders/fresnel_fragment.glsl").then(t=>t.text()).then(t=>{so=t});return Promise.all([r,e]).then(()=>{}).catch(t=>{throw Pc=!0,console.error("Failed to load Fresnel shaders:",t),t})}function bS(){if(Lc&&Dc)return Promise.resolve();if(Sf)return Promise.reject(new Error("Sizes shader load previously failed."));const r=fetch("/static/shaders/sizes_vertex.glsl").then(t=>t.text()).then(t=>{Lc=t}),e=fetch("/static/shaders/sizes_fragment.glsl").then(t=>t.text()).then(t=>{Dc=t});return Promise.all([r,e]).then(()=>{}).catch(t=>{throw Sf=!0,console.error("Failed to load Sizes shaders:",t),t})}function SS(){return dl||(dl=new Bn({vertexShader:io,fragmentShader:so,uniforms:{outlineThickness:{value:2},outlineColor:{value:new Fe(16776960)}},side:Rn,transparent:!0,depthTest:!0,depthWrite:!0})),dl}function TS(){return pl||(pl=new Bn({vertexShader:Lc,fragmentShader:Dc,uniforms:{baseColor:{value:new Fe(16777215)},opacity:{value:.8}},side:Ot,transparent:!0,depthTest:!1,depthWrite:!1})),pl}function ES(r){!r||!r.isMesh||(r.userData||(r.userData={}),!r.userData.originalMaterialStored&&(r.userData.originalMaterial=Array.isArray(r.material)?r.material.slice():r.material,r.userData.originalMaterialStored=!0))}function Ic(r){if(!r||Pc)return;if(!io||!so){MS().then(()=>Ic(r)).catch(()=>{});return}const e=SS();r.traverse(t=>{var n;if(t.isMesh&&t.material&&((n=t.userData)!=null&&n.isOriginalChair)){if(ES(t),Array.isArray(t.material))for(let i=0;i<t.material.length;i++)t.material[i]=e;else t.material=e;t.material.needsUpdate=!0}})}function ml(r){r&&r.traverse(e=>{e.isMesh&&e.userData&&e.userData.originalMaterialStored&&e.userData.isOriginalChair&&(e.material=e.userData.originalMaterial,Array.isArray(e.material)?e.material.forEach(t=>{t&&(t.needsUpdate=!0)}):e.material&&(e.material.needsUpdate=!0))})}const wS=new N(0,1,0);class AS{constructor(e,t,n,i){this.scene=e,this.camera=t,this.renderer=n,this.handInput=i,this.baseComposition=null,this.chairModel=null,this.sizesModel=null,this.buttonState=!1,this.headerToggleIsRight=!1,this.delta=0,this.clock=new rd,this.stringMesh=null,this.switchButton=null,this.switchRoot=null,this.pullPlane=null,this.headerToggleLastTouchMs=0,this.HEADER_TOGGLE_TOUCH_COOLDOWN_MS=400,this.switchButtonAttached=!1,this.switchPullCount=0,this.buttonCooldowns={button1:0,button2:0,button3:0},this.BUTTON_COOLDOWN_TIME=500,this.buttonResetTimers={button1:0,button2:0,button3:0},this.BUTTON_RESET_DELAY=300,this.plasticMaterials=[],this.MAX_PR=1.5,this.targetMs=1e3/72,this.adaptivePR=Math.min(window.devicePixelRatio,this.MAX_PR),this.accum=0,this.compositionPositioned=!1,this.xrSessionStartTime=null,this._vA=new N,this._vB=new N,this._vC=new N,this._q=new $n,this._tmp1=new N,this._tmp2=new N,this._tmp3=new N}initLights(){const e=new px(16777215,.8);this.scene.add(e);const t=new cc(16777215,1.2);t.position.set(5,8,3),t.castShadow=!0,t.shadow.mapSize.set(512,512),t.shadow.bias=-5e-4,t.shadow.camera.near=.5,t.shadow.camera.far=50,t.shadow.camera.left=-10,t.shadow.camera.right=10,t.shadow.camera.top=10,t.shadow.camera.bottom=-10,t.shadow.autoUpdate=!1,this.scene.add(t),this.mainLight=t;const n=new cc(16777215,.4);n.position.set(-3,6,-2),this.scene.add(n)}initBaseComposition(){const e=new sr(.3,.3,.3),t=new dt({color:16777215,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1});this.baseComposition=new Qe(e,t),this.baseComposition.scale.set(1,1,1),this.baseComposition.visible=!1,this.scene.add(this.baseComposition)}setupEnvMap(){const e=new uc(this.renderer);e.compileEquirectangularShader(),new xS().load("/static/2k.hdr",n=>{const i=e.fromEquirectangular(n);this.scene.environment=i.texture,n.dispose(),e.dispose()})}async loadModelsAndUI(){const e=new Ub,t=await e.loadAsync("/static/chair.glb");this.chairModel=t.scene,this.chairModel.scale.set(.5,.5,.5),this.chairModel.position.set(0,-.25,0),this.chairModel.rotation.set(0,-.7,0),this.chairModel.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.userData.isOriginalChair=!0)}),this.baseComposition.add(this.chairModel),this.improveMaterials(this.chairModel),window.refreshChairMaterials=()=>this.improveMaterials(this.chairModel);const n=await e.loadAsync("/static/sizes.glb");this.sizesModel=n.scene,await bS();const i=TS();this.sizesModel.traverse(l=>{l.isMesh&&(l.material=i,l.castShadow=!0,l.receiveShadow=!0,l.renderOrder=1e3)}),this.chairModel.add(this.sizesModel),this.sizesModel.visible=!1,this.createSizeLabels();const s=yS(this.baseComposition);Object.assign(this,s);const a=new Qc(.003,.003,.1,8),o=new dt({color:16777215});this.stringMesh=new Qe(a,o),this.baseComposition.add(this.stringMesh)}createSizeLabels(){if(!this.sizesModel)return;new fp().load("/static/fonts/helvetiker_regular.typeface.json",t=>{const n=new Is('16.0"',{font:t,size:.04,depth:0,curveSegments:12,bevelEnabled:!1}),i=new dt({color:16777215,transparent:!0,opacity:1}),s=new Qe(n,i);n.computeBoundingBox(),s.position.x-=n.boundingBox.max.x*.5,s.position.y=.2,s.position.z=.03,this.sizesModel.add(s);const a=new Is('31.5"',{font:t,size:.04,depth:0,curveSegments:12,bevelEnabled:!1}),o=new dt({color:16777215,transparent:!0,opacity:1}),l=new Qe(a,o);a.computeBoundingBox(),l.position.x=-a.boundingBox.max.x*.5+.06,l.position.y=.43,l.position.z=-.34,l.rotation.y=Math.PI/2,this.sizesModel.add(l);const c=new Is('24.5"',{font:t,size:.04,depth:0,curveSegments:12,bevelEnabled:!1}),h=new dt({color:16777215,transparent:!0,opacity:1}),u=new Qe(c,h);c.computeBoundingBox(),u.position.x=-c.boundingBox.max.x*.5,u.position.y=0,u.position.z=.27,u.rotation.x=-Math.PI/2,this.sizesModel.add(u);const f=new Is('23.5"',{font:t,size:.04,depth:0,curveSegments:12,bevelEnabled:!1}),d=new dt({color:16777215,transparent:!0,opacity:1}),x=new Qe(f,d);f.computeBoundingBox(),x.position.x=-f.boundingBox.max.x*.5+.35,x.position.y=0,x.position.z=.06,x.rotation.x=u.rotation.x,x.rotation.y=0,x.rotation.z=Math.PI/2,this.sizesModel.add(x)})}improveMaterials(e){e&&e.traverse(t=>{t.isMesh&&t.material&&(Array.isArray(t.material)?t.material=t.material.map(n=>this.createImprovedMaterial(n)):t.material=this.createImprovedMaterial(t.material))})}createImprovedMaterial(e){const t=this.getMaterialProperties(e.name),n={color:t.color,roughness:t.roughness,metalness:t.metalness,envMapIntensity:t.envMapIntensity};e.map&&(n.map=e.map),e.normalMap&&(n.normalMap=e.normalMap,n.normalScale=new ue(1,1)),e.roughnessMap&&(n.roughnessMap=e.roughnessMap),e.metalnessMap&&(n.metalnessMap=e.metalnessMap),e.aoMap&&(n.aoMap=e.aoMap);const i=new oo(n);return i.name=e.name||"ImprovedMaterial",i.name.includes("Plastic")&&this.plasticMaterials.push(i),i}getMaterialProperties(e=""){return e==="Metal"?{color:8947848,roughness:.15,metalness:.9,envMapIntensity:1.2}:e==="BlackMetal"?{color:4473924,roughness:.2,metalness:.9,envMapIntensity:1}:e.includes("Plastic")?{color:4620980,roughness:.25,metalness:0,envMapIntensity:2}:e.includes("Wood")?{color:12421194,roughness:.8,metalness:0,envMapIntensity:.4}:{color:4620980,roughness:.7,metalness:.1,envMapIntensity:1}}changePlasticMaterialColor(e){if(!this.plasticMaterials.length)return;const t=new Fe(e);this.plasticMaterials.forEach(n=>n.color.copy(t))}onSessionStart(){this.xrSessionStartTime=Date.now(),this.compositionPositioned=!1,this.baseComposition&&(this.baseComposition.visible=!0),document.body.classList.add("xr-presenting")}onSessionEnd(){this.xrSessionStartTime=null,this.compositionPositioned=!1,this.baseComposition&&(this.baseComposition.visible=!1),document.body.classList.remove("xr-presenting")}positionCompositionAtHeadHeight(){if(this.compositionPositioned||!this.xrSessionStartTime||!this.baseComposition||Date.now()-this.xrSessionStartTime<1e3)return;const t=this.camera.position.y,n=this.camera.position.z;this.baseComposition.position.set(0,t-.2,n-1),this.compositionPositioned=!0}stringUpdate(){if(!this.stringMesh||!this.switchButton||!this.switchRoot)return;const e=this._vA.copy(this.switchRoot.position),t=this._vB.copy(this.switchButton.position),n=this._vC.subVectors(t,e),i=n.length();this.stringMesh.position.copy(e).addScaledVector(n,.5),this.stringMesh.scale.setY(i/.1),i>.001&&(n.normalize(),this._q.setFromUnitVectors(wS,n),this.stringMesh.quaternion.copy(this._q))}updateToggleTextColors(){var e,t,n,i;!this.materialTextMesh||!this.sizesTextMesh||(this.headerToggleIsRight?((e=this.materialTextMesh.userData)!=null&&e.defaultMaterial&&(this.materialTextMesh.material=this.materialTextMesh.userData.defaultMaterial),(t=this.sizesTextMesh.userData)!=null&&t.activeMaterial&&(this.sizesTextMesh.material=this.sizesTextMesh.userData.activeMaterial)):((n=this.materialTextMesh.userData)!=null&&n.activeMaterial&&(this.materialTextMesh.material=this.materialTextMesh.userData.activeMaterial),(i=this.sizesTextMesh.userData)!=null&&i.defaultMaterial&&(this.sizesTextMesh.material=this.sizesTextMesh.userData.defaultMaterial)))}setHeaderToggleState(e,t=!0){if(this.headerToggleIsRight=!!e,this.headerToggleSwitchMesh&&this.togglePosA&&this.togglePosB){const n=this.headerToggleIsRight?this.togglePosB:this.togglePosA;et.killTweensOf(this.headerToggleSwitchMesh.position),t?et.to(this.headerToggleSwitchMesh.position,{duration:.25,x:n.x,y:n.y,z:n.z,ease:"power2.inOut"}):this.headerToggleSwitchMesh.position.copy(n)}this.updateToggleTextColors(),this.buttonState&&this.chairModel&&(this.headerToggleIsRight?Ic(this.chairModel):ml(this.chairModel)),this.sizesModel&&(this.sizesModel.visible=this.buttonState&&this.headerToggleIsRight)}handleHeaderToggleTouch(e){if(!this.headerToggle||!this.headerToggleSwitchMesh||!this.togglePosA||!this.togglePosB)return;this.headerToggle.localToWorld(this._vA.copy(this.togglePosA)),this.headerToggle.localToWorld(this._vB.copy(this.togglePosB));const t=.04;let n=!1,i=!1;for(let o=0;o<e.length;o++){const l=e[o];l&&(n=n||l.distanceTo(this._vA)<t,i=i||l.distanceTo(this._vB)<t)}const s=performance.now(),a=s-this.headerToggleLastTouchMs>this.HEADER_TOGGLE_TOUCH_COOLDOWN_MS;(n||i)&&a&&(this.setHeaderToggleState(!this.headerToggleIsRight),this.headerToggleLastTouchMs=s)}handleSwitchButton(){if(!this.switchButton||!this.baseComposition||!this.switchRoot||!this.handInput)return;const e=this.handInput.lPinchOn,t=this.handInput.rPinchOn,n=this.handInput.lPinchSphere,i=this.handInput.rPinchSphere;let s=null,a=!1;if(e&&t){const o=n.position.distanceTo(this.switchButton.position),l=i.position.distanceTo(this.switchButton.position);s=o<l?n:i,a=!0}else e?(s=n,a=!0):t&&(s=i,a=!0);if(s&&a&&(s.getWorldPosition(this._tmp1),this.switchButton.getWorldPosition(this._tmp2),this._tmp1.distanceTo(this._tmp2)<.08&&!this.switchButtonAttached&&(this.switchButtonAttached=!0),this.switchButtonAttached)){s.getWorldPosition(this._tmp1);const l=this.baseComposition.worldToLocal(this._tmp1.clone());this.switchButton.position.copy(l)}if(!e&&!t&&this.switchButtonAttached){const o=this._tmp1;this.switchRoot.getWorldPosition(o);const l=this.baseComposition.worldToLocal(o.clone());this.buttonState=!this.buttonState,this.updateChairState(),et.to(this.switchButton.position,{duration:.6,x:l.x,y:l.y,z:l.z,ease:"elastic.out(0.5, 0.2)"}),this.switchButtonAttached=!1,this.switchPullCount++,this.switchPullCount>=2&&this.pullPlane&&(this.pullPlane.visible=!1)}}isButtonOnCooldown(e){return performance.now()-this.buttonCooldowns[e]<this.BUTTON_COOLDOWN_TIME}setButtonCooldown(e){this.buttonCooldowns[e]=performance.now()}updateButtonStrokes(e){if(!this.buttonStroke1Mesh||!this.buttonStroke2Mesh||!this.buttonStroke3Mesh)return;et.to(this.buttonStroke1Mesh.scale,{duration:.2,x:0,y:0,z:0,ease:"power2.out"}),et.to(this.buttonStroke2Mesh.scale,{duration:.2,x:0,y:0,z:0,ease:"power2.out"}),et.to(this.buttonStroke3Mesh.scale,{duration:.2,x:0,y:0,z:0,ease:"power2.out"});const t=.3;let n=null;e==="button1"&&(n=this.buttonStroke1Mesh),e==="button2"&&(n=this.buttonStroke2Mesh),e==="button3"&&(n=this.buttonStroke3Mesh),n&&et.to(n.scale,{duration:.2,delay:t,x:1,y:1,z:1,ease:"power2.out"})}handleColorButtons(e,t){if(!this.button1Mesh||!this.button2Mesh||!this.button3Mesh||this.buttonState)return;let n=!1;for(let i=0;i<e.length&&!n;i++){const s=e[i];if(!s)continue;this.button1Mesh.getWorldPosition(this._vA),this.button2Mesh.getWorldPosition(this._vB),this.button3Mesh.getWorldPosition(this._vC);const a=s.distanceTo(this._vA),o=s.distanceTo(this._vB),l=s.distanceTo(this._vC);a<.03&&!this.isButtonOnCooldown("button1")?(this.changePlasticMaterialColor(4620980),et.killTweensOf(this.button1Mesh.scale),et.to(this.button1Mesh.scale,{duration:.2,x:.8,y:.8,z:.8,ease:"power2.out"}),this.updateButtonStrokes("button1"),this.setButtonCooldown("button1"),this.buttonResetTimers.button1=t+this.BUTTON_RESET_DELAY,n=!0):o<.03&&!this.isButtonOnCooldown("button2")?(this.changePlasticMaterialColor(11665408),et.killTweensOf(this.button2Mesh.scale),et.to(this.button2Mesh.scale,{duration:.2,x:.8,y:.8,z:.8,ease:"power2.out"}),this.updateButtonStrokes("button2"),this.setButtonCooldown("button2"),this.buttonResetTimers.button2=t+this.BUTTON_RESET_DELAY,n=!0):l<.03&&!this.isButtonOnCooldown("button3")&&(this.changePlasticMaterialColor(15763461),et.killTweensOf(this.button3Mesh.scale),et.to(this.button3Mesh.scale,{duration:.2,x:.8,y:.8,z:.8,ease:"power2.out"}),this.updateButtonStrokes("button3"),this.setButtonCooldown("button3"),this.buttonResetTimers.button3=t+this.BUTTON_RESET_DELAY,n=!0)}t>this.buttonResetTimers.button1&&(et.killTweensOf(this.button1Mesh.scale),et.to(this.button1Mesh.scale,{duration:.2,x:1,y:1,z:1,ease:"power2.out"})),t>this.buttonResetTimers.button2&&(et.killTweensOf(this.button2Mesh.scale),et.to(this.button2Mesh.scale,{duration:.2,x:1,y:1,z:1,ease:"power2.out"})),t>this.buttonResetTimers.button3&&(et.killTweensOf(this.button3Mesh.scale),et.to(this.button3Mesh.scale,{duration:.2,x:1,y:1,z:1,ease:"power2.out"}))}updateChairState(){this.chairModel&&(this.renderer.shadowMap&&(this.renderer.shadowMap.needsUpdate=!0),this.mainLight&&this.mainLight.shadow&&(this.mainLight.shadow.needsUpdate=!0),this.buttonState?(et.to(this.chairModel.scale,{duration:.5,x:1.1,y:1.1,z:1.1,ease:"power2.out"}),et.to(this.chairModel.position,{duration:.5,x:0,y:-1.35,z:0,ease:"power2.out"}),this.uiFrame&&et.to(this.uiFrame.scale,{duration:.3,x:0,y:0,z:0,ease:"power2.out"}),this.infoPanel&&et.to(this.infoPanel.scale,{duration:.3,x:0,y:0,z:0,ease:"power2.out"}),this.colorPanel&&et.to(this.colorPanel.scale,{duration:.3,x:0,y:0,z:0,ease:"power2.out"}),this.headerToggle&&et.to(this.headerToggle.scale,{duration:.3,x:1,y:1,z:1,ease:"power2.out"}),this.updateToggleTextColors(),this.headerToggleIsRight?Ic(this.chairModel):ml(this.chairModel),this.sizesModel&&(this.sizesModel.visible=this.headerToggleIsRight)):(et.to(this.chairModel.scale,{duration:.4,x:.5,y:.5,z:.5,ease:"power2.out"}),et.to(this.chairModel.position,{duration:.4,x:0,y:-.25,z:0,ease:"power2.out"}),this.uiFrame&&et.to(this.uiFrame.scale,{duration:.3,x:1,y:1,z:1,ease:"power2.out"}),this.infoPanel&&et.to(this.infoPanel.scale,{duration:.3,x:1,y:1,z:1,ease:"power2.out"}),this.colorPanel&&et.to(this.colorPanel.scale,{duration:.3,x:1,y:1,z:1,ease:"power2.out"}),this.headerToggle&&(et.to(this.headerToggle.scale,{duration:.3,x:0,y:0,z:0,ease:"power2.out"}),this.setHeaderToggleState(!1,!1)),this.updateToggleTextColors(),ml(this.chairModel),this.sizesModel&&(this.sizesModel.visible=!1)))}update(e,t){var a;this.delta=e;const n=e*1e3;this.accum=.9*this.accum+.1*n,this.accum>this.targetMs*1.15&&this.adaptivePR>1?(this.adaptivePR=Math.max(1,this.adaptivePR-.05),this.renderer.setPixelRatio(this.adaptivePR)):this.accum<this.targetMs*.9&&this.adaptivePR<this.MAX_PR&&(this.adaptivePR=Math.min(this.MAX_PR,this.adaptivePR+.05),this.renderer.setPixelRatio(this.adaptivePR)),this.handInput&&this.chairModel&&(this.handInput.onRotateChair=o=>{this.chairModel.rotation.y+=o},this.handInput.update(e,{chairModel:this.chairModel,pointerTargets:[this.switchButton,this.headerToggle,this.colorPanel,this.button1Mesh,this.button2Mesh,this.button3Mesh,this.infoPanel,this.chairModel]}));const i=(a=this.handInput)!=null&&a.getPointerPositions?this.handInput.getPointerPositions():[],s=performance.now();if(i.length&&(this.handleHeaderToggleTouch(i),this.handleColorButtons(i,s)),this.handleSwitchButton(),this.stringUpdate(),this.positionCompositionAtHeadHeight(),this.pullPlane&&this.pullPlane.visible){const c=t/1e3,h=Math.sin(c*1*Math.PI*2)*.005;this.pullPlane.position.y=.31+h}}}et.ticker.lagSmoothing(0);et.ticker.fps(60);const{scene:Th,camera:dp,renderer:Zr}=Cb(),RS=new Nb(Zr,Th),us=new AS(Th,dp,Zr,RS);us.initLights();us.initBaseComposition();us.setupEnvMap();us.loadModelsAndUI().then(()=>{console.log("Chair & UI ready")});Pb(Zr,{onSessionStart:()=>us.onSessionStart(),onSessionEnd:()=>us.onSessionEnd()});const CS=new rd;Zr.setAnimationLoop((r,e)=>{const t=CS.getDelta();et.ticker.tick(t),us.update(t,r),Zr.render(Th,dp)});
