'use strict';function _0x3a3f(_0x5e2dec,_0x196b2d){const _0x260678=_0x2606();return _0x3a3f=function(_0x3a3f81,_0x4619d2){_0x3a3f81=_0x3a3f81-0xdb;let _0x1a3598=_0x260678[_0x3a3f81];return _0x1a3598;},_0x3a3f(_0x5e2dec,_0x196b2d);}const _0x3e35ab=_0x3a3f;(function(_0x1ac9f3,_0x380b83){const _0x23d278=_0x3a3f,_0x5ca485=_0x1ac9f3();while(!![]){try{const _0x30e6ce=-parseInt(_0x23d278(0x10e))/0x1*(parseInt(_0x23d278(0xe4))/0x2)+-parseInt(_0x23d278(0xe5))/0x3*(-parseInt(_0x23d278(0x100))/0x4)+-parseInt(_0x23d278(0xdf))/0x5+-parseInt(_0x23d278(0x10a))/0x6*(parseInt(_0x23d278(0x10b))/0x7)+-parseInt(_0x23d278(0xef))/0x8+parseInt(_0x23d278(0xe8))/0x9+parseInt(_0x23d278(0xe1))/0xa*(parseInt(_0x23d278(0x108))/0xb);if(_0x30e6ce===_0x380b83)break;else _0x5ca485['push'](_0x5ca485['shift']());}catch(_0xcba6a5){_0x5ca485['push'](_0x5ca485['shift']());}}}(_0x2606,0x6bc82));var __decorate=this&&this['__decorate']||function(_0x1c7fb1,_0x50f572,_0x2cdc14,_0x762291){const _0x1b8484=_0x3a3f;var _0x38c4ba=arguments['length'],_0x17ca44=_0x38c4ba<0x3?_0x50f572:_0x762291===null?_0x762291=Object[_0x1b8484(0xdb)](_0x50f572,_0x2cdc14):_0x762291,_0x17e3a9;if(typeof Reflect===_0x1b8484(0xe0)&&typeof Reflect[_0x1b8484(0xe6)]===_0x1b8484(0xdd))_0x17ca44=Reflect[_0x1b8484(0xe6)](_0x1c7fb1,_0x50f572,_0x2cdc14,_0x762291);else{for(var _0x7024cd=_0x1c7fb1['length']-0x1;_0x7024cd>=0x0;_0x7024cd--)if(_0x17e3a9=_0x1c7fb1[_0x7024cd])_0x17ca44=(_0x38c4ba<0x3?_0x17e3a9(_0x17ca44):_0x38c4ba>0x3?_0x17e3a9(_0x50f572,_0x2cdc14,_0x17ca44):_0x17e3a9(_0x50f572,_0x2cdc14))||_0x17ca44;}return _0x38c4ba>0x3&&_0x17ca44&&Object[_0x1b8484(0xf6)](_0x50f572,_0x2cdc14,_0x17ca44),_0x17ca44;},__metadata=this&&this[_0x3e35ab(0xff)]||function(_0x11317f,_0x5b9aa0){const _0x176602=_0x3e35ab;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x176602(0xdd))return Reflect['metadata'](_0x11317f,_0x5b9aa0);},__param=this&&this[_0x3e35ab(0xf7)]||function(_0x1193ff,_0x5a4be3){return function(_0x1e9ecf,_0x222a86){_0x5a4be3(_0x1e9ecf,_0x222a86,_0x1193ff);};};Object['defineProperty'](exports,_0x3e35ab(0x109),{'value':!![]}),exports[_0x3e35ab(0xfa)]=void 0x0;function _0x2606(){const _0x12a617=['active','@nestjs/bull','1gbawuA','clean','getOwnPropertyDescriptor','GlobalConfigService','function','../../common/utils','4377000YaJpRt','object','160GdByHJ','globalConfigService','MidjourneyService','1394186eeCSAH','24BDZCzs','decorate','HttpStatus','2391507ekoPoW','validateBalance','UPSCALE','缺少必要参数！','add','HttpException','push','5726472xMpTeI','../globalConfig/globalConfig.service','BAD_REQUEST','getDrawActionDetail','@nestjs/common','createRandomUid','mjDrawQueue','defineProperty','__param','InjectQueue','mjTimeoutMs','QueueService','user','mjDraw','addDrawQueue','userBalanceService','__metadata','257812oFVVbi','jobIds','midjourneyService','getConfigs','checkLimit','UserBalanceService','assign','addMjDrawQueue','1835427btEFio','__esModule','4327698FgWUad','7NvYpAx'];_0x2606=function(){return _0x12a617;};return _0x2606();}const common_1=require(_0x3e35ab(0xf3)),bull_1=require(_0x3e35ab(0x10d)),utils_1=require(_0x3e35ab(0xde)),midjourney_service_1=require('../midjourney/midjourney.service'),userBalance_service_1=require('../userBalance/userBalance.service'),globalConfig_service_1=require(_0x3e35ab(0xf0));let QueueService=class QueueService{constructor(_0x44e3f8,_0x294f44,_0x394fa4,_0x31b6ac){const _0x343d1e=_0x3e35ab;this['mjDrawQueue']=_0x44e3f8,this['midjourneyService']=_0x294f44,this[_0x343d1e(0xfe)]=_0x394fa4,this['globalConfigService']=_0x31b6ac,this[_0x343d1e(0x101)]=[];}async['onApplicationBootstrap'](){const _0x21b8c8=_0x3e35ab;await this[_0x21b8c8(0xf5)][_0x21b8c8(0x10f)](0x0,_0x21b8c8(0x10c)),await this[_0x21b8c8(0x102)]['cleanQueue']();}async[_0x3e35ab(0x107)](_0x5d062e,_0x3acc12){const _0x5970be=_0x3e35ab,{imgUrl:_0x41c3fe,orderId:_0x4834e5,action:_0x2bc110,drawId:_0x43d2d4}=_0x5d062e;await this[_0x5970be(0x102)][_0x5970be(0x104)](_0x3acc12),await this[_0x5970be(0xfe)][_0x5970be(0xe9)](_0x3acc12,'mjDraw',_0x2bc110===_0x5970be(0xea)?0x1:0x4);if(_0x2bc110==='IMAGINE'){const _0x3720cb=''+(0x0,utils_1[_0x5970be(0xf4)])(),_0x257c5c=Object[_0x5970be(0x106)](Object['assign']({},_0x5d062e),{'userId':_0x3acc12[_0x5970be(0xfb)]['id'],'randomDrawId':_0x3720cb}),_0xcd6baf=await this['midjourneyService'][_0x5970be(0xfd)](_0x257c5c),_0xd6126c=await this[_0x5970be(0xe2)][_0x5970be(0x103)](['mjTimeoutMs'])||0x30d40,_0x15324f=await this['mjDrawQueue'][_0x5970be(0xec)](_0x5970be(0xfc),{'id':_0xcd6baf['id'],'action':_0x2bc110,'userId':_0x3acc12['user']['id']},{'delay':0x3e8,'timeout':+_0xd6126c});return this[_0x5970be(0x101)]['push'](_0x15324f['id']),!![];}else{const {orderId:_0x105abe,action:_0x152911,drawId:_0x198077}=_0x5d062e,_0x130840=await this[_0x5970be(0x102)][_0x5970be(0xf2)](_0x152911,_0x198077,_0x105abe),_0x4a86c4=Object[_0x5970be(0x106)](Object['assign'](Object[_0x5970be(0x106)]({},_0x5d062e),{'userId':_0x3acc12['user']['id']}),_0x130840),_0x4b6c1c=await this[_0x5970be(0x102)][_0x5970be(0xfd)](_0x4a86c4),_0x31c6db=await this[_0x5970be(0xe2)][_0x5970be(0x103)]([_0x5970be(0xf9)])||0x30d40,_0x5384f5=await this[_0x5970be(0xf5)][_0x5970be(0xec)]('mjDraw',{'id':_0x4b6c1c['id'],'action':_0x152911,'userId':_0x3acc12[_0x5970be(0xfb)]['id']},{'delay':0x3e8,'timeout':+_0x31c6db});this[_0x5970be(0x101)][_0x5970be(0xee)](_0x5384f5['id']);return;}if(!_0x43d2d4||!_0x4834e5)throw new common_1[(_0x5970be(0xed))](_0x5970be(0xeb),common_1[_0x5970be(0xe7)][_0x5970be(0xf1)]);}async['getQueue'](){const _0xfec823=_0x3e35ab;return{'jobIds':this[_0xfec823(0x101)]};}};QueueService=__decorate([__param(0x0,(0x0,bull_1[_0x3e35ab(0xf8)])('MJDRAW')),__metadata('design:paramtypes',[Object,midjourney_service_1[_0x3e35ab(0xe3)],userBalance_service_1[_0x3e35ab(0x105)],globalConfig_service_1[_0x3e35ab(0xdc)]])],QueueService),exports[_0x3e35ab(0xfa)]=QueueService;