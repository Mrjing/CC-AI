'use strict';function _0x2973(){const _0x4856be=['error:\x20','default','非法操作、当前充值套餐暂不存在！','./balance.entity','refundMjBalance','firstRregisterSendModel3Count','createRandomUid','InjectRepository','decorate','firstRregisterSendModel4Count','goodsId','function','queryUserBalanceByIds','registerSendStatus','username','total','invitedGuestSendModel3Count','odel3','充值失败','chatLogEntity','AccountLogEntity','充值失败！','PAYMENT_REQUIRED','cramiPackageEntity','getRechargeLog','../../common/utils','useModel3Token','../chatgpt/whiteList.entity','whiteListEntity','days','isUpdatedToday','memberModel4Count','inviteGiveSendModel4Count','setConfig','visitorModel4Num','查询当前用户余额失败！','writeOldBalanceToNewTable','map','model4Count','消费余额失败！','invitedGuestSendModel4Count','format','updatedAt','Injectable','当前用户无需创建账户信息！','ChatLogEntity','balanceEntity','./fingerprint.entity','inheritVisitorData','sumModel4Count','RechargeType','find','upgradeBalance','__esModule','salesService','@nestjs/common','typeorm','invitedGuestSendDrawMjCount','accountLogEntity','340140ZguQhF','metadata','reduce','isInteger','SalesService','validateVisitorBalance','upgradeStatus','../chatLog/chatLog.entity','您已经升级过了、请勿重复操作！','addBalanceToOrder','createSalesRecords','3606687BHqGry','formatCreateOrUpdateDate','queryUserBalance','useModel4Count','firstRregisterSendDrawMjCount','globalConfigService','validateBalance','add','findAndCount','update','useDrawMjToken','then','packageId','count','ChatGroupEntity','avatar','model3Count','forEach','ConfigEntity','includes','./accountLog.entity','getOwnPropertyDescriptor','../../common/constants/balance.constant','addBalanceToNewUser','15MVxIjV','debug','BalanceEntity','object','salesUsersEntity','getFullYear','chatGroupEntity','470048jlwFeq','MidjourneyEntity','day','您的账户余额不足,如果想继续体验服务,请联系管理员\x20<VX:\x20','configEntity','model3','HttpException','104658VnyWIf','旧账户信息迁移失败','saveCommissionAmount','FingerprintLogEntity','expireDateCn','YYYY-MM-DD\x20HH:mm:ss','../sales/sales.service','registerSendModel4Count','formatDate','GlobalConfigService','createBaseUserBalance','HttpStatus','deductFromBalance','saveRecordRechargeLog','BalanceService','REG_GIFT','当前套餐不存在！','REFER_GIFT','@nestjs/typeorm','save','email','affected','充值的工单信息:','userBalanceEntity','length','WhiteListEntity','fingerprintLogEntity','memberDrawMjCount','userId','model4','getConfigs','defineProperty','rechargeType','mjDraw','log','midjourneyEntity','SCAN_PAY','sumModel3Count','Logger','weight','../globalConfig/globalConfig.service','CramiPackageEntity','configKey','user','addBalanceToUser','../user/user.entity','UserBalanceService','phone','DESC','inviteSendStatus','toFixed','visitorModel3Num','useModel3Count','./userBalance.entity','今日当前类型免费额度已经使用完毕、建议您注册账户体验更加完整的服务内容！','configVal','BAD_REQUEST','firstRegisterSendStatus','userEntity','MjCount','UserEntity','registerSendModel3Count','useCount','getAccountLog','inviteGiveSendModel3Count','registerSendDrawMjCount','>\x20或购买专属套餐\x20！','INVITE_GIFT','inviteGiveSendDrawMjCount','findOne','memberModel3Count','YYYY-MM-DD','1379128mGqITw','缺失当前用户账户记录！','1982432FzKzKf','headers','status','../chatGroup/chatGroup.entity','drawMjCount','Repository','SalesUsersEntity','expirationTime','firstRegisterSendRank','注册赠送失败,请联系管理员！','66643EgPqCt','sumDrawMjCount','useModel4Token'];_0x2973=function(){return _0x4856be;};return _0x2973();}const _0x1a10f9=_0x494b;(function(_0x42b93e,_0x21f803){const _0x4a62f6=_0x494b,_0x2ad32e=_0x42b93e();while(!![]){try{const _0x3b0644=parseInt(_0x4a62f6(0xe6))/0x1+parseInt(_0x4a62f6(0x8b))/0x2+-parseInt(_0x4a62f6(0x124))/0x3+parseInt(_0x4a62f6(0xdc))/0x4+-parseInt(_0x4a62f6(0x84))/0x5*(parseInt(_0x4a62f6(0x92))/0x6)+-parseInt(_0x4a62f6(0x12f))/0x7+parseInt(_0x4a62f6(0xda))/0x8;if(_0x3b0644===_0x21f803)break;else _0x2ad32e['push'](_0x2ad32e['shift']());}catch(_0x14f850){_0x2ad32e['push'](_0x2ad32e['shift']());}}}(_0x2973,0x467cc));function _0x494b(_0x3bee55,_0x507874){const _0x2973a6=_0x2973();return _0x494b=function(_0x494bc6,_0x35660a){_0x494bc6=_0x494bc6-0x82;let _0x11d57d=_0x2973a6[_0x494bc6];return _0x11d57d;},_0x494b(_0x3bee55,_0x507874);}var __decorate=this&&this['__decorate']||function(_0x1ee151,_0x1062f7,_0x19a882,_0x38f683){const _0xb7e838=_0x494b;var _0x72a15=arguments['length'],_0x19ee56=_0x72a15<0x3?_0x1062f7:_0x38f683===null?_0x38f683=Object[_0xb7e838(0x144)](_0x1062f7,_0x19a882):_0x38f683,_0x4bbd42;if(typeof Reflect===_0xb7e838(0x87)&&typeof Reflect[_0xb7e838(0xf1)]===_0xb7e838(0xf4))_0x19ee56=Reflect[_0xb7e838(0xf1)](_0x1ee151,_0x1062f7,_0x19a882,_0x38f683);else{for(var _0x24c6d1=_0x1ee151[_0xb7e838(0xaa)]-0x1;_0x24c6d1>=0x0;_0x24c6d1--)if(_0x4bbd42=_0x1ee151[_0x24c6d1])_0x19ee56=(_0x72a15<0x3?_0x4bbd42(_0x19ee56):_0x72a15>0x3?_0x4bbd42(_0x1062f7,_0x19a882,_0x19ee56):_0x4bbd42(_0x1062f7,_0x19a882))||_0x19ee56;}return _0x72a15>0x3&&_0x19ee56&&Object[_0xb7e838(0xb1)](_0x1062f7,_0x19a882,_0x19ee56),_0x19ee56;},__metadata=this&&this['__metadata']||function(_0x2d0336,_0x3e1f31){const _0x3271e1=_0x494b;if(typeof Reflect===_0x3271e1(0x87)&&typeof Reflect[_0x3271e1(0x125)]===_0x3271e1(0xf4))return Reflect['metadata'](_0x2d0336,_0x3e1f31);},__param=this&&this['__param']||function(_0x57fe42,_0x3cef59){return function(_0x28b94d,_0x4f6c53){_0x3cef59(_0x28b94d,_0x4f6c53,_0x57fe42);};};Object[_0x1a10f9(0xb1)](exports,_0x1a10f9(0x11e),{'value':!![]}),exports['UserBalanceService']=void 0x0;const globalConfig_service_1=require(_0x1a10f9(0xba)),typeorm_1=require(_0x1a10f9(0xa4)),balance_entity_1=require(_0x1a10f9(0xec)),common_1=require(_0x1a10f9(0x120)),typeorm_2=require(_0x1a10f9(0x121)),balance_constant_1=require(_0x1a10f9(0x82)),accountLog_entity_1=require(_0x1a10f9(0x143)),utils_1=require(_0x1a10f9(0x102)),config_entity_1=require('../globalConfig/config.entity'),cramiPackage_entity_1=require('../crami/cramiPackage.entity'),userBalance_entity_1=require(_0x1a10f9(0xc7)),date_1=require('../../common/utils/date'),user_entity_1=require(_0x1a10f9(0xbf)),salesUsers_entity_1=require('../sales/salesUsers.entity'),sales_service_1=require(_0x1a10f9(0x98)),whiteList_entity_1=require(_0x1a10f9(0x104)),fingerprint_entity_1=require(_0x1a10f9(0x118)),chatLog_entity_1=require(_0x1a10f9(0x12b)),chatGroup_entity_1=require(_0x1a10f9(0xdf)),midjourney_entity_1=require('../midjourney/midjourney.entity');let UserBalanceService=class UserBalanceService{constructor(_0x50429d,_0x46625a,_0x421a67,_0x43626d,_0x3b34e3,_0x5defc4,_0x23a54a,_0x3ec5c8,_0x235891,_0x2752c9,_0x1ab060,_0x2ec4d8,_0x57a8ef,_0x5385e4){const _0x5ccaea=_0x1a10f9;this['balanceEntity']=_0x50429d,this[_0x5ccaea(0xa9)]=_0x46625a,this[_0x5ccaea(0x123)]=_0x421a67,this['cramiPackageEntity']=_0x43626d,this['configEntity']=_0x3b34e3,this[_0x5ccaea(0xcc)]=_0x5defc4,this[_0x5ccaea(0x88)]=_0x23a54a,this[_0x5ccaea(0x105)]=_0x3ec5c8,this['fingerprintLogEntity']=_0x235891,this[_0x5ccaea(0x8a)]=_0x2752c9,this[_0x5ccaea(0xfc)]=_0x1ab060,this[_0x5ccaea(0xb5)]=_0x2ec4d8,this[_0x5ccaea(0x11f)]=_0x57a8ef,this[_0x5ccaea(0x134)]=_0x5385e4;}async[_0x1a10f9(0x83)](_0x33ca17,_0x2c83d4){const _0x240dc6=_0x1a10f9;try{const _0x4b8e44=await this[_0x240dc6(0x8f)][_0x240dc6(0x11c)]({'where':{'configKey':(0x0,typeorm_2['In'])(['registerSendStatus','registerSendModel3Count',_0x240dc6(0x99),_0x240dc6(0xd3),_0x240dc6(0xcb),_0x240dc6(0xe4),_0x240dc6(0xee),'firstRregisterSendModel4Count',_0x240dc6(0x133),_0x240dc6(0xc3),_0x240dc6(0xd2),_0x240dc6(0x109),_0x240dc6(0xd6),_0x240dc6(0xf9),_0x240dc6(0x122),_0x240dc6(0x111)])}}),_0x3bd25f=_0x4b8e44[_0x240dc6(0x126)]((_0x376418,_0x42c472)=>{const _0x24af00=_0x240dc6,_0x115a31=Number(_0x42c472[_0x24af00(0xc9)]),_0xebfacf=Number[_0x24af00(0x127)](_0x115a31)&&_0x115a31>0x0?_0x115a31:0x0;return _0x376418[_0x42c472[_0x24af00(0xbc)]]=_0xebfacf,_0x376418;},{});let _0x13e889=0x0,_0x451160=0x0,_0x45201a=0x0;_0x3bd25f[_0x240dc6(0xf6)]===0x1&&(_0x13e889=_0x13e889+_0x3bd25f[_0x240dc6(0xcf)],_0x451160=_0x451160+_0x3bd25f[_0x240dc6(0x99)],_0x45201a=_0x45201a+_0x3bd25f[_0x240dc6(0xd3)]),_0x3bd25f[_0x240dc6(0xf6)]===0x1&&_0x3bd25f[_0x240dc6(0xcb)]===0x1&&_0x33ca17<=_0x3bd25f[_0x240dc6(0xe4)]&&(_0x13e889=_0x13e889+_0x3bd25f[_0x240dc6(0xee)],_0x451160=_0x451160+_0x3bd25f[_0x240dc6(0xf2)],_0x45201a=_0x45201a+_0x3bd25f[_0x240dc6(0x133)]),await this[_0x240dc6(0x9f)]({'userId':_0x33ca17,'rechargeType':balance_constant_1[_0x240dc6(0x11b)][_0x240dc6(0xa1)],'model3Count':_0x13e889,'drawMjCount':_0x45201a,'model4Count':_0x451160}),_0x2c83d4&&(Number(_0x3bd25f[_0x240dc6(0xc3)])===0x1&&(_0x13e889=_0x13e889+Number(_0x3bd25f[_0x240dc6(0xf9)]),_0x451160=_0x451160+Number(_0x3bd25f['invitedGuestSendModel4Count']),_0x45201a=_0x45201a+Number(_0x3bd25f['invitedGuestSendDrawMjCount']),await this['saveRecordRechargeLog']({'userId':_0x33ca17,'rechargeType':balance_constant_1[_0x240dc6(0x11b)][_0x240dc6(0xd5)],'model3Count':_0x3bd25f[_0x240dc6(0xf9)],'model4Count':_0x3bd25f[_0x240dc6(0x111)],'drawMjCount':_0x3bd25f[_0x240dc6(0x122)]}),await this[_0x240dc6(0xbe)](_0x2c83d4,{'model3Count':_0x3bd25f[_0x240dc6(0xd2)],'model4Count':_0x3bd25f[_0x240dc6(0x109)],'drawMjCount':_0x3bd25f[_0x240dc6(0xd6)]}),await this['saveRecordRechargeLog']({'userId':_0x2c83d4,'rechargeType':balance_constant_1[_0x240dc6(0x11b)][_0x240dc6(0xa3)],'model3Count':_0x3bd25f[_0x240dc6(0xd2)],'model4Count':_0x3bd25f[_0x240dc6(0x109)],'drawMjCount':_0x3bd25f[_0x240dc6(0xd6)]}))),await this[_0x240dc6(0xa9)][_0x240dc6(0xa5)]({'userId':_0x33ca17,'model3Count':_0x13e889,'model4Count':_0x451160,'drawMjCount':_0x45201a,'useTokens':0x0});}catch(_0x3bbede){console[_0x240dc6(0xb4)](_0x240dc6(0xe9),_0x3bbede);throw new common_1[(_0x240dc6(0x91))](_0x240dc6(0xe5),common_1[_0x240dc6(0x9d)][_0x240dc6(0xca)]);}}async[_0x1a10f9(0x135)](_0x4112ee,_0x1cbbc0,_0x1e636c){const _0x31349d=_0x1a10f9,{id:_0x4c1f07,role:_0x23d6a9}=_0x4112ee['user'];let _0x4f014a=await this['userBalanceEntity'][_0x31349d(0xd7)]({'where':{'userId':_0x4c1f07}});!_0x4f014a&&(_0x4f014a=await this['createBaseUserBalance'](_0x4c1f07));if(_0x23d6a9==='visitor')return this[_0x31349d(0x129)](_0x4112ee,_0x1cbbc0,_0x1e636c);const _0x4f16c8=await this[_0x31349d(0x8f)][_0x31349d(0xd7)]({'where':{'configKey':'vxNumber'}}),_0x26235d=_0x4f16c8?_0x4f16c8['configVal']:'---',_0x498674=_0x1cbbc0===_0x31349d(0x90)?_0x31349d(0xd8):_0x1cbbc0===_0x31349d(0xaf)?_0x31349d(0x108):_0x1cbbc0===_0x31349d(0xb3)?_0x31349d(0xad):null,_0x5d6e9e=_0x1cbbc0===_0x31349d(0x90)?_0x31349d(0x13f):_0x1cbbc0==='model4'?_0x31349d(0x10f):_0x1cbbc0===_0x31349d(0xb3)?_0x31349d(0xe0):null;if(_0x4f014a[_0x31349d(0x13b)]&&_0x4f014a[_0x498674]<_0x1e636c){if(_0x4f014a[_0x5d6e9e]<_0x1e636c)throw new common_1[(_0x31349d(0x91))](_0x31349d(0x8e)+_0x26235d+_0x31349d(0xd4),common_1['HttpStatus']['PAYMENT_REQUIRED']);}if(!_0x4f014a[_0x31349d(0x13b)]&&_0x4f014a[_0x5d6e9e]<_0x1e636c)throw new common_1[(_0x31349d(0x91))]('您的账户余额不足,如果想继续体验服务,请联系管理员\x20<VX:\x20'+_0x26235d+'>\x20或购买专属套餐\x20！',common_1[_0x31349d(0x9d)][_0x31349d(0xff)]);return _0x4f014a;}async[_0x1a10f9(0x129)](_0x22f830,_0x4055fd,_0x1d9389){const _0x2638fb=_0x1a10f9,{id:_0x5bf522}=_0x22f830[_0x2638fb(0xbd)],_0x4f97b2=_0x4055fd===_0x2638fb(0x90)?'model3Count':_0x4055fd===_0x2638fb(0xaf)?'model4Count':_0x4055fd===_0x2638fb(0xb3)?_0x2638fb(0xe0):null,_0x3208f4=new Date(),_0x17f316=await this[_0x2638fb(0xac)]['findOne']({'where':{'fingerprint':_0x5bf522}}),{visitorModel3Num:_0x87bf6d,visitorModel4Num:_0x3be3c2,visitorMJNum:_0x3dcf91}=await this[_0x2638fb(0x134)][_0x2638fb(0xb0)]([_0x2638fb(0xc5),_0x2638fb(0x10b),'visitorMJNum']),_0x3d1227={'model3Count':_0x87bf6d?Number(_0x87bf6d):0x0,'model4Count':_0x3be3c2?Number(_0x3be3c2):0x0,'drawMjCount':_0x3dcf91?Number(_0x3dcf91):0x0};if(!_0x17f316){const _0x2a5e15={'fingerprint':_0x5bf522,'model3Count':0x0,'model4Count':0x0,'drawMjCount':0x0};_0x2a5e15[_0x4f97b2]=_0x2a5e15[_0x4f97b2]+_0x1d9389;if(_0x2a5e15[_0x4f97b2]>_0x3d1227[_0x4f97b2])throw new common_1['HttpException'](_0x2638fb(0xc8),common_1['HttpStatus']['PAYMENT_REQUIRED']);else return await this['fingerprintLogEntity'][_0x2638fb(0xa5)](_0x2a5e15),!![];}else{const {model3Count:_0x288dc5,model4Count:_0x3eb071,drawMjCount:_0x38f3c6}=_0x17f316;let _0x285f4b={'model3Count':_0x288dc5,'model4Count':_0x3eb071,'drawMjCount':_0x38f3c6};const _0x2c80f0=Number(new Date(_0x17f316[_0x2638fb(0x113)])),_0x2734ee=this[_0x2638fb(0x107)](_0x2c80f0);_0x2734ee?_0x285f4b[_0x4f97b2]=_0x285f4b[_0x4f97b2]+_0x1d9389:(_0x285f4b={'model3Count':0x0,'model4Count':0x0,'drawMjCount':0x0},_0x285f4b[_0x4f97b2]=_0x285f4b[_0x4f97b2]+_0x1d9389);if(_0x285f4b[_0x4f97b2]>_0x3d1227[_0x4f97b2])throw new common_1[(_0x2638fb(0x91))]('今日当前类型免费额度已经使用完毕、建议您注册账户体验更加完整的服务内容！',common_1[_0x2638fb(0x9d)]['PAYMENT_REQUIRED']);else return await this[_0x2638fb(0xac)][_0x2638fb(0x138)]({'fingerprint':_0x5bf522},_0x285f4b),!![];}}[_0x1a10f9(0x107)](_0x3c767e){const _0xce8fcc=_0x1a10f9,_0x1fdfbc=new Date(),_0x7dec9a=new Date(_0x1fdfbc[_0xce8fcc(0x89)](),_0x1fdfbc['getMonth'](),_0x1fdfbc['getDate']());return _0x3c767e>=_0x7dec9a;}async[_0x1a10f9(0x9e)](_0xf40efb,_0x43d7c9,_0x3f242e,_0x5db367=0x0){const _0x5c3fa9=_0x1a10f9,_0x1a1804=await this[_0x5c3fa9(0xa9)]['findOne']({'where':{'userId':_0xf40efb}});if(!_0x1a1804)throw new common_1[(_0x5c3fa9(0x91))](_0x5c3fa9(0xdb),common_1['HttpStatus'][_0x5c3fa9(0xca)]);const _0x90e6db=_0x43d7c9===_0x5c3fa9(0x90)?_0x5c3fa9(0xd8):_0x43d7c9===_0x5c3fa9(0xaf)?'memberModel4Count':_0x43d7c9==='mjDraw'?_0x5c3fa9(0xad):null,_0x5b86b9=_0x43d7c9===_0x5c3fa9(0x90)?_0x5c3fa9(0x13f):_0x43d7c9===_0x5c3fa9(0xaf)?_0x5c3fa9(0x10f):_0x43d7c9===_0x5c3fa9(0xb3)?'drawMjCount':null,_0x6ae673=_0x1a1804[_0x5c3fa9(0x13b)]&&_0x1a1804[_0x90e6db]<_0x3f242e?_0x5b86b9:_0x1a1804[_0x5c3fa9(0x13b)]?_0x90e6db:_0x5b86b9;let _0x2bcf23=null;_0x6ae673[_0x5c3fa9(0x142)](_0x5c3fa9(0xfa))&&(_0x2bcf23=_0x5c3fa9(0x103));_0x6ae673[_0x5c3fa9(0x142)]('odel4')&&(_0x2bcf23=_0x5c3fa9(0xe8));_0x6ae673['includes'](_0x5c3fa9(0xcd))&&(_0x2bcf23=_0x5c3fa9(0x139));const _0x414d53={[_0x6ae673]:_0x1a1804[_0x6ae673]-_0x3f242e<0x0?0x0:_0x1a1804[_0x6ae673]-_0x3f242e,[_0x2bcf23]:_0x1a1804[_0x2bcf23]+_0x5db367};_0x2bcf23===_0x5c3fa9(0x103)&&(_0x414d53[_0x5c3fa9(0xc6)]=_0x1a1804['useModel3Count']+_0x3f242e),_0x2bcf23===_0x5c3fa9(0xe8)&&(_0x414d53['useModel4Count']=_0x1a1804[_0x5c3fa9(0x132)]+_0x3f242e);const _0x56f413=await this[_0x5c3fa9(0xa9)][_0x5c3fa9(0x138)]({'userId':_0xf40efb},_0x414d53);if(_0x56f413[_0x5c3fa9(0xa7)]===0x0)throw new common_1[(_0x5c3fa9(0x91))](_0x5c3fa9(0x110),common_1[_0x5c3fa9(0x9d)][_0x5c3fa9(0xca)]);}async[_0x1a10f9(0x131)](_0xd186fb){const _0x4fd452=_0x1a10f9;try{const _0x203966=await this[_0x4fd452(0xa9)][_0x4fd452(0xd7)]({'where':{'userId':_0xd186fb},'select':[_0x4fd452(0x13b),_0x4fd452(0x13f),_0x4fd452(0x10f),'drawMjCount',_0x4fd452(0xd8),_0x4fd452(0x108),_0x4fd452(0xad),_0x4fd452(0xc6),_0x4fd452(0x132),'useModel3Token','useModel4Token',_0x4fd452(0x139),'expirationTime']});if(!_0x203966){const _0x43872f=await this[_0x4fd452(0x9c)](_0xd186fb);if(_0x43872f)return await this[_0x4fd452(0x131)](_0xd186fb);else throw new common_1[(_0x4fd452(0x91))](_0x4fd452(0x10c),common_1[_0x4fd452(0x9d)][_0x4fd452(0xca)]);}return _0x203966[_0x4fd452(0xb7)]=_0x203966['packageId']?_0x203966[_0x4fd452(0x13f)]+_0x203966[_0x4fd452(0xd8)]:_0x203966[_0x4fd452(0x13f)],_0x203966[_0x4fd452(0x11a)]=_0x203966[_0x4fd452(0x13b)]?_0x203966[_0x4fd452(0x10f)]+_0x203966[_0x4fd452(0x108)]:_0x203966[_0x4fd452(0x10f)],_0x203966[_0x4fd452(0xe7)]=_0x203966[_0x4fd452(0x13b)]?_0x203966[_0x4fd452(0xe0)]+_0x203966[_0x4fd452(0xad)]:_0x203966[_0x4fd452(0xe0)],_0x203966[_0x4fd452(0xe3)]=_0x203966[_0x4fd452(0xe3)]?(0x0,date_1[_0x4fd452(0x9a)])(_0x203966[_0x4fd452(0xe3)],_0x4fd452(0xd9)):null,_0x203966;}catch(_0x2ea38c){console[_0x4fd452(0xb4)](_0x4fd452(0xe9),_0x2ea38c);}}async[_0x1a10f9(0x9f)](_0x4546c5){const _0x5a30fe=_0x1a10f9,{userId:_0x51eac4,rechargeType:_0x39ed2e,model3Count:_0x408bc3,model4Count:_0x2c708d,drawMjCount:_0x220feb,days:days=-0x1,pkgName:pkgName='',extent:extent=''}=_0x4546c5;if(!_0x51eac4)throw new common_1[(_0x5a30fe(0x91))]('当前用户不存在,记录充值日志异常',common_1[_0x5a30fe(0x9d)][_0x5a30fe(0xca)]);const _0x505e6a=(0x0,utils_1[_0x5a30fe(0xef)])();return await this[_0x5a30fe(0x123)][_0x5a30fe(0xa5)]({'userId':_0x51eac4,'rechargeType':_0x39ed2e,'model3Count':_0x408bc3,'model4Count':_0x2c708d,'drawMjCount':_0x220feb,'days':days,'extent':extent,'uid':_0x505e6a,'pkgName':pkgName});}async[_0x1a10f9(0x9c)](_0x3a8939,_0x48bfbc={}){const _0x418e64=_0x1a10f9,{model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0}=_0x48bfbc,_0x1ac15d=await this['userBalanceEntity']['findOne']({'where':{'userId':_0x3a8939}});if(_0x1ac15d)throw new common_1[(_0x418e64(0x91))](_0x418e64(0x115),common_1[_0x418e64(0x9d)][_0x418e64(0xca)]);return await this['userBalanceEntity'][_0x418e64(0xa5)]({'userId':_0x3a8939,'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount});}async['addBalanceToUser'](_0x4b39cf,_0x3ecff5,_0x363b85=-0x1){const _0x4a8808=_0x1a10f9;try{const _0x230f31=await this[_0x4a8808(0xa9)][_0x4a8808(0xd7)]({'where':{'userId':_0x4b39cf}})||await this[_0x4a8808(0x9c)](_0x4b39cf);if(!_0x230f31)throw new common_1[(_0x4a8808(0x91))]('查询用户账户信息失败！',common_1[_0x4a8808(0x9d)][_0x4a8808(0xca)]);const {model3Count:_0x229b09,model4Count:_0x4335ea,drawMjCount:_0x4e7039,memberModel3Count:_0x368dc7,memberModel4Count:_0x56d5e7,memberDrawMjCount:_0x5d6f39}=_0x230f31;let _0x59415c={};if(_0x363b85>0x0){const {packageId:_0x568943}=_0x3ecff5;if(!_0x568943)throw new common_1[(_0x4a8808(0x91))]('缺失当前套餐ID、充值失败！',common_1[_0x4a8808(0x9d)][_0x4a8808(0xca)]);const _0xc7a5ec=await this['cramiPackageEntity'][_0x4a8808(0xd7)]({'where':{'id':_0x568943}});if(!_0xc7a5ec)throw new common_1[(_0x4a8808(0x91))](_0x4a8808(0xa2),common_1[_0x4a8808(0x9d)][_0x4a8808(0xca)]);const {weight:_0x44252f}=_0xc7a5ec;if(!_0x230f31[_0x4a8808(0x13b)])_0x59415c={'memberModel3Count':_0x229b09+_0x3ecff5[_0x4a8808(0x13f)],'memberModel4Count':_0x4335ea+_0x3ecff5[_0x4a8808(0x10f)],'memberDrawMjCount':_0x4e7039+_0x3ecff5[_0x4a8808(0xe0)],'expirationTime':(0x0,date_1['default'])()['add'](_0x363b85>0x0?_0x363b85:0x0,_0x4a8808(0x8d))['format'](_0x4a8808(0x97)),'packageId':_0x568943};else{const _0xb988fb=await this[_0x4a8808(0x100)][_0x4a8808(0xd7)]({'where':{'id':_0x230f31['packageId']}});_0x44252f>=_0xb988fb['weight']&&(_0x59415c={'memberModel3Count':_0x368dc7+_0x3ecff5[_0x4a8808(0x13f)],'memberModel4Count':_0x56d5e7+_0x3ecff5[_0x4a8808(0x10f)],'memberDrawMjCount':_0x5d6f39+_0x3ecff5[_0x4a8808(0xe0)],'expirationTime':(0x0,date_1[_0x4a8808(0xea)])(_0x230f31[_0x4a8808(0xe3)])[_0x4a8808(0x136)](_0x363b85>0x0?_0x363b85:0x0,_0x4a8808(0x8d))[_0x4a8808(0x112)](_0x4a8808(0x97)),'packageId':_0x568943}),_0x44252f<_0xb988fb[_0x4a8808(0xb9)]&&(_0x59415c={'memberModel3Count':_0x368dc7+_0x3ecff5['model3Count'],'memberModel4Count':_0x56d5e7+_0x3ecff5[_0x4a8808(0x10f)],'memberDrawMjCount':_0x5d6f39+_0x3ecff5['drawMjCount']});}}_0x363b85<=0x0&&(_0x59415c={'model3Count':_0x229b09+_0x3ecff5[_0x4a8808(0x13f)],'model4Count':_0x4335ea+_0x3ecff5[_0x4a8808(0x10f)],'drawMjCount':_0x4e7039+_0x3ecff5[_0x4a8808(0xe0)]});const _0x3193c1=await this[_0x4a8808(0xa9)][_0x4a8808(0x138)]({'userId':_0x4b39cf},_0x59415c);if(_0x3193c1[_0x4a8808(0xa7)]===0x0)throw new common_1[(_0x4a8808(0x91))](_0x4b39cf+_0x4a8808(0xfb),common_1[_0x4a8808(0x9d)][_0x4a8808(0xca)]);}catch(_0x4a04d7){console[_0x4a8808(0xb4)](_0x4a8808(0xe9),_0x4a04d7);throw new common_1['HttpException']('用户充值失败！',common_1[_0x4a8808(0x9d)][_0x4a8808(0xca)]);}}async[_0x1a10f9(0x12d)](_0xe4cba5){const _0x1a1721=_0x1a10f9;console[_0x1a1721(0xb4)](_0x1a1721(0xa8),_0xe4cba5);try{const {userId:_0x7b964f,goodsId:_0x25638c}=_0xe4cba5,_0x55bda1=await this[_0x1a1721(0x100)][_0x1a1721(0xd7)]({'where':{'id':_0xe4cba5['goodsId'],'status':0x1}});if(!_0x55bda1)throw new common_1['HttpException'](_0x1a1721(0xeb),common_1[_0x1a1721(0x9d)][_0x1a1721(0xca)]);const {model3Count:_0x28931f,model4Count:_0x5014f8,drawMjCount:_0x409b06,days:_0x84f155,name:_0x28daec}=_0x55bda1,_0x455d8c={'model3Count':_0x28931f,'model4Count':_0x5014f8,'drawMjCount':_0x409b06,'days':_0x84f155,'packageId':_0xe4cba5[_0x1a1721(0xf3)]};await this[_0x1a1721(0xbe)](_0x7b964f,_0x455d8c,_0x84f155),await this[_0x1a1721(0x9f)]({'userId':_0x7b964f,'rechargeType':balance_constant_1[_0x1a1721(0x11b)][_0x1a1721(0xb6)],'model3Count':_0x28931f,'model4Count':_0x5014f8,'drawMjCount':_0x409b06,'pkgName':_0x28daec,'days':_0x84f155});const _0x350d64=await this[_0x1a1721(0xcc)][_0x1a1721(0xd7)]({'where':{'id':_0x7b964f}}),{invitedBy:_0x2234b6}=_0x350d64;if(_0x2234b6){const _0x2f4d5c=await this[_0x1a1721(0xcc)]['findOne']({'where':{'inviteCode':_0x2234b6}}),_0x7d5d80=await this[_0x1a1721(0x88)][_0x1a1721(0xd7)]({'where':{'userId':_0x2f4d5c['id']}});if(!_0x2f4d5c)return;const {id:_0x1cacff}=_0x2f4d5c,{performanceRatio:_0x5021cd}=_0x7d5d80,_0x5a9ea7={'inviterUserId':_0x1cacff,'inviteeUserId':_0x7b964f,'orderId':_0xe4cba5['id'],'orderPrice':_0xe4cba5[_0x1a1721(0xf8)],'commissionPercentage':_0x5021cd,'commissionAmount':(_0xe4cba5[_0x1a1721(0xf8)]*_0x5021cd/0x64)[_0x1a1721(0xc4)](0x2)};await this['salesService'][_0x1a1721(0x12e)](_0x5a9ea7),await this[_0x1a1721(0x11f)][_0x1a1721(0x94)](_0x1cacff,_0x5a9ea7['commissionAmount']);}}catch(_0x2dc31b){console[_0x1a1721(0xb4)](_0x1a1721(0xe9),_0x2dc31b);throw new common_1[(_0x1a1721(0x91))](_0x1a1721(0xfe),common_1[_0x1a1721(0x9d)]['BAD_REQUEST']);}}async[_0x1a10f9(0x101)](_0x5a4feb,_0x4fae59){const _0x8a6beb=_0x1a10f9,{page:page=0x1,size:size=0x14}=_0x4fae59,{id:_0x9ca2ee}=_0x5a4feb[_0x8a6beb(0xbd)],[_0x587bbb,_0x2a3ee3]=await this[_0x8a6beb(0x123)][_0x8a6beb(0x137)]({'where':{'userId':_0x9ca2ee},'order':{'id':'DESC'},'skip':(page-0x1)*size,'take':size});return _0x587bbb[_0x8a6beb(0x140)](_0x294760=>{const _0x5bbe66=_0x8a6beb;_0x294760[_0x5bbe66(0x96)]=_0x294760[_0x5bbe66(0x106)]>0x0?_0x294760[_0x5bbe66(0x106)]+'天':'永久';}),{'rows':(0x0,date_1[_0x8a6beb(0x130)])(_0x587bbb),'count':_0x2a3ee3};}async[_0x1a10f9(0xd1)](_0x3dd787,_0x4e50e0){const _0x51c382=_0x1a10f9;try{const {page:page=0x1,size:size=0xa,userId:_0x2e4cda,rechargeType:_0x3c1fc9,packageId:_0xec2797}=_0x4e50e0,{role:_0x109fd0}=_0x3dd787[_0x51c382(0xbd)],_0x152a0a={};_0x3c1fc9&&(_0x152a0a[_0x51c382(0xb2)]=_0x3c1fc9),_0x152a0a[_0x51c382(0xae)]=_0x2e4cda||(0x0,typeorm_2['LessThan'])(0x186a0),_0xec2797&&(_0x152a0a[_0x51c382(0x13b)]={'$like':'%'+_0xec2797+'%'});const [_0x4211b4,_0x1ca806]=await this[_0x51c382(0x123)][_0x51c382(0x137)]({'where':_0x152a0a,'order':{'id':_0x51c382(0xc2)},'skip':(page-0x1)*size,'take':size}),_0x5e058e=_0x4211b4[_0x51c382(0x10e)](_0x1b9e17=>_0x1b9e17[_0x51c382(0xae)]),_0x58f12b=await this['userEntity'][_0x51c382(0x11c)]({'where':{'id':(0x0,typeorm_2['In'])(_0x5e058e)}});return _0x4211b4['forEach'](_0x370145=>{const _0x103b03=_0x51c382,_0x461c0b=_0x58f12b[_0x103b03(0x11c)](_0x4b3c7a=>_0x4b3c7a['id']===_0x370145[_0x103b03(0xae)]);_0x370145['username']=_0x461c0b===null||_0x461c0b===void 0x0?void 0x0:_0x461c0b[_0x103b03(0xf7)],_0x370145['email']=_0x461c0b===null||_0x461c0b===void 0x0?void 0x0:_0x461c0b[_0x103b03(0xa6)],_0x370145['phone']=_0x461c0b===null||_0x461c0b===void 0x0?void 0x0:_0x461c0b[_0x103b03(0xc1)],_0x370145[_0x103b03(0xde)]=_0x461c0b===null||_0x461c0b===void 0x0?void 0x0:_0x461c0b[_0x103b03(0xde)],_0x370145[_0x103b03(0x13e)]=_0x461c0b===null||_0x461c0b===void 0x0?void 0x0:_0x461c0b[_0x103b03(0x13e)];}),_0x109fd0!=='super'&&_0x4211b4[_0x51c382(0x140)](_0x204a4b=>{const _0x342b36=_0x51c382;_0x204a4b['email']=_0x204a4b[_0x342b36(0xa6)]?(0x0,utils_1['hideString'])(_0x204a4b[_0x342b36(0xa6)]):'',_0x204a4b[_0x342b36(0xc1)]=_0x204a4b[_0x342b36(0xc1)]?(0x0,utils_1['hideString'])(_0x204a4b[_0x342b36(0xc1)]):'';}),{'rows':_0x4211b4,'count':_0x1ca806};}catch(_0x18a02a){console['log']('error:\x20',_0x18a02a);throw new common_1[(_0x51c382(0x91))]('查询用户账户失败！',common_1[_0x51c382(0x9d)][_0x51c382(0xca)]);}}async[_0x1a10f9(0xf5)](_0x18c17d){const _0x47addb=_0x1a10f9;return await this[_0x47addb(0xa9)][_0x47addb(0x11c)]({'where':{'userId':(0x0,typeorm_2['In'])(_0x18c17d)}});}async[_0x1a10f9(0xed)](_0x1f322e,_0xae8d7c){const _0x1138be=_0x1a10f9;return await this[_0x1138be(0x9e)](_0x1f322e,_0x1138be(0xb3),-_0xae8d7c);}async[_0x1a10f9(0x11d)](){const _0x3fde3f=_0x1a10f9,_0x3df046=await this[_0x3fde3f(0xcc)][_0x3fde3f(0x11c)]();if(!_0x3df046[_0x3fde3f(0xaa)])return;const _0x4a6919=await this[_0x3fde3f(0x134)]['getConfigs']([_0x3fde3f(0x12a)]);if(!_0x4a6919)await this[_0x3fde3f(0x134)][_0x3fde3f(0x10a)]({'settings':[{'configKey':_0x3fde3f(0x12a),'configVal':'1'}]});else throw new common_1[(_0x3fde3f(0x91))](_0x3fde3f(0x12c),common_1[_0x3fde3f(0x9d)][_0x3fde3f(0xca)]);_0x3df046[_0x3fde3f(0x140)](_0x19f239=>{const _0x262864=_0x3fde3f,{id:_0x174771}=_0x19f239;this[_0x262864(0x117)][_0x262864(0xd7)]({'where':{'userId':_0x174771}})['then'](_0x4722a1=>{const _0x4ed150=_0x262864;if(!_0x4722a1)return;this[_0x4ed150(0x10d)](_0x174771,_0x4722a1);});});}async[_0x1a10f9(0x10d)](_0x1afeff,_0x4165cf){const _0x41954b=_0x1a10f9,{balance:balance=0x0,usesLeft:usesLeft=0x0,paintCount:paintCount=0x0,useTokens:useTokens=0x0,useChats:useChats=0x0,usePaints:usePaints=0x0}=_0x4165cf,_0x10fe02=await this[_0x41954b(0x105)]['findOne']({'where':{'userId':_0x1afeff}}),_0x8613b5={'userId':_0x1afeff,'model3Count':Number(usesLeft),'model4Count':(_0x10fe02===null||_0x10fe02===void 0x0?void 0x0:_0x10fe02[_0x41954b(0x13c)])||0x0,'drawMjCount':Number(balance),'useModel3Count':Number(useChats),'useModel4Count':(_0x10fe02===null||_0x10fe02===void 0x0?void 0x0:_0x10fe02[_0x41954b(0xd0)])||0x0,'useDrawMjCount':Number(usePaints),'useModel3Token':Number(useTokens),'useModel4Token':0x0,'useDrawMjToken':0x0},_0x21eba2=await this['userBalanceEntity'][_0x41954b(0xd7)]({'where':{'userId':_0x1afeff}});_0x21eba2?common_1[_0x41954b(0xb8)]['debug']('用户'+_0x1afeff+'账户信息已经存在、迁移无效',_0x41954b(0xa0)):this[_0x41954b(0xa9)][_0x41954b(0xa5)](_0x8613b5)[_0x41954b(0x13a)](_0x3919c5=>{const _0x469e5f=_0x41954b;common_1['Logger'][_0x469e5f(0x85)]('用户'+_0x1afeff+'旧账户信息迁移成功',_0x469e5f(0xa0));})['catch'](_0x379f3e=>{const _0x4d059c=_0x41954b;console['log'](_0x4d059c(0xe9),_0x379f3e),common_1[_0x4d059c(0xb8)]['debug']('用户'+_0x1afeff+_0x4d059c(0x93),_0x4d059c(0xa0));});}async[_0x1a10f9(0x119)](_0x3dcbaf){const _0x36844a=_0x1a10f9,{fingerprint:_0x413329}=_0x3dcbaf[_0x36844a(0xdd)],{id:_0x5598d8}=_0x3dcbaf[_0x36844a(0xbd)];return await this[_0x36844a(0xfc)][_0x36844a(0x138)]({'userId':Number(_0x413329)},{'userId':_0x5598d8}),await this[_0x36844a(0x8a)][_0x36844a(0x138)]({'userId':Number(_0x413329)},{'userId':_0x5598d8}),await this[_0x36844a(0xb5)][_0x36844a(0x138)]({'userId':Number(_0x413329)},{'userId':_0x5598d8}),0x1;}async['getVisitorCount'](_0x552213){const _0x36244b=_0x1a10f9,{fingerprint:_0x4b961a}=_0x552213[_0x36244b(0xdd)],_0x7be843=await this['chatLogEntity'][_0x36244b(0x13c)]({'where':{'userId':_0x4b961a}}),_0x1085ad=await this[_0x36244b(0x8a)]['count']({'where':{'userId':_0x4b961a}}),_0x4f9fbe=await this['midjourneyEntity'][_0x36244b(0x13c)]({'where':{'userId':_0x4b961a}});return _0x7be843||_0x1085ad||_0x4f9fbe||0x0;}};UserBalanceService=__decorate([(0x0,common_1[_0x1a10f9(0x114)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(balance_entity_1[_0x1a10f9(0x86)])),__param(0x1,(0x0,typeorm_1[_0x1a10f9(0xf0)])(userBalance_entity_1['UserBalanceEntity'])),__param(0x2,(0x0,typeorm_1[_0x1a10f9(0xf0)])(accountLog_entity_1[_0x1a10f9(0xfd)])),__param(0x3,(0x0,typeorm_1['InjectRepository'])(cramiPackage_entity_1[_0x1a10f9(0xbb)])),__param(0x4,(0x0,typeorm_1[_0x1a10f9(0xf0)])(config_entity_1[_0x1a10f9(0x141)])),__param(0x5,(0x0,typeorm_1[_0x1a10f9(0xf0)])(user_entity_1[_0x1a10f9(0xce)])),__param(0x6,(0x0,typeorm_1[_0x1a10f9(0xf0)])(salesUsers_entity_1[_0x1a10f9(0xe2)])),__param(0x7,(0x0,typeorm_1[_0x1a10f9(0xf0)])(whiteList_entity_1[_0x1a10f9(0xab)])),__param(0x8,(0x0,typeorm_1[_0x1a10f9(0xf0)])(fingerprint_entity_1[_0x1a10f9(0x95)])),__param(0x9,(0x0,typeorm_1[_0x1a10f9(0xf0)])(chatGroup_entity_1[_0x1a10f9(0x13d)])),__param(0xa,(0x0,typeorm_1['InjectRepository'])(chatLog_entity_1[_0x1a10f9(0x116)])),__param(0xb,(0x0,typeorm_1[_0x1a10f9(0xf0)])(midjourney_entity_1[_0x1a10f9(0x8c)])),__metadata('design:paramtypes',[typeorm_2['Repository'],typeorm_2[_0x1a10f9(0xe1)],typeorm_2[_0x1a10f9(0xe1)],typeorm_2['Repository'],typeorm_2[_0x1a10f9(0xe1)],typeorm_2['Repository'],typeorm_2['Repository'],typeorm_2[_0x1a10f9(0xe1)],typeorm_2[_0x1a10f9(0xe1)],typeorm_2[_0x1a10f9(0xe1)],typeorm_2[_0x1a10f9(0xe1)],typeorm_2[_0x1a10f9(0xe1)],sales_service_1[_0x1a10f9(0x128)],globalConfig_service_1[_0x1a10f9(0x9b)]])],UserBalanceService),exports[_0x1a10f9(0xc0)]=UserBalanceService;