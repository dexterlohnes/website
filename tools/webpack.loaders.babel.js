import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpackCommonConfig from './webpack.common.babel'

let isProduction = process.env.NODE_ENV === 'production'

let loaders = webpackCommonConfig.module.loaders.concat()

if (process.env.EXTRACT_TEXT_PLUGIN === 'true') {
    loaders.push({
        test: /.scss$/,
        loaders: [
            ExtractTextPlugin.loader({
                extract: true,
                omit: 1
            }),
            'style-loader',
            'css-loader?-minimize&importLoaders=1',
            'postcss-loader',
            'sass-loader'
        ]
    })
} else {
    loaders.push({
        test: /.scss$/,
        loaders: [
            'style-loader',
            'css-loader?-minimize&importLoaders=1&root=../public&',
            'postcss-loader?!sass-loader?'
        ]
    })
}

let pluginLoaders = ['script-loader']
if (isProduction) {
    pluginLoaders.push('uglify-loader')
}
loaders.push({
    test: /(\/|\\)public(\/|\\)(.*?)\.js$/,
    loaders: pluginLoaders
})

export default loaders
