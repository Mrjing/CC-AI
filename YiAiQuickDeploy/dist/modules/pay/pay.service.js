'use strict';const _0x5bb997=_0x9ff9;(function(_0x34c4d1,_0x189718){const _0x2b89d8=_0x9ff9,_0x1dccfd=_0x34c4d1();while(!![]){try{const _0x263492=-parseInt(_0x2b89d8(0xef))/0x1*(parseInt(_0x2b89d8(0xe4))/0x2)+-parseInt(_0x2b89d8(0xf1))/0x3+-parseInt(_0x2b89d8(0x122))/0x4*(parseInt(_0x2b89d8(0x131))/0x5)+parseInt(_0x2b89d8(0xb4))/0x6+-parseInt(_0x2b89d8(0xc2))/0x7+parseInt(_0x2b89d8(0x132))/0x8+-parseInt(_0x2b89d8(0x13b))/0x9*(-parseInt(_0x2b89d8(0xd8))/0xa);if(_0x263492===_0x189718)break;else _0x1dccfd['push'](_0x1dccfd['shift']());}catch(_0x53d9d9){_0x1dccfd['push'](_0x1dccfd['shift']());}}}(_0x4367,0x26ab8));var __decorate=this&&this[_0x5bb997(0x10c)]||function(_0x3a0578,_0x1c8583,_0x147ac1,_0x195396){const _0x130a62=_0x5bb997;var _0x59d90c=arguments[_0x130a62(0xf7)],_0x56ffe5=_0x59d90c<0x3?_0x1c8583:_0x195396===null?_0x195396=Object[_0x130a62(0xb7)](_0x1c8583,_0x147ac1):_0x195396,_0x2a9381;if(typeof Reflect==='object'&&typeof Reflect[_0x130a62(0xe9)]===_0x130a62(0xc8))_0x56ffe5=Reflect[_0x130a62(0xe9)](_0x3a0578,_0x1c8583,_0x147ac1,_0x195396);else{for(var _0x3ef727=_0x3a0578[_0x130a62(0xf7)]-0x1;_0x3ef727>=0x0;_0x3ef727--)if(_0x2a9381=_0x3a0578[_0x3ef727])_0x56ffe5=(_0x59d90c<0x3?_0x2a9381(_0x56ffe5):_0x59d90c>0x3?_0x2a9381(_0x1c8583,_0x147ac1,_0x56ffe5):_0x2a9381(_0x1c8583,_0x147ac1))||_0x56ffe5;}return _0x59d90c>0x3&&_0x56ffe5&&Object[_0x130a62(0x113)](_0x1c8583,_0x147ac1,_0x56ffe5),_0x56ffe5;},__metadata=this&&this[_0x5bb997(0x12b)]||function(_0x18114c,_0xfa2839){const _0x3d5975=_0x5bb997;if(typeof Reflect===_0x3d5975(0x12d)&&typeof Reflect[_0x3d5975(0x11f)]==='function')return Reflect[_0x3d5975(0x11f)](_0x18114c,_0xfa2839);},__param=this&&this[_0x5bb997(0x115)]||function(_0x861218,_0x33776f){return function(_0x5c39d2,_0x43ba2e){_0x33776f(_0x5c39d2,_0x43ba2e,_0x861218);};};function _0x9ff9(_0x277c41,_0x559ff1){const _0x4367e1=_0x4367();return _0x9ff9=function(_0x9ff994,_0x2fbdaa){_0x9ff994=_0x9ff994-0x9c;let _0x25dafc=_0x4367e1[_0x9ff994];return _0x25dafc;},_0x9ff9(_0x277c41,_0x559ff1);}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x5bb997(0x125)]=void 0x0;const typeorm_1=require('@nestjs/typeorm'),typeorm_2=require('typeorm'),common_1=require(_0x5bb997(0x138)),crypto=require(_0x5bb997(0xd7)),axios_1=require(_0x5bb997(0x12c)),order_entity_1=require('../order/order.entity'),cramiPackage_entity_1=require(_0x5bb997(0x136)),userBalance_service_1=require(_0x5bb997(0xd5)),globalConfig_service_1=require('../globalConfig/globalConfig.service'),utils_1=require(_0x5bb997(0x101)),user_service_1=require(_0x5bb997(0x12e));let PayService=class PayService{constructor(_0x418c25,_0x3420e6,_0x4c2017,_0x5e3e68,_0x372580){const _0x56a7c1=_0x5bb997;this[_0x56a7c1(0x130)]=_0x418c25,this[_0x56a7c1(0x9d)]=_0x3420e6,this['userBalanceService']=_0x4c2017,this['globalConfigService']=_0x5e3e68,this[_0x56a7c1(0x126)]=_0x372580;}async['onModuleInit'](){const _0x289e2e=_0x5bb997,_0x52d38b=await(0x0,utils_1[_0x289e2e(0xa3)])('wechatpay-node-v3');this[_0x289e2e(0x120)]=(_0x52d38b===null||_0x52d38b===void 0x0?void 0x0:_0x52d38b['default'])?_0x52d38b[_0x289e2e(0xc9)]:_0x52d38b;}async[_0x5bb997(0x104)](_0x3b00b1){const _0x4850e2=_0x5bb997;if(_0x3b00b1[_0x4850e2(0xad)]==_0x4850e2(0xf3))return this[_0x4850e2(0xda)](_0x3b00b1);if(_0x3b00b1[_0x4850e2(0xfa)]=='hupi')return this[_0x4850e2(0x13f)](_0x3b00b1);if(typeof _0x3b00b1[_0x4850e2(0x129)]==_0x4850e2(0x12d))return this[_0x4850e2(0xfd)](_0x3b00b1);return this[_0x4850e2(0xf4)](_0x3b00b1);}async['pay'](_0x545d3c,_0x5c16e6,_0x145d0d=_0x5bb997(0x13c)){const _0x3641e6=_0x5bb997,_0x64d225=await this[_0x3641e6(0x9d)]['findOne']({'where':{'userId':_0x545d3c,'orderId':_0x5c16e6}});if(!_0x64d225)throw new common_1['HttpException'](_0x3641e6(0x110),common_1[_0x3641e6(0x139)][_0x3641e6(0x123)]);const _0x4b6906=await this[_0x3641e6(0x130)]['findOne']({'where':{'id':_0x64d225[_0x3641e6(0x13d)]}});if(!_0x4b6906)throw new common_1[(_0x3641e6(0xdf))](_0x3641e6(0xe5),common_1[_0x3641e6(0x139)][_0x3641e6(0x123)]);console['log'](_0x3641e6(0x11c),_0x64d225[_0x3641e6(0xe6)]);try{if(_0x64d225[_0x3641e6(0xe6)]==_0x3641e6(0xb0))return this[_0x3641e6(0x124)](_0x545d3c,_0x5c16e6,_0x145d0d);if(_0x64d225[_0x3641e6(0xe6)]==_0x3641e6(0xf3))return this[_0x3641e6(0xa7)](_0x545d3c,_0x5c16e6,_0x145d0d);if(_0x64d225[_0x3641e6(0xe6)]=='mpay')return this[_0x3641e6(0x105)](_0x545d3c,_0x5c16e6,_0x145d0d);if(_0x64d225[_0x3641e6(0xe6)]==_0x3641e6(0x11a))return this[_0x3641e6(0x13a)](_0x545d3c,_0x5c16e6,_0x145d0d);}catch(_0x19f98a){console[_0x3641e6(0xbe)](_0x3641e6(0xcf),_0x19f98a);throw new common_1[(_0x3641e6(0xdf))](_0x3641e6(0xbc),common_1[_0x3641e6(0x139)][_0x3641e6(0x123)]);}}async[_0x5bb997(0xa5)](_0x4fb8f3){const _0x1e9d01=_0x5bb997,_0x3d8734=await this[_0x1e9d01(0x9d)]['findOne']({'where':{'orderId':_0x4fb8f3}});if(!_0x3d8734)throw new common_1['HttpException']('订单不存在!',common_1['HttpStatus']['BAD_REQUEST']);return _0x3d8734;}async[_0x5bb997(0x13f)](_0x46ba0d){const _0x1b3b76=_0x5bb997,_0x26af05=await this[_0x1b3b76(0xb8)][_0x1b3b76(0x116)]([_0x1b3b76(0xe8)]),_0x49d754=_0x46ba0d[_0x1b3b76(0x10a)];delete _0x46ba0d[_0x1b3b76(0x10a)];if(this[_0x1b3b76(0x112)](_0x46ba0d,_0x26af05)!=_0x49d754)return'failed';const _0x503fa5=await this['orderEntity'][_0x1b3b76(0xf0)]({'where':{'orderId':_0x46ba0d['trade_order_id'],'status':0x0}});if(!_0x503fa5)return _0x1b3b76(0xf2);await this[_0x1b3b76(0xdc)][_0x1b3b76(0xc3)](_0x503fa5);const _0x4ba27=await this['orderEntity'][_0x1b3b76(0xf9)]({'orderId':_0x46ba0d[_0x1b3b76(0x9e)]},{'status':0x1,'paydAt':new Date()});if(_0x4ba27[_0x1b3b76(0xdb)]!=0x1)return _0x1b3b76(0xf2);return _0x1b3b76(0xa6);}async[_0x5bb997(0x13a)](_0x1f4ab7,_0x1314a4,_0x5cf152=_0x5bb997(0x13c)){const _0x3cdbc4=_0x5bb997,_0x2c4b8f=await this[_0x3cdbc4(0x9d)][_0x3cdbc4(0xf0)]({'where':{'userId':_0x1f4ab7,'orderId':_0x1314a4}});if(!_0x2c4b8f)throw new common_1[(_0x3cdbc4(0xdf))](_0x3cdbc4(0x110),common_1[_0x3cdbc4(0x139)]['BAD_REQUEST']);const _0x5a68d7=await this['cramiPackageEntity'][_0x3cdbc4(0xf0)]({'where':{'id':_0x2c4b8f[_0x3cdbc4(0x13d)]}});if(!_0x5a68d7)throw new common_1[(_0x3cdbc4(0xdf))](_0x3cdbc4(0xe5),common_1[_0x3cdbc4(0x139)][_0x3cdbc4(0x123)]);const {payHupiAppId:_0x32485e,payHupiSecret:_0x1fac21,payHupiNotifyUrl:_0x22de23,payHupiReturnUrl:_0x407134,payHupiGatewayUrl:_0x5f53df}=await this[_0x3cdbc4(0xb8)][_0x3cdbc4(0x116)](['payHupiAppId',_0x3cdbc4(0xe8),_0x3cdbc4(0xba),_0x3cdbc4(0xd0),_0x3cdbc4(0x10d)]),_0x33b5df={};_0x33b5df[_0x3cdbc4(0xcd)]=_0x3cdbc4(0x119),_0x33b5df['appid']=_0x32485e,_0x33b5df[_0x3cdbc4(0xf8)]=(Date['now']()/0x3e8)[_0x3cdbc4(0x135)](0x0),_0x33b5df[_0x3cdbc4(0xa0)]=(0x0,utils_1[_0x3cdbc4(0xc7)])(0x20),_0x33b5df['trade_order_id']=_0x1314a4,_0x33b5df[_0x3cdbc4(0x108)]=_0x5a68d7[_0x3cdbc4(0x11b)],_0x33b5df[_0x3cdbc4(0xcb)]=_0x2c4b8f[_0x3cdbc4(0xdd)],_0x33b5df[_0x3cdbc4(0xb6)]=_0x22de23,_0x33b5df[_0x3cdbc4(0x127)]=_0x407134,_0x33b5df[_0x3cdbc4(0xfa)]='hupi',_0x33b5df[_0x3cdbc4(0x10a)]=this[_0x3cdbc4(0x112)](_0x33b5df,_0x1fac21);const {data:{errcode:_0x115495,errmsg:_0x466797,url_qrcode:_0xd389b0,url:_0x3e8e82}}=await axios_1[_0x3cdbc4(0xc9)]['post'](_0x5f53df||'https://api.xunhupay.com/payment/do.html',_0x33b5df);if(_0x115495!=0x0)throw new common_1['HttpException'](_0x466797,common_1[_0x3cdbc4(0x139)][_0x3cdbc4(0x123)]);return{'url_qrcode':_0xd389b0,'url':_0x3e8e82};}async[_0x5bb997(0xee)](_0x4fa229){const _0x26318d=_0x5bb997,{payHupiAppId:_0x21dafb,payHupiSecret:_0x2ddf74}=await this[_0x26318d(0xb8)][_0x26318d(0x116)](['payHupiAppId',_0x26318d(0xe8)]),_0x1b422c={};_0x1b422c[_0x26318d(0xcd)]=_0x26318d(0x119),_0x1b422c['appid']=_0x21dafb,_0x1b422c[_0x26318d(0xf8)]=(Date['now']()/0x3e8)[_0x26318d(0x135)](0x0),_0x1b422c['nonce_str']=(0x0,utils_1['createRandomNonceStr'])(0x20),_0x1b422c['out_trade_order']=_0x4fa229,_0x1b422c['hash']=this[_0x26318d(0x112)](_0x1b422c,_0x2ddf74);const {data:{errcode:_0x1eb5a2,errmsg:_0x5339d3,data:_0x267321}}=await axios_1[_0x26318d(0xc9)][_0x26318d(0x9f)]('https://api.xunhupay.com/payment/query.html',_0x1b422c);if(_0x1eb5a2!=0x0)throw new common_1[(_0x26318d(0xdf))](_0x5339d3,common_1[_0x26318d(0x139)][_0x26318d(0x123)]);return _0x267321;}async[_0x5bb997(0xda)](_0x34a85e){const _0x3b0674=_0x5bb997,_0x1b2f28=_0x34a85e['sign'];delete _0x34a85e[_0x3b0674(0x112)],delete _0x34a85e[_0x3b0674(0xce)];const _0x380ec0=await this[_0x3b0674(0xb8)][_0x3b0674(0x116)]([_0x3b0674(0xde)]);if(this[_0x3b0674(0x112)](_0x34a85e,_0x380ec0)!=_0x1b2f28)return _0x3b0674(0xf2);console[_0x3b0674(0xbe)](_0x3b0674(0x11e));const _0x4e084e=await this['orderEntity'][_0x3b0674(0xf0)]({'where':{'orderId':_0x34a85e[_0x3b0674(0x12f)],'status':0x0}});if(!_0x4e084e)return _0x3b0674(0xf2);const _0x51db94=_0x34a85e['trade_status']==_0x3b0674(0xec)?0x1:0x2,_0x4b36b8=await this[_0x3b0674(0x9d)][_0x3b0674(0xf9)]({'orderId':_0x34a85e[_0x3b0674(0x12f)]},{'status':_0x51db94,'paydAt':new Date()});_0x51db94===0x1&&await this[_0x3b0674(0xdc)]['addBalanceToOrder'](_0x4e084e);if(_0x4b36b8[_0x3b0674(0xdb)]!=0x1)return _0x3b0674(0xf2);return _0x3b0674(0xa6);}async[_0x5bb997(0xa7)](_0x189b68,_0x1c6f58,_0x2c29a0='alipay'){const _0x2185f8=_0x5bb997,_0x8f6729=await this[_0x2185f8(0x9d)][_0x2185f8(0xf0)]({'where':{'userId':_0x189b68,'orderId':_0x1c6f58}});if(!_0x8f6729)throw new common_1[(_0x2185f8(0xdf))](_0x2185f8(0x110),common_1['HttpStatus'][_0x2185f8(0x123)]);const _0x5ce8e6=await this[_0x2185f8(0x130)][_0x2185f8(0xf0)]({'where':{'id':_0x8f6729['goodsId']}});if(!_0x5ce8e6)throw new common_1[(_0x2185f8(0xdf))](_0x2185f8(0xe5),common_1['HttpStatus']['BAD_REQUEST']);const {payEpayPid:_0xe8954e,payEpaySecret:_0x90e6f6,payEpayNotifyUrl:_0x5c0f35,payEpayReturnUrl:_0x273c5e,payEpayApiPayUrl:_0x478a25}=await this[_0x2185f8(0xb8)]['getConfigs']([_0x2185f8(0xbf),_0x2185f8(0xde),_0x2185f8(0x10e),_0x2185f8(0xe1),_0x2185f8(0xfb)]);let _0x400339;_0xe8954e['length']<=0x10?_0x400339=Number(_0xe8954e):_0x400339=BigInt(_0xe8954e);const _0x39a7d2={};_0x39a7d2[_0x2185f8(0x100)]=_0x400339,_0x39a7d2[_0x2185f8(0xac)]=_0x2c29a0,_0x39a7d2[_0x2185f8(0x12f)]=_0x1c6f58,_0x39a7d2[_0x2185f8(0x11b)]=_0x5ce8e6[_0x2185f8(0x11b)],_0x39a7d2['money']=_0x8f6729[_0x2185f8(0xdd)],_0x39a7d2[_0x2185f8(0xcc)]=_0x2185f8(0x102),_0x39a7d2[_0x2185f8(0xb5)]='pc',_0x39a7d2[_0x2185f8(0xb6)]=_0x5c0f35,_0x39a7d2[_0x2185f8(0x127)]=_0x273c5e,_0x39a7d2[_0x2185f8(0xad)]=_0x2185f8(0xf3),_0x39a7d2['sign']=this[_0x2185f8(0x112)](_0x39a7d2,_0x90e6f6),_0x39a7d2[_0x2185f8(0xce)]=_0x2185f8(0xf5);const _0x58d75e=new URLSearchParams(_0x39a7d2)[_0x2185f8(0xa1)](),_0x728fc4=_0x478a25+'?'+_0x58d75e;if(_0x478a25[_0x2185f8(0x111)](_0x2185f8(0xb3)))return{'url_qrcode':null,'redirectUrl':_0x728fc4,'channel':_0x2c29a0,'isRedirect':!![]};else{const _0x96fe7a=await axios_1['default'][_0x2185f8(0xc4)](_0x478a25,{'params':_0x39a7d2});console[_0x2185f8(0xbe)](_0x2185f8(0xb9),_0x96fe7a['data']);const {data:{code:_0x46a90a,msg:_0x31b30c,qrcode:_0x1136da}}=_0x96fe7a;if(_0x46a90a!=0x1)throw new common_1[(_0x2185f8(0xdf))](_0x31b30c,common_1['HttpStatus']['BAD_REQUEST']);return{'url_qrcode':_0x1136da,'redirectUrl':null,'channel':_0x2c29a0,'isRedirect':![]};}}async[_0x5bb997(0xc1)](_0x352baf){const _0x37e763=_0x5bb997,{payEpayPid:_0x3cdee3,payEpaySecret:_0x317e59,payEpayApiQueryUrl:_0x482b3d}=await this[_0x37e763(0xb8)][_0x37e763(0x116)]([_0x37e763(0xbf),_0x37e763(0xde),_0x37e763(0xd9)]),_0x4e53b6={};_0x4e53b6[_0x37e763(0xd1)]=_0x37e763(0x121),_0x4e53b6[_0x37e763(0x12f)]=_0x352baf,_0x4e53b6[_0x37e763(0x100)]=_0x3cdee3,_0x4e53b6[_0x37e763(0x118)]=_0x317e59;const {data:{code:_0x4f5cd7,msg:_0xfd611a,data:_0x3962ff}}=await axios_1['default'][_0x37e763(0xc4)](_0x482b3d,{'params':_0x4e53b6});if(_0x4f5cd7!=0x1)throw new common_1[(_0x37e763(0xdf))](_0xfd611a,common_1[_0x37e763(0x139)][_0x37e763(0x123)]);return _0x3962ff;}async[_0x5bb997(0xf4)](_0x4e86a9){const _0x9e0a60=_0x5bb997,_0x54560d=_0x4e86a9[_0x9e0a60(0x112)];delete _0x4e86a9[_0x9e0a60(0x112)],delete _0x4e86a9[_0x9e0a60(0xce)];const _0x121365=await this[_0x9e0a60(0xb8)]['getConfigs']([_0x9e0a60(0xbb)]);console[_0x9e0a60(0xbe)](_0x9e0a60(0x133));if(this[_0x9e0a60(0x112)](_0x4e86a9,_0x121365)!=_0x54560d)return'failed';console[_0x9e0a60(0xbe)]('校验签名通过');const _0x155dba=await this[_0x9e0a60(0x9d)][_0x9e0a60(0xf0)]({'where':{'orderId':_0x4e86a9[_0x9e0a60(0x12f)],'status':0x0}});if(!_0x155dba)return _0x9e0a60(0xf2);const _0xbc51db=_0x4e86a9[_0x9e0a60(0xa4)]==_0x9e0a60(0xec)?0x1:0x2;console['log'](_0x9e0a60(0xe7),_0xbc51db);const _0x4419b1=await this[_0x9e0a60(0x9d)][_0x9e0a60(0xf9)]({'orderId':_0x4e86a9[_0x9e0a60(0x12f)]},{'status':_0xbc51db,'paydAt':new Date()});_0xbc51db===0x1&&await this['userBalanceService'][_0x9e0a60(0xc3)](_0x155dba);if(_0x4419b1['affected']!=0x1)return _0x9e0a60(0xf2);return _0x9e0a60(0xa6);}async['payMpay'](_0xd36a17,_0x10df42,_0x110ab5=_0x5bb997(0x13c)){const _0x149d37=_0x5bb997,_0x392df7=await this[_0x149d37(0x9d)]['findOne']({'where':{'userId':_0xd36a17,'orderId':_0x10df42}});if(!_0x392df7)throw new common_1[(_0x149d37(0xdf))](_0x149d37(0x110),common_1[_0x149d37(0x139)]['BAD_REQUEST']);const _0x24d640=await this[_0x149d37(0x130)]['findOne']({'where':{'id':_0x392df7[_0x149d37(0x13d)]}});if(!_0x24d640)throw new common_1[(_0x149d37(0xdf))](_0x149d37(0xe5),common_1[_0x149d37(0x139)]['BAD_REQUEST']);const {payMpayPid:_0x2617a4,payMpaySecret:_0x5e5b1b,payMpayNotifyUrl:_0x27e5f0,payMpayReturnUrl:_0x103a0b,payMpayApiPayUrl:_0x249d71}=await this[_0x149d37(0xb8)][_0x149d37(0x116)]([_0x149d37(0xc0),_0x149d37(0xbb),'payMpayNotifyUrl','payMpayReturnUrl',_0x149d37(0xab)]),_0x23f5c3={};_0x23f5c3[_0x149d37(0x100)]=Number(_0x2617a4),_0x23f5c3[_0x149d37(0xac)]=_0x110ab5,_0x23f5c3[_0x149d37(0x12f)]=_0x10df42,_0x23f5c3[_0x149d37(0x11b)]=_0x24d640[_0x149d37(0x11b)],_0x23f5c3[_0x149d37(0xd3)]=_0x392df7['total'],_0x23f5c3['notify_url']=_0x27e5f0,_0x23f5c3[_0x149d37(0x127)]=_0x103a0b,_0x23f5c3[_0x149d37(0x112)]=this[_0x149d37(0x112)](_0x23f5c3,_0x5e5b1b),_0x23f5c3[_0x149d37(0xce)]=_0x149d37(0xf5);const _0x43ae00=new URLSearchParams(_0x23f5c3)[_0x149d37(0xa1)](),_0x31a30d=_0x249d71+'?'+_0x43ae00;return{'url_qrcode':null,'redirectUrl':_0x31a30d,'channel':_0x110ab5,'isRedirect':!![]};const _0x34550f=await axios_1[_0x149d37(0xc9)]['get'](_0x249d71,{'params':_0x23f5c3});}async['queryMpay'](_0x37060e){const _0xf0c080=_0x5bb997,{payMpayApiQueryUrl:_0x2a4156}=await this[_0xf0c080(0xb8)][_0xf0c080(0x116)]([_0xf0c080(0xc0),_0xf0c080(0xbb),_0xf0c080(0xe3)]),_0x5f1dbb={};_0x5f1dbb['type']=0x2,_0x5f1dbb['order_no']=_0x37060e;const {data:{code:_0x1cab4c,msg:_0x17aed7,data:_0x4acf5c}}=await axios_1['default'][_0xf0c080(0xc4)](_0x2a4156,{'params':_0x5f1dbb});if(_0x1cab4c!=0x1)throw new common_1[(_0xf0c080(0xdf))](_0x17aed7,common_1[_0xf0c080(0x139)]['BAD_REQUEST']);return _0x4acf5c;}async[_0x5bb997(0xfd)](_0x1c44e6){const _0x34bcb2=_0x5bb997;console['log']('微信支付通知params:\x20',_0x1c44e6);const {payWeChatAppId:_0x690c64,payWeChatMchId:_0x1617ae,payWeChatSecret:_0x42efc3,payWeChatPublicKey:_0x41bbd4,payWeChatPrivateKey:_0x38d87e}=await this['globalConfigService'][_0x34bcb2(0x116)](['payWeChatAppId',_0x34bcb2(0x117),_0x34bcb2(0xea),_0x34bcb2(0xb2),'payWeChatPrivateKey']),_0x46236=new this[(_0x34bcb2(0x120))]({'appid':_0x690c64,'mchid':_0x1617ae,'publicKey':_0x41bbd4,'privateKey':_0x38d87e});try{if(_0x1c44e6[_0x34bcb2(0xd2)]=='TRANSACTION.SUCCESS'){const {ciphertext:_0x1bffed,associated_data:_0x260f3b,nonce:_0x187d33}=_0x1c44e6[_0x34bcb2(0x129)],_0x2314aa=_0x46236[_0x34bcb2(0xae)](_0x1bffed,_0x260f3b,_0x187d33,_0x42efc3),_0x4a1e96=await this[_0x34bcb2(0x9d)][_0x34bcb2(0xf0)]({'where':{'orderId':_0x2314aa[_0x34bcb2(0x12f)],'status':0x0}});if(!_0x4a1e96)return _0x34bcb2(0xf2);const _0x275541=_0x2314aa[_0x34bcb2(0xb1)]==_0x34bcb2(0x11d)?0x1:0x2,_0x9a0522=await this[_0x34bcb2(0x9d)]['update']({'orderId':_0x2314aa[_0x34bcb2(0x12f)]},{'status':_0x275541,'paydAt':new Date()});_0x275541===0x1&&await this[_0x34bcb2(0xdc)][_0x34bcb2(0xc3)](_0x4a1e96);if(_0x9a0522[_0x34bcb2(0xdb)]!=0x1)return _0x34bcb2(0xf2);}return _0x34bcb2(0xa6);}catch(_0x497a84){return console[_0x34bcb2(0xbe)](_0x34bcb2(0x103),_0x497a84),console[_0x34bcb2(0xbe)]('支付通知验证失败:\x20',_0x497a84),_0x34bcb2(0xf2);}}async[_0x5bb997(0x124)](_0x35fc2c,_0x43d398,_0x50981a=_0x5bb997(0xd4)){const _0x551c14=_0x5bb997;var _0x31b998,_0x30848b,_0x531c0b;console['log']('payType:\x20',_0x50981a);const _0x4eb986=await this[_0x551c14(0x9d)][_0x551c14(0xf0)]({'where':{'userId':_0x35fc2c,'orderId':_0x43d398}});if(!_0x4eb986)throw new common_1[(_0x551c14(0xdf))](_0x551c14(0x110),common_1[_0x551c14(0x139)][_0x551c14(0x123)]);const _0x10e670=await this[_0x551c14(0x130)]['findOne']({'where':{'id':_0x4eb986[_0x551c14(0x13d)]}});if(!_0x10e670)throw new common_1[(_0x551c14(0xdf))](_0x551c14(0xe5),common_1[_0x551c14(0x139)]['BAD_REQUEST']);const {payWeChatAppId:_0x4b77f1,payWeChatMchId:_0x20cc63,payWeChatPublicKey:_0x58c9b8,payWeChatPrivateKey:_0x7fee50,payWeChatNotifyUrl:_0x48dda1,payWeChatH5Name:_0x3f5a2a,payWeChatH5Url:_0x232703}=await this[_0x551c14(0xb8)][_0x551c14(0x116)]([_0x551c14(0xa2),'payWeChatMchId',_0x551c14(0xb2),'payWeChatPrivateKey',_0x551c14(0xa8),_0x551c14(0x109),_0x551c14(0x9c)]),_0x426d94=new this[(_0x551c14(0x120))]({'appid':_0x4b77f1,'mchid':_0x20cc63,'publicKey':_0x58c9b8,'privateKey':_0x7fee50}),_0xd8381a={'appid':_0x4b77f1,'mchid':_0x20cc63,'description':_0x10e670[_0x551c14(0x11b)],'out_trade_no':_0x43d398,'notify_url':_0x48dda1,'amount':{'total':Number(_0x4eb986['total']*0x64)},'scene_info':{'payer_client_ip':'192.168.1.100'}};console[_0x551c14(0xbe)](_0x551c14(0x137),_0xd8381a);if(_0x50981a=='h5'){_0xd8381a[_0x551c14(0xa9)][_0x551c14(0x12a)]={'type':_0x551c14(0xca),'app_name':_0x3f5a2a,'app_url':_0x232703};const _0x53ff87=await _0x426d94[_0x551c14(0xc5)](_0xd8381a);if(_0x53ff87['status']===0x193){const _0x57b482=(_0x531c0b=(_0x30848b=(_0x31b998=_0x53ff87===null||_0x53ff87===void 0x0?void 0x0:_0x53ff87['errRaw'])===null||_0x31b998===void 0x0?void 0x0:_0x31b998[_0x551c14(0xfc)])===null||_0x30848b===void 0x0?void 0x0:_0x30848b['text'])===null||_0x531c0b===void 0x0?void 0x0:_0x531c0b[_0x551c14(0x106)];throw new common_1[(_0x551c14(0xdf))]((_0x53ff87===null||_0x53ff87===void 0x0?void 0x0:_0x53ff87[_0x551c14(0x106)])||_0x551c14(0x10b),common_1[_0x551c14(0x139)]['BAD_REQUEST']);}const {h5_url:_0x5731d5}=_0x53ff87;return{'url':_0x5731d5};}if(_0x50981a=='jsapi'){const _0x3f6e66=await this[_0x551c14(0x126)]['getOpenIdByUserId'](_0x35fc2c);console[_0x551c14(0xbe)](_0x551c14(0xfe),_0x3f6e66),_0xd8381a[_0x551c14(0x114)]={'openid':_0x3f6e66};const _0x4bc7b7=await _0x426d94[_0x551c14(0xe0)](_0xd8381a);return console[_0x551c14(0xbe)](_0x551c14(0x10f),_0x4bc7b7),_0x4bc7b7;}if(_0x50981a=='native'){const _0x3172ec=await _0x426d94[_0x551c14(0x13e)](_0xd8381a),{code_url:_0x3eeffc}=_0x3172ec;return!_0x3eeffc&&console[_0x551c14(0xbe)]('wx-native',_0x3172ec),{'url_qrcode':_0x3eeffc,'isRedirect':![]};}throw new common_1[(_0x551c14(0xdf))]('unsupported\x20pay\x20type',common_1['HttpStatus'][_0x551c14(0x123)]);}async[_0x5bb997(0xed)](_0x5be62b){const _0x5bcceb=_0x5bb997,{payWeChatAppId:_0x232195,payWeChatMchId:_0x2168b4,payWeChatPublicKey:_0xd215ec,payWeChatPrivateKey:_0x84725d,payWeChatNotifyUrl:_0x780f40,payWeChatH5Name:_0x1bd3b8,payWeChatH5Url:_0x2a1a95}=await this[_0x5bcceb(0xb8)][_0x5bcceb(0x116)]([_0x5bcceb(0xa2),_0x5bcceb(0x117),_0x5bcceb(0xb2),_0x5bcceb(0xaa)]),_0x2b08e2=new this['WxPay']({'appid':_0x232195,'mchid':_0x2168b4,'publicKey':_0xd215ec,'privateKey':_0x84725d}),_0x57a6b4=await _0x2b08e2[_0x5bcceb(0xa5)]({'out_trade_no':_0x5be62b});return _0x57a6b4;}['sign'](_0x4d7558,_0x143a48){const _0xc34987=_0x5bb997,_0x46d498=Object[_0xc34987(0xf6)](_0x4d7558)['sort']()[_0xc34987(0xeb)](_0xc947ba=>_0xc947ba+'='+_0x4d7558[_0xc947ba])['join']('&')+_0x143a48;return crypto['createHash'](_0xc34987(0x107))['update'](_0x46d498)[_0xc34987(0xbd)](_0xc34987(0xff));}};function _0x4367(){const _0x3aeff6=['submit.php','1095120PBTShd','device','notify_url','getOwnPropertyDescriptor','globalConfigService','epay\x20--->\x20res:\x20','payHupiNotifyUrl','payMpaySecret','支付请求失败!','digest','log','payEpayPid','payMpayPid','queryEpay','1179178dxmMgE','addBalanceToOrder','get','transactions_h5','CramiPackageEntity','createRandomNonceStr','function','default','Wap','total_fee','clientip','version','sign_type','支付请求失败:\x20','payHupiReturnUrl','act','event_type','money','native','../userBalance/userBalance.service','InjectRepository','crypto','361610RFHyYs','payEpayApiQueryUrl','notifyEpay','affected','userBalanceService','total','payEpaySecret','HttpException','transactions_jsapi','payEpayReturnUrl','design:paramtypes','payMpayApiQueryUrl','3750cWkIeZ','套餐不存在!','payPlatform','status:\x20','payHupiSecret','decorate','payWeChatSecret','map','TRADE_SUCCESS','queryWeChat','queryHupi','11IqNHYq','findOne','854697RhLQrx','failed','epay','notifyMpay','MD5','keys','length','time','update','attach','payEpayApiPayUrl','response','notifyWeChat','用户openId:\x20','hex','pid','../../common/utils','192.168.1.100','error:\x20','notify','payMpay','message','md5','title','payWeChatH5Name','hash','微信H5支付失败！','__decorate','payHupiGatewayUrl','payEpayNotifyUrl','jsapi支付结果返回值:\x20','订单不存在!','includes','sign','defineProperty','payer','__param','getConfigs','payWeChatMchId','key','1.1','hupi','name','本次支付类型:\x20','SUCCESS','校验签名通过','metadata','WxPay','order','35564OZGTQN','BAD_REQUEST','payWeChat','PayService','userService','return_url','OrderEntity','resource','h5_info','__metadata','axios','object','../user/user.service','out_trade_no','cramiPackageEntity','45RMvsrR','1346072ZFlyVP','校验签名','GlobalConfigService','toFixed','../crami/cramiPackage.entity','wechat-pay:\x20','@nestjs/common','HttpStatus','payHupi','90STCEGl','wxpay','goodsId','transactions_native','notifyHupi','payWeChatH5Url','orderEntity','trade_order_id','post','nonce_str','toString','payWeChatAppId','importDynamic','trade_status','query','success','payEpay','payWeChatNotifyUrl','scene_info','payWeChatPrivateKey','payMpayApiPayUrl','type','param','decipher_gcm','Repository','wechat','trade_state','payWeChatPublicKey'];_0x4367=function(){return _0x3aeff6;};return _0x4367();}PayService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1[_0x5bb997(0xd6)])(cramiPackage_entity_1[_0x5bb997(0xc6)])),__param(0x1,(0x0,typeorm_1[_0x5bb997(0xd6)])(order_entity_1[_0x5bb997(0x128)])),__metadata(_0x5bb997(0xe2),[typeorm_2[_0x5bb997(0xaf)],typeorm_2['Repository'],userBalance_service_1['UserBalanceService'],globalConfig_service_1[_0x5bb997(0x134)],user_service_1['UserService']])],PayService),exports[_0x5bb997(0x125)]=PayService;