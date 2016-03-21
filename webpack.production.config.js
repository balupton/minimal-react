const ExtractTextPlugin = require('extract-text-webpack-plugin')
const join = require('path').join

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
	entry: './source/index.js',

	output: {
		path: join(__dirname, 'build'),
		filename: 'bundle.js'
	},

	plugins: [
		new ExtractTextPlugin('bundle.css', {
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
