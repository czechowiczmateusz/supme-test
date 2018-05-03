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

    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader?cacheDirectory=true',
            query: {
                presets: ['es2015','stage-2', 'react']
            }
        }, {
            test: /\.scss$/,
            loader: ['style-loader', { loader: 'css-loader', options: { minimize: true } } , 'sass-loader',]
        },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
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
