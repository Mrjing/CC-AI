'use strict';const _0x3fafc3=_0x2d36;(function(_0x263f33,_0x13a4d4){const _0x37c572=_0x2d36,_0x37b44e=_0x263f33();while(!![]){try{const _0x231859=parseInt(_0x37c572(0x74))/0x1+parseInt(_0x37c572(0x8b))/0x2+-parseInt(_0x37c572(0x9f))/0x3+-parseInt(_0x37c572(0x7a))/0x4+parseInt(_0x37c572(0x70))/0x5*(parseInt(_0x37c572(0x79))/0x6)+parseInt(_0x37c572(0x7c))/0x7+-parseInt(_0x37c572(0x93))/0x8;if(_0x231859===_0x13a4d4)break;else _0x37b44e['push'](_0x37b44e['shift']());}catch(_0xad7e7e){_0x37b44e['push'](_0x37b44e['shift']());}}}(_0x37a3,0xbf68c));function _0x37a3(){const _0x3b2c9c=['globalConfigService','getOwnPropertyDescriptor','length','cleanQueue','validateBalance','mjDrawQueue','getDrawActionDetail','MJDRAW','QueueService','createRandomUid','UserBalanceService','433722XVkLdi','metadata','push','midjourneyService','1010kzfMTJ','__metadata','object','getConfigs','229666nrZWkZ','__param','checkLimit','mjDraw','function','19788MkABtH','3846128hgskxB','add','2320983PHzuqA','../midjourney/midjourney.service','BAD_REQUEST','assign','__esModule','HttpException','mjTimeoutMs','clean','../userBalance/userBalance.service','GlobalConfigService','addDrawQueue','__decorate','active','defineProperty','onApplicationBootstrap','2898434nTipqY','jobIds','user','@nestjs/bull','缺少必要参数！','getQueue','../../common/utils','@nestjs/common','6292240ITdoBc'];_0x37a3=function(){return _0x3b2c9c;};return _0x37a3();}var __decorate=this&&this[_0x3fafc3(0x87)]||function(_0x9c51d2,_0x25e922,_0x50b2a7,_0x467e8b){const _0x18318e=_0x3fafc3;var _0x6ed5b6=arguments['length'],_0x5c87a2=_0x6ed5b6<0x3?_0x25e922:_0x467e8b===null?_0x467e8b=Object[_0x18318e(0x95)](_0x25e922,_0x50b2a7):_0x467e8b,_0x2d0f64;if(typeof Reflect===_0x18318e(0x72)&&typeof Reflect['decorate']===_0x18318e(0x78))_0x5c87a2=Reflect['decorate'](_0x9c51d2,_0x25e922,_0x50b2a7,_0x467e8b);else{for(var _0x37b460=_0x9c51d2[_0x18318e(0x96)]-0x1;_0x37b460>=0x0;_0x37b460--)if(_0x2d0f64=_0x9c51d2[_0x37b460])_0x5c87a2=(_0x6ed5b6<0x3?_0x2d0f64(_0x5c87a2):_0x6ed5b6>0x3?_0x2d0f64(_0x25e922,_0x50b2a7,_0x5c87a2):_0x2d0f64(_0x25e922,_0x50b2a7))||_0x5c87a2;}return _0x6ed5b6>0x3&&_0x5c87a2&&Object['defineProperty'](_0x25e922,_0x50b2a7,_0x5c87a2),_0x5c87a2;},__metadata=this&&this[_0x3fafc3(0x71)]||function(_0x53ad46,_0x5a0277){const _0x5431ac=_0x3fafc3;if(typeof Reflect===_0x5431ac(0x72)&&typeof Reflect[_0x5431ac(0xa0)]===_0x5431ac(0x78))return Reflect[_0x5431ac(0xa0)](_0x53ad46,_0x5a0277);},__param=this&&this[_0x3fafc3(0x75)]||function(_0x5c1897,_0xe0be98){return function(_0x7aea3a,_0x41f493){_0xe0be98(_0x7aea3a,_0x41f493,_0x5c1897);};};function _0x2d36(_0x25b7c4,_0x3b23f7){const _0x37a34e=_0x37a3();return _0x2d36=function(_0x2d364f,_0x57fbe0){_0x2d364f=_0x2d364f-0x6e;let _0x34abe3=_0x37a34e[_0x2d364f];return _0x34abe3;},_0x2d36(_0x25b7c4,_0x3b23f7);}Object[_0x3fafc3(0x89)](exports,_0x3fafc3(0x80),{'value':!![]}),exports['QueueService']=void 0x0;const common_1=require(_0x3fafc3(0x92)),bull_1=require(_0x3fafc3(0x8e)),utils_1=require(_0x3fafc3(0x91)),midjourney_service_1=require(_0x3fafc3(0x7d)),userBalance_service_1=require(_0x3fafc3(0x84)),globalConfig_service_1=require('../globalConfig/globalConfig.service');let QueueService=class QueueService{constructor(_0x37fed2,_0x4cd9aa,_0x3353a3,_0x39b79c){const _0x1f8034=_0x3fafc3;this[_0x1f8034(0x99)]=_0x37fed2,this[_0x1f8034(0x6f)]=_0x4cd9aa,this['userBalanceService']=_0x3353a3,this[_0x1f8034(0x94)]=_0x39b79c,this['jobIds']=[];}async[_0x3fafc3(0x8a)](){const _0x2cac7b=_0x3fafc3;await this[_0x2cac7b(0x99)][_0x2cac7b(0x83)](0x0,_0x2cac7b(0x88)),await this[_0x2cac7b(0x6f)][_0x2cac7b(0x97)]();}async['addMjDrawQueue'](_0x289fc4,_0x34dbe9){const _0x1081d3=_0x3fafc3,{imgUrl:_0x24f305,orderId:_0x55d853,action:_0xbc94ae,drawId:_0x204b30}=_0x289fc4;await this['midjourneyService'][_0x1081d3(0x76)](_0x34dbe9),await this['userBalanceService'][_0x1081d3(0x98)](_0x34dbe9,'mjDraw',_0xbc94ae==='UPSCALE'?0x1:0x4);if(_0xbc94ae==='IMAGINE'){const _0x5c7ab3=''+(0x0,utils_1[_0x1081d3(0x9d)])(),_0x2ebe65=Object[_0x1081d3(0x7f)](Object['assign']({},_0x289fc4),{'userId':_0x34dbe9[_0x1081d3(0x8d)]['id'],'randomDrawId':_0x5c7ab3}),_0x245032=await this[_0x1081d3(0x6f)][_0x1081d3(0x86)](_0x2ebe65),_0x479a27=await this[_0x1081d3(0x94)][_0x1081d3(0x73)]([_0x1081d3(0x82)])||0x30d40,_0x56c802=await this['mjDrawQueue'][_0x1081d3(0x7b)](_0x1081d3(0x77),{'id':_0x245032['id'],'action':_0xbc94ae,'userId':_0x34dbe9[_0x1081d3(0x8d)]['id']},{'delay':0x3e8,'timeout':+_0x479a27});return this[_0x1081d3(0x8c)][_0x1081d3(0x6e)](_0x56c802['id']),!![];}else{const {orderId:_0x51f926,action:_0x2df0a5,drawId:_0x44cfc7}=_0x289fc4,_0x4c6ee8=await this['midjourneyService'][_0x1081d3(0x9a)](_0x2df0a5,_0x44cfc7,_0x51f926),_0x209ae9=Object[_0x1081d3(0x7f)](Object['assign'](Object[_0x1081d3(0x7f)]({},_0x289fc4),{'userId':_0x34dbe9[_0x1081d3(0x8d)]['id']}),_0x4c6ee8),_0x2019cd=await this[_0x1081d3(0x6f)][_0x1081d3(0x86)](_0x209ae9),_0x4d2744=await this[_0x1081d3(0x94)][_0x1081d3(0x73)]([_0x1081d3(0x82)])||0x30d40,_0x297bb9=await this[_0x1081d3(0x99)][_0x1081d3(0x7b)](_0x1081d3(0x77),{'id':_0x2019cd['id'],'action':_0x2df0a5,'userId':_0x34dbe9[_0x1081d3(0x8d)]['id']},{'delay':0x3e8,'timeout':+_0x4d2744});this[_0x1081d3(0x8c)]['push'](_0x297bb9['id']);return;}if(!_0x204b30||!_0x55d853)throw new common_1[(_0x1081d3(0x81))](_0x1081d3(0x8f),common_1['HttpStatus'][_0x1081d3(0x7e)]);}async[_0x3fafc3(0x90)](){const _0xaa6e38=_0x3fafc3;return{'jobIds':this[_0xaa6e38(0x8c)]};}};QueueService=__decorate([__param(0x0,(0x0,bull_1['InjectQueue'])(_0x3fafc3(0x9b))),__metadata('design:paramtypes',[Object,midjourney_service_1['MidjourneyService'],userBalance_service_1[_0x3fafc3(0x9e)],globalConfig_service_1[_0x3fafc3(0x85)]])],QueueService),exports[_0x3fafc3(0x9c)]=QueueService;