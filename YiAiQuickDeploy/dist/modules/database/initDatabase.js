'use strict';const _0xc2cdcc=_0x440b;function _0x2e46(){const _0x5319b6=['@nestjs/common','2678142bCGmnm','execute','createConnection','defineProperty','then','数据库创建成功[','3193480pBmhmj','CREATE\x20DATABASE\x20','initDatabase','SHOW\x20DATABASES\x20LIKE\x20\x27','env','1376667pHFEKP','138822iboROj','end','3829628lvcpRb','DB_USER','__esModule','2696622qtZzCg','mysql2/promise','DB_DATABASE','21hgUAZe','length','16607472IsDEZA'];_0x2e46=function(){return _0x5319b6;};return _0x2e46();}(function(_0x1fa9ed,_0x584e0e){const _0x2b946c=_0x440b,_0x361062=_0x1fa9ed();while(!![]){try{const _0x4a268e=parseInt(_0x2b946c(0x1fd))/0x1+-parseInt(_0x2b946c(0x1eb))/0x2+parseInt(_0x2b946c(0x1e6))/0x3+parseInt(_0x2b946c(0x1e8))/0x4+parseInt(_0x2b946c(0x1f8))/0x5+-parseInt(_0x2b946c(0x1f2))/0x6*(-parseInt(_0x2b946c(0x1ee))/0x7)+-parseInt(_0x2b946c(0x1f0))/0x8;if(_0x4a268e===_0x584e0e)break;else _0x361062['push'](_0x361062['shift']());}catch(_0x4f27c7){_0x361062['push'](_0x361062['shift']());}}}(_0x2e46,0xe3fee));Object[_0xc2cdcc(0x1f5)](exports,_0xc2cdcc(0x1ea),{'value':!![]}),exports[_0xc2cdcc(0x1fa)]=void 0x0;const mysql=require(_0xc2cdcc(0x1ec)),common_1=require(_0xc2cdcc(0x1f1));function initDatabase(){const _0x2b31b6=_0xc2cdcc;mysql[_0x2b31b6(0x1f4)]({'host':process['env']['DB_HOST'],'user':process[_0x2b31b6(0x1fc)][_0x2b31b6(0x1e9)],'password':process[_0x2b31b6(0x1fc)]['DB_PASS'],'port':parseInt(process['env']['DB_PORT'])})[_0x2b31b6(0x1f6)](async _0x3521ca=>{const _0x521f7f=_0x2b31b6,[_0x4f5a90]=await _0x3521ca[_0x521f7f(0x1f3)](_0x521f7f(0x1fb)+process[_0x521f7f(0x1fc)][_0x521f7f(0x1ed)]+'\x27');Array['isArray'](_0x4f5a90)&&_0x4f5a90[_0x521f7f(0x1ef)]===0x0&&(await _0x3521ca['execute'](_0x521f7f(0x1f9)+process[_0x521f7f(0x1fc)][_0x521f7f(0x1ed)]),common_1['Logger']['log'](_0x521f7f(0x1f7)+process['env'][_0x521f7f(0x1ed)]+']')),await _0x3521ca[_0x521f7f(0x1e7)]();});}function _0x440b(_0x234bfd,_0x59ae46){const _0x2e4618=_0x2e46();return _0x440b=function(_0x440bfd,_0x53795c){_0x440bfd=_0x440bfd-0x1e6;let _0x3b8ce5=_0x2e4618[_0x440bfd];return _0x3b8ce5;},_0x440b(_0x234bfd,_0x59ae46);}exports[_0xc2cdcc(0x1fa)]=initDatabase;