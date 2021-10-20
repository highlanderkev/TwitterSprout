module.exports = {
  devtool: "#inline-source-map",
  devServer: {
    contentBase: './dist'
  },
  entry: "./src",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    },
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        'ts-loader'
      ]
    },
    {
      test: /\.(css|scss|sass)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.html$/,
      use: {
        loader: 'file-loader',
        options: {
          name: "[name].[ext]"
        }
      }
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      }
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: {
        loader: "file-loader"
      }
    },
    {
      test: /\.(png|jpg|gif|ico)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]"
        }
      }
    }
  ],
  }
};
