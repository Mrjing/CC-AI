import{d as Ae,D as Oe,u as Ce,e as h,Q as _e,b as ke,r as m,o as c,c as u,a as e,k as n,l as a,I as f,t as A,q as s,R as et,m as ue,H as v,_ as w,S as I,s as b,U as te,V as tt,L as je,W as Pe,X as st,f as at,Y as nt,C as lt,w as ot,Z as it,h as rt,F as $,j as ee,p as ce,E as Y,B as ct,$ as dt,a0 as pe,a1 as ut,a2 as we,n as ft,A as ge,a3 as bt,a4 as mt}from"./index-58669c41.js";import{f as G,a as he}from"./mjDraw-10782585.js";import{N as Ie}from"./InputNumber-fa0b8db2.js";import{N as vt}from"./Switch-73c3b04c.js";import{N as de}from"./Select-5c8ca9e0.js";const pt="/assets/fail-7089de31.png",ye="/assets/draw-bccd19c4.svg",xe="/assets/zoom-426d4db7.svg",wt={class:"relative overflow-hidden rounded-md border p-4 transition-all hover:shadow dark:border-neutral-700"},gt={class:"flex items-center justify-between"},ht={style:{width:"240px"}},It={class:"my-4 h-[280px]"},yt={key:0,class:"flex h-full w-full items-center justify-center overflow-hidden rounded-md"},xt={key:1,class:"flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-md"},At=["src"],Ot=e("span",{class:"mt-3 text-base"},"绘制失败",-1),Ct=e("span",{class:"mt-1"},"已退还余额至您的账户！",-1),_t={key:2,class:"my-4 h-[280px] relative"},kt={class:"-mx-4 -mb-4 bg-[#fafafc] px-4 py-2 dark:bg-[#262629]"},jt={key:0,class:"w-full"},Pt={class:"mb-2 flex items-center justify-between"},Rt=e("span",null,"放大：",-1),Ut={class:"text-base text-neutral-400"},zt=e("div",{style:{width:"240px"}},[e("p",null,"参数释义：放大某张图片如 U1 放大第一张图片，以此类推")],-1),Nt={class:"flex-1"},St={class:"flex items-center justify-around"},Dt=e("p",null,"重新生成一次",-1),Mt={key:1,class:"w-full"},qt={class:"mb-2 flex items-center justify-between"},Et=e("span",null,"变换：",-1),Bt={class:"text-base text-neutral-400"},Tt=e("div",{style:{width:"240px"}},[e("p",null," 参数释义：以某张图片为基准重新生成 如 V1 则变换第一张图片，以此类推 ")],-1),Gt={class:"flex-1"},Kt={class:"flex items-center justify-around"},Lt={key:2,class:"w-full mb-2 flex items-center justify-between"},Ht={key:0},Qt={key:0},Ft={key:1},Vt={key:1},Jt={key:3,class:"w-full mb-2 flex items-center justify-between"},Zt={key:4,class:"w-full mb-2 flex items-center justify-between"},Yt={key:5,class:"w-full mb-2 flex items-center justify-between"},Xt={key:6},Wt={class:"mb-2 flex flex-1 items-center justify-between"},$t=e("span",null,"缩放：",-1),es={class:"text-base text-neutral-400"},ts=e("div",{style:{width:"270px"}},[e("p",null,"参数释义：Zoom 对当前图片进行无限缩放")],-1),ss={class:"flex-1"},as={class:"flex items-center pl-2"},ns=["src"],ls=e("p",null,"放大",-1),os=["src"],is=e("p",null,"放大",-1),rs={key:7,class:"flex w-full"},cs={class:"mb-2 flex flex-1 items-center justify-between"},ds=e("span",null,"调整：",-1),us={class:"text-base text-neutral-400"},fs=e("div",{style:{width:"275px"}},[e("p",null,"参数释义：Vary 以当前图片为基础调整图片")],-1),bs={class:"flex-1"},ms={class:"flex items-center pl-2"},vs=["src"],ps=e("p",null,"以当前图片为基础大幅增强",-1),ws=["src"],gs=e("p",null,"以当前图片为基础细微调整",-1),hs=Ae({__name:"cardItem",props:{drawItemInfo:{}},emits:["usePrompt","queryData"],setup(fe,{emit:se}){const _=se,ae=Oe(),g=Ce(),ne=h(()=>ae.theme),le=h(()=>ne.value==="dark"?"#fff":"#000"),K=fe,X=_e(),k=ke(),oe="/api/midjourney/download",O=m(!1),L=h(()=>{const{status:t}=K.drawItemInfo;if(t===1)return"";if(t===2)return"info";if(t===3)return"primary";if(t===4||t===5)return"error"}),ie=h(()=>{const{status:t}=K.drawItemInfo;if(t===1)return"等待中";if(t===2)return"绘制中";if(t===3)return"成功";if(t===4)return"失败";if(t===5)return"超时"});function H(){_("usePrompt")}async function W(t){const r=X.info({title:"下载图片",content:"是否确认下载当前图片",positiveText:"下载",negativeText:"取消",onPositiveClick:async()=>(r.loading=!0,new Promise(async d=>{const{fileInfo:E}=t,{filename:R,cosUrl:U}=E,B=await Pe.post(oe,{url:U},{responseType:"blob"}),z=new Blob([B.data],{type:B.headers["content-type"]}),F=window.URL.createObjectURL(z),N=document.createElement("a");N.href=F,N.download=R,N.click(),d(!0)}))})}async function M(t){X.warning({title:"删除记录",content:"是否确认删除当前绘制记录？",positiveText:"删除",negativeText:"取消",onPositiveClick:async()=>{const{id:r}=t,d=await st({id:r});if(!d.success)return k.error(d.message);k.success("删除绘制记录成功！"),_("queryData")}})}async function x(t,r){const{drawId:d}=t;await G({drawId:d,action:"UPSCALE",orderId:r}),k.success("提交放大绘制任务成功、请等待绘制结束！"),g.token&&await P(),_("queryData")}async function C(t,r){const{drawId:d}=t;await G({drawId:d,action:"REGENERATE",orderId:r}),k.success("提交重新生成绘制任务成功、请等待绘制结束！"),g.token&&await P(),_("queryData")}async function j(t,r){const{drawId:d}=t;await G({drawId:d,action:"VARIATION",orderId:r}),k.success("提交图片变换绘制任务成功、请等待绘制结束！"),g.token&&await P(),_("queryData")}async function P(){O.value=!0;try{await g.getUserInfo(),O.value=!1}catch{O.value=!1}}const Q=h(()=>{const{progress:t,status:r}=K.drawItemInfo;if(r===1)return"正在排队中...";if(r===2&&!t)return"正在绘制中...";if(r===2&&t===100)return"正在存储图片中..."});async function q(t,r){const{drawId:d}=t;await G({drawId:d,action:"VARIATION",orderId:r}),k.success("提交图片调整绘制任务成功、请等待绘制结束！"),g.token&&await P(),_("queryData")}async function p(t,r){const{drawId:d}=t;await G({drawId:d,action:"UPSCALE",orderId:r}),k.success("提交图片调整绘制任务成功、请等待绘制结束！"),g.token&&await P(),_("queryData")}return(t,r)=>(c(),u("div",wt,[e("div",gt,[e("span",null,[n(s(et),{size:"small",type:L.value},{default:a(()=>[f(A(ie.value),1)]),_:1},8,["type"])]),n(s(te),null,{default:a(()=>[t.drawItemInfo.action==="IMAGINE"?(c(),ue(s(I),{key:0,placement:"top",trigger:"hover"},{trigger:a(()=>[n(s(v),{size:"tiny",ghost:"",onClick:H},{icon:a(()=>[n(s(w),{icon:"ri:brush-line",class:"text-base"})]),default:a(()=>[f(" 使用 ")]),_:1})]),default:a(()=>[e("div",ht,[e("p",null,A(t.drawItemInfo.fullPrompt),1)])]),_:1})):b("",!0),n(s(v),{size:"tiny",ghost:"",onClick:r[0]||(r[0]=d=>W(t.drawItemInfo))},{icon:a(()=>[n(s(w),{icon:"mingcute:file-download-line",class:"text-base"})]),default:a(()=>[f(" 下载 ")]),_:1}),n(s(v),{size:"tiny",ghost:"",onClick:r[1]||(r[1]=d=>M(t.drawItemInfo))},{icon:a(()=>[n(s(w),{icon:"ri:delete-bin-line",class:"text-base"})]),default:a(()=>[f(" 删除 ")]),_:1})]),_:1})]),e("div",It,[t.drawItemInfo.status===3?(c(),u("div",yt,[n(s(tt),{style:{"object-fit":"contain"},src:t.drawItemInfo.drawUrl,"preview-src":t.drawItemInfo.drawUrl,"object-fit":"contain"},null,8,["src","preview-src"])])):b("",!0),[4,5,6].includes(t.drawItemInfo.status)?(c(),u("div",xt,[e("img",{class:"w-[75px]",src:s(pt)},null,8,At),Ot,Ct])):b("",!0),[1,2].includes(t.drawItemInfo.status)?(c(),u("div",_t,[n(je,{"text-color":le.value,progress:t.drawItemInfo.progress,tips:Q.value},null,8,["text-color","progress","tips"])])):b("",!0)]),e("div",kt,[(t.drawItemInfo.action==="IMAGINE"||t.drawItemInfo.action==="VARIATION"||t.drawItemInfo.action==="ZOOM"||t.drawItemInfo.action==="OUTPAINT"||t.drawItemInfo.action==="REROLL")&&t.drawItemInfo.status===3?(c(),u("div",jt,[e("div",Pt,[Rt,e("span",Ut,[n(s(I),{placement:"top",trigger:"hover"},{trigger:a(()=>[n(s(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:a(()=>[zt]),_:1})]),e("div",Nt,[e("div",St,[n(s(v),{size:"tiny",onClick:r[2]||(r[2]=d=>x(t.drawItemInfo,1))},{default:a(()=>[f(" U1 ")]),_:1}),n(s(v),{size:"tiny",onClick:r[3]||(r[3]=d=>x(t.drawItemInfo,2))},{default:a(()=>[f(" U2 ")]),_:1}),n(s(v),{size:"tiny",onClick:r[4]||(r[4]=d=>x(t.drawItemInfo,3))},{default:a(()=>[f(" U3 ")]),_:1}),n(s(v),{size:"tiny",onClick:r[5]||(r[5]=d=>x(t.drawItemInfo,4))},{default:a(()=>[f(" U4 ")]),_:1}),n(s(I),{placement:"top",trigger:"hover"},{trigger:a(()=>[n(s(v),{size:"tiny",onClick:r[6]||(r[6]=d=>C(t.drawItemInfo,5))},{default:a(()=>[n(s(w),{icon:"solar:refresh-outline",class:"text-base"})]),_:1})]),default:a(()=>[Dt]),_:1})])])])])):b("",!0),(t.drawItemInfo.action==="IMAGINE"||t.drawItemInfo.action==="VARIATION"||t.drawItemInfo.action==="ZOOM"||t.drawItemInfo.action==="OUTPAINT"||t.drawItemInfo.action==="REROLL")&&t.drawItemInfo.status===3?(c(),u("div",Mt,[e("div",qt,[Et,e("span",Bt,[n(s(I),{placement:"top",trigger:"hover"},{trigger:a(()=>[n(s(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:a(()=>[Tt]),_:1})]),e("div",Gt,[e("div",Kt,[n(s(v),{size:"tiny",onClick:r[7]||(r[7]=d=>j(t.drawItemInfo,1))},{default:a(()=>[f(" V1 ")]),_:1}),n(s(v),{size:"tiny",onClick:r[8]||(r[8]=d=>j(t.drawItemInfo,2))},{default:a(()=>[f(" V2 ")]),_:1}),n(s(v),{size:"tiny",onClick:r[9]||(r[9]=d=>j(t.drawItemInfo,3))},{default:a(()=>[f(" V3 ")]),_:1}),n(s(v),{size:"tiny",onClick:r[10]||(r[10]=d=>j(t.drawItemInfo,4))},{default:a(()=>[f(" V4 ")]),_:1}),n(s(v),{size:"tiny",style:{opacity:"0"}},{default:a(()=>[f(" V5 ")]),_:1})])])])])):b("",!0),t.drawItemInfo.progress!==100&&t.drawItemInfo.status!==3?(c(),u("div",Lt,[t.drawItemInfo.orderId!==5?(c(),u("div",Ht,[t.drawItemInfo.action==="UPSCALE"?(c(),u("span",Qt," 操作："+A(`选中套图第${t.drawItemInfo.orderId||"x"}张图片进行放大`),1)):b("",!0),t.drawItemInfo.action==="VARIATION"?(c(),u("span",Ft," 操作："+A(`选中套图第${t.drawItemInfo.orderId||"x"}张图片进行变换`),1)):b("",!0)])):b("",!0),t.drawItemInfo.orderId===5?(c(),u("span",Vt," 操作：正在对图片重新生成一次 ")):b("",!0)])):b("",!0),t.drawItemInfo.action==="IMAGINE"&&!t.drawItemInfo.orderId&&t.drawItemInfo.status==="UPSCALE"?(c(),u("div",Jt," 操作：正在火速绘制中... ")):b("",!0),!t.drawItemInfo.orderId&&[4,5,6].includes(t.drawItemInfo.status)?(c(),u("div",Zt," 执行： 换个提示词重新试试吧！ ")):b("",!0),!t.drawItemInfo.action&&!t.drawItemInfo.extend?(c(),u("div",Yt," 上级： "+A(t.drawItemInfo.message_id||"正在加载中..."),1)):b("",!0),(t.drawItemInfo.action==="UPSCALE"||t.drawItemInfo.action==="ACTION")&&t.drawItemInfo.status===3?(c(),u("div",Xt,[e("div",Wt,[$t,e("span",es,[n(s(I),{placement:"top",trigger:"hover"},{trigger:a(()=>[n(s(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:a(()=>[ts]),_:1})]),e("div",ss,[e("div",as,[n(s(te),null,{default:a(()=>[n(s(I),{placement:"top",trigger:"hover"},{trigger:a(()=>[n(s(v),{size:"tiny",onClick:r[11]||(r[11]=d=>p(t.drawItemInfo,1))},{icon:a(()=>[e("img",{src:s(xe),class:"w-4",alt:""},null,8,ns)]),default:a(()=>[f(" U(Subtle) ")]),_:1})]),default:a(()=>[ls]),_:1}),n(s(I),{placement:"top",trigger:"hover"},{trigger:a(()=>[n(s(v),{size:"tiny",onClick:r[12]||(r[12]=d=>p(t.drawItemInfo,2))},{icon:a(()=>[e("img",{src:s(xe),class:"w-4",alt:""},null,8,os)]),default:a(()=>[f(" U(Creative) ")]),_:1})]),default:a(()=>[is]),_:1})]),_:1})])])])])):b("",!0),(t.drawItemInfo.action==="UPSCALE"||t.drawItemInfo.action==="ACTION")&&t.drawItemInfo.status===3?(c(),u("div",rs,[e("div",cs,[ds,e("span",us,[n(s(I),{placement:"top",trigger:"hover"},{trigger:a(()=>[n(s(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:a(()=>[fs]),_:1})]),e("div",bs,[e("div",ms,[n(s(te),null,{default:a(()=>[n(s(I),{placement:"top",trigger:"hover"},{trigger:a(()=>[n(s(v),{size:"tiny",onClick:r[13]||(r[13]=d=>q(t.drawItemInfo,1))},{icon:a(()=>[e("img",{src:s(ye),class:"w-4",alt:""},null,8,vs)]),default:a(()=>[f(" V(Strong) ")]),_:1})]),default:a(()=>[ps]),_:1}),n(s(I),{placement:"top",trigger:"hover"},{trigger:a(()=>[n(s(v),{size:"tiny",onClick:r[14]||(r[14]=d=>q(t.drawItemInfo,2))},{icon:a(()=>[e("img",{src:s(ye),class:"w-4",alt:""},null,8,ws)]),default:a(()=>[f(" V(Subtle) ")]),_:1})]),default:a(()=>[gs]),_:1})]),_:1})])])])])):b("",!0)])]))}}),Is="/assets/niji-55cc65e6.png",ys="/assets/mj-8c02cbcc.png",xs="/assets/market-f1234219.png",As={class:"grow flex h-screen flex-col lg:pt-0"},Os={class:"flex grow flex-col sm:flex-row h-full"},Cs={class:"p-4 sm:pt-6 bg-[#f8f8f8] p-4 dark:bg-[#18181c] overflow-y-auto w-full sm:w-[20rem] shrink-0 border-r-2 border-[#ffffff17]"},_s={class:"mt-4 text-sm flex items-center"},ks=e("div",{class:"text-sm mr-1"},"图片尺寸",-1),js={"data-tool-target":"tooltip-default"},Ps={class:"flex mt-2 py-1 pb-2 space-x-1 overflow-x-auto justify-between scrollbar-none"},Rs=["onClick"],Us={class:"flex items-center justify-center w-6 h-6"},zs={class:"mt-2 text-center text-xs leading-none text-current"},Ns={class:"mt-4 text-sm flex items-center"},Ss=e("div",{class:"mr-1"},"模型选择",-1),Ds={"data-tool-target":"tooltip-default"},Ms=e("div",{style:{width:"240px"}},[e("p",null,"MJ: 偏真实通用模型"),e("p",null,"NIJI: 偏动漫风格、适用于二次元模型")],-1),qs={class:"mt-2 flex justify-between"},Es=["onClick"],Bs={class:"relative w-full h-full dark:bg-black rounded",type:"button"},Ts={class:"absolute w-full h-full flex justify-center items-center"},Gs={class:"text-2xl text-white font-bold absolute left-5 top-1"},Ks=["src"],Ls={class:"mt-4"},Hs={class:"mt-2 flex justify-between items-center space-x-2 text-xs"},Qs=e("span",{class:"w-[65px] block text-sm"},"版本",-1),Fs={class:"flex-1"},Vs={key:0,class:"mt-2 flex justify-between items-center space-x-2 text-xs"},Js=e("span",{class:"w-[65px] block text-sm"},"风格",-1),Zs={class:"flex-1"},Ys={class:"mt-3 flex justify-between items-center space-x-2 text-xs"},Xs=e("span",{class:"w-[65px] block text-sm"},"品质",-1),Ws={class:"flex-1"},$s={class:"mt-3 flex justify-between items-center space-x-2 text-xs"},ea=e("span",{class:"w-[65px] block text-sm"},"混乱",-1),ta={class:"flex-1"},sa=e("div",{style:{width:"270px"}},[e("p",null,"取值范围：0-100、 --chaos 或 --c"),e("p",null,"混乱级别，可以理解为让AI天马行空的空间"),e("p",null,"值越小越可靠、默认0最为精准")],-1),aa={key:1,class:"mt-3 flex justify-between items-center space-x-2 text-xs"},na=e("span",{class:"w-[65px] block text-sm"},"风格化",-1),la={class:"flex-1"},oa=e("div",{style:{width:"270px"}},[e("p",null,"风格化：--stylize 或 --s，范围 1-1000"),e("p",null,"参数释义：数值越高，画面表现也会更具丰富性和艺术性")],-1),ia={class:"mt-3 flex justify-between items-center space-x-2 text-xs"},ra=e("span",{class:"w-[65px] block text-sm"},"携带参数",-1),ca={class:"flex-1"},da=e("div",{style:{width:"240px"}},[e("p",null,"是否自动携带参数"),e("p",null,"打开：携带上述我们配置的参数"),e("p",null,"关闭：使用指令中的我们自定义的参数")],-1),ua={class:"mt-5"},fa=e("div",{class:"block text-base"},"以图生图",-1),ba={class:"ant-spin-nested-loading css-4fssqp mt-5"},ma={class:"ant-spin-container"},va={class:"mt-2 flex justify-center items-center dark:bg-black p-5 rounded-md"},pa={key:0,for:"upload-file"},wa=e("div",{class:"upload-container"},[e("img",{class:"mx-auto py-2 w-11",src:"data:image/png;base64,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"}),e("p",{class:"mt-3"},"点击或拖拽一个图片到这里作为输入"),e("p",{class:"text-center dark:text-[#ffffff73]"}," 支持PNG和JPG格式 ")],-1),ga={key:1,class:"w-full h-full relative"},ha=["src"],Ia={class:"mt-5"},ya={class:"block flex justify-between"},xa={class:"text-base py-1"},Aa={class:"text-[#3076fd]"},Oa={class:"flex items-center"},Ca=ct('<div class="mt-3 space-y-1 items-center text-[#3076fd]"><div class="flex justify-between"><span class="w-[120px] block text-sm">绘画单次消耗：</span><span class="text-sm pr-2"> 4积分 </span></div><div class="flex justify-between"><span class="w-[120px] block text-sm">图生图单次消耗：</span><span class="text-sm pr-2"> 4积分 </span></div><div class="flex justify-between"><span class="w-[120px] block text-sm">放大单次消耗：</span><span class="text-sm pr-2"> 1积分 </span></div></div>',1),_a={class:"m-auto max-w-screen-4xl"},ka={class:"space-y-6 p-4"},ja=e("h3",{class:"text-lg sm:text-2xl font-bold leading-6"},"Midjourney",-1),Pa={class:"flex justify-between items-end"},Ra=e("b",null,"你想生成什么图像?",-1),Ua={class:"mt-4"},za={key:0,class:"mt-4"},Na={class:"mb-3 flex justify-between items-end"},Sa=e("b",null,"不需要的元素",-1),Da={class:"flex items-center space-x-3 whitespace-nowrap pb-[15px]"},Ma={class:"mt-3"},qa={class:"space-y-2 p-4"},Ea={key:0},Ba={class:"mt-6 mb-4 flex flex-col"},Ta={class:"text-xl font-bold flex items-end"},Ga=e("b",null,"工作中的内容",-1),Ka={key:0,class:"text-xs font-family ml-2"},La={key:0,class:"h-[10vh] flex flex-col justify-center items-center text-gray-500 relative"},Ha=["src"],Qa={class:"mt-4"},Fa={key:1,class:"h-[10vh] flex flex-col justify-center items-center text-gray-500 relative"},Va={class:"w-56 h-14 relative"},Ja={class:"mb-3"},Za={class:"min-h-[500px] mt-5"},Ya={class:"mt-6 mb-10 flex flex-col"},Xa={class:"text-xl font-bold"},Wa={class:"text-base text-[gray]"},$a=e("span",{class:"mt-2 text-xs font-bold text-[#444]"},"点击下面的编号按钮以获取升级版（U: 放大图片更细节）或变化版（V: 在此基础上变体）。绘画失败不扣除积分，请重试直到绘画成功为止。",-1),en={key:0,class:"w-full py-28"},tn=e("img",{class:"mx-auto",src:"data:image/png;base64,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",alt:""},null,-1),sn=[tn],an={key:1},nn={class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-4"},un=Ae({__name:"index",setup(fe){const se=m(null),_=at(),ae=nt(),g=Ce(),ne=h(()=>g.isLogin),le=h(()=>g.userBalance),K=h(()=>le.value.sumDrawMjCount||0),X=Oe(),k=h(()=>X.theme),oe=h(()=>k.value==="dark"?"#fff":"#000"),O=ke();_e();const{isMobile:L}=lt(),ie=m("/api/upload/file");let H=!1,W=null;const M=m("9:16"),x=m("MJ"),C=m("6.0"),j=m(0),P=m("1"),Q=m(100),q=m(0),p=m(""),t=m(""),r=m([]),d=m(0),E=m(!1),R=m(!1),U=m(!1),B=m([]),z=m(12),F=m(!0),N=m(0),S=m(1),Re=h(()=>!p.value||R.value||U.value||V.value),D=m("");let T;ot(ne,async(l,o)=>{l&&!o&&await J()});const Ue=h(()=>N.value>z.value),ze=[{aspect:"1:1",width:"100%",height:"100%"},{aspect:"4:3",width:"100%",height:"75%"},{aspect:"3:4",width:"75%",height:"100%"},{aspect:"16:9",width:"100%",height:"57%"},{aspect:"9:16",width:"57%",height:"100%"}],Ne=[{label:"默认风格",value:0},{label:"表现力风格",value:"expressive"},{label:"可爱风格",value:"cute"},{label:"景观风格",value:"scenic"}],Se=[{label:"普通",value:".25"},{label:"一般",value:".5"},{label:"高清",value:"1"},{label:"超高清",value:"2"}],De=h(()=>x.value==="MJ"?[{label:"6.0",value:"6.0"},{label:"5.2",value:"5.2"},{label:"5.1",value:"5.1"},{label:"5",value:"5"},{label:"4",value:"4"}]:x.value==="NIJI"?[{label:"6",value:"6"},{label:"5",value:"5"},{label:"4",value:"4"}]:[]),Me=[{name:"MJ",img:ys,val:"mj"},{name:"NIJI",img:Is,val:"niji"}],be=h(()=>l=>M.value===l),qe=h(()=>l=>x.value===l);function Ee(l){var i;const o=(i=l==null?void 0:l.target)==null?void 0:i.files[0];me(o)}function Be(l){l.preventDefault();const o=l.dataTransfer.files[0];me(o)}async function me(l){T=l;const o=new FileReader;o.onload=i=>{var y;D.value=(y=i.target)==null?void 0:y.result},o.readAsDataURL(l)}async function Te(){const l=await dt();B.value=l.data.filter(o=>o.status)}async function Ge(){const l=await pe({page:1,size:z.value}),{rows:o,countQueue:i,count:y}=l.data;r.value=o||[],N.value=y,d.value=i||0}async function Ke(){const l=ae.query.mjId;if(!l)return;const o=await ut({id:l});o.success&&(p.value=o.data,S.value=0,F.value=!0)}async function Le(){if(!p.value)return O.warning("请输入描述词！");U.value=!0;try{const l=Number(g.globalConfig.mjUseBaiduFy)===1?he:we,o=Number(g.globalConfig.mjUseBaiduFy)===1?{text:p.value}:{prompt:p.value},i=await l(o);if(!i.success)return O.error("翻译失败了！");p.value=i.data,U.value=!1}catch{U.value=!1}}const V=m(!1);async function He(){if(!t.value)return O.warning("请输入描述词！");V.value=!0;try{const l=Number(g.globalConfig.mjUseBaiduFy)===1?he:we,o=Number(g.globalConfig.mjUseBaiduFy)===1?{text:t.value}:{prompt:t.value},i=await l(o);if(!i.success)return O.error("翻译失败了！");t.value=i.data,V.value=!1}catch{V.value=!1}}async function Qe(){if(!p.value)return O.warning("请输入描述词！");R.value=!0;try{const l=await mt({prompt:p.value});if(!l.success)return O.error("联想失败了");p.value=l.data,R.value=!1}catch{R.value=!1}}function Fe(l){const o=/--\w+\s\S+/g;return l.replace(o,"")}function Ve(){if(!S.value)return"";let l="";return t.value&&(l+=` --no ${t.value}`),x.value==="MJ"&&C.value&&(l+=` --v ${C.value}`,l+=` --s ${Q.value}`),x.value==="NIJI"&&C.value&&(l+=` --niji ${C.value}`,j.value&&(l+=` --style ${j.value}`)),l+=` --ar ${M.value}`,l+=` --c ${q.value}`,l+=` --q ${P.value}`,l}async function Je(){var i;const l=new FormData;T&&l.append("file",T);const o=await Pe.post(ie.value,l,{headers:{"Content-Type":"multipart/form-data"}});return(i=o==null?void 0:o.data)==null?void 0:i.data}function Ze(l){const{prompt:o,aspect:i,isCarryParams:y}=l;p.value=o,i&&(M.value=i),S.value=y?1:0}async function Ye(){let l="";(D.value||T)&&(l=await Je());const o=Ve();S.value&&(p.value=Fe(p.value)),await G({prompt:p.value,imgUrl:l,extraParam:o,action:"IMAGINE"}),T&&(T=null),D.value="",F.value&&(S.value=1,F.value=!1),O.success("提交绘制任务成功、请等待绘制结束！"),g.token&&await ve(),!H&&J()}async function J(){H=!0;const l=await pe({page:1,size:z.value}),{rows:o,countQueue:i,count:y}=l.data;r.value=o||[],N.value=y,d.value=i||0,r.value.filter($e=>[1,2].includes($e.status)).length?W=setTimeout(()=>J(),3e3):H=!1}it(()=>{clearTimeout(W)});const re=h(()=>r.value.filter(l=>[1,2].includes(l.status)));function Xe(){_.push("/market")}function We(l){x.value=l,l==="MJ"&&(C.value="6.0"),l==="NIJI"&&(C.value="6")}async function ve(){E.value=!0;try{await g.getUserInfo(),E.value=!1}catch{E.value=!1}}return rt(()=>{J(),Ke(),Te();const l=document.getElementById("footer");new IntersectionObserver((i,y)=>{i.forEach(Z=>{Z.isIntersecting&&Ue.value&&(z.value=z.value+12,Ge())})}).observe(l)}),(l,o)=>(c(),u("div",As,[e("div",Os,[e("div",Cs,[e("div",_s,[ks,e("div",js,[n(s(I),{placement:"right-end",trigger:"hover"},{trigger:a(()=>[n(s(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:a(()=>[f(" 参数释义：生成图片尺寸比例 ")]),_:1})])]),e("div",Ps,[(c(),u($,null,ee(ze,(i,y)=>e("button",{key:y,class:"flex-1 p-[2px] rounded-md",onClick:Z=>M.value=i.aspect},[e("div",{class:Y(["border-2 border-gray-300 box-borde rounded-md dark:bg-black flex flex-col items-center",[be.value(i.aspect)?"aspect-active":"",s(L)?"py-3":"py-2"]])},[e("div",Us,[e("div",{class:Y(["border-gray-300 rounded border-2",[be.value(i.aspect)?"aspect-active":""]]),style:ft({width:i.width,height:i.height})},null,6)]),e("div",zs,A(i.aspect),1)],2)],8,Rs)),64))]),e("div",Ns,[Ss,e("div",Ds,[n(s(I),{placement:"right-end",trigger:"hover"},{trigger:a(()=>[n(s(w),{icon:"ri:error-warning-line",class:"text-base"})]),default:a(()=>[Ms]),_:1})])]),e("ul",qs,[(c(),u($,null,ee(Me,(i,y)=>e("li",{key:y,class:Y(["flex border-[3px] border-transparent justify-center items-center rounded-md m-1 m-bg-gradient",[qe.value(i.name)?"model-active":""]]),onClick:Z=>We(i.name)},[e("button",Bs,[e("div",Ts,[e("div",Gs,A(i.name),1)]),e("img",{src:i.img,class:"rounded aspect-[3/1] w-full object-cover"},null,8,Ks)])],10,Es)),64))]),e("div",Ls,[e("div",Hs,[Qs,e("span",Fs,[n(s(de),{value:C.value,"onUpdate:value":o[0]||(o[0]=i=>C.value=i),size:"small",options:De.value},null,8,["value","options"])])]),x.value==="NIJI"?(c(),u("div",Vs,[Js,e("span",Zs,[n(s(de),{value:j.value,"onUpdate:value":o[1]||(o[1]=i=>j.value=i),size:"small",options:Ne},null,8,["value"])])])):b("",!0),e("div",Ys,[Xs,e("span",Ws,[n(s(de),{value:P.value,"onUpdate:value":o[2]||(o[2]=i=>P.value=i),size:"small",options:Se},null,8,["value"])])]),e("div",$s,[ea,e("span",ta,[n(s(Ie),{value:q.value,"onUpdate:value":o[3]||(o[3]=i=>q.value=i),min:0,max:100,size:"small"},null,8,["value"])]),n(s(I),{placement:"right-end",trigger:"hover"},{trigger:a(()=>[n(s(w),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:a(()=>[sa]),_:1})]),x.value==="MJ"?(c(),u("div",aa,[na,e("span",la,[n(s(Ie),{value:Q.value,"onUpdate:value":o[4]||(o[4]=i=>Q.value=i),min:0,max:1e3,size:"small"},null,8,["value"])]),n(s(I),{placement:"right-end",trigger:"hover"},{trigger:a(()=>[n(s(w),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:a(()=>[oa]),_:1})])):b("",!0),e("div",ia,[ra,e("span",ca,[n(s(vt),{value:S.value,"onUpdate:value":o[5]||(o[5]=i=>S.value=i),size:"small","checked-value":1,"unchecked-value":0},null,8,["value"])]),n(s(I),{placement:"right-end",trigger:"hover"},{trigger:a(()=>[n(s(w),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:a(()=>[da]),_:1})])]),e("div",ua,[fa,e("div",ba,[e("div",ma,[e("div",va,[D.value?b("",!0):(c(),u("label",pa,[e("div",{class:"upload cursor-pointer",onDragover:o[7]||(o[7]=ce(()=>{},["prevent"])),onDragenter:o[8]||(o[8]=ce(()=>{},["prevent"])),onDragleave:o[9]||(o[9]=ce(()=>{},["prevent"])),onDrop:Be},[e("input",{id:"upload-file",type:"file",accept:".png, .jpg, .jpeg",style:{display:"none"},onChange:o[6]||(o[6]=i=>Ee(i))},null,32),wa],32)])),D.value?(c(),u("div",ga,[e("img",{src:D.value,alt:""},null,8,ha),e("img",{class:"absolute bottom-1 right-1 cursor-pointer",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAD0klEQVRIiY2WS2xWRRTHf/+ZryimPqLhocEAMbrQqBvYK4G2ArJxw0YxqLSo3bgQceFKo4mJywoYUBFZAilNRKVEN8ZoF2xYoiUhaSISExsVtJxj5n5z+917ez/xTk7uPM+Z8/qf0cnxWQxhru6/ToOOHja02dAGQ+sN3WNIjn4zdNHQjKNpQxcMzTsUPDzzKceaHP+5x7wnbJmhJw2NGtqWxzUGVXL0t6EvDQ5kodebgjqh6OZPgLMK2A+MAreSp0sy6l+eWwY8DYw4HALecZgjC0kyOrGrWG7hfokJwXZ5f+ZV4d01L0ZCAwavAA847AVmy9WQpGVaFbCJgG0PGEFG8a9QrFB9zYk9PolGAn4g4PeV6yF2N90S8X0R357HXVKlX2dUoz5rwwF/M+DLi3GWuCngr7ZstiC/0WTapECxx6p7un3bG/EtpUa3RWw0YgOxbh6P2LGIvR7lc6V2LZe5EvD9Af844jfqZvXkmpcDfnvqPBLwoRYGCwH/IeAfBGwsYL9U/ZYv82ssbm3vR+y7gFmLSZO1Hu9EfEiwXI0wFgwI3hBcEkwK/hIclVidItLgCrAbmAKGgLeAgaURWcwNJR9taEZXhdYE/EjW+OuAvxDw+Sj/M8r3RHwq4psi/mnE1/YLmohvTBqtb9GmQrZC6DOhF4VOCz1nqAM6hTSC6wiE1S2plnl4ytR1CRnubtvUSMyVguOCXYITeW5HNuWd8mrS95otXpfBJEil5AQWTY0qqBCBDm1j5fTvf1klCEoovKbHti4qt6tCe4ROCG1NUCN0UoSdgsOFxsonfKn5DeaTRj8BjzbBs7LpKvB8jq4twOdZk51gU6BnQcdAK7p3F/gSTrMpj2b+A2LmAovR9UTEP4n4XREfjPjhiA9H/KuI74745X7QFfGZhAwpbK/Xw7FIxoWIvRexEwF7KmDHA9YDyQKE/WjAdwR8KuNaj48W+f2TUiOZ7gJwFnxb6ZFutBCAx+jC/j7g3krIl75bKXRQaK3Qg0KdSskh++0bOed1cfz7dGyro0lDsVE5zbrUaSnzVVpI5b15Pp99xtCpsh6dC/hEE6EzKHZuht4RT4kfW+Y/Sq5J/YKJ4JrBu8BDguF6RfU+SdiPQnnwHPA28AeNCpsibCzgZ3ItySjdv9i1UxFI0xF7KWKXy7ITGgxmA747YB+mMtEU8j+qbSoThwK+K+Vnda0wXTJVqXB+vbwm+MJgLJeAzk0eKQuCacFBwZlcUmrGXXxulVDl3RfNNYfTwLcpxAWbDTYC68DvyP6aF7pk6EfQWdB50O+tvkP8C8uzPO7HeTXiAAAAAElFTkSuQmCC",onClick:o[10]||(o[10]=i=>D.value=null)})])):b("",!0)])])])]),e("div",Ia,[e("div",ya,[e("span",xa,[f("钱包余额("),e("b",Aa,A(K.value||0),1),f(" 积分)")]),e("span",Oa,[n(s(v),{text:"",size:"tiny",type:"primary",loading:E.value,onClick:ve},{default:a(()=>[f("刷新")]),_:1},8,["loading"]),n(s(I),{placement:"right-end",trigger:"hover"},{trigger:a(()=>[n(s(w),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:a(()=>[f(" 绘画账户信息 ")]),_:1})])]),Ca])]),e("div",{class:Y(["h-full flex-1",[s(L)?"":"overflow-y-auto overflow-hidden"]])},[e("div",_a,[e("div",ka,[ja,e("div",null,[e("div",Pa,[Ra,n(s(te),null,{default:a(()=>[n(s(v),{type:"primary",loading:U.value,onClick:Le},{icon:a(()=>[n(s(w),{icon:"ri:translate",class:"text-base"})]),default:a(()=>[f(" 翻译 ")]),_:1},8,["loading"]),n(s(v),{type:"primary",loading:R.value,onClick:Qe},{icon:a(()=>[n(s(w),{icon:"material-symbols:mindfulness-outline-rounded",class:"text-base"})]),default:a(()=>[f(" 联想 ")]),_:1},8,["loading"])]),_:1})]),e("div",Ua,[n(s(ge),{value:p.value,"onUpdate:value":o[11]||(o[11]=i=>p.value=i),type:"textarea",disabled:R.value||U.value,autosize:{minRows:4,maxRows:6},placeholder:"例如: A cute little cat (Midjourney对中文描述词有一定限制、我们建议您点击右侧翻译将您的描述词转为英文再进行提交、联想则是会将您的描述词交由GPT让其发挥想象空间为您在此基础创建更为详细的描述！)"},null,8,["value","disabled"]),Number(s(g).globalConfig.mjHideNotBlock)!==1?(c(),u("div",za,[e("div",Na,[Sa,n(s(v),{type:"primary",loading:V.value,onClick:He},{icon:a(()=>[n(s(w),{icon:"ri:translate",class:"text-base"})]),default:a(()=>[f(" 翻译 ")]),_:1},8,["loading"])]),n(s(ge),{value:t.value,"onUpdate:value":o[12]||(o[12]=i=>t.value=i),type:"textarea",rows:1,placeholder:"例：生成房间图片、但是不要床、你可以填bed！"},null,8,["value"])])):b("",!0)]),B.value.length?(c(),u("div",{key:0,class:Y(["w-full dark:bg-transparent",s(L)?"py-3":"py-6"])},[n(s(bt),{"x-scrollable":""},{default:a(()=>[e("div",Da,[(c(!0),u($,null,ee(B.value,(i,y)=>(c(),ue(s(v),{key:y,size:"small",onClick:Z=>Ze(i)},{default:a(()=>[f(A(i.title),1)]),_:2},1032,["onClick"]))),128))])]),_:1})],2)):b("",!0),e("div",Ma,[n(s(v),{type:"primary",loading:!1,disabled:Re.value,onClick:o[13]||(o[13]=i=>Ye())},{icon:a(()=>[n(s(w),{icon:"ri:ai-generate",class:"text-base"})]),default:a(()=>[f(" 提交绘画任务 ")]),_:1},8,["disabled"])])])]),e("div",qa,[Number(s(g).globalConfig.mjHideWorkIn)!==1?(c(),u("div",Ea,[e("div",Ba,[e("span",Ta,[Ga,d.value?(c(),u("span",Ka,"当前系统进行中任务["+A(d.value)+"]",1)):b("",!0)])]),re.value.length?b("",!0):(c(),u("div",La,[e("img",{class:"w-18",src:s(xs)},null,8,Ha),e("span",Qa,[n(s(v),{text:"",size:"small",onClick:Xe},{default:a(()=>[f("点击前往市场看看别人的作品吧！")]),_:1})])])),re.value.length?(c(),u("div",Fa,[e("div",Va,[n(je,{"text-color":oe.value},null,8,["text-color"])]),e("p",Ja," 当前"+A(re.value.length)+"个任务正在进行中、请耐心等候绘制完成、您可以前往其他页面稍后回来查看结果！ ",1)])):b("",!0)])):b("",!0),e("div",Za,[e("div",Ya,[e("span",Xa,[f("我的绘图 "),e("span",Wa,"["+A(r.value.length)+"]",1)]),$a]),!r.value||!r.value.length?(c(),u("div",en,sn)):b("",!0),r.value&&r.value.length?(c(),u("div",an,[e("div",nn,[(c(!0),u($,null,ee(r.value,i=>(c(),ue(hs,{key:i.id,"draw-item-info":i,onQueryData:J},null,8,["draw-item-info"]))),128))])])):b("",!0)]),e("div",{id:"footer",ref_key:"containerRef",ref:se},null,512)])])],2)])]))}});export{un as default};
