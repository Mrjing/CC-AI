'use strict';const _0x5112e5=_0x365b;(function(_0x5caccb,_0xbcf1ad){const _0x47ac86=_0x365b,_0x32c12d=_0x5caccb();while(!![]){try{const _0x1f5593=-parseInt(_0x47ac86(0xf1))/0x1*(-parseInt(_0x47ac86(0x100))/0x2)+-parseInt(_0x47ac86(0x135))/0x3*(-parseInt(_0x47ac86(0x12e))/0x4)+parseInt(_0x47ac86(0x121))/0x5+parseInt(_0x47ac86(0x110))/0x6*(-parseInt(_0x47ac86(0x128))/0x7)+-parseInt(_0x47ac86(0x120))/0x8+parseInt(_0x47ac86(0x130))/0x9+-parseInt(_0x47ac86(0x10a))/0xa*(-parseInt(_0x47ac86(0x131))/0xb);if(_0x1f5593===_0xbcf1ad)break;else _0x32c12d['push'](_0x32c12d['shift']());}catch(_0x190ccf){_0x32c12d['push'](_0x32c12d['shift']());}}}(_0x2fc0,0xd4614));function _0x365b(_0x2e5f59,_0x5cea42){const _0x2fc0bb=_0x2fc0();return _0x365b=function(_0x365ba1,_0x185a30){_0x365ba1=_0x365ba1-0xed;let _0x26e15b=_0x2fc0bb[_0x365ba1];return _0x26e15b;},_0x365b(_0x2e5f59,_0x5cea42);}var __decorate=this&&this['__decorate']||function(_0x2d0904,_0xf0bf85,_0x2d01a0,_0x4d6fb6){const _0x5c28f2=_0x365b;var _0x496846=arguments[_0x5c28f2(0x11a)],_0x21b5ec=_0x496846<0x3?_0xf0bf85:_0x4d6fb6===null?_0x4d6fb6=Object[_0x5c28f2(0x114)](_0xf0bf85,_0x2d01a0):_0x4d6fb6,_0x2a1e22;if(typeof Reflect===_0x5c28f2(0x116)&&typeof Reflect[_0x5c28f2(0x12a)]===_0x5c28f2(0x11e))_0x21b5ec=Reflect['decorate'](_0x2d0904,_0xf0bf85,_0x2d01a0,_0x4d6fb6);else{for(var _0xb05a71=_0x2d0904['length']-0x1;_0xb05a71>=0x0;_0xb05a71--)if(_0x2a1e22=_0x2d0904[_0xb05a71])_0x21b5ec=(_0x496846<0x3?_0x2a1e22(_0x21b5ec):_0x496846>0x3?_0x2a1e22(_0xf0bf85,_0x2d01a0,_0x21b5ec):_0x2a1e22(_0xf0bf85,_0x2d01a0))||_0x21b5ec;}return _0x496846>0x3&&_0x21b5ec&&Object[_0x5c28f2(0x126)](_0xf0bf85,_0x2d01a0,_0x21b5ec),_0x21b5ec;},__metadata=this&&this[_0x5112e5(0x101)]||function(_0x3d3cd6,_0x7d7907){const _0x11cd8a=_0x5112e5;if(typeof Reflect===_0x11cd8a(0x116)&&typeof Reflect[_0x11cd8a(0x10e)]==='function')return Reflect[_0x11cd8a(0x10e)](_0x3d3cd6,_0x7d7907);},__param=this&&this['__param']||function(_0x27f5b3,_0x247e03){return function(_0x4c5663,_0x1e60fc){_0x247e03(_0x4c5663,_0x1e60fc,_0x27f5b3);};};Object[_0x5112e5(0x126)](exports,_0x5112e5(0x119),{'value':!![]}),exports[_0x5112e5(0x11b)]=void 0x0;const globalConfig_service_1=require('../globalConfig/globalConfig.service'),status_constant_1=require(_0x5112e5(0xed)),typeorm_1=require(_0x5112e5(0x123)),typeorm_2=require(_0x5112e5(0x10c)),verifycation_entity_1=require(_0x5112e5(0x108)),common_1=require(_0x5112e5(0xef)),utils_1=require('../../common/utils'),redisCache_service_1=require(_0x5112e5(0x10b)),smsSDK=require(_0x5112e5(0xf0)),Core=require('@alicloud/pop-core'),smsClient=smsSDK[_0x5112e5(0xfb)][_0x5112e5(0x132)][_0x5112e5(0x111)];let VerificationService=class VerificationService{constructor(_0x18f411,_0x17fcdd,_0x4c4ff9){const _0x15f189=_0x5112e5;this[_0x15f189(0xf6)]=_0x18f411,this[_0x15f189(0x113)]=_0x17fcdd,this[_0x15f189(0xf9)]=_0x4c4ff9;}async[_0x5112e5(0x103)](_0x327686,_0x257bec,_0x25fba0=0x1e*0x3c){const _0x4097ed=_0x5112e5,_0x404d47=await this[_0x4097ed(0xf6)][_0x4097ed(0x115)]({'where':{'userId':_0x327686['id'],'type':_0x257bec},'order':{'createdAt':_0x4097ed(0x107)}});if(_0x404d47&&_0x404d47['createdAt']['getTime']()+0x1*0x3c*0x3e8>Date[_0x4097ed(0xf2)]()){const _0x5eef48=Math[_0x4097ed(0x125)]((_0x404d47[_0x4097ed(0x12d)]['getTime']()+0x1*0x3c*0x3e8-Date['now']())/0x3e8);throw new common_1[(_0x4097ed(0x138))](_0x5eef48+'S内不得重新发送',common_1[_0x4097ed(0x137)][_0x4097ed(0x10f)]);}const _0x4c33c8=(0x0,utils_1[_0x4097ed(0xf4)])(),_0x1c5586=new Date(Date['now']()+_0x25fba0*0x3e8),{id:_0x248039,email:_0x27da0a}=_0x327686,_0x4c9879={'userId':_0x248039,'type':_0x257bec,'code':_0x4c33c8,'expiresAt':_0x1c5586,'email':_0x27da0a};return await this[_0x4097ed(0xf6)][_0x4097ed(0x102)](_0x4c9879);}async[_0x5112e5(0x12b)]({code:_0x31b0dc,id:_0x8a7353},_0x23a1a5){const _0x397e89=_0x5112e5,_0x3d7727=await this[_0x397e89(0xf6)]['findOne']({'where':{'id':_0x8a7353,'type':_0x23a1a5},'order':{'createdAt':'DESC'}});if(!_0x3d7727)throw new common_1[(_0x397e89(0x138))](_0x397e89(0x13b),common_1[_0x397e89(0x137)][_0x397e89(0x10f)]);if(_0x3d7727[_0x397e89(0xf8)]===status_constant_1['VerificationUseStatusEnum'][_0x397e89(0x118)])throw new common_1[(_0x397e89(0x138))]('当前验证码已被使用！',common_1[_0x397e89(0x137)][_0x397e89(0x10f)]);else _0x3d7727['used']=status_constant_1[_0x397e89(0xfd)][_0x397e89(0x118)],await this[_0x397e89(0xf6)][_0x397e89(0x11c)]({'id':_0x8a7353},_0x3d7727);if(Number(_0x3d7727['code'])!==Number(_0x31b0dc))throw new common_1[(_0x397e89(0x138))](_0x397e89(0x136),common_1[_0x397e89(0x137)][_0x397e89(0x10f)]);if(_0x3d7727[_0x397e89(0x109)]<new Date())throw new common_1[(_0x397e89(0x138))]('验证码已过期',common_1[_0x397e89(0x137)][_0x397e89(0x10f)]);return _0x3d7727;}async['verifyCaptcha'](_0x429845){const _0x2d7a44=_0x5112e5,{captchaId:_0x576f41,captchaCode:_0x41bf12}=_0x429845,_0x152260=await this[_0x2d7a44(0x113)][_0x2d7a44(0xff)](),_0x595c4b=_0x152260+_0x2d7a44(0xee)+_0x576f41,_0x5446d4=await this[_0x2d7a44(0xf9)][_0x2d7a44(0x12c)]({'key':_0x595c4b});await this[_0x2d7a44(0xf9)][_0x2d7a44(0x11f)]({'key':_0x595c4b});if(!_0x5446d4)throw new common_1['HttpException'](_0x2d7a44(0x134),common_1[_0x2d7a44(0x137)][_0x2d7a44(0x10f)]);if(!_0x5446d4||_0x5446d4!==_0x41bf12)throw new common_1['HttpException'](_0x2d7a44(0x105),common_1[_0x2d7a44(0x137)][_0x2d7a44(0x10f)]);}async[_0x5112e5(0xf7)](_0x26844e){const _0x3364b3=_0x5112e5;var _0x43c69e;const {accessKeyId:_0x27a515,accessKeySecret:_0x1e2fcc,SignName:_0x19c732,TemplateCode:_0x508722}=await this['globalConfigService'][_0x3364b3(0x127)](),{phone:_0x550bde,code:_0x3c8a4c}=_0x26844e;if(!_0x550bde||!_0x3c8a4c)throw new common_1[(_0x3364b3(0x138))]('确实必要参数错误！',common_1['HttpStatus'][_0x3364b3(0x10f)]);const _0x2e640e=new Core({'accessKeyId':_0x27a515,'accessKeySecret':_0x1e2fcc,'endpoint':_0x3364b3(0x10d),'apiVersion':_0x3364b3(0x117)}),_0x22e895={'PhoneNumbers':_0x550bde,'SignName':_0x19c732,'TemplateCode':_0x508722,'TemplateParam':JSON['stringify']({'code':_0x3c8a4c})},_0x10a7c9={'method':_0x3364b3(0x129),'formatParams':![]};try{const _0x1f72f9=await _0x2e640e['request']('SendSms',_0x22e895,_0x10a7c9);if(_0x1f72f9[_0x3364b3(0x11d)]==='OK')return!![];else throw new common_1[(_0x3364b3(0x138))](_0x1f72f9[_0x3364b3(0x112)]||_0x3364b3(0xf5),common_1['HttpStatus'][_0x3364b3(0x10f)]);}catch(_0x3d5668){throw new common_1[(_0x3364b3(0x138))](((_0x43c69e=_0x3d5668===null||_0x3d5668===void 0x0?void 0x0:_0x3d5668[_0x3364b3(0xfa)])===null||_0x43c69e===void 0x0?void 0x0:_0x43c69e[_0x3364b3(0x112)])||_0x3364b3(0xf5),common_1[_0x3364b3(0x137)][_0x3364b3(0x10f)]);}}async[_0x5112e5(0xfc)](_0xfaf485){const _0x3c77a8=_0x5112e5;var _0x43aeb9;const {secretId:_0x7c1fd0,secretKey:_0x451751,signName:_0x124af7,templateId:_0x14e467,sdkAppId:_0x1034ba}=await this[_0x3c77a8(0x113)]['getQcloudPhoneVerifyConfig'](),{phone:_0x7a587b,code:_0x44a13c}=_0xfaf485;if(!_0x7a587b||!_0x44a13c)throw new common_1[(_0x3c77a8(0x138))](_0x3c77a8(0x13a),common_1[_0x3c77a8(0x137)][_0x3c77a8(0x10f)]);const _0x29315e=new smsClient({'credential':{'secretId':_0x7c1fd0,'secretKey':_0x451751},'region':_0x3c77a8(0x12f),'profile':{'httpProfile':{'endpoint':'sms.tencentcloudapi.com'}}}),_0x4b316f={'PhoneNumberSet':[_0x7a587b],'SmsSdkAppId':_0x1034ba,'TemplateId':_0x14e467,'SignName':_0x124af7,'TemplateParamSet':[_0x44a13c+'','2']};try{const _0x918238=await _0x29315e[_0x3c77a8(0x124)](_0x4b316f);console['log'](_0x918238);}catch(_0x2aefde){console[_0x3c77a8(0x133)](_0x3c77a8(0x122),_0x2aefde);throw new common_1[(_0x3c77a8(0x138))](((_0x43aeb9=_0x2aefde===null||_0x2aefde===void 0x0?void 0x0:_0x2aefde[_0x3c77a8(0xfa)])===null||_0x43aeb9===void 0x0?void 0x0:_0x43aeb9[_0x3c77a8(0x112)])||_0x3c77a8(0xf5),common_1[_0x3c77a8(0x137)][_0x3c77a8(0x10f)]);}}};function _0x2fc0(){const _0x2b39f9=['5498ApnWzf','__metadata','save','createVerification','Injectable','图形验证码错误、请检查填写!','RedisCacheService','DESC','./verifycation.entity','expiresAt','5599170ItmFWV','../redisCache/redisCache.service','typeorm','https://dysmsapi.aliyuncs.com','metadata','BAD_REQUEST','693540iHvAKv','Client','Message','globalConfigService','getOwnPropertyDescriptor','findOne','object','2017-05-25','USED','__esModule','length','VerificationService','update','Code','function','del','9800376AXZOqo','7351380ZVQLYV','error','@nestjs/typeorm','SendSms','ceil','defineProperty','getPhoneVerifyConfig','105EIxCCO','POST','decorate','verifyCode','get','createdAt','56lqKuMv','ap-beijing','1015479vzZHnX','11CBMRez','v20210111','log','图形验证码已过期、请重新输入!','24879NGSRBA','验证码错误','HttpStatus','HttpException','InjectRepository','确实必要参数错误！','验证码不存在','../../common/constants/status.constant',':CAPTCHA:','@nestjs/common','tencentcloud-sdk-nodejs-sms','571XWmZaI','now','design:paramtypes','createRandomCode','验证码发送失败！','verifycationEntity','sendPhoneCode','used','redisCacheService','data','sms','sendPhoneCodeWithQcloud','VerificationUseStatusEnum','GlobalConfigService','getNamespace'];_0x2fc0=function(){return _0x2b39f9;};return _0x2fc0();}VerificationService=__decorate([(0x0,common_1[_0x5112e5(0x104)])(),__param(0x0,(0x0,typeorm_1[_0x5112e5(0x139)])(verifycation_entity_1['VerifycationEntity'])),__metadata(_0x5112e5(0xf3),[typeorm_2['Repository'],globalConfig_service_1[_0x5112e5(0xfe)],redisCache_service_1[_0x5112e5(0x106)]])],VerificationService),exports[_0x5112e5(0x11b)]=VerificationService;