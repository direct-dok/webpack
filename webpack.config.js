const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = "development";
let target = 'web';

if(process.env.NODE_ENV === "production") {
    mode = "production";
    let target = 'browserslist';
}

console.log(mode);

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'), 
        filename: 'main.js',
        assetModuleFilename: "images/[hash][ext][query]"

    },
    mode: mode, 
    target: target,
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        historyApiFallback: true,
        open: true, 
        compress: true,
        hot: true,
        liveReload: false,
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, './src/index.html'),
                filename: 'index.html', 
                inject: 'body'
            }
        ), 
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }, 
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }, 
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                        MiniCssExtractPlugin.loader, 
                        "css-loader", 
                        "postcss-loader", 
                        "sass-loader"
                    ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
            },
        ]
    },
    
}