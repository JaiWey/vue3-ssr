const webpack = require('webpack');
const path = require('path')
const nodeExternals = require('webpack-node-externals');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry:  './ssr/ssr-server' ,
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  output: {
    filename: 'ssr-server.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: { node: '12' },
              }]
            ],
            plugins: ["@babel/transform-runtime"]
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  devtool: 'source-map',
};