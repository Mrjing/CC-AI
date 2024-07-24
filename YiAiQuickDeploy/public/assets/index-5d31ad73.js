import{d as q,r as g,h as G,c as M,a as o,o as I,ag as J,w as H,e as $,t as w,k as D,l as R,q as B,I as b,m as z,s as O,H as P}from"./index-58669c41.js";import{b as K}from"./mjDraw-10782585.js";const Q={class:"relative w-full h-full"},Z=["width","height"],A=["width","height"],ee=q({__name:"index",props:{src:String,width:Number,height:Number,max:{type:Number,default:500},exportMaskBackgroundColor:{type:String,default:"black"},exportMaskColor:{type:String,default:"white"},penColor:{type:String,default:"white"},penWidth:{type:Number,default:20},updateFileInfo:Function},setup(S,{expose:k}){const l=S,e=g(null),u=g(null),p=g([]);let f=!1,C=[];const h=new Image,m=g(!1),_=g(0),x=g(0),L=g(0);G(()=>{var n;e.value.getContext("2d");const a=(n=u.value)==null?void 0:n.getContext("2d");h.src=l.src,h.onload=()=>{var r;const c=Math.min(l.max/h.width,l.max/h.height);L.value=c,_.value=l.width||(c<1?h.width*c:h.width),x.value=l.height||(c<1?h.height*c:h.height),(r=l.updateFileInfo)==null||r.call(l,{width:h.width,height:h.height,scaleRatio:c.toFixed(3)}),e.value.width=_.value,u.value.width=_.value,e.value.height=x.value,u.value.height=x.value,a.drawImage(h,0,0,_.value,x.value)},e.value.addEventListener("mousedown",N),e.value.addEventListener("mousemove",T),e.value.addEventListener("mouseup",F)});const N=a=>{f=!0;const n=e.value.getContext("2d");n.beginPath(),n.moveTo(a.offsetX,a.offsetY),C=[{type:m.value?"erase":"draw",x:a.offsetX,y:a.offsetY}]},T=a=>{if(!f)return;const n=e.value.getContext("2d");n.lineTo(a.offsetX,a.offsetY),m.value?(n.globalCompositeOperation="destination-out",n.lineWidth=l.penWidth*2):(n.globalCompositeOperation="source-over",n.strokeStyle=l.penColor,n.lineWidth=l.penWidth),n.stroke(),C.push({type:m.value?"erase":"draw",x:a.offsetX,y:a.offsetY})},F=()=>{f=!1,p.value.push([...C,{type:"end"}]),C=[]},U=()=>new Promise((a,n)=>{const c=document.createElement("canvas"),r=h;c.width=r.width,c.height=r.height;const i=c.getContext("2d");if(i){i.fillStyle=l.exportMaskBackgroundColor,i.fillRect(0,0,c.width,c.height),i.beginPath();const d=r.width/_.value,X=r.height/x.value;i.beginPath(),p.value.forEach(W=>{W.forEach((y,j)=>{(y.type==="begin"||y.type==="draw")&&((j===0||W[j-1].type!==y.type)&&i.beginPath(),i.lineTo(y.x*d,y.y*X),i.strokeStyle=l.exportMaskColor,i.lineWidth=l.penWidth*d),y.type==="erase"&&((j===0||W[j-1].type!==y.type)&&i.beginPath(),i.lineTo(y.x*d,y.y*X),i.strokeStyle=l.exportMaskBackgroundColor),j<W.length-1&&W[j+1].type!==y.type&&i.stroke()}),W[W.length-1].type!=="begin"&&i.stroke()});const Y=c.toDataURL("image/png");a(Y)}else n(new Error("无法获取canvas的2D渲染上下文"))});function v(){p.value=[],e.value.getContext("2d").clearRect(0,0,e.value.width,e.value.height)}async function E(){return await U()}function V(){p.value.length>0&&(p.value.pop(),t())}function t(){const a=e.value.getContext("2d");a.clearRect(0,0,e.value.width,e.value.height),a.drawImage(h,0,0,_.value,x.value),p.value.forEach(n=>{n.forEach((c,r)=>{(r===0||n[r-1].type!==c.type)&&a.beginPath(),c.type==="erase"?(a.globalCompositeOperation="destination-out",a.strokeStyle="rgba(0,0,0,0)"):(a.globalCompositeOperation="source-over",a.strokeStyle="white"),a.lineWidth=c.type==="erase"?l.penWidth*2:l.penWidth,a.lineTo(c.x,c.y),a.stroke(),(r===n.length-1||n[r+1].type!==c.type)&&a.closePath()})}),a.globalCompositeOperation="source-over"}return k({getBase:E,undo:V,clear:v,toggleEraser:()=>{m.value=!m.value}}),(a,n)=>(I(),M("div",Q,[o("canvas",{ref_key:"backgroundCanvas",ref:u,class:"absolute left-0 top-0",width:S.width,height:S.height},null,8,Z),o("canvas",{ref_key:"canvas",ref:e,class:"absolute left-0 top-0",width:S.width,height:S.height},null,8,A)]))}});const te=J(ee,[["__scopeId","data-v-d6d70dde"]]),ae=q({__name:"index",props:{src:String,selectColor:String,maxSteps:Number,updateFileInfo:Function},setup(S,{expose:k}){const l=S,e=g(null),u=g(null);let p=new Set;const f=g([]),C=g(10);H(()=>l.maxSteps,t=>{t&&(C.value=t)},{immediate:!0}),G(()=>{e.value&&(u.value=e.value.getContext("2d",{willReadFrequently:!0}),h())}),H(()=>l.src,t=>{t&&h()});function h(){if(!u.value||!l.src)return;const t=new Image;t.crossOrigin="anonymous",t.onload=()=>{var s;e.value.width=t.width,e.value.height=t.height,(s=l.updateFileInfo)==null||s.call(l,{width:t.width,height:t.height,scaleRatio:1}),u.value.drawImage(t,0,0,t.width,t.height)},t.src=l.src}function m(t,s){return(s*e.value.width+t)*4}function _(t,s,a){const n=m(t,s);return[a[n],a[n+1],a[n+2],a[n+3]]}function x(t,s){return t.reduce((n,c,r)=>n+Math.abs(c-s[r]),0)}function L(t,s,a,n,c){if(u.value&&e.value){const i=u.value.getImageData(0,0,e.value.width,e.value.height);V(i)}const r=[[t,s]];for(;r.length;){const[i,d]=r.shift();if(i<0||i>=e.value.width||d<0||d>=e.value.height)continue;const X=_(i,d,c);if(x(X,n)>50||x(X,a)===0)continue;const Y=m(i,d);c.set(a,Y),p.add(i+","+d),r.push([i+1,d]),r.push([i-1,d]),r.push([i,d+1]),r.push([i,d-1])}}function N(t){if(!u.value||!e.value)return;const s=t.offsetX,a=t.offsetY,n=u.value.getImageData(0,0,e.value.width,e.value.height),c=_(s,a,n.data),r=F(l.selectColor);L(s,a,r,c,n.data),u.value.putImageData(n,0,0)}function T(){if(!u.value||!e.value)return"";const t=u.value.getImageData(0,0,e.value.width,e.value.height),s=new Uint8ClampedArray(t.data);for(let r=0;r<e.value.height;r++)for(let i=0;i<e.value.width;i++){const d=m(i,r);p.has(i+","+r)?(s[d]=255,s[d+1]=255,s[d+2]=255):(s[d]=0,s[d+1]=0,s[d+2]=0),s[d+3]=255}const a=new ImageData(s,e.value.width,e.value.height),n=document.createElement("canvas");return n.width=e.value.width,n.height=e.value.height,n.getContext("2d").putImageData(a,0,0),n.toDataURL("image/png")}function F(t){if(t&&t.startsWith("#")){const s=t.length===4?"#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]:t,a=parseInt(s.slice(1,3),16),n=parseInt(s.slice(3,5),16),c=parseInt(s.slice(5,7),16);return[a,n,c,255]}else if(t&&t.startsWith("rgb")){const s=t.replace(/rgba?\(/,"").replace(/\)/,"").split(",").map(a=>parseInt(a));return s.length===3&&s.push(255),s}return[0,0,0,255]}async function U(){return await T()}function v(){if(f.value.length===0||!u.value||!e.value)return;const t=f.value.pop();u.value.putImageData(t.imageData,0,0),p=new Set(t.currentModifiedPixels)}function E(){!u.value||!e.value||(u.value.clearRect(0,0,e.value.width,e.value.height),p.clear(),f.value=[],h())}function V(t){const s=new Set(p);f.value.push({imageData:t,currentModifiedPixels:s}),f.value.length>C.value&&f.value.shift()}return k({getBase:U,undo:v,clear:E}),(t,s)=>(I(),M("div",null,[o("canvas",{ref_key:"canvas",ref:e,onClick:N,crossOrigin:"anonymous"},null,512)]))}});const ne={class:"w-full h-full bg-gray-100"},se={class:"h-[80px] w-full flex justify-center items-center space-x-5"},le={class:"text-2xl font-bold"},oe={key:0,class:"bg-gray-100 flex-1 h-full w-full flex"},ie={class:"w-[50%] flex flex-col border-r"},ue=o("span",{class:"text-2xl w-full text-center"},"操作区域",-1),ce={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},re={class:"mt-10 ml-10"},de={class:"w-[50%] flex flex-col"},he=o("span",{class:"text-2xl w-full text-center"},"预览区域",-1),ve={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},fe={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},ge=o("span",null,"图片原始信息：",-1),pe=["src"],me={key:1,class:"bg-gray-100 flex-1 h-full w-full flex"},xe={class:"w-[50%] flex flex-col border-r"},_e=o("span",{class:"text-2xl w-full text-center"},"操作区域",-1),ye={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},we={class:"mt-10 ml-10"},be={class:"w-[50%] flex flex-col"},ke=o("span",{class:"text-2xl w-full text-center"},"预览区域",-1),Ce={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},Ie={class:"border-b border-t h-[50px] flex justify-center items-center space-x-5"},Se=o("span",null,"图片原始信息：",-1),Ee=["src"],De="",Re="",We=q({__name:"index",setup(S){const k=g(""),l=g(null),e=g(""),u=g(1),p=g(!1),f=g({}),C=$(()=>u.value===1?"模块选区":"自由绘制"),h=$(()=>u.value===2?"模块选区模式":"自由绘制模式");async function m(){var E;const v=await((E=l.value)==null?void 0:E.getBase());k.value=v}async function _(){const v=u.value===1?De:Re,V="data:image/png;base64,"+(await K({url:v})).data;e.value=V}const x=$(()=>p.value?"橡皮擦模式":"画笔模式");function L(){e.value=null,u.value=u.value===1?2:1}H(u,()=>{_()},{immediate:!0});function N(){var v;(v=l.value)==null||v.undo()}function T(){var v;(v=l.value)==null||v.clear()}function F(v){f.value=v}function U(){var v;(v=l.value)==null||v.toggleEraser(),p.value=!p.value}return(v,E)=>(I(),M("div",ne,[o("div",se,[o("span",le," 当前测试模式："+w(h.value),1),D(B(P),{type:"primary",onClick:L},{default:R(()=>[b("切换至"+w(C.value)+"模式",1)]),_:1})]),u.value===1?(I(),M("div",oe,[o("div",ie,[ue,o("div",ce,[D(B(P),{type:"primary",onClick:N},{default:R(()=>[b("返回上一步")]),_:1}),D(B(P),{type:"primary",onClick:T},{default:R(()=>[b("清空画布")]),_:1}),D(B(P),{type:"primary",onClick:U},{default:R(()=>[b("切换橡皮擦模式")]),_:1}),b(" 当前模式: "+w(x.value),1)]),o("div",re,[o("div",null,[e.value&&u.value===1?(I(),z(te,{key:0,ref_key:"canvasRef",ref:l,updateFileInfo:F,max:700,src:e.value},null,8,["src"])):O("",!0)])])]),o("div",de,[he,o("div",ve,[D(B(P),{type:"primary",onClick:m},{default:R(()=>[b("获取蒙层")]),_:1})]),o("div",fe,[ge,o("span",null,"宽度： "+w(f.value.width),1),o("span",null,"高度： "+w(f.value.height),1),o("span",null,"缩放比： "+w(f.value.scaleRatio),1)]),o("div",null,[k.value?(I(),M("img",{key:0,src:k.value,alt:""},null,8,pe)):O("",!0)])])])):O("",!0),u.value===2?(I(),M("div",me,[o("div",xe,[_e,o("div",ye,[D(B(P),{type:"primary",onClick:N},{default:R(()=>[b("返回上一步")]),_:1}),D(B(P),{type:"primary",onClick:T},{default:R(()=>[b("清空画布")]),_:1}),b(" 当前模式: "+w(x.value),1)]),o("div",we,[o("div",null,[e.value&&u.value===2?(I(),z(ae,{key:0,selectColor:"#fff",ref_key:"canvasRef",ref:l,updateFileInfo:F,max:500,src:e.value},null,8,["src"])):O("",!0)])])]),o("div",be,[ke,o("div",Ce,[D(B(P),{type:"primary",onClick:m},{default:R(()=>[b("获取蒙层")]),_:1})]),o("div",Ie,[Se,o("span",null,"宽度： "+w(f.value.width),1),o("span",null,"高度： "+w(f.value.height),1),o("span",null,"缩放比： "+w(f.value.scaleRatio),1)]),o("div",null,[k.value?(I(),M("img",{key:0,src:k.value,alt:""},null,8,Ee)):O("",!0)])])])):O("",!0)]))}});export{We as default};