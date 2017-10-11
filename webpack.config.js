let webpack = require("webpack")
let path = require("path")
let HtmlWebpackPlugin = require("html-webpack-plugin")

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
	context: path.join(__dirname, 'src'),

	entry: './MEEngine.js',

	output: {
		filename: "meengine.min.js",
		path: path.join(__dirname, 'build'),
		libraryTarget: 'umd',
	},

	devtool: 'eval',

	devServer: {
		port: 4200
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Samples",
			template: './examples/index.html',
			inject: 'head'
		}),
		new webpack.DefinePlugin({
	      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
	    })
	]
}