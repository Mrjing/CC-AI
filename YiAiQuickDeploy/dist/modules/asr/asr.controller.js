'use strict';function _0x12b7(_0x340c62,_0x4fb32e){const _0x2eea3b=_0x2eea();return _0x12b7=function(_0x12b76f,_0x1d66b9){_0x12b76f=_0x12b76f-0x176;let _0x30bb0d=_0x2eea3b[_0x12b76f];return _0x30bb0d;},_0x12b7(_0x340c62,_0x4fb32e);}const _0x1186dd=_0x12b7;(function(_0x4325f2,_0x59aa21){const _0x5ec1e2=_0x12b7,_0x3f6c97=_0x4325f2();while(!![]){try{const _0x393488=-parseInt(_0x5ec1e2(0x190))/0x1*(-parseInt(_0x5ec1e2(0x1a8))/0x2)+parseInt(_0x5ec1e2(0x1b0))/0x3+-parseInt(_0x5ec1e2(0x1ad))/0x4*(parseInt(_0x5ec1e2(0x177))/0x5)+-parseInt(_0x5ec1e2(0x1a5))/0x6+-parseInt(_0x5ec1e2(0x183))/0x7*(parseInt(_0x5ec1e2(0x1ab))/0x8)+parseInt(_0x5ec1e2(0x188))/0x9+parseInt(_0x5ec1e2(0x19e))/0xa*(parseInt(_0x5ec1e2(0x17d))/0xb);if(_0x393488===_0x59aa21)break;else _0x3f6c97['push'](_0x3f6c97['shift']());}catch(_0x6dc671){_0x3f6c97['push'](_0x3f6c97['shift']());}}}(_0x2eea,0xa28bd));var __decorate=this&&this['__decorate']||function(_0x345a6a,_0x18f933,_0x530bc2,_0x4d6300){const _0x4ea2aa=_0x12b7;var _0x5cdfa6=arguments[_0x4ea2aa(0x179)],_0x5f08b2=_0x5cdfa6<0x3?_0x18f933:_0x4d6300===null?_0x4d6300=Object['getOwnPropertyDescriptor'](_0x18f933,_0x530bc2):_0x4d6300,_0x5a48a4;if(typeof Reflect===_0x4ea2aa(0x17a)&&typeof Reflect['decorate']==='function')_0x5f08b2=Reflect[_0x4ea2aa(0x17f)](_0x345a6a,_0x18f933,_0x530bc2,_0x4d6300);else{for(var _0x58b781=_0x345a6a[_0x4ea2aa(0x179)]-0x1;_0x58b781>=0x0;_0x58b781--)if(_0x5a48a4=_0x345a6a[_0x58b781])_0x5f08b2=(_0x5cdfa6<0x3?_0x5a48a4(_0x5f08b2):_0x5cdfa6>0x3?_0x5a48a4(_0x18f933,_0x530bc2,_0x5f08b2):_0x5a48a4(_0x18f933,_0x530bc2))||_0x5f08b2;}return _0x5cdfa6>0x3&&_0x5f08b2&&Object['defineProperty'](_0x18f933,_0x530bc2,_0x5f08b2),_0x5f08b2;},__metadata=this&&this['__metadata']||function(_0xccc259,_0x2ee062){const _0x3ca58a=_0x12b7;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x3ca58a(0x1a9))return Reflect[_0x3ca58a(0x181)](_0xccc259,_0x2ee062);},__param=this&&this[_0x1186dd(0x1ac)]||function(_0x5d8f66,_0x2adc88){return function(_0x424e3c,_0x274342){_0x2adc88(_0x424e3c,_0x274342,_0x5d8f66);};};function _0x2eea(){const _0x389f29=['356jiUDsc','function','获取录音识别任务状态','2600fRrHPJ','__param','3504784XRtoXK','data','getConfigs','3982974aNZSKs','onModuleInit','Post','5jKYuzN','HttpException','length','object','defineProperty','DescribeTaskStatus','11qnJCWk','message','decorate','AsrRecordDto','metadata','log','16639ppJrkj','res','Body','DescribeTaskStatus\x20e','@nestjs/common','8050635cNVJqs','Controller','design:returntype','ApiOperation','asrIns','__esModule','TaskId','createRecTask\x20e','2435kVAeAj','./dto/asrRecordTask.dto','ApiBearerAuth','asr','创建录音识别任务','qcloudSecretKey','tencentcloud-sdk-nodejs-asr','globalConfigService','@nestjs/swagger','ApiTags','创建录音识别任务失败','asr.tencentcloudapi.com','design:type','GlobalConfigService','8086310hkWTCl','16k_zh','getRecTaskStatus','createRecTask','prototype','AsrController','design:paramtypes','6898344hBHodb','CreateRecTask','获取录音识别任务状态失败'];_0x2eea=function(){return _0x389f29;};return _0x2eea();}Object[_0x1186dd(0x17b)](exports,_0x1186dd(0x18d),{'value':!![]}),exports[_0x1186dd(0x1a3)]=void 0x0;const common_1=require(_0x1186dd(0x187)),swagger_1=require(_0x1186dd(0x198)),globalConfig_service_1=require('../globalConfig/globalConfig.service'),asrRecord_dto_1=require('./dto/asrRecord.dto'),asrRecordTask_dto_1=require(_0x1186dd(0x191)),tencentcloud=require(_0x1186dd(0x196)),AsrClient=tencentcloud['asr']['v20190614']['Client'];let AsrController=class AsrController{constructor(_0x1c50a9){const _0x5d5601=_0x1186dd;this[_0x5d5601(0x197)]=_0x1c50a9;}async[_0x1186dd(0x1b1)](){const _0x435c48=_0x1186dd,{qcloudSecretId:_0x48fb6e,qcloudSecretKey:_0x3cb151}=await this['globalConfigService'][_0x435c48(0x1af)](['qcloudSecretId',_0x435c48(0x195)]),_0x179efd={'credential':{'secretId':_0x48fb6e,'secretKey':_0x3cb151},'region':'','profile':{'httpProfile':{'endpoint':_0x435c48(0x19b)}}},_0x517a21=new AsrClient(_0x179efd);this[_0x435c48(0x18c)]=_0x517a21;}async['createRecTask'](_0x27a582){const _0x293f96=_0x1186dd,_0x5a3f0e={'EngineModelType':_0x293f96(0x19f),'ChannelNum':0x1,'ResTextFormat':0x3,'SourceType':0x1,'Data':_0x27a582[_0x293f96(0x1ae)]};try{const _0x5d9c25=await this[_0x293f96(0x18c)][_0x293f96(0x1a6)](_0x5a3f0e);return console[_0x293f96(0x182)](_0x293f96(0x184),_0x5d9c25),_0x5d9c25;}catch(_0x591de1){console[_0x293f96(0x182)](_0x293f96(0x18f),_0x591de1);throw new common_1[(_0x293f96(0x178))]({'desc':_0x293f96(0x19a),'message':_0x591de1[_0x293f96(0x17e)]},0x1f4);}}async['getRecTaskStatus'](_0x2f3ad4){const _0x3aa5a1=_0x1186dd;try{const _0x53e865={'TaskId':_0x2f3ad4[_0x3aa5a1(0x18e)]},_0x2954a3=await this['asrIns'][_0x3aa5a1(0x17c)](_0x53e865);return console[_0x3aa5a1(0x182)](_0x3aa5a1(0x184),_0x2954a3),_0x2954a3;}catch(_0x52911a){console[_0x3aa5a1(0x182)](_0x3aa5a1(0x186),_0x52911a);throw new common_1[(_0x3aa5a1(0x178))]({'desc':_0x3aa5a1(0x1a7),'message':_0x52911a[_0x3aa5a1(0x17e)]},0x1f4);}}};__decorate([(0x0,swagger_1[_0x1186dd(0x18b)])({'summary':_0x1186dd(0x194)}),(0x0,common_1[_0x1186dd(0x176)])(_0x1186dd(0x1a1)),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0x1186dd(0x185)])()),__metadata(_0x1186dd(0x19c),Function),__metadata(_0x1186dd(0x1a4),[asrRecord_dto_1[_0x1186dd(0x180)]]),__metadata(_0x1186dd(0x18a),Promise)],AsrController[_0x1186dd(0x1a2)],_0x1186dd(0x1a1),null),__decorate([(0x0,swagger_1[_0x1186dd(0x18b)])({'summary':_0x1186dd(0x1aa)}),(0x0,common_1['Post'])(_0x1186dd(0x1a0)),(0x0,swagger_1[_0x1186dd(0x192)])(),__param(0x0,(0x0,common_1[_0x1186dd(0x185)])()),__metadata(_0x1186dd(0x19c),Function),__metadata(_0x1186dd(0x1a4),[asrRecordTask_dto_1['AsrRecordTaskDto']]),__metadata(_0x1186dd(0x18a),Promise)],AsrController[_0x1186dd(0x1a2)],_0x1186dd(0x1a0),null),AsrController=__decorate([(0x0,swagger_1[_0x1186dd(0x199)])(_0x1186dd(0x193)),(0x0,common_1[_0x1186dd(0x189)])('asr'),__metadata('design:paramtypes',[globalConfig_service_1[_0x1186dd(0x19d)]])],AsrController),exports['AsrController']=AsrController;