'use strict';const _0x2d592d=_0x2349;(function(_0x23f2c3,_0x4ebe97){const _0x43576f=_0x2349,_0x3c3d01=_0x23f2c3();while(!![]){try{const _0xe62938=-parseInt(_0x43576f(0x1c5))/0x1+parseInt(_0x43576f(0x1cd))/0x2*(parseInt(_0x43576f(0x1d2))/0x3)+-parseInt(_0x43576f(0x1a4))/0x4*(-parseInt(_0x43576f(0x1ce))/0x5)+parseInt(_0x43576f(0x1cb))/0x6+-parseInt(_0x43576f(0x1b9))/0x7+parseInt(_0x43576f(0x1c7))/0x8*(parseInt(_0x43576f(0x1ba))/0x9)+-parseInt(_0x43576f(0x1d0))/0xa;if(_0xe62938===_0x4ebe97)break;else _0x3c3d01['push'](_0x3c3d01['shift']());}catch(_0x4be6c7){_0x3c3d01['push'](_0x3c3d01['shift']());}}}(_0x2fe3,0xc1a0b));var __decorate=this&&this[_0x2d592d(0x1b4)]||function(_0x21d2d9,_0x1aaee1,_0x3e2838,_0x1a997b){const _0x16ab53=_0x2d592d;var _0x57aeca=arguments[_0x16ab53(0x1a5)],_0x3b101e=_0x57aeca<0x3?_0x1aaee1:_0x1a997b===null?_0x1a997b=Object['getOwnPropertyDescriptor'](_0x1aaee1,_0x3e2838):_0x1a997b,_0x27ad8c;if(typeof Reflect===_0x16ab53(0x1c3)&&typeof Reflect[_0x16ab53(0x1cc)]===_0x16ab53(0x1de))_0x3b101e=Reflect[_0x16ab53(0x1cc)](_0x21d2d9,_0x1aaee1,_0x3e2838,_0x1a997b);else{for(var _0x491f54=_0x21d2d9['length']-0x1;_0x491f54>=0x0;_0x491f54--)if(_0x27ad8c=_0x21d2d9[_0x491f54])_0x3b101e=(_0x57aeca<0x3?_0x27ad8c(_0x3b101e):_0x57aeca>0x3?_0x27ad8c(_0x1aaee1,_0x3e2838,_0x3b101e):_0x27ad8c(_0x1aaee1,_0x3e2838))||_0x3b101e;}return _0x57aeca>0x3&&_0x3b101e&&Object[_0x16ab53(0x1b1)](_0x1aaee1,_0x3e2838,_0x3b101e),_0x3b101e;},__metadata=this&&this['__metadata']||function(_0x2a0966,_0x58c6c2){const _0x48f94f=_0x2d592d;if(typeof Reflect===_0x48f94f(0x1c3)&&typeof Reflect[_0x48f94f(0x1bb)]===_0x48f94f(0x1de))return Reflect[_0x48f94f(0x1bb)](_0x2a0966,_0x58c6c2);},__param=this&&this[_0x2d592d(0x1a8)]||function(_0x313581,_0x477eb8){return function(_0x12db78,_0x4a7744){_0x477eb8(_0x12db78,_0x4a7744,_0x313581);};};Object[_0x2d592d(0x1b1)](exports,_0x2d592d(0x1a7),{'value':!![]}),exports[_0x2d592d(0x1ac)]=void 0x0;const swagger_1=require(_0x2d592d(0x1c8)),models_service_1=require(_0x2d592d(0x1c2)),common_1=require('@nestjs/common'),superAuth_guard_1=require(_0x2d592d(0x1c0)),setModel_dto_1=require(_0x2d592d(0x1b8)),queryModel_dto_1=require(_0x2d592d(0x1ad)),adminAuth_guard_1=require('../../common/auth/adminAuth.guard'),setModelType_dto_1=require(_0x2d592d(0x1d9)),queryModelType_dto_1=require(_0x2d592d(0x1b5));let ModelsController=class ModelsController{constructor(_0x41a84d){this['modelsService']=_0x41a84d;}['setModel'](_0xcb0ff4){const _0x5cbf2a=_0x2d592d;return this['modelsService'][_0x5cbf2a(0x1a6)](_0xcb0ff4);}[_0x2d592d(0x1c1)](_0x46fb3d){const _0x273da2=_0x2d592d;return this['modelsService'][_0x273da2(0x1c1)](_0x46fb3d);}[_0x2d592d(0x1cf)](_0x3e0407,_0x19b2cd){const _0x474ea6=_0x2d592d;return this['modelsService'][_0x474ea6(0x1cf)](_0x3e0407,_0x19b2cd);}[_0x2d592d(0x1b7)](){const _0x1dfac2=_0x2d592d;return this[_0x1dfac2(0x1da)][_0x1dfac2(0x1b7)]();}[_0x2d592d(0x1c4)](){const _0x313633=_0x2d592d;return this[_0x313633(0x1da)][_0x313633(0x1dd)]();}['queryModelType'](_0x3853f8){const _0x23c5d1=_0x2d592d;return this[_0x23c5d1(0x1da)]['queryModelType'](_0x3853f8);}[_0x2d592d(0x1b6)](_0x1c0b62){return this['modelsService']['setModelType'](_0x1c0b62);}[_0x2d592d(0x1b3)](_0xb3c44f){const _0x511ff7=_0x2d592d;return this[_0x511ff7(0x1da)]['delModelType'](_0xb3c44f);}};__decorate([(0x0,common_1[_0x2d592d(0x1a2)])(_0x2d592d(0x1a6)),(0x0,swagger_1[_0x2d592d(0x1d3)])({'summary':_0x2d592d(0x1a9)}),(0x0,common_1[_0x2d592d(0x1af)])(superAuth_guard_1['SuperAuthGuard']),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0x2d592d(0x1a1)])()),__metadata(_0x2d592d(0x1db),Function),__metadata(_0x2d592d(0x1aa),[setModel_dto_1[_0x2d592d(0x1a3)]]),__metadata(_0x2d592d(0x1be),void 0x0)],ModelsController[_0x2d592d(0x1d7)],'setModel',null),__decorate([(0x0,common_1[_0x2d592d(0x1a2)])(_0x2d592d(0x1c1)),(0x0,swagger_1[_0x2d592d(0x1d3)])({'summary':_0x2d592d(0x1bf)}),(0x0,common_1['UseGuards'])(superAuth_guard_1[_0x2d592d(0x1bc)]),(0x0,swagger_1[_0x2d592d(0x1ae)])(),__param(0x0,(0x0,common_1[_0x2d592d(0x1a1)])()),__metadata(_0x2d592d(0x1db),Function),__metadata(_0x2d592d(0x1aa),[Object]),__metadata(_0x2d592d(0x1be),void 0x0)],ModelsController[_0x2d592d(0x1d7)],'delModel',null),__decorate([(0x0,common_1['Get'])('query'),(0x0,swagger_1[_0x2d592d(0x1d3)])({'summary':_0x2d592d(0x1ab)}),(0x0,common_1[_0x2d592d(0x1af)])(adminAuth_guard_1[_0x2d592d(0x1c9)]),(0x0,swagger_1[_0x2d592d(0x1ae)])(),__param(0x0,(0x0,common_1[_0x2d592d(0x1ca)])()),__param(0x1,(0x0,common_1[_0x2d592d(0x1df)])()),__metadata(_0x2d592d(0x1db),Function),__metadata('design:paramtypes',[Request,queryModel_dto_1[_0x2d592d(0x1c6)]]),__metadata(_0x2d592d(0x1be),void 0x0)],ModelsController['prototype'],_0x2d592d(0x1cf),null),__decorate([(0x0,common_1['Get'])(_0x2d592d(0x1b0)),(0x0,swagger_1[_0x2d592d(0x1d3)])({'summary':'客户端查询当前所有可以使用的模型'}),__metadata(_0x2d592d(0x1db),Function),__metadata('design:paramtypes',[]),__metadata('design:returntype',void 0x0)],ModelsController[_0x2d592d(0x1d7)],_0x2d592d(0x1b7),null),__decorate([(0x0,common_1[_0x2d592d(0x1d8)])('baseConfig'),(0x0,swagger_1['ApiOperation'])({'summary':'客户端查询当前已经配置模型的基础配置'}),__metadata('design:type',Function),__metadata(_0x2d592d(0x1aa),[]),__metadata(_0x2d592d(0x1be),void 0x0)],ModelsController[_0x2d592d(0x1d7)],'baseConfig',null),__decorate([(0x0,common_1[_0x2d592d(0x1d8)])(_0x2d592d(0x1d1)),(0x0,swagger_1[_0x2d592d(0x1d3)])({'summary':'查询模型类型'}),__param(0x0,(0x0,common_1[_0x2d592d(0x1df)])()),__metadata(_0x2d592d(0x1db),Function),__metadata(_0x2d592d(0x1aa),[queryModelType_dto_1[_0x2d592d(0x1d5)]]),__metadata('design:returntype',void 0x0)],ModelsController[_0x2d592d(0x1d7)],_0x2d592d(0x1d1),null),__decorate([(0x0,common_1[_0x2d592d(0x1a2)])('setModelType'),(0x0,swagger_1[_0x2d592d(0x1d3)])({'summary':'创建修改模型类型'}),(0x0,common_1[_0x2d592d(0x1af)])(superAuth_guard_1['SuperAuthGuard']),(0x0,swagger_1[_0x2d592d(0x1ae)])(),__param(0x0,(0x0,common_1[_0x2d592d(0x1a1)])()),__metadata(_0x2d592d(0x1db),Function),__metadata(_0x2d592d(0x1aa),[setModelType_dto_1[_0x2d592d(0x1d4)]]),__metadata(_0x2d592d(0x1be),void 0x0)],ModelsController[_0x2d592d(0x1d7)],'setModelType',null),__decorate([(0x0,common_1[_0x2d592d(0x1a2)])(_0x2d592d(0x1b3)),(0x0,swagger_1[_0x2d592d(0x1d3)])({'summary':_0x2d592d(0x1dc)}),(0x0,common_1['UseGuards'])(superAuth_guard_1['SuperAuthGuard']),(0x0,swagger_1[_0x2d592d(0x1ae)])(),__param(0x0,(0x0,common_1['Body'])()),__metadata('design:type',Function),__metadata(_0x2d592d(0x1aa),[Object]),__metadata(_0x2d592d(0x1be),void 0x0)],ModelsController[_0x2d592d(0x1d7)],_0x2d592d(0x1b3),null),ModelsController=__decorate([(0x0,common_1[_0x2d592d(0x1b2)])(_0x2d592d(0x1d6)),__metadata(_0x2d592d(0x1aa),[models_service_1[_0x2d592d(0x1bd)]])],ModelsController),exports[_0x2d592d(0x1ac)]=ModelsController;function _0x2349(_0x3a118f,_0x57f637){const _0x2fe325=_0x2fe3();return _0x2349=function(_0x234990,_0x2dfd4d){_0x234990=_0x234990-0x1a1;let _0x26d970=_0x2fe325[_0x234990];return _0x26d970;},_0x2349(_0x3a118f,_0x57f637);}function _0x2fe3(){const _0x20d437=['object','baseConfig','1234926pdihkE','QueryModelDto','552ScVgvY','@nestjs/swagger','AdminAuthGuard','Req','5878770bmwsqU','decorate','94ineSsD','5bOOCgN','queryModels','10645020ReXPjQ','queryModelType','26670TSKInk','ApiOperation','SetModelTypeDto','QueryModelTypeDto','models','prototype','Get','./dto/setModelType.dto','modelsService','design:type','删除模型类型','getBaseConfig','function','Query','Body','Post','SetModelDto','5734276EBDsrm','length','setModel','__esModule','__param','设置模型','design:paramtypes','管理端查询模型列表','ModelsController','./dto/queryModel.dto','ApiBearerAuth','UseGuards','list','defineProperty','Controller','delModelType','__decorate','./dto/queryModelType.dto','setModelType','modelsList','./dto/setModel.dto','394401caHzNK','41436KZCGUM','metadata','SuperAuthGuard','ModelsService','design:returntype','删除模型','../../common/auth/superAuth.guard','delModel','./models.service'];_0x2fe3=function(){return _0x20d437;};return _0x2fe3();}