'use strict';var _0x1b1acb=_0x1783;(function(_0x35cf7b,_0x1d8510){var _0x563091=_0x1783,_0x1a66bc=_0x35cf7b();while(!![]){try{var _0x2d559f=parseInt(_0x563091(0x12f))/0x1+-parseInt(_0x563091(0x13e))/0x2*(-parseInt(_0x563091(0x149))/0x3)+parseInt(_0x563091(0x12e))/0x4*(-parseInt(_0x563091(0x139))/0x5)+-parseInt(_0x563091(0x124))/0x6+-parseInt(_0x563091(0x11e))/0x7*(parseInt(_0x563091(0x132))/0x8)+parseInt(_0x563091(0x123))/0x9*(parseInt(_0x563091(0x12d))/0xa)+-parseInt(_0x563091(0x146))/0xb;if(_0x2d559f===_0x1d8510)break;else _0x1a66bc['push'](_0x1a66bc['shift']());}catch(_0x525faf){_0x1a66bc['push'](_0x1a66bc['shift']());}}}(_0x79b1,0x9c722));var __decorate=this&&this[_0x1b1acb(0x121)]||function(_0x1c5155,_0x9d74c0,_0xcd8ef4,_0x430cc5){var _0x2d6e08=_0x1b1acb,_0x35e39f=arguments[_0x2d6e08(0x138)],_0x16bae7=_0x35e39f<0x3?_0x9d74c0:_0x430cc5===null?_0x430cc5=Object['getOwnPropertyDescriptor'](_0x9d74c0,_0xcd8ef4):_0x430cc5,_0x3493f8;if(typeof Reflect===_0x2d6e08(0x126)&&typeof Reflect[_0x2d6e08(0x148)]===_0x2d6e08(0x130))_0x16bae7=Reflect[_0x2d6e08(0x148)](_0x1c5155,_0x9d74c0,_0xcd8ef4,_0x430cc5);else{for(var _0x1f828d=_0x1c5155[_0x2d6e08(0x138)]-0x1;_0x1f828d>=0x0;_0x1f828d--)if(_0x3493f8=_0x1c5155[_0x1f828d])_0x16bae7=(_0x35e39f<0x3?_0x3493f8(_0x16bae7):_0x35e39f>0x3?_0x3493f8(_0x9d74c0,_0xcd8ef4,_0x16bae7):_0x3493f8(_0x9d74c0,_0xcd8ef4))||_0x16bae7;}return _0x35e39f>0x3&&_0x16bae7&&Object['defineProperty'](_0x9d74c0,_0xcd8ef4,_0x16bae7),_0x16bae7;},__metadata=this&&this[_0x1b1acb(0x11d)]||function(_0x462b69,_0xcb5bed){var _0x5eb3cc=_0x1b1acb;if(typeof Reflect===_0x5eb3cc(0x126)&&typeof Reflect[_0x5eb3cc(0x13d)]==='function')return Reflect['metadata'](_0x462b69,_0xcb5bed);};Object[_0x1b1acb(0x147)](exports,_0x1b1acb(0x143),{'value':!![]}),exports[_0x1b1acb(0x11f)]=void 0x0;function _0x1783(_0x65f166,_0x1984cf){var _0x79b180=_0x79b1();return _0x1783=function(_0x17835e,_0x2d3c34){_0x17835e=_0x17835e-0x11b;var _0x42cb5c=_0x79b180[_0x17835e];return _0x42cb5c;},_0x1783(_0x65f166,_0x1984cf);}const typeorm_1=require(_0x1b1acb(0x137)),baseEntity_1=require(_0x1b1acb(0x140));function _0x79b1(){var _0x4f8af6=['function','maxResponseTokens','71608dfToZW','限制用户上下文可选最大轮次数','是否为特殊模型、可以提供联想翻译、思维导图等特殊操作','模型设置允许用户使用的最大回复Token','useCount','typeorm','length','5xwVFFh','单次调用扣除的次数','模型温度0-2直接','deductType','metadata','1574GAnwGj','isDallE3','../../common/entity/baseEntity','是否为绘画模型Dall-E3','模型总计使用的token数量','__esModule','模型排序','keyType','4887487KrckqT','defineProperty','decorate','2679kxGiKm','扣除余额类型\x201：\x20普通模型\x202：高级模型','key模型类型\x201:\x20openai\x202:\x20文心一言\x20\x203:清华智谱','__metadata','469fmGfBY','ModelsTypeEntity','Column','__decorate','design:type','8919suFBsZ','1823016lUdSaa','model','object','模型的使用次数','isUseTool','status','prototype','temperature','maxRounds','7870WgsTVS','2643372LsuRqU','1166807LWDcSE'];_0x79b1=function(){return _0x4f8af6;};return _0x79b1();}let ModelsTypeEntity=class ModelsTypeEntity extends baseEntity_1['BaseEntity']{};__decorate([(0x0,typeorm_1['Column'])({'comment':_0x1b1acb(0x11c)}),__metadata(_0x1b1acb(0x122),Number)],ModelsTypeEntity['prototype'],_0x1b1acb(0x145),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'模型名称[给用户看的]'}),__metadata(_0x1b1acb(0x122),String)],ModelsTypeEntity[_0x1b1acb(0x12a)],'modelName',void 0x0),__decorate([(0x0,typeorm_1[_0x1b1acb(0x120)])({'comment':'是否开放模型:\x200:禁用\x201：启用','default':0x1}),__metadata('design:type',Boolean)],ModelsTypeEntity[_0x1b1acb(0x12a)],_0x1b1acb(0x129),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'绑定使用的模型是？最终调用的'}),__metadata(_0x1b1acb(0x122),String)],ModelsTypeEntity[_0x1b1acb(0x12a)],_0x1b1acb(0x125),void 0x0),__decorate([(0x0,typeorm_1[_0x1b1acb(0x120)])({'comment':_0x1b1acb(0x13b),'default':0.6}),__metadata(_0x1b1acb(0x122),Number)],ModelsTypeEntity[_0x1b1acb(0x12a)],_0x1b1acb(0x12b),void 0x0),__decorate([(0x0,typeorm_1[_0x1b1acb(0x120)])({'comment':_0x1b1acb(0x127),'default':0x0}),__metadata(_0x1b1acb(0x122),Number)],ModelsTypeEntity[_0x1b1acb(0x12a)],_0x1b1acb(0x136),void 0x0),__decorate([(0x0,typeorm_1[_0x1b1acb(0x120)])({'comment':_0x1b1acb(0x142),'default':0x0}),__metadata(_0x1b1acb(0x122),Number)],ModelsTypeEntity[_0x1b1acb(0x12a)],'useToken',void 0x0),__decorate([(0x0,typeorm_1[_0x1b1acb(0x120)])({'comment':_0x1b1acb(0x13a),'default':0x1}),__metadata(_0x1b1acb(0x122),Number)],ModelsTypeEntity[_0x1b1acb(0x12a)],'deduct',void 0x0),__decorate([(0x0,typeorm_1[_0x1b1acb(0x120)])({'comment':_0x1b1acb(0x11b),'default':0x1}),__metadata(_0x1b1acb(0x122),Number)],ModelsTypeEntity[_0x1b1acb(0x12a)],_0x1b1acb(0x13c),void 0x0),__decorate([(0x0,typeorm_1[_0x1b1acb(0x120)])({'comment':_0x1b1acb(0x135),'default':0x800}),__metadata(_0x1b1acb(0x122),Number)],ModelsTypeEntity[_0x1b1acb(0x12a)],_0x1b1acb(0x131),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x1b1acb(0x133),'nullable':!![]}),__metadata(_0x1b1acb(0x122),Number)],ModelsTypeEntity[_0x1b1acb(0x12a)],_0x1b1acb(0x12c),void 0x0),__decorate([(0x0,typeorm_1[_0x1b1acb(0x120)])({'comment':_0x1b1acb(0x141),'default':0x0}),__metadata(_0x1b1acb(0x122),Boolean)],ModelsTypeEntity[_0x1b1acb(0x12a)],_0x1b1acb(0x13f),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x1b1acb(0x134),'default':0x0}),__metadata(_0x1b1acb(0x122),Boolean)],ModelsTypeEntity[_0x1b1acb(0x12a)],_0x1b1acb(0x128),void 0x0),__decorate([(0x0,typeorm_1[_0x1b1acb(0x120)])({'comment':_0x1b1acb(0x144),'default':0x1}),__metadata('design:type',Number)],ModelsTypeEntity[_0x1b1acb(0x12a)],'modelOrder',void 0x0),ModelsTypeEntity=__decorate([(0x0,typeorm_1['Entity'])({'name':'models_type'})],ModelsTypeEntity),exports[_0x1b1acb(0x11f)]=ModelsTypeEntity;