'use strict';const _0x4d844f=_0x587a;(function(_0x2dc531,_0x1d84aa){const _0x4e3693=_0x587a,_0x23a944=_0x2dc531();while(!![]){try{const _0x8a4fc0=-parseInt(_0x4e3693(0x159))/0x1*(-parseInt(_0x4e3693(0x160))/0x2)+parseInt(_0x4e3693(0x14d))/0x3+parseInt(_0x4e3693(0x15a))/0x4*(-parseInt(_0x4e3693(0x13d))/0x5)+parseInt(_0x4e3693(0x146))/0x6+parseInt(_0x4e3693(0x155))/0x7*(-parseInt(_0x4e3693(0x162))/0x8)+-parseInt(_0x4e3693(0x13a))/0x9+-parseInt(_0x4e3693(0x15e))/0xa*(-parseInt(_0x4e3693(0x136))/0xb);if(_0x8a4fc0===_0x1d84aa)break;else _0x23a944['push'](_0x23a944['shift']());}catch(_0x3a5c98){_0x23a944['push'](_0x23a944['shift']());}}}(_0x1c9d,0x27c75));var __decorate=this&&this['__decorate']||function(_0x1cae81,_0x47cb97,_0x4262ad,_0x3c9216){const _0x40eca1=_0x587a;var _0x235624=arguments[_0x40eca1(0x152)],_0x5324dd=_0x235624<0x3?_0x47cb97:_0x3c9216===null?_0x3c9216=Object['getOwnPropertyDescriptor'](_0x47cb97,_0x4262ad):_0x3c9216,_0x25299e;if(typeof Reflect==='object'&&typeof Reflect[_0x40eca1(0x156)]===_0x40eca1(0x14c))_0x5324dd=Reflect[_0x40eca1(0x156)](_0x1cae81,_0x47cb97,_0x4262ad,_0x3c9216);else{for(var _0x24be33=_0x1cae81[_0x40eca1(0x152)]-0x1;_0x24be33>=0x0;_0x24be33--)if(_0x25299e=_0x1cae81[_0x24be33])_0x5324dd=(_0x235624<0x3?_0x25299e(_0x5324dd):_0x235624>0x3?_0x25299e(_0x47cb97,_0x4262ad,_0x5324dd):_0x25299e(_0x47cb97,_0x4262ad))||_0x5324dd;}return _0x235624>0x3&&_0x5324dd&&Object[_0x40eca1(0x14a)](_0x47cb97,_0x4262ad,_0x5324dd),_0x5324dd;},__metadata=this&&this['__metadata']||function(_0x24fd6a,_0x513329){const _0x39a99d=_0x587a;if(typeof Reflect===_0x39a99d(0x132)&&typeof Reflect[_0x39a99d(0x135)]==='function')return Reflect['metadata'](_0x24fd6a,_0x513329);},__param=this&&this[_0x4d844f(0x141)]||function(_0x49bc71,_0x288241){return function(_0x4883ad,_0x3dd3ad){_0x288241(_0x4883ad,_0x3dd3ad,_0x49bc71);};};function _0x1c9d(){const _0xe133ac=['272NdhsXV','active','userBalanceService','cleanQueue','checkLimit','缺少必要参数！','InjectQueue','MJDRAW','object','mjDrawQueue','mjTimeoutMs','metadata','131813HQuBkq','globalConfigService','getConfigs','../midjourney/midjourney.service','2819574cBOveE','UPSCALE','addMjDrawQueue','5CMjvFZ','@nestjs/bull','push','../userBalance/userBalance.service','__param','createRandomUid','onApplicationBootstrap','clean','BAD_REQUEST','304530vmyhIs','mjDraw','GlobalConfigService','getDrawActionDetail','defineProperty','IMAGINE','function','238164wPLIzi','user','validateBalance','jobIds','HttpStatus','length','assign','QueueService','26313whYQcU','decorate','../globalConfig/globalConfig.service','midjourneyService','48066nzYMxF','71828jGKjJJ','@nestjs/common','../../common/utils','HttpException','250tBcVUb','addDrawQueue','8RWQQMk','add'];_0x1c9d=function(){return _0xe133ac;};return _0x1c9d();}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x4d844f(0x154)]=void 0x0;const common_1=require(_0x4d844f(0x15b)),bull_1=require(_0x4d844f(0x13e)),utils_1=require(_0x4d844f(0x15c)),midjourney_service_1=require(_0x4d844f(0x139)),userBalance_service_1=require(_0x4d844f(0x140)),globalConfig_service_1=require(_0x4d844f(0x157));function _0x587a(_0x64623d,_0x55ec1d){const _0x1c9dc2=_0x1c9d();return _0x587a=function(_0x587a5f,_0x3b4114){_0x587a5f=_0x587a5f-0x12e;let _0x23978e=_0x1c9dc2[_0x587a5f];return _0x23978e;},_0x587a(_0x64623d,_0x55ec1d);}let QueueService=class QueueService{constructor(_0x4c37ee,_0x5995db,_0x169d0d,_0x57fdac){const _0x48617d=_0x4d844f;this['mjDrawQueue']=_0x4c37ee,this[_0x48617d(0x158)]=_0x5995db,this[_0x48617d(0x164)]=_0x169d0d,this['globalConfigService']=_0x57fdac,this[_0x48617d(0x150)]=[];}async[_0x4d844f(0x143)](){const _0x30879c=_0x4d844f;await this[_0x30879c(0x133)][_0x30879c(0x144)](0x0,_0x30879c(0x163)),await this[_0x30879c(0x158)][_0x30879c(0x165)]();}async[_0x4d844f(0x13c)](_0x434055,_0x542e0c){const _0x219ec4=_0x4d844f,{imgUrl:_0x28f933,orderId:_0xfebc3f,action:_0x468ecd,drawId:_0x3e7235}=_0x434055;await this[_0x219ec4(0x158)][_0x219ec4(0x12e)](_0x542e0c),await this[_0x219ec4(0x164)][_0x219ec4(0x14f)](_0x542e0c,_0x219ec4(0x147),_0x468ecd===_0x219ec4(0x13b)?0x1:0x4);if(_0x468ecd===_0x219ec4(0x14b)){const _0x3c1e0a=''+(0x0,utils_1[_0x219ec4(0x142)])(),_0x1fd488=Object[_0x219ec4(0x153)](Object[_0x219ec4(0x153)]({},_0x434055),{'userId':_0x542e0c[_0x219ec4(0x14e)]['id'],'randomDrawId':_0x3c1e0a}),_0x1c0af4=await this['midjourneyService'][_0x219ec4(0x15f)](_0x1fd488),_0x333fcd=await this[_0x219ec4(0x137)][_0x219ec4(0x138)](['mjTimeoutMs'])||0x30d40,_0x4e991c=await this[_0x219ec4(0x133)][_0x219ec4(0x161)](_0x219ec4(0x147),{'id':_0x1c0af4['id'],'action':_0x468ecd,'userId':_0x542e0c[_0x219ec4(0x14e)]['id']},{'delay':0x3e8,'timeout':+_0x333fcd});return this[_0x219ec4(0x150)][_0x219ec4(0x13f)](_0x4e991c['id']),!![];}else{const {orderId:_0x1e3c3a,action:_0x502aaf,drawId:_0x3aee2d}=_0x434055,_0x2c084b=await this[_0x219ec4(0x158)][_0x219ec4(0x149)](_0x502aaf,_0x3aee2d,_0x1e3c3a),_0x465223=Object['assign'](Object['assign'](Object[_0x219ec4(0x153)]({},_0x434055),{'userId':_0x542e0c['user']['id']}),_0x2c084b),_0x1bb7e3=await this[_0x219ec4(0x158)][_0x219ec4(0x15f)](_0x465223),_0x46871b=await this['globalConfigService'][_0x219ec4(0x138)]([_0x219ec4(0x134)])||0x30d40,_0x35d941=await this[_0x219ec4(0x133)][_0x219ec4(0x161)](_0x219ec4(0x147),{'id':_0x1bb7e3['id'],'action':_0x502aaf,'userId':_0x542e0c[_0x219ec4(0x14e)]['id']},{'delay':0x3e8,'timeout':+_0x46871b});this[_0x219ec4(0x150)]['push'](_0x35d941['id']);return;}if(!_0x3e7235||!_0xfebc3f)throw new common_1[(_0x219ec4(0x15d))](_0x219ec4(0x12f),common_1[_0x219ec4(0x151)][_0x219ec4(0x145)]);}async['getQueue'](){return{'jobIds':this['jobIds']};}};QueueService=__decorate([__param(0x0,(0x0,bull_1[_0x4d844f(0x130)])(_0x4d844f(0x131))),__metadata('design:paramtypes',[Object,midjourney_service_1['MidjourneyService'],userBalance_service_1['UserBalanceService'],globalConfig_service_1[_0x4d844f(0x148)]])],QueueService),exports[_0x4d844f(0x154)]=QueueService;