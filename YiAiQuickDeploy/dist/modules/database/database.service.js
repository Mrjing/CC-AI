'use strict';const _0x5130d5=_0x1f92;(function(_0x734eac,_0x502ea0){const _0x59a790=_0x1f92,_0x461da0=_0x734eac();while(!![]){try{const _0x3d82d1=-parseInt(_0x59a790(0x212))/0x1*(-parseInt(_0x59a790(0x1fb))/0x2)+-parseInt(_0x59a790(0x1ee))/0x3+-parseInt(_0x59a790(0x220))/0x4*(parseInt(_0x59a790(0x22f))/0x5)+parseInt(_0x59a790(0x234))/0x6*(-parseInt(_0x59a790(0x1f5))/0x7)+-parseInt(_0x59a790(0x217))/0x8+parseInt(_0x59a790(0x219))/0x9*(parseInt(_0x59a790(0x1f6))/0xa)+parseInt(_0x59a790(0x249))/0xb;if(_0x3d82d1===_0x502ea0)break;else _0x461da0['push'](_0x461da0['shift']());}catch(_0x1ebeba){_0x461da0['push'](_0x461da0['shift']());}}}(_0x1721,0xf00c4));var __decorate=this&&this['__decorate']||function(_0x10ea87,_0x235458,_0x34eac1,_0x3810c6){const _0x554f62=_0x1f92;var _0x26a5fe=arguments[_0x554f62(0x23d)],_0xbff500=_0x26a5fe<0x3?_0x235458:_0x3810c6===null?_0x3810c6=Object[_0x554f62(0x233)](_0x235458,_0x34eac1):_0x3810c6,_0x38df66;if(typeof Reflect==='object'&&typeof Reflect[_0x554f62(0x20b)]===_0x554f62(0x221))_0xbff500=Reflect[_0x554f62(0x20b)](_0x10ea87,_0x235458,_0x34eac1,_0x3810c6);else{for(var _0x45f959=_0x10ea87[_0x554f62(0x23d)]-0x1;_0x45f959>=0x0;_0x45f959--)if(_0x38df66=_0x10ea87[_0x45f959])_0xbff500=(_0x26a5fe<0x3?_0x38df66(_0xbff500):_0x26a5fe>0x3?_0x38df66(_0x235458,_0x34eac1,_0xbff500):_0x38df66(_0x235458,_0x34eac1))||_0xbff500;}return _0x26a5fe>0x3&&_0xbff500&&Object['defineProperty'](_0x235458,_0x34eac1,_0xbff500),_0xbff500;},__metadata=this&&this[_0x5130d5(0x20a)]||function(_0x4a0005,_0x2ef876){const _0x1dffa7=_0x5130d5;if(typeof Reflect==='object'&&typeof Reflect[_0x1dffa7(0x211)]===_0x1dffa7(0x221))return Reflect['metadata'](_0x4a0005,_0x2ef876);};Object[_0x5130d5(0x1f9)](exports,'__esModule',{'value':!![]}),exports['DatabaseService']=void 0x0;function _0x1721(){const _0x48d447=['30vESjCo','query','firstRegisterSendRank','userDefautlAvatar','SELECT\x20*\x20FROM\x20users\x20WHERE\x20role\x20=\x20\x27super\x27','firstRregisterSendDrawMjCount','805239273','registerFailEmailTeamName','super','length','HttpStatus','vxNumber','https://api.openai.com','HttpException','inviteGiveSendModel3Count','default@cooper.com','checkSiteBaseConfig','INSERT\x20INTO\x20config\x20(configKey,\x20configVal,\x20public,\x20encry)\x20VALUES\x20','Yi\x20Ai团队','bcryptjs','map','27786341kgHGla','qqNumber','registerVerifyExpir',']、初始密码为[','baiduSiteId','3258489XeDGsn','join','registerSendDrawMjCount','count','public','log','INSERT\x20INTO\x20users\x20(username,\x20password,\x20status,\x20email,\x20role)\x20VALUES\x20(\x27','1189335ZGzGAQ','214050dimvoL','DatabaseService','noticeInfo','defineProperty','configVal','12WVuVJl','registerSendModel3Count','firstRegisterSendStatus','buyCramiAddress','Logger','INSERT\x20INTO\x20balance\x20(userId,\x20balance,\x20usesLeft,\x20paintCount)\x20VALUES\x20(\x27',',请妥善保管您的账号，祝您使用愉快',']\x20==============>\x20请注意查阅','registerFailEmailTitle','Connection','Yi\x20Ai','inviteGiveSendDrawMjCount','registerVerifyEmailFrom','replace','inviteGiveSendModel4Count','__metadata','decorate','Injectable','createBaseSiteConfig','invitedGuestSendDrawMjCount','@nestjs/common','\x0a####\x20YiAi\x20欢迎您\x0a\x20-\x20欢迎使用YiAi\x0a\x20-\x20初始管理员账号密码\x20\x20super\x20\x20123456\x20【前台后台登录都可以修改】\x0a\x20-\x20初始预览账号密码\x20\x20admin\x20\x20123456\x20【为后台查看账号\x20仅可查看部分非敏感数据】\x0a','metadata','281879QeBQoS','registerSuccessEmailTitle','初始化创建','registerSuccessEmaileAppend','INTERNAL_SERVER_ERROR','13965888hJgckT','欢迎使用Yi\x20Ai团队的产品服务,请在五分钟内完成你的账号激活,点击以下按钮激活您的账号，','747OnfREK','design:paramtypes','siteName','registerVerifyEmailTitle','Yi\x20Ai账号激活失败','inviteSendStatus','1800','40QAfoCT','function','HelloWordYi819','error:\x20','invitedGuestSendModel3Count','firstRregisterSendModel3Count','createDefaultUser','defaultAdmin@cooper.com','checkSuperAdmin','\x27,\x20\x27','registerSendModel4Count','123456','创建默认网站配置失败！','connection','hashSync','664630TgPRtL','robotAvatar','Yi\x20Ai团队账号验证','onModuleInit','getOwnPropertyDescriptor'];_0x1721=function(){return _0x48d447;};return _0x1721();}const common_1=require(_0x5130d5(0x20f)),typeorm_1=require('typeorm'),bcrypt=require(_0x5130d5(0x247));let DatabaseService=class DatabaseService{constructor(_0x31a276){this['connection']=_0x31a276;}async[_0x5130d5(0x232)](){const _0x164a73=_0x5130d5;await this[_0x164a73(0x228)](),await this[_0x164a73(0x244)]();}async[_0x5130d5(0x228)](){const _0x404f9c=_0x5130d5,_0x3a286d=await this[_0x404f9c(0x22d)][_0x404f9c(0x235)](_0x404f9c(0x238));if(!_0x3a286d||_0x3a286d[_0x404f9c(0x23d)]===0x0){const _0x38ac90=bcrypt[_0x404f9c(0x22e)]('123456',0xa),_0x4c428e=bcrypt[_0x404f9c(0x22e)](_0x404f9c(0x22b),0xa),_0x2118d7=_0x404f9c(0x243),_0xef262a=_0x404f9c(0x227),_0x302060={'username':_0x404f9c(0x23c),'password':_0x38ac90,'status':0x1,'email':_0x2118d7,'sex':0x1,'role':_0x404f9c(0x23c)},_0x3852a8={'username':'admin','password':_0x4c428e,'status':0x1,'email':_0xef262a,'sex':0x1,'role':'admin'};await this[_0x404f9c(0x226)](_0x302060),await this[_0x404f9c(0x226)](_0x3852a8);}}async[_0x5130d5(0x226)](_0x25c902){const _0x19fba9=_0x5130d5;try{const {username:_0x266d65,password:_0x5ae33d,status:_0x10728c,email:_0x25ce4e,role:_0x3205f6}=_0x25c902,_0x4d0791=await this[_0x19fba9(0x22d)][_0x19fba9(0x235)](_0x19fba9(0x1f4)+_0x266d65+_0x19fba9(0x229)+_0x5ae33d+_0x19fba9(0x229)+_0x10728c+'\x27,\x20\x27'+_0x25ce4e+_0x19fba9(0x229)+_0x3205f6+'\x27)'),_0x4326e9=_0x4d0791['insertId'],_0x546ac6=await this[_0x19fba9(0x22d)][_0x19fba9(0x235)](_0x19fba9(0x200)+_0x4326e9+'\x27,\x200,\x201000,\x20100)');common_1[_0x19fba9(0x1ff)][_0x19fba9(0x1f3)](_0x19fba9(0x214)+_0x3205f6+'用户成功、用户名为['+_0x266d65+_0x19fba9(0x1ec)+(_0x266d65===_0x19fba9(0x23c)?'nine-super':_0x19fba9(0x22b))+_0x19fba9(0x202),_0x19fba9(0x1f7));}catch(_0x1c6fdd){console['log'](_0x19fba9(0x223),_0x1c6fdd);throw new common_1[(_0x19fba9(0x241))]('创建默认超级管理员失败！',common_1[_0x19fba9(0x23e)][_0x19fba9(0x216)]);}}async[_0x5130d5(0x244)](){const _0x3e00ce=_0x5130d5,_0x5281a9=[_0x3e00ce(0x21b),'qqNumber',_0x3e00ce(0x23f),_0x3e00ce(0x230),_0x3e00ce(0x237)],_0x482847=await this[_0x3e00ce(0x22d)][_0x3e00ce(0x235)]('\x0a\x20\x20SELECT\x20COUNT(*)\x20AS\x20count\x20FROM\x20config\x20WHERE\x20`configKey`\x20IN\x20('+_0x5281a9['map'](_0x24ff12=>'\x27'+_0x24ff12+'\x27')['join'](',')+')\x0a'),_0x48e627=parseInt(_0x482847[0x0][_0x3e00ce(0x1f1)]);_0x48e627===0x0&&await this[_0x3e00ce(0x20d)]();}async[_0x5130d5(0x20d)](){const _0x1b4547=_0x5130d5;try{const _0x4502e4='',_0x3ac3d8=_0x1b4547(0x210),_0x5bfc2b=[{'configKey':_0x1b4547(0x21b),'configVal':_0x1b4547(0x205),'public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x24a),'configVal':_0x1b4547(0x23a),'public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x23f),'configVal':_0x1b4547(0x222),'public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x230),'configVal':'','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x237),'configVal':'','public':0x0,'encry':0x0},{'configKey':'baiduCode','configVal':_0x4502e4,'public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x1ed),'configVal':'','public':0x0,'encry':0x0},{'configKey':'baiduToken','configVal':'','public':0x0,'encry':0x0},{'configKey':_0x1b4547(0x1fe),'configVal':'','public':0x1,'encry':0x0},{'configKey':'openaiBaseUrl','configVal':_0x1b4547(0x240),'public':0x0,'encry':0x0},{'configKey':_0x1b4547(0x1f8),'configVal':_0x3ac3d8,'public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x21c),'configVal':_0x1b4547(0x231),'public':0x0,'encry':0x0},{'configKey':'registerVerifyEmailDesc','configVal':_0x1b4547(0x218),'public':0x0,'encry':0x0},{'configKey':_0x1b4547(0x207),'configVal':_0x1b4547(0x246),'public':0x0,'encry':0x0},{'configKey':_0x1b4547(0x24b),'configVal':_0x1b4547(0x21f),'public':0x0,'encry':0x0},{'configKey':_0x1b4547(0x213),'configVal':'Yi\x20Ai账号激活成功','public':0x0,'encry':0x0},{'configKey':'registerSuccessEmailTeamName','configVal':_0x1b4547(0x205),'public':0x0,'encry':0x0},{'configKey':_0x1b4547(0x215),'configVal':_0x1b4547(0x201),'public':0x0,'encry':0x0},{'configKey':_0x1b4547(0x203),'configVal':_0x1b4547(0x21d),'public':0x0,'encry':0x0},{'configKey':_0x1b4547(0x23b),'configVal':_0x1b4547(0x246),'public':0x0,'encry':0x0},{'configKey':'registerSendStatus','configVal':'1','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x1fc),'configVal':'30','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x22a),'configVal':'3','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x1f0),'configVal':'3','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x1fd),'configVal':'1','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x236),'configVal':'500','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x225),'configVal':'10','public':0x1,'encry':0x0},{'configKey':'firstRregisterSendModel4Count','configVal':'10','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x239),'configVal':'10','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x21e),'configVal':'1','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x242),'configVal':'0','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x209),'configVal':'0','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x206),'configVal':'0','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x224),'configVal':'10','public':0x1,'encry':0x0},{'configKey':'invitedGuestSendModel4Count','configVal':'10','public':0x1,'encry':0x0},{'configKey':_0x1b4547(0x20e),'configVal':'10','public':0x1,'encry':0x0},{'configKey':'isVerifyEmail','configVal':'1','public':0x1,'encry':0x0}],_0x13aaf5=await this[_0x1b4547(0x22d)][_0x1b4547(0x235)](_0x1b4547(0x245)+_0x5bfc2b[_0x1b4547(0x248)](_0x346959=>'(\x27'+_0x346959['configKey']+_0x1b4547(0x229)+_0x346959[_0x1b4547(0x1fa)][_0x1b4547(0x208)](/'/g,'\x5c\x27')+_0x1b4547(0x229)+_0x346959[_0x1b4547(0x1f2)]+'\x27,\x20\x27'+_0x346959['encry']+'\x27)')[_0x1b4547(0x1ef)](',\x20'));common_1[_0x1b4547(0x1ff)][_0x1b4547(0x1f3)]('初始化网站配置信息成功、如您需要修改网站配置信息，请前往管理系统系统配置设置\x20==============>\x20请注意查阅',_0x1b4547(0x1f7));}catch(_0x4ebdcf){console[_0x1b4547(0x1f3)](_0x1b4547(0x223),_0x4ebdcf);throw new common_1[(_0x1b4547(0x241))](_0x1b4547(0x22c),common_1[_0x1b4547(0x23e)][_0x1b4547(0x216)]);}}};function _0x1f92(_0x19f53a,_0x41d058){const _0x17213d=_0x1721();return _0x1f92=function(_0x1f921d,_0x17e1d8){_0x1f921d=_0x1f921d-0x1ec;let _0x4e6c0b=_0x17213d[_0x1f921d];return _0x4e6c0b;},_0x1f92(_0x19f53a,_0x41d058);}DatabaseService=__decorate([(0x0,common_1[_0x5130d5(0x20c)])(),__metadata(_0x5130d5(0x21a),[typeorm_1[_0x5130d5(0x204)]])],DatabaseService),exports['DatabaseService']=DatabaseService;