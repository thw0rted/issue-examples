// We'll use our webpack config object with the karma-webpack plugin
import webpack from "./webpack.config.mjs";
// Plugin will make `entry` / `output` for us
delete webpack.entry;
delete webpack.output;

/** @type {(config: import("karma").Config) => void} */
export default function(config) {
    /** @type {import("karma").ConfigOptions} */
    const karmaOptions = {
        frameworks: ["jasmine", "webpack"],
        files: [
            "node_modules/zone.js/bundles/zone.umd.js",
            "node_modules/zone.js/bundles/zone-patch-rxjs-fake-async.umd.js",
            "node_modules/zone.js/bundles/zone-testing.umd.js",
            { pattern: "./src/testing/all_tests.ts", type: "js", watched: false },
        ],
        webpack,
        webpackMiddleware: {
            // Don't bother me with e.g. chunk names
            stats: "minimal",
        },
        preprocessors: {
            "./src/testing/all_tests.ts": ["webpack", "sourcemap"]
        },
        reporters: ["kjhtml", "dots"],
        port: 9876,
        autoWatch: true,
        client: {
            // Don't erase the output after a run
            clearContext: false,
        },
        jasmineHtmlReporter: {
            suppressAll: true,      // Console reporting handled by `progress`
        },
        concurrency: Infinity,
    };

    config.set(karmaOptions);
};
