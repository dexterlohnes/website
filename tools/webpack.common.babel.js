import path from 'path'

export default {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules|bower_components/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/, loader: 'json-loader'
            },
            {
                test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
                loaders: ["file-loader?context=public&name=/[path][name].[ext]"],
                exclude: /node_modules/
            },
            {
                test: /.css$/,
                include: [
                    path.resolve(__dirname, '../node_modules')
                ],
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[hash].[ext]"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[hash].[ext]"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[hash].[ext]"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/vnd.ms-fontobject&name=./fonts/[hash].[ext]"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=./fonts/[hash].[ext]"
            }
        ]
    },
    resolve: {
        modules: [
            "src",
            "sass",
            "public",
            "node_modules"
        ],
        extensions: [".json", ".js"]
    }
}
