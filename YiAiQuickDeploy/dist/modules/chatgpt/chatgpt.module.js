'use strict';const _0x57aec4=_0x3f74;(function(_0x5f25d0,_0x13aafc){const _0xfc3062=_0x3f74,_0x53c211=_0x5f25d0();while(!![]){try{const _0x4dd566=-parseInt(_0xfc3062(0x157))/0x1*(-parseInt(_0xfc3062(0x169))/0x2)+-parseInt(_0xfc3062(0x15a))/0x3+parseInt(_0xfc3062(0x180))/0x4+-parseInt(_0xfc3062(0x175))/0x5*(parseInt(_0xfc3062(0x15b))/0x6)+parseInt(_0xfc3062(0x168))/0x7+-parseInt(_0xfc3062(0x155))/0x8*(parseInt(_0xfc3062(0x159))/0x9)+parseInt(_0xfc3062(0x171))/0xa;if(_0x4dd566===_0x13aafc)break;else _0x53c211['push'](_0x53c211['shift']());}catch(_0x31e81e){_0x53c211['push'](_0x53c211['shift']());}}}(_0x5023,0xcd901));var __decorate=this&&this[_0x57aec4(0x15f)]||function(_0x1ea14b,_0x912e8c,_0xbb2ef9,_0x791aab){const _0x1f7a15=_0x57aec4;var _0x31ea69=arguments['length'],_0xe01015=_0x31ea69<0x3?_0x912e8c:_0x791aab===null?_0x791aab=Object['getOwnPropertyDescriptor'](_0x912e8c,_0xbb2ef9):_0x791aab,_0x5a3bad;if(typeof Reflect===_0x1f7a15(0x16d)&&typeof Reflect[_0x1f7a15(0x161)]===_0x1f7a15(0x17f))_0xe01015=Reflect[_0x1f7a15(0x161)](_0x1ea14b,_0x912e8c,_0xbb2ef9,_0x791aab);else{for(var _0x52d2e6=_0x1ea14b[_0x1f7a15(0x176)]-0x1;_0x52d2e6>=0x0;_0x52d2e6--)if(_0x5a3bad=_0x1ea14b[_0x52d2e6])_0xe01015=(_0x31ea69<0x3?_0x5a3bad(_0xe01015):_0x31ea69>0x3?_0x5a3bad(_0x912e8c,_0xbb2ef9,_0xe01015):_0x5a3bad(_0x912e8c,_0xbb2ef9))||_0xe01015;}return _0x31ea69>0x3&&_0xe01015&&Object['defineProperty'](_0x912e8c,_0xbb2ef9,_0xe01015),_0xe01015;};Object[_0x57aec4(0x178)](exports,_0x57aec4(0x16a),{'value':!![]}),exports['ChatgptModule']=void 0x0;const common_1=require(_0x57aec4(0x16f)),chatgpt_controller_1=require(_0x57aec4(0x174)),chatgpt_service_1=require(_0x57aec4(0x14a)),userBalance_service_1=require(_0x57aec4(0x183)),typeorm_1=require('@nestjs/typeorm'),balance_entity_1=require(_0x57aec4(0x16b)),user_service_1=require(_0x57aec4(0x17b)),user_entity_1=require(_0x57aec4(0x14e)),verification_service_1=require(_0x57aec4(0x14f)),verifycation_entity_1=require(_0x57aec4(0x170)),chatLog_service_1=require('../chatLog/chatLog.service'),chatLog_entity_1=require('../chatLog/chatLog.entity'),accountLog_entity_1=require('../userBalance/accountLog.entity'),config_entity_1=require(_0x57aec4(0x156)),gptkeys_entity_1=require(_0x57aec4(0x15e)),whiteList_entity_1=require(_0x57aec4(0x177)),cramiPackage_entity_1=require(_0x57aec4(0x181)),chatGroup_entity_1=require('../chatGroup/chatGroup.entity'),app_entity_1=require(_0x57aec4(0x16c)),userBalance_entity_1=require('../userBalance/userBalance.entity'),salesUsers_entity_1=require(_0x57aec4(0x153)),redisCache_service_1=require(_0x57aec4(0x173)),fingerprint_entity_1=require(_0x57aec4(0x14b)),midjourney_entity_1=require('../midjourney/midjourney.entity'),chatBoxType_entity_1=require('./chatBoxType.entity'),chatBox_entity_1=require('./chatBox.entity'),chatPreType_entity_1=require(_0x57aec4(0x162)),chatPre_entity_1=require(_0x57aec4(0x17e));function _0x3f74(_0x19c875,_0xa86360){const _0x5023b9=_0x5023();return _0x3f74=function(_0x3f74c3,_0x304052){_0x3f74c3=_0x3f74c3-0x146;let _0x401d75=_0x5023b9[_0x3f74c3];return _0x401d75;},_0x3f74(_0x19c875,_0xa86360);}function _0x5023(){const _0x1824fe=['5035163wfkhwF','99170HEspiK','__esModule','../userBalance/balance.entity','../app/app.entity','object','forFeature','@nestjs/common','../verification/verifycation.entity','14333610kVulMu','GptKeysEntity','../redisCache/redisCache.service','./chatgpt.controller','6282785TZNFLK','length','./whiteList.entity','defineProperty','FingerprintLogEntity','UserBalanceEntity','../user/user.service','AccountLogEntity','UserEntity','./chatPre.entity','function','89232HloDck','../crami/cramiPackage.entity','VerificationService','../userBalance/userBalance.service','ChatPreEntity','VerifycationEntity','ChatGroupEntity','UserBalanceService','RedisCacheService','BalanceEntity','./chatgpt.service','../userBalance/fingerprint.entity','TypeOrmModule','ConfigEntity','../user/user.entity','../verification/verification.service','CramiPackageEntity','ChatLogEntity','ChatBoxTypeEntity','../sales/salesUsers.entity','Module','24vmnjZw','../globalConfig/config.entity','27gJAvoo','SalesUsersEntity','2759850rcNkTs','1485843dFLWbd','6DjNIpk','ChatBoxEntity','ChatgptService','./gptkeys.entity','__decorate','ChatPreTypeEntity','decorate','./chatPreType.entity','ChatLogService','AppEntity','UserService','WhiteListEntity','ChatgptModule'];_0x5023=function(){return _0x1824fe;};return _0x5023();}let ChatgptModule=class ChatgptModule{};ChatgptModule=__decorate([(0x0,common_1['Global'])(),(0x0,common_1[_0x57aec4(0x154)])({'imports':[typeorm_1[_0x57aec4(0x14c)][_0x57aec4(0x16e)]([balance_entity_1[_0x57aec4(0x149)],user_entity_1['UserEntity'],verifycation_entity_1[_0x57aec4(0x185)],chatLog_entity_1[_0x57aec4(0x151)],accountLog_entity_1[_0x57aec4(0x17c)],config_entity_1[_0x57aec4(0x14d)],gptkeys_entity_1[_0x57aec4(0x172)],whiteList_entity_1[_0x57aec4(0x166)],user_entity_1[_0x57aec4(0x17d)],cramiPackage_entity_1[_0x57aec4(0x150)],chatGroup_entity_1[_0x57aec4(0x146)],app_entity_1[_0x57aec4(0x164)],userBalance_entity_1[_0x57aec4(0x17a)],salesUsers_entity_1[_0x57aec4(0x158)],fingerprint_entity_1[_0x57aec4(0x179)],midjourney_entity_1['MidjourneyEntity'],chatBoxType_entity_1[_0x57aec4(0x152)],chatBox_entity_1[_0x57aec4(0x15c)],chatPreType_entity_1[_0x57aec4(0x160)],chatPre_entity_1[_0x57aec4(0x184)]])],'controllers':[chatgpt_controller_1['ChatgptController']],'providers':[chatgpt_service_1[_0x57aec4(0x15d)],userBalance_service_1[_0x57aec4(0x147)],user_service_1[_0x57aec4(0x165)],verification_service_1[_0x57aec4(0x182)],chatLog_service_1[_0x57aec4(0x163)],redisCache_service_1[_0x57aec4(0x148)]],'exports':[chatgpt_service_1['ChatgptService']]})],ChatgptModule),exports[_0x57aec4(0x167)]=ChatgptModule;