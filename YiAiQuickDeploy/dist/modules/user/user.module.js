'use strict';const _0x63ea8a=_0x352c;function _0x4ba9(){const _0x30755b=['469MPNDaU','function','47694iMZpaf','UserService','BalanceEntity','forFeature','../globalConfig/config.entity','RedisCacheService','../crami/cramiPackage.entity','UserBalanceService','1298785GHdcWN','ConfigEntity','../midjourney/midjourney.entity','ChatLogEntity','../userBalance/userBalance.entity','../chatLog/chatLog.entity','../chatGroup/chatGroup.entity','341800LFjpIL','30826782epkIXY','../verification/verifycation.entity','SalesUsersEntity','TypeOrmModule','./user.service','../redisCache/redisCache.service','Module','__esModule','10uuQzpz','@nestjs/common','UserBalanceEntity','object','VerificationService','__decorate','UserEntity','CramiPackageEntity','length','2819368WRZXvQ','defineProperty','2203640MCANKQ','../userBalance/fingerprint.entity','FingerprintLogEntity','../verification/verification.service','../userBalance/userBalance.service','UserModule','VerifycationEntity','3ifJuhb','Global','../chatgpt/whiteList.entity','getOwnPropertyDescriptor','5499892qwEzhz','@nestjs/typeorm','./user.entity','./user.controller'];_0x4ba9=function(){return _0x30755b;};return _0x4ba9();}(function(_0x57bfff,_0x324a61){const _0x47c290=_0x352c,_0x416b76=_0x57bfff();while(!![]){try{const _0x1106e4=parseInt(_0x47c290(0xaf))/0x1+parseInt(_0x47c290(0xc1))/0x2*(-parseInt(_0x47c290(0x96))/0x3)+-parseInt(_0x47c290(0x9a))/0x4+parseInt(_0x47c290(0xa8))/0x5+parseInt(_0x47c290(0xa0))/0x6*(-parseInt(_0x47c290(0x9e))/0x7)+parseInt(_0x47c290(0xc3))/0x8+-parseInt(_0x47c290(0xb0))/0x9*(-parseInt(_0x47c290(0xb8))/0xa);if(_0x1106e4===_0x324a61)break;else _0x416b76['push'](_0x416b76['shift']());}catch(_0x463398){_0x416b76['push'](_0x416b76['shift']());}}}(_0x4ba9,0xf078a));function _0x352c(_0x23d7e6,_0x239607){const _0x4ba9cd=_0x4ba9();return _0x352c=function(_0x352c59,_0x38fc02){_0x352c59=_0x352c59-0x92;let _0x2c75f1=_0x4ba9cd[_0x352c59];return _0x2c75f1;},_0x352c(_0x23d7e6,_0x239607);}var __decorate=this&&this[_0x63ea8a(0xbd)]||function(_0x1eee31,_0x3f763b,_0x2f2365,_0x264cec){const _0x58c60b=_0x63ea8a;var _0x5457ac=arguments[_0x58c60b(0xc0)],_0x5928f7=_0x5457ac<0x3?_0x3f763b:_0x264cec===null?_0x264cec=Object[_0x58c60b(0x99)](_0x3f763b,_0x2f2365):_0x264cec,_0x51d004;if(typeof Reflect===_0x58c60b(0xbb)&&typeof Reflect['decorate']===_0x58c60b(0x9f))_0x5928f7=Reflect['decorate'](_0x1eee31,_0x3f763b,_0x2f2365,_0x264cec);else{for(var _0x306c9f=_0x1eee31[_0x58c60b(0xc0)]-0x1;_0x306c9f>=0x0;_0x306c9f--)if(_0x51d004=_0x1eee31[_0x306c9f])_0x5928f7=(_0x5457ac<0x3?_0x51d004(_0x5928f7):_0x5457ac>0x3?_0x51d004(_0x3f763b,_0x2f2365,_0x5928f7):_0x51d004(_0x3f763b,_0x2f2365))||_0x5928f7;}return _0x5457ac>0x3&&_0x5928f7&&Object[_0x58c60b(0xc2)](_0x3f763b,_0x2f2365,_0x5928f7),_0x5928f7;};Object['defineProperty'](exports,_0x63ea8a(0xb7),{'value':!![]}),exports['UserModule']=void 0x0;const verifycation_entity_1=require(_0x63ea8a(0xb1)),verification_service_1=require(_0x63ea8a(0x92)),common_1=require(_0x63ea8a(0xb9)),typeorm_1=require(_0x63ea8a(0x9b)),user_controller_1=require(_0x63ea8a(0x9d)),user_service_1=require(_0x63ea8a(0xb4)),user_entity_1=require(_0x63ea8a(0x9c)),userBalance_service_1=require(_0x63ea8a(0x93)),balance_entity_1=require('../userBalance/balance.entity'),accountLog_entity_1=require('../userBalance/accountLog.entity'),config_entity_1=require(_0x63ea8a(0xa4)),cramiPackage_entity_1=require(_0x63ea8a(0xa6)),whiteList_entity_1=require(_0x63ea8a(0x98)),userBalance_entity_1=require(_0x63ea8a(0xac)),salesUsers_entity_1=require('../sales/salesUsers.entity'),redisCache_service_1=require(_0x63ea8a(0xb5)),fingerprint_entity_1=require(_0x63ea8a(0xc4)),chatLog_entity_1=require(_0x63ea8a(0xad)),chatGroup_entity_1=require(_0x63ea8a(0xae)),midjourney_entity_1=require(_0x63ea8a(0xaa));let UserModule=class UserModule{};UserModule=__decorate([(0x0,common_1[_0x63ea8a(0x97)])(),(0x0,common_1[_0x63ea8a(0xb6)])({'imports':[typeorm_1[_0x63ea8a(0xb3)][_0x63ea8a(0xa3)]([user_entity_1[_0x63ea8a(0xbe)],verifycation_entity_1[_0x63ea8a(0x95)],balance_entity_1[_0x63ea8a(0xa2)],accountLog_entity_1['AccountLogEntity'],config_entity_1[_0x63ea8a(0xa9)],cramiPackage_entity_1[_0x63ea8a(0xbf)],whiteList_entity_1['WhiteListEntity'],userBalance_entity_1[_0x63ea8a(0xba)],salesUsers_entity_1[_0x63ea8a(0xb2)],fingerprint_entity_1[_0x63ea8a(0xc5)],chatLog_entity_1[_0x63ea8a(0xab)],chatGroup_entity_1['ChatGroupEntity'],midjourney_entity_1['MidjourneyEntity']])],'controllers':[user_controller_1['UserController']],'providers':[user_service_1['UserService'],verification_service_1[_0x63ea8a(0xbc)],userBalance_service_1[_0x63ea8a(0xa7)],redisCache_service_1[_0x63ea8a(0xa5)]],'exports':[user_service_1[_0x63ea8a(0xa1)]]})],UserModule),exports[_0x63ea8a(0x94)]=UserModule;