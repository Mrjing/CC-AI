'use strict';const _0x2ed8a4=_0x27f4;(function(_0x5753b7,_0x6f9502){const _0x2d201b=_0x27f4,_0x5219d2=_0x5753b7();while(!![]){try{const _0x4326da=parseInt(_0x2d201b(0x103))/0x1*(parseInt(_0x2d201b(0x13a))/0x2)+parseInt(_0x2d201b(0x126))/0x3+parseInt(_0x2d201b(0x147))/0x4*(-parseInt(_0x2d201b(0x125))/0x5)+-parseInt(_0x2d201b(0x12c))/0x6+parseInt(_0x2d201b(0x148))/0x7*(-parseInt(_0x2d201b(0x146))/0x8)+parseInt(_0x2d201b(0x10a))/0x9*(parseInt(_0x2d201b(0xf7))/0xa)+-parseInt(_0x2d201b(0x132))/0xb*(parseInt(_0x2d201b(0xfe))/0xc);if(_0x4326da===_0x6f9502)break;else _0x5219d2['push'](_0x5219d2['shift']());}catch(_0x28df17){_0x5219d2['push'](_0x5219d2['shift']());}}}(_0x334e,0x8e3b1));var __decorate=this&&this[_0x2ed8a4(0xf2)]||function(_0x451536,_0x5575f3,_0x54f046,_0x17cdae){const _0x562e03=_0x2ed8a4;var _0x5989e3=arguments[_0x562e03(0xf1)],_0x2af825=_0x5989e3<0x3?_0x5575f3:_0x17cdae===null?_0x17cdae=Object[_0x562e03(0x117)](_0x5575f3,_0x54f046):_0x17cdae,_0xc32eb5;if(typeof Reflect===_0x562e03(0xf0)&&typeof Reflect[_0x562e03(0x140)]===_0x562e03(0x113))_0x2af825=Reflect['decorate'](_0x451536,_0x5575f3,_0x54f046,_0x17cdae);else{for(var _0x5c3df5=_0x451536['length']-0x1;_0x5c3df5>=0x0;_0x5c3df5--)if(_0xc32eb5=_0x451536[_0x5c3df5])_0x2af825=(_0x5989e3<0x3?_0xc32eb5(_0x2af825):_0x5989e3>0x3?_0xc32eb5(_0x5575f3,_0x54f046,_0x2af825):_0xc32eb5(_0x5575f3,_0x54f046))||_0x2af825;}return _0x5989e3>0x3&&_0x2af825&&Object[_0x562e03(0x101)](_0x5575f3,_0x54f046,_0x2af825),_0x2af825;},__metadata=this&&this[_0x2ed8a4(0x145)]||function(_0x47c6be,_0x214d78){const _0x379495=_0x2ed8a4;if(typeof Reflect===_0x379495(0xf0)&&typeof Reflect[_0x379495(0x128)]===_0x379495(0x113))return Reflect[_0x379495(0x128)](_0x47c6be,_0x214d78);},__param=this&&this['__param']||function(_0x360dad,_0x7c37bb){return function(_0x10f629,_0x33151b){_0x7c37bb(_0x10f629,_0x33151b,_0x360dad);};};Object[_0x2ed8a4(0x101)](exports,_0x2ed8a4(0x130),{'value':!![]}),exports[_0x2ed8a4(0x13c)]=void 0x0;function _0x27f4(_0x531512,_0x1b01b1){const _0x334e0a=_0x334e();return _0x27f4=function(_0x27f44e,_0x132ec3){_0x27f44e=_0x27f44e-0xe5;let _0x161ce5=_0x334e0a[_0x27f44e];return _0x161ce5;},_0x27f4(_0x531512,_0x1b01b1);}const common_1=require('@nestjs/common'),crami_entity_1=require(_0x2ed8a4(0x142)),typeorm_1=require(_0x2ed8a4(0xf6)),typeorm_2=require(_0x2ed8a4(0xed)),cramiPackage_entity_1=require(_0x2ed8a4(0xfd)),utils_1=require(_0x2ed8a4(0x139)),user_entity_1=require(_0x2ed8a4(0xfc)),userBalance_service_1=require(_0x2ed8a4(0x11d)),balance_constant_1=require(_0x2ed8a4(0x11b));let CramiService=class CramiService{constructor(_0x2eb465,_0x28fb10,_0x445136,_0x87b16){const _0x2152a3=_0x2ed8a4;this['cramiEntity']=_0x2eb465,this['cramiPackageEntity']=_0x28fb10,this[_0x2152a3(0x102)]=_0x445136,this[_0x2152a3(0x111)]=_0x87b16;}async[_0x2ed8a4(0x119)](_0x21ab3b){const _0x5d4603=_0x2ed8a4;return await this[_0x5d4603(0x118)][_0x5d4603(0x100)]({'where':{'id':_0x21ab3b}});}async[_0x2ed8a4(0x112)](_0x5ce963){const _0x17ba25=_0x2ed8a4;try{const {page:page=0x1,size:size=0xa,name:_0x1c9806,status:_0x30e3f2,type:_0x3db69f}=_0x5ce963,_0x387643={};_0x1c9806&&Object['assign'](_0x387643,{'name':(0x0,typeorm_2[_0x17ba25(0xf3)])('%'+_0x1c9806+'%')}),_0x30e3f2&&Object[_0x17ba25(0xe6)](_0x387643,{'status':_0x30e3f2});_0x3db69f&&(_0x3db69f>0x0?Object[_0x17ba25(0xe6)](_0x387643,{'days':(0x0,typeorm_2[_0x17ba25(0x10f)])(0x0)}):Object['assign'](_0x387643,{'days':(0x0,typeorm_2[_0x17ba25(0x122)])(0x0)}));const [_0x3232b5,_0x2629fd]=await this[_0x17ba25(0x118)][_0x17ba25(0x109)]({'skip':(page-0x1)*size,'take':size,'where':_0x387643,'order':{'order':_0x17ba25(0x10c)}});return{'rows':_0x3232b5,'count':_0x2629fd};}catch(_0x10ec9e){console['log'](_0x17ba25(0xfb),_0x10ec9e);}}async[_0x2ed8a4(0x11f)](_0x3125e1){const _0x23e044=_0x2ed8a4,{name:_0x235e28,weight:_0x5cf193}=_0x3125e1,_0x6483a6=await this['cramiPackageEntity'][_0x23e044(0x100)]({'where':[{'name':_0x235e28},{'weight':_0x5cf193}]});if(_0x6483a6)throw new common_1[(_0x23e044(0xea))]('套餐名称或套餐等级重复、请检查！',common_1[_0x23e044(0x13e)][_0x23e044(0xec)]);try{return await this[_0x23e044(0x118)][_0x23e044(0x127)](_0x3125e1);}catch(_0x4c569d){console[_0x23e044(0xfa)]('error:\x20',_0x4c569d);throw new common_1[(_0x23e044(0xea))](_0x4c569d,common_1[_0x23e044(0x13e)][_0x23e044(0xec)]);}}async[_0x2ed8a4(0x12b)](_0x23e930){const _0x5162d7=_0x2ed8a4,{id:_0x2ee4d1,name:_0x3f05f5,weight:_0x2a7572}=_0x23e930,_0x58b2ad=await this[_0x5162d7(0x118)]['findOne']({'where':{'id':_0x2ee4d1}});if(!_0x58b2ad)throw new common_1[(_0x5162d7(0xea))](_0x5162d7(0x13d),common_1['HttpStatus'][_0x5162d7(0xec)]);const _0x1deb61=await this['cramiPackageEntity'][_0x5162d7(0xff)]({'where':[{'name':_0x3f05f5,'id':(0x0,typeorm_2[_0x5162d7(0xe7)])(_0x2ee4d1)},{'weight':_0x2a7572,'id':(0x0,typeorm_2[_0x5162d7(0xe7)])(_0x2ee4d1)}]});if(_0x1deb61)throw new common_1[(_0x5162d7(0xea))](_0x5162d7(0x106),common_1[_0x5162d7(0x13e)][_0x5162d7(0xec)]);const _0x28977c=await this[_0x5162d7(0x118)][_0x5162d7(0xe8)]({'id':_0x2ee4d1},_0x23e930);if(_0x28977c[_0x5162d7(0xe5)]>0x0)return'更新套餐成功！';else throw new common_1[(_0x5162d7(0xea))](_0x5162d7(0x105),common_1[_0x5162d7(0x13e)][_0x5162d7(0xec)]);}async[_0x2ed8a4(0x12f)](_0x23f0c5){const _0x237631=_0x2ed8a4,{id:_0x588923}=_0x23f0c5,_0x419dcd=await this[_0x237631(0x108)][_0x237631(0xff)]({'where':{'packageId':_0x588923}});if(_0x419dcd)throw new common_1[(_0x237631(0xea))](_0x237631(0x136),common_1['HttpStatus']['BAD_REQUEST']);return await this['cramiPackageEntity']['delete']({'id':_0x588923});}async[_0x2ed8a4(0xf4)](_0x42b6c3){const _0x559ce4=_0x2ed8a4,{packageId:_0x2e401c,count:count=0x1}=_0x42b6c3;if(_0x2e401c){const _0x3866b0=await this[_0x559ce4(0x118)][_0x559ce4(0x100)]({'where':{'id':_0x2e401c}});if(!_0x3866b0)throw new common_1[(_0x559ce4(0xea))](_0x559ce4(0x133),common_1[_0x559ce4(0x13e)][_0x559ce4(0xec)]);const {days:days=-0x1,model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0}=_0x3866b0,_0xbe60cf={'packageId':_0x2e401c,'days':days,'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount};return await this[_0x559ce4(0x131)](_0xbe60cf,count);}if(!_0x2e401c){const {model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0}=_0x42b6c3;if([model3Count,model4Count,drawMjCount][_0x559ce4(0x114)](_0x2ec426=>!_0x2ec426))throw new common_1[(_0x559ce4(0xea))](_0x559ce4(0xf9),common_1[_0x559ce4(0x13e)]['BAD_REQUEST']);const _0x50ca24={'days':-0x1,'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount};return await this[_0x559ce4(0x131)](_0x50ca24,count);}}async[_0x2ed8a4(0x131)](_0x1c3eca,_0xe6d6d0){const _0x24d57c=_0x2ed8a4,_0x333be0=[];for(let _0x395471=0x0;_0x395471<_0xe6d6d0;_0x395471++){const _0x526abc=(0x0,utils_1[_0x24d57c(0x11c)])(),_0x24ce18=this[_0x24d57c(0x108)][_0x24d57c(0x134)](Object[_0x24d57c(0xe6)](Object['assign']({},_0x1c3eca),{'code':_0x526abc}));_0x333be0['push'](_0x24ce18);}return await this[_0x24d57c(0x108)][_0x24d57c(0x127)](_0x333be0);}async[_0x2ed8a4(0x11a)](_0x51a699,_0xe2fb66){const _0x591715=_0x2ed8a4,{id:_0x4b830b}=_0x51a699[_0x591715(0x143)],_0x13ae71=await this['cramiEntity']['findOne']({'where':{'code':_0xe2fb66['code']}});if(!_0x13ae71)throw new common_1[(_0x591715(0xea))](_0x591715(0x141),common_1[_0x591715(0x13e)]['BAD_REQUEST']);const {status:_0x4a702b,days:days=-0x1,model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0,packageId:_0x5c955b}=_0x13ae71;if(_0x4a702b===0x1)throw new common_1['HttpException'](_0x591715(0x10e),common_1[_0x591715(0x13e)]['BAD_REQUEST']);const _0x106ff7={'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount,'packageId':_0x5c955b};return await this[_0x591715(0x111)][_0x591715(0x129)](_0x4b830b,Object['assign']({},_0x106ff7),days),await this[_0x591715(0x111)][_0x591715(0xeb)]({'userId':_0x4b830b,'rechargeType':balance_constant_1['RechargeType'][_0x591715(0x12e)],'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount,'days':days}),await this[_0x591715(0x108)]['update']({'code':_0xe2fb66[_0x591715(0x10d)]},{'useId':_0x4b830b,'status':0x1}),_0x591715(0x10b);}async['queryAllCrami'](_0x42029d,_0x2c55a1){const _0x379256=_0x2ed8a4,{page:page=0x1,size:size=0xa,status:_0x5e8172,useId:_0x4740de}=_0x42029d,_0x570030={};_0x5e8172&&Object[_0x379256(0xe6)](_0x570030,{'status':_0x5e8172}),_0x4740de&&Object[_0x379256(0xe6)](_0x570030,{'useId':_0x4740de});const [_0x4c8ccb,_0xdb11fa]=await this[_0x379256(0x108)]['findAndCount']({'skip':(page-0x1)*size,'take':size,'order':{'createdAt':_0x379256(0x10c)},'where':_0x570030}),_0xd0177c=_0x4c8ccb['map'](_0x3a5f78=>_0x3a5f78['useId']),_0x27901b=_0x4c8ccb['map'](_0x8c2503=>_0x8c2503[_0x379256(0x107)]),_0x302d32=await this['userEntity'][_0x379256(0x123)]({'where':{'id':(0x0,typeorm_2['In'])(_0xd0177c)}}),_0x361a45=await this[_0x379256(0x118)][_0x379256(0x123)]({'where':{'id':(0x0,typeorm_2['In'])(_0x27901b)}});return _0x4c8ccb[_0x379256(0x144)](_0xb7e642=>{const _0x12baa5=_0x379256;var _0x3587bf,_0xe3c7be,_0x1190eb;_0xb7e642[_0x12baa5(0xf5)]=(_0x3587bf=_0x302d32['find'](_0x1dc10c=>_0x1dc10c['id']===_0xb7e642['useId']))===null||_0x3587bf===void 0x0?void 0x0:_0x3587bf[_0x12baa5(0xf5)],_0xb7e642['email']=(_0xe3c7be=_0x302d32[_0x12baa5(0x123)](_0x1a1ddd=>_0x1a1ddd['id']===_0xb7e642[_0x12baa5(0x12a)]))===null||_0xe3c7be===void 0x0?void 0x0:_0xe3c7be[_0x12baa5(0x13f)],_0xb7e642[_0x12baa5(0x120)]=(_0x1190eb=_0x361a45[_0x12baa5(0x123)](_0x1e96e4=>_0x1e96e4['id']===_0xb7e642[_0x12baa5(0x107)]))===null||_0x1190eb===void 0x0?void 0x0:_0x1190eb[_0x12baa5(0x115)];}),_0x2c55a1[_0x379256(0x143)][_0x379256(0x12d)]!==_0x379256(0x137)&&_0x4c8ccb[_0x379256(0x144)](_0x50a95e=>_0x50a95e[_0x379256(0x13f)]=(0x0,utils_1['maskEmail'])(_0x50a95e[_0x379256(0x13f)])),_0x2c55a1[_0x379256(0x143)]['role']!==_0x379256(0x137)&&_0x4c8ccb['forEach'](_0x1bff76=>_0x1bff76[_0x379256(0x10d)]=(0x0,utils_1[_0x379256(0xe9)])(_0x1bff76[_0x379256(0x10d)])),{'rows':_0x4c8ccb,'count':_0xdb11fa};}async[_0x2ed8a4(0x104)](_0x34e99e){const _0x56322b=_0x2ed8a4,_0x1cad8f=await this['cramiEntity'][_0x56322b(0x100)]({'where':{'id':_0x34e99e}});if(!_0x1cad8f)throw new common_1[(_0x56322b(0xea))](_0x56322b(0x138),common_1[_0x56322b(0x13e)][_0x56322b(0xec)]);if(_0x1cad8f[_0x56322b(0x135)]===0x1)throw new common_1[(_0x56322b(0xea))](_0x56322b(0x110),common_1[_0x56322b(0x13e)]['BAD_REQUEST']);return await this['cramiEntity'][_0x56322b(0xef)]({'id':_0x34e99e});}async['batchDelCrami'](_0x35e9e0){const _0x3bf558=_0x2ed8a4,{ids:_0x3bb9ff}=_0x35e9e0,_0xf1c870=await this[_0x3bf558(0x108)]['delete'](_0x3bb9ff);if(_0xf1c870[_0x3bf558(0xe5)]>0x0)return _0x3bf558(0xee);else throw new common_1[(_0x3bf558(0xea))]('删除卡密失败、请重试！',common_1['HttpStatus'][_0x3bf558(0xec)]);}};function _0x334e(){const _0x37b872=['packageId','cramiEntity','findAndCount','18tTjxTR','使用卡密成功','DESC','code','当前卡密已被使用、请确认您输入的卡密是否正确！','MoreThan','当前卡密已被使用、已使用的卡密禁止删除！','userBalanceService','queryAllPackage','function','every','name','UserBalanceService','getOwnPropertyDescriptor','cramiPackageEntity','queryOnePackage','useCrami','../../common/constants/balance.constant','generateCramiCode','../userBalance/userBalance.service','CramiPackageEntity','createPackage','packageName','design:paramtypes','LessThanOrEqual','find','Injectable','1120cgwGCG','1039770QsLAIk','save','metadata','addBalanceToUser','useId','updatePackage','2691738mHIBXn','role','PACKAGE_GIFT','delPackage','__esModule','generateCrami','44TvraBF','当前套餐不存在、请确认您选择的套餐是否存在！','create','status','当前套餐下存在卡密、请先删除卡密后才可删除套餐！','super','当前卡密不存在、请确认您要删除的卡密是否存在！','../../common/utils','2XVJUmw','Repository','CramiService','当前套餐不存在、请检查你的输入参数！','HttpStatus','email','decorate','当前卡密不存在、请确认您输入的卡密是否正确！','./crami.entity','user','forEach','__metadata','8JXCsKe','784SdGsRK','3870937cmZROQ','affected','assign','Not','update','maskCrami','HttpException','saveRecordRechargeLog','BAD_REQUEST','typeorm','删除卡密成功！','delete','object','length','__decorate','Like','createCrami','username','@nestjs/typeorm','2579090joxzAN','InjectRepository','自定义卡密必须至少一项余额不为0️零！','log','error:\x20','../user/user.entity','./cramiPackage.entity','870924lkwHov','count','findOne','defineProperty','userEntity','1055995uHCvef','delCrami','更新套餐失败、请重试！','套餐名称或套餐等级重复、请检查！'];_0x334e=function(){return _0x37b872;};return _0x334e();}CramiService=__decorate([(0x0,common_1[_0x2ed8a4(0x124)])(),__param(0x0,(0x0,typeorm_1[_0x2ed8a4(0xf8)])(crami_entity_1['CramiEntity'])),__param(0x1,(0x0,typeorm_1['InjectRepository'])(cramiPackage_entity_1[_0x2ed8a4(0x11e)])),__param(0x2,(0x0,typeorm_1[_0x2ed8a4(0xf8)])(user_entity_1['UserEntity'])),__metadata(_0x2ed8a4(0x121),[typeorm_2[_0x2ed8a4(0x13b)],typeorm_2[_0x2ed8a4(0x13b)],typeorm_2[_0x2ed8a4(0x13b)],userBalance_service_1[_0x2ed8a4(0x116)]])],CramiService),exports['CramiService']=CramiService;