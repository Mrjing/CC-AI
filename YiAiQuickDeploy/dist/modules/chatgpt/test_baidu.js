const _0x54d883=_0x5038;(function(_0x5b8a8a,_0x1b0145){const _0x4e56b4=_0x5038,_0x3c18a4=_0x5b8a8a();while(!![]){try{const _0x41e811=-parseInt(_0x4e56b4(0xf5))/0x1+parseInt(_0x4e56b4(0xfb))/0x2*(parseInt(_0x4e56b4(0xf1))/0x3)+parseInt(_0x4e56b4(0xf3))/0x4+parseInt(_0x4e56b4(0xeb))/0x5*(-parseInt(_0x4e56b4(0xfa))/0x6)+-parseInt(_0x4e56b4(0xf2))/0x7+parseInt(_0x4e56b4(0xe5))/0x8+parseInt(_0x4e56b4(0xec))/0x9;if(_0x41e811===_0x1b0145)break;else _0x3c18a4['push'](_0x3c18a4['shift']());}catch(_0x4e1f4c){_0x3c18a4['push'](_0x3c18a4['shift']());}}}(_0x2e83,0x8103d));function _0x5038(_0x4e24e2,_0x23a3fb){const _0x2e83a9=_0x2e83();return _0x5038=function(_0x50387a,_0x97c6c8){_0x50387a=_0x50387a-0xdf;let _0x2157c5=_0x2e83a9[_0x50387a];return _0x2157c5;},_0x5038(_0x4e24e2,_0x23a3fb);}function _0x2e83(){const _0x168498=['trim','filter','3155fZeCfV','6828399eqMQUu','end','data','catch','split','825621rvgZyn','2277177hTcyjT','3539496GrWYGH','请介绍一下你自己','706826qYDkCn','ZMyEVTR1VhGlGcsReK9BHZjgpne9ujsC','log','then','vdzYBsVGfz8eidePaZzT3nlC','9522VqAuRD','6Vgczll','application/json','replace','user','POST','Stream\x20end','axios','toString','742184wWqxja','access_token','error:\x20','parsed:\x20'];_0x2e83=function(){return _0x168498;};return _0x2e83();}const AK=_0x54d883(0xf9),SK=_0x54d883(0xf6),axios=require(_0x54d883(0xe3));function getAccessToken(){let _0x5aa247='https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id='+AK+'&client_secret='+SK;return new Promise((_0x547747,_0x55d40d)=>{const _0x51d5f9=_0x5038;axios['post'](_0x5aa247)[_0x51d5f9(0xf8)](_0x346173=>{const _0x883e22=_0x51d5f9;_0x547747(_0x346173[_0x883e22(0xee)][_0x883e22(0xe6)]);})['catch'](_0x344452=>{const _0x15317b=_0x51d5f9;console[_0x15317b(0xf7)](_0x15317b(0xe7),_0x344452),_0x55d40d(_0x344452);});});}async function main(){const _0x132791=_0x54d883,_0x364f0e=await getAccessToken(),_0x416454='https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token='+_0x364f0e;var _0x487f2f={'method':_0x132791(0xe1),'url':_0x416454,'responseType':'stream','headers':{'Content-Type':_0x132791(0xfc)},'data':{'stream':!![],'messages':[{'role':_0x132791(0xe0),'content':_0x132791(0xf4)}]}};axios(_0x487f2f)[_0x132791(0xf8)](_0x233522=>{const _0x9018da=_0x132791,_0x704922=_0x233522[_0x9018da(0xee)];let _0x30a948='';_0x704922['on'](_0x9018da(0xee),_0x40b71d=>{const _0x25d95e=_0x9018da;try{const _0x1453a5=_0x40b71d[_0x25d95e(0xe4)]()[_0x25d95e(0xf0)]('\x0a\x0a')[_0x25d95e(0xea)](_0x3c882e=>_0x3c882e[_0x25d95e(0xe9)]()!=='');for(const _0x3cc830 of _0x1453a5){const _0x10f08d=_0x3cc830[_0x25d95e(0xdf)]('data:\x20',''),_0x1d775f=JSON['parse'](_0x10f08d);console[_0x25d95e(0xf7)](_0x25d95e(0xe8),_0x1d775f);}}catch(_0x59513e){}}),_0x704922['on'](_0x9018da(0xed),()=>{const _0x60a4e=_0x9018da;console[_0x60a4e(0xf7)](_0x60a4e(0xe2));});})[_0x132791(0xef)](_0x3863d5=>{throw new Error(_0x3863d5);});}main();