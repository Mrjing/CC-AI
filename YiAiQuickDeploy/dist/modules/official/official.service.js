'use strict';const _0x45c718=_0x1fd5;(function(_0x1ed4d3,_0x2cdf38){const _0x1ceba7=_0x1fd5,_0x5f3b1c=_0x1ed4d3();while(!![]){try{const _0x212dd0=-parseInt(_0x1ceba7(0x12d))/0x1+-parseInt(_0x1ceba7(0x157))/0x2*(-parseInt(_0x1ceba7(0x15a))/0x3)+parseInt(_0x1ceba7(0x128))/0x4*(parseInt(_0x1ceba7(0x143))/0x5)+-parseInt(_0x1ceba7(0x127))/0x6+-parseInt(_0x1ceba7(0x168))/0x7*(parseInt(_0x1ceba7(0x175))/0x8)+-parseInt(_0x1ceba7(0x13f))/0x9*(-parseInt(_0x1ceba7(0x17d))/0xa)+parseInt(_0x1ceba7(0x188))/0xb*(parseInt(_0x1ceba7(0x17b))/0xc);if(_0x212dd0===_0x2cdf38)break;else _0x5f3b1c['push'](_0x5f3b1c['shift']());}catch(_0x2731bc){_0x5f3b1c['push'](_0x5f3b1c['shift']());}}}(_0x2c43,0x70525));function _0x1fd5(_0x5b3ffc,_0x9feb1){const _0x2c43f4=_0x2c43();return _0x1fd5=function(_0x1fd5f0,_0xefc52e){_0x1fd5f0=_0x1fd5f0-0x120;let _0xe5393d=_0x2c43f4[_0x1fd5f0];return _0xe5393d;},_0x1fd5(_0x5b3ffc,_0x9feb1);}var __decorate=this&&this['__decorate']||function(_0x10eaa2,_0x1a2a33,_0x345716,_0x5a473c){const _0x1cca1e=_0x1fd5;var _0x2e6271=arguments['length'],_0x15f1e3=_0x2e6271<0x3?_0x1a2a33:_0x5a473c===null?_0x5a473c=Object['getOwnPropertyDescriptor'](_0x1a2a33,_0x345716):_0x5a473c,_0x7be40a;if(typeof Reflect===_0x1cca1e(0x184)&&typeof Reflect[_0x1cca1e(0x123)]==='function')_0x15f1e3=Reflect[_0x1cca1e(0x123)](_0x10eaa2,_0x1a2a33,_0x345716,_0x5a473c);else{for(var _0x14886a=_0x10eaa2[_0x1cca1e(0x17e)]-0x1;_0x14886a>=0x0;_0x14886a--)if(_0x7be40a=_0x10eaa2[_0x14886a])_0x15f1e3=(_0x2e6271<0x3?_0x7be40a(_0x15f1e3):_0x2e6271>0x3?_0x7be40a(_0x1a2a33,_0x345716,_0x15f1e3):_0x7be40a(_0x1a2a33,_0x345716))||_0x15f1e3;}return _0x2e6271>0x3&&_0x15f1e3&&Object[_0x1cca1e(0x13b)](_0x1a2a33,_0x345716,_0x15f1e3),_0x15f1e3;},__metadata=this&&this['__metadata']||function(_0xc8b6f9,_0x22f830){const _0x145614=_0x1fd5;if(typeof Reflect===_0x145614(0x184)&&typeof Reflect[_0x145614(0x12f)]===_0x145614(0x171))return Reflect['metadata'](_0xc8b6f9,_0x22f830);};Object[_0x45c718(0x13b)](exports,_0x45c718(0x140),{'value':!![]}),exports[_0x45c718(0x13c)]=void 0x0;const chatgpt_service_1=require('../chatgpt/chatgpt.service'),globalConfig_service_1=require('../globalConfig/globalConfig.service'),auth_service_1=require(_0x45c718(0x18c)),user_service_1=require(_0x45c718(0x151)),autoreply_service_1=require(_0x45c718(0x181)),common_1=require('@nestjs/common'),crypto=require(_0x45c718(0x17a)),axios_1=require(_0x45c718(0x150)),utils_1=require('../../common/utils');let OfficialService=class OfficialService{constructor(_0x584480,_0x3a82a2,_0x1e1b6d,_0xefa7f3,_0x40d608){const _0x52fd1a=_0x45c718;this['autoreplyService']=_0x584480,this[_0x52fd1a(0x17c)]=_0x3a82a2,this[_0x52fd1a(0x126)]=_0x1e1b6d,this[_0x52fd1a(0x135)]=_0xefa7f3,this[_0x52fd1a(0x18b)]=_0x40d608,this['sceneStrMap']={},this[_0x52fd1a(0x13d)]={};}async[_0x45c718(0x174)](){const _0x5f5143=_0x45c718;await this['globalConfigService'][_0x5f5143(0x130)](!![]);}async[_0x45c718(0x122)](_0x506e8e){const _0x55f3a7=_0x45c718,{invitedBy:_0x2f142c}=_0x506e8e;let _0x52ef74=(0x0,utils_1[_0x55f3a7(0x139)])(0x20);return _0x2f142c&&(_0x52ef74+=':'+_0x2f142c),this[_0x55f3a7(0x15f)][_0x52ef74]=!![],_0x52ef74;}async[_0x45c718(0x13a)](_0xf48762){const _0x1e2268=_0x45c718,{id:_0x12566b}=_0xf48762[_0x1e2268(0x154)],_0xbffad2=(0x0,utils_1['createRandomNonceStr'])(0x20)+'/'+_0x12566b;return this[_0x1e2268(0x15f)][_0xbffad2]=!![],_0xbffad2;}async[_0x45c718(0x142)](_0x324f43){const _0x2703ce=_0x45c718;return this[_0x2703ce(0x12e)](_0x324f43);}async[_0x45c718(0x14e)](_0x33139b){const _0x58656f=_0x45c718,_0x3396ad=await this[_0x58656f(0x135)][_0x58656f(0x147)]([_0x58656f(0x12b)]),_0x5c5131='https://open.weixin.qq.com/connect/oauth2/authorize?appid='+_0x3396ad+'&redirect_uri='+encodeURIComponent(_0x33139b)+_0x58656f(0x18f);return console['log'](_0x58656f(0x13e),_0x5c5131),_0x5c5131;}async[_0x45c718(0x153)](_0x24595d){const _0x37e101=_0x45c718,_0x394ae7=(0x0,utils_1['createRandomNonceStr'])(0x20),_0x3fecec=(Date[_0x37e101(0x138)]()/0x3e8)[_0x37e101(0x146)](0x0),_0x44410d=await this[_0x37e101(0x135)][_0x37e101(0x147)]([_0x37e101(0x17f)]);console['log'](_0x37e101(0x177),_0x44410d);const _0x501bde=await this[_0x37e101(0x135)][_0x37e101(0x147)]([_0x37e101(0x12b)]);console[_0x37e101(0x15e)]('appId:\x20',_0x501bde);const _0x3300e9=_0x37e101(0x158)+_0x44410d+_0x37e101(0x14c)+_0x394ae7+_0x37e101(0x16d)+_0x3fecec+_0x37e101(0x129)+_0x24595d;console[_0x37e101(0x15e)](_0x37e101(0x163),_0x3300e9);const _0x2b0ae4=this['sha1'](_0x3300e9);return{'appId':_0x501bde,'nonceStr':_0x394ae7,'timestamp':_0x3fecec,'signature':_0x2b0ae4};}async[_0x45c718(0x12e)](_0x273c1f){const _0x4ce3e8=_0x45c718,_0x4e0106=await this['globalConfigService'][_0x4ce3e8(0x147)]([_0x4ce3e8(0x134)]),_0x44dcf2={'action_name':_0x4ce3e8(0x167),'action_info':{'scene':{'scene_str':_0x273c1f}}};console['log'](_0x4ce3e8(0x136),_0x4e0106);const _0x3750b5=await axios_1[_0x4ce3e8(0x160)][_0x4ce3e8(0x124)](_0x4ce3e8(0x155)+_0x4e0106,_0x44dcf2),{data:{errmsg:_0x3a00a4,ticket:_0x354788}}=_0x3750b5;console[_0x4ce3e8(0x15e)](_0x4ce3e8(0x14a),_0x3750b5);if(_0x3a00a4)throw new common_1[(_0x4ce3e8(0x133))](_0x3a00a4,common_1[_0x4ce3e8(0x132)][_0x4ce3e8(0x12c)]);return _0x354788;}async[_0x45c718(0x166)](_0x321946,_0x56391e){const _0xe0d074=_0x45c718,_0x155ed7=await this[_0xe0d074(0x135)][_0xe0d074(0x147)]([_0xe0d074(0x12b)]),_0x1b3206=await this[_0xe0d074(0x135)][_0xe0d074(0x147)](['wechatOfficialAppSecret']),_0x2fc5a1=await axios_1[_0xe0d074(0x160)][_0xe0d074(0x14b)](_0xe0d074(0x187)+_0x155ed7+_0xe0d074(0x165)+_0x1b3206+_0xe0d074(0x172)+_0x56391e+_0xe0d074(0x120)),{data:{errmsg:_0x1be94b,openid:_0x3b791e}}=_0x2fc5a1;if(_0x1be94b)throw new common_1[(_0xe0d074(0x133))](_0x1be94b,common_1[_0xe0d074(0x132)]['BAD_REQUEST']);let _0x47718a;return _0x47718a=await this[_0xe0d074(0x17c)]['getUserOpenId'](_0x3b791e),!_0x47718a&&(_0x47718a=await this['userService'][_0xe0d074(0x121)](_0x3b791e)),this[_0xe0d074(0x126)][_0xe0d074(0x141)](_0x47718a,_0x321946);}async[_0x45c718(0x137)](_0x4dcbc3,_0x402481){const _0x598af7=_0x45c718;if(!this[_0x598af7(0x15f)][_0x402481])throw new common_1[(_0x598af7(0x133))](_0x598af7(0x176),common_1[_0x598af7(0x132)]['BAD_REQUEST']);const _0x2f34d3=await this[_0x598af7(0x17c)][_0x598af7(0x121)](_0x4dcbc3,_0x402481);this[_0x598af7(0x13d)][_0x402481]=_0x2f34d3['id'];}async[_0x45c718(0x182)](_0xa5002a,_0x2fee5d){const _0xa945=_0x45c718;if(!this[_0xa945(0x15f)][_0x2fee5d])return;const _0x42fad3=this[_0xa945(0x13d)][_0x2fee5d];if(!_0x42fad3)return'';const _0x21cf17=await this[_0xa945(0x17c)][_0xa945(0x159)](_0x42fad3);return delete this['scanedSceneStrMap'][_0x2fee5d],this[_0xa945(0x126)][_0xa945(0x141)](_0x21cf17,_0xa5002a);}async[_0x45c718(0x170)](_0x38fc56,_0x1150b1){const _0x6e545b=_0x45c718;if(!this[_0x6e545b(0x15f)][_0x1150b1])throw new common_1[(_0x6e545b(0x133))](_0x6e545b(0x176),common_1[_0x6e545b(0x132)][_0x6e545b(0x12c)]);const _0x5c64f6=_0x1150b1[_0x6e545b(0x16f)]('/')[0x1],_0x30757a=await this[_0x6e545b(0x17c)][_0x6e545b(0x18a)](_0x38fc56,_0x5c64f6);this[_0x6e545b(0x13d)][_0x1150b1]=_0x30757a;}async[_0x45c718(0x161)](_0x5e6ebc,_0x438711){const _0x568a1b=_0x45c718;if(!this[_0x568a1b(0x15f)][_0x438711])throw new common_1[(_0x568a1b(0x133))](_0x568a1b(0x176),common_1[_0x568a1b(0x132)][_0x568a1b(0x12c)]);const {id:_0x283152}=_0x5e6ebc[_0x568a1b(0x154)],_0x49d269=this[_0x568a1b(0x13d)][_0x438711];if(!_0x49d269)return'';return delete this[_0x568a1b(0x13d)][_0x438711],_0x49d269;}async[_0x45c718(0x148)](_0x16e4d2,_0x2b070b,_0x28edc4){const _0x20279d=_0x45c718,_0x4972b7=await this[_0x20279d(0x135)]['getConfigs']([_0x20279d(0x125)])||_0x20279d(0x15c);return await this[_0x20279d(0x178)]([_0x4972b7,_0x2b070b,_0x28edc4]['sort']()[_0x20279d(0x144)](''))==_0x16e4d2;}[_0x45c718(0x178)](_0x1d2acf){const _0x50f127=_0x45c718;return crypto[_0x50f127(0x180)]('sha1')[_0x50f127(0x16e)](_0x1d2acf)[_0x50f127(0x16c)](_0x50f127(0x173));}async[_0x45c718(0x18e)](_0x2e5244,_0x35c808){const _0xb7f420=_0x45c718,_0x33ab39=await this[_0xb7f420(0x135)]['getConfigs']([_0x35c808]);return this['genXmlMsg'](_0x2e5244,_0x33ab39);}async[_0x45c718(0x14f)](_0x2af216,_0x2f06c2){const _0xe1d0b4=_0x45c718;return _0xe1d0b4(0x164)+_0x2af216[_0xe1d0b4(0x185)][0x0]+_0xe1d0b4(0x145)+_0x2af216[_0xe1d0b4(0x16b)][0x0]+_0xe1d0b4(0x189)+new Date()['getTime']()+_0xe1d0b4(0x186)+_0x2f06c2+_0xe1d0b4(0x14d);}async[_0x45c718(0x18d)](_0x589735){const _0x3e0cb8=_0x45c718,_0x339b07=new Promise((_0x24ca8c,_0x3ec034)=>{setTimeout(()=>{const _0x11d37f=_0x1fd5;_0x3ec034(new Error(_0x11d37f(0x16a)));},0x12c0);});let _0x2e2286='';try{console[_0x3e0cb8(0x15e)](_0x3e0cb8(0x15b),_0x589735);const _0x46d143=await Promise[_0x3e0cb8(0x190)]([this[_0x3e0cb8(0x18b)][_0x3e0cb8(0x179)](_0x589735),_0x339b07]);_0x2e2286=_0x46d143||await this[_0x3e0cb8(0x152)]['checkAutoReply'](_0x589735);}catch(_0x3fe3df){console['log'](_0x3e0cb8(0x12a)),_0x2e2286=await this[_0x3e0cb8(0x135)][_0x3e0cb8(0x147)]([_0x3e0cb8(0x131)])||_0x3e0cb8(0x162);}return _0x2e2286;}};function _0x2c43(){const _0x17c555=['../user/user.service','autoreplyService','getJsapiTicket','user','https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=','GlobalConfigService','1149706aZKQVu','jsapi_ticket=','getUserById','3vQwxZL','来自公众号的询问问题\x20=======>\x20','jiangly','UserService','log','sceneStrMap','default','bindWxBySceneStr','由于公众号的回复限制、过长的问题我们可能无法回复、您可以前往我们的官方站点享受更加完善的服务、如果您有更多问题、欢迎像我提问！','str:\x20','\x0a\x20\x20\x20\x20<xml>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<ToUserName><![CDATA[','&secret=','loginByCode','QR_STR_SCENE','475475YixlNi','design:paramtypes','请求超时','tousername','digest','&timestamp=','update','split','scanBindWx','function','&code=','hex','onModuleInit','24zLVQxA','非法参数','jsapiTicket:\x20','sha1','chatSyncFree','crypto','12Elxzlo','userService','4580KCSRiX','length','wechatJsapiTicket','createHash','../autoreply/autoreply.service','loginBySceneStr','Injectable','object','fromusername','</CreateTime>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<MsgType><![CDATA[text]]></MsgType>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<Content><![CDATA[','https://api.weixin.qq.com/sns/oauth2/access_token?appid=','2270114QVXFbv',']]></FromUserName>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<CreateTime>','bindWx','chatgptService','../auth/auth.service','aotoPlay','genXmlMsgByConfig','&response_type=code&scope=snsapi_base&state=weChatLogin#wechat_redirect','race','&grant_type=authorization_code','getUserFromOpenId','getQRSceneStr','decorate','post','wechatOfficialToken','authService','861690GiHwsv','9368rySlDh','&url=','来自公众号的回复问题\x20=======>\x20超时导致问题无法回答完整','wechatOfficialAppId','BAD_REQUEST','792500mQLFFq','fetchQRCodeTicket','metadata','getWechatAccessToken','officialAutoReplyText','HttpStatus','HttpException','wechatAccessToken','globalConfigService','accessToken***','scan','now','createRandomNonceStr','getQRSceneStrByBind','defineProperty','OfficialService','scanedSceneStrMap','回跳跳转地址:\x20','27abddBC','__esModule','loginByOpenId','getQRCodeTicket','1745foTERT','join',']]></ToUserName>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<FromUserName><![CDATA[','toFixed','getConfigs','verify','AuthService','qrcodecreate','get','&noncestr=',']]></Content>\x0a\x20\x20\x20\x20</xml>','getRedirectUrl','genXmlMsg','axios'];_0x2c43=function(){return _0x17c555;};return _0x2c43();}OfficialService=__decorate([(0x0,common_1[_0x45c718(0x183)])(),__metadata(_0x45c718(0x169),[autoreply_service_1['AutoreplyService'],user_service_1[_0x45c718(0x15d)],auth_service_1[_0x45c718(0x149)],globalConfig_service_1[_0x45c718(0x156)],chatgpt_service_1['ChatgptService']])],OfficialService),exports[_0x45c718(0x13c)]=OfficialService;