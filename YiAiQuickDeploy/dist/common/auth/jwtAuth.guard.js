'use strict';function _0x1f26(){const _0x244b1a=['redisCacheService','__metadata','globalConfigService','x-website-domain','JwtAuthGuard','4485568wukOlr','defineProperty','HttpException','metadata','Injectable','toString','20eJYyOY','__esModule','user','createTokenFromFingerprint','256434yqjMxE','@nestjs/core','jwt','6835eTfPrL','canActivate','AuthService','token','RedisCacheService','authorization','split','30804sFkOPp','verify','headers','length','authService','getNineAiToken','18dAsfGH','../../modules/redisCache/redisCache.service','get','@nestjs/passport','UnauthorizedException','slice','env','198JHHKvI','log','HttpStatus','GlobalConfigService','亲爱的用户,请登录后继续操作,我们正在等您的到来！','extractToken','object','decorate','handleRequest','2101896ANtybr','11jxzMTU','err:\x20','91LQTfOh','Bearer','moduleRef','84356mEpkYa','1248180VxVsBJ','AuthGuard','checkTokenAuth','validateToken','UNAUTHORIZED','__decorate','jsonwebtoken','function','../../modules/auth/auth.service','getOwnPropertyDescriptor'];_0x1f26=function(){return _0x244b1a;};return _0x1f26();}const _0x37c930=_0x5e3f;function _0x5e3f(_0x185bd6,_0x578d75){const _0x1f260a=_0x1f26();return _0x5e3f=function(_0x5e3fe7,_0x2fb69a){_0x5e3fe7=_0x5e3fe7-0x90;let _0x2bb288=_0x1f260a[_0x5e3fe7];return _0x2bb288;},_0x5e3f(_0x185bd6,_0x578d75);}(function(_0x2deffd,_0x4aadcc){const _0x7deeb0=_0x5e3f,_0x513f43=_0x2deffd();while(!![]){try{const _0xfd09a1=parseInt(_0x7deeb0(0xbf))/0x1*(-parseInt(_0x7deeb0(0xc4))/0x2)+parseInt(_0x7deeb0(0xbe))/0x3+parseInt(_0x7deeb0(0x9a))/0x4*(-parseInt(_0x7deeb0(0xa1))/0x5)+parseInt(_0x7deeb0(0x9e))/0x6*(-parseInt(_0x7deeb0(0xc1))/0x7)+parseInt(_0x7deeb0(0x94))/0x8+-parseInt(_0x7deeb0(0xae))/0x9*(-parseInt(_0x7deeb0(0xc5))/0xa)+-parseInt(_0x7deeb0(0xb5))/0xb*(parseInt(_0x7deeb0(0xa8))/0xc);if(_0xfd09a1===_0x4aadcc)break;else _0x513f43['push'](_0x513f43['shift']());}catch(_0x47de6e){_0x513f43['push'](_0x513f43['shift']());}}}(_0x1f26,0x6b056));var __decorate=this&&this[_0x37c930(0xca)]||function(_0xc4d2ac,_0x271815,_0x2c9fd,_0x2aef58){const _0x379e5d=_0x37c930;var _0x32b204=arguments[_0x379e5d(0xab)],_0x5cec87=_0x32b204<0x3?_0x271815:_0x2aef58===null?_0x2aef58=Object[_0x379e5d(0xce)](_0x271815,_0x2c9fd):_0x2aef58,_0xbfe736;if(typeof Reflect===_0x379e5d(0xbb)&&typeof Reflect[_0x379e5d(0xbc)]===_0x379e5d(0xcc))_0x5cec87=Reflect[_0x379e5d(0xbc)](_0xc4d2ac,_0x271815,_0x2c9fd,_0x2aef58);else{for(var _0x1f5928=_0xc4d2ac[_0x379e5d(0xab)]-0x1;_0x1f5928>=0x0;_0x1f5928--)if(_0xbfe736=_0xc4d2ac[_0x1f5928])_0x5cec87=(_0x32b204<0x3?_0xbfe736(_0x5cec87):_0x32b204>0x3?_0xbfe736(_0x271815,_0x2c9fd,_0x5cec87):_0xbfe736(_0x271815,_0x2c9fd))||_0x5cec87;}return _0x32b204>0x3&&_0x5cec87&&Object[_0x379e5d(0x95)](_0x271815,_0x2c9fd,_0x5cec87),_0x5cec87;},__metadata=this&&this[_0x37c930(0x90)]||function(_0x11bc50,_0x405009){const _0xc3fa91=_0x37c930;if(typeof Reflect===_0xc3fa91(0xbb)&&typeof Reflect[_0xc3fa91(0x97)]===_0xc3fa91(0xcc))return Reflect[_0xc3fa91(0x97)](_0x11bc50,_0x405009);};Object[_0x37c930(0x95)](exports,_0x37c930(0x9b),{'value':!![]}),exports[_0x37c930(0x93)]=void 0x0;const redisCache_service_1=require(_0x37c930(0xaf)),common_1=require('@nestjs/common'),passport_1=require(_0x37c930(0xb1)),jwt=require(_0x37c930(0xcb)),core_1=require(_0x37c930(0x9f)),globalConfig_service_1=require('../../modules/globalConfig/globalConfig.service'),auth_service_1=require(_0x37c930(0xcd));let JwtAuthGuard=class JwtAuthGuard extends(0x0,passport_1[_0x37c930(0xc6)])(_0x37c930(0xa0)){constructor(_0x56f518,_0x5c6740,_0xf33bf7,_0xce9b01){const _0x5e88f1=_0x37c930;super(),this[_0x5e88f1(0xcf)]=_0x56f518,this[_0x5e88f1(0xc3)]=_0x5c6740,this[_0x5e88f1(0x91)]=_0xf33bf7,this[_0x5e88f1(0xac)]=_0xce9b01;}async[_0x37c930(0xa2)](_0x450c58){const _0x48054b=_0x37c930;!this['redisCacheService']&&(this[_0x48054b(0xcf)]=this['moduleRef'][_0x48054b(0xb0)](redisCache_service_1[_0x48054b(0xa5)],{'strict':![]}));const _0x3fe219=_0x450c58['switchToHttp']()['getRequest'](),_0x31dadb=_0x3fe219[_0x48054b(0xaa)][_0x48054b(0x92)],_0x4d2ddf=this['extractToken'](_0x3fe219);console[_0x48054b(0xb6)](_0x48054b(0xa4),_0x4d2ddf),_0x3fe219[_0x48054b(0x9c)]=this[_0x48054b(0xc8)](_0x4d2ddf),console[_0x48054b(0xb6)]('user',_0x3fe219[_0x48054b(0x9c)]);const _0x24bda6=this[_0x48054b(0x91)][_0x48054b(0xad)]();return await this[_0x48054b(0xcf)][_0x48054b(0xc7)](_0x4d2ddf,_0x3fe219),!![];}[_0x37c930(0xba)](_0x37f19d){const _0x23cb65=_0x37c930;console[_0x23cb65(0xb6)](_0x23cb65(0xaa),_0x37f19d[_0x23cb65(0xaa)]);if(!_0x37f19d[_0x23cb65(0xaa)]['authorization']){if(_0x37f19d[_0x23cb65(0xaa)]['fingerprint']){let _0x259c46=_0x37f19d[_0x23cb65(0xaa)]['fingerprint'];_0x259c46>0x7fffffff&&(_0x259c46=_0x259c46[_0x23cb65(0x99)]()[_0x23cb65(0xb3)](-0x9),_0x259c46=Number(String(Number(_0x259c46))));const _0x4628fd=this['authService'][_0x23cb65(0x9d)](_0x259c46);return _0x4628fd;}return null;}const _0x5ae3cb=_0x37f19d[_0x23cb65(0xaa)][_0x23cb65(0xa6)][_0x23cb65(0xa7)]('\x20');if(_0x5ae3cb[_0x23cb65(0xab)]!==0x2||_0x5ae3cb[0x0]!==_0x23cb65(0xc2))return null;return _0x5ae3cb[0x1];}[_0x37c930(0xc8)](_0xa45e81){const _0x4f3738=_0x37c930;try{return jwt[_0x4f3738(0xa9)](_0xa45e81,process[_0x4f3738(0xb4)]['JWT_SECRET']);}catch(_0x16056f){throw new common_1[(_0x4f3738(0x96))](_0x4f3738(0xb9),common_1[_0x4f3738(0xb7)][_0x4f3738(0xc9)]);}}[_0x37c930(0xbd)](_0x1a1f87,_0x4a2ccb,_0x652f21){const _0x1f8212=_0x37c930;if(_0x1a1f87||!_0x4a2ccb){console[_0x1f8212(0xb6)](_0x1f8212(0xc0),_0x1a1f87);throw _0x1a1f87||new common_1[(_0x1f8212(0xb2))]();}return _0x4a2ccb;}};JwtAuthGuard=__decorate([(0x0,common_1[_0x37c930(0x98)])(),__metadata('design:paramtypes',[redisCache_service_1[_0x37c930(0xa5)],core_1['ModuleRef'],globalConfig_service_1[_0x37c930(0xb8)],auth_service_1[_0x37c930(0xa3)]])],JwtAuthGuard),exports[_0x37c930(0x93)]=JwtAuthGuard;