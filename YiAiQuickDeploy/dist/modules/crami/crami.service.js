'use strict';const _0x3f6494=_0x4824;(function(_0x207acf,_0x4ad729){const _0x5e983e=_0x4824,_0x506a59=_0x207acf();while(!![]){try{const _0x425e8c=parseInt(_0x5e983e(0xf7))/0x1+-parseInt(_0x5e983e(0xaf))/0x2+parseInt(_0x5e983e(0xd3))/0x3*(-parseInt(_0x5e983e(0xd2))/0x4)+-parseInt(_0x5e983e(0xee))/0x5*(-parseInt(_0x5e983e(0x107))/0x6)+parseInt(_0x5e983e(0xe4))/0x7+parseInt(_0x5e983e(0xec))/0x8+-parseInt(_0x5e983e(0x10a))/0x9;if(_0x425e8c===_0x4ad729)break;else _0x506a59['push'](_0x506a59['shift']());}catch(_0x3f4e9a){_0x506a59['push'](_0x506a59['shift']());}}}(_0x6599,0xb10fb));function _0x4824(_0x474e6f,_0x4a2a2b){const _0x6599a0=_0x6599();return _0x4824=function(_0x4824d8,_0x2887f8){_0x4824d8=_0x4824d8-0xaf;let _0x30a357=_0x6599a0[_0x4824d8];return _0x30a357;},_0x4824(_0x474e6f,_0x4a2a2b);}var __decorate=this&&this[_0x3f6494(0xe3)]||function(_0x514e0f,_0x3fdfcc,_0x187d03,_0x24f129){const _0x4461a1=_0x3f6494;var _0x3c8fee=arguments[_0x4461a1(0xc8)],_0x368f62=_0x3c8fee<0x3?_0x3fdfcc:_0x24f129===null?_0x24f129=Object['getOwnPropertyDescriptor'](_0x3fdfcc,_0x187d03):_0x24f129,_0x5e886d;if(typeof Reflect===_0x4461a1(0xc7)&&typeof Reflect[_0x4461a1(0xfe)]===_0x4461a1(0xda))_0x368f62=Reflect[_0x4461a1(0xfe)](_0x514e0f,_0x3fdfcc,_0x187d03,_0x24f129);else{for(var _0x4a5255=_0x514e0f['length']-0x1;_0x4a5255>=0x0;_0x4a5255--)if(_0x5e886d=_0x514e0f[_0x4a5255])_0x368f62=(_0x3c8fee<0x3?_0x5e886d(_0x368f62):_0x3c8fee>0x3?_0x5e886d(_0x3fdfcc,_0x187d03,_0x368f62):_0x5e886d(_0x3fdfcc,_0x187d03))||_0x368f62;}return _0x3c8fee>0x3&&_0x368f62&&Object[_0x4461a1(0xcb)](_0x3fdfcc,_0x187d03,_0x368f62),_0x368f62;},__metadata=this&&this[_0x3f6494(0xe8)]||function(_0x42c298,_0x4778a0){const _0x430bb5=_0x3f6494;if(typeof Reflect===_0x430bb5(0xc7)&&typeof Reflect[_0x430bb5(0xd9)]===_0x430bb5(0xda))return Reflect[_0x430bb5(0xd9)](_0x42c298,_0x4778a0);},__param=this&&this[_0x3f6494(0xca)]||function(_0x1f1b26,_0x119f63){return function(_0x2cb23d,_0x34470a){_0x119f63(_0x2cb23d,_0x34470a,_0x1f1b26);};};Object[_0x3f6494(0xcb)](exports,'__esModule',{'value':!![]}),exports[_0x3f6494(0xbe)]=void 0x0;const common_1=require(_0x3f6494(0xd4)),crami_entity_1=require(_0x3f6494(0xb9)),typeorm_1=require(_0x3f6494(0xf3)),typeorm_2=require('typeorm'),cramiPackage_entity_1=require(_0x3f6494(0x10b)),utils_1=require(_0x3f6494(0xf6)),user_entity_1=require('../user/user.entity'),userBalance_service_1=require(_0x3f6494(0xde)),balance_constant_1=require(_0x3f6494(0xcc));let CramiService=class CramiService{constructor(_0x55112e,_0xdb6855,_0x4c2344,_0x59aa34){const _0x3b7322=_0x3f6494;this[_0x3b7322(0xfc)]=_0x55112e,this[_0x3b7322(0xe9)]=_0xdb6855,this['userEntity']=_0x4c2344,this[_0x3b7322(0xf1)]=_0x59aa34;}async[_0x3f6494(0xb3)](_0x889c49){const _0x37876a=_0x3f6494;return await this[_0x37876a(0xe9)][_0x37876a(0x10c)]({'where':{'id':_0x889c49}});}async['queryAllPackage'](_0xc65448){const _0x359125=_0x3f6494;try{const {page:page=0x1,size:size=0xa,name:_0x30f945,status:_0x38d1f4,type:_0x499141}=_0xc65448,_0xd9014={};_0x30f945&&Object[_0x359125(0xd8)](_0xd9014,{'name':(0x0,typeorm_2['Like'])('%'+_0x30f945+'%')}),_0x38d1f4&&Object[_0x359125(0xd8)](_0xd9014,{'status':_0x38d1f4});_0x499141&&(_0x499141>0x0?Object[_0x359125(0xd8)](_0xd9014,{'days':(0x0,typeorm_2[_0x359125(0xfb)])(0x0)}):Object[_0x359125(0xd8)](_0xd9014,{'days':(0x0,typeorm_2[_0x359125(0xc2)])(0x0)}));const [_0x344690,_0x2f2c35]=await this[_0x359125(0xe9)][_0x359125(0xf0)]({'skip':(page-0x1)*size,'take':size,'where':_0xd9014,'order':{'order':_0x359125(0xb1)}});return{'rows':_0x344690,'count':_0x2f2c35};}catch(_0x300512){console['log'](_0x359125(0xf8),_0x300512);}}async[_0x3f6494(0x105)](_0x24754e){const _0x58a695=_0x3f6494,{name:_0x5a523e,weight:_0x59fd50}=_0x24754e,_0x4684fa=await this['cramiPackageEntity'][_0x58a695(0x10c)]({'where':[{'name':_0x5a523e},{'weight':_0x59fd50}]});if(_0x4684fa)throw new common_1[(_0x58a695(0xe1))](_0x58a695(0xb6),common_1['HttpStatus'][_0x58a695(0xd1)]);try{return await this[_0x58a695(0xe9)]['save'](_0x24754e);}catch(_0x15be05){console[_0x58a695(0xd5)](_0x58a695(0xf8),_0x15be05);throw new common_1[(_0x58a695(0xe1))](_0x15be05,common_1[_0x58a695(0xc9)][_0x58a695(0xd1)]);}}async[_0x3f6494(0xfd)](_0x1c984e){const _0x22edb0=_0x3f6494,{id:_0x40b29d,name:_0x528e27,weight:_0x1a1703}=_0x1c984e,_0x21bac5=await this[_0x22edb0(0xe9)]['findOne']({'where':{'id':_0x40b29d}});if(!_0x21bac5)throw new common_1[(_0x22edb0(0xe1))]('当前套餐不存在、请检查你的输入参数！',common_1['HttpStatus'][_0x22edb0(0xd1)]);const _0x1f51e8=await this['cramiPackageEntity'][_0x22edb0(0x103)]({'where':[{'name':_0x528e27,'id':(0x0,typeorm_2[_0x22edb0(0x10d)])(_0x40b29d)},{'weight':_0x1a1703,'id':(0x0,typeorm_2['Not'])(_0x40b29d)}]});if(_0x1f51e8)throw new common_1[(_0x22edb0(0xe1))](_0x22edb0(0xb6),common_1['HttpStatus'][_0x22edb0(0xd1)]);const _0x470ac0=await this[_0x22edb0(0xe9)][_0x22edb0(0xd0)]({'id':_0x40b29d},_0x1c984e);if(_0x470ac0[_0x22edb0(0xc1)]>0x0)return _0x22edb0(0x100);else throw new common_1['HttpException'](_0x22edb0(0xdc),common_1['HttpStatus']['BAD_REQUEST']);}async[_0x3f6494(0xd7)](_0x36215e){const _0x1efeb0=_0x3f6494,{id:_0x17b186}=_0x36215e,_0xa77d1d=await this[_0x1efeb0(0xfc)]['count']({'where':{'packageId':_0x17b186}});if(_0xa77d1d)throw new common_1[(_0x1efeb0(0xe1))](_0x1efeb0(0x106),common_1[_0x1efeb0(0xc9)][_0x1efeb0(0xd1)]);return await this[_0x1efeb0(0xe9)][_0x1efeb0(0xbf)]({'id':_0x17b186});}async['createCrami'](_0x27b636){const _0x2a8ec3=_0x3f6494,{packageId:_0x24b7ac,count:count=0x1}=_0x27b636;if(_0x24b7ac){const _0x5ad3f6=await this[_0x2a8ec3(0xe9)][_0x2a8ec3(0x10c)]({'where':{'id':_0x24b7ac}});if(!_0x5ad3f6)throw new common_1['HttpException'](_0x2a8ec3(0xf5),common_1[_0x2a8ec3(0xc9)][_0x2a8ec3(0xd1)]);const {days:days=-0x1,model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0}=_0x5ad3f6,_0x185d25={'packageId':_0x24b7ac,'days':days,'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount};return await this['generateCrami'](_0x185d25,count);}if(!_0x24b7ac){const {model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0}=_0x27b636;if([model3Count,model4Count,drawMjCount][_0x2a8ec3(0xcf)](_0x52ee69=>!_0x52ee69))throw new common_1[(_0x2a8ec3(0xe1))](_0x2a8ec3(0xef),common_1['HttpStatus']['BAD_REQUEST']);const _0x3ff100={'days':-0x1,'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount};return await this[_0x2a8ec3(0xc6)](_0x3ff100,count);}}async['generateCrami'](_0x4b8aa7,_0x39f7be){const _0x4a09d4=_0x3f6494,_0x188481=[];for(let _0x431d47=0x0;_0x431d47<_0x39f7be;_0x431d47++){const _0x1eee23=(0x0,utils_1['generateCramiCode'])(),_0x72f2e1=this[_0x4a09d4(0xfc)][_0x4a09d4(0xf2)](Object[_0x4a09d4(0xd8)](Object['assign']({},_0x4b8aa7),{'code':_0x1eee23}));_0x188481[_0x4a09d4(0xbd)](_0x72f2e1);}return await this[_0x4a09d4(0xfc)]['save'](_0x188481);}async[_0x3f6494(0xb8)](_0x2bdaeb,_0x2319ce){const _0x2fe3f0=_0x3f6494,{id:_0x50b8af}=_0x2bdaeb[_0x2fe3f0(0x101)],_0x16f4fa=await this[_0x2fe3f0(0xfc)]['findOne']({'where':{'code':_0x2319ce[_0x2fe3f0(0xed)]}});if(!_0x16f4fa)throw new common_1[(_0x2fe3f0(0xe1))](_0x2fe3f0(0xe5),common_1[_0x2fe3f0(0xc9)][_0x2fe3f0(0xd1)]);const {status:_0x38f236,days:days=-0x1,model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0,packageId:_0x8b8187}=_0x16f4fa;if(_0x38f236===0x1)throw new common_1[(_0x2fe3f0(0xe1))](_0x2fe3f0(0xe0),common_1[_0x2fe3f0(0xc9)][_0x2fe3f0(0xd1)]);const _0x48a8d6={'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount,'packageId':_0x8b8187};return await this[_0x2fe3f0(0xf1)]['addBalanceToUser'](_0x50b8af,Object[_0x2fe3f0(0xd8)]({},_0x48a8d6),days),await this[_0x2fe3f0(0xf1)][_0x2fe3f0(0xc3)]({'userId':_0x50b8af,'rechargeType':balance_constant_1[_0x2fe3f0(0xc5)][_0x2fe3f0(0xb0)],'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount,'days':days}),await this[_0x2fe3f0(0xfc)]['update']({'code':_0x2319ce['code']},{'useId':_0x50b8af,'status':0x1}),_0x2fe3f0(0xce);}async[_0x3f6494(0x109)](_0x3f03bc,_0x4529ca){const _0x166b02=_0x3f6494,{page:page=0x1,size:size=0xa,status:_0x47691d,useId:_0x252d8d}=_0x3f03bc,_0x99528f={};_0x47691d&&Object[_0x166b02(0xd8)](_0x99528f,{'status':_0x47691d}),_0x252d8d&&Object[_0x166b02(0xd8)](_0x99528f,{'useId':_0x252d8d});const [_0x2c2524,_0xeea42e]=await this['cramiEntity']['findAndCount']({'skip':(page-0x1)*size,'take':size,'order':{'createdAt':_0x166b02(0xb1)},'where':_0x99528f}),_0xe1abd1=_0x2c2524[_0x166b02(0xf9)](_0x3197ba=>_0x3197ba[_0x166b02(0xf4)]),_0x2b106a=_0x2c2524[_0x166b02(0xf9)](_0x51f95d=>_0x51f95d[_0x166b02(0xbb)]),_0x4e009c=await this[_0x166b02(0xb2)][_0x166b02(0xbc)]({'where':{'id':(0x0,typeorm_2['In'])(_0xe1abd1)}}),_0x2fac0f=await this[_0x166b02(0xe9)][_0x166b02(0xbc)]({'where':{'id':(0x0,typeorm_2['In'])(_0x2b106a)}});return _0x2c2524[_0x166b02(0xcd)](_0x434bff=>{const _0xbdc76f=_0x166b02;var _0x4e5c99,_0x3eb1b5,_0x2a0bf1;_0x434bff[_0xbdc76f(0xeb)]=(_0x4e5c99=_0x4e009c[_0xbdc76f(0xbc)](_0x7dbace=>_0x7dbace['id']===_0x434bff[_0xbdc76f(0xf4)]))===null||_0x4e5c99===void 0x0?void 0x0:_0x4e5c99[_0xbdc76f(0xeb)],_0x434bff['email']=(_0x3eb1b5=_0x4e009c['find'](_0x3cbe95=>_0x3cbe95['id']===_0x434bff[_0xbdc76f(0xf4)]))===null||_0x3eb1b5===void 0x0?void 0x0:_0x3eb1b5['email'],_0x434bff[_0xbdc76f(0x104)]=(_0x2a0bf1=_0x2fac0f[_0xbdc76f(0xbc)](_0x26bb62=>_0x26bb62['id']===_0x434bff[_0xbdc76f(0xbb)]))===null||_0x2a0bf1===void 0x0?void 0x0:_0x2a0bf1[_0xbdc76f(0x108)];}),_0x4529ca[_0x166b02(0x101)][_0x166b02(0xea)]!==_0x166b02(0x102)&&_0x2c2524[_0x166b02(0xcd)](_0xedc3f1=>_0xedc3f1[_0x166b02(0xb7)]=(0x0,utils_1['maskEmail'])(_0xedc3f1['email'])),_0x4529ca[_0x166b02(0x101)][_0x166b02(0xea)]!==_0x166b02(0x102)&&_0x2c2524[_0x166b02(0xcd)](_0xcb2aeb=>_0xcb2aeb[_0x166b02(0xed)]=(0x0,utils_1[_0x166b02(0xdb)])(_0xcb2aeb[_0x166b02(0xed)])),{'rows':_0x2c2524,'count':_0xeea42e};}async['delCrami'](_0xa13efc){const _0x35b466=_0x3f6494,_0x1d0b9f=await this['cramiEntity'][_0x35b466(0x10c)]({'where':{'id':_0xa13efc}});if(!_0x1d0b9f)throw new common_1[(_0x35b466(0xe1))](_0x35b466(0xff),common_1[_0x35b466(0xc9)][_0x35b466(0xd1)]);if(_0x1d0b9f[_0x35b466(0xba)]===0x1)throw new common_1[(_0x35b466(0xe1))]('当前卡密已被使用、已使用的卡密禁止删除！',common_1[_0x35b466(0xc9)][_0x35b466(0xd1)]);return await this[_0x35b466(0xfc)][_0x35b466(0xbf)]({'id':_0xa13efc});}async[_0x3f6494(0xc4)](_0x5ab30e){const _0x2961a5=_0x3f6494,{ids:_0x1548d0}=_0x5ab30e,_0x57f05b=await this['cramiEntity']['delete'](_0x1548d0);if(_0x57f05b['affected']>0x0)return _0x2961a5(0xe2);else throw new common_1['HttpException'](_0x2961a5(0xd6),common_1[_0x2961a5(0xc9)][_0x2961a5(0xd1)]);}};CramiService=__decorate([(0x0,common_1[_0x3f6494(0xdd)])(),__param(0x0,(0x0,typeorm_1[_0x3f6494(0xe6)])(crami_entity_1[_0x3f6494(0xdf)])),__param(0x1,(0x0,typeorm_1[_0x3f6494(0xe6)])(cramiPackage_entity_1[_0x3f6494(0xb5)])),__param(0x2,(0x0,typeorm_1['InjectRepository'])(user_entity_1[_0x3f6494(0xb4)])),__metadata(_0x3f6494(0xe7),[typeorm_2['Repository'],typeorm_2[_0x3f6494(0xfa)],typeorm_2[_0x3f6494(0xfa)],userBalance_service_1[_0x3f6494(0xc0)]])],CramiService),exports[_0x3f6494(0xbe)]=CramiService;function _0x6599(){const _0x13d4ba=['当前套餐不存在、请确认您选择的套餐是否存在！','../../common/utils','622759OcXlZk','error:\x20','map','Repository','MoreThan','cramiEntity','updatePackage','decorate','当前卡密不存在、请确认您要删除的卡密是否存在！','更新套餐成功！','user','super','count','packageName','createPackage','当前套餐下存在卡密、请先删除卡密后才可删除套餐！','6TbaRCz','name','queryAllCrami','11000277jgmLsv','./cramiPackage.entity','findOne','Not','776888SGjQRR','PACKAGE_GIFT','DESC','userEntity','queryOnePackage','UserEntity','CramiPackageEntity','套餐名称或套餐等级重复、请检查！','email','useCrami','./crami.entity','status','packageId','find','push','CramiService','delete','UserBalanceService','affected','LessThanOrEqual','saveRecordRechargeLog','batchDelCrami','RechargeType','generateCrami','object','length','HttpStatus','__param','defineProperty','../../common/constants/balance.constant','forEach','使用卡密成功','every','update','BAD_REQUEST','2340lAQnOv','6861Vhnkku','@nestjs/common','log','删除卡密失败、请重试！','delPackage','assign','metadata','function','maskCrami','更新套餐失败、请重试！','Injectable','../userBalance/userBalance.service','CramiEntity','当前卡密已被使用、请确认您输入的卡密是否正确！','HttpException','删除卡密成功！','__decorate','9797417sToKPc','当前卡密不存在、请确认您输入的卡密是否正确！','InjectRepository','design:paramtypes','__metadata','cramiPackageEntity','role','username','3896272asMaak','code','5822055lbFxFT','自定义卡密必须至少一项余额不为0️零！','findAndCount','userBalanceService','create','@nestjs/typeorm','useId'];_0x6599=function(){return _0x13d4ba;};return _0x6599();}