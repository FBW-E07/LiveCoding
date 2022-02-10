// Import a simplistic polyfill for React and React.useState.
// React is not actually used, but it is included for show.
import React, { useState } from "./React.js";


function App() {
  // Call the simulated useState() function with an initial value
  const [ variable, setVariable ] = useState("initial");
  // Log the value that is immediately returned
  console.log("App says", `"${variable}"`);

  // Call the setter function handled by React
  setVariable("altered");
  // The value of `variable` will not update immediately
  console.log(
    "App still says", `"${variable}" immediately after setVariable()\n`
  );
};


// In a browser, any variable or function that is declared at the
// top level is assigned to global scope.
// In Node, we have to cheat and assign it manually to global
// scope in order to emulate what happens in the browser and to
// give the React object access to it. 
global.App = App


// Simulate creating a component by calling the function
App();
