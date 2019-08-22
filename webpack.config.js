const path = require('path');
const HtmlWeebpackPlugins = require('html-webpack-plugins');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path.resolve(__dirname, 'dist'),
    filename: [name].js
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      }
    ]
  }
  plugins: [
    new HtmlWeebpackPlugins({
      template: path.resolve(__dirname, 'src', 'index.pug')
    })
  ]
}
