'use strict';const _0x4a1375=_0x1a7f;(function(_0x374842,_0x266223){const _0x5df336=_0x1a7f,_0x180065=_0x374842();while(!![]){try{const _0x16beb1=-parseInt(_0x5df336(0x9b))/0x1*(-parseInt(_0x5df336(0x93))/0x2)+parseInt(_0x5df336(0xce))/0x3+parseInt(_0x5df336(0xa9))/0x4+parseInt(_0x5df336(0xc5))/0x5*(-parseInt(_0x5df336(0xad))/0x6)+parseInt(_0x5df336(0xb3))/0x7*(-parseInt(_0x5df336(0xc3))/0x8)+-parseInt(_0x5df336(0xd8))/0x9+parseInt(_0x5df336(0xcd))/0xa;if(_0x16beb1===_0x266223)break;else _0x180065['push'](_0x180065['shift']());}catch(_0x136de3){_0x180065['push'](_0x180065['shift']());}}}(_0x11f3,0x80a75));function _0x1a7f(_0x47ec63,_0x12c11b){const _0x11f3ff=_0x11f3();return _0x1a7f=function(_0x1a7f8e,_0x1399c9){_0x1a7f8e=_0x1a7f8e-0x8f;let _0x2d1666=_0x11f3ff[_0x1a7f8e];return _0x2d1666;},_0x1a7f(_0x47ec63,_0x12c11b);}var __decorate=this&&this[_0x4a1375(0xc1)]||function(_0x217f2c,_0x1f76ff,_0x5cdd65,_0xc9f122){const _0x254d1b=_0x4a1375;var _0x16822a=arguments[_0x254d1b(0xc9)],_0x45bdd2=_0x16822a<0x3?_0x1f76ff:_0xc9f122===null?_0xc9f122=Object[_0x254d1b(0xa8)](_0x1f76ff,_0x5cdd65):_0xc9f122,_0x4cabd1;if(typeof Reflect===_0x254d1b(0x9a)&&typeof Reflect['decorate']===_0x254d1b(0x99))_0x45bdd2=Reflect[_0x254d1b(0x95)](_0x217f2c,_0x1f76ff,_0x5cdd65,_0xc9f122);else{for(var _0x24cac7=_0x217f2c['length']-0x1;_0x24cac7>=0x0;_0x24cac7--)if(_0x4cabd1=_0x217f2c[_0x24cac7])_0x45bdd2=(_0x16822a<0x3?_0x4cabd1(_0x45bdd2):_0x16822a>0x3?_0x4cabd1(_0x1f76ff,_0x5cdd65,_0x45bdd2):_0x4cabd1(_0x1f76ff,_0x5cdd65))||_0x45bdd2;}return _0x16822a>0x3&&_0x45bdd2&&Object['defineProperty'](_0x1f76ff,_0x5cdd65,_0x45bdd2),_0x45bdd2;},__metadata=this&&this[_0x4a1375(0x92)]||function(_0x3d03f7,_0x332d4a){const _0x2fc445=_0x4a1375;if(typeof Reflect===_0x2fc445(0x9a)&&typeof Reflect['metadata']===_0x2fc445(0x99))return Reflect[_0x2fc445(0xb1)](_0x3d03f7,_0x332d4a);},__param=this&&this['__param']||function(_0x1722e5,_0x495659){return function(_0x39ca53,_0x40bbb5){_0x495659(_0x39ca53,_0x40bbb5,_0x1722e5);};};Object['defineProperty'](exports,_0x4a1375(0xac),{'value':!![]}),exports['MenuService']=void 0x0;const common_1=require('@nestjs/common'),typeorm_1=require(_0x4a1375(0xb0)),typeorm_2=require(_0x4a1375(0xd4)),menu_entity_1=require('./menu.entity');let MenuService=class MenuService{constructor(_0x31ebb0){const _0x7dec0a=_0x4a1375;this[_0x7dec0a(0xd7)]=_0x31ebb0;}async[_0x4a1375(0xd9)](){const _0x27e9df=_0x4a1375;await this[_0x27e9df(0xd1)]();}async['initMenu'](){const _0x493d7e=_0x4a1375,_0x47c3cf=await this[_0x493d7e(0xd7)]['count']();if(_0x47c3cf>0x0)return;const _0x3df048=[{'menuTipText':'对话聊天','menuIcon':'eos-icons:typing','menuName':_0x493d7e(0xdc),'menuPath':_0x493d7e(0xc2),'menuType':0x0,'menuPlatform':0x1,'order':0x64},{'menuTipText':_0x493d7e(0xbb),'menuIcon':_0x493d7e(0xa4),'menuName':'AppStore','menuPath':_0x493d7e(0xab),'menuType':0x0,'menuPlatform':0x1,'order':0xc8},{'menuTipText':_0x493d7e(0x9d),'menuIcon':_0x493d7e(0x9e),'menuName':_0x493d7e(0xaf),'menuPath':_0x493d7e(0x9f),'menuType':0x0,'menuPlatform':0x1,'order':0x12c},{'menuTipText':_0x493d7e(0xb9),'menuIcon':'solar:album-line-duotone','menuName':_0x493d7e(0xa3),'menuPath':'/market','menuType':0x0,'menuPlatform':0x1,'order':0x190},{'menuTipText':_0x493d7e(0xd2),'menuIcon':_0x493d7e(0xbd),'menuName':_0x493d7e(0xca),'menuPath':_0x493d7e(0xdb),'menuType':0x0,'menuPlatform':0x1,'order':0x1f4},{'menuTipText':_0x493d7e(0xb2),'menuIcon':_0x493d7e(0xb8),'menuName':_0x493d7e(0xbf),'menuPath':_0x493d7e(0xa6),'menuType':0x0,'menuPlatform':0x1,'order':0x258},{'menuTipText':'会员中心','menuIcon':_0x493d7e(0xc0),'menuName':_0x493d7e(0x91),'menuPath':_0x493d7e(0xbc),'menuType':0x0,'menuPlatform':0x1,'order':0x2bc},{'menuTipText':'推广计划','menuIcon':_0x493d7e(0x9c),'menuName':_0x493d7e(0xa7),'menuPath':_0x493d7e(0xc7),'menuType':0x0,'menuPlatform':0x1,'order':0x320}],_0x2898b3=[{'menuTipText':_0x493d7e(0x90),'menuIcon':_0x493d7e(0xcf),'menuName':'Chat','menuPath':'/chat','menuType':0x0,'menuPlatform':0x0,'order':0x64},{'menuTipText':_0x493d7e(0xbb),'menuIcon':_0x493d7e(0xa4),'menuName':_0x493d7e(0xb5),'menuPath':_0x493d7e(0xab),'menuType':0x0,'menuPlatform':0x0,'order':0xc8},{'menuTipText':'专业绘画','menuIcon':_0x493d7e(0x9e),'menuName':_0x493d7e(0xaf),'menuPath':_0x493d7e(0x9f),'menuType':0x0,'menuPlatform':0x0,'order':0x12c},{'menuTipText':_0x493d7e(0xb2),'menuIcon':_0x493d7e(0xb8),'menuName':'Mind','menuPath':'/mind','menuType':0x0,'menuPlatform':0x0,'order':0x190},{'menuTipText':_0x493d7e(0xcb),'menuIcon':_0x493d7e(0xc8),'menuName':_0x493d7e(0xd3),'menuPath':_0x493d7e(0x94),'menuType':0x0,'menuPlatform':0x0,'order':0x1f4}],_0x22a001=[..._0x3df048,..._0x2898b3];await this[_0x493d7e(0xd7)]['save'](_0x22a001);}async[_0x4a1375(0xc6)](_0x59b019){const _0x53c220=_0x4a1375,{menuPlatform:_0x5c718c}=_0x59b019,_0x2871dd={};return _0x5c718c&&(_0x2871dd[_0x53c220(0xcc)]=_0x5c718c),await this['menuEntity'][_0x53c220(0xaa)]({'where':_0x2871dd,'order':{'order':'ASC'}});}async[_0x4a1375(0x97)](_0x58b8c1){const _0x4d1008=_0x4a1375,{menuPlatform:_0x487c95}=_0x58b8c1,_0x1a7d7a={'isShow':!![]};return _0x487c95&&(_0x1a7d7a['menuPlatform']=_0x487c95),await this['menuEntity'][_0x4d1008(0xaa)]({'where':_0x1a7d7a,'order':{'order':'ASC'}});}async['visibleMenu'](_0x1f3e0f){const _0x29725a=_0x4a1375,{id:_0x252000}=_0x1f3e0f;if(!_0x252000)return;const _0x320605=await this[_0x29725a(0xd7)][_0x29725a(0xae)]({'where':{'id':_0x252000}});if(!_0x320605)return;const {isShow:_0x3d4fa6}=_0x320605,_0x118dc6=await this['menuEntity'][_0x29725a(0xb4)]({'id':_0x252000},{'isShow':!_0x3d4fa6});return _0x118dc6['affected']>0x0;}async[_0x4a1375(0x98)](_0x17f992){const _0x599486=_0x4a1375,{id:_0x561f73}=_0x17f992;_0x17f992['isSystem']?_0x17f992[_0x599486(0x8f)]='':_0x17f992[_0x599486(0xba)]='';delete _0x17f992['isSystem'];try{if(_0x561f73){const _0x58cd2b=await this['menuEntity'][_0x599486(0xb4)]({'id':_0x561f73},_0x17f992);return _0x58cd2b[_0x599486(0xbe)]>0x0;}else{const _0x30a00d=await this[_0x599486(0xd7)][_0x599486(0xc4)](_0x17f992);return _0x30a00d;}}catch(_0x4d5831){throw new common_1[(_0x599486(0xa5))](_0x599486(0x96),common_1['HttpStatus']['BAD_REQUEST']);}}async[_0x4a1375(0xa1)](_0x2c711f){const _0x1ff2f0=_0x4a1375,{id:_0x5e6681}=_0x2c711f;if(!_0x5e6681)throw new common_1['HttpException'](_0x1ff2f0(0xdd),common_1[_0x1ff2f0(0xa2)]['BAD_REQUEST']);const _0x40c795=await this[_0x1ff2f0(0xd7)][_0x1ff2f0(0xb6)]({'id':_0x5e6681});return _0x40c795;}async['updateIcon'](_0x4443f6){const _0x151aaf=_0x4a1375,{id:_0x2360a7,menuIcon:_0x1fbccc,menuTipText:_0x4f9233,order:_0xd233ca}=_0x4443f6;if(!_0x2360a7||!_0x1fbccc||!_0x4f9233||!_0xd233ca)throw new common_1['HttpException'](_0x151aaf(0xdd),common_1[_0x151aaf(0xa2)][_0x151aaf(0xda)]);const _0x5f028b=await this['menuEntity'][_0x151aaf(0xb4)]({'id':_0x2360a7},{'menuIcon':_0x1fbccc,'menuTipText':_0x4f9233,'order':_0xd233ca});return _0x5f028b[_0x151aaf(0xbe)]>0x0;}};function _0x11f3(){const _0x4c031f=['6249910cYTTDL','1056855AZDBQa','eos-icons:typing','MenuService','initMenu','基础绘画','UserCenter','typeorm','InjectRepository','Injectable','menuEntity','2060478BrTLHB','onModuleInit','BAD_REQUEST','/draw','Chat','缺失必要参数!','menuPath','对话聊天','Pay','__metadata','622IVnmgL','/user-center','decorate','操作菜单失败!','menuListFront','setMenu','function','object','949QTbsOs','uiw:share','专业绘画','ri:landscape-line','/midjourney','Repository','delMenu','HttpStatus','Market','ant-design:appstore-outlined','HttpException','/mind','Share','getOwnPropertyDescriptor','1974440EVtahd','find','/app-store','__esModule','7170dTvTym','findOne','Midjourney','@nestjs/typeorm','metadata','思维导图','7RrRPie','update','AppStore','delete','MenuEntity','icon-park-outline:mindmap-map','绘画广场','menuIframeUrl','应用广场','/pay','fluent:draw-image-24-regular','affected','Mind','icon-park-outline:shopping','__decorate','/chat','1618384XmIOfC','save','3380gPqfVz','queryMenu','/share','ri:account-pin-box-line','length','Draw','个人中心','menuPlatform'];_0x11f3=function(){return _0x4c031f;};return _0x11f3();}MenuService=__decorate([(0x0,common_1[_0x4a1375(0xd6)])(),__param(0x0,(0x0,typeorm_1[_0x4a1375(0xd5)])(menu_entity_1[_0x4a1375(0xb7)])),__metadata('design:paramtypes',[typeorm_2[_0x4a1375(0xa0)]])],MenuService),exports[_0x4a1375(0xd0)]=MenuService;