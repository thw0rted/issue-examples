// Simple wrapper to use built-in Node ESM support to load MJS config file
// via dynamic `import()`

module.exports = function(config) {
    return import("./karma.conf.mjs").then(mod => {
        mod.default(config);
    });
}
