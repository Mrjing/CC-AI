'use strict';const _0xabe262=_0x2f82;(function(_0x2bf18a,_0x1c1da6){const _0x4c62ad=_0x2f82,_0xd723be=_0x2bf18a();while(!![]){try{const _0x48ea36=parseInt(_0x4c62ad(0x178))/0x1+-parseInt(_0x4c62ad(0x158))/0x2+-parseInt(_0x4c62ad(0x154))/0x3*(parseInt(_0x4c62ad(0x14b))/0x4)+-parseInt(_0x4c62ad(0x131))/0x5+parseInt(_0x4c62ad(0x13b))/0x6*(parseInt(_0x4c62ad(0x151))/0x7)+parseInt(_0x4c62ad(0x17b))/0x8*(-parseInt(_0x4c62ad(0x14c))/0x9)+-parseInt(_0x4c62ad(0x146))/0xa*(-parseInt(_0x4c62ad(0x17f))/0xb);if(_0x48ea36===_0x1c1da6)break;else _0xd723be['push'](_0xd723be['shift']());}catch(_0x23fdb1){_0xd723be['push'](_0xd723be['shift']());}}}(_0x2dfc,0x4f2c6));var __decorate=this&&this['__decorate']||function(_0x531877,_0x4acf46,_0x3d3b5c,_0x40ac3e){const _0x4eb2b6=_0x2f82;var _0x27a652=arguments['length'],_0x3c4e05=_0x27a652<0x3?_0x4acf46:_0x40ac3e===null?_0x40ac3e=Object[_0x4eb2b6(0x16b)](_0x4acf46,_0x3d3b5c):_0x40ac3e,_0x2c47ad;if(typeof Reflect==='object'&&typeof Reflect[_0x4eb2b6(0x18a)]==='function')_0x3c4e05=Reflect[_0x4eb2b6(0x18a)](_0x531877,_0x4acf46,_0x3d3b5c,_0x40ac3e);else{for(var _0x51fe87=_0x531877[_0x4eb2b6(0x12b)]-0x1;_0x51fe87>=0x0;_0x51fe87--)if(_0x2c47ad=_0x531877[_0x51fe87])_0x3c4e05=(_0x27a652<0x3?_0x2c47ad(_0x3c4e05):_0x27a652>0x3?_0x2c47ad(_0x4acf46,_0x3d3b5c,_0x3c4e05):_0x2c47ad(_0x4acf46,_0x3d3b5c))||_0x3c4e05;}return _0x27a652>0x3&&_0x3c4e05&&Object[_0x4eb2b6(0x175)](_0x4acf46,_0x3d3b5c,_0x3c4e05),_0x3c4e05;},__metadata=this&&this[_0xabe262(0x169)]||function(_0x47c2dc,_0x317b2a){const _0x4f52eb=_0xabe262;if(typeof Reflect==='object'&&typeof Reflect[_0x4f52eb(0x184)]===_0x4f52eb(0x12a))return Reflect[_0x4f52eb(0x184)](_0x47c2dc,_0x317b2a);},__param=this&&this[_0xabe262(0x15c)]||function(_0x4da0a6,_0x2043d9){return function(_0x33eb74,_0x3a8615){_0x2043d9(_0x33eb74,_0x3a8615,_0x4da0a6);};};Object[_0xabe262(0x175)](exports,_0xabe262(0x188),{'value':!![]}),exports[_0xabe262(0x179)]=void 0x0;const jwtAuth_guard_1=require(_0xabe262(0x150)),swagger_1=require(_0xabe262(0x17e)),chatgpt_service_1=require('./chatgpt.service'),common_1=require(_0xabe262(0x14e)),chatProcess_dto_1=require(_0xabe262(0x162)),chatDraw_dto_1=require(_0xabe262(0x15f)),adminAuth_guard_1=require(_0xabe262(0x13d)),superAuth_guard_1=require(_0xabe262(0x15d)),globalConfig_service_1=require(_0xabe262(0x12e));let ChatgptController=class ChatgptController{constructor(_0x248679,_0x500f70){const _0x38bb52=_0xabe262;this[_0x38bb52(0x17d)]=_0x248679,this[_0x38bb52(0x149)]=_0x500f70;}[_0xabe262(0x17a)](_0xca7cdb,_0x3cacd1,_0x34696c){const _0x44911d=_0xabe262;return this[_0x44911d(0x17d)][_0x44911d(0x17a)](_0xca7cdb,_0x3cacd1,_0x34696c);}[_0xabe262(0x138)](_0x65e335,_0x375e78){const _0x32bf4d=_0xabe262;return this[_0x32bf4d(0x17d)][_0x32bf4d(0x17a)](Object[_0x32bf4d(0x140)]({},_0x65e335),_0x375e78);}async['mjAssociate'](_0x35f129,_0x2b5e98){const _0x2af5c3=_0xabe262,_0x35047c=await this['globalConfigService'][_0x2af5c3(0x156)](['mjCustomLianxiangPrompt']);return _0x35f129[_0x2af5c3(0x159)]=_0x35047c||'midjourney是一款AI绘画工具，只要你输入你想到的文字，就能通过人工智能产出相对应的图片、我希望你作为MidJourney程序的提示词(prompt)生成器。你的工作是根据我给你的一段提示内容扩展为更详细和更有创意的描述，以激发人工智能的独特和有趣的图像。请记住，人工智能能够理解广泛的语言，并能解释抽象的概念，所以请自由发挥想象力和描述力，尽可能地发挥。例如，你可以描述一个未来城市的场景，或一个充满奇怪生物的超现实景观。你的描述越详细、越有想象力，产生的图像就越有趣、Midjourney\x20prompt的标准公式为:(image\x20we\x27re\x20prompting).(5\x20descriptivekeywords).\x20(camera\x20type).\x20(camera\x20lens\x20type).\x20(time\x20of\x20day)(style\x20of\x20photograph).(type\x20offilm)、请记住这个公式，后续统一使用该公式进行prompt生成、最终把我给你的提示变成一整段连续不分开的完整内容，并且只需要用英文回复您的联想、一定不要回复别内容、包括解释、我只需要纯粹的内容。',this[_0x2af5c3(0x17d)][_0x2af5c3(0x17a)](Object[_0x2af5c3(0x140)](Object[_0x2af5c3(0x140)]({},_0x35f129),{'cusromPrompt':!![]}),_0x2b5e98);}async[_0xabe262(0x16e)](_0x1d182b,_0x26537a){const _0x33218e=_0xabe262,_0x19c70b=await this[_0x33218e(0x149)][_0x33218e(0x156)]([_0x33218e(0x142)]);return _0x1d182b['systemMessage']=_0x19c70b||_0x33218e(0x15e),this[_0x33218e(0x17d)][_0x33218e(0x17a)](Object['assign'](Object[_0x33218e(0x140)]({},_0x1d182b),{'cusromPrompt':!![]}),_0x26537a);}async[_0xabe262(0x183)](_0x62ff75,_0x2d061b,_0x553b7c){const _0x38079e=_0xabe262,_0x30385d=await this[_0x38079e(0x149)][_0x38079e(0x156)]([_0x38079e(0x180)]);return _0x62ff75[_0x38079e(0x159)]=_0x30385d||'我希望你使用markdown格式回答我得问题、我的需求是得到一份markdown格式的大纲、尽量做的精细、层级多一点、不管我问你什么、都需要您回复我一个大纲出来、我想使用大纲做思维导图、除了大纲之外、不要无关内容和总结。',this[_0x38079e(0x17d)][_0x38079e(0x17a)](Object[_0x38079e(0x140)](Object[_0x38079e(0x140)]({},_0x62ff75),{'cusromPrompt':!![]}),_0x2d061b,_0x553b7c);}async['draw'](_0x2599d0,_0x4aa3dc){const _0x4c387a=_0xabe262;return await this[_0x4c387a(0x17d)][_0x4c387a(0x17c)](_0x2599d0,_0x4aa3dc);}async['setChatBoxType'](_0xd3ac71,_0xcfb0a0){const _0x3dbae9=_0xabe262;return await this[_0x3dbae9(0x17d)][_0x3dbae9(0x12d)](_0xd3ac71,_0xcfb0a0);}async[_0xabe262(0x134)](_0x260ba5,_0x19e134){const _0x4d29f5=_0xabe262;return await this[_0x4d29f5(0x17d)][_0x4d29f5(0x134)](_0x260ba5,_0x19e134);}async[_0xabe262(0x147)](){const _0x610c0a=_0xabe262;return await this[_0x610c0a(0x17d)][_0x610c0a(0x147)]();}async[_0xabe262(0x171)](_0x55c199,_0xe13026){const _0x200e1e=_0xabe262;return await this['chatgptService'][_0x200e1e(0x171)](_0x55c199,_0xe13026);}async[_0xabe262(0x185)](_0x16fca9,_0x4cdae8){const _0x4aad30=_0xabe262;return await this[_0x4aad30(0x17d)][_0x4aad30(0x185)](_0x16fca9,_0x4cdae8);}async['queryChatBox'](){const _0x533459=_0xabe262;return await this['chatgptService'][_0x533459(0x148)]();}async['queryChatBoxFrontend'](){return await this['chatgptService']['queryChatBoxFrontend']();}async['setChatPreType'](_0x430fed,_0x37e203){const _0x2867df=_0xabe262;return await this[_0x2867df(0x17d)][_0x2867df(0x16f)](_0x430fed,_0x37e203);}async['delChatPreType'](_0x6c4eb3,_0x1a02d0){const _0x4c9e72=_0xabe262;return await this[_0x4c9e72(0x17d)][_0x4c9e72(0x187)](_0x6c4eb3,_0x1a02d0);}async[_0xabe262(0x13c)](){const _0x4c99c7=_0xabe262;return await this['chatgptService'][_0x4c99c7(0x13c)]();}async[_0xabe262(0x157)](_0x2ff2c2,_0x320817){const _0x1e9147=_0xabe262;return await this[_0x1e9147(0x17d)]['setChatPre'](_0x2ff2c2,_0x320817);}async[_0xabe262(0x143)](_0x4fa50a,_0x32e5e5){const _0xa3bb03=_0xabe262;return await this[_0xa3bb03(0x17d)]['delChatPre'](_0x4fa50a,_0x32e5e5);}async['queryChatPre'](){const _0x3ff0c5=_0xabe262;return await this['chatgptService'][_0x3ff0c5(0x189)]();}async[_0xabe262(0x153)](){const _0x3a25e4=_0xabe262;return await this[_0x3a25e4(0x17d)][_0x3a25e4(0x153)]();}};function _0x2f82(_0x2cabe3,_0x556fa3){const _0x2dfc1c=_0x2dfc();return _0x2f82=function(_0x2f82cc,_0xbdb68c){_0x2f82cc=_0x2f82cc-0x129;let _0x398653=_0x2dfc1c[_0x2f82cc];return _0x398653;},_0x2f82(_0x2cabe3,_0x556fa3);}__decorate([(0x0,common_1[_0xabe262(0x163)])(_0xabe262(0x14f)),(0x0,swagger_1['ApiOperation'])({'summary':_0xabe262(0x16d)}),(0x0,common_1[_0xabe262(0x155)])(jwtAuth_guard_1[_0xabe262(0x181)]),(0x0,swagger_1[_0xabe262(0x18b)])(),__param(0x0,(0x0,common_1[_0xabe262(0x166)])()),__param(0x1,(0x0,common_1[_0xabe262(0x165)])()),__param(0x2,(0x0,common_1[_0xabe262(0x152)])()),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[chatProcess_dto_1[_0xabe262(0x132)],Object,Object]),__metadata(_0xabe262(0x129),void 0x0)],ChatgptController[_0xabe262(0x15a)],_0xabe262(0x17a),null),__decorate([(0x0,common_1[_0xabe262(0x163)])(_0xabe262(0x167)),(0x0,swagger_1[_0xabe262(0x182)])({'summary':'gpt聊天对话'}),(0x0,common_1[_0xabe262(0x155)])(jwtAuth_guard_1[_0xabe262(0x181)]),(0x0,swagger_1[_0xabe262(0x18b)])(),__param(0x0,(0x0,common_1[_0xabe262(0x166)])()),__param(0x1,(0x0,common_1[_0xabe262(0x165)])()),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[chatProcess_dto_1[_0xabe262(0x132)],Object]),__metadata(_0xabe262(0x129),void 0x0)],ChatgptController[_0xabe262(0x15a)],_0xabe262(0x138),null),__decorate([(0x0,common_1[_0xabe262(0x163)])(_0xabe262(0x16c)),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x13f)}),(0x0,common_1[_0xabe262(0x155)])(jwtAuth_guard_1[_0xabe262(0x181)]),(0x0,swagger_1[_0xabe262(0x18b)])(),__param(0x0,(0x0,common_1['Body'])()),__param(0x1,(0x0,common_1[_0xabe262(0x165)])()),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[chatProcess_dto_1[_0xabe262(0x132)],Object]),__metadata(_0xabe262(0x129),Promise)],ChatgptController[_0xabe262(0x15a)],'mjAssociate',null),__decorate([(0x0,common_1[_0xabe262(0x163)])('mj-fy'),(0x0,swagger_1[_0xabe262(0x182)])({'summary':'gpt描述词绘画翻译'}),(0x0,common_1['UseGuards'])(jwtAuth_guard_1['JwtAuthGuard']),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0xabe262(0x166)])()),__param(0x1,(0x0,common_1[_0xabe262(0x165)])()),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[chatProcess_dto_1['ChatProcessDto'],Object]),__metadata(_0xabe262(0x129),Promise)],ChatgptController['prototype'],_0xabe262(0x16e),null),__decorate([(0x0,common_1[_0xabe262(0x163)])('chat-mind'),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x144)}),(0x0,common_1[_0xabe262(0x155)])(jwtAuth_guard_1[_0xabe262(0x181)]),(0x0,swagger_1[_0xabe262(0x18b)])(),__param(0x0,(0x0,common_1[_0xabe262(0x166)])()),__param(0x1,(0x0,common_1[_0xabe262(0x165)])()),__param(0x2,(0x0,common_1[_0xabe262(0x152)])()),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[chatProcess_dto_1[_0xabe262(0x132)],Object,Object]),__metadata('design:returntype',Promise)],ChatgptController['prototype'],_0xabe262(0x183),null),__decorate([(0x0,common_1[_0xabe262(0x163)])('chat-draw'),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x168)}),(0x0,common_1[_0xabe262(0x155)])(jwtAuth_guard_1[_0xabe262(0x181)]),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1['Body'])()),__param(0x1,(0x0,common_1[_0xabe262(0x165)])()),__metadata('design:type',Function),__metadata(_0xabe262(0x173),[chatDraw_dto_1[_0xabe262(0x176)],Object]),__metadata('design:returntype',Promise)],ChatgptController[_0xabe262(0x15a)],_0xabe262(0x17c),null),__decorate([(0x0,common_1[_0xabe262(0x163)])('setChatBoxType'),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x13a)}),(0x0,common_1['UseGuards'])(superAuth_guard_1['SuperAuthGuard']),(0x0,swagger_1[_0xabe262(0x18b)])(),__param(0x0,(0x0,common_1[_0xabe262(0x165)])()),__param(0x1,(0x0,common_1[_0xabe262(0x166)])()),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[Object,Object]),__metadata(_0xabe262(0x129),Promise)],ChatgptController['prototype'],_0xabe262(0x12d),null),__decorate([(0x0,common_1[_0xabe262(0x163)])('delChatBoxType'),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x130)}),(0x0,common_1[_0xabe262(0x155)])(superAuth_guard_1['SuperAuthGuard']),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0xabe262(0x165)])()),__param(0x1,(0x0,common_1[_0xabe262(0x166)])()),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[Object,Object]),__metadata('design:returntype',Promise)],ChatgptController[_0xabe262(0x15a)],'delChatBoxType',null),__decorate([(0x0,common_1[_0xabe262(0x186)])(_0xabe262(0x12f)),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x161)}),(0x0,common_1['UseGuards'])(adminAuth_guard_1[_0xabe262(0x164)]),__metadata('design:type',Function),__metadata(_0xabe262(0x173),[]),__metadata(_0xabe262(0x129),Promise)],ChatgptController[_0xabe262(0x15a)],_0xabe262(0x147),null),__decorate([(0x0,common_1[_0xabe262(0x163)])(_0xabe262(0x171)),(0x0,swagger_1['ApiOperation'])({'summary':_0xabe262(0x14a)}),(0x0,common_1[_0xabe262(0x155)])(superAuth_guard_1['SuperAuthGuard']),(0x0,swagger_1[_0xabe262(0x18b)])(),__param(0x0,(0x0,common_1[_0xabe262(0x165)])()),__param(0x1,(0x0,common_1[_0xabe262(0x166)])()),__metadata(_0xabe262(0x135),Function),__metadata('design:paramtypes',[Object,Object]),__metadata('design:returntype',Promise)],ChatgptController[_0xabe262(0x15a)],'setChatBox',null),__decorate([(0x0,common_1[_0xabe262(0x163)])('delChatBox'),(0x0,swagger_1['ApiOperation'])({'summary':_0xabe262(0x177)}),(0x0,common_1['UseGuards'])(superAuth_guard_1[_0xabe262(0x136)]),(0x0,swagger_1[_0xabe262(0x18b)])(),__param(0x0,(0x0,common_1[_0xabe262(0x165)])()),__param(0x1,(0x0,common_1['Body'])()),__metadata('design:type',Function),__metadata(_0xabe262(0x173),[Object,Object]),__metadata('design:returntype',Promise)],ChatgptController[_0xabe262(0x15a)],'delChatBox',null),__decorate([(0x0,common_1[_0xabe262(0x186)])(_0xabe262(0x174)),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x139)}),(0x0,common_1[_0xabe262(0x155)])(adminAuth_guard_1['AdminAuthGuard']),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[]),__metadata(_0xabe262(0x129),Promise)],ChatgptController[_0xabe262(0x15a)],'queryChatBox',null),__decorate([(0x0,common_1[_0xabe262(0x186)])('queryChatBoxFrontend'),(0x0,swagger_1['ApiOperation'])({'summary':'查询ChatBox分类加详细'}),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[]),__metadata(_0xabe262(0x129),Promise)],ChatgptController['prototype'],_0xabe262(0x13e),null),__decorate([(0x0,common_1['Post'])(_0xabe262(0x16f)),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x18c)}),(0x0,common_1[_0xabe262(0x155)])(superAuth_guard_1[_0xabe262(0x136)]),(0x0,swagger_1[_0xabe262(0x18b)])(),__param(0x0,(0x0,common_1[_0xabe262(0x165)])()),__param(0x1,(0x0,common_1['Body'])()),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[Object,Object]),__metadata(_0xabe262(0x129),Promise)],ChatgptController['prototype'],_0xabe262(0x16f),null),__decorate([(0x0,common_1[_0xabe262(0x163)])(_0xabe262(0x160)),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x137)}),(0x0,common_1[_0xabe262(0x155)])(superAuth_guard_1[_0xabe262(0x136)]),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0xabe262(0x165)])()),__param(0x1,(0x0,common_1['Body'])()),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[Object,Object]),__metadata(_0xabe262(0x129),Promise)],ChatgptController['prototype'],_0xabe262(0x187),null),__decorate([(0x0,common_1['Get'])(_0xabe262(0x172)),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x15b)}),(0x0,common_1[_0xabe262(0x155)])(adminAuth_guard_1[_0xabe262(0x164)]),__metadata(_0xabe262(0x135),Function),__metadata('design:paramtypes',[]),__metadata('design:returntype',Promise)],ChatgptController['prototype'],_0xabe262(0x13c),null),__decorate([(0x0,common_1[_0xabe262(0x163)])(_0xabe262(0x157)),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x141)}),(0x0,common_1[_0xabe262(0x155)])(superAuth_guard_1[_0xabe262(0x136)]),(0x0,swagger_1[_0xabe262(0x18b)])(),__param(0x0,(0x0,common_1[_0xabe262(0x165)])()),__param(0x1,(0x0,common_1[_0xabe262(0x166)])()),__metadata('design:type',Function),__metadata(_0xabe262(0x173),[Object,Object]),__metadata(_0xabe262(0x129),Promise)],ChatgptController[_0xabe262(0x15a)],_0xabe262(0x157),null),__decorate([(0x0,common_1['Post'])(_0xabe262(0x143)),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x16a)}),(0x0,common_1[_0xabe262(0x155)])(superAuth_guard_1[_0xabe262(0x136)]),(0x0,swagger_1[_0xabe262(0x18b)])(),__param(0x0,(0x0,common_1['Req'])()),__param(0x1,(0x0,common_1[_0xabe262(0x166)])()),__metadata(_0xabe262(0x135),Function),__metadata('design:paramtypes',[Object,Object]),__metadata('design:returntype',Promise)],ChatgptController[_0xabe262(0x15a)],'delChatPre',null),__decorate([(0x0,common_1[_0xabe262(0x186)])('queryChatPres'),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x170)}),(0x0,common_1['UseGuards'])(adminAuth_guard_1[_0xabe262(0x164)]),__metadata(_0xabe262(0x135),Function),__metadata(_0xabe262(0x173),[]),__metadata(_0xabe262(0x129),Promise)],ChatgptController['prototype'],_0xabe262(0x189),null),__decorate([(0x0,common_1['Get'])(_0xabe262(0x153)),(0x0,swagger_1[_0xabe262(0x182)])({'summary':_0xabe262(0x170)}),__metadata('design:type',Function),__metadata(_0xabe262(0x173),[]),__metadata(_0xabe262(0x129),Promise)],ChatgptController[_0xabe262(0x15a)],_0xabe262(0x153),null),ChatgptController=__decorate([(0x0,swagger_1[_0xabe262(0x133)])('chatgpt'),(0x0,common_1[_0xabe262(0x18d)])(_0xabe262(0x14d)),__metadata(_0xabe262(0x173),[chatgpt_service_1[_0xabe262(0x12c)],globalConfig_service_1[_0xabe262(0x145)]])],ChatgptController),exports[_0xabe262(0x179)]=ChatgptController;function _0x2dfc(){const _0x21d92c=['ChatgptController','chatProcess','32yUEcuI','draw','chatgptService','@nestjs/swagger','7556153inhjoR','mindCustomPrompt','JwtAuthGuard','ApiOperation','chatmind','metadata','delChatBox','Get','delChatPreType','__esModule','queryChatPre','decorate','ApiBearerAuth','添加修改预设分类类型','Controller','design:returntype','function','length','ChatgptService','setChatBoxType','../globalConfig/globalConfig.service','queryChatBoxTypes','添加修改ChatBoxType','1458485Wsnmrl','ChatProcessDto','ApiTags','delChatBoxType','design:type','SuperAuthGuard','添加修改ChatPretype','chatProcessSync','查询ChatBox列表','添加修改分类类型','12gcjBQI','queryChatPreType','../../common/auth/adminAuth.guard','queryChatBoxFrontend','gpt描述词绘画联想','assign','添加修改ChatPre','mjCustomFanyiPrompt','delChatPre','mind思维导图提示','GlobalConfigService','10oFfmSU','queryChatBoxType','queryChatBox','globalConfigService','添加修改ChatBox','140ewVKzB','1443735htCnlu','chatgpt','@nestjs/common','chat-process','../../common/auth/jwtAuth.guard','1194424GJxyGS','Res','queryChatPreList','26118lhXUtn','UseGuards','getConfigs','setChatPre','144520tsZBio','systemMessage','prototype','查询ChatPretype','__param','../../common/auth/superAuth.guard','接下来我会给你一些内容、我希望你帮我翻译成英文、不管我给你任何语言、你都回复我英文、如果给你了英文、依然回复我更加优化的英文、并且期望你不需要做任何多余的解释、给我英文即可、不要加任何东西、我只需要英文！','./dto/chatDraw.dto','delChatPretype','查询ChatBoxType','./dto/chatProcess.dto','Post','AdminAuthGuard','Req','Body','chat-sync','gpt绘画','__metadata','添加修改ChatPre提示词','getOwnPropertyDescriptor','mj-associate','gpt聊天对话','mjFanyi','setChatPreType','查询ChatPre列表','setChatBox','queryChatPretypes','design:paramtypes','queryChatBoxs','defineProperty','ChatDrawDto','添加修改ChatBox提示词','606434eFiEge'];_0x2dfc=function(){return _0x21d92c;};return _0x2dfc();}