'use strict';const _0x31f74c=_0x3548;(function(_0x341d7d,_0x4c5387){const _0x56093e=_0x3548,_0x5b2969=_0x341d7d();while(!![]){try{const _0x50a912=parseInt(_0x56093e(0xe3))/0x1*(-parseInt(_0x56093e(0xd6))/0x2)+-parseInt(_0x56093e(0xd4))/0x3+parseInt(_0x56093e(0xd8))/0x4*(-parseInt(_0x56093e(0xd3))/0x5)+-parseInt(_0x56093e(0xe5))/0x6+parseInt(_0x56093e(0xec))/0x7+-parseInt(_0x56093e(0xe2))/0x8*(parseInt(_0x56093e(0xd5))/0x9)+parseInt(_0x56093e(0xe7))/0xa;if(_0x50a912===_0x4c5387)break;else _0x5b2969['push'](_0x5b2969['shift']());}catch(_0x3a2bb5){_0x5b2969['push'](_0x5b2969['shift']());}}}(_0x49f0,0x718f8));function _0x3548(_0x10965d,_0x34bc36){const _0x49f014=_0x49f0();return _0x3548=function(_0x3548b8,_0x3cc268){_0x3548b8=_0x3548b8-0xd3;let _0x510a0e=_0x49f014[_0x3548b8];return _0x510a0e;},_0x3548(_0x10965d,_0x34bc36);}Object[_0x31f74c(0xe4)](exports,_0x31f74c(0xd7),{'value':!![]}),exports[_0x31f74c(0xde)]=void 0x0;const mysql=require(_0x31f74c(0xdf)),common_1=require(_0x31f74c(0xeb));function _0x49f0(){const _0x577033=['isArray','@nestjs/common','2306297YUZqSa','then','2085YXjcEY','1230759cewnDO','45WMgnrm','11114JkRmdP','__esModule','5004giPdgz','DB_PASS','end','env','execute','SHOW\x20DATABASES\x20LIKE\x20\x27','initDatabase','mysql2/promise','createConnection','Logger','94944SEMuag','125HcqEcP','defineProperty','4609782qfCRWV','DB_HOST','25898550UNFKBv','DB_DATABASE','DB_USER'];_0x49f0=function(){return _0x577033;};return _0x49f0();}function initDatabase(){const _0x429cf7=_0x31f74c;mysql[_0x429cf7(0xe0)]({'host':process['env'][_0x429cf7(0xe6)],'user':process[_0x429cf7(0xdb)][_0x429cf7(0xe9)],'password':process[_0x429cf7(0xdb)][_0x429cf7(0xd9)],'port':parseInt(process[_0x429cf7(0xdb)]['DB_PORT'])})[_0x429cf7(0xed)](async _0x5dd587=>{const _0xab6b4b=_0x429cf7,[_0x11c514]=await _0x5dd587[_0xab6b4b(0xdc)](_0xab6b4b(0xdd)+process[_0xab6b4b(0xdb)]['DB_DATABASE']+'\x27');Array[_0xab6b4b(0xea)](_0x11c514)&&_0x11c514['length']===0x0&&(await _0x5dd587[_0xab6b4b(0xdc)]('CREATE\x20DATABASE\x20'+process[_0xab6b4b(0xdb)][_0xab6b4b(0xe8)]),common_1[_0xab6b4b(0xe1)]['log']('数据库创建成功['+process['env'][_0xab6b4b(0xe8)]+']')),await _0x5dd587[_0xab6b4b(0xda)]();});}exports['initDatabase']=initDatabase;