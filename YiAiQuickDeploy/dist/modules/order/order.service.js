'use strict';const _0x102cc2=_0x25e7;(function(_0x364a3c,_0x2e6f8c){const _0x236860=_0x25e7,_0x6f33c6=_0x364a3c();while(!![]){try{const _0x9e15d4=-parseInt(_0x236860(0xa5))/0x1+parseInt(_0x236860(0xa6))/0x2*(-parseInt(_0x236860(0x84))/0x3)+parseInt(_0x236860(0x82))/0x4*(-parseInt(_0x236860(0xb1))/0x5)+parseInt(_0x236860(0x6d))/0x6+parseInt(_0x236860(0x99))/0x7+parseInt(_0x236860(0x9c))/0x8*(parseInt(_0x236860(0x78))/0x9)+parseInt(_0x236860(0x65))/0xa*(-parseInt(_0x236860(0xab))/0xb);if(_0x9e15d4===_0x2e6f8c)break;else _0x6f33c6['push'](_0x6f33c6['shift']());}catch(_0x44b777){_0x6f33c6['push'](_0x6f33c6['shift']());}}}(_0x2472,0x59ea1));function _0x25e7(_0x2ee1b7,_0x2fdd4d){const _0x2472ac=_0x2472();return _0x25e7=function(_0x25e78e,_0x1dfccc){_0x25e78e=_0x25e78e-0x65;let _0x52e03c=_0x2472ac[_0x25e78e];return _0x52e03c;},_0x25e7(_0x2ee1b7,_0x2fdd4d);}var __decorate=this&&this['__decorate']||function(_0x2c9548,_0x143123,_0x49ca4f,_0x548ad4){const _0x58c133=_0x25e7;var _0x1083bf=arguments[_0x58c133(0x98)],_0x38f8e2=_0x1083bf<0x3?_0x143123:_0x548ad4===null?_0x548ad4=Object['getOwnPropertyDescriptor'](_0x143123,_0x49ca4f):_0x548ad4,_0xf3dd99;if(typeof Reflect==='object'&&typeof Reflect[_0x58c133(0x89)]==='function')_0x38f8e2=Reflect['decorate'](_0x2c9548,_0x143123,_0x49ca4f,_0x548ad4);else{for(var _0xacc9e0=_0x2c9548[_0x58c133(0x98)]-0x1;_0xacc9e0>=0x0;_0xacc9e0--)if(_0xf3dd99=_0x2c9548[_0xacc9e0])_0x38f8e2=(_0x1083bf<0x3?_0xf3dd99(_0x38f8e2):_0x1083bf>0x3?_0xf3dd99(_0x143123,_0x49ca4f,_0x38f8e2):_0xf3dd99(_0x143123,_0x49ca4f))||_0x38f8e2;}return _0x1083bf>0x3&&_0x38f8e2&&Object[_0x58c133(0x8f)](_0x143123,_0x49ca4f,_0x38f8e2),_0x38f8e2;},__metadata=this&&this[_0x102cc2(0x90)]||function(_0x296186,_0x412b40){const _0xbcb549=_0x102cc2;if(typeof Reflect===_0xbcb549(0x74)&&typeof Reflect[_0xbcb549(0x6e)]===_0xbcb549(0x76))return Reflect['metadata'](_0x296186,_0x412b40);},__param=this&&this[_0x102cc2(0xa2)]||function(_0x4bce62,_0x3cc639){return function(_0x2e89e3,_0x338666){_0x3cc639(_0x2e89e3,_0x338666,_0x4bce62);};};Object[_0x102cc2(0x8f)](exports,_0x102cc2(0x9a),{'value':!![]}),exports['OrderService']=void 0x0;const user_entity_1=require('../user/user.entity'),typeorm_1=require('@nestjs/typeorm'),common_1=require(_0x102cc2(0x6c)),typeorm_2=require('typeorm'),order_entity_1=require(_0x102cc2(0xb2)),cramiPackage_entity_1=require(_0x102cc2(0x9b)),utils_1=require('../../common/utils'),pay_service_1=require(_0x102cc2(0xa0)),globalConfig_service_1=require(_0x102cc2(0xb5));function _0x2472(){const _0xc510d5=['message','decorate','Repository','where','goodsInfo','InjectRepository','find','defineProperty','__metadata','deleteOrder','OrderEntity','payService','goodsId','globalConfigService','delete','channel','length','1819482Qbmhjw','__esModule','../crami/cramiPackage.entity','40zbRwrp','BAD_REQUEST','deleteNotPay','order','../pay/pay.service','createQueryBuilder','__param','queryByOrderId','findOne','43613lBzigo','26gnXZJi','status','map','select','des','167112UGhyFP','orderId','total','create','userEntity','queryAllOrder','589630mQMcXs','./order.entity','createOrderId','UNAUTHORIZED','../globalConfig/globalConfig.service','10FrrBST','forEach','OrderService','请先注册账号后购买商品！','total_price','订单不存在!','email','@nestjs/common','3489300qjoeWF','metadata','pay','DESC','query','SUM(order.price)','cramiPackageEntity','object','findAndCount','function','count','160821bhPJAB','price','PayService','CramiPackageEntity','user','log','assign','order.status\x20=\x20:status','userId','HttpStatus','4LjLEPj','HttpException','89031xqTnJa','orderEntity','payPlatform','order:\x20'];_0x2472=function(){return _0xc510d5;};return _0x2472();}let OrderService=class OrderService{constructor(_0x1b3c6a,_0x47fa04,_0x84797d,_0x357d30,_0x4c85b0){const _0x1f9211=_0x102cc2;this[_0x1f9211(0x85)]=_0x1b3c6a,this['cramiPackageEntity']=_0x47fa04,this[_0x1f9211(0xaf)]=_0x84797d,this['payService']=_0x357d30,this[_0x1f9211(0x95)]=_0x4c85b0;}async['buy'](_0xefb000,_0x4d333d){const _0x389998=_0x102cc2;try{const {goodsId:_0x3dc157,count:count=0x1,payType:_0x56db2b}=_0xefb000,{id:_0x56237b}=_0x4d333d[_0x389998(0x7c)];if(_0x56237b>0xf4240)throw new common_1[(_0x389998(0x83))](_0x389998(0x68),common_1[_0x389998(0x81)][_0x389998(0xb4)]);const _0x3f2407=await this[_0x389998(0xae)](_0x56237b,_0x3dc157,count,_0x56db2b),_0x5e9e35=await this[_0x389998(0x93)][_0x389998(0x6f)](_0x56237b,_0x3f2407['orderId'],_0x56db2b);return Object[_0x389998(0x7e)](Object[_0x389998(0x7e)]({},_0x5e9e35),{'orderId':_0x3f2407[_0x389998(0xac)],'platform':_0x3f2407['payPlatform'],'total':_0x3f2407[_0x389998(0xad)]});}catch(_0x2480cd){if(_0x2480cd[_0x389998(0xa7)]===0x191)throw new common_1[(_0x389998(0x83))](_0x2480cd[_0x389998(0x88)],common_1[_0x389998(0x81)]['UNAUTHORIZED']);throw new common_1['HttpException'](_0x2480cd['message']||'购买失败!',common_1[_0x389998(0x81)][_0x389998(0x9d)]);}}async[_0x102cc2(0xa3)](_0x3f5b6b,_0x2a210a){const _0xb80b71=_0x102cc2,{id:_0x294222}=_0x3f5b6b['user'],{orderId:_0x23efad}=_0x2a210a,_0x552087=await this[_0xb80b71(0x85)][_0xb80b71(0xa4)]({'where':{'userId':_0x294222,'orderId':_0x23efad}});if(!_0x552087)throw new common_1['HttpException'](_0xb80b71(0x6a),common_1['HttpStatus']['BAD_REQUEST']);return _0x552087;}async['create'](_0xbd6390,_0x364ece,_0x127d65,_0x276926){const _0x1ae94a=_0x102cc2,_0x3e872c=await this['globalConfigService']['queryPayType'](),_0x46f3cf=await this[_0x1ae94a(0x73)][_0x1ae94a(0xa4)]({'where':{'id':_0x364ece}});if(!_0x46f3cf)throw new common_1[(_0x1ae94a(0x83))]('套餐不存在!',common_1[_0x1ae94a(0x81)][_0x1ae94a(0x9d)]);const _0x3cda0c={};_0x3cda0c[_0x1ae94a(0xac)]=(0x0,utils_1[_0x1ae94a(0xb3)])(),_0x3cda0c[_0x1ae94a(0x80)]=_0xbd6390,_0x3cda0c[_0x1ae94a(0x94)]=_0x364ece,_0x3cda0c[_0x1ae94a(0x79)]=Number(_0x46f3cf['price']),_0x3cda0c[_0x1ae94a(0x77)]=_0x127d65,_0x3cda0c[_0x1ae94a(0xad)]=Number(_0x46f3cf[_0x1ae94a(0x79)])*_0x127d65,_0x3cda0c[_0x1ae94a(0x86)]=_0x3e872c,_0x3cda0c[_0x1ae94a(0x97)]=_0x276926;const _0x3f4c3e=await this['orderEntity']['save'](_0x3cda0c);return console[_0x1ae94a(0x7d)](_0x1ae94a(0x87),_0x3f4c3e),_0x3f4c3e;}async[_0x102cc2(0x71)](_0x55dc01,_0x4606cf,_0x5c87bb){const _0x4e83f5=_0x102cc2;return await this[_0x4e83f5(0x85)][_0x4e83f5(0x75)]({'where':{'userId':_0x55dc01},'order':{'id':_0x4e83f5(0x70)},'skip':(_0x4606cf-0x1)*_0x5c87bb,'take':_0x5c87bb});}async[_0x102cc2(0xb0)](_0xa82669){const _0xc69522=_0x102cc2,{page:_0x3020cf,size:_0x4e3442,userId:_0x3c055b,platform:_0x22205e,status:_0x10ff0f}=_0xa82669,_0x3ca2c7={};if(_0x3c055b)_0x3ca2c7['userId']=_0x3c055b;if(_0x22205e)_0x3ca2c7[_0xc69522(0x86)]=_0x22205e;if(_0x10ff0f)_0x3ca2c7[_0xc69522(0xa7)]=_0x10ff0f;const [_0x40966f,_0x2ca3a7]=await this['orderEntity'][_0xc69522(0x75)]({'order':{'id':'DESC'},'where':_0x3ca2c7,'skip':(_0x3020cf-0x1)*_0x4e3442,'take':_0x4e3442}),_0x36a45b=_0x40966f[_0xc69522(0xa8)](_0x5e832d=>_0x5e832d[_0xc69522(0x80)]),_0x4436a1=_0x40966f['map'](_0xff610e=>_0xff610e[_0xc69522(0x94)]),_0xafee26=await this[_0xc69522(0xaf)][_0xc69522(0x8e)]({'where':{'id':(0x0,typeorm_2['In'])(_0x36a45b)},'select':['id','username',_0xc69522(0x6b)]}),_0x4d6eb2=await this['cramiPackageEntity'][_0xc69522(0x8e)]({'where':{'id':(0x0,typeorm_2['In'])(_0x4436a1)},'select':['id','name','coverImg',_0xc69522(0xaa)]});_0x40966f[_0xc69522(0x66)](_0x5ac956=>{const _0x3b8433=_0xc69522;_0x5ac956['userInfo']=_0xafee26['find'](_0x1dd07e=>_0x1dd07e['id']===_0x5ac956[_0x3b8433(0x80)]),_0x5ac956[_0x3b8433(0x8c)]=_0x4d6eb2[_0x3b8433(0x8e)](_0x113dbc=>_0x113dbc['id']===_0x5ac956['goodsId']);});const _0x49eb32=await this[_0xc69522(0x85)][_0xc69522(0xa1)](_0xc69522(0x9f))[_0xc69522(0x8b)](_0xc69522(0x7f),{'status':0x1})[_0xc69522(0xa9)](_0xc69522(0x72),_0xc69522(0x69))['getRawOne']();return Object['assign']({'rows':_0x40966f,'count':_0x2ca3a7},_0x49eb32);}async[_0x102cc2(0x91)](_0x891b90){const _0x3eb470=_0x102cc2,{orderId:_0x291b52}=_0x891b90,_0x2b05ce=await this[_0x3eb470(0x85)][_0x3eb470(0xa4)]({'where':{'orderId':_0x291b52}});if(!_0x2b05ce)throw new common_1[(_0x3eb470(0x83))](_0x3eb470(0x6a),common_1[_0x3eb470(0x81)]['BAD_REQUEST']);return await this[_0x3eb470(0x85)][_0x3eb470(0x96)]({'orderId':_0x291b52});}async[_0x102cc2(0x9e)](){const _0x120cf7=_0x102cc2;return await this[_0x120cf7(0x85)][_0x120cf7(0x96)]({'status':0x0});}};OrderService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1[_0x102cc2(0x8d)])(order_entity_1[_0x102cc2(0x92)])),__param(0x1,(0x0,typeorm_1[_0x102cc2(0x8d)])(cramiPackage_entity_1[_0x102cc2(0x7b)])),__param(0x2,(0x0,typeorm_1['InjectRepository'])(user_entity_1['UserEntity'])),__metadata('design:paramtypes',[typeorm_2[_0x102cc2(0x8a)],typeorm_2['Repository'],typeorm_2[_0x102cc2(0x8a)],pay_service_1[_0x102cc2(0x7a)],globalConfig_service_1['GlobalConfigService']])],OrderService),exports[_0x102cc2(0x67)]=OrderService;