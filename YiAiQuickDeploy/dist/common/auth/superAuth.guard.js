'use strict';function _0x4eba(_0x180d32,_0x910441){const _0x58fdec=_0x58fd();return _0x4eba=function(_0x4eba21,_0x54e58a){_0x4eba21=_0x4eba21-0x185;let _0x443b4f=_0x58fdec[_0x4eba21];return _0x443b4f;},_0x4eba(_0x180d32,_0x910441);}const _0x418bd5=_0x4eba;(function(_0x257955,_0x5dd359){const _0x3e2c59=_0x4eba,_0x281021=_0x257955();while(!![]){try{const _0x252ed8=-parseInt(_0x3e2c59(0x18c))/0x1+-parseInt(_0x3e2c59(0x189))/0x2+parseInt(_0x3e2c59(0x19a))/0x3+parseInt(_0x3e2c59(0x18f))/0x4+parseInt(_0x3e2c59(0x196))/0x5+-parseInt(_0x3e2c59(0x187))/0x6*(parseInt(_0x3e2c59(0x186))/0x7)+parseInt(_0x3e2c59(0x193))/0x8;if(_0x252ed8===_0x5dd359)break;else _0x281021['push'](_0x281021['shift']());}catch(_0x442f4f){_0x281021['push'](_0x281021['shift']());}}}(_0x58fd,0x2b9fd));function _0x58fd(){const _0x26f02a=['getRequest','object','2603464QlwJxX','__esModule','canActivate','40195SxiYOQ','非法操作、非超级管理员无权操作！','JwtAuthGuard','Injectable','53589QfhkAj','length','581elFfzl','8862diMzKP','getOwnPropertyDescriptor','72824xIpkXz','switchToHttp','defineProperty','94780FxQOft','SuperAuthGuard','./jwtAuth.guard','324532YRmxHq','@nestjs/common'];_0x58fd=function(){return _0x26f02a;};return _0x58fd();}var __decorate=this&&this['__decorate']||function(_0x3428ac,_0x5e7e73,_0xc95c45,_0xfc504d){const _0x22d230=_0x4eba;var _0x59cf92=arguments[_0x22d230(0x185)],_0x306004=_0x59cf92<0x3?_0x5e7e73:_0xfc504d===null?_0xfc504d=Object[_0x22d230(0x188)](_0x5e7e73,_0xc95c45):_0xfc504d,_0x2902f2;if(typeof Reflect===_0x22d230(0x192)&&typeof Reflect['decorate']==='function')_0x306004=Reflect['decorate'](_0x3428ac,_0x5e7e73,_0xc95c45,_0xfc504d);else{for(var _0x322341=_0x3428ac[_0x22d230(0x185)]-0x1;_0x322341>=0x0;_0x322341--)if(_0x2902f2=_0x3428ac[_0x322341])_0x306004=(_0x59cf92<0x3?_0x2902f2(_0x306004):_0x59cf92>0x3?_0x2902f2(_0x5e7e73,_0xc95c45,_0x306004):_0x2902f2(_0x5e7e73,_0xc95c45))||_0x306004;}return _0x59cf92>0x3&&_0x306004&&Object[_0x22d230(0x18b)](_0x5e7e73,_0xc95c45,_0x306004),_0x306004;};Object[_0x418bd5(0x18b)](exports,_0x418bd5(0x194),{'value':!![]}),exports[_0x418bd5(0x18d)]=void 0x0;const common_1=require(_0x418bd5(0x190)),jwtAuth_guard_1=require(_0x418bd5(0x18e));let SuperAuthGuard=class SuperAuthGuard extends jwtAuth_guard_1[_0x418bd5(0x198)]{async[_0x418bd5(0x195)](_0x3dcbb7){const _0x3f11b2=_0x418bd5,_0x4c750c=await super[_0x3f11b2(0x195)](_0x3dcbb7);if(!_0x4c750c)return![];const _0x4290aa=_0x3dcbb7[_0x3f11b2(0x18a)]()[_0x3f11b2(0x191)](),_0xb40904=_0x4290aa['user'];if(_0xb40904&&_0xb40904['role']==='super')return!![];else throw new common_1['UnauthorizedException'](_0x3f11b2(0x197));}};SuperAuthGuard=__decorate([(0x0,common_1[_0x418bd5(0x199)])()],SuperAuthGuard),exports[_0x418bd5(0x18d)]=SuperAuthGuard;