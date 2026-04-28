(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _s="181",cl=0,Is=1,ul=2,Io=1,hl=2,An=3,qn=0,Ke=1,pn=2,Pn=0,Pi=1,Pa=2,Ds=3,Ns=4,fl=5,ai=100,dl=101,pl=102,ml=103,xl=104,vl=200,gl=201,_l=202,yl=203,La=204,Ia=205,Ml=206,Sl=207,bl=208,El=209,wl=210,Tl=211,Al=212,Rl=213,Cl=214,Da=0,Na=1,Ua=2,Ni=3,Fa=4,Ba=5,Oa=6,za=7,ys=0,Pl=1,Ll=2,kn=0,Il=1,Dl=2,Nl=3,Ul=4,Fl=5,Bl=6,Ol=7,Do=300,Ui=301,Fi=302,Va=303,Ga=304,Kr=306,Ha=1e3,Rn=1001,ka=1002,Qe=1003,zl=1004,hr=1005,sn=1006,ea=1007,oi=1008,In=1009,No=1010,Uo=1011,tr=1012,Ms=1013,ui=1014,Cn=1015,Vi=1016,Ss=1017,bs=1018,er=1020,Fo=35902,Bo=35899,Oo=1021,zo=1022,fn=1023,nr=1026,ir=1027,Vo=1028,Es=1029,ws=1030,Ts=1031,As=1033,Ur=33776,Fr=33777,Br=33778,Or=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,Ka=37492,$a=37496,ja=37808,Ja=37809,Qa=37810,ts=37811,es=37812,ns=37813,is=37814,rs=37815,as=37816,ss=37817,os=37818,ls=37819,cs=37820,us=37821,hs=36492,fs=36494,ds=36495,ps=36283,ms=36284,xs=36285,vs=36286,Vl=3200,Gl=3201,Go=0,Hl=1,Gn="",rn="srgb",Bi="srgb-linear",Hr="linear",Re="srgb",di=7680,Us=519,kl=512,Wl=513,Xl=514,Ho=515,ql=516,Yl=517,Zl=518,Kl=519,Fs=35044,Bs="300 es",mn=2e3,kr=2001;function ko(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $l(){const i=Wr("canvas");return i.style.display="block",i}const Os={};function zs(...i){const t="THREE."+i.shift();console.log(t,...i)}function pe(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Le(...i){const t="THREE."+i.shift();console.error(t,...i)}function rr(...i){const t=i.join(" ");t in Os||(Os[t]=!0,pe(...i))}function jl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vs=1234567;const $i=Math.PI/180,ar=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Rs(i,t){return(i%t+t)%t}function Jl(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ql(i,t,e){return i!==t?(e-i)/(t-i):0}function ji(i,t,e){return(1-e)*i+e*t}function tc(i,t,e,n){return ji(i,t,1-Math.exp(-e*n))}function ec(i,t=1){return t-Math.abs(Rs(i,t*2)-t)}function nc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ic(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ac(i,t){return i+Math.random()*(t-i)}function sc(i){return i*(.5-Math.random())}function oc(i){i!==void 0&&(Vs=i);let t=Vs+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lc(i){return i*$i}function cc(i){return i*ar}function uc(i){return(i&i-1)===0&&i!==0}function hc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dc(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),u=r((t+n)/2),h=a((t+n)/2),l=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*l,c*f,o*u);break;case"YZY":i.set(c*f,o*h,c*l,o*u);break;case"ZXZ":i.set(c*l,c*f,o*h,o*u);break;case"XZX":i.set(o*h,c*x,c*d,o*u);break;case"YXY":i.set(c*d,o*h,c*x,o*u);break;case"ZYZ":i.set(c*x,c*d,o*h,o*u);break;default:pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pc={DEG2RAD:$i,RAD2DEG:ar,generateUUID:Hi,clamp:Se,euclideanModulo:Rs,mapLinear:Jl,inverseLerp:Ql,lerp:ji,damp:tc,pingpong:ec,smoothstep:nc,smootherstep:ic,randInt:rc,randFloat:ac,randFloatSpread:sc,seededRandom:oc,degToRad:lc,radToDeg:cc,isPowerOfTwo:uc,ceilPowerOfTwo:hc,floorPowerOfTwo:fc,setQuaternionFromProperEuler:dc,normalize:We,denormalize:Ai};class Ae{constructor(t=0,e=0){Ae.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3],f=r[a+0],d=r[a+1],x=r[a+2],v=r[a+3];if(o<=0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(o>=1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=v;return}if(l!==v||c!==f||u!==d||h!==x){let m=c*f+u*d+h*x+l*v;m<0&&(f=-f,d=-d,x=-x,v=-v,m=-m);let p=1-o;if(m<.9995){const g=Math.acos(m),M=Math.sin(g);p=Math.sin(p*g)/M,o=Math.sin(o*g)/M,c=c*p+f*o,u=u*p+d*o,h=h*p+x*o,l=l*p+v*o}else{c=c*p+f*o,u=u*p+d*o,h=h*p+x*o,l=l*p+v*o;const g=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=g,u*=g,h*=g,l*=g}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[a],f=r[a+1],d=r[a+2],x=r[a+3];return t[e]=o*x+h*l+c*d-u*f,t[e+1]=c*x+h*f+u*l-o*d,t[e+2]=u*x+h*d+o*f-c*l,t[e+3]=h*x-o*l-c*f-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),l=o(r/2),f=c(n/2),d=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=f*h*l+u*d*x,this._y=u*d*l-f*h*x,this._z=u*h*x+f*d*l,this._w=u*h*l-f*d*x;break;case"YXZ":this._x=f*h*l+u*d*x,this._y=u*d*l-f*h*x,this._z=u*h*x-f*d*l,this._w=u*h*l+f*d*x;break;case"ZXY":this._x=f*h*l-u*d*x,this._y=u*d*l+f*h*x,this._z=u*h*x+f*d*l,this._w=u*h*l-f*d*x;break;case"ZYX":this._x=f*h*l-u*d*x,this._y=u*d*l+f*h*x,this._z=u*h*x-f*d*l,this._w=u*h*l+f*d*x;break;case"YZX":this._x=f*h*l+u*d*x,this._y=u*d*l+f*h*x,this._z=u*h*x-f*d*l,this._w=u*h*l-f*d*x;break;case"XZY":this._x=f*h*l-u*d*x,this._y=u*d*l-f*h*x,this._z=u*h*x+f*d*l,this._w=u*h*l+f*d*x;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],u=e[2],h=e[6],l=e[10],f=n+o+l;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-u)*d,this._z=(a-s)*d}else if(n>o&&n>l){const d=2*Math.sqrt(1+n-o-l);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+u)/d}else if(o>l){const d=2*Math.sqrt(1+o-n-l);this._w=(r-u)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+l-n-o);this._w=(a-s)/d,this._x=(r+u)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,e=Math.sin(e*u)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(t=0,e=0,n=0){ct.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gs.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gs.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*s-o*n),h=2*(o*e-r*s),l=2*(r*n-a*e);return this.x=e+c*u+a*l-o*h,this.y=n+c*h+o*u-r*l,this.z=s+c*l+r*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new ct,Gs=new lr;class xe{constructor(t,e,n,s,r,a,o,c,u){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u)}set(t,e,n,s,r,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],l=n[7],f=n[2],d=n[5],x=n[8],v=s[0],m=s[3],p=s[6],g=s[1],M=s[4],_=s[7],w=s[2],A=s[5],U=s[8];return r[0]=a*v+o*g+c*w,r[3]=a*m+o*M+c*A,r[6]=a*p+o*_+c*U,r[1]=u*v+h*g+l*w,r[4]=u*m+h*M+l*A,r[7]=u*p+h*_+l*U,r[2]=f*v+d*g+x*w,r[5]=f*m+d*M+x*A,r[8]=f*p+d*_+x*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=h*a-o*u,f=o*c-h*r,d=u*r-a*c,x=e*l+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=l*v,t[1]=(s*u-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*c-u*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-s*u,s*c,-s*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ia.makeScale(t,e)),this}rotate(t){return this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new xe,Hs=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ks=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mc(){const i={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Re&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Re&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bi]:{primaries:t,whitePoint:n,transfer:Hr,toXYZ:Hs,fromXYZ:ks,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:Re,toXYZ:Hs,fromXYZ:ks,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const we=mc();function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class xc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{pi===void 0&&(pi=Wr("canvas")),pi.width=t.width,pi.height=t.height;const s=pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vc=0;class Cs{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ra(s[a].image)):r.push(ra(s[a]))}else r=ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let gc=0;const aa=new ct;class qe extends Gi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=Rn,s=Rn,r=sn,a=oi,o=fn,c=In,u=qe.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Hi(),this.name="",this.source=new Cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(aa).x}get height(){return this.source.getSize(aa).y}get depth(){return this.source.getSize(aa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){pe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){pe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Do)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ha:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ha:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Do;qe.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,s=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],f=c[1],d=c[5],x=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(l-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(l+v)<.1&&Math.abs(x+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,_=(d+1)/2,w=(p+1)/2,A=(h+f)/4,U=(l+v)/4,D=(x+m)/4;return M>_&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=U/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=D/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=U/r,s=D/r),this.set(n,s,r,e),this}let g=Math.sqrt((m-x)*(m-x)+(l-v)*(l-v)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(l-v)/g,this.z=(f-h)/g,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _c extends Gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new qe(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends _c{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wo extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yc extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(t=new ct(1/0,1/0,1/0),e=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),dr.subVectors(this.max,Wi),mi.subVectors(t.a,Wi),xi.subVectors(t.b,Wi),vi.subVectors(t.c,Wi),Nn.subVectors(xi,mi),Un.subVectors(vi,xi),Kn.subVectors(mi,vi);let e=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-Kn.y,Kn.x,0];return!sa(e,mi,xi,vi,dr)||(e=[1,0,0,0,1,0,0,0,1],!sa(e,mi,xi,vi,dr))?!1:(pr.crossVectors(Nn,Un),e=[pr.x,pr.y,pr.z],sa(e,mi,xi,vi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mn=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],on=new ct,fr=new cr,mi=new ct,xi=new ct,vi=new ct,Nn=new ct,Un=new ct,Kn=new ct,Wi=new ct,dr=new ct,pr=new ct,$n=new ct;function sa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);const o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),c=t.dot($n),u=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Mc=new cr,Xi=new ct,oa=new ct;class Ps{constructor(t=new ct,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);const e=Xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(oa)),this.expandByPoint(Xi.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Sn=new ct,la=new ct,mr=new ct,Fn=new ct,ca=new ct,xr=new ct,ua=new ct;class Sc{constructor(t=new ct,e=new ct(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){la.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(la);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=Fn.dot(this.direction),c=-Fn.dot(mr),u=Fn.lengthSq(),h=Math.abs(1-a*a);let l,f,d,x;if(h>0)if(l=a*c-o,f=a*o-c,x=r*h,l>=0)if(f>=-x)if(f<=x){const v=1/h;l*=v,f*=v,d=l*(l+a*f+2*o)+f*(a*l+f+2*c)+u}else f=r,l=Math.max(0,-(a*f+o)),d=-l*l+f*(f+2*c)+u;else f=-r,l=Math.max(0,-(a*f+o)),d=-l*l+f*(f+2*c)+u;else f<=-x?(l=Math.max(0,-(-a*r+o)),f=l>0?-r:Math.min(Math.max(-r,-c),r),d=-l*l+f*(f+2*c)+u):f<=x?(l=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+u):(l=Math.max(0,-(a*r+o)),f=l>0?r:Math.min(Math.max(-r,-c),r),d=-l*l+f*(f+2*c)+u);else f=a>0?-r:r,l=Math.max(0,-(a*f+o)),d=-l*l+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(la).addScaledVector(mr,f),d}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-f.z)*l,c=(t.max.z-f.z)*l):(o=(t.max.z-f.z)*l,c=(t.min.z-f.z)*l),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){ca.subVectors(e,t),xr.subVectors(n,t),ua.crossVectors(ca,xr);let a=this.direction.dot(ua),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,t);const c=o*this.direction.dot(xr.crossVectors(Fn,xr));if(c<0)return null;const u=o*this.direction.dot(ca.cross(Fn));if(u<0||c+u>a)return null;const h=-o*Fn.dot(ua);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(t,e,n,s,r,a,o,c,u,h,l,f,d,x,v,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u,h,l,f,d,x,v,m)}set(t,e,n,s,r,a,o,c,u,h,l,f,d,x,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=u,p[6]=h,p[10]=l,p[14]=f,p[3]=d,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/gi.setFromMatrixColumn(t,0).length(),r=1/gi.setFromMatrixColumn(t,1).length(),a=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*l,x=o*h,v=o*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=d+x*u,e[5]=f-v*u,e[9]=-o*c,e[2]=v-f*u,e[6]=x+d*u,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*l,x=u*h,v=u*l;e[0]=f+v*o,e[4]=x*o-d,e[8]=a*u,e[1]=a*l,e[5]=a*h,e[9]=-o,e[2]=d*o-x,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*l,x=u*h,v=u*l;e[0]=f-v*o,e[4]=-a*l,e[8]=x+d*o,e[1]=d+x*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*l,x=o*h,v=o*l;e[0]=c*h,e[4]=x*u-d,e[8]=f*u+v,e[1]=c*l,e[5]=v*u+f,e[9]=d*u-x,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*u,x=o*c,v=o*u;e[0]=c*h,e[4]=v-f*l,e[8]=x*l+d,e[1]=l,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=d*l+x,e[10]=f-v*l}else if(t.order==="XZY"){const f=a*c,d=a*u,x=o*c,v=o*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=f*l+v,e[5]=a*h,e[9]=d*l-x,e[2]=x*l-d,e[6]=o*h,e[10]=v*l+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bc,t,Ec)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Bn.crossVectors(n,je),Bn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Bn.crossVectors(n,je)),Bn.normalize(),vr.crossVectors(je,Bn),s[0]=Bn.x,s[4]=vr.x,s[8]=je.x,s[1]=Bn.y,s[5]=vr.y,s[9]=je.y,s[2]=Bn.z,s[6]=vr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],l=n[5],f=n[9],d=n[13],x=n[2],v=n[6],m=n[10],p=n[14],g=n[3],M=n[7],_=n[11],w=n[15],A=s[0],U=s[4],D=s[8],b=s[12],y=s[1],E=s[5],N=s[9],F=s[13],Y=s[2],W=s[6],nt=s[10],z=s[14],P=s[3],J=s[7],K=s[11],O=s[15];return r[0]=a*A+o*y+c*Y+u*P,r[4]=a*U+o*E+c*W+u*J,r[8]=a*D+o*N+c*nt+u*K,r[12]=a*b+o*F+c*z+u*O,r[1]=h*A+l*y+f*Y+d*P,r[5]=h*U+l*E+f*W+d*J,r[9]=h*D+l*N+f*nt+d*K,r[13]=h*b+l*F+f*z+d*O,r[2]=x*A+v*y+m*Y+p*P,r[6]=x*U+v*E+m*W+p*J,r[10]=x*D+v*N+m*nt+p*K,r[14]=x*b+v*F+m*z+p*O,r[3]=g*A+M*y+_*Y+w*P,r[7]=g*U+M*E+_*W+w*J,r[11]=g*D+M*N+_*nt+w*K,r[15]=g*b+M*F+_*z+w*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],l=t[6],f=t[10],d=t[14],x=t[3],v=t[7],m=t[11],p=t[15];return x*(+r*c*l-s*u*l-r*o*f+n*u*f+s*o*d-n*c*d)+v*(+e*c*d-e*u*f+r*a*f-s*a*d+s*u*h-r*c*h)+m*(+e*u*l-e*o*d-r*a*l+n*a*d+r*o*h-n*u*h)+p*(-s*o*h-e*c*l+e*o*f+s*a*l-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=t[9],f=t[10],d=t[11],x=t[12],v=t[13],m=t[14],p=t[15],g=l*m*u-v*f*u+v*c*d-o*m*d-l*c*p+o*f*p,M=x*f*u-h*m*u-x*c*d+a*m*d+h*c*p-a*f*p,_=h*v*u-x*l*u+x*o*d-a*v*d-h*o*p+a*l*p,w=x*l*c-h*v*c-x*o*f+a*v*f+h*o*m-a*l*m,A=e*g+n*M+s*_+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/A;return t[0]=g*U,t[1]=(v*f*r-l*m*r-v*s*d+n*m*d+l*s*p-n*f*p)*U,t[2]=(o*m*r-v*c*r+v*s*u-n*m*u-o*s*p+n*c*p)*U,t[3]=(l*c*r-o*f*r-l*s*u+n*f*u+o*s*d-n*c*d)*U,t[4]=M*U,t[5]=(h*m*r-x*f*r+x*s*d-e*m*d-h*s*p+e*f*p)*U,t[6]=(x*c*r-a*m*r-x*s*u+e*m*u+a*s*p-e*c*p)*U,t[7]=(a*f*r-h*c*r+h*s*u-e*f*u-a*s*d+e*c*d)*U,t[8]=_*U,t[9]=(x*l*r-h*v*r-x*n*d+e*v*d+h*n*p-e*l*p)*U,t[10]=(a*v*r-x*o*r+x*n*u-e*v*u-a*n*p+e*o*p)*U,t[11]=(h*o*r-a*l*r-h*n*u+e*l*u+a*n*d-e*o*d)*U,t[12]=w*U,t[13]=(h*v*s-x*l*s+x*n*f-e*v*f-h*n*m+e*l*m)*U,t[14]=(x*o*s-a*v*s-x*n*c+e*v*c+a*n*m-e*o*m)*U,t[15]=(a*l*s-h*o*s+h*n*c-e*l*c-a*n*f+e*o*f)*U,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,u=r+r,h=a+a,l=o+o,f=r*u,d=r*h,x=r*l,v=a*h,m=a*l,p=o*l,g=c*u,M=c*h,_=c*l,w=n.x,A=n.y,U=n.z;return s[0]=(1-(v+p))*w,s[1]=(d+_)*w,s[2]=(x-M)*w,s[3]=0,s[4]=(d-_)*A,s[5]=(1-(f+p))*A,s[6]=(m+g)*A,s[7]=0,s[8]=(x+M)*U,s[9]=(m-g)*U,s[10]=(1-(f+v))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=gi.set(s[0],s[1],s[2]).length();const a=gi.set(s[4],s[5],s[6]).length(),o=gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const u=1/r,h=1/a,l=1/o;return ln.elements[0]*=u,ln.elements[1]*=u,ln.elements[2]*=u,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=l,ln.elements[9]*=l,ln.elements[10]*=l,e.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=mn,c=!1){const u=this.elements,h=2*r/(e-t),l=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let x,v;if(c)x=r/(a-r),v=a*r/(a-r);else if(o===mn)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===kr)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=l,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn,c=!1){const u=this.elements,h=2/(e-t),l=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let x,v;if(c)x=1/(a-r),v=a/(a-r);else if(o===mn)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===kr)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=l,u[9]=0,u[13]=d,u[2]=0,u[6]=0,u[10]=x,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gi=new ct,ln=new Ue,bc=new ct(0,0,0),Ec=new ct(1,1,1),Bn=new ct,vr=new ct,je=new ct,Ws=new Ue,Xs=new lr;class _n{constructor(t=0,e=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],l=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ws.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ws,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xs.setFromEuler(this),this.setFromQuaternion(Xs,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wc=0;const qs=new ct,_i=new lr,bn=new Ue,gr=new ct,qi=new ct,Tc=new ct,Ac=new lr,Ys=new ct(1,0,0),Zs=new ct(0,1,0),Ks=new ct(0,0,1),$s={type:"added"},Rc={type:"removed"},yi={type:"childadded",child:null},ha={type:"childremoved",child:null};class $e extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new ct,e=new _n,n=new lr,s=new ct(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new xe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(Ys,t)}rotateY(t){return this.rotateOnAxis(Zs,t)}rotateZ(t){return this.rotateOnAxis(Ks,t)}translateOnAxis(t,e){return qs.copy(t).applyQuaternion(this.quaternion),this.position.add(qs.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ys,t)}translateY(t){return this.translateOnAxis(Zs,t)}translateZ(t){return this.translateOnAxis(Ks,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(qi,gr,this.up):bn.lookAt(gr,qi,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(bn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($s),yi.child=t,this.dispatchEvent(yi),yi.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rc),ha.child=t,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($s),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,Tc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Ac,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),l=a(t.shapes),f=a(t.skeletons),d=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}$e.DEFAULT_UP=new ct(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new ct,En=new ct,fa=new ct,wn=new ct,Mi=new ct,Si=new ct,js=new ct,da=new ct,pa=new ct,ma=new ct,xa=new Ie,va=new Ie,ga=new Ie;class hn{constructor(t=new ct,e=new ct,n=new ct){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),En.subVectors(n,e),fa.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(En),c=cn.dot(fa),u=En.dot(En),h=En.dot(fa),l=a*u-o*o;if(l===0)return r.set(0,0,0),null;const f=1/l,d=(u*c-o*h)*f,x=(a*h-o*c)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return xa.setScalar(0),va.setScalar(0),ga.setScalar(0),xa.fromBufferAttribute(t,e),va.fromBufferAttribute(t,n),ga.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xa,r.x),a.addScaledVector(va,r.y),a.addScaledVector(ga,r.z),a}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),En.subVectors(t,e),cn.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),cn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Mi.subVectors(s,n),Si.subVectors(r,n),da.subVectors(t,n);const c=Mi.dot(da),u=Si.dot(da);if(c<=0&&u<=0)return e.copy(n);pa.subVectors(t,s);const h=Mi.dot(pa),l=Si.dot(pa);if(h>=0&&l<=h)return e.copy(s);const f=c*l-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Mi,a);ma.subVectors(t,r);const d=Mi.dot(ma),x=Si.dot(ma);if(x>=0&&d<=x)return e.copy(r);const v=d*u-c*x;if(v<=0&&u>=0&&x<=0)return o=u/(u-x),e.copy(n).addScaledVector(Si,o);const m=h*x-d*l;if(m<=0&&l-h>=0&&d-x>=0)return js.subVectors(r,s),o=(l-h)/(l-h+(d-x)),e.copy(s).addScaledVector(js,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},_r={h:0,s:0,l:0};function _a(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=we.workingColorSpace){if(t=Rs(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=_a(a,r,t+1/3),this.g=_a(a,r,t),this.b=_a(a,r,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&pe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:pe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);pe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=qo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):pe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return we.workingToColorSpace(Ge.copy(this),t),Math.round(Se(Ge.r*255,0,255))*65536+Math.round(Se(Ge.g*255,0,255))*256+Math.round(Se(Ge.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const l=a-o;switch(u=h<=.5?l/(a+o):l/(2-a-o),a){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=rn){we.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(_r);const n=ji(On.h,_r.h,e),s=ji(On.s,_r.s,e),r=ji(On.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Te;Te.NAMES=qo;let Cc=0;class ur extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Pi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Us,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){pe(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){pe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Us&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ls extends ur{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=ys,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new ct,yr=new Ae;let Pc=0;class vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fs,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fs&&(t.usage=this.usage),t}}class Yo extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zo extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class gn extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lc=0;const nn=new Ue,ya=new $e,bi=new ct,Je=new cr,Yi=new cr,Oe=new ct;class Dn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ko(t)?Zo:Yo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(Je.min,Yi.min),Je.expandByPoint(Oe),Oe.addVectors(Je.max,Yi.max),Je.expandByPoint(Oe)):(Je.expandByPoint(Yi.min),Je.expandByPoint(Yi.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Oe.fromBufferAttribute(o,u),c&&(bi.fromBufferAttribute(t,u),Oe.add(bi)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new ct,c[D]=new ct;const u=new ct,h=new ct,l=new ct,f=new Ae,d=new Ae,x=new Ae,v=new ct,m=new ct;function p(D,b,y){u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),l.fromBufferAttribute(n,y),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,y),h.sub(u),l.sub(u),d.sub(f),x.sub(f);const E=1/(d.x*x.y-x.x*d.y);isFinite(E)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(l,-d.y).multiplyScalar(E),m.copy(l).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(E),o[D].add(v),o[b].add(v),o[y].add(v),c[D].add(m),c[b].add(m),c[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let D=0,b=g.length;D<b;++D){const y=g[D],E=y.start,N=y.count;for(let F=E,Y=E+N;F<Y;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new ct,_=new ct,w=new ct,A=new ct;function U(D){w.fromBufferAttribute(s,D),A.copy(w);const b=o[D];M.copy(b),M.sub(w.multiplyScalar(w.dot(b))).normalize(),_.crossVectors(A,b);const E=_.dot(c[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,E)}for(let D=0,b=g.length;D<b;++D){const y=g[D],E=y.start,N=y.count;for(let F=E,Y=E+N;F<Y;F+=3)U(t.getX(F+0)),U(t.getX(F+1)),U(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new ct,r=new ct,a=new ct,o=new ct,c=new ct,u=new ct,h=new ct,l=new ct;if(t)for(let f=0,d=t.count;f<d;f+=3){const x=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,m),o.add(h),c.add(h),u.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,l=o.normalized,f=new u.constructor(c.length*h);let d=0,x=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let p=0;p<h;p++)f[x++]=u[d++]}return new vn(f,h,l)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Dn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],u=t(c,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const c=[],u=r[o];for(let h=0,l=u.length;h<l;h++){const f=u[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,f=u.length;l<f;l++){const d=u[l];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let f=0,d=l.length;f<d;f++)h.push(l[f].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Js=new Ue,jn=new Sc,Mr=new Ps,Qs=new ct,Sr=new ct,br=new ct,Er=new ct,Ma=new ct,wr=new ct,to=new ct,Tr=new ct;class He extends $e{constructor(t=new Dn,e=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=o[c],l=r[c];h!==0&&(Ma.fromBufferAttribute(l,t),a?wr.addScaledVector(Ma,h):wr.addScaledVector(Ma.sub(e),h))}e.add(wr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Mr.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Mr,Qs)===null||jn.origin.distanceToSquared(Qs)>(t.far-t.near)**2))&&(Js.copy(r).invert(),jn.copy(t.ray).applyMatrix4(Js),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=f.length;x<v;x++){const m=f[x],p=a[m.materialIndex],g=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=g,w=M;_<w;_+=3){const A=o.getX(_),U=o.getX(_+1),D=o.getX(_+2);s=Ar(this,p,t,n,u,h,l,A,U,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){const g=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);s=Ar(this,a,t,n,u,h,l,g,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,v=f.length;x<v;x++){const m=f[x],p=a[m.materialIndex],g=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=g,w=M;_<w;_+=3){const A=_,U=_+1,D=_+2;s=Ar(this,p,t,n,u,h,l,A,U,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){const g=m,M=m+1,_=m+2;s=Ar(this,a,t,n,u,h,l,g,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ic(i,t,e,n,s,r,a,o){let c;if(t.side===Ke?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===qn,o),c===null)return null;Tr.copy(o),Tr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Tr);return u<e.near||u>e.far?null:{distance:u,point:Tr.clone(),object:i}}function Ar(i,t,e,n,s,r,a,o,c,u){i.getVertexPosition(o,Sr),i.getVertexPosition(c,br),i.getVertexPosition(u,Er);const h=Ic(i,t,e,n,Sr,br,Er,to);if(h){const l=new ct;hn.getBarycoord(to,Sr,br,Er,l),s&&(h.uv=hn.getInterpolatedAttribute(s,o,c,u,l,new Ae)),r&&(h.uv1=hn.getInterpolatedAttribute(r,o,c,u,l,new Ae)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,c,u,l,new ct),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new ct,materialIndex:0};hn.getNormal(Sr,br,Er,f.normal),h.face=f,h.barycoord=l}return h}class fi extends Dn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],u=[],h=[],l=[];let f=0,d=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gn(u,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(l,2));function x(v,m,p,g,M,_,w,A,U,D,b){const y=_/U,E=w/D,N=_/2,F=w/2,Y=A/2,W=U+1,nt=D+1;let z=0,P=0;const J=new ct;for(let K=0;K<nt;K++){const O=K*E-F;for(let tt=0;tt<W;tt++){const V=tt*y-N;J[v]=V*g,J[m]=O*M,J[p]=Y,u.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[p]=A>0?1:-1,h.push(J.x,J.y,J.z),l.push(tt/U),l.push(1-K/D),z+=1}}for(let K=0;K<D;K++)for(let O=0;O<U;O++){const tt=f+O+W*K,V=f+O+W*(K+1),B=f+(O+1)+W*(K+1),I=f+(O+1)+W*K;c.push(tt,V,I),c.push(V,B,I),P+=6}o.addGroup(d,P,b),d+=P,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Oi(i[e]);for(const s in n)t[s]=n[s]}return t}function Dc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ko(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const Nc={clone:Oi,merge:Xe};var Uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends ur{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uc,this.fragmentShader=Fc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=Dc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $o extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new ct,eo=new Ae,no=new Ae;class an extends $o{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,eo,no),e.subVectors(no,eo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($i*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ei=-90,wi=1;class Bc extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Ei,wi,t,e);s.layers=this.layers,this.add(s);const r=new an(Ei,wi,t,e);r.layers=this.layers,this.add(r);const a=new an(Ei,wi,t,e);a.layers=this.layers,this.add(a);const o=new an(Ei,wi,t,e);o.layers=this.layers,this.add(o);const c=new an(Ei,wi,t,e);c.layers=this.layers,this.add(c);const u=new an(Ei,wi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const u of e)this.remove(u);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,u,h]=this.children,l=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class jo extends qe{constructor(t=[],e=Ui,n,s,r,a,o,c,u,h){super(t,e,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Oc extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fi(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Pn});r.uniforms.tEquirect.value=e;const a=new He(s,r),o=e.minFilter;return e.minFilter===oi&&(e.minFilter=sn),new Bc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Rr extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zc={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(u,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],f=h.position.distanceTo(l.position),d=.02,x=.005;u.inputState.pinching&&f>d+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=d-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zc)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Rr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Vc extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gc extends qe{constructor(t=null,e=1,n=1,s,r,a,o,c,u=Qe,h=Qe,l,f){super(null,a,o,c,u,h,s,r,l,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ba=new ct,Hc=new ct,kc=new xe;class ei{constructor(t=new ct(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ba.subVectors(n,e).cross(Hc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kc.getNormalMatrix(t),s=this.coplanarPoint(ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Ps,Wc=new Ae(.5,.5),Cr=new ct;class Jo{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,a=new ei){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],u=r[3],h=r[4],l=r[5],f=r[6],d=r[7],x=r[8],v=r[9],m=r[10],p=r[11],g=r[12],M=r[13],_=r[14],w=r[15];if(s[0].setComponents(u-a,d-h,p-x,w-g).normalize(),s[1].setComponents(u+a,d+h,p+x,w+g).normalize(),s[2].setComponents(u+o,d+l,p+v,w+M).normalize(),s[3].setComponents(u-o,d-l,p-v,w-M).normalize(),n)s[4].setComponents(c,f,m,_).normalize(),s[5].setComponents(u-c,d-f,p-m,w-_).normalize();else if(s[4].setComponents(u-c,d-f,p-m,w-_).normalize(),e===mn)s[5].setComponents(u+c,d+f,p+m,w+_).normalize();else if(e===kr)s[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){Jn.center.set(0,0,0);const e=Wc.distanceTo(t.center);return Jn.radius=.7071067811865476+e,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qo extends qe{constructor(t,e,n=ui,s,r,a,o=Qe,c=Qe,u,h=nr,l=1){if(h!==nr&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:l};super(f,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class tl extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $r extends Dn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,l=t/o,f=e/c,d=[],x=[],v=[],m=[];for(let p=0;p<h;p++){const g=p*f-a;for(let M=0;M<u;M++){const _=M*l-r;x.push(_,-g,0),v.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let g=0;g<o;g++){const M=g+u*p,_=g+u*(p+1),w=g+1+u*(p+1),A=g+1+u*p;d.push(M,_,A),d.push(_,w,A)}this.setIndex(d),this.setAttribute("position",new gn(x,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.width,t.height,t.widthSegments,t.heightSegments)}}class jr extends Dn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const h=[],l=new ct,f=new ct,d=[],x=[],v=[],m=[];for(let p=0;p<=n;p++){const g=[],M=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const A=w/e;l.x=-t*Math.cos(s+A*r)*Math.sin(a+M*o),l.y=t*Math.cos(a+M*o),l.z=t*Math.sin(s+A*r)*Math.sin(a+M*o),x.push(l.x,l.y,l.z),f.copy(l).normalize(),v.push(f.x,f.y,f.z),m.push(A+_,1-M),g.push(u++)}h.push(g)}for(let p=0;p<n;p++)for(let g=0;g<e;g++){const M=h[p][g+1],_=h[p][g],w=h[p+1][g],A=h[p+1][g+1];(p!==0||a>0)&&d.push(M,_,A),(p!==n-1||c<Math.PI)&&d.push(_,w,A)}this.setIndex(d),this.setAttribute("position",new gn(x,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xc extends ur{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=ys,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qc extends ur{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yc extends ur{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Zc extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Kc extends $o{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $c extends Zc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class jc extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Jc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function io(i,t,e,n){const s=Qc(n);switch(e){case Oo:return i*t;case Vo:return i*t/s.components*s.byteLength;case Es:return i*t/s.components*s.byteLength;case ws:return i*t*2/s.components*s.byteLength;case Ts:return i*t*2/s.components*s.byteLength;case zo:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case As:return i*t*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(t,8)/2;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ts:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case es:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ns:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case is:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case as:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ss:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case os:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ls:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cs:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case us:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hs:case fs:case ds:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ps:case ms:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xs:case vs:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qc(i){switch(i){case In:case No:return{byteLength:1,components:1};case tr:case Uo:case Vi:return{byteLength:2,components:1};case Ss:case bs:return{byteLength:2,components:4};case ui:case Ms:case Cn:return{byteLength:4,components:1};case Fo:case Bo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_s}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_s);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function el(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tu(i){const t=new WeakMap;function e(o,c){const u=o.array,h=o.usage,l=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,h),o.onUploadCallback();let d;if(u instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)d=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=i.SHORT;else if(u instanceof Uint32Array)d=i.UNSIGNED_INT;else if(u instanceof Int32Array)d=i.INT;else if(u instanceof Int8Array)d=i.BYTE;else if(u instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,u){const h=c.array,l=c.updateRanges;if(i.bindBuffer(u,o),l.length===0)i.bufferSubData(u,0,h);else{l.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<l.length;d++){const x=l[f],v=l[d];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,l[f]=v)}l.length=f+1;for(let d=0,x=l.length;d<x;d++){const v=l[d];i.bufferSubData(u,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:s,remove:r,update:a}}var eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nu=`#ifdef USE_ALPHAHASH
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
#endif`,iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
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
#endif`,lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu=`#ifdef USE_BATCHING
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
#endif`,uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,du=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pu=`#ifdef USE_IRIDESCENCE
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
#endif`,mu=`#ifdef USE_BUMPMAP
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
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Eu=`#define PI 3.141592653589793
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
} // validated`,wu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tu=`vec3 transformedNormal = objectNormal;
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
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Du=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hu=`#ifdef USE_GRADIENTMAP
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
}`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qu=`uniform bool receiveShadow;
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
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,Zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ju=`PhysicalMaterial material;
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
#endif`,Qu=`uniform sampler2D dfgLUT;
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
}`,th=`
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
#endif`,eh=`#if defined( RE_IndirectDiffuse )
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
#endif`,nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ih=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ah=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uh=`#if defined( USE_POINTS_UV )
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
#endif`,hh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ph=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xh=`#ifdef USE_MORPHTARGETS
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
#endif`,vh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_h=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bh=`#ifdef USE_NORMALMAP
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
#endif`,Eh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Th=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ch=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ph=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ih=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zh=`float getShadowMask() {
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
}`,Vh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gh=`#ifdef USE_SKINNING
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
#endif`,Hh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kh=`#ifdef USE_SKINNING
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
#endif`,Wh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zh=`#ifdef USE_TRANSMISSION
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
#endif`,Kh=`#ifdef USE_TRANSMISSION
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
#endif`,$h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ef=`uniform sampler2D t2D;
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`#include <common>
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
}`,lf=`#if DEPTH_PACKING == 3200
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
}`,cf=`#define DISTANCE
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
}`,uf=`#define DISTANCE
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
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ff=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`uniform float scale;
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#include <common>
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
}`,xf=`uniform vec3 diffuse;
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
}`,vf=`#define LAMBERT
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
}`,gf=`#define LAMBERT
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
}`,_f=`#define MATCAP
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
}`,yf=`#define MATCAP
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
}`,Mf=`#define NORMAL
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
}`,Sf=`#define NORMAL
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
}`,bf=`#define PHONG
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
}`,Ef=`#define PHONG
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
}`,wf=`#define STANDARD
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
}`,Tf=`#define STANDARD
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
}`,Af=`#define TOON
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
}`,Rf=`#define TOON
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
}`,Cf=`uniform float size;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,If=`uniform vec3 color;
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
}`,Df=`uniform float rotation;
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
}`,Nf=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:eu,alphahash_pars_fragment:nu,alphamap_fragment:iu,alphamap_pars_fragment:ru,alphatest_fragment:au,alphatest_pars_fragment:su,aomap_fragment:ou,aomap_pars_fragment:lu,batching_pars_vertex:cu,batching_vertex:uu,begin_vertex:hu,beginnormal_vertex:fu,bsdfs:du,iridescence_fragment:pu,bumpmap_pars_fragment:mu,clipping_planes_fragment:xu,clipping_planes_pars_fragment:vu,clipping_planes_pars_vertex:gu,clipping_planes_vertex:_u,color_fragment:yu,color_pars_fragment:Mu,color_pars_vertex:Su,color_vertex:bu,common:Eu,cube_uv_reflection_fragment:wu,defaultnormal_vertex:Tu,displacementmap_pars_vertex:Au,displacementmap_vertex:Ru,emissivemap_fragment:Cu,emissivemap_pars_fragment:Pu,colorspace_fragment:Lu,colorspace_pars_fragment:Iu,envmap_fragment:Du,envmap_common_pars_fragment:Nu,envmap_pars_fragment:Uu,envmap_pars_vertex:Fu,envmap_physical_pars_fragment:Yu,envmap_vertex:Bu,fog_vertex:Ou,fog_pars_vertex:zu,fog_fragment:Vu,fog_pars_fragment:Gu,gradientmap_pars_fragment:Hu,lightmap_pars_fragment:ku,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Xu,lights_pars_begin:qu,lights_toon_fragment:Zu,lights_toon_pars_fragment:Ku,lights_phong_fragment:$u,lights_phong_pars_fragment:ju,lights_physical_fragment:Ju,lights_physical_pars_fragment:Qu,lights_fragment_begin:th,lights_fragment_maps:eh,lights_fragment_end:nh,logdepthbuf_fragment:ih,logdepthbuf_pars_fragment:rh,logdepthbuf_pars_vertex:ah,logdepthbuf_vertex:sh,map_fragment:oh,map_pars_fragment:lh,map_particle_fragment:ch,map_particle_pars_fragment:uh,metalnessmap_fragment:hh,metalnessmap_pars_fragment:fh,morphinstance_vertex:dh,morphcolor_vertex:ph,morphnormal_vertex:mh,morphtarget_pars_vertex:xh,morphtarget_vertex:vh,normal_fragment_begin:gh,normal_fragment_maps:_h,normal_pars_fragment:yh,normal_pars_vertex:Mh,normal_vertex:Sh,normalmap_pars_fragment:bh,clearcoat_normal_fragment_begin:Eh,clearcoat_normal_fragment_maps:wh,clearcoat_pars_fragment:Th,iridescence_pars_fragment:Ah,opaque_fragment:Rh,packing:Ch,premultiplied_alpha_fragment:Ph,project_vertex:Lh,dithering_fragment:Ih,dithering_pars_fragment:Dh,roughnessmap_fragment:Nh,roughnessmap_pars_fragment:Uh,shadowmap_pars_fragment:Fh,shadowmap_pars_vertex:Bh,shadowmap_vertex:Oh,shadowmask_pars_fragment:zh,skinbase_vertex:Vh,skinning_pars_vertex:Gh,skinning_vertex:Hh,skinnormal_vertex:kh,specularmap_fragment:Wh,specularmap_pars_fragment:Xh,tonemapping_fragment:qh,tonemapping_pars_fragment:Yh,transmission_fragment:Zh,transmission_pars_fragment:Kh,uv_pars_fragment:$h,uv_pars_vertex:jh,uv_vertex:Jh,worldpos_vertex:Qh,background_vert:tf,background_frag:ef,backgroundCube_vert:nf,backgroundCube_frag:rf,cube_vert:af,cube_frag:sf,depth_vert:of,depth_frag:lf,distanceRGBA_vert:cf,distanceRGBA_frag:uf,equirect_vert:hf,equirect_frag:ff,linedashed_vert:df,linedashed_frag:pf,meshbasic_vert:mf,meshbasic_frag:xf,meshlambert_vert:vf,meshlambert_frag:gf,meshmatcap_vert:_f,meshmatcap_frag:yf,meshnormal_vert:Mf,meshnormal_frag:Sf,meshphong_vert:bf,meshphong_frag:Ef,meshphysical_vert:wf,meshphysical_frag:Tf,meshtoon_vert:Af,meshtoon_frag:Rf,points_vert:Cf,points_frag:Pf,shadow_vert:Lf,shadow_frag:If,sprite_vert:Df,sprite_frag:Nf},Wt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},dn={basic:{uniforms:Xe([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Xe([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Te(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Xe([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Xe([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Xe([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Te(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Xe([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Xe([Wt.points,Wt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Xe([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Xe([Wt.common,Wt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Xe([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Xe([Wt.sprite,Wt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Xe([Wt.common,Wt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Xe([Wt.lights,Wt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};dn.physical={uniforms:Xe([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Pr={r:0,b:0,g:0},Qn=new _n,Uf=new Ue;function Ff(i,t,e,n,s,r,a){const o=new Te(0);let c=r===!0?0:1,u,h,l=null,f=0,d=null;function x(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function v(M){let _=!1;const w=x(M);w===null?p(o,c):w&&w.isColor&&(p(w,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const w=x(_);w&&(w.isCubeTexture||w.mapping===Kr)?(h===void 0&&(h=new He(new fi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Oi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qn.copy(_.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Uf.makeRotationFromEuler(Qn)),h.material.toneMapped=we.getTransfer(w.colorSpace)!==Re,(l!==w||f!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,l=w,f=w.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new He(new $r(2,2),new yn({name:"BackgroundMaterial",uniforms:Oi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=we.getTransfer(w.colorSpace)!==Re,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(l!==w||f!==w.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,l=w,f=w.version,d=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function p(M,_){M.getRGB(Pr,Ko(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,_,a)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:v,addToRenderList:m,dispose:g}}function Bf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(y,E,N,F,Y){let W=!1;const nt=l(F,N,E);r!==nt&&(r=nt,u(r.object)),W=d(y,F,N,Y),W&&x(y,F,N,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(y,E,N,F),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function u(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function l(y,E,N){const F=N.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let W=Y[E.id];W===void 0&&(W={},Y[E.id]=W);let nt=W[F];return nt===void 0&&(nt=f(c()),W[F]=nt),nt}function f(y){const E=[],N=[],F=[];for(let Y=0;Y<e;Y++)E[Y]=0,N[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:F,object:y,attributes:{},index:null}}function d(y,E,N,F){const Y=r.attributes,W=E.attributes;let nt=0;const z=N.getAttributes();for(const P in z)if(z[P].location>=0){const K=Y[P];let O=W[P];if(O===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(O=y.instanceColor)),K===void 0||K.attribute!==O||O&&K.data!==O.data)return!0;nt++}return r.attributesNum!==nt||r.index!==F}function x(y,E,N,F){const Y={},W=E.attributes;let nt=0;const z=N.getAttributes();for(const P in z)if(z[P].location>=0){let K=W[P];K===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const O={};O.attribute=K,K&&K.data&&(O.data=K.data),Y[P]=O,nt++}r.attributes=Y,r.attributesNum=nt,r.index=F}function v(){const y=r.newAttributes;for(let E=0,N=y.length;E<N;E++)y[E]=0}function m(y){p(y,0)}function p(y,E){const N=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;N[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),Y[y]!==E&&(i.vertexAttribDivisor(y,E),Y[y]=E)}function g(){const y=r.newAttributes,E=r.enabledAttributes;for(let N=0,F=E.length;N<F;N++)E[N]!==y[N]&&(i.disableVertexAttribArray(N),E[N]=0)}function M(y,E,N,F,Y,W,nt){nt===!0?i.vertexAttribIPointer(y,E,N,Y,W):i.vertexAttribPointer(y,E,N,F,Y,W)}function _(y,E,N,F){v();const Y=F.attributes,W=N.getAttributes(),nt=E.defaultAttributeValues;for(const z in W){const P=W[z];if(P.location>=0){let J=Y[z];if(J===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const K=J.normalized,O=J.itemSize,tt=t.get(J);if(tt===void 0)continue;const V=tt.buffer,B=tt.type,I=tt.bytesPerElement,L=B===i.INT||B===i.UNSIGNED_INT||J.gpuType===Ms;if(J.isInterleavedBufferAttribute){const k=J.data,j=k.stride,X=J.offset;if(k.isInstancedInterleavedBuffer){for(let et=0;et<P.locationSize;et++)p(P.location+et,k.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let et=0;et<P.locationSize;et++)m(P.location+et);i.bindBuffer(i.ARRAY_BUFFER,V);for(let et=0;et<P.locationSize;et++)M(P.location+et,O/P.locationSize,B,K,j*I,(X+O/P.locationSize*et)*I,L)}else{if(J.isInstancedBufferAttribute){for(let k=0;k<P.locationSize;k++)p(P.location+k,J.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let k=0;k<P.locationSize;k++)m(P.location+k);i.bindBuffer(i.ARRAY_BUFFER,V);for(let k=0;k<P.locationSize;k++)M(P.location+k,O/P.locationSize,B,K,O*I,O/P.locationSize*k*I,L)}}else if(nt!==void 0){const K=nt[z];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(P.location,K);break;case 3:i.vertexAttrib3fv(P.location,K);break;case 4:i.vertexAttrib4fv(P.location,K);break;default:i.vertexAttrib1fv(P.location,K)}}}}g()}function w(){D();for(const y in n){const E=n[y];for(const N in E){const F=E[N];for(const Y in F)h(F[Y].object),delete F[Y];delete E[N]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const E=n[y.id];for(const N in E){const F=E[N];for(const Y in F)h(F[Y].object),delete F[Y];delete E[N]}delete n[y.id]}function U(y){for(const E in n){const N=n[E];if(N[y.id]===void 0)continue;const F=N[y.id];for(const Y in F)h(F[Y].object),delete F[Y];delete N[y.id]}}function D(){b(),a=!0,r!==s&&(r=s,u(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function Of(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function a(u,h,l){l!==0&&(i.drawArraysInstanced(n,u,h,l),e.update(h,n,l))}function o(u,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,l);let d=0;for(let x=0;x<l;x++)d+=h[x];e.update(d,n,1)}function c(u,h,l,f){if(l===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<u.length;x++)a(u[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,l);let x=0;for(let v=0;v<l;v++)x+=h[v]*f[v];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==fn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const D=U===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==In&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Cn&&!D)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(pe("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const l=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:l,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:w,maxSamples:A}}function Vf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ei,o=new xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){const d=l.length!==0||f||n!==0||s;return s=f,n=l.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,f){e=h(l,f,0)},this.setState=function(l,f,d){const x=l.clippingPlanes,v=l.clipIntersection,m=l.clipShadows,p=i.get(l);if(!s||x===null||x.length===0||r&&!m)r?h(null):u();else{const g=r?0:n,M=g*4;let _=p.clippingState||null;c.value=_,_=h(x,f,M,d);for(let w=0;w!==M;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,f,d,x){const v=l!==null?l.length:0;let m=null;if(v!==0){if(m=c.value,x!==!0||m===null){const p=d+v*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=d;M!==v;++M,_+=4)a.copy(l[M]).applyMatrix4(g,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Gf(i){let t=new WeakMap;function e(a,o){return o===Va?a.mapping=Ui:o===Ga&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Va||o===Ga)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Oc(c.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Hn=4,ro=[.125,.215,.35,.446,.526,.582],si=20,Hf=512,Zi=new Kc,ao=new Te;let Ea=null,wa=0,Ta=0,Aa=!1;const kf=new ct;class so{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=kf}=r;Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,wa,Ta),this._renderer.xr.enabled=Aa,t.scissorTest=!1,Ti(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Vi,format:fn,colorSpace:Bi,depthBuffer:!1},s=oo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oo(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Wf(r)),this._blurMaterial=qf(r,t,e)}return s}_compileMaterial(t){const e=new He(new Dn,t);this._renderer.compile(e,Zi)}_sceneToCubeUV(t,e,n,s,r){const c=new an(90,1,e,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,d=l.toneMapping;l.getClearColor(ao),l.toneMapping=kn,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(s),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new fi,new Ls({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,p=!0):(m.color.copy(ao),p=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(c.up.set(0,u[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):_===1?(c.up.set(0,0,u[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,u[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const w=this._cubeSize;Ti(s,_*w,M>2?w:0,w,w),l.setRenderTarget(s),p&&l.render(v,c),l.render(t,c)}l.toneMapping=d,l.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ui||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=co()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ti(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Zi)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const g=3*Math.max(this._cubeSize,16),M=4*this._cubeSize;this._ggxMaterial=Xf(this._lodMax,g,M)}const a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,u=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),l=Math.sqrt(u*u-h*h),f=.05+u*.95,d=l*f,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-Hn?n-x+Hn:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=x-e,Ti(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Zi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,Ti(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Zi)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const h=3,l=this._lodMeshes[s];l.material=u;const f=u.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*si-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):si;m>si&&pe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const p=[];let g=0;for(let U=0;U<si;++U){const D=U/v,b=Math.exp(-D*D/2);p.push(b),U===0?g+=b:U<m&&(g+=2*b)}for(let U=0;U<p.length;U++)p[U]=p[U]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-n;const _=this._sizeLods[s],w=3*_*(s>M-Hn?s-M+Hn:0),A=4*(this._cubeSize-_);Ti(e,w,A,3*_,2*_),c.setRenderTarget(e),c.render(l,Zi)}}function Wf(i){const t=[],e=[],n=[];let s=i;const r=i-Hn+1+ro.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Hn?c=ro[a-i+Hn-1]:a===0&&(c=0),e.push(c);const u=1/(o-2),h=-u,l=1+u,f=[h,h,l,h,l,l,h,h,l,l,h,l],d=6,x=6,v=3,m=2,p=1,g=new Float32Array(v*x*d),M=new Float32Array(m*x*d),_=new Float32Array(p*x*d);for(let A=0;A<d;A++){const U=A%3*2/3-1,D=A>2?0:-1,b=[U,D,0,U+2/3,D,0,U+2/3,D+1,0,U,D,0,U+2/3,D+1,0,U,D+1,0];g.set(b,v*x*A),M.set(f,m*x*A);const y=[A,A,A,A,A,A];_.set(y,p*x*A)}const w=new Dn;w.setAttribute("position",new vn(g,v)),w.setAttribute("uv",new vn(M,m)),w.setAttribute("faceIndex",new vn(_,p)),n.push(new He(w,null)),s>Hn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function oo(i,t,e){const n=new hi(i,t,e);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ti(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xf(i,t,e){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function qf(i,t,e){const n=new Float32Array(si),s=new ct(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function lo(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function co(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Jr(){return`

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
	`}function Yf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===Va||c===Ga,h=c===Ui||c===Fi;if(u||h){let l=t.get(o);const f=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new so(i)),l=u?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{const d=o.image;return u&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new so(i)),l=u?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function s(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function r(o){const c=o.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Zf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rr("WebGLRenderer: "+n+" extension not supported."),s}}}function Kf(i,t,e,n){const s={},r=new WeakMap;function a(l){const f=l.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(l,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(l){const f=l.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function u(l){const f=[],d=l.index,x=l.attributes.position;let v=0;if(d!==null){const g=d.array;v=d.version;for(let M=0,_=g.length;M<_;M+=3){const w=g[M+0],A=g[M+1],U=g[M+2];f.push(w,A,A,U,U,w)}}else if(x!==void 0){const g=x.array;v=x.version;for(let M=0,_=g.length/3-1;M<_;M+=3){const w=M+0,A=M+1,U=M+2;f.push(w,A,A,U,U,w)}}else return;const m=new(ko(f)?Zo:Yo)(f,1);m.version=v;const p=r.get(l);p&&t.remove(p),r.set(l,m)}function h(l){const f=r.get(l);if(f){const d=l.index;d!==null&&f.version<d.version&&u(l)}else u(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function $f(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function u(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,f*a,x),e.update(d,n,x))}function h(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];e.update(m,n,1)}function l(f,d,x,v){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)u(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,x);let p=0;for(let g=0;g<x;g++)p+=d[g]*v[g];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function jf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jf(i,t,e){const n=new WeakMap,s=new Ie;function r(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==l){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;x===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let w=o.attributes.position.count*_,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const U=new Float32Array(w*A*4*l),D=new Wo(U,w,A,l);D.type=Cn,D.needsUpdate=!0;const b=_*4;for(let E=0;E<l;E++){const N=p[E],F=g[E],Y=M[E],W=w*A*4*E;for(let nt=0;nt<N.count;nt++){const z=nt*b;x===!0&&(s.fromBufferAttribute(N,nt),U[W+z+0]=s.x,U[W+z+1]=s.y,U[W+z+2]=s.z,U[W+z+3]=0),v===!0&&(s.fromBufferAttribute(F,nt),U[W+z+4]=s.x,U[W+z+5]=s.y,U[W+z+6]=s.z,U[W+z+7]=0),m===!0&&(s.fromBufferAttribute(Y,nt),U[W+z+8]=s.x,U[W+z+9]=s.y,U[W+z+10]=s.z,U[W+z+11]=Y.itemSize===4?s.w:1)}}f={count:l,texture:D,size:new Ae(w,A)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let x=0;for(let m=0;m<u.length;m++)x+=u[m];const v=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Qf(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return l}function a(){s=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const nl=new qe,uo=new Qo(1,1),il=new Wo,rl=new yc,al=new jo,ho=[],fo=[],po=new Float32Array(16),mo=new Float32Array(9),xo=new Float32Array(4);function ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ho[s];if(r===void 0&&(r=new Float32Array(s),ho[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qr(i,t){let e=fo[t];e===void 0&&(e=new Int32Array(t),fo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function td(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ed(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function nd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function id(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function rd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;xo.set(n),i.uniformMatrix2fv(this.addr,!1,xo),Be(e,n)}}function ad(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;mo.set(n),i.uniformMatrix3fv(this.addr,!1,mo),Be(e,n)}}function sd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;po.set(n),i.uniformMatrix4fv(this.addr,!1,po),Be(e,n)}}function od(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ld(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function hd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function md(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uo.compareFunction=Ho,r=uo):r=nl,e.setTexture2D(t||r,s)}function xd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rl,s)}function vd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||al,s)}function gd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||il,s)}function _d(i){switch(i){case 5126:return td;case 35664:return ed;case 35665:return nd;case 35666:return id;case 35674:return rd;case 35675:return ad;case 35676:return sd;case 5124:case 35670:return od;case 35667:case 35671:return ld;case 35668:case 35672:return cd;case 35669:case 35673:return ud;case 5125:return hd;case 36294:return fd;case 36295:return dd;case 36296:return pd;case 35678:case 36198:case 36298:case 36306:case 35682:return md;case 35679:case 36299:case 36307:return xd;case 35680:case 36300:case 36308:case 36293:return vd;case 36289:case 36303:case 36311:case 36292:return gd}}function yd(i,t){i.uniform1fv(this.addr,t)}function Md(i,t){const e=ki(t,this.size,2);i.uniform2fv(this.addr,e)}function Sd(i,t){const e=ki(t,this.size,3);i.uniform3fv(this.addr,e)}function bd(i,t){const e=ki(t,this.size,4);i.uniform4fv(this.addr,e)}function Ed(i,t){const e=ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wd(i,t){const e=ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Td(i,t){const e=ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ad(i,t){i.uniform1iv(this.addr,t)}function Rd(i,t){i.uniform2iv(this.addr,t)}function Cd(i,t){i.uniform3iv(this.addr,t)}function Pd(i,t){i.uniform4iv(this.addr,t)}function Ld(i,t){i.uniform1uiv(this.addr,t)}function Id(i,t){i.uniform2uiv(this.addr,t)}function Dd(i,t){i.uniform3uiv(this.addr,t)}function Nd(i,t){i.uniform4uiv(this.addr,t)}function Ud(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nl,r[a])}function Fd(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rl,r[a])}function Bd(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||al,r[a])}function Od(i,t,e){const n=this.cache,s=t.length,r=Qr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||il,r[a])}function zd(i){switch(i){case 5126:return yd;case 35664:return Md;case 35665:return Sd;case 35666:return bd;case 35674:return Ed;case 35675:return wd;case 35676:return Td;case 5124:case 35670:return Ad;case 35667:case 35671:return Rd;case 35668:case 35672:return Cd;case 35669:case 35673:return Pd;case 5125:return Ld;case 36294:return Id;case 36295:return Dd;case 36296:return Nd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ud;case 35679:case 36299:case 36307:return Fd;case 35680:case 36300:case 36308:case 36293:return Bd;case 36289:case 36303:case 36311:case 36292:return Od}}class Vd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_d(e.type)}}class Gd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zd(e.type)}}class Hd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function vo(i,t){i.seq.push(t),i.map[t.id]=t}function kd(i,t,e){const n=i.name,s=n.length;for(Ra.lastIndex=0;;){const r=Ra.exec(n),a=Ra.lastIndex;let o=r[1];const c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){vo(e,u===void 0?new Vd(o,i,t):new Gd(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new Hd(o),vo(e,l)),e=l}}}class zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);kd(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function go(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Wd=37297;let Xd=0;function qd(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const _o=new xe;function Yd(i){we._getMatrix(_o,we.workingColorSpace,i);const t=`mat3( ${_o.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(i)){case Hr:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+qd(i.getShaderSource(t),o)}else return r}function Zd(i,t){const e=Yd(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kd(i,t){let e;switch(t){case Il:e="Linear";break;case Dl:e="Reinhard";break;case Nl:e="Cineon";break;case Ul:e="ACESFilmic";break;case Bl:e="AgX";break;case Ol:e="Neutral";break;case Fl:e="Custom";break;default:pe("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lr=new ct;function $d(){we.getLuminanceCoefficients(Lr);const i=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function Jd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ki(i){return i!==""}function Mo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function So(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function gs(i){return i.replace(tp,np)}const ep=new Map;function np(i,t){let e=_e[t];if(e===void 0){const n=ep.get(t);if(n!==void 0)e=_e[n],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gs(e)}const ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bo(i){return i.replace(ip,rp)}function rp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ap(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Io?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function sp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Fi:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function op(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function lp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ys:t="ENVMAP_BLENDING_MULTIPLY";break;case Pl:t="ENVMAP_BLENDING_MIX";break;case Ll:t="ENVMAP_BLENDING_ADD";break}return t}function cp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function up(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=ap(e),u=sp(e),h=op(e),l=lp(e),f=cp(e),d=jd(e),x=Jd(r),v=s.createProgram();let m,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ki).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ki).join(`
`),p.length>0&&(p+=`
`)):(m=[Eo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),p=[Eo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?_e.tonemapping_pars_fragment:"",e.toneMapping!==kn?Kd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,Zd("linearToOutputTexel",e.outputColorSpace),$d(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),a=gs(a),a=Mo(a,e),a=So(a,e),o=gs(o),o=Mo(o,e),o=So(o,e),a=bo(a),o=bo(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=g+m+a,_=g+p+o,w=go(s,s.VERTEX_SHADER,M),A=go(s,s.FRAGMENT_SHADER,_);s.attachShader(v,w),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function U(E){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v)||"",F=s.getShaderInfoLog(w)||"",Y=s.getShaderInfoLog(A)||"",W=N.trim(),nt=F.trim(),z=Y.trim();let P=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(P=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,A);else{const K=yo(s,w,"vertex"),O=yo(s,A,"fragment");Le("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+K+`
`+O)}else W!==""?pe("WebGLProgram: Program Info Log:",W):(nt===""||z==="")&&(J=!1);J&&(E.diagnostics={runnable:P,programLog:W,vertexShader:{log:nt,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(w),s.deleteShader(A),D=new zr(s,v),b=Qd(s,v)}let D;this.getUniforms=function(){return D===void 0&&U(this),D};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Wd)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xd++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}let hp=0;class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dp(t),e.set(t,n)),n}}class dp{constructor(t){this.id=hp++,this.code=t,this.usedTimes=0}}function pp(i,t,e,n,s,r,a){const o=new Xo,c=new fp,u=new Set,h=[],l=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return u.add(b),b===0?"uv":`uv${b}`}function m(b,y,E,N,F){const Y=N.fog,W=F.geometry,nt=b.isMeshStandardMaterial?N.environment:null,z=(b.isMeshStandardMaterial?e:t).get(b.envMap||nt),P=z&&z.mapping===Kr?z.image.height:null,J=x[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&pe("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,O=K!==void 0?K.length:0;let tt=0;W.morphAttributes.position!==void 0&&(tt=1),W.morphAttributes.normal!==void 0&&(tt=2),W.morphAttributes.color!==void 0&&(tt=3);let V,B,I,L;if(J){const le=dn[J];V=le.vertexShader,B=le.fragmentShader}else V=b.vertexShader,B=b.fragmentShader,c.update(b),I=c.getVertexShaderID(b),L=c.getFragmentShaderID(b);const k=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),X=F.isInstancedMesh===!0,et=F.isBatchedMesh===!0,lt=!!b.map,Ht=!!b.matcap,pt=!!z,vt=!!b.aoMap,R=!!b.lightMap,ut=!!b.bumpMap,qt=!!b.normalMap,kt=!!b.displacementMap,Rt=!!b.emissiveMap,wt=!!b.metalnessMap,Ct=!!b.roughnessMap,Xt=b.anisotropy>0,C=b.clearcoat>0,S=b.dispersion>0,q=b.iridescence>0,st=b.sheen>0,ot=b.transmission>0,rt=Xt&&!!b.anisotropyMap,Kt=C&&!!b.clearcoatMap,It=C&&!!b.clearcoatNormalMap,te=C&&!!b.clearcoatRoughnessMap,Jt=q&&!!b.iridescenceMap,dt=q&&!!b.iridescenceThicknessMap,St=st&&!!b.sheenColorMap,ae=st&&!!b.sheenRoughnessMap,ee=!!b.specularMap,zt=!!b.specularColorMap,ne=!!b.specularIntensityMap,G=ot&&!!b.transmissionMap,Pt=ot&&!!b.thicknessMap,Et=!!b.gradientMap,Mt=!!b.alphaMap,gt=b.alphaTest>0,ft=!!b.alphaHash,$t=!!b.extensions;let se=kn;b.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(se=i.toneMapping);const be={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:V,fragmentShader:B,defines:b.defines,customVertexShaderID:I,customFragmentShaderID:L,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:et,batchingColor:et&&F._colorsTexture!==null,instancing:X,instancingColor:X&&F.instanceColor!==null,instancingMorph:X&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Bi,alphaToCoverage:!!b.alphaToCoverage,map:lt,matcap:Ht,envMap:pt,envMapMode:pt&&z.mapping,envMapCubeUVHeight:P,aoMap:vt,lightMap:R,bumpMap:ut,normalMap:qt,displacementMap:f&&kt,emissiveMap:Rt,normalMapObjectSpace:qt&&b.normalMapType===Hl,normalMapTangentSpace:qt&&b.normalMapType===Go,metalnessMap:wt,roughnessMap:Ct,anisotropy:Xt,anisotropyMap:rt,clearcoat:C,clearcoatMap:Kt,clearcoatNormalMap:It,clearcoatRoughnessMap:te,dispersion:S,iridescence:q,iridescenceMap:Jt,iridescenceThicknessMap:dt,sheen:st,sheenColorMap:St,sheenRoughnessMap:ae,specularMap:ee,specularColorMap:zt,specularIntensityMap:ne,transmission:ot,transmissionMap:G,thicknessMap:Pt,gradientMap:Et,opaque:b.transparent===!1&&b.blending===Pi&&b.alphaToCoverage===!1,alphaMap:Mt,alphaTest:gt,alphaHash:ft,combine:b.combine,mapUv:lt&&v(b.map.channel),aoMapUv:vt&&v(b.aoMap.channel),lightMapUv:R&&v(b.lightMap.channel),bumpMapUv:ut&&v(b.bumpMap.channel),normalMapUv:qt&&v(b.normalMap.channel),displacementMapUv:kt&&v(b.displacementMap.channel),emissiveMapUv:Rt&&v(b.emissiveMap.channel),metalnessMapUv:wt&&v(b.metalnessMap.channel),roughnessMapUv:Ct&&v(b.roughnessMap.channel),anisotropyMapUv:rt&&v(b.anisotropyMap.channel),clearcoatMapUv:Kt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:It&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:ae&&v(b.sheenRoughnessMap.channel),specularMapUv:ee&&v(b.specularMap.channel),specularColorMapUv:zt&&v(b.specularColorMap.channel),specularIntensityMapUv:ne&&v(b.specularIntensityMap.channel),transmissionMapUv:G&&v(b.transmissionMap.channel),thicknessMapUv:Pt&&v(b.thicknessMap.channel),alphaMapUv:Mt&&v(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(qt||Xt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(lt||Mt),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:j,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:tt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:lt&&b.map.isVideoTexture===!0&&we.getTransfer(b.map.colorSpace)===Re,decodeVideoTextureEmissive:Rt&&b.emissiveMap.isVideoTexture===!0&&we.getTransfer(b.emissiveMap.colorSpace)===Re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pn,flipSided:b.side===Ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$t&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&b.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return be.vertexUv1s=u.has(1),be.vertexUv2s=u.has(2),be.vertexUv3s=u.has(3),u.clear(),be}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const E in b.defines)y.push(E),y.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(g(y,b),M(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function g(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const y=x[b.type];let E;if(y){const N=dn[y];E=Nc.clone(N.uniforms)}else E=b.uniforms;return E}function w(b,y){let E;for(let N=0,F=h.length;N<F;N++){const Y=h[N];if(Y.cacheKey===y){E=Y,++E.usedTimes;break}}return E===void 0&&(E=new up(i,y,b,r),h.push(E)),E}function A(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function U(b){c.remove(b)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:w,releaseProgram:A,releaseShaderCache:U,programs:h,dispose:D}}function mp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function xp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function To(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,f,d,x,v,m){let p=i[t];return p===void 0?(p={id:l.id,object:l,geometry:f,material:d,groupOrder:x,renderOrder:l.renderOrder,z:v,group:m},i[t]=p):(p.id=l.id,p.object=l,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=l.renderOrder,p.z=v,p.group=m),t++,p}function o(l,f,d,x,v,m){const p=a(l,f,d,x,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(l,f,d,x,v,m){const p=a(l,f,d,x,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function u(l,f){e.length>1&&e.sort(l||xp),n.length>1&&n.sort(f||wo),s.length>1&&s.sort(f||wo)}function h(){for(let l=t,f=i.length;l<f;l++){const d=i[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:u}}function vp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new To,i.set(n,[a])):s>=r.length?(a=new To,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function gp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new ct,color:new Te};break;case"SpotLight":e={position:new ct,direction:new ct,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ct,color:new Te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ct,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":e={color:new Te,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return i[t.id]=e,e}}}function _p(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let yp=0;function Mp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sp(i){const t=new gp,e=_p(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new ct);const s=new ct,r=new Ue,a=new Ue;function o(u){let h=0,l=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,x=0,v=0,m=0,p=0,g=0,M=0,_=0,w=0,A=0,U=0;u.sort(Mp);for(let b=0,y=u.length;b<y;b++){const E=u[b],N=E.color,F=E.intensity,Y=E.distance,W=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=N.r*F,l+=N.g*F,f+=N.b*F;else if(E.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(E.sh.coefficients[nt],F);U++}else if(E.isDirectionalLight){const nt=t.get(E);if(nt.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const z=E.shadow,P=e.get(E);P.shadowIntensity=z.intensity,P.shadowBias=z.bias,P.shadowNormalBias=z.normalBias,P.shadowRadius=z.radius,P.shadowMapSize=z.mapSize,n.directionalShadow[d]=P,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=E.shadow.matrix,g++}n.directional[d]=nt,d++}else if(E.isSpotLight){const nt=t.get(E);nt.position.setFromMatrixPosition(E.matrixWorld),nt.color.copy(N).multiplyScalar(F),nt.distance=Y,nt.coneCos=Math.cos(E.angle),nt.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),nt.decay=E.decay,n.spot[v]=nt;const z=E.shadow;if(E.map&&(n.spotLightMap[w]=E.map,w++,z.updateMatrices(E),E.castShadow&&A++),n.spotLightMatrix[v]=z.matrix,E.castShadow){const P=e.get(E);P.shadowIntensity=z.intensity,P.shadowBias=z.bias,P.shadowNormalBias=z.normalBias,P.shadowRadius=z.radius,P.shadowMapSize=z.mapSize,n.spotShadow[v]=P,n.spotShadowMap[v]=W,_++}v++}else if(E.isRectAreaLight){const nt=t.get(E);nt.color.copy(N).multiplyScalar(F),nt.halfWidth.set(E.width*.5,0,0),nt.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=nt,m++}else if(E.isPointLight){const nt=t.get(E);if(nt.color.copy(E.color).multiplyScalar(E.intensity),nt.distance=E.distance,nt.decay=E.decay,E.castShadow){const z=E.shadow,P=e.get(E);P.shadowIntensity=z.intensity,P.shadowBias=z.bias,P.shadowNormalBias=z.normalBias,P.shadowRadius=z.radius,P.shadowMapSize=z.mapSize,P.shadowCameraNear=z.camera.near,P.shadowCameraFar=z.camera.far,n.pointShadow[x]=P,n.pointShadowMap[x]=W,n.pointShadowMatrix[x]=E.shadow.matrix,M++}n.point[x]=nt,x++}else if(E.isHemisphereLight){const nt=t.get(E);nt.skyColor.copy(E.color).multiplyScalar(F),nt.groundColor.copy(E.groundColor).multiplyScalar(F),n.hemi[p]=nt,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==x||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==g||D.numPointShadows!==M||D.numSpotShadows!==_||D.numSpotMaps!==w||D.numLightProbes!==U)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=U,D.directionalLength=d,D.pointLength=x,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=g,D.numPointShadows=M,D.numSpotShadows=_,D.numSpotMaps=w,D.numLightProbes=U,n.version=yp++)}function c(u,h){let l=0,f=0,d=0,x=0,v=0;const m=h.matrixWorldInverse;for(let p=0,g=u.length;p<g;p++){const M=u[p];if(M.isDirectionalLight){const _=n.directional[l];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),l++}else if(M.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const _=n.rectArea[x];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Ao(i){const t=new Sp(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function bp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ao(i),t.set(s,[o])):r>=a.length?(o=new Ao(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ep=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wp=`uniform sampler2D shadow_pass;
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
}`;function Tp(i,t,e){let n=new Jo;const s=new Ae,r=new Ae,a=new Ie,o=new qc({depthPacking:Gl}),c=new Yc,u={},h=e.maxTextureSize,l={[qn]:Ke,[Ke]:qn,[pn]:pn},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Ep,fragmentShader:wp}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const x=new Dn;x.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new He(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let p=this.type;this.render=function(A,U,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Pn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==An&&this.type===An,Y=p===An&&this.type!==An;for(let W=0,nt=A.length;W<nt;W++){const z=A[W],P=z.shadow;if(P===void 0){pe("WebGLShadowMap:",z,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const J=P.getFrameExtents();if(s.multiply(J),r.copy(P.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,P.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,P.mapSize.y=r.y)),P.map===null||F===!0||Y===!0){const O=this.type!==An?{minFilter:Qe,magFilter:Qe}:{};P.map!==null&&P.map.dispose(),P.map=new hi(s.x,s.y,O),P.map.texture.name=z.name+".shadowMap",P.camera.updateProjectionMatrix()}i.setRenderTarget(P.map),i.clear();const K=P.getViewportCount();for(let O=0;O<K;O++){const tt=P.getViewport(O);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),N.viewport(a),P.updateMatrices(z,O),n=P.getFrustum(),_(U,D,P.camera,z,this.type)}P.isPointLightShadow!==!0&&this.type===An&&g(P,D),P.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,E)};function g(A,U){const D=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(U,null,D,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(U,null,D,d,v,null)}function M(A,U,D,b){let y=null;const E=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)y=E;else if(y=D.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const N=y.uuid,F=U.uuid;let Y=u[N];Y===void 0&&(Y={},u[N]=Y);let W=Y[F];W===void 0&&(W=y.clone(),Y[F]=W,U.addEventListener("dispose",w)),y=W}if(y.visible=U.visible,y.wireframe=U.wireframe,b===An?y.side=U.shadowSide!==null?U.shadowSide:U.side:y.side=U.shadowSide!==null?U.shadowSide:l[U.side],y.alphaMap=U.alphaMap,y.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,y.map=U.map,y.clipShadows=U.clipShadows,y.clippingPlanes=U.clippingPlanes,y.clipIntersection=U.clipIntersection,y.displacementMap=U.displacementMap,y.displacementScale=U.displacementScale,y.displacementBias=U.displacementBias,y.wireframeLinewidth=U.wireframeLinewidth,y.linewidth=U.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=D}return y}function _(A,U,D,b,y){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===An)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const F=t.update(A),Y=A.material;if(Array.isArray(Y)){const W=F.groups;for(let nt=0,z=W.length;nt<z;nt++){const P=W[nt],J=Y[P.materialIndex];if(J&&J.visible){const K=M(A,J,b,y);A.onBeforeShadow(i,A,U,D,F,K,P),i.renderBufferDirect(D,null,F,K,A,P),A.onAfterShadow(i,A,U,D,F,K,P)}}}else if(Y.visible){const W=M(A,Y,b,y);A.onBeforeShadow(i,A,U,D,F,W,null),i.renderBufferDirect(D,null,F,W,A,null),A.onAfterShadow(i,A,U,D,F,W,null)}}const N=A.children;for(let F=0,Y=N.length;F<Y;F++)_(N[F],U,D,b,y)}function w(A){A.target.removeEventListener("dispose",w);for(const D in u){const b=u[D],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const Ap={[Da]:Na,[Ua]:Oa,[Fa]:za,[Ni]:Ba,[Na]:Da,[Oa]:Ua,[za]:Fa,[Ba]:Ni};function Rp(i,t){function e(){let G=!1;const Pt=new Ie;let Et=null;const Mt=new Ie(0,0,0,0);return{setMask:function(gt){Et!==gt&&!G&&(i.colorMask(gt,gt,gt,gt),Et=gt)},setLocked:function(gt){G=gt},setClear:function(gt,ft,$t,se,be){be===!0&&(gt*=se,ft*=se,$t*=se),Pt.set(gt,ft,$t,se),Mt.equals(Pt)===!1&&(i.clearColor(gt,ft,$t,se),Mt.copy(Pt))},reset:function(){G=!1,Et=null,Mt.set(-1,0,0,0)}}}function n(){let G=!1,Pt=!1,Et=null,Mt=null,gt=null;return{setReversed:function(ft){if(Pt!==ft){const $t=t.get("EXT_clip_control");ft?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Pt=ft;const se=gt;gt=null,this.setClear(se)}},getReversed:function(){return Pt},setTest:function(ft){ft?k(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(ft){Et!==ft&&!G&&(i.depthMask(ft),Et=ft)},setFunc:function(ft){if(Pt&&(ft=Ap[ft]),Mt!==ft){switch(ft){case Da:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case Ni:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=ft}},setLocked:function(ft){G=ft},setClear:function(ft){gt!==ft&&(Pt&&(ft=1-ft),i.clearDepth(ft),gt=ft)},reset:function(){G=!1,Et=null,Mt=null,gt=null,Pt=!1}}}function s(){let G=!1,Pt=null,Et=null,Mt=null,gt=null,ft=null,$t=null,se=null,be=null;return{setTest:function(le){G||(le?k(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(le){Pt!==le&&!G&&(i.stencilMask(le),Pt=le)},setFunc:function(le,at,ht){(Et!==le||Mt!==at||gt!==ht)&&(i.stencilFunc(le,at,ht),Et=le,Mt=at,gt=ht)},setOp:function(le,at,ht){(ft!==le||$t!==at||se!==ht)&&(i.stencilOp(le,at,ht),ft=le,$t=at,se=ht)},setLocked:function(le){G=le},setClear:function(le){be!==le&&(i.clearStencil(le),be=le)},reset:function(){G=!1,Pt=null,Et=null,Mt=null,gt=null,ft=null,$t=null,se=null,be=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,u=new WeakMap;let h={},l={},f=new WeakMap,d=[],x=null,v=!1,m=null,p=null,g=null,M=null,_=null,w=null,A=null,U=new Te(0,0,0),D=0,b=!1,y=null,E=null,N=null,F=null,Y=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,z=0;const P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(P)[1]),nt=z>=1):P.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),nt=z>=2);let J=null,K={};const O=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),V=new Ie().fromArray(O),B=new Ie().fromArray(tt);function I(G,Pt,Et,Mt){const gt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(G,ft),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<Et;$t++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(Pt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return ft}const L={};L[i.TEXTURE_2D]=I(i.TEXTURE_2D,i.TEXTURE_2D,1),L[i.TEXTURE_CUBE_MAP]=I(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[i.TEXTURE_2D_ARRAY]=I(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),L[i.TEXTURE_3D]=I(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(i.DEPTH_TEST),a.setFunc(Ni),ut(!1),qt(Is),k(i.CULL_FACE),vt(Pn);function k(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function j(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function X(G,Pt){return l[G]!==Pt?(i.bindFramebuffer(G,Pt),l[G]=Pt,G===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Pt),G===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function et(G,Pt){let Et=d,Mt=!1;if(G){Et=f.get(Pt),Et===void 0&&(Et=[],f.set(Pt,Et));const gt=G.textures;if(Et.length!==gt.length||Et[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,$t=gt.length;ft<$t;ft++)Et[ft]=i.COLOR_ATTACHMENT0+ft;Et.length=gt.length,Mt=!0}}else Et[0]!==i.BACK&&(Et[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(Et)}function lt(G){return x!==G?(i.useProgram(G),x=G,!0):!1}const Ht={[ai]:i.FUNC_ADD,[dl]:i.FUNC_SUBTRACT,[pl]:i.FUNC_REVERSE_SUBTRACT};Ht[ml]=i.MIN,Ht[xl]=i.MAX;const pt={[vl]:i.ZERO,[gl]:i.ONE,[_l]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[wl]:i.SRC_ALPHA_SATURATE,[bl]:i.DST_COLOR,[Ml]:i.DST_ALPHA,[yl]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[El]:i.ONE_MINUS_DST_COLOR,[Sl]:i.ONE_MINUS_DST_ALPHA,[Tl]:i.CONSTANT_COLOR,[Al]:i.ONE_MINUS_CONSTANT_COLOR,[Rl]:i.CONSTANT_ALPHA,[Cl]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(G,Pt,Et,Mt,gt,ft,$t,se,be,le){if(G===Pn){v===!0&&(j(i.BLEND),v=!1);return}if(v===!1&&(k(i.BLEND),v=!0),G!==fl){if(G!==m||le!==b){if((p!==ai||_!==ai)&&(i.blendEquation(i.FUNC_ADD),p=ai,_=ai),le)switch(G){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFunc(i.ONE,i.ONE);break;case Ds:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ns:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",G);break}else switch(G){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ds:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ns:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",G);break}g=null,M=null,w=null,A=null,U.set(0,0,0),D=0,m=G,b=le}return}gt=gt||Pt,ft=ft||Et,$t=$t||Mt,(Pt!==p||gt!==_)&&(i.blendEquationSeparate(Ht[Pt],Ht[gt]),p=Pt,_=gt),(Et!==g||Mt!==M||ft!==w||$t!==A)&&(i.blendFuncSeparate(pt[Et],pt[Mt],pt[ft],pt[$t]),g=Et,M=Mt,w=ft,A=$t),(se.equals(U)===!1||be!==D)&&(i.blendColor(se.r,se.g,se.b,be),U.copy(se),D=be),m=G,b=!1}function R(G,Pt){G.side===pn?j(i.CULL_FACE):k(i.CULL_FACE);let Et=G.side===Ke;Pt&&(Et=!Et),ut(Et),G.blending===Pi&&G.transparent===!1?vt(Pn):vt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const Mt=G.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Rt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(G){y!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),y=G)}function qt(G){G!==cl?(k(i.CULL_FACE),G!==E&&(G===Is?i.cullFace(i.BACK):G===ul?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),E=G}function kt(G){G!==N&&(nt&&i.lineWidth(G),N=G)}function Rt(G,Pt,Et){G?(k(i.POLYGON_OFFSET_FILL),(F!==Pt||Y!==Et)&&(i.polygonOffset(Pt,Et),F=Pt,Y=Et)):j(i.POLYGON_OFFSET_FILL)}function wt(G){G?k(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function Ct(G){G===void 0&&(G=i.TEXTURE0+W-1),J!==G&&(i.activeTexture(G),J=G)}function Xt(G,Pt,Et){Et===void 0&&(J===null?Et=i.TEXTURE0+W-1:Et=J);let Mt=K[Et];Mt===void 0&&(Mt={type:void 0,texture:void 0},K[Et]=Mt),(Mt.type!==G||Mt.texture!==Pt)&&(J!==Et&&(i.activeTexture(Et),J=Et),i.bindTexture(G,Pt||L[G]),Mt.type=G,Mt.texture=Pt)}function C(){const G=K[J];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function st(){try{i.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function ot(){try{i.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Kt(){try{i.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function It(){try{i.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function te(){try{i.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Jt(){try{i.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function dt(){try{i.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function St(G){V.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),V.copy(G))}function ae(G){B.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),B.copy(G))}function ee(G,Pt){let Et=u.get(Pt);Et===void 0&&(Et=new WeakMap,u.set(Pt,Et));let Mt=Et.get(G);Mt===void 0&&(Mt=i.getUniformBlockIndex(Pt,G.name),Et.set(G,Mt))}function zt(G,Pt){const Mt=u.get(Pt).get(G);c.get(Pt)!==Mt&&(i.uniformBlockBinding(Pt,Mt,G.__bindingPointIndex),c.set(Pt,Mt))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,K={},l={},f=new WeakMap,d=[],x=null,v=!1,m=null,p=null,g=null,M=null,_=null,w=null,A=null,U=new Te(0,0,0),D=0,b=!1,y=null,E=null,N=null,F=null,Y=null,V.set(0,0,i.canvas.width,i.canvas.height),B.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:k,disable:j,bindFramebuffer:X,drawBuffers:et,useProgram:lt,setBlending:vt,setMaterial:R,setFlipSided:ut,setCullFace:qt,setLineWidth:kt,setPolygonOffset:Rt,setScissorTest:wt,activeTexture:Ct,bindTexture:Xt,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:q,texImage2D:Jt,texImage3D:dt,updateUBOMapping:ee,uniformBlockBinding:zt,texStorage2D:It,texStorage3D:te,texSubImage2D:st,texSubImage3D:ot,compressedTexSubImage2D:rt,compressedTexSubImage3D:Kt,scissor:St,viewport:ae,reset:ne}}function Cp(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ae,h=new WeakMap;let l;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return d?new OffscreenCanvas(C,S):Wr("canvas")}function v(C,S,q){let st=1;const ot=Xt(C);if((ot.width>q||ot.height>q)&&(st=q/Math.max(ot.width,ot.height)),st<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const rt=Math.floor(st*ot.width),Kt=Math.floor(st*ot.height);l===void 0&&(l=x(rt,Kt));const It=S?x(rt,Kt):l;return It.width=rt,It.height=Kt,It.getContext("2d").drawImage(C,0,0,rt,Kt),pe("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+rt+"x"+Kt+")."),It}else return"data"in C&&pe("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function g(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,S,q,st,ot=!1){if(C!==null){if(i[C]!==void 0)return i[C];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=S;if(S===i.RED&&(q===i.FLOAT&&(rt=i.R32F),q===i.HALF_FLOAT&&(rt=i.R16F),q===i.UNSIGNED_BYTE&&(rt=i.R8)),S===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.R8UI),q===i.UNSIGNED_SHORT&&(rt=i.R16UI),q===i.UNSIGNED_INT&&(rt=i.R32UI),q===i.BYTE&&(rt=i.R8I),q===i.SHORT&&(rt=i.R16I),q===i.INT&&(rt=i.R32I)),S===i.RG&&(q===i.FLOAT&&(rt=i.RG32F),q===i.HALF_FLOAT&&(rt=i.RG16F),q===i.UNSIGNED_BYTE&&(rt=i.RG8)),S===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.RG8UI),q===i.UNSIGNED_SHORT&&(rt=i.RG16UI),q===i.UNSIGNED_INT&&(rt=i.RG32UI),q===i.BYTE&&(rt=i.RG8I),q===i.SHORT&&(rt=i.RG16I),q===i.INT&&(rt=i.RG32I)),S===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),q===i.UNSIGNED_INT&&(rt=i.RGB32UI),q===i.BYTE&&(rt=i.RGB8I),q===i.SHORT&&(rt=i.RGB16I),q===i.INT&&(rt=i.RGB32I)),S===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),q===i.UNSIGNED_INT&&(rt=i.RGBA32UI),q===i.BYTE&&(rt=i.RGBA8I),q===i.SHORT&&(rt=i.RGBA16I),q===i.INT&&(rt=i.RGBA32I)),S===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),S===i.RGBA){const Kt=ot?Hr:we.getTransfer(st);q===i.FLOAT&&(rt=i.RGBA32F),q===i.HALF_FLOAT&&(rt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(rt=Kt===Re?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function _(C,S){let q;return C?S===null||S===ui||S===er?q=i.DEPTH24_STENCIL8:S===Cn?q=i.DEPTH32F_STENCIL8:S===tr&&(q=i.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ui||S===er?q=i.DEPTH_COMPONENT24:S===Cn?q=i.DEPTH_COMPONENT32F:S===tr&&(q=i.DEPTH_COMPONENT16),q}function w(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==sn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),D(S),S.isVideoTexture&&h.delete(S)}function U(C){const S=C.target;S.removeEventListener("dispose",U),y(S)}function D(C){const S=n.get(C);if(S.__webglInit===void 0)return;const q=C.source,st=f.get(q);if(st){const ot=st[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&b(C),Object.keys(st).length===0&&f.delete(q)}n.remove(C)}function b(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const q=C.source,st=f.get(q);delete st[S.__cacheKey],a.memory.textures--}function y(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(S.__webglFramebuffer[st]))for(let ot=0;ot<S.__webglFramebuffer[st].length;ot++)i.deleteFramebuffer(S.__webglFramebuffer[st][ot]);else i.deleteFramebuffer(S.__webglFramebuffer[st]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[st])}else{if(Array.isArray(S.__webglFramebuffer))for(let st=0;st<S.__webglFramebuffer.length;st++)i.deleteFramebuffer(S.__webglFramebuffer[st]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let st=0;st<S.__webglColorRenderbuffer.length;st++)S.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[st]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const q=C.textures;for(let st=0,ot=q.length;st<ot;st++){const rt=n.get(q[st]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(q[st])}n.remove(C)}let E=0;function N(){E=0}function F(){const C=E;return C>=s.maxTextures&&pe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),E+=1,C}function Y(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function W(C,S){const q=n.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){const st=C.image;if(st===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{L(q,C,S);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+S)}function nt(C,S){const q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){L(q,C,S);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+S)}function z(C,S){const q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){L(q,C,S);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+S)}function P(C,S){const q=n.get(C);if(C.version>0&&q.__version!==C.version){k(q,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+S)}const J={[Ha]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[ka]:i.MIRRORED_REPEAT},K={[Qe]:i.NEAREST,[zl]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},O={[kl]:i.NEVER,[Kl]:i.ALWAYS,[Wl]:i.LESS,[Ho]:i.LEQUAL,[Xl]:i.EQUAL,[Zl]:i.GEQUAL,[ql]:i.GREATER,[Yl]:i.NOTEQUAL};function tt(C,S){if(S.type===Cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===sn||S.magFilter===ea||S.magFilter===hr||S.magFilter===oi||S.minFilter===sn||S.minFilter===ea||S.minFilter===hr||S.minFilter===oi)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,J[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,J[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,J[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,K[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,O[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qe||S.minFilter!==hr&&S.minFilter!==oi||S.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function V(C,S){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const st=S.source;let ot=f.get(st);ot===void 0&&(ot={},f.set(st,ot));const rt=Y(S);if(rt!==C.__cacheKey){ot[rt]===void 0&&(ot[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ot[rt].usedTimes++;const Kt=ot[C.__cacheKey];Kt!==void 0&&(ot[C.__cacheKey].usedTimes--,Kt.usedTimes===0&&b(S)),C.__cacheKey=rt,C.__webglTexture=ot[rt].texture}return q}function B(C,S,q){return Math.floor(Math.floor(C/q)/S)}function I(C,S,q,st){const rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,q,st,S.data);else{rt.sort((dt,St)=>dt.start-St.start);let Kt=0;for(let dt=1;dt<rt.length;dt++){const St=rt[Kt],ae=rt[dt],ee=St.start+St.count,zt=B(ae.start,S.width,4),ne=B(St.start,S.width,4);ae.start<=ee+1&&zt===ne&&B(ae.start+ae.count-1,S.width,4)===zt?St.count=Math.max(St.count,ae.start+ae.count-St.start):(++Kt,rt[Kt]=ae)}rt.length=Kt+1;const It=i.getParameter(i.UNPACK_ROW_LENGTH),te=i.getParameter(i.UNPACK_SKIP_PIXELS),Jt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let dt=0,St=rt.length;dt<St;dt++){const ae=rt[dt],ee=Math.floor(ae.start/4),zt=Math.ceil(ae.count/4),ne=ee%S.width,G=Math.floor(ee/S.width),Pt=zt,Et=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,ne,G,Pt,Et,q,st,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,It),i.pixelStorei(i.UNPACK_SKIP_PIXELS,te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Jt)}}function L(C,S,q){let st=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=i.TEXTURE_3D);const ot=V(C,S),rt=S.source;e.bindTexture(st,C.__webglTexture,i.TEXTURE0+q);const Kt=n.get(rt);if(rt.version!==Kt.__version||ot===!0){e.activeTexture(i.TEXTURE0+q);const It=we.getPrimaries(we.workingColorSpace),te=S.colorSpace===Gn?null:we.getPrimaries(S.colorSpace),Jt=S.colorSpace===Gn||It===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let dt=v(S.image,!1,s.maxTextureSize);dt=Ct(S,dt);const St=r.convert(S.format,S.colorSpace),ae=r.convert(S.type);let ee=M(S.internalFormat,St,ae,S.colorSpace,S.isVideoTexture);tt(st,S);let zt;const ne=S.mipmaps,G=S.isVideoTexture!==!0,Pt=Kt.__version===void 0||ot===!0,Et=rt.dataReady,Mt=w(S,dt);if(S.isDepthTexture)ee=_(S.format===ir,S.type),Pt&&(G?e.texStorage2D(i.TEXTURE_2D,1,ee,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,ee,dt.width,dt.height,0,St,ae,null));else if(S.isDataTexture)if(ne.length>0){G&&Pt&&e.texStorage2D(i.TEXTURE_2D,Mt,ee,ne[0].width,ne[0].height);for(let gt=0,ft=ne.length;gt<ft;gt++)zt=ne[gt],G?Et&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,zt.width,zt.height,St,ae,zt.data):e.texImage2D(i.TEXTURE_2D,gt,ee,zt.width,zt.height,0,St,ae,zt.data);S.generateMipmaps=!1}else G?(Pt&&e.texStorage2D(i.TEXTURE_2D,Mt,ee,dt.width,dt.height),Et&&I(S,dt,St,ae)):e.texImage2D(i.TEXTURE_2D,0,ee,dt.width,dt.height,0,St,ae,dt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){G&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,ee,ne[0].width,ne[0].height,dt.depth);for(let gt=0,ft=ne.length;gt<ft;gt++)if(zt=ne[gt],S.format!==fn)if(St!==null)if(G){if(Et)if(S.layerUpdates.size>0){const $t=io(zt.width,zt.height,S.format,S.type);for(const se of S.layerUpdates){const be=zt.data.subarray(se*$t/zt.data.BYTES_PER_ELEMENT,(se+1)*$t/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,se,zt.width,zt.height,1,St,be)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,zt.width,zt.height,dt.depth,St,zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,ee,zt.width,zt.height,dt.depth,0,zt.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,zt.width,zt.height,dt.depth,St,ae,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,ee,zt.width,zt.height,dt.depth,0,St,ae,zt.data)}else{G&&Pt&&e.texStorage2D(i.TEXTURE_2D,Mt,ee,ne[0].width,ne[0].height);for(let gt=0,ft=ne.length;gt<ft;gt++)zt=ne[gt],S.format!==fn?St!==null?G?Et&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,zt.width,zt.height,St,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,ee,zt.width,zt.height,0,zt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Et&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,zt.width,zt.height,St,ae,zt.data):e.texImage2D(i.TEXTURE_2D,gt,ee,zt.width,zt.height,0,St,ae,zt.data)}else if(S.isDataArrayTexture)if(G){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,ee,dt.width,dt.height,dt.depth),Et)if(S.layerUpdates.size>0){const gt=io(dt.width,dt.height,S.format,S.type);for(const ft of S.layerUpdates){const $t=dt.data.subarray(ft*gt/dt.data.BYTES_PER_ELEMENT,(ft+1)*gt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,dt.width,dt.height,1,St,ae,$t)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,St,ae,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,dt.width,dt.height,dt.depth,0,St,ae,dt.data);else if(S.isData3DTexture)G?(Pt&&e.texStorage3D(i.TEXTURE_3D,Mt,ee,dt.width,dt.height,dt.depth),Et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,St,ae,dt.data)):e.texImage3D(i.TEXTURE_3D,0,ee,dt.width,dt.height,dt.depth,0,St,ae,dt.data);else if(S.isFramebufferTexture){if(Pt)if(G)e.texStorage2D(i.TEXTURE_2D,Mt,ee,dt.width,dt.height);else{let gt=dt.width,ft=dt.height;for(let $t=0;$t<Mt;$t++)e.texImage2D(i.TEXTURE_2D,$t,ee,gt,ft,0,St,ae,null),gt>>=1,ft>>=1}}else if(ne.length>0){if(G&&Pt){const gt=Xt(ne[0]);e.texStorage2D(i.TEXTURE_2D,Mt,ee,gt.width,gt.height)}for(let gt=0,ft=ne.length;gt<ft;gt++)zt=ne[gt],G?Et&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,St,ae,zt):e.texImage2D(i.TEXTURE_2D,gt,ee,St,ae,zt);S.generateMipmaps=!1}else if(G){if(Pt){const gt=Xt(dt);e.texStorage2D(i.TEXTURE_2D,Mt,ee,gt.width,gt.height)}Et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,ae,dt)}else e.texImage2D(i.TEXTURE_2D,0,ee,St,ae,dt);m(S)&&p(st),Kt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function k(C,S,q){if(S.image.length!==6)return;const st=V(C,S),ot=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);const rt=n.get(ot);if(ot.version!==rt.__version||st===!0){e.activeTexture(i.TEXTURE0+q);const Kt=we.getPrimaries(we.workingColorSpace),It=S.colorSpace===Gn?null:we.getPrimaries(S.colorSpace),te=S.colorSpace===Gn||Kt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const Jt=S.isCompressedTexture||S.image[0].isCompressedTexture,dt=S.image[0]&&S.image[0].isDataTexture,St=[];for(let ft=0;ft<6;ft++)!Jt&&!dt?St[ft]=v(S.image[ft],!0,s.maxCubemapSize):St[ft]=dt?S.image[ft].image:S.image[ft],St[ft]=Ct(S,St[ft]);const ae=St[0],ee=r.convert(S.format,S.colorSpace),zt=r.convert(S.type),ne=M(S.internalFormat,ee,zt,S.colorSpace),G=S.isVideoTexture!==!0,Pt=rt.__version===void 0||st===!0,Et=ot.dataReady;let Mt=w(S,ae);tt(i.TEXTURE_CUBE_MAP,S);let gt;if(Jt){G&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,ne,ae.width,ae.height);for(let ft=0;ft<6;ft++){gt=St[ft].mipmaps;for(let $t=0;$t<gt.length;$t++){const se=gt[$t];S.format!==fn?ee!==null?G?Et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,0,0,se.width,se.height,ee,se.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,ne,se.width,se.height,0,se.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,0,0,se.width,se.height,ee,zt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,ne,se.width,se.height,0,ee,zt,se.data)}}}else{if(gt=S.mipmaps,G&&Pt){gt.length>0&&Mt++;const ft=Xt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,ne,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(dt){G?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,St[ft].width,St[ft].height,ee,zt,St[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ne,St[ft].width,St[ft].height,0,ee,zt,St[ft].data);for(let $t=0;$t<gt.length;$t++){const be=gt[$t].image[ft].image;G?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,0,0,be.width,be.height,ee,zt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,ne,be.width,be.height,0,ee,zt,be.data)}}else{G?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,ee,zt,St[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ne,ee,zt,St[ft]);for(let $t=0;$t<gt.length;$t++){const se=gt[$t];G?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,0,0,ee,zt,se.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,ne,ee,zt,se.image[ft])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),rt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function j(C,S,q,st,ot,rt){const Kt=r.convert(q.format,q.colorSpace),It=r.convert(q.type),te=M(q.internalFormat,Kt,It,q.colorSpace),Jt=n.get(S),dt=n.get(q);if(dt.__renderTarget=S,!Jt.__hasExternalTextures){const St=Math.max(1,S.width>>rt),ae=Math.max(1,S.height>>rt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,rt,te,St,ae,S.depth,0,Kt,It,null):e.texImage2D(ot,rt,te,St,ae,0,Kt,It,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Rt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ot,dt.__webglTexture,0,kt(S)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ot,dt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(C,S,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const st=S.depthTexture,ot=st&&st.isDepthTexture?st.type:null,rt=_(S.stencilBuffer,ot),Kt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=kt(S);Rt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,rt,S.width,S.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,rt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,rt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Kt,i.RENDERBUFFER,C)}else{const st=S.textures;for(let ot=0;ot<st.length;ot++){const rt=st[ot],Kt=r.convert(rt.format,rt.colorSpace),It=r.convert(rt.type),te=M(rt.internalFormat,Kt,It,rt.colorSpace),Jt=kt(S);q&&Rt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,te,S.width,S.height):Rt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(S.depthTexture);st.__renderTarget=S,(!st.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const ot=st.__webglTexture,rt=kt(S);if(S.depthTexture.format===nr)Rt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(S.depthTexture.format===ir)Rt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function lt(C){const S=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const st=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),st){const ot=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,st.removeEventListener("dispose",ot)};st.addEventListener("dispose",ot),S.__depthDisposeCallback=ot}S.__boundDepthTexture=st}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const st=C.texture.mipmaps;st&&st.length>0?et(S.__webglFramebuffer[0],C):et(S.__webglFramebuffer,C)}else if(q){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]===void 0)S.__webglDepthbuffer[st]=i.createRenderbuffer(),X(S.__webglDepthbuffer[st],C,!1);else{const ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,rt)}}else{const st=C.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),X(S.__webglDepthbuffer,C,!1);else{const ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(C,S,q){const st=n.get(C);S!==void 0&&j(st.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&lt(C)}function pt(C){const S=C.texture,q=n.get(C),st=n.get(S);C.addEventListener("dispose",U);const ot=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Kt=ot.length>1;if(Kt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=S.version,a.memory.textures++),rt){q.__webglFramebuffer=[];for(let It=0;It<6;It++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[It]=[];for(let te=0;te<S.mipmaps.length;te++)q.__webglFramebuffer[It][te]=i.createFramebuffer()}else q.__webglFramebuffer[It]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let It=0;It<S.mipmaps.length;It++)q.__webglFramebuffer[It]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Kt)for(let It=0,te=ot.length;It<te;It++){const Jt=n.get(ot[It]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Rt(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let It=0;It<ot.length;It++){const te=ot[It];q.__webglColorRenderbuffer[It]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[It]);const Jt=r.convert(te.format,te.colorSpace),dt=r.convert(te.type),St=M(te.internalFormat,Jt,dt,te.colorSpace,C.isXRRenderTarget===!0),ae=kt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,St,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,q.__webglColorRenderbuffer[It])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),X(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),tt(i.TEXTURE_CUBE_MAP,S);for(let It=0;It<6;It++)if(S.mipmaps&&S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)j(q.__webglFramebuffer[It][te],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+It,te);else j(q.__webglFramebuffer[It],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Kt){for(let It=0,te=ot.length;It<te;It++){const Jt=ot[It],dt=n.get(Jt);let St=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(St=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,dt.__webglTexture),tt(St,Jt),j(q.__webglFramebuffer,C,Jt,i.COLOR_ATTACHMENT0+It,St,0),m(Jt)&&p(St)}e.unbindTexture()}else{let It=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(It=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(It,st.__webglTexture),tt(It,S),S.mipmaps&&S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)j(q.__webglFramebuffer[te],C,S,i.COLOR_ATTACHMENT0,It,te);else j(q.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,It,0);m(S)&&p(It),e.unbindTexture()}C.depthBuffer&&lt(C)}function vt(C){const S=C.textures;for(let q=0,st=S.length;q<st;q++){const ot=S[q];if(m(ot)){const rt=g(C),Kt=n.get(ot).__webglTexture;e.bindTexture(rt,Kt),p(rt),e.unbindTexture()}}}const R=[],ut=[];function qt(C){if(C.samples>0){if(Rt(C)===!1){const S=C.textures,q=C.width,st=C.height;let ot=i.COLOR_BUFFER_BIT;const rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Kt=n.get(C),It=S.length>1;if(It)for(let Jt=0;Jt<S.length;Jt++)e.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Jt=0;Jt<S.length;Jt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),It){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Kt.__webglColorRenderbuffer[Jt]);const dt=n.get(S[Jt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,q,st,0,0,q,st,ot,i.NEAREST),c===!0&&(R.length=0,ut.length=0,R.push(i.COLOR_ATTACHMENT0+Jt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(R.push(rt),ut.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),It)for(let Jt=0;Jt<S.length;Jt++){e.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.RENDERBUFFER,Kt.__webglColorRenderbuffer[Jt]);const dt=n.get(S[Jt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function kt(C){return Math.min(s.maxSamples,C.samples)}function Rt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function wt(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Ct(C,S){const q=C.colorSpace,st=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==Bi&&q!==Gn&&(we.getTransfer(q)===Re?(st!==fn||ot!==In)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",q)),S}function Xt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=nt,this.setTexture3D=z,this.setTextureCube=P,this.rebindTextures=Ht,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Rt}function Pp(i,t){function e(n,s=Gn){let r;const a=we.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Ss)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===No)return i.BYTE;if(n===Uo)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===Ms)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===Oo)return i.ALPHA;if(n===zo)return i.RGB;if(n===fn)return i.RGBA;if(n===nr)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===Es)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===Ts)return i.RG_INTEGER;if(n===As)return i.RGBA_INTEGER;if(n===Ur||n===Fr||n===Br||n===Or)if(a===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ka)return a===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Ja||n===Qa||n===ts||n===es||n===ns||n===is||n===rs||n===as||n===ss||n===os||n===ls||n===cs||n===us)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ts)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===es)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ns)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===is)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rs)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===as)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ss)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===os)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ls)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cs)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===us)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hs||n===fs||n===ds)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hs)return a===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fs)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ds)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ps||n===ms||n===xs||n===vs)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ps)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ms)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vs)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Lp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ip=`
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

}`;class Dp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new tl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:Lp,fragmentShader:Ip,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new $r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Np extends Gi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,l=null,f=null,d=null,x=null;const v=typeof XRWebGLBinding<"u",m=new Dp,p={},g=e.getContextAttributes();let M=null,_=null;const w=[],A=[],U=new Ae;let D=null;const b=new an;b.viewport=new Ie;const y=new an;y.viewport=new Ie;const E=[b,y],N=new jc;let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let k=w[L];return k===void 0&&(k=new Sa,w[L]=k),k.getTargetRaySpace()},this.getControllerGrip=function(L){let k=w[L];return k===void 0&&(k=new Sa,w[L]=k),k.getGripSpace()},this.getHand=function(L){let k=w[L];return k===void 0&&(k=new Sa,w[L]=k),k.getHandSpace()};function W(L){const k=A.indexOf(L.inputSource);if(k===-1)return;const j=w[k];j!==void 0&&(j.update(L.inputSource,L.frame,u||a),j.dispatchEvent({type:L.type,data:L.inputSource}))}function nt(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",z);for(let L=0;L<w.length;L++){const k=A[L];k!==null&&(A[L]=null,w[L].disconnect(k))}F=null,Y=null,m.reset();for(const L in p)delete p[L];t.setRenderTarget(M),d=null,f=null,l=null,s=null,_=null,I.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(L){u=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return l===null&&v&&(l=new XRWebGLBinding(s,e)),l},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(U),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,X=null,et=null;g.depth&&(et=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=g.stencil?ir:nr,X=g.stencil?er:ui);const lt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};l=this.getBinding(),f=l.createProjectionLayer(lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new hi(f.textureWidth,f.textureHeight,{format:fn,type:In,depthTexture:new Qo(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const j={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new hi(d.framebufferWidth,d.framebufferHeight,{format:fn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),I.setContext(s),I.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(L){for(let k=0;k<L.removed.length;k++){const j=L.removed[k],X=A.indexOf(j);X>=0&&(A[X]=null,w[X].disconnect(j))}for(let k=0;k<L.added.length;k++){const j=L.added[k];let X=A.indexOf(j);if(X===-1){for(let lt=0;lt<w.length;lt++)if(lt>=A.length){A.push(j),X=lt;break}else if(A[lt]===null){A[lt]=j,X=lt;break}if(X===-1)break}const et=w[X];et&&et.connect(j)}}const P=new ct,J=new ct;function K(L,k,j){P.setFromMatrixPosition(k.matrixWorld),J.setFromMatrixPosition(j.matrixWorld);const X=P.distanceTo(J),et=k.projectionMatrix.elements,lt=j.projectionMatrix.elements,Ht=et[14]/(et[10]-1),pt=et[14]/(et[10]+1),vt=(et[9]+1)/et[5],R=(et[9]-1)/et[5],ut=(et[8]-1)/et[0],qt=(lt[8]+1)/lt[0],kt=Ht*ut,Rt=Ht*qt,wt=X/(-ut+qt),Ct=wt*-ut;if(k.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Ct),L.translateZ(wt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),et[10]===-1)L.projectionMatrix.copy(k.projectionMatrix),L.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const Xt=Ht+wt,C=pt+wt,S=kt-Ct,q=Rt+(X-Ct),st=vt*pt/C*Xt,ot=R*pt/C*Xt;L.projectionMatrix.makePerspective(S,q,st,ot,Xt,C),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function O(L,k){k===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(k.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let k=L.near,j=L.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(j=m.depthFar)),N.near=y.near=b.near=k,N.far=y.far=b.far=j,(F!==N.near||Y!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,Y=N.far),N.layers.mask=L.layers.mask|6,b.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const X=L.parent,et=N.cameras;O(N,X);for(let lt=0;lt<et.length;lt++)O(et[lt],X);et.length===2?K(N,b,y):N.projectionMatrix.copy(b.projectionMatrix),tt(L,N,X)};function tt(L,k,j){j===null?L.matrix.copy(k.matrixWorld):(L.matrix.copy(j.matrixWorld),L.matrix.invert(),L.matrix.multiply(k.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(k.projectionMatrix),L.projectionMatrixInverse.copy(k.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=ar*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(L){c=L,f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(L){return p[L]};let V=null;function B(L,k){if(h=k.getViewerPose(u||a),x=k,h!==null){const j=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let X=!1;j.length!==N.cameras.length&&(N.cameras.length=0,X=!0);for(let pt=0;pt<j.length;pt++){const vt=j[pt];let R=null;if(d!==null)R=d.getViewport(vt);else{const qt=l.getViewSubImage(f,vt);R=qt.viewport,pt===0&&(t.setRenderTargetTextures(_,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(_))}let ut=E[pt];ut===void 0&&(ut=new an,ut.layers.enable(pt),ut.viewport=new Ie,E[pt]=ut),ut.matrix.fromArray(vt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(vt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(R.x,R.y,R.width,R.height),pt===0&&(N.matrix.copy(ut.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),X===!0&&N.cameras.push(ut)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){l=n.getBinding();const pt=l.getDepthInformation(j[0]);pt&&pt.isValid&&pt.texture&&m.init(pt,s.renderState)}if(et&&et.includes("camera-access")&&v){t.state.unbindTexture(),l=n.getBinding();for(let pt=0;pt<j.length;pt++){const vt=j[pt].camera;if(vt){let R=p[vt];R||(R=new tl,p[vt]=R);const ut=l.getCameraImage(vt);R.sourceTexture=ut}}}}for(let j=0;j<w.length;j++){const X=A[j],et=w[j];X!==null&&et!==void 0&&et.update(X,k,u||a)}V&&V(L,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),x=null}const I=new el;I.setAnimationLoop(B),this.setAnimationLoop=function(L){V=L},this.dispose=function(){}}}const ti=new _n,Up=new Ue;function Fp(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ko(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,g,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),l(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,g,M):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const g=t.get(p),M=g.envMap,_=g.envMapRotation;M&&(m.envMap.value=M,ti.copy(_),ti.x*=-1,ti.y*=-1,ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Up.makeRotationFromEuler(ti)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,g,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*g,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,g){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const g=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(g,M){const _=M.program;n.uniformBlockBinding(g,_)}function u(g,M){let _=s[g.id];_===void 0&&(x(g),_=h(g),s[g.id]=_,g.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(g,w);const A=t.render.frame;r[g.id]!==A&&(f(g),r[g.id]=A)}function h(g){const M=l();g.__bindingPointIndex=M;const _=i.createBuffer(),w=g.__size,A=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function l(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const M=s[g.id],_=g.uniforms,w=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,U=_.length;A<U;A++){const D=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,y=D.length;b<y;b++){const E=D[b];if(d(E,A,b,w)===!0){const N=E.__offset,F=Array.isArray(E.value)?E.value:[E.value];let Y=0;for(let W=0;W<F.length;W++){const nt=F[W],z=v(nt);typeof nt=="number"||typeof nt=="boolean"?(E.__data[0]=nt,i.bufferSubData(i.UNIFORM_BUFFER,N+Y,E.__data)):nt.isMatrix3?(E.__data[0]=nt.elements[0],E.__data[1]=nt.elements[1],E.__data[2]=nt.elements[2],E.__data[3]=0,E.__data[4]=nt.elements[3],E.__data[5]=nt.elements[4],E.__data[6]=nt.elements[5],E.__data[7]=0,E.__data[8]=nt.elements[6],E.__data[9]=nt.elements[7],E.__data[10]=nt.elements[8],E.__data[11]=0):(nt.toArray(E.__data,Y),Y+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(g,M,_,w){const A=g.value,U=M+"_"+_;if(w[U]===void 0)return typeof A=="number"||typeof A=="boolean"?w[U]=A:w[U]=A.clone(),!0;{const D=w[U];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return w[U]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function x(g){const M=g.uniforms;let _=0;const w=16;for(let U=0,D=M.length;U<D;U++){const b=Array.isArray(M[U])?M[U]:[M[U]];for(let y=0,E=b.length;y<E;y++){const N=b[y],F=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,W=F.length;Y<W;Y++){const nt=F[Y],z=v(nt),P=_%w,J=P%z.boundary,K=P+J;_+=J,K!==0&&w-K<z.storage&&(_+=w-K),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=z.storage}}}const A=_%w;return A>0&&(_+=w-A),g.__size=_,g.__cache={},this}function v(g){const M={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(M.boundary=4,M.storage=4):g.isVector2?(M.boundary=8,M.storage=8):g.isVector3||g.isColor?(M.boundary=16,M.storage=12):g.isVector4?(M.boundary=16,M.storage=16):g.isMatrix3?(M.boundary=48,M.storage=48):g.isMatrix4?(M.boundary=64,M.storage=64):g.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pe("WebGLRenderer: Unsupported uniform value type.",g),M}function m(g){const M=g.target;M.removeEventListener("dispose",m);const _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const g in s)i.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:c,update:u,dispose:p}}const Op=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Tn=null;function zp(){return Tn===null&&(Tn=new Gc(Op,32,32,ws,Vi),Tn.minFilter=sn,Tn.magFilter=sn,Tn.wrapS=Rn,Tn.wrapT=Rn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class Vp{constructor(t={}){const{canvas:e=$l(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const x=new Set([As,Ts,Es]),v=new Set([In,ui,tr,er,Ss,bs]),m=new Uint32Array(4),p=new Int32Array(4);let g=null,M=null;const _=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let U=!1;this._outputColorSpace=rn;let D=0,b=0,y=null,E=-1,N=null;const F=new Ie,Y=new Ie;let W=null;const nt=new Te(0);let z=0,P=e.width,J=e.height,K=1,O=null,tt=null;const V=new Ie(0,0,P,J),B=new Ie(0,0,P,J);let I=!1;const L=new Jo;let k=!1,j=!1;const X=new Ue,et=new ct,lt=new Ie,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function vt(){return y===null?K:1}let R=n;function ut(T,H){return e.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_s}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",$t,!1),R===null){const H="webgl2";if(R=ut(H,T),R===null)throw ut(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let qt,kt,Rt,wt,Ct,Xt,C,S,q,st,ot,rt,Kt,It,te,Jt,dt,St,ae,ee,zt,ne,G,Pt;function Et(){qt=new Zf(R),qt.init(),ne=new Pp(R,qt),kt=new zf(R,qt,t,ne),Rt=new Rp(R,qt),kt.reversedDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),wt=new jf(R),Ct=new mp,Xt=new Cp(R,qt,Rt,Ct,kt,ne,wt),C=new Gf(A),S=new Yf(A),q=new tu(R),G=new Bf(R,q),st=new Kf(R,q,wt,G),ot=new Qf(R,st,q,wt),ae=new Jf(R,kt,Xt),Jt=new Vf(Ct),rt=new pp(A,C,S,qt,kt,G,Jt),Kt=new Fp(A,Ct),It=new vp,te=new bp(qt),St=new Ff(A,C,S,Rt,ot,d,c),dt=new Tp(A,ot,kt),Pt=new Bp(R,wt,kt,Rt),ee=new Of(R,qt,wt),zt=new $f(R,qt,wt),wt.programs=rt.programs,A.capabilities=kt,A.extensions=qt,A.properties=Ct,A.renderLists=It,A.shadowMap=dt,A.state=Rt,A.info=wt}Et();const Mt=new Np(A,R);this.xr=Mt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=qt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=qt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(P,J,!1))},this.getSize=function(T){return T.set(P,J)},this.setSize=function(T,H,Q=!0){if(Mt.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}P=T,J=H,e.width=Math.floor(T*K),e.height=Math.floor(H*K),Q===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(P*K,J*K).floor()},this.setDrawingBufferSize=function(T,H,Q){P=T,J=H,K=Q,e.width=Math.floor(T*Q),e.height=Math.floor(H*Q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(V)},this.setViewport=function(T,H,Q,Z){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,H,Q,Z),Rt.viewport(F.copy(V).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,H,Q,Z){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,H,Q,Z),Rt.scissor(Y.copy(B).multiplyScalar(K).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(T){Rt.setScissorTest(I=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){tt=T},this.getClearColor=function(T){return T.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,Q=!0){let Z=0;if(T){let $=!1;if(y!==null){const yt=y.texture.format;$=x.has(yt)}if($){const yt=y.texture.type,Lt=v.has(yt),Zt=St.getClearColor(),Ot=St.getClearAlpha(),Gt=Zt.r,re=Zt.g,Vt=Zt.b;Lt?(m[0]=Gt,m[1]=re,m[2]=Vt,m[3]=Ot,R.clearBufferuiv(R.COLOR,0,m)):(p[0]=Gt,p[1]=re,p[2]=Vt,p[3]=Ot,R.clearBufferiv(R.COLOR,0,p))}else Z|=R.COLOR_BUFFER_BIT}H&&(Z|=R.DEPTH_BUFFER_BIT),Q&&(Z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),St.dispose(),It.dispose(),te.dispose(),Ct.dispose(),C.dispose(),S.dispose(),ot.dispose(),G.dispose(),Pt.dispose(),rt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",xt),Mt.removeEventListener("sessionend",oe),Nt.stop()};function gt(T){T.preventDefault(),zs("WebGLRenderer: Context Lost."),U=!0}function ft(){zs("WebGLRenderer: Context Restored."),U=!1;const T=wt.autoReset,H=dt.enabled,Q=dt.autoUpdate,Z=dt.needsUpdate,$=dt.type;Et(),wt.autoReset=T,dt.enabled=H,dt.autoUpdate=Q,dt.needsUpdate=Z,dt.type=$}function $t(T){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const H=T.target;H.removeEventListener("dispose",se),be(H)}function be(T){le(T),Ct.remove(T)}function le(T){const H=Ct.get(T).programs;H!==void 0&&(H.forEach(function(Q){rt.releaseProgram(Q)}),T.isShaderMaterial&&rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Q,Z,$,yt){H===null&&(H=Ht);const Lt=$.isMesh&&$.matrixWorld.determinant()<0,Zt=Ut(T,H,Q,Z,$);Rt.setMaterial(Z,Lt);let Ot=Q.index,Gt=1;if(Z.wireframe===!0){if(Ot=st.getWireframeAttribute(Q),Ot===void 0)return;Gt=2}const re=Q.drawRange,Vt=Q.attributes.position;let ue=re.start*Gt,de=(re.start+re.count)*Gt;yt!==null&&(ue=Math.max(ue,yt.start*Gt),de=Math.min(de,(yt.start+yt.count)*Gt)),Ot!==null?(ue=Math.max(ue,0),de=Math.min(de,Ot.count)):Vt!=null&&(ue=Math.max(ue,0),de=Math.min(de,Vt.count));const ye=de-ue;if(ye<0||ye===1/0)return;G.setup($,Z,Zt,Q,Ot);let ve,ge=ee;if(Ot!==null&&(ve=q.get(Ot),ge=zt,ge.setIndex(ve)),$.isMesh)Z.wireframe===!0?(Rt.setLineWidth(Z.wireframeLinewidth*vt()),ge.setMode(R.LINES)):ge.setMode(R.TRIANGLES);else if($.isLine){let Qt=Z.linewidth;Qt===void 0&&(Qt=1),Rt.setLineWidth(Qt*vt()),$.isLineSegments?ge.setMode(R.LINES):$.isLineLoop?ge.setMode(R.LINE_LOOP):ge.setMode(R.LINE_STRIP)}else $.isPoints?ge.setMode(R.POINTS):$.isSprite&&ge.setMode(R.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)rr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))ge.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qt=$._multiDrawStarts,jt=$._multiDrawCounts,he=$._multiDrawCount,Ee=Ot?q.get(Ot).bytesPerElement:1,Ye=Ct.get(Z).currentProgram.getUniforms();for(let Pe=0;Pe<he;Pe++)Ye.setValue(R,"_gl_DrawID",Pe),ge.render(Qt[Pe]/Ee,jt[Pe])}else if($.isInstancedMesh)ge.renderInstances(ue,ye,$.count);else if(Q.isInstancedBufferGeometry){const Qt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,jt=Math.min(Q.instanceCount,Qt);ge.renderInstances(ue,ye,jt)}else ge.render(ue,ye)};function at(T,H,Q){T.transparent===!0&&T.side===pn&&T.forceSinglePass===!1?(T.side=Ke,T.needsUpdate=!0,Yt(T,H,Q),T.side=qn,T.needsUpdate=!0,Yt(T,H,Q),T.side=pn):Yt(T,H,Q)}this.compile=function(T,H,Q=null){Q===null&&(Q=T),M=te.get(Q),M.init(H),w.push(M),Q.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),T!==Q&&T.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights();const Z=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const yt=$.material;if(yt)if(Array.isArray(yt))for(let Lt=0;Lt<yt.length;Lt++){const Zt=yt[Lt];at(Zt,Q,$),Z.add(Zt)}else at(yt,Q,$),Z.add(yt)}),M=w.pop(),Z},this.compileAsync=function(T,H,Q=null){const Z=this.compile(T,H,Q);return new Promise($=>{function yt(){if(Z.forEach(function(Lt){Ct.get(Lt).currentProgram.isReady()&&Z.delete(Lt)}),Z.size===0){$(T);return}setTimeout(yt,10)}qt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ht=null;function mt(T){ht&&ht(T)}function xt(){Nt.stop()}function oe(){Nt.start()}const Nt=new el;Nt.setAnimationLoop(mt),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(T){ht=T,Mt.setAnimationLoop(T),T===null?Nt.stop():Nt.start()},Mt.addEventListener("sessionstart",xt),Mt.addEventListener("sessionend",oe),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(H),H=Mt.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,H,y),M=te.get(T,w.length),M.init(H),w.push(M),X.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),L.setFromProjectionMatrix(X,mn,H.reversedDepth),j=this.localClippingEnabled,k=Jt.init(this.clippingPlanes,j),g=It.get(T,_.length),g.init(),_.push(g),Mt.enabled===!0&&Mt.isPresenting===!0){const yt=A.xr.getDepthSensingMesh();yt!==null&&Tt(yt,H,-1/0,A.sortObjects)}Tt(T,H,0,A.sortObjects),g.finish(),A.sortObjects===!0&&g.sort(O,tt),pt=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,pt&&St.addToRenderList(g,T),this.info.render.frame++,k===!0&&Jt.beginShadows();const Q=M.state.shadowsArray;dt.render(Q,T,H),k===!0&&Jt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,$=g.transmissive;if(M.setupLights(),H.isArrayCamera){const yt=H.cameras;if($.length>0)for(let Lt=0,Zt=yt.length;Lt<Zt;Lt++){const Ot=yt[Lt];it(Z,$,T,Ot)}pt&&St.render(T);for(let Lt=0,Zt=yt.length;Lt<Zt;Lt++){const Ot=yt[Lt];Ft(g,T,Ot,Ot.viewport)}}else $.length>0&&it(Z,$,T,H),pt&&St.render(T),Ft(g,T,H);y!==null&&b===0&&(Xt.updateMultisampleRenderTarget(y),Xt.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(A,T,H),G.resetDefaultState(),E=-1,N=null,w.pop(),w.length>0?(M=w[w.length-1],k===!0&&Jt.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Tt(T,H,Q,Z){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||L.intersectsSprite(T)){Z&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(X);const Lt=ot.update(T),Zt=T.material;Zt.visible&&g.push(T,Lt,Zt,Q,lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||L.intersectsObject(T))){const Lt=ot.update(T),Zt=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),lt.copy(Lt.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(X)),Array.isArray(Zt)){const Ot=Lt.groups;for(let Gt=0,re=Ot.length;Gt<re;Gt++){const Vt=Ot[Gt],ue=Zt[Vt.materialIndex];ue&&ue.visible&&g.push(T,Lt,ue,Q,lt.z,Vt)}}else Zt.visible&&g.push(T,Lt,Zt,Q,lt.z,null)}}const yt=T.children;for(let Lt=0,Zt=yt.length;Lt<Zt;Lt++)Tt(yt[Lt],H,Q,Z)}function Ft(T,H,Q,Z){const{opaque:$,transmissive:yt,transparent:Lt}=T;M.setupLightsView(Q),k===!0&&Jt.setGlobalState(A.clippingPlanes,Q),Z&&Rt.viewport(F.copy(Z)),$.length>0&&At($,H,Q),yt.length>0&&At(yt,H,Q),Lt.length>0&&At(Lt,H,Q),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function it(T,H,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[Z.id]===void 0&&(M.state.transmissionRenderTarget[Z.id]=new hi(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Vi:In,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const yt=M.state.transmissionRenderTarget[Z.id],Lt=Z.viewport||F;yt.setSize(Lt.z*A.transmissionResolutionScale,Lt.w*A.transmissionResolutionScale);const Zt=A.getRenderTarget(),Ot=A.getActiveCubeFace(),Gt=A.getActiveMipmapLevel();A.setRenderTarget(yt),A.getClearColor(nt),z=A.getClearAlpha(),z<1&&A.setClearColor(16777215,.5),A.clear(),pt&&St.render(Q);const re=A.toneMapping;A.toneMapping=kn;const Vt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),M.setupLightsView(Z),k===!0&&Jt.setGlobalState(A.clippingPlanes,Z),At(T,Q,Z),Xt.updateMultisampleRenderTarget(yt),Xt.updateRenderTargetMipmap(yt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let de=0,ye=H.length;de<ye;de++){const ve=H[de],{object:ge,geometry:Qt,material:jt,group:he}=ve;if(jt.side===pn&&ge.layers.test(Z.layers)){const Ee=jt.side;jt.side=Ke,jt.needsUpdate=!0,Bt(ge,Q,Z,Qt,jt,he),jt.side=Ee,jt.needsUpdate=!0,ue=!0}}ue===!0&&(Xt.updateMultisampleRenderTarget(yt),Xt.updateRenderTargetMipmap(yt))}A.setRenderTarget(Zt,Ot,Gt),A.setClearColor(nt,z),Vt!==void 0&&(Z.viewport=Vt),A.toneMapping=re}function At(T,H,Q){const Z=H.isScene===!0?H.overrideMaterial:null;for(let $=0,yt=T.length;$<yt;$++){const Lt=T[$],{object:Zt,geometry:Ot,group:Gt}=Lt;let re=Lt.material;re.allowOverride===!0&&Z!==null&&(re=Z),Zt.layers.test(Q.layers)&&Bt(Zt,H,Q,Ot,re,Gt)}}function Bt(T,H,Q,Z,$,yt){T.onBeforeRender(A,H,Q,Z,$,yt),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(A,H,Q,Z,T,yt),$.transparent===!0&&$.side===pn&&$.forceSinglePass===!1?($.side=Ke,$.needsUpdate=!0,A.renderBufferDirect(Q,H,Z,$,T,yt),$.side=qn,$.needsUpdate=!0,A.renderBufferDirect(Q,H,Z,$,T,yt),$.side=pn):A.renderBufferDirect(Q,H,Z,$,T,yt),T.onAfterRender(A,H,Q,Z,$,yt)}function Yt(T,H,Q){H.isScene!==!0&&(H=Ht);const Z=Ct.get(T),$=M.state.lights,yt=M.state.shadowsArray,Lt=$.state.version,Zt=rt.getParameters(T,$.state,yt,H,Q),Ot=rt.getProgramCacheKey(Zt);let Gt=Z.programs;Z.environment=T.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(T.isMeshStandardMaterial?S:C).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",se),Gt=new Map,Z.programs=Gt);let re=Gt.get(Ot);if(re!==void 0){if(Z.currentProgram===re&&Z.lightsStateVersion===Lt)return bt(T,Zt),re}else Zt.uniforms=rt.getUniforms(T),T.onBeforeCompile(Zt,A),re=rt.acquireProgram(Zt,Ot),Gt.set(Ot,re),Z.uniforms=Zt.uniforms;const Vt=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Vt.clippingPlanes=Jt.uniform),bt(T,Zt),Z.needsLights=ce(T),Z.lightsStateVersion=Lt,Z.needsLights&&(Vt.ambientLightColor.value=$.state.ambient,Vt.lightProbe.value=$.state.probe,Vt.directionalLights.value=$.state.directional,Vt.directionalLightShadows.value=$.state.directionalShadow,Vt.spotLights.value=$.state.spot,Vt.spotLightShadows.value=$.state.spotShadow,Vt.rectAreaLights.value=$.state.rectArea,Vt.ltc_1.value=$.state.rectAreaLTC1,Vt.ltc_2.value=$.state.rectAreaLTC2,Vt.pointLights.value=$.state.point,Vt.pointLightShadows.value=$.state.pointShadow,Vt.hemisphereLights.value=$.state.hemi,Vt.directionalShadowMap.value=$.state.directionalShadowMap,Vt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Vt.spotShadowMap.value=$.state.spotShadowMap,Vt.spotLightMatrix.value=$.state.spotLightMatrix,Vt.spotLightMap.value=$.state.spotLightMap,Vt.pointShadowMap.value=$.state.pointShadowMap,Vt.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.currentProgram=re,Z.uniformsList=null,re}function Dt(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=zr.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function bt(T,H){const Q=Ct.get(T);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function Ut(T,H,Q,Z,$){H.isScene!==!0&&(H=Ht),Xt.resetTextureUnits();const yt=H.fog,Lt=Z.isMeshStandardMaterial?H.environment:null,Zt=y===null?A.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Bi,Ot=(Z.isMeshStandardMaterial?S:C).get(Z.envMap||Lt),Gt=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,re=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Vt=!!Q.morphAttributes.position,ue=!!Q.morphAttributes.normal,de=!!Q.morphAttributes.color;let ye=kn;Z.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(ye=A.toneMapping);const ve=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ge=ve!==void 0?ve.length:0,Qt=Ct.get(Z),jt=M.state.lights;if(k===!0&&(j===!0||T!==N)){const ke=T===N&&Z.id===E;Jt.setState(Z,T,ke)}let he=!1;Z.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==jt.state.version||Qt.outputColorSpace!==Zt||$.isBatchedMesh&&Qt.batching===!1||!$.isBatchedMesh&&Qt.batching===!0||$.isBatchedMesh&&Qt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qt.instancing===!1||!$.isInstancedMesh&&Qt.instancing===!0||$.isSkinnedMesh&&Qt.skinning===!1||!$.isSkinnedMesh&&Qt.skinning===!0||$.isInstancedMesh&&Qt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qt.instancingMorph===!1&&$.morphTexture!==null||Qt.envMap!==Ot||Z.fog===!0&&Qt.fog!==yt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Jt.numPlanes||Qt.numIntersection!==Jt.numIntersection)||Qt.vertexAlphas!==Gt||Qt.vertexTangents!==re||Qt.morphTargets!==Vt||Qt.morphNormals!==ue||Qt.morphColors!==de||Qt.toneMapping!==ye||Qt.morphTargetsCount!==ge)&&(he=!0):(he=!0,Qt.__version=Z.version);let Ee=Qt.currentProgram;he===!0&&(Ee=Yt(Z,H,$));let Ye=!1,Pe=!1,Yn=!1;const Ce=Ee.getUniforms(),Me=Qt.uniforms;if(Rt.useProgram(Ee.program)&&(Ye=!0,Pe=!0,Yn=!0),Z.id!==E&&(E=Z.id,Pe=!0),Ye||N!==T){Rt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ce.setValue(R,"projectionMatrix",T.projectionMatrix),Ce.setValue(R,"viewMatrix",T.matrixWorldInverse);const Ze=Ce.map.cameraPosition;Ze!==void 0&&Ze.setValue(R,et.setFromMatrixPosition(T.matrixWorld)),kt.logarithmicDepthBuffer&&Ce.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ce.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),N!==T&&(N=T,Pe=!0,Yn=!0)}if($.isSkinnedMesh){Ce.setOptional(R,$,"bindMatrix"),Ce.setOptional(R,$,"bindMatrixInverse");const ke=$.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Ce.setValue(R,"boneTexture",ke.boneTexture,Xt))}$.isBatchedMesh&&(Ce.setOptional(R,$,"batchingTexture"),Ce.setValue(R,"batchingTexture",$._matricesTexture,Xt),Ce.setOptional(R,$,"batchingIdTexture"),Ce.setValue(R,"batchingIdTexture",$._indirectTexture,Xt),Ce.setOptional(R,$,"batchingColorTexture"),$._colorsTexture!==null&&Ce.setValue(R,"batchingColorTexture",$._colorsTexture,Xt));const en=Q.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&ae.update($,Q,Ee),(Pe||Qt.receiveShadow!==$.receiveShadow)&&(Qt.receiveShadow=$.receiveShadow,Ce.setValue(R,"receiveShadow",$.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Me.envMap.value=Ot,Me.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(Me.envMapIntensity.value=H.environmentIntensity),Me.dfgLUT!==void 0&&(Me.dfgLUT.value=zp()),Pe&&(Ce.setValue(R,"toneMappingExposure",A.toneMappingExposure),Qt.needsLights&&ie(Me,Yn),yt&&Z.fog===!0&&Kt.refreshFogUniforms(Me,yt),Kt.refreshMaterialUniforms(Me,Z,K,J,M.state.transmissionRenderTarget[T.id]),zr.upload(R,Dt(Qt),Me,Xt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(zr.upload(R,Dt(Qt),Me,Xt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ce.setValue(R,"center",$.center),Ce.setValue(R,"modelViewMatrix",$.modelViewMatrix),Ce.setValue(R,"normalMatrix",$.normalMatrix),Ce.setValue(R,"modelMatrix",$.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const ke=Z.uniformsGroups;for(let Ze=0,ta=ke.length;Ze<ta;Ze++){const Zn=ke[Ze];Pt.update(Zn,Ee),Pt.bind(Zn,Ee)}}return Ee}function ie(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function ce(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,H,Q){const Z=Ct.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ct.get(T.texture).__webglTexture=H,Ct.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const Q=Ct.get(T);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0};const _t=R.createFramebuffer();this.setRenderTarget=function(T,H=0,Q=0){y=T,D=H,b=Q;let Z=!0,$=null,yt=!1,Lt=!1;if(T){const Ot=Ct.get(T);if(Ot.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(R.FRAMEBUFFER,null),Z=!1;else if(Ot.__webglFramebuffer===void 0)Xt.setupRenderTarget(T);else if(Ot.__hasExternalTextures)Xt.rebindTextures(T,Ct.get(T.texture).__webglTexture,Ct.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Vt=T.depthTexture;if(Ot.__boundDepthTexture!==Vt){if(Vt!==null&&Ct.has(Vt)&&(T.width!==Vt.image.width||T.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(T)}}const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Lt=!0);const re=Ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(re[H])?$=re[H][Q]:$=re[H],yt=!0):T.samples>0&&Xt.useMultisampledRTT(T)===!1?$=Ct.get(T).__webglMultisampledFramebuffer:Array.isArray(re)?$=re[Q]:$=re,F.copy(T.viewport),Y.copy(T.scissor),W=T.scissorTest}else F.copy(V).multiplyScalar(K).floor(),Y.copy(B).multiplyScalar(K).floor(),W=I;if(Q!==0&&($=_t),Rt.bindFramebuffer(R.FRAMEBUFFER,$)&&Z&&Rt.drawBuffers(T,$),Rt.viewport(F),Rt.scissor(Y),Rt.setScissorTest(W),yt){const Ot=Ct.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ot.__webglTexture,Q)}else if(Lt){const Ot=H;for(let Gt=0;Gt<T.textures.length;Gt++){const re=Ct.get(T.textures[Gt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Gt,re.__webglTexture,Q,Ot)}}else if(T!==null&&Q!==0){const Ot=Ct.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ot.__webglTexture,Q)}E=-1},this.readRenderTargetPixels=function(T,H,Q,Z,$,yt,Lt,Zt=0){if(!(T&&T.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){Rt.bindFramebuffer(R.FRAMEBUFFER,Ot);try{const Gt=T.textures[Zt],re=Gt.format,Vt=Gt.type;if(!kt.textureFormatReadable(re)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Vt)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Z&&Q>=0&&Q<=T.height-$&&(T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Zt),R.readPixels(H,Q,Z,$,ne.convert(re),ne.convert(Vt),yt))}finally{const Gt=y!==null?Ct.get(y).__webglFramebuffer:null;Rt.bindFramebuffer(R.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(T,H,Q,Z,$,yt,Lt,Zt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(H>=0&&H<=T.width-Z&&Q>=0&&Q<=T.height-$){Rt.bindFramebuffer(R.FRAMEBUFFER,Ot);const Gt=T.textures[Zt],re=Gt.format,Vt=Gt.type;if(!kt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ue),R.bufferData(R.PIXEL_PACK_BUFFER,yt.byteLength,R.STREAM_READ),T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Zt),R.readPixels(H,Q,Z,$,ne.convert(re),ne.convert(Vt),0);const de=y!==null?Ct.get(y).__webglFramebuffer:null;Rt.bindFramebuffer(R.FRAMEBUFFER,de);const ye=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await jl(R,ye,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ue),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,yt),R.deleteBuffer(ue),R.deleteSync(ye),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,Q=0){const Z=Math.pow(2,-Q),$=Math.floor(T.image.width*Z),yt=Math.floor(T.image.height*Z),Lt=H!==null?H.x:0,Zt=H!==null?H.y:0;Xt.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,Q,0,0,Lt,Zt,$,yt),Rt.unbindTexture()};const fe=R.createFramebuffer(),me=R.createFramebuffer();this.copyTextureToTexture=function(T,H,Q=null,Z=null,$=0,yt=null){yt===null&&($!==0?(rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=$,$=0):yt=0);let Lt,Zt,Ot,Gt,re,Vt,ue,de,ye;const ve=T.isCompressedTexture?T.mipmaps[yt]:T.image;if(Q!==null)Lt=Q.max.x-Q.min.x,Zt=Q.max.y-Q.min.y,Ot=Q.isBox3?Q.max.z-Q.min.z:1,Gt=Q.min.x,re=Q.min.y,Vt=Q.isBox3?Q.min.z:0;else{const en=Math.pow(2,-$);Lt=Math.floor(ve.width*en),Zt=Math.floor(ve.height*en),T.isDataArrayTexture?Ot=ve.depth:T.isData3DTexture?Ot=Math.floor(ve.depth*en):Ot=1,Gt=0,re=0,Vt=0}Z!==null?(ue=Z.x,de=Z.y,ye=Z.z):(ue=0,de=0,ye=0);const ge=ne.convert(H.format),Qt=ne.convert(H.type);let jt;H.isData3DTexture?(Xt.setTexture3D(H,0),jt=R.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Xt.setTexture2DArray(H,0),jt=R.TEXTURE_2D_ARRAY):(Xt.setTexture2D(H,0),jt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const he=R.getParameter(R.UNPACK_ROW_LENGTH),Ee=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ye=R.getParameter(R.UNPACK_SKIP_PIXELS),Pe=R.getParameter(R.UNPACK_SKIP_ROWS),Yn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ve.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ve.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Gt),R.pixelStorei(R.UNPACK_SKIP_ROWS,re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Vt);const Ce=T.isDataArrayTexture||T.isData3DTexture,Me=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const en=Ct.get(T),ke=Ct.get(H),Ze=Ct.get(en.__renderTarget),ta=Ct.get(ke.__renderTarget);Rt.bindFramebuffer(R.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let Zn=0;Zn<Ot;Zn++)Ce&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ct.get(T).__webglTexture,$,Vt+Zn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ct.get(H).__webglTexture,yt,ye+Zn)),R.blitFramebuffer(Gt,re,Lt,Zt,ue,de,Lt,Zt,R.DEPTH_BUFFER_BIT,R.NEAREST);Rt.bindFramebuffer(R.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||Ct.has(T)){const en=Ct.get(T),ke=Ct.get(H);Rt.bindFramebuffer(R.READ_FRAMEBUFFER,fe),Rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,me);for(let Ze=0;Ze<Ot;Ze++)Ce?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,en.__webglTexture,$,Vt+Ze):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,en.__webglTexture,$),Me?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ke.__webglTexture,yt,ye+Ze):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ke.__webglTexture,yt),$!==0?R.blitFramebuffer(Gt,re,Lt,Zt,ue,de,Lt,Zt,R.COLOR_BUFFER_BIT,R.NEAREST):Me?R.copyTexSubImage3D(jt,yt,ue,de,ye+Ze,Gt,re,Lt,Zt):R.copyTexSubImage2D(jt,yt,ue,de,Gt,re,Lt,Zt);Rt.bindFramebuffer(R.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Me?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(jt,yt,ue,de,ye,Lt,Zt,Ot,ge,Qt,ve.data):H.isCompressedArrayTexture?R.compressedTexSubImage3D(jt,yt,ue,de,ye,Lt,Zt,Ot,ge,ve.data):R.texSubImage3D(jt,yt,ue,de,ye,Lt,Zt,Ot,ge,Qt,ve):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,yt,ue,de,Lt,Zt,ge,Qt,ve.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,yt,ue,de,ve.width,ve.height,ge,ve.data):R.texSubImage2D(R.TEXTURE_2D,yt,ue,de,Lt,Zt,ge,Qt,ve);R.pixelStorei(R.UNPACK_ROW_LENGTH,he),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ee),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ye),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Yn),yt===0&&H.generateMipmaps&&R.generateMipmap(jt),Rt.unbindTexture()},this.initRenderTarget=function(T){Ct.get(T).__webglFramebuffer===void 0&&Xt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Xt.setTextureCube(T,0):T.isData3DTexture?Xt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Xt.setTexture2DArray(T,0):Xt.setTexture2D(T,0),Rt.unbindTexture()},this.resetState=function(){D=0,b=0,y=null,Rt.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}}class zi{static createButton(t,e={}){const n=document.createElement("button");function s(){let u=null;async function h(d){d.addEventListener("end",l),await t.xr.setSession(d),n.textContent="EXIT VR",u=d}function l(){u.removeEventListener("end",l),n.textContent="ENTER VR",u=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={...e,optionalFeatures:["local-floor","bounded-floor","layers",...e.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){u===null?navigator.xr.requestSession("immersive-vr",f).then(h):(u.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(d=>{console.warn(d)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){r(),n.textContent="VR NOT SUPPORTED"}function o(u){r(),console.warn("Exception when trying to call xr.isSessionSupported",u),n.textContent="VR NOT ALLOWED"}function c(u){u.style.position="absolute",u.style.bottom="20px",u.style.padding="12px 6px",u.style.border="1px solid #fff",u.style.borderRadius="4px",u.style.background="rgba(0,0,0,0.1)",u.style.color="#fff",u.style.font="normal 13px sans-serif",u.style.textAlign="center",u.style.opacity="0.5",u.style.outline="none",u.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-vr").then(function(u){u?s():a(),u&&zi.xrSessionIsGranted&&n.click()}).catch(o),n;{const u=document.createElement("a");return window.isSecureContext===!1?(u.href=document.location.href.replace(/^http:/,"https:"),u.innerHTML="WEBXR NEEDS HTTPS"):(u.href="https://immersiveweb.dev/",u.innerHTML="WEBXR NOT AVAILABLE"),u.style.left="calc(50% - 90px)",u.style.width="180px",u.style.textDecoration="none",c(u),u}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{zi.xrSessionIsGranted=!0})}}}zi.xrSessionIsGranted=!1;zi.registerSessionGrantedListener();function Gp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Ir(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var sl={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,s,r){function a(u,h){if(!s[u]){if(!n[u]){var l=typeof Ir=="function"&&Ir;if(!h&&l)return l(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var f=s[u]={exports:{}};n[u][0].call(f.exports,function(d){var x=n[u][1][d];return a(x||d)},f,f.exports,e,n,s,r)}return s[u].exports}for(var o=typeof Ir=="function"&&Ir,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,n,s){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,s){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,s){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(u){u=u||{},this.lowerBound=new r,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new r,u.upperBound&&this.upperBound.copy(u.upperBound)}var o=new r;a.prototype.setFromPoints=function(u,h,l,f){var d=this.lowerBound,x=this.upperBound,v=l;d.copy(u[0]),v&&v.vmult(d,d),x.copy(d);for(var m=1;m<u.length;m++){var p=u[m];v&&(v.vmult(p,o),p=o),p.x>x.x&&(x.x=p.x),p.x<d.x&&(d.x=p.x),p.y>x.y&&(x.y=p.y),p.y<d.y&&(d.y=p.y),p.z>x.z&&(x.z=p.z),p.z<d.z&&(d.z=p.z)}return h&&(h.vadd(d,d),h.vadd(x,x)),f&&(d.x-=f,d.y-=f,d.z-=f,x.x+=f,x.y+=f,x.z+=f),this},a.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(u){var h=u.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=u.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=u.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=u.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=u.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=u.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},a.prototype.overlaps=function(u){var h=this.lowerBound,l=this.upperBound,f=u.lowerBound,d=u.upperBound;return(f.x<=l.x&&l.x<=d.x||h.x<=d.x&&d.x<=l.x)&&(f.y<=l.y&&l.y<=d.y||h.y<=d.y&&d.y<=l.y)&&(f.z<=l.z&&l.z<=d.z||h.z<=d.z&&d.z<=l.z)},a.prototype.contains=function(u){var h=this.lowerBound,l=this.upperBound,f=u.lowerBound,d=u.upperBound;return h.x<=f.x&&l.x>=d.x&&h.y<=f.y&&l.y>=d.y&&h.z<=f.z&&l.z>=d.z},a.prototype.getCorners=function(u,h,l,f,d,x,v,m){var p=this.lowerBound,g=this.upperBound;u.copy(p),h.set(g.x,p.y,p.z),l.set(g.x,g.y,p.z),f.set(p.x,g.y,g.z),d.set(g.x,p.y,p.z),x.set(p.x,g.y,p.z),v.set(p.x,p.y,g.z),m.copy(g)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(u,h){var l=c,f=l[0],d=l[1],x=l[2],v=l[3],m=l[4],p=l[5],g=l[6],M=l[7];this.getCorners(f,d,x,v,m,p,g,M);for(var _=0;_!==8;_++){var w=l[_];u.pointToLocal(w,w)}return h.setFromPoints(l)},a.prototype.toWorldFrame=function(u,h){var l=c,f=l[0],d=l[1],x=l[2],v=l[3],m=l[4],p=l[5],g=l[6],M=l[7];this.getCorners(f,d,x,v,m,p,g,M);for(var _=0;_!==8;_++){var w=l[_];u.pointToWorld(w,w)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,s){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var c=o;o=a,a=c}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,c){if(a=a.index,o=o.index,o>a){var u=o;o=a,a=u}this.matrix[(a*(a+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,s){var r=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(v,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(v,m){return!(!(v.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&v.collisionFilterMask)||(v.type&u||v.sleepState===r.SLEEPING)&&(m.type&u||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(v,m,p,g){this.useBoundingBoxes?this.doBoundingBoxBroadphase(v,m,p,g):this.doBoundingSphereBroadphase(v,m,p,g)};var h=new a;new a,new o,new a,c.prototype.doBoundingSphereBroadphase=function(v,m,p,g){var M=h;m.position.vsub(v.position,M);var _=Math.pow(v.boundingRadius+m.boundingRadius,2),w=M.norm2();w<_&&(p.push(v),g.push(m))},c.prototype.doBoundingBoxBroadphase=function(v,m,p,g){v.aabbNeedsUpdate&&v.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),v.aabb.overlaps(m.aabb)&&(p.push(v),g.push(m))};var l={keys:[]},f=[],d=[];c.prototype.makePairsUnique=function(v,m){for(var p=l,g=f,M=d,_=v.length,w=0;w!==_;w++)g[w]=v[w],M[w]=m[w];v.length=0,m.length=0;for(var w=0;w!==_;w++){var A=g[w].id,U=M[w].id,D=A<U?A+","+U:U+","+A;p[D]=w,p.keys.push(D)}for(var w=0;w!==p.keys.length;w++){var D=p.keys.pop(),b=p[D];v.push(g[b]),m.push(M[b]),delete p[D]}},c.prototype.setWorld=function(v){};var x=new a;c.boundingSphereCheck=function(v,m){var p=x;return v.position.vsub(m.position,p),Math.pow(v.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},c.prototype.aabbQuery=function(v,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,s){n.exports=c;var r=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,f,d,x){r.apply(this),this.nx=f||10,this.ny=d||10,this.nz=x||10,this.aabbMin=h||new a(100,100,100),this.aabbMax=l||new a(-100,-100,-100);var v=this.nx*this.ny*this.nz;if(v<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=v,this.binLengths.length=v;for(var m=0;m<v;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var u=new a;new a,c.prototype.collisionPairs=function(h,l,f){var d=h.numObjects(),x=h.bodies,k=this.aabbMax,L=this.aabbMin,v=this.nx,m=this.ny,p=this.nz,g=m*p,M=p,_=1,w=k.x,A=k.y,U=k.z,D=L.x,b=L.y,y=L.z,E=v/(w-D),N=m/(A-b),F=p/(U-y),Y=(w-D)/v,W=(A-b)/m,nt=(U-y)/p,z=Math.sqrt(Y*Y+W*W+nt*nt)*.5,P=o.types,J=P.SPHERE,K=P.PLANE;P.BOX,P.COMPOUND,P.CONVEXPOLYHEDRON;for(var O=this.bins,tt=this.binLengths,V=this.bins.length,B=0;B!==V;B++)tt[B]=0;var I=Math.ceil,L=Math.min,k=Math.max;function j(It,te,Jt,dt,St,ae,ee){var zt=(It-D)*E|0,ne=(te-b)*N|0,G=(Jt-y)*F|0,Pt=I((dt-D)*E),Et=I((St-b)*N),Mt=I((ae-y)*F);zt<0?zt=0:zt>=v&&(zt=v-1),ne<0?ne=0:ne>=m&&(ne=m-1),G<0?G=0:G>=p&&(G=p-1),Pt<0?Pt=0:Pt>=v&&(Pt=v-1),Et<0?Et=0:Et>=m&&(Et=m-1),Mt<0?Mt=0:Mt>=p&&(Mt=p-1),zt*=g,ne*=M,G*=_,Pt*=g,Et*=M,Mt*=_;for(var gt=zt;gt<=Pt;gt+=g)for(var ft=ne;ft<=Et;ft+=M)for(var $t=G;$t<=Mt;$t+=_){var se=gt+ft+$t;O[se][tt[se]++]=ee}}for(var B=0;B!==d;B++){var X=x[B],et=X.shape;switch(et.type){case J:var lt=X.position.x,Ht=X.position.y,pt=X.position.z,vt=et.radius;j(lt-vt,Ht-vt,pt-vt,lt+vt,Ht+vt,pt+vt,X);break;case K:et.worldNormalNeedsUpdate&&et.computeWorldNormal(X.quaternion);var R=et.worldNormal,ut=D+Y*.5-X.position.x,qt=b+W*.5-X.position.y,kt=y+nt*.5-X.position.z,Rt=u;Rt.set(ut,qt,kt);for(var wt=0,Ct=0;wt!==v;wt++,Ct+=g,Rt.y=qt,Rt.x+=Y)for(var Xt=0,C=0;Xt!==m;Xt++,C+=M,Rt.z=kt,Rt.y+=W)for(var S=0,q=0;S!==p;S++,q+=_,Rt.z+=nt)if(Rt.dot(R)<z){var st=Ct+C+q;O[st][tt[st]++]=X}break;default:X.aabbNeedsUpdate&&X.computeAABB(),j(X.aabb.lowerBound.x,X.aabb.lowerBound.y,X.aabb.lowerBound.z,X.aabb.upperBound.x,X.aabb.upperBound.y,X.aabb.upperBound.z,X);break}}for(var B=0;B!==V;B++){var ot=tt[B];if(ot>1)for(var rt=O[B],wt=0;wt!==ot;wt++)for(var X=rt[wt],Xt=0;Xt!==wt;Xt++){var Kt=rt[Xt];this.needBroadphaseCollision(X,Kt)&&this.intersectionTest(X,Kt,l,f)}}this.makePairsUnique(l,f)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,s){n.exports=o;var r=e("./Broadphase"),a=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,u,h){var l=c.bodies,f=l.length,d,x,v,m;for(d=0;d!==f;d++)for(x=0;x!==d;x++)v=l[d],m=l[x],this.needBroadphaseCollision(v,m)&&this.intersectionTest(v,m,u,h)},new a,o.prototype.aabbQuery=function(c,u,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var f=c.bodies[l];f.aabbNeedsUpdate&&f.computeAABB(),f.aabb.overlaps(u)&&h.push(f)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,s){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var c=o;o=a,a=c}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,c){if(a=a.id,o=o.id,o>a){var u=o;o=a,a=u}c?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,s){n.exports=l;var r=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),u=e("../shapes/Shape"),h=e("../collision/AABB");function l(V,B){this.from=V?V.clone():new r,this.to=B?B.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(I){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var f=new h,d=[];l.prototype.intersectWorld=function(V,B){return this.mode=B.mode||l.ANY,this.result=B.result||new c,this.skipBackfaces=!!B.skipBackfaces,this.collisionFilterMask=typeof B.collisionFilterMask<"u"?B.collisionFilterMask:-1,this.collisionFilterGroup=typeof B.collisionFilterGroup<"u"?B.collisionFilterGroup:-1,B.from&&this.from.copy(B.from),B.to&&this.to.copy(B.to),this.callback=B.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(f),d.length=0,V.broadphase.aabbQuery(V,f,d),this.intersectBodies(d),this.hasHit};var x=new r,v=new r;l.pointInTriangle=m;function m(V,B,I,L){L.vsub(B,K),I.vsub(B,x),V.vsub(B,v);var k=K.dot(K),j=K.dot(x),X=K.dot(v),et=x.dot(x),lt=x.dot(v),Ht,pt;return(Ht=et*X-j*lt)>=0&&(pt=k*lt-j*X)>=0&&Ht+pt<k*et-j*j}var p=new r,g=new a;l.prototype.intersectBody=function(V,B){B&&(this.result=B,this._updateDirection());var I=this.checkCollisionResponse;if(!(I&&!V.collisionResponse)&&!(!(this.collisionFilterGroup&V.collisionFilterMask)||!(V.collisionFilterGroup&this.collisionFilterMask)))for(var L=p,k=g,j=0,X=V.shapes.length;j<X;j++){var et=V.shapes[j];if(!(I&&!et.collisionResponse)&&(V.quaternion.mult(V.shapeOrientations[j],k),V.quaternion.vmult(V.shapeOffsets[j],L),L.vadd(V.position,L),this.intersectShape(et,k,L,V),this.result._shouldStop))break}},l.prototype.intersectBodies=function(V,B){B&&(this.result=B,this._updateDirection());for(var I=0,L=V.length;!this.result._shouldStop&&I<L;I++)this.intersectBody(V[I])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(V,B,I,L){var k=this.from,j=tt(k,this._direction,I);if(!(j>V.boundingSphereRadius)){var X=this[V.type];X&&X.call(this,V,B,I,L)}},new r,new r;var M=new r,_=new r,w=new r,A=new r;new r,new c,l.prototype.intersectBox=function(V,B,I,L){return this.intersectConvex(V.convexPolyhedronRepresentation,B,I,L)},l.prototype[u.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(V,B,I,L){var k=this.from,j=this.to,X=this._direction,et=new r(0,0,1);B.vmult(et,et);var lt=new r;k.vsub(I,lt);var Ht=lt.dot(et);j.vsub(I,lt);var pt=lt.dot(et);if(!(Ht*pt>0)&&!(k.distanceTo(j)<Ht)){var vt=et.dot(X);if(!(Math.abs(vt)<this.precision)){var R=new r,ut=new r,qt=new r;k.vsub(I,R);var kt=-et.dot(R)/vt;X.scale(kt,ut),k.vadd(ut,qt),this.reportIntersection(et,qt,V,L,-1)}}},l.prototype[u.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(V){var B=this.to,I=this.from;V.lowerBound.x=Math.min(B.x,I.x),V.lowerBound.y=Math.min(B.y,I.y),V.lowerBound.z=Math.min(B.z,I.z),V.upperBound.x=Math.max(B.x,I.x),V.upperBound.y=Math.max(B.y,I.y),V.upperBound.z=Math.max(B.z,I.z)};var U={faceList:[0]};l.prototype.intersectHeightfield=function(V,B,I,L){V.data,V.elementSize;var k=new r,j=new l(this.from,this.to);o.pointToLocalFrame(I,B,j.from,j.from),o.pointToLocalFrame(I,B,j.to,j.to);var X=[],et=null,lt=null,Ht=null,pt=null,vt=V.getIndexOfPosition(j.from.x,j.from.y,X,!1);if(vt&&(et=X[0],lt=X[1],Ht=X[0],pt=X[1]),vt=V.getIndexOfPosition(j.to.x,j.to.y,X,!1),vt&&((et===null||X[0]<et)&&(et=X[0]),(Ht===null||X[0]>Ht)&&(Ht=X[0]),(lt===null||X[1]<lt)&&(lt=X[1]),(pt===null||X[1]>pt)&&(pt=X[1])),et!==null){var R=[];V.getRectMinMax(et,lt,Ht,pt,R),R[0],R[1];for(var ut=et;ut<=Ht;ut++)for(var qt=lt;qt<=pt;qt++){if(this.result._shouldStop||(V.getConvexTrianglePillar(ut,qt,!1),o.pointToWorldFrame(I,B,V.pillarOffset,k),this.intersectConvex(V.pillarConvex,B,k,L,U),this.result._shouldStop))return;V.getConvexTrianglePillar(ut,qt,!0),o.pointToWorldFrame(I,B,V.pillarOffset,k),this.intersectConvex(V.pillarConvex,B,k,L,U)}}},l.prototype[u.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var D=new r,b=new r;l.prototype.intersectSphere=function(V,B,I,L){var k=this.from,j=this.to,X=V.radius,et=Math.pow(j.x-k.x,2)+Math.pow(j.y-k.y,2)+Math.pow(j.z-k.z,2),lt=2*((j.x-k.x)*(k.x-I.x)+(j.y-k.y)*(k.y-I.y)+(j.z-k.z)*(k.z-I.z)),Ht=Math.pow(k.x-I.x,2)+Math.pow(k.y-I.y,2)+Math.pow(k.z-I.z,2)-Math.pow(X,2),pt=Math.pow(lt,2)-4*et*Ht,vt=D,R=b;if(!(pt<0))if(pt===0)k.lerp(j,pt,vt),vt.vsub(I,R),R.normalize(),this.reportIntersection(R,vt,V,L,-1);else{var ut=(-lt-Math.sqrt(pt))/(2*et),qt=(-lt+Math.sqrt(pt))/(2*et);if(ut>=0&&ut<=1&&(k.lerp(j,ut,vt),vt.vsub(I,R),R.normalize(),this.reportIntersection(R,vt,V,L,-1)),this.result._shouldStop)return;qt>=0&&qt<=1&&(k.lerp(j,qt,vt),vt.vsub(I,R),R.normalize(),this.reportIntersection(R,vt,V,L,-1))}},l.prototype[u.types.SPHERE]=l.prototype.intersectSphere;var y=new r;new r,new r;var E=new r;l.prototype.intersectConvex=function(B,I,L,k,j){for(var X=y,et=E,lt=j&&j.faceList||null,Ht=B.faces,pt=B.vertices,vt=B.faceNormals,R=this._direction,ut=this.from,qt=this.to,kt=ut.distanceTo(qt),Rt=lt?lt.length:Ht.length,wt=this.result,Ct=0;!wt._shouldStop&&Ct<Rt;Ct++){var Xt=lt?lt[Ct]:Ct,C=Ht[Xt],S=vt[Xt],q=I,st=L;et.copy(pt[C[0]]),q.vmult(et,et),et.vadd(st,et),et.vsub(ut,et),q.vmult(S,X);var ot=R.dot(X);if(!(Math.abs(ot)<this.precision)){var rt=X.dot(et)/ot;if(!(rt<0)){R.mult(rt,M),M.vadd(ut,M),_.copy(pt[C[0]]),q.vmult(_,_),st.vadd(_,_);for(var Kt=1;!wt._shouldStop&&Kt<C.length-1;Kt++){w.copy(pt[C[Kt]]),A.copy(pt[C[Kt+1]]),q.vmult(w,w),q.vmult(A,A),st.vadd(w,w),st.vadd(A,A);var It=M.distanceTo(ut);!(m(M,_,w,A)||m(M,w,_,A))||It>kt||this.reportIntersection(X,M,B,k,Xt)}}}}},l.prototype[u.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var N=new r,F=new r,Y=new r,W=new r,nt=new r,z=new r;new h;var P=[],J=new o;l.prototype.intersectTrimesh=function(B,I,L,k,j){var X=N,et=P,lt=J,Ht=E,pt=F,vt=Y,R=W,ut=z,qt=nt;j&&j.faceList;var kt=B.indices;B.vertices,B.faceNormals;var Rt=this.from,wt=this.to,Ct=this._direction;lt.position.copy(L),lt.quaternion.copy(I),o.vectorToLocalFrame(L,I,Ct,pt),o.pointToLocalFrame(L,I,Rt,vt),o.pointToLocalFrame(L,I,wt,R);var Xt=vt.distanceSquared(R);B.tree.rayQuery(this,lt,et);for(var C=0,S=et.length;!this.result._shouldStop&&C!==S;C++){var q=et[C];B.getNormal(q,X),B.getVertex(kt[q*3],_),_.vsub(vt,Ht);var st=pt.dot(X),ot=X.dot(Ht)/st;if(!(ot<0)){pt.scale(ot,M),M.vadd(vt,M),B.getVertex(kt[q*3+1],w),B.getVertex(kt[q*3+2],A);var rt=M.distanceSquared(vt);!(m(M,w,_,A)||m(M,_,w,A))||rt>Xt||(o.vectorToWorldFrame(I,X,qt),o.pointToWorldFrame(L,I,M,ut),this.reportIntersection(qt,ut,B,k,q))}}et.length=0},l.prototype[u.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(V,B,I,L,k){var j=this.from,X=this.to,et=j.distanceTo(B),lt=this.result;if(!(this.skipBackfaces&&V.dot(this._direction)>0))switch(lt.hitFaceIndex=typeof k<"u"?k:-1,this.mode){case l.ALL:this.hasHit=!0,lt.set(j,X,V,B,I,L,et),lt.hasHit=!0,this.callback(lt);break;case l.CLOSEST:(et<lt.distance||!lt.hasHit)&&(this.hasHit=!0,lt.hasHit=!0,lt.set(j,X,V,B,I,L,et));break;case l.ANY:this.hasHit=!0,lt.hasHit=!0,lt.set(j,X,V,B,I,L,et),lt._shouldStop=!0;break}};var K=new r,O=new r;function tt(V,B,I){I.vsub(V,K);var L=K.dot(B);B.mult(L,O),O.vadd(V,O);var k=I.distanceTo(O);return k}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,c,u,h,l,f,d){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(h),this.shape=l,this.body=f,this.distance=d}},{"../math/Vec3":30}],11:[function(e,n,s){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(u){c.push(u.body)},this._removeBodyHandler=function(u){var h=c.indexOf(u.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortY=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortZ=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},a.prototype.collisionPairs=function(o,c,u){var h=this.axisList,l=h.length,f=this.axisIndex,d,x;for(this.dirty&&(this.sortList(),this.dirty=!1),d=0;d!==l;d++){var v=h[d];for(x=d+1;x<l;x++){var m=h[x];if(this.needBroadphaseCollision(v,m)){if(!a.checkBounds(v,m,f))break;this.intersectionTest(v,m,c,u)}}}},a.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,u=o.length,h=0;h!==u;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?a.insertionSortX(o):c===1?a.insertionSortY(o):c===2&&a.insertionSortZ(o)},a.checkBounds=function(o,c,u){var h,l;u===0?(h=o.position.x,l=c.position.x):u===1?(h=o.position.y,l=c.position.y):u===2&&(h=o.position.z,l=c.position.z);var f=o.boundingRadius,d=c.boundingRadius,x=h+f,v=l-d;return v<x},a.prototype.autoDetectAxis=function(){for(var o=0,c=0,u=0,h=0,l=0,f=0,d=this.axisList,x=d.length,v=1/x,m=0;m!==x;m++){var p=d[m],g=p.position.x;o+=g,c+=g*g;var M=p.position.y;u+=M,h+=M*M;var _=p.position.z;l+=_,f+=_*_}var w=c-o*o*v,A=h-u*u*v,U=f-l*l*v;w>A?w>U?this.axisIndex=0:this.axisIndex=2:A>U?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,c,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var f=this.axisList;c.lowerBound[l],c.upperBound[l];for(var d=0;d<f.length;d++){var x=f[d];x.aabbNeedsUpdate&&x.computeAABB(),x.aabb.overlaps(c)&&u.push(x)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(h,l,f){f=f||{};var d=typeof f.maxForce<"u"?f.maxForce:1e6,x=f.pivotA?f.pivotA.clone():new c,v=f.pivotB?f.pivotB.clone():new c;this.axisA=f.axisA?f.axisA.clone():new c,this.axisB=f.axisB?f.axisB.clone():new c,r.call(this,h,x,l,v,d),this.collideConnected=!!f.collideConnected,this.angle=typeof f.angle<"u"?f.angle:0;var m=this.coneEquation=new a(h,l,f),p=this.twistEquation=new o(h,l,f);this.twistAngle=typeof f.twistAngle<"u"?f.twistAngle:0,m.maxForce=0,m.minForce=-d,p.maxForce=0,p.minForce=-d,this.equations.push(m,p)}u.prototype=new r,u.constructor=u,new c,new c,u.prototype.update=function(){var h=this.bodyA,l=this.bodyB,f=this.coneEquation,d=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,f.axisA),l.vectorToWorldFrame(this.axisB,f.axisB),this.axisA.tangents(d.axisA,d.axisA),h.vectorToWorldFrame(d.axisA,d.axisA),this.axisB.tangents(d.axisB,d.axisB),l.vectorToWorldFrame(d.axisB,d.axisB),f.angle=this.angle,d.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,s){n.exports=a;var r=e("../utils/Utils");function a(o,c,u){u=r.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=a.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,s){n.exports=o;var r=e("./Constraint"),a=e("../equations/ContactEquation");function o(c,u,h,l){r.call(this,c,u),typeof h>"u"&&(h=c.position.distanceTo(u.position)),typeof l>"u"&&(l=1e6),this.distance=h;var f=this.distanceEquation=new a(c,u);this.equations.push(f),f.minForce=-l,f.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,u=this.bodyB,h=this.distanceEquation,l=this.distance*.5,f=h.ni;u.position.vsub(c.position,f),f.normalize(),f.mult(l,h.ri),f.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(f,d,x){x=x||{};var v=typeof x.maxForce<"u"?x.maxForce:1e6,m=x.pivotA?x.pivotA.clone():new c,p=x.pivotB?x.pivotB.clone():new c;r.call(this,f,m,d,p,v);var g=this.axisA=x.axisA?x.axisA.clone():new c(1,0,0);g.normalize();var M=this.axisB=x.axisB?x.axisB.clone():new c(1,0,0);M.normalize();var _=this.rotationalEquation1=new a(f,d,x),w=this.rotationalEquation2=new a(f,d,x),A=this.motorEquation=new o(f,d,v);A.enabled=!1,this.equations.push(_,w,A)}u.prototype=new r,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(f){this.motorEquation.targetVelocity=f},u.prototype.setMotorMaxForce=function(f){this.motorEquation.maxForce=f,this.motorEquation.minForce=-f};var h=new c,l=new c;u.prototype.update=function(){var f=this.bodyA,d=this.bodyB,x=this.motorEquation,v=this.rotationalEquation1,m=this.rotationalEquation2,p=h,g=l,M=this.axisA,_=this.axisB;r.prototype.update.call(this),f.quaternion.vmult(M,p),d.quaternion.vmult(_,g),p.tangents(v.axisA,m.axisA),v.axisB.copy(g),m.axisB.copy(g),this.motorEquation.enabled&&(f.quaternion.vmult(this.axisA,x.axisA),d.quaternion.vmult(this.axisB,x.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,s){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(u,h,l){l=l||{};var f=typeof l.maxForce<"u"?l.maxForce:1e6,d=new o,x=new o,v=new o;u.position.vadd(h.position,v),v.scale(.5,v),h.pointToLocalFrame(v,x),u.pointToLocalFrame(v,d),r.call(this,u,d,h,x,f);var m=this.rotationalEquation1=new a(u,h,l),p=this.rotationalEquation2=new a(u,h,l),g=this.rotationalEquation3=new a(u,h,l);this.equations.push(m,p,g)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,f=this.rotationalEquation2,d=this.rotationalEquation3;r.prototype.update.call(this),u.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),u.vectorToWorldFrame(o.UNIT_Y,f.axisA),h.vectorToWorldFrame(o.UNIT_Z,f.axisB),u.vectorToWorldFrame(o.UNIT_Z,d.axisA),h.vectorToWorldFrame(o.UNIT_X,d.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,s){n.exports=c;var r=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(u,h,l,f,d){r.call(this,u,l),d=typeof d<"u"?d:1e6,this.pivotA=h?h.clone():new o,this.pivotB=f?f.clone():new o;var x=this.equationX=new a(u,l),v=this.equationY=new a(u,l),m=this.equationZ=new a(u,l);this.equations.push(x,v,m),x.minForce=v.minForce=m.minForce=-d,x.maxForce=v.maxForce=m.maxForce=d,x.ni.set(1,0,0),v.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB,l=this.equationX,f=this.equationY,d=this.equationZ;u.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),f.ri.copy(l.ri),f.rj.copy(l.rj),d.ri.copy(l.ri),d.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,f){f=f||{};var d=typeof f.maxForce<"u"?f.maxForce:1e6;a.call(this,h,l,-d,d),this.axisA=f.axisA?f.axisA.clone():new r(1,0,0),this.axisB=f.axisB?f.axisB.clone():new r(0,1,0),this.angle=typeof f.angle<"u"?f.angle:0}o.prototype=new a,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,f=this.b,d=this.axisA,x=this.axisB,v=c,m=u,p=this.jacobianElementA,g=this.jacobianElementB;d.cross(x,v),x.cross(d,m),p.rotational.copy(m),g.rotational.copy(v);var M=Math.cos(this.angle)-d.dot(x),_=this.computeGW(),w=this.computeGiMf(),A=-M*l-_*f-h*w;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,p,g){g=typeof g<"u"?g:1e6,r.call(this,m,p,0,g),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,u=new a,h=new a;o.prototype.computeB=function(m){var p=this.a,g=this.b,M=this.bi,_=this.bj,w=this.ri,A=this.rj,U=c,D=u,b=M.velocity,y=M.angularVelocity;M.force,M.torque;var E=_.velocity,N=_.angularVelocity;_.force,_.torque;var F=h,Y=this.jacobianElementA,W=this.jacobianElementB,nt=this.ni;w.cross(nt,U),A.cross(nt,D),nt.negate(Y.spatial),U.negate(Y.rotational),W.spatial.copy(nt),W.rotational.copy(D),F.copy(_.position),F.vadd(A,F),F.vsub(M.position,F),F.vsub(w,F);var z=nt.dot(F),P=this.restitution+1,J=P*E.dot(nt)-P*b.dot(nt)+N.dot(D)-y.dot(U),K=this.computeGiMf(),O=-z*p-J*g-m*K;return O};var l=new a,f=new a,d=new a,x=new a,v=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,p=f,g=d,M=x,_=v;return this.bi.position.vadd(this.ri,g),this.bj.position.vadd(this.rj,M),this.bi.getVelocityAtWorldPoint(g,m),this.bj.getVelocityAtWorldPoint(M,p),m.vsub(p,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,s){n.exports=o;var r=e("../math/JacobianElement"),a=e("../math/Vec3");function o(v,m,p,g){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof g>"u"?1e6:g,this.bi=v,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(v,m,p){var g=m,M=v,_=p;this.a=4/(_*(1+4*g)),this.b=4*g/(1+4*g),this.eps=4/(_*_*M*(1+4*g))},o.prototype.computeB=function(v,m,p){var g=this.computeGW(),M=this.computeGq(),_=this.computeGiMf();return-M*v-g*m-_*p},o.prototype.computeGq=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,g=this.bj,M=p.position,_=g.position;return v.spatial.dot(M)+m.spatial.dot(_)};var c=new a;o.prototype.computeGW=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,g=this.bj,M=p.velocity,_=g.velocity,w=p.angularVelocity||c,A=g.angularVelocity||c;return v.multiplyVectors(M,w)+m.multiplyVectors(_,A)},o.prototype.computeGWlambda=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,g=this.bj,M=p.vlambda,_=g.vlambda,w=p.wlambda||c,A=g.wlambda||c;return v.multiplyVectors(M,w)+m.multiplyVectors(_,A)};var u=new a,h=new a,l=new a,f=new a;o.prototype.computeGiMf=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,g=this.bj,M=p.force,_=p.torque,w=g.force,A=g.torque,U=p.invMassSolve,D=g.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(_,l):l.set(0,0,0),g.invInertiaWorldSolve?g.invInertiaWorldSolve.vmult(A,f):f.set(0,0,0),M.mult(U,u),w.mult(D,h),v.multiplyVectors(u,l)+m.multiplyVectors(h,f)};var d=new a;o.prototype.computeGiMGt=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,g=this.bj,M=p.invMassSolve,_=g.invMassSolve,w=p.invInertiaWorldSolve,A=g.invInertiaWorldSolve,U=M+_;return w&&(w.vmult(v.rotational,d),U+=d.dot(v.rotational)),A&&(A.vmult(m.rotational,d),U+=d.dot(m.rotational)),U};var x=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(v){var m=this.jacobianElementA,p=this.jacobianElementB,g=this.bi,M=this.bj,_=x;m.spatial.mult(g.invMassSolve*v,_),g.vlambda.vadd(_,g.vlambda),p.spatial.mult(M.invMassSolve*v,_),M.vlambda.vadd(_,M.vlambda),g.invInertiaWorldSolve&&(g.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(v,_),g.wlambda.vadd(_,g.wlambda)),M.invInertiaWorldSolve&&(M.invInertiaWorldSolve.vmult(p.rotational,_),_.mult(v,_),M.wlambda.vadd(_,M.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(h,l,f){r.call(this,h,l,-f,f),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,u=new a;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var f=this.ri,d=this.rj,x=c,v=u,m=this.t;f.cross(m,x),d.cross(m,v);var p=this.jacobianElementA,g=this.jacobianElementB;m.negate(p.spatial),x.negate(p.rotational),g.spatial.copy(m),g.rotational.copy(v);var M=this.computeGW(),_=this.computeGiMf(),w=-M*l-h*_;return w}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,f){f=f||{};var d=typeof f.maxForce<"u"?f.maxForce:1e6;a.call(this,h,l,-d,d),this.axisA=f.axisA?f.axisA.clone():new r(1,0,0),this.axisB=f.axisB?f.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,f=this.b,d=this.axisA,x=this.axisB,v=c,m=u,p=this.jacobianElementA,g=this.jacobianElementB;d.cross(x,v),x.cross(d,m),p.rotational.copy(m),g.rotational.copy(v);var M=Math.cos(this.maxAngle)-d.dot(x),_=this.computeGW(),w=this.computeGiMf(),A=-M*l-_*f-h*w;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,u,h){h=typeof h<"u"?h:1e6,a.call(this,c,u,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var u=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,f=this.jacobianElementA,d=this.jacobianElementB;f.rotational.copy(h),l.negate(d.rotational);var x=this.computeGW()-this.targetVelocity,v=this.computeGiMf(),m=-x*u-c*v;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,s){var r=e("../utils/Utils");n.exports=a;function a(o,c,u){u=r.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,c],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,s){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},a.prototype.getTrace=function(c){var c=c||new r,u=this.elements;c.x=u[0],c.y=u[4],c.z=u[8]},a.prototype.vmult=function(o,c){c=c||new r;var u=this.elements,h=o.x,l=o.y,f=o.z;return c.x=u[0]*h+u[1]*l+u[2]*f,c.y=u[3]*h+u[4]*l+u[5]*f,c.z=u[6]*h+u[7]*l+u[8]*f,c},a.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},a.prototype.mmult=function(o,c){for(var u=c||new a,h=0;h<3;h++)for(var l=0;l<3;l++){for(var f=0,d=0;d<3;d++)f+=o.elements[h+d*3]*this.elements[d+l*3];u.elements[h+l*3]=f}return u},a.prototype.scale=function(o,c){c=c||new a;for(var u=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*u[3*l+0],h[3*l+1]=o.y*u[3*l+1],h[3*l+2]=o.z*u[3*l+2];return c},a.prototype.solve=function(o,c){c=c||new r;for(var u=3,h=4,l=[],f=0;f<u*h;f++)l.push(0);var f,d;for(f=0;f<3;f++)for(d=0;d<3;d++)l[f+h*d]=this.elements[f+3*d];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var x=3,v=x,m,p=4,g;do{if(f=v-x,l[f+h*f]===0){for(d=f+1;d<v;d++)if(l[f+h*d]!==0){m=p;do g=p-m,l[g+h*f]+=l[g+h*d];while(--m);break}}if(l[f+h*f]!==0)for(d=f+1;d<v;d++){var M=l[f+h*d]/l[f+h*f];m=p;do g=p-m,l[g+h*d]=g<=f?0:l[g+h*d]-l[g+h*f]*M;while(--m)}}while(--x);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},a.prototype.e=function(o,c,u){if(u===void 0)return this.elements[c+3*o];this.elements[c+3*o]=u},a.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},a.prototype.toString=function(){for(var o="",c=",",u=0;u<9;u++)o+=this.elements[u]+c;return o},a.prototype.reverse=function(o){o=o||new a;for(var c=3,u=6,h=[],l=0;l<c*u;l++)h.push(0);var l,f;for(l=0;l<3;l++)for(f=0;f<3;f++)h[l+u*f]=this.elements[l+3*f];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var d=3,x=d,v,m=u,p;do{if(l=x-d,h[l+u*l]===0){for(f=l+1;f<x;f++)if(h[l+u*f]!==0){v=m;do p=m-v,h[p+u*l]+=h[p+u*f];while(--v);break}}if(h[l+u*l]!==0)for(f=l+1;f<x;f++){var g=h[l+u*f]/h[l+u*l];v=m;do p=m-v,h[p+u*f]=p<=l?0:h[p+u*f]-h[p+u*l]*g;while(--v)}}while(--d);l=2;do{f=l-1;do{var g=h[l+u*f]/h[l+u*l];v=u;do p=u-v,h[p+u*f]=h[p+u*f]-h[p+u*l]*g;while(--v)}while(f--)}while(--l);l=2;do{var g=1/h[l+u*l];v=u;do p=u-v,h[p+u*l]=h[p+u*l]*g;while(--v)}while(l--);l=2;do{f=2;do{if(p=h[c+f+u*l],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,f,p)}while(f--)}while(l--);return o},a.prototype.setRotationFromQuaternion=function(o){var c=o.x,u=o.y,h=o.z,l=o.w,f=c+c,d=u+u,x=h+h,v=c*f,m=c*d,p=c*x,g=u*d,M=u*x,_=h*x,w=l*f,A=l*d,U=l*x,D=this.elements;return D[3*0+0]=1-(g+_),D[3*0+1]=m-U,D[3*0+2]=p+A,D[3*1+0]=m+U,D[3*1+1]=1-(v+_),D[3*1+2]=M-w,D[3*2+0]=p-A,D[3*2+1]=M+w,D[3*2+2]=1-(v+g),this},a.prototype.transpose=function(o){o=o||new a;for(var c=o.elements,u=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=u[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(f,d,x,v){this.x=f!==void 0?f:0,this.y=d!==void 0?d:0,this.z=x!==void 0?x:0,this.w=v!==void 0?v:1}a.prototype.set=function(f,d,x,v){this.x=f,this.y=d,this.z=x,this.w=v},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(f,d){var x=Math.sin(d*.5);this.x=f.x*x,this.y=f.y*x,this.z=f.z*x,this.w=Math.cos(d*.5)},a.prototype.toAxisAngle=function(f){f=f||new r,this.normalize();var d=2*Math.acos(this.w),x=Math.sqrt(1-this.w*this.w);return x<.001?(f.x=this.x,f.y=this.y,f.z=this.z):(f.x=this.x/x,f.y=this.y/x,f.z=this.z/x),[f,d]};var o=new r,c=new r;a.prototype.setFromVectors=function(f,d){if(f.isAntiparallelTo(d)){var x=o,v=c;f.tangents(x,v),this.setFromAxisAngle(x,Math.PI)}else{var m=f.cross(d);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(f.norm(),2)*Math.pow(d.norm(),2))+f.dot(d),this.normalize()}};var u=new r,h=new r,l=new r;a.prototype.mult=function(f,d){d=d||new a;var x=this.w,v=u,m=h,p=l;return v.set(this.x,this.y,this.z),m.set(f.x,f.y,f.z),d.w=x*f.w-v.dot(m),v.cross(m,p),d.x=x*m.x+f.w*v.x+p.x,d.y=x*m.y+f.w*v.y+p.y,d.z=x*m.z+f.w*v.z+p.z,d},a.prototype.inverse=function(f){var d=this.x,x=this.y,v=this.z,m=this.w;f=f||new a,this.conjugate(f);var p=1/(d*d+x*x+v*v+m*m);return f.x*=p,f.y*=p,f.z*=p,f.w*=p,f},a.prototype.conjugate=function(f){return f=f||new a,f.x=-this.x,f.y=-this.y,f.z=-this.z,f.w=this.w,f},a.prototype.normalize=function(){var f=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(f=1/f,this.x*=f,this.y*=f,this.z*=f,this.w*=f)},a.prototype.normalizeFast=function(){var f=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=f,this.y*=f,this.z*=f,this.w*=f)},a.prototype.vmult=function(f,d){d=d||new r;var x=f.x,v=f.y,m=f.z,p=this.x,g=this.y,M=this.z,_=this.w,w=_*x+g*m-M*v,A=_*v+M*x-p*m,U=_*m+p*v-g*x,D=-p*x-g*v-M*m;return d.x=w*_+D*-p+A*-M-U*-g,d.y=A*_+D*-g+U*-p-w*-M,d.z=U*_+D*-M+w*-g-A*-p,d},a.prototype.copy=function(f){return this.x=f.x,this.y=f.y,this.z=f.z,this.w=f.w,this},a.prototype.toEuler=function(f,d){d=d||"YZX";var x,v,m,p=this.x,g=this.y,M=this.z,_=this.w;switch(d){case"YZX":var w=p*g+M*_;if(w>.499&&(x=2*Math.atan2(p,_),v=Math.PI/2,m=0),w<-.499&&(x=-2*Math.atan2(p,_),v=-Math.PI/2,m=0),isNaN(x)){var A=p*p,U=g*g,D=M*M;x=Math.atan2(2*g*_-2*p*M,1-2*U-2*D),v=Math.asin(2*w),m=Math.atan2(2*p*_-2*g*M,1-2*A-2*D)}break;default:throw new Error("Euler order "+d+" not supported yet.")}f.y=x,f.z=v,f.x=m},a.prototype.setFromEuler=function(f,d,x,v){v=v||"XYZ";var m=Math.cos(f/2),p=Math.cos(d/2),g=Math.cos(x/2),M=Math.sin(f/2),_=Math.sin(d/2),w=Math.sin(x/2);return v==="XYZ"?(this.x=M*p*g+m*_*w,this.y=m*_*g-M*p*w,this.z=m*p*w+M*_*g,this.w=m*p*g-M*_*w):v==="YXZ"?(this.x=M*p*g+m*_*w,this.y=m*_*g-M*p*w,this.z=m*p*w-M*_*g,this.w=m*p*g+M*_*w):v==="ZXY"?(this.x=M*p*g-m*_*w,this.y=m*_*g+M*p*w,this.z=m*p*w+M*_*g,this.w=m*p*g-M*_*w):v==="ZYX"?(this.x=M*p*g-m*_*w,this.y=m*_*g+M*p*w,this.z=m*p*w-M*_*g,this.w=m*p*g+M*_*w):v==="YZX"?(this.x=M*p*g+m*_*w,this.y=m*_*g+M*p*w,this.z=m*p*w-M*_*g,this.w=m*p*g-M*_*w):v==="XZY"&&(this.x=M*p*g-m*_*w,this.y=m*_*g-M*p*w,this.z=m*p*w+M*_*g,this.w=m*p*g+M*_*w),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,s){var r=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(u){u=u||{},this.position=new r,u.position&&this.position.copy(u.position),this.quaternion=new a,u.quaternion&&this.quaternion.copy(u.quaternion)}var c=new a;o.pointToLocalFrame=function(u,h,l,d){var d=d||new r;return l.vsub(u,d),h.conjugate(c),c.vmult(d,d),d},o.prototype.pointToLocal=function(u,h){return o.pointToLocalFrame(this.position,this.quaternion,u,h)},o.pointToWorldFrame=function(u,h,l,d){var d=d||new r;return h.vmult(l,d),d.vadd(u,d),d},o.prototype.pointToWorld=function(u,h){return o.pointToWorldFrame(this.position,this.quaternion,u,h)},o.prototype.vectorToWorldFrame=function(u,l){var l=l||new r;return this.quaternion.vmult(u,l),l},o.vectorToWorldFrame=function(u,h,l){return u.vmult(h,l),l},o.vectorToLocalFrame=function(u,h,l,d){var d=d||new r;return h.w*=-1,h.vmult(l,d),h.w*=-1,d}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,s){n.exports=a;var r=e("./Mat3");function a(h,l,f){this.x=h||0,this.y=l||0,this.z=f||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(h,l){var f=h.x,d=h.y,x=h.z,v=this.x,m=this.y,p=this.z;return l=l||new a,l.x=m*x-p*d,l.y=p*f-v*x,l.z=v*d-m*f,l},a.prototype.set=function(h,l,f){return this.x=h,this.y=l,this.z=f,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new a(this.x+h.x,this.y+h.y,this.z+h.z)},a.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new a(this.x-h.x,this.y-h.y,this.z-h.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var h=this.x,l=this.y,f=this.z,d=Math.sqrt(h*h+l*l+f*f);if(d>0){var x=1/d;this.x*=x,this.y*=x,this.z*=x}else this.x=0,this.y=0,this.z=0;return d},a.prototype.unit=function(h){h=h||new a;var l=this.x,f=this.y,d=this.z,x=Math.sqrt(l*l+f*f+d*d);return x>0?(x=1/x,h.x=l*x,h.y=f*x,h.z=d*x):(h.x=1,h.y=0,h.z=0),h},a.prototype.norm=function(){var h=this.x,l=this.y,f=this.z;return Math.sqrt(h*h+l*l+f*f)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(h){var l=this.x,f=this.y,d=this.z,x=h.x,v=h.y,m=h.z;return Math.sqrt((x-l)*(x-l)+(v-f)*(v-f)+(m-d)*(m-d))},a.prototype.distanceSquared=function(h){var l=this.x,f=this.y,d=this.z,x=h.x,v=h.y,m=h.z;return(x-l)*(x-l)+(v-f)*(v-f)+(m-d)*(m-d)},a.prototype.mult=function(h,l){l=l||new a;var f=this.x,d=this.y,x=this.z;return l.x=h*f,l.y=h*d,l.z=h*x,l},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(h){return h=h||new a,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new a,c=new a;a.prototype.tangents=function(h,l){var f=this.norm();if(f>0){var d=o,x=1/f;d.set(this.x*x,this.y*x,this.z*x);var v=c;Math.abs(d.x)<.9?(v.set(1,0,0),d.cross(v,h)):(v.set(0,1,0),d.cross(v,h)),d.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},a.prototype.lerp=function(h,l,f){var d=this.x,x=this.y,v=this.z;f.x=d+(h.x-d)*l,f.y=x+(h.y-x)*l,f.z=v+(h.z-v)*l},a.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},a.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var u=new a;a.prototype.isAntiparallelTo=function(h,l){return this.negate(u),u.almostEquals(h,l)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,s){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),h=e("../shapes/Box");function l(E){E=E||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof E.collisionFilterGroup=="number"?E.collisionFilterGroup:1,this.collisionFilterMask=typeof E.collisionFilterMask=="number"?E.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,E.position&&this.position.copy(E.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,E.velocity&&this.velocity.copy(E.velocity),this.initVelocity=new a,this.force=new a;var N=typeof E.mass=="number"?E.mass:0;this.mass=N,this.invMass=N>0?1/N:0,this.material=E.material||null,this.linearDamping=typeof E.linearDamping=="number"?E.linearDamping:.01,this.type=N<=0?l.STATIC:l.DYNAMIC,typeof E.type==typeof l.STATIC&&(this.type=E.type),this.allowSleep=typeof E.allowSleep<"u"?E.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof E.sleepSpeedLimit<"u"?E.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof E.sleepTimeLimit<"u"?E.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new c,E.quaternion&&this.quaternion.copy(E.quaternion),this.initQuaternion=new c,this.angularVelocity=new a,E.angularVelocity&&this.angularVelocity.copy(E.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof E.fixedRotation<"u"?E.fixedRotation:!1,this.angularDamping=typeof E.angularDamping<"u"?E.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new a,E.shape&&this.addShape(E.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var E=this.sleepState;this.sleepState=0,E===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(E){if(this.allowSleep){var N=this.sleepState,F=this.velocity.norm2()+this.angularVelocity.norm2(),Y=Math.pow(this.sleepSpeedLimit,2);N===l.AWAKE&&F<Y?(this.sleepState=l.SLEEPY,this.timeLastSleepy=E,this.dispatchEvent(l.sleepyEvent)):N===l.SLEEPY&&F>Y?this.wakeUp():N===l.SLEEPY&&E-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(E,F){var F=F||new a;return E.vsub(this.position,F),this.quaternion.conjugate().vmult(F,F),F},l.prototype.vectorToLocalFrame=function(E,F){var F=F||new a;return this.quaternion.conjugate().vmult(E,F),F},l.prototype.pointToWorldFrame=function(E,F){var F=F||new a;return this.quaternion.vmult(E,F),F.vadd(this.position,F),F},l.prototype.vectorToWorldFrame=function(E,F){var F=F||new a;return this.quaternion.vmult(E,F),F};var f=new a,d=new c;l.prototype.addShape=function(E,N,F){var Y=new a,W=new c;return N&&Y.copy(N),F&&W.copy(F),this.shapes.push(E),this.shapeOffsets.push(Y),this.shapeOrientations.push(W),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var E=this.shapes,N=this.shapeOffsets,F=E.length,Y=0,W=0;W!==F;W++){var nt=E[W];nt.updateBoundingSphereRadius();var z=N[W].norm(),P=nt.boundingSphereRadius;z+P>Y&&(Y=z+P)}this.boundingRadius=Y};var x=new u;l.prototype.computeAABB=function(){for(var E=this.shapes,N=this.shapeOffsets,F=this.shapeOrientations,Y=E.length,W=f,nt=d,z=this.quaternion,P=this.aabb,J=x,K=0;K!==Y;K++){var O=E[K];F[K].mult(z,nt),nt.vmult(N[K],W),W.vadd(this.position,W),O.calculateWorldAABB(W,nt,J.lowerBound,J.upperBound),K===0?P.copy(J):P.extend(J)}this.aabbNeedsUpdate=!1};var v=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(E){var N=this.invInertia;if(!(N.x===N.y&&N.y===N.z&&!E)){var F=v,Y=m;F.setRotationFromQuaternion(this.quaternion),F.transpose(Y),F.scale(N,F),F.mmult(Y,this.invInertiaWorld)}};var p=new a,g=new a;l.prototype.applyForce=function(E,N){if(this.type===l.DYNAMIC){var F=p;N.vsub(this.position,F);var Y=g;F.cross(E,Y),this.force.vadd(E,this.force),this.torque.vadd(Y,this.torque)}};var M=new a,_=new a;l.prototype.applyLocalForce=function(E,N){if(this.type===l.DYNAMIC){var F=M,Y=_;this.vectorToWorldFrame(E,F),this.pointToWorldFrame(N,Y),this.applyForce(F,Y)}};var w=new a,A=new a,U=new a;l.prototype.applyImpulse=function(E,N){if(this.type===l.DYNAMIC){var F=w;N.vsub(this.position,F);var Y=A;Y.copy(E),Y.mult(this.invMass,Y),this.velocity.vadd(Y,this.velocity);var W=U;F.cross(E,W),this.invInertiaWorld.vmult(W,W),this.angularVelocity.vadd(W,this.angularVelocity)}};var D=new a,b=new a;l.prototype.applyLocalImpulse=function(E,N){if(this.type===l.DYNAMIC){var F=D,Y=b;this.vectorToWorldFrame(E,F),this.pointToWorldFrame(N,Y),this.applyImpulse(F,Y)}};var y=new a;l.prototype.updateMassProperties=function(){var E=y;this.invMass=this.mass>0?1/this.mass:0;var N=this.inertia,F=this.fixedRotation;this.computeAABB(),E.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(E,this.mass,N),this.invInertia.set(N.x>0&&!F?1/N.x:0,N.y>0&&!F?1/N.y:0,N.z>0&&!F?1/N.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(E,N){var F=new a;return E.vsub(this.position,F),this.angularVelocity.cross(F,N),this.velocity.vadd(N,N),N}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,s){e("./Body");var r=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=u;function u(z){this.chassisBody=z.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof z.indexRightAxis<"u"?z.indexRightAxis:1,this.indexForwardAxis=typeof z.indexForwardAxis<"u"?z.indexForwardAxis:0,this.indexUpAxis=typeof z.indexUpAxis<"u"?z.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,f=new r;new o,u.prototype.addWheel=function(z){z=z||{};var P=new c(z),J=this.wheelInfos.length;return this.wheelInfos.push(P),J},u.prototype.setSteeringValue=function(z,P){var J=this.wheelInfos[P];J.steering=z},new r,u.prototype.applyEngineForce=function(z,P){this.wheelInfos[P].engineForce=z},u.prototype.setBrake=function(z,P){this.wheelInfos[P].brake=z},u.prototype.addToWorld=function(z){this.constraints,z.add(this.chassisBody);var P=this;this.preStepCallback=function(){P.updateVehicle(z.dt)},z.addEventListener("preStep",this.preStepCallback),this.world=z},u.prototype.getVehicleAxisWorld=function(z,P){P.set(z===0?1:0,z===1?1:0,z===2?1:0),this.chassisBody.vectorToWorldFrame(P,P)},u.prototype.updateVehicle=function(z){for(var P=this.wheelInfos,J=P.length,K=this.chassisBody,O=0;O<J;O++)this.updateWheelTransform(O);this.currentVehicleSpeedKmHour=3.6*K.velocity.norm();var tt=new r;this.getVehicleAxisWorld(this.indexForwardAxis,tt),tt.dot(K.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var O=0;O<J;O++)this.castRay(P[O]);this.updateSuspension(z);for(var V=new r,B=new r,O=0;O<J;O++){var I=P[O],L=I.suspensionForce;L>I.maxSuspensionForce&&(L=I.maxSuspensionForce),I.raycastResult.hitNormalWorld.scale(L*z,V),I.raycastResult.hitPointWorld.vsub(K.position,B),K.applyImpulse(V,I.raycastResult.hitPointWorld)}this.updateFriction(z);var k=new r,j=new r,X=new r;for(O=0;O<J;O++){var I=P[O];K.getVelocityAtWorldPoint(I.chassisConnectionPointWorld,X);var et=1;switch(this.indexUpAxis){case 1:et=-1;break}if(I.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,j);var lt=j.dot(I.raycastResult.hitNormalWorld);I.raycastResult.hitNormalWorld.scale(lt,k),j.vsub(k,j);var Ht=j.dot(X);I.deltaRotation=et*Ht*z/I.radius}(I.sliding||!I.isInContact)&&I.engineForce!==0&&I.useCustomSlidingRotationalSpeed&&(I.deltaRotation=(I.engineForce>0?1:-1)*I.customSlidingRotationalSpeed*z),Math.abs(I.brake)>Math.abs(I.engineForce)&&(I.deltaRotation=0),I.rotation+=I.deltaRotation,I.deltaRotation*=.99}},u.prototype.updateSuspension=function(z){for(var P=this.chassisBody,J=P.mass,K=this.wheelInfos,O=K.length,tt=0;tt<O;tt++){var V=K[tt];if(V.isInContact){var B,I=V.suspensionRestLength,L=V.suspensionLength,k=I-L;B=V.suspensionStiffness*k*V.clippedInvContactDotSuspension;var j=V.suspensionRelativeVelocity,X;j<0?X=V.dampingCompression:X=V.dampingRelaxation,B-=X*j,V.suspensionForce=B*J,V.suspensionForce<0&&(V.suspensionForce=0)}else V.suspensionForce=0}},u.prototype.removeFromWorld=function(z){this.constraints,z.remove(this.chassisBody),z.removeEventListener("preStep",this.preStepCallback),this.world=null};var d=new r,x=new r;u.prototype.castRay=function(z){var P=d,J=x;this.updateWheelTransformWorld(z);var K=this.chassisBody,O=-1,tt=z.suspensionRestLength+z.radius;z.directionWorld.scale(tt,P);var V=z.chassisConnectionPointWorld;V.vadd(P,J);var B=z.raycastResult;B.reset();var I=K.collisionResponse;K.collisionResponse=!1,this.world.rayTest(V,J,B),K.collisionResponse=I;var L=B.body;if(z.raycastResult.groundObject=0,L){O=B.distance,z.raycastResult.hitNormalWorld=B.hitNormalWorld,z.isInContact=!0;var k=B.distance;z.suspensionLength=k-z.radius;var j=z.suspensionRestLength-z.maxSuspensionTravel,X=z.suspensionRestLength+z.maxSuspensionTravel;z.suspensionLength<j&&(z.suspensionLength=j),z.suspensionLength>X&&(z.suspensionLength=X,z.raycastResult.reset());var et=z.raycastResult.hitNormalWorld.dot(z.directionWorld),lt=new r;K.getVelocityAtWorldPoint(z.raycastResult.hitPointWorld,lt);var Ht=z.raycastResult.hitNormalWorld.dot(lt);if(et>=-.1)z.suspensionRelativeVelocity=0,z.clippedInvContactDotSuspension=1/.1;else{var pt=-1/et;z.suspensionRelativeVelocity=Ht*pt,z.clippedInvContactDotSuspension=pt}}else z.suspensionLength=z.suspensionRestLength+0*z.maxSuspensionTravel,z.suspensionRelativeVelocity=0,z.directionWorld.scale(-1,z.raycastResult.hitNormalWorld),z.clippedInvContactDotSuspension=1;return O},u.prototype.updateWheelTransformWorld=function(z){z.isInContact=!1;var P=this.chassisBody;P.pointToWorldFrame(z.chassisConnectionPointLocal,z.chassisConnectionPointWorld),P.vectorToWorldFrame(z.directionLocal,z.directionWorld),P.vectorToWorldFrame(z.axleLocal,z.axleWorld)},u.prototype.updateWheelTransform=function(z){var P=h,J=l,K=f,O=this.wheelInfos[z];this.updateWheelTransformWorld(O),O.directionLocal.scale(-1,P),J.copy(O.axleLocal),P.cross(J,K),K.normalize(),J.normalize();var tt=O.steering,V=new a;V.setFromAxisAngle(P,tt);var B=new a;B.setFromAxisAngle(J,O.rotation);var I=O.worldTransform.quaternion;this.chassisBody.quaternion.mult(V,I),I.mult(B,I),I.normalize();var L=O.worldTransform.position;L.copy(O.directionWorld),L.scale(O.suspensionLength,L),L.vadd(O.chassisConnectionPointWorld,L)};var v=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];u.prototype.getWheelTransformWorld=function(z){return this.wheelInfos[z].worldTransform};var m=new r,p=[],g=[],M=1;u.prototype.updateFriction=function(z){for(var P=m,J=this.wheelInfos,K=J.length,O=this.chassisBody,tt=g,V=p,B=0;B<K;B++){var I=J[B],L=I.raycastResult.body;I.sideImpulse=0,I.forwardImpulse=0,tt[B]||(tt[B]=new r),V[B]||(V[B]=new r)}for(var B=0;B<K;B++){var I=J[B],L=I.raycastResult.body;if(L){var k=V[B],j=this.getWheelTransformWorld(B);j.vectorToWorldFrame(v[this.indexRightAxis],k);var X=I.raycastResult.hitNormalWorld,et=k.dot(X);X.scale(et,P),k.vsub(P,k),k.normalize(),X.cross(k,tt[B]),tt[B].normalize(),I.sideImpulse=nt(O,I.raycastResult.hitPointWorld,L,I.raycastResult.hitPointWorld,k),I.sideImpulse*=M}}var lt=1,Ht=.5;this.sliding=!1;for(var B=0;B<K;B++){var I=J[B],L=I.raycastResult.body,pt=0;if(I.slipInfo=1,L){var vt=0,R=I.brake?I.brake:vt;pt=U(O,L,I.raycastResult.hitPointWorld,tt[B],R),pt+=I.engineForce*z;var ut=R/pt;I.slipInfo*=ut}if(I.forwardImpulse=0,I.skidInfo=1,L){I.skidInfo=1;var qt=I.suspensionForce*z*I.frictionSlip,kt=qt,Rt=qt*kt;I.forwardImpulse=pt;var wt=I.forwardImpulse*Ht,Ct=I.sideImpulse*lt,Xt=wt*wt+Ct*Ct;if(I.sliding=!1,Xt>Rt){this.sliding=!0,I.sliding=!0;var ut=qt/Math.sqrt(Xt);I.skidInfo*=ut}}}if(this.sliding)for(var B=0;B<K;B++){var I=J[B];I.sideImpulse!==0&&I.skidInfo<1&&(I.forwardImpulse*=I.skidInfo,I.sideImpulse*=I.skidInfo)}for(var B=0;B<K;B++){var I=J[B],C=new r;if(C.copy(I.raycastResult.hitPointWorld),I.forwardImpulse!==0){var S=new r;tt[B].scale(I.forwardImpulse,S),O.applyImpulse(S,C)}if(I.sideImpulse!==0){var L=I.raycastResult.body,q=new r;q.copy(I.raycastResult.hitPointWorld);var st=new r;V[B].scale(I.sideImpulse,st),O.pointToLocalFrame(C,C),C["xyz"[this.indexUpAxis]]*=I.rollInfluence,O.pointToWorldFrame(C,C),O.applyImpulse(st,C),st.scale(-1,st),L.applyImpulse(st,q)}}};var _=new r,w=new r,A=new r;function U(z,P,J,K,O){var tt=0,V=J,B=_,I=w,L=A;z.getVelocityAtWorldPoint(V,B),P.getVelocityAtWorldPoint(V,I),B.vsub(I,L);var k=K.dot(L),j=N(z,J,K),X=N(P,J,K),et=1,lt=et/(j+X);return tt=-k*lt,O<tt&&(tt=O),tt<-O&&(tt=-O),tt}var D=new r,b=new r,y=new r,E=new r;function N(z,P,J){var K=D,O=b,tt=y,V=E;return P.vsub(z.position,K),K.cross(J,O),z.invInertiaWorld.vmult(O,V),V.cross(K,tt),z.invMass+J.dot(tt)}var F=new r,Y=new r,W=new r;function nt(z,P,J,K,O,et){var V=O.norm2();if(V>1.1)return 0;var B=F,I=Y,L=W;z.getVelocityAtWorldPoint(P,B),J.getVelocityAtWorldPoint(K,I),B.vsub(I,L);var k=O.dot(L),j=.2,X=1/(z.invMass+J.invMass),et=-j*k*X;return et}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,s){var r=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=h;function h(d){if(this.wheelBodies=[],this.coordinateSystem=typeof d.coordinateSystem>"u"?new c(1,2,3):d.coordinateSystem.clone(),this.chassisBody=d.chassisBody,!this.chassisBody){var x=new o(new c(5,2,.5));this.chassisBody=new r(1,x)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(d){d=d||{};var x=d.body;x||(x=new r(1,new a(1.2))),this.wheelBodies.push(x),this.wheelForces.push(0),new c;var v=typeof d.position<"u"?d.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(v,m),x.position.set(m.x,m.y,m.z);var p=typeof d.axis<"u"?d.axis.clone():new c(0,1,0);this.wheelAxes.push(p);var g=new u(this.chassisBody,x,{pivotA:v,axisA:p,pivotB:c.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(g),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(d,x){var v=this.wheelAxes[x],m=Math.cos(d),p=Math.sin(d),g=v.x,M=v.y;this.constraints[x].axisA.set(m*g-p*M,p*g+m*M,0)},h.prototype.setMotorSpeed=function(d,x){var v=this.constraints[x];v.enableMotor(),v.motorTargetVelocity=d},h.prototype.disableMotor=function(d){var x=this.constraints[d];x.disableMotor()};var l=new c;h.prototype.setWheelForce=function(d,x){this.wheelForces[x]=d},h.prototype.applyWheelForce=function(d,x){var v=this.wheelAxes[x],m=this.wheelBodies[x],p=m.torque;v.scale(d,l),m.vectorToWorldFrame(l,l),p.vadd(l,p)},h.prototype.addToWorld=function(d){for(var x=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),m=0;m<v.length;m++)d.add(v[m]);for(var m=0;m<x.length;m++)d.addConstraint(x[m]);d.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var d=this.wheelForces,x=0;x<d.length;x++)this.applyWheelForce(d[x],x)},h.prototype.removeFromWorld=function(d){for(var x=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),m=0;m<v.length;m++)d.remove(v[m]);for(var m=0;m<x.length;m++)d.removeConstraint(x[m])};var f=new c;h.prototype.getWheelSpeed=function(d){var x=this.wheelAxes[d],v=this.wheelBodies[d],m=v.angularVelocity;return this.chassisBody.vectorToWorldFrame(x,f),m.dot(f)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,s){n.exports=a,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(x){this.particles.push(x),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(x){var v=this.particles.indexOf(x);v!==-1&&(this.particles.splice(v,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(x,v){for(var m=this.particles.length,p=x.id,g=this.smoothingRadius*this.smoothingRadius,M=o,_=0;_!==m;_++){var w=this.particles[_];w.position.vsub(x.position,M),p!==w.id&&M.norm2()<g&&v.push(w)}};var c=new r,u=new r,h=new r,l=new r,f=new r,d=new r;a.prototype.update=function(){for(var x=this.particles.length,v=c,m=this.speedOfSound,p=this.eps,g=0;g!==x;g++){var M=this.particles[g],_=this.neighbors[g];_.length=0,this.getNeighbors(M,_),_.push(this.particles[g]);for(var w=_.length,A=0,U=0;U!==w;U++){M.position.vsub(_[U].position,v);var D=v.norm(),b=this.w(D);A+=_[U].mass*b}this.densities[g]=A,this.pressures[g]=m*m*(this.densities[g]-this.density)}for(var y=u,E=h,N=l,F=f,Y=d,g=0;g!==x;g++){var W=this.particles[g];y.set(0,0,0),E.set(0,0,0);for(var nt,z,_=this.neighbors[g],w=_.length,U=0;U!==w;U++){var P=_[U];W.position.vsub(P.position,F);var J=F.norm();nt=-P.mass*(this.pressures[g]/(this.densities[g]*this.densities[g]+p)+this.pressures[U]/(this.densities[U]*this.densities[U]+p)),this.gradw(F,N),N.mult(nt,N),y.vadd(N,y),P.velocity.vsub(W.velocity,Y),Y.mult(1/(1e-4+this.densities[g]*this.densities[U])*this.viscosity*P.mass,Y),z=this.nablaw(J),Y.mult(z,Y),E.vadd(Y,E)}E.mult(W.mass,E),y.mult(W.mass,y),W.force.vadd(E,W.force),W.force.vadd(y,W.force)}},a.prototype.w=function(x){var v=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(v,9))*Math.pow(v*v-x*x,3)},a.prototype.gradw=function(x,v){var m=x.norm(),p=this.smoothingRadius;x.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),v)},a.prototype.nablaw=function(x){var v=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(v,9))*(v*v-x*x)*(7*x*x-3*v*v);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(g,M,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=g,this.bodyB=M,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}a.prototype.setWorldAnchorA=function(g){this.bodyA.pointToLocalFrame(g,this.localAnchorA)},a.prototype.setWorldAnchorB=function(g){this.bodyB.pointToLocalFrame(g,this.localAnchorB)},a.prototype.getWorldAnchorA=function(g){this.bodyA.pointToWorldFrame(this.localAnchorA,g)},a.prototype.getWorldAnchorB=function(g){this.bodyB.pointToWorldFrame(this.localAnchorB,g)};var o=new r,c=new r,u=new r,h=new r,l=new r,f=new r,d=new r,x=new r,v=new r,m=new r,p=new r;a.prototype.applyForce=function(){var g=this.stiffness,M=this.damping,_=this.restLength,w=this.bodyA,A=this.bodyB,U=o,D=c,b=u,y=h,E=p,N=l,F=f,Y=d,W=x,nt=v,z=m;this.getWorldAnchorA(N),this.getWorldAnchorB(F),N.vsub(w.position,Y),F.vsub(A.position,W),F.vsub(N,U);var P=U.norm();D.copy(U),D.normalize(),A.velocity.vsub(w.velocity,b),A.angularVelocity.cross(W,E),b.vadd(E,b),w.angularVelocity.cross(Y,E),b.vsub(E,b),D.mult(-g*(P-_)-M*b.dot(D),y),w.force.vsub(y,w.force),A.force.vadd(y,A.force),Y.cross(y,nt),W.cross(y,z),w.torque.vsub(nt,w.torque),A.torque.vadd(z,A.torque)}},{"../math/Vec3":30}],36:[function(e,n,s){var r=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=u;function u(f){f=c.defaults(f,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=f.maxSuspensionTravel,this.customSlidingRotationalSpeed=f.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=f.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=f.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=f.chassisConnectionPointWorld.clone(),this.directionLocal=f.directionLocal.clone(),this.directionWorld=f.directionWorld.clone(),this.axleLocal=f.axleLocal.clone(),this.axleWorld=f.axleWorld.clone(),this.suspensionRestLength=f.suspensionRestLength,this.suspensionMaxLength=f.suspensionMaxLength,this.radius=f.radius,this.suspensionStiffness=f.suspensionStiffness,this.dampingCompression=f.dampingCompression,this.dampingRelaxation=f.dampingRelaxation,this.frictionSlip=f.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=f.rollInfluence,this.maxSuspensionForce=f.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=f.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var l=new r,h=new r,l=new r;u.prototype.updateWheel=function(f){var d=this.raycastResult;if(this.isInContact){var x=d.hitNormalWorld.dot(d.directionWorld);d.hitPointWorld.vsub(f.position,h),f.getVelocityAtWorldPoint(h,l);var v=d.hitNormalWorld.dot(l);if(x>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/x;this.suspensionRelativeVelocity=v*m,this.clippedInvContactDotSuspension=m}}else d.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,d.directionWorld.scale(-1,d.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,f=this.halfExtents.y,d=this.halfExtents.z,x=a,v=[new x(-l,-f,-d),new x(l,-f,-d),new x(l,f,-d),new x(-l,f,-d),new x(-l,-f,d),new x(l,-f,d),new x(l,f,d),new x(-l,f,d)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new x(0,0,1),new x(0,1,0),new x(1,0,0);var p=new o(v,m);this.convexPolyhedronRepresentation=p,p.material=this.material},c.prototype.calculateLocalInertia=function(l,f){return f=f||new a,c.calculateInertia(this.halfExtents,l,f),f},c.calculateInertia=function(l,f,d){var x=l;d.x=1/12*f*(2*x.y*2*x.y+2*x.z*2*x.z),d.y=1/12*f*(2*x.x*2*x.x+2*x.z*2*x.z),d.z=1/12*f*(2*x.y*2*x.y+2*x.x*2*x.x)},c.prototype.getSideNormals=function(l,f){var d=l,x=this.halfExtents;if(d[0].set(x.x,0,0),d[1].set(0,x.y,0),d[2].set(0,0,x.z),d[3].set(-x.x,0,0),d[4].set(0,-x.y,0),d[5].set(0,0,-x.z),f!==void 0)for(var v=0;v!==d.length;v++)f.vmult(d[v],d[v]);return d},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new a;new a,c.prototype.forEachWorldCorner=function(l,f,d){for(var x=this.halfExtents,v=[[x.x,x.y,x.z],[-x.x,x.y,x.z],[-x.x,-x.y,x.z],[-x.x,-x.y,-x.z],[x.x,-x.y,-x.z],[x.x,x.y,-x.z],[-x.x,x.y,-x.z],[x.x,-x.y,x.z]],m=0;m<v.length;m++)u.set(v[m][0],v[m][1],v[m][2]),f.vmult(u,u),l.vadd(u,u),d(u.x,u.y,u.z)};var h=[new a,new a,new a,new a,new a,new a,new a,new a];c.prototype.calculateWorldAABB=function(l,f,d,x){var v=this.halfExtents;h[0].set(v.x,v.y,v.z),h[1].set(-v.x,v.y,v.z),h[2].set(-v.x,-v.y,v.z),h[3].set(-v.x,-v.y,-v.z),h[4].set(v.x,-v.y,-v.z),h[5].set(v.x,v.y,-v.z),h[6].set(-v.x,v.y,-v.z),h[7].set(v.x,-v.y,v.z);var m=h[0];f.vmult(m,m),l.vadd(m,m),x.copy(m),d.copy(m);for(var p=1;p<8;p++){var m=h[p];f.vmult(m,m),l.vadd(m,m);var g=m.x,M=m.y,_=m.z;g>x.x&&(x.x=g),M>x.y&&(x.y=M),_>x.z&&(x.z=_),g<d.x&&(d.x=g),M<d.y&&(d.y=M),_<d.z&&(d.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(O,tt,V){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=O||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=tt||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=V?V.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var u=new a;c.prototype.computeEdges=function(){var O=this.faces,tt=this.vertices;tt.length;var V=this.uniqueEdges;V.length=0;for(var B=u,I=0;I!==O.length;I++)for(var L=O[I],k=L.length,j=0;j!==k;j++){var X=(j+1)%k;tt[L[j]].vsub(tt[L[X]],B),B.normalize();for(var et=!1,lt=0;lt!==V.length;lt++)if(V[lt].almostEquals(B)||V[lt].almostEquals(B)){et=!0;break}et||V.push(B.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var O=0;O<this.faces.length;O++){for(var tt=0;tt<this.faces[O].length;tt++)if(!this.vertices[this.faces[O][tt]])throw new Error("Vertex "+this.faces[O][tt]+" not found!");var V=this.faceNormals[O]||new a;this.getFaceNormal(O,V),V.negate(V),this.faceNormals[O]=V;var B=this.vertices[this.faces[O][0]];if(V.dot(B)<0){console.error(".faceNormals["+O+"] = Vec3("+V.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var tt=0;tt<this.faces[O].length;tt++)console.warn(".vertices["+this.faces[O][tt]+"] = Vec3("+this.vertices[this.faces[O][tt]].toString()+")")}}};var h=new a,l=new a;c.computeNormal=function(O,tt,V,B){tt.vsub(O,l),V.vsub(tt,h),h.cross(l,B),B.isZero()||B.normalize()},c.prototype.getFaceNormal=function(O,tt){var V=this.faces[O],B=this.vertices[V[0]],I=this.vertices[V[1]],L=this.vertices[V[2]];return c.computeNormal(B,I,L,tt)};var f=new a;c.prototype.clipAgainstHull=function(O,tt,V,B,I,L,k,j,X){for(var et=f,lt=-1,Ht=-Number.MAX_VALUE,pt=0;pt<V.faces.length;pt++){et.copy(V.faceNormals[pt]),I.vmult(et,et);var vt=et.dot(L);vt>Ht&&(Ht=vt,lt=pt)}for(var R=[],ut=V.faces[lt],qt=ut.length,kt=0;kt<qt;kt++){var Rt=V.vertices[ut[kt]],wt=new a;wt.copy(Rt),I.vmult(wt,wt),B.vadd(wt,wt),R.push(wt)}lt>=0&&this.clipFaceAgainstHull(L,O,tt,R,k,j,X)};var d=new a,x=new a,v=new a,m=new a,p=new a,g=new a;c.prototype.findSeparatingAxis=function(O,tt,V,B,I,L,k,j){var X=d,et=x,lt=v,Ht=m,pt=p,vt=g,R=Number.MAX_VALUE,ut=this;if(ut.uniqueAxes)for(var kt=0;kt!==ut.uniqueAxes.length;kt++){V.vmult(ut.uniqueAxes[kt],X);var wt=ut.testSepAxis(X,O,tt,V,B,I);if(wt===!1)return!1;wt<R&&(R=wt,L.copy(X))}else for(var qt=k?k.length:ut.faces.length,kt=0;kt<qt;kt++){var Rt=k?k[kt]:kt;X.copy(ut.faceNormals[Rt]),V.vmult(X,X);var wt=ut.testSepAxis(X,O,tt,V,B,I);if(wt===!1)return!1;wt<R&&(R=wt,L.copy(X))}if(O.uniqueAxes)for(var kt=0;kt!==O.uniqueAxes.length;kt++){I.vmult(O.uniqueAxes[kt],et);var wt=ut.testSepAxis(et,O,tt,V,B,I);if(wt===!1)return!1;wt<R&&(R=wt,L.copy(et))}else for(var Ct=j?j.length:O.faces.length,kt=0;kt<Ct;kt++){var Rt=j?j[kt]:kt;et.copy(O.faceNormals[Rt]),I.vmult(et,et);var wt=ut.testSepAxis(et,O,tt,V,B,I);if(wt===!1)return!1;wt<R&&(R=wt,L.copy(et))}for(var Xt=0;Xt!==ut.uniqueEdges.length;Xt++){V.vmult(ut.uniqueEdges[Xt],Ht);for(var C=0;C!==O.uniqueEdges.length;C++)if(I.vmult(O.uniqueEdges[C],pt),Ht.cross(pt,vt),!vt.almostZero()){vt.normalize();var S=ut.testSepAxis(vt,O,tt,V,B,I);if(S===!1)return!1;S<R&&(R=S,L.copy(vt))}}return B.vsub(tt,lt),lt.dot(L)>0&&L.negate(L),!0};var M=[],_=[];c.prototype.testSepAxis=function(O,tt,V,B,I,L){var k=this;c.project(k,O,V,B,M),c.project(tt,O,I,L,_);var j=M[0],X=M[1],et=_[0],lt=_[1],Ht=j-lt,pt=et-X,vt=Ht<pt?Ht:pt;return vt};var w=new a,A=new a;c.prototype.calculateLocalInertia=function(O,tt){this.computeLocalAABB(w,A);var V=A.x-w.x,B=A.y-w.y,I=A.z-w.z;tt.x=1/12*O*(2*B*2*B+2*I*2*I),tt.y=1/12*O*(2*V*2*V+2*I*2*I),tt.z=1/12*O*(2*B*2*B+2*V*2*V)},c.prototype.getPlaneConstantOfFace=function(O){var tt=this.faces[O],V=this.faceNormals[O],B=this.vertices[tt[0]],I=-V.dot(B);return I};var U=new a,D=new a,b=new a,y=new a,E=new a,N=new a,F=new a,Y=new a;c.prototype.clipFaceAgainstHull=function(O,tt,V,B,I,L,k){for(var j=U,X=D,et=b,lt=y,Ht=E,pt=N,vt=F,R=Y,ut=this,qt=[],kt=B,Rt=qt,wt=-1,Ct=Number.MAX_VALUE,Xt=0;Xt<ut.faces.length;Xt++){j.copy(ut.faceNormals[Xt]),V.vmult(j,j);var C=j.dot(O);C<Ct&&(Ct=C,wt=Xt)}if(!(wt<0)){var S=ut.faces[wt];S.connectedFaces=[];for(var q=0;q<ut.faces.length;q++)for(var st=0;st<ut.faces[q].length;st++)S.indexOf(ut.faces[q][st])!==-1&&q!==wt&&S.connectedFaces.indexOf(q)===-1&&S.connectedFaces.push(q);kt.length;for(var ot=S.length,rt=0;rt<ot;rt++){var Kt=ut.vertices[S[rt]],It=ut.vertices[S[(rt+1)%ot]];Kt.vsub(It,X),et.copy(X),V.vmult(et,et),tt.vadd(et,et),lt.copy(this.faceNormals[wt]),V.vmult(lt,lt),tt.vadd(lt,lt),et.cross(lt,Ht),Ht.negate(Ht),pt.copy(Kt),V.vmult(pt,pt),tt.vadd(pt,pt),-pt.dot(Ht);var dt;{var te=S.connectedFaces[rt];vt.copy(this.faceNormals[te]);var Jt=this.getPlaneConstantOfFace(te);R.copy(vt),V.vmult(R,R);var dt=Jt-R.dot(tt)}for(this.clipFaceAgainstPlane(kt,Rt,R,dt);kt.length;)kt.shift();for(;Rt.length;)kt.push(Rt.shift())}vt.copy(this.faceNormals[wt]);var Jt=this.getPlaneConstantOfFace(wt);R.copy(vt),V.vmult(R,R);for(var dt=Jt-R.dot(tt),q=0;q<kt.length;q++){var St=R.dot(kt[q])+dt;if(St<=I&&(console.log("clamped: depth="+St+" to minDist="+(I+"")),St=I),St<=L){var ae=kt[q];if(St<=0){var ee={point:ae,normal:R,depth:St};k.push(ee)}}}}},c.prototype.clipFaceAgainstPlane=function(O,tt,V,B){var I,L,k=O.length;if(k<2)return tt;var j=O[O.length-1],X=O[0];I=V.dot(j)+B;for(var et=0;et<k;et++){if(X=O[et],L=V.dot(X)+B,I<0)if(L<0){var lt=new a;lt.copy(X),tt.push(lt)}else{var lt=new a;j.lerp(X,I/(I-L),lt),tt.push(lt)}else if(L<0){var lt=new a;j.lerp(X,I/(I-L),lt),tt.push(lt),tt.push(X)}j=X,I=L}return tt},c.prototype.computeWorldVertices=function(O,tt){for(var V=this.vertices.length;this.worldVertices.length<V;)this.worldVertices.push(new a);for(var B=this.vertices,I=this.worldVertices,L=0;L!==V;L++)tt.vmult(B[L],I[L]),O.vadd(I[L],I[L]);this.worldVerticesNeedsUpdate=!1},new a,c.prototype.computeLocalAABB=function(O,tt){var V=this.vertices.length,B=this.vertices;O.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),tt.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var I=0;I<V;I++){var L=B[I];L.x<O.x?O.x=L.x:L.x>tt.x&&(tt.x=L.x),L.y<O.y?O.y=L.y:L.y>tt.y&&(tt.y=L.y),L.z<O.z?O.z=L.z:L.z>tt.z&&(tt.z=L.z)}},c.prototype.computeWorldFaceNormals=function(O){for(var tt=this.faceNormals.length;this.worldFaceNormals.length<tt;)this.worldFaceNormals.push(new a);for(var V=this.faceNormals,B=this.worldFaceNormals,I=0;I!==tt;I++)O.vmult(V[I],B[I]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var O=0,tt=this.vertices,V=0,B=tt.length;V!==B;V++){var I=tt[V].norm2();I>O&&(O=I)}this.boundingSphereRadius=Math.sqrt(O)};var W=new a;c.prototype.calculateWorldAABB=function(O,tt,V,B){for(var I=this.vertices.length,L=this.vertices,k,j,X,et,lt,Ht,pt=0;pt<I;pt++){W.copy(L[pt]),tt.vmult(W,W),O.vadd(W,W);var vt=W;vt.x<k||k===void 0?k=vt.x:(vt.x>et||et===void 0)&&(et=vt.x),vt.y<j||j===void 0?j=vt.y:(vt.y>lt||lt===void 0)&&(lt=vt.y),vt.z<X||X===void 0?X=vt.z:(vt.z>Ht||Ht===void 0)&&(Ht=vt.z)}V.set(k,j,X),B.set(et,lt,Ht)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(O){O=O||new a;for(var tt=this.vertices.length,V=this.vertices,B=0;B<tt;B++)O.vadd(V[B],O);return O.mult(1/tt,O),O},c.prototype.transformAllPoints=function(O,tt){var V=this.vertices.length,B=this.vertices;if(tt){for(var I=0;I<V;I++){var L=B[I];tt.vmult(L,L)}for(var I=0;I<this.faceNormals.length;I++){var L=this.faceNormals[I];tt.vmult(L,L)}}if(O)for(var I=0;I<V;I++){var L=B[I];L.vadd(O,L)}};var nt=new a,z=new a,P=new a;c.prototype.pointIsInside=function(O){var tt=this.vertices.length,V=this.vertices,B=this.faces,I=this.faceNormals,L=null,k=this.faces.length,j=nt;this.getAveragePointLocal(j);for(var X=0;X<k;X++){this.faces[X].length;var tt=I[X],et=V[B[X][0]],lt=z;O.vsub(et,lt);var Ht=tt.dot(lt),pt=P;j.vsub(et,pt);var vt=tt.dot(pt);if(Ht<0&&vt>0||Ht>0&&vt<0)return!1}return L?1:-1},new a;var J=new a,K=new a;c.project=function(O,tt,V,B,I){var L=O.vertices.length,k=J,j=0,X=0,et=K,lt=O.vertices;et.setZero(),o.vectorToLocalFrame(V,B,tt,k),o.pointToLocalFrame(V,B,et,et);var Ht=et.dot(k);X=j=lt[0].dot(k);for(var pt=1;pt<L;pt++){var vt=lt[pt].dot(k);vt>j&&(j=vt),vt<X&&(X=vt)}if(X-=Ht,j-=Ht,X>j){var R=X;X=j,j=R}I[0]=j,I[1]=X}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(u,h,l,f){var d=f,x=[],v=[],m=[],p=[],g=[],M=Math.cos,_=Math.sin;x.push(new a(h*M(0),h*_(0),-l*.5)),p.push(0),x.push(new a(u*M(0),u*_(0),l*.5)),g.push(1);for(var w=0;w<d;w++){var A=2*Math.PI/d*(w+1),U=2*Math.PI/d*(w+.5);w<d-1?(x.push(new a(h*M(A),h*_(A),-l*.5)),p.push(2*w+2),x.push(new a(u*M(A),u*_(A),l*.5)),g.push(2*w+3),m.push([2*w+2,2*w+3,2*w+1,2*w])):m.push([0,1,2*w+1,2*w]),(d%2===1||w<d/2)&&v.push(new a(M(U),_(U),0))}m.push(g),v.push(new a(0,0,1));for(var D=[],w=0;w<p.length;w++)D.push(p[p.length-w-1]);m.push(D),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,x,m,v)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,s){var r=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=u;function u(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new r,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],f=0;f!==h.length;f++)for(var d=0;d!==h[f].length;d++){var x=h[f][d];x<l&&(l=x)}this.minValue=l},u.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],f=0;f!==h.length;f++)for(var d=0;d!==h[f].length;d++){var x=h[f][d];x>l&&(l=x)}this.maxValue=l},u.prototype.setHeightValueAtIndex=function(h,l,f){var d=this.data;d[h][l]=f,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},u.prototype.getRectMinMax=function(h,l,f,d,x){x=x||[];for(var v=this.data,m=this.minValue,p=h;p<=f;p++)for(var g=l;g<=d;g++){var M=v[p][g];M>m&&(m=M)}x[0]=this.minValue,x[1]=m},u.prototype.getIndexOfPosition=function(h,l,f,d){var x=this.elementSize,v=this.data,m=Math.floor(h/x),p=Math.floor(l/x);return f[0]=m,f[1]=p,d&&(m<0&&(m=0),p<0&&(p=0),m>=v.length-1&&(m=v.length-1),p>=v[0].length-1&&(p=v[0].length-1)),!(m<0||p<0||m>=v.length-1||p>=v[0].length-1)},u.prototype.getHeightAt=function(h,l,f){var d=[];this.getIndexOfPosition(h,l,d,f);var x=[];return this.getRectMinMax(d[0],d[1]+1,d[0],d[1]+1,x),(x[0]+x[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(h,l,f){return h+"_"+l+"_"+(f?1:0)},u.prototype.getCachedConvexTrianglePillar=function(h,l,f){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,f)]},u.prototype.setCachedConvexTrianglePillar=function(h,l,f,d,x){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,f)]={convex:d,offset:x}},u.prototype.clearCachedConvexTrianglePillar=function(h,l,f){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,f)]},u.prototype.getConvexTrianglePillar=function(h,l,f){var d=this.pillarConvex,x=this.pillarOffset;if(this.cacheEnabled){var v=this.getCachedConvexTrianglePillar(h,l,f);if(v){this.pillarConvex=v.convex,this.pillarOffset=v.offset;return}d=new a,x=new o,this.pillarConvex=d,this.pillarOffset=x}var v=this.data,m=this.elementSize,p=d.faces;d.vertices.length=6;for(var g=0;g<6;g++)d.vertices[g]||(d.vertices[g]=new o);p.length=5;for(var g=0;g<5;g++)p[g]||(p[g]=[]);var M=d.vertices,_=(Math.min(v[h][l],v[h+1][l],v[h][l+1],v[h+1][l+1])-this.minValue)/2+this.minValue;f?(x.set((h+.75)*m,(l+.75)*m,_),M[0].set(.25*m,.25*m,v[h+1][l+1]-_),M[1].set(-.75*m,.25*m,v[h][l+1]-_),M[2].set(.25*m,-.75*m,v[h+1][l]-_),M[3].set(.25*m,.25*m,-_-1),M[4].set(-.75*m,.25*m,-_-1),M[5].set(.25*m,-.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(x.set((h+.25)*m,(l+.25)*m,_),M[0].set(-.25*m,-.25*m,v[h][l]-_),M[1].set(.75*m,-.25*m,v[h+1][l]-_),M[2].set(-.25*m,.75*m,v[h][l+1]-_),M[3].set(-.25*m,-.25*m,-_-1),M[4].set(.75*m,-.25*m,-_-1),M[5].set(-.25*m,.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),d.computeNormals(),d.computeEdges(),d.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,f,d,x)},u.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(h,l,f,d){f.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),d.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){return u=u||new a,u.set(0,0,0),u},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,u,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(u){var h=this.worldNormal;h.set(0,0,1),u.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(u,h){return h=h||new a,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new a;o.prototype.calculateWorldAABB=function(u,h,l,f){c.set(0,0,1),h.vmult(c,c);var d=Number.MAX_VALUE;l.set(-d,-d,-d),f.set(d,d,d),c.x===1&&(f.x=u.x),c.y===1&&(f.y=u.y),c.z===1&&(f.z=u.z),c.x===-1&&(l.x=u.x),c.y===-1&&(l.y=u.y),c.z===-1&&(l.z=u.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,s){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){u=u||new a;var h=2*c*this.radius*this.radius/5;return u.x=h,u.y=h,u.z=h,u},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,u,h,l){for(var f=this.radius,d=["x","y","z"],x=0;x<d.length;x++){var v=d[x];h[v]=c[v]-f,l[v]=c[v]+f}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),u=e("../utils/Octree");function h(D,b){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(D),this.indices=new Int16Array(b),this.normals=new Float32Array(b.length),this.aabb=new c,this.edges=null,this.scale=new a(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new a;h.prototype.updateTree=function(){var D=this.tree;D.reset(),D.aabb.copy(this.aabb);var b=this.scale;D.aabb.lowerBound.x*=1/b.x,D.aabb.lowerBound.y*=1/b.y,D.aabb.lowerBound.z*=1/b.z,D.aabb.upperBound.x*=1/b.x,D.aabb.upperBound.y*=1/b.y,D.aabb.upperBound.z*=1/b.z;for(var y=new c,E=new a,N=new a,F=new a,Y=[E,N,F],W=0;W<this.indices.length/3;W++){var nt=W*3;this._getUnscaledVertex(this.indices[nt],E),this._getUnscaledVertex(this.indices[nt+1],N),this._getUnscaledVertex(this.indices[nt+2],F),y.setFromPoints(Y),D.insert(y,W)}D.removeEmptyNodes()};var f=new c;h.prototype.getTrianglesInAABB=function(D,b){f.copy(D);var y=this.scale,E=y.x,N=y.y,F=y.z,Y=f.lowerBound,W=f.upperBound;return Y.x/=E,Y.y/=N,Y.z/=F,W.x/=E,W.y/=N,W.z/=F,this.tree.aabbQuery(f,b)},h.prototype.setScale=function(D){var b=this.scale.x===this.scale.y===this.scale.z,y=D.x===D.y===D.z;b&&y||this.updateNormals(),this.scale.copy(D),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var D=l,b=this.normals,y=0;y<this.indices.length/3;y++){var E=y*3,N=this.indices[E],F=this.indices[E+1],Y=this.indices[E+2];this.getVertex(N,p),this.getVertex(F,g),this.getVertex(Y,M),h.computeNormal(g,p,M,D),b[E]=D.x,b[E+1]=D.y,b[E+2]=D.z}},h.prototype.updateEdges=function(){for(var D={},b=function(nt,z){var P=N<F?N+"_"+F:F+"_"+N;D[P]=!0},y=0;y<this.indices.length/3;y++){var E=y*3,N=this.indices[E],F=this.indices[E+1];this.indices[E+2],b(),b(),b()}var Y=Object.keys(D);this.edges=new Int16Array(Y.length*2);for(var y=0;y<Y.length;y++){var W=Y[y].split("_");this.edges[2*y]=parseInt(W[0],10),this.edges[2*y+1]=parseInt(W[1],10)}},h.prototype.getEdgeVertex=function(D,b,y){var E=this.edges[D*2+(b?1:0)];this.getVertex(E,y)};var d=new a,x=new a;h.prototype.getEdgeVector=function(D,b){var y=d,E=x;this.getEdgeVertex(D,0,y),this.getEdgeVertex(D,1,E),E.vsub(y,b)};var v=new a,m=new a;h.computeNormal=function(D,b,y,E){b.vsub(D,m),y.vsub(b,v),v.cross(m,E),E.isZero()||E.normalize()};var p=new a,g=new a,M=new a;h.prototype.getVertex=function(D,b){var y=this.scale;return this._getUnscaledVertex(D,b),b.x*=y.x,b.y*=y.y,b.z*=y.z,b},h.prototype._getUnscaledVertex=function(D,b){var y=D*3,E=this.vertices;return b.set(E[y],E[y+1],E[y+2])},h.prototype.getWorldVertex=function(D,b,y,E){return this.getVertex(D,E),o.pointToWorldFrame(b,y,E,E),E},h.prototype.getTriangleVertices=function(D,b,y,E){var N=D*3;this.getVertex(this.indices[N],b),this.getVertex(this.indices[N+1],y),this.getVertex(this.indices[N+2],E)},h.prototype.getNormal=function(D,b){var y=D*3;return b.set(this.normals[y],this.normals[y+1],this.normals[y+2])};var _=new c;h.prototype.calculateLocalInertia=function(D,b){this.computeLocalAABB(_);var y=_.upperBound.x-_.lowerBound.x,E=_.upperBound.y-_.lowerBound.y,N=_.upperBound.z-_.lowerBound.z;return b.set(1/12*D*(2*E*2*E+2*N*2*N),1/12*D*(2*y*2*y+2*N*2*N),1/12*D*(2*E*2*E+2*y*2*y))};var w=new a;h.prototype.computeLocalAABB=function(D){var b=D.lowerBound,y=D.upperBound,E=this.vertices.length;this.vertices;var N=w;this.getVertex(0,N),b.copy(N),y.copy(N);for(var F=0;F!==E;F++)this.getVertex(F,N),N.x<b.x?b.x=N.x:N.x>y.x&&(y.x=N.x),N.y<b.y?b.y=N.y:N.y>y.y&&(y.y=N.y),N.z<b.z?b.z=N.z:N.z>y.z&&(y.z=N.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var D=0,b=this.vertices,y=new a,E=0,N=b.length/3;E!==N;E++){this.getVertex(E,y);var F=y.norm2();F>D&&(D=F)}this.boundingSphereRadius=Math.sqrt(D)},new a;var A=new o,U=new c;h.prototype.calculateWorldAABB=function(D,b,y,E){var N=A,F=U;N.position=D,N.quaternion=b,this.aabb.toWorldFrame(N,F),y.copy(F.lowerBound),E.copy(F.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(D,b,y,E,N){D=D||1,b=b||.5,y=y||8,E=E||6,N=N||Math.PI*2;for(var F=[],Y=[],W=0;W<=y;W++)for(var nt=0;nt<=E;nt++){var z=nt/E*N,P=W/y*Math.PI*2,J=(D+b*Math.cos(P))*Math.cos(z),K=(D+b*Math.cos(P))*Math.sin(z),O=b*Math.sin(P);F.push(J,K,O)}for(var W=1;W<=y;W++)for(var nt=1;nt<=E;nt++){var tt=(E+1)*W+nt-1,V=(E+1)*(W-1)+nt-1,B=(E+1)*(W-1)+nt,I=(E+1)*W+nt;Y.push(tt,V,I),Y.push(V,B,I)}return new h(F,Y)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,s){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],c=[],u=[];a.prototype.solve=function(h,l){var f=0,d=this.iterations,x=this.tolerance*this.tolerance,v=this.equations,m=v.length,p=l.bodies,g=p.length,M=h,_,w,A,U,D,b;if(m!==0)for(var y=0;y!==g;y++)p[y].updateSolveMassProperties();var E=c,N=u,F=o;E.length=m,N.length=m,F.length=m;for(var y=0;y!==m;y++){var Y=v[y];F[y]=0,N[y]=Y.computeB(M),E[y]=1/Y.computeC()}if(m!==0){for(var y=0;y!==g;y++){var W=p[y],nt=W.vlambda,z=W.wlambda;nt.set(0,0,0),z&&z.set(0,0,0)}for(f=0;f!==d;f++){U=0;for(var P=0;P!==m;P++){var Y=v[P];_=N[P],w=E[P],b=F[P],D=Y.computeGWlambda(),A=w*(_-D-Y.eps*b),b+A<Y.minForce?A=Y.minForce-b:b+A>Y.maxForce&&(A=Y.maxForce-b),F[P]+=A,U+=A>0?A:-A,Y.addToWlambda(A)}if(U*U<x)break}for(var y=0;y!==g;y++){var W=p[y],J=W.velocity,K=W.angularVelocity;J.vadd(W.vlambda,J),K&&K.vadd(W.wlambda,K)}}return f}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,s){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,c=o.indexOf(a);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,s){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),a=e("../objects/Body");function o(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],u=[],h={bodies:[]},l=a.STATIC;function f(p){for(var g=p.length,M=0;M!==g;M++){var _=p[M];if(!_.visited&&!(_.body.type&l))return _}return!1}var d=[];function x(p,g,M,_){for(d.push(p),p.visited=!0,g(p,M,_);d.length;)for(var w=d.pop(),A;A=f(w.children);)A.visited=!0,g(A,M,_),d.push(A)}function v(p,g,M){g.push(p.body);for(var _=p.eqs.length,w=0;w!==_;w++){var A=p.eqs[w];M.indexOf(A)===-1&&M.push(A)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,g){for(var M=c,_=this.nodePool,w=g.bodies,A=this.equations,U=A.length,D=w.length,b=this.subsolver;_.length<D;)_.push(this.createNode());M.length=D;for(var y=0;y<D;y++)M[y]=_[y];for(var y=0;y!==D;y++){var E=M[y];E.body=w[y],E.children.length=0,E.eqs.length=0,E.visited=!1}for(var N=0;N!==U;N++){var F=A[N],y=w.indexOf(F.bi),Y=w.indexOf(F.bj),W=M[y],nt=M[Y];W.children.push(nt),W.eqs.push(F),nt.children.push(W),nt.eqs.push(F)}var z,P=0,J=u;b.tolerance=this.tolerance,b.iterations=this.iterations;for(var K=h;z=f(M);){J.length=0,K.bodies.length=0,x(z,v,K.bodies,J);var O=J.length;J=J.sort(m);for(var y=0;y!==O;y++)b.addEquation(J[y]);b.solve(p,K),b.removeAllEquations(),P++}return P};function m(p,g){return g.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,s){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[a]===void 0&&(c[a]=[]),c[a].indexOf(o)===-1&&c[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[a]!==void 0&&c[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[a]===void 0)return this;var u=c[a].indexOf(o);return u!==-1&&c[a].splice(u,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,c=o[a.type];if(c!==void 0){a.target=this;for(var u=0,h=c.length;u<h;u++)c[u].call(this,a)}return this}}},{}],50:[function(e,n,s){var r=e("../collision/AABB"),a=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,f){f=f||{},f.root=null,f.aabb=l,o.call(this,f),this.maxDepth=typeof f.maxDepth<"u"?f.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,f){this.children.length=this.data.length=0},o.prototype.insert=function(l,f,d){var x=this.data;if(d=d||0,!this.aabb.contains(l))return!1;var v=this.children;if(d<(this.maxDepth||this.root.maxDepth)){var m=!1;v.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(v[p].insert(l,f,d+1))return!0;m&&(v.length=0)}return x.push(f),!0};var u=new a;o.prototype.subdivide=function(){var l=this.aabb,f=l.lowerBound,d=l.upperBound,x=this.children;x.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),d.vsub(f,u),u.scale(.5,u);for(var v=this.root||this,m=0;m!==8;m++){var p=x[m];p.root=v;var g=p.aabb.lowerBound;g.x*=u.x,g.y*=u.y,g.z*=u.z,g.vadd(f,g),g.vadd(u,p.aabb.upperBound)}},o.prototype.aabbQuery=function(l,f){this.data,this.children;for(var d=[this];d.length;){var x=d.pop();x.aabb.overlaps(l)&&Array.prototype.push.apply(f,x.data),Array.prototype.push.apply(d,x.children)}return f};var h=new r;o.prototype.rayQuery=function(l,f,d){return l.getAABB(h),h.toLocalFrame(f,h),this.aabbQuery(h,d),d},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var f=l.pop(),d=f.children.length-1;d>=0;d--)f.children[d].data.length||f.children.splice(d,1);Array.prototype.push.apply(l,f.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,s){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,s){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var c=o;o=a,a=c}return this.data[a+"-"+o]},r.prototype.set=function(a,o,c){if(a>o){var u=o;o=a,a=u}var h=a+"-"+o;this.get(a,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var c=o.pop();delete a[c]}}},{}],53:[function(e,n,s){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var c in o)c in a||(a[c]=o[c]);return a}},{}],54:[function(e,n,s){n.exports=o;var r=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,s){n.exports=x;var r=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),f=e("../equations/ContactEquation"),d=e("../equations/FrictionEquation");function x(at){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=at,this.currentContactMaterial=null,this.enableFrictionReduction=!1}x.prototype.createContactEquation=function(at,ht,mt,xt,oe,Nt){var Tt;this.contactPointPool.length?(Tt=this.contactPointPool.pop(),Tt.bi=at,Tt.bj=ht):Tt=new f(at,ht),Tt.enabled=at.collisionResponse&&ht.collisionResponse&&mt.collisionResponse&&xt.collisionResponse;var Ft=this.currentContactMaterial;Tt.restitution=Ft.restitution,Tt.setSpookParams(Ft.contactEquationStiffness,Ft.contactEquationRelaxation,this.world.dt);var it=mt.material||at.material,At=xt.material||ht.material;return it&&At&&it.restitution>=0&&At.restitution>=0&&(Tt.restitution=it.restitution*At.restitution),Tt.si=oe||mt,Tt.sj=Nt||xt,Tt},x.prototype.createFrictionEquationsFromContact=function(at,ht){var mt=at.bi,xt=at.bj,oe=at.si,Nt=at.sj,Tt=this.world,Ft=this.currentContactMaterial,it=Ft.friction,At=oe.material||mt.material,Bt=Nt.material||xt.material;if(At&&Bt&&At.friction>=0&&Bt.friction>=0&&(it=At.friction*Bt.friction),it>0){var Yt=it*Tt.gravity.length(),Dt=mt.invMass+xt.invMass;Dt>0&&(Dt=1/Dt);var bt=this.frictionEquationPool,Ut=bt.length?bt.pop():new d(mt,xt,Yt*Dt),ie=bt.length?bt.pop():new d(mt,xt,Yt*Dt);return Ut.bi=ie.bi=mt,Ut.bj=ie.bj=xt,Ut.minForce=ie.minForce=-Yt*Dt,Ut.maxForce=ie.maxForce=Yt*Dt,Ut.ri.copy(at.ri),Ut.rj.copy(at.rj),ie.ri.copy(at.ri),ie.rj.copy(at.rj),at.ni.tangents(Ut.t,ie.t),Ut.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,Tt.dt),ie.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,Tt.dt),Ut.enabled=ie.enabled=at.enabled,ht.push(Ut,ie),!0}return!1};var v=new c,m=new c,p=new c;x.prototype.createFrictionFromAverage=function(at){var ht=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ht,this.frictionResult)||at===1)){var mt=this.frictionResult[this.frictionResult.length-2],xt=this.frictionResult[this.frictionResult.length-1];v.setZero(),m.setZero(),p.setZero();var oe=ht.bi;ht.bj;for(var Nt=0;Nt!==at;Nt++)ht=this.result[this.result.length-1-Nt],ht.bodyA!==oe?(v.vadd(ht.ni,v),m.vadd(ht.ri,m),p.vadd(ht.rj,p)):(v.vsub(ht.ni,v),m.vadd(ht.rj,m),p.vadd(ht.ri,p));var Tt=1/at;m.scale(Tt,mt.ri),p.scale(Tt,mt.rj),xt.ri.copy(mt.ri),xt.rj.copy(mt.rj),v.normalize(),v.tangents(mt.t,xt.t)}};var g=new c,M=new c,_=new h,w=new h;x.prototype.getContacts=function(at,ht,mt,xt,oe,Nt,Tt){this.contactPointPool=oe,this.frictionEquationPool=Tt,this.result=xt,this.frictionResult=Nt;for(var Ft=_,it=w,At=g,Bt=M,Yt=0,Dt=at.length;Yt!==Dt;Yt++){var bt=at[Yt],Ut=ht[Yt],ie=null;bt.material&&Ut.material&&(ie=mt.getContactMaterial(bt.material,Ut.material)||null);for(var ce=0;ce<bt.shapes.length;ce++){bt.quaternion.mult(bt.shapeOrientations[ce],Ft),bt.quaternion.vmult(bt.shapeOffsets[ce],At),At.vadd(bt.position,At);for(var _t=bt.shapes[ce],fe=0;fe<Ut.shapes.length;fe++){Ut.quaternion.mult(Ut.shapeOrientations[fe],it),Ut.quaternion.vmult(Ut.shapeOffsets[fe],Bt),Bt.vadd(Ut.position,Bt);var me=Ut.shapes[fe];if(!(At.distanceTo(Bt)>_t.boundingSphereRadius+me.boundingSphereRadius)){var T=null;_t.material&&me.material&&(T=mt.getContactMaterial(_t.material,me.material)||null),this.currentContactMaterial=T||ie||mt.defaultContactMaterial;var H=this[_t.type|me.type];H&&(_t.type<me.type?H.call(this,_t,me,At,Bt,Ft,it,bt,Ut,_t,me):H.call(this,me,_t,Bt,At,it,Ft,Ut,bt,_t,me))}}}}},x.prototype[a.types.BOX|a.types.BOX]=x.prototype.boxBox=function(at,ht,mt,xt,oe,Nt,Tt,Ft){at.convexPolyhedronRepresentation.material=at.material,ht.convexPolyhedronRepresentation.material=ht.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,ht.convexPolyhedronRepresentation,mt,xt,oe,Nt,Tt,Ft,at,ht)},x.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=x.prototype.boxConvex=function(at,ht,mt,xt,oe,Nt,Tt,Ft){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,ht,mt,xt,oe,Nt,Tt,Ft,at,ht)},x.prototype[a.types.BOX|a.types.PARTICLE]=x.prototype.boxParticle=function(at,ht,mt,xt,oe,Nt,Tt,Ft){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexParticle(at.convexPolyhedronRepresentation,ht,mt,xt,oe,Nt,Tt,Ft,at,ht)},x.prototype[a.types.SPHERE]=x.prototype.sphereSphere=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=this.createContactEquation(Tt,Ft,at,ht);xt.vsub(mt,it.ni),it.ni.normalize(),it.ri.copy(it.ni),it.rj.copy(it.ni),it.ri.mult(at.radius,it.ri),it.rj.mult(-ht.radius,it.rj),it.ri.vadd(mt,it.ri),it.ri.vsub(Tt.position,it.ri),it.rj.vadd(xt,it.rj),it.rj.vsub(Ft.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)};var A=new c,U=new c,D=new c;x.prototype[a.types.PLANE|a.types.TRIMESH]=x.prototype.planeTrimesh=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=new c,At=A;At.set(0,0,1),oe.vmult(At,At);for(var Bt=0;Bt<ht.vertices.length/3;Bt++){ht.getVertex(Bt,it);var Yt=new c;Yt.copy(it),u.pointToWorldFrame(xt,Nt,Yt,it);var Dt=U;it.vsub(mt,Dt);var bt=At.dot(Dt);if(bt<=0){var Ut=this.createContactEquation(Tt,Ft,at,ht);Ut.ni.copy(At);var ie=D;At.scale(Dt.dot(At),ie),it.vsub(ie,ie),Ut.ri.copy(ie),Ut.ri.vsub(Tt.position,Ut.ri),Ut.rj.copy(it),Ut.rj.vsub(Ft.position,Ut.rj),this.result.push(Ut),this.createFrictionEquationsFromContact(Ut,this.frictionResult)}}};var b=new c,y=new c;new c;var E=new c,N=new c,F=new c,Y=new c,W=new c,nt=new c,z=new c,P=new c,J=new c,K=new c,O=new c,tt=new r,V=[];x.prototype[a.types.SPHERE|a.types.TRIMESH]=x.prototype.sphereTrimesh=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=F,At=Y,Bt=W,Yt=nt,Dt=z,bt=P,Ut=tt,ie=N,ce=y,_t=V;u.pointToLocalFrame(xt,Nt,mt,Dt);var fe=at.radius;Ut.lowerBound.set(Dt.x-fe,Dt.y-fe,Dt.z-fe),Ut.upperBound.set(Dt.x+fe,Dt.y+fe,Dt.z+fe),ht.getTrianglesInAABB(Ut,_t);for(var me=E,T=at.radius*at.radius,H=0;H<_t.length;H++)for(var Q=0;Q<3;Q++)if(ht.getVertex(ht.indices[_t[H]*3+Q],me),me.vsub(Dt,ce),ce.norm2()<=T){ie.copy(me),u.pointToWorldFrame(xt,Nt,ie,me),me.vsub(mt,ce);var Z=this.createContactEquation(Tt,Ft,at,ht);Z.ni.copy(ce),Z.ni.normalize(),Z.ri.copy(Z.ni),Z.ri.scale(at.radius,Z.ri),Z.ri.vadd(mt,Z.ri),Z.ri.vsub(Tt.position,Z.ri),Z.rj.copy(me),Z.rj.vsub(Ft.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}for(var H=0;H<_t.length;H++)for(var Q=0;Q<3;Q++){ht.getVertex(ht.indices[_t[H]*3+Q],it),ht.getVertex(ht.indices[_t[H]*3+(Q+1)%3],At),At.vsub(it,Bt),Dt.vsub(At,bt);var $=bt.dot(Bt);Dt.vsub(it,bt);var yt=bt.dot(Bt);if(yt>0&&$<0){Dt.vsub(it,bt),Yt.copy(Bt),Yt.normalize(),yt=bt.dot(Yt),Yt.scale(yt,bt),bt.vadd(it,bt);var Lt=bt.distanceTo(Dt);if(Lt<at.radius){var Z=this.createContactEquation(Tt,Ft,at,ht);bt.vsub(Dt,Z.ni),Z.ni.normalize(),Z.ni.scale(at.radius,Z.ri),u.pointToWorldFrame(xt,Nt,bt,bt),bt.vsub(Ft.position,Z.rj),u.vectorToWorldFrame(Nt,Z.ni,Z.ni),u.vectorToWorldFrame(Nt,Z.ri,Z.ri),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}}}for(var Zt=J,Ot=K,Gt=O,re=b,H=0,Vt=_t.length;H!==Vt;H++){ht.getTriangleVertices(_t[H],Zt,Ot,Gt),ht.getNormal(_t[H],re),Dt.vsub(Zt,bt);var Lt=bt.dot(re);if(re.scale(Lt,bt),Dt.vsub(bt,bt),Lt=bt.distanceTo(Dt),o.pointInTriangle(bt,Zt,Ot,Gt)&&Lt<at.radius){var Z=this.createContactEquation(Tt,Ft,at,ht);bt.vsub(Dt,Z.ni),Z.ni.normalize(),Z.ni.scale(at.radius,Z.ri),u.pointToWorldFrame(xt,Nt,bt,bt),bt.vsub(Ft.position,Z.rj),u.vectorToWorldFrame(Nt,Z.ni,Z.ni),u.vectorToWorldFrame(Nt,Z.ri,Z.ri),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}}_t.length=0};var B=new c,I=new c;x.prototype[a.types.SPHERE|a.types.PLANE]=x.prototype.spherePlane=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=this.createContactEquation(Tt,Ft,at,ht);if(it.ni.set(0,0,1),Nt.vmult(it.ni,it.ni),it.ni.negate(it.ni),it.ni.normalize(),it.ni.mult(at.radius,it.ri),mt.vsub(xt,B),it.ni.mult(it.ni.dot(B),I),B.vsub(I,it.rj),-B.dot(it.ni)<=at.radius){var At=it.ri,Bt=it.rj;At.vadd(mt,At),At.vsub(Tt.position,At),Bt.vadd(xt,Bt),Bt.vsub(Ft.position,Bt),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}};var L=new c,k=new c,j=new c;function X(at,ht,mt){for(var xt=null,oe=at.length,Nt=0;Nt!==oe;Nt++){var Tt=at[Nt],Ft=L;at[(Nt+1)%oe].vsub(Tt,Ft);var it=k;Ft.cross(ht,it);var At=j;mt.vsub(Tt,At);var Bt=it.dot(At);if(xt===null||Bt>0&&xt===!0||Bt<=0&&xt===!1){xt===null&&(xt=Bt>0);continue}else return!1}return!0}var et=new c,lt=new c,Ht=new c,pt=new c,vt=[new c,new c,new c,new c,new c,new c],R=new c,ut=new c,qt=new c,kt=new c;x.prototype[a.types.SPHERE|a.types.BOX]=x.prototype.sphereBox=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=this.v3pool,At=vt;mt.vsub(xt,et),ht.getSideNormals(At,Nt);for(var Bt=at.radius,Yt=!1,Dt=ut,bt=qt,Ut=kt,ie=null,ce=0,_t=0,fe=0,me=null,T=0,H=At.length;T!==H&&Yt===!1;T++){var Q=lt;Q.copy(At[T]);var Z=Q.norm();Q.normalize();var $=et.dot(Q);if($<Z+Bt&&$>0){var yt=Ht,Lt=pt;yt.copy(At[(T+1)%3]),Lt.copy(At[(T+2)%3]);var Zt=yt.norm(),Ot=Lt.norm();yt.normalize(),Lt.normalize();var Gt=et.dot(yt),re=et.dot(Lt);if(Gt<Zt&&Gt>-Zt&&re<Ot&&re>-Ot){var Ee=Math.abs($-Z-Bt);(me===null||Ee<me)&&(me=Ee,_t=Gt,fe=re,ie=Z,Dt.copy(Q),bt.copy(yt),Ut.copy(Lt),ce++)}}}if(ce){Yt=!0;var jt=this.createContactEquation(Tt,Ft,at,ht);Dt.mult(-Bt,jt.ri),jt.ni.copy(Dt),jt.ni.negate(jt.ni),Dt.mult(ie,Dt),bt.mult(_t,bt),Dt.vadd(bt,Dt),Ut.mult(fe,Ut),Dt.vadd(Ut,jt.rj),jt.ri.vadd(mt,jt.ri),jt.ri.vsub(Tt.position,jt.ri),jt.rj.vadd(xt,jt.rj),jt.rj.vsub(Ft.position,jt.rj),this.result.push(jt),this.createFrictionEquationsFromContact(jt,this.frictionResult)}for(var Vt=it.get(),ue=R,de=0;de!==2&&!Yt;de++)for(var ye=0;ye!==2&&!Yt;ye++)for(var ve=0;ve!==2&&!Yt;ve++)if(Vt.set(0,0,0),de?Vt.vadd(At[0],Vt):Vt.vsub(At[0],Vt),ye?Vt.vadd(At[1],Vt):Vt.vsub(At[1],Vt),ve?Vt.vadd(At[2],Vt):Vt.vsub(At[2],Vt),xt.vadd(Vt,ue),ue.vsub(mt,ue),ue.norm2()<Bt*Bt){Yt=!0;var jt=this.createContactEquation(Tt,Ft,at,ht);jt.ri.copy(ue),jt.ri.normalize(),jt.ni.copy(jt.ri),jt.ri.mult(Bt,jt.ri),jt.rj.copy(Vt),jt.ri.vadd(mt,jt.ri),jt.ri.vsub(Tt.position,jt.ri),jt.rj.vadd(xt,jt.rj),jt.rj.vsub(Ft.position,jt.rj),this.result.push(jt),this.createFrictionEquationsFromContact(jt,this.frictionResult)}it.release(Vt),Vt=null;for(var ge=it.get(),Qt=it.get(),jt=it.get(),he=it.get(),Ee=it.get(),Ye=At.length,de=0;de!==Ye&&!Yt;de++)for(var ye=0;ye!==Ye&&!Yt;ye++)if(de%3!==ye%3){At[ye].cross(At[de],ge),ge.normalize(),At[de].vadd(At[ye],Qt),jt.copy(mt),jt.vsub(Qt,jt),jt.vsub(xt,jt);var Pe=jt.dot(ge);ge.mult(Pe,he);for(var ve=0;ve===de%3||ve===ye%3;)ve++;Ee.copy(mt),Ee.vsub(he,Ee),Ee.vsub(Qt,Ee),Ee.vsub(xt,Ee);var Yn=Math.abs(Pe),Ce=Ee.norm();if(Yn<At[ve].norm()&&Ce<Bt){Yt=!0;var Me=this.createContactEquation(Tt,Ft,at,ht);Qt.vadd(he,Me.rj),Me.rj.copy(Me.rj),Ee.negate(Me.ni),Me.ni.normalize(),Me.ri.copy(Me.rj),Me.ri.vadd(xt,Me.ri),Me.ri.vsub(mt,Me.ri),Me.ri.normalize(),Me.ri.mult(Bt,Me.ri),Me.ri.vadd(mt,Me.ri),Me.ri.vsub(Tt.position,Me.ri),Me.rj.vadd(xt,Me.rj),Me.rj.vsub(Ft.position,Me.rj),this.result.push(Me),this.createFrictionEquationsFromContact(Me,this.frictionResult)}}it.release(ge,Qt,jt,he,Ee)};var Rt=new c,wt=new c,Ct=new c,Xt=new c,C=new c,S=new c,q=new c,st=new c,ot=new c,rt=new c;x.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=x.prototype.sphereConvex=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=this.v3pool;mt.vsub(xt,Rt);for(var At=ht.faceNormals,Bt=ht.faces,Yt=ht.vertices,Dt=at.radius,bt=0;bt!==Yt.length;bt++){var Ut=Yt[bt],ie=C;Nt.vmult(Ut,ie),xt.vadd(ie,ie);var ce=Xt;if(ie.vsub(mt,ce),ce.norm2()<Dt*Dt){fe=!0;var _t=this.createContactEquation(Tt,Ft,at,ht);_t.ri.copy(ce),_t.ri.normalize(),_t.ni.copy(_t.ri),_t.ri.mult(Dt,_t.ri),ie.vsub(xt,_t.rj),_t.ri.vadd(mt,_t.ri),_t.ri.vsub(Tt.position,_t.ri),_t.rj.vadd(xt,_t.rj),_t.rj.vsub(Ft.position,_t.rj),this.result.push(_t),this.createFrictionEquationsFromContact(_t,this.frictionResult);return}}for(var fe=!1,bt=0,me=Bt.length;bt!==me&&fe===!1;bt++){var T=At[bt],H=Bt[bt],Q=S;Nt.vmult(T,Q);var Z=q;Nt.vmult(Yt[H[0]],Z),Z.vadd(xt,Z);var $=st;Q.mult(-Dt,$),mt.vadd($,$);var yt=ot;$.vsub(Z,yt);var Lt=yt.dot(Q),Zt=rt;if(mt.vsub(Z,Zt),Lt<0&&Zt.dot(Q)>0){for(var Ot=[],Gt=0,re=H.length;Gt!==re;Gt++){var Vt=it.get();Nt.vmult(Yt[H[Gt]],Vt),xt.vadd(Vt,Vt),Ot.push(Vt)}if(X(Ot,Q,mt)){fe=!0;var _t=this.createContactEquation(Tt,Ft,at,ht);Q.mult(-Dt,_t.ri),Q.negate(_t.ni);var ue=it.get();Q.mult(-Lt,ue);var de=it.get();Q.mult(-Dt,de),mt.vsub(xt,_t.rj),_t.rj.vadd(de,_t.rj),_t.rj.vadd(ue,_t.rj),_t.rj.vadd(xt,_t.rj),_t.rj.vsub(Ft.position,_t.rj),_t.ri.vadd(mt,_t.ri),_t.ri.vsub(Tt.position,_t.ri),it.release(ue),it.release(de),this.result.push(_t),this.createFrictionEquationsFromContact(_t,this.frictionResult);for(var Gt=0,ye=Ot.length;Gt!==ye;Gt++)it.release(Ot[Gt]);return}else for(var Gt=0;Gt!==H.length;Gt++){var ve=it.get(),ge=it.get();Nt.vmult(Yt[H[(Gt+1)%H.length]],ve),Nt.vmult(Yt[H[(Gt+2)%H.length]],ge),xt.vadd(ve,ve),xt.vadd(ge,ge);var Qt=wt;ge.vsub(ve,Qt);var jt=Ct;Qt.unit(jt);var he=it.get(),Ee=it.get();mt.vsub(ve,Ee);var Ye=Ee.dot(jt);jt.mult(Ye,he),he.vadd(ve,he);var Pe=it.get();if(he.vsub(mt,Pe),Ye>0&&Ye*Ye<Qt.norm2()&&Pe.norm2()<Dt*Dt){var _t=this.createContactEquation(Tt,Ft,at,ht);he.vsub(xt,_t.rj),he.vsub(mt,_t.ni),_t.ni.normalize(),_t.ni.mult(Dt,_t.ri),_t.rj.vadd(xt,_t.rj),_t.rj.vsub(Ft.position,_t.rj),_t.ri.vadd(mt,_t.ri),_t.ri.vsub(Tt.position,_t.ri),this.result.push(_t),this.createFrictionEquationsFromContact(_t,this.frictionResult);for(var Gt=0,ye=Ot.length;Gt!==ye;Gt++)it.release(Ot[Gt]);it.release(ve),it.release(ge),it.release(he),it.release(Pe),it.release(Ee);return}it.release(ve),it.release(ge),it.release(he),it.release(Pe),it.release(Ee)}for(var Gt=0,ye=Ot.length;Gt!==ye;Gt++)it.release(Ot[Gt])}}},new c,new c,x.prototype[a.types.PLANE|a.types.BOX]=x.prototype.planeBox=function(at,ht,mt,xt,oe,Nt,Tt,Ft){ht.convexPolyhedronRepresentation.material=ht.material,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,this.planeConvex(at,ht.convexPolyhedronRepresentation,mt,xt,oe,Nt,Tt,Ft)};var Kt=new c,It=new c,te=new c,Jt=new c;x.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=x.prototype.planeConvex=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=Kt,At=It;At.set(0,0,1),oe.vmult(At,At);for(var Bt=0,Yt=te,Dt=0;Dt!==ht.vertices.length;Dt++){it.copy(ht.vertices[Dt]),Nt.vmult(it,it),xt.vadd(it,it),it.vsub(mt,Yt);var bt=At.dot(Yt);if(bt<=0){var Ut=this.createContactEquation(Tt,Ft,at,ht),ie=Jt;At.mult(At.dot(Yt),ie),it.vsub(ie,ie),ie.vsub(mt,Ut.ri),Ut.ni.copy(At),it.vsub(xt,Ut.rj),Ut.ri.vadd(mt,Ut.ri),Ut.ri.vsub(Tt.position,Ut.ri),Ut.rj.vadd(xt,Ut.rj),Ut.rj.vsub(Ft.position,Ut.rj),this.result.push(Ut),Bt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Ut,this.frictionResult)}}this.enableFrictionReduction&&Bt&&this.createFrictionFromAverage(Bt)};var dt=new c,St=new c;x.prototype[a.types.CONVEXPOLYHEDRON]=x.prototype.convexConvex=function(at,ht,mt,xt,oe,Nt,Tt,Ft,it,At,Bt,Yt){var Dt=dt;if(!(mt.distanceTo(xt)>at.boundingSphereRadius+ht.boundingSphereRadius)&&at.findSeparatingAxis(ht,mt,oe,xt,Nt,Dt,Bt,Yt)){var bt=[],Ut=St;at.clipAgainstHull(mt,oe,ht,xt,Nt,Dt,-100,100,bt);for(var ie=0,ce=0;ce!==bt.length;ce++){var _t=this.createContactEquation(Tt,Ft,at,ht,it,At),fe=_t.ri,me=_t.rj;Dt.negate(_t.ni),bt[ce].normal.negate(Ut),Ut.mult(bt[ce].depth,Ut),bt[ce].point.vadd(Ut,fe),me.copy(bt[ce].point),fe.vsub(mt,fe),me.vsub(xt,me),fe.vadd(mt,fe),fe.vsub(Tt.position,fe),me.vadd(xt,me),me.vsub(Ft.position,me),this.result.push(_t),ie++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_t,this.frictionResult)}this.enableFrictionReduction&&ie&&this.createFrictionFromAverage(ie)}};var ae=new c,ee=new c,zt=new c;x.prototype[a.types.PLANE|a.types.PARTICLE]=x.prototype.planeParticle=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=ae;it.set(0,0,1),Tt.quaternion.vmult(it,it);var At=ee;xt.vsub(Tt.position,At);var Bt=it.dot(At);if(Bt<=0){var Yt=this.createContactEquation(Ft,Tt,ht,at);Yt.ni.copy(it),Yt.ni.negate(Yt.ni),Yt.ri.set(0,0,0);var Dt=zt;it.mult(it.dot(xt),Dt),xt.vsub(Dt,Dt),Yt.rj.copy(Dt),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}};var ne=new c;x.prototype[a.types.PARTICLE|a.types.SPHERE]=x.prototype.sphereParticle=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=ne;it.set(0,0,1),xt.vsub(mt,it);var At=it.norm2();if(At<=at.radius*at.radius){var Bt=this.createContactEquation(Ft,Tt,ht,at);it.normalize(),Bt.rj.copy(it),Bt.rj.mult(at.radius,Bt.rj),Bt.ni.copy(it),Bt.ni.negate(Bt.ni),Bt.ri.set(0,0,0),this.result.push(Bt),this.createFrictionEquationsFromContact(Bt,this.frictionResult)}};var G=new h,Pt=new c;new c;var Et=new c,Mt=new c,gt=new c;x.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=x.prototype.convexParticle=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=-1,At=Et,Bt=gt,Yt=null,Dt=Pt;if(Dt.copy(xt),Dt.vsub(mt,Dt),oe.conjugate(G),G.vmult(Dt,Dt),at.pointIsInside(Dt)){at.worldVerticesNeedsUpdate&&at.computeWorldVertices(mt,oe),at.worldFaceNormalsNeedsUpdate&&at.computeWorldFaceNormals(oe);for(var bt=0,Ut=at.faces.length;bt!==Ut;bt++){var ie=[at.worldVertices[at.faces[bt][0]]],ce=at.worldFaceNormals[bt];xt.vsub(ie[0],Mt);var _t=-ce.dot(Mt);(Yt===null||Math.abs(_t)<Math.abs(Yt))&&(Yt=_t,it=bt,At.copy(ce))}if(it!==-1){var fe=this.createContactEquation(Ft,Tt,ht,at);At.mult(Yt,Bt),Bt.vadd(xt,Bt),Bt.vsub(mt,Bt),fe.rj.copy(Bt),At.negate(fe.ni),fe.ri.set(0,0,0);var me=fe.ri,T=fe.rj;me.vadd(xt,me),me.vsub(Ft.position,me),T.vadd(mt,T),T.vsub(Tt.position,T),this.result.push(fe),this.createFrictionEquationsFromContact(fe,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},x.prototype[a.types.BOX|a.types.HEIGHTFIELD]=x.prototype.boxHeightfield=function(at,ht,mt,xt,oe,Nt,Tt,Ft){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexHeightfield(at.convexPolyhedronRepresentation,ht,mt,xt,oe,Nt,Tt,Ft)};var ft=new c,$t=new c,se=[0];x.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=x.prototype.convexHeightfield=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=ht.data,At=ht.elementSize,Bt=at.boundingSphereRadius,Yt=$t,Dt=se,bt=ft;u.pointToLocalFrame(xt,Nt,mt,bt);var Ut=Math.floor((bt.x-Bt)/At)-1,ie=Math.ceil((bt.x+Bt)/At)+1,ce=Math.floor((bt.y-Bt)/At)-1,_t=Math.ceil((bt.y+Bt)/At)+1;if(!(ie<0||_t<0||Ut>it.length||ce>it[0].length)){Ut<0&&(Ut=0),ie<0&&(ie=0),ce<0&&(ce=0),_t<0&&(_t=0),Ut>=it.length&&(Ut=it.length-1),ie>=it.length&&(ie=it.length-1),_t>=it[0].length&&(_t=it[0].length-1),ce>=it[0].length&&(ce=it[0].length-1);var fe=[];ht.getRectMinMax(Ut,ce,ie,_t,fe);var me=fe[0],T=fe[1];if(!(bt.z-Bt>T||bt.z+Bt<me))for(var H=Ut;H<ie;H++)for(var Q=ce;Q<_t;Q++)ht.getConvexTrianglePillar(H,Q,!1),u.pointToWorldFrame(xt,Nt,ht.pillarOffset,Yt),mt.distanceTo(Yt)<ht.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,ht.pillarConvex,mt,Yt,oe,Nt,Tt,Ft,null,null,Dt,null),ht.getConvexTrianglePillar(H,Q,!0),u.pointToWorldFrame(xt,Nt,ht.pillarOffset,Yt),mt.distanceTo(Yt)<ht.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,ht.pillarConvex,mt,Yt,oe,Nt,Tt,Ft,null,null,Dt,null)}};var be=new c,le=new c;x.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=x.prototype.sphereHeightfield=function(at,ht,mt,xt,oe,Nt,Tt,Ft){var it=ht.data,At=at.radius,Bt=ht.elementSize,Yt=le,Dt=be;u.pointToLocalFrame(xt,Nt,mt,Dt);var bt=Math.floor((Dt.x-At)/Bt)-1,Ut=Math.ceil((Dt.x+At)/Bt)+1,ie=Math.floor((Dt.y-At)/Bt)-1,ce=Math.ceil((Dt.y+At)/Bt)+1;if(!(Ut<0||ce<0||bt>it.length||ce>it[0].length)){bt<0&&(bt=0),Ut<0&&(Ut=0),ie<0&&(ie=0),ce<0&&(ce=0),bt>=it.length&&(bt=it.length-1),Ut>=it.length&&(Ut=it.length-1),ce>=it[0].length&&(ce=it[0].length-1),ie>=it[0].length&&(ie=it[0].length-1);var _t=[];ht.getRectMinMax(bt,ie,Ut,ce,_t);var fe=_t[0],me=_t[1];if(!(Dt.z-At>me||Dt.z+At<fe))for(var T=this.result,H=bt;H<Ut;H++)for(var Q=ie;Q<ce;Q++){var Z=T.length;ht.getConvexTrianglePillar(H,Q,!1),u.pointToWorldFrame(xt,Nt,ht.pillarOffset,Yt),mt.distanceTo(Yt)<ht.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,ht.pillarConvex,mt,Yt,oe,Nt,Tt,Ft),ht.getConvexTrianglePillar(H,Q,!0),u.pointToWorldFrame(xt,Nt,ht.pillarOffset,Yt),mt.distanceTo(Yt)<ht.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,ht.pillarConvex,mt,Yt,oe,Nt,Tt,Ft);var $=T.length-Z;if($>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,s){n.exports=_;var r=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),f=e("../material/Material"),d=e("../material/ContactMaterial"),x=e("../objects/Body"),v=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),g=e("../collision/Ray"),M=e("../collision/NaiveBroadphase");function _(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new M,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new v,this.defaultMaterial=new f("default"),this.defaultContactMaterial=new d(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new h,new p;var w=new g;if(_.prototype.getContactMaterial=function(P,J){return this.contactMaterialTable.get(P.id,J.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var P=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=P,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(P){this.bodies.indexOf(P)===-1&&(P.index=this.bodies.length,this.bodies.push(P),P.world=this,P.initPosition.copy(P.position),P.initVelocity.copy(P.velocity),P.timeLastSleepy=this.time,P instanceof x&&(P.initAngularVelocity.copy(P.angularVelocity),P.initQuaternion.copy(P.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=P,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(P){this.constraints.push(P)},_.prototype.removeConstraint=function(P){var J=this.constraints.indexOf(P);J!==-1&&this.constraints.splice(J,1)},_.prototype.rayTest=function(P,J,K){K instanceof m?this.raycastClosest(P,J,{skipBackfaces:!0},K):this.raycastAll(P,J,{skipBackfaces:!0},K)},_.prototype.raycastAll=function(P,J,K,O){return K.mode=g.ALL,K.from=P,K.to=J,K.callback=O,w.intersectWorld(this,K)},_.prototype.raycastAny=function(P,J,K,O){return K.mode=g.ANY,K.from=P,K.to=J,K.result=O,w.intersectWorld(this,K)},_.prototype.raycastClosest=function(P,J,K,O){return K.mode=g.CLOSEST,K.from=P,K.to=J,K.result=O,w.intersectWorld(this,K)},_.prototype.remove=function(P){P.world=null;var J=this.bodies.length-1,K=this.bodies,O=K.indexOf(P);if(O!==-1){K.splice(O,1);for(var tt=0;tt!==K.length;tt++)K[tt].index=tt;this.collisionMatrix.setNumObjects(J),this.removeBodyEvent.body=P,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(P){this.materials.push(P)},_.prototype.addContactMaterial=function(P){this.contactmaterials.push(P),this.contactMaterialTable.set(P.materials[0].id,P.materials[1].id,P)},typeof performance>"u"&&(performance={}),!performance.now){var A=Date.now();performance.timing&&performance.timing.navigationStart&&(A=performance.timing.navigationStart),performance.now=function(){return Date.now()-A}}var U=new a;_.prototype.step=function(P,J,K){if(K=K||10,J=J||0,J===0)this.internalStep(P),this.time+=P;else{var O=Math.floor((this.time+J)/P)-Math.floor(this.time/P);O=Math.min(O,K);for(var tt=performance.now(),V=0;V!==O&&(this.internalStep(P),!(performance.now()-tt>P*1e3));V++);this.time+=J;for(var B=this.time%P,I=B/P,L=U,k=this.bodies,j=0;j!==k.length;j++){var X=k[j];X.type!==x.STATIC&&X.sleepState!==x.SLEEPING?(X.position.vsub(X.previousPosition,L),L.scale(I,L),X.position.vadd(L,X.interpolatedPosition)):(X.interpolatedPosition.copy(X.position),X.interpolatedQuaternion.copy(X.quaternion))}}};var D={type:"postStep"},b={type:"preStep"},y={type:"collide",body:null,contact:null},E=[],N=[],F=[],Y=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var W=new o,nt=new o,z=new a;_.prototype.internalStep=function(P){this.dt=P;var J=this.contacts,K=F,O=Y,tt=this.numObjects(),V=this.bodies,B=this.solver,I=this.gravity,L=this.doProfiling,k=this.profile,j=x.DYNAMIC,X,et=this.constraints,lt=N;I.norm();var Ht=I.x,pt=I.y,vt=I.z,R=0;for(L&&(X=performance.now()),R=0;R!==tt;R++){var ut=V[R];if(ut.type&j){var qt=ut.force,kt=ut.mass;qt.x+=kt*Ht,qt.y+=kt*pt,qt.z+=kt*vt}}for(var R=0,Rt=this.subsystems.length;R!==Rt;R++)this.subsystems[R].update();L&&(X=performance.now()),K.length=0,O.length=0,this.broadphase.collisionPairs(this,K,O),L&&(k.broadphase=performance.now()-X);var dt=et.length;for(R=0;R!==dt;R++){var wt=et[R];if(!wt.collideConnected)for(var Ct=K.length-1;Ct>=0;Ct-=1)(wt.bodyA===K[Ct]&&wt.bodyB===O[Ct]||wt.bodyB===K[Ct]&&wt.bodyA===O[Ct])&&(K.splice(Ct,1),O.splice(Ct,1))}this.collisionMatrixTick(),L&&(X=performance.now());var Xt=E,C=J.length;for(R=0;R!==C;R++)Xt.push(J[R]);J.length=0;var S=this.frictionEquations.length;for(R=0;R!==S;R++)lt.push(this.frictionEquations[R]);this.frictionEquations.length=0,this.narrowphase.getContacts(K,O,this,J,Xt,this.frictionEquations,lt),L&&(k.narrowphase=performance.now()-X),L&&(X=performance.now());for(var R=0;R<this.frictionEquations.length;R++)B.addEquation(this.frictionEquations[R]);for(var q=J.length,st=0;st!==q;st++){var wt=J[st],ut=wt.bi,ot=wt.bj;wt.si,wt.sj;var rt;if(ut.material&&ot.material?rt=this.getContactMaterial(ut.material,ot.material)||this.defaultContactMaterial:rt=this.defaultContactMaterial,rt.friction,ut.material&&ot.material&&(ut.material.friction>=0&&ot.material.friction>=0&&ut.material.friction*ot.material.friction,ut.material.restitution>=0&&ot.material.restitution>=0&&(wt.restitution=ut.material.restitution*ot.material.restitution)),B.addEquation(wt),ut.allowSleep&&ut.type===x.DYNAMIC&&ut.sleepState===x.SLEEPING&&ot.sleepState===x.AWAKE&&ot.type!==x.STATIC){var Kt=ot.velocity.norm2()+ot.angularVelocity.norm2(),It=Math.pow(ot.sleepSpeedLimit,2);Kt>=It*2&&(ut._wakeUpAfterNarrowphase=!0)}if(ot.allowSleep&&ot.type===x.DYNAMIC&&ot.sleepState===x.SLEEPING&&ut.sleepState===x.AWAKE&&ut.type!==x.STATIC){var te=ut.velocity.norm2()+ut.angularVelocity.norm2(),Jt=Math.pow(ut.sleepSpeedLimit,2);te>=Jt*2&&(ot._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ut,ot,!0),this.collisionMatrixPrevious.get(ut,ot)||(y.body=ot,y.contact=wt,ut.dispatchEvent(y),y.body=ut,ot.dispatchEvent(y))}for(L&&(k.makeContactConstraints=performance.now()-X,X=performance.now()),R=0;R!==tt;R++){var ut=V[R];ut._wakeUpAfterNarrowphase&&(ut.wakeUp(),ut._wakeUpAfterNarrowphase=!1)}var dt=et.length;for(R=0;R!==dt;R++){var wt=et[R];wt.update();for(var Ct=0,St=wt.equations.length;Ct!==St;Ct++){var ae=wt.equations[Ct];B.addEquation(ae)}}B.solve(P,this),L&&(k.solve=performance.now()-X),B.removeAllEquations();var ee=Math.pow;for(R=0;R!==tt;R++){var ut=V[R];if(ut.type&j){var zt=ee(1-ut.linearDamping,P),ne=ut.velocity;ne.mult(zt,ne);var G=ut.angularVelocity;if(G){var Pt=ee(1-ut.angularDamping,P);G.mult(Pt,G)}}}for(this.dispatchEvent(b),R=0;R!==tt;R++){var ut=V[R];ut.preStep&&ut.preStep.call(ut)}L&&(X=performance.now());var Et=W,Mt=nt,gt=this.stepnumber,ft=x.DYNAMIC|x.KINEMATIC,$t=gt%(this.quatNormalizeSkip+1)===0,se=this.quatNormalizeFast,be=P*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,R=0;R!==tt;R++){var le=V[R],at=le.force,ht=le.torque;if(le.type&ft&&le.sleepState!==x.SLEEPING){var mt=le.velocity,xt=le.angularVelocity,oe=le.position,Nt=le.quaternion,Tt=le.invMass,Ft=le.invInertiaWorld;mt.x+=at.x*Tt*P,mt.y+=at.y*Tt*P,mt.z+=at.z*Tt*P,le.angularVelocity&&(Ft.vmult(ht,z),z.mult(P,z),z.vadd(xt,xt)),oe.x+=mt.x*P,oe.y+=mt.y*P,oe.z+=mt.z*P,le.angularVelocity&&(Et.set(xt.x,xt.y,xt.z,0),Et.mult(Nt,Mt),Nt.x+=be*Mt.x,Nt.y+=be*Mt.y,Nt.z+=be*Mt.z,Nt.w+=be*Mt.w,$t&&(se?Nt.normalizeFast():Nt.normalize())),le.aabb&&(le.aabbNeedsUpdate=!0),le.updateInertiaWorld&&le.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,L&&(k.integrate=performance.now()-X),this.time+=P,this.stepnumber+=1,this.dispatchEvent(D),R=0;R!==tt;R++){var ut=V[R],it=ut.postStep;it&&it.call(ut)}if(this.allowSleep)for(R=0;R!==tt;R++)V[R].sleepTick(this.time)},_.prototype.clearForces=function(){for(var P=this.bodies,J=P.length,K=0;K!==J;K++){var O=P[K];O.force,O.torque,O.force.set(0,0,0),O.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(sl);var Hp=sl.exports;const un=Gp(Hp);var kp=`varying vec2 vUv;\r

void main()\r
{\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;\r
}`,Wp=`varying vec2 vUv;\r
uniform float uTime;

vec3 palette( float t )\r
{

    vec3 a = vec3(0.938, 0.328, 0.718);\r
    vec3 b = vec3(0.659, 0.438, 0.328);\r
    vec3 c = vec3(0.388, 0.388, 0.296);\r
    vec3 d = vec3(2.538, 2.478, 0.168);

    return a + b*cos( 6.28318*(c*t+d) );\r
    \r
}

void main() {\r
    \r
    vec2 mUv = vec2(vUv.x - 0.5, vUv.y - 0.5);

    float d = length(mUv);

    vec3 col = palette(d + uTime);

    d = sin(d * 8.0 + uTime) / 8.0;\r
    d = abs(d);

    d = 0.02 / d;

    col *= d;

    gl_FragColor = vec4(col, 1.0);

}`;let ze,tn,li,ol,Ji,Qi,Ri,Ci,Ii,sr,Di,or,Wn,Xn,ni=!1,ii=!1,Dr=!1,Xr=!1,qr=!1,Vr=!1,Gr=!1,Ne,xn,Yr,ri,Zr,ci,Ro=0;const Co=.022,Po=.035,Xp=new URLSearchParams(window.location.search).has("debug");qp();ze.setAnimationLoop(em);function qp(){tn=new Vc,tn.background=new Te(0),li=new an(50,window.innerWidth/window.innerHeight,.1,50),li.position.set(0,1.6,3),tn.add(li),ze=new Vp({antialias:!0}),ze.setPixelRatio(window.devicePixelRatio),ze.setSize(window.innerWidth,window.innerHeight),ze.xr.enabled=!0,document.body.appendChild(ze.domElement),document.body.appendChild(zi.createButton(ze,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]})),Yp(),Zp(),Kp(),$p(),jp(),Jp(),Qp(),tm(),ol=new Jc,window.addEventListener("resize",sm,!1)}function Yp(){const i=new $c(16777215,1);tn.add(i)}function Zp(){const i=new jr(.002,32,32),t=new Ls({color:16711680,opacity:0,transparent:!0});Ii=new He(i,t),sr=new He(i,t),Di=new He(i,t),or=new He(i,t),tn.add(Ii,sr,Di,or)}function Kp(){const i=new jr(.006,32,32),t=new Xc({color:16777215});Wn=new He(i,t),Xn=new He(i,t),Wn.visible=!1,Xn.visible=!1,tn.add(Wn,Xn)}function $p(){Qi=ze.xr.getHand(0),tn.add(Qi),Ji=ze.xr.getHand(1),tn.add(Ji)}function jp(){Ci=ze.xr.getController(0),Ci.addEventListener("selectstart",()=>{Gr=!0,Vn("controller 0 selectstart")}),Ci.addEventListener("selectend",()=>{Gr=!1,Vn("controller 0 selectend")}),Ci.addEventListener("connected",i=>{Vn("controller 0 connected",Ca(i.data))}),tn.add(Ci),Ri=ze.xr.getController(1),Ri.addEventListener("selectstart",()=>{Vr=!0,Vn("controller 1 selectstart")}),Ri.addEventListener("selectend",()=>{Vr=!1,Vn("controller 1 selectend")}),Ri.addEventListener("connected",i=>{Vn("controller 1 connected",Ca(i.data))}),tn.add(Ri),ze.xr.addEventListener("sessionstart",()=>{const i=ze.xr.getSession();Vn("xr sessionstart",{mode:"immersive-vr",inputSources:i?Array.from(i.inputSources).map(Ca):[]})}),ze.xr.addEventListener("sessionend",()=>{Vr=!1,Gr=!1,Vn("xr sessionend")})}function Jp(){ri=new un.World,ri.gravity.set(0,-9.82,0);const i=new un.Material("default"),t=new un.ContactMaterial(i,i,{friction:.1,restitution:.7});ri.addContactMaterial(t),ri.defaultContactMaterial=t,Zr=new un.Box(new un.Vec3(.2*.5,.2*.5,.2*.5)),ci=new un.Body({mass:1,position:new un.Vec3(0,1.5,-.5),shape:Zr}),ri.addBody(ci);const e=new un.Plane,n=new un.Body({mass:0});n.addShape(e),n.quaternion.setFromAxisAngle(new un.Vec3(-1,0,0),Math.PI*.5),n.position.y=.01,ri.addBody(n)}function Qp(){const i=new fi(.2,.2,.2);Yr=new yn({vertexShader:kp,fragmentShader:Wp,transparent:!0,side:pn,depthTest:!0,depthWrite:!1,blending:Pa,uniforms:{uTime:{value:0},resolution:{value:new Ae(1800,1800)}}}),xn=new He(i,Yr),xn.castShadow=!0,xn.position.set(0,1.5,-.5),tn.add(xn)}function tm(){const i=new fi(.05,.05,.05);Ne=new He(i,Yr),Ne.visible=!1,tn.add(Ne)}function em(){const i=ol.getElapsedTime(),t=i-Ro;Ro=i,ri.step(1/60,t,3),xn.position.copy(ci.position),xn.quaternion.copy(ci.quaternion),Yr.uniforms.uTime.value=i,nm(),im(),rm(),ze.render(tn,li)}function nm(){if(qr=!1,Xr=!1,Qi?.joints){const i=Qi.joints["thumb-tip"],t=Qi.joints["index-finger-tip"];Nr(i)&&Nr(t)&&(Ii.position.copy(i.position),sr.position.copy(t.position),qr=!0)}if(Ji?.joints){const i=Ji.joints["thumb-tip"],t=Ji.joints["index-finger-tip"];Nr(i)&&Nr(t)&&(Di.position.copy(i.position),or.position.copy(t.position),Xr=!0)}}function im(){const i=qr?sr.position.distanceTo(Ii.position):1/0,t=Xr?or.position.distanceTo(Di.position):1/0,e=!qr&&Gr&&Lo(Ci,Ii,sr),n=!Xr&&Vr&&Lo(Ri,Di,or);e||!ii&&i<Co?ii=!0:ii&&i>Po&&(ii=!1),ii?Wn.position.copy(Ii.position):Wn.visible=!1,n||!ni&&t<Co?ni=!0:ni&&t>Po&&(ni=!1),ni?Xn.position.copy(Di.position):Xn.visible=!1}function Nr(i){return!!i&&Number.isFinite(i.position?.x)&&Number.isFinite(i.position?.y)&&Number.isFinite(i.position?.z)&&i.visible!==!1}function Lo(i,t,e){return i?(i.updateMatrixWorld(!0),i.getWorldPosition(t.position),e.position.copy(t.position),!0):!1}function Ca(i){return i?{handedness:i.handedness||"none",targetRayMode:i.targetRayMode||"unknown",hasHand:!!i.hand,profiles:i.profiles||[]}:null}function Vn(i,t=null){Xp&&(t===null?console.log(`[glowcube-vr] ${i}`):console.log(`[glowcube-vr] ${i}`,t))}function rm(){ni&&ii?(Dr||(Ne.visible=!0,Dr=!0),ll()):Dr&&(am(),Ne.visible=!1,Dr=!1)}function am(){ll(),ci.position.set(Ne.position.x,Ne.position.y,Ne.position.z),ci.quaternion.set(Ne.quaternion.x,Ne.quaternion.y,Ne.quaternion.z,Ne.quaternion.w??ci.quaternion.w),xn.scale.set(Ne.scale.x*.25,Ne.scale.y*.25,Ne.scale.z*.25);const i=new un.Vec3(xn.scale.x*.125,xn.scale.y*.125,xn.scale.z*.125);Zr.halfExtents=i,Zr.updateConvexPolyhedronRepresentation()}function ll(){const i=new ct().addVectors(Wn.position,Xn.position).divideScalar(2),t=new ct().subVectors(Wn.position,Xn.position).normalize();Ne.position.copy(i),Ne.lookAt(new ct().addVectors(Ne.position,t));const e=Wn.position.distanceTo(Xn.position),n=pc.mapLinear(e,0,.1,0,1);Ne.scale.set(n,n,n)}function sm(){!li||!ze||(li.aspect=window.innerWidth/window.innerHeight,li.updateProjectionMatrix(),ze.setSize(window.innerWidth,window.innerHeight))}
//# sourceMappingURL=index-dda5554a.js.map
