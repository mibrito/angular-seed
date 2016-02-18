'use strict'; // jshint ignore:line
var webpack = require('webpack'),
    path = require('path');

var SRC = path.join( __dirname,'/src');
var DIST = path.join(__dirname,'/dist');

var semantic_dir = path.join(__dirname,'/semantic/dist/'),
    leaflet_dir = path.join(__dirname,'node_modules/leaflet/dist');

module.exports = {
  devtool: 'eval',
  entry: {
    vendor: ['angular', 'angular-ui-router', 'angular-jwt', 'angular-storage', 'jquery', 'semantic'],
    common: ['semantic.css', 'leaflet.css'],
    bundle: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index'
    ]
  },
  output: {
    path: DIST,
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    modulesDirectories: ['node_modules', semantic_dir, leaflet_dir],
    extensions: ['', '.js', '.css']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: 2
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: SRC },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.(png|jpg)$/, loader: 'file?name=/src/images/[name].[ext]' },
  		{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
  		{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
  		{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/octet-stream'},
  		{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[hash].[ext]'},
  		{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=/images/[name].[hash].[ext]&mimetype=image/svg+xml' }
    ]
  }
};
