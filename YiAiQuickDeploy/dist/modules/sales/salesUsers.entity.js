'use strict';var _0x4cf416=_0x5139;(function(_0x1ed9c0,_0x18759f){var _0x52396d=_0x5139,_0x46dcf3=_0x1ed9c0();while(!![]){try{var _0x3d2a9c=parseInt(_0x52396d(0x20c))/0x1+parseInt(_0x52396d(0x1f9))/0x2+parseInt(_0x52396d(0x212))/0x3*(parseInt(_0x52396d(0x205))/0x4)+parseInt(_0x52396d(0x204))/0x5+parseInt(_0x52396d(0x214))/0x6*(parseInt(_0x52396d(0x1f8))/0x7)+-parseInt(_0x52396d(0x202))/0x8*(parseInt(_0x52396d(0x207))/0x9)+-parseInt(_0x52396d(0x1fe))/0xa*(parseInt(_0x52396d(0x1fb))/0xb);if(_0x3d2a9c===_0x18759f)break;else _0x46dcf3['push'](_0x46dcf3['shift']());}catch(_0x3a4aea){_0x46dcf3['push'](_0x46dcf3['shift']());}}}(_0x366d,0xbd872));var __decorate=this&&this[_0x4cf416(0x1f6)]||function(_0x3547df,_0xd173f2,_0x2a3f8e,_0x374a25){var _0x964255=_0x4cf416,_0x413b25=arguments[_0x964255(0x20e)],_0x550087=_0x413b25<0x3?_0xd173f2:_0x374a25===null?_0x374a25=Object[_0x964255(0x200)](_0xd173f2,_0x2a3f8e):_0x374a25,_0x401f63;if(typeof Reflect===_0x964255(0x213)&&typeof Reflect[_0x964255(0x1f4)]===_0x964255(0x211))_0x550087=Reflect['decorate'](_0x3547df,_0xd173f2,_0x2a3f8e,_0x374a25);else{for(var _0x55a1a7=_0x3547df['length']-0x1;_0x55a1a7>=0x0;_0x55a1a7--)if(_0x401f63=_0x3547df[_0x55a1a7])_0x550087=(_0x413b25<0x3?_0x401f63(_0x550087):_0x413b25>0x3?_0x401f63(_0xd173f2,_0x2a3f8e,_0x550087):_0x401f63(_0xd173f2,_0x2a3f8e))||_0x550087;}return _0x413b25>0x3&&_0x550087&&Object[_0x964255(0x20b)](_0xd173f2,_0x2a3f8e,_0x550087),_0x550087;},__metadata=this&&this[_0x4cf416(0x1ef)]||function(_0x2dabfd,_0x58c599){var _0x1bb8c1=_0x4cf416;if(typeof Reflect===_0x1bb8c1(0x213)&&typeof Reflect[_0x1bb8c1(0x1f7)]===_0x1bb8c1(0x211))return Reflect[_0x1bb8c1(0x1f7)](_0x2dabfd,_0x58c599);};function _0x5139(_0x417df3,_0x18d97b){var _0x366dcb=_0x366d();return _0x5139=function(_0x513931,_0x1f6a26){_0x513931=_0x513931-0x1ee;var _0x30a0f0=_0x366dcb[_0x513931];return _0x30a0f0;},_0x5139(_0x417df3,_0x18d97b);}Object['defineProperty'](exports,_0x4cf416(0x1fa),{'value':!![]}),exports[_0x4cf416(0x20a)]=void 0x0;const typeorm_1=require('typeorm'),baseEntity_1=require('../../common/entity/baseEntity');let SalesUsersEntity=class SalesUsersEntity extends baseEntity_1[_0x4cf416(0x209)]{};__decorate([(0x0,typeorm_1[_0x4cf416(0x201)])({'comment':'分销人用户Id'}),__metadata(_0x4cf416(0x20d),Number)],SalesUsersEntity[_0x4cf416(0x1f0)],'userId',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x4cf416(0x203)}),__metadata(_0x4cf416(0x20d),Number)],SalesUsersEntity[_0x4cf416(0x1f0)],_0x4cf416(0x1f5),void 0x0),__decorate([(0x0,typeorm_1[_0x4cf416(0x201)])({'comment':_0x4cf416(0x206),'nullable':!![]}),__metadata('design:type',String)],SalesUsersEntity[_0x4cf416(0x1f0)],'salesOutletName',void 0x0),__decorate([(0x0,typeorm_1[_0x4cf416(0x201)])({'comment':_0x4cf416(0x20f),'type':_0x4cf416(0x1fd),'scale':0x2,'precision':0xa,'default':0x0}),__metadata(_0x4cf416(0x20d),Number)],SalesUsersEntity[_0x4cf416(0x1f0)],_0x4cf416(0x1ff),void 0x0),__decorate([(0x0,typeorm_1[_0x4cf416(0x201)])({'comment':'分销人账户已经提现金额','type':_0x4cf416(0x1fd),'scale':0x2,'precision':0xa,'default':0x0}),__metadata(_0x4cf416(0x20d),Number)],SalesUsersEntity[_0x4cf416(0x1f0)],_0x4cf416(0x1ee),void 0x0),__decorate([(0x0,typeorm_1[_0x4cf416(0x201)])({'comment':_0x4cf416(0x1fc),'type':_0x4cf416(0x1fd),'scale':0x2,'precision':0xa,'default':0x0}),__metadata(_0x4cf416(0x20d),Number)],SalesUsersEntity[_0x4cf416(0x1f0)],'distributionBalance',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x4cf416(0x1f1),'type':'decimal','scale':0x2,'precision':0xa,'default':0x0}),__metadata('design:type',Number)],SalesUsersEntity['prototype'],'drawMoneyIn',void 0x0),__decorate([(0x0,typeorm_1[_0x4cf416(0x201)])({'comment':_0x4cf416(0x210),'default':0x0}),__metadata(_0x4cf416(0x20d),Number)],SalesUsersEntity[_0x4cf416(0x1f0)],_0x4cf416(0x208),void 0x0),SalesUsersEntity=__decorate([(0x0,typeorm_1[_0x4cf416(0x1f3)])({'name':_0x4cf416(0x1f2)})],SalesUsersEntity),exports[_0x4cf416(0x20a)]=SalesUsersEntity;function _0x366d(){var _0x2a0380=['performanceRatio','__decorate','metadata','968926YtDuem','1528428ttLIXZ','__esModule','429zVcUxt','分销人账户可提现金额','decimal','226710oTEfnA','totalAmount','getOwnPropertyDescriptor','Column','111040ZjMjvp','分销人的提成比例','5552425YFRyRF','131768WrosaP','分销人的自定义称号等级','909LcVRbX','orderCount','BaseEntity','SalesUsersEntity','defineProperty','54020TnyRWU','design:type','length','分销人账户总金额','累计成功提成的订单量','function','15eWIfNM','object','42wUFiQQ','withdrawalAmount','__metadata','prototype','分销人账户正在提现的金额','sales_users','Entity','decorate'];_0x366d=function(){return _0x2a0380;};return _0x366d();}