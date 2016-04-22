// Imports
const join = require('path').join
const hostenv = require('hostenv')

// Prepare
const config = module.exports

// Production
config.production = Boolean(process.env.PRODUCTION)
config.development = !config.production

// URLs
config.port = hostenv.PORT || 8080
config.hostname = hostenv.HOSTNAME || '0.0.0.0'
config.url = `http://${config.hostname}:${config.port}`

// Locations
config.rootPath = join(__dirname, '..')

config.sourceDirectory = 'client'
config.sourcePath = join(config.rootPath, config.sourceDirectory)
config.sourceScript = 'index.js'
config.sourceScriptPath = join(config.sourcePath, config.sourceScript)

config.outputDirectory = config.assetsDirectory = 'assets'
config.assetsPath = join(config.rootPath, config.assetsDirectory)
config.outputPath = join(config.rootPath, config.outputDirectory)
config.outputScript = 'bundle.js'
config.outputScriptPath = join(config.outputDirectory, config.outputScript)
config.outputStyle = 'bundle.css'
config.outputStylePath = join(config.outputDirectory, config.outputStyle)
config.assetsIndex = 'index.html'
config.assetsIndexPath = join(config.assetsPath, config.assetsIndex)

// Webpack
config.webpackPort = config.webpackPort = 9090
config.webpackHostname = config.webpackHostname = config.hostname
config.webpackUrl = config.webpackUrl = `http://${config.webpackHostname}:${config.webpackPort}`
config.getWebpackConfig = config.production
	? () => require('./webpack.production')
	: () => require('./webpack.development')
