'use strict';function _0x209f(_0x59e620,_0xb7a31){const _0x1bf548=_0x1bf5();return _0x209f=function(_0x209f5a,_0x508986){_0x209f5a=_0x209f5a-0x1bf;let _0xcdfa66=_0x1bf548[_0x209f5a];return _0xcdfa66;},_0x209f(_0x59e620,_0xb7a31);}const _0x20d565=_0x209f;function _0x1bf5(){const _0x83c563=['461301uWeTov','express-xml-bodyparser','./common/filters/allExceptions.filter','APIPREFIX','__esModule','1166787vBHfpS','view\x20engine','timeout','set','./common/filters/typeOrmQueryFailed.filter','TransformInterceptor','hbs','18216XmHrhV','ValidationPipe','TypeOrmQueryFailedFilter','defineProperty','templates/pages','7245070GxzDux','Logger','useGlobalPipes','Main','1284226SIxIgl','./public','./common/interceptors/transform.interceptor','useGlobalFilters','use','getHttpAdapter','8163wutNwz','setGlobalPrefix','@nestjs/core','compression','AppModule','3255688MJwGoM','./common/swagger','PORT','/nineai/swagger/docs','6jiAOPN','config','createSwagger','dotenv','getInstance','8604421CzZBTU'];_0x1bf5=function(){return _0x83c563;};return _0x1bf5();}(function(_0x305d99,_0x261053){const _0x35ffda=_0x209f,_0x41d2f6=_0x305d99();while(!![]){try{const _0x345925=parseInt(_0x35ffda(0x1cb))/0x1+-parseInt(_0x35ffda(0x1e0))/0x2+-parseInt(_0x35ffda(0x1d0))/0x3+parseInt(_0x35ffda(0x1c1))/0x4+parseInt(_0x35ffda(0x1dc))/0x5+parseInt(_0x35ffda(0x1c5))/0x6*(parseInt(_0x35ffda(0x1ca))/0x7)+-parseInt(_0x35ffda(0x1d7))/0x8*(parseInt(_0x35ffda(0x1e6))/0x9);if(_0x345925===_0x261053)break;else _0x41d2f6['push'](_0x41d2f6['shift']());}catch(_0x1cf3bd){_0x41d2f6['push'](_0x41d2f6['shift']());}}}(_0x1bf5,0xd1447));Object[_0x20d565(0x1da)](exports,_0x20d565(0x1cf),{'value':!![]});const Dotenv=require(_0x20d565(0x1c8));Dotenv[_0x20d565(0x1c6)]({'path':'.env'});const core_1=require(_0x20d565(0x1e8)),app_module_1=require('./app.module'),swagger_1=require(_0x20d565(0x1c2)),allExceptions_filter_1=require(_0x20d565(0x1cd)),typeOrmQueryFailed_filter_1=require(_0x20d565(0x1d4)),common_1=require('@nestjs/common'),transform_interceptor_1=require(_0x20d565(0x1e2)),main_1=require('./config/main'),initDatabase_1=require('./modules/database/initDatabase'),compression=require(_0x20d565(0x1bf)),xmlBodyParser=require(_0x20d565(0x1cc)),path_1=require('path');async function bootstrap(){const _0x52a183=_0x20d565;await(0x0,initDatabase_1['initDatabase'])();const _0x317985=await core_1['NestFactory']['create'](app_module_1[_0x52a183(0x1c0)]);_0x317985[_0x52a183(0x1e4)](compression());const _0x2787f6=(0x0,path_1['resolve'])(__dirname,_0x52a183(0x1e1));_0x317985[_0x52a183(0x1e4)](xmlBodyParser()),_0x317985['enableCors'](),_0x317985[_0x52a183(0x1e7)](main_1[_0x52a183(0x1ce)]),_0x317985['useGlobalInterceptors'](new transform_interceptor_1[(_0x52a183(0x1d5))]()),_0x317985[_0x52a183(0x1e3)](new typeOrmQueryFailed_filter_1[(_0x52a183(0x1d9))]()),_0x317985['useGlobalFilters'](new allExceptions_filter_1['AllExceptionsFilter']()),_0x317985[_0x52a183(0x1de)](new common_1[(_0x52a183(0x1d8))]()),_0x317985[_0x52a183(0x1e5)]()['getInstance']()[_0x52a183(0x1d3)]('views',_0x52a183(0x1db)),_0x317985['getHttpAdapter']()[_0x52a183(0x1c9)]()[_0x52a183(0x1d3)](_0x52a183(0x1d1),_0x52a183(0x1d6)),(0x0,swagger_1[_0x52a183(0x1c7)])(_0x317985);const _0x86947f=await _0x317985['listen'](main_1[_0x52a183(0x1c3)],()=>{const _0xf1d713=_0x52a183;common_1[_0xf1d713(0x1dd)]['log']('服务启动成功:\x20http://localhost:'+main_1[_0xf1d713(0x1c3)]+_0xf1d713(0x1c4),_0xf1d713(0x1df));});_0x86947f[_0x52a183(0x1d2)]=0x5*0x3c*0x3e8;}bootstrap();