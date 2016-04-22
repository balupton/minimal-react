/* eslint no-console:0 */

// Imports
const express = require('express')
const config = require('../config')

// Server
const app = express()


// Routes

// Serve application file depending on environment
app.get(`/${config.assetsScript}`, function (req, res) {
	// Send generated file
    if ( config.production ) {
        res.sendFile(config.assetsScriptPath)
    }
	// Redirect to webpack development server
    else {
        res.redirect(`${config.webpackUrl}/${config.assetsDirectory}/${config.assetsScript}`)
    }
})

// Serve aggregate stylesheet depending on environment
app.get(`/${config.assetsStyle}`, function (req, res) {
	// Send generated file
    if ( config.production ) {
        res.sendFile(config.assetsStylePath)
    }
	// Redirect to webpack development server
    else {
        res.redirect(`${config.webpackUrl}/${config.assetsDirectory}/${config.assetsStyle}`)
    }
})

// Serve index page
app.get('*', function (req, res) {
    res.sendFile(config.assetsIndexPath)
})


// Servers

// Express server
const server = app.listen(config.port, config.hostname, function () {
    const {address: hostname, port} = server.address()
    console.log('Listening at http://%s:%s', hostname, port)
})

// Additional Webpack Dev Server
// See: http://webpack.github.io/docs/webpack-dev-server.html
if ( config.development ) {
	const webpackConfig = config.getWebpackConfig()
    const webpack = require('webpack')
    const WebpackDevServer = require('webpack-dev-server')
    new WebpackDevServer(webpack(webpackConfig), {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        noInfo: true,
        // historyApiFallback: true
    }).listen(config.webpackPort, config.webpackHostname, function (err) {
        if (err)  return console.error(err)
    })
}
