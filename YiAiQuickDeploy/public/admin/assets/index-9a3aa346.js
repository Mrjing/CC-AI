
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as P,y as D,B as E,h as c,o as a,c as u,b as i,I as m,f as s,a as r,e as f,J as h,t as B,ai as d,G as F,S as I,U as G,_ as L,n as R}from"./index-8db84802.js";const U={class:"sidebar-item"},$=["href","target","onClick"],A={class:"title"},H={class:"title"},K=P({name:"SidebarItem"}),M=P({...K,props:{item:{type:Object,required:!0},basePath:{type:String,default:""}},setup(e){const _=e,N=D(),O=E(()=>{let o=!0;return _.item.children?_.item.children.every(b=>{var l;return((l=b.meta)==null?void 0:l.sidebar)===!1})&&(o=!1):o=!1,o});return(o,b)=>{var y;const l=L,k=c("el-icon"),V=c("el-menu-item"),J=c("router-link"),j=c("SidebarItem"),q=c("el-sub-menu");return a(),u("div",U,[i(O)?(a(),m(q,{key:1,title:((y=e.item.meta)==null?void 0:y.title)??"[ 无标题 ]",index:i(N).settings.app.routeBaseOn!=="filesystem"?i(d)(e.basePath,e.item.path):JSON.stringify(e.item)},{title:s(()=>{var t,n;return[(t=e.item.meta)!=null&&t.icon?(a(),m(k,{key:0,class:"title-icon"},{default:s(()=>[f(l,{name:e.item.meta.icon},null,8,["name"])]),_:1})):h("",!0),r("span",H,B(((n=e.item.meta)==null?void 0:n.title)??"[ 无标题 ]"),1)]}),default:s(()=>[(a(!0),u(I,null,G(e.item.children,t=>{var n;return a(),u(I,null,[((n=t.meta)==null?void 0:n.sidebar)!==!1?(a(),m(j,{key:t.path,item:t,"base-path":i(d)(e.basePath,e.item.path)},null,8,["item","base-path"])):h("",!0)],64)}),256))]),_:1},8,["title","index"])):(a(),m(J,{key:0,custom:"",to:i(d)(e.basePath,e.item.path)},{default:s(({href:t,navigate:n,isActive:w,isExactActive:z})=>{var g,x,v;return[r("a",{href:(g=e.item.meta)!=null&&g.link?e.item.meta.link:t,class:F([w&&"router-link-active",z&&"router-link-exact-active"]),target:(x=e.item.meta)!=null&&x.link?"_blank":"_self",onClick:n},[f(V,{title:((v=e.item.meta)==null?void 0:v.title)??"[ 无标题 ]",index:i(d)(e.basePath,e.item.path||"")},{default:s(()=>{var S,C;return[(S=e.item.meta)!=null&&S.icon?(a(),m(k,{key:0,class:"title-icon"},{default:s(()=>[f(l,{name:e.item.meta.icon},null,8,["name"])]),_:1})):h("",!0),r("span",A,B(((C=e.item.meta)==null?void 0:C.title)??"[ 无标题 ]"),1)]}),_:1},8,["title","index"])],10,$)]}),_:1},8,["to"]))])}}});const T=R(M,[["__scopeId","data-v-a9cfdc56"]]);export{T as default};