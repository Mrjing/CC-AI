'use strict';var _0x1790db=_0x28c2;(function(_0x53e4a0,_0x2f898d){var _0x54f872=_0x28c2,_0x2196f7=_0x53e4a0();while(!![]){try{var _0x457f2c=parseInt(_0x54f872(0x12f))/0x1*(parseInt(_0x54f872(0x139))/0x2)+-parseInt(_0x54f872(0x14b))/0x3*(parseInt(_0x54f872(0x142))/0x4)+-parseInt(_0x54f872(0x151))/0x5*(-parseInt(_0x54f872(0x146))/0x6)+-parseInt(_0x54f872(0x137))/0x7*(-parseInt(_0x54f872(0x14f))/0x8)+-parseInt(_0x54f872(0x144))/0x9*(-parseInt(_0x54f872(0x131))/0xa)+-parseInt(_0x54f872(0x148))/0xb+-parseInt(_0x54f872(0x154))/0xc*(parseInt(_0x54f872(0x13e))/0xd);if(_0x457f2c===_0x2f898d)break;else _0x2196f7['push'](_0x2196f7['shift']());}catch(_0x26ed7f){_0x2196f7['push'](_0x2196f7['shift']());}}}(_0x2a51,0x9f87e));function _0x28c2(_0x5e129b,_0x204a8f){var _0x2a5184=_0x2a51();return _0x28c2=function(_0x28c29e,_0x5ac3af){_0x28c29e=_0x28c29e-0x12f;var _0x5d5f4e=_0x2a5184[_0x28c29e];return _0x5d5f4e;},_0x28c2(_0x5e129b,_0x204a8f);}var __decorate=this&&this[_0x1790db(0x135)]||function(_0xe4ff73,_0x71bc7d,_0x1987ba,_0x474f07){var _0x2f8d47=_0x1790db,_0x2c4b02=arguments[_0x2f8d47(0x145)],_0x510ef0=_0x2c4b02<0x3?_0x71bc7d:_0x474f07===null?_0x474f07=Object['getOwnPropertyDescriptor'](_0x71bc7d,_0x1987ba):_0x474f07,_0x4304b8;if(typeof Reflect===_0x2f8d47(0x13b)&&typeof Reflect[_0x2f8d47(0x149)]==='function')_0x510ef0=Reflect['decorate'](_0xe4ff73,_0x71bc7d,_0x1987ba,_0x474f07);else{for(var _0x46c85e=_0xe4ff73[_0x2f8d47(0x145)]-0x1;_0x46c85e>=0x0;_0x46c85e--)if(_0x4304b8=_0xe4ff73[_0x46c85e])_0x510ef0=(_0x2c4b02<0x3?_0x4304b8(_0x510ef0):_0x2c4b02>0x3?_0x4304b8(_0x71bc7d,_0x1987ba,_0x510ef0):_0x4304b8(_0x71bc7d,_0x1987ba))||_0x510ef0;}return _0x2c4b02>0x3&&_0x510ef0&&Object['defineProperty'](_0x71bc7d,_0x1987ba,_0x510ef0),_0x510ef0;},__metadata=this&&this[_0x1790db(0x143)]||function(_0x29027a,_0x55a709){var _0x1f0b97=_0x1790db;if(typeof Reflect===_0x1f0b97(0x13b)&&typeof Reflect[_0x1f0b97(0x152)]===_0x1f0b97(0x14a))return Reflect['metadata'](_0x29027a,_0x55a709);};Object[_0x1790db(0x14e)](exports,'__esModule',{'value':!![]}),exports['MenuEntity']=void 0x0;const typeorm_1=require('typeorm'),baseEntity_1=require(_0x1790db(0x140));function _0x2a51(){var _0xa7bd3f=['3091913PPiwVl','decorate','function','6UTCfVG','是否权限\x20登录才可以访问','menuName','defineProperty','40JVZucq','isJump','1060QWRGHm','metadata','menuPlatform','724176jqiGcr','菜单文字提示信息','menuIframeUrl','BaseEntity','1siHuqQ','prototype','12190760WHSMUq','isShow','menuIcon','design:type','__decorate','Column','67291PMlidF','是否显示\x201：是|0：不是','832044ruZIPn','排序ID','object','菜单路径、跳转的系统路径','菜单平台：\x200：移动端\x201：pc端','39znHVOC','Entity','../../common/entity/baseEntity','MenuEntity','2114212bBkjjY','__metadata','9ouCBKY','length','13854RYsBLm','菜单类型：\x20系统预设|自定义菜单'];_0x2a51=function(){return _0xa7bd3f;};return _0x2a51();}let MenuEntity=class MenuEntity extends baseEntity_1[_0x1790db(0x157)]{};__decorate([(0x0,typeorm_1[_0x1790db(0x136)])({'comment':'菜单名称','length':0x40,'default':null}),__metadata('design:type',String)],MenuEntity['prototype'],_0x1790db(0x14d),void 0x0),__decorate([(0x0,typeorm_1[_0x1790db(0x136)])({'comment':_0x1790db(0x13c),'length':0x40}),__metadata('design:type',String)],MenuEntity[_0x1790db(0x130)],'menuPath',void 0x0),__decorate([(0x0,typeorm_1[_0x1790db(0x136)])({'comment':'菜单图标\x20icon图标名称'}),__metadata(_0x1790db(0x134),String)],MenuEntity['prototype'],_0x1790db(0x133),void 0x0),__decorate([(0x0,typeorm_1[_0x1790db(0x136)])({'comment':_0x1790db(0x155)}),__metadata('design:type',String)],MenuEntity['prototype'],'menuTipText',void 0x0),__decorate([(0x0,typeorm_1[_0x1790db(0x136)])({'comment':_0x1790db(0x147),'default':0x1}),__metadata(_0x1790db(0x134),Number)],MenuEntity[_0x1790db(0x130)],'menuType',void 0x0),__decorate([(0x0,typeorm_1[_0x1790db(0x136)])({'comment':_0x1790db(0x13d),'default':0x1}),__metadata(_0x1790db(0x134),Number)],MenuEntity[_0x1790db(0x130)],_0x1790db(0x153),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'菜单加载地址：\x20系统菜单|自定义菜单','default':null}),__metadata(_0x1790db(0x134),String)],MenuEntity[_0x1790db(0x130)],_0x1790db(0x156),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x1790db(0x13a),'default':0x64}),__metadata('design:type',Number)],MenuEntity['prototype'],'order',void 0x0),__decorate([(0x0,typeorm_1[_0x1790db(0x136)])({'comment':_0x1790db(0x138),'default':0x1}),__metadata(_0x1790db(0x134),Boolean)],MenuEntity[_0x1790db(0x130)],_0x1790db(0x132),void 0x0),__decorate([(0x0,typeorm_1[_0x1790db(0x136)])({'comment':'是否跳转到新窗口\x200不跳转\x201跳转\x20仅设置为iframe窗口时候有效','default':0x0}),__metadata(_0x1790db(0x134),Boolean)],MenuEntity['prototype'],_0x1790db(0x150),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x1790db(0x14c),'default':0x0}),__metadata(_0x1790db(0x134),Boolean)],MenuEntity[_0x1790db(0x130)],'isNeedAuth',void 0x0),MenuEntity=__decorate([(0x0,typeorm_1[_0x1790db(0x13f)])({'name':'menu'})],MenuEntity),exports[_0x1790db(0x141)]=MenuEntity;