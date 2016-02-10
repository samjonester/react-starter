var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var env = process.env.NODE_ENV

var pluginBase = [
	new HtmlWebpackPlugin({
		template: './src/index.html'
	}),
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(env)
		},
	}),
	new ExtractTextPlugin("styles.css")
]
var appEntry = [
	  './src/index'
];

if (env === 'development') {
	pluginBase.push(new webpack.HotModuleReplacementPlugin())
	appEntry.push('webpack-dev-server/client?http://localhost:3000');
	appEntry.push('webpack/hot/only-dev-server');
} else {
	pluginBase.push(new webpack.optimize.UglifyJsPlugin({
		compressor: {
			warnings: false,
		},
	}))
	pluginBase.push(new webpack.optimize.OccurenceOrderPlugin())
}



module.exports = {
  devtool: 'eval',
  entry: appEntry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: pluginBase,
	eslint: {
		configFile: '.eslintrc'
	},
  module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			}
		],
    loaders: [
			{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader", "sass-loader")
			},
			{
				test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
				loader: 'file?name=img/[name]-[sha1:hash:hex:10].[ext]' // hash!
			}
		]
  }
};
