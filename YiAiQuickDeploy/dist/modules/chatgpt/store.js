'use strict';const _0x2f51ef=_0x1ed6;function _0x1ed6(_0x400e6f,_0x2310c5){const _0x4b7475=_0x4b74();return _0x1ed6=function(_0x1ed6df,_0x5d1845){_0x1ed6df=_0x1ed6df-0x92;let _0x3149e1=_0x4b7475[_0x1ed6df];return _0x3149e1;},_0x1ed6(_0x400e6f,_0x2310c5);}(function(_0xf81b67,_0xa381bf){const _0x5dc8d1=_0x1ed6,_0x40e943=_0xf81b67();while(!![]){try{const _0x43c98c=-parseInt(_0x5dc8d1(0xb0))/0x1*(parseInt(_0x5dc8d1(0xbb))/0x2)+-parseInt(_0x5dc8d1(0xad))/0x3+parseInt(_0x5dc8d1(0xa7))/0x4+-parseInt(_0x5dc8d1(0x9f))/0x5+parseInt(_0x5dc8d1(0xbf))/0x6+-parseInt(_0x5dc8d1(0xa9))/0x7*(-parseInt(_0x5dc8d1(0xae))/0x8)+parseInt(_0x5dc8d1(0xa0))/0x9;if(_0x43c98c===_0xa381bf)break;else _0x40e943['push'](_0x40e943['shift']());}catch(_0x5983d8){_0x40e943['push'](_0x40e943['shift']());}}}(_0x4b74,0x349e7));Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x2f51ef(0xa6)]=void 0x0;const uuid_1=require('uuid'),tiktoken_1=require(_0x2f51ef(0x9e)),tokenizer=(0x0,tiktoken_1[_0x2f51ef(0x92)])('cl100k_base');function _0x4b74(){const _0x18b39e=['replace','push','max','content','type','set','namespace','getUuid','buildMessageFromParentMessageId','@dqbd/tiktoken','284915KTTnZM','4896450BdmFIg','system','generateKey','gemini-pro','image_url','min','NineStore','9384VqIbyl','length','57253XvderS','encode','text','parentMessageId','753120QYQsGC','16IyHceg','filter','1drSoXf','splice','expires','some','get','getData','slice','isArray','gpt-4-all','_getTokenCount','user','422456DTdoqF','store','ERNIE','log','1032144tAPAlT','get_encoding','_recursivePruning','join'];_0x4b74=function(){return _0x18b39e;};return _0x4b74();}class NineStore{constructor(_0x48cde9){const _0x1a97a6=_0x2f51ef,{store:_0x41e0a2,namespace:_0xe8cd63,expires:_0x19ea37}=this['formatOptions'](_0x48cde9);this[_0x1a97a6(0xbc)]=_0x41e0a2,this[_0x1a97a6(0x9b)]=_0xe8cd63,this[_0x1a97a6(0xb2)]=_0x19ea37;}['formatOptions'](_0x198d09){const {store:_0x388bb8,expires:expires=0x3e8*0x3c*0x3c*0x18*0x3,namespace:namespace='chat'}=_0x198d09;return{'store':_0x388bb8,'namespace':namespace,'expires':expires};}[_0x2f51ef(0xa2)](_0x1b7b39){const _0x58ff77=_0x2f51ef;return this[_0x58ff77(0x9b)]?this[_0x58ff77(0x9b)]+'-'+_0x1b7b39:_0x1b7b39;}async[_0x2f51ef(0xb5)](_0x34bead){const _0x1db432=_0x2f51ef,_0x3c725d=await this[_0x1db432(0xbc)][_0x1db432(0xb4)](_0x34bead);return _0x3c725d;}async['setData'](_0x4c9cb2,_0x1bdbab=this[_0x2f51ef(0xb2)]){const _0x53a423=_0x2f51ef;await this[_0x53a423(0xbc)][_0x53a423(0x9a)](_0x4c9cb2['id'],_0x4c9cb2,_0x1bdbab);}async[_0x2f51ef(0x9d)](_0x103861,_0x8a153f){const _0x54b2ec=_0x2f51ef;let {maxRounds:_0x13b7ab,maxModelToken:_0x325488,maxResponseTokens:_0x57a32f,systemMessage:systemMessage='',name:_0x3cc611,imageUrl:_0x403186,model:_0x173fde,activeModel:_0x5ec8b2}=_0x8a153f,{parentMessageId:_0x30e180}=_0x8a153f,_0x352894=[],_0x5081b4=0x0;if(systemMessage){const _0x4b3ca0=[_0x54b2ec(0xa3),_0x54b2ec(0xbd),'hunyuan'],_0x3f5d54=_0x5ec8b2&&_0x4b3ca0[_0x54b2ec(0xb3)](_0x2dec0c=>_0x5ec8b2['includes'](_0x2dec0c));_0x3f5d54?(_0x352894[_0x54b2ec(0x96)]({'role':'user','content':systemMessage,'name':_0x3cc611}),_0x352894[_0x54b2ec(0x96)]({'role':'assistant','content':'好的','name':_0x3cc611})):_0x352894[_0x54b2ec(0x96)]({'role':_0x54b2ec(0xa1),'content':systemMessage,'name':_0x3cc611});}const _0x2f9f4b=_0x352894[_0x54b2ec(0xa8)];let _0x511f05=0x0;if(_0x5ec8b2==='gpt-4-vision-preview'&&_0x403186){const _0x3df706=[{'type':_0x54b2ec(0xab),'text':_0x103861},{'type':_0x54b2ec(0xa4),'image_url':{'url':_0x403186}}];_0x352894[_0x54b2ec(0x96)]({'role':_0x54b2ec(0xba),'content':_0x3df706,'name':_0x3cc611});}else _0x173fde===_0x54b2ec(0xb8)&&_0x403186&&(_0x103861=_0x403186+'\x0a'+_0x103861),_0x352894[_0x54b2ec(0x96)]({'role':_0x54b2ec(0xba),'content':_0x103861,'name':_0x3cc611});let _0x1e7731=_0x352894;do{if(!_0x30e180)break;const _0x3d7dee=await this[_0x54b2ec(0xb5)](_0x30e180);if(!_0x3d7dee)break;const {text:_0x44d2f7,name:_0x293b11,role:_0x4e4934,imageUrl:_0x12f157}=_0x3d7dee;let _0xca528d=_0x44d2f7;_0x12f157&&(_0x5ec8b2==='gpt-4-vision-preview'&&(_0xca528d=[{'type':'text','text':_0x44d2f7},{'type':_0x54b2ec(0xa4),'image_url':{'url':_0x12f157}}]));_0x1e7731=_0x1e7731[_0x54b2ec(0xb6)](0x0,_0x2f9f4b)['concat']([{'role':_0x4e4934,'content':_0xca528d,'name':_0x293b11},..._0x1e7731[_0x54b2ec(0xb6)](_0x2f9f4b)]),_0x511f05++;if(_0x13b7ab&&_0x511f05>=_0x13b7ab)break;if(_0x325488&&_0x57a32f){const _0x4bed36=_0x325488-_0x57a32f;_0x5081b4=await this[_0x54b2ec(0xb9)](_0x1e7731);const _0xdac929=_0x5081b4+0xc8<=_0x4bed36;!_0xdac929&&(_0x1e7731=this[_0x54b2ec(0x93)](_0x1e7731,_0x4bed36,systemMessage));}_0x30e180=_0x3d7dee[_0x54b2ec(0xac)];}while(!![]);const _0x5348e3=Math[_0x54b2ec(0x97)](0x1,Math[_0x54b2ec(0xa5)](_0x325488-_0x5081b4,_0x57a32f));return console[_0x54b2ec(0xbe)]('本次携带上下文的长度',_0x1e7731[_0x54b2ec(0xa8)],_0x5081b4),{'context':_0x1e7731,'round':_0x1e7731[_0x54b2ec(0xa8)],'historyToken':_0x5081b4};}[_0x2f51ef(0xb9)](_0x5a5a86){const _0x49100f=_0x2f51ef;let _0xf3a4cb=_0x5a5a86['reduce']((_0x2fbdc8,_0x42ff38)=>{const _0x2a2f79=_0x1ed6;if(Array[_0x2a2f79(0xb7)](_0x42ff38['content'])){const _0x4b8568=_0x42ff38[_0x2a2f79(0x98)][_0x2a2f79(0xaf)](_0x313c32=>_0x313c32[_0x2a2f79(0x99)]==='text')['map'](_0x4ecc1b=>_0x4ecc1b[_0x2a2f79(0xab)])[_0x2a2f79(0x94)]('\x20');return _0x2fbdc8+_0x4b8568;}else return _0x2fbdc8+(_0x42ff38[_0x2a2f79(0x98)]||'');},'');return _0xf3a4cb=_0xf3a4cb[_0x49100f(0x95)](/<\|endoftext\|>/g,''),tokenizer[_0x49100f(0xaa)](_0xf3a4cb)[_0x49100f(0xa8)];}[_0x2f51ef(0x93)](_0x26741f,_0x13f7a0,_0x846521){const _0x2a976e=_0x2f51ef,_0x4200b5=this[_0x2a976e(0xb9)](_0x26741f);if(_0x4200b5<=_0x13f7a0)return _0x26741f;return _0x26741f[_0x2a976e(0xb1)](_0x846521?0x1:0x0,0x1),this['_recursivePruning'](_0x26741f,_0x13f7a0,_0x846521);}[_0x2f51ef(0x9c)](){return(0x0,uuid_1['v4'])();}}exports['NineStore']=NineStore;