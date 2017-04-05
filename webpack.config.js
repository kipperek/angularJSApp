const path = require('path');
const webpack = require('webpack');
const glob = require("glob");
module.exports = {
  target: "web",
  entry: {
    app: glob.sync('./app/**/**/*.js'),
    vendor: ['angular', 'angular-translate']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
         test: /\.scss$/,
         use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
       },
       { test: /\.html$/, use: [ "html-loader" ] },
       {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: ['url-loader?limit=10000&mimetype=application/font-woff']
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: ['file-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: ['url-loader']
        },
     ]
   },
   plugins: [
     new webpack.optimize.CommonsChunkPlugin({
       name: "vendor",
       filename: "vendor.bundle.js"
     })
   ]
};
