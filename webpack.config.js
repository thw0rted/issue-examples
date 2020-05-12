const resolve = require("path").resolve;
const CopyPlugin = require ("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        path: resolve(__dirname, "./dist"),
        filename: "index_bundle.js"
    },
    plugins: [
        new CopyPlugin([{
            from: "./foo.js",
            to: "./esm/foo.js",
        }]),
        new HtmlWebpackPlugin({
            template: "./index.html",
            inject: true,
            production: true,
        }),
    ]
}
