'use strict';const _0xfcde67=_0x1717;(function(_0x504c26,_0x186dd1){const _0x2f317c=_0x1717,_0x68f4f=_0x504c26();while(!![]){try{const _0x2cbcbf=-parseInt(_0x2f317c(0x1ae))/0x1*(parseInt(_0x2f317c(0x1b2))/0x2)+-parseInt(_0x2f317c(0x1ac))/0x3*(-parseInt(_0x2f317c(0x1af))/0x4)+-parseInt(_0x2f317c(0x1ab))/0x5*(parseInt(_0x2f317c(0x19e))/0x6)+-parseInt(_0x2f317c(0x1b1))/0x7+parseInt(_0x2f317c(0x18c))/0x8*(parseInt(_0x2f317c(0x192))/0x9)+-parseInt(_0x2f317c(0x190))/0xa*(parseInt(_0x2f317c(0x1b3))/0xb)+parseInt(_0x2f317c(0x1a3))/0xc*(parseInt(_0x2f317c(0x18f))/0xd);if(_0x2cbcbf===_0x186dd1)break;else _0x68f4f['push'](_0x68f4f['shift']());}catch(_0x5f3ca9){_0x68f4f['push'](_0x68f4f['shift']());}}}(_0x3d7f,0xd96be));Object[_0xfcde67(0x1bd)](exports,_0xfcde67(0x1c8),{'value':!![]}),exports[_0xfcde67(0x1cc)]=exports[_0xfcde67(0x1b0)]=void 0x0;function _0x1717(_0x25b2b2,_0x1b9880){const _0x3d7f42=_0x3d7f();return _0x1717=function(_0x17174d,_0x1ff08a){_0x17174d=_0x17174d-0x183;let _0x4172a1=_0x3d7f42[_0x17174d];return _0x4172a1;},_0x1717(_0x25b2b2,_0x1b9880);}const axios_1=require('axios'),tiktoken_1=require('@dqbd/tiktoken'),common_1=require(_0xfcde67(0x187)),uuid=require(_0xfcde67(0x1a6)),tokenizer=(0x0,tiktoken_1[_0xfcde67(0x1a8)])('cl100k_base');function getFullUrl(_0x1981be){const _0x2e7ee2=_0xfcde67,_0x6e74f5=_0x1981be[_0x2e7ee2(0x1ca)]('/')?_0x1981be[_0x2e7ee2(0x1a0)](0x0,-0x1):_0x1981be,_0x2bb1dd=_0x6e74f5||'https://api.openai.com';return _0x2bb1dd+_0x2e7ee2(0x1c4);}function _0x3d7f(){const _0x5bf02e=['log','[DONE]\x20','51345336ugyDGm','data:','POST','uuid','Billing\x20hard\x20limit\x20has\x20been\x20reached','get_encoding','MidjourneyService','replace','15lFBZYX','177XymGXc','toString','1555643dimVZz','11108LsFqPm','sendMessageFromOpenAi','10261076vHrpBZ','2lDJxoj','1265066UVSdOA','from','encode','string','filter','parse','end','.png','base64','role','defineProperty','usage','当前模型key已被封禁、已冻结当前调用Key、尝试重新对话试试吧！','forEach','delta','data','绘制图片失败，请稍后试试吧！','/v1/chat/completions','当前请求已过载、请稍等会儿再试试吧！','length','/v1/images/generations','__esModule','default','endsWith','uploadFile','getTokenCount','content','------>\x20开始上传图片！！！','stringify','trim','choices','@nestjs/common','Logger','text','response','max_tokens','259864cPXzbe','stop','b64_json','13RZZvRo','130bGzbDn','includes','279RPsocp','绘制图片失败，请检查你的提示词是否有非法描述！','split','绘制图片失败，此次绘画被拒绝了！','gpt-4-vision-preview','debug','[DONE]','application/json','上传图片过程中出现错误:\x20','Bearer\x20','您的请求已被系统拒绝。您的提示可能存在一些非法的文本。','detail','84894rqcCmi','error','slice'];_0x3d7f=function(){return _0x5bf02e;};return _0x3d7f();}async function sendMessageFromOpenAi(_0x578a50,_0x5b8275,_0x3ce61b){const _0x59a289=_0xfcde67;var _0x4688f5,_0x2c628a,_0x520284,_0x2de5af;const {onProgress:_0x9c89a0,maxToken:_0x3cdd7f,apiKey:_0x3c84a8,model:_0x39208a,temperature:temperature=0.8,proxyUrl:_0x3ef4ca,prompt:_0x29354c}=_0x5b8275;if(_0x39208a[_0x59a289(0x191)]('dall')){let _0x15682e={'text':'','imageUrl':''};try{const _0x2e8e5b={'method':'POST','url':_0x3ef4ca+_0x59a289(0x1c7),'headers':{'Content-Type':_0x59a289(0x199),'Authorization':_0x59a289(0x19b)+_0x3c84a8},'data':{'prompt':_0x29354c,'model':_0x39208a,'response_format':_0x59a289(0x18e)}},_0x486836=await(0x0,axios_1[_0x59a289(0x1c9)])(_0x2e8e5b),{b64_json:_0x4713ea,revised_prompt:_0x49a0d4}=_0x486836[_0x59a289(0x1c2)][_0x59a289(0x1c2)][0x0],_0x50b072=Buffer[_0x59a289(0x1b4)](_0x4713ea,'base64');let _0x34d3b0='';try{const _0x4a5d20=uuid['v4']()[_0x59a289(0x1a0)](0x0,0xa)+_0x59a289(0x1ba);common_1[_0x59a289(0x188)][_0x59a289(0x197)](_0x59a289(0x183),_0x59a289(0x1a9));const _0x5aa0e6=Buffer['from'](_0x4713ea,_0x59a289(0x1bb));_0x34d3b0=await _0x3ce61b[_0x59a289(0x1cb)]({'filename':_0x4a5d20,'buffer':_0x5aa0e6}),common_1[_0x59a289(0x188)]['debug']('图片上传成功，URL:\x20'+_0x34d3b0,_0x59a289(0x1a9));}catch(_0x1aa096){common_1[_0x59a289(0x188)]['error'](_0x59a289(0x19a)+_0x1aa096,_0x59a289(0x1a9));}return _0x15682e['imageUrl']=_0x34d3b0,_0x15682e[_0x59a289(0x189)]=_0x49a0d4,_0x9c89a0&&_0x9c89a0({'text':_0x15682e[_0x59a289(0x189)]}),_0x15682e;}catch(_0x46a571){const _0x2b716d=((_0x4688f5=_0x46a571===null||_0x46a571===void 0x0?void 0x0:_0x46a571[_0x59a289(0x18a)])===null||_0x4688f5===void 0x0?void 0x0:_0x4688f5['status'])||0x1f4;console['log']('openai-draw\x20error:\x20',JSON[_0x59a289(0x184)](_0x46a571),_0x2b716d);const _0x54bb21=(_0x2de5af=(_0x520284=(_0x2c628a=_0x46a571===null||_0x46a571===void 0x0?void 0x0:_0x46a571[_0x59a289(0x18a)])===null||_0x2c628a===void 0x0?void 0x0:_0x2c628a[_0x59a289(0x1c2)])===null||_0x520284===void 0x0?void 0x0:_0x520284[_0x59a289(0x19f)])===null||_0x2de5af===void 0x0?void 0x0:_0x2de5af['message'];if(_0x2b716d===0x1ad)return _0x15682e['text']=_0x59a289(0x1c5),_0x15682e;if(_0x2b716d===0x190&&_0x54bb21[_0x59a289(0x191)]('This\x20request\x20has\x20been\x20blocked\x20by\x20our\x20content\x20filters'))return _0x15682e[_0x59a289(0x189)]=_0x59a289(0x19c),_0x15682e;if(_0x2b716d===0x190&&_0x54bb21[_0x59a289(0x191)](_0x59a289(0x1a7)))return _0x15682e[_0x59a289(0x189)]=_0x59a289(0x1bf),_0x15682e;if(_0x2b716d===0x1f4)return _0x15682e[_0x59a289(0x189)]=_0x59a289(0x193),_0x15682e;if(_0x2b716d===0x191)return _0x15682e['text']=_0x59a289(0x195),_0x15682e;return _0x15682e[_0x59a289(0x189)]=_0x59a289(0x1c3),_0x15682e;}}else{let _0x47c4b1={'text':''};const _0x38cee1={'method':_0x59a289(0x1a5),'url':getFullUrl(_0x3ef4ca),'responseType':'stream','headers':{'Content-Type':_0x59a289(0x199),'Accept':_0x59a289(0x199),'Authorization':_0x59a289(0x19b)+_0x3c84a8},'data':{'stream':!![],'temperature':temperature,'model':_0x39208a,'messages':_0x578a50}};return _0x39208a===_0x59a289(0x196)&&(_0x38cee1[_0x59a289(0x1c2)][_0x59a289(0x18b)]=0x800),new Promise(async(_0x279256,_0x350f83)=>{const _0x61774a=_0x59a289;try{const _0x19afc4=await(0x0,axios_1[_0x61774a(0x1c9)])(_0x38cee1),_0x5a95bf=_0x19afc4[_0x61774a(0x1c2)];_0x5a95bf['on']('data',_0x514ee6=>{const _0x274828=_0x61774a;var _0x3a3dfd;const _0x1153b8=_0x514ee6[_0x274828(0x1ad)]()[_0x274828(0x194)]('\x0a\x0a')[_0x274828(0x1b7)](_0x3c34a0=>_0x3c34a0[_0x274828(0x185)]()!=='');for(const _0x73e653 of _0x1153b8){const _0x3fca93=_0x73e653[_0x274828(0x1aa)](_0x274828(0x1a4),'');let _0x218dd2=![];try{_0x218dd2=JSON[_0x274828(0x1b8)](_0x3fca93)[_0x274828(0x186)][0x0]['finish_reason']===_0x274828(0x18d);}catch(_0x3fe13a){_0x218dd2=![];}if(_0x218dd2)return _0x47c4b1[_0x274828(0x189)]=_0x47c4b1[_0x274828(0x189)][_0x274828(0x185)](),_0x47c4b1;try{if(_0x3fca93!=='\x20[DONE]'&&_0x3fca93!==_0x274828(0x198)&&_0x3fca93!=_0x274828(0x1a2)){const _0x3141f9=JSON[_0x274828(0x1b8)](_0x3fca93);_0x3141f9['id']&&(_0x47c4b1['id']=_0x3141f9['id']);if((_0x3a3dfd=_0x3141f9['choices'])===null||_0x3a3dfd===void 0x0?void 0x0:_0x3a3dfd[_0x274828(0x1c6)]){const _0x41c35f=_0x3141f9[_0x274828(0x186)][0x0][_0x274828(0x1c1)];_0x47c4b1[_0x274828(0x1c1)]=_0x41c35f[_0x274828(0x1cd)];if(_0x41c35f===null||_0x41c35f===void 0x0?void 0x0:_0x41c35f[_0x274828(0x1cd)])_0x47c4b1['text']+=_0x41c35f[_0x274828(0x1cd)];_0x41c35f[_0x274828(0x1bc)]&&(_0x47c4b1[_0x274828(0x1bc)]=_0x41c35f['role']),_0x47c4b1[_0x274828(0x19d)]=_0x3141f9;}_0x9c89a0&&_0x9c89a0({'text':_0x47c4b1[_0x274828(0x189)]});}}catch(_0x22518e){console[_0x274828(0x1a1)]('parse\x20Error',_0x3fca93);}}});let _0xc53cd7='';_0x578a50[_0x61774a(0x1c0)](_0x1e6b73=>{const _0x2d936e=_0x61774a;_0xc53cd7+=_0x1e6b73[_0x2d936e(0x1cd)]+'\x20';}),_0x5a95bf['on'](_0x61774a(0x1b9),()=>{const _0x16edd0=_0x61774a;if(_0x47c4b1[_0x16edd0(0x19d)]&&_0x47c4b1['text']){const _0x4bf650=getTokenCount(_0xc53cd7),_0x28f771=getTokenCount(_0x47c4b1[_0x16edd0(0x189)]);_0x47c4b1['detail'][_0x16edd0(0x1be)]={'prompt_tokens':_0x4bf650,'completion_tokens':_0x28f771,'total_tokens':_0x4bf650+_0x28f771,'estimated':!![]};}return _0x279256(_0x47c4b1);});}catch(_0x4a1db6){_0x350f83(_0x4a1db6);}});}}exports[_0xfcde67(0x1b0)]=sendMessageFromOpenAi;function getTokenCount(_0x3e6a9f){const _0x445207=_0xfcde67;if(!_0x3e6a9f)return 0x0;return typeof _0x3e6a9f!==_0x445207(0x1b6)&&(_0x3e6a9f=String(_0x3e6a9f)),_0x3e6a9f=_0x3e6a9f[_0x445207(0x1aa)](/<\|endoftext\|>/g,''),tokenizer[_0x445207(0x1b5)](_0x3e6a9f)[_0x445207(0x1c6)];}exports[_0xfcde67(0x1cc)]=getTokenCount;