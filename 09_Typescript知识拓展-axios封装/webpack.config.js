const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        clean: true
    },
    devServer: {
        port: 3000,
        open: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.cjs', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.jpg|jpe?g|svg|gif|png$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 60 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ts- webpack',
            template: './index.html'
        })
    ]
}