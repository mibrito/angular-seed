var path             = require('path'),
  webpack          = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  config           = require('./webpack.config'),
  pkg              = require('./package.json')
  host             = 'localhost',
  port             = '8080';


new WebpackDevServer(webpack(config), {
    contentBase: path.join(__dirname, '/'),
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(port, host, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at '+ host +':'+ port);
});
