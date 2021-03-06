const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        friendlyeats: './src/js/friendlyeats.js'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js",
    },
    devServer: {
        open: 'Google Chrome',
        contentBase: path.join(__dirname, "public"),
        port: 9010
    },
    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS Strings
                    { loader: 'style-loader' },

                    // Translates CSS into CommonJS
                    { loader: 'css-loader' },

                    // Compiles Sass to CSS
                    { loader: 'sass-loader' }
                ]
            },
            // Start here for the URL Loader
            {
                test: /\.(png|jpg)$/,
                use: [
                    { loader: 'url-loader' }
                ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9]\.png|jpg)?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }
        ]
    },
    plugins: [
        // Home Page
        new HtmlWebpackPlugin({
            title: 'Responsive Navigation',
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Friendly Eats',
            filename: 'friendlyeats.html',
            template: './src/html-templates/friendlyeats-template.html'
        }),
        // Favicon
        new FaviconsWebpackPlugin({
            logo: './src/images/favicon.ico'
        })
    ]
};