var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var env = process.env.NODE_ENV;
var hot = (env === 'development') ? true : false;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: hot,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
