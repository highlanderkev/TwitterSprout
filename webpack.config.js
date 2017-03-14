var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: "#inline-source-map",
  entry: "./src",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
      extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, 
    {
      test: /\.scss/,
      loaders: ['style', 'css', 'sass']
    }, 
    {
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]'
    }, 
    {
      test: /\.(png|jpg|gif|ico)$/,
      loader: "file-loader?name=img/[name].[ext]"
    }],
  },
  //plugins: [new HtmlWebpackPlugin()]
};