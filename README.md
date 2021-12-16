# Spectator testing starter

The goal of this repo is to make an Angular project built via Webpack plugin (@ngtools/webpack) rather than the `ng` CLI, complete with component unit tests using Spectator (@ngneat/spectator).

## Scripts

NPM scripts are defined for

* `build`: compile the project, output is in `./dist/`
* `start`: run `webpack serve`, hosted on `http://localhost:8080`
* `test:unit`: runs all `spec.ts` tests with Karma, via karma-webpack
