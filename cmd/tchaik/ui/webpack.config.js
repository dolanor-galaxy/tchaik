var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./static/js/src/app.js'],
  },

  output: {
    path: 'static/js/build/',
    pathInfo: true,
    publicPath: '/static/js/build/',
    filename: 'tchaik.js'
  },

  devtool: 'inline-source-maps',

  plugins: [
    new webpack.DefinePlugin({
      "process.env": Object.keys(process.env).reduce(function(o, k) {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {})
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader?stage=0'],
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass?outputStyle=expanded&" +
          "includePaths[]=" +
            (path.resolve(__dirname, "./bower_components")) + "&" +
          "includePaths[]=" +
            (path.resolve(__dirname, "./node_modules"))
      },
    ]
  }
};
