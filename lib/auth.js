const crypto = require('crypto');
const fuckingundefinedemptynull = require("fuckingundefinedemptynull");
const emptyStringCheck = fuckingundefinedemptynull.isStringSet;
const process = require('process');

module.exports = (info) => {
  if (emptyStringCheck(info.key) && emptyStringCheck(info.secret) && emptyStringCheck(info.postdata)) {
    var ts = Math.floor(new Date().getTime() / 1000)
    var postData = info.postData;
    if (process.env['NODE_ENV'] !== undefined) {
      if (process.env['NODE_ENV'] == 'test') {
        postData = info.postdata;
      } else {
        postData = info.postdata + '&nonce=' + ts.toString();
      }
    } else {
      postData = info.postdata + '&nonce=' + ts.toString();
    }
    return {
      code: 0,
      message: 'OK',
      postData: postData,
      nonce: ts,
      headers: {
        'User-Agent': 'Poloniex Node.js client (http://nolim1t.co/opensource)',
        'Key': info.key,
        'Sign': crypto.createHmac('sha512', new Buffer(info.secret)).update(postData).digest('hex')
      }
    };
  } else {
    return {
      code: -1,
      message: 'Missing \'key\' and \'secret\' parameter'
    };
  }
};
