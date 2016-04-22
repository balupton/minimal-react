/* eslint no-console:0 */
const express = require('express')
const join = require('path').join
const app = express()


/*
Express routes for:
- app.js
- style.css
- index.html
*/

// Serve application file depending on environment
app.get('/bundle.js', function (req, res) {
    if (process.env.PRODUCTION) {
        res.sendFile(join(__dirname, 'build', 'bundle.js'))
    }
    else {
        res.redirect('//localhost:9090/build/bundle.js')
    }
})

// Serve aggregate stylesheet depending on environment
app.get('/bundle.css', function (req, res) {
    if (process.env.PRODUCTION) {
        res.sendFile(join(__dirname, 'build', 'bundle.css'))
    }
    else {
        res.redirect('//localhost:9090/build/bundle.css')
    }
})

// Serve index page
app.get('*', function (req, res) {
    res.sendFile(join(__dirname, 'build', 'index.html'))
})


/*
Webpack Dev Server
See: http://webpack.github.io/docs/webpack-dev-server.html
*/
if ( !process.env.PRODUCTION ) {
    const webpack = require('webpack')
    const WebpackDevServer = require('webpack-dev-server')
    const config = require('./webpack.local.config')

    new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        hot: true,
        noInfo: true,
        historyApiFallback: true
    }).listen(9090, 'localhost', function (err) {
        if (err)  return console.error(err)
    })
}


/*
Express server
*/
const port = process.env.PORT || 8080
const server = app.listen(port, function () {
    const {address: host, port} = server.address()
    console.log('Listening at http://%s:%s', host, port)
})
