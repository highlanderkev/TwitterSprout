module.exports = {
  devtool: "#inline-source-map",
  entry: "./src",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, 
    {
      test: /\.(css|scss|sass)$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]'
    }, 
    { 
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      loader: "url-loader?limit=10000&mimetype=application/font-woff" 
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      loader: "file-loader" 
    },
    {
      test: /\.(png|jpg|gif|ico)$/,
      loader: "file-loader?name=img/[name].[ext]"
    }],
  }
};