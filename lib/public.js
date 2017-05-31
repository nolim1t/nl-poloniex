const request = require("request");
const fuckingundefinedemptynull = require("fuckingundefinedemptynull");
const emptyStringCheck = fuckingundefinedemptynull.isStringSet;
const buildquerystring = require('obj-to-querystring');

var response = {
  meta: {
    code: -1,
    message: "Invalid Parameters"
  }
};

module.exports = (requestinfo, callback) => {
  if (emptyStringCheck(requestinfo.endpoint)) {
    var baseurl = requestinfo.baseurl || 'https://poloniex.com/public?command=';
    var fullurl = baseurl + requestinfo.endpoint;
    var method = requestinfo.method || 'GET';
    var queryString = '';

    // Check for the following and then build a query string
    queryString = buildquerystring(queryString, requestinfo, 'currencyPair');
    queryString = buildquerystring(queryString, requestinfo, 'depth');
    queryString = buildquerystring(queryString, requestinfo, 'start');
    queryString = buildquerystring(queryString, requestinfo, 'end');
    queryString = buildquerystring(queryString, requestinfo, 'period');
    queryString = buildquerystring(queryString, requestinfo, 'currency');
    if (queryString !== '') queryString = queryString.replace('?', '&');

    request({uri: fullurl + queryString, method: method}, (e,r,b) => {
      if (!e) {
        response['meta'] = {
          code: 0,
          message: 'Done'
        };
        try {
          response['response'] = JSON.parse(b);
        } catch (ex) {
          response['meta'] = {
            code: -3,
            message: 'JSON Parse Error',
            body: b
          };
        } finally {
          callback(response);
        }
      } else {
        response['meta'] = {
          code: -2,
          message: 'API Error',
          error: e
        }
        callback(response);
      }
    });
  } else {
    response['meta'] = {
      code: -1,
      message: 'Requires \'endpoint\' (consult: https://poloniex.com/support/api/ for details on public endpoints)'
    }
    callback(response);
  }
}
