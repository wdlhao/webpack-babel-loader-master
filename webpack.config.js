var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
module.exports = {
  entry: SRC_PATH + "/js/index.js",
  output: {
    filename: "build.js",
    path: BUILD_PATH
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel',exclude: /node_modules/}//排除node_modules这个文件夹中的代码
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello babel-loader',
      filename: 'index.html',
      inject: true,
      hash: true
    })
  ]
};