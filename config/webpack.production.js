// Imports
const config = require('./')

/**
 * This is the Webpack configuration file for production.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
	context: config.rootPath,
	entry: `./${config.sourceDirectory}/${config.sourceScript}`,

	output: {
		path: config.assetsPath,
		filename: config.assetsScript
	},

	plugins: [
		new ExtractTextPlugin(config.assetsStyle, {
			allChunks: true
		})
	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
				)
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.css']
	},

	postcss: [
		require('autoprefixer'),
		require('postcss-nested')
	]
}
