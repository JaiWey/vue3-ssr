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




const bodyParser = require('body-parser')
app.use(bodyParser.json())
const api = require('./server/api')

app.use('/api', api)


app.use(express.static('public'));


const port = 9000;

app.listen(port, () => {
  console.log(`UI started on port ${port}`);
});