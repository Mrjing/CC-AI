'use strict';var _0x23f1e4=_0x42f3;(function(_0x4a337c,_0x504c17){var _0x12ab20=_0x42f3,_0x2bccf5=_0x4a337c();while(!![]){try{var _0x481f44=parseInt(_0x12ab20(0xff))/0x1*(-parseInt(_0x12ab20(0x11c))/0x2)+-parseInt(_0x12ab20(0x10e))/0x3*(parseInt(_0x12ab20(0xf9))/0x4)+-parseInt(_0x12ab20(0x101))/0x5*(-parseInt(_0x12ab20(0xf7))/0x6)+parseInt(_0x12ab20(0x10c))/0x7*(-parseInt(_0x12ab20(0x11b))/0x8)+parseInt(_0x12ab20(0x10a))/0x9+-parseInt(_0x12ab20(0x12b))/0xa*(parseInt(_0x12ab20(0x126))/0xb)+-parseInt(_0x12ab20(0x10b))/0xc*(-parseInt(_0x12ab20(0x127))/0xd);if(_0x481f44===_0x504c17)break;else _0x2bccf5['push'](_0x2bccf5['shift']());}catch(_0x414b8a){_0x2bccf5['push'](_0x2bccf5['shift']());}}}(_0x34b3,0x9f57d));var __decorate=this&&this[_0x23f1e4(0x107)]||function(_0x39c9a9,_0x1ac421,_0x46d1bd,_0x301e51){var _0x87e126=_0x23f1e4,_0x2bdf17=arguments['length'],_0x5310f6=_0x2bdf17<0x3?_0x1ac421:_0x301e51===null?_0x301e51=Object[_0x87e126(0x10d)](_0x1ac421,_0x46d1bd):_0x301e51,_0x908c12;if(typeof Reflect===_0x87e126(0x100)&&typeof Reflect[_0x87e126(0x124)]==='function')_0x5310f6=Reflect[_0x87e126(0x124)](_0x39c9a9,_0x1ac421,_0x46d1bd,_0x301e51);else{for(var _0x49729c=_0x39c9a9['length']-0x1;_0x49729c>=0x0;_0x49729c--)if(_0x908c12=_0x39c9a9[_0x49729c])_0x5310f6=(_0x2bdf17<0x3?_0x908c12(_0x5310f6):_0x2bdf17>0x3?_0x908c12(_0x1ac421,_0x46d1bd,_0x5310f6):_0x908c12(_0x1ac421,_0x46d1bd))||_0x5310f6;}return _0x2bdf17>0x3&&_0x5310f6&&Object[_0x87e126(0xf6)](_0x1ac421,_0x46d1bd,_0x5310f6),_0x5310f6;},__metadata=this&&this['__metadata']||function(_0x34e5b0,_0x4fdd9e){var _0x107897=_0x23f1e4;if(typeof Reflect===_0x107897(0x100)&&typeof Reflect[_0x107897(0x11f)]==='function')return Reflect[_0x107897(0x11f)](_0x34e5b0,_0x4fdd9e);};Object[_0x23f1e4(0xf6)](exports,'__esModule',{'value':!![]}),exports['ChatLogEntity']=void 0x0;const typeorm_1=require(_0x23f1e4(0x131)),baseEntity_1=require(_0x23f1e4(0xfc));function _0x42f3(_0x38f3d4,_0x88dc6a){var _0x34b3c0=_0x34b3();return _0x42f3=function(_0x42f374,_0x35f432){_0x42f374=_0x42f374-0xf0;var _0x2ff5ee=_0x34b3c0[_0x42f374];return _0x2ff5ee;},_0x42f3(_0x38f3d4,_0x88dc6a);}let ChatLogEntity=class ChatLogEntity extends baseEntity_1[_0x23f1e4(0x120)]{};function _0x34b3(){var _0x5d1ad2=['4811002TZufSV','getOwnPropertyDescriptor','381AOqUAf','imageUrl','使用的应用id','本次总花费的token','扩展参数','groupId','图片信息的string','是否推荐0:\x20默认\x201:\x20推荐','text','是否是组图，这种图才可以指定放大','rec','本次回答的token','role\x20system\x20user\x20assistant','8qBaOWr','110458zTBKJV','ChatLogEntity','对话分组ID','metadata','BaseEntity','chatlog','上传图片的信息','role','decorate','upscaleId','33mJCzAm','10049BibbYB','fileInfo','answer','extend','2478620PAmmaC','totalTokens','是否删除','orderId','completionTokens','Column','typeorm','variationId','本次问题的token','appId','用户ID','本次访问的Ip地址','isDelete','defineProperty','72CFAWCk','promptTokens','30736NGqgpJ','mj绘画列表携带的一级id用于图片变换或者放大','本次使用的模型','../../common/entity/baseEntity','变换图片的Id记录','回答的答案','1orGPvT','object','516205nRrzEs','curIp','放大图片的Id记录','使用类型','prototype','序列化的本次会话参数','__decorate','design:type','Entity','581463JAfHaH','28116ZAjwiH'];_0x34b3=function(){return _0x5d1ad2;};return _0x34b3();}__decorate([(0x0,typeorm_1['Column'])({'comment':_0x23f1e4(0xf3)}),__metadata(_0x23f1e4(0x108),Number)],ChatLogEntity[_0x23f1e4(0x105)],'userId',void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0x104),'nullable':!![]}),__metadata(_0x23f1e4(0x108),String)],ChatLogEntity[_0x23f1e4(0x105)],'type',void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':'询问的问题','type':_0x23f1e4(0x116),'nullable':!![]}),__metadata('design:type',String)],ChatLogEntity[_0x23f1e4(0x105)],'prompt',void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0xfe),'type':_0x23f1e4(0x116),'nullable':!![]}),__metadata(_0x23f1e4(0x108),String)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0x129),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0xf1),'nullable':!![]}),__metadata(_0x23f1e4(0x108),Number)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0xf8),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x23f1e4(0x119),'nullable':!![]}),__metadata(_0x23f1e4(0x108),Number)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0x12f),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0x111),'nullable':!![]}),__metadata(_0x23f1e4(0x108),Number)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0x12c),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0xfb),'nullable':!![]}),__metadata(_0x23f1e4(0x108),String)],ChatLogEntity[_0x23f1e4(0x105)],'model',void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0xf4),'nullable':!![]}),__metadata(_0x23f1e4(0x108),String)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0x102),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0x115),'nullable':!![],'default':0x0}),__metadata(_0x23f1e4(0x108),Number)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0x118),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0x112),'nullable':!![],'type':_0x23f1e4(0x116)}),__metadata(_0x23f1e4(0x108),String)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0x12a),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0xfa),'nullable':!![]}),__metadata(_0x23f1e4(0x108),String)],ChatLogEntity[_0x23f1e4(0x105)],'message_id',void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':'一组图片的第几张、放大或者变换的时候需要使用','nullable':!![]}),__metadata(_0x23f1e4(0x108),Number)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0x12e),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'mj绘画的动作、放大或者变换、或者全部重新绘制','nullable':!![]}),__metadata(_0x23f1e4(0x108),String)],ChatLogEntity['prototype'],'action',void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0x117),'default':0x0}),__metadata(_0x23f1e4(0x108),Number)],ChatLogEntity['prototype'],'group',void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0x103),'nullable':!![]}),__metadata(_0x23f1e4(0x108),String)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0x125),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0xfd),'nullable':!![]}),__metadata('design:type',String)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0xf0),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0x114),'nullable':!![],'type':_0x23f1e4(0x116)}),__metadata(_0x23f1e4(0x108),String)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0x128),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x23f1e4(0x122),'nullable':!![],'type':_0x23f1e4(0x116)}),__metadata('design:type',String)],ChatLogEntity['prototype'],_0x23f1e4(0x10f),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0x11a),'nullable':!![]}),__metadata(_0x23f1e4(0x108),String)],ChatLogEntity['prototype'],_0x23f1e4(0x123),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0x11e),'nullable':!![]}),__metadata(_0x23f1e4(0x108),Number)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0x113),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0x106),'nullable':!![],'type':_0x23f1e4(0x116)}),__metadata('design:type',String)],ChatLogEntity[_0x23f1e4(0x105)],'conversationOptions',void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':'序列化的本次提交参数','nullable':!![],'type':_0x23f1e4(0x116)}),__metadata('design:type',String)],ChatLogEntity[_0x23f1e4(0x105)],'requestOptions',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x23f1e4(0x12d),'default':![]}),__metadata(_0x23f1e4(0x108),Boolean)],ChatLogEntity['prototype'],_0x23f1e4(0xf5),void 0x0),__decorate([(0x0,typeorm_1[_0x23f1e4(0x130)])({'comment':_0x23f1e4(0x110),'nullable':!![]}),__metadata(_0x23f1e4(0x108),Number)],ChatLogEntity[_0x23f1e4(0x105)],_0x23f1e4(0xf2),void 0x0),ChatLogEntity=__decorate([(0x0,typeorm_1[_0x23f1e4(0x109)])({'name':_0x23f1e4(0x121)})],ChatLogEntity),exports[_0x23f1e4(0x11d)]=ChatLogEntity;