'use strict';const _0x2b581a=_0x7393;(function(_0x210bb8,_0x348678){const _0x112467=_0x7393,_0x2024b7=_0x210bb8();while(!![]){try{const _0x15a30a=parseInt(_0x112467(0xca))/0x1*(parseInt(_0x112467(0xb7))/0x2)+-parseInt(_0x112467(0xcf))/0x3*(parseInt(_0x112467(0xb8))/0x4)+parseInt(_0x112467(0xc4))/0x5*(-parseInt(_0x112467(0xc1))/0x6)+-parseInt(_0x112467(0xbc))/0x7*(-parseInt(_0x112467(0xce))/0x8)+-parseInt(_0x112467(0xcb))/0x9*(parseInt(_0x112467(0xb4))/0xa)+parseInt(_0x112467(0xc6))/0xb+-parseInt(_0x112467(0xcd))/0xc*(-parseInt(_0x112467(0xbf))/0xd);if(_0x15a30a===_0x348678)break;else _0x2024b7['push'](_0x2024b7['shift']());}catch(_0x13eaae){_0x2024b7['push'](_0x2024b7['shift']());}}}(_0x24e0,0xa5e6c));function _0x7393(_0xe8f513,_0x2adac3){const _0x24e005=_0x24e0();return _0x7393=function(_0x73937d,_0x3cbcbf){_0x73937d=_0x73937d-0xb3;let _0x21f281=_0x24e005[_0x73937d];return _0x21f281;},_0x7393(_0xe8f513,_0x2adac3);}var __decorate=this&&this[_0x2b581a(0xb9)]||function(_0x53a148,_0x10bb5c,_0x1dd947,_0x2325a1){const _0x1bec4f=_0x2b581a;var _0x43263d=arguments[_0x1bec4f(0xba)],_0x528d93=_0x43263d<0x3?_0x10bb5c:_0x2325a1===null?_0x2325a1=Object['getOwnPropertyDescriptor'](_0x10bb5c,_0x1dd947):_0x2325a1,_0x49f080;if(typeof Reflect==='object'&&typeof Reflect[_0x1bec4f(0xc0)]===_0x1bec4f(0xb6))_0x528d93=Reflect['decorate'](_0x53a148,_0x10bb5c,_0x1dd947,_0x2325a1);else{for(var _0x4d66b7=_0x53a148[_0x1bec4f(0xba)]-0x1;_0x4d66b7>=0x0;_0x4d66b7--)if(_0x49f080=_0x53a148[_0x4d66b7])_0x528d93=(_0x43263d<0x3?_0x49f080(_0x528d93):_0x43263d>0x3?_0x49f080(_0x10bb5c,_0x1dd947,_0x528d93):_0x49f080(_0x10bb5c,_0x1dd947))||_0x528d93;}return _0x43263d>0x3&&_0x528d93&&Object[_0x1bec4f(0xc3)](_0x10bb5c,_0x1dd947,_0x528d93),_0x528d93;};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x2b581a(0xbe)]=void 0x0;const common_1=require(_0x2b581a(0xc5)),queue_controller_1=require('./queue.controller'),queue_service_1=require(_0x2b581a(0xc2)),bull_1=require('@nestjs/bull'),queue_process_1=require('./queue.process');let QueueModule=class QueueModule{};QueueModule=__decorate([(0x0,common_1[_0x2b581a(0xbb)])({'imports':[bull_1[_0x2b581a(0xbd)]['registerQueueAsync']({'name':_0x2b581a(0xb3),'useFactory':()=>{const _0x3ab51f=_0x2b581a,_0x4a7b26={'port':+process[_0x3ab51f(0xb5)]['REDIS_PORT'],'host':process[_0x3ab51f(0xb5)]['REDIS_HOST']};return process['env'][_0x3ab51f(0xc7)]&&(_0x4a7b26[_0x3ab51f(0xcc)]=process[_0x3ab51f(0xb5)][_0x3ab51f(0xc7)]),{'redis':_0x4a7b26};}})],'controllers':[queue_controller_1['QueueController']],'providers':[queue_service_1[_0x2b581a(0xc8)],queue_process_1[_0x2b581a(0xc9)]]})],QueueModule),exports[_0x2b581a(0xbe)]=QueueModule;function _0x24e0(){const _0x36f6d4=['6672408eAbtHC','./queue.service','defineProperty','5jjikwC','@nestjs/common','1657821mMZlER','REDIS_PASSWORD','QueueService','QueueProcessor','242819gUbbst','10533339tRkAvl','password','312ntJcGX','72PmcOhW','932523sgPyFL','MJDRAW','10urIPNK','env','function','8zLDtiw','12rIOpXg','__decorate','length','Module','838411omsVtD','BullModule','QueueModule','847275xCcfgh','decorate'];_0x24e0=function(){return _0x36f6d4;};return _0x24e0();}