# Simulation of React.useState

This is a very simple Node app that allows you to see a little of what React does deep inside its black box.

Steps:

1. Open  `index.js` and note how:
   * The script imports a simulated React object
   * The App() function calls `setState` on this simulated React object, using "initial" as the argument.
   * This call returns a variable (`variable`) and a function (`setVariable`)
   * At this point, `variable` holds the value "initial"
   * The App() function then calls `setVariable` to update the value of `variable`.
   * The local value of `variable` does not change immediately.
   * The App() function is called automatically a second time, after the call to `setVariable`
   * The second time App() is called, the value of `variable` is set to "altered".

This is exactly the same behaviour as you will get from the real React object in a browser.

2. Note also the line: `global.App = App`. This is necessary in Node but not in a browser, because a browser will automatically created global variables for top-level declarations, but Node will not.
   
   You can check that this works differently in a browser by opening `index.html` in your browser and checking that the global `window` object does indeed have access to all the functions and variables declared at the top level in JavaScript.

3. Open `React.js` and note that:
   * The script creates an object named React
   * The script exports both React and an object containing React hooks (just `useState` in this case).
   * The React object holds a `values` object property, which starts empty
   * The React object's `useState` function starts by using a `try {} catch(error) {}` statement, where an error is deliberately thrown. This allows React to parse the call stack of the error to isolate where `useState` was called from. (NOTE: the `parseError()` function is very much simplified, compared to what React actually does.)
   * The `useState` function uses this information to determine if a value has already been set for this particular call to it. If so, it will use the current value; if not, it will use the initializing value.
   * The current value is stored in the `values` object, using the id of the interested component as the property name.
   * `useState` creates a `setValue` function which can be used to update the value of the state variable.
   * This `setValue` function checks if a new value has been adopted, and if so ***calls the function that triggered it*** one more time ***after a 0 ms timeout***. This ensures that all tasks in the current event loop have been completed before the component is re-rendered.
   * `useState` returns the current value of the state variable and a pointer to the function that can be used to change it.

This mimics what you will see happening for real when you call `React.useState()` or the setter functions that it returns.

4. Run `node index`. You should see output like this:
```bash
node index        

    React uses initialValue: initial
App says "initial"
App still says "initial" immediately after setVariable()

    React uses stored value: altered
App says "altered"
App still says "altered" immediately after setVariable()
```

5. Set a breakpoint on line 8 (`const [ variable, setVariable ] = useState("initial");`) of `index.js`, and then use the menu item Run > Start Debugging (or the shortcut F5) to step through the code with the debugger.