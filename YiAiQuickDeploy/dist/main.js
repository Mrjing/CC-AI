'use strict';const _0x32e724=_0x39ad;(function(_0x15c0d9,_0x18e0de){const _0x35dae6=_0x39ad,_0x27f562=_0x15c0d9();while(!![]){try{const _0x32f046=parseInt(_0x35dae6(0x1c8))/0x1+parseInt(_0x35dae6(0x1ea))/0x2+parseInt(_0x35dae6(0x1e0))/0x3*(-parseInt(_0x35dae6(0x1e1))/0x4)+-parseInt(_0x35dae6(0x1d7))/0x5+-parseInt(_0x35dae6(0x1ca))/0x6+parseInt(_0x35dae6(0x1e7))/0x7+-parseInt(_0x35dae6(0x1eb))/0x8*(-parseInt(_0x35dae6(0x1d4))/0x9);if(_0x32f046===_0x18e0de)break;else _0x27f562['push'](_0x27f562['shift']());}catch(_0x345fdd){_0x27f562['push'](_0x27f562['shift']());}}}(_0x52aa,0xb09ed));Object[_0x32e724(0x1c2)](exports,_0x32e724(0x1c1),{'value':!![]});const Dotenv=require(_0x32e724(0x1d2));Dotenv[_0x32e724(0x1da)]({'path':_0x32e724(0x1d8)});function _0x52aa(){const _0xccf436=['useGlobalFilters','useGlobalPipes','Main','4260ycMGWH','3164CYOMKR','compression','set','/ccai/swagger/docs','@nestjs/core','timeout','1988224GZozlq','@nestjs/common','TypeOrmQueryFailedFilter','661098pUCSxD','127640bWxZKn','enableCors','body-parser','createSwagger','Logger','AllExceptionsFilter','hbs','__esModule','defineProperty','APIPREFIX','./common/filters/typeOrmQueryFailed.filter','TransformInterceptor','initDatabase','./public','1331476aaUJEm','log','8544552Gdvcei','服务启动成功:\x20http://localhost:','./common/filters/allExceptions.filter','create','use','getInstance','PORT','./modules/database/initDatabase','dotenv','10mb','1548cRkcjT','ValidationPipe','useGlobalInterceptors','7097840PGujHw','.env','resolve','config','templates/pages','view\x20engine'];_0x52aa=function(){return _0xccf436;};return _0x52aa();}const core_1=require(_0x32e724(0x1e5)),app_module_1=require('./app.module'),swagger_1=require('./common/swagger'),allExceptions_filter_1=require(_0x32e724(0x1cc)),typeOrmQueryFailed_filter_1=require(_0x32e724(0x1c4)),common_1=require(_0x32e724(0x1e8)),transform_interceptor_1=require('./common/interceptors/transform.interceptor'),main_1=require('./config/main'),initDatabase_1=require(_0x32e724(0x1d1)),compression=require(_0x32e724(0x1e2)),xmlBodyParser=require('express-xml-bodyparser'),path_1=require('path'),bodyParser=require(_0x32e724(0x1ed));function _0x39ad(_0x48bad9,_0x394fbf){const _0x52aa90=_0x52aa();return _0x39ad=function(_0x39ad97,_0x18f368){_0x39ad97=_0x39ad97-0x1c1;let _0x1a25b0=_0x52aa90[_0x39ad97];return _0x1a25b0;},_0x39ad(_0x48bad9,_0x394fbf);}async function bootstrap(){const _0x34f4c3=_0x32e724;await(0x0,initDatabase_1[_0x34f4c3(0x1c6)])();const _0x3664d4=await core_1['NestFactory'][_0x34f4c3(0x1cd)](app_module_1['AppModule']);_0x3664d4[_0x34f4c3(0x1ce)](bodyParser['json']({'limit':_0x34f4c3(0x1d3)})),_0x3664d4[_0x34f4c3(0x1ce)](compression());const _0x1ecfee=(0x0,path_1[_0x34f4c3(0x1d9)])(__dirname,_0x34f4c3(0x1c7));_0x3664d4[_0x34f4c3(0x1ce)](xmlBodyParser()),_0x3664d4[_0x34f4c3(0x1ec)](),_0x3664d4['setGlobalPrefix'](main_1[_0x34f4c3(0x1c3)]),_0x3664d4[_0x34f4c3(0x1d6)](new transform_interceptor_1[(_0x34f4c3(0x1c5))]()),_0x3664d4[_0x34f4c3(0x1dd)](new typeOrmQueryFailed_filter_1[(_0x34f4c3(0x1e9))]()),_0x3664d4[_0x34f4c3(0x1dd)](new allExceptions_filter_1[(_0x34f4c3(0x1f0))]()),_0x3664d4[_0x34f4c3(0x1de)](new common_1[(_0x34f4c3(0x1d5))]()),_0x3664d4['getHttpAdapter']()[_0x34f4c3(0x1cf)]()[_0x34f4c3(0x1e3)]('views',_0x34f4c3(0x1db)),_0x3664d4['getHttpAdapter']()[_0x34f4c3(0x1cf)]()[_0x34f4c3(0x1e3)](_0x34f4c3(0x1dc),_0x34f4c3(0x1f1)),(0x0,swagger_1[_0x34f4c3(0x1ee)])(_0x3664d4);const _0x50ad95=await _0x3664d4['listen'](main_1[_0x34f4c3(0x1d0)],()=>{const _0x92d36b=_0x34f4c3;common_1[_0x92d36b(0x1ef)][_0x92d36b(0x1c9)](_0x92d36b(0x1cb)+main_1[_0x92d36b(0x1d0)]+_0x92d36b(0x1e4),_0x92d36b(0x1df));});_0x50ad95[_0x34f4c3(0x1e6)]=0x5*0x3c*0x3e8;}bootstrap();