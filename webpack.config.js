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
     ]
   },
   plugins: [
     new webpack.optimize.CommonsChunkPlugin({
       name: "vendor",
       filename: "vendor.bundle.js"
     })
   ]
};
