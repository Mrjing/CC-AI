'use strict';var _0x4f9233=_0x42a5;(function(_0x551594,_0x2cf984){var _0x3d4071=_0x42a5,_0x2c1561=_0x551594();while(!![]){try{var _0x4dbcaa=-parseInt(_0x3d4071(0x1d2))/0x1+parseInt(_0x3d4071(0x1e0))/0x2*(-parseInt(_0x3d4071(0x1c7))/0x3)+-parseInt(_0x3d4071(0x1d9))/0x4+parseInt(_0x3d4071(0x1d7))/0x5+parseInt(_0x3d4071(0x1cc))/0x6*(parseInt(_0x3d4071(0x1c8))/0x7)+parseInt(_0x3d4071(0x1bd))/0x8+-parseInt(_0x3d4071(0x1c9))/0x9*(-parseInt(_0x3d4071(0x1c0))/0xa);if(_0x4dbcaa===_0x2cf984)break;else _0x2c1561['push'](_0x2c1561['shift']());}catch(_0x56f580){_0x2c1561['push'](_0x2c1561['shift']());}}}(_0x4aad,0xd141f));var __decorate=this&&this['__decorate']||function(_0x1878bc,_0x27b0aa,_0x4a589c,_0x5a2e18){var _0x5dca8c=_0x42a5,_0x16848a=arguments[_0x5dca8c(0x1d1)],_0x3fd583=_0x16848a<0x3?_0x27b0aa:_0x5a2e18===null?_0x5a2e18=Object['getOwnPropertyDescriptor'](_0x27b0aa,_0x4a589c):_0x5a2e18,_0x45d447;if(typeof Reflect==='object'&&typeof Reflect[_0x5dca8c(0x1c2)]===_0x5dca8c(0x1db))_0x3fd583=Reflect['decorate'](_0x1878bc,_0x27b0aa,_0x4a589c,_0x5a2e18);else{for(var _0x11dccc=_0x1878bc[_0x5dca8c(0x1d1)]-0x1;_0x11dccc>=0x0;_0x11dccc--)if(_0x45d447=_0x1878bc[_0x11dccc])_0x3fd583=(_0x16848a<0x3?_0x45d447(_0x3fd583):_0x16848a>0x3?_0x45d447(_0x27b0aa,_0x4a589c,_0x3fd583):_0x45d447(_0x27b0aa,_0x4a589c))||_0x3fd583;}return _0x16848a>0x3&&_0x3fd583&&Object[_0x5dca8c(0x1cf)](_0x27b0aa,_0x4a589c,_0x3fd583),_0x3fd583;},__metadata=this&&this[_0x4f9233(0x1dc)]||function(_0x5f52f8,_0x1c151e){var _0x2b6baa=_0x4f9233;if(typeof Reflect===_0x2b6baa(0x1dd)&&typeof Reflect[_0x2b6baa(0x1df)]==='function')return Reflect[_0x2b6baa(0x1df)](_0x5f52f8,_0x1c151e);};Object[_0x4f9233(0x1cf)](exports,_0x4f9233(0x1d5),{'value':!![]}),exports[_0x4f9233(0x1bf)]=void 0x0;const typeorm_1=require(_0x4f9233(0x1cd)),baseEntity_1=require(_0x4f9233(0x1c4));function _0x42a5(_0x5e0ffe,_0x40ddba){var _0x4aadaa=_0x4aad();return _0x42a5=function(_0x42a589,_0x112fb3){_0x42a589=_0x42a589-0x1bc;var _0x35ce9e=_0x4aadaa[_0x42a589];return _0x35ce9e;},_0x42a5(_0x5e0ffe,_0x40ddba);}let SalesUsersEntity=class SalesUsersEntity extends baseEntity_1[_0x4f9233(0x1d0)]{};__decorate([(0x0,typeorm_1[_0x4f9233(0x1d4)])({'comment':'分销人用户Id'}),__metadata('design:type',Number)],SalesUsersEntity['prototype'],_0x4f9233(0x1d6),void 0x0),__decorate([(0x0,typeorm_1[_0x4f9233(0x1d4)])({'comment':'分销人的提成比例'}),__metadata(_0x4f9233(0x1c5),Number)],SalesUsersEntity[_0x4f9233(0x1de)],_0x4f9233(0x1d8),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x4f9233(0x1be),'nullable':!![]}),__metadata(_0x4f9233(0x1c5),String)],SalesUsersEntity[_0x4f9233(0x1de)],_0x4f9233(0x1bc),void 0x0),__decorate([(0x0,typeorm_1[_0x4f9233(0x1d4)])({'comment':_0x4f9233(0x1d3),'type':_0x4f9233(0x1cb),'scale':0x2,'precision':0xa,'default':0x0}),__metadata('design:type',Number)],SalesUsersEntity[_0x4f9233(0x1de)],_0x4f9233(0x1c6),void 0x0),__decorate([(0x0,typeorm_1[_0x4f9233(0x1d4)])({'comment':'分销人账户已经提现金额','type':_0x4f9233(0x1cb),'scale':0x2,'precision':0xa,'default':0x0}),__metadata(_0x4f9233(0x1c5),Number)],SalesUsersEntity['prototype'],'withdrawalAmount',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'分销人账户可提现金额','type':'decimal','scale':0x2,'precision':0xa,'default':0x0}),__metadata(_0x4f9233(0x1c5),Number)],SalesUsersEntity[_0x4f9233(0x1de)],_0x4f9233(0x1c1),void 0x0),__decorate([(0x0,typeorm_1[_0x4f9233(0x1d4)])({'comment':_0x4f9233(0x1c3),'type':_0x4f9233(0x1cb),'scale':0x2,'precision':0xa,'default':0x0}),__metadata(_0x4f9233(0x1c5),Number)],SalesUsersEntity[_0x4f9233(0x1de)],'drawMoneyIn',void 0x0),__decorate([(0x0,typeorm_1[_0x4f9233(0x1d4)])({'comment':'累计成功提成的订单量','default':0x0}),__metadata(_0x4f9233(0x1c5),Number)],SalesUsersEntity[_0x4f9233(0x1de)],_0x4f9233(0x1ca),void 0x0),SalesUsersEntity=__decorate([(0x0,typeorm_1[_0x4f9233(0x1da)])({'name':_0x4f9233(0x1ce)})],SalesUsersEntity),exports[_0x4f9233(0x1bf)]=SalesUsersEntity;function _0x4aad(){var _0x3fc3c1=['4335856tvaiRa','Entity','function','__metadata','object','prototype','metadata','10qmiHzW','salesOutletName','2921672hIknAO','分销人的自定义称号等级','SalesUsersEntity','30tgLAOp','distributionBalance','decorate','分销人账户正在提现的金额','../../common/entity/baseEntity','design:type','totalAmount','560034AzEPlq','7wuUKLz','1844523noVvST','orderCount','decimal','10138602YrblUb','typeorm','sales_users','defineProperty','BaseEntity','length','473777IjNzIH','分销人账户总金额','Column','__esModule','userId','3392165CaLCtp','performanceRatio'];_0x4aad=function(){return _0x3fc3c1;};return _0x4aad();}