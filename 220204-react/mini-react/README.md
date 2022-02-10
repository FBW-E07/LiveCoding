# Manually Create a Minimal React Project

Find the tutorial by Nikhil Kumaran S [here](https://dev.to/nikhilkumaran/don-t-use-create-react-app-how-you-can-set-up-your-own-reactjs-boilerplate-43l0)

## Steps

1. `mkdir mini-react && cd mini-react`
2. `npm init -y`
3. `npm install react react-dom --save`
4. `npm install @babel/core @babel/preset-env @babel/preset-react --save-dev `
5. `npm install webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin --save-dev`

6. Add...
```json
  ,
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  },
  "scripts": {
    "start": "webpack-dev-server --mode=development --open --hot",
    "build": "webpack --mode=production"
  },
  "bin": {
    "mini-react": "./bin/start.js"
  }
```
... to package.json

6. Create webpack.config.js with the following contents:
```javascript
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
```

---
7. Add minimal content
  * Add `src/` folder
  * Add `src/index.html` with `<div id="root"></div>`
  * Add `src/HelloWorld.html`

```javascript
import { render } from 'react-dom';

import HelloWorld from './HelloWorld';

render(<HelloWorld />, document.getElementById('root'));
```

   * Add `src/index.js`
```javascript
import { render } from 'react-dom';

import HelloWorld from './HelloWorld';

render(<HelloWorld />, document.getElementById('root'));
```
---
8. `npm start`