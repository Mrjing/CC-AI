'use strict';const _0x3bb32f=_0x44ff;function _0x403f(){const _0x2c0109=['getQRSceneStrByBind','scanBindWx','扫码登录轮询查询','getQRSceneStr','ApiOperation','__decorate','log','sceneStr:\x20','36aksiuO','get\x20通知>>>','design:type','aotoPlay','scan','@nestjs/common','OfficialController','79388XBbxKs','../../common/auth/jwtAuth.guard','length','Body','Req','./dto/getQrCode.dto','SCAN','74562FhwyEc','JwtAuthGuard','design:returntype','genXmlMsgByConfig','officialScanLoginText','getOwnPropertyDescriptor','officialBindAccountText','bindWxBySceneStr','metadata','303560hrwONw','officialService','getQRCodeTicket','status','Get','nonce','./official.service','__esModule','__metadata','35oIHhrh','prototype','CLICK','official','timestamp','code','unsubscribe','1673940hwqHlI','success','object','echostr','officialSubscribeText','VIEW','Query','send','defineProperty','公众号静默登录','扫码绑定轮询查询','2WTkfKz','获取二维码','./dto/getQrSceneStr.dto','msgtype','event','getQRCode','signature','subscribe','Post','45sSqzUp','function','GetQrCodeDto','获取绑定二维码的sceneStr','__param','notifyPost','5874NKXmVj','Controller','includes','genXmlMsg','design:paramtypes','getJsapiTicket','qrscene_','GetQrSceneStrDto','eventkey','verify','1851875toHqcd','loginByCode','UseGuards','split','504zZPAUP','decorate','获取注册配置','56690qmmxta','sceneStr','getRedirectUrl','@nestjs/swagger','notify','fromusername','公众号通知接口GET','loginBySceneStr'];_0x403f=function(){return _0x2c0109;};return _0x403f();}(function(_0x2bb07a,_0x4d810d){const _0x12f65f=_0x44ff,_0x182ca6=_0x2bb07a();while(!![]){try{const _0xf94cf5=-parseInt(_0x12f65f(0xb0))/0x1*(-parseInt(_0x12f65f(0xd0))/0x2)+parseInt(_0x12f65f(0x7e))/0x3*(parseInt(_0x12f65f(0x85))/0x4)+-parseInt(_0x12f65f(0xc9))/0x5+parseInt(_0x12f65f(0x8c))/0x6*(-parseInt(_0x12f65f(0x9e))/0x7)+parseInt(_0x12f65f(0x95))/0x8*(parseInt(_0x12f65f(0xb9))/0x9)+parseInt(_0x12f65f(0xa5))/0xa+parseInt(_0x12f65f(0xbf))/0xb*(parseInt(_0x12f65f(0xcd))/0xc);if(_0xf94cf5===_0x4d810d)break;else _0x182ca6['push'](_0x182ca6['shift']());}catch(_0x4a5a55){_0x182ca6['push'](_0x182ca6['shift']());}}}(_0x403f,0x3b0e3));function _0x44ff(_0x5d3b44,_0x39ef23){const _0x403fb0=_0x403f();return _0x44ff=function(_0x44ff94,_0xd7cf21){_0x44ff94=_0x44ff94-0x77;let _0x5e159d=_0x403fb0[_0x44ff94];return _0x5e159d;},_0x44ff(_0x5d3b44,_0x39ef23);}var __decorate=this&&this[_0x3bb32f(0x7b)]||function(_0x2080bc,_0x4e6331,_0x27745f,_0x55978b){const _0xe617b9=_0x3bb32f;var _0x41879b=arguments[_0xe617b9(0x87)],_0x18a119=_0x41879b<0x3?_0x4e6331:_0x55978b===null?_0x55978b=Object[_0xe617b9(0x91)](_0x4e6331,_0x27745f):_0x55978b,_0x1543f0;if(typeof Reflect===_0xe617b9(0xa7)&&typeof Reflect[_0xe617b9(0xce)]===_0xe617b9(0xba))_0x18a119=Reflect[_0xe617b9(0xce)](_0x2080bc,_0x4e6331,_0x27745f,_0x55978b);else{for(var _0x3dc782=_0x2080bc[_0xe617b9(0x87)]-0x1;_0x3dc782>=0x0;_0x3dc782--)if(_0x1543f0=_0x2080bc[_0x3dc782])_0x18a119=(_0x41879b<0x3?_0x1543f0(_0x18a119):_0x41879b>0x3?_0x1543f0(_0x4e6331,_0x27745f,_0x18a119):_0x1543f0(_0x4e6331,_0x27745f))||_0x18a119;}return _0x41879b>0x3&&_0x18a119&&Object['defineProperty'](_0x4e6331,_0x27745f,_0x18a119),_0x18a119;},__metadata=this&&this[_0x3bb32f(0x9d)]||function(_0x5c3c25,_0x4645ce){const _0x3461e5=_0x3bb32f;if(typeof Reflect===_0x3461e5(0xa7)&&typeof Reflect['metadata']==='function')return Reflect[_0x3461e5(0x94)](_0x5c3c25,_0x4645ce);},__param=this&&this[_0x3bb32f(0xbd)]||function(_0x44c5bf,_0x17751e){return function(_0x32d562,_0x268212){_0x17751e(_0x32d562,_0x268212,_0x44c5bf);};};Object[_0x3bb32f(0xad)](exports,_0x3bb32f(0x9c),{'value':!![]}),exports[_0x3bb32f(0x84)]=void 0x0;const common_1=require(_0x3bb32f(0x83)),swagger_1=require(_0x3bb32f(0xd3)),jwtAuth_guard_1=require(_0x3bb32f(0x86)),official_service_1=require(_0x3bb32f(0x9b)),getQrCode_dto_1=require(_0x3bb32f(0x8a)),getQrSceneStr_dto_1=require(_0x3bb32f(0xb2));let OfficialController=class OfficialController{constructor(_0xebd567){const _0x453c2f=_0x3bb32f;this[_0x453c2f(0x96)]=_0xebd567;}async[_0x3bb32f(0xd4)](_0x233443,_0xdfcbd0,_0x4db481){const _0x5c2a22=_0x3bb32f;console['log'](_0x5c2a22(0x7f),_0xdfcbd0,_0x4db481);const _0x3caf29=await this[_0x5c2a22(0x96)][_0x5c2a22(0xc8)](_0xdfcbd0[_0x5c2a22(0xb6)],_0xdfcbd0[_0x5c2a22(0x9a)],_0xdfcbd0[_0x5c2a22(0xa2)]);return _0x3caf29?_0xdfcbd0[_0x5c2a22(0xa8)]:'';}async[_0x3bb32f(0xbe)](_0x13955a,_0x20dbeb,_0x446665,_0x1e4a0b){const _0x2e3534=_0x3bb32f,{xml:_0x10b484}=_0x446665;console[_0x2e3534(0x7c)]('xml:\x20',_0x10b484);if(_0x10b484[_0x2e3534(0xb3)][0x0]==_0x2e3534(0xb4)){if(_0x10b484[_0x2e3534(0xb4)][0x0]==_0x2e3534(0xaa)||_0x10b484[_0x2e3534(0xb4)][0x0]==_0x2e3534(0xa0))return _0x1e4a0b[_0x2e3534(0x98)](0xc8)['send']('');if(_0x10b484[_0x2e3534(0xb4)][0x0]==_0x2e3534(0x8b)){console[_0x2e3534(0x7c)]('扫码');const _0x35e19c=_0x10b484[_0x2e3534(0xc7)][0x0];if(_0x35e19c[_0x2e3534(0xc1)]('/')){this[_0x2e3534(0x96)][_0x2e3534(0x77)](_0x10b484[_0x2e3534(0xd5)][0x0],_0x35e19c);const _0x527eeb=await this[_0x2e3534(0x96)][_0x2e3534(0x8f)](_0x10b484,'officialBindAccountText');return _0x1e4a0b[_0x2e3534(0x98)](0xc8)[_0x2e3534(0xac)](_0x527eeb);}this[_0x2e3534(0x96)][_0x2e3534(0x82)](_0x10b484[_0x2e3534(0xd5)][0x0],_0x35e19c);const _0x4a5c7d=await this['officialService'][_0x2e3534(0x8f)](_0x10b484,_0x2e3534(0x90));return _0x1e4a0b[_0x2e3534(0x98)](0xc8)[_0x2e3534(0xac)](_0x4a5c7d);}if(_0x10b484[_0x2e3534(0xb4)][0x0]==_0x2e3534(0xb7)){console[_0x2e3534(0x7c)]('订阅',_0x10b484[_0x2e3534(0xc7)][0x0]);const _0x4c6b2d=_0x10b484[_0x2e3534(0xc7)][0x0][_0x2e3534(0xcc)](_0x2e3534(0xc5))[0x1];console[_0x2e3534(0x7c)](_0x2e3534(0x7d),_0x4c6b2d);if(!_0x4c6b2d){const _0xcde4c1=await this['officialService'][_0x2e3534(0x8f)](_0x10b484,_0x2e3534(0xa9));return _0x1e4a0b[_0x2e3534(0x98)](0xc8)[_0x2e3534(0xac)](_0xcde4c1);}if(_0x4c6b2d[_0x2e3534(0xc1)]('/')){this[_0x2e3534(0x96)][_0x2e3534(0x77)](_0x10b484[_0x2e3534(0xd5)][0x0],_0x4c6b2d);const _0x43ba96=await this['officialService'][_0x2e3534(0x8f)](_0x10b484,_0x2e3534(0x92));return _0x1e4a0b[_0x2e3534(0x98)](0xc8)[_0x2e3534(0xac)](_0x43ba96);}this[_0x2e3534(0x96)][_0x2e3534(0x82)](_0x10b484[_0x2e3534(0xd5)][0x0],_0x4c6b2d);const _0x3c5499=await this[_0x2e3534(0x96)][_0x2e3534(0x8f)](_0x10b484,'officialSubscribeText');return _0x1e4a0b[_0x2e3534(0x98)](0xc8)[_0x2e3534(0xac)](_0x3c5499);}if(_0x10b484[_0x2e3534(0xb4)][0x0]==_0x2e3534(0xa4))return _0x1e4a0b[_0x2e3534(0x98)](0xc8)[_0x2e3534(0xac)]('');}if(_0x10b484[_0x2e3534(0xb3)][0x0]=='text'){const _0x76c195=await this[_0x2e3534(0x96)][_0x2e3534(0x81)](_0x10b484['content'][0x0]),_0x50e586=await this[_0x2e3534(0x96)][_0x2e3534(0xc2)](_0x10b484,_0x76c195);return _0x1e4a0b[_0x2e3534(0x98)](0xc8)[_0x2e3534(0xac)](_0x50e586);}return _0x2e3534(0xa6);}async['getQRSceneStr'](_0x53ed7f){const _0x10889c=_0x3bb32f;return this[_0x10889c(0x96)][_0x10889c(0x79)](_0x53ed7f);}async[_0x3bb32f(0xd8)](_0x7769c9){const _0x17c41c=_0x3bb32f;return this[_0x17c41c(0x96)][_0x17c41c(0xd8)](_0x7769c9);}async[_0x3bb32f(0xb5)](_0x16cefb){const _0x16e6a6=_0x3bb32f;if(process['env']['ISDEV']==='TRUE')return'';const _0x43432e=await this[_0x16e6a6(0x96)][_0x16e6a6(0x97)](_0x16cefb[_0x16e6a6(0xd1)]);return'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket='+encodeURIComponent(_0x43432e);}async[_0x3bb32f(0xd7)](_0x2b8efd,_0x572c9f){const _0xc6957e=_0x3bb32f;return this[_0xc6957e(0x96)][_0xc6957e(0xd7)](_0x2b8efd,_0x572c9f[_0xc6957e(0xd1)]);}async[_0x3bb32f(0x93)](_0x38ea78,_0x332a93){const _0x55ec52=_0x3bb32f;return this[_0x55ec52(0x96)][_0x55ec52(0x93)](_0x38ea78,_0x332a93[_0x55ec52(0xd1)]);}async[_0x3bb32f(0xd2)](_0x2b7c71){const _0x3018aa=_0x3bb32f;return this[_0x3018aa(0x96)][_0x3018aa(0xd2)](_0x2b7c71['url']);}async[_0x3bb32f(0xc4)](_0x8db348){const _0x4de670=_0x3bb32f;return this[_0x4de670(0x96)][_0x4de670(0xc4)](_0x8db348['url']);}async['loginByCode'](_0x2454fd,_0x2639b7){const _0x1aaad5=_0x3bb32f;return this[_0x1aaad5(0x96)][_0x1aaad5(0xca)](_0x2454fd,_0x2639b7[_0x1aaad5(0xa3)]);}};__decorate([(0x0,common_1[_0x3bb32f(0x99)])(_0x3bb32f(0xd4)),(0x0,swagger_1[_0x3bb32f(0x7a)])({'summary':_0x3bb32f(0xd6)}),__param(0x0,(0x0,common_1['Req'])()),__param(0x1,(0x0,common_1['Query'])()),__param(0x2,(0x0,common_1[_0x3bb32f(0x88)])()),__metadata('design:type',Function),__metadata(_0x3bb32f(0xc3),[Object,Object,Object]),__metadata(_0x3bb32f(0x8e),Promise)],OfficialController[_0x3bb32f(0x9f)],_0x3bb32f(0xd4),null),__decorate([(0x0,common_1[_0x3bb32f(0xb8)])(_0x3bb32f(0xd4)),(0x0,swagger_1[_0x3bb32f(0x7a)])({'summary':'公众号通知接口POST'}),__param(0x0,(0x0,common_1[_0x3bb32f(0x89)])()),__param(0x1,(0x0,common_1[_0x3bb32f(0xab)])()),__param(0x2,(0x0,common_1['Body'])()),__param(0x3,(0x0,common_1['Res'])()),__metadata(_0x3bb32f(0x80),Function),__metadata('design:paramtypes',[Object,Object,Object,Object]),__metadata(_0x3bb32f(0x8e),Promise)],OfficialController[_0x3bb32f(0x9f)],_0x3bb32f(0xbe),null),__decorate([(0x0,common_1[_0x3bb32f(0xb8)])(_0x3bb32f(0x79)),(0x0,swagger_1[_0x3bb32f(0x7a)])({'summary':'获取登录二维码sceneStr'}),__param(0x0,(0x0,common_1[_0x3bb32f(0x88)])()),__metadata('design:type',Function),__metadata(_0x3bb32f(0xc3),[getQrSceneStr_dto_1[_0x3bb32f(0xc6)]]),__metadata(_0x3bb32f(0x8e),Promise)],OfficialController[_0x3bb32f(0x9f)],_0x3bb32f(0x79),null),__decorate([(0x0,common_1['Post'])(_0x3bb32f(0xd8)),(0x0,swagger_1[_0x3bb32f(0x7a)])({'summary':_0x3bb32f(0xbc)}),(0x0,common_1[_0x3bb32f(0xcb)])(jwtAuth_guard_1['JwtAuthGuard']),__param(0x0,(0x0,common_1[_0x3bb32f(0x89)])()),__metadata(_0x3bb32f(0x80),Function),__metadata(_0x3bb32f(0xc3),[Object]),__metadata(_0x3bb32f(0x8e),Promise)],OfficialController[_0x3bb32f(0x9f)],_0x3bb32f(0xd8),null),__decorate([(0x0,common_1[_0x3bb32f(0x99)])('getQRCode'),(0x0,swagger_1[_0x3bb32f(0x7a)])({'summary':_0x3bb32f(0xb1)}),__param(0x0,(0x0,common_1[_0x3bb32f(0xab)])()),__metadata(_0x3bb32f(0x80),Function),__metadata('design:paramtypes',[getQrCode_dto_1[_0x3bb32f(0xbb)]]),__metadata(_0x3bb32f(0x8e),Promise)],OfficialController[_0x3bb32f(0x9f)],_0x3bb32f(0xb5),null),__decorate([(0x0,common_1[_0x3bb32f(0xb8)])(_0x3bb32f(0xd7)),(0x0,swagger_1['ApiOperation'])({'summary':_0x3bb32f(0x78)}),__param(0x0,(0x0,common_1[_0x3bb32f(0x89)])()),__param(0x1,(0x0,common_1[_0x3bb32f(0x88)])()),__metadata(_0x3bb32f(0x80),Function),__metadata(_0x3bb32f(0xc3),[Object,getQrCode_dto_1[_0x3bb32f(0xbb)]]),__metadata(_0x3bb32f(0x8e),Promise)],OfficialController[_0x3bb32f(0x9f)],_0x3bb32f(0xd7),null),__decorate([(0x0,common_1[_0x3bb32f(0xb8)])(_0x3bb32f(0x93)),(0x0,swagger_1[_0x3bb32f(0x7a)])({'summary':_0x3bb32f(0xaf)}),(0x0,common_1[_0x3bb32f(0xcb)])(jwtAuth_guard_1[_0x3bb32f(0x8d)]),__param(0x0,(0x0,common_1[_0x3bb32f(0x89)])()),__param(0x1,(0x0,common_1['Body'])()),__metadata(_0x3bb32f(0x80),Function),__metadata(_0x3bb32f(0xc3),[Object,getQrCode_dto_1[_0x3bb32f(0xbb)]]),__metadata(_0x3bb32f(0x8e),Promise)],OfficialController['prototype'],_0x3bb32f(0x93),null),__decorate([(0x0,common_1[_0x3bb32f(0xb8)])(_0x3bb32f(0xd2)),(0x0,swagger_1[_0x3bb32f(0x7a)])({'summary':'获取登录跳转地址'}),__param(0x0,(0x0,common_1[_0x3bb32f(0x88)])()),__metadata(_0x3bb32f(0x80),Function),__metadata(_0x3bb32f(0xc3),[Object]),__metadata(_0x3bb32f(0x8e),Promise)],OfficialController[_0x3bb32f(0x9f)],_0x3bb32f(0xd2),null),__decorate([(0x0,common_1[_0x3bb32f(0xb8)])(_0x3bb32f(0xc4)),(0x0,swagger_1[_0x3bb32f(0x7a)])({'summary':_0x3bb32f(0xcf)}),__param(0x0,(0x0,common_1[_0x3bb32f(0x88)])()),__metadata(_0x3bb32f(0x80),Function),__metadata(_0x3bb32f(0xc3),[Object]),__metadata(_0x3bb32f(0x8e),Promise)],OfficialController['prototype'],_0x3bb32f(0xc4),null),__decorate([(0x0,common_1[_0x3bb32f(0xb8)])(_0x3bb32f(0xca)),(0x0,swagger_1[_0x3bb32f(0x7a)])({'summary':_0x3bb32f(0xae)}),__param(0x0,(0x0,common_1[_0x3bb32f(0x89)])()),__param(0x1,(0x0,common_1[_0x3bb32f(0x88)])()),__metadata(_0x3bb32f(0x80),Function),__metadata('design:paramtypes',[Object,Object]),__metadata('design:returntype',Promise)],OfficialController[_0x3bb32f(0x9f)],_0x3bb32f(0xca),null),OfficialController=__decorate([(0x0,swagger_1['ApiTags'])(_0x3bb32f(0xa1)),(0x0,common_1[_0x3bb32f(0xc0)])('official'),__metadata(_0x3bb32f(0xc3),[official_service_1['OfficialService']])],OfficialController),exports[_0x3bb32f(0x84)]=OfficialController;