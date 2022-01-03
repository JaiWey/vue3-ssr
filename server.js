const express = require('express');

const app = express();

const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
config.entry.push('webpack-hot-middleware/client')
config.plugins.push(new webpack.HotModuleReplacementPlugin())
const compiler = webpack(config);
app.use(devMiddleware(compiler));
app.use(hotMiddleware(compiler));


app.use(express.static('public'));

const port = 9000;

app.listen(port, () => {
  console.log(`UI started on port ${port}`);
});