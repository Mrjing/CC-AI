'use strict';function _0x12db(_0x1275c2,_0x5c3836){const _0x3cc46f=_0x3cc4();return _0x12db=function(_0x12db18,_0x22830d){_0x12db18=_0x12db18-0x129;let _0x4510cc=_0x3cc46f[_0x12db18];return _0x4510cc;},_0x12db(_0x1275c2,_0x5c3836);}const _0x34f746=_0x12db;(function(_0x171cca,_0x296765){const _0x4147cb=_0x12db,_0x10a100=_0x171cca();while(!![]){try{const _0x40cc8f=-parseInt(_0x4147cb(0x140))/0x1+-parseInt(_0x4147cb(0x12c))/0x2+parseInt(_0x4147cb(0x14b))/0x3+-parseInt(_0x4147cb(0x170))/0x4+-parseInt(_0x4147cb(0x152))/0x5*(-parseInt(_0x4147cb(0x13f))/0x6)+-parseInt(_0x4147cb(0x163))/0x7*(-parseInt(_0x4147cb(0x13d))/0x8)+-parseInt(_0x4147cb(0x164))/0x9;if(_0x40cc8f===_0x296765)break;else _0x10a100['push'](_0x10a100['shift']());}catch(_0x477435){_0x10a100['push'](_0x10a100['shift']());}}}(_0x3cc4,0xf2b11));var __decorate=this&&this[_0x34f746(0x180)]||function(_0x2a097b,_0x5a881d,_0x2dfe04,_0x1804b0){const _0x4f9dd3=_0x34f746;var _0xa34e25=arguments[_0x4f9dd3(0x15e)],_0x54e0b8=_0xa34e25<0x3?_0x5a881d:_0x1804b0===null?_0x1804b0=Object['getOwnPropertyDescriptor'](_0x5a881d,_0x2dfe04):_0x1804b0,_0x4688e5;if(typeof Reflect==='object'&&typeof Reflect[_0x4f9dd3(0x155)]===_0x4f9dd3(0x130))_0x54e0b8=Reflect[_0x4f9dd3(0x155)](_0x2a097b,_0x5a881d,_0x2dfe04,_0x1804b0);else{for(var _0x555148=_0x2a097b[_0x4f9dd3(0x15e)]-0x1;_0x555148>=0x0;_0x555148--)if(_0x4688e5=_0x2a097b[_0x555148])_0x54e0b8=(_0xa34e25<0x3?_0x4688e5(_0x54e0b8):_0xa34e25>0x3?_0x4688e5(_0x5a881d,_0x2dfe04,_0x54e0b8):_0x4688e5(_0x5a881d,_0x2dfe04))||_0x54e0b8;}return _0xa34e25>0x3&&_0x54e0b8&&Object[_0x4f9dd3(0x167)](_0x5a881d,_0x2dfe04,_0x54e0b8),_0x54e0b8;},__metadata=this&&this['__metadata']||function(_0x28d107,_0x529be2){const _0x3aca12=_0x34f746;if(typeof Reflect===_0x3aca12(0x158)&&typeof Reflect[_0x3aca12(0x175)]===_0x3aca12(0x130))return Reflect[_0x3aca12(0x175)](_0x28d107,_0x529be2);},__param=this&&this[_0x34f746(0x179)]||function(_0x281304,_0x4fe4e1){return function(_0x2817ce,_0x521457){_0x4fe4e1(_0x2817ce,_0x521457,_0x281304);};};Object['defineProperty'](exports,_0x34f746(0x13e),{'value':!![]}),exports[_0x34f746(0x141)]=void 0x0;const common_1=require('@nestjs/common'),typeorm_1=require(_0x34f746(0x142)),typeorm_2=require(_0x34f746(0x17d)),models_entity_1=require(_0x34f746(0x153)),status_constant_1=require(_0x34f746(0x168)),utils_1=require(_0x34f746(0x147)),modelType_entity_1=require('./modelType.entity');let ModelsService=class ModelsService{constructor(_0x8afff2,_0x505a8e){const _0x541004=_0x34f746;this[_0x541004(0x165)]=_0x8afff2,this['modelsTypeEntity']=_0x505a8e,this[_0x541004(0x16e)]=[],this[_0x541004(0x156)]={},this[_0x541004(0x138)]={},this['keyPoolMap']={},this[_0x541004(0x16f)]={};}async['onModuleInit'](){await this['initCalcKey']();}async[_0x34f746(0x15f)](){const _0x368c58=_0x34f746;this[_0x368c58(0x144)]={},this[_0x368c58(0x16f)]={},this[_0x368c58(0x138)]={},this[_0x368c58(0x156)]={},this[_0x368c58(0x16e)]=[];const _0x3a11fe=await this[_0x368c58(0x165)]['find']({'where':{'status':!![]}}),_0x4bb6d8=_0x3a11fe[_0x368c58(0x171)]((_0x1a9e4e,_0x19cb65)=>{const _0x346233=_0x368c58;return!_0x1a9e4e[_0x19cb65[_0x346233(0x133)]]?_0x1a9e4e[_0x19cb65[_0x346233(0x133)]]=[_0x19cb65]:_0x1a9e4e[_0x19cb65[_0x346233(0x133)]]['push'](_0x19cb65),_0x1a9e4e;},{});this[_0x368c58(0x16e)]=Object[_0x368c58(0x17f)](_0x4bb6d8)[_0x368c58(0x17b)](_0x3396f2=>{return{'label':status_constant_1['ModelsMapCn'][_0x3396f2],'val':_0x3396f2};}),this[_0x368c58(0x156)]=_0x4bb6d8,this['keyList']={},_0x3a11fe['forEach'](_0x15bcba=>{const _0x34d653=_0x368c58,{keyType:_0x27d401,model:_0x190a02,keyWeight:_0x195686}=_0x15bcba;if(!this['keyPoolMap'][_0x190a02])this[_0x34d653(0x144)][_0x190a02]=[];for(let _0x1028ac=0x0;_0x1028ac<_0x195686;_0x1028ac++){this['keyPoolMap'][_0x190a02][_0x34d653(0x14e)](_0x15bcba);}if(!this['keyPoolIndexMap'][_0x190a02])this[_0x34d653(0x16f)][_0x190a02]=0x0;if(!this['keyList'][_0x27d401])this[_0x34d653(0x138)][_0x27d401]={};if(!this[_0x34d653(0x138)][_0x27d401][_0x190a02])this[_0x34d653(0x138)][_0x27d401][_0x190a02]=[];this[_0x34d653(0x138)][_0x27d401][_0x190a02][_0x34d653(0x14e)](_0x15bcba);});}async[_0x34f746(0x139)](_0x550b17,_0x317dfb,_0x12947c=-0x1){const _0x2abfe0=_0x34f746,_0x35f1f2=await this[_0x2abfe0(0x165)][_0x2abfe0(0x157)]({'id':_0x550b17},{'status':![],'keyStatus':_0x12947c,'remark':_0x317dfb});common_1[_0x2abfe0(0x136)][_0x2abfe0(0x177)](_0x2abfe0(0x146)+_0x550b17+_0x2abfe0(0x176)),this['initCalcKey']();}async['getCurrentModelKeyInfo'](_0x150028){const _0x4533f7=_0x34f746;if(!this[_0x4533f7(0x144)][_0x150028])throw new common_1[(_0x4533f7(0x12a))](_0x4533f7(0x181),common_1[_0x4533f7(0x131)][_0x4533f7(0x13b)]);this[_0x4533f7(0x16f)][_0x150028]++;const _0x3ca1ec=this[_0x4533f7(0x16f)][_0x150028];if(_0x3ca1ec>=this[_0x4533f7(0x144)][_0x150028][_0x4533f7(0x15e)])this[_0x4533f7(0x16f)][_0x150028]=0x0;const _0x3cc404=this[_0x4533f7(0x144)][_0x150028][this['keyPoolIndexMap'][_0x150028]];return _0x3cc404;}async[_0x34f746(0x15c)](_0x4b4932){const _0x262587=_0x34f746;if(!this[_0x262587(0x16e)][_0x262587(0x15e)]||!Object[_0x262587(0x17f)](this['modelMaps'])['length'])return;const _0x54d858=_0x4b4932?this['modelTypes'][_0x262587(0x166)](_0x4edb66=>Number(_0x4edb66['val'])===0x1):this[_0x262587(0x16e)][0x0];if(!_0x54d858)return;const {keyType:_0x14e602,modelName:_0x1dcec3,model:_0x177beb,maxModelTokens:_0x3d4a9c,maxResponseTokens:_0x1de4cd,deductType:_0x4e7812,deduct:_0x5d63e2,maxRounds:_0xf10a0d}=this[_0x262587(0x156)][_0x54d858[_0x262587(0x154)]][0x0];return{'modelTypeInfo':_0x54d858,'modelInfo':{'keyType':_0x14e602,'modelName':_0x1dcec3,'model':_0x177beb,'maxModelTokens':_0x3d4a9c,'maxResponseTokens':_0x1de4cd,'topN':0.8,'systemMessage':'','deductType':_0x4e7812,'deduct':_0x5d63e2,'maxRounds':_0xf10a0d,'rounds':0x8}};}async['setModel'](_0x2b0dd0){const _0x282e97=_0x34f746;try{const {id:_0x21e0d0}=_0x2b0dd0;_0x2b0dd0[_0x282e97(0x162)]&&(_0x2b0dd0[_0x282e97(0x12e)]=0x1);if(_0x21e0d0){const _0x67d951=await this['modelsEntity'][_0x282e97(0x157)]({'id':_0x21e0d0},_0x2b0dd0);return await this[_0x282e97(0x15f)](),_0x67d951[_0x282e97(0x129)]>0x0;}else{const {keyType:_0x496ecd,key:_0x1e83d1}=_0x2b0dd0;if(Number(_0x496ecd!==0x1)){const _0x24ff23=await this[_0x282e97(0x165)][_0x282e97(0x148)](_0x2b0dd0);return await this[_0x282e97(0x15f)](),_0x24ff23;}else{const _0x16924b=_0x1e83d1[_0x282e97(0x17b)](_0x1c42f4=>{const _0x2766dd=_0x282e97;try{const _0x52b68c=JSON[_0x2766dd(0x151)](JSON[_0x2766dd(0x17e)](_0x2b0dd0));return _0x52b68c[_0x2766dd(0x160)]=_0x1c42f4,_0x52b68c;}catch(_0x1ab47a){console[_0x2766dd(0x15a)](_0x2766dd(0x17c),_0x1ab47a);}}),_0x370406=await this[_0x282e97(0x165)][_0x282e97(0x148)](_0x16924b);return await this['initCalcKey'](),_0x370406;}}}catch(_0x5a7e6f){console['log'](_0x282e97(0x15b),_0x5a7e6f);}}async[_0x34f746(0x16c)]({id:_0x277eb8}){const _0x4b31a7=_0x34f746;if(!_0x277eb8)throw new common_1[(_0x4b31a7(0x12a))]('缺失必要参数！',common_1[_0x4b31a7(0x131)][_0x4b31a7(0x13b)]);const _0x3cde2c=await this['modelsEntity'][_0x4b31a7(0x13c)]({'where':{'id':_0x277eb8}});if(!_0x3cde2c)throw new common_1[(_0x4b31a7(0x12a))](_0x4b31a7(0x12f),common_1[_0x4b31a7(0x131)][_0x4b31a7(0x13b)]);const _0xa73ab4=await this[_0x4b31a7(0x165)][_0x4b31a7(0x173)]({'id':_0x277eb8});return await this['initCalcKey'](),_0xa73ab4;}async['queryModels'](_0x5ba750,_0x17697f){const _0x781346=_0x34f746,{role:_0x276a5f}=_0x5ba750[_0x781346(0x169)],{keyType:_0x146ad2,key:_0x437fa9,status:_0x56a3f5,model:_0x5515a0,page:page=0x1,size:size=0xa}=_0x17697f;let _0x4b3dc4={};_0x146ad2&&(_0x4b3dc4[_0x781346(0x133)]=_0x146ad2),_0x5515a0&&(_0x4b3dc4[_0x781346(0x12d)]=_0x5515a0),_0x56a3f5&&(_0x4b3dc4[_0x781346(0x162)]=Number(_0x56a3f5)===0x1?!![]:![]),_0x437fa9&&(_0x4b3dc4[_0x781346(0x160)]=(0x0,typeorm_2[_0x781346(0x16d)])('%'+_0x437fa9+'%'));const [_0x55c7f3,_0x169383]=await this[_0x781346(0x165)][_0x781346(0x14c)]({'where':_0x4b3dc4,'order':{'modelOrder':_0x781346(0x178)},'skip':(page-0x1)*size,'take':size});return _0x276a5f!==_0x781346(0x172)&&_0x55c7f3[_0x781346(0x137)](_0x3f4ab5=>{const _0x3d587c=_0x781346;_0x3f4ab5[_0x3d587c(0x160)]&&(_0x3f4ab5[_0x3d587c(0x160)]=(0x0,utils_1['hideString'])(_0x3f4ab5['key'])),_0x3f4ab5['secret']&&(_0x3f4ab5['secret']=(0x0,utils_1[_0x3d587c(0x145)])(_0x3f4ab5[_0x3d587c(0x15d)]));}),{'rows':_0x55c7f3,'count':_0x169383};}async[_0x34f746(0x135)](){const _0x38e358=_0x34f746,_0x74632f=JSON[_0x38e358(0x151)](JSON[_0x38e358(0x17e)](this[_0x38e358(0x156)]));return Object[_0x38e358(0x17f)](_0x74632f)[_0x38e358(0x137)](_0x442c67=>{const _0x3b0713=_0x38e358;_0x74632f[_0x442c67]=_0x74632f[_0x442c67][_0x3b0713(0x182)]((_0x2a273e,_0x3299ff)=>_0x2a273e['modelOrder']-_0x3299ff['modelOrder']),_0x74632f[_0x442c67]=Array[_0x3b0713(0x174)](_0x74632f[_0x442c67]['map'](_0x3c4eea=>{const {modelName:_0x25806b,model:_0x123046,deduct:_0x3d583c,deductType:_0x521be6,maxRounds:_0x5633e1}=_0x3c4eea;return{'modelName':_0x25806b,'model':_0x123046,'deduct':_0x3d583c,'deductType':_0x521be6,'maxRounds':_0x5633e1};})[_0x3b0713(0x171)]((_0x24f600,_0x4b3082)=>_0x24f600[_0x3b0713(0x16b)](_0x4b3082['modelName'],_0x4b3082),new Map())[_0x3b0713(0x13a)]());}),{'modelTypeList':this['modelTypes'],'modelMaps':_0x74632f};}async['saveUseLog'](_0x27a7c5,_0x38d226){const _0x51a930=_0x34f746;await this[_0x51a930(0x165)][_0x51a930(0x132)]()['update'](models_entity_1[_0x51a930(0x16a)])[_0x51a930(0x16b)]({'useCount':()=>'useCount\x20+\x201','useToken':()=>_0x51a930(0x14f)+_0x38d226})[_0x51a930(0x143)](_0x51a930(0x14d),{'id':_0x27a7c5})[_0x51a930(0x12b)]();}async['getRandomDrawKey'](){const _0x4bb76f=_0x34f746,_0x5beca5=await this[_0x4bb76f(0x165)][_0x4bb76f(0x166)]({'where':{'isDraw':!![],'status':!![]}});if(!_0x5beca5[_0x4bb76f(0x15e)])throw new common_1['HttpException']('当前未指定特殊模型KEY、前往后台模型池设置吧！',common_1[_0x4bb76f(0x131)][_0x4bb76f(0x13b)]);return(0x0,utils_1[_0x4bb76f(0x134)])(_0x5beca5);}async[_0x34f746(0x17a)](){const _0x807c6d=_0x34f746;return await this[_0x807c6d(0x165)]['find']();}async[_0x34f746(0x161)](_0x436f30){return 0x1;}async[_0x34f746(0x149)](_0x10b996){return 0x1;}async['delModelType'](_0x25ecc0){return 0x1;}};ModelsService=__decorate([(0x0,common_1[_0x34f746(0x14a)])(),__param(0x0,(0x0,typeorm_1[_0x34f746(0x183)])(models_entity_1[_0x34f746(0x16a)])),__param(0x1,(0x0,typeorm_1[_0x34f746(0x183)])(modelType_entity_1[_0x34f746(0x159)])),__metadata('design:paramtypes',[typeorm_2[_0x34f746(0x150)],typeorm_2[_0x34f746(0x150)]])],ModelsService),exports[_0x34f746(0x141)]=ModelsService;function _0x3cc4(){const _0x3d540c=['forEach','keyList','lockKey','values','BAD_REQUEST','findOne','40ppRvVm','__esModule','1170066OPYxIj','737848tVGTeZ','ModelsService','@nestjs/typeorm','where','keyPoolMap','hideString','key:\x20','../../common/utils','save','setModelType','Injectable','1686363TZRgrn','findAndCount','id\x20=\x20:id','push','useToken\x20+\x20','Repository','parse','5OkoYBX','./models.entity','val','decorate','modelMaps','update','object','ModelsTypeEntity','log','error:\x20','getBaseConfig','secret','length','initCalcKey','key','queryModelType','status','1555589vamEto','883557BSOPGl','modelsEntity','find','defineProperty','../../common/constants/status.constant','user','ModelsEntity','set','delModel','Like','modelTypes','keyPoolIndexMap','74216FHNInU','reduce','super','delete','from','metadata','\x20欠费或被官方封禁导致不可用，已被系统自动锁定','error','ASC','__param','getAllKey','map','parse\x20error:\x20','typeorm','stringify','keys','__decorate','当前调用模型已经被移除、请重新选择模型！','sort','InjectRepository','affected','HttpException','execute','39254XNRRTg','model','keyStatus','当前账号不存在！','function','HttpStatus','createQueryBuilder','keyType','getRandomItemFromArray','modelsList','Logger'];_0x3cc4=function(){return _0x3d540c;};return _0x3cc4();}