'use strict';const _0x1d0355=_0x3dbd;(function(_0x4cb21d,_0x33df08){const _0x1bd6ea=_0x3dbd,_0x32181c=_0x4cb21d();while(!![]){try{const _0x5b9147=-parseInt(_0x1bd6ea(0x149))/0x1+-parseInt(_0x1bd6ea(0x143))/0x2+parseInt(_0x1bd6ea(0x146))/0x3+parseInt(_0x1bd6ea(0x155))/0x4*(-parseInt(_0x1bd6ea(0x14c))/0x5)+parseInt(_0x1bd6ea(0x160))/0x6+-parseInt(_0x1bd6ea(0x15e))/0x7+-parseInt(_0x1bd6ea(0x14a))/0x8*(-parseInt(_0x1bd6ea(0x153))/0x9);if(_0x5b9147===_0x33df08)break;else _0x32181c['push'](_0x32181c['shift']());}catch(_0x1825e1){_0x32181c['push'](_0x32181c['shift']());}}}(_0x8973,0x5046c));Object['defineProperty'](exports,_0x1d0355(0x15a),{'value':!![]}),exports[_0x1d0355(0x14d)]=exports[_0x1d0355(0x156)]=void 0x0;function _0x3dbd(_0x2ff8f9,_0x2ef072){const _0x897389=_0x8973();return _0x3dbd=function(_0x3dbd5c,_0x4c42b2){_0x3dbd5c=_0x3dbd5c-0x142;let _0x355f5a=_0x897389[_0x3dbd5c];return _0x355f5a;},_0x3dbd(_0x2ff8f9,_0x2ef072);}const axios=require('axios'),getApiModelMaps=()=>{const _0x2ef9d7=_0x1d0355;let _0x2fcee0={};const _0x4d8816={'ERNIE-Bot':'completions','ERNIE-Bot-turbo':_0x2ef9d7(0x150),'BLOOMZ-7B':_0x2ef9d7(0x142),'ERNIE-Bot-4':'completions_pro','Llama-2-7b-chat':_0x2ef9d7(0x161),'Llama-2-13b-chat':'llama_2_13b','ChatGLM2-6B-32K':_0x2ef9d7(0x162),'Qianfan-Chinese-Llama-2-7B':_0x2ef9d7(0x14e)};return Object['keys'](_0x4d8816)['map'](_0x4e6ad6=>{_0x2fcee0[''+_0x4e6ad6['toLowerCase']()]=_0x4d8816[_0x4e6ad6];}),_0x2fcee0;};function getAccessToken(_0x2153d9,_0x9e7b0b){const _0x576418=_0x1d0355;let _0x21d2d6=_0x576418(0x15d)+_0x2153d9+_0x576418(0x14f)+_0x9e7b0b;return new Promise((_0x216802,_0x5a23f1)=>{const _0x4d7061=_0x576418;axios['post'](_0x21d2d6)['then'](_0x18e794=>{const _0x325390=_0x3dbd;_0x216802(_0x18e794[_0x325390(0x154)][_0x325390(0x145)]);})[_0x4d7061(0x157)](_0x56aa73=>{_0x5a23f1(_0x56aa73);});});}exports[_0x1d0355(0x156)]=getAccessToken;function sendMessageFromBaidu(_0x1f5fa3,{onProgress:_0x1b9048,accessToken:_0x5042bf,model:_0x922428,temperature:temperature=0.95}){const _0x1b0728=_0x1d0355,_0x121154=getApiModelMaps()[_0x922428['trim']()[_0x1b0728(0x144)]()];return new Promise((_0xc043d4,_0x4039a5)=>{const _0x472d51=_0x1b0728,_0x171e3d='https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/'+_0x121154+'?access_token='+_0x5042bf;var _0x1adf1e={'method':_0x472d51(0x159),'url':_0x171e3d,'responseType':_0x472d51(0x147),'headers':{'Content-Type':_0x472d51(0x15c)},'data':{'stream':!![],'messages':_0x1f5fa3}};axios(_0x1adf1e)['then'](_0x53c9a7=>{const _0x498f2a=_0x472d51,_0x8674b4=_0x53c9a7['data'];let _0x2a1011={},_0x556540='',_0x57f2a9='';_0x8674b4['on'](_0x498f2a(0x154),_0x5c5f5f=>{const _0xa1c538=_0x498f2a,_0x2c23c0=_0x5c5f5f['toString']()[_0xa1c538(0x148)]('\x0a\x0a')[_0xa1c538(0x151)](_0x1c908b=>_0x1c908b[_0xa1c538(0x14b)]()!=='');for(const _0x152dd2 of _0x2c23c0){const _0x4734f6=_0x152dd2[_0xa1c538(0x152)](_0xa1c538(0x15b),'');try{const _0x3bc6a8=_0x556540+_0x4734f6,_0x4351c6=JSON['parse'](_0x3bc6a8);_0x556540='';const {is_end:_0xd51899,result:_0x2d9b17}=_0x4351c6;_0x2d9b17&&(_0x57f2a9+=_0x2d9b17),_0xd51899&&(_0x2a1011=_0x4351c6,_0x2a1011[_0xa1c538(0x15f)]=_0x57f2a9),_0x1b9048(_0x4351c6);}catch(_0x172921){_0x556540=_0x4734f6;}}}),_0x8674b4['on'](_0x498f2a(0x158),()=>{_0x57f2a9='',_0x556540='',_0xc043d4(_0x2a1011);});})[_0x472d51(0x157)](_0x2f6d16=>{_0x4039a5(new Error(_0x2f6d16));});});}function _0x8973(){const _0x56fe5a=['&client_secret=','eb-instant','filter','replace','6013971rEZXjN','data','133208aJqGhP','getAccessToken','catch','end','POST','__esModule','data:\x20','application/json','https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=','1597050PHneVB','text','3739200tybBNh','llama_2_7b','chatglm2_6b_32k','bloomz_7b1','735352FPnULK','toLowerCase','access_token','532383kMNfGi','stream','split','510940fAcOnW','8WozpbC','trim','5IjTmdQ','sendMessageFromBaidu','qianfan_chinese_llama_2_7b'];_0x8973=function(){return _0x56fe5a;};return _0x8973();}exports[_0x1d0355(0x14d)]=sendMessageFromBaidu;