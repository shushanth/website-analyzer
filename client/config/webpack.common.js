
/**
 * @author: shushanth
 * @description: webpack common configuration, this is extended by webpack developement
 * and production configuration
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  /**
   * entry file for bootstrapping application
  */
  entry: path.resolve(__dirname, '../main.ts'),

  /**
   * resolves the below files extensions
  */

  resolve: {
    extensions: ['.js', '.ts', '.html', '.css']
  },

  /**
   * modules used to transpile the ts, html scss into a bundler
   */
  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader?{tsconfig: "../../tsconfig.json"}'
        ]
      },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, '../../node_modules'),
        loader: 'raw-loader!sass-loader'
      }
    ]
  },
  /**
   * statistics to load on the console
   */
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  /**
   * plugins used to bundle the code
   */
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../'),
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),

    /**
     * Plugin, which  automatically attaches the bundled JS file to html in <script> tag
     */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ]
}
