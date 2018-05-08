const webpack = require('webpack');

module.exports = {
    entry: ["whatwg-fetch", "./js/app.jsx"],
    output: {
        filename: "./js/out.js"
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    watch: true,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            mangle: true,
            sourcemap: false,
            debug: false,
            minimize: true,
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.ProvidePlugin({
            videojs: 'video.js', 'window.videojs': 'video.js',
            RecordRTC: 'recordrtc', 'window.RecordRTC': 'recordrtc'
        }),
    ],
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','stage-2', 'react']
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    minimize: true
                }
            }, {
                loader: 'sass-loader'
            }]
        },
            {
                test: /\.(jpe?g|png|gif|svg|mp4|ttf)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
