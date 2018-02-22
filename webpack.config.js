'use strict';

var path = require('path');
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
//var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const SpritePlugin = require("svg-sprite-loader/plugin");
//var CleanWebpackPlugin = require('clean-webpack-plugin');
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      //'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, 'client/main.js')
    ]
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].js'
  },
  plugins: [
    // new CleanWebpackPlugin(['public', 'dist'], {
    //   verbose: true,
    //   dry: false,
    //   exclude: []
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'app/index.dust',
    //   inject: 'body',
    //   filename: 'index.dust',
    //   alwaysWriteToDisk: true
    // }),
    //new HtmlWebpackHarddiskPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __ENV__: JSON.stringify("development")
    }),
    //new SpritePlugin(),
    // new ExtractTextPlugin({
    //   filename: "styles.css",
    //   allChunks: true
    // }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'node-static',
    //   filename: 'node-static.js',
    //   minChunks(module, count) {
    //     var context = module.context;
    //     return context && context.indexOf('node_modules') >= 0;
    //   },
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   async: 'used-twice',
    //   minChunks(module, count) {
    //     return count >= 2;
    //   },
    // }),
    //new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    // alias: {
    //   "react": "preact-compat",
    //   "react-dom": "preact-compat"
    // }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          "presets": ["react", "es2015", "stage-0"]
        }
      }
    },
    // {
    //   test: /\.json?$/,
    //   loader: 'json-loader'
    // }, {
    //   test: /\.css$/,
    //   loader: ExtractTextPlugin.extract("css-loader")
    // },
    // {
    //   test: /\.scss$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: 'style-loader',
    //     use: [{ loader: "css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader" }]
    //   })

    // },
    // {
    //   test: /\.(svg|gif|png)$/,
    //   loader: 'file-loader',
    //   options: {
    //     name: "[path][name].[ext]?[hash]"
    //   }
    // }
    ]
  }
};
