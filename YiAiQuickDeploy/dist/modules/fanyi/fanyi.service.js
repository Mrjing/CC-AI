'use strict';function _0x4cb6(){const _0x10bcc6=['getConfigs','getOwnPropertyDescriptor','data','1310AenaXO','GlobalConfigService','HttpException','dst','__esModule','globalConfigService','54PVfvnx','BAD_REQUEST','log','https://fanyi-api.baidu.com/api/trans/vip/translate','defineProperty','update','res:\x20','auto','baiduFanyiAppId','17919moSSzB','991740TIXNok','../globalConfig/globalConfig.service','design:paramtypes','__metadata','29028aAQwUG','HttpStatus','@nestjs/common','287512ncgiZP','当前管理员还未开放翻译服务、请联系管理员开通吧!','digest','toString','metadata','object','decorate','convertToEnglish','axios','length','function','FanyiService','md5','Injectable','翻译失败[','baiduFanyiSecret','now','22692vCnIkG','1238258HXhIxi','607525cMgvPr','13sSBFgl','createHash'];_0x4cb6=function(){return _0x10bcc6;};return _0x4cb6();}const _0x1d251c=_0x3062;(function(_0x5a17e9,_0x36c72a){const _0x23cfca=_0x3062,_0x357f34=_0x5a17e9();while(!![]){try{const _0x37b629=parseInt(_0x23cfca(0x91))/0x1*(parseInt(_0x23cfca(0x8e))/0x2)+-parseInt(_0x23cfca(0x6c))/0x3*(parseInt(_0x23cfca(0x7a))/0x4)+-parseInt(_0x23cfca(0x90))/0x5+parseInt(_0x23cfca(0x76))/0x6+-parseInt(_0x23cfca(0x8f))/0x7+-parseInt(_0x23cfca(0x7d))/0x8+parseInt(_0x23cfca(0x75))/0x9*(parseInt(_0x23cfca(0x66))/0xa);if(_0x37b629===_0x36c72a)break;else _0x357f34['push'](_0x357f34['shift']());}catch(_0x17501c){_0x357f34['push'](_0x357f34['shift']());}}}(_0x4cb6,0x1a865));var __decorate=this&&this['__decorate']||function(_0xb11148,_0x438438,_0x1c3c99,_0x4477ab){const _0x1b27a9=_0x3062;var _0x4c1082=arguments[_0x1b27a9(0x86)],_0x53c0f6=_0x4c1082<0x3?_0x438438:_0x4477ab===null?_0x4477ab=Object[_0x1b27a9(0x64)](_0x438438,_0x1c3c99):_0x4477ab,_0xb298ef;if(typeof Reflect===_0x1b27a9(0x82)&&typeof Reflect[_0x1b27a9(0x83)]===_0x1b27a9(0x87))_0x53c0f6=Reflect[_0x1b27a9(0x83)](_0xb11148,_0x438438,_0x1c3c99,_0x4477ab);else{for(var _0x1c40a0=_0xb11148[_0x1b27a9(0x86)]-0x1;_0x1c40a0>=0x0;_0x1c40a0--)if(_0xb298ef=_0xb11148[_0x1c40a0])_0x53c0f6=(_0x4c1082<0x3?_0xb298ef(_0x53c0f6):_0x4c1082>0x3?_0xb298ef(_0x438438,_0x1c3c99,_0x53c0f6):_0xb298ef(_0x438438,_0x1c3c99))||_0x53c0f6;}return _0x4c1082>0x3&&_0x53c0f6&&Object[_0x1b27a9(0x70)](_0x438438,_0x1c3c99,_0x53c0f6),_0x53c0f6;},__metadata=this&&this[_0x1d251c(0x79)]||function(_0x3ab6cf,_0xfe6c45){const _0x3da769=_0x1d251c;if(typeof Reflect===_0x3da769(0x82)&&typeof Reflect[_0x3da769(0x81)]===_0x3da769(0x87))return Reflect['metadata'](_0x3ab6cf,_0xfe6c45);};function _0x3062(_0x8f1c8e,_0x44865d){const _0x4cb67c=_0x4cb6();return _0x3062=function(_0x306231,_0x1c0cb1){_0x306231=_0x306231-0x64;let _0x332a64=_0x4cb67c[_0x306231];return _0x332a64;},_0x3062(_0x8f1c8e,_0x44865d);}Object[_0x1d251c(0x70)](exports,_0x1d251c(0x6a),{'value':!![]}),exports[_0x1d251c(0x88)]=void 0x0;const globalConfig_service_1=require(_0x1d251c(0x77)),common_1=require(_0x1d251c(0x7c)),axios_1=require(_0x1d251c(0x85)),crypto=require('crypto');let FanyiService=class FanyiService{constructor(_0x40ef17){const _0x2a825a=_0x1d251c;this[_0x2a825a(0x6b)]=_0x40ef17;}async[_0x1d251c(0x84)](_0x4abd57){const _0x127aac=_0x1d251c;if(!_0x4abd57)throw new common_1['HttpException']('请输入要翻译的内容!',common_1[_0x127aac(0x7b)][_0x127aac(0x6d)]);const {baiduFanyiAppId:_0x56ab0b,baiduFanyiSecret:_0x5092dd}=await this[_0x127aac(0x6b)][_0x127aac(0x93)]([_0x127aac(0x74),_0x127aac(0x8c)]);if(!_0x56ab0b||!_0x5092dd)throw new common_1[(_0x127aac(0x68))](_0x127aac(0x7e),common_1[_0x127aac(0x7b)][_0x127aac(0x6d)]);const _0x2c804f=Date[_0x127aac(0x8d)]()[_0x127aac(0x80)](),_0x3ad198=crypto[_0x127aac(0x92)](_0x127aac(0x89))[_0x127aac(0x71)](_0x56ab0b+_0x4abd57+_0x2c804f+_0x5092dd)[_0x127aac(0x7f)]('hex'),_0x43e528=_0x127aac(0x6f),_0x3676f8={'q':_0x4abd57['toString'](),'from':_0x127aac(0x73),'to':'en','appid':_0x56ab0b,'salt':_0x2c804f,'sign':_0x3ad198},_0x272ab3=await axios_1['default']['post'](_0x43e528,_0x3676f8,{'headers':{'Content-Type':'application/x-www-form-urlencoded'}}),{from:_0x5d2993,to:_0x51f812,trans_result:_0x32316f,error_code:_0x9d6deb,error_msg:_0xd0782d}=_0x272ab3[_0x127aac(0x65)];if(_0x9d6deb){console[_0x127aac(0x6e)](_0x127aac(0x72),_0x272ab3);throw new common_1[(_0x127aac(0x68))]('翻译失败['+_0x9d6deb+']['+_0xd0782d+']!',common_1[_0x127aac(0x7b)][_0x127aac(0x6d)]);}if(!_0x32316f||!_0x32316f[_0x127aac(0x86)]){console[_0x127aac(0x6e)]('res:\x20',_0x272ab3);throw new common_1[(_0x127aac(0x68))](_0x127aac(0x8b)+_0x9d6deb+']['+_0xd0782d+']!',common_1[_0x127aac(0x7b)][_0x127aac(0x6d)]);}else{}return _0x32316f[0x0][_0x127aac(0x69)];}};FanyiService=__decorate([(0x0,common_1[_0x1d251c(0x8a)])(),__metadata(_0x1d251c(0x78),[globalConfig_service_1[_0x1d251c(0x67)]])],FanyiService),exports[_0x1d251c(0x88)]=FanyiService;