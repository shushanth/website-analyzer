/**
 * @author shushanth
 * @description webpack configuration for the app,exports the common config,
 * where dev and prod configurartion can be distinguished
 */
'use strict';
const environment = (process.env.NODE_ENV || 'development').trim();
console.log(environment);
if(environment === "development") {
  module.exports = require('./client/config/webpack.dev.js');
} else {
  module.exports = require('./client/config/webpack.prod.js');
}
