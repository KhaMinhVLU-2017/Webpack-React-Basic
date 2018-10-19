const HWP = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 3333
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist/')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HWP({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ]
};