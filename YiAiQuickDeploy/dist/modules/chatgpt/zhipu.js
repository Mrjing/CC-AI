'use strict';const _0x239366=_0x25f9;(function(_0x5c0562,_0x351df6){const _0x31a11e=_0x25f9,_0x5c29db=_0x5c0562();while(!![]){try{const _0x4891b6=-parseInt(_0x31a11e(0x1b3))/0x1*(parseInt(_0x31a11e(0x1ac))/0x2)+parseInt(_0x31a11e(0x19b))/0x3*(-parseInt(_0x31a11e(0x1a1))/0x4)+parseInt(_0x31a11e(0x193))/0x5+-parseInt(_0x31a11e(0x196))/0x6*(parseInt(_0x31a11e(0x1b6))/0x7)+parseInt(_0x31a11e(0x1af))/0x8*(parseInt(_0x31a11e(0x199))/0x9)+parseInt(_0x31a11e(0x1b1))/0xa*(-parseInt(_0x31a11e(0x1b7))/0xb)+-parseInt(_0x31a11e(0x191))/0xc*(-parseInt(_0x31a11e(0x1ad))/0xd);if(_0x4891b6===_0x351df6)break;else _0x5c29db['push'](_0x5c29db['shift']());}catch(_0x50e206){_0x5c29db['push'](_0x5c29db['shift']());}}}(_0x56e7,0x27789));function _0x56e7(){const _0x1ffb90=['application/json','round','now','POST','text','error:\x20','log','722YfSHtS','510120UqmQhW','usage','1277096aVrylL','then','2543770yhWHhJ','data:','257ygEyLO','trim','defineProperty','10129fmmeKC','11YsudeZ','data','replace','120AtFtSl','/sse-invoke','735845UBMVRC','catch','compilerMetaJsonStr','522DszZKw','json\x20parse\x20error\x20from\x20zhipu!','is_end','9uIZUny','id:','96735ZetyIU','axios','meta:','length','filter','https://open.bigmodel.cn/api/paas/v3/model-api/','8qfhxDk','generateToken','split','HS256'];_0x56e7=function(){return _0x1ffb90;};return _0x56e7();}Object[_0x239366(0x1b5)](exports,'__esModule',{'value':!![]}),exports['sendMessageFromZhipu']=exports['compilerStream']=exports['compilerMetaJsonStr']=exports[_0x239366(0x1a2)]=void 0x0;const axios=require(_0x239366(0x19c)),jwt=require('jsonwebtoken');function generateToken(_0x1c020b,_0x13a3db=0x3e8*0x3c*0x3c*0x18*0x168){const _0x597ee0=_0x239366,[_0x2480d3,_0x5cc335]=_0x1c020b[_0x597ee0(0x1a3)]('.'),_0x4228b0={'api_key':_0x2480d3,'exp':Math['round'](Date[_0x597ee0(0x1a7)]())+_0x13a3db*0x3e8,'timestamp':Math[_0x597ee0(0x1a6)](Date[_0x597ee0(0x1a7)]())};return jwt['sign'](_0x4228b0,_0x5cc335,{'algorithm':_0x597ee0(0x1a4),'header':{'alg':_0x597ee0(0x1a4),'sign_type':'SIGN'}});}exports['generateToken']=generateToken;function compilerMetaJsonStr(_0x295c29){const _0x7b02eb=_0x239366;let _0x357c2b={};try{_0x357c2b=JSON['parse'](_0x295c29);}catch(_0x4d625b){_0x357c2b={'usage':{'completion_tokens':0x31,'prompt_tokens':0x14d,'total_tokens':0x18f}},console['error'](_0x7b02eb(0x197),_0x295c29);}return _0x357c2b;}exports[_0x239366(0x195)]=compilerMetaJsonStr;function compilerStream(_0x2a549f){const _0x377b9c=_0x239366;var _0x2e6485;if(_0x2a549f[_0x377b9c(0x19e)]===0x3)return{'event':_0x2a549f[0x0][_0x377b9c(0x190)]('event:',''),'id':_0x2a549f[0x1][_0x377b9c(0x190)](_0x377b9c(0x19a),''),'is_end':![],'result':_0x2a549f[0x2][_0x377b9c(0x190)](_0x377b9c(0x1b2),'')['trim']()};if(_0x2a549f['length']===0x4)return{'event':_0x2a549f[0x0]['replace']('event:',''),'id':_0x2a549f[0x1][_0x377b9c(0x190)](_0x377b9c(0x19a),''),'result':_0x2a549f[0x2][_0x377b9c(0x190)]('data:','')[_0x377b9c(0x1b4)](),'is_end':!![],'usage':(_0x2e6485=compilerMetaJsonStr(_0x2a549f[0x3][_0x377b9c(0x190)](_0x377b9c(0x19d),'')))===null||_0x2e6485===void 0x0?void 0x0:_0x2e6485[_0x377b9c(0x1ae)]};}exports['compilerStream']=compilerStream;async function sendMessageFromZhipu(_0x101517,{onProgress:_0x2193b1,key:_0x5c3906,model:_0x2b8af5,temperature:temperature=0.95}){const _0x168df5=await generateToken(_0x5c3906);return new Promise((_0x5137d6,_0x3a27d8)=>{const _0x8340be=_0x25f9,_0x2b0404=_0x8340be(0x1a0)+_0x2b8af5+_0x8340be(0x192),_0x2af9ea={'method':_0x8340be(0x1a8),'url':_0x2b0404,'responseType':'stream','headers':{'Content-Type':_0x8340be(0x1a5),'Authorization':_0x168df5},'data':{'prompt':_0x101517,'temperature':temperature}};axios(_0x2af9ea)[_0x8340be(0x1b0)](_0x18e4d7=>{const _0x4e52ad=_0x8340be,_0x46f252=_0x18e4d7[_0x4e52ad(0x18f)];let _0x3c84dc,_0xc13d9e='';_0x46f252['on']('data',_0x135fee=>{const _0x1366d7=_0x4e52ad,_0x2da195=_0x135fee['toString']()['split']('\x0a')[_0x1366d7(0x19f)](_0x36f102=>_0x36f102[_0x1366d7(0x1b4)]()!==''),_0x41ed5e=compilerStream(_0x2da195);if(!_0x41ed5e)return;const {id:_0x4f9e68,result:_0x425dda,is_end:_0x27da7a}=_0x41ed5e;_0x425dda&&(_0xc13d9e+=_0x425dda[_0x1366d7(0x1b4)]()),_0x27da7a&&(_0x41ed5e[_0x1366d7(0x198)]=![],_0x3c84dc=_0x41ed5e,_0x3c84dc[_0x1366d7(0x1a9)]=_0xc13d9e),_0x2193b1(_0x41ed5e);}),_0x46f252['on']('end',()=>{_0x5137d6(_0x3c84dc),_0xc13d9e='';});})[_0x8340be(0x194)](_0x5e44f8=>{const _0x4cdec0=_0x8340be;console[_0x4cdec0(0x1ab)](_0x4cdec0(0x1aa),_0x5e44f8);});});}function _0x25f9(_0x4cf6fd,_0x2aaba2){const _0x56e7fa=_0x56e7();return _0x25f9=function(_0x25f911,_0x2725dc){_0x25f911=_0x25f911-0x18f;let _0x323bdb=_0x56e7fa[_0x25f911];return _0x323bdb;},_0x25f9(_0x4cf6fd,_0x2aaba2);}exports['sendMessageFromZhipu']=sendMessageFromZhipu;