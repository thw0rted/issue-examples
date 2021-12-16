// Webpack will parse all TS files under the provided directory that match the regex
const testsContext = require.context("../app/", true, /\.spec\.ts$/);

// Run each spec script
testsContext.keys().forEach(testsContext);
