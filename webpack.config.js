const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

const javascriptRules = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: 'babel-loader'
}

const cssRules = {
    test: /\.css$/,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
    ]
}

module.exports = {
    entry: {
        app: [
            '@babel/polyfill',
            './app/js/app.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'src', 'public'),
        filename: 'js/app.bundle.js'
    },
    module: {
        rules: [
            javascriptRules,
            cssRules
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.bundle.css'
        }),
        new MonacoWebpackPlugin()
    ]
}