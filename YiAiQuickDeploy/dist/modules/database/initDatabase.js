'use strict';const _0x3e202e=_0x39fa;(function(_0x410127,_0x294e1b){const _0x181334=_0x39fa,_0x30d19c=_0x410127();while(!![]){try{const _0x242f4c=-parseInt(_0x181334(0xb9))/0x1+-parseInt(_0x181334(0xb2))/0x2+parseInt(_0x181334(0xaf))/0x3*(parseInt(_0x181334(0xad))/0x4)+parseInt(_0x181334(0xa9))/0x5*(-parseInt(_0x181334(0xb6))/0x6)+parseInt(_0x181334(0xbe))/0x7+-parseInt(_0x181334(0xbd))/0x8+parseInt(_0x181334(0xb4))/0x9;if(_0x242f4c===_0x294e1b)break;else _0x30d19c['push'](_0x30d19c['shift']());}catch(_0x24c140){_0x30d19c['push'](_0x30d19c['shift']());}}}(_0x25c2,0x21ed8));function _0x39fa(_0x3a750d,_0x240a32){const _0x25c23a=_0x25c2();return _0x39fa=function(_0x39fa77,_0x206dcd){_0x39fa77=_0x39fa77-0xa9;let _0x27ae1e=_0x25c23a[_0x39fa77];return _0x27ae1e;},_0x39fa(_0x3a750d,_0x240a32);}Object[_0x3e202e(0xb5)](exports,'__esModule',{'value':!![]}),exports['initDatabase']=void 0x0;function _0x25c2(){const _0x39d27d=['length','7104zDodtV','DB_DATABASE','execute','73540SiVApZ','end','2775339QBsZVi','defineProperty','6UDzrCC','DB_USER','env','63574wZrSYv','数据库创建成功[','then','initDatabase','2170768nJruLs','892871hxQCXv','DB_HOST','createConnection','CREATE\x20DATABASE\x20','727450sNjyVP','DB_PORT','isArray','SHOW\x20DATABASES\x20LIKE\x20\x27','372pCjqcS'];_0x25c2=function(){return _0x39d27d;};return _0x25c2();}const mysql=require('mysql2/promise'),common_1=require('@nestjs/common');function initDatabase(){const _0x3c68ce=_0x3e202e;mysql[_0x3c68ce(0xc0)]({'host':process['env'][_0x3c68ce(0xbf)],'user':process[_0x3c68ce(0xb8)][_0x3c68ce(0xb7)],'password':process['env']['DB_PASS'],'port':parseInt(process[_0x3c68ce(0xb8)][_0x3c68ce(0xaa)])})[_0x3c68ce(0xbb)](async _0x41cd9d=>{const _0x15d22e=_0x3c68ce,[_0x2cec7a]=await _0x41cd9d[_0x15d22e(0xb1)](_0x15d22e(0xac)+process['env']['DB_DATABASE']+'\x27');Array[_0x15d22e(0xab)](_0x2cec7a)&&_0x2cec7a[_0x15d22e(0xae)]===0x0&&(await _0x41cd9d['execute'](_0x15d22e(0xc1)+process['env'][_0x15d22e(0xb0)]),common_1['Logger']['log'](_0x15d22e(0xba)+process[_0x15d22e(0xb8)][_0x15d22e(0xb0)]+']')),await _0x41cd9d[_0x15d22e(0xb3)]();});}exports[_0x3e202e(0xbc)]=initDatabase;