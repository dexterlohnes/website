import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import deepmerge from 'deepmerge'
import webpackCommonConfig from './webpack.common.babel'

let nodeModules = {}
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod
    })

let sourceMapSupportModule = 'require(\'source-map-support\').install({environment: \'node\'});\n\n'

let loaders = webpackCommonConfig.module.loaders.concat()
loaders.push({test: /\.scss$/, loader: 'null'})

delete webpackCommonConfig.module

export default deepmerge({
    devtool: 'source-map',
    entry: [
        './server.babel.js'
    ],
    output: {
        path: path.join(process.cwd(), 'tmp'),
        filename: 'server.js'
    },
    target: 'node',
    module: {
        loaders: loaders
    },
    plugins: [
        new webpack.BannerPlugin(sourceMapSupportModule, {
            raw: true,
            entryOnly: true
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __CLIENT__: false,
            __SERVER__: true,
            __PRODUCTION__: false,
            __DEV__: true,
            'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"'
        }),
        new webpack.IgnorePlugin(/vertx/)
    ],
    externals: nodeModules
}, webpackCommonConfig)
