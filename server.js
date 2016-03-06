var env = process.env.NODE_ENV;

if (env === 'development') {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:3000');
  });
} else {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname + '/dist'));

  var port = process.env.PORT || 3000;
  app.listen(port, function() {
      console.log('Our app is running on http://localhost:' + port);
  });
}
