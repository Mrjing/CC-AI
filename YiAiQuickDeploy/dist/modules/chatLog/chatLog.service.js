'use strict';const _0x131984=_0x2f8d;function _0x3743(){const _0x53a998=['7908156bUnFZm','paintCount','components','type','../user/user.entity','132UGQZjV','DESC','forEach','你删除的对话记录不存在、请检查！','parse','HttpStatus','exceljs','39KONoyD','affected','312414cTriTw','删除对话记录成功！','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','columns','email','回答答案','super','../../common/constants/balance.constant','?imageView2/1/w/','fileInfo','answer','model','cos','save','write','extend','prompt','username','includes','group','exportExcel','2332452LdpPmH','rec','chatGroupEntity','提问时间','formatDate','tencent','function','DALL-E2','Not','7LJGGJr','你推荐的图片不存在、请检查！','log','getOwnPropertyDescriptor','maskEmail','PAINT_TYPE','update','isGroup','assign','map','InjectRepository','addWorksheet','saveChatLog','__param','Content-Type','__decorate','length','userId','CHAT_TYPE','userEntity','typeorm','findOne','HttpException','chatList','dall-e-3','Injectable','68JQdBoX','?x-oss-process=image/resize,w_','xlsx','count','chatLogEntity','createdAt','18JzUYiO','querAllDrawLog','assistant','thumbImg','527570AAAYhx','end','取消推荐','setHeader','find','user','object','metadata','BAD_REQUEST','29791KxMxlb','findAndCount','ChatLogEntity','UserEntity','DeductionKey','querAllDrawLog\x20Json\x20parse\x20error','recDrawImg','delByGroupId','@nestjs/typeorm','16TMBXqd','当前页面已经没有东西可以删除了！','../../common/utils','6539225svAcoQ','decorate','./chatLog.entity','defineProperty','byAppId','Repository','1242416inlnNu','Like','用户邮箱'];_0x3743=function(){return _0x53a998;};return _0x3743();}function _0x2f8d(_0x1d7f5f,_0x47b406){const _0x37430e=_0x3743();return _0x2f8d=function(_0x2f8d80,_0x3f76ce){_0x2f8d80=_0x2f8d80-0x99;let _0x44acef=_0x37430e[_0x2f8d80];return _0x44acef;},_0x2f8d(_0x1d7f5f,_0x47b406);}(function(_0x2ba95d,_0x3e83bd){const _0x5c063b=_0x2f8d,_0x439596=_0x2ba95d();while(!![]){try{const _0x2fa055=parseInt(_0x5c063b(0xa8))/0x1*(-parseInt(_0x5c063b(0xb1))/0x2)+parseInt(_0x5c063b(0xcb))/0x3*(parseInt(_0x5c063b(0x103))/0x4)+parseInt(_0x5c063b(0xb4))/0x5+parseInt(_0x5c063b(0xe0))/0x6*(parseInt(_0x5c063b(0xe9))/0x7)+parseInt(_0x5c063b(0xba))/0x8*(parseInt(_0x5c063b(0x9b))/0x9)+-parseInt(_0x5c063b(0x9f))/0xa*(parseInt(_0x5c063b(0xc2))/0xb)+parseInt(_0x5c063b(0xbd))/0xc*(-parseInt(_0x5c063b(0xc9))/0xd);if(_0x2fa055===_0x3e83bd)break;else _0x439596['push'](_0x439596['shift']());}catch(_0xce0be4){_0x439596['push'](_0x439596['shift']());}}}(_0x3743,0xe2d3e));var __decorate=this&&this[_0x131984(0xf8)]||function(_0x52f778,_0x4dccf8,_0x3b2092,_0x17bd07){const _0x7bf840=_0x131984;var _0x121c26=arguments['length'],_0x5f2173=_0x121c26<0x3?_0x4dccf8:_0x17bd07===null?_0x17bd07=Object[_0x7bf840(0xec)](_0x4dccf8,_0x3b2092):_0x17bd07,_0x1141c7;if(typeof Reflect===_0x7bf840(0xa5)&&typeof Reflect[_0x7bf840(0xb5)]===_0x7bf840(0xe6))_0x5f2173=Reflect['decorate'](_0x52f778,_0x4dccf8,_0x3b2092,_0x17bd07);else{for(var _0x1ee69e=_0x52f778[_0x7bf840(0xf9)]-0x1;_0x1ee69e>=0x0;_0x1ee69e--)if(_0x1141c7=_0x52f778[_0x1ee69e])_0x5f2173=(_0x121c26<0x3?_0x1141c7(_0x5f2173):_0x121c26>0x3?_0x1141c7(_0x4dccf8,_0x3b2092,_0x5f2173):_0x1141c7(_0x4dccf8,_0x3b2092))||_0x5f2173;}return _0x121c26>0x3&&_0x5f2173&&Object[_0x7bf840(0xb7)](_0x4dccf8,_0x3b2092,_0x5f2173),_0x5f2173;},__metadata=this&&this['__metadata']||function(_0x316580,_0x280514){const _0x487a08=_0x131984;if(typeof Reflect===_0x487a08(0xa5)&&typeof Reflect[_0x487a08(0xa6)]===_0x487a08(0xe6))return Reflect['metadata'](_0x316580,_0x280514);},__param=this&&this[_0x131984(0xf6)]||function(_0x2a1955,_0x47b541){return function(_0x562a07,_0x3652f7){_0x47b541(_0x562a07,_0x3652f7,_0x2a1955);};};Object[_0x131984(0xb7)](exports,'__esModule',{'value':!![]}),exports['ChatLogService']=void 0x0;const common_1=require('@nestjs/common'),typeorm_1=require(_0x131984(0xb0)),chatLog_entity_1=require(_0x131984(0xb6)),typeorm_2=require(_0x131984(0xfd)),balance_constant_1=require(_0x131984(0xd2)),user_entity_1=require(_0x131984(0xc1)),utils_1=require(_0x131984(0xb3)),exceljs_1=require(_0x131984(0xc8)),chatGroup_entity_1=require('../chatGroup/chatGroup.entity');let ChatLogService=class ChatLogService{constructor(_0x5da5c1,_0x52c866,_0xd26e4){const _0x3b7228=_0x131984;this[_0x3b7228(0x99)]=_0x5da5c1,this[_0x3b7228(0xfc)]=_0x52c866,this[_0x3b7228(0xe2)]=_0xd26e4;}async[_0x131984(0xf5)](_0x346090){const _0x1397e2=_0x131984;return await this[_0x1397e2(0x99)][_0x1397e2(0xd8)](_0x346090);}async['querDrawLog'](_0x930770,_0x1e6b82){const _0x2564d8=_0x131984,{id:_0x43d944}=_0x930770[_0x2564d8(0xa4)],{model:_0x5bf2ef}=_0x1e6b82,_0x56d861={'userId':_0x43d944,'type':balance_constant_1[_0x2564d8(0xac)]['PAINT_TYPE']};_0x5bf2ef&&(_0x56d861['model']=_0x5bf2ef,_0x5bf2ef===_0x2564d8(0xe7)&&(_0x56d861['model']=(0x0,typeorm_2['In'])([_0x2564d8(0xe7),'dall-e-3'])));const _0x1a4052=await this[_0x2564d8(0x99)][_0x2564d8(0xa3)]({'where':_0x56d861,'order':{'id':_0x2564d8(0xc3)},'select':['id',_0x2564d8(0xd5),_0x2564d8(0xdb),'message_id',_0x2564d8(0xde),_0x2564d8(0xd6),_0x2564d8(0xda),_0x2564d8(0xc0),'fileInfo']});return _0x1a4052[_0x2564d8(0xc4)](_0x572e18=>{const _0x42add0=_0x2564d8;if(_0x572e18['type']==='paintCount'){const _0x4cc6ec=_0x572e18[_0x42add0(0xd6)]==='mj'?0x136:0xa0,_0x2987ec=_0x572e18[_0x42add0(0xd5)][_0x42add0(0xdd)]('cos')?_0x42add0(0xe5):'ali',_0x2ee72d=_0x2987ec===_0x42add0(0xe5)?_0x42add0(0xd3)+_0x4cc6ec+'/q/55':_0x42add0(0x104)+_0x4cc6ec;_0x572e18['thumbImg']=_0x572e18['answer']+_0x2ee72d;try{_0x572e18[_0x42add0(0xd4)]=_0x572e18[_0x42add0(0xd4)]?JSON[_0x42add0(0xc6)](_0x572e18[_0x42add0(0xd4)]):null;}catch(_0x54a0a4){_0x572e18[_0x42add0(0xd4)]={};}}}),_0x1a4052;}async[_0x131984(0x9c)](_0x45f8c3){const _0x116acb=_0x131984,{page:page=0x1,size:size=0x14,rec:_0x4fb05d,userId:_0x563a06,model:_0x2c858e}=_0x45f8c3,_0x293168={'type':balance_constant_1['DeductionKey'][_0x116acb(0xee)],'prompt':(0x0,typeorm_2[_0x116acb(0xe8)])(''),'answer':(0x0,typeorm_2[_0x116acb(0xe8)])('')};_0x4fb05d&&Object['assign'](_0x293168,{'rec':_0x4fb05d}),_0x563a06&&Object[_0x116acb(0xf1)](_0x293168,{'userId':_0x563a06});_0x2c858e&&(_0x293168['model']=_0x2c858e,_0x2c858e===_0x116acb(0xe7)&&(_0x293168[_0x116acb(0xd6)]=(0x0,typeorm_2['In'])(['DALL-E2',_0x116acb(0x101)])));const [_0xb3d06d,_0x5c1aa8]=await this[_0x116acb(0x99)][_0x116acb(0xa9)]({'order':{'id':_0x116acb(0xc3)},'skip':(page-0x1)*size,'take':size,'where':_0x293168});return _0xb3d06d[_0x116acb(0xc4)](_0xfa1f45=>{const _0x1d84d3=_0x116acb;var _0x4e9820;if(_0xfa1f45[_0x1d84d3(0xc0)]===_0x1d84d3(0xbe)){const _0x4bb306=_0xfa1f45['model']==='mj'?0x136:0xa0,_0x59c800=_0xfa1f45[_0x1d84d3(0xd5)][_0x1d84d3(0xdd)](_0x1d84d3(0xd7))?'tencent':'ali',_0x295f2c=_0x59c800===_0x1d84d3(0xe5)?_0x1d84d3(0xd3)+_0x4bb306+'/q/55':'?x-oss-process=image/resize,w_'+_0x4bb306;_0xfa1f45[_0x1d84d3(0x9e)]=_0xfa1f45[_0x1d84d3(0xd5)]+_0x295f2c;try{const _0xce213e=_0xfa1f45[_0x1d84d3(0xda)]?JSON['parse'](_0xfa1f45[_0x1d84d3(0xda)]):null;_0xce213e&&(_0xce213e?_0xfa1f45[_0x1d84d3(0xf0)]=((_0x4e9820=_0xce213e===null||_0xce213e===void 0x0?void 0x0:_0xce213e[_0x1d84d3(0xbf)][0x0])===null||_0x4e9820===void 0x0?void 0x0:_0x4e9820[_0x1d84d3(0xbf)][_0x1d84d3(0xf9)])===0x5:_0xfa1f45['isGroup']=![]);}catch(_0x46957){console[_0x1d84d3(0xeb)](_0x1d84d3(0xad),_0x46957);}}}),{'rows':_0xb3d06d,'count':_0x5c1aa8};}async[_0x131984(0xae)](_0x3e01ad){const _0x26e9b3=_0x131984,{id:_0x32eb6c}=_0x3e01ad,_0x476685=await this['chatLogEntity'][_0x26e9b3(0xfe)]({'where':{'id':_0x32eb6c,'type':balance_constant_1['DeductionKey']['PAINT_TYPE']}});if(!_0x476685)throw new common_1['HttpException'](_0x26e9b3(0xea),common_1[_0x26e9b3(0xc7)][_0x26e9b3(0xa7)]);const _0x295fa8=_0x476685[_0x26e9b3(0xe1)]===0x1?0x0:0x1,_0xd7b03a=await this[_0x26e9b3(0x99)][_0x26e9b3(0xef)]({'id':_0x32eb6c},{'rec':_0x295fa8});if(_0xd7b03a[_0x26e9b3(0xca)]>0x0)return(_0x295fa8?'推荐':_0x26e9b3(0xa1))+'图片成功！';throw new common_1['HttpException']('你操作的图片不存在、请检查！',common_1[_0x26e9b3(0xc7)]['BAD_REQUEST']);}async[_0x131984(0xdf)](_0x4d2124,_0xd67531){const _0x159cee=_0x131984,_0x2a2fbf={'type':balance_constant_1[_0x159cee(0xac)][_0x159cee(0xfb)]},{page:page=0x1,size:size=0x1e,prompt:_0x17ded7,email:_0x2a5d07}=_0x4d2124;_0x17ded7&&Object[_0x159cee(0xf1)](_0x2a2fbf,{'prompt':(0x0,typeorm_2['Like'])('%'+_0x17ded7+'%')});if(_0x2a5d07){const _0x53f02b=await this['userEntity'][_0x159cee(0xfe)]({'where':{'email':_0x2a5d07}});(_0x53f02b===null||_0x53f02b===void 0x0?void 0x0:_0x53f02b['id'])&&Object['assign'](_0x2a2fbf,{'userId':_0x53f02b['id']});}const [_0x184685,_0x1052d4]=await this[_0x159cee(0x99)][_0x159cee(0xa9)]({'order':{'id':'DESC'},'skip':(page-0x1)*size,'take':size,'where':_0x2a2fbf}),_0x2d6f27=_0x184685['map'](_0x1b6feb=>_0x1b6feb[_0x159cee(0xfa)]),_0x531777=await this[_0x159cee(0xfc)]['find']({'where':{'id':(0x0,typeorm_2['In'])(_0x2d6f27)}}),_0x5035a7=_0x184685[_0x159cee(0xf2)](_0x114c10=>{const _0x52450e=_0x159cee,_0xf08f12=_0x531777[_0x52450e(0xa3)](_0x6c6893=>_0x6c6893['id']===_0x114c10['userId']);return{'username':_0xf08f12?_0xf08f12[_0x52450e(0xdc)]:'','email':_0xf08f12?_0xf08f12[_0x52450e(0xcf)]:'','prompt':_0x114c10[_0x52450e(0xdb)],'answer':_0x114c10[_0x52450e(0xd5)],'createdAt':(0x0,utils_1[_0x52450e(0xe4)])(_0x114c10[_0x52450e(0x9a)])};}),_0x8f9079=new exceljs_1['default']['Workbook'](),_0xf4e5b1=_0x8f9079[_0x159cee(0xf4)]('chatlog');_0xf4e5b1[_0x159cee(0xce)]=[{'header':'用户名','key':_0x159cee(0xdc),'width':0x14},{'header':_0x159cee(0xbc),'key':_0x159cee(0xcf),'width':0x14},{'header':_0x159cee(0xe3),'key':_0x159cee(0x9a),'width':0x14},{'header':'提问问题','key':_0x159cee(0xdb),'width':0x50},{'header':_0x159cee(0xd0),'key':'answer','width':0x96}],_0x5035a7[_0x159cee(0xc4)](_0x1c8482=>_0xf4e5b1['addRow'](_0x1c8482)),_0xd67531[_0x159cee(0xa2)](_0x159cee(0xf7),_0x159cee(0xcd)),_0xd67531[_0x159cee(0xa2)]('Content-Disposition','attachment;\x20filename='+'chat.xlsx'),await _0x8f9079[_0x159cee(0x105)][_0x159cee(0xd9)](_0xd67531),_0xd67531[_0x159cee(0xa0)]();}async['querAllChatLog'](_0x4cbd02,_0x5ea6a8){const _0x4b8e7c=_0x131984,{page:page=0x1,size:size=0x14,userId:_0x429741,prompt:_0x18f2ed}=_0x4cbd02,_0x50f9dd={'type':balance_constant_1[_0x4b8e7c(0xac)]['CHAT_TYPE'],'prompt':(0x0,typeorm_2[_0x4b8e7c(0xe8)])('')};_0x429741&&Object[_0x4b8e7c(0xf1)](_0x50f9dd,{'userId':_0x429741}),_0x18f2ed&&Object[_0x4b8e7c(0xf1)](_0x50f9dd,{'prompt':(0x0,typeorm_2[_0x4b8e7c(0xbb)])('%'+_0x18f2ed+'%')});const [_0x18d2cc,_0x2c2f38]=await this[_0x4b8e7c(0x99)][_0x4b8e7c(0xa9)]({'order':{'id':_0x4b8e7c(0xc3)},'skip':(page-0x1)*size,'take':size,'where':_0x50f9dd}),_0x1133b2=_0x18d2cc[_0x4b8e7c(0xf2)](_0x374ab=>_0x374ab[_0x4b8e7c(0xfa)]),_0x1b7749=await this[_0x4b8e7c(0xfc)][_0x4b8e7c(0xa3)]({'where':{'id':(0x0,typeorm_2['In'])(_0x1133b2)},'select':['id',_0x4b8e7c(0xdc),_0x4b8e7c(0xcf)]});return _0x18d2cc[_0x4b8e7c(0xc4)](_0x4cafc6=>{const _0x33d063=_0x4b8e7c,{username:_0x5c7a03,email:_0x165f90}=_0x1b7749[_0x33d063(0xa3)](_0x4ffc22=>_0x4ffc22['id']===_0x4cafc6[_0x33d063(0xfa)])||{};_0x4cafc6[_0x33d063(0xdc)]=_0x5c7a03,_0x4cafc6[_0x33d063(0xcf)]=_0x165f90;}),_0x5ea6a8['user']['role']!==_0x4b8e7c(0xd1)&&_0x18d2cc['forEach'](_0x445760=>_0x445760[_0x4b8e7c(0xcf)]=(0x0,utils_1[_0x4b8e7c(0xed)])(_0x445760[_0x4b8e7c(0xcf)])),_0x18d2cc[_0x4b8e7c(0xc4)](_0x33a25d=>{const _0x5ba60a=_0x4b8e7c;!_0x33a25d[_0x5ba60a(0xcf)]&&(_0x33a25d['email']=(_0x33a25d===null||_0x33a25d===void 0x0?void 0x0:_0x33a25d[_0x5ba60a(0xfa)])+'@nine.com'),!_0x33a25d[_0x5ba60a(0xdc)]&&(_0x33a25d[_0x5ba60a(0xdc)]='游客'+(_0x33a25d===null||_0x33a25d===void 0x0?void 0x0:_0x33a25d['userId']));}),{'rows':_0x18d2cc,'count':_0x2c2f38};}async[_0x131984(0x100)](_0x379a34,_0x5bc444){const _0x331779=_0x131984,{id:_0xde890c}=_0x379a34['user'],{groupId:_0x9465e6}=_0x5bc444,_0xa1db8d={'userId':_0xde890c,'isDelete':![]};_0x9465e6&&Object[_0x331779(0xf1)](_0xa1db8d,{'groupId':_0x9465e6});if(_0x9465e6){const _0x5808e5=await this['chatGroupEntity'][_0x331779(0x106)]({'where':{'isDelete':![]}});if(_0x5808e5===0x0)return[];}const _0x47d06f=await this['chatLogEntity'][_0x331779(0xa3)]({'where':_0xa1db8d});return _0x47d06f[_0x331779(0xf2)](_0x113e11=>{const _0x1f0405=_0x331779,{prompt:_0x20e7b0,role:_0x2b377e,answer:_0x3f8e84,createdAt:_0x4c1e1b,model:_0x25fc7f,conversationOptions:_0x5f0285,requestOptions:_0x2089f2,id:_0x28f9e4,imageUrl:_0x2cdcc3}=_0x113e11;let _0x32e201=null,_0x437673=null;try{_0x32e201=JSON[_0x1f0405(0xc6)](_0x5f0285),_0x437673=JSON[_0x1f0405(0xc6)](_0x2089f2);}catch(_0x1966d6){}return{'chatId':_0x28f9e4,'dateTime':(0x0,utils_1[_0x1f0405(0xe4)])(_0x4c1e1b),'text':_0x2b377e===_0x1f0405(0xa4)?_0x20e7b0:_0x3f8e84,'inversion':_0x2b377e===_0x1f0405(0xa4),'error':![],'conversationOptions':_0x32e201,'requestOptions':_0x437673,'imageUrl':_0x2cdcc3,'model':_0x25fc7f};});}async['deleteChatLog'](_0x5aae71,_0x1d3097){const _0x31a960=_0x131984,{id:_0x52145a}=_0x5aae71['user'],{id:_0x209b99}=_0x1d3097,_0x69fc38=await this[_0x31a960(0x99)][_0x31a960(0xfe)]({'where':{'id':_0x209b99,'userId':_0x52145a}});if(!_0x69fc38)throw new common_1[(_0x31a960(0xff))](_0x31a960(0xc5),common_1[_0x31a960(0xc7)][_0x31a960(0xa7)]);const _0x3625fa=await this[_0x31a960(0x99)]['update']({'id':_0x209b99},{'isDelete':!![]});if(_0x3625fa[_0x31a960(0xca)]>0x0)return _0x31a960(0xcc);else throw new common_1['HttpException'](_0x31a960(0xc5),common_1[_0x31a960(0xc7)][_0x31a960(0xa7)]);}async[_0x131984(0xaf)](_0x4bf720,_0x3bc9f5){const _0x395366=_0x131984,{groupId:_0x5b363a}=_0x3bc9f5,{id:_0x2ce9f0}=_0x4bf720['user'],_0x3727f3=await this['chatGroupEntity'][_0x395366(0xfe)]({'where':{'id':_0x5b363a,'userId':_0x2ce9f0}});if(!_0x3727f3)throw new common_1['HttpException'](_0x395366(0xc5),common_1[_0x395366(0xc7)][_0x395366(0xa7)]);const _0x38d7e8=await this['chatLogEntity'][_0x395366(0xef)]({'groupId':_0x5b363a},{'isDelete':!![]});if(_0x38d7e8[_0x395366(0xca)]>0x0)return _0x395366(0xcc);if(_0x38d7e8[_0x395366(0xca)]===0x0)throw new common_1[(_0x395366(0xff))](_0x395366(0xb2),common_1[_0x395366(0xc7)][_0x395366(0xa7)]);}async[_0x131984(0xb8)](_0x584a80,_0x51866d){const _0x2af744=_0x131984,{id:_0x70b3a4}=_0x584a80[_0x2af744(0xa4)],{appId:_0xf4b36e,page:page=0x1,size:size=0xa}=_0x51866d,[_0x442bcb,_0x16a1cb]=await this[_0x2af744(0x99)][_0x2af744(0xa9)]({'where':{'userId':_0x70b3a4,'appId':_0xf4b36e,'role':_0x2af744(0x9d)},'order':{'id':_0x2af744(0xc3)},'take':size,'skip':(page-0x1)*size});return{'rows':_0x442bcb,'count':_0x16a1cb};}};ChatLogService=__decorate([(0x0,common_1[_0x131984(0x102)])(),__param(0x0,(0x0,typeorm_1[_0x131984(0xf3)])(chatLog_entity_1[_0x131984(0xaa)])),__param(0x1,(0x0,typeorm_1[_0x131984(0xf3)])(user_entity_1[_0x131984(0xab)])),__param(0x2,(0x0,typeorm_1[_0x131984(0xf3)])(chatGroup_entity_1['ChatGroupEntity'])),__metadata('design:paramtypes',[typeorm_2[_0x131984(0xb9)],typeorm_2[_0x131984(0xb9)],typeorm_2['Repository']])],ChatLogService),exports['ChatLogService']=ChatLogService;