'use strict';const _0x120868=_0x2a62;(function(_0x371427,_0x1ae060){const _0x3a4ff1=_0x2a62,_0x1d0307=_0x371427();while(!![]){try{const _0x92949=parseInt(_0x3a4ff1(0x9b))/0x1*(parseInt(_0x3a4ff1(0x94))/0x2)+-parseInt(_0x3a4ff1(0xa8))/0x3*(-parseInt(_0x3a4ff1(0xa0))/0x4)+parseInt(_0x3a4ff1(0xa3))/0x5*(parseInt(_0x3a4ff1(0x96))/0x6)+-parseInt(_0x3a4ff1(0x99))/0x7*(-parseInt(_0x3a4ff1(0x9c))/0x8)+parseInt(_0x3a4ff1(0xa2))/0x9+-parseInt(_0x3a4ff1(0xae))/0xa*(-parseInt(_0x3a4ff1(0xa1))/0xb)+-parseInt(_0x3a4ff1(0xa5))/0xc;if(_0x92949===_0x1ae060)break;else _0x1d0307['push'](_0x1d0307['shift']());}catch(_0x29bda6){_0x1d0307['push'](_0x1d0307['shift']());}}}(_0x48de,0x549d0));Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x120868(0xaf)]=void 0x0;const mysql=require(_0x120868(0x97)),common_1=require(_0x120868(0xac));function _0x2a62(_0x2803e7,_0x5ae7b9){const _0x48de98=_0x48de();return _0x2a62=function(_0x2a6261,_0x31b76f){_0x2a6261=_0x2a6261-0x94;let _0x476d18=_0x48de98[_0x2a6261];return _0x476d18;},_0x2a62(_0x2803e7,_0x5ae7b9);}function initDatabase(){const _0x489d9c=_0x120868;mysql[_0x489d9c(0xaa)]({'host':process[_0x489d9c(0xa6)][_0x489d9c(0x9d)],'user':process[_0x489d9c(0xa6)][_0x489d9c(0xa4)],'password':process['env']['DB_PASS'],'port':parseInt(process[_0x489d9c(0xa6)][_0x489d9c(0x95)])})['then'](async _0x27a9f6=>{const _0x3a7511=_0x489d9c,[_0x53ec13]=await _0x27a9f6[_0x3a7511(0x98)](_0x3a7511(0xb0)+process[_0x3a7511(0xa6)][_0x3a7511(0x9e)]+'\x27');Array[_0x3a7511(0xab)](_0x53ec13)&&_0x53ec13[_0x3a7511(0xad)]===0x0&&(await _0x27a9f6[_0x3a7511(0x98)](_0x3a7511(0x9f)+process[_0x3a7511(0xa6)]['DB_DATABASE']),common_1[_0x3a7511(0xa9)][_0x3a7511(0x9a)]('数据库创建成功['+process[_0x3a7511(0xa6)][_0x3a7511(0x9e)]+']')),await _0x27a9f6[_0x3a7511(0xa7)]();});}function _0x48de(){const _0x56ad36=['end','19902lEzLwX','Logger','createConnection','isArray','@nestjs/common','length','2195430NPzyml','initDatabase','SHOW\x20DATABASES\x20LIKE\x20\x27','248458lzXfuP','DB_PORT','11634SxMwGL','mysql2/promise','execute','2592436dHVPYj','log','1scWquS','8UZiGrx','DB_HOST','DB_DATABASE','CREATE\x20DATABASE\x20','64iJJgmb','33SGzqTC','2903211GtiRUI','665zlxgQv','DB_USER','17918880ArcPnw','env'];_0x48de=function(){return _0x56ad36;};return _0x48de();}exports[_0x120868(0xaf)]=initDatabase;