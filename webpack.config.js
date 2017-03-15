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
      loaders: ['style-loader','css-loader','sass-loader']
    },
    {
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]'
    }, 
    {
      test: /\.(png|jpg|gif|ico)$/,
      loader: "file-loader?name=img/[name].[ext]"
    }],
  }
};