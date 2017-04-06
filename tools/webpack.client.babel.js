import deepmerge from 'deepmerge'
import path from 'path'
// import autoprefixer from 'autoprefixer'
import webpackCommonConfig from './webpack.common.babel'
import loaders from './webpack.loaders.babel'
import plugins from './webpack.plugins.babel'

let isProduction = process.env.NODE_ENV === 'production'

let webpackDevServer = {}
webpackDevServer.hostname = process.env.WP_HOST || 'localhost'
webpackDevServer.port = process.env.WP_PORT || 8079
webpackDevServer.path = 'http://' + webpackDevServer.hostname + ':' + webpackDevServer.port

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
    debug: true,
    devtool: process.env.SOURCEMAP === 'true' ? 'source-map' : '',
    entry: entry,
    module: {
        loaders: loaders
    },
    // postcss: function () {
    //     return {
    //         normalprefixer: [autoprefixer({browsers: ['last 2 versions', '> 1%', 'ie 9']})],
    //         rtlprefixer: [autoprefixer({browsers: ['last 2 versions', '> 1%', 'ie 9']}), rtlcss]
    //     }
    // },
    devServer: {
        contentBase: webpackDevServer.path,
        publicPath: webpackDevServer.path + '/assets/',
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
        path: path.join(process.cwd(), 'public'),
        publicPath: webpackDevServer.path + '/assets/',
        chunkFilename: 'js/[name].js',
        filename: 'js/[name].js',
    },
    plugins: plugins,
}, webpackCommonConfig)
