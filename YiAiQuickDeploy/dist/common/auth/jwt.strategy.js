'use strict';var _0x1f162e=_0x57c9;function _0x4da8(){var _0x1cd20a=['fromAuthHeaderAsBearerToken','metadata','__decorate','7284825tZgHne','@nestjs/passport','2040444odUkdE','1071940ZLgjjx','object','length','ConfigService','validate','design:paramtypes','getOwnPropertyDescriptor','JwtStrategy','decorate','3351975rUwqyx','function','231KEipFh','3546GrGZyA','secret','Injectable','8IvXRoQ','get','__metadata','710UnRAut','passport-jwt','ExtractJwt','nestjs-config','Strategy','122558hcjzUc','359139rGMFPG','2QeiepH','configService','@nestjs/common'];_0x4da8=function(){return _0x1cd20a;};return _0x4da8();}(function(_0x3d6f7f,_0x4d553c){var _0x439ec8=_0x57c9,_0x19dc8a=_0x3d6f7f();while(!![]){try{var _0x22cc52=parseInt(_0x439ec8(0x145))/0x1*(parseInt(_0x439ec8(0x147))/0x2)+-parseInt(_0x439ec8(0x14f))/0x3+parseInt(_0x439ec8(0x150))/0x4+-parseInt(_0x439ec8(0x137))/0x5+-parseInt(_0x439ec8(0x13a))/0x6*(parseInt(_0x439ec8(0x139))/0x7)+parseInt(_0x439ec8(0x13d))/0x8*(-parseInt(_0x439ec8(0x14d))/0x9)+parseInt(_0x439ec8(0x140))/0xa*(parseInt(_0x439ec8(0x146))/0xb);if(_0x22cc52===_0x4d553c)break;else _0x19dc8a['push'](_0x19dc8a['shift']());}catch(_0x5d19e2){_0x19dc8a['push'](_0x19dc8a['shift']());}}}(_0x4da8,0x812ff));var __decorate=this&&this[_0x1f162e(0x14c)]||function(_0x56aea2,_0x426f85,_0x28471f,_0x549f72){var _0x4ccbb5=_0x1f162e,_0x1f136f=arguments[_0x4ccbb5(0x152)],_0x40ee21=_0x1f136f<0x3?_0x426f85:_0x549f72===null?_0x549f72=Object[_0x4ccbb5(0x134)](_0x426f85,_0x28471f):_0x549f72,_0x4e50fb;if(typeof Reflect===_0x4ccbb5(0x151)&&typeof Reflect['decorate']==='function')_0x40ee21=Reflect[_0x4ccbb5(0x136)](_0x56aea2,_0x426f85,_0x28471f,_0x549f72);else{for(var _0x49f8f9=_0x56aea2[_0x4ccbb5(0x152)]-0x1;_0x49f8f9>=0x0;_0x49f8f9--)if(_0x4e50fb=_0x56aea2[_0x49f8f9])_0x40ee21=(_0x1f136f<0x3?_0x4e50fb(_0x40ee21):_0x1f136f>0x3?_0x4e50fb(_0x426f85,_0x28471f,_0x40ee21):_0x4e50fb(_0x426f85,_0x28471f))||_0x40ee21;}return _0x1f136f>0x3&&_0x40ee21&&Object['defineProperty'](_0x426f85,_0x28471f,_0x40ee21),_0x40ee21;},__metadata=this&&this[_0x1f162e(0x13f)]||function(_0x16afd4,_0x4032f8){var _0x19605a=_0x1f162e;if(typeof Reflect===_0x19605a(0x151)&&typeof Reflect[_0x19605a(0x14b)]===_0x19605a(0x138))return Reflect[_0x19605a(0x14b)](_0x16afd4,_0x4032f8);};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x1f162e(0x135)]=void 0x0;const nestjs_config_1=require(_0x1f162e(0x143)),passport_jwt_1=require(_0x1f162e(0x141)),passport_1=require(_0x1f162e(0x14e)),common_1=require(_0x1f162e(0x149));function _0x57c9(_0x5f0e9a,_0x529471){var _0x4da809=_0x4da8();return _0x57c9=function(_0x57c931,_0x18e75b){_0x57c931=_0x57c931-0x133;var _0x58fb86=_0x4da809[_0x57c931];return _0x58fb86;},_0x57c9(_0x5f0e9a,_0x529471);}let JwtStrategy=class JwtStrategy extends(0x0,passport_1['PassportStrategy'])(passport_jwt_1[_0x1f162e(0x144)]){constructor(_0xf19f79){var _0x5ca222=_0x1f162e;super({'jwtFromRequest':passport_jwt_1[_0x5ca222(0x142)][_0x5ca222(0x14a)](),'secretOrKey':_0xf19f79[_0x5ca222(0x13e)]('jwt')[_0x5ca222(0x13b)]}),this[_0x5ca222(0x148)]=_0xf19f79;}async[_0x1f162e(0x154)](_0x4c56f5){return _0x4c56f5;}};JwtStrategy=__decorate([(0x0,common_1[_0x1f162e(0x13c)])(),__metadata(_0x1f162e(0x133),[nestjs_config_1[_0x1f162e(0x153)]])],JwtStrategy),exports['JwtStrategy']=JwtStrategy;