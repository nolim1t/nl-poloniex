const auth = require('./auth');
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
  if (emptyStringCheck(requestinfo.command)) {
  } else {
    response['meta'] = {
      code: -1,
      message: 'Requires a private \'command\' (consult: https://poloniex.com/support/api/ under \'Trading API Methods\' section for details on public endpoints)'
    }
    callback(response);
  }
};
