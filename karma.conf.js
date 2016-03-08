var webpack = require('karma-webpack');

module.exports = function (config) {
  config.set({
		plugins: [webpack, 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter'],
		browsers: [ 'PhantomJS' ],
    singleRun: true,
    frameworks: [ 'jasmine' ],
    files: [
      'src/**/*[sS]pec.js' //just load this file, it loads all specs
    ],
    preprocessors: {
      'src/**/*[sS]pec.js': [ 'webpack' ] //preprocess with webpack and our sourcemap loader
    },
		reporters: [ 'spec', 'coverage' ],
		coverageReporter: {
			dir: 'build/reports/coverage',
			reporters: [
				{ type: 'html', subdir: 'report-html' },
				{ type: 'lcov', subdir: 'report-lcov' },
				{ type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
			]
		},
		webpack: {
			module: {
				loaders: [{
					test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
					loader: 'babel-loader'
				}]
			}
		},
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
