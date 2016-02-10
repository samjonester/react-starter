# React Starter Project
[![Build Status](https://travis-ci.org/samlawrencejones/react-starter.svg?branch=master)](https://travis-ci.org/samlawrencejones/react-starter)

## Adapted From
[react-hot-boilerplate](https://github.com/samlawrencejones/react-hot-boilerplate)

## Usage

### Development
```
npm install
npm start
open http://localhost:3000
```

### Bundling for Production
```
npm install
npm run bundle
```

### Linting
```
npm install
npm run lint
```

### Testing
```
npm install
npm test
```

## About
* [webpack](https://github.com/webpack/webpack) for module loading
	* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) for a hot loading dev server
	* Loaders
		* [babel-loader](https://github.com/babel/babel-loader)
		* [style-loader](https://github.com/webpack/style-loader)
		* [css-loader](https://github.com/webpack/css-loader)
		* [sass-loader](https://github.com/jtangelder/sass-loader)
		* [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)
* [babel](https://github.com/babel/babel) for transpiling jsx + ES2015  ->  JavaScript
	* Presets
		* [babel-eslint](https://github.com/babel/babel-eslint)
		* [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)
		* [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
		* [babel-preset-stage-0](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0)
* [eslint](https://github.com/eslint/eslint) for linting
* [react](https://github.com/facebook/react)
	* [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom) for the react entry point
* [karma](https://github.com/karma-runner/karma) test runner
	* [jasmine](https://github.com/jasmine/jasmine) test framework
	* [phantomjs](https://github.com/ariya/phantomjs/) headless browser for testing
	* [karma-spec-reporter](https://github.com/mlex/karma-spec-reporter) test reporting
	* [karma-coverage](https://github.com/karma-runner/karma-coverage) coverage reporting
