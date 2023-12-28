(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const Bo={},cl=[];function H(e,t){if(Array.isArray(e)){for(const i of e)H(i,t);return}if(typeof e=="object"){for(const i in e)H(i,e[i]);return}hl(Object.getOwnPropertyNames(t)),Bo[e]=Object.assign(Bo[e]||{},t)}function Vt(e){return Bo[e]||{}}function Zc(){return[...new Set(cl)]}function hl(e){cl.push(...e)}function yn(e,t){let i;const s=e.length,r=[];for(i=0;i<s;i++)r.push(t(e[i]));return r}function Jc(e,t){let i;const s=e.length,r=[];for(i=0;i<s;i++)t(e[i])&&r.push(e[i]);return r}function go(e){return e%360*Math.PI/180}function ur(e){return e.toLowerCase().replace(/-(.)/g,function(t,i){return i.toUpperCase()})}function th(e){return e.replace(/([A-Z])/g,function(t,i){return"-"+i.toLowerCase()})}function ul(e){return e.charAt(0).toUpperCase()+e.slice(1)}function qi(e,t,i,s){return(t==null||i==null)&&(s=s||e.bbox(),t==null?t=s.width/s.height*i:i==null&&(i=s.height/s.width*t)),{width:t,height:i}}function Uo(e,t){const i=e.origin;let s=e.ox!=null?e.ox:e.originX!=null?e.originX:"center",r=e.oy!=null?e.oy:e.originY!=null?e.originY:"center";i!=null&&([s,r]=Array.isArray(i)?i:typeof i=="object"?[i.x,i.y]:[i,i]);const o=typeof s=="string",n=typeof r=="string";if(o||n){const{height:l,width:a,x:c,y:u}=t.bbox();o&&(s=s.includes("left")?c:s.includes("right")?c+a:c+a/2),n&&(r=r.includes("top")?u:r.includes("bottom")?u+l:u+l/2)}return[s,r]}const wn="http://www.w3.org/2000/svg",eh="http://www.w3.org/1999/xhtml",dr="http://www.w3.org/2000/xmlns/",Us="http://www.w3.org/1999/xlink",ih="http://svgjs.dev/svgjs",J={window:typeof window>"u"?null:window,document:typeof document>"u"?null:document};class _n{}const yi={},xn="___SYMBOL___ROOT___";function Ts(e,t=wn){return J.document.createElementNS(t,e)}function Pt(e,t=!1){if(e instanceof _n)return e;if(typeof e=="object")return bo(e);if(e==null)return new yi[xn];if(typeof e=="string"&&e.charAt(0)!=="<")return bo(J.document.querySelector(e));const i=t?J.document.createElement("div"):Ts("svg");return i.innerHTML=e,e=bo(i.firstChild),i.removeChild(i.firstChild),e}function ut(e,t){return t&&t.ownerDocument&&t instanceof t.ownerDocument.defaultView.Node?t:Ts(e)}function ie(e){if(!e)return null;if(e.instance instanceof _n)return e.instance;if(e.nodeName==="#document-fragment")return new yi.Fragment(e);let t=ul(e.nodeName||"Dom");return t==="LinearGradient"||t==="RadialGradient"?t="Gradient":yi[t]||(t="Dom"),new yi[t](e)}let bo=ie;function W(e,t=e.name,i=!1){return yi[t]=e,i&&(yi[xn]=e),hl(Object.getOwnPropertyNames(e.prototype)),e}function sh(e){return yi[e]}let rh=1e3;function dl(e){return"Svgjs"+ul(e)+rh++}function pl(e){for(let t=e.children.length-1;t>=0;t--)pl(e.children[t]);return e.id&&(e.id=dl(e.nodeName)),e}function Y(e,t){let i,s;for(e=Array.isArray(e)?e:[e],s=e.length-1;s>=0;s--)for(i in t)e[s].prototype[i]=t[i]}function ht(e){return function(...t){const i=t[t.length-1];return i&&i.constructor===Object&&!(i instanceof Array)?e.apply(this,t.slice(0,-1)).attr(i):e.apply(this,t)}}function oh(){return this.parent().children()}function nh(){return this.parent().index(this)}function ah(){return this.siblings()[this.position()+1]}function lh(){return this.siblings()[this.position()-1]}function ch(){const e=this.position();return this.parent().add(this.remove(),e+1),this}function hh(){const e=this.position();return this.parent().add(this.remove(),e?e-1:0),this}function uh(){return this.parent().add(this.remove()),this}function dh(){return this.parent().add(this.remove(),0),this}function ph(e){e=Pt(e),e.remove();const t=this.position();return this.parent().add(e,t),this}function fh(e){e=Pt(e),e.remove();const t=this.position();return this.parent().add(e,t+1),this}function mh(e){return e=Pt(e),e.before(this),this}function gh(e){return e=Pt(e),e.after(this),this}H("Dom",{siblings:oh,position:nh,next:ah,prev:lh,forward:ch,backward:hh,front:uh,back:dh,before:ph,after:fh,insertBefore:mh,insertAfter:gh});const fl=/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,bh=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,vh=/rgb\((\d+),(\d+),(\d+)\)/,yh=/(#[a-z_][a-z0-9\-_]*)/i,wh=/\)\s*,?\s*/,_h=/\s/g,oa=/^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i,na=/^rgb\(/,aa=/^(\s+)?$/,la=/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,xh=/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,Re=/[\s,]+/,kn=/[MLHVCSQTAZ]/i;function kh(){const e=this.attr("class");return e==null?[]:e.trim().split(Re)}function Ch(e){return this.classes().indexOf(e)!==-1}function $h(e){if(!this.hasClass(e)){const t=this.classes();t.push(e),this.attr("class",t.join(" "))}return this}function Sh(e){return this.hasClass(e)&&this.attr("class",this.classes().filter(function(t){return t!==e}).join(" ")),this}function Ah(e){return this.hasClass(e)?this.removeClass(e):this.addClass(e)}H("Dom",{classes:kh,hasClass:Ch,addClass:$h,removeClass:Sh,toggleClass:Ah});function zh(e,t){const i={};if(arguments.length===0)return this.node.style.cssText.split(/\s*;\s*/).filter(function(s){return!!s.length}).forEach(function(s){const r=s.split(/\s*:\s*/);i[r[0]]=r[1]}),i;if(arguments.length<2){if(Array.isArray(e)){for(const s of e){const r=ur(s);i[s]=this.node.style[r]}return i}if(typeof e=="string")return this.node.style[ur(e)];if(typeof e=="object")for(const s in e)this.node.style[ur(s)]=e[s]==null||aa.test(e[s])?"":e[s]}return arguments.length===2&&(this.node.style[ur(e)]=t==null||aa.test(t)?"":t),this}function Eh(){return this.css("display","")}function Th(){return this.css("display","none")}function Mh(){return this.css("display")!=="none"}H("Dom",{css:zh,show:Eh,hide:Th,visible:Mh});function Oh(e,t,i){if(e==null)return this.data(yn(Jc(this.node.attributes,s=>s.nodeName.indexOf("data-")===0),s=>s.nodeName.slice(5)));if(e instanceof Array){const s={};for(const r of e)s[r]=this.data(r);return s}else if(typeof e=="object")for(t in e)this.data(t,e[t]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+e))}catch{return this.attr("data-"+e)}else this.attr("data-"+e,t===null?null:i===!0||typeof t=="string"||typeof t=="number"?t:JSON.stringify(t));return this}H("Dom",{data:Oh});function Ih(e,t){if(typeof arguments[0]=="object")for(const i in e)this.remember(i,e[i]);else{if(arguments.length===1)return this.memory()[e];this.memory()[e]=t}return this}function Lh(){if(arguments.length===0)this._memory={};else for(let e=arguments.length-1;e>=0;e--)delete this.memory()[arguments[e]];return this}function Dh(){return this._memory=this._memory||{}}H("Dom",{remember:Ih,forget:Lh,memory:Dh});function Ph(e){return e.length===4?["#",e.substring(1,2),e.substring(1,2),e.substring(2,3),e.substring(2,3),e.substring(3,4),e.substring(3,4)].join(""):e}function Rh(e){const t=Math.round(e),s=Math.max(0,Math.min(255,t)).toString(16);return s.length===1?"0"+s:s}function Ti(e,t){for(let i=t.length;i--;)if(e[t[i]]==null)return!1;return!0}function Fh(e,t){const i=Ti(e,"rgb")?{_a:e.r,_b:e.g,_c:e.b,_d:0,space:"rgb"}:Ti(e,"xyz")?{_a:e.x,_b:e.y,_c:e.z,_d:0,space:"xyz"}:Ti(e,"hsl")?{_a:e.h,_b:e.s,_c:e.l,_d:0,space:"hsl"}:Ti(e,"lab")?{_a:e.l,_b:e.a,_c:e.b,_d:0,space:"lab"}:Ti(e,"lch")?{_a:e.l,_b:e.c,_c:e.h,_d:0,space:"lch"}:Ti(e,"cmyk")?{_a:e.c,_b:e.m,_c:e.y,_d:e.k,space:"cmyk"}:{_a:0,_b:0,_c:0,space:"rgb"};return i.space=t||i.space,i}function Nh(e){return e==="lab"||e==="xyz"||e==="lch"}function vo(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}class ot{constructor(...t){this.init(...t)}static isColor(t){return t&&(t instanceof ot||this.isRgb(t)||this.test(t))}static isRgb(t){return t&&typeof t.r=="number"&&typeof t.g=="number"&&typeof t.b=="number"}static random(t="vibrant",i,s){const{random:r,round:o,sin:n,PI:l}=Math;if(t==="vibrant"){const a=24*r()+57,c=38*r()+45,u=360*r();return new ot(a,c,u,"lch")}else if(t==="sine"){i=i??r();const a=o(80*n(2*l*i/.5+.01)+150),c=o(50*n(2*l*i/.5+4.6)+200),u=o(100*n(2*l*i/.5+2.3)+150);return new ot(a,c,u)}else if(t==="pastel"){const a=8*r()+86,c=17*r()+9,u=360*r();return new ot(a,c,u,"lch")}else if(t==="dark"){const a=10+10*r(),c=50*r()+86,u=360*r();return new ot(a,c,u,"lch")}else if(t==="rgb"){const a=255*r(),c=255*r(),u=255*r();return new ot(a,c,u)}else if(t==="lab"){const a=100*r(),c=256*r()-128,u=256*r()-128;return new ot(a,c,u,"lab")}else if(t==="grey"){const a=255*r();return new ot(a,a,a)}else throw new Error("Unsupported random color mode")}static test(t){return typeof t=="string"&&(oa.test(t)||na.test(t))}cmyk(){const{_a:t,_b:i,_c:s}=this.rgb(),[r,o,n]=[t,i,s].map(p=>p/255),l=Math.min(1-r,1-o,1-n);if(l===1)return new ot(0,0,0,1,"cmyk");const a=(1-r-l)/(1-l),c=(1-o-l)/(1-l),u=(1-n-l)/(1-l);return new ot(a,c,u,l,"cmyk")}hsl(){const{_a:t,_b:i,_c:s}=this.rgb(),[r,o,n]=[t,i,s].map(b=>b/255),l=Math.max(r,o,n),a=Math.min(r,o,n),c=(l+a)/2,u=l===a,d=l-a,p=u?0:c>.5?d/(2-l-a):d/(l+a),f=u?0:l===r?((o-n)/d+(o<n?6:0))/6:l===o?((n-r)/d+2)/6:l===n?((r-o)/d+4)/6:0;return new ot(360*f,100*p,100*c,"hsl")}init(t=0,i=0,s=0,r=0,o="rgb"){if(t=t||0,this.space)for(const d in this.space)delete this[this.space[d]];if(typeof t=="number")o=typeof r=="string"?r:o,r=typeof r=="string"?0:r,Object.assign(this,{_a:t,_b:i,_c:s,_d:r,space:o});else if(t instanceof Array)this.space=i||(typeof t[3]=="string"?t[3]:t[4])||"rgb",Object.assign(this,{_a:t[0],_b:t[1],_c:t[2],_d:t[3]||0});else if(t instanceof Object){const d=Fh(t,i);Object.assign(this,d)}else if(typeof t=="string")if(na.test(t)){const d=t.replace(_h,""),[p,f,g]=vh.exec(d).slice(1,4).map(b=>parseInt(b));Object.assign(this,{_a:p,_b:f,_c:g,_d:0,space:"rgb"})}else if(oa.test(t)){const d=b=>parseInt(b,16),[,p,f,g]=bh.exec(Ph(t)).map(d);Object.assign(this,{_a:p,_b:f,_c:g,_d:0,space:"rgb"})}else throw Error("Unsupported string format, can't construct Color");const{_a:n,_b:l,_c:a,_d:c}=this,u=this.space==="rgb"?{r:n,g:l,b:a}:this.space==="xyz"?{x:n,y:l,z:a}:this.space==="hsl"?{h:n,s:l,l:a}:this.space==="lab"?{l:n,a:l,b:a}:this.space==="lch"?{l:n,c:l,h:a}:this.space==="cmyk"?{c:n,m:l,y:a,k:c}:{};Object.assign(this,u)}lab(){const{x:t,y:i,z:s}=this.xyz(),r=116*i-16,o=500*(t-i),n=200*(i-s);return new ot(r,o,n,"lab")}lch(){const{l:t,a:i,b:s}=this.lab(),r=Math.sqrt(i**2+s**2);let o=180*Math.atan2(s,i)/Math.PI;return o<0&&(o*=-1,o=360-o),new ot(t,r,o,"lch")}rgb(){if(this.space==="rgb")return this;if(Nh(this.space)){let{x:t,y:i,z:s}=this;if(this.space==="lab"||this.space==="lch"){let{l:f,a:g,b}=this;if(this.space==="lch"){const{c:C,h:T}=this,M=Math.PI/180;g=C*Math.cos(M*T),b=C*Math.sin(M*T)}const v=(f+16)/116,y=g/500+v,_=v-b/200,k=16/116,x=.008856,w=7.787;t=.95047*(y**3>x?y**3:(y-k)/w),i=1*(v**3>x?v**3:(v-k)/w),s=1.08883*(_**3>x?_**3:(_-k)/w)}const r=t*3.2406+i*-1.5372+s*-.4986,o=t*-.9689+i*1.8758+s*.0415,n=t*.0557+i*-.204+s*1.057,l=Math.pow,a=.0031308,c=r>a?1.055*l(r,1/2.4)-.055:12.92*r,u=o>a?1.055*l(o,1/2.4)-.055:12.92*o,d=n>a?1.055*l(n,1/2.4)-.055:12.92*n;return new ot(255*c,255*u,255*d)}else if(this.space==="hsl"){let{h:t,s:i,l:s}=this;if(t/=360,i/=100,s/=100,i===0)return s*=255,new ot(s,s,s);const r=s<.5?s*(1+i):s+i-s*i,o=2*s-r,n=255*vo(o,r,t+1/3),l=255*vo(o,r,t),a=255*vo(o,r,t-1/3);return new ot(n,l,a)}else if(this.space==="cmyk"){const{c:t,m:i,y:s,k:r}=this,o=255*(1-Math.min(1,t*(1-r)+r)),n=255*(1-Math.min(1,i*(1-r)+r)),l=255*(1-Math.min(1,s*(1-r)+r));return new ot(o,n,l)}else return this}toArray(){const{_a:t,_b:i,_c:s,_d:r,space:o}=this;return[t,i,s,r,o]}toHex(){const[t,i,s]=this._clamped().map(Rh);return`#${t}${i}${s}`}toRgb(){const[t,i,s]=this._clamped();return`rgb(${t},${i},${s})`}toString(){return this.toHex()}xyz(){const{_a:t,_b:i,_c:s}=this.rgb(),[r,o,n]=[t,i,s].map(y=>y/255),l=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,a=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92,c=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,u=(l*.4124+a*.3576+c*.1805)/.95047,d=(l*.2126+a*.7152+c*.0722)/1,p=(l*.0193+a*.1192+c*.9505)/1.08883,f=u>.008856?Math.pow(u,1/3):7.787*u+16/116,g=d>.008856?Math.pow(d,1/3):7.787*d+16/116,b=p>.008856?Math.pow(p,1/3):7.787*p+16/116;return new ot(f,g,b,"xyz")}_clamped(){const{_a:t,_b:i,_c:s}=this.rgb(),{max:r,min:o,round:n}=Math,l=a=>r(0,o(n(a),255));return[t,i,s].map(l)}}class wt{constructor(...t){this.init(...t)}clone(){return new wt(this)}init(t,i){const s={x:0,y:0},r=Array.isArray(t)?{x:t[0],y:t[1]}:typeof t=="object"?{x:t.x,y:t.y}:{x:t,y:i};return this.x=r.x==null?s.x:r.x,this.y=r.y==null?s.y:r.y,this}toArray(){return[this.x,this.y]}transform(t){return this.clone().transformO(t)}transformO(t){P.isMatrixLike(t)||(t=new P(t));const{x:i,y:s}=this;return this.x=t.a*i+t.c*s+t.e,this.y=t.b*i+t.d*s+t.f,this}}function Vh(e,t){return new wt(e,t).transformO(this.screenCTM().inverseO())}function Mi(e,t,i){return Math.abs(t-e)<(i||1e-6)}class P{constructor(...t){this.init(...t)}static formatTransforms(t){const i=t.flip==="both"||t.flip===!0,s=t.flip&&(i||t.flip==="x")?-1:1,r=t.flip&&(i||t.flip==="y")?-1:1,o=t.skew&&t.skew.length?t.skew[0]:isFinite(t.skew)?t.skew:isFinite(t.skewX)?t.skewX:0,n=t.skew&&t.skew.length?t.skew[1]:isFinite(t.skew)?t.skew:isFinite(t.skewY)?t.skewY:0,l=t.scale&&t.scale.length?t.scale[0]*s:isFinite(t.scale)?t.scale*s:isFinite(t.scaleX)?t.scaleX*s:s,a=t.scale&&t.scale.length?t.scale[1]*r:isFinite(t.scale)?t.scale*r:isFinite(t.scaleY)?t.scaleY*r:r,c=t.shear||0,u=t.rotate||t.theta||0,d=new wt(t.origin||t.around||t.ox||t.originX,t.oy||t.originY),p=d.x,f=d.y,g=new wt(t.position||t.px||t.positionX||NaN,t.py||t.positionY||NaN),b=g.x,v=g.y,y=new wt(t.translate||t.tx||t.translateX,t.ty||t.translateY),_=y.x,k=y.y,x=new wt(t.relative||t.rx||t.relativeX,t.ry||t.relativeY),w=x.x,C=x.y;return{scaleX:l,scaleY:a,skewX:o,skewY:n,shear:c,theta:u,rx:w,ry:C,tx:_,ty:k,ox:p,oy:f,px:b,py:v}}static fromArray(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}static isMatrixLike(t){return t.a!=null||t.b!=null||t.c!=null||t.d!=null||t.e!=null||t.f!=null}static matrixMultiply(t,i,s){const r=t.a*i.a+t.c*i.b,o=t.b*i.a+t.d*i.b,n=t.a*i.c+t.c*i.d,l=t.b*i.c+t.d*i.d,a=t.e+t.a*i.e+t.c*i.f,c=t.f+t.b*i.e+t.d*i.f;return s.a=r,s.b=o,s.c=n,s.d=l,s.e=a,s.f=c,s}around(t,i,s){return this.clone().aroundO(t,i,s)}aroundO(t,i,s){const r=t||0,o=i||0;return this.translateO(-r,-o).lmultiplyO(s).translateO(r,o)}clone(){return new P(this)}decompose(t=0,i=0){const s=this.a,r=this.b,o=this.c,n=this.d,l=this.e,a=this.f,c=s*n-r*o,u=c>0?1:-1,d=u*Math.sqrt(s*s+r*r),p=Math.atan2(u*r,u*s),f=180/Math.PI*p,g=Math.cos(p),b=Math.sin(p),v=(s*o+r*n)/c,y=o*d/(v*s-r)||n*d/(v*r+s),_=l-t+t*g*d+i*(v*g*d-b*y),k=a-i+t*b*d+i*(v*b*d+g*y);return{scaleX:d,scaleY:y,shear:v,rotate:f,translateX:_,translateY:k,originX:t,originY:i,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}equals(t){if(t===this)return!0;const i=new P(t);return Mi(this.a,i.a)&&Mi(this.b,i.b)&&Mi(this.c,i.c)&&Mi(this.d,i.d)&&Mi(this.e,i.e)&&Mi(this.f,i.f)}flip(t,i){return this.clone().flipO(t,i)}flipO(t,i){return t==="x"?this.scaleO(-1,1,i,0):t==="y"?this.scaleO(1,-1,0,i):this.scaleO(-1,-1,t,i||t)}init(t){const i=P.fromArray([1,0,0,1,0,0]);return t=t instanceof _e?t.matrixify():typeof t=="string"?P.fromArray(t.split(Re).map(parseFloat)):Array.isArray(t)?P.fromArray(t):typeof t=="object"&&P.isMatrixLike(t)?t:typeof t=="object"?new P().transform(t):arguments.length===6?P.fromArray([].slice.call(arguments)):i,this.a=t.a!=null?t.a:i.a,this.b=t.b!=null?t.b:i.b,this.c=t.c!=null?t.c:i.c,this.d=t.d!=null?t.d:i.d,this.e=t.e!=null?t.e:i.e,this.f=t.f!=null?t.f:i.f,this}inverse(){return this.clone().inverseO()}inverseO(){const t=this.a,i=this.b,s=this.c,r=this.d,o=this.e,n=this.f,l=t*r-i*s;if(!l)throw new Error("Cannot invert "+this);const a=r/l,c=-i/l,u=-s/l,d=t/l,p=-(a*o+u*n),f=-(c*o+d*n);return this.a=a,this.b=c,this.c=u,this.d=d,this.e=p,this.f=f,this}lmultiply(t){return this.clone().lmultiplyO(t)}lmultiplyO(t){const i=this,s=t instanceof P?t:new P(t);return P.matrixMultiply(s,i,this)}multiply(t){return this.clone().multiplyO(t)}multiplyO(t){const i=this,s=t instanceof P?t:new P(t);return P.matrixMultiply(i,s,this)}rotate(t,i,s){return this.clone().rotateO(t,i,s)}rotateO(t,i=0,s=0){t=go(t);const r=Math.cos(t),o=Math.sin(t),{a:n,b:l,c:a,d:c,e:u,f:d}=this;return this.a=n*r-l*o,this.b=l*r+n*o,this.c=a*r-c*o,this.d=c*r+a*o,this.e=u*r-d*o+s*o-i*r+i,this.f=d*r+u*o-i*o-s*r+s,this}scale(t,i,s,r){return this.clone().scaleO(...arguments)}scaleO(t,i=t,s=0,r=0){arguments.length===3&&(r=s,s=i,i=t);const{a:o,b:n,c:l,d:a,e:c,f:u}=this;return this.a=o*t,this.b=n*i,this.c=l*t,this.d=a*i,this.e=c*t-s*t+s,this.f=u*i-r*i+r,this}shear(t,i,s){return this.clone().shearO(t,i,s)}shearO(t,i=0,s=0){const{a:r,b:o,c:n,d:l,e:a,f:c}=this;return this.a=r+o*t,this.c=n+l*t,this.e=a+c*t-s*t,this}skew(t,i,s,r){return this.clone().skewO(...arguments)}skewO(t,i=t,s=0,r=0){arguments.length===3&&(r=s,s=i,i=t),t=go(t),i=go(i);const o=Math.tan(t),n=Math.tan(i),{a:l,b:a,c,d:u,e:d,f:p}=this;return this.a=l+a*o,this.b=a+l*n,this.c=c+u*o,this.d=u+c*n,this.e=d+p*o-r*o,this.f=p+d*n-s*n,this}skewX(t,i,s){return this.skew(t,0,i,s)}skewY(t,i,s){return this.skew(0,t,i,s)}toArray(){return[this.a,this.b,this.c,this.d,this.e,this.f]}toString(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}transform(t){if(P.isMatrixLike(t))return new P(t).multiplyO(this);const i=P.formatTransforms(t),s=this,{x:r,y:o}=new wt(i.ox,i.oy).transform(s),n=new P().translateO(i.rx,i.ry).lmultiplyO(s).translateO(-r,-o).scaleO(i.scaleX,i.scaleY).skewO(i.skewX,i.skewY).shearO(i.shear).rotateO(i.theta).translateO(r,o);if(isFinite(i.px)||isFinite(i.py)){const l=new wt(r,o).transform(n),a=isFinite(i.px)?i.px-l.x:0,c=isFinite(i.py)?i.py-l.y:0;n.translateO(a,c)}return n.translateO(i.tx,i.ty),n}translate(t,i){return this.clone().translateO(t,i)}translateO(t,i){return this.e+=t||0,this.f+=i||0,this}valueOf(){return{a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}}function Bh(){return new P(this.node.getCTM())}function Uh(){if(typeof this.isRoot=="function"&&!this.isRoot()){const e=this.rect(1,1),t=e.node.getScreenCTM();return e.remove(),new P(t)}return new P(this.node.getScreenCTM())}W(P,"Matrix");function qe(){if(!qe.nodes){const e=Pt().size(2,0);e.node.style.cssText=["opacity: 0","position: absolute","left: -100%","top: -100%","overflow: hidden"].join(";"),e.attr("focusable","false"),e.attr("aria-hidden","true");const t=e.path().node;qe.nodes={svg:e,path:t}}if(!qe.nodes.svg.node.parentNode){const e=J.document.body||J.document.documentElement;qe.nodes.svg.addTo(e)}return qe.nodes}function ml(e){return!e.width&&!e.height&&!e.x&&!e.y}function Hh(e){return e===J.document||(J.document.documentElement.contains||function(t){for(;t.parentNode;)t=t.parentNode;return t===J.document}).call(J.document.documentElement,e)}class It{constructor(...t){this.init(...t)}addOffset(){return this.x+=J.window.pageXOffset,this.y+=J.window.pageYOffset,new It(this)}init(t){const i=[0,0,0,0];return t=typeof t=="string"?t.split(Re).map(parseFloat):Array.isArray(t)?t:typeof t=="object"?[t.left!=null?t.left:t.x,t.top!=null?t.top:t.y,t.width,t.height]:arguments.length===4?[].slice.call(arguments):i,this.x=t[0]||0,this.y=t[1]||0,this.width=this.w=t[2]||0,this.height=this.h=t[3]||0,this.x2=this.x+this.w,this.y2=this.y+this.h,this.cx=this.x+this.w/2,this.cy=this.y+this.h/2,this}isNulled(){return ml(this)}merge(t){const i=Math.min(this.x,t.x),s=Math.min(this.y,t.y),r=Math.max(this.x+this.width,t.x+t.width)-i,o=Math.max(this.y+this.height,t.y+t.height)-s;return new It(i,s,r,o)}toArray(){return[this.x,this.y,this.width,this.height]}toString(){return this.x+" "+this.y+" "+this.width+" "+this.height}transform(t){t instanceof P||(t=new P(t));let i=1/0,s=-1/0,r=1/0,o=-1/0;return[new wt(this.x,this.y),new wt(this.x2,this.y),new wt(this.x,this.y2),new wt(this.x2,this.y2)].forEach(function(l){l=l.transform(t),i=Math.min(i,l.x),s=Math.max(s,l.x),r=Math.min(r,l.y),o=Math.max(o,l.y)}),new It(i,r,s-i,o-r)}}function gl(e,t,i){let s;try{if(s=t(e.node),ml(s)&&!Hh(e.node))throw new Error("Element not in the dom")}catch{s=i(e)}return s}function jh(){const i=gl(this,r=>r.getBBox(),r=>{try{const o=r.clone().addTo(qe().svg).show(),n=o.node.getBBox();return o.remove(),n}catch(o){throw new Error(`Getting bbox of element "${r.node.nodeName}" is not possible: ${o.toString()}`)}});return new It(i)}function qh(e){const s=gl(this,o=>o.getBoundingClientRect(),o=>{throw new Error(`Getting rbox of element "${o.node.nodeName}" is not possible`)}),r=new It(s);return e?r.transform(e.screenCTM().inverseO()):r.addOffset()}function Xh(e,t){const i=this.bbox();return e>i.x&&t>i.y&&e<i.x+i.width&&t<i.y+i.height}H({viewbox:{viewbox(e,t,i,s){return e==null?new It(this.attr("viewBox")):this.attr("viewBox",new It(e,t,i,s))},zoom(e,t){let{width:i,height:s}=this.attr(["width","height"]);if((!i&&!s||typeof i=="string"||typeof s=="string")&&(i=this.node.clientWidth,s=this.node.clientHeight),!i||!s)throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");const r=this.viewbox(),o=i/r.width,n=s/r.height,l=Math.min(o,n);if(e==null)return l;let a=l/e;a===1/0&&(a=Number.MAX_SAFE_INTEGER/100),t=t||new wt(i/2/o+r.x,s/2/n+r.y);const c=new It(r).transform(new P({scale:a,origin:t}));return this.viewbox(c)}}});W(It,"Box");class wi extends Array{constructor(t=[],...i){if(super(t,...i),typeof t=="number")return this;this.length=0,this.push(...t)}}Y([wi],{each(e,...t){return typeof e=="function"?this.map((i,s,r)=>e.call(i,i,s,r)):this.map(i=>i[e](...t))},toArray(){return Array.prototype.concat.apply([],this)}});const Yh=["toArray","constructor","each"];wi.extend=function(e){e=e.reduce((t,i)=>(Yh.includes(i)||i[0]==="_"||(t[i]=function(...s){return this.each(i,...s)}),t),{}),Y([wi],e)};function Xi(e,t){return new wi(yn((t||J.document).querySelectorAll(e),function(i){return ie(i)}))}function Wh(e){return Xi(e,this.node)}function Kh(e){return ie(this.node.querySelector(e))}let Gh=0;const bl={};function vl(e){let t=e.getEventHolder();return t===J.window&&(t=bl),t.events||(t.events={}),t.events}function Cn(e){return e.getEventTarget()}function Qh(e){let t=e.getEventHolder();t===J.window&&(t=bl),t.events&&(t.events={})}function Ho(e,t,i,s,r){const o=i.bind(s||e),n=Pt(e),l=vl(n),a=Cn(n);t=Array.isArray(t)?t:t.split(Re),i._svgjsListenerId||(i._svgjsListenerId=++Gh),t.forEach(function(c){const u=c.split(".")[0],d=c.split(".")[1]||"*";l[u]=l[u]||{},l[u][d]=l[u][d]||{},l[u][d][i._svgjsListenerId]=o,a.addEventListener(u,o,r||!1)})}function Li(e,t,i,s){const r=Pt(e),o=vl(r),n=Cn(r);typeof i=="function"&&(i=i._svgjsListenerId,!i)||(t=Array.isArray(t)?t:(t||"").split(Re),t.forEach(function(l){const a=l&&l.split(".")[0],c=l&&l.split(".")[1];let u,d;if(i)o[a]&&o[a][c||"*"]&&(n.removeEventListener(a,o[a][c||"*"][i],s||!1),delete o[a][c||"*"][i]);else if(a&&c){if(o[a]&&o[a][c]){for(d in o[a][c])Li(n,[a,c].join("."),d);delete o[a][c]}}else if(c)for(l in o)for(u in o[l])c===u&&Li(n,[l,c].join("."));else if(a){if(o[a]){for(u in o[a])Li(n,[a,u].join("."));delete o[a]}}else{for(l in o)Li(n,l);Qh(r)}}))}function Zh(e,t,i,s){const r=Cn(e);return t instanceof J.window.Event||(t=new J.window.CustomEvent(t,{detail:i,cancelable:!0,...s})),r.dispatchEvent(t),t}let Hs=class extends _n{addEventListener(){}dispatch(t,i,s){return Zh(this,t,i,s)}dispatchEvent(t){const i=this.getEventHolder().events;if(!i)return!0;const s=i[t.type];for(const r in s)for(const o in s[r])s[r][o](t);return!t.defaultPrevented}fire(t,i,s){return this.dispatch(t,i,s),this}getEventHolder(){return this}getEventTarget(){return this}off(t,i,s){return Li(this,t,i,s),this}on(t,i,s,r){return Ho(this,t,i,s,r),this}removeEventListener(){}};W(Hs,"EventTarget");function ca(){}const bs={duration:400,ease:">",delay:0},Jh={"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","text-anchor":"start"};class Ni extends Array{constructor(...t){super(...t),this.init(...t)}clone(){return new this.constructor(this)}init(t){return typeof t=="number"?this:(this.length=0,this.push(...this.parse(t)),this)}parse(t=[]){return t instanceof Array?t:t.trim().split(Re).map(parseFloat)}toArray(){return Array.prototype.concat.apply([],this)}toSet(){return new Set(this)}toString(){return this.join(" ")}valueOf(){const t=[];return t.push(...this),t}}class B{constructor(...t){this.init(...t)}convert(t){return new B(this.value,t)}divide(t){return t=new B(t),new B(this/t,this.unit||t.unit)}init(t,i){return i=Array.isArray(t)?t[1]:i,t=Array.isArray(t)?t[0]:t,this.value=0,this.unit=i||"",typeof t=="number"?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-34e37:34e37:typeof t=="string"?(i=t.match(fl),i&&(this.value=parseFloat(i[1]),i[5]==="%"?this.value/=100:i[5]==="s"&&(this.value*=1e3),this.unit=i[5])):t instanceof B&&(this.value=t.valueOf(),this.unit=t.unit),this}minus(t){return t=new B(t),new B(this-t,this.unit||t.unit)}plus(t){return t=new B(t),new B(this+t,this.unit||t.unit)}times(t){return t=new B(t),new B(this*t,this.unit||t.unit)}toArray(){return[this.value,this.unit]}toJSON(){return this.toString()}toString(){return(this.unit==="%"?~~(this.value*1e8)/1e6:this.unit==="s"?this.value/1e3:this.value)+this.unit}valueOf(){return this.value}}const yl=[];function tu(e){yl.push(e)}function eu(e,t,i){if(e==null){e={},t=this.node.attributes;for(const s of t)e[s.nodeName]=la.test(s.nodeValue)?parseFloat(s.nodeValue):s.nodeValue;return e}else{if(e instanceof Array)return e.reduce((s,r)=>(s[r]=this.attr(r),s),{});if(typeof e=="object"&&e.constructor===Object)for(t in e)this.attr(t,e[t]);else if(t===null)this.node.removeAttribute(e);else{if(t==null)return t=this.node.getAttribute(e),t==null?Jh[e]:la.test(t)?parseFloat(t):t;t=yl.reduce((s,r)=>r(e,s,this),t),typeof t=="number"?t=new B(t):ot.isColor(t)?t=new ot(t):t.constructor===Array&&(t=new Ni(t)),e==="leading"?this.leading&&this.leading(t):typeof i=="string"?this.node.setAttributeNS(i,e,t.toString()):this.node.setAttribute(e,t.toString()),this.rebuild&&(e==="font-size"||e==="x")&&this.rebuild()}}return this}class Ke extends Hs{constructor(t,i){super(),this.node=t,this.type=t.nodeName,i&&t!==i&&this.attr(i)}add(t,i){return t=Pt(t),t.removeNamespace&&this.node instanceof J.window.SVGElement&&t.removeNamespace(),i==null?this.node.appendChild(t.node):t.node!==this.node.childNodes[i]&&this.node.insertBefore(t.node,this.node.childNodes[i]),this}addTo(t,i){return Pt(t).put(this,i)}children(){return new wi(yn(this.node.children,function(t){return ie(t)}))}clear(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this}clone(t=!0,i=!0){this.writeDataToDom();let s=this.node.cloneNode(t);return i&&(s=pl(s)),new this.constructor(s)}each(t,i){const s=this.children();let r,o;for(r=0,o=s.length;r<o;r++)t.apply(s[r],[r,s]),i&&s[r].each(t,i);return this}element(t,i){return this.put(new Ke(Ts(t),i))}first(){return ie(this.node.firstChild)}get(t){return ie(this.node.childNodes[t])}getEventHolder(){return this.node}getEventTarget(){return this.node}has(t){return this.index(t)>=0}html(t,i){return this.xml(t,i,eh)}id(t){return typeof t>"u"&&!this.node.id&&(this.node.id=dl(this.type)),this.attr("id",t)}index(t){return[].slice.call(this.node.childNodes).indexOf(t.node)}last(){return ie(this.node.lastChild)}matches(t){const i=this.node,s=i.matches||i.matchesSelector||i.msMatchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||i.oMatchesSelector||null;return s&&s.call(i,t)}parent(t){let i=this;if(!i.node.parentNode)return null;if(i=ie(i.node.parentNode),!t)return i;do if(typeof t=="string"?i.matches(t):i instanceof t)return i;while(i=ie(i.node.parentNode));return i}put(t,i){return t=Pt(t),this.add(t,i),t}putIn(t,i){return Pt(t).add(this,i)}remove(){return this.parent()&&this.parent().removeElement(this),this}removeElement(t){return this.node.removeChild(t.node),this}replace(t){return t=Pt(t),this.node.parentNode&&this.node.parentNode.replaceChild(t.node,this.node),t}round(t=2,i=null){const s=10**t,r=this.attr(i);for(const o in r)typeof r[o]=="number"&&(r[o]=Math.round(r[o]*s)/s);return this.attr(r),this}svg(t,i){return this.xml(t,i,wn)}toString(){return this.id()}words(t){return this.node.textContent=t,this}wrap(t){const i=this.parent();if(!i)return this.addTo(t);const s=i.index(this);return i.put(t,s).put(this)}writeDataToDom(){return this.each(function(){this.writeDataToDom()}),this}xml(t,i,s){if(typeof t=="boolean"&&(s=i,i=t,t=null),t==null||typeof t=="function"){i=i??!0,this.writeDataToDom();let l=this;if(t!=null){if(l=ie(l.node.cloneNode(!0)),i){const a=t(l);if(l=a||l,a===!1)return""}l.each(function(){const a=t(this),c=a||this;a===!1?this.remove():a&&this!==c&&this.replace(c)},!0)}return i?l.node.outerHTML:l.node.innerHTML}i=i??!1;const r=Ts("wrapper",s),o=J.document.createDocumentFragment();r.innerHTML=t;for(let l=r.children.length;l--;)o.appendChild(r.firstElementChild);const n=this.parent();return i?this.replace(o)&&n:this.add(o)}}Y(Ke,{attr:eu,find:Wh,findOne:Kh});W(Ke,"Dom");let _e=class extends Ke{constructor(t,i){super(t,i),this.dom={},this.node.instance=this,t.hasAttribute("svgjs:data")&&this.setData(JSON.parse(t.getAttribute("svgjs:data"))||{})}center(t,i){return this.cx(t).cy(i)}cx(t){return t==null?this.x()+this.width()/2:this.x(t-this.width()/2)}cy(t){return t==null?this.y()+this.height()/2:this.y(t-this.height()/2)}defs(){const t=this.root();return t&&t.defs()}dmove(t,i){return this.dx(t).dy(i)}dx(t=0){return this.x(new B(t).plus(this.x()))}dy(t=0){return this.y(new B(t).plus(this.y()))}getEventHolder(){return this}height(t){return this.attr("height",t)}move(t,i){return this.x(t).y(i)}parents(t=this.root()){const i=typeof t=="string";i||(t=Pt(t));const s=new wi;let r=this;for(;(r=r.parent())&&r.node!==J.document&&r.nodeName!=="#document-fragment"&&(s.push(r),!(!i&&r.node===t.node||i&&r.matches(t)));)if(r.node===this.root().node)return null;return s}reference(t){if(t=this.attr(t),!t)return null;const i=(t+"").match(yh);return i?Pt(i[1]):null}root(){const t=this.parent(sh(xn));return t&&t.root()}setData(t){return this.dom=t,this}size(t,i){const s=qi(this,t,i);return this.width(new B(s.width)).height(new B(s.height))}width(t){return this.attr("width",t)}writeDataToDom(){return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),super.writeDataToDom()}x(t){return this.attr("x",t)}y(t){return this.attr("y",t)}};Y(_e,{bbox:jh,rbox:qh,inside:Xh,point:Vh,ctm:Bh,screenCTM:Uh});W(_e,"Element");const ls={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(e,t){return t==="color"?e:e+"-"+t}};["fill","stroke"].forEach(function(e){const t={};let i;t[e]=function(s){if(typeof s>"u")return this.attr(e);if(typeof s=="string"||s instanceof ot||ot.isRgb(s)||s instanceof _e)this.attr(e,s);else for(i=ls[e].length-1;i>=0;i--)s[ls[e][i]]!=null&&this.attr(ls.prefix(e,ls[e][i]),s[ls[e][i]]);return this},H(["Element","Runner"],t)});H(["Element","Runner"],{matrix:function(e,t,i,s,r,o){return e==null?new P(this):this.attr("transform",new P(e,t,i,s,r,o))},rotate:function(e,t,i){return this.transform({rotate:e,ox:t,oy:i},!0)},skew:function(e,t,i,s){return arguments.length===1||arguments.length===3?this.transform({skew:e,ox:t,oy:i},!0):this.transform({skew:[e,t],ox:i,oy:s},!0)},shear:function(e,t,i){return this.transform({shear:e,ox:t,oy:i},!0)},scale:function(e,t,i,s){return arguments.length===1||arguments.length===3?this.transform({scale:e,ox:t,oy:i},!0):this.transform({scale:[e,t],ox:i,oy:s},!0)},translate:function(e,t){return this.transform({translate:[e,t]},!0)},relative:function(e,t){return this.transform({relative:[e,t]},!0)},flip:function(e="both",t="center"){return"xybothtrue".indexOf(e)===-1&&(t=e,e="both"),this.transform({flip:e,origin:t},!0)},opacity:function(e){return this.attr("opacity",e)}});H("radius",{radius:function(e,t=e){return(this._element||this).type==="radialGradient"?this.attr("r",new B(e)):this.rx(e).ry(t)}});H("Path",{length:function(){return this.node.getTotalLength()},pointAt:function(e){return new wt(this.node.getPointAtLength(e))}});H(["Element","Runner"],{font:function(e,t){if(typeof e=="object"){for(t in e)this.font(t,e[t]);return this}return e==="leading"?this.leading(t):e==="anchor"?this.attr("text-anchor",t):e==="size"||e==="family"||e==="weight"||e==="stretch"||e==="variant"||e==="style"?this.attr("font-"+e,t):this.attr(e,t)}});const iu=["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","mouseenter","mouseleave","touchstart","touchmove","touchleave","touchend","touchcancel"].reduce(function(e,t){const i=function(s){return s===null?this.off(t):this.on(t,s),this};return e[t]=i,e},{});H("Element",iu);function su(){return this.attr("transform",null)}function ru(){return(this.attr("transform")||"").split(wh).slice(0,-1).map(function(t){const i=t.trim().split("(");return[i[0],i[1].split(Re).map(function(s){return parseFloat(s)})]}).reverse().reduce(function(t,i){return i[0]==="matrix"?t.lmultiply(P.fromArray(i[1])):t[i[0]].apply(t,i[1])},new P)}function ou(e,t){if(this===e)return this;const i=this.screenCTM(),s=e.screenCTM().inverse();return this.addTo(e,t).untransform().transform(s.multiply(i)),this}function nu(e){return this.toParent(this.root(),e)}function au(e,t){if(e==null||typeof e=="string"){const r=new P(this).decompose();return e==null?r:r[e]}P.isMatrixLike(e)||(e={...e,origin:Uo(e,this)});const i=t===!0?this:t||!1,s=new P(i).transform(e);return this.attr("transform",s)}H("Element",{untransform:su,matrixify:ru,toParent:ou,toRoot:nu,transform:au});class Bt extends _e{flatten(t=this,i){return this.each(function(){if(this instanceof Bt)return this.flatten().ungroup()}),this}ungroup(t=this.parent(),i=t.index(this)){return i=i===-1?t.children().length:i,this.each(function(s,r){return r[r.length-s-1].toParent(t,i)}),this.remove()}}W(Bt,"Container");class $n extends Bt{constructor(t,i=t){super(ut("defs",t),i)}flatten(){return this}ungroup(){return this}}W($n,"Defs");class Gt extends _e{}W(Gt,"Shape");function Sn(e){return this.attr("rx",e)}function An(e){return this.attr("ry",e)}function wl(e){return e==null?this.cx()-this.rx():this.cx(e+this.rx())}function _l(e){return e==null?this.cy()-this.ry():this.cy(e+this.ry())}function xl(e){return this.attr("cx",e)}function kl(e){return this.attr("cy",e)}function Cl(e){return e==null?this.rx()*2:this.rx(new B(e).divide(2))}function $l(e){return e==null?this.ry()*2:this.ry(new B(e).divide(2))}var lu={__proto__:null,rx:Sn,ry:An,x:wl,y:_l,cx:xl,cy:kl,width:Cl,height:$l};class Hr extends Gt{constructor(t,i=t){super(ut("ellipse",t),i)}size(t,i){const s=qi(this,t,i);return this.rx(new B(s.width).divide(2)).ry(new B(s.height).divide(2))}}Y(Hr,lu);H("Container",{ellipse:ht(function(e=0,t=e){return this.put(new Hr).size(e,t).move(0,0)})});W(Hr,"Ellipse");class Sl extends Ke{constructor(t=J.document.createDocumentFragment()){super(t)}xml(t,i,s){if(typeof t=="boolean"&&(s=i,i=t,t=null),t==null||typeof t=="function"){const r=new Ke(Ts("wrapper",s));return r.add(this.node.cloneNode(!0)),r.xml(!1,s)}return super.xml(t,!1,s)}}W(Sl,"Fragment");function Al(e,t){return(this._element||this).type==="radialGradient"?this.attr({fx:new B(e),fy:new B(t)}):this.attr({x1:new B(e),y1:new B(t)})}function zl(e,t){return(this._element||this).type==="radialGradient"?this.attr({cx:new B(e),cy:new B(t)}):this.attr({x2:new B(e),y2:new B(t)})}var cu={__proto__:null,from:Al,to:zl};class js extends Bt{constructor(t,i){super(ut(t+"Gradient",typeof t=="string"?null:t),i)}attr(t,i,s){return t==="transform"&&(t="gradientTransform"),super.attr(t,i,s)}bbox(){return new It}targets(){return Xi("svg [fill*="+this.id()+"]")}toString(){return this.url()}update(t){return this.clear(),typeof t=="function"&&t.call(this,this),this}url(){return"url(#"+this.id()+")"}}Y(js,cu);H({Container:{gradient(...e){return this.defs().gradient(...e)}},Defs:{gradient:ht(function(e,t){return this.put(new js(e)).update(t)})}});W(js,"Gradient");class Ms extends Bt{constructor(t,i=t){super(ut("pattern",t),i)}attr(t,i,s){return t==="transform"&&(t="patternTransform"),super.attr(t,i,s)}bbox(){return new It}targets(){return Xi("svg [fill*="+this.id()+"]")}toString(){return this.url()}update(t){return this.clear(),typeof t=="function"&&t.call(this,this),this}url(){return"url(#"+this.id()+")"}}H({Container:{pattern(...e){return this.defs().pattern(...e)}},Defs:{pattern:ht(function(e,t,i){return this.put(new Ms).update(i).attr({x:0,y:0,width:e,height:t,patternUnits:"userSpaceOnUse"})})}});W(Ms,"Pattern");class jr extends Gt{constructor(t,i=t){super(ut("image",t),i)}load(t,i){if(!t)return this;const s=new J.window.Image;return Ho(s,"load",function(r){const o=this.parent(Ms);this.width()===0&&this.height()===0&&this.size(s.width,s.height),o instanceof Ms&&o.width()===0&&o.height()===0&&o.size(this.width(),this.height()),typeof i=="function"&&i.call(this,r)},this),Ho(s,"load error",function(){Li(s)}),this.attr("href",s.src=t,Us)}}tu(function(e,t,i){return(e==="fill"||e==="stroke")&&xh.test(t)&&(t=i.root().defs().image(t)),t instanceof jr&&(t=i.root().defs().pattern(0,0,s=>{s.add(t)})),t});H({Container:{image:ht(function(e,t){return this.put(new jr).size(0,0).load(e,t)})}});W(jr,"Image");class Ge extends Ni{bbox(){let t=-1/0,i=-1/0,s=1/0,r=1/0;return this.forEach(function(o){t=Math.max(o[0],t),i=Math.max(o[1],i),s=Math.min(o[0],s),r=Math.min(o[1],r)}),new It(s,r,t-s,i-r)}move(t,i){const s=this.bbox();if(t-=s.x,i-=s.y,!isNaN(t)&&!isNaN(i))for(let r=this.length-1;r>=0;r--)this[r]=[this[r][0]+t,this[r][1]+i];return this}parse(t=[0,0]){const i=[];t instanceof Array?t=Array.prototype.concat.apply([],t):t=t.trim().split(Re).map(parseFloat),t.length%2!==0&&t.pop();for(let s=0,r=t.length;s<r;s=s+2)i.push([t[s],t[s+1]]);return i}size(t,i){let s;const r=this.bbox();for(s=this.length-1;s>=0;s--)r.width&&(this[s][0]=(this[s][0]-r.x)*t/r.width+r.x),r.height&&(this[s][1]=(this[s][1]-r.y)*i/r.height+r.y);return this}toLine(){return{x1:this[0][0],y1:this[0][1],x2:this[1][0],y2:this[1][1]}}toString(){const t=[];for(let i=0,s=this.length;i<s;i++)t.push(this[i].join(","));return t.join(" ")}transform(t){return this.clone().transformO(t)}transformO(t){P.isMatrixLike(t)||(t=new P(t));for(let i=this.length;i--;){const[s,r]=this[i];this[i][0]=t.a*s+t.c*r+t.e,this[i][1]=t.b*s+t.d*r+t.f}return this}}const hu=Ge;function uu(e){return e==null?this.bbox().x:this.move(e,this.bbox().y)}function du(e){return e==null?this.bbox().y:this.move(this.bbox().x,e)}function pu(e){const t=this.bbox();return e==null?t.width:this.size(e,t.height)}function fu(e){const t=this.bbox();return e==null?t.height:this.size(t.width,e)}var zn={__proto__:null,MorphArray:hu,x:uu,y:du,width:pu,height:fu};class Os extends Gt{constructor(t,i=t){super(ut("line",t),i)}array(){return new Ge([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])}move(t,i){return this.attr(this.array().move(t,i).toLine())}plot(t,i,s,r){return t==null?this.array():(typeof i<"u"?t={x1:t,y1:i,x2:s,y2:r}:t=new Ge(t).toLine(),this.attr(t))}size(t,i){const s=qi(this,t,i);return this.attr(this.array().size(s.width,s.height).toLine())}}Y(Os,zn);H({Container:{line:ht(function(...e){return Os.prototype.plot.apply(this.put(new Os),e[0]!=null?e:[0,0,0,0])})}});W(Os,"Line");class Ar extends Bt{constructor(t,i=t){super(ut("marker",t),i)}height(t){return this.attr("markerHeight",t)}orient(t){return this.attr("orient",t)}ref(t,i){return this.attr("refX",t).attr("refY",i)}toString(){return"url(#"+this.id()+")"}update(t){return this.clear(),typeof t=="function"&&t.call(this,this),this}width(t){return this.attr("markerWidth",t)}}H({Container:{marker(...e){return this.defs().marker(...e)}},Defs:{marker:ht(function(e,t,i){return this.put(new Ar).size(e,t).ref(e/2,t/2).viewbox(0,0,e,t).attr("orient","auto").update(i)})},marker:{marker(e,t,i,s){let r=["marker"];return e!=="all"&&r.push(e),r=r.join("-"),e=arguments[1]instanceof Ar?arguments[1]:this.defs().marker(t,i,s),this.attr(r,e)}}});W(Ar,"Marker");function Di(e,t){return function(i){return i==null?this[e]:(this[e]=i,t&&t.call(this),this)}}const mu={"-":function(e){return e},"<>":function(e){return-Math.cos(e*Math.PI)/2+.5},">":function(e){return Math.sin(e*Math.PI/2)},"<":function(e){return-Math.cos(e*Math.PI/2)+1},bezier:function(e,t,i,s){return function(r){return r<0?e>0?t/e*r:i>0?s/i*r:0:r>1?i<1?(1-s)/(1-i)*r+(s-i)/(1-i):e<1?(1-t)/(1-e)*r+(t-e)/(1-e):1:3*r*(1-r)**2*t+3*r**2*(1-r)*s+r**3}},steps:function(e,t="end"){t=t.split("-").reverse()[0];let i=e;return t==="none"?--i:t==="both"&&++i,(s,r=!1)=>{let o=Math.floor(s*e);const n=s*o%1===0;return(t==="start"||t==="both")&&++o,r&&n&&--o,s>=0&&o<0&&(o=0),s<=1&&o>i&&(o=i),o/i}}};class En{done(){return!1}}class jo extends En{constructor(t=bs.ease){super(),this.ease=mu[t]||t}step(t,i,s){return typeof t!="number"?s<1?t:i:t+(i-t)*this.ease(s)}}class zr extends En{constructor(t){super(),this.stepper=t}done(t){return t.done}step(t,i,s,r){return this.stepper(t,i,s,r)}}function ha(){const e=(this._duration||500)/1e3,t=this._overshoot||0,i=1e-10,s=Math.PI,r=Math.log(t/100+i),o=-r/Math.sqrt(s*s+r*r),n=3.9/(o*e);this.d=2*o*n,this.k=n*n}class gu extends zr{constructor(t=500,i=0){super(),this.duration(t).overshoot(i)}step(t,i,s,r){if(typeof t=="string")return t;if(r.done=s===1/0,s===1/0)return i;if(s===0)return t;s>100&&(s=16),s/=1e3;const o=r.velocity||0,n=-this.d*o-this.k*(t-i),l=t+o*s+n*s*s/2;return r.velocity=o+n*s,r.done=Math.abs(i-l)+Math.abs(o)<.002,r.done?i:l}}Y(gu,{duration:Di("_duration",ha),overshoot:Di("_overshoot",ha)});class bu extends zr{constructor(t=.1,i=.01,s=0,r=1e3){super(),this.p(t).i(i).d(s).windup(r)}step(t,i,s,r){if(typeof t=="string")return t;if(r.done=s===1/0,s===1/0)return i;if(s===0)return t;const o=i-t;let n=(r.integral||0)+o*s;const l=(o-(r.error||0))/s,a=this._windup;return a!==!1&&(n=Math.max(-a,Math.min(n,a))),r.error=o,r.integral=n,r.done=Math.abs(o)<.001,r.done?i:t+(this.P*o+this.I*n+this.D*l)}}Y(bu,{windup:Di("_windup"),p:Di("P"),i:Di("I"),d:Di("D")});const vu={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0},qo={M:function(e,t,i){return t.x=i.x=e[0],t.y=i.y=e[1],["M",t.x,t.y]},L:function(e,t){return t.x=e[0],t.y=e[1],["L",e[0],e[1]]},H:function(e,t){return t.x=e[0],["H",e[0]]},V:function(e,t){return t.y=e[0],["V",e[0]]},C:function(e,t){return t.x=e[4],t.y=e[5],["C",e[0],e[1],e[2],e[3],e[4],e[5]]},S:function(e,t){return t.x=e[2],t.y=e[3],["S",e[0],e[1],e[2],e[3]]},Q:function(e,t){return t.x=e[2],t.y=e[3],["Q",e[0],e[1],e[2],e[3]]},T:function(e,t){return t.x=e[0],t.y=e[1],["T",e[0],e[1]]},Z:function(e,t,i){return t.x=i.x,t.y=i.y,["Z"]},A:function(e,t){return t.x=e[5],t.y=e[6],["A",e[0],e[1],e[2],e[3],e[4],e[5],e[6]]}},yo="mlhvqtcsaz".split("");for(let e=0,t=yo.length;e<t;++e)qo[yo[e]]=function(i){return function(s,r,o){if(i==="H")s[0]=s[0]+r.x;else if(i==="V")s[0]=s[0]+r.y;else if(i==="A")s[5]=s[5]+r.x,s[6]=s[6]+r.y;else for(let n=0,l=s.length;n<l;++n)s[n]=s[n]+(n%2?r.y:r.x);return qo[i](s,r,o)}}(yo[e].toUpperCase());function yu(e){const t=e.segment[0];return qo[t](e.segment.slice(1),e.p,e.p0)}function Xo(e){return e.segment.length&&e.segment.length-1===vu[e.segment[0].toUpperCase()]}function wu(e,t){e.inNumber&&fi(e,!1);const i=kn.test(t);if(i)e.segment=[t];else{const s=e.lastCommand,r=s.toLowerCase(),o=s===r;e.segment=[r==="m"?o?"l":"L":s]}return e.inSegment=!0,e.lastCommand=e.segment[0],i}function fi(e,t){if(!e.inNumber)throw new Error("Parser Error");e.number&&e.segment.push(parseFloat(e.number)),e.inNumber=t,e.number="",e.pointSeen=!1,e.hasExponent=!1,Xo(e)&&Yo(e)}function Yo(e){e.inSegment=!1,e.absolute&&(e.segment=yu(e)),e.segments.push(e.segment)}function _u(e){if(!e.segment.length)return!1;const t=e.segment[0].toUpperCase()==="A",i=e.segment.length;return t&&(i===4||i===5)}function xu(e){return e.lastToken.toUpperCase()==="E"}function ku(e,t=!0){let i=0,s="";const r={segment:[],inNumber:!1,number:"",lastToken:"",inSegment:!1,segments:[],pointSeen:!1,hasExponent:!1,absolute:t,p0:new wt,p:new wt};for(;r.lastToken=s,s=e.charAt(i++);)if(!(!r.inSegment&&wu(r,s))){if(s==="."){if(r.pointSeen||r.hasExponent){fi(r,!1),--i;continue}r.inNumber=!0,r.pointSeen=!0,r.number+=s;continue}if(!isNaN(parseInt(s))){if(r.number==="0"||_u(r)){r.inNumber=!0,r.number=s,fi(r,!0);continue}r.inNumber=!0,r.number+=s;continue}if(s===" "||s===","){r.inNumber&&fi(r,!1);continue}if(s==="-"){if(r.inNumber&&!xu(r)){fi(r,!1),--i;continue}r.number+=s,r.inNumber=!0;continue}if(s.toUpperCase()==="E"){r.number+=s,r.hasExponent=!0;continue}if(kn.test(s)){if(r.inNumber)fi(r,!1);else if(Xo(r))Yo(r);else throw new Error("parser Error");--i}}return r.inNumber&&fi(r,!1),r.inSegment&&Xo(r)&&Yo(r),r.segments}function Cu(e){let t="";for(let i=0,s=e.length;i<s;i++)t+=e[i][0],e[i][1]!=null&&(t+=e[i][1],e[i][2]!=null&&(t+=" ",t+=e[i][2],e[i][3]!=null&&(t+=" ",t+=e[i][3],t+=" ",t+=e[i][4],e[i][5]!=null&&(t+=" ",t+=e[i][5],t+=" ",t+=e[i][6],e[i][7]!=null&&(t+=" ",t+=e[i][7])))));return t+" "}class _i extends Ni{bbox(){return qe().path.setAttribute("d",this.toString()),new It(qe.nodes.path.getBBox())}move(t,i){const s=this.bbox();if(t-=s.x,i-=s.y,!isNaN(t)&&!isNaN(i))for(let r,o=this.length-1;o>=0;o--)r=this[o][0],r==="M"||r==="L"||r==="T"?(this[o][1]+=t,this[o][2]+=i):r==="H"?this[o][1]+=t:r==="V"?this[o][1]+=i:r==="C"||r==="S"||r==="Q"?(this[o][1]+=t,this[o][2]+=i,this[o][3]+=t,this[o][4]+=i,r==="C"&&(this[o][5]+=t,this[o][6]+=i)):r==="A"&&(this[o][6]+=t,this[o][7]+=i);return this}parse(t="M0 0"){return Array.isArray(t)&&(t=Array.prototype.concat.apply([],t).toString()),ku(t)}size(t,i){const s=this.bbox();let r,o;for(s.width=s.width===0?1:s.width,s.height=s.height===0?1:s.height,r=this.length-1;r>=0;r--)o=this[r][0],o==="M"||o==="L"||o==="T"?(this[r][1]=(this[r][1]-s.x)*t/s.width+s.x,this[r][2]=(this[r][2]-s.y)*i/s.height+s.y):o==="H"?this[r][1]=(this[r][1]-s.x)*t/s.width+s.x:o==="V"?this[r][1]=(this[r][1]-s.y)*i/s.height+s.y:o==="C"||o==="S"||o==="Q"?(this[r][1]=(this[r][1]-s.x)*t/s.width+s.x,this[r][2]=(this[r][2]-s.y)*i/s.height+s.y,this[r][3]=(this[r][3]-s.x)*t/s.width+s.x,this[r][4]=(this[r][4]-s.y)*i/s.height+s.y,o==="C"&&(this[r][5]=(this[r][5]-s.x)*t/s.width+s.x,this[r][6]=(this[r][6]-s.y)*i/s.height+s.y)):o==="A"&&(this[r][1]=this[r][1]*t/s.width,this[r][2]=this[r][2]*i/s.height,this[r][6]=(this[r][6]-s.x)*t/s.width+s.x,this[r][7]=(this[r][7]-s.y)*i/s.height+s.y);return this}toString(){return Cu(this)}}const El=e=>{const t=typeof e;return t==="number"?B:t==="string"?ot.isColor(e)?ot:Re.test(e)?kn.test(e)?_i:Ni:fl.test(e)?B:Wo:Tn.indexOf(e.constructor)>-1?e.constructor:Array.isArray(e)?Ni:t==="object"?Is:Wo};class mi{constructor(t){this._stepper=t||new jo("-"),this._from=null,this._to=null,this._type=null,this._context=null,this._morphObj=null}at(t){return this._morphObj.morph(this._from,this._to,t,this._stepper,this._context)}done(){return this._context.map(this._stepper.done).reduce(function(i,s){return i&&s},!0)}from(t){return t==null?this._from:(this._from=this._set(t),this)}stepper(t){return t==null?this._stepper:(this._stepper=t,this)}to(t){return t==null?this._to:(this._to=this._set(t),this)}type(t){return t==null?this._type:(this._type=t,this)}_set(t){this._type||this.type(El(t));let i=new this._type(t);return this._type===ot&&(i=this._to?i[this._to[4]]():this._from?i[this._from[4]]():i),this._type===Is&&(i=this._to?i.align(this._to):this._from?i.align(this._from):i),i=i.toConsumable(),this._morphObj=this._morphObj||new this._type,this._context=this._context||Array.apply(null,Array(i.length)).map(Object).map(function(s){return s.done=!0,s}),i}}class Wo{constructor(...t){this.init(...t)}init(t){return t=Array.isArray(t)?t[0]:t,this.value=t,this}toArray(){return[this.value]}valueOf(){return this.value}}class qs{constructor(...t){this.init(...t)}init(t){return Array.isArray(t)&&(t={scaleX:t[0],scaleY:t[1],shear:t[2],rotate:t[3],translateX:t[4],translateY:t[5],originX:t[6],originY:t[7]}),Object.assign(this,qs.defaults,t),this}toArray(){const t=this;return[t.scaleX,t.scaleY,t.shear,t.rotate,t.translateX,t.translateY,t.originX,t.originY]}}qs.defaults={scaleX:1,scaleY:1,shear:0,rotate:0,translateX:0,translateY:0,originX:0,originY:0};const $u=(e,t)=>e[0]<t[0]?-1:e[0]>t[0]?1:0;class Is{constructor(...t){this.init(...t)}align(t){const i=this.values;for(let s=0,r=i.length;s<r;++s){if(i[s+1]===t[s+1]){if(i[s+1]===ot&&t[s+7]!==i[s+7]){const l=t[s+7],a=new ot(this.values.splice(s+3,5))[l]().toArray();this.values.splice(s+3,0,...a)}s+=i[s+2]+2;continue}if(!t[s+1])return this;const o=new t[s+1]().toArray(),n=i[s+2]+3;i.splice(s,n,t[s],t[s+1],t[s+2],...o),s+=i[s+2]+2}return this}init(t){if(this.values=[],Array.isArray(t)){this.values=t.slice();return}t=t||{};const i=[];for(const s in t){const r=El(t[s]),o=new r(t[s]).toArray();i.push([s,r,o.length,...o])}return i.sort($u),this.values=i.reduce((s,r)=>s.concat(r),[]),this}toArray(){return this.values}valueOf(){const t={},i=this.values;for(;i.length;){const s=i.shift(),r=i.shift(),o=i.shift(),n=i.splice(0,o);t[s]=new r(n)}return t}}const Tn=[Wo,qs,Is];function Su(e=[]){Tn.push(...[].concat(e))}function Au(){Y(Tn,{to(e){return new mi().type(this.constructor).from(this.toArray()).to(e)},fromArray(e){return this.init(e),this},toConsumable(){return this.toArray()},morph(e,t,i,s,r){const o=function(n,l){return s.step(n,t[l],i,r[l],r)};return this.fromArray(e.map(o))}})}class Yi extends Gt{constructor(t,i=t){super(ut("path",t),i)}array(){return this._array||(this._array=new _i(this.attr("d")))}clear(){return delete this._array,this}height(t){return t==null?this.bbox().height:this.size(this.bbox().width,t)}move(t,i){return this.attr("d",this.array().move(t,i))}plot(t){return t==null?this.array():this.clear().attr("d",typeof t=="string"?t:this._array=new _i(t))}size(t,i){const s=qi(this,t,i);return this.attr("d",this.array().size(s.width,s.height))}width(t){return t==null?this.bbox().width:this.size(t,this.bbox().height)}x(t){return t==null?this.bbox().x:this.move(t,this.bbox().y)}y(t){return t==null?this.bbox().y:this.move(this.bbox().x,t)}}Yi.prototype.MorphArray=_i;H({Container:{path:ht(function(e){return this.put(new Yi).plot(e||new _i)})}});W(Yi,"Path");function zu(){return this._array||(this._array=new Ge(this.attr("points")))}function Eu(){return delete this._array,this}function Tu(e,t){return this.attr("points",this.array().move(e,t))}function Mu(e){return e==null?this.array():this.clear().attr("points",typeof e=="string"?e:this._array=new Ge(e))}function Ou(e,t){const i=qi(this,e,t);return this.attr("points",this.array().size(i.width,i.height))}var Tl={__proto__:null,array:zu,clear:Eu,move:Tu,plot:Mu,size:Ou};class Xs extends Gt{constructor(t,i=t){super(ut("polygon",t),i)}}H({Container:{polygon:ht(function(e){return this.put(new Xs).plot(e||new Ge)})}});Y(Xs,zn);Y(Xs,Tl);W(Xs,"Polygon");class Ys extends Gt{constructor(t,i=t){super(ut("polyline",t),i)}}H({Container:{polyline:ht(function(e){return this.put(new Ys).plot(e||new Ge)})}});Y(Ys,zn);Y(Ys,Tl);W(Ys,"Polyline");class qr extends Gt{constructor(t,i=t){super(ut("rect",t),i)}}Y(qr,{rx:Sn,ry:An});H({Container:{rect:ht(function(e,t){return this.put(new qr).size(e,t)})}});W(qr,"Rect");class wo{constructor(){this._first=null,this._last=null}first(){return this._first&&this._first.value}last(){return this._last&&this._last.value}push(t){const i=typeof t.next<"u"?t:{value:t,next:null,prev:null};return this._last?(i.prev=this._last,this._last.next=i,this._last=i):(this._last=i,this._first=i),i}remove(t){t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),t===this._last&&(this._last=t.prev),t===this._first&&(this._first=t.next),t.prev=null,t.next=null}shift(){const t=this._first;return t?(this._first=t.next,this._first&&(this._first.prev=null),this._last=this._first?this._last:null,t.value):null}}const it={nextDraw:null,frames:new wo,timeouts:new wo,immediates:new wo,timer:()=>J.window.performance||J.window.Date,transforms:[],frame(e){const t=it.frames.push({run:e});return it.nextDraw===null&&(it.nextDraw=J.window.requestAnimationFrame(it._draw)),t},timeout(e,t){t=t||0;const i=it.timer().now()+t,s=it.timeouts.push({run:e,time:i});return it.nextDraw===null&&(it.nextDraw=J.window.requestAnimationFrame(it._draw)),s},immediate(e){const t=it.immediates.push(e);return it.nextDraw===null&&(it.nextDraw=J.window.requestAnimationFrame(it._draw)),t},cancelFrame(e){e!=null&&it.frames.remove(e)},clearTimeout(e){e!=null&&it.timeouts.remove(e)},cancelImmediate(e){e!=null&&it.immediates.remove(e)},_draw(e){let t=null;const i=it.timeouts.last();for(;(t=it.timeouts.shift())&&(e>=t.time?t.run():it.timeouts.push(t),t!==i););let s=null;const r=it.frames.last();for(;s!==r&&(s=it.frames.shift());)s.run(e);let o=null;for(;o=it.immediates.shift();)o();it.nextDraw=it.timeouts.first()||it.frames.first()?J.window.requestAnimationFrame(it._draw):null}},Iu=function(e){const t=e.start,i=e.runner.duration(),s=t+i;return{start:t,duration:i,end:s,runner:e.runner}},Lu=function(){const e=J.window;return(e.performance||e.Date).now()};class Ml extends Hs{constructor(t=Lu){super(),this._timeSource=t,this._startTime=0,this._speed=1,this._persist=0,this._nextFrame=null,this._paused=!0,this._runners=[],this._runnerIds=[],this._lastRunnerId=-1,this._time=0,this._lastSourceTime=0,this._lastStepTime=0,this._step=this._stepFn.bind(this,!1),this._stepImmediate=this._stepFn.bind(this,!0)}active(){return!!this._nextFrame}finish(){return this.time(this.getEndTimeOfTimeline()+1),this.pause()}getEndTime(){const t=this.getLastRunnerInfo(),i=t?t.runner.duration():0;return(t?t.start:this._time)+i}getEndTimeOfTimeline(){const t=this._runners.map(i=>i.start+i.runner.duration());return Math.max(0,...t)}getLastRunnerInfo(){return this.getRunnerInfoById(this._lastRunnerId)}getRunnerInfoById(t){return this._runners[this._runnerIds.indexOf(t)]||null}pause(){return this._paused=!0,this._continue()}persist(t){return t==null?this._persist:(this._persist=t,this)}play(){return this._paused=!1,this.updateTime()._continue()}reverse(t){const i=this.speed();if(t==null)return this.speed(-i);const s=Math.abs(i);return this.speed(t?-s:s)}schedule(t,i,s){if(t==null)return this._runners.map(Iu);let r=0;const o=this.getEndTime();if(i=i||0,s==null||s==="last"||s==="after")r=o;else if(s==="absolute"||s==="start")r=i,i=0;else if(s==="now")r=this._time;else if(s==="relative"){const a=this.getRunnerInfoById(t.id);a&&(r=a.start+i,i=0)}else if(s==="with-last"){const a=this.getLastRunnerInfo();r=a?a.start:this._time}else throw new Error('Invalid value for the "when" parameter');t.unschedule(),t.timeline(this);const n=t.persist(),l={persist:n===null?this._persist:n,start:r+i,runner:t};return this._lastRunnerId=t.id,this._runners.push(l),this._runners.sort((a,c)=>a.start-c.start),this._runnerIds=this._runners.map(a=>a.runner.id),this.updateTime()._continue(),this}seek(t){return this.time(this._time+t)}source(t){return t==null?this._timeSource:(this._timeSource=t,this)}speed(t){return t==null?this._speed:(this._speed=t,this)}stop(){return this.time(0),this.pause()}time(t){return t==null?this._time:(this._time=t,this._continue(!0))}unschedule(t){const i=this._runnerIds.indexOf(t.id);return i<0?this:(this._runners.splice(i,1),this._runnerIds.splice(i,1),t.timeline(null),this)}updateTime(){return this.active()||(this._lastSourceTime=this._timeSource()),this}_continue(t=!1){return it.cancelFrame(this._nextFrame),this._nextFrame=null,t?this._stepImmediate():this._paused?this:(this._nextFrame=it.frame(this._step),this)}_stepFn(t=!1){const i=this._timeSource();let s=i-this._lastSourceTime;t&&(s=0);const r=this._speed*s+(this._time-this._lastStepTime);this._lastSourceTime=i,t||(this._time+=r,this._time=this._time<0?0:this._time),this._lastStepTime=this._time,this.fire("time",this._time);for(let n=this._runners.length;n--;){const l=this._runners[n],a=l.runner;this._time-l.start<=0&&a.reset()}let o=!1;for(let n=0,l=this._runners.length;n<l;n++){const a=this._runners[n],c=a.runner;let u=r;const d=this._time-a.start;if(d<=0){o=!0;continue}else d<u&&(u=d);if(!c.active())continue;c.step(u).done?a.persist!==!0&&c.duration()-c.time()+this._time+a.persist<this._time&&(c.unschedule(),--n,--l):o=!0}return o&&!(this._speed<0&&this._time===0)||this._runnerIds.length&&this._speed<0&&this._time>0?this._continue():(this.pause(),this.fire("finished")),this}}H({Element:{timeline:function(e){return e==null?(this._timeline=this._timeline||new Ml,this._timeline):(this._timeline=e,this)}}});class Wt extends Hs{constructor(t){super(),this.id=Wt.id++,t=t??bs.duration,t=typeof t=="function"?new zr(t):t,this._element=null,this._timeline=null,this.done=!1,this._queue=[],this._duration=typeof t=="number"&&t,this._isDeclarative=t instanceof zr,this._stepper=this._isDeclarative?t:new jo,this._history={},this.enabled=!0,this._time=0,this._lastTime=0,this._reseted=!0,this.transforms=new P,this.transformId=1,this._haveReversed=!1,this._reverse=!1,this._loopsDone=0,this._swing=!1,this._wait=0,this._times=1,this._frameId=null,this._persist=this._isDeclarative?!0:null}static sanitise(t,i,s){let r=1,o=!1,n=0;return t=t||bs.duration,i=i||bs.delay,s=s||"last",typeof t=="object"&&!(t instanceof En)&&(i=t.delay||i,s=t.when||s,o=t.swing||o,r=t.times||r,n=t.wait||n,t=t.duration||bs.duration),{duration:t,delay:i,swing:o,times:r,wait:n,when:s}}active(t){return t==null?this.enabled:(this.enabled=t,this)}addTransform(t,i){return this.transforms.lmultiplyO(t),this}after(t){return this.on("finished",t)}animate(t,i,s){const r=Wt.sanitise(t,i,s),o=new Wt(r.duration);return this._timeline&&o.timeline(this._timeline),this._element&&o.element(this._element),o.loop(r).schedule(r.delay,r.when)}clearTransform(){return this.transforms=new P,this}clearTransformsFromQueue(){(!this.done||!this._timeline||!this._timeline._runnerIds.includes(this.id))&&(this._queue=this._queue.filter(t=>!t.isTransform))}delay(t){return this.animate(0,t)}duration(){return this._times*(this._wait+this._duration)-this._wait}during(t){return this.queue(null,t)}ease(t){return this._stepper=new jo(t),this}element(t){return t==null?this._element:(this._element=t,t._prepareRunner(),this)}finish(){return this.step(1/0)}loop(t,i,s){return typeof t=="object"&&(i=t.swing,s=t.wait,t=t.times),this._times=t||1/0,this._swing=i||!1,this._wait=s||0,this._times===!0&&(this._times=1/0),this}loops(t){const i=this._duration+this._wait;if(t==null){const n=Math.floor(this._time/i),a=(this._time-n*i)/this._duration;return Math.min(n+a,this._times)}const s=Math.floor(t),r=t%1,o=i*s+this._duration*r;return this.time(o)}persist(t){return t==null?this._persist:(this._persist=t,this)}position(t){const i=this._time,s=this._duration,r=this._wait,o=this._times,n=this._swing,l=this._reverse;let a;if(t==null){const p=function(g){const b=n*Math.floor(g%(2*(r+s))/(r+s)),v=b&&!l||!b&&l,y=Math.pow(-1,v)*(g%(r+s))/s+v;return Math.max(Math.min(y,1),0)},f=o*(r+s)-r;return a=i<=0?Math.round(p(1e-5)):i<f?p(i):Math.round(p(f-1e-5)),a}const c=Math.floor(this.loops()),u=n&&c%2===0;return a=c+(u&&!l||l&&u?t:1-t),this.loops(a)}progress(t){return t==null?Math.min(1,this._time/this.duration()):this.time(t*this.duration())}queue(t,i,s,r){return this._queue.push({initialiser:t||ca,runner:i||ca,retarget:s,isTransform:r,initialised:!1,finished:!1}),this.timeline()&&this.timeline()._continue(),this}reset(){return this._reseted?this:(this.time(0),this._reseted=!0,this)}reverse(t){return this._reverse=t??!this._reverse,this}schedule(t,i,s){if(t instanceof Ml||(s=i,i=t,t=this.timeline()),!t)throw Error("Runner cannot be scheduled without timeline");return t.schedule(this,i,s),this}step(t){if(!this.enabled)return this;t=t??16,this._time+=t;const i=this.position(),s=this._lastPosition!==i&&this._time>=0;this._lastPosition=i;const r=this.duration(),o=this._lastTime<=0&&this._time>0,n=this._lastTime<r&&this._time>=r;this._lastTime=this._time,o&&this.fire("start",this);const l=this._isDeclarative;this.done=!l&&!n&&this._time>=r,this._reseted=!1;let a=!1;return(s||l)&&(this._initialise(s),this.transforms=new P,a=this._run(l?t:i),this.fire("step",this)),this.done=this.done||a&&l,n&&this.fire("finished",this),this}time(t){if(t==null)return this._time;const i=t-this._time;return this.step(i),this}timeline(t){return typeof t>"u"?this._timeline:(this._timeline=t,this)}unschedule(){const t=this.timeline();return t&&t.unschedule(this),this}_initialise(t){if(!(!t&&!this._isDeclarative))for(let i=0,s=this._queue.length;i<s;++i){const r=this._queue[i],o=this._isDeclarative||!r.initialised&&t;t=!r.finished,o&&t&&(r.initialiser.call(this),r.initialised=!0)}}_rememberMorpher(t,i){if(this._history[t]={morpher:i,caller:this._queue[this._queue.length-1]},this._isDeclarative){const s=this.timeline();s&&s.play()}}_run(t){let i=!0;for(let s=0,r=this._queue.length;s<r;++s){const o=this._queue[s],n=o.runner.call(this,t);o.finished=o.finished||n===!0,i=i&&o.finished}return i}_tryRetarget(t,i,s){if(this._history[t]){if(!this._history[t].caller.initialised){const o=this._queue.indexOf(this._history[t].caller);return this._queue.splice(o,1),!1}this._history[t].caller.retarget?this._history[t].caller.retarget.call(this,i,s):this._history[t].morpher.to(i),this._history[t].caller.finished=!1;const r=this.timeline();return r&&r.play(),!0}return!1}}Wt.id=0;class Er{constructor(t=new P,i=-1,s=!0){this.transforms=t,this.id=i,this.done=s}clearTransformsFromQueue(){}}Y([Wt,Er],{mergeWith(e){return new Er(e.transforms.lmultiply(this.transforms),e.id)}});const Ol=(e,t)=>e.lmultiplyO(t),Il=e=>e.transforms;function Du(){const t=this._transformationRunners.runners.map(Il).reduce(Ol,new P);this.transform(t),this._transformationRunners.merge(),this._transformationRunners.length()===1&&(this._frameId=null)}class Pu{constructor(){this.runners=[],this.ids=[]}add(t){if(this.runners.includes(t))return;const i=t.id+1;return this.runners.push(t),this.ids.push(i),this}clearBefore(t){const i=this.ids.indexOf(t+1)||1;return this.ids.splice(0,i,0),this.runners.splice(0,i,new Er).forEach(s=>s.clearTransformsFromQueue()),this}edit(t,i){const s=this.ids.indexOf(t+1);return this.ids.splice(s,1,t+1),this.runners.splice(s,1,i),this}getByID(t){return this.runners[this.ids.indexOf(t+1)]}length(){return this.ids.length}merge(){let t=null;for(let i=0;i<this.runners.length;++i){const s=this.runners[i];if(t&&s.done&&t.done&&(!s._timeline||!s._timeline._runnerIds.includes(s.id))&&(!t._timeline||!t._timeline._runnerIds.includes(t.id))){this.remove(s.id);const o=s.mergeWith(t);this.edit(t.id,o),t=o,--i}else t=s}return this}remove(t){const i=this.ids.indexOf(t+1);return this.ids.splice(i,1),this.runners.splice(i,1),this}}H({Element:{animate(e,t,i){const s=Wt.sanitise(e,t,i),r=this.timeline();return new Wt(s.duration).loop(s).element(this).timeline(r.play()).schedule(s.delay,s.when)},delay(e,t){return this.animate(0,e,t)},_clearTransformRunnersBefore(e){this._transformationRunners.clearBefore(e.id)},_currentTransform(e){return this._transformationRunners.runners.filter(t=>t.id<=e.id).map(Il).reduce(Ol,new P)},_addRunner(e){this._transformationRunners.add(e),it.cancelImmediate(this._frameId),this._frameId=it.immediate(Du.bind(this))},_prepareRunner(){this._frameId==null&&(this._transformationRunners=new Pu().add(new Er(new P(this))))}}});const Ru=(e,t)=>e.filter(i=>!t.includes(i));Y(Wt,{attr(e,t){return this.styleAttr("attr",e,t)},css(e,t){return this.styleAttr("css",e,t)},styleAttr(e,t,i){if(typeof t=="string")return this.styleAttr(e,{[t]:i});let s=t;if(this._tryRetarget(e,s))return this;let r=new mi(this._stepper).to(s),o=Object.keys(s);return this.queue(function(){r=r.from(this.element()[e](o))},function(n){return this.element()[e](r.at(n).valueOf()),r.done()},function(n){const l=Object.keys(n),a=Ru(l,o);if(a.length){const u=this.element()[e](a),d=new Is(r.from()).valueOf();Object.assign(d,u),r.from(d)}const c=new Is(r.to()).valueOf();Object.assign(c,n),r.to(c),o=l,s=n}),this._rememberMorpher(e,r),this},zoom(e,t){if(this._tryRetarget("zoom",e,t))return this;let i=new mi(this._stepper).to(new B(e));return this.queue(function(){i=i.from(this.element().zoom())},function(s){return this.element().zoom(i.at(s),t),i.done()},function(s,r){t=r,i.to(s)}),this._rememberMorpher("zoom",i),this},transform(e,t,i){if(t=e.relative||t,this._isDeclarative&&!t&&this._tryRetarget("transform",e))return this;const s=P.isMatrixLike(e);i=e.affine!=null?e.affine:i??!s;const r=new mi(this._stepper).type(i?qs:P);let o,n,l,a,c;function u(){n=n||this.element(),o=o||Uo(e,n),c=new P(t?void 0:n),n._addRunner(this),t||n._clearTransformRunnersBefore(this)}function d(f){t||this.clearTransform();const{x:g,y:b}=new wt(o).transform(n._currentTransform(this));let v=new P({...e,origin:[g,b]}),y=this._isDeclarative&&l?l:c;if(i){v=v.decompose(g,b),y=y.decompose(g,b);const k=v.rotate,x=y.rotate,w=[k-360,k,k+360],C=w.map(A=>Math.abs(A-x)),T=Math.min(...C),M=C.indexOf(T);v.rotate=w[M]}t&&(s||(v.rotate=e.rotate||0),this._isDeclarative&&a&&(y.rotate=a)),r.from(y),r.to(v);const _=r.at(f);return a=_.rotate,l=new P(_),this.addTransform(l),n._addRunner(this),r.done()}function p(f){(f.origin||"center").toString()!==(e.origin||"center").toString()&&(o=Uo(f,n)),e={...f,origin:o}}return this.queue(u,d,p,!0),this._isDeclarative&&this._rememberMorpher("transform",r),this},x(e,t){return this._queueNumber("x",e)},y(e){return this._queueNumber("y",e)},dx(e=0){return this._queueNumberDelta("x",e)},dy(e=0){return this._queueNumberDelta("y",e)},dmove(e,t){return this.dx(e).dy(t)},_queueNumberDelta(e,t){if(t=new B(t),this._tryRetarget(e,t))return this;const i=new mi(this._stepper).to(t);let s=null;return this.queue(function(){s=this.element()[e](),i.from(s),i.to(s+t)},function(r){return this.element()[e](i.at(r)),i.done()},function(r){i.to(s+new B(r))}),this._rememberMorpher(e,i),this},_queueObject(e,t){if(this._tryRetarget(e,t))return this;const i=new mi(this._stepper).to(t);return this.queue(function(){i.from(this.element()[e]())},function(s){return this.element()[e](i.at(s)),i.done()}),this._rememberMorpher(e,i),this},_queueNumber(e,t){return this._queueObject(e,new B(t))},cx(e){return this._queueNumber("cx",e)},cy(e){return this._queueNumber("cy",e)},move(e,t){return this.x(e).y(t)},center(e,t){return this.cx(e).cy(t)},size(e,t){let i;return(!e||!t)&&(i=this._element.bbox()),e||(e=i.width/i.height*t),t||(t=i.height/i.width*e),this.width(e).height(t)},width(e){return this._queueNumber("width",e)},height(e){return this._queueNumber("height",e)},plot(e,t,i,s){if(arguments.length===4)return this.plot([e,t,i,s]);if(this._tryRetarget("plot",e))return this;const r=new mi(this._stepper).type(this._element.MorphArray).to(e);return this.queue(function(){r.from(this._element.array())},function(o){return this._element.plot(r.at(o)),r.done()}),this._rememberMorpher("plot",r),this},leading(e){return this._queueNumber("leading",e)},viewbox(e,t,i,s){return this._queueObject("viewbox",new It(e,t,i,s))},update(e){return typeof e!="object"?this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]}):(e.opacity!=null&&this.attr("stop-opacity",e.opacity),e.color!=null&&this.attr("stop-color",e.color),e.offset!=null&&this.attr("offset",e.offset),this)}});Y(Wt,{rx:Sn,ry:An,from:Al,to:zl});W(Wt,"Runner");class Mn extends Bt{constructor(t,i=t){super(ut("svg",t),i),this.namespace()}defs(){return this.isRoot()?ie(this.node.querySelector("defs"))||this.put(new $n):this.root().defs()}isRoot(){return!this.node.parentNode||!(this.node.parentNode instanceof J.window.SVGElement)&&this.node.parentNode.nodeName!=="#document-fragment"}namespace(){return this.isRoot()?this.attr({xmlns:wn,version:"1.1"}).attr("xmlns:xlink",Us,dr).attr("xmlns:svgjs",ih,dr):this.root().namespace()}removeNamespace(){return this.attr({xmlns:null,version:null}).attr("xmlns:xlink",null,dr).attr("xmlns:svgjs",null,dr)}root(){return this.isRoot()?this:super.root()}}H({Container:{nested:ht(function(){return this.put(new Mn)})}});W(Mn,"Svg",!0);let On=class extends Bt{constructor(t,i=t){super(ut("symbol",t),i)}};H({Container:{symbol:ht(function(){return this.put(new On)})}});W(On,"Symbol");function Fu(e){return this._build===!1&&this.clear(),this.node.appendChild(J.document.createTextNode(e)),this}function Nu(){return this.node.getComputedTextLength()}function Vu(e,t=this.bbox()){return e==null?t.x:this.attr("x",this.attr("x")+e-t.x)}function Bu(e,t=this.bbox()){return e==null?t.y:this.attr("y",this.attr("y")+e-t.y)}function Uu(e,t,i=this.bbox()){return this.x(e,i).y(t,i)}function Hu(e,t=this.bbox()){return e==null?t.cx:this.attr("x",this.attr("x")+e-t.cx)}function ju(e,t=this.bbox()){return e==null?t.cy:this.attr("y",this.attr("y")+e-t.cy)}function qu(e,t,i=this.bbox()){return this.cx(e,i).cy(t,i)}function Xu(e){return this.attr("x",e)}function Yu(e){return this.attr("y",e)}function Wu(e,t){return this.ax(e).ay(t)}function Ku(e){return this._build=!!e,this}var Ll={__proto__:null,plain:Fu,length:Nu,x:Vu,y:Bu,move:Uu,cx:Hu,cy:ju,center:qu,ax:Xu,ay:Yu,amove:Wu,build:Ku};class ae extends Gt{constructor(t,i=t){super(ut("text",t),i),this.dom.leading=new B(1.3),this._rebuild=!0,this._build=!1}leading(t){return t==null?this.dom.leading:(this.dom.leading=new B(t),this.rebuild())}rebuild(t){if(typeof t=="boolean"&&(this._rebuild=t),this._rebuild){const i=this;let s=0;const r=this.dom.leading;this.each(function(o){const n=J.window.getComputedStyle(this.node).getPropertyValue("font-size"),l=r*new B(n);this.dom.newLined&&(this.attr("x",i.attr("x")),this.text()===`
`?s+=l:(this.attr("dy",o?l+s:0),s=0))}),this.fire("rebuild")}return this}setData(t){return this.dom=t,this.dom.leading=new B(t.leading||1.3),this}text(t){if(t===void 0){const i=this.node.childNodes;let s=0;t="";for(let r=0,o=i.length;r<o;++r){if(i[r].nodeName==="textPath"){r===0&&(s=1);continue}r!==s&&i[r].nodeType!==3&&ie(i[r]).dom.newLined===!0&&(t+=`
`),t+=i[r].textContent}return t}if(this.clear().build(!0),typeof t=="function")t.call(this,this);else{t=(t+"").split(`
`);for(let i=0,s=t.length;i<s;i++)this.newLine(t[i])}return this.build(!1).rebuild()}}Y(ae,Ll);H({Container:{text:ht(function(e=""){return this.put(new ae).text(e)}),plain:ht(function(e=""){return this.put(new ae).plain(e)})}});W(ae,"Text");class Xr extends Gt{constructor(t,i=t){super(ut("tspan",t),i),this._build=!1}dx(t){return this.attr("dx",t)}dy(t){return this.attr("dy",t)}newLine(){this.dom.newLined=!0;const t=this.parent();if(!(t instanceof ae))return this;const i=t.index(this),s=J.window.getComputedStyle(this.node).getPropertyValue("font-size"),r=t.dom.leading*new B(s);return this.dy(i?r:0).attr("x",t.x())}text(t){return t==null?this.node.textContent+(this.dom.newLined?`
`:""):(typeof t=="function"?(this.clear().build(!0),t.call(this,this),this.build(!1)):this.plain(t),this)}}Y(Xr,Ll);H({Tspan:{tspan:ht(function(e=""){const t=new Xr;return this._build||this.clear(),this.put(t).text(e)})},Text:{newLine:function(e=""){return this.tspan(e).newLine()}}});W(Xr,"Tspan");class In extends Gt{constructor(t,i=t){super(ut("circle",t),i)}radius(t){return this.attr("r",t)}rx(t){return this.attr("r",t)}ry(t){return this.rx(t)}size(t){return this.radius(new B(t).divide(2))}}Y(In,{x:wl,y:_l,cx:xl,cy:kl,width:Cl,height:$l});H({Container:{circle:ht(function(e=0){return this.put(new In).size(e).move(0,0)})}});W(In,"Circle");class Ko extends Bt{constructor(t,i=t){super(ut("clipPath",t),i)}remove(){return this.targets().forEach(function(t){t.unclip()}),super.remove()}targets(){return Xi("svg [clip-path*="+this.id()+"]")}}H({Container:{clip:ht(function(){return this.defs().put(new Ko)})},Element:{clipper(){return this.reference("clip-path")},clipWith(e){const t=e instanceof Ko?e:this.parent().clip().add(e);return this.attr("clip-path","url(#"+t.id()+")")},unclip(){return this.attr("clip-path",null)}}});W(Ko,"ClipPath");class Dl extends _e{constructor(t,i=t){super(ut("foreignObject",t),i)}}H({Container:{foreignObject:ht(function(e,t){return this.put(new Dl).size(e,t)})}});W(Dl,"ForeignObject");function Gu(e,t){return this.children().forEach((i,s)=>{let r;try{r=i.bbox()}catch{return}const o=new P(i),n=o.translate(e,t).transform(o.inverse()),l=new wt(r.x,r.y).transform(n);i.move(l.x,l.y)}),this}function Qu(e){return this.dmove(e,0)}function Zu(e){return this.dmove(0,e)}function Ju(e,t=this.bbox()){return e==null?t.height:this.size(t.width,e,t)}function td(e=0,t=0,i=this.bbox()){const s=e-i.x,r=t-i.y;return this.dmove(s,r)}function ed(e,t,i=this.bbox()){const s=qi(this,e,t,i),r=s.width/i.width,o=s.height/i.height;return this.children().forEach((n,l)=>{const a=new wt(i).transform(new P(n).inverse());n.scale(r,o,a.x,a.y)}),this}function id(e,t=this.bbox()){return e==null?t.width:this.size(e,t.height,t)}function sd(e,t=this.bbox()){return e==null?t.x:this.move(e,t.y,t)}function rd(e,t=this.bbox()){return e==null?t.y:this.move(t.x,e,t)}var Pl={__proto__:null,dmove:Gu,dx:Qu,dy:Zu,height:Ju,move:td,size:ed,width:id,x:sd,y:rd};let Ln=class extends Bt{constructor(t,i=t){super(ut("g",t),i)}};Y(Ln,Pl);H({Container:{group:ht(function(){return this.put(new Ln)})}});W(Ln,"G");let Tr=class extends Bt{constructor(t,i=t){super(ut("a",t),i)}target(t){return this.attr("target",t)}to(t){return this.attr("href",t,Us)}};Y(Tr,Pl);H({Container:{link:ht(function(e){return this.put(new Tr).to(e)})},Element:{unlink(){const e=this.linker();if(!e)return this;const t=e.parent();if(!t)return this.remove();const i=t.index(e);return t.add(this,i),e.remove(),this},linkTo(e){let t=this.linker();return t||(t=new Tr,this.wrap(t)),typeof e=="function"?e.call(t,t):t.to(e),this},linker(){const e=this.parent();return e&&e.node.nodeName.toLowerCase()==="a"?e:null}}});W(Tr,"A");class Go extends Bt{constructor(t,i=t){super(ut("mask",t),i)}remove(){return this.targets().forEach(function(t){t.unmask()}),super.remove()}targets(){return Xi("svg [mask*="+this.id()+"]")}}H({Container:{mask:ht(function(){return this.defs().put(new Go)})},Element:{masker(){return this.reference("mask")},maskWith(e){const t=e instanceof Go?e:this.parent().mask().add(e);return this.attr("mask","url(#"+t.id()+")")},unmask(){return this.attr("mask",null)}}});W(Go,"Mask");class Rl extends _e{constructor(t,i=t){super(ut("stop",t),i)}update(t){return(typeof t=="number"||t instanceof B)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),t.opacity!=null&&this.attr("stop-opacity",t.opacity),t.color!=null&&this.attr("stop-color",t.color),t.offset!=null&&this.attr("offset",new B(t.offset)),this}}H({Gradient:{stop:function(e,t,i){return this.put(new Rl).update(e,t,i)}}});W(Rl,"Stop");function od(e,t){if(!e)return"";if(!t)return e;let i=e+"{";for(const s in t)i+=th(s)+":"+t[s]+";";return i+="}",i}class Qo extends _e{constructor(t,i=t){super(ut("style",t),i)}addText(t=""){return this.node.textContent+=t,this}font(t,i,s={}){return this.rule("@font-face",{fontFamily:t,src:i,...s})}rule(t,i){return this.addText(od(t,i))}}H("Dom",{style(e,t){return this.put(new Qo).rule(e,t)},fontface(e,t,i){return this.put(new Qo).font(e,t,i)}});W(Qo,"Style");class Dn extends ae{constructor(t,i=t){super(ut("textPath",t),i)}array(){const t=this.track();return t?t.array():null}plot(t){const i=this.track();let s=null;return i&&(s=i.plot(t)),t==null?s:this}track(){return this.reference("href")}}H({Container:{textPath:ht(function(e,t){return e instanceof ae||(e=this.text(e)),e.path(t)})},Text:{path:ht(function(e,t=!0){const i=new Dn;e instanceof Yi||(e=this.defs().path(e)),i.attr("href","#"+e,Us);let s;if(t)for(;s=this.node.firstChild;)i.node.appendChild(s);return this.put(i)}),textPath(){return this.findOne("textPath")}},Path:{text:ht(function(e){return e instanceof ae||(e=new ae().addTo(this.parent()).text(e)),e.path(this)}),targets(){return Xi("svg textPath").filter(e=>(e.attr("href")||"").includes(this.id()))}}});Dn.prototype.MorphArray=_i;W(Dn,"TextPath");class Fl extends Gt{constructor(t,i=t){super(ut("use",t),i)}use(t,i){return this.attr("href",(i||"")+"#"+t,Us)}}H({Container:{use:ht(function(e,t){return this.put(new Fl).use(e,t)})}});W(Fl,"Use");const nd=Pt;Y([Mn,On,jr,Ms,Ar],Vt("viewbox"));Y([Os,Ys,Xs,Yi],Vt("marker"));Y(ae,Vt("Text"));Y(Yi,Vt("Path"));Y($n,Vt("Defs"));Y([ae,Xr],Vt("Tspan"));Y([qr,Hr,js,Wt],Vt("radius"));Y(Hs,Vt("EventTarget"));Y(Ke,Vt("Dom"));Y(_e,Vt("Element"));Y(Gt,Vt("Shape"));Y([Bt,Sl],Vt("Container"));Y(js,Vt("Gradient"));Y(Wt,Vt("Runner"));wi.extend(Zc());Su([B,ot,It,P,Ni,Ge,_i,wt]);Au();var ad=Object.create,Pn=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,cd=Object.getOwnPropertyNames,hd=Object.getPrototypeOf,ud=Object.prototype.hasOwnProperty,dd=e=>Pn(e,"__esModule",{value:!0}),ce=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),pd=(e,t,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of cd(t))!ud.call(e,s)&&s!=="default"&&Pn(e,s,{get:()=>t[s],enumerable:!(i=ld(t,s))||i.enumerable});return e},Rn=e=>pd(dd(Pn(e!=null?ad(hd(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),fd=ce((e,t)=>{(function(i,s,r){function o(c){var u=this,d=a();u.next=function(){var p=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=p-(u.c=p|0)},u.c=1,u.s0=d(" "),u.s1=d(" "),u.s2=d(" "),u.s0-=d(c),u.s0<0&&(u.s0+=1),u.s1-=d(c),u.s1<0&&(u.s1+=1),u.s2-=d(c),u.s2<0&&(u.s2+=1),d=null}function n(c,u){return u.c=c.c,u.s0=c.s0,u.s1=c.s1,u.s2=c.s2,u}function l(c,u){var d=new o(c),p=u&&u.state,f=d.next;return f.int32=function(){return d.next()*4294967296|0},f.double=function(){return f()+(f()*2097152|0)*11102230246251565e-32},f.quick=f,p&&(typeof p=="object"&&n(p,d),f.state=function(){return n(d,{})}),f}function a(){var c=4022871197,u=function(d){d=String(d);for(var p=0;p<d.length;p++){c+=d.charCodeAt(p);var f=.02519603282416938*c;c=f>>>0,f-=c,f*=c,c=f>>>0,f-=c,c+=f*4294967296}return(c>>>0)*23283064365386963e-26};return u}s&&s.exports?s.exports=l:r&&r.amd?r(function(){return l}):this.alea=l})(e,typeof t=="object"&&t,typeof define=="function"&&define)}),md=ce((e,t)=>{(function(i,s,r){function o(a){var c=this,u="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var p=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^p^p>>>8},a===(a|0)?c.x=a:u+=a;for(var d=0;d<u.length+64;d++)c.x^=u.charCodeAt(d)|0,c.next()}function n(a,c){return c.x=a.x,c.y=a.y,c.z=a.z,c.w=a.w,c}function l(a,c){var u=new o(a),d=c&&c.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var f=u.next()>>>11,g=(u.next()>>>0)/4294967296,b=(f+g)/(1<<21);while(b===0);return b},p.int32=u.next,p.quick=p,d&&(typeof d=="object"&&n(d,u),p.state=function(){return n(u,{})}),p}s&&s.exports?s.exports=l:r&&r.amd?r(function(){return l}):this.xor128=l})(e,typeof t=="object"&&t,typeof define=="function"&&define)}),gd=ce((e,t)=>{(function(i,s,r){function o(a){var c=this,u="";c.next=function(){var p=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(p^p<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,a===(a|0)?c.x=a:u+=a;for(var d=0;d<u.length+64;d++)c.x^=u.charCodeAt(d)|0,d==u.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function n(a,c){return c.x=a.x,c.y=a.y,c.z=a.z,c.w=a.w,c.v=a.v,c.d=a.d,c}function l(a,c){var u=new o(a),d=c&&c.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var f=u.next()>>>11,g=(u.next()>>>0)/4294967296,b=(f+g)/(1<<21);while(b===0);return b},p.int32=u.next,p.quick=p,d&&(typeof d=="object"&&n(d,u),p.state=function(){return n(u,{})}),p}s&&s.exports?s.exports=l:r&&r.amd?r(function(){return l}):this.xorwow=l})(e,typeof t=="object"&&t,typeof define=="function"&&define)}),bd=ce((e,t)=>{(function(i,s,r){function o(a){var c=this;c.next=function(){var d=c.x,p=c.i,f,g;return f=d[p],f^=f>>>7,g=f^f<<24,f=d[p+1&7],g^=f^f>>>10,f=d[p+3&7],g^=f^f>>>3,f=d[p+4&7],g^=f^f<<7,f=d[p+7&7],f=f^f<<13,g^=f^f<<9,d[p]=g,c.i=p+1&7,g};function u(d,p){var f,g=[];if(p===(p|0))g[0]=p;else for(p=""+p,f=0;f<p.length;++f)g[f&7]=g[f&7]<<15^p.charCodeAt(f)+g[f+1&7]<<13;for(;g.length<8;)g.push(0);for(f=0;f<8&&g[f]===0;++f);for(f==8?g[7]=-1:g[f],d.x=g,d.i=0,f=256;f>0;--f)d.next()}u(c,a)}function n(a,c){return c.x=a.x.slice(),c.i=a.i,c}function l(a,c){a==null&&(a=+new Date);var u=new o(a),d=c&&c.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var f=u.next()>>>11,g=(u.next()>>>0)/4294967296,b=(f+g)/(1<<21);while(b===0);return b},p.int32=u.next,p.quick=p,d&&(d.x&&n(d,u),p.state=function(){return n(u,{})}),p}s&&s.exports?s.exports=l:r&&r.amd?r(function(){return l}):this.xorshift7=l})(e,typeof t=="object"&&t,typeof define=="function"&&define)}),vd=ce((e,t)=>{(function(i,s,r){function o(a){var c=this;c.next=function(){var d=c.w,p=c.X,f=c.i,g,b;return c.w=d=d+1640531527|0,b=p[f+34&127],g=p[f=f+1&127],b^=b<<13,g^=g<<17,b^=b>>>15,g^=g>>>12,b=p[f]=b^g,c.i=f,b+(d^d>>>16)|0};function u(d,p){var f,g,b,v,y,_=[],k=128;for(p===(p|0)?(g=p,p=null):(p=p+"\0",g=0,k=Math.max(k,p.length)),b=0,v=-32;v<k;++v)p&&(g^=p.charCodeAt((v+32)%p.length)),v===0&&(y=g),g^=g<<10,g^=g>>>15,g^=g<<4,g^=g>>>13,v>=0&&(y=y+1640531527|0,f=_[v&127]^=g+y,b=f==0?b+1:0);for(b>=128&&(_[(p&&p.length||0)&127]=-1),b=127,v=4*128;v>0;--v)g=_[b+34&127],f=_[b=b+1&127],g^=g<<13,f^=f<<17,g^=g>>>15,f^=f>>>12,_[b]=g^f;d.w=y,d.X=_,d.i=b}u(c,a)}function n(a,c){return c.i=a.i,c.w=a.w,c.X=a.X.slice(),c}function l(a,c){a==null&&(a=+new Date);var u=new o(a),d=c&&c.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var f=u.next()>>>11,g=(u.next()>>>0)/4294967296,b=(f+g)/(1<<21);while(b===0);return b},p.int32=u.next,p.quick=p,d&&(d.X&&n(d,u),p.state=function(){return n(u,{})}),p}s&&s.exports?s.exports=l:r&&r.amd?r(function(){return l}):this.xor4096=l})(e,typeof t=="object"&&t,typeof define=="function"&&define)}),yd=ce((e,t)=>{(function(i,s,r){function o(a){var c=this,u="";c.next=function(){var p=c.b,f=c.c,g=c.d,b=c.a;return p=p<<25^p>>>7^f,f=f-g|0,g=g<<24^g>>>8^b,b=b-p|0,c.b=p=p<<20^p>>>12^f,c.c=f=f-g|0,c.d=g<<16^f>>>16^b,c.a=b-p|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,a===Math.floor(a)?(c.a=a/4294967296|0,c.b=a|0):u+=a;for(var d=0;d<u.length+20;d++)c.b^=u.charCodeAt(d)|0,c.next()}function n(a,c){return c.a=a.a,c.b=a.b,c.c=a.c,c.d=a.d,c}function l(a,c){var u=new o(a),d=c&&c.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var f=u.next()>>>11,g=(u.next()>>>0)/4294967296,b=(f+g)/(1<<21);while(b===0);return b},p.int32=u.next,p.quick=p,d&&(typeof d=="object"&&n(d,u),p.state=function(){return n(u,{})}),p}s&&s.exports?s.exports=l:r&&r.amd?r(function(){return l}):this.tychei=l})(e,typeof t=="object"&&t,typeof define=="function"&&define)}),wd=ce(()=>{}),_d=ce((e,t)=>{(function(i,s,r){var o=256,n=6,l=52,a="random",c=r.pow(o,n),u=r.pow(2,l),d=u*2,p=o-1,f;function g(w,C,T){var M=[];C=C==!0?{entropy:!0}:C||{};var A=_(y(C.entropy?[w,x(s)]:w??k(),3),M),z=new b(M),U=function(){for(var N=z.g(n),Z=c,V=0;N<u;)N=(N+V)*o,Z*=o,V=z.g(1);for(;N>=d;)N/=2,Z/=2,V>>>=1;return(N+V)/Z};return U.int32=function(){return z.g(4)|0},U.quick=function(){return z.g(4)/4294967296},U.double=U,_(x(z.S),s),(C.pass||T||function(N,Z,V,q){return q&&(q.S&&v(q,z),N.state=function(){return v(z,{})}),V?(r[a]=N,Z):N})(U,A,"global"in C?C.global:this==r,C.state)}function b(w){var C,T=w.length,M=this,A=0,z=M.i=M.j=0,U=M.S=[];for(T||(w=[T++]);A<o;)U[A]=A++;for(A=0;A<o;A++)U[A]=U[z=p&z+w[A%T]+(C=U[A])],U[z]=C;(M.g=function(N){for(var Z,V=0,q=M.i,Q=M.j,X=M.S;N--;)Z=X[q=p&q+1],V=V*o+X[p&(X[q]=X[Q=p&Q+Z])+(X[Q]=Z)];return M.i=q,M.j=Q,V})(o)}function v(w,C){return C.i=w.i,C.j=w.j,C.S=w.S.slice(),C}function y(w,C){var T=[],M=typeof w,A;if(C&&M=="object")for(A in w)try{T.push(y(w[A],C-1))}catch{}return T.length?T:M=="string"?w:w+"\0"}function _(w,C){for(var T=w+"",M,A=0;A<T.length;)C[p&A]=p&(M^=C[p&A]*19)+T.charCodeAt(A++);return x(C)}function k(){try{var w;return f&&(w=f.randomBytes)?w=w(o):(w=new Uint8Array(o),(i.crypto||i.msCrypto).getRandomValues(w)),x(w)}catch{var C=i.navigator,T=C&&C.plugins;return[+new Date,i,T,i.screen,x(s)]}}function x(w){return String.fromCharCode.apply(0,w)}if(_(r.random(),s),typeof t=="object"&&t.exports){t.exports=g;try{f=wd()}catch{}}else typeof define=="function"&&define.amd?define(function(){return g}):r["seed"+a]=g})(typeof self<"u"?self:e,[],Math)}),xd=ce((e,t)=>{var i=fd(),s=md(),r=gd(),o=bd(),n=vd(),l=yd(),a=_d();a.alea=i,a.xor128=s,a.xorwow=r,a.xorshift7=o,a.xor4096=n,a.tychei=l,t.exports=a}),kd=ce((e,t)=>{(function(){function i(s,r,o,n){this.max_objects=r||10,this.max_levels=o||4,this.level=n||0,this.bounds=s,this.objects=[],this.nodes=[]}i.prototype.split=function(){var s=this.level+1,r=this.bounds.width/2,o=this.bounds.height/2,n=this.bounds.x,l=this.bounds.y;this.nodes[0]=new i({x:n+r,y:l,width:r,height:o},this.max_objects,this.max_levels,s),this.nodes[1]=new i({x:n,y:l,width:r,height:o},this.max_objects,this.max_levels,s),this.nodes[2]=new i({x:n,y:l+o,width:r,height:o},this.max_objects,this.max_levels,s),this.nodes[3]=new i({x:n+r,y:l+o,width:r,height:o},this.max_objects,this.max_levels,s)},i.prototype.getIndex=function(s){var r=[],o=this.bounds.x+this.bounds.width/2,n=this.bounds.y+this.bounds.height/2,l=s.y<n,a=s.x<o,c=s.x+s.width>o,u=s.y+s.height>n;return l&&c&&r.push(0),a&&l&&r.push(1),a&&u&&r.push(2),c&&u&&r.push(3),r},i.prototype.insert=function(s){var r=0,o;if(this.nodes.length){for(o=this.getIndex(s),r=0;r<o.length;r++)this.nodes[o[r]].insert(s);return}if(this.objects.push(s),this.objects.length>this.max_objects&&this.level<this.max_levels){for(this.nodes.length||this.split(),r=0;r<this.objects.length;r++){o=this.getIndex(this.objects[r]);for(var n=0;n<o.length;n++)this.nodes[o[n]].insert(this.objects[r])}this.objects=[]}},i.prototype.retrieve=function(s){var r=this.getIndex(s),o=this.objects;if(this.nodes.length)for(var n=0;n<r.length;n++)o=o.concat(this.nodes[r[n]].retrieve(s));return o=o.filter(function(l,a){return o.indexOf(l)>=a}),o},i.prototype.clear=function(){this.objects=[];for(var s=0;s<this.nodes.length;s++)this.nodes.length&&this.nodes[s].clear();this.nodes=[]},typeof t<"u"&&typeof t.exports<"u"?t.exports=i:window.Quadtree=i})()}),Cd=ce((e,t)=>{(function(){var i=.5*(Math.sqrt(3)-1),s=(3-Math.sqrt(3))/6,r=1/3,o=1/6,n=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;function a(p){var f;typeof p=="function"?f=p:p?f=u(p):f=Math.random,this.p=c(f),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var g=0;g<512;g++)this.perm[g]=this.p[g&255],this.permMod12[g]=this.perm[g]%12}a.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(p,f){var g=this.permMod12,b=this.perm,v=this.grad3,y=0,_=0,k=0,x=(p+f)*i,w=Math.floor(p+x),C=Math.floor(f+x),T=(w+C)*s,M=w-T,A=C-T,z=p-M,U=f-A,N,Z;z>U?(N=1,Z=0):(N=0,Z=1);var V=z-N+s,q=U-Z+s,Q=z-1+2*s,X=U-1+2*s,lt=w&255,ft=C&255,ct=.5-z*z-U*U;if(ct>=0){var $t=g[lt+b[ft]]*3;ct*=ct,y=ct*ct*(v[$t]*z+v[$t+1]*U)}var yt=.5-V*V-q*q;if(yt>=0){var Ut=g[lt+N+b[ft+Z]]*3;yt*=yt,_=yt*yt*(v[Ut]*V+v[Ut+1]*q)}var Ot=.5-Q*Q-X*X;if(Ot>=0){var ge=g[lt+1+b[ft+1]]*3;Ot*=Ot,k=Ot*Ot*(v[ge]*Q+v[ge+1]*X)}return 70*(y+_+k)},noise3D:function(p,f,g){var b=this.permMod12,v=this.perm,y=this.grad3,_,k,x,w,C=(p+f+g)*r,T=Math.floor(p+C),M=Math.floor(f+C),A=Math.floor(g+C),z=(T+M+A)*o,U=T-z,N=M-z,Z=A-z,V=p-U,q=f-N,Q=g-Z,X,lt,ft,ct,$t,yt;V>=q?q>=Q?(X=1,lt=0,ft=0,ct=1,$t=1,yt=0):V>=Q?(X=1,lt=0,ft=0,ct=1,$t=0,yt=1):(X=0,lt=0,ft=1,ct=1,$t=0,yt=1):q<Q?(X=0,lt=0,ft=1,ct=0,$t=1,yt=1):V<Q?(X=0,lt=1,ft=0,ct=0,$t=1,yt=1):(X=0,lt=1,ft=0,ct=1,$t=1,yt=0);var Ut=V-X+o,Ot=q-lt+o,ge=Q-ft+o,si=V-ct+2*o,ri=q-$t+2*o,oi=Q-yt+2*o,ni=V-1+3*o,ai=q-1+3*o,li=Q-1+3*o,Be=T&255,Ue=M&255,He=A&255,Ee=.6-V*V-q*q-Q*Q;if(Ee<0)_=0;else{var ci=b[Be+v[Ue+v[He]]]*3;Ee*=Ee,_=Ee*Ee*(y[ci]*V+y[ci+1]*q+y[ci+2]*Q)}var Te=.6-Ut*Ut-Ot*Ot-ge*ge;if(Te<0)k=0;else{var hi=b[Be+X+v[Ue+lt+v[He+ft]]]*3;Te*=Te,k=Te*Te*(y[hi]*Ut+y[hi+1]*Ot+y[hi+2]*ge)}var Me=.6-si*si-ri*ri-oi*oi;if(Me<0)x=0;else{var ui=b[Be+ct+v[Ue+$t+v[He+yt]]]*3;Me*=Me,x=Me*Me*(y[ui]*si+y[ui+1]*ri+y[ui+2]*oi)}var Oe=.6-ni*ni-ai*ai-li*li;if(Oe<0)w=0;else{var di=b[Be+1+v[Ue+1+v[He+1]]]*3;Oe*=Oe,w=Oe*Oe*(y[di]*ni+y[di+1]*ai+y[di+2]*li)}return 32*(_+k+x+w)},noise4D:function(p,f,g,b){var v=this.perm,y=this.grad4,_,k,x,w,C,T=(p+f+g+b)*n,M=Math.floor(p+T),A=Math.floor(f+T),z=Math.floor(g+T),U=Math.floor(b+T),N=(M+A+z+U)*l,Z=M-N,V=A-N,q=z-N,Q=U-N,X=p-Z,lt=f-V,ft=g-q,ct=b-Q,$t=0,yt=0,Ut=0,Ot=0;X>lt?$t++:yt++,X>ft?$t++:Ut++,X>ct?$t++:Ot++,lt>ft?yt++:Ut++,lt>ct?yt++:Ot++,ft>ct?Ut++:Ot++;var ge,si,ri,oi,ni,ai,li,Be,Ue,He,Ee,ci;ge=$t>=3?1:0,si=yt>=3?1:0,ri=Ut>=3?1:0,oi=Ot>=3?1:0,ni=$t>=2?1:0,ai=yt>=2?1:0,li=Ut>=2?1:0,Be=Ot>=2?1:0,Ue=$t>=1?1:0,He=yt>=1?1:0,Ee=Ut>=1?1:0,ci=Ot>=1?1:0;var Te=X-ge+l,hi=lt-si+l,Me=ft-ri+l,ui=ct-oi+l,Oe=X-ni+2*l,di=lt-ai+2*l,oo=ft-li+2*l,no=ct-Be+2*l,ao=X-Ue+3*l,lo=lt-He+3*l,co=ft-Ee+3*l,ho=ct-ci+3*l,uo=X-1+4*l,po=lt-1+4*l,fo=ft-1+4*l,mo=ct-1+4*l,Ji=M&255,ts=A&255,es=z&255,is=U&255,ss=.6-X*X-lt*lt-ft*ft-ct*ct;if(ss<0)_=0;else{var nr=v[Ji+v[ts+v[es+v[is]]]]%32*4;ss*=ss,_=ss*ss*(y[nr]*X+y[nr+1]*lt+y[nr+2]*ft+y[nr+3]*ct)}var rs=.6-Te*Te-hi*hi-Me*Me-ui*ui;if(rs<0)k=0;else{var ar=v[Ji+ge+v[ts+si+v[es+ri+v[is+oi]]]]%32*4;rs*=rs,k=rs*rs*(y[ar]*Te+y[ar+1]*hi+y[ar+2]*Me+y[ar+3]*ui)}var os=.6-Oe*Oe-di*di-oo*oo-no*no;if(os<0)x=0;else{var lr=v[Ji+ni+v[ts+ai+v[es+li+v[is+Be]]]]%32*4;os*=os,x=os*os*(y[lr]*Oe+y[lr+1]*di+y[lr+2]*oo+y[lr+3]*no)}var ns=.6-ao*ao-lo*lo-co*co-ho*ho;if(ns<0)w=0;else{var cr=v[Ji+Ue+v[ts+He+v[es+Ee+v[is+ci]]]]%32*4;ns*=ns,w=ns*ns*(y[cr]*ao+y[cr+1]*lo+y[cr+2]*co+y[cr+3]*ho)}var as=.6-uo*uo-po*po-fo*fo-mo*mo;if(as<0)C=0;else{var hr=v[Ji+1+v[ts+1+v[es+1+v[is+1]]]]%32*4;as*=as,C=as*as*(y[hr]*uo+y[hr+1]*po+y[hr+2]*fo+y[hr+3]*mo)}return 27*(_+k+x+w+C)}};function c(p){var f,g=new Uint8Array(256);for(f=0;f<256;f++)g[f]=f;for(f=0;f<255;f++){var b=f+~~(p()*(256-f)),v=g[f];g[f]=g[b],g[b]=v}return g}a._buildPermutationTable=c;function u(){var p=0,f=0,g=0,b=1,v=d();p=v(" "),f=v(" "),g=v(" ");for(var y=0;y<arguments.length;y++)p-=v(arguments[y]),p<0&&(p+=1),f-=v(arguments[y]),f<0&&(f+=1),g-=v(arguments[y]),g<0&&(g+=1);return v=null,function(){var _=2091639*p+b*23283064365386963e-26;return p=f,f=g,g=_-(b=_|0)}}function d(){var p=4022871197;return function(f){f=f.toString();for(var g=0;g<f.length;g++){p+=f.charCodeAt(g);var b=.02519603282416938*p;p=b>>>0,b-=p,b*=p,p=b>>>0,b-=p,p+=b*4294967296}return(p>>>0)*23283064365386963e-26}}typeof define<"u"&&define.amd&&define(function(){return a}),typeof e<"u"?e.SimplexNoise=a:typeof window<"u"&&(window.SimplexNoise=a),typeof t<"u"&&(t.exports=a)})()}),Nl=Rn(xd()),Vl=(0,Nl.default)();function ua(e){Vl=(0,Nl.default)(e)}function Zo(){if(Array.isArray(arguments[0])){let e=arguments[0];return e[Zo(0,e.length-1,!0)]}else{let e=arguments[0],t=arguments[1],i=arguments[2]||!1,s=Vl()*(t-e)+e;return i?Math.round(s):s}}function $d(e=[],t=.5,i=!1,s){let r=t*.5;if(e.length<2)return"";function o(u,d,p,f,g,b){let v=g*g,y=v*g,_={x:(p.x-u.x)*b,y:(p.y-u.y)*b},k={x:(f.x-d.x)*b,y:(f.y-d.y)*b};return{x:(2*d.x-2*p.x+_.x+k.x)*y+(-3*d.x+3*p.x-2*_.x-k.x)*v+_.x*g+d.x,y:(2*d.y-2*p.y+_.y+k.y)*y+(-3*d.y+3*p.y-2*_.y-k.y)*v+_.y*g+d.y}}let n="M"+[e[0].x,e[0].y];s&&s("MOVE",[e[0].x,e[0].y]);let l=e.length,a=20,c=i?l:l-1;for(let u=0;u<c;u++){let d=e[u===0?i?l-1:u:u-1],p=e[u],f=e[(u+1)%l],g=e[u+2<l?u+2:i?(u+2)%l:u+1];for(let b=1;b<=a;b++){let v=b/a,y=o(d,p,f,g,v,r);n+="L"+[y.x,y.y],s&&s("LINE",[y.x,y.y])}}return i&&(n+="Z"),n}function Sd(e,t=10){let i=e.getTotalLength(),s=i/(t-1),r=[];for(let o=0;o<t-1;o++)r.push(e.getPointAtLength(o*s));return r.push(e.getPointAtLength(i)),r}Rn(kd());var Ad={value:()=>{}};function Bl(){for(var e=0,t=arguments.length,i={},s;e<t;++e){if(!(s=arguments[e]+"")||s in i||/[\s.]/.test(s))throw new Error("illegal type: "+s);i[s]=[]}return new _r(i)}function _r(e){this._=e}function zd(e,t){return e.trim().split(/^|\s+/).map(function(i){var s="",r=i.indexOf(".");if(r>=0&&(s=i.slice(r+1),i=i.slice(0,r)),i&&!t.hasOwnProperty(i))throw new Error("unknown type: "+i);return{type:i,name:s}})}_r.prototype=Bl.prototype={constructor:_r,on:function(e,t){var i=this._,s=zd(e+"",i),r,o=-1,n=s.length;if(arguments.length<2){for(;++o<n;)if((r=(e=s[o]).type)&&(r=Ed(i[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<n;)if(r=(e=s[o]).type)i[r]=da(i[r],e.name,t);else if(t==null)for(r in i)i[r]=da(i[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var i in t)e[i]=t[i].slice();return new _r(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var i=new Array(r),s=0,r,o;s<r;++s)i[s]=arguments[s+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],s=0,r=o.length;s<r;++s)o[s].value.apply(t,i)},apply:function(e,t,i){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var s=this._[e],r=0,o=s.length;r<o;++r)s[r].value.apply(t,i)}};function Ed(e,t){for(var i=0,s=e.length,r;i<s;++i)if((r=e[i]).name===t)return r.value}function da(e,t,i){for(var s=0,r=e.length;s<r;++s)if(e[s].name===t){e[s]=Ad,e=e.slice(0,s).concat(e.slice(s+1));break}return i!=null&&e.push({name:t,value:i}),e}var Td=Bl,Jo="http://www.w3.org/1999/xhtml",pa={svg:"http://www.w3.org/2000/svg",xhtml:Jo,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Yr(e){var t=e+="",i=t.indexOf(":");return i>=0&&(t=e.slice(0,i))!=="xmlns"&&(e=e.slice(i+1)),pa.hasOwnProperty(t)?{space:pa[t],local:e}:e}function Md(e){return function(){var t=this.ownerDocument,i=this.namespaceURI;return i===Jo&&t.documentElement.namespaceURI===Jo?t.createElement(e):t.createElementNS(i,e)}}function Od(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Ul(e){var t=Yr(e);return(t.local?Od:Md)(t)}function Id(){}function Fn(e){return e==null?Id:function(){return this.querySelector(e)}}function Ld(e){typeof e!="function"&&(e=Fn(e));for(var t=this._groups,i=t.length,s=new Array(i),r=0;r<i;++r)for(var o=t[r],n=o.length,l=s[r]=new Array(n),a,c,u=0;u<n;++u)(a=o[u])&&(c=e.call(a,a.__data__,u,o))&&("__data__"in a&&(c.__data__=a.__data__),l[u]=c);return new le(s,this._parents)}function Dd(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Pd(){return[]}function Hl(e){return e==null?Pd:function(){return this.querySelectorAll(e)}}function Rd(e){return function(){return Dd(e.apply(this,arguments))}}function Fd(e){typeof e=="function"?e=Rd(e):e=Hl(e);for(var t=this._groups,i=t.length,s=[],r=[],o=0;o<i;++o)for(var n=t[o],l=n.length,a,c=0;c<l;++c)(a=n[c])&&(s.push(e.call(a,a.__data__,c,n)),r.push(a));return new le(s,r)}function jl(e){return function(){return this.matches(e)}}function ql(e){return function(t){return t.matches(e)}}var Nd=Array.prototype.find;function Vd(e){return function(){return Nd.call(this.children,e)}}function Bd(){return this.firstElementChild}function Ud(e){return this.select(e==null?Bd:Vd(typeof e=="function"?e:ql(e)))}var Hd=Array.prototype.filter;function jd(){return Array.from(this.children)}function qd(e){return function(){return Hd.call(this.children,e)}}function Xd(e){return this.selectAll(e==null?jd:qd(typeof e=="function"?e:ql(e)))}function Yd(e){typeof e!="function"&&(e=jl(e));for(var t=this._groups,i=t.length,s=new Array(i),r=0;r<i;++r)for(var o=t[r],n=o.length,l=s[r]=[],a,c=0;c<n;++c)(a=o[c])&&e.call(a,a.__data__,c,o)&&l.push(a);return new le(s,this._parents)}function Xl(e){return new Array(e.length)}function Wd(){return new le(this._enter||this._groups.map(Xl),this._parents)}function Mr(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Mr.prototype={constructor:Mr,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Kd(e){return function(){return e}}function Gd(e,t,i,s,r,o){for(var n=0,l,a=t.length,c=o.length;n<c;++n)(l=t[n])?(l.__data__=o[n],s[n]=l):i[n]=new Mr(e,o[n]);for(;n<a;++n)(l=t[n])&&(r[n]=l)}function Qd(e,t,i,s,r,o,n){var l,a,c=new Map,u=t.length,d=o.length,p=new Array(u),f;for(l=0;l<u;++l)(a=t[l])&&(p[l]=f=n.call(a,a.__data__,l,t)+"",c.has(f)?r[l]=a:c.set(f,a));for(l=0;l<d;++l)f=n.call(e,o[l],l,o)+"",(a=c.get(f))?(s[l]=a,a.__data__=o[l],c.delete(f)):i[l]=new Mr(e,o[l]);for(l=0;l<u;++l)(a=t[l])&&c.get(p[l])===a&&(r[l]=a)}function Zd(e){return e.__data__}function Jd(e,t){if(!arguments.length)return Array.from(this,Zd);var i=t?Qd:Gd,s=this._parents,r=this._groups;typeof e!="function"&&(e=Kd(e));for(var o=r.length,n=new Array(o),l=new Array(o),a=new Array(o),c=0;c<o;++c){var u=s[c],d=r[c],p=d.length,f=tp(e.call(u,u&&u.__data__,c,s)),g=f.length,b=l[c]=new Array(g),v=n[c]=new Array(g),y=a[c]=new Array(p);i(u,d,b,v,y,f,t);for(var _=0,k=0,x,w;_<g;++_)if(x=b[_]){for(_>=k&&(k=_+1);!(w=v[k])&&++k<g;);x._next=w||null}}return n=new le(n,s),n._enter=l,n._exit=a,n}function tp(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function ep(){return new le(this._exit||this._groups.map(Xl),this._parents)}function ip(e,t,i){var s=this.enter(),r=this,o=this.exit();return typeof e=="function"?(s=e(s),s&&(s=s.selection())):s=s.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),i==null?o.remove():i(o),s&&r?s.merge(r).order():r}function sp(e){for(var t=e.selection?e.selection():e,i=this._groups,s=t._groups,r=i.length,o=s.length,n=Math.min(r,o),l=new Array(r),a=0;a<n;++a)for(var c=i[a],u=s[a],d=c.length,p=l[a]=new Array(d),f,g=0;g<d;++g)(f=c[g]||u[g])&&(p[g]=f);for(;a<r;++a)l[a]=i[a];return new le(l,this._parents)}function rp(){for(var e=this._groups,t=-1,i=e.length;++t<i;)for(var s=e[t],r=s.length-1,o=s[r],n;--r>=0;)(n=s[r])&&(o&&n.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(n,o),o=n);return this}function op(e){e||(e=np);function t(d,p){return d&&p?e(d.__data__,p.__data__):!d-!p}for(var i=this._groups,s=i.length,r=new Array(s),o=0;o<s;++o){for(var n=i[o],l=n.length,a=r[o]=new Array(l),c,u=0;u<l;++u)(c=n[u])&&(a[u]=c);a.sort(t)}return new le(r,this._parents).order()}function np(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function ap(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function lp(){return Array.from(this)}function cp(){for(var e=this._groups,t=0,i=e.length;t<i;++t)for(var s=e[t],r=0,o=s.length;r<o;++r){var n=s[r];if(n)return n}return null}function hp(){let e=0;for(let t of this)++e;return e}function up(){return!this.node()}function dp(e){for(var t=this._groups,i=0,s=t.length;i<s;++i)for(var r=t[i],o=0,n=r.length,l;o<n;++o)(l=r[o])&&e.call(l,l.__data__,o,r);return this}function pp(e){return function(){this.removeAttribute(e)}}function fp(e){return function(){this.removeAttributeNS(e.space,e.local)}}function mp(e,t){return function(){this.setAttribute(e,t)}}function gp(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function bp(e,t){return function(){var i=t.apply(this,arguments);i==null?this.removeAttribute(e):this.setAttribute(e,i)}}function vp(e,t){return function(){var i=t.apply(this,arguments);i==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,i)}}function yp(e,t){var i=Yr(e);if(arguments.length<2){var s=this.node();return i.local?s.getAttributeNS(i.space,i.local):s.getAttribute(i)}return this.each((t==null?i.local?fp:pp:typeof t=="function"?i.local?vp:bp:i.local?gp:mp)(i,t))}function Yl(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function wp(e){return function(){this.style.removeProperty(e)}}function _p(e,t,i){return function(){this.style.setProperty(e,t,i)}}function xp(e,t,i){return function(){var s=t.apply(this,arguments);s==null?this.style.removeProperty(e):this.style.setProperty(e,s,i)}}function kp(e,t,i){return arguments.length>1?this.each((t==null?wp:typeof t=="function"?xp:_p)(e,t,i??"")):Vi(this.node(),e)}function Vi(e,t){return e.style.getPropertyValue(t)||Yl(e).getComputedStyle(e,null).getPropertyValue(t)}function Cp(e){return function(){delete this[e]}}function $p(e,t){return function(){this[e]=t}}function Sp(e,t){return function(){var i=t.apply(this,arguments);i==null?delete this[e]:this[e]=i}}function Ap(e,t){return arguments.length>1?this.each((t==null?Cp:typeof t=="function"?Sp:$p)(e,t)):this.node()[e]}function Wl(e){return e.trim().split(/^|\s+/)}function Nn(e){return e.classList||new Kl(e)}function Kl(e){this._node=e,this._names=Wl(e.getAttribute("class")||"")}Kl.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Gl(e,t){for(var i=Nn(e),s=-1,r=t.length;++s<r;)i.add(t[s])}function Ql(e,t){for(var i=Nn(e),s=-1,r=t.length;++s<r;)i.remove(t[s])}function zp(e){return function(){Gl(this,e)}}function Ep(e){return function(){Ql(this,e)}}function Tp(e,t){return function(){(t.apply(this,arguments)?Gl:Ql)(this,e)}}function Mp(e,t){var i=Wl(e+"");if(arguments.length<2){for(var s=Nn(this.node()),r=-1,o=i.length;++r<o;)if(!s.contains(i[r]))return!1;return!0}return this.each((typeof t=="function"?Tp:t?zp:Ep)(i,t))}function Op(){this.textContent=""}function Ip(e){return function(){this.textContent=e}}function Lp(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Dp(e){return arguments.length?this.each(e==null?Op:(typeof e=="function"?Lp:Ip)(e)):this.node().textContent}function Pp(){this.innerHTML=""}function Rp(e){return function(){this.innerHTML=e}}function Fp(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Np(e){return arguments.length?this.each(e==null?Pp:(typeof e=="function"?Fp:Rp)(e)):this.node().innerHTML}function Vp(){this.nextSibling&&this.parentNode.appendChild(this)}function Bp(){return this.each(Vp)}function Up(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Hp(){return this.each(Up)}function jp(e){var t=typeof e=="function"?e:Ul(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function qp(){return null}function Xp(e,t){var i=typeof e=="function"?e:Ul(e),s=t==null?qp:typeof t=="function"?t:Fn(t);return this.select(function(){return this.insertBefore(i.apply(this,arguments),s.apply(this,arguments)||null)})}function Yp(){var e=this.parentNode;e&&e.removeChild(this)}function Wp(){return this.each(Yp)}function Kp(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Gp(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Qp(e){return this.select(e?Gp:Kp)}function Zp(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Jp(e){return function(t){e.call(this,t,this.__data__)}}function tf(e){return e.trim().split(/^|\s+/).map(function(t){var i="",s=t.indexOf(".");return s>=0&&(i=t.slice(s+1),t=t.slice(0,s)),{type:t,name:i}})}function ef(e){return function(){var t=this.__on;if(t){for(var i=0,s=-1,r=t.length,o;i<r;++i)o=t[i],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++s]=o;++s?t.length=s:delete this.__on}}}function sf(e,t,i){return function(){var s=this.__on,r,o=Jp(t);if(s){for(var n=0,l=s.length;n<l;++n)if((r=s[n]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=i),r.value=t;return}}this.addEventListener(e.type,o,i),r={type:e.type,name:e.name,value:t,listener:o,options:i},s?s.push(r):this.__on=[r]}}function rf(e,t,i){var s=tf(e+""),r,o=s.length,n;if(arguments.length<2){var l=this.node().__on;if(l){for(var a=0,c=l.length,u;a<c;++a)for(r=0,u=l[a];r<o;++r)if((n=s[r]).type===u.type&&n.name===u.name)return u.value}return}for(l=t?sf:ef,r=0;r<o;++r)this.each(l(s[r],t,i));return this}function Zl(e,t,i){var s=Yl(e),r=s.CustomEvent;typeof r=="function"?r=new r(t,i):(r=s.document.createEvent("Event"),i?(r.initEvent(t,i.bubbles,i.cancelable),r.detail=i.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function of(e,t){return function(){return Zl(this,e,t)}}function nf(e,t){return function(){return Zl(this,e,t.apply(this,arguments))}}function af(e,t){return this.each((typeof t=="function"?nf:of)(e,t))}function*lf(){for(var e=this._groups,t=0,i=e.length;t<i;++t)for(var s=e[t],r=0,o=s.length,n;r<o;++r)(n=s[r])&&(yield n)}var cf=[null];function le(e,t){this._groups=e,this._parents=t}function Jl(){return new le([[document.documentElement]],cf)}function hf(){return this}le.prototype=Jl.prototype={constructor:le,select:Ld,selectAll:Fd,selectChild:Ud,selectChildren:Xd,filter:Yd,data:Jd,enter:Wd,exit:ep,join:ip,merge:sp,selection:hf,order:rp,sort:op,call:ap,nodes:lp,node:cp,size:hp,empty:up,each:dp,attr:yp,style:kp,property:Ap,classed:Mp,text:Dp,html:Np,raise:Bp,lower:Hp,append:jp,insert:Xp,remove:Wp,clone:Qp,datum:Zp,on:rf,dispatch:af,[Symbol.iterator]:lf};var Wr=Jl;function Vn(e,t,i){e.prototype=t.prototype=i,i.constructor=e}function tc(e,t){var i=Object.create(e.prototype);for(var s in t)i[s]=t[s];return i}function Ws(){}var Ls=.7,Or=1/Ls,Ri="\\s*([+-]?\\d+)\\s*",Ds="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",ye="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",uf=/^#([0-9a-f]{3,8})$/,df=new RegExp("^rgb\\("+[Ri,Ri,Ri]+"\\)$"),pf=new RegExp("^rgb\\("+[ye,ye,ye]+"\\)$"),ff=new RegExp("^rgba\\("+[Ri,Ri,Ri,Ds]+"\\)$"),mf=new RegExp("^rgba\\("+[ye,ye,ye,Ds]+"\\)$"),gf=new RegExp("^hsl\\("+[Ds,ye,ye]+"\\)$"),bf=new RegExp("^hsla\\("+[Ds,ye,ye,Ds]+"\\)$"),fa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Vn(Ws,Ps,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:ma,formatHex:ma,formatHsl:vf,formatRgb:ga,toString:ga});function ma(){return this.rgb().formatHex()}function vf(){return ec(this).formatHsl()}function ga(){return this.rgb().formatRgb()}function Ps(e){var t,i;return e=(e+"").trim().toLowerCase(),(t=uf.exec(e))?(i=t[1].length,t=parseInt(t[1],16),i===6?ba(t):i===3?new Xt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):i===8?pr(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):i===4?pr(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=df.exec(e))?new Xt(t[1],t[2],t[3],1):(t=pf.exec(e))?new Xt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=ff.exec(e))?pr(t[1],t[2],t[3],t[4]):(t=mf.exec(e))?pr(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=gf.exec(e))?wa(t[1],t[2]/100,t[3]/100,1):(t=bf.exec(e))?wa(t[1],t[2]/100,t[3]/100,t[4]):fa.hasOwnProperty(e)?ba(fa[e]):e==="transparent"?new Xt(NaN,NaN,NaN,0):null}function ba(e){return new Xt(e>>16&255,e>>8&255,e&255,1)}function pr(e,t,i,s){return s<=0&&(e=t=i=NaN),new Xt(e,t,i,s)}function yf(e){return e instanceof Ws||(e=Ps(e)),e?(e=e.rgb(),new Xt(e.r,e.g,e.b,e.opacity)):new Xt}function tn(e,t,i,s){return arguments.length===1?yf(e):new Xt(e,t,i,s??1)}function Xt(e,t,i,s){this.r=+e,this.g=+t,this.b=+i,this.opacity=+s}Vn(Xt,tn,tc(Ws,{brighter:function(e){return e=e==null?Or:Math.pow(Or,e),new Xt(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?Ls:Math.pow(Ls,e),new Xt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:va,formatHex:va,formatRgb:ya,toString:ya}));function va(){return"#"+_o(this.r)+_o(this.g)+_o(this.b)}function ya(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}function _o(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function wa(e,t,i,s){return s<=0?e=t=i=NaN:i<=0||i>=1?e=t=NaN:t<=0&&(e=NaN),new ve(e,t,i,s)}function ec(e){if(e instanceof ve)return new ve(e.h,e.s,e.l,e.opacity);if(e instanceof Ws||(e=Ps(e)),!e)return new ve;if(e instanceof ve)return e;e=e.rgb();var t=e.r/255,i=e.g/255,s=e.b/255,r=Math.min(t,i,s),o=Math.max(t,i,s),n=NaN,l=o-r,a=(o+r)/2;return l?(t===o?n=(i-s)/l+(i<s)*6:i===o?n=(s-t)/l+2:n=(t-i)/l+4,l/=a<.5?o+r:2-o-r,n*=60):l=a>0&&a<1?0:n,new ve(n,l,a,e.opacity)}function wf(e,t,i,s){return arguments.length===1?ec(e):new ve(e,t,i,s??1)}function ve(e,t,i,s){this.h=+e,this.s=+t,this.l=+i,this.opacity=+s}Vn(ve,wf,tc(Ws,{brighter:function(e){return e=e==null?Or:Math.pow(Or,e),new ve(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?Ls:Math.pow(Ls,e),new ve(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,i=this.l,s=i+(i<.5?i:1-i)*t,r=2*i-s;return new Xt(xo(e>=240?e-240:e+120,r,s),xo(e,r,s),xo(e<120?e+240:e-120,r,s),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(e===1?")":", "+e+")")}}));function xo(e,t,i){return(e<60?t+(i-t)*e/60:e<180?i:e<240?t+(i-t)*(240-e)/60:t)*255}var ic=e=>()=>e;function _f(e,t){return function(i){return e+i*t}}function xf(e,t,i){return e=Math.pow(e,i),t=Math.pow(t,i)-e,i=1/i,function(s){return Math.pow(e+s*t,i)}}function kf(e){return(e=+e)==1?sc:function(t,i){return i-t?xf(t,i,e):ic(isNaN(t)?i:t)}}function sc(e,t){var i=t-e;return i?_f(e,i):ic(isNaN(e)?t:e)}var _a=function e(t){var i=kf(t);function s(r,o){var n=i((r=tn(r)).r,(o=tn(o)).r),l=i(r.g,o.g),a=i(r.b,o.b),c=sc(r.opacity,o.opacity);return function(u){return r.r=n(u),r.g=l(u),r.b=a(u),r.opacity=c(u),r+""}}return s.gamma=e,s}(1);function je(e,t){return e=+e,t=+t,function(i){return e*(1-i)+t*i}}var en=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ko=new RegExp(en.source,"g");function Cf(e){return function(){return e}}function $f(e){return function(t){return e(t)+""}}function Sf(e,t){var i=en.lastIndex=ko.lastIndex=0,s,r,o,n=-1,l=[],a=[];for(e=e+"",t=t+"";(s=en.exec(e))&&(r=ko.exec(t));)(o=r.index)>i&&(o=t.slice(i,o),l[n]?l[n]+=o:l[++n]=o),(s=s[0])===(r=r[0])?l[n]?l[n]+=r:l[++n]=r:(l[++n]=null,a.push({i:n,x:je(s,r)})),i=ko.lastIndex;return i<t.length&&(o=t.slice(i),l[n]?l[n]+=o:l[++n]=o),l.length<2?a[0]?$f(a[0].x):Cf(t):(t=a.length,function(c){for(var u=0,d;u<t;++u)l[(d=a[u]).i]=d.x(c);return l.join("")})}var xa=180/Math.PI,sn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function rc(e,t,i,s,r,o){var n,l,a;return(n=Math.sqrt(e*e+t*t))&&(e/=n,t/=n),(a=e*i+t*s)&&(i-=e*a,s-=t*a),(l=Math.sqrt(i*i+s*s))&&(i/=l,s/=l,a/=l),e*s<t*i&&(e=-e,t=-t,a=-a,n=-n),{translateX:r,translateY:o,rotate:Math.atan2(t,e)*xa,skewX:Math.atan(a)*xa,scaleX:n,scaleY:l}}var fr;function Af(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?sn:rc(t.a,t.b,t.c,t.d,t.e,t.f)}function zf(e){return e==null?sn:(fr||(fr=document.createElementNS("http://www.w3.org/2000/svg","g")),fr.setAttribute("transform",e),(e=fr.transform.baseVal.consolidate())?(e=e.matrix,rc(e.a,e.b,e.c,e.d,e.e,e.f)):sn)}function oc(e,t,i,s){function r(c){return c.length?c.pop()+" ":""}function o(c,u,d,p,f,g){if(c!==d||u!==p){var b=f.push("translate(",null,t,null,i);g.push({i:b-4,x:je(c,d)},{i:b-2,x:je(u,p)})}else(d||p)&&f.push("translate("+d+t+p+i)}function n(c,u,d,p){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),p.push({i:d.push(r(d)+"rotate(",null,s)-2,x:je(c,u)})):u&&d.push(r(d)+"rotate("+u+s)}function l(c,u,d,p){c!==u?p.push({i:d.push(r(d)+"skewX(",null,s)-2,x:je(c,u)}):u&&d.push(r(d)+"skewX("+u+s)}function a(c,u,d,p,f,g){if(c!==d||u!==p){var b=f.push(r(f)+"scale(",null,",",null,")");g.push({i:b-4,x:je(c,d)},{i:b-2,x:je(u,p)})}else(d!==1||p!==1)&&f.push(r(f)+"scale("+d+","+p+")")}return function(c,u){var d=[],p=[];return c=e(c),u=e(u),o(c.translateX,c.translateY,u.translateX,u.translateY,d,p),n(c.rotate,u.rotate,d,p),l(c.skewX,u.skewX,d,p),a(c.scaleX,c.scaleY,u.scaleX,u.scaleY,d,p),c=u=null,function(f){for(var g=-1,b=p.length,v;++g<b;)d[(v=p[g]).i]=v.x(f);return d.join("")}}}var Ef=oc(Af,"px, ","px)","deg)"),Tf=oc(zf,", ",")",")"),Bi=0,vs=0,cs=0,nc=1e3,Ir,ys,Lr=0,xi=0,Kr=0,Rs=typeof performance=="object"&&performance.now?performance:Date,ac=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Bn(){return xi||(ac(Mf),xi=Rs.now()+Kr)}function Mf(){xi=0}function Dr(){this._call=this._time=this._next=null}Dr.prototype=lc.prototype={constructor:Dr,restart:function(e,t,i){if(typeof e!="function")throw new TypeError("callback is not a function");i=(i==null?Bn():+i)+(t==null?0:+t),!this._next&&ys!==this&&(ys?ys._next=this:Ir=this,ys=this),this._call=e,this._time=i,rn()},stop:function(){this._call&&(this._call=null,this._time=1/0,rn())}};function lc(e,t,i){var s=new Dr;return s.restart(e,t,i),s}function Of(){Bn(),++Bi;for(var e=Ir,t;e;)(t=xi-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Bi}function ka(){xi=(Lr=Rs.now())+Kr,Bi=vs=0;try{Of()}finally{Bi=0,Lf(),xi=0}}function If(){var e=Rs.now(),t=e-Lr;t>nc&&(Kr-=t,Lr=e)}function Lf(){for(var e,t=Ir,i,s=1/0;t;)t._call?(s>t._time&&(s=t._time),e=t,t=t._next):(i=t._next,t._next=null,t=e?e._next=i:Ir=i);ys=e,rn(s)}function rn(e){if(!Bi){vs&&(vs=clearTimeout(vs));var t=e-xi;t>24?(e<1/0&&(vs=setTimeout(ka,e-Rs.now()-Kr)),cs&&(cs=clearInterval(cs))):(cs||(Lr=Rs.now(),cs=setInterval(If,nc)),Bi=1,ac(ka))}}function Ca(e,t,i){var s=new Dr;return t=t==null?0:+t,s.restart(r=>{s.stop(),e(r+t)},t,i),s}var Df=Td("start","end","cancel","interrupt"),Pf=[],cc=0,$a=1,on=2,xr=3,Sa=4,nn=5,kr=6;function Gr(e,t,i,s,r,o){var n=e.__transition;if(!n)e.__transition={};else if(i in n)return;Rf(e,i,{name:t,index:s,group:r,on:Df,tween:Pf,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:cc})}function Un(e,t){var i=he(e,t);if(i.state>cc)throw new Error("too late; already scheduled");return i}function xe(e,t){var i=he(e,t);if(i.state>xr)throw new Error("too late; already running");return i}function he(e,t){var i=e.__transition;if(!i||!(i=i[t]))throw new Error("transition not found");return i}function Rf(e,t,i){var s=e.__transition,r;s[t]=i,i.timer=lc(o,0,i.time);function o(c){i.state=$a,i.timer.restart(n,i.delay,i.time),i.delay<=c&&n(c-i.delay)}function n(c){var u,d,p,f;if(i.state!==$a)return a();for(u in s)if(f=s[u],f.name===i.name){if(f.state===xr)return Ca(n);f.state===Sa?(f.state=kr,f.timer.stop(),f.on.call("interrupt",e,e.__data__,f.index,f.group),delete s[u]):+u<t&&(f.state=kr,f.timer.stop(),f.on.call("cancel",e,e.__data__,f.index,f.group),delete s[u])}if(Ca(function(){i.state===xr&&(i.state=Sa,i.timer.restart(l,i.delay,i.time),l(c))}),i.state=on,i.on.call("start",e,e.__data__,i.index,i.group),i.state===on){for(i.state=xr,r=new Array(p=i.tween.length),u=0,d=-1;u<p;++u)(f=i.tween[u].value.call(e,e.__data__,i.index,i.group))&&(r[++d]=f);r.length=d+1}}function l(c){for(var u=c<i.duration?i.ease.call(null,c/i.duration):(i.timer.restart(a),i.state=nn,1),d=-1,p=r.length;++d<p;)r[d].call(e,u);i.state===nn&&(i.on.call("end",e,e.__data__,i.index,i.group),a())}function a(){i.state=kr,i.timer.stop(),delete s[t];for(var c in s)return;delete e.__transition}}function Ff(e,t){var i=e.__transition,s,r,o=!0,n;if(i){t=t==null?null:t+"";for(n in i){if((s=i[n]).name!==t){o=!1;continue}r=s.state>on&&s.state<nn,s.state=kr,s.timer.stop(),s.on.call(r?"interrupt":"cancel",e,e.__data__,s.index,s.group),delete i[n]}o&&delete e.__transition}}function Nf(e){return this.each(function(){Ff(this,e)})}function Vf(e,t){var i,s;return function(){var r=xe(this,e),o=r.tween;if(o!==i){s=i=o;for(var n=0,l=s.length;n<l;++n)if(s[n].name===t){s=s.slice(),s.splice(n,1);break}}r.tween=s}}function Bf(e,t,i){var s,r;if(typeof i!="function")throw new Error;return function(){var o=xe(this,e),n=o.tween;if(n!==s){r=(s=n).slice();for(var l={name:t,value:i},a=0,c=r.length;a<c;++a)if(r[a].name===t){r[a]=l;break}a===c&&r.push(l)}o.tween=r}}function Uf(e,t){var i=this._id;if(e+="",arguments.length<2){for(var s=he(this.node(),i).tween,r=0,o=s.length,n;r<o;++r)if((n=s[r]).name===e)return n.value;return null}return this.each((t==null?Vf:Bf)(i,e,t))}function Hn(e,t,i){var s=e._id;return e.each(function(){var r=xe(this,s);(r.value||(r.value={}))[t]=i.apply(this,arguments)}),function(r){return he(r,s).value[t]}}function hc(e,t){var i;return(typeof t=="number"?je:t instanceof Ps?_a:(i=Ps(t))?(t=i,_a):Sf)(e,t)}function Hf(e){return function(){this.removeAttribute(e)}}function jf(e){return function(){this.removeAttributeNS(e.space,e.local)}}function qf(e,t,i){var s,r=i+"",o;return function(){var n=this.getAttribute(e);return n===r?null:n===s?o:o=t(s=n,i)}}function Xf(e,t,i){var s,r=i+"",o;return function(){var n=this.getAttributeNS(e.space,e.local);return n===r?null:n===s?o:o=t(s=n,i)}}function Yf(e,t,i){var s,r,o;return function(){var n,l=i(this),a;return l==null?void this.removeAttribute(e):(n=this.getAttribute(e),a=l+"",n===a?null:n===s&&a===r?o:(r=a,o=t(s=n,l)))}}function Wf(e,t,i){var s,r,o;return function(){var n,l=i(this),a;return l==null?void this.removeAttributeNS(e.space,e.local):(n=this.getAttributeNS(e.space,e.local),a=l+"",n===a?null:n===s&&a===r?o:(r=a,o=t(s=n,l)))}}function Kf(e,t){var i=Yr(e),s=i==="transform"?Tf:hc;return this.attrTween(e,typeof t=="function"?(i.local?Wf:Yf)(i,s,Hn(this,"attr."+e,t)):t==null?(i.local?jf:Hf)(i):(i.local?Xf:qf)(i,s,t))}function Gf(e,t){return function(i){this.setAttribute(e,t.call(this,i))}}function Qf(e,t){return function(i){this.setAttributeNS(e.space,e.local,t.call(this,i))}}function Zf(e,t){var i,s;function r(){var o=t.apply(this,arguments);return o!==s&&(i=(s=o)&&Qf(e,o)),i}return r._value=t,r}function Jf(e,t){var i,s;function r(){var o=t.apply(this,arguments);return o!==s&&(i=(s=o)&&Gf(e,o)),i}return r._value=t,r}function tm(e,t){var i="attr."+e;if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;var s=Yr(e);return this.tween(i,(s.local?Zf:Jf)(s,t))}function em(e,t){return function(){Un(this,e).delay=+t.apply(this,arguments)}}function im(e,t){return t=+t,function(){Un(this,e).delay=t}}function sm(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?em:im)(t,e)):he(this.node(),t).delay}function rm(e,t){return function(){xe(this,e).duration=+t.apply(this,arguments)}}function om(e,t){return t=+t,function(){xe(this,e).duration=t}}function nm(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?rm:om)(t,e)):he(this.node(),t).duration}function am(e,t){if(typeof t!="function")throw new Error;return function(){xe(this,e).ease=t}}function lm(e){var t=this._id;return arguments.length?this.each(am(t,e)):he(this.node(),t).ease}function cm(e,t){return function(){var i=t.apply(this,arguments);if(typeof i!="function")throw new Error;xe(this,e).ease=i}}function hm(e){if(typeof e!="function")throw new Error;return this.each(cm(this._id,e))}function um(e){typeof e!="function"&&(e=jl(e));for(var t=this._groups,i=t.length,s=new Array(i),r=0;r<i;++r)for(var o=t[r],n=o.length,l=s[r]=[],a,c=0;c<n;++c)(a=o[c])&&e.call(a,a.__data__,c,o)&&l.push(a);return new De(s,this._parents,this._name,this._id)}function dm(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,i=e._groups,s=t.length,r=i.length,o=Math.min(s,r),n=new Array(s),l=0;l<o;++l)for(var a=t[l],c=i[l],u=a.length,d=n[l]=new Array(u),p,f=0;f<u;++f)(p=a[f]||c[f])&&(d[f]=p);for(;l<s;++l)n[l]=t[l];return new De(n,this._parents,this._name,this._id)}function pm(e){return(e+"").trim().split(/^|\s+/).every(function(t){var i=t.indexOf(".");return i>=0&&(t=t.slice(0,i)),!t||t==="start"})}function fm(e,t,i){var s,r,o=pm(t)?Un:xe;return function(){var n=o(this,e),l=n.on;l!==s&&(r=(s=l).copy()).on(t,i),n.on=r}}function mm(e,t){var i=this._id;return arguments.length<2?he(this.node(),i).on.on(e):this.each(fm(i,e,t))}function gm(e){return function(){var t=this.parentNode;for(var i in this.__transition)if(+i!==e)return;t&&t.removeChild(this)}}function bm(){return this.on("end.remove",gm(this._id))}function vm(e){var t=this._name,i=this._id;typeof e!="function"&&(e=Fn(e));for(var s=this._groups,r=s.length,o=new Array(r),n=0;n<r;++n)for(var l=s[n],a=l.length,c=o[n]=new Array(a),u,d,p=0;p<a;++p)(u=l[p])&&(d=e.call(u,u.__data__,p,l))&&("__data__"in u&&(d.__data__=u.__data__),c[p]=d,Gr(c[p],t,i,p,c,he(u,i)));return new De(o,this._parents,t,i)}function ym(e){var t=this._name,i=this._id;typeof e!="function"&&(e=Hl(e));for(var s=this._groups,r=s.length,o=[],n=[],l=0;l<r;++l)for(var a=s[l],c=a.length,u,d=0;d<c;++d)if(u=a[d]){for(var p=e.call(u,u.__data__,d,a),f,g=he(u,i),b=0,v=p.length;b<v;++b)(f=p[b])&&Gr(f,t,i,b,p,g);o.push(p),n.push(u)}return new De(o,n,t,i)}var wm=Wr.prototype.constructor;function _m(){return new wm(this._groups,this._parents)}function xm(e,t){var i,s,r;return function(){var o=Vi(this,e),n=(this.style.removeProperty(e),Vi(this,e));return o===n?null:o===i&&n===s?r:r=t(i=o,s=n)}}function uc(e){return function(){this.style.removeProperty(e)}}function km(e,t,i){var s,r=i+"",o;return function(){var n=Vi(this,e);return n===r?null:n===s?o:o=t(s=n,i)}}function Cm(e,t,i){var s,r,o;return function(){var n=Vi(this,e),l=i(this),a=l+"";return l==null&&(a=l=(this.style.removeProperty(e),Vi(this,e))),n===a?null:n===s&&a===r?o:(r=a,o=t(s=n,l))}}function $m(e,t){var i,s,r,o="style."+t,n="end."+o,l;return function(){var a=xe(this,e),c=a.on,u=a.value[o]==null?l||(l=uc(t)):void 0;(c!==i||r!==u)&&(s=(i=c).copy()).on(n,r=u),a.on=s}}function Sm(e,t,i){var s=(e+="")=="transform"?Ef:hc;return t==null?this.styleTween(e,xm(e,s)).on("end.style."+e,uc(e)):typeof t=="function"?this.styleTween(e,Cm(e,s,Hn(this,"style."+e,t))).each($m(this._id,e)):this.styleTween(e,km(e,s,t),i).on("end.style."+e,null)}function Am(e,t,i){return function(s){this.style.setProperty(e,t.call(this,s),i)}}function zm(e,t,i){var s,r;function o(){var n=t.apply(this,arguments);return n!==r&&(s=(r=n)&&Am(e,n,i)),s}return o._value=t,o}function Em(e,t,i){var s="style."+(e+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(t==null)return this.tween(s,null);if(typeof t!="function")throw new Error;return this.tween(s,zm(e,t,i??""))}function Tm(e){return function(){this.textContent=e}}function Mm(e){return function(){var t=e(this);this.textContent=t??""}}function Om(e){return this.tween("text",typeof e=="function"?Mm(Hn(this,"text",e)):Tm(e==null?"":e+""))}function Im(e){return function(t){this.textContent=e.call(this,t)}}function Lm(e){var t,i;function s(){var r=e.apply(this,arguments);return r!==i&&(t=(i=r)&&Im(r)),t}return s._value=e,s}function Dm(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Lm(e))}function Pm(){for(var e=this._name,t=this._id,i=dc(),s=this._groups,r=s.length,o=0;o<r;++o)for(var n=s[o],l=n.length,a,c=0;c<l;++c)if(a=n[c]){var u=he(a,t);Gr(a,e,i,c,n,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new De(s,this._parents,e,i)}function Rm(){var e,t,i=this,s=i._id,r=i.size();return new Promise(function(o,n){var l={value:n},a={value:function(){--r==0&&o()}};i.each(function(){var c=xe(this,s),u=c.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(a)),c.on=t}),r===0&&o()})}var Fm=0;function De(e,t,i,s){this._groups=e,this._parents=t,this._name=i,this._id=s}function dc(){return++Fm}var Ie=Wr.prototype;De.prototype={constructor:De,select:vm,selectAll:ym,selectChild:Ie.selectChild,selectChildren:Ie.selectChildren,filter:um,merge:dm,selection:_m,transition:Pm,call:Ie.call,nodes:Ie.nodes,node:Ie.node,size:Ie.size,empty:Ie.empty,each:Ie.each,on:mm,attr:Kf,attrTween:tm,style:Sm,styleTween:Em,text:Om,textTween:Dm,remove:bm,tween:Uf,delay:sm,duration:nm,ease:lm,easeVarying:hm,end:Rm,[Symbol.iterator]:Ie[Symbol.iterator]};function Nm(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Vm={time:null,delay:0,duration:250,ease:Nm};function Bm(e,t){for(var i;!(i=e.__transition)||!(i=i[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return i}function Um(e){var t,i;e instanceof De?(t=e._id,e=e._name):(t=dc(),(i=Vm).time=Bn(),e=e==null?null:e+"");for(var s=this._groups,r=s.length,o=0;o<r;++o)for(var n=s[o],l=n.length,a,c=0;c<l;++c)(a=n[c])&&Gr(a,e,t,c,n,i||Bm(a,t));return new De(s,this._parents,e,t)}Wr.prototype.interrupt=Nf;Wr.prototype.transition=Um;function ws(e,t,i){this.k=e,this.x=t,this.y=i}ws.prototype={constructor:ws,scale:function(e){return e===1?this:new ws(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new ws(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};ws.prototype;Rn(Cd());/**
* quadtree-js
* @version 1.2.4
* @license MIT
* @author Timo Hausmann
*/function Hm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pc={exports:{}};(function(e){(function(){function t(l,a){var c=l.x-a.x,u=l.y-a.y;return c*c+u*u}function i(l,a,c){var u=a.x,d=a.y,p=c.x-u,f=c.y-d;if(p!==0||f!==0){var g=((l.x-u)*p+(l.y-d)*f)/(p*p+f*f);g>1?(u=c.x,d=c.y):g>0&&(u+=p*g,d+=f*g)}return p=l.x-u,f=l.y-d,p*p+f*f}function s(l,a){for(var c=l[0],u=[c],d,p=1,f=l.length;p<f;p++)d=l[p],t(d,c)>a&&(u.push(d),c=d);return c!==d&&u.push(d),u}function r(l,a,c,u,d){for(var p=u,f,g=a+1;g<c;g++){var b=i(l[g],l[a],l[c]);b>p&&(f=g,p=b)}p>u&&(f-a>1&&r(l,a,f,u,d),d.push(l[f]),c-f>1&&r(l,f,c,u,d))}function o(l,a){var c=l.length-1,u=[l[0]];return r(l,0,c,a,u),u.push(l[c]),u}function n(l,a,c){if(l.length<=2)return l;var u=a!==void 0?a*a:1;return l=c?l:s(l,u),l=o(l,u),l}e.exports=n,e.exports.default=n})()})(pc);var jm=pc.exports;const qm=Hm(jm);var fc=Object.defineProperty,Xm=Object.defineProperties,Ym=Object.getOwnPropertyDescriptor,Wm=Object.getOwnPropertyDescriptors,Aa=Object.getOwnPropertySymbols,Km=Object.prototype.hasOwnProperty,Gm=Object.prototype.propertyIsEnumerable,Co=(e,t)=>{if(t=Symbol[e])return t;throw Error("Symbol."+e+" is not defined")},za=(e,t,i)=>t in e?fc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Fe=(e,t)=>{for(var i in t||(t={}))Km.call(t,i)&&za(e,i,t[i]);if(Aa)for(var i of Aa(t))Gm.call(t,i)&&za(e,i,t[i]);return e},Ks=(e,t)=>Xm(e,Wm(t)),h=(e,t,i,s)=>{for(var r=s>1?void 0:s?Ym(t,i):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(r=(s?n(t,i,r):n(r))||r);return s&&r&&fc(t,i,r),r},Qm=function(e,t){this[0]=e,this[1]=t},Zm=e=>{var t=e[Co("asyncIterator")],i=!1,s,r={};return t==null?(t=e[Co("iterator")](),s=o=>r[o]=n=>t[o](n)):(t=t.call(e),s=o=>r[o]=n=>{if(i){if(i=!1,o==="throw")throw n;return n}return i=!0,{done:!1,value:new Qm(new Promise(l=>{var a=t[o](n);if(!(a instanceof Object))throw TypeError("Object expected");l(a)}),1)}}),r[Co("iterator")]=()=>r,s("next"),"throw"in t?s("throw"):r.throw=o=>{throw o},"return"in t&&s("return"),r},hs=new WeakMap,us=new WeakMap,ds=new WeakMap,$o=new WeakSet,mr=new WeakMap,Ne=class{constructor(e,t){this.handleFormData=i=>{const s=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!s&&!n&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(l=>{i.formData.append(r,l.toString())}):i.formData.append(r,o.toString()))},this.handleFormSubmit=i=>{var s;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=hs.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),mr.set(this.host,[])},this.handleInteraction=i=>{const s=mr.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Fe({form:i=>{const s=i.form;if(s){const o=i.getRootNode().getElementById(s);if(o)return o}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var s;return(s=i.disabled)!=null?s:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),mr.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),mr.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,hs.has(this.form)?hs.get(this.form).add(this.host):hs.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),us.has(this.form)||(us.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ds.has(this.form)||(ds.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=hs.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),us.has(this.form)&&(this.form.reportValidity=us.get(this.form),us.delete(this.form)),ds.has(this.form)&&(this.form.checkValidity=ds.get(this.form),ds.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?$o.add(e):$o.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{t.hasAttribute(s)&&i.setAttribute(s,t.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=!!$o.has(t),s=!!t.required;t.toggleAttribute("data-required",s),t.toggleAttribute("data-optional",!s),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Qr=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Jm=Object.freeze(Ks(Fe({},Qr),{valid:!1,valueMissing:!0})),tg=Object.freeze(Ks(Fe({},Qr),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cr=globalThis,jn=Cr.ShadowRoot&&(Cr.ShadyCSS===void 0||Cr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qn=Symbol(),Ea=new WeakMap;let mc=class{constructor(t,i,s){if(this._$cssResult$=!0,s!==qn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(jn&&t===void 0){const s=i!==void 0&&i.length===1;s&&(t=Ea.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ea.set(i,t))}return t}toString(){return this.cssText}};const eg=e=>new mc(typeof e=="string"?e:e+"",void 0,qn),L=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new mc(i,e,qn)},ig=(e,t)=>{if(jn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const s=document.createElement("style"),r=Cr.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)}},Ta=jn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return eg(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sg,defineProperty:rg,getOwnPropertyDescriptor:og,getOwnPropertyNames:ng,getOwnPropertySymbols:ag,getPrototypeOf:lg}=Object,We=globalThis,Ma=We.trustedTypes,cg=Ma?Ma.emptyScript:"",So=We.reactiveElementPolyfillSupport,_s=(e,t)=>e,Ui={toAttribute(e,t){switch(t){case Boolean:e=e?cg:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Xn=(e,t)=>!sg(e,t),Oa={attribute:!0,type:String,converter:Ui,reflect:!1,hasChanged:Xn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),We.litPropertyMetadata??(We.litPropertyMetadata=new WeakMap);class Ii extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Oa){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,i);r!==void 0&&rg(this.prototype,t,r)}}static getPropertyDescriptor(t,i,s){const{get:r,set:o}=og(this.prototype,t)??{get(){return this[i]},set(n){this[i]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const l=r==null?void 0:r.call(this);o.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Oa}static _$Ei(){if(this.hasOwnProperty(_s("elementProperties")))return;const t=lg(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_s("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_s("properties"))){const i=this.properties,s=[...ng(i),...ag(i)];for(const r of s)this.createProperty(r,i[r])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[s,r]of i)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const r=this._$Eu(i,s);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)i.unshift(Ta(r))}else t!==void 0&&i.push(Ta(t));return i}static _$Eu(t,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$E_)==null||i.delete(t)}_$ES(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ig(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(i=>{var s;return(s=i.hostConnected)==null?void 0:s.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(i=>{var s;return(s=i.hostDisconnected)==null?void 0:s.call(i)})}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i){var o;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:Ui).toAttribute(i,s.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,i){var o;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=s.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:Ui;this._$Em=r,this[r]=l.fromAttribute(i,n.type),this._$Em=null}}requestUpdate(t,i,s,r=!1,o){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??Xn)(r?o:this[t],i))return;this.C(t,i,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,i,s){this._$AL.has(t)||this._$AL.set(t,i),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(s=this._$E_)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(i)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$E_)==null||i.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EO(i,this[i]))),this._$ET()}updated(t){}firstUpdated(t){}}Ii.elementStyles=[],Ii.shadowRootOptions={mode:"open"},Ii[_s("elementProperties")]=new Map,Ii[_s("finalized")]=new Map,So==null||So({ReactiveElement:Ii}),(We.reactiveElementVersions??(We.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xs=globalThis,Pr=xs.trustedTypes,Ia=Pr?Pr.createPolicy("lit-html",{createHTML:e=>e}):void 0,gc="$lit$",Xe=`lit$${(Math.random()+"").slice(9)}$`,bc="?"+Xe,hg=`<${bc}>`,ki=document,Fs=()=>ki.createComment(""),Ns=e=>e===null||typeof e!="object"&&typeof e!="function",vc=Array.isArray,ug=e=>vc(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ao=`[ 	
\f\r]`,ps=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,La=/-->/g,Da=/>/g,pi=RegExp(`>|${Ao}(?:([^\\s"'>=/]+)(${Ao}*=${Ao}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pa=/'/g,Ra=/"/g,yc=/^(?:script|style|textarea|title)$/i,dg=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),$=dg(1),Yt=Symbol.for("lit-noChange"),dt=Symbol.for("lit-nothing"),Fa=new WeakMap,bi=ki.createTreeWalker(ki,129);function wc(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ia!==void 0?Ia.createHTML(t):t}const pg=(e,t)=>{const i=e.length-1,s=[];let r,o=t===2?"<svg>":"",n=ps;for(let l=0;l<i;l++){const a=e[l];let c,u,d=-1,p=0;for(;p<a.length&&(n.lastIndex=p,u=n.exec(a),u!==null);)p=n.lastIndex,n===ps?u[1]==="!--"?n=La:u[1]!==void 0?n=Da:u[2]!==void 0?(yc.test(u[2])&&(r=RegExp("</"+u[2],"g")),n=pi):u[3]!==void 0&&(n=pi):n===pi?u[0]===">"?(n=r??ps,d=-1):u[1]===void 0?d=-2:(d=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?pi:u[3]==='"'?Ra:Pa):n===Ra||n===Pa?n=pi:n===La||n===Da?n=ps:(n=pi,r=void 0);const f=n===pi&&e[l+1].startsWith("/>")?" ":"";o+=n===ps?a+hg:d>=0?(s.push(c),a.slice(0,d)+gc+a.slice(d)+Xe+f):a+Xe+(d===-2?l:f)}return[wc(e,o+(e[i]||"<?>")+(t===2?"</svg>":"")),s]};class Vs{constructor({strings:t,_$litType$:i},s){let r;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[c,u]=pg(t,i);if(this.el=Vs.createElement(c,s),bi.currentNode=this.el.content,i===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=bi.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(gc)){const p=u[n++],f=r.getAttribute(d).split(Xe),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:g[2],strings:f,ctor:g[1]==="."?mg:g[1]==="?"?gg:g[1]==="@"?bg:Zr}),r.removeAttribute(d)}else d.startsWith(Xe)&&(a.push({type:6,index:o}),r.removeAttribute(d));if(yc.test(r.tagName)){const d=r.textContent.split(Xe),p=d.length-1;if(p>0){r.textContent=Pr?Pr.emptyScript:"";for(let f=0;f<p;f++)r.append(d[f],Fs()),bi.nextNode(),a.push({type:2,index:++o});r.append(d[p],Fs())}}}else if(r.nodeType===8)if(r.data===bc)a.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(Xe,d+1))!==-1;)a.push({type:7,index:o}),d+=Xe.length-1}o++}}static createElement(t,i){const s=ki.createElement("template");return s.innerHTML=t,s}}function Hi(e,t,i=e,s){var n,l;if(t===Yt)return t;let r=s!==void 0?(n=i._$Co)==null?void 0:n[s]:i._$Cl;const o=Ns(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),o===void 0?r=void 0:(r=new o(e),r._$AT(e,i,s)),s!==void 0?(i._$Co??(i._$Co=[]))[s]=r:i._$Cl=r),r!==void 0&&(t=Hi(e,r._$AS(e,t.values),r,s)),t}class fg{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??ki).importNode(i,!0);bi.currentNode=r;let o=bi.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new Gs(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new vg(o,this,t)),this._$AV.push(c),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=bi.nextNode(),n++)}return bi.currentNode=ki,r}p(t){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class Gs{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,s,r){this.type=2,this._$AH=dt,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Hi(this,t,i),Ns(t)?t===dt||t==null||t===""?(this._$AH!==dt&&this._$AR(),this._$AH=dt):t!==this._$AH&&t!==Yt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ug(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==dt&&Ns(this._$AH)?this._$AA.nextSibling.data=t:this.$(ki.createTextNode(t)),this._$AH=t}g(t){var o;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Vs.createElement(wc(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(i);else{const n=new fg(r,this),l=n.u(this.options);n.p(i),this.$(l),this._$AH=n}}_$AC(t){let i=Fa.get(t.strings);return i===void 0&&Fa.set(t.strings,i=new Vs(t)),i}T(t){vc(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const o of t)r===i.length?i.push(s=new Gs(this.k(Fs()),this.k(Fs()),this,this.options)):s=i[r],s._$AI(o),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Zr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,r,o){this.type=1,this._$AH=dt,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=dt}_$AI(t,i=this,s,r){const o=this.strings;let n=!1;if(o===void 0)t=Hi(this,t,i,0),n=!Ns(t)||t!==this._$AH&&t!==Yt,n&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=Hi(this,l[s+a],i,a),c===Yt&&(c=this._$AH[a]),n||(n=!Ns(c)||c!==this._$AH[a]),c===dt?t=dt:t!==dt&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!r&&this.O(t)}O(t){t===dt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class mg extends Zr{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===dt?void 0:t}}let gg=class extends Zr{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==dt)}};class bg extends Zr{constructor(t,i,s,r,o){super(t,i,s,r,o),this.type=5}_$AI(t,i=this){if((t=Hi(this,t,i,0)??dt)===Yt)return;const s=this._$AH,r=t===dt&&s!==dt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==dt&&(s===dt||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class vg{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Hi(this,t)}}const zo=xs.litHtmlPolyfillSupport;zo==null||zo(Vs,Gs),(xs.litHtmlVersions??(xs.litHtmlVersions=[])).push("3.1.0");const yg=(e,t,i)=>{const s=(i==null?void 0:i.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const o=(i==null?void 0:i.renderBefore)??null;s._$litPart$=r=new Gs(t.insertBefore(Fs(),o),o,void 0,i??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ks=class extends Ii{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=yg(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Yt}};var ll;ks._$litElement$=!0,ks.finalized=!0,(ll=globalThis.litElementHydrateSupport)==null||ll.call(globalThis,{LitElement:ks});const Eo=globalThis.litElementPolyfillSupport;Eo==null||Eo({LitElement:ks});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");var D=L`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,wg=L`
  ${D}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _g={attribute:!0,type:String,converter:Ui,reflect:!1,hasChanged:Xn},xg=(e=_g,t,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(i.name,e),s==="accessor"){const{name:n}=i;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,e)},init(l){return l!==void 0&&this.C(n,void 0,e),l}}}if(s==="setter"){const{name:n}=i;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,e)}}throw Error("Unsupported decorator location: "+s)};function m(e){return(t,i)=>typeof i=="object"?xg(e,t,i):((s,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(e){return m({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _c(e){return(t,i)=>{const s=typeof t=="function"?t:t[i];Object.assign(s,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const an=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(e,t){return(i,s,r)=>{const o=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(e))??null};if(t){const{get:n,set:l}=typeof s=="object"?i:r??(()=>{const a=Symbol();return{get(){return this[a]},set(c){this[a]=c}}})();return an(i,s,{get(){let a=n.call(this);return a===void 0&&(a=o(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return an(i,s,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function kg(e){return(t,i)=>an(t,i,{async get(){var s;return await this.updateComplete,((s=this.renderRoot)==null?void 0:s.querySelector(e))??null}})}var O=class extends ks{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const i=new CustomEvent(e,Fe({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const s=customElements.get(e);if(!s){customElements.define(e,class extends t{},i);return}let r=" (unknown version)",o=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in s&&s.version&&(o=" v"+s.version),!(r&&o&&r===o)&&console.warn(`Attempted to register <${e}>${r}, but <${e}>${o} has already been registered.`)}};O.version="2.12.0";O.dependencies={};h([m()],O.prototype,"dir",2);h([m()],O.prototype,"lang",2);var Yn=class extends O{render(){return $` <slot></slot> `}};Yn.styles=wg;Yn.define("sl-visually-hidden");var Cg=L`
  ${D}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,$g=L`
  ${D}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;const Qe=Math.min,qt=Math.max,Rr=Math.round,gr=Math.floor,Ze=e=>({x:e,y:e}),Sg={left:"right",right:"left",bottom:"top",top:"bottom"},Ag={start:"end",end:"start"};function ln(e,t,i){return qt(e,Qe(t,i))}function Wi(e,t){return typeof e=="function"?e(t):e}function Je(e){return e.split("-")[0]}function Ki(e){return e.split("-")[1]}function xc(e){return e==="x"?"y":"x"}function Wn(e){return e==="y"?"height":"width"}function Qs(e){return["top","bottom"].includes(Je(e))?"y":"x"}function Kn(e){return xc(Qs(e))}function zg(e,t,i){i===void 0&&(i=!1);const s=Ki(e),r=Kn(e),o=Wn(r);let n=r==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(n=Fr(n)),[n,Fr(n)]}function Eg(e){const t=Fr(e);return[cn(e),t,cn(t)]}function cn(e){return e.replace(/start|end/g,t=>Ag[t])}function Tg(e,t,i){const s=["left","right"],r=["right","left"],o=["top","bottom"],n=["bottom","top"];switch(e){case"top":case"bottom":return i?t?r:s:t?s:r;case"left":case"right":return t?o:n;default:return[]}}function Mg(e,t,i,s){const r=Ki(e);let o=Tg(Je(e),i==="start",s);return r&&(o=o.map(n=>n+"-"+r),t&&(o=o.concat(o.map(cn)))),o}function Fr(e){return e.replace(/left|right|bottom|top/g,t=>Sg[t])}function Og(e){return{top:0,right:0,bottom:0,left:0,...e}}function kc(e){return typeof e!="number"?Og(e):{top:e,right:e,bottom:e,left:e}}function Nr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Na(e,t,i){let{reference:s,floating:r}=e;const o=Qs(t),n=Kn(t),l=Wn(n),a=Je(t),c=o==="y",u=s.x+s.width/2-r.width/2,d=s.y+s.height/2-r.height/2,p=s[l]/2-r[l]/2;let f;switch(a){case"top":f={x:u,y:s.y-r.height};break;case"bottom":f={x:u,y:s.y+s.height};break;case"right":f={x:s.x+s.width,y:d};break;case"left":f={x:s.x-r.width,y:d};break;default:f={x:s.x,y:s.y}}switch(Ki(t)){case"start":f[n]-=p*(i&&c?-1:1);break;case"end":f[n]+=p*(i&&c?-1:1);break}return f}const Ig=async(e,t,i)=>{const{placement:s="bottom",strategy:r="absolute",middleware:o=[],platform:n}=i,l=o.filter(Boolean),a=await(n.isRTL==null?void 0:n.isRTL(t));let c=await n.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=Na(c,s,a),p=s,f={},g=0;for(let b=0;b<l.length;b++){const{name:v,fn:y}=l[b],{x:_,y:k,data:x,reset:w}=await y({x:u,y:d,initialPlacement:s,placement:p,strategy:r,middlewareData:f,rects:c,platform:n,elements:{reference:e,floating:t}});if(u=_??u,d=k??d,f={...f,[v]:{...f[v],...x}},w&&g<=50){g++,typeof w=="object"&&(w.placement&&(p=w.placement),w.rects&&(c=w.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:r}):w.rects),{x:u,y:d}=Na(c,p,a)),b=-1;continue}}return{x:u,y:d,placement:p,strategy:r,middlewareData:f}};async function Gn(e,t){var i;t===void 0&&(t={});const{x:s,y:r,platform:o,rects:n,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=Wi(t,e),g=kc(f),v=l[p?d==="floating"?"reference":"floating":d],y=Nr(await o.getClippingRect({element:(i=await(o.isElement==null?void 0:o.isElement(v)))==null||i?v:v.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),_=d==="floating"?{...n.floating,x:s,y:r}:n.reference,k=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),x=await(o.isElement==null?void 0:o.isElement(k))?await(o.getScale==null?void 0:o.getScale(k))||{x:1,y:1}:{x:1,y:1},w=Nr(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:_,offsetParent:k,strategy:a}):_);return{top:(y.top-w.top+g.top)/x.y,bottom:(w.bottom-y.bottom+g.bottom)/x.y,left:(y.left-w.left+g.left)/x.x,right:(w.right-y.right+g.right)/x.x}}const Lg=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:s,placement:r,rects:o,platform:n,elements:l,middlewareData:a}=t,{element:c,padding:u=0}=Wi(e,t)||{};if(c==null)return{};const d=kc(u),p={x:i,y:s},f=Kn(r),g=Wn(f),b=await n.getDimensions(c),v=f==="y",y=v?"top":"left",_=v?"bottom":"right",k=v?"clientHeight":"clientWidth",x=o.reference[g]+o.reference[f]-p[f]-o.floating[g],w=p[f]-o.reference[f],C=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let T=C?C[k]:0;(!T||!await(n.isElement==null?void 0:n.isElement(C)))&&(T=l.floating[k]||o.floating[g]);const M=x/2-w/2,A=T/2-b[g]/2-1,z=Qe(d[y],A),U=Qe(d[_],A),N=z,Z=T-b[g]-U,V=T/2-b[g]/2+M,q=ln(N,V,Z),Q=!a.arrow&&Ki(r)!=null&&V!=q&&o.reference[g]/2-(V<N?z:U)-b[g]/2<0,X=Q?V<N?V-N:V-Z:0;return{[f]:p[f]+X,data:{[f]:q,centerOffset:V-q-X,...Q&&{alignmentOffset:X}},reset:Q}}}),Dg=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,s;const{placement:r,middlewareData:o,rects:n,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,...v}=Wi(e,t);if((i=o.arrow)!=null&&i.alignmentOffset)return{};const y=Je(r),_=Je(l)===l,k=await(a.isRTL==null?void 0:a.isRTL(c.floating)),x=p||(_||!b?[Fr(l)]:Eg(l));!p&&g!=="none"&&x.push(...Mg(l,b,g,k));const w=[l,...x],C=await Gn(t,v),T=[];let M=((s=o.flip)==null?void 0:s.overflows)||[];if(u&&T.push(C[y]),d){const N=zg(r,n,k);T.push(C[N[0]],C[N[1]])}if(M=[...M,{placement:r,overflows:T}],!T.every(N=>N<=0)){var A,z;const N=(((A=o.flip)==null?void 0:A.index)||0)+1,Z=w[N];if(Z)return{data:{index:N,overflows:M},reset:{placement:Z}};let V=(z=M.filter(q=>q.overflows[0]<=0).sort((q,Q)=>q.overflows[1]-Q.overflows[1])[0])==null?void 0:z.placement;if(!V)switch(f){case"bestFit":{var U;const q=(U=M.map(Q=>[Q.placement,Q.overflows.filter(X=>X>0).reduce((X,lt)=>X+lt,0)]).sort((Q,X)=>Q[1]-X[1])[0])==null?void 0:U[0];q&&(V=q);break}case"initialPlacement":V=l;break}if(r!==V)return{reset:{placement:V}}}return{}}}};async function Pg(e,t){const{placement:i,platform:s,elements:r}=e,o=await(s.isRTL==null?void 0:s.isRTL(r.floating)),n=Je(i),l=Ki(i),a=Qs(i)==="y",c=["left","top"].includes(n)?-1:1,u=o&&a?-1:1,d=Wi(t,e);let{mainAxis:p,crossAxis:f,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof g=="number"&&(f=l==="end"?g*-1:g),a?{x:f*u,y:p*c}:{x:p*c,y:f*u}}const Rg=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,s;const{x:r,y:o,placement:n,middlewareData:l}=t,a=await Pg(t,e);return n===((i=l.offset)==null?void 0:i.placement)&&(s=l.arrow)!=null&&s.alignmentOffset?{}:{x:r+a.x,y:o+a.y,data:{...a,placement:n}}}}},Fg=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:s,placement:r}=t,{mainAxis:o=!0,crossAxis:n=!1,limiter:l={fn:v=>{let{x:y,y:_}=v;return{x:y,y:_}}},...a}=Wi(e,t),c={x:i,y:s},u=await Gn(t,a),d=Qs(Je(r)),p=xc(d);let f=c[p],g=c[d];if(o){const v=p==="y"?"top":"left",y=p==="y"?"bottom":"right",_=f+u[v],k=f-u[y];f=ln(_,f,k)}if(n){const v=d==="y"?"top":"left",y=d==="y"?"bottom":"right",_=g+u[v],k=g-u[y];g=ln(_,g,k)}const b=l.fn({...t,[p]:f,[d]:g});return{...b,data:{x:b.x-i,y:b.y-s}}}}},Va=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:i,rects:s,platform:r,elements:o}=t,{apply:n=()=>{},...l}=Wi(e,t),a=await Gn(t,l),c=Je(i),u=Ki(i),d=Qs(i)==="y",{width:p,height:f}=s.floating;let g,b;c==="top"||c==="bottom"?(g=c,b=u===(await(r.isRTL==null?void 0:r.isRTL(o.floating))?"start":"end")?"left":"right"):(b=c,g=u==="end"?"top":"bottom");const v=f-a[g],y=p-a[b],_=!t.middlewareData.shift;let k=v,x=y;if(d){const C=p-a.left-a.right;x=u||_?Qe(y,C):C}else{const C=f-a.top-a.bottom;k=u||_?Qe(v,C):C}if(_&&!u){const C=qt(a.left,0),T=qt(a.right,0),M=qt(a.top,0),A=qt(a.bottom,0);d?x=p-2*(C!==0||T!==0?C+T:qt(a.left,a.right)):k=f-2*(M!==0||A!==0?M+A:qt(a.top,a.bottom))}await n({...t,availableWidth:x,availableHeight:k});const w=await r.getDimensions(o.floating);return p!==w.width||f!==w.height?{reset:{rects:!0}}:{}}}};function ti(e){return Cc(e)?(e.nodeName||"").toLowerCase():"#document"}function Kt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ve(e){var t;return(t=(Cc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Cc(e){return e instanceof Node||e instanceof Kt(e).Node}function Pe(e){return e instanceof Element||e instanceof Kt(e).Element}function we(e){return e instanceof HTMLElement||e instanceof Kt(e).HTMLElement}function Ba(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Kt(e).ShadowRoot}function Zs(e){const{overflow:t,overflowX:i,overflowY:s,display:r}=se(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+i)&&!["inline","contents"].includes(r)}function Ng(e){return["table","td","th"].includes(ti(e))}function Qn(e){const t=Zn(),i=se(e);return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(i.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(i.contain||"").includes(s))}function Vg(e){let t=ji(e);for(;we(t)&&!Jr(t);){if(Qn(t))return t;t=ji(t)}return null}function Zn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Jr(e){return["html","body","#document"].includes(ti(e))}function se(e){return Kt(e).getComputedStyle(e)}function to(e){return Pe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ji(e){if(ti(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ba(e)&&e.host||Ve(e);return Ba(t)?t.host:t}function $c(e){const t=ji(e);return Jr(t)?e.ownerDocument?e.ownerDocument.body:e.body:we(t)&&Zs(t)?t:$c(t)}function Bs(e,t,i){var s;t===void 0&&(t=[]),i===void 0&&(i=!0);const r=$c(e),o=r===((s=e.ownerDocument)==null?void 0:s.body),n=Kt(r);return o?t.concat(n,n.visualViewport||[],Zs(r)?r:[],n.frameElement&&i?Bs(n.frameElement):[]):t.concat(r,Bs(r,[],i))}function Sc(e){const t=se(e);let i=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const r=we(e),o=r?e.offsetWidth:i,n=r?e.offsetHeight:s,l=Rr(i)!==o||Rr(s)!==n;return l&&(i=o,s=n),{width:i,height:s,$:l}}function Jn(e){return Pe(e)?e:e.contextElement}function Fi(e){const t=Jn(e);if(!we(t))return Ze(1);const i=t.getBoundingClientRect(),{width:s,height:r,$:o}=Sc(t);let n=(o?Rr(i.width):i.width)/s,l=(o?Rr(i.height):i.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!l||!Number.isFinite(l))&&(l=1),{x:n,y:l}}const Bg=Ze(0);function Ac(e){const t=Kt(e);return!Zn()||!t.visualViewport?Bg:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ug(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==Kt(e)?!1:t}function Ci(e,t,i,s){t===void 0&&(t=!1),i===void 0&&(i=!1);const r=e.getBoundingClientRect(),o=Jn(e);let n=Ze(1);t&&(s?Pe(s)&&(n=Fi(s)):n=Fi(e));const l=Ug(o,i,s)?Ac(o):Ze(0);let a=(r.left+l.x)/n.x,c=(r.top+l.y)/n.y,u=r.width/n.x,d=r.height/n.y;if(o){const p=Kt(o),f=s&&Pe(s)?Kt(s):s;let g=p.frameElement;for(;g&&s&&f!==p;){const b=Fi(g),v=g.getBoundingClientRect(),y=se(g),_=v.left+(g.clientLeft+parseFloat(y.paddingLeft))*b.x,k=v.top+(g.clientTop+parseFloat(y.paddingTop))*b.y;a*=b.x,c*=b.y,u*=b.x,d*=b.y,a+=_,c+=k,g=Kt(g).frameElement}}return Nr({width:u,height:d,x:a,y:c})}function Hg(e){let{rect:t,offsetParent:i,strategy:s}=e;const r=we(i),o=Ve(i);if(i===o)return t;let n={scrollLeft:0,scrollTop:0},l=Ze(1);const a=Ze(0);if((r||!r&&s!=="fixed")&&((ti(i)!=="body"||Zs(o))&&(n=to(i)),we(i))){const c=Ci(i);l=Fi(i),a.x=c.x+i.clientLeft,a.y=c.y+i.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-n.scrollLeft*l.x+a.x,y:t.y*l.y-n.scrollTop*l.y+a.y}}function jg(e){return Array.from(e.getClientRects())}function zc(e){return Ci(Ve(e)).left+to(e).scrollLeft}function qg(e){const t=Ve(e),i=to(e),s=e.ownerDocument.body,r=qt(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),o=qt(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let n=-i.scrollLeft+zc(e);const l=-i.scrollTop;return se(s).direction==="rtl"&&(n+=qt(t.clientWidth,s.clientWidth)-r),{width:r,height:o,x:n,y:l}}function Xg(e,t){const i=Kt(e),s=Ve(e),r=i.visualViewport;let o=s.clientWidth,n=s.clientHeight,l=0,a=0;if(r){o=r.width,n=r.height;const c=Zn();(!c||c&&t==="fixed")&&(l=r.offsetLeft,a=r.offsetTop)}return{width:o,height:n,x:l,y:a}}function Yg(e,t){const i=Ci(e,!0,t==="fixed"),s=i.top+e.clientTop,r=i.left+e.clientLeft,o=we(e)?Fi(e):Ze(1),n=e.clientWidth*o.x,l=e.clientHeight*o.y,a=r*o.x,c=s*o.y;return{width:n,height:l,x:a,y:c}}function Ua(e,t,i){let s;if(t==="viewport")s=Xg(e,i);else if(t==="document")s=qg(Ve(e));else if(Pe(t))s=Yg(t,i);else{const r=Ac(e);s={...t,x:t.x-r.x,y:t.y-r.y}}return Nr(s)}function Ec(e,t){const i=ji(e);return i===t||!Pe(i)||Jr(i)?!1:se(i).position==="fixed"||Ec(i,t)}function Wg(e,t){const i=t.get(e);if(i)return i;let s=Bs(e,[],!1).filter(l=>Pe(l)&&ti(l)!=="body"),r=null;const o=se(e).position==="fixed";let n=o?ji(e):e;for(;Pe(n)&&!Jr(n);){const l=se(n),a=Qn(n);!a&&l.position==="fixed"&&(r=null),(o?!a&&!r:!a&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Zs(n)&&!a&&Ec(e,n))?s=s.filter(u=>u!==n):r=l,n=ji(n)}return t.set(e,s),s}function Kg(e){let{element:t,boundary:i,rootBoundary:s,strategy:r}=e;const n=[...i==="clippingAncestors"?Wg(t,this._c):[].concat(i),s],l=n[0],a=n.reduce((c,u)=>{const d=Ua(t,u,r);return c.top=qt(d.top,c.top),c.right=Qe(d.right,c.right),c.bottom=Qe(d.bottom,c.bottom),c.left=qt(d.left,c.left),c},Ua(t,l,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Gg(e){return Sc(e)}function Qg(e,t,i){const s=we(t),r=Ve(t),o=i==="fixed",n=Ci(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const a=Ze(0);if(s||!s&&!o)if((ti(t)!=="body"||Zs(r))&&(l=to(t)),s){const c=Ci(t,!0,o,t);a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}else r&&(a.x=zc(r));return{x:n.left+l.scrollLeft-a.x,y:n.top+l.scrollTop-a.y,width:n.width,height:n.height}}function Ha(e,t){return!we(e)||se(e).position==="fixed"?null:t?t(e):e.offsetParent}function Tc(e,t){const i=Kt(e);if(!we(e))return i;let s=Ha(e,t);for(;s&&Ng(s)&&se(s).position==="static";)s=Ha(s,t);return s&&(ti(s)==="html"||ti(s)==="body"&&se(s).position==="static"&&!Qn(s))?i:s||Vg(e)||i}const Zg=async function(e){let{reference:t,floating:i,strategy:s}=e;const r=this.getOffsetParent||Tc,o=this.getDimensions;return{reference:Qg(t,await r(i),s),floating:{x:0,y:0,...await o(i)}}};function Jg(e){return se(e).direction==="rtl"}const $r={convertOffsetParentRelativeRectToViewportRelativeRect:Hg,getDocumentElement:Ve,getClippingRect:Kg,getOffsetParent:Tc,getElementRects:Zg,getClientRects:jg,getDimensions:Gg,getScale:Fi,isElement:Pe,isRTL:Jg};function t0(e,t){let i=null,s;const r=Ve(e);function o(){clearTimeout(s),i&&i.disconnect(),i=null}function n(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:c,top:u,width:d,height:p}=e.getBoundingClientRect();if(l||t(),!d||!p)return;const f=gr(u),g=gr(r.clientWidth-(c+d)),b=gr(r.clientHeight-(u+p)),v=gr(c),_={rootMargin:-f+"px "+-g+"px "+-b+"px "+-v+"px",threshold:qt(0,Qe(1,a))||1};let k=!0;function x(w){const C=w[0].intersectionRatio;if(C!==a){if(!k)return n();C?n(!1,C):s=setTimeout(()=>{n(!1,1e-7)},100)}k=!1}try{i=new IntersectionObserver(x,{..._,root:r.ownerDocument})}catch{i=new IntersectionObserver(x,_)}i.observe(e)}return n(!0),o}function e0(e,t,i,s){s===void 0&&(s={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=s,c=Jn(e),u=r||o?[...c?Bs(c):[],...Bs(t)]:[];u.forEach(y=>{r&&y.addEventListener("scroll",i,{passive:!0}),o&&y.addEventListener("resize",i)});const d=c&&l?t0(c,i):null;let p=-1,f=null;n&&(f=new ResizeObserver(y=>{let[_]=y;_&&_.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{f&&f.observe(t)})),i()}),c&&!a&&f.observe(c),f.observe(t));let g,b=a?Ci(e):null;a&&v();function v(){const y=Ci(e);b&&(y.x!==b.x||y.y!==b.y||y.width!==b.width||y.height!==b.height)&&i(),b=y,g=requestAnimationFrame(v)}return i(),()=>{u.forEach(y=>{r&&y.removeEventListener("scroll",i),o&&y.removeEventListener("resize",i)}),d&&d(),f&&f.disconnect(),f=null,a&&cancelAnimationFrame(g)}}const i0=(e,t,i)=>{const s=new Map,r={platform:$r,...i},o={...r.platform,_c:s};return Ig(e,t,{...r,platform:o})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Js=e=>(...t)=>({_$litDirective$:e,values:t});let tr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=Js(class extends tr{constructor(e){var t;if(super(e),e.type!==be.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,r;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((s=this.st)!=null&&s.has(o))&&this.it.add(o);return this.render(t)}const i=e.element.classList;for(const o of this.it)o in t||(i.remove(o),this.it.delete(o));for(const o in t){const n=!!t[o];n===this.it.has(o)||(r=this.st)!=null&&r.has(o)||(n?(i.add(o),this.it.add(o)):(i.remove(o),this.it.delete(o)))}return Yt}});function s0(e){return r0(e)}function To(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function r0(e){for(let t=e;t;t=To(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=To(e);t;t=To(t)){if(!(t instanceof Element))continue;const i=getComputedStyle(t);if(i.display!=="contents"&&(i.position!=="static"||i.filter!=="none"||t.tagName==="BODY"))return t}return null}function o0(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var nt=class extends O{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||o0(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=e0(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Rg({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Va({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Dg({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Fg({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Va({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Lg({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?i=>$r.getOffsetParent(i,s0):$r.getOffsetParent;i0(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ks(Fe({},$r),{getOffsetParent:t})}).then(({x:i,y:s,middlewareData:r,placement:o})=>{const n=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const a=r.arrow.x,c=r.arrow.y;let u="",d="",p="",f="";if(this.arrowPlacement==="start"){const g=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=n?g:"",f=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=n?"":g,f=n?g:"",p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof a=="number"?`${a}px`:"",u=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:u,right:d,bottom:p,left:f,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return $`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${R({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};nt.styles=$g;h([E(".popup")],nt.prototype,"popup",2);h([E(".popup__arrow")],nt.prototype,"arrowEl",2);h([m()],nt.prototype,"anchor",2);h([m({type:Boolean,reflect:!0})],nt.prototype,"active",2);h([m({reflect:!0})],nt.prototype,"placement",2);h([m({reflect:!0})],nt.prototype,"strategy",2);h([m({type:Number})],nt.prototype,"distance",2);h([m({type:Number})],nt.prototype,"skidding",2);h([m({type:Boolean})],nt.prototype,"arrow",2);h([m({attribute:"arrow-placement"})],nt.prototype,"arrowPlacement",2);h([m({attribute:"arrow-padding",type:Number})],nt.prototype,"arrowPadding",2);h([m({type:Boolean})],nt.prototype,"flip",2);h([m({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],nt.prototype,"flipFallbackPlacements",2);h([m({attribute:"flip-fallback-strategy"})],nt.prototype,"flipFallbackStrategy",2);h([m({type:Object})],nt.prototype,"flipBoundary",2);h([m({attribute:"flip-padding",type:Number})],nt.prototype,"flipPadding",2);h([m({type:Boolean})],nt.prototype,"shift",2);h([m({type:Object})],nt.prototype,"shiftBoundary",2);h([m({attribute:"shift-padding",type:Number})],nt.prototype,"shiftPadding",2);h([m({attribute:"auto-size"})],nt.prototype,"autoSize",2);h([m()],nt.prototype,"sync",2);h([m({type:Object})],nt.prototype,"autoSizeBoundary",2);h([m({attribute:"auto-size-padding",type:Number})],nt.prototype,"autoSizePadding",2);var Mc=new Map,n0=new WeakMap;function a0(e){return e??{keyframes:[],options:{duration:0}}}function ja(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function st(e,t){Mc.set(e,a0(t))}function pt(e,t,i){const s=n0.get(e);if(s!=null&&s[t])return ja(s[t],i.dir);const r=Mc.get(t);return r?ja(r,i.dir):{keyframes:[],options:{duration:0}}}function Rt(e,t){return new Promise(i=>{function s(r){r.target===e&&(e.removeEventListener(t,s),i())}e.addEventListener(t,s)})}function bt(e,t,i){return new Promise(s=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,Ks(Fe({},i),{duration:ta()?0:i.duration}));r.addEventListener("cancel",s,{once:!0}),r.addEventListener("finish",s,{once:!0})})}function qa(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function ta(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function xt(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{const s=requestAnimationFrame(i);t.addEventListener("cancel",()=>s,{once:!0}),t.addEventListener("finish",()=>s,{once:!0}),t.cancel()})))}function Vr(e,t){return e.map(i=>Ks(Fe({},i),{height:i.height==="auto"?`${t}px`:i.height}))}const hn=new Set,l0=new MutationObserver(Dc),Pi=new Map;let Oc=document.documentElement.dir||"ltr",Ic=document.documentElement.lang||navigator.language,gi;l0.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Lc(...e){e.map(t=>{const i=t.$code.toLowerCase();Pi.has(i)?Pi.set(i,Object.assign(Object.assign({},Pi.get(i)),t)):Pi.set(i,t),gi||(gi=t)}),Dc()}function Dc(){Oc=document.documentElement.dir||"ltr",Ic=document.documentElement.lang||navigator.language,[...hn.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let c0=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){hn.add(this.host)}hostDisconnected(){hn.delete(this.host)}dir(){return`${this.host.dir||Oc}`.toLowerCase()}lang(){return`${this.host.lang||Ic}`.toLowerCase()}getTranslationData(t){var i,s;const r=new Intl.Locale(t.replace(/_/g,"-")),o=r==null?void 0:r.language.toLowerCase(),n=(s=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&s!==void 0?s:"",l=Pi.get(`${o}-${n}`),a=Pi.get(o);return{locale:r,language:o,region:n,primary:l,secondary:a}}exists(t,i){var s;const{primary:r,secondary:o}=this.getTranslationData((s=i.lang)!==null&&s!==void 0?s:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[t]||o&&o[t]||i.includeFallback&&gi&&gi[t])}term(t,...i){const{primary:s,secondary:r}=this.getTranslationData(this.lang());let o;if(s&&s[t])o=s[t];else if(r&&r[t])o=r[t];else if(gi&&gi[t])o=gi[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...i):o}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,i)}};var Pc={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Lc(Pc);var h0=Pc,tt=class extends c0{};Lc(h0);function S(e,t){const i=Fe({waitUntilFirstUpdate:!1},t);return(s,r)=>{const{update:o}=s,n=Array.isArray(e)?e:[e];s.update=function(l){n.forEach(a=>{const c=a;if(l.has(c)){const u=l.get(c),d=this[c];u!==d&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,d)}}),o.call(this,l)}}}var St=class extends O{constructor(){super(),this.localize=new tt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&!this.disabled&&e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=qa(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=qa(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await xt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=pt(this,"tooltip.show",{dir:this.localize.dir()});await bt(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await xt(this.body);const{keyframes:e,options:t}=pt(this,"tooltip.hide",{dir:this.localize.dir()});await bt(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Rt(this,"sl-after-hide")}render(){return $`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${R({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};St.styles=Cg;St.dependencies={"sl-popup":nt};h([E("slot:not([name])")],St.prototype,"defaultSlot",2);h([E(".tooltip__body")],St.prototype,"body",2);h([E("sl-popup")],St.prototype,"popup",2);h([m()],St.prototype,"content",2);h([m()],St.prototype,"placement",2);h([m({type:Boolean,reflect:!0})],St.prototype,"disabled",2);h([m({type:Number})],St.prototype,"distance",2);h([m({type:Boolean,reflect:!0})],St.prototype,"open",2);h([m({type:Number})],St.prototype,"skidding",2);h([m()],St.prototype,"trigger",2);h([m({type:Boolean})],St.prototype,"hoist",2);h([S("open",{waitUntilFirstUpdate:!0})],St.prototype,"handleOpenChange",1);h([S(["content","distance","hoist","placement","skidding"])],St.prototype,"handleOptionsChange",1);h([S("disabled")],St.prototype,"handleDisabledChange",1);st("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});st("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});St.define("sl-tooltip");var u0=L`
  ${D}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,d0=L`
  ${D}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,p0=L`
  ${D}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Si=(e="value")=>(t,i)=>{const s=t.constructor,r=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(o,n,l){var a;const c=s.getPropertyOptions(e),u=typeof c.attribute=="string"?c.attribute:e;if(o===u){const d=c.converter||Ui,f=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:Ui.fromAttribute)(l,c.type);this[e]!==f&&(this[i]=f)}r.call(this,o,n,l)}},f0=L`
  ${D}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,un="";function Xa(e){un=e}function m0(e=""){if(!un){const t=[...document.getElementsByTagName("script")],i=t.find(s=>s.hasAttribute("data-shoelace"));if(i)Xa(i.getAttribute("data-shoelace"));else{const s=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let r="";s&&(r=s.getAttribute("src")),Xa(r.split("/").slice(0,-1).join("/"))}}return un.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var g0={name:"default",resolver:e=>m0(`assets/icons/${e}.svg`)},b0=g0,Ya={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},v0={name:"system",resolver:e=>e in Ya?`data:image/svg+xml,${encodeURIComponent(Ya[e])}`:""},y0=v0,w0=[b0,y0],dn=[];function _0(e){dn.push(e)}function x0(e){dn=dn.filter(t=>t!==e)}function Wa(e){return w0.find(t=>t.name===e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k0=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,Rc=e=>e.strings===void 0,C0={},$0=(e,t=C0)=>e._$AH=t;var fs=Symbol(),br=Symbol(),Mo,Oo=new Map,at=class extends O{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let s;if(t!=null&&t.spriteSheet)return $`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(s=await fetch(e,{mode:"cors"}),!s.ok)return s.status===410?fs:br}catch{return br}try{const r=document.createElement("div");r.innerHTML=await s.text();const o=r.firstElementChild;if(((i=o==null?void 0:o.tagName)==null?void 0:i.toLowerCase())!=="svg")return fs;Mo||(Mo=new DOMParser);const l=Mo.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):fs}catch{return fs}}connectedCallback(){super.connectedCallback(),_0(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),x0(this)}getIconSource(){const e=Wa(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:i}=this.getIconSource(),s=i?Wa(this.library):void 0;if(!t){this.svg=null;return}let r=Oo.get(t);if(r||(r=this.resolveIcon(t,s),Oo.set(t,r)),!this.initialRender)return;const o=await r;if(o===br&&Oo.delete(t),t===this.getIconSource().url){if(k0(o)){this.svg=o;return}switch(o){case br:case fs:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=s==null?void 0:s.mutator)==null||e.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};at.styles=f0;h([F()],at.prototype,"svg",2);h([m({reflect:!0})],at.prototype,"name",2);h([m()],at.prototype,"src",2);h([m()],at.prototype,"label",2);h([m({reflect:!0})],at.prototype,"library",2);h([S("label")],at.prototype,"handleLabelChange",1);h([S(["name","src","library"])],at.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=e=>e??dt;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=Js(class extends tr{constructor(e){if(super(e),e.type!==be.PROPERTY&&e.type!==be.ATTRIBUTE&&e.type!==be.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Rc(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Yt||t===dt)return t;const i=e.element,s=e.name;if(e.type===be.PROPERTY){if(t===i[s])return Yt}else if(e.type===be.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(s))return Yt}else if(e.type===be.ATTRIBUTE&&i.getAttribute(s)===t+"")return Yt;return $0(e),t}});var At=class extends O{constructor(){super(...arguments),this.formControlController=new Ne(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return $`
      <label
        part="base"
        class=${R({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${I(this.value)}
          .indeterminate=${$i(this.indeterminate)}
          .checked=${$i(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?$`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?$`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};At.styles=p0;At.dependencies={"sl-icon":at};h([E('input[type="checkbox"]')],At.prototype,"input",2);h([F()],At.prototype,"hasFocus",2);h([m()],At.prototype,"title",2);h([m()],At.prototype,"name",2);h([m()],At.prototype,"value",2);h([m({reflect:!0})],At.prototype,"size",2);h([m({type:Boolean,reflect:!0})],At.prototype,"disabled",2);h([m({type:Boolean,reflect:!0})],At.prototype,"checked",2);h([m({type:Boolean,reflect:!0})],At.prototype,"indeterminate",2);h([Si("checked")],At.prototype,"defaultChecked",2);h([m({reflect:!0})],At.prototype,"form",2);h([m({type:Boolean,reflect:!0})],At.prototype,"required",2);h([S("disabled",{waitUntilFirstUpdate:!0})],At.prototype,"handleDisabledChange",1);h([S(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],At.prototype,"handleStateChange",1);var S0=L`
  ${D}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,eo=class extends O{constructor(){super(...arguments),this.localize=new tt(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};eo.styles=S0;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ka(e,t,i){return e?t(e):i==null?void 0:i(e)}var vt=class pn extends O{constructor(){super(...arguments),this.localize=new tt(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await xt(this.childrenContainer);const{keyframes:t,options:i}=pt(this,"tree-item.collapse",{dir:this.localize.dir()});await bt(this.childrenContainer,Vr(t,this.childrenContainer.scrollHeight),i),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&pn.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await xt(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:i}=pt(this,"tree-item.expand",{dir:this.localize.dir()});await bt(this.childrenContainer,Vr(t,this.childrenContainer.scrollHeight),i),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>pn.isTreeItem(i)&&(t||!i.disabled)):[]}render(){const t=this.localize.dir()==="rtl",i=!this.loading&&(!this.isLeaf||this.lazy);return $`
      <div
        part="base"
        class="${R({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":i,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${R({"tree-item__expand-button":!0,"tree-item__expand-button--visible":i})}
            aria-hidden="true"
          >
            ${Ka(this.loading,()=>$` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Ka(this.selectable,()=>$`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${$i(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};vt.styles=d0;vt.dependencies={"sl-checkbox":At,"sl-icon":at,"sl-spinner":eo};h([F()],vt.prototype,"indeterminate",2);h([F()],vt.prototype,"isLeaf",2);h([F()],vt.prototype,"loading",2);h([F()],vt.prototype,"selectable",2);h([m({type:Boolean,reflect:!0})],vt.prototype,"expanded",2);h([m({type:Boolean,reflect:!0})],vt.prototype,"selected",2);h([m({type:Boolean,reflect:!0})],vt.prototype,"disabled",2);h([m({type:Boolean,reflect:!0})],vt.prototype,"lazy",2);h([E("slot:not([name])")],vt.prototype,"defaultSlot",2);h([E("slot[name=children]")],vt.prototype,"childrenSlot",2);h([E(".tree-item__item")],vt.prototype,"itemElement",2);h([E(".tree-item__children")],vt.prototype,"childrenContainer",2);h([E(".tree-item__expand-button slot")],vt.prototype,"expandButtonSlot",2);h([S("loading",{waitUntilFirstUpdate:!0})],vt.prototype,"handleLoadingChange",1);h([S("disabled")],vt.prototype,"handleDisabledChange",1);h([S("selected")],vt.prototype,"handleSelectedChange",1);h([S("expanded",{waitUntilFirstUpdate:!0})],vt.prototype,"handleExpandedChange",1);h([S("expanded",{waitUntilFirstUpdate:!0})],vt.prototype,"handleExpandAnimation",1);h([S("lazy",{waitUntilFirstUpdate:!0})],vt.prototype,"handleLazyChange",1);var Cs=vt;st("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});st("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function _t(e,t,i){const s=r=>Object.is(r,-0)?0:r;return e<t?s(t):e>i?s(i):s(e)}function Ga(e,t=!1){function i(o){const n=o.getChildrenItems({includeDisabled:!1});if(n.length){const l=n.every(c=>c.selected),a=n.every(c=>!c.selected&&!c.indeterminate);o.selected=l,o.indeterminate=!l&&!a}}function s(o){const n=o.parentElement;Cs.isTreeItem(n)&&(i(n),s(n))}function r(o){for(const n of o.getChildrenItems())n.selected=t?o.selected||n.selected:!n.disabled&&o.selected,r(n);t&&i(o)}r(e),s(e)}var Ai=class extends O{constructor(){super(),this.selection="single",this.localize=new tt(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const i=e.querySelector(`[slot="${t}-icon"]`);i===null?e.append(this.getExpandButtonIcon(t)):i.hasAttribute("data-default")&&i.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const i=[...t.addedNodes].filter(Cs.isTreeItem),s=[...t.removedNodes].filter(Cs.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&s.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Cs.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const i=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const s=i.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${e}-icon`,s}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Ga(e);else if(this.selection==="single"||e.isLeaf){const s=this.getAllTreeItems();for(const r of s)r.selected=r===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const i=this.selectedItems;(t.length!==i.length||i.some(s=>!t.includes(s)))&&Promise.all(i.map(s=>s.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(r=>{var o;return["input","textarea"].includes((o=r==null?void 0:r.tagName)==null?void 0:o.toLowerCase())}))return;const t=this.getFocusableItems(),i=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const r=t.findIndex(a=>a.matches(":focus")),o=t[r],n=a=>{const c=t[_t(a,0,t.length-1)];this.focusItem(c)},l=a=>{o.expanded=a};e.key==="ArrowDown"?n(r+1):e.key==="ArrowUp"?n(r-1):i&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?n(r+1):l(!0):i&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?n(r-1):l(!1):e.key==="Home"?n(0):e.key==="End"?n(t.length-1):(e.key==="Enter"||e.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(e){const t=e.target,i=t.closest("sl-tree-item"),s=e.composedPath().some(r=>{var o;return(o=r==null?void 0:r.classList)==null?void 0:o.contains("tree-item__expand-button")});!i||i.disabled||t!==this.clickTarget||(s?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const i of t)i.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(i=>Ga(i,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=i=>i.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(i=>{var s;if(i.disabled)return!1;const r=(s=i.parentElement)==null?void 0:s.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||t.has(r))&&t.add(i),!t.has(i)})}render(){return $`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ai.styles=u0;h([E("slot:not([name])")],Ai.prototype,"defaultSlot",2);h([E("slot[name=expand-icon]")],Ai.prototype,"expandedIconSlot",2);h([E("slot[name=collapse-icon]")],Ai.prototype,"collapsedIconSlot",2);h([m()],Ai.prototype,"selection",2);h([S("selection")],Ai.prototype,"handleSelectionChange",1);Ai.define("sl-tree");Cs.define("sl-tree-item");var A0=L`
  ${D}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,z0=0,er=class extends O{constructor(){super(...arguments),this.attrId=++z0,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return $`
      <slot
        part="base"
        class=${R({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};er.styles=A0;h([m({reflect:!0})],er.prototype,"name",2);h([m({type:Boolean,reflect:!0})],er.prototype,"active",2);h([S("active")],er.prototype,"handleActiveChange",1);er.define("sl-tab-panel");var E0=L`
  ${D}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,T0=L`
  ${D}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fc=Symbol.for(""),M0=e=>{if((e==null?void 0:e.r)===Fc)return e==null?void 0:e._$litStatic$},Br=(e,...t)=>({_$litStatic$:t.reduce((i,s,r)=>i+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[r+1],e[0]),r:Fc}),Qa=new Map,O0=e=>(t,...i)=>{const s=i.length;let r,o;const n=[],l=[];let a,c=0,u=!1;for(;c<s;){for(a=t[c];c<s&&(o=i[c],(r=M0(o))!==void 0);)a+=r+t[++c],u=!0;c!==s&&l.push(o),n.push(a),c++}if(c===s&&n.push(t[s]),u){const d=n.join("$$lit$$");(t=Qa.get(d))===void 0&&(n.raw=n,Qa.set(d,t=n)),i=l}return e(t,...i)},$s=O0($);var Ct=class extends O{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Br`a`:Br`button`;return $s`
      <${t}
        part="base"
        class=${R({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${I(e?void 0:this.disabled)}
        type=${I(e?void 0:"button")}
        href=${I(e?this.href:void 0)}
        target=${I(e?this.target:void 0)}
        download=${I(e?this.download:void 0)}
        rel=${I(e&&this.target?"noreferrer noopener":void 0)}
        role=${I(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${I(this.name)}
          library=${I(this.library)}
          src=${I(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Ct.styles=T0;Ct.dependencies={"sl-icon":at};h([E(".icon-button")],Ct.prototype,"button",2);h([F()],Ct.prototype,"hasFocus",2);h([m()],Ct.prototype,"name",2);h([m()],Ct.prototype,"library",2);h([m()],Ct.prototype,"src",2);h([m()],Ct.prototype,"href",2);h([m()],Ct.prototype,"target",2);h([m()],Ct.prototype,"download",2);h([m()],Ct.prototype,"label",2);h([m({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);var ei=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return $`
      <span
        part="base"
        class=${R({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?$`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};ei.styles=E0;ei.dependencies={"sl-icon-button":Ct};h([m({reflect:!0})],ei.prototype,"variant",2);h([m({reflect:!0})],ei.prototype,"size",2);h([m({type:Boolean,reflect:!0})],ei.prototype,"pill",2);h([m({type:Boolean})],ei.prototype,"removable",2);ei.define("sl-tag");var ir=L`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,I0=L`
  ${D}
  ${ir}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Qt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function L0(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let i="";return[...t].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i}var et=class extends O{constructor(){super(...arguments),this.formControlController=new Ne(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Qt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,s){this.input.setRangeText(e,t,i,s),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,s=this.helpText?!0:!!t;return $`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${R({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${I(this.name)}
              .value=${$i(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${I(this.placeholder)}
              rows=${I(this.rows)}
              minlength=${I(this.minlength)}
              maxlength=${I(this.maxlength)}
              autocapitalize=${I(this.autocapitalize)}
              autocorrect=${I(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${I(this.spellcheck)}
              enterkeyhint=${I(this.enterkeyhint)}
              inputmode=${I(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};et.styles=I0;h([E(".textarea__control")],et.prototype,"input",2);h([F()],et.prototype,"hasFocus",2);h([m()],et.prototype,"title",2);h([m()],et.prototype,"name",2);h([m()],et.prototype,"value",2);h([m({reflect:!0})],et.prototype,"size",2);h([m({type:Boolean,reflect:!0})],et.prototype,"filled",2);h([m()],et.prototype,"label",2);h([m({attribute:"help-text"})],et.prototype,"helpText",2);h([m()],et.prototype,"placeholder",2);h([m({type:Number})],et.prototype,"rows",2);h([m()],et.prototype,"resize",2);h([m({type:Boolean,reflect:!0})],et.prototype,"disabled",2);h([m({type:Boolean,reflect:!0})],et.prototype,"readonly",2);h([m({reflect:!0})],et.prototype,"form",2);h([m({type:Boolean,reflect:!0})],et.prototype,"required",2);h([m({type:Number})],et.prototype,"minlength",2);h([m({type:Number})],et.prototype,"maxlength",2);h([m()],et.prototype,"autocapitalize",2);h([m()],et.prototype,"autocorrect",2);h([m()],et.prototype,"autocomplete",2);h([m({type:Boolean})],et.prototype,"autofocus",2);h([m()],et.prototype,"enterkeyhint",2);h([m({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],et.prototype,"spellcheck",2);h([m()],et.prototype,"inputmode",2);h([Si()],et.prototype,"defaultValue",2);h([S("disabled",{waitUntilFirstUpdate:!0})],et.prototype,"handleDisabledChange",1);h([S("rows",{waitUntilFirstUpdate:!0})],et.prototype,"handleRowsChange",1);h([S("value",{waitUntilFirstUpdate:!0})],et.prototype,"handleValueChange",1);et.define("sl-textarea");var D0=L`
  ${D}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Ft=class extends O{constructor(){super(...arguments),this.formControlController=new Ne(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return $`
      <label
        part="base"
        class=${R({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${I(this.value)}
          .checked=${$i(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};Ft.styles=D0;h([E('input[type="checkbox"]')],Ft.prototype,"input",2);h([F()],Ft.prototype,"hasFocus",2);h([m()],Ft.prototype,"title",2);h([m()],Ft.prototype,"name",2);h([m()],Ft.prototype,"value",2);h([m({reflect:!0})],Ft.prototype,"size",2);h([m({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);h([m({type:Boolean,reflect:!0})],Ft.prototype,"checked",2);h([Si("checked")],Ft.prototype,"defaultChecked",2);h([m({reflect:!0})],Ft.prototype,"form",2);h([m({type:Boolean,reflect:!0})],Ft.prototype,"required",2);h([S("checked",{waitUntilFirstUpdate:!0})],Ft.prototype,"handleCheckedChange",1);h([S("disabled",{waitUntilFirstUpdate:!0})],Ft.prototype,"handleDisabledChange",1);Ft.define("sl-switch");var P0=L`
  ${D}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,R0=0,ke=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.attrId=++R0,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,$`
      <div
        part="base"
        class=${R({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};ke.styles=P0;ke.dependencies={"sl-icon-button":Ct};h([E(".tab")],ke.prototype,"tab",2);h([m({reflect:!0})],ke.prototype,"panel",2);h([m({type:Boolean,reflect:!0})],ke.prototype,"active",2);h([m({type:Boolean})],ke.prototype,"closable",2);h([m({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);h([S("active")],ke.prototype,"handleActiveChange",1);h([S("disabled")],ke.prototype,"handleDisabledChange",1);ke.define("sl-tab");var F0=L`
  ${D}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function N0(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var fn=new Set;function V0(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Ss(e){if(fn.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=V0();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function As(e){fn.delete(e),fn.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function mn(e,t,i="vertical",s="smooth"){const r=N0(e,t),o=r.top+t.scrollTop,n=r.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,u=t.scrollTop+t.offsetHeight;(i==="horizontal"||i==="both")&&(n<l?t.scrollTo({left:n,behavior:s}):n+e.clientWidth>a&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:s})),(i==="vertical"||i==="both")&&(o<c?t.scrollTo({top:o,behavior:s}):o+e.clientHeight>u&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:s}))}var Zt=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(i=>i.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((i,s)=>{var r;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),s.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(i=>e.includeDisabled?i.tagName.toLowerCase()==="sl-tab":i.tagName.toLowerCase()==="sl-tab"&&!i.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const i=e.target.closest("sl-tab");(i==null?void 0:i.closest("sl-tab-group"))===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(e){const i=e.target.closest("sl-tab");if((i==null?void 0:i.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const r=this.tabs.find(n=>n.matches(":focus")),o=this.localize.dir()==="rtl";if((r==null?void 0:r.tagName.toLowerCase())==="sl-tab"){let n=this.tabs.indexOf(r);e.key==="Home"?n=0:e.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&mn(this.tabs[n],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Fe({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const i=this.activeTab;this.activeTab=e,this.tabs.forEach(s=>s.active=s===this.activeTab),this.panels.forEach(s=>{var r;return s.active=s.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&mn(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(i=>i.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,i=e.clientHeight,s=this.localize.dir()==="rtl",r=this.getAllTabs(),n=r.slice(0,r.indexOf(e)).reduce((l,a)=>({left:l.left+a.clientWidth,top:l.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(i=>i.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        class=${R({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Zt.styles=F0;Zt.dependencies={"sl-icon-button":Ct};h([E(".tab-group")],Zt.prototype,"tabGroup",2);h([E(".tab-group__body")],Zt.prototype,"body",2);h([E(".tab-group__nav")],Zt.prototype,"nav",2);h([E(".tab-group__indicator")],Zt.prototype,"indicator",2);h([F()],Zt.prototype,"hasScrollControls",2);h([m()],Zt.prototype,"placement",2);h([m()],Zt.prototype,"activation",2);h([m({attribute:"no-scroll-controls",type:Boolean})],Zt.prototype,"noScrollControls",2);h([S("noScrollControls",{waitUntilFirstUpdate:!0})],Zt.prototype,"updateScrollControls",1);h([S("placement",{waitUntilFirstUpdate:!0})],Zt.prototype,"syncIndicator",1);Zt.define("sl-tab-group");var B0=L`
  ${D}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,ea=class extends O{constructor(){super(...arguments),this.effect="none"}render(){return $`
      <div
        part="base"
        class=${R({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ea.styles=B0;h([m()],ea.prototype,"effect",2);ea.define("sl-skeleton");var U0=L`
  ${D}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function zs(e,t){function i(r){const o=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,l=o.left+n.scrollX,a=o.top+n.scrollY,c=r.pageX-l,u=r.pageY-a;t!=null&&t.onMove&&t.onMove(c,u)}function s(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",s),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",s),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&i(t.initialEvent)}var Jt=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),zs(this,{onMove:(i,s)=>{let r=this.vertical?s:i;this.primary==="end"&&(r=this.size-r),this.snap&&this.snap.split(" ").forEach(n=>{let l;n.endsWith("%")?l=this.size*(parseFloat(n)/100):l=parseFloat(n),t&&!this.vertical&&(l=this.size-l),r>=l-this.snapThreshold&&r<=l+this.snapThreshold&&(r=l)}),this.position=_t(this.pixelsToPercentage(r),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const i=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=i),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=i),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=_t(t,0,100)}}handleResize(e){const{width:t,height:i}=e[0].contentRect;this.size=this.vertical?i:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.primary==="end"?i&&!this.vertical?this.style[e]=`${s} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${s}`:i&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${s}`:this.style[e]=`${s} var(--divider-width) ${r}`,this.style[t]="",$`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${I(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Jt.styles=U0;h([E(".divider")],Jt.prototype,"divider",2);h([m({type:Number,reflect:!0})],Jt.prototype,"position",2);h([m({attribute:"position-in-pixels",type:Number})],Jt.prototype,"positionInPixels",2);h([m({type:Boolean,reflect:!0})],Jt.prototype,"vertical",2);h([m({type:Boolean,reflect:!0})],Jt.prototype,"disabled",2);h([m()],Jt.prototype,"primary",2);h([m()],Jt.prototype,"snap",2);h([m({type:Number,attribute:"snap-threshold"})],Jt.prototype,"snapThreshold",2);h([S("position")],Jt.prototype,"handlePositionChange",1);h([S("positionInPixels")],Jt.prototype,"handlePositionInPixelsChange",1);h([S("vertical")],Jt.prototype,"handleVerticalChange",1);Jt.define("sl-split-panel");var H0=L`
  ${D}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nc="important",j0=" !"+Nc,Nt=Js(class extends tr{constructor(e){var t;if(super(e),e.type!==be.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const s=e[i];return s==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const s of this.ut)t[s]==null&&(this.ut.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in t){const r=t[s];if(r!=null){this.ut.add(s);const o=typeof r=="string"&&r.endsWith(j0);s.includes("-")||o?i.setProperty(s,o?r.slice(0,-11):r,o?Nc:""):i[s]=r}}return Yt}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gn=class extends tr{constructor(t){if(super(t),this.et=dt,t.type!==be.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===dt||t==null)return this.vt=void 0,this.et=t;if(t===Yt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const i=[t];return i.raw=i,this.vt={_$litType$:this.constructor.resultType,strings:i,values:[]}}};gn.directiveName="unsafeHTML",gn.resultType=1;const Sr=Js(gn);var Lt=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:i,right:s,width:r}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((s-e)/r*this.max,this.precision):this.roundToPrecision((e-i)/r*this.max,this.precision);return _t(o,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl",s=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"){const r=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"){const r=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const i=1/t;return Math.ceil(e*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,$`
      <div
        part="base"
        class=${R({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(s=>i>s&&i<s+1?$`
                <span
                  class=${R({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${Nt({clipPath:e?`inset(0 ${(i-s)*100}% 0 0)`:`inset(0 0 0 ${(i-s)*100}%)`})}
                  >
                    ${Sr(this.getSymbol(s+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Nt({clipPath:e?`inset(0 0 0 ${100-(i-s)*100}%)`:`inset(0 ${100-(i-s)*100}% 0 0)`})}
                  >
                    ${Sr(this.getSymbol(s+1))}
                  </div>
                </span>
              `:$`
              <span
                class=${R({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1,"rating__symbol--active":i>=s+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Sr(this.getSymbol(s+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Lt.styles=H0;Lt.dependencies={"sl-icon":at};h([E(".rating")],Lt.prototype,"rating",2);h([F()],Lt.prototype,"hoverValue",2);h([F()],Lt.prototype,"isHovering",2);h([m()],Lt.prototype,"label",2);h([m({type:Number})],Lt.prototype,"value",2);h([m({type:Number})],Lt.prototype,"max",2);h([m({type:Number})],Lt.prototype,"precision",2);h([m({type:Boolean,reflect:!0})],Lt.prototype,"readonly",2);h([m({type:Boolean,reflect:!0})],Lt.prototype,"disabled",2);h([m()],Lt.prototype,"getSymbol",2);h([_c({passive:!0})],Lt.prototype,"handleTouchMove",1);h([S("hoverValue")],Lt.prototype,"handleHoverValueChange",1);h([S("isHovering")],Lt.prototype,"handleIsHoveringChange",1);Lt.define("sl-rating");var q0=L`
  ${D}
  ${ir}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,K=class extends O{constructor(){super(...arguments),this.formControlController=new Ne(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Qt(this,"help-text","label"),this.localize=new tt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>$`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,i=t.closest(".select__clear")!==null,s=t.closest("sl-icon-button")!==null;if(!(i||s)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const r=this.getAllOptions(),o=r.indexOf(this.currentOption);let n=Math.max(0,o);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(n=o+1,n>r.length-1&&(n=0)):e.key==="ArrowUp"?(n=o-1,n<0&&(n=r.length-1)):e.key==="Home"?n=0:e.key==="End"&&(n=r.length-1),this.setCurrentOption(r[n])}if(e.key.length===1||e.key==="Backspace"){const r=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const o of r)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const i=e.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const i=e.target.closest("sl-option"),s=this.value;i&&!i.disabled&&(this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],i=[];customElements.get("sl-option")?(e.forEach(s=>i.push(s.value)),this.setSelectedOptions(e.filter(s=>t.includes(s.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(s=>s.selected=!1),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,i,s;this.selectedOptions=this.getAllOptions().filter(r=>r.selected),this.multiple?(this.value=this.selectedOptions.map(r=>r.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(s=(i=this.selectedOptions[0])==null?void 0:i.getTextLabel())!=null?s:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(e,t);return $`<div @sl-remove=${s=>this.handleTagRemove(s,e)}>
          ${typeof i=="string"?Sr(i):i}
        </div>`}else if(t===this.maxOptionsVisible)return $`<sl-tag>+${this.selectedOptions.length-t}</sl-tag>`;return $``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(i=>t.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await xt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=pt(this,"select.show",{dir:this.localize.dir()});await bt(this.popup.popup,e,t),this.currentOption&&mn(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await xt(this);const{keyframes:e,options:t}=pt(this,"select.hide",{dir:this.localize.dir()});await bt(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Rt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Rt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,s=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value.length===0;return $`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${R({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?$`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?$`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};K.styles=q0;K.dependencies={"sl-icon":at,"sl-popup":nt,"sl-tag":ei};h([E(".select")],K.prototype,"popup",2);h([E(".select__combobox")],K.prototype,"combobox",2);h([E(".select__display-input")],K.prototype,"displayInput",2);h([E(".select__value-input")],K.prototype,"valueInput",2);h([E(".select__listbox")],K.prototype,"listbox",2);h([F()],K.prototype,"hasFocus",2);h([F()],K.prototype,"displayLabel",2);h([F()],K.prototype,"currentOption",2);h([F()],K.prototype,"selectedOptions",2);h([m()],K.prototype,"name",2);h([m({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],K.prototype,"value",2);h([Si()],K.prototype,"defaultValue",2);h([m({reflect:!0})],K.prototype,"size",2);h([m()],K.prototype,"placeholder",2);h([m({type:Boolean,reflect:!0})],K.prototype,"multiple",2);h([m({attribute:"max-options-visible",type:Number})],K.prototype,"maxOptionsVisible",2);h([m({type:Boolean,reflect:!0})],K.prototype,"disabled",2);h([m({type:Boolean})],K.prototype,"clearable",2);h([m({type:Boolean,reflect:!0})],K.prototype,"open",2);h([m({type:Boolean})],K.prototype,"hoist",2);h([m({type:Boolean,reflect:!0})],K.prototype,"filled",2);h([m({type:Boolean,reflect:!0})],K.prototype,"pill",2);h([m()],K.prototype,"label",2);h([m({reflect:!0})],K.prototype,"placement",2);h([m({attribute:"help-text"})],K.prototype,"helpText",2);h([m({reflect:!0})],K.prototype,"form",2);h([m({type:Boolean,reflect:!0})],K.prototype,"required",2);h([m()],K.prototype,"getTag",2);h([S("disabled",{waitUntilFirstUpdate:!0})],K.prototype,"handleDisabledChange",1);h([S("value",{waitUntilFirstUpdate:!0})],K.prototype,"handleValueChange",1);h([S("open",{waitUntilFirstUpdate:!0})],K.prototype,"handleOpenChange",1);st("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});st("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});K.define("sl-select");eo.define("sl-spinner");var X0=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],ii=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=t.getTime()-e.getTime(),{unit:s,value:r}=X0.find(o=>Math.abs(i)<o.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(i/r),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;s==="minute"?o=vr("second"):s==="hour"?o=vr("minute"):s==="day"?o=vr("hour"):o=vr("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return $` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};h([F()],ii.prototype,"isoTime",2);h([F()],ii.prototype,"relativeTime",2);h([F()],ii.prototype,"titleTime",2);h([m()],ii.prototype,"date",2);h([m()],ii.prototype,"format",2);h([m()],ii.prototype,"numeric",2);h([m({type:Boolean})],ii.prototype,"sync",2);function vr(e){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return i-Date.now()%i}ii.define("sl-relative-time");var Y0=L`
  ${D}
  ${ir}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,mt=class extends O{constructor(){super(...arguments),this.formControlController=new Ne(this),this.hasSlotController=new Qt(this,"help-text","label"),this.localize=new tt(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,i=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=this.localize.dir()==="rtl",o=t*e;if(r){const n=`${t-o}px + ${e} * ${s}`;this.output.style.translate=`calc((${n} - ${i/2}px - ${s} / 2))`}else{const n=`${o}px - ${e} * ${s}`;this.output.style.translate=`calc(${n} - ${i/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,s=this.helpText?!0:!!t;return $`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${R({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${I(this.name)}
              ?disabled=${this.disabled}
              min=${I(this.min)}
              max=${I(this.max)}
              step=${I(this.step)}
              .value=${$i(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?$`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};mt.styles=Y0;h([E(".range__control")],mt.prototype,"input",2);h([E(".range__tooltip")],mt.prototype,"output",2);h([F()],mt.prototype,"hasFocus",2);h([F()],mt.prototype,"hasTooltip",2);h([m()],mt.prototype,"title",2);h([m()],mt.prototype,"name",2);h([m({type:Number})],mt.prototype,"value",2);h([m()],mt.prototype,"label",2);h([m({attribute:"help-text"})],mt.prototype,"helpText",2);h([m({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);h([m({type:Number})],mt.prototype,"min",2);h([m({type:Number})],mt.prototype,"max",2);h([m({type:Number})],mt.prototype,"step",2);h([m()],mt.prototype,"tooltip",2);h([m({attribute:!1})],mt.prototype,"tooltipFormatter",2);h([m({reflect:!0})],mt.prototype,"form",2);h([Si()],mt.prototype,"defaultValue",2);h([_c({passive:!0})],mt.prototype,"handleThumbDragStart",1);h([S("value",{waitUntilFirstUpdate:!0})],mt.prototype,"handleValueChange",1);h([S("disabled",{waitUntilFirstUpdate:!0})],mt.prototype,"handleDisabledChange",1);h([S("hasTooltip",{waitUntilFirstUpdate:!0})],mt.prototype,"syncRange",1);mt.define("sl-range");var W0=L`
  ${D}

  :host {
    display: contents;
  }
`,io=class extends O{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],t.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};io.styles=W0;h([m({type:Boolean,reflect:!0})],io.prototype,"disabled",2);h([S("disabled",{waitUntilFirstUpdate:!0})],io.prototype,"handleDisabledChange",1);io.define("sl-resize-observer");var K0=L`
  ${D}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ce=class extends O{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return $`
      <span
        part="base"
        class=${R({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?$` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Ce.styles=K0;Ce.dependencies={"sl-icon":at};h([F()],Ce.prototype,"checked",2);h([F()],Ce.prototype,"hasFocus",2);h([m()],Ce.prototype,"value",2);h([m({reflect:!0})],Ce.prototype,"size",2);h([m({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);h([S("checked")],Ce.prototype,"handleCheckedChange",1);h([S("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1);Ce.define("sl-radio");var Vc=L`
  ${D}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,G0=L`
  ${Vc}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,ue=class extends O{constructor(){super(...arguments),this.hasSlotController=new Qt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return $s`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${R({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${I(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};ue.styles=G0;h([E(".button")],ue.prototype,"input",2);h([E(".hidden-input")],ue.prototype,"hiddenInput",2);h([F()],ue.prototype,"hasFocus",2);h([m({type:Boolean,reflect:!0})],ue.prototype,"checked",2);h([m()],ue.prototype,"value",2);h([m({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);h([m({reflect:!0})],ue.prototype,"size",2);h([m({type:Boolean,reflect:!0})],ue.prototype,"pill",2);h([S("disabled",{waitUntilFirstUpdate:!0})],ue.prototype,"handleDisabledChange",1);ue.define("sl-radio-button");var Q0=L`
  ${D}
  ${ir}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Z0=L`
  ${D}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,zi=class extends O{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=ms(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=ms(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=ms(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=ms(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const i=e.indexOf(t),s=ms(t);s&&(s.classList.add("sl-button-group__button"),s.classList.toggle("sl-button-group__button--first",i===0),s.classList.toggle("sl-button-group__button--inner",i>0&&i<e.length-1),s.classList.toggle("sl-button-group__button--last",i===e.length-1),s.classList.toggle("sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return $`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};zi.styles=Z0;h([E("slot")],zi.prototype,"defaultSlot",2);h([F()],zi.prototype,"disableRole",2);h([m()],zi.prototype,"label",2);function ms(e){var t;const i="sl-button, sl-radio-button";return(t=e.closest(i))!=null?t:e.querySelector(i)}var Mt=class extends O{constructor(){super(...arguments),this.formControlController=new Ne(this),this.hasSlotController=new Qt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?tg:e?Jm:Qr}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),s=this.value;t.disabled||(this.value=t.value,i.forEach(r=>r.checked=r===t),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const i=this.getAllRadios().filter(l=>!l.disabled),s=(t=i.find(l=>l.checked))!=null?t:i[0],r=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,o=this.value;let n=i.indexOf(s)+r;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=i[n].value,i[n].checked=!0,this.hasButtonGroup?i[n].shadowRoot.querySelector("button").focus():(i[n].tabIndex=0,i[n].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),i=e.find(s=>s.checked)||e[0];i&&i.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const i=this.getAllRadios();if(await Promise.all(i.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=i.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),!i.some(s=>s.checked))if(this.hasButtonGroup){const s=(e=i[0].shadowRoot)==null?void 0:e.querySelector("button");s&&(s.tabIndex=0)}else i[0].tabIndex=0;if(this.hasButtonGroup){const s=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,s=this.helpText?!0:!!t,r=$`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return $`
      <fieldset
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?$`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Mt.styles=Q0;Mt.dependencies={"sl-button-group":zi};h([E("slot:not([name])")],Mt.prototype,"defaultSlot",2);h([E(".radio-group__validation-input")],Mt.prototype,"validationInput",2);h([F()],Mt.prototype,"hasButtonGroup",2);h([F()],Mt.prototype,"errorMessage",2);h([F()],Mt.prototype,"defaultValue",2);h([m()],Mt.prototype,"label",2);h([m({attribute:"help-text"})],Mt.prototype,"helpText",2);h([m()],Mt.prototype,"name",2);h([m({reflect:!0})],Mt.prototype,"value",2);h([m({reflect:!0})],Mt.prototype,"size",2);h([m({reflect:!0})],Mt.prototype,"form",2);h([m({type:Boolean,reflect:!0})],Mt.prototype,"required",2);h([S("size",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleSizeChange",1);h([S("value")],Mt.prototype,"handleValueChange",1);Mt.define("sl-radio-group");var J0=L`
  ${D}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,sr=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return $`
      <div
        part="base"
        class=${R({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${I(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Nt({width:`${this.value}%`})}>
          ${this.indeterminate?"":$` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};sr.styles=J0;h([m({type:Number,reflect:!0})],sr.prototype,"value",2);h([m({type:Boolean,reflect:!0})],sr.prototype,"indeterminate",2);h([m()],sr.prototype,"label",2);sr.define("sl-progress-bar");var tb=L`
  ${D}

  :host {
    display: inline-block;
  }
`;let Bc=null;class Uc{}Uc.render=function(e,t){Bc(e,t)};self.QrCreator=Uc;(function(e){function t(l,a,c,u){var d={},p=e(c,a);p.u(l),p.J(),u=u||0;var f=p.h(),g=p.h()+2*u;return d.text=l,d.level=a,d.version=c,d.O=g,d.a=function(b,v){return b-=u,v-=u,0>b||b>=f||0>v||v>=f?!1:p.a(b,v)},d}function i(l,a,c,u,d,p,f,g,b,v){function y(_,k,x,w,C,T,M){_?(l.lineTo(k+T,x+M),l.arcTo(k,x,w,C,p)):l.lineTo(k,x)}f?l.moveTo(a+p,c):l.moveTo(a,c),y(g,u,c,u,d,-p,0),y(b,u,d,a,d,0,-p),y(v,a,d,a,c,p,0),y(f,a,c,u,c,0,p)}function s(l,a,c,u,d,p,f,g,b,v){function y(_,k,x,w){l.moveTo(_+x,k),l.lineTo(_,k),l.lineTo(_,k+w),l.arcTo(_,k,_+x,k,p)}f&&y(a,c,p,p),g&&y(u,c,-p,p),b&&y(u,d,-p,-p),v&&y(a,d,p,-p)}function r(l,a){var c=a.fill;if(typeof c=="string")l.fillStyle=c;else{var u=c.type,d=c.colorStops;if(c=c.position.map(f=>Math.round(f*a.size)),u==="linear-gradient")var p=l.createLinearGradient.apply(l,c);else if(u==="radial-gradient")p=l.createRadialGradient.apply(l,c);else throw Error("Unsupported fill");d.forEach(([f,g])=>{p.addColorStop(f,g)}),l.fillStyle=p}}function o(l,a){t:{var c=a.text,u=a.v,d=a.N,p=a.K,f=a.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var g=t(c,u,d,f);break t}catch{}g=void 0}if(!g)return null;for(c=l.getContext("2d"),a.background&&(c.fillStyle=a.background,c.fillRect(a.left,a.top,a.size,a.size)),u=g.O,p=a.size/u,c.beginPath(),f=0;f<u;f+=1)for(d=0;d<u;d+=1){var b=c,v=a.left+d*p,y=a.top+f*p,_=f,k=d,x=g.a,w=v+p,C=y+p,T=_-1,M=_+1,A=k-1,z=k+1,U=Math.floor(Math.min(.5,Math.max(0,a.R))*p),N=x(_,k),Z=x(T,A),V=x(T,k);T=x(T,z);var q=x(_,z);z=x(M,z),k=x(M,k),M=x(M,A),_=x(_,A),v=Math.round(v),y=Math.round(y),w=Math.round(w),C=Math.round(C),N?i(b,v,y,w,C,U,!V&&!_,!V&&!q,!k&&!q,!k&&!_):s(b,v,y,w,C,U,V&&_&&Z,V&&q&&T,k&&q&&z,k&&_&&M)}return r(c,a),c.fill(),l}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Bc=function(l,a){var c={};Object.assign(c,n,l),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,a instanceof HTMLCanvasElement?((a.width!==c.size||a.height!==c.size)&&(a.width=c.size,a.height=c.size),a.getContext("2d").clearRect(0,0,a.width,a.height),o(a,c)):(l=document.createElement("canvas"),l.width=c.size,l.height=c.size,c=o(l,c),a.appendChild(c))}})(function(){function e(a){var c=i.s(a);return{S:function(){return 4},b:function(){return c.length},write:function(u){for(var d=0;d<c.length;d+=1)u.put(c[d],8)}}}function t(){var a=[],c=0,u={B:function(){return a},c:function(d){return(a[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var f=0;f<p;f+=1)u.m((d>>>p-f-1&1)==1)},f:function(){return c},m:function(d){var p=Math.floor(c/8);a.length<=p&&a.push(0),d&&(a[p]|=128>>>c%8),c+=1}};return u}function i(a,c){function u(_,k){for(var x=-1;7>=x;x+=1)if(!(-1>=_+x||g<=_+x))for(var w=-1;7>=w;w+=1)-1>=k+w||g<=k+w||(f[_+x][k+w]=0<=x&&6>=x&&(w==0||w==6)||0<=w&&6>=w&&(x==0||x==6)||2<=x&&4>=x&&2<=w&&4>=w)}function d(_,k){for(var x=g=4*a+17,w=Array(x),C=0;C<x;C+=1){w[C]=Array(x);for(var T=0;T<x;T+=1)w[C][T]=null}for(f=w,u(0,0),u(g-7,0),u(0,g-7),x=o.G(a),w=0;w<x.length;w+=1)for(C=0;C<x.length;C+=1){T=x[w];var M=x[C];if(f[T][M]==null)for(var A=-2;2>=A;A+=1)for(var z=-2;2>=z;z+=1)f[T+A][M+z]=A==-2||A==2||z==-2||z==2||A==0&&z==0}for(x=8;x<g-8;x+=1)f[x][6]==null&&(f[x][6]=x%2==0);for(x=8;x<g-8;x+=1)f[6][x]==null&&(f[6][x]=x%2==0);for(x=o.w(p<<3|k),w=0;15>w;w+=1)C=!_&&(x>>w&1)==1,f[6>w?w:8>w?w+1:g-15+w][8]=C,f[8][8>w?g-w-1:9>w?15-w:14-w]=C;if(f[g-8][8]=!_,7<=a){for(x=o.A(a),w=0;18>w;w+=1)C=!_&&(x>>w&1)==1,f[Math.floor(w/3)][w%3+g-8-3]=C;for(w=0;18>w;w+=1)C=!_&&(x>>w&1)==1,f[w%3+g-8-3][Math.floor(w/3)]=C}if(b==null){for(_=l.I(a,p),x=t(),w=0;w<v.length;w+=1)C=v[w],x.put(4,4),x.put(C.b(),o.f(4,a)),C.write(x);for(w=C=0;w<_.length;w+=1)C+=_[w].j;if(x.f()>8*C)throw Error("code length overflow. ("+x.f()+">"+8*C+")");for(x.f()+4<=8*C&&x.put(0,4);x.f()%8!=0;)x.m(!1);for(;!(x.f()>=8*C)&&(x.put(236,8),!(x.f()>=8*C));)x.put(17,8);var U=0;for(C=w=0,T=Array(_.length),M=Array(_.length),A=0;A<_.length;A+=1){var N=_[A].j,Z=_[A].o-N;for(w=Math.max(w,N),C=Math.max(C,Z),T[A]=Array(N),z=0;z<T[A].length;z+=1)T[A][z]=255&x.B()[z+U];for(U+=N,z=o.C(Z),N=s(T[A],z.b()-1).l(z),M[A]=Array(z.b()-1),z=0;z<M[A].length;z+=1)Z=z+N.b()-M[A].length,M[A][z]=0<=Z?N.c(Z):0}for(z=x=0;z<_.length;z+=1)x+=_[z].o;for(x=Array(x),z=U=0;z<w;z+=1)for(A=0;A<_.length;A+=1)z<T[A].length&&(x[U]=T[A][z],U+=1);for(z=0;z<C;z+=1)for(A=0;A<_.length;A+=1)z<M[A].length&&(x[U]=M[A][z],U+=1);b=x}for(_=b,x=-1,w=g-1,C=7,T=0,k=o.F(k),M=g-1;0<M;M-=2)for(M==6&&--M;;){for(A=0;2>A;A+=1)f[w][M-A]==null&&(z=!1,T<_.length&&(z=(_[T]>>>C&1)==1),k(w,M-A)&&(z=!z),f[w][M-A]=z,--C,C==-1&&(T+=1,C=7));if(w+=x,0>w||g<=w){w-=x,x=-x;break}}}var p=r[c],f=null,g=0,b=null,v=[],y={u:function(_){_=e(_),v.push(_),b=null},a:function(_,k){if(0>_||g<=_||0>k||g<=k)throw Error(_+","+k);return f[_][k]},h:function(){return g},J:function(){for(var _=0,k=0,x=0;8>x;x+=1){d(!0,x);var w=o.D(y);(x==0||_>w)&&(_=w,k=x)}d(!1,k)}};return y}function s(a,c){if(typeof a.length>"u")throw Error(a.length+"/"+c);var u=function(){for(var p=0;p<a.length&&a[p]==0;)p+=1;for(var f=Array(a.length-p+c),g=0;g<a.length-p;g+=1)f[g]=a[g+p];return f}(),d={c:function(p){return u[p]},b:function(){return u.length},multiply:function(p){for(var f=Array(d.b()+p.b()-1),g=0;g<d.b();g+=1)for(var b=0;b<p.b();b+=1)f[g+b]^=n.i(n.g(d.c(g))+n.g(p.c(b)));return s(f,0)},l:function(p){if(0>d.b()-p.b())return d;for(var f=n.g(d.c(0))-n.g(p.c(0)),g=Array(d.b()),b=0;b<d.b();b+=1)g[b]=d.c(b);for(b=0;b<p.b();b+=1)g[b]^=n.i(n.g(p.c(b))+f);return s(g,0).l(p)}};return d}i.s=function(a){for(var c=[],u=0;u<a.length;u++){var d=a.charCodeAt(u);128>d?c.push(d):2048>d?c.push(192|d>>6,128|d&63):55296>d||57344<=d?c.push(224|d>>12,128|d>>6&63,128|d&63):(u++,d=65536+((d&1023)<<10|a.charCodeAt(u)&1023),c.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return c};var r={L:1,M:0,Q:3,H:2},o=function(){function a(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],u={w:function(d){for(var p=d<<10;0<=a(p)-a(1335);)p^=1335<<a(p)-a(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=a(p)-a(7973);)p^=7973<<a(p)-a(7973);return d<<12|p},G:function(d){return c[d-1]},F:function(d){switch(d){case 0:return function(p,f){return(p+f)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,f){return f%3==0};case 3:return function(p,f){return(p+f)%3==0};case 4:return function(p,f){return(Math.floor(p/2)+Math.floor(f/3))%2==0};case 5:return function(p,f){return p*f%2+p*f%3==0};case 6:return function(p,f){return(p*f%2+p*f%3)%2==0};case 7:return function(p,f){return(p*f%3+(p+f)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=s([1],0),f=0;f<d;f+=1)p=p.multiply(s([1,n.i(f)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),f=0,g=0;g<p;g+=1)for(var b=0;b<p;b+=1){for(var v=0,y=d.a(g,b),_=-1;1>=_;_+=1)if(!(0>g+_||p<=g+_))for(var k=-1;1>=k;k+=1)0>b+k||p<=b+k||(_!=0||k!=0)&&y==d.a(g+_,b+k)&&(v+=1);5<v&&(f+=3+v-5)}for(g=0;g<p-1;g+=1)for(b=0;b<p-1;b+=1)v=0,d.a(g,b)&&(v+=1),d.a(g+1,b)&&(v+=1),d.a(g,b+1)&&(v+=1),d.a(g+1,b+1)&&(v+=1),(v==0||v==4)&&(f+=3);for(g=0;g<p;g+=1)for(b=0;b<p-6;b+=1)d.a(g,b)&&!d.a(g,b+1)&&d.a(g,b+2)&&d.a(g,b+3)&&d.a(g,b+4)&&!d.a(g,b+5)&&d.a(g,b+6)&&(f+=40);for(b=0;b<p;b+=1)for(g=0;g<p-6;g+=1)d.a(g,b)&&!d.a(g+1,b)&&d.a(g+2,b)&&d.a(g+3,b)&&d.a(g+4,b)&&!d.a(g+5,b)&&d.a(g+6,b)&&(f+=40);for(b=v=0;b<p;b+=1)for(g=0;g<p;g+=1)d.a(g,b)&&(v+=1);return f+=Math.abs(100*v/p/p-50)/5*10}};return u}(),n=function(){for(var a=Array(256),c=Array(256),u=0;8>u;u+=1)a[u]=1<<u;for(u=8;256>u;u+=1)a[u]=a[u-4]^a[u-5]^a[u-6]^a[u-8];for(u=0;255>u;u+=1)c[a[u]]=u;return{g:function(d){if(1>d)throw Error("glog("+d+")");return c[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return a[d]}}}(),l=function(){function a(d,p){switch(p){case r.L:return c[4*(d-1)];case r.M:return c[4*(d-1)+1];case r.Q:return c[4*(d-1)+2];case r.H:return c[4*(d-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u={I:function(d,p){var f=a(d,p);if(typeof f>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=f.length/3,p=[];for(var g=0;g<d;g+=1)for(var b=f[3*g],v=f[3*g+1],y=f[3*g+2],_=0;_<b;_+=1){var k=y,x={};x.o=v,x.j=k,p.push(x)}return p}};return u}();return i}());const eb=QrCreator;var de=class extends O{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&eb.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return $`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${Nt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};de.styles=tb;h([E("canvas")],de.prototype,"canvas",2);h([m()],de.prototype,"value",2);h([m()],de.prototype,"label",2);h([m({type:Number})],de.prototype,"size",2);h([m()],de.prototype,"fill",2);h([m()],de.prototype,"background",2);h([m({type:Number})],de.prototype,"radius",2);h([m({attribute:"error-correction"})],de.prototype,"errorCorrection",2);h([S(["background","errorCorrection","fill","radius","size","value"])],de.prototype,"generate",1);de.define("sl-qr-code");var ib=L`
  ${D}

  :host {
    display: contents;
  }
`,$e=class extends O{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return $` <slot></slot> `}};$e.styles=ib;h([m({reflect:!0})],$e.prototype,"attr",2);h([m({attribute:"attr-old-value",type:Boolean,reflect:!0})],$e.prototype,"attrOldValue",2);h([m({attribute:"char-data",type:Boolean,reflect:!0})],$e.prototype,"charData",2);h([m({attribute:"char-data-old-value",type:Boolean,reflect:!0})],$e.prototype,"charDataOldValue",2);h([m({attribute:"child-list",type:Boolean,reflect:!0})],$e.prototype,"childList",2);h([m({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);h([S("disabled")],$e.prototype,"handleDisabledChange",1);h([S("attr",{waitUntilFirstUpdate:!0}),S("attr-old-value",{waitUntilFirstUpdate:!0}),S("char-data",{waitUntilFirstUpdate:!0}),S("char-data-old-value",{waitUntilFirstUpdate:!0}),S("childList",{waitUntilFirstUpdate:!0})],$e.prototype,"handleChange",1);$e.define("sl-mutation-observer");nt.define("sl-popup");var sb=L`
  ${D}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Gi=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*t,s=i-this.value/100*i;this.indicatorOffset=`${s}px`}}render(){return $`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Gi.styles=sb;h([E(".progress-ring__indicator")],Gi.prototype,"indicator",2);h([F()],Gi.prototype,"indicatorOffset",2);h([m({type:Number,reflect:!0})],Gi.prototype,"value",2);h([m()],Gi.prototype,"label",2);Gi.define("sl-progress-ring");var rb=L`
  ${D}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,re=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return $`
      <div
        part="base"
        class=${R({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};re.styles=rb;re.dependencies={"sl-icon":at};h([E(".option__label")],re.prototype,"defaultSlot",2);h([F()],re.prototype,"current",2);h([F()],re.prototype,"selected",2);h([F()],re.prototype,"hasHover",2);h([m({reflect:!0})],re.prototype,"value",2);h([m({type:Boolean,reflect:!0})],re.prototype,"disabled",2);h([S("disabled")],re.prototype,"handleDisabledChange",1);h([S("selected")],re.prototype,"handleSelectedChange",1);h([S("value")],re.prototype,"handleValueChange",1);re.define("sl-option");var ob=L`
  ${D}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Es=(e,t)=>{var s;const i=e._$AN;if(i===void 0)return!1;for(const r of i)(s=r._$AO)==null||s.call(r,t,!1),Es(r,t);return!0},Ur=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Hc=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),lb(t)}};function nb(e){this._$AN!==void 0?(Ur(this),this._$AM=e,Hc(this)):this._$AM=e}function ab(e,t=!1,i=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let o=i;o<s.length;o++)Es(s[o],!1),Ur(s[o]);else s!=null&&(Es(s,!1),Ur(s));else Es(this,e)}const lb=e=>{e.type==be.CHILD&&(e._$AP??(e._$AP=ab),e._$AQ??(e._$AQ=nb))};class cb extends tr{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,s){super._$AT(t,i,s),Hc(this),this.isConnected=t._$AU}_$AO(t,i=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),i&&(Es(this,t),Ur(this))}setValue(t){if(Rc(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hb=()=>new ub;class ub{}const Io=new WeakMap,db=Js(class extends cb{render(e){return dt}update(e,[t]){var s;const i=t!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=t,this.ct=(s=e.options)==null?void 0:s.host,this.ot(this.lt=e.element)),dt}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let i=Io.get(t);i===void 0&&(i=new WeakMap,Io.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ct,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=Io.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var pb=class{constructor(e,t,i){this.popupRef=hb(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var r;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(r=s.target.role)!=null&&r.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),r=s==null?void 0:s.assignedElements({flatten:!0}).filter(u=>u.localName==="sl-menu")[0],o=this.localize.dir()==="rtl";if(!r)return;const{left:n,top:l,width:a,height:c}=r.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+c}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const s of t.assignedElements())if(i=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let s=1;s!==i.length;++s)i[s].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((r,o)=>{var n;const l=(n=t.get(o))!=null?n:new CSSUnitValue(0,"px"),c=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return r-c.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?$`
      <sl-popup
        ${db(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:$` <slot name="submenu" hidden></slot> `}},oe=class extends O{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new tt(this),this.hasSlotController=new Qt(this,"submenu"),this.submenuController=new pb(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return L0(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return $`
      <div
        id="anchor"
        part="base"
        class=${R({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};oe.styles=ob;oe.dependencies={"sl-icon":at,"sl-popup":nt};h([E("slot:not([name])")],oe.prototype,"defaultSlot",2);h([E(".menu-item")],oe.prototype,"menuItem",2);h([m()],oe.prototype,"type",2);h([m({type:Boolean,reflect:!0})],oe.prototype,"checked",2);h([m()],oe.prototype,"value",2);h([m({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);h([S("checked")],oe.prototype,"handleCheckedChange",1);h([S("disabled")],oe.prototype,"handleDisabledChange",1);h([S("type")],oe.prototype,"handleTypeChange",1);oe.define("sl-menu-item");var fb=L`
  ${D}
  ${ir}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,j=class extends O{constructor(){super(...arguments),this.formControlController=new Ne(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Qt(this,"help-text","label"),this.localize=new tt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,s){this.input.setRangeText(e,t,i,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,s=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&!this.readonly,o=r&&(typeof this.value=="number"||this.value.length>0);return $`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${R({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${I(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${I(this.placeholder)}
              minlength=${I(this.minlength)}
              maxlength=${I(this.maxlength)}
              min=${I(this.min)}
              max=${I(this.max)}
              step=${I(this.step)}
              .value=${$i(this.value)}
              autocapitalize=${I(this.autocapitalize)}
              autocomplete=${I(this.autocomplete)}
              autocorrect=${I(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${I(this.pattern)}
              enterkeyhint=${I(this.enterkeyhint)}
              inputmode=${I(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?$`
                  <button
                    part="clear-button"
                    class=${R({input__clear:!0,"input__clear--visible":o})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?$`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?$`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:$`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};j.styles=fb;j.dependencies={"sl-icon":at};h([E(".input__control")],j.prototype,"input",2);h([F()],j.prototype,"hasFocus",2);h([m()],j.prototype,"title",2);h([m({reflect:!0})],j.prototype,"type",2);h([m()],j.prototype,"name",2);h([m()],j.prototype,"value",2);h([Si()],j.prototype,"defaultValue",2);h([m({reflect:!0})],j.prototype,"size",2);h([m({type:Boolean,reflect:!0})],j.prototype,"filled",2);h([m({type:Boolean,reflect:!0})],j.prototype,"pill",2);h([m()],j.prototype,"label",2);h([m({attribute:"help-text"})],j.prototype,"helpText",2);h([m({type:Boolean})],j.prototype,"clearable",2);h([m({type:Boolean,reflect:!0})],j.prototype,"disabled",2);h([m()],j.prototype,"placeholder",2);h([m({type:Boolean,reflect:!0})],j.prototype,"readonly",2);h([m({attribute:"password-toggle",type:Boolean})],j.prototype,"passwordToggle",2);h([m({attribute:"password-visible",type:Boolean})],j.prototype,"passwordVisible",2);h([m({attribute:"no-spin-buttons",type:Boolean})],j.prototype,"noSpinButtons",2);h([m({reflect:!0})],j.prototype,"form",2);h([m({type:Boolean,reflect:!0})],j.prototype,"required",2);h([m()],j.prototype,"pattern",2);h([m({type:Number})],j.prototype,"minlength",2);h([m({type:Number})],j.prototype,"maxlength",2);h([m()],j.prototype,"min",2);h([m()],j.prototype,"max",2);h([m()],j.prototype,"step",2);h([m()],j.prototype,"autocapitalize",2);h([m()],j.prototype,"autocorrect",2);h([m()],j.prototype,"autocomplete",2);h([m({type:Boolean})],j.prototype,"autofocus",2);h([m()],j.prototype,"enterkeyhint",2);h([m({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],j.prototype,"spellcheck",2);h([m()],j.prototype,"inputmode",2);h([S("disabled",{waitUntilFirstUpdate:!0})],j.prototype,"handleDisabledChange",1);h([S("step",{waitUntilFirstUpdate:!0})],j.prototype,"handleStepChange",1);h([S("value",{waitUntilFirstUpdate:!0})],j.prototype,"handleValueChange",1);j.define("sl-input");var mb=L`
  ${D}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,ia=class extends O{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],i=e.composedPath().find(r=>{var o;return t.includes(((o=r==null?void 0:r.getAttribute)==null?void 0:o.call(r,"role"))||"")});if(!i)return;const s=i;s.type==="checkbox"&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),i=this.getCurrentItem();let s=i?t.indexOf(i):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?s++:e.key==="ArrowUp"?s--:e.key==="Home"?s=0:e.key==="End"&&(s=t.length-1),s<0&&(s=t.length-1),s>t.length-1&&(s=0),this.setCurrentItem(t[s]),t[s].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===e?"0":"-1")})}render(){return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ia.styles=mb;h([E("slot")],ia.prototype,"defaultSlot",2);ia.define("sl-menu");var gb=L`
  ${D}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,jc=class extends O{render(){return $` <slot part="base" class="menu-label"></slot> `}};jc.styles=gb;jc.define("sl-menu-label");var bb=L`
  ${D}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Ei=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),i=this.localize.dir()==="rtl";e.preventDefault(),zs(this.base,{onMove:s=>{this.position=parseFloat(_t(s/t*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const s=e.shiftKey?10:1;let r=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight")&&(r-=s),(t&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft")&&(r+=s),e.key==="Home"&&(r=0),e.key==="End"&&(r=100),r=_t(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        id="image-comparer"
        class=${R({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Nt({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Nt({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Ei.styles=bb;Ei.scopedElement={"sl-icon":at};h([E(".image-comparer")],Ei.prototype,"base",2);h([E(".image-comparer__handle")],Ei.prototype,"handle",2);h([m({type:Number,reflect:!0})],Ei.prototype,"position",2);h([S("position",{waitUntilFirstUpdate:!0})],Ei.prototype,"handlePositionChange",1);Ei.define("sl-image-comparer");var vb=L`
  ${D}

  :host {
    display: block;
  }
`,Lo=new Map;function yb(e,t="cors"){const i=Lo.get(e);if(i!==void 0)return Promise.resolve(i);const s=fetch(e,{mode:t}).then(async r=>{const o={ok:r.ok,status:r.status,html:await r.text()};return Lo.set(e,o),o});return Lo.set(e,s),s}var Qi=class extends O{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(i=>t.setAttribute(i.name,i.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await yb(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return $`<slot></slot>`}};Qi.styles=vb;h([m()],Qi.prototype,"src",2);h([m()],Qi.prototype,"mode",2);h([m({attribute:"allow-scripts",type:Boolean})],Qi.prototype,"allowScripts",2);h([S("src")],Qi.prototype,"handleSrcChange",1);Qi.define("sl-include");at.define("sl-icon");Ct.define("sl-icon-button");var wb=L`
  ${D}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function _b(e){return!!(e.offsetParent||e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function xb(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!_b(e)||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function kb(e){var t,i;const s=bn(e),r=(t=s[0])!=null?t:null,o=(i=s[s.length-1])!=null?i:null;return{start:r,end:o}}function bn(e){const t=[];function i(s){if(s instanceof Element){if(s.hasAttribute("inert"))return;!t.includes(s)&&xb(s)&&t.push(s);const r=o=>{var n;return((n=o.getRootNode({composed:!0}))==null?void 0:n.host)!==e};s instanceof HTMLSlotElement&&r(s)&&s.assignedElements({flatten:!0}).forEach(o=>{i(o)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&i(s.shadowRoot)}[...s.children].forEach(r=>i(r))}return i(e),t.sort((s,r)=>{const o=Number(s.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-o})}var Dt=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,s,r;const o=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(r=(s=document.activeElement)==null?void 0:s.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const i=t.getAllItems(),s=i[0],r=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(s),s.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(s=>kb(s).start);let i;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=t.button;break;default:i=t}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Rt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await xt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=pt(this,"dropdown.show",{dir:this.localize.dir()});await bt(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await xt(this);const{keyframes:e,options:t}=pt(this,"dropdown.hide",{dir:this.localize.dir()});await bt(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return $`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${R({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Dt.styles=wb;Dt.dependencies={"sl-popup":nt};h([E(".dropdown")],Dt.prototype,"popup",2);h([E(".dropdown__trigger")],Dt.prototype,"trigger",2);h([E(".dropdown__panel")],Dt.prototype,"panel",2);h([m({type:Boolean,reflect:!0})],Dt.prototype,"open",2);h([m({reflect:!0})],Dt.prototype,"placement",2);h([m({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);h([m({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Dt.prototype,"stayOpenOnSelect",2);h([m({attribute:!1})],Dt.prototype,"containingElement",2);h([m({type:Number})],Dt.prototype,"distance",2);h([m({type:Number})],Dt.prototype,"skidding",2);h([m({type:Boolean})],Dt.prototype,"hoist",2);h([S("open",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleOpenChange",1);st("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});st("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Dt.define("sl-dropdown");var so=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?e:t,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),r=i[s]+this.unit,o=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:r,unitDisplay:this.display})}};h([m({type:Number})],so.prototype,"value",2);h([m()],so.prototype,"unit",2);h([m()],so.prototype,"display",2);so.define("sl-format-bytes");var te=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return $`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};h([m()],te.prototype,"date",2);h([m()],te.prototype,"weekday",2);h([m()],te.prototype,"era",2);h([m()],te.prototype,"year",2);h([m()],te.prototype,"month",2);h([m()],te.prototype,"day",2);h([m()],te.prototype,"hour",2);h([m()],te.prototype,"minute",2);h([m()],te.prototype,"second",2);h([m({attribute:"time-zone-name"})],te.prototype,"timeZoneName",2);h([m({attribute:"time-zone"})],te.prototype,"timeZone",2);h([m({attribute:"hour-format"})],te.prototype,"hourFormat",2);te.define("sl-format-date");var pe=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};h([m({type:Number})],pe.prototype,"value",2);h([m()],pe.prototype,"type",2);h([m({attribute:"no-grouping",type:Boolean})],pe.prototype,"noGrouping",2);h([m()],pe.prototype,"currency",2);h([m({attribute:"currency-display"})],pe.prototype,"currencyDisplay",2);h([m({attribute:"minimum-integer-digits",type:Number})],pe.prototype,"minimumIntegerDigits",2);h([m({attribute:"minimum-fraction-digits",type:Number})],pe.prototype,"minimumFractionDigits",2);h([m({attribute:"maximum-fraction-digits",type:Number})],pe.prototype,"maximumFractionDigits",2);h([m({attribute:"minimum-significant-digits",type:Number})],pe.prototype,"minimumSignificantDigits",2);h([m({attribute:"maximum-significant-digits",type:Number})],pe.prototype,"maximumSignificantDigits",2);pe.define("sl-format-number");var Cb=L`
  ${D}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,ro=class extends O{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};ro.styles=Cb;h([m({type:Boolean,reflect:!0})],ro.prototype,"vertical",2);h([S("vertical")],ro.prototype,"handleVerticalChange",1);ro.define("sl-divider");var $b=L`
  ${D}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*qc(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Zm(qc(e.shadowRoot.activeElement))))}function Sb(){return[...qc()].pop()}var gs=[],Xc=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var i,s;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const r=bn(this.element),o=Sb();let n=r.findIndex(a=>a===o);if(n===-1){this.currentFocus=r[0],(i=this.currentFocus)==null||i.focus({preventScroll:!0});return}const l=this.tabDirection==="forward"?1:-1;n+l>=r.length?n=0:n+l<0?n=r.length-1:n+=l,this.currentFocus=r[n],(s=this.currentFocus)==null||s.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){gs.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){gs=gs.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return gs[gs.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=bn(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],s=this.tabDirection==="forward"?t:i;typeof(s==null?void 0:s.focus)=="function"&&(this.currentFocus=s,s.focus({preventScroll:!0}))}}}};function Za(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ee=class extends O{constructor(){super(...arguments),this.hasSlotController=new Qt(this,"footer"),this.localize=new tt(this),this.modal=new Xc(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ss(this)))}disconnectedCallback(){super.disconnectedCallback(),As(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=pt(this,"drawer.denyClose",{dir:this.localize.dir()});bt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ss(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([xt(this.drawer),xt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=pt(this,`drawer.show${Za(this.placement)}`,{dir:this.localize.dir()}),i=pt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([bt(this.panel,t.keyframes,t.options),bt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),As(this)),await Promise.all([xt(this.drawer),xt(this.overlay)]);const e=pt(this,`drawer.hide${Za(this.placement)}`,{dir:this.localize.dir()}),t=pt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([bt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),bt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ss(this)),this.open&&this.contained&&(this.modal.deactivate(),As(this))}async show(){if(!this.open)return this.open=!0,Rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Rt(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${R({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${I(this.noHeader?this.label:void 0)}
          aria-labelledby=${I(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":$`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ee.styles=$b;ee.dependencies={"sl-icon-button":Ct};h([E(".drawer")],ee.prototype,"drawer",2);h([E(".drawer__panel")],ee.prototype,"panel",2);h([E(".drawer__overlay")],ee.prototype,"overlay",2);h([m({type:Boolean,reflect:!0})],ee.prototype,"open",2);h([m({reflect:!0})],ee.prototype,"label",2);h([m({reflect:!0})],ee.prototype,"placement",2);h([m({type:Boolean,reflect:!0})],ee.prototype,"contained",2);h([m({attribute:"no-header",type:Boolean,reflect:!0})],ee.prototype,"noHeader",2);h([S("open",{waitUntilFirstUpdate:!0})],ee.prototype,"handleOpenChange",1);h([S("contained",{waitUntilFirstUpdate:!0})],ee.prototype,"handleNoModalChange",1);st("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});st("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});st("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});st("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});st("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});st("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});st("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});st("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});st("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});st("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});st("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ee.define("sl-drawer");var Ab=L`
  ${D}

  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,zt=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),i=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let r=this.from,o="";i?[r,o]=this.from.trim().split("."):s&&([r,o]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(r):null;n?s?e=n.getAttribute(o)||"":i?e=n[o]||"":e=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),r=e==="success"?this.successIcon:this.errorIcon,o=pt(this,"copy.in",{dir:"ltr"}),n=pt(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?i:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=e,r.hidden=!1,await r.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await r.animate(n.keyframes,n.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return $`
      <sl-tooltip
        class=${R({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};zt.styles=Ab;zt.dependencies={"sl-icon":at,"sl-tooltip":St};h([E('slot[name="copy-icon"]')],zt.prototype,"copyIcon",2);h([E('slot[name="success-icon"]')],zt.prototype,"successIcon",2);h([E('slot[name="error-icon"]')],zt.prototype,"errorIcon",2);h([E("sl-tooltip")],zt.prototype,"tooltip",2);h([F()],zt.prototype,"isCopying",2);h([F()],zt.prototype,"status",2);h([m()],zt.prototype,"value",2);h([m()],zt.prototype,"from",2);h([m({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);h([m({attribute:"copy-label"})],zt.prototype,"copyLabel",2);h([m({attribute:"success-label"})],zt.prototype,"successLabel",2);h([m({attribute:"error-label"})],zt.prototype,"errorLabel",2);h([m({attribute:"feedback-duration",type:Number})],zt.prototype,"feedbackDuration",2);h([m({attribute:"tooltip-placement"})],zt.prototype,"tooltipPlacement",2);h([m({type:Boolean})],zt.prototype,"hoist",2);st("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});st("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});zt.define("sl-copy-button");var zb=L`
  ${D}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,fe=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await xt(this.body);const{keyframes:t,options:i}=pt(this,"details.show",{dir:this.localize.dir()});await bt(this.body,Vr(t,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await xt(this.body);const{keyframes:t,options:i}=pt(this,"details.hide",{dir:this.localize.dir()});await bt(this.body,Vr(t,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Rt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Rt(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return $`
      <details
        part="base"
        class=${R({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};fe.styles=zb;fe.dependencies={"sl-icon":at};h([E(".details")],fe.prototype,"details",2);h([E(".details__header")],fe.prototype,"header",2);h([E(".details__body")],fe.prototype,"body",2);h([E(".details__expand-icon-slot")],fe.prototype,"expandIconSlot",2);h([m({type:Boolean,reflect:!0})],fe.prototype,"open",2);h([m()],fe.prototype,"summary",2);h([m({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);h([S("open",{waitUntilFirstUpdate:!0})],fe.prototype,"handleOpenChange",1);st("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});st("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});fe.define("sl-details");var Eb=L`
  ${D}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Se=class extends O{constructor(){super(...arguments),this.hasSlotController=new Qt(this,"footer"),this.localize=new tt(this),this.modal=new Xc(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ss(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),As(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=pt(this,"dialog.denyClose",{dir:this.localize.dir()});bt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ss(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([xt(this.dialog),xt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=pt(this,"dialog.show",{dir:this.localize.dir()}),i=pt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([bt(this.panel,t.keyframes,t.options),bt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([xt(this.dialog),xt(this.overlay)]);const e=pt(this,"dialog.hide",{dir:this.localize.dir()}),t=pt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([bt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),bt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,As(this);const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Rt(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${R({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${I(this.noHeader?this.label:void 0)}
          aria-labelledby=${I(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":$`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Se.styles=Eb;Se.dependencies={"sl-icon-button":Ct};h([E(".dialog")],Se.prototype,"dialog",2);h([E(".dialog__panel")],Se.prototype,"panel",2);h([E(".dialog__overlay")],Se.prototype,"overlay",2);h([m({type:Boolean,reflect:!0})],Se.prototype,"open",2);h([m({reflect:!0})],Se.prototype,"label",2);h([m({attribute:"no-header",type:Boolean,reflect:!0})],Se.prototype,"noHeader",2);h([S("open",{waitUntilFirstUpdate:!0})],Se.prototype,"handleOpenChange",1);st("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});st("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});st("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});st("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});st("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Se.define("sl-dialog");var Tb=L`
  ${D}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Yc=class extends O{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return $` <slot></slot> `}};Yc.styles=Tb;Yc.define("sl-carousel-item");At.define("sl-checkbox");var Mb=L`
  ${D}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,rt=class extends O{constructor(){super(...arguments),this.formControlController=new Ne(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Qt(this,"[default]","prefix","suffix"),this.localize=new tt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Qr}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Br`a`:Br`button`;return $s`
      <${t}
        part="base"
        class=${R({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${I(e?void 0:this.disabled)}
        type=${I(e?void 0:this.type)}
        title=${this.title}
        name=${I(e?void 0:this.name)}
        value=${I(e?void 0:this.value)}
        href=${I(e?this.href:void 0)}
        target=${I(e?this.target:void 0)}
        download=${I(e?this.download:void 0)}
        rel=${I(e?this.rel:void 0)}
        role=${I(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?$s` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?$s`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};rt.styles=Vc;rt.dependencies={"sl-icon":at,"sl-spinner":eo};h([E(".button")],rt.prototype,"button",2);h([F()],rt.prototype,"hasFocus",2);h([F()],rt.prototype,"invalid",2);h([m()],rt.prototype,"title",2);h([m({reflect:!0})],rt.prototype,"variant",2);h([m({reflect:!0})],rt.prototype,"size",2);h([m({type:Boolean,reflect:!0})],rt.prototype,"caret",2);h([m({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);h([m({type:Boolean,reflect:!0})],rt.prototype,"loading",2);h([m({type:Boolean,reflect:!0})],rt.prototype,"outline",2);h([m({type:Boolean,reflect:!0})],rt.prototype,"pill",2);h([m({type:Boolean,reflect:!0})],rt.prototype,"circle",2);h([m()],rt.prototype,"type",2);h([m()],rt.prototype,"name",2);h([m()],rt.prototype,"value",2);h([m()],rt.prototype,"href",2);h([m()],rt.prototype,"target",2);h([m()],rt.prototype,"rel",2);h([m()],rt.prototype,"download",2);h([m()],rt.prototype,"form",2);h([m({attribute:"formaction"})],rt.prototype,"formAction",2);h([m({attribute:"formenctype"})],rt.prototype,"formEnctype",2);h([m({attribute:"formmethod"})],rt.prototype,"formMethod",2);h([m({attribute:"formnovalidate",type:Boolean})],rt.prototype,"formNoValidate",2);h([m({attribute:"formtarget"})],rt.prototype,"formTarget",2);h([S("disabled",{waitUntilFirstUpdate:!0})],rt.prototype,"handleDisabledChange",1);function Tt(e,t){Ob(e)&&(e="100%");const i=Ib(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),i&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function yr(e){return Math.min(1,Math.max(0,e))}function Ob(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Ib(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Wc(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function wr(e){return Number(e)<=1?`${Number(e)*100}%`:e}function vi(e){return e.length===1?"0"+e:String(e)}function Lb(e,t,i){return{r:Tt(e,255)*255,g:Tt(t,255)*255,b:Tt(i,255)*255}}function Ja(e,t,i){e=Tt(e,255),t=Tt(t,255),i=Tt(i,255);const s=Math.max(e,t,i),r=Math.min(e,t,i);let o=0,n=0;const l=(s+r)/2;if(s===r)n=0,o=0;else{const a=s-r;switch(n=l>.5?a/(2-s-r):a/(s+r),s){case e:o=(t-i)/a+(t<i?6:0);break;case t:o=(i-e)/a+2;break;case i:o=(e-t)/a+4;break}o/=6}return{h:o,s:n,l}}function Do(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*(6*i):i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function Db(e,t,i){let s,r,o;if(e=Tt(e,360),t=Tt(t,100),i=Tt(i,100),t===0)r=i,o=i,s=i;else{const n=i<.5?i*(1+t):i+t-i*t,l=2*i-n;s=Do(l,n,e+1/3),r=Do(l,n,e),o=Do(l,n,e-1/3)}return{r:s*255,g:r*255,b:o*255}}function tl(e,t,i){e=Tt(e,255),t=Tt(t,255),i=Tt(i,255);const s=Math.max(e,t,i),r=Math.min(e,t,i);let o=0;const n=s,l=s-r,a=s===0?0:l/s;if(s===r)o=0;else{switch(s){case e:o=(t-i)/l+(t<i?6:0);break;case t:o=(i-e)/l+2;break;case i:o=(e-t)/l+4;break}o/=6}return{h:o,s:a,v:n}}function Pb(e,t,i){e=Tt(e,360)*6,t=Tt(t,100),i=Tt(i,100);const s=Math.floor(e),r=e-s,o=i*(1-t),n=i*(1-r*t),l=i*(1-(1-r)*t),a=s%6,c=[i,n,o,o,l,i][a],u=[l,i,i,n,o,o][a],d=[o,o,l,i,i,n][a];return{r:c*255,g:u*255,b:d*255}}function el(e,t,i,s){const r=[vi(Math.round(e).toString(16)),vi(Math.round(t).toString(16)),vi(Math.round(i).toString(16))];return s&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Rb(e,t,i,s,r){const o=[vi(Math.round(e).toString(16)),vi(Math.round(t).toString(16)),vi(Math.round(i).toString(16)),vi(Fb(s))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Fb(e){return Math.round(parseFloat(e)*255).toString(16)}function il(e){return jt(e)/255}function jt(e){return parseInt(e,16)}function Nb(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const vn={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Vb(e){let t={r:0,g:0,b:0},i=1,s=null,r=null,o=null,n=!1,l=!1;return typeof e=="string"&&(e=Hb(e)),typeof e=="object"&&(Le(e.r)&&Le(e.g)&&Le(e.b)?(t=Lb(e.r,e.g,e.b),n=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Le(e.h)&&Le(e.s)&&Le(e.v)?(s=wr(e.s),r=wr(e.v),t=Pb(e.h,s,r),n=!0,l="hsv"):Le(e.h)&&Le(e.s)&&Le(e.l)&&(s=wr(e.s),o=wr(e.l),t=Db(e.h,s,o),n=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(i=e.a)),i=Wc(i),{ok:n,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:i}}const Bb="[-\\+]?\\d+%?",Ub="[-\\+]?\\d*\\.\\d+%?",Ye=`(?:${Ub})|(?:${Bb})`,Po=`[\\s|\\(]+(${Ye})[,|\\s]+(${Ye})[,|\\s]+(${Ye})\\s*\\)?`,Ro=`[\\s|\\(]+(${Ye})[,|\\s]+(${Ye})[,|\\s]+(${Ye})[,|\\s]+(${Ye})\\s*\\)?`,ne={CSS_UNIT:new RegExp(Ye),rgb:new RegExp("rgb"+Po),rgba:new RegExp("rgba"+Ro),hsl:new RegExp("hsl"+Po),hsla:new RegExp("hsla"+Ro),hsv:new RegExp("hsv"+Po),hsva:new RegExp("hsva"+Ro),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Hb(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(vn[e])e=vn[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=ne.rgb.exec(e);return i?{r:i[1],g:i[2],b:i[3]}:(i=ne.rgba.exec(e),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=ne.hsl.exec(e),i?{h:i[1],s:i[2],l:i[3]}:(i=ne.hsla.exec(e),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=ne.hsv.exec(e),i?{h:i[1],s:i[2],v:i[3]}:(i=ne.hsva.exec(e),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=ne.hex8.exec(e),i?{r:jt(i[1]),g:jt(i[2]),b:jt(i[3]),a:il(i[4]),format:t?"name":"hex8"}:(i=ne.hex6.exec(e),i?{r:jt(i[1]),g:jt(i[2]),b:jt(i[3]),format:t?"name":"hex"}:(i=ne.hex4.exec(e),i?{r:jt(i[1]+i[1]),g:jt(i[2]+i[2]),b:jt(i[3]+i[3]),a:il(i[4]+i[4]),format:t?"name":"hex8"}:(i=ne.hex3.exec(e),i?{r:jt(i[1]+i[1]),g:jt(i[2]+i[2]),b:jt(i[3]+i[3]),format:t?"name":"hex"}:!1)))))))))}function Le(e){return!!ne.CSS_UNIT.exec(String(e))}class gt{constructor(t="",i={}){if(t instanceof gt)return t;typeof t=="number"&&(t=Nb(t)),this.originalInput=t;const s=Vb(t);this.originalInput=t,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??s.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let i,s,r;const o=t.r/255,n=t.g/255,l=t.b/255;return o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*i+.7152*s+.0722*r}getAlpha(){return this.a}setAlpha(t){return this.a=Wc(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=tl(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=tl(this.r,this.g,this.b),i=Math.round(t.h*360),s=Math.round(t.s*100),r=Math.round(t.v*100);return this.a===1?`hsv(${i}, ${s}%, ${r}%)`:`hsva(${i}, ${s}%, ${r}%, ${this.roundA})`}toHsl(){const t=Ja(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Ja(this.r,this.g,this.b),i=Math.round(t.h*360),s=Math.round(t.s*100),r=Math.round(t.l*100);return this.a===1?`hsl(${i}, ${s}%, ${r}%)`:`hsla(${i}, ${s}%, ${r}%, ${this.roundA})`}toHex(t=!1){return el(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Rb(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),i=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${t}, ${i}, ${s})`:`rgba(${t}, ${i}, ${s}, ${this.roundA})`}toPercentageRgb(){const t=i=>`${Math.round(Tt(i,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=i=>Math.round(Tt(i,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+el(this.r,this.g,this.b,!1);for(const[i,s]of Object.entries(vn))if(t===s)return i;return!1}toString(t){const i=!!t;t=t??this.format;let s=!1;const r=this.a<1&&this.a>=0;return!i&&r&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(s=this.toRgbString()),t==="prgb"&&(s=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(s=this.toHexString()),t==="hex3"&&(s=this.toHexString(!0)),t==="hex4"&&(s=this.toHex8String(!0)),t==="hex8"&&(s=this.toHex8String()),t==="name"&&(s=this.toName()),t==="hsl"&&(s=this.toHslString()),t==="hsv"&&(s=this.toHsvString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new gt(this.toString())}lighten(t=10){const i=this.toHsl();return i.l+=t/100,i.l=yr(i.l),new gt(i)}brighten(t=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(t/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(t/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(t/100)))),new gt(i)}darken(t=10){const i=this.toHsl();return i.l-=t/100,i.l=yr(i.l),new gt(i)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const i=this.toHsl();return i.s-=t/100,i.s=yr(i.s),new gt(i)}saturate(t=10){const i=this.toHsl();return i.s+=t/100,i.s=yr(i.s),new gt(i)}greyscale(){return this.desaturate(100)}spin(t){const i=this.toHsl(),s=(i.h+t)%360;return i.h=s<0?360+s:s,new gt(i)}mix(t,i=50){const s=this.toRgb(),r=new gt(t).toRgb(),o=i/100,n={r:(r.r-s.r)*o+s.r,g:(r.g-s.g)*o+s.g,b:(r.b-s.b)*o+s.b,a:(r.a-s.a)*o+s.a};return new gt(n)}analogous(t=6,i=30){const s=this.toHsl(),r=360/i,o=[this];for(s.h=(s.h-(r*t>>1)+720)%360;--t;)s.h=(s.h+r)%360,o.push(new gt(s));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new gt(t)}monochromatic(t=6){const i=this.toHsv(),{h:s}=i,{s:r}=i;let{v:o}=i;const n=[],l=1/t;for(;t--;)n.push(new gt({h:s,s:r,v:o})),o=(o+l)%1;return n}splitcomplement(){const t=this.toHsl(),{h:i}=t;return[this,new gt({h:(i+72)%360,s:t.s,l:t.l}),new gt({h:(i+216)%360,s:t.s,l:t.l})]}onBackground(t){const i=this.toRgb(),s=new gt(t).toRgb(),r=i.a+s.a*(1-i.a);return new gt({r:(i.r*i.a+s.r*s.a*(1-i.a))/r,g:(i.g*i.a+s.g*s.a*(1-i.a))/r,b:(i.b*i.a+s.b*s.a*(1-i.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const i=this.toHsl(),{h:s}=i,r=[this],o=360/t;for(let n=1;n<t;n++)r.push(new gt({h:(s+n*o)%360,s:i.s,l:i.l}));return r}equals(t){return this.toRgbString()===new gt(t).toRgbString()}}var sl="EyeDropper"in window,G=class extends O{constructor(){super(),this.formControlController=new Ne(this),this.isSafeValue=!1,this.localize=new tt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();let r=this.value,o=this.value;i.focus(),e.preventDefault(),zs(t,{onMove:n=>{this.alpha=_t(n/s*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=t.querySelector(".color-picker__slider-handle"),{width:s}=t.getBoundingClientRect();let r=this.value,o=this.value;i.focus(),e.preventDefault(),zs(t,{onMove:n=>{this.hue=_t(n/s*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),i=t.querySelector(".color-picker__grid-handle"),{width:s,height:r}=t.getBoundingClientRect();let o=this.value,n=this.value;i.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,zs(t,{onMove:(l,a)=>{this.saturation=_t(l/s*100,0,100),this.brightness=_t(100-a/r*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=_t(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=_t(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=_t(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=_t(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=_t(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=_t(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=_t(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=_t(this.brightness-t,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,i=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new gt(e);if(!t.isValid)return null;const i=t.toHsl(),s={h:i.h,s:i.s*100,l:i.l*100,a:i.a},r=t.toRgb(),o=t.toHexString(),n=t.toHex8String(),l=t.toHsv(),a={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(n)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!sl)return;new EyeDropper().open().then(t=>{const i=this.value;this.setColor(t.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,i,s=100){const r=new gt(`hsva(${e}, ${t}, ${i}, ${s/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(t);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(r=>r.trim()!==""),s=$`
      <div
        part="base"
        class=${R({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?$`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Nt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${R({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Nt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${I(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Nt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${I(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?$`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Nt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Nt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${I(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Nt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":$`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${sl?$`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?$`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(r=>{const o=this.parseColor(r);return o?$`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${I(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${r}
                      @click=${()=>this.selectSwatch(r)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Nt({backgroundColor:o.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${r}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?s:$`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${R({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Nt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};G.styles=Mb;G.dependencies={"sl-button-group":zi,"sl-button":rt,"sl-dropdown":Dt,"sl-icon":at,"sl-input":j,"sl-visually-hidden":Yn};h([E('[part~="base"]')],G.prototype,"base",2);h([E('[part~="input"]')],G.prototype,"input",2);h([E(".color-dropdown")],G.prototype,"dropdown",2);h([E('[part~="preview"]')],G.prototype,"previewButton",2);h([E('[part~="trigger"]')],G.prototype,"trigger",2);h([F()],G.prototype,"hasFocus",2);h([F()],G.prototype,"isDraggingGridHandle",2);h([F()],G.prototype,"isEmpty",2);h([F()],G.prototype,"inputValue",2);h([F()],G.prototype,"hue",2);h([F()],G.prototype,"saturation",2);h([F()],G.prototype,"brightness",2);h([F()],G.prototype,"alpha",2);h([m()],G.prototype,"value",2);h([Si()],G.prototype,"defaultValue",2);h([m()],G.prototype,"label",2);h([m()],G.prototype,"format",2);h([m({type:Boolean,reflect:!0})],G.prototype,"inline",2);h([m({reflect:!0})],G.prototype,"size",2);h([m({attribute:"no-format-toggle",type:Boolean})],G.prototype,"noFormatToggle",2);h([m()],G.prototype,"name",2);h([m({type:Boolean,reflect:!0})],G.prototype,"disabled",2);h([m({type:Boolean})],G.prototype,"hoist",2);h([m({type:Boolean})],G.prototype,"opacity",2);h([m({type:Boolean})],G.prototype,"uppercase",2);h([m()],G.prototype,"swatches",2);h([m({reflect:!0})],G.prototype,"form",2);h([m({type:Boolean,reflect:!0})],G.prototype,"required",2);h([S("format",{waitUntilFirstUpdate:!0})],G.prototype,"handleFormatChange",1);h([S("opacity",{waitUntilFirstUpdate:!0})],G.prototype,"handleOpacityChange",1);h([S("value")],G.prototype,"handleValueChange",1);G.define("sl-color-picker");var jb=L`
  ${D}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Kc=class extends O{constructor(){super(...arguments),this.hasSlotController=new Qt(this,"footer","header","image")}render(){return $`
      <div
        part="base"
        class=${R({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Kc.styles=jb;Kc.define("sl-card");var qb=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Xb=L`
  ${D}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Yb=class{constructor(e){this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate())},this.handleScrollEnd=()=>{this.scrolling&&!this.dragging&&(this.scrolling=!1,this.host.requestUpdate())},this.handlePointerDown=t=>{if(t.pointerType==="touch")return;this.mouseDragging&&t.button===0&&(t.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=t=>{const i=this.host.scrollContainer,s=!!t.movementX||!!t.movementY;!this.dragging&&s?(i.setPointerCapture(t.pointerId),this.handleDragStart()):i.hasPointerCapture(t.pointerId)&&this.handleDrag(t)},this.handlePointerUp=t=>{this.host.scrollContainer.releasePointerCapture(t.pointerId),this.handleDragEnd()},this.host=e,e.addController(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("scrollend",this.handleScrollEnd,!0),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp)}hostDisconnected(){const t=this.host.scrollContainer;t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("scrollend",this.handleScrollEnd,!0),t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointercancel",this.handlePointerUp)}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove);const i=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("scroll-snap-type");const r=t.scrollLeft,o=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:i,top:s,behavior:"auto"}),t.scrollTo({left:r,top:o,behavior:ta()?"auto":"smooth"}),requestAnimationFrame(async()=>{(i!==r||s!==o)&&await Rt(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,e.requestUpdate()})}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Wb(e,t){if(e!==void 0){let i=0;for(const s of e)yield t(s,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Kb(e,t,i=1){const s=t===void 0?0:e;t??(t=e);for(let r=s;i>0?r<t:t<r;r+=i)yield r}var Gb=(e,t)=>{let i=0;return function(...s){window.clearTimeout(i),i=window.setTimeout(()=>{e.call(this,...s)},t)}},rl=(e,t,i)=>{const s=e[t];e[t]=function(...r){s.call(this,...r),i.call(this,s,...r)}},Qb="onscrollend"in window;if(!Qb){const e=new Set,t=new WeakMap,i=r=>{e.add(r.pointerId)},s=r=>{e.delete(r.pointerId)};document.addEventListener("pointerdown",i),document.addEventListener("pointerup",s),rl(EventTarget.prototype,"addEventListener",function(r,o){if(o!=="scroll")return;const n=Gb(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);r.call(this,"scroll",n,{passive:!0}),t.set(this,n)}),rl(EventTarget.prototype,"removeEventListener",function(r,o){if(o!=="scroll")return;const n=t.get(this);n&&r.call(this,"scroll",n,{passive:!0})})}var kt=class extends O{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new qb(this,()=>this.next()),this.scrollController=new Yb(this),this.intersectionObserverEntries=new Map,this.localize=new tt(this),this.handleSlotChange=e=>{e.some(i=>[...i.addedNodes,...i.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(i=>{this.intersectionObserverEntries.set(i.target,i);const s=i.target;s.toggleAttribute("inert",!i.isIntersecting),s.classList.toggle("--in-view",i.isIntersecting),s.setAttribute("aria-hidden",i.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:i,loop:s}=this,r=s?e/i:(e-t)/i+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,i=this.localize.dir()==="rtl",s=t.closest('[part~="pagination-item"]')!==null,r=e.key==="ArrowDown"||!i&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft",o=e.key==="ArrowUp"||!i&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight";e.preventDefault(),o&&this.previous(),r&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var n;const l=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleScrollEnd(){const e=this.getSlides(),i=[...this.intersectionObserverEntries.values()].find(s=>s.isIntersecting);if(this.loop&&(i!=null&&i.target.hasAttribute("data-clone"))){const s=Number(i.target.getAttribute("data-clone"));this.goToSlide(s,"auto")}else if(i){const s=e.indexOf(i.target);this.activeSlide=Math.ceil(s/this.slidesPerMove)*this.slidesPerMove}}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){const e=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((t,i)=>{e.unobserve(t),t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",i+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)}),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,i=e.slice(-t),s=e.slice(0,t);i.reverse().forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(e.length-o-1)),this.prepend(n)}),s.forEach((r,o)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(o)),this.append(n)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,i)=>{t.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((i,s)=>{(s+t)%t===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:i,loop:s,scrollContainer:r}=this,o=this.getSlides(),n=this.getSlides({excludeClones:!1});if(!o.length)return;const l=s?(e+o.length)%o.length:_t(e,0,o.length-1);this.activeSlide=l;const a=_t(e+(s?i:0),0,n.length-1),c=n[a],u=r.getBoundingClientRect(),d=c.getBoundingClientRect();r.scrollTo({left:d.left-u.left+r.scrollLeft,top:d.top-u.top+r.scrollTop,behavior:ta()?"auto":t})}render(){const{scrollController:e,slidesPerMove:t}=this,i=this.getPageCount(),s=this.getCurrentPage(),r=this.canScrollPrev(),o=this.canScrollNext(),n=this.localize.dir()==="ltr";return $`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${R({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?$`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${R({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${R({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?$`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Wb(Kb(i),l=>{const a=l===s;return $`
                    <button
                      part="pagination-item ${a?"pagination-item--active":""}"
                      class="${R({"carousel__pagination-item":!0,"carousel__pagination-item--active":a})}"
                      role="tab"
                      aria-selected="${a?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,i)}"
                      tabindex=${a?"0":"-1"}
                      @click=${()=>this.goToSlide(l*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};kt.styles=Xb;kt.dependencies={"sl-icon":at};h([m({type:Boolean,reflect:!0})],kt.prototype,"loop",2);h([m({type:Boolean,reflect:!0})],kt.prototype,"navigation",2);h([m({type:Boolean,reflect:!0})],kt.prototype,"pagination",2);h([m({type:Boolean,reflect:!0})],kt.prototype,"autoplay",2);h([m({type:Number,attribute:"autoplay-interval"})],kt.prototype,"autoplayInterval",2);h([m({type:Number,attribute:"slides-per-page"})],kt.prototype,"slidesPerPage",2);h([m({type:Number,attribute:"slides-per-move"})],kt.prototype,"slidesPerMove",2);h([m()],kt.prototype,"orientation",2);h([m({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],kt.prototype,"mouseDragging",2);h([E(".carousel__slides")],kt.prototype,"scrollContainer",2);h([E(".carousel__pagination")],kt.prototype,"paginationContainer",2);h([F()],kt.prototype,"activeSlide",2);h([S("loop",{waitUntilFirstUpdate:!0}),S("slidesPerPage",{waitUntilFirstUpdate:!0})],kt.prototype,"initializeSlides",1);h([S("activeSlide")],kt.prototype,"handelSlideChange",1);h([S("slidesPerMove")],kt.prototype,"updateSlidesSnap",1);h([S("autoplay")],kt.prototype,"handleAutoplayChange",1);h([S("mouseDragging")],kt.prototype,"handleMouseDraggingChange",1);kt.define("sl-carousel");rt.define("sl-button");zi.define("sl-button-group");var Zb=L`
  ${D}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,rr=class extends O{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return $`
      <span
        part="base"
        class=${R({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};rr.styles=Zb;h([m({reflect:!0})],rr.prototype,"variant",2);h([m({type:Boolean,reflect:!0})],rr.prototype,"pill",2);h([m({type:Boolean,reflect:!0})],rr.prototype,"pulse",2);rr.define("sl-badge");var Jb=L`
  ${D}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,or=class extends O{constructor(){super(...arguments),this.hasSlotController=new Qt(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return $`
      <div
        part="base"
        class=${R({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?$`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${I(this.target?this.target:void 0)}"
                rel=${I(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:$`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};or.styles=Jb;h([m()],or.prototype,"href",2);h([m()],or.prototype,"target",2);h([m()],or.prototype,"rel",2);or.define("sl-breadcrumb-item");var tv=L`
  ${D}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Zi=class extends O{constructor(){super(...arguments),this.localize=new tt(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,i)=>{const s=t.querySelector('[slot="separator"]');s===null?t.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),i===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),$`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Zi.styles=tv;Zi.dependencies={"sl-icon":at};h([E("slot")],Zi.prototype,"defaultSlot",2);h([E('slot[name="separator"]')],Zi.prototype,"separatorSlot",2);h([m()],Zi.prototype,"label",2);Zi.define("sl-breadcrumb");var ev=L`
  ${D}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Ae=class extends O{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=$`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=$``;return this.initials?t=$`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=$`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,$`
      <div
        part="base"
        class=${R({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};Ae.styles=ev;Ae.dependencies={"sl-icon":at};h([F()],Ae.prototype,"hasError",2);h([m()],Ae.prototype,"image",2);h([m()],Ae.prototype,"label",2);h([m()],Ae.prototype,"initials",2);h([m()],Ae.prototype,"loading",2);h([m({reflect:!0})],Ae.prototype,"shape",2);h([S("image")],Ae.prototype,"handleImageChange",1);Ae.define("sl-avatar");var iv=L`
  ${D}

  :host {
    display: contents;
  }
`;const sv=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],rv=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],ov=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],nv=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],av=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],lv=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],cv=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],hv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],uv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],dv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],pv=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],fv=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],mv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],gv=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],bv=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],vv=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],yv=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],wv=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],_v=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],xv=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],kv=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Cv=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],$v=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Sv=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Av=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],zv=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ev=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Tv=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Mv=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Ov=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Iv=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Lv=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Dv=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Pv=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Rv=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Fv=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Nv=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Vv=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Bv=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Uv=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Hv=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jv=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qv=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xv=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Yv=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Wv=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Kv=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Gv=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Qv=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Zv=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Jv=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],ty=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],ey=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],iy=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],sy=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],ry=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],oy=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],ny=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],ay=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],ly=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],cy=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],hy=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],uy=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],dy=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],py=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],fy=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],my=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],gy=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],by=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],vy=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],yy=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],wy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],_y=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],xy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],ky=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Cy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],$y=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Sy=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ay=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],zy=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ey=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Ty=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],My=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Oy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Iy=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Ly=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Dy=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Py=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Ry=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Fy=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ny=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Vy=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],By=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Uy=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Hy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],jy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],qy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Xy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Gc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Yy=Object.freeze(Object.defineProperty({__proto__:null,backInDown:gv,backInLeft:bv,backInRight:vv,backInUp:yv,backOutDown:wv,backOutLeft:_v,backOutRight:xv,backOutUp:kv,bounce:sv,bounceIn:Cv,bounceInDown:$v,bounceInLeft:Sv,bounceInRight:Av,bounceInUp:zv,bounceOut:Ev,bounceOutDown:Tv,bounceOutLeft:Mv,bounceOutRight:Ov,bounceOutUp:Iv,easings:Gc,fadeIn:Lv,fadeInBottomLeft:Dv,fadeInBottomRight:Pv,fadeInDown:Rv,fadeInDownBig:Fv,fadeInLeft:Nv,fadeInLeftBig:Vv,fadeInRight:Bv,fadeInRightBig:Uv,fadeInTopLeft:Hv,fadeInTopRight:jv,fadeInUp:qv,fadeInUpBig:Xv,fadeOut:Yv,fadeOutBottomLeft:Wv,fadeOutBottomRight:Kv,fadeOutDown:Gv,fadeOutDownBig:Qv,fadeOutLeft:Zv,fadeOutLeftBig:Jv,fadeOutRight:ty,fadeOutRightBig:ey,fadeOutTopLeft:iy,fadeOutTopRight:sy,fadeOutUp:ry,fadeOutUpBig:oy,flash:rv,flip:ny,flipInX:ay,flipInY:ly,flipOutX:cy,flipOutY:hy,headShake:ov,heartBeat:nv,hinge:Iy,jackInTheBox:Ly,jello:av,lightSpeedInLeft:uy,lightSpeedInRight:dy,lightSpeedOutLeft:py,lightSpeedOutRight:fy,pulse:lv,rollIn:Dy,rollOut:Py,rotateIn:my,rotateInDownLeft:gy,rotateInDownRight:by,rotateInUpLeft:vy,rotateInUpRight:yy,rotateOut:wy,rotateOutDownLeft:_y,rotateOutDownRight:xy,rotateOutUpLeft:ky,rotateOutUpRight:Cy,rubberBand:cv,shake:hv,shakeX:uv,shakeY:dv,slideInDown:$y,slideInLeft:Sy,slideInRight:Ay,slideInUp:zy,slideOutDown:Ey,slideOutLeft:Ty,slideOutRight:My,slideOutUp:Oy,swing:pv,tada:fv,wobble:mv,zoomIn:Ry,zoomInDown:Fy,zoomInLeft:Ny,zoomInRight:Vy,zoomInUp:By,zoomOut:Uy,zoomOutDown:Hy,zoomOutLeft:jy,zoomOutRight:qy,zoomOutUp:Xy},Symbol.toStringTag,{value:"Module"}));var Et=class extends O{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const i=(e=Gc[this.easing])!=null?e:this.easing,s=(t=this.keyframes)!=null?t:Yy[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!s?!1:(this.destroyAnimation(),this.animation=o.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};Et.styles=iv;h([kg("slot")],Et.prototype,"defaultSlot",2);h([m()],Et.prototype,"name",2);h([m({type:Boolean,reflect:!0})],Et.prototype,"play",2);h([m({type:Number})],Et.prototype,"delay",2);h([m()],Et.prototype,"direction",2);h([m({type:Number})],Et.prototype,"duration",2);h([m()],Et.prototype,"easing",2);h([m({attribute:"end-delay",type:Number})],Et.prototype,"endDelay",2);h([m()],Et.prototype,"fill",2);h([m({type:Number})],Et.prototype,"iterations",2);h([m({attribute:"iteration-start",type:Number})],Et.prototype,"iterationStart",2);h([m({attribute:!1})],Et.prototype,"keyframes",2);h([m({attribute:"playback-rate",type:Number})],Et.prototype,"playbackRate",2);h([S(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Et.prototype,"handleAnimationChange",1);h([S("play")],Et.prototype,"handlePlayChange",1);h([S("playbackRate")],Et.prototype,"handlePlaybackRateChange",1);Et.define("sl-animation");var Wy=L`
  ${D}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Oi=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),ze=class extends O{constructor(){super(...arguments),this.hasSlotController=new Qt(this,"icon","suffix"),this.localize=new tt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await xt(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=pt(this,"alert.show",{dir:this.localize.dir()});await bt(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await xt(this.base);const{keyframes:e,options:t}=pt(this,"alert.hide",{dir:this.localize.dir()});await bt(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Rt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Rt(this,"sl-after-hide")}async toast(){return new Promise(e=>{Oi.parentElement===null&&document.body.append(Oi),Oi.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Oi.removeChild(this),e(),Oi.querySelector("sl-alert")===null&&Oi.remove()},{once:!0})})}render(){return $`
      <div
        part="base"
        class=${R({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};ze.styles=Wy;ze.dependencies={"sl-icon-button":Ct};h([E('[part~="base"]')],ze.prototype,"base",2);h([m({type:Boolean,reflect:!0})],ze.prototype,"open",2);h([m({type:Boolean,reflect:!0})],ze.prototype,"closable",2);h([m({reflect:!0})],ze.prototype,"variant",2);h([m({type:Number})],ze.prototype,"duration",2);h([S("open",{waitUntilFirstUpdate:!0})],ze.prototype,"handleOpenChange",1);h([S("duration")],ze.prototype,"handleDurationChange",1);st("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});st("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ze.define("sl-alert");var Ky=L`
  ${D}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,me=class extends O{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:i}=this.animatedImage;e.width=t,e.height=i,e.getContext("2d").drawImage(this.animatedImage,0,0,t,i),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return $`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?$`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};me.styles=Ky;me.dependencies={"sl-icon":at};h([E(".animated-image__animated")],me.prototype,"animatedImage",2);h([F()],me.prototype,"frozenFrame",2);h([F()],me.prototype,"isLoaded",2);h([m()],me.prototype,"src",2);h([m()],me.prototype,"alt",2);h([m({type:Boolean,reflect:!0})],me.prototype,"play",2);h([S("play",{waitUntilFirstUpdate:!0})],me.prototype,"handlePlayChange",1);h([S("src")],me.prototype,"handleSrcChange",1);me.define("sl-animated-image");class Gy{constructor(){this.settingsContainer=null,this.settings={}}init({settingsElement:t}){this.settingsContainer=document.querySelector(t)}addSetting(t){if(t.name&&t.name.includes("-"))throw new Error("The name `"+t.name+"` must not contain a hypen. Use camelCase instead to create a valid variable name.");const{sltype:i,name:s,options:r}=t;let o=document.createElement(i);if(i!=="sl-divider"){for(let[n,l]of Object.entries(r)){if(l!==null){const c=new URL(window.location.href).searchParams.get(s);c!==null&&(i==="sl-switch"||i==="sl-checkbox"?n==="checked"&&(l=c==="true"):n==="value"&&(l=c)),o[n]=l}n==="label"&&(o.innerText=l)}if(this.settings[s]=o,this.hasOwnProperty(s))throw new Error(`The name ${s} is already in use.`);Object.defineProperty(this,s,{get:()=>this.getSettingValue(s),set:n=>{this.settings[s].value=n,ol(s,n)}})}this.settingsContainer.appendChild(o),o.addEventListener("sl-change",()=>{ol(s,this.getSettingValue(s))})}add(...t){t.forEach(i=>this.addSetting(i))}getSettingValue(t){if(!this.settings[t])throw new Error(`Setting ${t} not found.`);return this.settings[t].type==="number"?Number(this.settings[t].value):this.settings[t].value??this.settings[t].checked??null}}function ol(e,t){const i=new URL(window.location.href);i.searchParams.set(e,t),window.history.replaceState({},"",i)}const Fo=new Gy,Ht=r1();function Qc(e){e.clear();const{width:t,height:i}=e.viewbox(),s=Ht.debug??!1;if(Ht.resetSeed||!Ht.seedValue){let y=Math.floor(Math.random()*1e7);Ht.seedValue=y,ua(y)}else Ht.seedValue&&ua(Ht.seedValue);const r=t/2,o=i/2,n=i/2.5;let l=Ht.numPoints??4,a=[];for(let y=0;y<l;y++){const _=Zo(0,Math.PI*2),k=Zo(0,n),x=r+k*Math.cos(_),w=o+k*Math.sin(_);a.push({x,y:w})}a=qm(a,50,!0);const c=Zy(a,!1);if(s&&c.forEach(y=>{e.circle(20).center(y.x,y.y).fill("#ccc")}),s)for(let y=0;y<c.length;y++)e.text(`${y+1}`).font({fill:"#f06"}).move(c[y].x-4.5,c[y].y-9.5),e.line(c[y].x,c[y].y,c[y+1].x,c[y+1].y).stroke({width:1}).stroke({color:"#0e0"});let u=$d(a,Ht.tension,Ht.closeLoop);s&&e.path(u).fill("rgba(0, 55, 255, 0.1)").stroke({width:1}).stroke({color:"#333"});const d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d",u),Sd(d,Ht.numberOfDivisions??5).forEach((y,_)=>{console.log(_+1),s&&(e.text(`${_+1}`).center(y.x,y.y-20),e.circle(5).center(y.x,y.y).fill("#00f"))});let f=Ht.amplitude??5,g=Ht.frequency??25,b=Ht.resolution??100,v=Jy(u,5,.5);v=s1(u,f,g,b),console.log("values passed in:",{pathString:u},{amplitude:5},{frequency:25},{resolution:100}),console.log("!sineWavePath",v),e.path(v).fill("none").stroke({width:3}).stroke({color:"#000"})}function Qy(e){let t=0,i=0;return e.forEach(s=>{t+=s.x,i+=s.y}),{x:t/e.length,y:i/e.length}}function nl(e,t){return Math.atan2(t.y-e.y,t.x-e.x)}function Zy(e,t=!1){const i=Qy(e);return e.sort((r,o)=>nl(i,r)-nl(i,o))}function Jy(e,t,i){function s(a){const c=/([ML])([^ML]+)/gi;let u;const d=[];for(;(u=c.exec(a))!==null;){const[p,f,g]=u,b=g.trim().split(/\s+|,/).map(Number);for(let v=0;v<b.length;v+=2)d.push({x:b[v],y:b[v+1]})}return d}function r(a,c){const u=c.x-a.x,d=c.y-a.y,p=Math.sqrt(u*u+d*d);return{x:-d/p,y:u/p}}const o=s(e);if(o.length<2)return"";let n="M",l=0;for(let a=0;a<o.length-1;a++){const c=o[a],u=o[a+1],d=r(c,u),p=20;for(let f=0;f<=p;f++){const g=f/p,b={x:c.x+g*(u.x-c.x),y:c.y+g*(u.y-c.y)},v=t*Math.sin(2*Math.PI*i*l),y={x:b.x+v*d.x,y:b.y+v*d.y};n+=`${a===0&&f===0?"":"L"}${y.x},${y.y}`,l+=1/p}}return n}function t1(e){let t=[];return(e.match(/[MLZ][^MLZ]+/gi)||[]).forEach(s=>{const r=s.slice(1).trim().split(/\s+|,/).map(Number);for(let o=0;o<r.length;o+=2)t.push({x:r[o],y:r[o+1]})}),t}function al(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}function e1(e,t,i){return{x:e.x+(t.x-e.x)*i,y:e.y+(t.y-e.y)*i}}function i1(e,t){const i=t.x-e.x,s=t.y-e.y,r=Math.sqrt(i*i+s*s);return{x:-s/r,y:i/r}}function s1(e,t,i,s=100){let r=t1(e);if(r.length<2)return"";let o=0,n=[];for(let u=0;u<r.length-1;u++){let d=al(r[u],r[u+1]);o+=d,n.push(d)}let l=o/i,a="M"+[r[0].x,r[0].y].join(","),c=0;for(let u=1;u<r.length;u++){let d=Math.max(Math.floor(s*(n[u-1]/o)),2);for(let p=1;p<=d;p++){let f=p/d,g=e1(r[u-1],r[u],f),b=i1(r[u-1],g),v=2*Math.PI/l*c,y=t*Math.sin(v),_={x:g.x+y*b.x,y:g.y+y*b.y};p===1?a+="Q"+[_.x,_.y].join(","):a+=" "+[_.x,_.y].join(","),c+=al(r[u-1],g)}}return e.trim().endsWith("Z")&&(a+="Z"),a}function r1(){Fo.init({settingsElement:"#settings"});const e={sltype:"sl-input",name:"numPoints",options:{label:"Number of points",type:"number",min:1,max:1e3,value:40,step:1,size:"medium",helpText:"The number of points used to draw the tessellation."}},t={sltype:"sl-input",name:"tension",options:{label:"Tension",type:"number",min:0,max:10,value:2.1,step:.1,size:"medium",helpText:"The tension of the spline."}},i={sltype:"sl-input",name:"amplitude",options:{label:"Amplitude",type:"number",min:0,max:100,value:13,step:1,size:"medium",helpText:"The amplitude of the sine wave."}},s={sltype:"sl-input",name:"frequency",options:{label:"Frequency",type:"number",min:0,max:100,value:15,step:1,size:"medium",helpText:"The frequency of the sine wave."}},r={sltype:"sl-switch",name:"closeLoop",options:{label:"Close Loop",size:"medium",helpText:"Close the loop?",checked:!0}};let o={sltype:"sl-divider"},n={sltype:"sl-switch",name:"resetSeed",options:{label:"Reset Seed Each Time?",size:"medium",helpText:"Reset the seed on every generation",checked:!0}},l={sltype:"sl-input",name:"seedValue",options:{label:"Seed Value",type:"text",value:1234,step:1,size:"medium",helpText:"The seed for the random number generator."}},a={sltype:"sl-switch",name:"debug",options:{label:"Debug",size:"medium",helpText:"Show debug info",checked:!1}};return Fo.add(e,t,i,s,r,o,n,l,o,a),Fo}const sa="Iris Generator",o1=document.getElementById("project-title");o1.innerHTML=sa;const ra=nd("#svg-canvas"),No=document.getElementById("regenerateBtn"),Vo=document.getElementById("downloadBtn");No==null||No.addEventListener("click",()=>{Qc(ra)});window.onload=()=>{Qc(ra)};Vo==null||Vo.addEventListener("click",()=>{n1()});function n1(){const e=ra.svg(),t=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),i=URL.createObjectURL(t),s=c1(),r=document.createElement("a");r.href=i,r.download=l1(sa)+"_"+s+".svg",document.body.appendChild(r),r.click(),document.body.removeChild(r)}function a1(){document.getElementById("project-title");const e=document.getElementsByTagName("title")[0],t=e.innerHTML,i=`${sa} | ${t}`;e.innerHTML=i}a1();function l1(e){let t=e.replace(/[\\/:*?"<>|]/g,"_");return t=t.replace(/\s+/g,"_"),t=t.trim(),t=t.toLowerCase(),t}function c1(){const e=new Date,t=e.getFullYear(),i=("0"+(e.getMonth()+1)).slice(-2),s=("0"+e.getDate()).slice(-2),r=("0"+e.getHours()).slice(-2),o=("0"+e.getMinutes()).slice(-2),n=("0"+e.getSeconds()).slice(-2);return t+i+s+"_"+r+o+n}
