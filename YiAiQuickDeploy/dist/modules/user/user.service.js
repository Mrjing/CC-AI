'use strict';const _0x43ab6d=_0x3a03;(function(_0xf68239,_0x187166){const _0x31c7c4=_0x3a03,_0x295090=_0xf68239();while(!![]){try{const _0x4d2d54=-parseInt(_0x31c7c4(0xeb))/0x1+parseInt(_0x31c7c4(0x118))/0x2+parseInt(_0x31c7c4(0xe0))/0x3*(parseInt(_0x31c7c4(0x115))/0x4)+-parseInt(_0x31c7c4(0x99))/0x5+parseInt(_0x31c7c4(0x10e))/0x6*(parseInt(_0x31c7c4(0xe8))/0x7)+-parseInt(_0x31c7c4(0xd5))/0x8+parseInt(_0x31c7c4(0x12c))/0x9*(-parseInt(_0x31c7c4(0x79))/0xa);if(_0x4d2d54===_0x187166)break;else _0x295090['push'](_0x295090['shift']());}catch(_0x56b3d4){_0x295090['push'](_0x295090['shift']());}}}(_0x5418,0xce7fd));function _0x3a03(_0x2c0df0,_0x37bdee){const _0x5418e2=_0x5418();return _0x3a03=function(_0x3a031c,_0x3be78f){_0x3a031c=_0x3a031c-0x78;let _0x5e7784=_0x5418e2[_0x3a031c];return _0x5e7784;},_0x3a03(_0x2c0df0,_0x37bdee);}var __decorate=this&&this[_0x43ab6d(0xe2)]||function(_0xff668c,_0x9ba179,_0x35a2f0,_0x463964){const _0x42c7a9=_0x43ab6d;var _0x110d39=arguments[_0x42c7a9(0x82)],_0x3b90a0=_0x110d39<0x3?_0x9ba179:_0x463964===null?_0x463964=Object['getOwnPropertyDescriptor'](_0x9ba179,_0x35a2f0):_0x463964,_0x5299a0;if(typeof Reflect===_0x42c7a9(0x127)&&typeof Reflect[_0x42c7a9(0x8e)]===_0x42c7a9(0x8c))_0x3b90a0=Reflect[_0x42c7a9(0x8e)](_0xff668c,_0x9ba179,_0x35a2f0,_0x463964);else{for(var _0x244001=_0xff668c[_0x42c7a9(0x82)]-0x1;_0x244001>=0x0;_0x244001--)if(_0x5299a0=_0xff668c[_0x244001])_0x3b90a0=(_0x110d39<0x3?_0x5299a0(_0x3b90a0):_0x110d39>0x3?_0x5299a0(_0x9ba179,_0x35a2f0,_0x3b90a0):_0x5299a0(_0x9ba179,_0x35a2f0))||_0x3b90a0;}return _0x110d39>0x3&&_0x3b90a0&&Object[_0x42c7a9(0x11c)](_0x9ba179,_0x35a2f0,_0x3b90a0),_0x3b90a0;},__metadata=this&&this[_0x43ab6d(0xc7)]||function(_0x18c73d,_0x13ee3e){const _0x2bf9ef=_0x43ab6d;if(typeof Reflect===_0x2bf9ef(0x127)&&typeof Reflect[_0x2bf9ef(0x109)]===_0x2bf9ef(0x8c))return Reflect[_0x2bf9ef(0x109)](_0x18c73d,_0x13ee3e);},__param=this&&this[_0x43ab6d(0xda)]||function(_0x19dcd1,_0x1e5d7b){return function(_0x36a610,_0x3a25c3){_0x1e5d7b(_0x36a610,_0x3a25c3,_0x19dcd1);};};Object['defineProperty'](exports,_0x43ab6d(0x10f),{'value':!![]}),exports['UserService']=void 0x0;const globalConfig_service_1=require('../globalConfig/globalConfig.service'),user_constant_1=require(_0x43ab6d(0x7c)),mailer_1=require(_0x43ab6d(0xfc)),verification_service_1=require('../verification/verification.service'),common_1=require(_0x43ab6d(0xc0)),typeorm_1=require(_0x43ab6d(0xa0)),typeorm_2=require(_0x43ab6d(0xf8)),user_entity_1=require(_0x43ab6d(0xec)),bcrypt=require(_0x43ab6d(0xba)),crypto=require(_0x43ab6d(0x8b)),_=require(_0x43ab6d(0xdd)),verification_constant_1=require(_0x43ab6d(0xee)),userBalance_service_1=require(_0x43ab6d(0xf0)),utils_1=require('../../common/utils'),balance_constant_1=require(_0x43ab6d(0xc5)),config_entity_1=require(_0x43ab6d(0xcb)),whiteList_entity_1=require(_0x43ab6d(0x126));let UserService=class UserService{constructor(_0xa27c1a,_0x4742b8,_0x266606,_0x1361f3,_0x18a7c9,_0x3dab93,_0x455f0f,_0xca2c11){const _0x138f3f=_0x43ab6d;this['userEntity']=_0xa27c1a,this['whiteListEntity']=_0x4742b8,this[_0x138f3f(0x11b)]=_0x266606,this['verificationService']=_0x1361f3,this[_0x138f3f(0x7a)]=_0x18a7c9,this[_0x138f3f(0x11e)]=_0x3dab93,this[_0x138f3f(0xaa)]=_0x455f0f,this['configEntity']=_0xca2c11;}async[_0x43ab6d(0xa9)](_0x26ce8,_0x6b33f5){const _0x5be186=_0x43ab6d,{username:_0x47826a,email:_0x421b6e,password:_0x1a8a56,invitedBy:_0x7357c4,client:client=0x0}=_0x26ce8;if(_0x7357c4){const _0xcf008e=await this['userEntity'][_0x5be186(0x90)]({'where':{'inviteCode':_0x7357c4}});if(!_0xcf008e)throw new common_1[(_0x5be186(0xb7))](_0x5be186(0xd3),common_1[_0x5be186(0xde)]['BAD_REQUEST']);}const _0x5d5ae7=[{'username':_0x47826a},{'email':_0x421b6e}],_0x579464=await this['userEntity']['findOne']({'where':_0x5d5ae7});if(_0x579464&&_0x579464[_0x5be186(0x114)]!==user_constant_1[_0x5be186(0xcc)][_0x5be186(0xb5)])throw new common_1[(_0x5be186(0xb7))](_0x5be186(0xc9),common_1[_0x5be186(0xde)]['BAD_REQUEST']);try{const _0x1d6e52=_[_0x5be186(0x8a)](_0x26ce8),_0x4410b1=bcrypt['hashSync'](_0x1a8a56,0xa),_0x5bfe16=(0x0,utils_1[_0x5be186(0xd7)])(_0x6b33f5);_0x1d6e52[_0x5be186(0xbb)]=_0x4410b1,_0x1d6e52[_0x5be186(0xe9)]=_0x5bfe16,_0x1d6e52[_0x5be186(0x8d)]=client;let _0x17ba61;if(!_0x579464){const _0x33502d=await this[_0x5be186(0xaa)][_0x5be186(0xb2)](['userDefautlAvatar']);_0x1d6e52['avatar']=_0x33502d,_0x17ba61=await this['userEntity'][_0x5be186(0x124)](_0x1d6e52);}else _0x17ba61=_0x579464;const _0x4d8a73=await this[_0x5be186(0xb1)][_0x5be186(0xa3)]({'where':{'configKey':(0x0,typeorm_2['In'])(['isVerifyEmail','registerBaseUrl',_0x5be186(0x85),_0x5be186(0x81),'registerVerifyEmailFrom','registerVerifyExpir'])}}),_0x5411a3=_0x4d8a73['reduce']((_0x33e931,_0x2efac9)=>{const _0x3a4592=_0x5be186;return _0x33e931[_0x2efac9['configKey']]=_0x2efac9[_0x3a4592(0xe7)],_0x33e931;},{}),_0x567910=_0x5411a3['isVerifyEmail']?Number(_0x5411a3[_0x5be186(0x122)]):0x1;if(_0x567910){const _0x5bcd97=_0x5411a3[_0x5be186(0xdc)]?Number(_0x5411a3[_0x5be186(0xdc)]):0x1e*0x3c,_0x167860=await this[_0x5be186(0x10c)][_0x5be186(0x80)](_0x17ba61,verification_constant_1['VerificationEnum'][_0x5be186(0xae)],_0x5bcd97),{code:_0x477234,email:_0x4a55e8,id:_0x518b1e}=_0x167860,{registerVerifyEmailFrom:_0x2ccf0e}=_0x5411a3;console['log'](_0x5be186(0x78),_0x5411a3);const _0x599ac3=await this[_0x5be186(0x7a)][_0x5be186(0x108)]({'to':_0x4a55e8,'subject':'来自'+_0x2ccf0e+_0x5be186(0x112),'template':_0x5be186(0xa4),'context':Object[_0x5be186(0xbd)]({'baseUrl':_0x5411a3['registerBaseUrl'],'code':_0x477234,'id':_0x518b1e},_0x5411a3)});console[_0x5be186(0xb3)]('email\x20response\x20\x20->\x20:\x20',_0x599ac3);}else{const {username:_0x2fa7d1,email:_0x275ab7,id:_0x373564,invitedBy:_0x98c873}=_0x17ba61;await this[_0x5be186(0xc1)](_0x373564,user_constant_1[_0x5be186(0xcc)][_0x5be186(0x83)]);let _0x4615b3;_0x98c873&&(_0x4615b3=await this[_0x5be186(0x128)](_0x98c873)),await this[_0x5be186(0x11e)]['addBalanceToNewUser'](_0x373564,_0x4615b3===null||_0x4615b3===void 0x0?void 0x0:_0x4615b3['id']);}return _0x17ba61;}catch(_0x2d41eb){console['log'](_0x5be186(0xaf),_0x2d41eb);throw _0x2d41eb;}}async['getSuper'](){const _0x3dbf96=_0x43ab6d,_0x2b3a15=await this[_0x3dbf96(0x11f)][_0x3dbf96(0x90)]({'where':{'role':_0x3dbf96(0x10b)}});return _0x2b3a15;}async[_0x43ab6d(0xa7)](_0x4c5a49){const _0x285186=_0x43ab6d,{username:_0x25ef92,password:_0xad2a72,uid:uid=0x0,phone:_0x57c25f}=_0x4c5a49;let _0x40a629=null;if(uid>0x0){_0x40a629=await this[_0x285186(0x11f)][_0x285186(0x90)]({'where':{'id':uid}});if(!_0x40a629)throw new common_1[(_0x285186(0xb7))](_0x285186(0xb4),common_1[_0x285186(0xde)][_0x285186(0xb9)]);if(_0x40a629['password']['startsWith'](_0x285186(0x84))||_0x40a629['password'][_0x285186(0xc3)](_0x285186(0xc6))||_0x40a629[_0x285186(0xbb)]['startsWith'](_0x285186(0xb6))){if(!bcrypt[_0x285186(0x9e)](_0xad2a72,_0x40a629[_0x285186(0xbb)]))throw new common_1[(_0x285186(0xb7))]('当前密码错误！',common_1['HttpStatus'][_0x285186(0xb9)]);}else{console['log'](_0x285186(0xa5));const _0x565a16=crypto[_0x285186(0xf2)](_0x285186(0x98))[_0x285186(0xac)](_0xad2a72)[_0x285186(0xdb)](_0x285186(0x94));console[_0x285186(0xb3)]('----,',_0x565a16);if(_0x565a16!==_0x40a629['password'])throw new common_1[(_0x285186(0xb7))]('当前密码错误！',common_1[_0x285186(0xde)][_0x285186(0xb9)]);}}if(_0x25ef92&&_0xad2a72){const _0xbadd6d=[{'username':_0x25ef92},{'email':_0x25ef92}];_0x40a629=await this['userEntity'][_0x285186(0x90)]({'where':_0xbadd6d});if(!_0x40a629)throw new common_1[(_0x285186(0xb7))](_0x285186(0xb4),common_1[_0x285186(0xde)][_0x285186(0xb9)]);if(_0x40a629['password']['startsWith'](_0x285186(0x84))||_0x40a629[_0x285186(0xbb)]['startsWith'](_0x285186(0xc6))||_0x40a629[_0x285186(0xbb)][_0x285186(0xc3)]('$2y$')){if(!bcrypt[_0x285186(0x9e)](_0xad2a72,_0x40a629['password']))throw new common_1['HttpException'](_0x285186(0x113),common_1[_0x285186(0xde)][_0x285186(0xb9)]);}else{console['log'](_0x285186(0xa5));const _0x265682=crypto['createHash'](_0x285186(0x98))['update'](_0xad2a72)[_0x285186(0xdb)](_0x285186(0x94));console[_0x285186(0xb3)](_0x285186(0xa5),_0x265682);if(_0x265682!==_0x40a629[_0x285186(0xbb)])throw new common_1['HttpException'](_0x285186(0x113),common_1[_0x285186(0xde)]['BAD_REQUEST']);}}if(_0x57c25f&&_0xad2a72){const _0x1ceb8b=[{'phone':_0x57c25f}];_0x40a629=await this[_0x285186(0x11f)][_0x285186(0x90)]({'where':_0x1ceb8b});if(!_0x40a629)throw new common_1[(_0x285186(0xb7))](_0x285186(0xb4),common_1[_0x285186(0xde)]['BAD_REQUEST']);if(_0x40a629[_0x285186(0xbb)][_0x285186(0xc3)](_0x285186(0x84))||_0x40a629[_0x285186(0xbb)]['startsWith'](_0x285186(0xc6))||_0x40a629[_0x285186(0xbb)][_0x285186(0xc3)](_0x285186(0xb6))){if(!bcrypt[_0x285186(0x9e)](_0xad2a72,_0x40a629['password']))throw new common_1[(_0x285186(0xb7))](_0x285186(0x113),common_1[_0x285186(0xde)][_0x285186(0xb9)]);}else{console[_0x285186(0xb3)]('----,');const _0x4b16eb=crypto['createHash'](_0x285186(0x98))[_0x285186(0xac)](_0xad2a72)[_0x285186(0xdb)](_0x285186(0x94));console[_0x285186(0xb3)](_0x285186(0xa5),_0x4b16eb);if(_0x4b16eb!==_0x40a629['password'])throw new common_1[(_0x285186(0xb7))](_0x285186(0x113),common_1[_0x285186(0xde)][_0x285186(0xb9)]);}}if(!_0x40a629)throw new common_1[(_0x285186(0xb7))]('当前账户不存在！',common_1[_0x285186(0xde)]['BAD_REQUEST']);if(_0x40a629[_0x285186(0x114)]!==user_constant_1[_0x285186(0xcc)]['ACTIVE'])throw new common_1[(_0x285186(0xb7))](user_constant_1[_0x285186(0xe5)][_0x40a629[_0x285186(0x114)]],common_1[_0x285186(0xde)][_0x285186(0xb9)]);return _0x40a629;}async[_0x43ab6d(0x121)](_0x24e463,_0x10f0c2){const _0x301ba5=_0x43ab6d,_0x346d83=await this[_0x301ba5(0x11f)][_0x301ba5(0x90)]({'where':{'id':_0x24e463}});if(_0x346d83['password']['startsWith'](_0x301ba5(0x84))||_0x346d83[_0x301ba5(0xbb)][_0x301ba5(0xc3)](_0x301ba5(0xc6))||_0x346d83[_0x301ba5(0xbb)][_0x301ba5(0xc3)](_0x301ba5(0xb6)))return bcrypt[_0x301ba5(0x9e)](_0x10f0c2,_0x346d83[_0x301ba5(0xbb)]);else{const _0x34c35d=crypto[_0x301ba5(0xf2)]('md5')[_0x301ba5(0xac)](_0x10f0c2)[_0x301ba5(0xdb)](_0x301ba5(0x94));return console[_0x301ba5(0xb3)](_0x301ba5(0xa5),_0x34c35d),_0x34c35d===_0x346d83[_0x301ba5(0xbb)];}}async[_0x43ab6d(0xc1)](_0x5506b6,_0x4e3d25){const _0x9b768=_0x43ab6d,_0x53b403=await this[_0x9b768(0x11f)]['update']({'id':_0x5506b6},{'status':_0x4e3d25});return _0x53b403[_0x9b768(0x91)]>0x0;}async[_0x43ab6d(0x7b)](_0x1daba3){const _0x5c731d=_0x43ab6d,_0x2faeca=await this[_0x5c731d(0x11f)]['findOne']({'where':{'id':_0x1daba3}});return _0x2faeca[_0x5c731d(0x114)];}async[_0x43ab6d(0xd8)](_0x358352){const _0x2b67e3=_0x43ab6d;return await this[_0x2b67e3(0x11f)][_0x2b67e3(0x90)]({'where':{'id':_0x358352}});}async['queryUserInfoByPhone'](_0x17d84d){const _0xb75fce=_0x43ab6d;return await this[_0xb75fce(0x11f)][_0xb75fce(0x90)]({'where':{'phone':_0x17d84d}});}async[_0x43ab6d(0x10d)](_0x1b334d){const _0x5219fe=_0x43ab6d;return await this[_0x5219fe(0x11f)][_0x5219fe(0x90)]({'where':{'id':_0x1b334d}});}async[_0x43ab6d(0x9b)](_0x3ce1fa){const _0x33a1ec=_0x43ab6d,{id:_0x3693a8,role:_0x2866a1}=_0x3ce1fa;if(_0x2866a1===_0x33a1ec(0x103))return!![];const _0x1bd64a=await this[_0x33a1ec(0x11f)][_0x33a1ec(0x90)]({'where':{'id':_0x3693a8}});if(!_0x1bd64a)throw new common_1['HttpException']('当前用户信息失效、请重新登录！',common_1[_0x33a1ec(0xde)][_0x33a1ec(0xbe)]);if(_0x1bd64a[_0x33a1ec(0x114)]===user_constant_1[_0x33a1ec(0xcc)][_0x33a1ec(0xd4)])throw new common_1[(_0x33a1ec(0xb7))](_0x33a1ec(0x104),common_1['HttpStatus'][_0x33a1ec(0xb9)]);if(_0x1bd64a[_0x33a1ec(0x114)]===user_constant_1[_0x33a1ec(0xcc)]['LOCKED'])throw new common_1[(_0x33a1ec(0xb7))]('您的账户已被封禁、如有疑问、请联系管理员！',common_1[_0x33a1ec(0xde)][_0x33a1ec(0xb9)]);}async[_0x43ab6d(0x100)](_0x3b4728){const _0x4167ee=_0x43ab6d,_0x4391be=await this[_0x4167ee(0x11f)][_0x4167ee(0x90)]({'where':{'id':_0x3b4728},'select':[_0x4167ee(0xd9),_0x4167ee(0x120),'role',_0x4167ee(0x92),_0x4167ee(0x125),_0x4167ee(0x107),'openId','consecutiveDays']});if(!_0x4391be)throw new common_1['HttpException'](_0x4167ee(0x11a),common_1[_0x4167ee(0xde)][_0x4167ee(0xbe)]);_0x4391be[_0x4167ee(0x101)]=!!(_0x4391be===null||_0x4391be===void 0x0?void 0x0:_0x4391be[_0x4167ee(0x9c)]),delete _0x4391be[_0x4167ee(0x9c)];const _0x236de3=await this['userBalanceService'][_0x4167ee(0x12b)](_0x3b4728);return{'userInfo':_0x4391be,'userBalance':Object[_0x4167ee(0xbd)]({},_0x236de3)};}async['getUserById'](_0x59eb9d){const _0x2e7167=_0x43ab6d;return await this[_0x2e7167(0x11f)][_0x2e7167(0x90)]({'where':{'id':_0x59eb9d}});}async[_0x43ab6d(0xd1)](_0x98625f){const _0x17d9d0=_0x43ab6d;return await this['userEntity'][_0x17d9d0(0x90)]({'where':{'openId':_0x98625f}});}async[_0x43ab6d(0x9a)](_0x1d9167,_0x5bf0dd){const _0x320e0a=_0x43ab6d,{id:_0xa9bb0d}=_0x5bf0dd[_0x320e0a(0x106)],_0x2bea9f=await this[_0x320e0a(0x11f)][_0x320e0a(0x90)]({'where':{'id':_0xa9bb0d}});if(!_0x2bea9f)throw new common_1[(_0x320e0a(0xb7))](_0x320e0a(0x119),common_1[_0x320e0a(0xde)][_0x320e0a(0xb9)]);if(_0x1d9167[_0x320e0a(0xd9)]&&_0x2bea9f[_0x320e0a(0xd9)]===_0x1d9167[_0x320e0a(0xd9)])throw new common_1[(_0x320e0a(0xb7))](_0x320e0a(0xfd),common_1[_0x320e0a(0xde)]['BAD_REQUEST']);if(_0x1d9167[_0x320e0a(0xd9)]){const _0x4a38fa=await this['userEntity'][_0x320e0a(0x90)]({'where':{'username':_0x1d9167[_0x320e0a(0xd9)],'id':(0x0,typeorm_2['Not'])(_0xa9bb0d)}});if(_0x4a38fa)throw new common_1['HttpException'](_0x320e0a(0xf3),common_1['HttpStatus'][_0x320e0a(0xb9)]);}const _0x1b4513=await this[_0x320e0a(0x11f)][_0x320e0a(0xac)]({'id':_0xa9bb0d},_0x1d9167);if(_0x1b4513[_0x320e0a(0x91)]<=0x0)throw new common_1[(_0x320e0a(0xb7))](_0x320e0a(0x7d),common_1[_0x320e0a(0xde)][_0x320e0a(0xb9)]);return _0x320e0a(0xc2);}async[_0x43ab6d(0xa8)](_0xcc7cc6,_0x1b70ac){const _0x86a373=_0x43ab6d,_0x5f2581=bcrypt[_0x86a373(0xf1)](_0x1b70ac,0xa),_0x556948=await this[_0x86a373(0x11f)][_0x86a373(0xac)]({'id':_0xcc7cc6},{'password':_0x5f2581});if(_0x556948[_0x86a373(0x91)]<=0x0)throw new common_1[(_0x86a373(0xb7))](_0x86a373(0xc4),common_1[_0x86a373(0xde)][_0x86a373(0xb9)]);}async[_0x43ab6d(0xef)](_0x735e2e){const _0x570765=_0x43ab6d,{id:_0x108131}=_0x735e2e['user'],_0x20898d=await this[_0x570765(0x11f)][_0x570765(0x90)]({'where':{'id':_0x108131}});if(!_0x20898d||_0x20898d[_0x570765(0x107)])throw new common_1['HttpException'](_0x570765(0x97),common_1[_0x570765(0xde)]['BAD_REQUEST']);const _0x5bf2b7=(0x0,utils_1['generateRandomString'])(),_0x30ffd4=await this[_0x570765(0x11f)][_0x570765(0x90)]({'where':{'inviteCode':_0x5bf2b7}});if(_0x30ffd4)throw new common_1[(_0x570765(0xb7))](_0x570765(0xf4),common_1[_0x570765(0xde)][_0x570765(0xb9)]);const _0xd7e192=await this['userEntity'][_0x570765(0xac)]({'id':_0x108131},{'inviteCode':_0x5bf2b7});if(_0xd7e192['affected']<=0x0)throw new common_1['HttpException'](_0x570765(0xf4),common_1['HttpStatus'][_0x570765(0xb9)]);return _0x5bf2b7;}async['getInviteRecord'](_0x56bcca,_0x5eb9a1){const _0x4f8266=_0x43ab6d;try{const {id:_0x53c82b}=_0x56bcca[_0x4f8266(0x106)],{page:page=0x1,size:size=0xa}=_0x5eb9a1,_0x3c2767=await this[_0x4f8266(0x11f)][_0x4f8266(0x90)]({'where':{'id':_0x53c82b}}),{inviteCode:_0x542b1b}=_0x3c2767;if(!_0x542b1b)return[];const [_0x3f0471,_0x447a73]=await this['userEntity'][_0x4f8266(0xb8)]({'where':{'inviteCode':_0x542b1b},'order':{'id':_0x4f8266(0xe6)},'select':[_0x4f8266(0xd9),_0x4f8266(0x92),_0x4f8266(0xfe),_0x4f8266(0x114),'avatar'],'take':size,'skip':(page-0x1)*size});return(0x0,utils_1[_0x4f8266(0xd6)])(_0x3f0471)[_0x4f8266(0xca)](_0x5ec03d=>{const _0x11cc0e=_0x4f8266;return _0x5ec03d['email']=(0x0,utils_1[_0x11cc0e(0x12a)])(_0x5ec03d[_0x11cc0e(0x92)]),_0x5ec03d;}),{'rows':_0x3f0471,'count':_0x447a73};}catch(_0x3e195c){console[_0x4f8266(0xb3)](_0x4f8266(0xaf),_0x3e195c);throw new common_1[(_0x4f8266(0xb7))](_0x4f8266(0x96),common_1['HttpStatus'][_0x4f8266(0xb9)]);}}async[_0x43ab6d(0xcf)](_0x2b4728){const _0x272e61=_0x43ab6d,_0x1a4058=await this[_0x272e61(0x11f)][_0x272e61(0x90)]({'where':{'inviteCode':_0x2b4728}});if(!_0x1a4058)return 0x1;const {inviteLinkCount:inviteLinkCount=0x0}=_0x1a4058,_0x37031f=await this['userEntity'][_0x272e61(0xac)]({'inviteCode':_0x2b4728},{'inviteLinkCount':inviteLinkCount+0x1});return _0x37031f[_0x272e61(0x91)]?0x1:0x0;}async[_0x43ab6d(0x128)](_0x526f59){const _0x17a0c5=_0x43ab6d;return await this['userEntity'][_0x17a0c5(0x90)]({'where':{'inviteCode':_0x526f59}});}async[_0x43ab6d(0x105)](_0x340f08){const _0x3983bd=_0x43ab6d,{userId:_0x343a1a,model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0}=_0x340f08;await this[_0x3983bd(0x11e)][_0x3983bd(0xcd)](_0x343a1a,{'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount});const _0x188542=await this['userBalanceService'][_0x3983bd(0x9f)]({'userId':_0x343a1a,'rechargeType':balance_constant_1[_0x3983bd(0xa6)][_0x3983bd(0xc8)],'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount,'extent':''});return _0x188542;}async[_0x43ab6d(0x8f)](_0x2f7a43,_0x527446){const _0x5e8add=_0x43ab6d,{page:page=0x1,size:size=0xa,username:_0xfa08a1,email:_0x1f122c,status:_0x281937,keyword:_0x19a01e,phone:_0x26595c}=_0x2f7a43;let _0x5c3566={};_0xfa08a1&&Object[_0x5e8add(0xbd)](_0x5c3566,{'username':(0x0,typeorm_2['Like'])('%'+_0xfa08a1+'%')}),_0x1f122c&&Object[_0x5e8add(0xbd)](_0x5c3566,{'email':(0x0,typeorm_2[_0x5e8add(0xd2)])('%'+_0x1f122c+'%')}),_0x26595c&&Object[_0x5e8add(0xbd)](_0x5c3566,{'phone':(0x0,typeorm_2[_0x5e8add(0xd2)])('%'+_0x26595c+'%')}),_0x281937&&Object[_0x5e8add(0xbd)](_0x5c3566,{'status':_0x281937});_0x19a01e&&(_0x5c3566=[{'username':(0x0,typeorm_2[_0x5e8add(0xd2)])('%'+_0x19a01e+'%')},{'email':(0x0,typeorm_2[_0x5e8add(0xd2)])('%'+_0x19a01e+'%')},{'phone':(0x0,typeorm_2['Like'])('%'+_0x19a01e+'%')}]);const [_0x25ad11,_0x115337]=await this[_0x5e8add(0x11f)][_0x5e8add(0xb8)]({'skip':(page-0x1)*size,'where':_0x5c3566,'take':size,'order':{'createdAt':_0x5e8add(0xe6)},'cache':!![],'select':[_0x5e8add(0xd9),_0x5e8add(0x120),_0x5e8add(0x107),'role',_0x5e8add(0x125),_0x5e8add(0x114),'id','email',_0x5e8add(0xfe),_0x5e8add(0xa1),'phone']}),_0x3b5cd3=_0x25ad11['map'](_0x54e74c=>_0x54e74c['id']),_0xc20548=await this[_0x5e8add(0x11e)]['queryUserBalanceByIds'](_0x3b5cd3);return _0x25ad11[_0x5e8add(0x86)](_0x454fa5=>_0x454fa5[_0x5e8add(0x116)]=_0xc20548[_0x5e8add(0xa3)](_0x18c8eb=>_0x18c8eb['userId']===_0x454fa5['id'])),_0x527446[_0x5e8add(0x106)][_0x5e8add(0x11d)]!==_0x5e8add(0x10b)&&_0x25ad11[_0x5e8add(0x86)](_0x3de8df=>_0x3de8df[_0x5e8add(0x92)]=(0x0,utils_1[_0x5e8add(0x12a)])(_0x3de8df[_0x5e8add(0x92)])),_0x527446[_0x5e8add(0x106)][_0x5e8add(0x11d)]!==_0x5e8add(0x10b)&&_0x25ad11[_0x5e8add(0x86)](_0x2aa75d=>_0x2aa75d[_0x5e8add(0xa1)]=(0x0,utils_1[_0x5e8add(0x7e)])(_0x2aa75d[_0x5e8add(0xa1)])),_0x527446[_0x5e8add(0x106)][_0x5e8add(0x11d)]!==_0x5e8add(0x10b)&&_0x25ad11[_0x5e8add(0x86)](_0x3c376a=>_0x3c376a[_0x5e8add(0xf9)]=(0x0,utils_1[_0x5e8add(0x7e)])(_0x3c376a['phone'])),{'rows':_0x25ad11,'count':_0x115337};}async['queryOne']({id:_0x2dc890}){const _0x2052d2=_0x43ab6d;return await this[_0x2052d2(0x11f)][_0x2052d2(0x90)]({'where':{'id':_0x2dc890},'select':['username',_0x2052d2(0x120),'inviteCode','role',_0x2052d2(0x125),_0x2052d2(0x114)]});}async[_0x43ab6d(0xed)](_0x50b9e4){const _0x19b2bd=_0x43ab6d,{id:_0x35d300,status:_0x53c4a3}=_0x50b9e4,_0x485bb4=await this[_0x19b2bd(0x11f)][_0x19b2bd(0x90)]({'where':{'id':_0x35d300}});if(!_0x485bb4)throw new common_1[(_0x19b2bd(0xb7))](_0x19b2bd(0xf7),common_1[_0x19b2bd(0xde)][_0x19b2bd(0xb9)]);if(_0x485bb4[_0x19b2bd(0x11d)]===_0x19b2bd(0x10b))throw new common_1['HttpException'](_0x19b2bd(0xce),common_1[_0x19b2bd(0xde)]['BAD_REQUEST']);if(_0x485bb4[_0x19b2bd(0x114)]===user_constant_1[_0x19b2bd(0xcc)][_0x19b2bd(0xb5)])throw new common_1['HttpException']('未激活用户不可手动变更状态！',common_1[_0x19b2bd(0xde)][_0x19b2bd(0xb9)]);if(_0x485bb4['role']===_0x19b2bd(0x10b))throw new common_1['HttpException'](_0x19b2bd(0xce),common_1[_0x19b2bd(0xde)][_0x19b2bd(0xb9)]);if(_0x53c4a3===user_constant_1[_0x19b2bd(0xcc)][_0x19b2bd(0xb5)])throw new common_1[(_0x19b2bd(0xb7))](_0x19b2bd(0xd0),common_1[_0x19b2bd(0xde)]['BAD_REQUEST']);const _0x3b6359=await this[_0x19b2bd(0x11f)][_0x19b2bd(0xac)]({'id':_0x35d300},{'status':_0x53c4a3});if(_0x3b6359[_0x19b2bd(0x91)]<=0x0)throw new common_1[(_0x19b2bd(0xb7))](_0x19b2bd(0xbf),common_1[_0x19b2bd(0xde)][_0x19b2bd(0xb9)]);return _0x19b2bd(0x117);}async[_0x43ab6d(0x93)](_0x3c573b){const _0x582245=_0x43ab6d,{id:_0x1d543f}=_0x3c573b,_0x5d0add=await this['userEntity'][_0x582245(0x90)]({'where':{'id':_0x1d543f}});if(!_0x5d0add)throw new common_1[(_0x582245(0xb7))](_0x582245(0xf7),common_1[_0x582245(0xde)][_0x582245(0xb9)]);const _0x4bc766=_0x582245(0x7f),_0x5c5521=bcrypt['hashSync'](_0x4bc766,0xa),_0x4af3e3=await this[_0x582245(0x11f)][_0x582245(0xac)]({'id':_0x1d543f},{'password':_0x5c5521});if(_0x4af3e3[_0x582245(0x91)]<=0x0)throw new common_1['HttpException'](_0x582245(0xbc),common_1[_0x582245(0xde)][_0x582245(0xb9)]);return'密码重置为['+_0x4bc766+_0x582245(0xfa);}async[_0x43ab6d(0xab)](_0x12ed46,_0xcee385){const _0x37f7be=_0x43ab6d;return await this[_0x37f7be(0x11f)]['update']({'id':_0x12ed46},{'lastLoginIp':_0xcee385});}async[_0x43ab6d(0xad)](_0xd562db,_0x16e499){const _0x4f6eab=_0x43ab6d,_0x3133ca=await this[_0x4f6eab(0x11f)]['findOne']({'where':{'openId':_0xd562db}});if(!_0x3133ca){const _0x5ecf75=_0x16e499?_0x16e499[_0x4f6eab(0x95)](':')[0x1]:'',_0x2a269a=await this['qureyUserInfoByInviteCode'](_0x5ecf75),_0x40781d=await this['createUserFromOpenId'](_0xd562db,_0x5ecf75);return await this[_0x4f6eab(0x11e)][_0x4f6eab(0xe4)](_0x40781d['id'],_0x5ecf75?_0x2a269a===null||_0x2a269a===void 0x0?void 0x0:_0x2a269a['id']:null),_0x40781d;}return _0x3133ca;}async['createUserFromOpenId'](_0x47a9f0,_0x4cda96){const _0x105ca8=_0x43ab6d,_0x11f1b9=await this[_0x105ca8(0xaa)][_0x105ca8(0xb2)](['userDefautlAvatar']),_0x51f206={'avatar':_0x11f1b9,'username':'用户'+(0x0,utils_1[_0x105ca8(0x10a)])(),'status':user_constant_1['UserStatusEnum'][_0x105ca8(0x83)],'sex':0x0,'email':(0x0,utils_1[_0x105ca8(0x10a)])()+_0x105ca8(0xdf),'invitedBy':_0x4cda96,'openId':_0x47a9f0},_0x56aac9=await this['userEntity'][_0x105ca8(0x124)](_0x51f206);return _0x56aac9;}async['bindWx'](_0x3342a0,_0x5a195d){const _0x4e7038=_0x43ab6d;try{const _0x255588=await this['userEntity'][_0x4e7038(0x90)]({'where':{'id':_0x5a195d}});if(!_0x255588)return{'status':![],'msg':'当前绑定用户不存在！'};const _0x439a2d=await this[_0x4e7038(0x11f)][_0x4e7038(0x90)]({'where':{'openId':_0x3342a0}});if(_0x439a2d)return{'status':![],'msg':'该微信已绑定其他账号！'};const _0x5e9ec4=await this[_0x4e7038(0x11f)]['update']({'id':_0x5a195d},{'openId':_0x3342a0});if(_0x5e9ec4[_0x4e7038(0x91)]<=0x0)return{'status':![],'msg':'绑定微信失败、请联系管理员！'};return{'status':!![],'msg':_0x4e7038(0xe3)};}catch(_0x44cb4e){return{'status':![],'msg':_0x4e7038(0x87)};}}async[_0x43ab6d(0x89)](_0x5582eb){const _0x25df47=_0x43ab6d,_0x52684d=await this[_0x25df47(0x11f)]['findOne']({'where':{'id':_0x5582eb}});return _0x52684d===null||_0x52684d===void 0x0?void 0x0:_0x52684d['openId'];}async[_0x43ab6d(0x111)](_0x3375f1){const _0x3157fa=_0x43ab6d,{username:_0x365c2d,password:_0x46ab7f,phone:_0x3649a0,phoneCode:_0xaaeab8}=_0x3375f1,_0x38576b=await this[_0x3157fa(0x11f)][_0x3157fa(0x90)]({'where':[{'username':_0x365c2d},{'phone':_0x3649a0}]});if(_0x38576b&&_0x38576b[_0x3157fa(0xd9)]===_0x365c2d)throw new common_1[(_0x3157fa(0xb7))]('用户名已存在、请更换用户名！',common_1[_0x3157fa(0xde)]['BAD_REQUEST']);if(_0x38576b&&_0x38576b[_0x3157fa(0xf9)]===_0x3649a0)throw new common_1[(_0x3157fa(0xb7))]('当前手机号已注册、请勿重复注册！',common_1['HttpStatus'][_0x3157fa(0xb9)]);}async[_0x43ab6d(0x88)](_0x54bae7){const _0x26f881=_0x43ab6d;return await this['userEntity'][_0x26f881(0x124)](_0x54bae7);}};UserService=__decorate([(0x0,common_1[_0x43ab6d(0xf5)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(user_entity_1[_0x43ab6d(0xe1)])),__param(0x1,(0x0,typeorm_1[_0x43ab6d(0x129)])(whiteList_entity_1[_0x43ab6d(0xf6)])),__param(0x7,(0x0,typeorm_1['InjectRepository'])(config_entity_1[_0x43ab6d(0xea)])),__metadata(_0x43ab6d(0x9d),[typeorm_2[_0x43ab6d(0xfb)],typeorm_2[_0x43ab6d(0xfb)],typeorm_2[_0x43ab6d(0xff)],verification_service_1[_0x43ab6d(0x123)],mailer_1[_0x43ab6d(0xb0)],userBalance_service_1[_0x43ab6d(0x102)],globalConfig_service_1[_0x43ab6d(0xa2)],typeorm_2[_0x43ab6d(0xfb)]])],UserService),exports[_0x43ab6d(0x110)]=UserService;function _0x5418(){const _0x9737c6=['../userBalance/userBalance.service','hashSync','createHash','用户名已存在！','生成邀请码失败，请重新试一次吧！','Injectable','WhiteListEntity','用户不存在！','typeorm','phone',']成功!','Repository','@nestjs-modules/mailer','没有变更，无需更改！','createdAt','Connection','getUserInfo','isBindWx','UserBalanceService','visitor','您的账户已被永久加入黑名单、如有疑问、请联系管理员！','userRecharge','user','inviteCode','sendMail','metadata','createRandomUid','super','verificationService','queryOneUserInfo','6qTQUpU','__esModule','UserService','verifyUserRegisterByPhone','的账号激活','当前密码错误！','status','4JkprOw','balanceInfo','修改用户状态成功！','816680MwuVWz','当前用户不存在！','当前用户信息失效、请重新登录！','connection','defineProperty','role','userBalanceService','userEntity','avatar','verifyUserPassword','isVerifyEmail','VerificationService','save','sign','../chatgpt/whiteList.entity','object','qureyUserInfoByInviteCode','InjectRepository','maskEmail','queryUserBalance','2068641jKDBFk','configMap:\x20','40VIkVdq','mailerService','getUserStatus','../../common/constants/user.constant','修改用户信息失败！','maskIpAddress','123456','createVerification','registerVerifyEmailDesc','length','ACTIVE','$2a$','registerVerifyEmailTitle','forEach','绑定微信失败、请联系管理员！','createUser','getOpenIdByUserId','cloneDeep','crypto','function','client','decorate','queryAll','findOne','affected','email','resetUserPass','hex','split','获取邀请记录失败！','已生成过邀请码、请勿重复生成','md5','2539620VKUEUH','updateInfo','checkUserStatus','openId','design:paramtypes','compareSync','saveRecordRechargeLog','@nestjs/typeorm','lastLoginIp','GlobalConfigService','find','register','----,','RechargeType','verifyUserCredentials','updateUserPassword','createUserAndVerifycation','globalConfigService','savaLoginIp','update','getUserFromOpenId','Registration','error:\x20','MailerService','configEntity','getConfigs','log','当前账户不存在！','PENDING','$2y$','HttpException','findAndCount','BAD_REQUEST','bcryptjs','password','重置密码失败！','assign','UNAUTHORIZED','修改用户状态失败！','@nestjs/common','updateUserStatus','修改用户信息成功！','startsWith','修改密码失败、请重新试试吧。','../../common/constants/balance.constant','$2b$','__metadata','ADMIN_GIFT','用户名或者邮箱已被注册！','map','../globalConfig/config.entity','UserStatusEnum','addBalanceToUser','超级管理员不可被操作！','inviteLink','不可将用户置为未激活状态！','getUserOpenId','Like','无效的邀请码！','BLACKLISTED','5760592RYvFQg','formatCreateOrUpdateDate','getClientIp','queryUserInfoById','username','__param','digest','registerVerifyExpir','lodash','HttpStatus','@default.com','3958041Ektyzx','UserEntity','__decorate','恭喜您绑定成功、后续可直接扫码登录了！','addBalanceToNewUser','UserStatusErrMsg','DESC','configVal','9973943AAOnda','registerIp','ConfigEntity','159321cLsiie','./user.entity','updateStatus','../../common/constants/verification.constant','genInviteCode'];_0x5418=function(){return _0x9737c6;};return _0x5418();}