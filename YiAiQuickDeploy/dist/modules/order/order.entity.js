'use strict';var _0x3fa94e=_0x19af;(function(_0x1273fd,_0x2fb364){var _0x384dff=_0x19af,_0x2f7e4e=_0x1273fd();while(!![]){try{var _0x35d1b6=-parseInt(_0x384dff(0xfb))/0x1+parseInt(_0x384dff(0x101))/0x2+-parseInt(_0x384dff(0xff))/0x3*(parseInt(_0x384dff(0xeb))/0x4)+-parseInt(_0x384dff(0xef))/0x5*(-parseInt(_0x384dff(0xf9))/0x6)+parseInt(_0x384dff(0x104))/0x7+-parseInt(_0x384dff(0xe8))/0x8+parseInt(_0x384dff(0x105))/0x9*(parseInt(_0x384dff(0xf5))/0xa);if(_0x35d1b6===_0x2fb364)break;else _0x2f7e4e['push'](_0x2f7e4e['shift']());}catch(_0x58ea1a){_0x2f7e4e['push'](_0x2f7e4e['shift']());}}}(_0x3a33,0x82674));function _0x3a33(){var _0x584d12=['Entity','订单状态（0：未支付、1：已支付、2、支付失败、3：支付超时）','decorate','用户ID','1187190uhhOTz','__decorate','function','__metadata','360YCPlXE','metadata','405748TVRBzg','Column','design:type','BaseEntity','183702sLCsBw','count','489336JzDKcX','支付平台【epay|hupi】）','userId','7184093yPJexe','63CVymeZ','channel','order','datetime','typeorm','prototype','支付渠道）','paydAt','length','object','订单ID','price','../../common/entity/baseEntity','defineProperty','5516304NerllS','decimal','商品ID','52qatCkM','orderId','goodsId','status','26955EplDQv','payPlatform'];_0x3a33=function(){return _0x584d12;};return _0x3a33();}function _0x19af(_0x2e2246,_0x59732e){var _0x3a3323=_0x3a33();return _0x19af=function(_0x19af82,_0xffb91f){_0x19af82=_0x19af82-0xde;var _0x1b1201=_0x3a3323[_0x19af82];return _0x1b1201;},_0x19af(_0x2e2246,_0x59732e);}var __decorate=this&&this[_0x3fa94e(0xf6)]||function(_0x32c223,_0x40d40c,_0x1aa16f,_0x306aed){var _0x445faf=_0x3fa94e,_0x2dfbcd=arguments[_0x445faf(0xe2)],_0x301c07=_0x2dfbcd<0x3?_0x40d40c:_0x306aed===null?_0x306aed=Object['getOwnPropertyDescriptor'](_0x40d40c,_0x1aa16f):_0x306aed,_0x5194b7;if(typeof Reflect===_0x445faf(0xe3)&&typeof Reflect[_0x445faf(0xf3)]===_0x445faf(0xf7))_0x301c07=Reflect[_0x445faf(0xf3)](_0x32c223,_0x40d40c,_0x1aa16f,_0x306aed);else{for(var _0x4188d0=_0x32c223[_0x445faf(0xe2)]-0x1;_0x4188d0>=0x0;_0x4188d0--)if(_0x5194b7=_0x32c223[_0x4188d0])_0x301c07=(_0x2dfbcd<0x3?_0x5194b7(_0x301c07):_0x2dfbcd>0x3?_0x5194b7(_0x40d40c,_0x1aa16f,_0x301c07):_0x5194b7(_0x40d40c,_0x1aa16f))||_0x301c07;}return _0x2dfbcd>0x3&&_0x301c07&&Object[_0x445faf(0xe7)](_0x40d40c,_0x1aa16f,_0x301c07),_0x301c07;},__metadata=this&&this[_0x3fa94e(0xf8)]||function(_0x5d0b41,_0x3c0b1f){var _0x1957b8=_0x3fa94e;if(typeof Reflect===_0x1957b8(0xe3)&&typeof Reflect[_0x1957b8(0xfa)]===_0x1957b8(0xf7))return Reflect[_0x1957b8(0xfa)](_0x5d0b41,_0x3c0b1f);};Object[_0x3fa94e(0xe7)](exports,'__esModule',{'value':!![]}),exports['OrderEntity']=void 0x0;const typeorm_1=require(_0x3fa94e(0xde)),baseEntity_1=require(_0x3fa94e(0xe6));let OrderEntity=class OrderEntity extends baseEntity_1[_0x3fa94e(0xfe)]{};__decorate([(0x0,typeorm_1[_0x3fa94e(0xfc)])({'unique':!![],'comment':_0x3fa94e(0xe4),'length':0x40}),__metadata(_0x3fa94e(0xfd),String)],OrderEntity[_0x3fa94e(0xdf)],_0x3fa94e(0xec),void 0x0),__decorate([(0x0,typeorm_1[_0x3fa94e(0xfc)])({'unique':!![],'comment':'交易ID（服务商）','length':0x20,'nullable':!![]}),__metadata(_0x3fa94e(0xfd),String)],OrderEntity[_0x3fa94e(0xdf)],'tradeId',void 0x0),__decorate([(0x0,typeorm_1[_0x3fa94e(0xfc)])({'comment':_0x3fa94e(0x102),'length':0x20,'nullable':!![]}),__metadata(_0x3fa94e(0xfd),String)],OrderEntity[_0x3fa94e(0xdf)],_0x3fa94e(0xf0),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x3fa94e(0xf4),'nullable':!![]}),__metadata('design:type',Number)],OrderEntity['prototype'],_0x3fa94e(0x103),void 0x0),__decorate([(0x0,typeorm_1[_0x3fa94e(0xfc)])({'comment':_0x3fa94e(0xea),'nullable':!![]}),__metadata(_0x3fa94e(0xfd),Number)],OrderEntity['prototype'],_0x3fa94e(0xed),void 0x0),__decorate([(0x0,typeorm_1[_0x3fa94e(0xfc)])({'comment':'数量','default':0x1}),__metadata(_0x3fa94e(0xfd),Number)],OrderEntity[_0x3fa94e(0xdf)],_0x3fa94e(0x100),void 0x0),__decorate([(0x0,typeorm_1[_0x3fa94e(0xfc)])({'comment':'套餐价格￥','type':_0x3fa94e(0xe9),'scale':0x2,'precision':0xa}),__metadata('design:type',Number)],OrderEntity[_0x3fa94e(0xdf)],_0x3fa94e(0xe5),void 0x0),__decorate([(0x0,typeorm_1[_0x3fa94e(0xfc)])({'comment':'订单总金额','type':_0x3fa94e(0xe9),'scale':0x2,'precision':0xa}),__metadata(_0x3fa94e(0xfd),Number)],OrderEntity['prototype'],'total',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x3fa94e(0xf2),'default':0x0}),__metadata(_0x3fa94e(0xfd),Number)],OrderEntity[_0x3fa94e(0xdf)],_0x3fa94e(0xee),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'type':_0x3fa94e(0x108),'length':0x0,'nullable':!![],'comment':'支付时间'}),__metadata(_0x3fa94e(0xfd),Date)],OrderEntity['prototype'],_0x3fa94e(0xe1),void 0x0),__decorate([(0x0,typeorm_1[_0x3fa94e(0xfc)])({'comment':_0x3fa94e(0xe0),'length':0x20,'nullable':!![]}),__metadata(_0x3fa94e(0xfd),String)],OrderEntity[_0x3fa94e(0xdf)],_0x3fa94e(0x106),void 0x0),OrderEntity=__decorate([(0x0,typeorm_1[_0x3fa94e(0xf1)])({'name':_0x3fa94e(0x107)})],OrderEntity),exports['OrderEntity']=OrderEntity;