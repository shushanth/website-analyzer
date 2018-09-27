/**
 * @author: shushanth
 * @description: karma configuration files, uses webpack common config and enables
 *  the karma test runner based on the below configuration.
 */
const webpackConfig = require('./webpack.common');
const path = require('path');

module.exports = function (config) {
  const _config = {

    /**
     * base path, which uses appends/search from this path
    */

    basePath: '.',

    /**
     * jasmine is assertion library used
    */

    frameworks: ['jasmine'],

    /**
     * loads the files to test based on the pattern
     */

    files: [
      { pattern: './karma-test-shim.js', watched: false },
    ],

    /**
     * preprocess the required angular depenency an adds the source map which
     * ensures the files are used for debugging while testing ,
    */

    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },

    /**
     * shows errors, when test suite is empty
    */

    failOnEmptyTestSuite: false,

    /**
     * webpack configuration
    */
    webpack: webpackConfig,

    /**
    * middleware which shows error in npm run test , when there are any errors
    * in code (can be any errors, syntax, reference error etc. )
    */
    webpackMiddleware: {
      stats: 'errors-only'
    },

    /**
     * webpack server
    */

    webpackServer: {
      noInfo: true
    },

    /**
     * code coverage and other reporters
     */

    reporters: ['progress', 'kjhtml'],

    /**
     * port
     */
    port: 9876,

    /**
     * colors in console
     */
    colors: true,
    /**
     *
     */
    autoWatch: true,

    /**
     * default browser , phantomJS can also be used here
    */
    browsers: ['Chrome'],
    singleRun: false
  };

  config.set(_config);
};
