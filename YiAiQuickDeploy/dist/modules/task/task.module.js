'use strict';function _0x5d77(_0x238bcc,_0x2c9b0d){const _0x51094a=_0x5109();return _0x5d77=function(_0x5d7710,_0x46b8c0){_0x5d7710=_0x5d7710-0xac;let _0x4a7704=_0x51094a[_0x5d7710];return _0x4a7704;},_0x5d77(_0x238bcc,_0x2c9b0d);}const _0x289720=_0x5d77;(function(_0x2c57cf,_0x22d25e){const _0x4a25b6=_0x5d77,_0x2b0364=_0x2c57cf();while(!![]){try{const _0xa7156f=-parseInt(_0x4a25b6(0xb0))/0x1+parseInt(_0x4a25b6(0xbb))/0x2+-parseInt(_0x4a25b6(0xbe))/0x3*(parseInt(_0x4a25b6(0xc1))/0x4)+-parseInt(_0x4a25b6(0xad))/0x5*(-parseInt(_0x4a25b6(0xbf))/0x6)+parseInt(_0x4a25b6(0xbc))/0x7*(parseInt(_0x4a25b6(0xc2))/0x8)+-parseInt(_0x4a25b6(0xb4))/0x9*(parseInt(_0x4a25b6(0xc4))/0xa)+-parseInt(_0x4a25b6(0xb6))/0xb*(parseInt(_0x4a25b6(0xb8))/0xc);if(_0xa7156f===_0x22d25e)break;else _0x2b0364['push'](_0x2b0364['shift']());}catch(_0x3a47eb){_0x2b0364['push'](_0x2b0364['shift']());}}}(_0x5109,0x6fcad));var __decorate=this&&this[_0x289720(0xb2)]||function(_0x14491b,_0x3660ca,_0x537208,_0x164fd2){const _0x53215b=_0x289720;var _0x5a06fd=arguments[_0x53215b(0xbd)],_0x5d0387=_0x5a06fd<0x3?_0x3660ca:_0x164fd2===null?_0x164fd2=Object[_0x53215b(0xb1)](_0x3660ca,_0x537208):_0x164fd2,_0x360ba6;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x53215b(0xb5))_0x5d0387=Reflect[_0x53215b(0xc3)](_0x14491b,_0x3660ca,_0x537208,_0x164fd2);else{for(var _0x4802dd=_0x14491b[_0x53215b(0xbd)]-0x1;_0x4802dd>=0x0;_0x4802dd--)if(_0x360ba6=_0x14491b[_0x4802dd])_0x5d0387=(_0x5a06fd<0x3?_0x360ba6(_0x5d0387):_0x5a06fd>0x3?_0x360ba6(_0x3660ca,_0x537208,_0x5d0387):_0x360ba6(_0x3660ca,_0x537208))||_0x5d0387;}return _0x5a06fd>0x3&&_0x5d0387&&Object[_0x53215b(0xaf)](_0x3660ca,_0x537208,_0x5d0387),_0x5d0387;};Object[_0x289720(0xaf)](exports,_0x289720(0xba),{'value':!![]}),exports[_0x289720(0xb9)]=void 0x0;const typeorm_1=require(_0x289720(0xb3)),common_1=require('@nestjs/common'),task_service_1=require(_0x289720(0xae)),schedule_1=require(_0x289720(0xb7)),userBalance_entity_1=require('../userBalance/userBalance.entity');function _0x5109(){const _0x3d7437=['297156dqRnoc','TaskModule','__esModule','717488ZaVEXQ','5518282SWUExq','length','114978deXtiY','12dzkVRw','TaskService','16WVYowk','8LqdmtX','decorate','40QhgoHl','TypeOrmModule','499085CqTsZn','./task.service','defineProperty','427538gspXUh','getOwnPropertyDescriptor','__decorate','@nestjs/typeorm','525762BAmnMT','function','33cCclKT','@nestjs/schedule'];_0x5109=function(){return _0x3d7437;};return _0x5109();}let TaskModule=class TaskModule{};TaskModule=__decorate([(0x0,common_1['Module'])({'imports':[schedule_1['ScheduleModule']['forRoot'](),typeorm_1[_0x289720(0xac)]['forFeature']([userBalance_entity_1['UserBalanceEntity']])],'providers':[task_service_1[_0x289720(0xc0)]]})],TaskModule),exports[_0x289720(0xb9)]=TaskModule;