'use strict';const _0x414f1f=_0xd508;(function(_0x14dcef,_0x35ea17){const _0x14f5fb=_0xd508,_0x16e4b6=_0x14dcef();while(!![]){try{const _0x2f846e=parseInt(_0x14f5fb(0x1d9))/0x1+parseInt(_0x14f5fb(0x1c9))/0x2*(parseInt(_0x14f5fb(0x1b5))/0x3)+-parseInt(_0x14f5fb(0x1ce))/0x4*(parseInt(_0x14f5fb(0x1c6))/0x5)+-parseInt(_0x14f5fb(0x1b0))/0x6*(parseInt(_0x14f5fb(0x1a7))/0x7)+parseInt(_0x14f5fb(0x1b1))/0x8+-parseInt(_0x14f5fb(0x1c2))/0x9+parseInt(_0x14f5fb(0x19e))/0xa;if(_0x2f846e===_0x35ea17)break;else _0x16e4b6['push'](_0x16e4b6['shift']());}catch(_0x2f92bd){_0x16e4b6['push'](_0x16e4b6['shift']());}}}(_0x85b6,0xb1b0a));Object[_0x414f1f(0x1cd)](exports,_0x414f1f(0x1a3),{'value':!![]}),exports[_0x414f1f(0x1b9)]=exports[_0x414f1f(0x196)]=void 0x0;const axios_1=require(_0x414f1f(0x1cf)),tiktoken_1=require('@dqbd/tiktoken'),common_1=require(_0x414f1f(0x1ca)),uuid=require(_0x414f1f(0x1a0)),tokenizer=(0x0,tiktoken_1[_0x414f1f(0x1d7)])('cl100k_base');function _0x85b6(){const _0x42e06e=['encode','222geunbU','2579576ExwUMi','parse','filter','status','1019394hbIpOp','replace','role','content','getTokenCount','/v1/chat/completions','绘制图片失败，请检查你的提示词是否有非法描述！','------>\x20开始上传图片！！！','message','length','split','choices','slice','7629273bhrLqG','toString','response','delta','265unjjen','[DONE]\x20','forEach','6kEWazl','@nestjs/common','openai-draw\x20error:\x20','图片上传成功，URL:\x20','defineProperty','92524iRiTLB','axios','POST','includes','您的请求已被系统拒绝。您的提示可能存在一些非法的文本。','detail','data','stringify','.png','get_encoding','当前模型key已被封禁、已冻结当前调用Key、尝试重新对话试试吧！','1100810zFNhoU','from','max_tokens','data:','sendMessageFromOpenAi','imageUrl','MidjourneyService','b64_json','dall','trim','uploadFile','[DONE]','13653180RZcuQS','当前请求已过载、请稍等会儿再试试吧！','uuid','finish_reason','default','__esModule','This\x20request\x20has\x20been\x20blocked\x20by\x20our\x20content\x20filters','base64','error','190421GgzwzE','Bearer\x20','Logger','text','https://api.openai.com','绘制图片失败，请稍后试试吧！','log','application/json'];_0x85b6=function(){return _0x42e06e;};return _0x85b6();}function getFullUrl(_0x501000){const _0x19db0b=_0x414f1f,_0x4420ee=_0x501000['endsWith']('/')?_0x501000[_0x19db0b(0x1c1)](0x0,-0x1):_0x501000,_0x39315f=_0x4420ee||_0x19db0b(0x1ab);return _0x39315f+_0x19db0b(0x1ba);}async function sendMessageFromOpenAi(_0x319ca2,_0x16bc98,_0x129785){const _0x547ed3=_0x414f1f;var _0x3349,_0x2b515e,_0x4548e6,_0x1aaa69;const {onProgress:_0x3a6684,maxToken:_0x2c8fec,apiKey:_0x477d36,model:_0x44f28f,temperature:temperature=0.8,proxyUrl:_0x3e3a13,prompt:_0x52a9fa}=_0x16bc98;if(_0x44f28f[_0x547ed3(0x1d1)](_0x547ed3(0x19a))){let _0x596028={'text':'','imageUrl':''};try{const _0x190240={'method':_0x547ed3(0x1d0),'url':_0x3e3a13+'/v1/images/generations','headers':{'Content-Type':_0x547ed3(0x1ae),'Authorization':'Bearer\x20'+_0x477d36},'data':{'prompt':_0x52a9fa,'model':_0x44f28f,'response_format':_0x547ed3(0x199)}},_0x471d88=await(0x0,axios_1['default'])(_0x190240),{b64_json:_0x118ab5,revised_prompt:_0x2f5212}=_0x471d88[_0x547ed3(0x1d4)]['data'][0x0],_0x130ce9=Buffer[_0x547ed3(0x1da)](_0x118ab5,_0x547ed3(0x1a5));let _0x35c24c='';try{const _0x249b4c=uuid['v4']()[_0x547ed3(0x1c1)](0x0,0xa)+_0x547ed3(0x1d6);common_1['Logger']['debug'](_0x547ed3(0x1bc),'MidjourneyService');const _0x17e951=Buffer[_0x547ed3(0x1da)](_0x118ab5,_0x547ed3(0x1a5));_0x35c24c=await _0x129785[_0x547ed3(0x19c)]({'filename':_0x249b4c,'buffer':_0x17e951}),common_1[_0x547ed3(0x1a9)]['debug'](_0x547ed3(0x1cc)+_0x35c24c,_0x547ed3(0x198));}catch(_0x1c427d){common_1[_0x547ed3(0x1a9)][_0x547ed3(0x1a6)]('上传图片过程中出现错误:\x20'+_0x1c427d,_0x547ed3(0x198));}return _0x596028[_0x547ed3(0x197)]=_0x35c24c,_0x596028['text']=_0x2f5212,_0x3a6684&&_0x3a6684({'text':_0x596028[_0x547ed3(0x1aa)]}),_0x596028;}catch(_0xe84eeb){const _0x2a58c9=((_0x3349=_0xe84eeb===null||_0xe84eeb===void 0x0?void 0x0:_0xe84eeb[_0x547ed3(0x1c4)])===null||_0x3349===void 0x0?void 0x0:_0x3349[_0x547ed3(0x1b4)])||0x1f4;console[_0x547ed3(0x1ad)](_0x547ed3(0x1cb),JSON[_0x547ed3(0x1d5)](_0xe84eeb),_0x2a58c9);const _0x5a3178=(_0x1aaa69=(_0x4548e6=(_0x2b515e=_0xe84eeb===null||_0xe84eeb===void 0x0?void 0x0:_0xe84eeb['response'])===null||_0x2b515e===void 0x0?void 0x0:_0x2b515e[_0x547ed3(0x1d4)])===null||_0x4548e6===void 0x0?void 0x0:_0x4548e6['error'])===null||_0x1aaa69===void 0x0?void 0x0:_0x1aaa69[_0x547ed3(0x1bd)];if(_0x2a58c9===0x1ad)return _0x596028['text']=_0x547ed3(0x19f),_0x596028;if(_0x2a58c9===0x190&&_0x5a3178[_0x547ed3(0x1d1)](_0x547ed3(0x1a4)))return _0x596028[_0x547ed3(0x1aa)]=_0x547ed3(0x1d2),_0x596028;if(_0x2a58c9===0x190&&_0x5a3178[_0x547ed3(0x1d1)]('Billing\x20hard\x20limit\x20has\x20been\x20reached'))return _0x596028[_0x547ed3(0x1aa)]=_0x547ed3(0x1d8),_0x596028;if(_0x2a58c9===0x1f4)return _0x596028['text']=_0x547ed3(0x1bb),_0x596028;if(_0x2a58c9===0x191)return _0x596028[_0x547ed3(0x1aa)]='绘制图片失败，此次绘画被拒绝了！',_0x596028;return _0x596028['text']=_0x547ed3(0x1ac),_0x596028;}}else{let _0x366f9c={'text':''};const _0x4dada0={'method':_0x547ed3(0x1d0),'url':getFullUrl(_0x3e3a13),'responseType':'stream','headers':{'Content-Type':'application/json','Accept':_0x547ed3(0x1ae),'Authorization':_0x547ed3(0x1a8)+_0x477d36},'data':{'stream':!![],'temperature':temperature,'model':_0x44f28f,'messages':_0x319ca2}};return _0x44f28f==='gpt-4-vision-preview'&&(_0x4dada0[_0x547ed3(0x1d4)][_0x547ed3(0x1db)]=0x800),new Promise(async(_0xb56a36,_0x306bae)=>{const _0x5c1716=_0x547ed3;try{const _0x314606=await(0x0,axios_1[_0x5c1716(0x1a2)])(_0x4dada0),_0x1f2b12=_0x314606[_0x5c1716(0x1d4)];_0x1f2b12['on'](_0x5c1716(0x1d4),_0x2072e3=>{const _0x57cb91=_0x5c1716;var _0x567ec7;const _0x257b65=_0x2072e3[_0x57cb91(0x1c3)]()[_0x57cb91(0x1bf)]('\x0a\x0a')[_0x57cb91(0x1b3)](_0x2c9869=>_0x2c9869['trim']()!=='');for(const _0x4f5ba0 of _0x257b65){const _0x14834a=_0x4f5ba0['replace'](_0x57cb91(0x195),'');let _0x111179=![];try{_0x111179=JSON[_0x57cb91(0x1b2)](_0x14834a)['choices'][0x0][_0x57cb91(0x1a1)]==='stop';}catch(_0x408691){_0x111179=![];}if(_0x111179)return _0x366f9c[_0x57cb91(0x1aa)]=_0x366f9c[_0x57cb91(0x1aa)][_0x57cb91(0x19b)](),_0x366f9c;try{if(_0x14834a!=='\x20[DONE]'&&_0x14834a!==_0x57cb91(0x19d)&&_0x14834a!=_0x57cb91(0x1c7)){const _0xe60bf5=JSON[_0x57cb91(0x1b2)](_0x14834a);_0xe60bf5['id']&&(_0x366f9c['id']=_0xe60bf5['id']);if((_0x567ec7=_0xe60bf5[_0x57cb91(0x1c0)])===null||_0x567ec7===void 0x0?void 0x0:_0x567ec7[_0x57cb91(0x1be)]){const _0x56ed66=_0xe60bf5[_0x57cb91(0x1c0)][0x0][_0x57cb91(0x1c5)];_0x366f9c['delta']=_0x56ed66[_0x57cb91(0x1b8)];if(_0x56ed66===null||_0x56ed66===void 0x0?void 0x0:_0x56ed66['content'])_0x366f9c[_0x57cb91(0x1aa)]+=_0x56ed66[_0x57cb91(0x1b8)];_0x56ed66[_0x57cb91(0x1b7)]&&(_0x366f9c[_0x57cb91(0x1b7)]=_0x56ed66[_0x57cb91(0x1b7)]),_0x366f9c['detail']=_0xe60bf5;}_0x3a6684&&_0x3a6684({'text':_0x366f9c[_0x57cb91(0x1aa)]});}}catch(_0x40edf6){console['log']('parse\x20Error',_0x14834a);}}});let _0x43985c='';_0x319ca2[_0x5c1716(0x1c8)](_0x13cd9c=>{const _0x5367db=_0x5c1716;_0x43985c+=_0x13cd9c[_0x5367db(0x1b8)]+'\x20';}),_0x1f2b12['on']('end',()=>{const _0xc3ba54=_0x5c1716;if(_0x366f9c[_0xc3ba54(0x1d3)]&&_0x366f9c[_0xc3ba54(0x1aa)]){const _0x526c2c=getTokenCount(_0x43985c),_0x4b6d26=getTokenCount(_0x366f9c[_0xc3ba54(0x1aa)]);_0x366f9c['detail']['usage']={'prompt_tokens':_0x526c2c,'completion_tokens':_0x4b6d26,'total_tokens':_0x526c2c+_0x4b6d26,'estimated':!![]};}return _0xb56a36(_0x366f9c);});}catch(_0x5e6053){_0x306bae(_0x5e6053);}});}}exports[_0x414f1f(0x196)]=sendMessageFromOpenAi;function _0xd508(_0x58571a,_0x3b29c1){const _0x85b68b=_0x85b6();return _0xd508=function(_0xd508ac,_0x4e6f83){_0xd508ac=_0xd508ac-0x195;let _0x1f0a1f=_0x85b68b[_0xd508ac];return _0x1f0a1f;},_0xd508(_0x58571a,_0x3b29c1);}function getTokenCount(_0x35ee99){const _0x1ac80f=_0x414f1f;if(!_0x35ee99)return 0x0;return typeof _0x35ee99!=='string'&&(_0x35ee99=String(_0x35ee99)),_0x35ee99=_0x35ee99[_0x1ac80f(0x1b6)](/<\|endoftext\|>/g,''),tokenizer[_0x1ac80f(0x1af)](_0x35ee99)[_0x1ac80f(0x1be)];}exports[_0x414f1f(0x1b9)]=getTokenCount;