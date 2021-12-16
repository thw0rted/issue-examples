import { AngularWebpackPlugin } from "@ngtools/webpack";
import linkerPlugin from "@angular/compiler-cli/linker/babel"
import HtmlPlugin from "html-webpack-plugin";

/** @type {import("webpack").Configuration} */
const config = {
    mode: "development",
    entry: {
        main: ["./src/main.ts"],
    },
    resolve: {
        extensions: [".ts", ".js", ".mjs"],
        exportsFields: [],
    },
    plugins: [
        new AngularWebpackPlugin(),
        new HtmlPlugin({
            templateContent: `
<!DOCTYPE html>
<html lang="en">

    <body><app-root></app-root></body>
</html>
`
        }),
    ],
    module: {
        rules: [{
            // Required by Angular 13+
            // See https://github.com/angular/angular/issues/44026
            test: /\.mjs$/,
            use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    compact: false,
                    plugins: [linkerPlugin],
                }
            },
            resolve: {
                fullySpecified: false,
            }
        }, {
            test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
            exclude: /node_modules/,
            use: "@ngtools/webpack",
        }],
    },
    devtool: "source-map",
};

export default config;
