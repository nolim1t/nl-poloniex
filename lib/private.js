const auth = require('./auth');
const request = require("request");
const fuckingundefinedemptynull = require("fuckingundefinedemptynull");
const emptyStringCheck = fuckingundefinedemptynull.isStringSet;
const buildquerystring = require('obj-to-querystring');
const assignFormParamsIfExist = require('assign-obj-params');

var response = {
  meta: {
    code: -1,
    message: "Invalid Parameters"
  }
};

module.exports = (requestinfo, callback) => {
  if (emptyStringCheck(requestinfo.command) && emptyStringCheck(requestinfo.key) && emptyStringCheck(requestinfo.secret)) {
    var baseurl = requestinfo.baseurl || 'https://poloniex.com/tradingApi';
    var method = requestinfo.method || 'POST';
    var formParams = {
      'command': requestinfo.command
    };
    var formPostData = 'command=' + formParams['command'];
    assignFormParamsIfExist(formParams, requestinfo, 'account');
    assignFormParamsIfExist(formParams, requestinfo, 'currency');

    var postHeader = auth({key: requestinfo.key, secret: requestinfo.secret, postdata: formPostData});
    if (postHeader['code'] == 0) {
      formParams['nonce'] = postHeader['nonce'];
      var inputRequest = {uri: baseurl, method: method, form: formParams, headers: postHeader['headers']};
      request(inputRequest, (e,r,b) => {
        if (!e) {
          response['meta'] = {
            code: 0,
            message: 'Not implemented fully (consult: https://poloniex.com/support/api/ under \'Trading API Methods\' section for details on public endpoints)',
            body: b
          }
          callback(response);
        } else {
          response['meta'] = {
            code: -3,
            message: 'Error from Poloniex',
            error: e
          };
          callback(response);
        }
      });
    } else {
      // error getting code
      response['meta'] = {
        code: -2,
        message: 'Internal Error: Error with auth method within nl-poloniex library'
      }
      callback(response);
    }
  } else {
    response['meta'] = {
      code: -1,
      message: 'Requires a private \'command\' (consult: https://poloniex.com/support/api/ under \'Trading API Methods\' section for details on public endpoints)'
    }
    callback(response);
  }
};
