'use strict';const _0x19c03c=_0x43be;(function(_0x366607,_0x2b897d){const _0x5ee402=_0x43be,_0x4fa186=_0x366607();while(!![]){try{const _0x356ce9=-parseInt(_0x5ee402(0x106))/0x1+parseInt(_0x5ee402(0x116))/0x2*(parseInt(_0x5ee402(0x120))/0x3)+-parseInt(_0x5ee402(0x110))/0x4+parseInt(_0x5ee402(0x122))/0x5+-parseInt(_0x5ee402(0x10b))/0x6+parseInt(_0x5ee402(0x104))/0x7*(parseInt(_0x5ee402(0x11b))/0x8)+parseInt(_0x5ee402(0x108))/0x9*(parseInt(_0x5ee402(0x11f))/0xa);if(_0x356ce9===_0x2b897d)break;else _0x4fa186['push'](_0x4fa186['shift']());}catch(_0x503a14){_0x4fa186['push'](_0x4fa186['shift']());}}}(_0x4bc0,0xca9d2));function _0x43be(_0x3a9b30,_0x1f056e){const _0x4bc0b8=_0x4bc0();return _0x43be=function(_0x43be79,_0x2847d0){_0x43be79=_0x43be79-0x102;let _0x3e4757=_0x4bc0b8[_0x43be79];return _0x3e4757;},_0x43be(_0x3a9b30,_0x1f056e);}var __decorate=this&&this[_0x19c03c(0x12f)]||function(_0xc11d1a,_0x52ab33,_0x1d03cc,_0xc5dc0d){const _0xe7fb8d=_0x19c03c;var _0x6e25a6=arguments[_0xe7fb8d(0x111)],_0x1443c9=_0x6e25a6<0x3?_0x52ab33:_0xc5dc0d===null?_0xc5dc0d=Object[_0xe7fb8d(0x12c)](_0x52ab33,_0x1d03cc):_0xc5dc0d,_0x1b6961;if(typeof Reflect==='object'&&typeof Reflect[_0xe7fb8d(0x12b)]===_0xe7fb8d(0x11d))_0x1443c9=Reflect[_0xe7fb8d(0x12b)](_0xc11d1a,_0x52ab33,_0x1d03cc,_0xc5dc0d);else{for(var _0x1b4040=_0xc11d1a[_0xe7fb8d(0x111)]-0x1;_0x1b4040>=0x0;_0x1b4040--)if(_0x1b6961=_0xc11d1a[_0x1b4040])_0x1443c9=(_0x6e25a6<0x3?_0x1b6961(_0x1443c9):_0x6e25a6>0x3?_0x1b6961(_0x52ab33,_0x1d03cc,_0x1443c9):_0x1b6961(_0x52ab33,_0x1d03cc))||_0x1443c9;}return _0x6e25a6>0x3&&_0x1443c9&&Object[_0xe7fb8d(0x10e)](_0x52ab33,_0x1d03cc,_0x1443c9),_0x1443c9;};Object['defineProperty'](exports,_0x19c03c(0x133),{'value':!![]}),exports[_0x19c03c(0x127)]=void 0x0;const verifycation_entity_1=require(_0x19c03c(0x109)),verification_service_1=require(_0x19c03c(0x132)),common_1=require(_0x19c03c(0x126)),typeorm_1=require('@nestjs/typeorm'),user_controller_1=require('./user.controller'),user_service_1=require(_0x19c03c(0x103)),user_entity_1=require('./user.entity'),userBalance_service_1=require(_0x19c03c(0x10a)),balance_entity_1=require(_0x19c03c(0x121)),accountLog_entity_1=require(_0x19c03c(0x10d)),config_entity_1=require(_0x19c03c(0x112)),cramiPackage_entity_1=require(_0x19c03c(0x123)),whiteList_entity_1=require(_0x19c03c(0x12d)),userBalance_entity_1=require(_0x19c03c(0x114)),salesUsers_entity_1=require('../sales/salesUsers.entity'),redisCache_service_1=require(_0x19c03c(0x11e)),fingerprint_entity_1=require(_0x19c03c(0x113)),chatLog_entity_1=require(_0x19c03c(0x125)),chatGroup_entity_1=require(_0x19c03c(0x12e)),midjourney_entity_1=require(_0x19c03c(0x117));let UserModule=class UserModule{};function _0x4bc0(){const _0xae902=['ConfigEntity','decorate','getOwnPropertyDescriptor','../chatgpt/whiteList.entity','../chatGroup/chatGroup.entity','__decorate','forFeature','UserBalanceEntity','../verification/verification.service','__esModule','RedisCacheService','AccountLogEntity','./user.service','7MztUsR','Module','468971LkqGfv','VerifycationEntity','9VNvvcM','../verification/verifycation.entity','../userBalance/userBalance.service','4965996YKqilx','UserBalanceService','../userBalance/accountLog.entity','defineProperty','ChatLogEntity','2469392kJUqKb','length','../globalConfig/config.entity','../userBalance/fingerprint.entity','../userBalance/userBalance.entity','CramiPackageEntity','1294nZOyqt','../midjourney/midjourney.entity','WhiteListEntity','SalesUsersEntity','ChatGroupEntity','2365488ORSDOH','BalanceEntity','function','../redisCache/redisCache.service','1015640rcqlqt','6405HJaXYJ','../userBalance/balance.entity','4826480mHZyQS','../crami/cramiPackage.entity','UserEntity','../chatLog/chatLog.entity','@nestjs/common','UserModule','UserController','UserService'];_0x4bc0=function(){return _0xae902;};return _0x4bc0();}UserModule=__decorate([(0x0,common_1['Global'])(),(0x0,common_1[_0x19c03c(0x105)])({'imports':[typeorm_1['TypeOrmModule'][_0x19c03c(0x130)]([user_entity_1[_0x19c03c(0x124)],verifycation_entity_1[_0x19c03c(0x107)],balance_entity_1[_0x19c03c(0x11c)],accountLog_entity_1[_0x19c03c(0x102)],config_entity_1[_0x19c03c(0x12a)],cramiPackage_entity_1[_0x19c03c(0x115)],whiteList_entity_1[_0x19c03c(0x118)],userBalance_entity_1[_0x19c03c(0x131)],salesUsers_entity_1[_0x19c03c(0x119)],fingerprint_entity_1['FingerprintLogEntity'],chatLog_entity_1[_0x19c03c(0x10f)],chatGroup_entity_1[_0x19c03c(0x11a)],midjourney_entity_1['MidjourneyEntity']])],'controllers':[user_controller_1[_0x19c03c(0x128)]],'providers':[user_service_1[_0x19c03c(0x129)],verification_service_1['VerificationService'],userBalance_service_1[_0x19c03c(0x10c)],redisCache_service_1[_0x19c03c(0x134)]],'exports':[user_service_1[_0x19c03c(0x129)]]})],UserModule),exports[_0x19c03c(0x127)]=UserModule;