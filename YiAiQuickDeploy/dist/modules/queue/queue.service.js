'use strict';const _0x1f7d5e=_0x437f;(function(_0x46ecee,_0x3826e0){const _0x35195d=_0x437f,_0x41a196=_0x46ecee();while(!![]){try{const _0x16aa06=parseInt(_0x35195d(0x1a9))/0x1+parseInt(_0x35195d(0x1b4))/0x2*(-parseInt(_0x35195d(0x18e))/0x3)+parseInt(_0x35195d(0x19c))/0x4*(parseInt(_0x35195d(0x1ac))/0x5)+parseInt(_0x35195d(0x1b8))/0x6*(-parseInt(_0x35195d(0x189))/0x7)+-parseInt(_0x35195d(0x1b3))/0x8+parseInt(_0x35195d(0x1be))/0x9*(-parseInt(_0x35195d(0x1b2))/0xa)+parseInt(_0x35195d(0x1ad))/0xb;if(_0x16aa06===_0x3826e0)break;else _0x41a196['push'](_0x41a196['shift']());}catch(_0x3f0ff2){_0x41a196['push'](_0x41a196['shift']());}}}(_0x3d88,0x6d72a));function _0x437f(_0x1df417,_0x3a0ab3){const _0x3d8874=_0x3d88();return _0x437f=function(_0x437f6f,_0x490fa9){_0x437f6f=_0x437f6f-0x187;let _0x2cd16b=_0x3d8874[_0x437f6f];return _0x2cd16b;},_0x437f(_0x1df417,_0x3a0ab3);}var __decorate=this&&this['__decorate']||function(_0x568a99,_0x2ef10e,_0x32765f,_0x210f94){const _0x25cf48=_0x437f;var _0x21c72d=arguments[_0x25cf48(0x1a1)],_0x354eaf=_0x21c72d<0x3?_0x2ef10e:_0x210f94===null?_0x210f94=Object[_0x25cf48(0x19a)](_0x2ef10e,_0x32765f):_0x210f94,_0x2702e5;if(typeof Reflect==='object'&&typeof Reflect[_0x25cf48(0x19f)]==='function')_0x354eaf=Reflect[_0x25cf48(0x19f)](_0x568a99,_0x2ef10e,_0x32765f,_0x210f94);else{for(var _0x377d84=_0x568a99[_0x25cf48(0x1a1)]-0x1;_0x377d84>=0x0;_0x377d84--)if(_0x2702e5=_0x568a99[_0x377d84])_0x354eaf=(_0x21c72d<0x3?_0x2702e5(_0x354eaf):_0x21c72d>0x3?_0x2702e5(_0x2ef10e,_0x32765f,_0x354eaf):_0x2702e5(_0x2ef10e,_0x32765f))||_0x354eaf;}return _0x21c72d>0x3&&_0x354eaf&&Object['defineProperty'](_0x2ef10e,_0x32765f,_0x354eaf),_0x354eaf;},__metadata=this&&this[_0x1f7d5e(0x1b0)]||function(_0x151920,_0x3e32a1){const _0x4aac12=_0x1f7d5e;if(typeof Reflect===_0x4aac12(0x198)&&typeof Reflect[_0x4aac12(0x192)]===_0x4aac12(0x196))return Reflect[_0x4aac12(0x192)](_0x151920,_0x3e32a1);},__param=this&&this[_0x1f7d5e(0x1a8)]||function(_0x473963,_0x57389b){return function(_0x5d9c8b,_0x40894e){_0x57389b(_0x5d9c8b,_0x40894e,_0x473963);};};Object[_0x1f7d5e(0x1bc)](exports,'__esModule',{'value':!![]}),exports[_0x1f7d5e(0x1a2)]=void 0x0;const common_1=require('@nestjs/common'),bull_1=require(_0x1f7d5e(0x1bd)),utils_1=require(_0x1f7d5e(0x191)),midjourney_service_1=require(_0x1f7d5e(0x1b9)),userBalance_service_1=require(_0x1f7d5e(0x1bb)),globalConfig_service_1=require(_0x1f7d5e(0x190));let QueueService=class QueueService{constructor(_0x199f82,_0x3c6058,_0x42a1c6,_0x5e9e86){const _0x234b27=_0x1f7d5e;this[_0x234b27(0x197)]=_0x199f82,this['midjourneyService']=_0x3c6058,this['userBalanceService']=_0x42a1c6,this['globalConfigService']=_0x5e9e86,this[_0x234b27(0x19e)]=[];}async[_0x1f7d5e(0x1aa)](){const _0xaf19ec=_0x1f7d5e;await this['mjDrawQueue'][_0xaf19ec(0x188)](0x0,_0xaf19ec(0x193)),await this[_0xaf19ec(0x1a7)][_0xaf19ec(0x1a3)]();}async[_0x1f7d5e(0x19b)](_0x43d35e,_0x558eb9){const _0x5a4836=_0x1f7d5e,{imgUrl:_0xda1226,orderId:_0x4dd810,action:_0x26901b,drawId:_0xbc80eb}=_0x43d35e;await this['midjourneyService'][_0x5a4836(0x1ba)](_0x558eb9),await this[_0x5a4836(0x1b5)][_0x5a4836(0x1b1)](_0x558eb9,_0x5a4836(0x19d),_0x26901b==='UPSCALE'?0x1:0x4);if(_0x26901b===_0x5a4836(0x195)){const _0x11f904=''+(0x0,utils_1[_0x5a4836(0x1a0)])(),_0x1fe1d4=Object[_0x5a4836(0x18a)](Object[_0x5a4836(0x18a)]({},_0x43d35e),{'userId':_0x558eb9[_0x5a4836(0x1a4)]['id'],'randomDrawId':_0x11f904}),_0xedcec8=await this[_0x5a4836(0x1a7)]['addDrawQueue'](_0x1fe1d4),_0x47e128=await this[_0x5a4836(0x18d)][_0x5a4836(0x1b7)]([_0x5a4836(0x18f)])||0x30d40,_0x3002b2=await this[_0x5a4836(0x197)][_0x5a4836(0x187)](_0x5a4836(0x19d),{'id':_0xedcec8['id'],'action':_0x26901b,'userId':_0x558eb9['user']['id']},{'delay':0x3e8,'timeout':+_0x47e128});return this[_0x5a4836(0x19e)][_0x5a4836(0x199)](_0x3002b2['id']),!![];}else{const {orderId:_0x3701b8,action:_0x5dfaf6,drawId:_0x2c6c01}=_0x43d35e,_0x182b05=await this['midjourneyService'][_0x5a4836(0x1a5)](_0x5dfaf6,_0x2c6c01,_0x3701b8),_0x3d302c=Object['assign'](Object[_0x5a4836(0x18a)](Object['assign']({},_0x43d35e),{'userId':_0x558eb9['user']['id']}),_0x182b05),_0x467580=await this[_0x5a4836(0x1a7)][_0x5a4836(0x1ae)](_0x3d302c),_0x3c8d57=await this[_0x5a4836(0x18d)][_0x5a4836(0x1b7)](['mjTimeoutMs'])||0x30d40,_0x408abb=await this[_0x5a4836(0x197)][_0x5a4836(0x187)](_0x5a4836(0x19d),{'id':_0x467580['id'],'action':_0x5dfaf6,'userId':_0x558eb9['user']['id']},{'delay':0x3e8,'timeout':+_0x3c8d57});this[_0x5a4836(0x19e)][_0x5a4836(0x199)](_0x408abb['id']);return;}if(!_0xbc80eb||!_0x4dd810)throw new common_1[(_0x5a4836(0x1af))]('缺少必要参数！',common_1['HttpStatus'][_0x5a4836(0x18c)]);}async[_0x1f7d5e(0x1b6)](){const _0x42f0b4=_0x1f7d5e;return{'jobIds':this[_0x42f0b4(0x19e)]};}};QueueService=__decorate([__param(0x0,(0x0,bull_1[_0x1f7d5e(0x18b)])(_0x1f7d5e(0x1ab))),__metadata(_0x1f7d5e(0x1a6),[Object,midjourney_service_1[_0x1f7d5e(0x194)],userBalance_service_1['UserBalanceService'],globalConfig_service_1['GlobalConfigService']])],QueueService),exports[_0x1f7d5e(0x1a2)]=QueueService;function _0x3d88(){const _0x170190=['getDrawActionDetail','design:paramtypes','midjourneyService','__param','522717pZirhm','onApplicationBootstrap','MJDRAW','85gxKjwU','7186421masSYe','addDrawQueue','HttpException','__metadata','validateBalance','60ThgyBk','5595992FLwOeE','2DiMriV','userBalanceService','getQueue','getConfigs','2128344CSXdIB','../midjourney/midjourney.service','checkLimit','../userBalance/userBalance.service','defineProperty','@nestjs/bull','104049JnWWdV','add','clean','14CWinDL','assign','InjectQueue','BAD_REQUEST','globalConfigService','17037GhZibQ','mjTimeoutMs','../globalConfig/globalConfig.service','../../common/utils','metadata','active','MidjourneyService','IMAGINE','function','mjDrawQueue','object','push','getOwnPropertyDescriptor','addMjDrawQueue','177944aahSJW','mjDraw','jobIds','decorate','createRandomUid','length','QueueService','cleanQueue','user'];_0x3d88=function(){return _0x170190;};return _0x3d88();}