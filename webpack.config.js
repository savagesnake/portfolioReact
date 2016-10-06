var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool:"inline-source-map",
  entry:[
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server',
    './src'
  ],
  output:{
    path:path.join(__dirname),
    filename:'src/bundle.js'
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
      loaders: [ 'babel?presets[]=react,presets[]=es2015']
    }
  ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
