/**
 * @author: shushanth
 * @description: webpack production configuration,extends / merges webpack common
 * configuration
 */

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const commonConfig = require('./webpack.common.js');

const ENV_PROD = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  /**
   * outpus the bundled JS file to path given below
   */
  output: {
    publicPath: '',
    path: path.resolve(__dirname, '../../dist-prod'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV_PROD)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ]
})
