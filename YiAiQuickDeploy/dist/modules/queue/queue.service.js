'use strict';const _0x5e88ce=_0x1b2f;(function(_0x95f97,_0x55558c){const _0x2ed548=_0x1b2f,_0x4d3ba6=_0x95f97();while(!![]){try{const _0x111863=parseInt(_0x2ed548(0x1fd))/0x1+parseInt(_0x2ed548(0x20f))/0x2+-parseInt(_0x2ed548(0x201))/0x3+parseInt(_0x2ed548(0x208))/0x4*(parseInt(_0x2ed548(0x20c))/0x5)+-parseInt(_0x2ed548(0x214))/0x6+-parseInt(_0x2ed548(0x21b))/0x7*(-parseInt(_0x2ed548(0x219))/0x8)+-parseInt(_0x2ed548(0x21e))/0x9*(parseInt(_0x2ed548(0x218))/0xa);if(_0x111863===_0x55558c)break;else _0x4d3ba6['push'](_0x4d3ba6['shift']());}catch(_0x3f5ca8){_0x4d3ba6['push'](_0x4d3ba6['shift']());}}}(_0x12cf,0x348e6));var __decorate=this&&this[_0x5e88ce(0x1ff)]||function(_0x386abc,_0x111120,_0x1df25d,_0x15dfb9){const _0x138dd9=_0x5e88ce;var _0x125ed1=arguments[_0x138dd9(0x205)],_0x13dfee=_0x125ed1<0x3?_0x111120:_0x15dfb9===null?_0x15dfb9=Object[_0x138dd9(0x1fb)](_0x111120,_0x1df25d):_0x15dfb9,_0x2efd70;if(typeof Reflect===_0x138dd9(0x217)&&typeof Reflect[_0x138dd9(0x1f9)]===_0x138dd9(0x1fe))_0x13dfee=Reflect[_0x138dd9(0x1f9)](_0x386abc,_0x111120,_0x1df25d,_0x15dfb9);else{for(var _0x2657c9=_0x386abc['length']-0x1;_0x2657c9>=0x0;_0x2657c9--)if(_0x2efd70=_0x386abc[_0x2657c9])_0x13dfee=(_0x125ed1<0x3?_0x2efd70(_0x13dfee):_0x125ed1>0x3?_0x2efd70(_0x111120,_0x1df25d,_0x13dfee):_0x2efd70(_0x111120,_0x1df25d))||_0x13dfee;}return _0x125ed1>0x3&&_0x13dfee&&Object[_0x138dd9(0x1f8)](_0x111120,_0x1df25d,_0x13dfee),_0x13dfee;},__metadata=this&&this[_0x5e88ce(0x210)]||function(_0xedd16d,_0x4bad91){const _0x15a463=_0x5e88ce;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x15a463(0x1fe))return Reflect[_0x15a463(0x222)](_0xedd16d,_0x4bad91);},__param=this&&this[_0x5e88ce(0x216)]||function(_0x48fb25,_0x17f282){return function(_0x27cb0e,_0x11eeee){_0x17f282(_0x27cb0e,_0x11eeee,_0x48fb25);};};Object[_0x5e88ce(0x1f8)](exports,_0x5e88ce(0x221),{'value':!![]}),exports[_0x5e88ce(0x220)]=void 0x0;const common_1=require(_0x5e88ce(0x20a)),bull_1=require('@nestjs/bull'),utils_1=require('../../common/utils'),midjourney_service_1=require(_0x5e88ce(0x1fc)),userBalance_service_1=require(_0x5e88ce(0x1ef)),globalConfig_service_1=require(_0x5e88ce(0x200));let QueueService=class QueueService{constructor(_0x47f52c,_0x3b4b13,_0x4d4a1c,_0x54125e){const _0x2c1bfa=_0x5e88ce;this[_0x2c1bfa(0x21c)]=_0x47f52c,this[_0x2c1bfa(0x21d)]=_0x3b4b13,this[_0x2c1bfa(0x21a)]=_0x4d4a1c,this[_0x2c1bfa(0x1f3)]=_0x54125e,this[_0x2c1bfa(0x1f2)]=[];}async['onApplicationBootstrap'](){const _0x9e89c8=_0x5e88ce;await this[_0x9e89c8(0x21c)]['clean'](0x0,_0x9e89c8(0x20b)),await this['midjourneyService'][_0x9e89c8(0x20e)]();}async['addMjDrawQueue'](_0x105b7b,_0x2d3389){const _0xec80e2=_0x5e88ce,{imgUrl:_0x12173b,orderId:_0x18d671,action:_0x5abc0a,drawId:_0x54cba4}=_0x105b7b;await this[_0xec80e2(0x21d)][_0xec80e2(0x211)](_0x2d3389),await this[_0xec80e2(0x21a)]['validateBalance'](_0x2d3389,_0xec80e2(0x1fa),_0x5abc0a===_0xec80e2(0x209)?0x1:0x4);if(_0x5abc0a===_0xec80e2(0x213)){const _0x348ed7=''+(0x0,utils_1['createRandomUid'])(),_0x583b17=Object[_0xec80e2(0x207)](Object[_0xec80e2(0x207)]({},_0x105b7b),{'userId':_0x2d3389[_0xec80e2(0x1f1)]['id'],'randomDrawId':_0x348ed7}),_0x47521b=await this[_0xec80e2(0x21d)][_0xec80e2(0x1f4)](_0x583b17),_0x21d5bf=await this[_0xec80e2(0x1f3)]['getConfigs']([_0xec80e2(0x1f5)])||0x30d40,_0xb9464f=await this[_0xec80e2(0x21c)][_0xec80e2(0x21f)](_0xec80e2(0x1fa),{'id':_0x47521b['id'],'action':_0x5abc0a,'userId':_0x2d3389['user']['id']},{'delay':0x3e8,'timeout':+_0x21d5bf});return this['jobIds']['push'](_0xb9464f['id']),!![];}else{const {orderId:_0x843a4b,action:_0x2bcff8,drawId:_0x519d7a}=_0x105b7b,_0x3a4f45=await this[_0xec80e2(0x21d)][_0xec80e2(0x1f0)](_0x2bcff8,_0x519d7a,_0x843a4b),_0x3d37f6=Object[_0xec80e2(0x207)](Object[_0xec80e2(0x207)](Object[_0xec80e2(0x207)]({},_0x105b7b),{'userId':_0x2d3389['user']['id']}),_0x3a4f45),_0x111848=await this[_0xec80e2(0x21d)][_0xec80e2(0x1f4)](_0x3d37f6),_0x39117c=await this[_0xec80e2(0x1f3)][_0xec80e2(0x1f6)]([_0xec80e2(0x1f5)])||0x30d40,_0x406fcf=await this[_0xec80e2(0x21c)][_0xec80e2(0x21f)](_0xec80e2(0x1fa),{'id':_0x111848['id'],'action':_0x2bcff8,'userId':_0x2d3389[_0xec80e2(0x1f1)]['id']},{'delay':0x3e8,'timeout':+_0x39117c});this[_0xec80e2(0x1f2)][_0xec80e2(0x203)](_0x406fcf['id']);return;}if(!_0x54cba4||!_0x18d671)throw new common_1['HttpException'](_0xec80e2(0x20d),common_1[_0xec80e2(0x202)]['BAD_REQUEST']);}async[_0x5e88ce(0x206)](){const _0x4860ba=_0x5e88ce;return{'jobIds':this[_0x4860ba(0x1f2)]};}};function _0x12cf(){const _0x28f382=['__decorate','../globalConfig/globalConfig.service','1203483poSbbl','HttpStatus','push','MJDRAW','length','getQueue','assign','473428TKPnbR','UPSCALE','@nestjs/common','active','10XfQVzy','缺少必要参数！','cleanQueue','637146MAzgBE','__metadata','checkLimit','UserBalanceService','IMAGINE','1446546sLqDQS','InjectQueue','__param','object','10dzoKAb','15160wFJMPq','userBalanceService','1575CqUUvU','mjDrawQueue','midjourneyService','2231757MGFJYg','add','QueueService','__esModule','metadata','../userBalance/userBalance.service','getDrawActionDetail','user','jobIds','globalConfigService','addDrawQueue','mjTimeoutMs','getConfigs','GlobalConfigService','defineProperty','decorate','mjDraw','getOwnPropertyDescriptor','../midjourney/midjourney.service','123833xzMacH','function'];_0x12cf=function(){return _0x28f382;};return _0x12cf();}function _0x1b2f(_0x3993eb,_0xf46a0f){const _0x12cf60=_0x12cf();return _0x1b2f=function(_0x1b2f31,_0x4e7b87){_0x1b2f31=_0x1b2f31-0x1ef;let _0x156d2b=_0x12cf60[_0x1b2f31];return _0x156d2b;},_0x1b2f(_0x3993eb,_0xf46a0f);}QueueService=__decorate([__param(0x0,(0x0,bull_1[_0x5e88ce(0x215)])(_0x5e88ce(0x204))),__metadata('design:paramtypes',[Object,midjourney_service_1['MidjourneyService'],userBalance_service_1[_0x5e88ce(0x212)],globalConfig_service_1[_0x5e88ce(0x1f7)]])],QueueService),exports[_0x5e88ce(0x220)]=QueueService;