'use strict';const _0x254823=_0x3134;(function(_0x530a3a,_0x5d82f7){const _0x138104=_0x3134,_0x3ccce2=_0x530a3a();while(!![]){try{const _0x721190=parseInt(_0x138104(0x131))/0x1*(-parseInt(_0x138104(0x141))/0x2)+parseInt(_0x138104(0x103))/0x3*(parseInt(_0x138104(0x127))/0x4)+parseInt(_0x138104(0x124))/0x5*(-parseInt(_0x138104(0x142))/0x6)+parseInt(_0x138104(0x12e))/0x7+-parseInt(_0x138104(0xfc))/0x8*(parseInt(_0x138104(0x15f))/0x9)+-parseInt(_0x138104(0x119))/0xa*(parseInt(_0x138104(0x10c))/0xb)+-parseInt(_0x138104(0x14a))/0xc*(-parseInt(_0x138104(0xfd))/0xd);if(_0x721190===_0x5d82f7)break;else _0x3ccce2['push'](_0x3ccce2['shift']());}catch(_0x5e2978){_0x3ccce2['push'](_0x3ccce2['shift']());}}}(_0x59b4,0x7e205));function _0x3134(_0x237fef,_0x35e28b){const _0x59b45a=_0x59b4();return _0x3134=function(_0x313435,_0x2b411f){_0x313435=_0x313435-0xed;let _0x1918fd=_0x59b45a[_0x313435];return _0x1918fd;},_0x3134(_0x237fef,_0x35e28b);}function _0x59b4(){const _0x41d2a8=['nineai','ASC','findOne','敏感词已经存在了、请勿重复添加','object','BadwordsService','__param','ViolationLogEntity','forEach','checkBadWords','loadBadWords','632wVAgQZ','24445629ehQlGQ','data','keyword','InjectRepository','__decorate','post','3UDWcUx','map','push','敏感词检测\x20|\x20','您提交的信息中包含违规的内容、我们已对您的账户进行标记、请合规使用！','stringify','DESC','save','join','4322879JqtLjk','../../common/utils','metadata','Injectable','email','添加敏感词成功','敏感词不存在,请检查您的提交信息','删除敏感词失败','function','自定义检测','NineAi检测','formarTips','update','10KotEuw','checkBadWordsByConfig','globalConfigService','code','hideString','baiduTextAccessToken','execute','nineaiCheckBadWords','baiduCheckBadWords','delete','./violationLog.entity','3415igGRNc','violationCount','delBadWords','869572trImtu','getOwnPropertyDescriptor','word','customSensitiveWords','defineProperty','UserEntity','../globalConfig/globalConfig.service','761859bpHnbO','username','log','63039GTrzjT','HttpException','length','addBadWord','GlobalConfigService','application/json','match','affected','typeOriginCn','updateBadWords','../user/user.entity','***','user','category','badWordsEntity','的信息、我们已对您账号进行标记、请合规使用！','30FLqBZv','2826DgYNzu','avatar','Like','violation','where','find','queryBadWords','userEntity','12PtiOpb','userId','createQueryBuilder','您提交的信息中包含','badWords','violationCount\x20+\x201','status','userInfo','BadWordsEntity','findAndCount','百度云检测','includes','__metadata','super','getSensitiveConfig','design:paramtypes','set','@nestjs/common','./badwords.entity','敏感词已存在,请检查您的提交信息','decorate','3393dvbXVX','HttpStatus','violationLogEntity','word_list','recordUserBadWords','extractContent','自定义','Repository','BAD_REQUEST'];_0x59b4=function(){return _0x41d2a8;};return _0x59b4();}var __decorate=this&&this[_0x254823(0x101)]||function(_0x4c4773,_0x5e01fb,_0x1efe8f,_0x29e483){const _0xb53ecc=_0x254823;var _0x2001b9=arguments['length'],_0x26dbfe=_0x2001b9<0x3?_0x5e01fb:_0x29e483===null?_0x29e483=Object[_0xb53ecc(0x128)](_0x5e01fb,_0x1efe8f):_0x29e483,_0x18790e;if(typeof Reflect===_0xb53ecc(0xf5)&&typeof Reflect['decorate']===_0xb53ecc(0x114))_0x26dbfe=Reflect[_0xb53ecc(0x15e)](_0x4c4773,_0x5e01fb,_0x1efe8f,_0x29e483);else{for(var _0x25ed65=_0x4c4773[_0xb53ecc(0x133)]-0x1;_0x25ed65>=0x0;_0x25ed65--)if(_0x18790e=_0x4c4773[_0x25ed65])_0x26dbfe=(_0x2001b9<0x3?_0x18790e(_0x26dbfe):_0x2001b9>0x3?_0x18790e(_0x5e01fb,_0x1efe8f,_0x26dbfe):_0x18790e(_0x5e01fb,_0x1efe8f))||_0x26dbfe;}return _0x2001b9>0x3&&_0x26dbfe&&Object[_0xb53ecc(0x12b)](_0x5e01fb,_0x1efe8f,_0x26dbfe),_0x26dbfe;},__metadata=this&&this[_0x254823(0x156)]||function(_0x5283f2,_0x526f56){const _0xbb40b6=_0x254823;if(typeof Reflect==='object'&&typeof Reflect[_0xbb40b6(0x10e)]==='function')return Reflect[_0xbb40b6(0x10e)](_0x5283f2,_0x526f56);},__param=this&&this[_0x254823(0xf7)]||function(_0x6546ba,_0x216053){return function(_0xfc2809,_0x28a6d7){_0x216053(_0xfc2809,_0x28a6d7,_0x6546ba);};};Object[_0x254823(0x12b)](exports,'__esModule',{'value':!![]}),exports[_0x254823(0xf6)]=void 0x0;const globalConfig_service_1=require(_0x254823(0x12d)),common_1=require(_0x254823(0x15b)),badwords_entity_1=require(_0x254823(0x15c)),typeorm_1=require('typeorm'),typeorm_2=require('@nestjs/typeorm'),axios_1=require('axios'),violationLog_entity_1=require(_0x254823(0x123)),user_entity_1=require(_0x254823(0x13b)),utils_1=require(_0x254823(0x10d));let BadwordsService=class BadwordsService{constructor(_0x417c7b,_0x5165c8,_0x249afe,_0x5d900b){const _0xf7f529=_0x254823;this['badWordsEntity']=_0x417c7b,this[_0xf7f529(0x161)]=_0x5165c8,this[_0xf7f529(0x149)]=_0x249afe,this[_0xf7f529(0x11b)]=_0x5d900b,this[_0xf7f529(0x14e)]=[];}async['onModuleInit'](){const _0x2fa04c=_0x254823;this[_0x2fa04c(0xfb)]();}async[_0x254823(0x12a)](_0x2c0ead,_0xbe029a){const _0x26a160=_0x254823,_0x2565f4=[];for(let _0xe1ba23=0x0;_0xe1ba23<this['badWords'][_0x26a160(0x133)];_0xe1ba23++){const _0x1fdc31=this[_0x26a160(0x14e)][_0xe1ba23];_0x2c0ead[_0x26a160(0x155)](_0x1fdc31)&&_0x2565f4[_0x26a160(0x105)](_0x1fdc31);}if(_0x2565f4['length']){await this[_0x26a160(0x163)](_0xbe029a,_0x2c0ead,_0x2565f4,[_0x26a160(0xee)],_0x26a160(0x115));const _0x512b53=_0x26a160(0x107);throw new common_1['HttpException'](_0x512b53,common_1[_0x26a160(0x160)][_0x26a160(0xf0)]);}}async[_0x254823(0xfa)](_0x1b50fa,_0x24d2a4){const _0x192f2a=_0x254823,_0x5cfdfd=await this[_0x192f2a(0x11b)][_0x192f2a(0x158)]();_0x5cfdfd&&await this[_0x192f2a(0x11a)](_0x1b50fa,_0x5cfdfd,_0x24d2a4),await this[_0x192f2a(0x12a)](_0x1b50fa,_0x24d2a4);}async[_0x254823(0x11a)](_0x3f7bd7,_0x1818d5,_0x31e539){const _0x387644=_0x254823,{useType:_0x508687}=_0x1818d5;_0x508687==='baidu'&&await this[_0x387644(0x121)](_0x3f7bd7,_0x1818d5[_0x387644(0x11e)],_0x31e539),_0x508687===_0x387644(0xf1)&&await this[_0x387644(0x120)](_0x3f7bd7,_0x1818d5,_0x31e539);}[_0x254823(0xed)](_0x270a2b){const _0x3f105b=_0x254823,_0x37477a=/存在(.*?)不合规/,_0x1d7da6=_0x270a2b[_0x3f105b(0x137)](_0x37477a);return _0x1d7da6?_0x1d7da6[0x1]:'';}async[_0x254823(0x121)](_0x1838b7,_0xaad3c1,_0x374e70){const _0x1a1538=_0x254823;if(!_0xaad3c1)return;const _0x4cc849='https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined?access_token='+_0xaad3c1+'}',_0xa55d6a={'Content-Type':'application/x-www-form-urlencoded','Accept':_0x1a1538(0x136)},_0x58165e=await axios_1['default'][_0x1a1538(0x102)](_0x4cc849,{'text':_0x1838b7},{'headers':_0xa55d6a}),{conclusion:_0x32580a,error_code:_0x1feccd,error_msg:_0x147b10,conclusionType:_0x27f4e4,data:_0x2dab21}=_0x58165e['data'];_0x1feccd&&console[_0x1a1538(0x130)]('百度文本检测出现错误、请查看配置信息:\x20',_0x147b10);if(_0x27f4e4!==0x1){const _0x29e25b=[...new Set(_0x2dab21[_0x1a1538(0x104)](_0x2b82cf=>this[_0x1a1538(0xed)](_0x2b82cf['msg'])))];await this[_0x1a1538(0x163)](_0x374e70,_0x1838b7,[_0x1a1538(0x13c)],_0x29e25b,_0x1a1538(0x154));const _0x3589f3=_0x1a1538(0x14d)+_0x29e25b['join'](',')+'的内容、我们已对您的账户进行标记、请合规使用！';throw new common_1['HttpException'](_0x3589f3,common_1['HttpStatus'][_0x1a1538(0xf0)]);}}async[_0x254823(0x120)](_0x223692,_0x30957c,_0x5bbca0){const _0x531c0c=_0x254823;var _0x4ac70b;const {nineaiBuiltInSensitiveApiBase:_0x1fee34,nineaiBuiltInSensitiveAuthKey:_0x5b9fe4}=_0x30957c;if(!_0x1fee34||!_0x5b9fe4)return;const _0x46e19a=await axios_1['default'][_0x531c0c(0x102)](_0x1fee34,{'content':_0x223692},{'headers':{'Content-Type':'application/json','Authorization':_0x5b9fe4}});if(!_0x46e19a['data'])return;if(_0x46e19a[_0x531c0c(0xfe)][_0x531c0c(0x11c)]!=='0'){const {msg:msg='检测失败'}=_0x46e19a[_0x531c0c(0xfe)];throw new common_1[(_0x531c0c(0x132))](_0x531c0c(0x106)+msg,common_1[_0x531c0c(0x160)][_0x531c0c(0xf0)]);}if(_0x46e19a[_0x531c0c(0xfe)][_0x531c0c(0x162)]&&((_0x4ac70b=_0x46e19a[_0x531c0c(0xfe)][_0x531c0c(0x162)])===null||_0x4ac70b===void 0x0?void 0x0:_0x4ac70b['length'])){const _0x1b0d2e=[...new Set(_0x46e19a['data'][_0x531c0c(0x162)][_0x531c0c(0x104)](_0x2d3ea6=>_0x2d3ea6[_0x531c0c(0xff)]))],_0x44f4fa=[...new Set(_0x46e19a[_0x531c0c(0xfe)][_0x531c0c(0x162)]['map'](_0x137cd5=>_0x137cd5[_0x531c0c(0x13e)]))];await this[_0x531c0c(0x163)](_0x5bbca0,_0x223692,_0x1b0d2e,_0x44f4fa,_0x531c0c(0x116));const _0x3f258f=this[_0x531c0c(0x117)](_0x46e19a[_0x531c0c(0xfe)][_0x531c0c(0x162)]);throw new common_1['HttpException'](_0x3f258f,common_1[_0x531c0c(0x160)][_0x531c0c(0xf0)]);}}[_0x254823(0x117)](_0x677fbc){const _0x112415=_0x254823,_0x1a2ba8=_0x677fbc[_0x112415(0x104)](_0x2ecf7b=>_0x2ecf7b[_0x112415(0x13e)]),_0x56daa8=[...new Set(_0x1a2ba8)];return'您提交的内容中包含'+_0x56daa8[_0x112415(0x10b)](',')+_0x112415(0x140);}async[_0x254823(0xfb)](){const _0x1e87b1=_0x254823,_0x4788cc=await this[_0x1e87b1(0x13f)][_0x1e87b1(0x147)]({'where':{'status':0x1},'select':[_0x1e87b1(0x129)]});this['badWords']=_0x4788cc[_0x1e87b1(0x104)](_0x2e238f=>_0x2e238f[_0x1e87b1(0x129)]);}async[_0x254823(0x148)](_0x1cc29a){const _0x9a2a52=_0x254823,{page:page=0x1,size:size=0x1f4,word:_0x3807c3,status:_0x2aed63}=_0x1cc29a,_0x3de12c={};[0x0,0x1,'0','1'][_0x9a2a52(0x155)](_0x2aed63)&&(_0x3de12c[_0x9a2a52(0x150)]=_0x2aed63),_0x3807c3&&(_0x3de12c[_0x9a2a52(0x129)]=(0x0,typeorm_1[_0x9a2a52(0x144)])('%'+_0x3807c3+'%'));const [_0x312ddf,_0x2dfe20]=await this['badWordsEntity'][_0x9a2a52(0x153)]({'where':_0x3de12c,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x9a2a52(0xf2)}});return{'rows':_0x312ddf,'count':_0x2dfe20};}async[_0x254823(0x126)](_0xc74a50){const _0x3e1dca=_0x254823,_0xda43cd=await this[_0x3e1dca(0x13f)][_0x3e1dca(0xf3)]({'where':{'id':_0xc74a50['id']}});if(!_0xda43cd)throw new common_1[(_0x3e1dca(0x132))](_0x3e1dca(0x112),common_1[_0x3e1dca(0x160)][_0x3e1dca(0xf0)]);const _0xa68ce1=await this[_0x3e1dca(0x13f)][_0x3e1dca(0x122)]({'id':_0xc74a50['id']});if(_0xa68ce1[_0x3e1dca(0x138)]>0x0)return await this['loadBadWords'](),'删除敏感词成功';else throw new common_1['HttpException'](_0x3e1dca(0x113),common_1[_0x3e1dca(0x160)][_0x3e1dca(0xf0)]);}async[_0x254823(0x13a)](_0x52db4a){const _0x4363a2=_0x254823,{id:_0x19025c,word:_0x4f132b,status:_0x4c6d94}=_0x52db4a,_0x2ea5e2=await this[_0x4363a2(0x13f)][_0x4363a2(0xf3)]({'where':{'word':_0x4f132b}});if(_0x2ea5e2)throw new common_1[(_0x4363a2(0x132))](_0x4363a2(0xf4),common_1['HttpStatus'][_0x4363a2(0xf0)]);const _0x236919=await this['badWordsEntity'][_0x4363a2(0x118)]({'id':_0x19025c},{'word':_0x4f132b,'status':_0x4c6d94});if(_0x236919[_0x4363a2(0x138)]>0x0)return await this['loadBadWords'](),'更新敏感词成功';else throw new common_1['HttpException']('更新敏感词失败',common_1[_0x4363a2(0x160)]['BAD_REQUEST']);}async[_0x254823(0x134)](_0x16804e){const _0x5e7a31=_0x254823,{word:_0x4facec}=_0x16804e,_0xd1aedf=await this[_0x5e7a31(0x13f)][_0x5e7a31(0xf3)]({'where':{'word':_0x4facec}});if(_0xd1aedf)throw new common_1[(_0x5e7a31(0x132))](_0x5e7a31(0x15d),common_1[_0x5e7a31(0x160)][_0x5e7a31(0xf0)]);return await this[_0x5e7a31(0x13f)]['save']({'word':_0x4facec}),await this['loadBadWords'](),_0x5e7a31(0x111);}async[_0x254823(0x163)](_0x4bfae6,_0x4cd730,_0x28ff5d,_0x5ddb3a,_0x5de174){const _0x82a33c=_0x254823,_0x396880={'userId':_0x4bfae6,'content':_0x4cd730,'words':JSON[_0x82a33c(0x108)](_0x28ff5d),'typeCn':JSON[_0x82a33c(0x108)](_0x5ddb3a),'typeOriginCn':_0x5de174};try{await this[_0x82a33c(0x149)][_0x82a33c(0x14c)]()[_0x82a33c(0x118)](user_entity_1[_0x82a33c(0x12c)])[_0x82a33c(0x15a)]({'violationCount':()=>_0x82a33c(0x14f)})[_0x82a33c(0x146)]('id\x20=\x20:userId',{'userId':_0x4bfae6})[_0x82a33c(0x11f)](),await this['violationLogEntity'][_0x82a33c(0x10a)](_0x396880);}catch(_0xef69dc){console[_0x82a33c(0x130)]('error:\x20',_0xef69dc);}}async[_0x254823(0x145)](_0x593571,_0x4d6b87){const _0x4d4894=_0x254823,{role:_0x5c7e00}=_0x593571[_0x4d4894(0x13d)],{page:page=0x1,size:size=0xa,userId:_0x4597d5,typeOriginCn:_0x555d79}=_0x4d6b87,_0x30249b={};_0x4597d5&&(_0x30249b[_0x4d4894(0x14b)]=_0x4597d5),_0x555d79&&(_0x30249b[_0x4d4894(0x139)]=_0x555d79);const [_0x3f55de,_0x1dfee3]=await this[_0x4d4894(0x161)][_0x4d4894(0x153)]({'where':_0x30249b,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x4d4894(0x109)}}),_0x529d18=[...new Set(_0x3f55de['map'](_0x42f6e6=>_0x42f6e6[_0x4d4894(0x14b)]))],_0x27da82=await this[_0x4d4894(0x149)][_0x4d4894(0x147)]({'where':{'id':(0x0,typeorm_1['In'])(_0x529d18)},'select':['id',_0x4d4894(0x143),_0x4d4894(0x12f),_0x4d4894(0x110),_0x4d4894(0x125),_0x4d4894(0x150)]});return _0x3f55de[_0x4d4894(0xf9)](_0x284bd3=>{const _0x598473=_0x4d4894,_0x3dcbd2=_0x27da82['find'](_0x13bbbb=>_0x13bbbb['id']===_0x284bd3[_0x598473(0x14b)]);_0x5c7e00!==_0x598473(0x157)&&(_0x3dcbd2[_0x598473(0x110)]=(0x0,utils_1[_0x598473(0x11d)])(_0x3dcbd2[_0x598473(0x110)])),_0x284bd3[_0x598473(0x151)]=_0x3dcbd2;}),{'rows':_0x3f55de,'count':_0x1dfee3};}};BadwordsService=__decorate([(0x0,common_1[_0x254823(0x10f)])(),__param(0x0,(0x0,typeorm_2[_0x254823(0x100)])(badwords_entity_1[_0x254823(0x152)])),__param(0x1,(0x0,typeorm_2[_0x254823(0x100)])(violationLog_entity_1[_0x254823(0xf8)])),__param(0x2,(0x0,typeorm_2[_0x254823(0x100)])(user_entity_1['UserEntity'])),__metadata(_0x254823(0x159),[typeorm_1[_0x254823(0xef)],typeorm_1[_0x254823(0xef)],typeorm_1[_0x254823(0xef)],globalConfig_service_1[_0x254823(0x135)]])],BadwordsService),exports[_0x254823(0xf6)]=BadwordsService;