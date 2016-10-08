var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool:"eval",
  entry:'./src/index.js',
  // devtool:"inline-source-map",
  // entry:[
  //   'webpack-dev-server/client?http://127.0.0.1:8080/',no
  //   'webpack/hot/only-dev-server',
  //   './src'
  // ],
  output:{
    path:path.join(__dirname,'/public'),
    filename:'./src/bundle.js'
    // publicPath:'/public/'
  },
  resolve:{
    moduleDirectories:['node_modules','src'],
    extensions:['','.js']
  },
  module:{
    loaders:[
      {
      test:/\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test:/\.css$/, loader:'style!css'
    },
    {
      test:/\.scss$/, loader: ExtractTextPlugin.extract('css!sass')
    },
    { test: /\.jpg$/, loader: 'file-loader' },
    {test:/\.png$/,loader:'file-loader'}
  ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("style.css")
  ]
};
