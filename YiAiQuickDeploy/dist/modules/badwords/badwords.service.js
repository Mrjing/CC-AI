'use strict';const _0x24750f=_0x58f7;(function(_0xea44b4,_0x27dcbe){const _0x543d35=_0x58f7,_0x2a23bf=_0xea44b4();while(!![]){try{const _0x46f655=-parseInt(_0x543d35(0x13e))/0x1+parseInt(_0x543d35(0x173))/0x2+parseInt(_0x543d35(0x199))/0x3*(parseInt(_0x543d35(0x180))/0x4)+-parseInt(_0x543d35(0x152))/0x5*(-parseInt(_0x543d35(0x194))/0x6)+-parseInt(_0x543d35(0x153))/0x7*(parseInt(_0x543d35(0x131))/0x8)+parseInt(_0x543d35(0x130))/0x9+-parseInt(_0x543d35(0x172))/0xa;if(_0x46f655===_0x27dcbe)break;else _0x2a23bf['push'](_0x2a23bf['shift']());}catch(_0x448973){_0x2a23bf['push'](_0x2a23bf['shift']());}}}(_0x12fc,0x36680));var __decorate=this&&this[_0x24750f(0x170)]||function(_0x3db16b,_0x2fd00f,_0x3c2117,_0x442eaf){const _0x588d0a=_0x24750f;var _0x65d144=arguments['length'],_0x427939=_0x65d144<0x3?_0x2fd00f:_0x442eaf===null?_0x442eaf=Object[_0x588d0a(0x15a)](_0x2fd00f,_0x3c2117):_0x442eaf,_0x3b06ec;if(typeof Reflect===_0x588d0a(0x17c)&&typeof Reflect[_0x588d0a(0x159)]===_0x588d0a(0x137))_0x427939=Reflect['decorate'](_0x3db16b,_0x2fd00f,_0x3c2117,_0x442eaf);else{for(var _0x3db2dc=_0x3db16b[_0x588d0a(0x148)]-0x1;_0x3db2dc>=0x0;_0x3db2dc--)if(_0x3b06ec=_0x3db16b[_0x3db2dc])_0x427939=(_0x65d144<0x3?_0x3b06ec(_0x427939):_0x65d144>0x3?_0x3b06ec(_0x2fd00f,_0x3c2117,_0x427939):_0x3b06ec(_0x2fd00f,_0x3c2117))||_0x427939;}return _0x65d144>0x3&&_0x427939&&Object['defineProperty'](_0x2fd00f,_0x3c2117,_0x427939),_0x427939;},__metadata=this&&this[_0x24750f(0x190)]||function(_0x2ad724,_0x4cca8d){const _0x54987c=_0x24750f;if(typeof Reflect==='object'&&typeof Reflect[_0x54987c(0x18c)]===_0x54987c(0x137))return Reflect[_0x54987c(0x18c)](_0x2ad724,_0x4cca8d);},__param=this&&this[_0x24750f(0x183)]||function(_0x4f271e,_0x4532d7){return function(_0xc356ee,_0x3a19e2){_0x4532d7(_0xc356ee,_0x3a19e2,_0x4f271e);};};Object[_0x24750f(0x189)](exports,_0x24750f(0x165),{'value':!![]}),exports['BadwordsService']=void 0x0;const globalConfig_service_1=require(_0x24750f(0x12e)),common_1=require(_0x24750f(0x164)),badwords_entity_1=require(_0x24750f(0x146)),typeorm_1=require(_0x24750f(0x192)),typeorm_2=require(_0x24750f(0x168)),axios_1=require(_0x24750f(0x16a)),violationLog_entity_1=require('./violationLog.entity'),user_entity_1=require(_0x24750f(0x185)),utils_1=require(_0x24750f(0x147));function _0x58f7(_0x4ee42d,_0x3eb7e1){const _0x12fcec=_0x12fc();return _0x58f7=function(_0x58f7ec,_0x51f279){_0x58f7ec=_0x58f7ec-0x128;let _0x26e156=_0x12fcec[_0x58f7ec];return _0x26e156;},_0x58f7(_0x4ee42d,_0x3eb7e1);}let BadwordsService=class BadwordsService{constructor(_0x2abf30,_0x586e0f,_0x560902,_0x3b1ec0){const _0x12d410=_0x24750f;this[_0x12d410(0x154)]=_0x2abf30,this[_0x12d410(0x14a)]=_0x586e0f,this[_0x12d410(0x15d)]=_0x560902,this[_0x12d410(0x13f)]=_0x3b1ec0,this[_0x12d410(0x19a)]=[];}async[_0x24750f(0x187)](){const _0x48240f=_0x24750f;this[_0x48240f(0x14f)]();}async[_0x24750f(0x12f)](_0x1860f7,_0x3cf2b3){const _0x25fa03=_0x24750f,_0x5cac05=[];for(let _0x2f3cd2=0x0;_0x2f3cd2<this[_0x25fa03(0x19a)]['length'];_0x2f3cd2++){const _0x542071=this[_0x25fa03(0x19a)][_0x2f3cd2];_0x1860f7[_0x25fa03(0x134)](_0x542071)&&_0x5cac05[_0x25fa03(0x12b)](_0x542071);}if(_0x5cac05[_0x25fa03(0x148)]){await this['recordUserBadWords'](_0x3cf2b3,_0x1860f7,_0x5cac05,[_0x25fa03(0x163)],'自定义检测');const _0x1e3685=_0x25fa03(0x150);throw new common_1[(_0x25fa03(0x15c))](_0x1e3685,common_1[_0x25fa03(0x166)][_0x25fa03(0x16f)]);}}async[_0x24750f(0x13a)](_0x110091,_0x180fc4){const _0x2a6c15=_0x24750f,_0x2089b0=await this[_0x2a6c15(0x13f)]['getSensitiveConfig']();_0x2089b0&&await this['checkBadWordsByConfig'](_0x110091,_0x2089b0,_0x180fc4),await this[_0x2a6c15(0x12f)](_0x110091,_0x180fc4);}async[_0x24750f(0x169)](_0x158133,_0x208460,_0x197d8d){const _0x174fb2=_0x24750f,{useType:_0x12d51f}=_0x208460;_0x12d51f===_0x174fb2(0x177)&&await this['baiduCheckBadWords'](_0x158133,_0x208460[_0x174fb2(0x176)],_0x197d8d),_0x12d51f===_0x174fb2(0x156)&&await this[_0x174fb2(0x132)](_0x158133,_0x208460,_0x197d8d);}[_0x24750f(0x171)](_0x5d4ef6){const _0x3e867c=_0x24750f,_0x5dad8d=/存在(.*?)不合规/,_0x9a7619=_0x5d4ef6[_0x3e867c(0x15f)](_0x5dad8d);return _0x9a7619?_0x9a7619[0x1]:'';}async['baiduCheckBadWords'](_0x285ada,_0x274a10,_0x47124f){const _0x542459=_0x24750f;if(!_0x274a10)return;const _0x171f67=_0x542459(0x17b)+_0x274a10+'}',_0x57d028={'Content-Type':_0x542459(0x18d),'Accept':_0x542459(0x198)},_0x2e3036=await axios_1[_0x542459(0x14d)][_0x542459(0x161)](_0x171f67,{'text':_0x285ada},{'headers':_0x57d028}),{conclusion:_0x57d8a5,error_code:_0x5a764f,error_msg:_0x219832,conclusionType:_0x402f00,data:_0x11d665}=_0x2e3036[_0x542459(0x14e)];_0x5a764f&&console[_0x542459(0x144)](_0x542459(0x140),_0x219832);if(_0x402f00!==0x1){const _0x4e22f9=[...new Set(_0x11d665[_0x542459(0x151)](_0x1bab27=>this['extractContent'](_0x1bab27[_0x542459(0x15b)])))];await this[_0x542459(0x139)](_0x47124f,_0x285ada,[_0x542459(0x18e)],_0x4e22f9,_0x542459(0x16b));const _0x46221e=_0x542459(0x188)+_0x4e22f9[_0x542459(0x18b)](',')+_0x542459(0x142);throw new common_1[(_0x542459(0x15c))](_0x46221e,common_1['HttpStatus'][_0x542459(0x16f)]);}}async[_0x24750f(0x132)](_0x10ea6e,_0x1d0a79,_0x4ce1c5){const _0x527474=_0x24750f;var _0x281f27;const {nineaiBuiltInSensitiveApiBase:_0x4401bb,nineaiBuiltInSensitiveAuthKey:_0x18a632}=_0x1d0a79;if(!_0x4401bb||!_0x18a632)return;const _0x542cc0=await axios_1[_0x527474(0x14d)][_0x527474(0x161)](_0x4401bb,{'content':_0x10ea6e},{'headers':{'Content-Type':'application/json','Authorization':_0x18a632}});if(!_0x542cc0['data'])return;if(_0x542cc0[_0x527474(0x14e)]['code']!=='0'){const {msg:msg='检测失败'}=_0x542cc0['data'];throw new common_1[(_0x527474(0x15c))](_0x527474(0x17e)+msg,common_1['HttpStatus'][_0x527474(0x16f)]);}if(_0x542cc0[_0x527474(0x14e)][_0x527474(0x158)]&&((_0x281f27=_0x542cc0['data'][_0x527474(0x158)])===null||_0x281f27===void 0x0?void 0x0:_0x281f27[_0x527474(0x148)])){const _0x29b524=[...new Set(_0x542cc0[_0x527474(0x14e)][_0x527474(0x158)]['map'](_0x3df7c7=>_0x3df7c7[_0x527474(0x17f)]))],_0x2d1763=[...new Set(_0x542cc0[_0x527474(0x14e)][_0x527474(0x158)]['map'](_0x524ba0=>_0x524ba0[_0x527474(0x18f)]))];await this[_0x527474(0x139)](_0x4ce1c5,_0x10ea6e,_0x29b524,_0x2d1763,'NineAi检测');const _0x14b41f=this['formarTips'](_0x542cc0['data'][_0x527474(0x158)]);throw new common_1[(_0x527474(0x15c))](_0x14b41f,common_1['HttpStatus']['BAD_REQUEST']);}}['formarTips'](_0x4cf133){const _0xfbb21=_0x24750f,_0x452005=_0x4cf133[_0xfbb21(0x151)](_0x5e155f=>_0x5e155f['category']),_0x185386=[...new Set(_0x452005)];return _0xfbb21(0x129)+_0x185386['join'](',')+_0xfbb21(0x195);}async[_0x24750f(0x14f)](){const _0x11c4f4=_0x24750f,_0x279b4e=await this[_0x11c4f4(0x154)]['find']({'where':{'status':0x1},'select':[_0x11c4f4(0x141)]});this[_0x11c4f4(0x19a)]=_0x279b4e[_0x11c4f4(0x151)](_0x15cfe7=>_0x15cfe7[_0x11c4f4(0x141)]);}async[_0x24750f(0x17a)](_0x136309){const _0x6b6da5=_0x24750f,{page:page=0x1,size:size=0x1f4,word:_0x3eb7a6,status:_0x286604}=_0x136309,_0x313dfa={};[0x0,0x1,'0','1'][_0x6b6da5(0x134)](_0x286604)&&(_0x313dfa['status']=_0x286604),_0x3eb7a6&&(_0x313dfa['word']=(0x0,typeorm_1[_0x6b6da5(0x16d)])('%'+_0x3eb7a6+'%'));const [_0x4a3a75,_0xda20ea]=await this[_0x6b6da5(0x154)]['findAndCount']({'where':_0x313dfa,'skip':(page-0x1)*size,'take':size,'order':{'id':'ASC'}});return{'rows':_0x4a3a75,'count':_0xda20ea};}async[_0x24750f(0x17d)](_0x586285){const _0xf4839e=_0x24750f,_0x3b3014=await this[_0xf4839e(0x154)][_0xf4839e(0x186)]({'where':{'id':_0x586285['id']}});if(!_0x3b3014)throw new common_1[(_0xf4839e(0x15c))](_0xf4839e(0x16c),common_1[_0xf4839e(0x166)][_0xf4839e(0x16f)]);const _0x341196=await this[_0xf4839e(0x154)][_0xf4839e(0x178)]({'id':_0x586285['id']});if(_0x341196[_0xf4839e(0x18a)]>0x0)return await this[_0xf4839e(0x14f)](),_0xf4839e(0x175);else throw new common_1[(_0xf4839e(0x15c))](_0xf4839e(0x145),common_1['HttpStatus'][_0xf4839e(0x16f)]);}async[_0x24750f(0x162)](_0x10ef59){const _0x3a9fa8=_0x24750f,{id:_0x37f07c,word:_0x3d5c23,status:_0x3f5200}=_0x10ef59,_0x1384f7=await this[_0x3a9fa8(0x154)][_0x3a9fa8(0x186)]({'where':{'word':_0x3d5c23}});if(_0x1384f7)throw new common_1[(_0x3a9fa8(0x15c))](_0x3a9fa8(0x149),common_1[_0x3a9fa8(0x166)][_0x3a9fa8(0x16f)]);const _0xe40ef4=await this[_0x3a9fa8(0x154)][_0x3a9fa8(0x196)]({'id':_0x37f07c},{'word':_0x3d5c23,'status':_0x3f5200});if(_0xe40ef4[_0x3a9fa8(0x18a)]>0x0)return await this[_0x3a9fa8(0x14f)](),'更新敏感词成功';else throw new common_1[(_0x3a9fa8(0x15c))](_0x3a9fa8(0x14b),common_1[_0x3a9fa8(0x166)][_0x3a9fa8(0x16f)]);}async[_0x24750f(0x157)](_0xab920){const _0x48bc79=_0x24750f,{word:_0x583cd8}=_0xab920,_0x2617c6=await this[_0x48bc79(0x154)]['findOne']({'where':{'word':_0x583cd8}});if(_0x2617c6)throw new common_1[(_0x48bc79(0x15c))](_0x48bc79(0x13d),common_1['HttpStatus'][_0x48bc79(0x16f)]);return await this[_0x48bc79(0x154)][_0x48bc79(0x136)]({'word':_0x583cd8}),await this[_0x48bc79(0x14f)](),_0x48bc79(0x155);}async['recordUserBadWords'](_0x5cc0c2,_0x18a314,_0x42200a,_0x4898c3,_0x217a7b){const _0x596c3f=_0x24750f,_0x2de5a2={'userId':_0x5cc0c2,'content':_0x18a314,'words':JSON[_0x596c3f(0x138)](_0x42200a),'typeCn':JSON[_0x596c3f(0x138)](_0x4898c3),'typeOriginCn':_0x217a7b};try{await this[_0x596c3f(0x15d)][_0x596c3f(0x174)]()[_0x596c3f(0x196)](user_entity_1[_0x596c3f(0x193)])['set']({'violationCount':()=>_0x596c3f(0x167)})[_0x596c3f(0x179)](_0x596c3f(0x143),{'userId':_0x5cc0c2})['execute'](),await this['violationLogEntity']['save'](_0x2de5a2);}catch(_0x14f986){console[_0x596c3f(0x144)](_0x596c3f(0x15e),_0x14f986);}}async['violation'](_0x2c6db2,_0x579a58){const _0x5bc7b0=_0x24750f,{role:_0x1290a7}=_0x2c6db2[_0x5bc7b0(0x191)],{page:page=0x1,size:size=0xa,userId:_0x55574c,typeOriginCn:_0x58b4f0}=_0x579a58,_0x18405b={};_0x55574c&&(_0x18405b[_0x5bc7b0(0x181)]=_0x55574c),_0x58b4f0&&(_0x18405b[_0x5bc7b0(0x14c)]=_0x58b4f0);const [_0x4664df,_0x47e0b5]=await this[_0x5bc7b0(0x14a)][_0x5bc7b0(0x13b)]({'where':_0x18405b,'skip':(page-0x1)*size,'take':size,'order':{'id':'DESC'}}),_0x4a9b60=[...new Set(_0x4664df[_0x5bc7b0(0x151)](_0x343008=>_0x343008[_0x5bc7b0(0x181)]))],_0x5b5188=await this['userEntity'][_0x5bc7b0(0x12a)]({'where':{'id':(0x0,typeorm_1['In'])(_0x4a9b60)},'select':['id','avatar',_0x5bc7b0(0x128),_0x5bc7b0(0x12c),_0x5bc7b0(0x182),'status']});return _0x4664df['forEach'](_0x30cecc=>{const _0x40ded8=_0x5bc7b0,_0x30adb6=_0x5b5188['find'](_0xdf8c0b=>_0xdf8c0b['id']===_0x30cecc[_0x40ded8(0x181)]);_0x1290a7!==_0x40ded8(0x133)&&(_0x30adb6[_0x40ded8(0x12c)]=(0x0,utils_1[_0x40ded8(0x16e)])(_0x30adb6[_0x40ded8(0x12c)])),_0x30cecc[_0x40ded8(0x160)]=_0x30adb6;}),{'rows':_0x4664df,'count':_0x47e0b5};}};function _0x12fc(){const _0x323f05=['@nestjs/typeorm','checkBadWordsByConfig','axios','百度云检测','敏感词不存在,请检查您的提交信息','Like','hideString','BAD_REQUEST','__decorate','extractContent','8433180zqQovR','633496ekGDaX','createQueryBuilder','删除敏感词成功','baiduTextAccessToken','baidu','delete','where','queryBadWords','https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined?access_token=','object','delBadWords','敏感词检测\x20|\x20','keyword','4QzpLCo','userId','violationCount','__param','Repository','../user/user.entity','findOne','onModuleInit','您提交的信息中包含','defineProperty','affected','join','metadata','application/x-www-form-urlencoded','***','category','__metadata','user','typeorm','UserEntity','181284yGVvRh','的信息、我们已对您账号进行标记、请合规使用！','update','design:paramtypes','application/json','1125906WBevtY','badWords','username','您提交的内容中包含','find','push','email','BadwordsService','../globalConfig/globalConfig.service','customSensitiveWords','2646540GPJOET','8YzhOJo','nineaiCheckBadWords','super','includes','GlobalConfigService','save','function','stringify','recordUserBadWords','checkBadWords','findAndCount','InjectRepository','敏感词已存在,请检查您的提交信息','1149gXXScm','globalConfigService','百度文本检测出现错误、请查看配置信息:\x20','word','的内容、我们已对您的账户进行标记、请合规使用！','id\x20=\x20:userId','log','删除敏感词失败','./badwords.entity','../../common/utils','length','敏感词已经存在了、请勿重复添加','violationLogEntity','更新敏感词失败','typeOriginCn','default','data','loadBadWords','您提交的信息中包含违规的内容、我们已对您的账户进行标记、请合规使用！','map','55dwsdLR','1758043QIBAGM','badWordsEntity','添加敏感词成功','nineai','addBadWord','word_list','decorate','getOwnPropertyDescriptor','msg','HttpException','userEntity','error:\x20','match','userInfo','post','updateBadWords','自定义','@nestjs/common','__esModule','HttpStatus','violationCount\x20+\x201'];_0x12fc=function(){return _0x323f05;};return _0x12fc();}BadwordsService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_2[_0x24750f(0x13c)])(badwords_entity_1['BadWordsEntity'])),__param(0x1,(0x0,typeorm_2['InjectRepository'])(violationLog_entity_1['ViolationLogEntity'])),__param(0x2,(0x0,typeorm_2[_0x24750f(0x13c)])(user_entity_1[_0x24750f(0x193)])),__metadata(_0x24750f(0x197),[typeorm_1[_0x24750f(0x184)],typeorm_1['Repository'],typeorm_1[_0x24750f(0x184)],globalConfig_service_1[_0x24750f(0x135)]])],BadwordsService),exports[_0x24750f(0x12d)]=BadwordsService;