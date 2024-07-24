import{aH as H,aI as k,aJ as q,d as L,e as C,be as O,ab as o,aw as oe,bf as ie,bg as se,bh as ae,bi as le,aN as me,aO as ne,bj as be,b7 as J,aS as xe,a5 as Y,o as b,c as P,a as $,I as R,t as A,q as p,F as X,j as ke,k as m,_ as I,m as K,A as Se,s as B,l as E,E as we,C as ce,f as ue,Y as $e,D as de,u as pe,r as N,w as U,h as Ce,a3 as _e,ad as Pe,b as Ie,Q as Be,ae as Q,bk as De,H as Z,n as ee,af as ze}from"./index-58669c41.js";import{N as Ne}from"./Popconfirm-54398819.js";import{N as te}from"./NumberAnimation-e73510ff.js";import{N as Re}from"./LayoutSider-5fcf14f3.js";const Te=H([k("progress",{display:"inline-block"},[k("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),q("line",`
 width: 100%;
 display: block;
 `,[k("progress-content",`
 display: flex;
 align-items: center;
 `,[k("progress-graph",{flex:1})]),k("progress-custom-content",{marginLeft:"14px"}),k("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[q("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),q("circle, dashboard",{width:"120px"},[k("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),k("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),k("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),q("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[k("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),k("progress-content",{position:"relative"}),k("progress-graph",{position:"relative"},[k("progress-graph-circle",[H("svg",{verticalAlign:"bottom"}),k("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[q("empty",{opacity:0})]),k("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),k("progress-graph-line",[q("indicator-inside",[k("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[k("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),k("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),q("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[k("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),k("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),k("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[k("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[q("processing",[H("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),H("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),We={success:o(ie,null),error:o(se,null),warning:o(ae,null),info:o(le,null)},Ae=L({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:v}){const y=C(()=>O(e.height)),d=C(()=>e.railBorderRadius!==void 0?O(e.railBorderRadius):e.height!==void 0?O(e.height,{c:.5}):""),i=C(()=>e.fillBorderRadius!==void 0?O(e.fillBorderRadius):e.railBorderRadius!==void 0?O(e.railBorderRadius):e.height!==void 0?O(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:s,railColor:S,railStyle:c,percentage:g,unit:u,indicatorTextColor:h,status:f,showIndicator:w,fillColor:a,processing:_,clsPrefix:r}=e;return o("div",{class:`${r}-progress-content`,role:"none"},o("div",{class:`${r}-progress-graph`,"aria-hidden":!0},o("div",{class:[`${r}-progress-graph-line`,{[`${r}-progress-graph-line--indicator-${s}`]:!0}]},o("div",{class:`${r}-progress-graph-line-rail`,style:[{backgroundColor:S,height:y.value,borderRadius:d.value},c]},o("div",{class:[`${r}-progress-graph-line-fill`,_&&`${r}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:a,height:y.value,lineHeight:y.value,borderRadius:i.value}},s==="inside"?o("div",{class:`${r}-progress-graph-line-indicator`,style:{color:h}},v.default?v.default():`${g}${u}`):null)))),w&&s==="outside"?o("div",null,v.default?o("div",{class:`${r}-progress-custom-content`,style:{color:h},role:"none"},v.default()):f==="default"?o("div",{role:"none",class:`${r}-progress-icon ${r}-progress-icon--as-text`,style:{color:h}},g,u):o("div",{class:`${r}-progress-icon`,"aria-hidden":!0},o(oe,{clsPrefix:r},{default:()=>We[f]}))):null)}}}),Me={success:o(ie,null),error:o(se,null),warning:o(ae,null),info:o(le,null)},Ge=L({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:v}){function y(d,i,s){const{gapDegree:S,viewBoxWidth:c,strokeWidth:g}=e,u=50,h=0,f=u,w=0,a=2*u,_=50+g/2,r=`M ${_},${_} m ${h},${f}
      a ${u},${u} 0 1 1 ${w},${-a}
      a ${u},${u} 0 1 1 ${-w},${a}`,n=Math.PI*2*u,x={stroke:s,strokeDasharray:`${d/100*(n-S)}px ${c*8}px`,strokeDashoffset:`-${S/2}px`,transformOrigin:i?"center":void 0,transform:i?`rotate(${i}deg)`:void 0};return{pathString:r,pathStyle:x}}return()=>{const{fillColor:d,railColor:i,strokeWidth:s,offsetDegree:S,status:c,percentage:g,showIndicator:u,indicatorTextColor:h,unit:f,gapOffsetDegree:w,clsPrefix:a}=e,{pathString:_,pathStyle:r}=y(100,0,i),{pathString:n,pathStyle:x}=y(g,S,d),l=100+s;return o("div",{class:`${a}-progress-content`,role:"none"},o("div",{class:`${a}-progress-graph`,"aria-hidden":!0},o("div",{class:`${a}-progress-graph-circle`,style:{transform:w?`rotate(${w}deg)`:void 0}},o("svg",{viewBox:`0 0 ${l} ${l}`},o("g",null,o("path",{class:`${a}-progress-graph-circle-rail`,d:_,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:r})),o("g",null,o("path",{class:[`${a}-progress-graph-circle-fill`,g===0&&`${a}-progress-graph-circle-fill--empty`],d:n,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:x}))))),u?o("div",null,v.default?o("div",{class:`${a}-progress-custom-content`,role:"none"},v.default()):c!=="default"?o("div",{class:`${a}-progress-icon`,"aria-hidden":!0},o(oe,{clsPrefix:a},{default:()=>Me[c]})):o("div",{class:`${a}-progress-text`,style:{color:h},role:"none"},o("span",{class:`${a}-progress-text__percentage`},g),o("span",{class:`${a}-progress-text__unit`},f))):null)}}});function re(e,v,y=100){return`m ${y/2} ${y/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const qe=L({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:v}){const y=C(()=>e.percentage.map((i,s)=>`${Math.PI*i/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*s)-e.circleGap*s)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:d,strokeWidth:i,circleGap:s,showIndicator:S,fillColor:c,railColor:g,railStyle:u,percentage:h,clsPrefix:f}=e;return o("div",{class:`${f}-progress-content`,role:"none"},o("div",{class:`${f}-progress-graph`,"aria-hidden":!0},o("div",{class:`${f}-progress-graph-circle`},o("svg",{viewBox:`0 0 ${d} ${d}`},h.map((w,a)=>o("g",{key:a},o("path",{class:`${f}-progress-graph-circle-rail`,d:re(d/2-i/2*(1+2*a)-s*a,i,d),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:g[a]},u[a]]}),o("path",{class:[`${f}-progress-graph-circle-fill`,w===0&&`${f}-progress-graph-circle-fill--empty`],d:re(d/2-i/2*(1+2*a)-s*a,i,d),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:y.value[a],strokeDashoffset:0,stroke:c[a]}})))))),S&&v.default?o("div",null,o("div",{class:`${f}-progress-text`},v.default())):null)}}}),Le=Object.assign(Object.assign({},ne.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),xt=L({name:"Progress",props:Le,setup(e){const v=C(()=>e.indicatorPlacement||e.indicatorPosition),y=C(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:d,inlineThemeDisabled:i}=me(e),s=ne("Progress","-progress",Te,be,e,d),S=C(()=>{const{status:g}=e,{common:{cubicBezierEaseInOut:u},self:{fontSize:h,fontSizeCircle:f,railColor:w,railHeight:a,iconSizeCircle:_,iconSizeLine:r,textColorCircle:n,textColorLineInner:x,textColorLineOuter:l,lineBgProcessing:t,fontWeightCircle:D,[J("iconColor",g)]:T,[J("fillColor",g)]:M}}=s.value;return{"--n-bezier":u,"--n-fill-color":M,"--n-font-size":h,"--n-font-size-circle":f,"--n-font-weight-circle":D,"--n-icon-color":T,"--n-icon-size-circle":_,"--n-icon-size-line":r,"--n-line-bg-processing":t,"--n-rail-color":w,"--n-rail-height":a,"--n-text-color-circle":n,"--n-text-color-line-inner":x,"--n-text-color-line-outer":l}}),c=i?xe("progress",C(()=>e.status[0]),S,e):void 0;return{mergedClsPrefix:d,mergedIndicatorPlacement:v,gapDeg:y,cssVars:i?void 0:S,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{type:e,cssVars:v,indicatorTextColor:y,showIndicator:d,status:i,railColor:s,railStyle:S,color:c,percentage:g,viewBoxWidth:u,strokeWidth:h,mergedIndicatorPlacement:f,unit:w,borderRadius:a,fillBorderRadius:_,height:r,processing:n,circleGap:x,mergedClsPrefix:l,gapDeg:t,gapOffsetDegree:D,themeClass:T,$slots:M,onRender:j}=this;return j==null||j(),o("div",{class:[T,`${l}-progress`,`${l}-progress--${e}`,`${l}-progress--${i}`],style:v,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":g,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?o(Ge,{clsPrefix:l,status:i,showIndicator:d,indicatorTextColor:y,railColor:s,fillColor:c,railStyle:S,offsetDegree:this.offsetDegree,percentage:g,viewBoxWidth:u,strokeWidth:h,gapDegree:t===void 0?e==="dashboard"?75:0:t,gapOffsetDegree:D,unit:w},M):e==="line"?o(Ae,{clsPrefix:l,status:i,showIndicator:d,indicatorTextColor:y,railColor:s,fillColor:c,railStyle:S,percentage:g,processing:n,indicatorPlacement:f,unit:w,fillBorderRadius:_,railBorderRadius:a,height:r},M):e==="multiple-circle"?o(qe,{clsPrefix:l,strokeWidth:h,railColor:s,fillColor:c,railStyle:S,viewBoxWidth:u,percentage:g,showIndicator:d,circleGap:x},M):null)}});function Oe(e,v){let y;return(...d)=>{const i=()=>{clearTimeout(y),e(...d)};clearTimeout(y),y=setTimeout(i,v)}}const Ke={class:"mb-2 text-xs text-neutral-400 font-bold"},Ee={class:"ml-1"},je=["onClick"],Ue={class:"relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap"},He={key:1},Ve={key:0,class:"absolute z-10 flex visible right-1"},Xe=["onClick"],Ye={class:"p-1"},Fe={key:0,class:"p-1"},Je={class:"p-1"},V=L({__name:"ListItem",props:{dataSources:{},title:{}},emits:["update","delete","sticky","select"],setup(e,{emit:v}){const y=e,d=v,i=y.dataSources,s=Y();async function S(r){d("select",r)}function c(r,n,x){x==null||x.stopPropagation(),r.isEdit=n}async function g(r,n){n==null||n.stopPropagation(),await s.updateGroupInfo({isSticky:!r.isSticky,groupId:r.uuid}),await s.queryMyGroup()}async function u(r,n){n==null||n.stopPropagation(),d("delete",r)}const h=Oe(u,600);async function f(r){const{uuid:n,title:x}=r;r.isEdit=!1,await s.updateGroupInfo({groupId:n,title:x}),await s.queryMyGroup()}async function w(r,n){n==null||n.stopPropagation(),n.key==="Enter"&&f(r)}function a(r,n){n==null||n.stopPropagation(),f(r)}function _(r){return s.active===r}return(r,n)=>{var x;return b(),P(X,null,[$("p",Ke,[R(A(y.title)+" ",1),$("span",Ee,"("+A((x=p(i))==null?void 0:x.length)+")",1)]),(b(!0),P(X,null,ke(p(i),l=>(b(),P("div",{key:`${l.uuid}`},[$("a",{class:we(["relative flex items-center gap-3 px-3 py-2.5 break-all border rounded-md cursor-pointer hover:bg-neutral-100 group dark:border-neutral-800 dark:hover:bg-[#24272e]",_(l.uuid)&&["border-[#3076FD]","bg-neutral-100","text-[#3076FD]","dark:bg-[#24272e]","dark:border-[#3076fd]","pr-20"]]),onClick:t=>S(l)},[$("span",null,[m(p(I),{icon:l.isSticky?"ri:pushpin-2-line":l.appId?"icon-park-outline:application-one":"eos-icons:typing"},null,8,["icon"])]),$("div",Ue,[l.isEdit?(b(),K(p(Se),{key:0,value:l.title,"onUpdate:value":t=>l.title=t,size:"tiny",onKeypress:t=>w(l,t)},null,8,["value","onUpdate:value","onKeypress"])):(b(),P("span",He,A(l.title),1))]),_(l.uuid)?(b(),P("div",Ve,[l.isEdit?(b(),P("button",{key:0,class:"p-1",onClick:t=>a(l,t)},[m(p(I),{icon:"ri:save-line"})],8,Xe)):(b(),P(X,{key:1},[$("button",Ye,[m(p(I),{icon:l.isSticky?"ri:unpin-line":"ri:pushpin-line",onClick:t=>g(l,t)},null,8,["icon","onClick"])]),l.appId?B("",!0):(b(),P("button",Fe,[m(p(I),{icon:"ri:edit-line",onClick:t=>c(l,!0,t)},null,8,["onClick"])])),m(p(Ne),{placement:"bottom",onPositiveClick:t=>p(h)(l,t)},{trigger:E(()=>[$("button",Je,[m(p(I),{icon:"ri:delete-bin-line"})])]),default:E(()=>[R(" "+A(r.$t("chat.deleteHistoryConfirm")),1)]),_:2},1032,["onPositiveClick"])],64))])):B("",!0)],10,je)]))),128))],64)}}}),Qe={class:"flex flex-col gap-3 text-sm"},Ze={key:0,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},et=L({__name:"List",setup(e){const{isMobile:v}=ce(),y=ue(),d=$e(),i=de(),s=Y(),S=pe(),c=N(100),g=C(()=>s.groupList),u=C(()=>s.groupKeyWord);U(g,()=>c.value=c.value+1),U(u,()=>c.value=c.value+1),C(()=>S.isLogin);function h(t){const T=new Date(t).getTime()+8*60*60*1e3;return new Date(T).getTime()}const f=new Date().setHours(0,0,0,0),w=C(()=>g.value.filter(t=>u.value?t.title.includes(u.value)&&t.isSticky:t.isSticky)),a=C(()=>g.value.filter(t=>u.value?t.title.includes(u.value)&&!t.isSticky&&t.appId:!t.isSticky&&t.appId)),_=C(()=>g.value.filter(t=>u.value?t.title.includes(u.value)&&!t.isSticky&&!t.appId&&h(t.createdAt)>=f:!t.isSticky&&!t.appId&&h(t.createdAt)>=f)),r=C(()=>g.value.filter(t=>u.value?t.title.includes(u.value)&&!t.isSticky&&!t.appId&&h(t.createdAt)<f:!t.isSticky&&!t.appId&&h(t.createdAt)<f));async function n(t){const{uuid:D}=t;l(D)||(await s.setActiveGroup(D),d.name!=="Chat"&&y.push("/chat"),v.value&&i.setSiderCollapsed(!0))}async function x(t){event==null||event.stopPropagation(),await s.deleteGroup(t),await s.queryMyGroup(),v.value&&i.setSiderCollapsed(!0)}function l(t){return s.active===t}return Ce(()=>{s.queryMyGroup()}),(t,D)=>(b(),K(p(_e),{class:"px-4"},{default:E(()=>[$("div",Qe,[g.value.length?(b(),P(X,{key:1},[w.value.length?(b(),K(V,{key:1e3+c.value,title:"置顶","data-sources":w.value,onSelect:n,onDelete:x},null,8,["data-sources"])):B("",!0),a.value.length?(b(),K(V,{key:2e3+c.value,title:"应用分类组","data-sources":a.value,onSelect:n,onDelete:x},null,8,["data-sources"])):B("",!0),_.value.length?(b(),K(V,{key:3e3+c.value,title:"今天","data-sources":_.value,onSelect:n,onDelete:x},null,8,["data-sources"])):B("",!0),r.value.length?(b(),K(V,{key:4e3+c.value,title:"其他","data-sources":r.value,onSelect:n,onDelete:x},null,8,["data-sources"])):B("",!0)],64)):(b(),P("div",Ze,[m(p(I),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),$("span",null,A(t.$t("common.noData")),1)]))])]),_:1}))}}),tt={class:"flex flex-col h-full flex-1 min-h-0"},rt={class:"flex items-center space-x-2 bg-white dark:bg-gray-900 h-12 px-3 border-b border-t-gray-100 dark:border-b dark:border-b-gray-800 text-lg mb-2"},ot={class:"flex-1 relative"},it={class:"flex-1 relative"},st={class:"flex-1 min-h-0 pb-4 overflow-hidden"},at={class:"p-4 border-t dark:border-t-neutral-800 flex flex-col"},lt={key:0,class:"my-1 flex items-center select-none"},nt={key:1,class:"my-1 flex items-center select-none"},ct={key:2,class:"my-1 flex items-center select-none"},ut={key:3,class:"my-1 flex items-center select-none"},dt={key:4,class:"my-1 flex items-center select-none"},pt={key:5,class:"my-1 flex items-center select-none"},gt={class:"flex justify-between my-3"},ft=$("span",{class:"mr-2"},"公告栏",-1),ht=$("span",{class:"mr-3"},"工作台",-1),kt=L({__name:"index",setup(e){const v=Pe(),y=ue(),d=de(),i=Y(),s=pe();Ie();const S=N(null),c=N(null),g=C(()=>s.userBalance),u=Be(),h=C(()=>i==null?void 0:i.activeModelKeyDeductType),f=C(()=>i==null?void 0:i.activeModelKeyPrice),w=N(0),a=N(0),_=N(0),r=N(0),n=N(!1),x=N(null);U(()=>s.userBalance.useModel3Token,(W,z)=>{var G;w.value=z||0,a.value=W||0,(G=S.value)==null||G.play()},{immediate:!0,flush:"post"}),U(()=>s.userBalance.useModel4Token,(W,z)=>{var G;_.value=z||0,r.value=W||0,(G=c.value)==null||G.play()},{immediate:!0,flush:"post"});const{isMobile:l}=ce(),t=N(!1),D=C(()=>d.siderCollapsed),T=N("");function M(W){const z=W.target.value;T.value=z,i.setGroupKeyWord(z)}function j(){n.value=!1}function ge(){y.push("/role")}async function fe(){try{t.value=!0,await i.addNewChatGroup(),await i.queryMyGroup(),t.value=!1,l.value&&d.setSiderCollapsed(!0)}catch{t.value=!1}}async function he(){u.warning({title:"清空分组",content:"是否删除所有非置顶的对话组？",positiveText:"确认删除",negativeText:"再想想",onPositiveClick:async()=>{await i.delAllGroup()}})}function F(){d.setSiderCollapsed(!D.value)}const ye=C(()=>l.value?{position:"fixed",zIndex:50}:{}),ve=C(()=>l.value?{paddingBottom:"env(safe-area-inset-bottom)"}:{});return U(l,W=>{d.setSiderCollapsed(W)},{immediate:!0,flush:"post"}),(W,z)=>(b(),P("div",null,[m(p(Re),{collapsed:D.value,"collapsed-width":0,width:260,"show-trigger":p(l)?!1:"arrow-circle","collapse-mode":"transform",position:"absolute",bordered:"",style:ee(ye.value),onUpdateCollapsed:F},{default:E(()=>[$("div",{class:"flex flex-col h-full bg-[#fafbfc] dark:bg-[#18181c]",style:ee(ve.value)},[$("main",tt,[$("div",rt,[$("div",ot,[$("div",it,[m(p(I),{icon:"material-symbols-light:search",class:"pointer-events-none absolute inset-y-0 left-0 h-full w-6 h-6 text-gray-400"}),Q($("input",{ref_key:"searchRef",ref:x,"onUpdate:modelValue":z[0]||(z[0]=G=>T.value=G),type:"text",placeholder:"搜索历史对话",class:"block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-700 placeholder:text-gray-400 sm:text-sm dark:bg-gray-900 dark:text-gray-400",onBlur:j,onInput:M},null,544),[[De,T.value]])])]),$("button",{type:"button",class:"rounded-md p-2 text-sm focus-visible:outline bg-white text-gray-400 dark:bg-gray-800",onClick:fe},[m(p(I),{icon:"material-symbols-light:add",class:"h-6 w-6"})]),$("button",{type:"button",class:"rounded-md p-2 text-sm focus-visible:outline bg-white text-gray-400 dark:bg-gray-800",onClick:he},[m(p(I),{icon:"material-symbols-light:delete-outline",class:"h-6 w-6"})])]),$("div",st,[m(et)]),$("div",at,[h.value===1?(b(),P("div",lt,[m(p(I),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),R("普通额度： "+A(`${g.value.sumModel3Count||0} 积分`),1)])):B("",!0),h.value===1?(b(),P("div",nt,[m(p(I),{icon:"ic:twotone-hourglass-top",class:"ml-2 mr-2 text-base"}),R(" 我已使用： "),m(p(te),{ref_key:"model3AnimationInstRef",ref:S,from:w.value,to:a.value},null,8,["from","to"]),R(" Token ")])):B("",!0),h.value===1?(b(),P("div",ct,[m(p(I),{icon:"mingcute:bill-line",class:"ml-2 mr-2 text-base"}),R(" 模型费用： "+A(`${f.value||0}积分 / 次对话`),1)])):B("",!0),h.value===2?(b(),P("div",ut,[m(p(I),{icon:"ic:twotone-hourglass-top",class:"ml-2 mr-2 text-base"}),R("我已使用： "),m(p(te),{ref_key:"model4AnimationInstRef",ref:c,from:_.value,to:r.value},null,8,["from","to"]),R(" Token ")])):B("",!0),h.value===2?(b(),P("div",dt,[m(p(I),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),R("高级额度： "+A(`${g.value.sumModel4Count||0} 积分`),1)])):B("",!0),h.value===2?(b(),P("div",pt,[m(p(I),{icon:"mingcute:bill-line",class:"ml-2 mr-2 text-base"}),R("模型费用： "+A(`${f.value||0}积分 / 次对话`),1)])):B("",!0),$("div",gt,[m(p(Z),{type:"tertiary",size:"small",onClick:z[1]||(z[1]=G=>p(v).updateNoticeDialog(!0))},{default:E(()=>[m(p(I),{icon:"mdi:notice-board",class:"ml-2 mr-2 text-sm"}),ft]),_:1}),m(p(Z),{type:"tertiary",size:"small",onClick:ge},{default:E(()=>[m(p(I),{icon:"ri:emoji-sticker-line",class:"ml-2 mr-2 text-sm"}),ht]),_:1})])])])],4)]),_:1},8,["collapsed","show-trigger","style"]),p(l)?Q((b(),P("div",{key:0,class:"fixed inset-0 z-40 bg-black/40",onClick:F},null,512)),[[ze,!D.value]]):B("",!0)]))}});export{xt as N,kt as _};
