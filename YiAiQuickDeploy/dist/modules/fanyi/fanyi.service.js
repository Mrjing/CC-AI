'use strict';const _0x5e013d=_0x5c8c;(function(_0x567b6e,_0x11c5ec){const _0x39f083=_0x5c8c,_0x352506=_0x567b6e();while(!![]){try{const _0x4d3549=parseInt(_0x39f083(0x1d8))/0x1*(parseInt(_0x39f083(0x1d0))/0x2)+-parseInt(_0x39f083(0x1d9))/0x3+-parseInt(_0x39f083(0x1c4))/0x4*(-parseInt(_0x39f083(0x1bb))/0x5)+parseInt(_0x39f083(0x1cb))/0x6+parseInt(_0x39f083(0x1c9))/0x7+parseInt(_0x39f083(0x1b7))/0x8*(parseInt(_0x39f083(0x1bd))/0x9)+-parseInt(_0x39f083(0x1ce))/0xa;if(_0x4d3549===_0x11c5ec)break;else _0x352506['push'](_0x352506['shift']());}catch(_0x558538){_0x352506['push'](_0x352506['shift']());}}}(_0x551f,0xb6a19));var __decorate=this&&this[_0x5e013d(0x1b3)]||function(_0xc67ff3,_0x2a2461,_0x4ec036,_0x55572a){const _0x180ae5=_0x5e013d;var _0x3686d0=arguments[_0x180ae5(0x1af)],_0x454fc7=_0x3686d0<0x3?_0x2a2461:_0x55572a===null?_0x55572a=Object[_0x180ae5(0x1c3)](_0x2a2461,_0x4ec036):_0x55572a,_0xac9389;if(typeof Reflect==='object'&&typeof Reflect[_0x180ae5(0x1c7)]===_0x180ae5(0x1cc))_0x454fc7=Reflect[_0x180ae5(0x1c7)](_0xc67ff3,_0x2a2461,_0x4ec036,_0x55572a);else{for(var _0x2378bb=_0xc67ff3[_0x180ae5(0x1af)]-0x1;_0x2378bb>=0x0;_0x2378bb--)if(_0xac9389=_0xc67ff3[_0x2378bb])_0x454fc7=(_0x3686d0<0x3?_0xac9389(_0x454fc7):_0x3686d0>0x3?_0xac9389(_0x2a2461,_0x4ec036,_0x454fc7):_0xac9389(_0x2a2461,_0x4ec036))||_0x454fc7;}return _0x3686d0>0x3&&_0x454fc7&&Object[_0x180ae5(0x1d4)](_0x2a2461,_0x4ec036,_0x454fc7),_0x454fc7;},__metadata=this&&this[_0x5e013d(0x1b9)]||function(_0x2055b8,_0x18034a){const _0x15dda0=_0x5e013d;if(typeof Reflect==='object'&&typeof Reflect[_0x15dda0(0x1d2)]===_0x15dda0(0x1cc))return Reflect[_0x15dda0(0x1d2)](_0x2055b8,_0x18034a);};Object[_0x5e013d(0x1d4)](exports,'__esModule',{'value':!![]}),exports[_0x5e013d(0x1c1)]=void 0x0;const globalConfig_service_1=require(_0x5e013d(0x1b1)),common_1=require(_0x5e013d(0x1c6)),axios_1=require(_0x5e013d(0x1c5)),crypto=require('crypto');let FanyiService=class FanyiService{constructor(_0x3e7d35){const _0x4ecb6b=_0x5e013d;this[_0x4ecb6b(0x1ba)]=_0x3e7d35;}async[_0x5e013d(0x1d3)](_0x5857cc){const _0x2e76f3=_0x5e013d;if(!_0x5857cc)throw new common_1['HttpException'](_0x2e76f3(0x1be),common_1['HttpStatus']['BAD_REQUEST']);const {baiduFanyiAppId:_0x40e983,baiduFanyiSecret:_0x321f02}=await this[_0x2e76f3(0x1ba)][_0x2e76f3(0x1c0)](['baiduFanyiAppId',_0x2e76f3(0x1d7)]);if(!_0x40e983||!_0x321f02)throw new common_1[(_0x2e76f3(0x1d5))](_0x2e76f3(0x1b5),common_1[_0x2e76f3(0x1ca)][_0x2e76f3(0x1bc)]);const _0x1293b2=Date[_0x2e76f3(0x1da)]()[_0x2e76f3(0x1b6)](),_0x22d98f=crypto['createHash'](_0x2e76f3(0x1db))['update'](_0x40e983+_0x5857cc+_0x1293b2+_0x321f02)['digest'](_0x2e76f3(0x1bf)),_0x5c2cea=_0x2e76f3(0x1c2),_0x16b215={'q':_0x5857cc[_0x2e76f3(0x1b6)](),'from':_0x2e76f3(0x1b4),'to':'en','appid':_0x40e983,'salt':_0x1293b2,'sign':_0x22d98f},_0xa3cde6=await axios_1['default']['post'](_0x5c2cea,_0x16b215,{'headers':{'Content-Type':_0x2e76f3(0x1cd)}}),{from:_0x46d83e,to:_0x4b7a73,trans_result:_0x270b25,error_code:_0x1103ae,error_msg:_0x1a8788}=_0xa3cde6[_0x2e76f3(0x1cf)];if(_0x1103ae){console[_0x2e76f3(0x1b8)]('res:\x20',_0xa3cde6);throw new common_1[(_0x2e76f3(0x1d5))](_0x2e76f3(0x1b2)+_0x1103ae+']['+_0x1a8788+']!',common_1[_0x2e76f3(0x1ca)][_0x2e76f3(0x1bc)]);}if(!_0x270b25||!_0x270b25[_0x2e76f3(0x1af)]){console['log'](_0x2e76f3(0x1c8),_0xa3cde6);throw new common_1[(_0x2e76f3(0x1d5))]('翻译失败['+_0x1103ae+']['+_0x1a8788+']!',common_1[_0x2e76f3(0x1ca)][_0x2e76f3(0x1bc)]);}else{}return _0x270b25[0x0][_0x2e76f3(0x1b0)];}};function _0x5c8c(_0x42fc67,_0x395478){const _0x551fdb=_0x551f();return _0x5c8c=function(_0x5c8c3f,_0x583fae){_0x5c8c3f=_0x5c8c3f-0x1af;let _0x48a0eb=_0x551fdb[_0x5c8c3f];return _0x48a0eb;},_0x5c8c(_0x42fc67,_0x395478);}FanyiService=__decorate([(0x0,common_1[_0x5e013d(0x1d6)])(),__metadata('design:paramtypes',[globalConfig_service_1[_0x5e013d(0x1d1)]])],FanyiService),exports['FanyiService']=FanyiService;function _0x551f(){const _0x28f05a=['axios','@nestjs/common','decorate','res:\x20','2023063AMoFKu','HttpStatus','4875384gnVAMn','function','application/x-www-form-urlencoded','28555070DLZRVp','data','7006thvHJw','GlobalConfigService','metadata','convertToEnglish','defineProperty','HttpException','Injectable','baiduFanyiSecret','214pbLpMY','2119836fGqyxi','now','md5','length','dst','../globalConfig/globalConfig.service','翻译失败[','__decorate','auto','当前管理员还未开放翻译服务、请联系管理员开通吧!','toString','11599816UtFrhc','log','__metadata','globalConfigService','340hkKddu','BAD_REQUEST','9OoZAJH','请输入要翻译的内容!','hex','getConfigs','FanyiService','https://fanyi-api.baidu.com/api/trans/vip/translate','getOwnPropertyDescriptor','59352BgdrSJ'];_0x551f=function(){return _0x28f05a;};return _0x551f();}