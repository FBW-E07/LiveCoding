# Create a React Project Automatically with create-react-app

## Steps

1. `npx create-react-app cra-react`
2. `cd cra-react`
3. `npm start`

---

## To Trim Back to a HelloWorld version

4. Delete all but `index.html` from `public/`
5. Delete all but `index.js` and `App.js` from `src/`
6. Reduce `App.js` to:

```jsx
function App() {
  return (
    <h3>Hello World</h3>
  );
}

export default App;
```

7. Reduce `index.js` to:

```jsx
import { render } from 'react-dom';
import App from './App';

render( <App />, document.getElementById('root') );
```

8. Strip out unnecessary lines from `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
---
9. `npm start`