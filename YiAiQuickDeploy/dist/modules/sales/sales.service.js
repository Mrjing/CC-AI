'use strict';const _0x555016=_0xb9f9;(function(_0x3585dd,_0x4a4568){const _0x125056=_0xb9f9,_0x39e8e8=_0x3585dd();while(!![]){try{const _0x16969f=parseInt(_0x125056(0xd0))/0x1+-parseInt(_0x125056(0xc7))/0x2+-parseInt(_0x125056(0xe9))/0x3*(parseInt(_0x125056(0xd8))/0x4)+parseInt(_0x125056(0xc4))/0x5*(parseInt(_0x125056(0x123))/0x6)+parseInt(_0x125056(0xc2))/0x7+-parseInt(_0x125056(0xd7))/0x8*(parseInt(_0x125056(0x111))/0x9)+parseInt(_0x125056(0xd3))/0xa;if(_0x16969f===_0x4a4568)break;else _0x39e8e8['push'](_0x39e8e8['shift']());}catch(_0x250385){_0x39e8e8['push'](_0x39e8e8['shift']());}}}(_0x40df,0x72141));function _0xb9f9(_0x348ffd,_0x203d32){const _0x40dfa3=_0x40df();return _0xb9f9=function(_0xb9f907,_0x386dcf){_0xb9f907=_0xb9f907-0xc0;let _0xa12bd2=_0x40dfa3[_0xb9f907];return _0xa12bd2;},_0xb9f9(_0x348ffd,_0x203d32);}function _0x40df(){const _0x33a452=['email','performanceRatio','globalConfigService','getMineAccount','提现金额必须为数字且大于0','inviteeUserId','createOrder','function','inviterUserId','6JcTHfB','findAndCount','push','审核失败','forEach','auditOrder','GlobalConfigService','createSalesRecords','DESC','__metadata','update','salesBaseTitle','salesUsersEntity','1158507ikvhGE','assign','1666655VnmmaZ','salesRecordsEntity','inviteeEmail','558614WIxNiJ','appForMoney','inviteeAvatar','SalesService','salesBaseRatio','../user/user.entity','用户不存在','修改成功','inviteRecords','423825DnVUDK','formatCreateOrUpdateDate','BAD_REQUEST','7281920zHCPXe','design:paramtypes','length','findOne','16XtuYSZ','1284ENtbbi','defineProperty','inviterEmail','UserEntity','salesOrderEntity','auditUserName','HttpStatus','userEntity','getOwnPropertyDescriptor','__esModule','./salesUsers.entity','getMineRecords','@nestjs/typeorm','userId','HttpException','typeorm','minus','1893qyRFBd','decorate','Repository','xxxxxxx','user','审核完成','SalesRecordsEntity','count','saveCommissionAmount','role','updateUserSales','修改失败','default','super','InjectRepository','totalAmount,\x20distributionBalance:\x20','salesAllowDrawMoney','userInfo','SalesUsersEntity','提现金额不足','__decorate','创建提现工单失败','withdrawalChannels','inviterAvatar','hideString','inviterUsername','find','affected','toNumber','save','salesUserList','审核状态错误','map','auditUserId','新秀分销商','withdrawalAmount','error:\x20','../globalConfig/globalConfig.service','plus','metadata','3157767UzNKZU','log','includes','./salesOrder.entity','orderStatus','creaetUserBaseSalesInfo','提现金额最低必须为','username','salesOrder'];_0x40df=function(){return _0x33a452;};return _0x40df();}var __decorate=this&&this[_0x555016(0xfd)]||function(_0x50f65b,_0x3df096,_0x77f5e0,_0x89568c){const _0x4f8489=_0x555016;var _0x2e75e8=arguments[_0x4f8489(0xd5)],_0x369f79=_0x2e75e8<0x3?_0x3df096:_0x89568c===null?_0x89568c=Object[_0x4f8489(0xe0)](_0x3df096,_0x77f5e0):_0x89568c,_0x1b4340;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x4f8489(0x121))_0x369f79=Reflect[_0x4f8489(0xea)](_0x50f65b,_0x3df096,_0x77f5e0,_0x89568c);else{for(var _0x1edb60=_0x50f65b['length']-0x1;_0x1edb60>=0x0;_0x1edb60--)if(_0x1b4340=_0x50f65b[_0x1edb60])_0x369f79=(_0x2e75e8<0x3?_0x1b4340(_0x369f79):_0x2e75e8>0x3?_0x1b4340(_0x3df096,_0x77f5e0,_0x369f79):_0x1b4340(_0x3df096,_0x77f5e0))||_0x369f79;}return _0x2e75e8>0x3&&_0x369f79&&Object[_0x4f8489(0xd9)](_0x3df096,_0x77f5e0,_0x369f79),_0x369f79;},__metadata=this&&this[_0x555016(0x12c)]||function(_0x1da48d,_0x34f3c5){const _0x5313a7=_0x555016;if(typeof Reflect==='object'&&typeof Reflect[_0x5313a7(0x110)]===_0x5313a7(0x121))return Reflect[_0x5313a7(0x110)](_0x1da48d,_0x34f3c5);},__param=this&&this['__param']||function(_0x382b79,_0x4cb83b){return function(_0x8e166,_0xc8205d){_0x4cb83b(_0x8e166,_0xc8205d,_0x382b79);};};Object[_0x555016(0xd9)](exports,_0x555016(0xe1),{'value':!![]}),exports['SalesService']=void 0x0;const globalConfig_service_1=require(_0x555016(0x10e)),common_1=require('@nestjs/common'),salesUsers_entity_1=require(_0x555016(0xe2)),typeorm_1=require(_0x555016(0xe4)),typeorm_2=require(_0x555016(0xe7)),salesRecords_entity_1=require('./salesRecords.entity'),utils_1=require('../../common/utils'),user_entity_1=require(_0x555016(0xcc)),decimal_js_1=require('decimal.js'),salesOrder_entity_1=require(_0x555016(0x114));let SalesService=class SalesService{constructor(_0x558522,_0x9790cc,_0x4581ba,_0x5b480b,_0x49fe4c){const _0x3c1d1d=_0x555016;this[_0x3c1d1d(0xc1)]=_0x558522,this[_0x3c1d1d(0xc5)]=_0x9790cc,this['userEntity']=_0x4581ba,this['salesOrderEntity']=_0x5b480b,this[_0x3c1d1d(0x11c)]=_0x49fe4c;}async[_0x555016(0x11d)](_0x4d4235){const _0x4c2995=_0x555016;try{const {id:_0x54659a}=_0x4d4235[_0x4c2995(0xed)];let _0x3386b0=await this[_0x4c2995(0xc1)][_0x4c2995(0xd6)]({'where':{'userId':_0x54659a}});if(!_0x3386b0){const {salesBaseRatio:salesBaseRatio=0xa,salesBaseTitle:salesBaseTitle=_0x4c2995(0x10b)}=await this[_0x4c2995(0x11c)]['getConfigs']([_0x4c2995(0xcb),_0x4c2995(0xc0)]);_0x3386b0=await this['creaetUserBaseSalesInfo']({'userId':_0x54659a,'performanceRatio':Number(salesBaseRatio),'salesOutletName':salesBaseTitle});}const _0x518e72=(0x0,utils_1[_0x4c2995(0xd1)])(_0x3386b0),_0x137377=await this['salesRecordsEntity'][_0x4c2995(0xf0)]({'where':{'inviterUserId':_0x54659a}}),_0x511042=await this[_0x4c2995(0xdf)]['findOne']({'where':{'id':_0x54659a}})||{'inviteLinkCount':0x0,'inviteCode':_0x4c2995(0xec)},{inviteLinkCount:_0x29e870,inviteCode:_0x32a51d}=_0x511042,_0x29a5d0=await this[_0x4c2995(0xdf)][_0x4c2995(0xf0)]({'where':{'invitedBy':_0x32a51d}});return Object[_0x4c2995(0xc3)](Object['assign']({},_0x518e72),{'orderCount':_0x137377,'inviteCount':_0x29a5d0,'inviteLinkCount':_0x29e870});}catch(_0x256d74){console['log'](_0x4c2995(0x10d),_0x256d74);}}async[_0x555016(0xe3)](_0x18062f,_0xf74e66){const _0x2c3d1a=_0x555016;try{const {id:_0x45561e}=_0x18062f[_0x2c3d1a(0xed)],{page:_0x37bffe,size:_0x3fc6b4}=_0xf74e66,[_0x55bc3a,_0x27c3bd]=await this[_0x2c3d1a(0xc5)][_0x2c3d1a(0x124)]({'where':{'inviterUserId':_0x45561e},'order':{'createdAt':_0x2c3d1a(0x12b)},'skip':(_0x37bffe-0x1)*_0x3fc6b4,'take':_0x3fc6b4});return{'rows':(0x0,utils_1[_0x2c3d1a(0xd1)])(_0x55bc3a),'count':_0x27c3bd};}catch(_0xf88869){console[_0x2c3d1a(0x112)](_0x2c3d1a(0x10d),_0xf88869);}}async[_0x555016(0xcf)](_0x166803,_0x4c1744){const _0x58f19d=_0x555016;try{const {page:_0x165ac5,size:_0x277d2d,orderId:_0x15c9fc,orderPrice:_0x7c0cb5}=_0x4c1744;let _0x4ad15e={};_0x15c9fc&&(_0x4ad15e={'orderId':_0x15c9fc}),_0x7c0cb5&&(_0x4ad15e={'orderPrice':_0x7c0cb5});const [_0x20887e,_0x19947b]=await this[_0x58f19d(0xc5)][_0x58f19d(0x124)]({'where':_0x4ad15e,'order':{'createdAt':_0x58f19d(0x12b)},'skip':(_0x165ac5-0x1)*_0x277d2d,'take':_0x277d2d}),_0x3dfd9d=[];_0x20887e[_0x58f19d(0x109)](_0x1a9e81=>{const _0x54ac89=_0x58f19d;_0x3dfd9d[_0x54ac89(0x125)](_0x1a9e81[_0x54ac89(0x122)]),_0x3dfd9d[_0x54ac89(0x125)](_0x1a9e81[_0x54ac89(0x11f)]);});const _0x54b8c2=await this[_0x58f19d(0xdf)][_0x58f19d(0x103)]({'where':{'id':(0x0,typeorm_2['In'])(_0x3dfd9d)}});return _0x20887e[_0x58f19d(0x127)](_0x5c1524=>{const _0x2e2aae=_0x58f19d,_0x1217ea=_0x54b8c2[_0x2e2aae(0x103)](_0x165e4b=>_0x165e4b['id']===_0x5c1524[_0x2e2aae(0x122)]),_0x79520e=_0x54b8c2['find'](_0x16a658=>_0x16a658['id']===_0x5c1524['inviteeUserId']),{username:_0x4bdd91,email:_0x39ed75,avatar:_0xe97857}=_0x54b8c2[_0x2e2aae(0x103)](_0x20a444=>_0x20a444['id']===_0x5c1524[_0x2e2aae(0x122)]);_0x5c1524[_0x2e2aae(0x102)]=_0x1217ea===null||_0x1217ea===void 0x0?void 0x0:_0x1217ea['username'],_0x5c1524['inviterEmail']=_0x1217ea===null||_0x1217ea===void 0x0?void 0x0:_0x1217ea['email'],_0x5c1524[_0x2e2aae(0x100)]=_0x1217ea===null||_0x1217ea===void 0x0?void 0x0:_0x1217ea['avatar'],_0x5c1524['inviteeUsername']=_0x79520e===null||_0x79520e===void 0x0?void 0x0:_0x79520e[_0x2e2aae(0x118)],_0x5c1524[_0x2e2aae(0xc6)]=_0x79520e===null||_0x79520e===void 0x0?void 0x0:_0x79520e[_0x2e2aae(0x11a)],_0x5c1524[_0x2e2aae(0xc9)]=_0x79520e===null||_0x79520e===void 0x0?void 0x0:_0x79520e['avatar'];}),_0x166803[_0x58f19d(0xed)]['role']!==_0x58f19d(0xf6)&&_0x20887e[_0x58f19d(0x127)](_0x3cd703=>{const _0x7eef78=_0x58f19d;_0x3cd703[_0x7eef78(0xda)]=_0x3cd703[_0x7eef78(0xda)]?(0x0,utils_1['hideString'])(_0x3cd703[_0x7eef78(0xda)]):'',_0x3cd703[_0x7eef78(0xc6)]=_0x3cd703[_0x7eef78(0xc6)]?(0x0,utils_1[_0x7eef78(0x101)])(_0x3cd703[_0x7eef78(0xc6)]):'';}),{'rows':(0x0,utils_1['formatCreateOrUpdateDate'])(_0x20887e),'count':_0x19947b};}catch(_0x4a79e6){console['log'](_0x58f19d(0x10d),_0x4a79e6);}}async[_0x555016(0x116)](_0x77b7ee){const _0x4d4427=_0x555016,{userId:_0x20ea36,performanceRatio:_0x435806,salesOutletName:_0x101345}=_0x77b7ee;return await this[_0x4d4427(0xc1)]['save']({'userId':_0x20ea36,'performanceRatio':_0x435806,'salesOutletName':_0x101345});}async['changeUserBaseSalesInfo'](_0x203e7f){const _0x2a215e=_0x555016;return await this[_0x2a215e(0xc1)][_0x2a215e(0x106)](_0x203e7f);}async[_0x555016(0x12a)](_0x3525fb){const _0x2a5068=_0x555016;return await this[_0x2a5068(0xc5)][_0x2a5068(0x106)](_0x3525fb);}async[_0x555016(0xf1)](_0x5bf9d5,_0x4788f3){const _0x16bb40=_0x555016,_0xebbc1a=await this[_0x16bb40(0xc1)][_0x16bb40(0xd6)]({'where':{'userId':_0x5bf9d5}});if(!_0xebbc1a)return;const {totalAmount:_0x59d909,distributionBalance:_0x450f8a}=_0xebbc1a;return console[_0x16bb40(0x112)](_0x16bb40(0xf8),_0x59d909,_0x450f8a),await this['salesUsersEntity'][_0x16bb40(0x12d)]({'userId':_0x5bf9d5},{'totalAmount':new decimal_js_1[(_0x16bb40(0xf5))](_0x59d909)['plus'](_0x4788f3)[_0x16bb40(0x105)](),'distributionBalance':new decimal_js_1[(_0x16bb40(0xf5))](_0x450f8a)[_0x16bb40(0x10f)](_0x4788f3)['toNumber']()});}async[_0x555016(0xc8)](_0x48bf6a,_0xd5dd45){const _0x19a2aa=_0x555016,{id:_0x568c86}=_0x48bf6a[_0x19a2aa(0xed)],{withdrawalAmount:_0x430cbf,withdrawalChannels:_0x2ffbad,contactInformation:_0x24ddb9,remark:_0x47f28b}=_0xd5dd45,_0x2cc188=await this[_0x19a2aa(0x11c)]['getConfigs']([_0x19a2aa(0xf9)])||0xa;if(typeof _0x430cbf!=='number'||_0x430cbf<=0x0)throw new common_1['HttpException'](_0x19a2aa(0x11e),common_1[_0x19a2aa(0xde)][_0x19a2aa(0xd2)]);if(Number(_0x430cbf)<Number(_0x2cc188))throw new common_1[(_0x19a2aa(0xe6))](_0x19a2aa(0x117)+_0x2cc188+'元',common_1[_0x19a2aa(0xde)][_0x19a2aa(0xd2)]);const _0x12b9f7=await this[_0x19a2aa(0xc1)][_0x19a2aa(0xd6)]({'where':{'userId':_0x568c86}}),{distributionBalance:_0x5c6e55,drawMoneyIn:_0xd51c24}=_0x12b9f7;if(Number(_0x5c6e55)<Number(_0x430cbf))throw new common_1['HttpException'](_0x19a2aa(0xfc),common_1['HttpStatus']['BAD_REQUEST']);const _0x40074a=new decimal_js_1['default'](_0x5c6e55)[_0x19a2aa(0xe8)](_0x430cbf)[_0x19a2aa(0x105)](),_0x15a8ec={'userId':_0x568c86,'withdrawalAmount':_0x430cbf,'orderStatus':0x0,'auditStatus':0x0,'withdrawalChannels':_0x2ffbad,'contactInformation':_0x24ddb9,'remark':_0x47f28b};await this[_0x19a2aa(0x120)](_0x15a8ec);const _0x115f46=await this['salesUsersEntity']['update']({'userId':_0x568c86},{'distributionBalance':_0x40074a,'drawMoneyIn':new decimal_js_1['default'](_0xd51c24)[_0x19a2aa(0x10f)](_0x430cbf)[_0x19a2aa(0x105)]()});}async['drawMoneyOrder'](_0x387c05,_0x4f0a17){const _0xee669c=_0x555016,{id:_0x3276b6}=_0x387c05['user'],{page:_0x551b09,size:_0x772984}=_0x4f0a17,[_0x11718b,_0x499d4d]=await this[_0xee669c(0xdc)][_0xee669c(0x124)]({'where':{'userId':_0x3276b6},'order':{'createdAt':_0xee669c(0x12b)},'skip':(_0x551b09-0x1)*_0x772984,'take':_0x772984}),_0x26f060=_0x11718b['map'](_0x5aa5bd=>_0x5aa5bd['auditUserId']),_0xf429ee=await this[_0xee669c(0xdf)][_0xee669c(0x103)]({'where':{'id':(0x0,typeorm_2['In'])(_0x26f060)}});return _0x11718b[_0xee669c(0x127)](_0x1d1c0a=>{const _0x10c99b=_0xee669c,_0x51fa69=_0xf429ee[_0x10c99b(0x103)](_0x382fe3=>_0x382fe3['id']===_0x1d1c0a[_0x10c99b(0x10a)]);_0x1d1c0a[_0x10c99b(0xdd)]=_0x51fa69?_0x51fa69[_0x10c99b(0x118)]:'';}),{'rows':(0x0,utils_1['formatCreateOrUpdateDate'])(_0x11718b),'count':_0x499d4d};}async[_0x555016(0x119)](_0x1e22e2,_0x4eed4a){const _0x5c1ab6=_0x555016,{page:_0x141e0f,size:_0x293ecc}=_0x4eed4a,_0x411de1={};_0x4eed4a[_0x5c1ab6(0x115)]!==undefined&&_0x4eed4a[_0x5c1ab6(0x115)]!==''&&(_0x411de1[_0x5c1ab6(0x115)]=_0x4eed4a[_0x5c1ab6(0x115)]),_0x4eed4a[_0x5c1ab6(0xff)]&&(_0x411de1[_0x5c1ab6(0xff)]=_0x4eed4a[_0x5c1ab6(0xff)]);const [_0x5dcdeb,_0x51d5a1]=await this[_0x5c1ab6(0xdc)][_0x5c1ab6(0x124)]({'where':_0x411de1,'order':{'createdAt':_0x5c1ab6(0x12b)},'skip':(_0x141e0f-0x1)*_0x293ecc,'take':_0x293ecc}),_0x196662=_0x5dcdeb[_0x5c1ab6(0x109)](_0x10d697=>_0x10d697['userId']),_0x24a1bc=await this[_0x5c1ab6(0xdf)]['find']({'where':{'id':(0x0,typeorm_2['In'])(_0x196662)}});return _0x5dcdeb['forEach'](_0x1b6012=>{const _0x35572c=_0x5c1ab6,_0x5199a2=_0x24a1bc['find'](_0x297b8e=>_0x297b8e['id']===_0x1b6012[_0x35572c(0xe5)]);if(_0x5199a2){const {username:_0x39ee53,email:_0x454819,avatar:_0x9fbace}=_0x5199a2;_0x1b6012['userInfo']={'username':_0x39ee53,'avatar':_0x9fbace,'email':(0x0,utils_1[_0x35572c(0x101)])(_0x454819)};}}),{'rows':(0x0,utils_1[_0x5c1ab6(0xd1)])(_0x5dcdeb),'count':_0x51d5a1};}async[_0x555016(0x120)](_0x4fe3bc){const _0x3a490d=_0x555016;try{return await this[_0x3a490d(0xdc)][_0x3a490d(0x106)](_0x4fe3bc);}catch(_0x32c4e7){console[_0x3a490d(0x112)](_0x3a490d(0x10d),_0x32c4e7);throw new common_1[(_0x3a490d(0xe6))](_0x3a490d(0xfe),common_1['HttpStatus']['BAD_REQUEST']);}}async[_0x555016(0x128)](_0x3e0e59,_0x2281ab){const _0x42bf43=_0x555016;try{const {id:_0x21c6d6}=_0x3e0e59[_0x42bf43(0xed)],{id:_0xc708b7,status:_0x3627a9}=_0x2281ab;if(![0x1,-0x1][_0x42bf43(0x113)](_0x3627a9))throw new common_1[(_0x42bf43(0xe6))](_0x42bf43(0x108),common_1[_0x42bf43(0xde)][_0x42bf43(0xd2)]);const _0x1a123e=await this[_0x42bf43(0xdc)]['findOne']({'where':{'id':_0xc708b7}});if(_0x1a123e[_0x42bf43(0x115)]!==0x0)throw new common_1['HttpException']('该工单已审核过',common_1[_0x42bf43(0xde)][_0x42bf43(0xd2)]);const _0x2fe503=await this[_0x42bf43(0xc1)][_0x42bf43(0xd6)]({'where':{'userId':_0x1a123e[_0x42bf43(0xe5)]}}),{withdrawalAmount:_0x337ff3,drawMoneyIn:_0x50a3ea}=_0x2fe503,_0x33228f=new decimal_js_1['default'](_0x337ff3)[_0x42bf43(0x10f)](_0x1a123e[_0x42bf43(0x10c)])[_0x42bf43(0x105)](),_0x4368b6=new decimal_js_1['default'](_0x50a3ea)['minus'](_0x1a123e[_0x42bf43(0x10c)])[_0x42bf43(0x105)]();return await this[_0x42bf43(0xc1)][_0x42bf43(0x12d)]({'userId':_0x1a123e[_0x42bf43(0xe5)]},{'withdrawalAmount':_0x33228f,'drawMoneyIn':_0x4368b6}),await this[_0x42bf43(0xdc)][_0x42bf43(0x12d)]({'id':_0xc708b7},{'orderStatus':_0x3627a9,'auditStatus':_0x3627a9,'auditUserId':_0x21c6d6,'paymentStatus':_0x3627a9}),_0x42bf43(0xee);}catch(_0x1cbf41){console[_0x42bf43(0x112)](_0x42bf43(0x10d),_0x1cbf41);throw new common_1['HttpException'](_0x42bf43(0x126),common_1[_0x42bf43(0xde)]['BAD_REQUEST']);}}async[_0x555016(0x107)](_0x163ccd,_0x5379e3){const _0xfc1e8d=_0x555016,{page:_0x1a96a9,size:_0x15ceff,salesOutletName:_0x56d5cb,performanceRatio:_0x224426}=_0x5379e3,_0x195538={};_0x56d5cb&&(_0x195538['salesOutletName']=(0x0,typeorm_2['Like'])('%'+_0x56d5cb+'%')),_0x224426&&(_0x195538[_0xfc1e8d(0x11b)]=_0x224426);const [_0x5e1b32,_0xae8f1e]=await this[_0xfc1e8d(0xc1)][_0xfc1e8d(0x124)]({'where':_0x195538,'order':{'id':_0xfc1e8d(0x12b)},'skip':(_0x1a96a9-0x1)*_0x15ceff,'take':_0x15ceff}),_0x1ecc2e=_0x5e1b32[_0xfc1e8d(0x109)](_0xa5a100=>_0xa5a100[_0xfc1e8d(0xe5)]),_0x15e995=await this['userEntity'][_0xfc1e8d(0x103)]({'where':{'id':(0x0,typeorm_2['In'])(_0x1ecc2e)}});return _0x5e1b32[_0xfc1e8d(0x127)](_0x3d76a9=>{const _0x2ac5fd=_0xfc1e8d,_0x292404=_0x15e995[_0x2ac5fd(0x103)](_0x2339ba=>_0x2339ba['id']===_0x3d76a9['userId']);_0x3d76a9[_0x2ac5fd(0xfa)]=_0x292404?_0x292404:{};}),_0x163ccd['user'][_0xfc1e8d(0xf2)]!==_0xfc1e8d(0xf6)&&_0x5e1b32[_0xfc1e8d(0x127)](_0x134b1f=>{const _0x2a7d42=_0xfc1e8d;var _0x20f5f3,_0x57e437;_0x134b1f[_0x2a7d42(0xfa)]['email']=((_0x20f5f3=_0x134b1f[_0x2a7d42(0xfa)])===null||_0x20f5f3===void 0x0?void 0x0:_0x20f5f3[_0x2a7d42(0x11a)])?(0x0,utils_1['hideString'])((_0x57e437=_0x134b1f[_0x2a7d42(0xfa)])===null||_0x57e437===void 0x0?void 0x0:_0x57e437['email']):'';}),{'rows':_0x5e1b32,'count':_0xae8f1e};}async[_0x555016(0xf3)](_0x2bb952,_0xed14e9){const _0xec6d75=_0x555016,{performanceRatio:_0x5d9b43,salesOutletName:_0x12c6ba,userId:_0x55a646}=_0xed14e9,_0x516920=await this[_0xec6d75(0xc1)][_0xec6d75(0xd6)]({'where':{'userId':_0x55a646}});if(!_0x516920)throw new common_1[(_0xec6d75(0xe6))](_0xec6d75(0xcd),common_1[_0xec6d75(0xde)][_0xec6d75(0xd2)]);const _0x1c1c8b=await this[_0xec6d75(0xc1)][_0xec6d75(0x12d)]({'userId':_0x55a646},{'performanceRatio':_0x5d9b43,'salesOutletName':_0x12c6ba});if(_0x1c1c8b[_0xec6d75(0x104)]>0x0)return _0xec6d75(0xce);else throw new common_1[(_0xec6d75(0xe6))](_0xec6d75(0xf4),common_1['HttpStatus'][_0xec6d75(0xd2)]);}};SalesService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(salesUsers_entity_1[_0x555016(0xfb)])),__param(0x1,(0x0,typeorm_1[_0x555016(0xf7)])(salesRecords_entity_1[_0x555016(0xef)])),__param(0x2,(0x0,typeorm_1[_0x555016(0xf7)])(user_entity_1[_0x555016(0xdb)])),__param(0x3,(0x0,typeorm_1['InjectRepository'])(salesOrder_entity_1['SalesOrderEntity'])),__metadata(_0x555016(0xd4),[typeorm_2[_0x555016(0xeb)],typeorm_2[_0x555016(0xeb)],typeorm_2[_0x555016(0xeb)],typeorm_2[_0x555016(0xeb)],globalConfig_service_1[_0x555016(0x129)]])],SalesService),exports[_0x555016(0xca)]=SalesService;