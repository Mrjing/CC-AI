'use strict';const _0x4452b1=_0x4a3e;(function(_0x14bc3d,_0x480b3f){const _0x1436d9=_0x4a3e,_0x5a84fe=_0x14bc3d();while(!![]){try{const _0x39eda8=-parseInt(_0x1436d9(0xc9))/0x1+parseInt(_0x1436d9(0xca))/0x2*(-parseInt(_0x1436d9(0xd4))/0x3)+parseInt(_0x1436d9(0xd3))/0x4+-parseInt(_0x1436d9(0xc6))/0x5+parseInt(_0x1436d9(0xdd))/0x6+parseInt(_0x1436d9(0xe0))/0x7+-parseInt(_0x1436d9(0xd9))/0x8*(-parseInt(_0x1436d9(0xd8))/0x9);if(_0x39eda8===_0x480b3f)break;else _0x5a84fe['push'](_0x5a84fe['shift']());}catch(_0x3923db){_0x5a84fe['push'](_0x5a84fe['shift']());}}}(_0x5cd4,0xd60c7));function _0x5cd4(){const _0x260bf4=['dayjs','407736hWdmrG','2XsYuXl','extend','updatedAt','dayjs/locale/zh-cn','locale','Asia/Shanghai','formatDate','dayjs/plugin/timezone','parse','2188664OhbDBv','62637CTgoAl','YYYY-MM-DD\x20HH:mm:ss','zh-cn','stringify','26181qKZRvq','192pCkGGX','formatCreateOrUpdateDate','format','map','4885380qTjsmE','__esModule','isExpired','1864996crpqPg','setDefault','createdAt','defineProperty','1961410zMRHTf','getTime'];_0x5cd4=function(){return _0x260bf4;};return _0x5cd4();}Object[_0x4452b1(0xc5)](exports,_0x4452b1(0xde),{'value':!![]}),exports[_0x4452b1(0xdf)]=exports['formatCreateOrUpdateDate']=exports[_0x4452b1(0xd0)]=void 0x0;const dayjs=require(_0x4452b1(0xc8));require(_0x4452b1(0xcd));const a=require('dayjs/plugin/utc'),b=require(_0x4452b1(0xd1));dayjs[_0x4452b1(0xce)](_0x4452b1(0xd6)),dayjs[_0x4452b1(0xcb)](a),dayjs[_0x4452b1(0xcb)](b),dayjs['tz'][_0x4452b1(0xe1)](_0x4452b1(0xcf));function formatDate(_0x31d422,_0x5c18f6='YYYY-MM-DD\x20HH:mm:ss'){return dayjs(_0x31d422)['format'](_0x5c18f6);}function _0x4a3e(_0x4da73c,_0x169662){const _0x5cd49d=_0x5cd4();return _0x4a3e=function(_0x4a3ef0,_0x4ec674){_0x4a3ef0=_0x4a3ef0-0xc4;let _0x17ad2b=_0x5cd49d[_0x4a3ef0];return _0x17ad2b;},_0x4a3e(_0x4da73c,_0x169662);}exports[_0x4452b1(0xd0)]=formatDate;function formatCreateOrUpdateDate(_0xe00f72,_0x18a567=_0x4452b1(0xd5)){const _0x2de01a=_0x4452b1;if(Array['isArray'](_0xe00f72))return _0xe00f72[_0x2de01a(0xdc)](_0x4b9b12=>{const _0xa77498=_0x2de01a;return _0x4b9b12['createdAt']=(_0x4b9b12===null||_0x4b9b12===void 0x0?void 0x0:_0x4b9b12['createdAt'])?dayjs(_0x4b9b12['createdAt'])[_0xa77498(0xdb)](_0x18a567):dayjs()[_0xa77498(0xdb)](_0x18a567),_0x4b9b12['updatedAt']=(_0x4b9b12===null||_0x4b9b12===void 0x0?void 0x0:_0x4b9b12['updatedAt'])?dayjs(_0x4b9b12['updatedAt'])['format'](_0x18a567):dayjs()[_0xa77498(0xdb)](_0x18a567),_0x4b9b12;});else{let _0x2eca31={};try{_0x2eca31=JSON[_0x2de01a(0xd2)](JSON[_0x2de01a(0xd7)](_0xe00f72));}catch(_0x485102){}return(_0x2eca31===null||_0x2eca31===void 0x0?void 0x0:_0x2eca31[_0x2de01a(0xc4)])&&(_0x2eca31[_0x2de01a(0xc4)]=dayjs(_0x2eca31[_0x2de01a(0xc4)])['format'](_0x18a567)),(_0x2eca31===null||_0x2eca31===void 0x0?void 0x0:_0x2eca31[_0x2de01a(0xcc)])&&(_0x2eca31['updatedAt']=dayjs(_0x2eca31[_0x2de01a(0xcc)])[_0x2de01a(0xdb)](_0x18a567)),_0x2eca31;}}exports[_0x4452b1(0xda)]=formatCreateOrUpdateDate;function isExpired(_0x3f7638,_0x52b83d){const _0x3a7274=_0x4452b1,_0x14f179=new Date(_0x3f7638[_0x3a7274(0xc7)]()+_0x52b83d*0x18*0x3c*0x3c*0x3e8),_0x1c87a0=new Date();return _0x1c87a0>_0x14f179;}exports['isExpired']=isExpired,exports['default']=dayjs;