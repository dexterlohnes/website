import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpackCommonConfig from './webpack.common.babel'

let isProduction = process.env.NODE_ENV === 'production'

let loaders = webpackCommonConfig.module.loaders.concat()

if (process.env.EXTRACT_TEXT_PLUGIN === 'false') {
    loaders.concat([
        'style',
        'css?-minimize&importLoaders=1&root=../public&',
        'postcss-loader?!sass?'
    ])
} else {
    loaders.concat([
        ExtractTextPlugin.loader({
            extract: true,
            omit: 1
        }),
        'style',
        'css?-minimize&importLoaders=1&',
        'postcss-loader?',
        '&sass?'
    ])
}

let pluginLoaders = ['script']
if (isProduction) {
    pluginLoaders.push('uglify')
}
loaders.push({
    test: /(\/|\\)public(\/|\\)(.*?)\.js$/,
    loaders: pluginLoaders
})

export default loaders
