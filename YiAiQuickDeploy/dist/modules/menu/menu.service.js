'use strict';const _0x17f6d9=_0x2aa5;(function(_0x2ef4c6,_0x25de9a){const _0x393d25=_0x2aa5,_0x4f187a=_0x2ef4c6();while(!![]){try{const _0xec1133=parseInt(_0x393d25(0x15e))/0x1*(-parseInt(_0x393d25(0x140))/0x2)+parseInt(_0x393d25(0x17c))/0x3+-parseInt(_0x393d25(0x16b))/0x4+-parseInt(_0x393d25(0x16f))/0x5*(parseInt(_0x393d25(0x146))/0x6)+-parseInt(_0x393d25(0x15c))/0x7*(parseInt(_0x393d25(0x14c))/0x8)+-parseInt(_0x393d25(0x154))/0x9+parseInt(_0x393d25(0x138))/0xa*(parseInt(_0x393d25(0x168))/0xb);if(_0xec1133===_0x25de9a)break;else _0x4f187a['push'](_0x4f187a['shift']());}catch(_0x2de66d){_0x4f187a['push'](_0x4f187a['shift']());}}}(_0x5d83,0x87796));function _0x5d83(){const _0x56a6eb=['updateIcon','/chat','专业绘画','Mind','缺失必要参数!','menuIframeUrl','initMenu','/user-center','function','操作菜单失败!','icon-park-outline:mindmap-map','2850816mgiMUW','会员中心','AppStore','/draw','save','推广计划','/mind','object','14400910jaPLLz','MenuEntity','BAD_REQUEST','__esModule','Repository','HttpStatus','Midjourney','length','26IBOeqA','menuListFront','decorate','HttpException','delMenu','typeorm','30DpPIPZ','@nestjs/typeorm','Chat','Pay','ri:account-pin-box-line','uiw:share','949232mOTian','Share','基础绘画','solar:album-line-duotone','affected','对话聊天','onModuleInit','__metadata','5193342fGOEZk','getOwnPropertyDescriptor','ant-design:appstore-outlined','findOne','design:paramtypes','MenuService','思维导图','个人中心','14kSgxon','Market','21808PkKthk','update','metadata','menuPath','eos-icons:typing','ASC','/midjourney','menuEntity','绘画广场','/share','11MdMQac','fluent:draw-image-24-regular','menuPlatform','2925124LIMBqF','__param','/app-store','defineProperty','6330nKZBzB','应用广场'];_0x5d83=function(){return _0x56a6eb;};return _0x5d83();}function _0x2aa5(_0x4772dc,_0x244715){const _0x5d830a=_0x5d83();return _0x2aa5=function(_0x2aa57a,_0x7f3196){_0x2aa57a=_0x2aa57a-0x135;let _0x4b1724=_0x5d830a[_0x2aa57a];return _0x4b1724;},_0x2aa5(_0x4772dc,_0x244715);}var __decorate=this&&this['__decorate']||function(_0x3cd7b6,_0x27014e,_0x5e0778,_0x24e6bc){const _0x133b91=_0x2aa5;var _0x4034a9=arguments['length'],_0x13fe83=_0x4034a9<0x3?_0x27014e:_0x24e6bc===null?_0x24e6bc=Object[_0x133b91(0x155)](_0x27014e,_0x5e0778):_0x24e6bc,_0x4c8b33;if(typeof Reflect===_0x133b91(0x137)&&typeof Reflect[_0x133b91(0x142)]===_0x133b91(0x179))_0x13fe83=Reflect[_0x133b91(0x142)](_0x3cd7b6,_0x27014e,_0x5e0778,_0x24e6bc);else{for(var _0xedc819=_0x3cd7b6[_0x133b91(0x13f)]-0x1;_0xedc819>=0x0;_0xedc819--)if(_0x4c8b33=_0x3cd7b6[_0xedc819])_0x13fe83=(_0x4034a9<0x3?_0x4c8b33(_0x13fe83):_0x4034a9>0x3?_0x4c8b33(_0x27014e,_0x5e0778,_0x13fe83):_0x4c8b33(_0x27014e,_0x5e0778))||_0x13fe83;}return _0x4034a9>0x3&&_0x13fe83&&Object[_0x133b91(0x16e)](_0x27014e,_0x5e0778,_0x13fe83),_0x13fe83;},__metadata=this&&this[_0x17f6d9(0x153)]||function(_0x1b9e4b,_0x513897){const _0x31ac5e=_0x17f6d9;if(typeof Reflect===_0x31ac5e(0x137)&&typeof Reflect[_0x31ac5e(0x160)]===_0x31ac5e(0x179))return Reflect[_0x31ac5e(0x160)](_0x1b9e4b,_0x513897);},__param=this&&this[_0x17f6d9(0x16c)]||function(_0x15ae52,_0x5f57b9){return function(_0x7493b6,_0xb90eb8){_0x5f57b9(_0x7493b6,_0xb90eb8,_0x15ae52);};};Object[_0x17f6d9(0x16e)](exports,_0x17f6d9(0x13b),{'value':!![]}),exports[_0x17f6d9(0x159)]=void 0x0;const common_1=require('@nestjs/common'),typeorm_1=require(_0x17f6d9(0x147)),typeorm_2=require(_0x17f6d9(0x145)),menu_entity_1=require('./menu.entity');let MenuService=class MenuService{constructor(_0x157557){const _0x1a9e62=_0x17f6d9;this[_0x1a9e62(0x165)]=_0x157557;}async[_0x17f6d9(0x152)](){await this['initMenu']();}async[_0x17f6d9(0x177)](){const _0x473a8d=_0x17f6d9,_0x5c49a2=await this['menuEntity']['count']();if(_0x5c49a2>0x0)return;const _0x5a3625=[{'menuTipText':'对话聊天','menuIcon':'eos-icons:typing','menuName':_0x473a8d(0x148),'menuPath':_0x473a8d(0x172),'menuType':0x0,'menuPlatform':0x1,'order':0x64},{'menuTipText':_0x473a8d(0x170),'menuIcon':_0x473a8d(0x156),'menuName':'AppStore','menuPath':'/app-store','menuType':0x0,'menuPlatform':0x1,'order':0xc8},{'menuTipText':_0x473a8d(0x173),'menuIcon':'ri:landscape-line','menuName':'Midjourney','menuPath':_0x473a8d(0x164),'menuType':0x0,'menuPlatform':0x1,'order':0x12c},{'menuTipText':_0x473a8d(0x166),'menuIcon':_0x473a8d(0x14f),'menuName':_0x473a8d(0x15d),'menuPath':'/market','menuType':0x0,'menuPlatform':0x1,'order':0x190},{'menuTipText':_0x473a8d(0x14e),'menuIcon':_0x473a8d(0x169),'menuName':'Draw','menuPath':_0x473a8d(0x17f),'menuType':0x0,'menuPlatform':0x1,'order':0x1f4},{'menuTipText':_0x473a8d(0x15a),'menuIcon':_0x473a8d(0x17b),'menuName':'Mind','menuPath':_0x473a8d(0x136),'menuType':0x0,'menuPlatform':0x1,'order':0x258},{'menuTipText':_0x473a8d(0x17d),'menuIcon':'icon-park-outline:shopping','menuName':_0x473a8d(0x149),'menuPath':'/pay','menuType':0x0,'menuPlatform':0x1,'order':0x2bc},{'menuTipText':_0x473a8d(0x135),'menuIcon':_0x473a8d(0x14b),'menuName':_0x473a8d(0x14d),'menuPath':_0x473a8d(0x167),'menuType':0x0,'menuPlatform':0x1,'order':0x320}],_0x2400cd=[{'menuTipText':_0x473a8d(0x151),'menuIcon':_0x473a8d(0x162),'menuName':'Chat','menuPath':_0x473a8d(0x172),'menuType':0x0,'menuPlatform':0x0,'order':0x64},{'menuTipText':_0x473a8d(0x170),'menuIcon':_0x473a8d(0x156),'menuName':_0x473a8d(0x17e),'menuPath':_0x473a8d(0x16d),'menuType':0x0,'menuPlatform':0x0,'order':0xc8},{'menuTipText':_0x473a8d(0x173),'menuIcon':'ri:landscape-line','menuName':_0x473a8d(0x13e),'menuPath':'/midjourney','menuType':0x0,'menuPlatform':0x0,'order':0x12c},{'menuTipText':_0x473a8d(0x15a),'menuIcon':_0x473a8d(0x17b),'menuName':_0x473a8d(0x174),'menuPath':_0x473a8d(0x136),'menuType':0x0,'menuPlatform':0x0,'order':0x190},{'menuTipText':_0x473a8d(0x15b),'menuIcon':_0x473a8d(0x14a),'menuName':'UserCenter','menuPath':_0x473a8d(0x178),'menuType':0x0,'menuPlatform':0x0,'order':0x1f4}],_0x4c2efc=[..._0x5a3625,..._0x2400cd];await this[_0x473a8d(0x165)][_0x473a8d(0x180)](_0x4c2efc);}async['queryMenu'](_0x1f9fe4){const _0x1558a0=_0x17f6d9,{menuPlatform:_0x3eefe0}=_0x1f9fe4,_0x2503fd={};return _0x3eefe0&&(_0x2503fd[_0x1558a0(0x16a)]=_0x3eefe0),await this[_0x1558a0(0x165)]['find']({'where':_0x2503fd,'order':{'order':_0x1558a0(0x163)}});}async[_0x17f6d9(0x141)](_0x1fa31d){const _0x530673=_0x17f6d9,{menuPlatform:_0x508d69}=_0x1fa31d,_0x20cd9f={'isShow':!![]};return _0x508d69&&(_0x20cd9f[_0x530673(0x16a)]=_0x508d69),await this[_0x530673(0x165)]['find']({'where':_0x20cd9f,'order':{'order':_0x530673(0x163)}});}async['visibleMenu'](_0x1f4e63){const _0x4aa44d=_0x17f6d9,{id:_0x104139}=_0x1f4e63;if(!_0x104139)return;const _0xa864a0=await this[_0x4aa44d(0x165)][_0x4aa44d(0x157)]({'where':{'id':_0x104139}});if(!_0xa864a0)return;const {isShow:_0x5d491e}=_0xa864a0,_0xa3f659=await this[_0x4aa44d(0x165)][_0x4aa44d(0x15f)]({'id':_0x104139},{'isShow':!_0x5d491e});return _0xa3f659[_0x4aa44d(0x150)]>0x0;}async['setMenu'](_0x3fa2fc){const _0x571c5c=_0x17f6d9,{id:_0x25adf1}=_0x3fa2fc;_0x3fa2fc['isSystem']?_0x3fa2fc[_0x571c5c(0x161)]='':_0x3fa2fc[_0x571c5c(0x176)]='';delete _0x3fa2fc['isSystem'];try{if(_0x25adf1){const _0x285740=await this['menuEntity'][_0x571c5c(0x15f)]({'id':_0x25adf1},_0x3fa2fc);return _0x285740[_0x571c5c(0x150)]>0x0;}else{const _0x213f25=await this[_0x571c5c(0x165)]['save'](_0x3fa2fc);return _0x213f25;}}catch(_0x4eac7e){throw new common_1['HttpException'](_0x571c5c(0x17a),common_1[_0x571c5c(0x13d)][_0x571c5c(0x13a)]);}}async[_0x17f6d9(0x144)](_0x3744c7){const _0x488d78=_0x17f6d9,{id:_0x48a756}=_0x3744c7;if(!_0x48a756)throw new common_1[(_0x488d78(0x143))](_0x488d78(0x175),common_1[_0x488d78(0x13d)][_0x488d78(0x13a)]);const _0x72e0e5=await this[_0x488d78(0x165)]['delete']({'id':_0x48a756});return _0x72e0e5;}async[_0x17f6d9(0x171)](_0x51ab11){const _0x40872f=_0x17f6d9,{id:_0x5b0100,menuIcon:_0x563f51,menuTipText:_0x32d66d,order:_0x1104c0}=_0x51ab11;if(!_0x5b0100||!_0x563f51||!_0x32d66d||!_0x1104c0)throw new common_1['HttpException'](_0x40872f(0x175),common_1[_0x40872f(0x13d)]['BAD_REQUEST']);const _0x3482cf=await this[_0x40872f(0x165)]['update']({'id':_0x5b0100},{'menuIcon':_0x563f51,'menuTipText':_0x32d66d,'order':_0x1104c0});return _0x3482cf[_0x40872f(0x150)]>0x0;}};MenuService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(menu_entity_1[_0x17f6d9(0x139)])),__metadata(_0x17f6d9(0x158),[typeorm_2[_0x17f6d9(0x13c)]])],MenuService),exports[_0x17f6d9(0x159)]=MenuService;