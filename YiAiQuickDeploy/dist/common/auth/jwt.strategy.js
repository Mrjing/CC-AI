'use strict';var _0x166f11=_0x4517;function _0xe8e7(){var _0x838215=['nestjs-config','27558dUgGNs','__esModule','length','decorate','secret','jwt','67682MaLJNM','getOwnPropertyDescriptor','6001422YgRnBt','71243erYZVx','43448240aVEJQI','fromAuthHeaderAsBearerToken','get','metadata','JwtStrategy','13520FTRtps','object','4850oLqTJY','81qurfPJ','passport-jwt','function','design:paramtypes','__metadata','ConfigService','ExtractJwt','defineProperty','380cCmlQG','8553880UFYJzA','PassportStrategy','7HJrkVW','validate','Injectable'];_0xe8e7=function(){return _0x838215;};return _0xe8e7();}(function(_0x4e0db0,_0x49be9f){var _0x1803bb=_0x4517,_0x4c0e6c=_0x4e0db0();while(!![]){try{var _0x196992=parseInt(_0x1803bb(0x1c6))/0x1+-parseInt(_0x1803bb(0x1e4))/0x2*(-parseInt(_0x1803bb(0x1cf))/0x3)+parseInt(_0x1803bb(0x1cc))/0x4*(parseInt(_0x1803bb(0x1d7))/0x5)+parseInt(_0x1803bb(0x1c5))/0x6+-parseInt(_0x1803bb(0x1da))/0x7*(-parseInt(_0x1803bb(0x1d8))/0x8)+-parseInt(_0x1803bb(0x1de))/0x9*(-parseInt(_0x1803bb(0x1ce))/0xa)+-parseInt(_0x1803bb(0x1c7))/0xb;if(_0x196992===_0x49be9f)break;else _0x4c0e6c['push'](_0x4c0e6c['shift']());}catch(_0x2c9005){_0x4c0e6c['push'](_0x4c0e6c['shift']());}}}(_0xe8e7,0xceac4));var __decorate=this&&this['__decorate']||function(_0x2a4bf2,_0x418b6e,_0x2d5e80,_0x305df0){var _0x20ecf3=_0x4517,_0x451fee=arguments[_0x20ecf3(0x1e0)],_0x401f85=_0x451fee<0x3?_0x418b6e:_0x305df0===null?_0x305df0=Object[_0x20ecf3(0x1c4)](_0x418b6e,_0x2d5e80):_0x305df0,_0x153aaf;if(typeof Reflect===_0x20ecf3(0x1cd)&&typeof Reflect[_0x20ecf3(0x1e1)]===_0x20ecf3(0x1d1))_0x401f85=Reflect[_0x20ecf3(0x1e1)](_0x2a4bf2,_0x418b6e,_0x2d5e80,_0x305df0);else{for(var _0xc05dcc=_0x2a4bf2['length']-0x1;_0xc05dcc>=0x0;_0xc05dcc--)if(_0x153aaf=_0x2a4bf2[_0xc05dcc])_0x401f85=(_0x451fee<0x3?_0x153aaf(_0x401f85):_0x451fee>0x3?_0x153aaf(_0x418b6e,_0x2d5e80,_0x401f85):_0x153aaf(_0x418b6e,_0x2d5e80))||_0x401f85;}return _0x451fee>0x3&&_0x401f85&&Object[_0x20ecf3(0x1d6)](_0x418b6e,_0x2d5e80,_0x401f85),_0x401f85;},__metadata=this&&this[_0x166f11(0x1d3)]||function(_0x1dd078,_0x4c8ffa){var _0xb0fcdb=_0x166f11;if(typeof Reflect==='object'&&typeof Reflect[_0xb0fcdb(0x1ca)]===_0xb0fcdb(0x1d1))return Reflect[_0xb0fcdb(0x1ca)](_0x1dd078,_0x4c8ffa);};Object[_0x166f11(0x1d6)](exports,_0x166f11(0x1df),{'value':!![]}),exports[_0x166f11(0x1cb)]=void 0x0;function _0x4517(_0x201ca0,_0x4ff734){var _0xe8e746=_0xe8e7();return _0x4517=function(_0x451729,_0x5d18c8){_0x451729=_0x451729-0x1c4;var _0x2edf38=_0xe8e746[_0x451729];return _0x2edf38;},_0x4517(_0x201ca0,_0x4ff734);}const nestjs_config_1=require(_0x166f11(0x1dd)),passport_jwt_1=require(_0x166f11(0x1d0)),passport_1=require('@nestjs/passport'),common_1=require('@nestjs/common');let JwtStrategy=class JwtStrategy extends(0x0,passport_1[_0x166f11(0x1d9)])(passport_jwt_1['Strategy']){constructor(_0x2166c4){var _0xdad95d=_0x166f11;super({'jwtFromRequest':passport_jwt_1[_0xdad95d(0x1d5)][_0xdad95d(0x1c8)](),'secretOrKey':_0x2166c4[_0xdad95d(0x1c9)](_0xdad95d(0x1e3))[_0xdad95d(0x1e2)]}),this['configService']=_0x2166c4;}async[_0x166f11(0x1db)](_0x44ec34){return _0x44ec34;}};JwtStrategy=__decorate([(0x0,common_1[_0x166f11(0x1dc)])(),__metadata(_0x166f11(0x1d2),[nestjs_config_1[_0x166f11(0x1d4)]])],JwtStrategy),exports[_0x166f11(0x1cb)]=JwtStrategy;