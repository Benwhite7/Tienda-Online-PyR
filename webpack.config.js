const loader = require("html-loader");
const path = require("path");
const HtmlWebapckPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    mode : "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: "html-loader",
                
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test:/\.(png|svg|jpeg|gif)$/,
                type: "asset",
            }
        ]
    },
    plugins: [
        new HtmlWebapckPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css"
        }),
    ],
    devServer: {
        historyApiFallback: true,
        static: {
          directory: path.join(__dirname, 'public'),
          },
        compress: true,
        port: 3005,
      }
    }