'use strict';const _0x4c5a50=_0x2275;(function(_0x10b453,_0x3225e7){const _0x721aed=_0x2275,_0x59f870=_0x10b453();while(!![]){try{const _0x472749=-parseInt(_0x721aed(0xc8))/0x1*(-parseInt(_0x721aed(0xc4))/0x2)+parseInt(_0x721aed(0xd8))/0x3*(-parseInt(_0x721aed(0xd2))/0x4)+parseInt(_0x721aed(0xd4))/0x5*(-parseInt(_0x721aed(0xbf))/0x6)+-parseInt(_0x721aed(0xc5))/0x7+-parseInt(_0x721aed(0xc2))/0x8+parseInt(_0x721aed(0xd0))/0x9+-parseInt(_0x721aed(0xc1))/0xa*(-parseInt(_0x721aed(0xb5))/0xb);if(_0x472749===_0x3225e7)break;else _0x59f870['push'](_0x59f870['shift']());}catch(_0x3f82de){_0x59f870['push'](_0x59f870['shift']());}}}(_0x3078,0xa3c02));Object[_0x4c5a50(0xb3)](exports,_0x4c5a50(0xc3),{'value':!![]}),exports[_0x4c5a50(0xcb)]=exports[_0x4c5a50(0xb7)]=void 0x0;const axios=require(_0x4c5a50(0xbd)),getApiModelMaps=()=>{const _0x16f594=_0x4c5a50;let _0x4ec038={};const _0x302279={'ERNIE-Bot':_0x16f594(0xd1),'ERNIE-Bot-turbo':_0x16f594(0xd7),'BLOOMZ-7B':_0x16f594(0xc9),'ERNIE-Bot-4':_0x16f594(0xbc),'Llama-2-7b-chat':_0x16f594(0xce),'Llama-2-13b-chat':'llama_2_13b','ChatGLM2-6B-32K':'chatglm2_6b_32k','Qianfan-Chinese-Llama-2-7B':'qianfan_chinese_llama_2_7b'};return Object[_0x16f594(0xb9)](_0x302279)['map'](_0x575da5=>{_0x4ec038[''+_0x575da5['toLowerCase']()]=_0x302279[_0x575da5];}),_0x4ec038;};function _0x3078(){const _0x14983=['llama_2_7b','toString','8864019ooURZv','completions','636280FYBbJI','split','125ICedtA','filter','data','eb-instant','6XjSZxx','defineProperty','?access_token=','24497AjmGJt','toLowerCase','getAccessToken','end','keys','catch','parse','completions_pro','axios','then','178290ZyMQAL','access_token','4490MTuEYp','4172584chpGhB','__esModule','134EhBpOt','7304955sszdDr','post','stream','19583IRFEOB','bloomz_7b1','trim','sendMessageFromBaidu','text','data:\x20'];_0x3078=function(){return _0x14983;};return _0x3078();}function getAccessToken(_0xa6ba30,_0x1e4f1a){let _0x4cac1b='https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id='+_0xa6ba30+'&client_secret='+_0x1e4f1a;return new Promise((_0x126a68,_0x59dd1e)=>{const _0x3964c2=_0x2275;axios[_0x3964c2(0xc6)](_0x4cac1b)[_0x3964c2(0xbe)](_0x4069f4=>{const _0x50041a=_0x3964c2;_0x126a68(_0x4069f4[_0x50041a(0xd6)][_0x50041a(0xc0)]);})[_0x3964c2(0xba)](_0x5017a2=>{_0x59dd1e(_0x5017a2);});});}function _0x2275(_0x1f1f4f,_0x439651){const _0x307861=_0x3078();return _0x2275=function(_0x22757b,_0x2449fe){_0x22757b=_0x22757b-0xb3;let _0x574956=_0x307861[_0x22757b];return _0x574956;},_0x2275(_0x1f1f4f,_0x439651);}exports[_0x4c5a50(0xb7)]=getAccessToken;function sendMessageFromBaidu(_0x2fc1a4,{onProgress:_0x175043,accessToken:_0x463876,model:_0x9578e0,temperature:temperature=0.95}){const _0x250e82=_0x4c5a50,_0x4b0d33=getApiModelMaps()[_0x9578e0['trim']()[_0x250e82(0xb6)]()];return new Promise((_0x34a1a0,_0x22fa8a)=>{const _0x46043b=_0x250e82,_0xf7c01c='https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/'+_0x4b0d33+_0x46043b(0xb4)+_0x463876;var _0x14f0b6={'method':'POST','url':_0xf7c01c,'responseType':_0x46043b(0xc7),'headers':{'Content-Type':'application/json'},'data':{'stream':!![],'messages':_0x2fc1a4}};axios(_0x14f0b6)[_0x46043b(0xbe)](_0x4f4c86=>{const _0x467e1b=_0x46043b,_0x22dd4d=_0x4f4c86[_0x467e1b(0xd6)];let _0x25d9d9={},_0x1f1b52='',_0x14a85f='';_0x22dd4d['on'](_0x467e1b(0xd6),_0x57fab4=>{const _0x4619b6=_0x467e1b,_0x2f7ce5=_0x57fab4[_0x4619b6(0xcf)]()[_0x4619b6(0xd3)]('\x0a\x0a')[_0x4619b6(0xd5)](_0x58fa0a=>_0x58fa0a[_0x4619b6(0xca)]()!=='');for(const _0x34e049 of _0x2f7ce5){const _0x2a018a=_0x34e049['replace'](_0x4619b6(0xcd),'');try{const _0x2cdf7e=_0x1f1b52+_0x2a018a,_0x284828=JSON[_0x4619b6(0xbb)](_0x2cdf7e);_0x1f1b52='';const {is_end:_0x537867,result:_0x5e653e}=_0x284828;_0x5e653e&&(_0x14a85f+=_0x5e653e),_0x537867&&(_0x25d9d9=_0x284828,_0x25d9d9[_0x4619b6(0xcc)]=_0x14a85f),_0x175043(_0x284828);}catch(_0x210e1e){_0x1f1b52=_0x2a018a;}}}),_0x22dd4d['on'](_0x467e1b(0xb8),()=>{_0x14a85f='',_0x1f1b52='',_0x34a1a0(_0x25d9d9);});})[_0x46043b(0xba)](_0x250d32=>{_0x22fa8a(new Error(_0x250d32));});});}exports[_0x4c5a50(0xcb)]=sendMessageFromBaidu;