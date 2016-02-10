# React Starter Project

## Adapted From
[react-hot-boilerplate](https://github.com/samlawrencejones/react-hot-boilerplate)

## Usage

### Development
```
npm run setup
npm start
open http://localhost:3000
```

### Bundling for Production
```
npm run setup
npm run bundle
```

### Linting
```
npm run setup
npm run lint
```

### Testing
```
npm run setup
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
