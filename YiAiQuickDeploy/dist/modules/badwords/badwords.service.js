'use strict';function _0x1a45(){const _0x32769f=['1928NrsWLz','baidu','Repository','length','updateBadWords','email','decorate','word','extractContent','UserEntity','682832sosMUZ','status','metadata','violationLogEntity','delete','自定义','post','__param','userInfo','@nestjs/typeorm','自定义检测','更新敏感词成功','find','baiduTextAccessToken','__esModule','violationCount','userId','log','findAndCount','__metadata','敏感词不存在,请检查您的提交信息','添加敏感词成功','application/x-www-form-urlencoded','addBadWord','onModuleInit','345230csXbBm','userEntity','检测失败','badWordsEntity','msg','BadwordsService','includes','敏感词已经存在了、请勿重复添加','Like','badWords','design:paramtypes','data','百度文本检测出现错误、请查看配置信息:\x20','您提交的内容中包含','super','join','affected','746730UTpukQ','12681DhgamT','customSensitiveWords','keyword','globalConfigService','GlobalConfigService','push','update','match','user','application/json','8383UZkSit','您提交的信息中包含','delBadWords','violationCount\x20+\x201','../user/user.entity','default','avatar','百度云检测','formarTips','ViolationLogEntity','typeorm','object','recordUserBadWords','queryBadWords','../../common/utils','123935tddqXN','@nestjs/common','forEach','getSensitiveConfig','523588EgFPja','./badwords.entity','66OIZcjT','username','nineaiCheckBadWords','execute','defineProperty','BAD_REQUEST','***','敏感词检测\x20|\x20','getOwnPropertyDescriptor','map','save','findOne','id\x20=\x20:userId','您提交的信息中包含违规的内容、我们已对您的账户进行标记、请合规使用！','Injectable','violation','category','word_list','HttpException','nineai','hideString','set','更新敏感词失败','InjectRepository','./violationLog.entity','HttpStatus','ASC','checkBadWords','BadWordsEntity','function','../globalConfig/globalConfig.service','的信息、我们已对您账号进行标记、请合规使用！','DESC','stringify','loadBadWords','baiduCheckBadWords'];_0x1a45=function(){return _0x32769f;};return _0x1a45();}const _0x31cfdf=_0x2ebe;(function(_0x599b0c,_0x20b882){const _0x374194=_0x2ebe,_0x279945=_0x599b0c();while(!![]){try{const _0x2c11a0=parseInt(_0x374194(0x1c3))/0x1+-parseInt(_0x374194(0x1d6))/0x2+-parseInt(_0x374194(0x1b8))/0x3+parseInt(_0x374194(0x18e))/0x4+-parseInt(_0x374194(0x1a7))/0x5+parseInt(_0x374194(0x1d8))/0x6*(parseInt(_0x374194(0x1d2))/0x7)+-parseInt(_0x374194(0x184))/0x8*(-parseInt(_0x374194(0x1b9))/0x9);if(_0x2c11a0===_0x20b882)break;else _0x279945['push'](_0x279945['shift']());}catch(_0x102cde){_0x279945['push'](_0x279945['shift']());}}}(_0x1a45,0x20a21));var __decorate=this&&this['__decorate']||function(_0x1f1b88,_0x297e27,_0x7130e2,_0x49c009){const _0x598877=_0x2ebe;var _0xf311c0=arguments[_0x598877(0x187)],_0x1543aa=_0xf311c0<0x3?_0x297e27:_0x49c009===null?_0x49c009=Object[_0x598877(0x1e0)](_0x297e27,_0x7130e2):_0x49c009,_0x37c4f6;if(typeof Reflect===_0x598877(0x1ce)&&typeof Reflect[_0x598877(0x18a)]===_0x598877(0x1f5))_0x1543aa=Reflect['decorate'](_0x1f1b88,_0x297e27,_0x7130e2,_0x49c009);else{for(var _0x569745=_0x1f1b88['length']-0x1;_0x569745>=0x0;_0x569745--)if(_0x37c4f6=_0x1f1b88[_0x569745])_0x1543aa=(_0xf311c0<0x3?_0x37c4f6(_0x1543aa):_0xf311c0>0x3?_0x37c4f6(_0x297e27,_0x7130e2,_0x1543aa):_0x37c4f6(_0x297e27,_0x7130e2))||_0x1543aa;}return _0xf311c0>0x3&&_0x1543aa&&Object[_0x598877(0x1dc)](_0x297e27,_0x7130e2,_0x1543aa),_0x1543aa;},__metadata=this&&this[_0x31cfdf(0x1a1)]||function(_0xce134a,_0x294bc8){const _0x29c002=_0x31cfdf;if(typeof Reflect===_0x29c002(0x1ce)&&typeof Reflect[_0x29c002(0x190)]==='function')return Reflect['metadata'](_0xce134a,_0x294bc8);},__param=this&&this[_0x31cfdf(0x195)]||function(_0x2893ed,_0x53b795){return function(_0x1700e4,_0x24c850){_0x53b795(_0x1700e4,_0x24c850,_0x2893ed);};};Object[_0x31cfdf(0x1dc)](exports,_0x31cfdf(0x19c),{'value':!![]}),exports[_0x31cfdf(0x1ac)]=void 0x0;const globalConfig_service_1=require(_0x31cfdf(0x1f6)),common_1=require(_0x31cfdf(0x1d3)),badwords_entity_1=require(_0x31cfdf(0x1d7)),typeorm_1=require(_0x31cfdf(0x1cd)),typeorm_2=require(_0x31cfdf(0x197)),axios_1=require('axios'),violationLog_entity_1=require(_0x31cfdf(0x1f0)),user_entity_1=require(_0x31cfdf(0x1c7)),utils_1=require(_0x31cfdf(0x1d1));function _0x2ebe(_0x48de2c,_0x50ac48){const _0x1a45b6=_0x1a45();return _0x2ebe=function(_0x2ebe38,_0x2fb40d){_0x2ebe38=_0x2ebe38-0x184;let _0x3f2a1c=_0x1a45b6[_0x2ebe38];return _0x3f2a1c;},_0x2ebe(_0x48de2c,_0x50ac48);}let BadwordsService=class BadwordsService{constructor(_0x4c661d,_0x148e83,_0x231dd1,_0x5d9cad){const _0x31d8a2=_0x31cfdf;this[_0x31d8a2(0x1aa)]=_0x4c661d,this[_0x31d8a2(0x191)]=_0x148e83,this[_0x31d8a2(0x1a8)]=_0x231dd1,this[_0x31d8a2(0x1bc)]=_0x5d9cad,this[_0x31d8a2(0x1b0)]=[];}async[_0x31cfdf(0x1a6)](){const _0x486fa4=_0x31cfdf;this[_0x486fa4(0x1fa)]();}async[_0x31cfdf(0x1ba)](_0x14b1e8,_0x1f9629){const _0x152684=_0x31cfdf,_0x2f007b=[];for(let _0x64574=0x0;_0x64574<this[_0x152684(0x1b0)][_0x152684(0x187)];_0x64574++){const _0x490c5f=this['badWords'][_0x64574];_0x14b1e8[_0x152684(0x1ad)](_0x490c5f)&&_0x2f007b[_0x152684(0x1be)](_0x490c5f);}if(_0x2f007b[_0x152684(0x187)]){await this[_0x152684(0x1cf)](_0x1f9629,_0x14b1e8,_0x2f007b,[_0x152684(0x193)],_0x152684(0x198));const _0x181325=_0x152684(0x1e5);throw new common_1[(_0x152684(0x1ea))](_0x181325,common_1[_0x152684(0x1f1)][_0x152684(0x1dd)]);}}async[_0x31cfdf(0x1f3)](_0x538155,_0x488aa6){const _0x4e48d8=_0x31cfdf,_0x4ca4cd=await this[_0x4e48d8(0x1bc)][_0x4e48d8(0x1d5)]();_0x4ca4cd&&await this['checkBadWordsByConfig'](_0x538155,_0x4ca4cd,_0x488aa6),await this[_0x4e48d8(0x1ba)](_0x538155,_0x488aa6);}async['checkBadWordsByConfig'](_0x2a4696,_0x18a56c,_0x47f8df){const _0x4ab54c=_0x31cfdf,{useType:_0x39a5f4}=_0x18a56c;_0x39a5f4===_0x4ab54c(0x185)&&await this[_0x4ab54c(0x1fb)](_0x2a4696,_0x18a56c[_0x4ab54c(0x19b)],_0x47f8df),_0x39a5f4===_0x4ab54c(0x1eb)&&await this[_0x4ab54c(0x1da)](_0x2a4696,_0x18a56c,_0x47f8df);}[_0x31cfdf(0x18c)](_0x445c94){const _0x3cad71=_0x31cfdf,_0x3a8227=/存在(.*?)不合规/,_0x56ba1c=_0x445c94[_0x3cad71(0x1c0)](_0x3a8227);return _0x56ba1c?_0x56ba1c[0x1]:'';}async[_0x31cfdf(0x1fb)](_0x3b19bd,_0x28ec20,_0x4da438){const _0x5e709a=_0x31cfdf;if(!_0x28ec20)return;const _0xe3b0a3='https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined?access_token='+_0x28ec20+'}',_0x4a99cd={'Content-Type':_0x5e709a(0x1a4),'Accept':_0x5e709a(0x1c2)},_0x4692a0=await axios_1[_0x5e709a(0x1c8)]['post'](_0xe3b0a3,{'text':_0x3b19bd},{'headers':_0x4a99cd}),{conclusion:_0x3b7249,error_code:_0x224620,error_msg:_0xf06d2f,conclusionType:_0x293f86,data:_0x5d4264}=_0x4692a0[_0x5e709a(0x1b2)];_0x224620&&console[_0x5e709a(0x19f)](_0x5e709a(0x1b3),_0xf06d2f);if(_0x293f86!==0x1){const _0x27b9eb=[...new Set(_0x5d4264[_0x5e709a(0x1e1)](_0x4f5602=>this[_0x5e709a(0x18c)](_0x4f5602[_0x5e709a(0x1ab)])))];await this[_0x5e709a(0x1cf)](_0x4da438,_0x3b19bd,[_0x5e709a(0x1de)],_0x27b9eb,_0x5e709a(0x1ca));const _0x13fad7=_0x5e709a(0x1c4)+_0x27b9eb[_0x5e709a(0x1b6)](',')+'的内容、我们已对您的账户进行标记、请合规使用！';throw new common_1['HttpException'](_0x13fad7,common_1[_0x5e709a(0x1f1)][_0x5e709a(0x1dd)]);}}async['nineaiCheckBadWords'](_0x4265f5,_0x4636f8,_0x39ca3a){const _0xfc225f=_0x31cfdf;var _0x368255;const {nineaiBuiltInSensitiveApiBase:_0x1988f2,nineaiBuiltInSensitiveAuthKey:_0x198989}=_0x4636f8;if(!_0x1988f2||!_0x198989)return;const _0x11eabc=await axios_1[_0xfc225f(0x1c8)][_0xfc225f(0x194)](_0x1988f2,{'content':_0x4265f5},{'headers':{'Content-Type':_0xfc225f(0x1c2),'Authorization':_0x198989}});if(!_0x11eabc[_0xfc225f(0x1b2)])return;if(_0x11eabc[_0xfc225f(0x1b2)]['code']!=='0'){const {msg:msg=_0xfc225f(0x1a9)}=_0x11eabc[_0xfc225f(0x1b2)];throw new common_1[(_0xfc225f(0x1ea))](_0xfc225f(0x1df)+msg,common_1['HttpStatus'][_0xfc225f(0x1dd)]);}if(_0x11eabc[_0xfc225f(0x1b2)][_0xfc225f(0x1e9)]&&((_0x368255=_0x11eabc[_0xfc225f(0x1b2)][_0xfc225f(0x1e9)])===null||_0x368255===void 0x0?void 0x0:_0x368255[_0xfc225f(0x187)])){const _0x5168bf=[...new Set(_0x11eabc['data']['word_list'][_0xfc225f(0x1e1)](_0x205f87=>_0x205f87[_0xfc225f(0x1bb)]))],_0x5257bd=[...new Set(_0x11eabc[_0xfc225f(0x1b2)][_0xfc225f(0x1e9)][_0xfc225f(0x1e1)](_0x57fff3=>_0x57fff3['category']))];await this['recordUserBadWords'](_0x39ca3a,_0x4265f5,_0x5168bf,_0x5257bd,'NineAi检测');const _0x4954fb=this[_0xfc225f(0x1cb)](_0x11eabc[_0xfc225f(0x1b2)][_0xfc225f(0x1e9)]);throw new common_1[(_0xfc225f(0x1ea))](_0x4954fb,common_1[_0xfc225f(0x1f1)]['BAD_REQUEST']);}}[_0x31cfdf(0x1cb)](_0x2493a9){const _0x5778c7=_0x31cfdf,_0x7f0e35=_0x2493a9[_0x5778c7(0x1e1)](_0x2af95d=>_0x2af95d[_0x5778c7(0x1e8)]),_0x2a7bf6=[...new Set(_0x7f0e35)];return _0x5778c7(0x1b4)+_0x2a7bf6[_0x5778c7(0x1b6)](',')+_0x5778c7(0x1f7);}async[_0x31cfdf(0x1fa)](){const _0xbbb10d=_0x31cfdf,_0x4f2d8e=await this[_0xbbb10d(0x1aa)][_0xbbb10d(0x19a)]({'where':{'status':0x1},'select':[_0xbbb10d(0x18b)]});this[_0xbbb10d(0x1b0)]=_0x4f2d8e['map'](_0x38fc21=>_0x38fc21[_0xbbb10d(0x18b)]);}async[_0x31cfdf(0x1d0)](_0x257186){const _0x739401=_0x31cfdf,{page:page=0x1,size:size=0x1f4,word:_0x4ede21,status:_0x2c5ee1}=_0x257186,_0x57c76b={};[0x0,0x1,'0','1'][_0x739401(0x1ad)](_0x2c5ee1)&&(_0x57c76b[_0x739401(0x18f)]=_0x2c5ee1),_0x4ede21&&(_0x57c76b['word']=(0x0,typeorm_1[_0x739401(0x1af)])('%'+_0x4ede21+'%'));const [_0x564ad0,_0x495792]=await this[_0x739401(0x1aa)][_0x739401(0x1a0)]({'where':_0x57c76b,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x739401(0x1f2)}});return{'rows':_0x564ad0,'count':_0x495792};}async[_0x31cfdf(0x1c5)](_0x355e46){const _0xb3aa12=_0x31cfdf,_0x540c50=await this['badWordsEntity'][_0xb3aa12(0x1e3)]({'where':{'id':_0x355e46['id']}});if(!_0x540c50)throw new common_1[(_0xb3aa12(0x1ea))](_0xb3aa12(0x1a2),common_1[_0xb3aa12(0x1f1)][_0xb3aa12(0x1dd)]);const _0x2c6b5a=await this[_0xb3aa12(0x1aa)][_0xb3aa12(0x192)]({'id':_0x355e46['id']});if(_0x2c6b5a[_0xb3aa12(0x1b7)]>0x0)return await this[_0xb3aa12(0x1fa)](),'删除敏感词成功';else throw new common_1[(_0xb3aa12(0x1ea))]('删除敏感词失败',common_1[_0xb3aa12(0x1f1)][_0xb3aa12(0x1dd)]);}async[_0x31cfdf(0x188)](_0x2ca245){const _0x1e1718=_0x31cfdf,{id:_0x6be417,word:_0x47237e,status:_0x25ffed}=_0x2ca245,_0x230a19=await this['badWordsEntity'][_0x1e1718(0x1e3)]({'where':{'word':_0x47237e}});if(_0x230a19)throw new common_1[(_0x1e1718(0x1ea))](_0x1e1718(0x1ae),common_1[_0x1e1718(0x1f1)]['BAD_REQUEST']);const _0x35c9b3=await this[_0x1e1718(0x1aa)][_0x1e1718(0x1bf)]({'id':_0x6be417},{'word':_0x47237e,'status':_0x25ffed});if(_0x35c9b3[_0x1e1718(0x1b7)]>0x0)return await this[_0x1e1718(0x1fa)](),_0x1e1718(0x199);else throw new common_1[(_0x1e1718(0x1ea))](_0x1e1718(0x1ee),common_1['HttpStatus'][_0x1e1718(0x1dd)]);}async[_0x31cfdf(0x1a5)](_0x155fb7){const _0x1a5a04=_0x31cfdf,{word:_0x525d54}=_0x155fb7,_0x2ac152=await this[_0x1a5a04(0x1aa)][_0x1a5a04(0x1e3)]({'where':{'word':_0x525d54}});if(_0x2ac152)throw new common_1[(_0x1a5a04(0x1ea))]('敏感词已存在,请检查您的提交信息',common_1['HttpStatus'][_0x1a5a04(0x1dd)]);return await this[_0x1a5a04(0x1aa)][_0x1a5a04(0x1e2)]({'word':_0x525d54}),await this[_0x1a5a04(0x1fa)](),_0x1a5a04(0x1a3);}async[_0x31cfdf(0x1cf)](_0x35d31e,_0x13adce,_0x3146ef,_0x448a63,_0x2881a5){const _0x35c85b=_0x31cfdf,_0x35da8d={'userId':_0x35d31e,'content':_0x13adce,'words':JSON[_0x35c85b(0x1f9)](_0x3146ef),'typeCn':JSON[_0x35c85b(0x1f9)](_0x448a63),'typeOriginCn':_0x2881a5};try{await this[_0x35c85b(0x1a8)]['createQueryBuilder']()[_0x35c85b(0x1bf)](user_entity_1['UserEntity'])[_0x35c85b(0x1ed)]({'violationCount':()=>_0x35c85b(0x1c6)})['where'](_0x35c85b(0x1e4),{'userId':_0x35d31e})[_0x35c85b(0x1db)](),await this[_0x35c85b(0x191)][_0x35c85b(0x1e2)](_0x35da8d);}catch(_0x2e88bf){console[_0x35c85b(0x19f)]('error:\x20',_0x2e88bf);}}async[_0x31cfdf(0x1e7)](_0x20a0ba,_0x3fd394){const _0x475bb9=_0x31cfdf,{role:_0x30db4e}=_0x20a0ba[_0x475bb9(0x1c1)],{page:page=0x1,size:size=0xa,userId:_0x9aad19,typeOriginCn:_0x5b3471}=_0x3fd394,_0xcece66={};_0x9aad19&&(_0xcece66[_0x475bb9(0x19e)]=_0x9aad19),_0x5b3471&&(_0xcece66['typeOriginCn']=_0x5b3471);const [_0x1abdb0,_0x4847fa]=await this[_0x475bb9(0x191)][_0x475bb9(0x1a0)]({'where':_0xcece66,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x475bb9(0x1f8)}}),_0x3bd826=[...new Set(_0x1abdb0['map'](_0x19c8e4=>_0x19c8e4[_0x475bb9(0x19e)]))],_0x2ac7bb=await this['userEntity'][_0x475bb9(0x19a)]({'where':{'id':(0x0,typeorm_1['In'])(_0x3bd826)},'select':['id',_0x475bb9(0x1c9),_0x475bb9(0x1d9),_0x475bb9(0x189),_0x475bb9(0x19d),_0x475bb9(0x18f)]});return _0x1abdb0[_0x475bb9(0x1d4)](_0x216e96=>{const _0x300659=_0x475bb9,_0x4dd79e=_0x2ac7bb[_0x300659(0x19a)](_0x4dbb35=>_0x4dbb35['id']===_0x216e96[_0x300659(0x19e)]);_0x30db4e!==_0x300659(0x1b5)&&(_0x4dd79e[_0x300659(0x189)]=(0x0,utils_1[_0x300659(0x1ec)])(_0x4dd79e[_0x300659(0x189)])),_0x216e96[_0x300659(0x196)]=_0x4dd79e;}),{'rows':_0x1abdb0,'count':_0x4847fa};}};BadwordsService=__decorate([(0x0,common_1[_0x31cfdf(0x1e6)])(),__param(0x0,(0x0,typeorm_2[_0x31cfdf(0x1ef)])(badwords_entity_1[_0x31cfdf(0x1f4)])),__param(0x1,(0x0,typeorm_2[_0x31cfdf(0x1ef)])(violationLog_entity_1[_0x31cfdf(0x1cc)])),__param(0x2,(0x0,typeorm_2[_0x31cfdf(0x1ef)])(user_entity_1[_0x31cfdf(0x18d)])),__metadata(_0x31cfdf(0x1b1),[typeorm_1[_0x31cfdf(0x186)],typeorm_1[_0x31cfdf(0x186)],typeorm_1[_0x31cfdf(0x186)],globalConfig_service_1[_0x31cfdf(0x1bd)]])],BadwordsService),exports[_0x31cfdf(0x1ac)]=BadwordsService;