const path = require('path');
const HtmlWeebpackPlugins = require('html-webpack-plugins');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    stats: 'errors-only',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      }
    ]
  },
  plugins: [
    new HtmlWeebpackPlugins({
      template: path.resolve(__dirname, 'src', 'index.pug')
    })
  ]
}
