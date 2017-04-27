import deepmerge from 'deepmerge'
import path from 'path'
// import autoprefixer from 'autoprefixer'
import webpackCommonConfig from './webpack.common.babel'
import loaders from './webpack.loaders.babel'
import plugins from './webpack.plugins.babel'
import config from '../src/config/getConfig'

let isProduction = process.env.NODE_ENV === 'production'

let webpackDevServer = {}
webpackDevServer.hostname = process.env.WP_HOST || 'localhost'
webpackDevServer.port = process.env.WP_PORT || 8079
webpackDevServer.path = 'http://' + webpackDevServer.hostname + ':' + webpackDevServer.port

let publicPath = isProduction ? config.publicAssetPath : webpackDevServer.path + config.publicAssetPath

let entry = {
    'app': ['./src/main.js'],
    'main': ['./sass/main.scss'],
    'plugins': ['./src/plugins.js']
}

if (!isProduction) {
    for (let key in entry) {
        if (entry.hasOwnProperty(key)) {
            entry[key].push('webpack/hot/only-dev-server')
        }
    }

    entry.app.unshift('react-hot-loader/patch')
    entry.devServerClient = 'webpack-dev-server/client?' + webpackDevServer.path
}

delete webpackCommonConfig.module

export default deepmerge({
    cache: true,
    devtool: process.env.SOURCEMAP === 'true' ? 'source-map' : '',
    entry: entry,
    module: {
        loaders
    },
    devServer: {
        contentBase: webpackDevServer.path,
        publicPath: webpackDevServer.path + config.publicAssetPath,
        hot: true,
        inline: false,
        lazy: false,
        quiet: true,
        noInfo: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        stats: {colors: true},
        host: webpackDevServer.hostname,
        port: webpackDevServer.port
    },
    output: {
        path: path.join(process.cwd(), 'public/'),
        publicPath: publicPath,
        chunkFilename: 'js/[name].js',
        filename: 'js/[name].js',
    },
    plugins: plugins,
}, webpackCommonConfig)
