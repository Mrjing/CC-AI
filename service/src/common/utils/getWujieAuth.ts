import * as forge from 'node-forge'
const sign = (plaintText: string) => {
  const privateKey = process.env.WUJIE_PRIVATE_KEY
  if (!privateKey) {
    console.log('请配置私钥')
    return ""
  }
  let key = "-----BEGIN PRIVATE KEY-----\n" +
    privateKey +
    "-----END PRIVATE KEY-----\n";
  var prk = forge.pki.privateKeyFromPem(key);
  const md = forge.md.sha256.create();
  md.update(plaintText, "utf8");
  var sign64 = prk.sign(md);
  var sign = forge.util.encode64(sign64)
  console.log(sign);
  return sign;
}

export const getAuthorization = () => {
  // return `Bearer ${sign}`
  // console.log('process.env', process.env)
  const appId = process.env.WUJIE_APPID
  if (!appId) {
    console.log('请配置appId')
    return ""
  }
  //签名流程
  let timestamp = Math.floor(Date.now() / 1000).toString();
  let plaintText = JSON.stringify({
    appId: appId,//用于指定客户appID
    timestamp: timestamp
  })
  console.log("plaintText", plaintText)

  let auth
  try {
    auth = JSON.stringify({
      appId: appId,
      secretKeyVersion: "1",
      sign: sign(plaintText),
      original: plaintText
    })
  } catch (error) {
    console.log('error', error)
  }
  console.log("auth", auth)
  return auth
}


// export default () => {
//   return 'Hello Util'
// }
