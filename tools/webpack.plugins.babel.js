import ExtractTextPlugin from 'extract-text-webpack-plugin'
import blessPlugin from 'bless-webpack-plugin'
import webpack from 'webpack'

let isProduction = process.env.NODE_ENV === 'production'

let plugins = [
    // Global flags at compile time
    new webpack.DefinePlugin({
        __CLIENT__: true,
        __SERVER__: false,
        __PRODUCTION__: isProduction,
        __DEV__: !isProduction,
        "process.env.NODE_ENV": '"'+process.env.NODE_ENV+'"',
        __DEVTOOLS__: true
    })
]

if (process.env.EXTRACT_TEXT_PLUGIN === 'true') {
    plugins.unshift(new ExtractTextPlugin('css/[name].css'))
    plugins.unshift(blessPlugin({ imports: true, compress: true }))
}

if (isProduction) {
    plugins.unshift(new webpack.optimize.OccurrenceOrderPlugin())
    plugins.unshift(new webpack.optimize.DedupePlugin())
    plugins.unshift(new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        compress: {
            unused: false,
            warnings: false
        },
        sourceMap: false
    }))
} else {
    plugins.unshift(new webpack.HotModuleReplacementPlugin())
}

export default plugins
