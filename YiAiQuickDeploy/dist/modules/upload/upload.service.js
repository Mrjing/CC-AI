'use strict';const _0x1db802=_0x5357;(function(_0x394917,_0x7de62){const _0x252761=_0x5357,_0x547124=_0x394917();while(!![]){try{const _0x5884c7=-parseInt(_0x252761(0x18e))/0x1*(-parseInt(_0x252761(0x1b4))/0x2)+parseInt(_0x252761(0x19f))/0x3*(parseInt(_0x252761(0x16d))/0x4)+-parseInt(_0x252761(0x193))/0x5*(-parseInt(_0x252761(0x1a2))/0x6)+-parseInt(_0x252761(0x1a6))/0x7*(parseInt(_0x252761(0x179))/0x8)+parseInt(_0x252761(0x168))/0x9+-parseInt(_0x252761(0x15e))/0xa+parseInt(_0x252761(0x1bf))/0xb*(-parseInt(_0x252761(0x1a9))/0xc);if(_0x5884c7===_0x7de62)break;else _0x547124['push'](_0x547124['shift']());}catch(_0x14e025){_0x547124['push'](_0x547124['shift']());}}}(_0x1d96,0xae4c2));var __decorate=this&&this['__decorate']||function(_0x416c70,_0x348886,_0xf0e085,_0x415ac6){const _0x23abbe=_0x5357;var _0x551203=arguments[_0x23abbe(0x15b)],_0x41a61e=_0x551203<0x3?_0x348886:_0x415ac6===null?_0x415ac6=Object[_0x23abbe(0x17f)](_0x348886,_0xf0e085):_0x415ac6,_0x5547e7;if(typeof Reflect===_0x23abbe(0x1a7)&&typeof Reflect[_0x23abbe(0x19e)]==='function')_0x41a61e=Reflect[_0x23abbe(0x19e)](_0x416c70,_0x348886,_0xf0e085,_0x415ac6);else{for(var _0x298ffb=_0x416c70[_0x23abbe(0x15b)]-0x1;_0x298ffb>=0x0;_0x298ffb--)if(_0x5547e7=_0x416c70[_0x298ffb])_0x41a61e=(_0x551203<0x3?_0x5547e7(_0x41a61e):_0x551203>0x3?_0x5547e7(_0x348886,_0xf0e085,_0x41a61e):_0x5547e7(_0x348886,_0xf0e085))||_0x41a61e;}return _0x551203>0x3&&_0x41a61e&&Object['defineProperty'](_0x348886,_0xf0e085,_0x41a61e),_0x41a61e;},__metadata=this&&this[_0x1db802(0x1c8)]||function(_0x107700,_0x35220b){const _0x2f99a4=_0x1db802;if(typeof Reflect===_0x2f99a4(0x1a7)&&typeof Reflect[_0x2f99a4(0x1b1)]==='function')return Reflect[_0x2f99a4(0x1b1)](_0x107700,_0x35220b);};Object[_0x1db802(0x18a)](exports,'__esModule',{'value':!![]}),exports[_0x1db802(0x1bc)]=void 0x0;const common_1=require(_0x1db802(0x1c3)),TENCENTCOS=require('cos-nodejs-sdk-v5'),ALIOSS=require(_0x1db802(0x15a)),axios_1=require(_0x1db802(0x186)),streamToBuffer=require('stream-to-buffer'),utils_1=require(_0x1db802(0x180)),globalConfig_service_1=require(_0x1db802(0x1be)),FormData=require(_0x1db802(0x15f));function _0x5357(_0x3074c7,_0x511bb0){const _0x1d9690=_0x1d96();return _0x5357=function(_0x535758,_0x325c04){_0x535758=_0x535758-0x15a;let _0x1f9c92=_0x1d9690[_0x535758];return _0x1f9c92;},_0x5357(_0x3074c7,_0x511bb0);}let UploadService=class UploadService{constructor(_0x586abb){const _0x510f19=_0x1db802;this[_0x510f19(0x18f)]=_0x586abb;}['onModuleInit'](){}async[_0x1db802(0x17b)](_0x36a4f7){const _0x1a33f0=_0x1db802,{filename:_0x1a5265,originalname:_0x1d2081,buffer:_0x276612,dir:dir='ai',mimetype:_0x357773}=_0x36a4f7,_0x3e5edd=_0x357773?_0x357773[_0x1a33f0(0x1b9)]('/')[0x1]:'',_0x1a6cb7=_0x1d2081||_0x1a5265;common_1[_0x1a33f0(0x19a)][_0x1a33f0(0x197)](_0x1a33f0(0x189)+_0x1a6cb7+_0x1a33f0(0x175)+_0x3e5edd,_0x1a33f0(0x1bc));const {tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0}=await this[_0x1a33f0(0x18f)][_0x1a33f0(0x1bd)]([_0x1a33f0(0x164),_0x1a33f0(0x1b7),_0x1a33f0(0x17a)]);common_1[_0x1a33f0(0x19a)][_0x1a33f0(0x197)](_0x1a33f0(0x195)+tencentCosStatus+_0x1a33f0(0x177)+aliOssStatus+_0x1a33f0(0x176)+cheveretoStatus,_0x1a33f0(0x1bc));if(!Number(tencentCosStatus)&&!Number(aliOssStatus)&&!Number(cheveretoStatus))throw new common_1['HttpException'](_0x1a33f0(0x172),common_1[_0x1a33f0(0x16e)][_0x1a33f0(0x1c1)]);try{if(Number(tencentCosStatus))return common_1['Logger'][_0x1a33f0(0x197)]('使用腾讯云COS上传','UploadService'),await this[_0x1a33f0(0x1ba)]({'filename':_0x1a6cb7,'buffer':_0x276612,'dir':dir,'fileTyle':_0x3e5edd});if(Number(aliOssStatus))return common_1[_0x1a33f0(0x19a)][_0x1a33f0(0x197)](_0x1a33f0(0x1af),_0x1a33f0(0x1bc)),await this['uploadFileByAliOss']({'filename':_0x1a6cb7,'buffer':_0x276612,'dir':dir,'fileTyle':_0x3e5edd});if(Number(cheveretoStatus)){common_1[_0x1a33f0(0x19a)][_0x1a33f0(0x197)]('使用Chevereto上传','UploadService');const {filename:_0x342370,buffer:_0x513286,dir:_0x4f167d}=_0x36a4f7;return await this[_0x1a33f0(0x1c6)]({'filename':_0x342370,'buffer':_0x513286[_0x1a33f0(0x17d)]('base64'),'dir':_0x4f167d,'fileTyle':_0x3e5edd});}}catch(_0x173f73){common_1[_0x1a33f0(0x19a)]['error'](_0x1a33f0(0x1c9)+_0x173f73[_0x1a33f0(0x16a)],'UploadService');throw _0x173f73;}}async[_0x1db802(0x1c5)](){const _0x4b5162=_0x1db802,{tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0}=await this[_0x4b5162(0x18f)][_0x4b5162(0x1bd)]([_0x4b5162(0x164),_0x4b5162(0x1b7),_0x4b5162(0x17a)]);if(Number(tencentCosStatus))return _0x4b5162(0x1cc);if(Number(aliOssStatus))return _0x4b5162(0x1c0);if(Number(cheveretoStatus))return _0x4b5162(0x19b);}async[_0x1db802(0x1a0)]({filename:_0x3f6938,url:_0x53fab9,dir:dir='mj'}){const _0x579055=_0x1db802;dir=process[_0x579055(0x17e)][_0x579055(0x1a1)]?_0x579055(0x18d):dir;const {tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0}=await this['globalConfigService']['getConfigs']([_0x579055(0x164),'aliOssStatus',_0x579055(0x17a)]);if(!Number(tencentCosStatus)&&!Number(aliOssStatus)&&!Number(cheveretoStatus))throw new common_1[(_0x579055(0x188))]('请先前往后台配置上传图片的方式',common_1[_0x579055(0x16e)][_0x579055(0x1c1)]);if(Number(tencentCosStatus))return this['uploadFileByTencentCosFromUrl']({'filename':_0x3f6938,'url':_0x53fab9,'dir':dir});if(Number(aliOssStatus)){const _0xc3a6ac=await this[_0x579055(0x1ae)]({'filename':_0x3f6938,'url':_0x53fab9,'dir':dir});return _0xc3a6ac;}if(Number(cheveretoStatus))return await this[_0x579055(0x196)]({'filename':_0x3f6938,'url':_0x53fab9,'dir':dir});}async[_0x1db802(0x1ba)]({filename:_0x38ebef,buffer:_0x2a55a2,dir:_0x3a8035,fileTyle:_0x48c87b}){const _0x17824f=_0x1db802,{Bucket:_0x37f9c4,Region:_0xc84dec,SecretId:_0xdb97cf,SecretKey:_0x4015b4}=await this[_0x17824f(0x1a5)](_0x17824f(0x1cc));this[_0x17824f(0x16f)]=new TENCENTCOS({'SecretId':_0xdb97cf,'SecretKey':_0x4015b4,'FileParallelLimit':0xa});try{return new Promise(async(_0x2a0aaf,_0x1c49df)=>{const _0x274299=_0x17824f,_0x251036=_0x48c87b||'png';this[_0x274299(0x16f)][_0x274299(0x183)]({'Bucket':(0x0,utils_1['removeSpecialCharacters'])(_0x37f9c4),'Region':(0x0,utils_1[_0x274299(0x19d)])(_0xc84dec),'Key':_0x3a8035+'/'+(_0x38ebef||(0x0,utils_1[_0x274299(0x1b3)])()+'.'+_0x48c87b),'StorageClass':_0x274299(0x1b2),'Body':_0x2a55a2},async(_0x1c4c2e,_0x6cb8a0)=>{const _0x40306d=_0x274299;if(_0x1c4c2e)return console[_0x40306d(0x1b0)](_0x40306d(0x16c),_0x1c4c2e),_0x1c49df(_0x1c4c2e);let _0x4c9ef5=_0x6cb8a0[_0x40306d(0x178)][_0x40306d(0x18c)](/^(http:\/\/|https:\/\/|\/\/|)(.*)/,_0x40306d(0x1a8));const {acceleratedDomain:_0x30aaed}=await this[_0x40306d(0x1a5)](_0x40306d(0x1cc));return _0x30aaed&&(_0x4c9ef5=_0x4c9ef5['replace'](/^(https:\/\/[^/]+)(\/.*)$/,_0x40306d(0x1ca)+_0x30aaed+'$2'),console['log'](_0x40306d(0x182),_0x4c9ef5)),_0x2a0aaf(_0x4c9ef5);});});}catch(_0x307daa){console[_0x17824f(0x1b0)](_0x17824f(0x1ce),_0x307daa);throw new common_1['HttpException']('上传图片失败[ten]',common_1['HttpStatus'][_0x17824f(0x1c1)]);}}async['uploadFileByTencentCosFromUrl']({filename:_0x233c50,url:_0x1da32c,dir:_0x5f07fc}){const _0x584a6c=_0x1db802,{Bucket:_0x36f8d3,Region:_0x20a844,SecretId:_0x2c72a8,SecretKey:_0x18bba7}=await this[_0x584a6c(0x1a5)](_0x584a6c(0x1cc));this[_0x584a6c(0x16f)]=new TENCENTCOS({'SecretId':_0x2c72a8,'SecretKey':_0x18bba7,'FileParallelLimit':0xa});try{const _0x2827b4=await this[_0x584a6c(0x18f)][_0x584a6c(0x1bd)]([_0x584a6c(0x15d)])||0x0,_0x396b2a=await this[_0x584a6c(0x17c)](_0x1da32c);return await this['uploadFileByTencentCos']({'filename':_0x233c50,'buffer':_0x396b2a,'dir':_0x5f07fc,'fileTyle':''});}catch(_0x25b4a6){console['log'](_0x584a6c(0x199),_0x25b4a6);throw new common_1[(_0x584a6c(0x188))](_0x584a6c(0x198),common_1[_0x584a6c(0x16e)][_0x584a6c(0x1c1)]);}}async[_0x1db802(0x192)]({filename:_0x5e6db8,buffer:_0xefbe9c,dir:_0x363455,fileTyle:fileTyle='png'}){const _0x2e2679=_0x1db802,{region:_0x188c0a,bucket:_0x2cb25a,accessKeyId:_0x3372a2,accessKeySecret:_0x5bcba4}=await this['getUploadConfig'](_0x2e2679(0x1c0)),_0x5cf5ae=new ALIOSS({'region':(0x0,utils_1[_0x2e2679(0x19d)])(_0x188c0a),'accessKeyId':_0x3372a2,'accessKeySecret':_0x5bcba4,'bucket':(0x0,utils_1[_0x2e2679(0x19d)])(_0x2cb25a)});try{return console[_0x2e2679(0x1b0)](_0x2e2679(0x15c)),new Promise((_0x34437d,_0x37ccd7)=>{const _0x4306b0=_0x2e2679;_0x5cf5ae[_0x4306b0(0x1b5)](_0x363455+'/'+(_0x5e6db8||(0x0,utils_1[_0x4306b0(0x1b3)])()+'.'+fileTyle),_0xefbe9c)[_0x4306b0(0x161)](_0x2ef885=>{const _0x12a68c=_0x4306b0;_0x34437d(_0x2ef885[_0x12a68c(0x160)]);})[_0x4306b0(0x1ad)](_0x576354=>{_0x37ccd7(_0x576354);});});}catch(_0x18218a){throw new common_1[(_0x2e2679(0x188))](_0x2e2679(0x1ab),common_1['HttpStatus']['BAD_REQUEST']);}}async[_0x1db802(0x1ae)]({filename:_0x2d34a9,url:_0x2184e6,dir:_0x531ac0}){const _0x36534c=_0x1db802,{region:_0x2f6e59,bucket:_0x43e361,accessKeyId:_0x182d41,accessKeySecret:_0x5d876a}=await this[_0x36534c(0x1a5)]('ali'),_0x3dda9e=new ALIOSS({'region':_0x2f6e59,'accessKeyId':_0x182d41,'accessKeySecret':_0x5d876a,'bucket':_0x43e361});try{const _0x5b62f8=await this[_0x36534c(0x18f)][_0x36534c(0x1bd)]([_0x36534c(0x15d)])||0x0;if(Number(_0x5b62f8)===0x1){const _0x4e2f7c={'url':_0x2184e6,'cosParams':{'region':_0x2f6e59,'bucket':_0x43e361,'accessKeyId':_0x182d41,'accessKeySecret':_0x5d876a},'cosType':_0x36534c(0x166)},_0x519e6f=await this[_0x36534c(0x18f)][_0x36534c(0x1bd)]([_0x36534c(0x162)])||_0x36534c(0x1c4),_0x14dd13=await axios_1[_0x36534c(0x167)][_0x36534c(0x1b8)](_0x519e6f+'/mj/replaceUpload',_0x4e2f7c);if(!(_0x14dd13===null||_0x14dd13===void 0x0?void 0x0:_0x14dd13[_0x36534c(0x1c7)]))throw new common_1['HttpException'](_0x36534c(0x1b6),common_1['HttpStatus'][_0x36534c(0x1c1)]);return _0x14dd13['data'];}else{const _0x395751=await this[_0x36534c(0x17c)](_0x2184e6);return await this[_0x36534c(0x192)]({'filename':_0x2d34a9,'buffer':_0x395751,'dir':_0x531ac0});}}catch(_0x4769be){throw new common_1[(_0x36534c(0x188))](_0x36534c(0x1b6),common_1[_0x36534c(0x16e)][_0x36534c(0x1c1)]);}}async[_0x1db802(0x1c6)]({filename:filename='',buffer:_0x820b84,dir:dir='ai',fileTyle:fileTyle=_0x1db802(0x184)}){const _0xc3eed2=_0x1db802;var _0x235735;const {key:_0x924f0,uploadPath:_0xe22baa}=await this[_0xc3eed2(0x1a5)](_0xc3eed2(0x19b));let _0x1869e8=_0xe22baa[_0xc3eed2(0x174)]('/')?_0xe22baa[_0xc3eed2(0x18b)](0x0,-0x1):_0xe22baa;const _0xf2dfe4=new FormData();_0xf2dfe4[_0xc3eed2(0x181)]('source',_0x820b84),_0xf2dfe4['append'](_0xc3eed2(0x1c2),_0x924f0);try{const _0x2a2430=await axios_1['default'][_0xc3eed2(0x1b8)](_0x1869e8,_0xf2dfe4,{'headers':{'X-API-Key':_0x924f0}});if((_0x2a2430===null||_0x2a2430===void 0x0?void 0x0:_0x2a2430[_0xc3eed2(0x1aa)])===0xc8)return _0x2a2430[_0xc3eed2(0x1c7)][_0xc3eed2(0x187)][_0xc3eed2(0x160)];else console[_0xc3eed2(0x1b0)](_0xc3eed2(0x163),_0x2a2430===null||_0x2a2430===void 0x0?void 0x0:_0x2a2430[_0xc3eed2(0x1c7)][_0xc3eed2(0x194)],_0x2a2430===null||_0x2a2430===void 0x0?void 0x0:_0x2a2430['data'][_0xc3eed2(0x171)]['message']),common_1[_0xc3eed2(0x19a)]['error']('上传图片失败[Chevereto]',JSON[_0xc3eed2(0x185)](_0x2a2430['data']));}catch(_0x108032){console[_0xc3eed2(0x1b0)](_0xc3eed2(0x1ce),_0x108032);throw new common_1['HttpException'](_0xc3eed2(0x190)+((_0x235735=_0x108032['response'])===null||_0x235735===void 0x0?void 0x0:_0x235735[_0xc3eed2(0x1c7)][_0xc3eed2(0x171)][_0xc3eed2(0x16a)]),common_1['HttpStatus']['BAD_REQUEST']);}}async[_0x1db802(0x196)]({filename:_0xbc8898,url:_0x4a7809,dir:_0x2a25b4}){const _0x4c82af=_0x1db802;try{const _0x3d9886=await this['globalConfigService'][_0x4c82af(0x1bd)](['mjProxy'])||0x0;if(Number(_0x3d9886)===0x1){const {key:_0xaf8e9e,uploadPath:_0xae0fc6}=await this['getUploadConfig']('chevereto');let _0x230f4b=_0xae0fc6[_0x4c82af(0x174)]('/')?_0xae0fc6[_0x4c82af(0x18b)](0x0,-0x1):_0xae0fc6;const _0x47f7b7={'cosType':_0x4c82af(0x19b),'url':_0x4a7809,'cosParams':{'key':_0xaf8e9e,'uploadPath':_0x230f4b}},_0x1ec2e6=await this[_0x4c82af(0x18f)]['getConfigs']([_0x4c82af(0x162)])||_0x4c82af(0x1c4),_0x2011fb=await axios_1[_0x4c82af(0x167)][_0x4c82af(0x1b8)](_0x1ec2e6+'/mj/replaceUpload',_0x47f7b7);if(!_0x2011fb['data'])throw new common_1[(_0x4c82af(0x188))]('上传图片失败[Chevereto][url]',common_1['HttpStatus'][_0x4c82af(0x1c1)]);return _0x2011fb[_0x4c82af(0x1c7)];}else{const _0x5f09d8=await this[_0x4c82af(0x17c)](_0x4a7809);return await this[_0x4c82af(0x1c6)]({'filename':_0xbc8898,'buffer':_0x5f09d8,'dir':_0x2a25b4});}}catch(_0x25d2fd){console[_0x4c82af(0x1b0)](_0x4c82af(0x1ce),_0x25d2fd);throw new common_1[(_0x4c82af(0x188))](_0x25d2fd['response'],common_1['HttpStatus'][_0x4c82af(0x1c1)]);}}async[_0x1db802(0x1a5)](_0x21844a){const _0x1fbaec=_0x1db802;if(_0x21844a===_0x1fbaec(0x1c0)){const {aliOssRegion:_0x7c59a6,aliOssBucket:_0x5eb50a,aliOssAccessKeyId:_0x1af898,aliOssAccessKeySecret:_0x2cd0ff}=await this[_0x1fbaec(0x18f)][_0x1fbaec(0x1bd)](['aliOssRegion',_0x1fbaec(0x165),_0x1fbaec(0x19c),_0x1fbaec(0x169)]);return{'region':_0x7c59a6,'bucket':_0x5eb50a,'accessKeyId':_0x1af898,'accessKeySecret':_0x2cd0ff};}if(_0x21844a===_0x1fbaec(0x1cc)){const {cosBucket:_0x58f0e9,cosRegion:_0x1c6911,cosSecretId:_0x2208b3,cosSecretKey:_0x17b610,tencentCosAcceleratedDomain:_0x6c09bc}=await this[_0x1fbaec(0x18f)][_0x1fbaec(0x1bd)]([_0x1fbaec(0x1cd),_0x1fbaec(0x170),_0x1fbaec(0x16b),'cosSecretKey','tencentCosAcceleratedDomain']);return{'Bucket':_0x58f0e9,'Region':_0x1c6911,'SecretId':_0x2208b3,'SecretKey':_0x17b610,'acceleratedDomain':_0x6c09bc};}if(_0x21844a===_0x1fbaec(0x19b)){const {cheveretoKey:_0x397950,cheveretoUploadPath:_0x104a9b}=await this[_0x1fbaec(0x18f)][_0x1fbaec(0x1bd)]([_0x1fbaec(0x1a4),'cheveretoUploadPath']);return{'key':_0x397950,'uploadPath':_0x104a9b};}}async['test'](){const _0x331780=_0x1db802,_0x25bc4d={'filename':_0x331780(0x173),'dir':'mj','url':_0x331780(0x191)},_0x420c62=await this[_0x331780(0x1a0)](_0x25bc4d);return console['log'](_0x331780(0x1a3),_0x420c62),_0x420c62;}async[_0x1db802(0x17c)](_0x469e42){const _0x52690f=_0x1db802,_0x350178=await this[_0x52690f(0x18f)]['getConfigs'](['mjProxy'])||0x0,_0x2f1323=await axios_1[_0x52690f(0x167)]['get'](_0x469e42,{'responseType':'stream'});return new Promise((_0x2f36b7,_0x8ee28)=>{streamToBuffer(_0x2f1323['data'],(_0x18420d,_0x2e48b8)=>{const _0x29badb=_0x5357;if(_0x18420d)throw new common_1['HttpException'](_0x29badb(0x1cb),common_1['HttpStatus']['BAD_REQUEST']);else _0x2f36b7(_0x2e48b8);});});}};UploadService=__decorate([(0x0,common_1[_0x1db802(0x1ac)])(),__metadata(_0x1db802(0x1bb),[globalConfig_service_1['GlobalConfigService']])],UploadService),exports[_0x1db802(0x1bc)]=UploadService;function _0x1d96(){const _0x6244b1=['uploadFileByCheveretoFromUrl','debug','上传图片失败[ten][url]','TODO->error:\x20\x20','Logger','chevereto','aliOssAccessKeyId','removeSpecialCharacters','decorate','6693mslnaY','uploadFileFromUrl','ISDEV','6cLehmq','res:\x20','cheveretoKey','getUploadConfig','140barEof','object','https://$2','15756672gVyhVy','status','上传图片失败[ali]','Injectable','catch','uploadFileByAliOssFromUrl','使用阿里云OSS上传','log','metadata','STANDARD','createRandomUid','596LWZhKy','put','上传图片失败[ALI][url]','aliOssStatus','post','split','uploadFileByTencentCos','design:paramtypes','UploadService','getConfigs','../globalConfig/globalConfig.service','11BYOJqE','ali','BAD_REQUEST','key','@nestjs/common','http://172.247.48.137:8000','getUploadType','uploadFileByChevereto','data','__metadata','上传失败:\x20','https://','获取图片资源失败、请重新试试吧！','tencent','cosBucket','error:\x20','ali-oss','length','ali\x20开始上传','mjProxy','8621650rzyBcP','form-data','url','then','mjProxyUrl','Chevereto\x20--->\x20res','tencentCosStatus','aliOssBucket','aliyun','default','9731313FaNuqv','aliOssAccessKeySecret','message','cosSecretId','cos\x20->\x20err:\x20','1144UFlaBO','HttpStatus','tencentCos','cosRegion','error','请先前往后台配置上传图片的方式','mjtest.png','endsWith',',\x20类型:\x20',',\x20Chevereto:\x20',',\x20阿里云:\x20','Location','26104IJmZOY','cheveretoStatus','uploadFile','getBufferFromUrl','toString','env','getOwnPropertyDescriptor','../../common/utils','append','当前已开启全球加速----------------->','putObject','png','stringify','axios','image','HttpException','准备上传文件:\x20','defineProperty','slice','replace','mjdev','3334ujJiUd','globalConfigService','上传图片失败[Chevereto|buffer]\x20-->\x20','https://cdn.discordapp.com/attachments/1097409128491651135/1169910551275638855/snine_60b5c001b_A_young_girl_smiles_brightly_in_the_pure_blue_f_8a41fe5f-5101-4c1e-b948-a748a0583577.png?ex=65571f1b&is=6544aa1b&hm=b82f2d88224eb7942e24c63a8e519c7693de12a2b96daa0f327dfb8f691b1480&','uploadFileByAliOss','1207740VjAJxI','code','上传配置状态\x20-\x20腾讯云:\x20'];_0x1d96=function(){return _0x6244b1;};return _0x1d96();}