"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[685],{99685:function(Pe,K,p){p.d(K,{Z:function(){return Me}});var T=p(1413),R=p(67294),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},J=V,q=p(93771),ee=function(o,u){return R.createElement(q.Z,(0,T.Z)((0,T.Z)({},o),{},{ref:u,icon:J}))},te=R.forwardRef(ee),ne=p(94184),re=p.n(ne),oe=Object.defineProperty,b=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,D=(l,o,u)=>o in l?oe(l,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[o]=u,y=(l,o)=>{for(var u in o||(o={}))z.call(o,u)&&D(l,u,o[u]);if(b)for(var u of b(o))F.call(o,u)&&D(l,u,o[u]);return l},L=(l,o)=>{var u={};for(var i in l)z.call(l,i)&&o.indexOf(i)<0&&(u[i]=l[i]);if(l!=null&&b)for(var i of b(l))o.indexOf(i)<0&&F.call(l,i)&&(u[i]=l[i]);return u};var N;(l=>{const o=class{constructor(e,t,n,r){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let s=[];for(let a=0;a<this.size;a++)s.push(!1);for(let a=0;a<this.size;a++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const c=this.addEccAndInterleave(n);if(this.drawCodewords(c),r==-1){let a=1e9;for(let E=0;E<8;E++){this.applyMask(E),this.drawFormatBits(E);const d=this.getPenaltyScore();d<a&&(r=E,a=d),this.applyMask(E)}}h(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(e,t){const n=l.QrSegment.makeSegments(e);return o.encodeSegments(n,t)}static encodeBinary(e,t){const n=l.QrSegment.makeBytes(e);return o.encodeSegments([n],t)}static encodeSegments(e,t,n=1,r=40,s=-1,c=!0){if(!(o.MIN_VERSION<=n&&n<=r&&r<=o.MAX_VERSION)||s<-1||s>7)throw new RangeError("Invalid value");let a,E;for(a=n;;a++){const m=o.getNumDataCodewords(a,t)*8,M=C.getTotalBits(e,a);if(M<=m){E=M;break}if(a>=r)throw new RangeError("Data too long")}for(const m of[o.Ecc.MEDIUM,o.Ecc.QUARTILE,o.Ecc.HIGH])c&&E<=o.getNumDataCodewords(a,m)*8&&(t=m);let d=[];for(const m of e){i(m.mode.modeBits,4,d),i(m.numChars,m.mode.numCharCountBits(a),d);for(const M of m.getData())d.push(M)}h(d.length==E);const A=o.getNumDataCodewords(a,t)*8;h(d.length<=A),i(0,Math.min(4,A-d.length),d),i(0,(8-d.length%8)%8,d),h(d.length%8==0);for(let m=236;d.length<A;m^=253)i(m,8,d);let v=[];for(;v.length*8<d.length;)v.push(0);return d.forEach((m,M)=>v[M>>>3]|=m<<7-(M&7)),new o(a,t,v,s)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n==0&&r==0||n==0&&r==t-1||n==t-1&&r==0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let s=0;s<10;s++)n=n<<1^(n>>>9)*1335;const r=(t<<10|n)^21522;h(r>>>15==0);for(let s=0;s<=5;s++)this.setFunctionModule(8,s,g(r,s));this.setFunctionModule(8,7,g(r,6)),this.setFunctionModule(8,8,g(r,7)),this.setFunctionModule(7,8,g(r,8));for(let s=9;s<15;s++)this.setFunctionModule(14-s,8,g(r,s));for(let s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,g(r,s));for(let s=8;s<15;s++)this.setFunctionModule(8,this.size-15+s,g(r,s));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;h(t>>>18==0);for(let n=0;n<18;n++){const r=g(t,n),s=this.size-11+n%3,c=Math.floor(n/3);this.setFunctionModule(s,c,r),this.setFunctionModule(c,s,r)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const s=Math.max(Math.abs(r),Math.abs(n)),c=e+r,a=t+n;0<=c&&c<this.size&&0<=a&&a<this.size&&this.setFunctionModule(c,a,s!=2&&s!=4)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,n=this.errorCorrectionLevel;if(e.length!=o.getNumDataCodewords(t,n))throw new RangeError("Invalid argument");const r=o.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t],s=o.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t],c=Math.floor(o.getNumRawDataModules(t)/8),a=r-c%r,E=Math.floor(c/r);let d=[];const A=o.reedSolomonComputeDivisor(s);for(let m=0,M=0;m<r;m++){let w=e.slice(M,M+E-s+(m<a?0:1));M+=w.length;const S=o.reedSolomonComputeRemainder(w,A);m<a&&w.push(0),d.push(w.concat(S))}let v=[];for(let m=0;m<d[0].length;m++)d.forEach((M,w)=>{(m!=E-s||w>=a)&&v.push(M[m])});return h(v.length==c),v}drawCodewords(e){if(e.length!=Math.floor(o.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let n=this.size-1;n>=1;n-=2){n==6&&(n=5);for(let r=0;r<this.size;r++)for(let s=0;s<2;s++){const c=n-s,E=(n+1&2)==0?this.size-1-r:r;!this.isFunction[E][c]&&t<e.length*8&&(this.modules[E][c]=g(e[t>>>3],7-(t&7)),t++)}}h(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let s=0;s<this.size;s++){let c=!1,a=0,E=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[s][d]==c?(a++,a==5?e+=o.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,E),c||(e+=this.finderPenaltyCountPatterns(E)*o.PENALTY_N3),c=this.modules[s][d],a=1);e+=this.finderPenaltyTerminateAndCount(c,a,E)*o.PENALTY_N3}for(let s=0;s<this.size;s++){let c=!1,a=0,E=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[d][s]==c?(a++,a==5?e+=o.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,E),c||(e+=this.finderPenaltyCountPatterns(E)*o.PENALTY_N3),c=this.modules[d][s],a=1);e+=this.finderPenaltyTerminateAndCount(c,a,E)*o.PENALTY_N3}for(let s=0;s<this.size-1;s++)for(let c=0;c<this.size-1;c++){const a=this.modules[s][c];a==this.modules[s][c+1]&&a==this.modules[s+1][c]&&a==this.modules[s+1][c+1]&&(e+=o.PENALTY_N2)}let t=0;for(const s of this.modules)t=s.reduce((c,a)=>c+(a?1:0),t);const n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return h(0<=r&&r<=9),e+=r*o.PENALTY_N4,h(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return h(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(o.getNumRawDataModules(e)/8)-o.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*o.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let r=0;r<e-1;r++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let s=0;s<t.length;s++)t[s]=o.reedSolomonMultiply(t[s],n),s+1<t.length&&(t[s]^=t[s+1]);n=o.reedSolomonMultiply(n,2)}return t}static reedSolomonComputeRemainder(e,t){let n=t.map(r=>0);for(const r of e){const s=r^n.shift();n.push(0),t.forEach((c,a)=>n[a]^=o.reedSolomonMultiply(c,s))}return n}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return h(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];h(t<=this.size*3);const n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let u=o;u.MIN_VERSION=1,u.MAX_VERSION=40,u.PENALTY_N1=3,u.PENALTY_N2=3,u.PENALTY_N3=40,u.PENALTY_N4=10,u.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],u.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],l.QrCode=u;function i(e,t,n){if(t<0||t>31||e>>>t)throw new RangeError("Value out of range");for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function g(e,t){return(e>>>t&1)!=0}function h(e){if(!e)throw new Error("Assertion error")}const f=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(e){let t=[];for(const n of e)i(n,8,t);return new f(f.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!f.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const r=Math.min(e.length-n,3);i(parseInt(e.substr(n,r),10),r*3+1,t),n+=r}return new f(f.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!f.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],n;for(n=0;n+2<=e.length;n+=2){let r=f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n))*45;r+=f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n+1)),i(r,11,t)}return n<e.length&&i(f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n)),6,t),new f(f.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:f.isNumeric(e)?[f.makeNumeric(e)]:f.isAlphanumeric(e)?[f.makeAlphanumeric(e)]:[f.makeBytes(f.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<1<<7)i(e,8,t);else if(e<1<<14)i(2,2,t),i(e,14,t);else if(e<1e6)i(6,3,t),i(e,21,t);else throw new RangeError("ECI assignment value out of range");return new f(f.Mode.ECI,0,t)}static isNumeric(e){return f.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return f.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const r of e){const s=r.mode.numCharCountBits(t);if(r.numChars>=1<<s)return 1/0;n+=4+s+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)!="%"?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}};let C=f;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",l.QrSegment=C})(N||(N={})),(l=>{let o;(u=>{const i=class{constructor(h,f){this.ordinal=h,this.formatBits=f}};let g=i;g.LOW=new i(0,1),g.MEDIUM=new i(1,0),g.QUARTILE=new i(2,3),g.HIGH=new i(3,2),u.Ecc=g})(o=l.QrCode||(l.QrCode={}))})(N||(N={})),(l=>{let o;(u=>{const i=class{constructor(h,f){this.modeBits=h,this.numBitsCharCount=f}numCharCountBits(h){return this.numBitsCharCount[Math.floor((h+7)/17)]}};let g=i;g.NUMERIC=new i(1,[10,12,14]),g.ALPHANUMERIC=new i(2,[9,11,13]),g.BYTE=new i(4,[8,16,16]),g.KANJI=new i(8,[8,10,12]),g.ECI=new i(7,[0,0,0]),u.Mode=g})(o=l.QrSegment||(l.QrSegment={}))})(N||(N={}));var I=N;var Q={L:I.QrCode.Ecc.LOW,M:I.QrCode.Ecc.MEDIUM,Q:I.QrCode.Ecc.QUARTILE,H:I.QrCode.Ecc.HIGH},x=128,U="L",_="#FFFFFF",$="#000000",H=!1,B=4,se=.1;function k(l,o=0){const u=[];return l.forEach(function(i,g){let h=null;i.forEach(function(f,C){if(!f&&h!==null){u.push(`M${h+o} ${g+o}h${C-h}v1H${h+o}z`),h=null;return}if(C===i.length-1){if(!f)return;h===null?u.push(`M${C+o},${g+o} h1v1H${C+o}z`):u.push(`M${h+o},${g+o} h${C+1-h}v1H${h+o}z`);return}f&&h===null&&(h=C)})}),u.join("")}function Y(l,o){return l.slice().map((u,i)=>i<o.y||i>=o.y+o.h?u:u.map((g,h)=>h<o.x||h>=o.x+o.w?g:!1))}function j(l,o,u,i){if(i==null)return null;const g=u?B:0,h=l.length+g*2,f=Math.floor(o*se),C=h/o,e=(i.width||f)*C,t=(i.height||f)*C,n=i.x==null?l.length/2-e/2:i.x*C,r=i.y==null?l.length/2-t/2:i.y*C;let s=null;if(i.excavate){let c=Math.floor(n),a=Math.floor(r),E=Math.ceil(e+n-c),d=Math.ceil(t+r-a);s={x:c,y:a,w:E,h:d}}return{x:n,y:r,h:t,w:e,excavation:s}}var ie=function(){try{new Path2D().addPath(new Path2D)}catch(l){return!1}return!0}();function G(l){const o=l,{value:u,size:i=x,level:g=U,bgColor:h=_,fgColor:f=$,includeMargin:C=H,style:e,imageSettings:t}=o,n=L(o,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),r=t==null?void 0:t.src,s=(0,R.useRef)(null),c=(0,R.useRef)(null),[a,E]=(0,R.useState)(!1);(0,R.useEffect)(()=>{if(s.current!=null){const v=s.current,m=v.getContext("2d");if(!m)return;let M=I.QrCode.encodeText(u,Q[g]).getModules();const w=C?B:0,S=M.length+w*2,P=j(M,i,C,t),O=c.current,Z=P!=null&&O!==null&&O.complete&&O.naturalHeight!==0&&O.naturalWidth!==0;Z&&P.excavation!=null&&(M=Y(M,P.excavation));const W=window.devicePixelRatio||1;v.height=v.width=i*W;const X=i/S*W;m.scale(X,X),m.fillStyle=h,m.fillRect(0,0,S,S),m.fillStyle=f,ie?m.fill(new Path2D(k(M,w))):M.forEach(function(we,pe){we.forEach(function(ve,Ae){ve&&m.fillRect(Ae+w,pe+w,1,1)})}),Z&&m.drawImage(O,P.x+w,P.y+w,P.w,P.h)}}),(0,R.useEffect)(()=>{E(!1)},[r]);const d=y({height:i,width:i},e);let A=null;return r!=null&&(A=R.createElement("img",{src:r,key:r,style:{display:"none"},onLoad:()=>{E(!0)},ref:c})),R.createElement(R.Fragment,null,R.createElement("canvas",y({style:d,height:i,width:i,ref:s},n)),A)}function le(l){const o=l,{value:u,size:i=x,level:g=U,bgColor:h=_,fgColor:f=$,includeMargin:C=H,imageSettings:e}=o,t=L(o,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let n=I.QrCode.encodeText(u,Q[g]).getModules();const r=C?B:0,s=n.length+r*2,c=j(n,i,C,e);let a=null;e!=null&&c!=null&&(c.excavation!=null&&(n=Y(n,c.excavation)),a=React.createElement("image",{xlinkHref:e.src,height:c.h,width:c.w,x:c.x+r,y:c.y+r,preserveAspectRatio:"none"}));const E=k(n,r);return React.createElement("svg",y({height:i,width:i,viewBox:`0 0 ${s} ${s}`},t),React.createElement("path",{fill:h,d:`M0,0 h${s}v${s}H0z`,shapeRendering:"crispEdges"}),React.createElement("path",{fill:f,d:E,shapeRendering:"crispEdges"}),a)}var Ne=l=>{const o=l,{renderAs:u}=o,i=L(o,["renderAs"]);return u==="svg"?React.createElement(le,y({},i)):React.createElement(G,y({},i))},ae=p(71577),ce=p(53124),ue=p(10110),he=p(75081),de=p(92195),fe=p(67968),ge=p(45503),me=p(14747);const Ee=l=>{const{componentCls:o}=l;return{[o]:Object.assign(Object.assign({},(0,me.Wf)(l)),{display:"flex",justifyContent:"center",alignItems:"center",padding:l.paddingSM,backgroundColor:l.colorWhite,borderRadius:l.borderRadiusLG,border:`${l.lineWidth}px ${l.lineType} ${l.colorSplit}`,position:"relative",width:"100%",height:"100%",overflow:"hidden",[`& > ${o}-mask`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",color:l.colorText,lineHeight:l.lineHeight,background:l.QRCodeMaskBackgroundColor,textAlign:"center",[`& > ${o}-expired`]:{color:l.QRCodeExpiredTextColor}},"&-icon":{marginBlockEnd:l.marginXS,fontSize:l.controlHeight}}),[`${o}-borderless`]:{borderColor:"transparent"}}};var Ce=(0,fe.Z)("QRCode",l=>Ee((0,ge.TS)(l,{QRCodeExpiredTextColor:"rgba(0, 0, 0, 0.88)",QRCodeMaskBackgroundColor:"rgba(255, 255, 255, 0.96)"})));const{useToken:Re}=de.Z;var Me=l=>{const{value:o,icon:u="",size:i=160,iconSize:g=40,color:h="#000",errorLevel:f="M",status:C="active",bordered:e=!0,onRefresh:t,style:n,className:r,rootClassName:s,prefixCls:c,bgColor:a="transparent"}=l,{getPrefixCls:E}=(0,R.useContext)(ce.E_),d=E("qrcode",c),[A,v]=Ce(d),{token:m}=Re(),M=(0,R.useMemo)(()=>{const P={src:u,x:void 0,y:void 0,height:g,width:g,excavate:!0};return{value:o,size:i-(m.paddingSM+m.lineWidth)*2,level:f,bgColor:a,fgColor:h,imageSettings:u?P:void 0}},[f,h,u,g,i,o,a]),[w]=(0,ue.Z)("QRCode");if(!o)return null;const S=re()(d,r,s,v,{[`${d}-borderless`]:!e});return A(R.createElement("div",{style:Object.assign(Object.assign({},n),{width:i,height:i,backgroundColor:a}),className:S},C!=="active"&&R.createElement("div",{className:`${d}-mask`},C==="loading"&&R.createElement(he.Z,null),C==="expired"&&R.createElement(R.Fragment,null,R.createElement("p",{className:`${d}-expired`},w==null?void 0:w.expired),t&&R.createElement(ae.ZP,{type:"link",icon:R.createElement(te,null),onClick:t},w==null?void 0:w.refresh))),R.createElement(G,Object.assign({},M))))}}}]);
