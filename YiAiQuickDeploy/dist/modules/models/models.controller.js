'use strict';const _0x13968c=_0xf62b;function _0x3794(){const _0x4d75da=['删除模型','3001470SKpXmu','__metadata','getOwnPropertyDescriptor','SetModelTypeDto','./dto/setModelType.dto','Body','5957470DDJHxh','list','design:returntype','ModelsController','查询模型类型','8NiKFYG','ApiOperation','baseConfig','__decorate','__esModule','UseGuards','delModelType','客户端查询当前所有可以使用的模型','design:paramtypes','QueryModelDto','2202006nPYfUe','2309498ZMkJcf','./dto/setModel.dto','AdminAuthGuard','length','modelsList','@nestjs/swagger','7962808zhEfdI','Query','QueryModelTypeDto','setModelType','2315352FpKBfc','SuperAuthGuard','./dto/queryModelType.dto','getBaseConfig','design:type','modelsService','../../common/auth/adminAuth.guard','客户端查询当前已经配置模型的基础配置','Post','object','__param','function','Get','queryModels','delModel','query','7Offiaf','prototype','queryModelType','1698703alMCXs','metadata','Controller','@nestjs/common','管理端查询模型列表','ApiBearerAuth','9gkNanm','setModel','defineProperty','decorate'];_0x3794=function(){return _0x4d75da;};return _0x3794();}(function(_0x320e6b,_0x4377e9){const _0x29058a=_0xf62b,_0x472038=_0x320e6b();while(!![]){try{const _0x5b0315=parseInt(_0x29058a(0x72))/0x1+-parseInt(_0x29058a(0x93))/0x2+parseInt(_0x29058a(0x9d))/0x3+-parseInt(_0x29058a(0x88))/0x4*(parseInt(_0x29058a(0x7d))/0x5)+-parseInt(_0x29058a(0x92))/0x6*(-parseInt(_0x29058a(0x6f))/0x7)+parseInt(_0x29058a(0x99))/0x8*(parseInt(_0x29058a(0x78))/0x9)+-parseInt(_0x29058a(0x83))/0xa;if(_0x5b0315===_0x4377e9)break;else _0x472038['push'](_0x472038['shift']());}catch(_0x9641d3){_0x472038['push'](_0x472038['shift']());}}}(_0x3794,0xd745b));var __decorate=this&&this[_0x13968c(0x8b)]||function(_0x3967f8,_0x2c1e6d,_0x2ad278,_0x7e39be){const _0x5542aa=_0x13968c;var _0x460a45=arguments['length'],_0x4483ee=_0x460a45<0x3?_0x2c1e6d:_0x7e39be===null?_0x7e39be=Object[_0x5542aa(0x7f)](_0x2c1e6d,_0x2ad278):_0x7e39be,_0x101c57;if(typeof Reflect===_0x5542aa(0x68)&&typeof Reflect[_0x5542aa(0x7b)]===_0x5542aa(0x6a))_0x4483ee=Reflect[_0x5542aa(0x7b)](_0x3967f8,_0x2c1e6d,_0x2ad278,_0x7e39be);else{for(var _0x5e9f69=_0x3967f8[_0x5542aa(0x96)]-0x1;_0x5e9f69>=0x0;_0x5e9f69--)if(_0x101c57=_0x3967f8[_0x5e9f69])_0x4483ee=(_0x460a45<0x3?_0x101c57(_0x4483ee):_0x460a45>0x3?_0x101c57(_0x2c1e6d,_0x2ad278,_0x4483ee):_0x101c57(_0x2c1e6d,_0x2ad278))||_0x4483ee;}return _0x460a45>0x3&&_0x4483ee&&Object[_0x5542aa(0x7a)](_0x2c1e6d,_0x2ad278,_0x4483ee),_0x4483ee;},__metadata=this&&this[_0x13968c(0x7e)]||function(_0x35e65c,_0x2c29ca){const _0x260c1c=_0x13968c;if(typeof Reflect===_0x260c1c(0x68)&&typeof Reflect[_0x260c1c(0x73)]===_0x260c1c(0x6a))return Reflect[_0x260c1c(0x73)](_0x35e65c,_0x2c29ca);},__param=this&&this[_0x13968c(0x69)]||function(_0x5d1a5c,_0x3af5ce){return function(_0x2a7f4d,_0x12ea32){_0x3af5ce(_0x2a7f4d,_0x12ea32,_0x5d1a5c);};};Object[_0x13968c(0x7a)](exports,_0x13968c(0x8c),{'value':!![]}),exports[_0x13968c(0x86)]=void 0x0;const swagger_1=require(_0x13968c(0x98)),models_service_1=require('./models.service'),common_1=require(_0x13968c(0x75)),superAuth_guard_1=require('../../common/auth/superAuth.guard'),setModel_dto_1=require(_0x13968c(0x94)),queryModel_dto_1=require('./dto/queryModel.dto'),adminAuth_guard_1=require(_0x13968c(0xa3)),setModelType_dto_1=require(_0x13968c(0x81)),queryModelType_dto_1=require(_0x13968c(0x9f));let ModelsController=class ModelsController{constructor(_0x3c7777){this['modelsService']=_0x3c7777;}['setModel'](_0xd78fb5){const _0x25a317=_0x13968c;return this[_0x25a317(0xa2)][_0x25a317(0x79)](_0xd78fb5);}[_0x13968c(0x6d)](_0x3b5506){const _0x11253b=_0x13968c;return this[_0x11253b(0xa2)][_0x11253b(0x6d)](_0x3b5506);}[_0x13968c(0x6c)](_0x3626b1,_0x44a434){const _0x29bef6=_0x13968c;return this[_0x29bef6(0xa2)][_0x29bef6(0x6c)](_0x3626b1,_0x44a434);}[_0x13968c(0x97)](){const _0x543237=_0x13968c;return this['modelsService'][_0x543237(0x97)]();}[_0x13968c(0x8a)](){const _0x41f5c9=_0x13968c;return this[_0x41f5c9(0xa2)][_0x41f5c9(0xa0)]();}[_0x13968c(0x71)](_0x4357ef){const _0x38ed62=_0x13968c;return this[_0x38ed62(0xa2)][_0x38ed62(0x71)](_0x4357ef);}['setModelType'](_0x200d03){const _0x5390f0=_0x13968c;return this[_0x5390f0(0xa2)]['setModelType'](_0x200d03);}[_0x13968c(0x8e)](_0x34094e){const _0x580ebe=_0x13968c;return this[_0x580ebe(0xa2)]['delModelType'](_0x34094e);}};function _0xf62b(_0x153967,_0x2c9c2b){const _0x379430=_0x3794();return _0xf62b=function(_0xf62bb0,_0x2606c1){_0xf62bb0=_0xf62bb0-0x66;let _0x379ebf=_0x379430[_0xf62bb0];return _0x379ebf;},_0xf62b(_0x153967,_0x2c9c2b);}__decorate([(0x0,common_1['Post'])(_0x13968c(0x79)),(0x0,swagger_1[_0x13968c(0x89)])({'summary':'设置模型'}),(0x0,common_1[_0x13968c(0x8d)])(superAuth_guard_1[_0x13968c(0x9e)]),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0x13968c(0x82)])()),__metadata(_0x13968c(0xa1),Function),__metadata(_0x13968c(0x90),[setModel_dto_1['SetModelDto']]),__metadata(_0x13968c(0x85),void 0x0)],ModelsController[_0x13968c(0x70)],_0x13968c(0x79),null),__decorate([(0x0,common_1[_0x13968c(0x67)])('delModel'),(0x0,swagger_1[_0x13968c(0x89)])({'summary':_0x13968c(0x7c)}),(0x0,common_1[_0x13968c(0x8d)])(superAuth_guard_1['SuperAuthGuard']),(0x0,swagger_1[_0x13968c(0x77)])(),__param(0x0,(0x0,common_1[_0x13968c(0x82)])()),__metadata(_0x13968c(0xa1),Function),__metadata(_0x13968c(0x90),[Object]),__metadata(_0x13968c(0x85),void 0x0)],ModelsController[_0x13968c(0x70)],_0x13968c(0x6d),null),__decorate([(0x0,common_1[_0x13968c(0x6b)])(_0x13968c(0x6e)),(0x0,swagger_1[_0x13968c(0x89)])({'summary':_0x13968c(0x76)}),(0x0,common_1['UseGuards'])(adminAuth_guard_1[_0x13968c(0x95)]),(0x0,swagger_1[_0x13968c(0x77)])(),__param(0x0,(0x0,common_1['Req'])()),__param(0x1,(0x0,common_1[_0x13968c(0x9a)])()),__metadata('design:type',Function),__metadata('design:paramtypes',[Request,queryModel_dto_1[_0x13968c(0x91)]]),__metadata(_0x13968c(0x85),void 0x0)],ModelsController[_0x13968c(0x70)],'queryModels',null),__decorate([(0x0,common_1[_0x13968c(0x6b)])(_0x13968c(0x84)),(0x0,swagger_1['ApiOperation'])({'summary':_0x13968c(0x8f)}),__metadata(_0x13968c(0xa1),Function),__metadata(_0x13968c(0x90),[]),__metadata(_0x13968c(0x85),void 0x0)],ModelsController[_0x13968c(0x70)],_0x13968c(0x97),null),__decorate([(0x0,common_1['Get'])(_0x13968c(0x8a)),(0x0,swagger_1[_0x13968c(0x89)])({'summary':_0x13968c(0x66)}),__metadata(_0x13968c(0xa1),Function),__metadata('design:paramtypes',[]),__metadata(_0x13968c(0x85),void 0x0)],ModelsController[_0x13968c(0x70)],_0x13968c(0x8a),null),__decorate([(0x0,common_1['Get'])('queryModelType'),(0x0,swagger_1[_0x13968c(0x89)])({'summary':_0x13968c(0x87)}),__param(0x0,(0x0,common_1[_0x13968c(0x9a)])()),__metadata(_0x13968c(0xa1),Function),__metadata('design:paramtypes',[queryModelType_dto_1[_0x13968c(0x9b)]]),__metadata(_0x13968c(0x85),void 0x0)],ModelsController[_0x13968c(0x70)],'queryModelType',null),__decorate([(0x0,common_1['Post'])(_0x13968c(0x9c)),(0x0,swagger_1[_0x13968c(0x89)])({'summary':'创建修改模型类型'}),(0x0,common_1[_0x13968c(0x8d)])(superAuth_guard_1[_0x13968c(0x9e)]),(0x0,swagger_1[_0x13968c(0x77)])(),__param(0x0,(0x0,common_1[_0x13968c(0x82)])()),__metadata(_0x13968c(0xa1),Function),__metadata(_0x13968c(0x90),[setModelType_dto_1[_0x13968c(0x80)]]),__metadata(_0x13968c(0x85),void 0x0)],ModelsController[_0x13968c(0x70)],_0x13968c(0x9c),null),__decorate([(0x0,common_1[_0x13968c(0x67)])(_0x13968c(0x8e)),(0x0,swagger_1['ApiOperation'])({'summary':'删除模型类型'}),(0x0,common_1[_0x13968c(0x8d)])(superAuth_guard_1['SuperAuthGuard']),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0x13968c(0x82)])()),__metadata('design:type',Function),__metadata(_0x13968c(0x90),[Object]),__metadata('design:returntype',void 0x0)],ModelsController[_0x13968c(0x70)],'delModelType',null),ModelsController=__decorate([(0x0,common_1[_0x13968c(0x74)])('models'),__metadata(_0x13968c(0x90),[models_service_1['ModelsService']])],ModelsController),exports['ModelsController']=ModelsController;