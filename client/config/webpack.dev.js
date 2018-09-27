/**
 * @author: shushanth
 * @description: webpack development configuration,extends / merges webpack common
 * configuration
 */

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig,{
  /**
   * outpus the bundled JS file to path given below
   */

   output: {
    publicPath: '',
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].bundle.js'
  },

  /**
   * used for debugging , doesn't minimizes or mangles the JS
  */

  devtool: 'cheap-module-eval-source-map',

  /**
   * plugins: sets the environment
   */
  plugins: [
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    }),
  ]

});
