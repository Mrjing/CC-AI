'use strict';function _0x1516(){const _0x34b2bd=['log','9069728ojEQVr','scan','defineProperty','OfficialService','获取注册配置','getOwnPropertyDescriptor','ISDEV','7tqQYUQ','676380uKzKNc','genXmlMsg','design:paramtypes','Controller','sceneStr','Res','获取绑定二维码的sceneStr','function','getJsapiTicket','94ojkXvo','getQRSceneStrByBind','loginBySceneStr','official','scanBindWx','Get','getQRSceneStr','status','253zsTOxj','2737929bShYBi','metadata','length','officialService','getQRCode','notifyPost','msgtype','event','design:returntype','content','./official.service','20aitrpk','fromusername','signature','CLICK','Post','1843216uxsWwp','__decorate','timestamp','nonce','qrscene_','Body','eventkey','ApiOperation','decorate','6OoWhAc','includes','获取二维码','officialBindAccountText','JwtAuthGuard','GetQrCodeDto','getQRCodeTicket','design:type','Query','success','TRUE','Req','code','获取登录跳转地址','echostr','getRedirectUrl','prototype','url','bindWxBySceneStr','loginByCode','9313985OsBtIb','officialSubscribeText','GetQrSceneStrDto','genXmlMsgByConfig','扫码登录轮询查询','__esModule','获取登录二维码sceneStr','15544Egjkfg','split','send','VIEW','sceneStr:\x20','notify','subscribe','__metadata','4007961yZZuhH','aotoPlay','../../common/auth/jwtAuth.guard','OfficialController'];_0x1516=function(){return _0x34b2bd;};return _0x1516();}const _0x3845b5=_0x52f8;(function(_0xed8b72,_0x1961c9){const _0x3e64db=_0x52f8,_0x4ab329=_0xed8b72();while(!![]){try{const _0x5235b7=parseInt(_0x3e64db(0x180))/0x1*(-parseInt(_0x3e64db(0x143))/0x2)+parseInt(_0x3e64db(0x14c))/0x3+parseInt(_0x3e64db(0x15c))/0x4+parseInt(_0x3e64db(0x179))/0x5*(parseInt(_0x3e64db(0x165))/0x6)+parseInt(_0x3e64db(0x139))/0x7*(-parseInt(_0x3e64db(0x18d))/0x8)+-parseInt(_0x3e64db(0x188))/0x9*(-parseInt(_0x3e64db(0x157))/0xa)+-parseInt(_0x3e64db(0x14b))/0xb*(parseInt(_0x3e64db(0x13a))/0xc);if(_0x5235b7===_0x1961c9)break;else _0x4ab329['push'](_0x4ab329['shift']());}catch(_0x5476e5){_0x4ab329['push'](_0x4ab329['shift']());}}}(_0x1516,0xebe4f));function _0x52f8(_0x325c0b,_0x1cf993){const _0x1516e0=_0x1516();return _0x52f8=function(_0x52f8a8,_0x3ae66a){_0x52f8a8=_0x52f8a8-0x133;let _0x3b46ef=_0x1516e0[_0x52f8a8];return _0x3b46ef;},_0x52f8(_0x325c0b,_0x1cf993);}var __decorate=this&&this[_0x3845b5(0x15d)]||function(_0x23fc72,_0x519102,_0x243764,_0x3bbe4b){const _0x4de423=_0x3845b5;var _0x48f628=arguments[_0x4de423(0x14e)],_0x153edc=_0x48f628<0x3?_0x519102:_0x3bbe4b===null?_0x3bbe4b=Object[_0x4de423(0x137)](_0x519102,_0x243764):_0x3bbe4b,_0x5bd3aa;if(typeof Reflect==='object'&&typeof Reflect[_0x4de423(0x164)]===_0x4de423(0x141))_0x153edc=Reflect[_0x4de423(0x164)](_0x23fc72,_0x519102,_0x243764,_0x3bbe4b);else{for(var _0x348b57=_0x23fc72[_0x4de423(0x14e)]-0x1;_0x348b57>=0x0;_0x348b57--)if(_0x5bd3aa=_0x23fc72[_0x348b57])_0x153edc=(_0x48f628<0x3?_0x5bd3aa(_0x153edc):_0x48f628>0x3?_0x5bd3aa(_0x519102,_0x243764,_0x153edc):_0x5bd3aa(_0x519102,_0x243764))||_0x153edc;}return _0x48f628>0x3&&_0x153edc&&Object[_0x4de423(0x134)](_0x519102,_0x243764,_0x153edc),_0x153edc;},__metadata=this&&this[_0x3845b5(0x187)]||function(_0x50ce81,_0x3c94cd){const _0x291dda=_0x3845b5;if(typeof Reflect==='object'&&typeof Reflect[_0x291dda(0x14d)]==='function')return Reflect[_0x291dda(0x14d)](_0x50ce81,_0x3c94cd);},__param=this&&this['__param']||function(_0x5c080d,_0x228aec){return function(_0x1e399c,_0x1296bf){_0x228aec(_0x1e399c,_0x1296bf,_0x5c080d);};};Object[_0x3845b5(0x134)](exports,_0x3845b5(0x17e),{'value':!![]}),exports['OfficialController']=void 0x0;const common_1=require('@nestjs/common'),swagger_1=require('@nestjs/swagger'),jwtAuth_guard_1=require(_0x3845b5(0x18a)),official_service_1=require(_0x3845b5(0x156)),getQrCode_dto_1=require('./dto/getQrCode.dto'),getQrSceneStr_dto_1=require('./dto/getQrSceneStr.dto');let OfficialController=class OfficialController{constructor(_0x1878b2){const _0x5c4b47=_0x3845b5;this[_0x5c4b47(0x14f)]=_0x1878b2;}async[_0x3845b5(0x185)](_0x57808e,_0x2cf281,_0x234bdc){const _0x4db0ea=_0x3845b5;console['log']('get\x20通知>>>',_0x2cf281,_0x234bdc);const _0x10e9b8=await this['officialService']['verify'](_0x2cf281[_0x4db0ea(0x159)],_0x2cf281[_0x4db0ea(0x15f)],_0x2cf281[_0x4db0ea(0x15e)]);return _0x10e9b8?_0x2cf281[_0x4db0ea(0x173)]:'';}async[_0x3845b5(0x151)](_0x154da0,_0x1fb523,_0x57df6b,_0xcce5b3){const _0x5e6c45=_0x3845b5,{xml:_0x50ae56}=_0x57df6b;console['log']('xml:\x20',_0x50ae56);if(_0x50ae56[_0x5e6c45(0x152)][0x0]==_0x5e6c45(0x153)){if(_0x50ae56[_0x5e6c45(0x153)][0x0]==_0x5e6c45(0x183)||_0x50ae56[_0x5e6c45(0x153)][0x0]==_0x5e6c45(0x15a))return _0xcce5b3['status'](0xc8)[_0x5e6c45(0x182)]('');if(_0x50ae56[_0x5e6c45(0x153)][0x0]=='SCAN'){console['log']('扫码');const _0x1076ad=_0x50ae56[_0x5e6c45(0x162)][0x0];if(_0x1076ad[_0x5e6c45(0x166)]('/')){this[_0x5e6c45(0x14f)][_0x5e6c45(0x147)](_0x50ae56[_0x5e6c45(0x158)][0x0],_0x1076ad);const _0x97dad7=await this['officialService']['genXmlMsgByConfig'](_0x50ae56,'officialBindAccountText');return _0xcce5b3[_0x5e6c45(0x14a)](0xc8)['send'](_0x97dad7);}this['officialService'][_0x5e6c45(0x133)](_0x50ae56['fromusername'][0x0],_0x1076ad);const _0x5efd5e=await this[_0x5e6c45(0x14f)]['genXmlMsgByConfig'](_0x50ae56,'officialScanLoginText');return _0xcce5b3[_0x5e6c45(0x14a)](0xc8)[_0x5e6c45(0x182)](_0x5efd5e);}if(_0x50ae56[_0x5e6c45(0x153)][0x0]==_0x5e6c45(0x186)){console[_0x5e6c45(0x18c)]('订阅',_0x50ae56[_0x5e6c45(0x162)][0x0]);const _0x512ec6=_0x50ae56[_0x5e6c45(0x162)][0x0][_0x5e6c45(0x181)](_0x5e6c45(0x160))[0x1];console['log'](_0x5e6c45(0x184),_0x512ec6);if(!_0x512ec6){const _0x57411c=await this['officialService'][_0x5e6c45(0x17c)](_0x50ae56,'officialSubscribeText');return _0xcce5b3[_0x5e6c45(0x14a)](0xc8)[_0x5e6c45(0x182)](_0x57411c);}if(_0x512ec6['includes']('/')){this['officialService'][_0x5e6c45(0x147)](_0x50ae56[_0x5e6c45(0x158)][0x0],_0x512ec6);const _0x3c5af5=await this[_0x5e6c45(0x14f)][_0x5e6c45(0x17c)](_0x50ae56,_0x5e6c45(0x168));return _0xcce5b3['status'](0xc8)['send'](_0x3c5af5);}this[_0x5e6c45(0x14f)][_0x5e6c45(0x133)](_0x50ae56[_0x5e6c45(0x158)][0x0],_0x512ec6);const _0x3ca5fa=await this['officialService'][_0x5e6c45(0x17c)](_0x50ae56,_0x5e6c45(0x17a));return _0xcce5b3[_0x5e6c45(0x14a)](0xc8)[_0x5e6c45(0x182)](_0x3ca5fa);}if(_0x50ae56[_0x5e6c45(0x153)][0x0]=='unsubscribe')return _0xcce5b3['status'](0xc8)['send']('');}if(_0x50ae56['msgtype'][0x0]=='text'){const _0x384f0f=await this[_0x5e6c45(0x14f)][_0x5e6c45(0x189)](_0x50ae56[_0x5e6c45(0x155)][0x0]),_0x5b8e74=await this[_0x5e6c45(0x14f)][_0x5e6c45(0x13b)](_0x50ae56,_0x384f0f);return _0xcce5b3[_0x5e6c45(0x14a)](0xc8)[_0x5e6c45(0x182)](_0x5b8e74);}return _0x5e6c45(0x16e);}async[_0x3845b5(0x149)](_0x4627eb){const _0x3ec11b=_0x3845b5;return this[_0x3ec11b(0x14f)]['getQRSceneStr'](_0x4627eb);}async['getQRSceneStrByBind'](_0xcb4970){const _0x1cedba=_0x3845b5;return this[_0x1cedba(0x14f)][_0x1cedba(0x144)](_0xcb4970);}async[_0x3845b5(0x150)](_0xaa330f){const _0x5403d=_0x3845b5;if(process['env'][_0x5403d(0x138)]===_0x5403d(0x16f))return'';const _0x19b9a2=await this[_0x5403d(0x14f)][_0x5403d(0x16b)](_0xaa330f['sceneStr']);return'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket='+encodeURIComponent(_0x19b9a2);}async['loginBySceneStr'](_0x5c9dd1,_0x2bebbd){const _0x4c17b1=_0x3845b5;return this[_0x4c17b1(0x14f)][_0x4c17b1(0x145)](_0x5c9dd1,_0x2bebbd[_0x4c17b1(0x13e)]);}async[_0x3845b5(0x177)](_0x3bafca,_0x541aea){const _0x1578b4=_0x3845b5;return this[_0x1578b4(0x14f)][_0x1578b4(0x177)](_0x3bafca,_0x541aea[_0x1578b4(0x13e)]);}async[_0x3845b5(0x174)](_0x154d33){const _0x4abf5c=_0x3845b5;return this['officialService'][_0x4abf5c(0x174)](_0x154d33[_0x4abf5c(0x176)]);}async[_0x3845b5(0x142)](_0x11487d){const _0x33be53=_0x3845b5;return this[_0x33be53(0x14f)]['getJsapiTicket'](_0x11487d[_0x33be53(0x176)]);}async['loginByCode'](_0x522880,_0x38e465){const _0x51efb5=_0x3845b5;return this[_0x51efb5(0x14f)][_0x51efb5(0x178)](_0x522880,_0x38e465[_0x51efb5(0x171)]);}};__decorate([(0x0,common_1[_0x3845b5(0x148)])(_0x3845b5(0x185)),(0x0,swagger_1['ApiOperation'])({'summary':'公众号通知接口GET'}),__param(0x0,(0x0,common_1['Req'])()),__param(0x1,(0x0,common_1[_0x3845b5(0x16d)])()),__param(0x2,(0x0,common_1[_0x3845b5(0x161)])()),__metadata('design:type',Function),__metadata(_0x3845b5(0x13c),[Object,Object,Object]),__metadata(_0x3845b5(0x154),Promise)],OfficialController[_0x3845b5(0x175)],_0x3845b5(0x185),null),__decorate([(0x0,common_1[_0x3845b5(0x15b)])(_0x3845b5(0x185)),(0x0,swagger_1[_0x3845b5(0x163)])({'summary':'公众号通知接口POST'}),__param(0x0,(0x0,common_1[_0x3845b5(0x170)])()),__param(0x1,(0x0,common_1[_0x3845b5(0x16d)])()),__param(0x2,(0x0,common_1[_0x3845b5(0x161)])()),__param(0x3,(0x0,common_1[_0x3845b5(0x13f)])()),__metadata(_0x3845b5(0x16c),Function),__metadata(_0x3845b5(0x13c),[Object,Object,Object,Object]),__metadata(_0x3845b5(0x154),Promise)],OfficialController[_0x3845b5(0x175)],'notifyPost',null),__decorate([(0x0,common_1['Post'])(_0x3845b5(0x149)),(0x0,swagger_1[_0x3845b5(0x163)])({'summary':_0x3845b5(0x17f)}),__param(0x0,(0x0,common_1[_0x3845b5(0x161)])()),__metadata(_0x3845b5(0x16c),Function),__metadata(_0x3845b5(0x13c),[getQrSceneStr_dto_1[_0x3845b5(0x17b)]]),__metadata('design:returntype',Promise)],OfficialController['prototype'],'getQRSceneStr',null),__decorate([(0x0,common_1['Post'])('getQRSceneStrByBind'),(0x0,swagger_1[_0x3845b5(0x163)])({'summary':_0x3845b5(0x140)}),(0x0,common_1['UseGuards'])(jwtAuth_guard_1[_0x3845b5(0x169)]),__param(0x0,(0x0,common_1[_0x3845b5(0x170)])()),__metadata(_0x3845b5(0x16c),Function),__metadata('design:paramtypes',[Object]),__metadata(_0x3845b5(0x154),Promise)],OfficialController[_0x3845b5(0x175)],_0x3845b5(0x144),null),__decorate([(0x0,common_1[_0x3845b5(0x148)])(_0x3845b5(0x150)),(0x0,swagger_1[_0x3845b5(0x163)])({'summary':_0x3845b5(0x167)}),__param(0x0,(0x0,common_1['Query'])()),__metadata(_0x3845b5(0x16c),Function),__metadata(_0x3845b5(0x13c),[getQrCode_dto_1['GetQrCodeDto']]),__metadata('design:returntype',Promise)],OfficialController['prototype'],'getQRCode',null),__decorate([(0x0,common_1[_0x3845b5(0x15b)])(_0x3845b5(0x145)),(0x0,swagger_1[_0x3845b5(0x163)])({'summary':_0x3845b5(0x17d)}),__param(0x0,(0x0,common_1[_0x3845b5(0x170)])()),__param(0x1,(0x0,common_1['Body'])()),__metadata(_0x3845b5(0x16c),Function),__metadata(_0x3845b5(0x13c),[Object,getQrCode_dto_1[_0x3845b5(0x16a)]]),__metadata(_0x3845b5(0x154),Promise)],OfficialController[_0x3845b5(0x175)],_0x3845b5(0x145),null),__decorate([(0x0,common_1[_0x3845b5(0x15b)])(_0x3845b5(0x177)),(0x0,swagger_1[_0x3845b5(0x163)])({'summary':'扫码绑定轮询查询'}),(0x0,common_1['UseGuards'])(jwtAuth_guard_1[_0x3845b5(0x169)]),__param(0x0,(0x0,common_1[_0x3845b5(0x170)])()),__param(0x1,(0x0,common_1[_0x3845b5(0x161)])()),__metadata(_0x3845b5(0x16c),Function),__metadata('design:paramtypes',[Object,getQrCode_dto_1[_0x3845b5(0x16a)]]),__metadata(_0x3845b5(0x154),Promise)],OfficialController[_0x3845b5(0x175)],_0x3845b5(0x177),null),__decorate([(0x0,common_1[_0x3845b5(0x15b)])(_0x3845b5(0x174)),(0x0,swagger_1[_0x3845b5(0x163)])({'summary':_0x3845b5(0x172)}),__param(0x0,(0x0,common_1[_0x3845b5(0x161)])()),__metadata(_0x3845b5(0x16c),Function),__metadata('design:paramtypes',[Object]),__metadata(_0x3845b5(0x154),Promise)],OfficialController['prototype'],_0x3845b5(0x174),null),__decorate([(0x0,common_1[_0x3845b5(0x15b)])(_0x3845b5(0x142)),(0x0,swagger_1[_0x3845b5(0x163)])({'summary':_0x3845b5(0x136)}),__param(0x0,(0x0,common_1['Body'])()),__metadata('design:type',Function),__metadata('design:paramtypes',[Object]),__metadata(_0x3845b5(0x154),Promise)],OfficialController[_0x3845b5(0x175)],'getJsapiTicket',null),__decorate([(0x0,common_1[_0x3845b5(0x15b)])('loginByCode'),(0x0,swagger_1[_0x3845b5(0x163)])({'summary':'公众号静默登录'}),__param(0x0,(0x0,common_1[_0x3845b5(0x170)])()),__param(0x1,(0x0,common_1['Body'])()),__metadata(_0x3845b5(0x16c),Function),__metadata(_0x3845b5(0x13c),[Object,Object]),__metadata(_0x3845b5(0x154),Promise)],OfficialController[_0x3845b5(0x175)],_0x3845b5(0x178),null),OfficialController=__decorate([(0x0,swagger_1['ApiTags'])(_0x3845b5(0x146)),(0x0,common_1[_0x3845b5(0x13d)])(_0x3845b5(0x146)),__metadata(_0x3845b5(0x13c),[official_service_1[_0x3845b5(0x135)]])],OfficialController),exports[_0x3845b5(0x18b)]=OfficialController;