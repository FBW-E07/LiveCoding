/**
 * A simplistic polyfill for React, to illustrate how useState
 * works. See the README.md file for details.
 * 
 */


const React = {
  values: {}, // will become { "App": <value set via useState> }

  useState: (initialValue) => {
    // Find out which component called useState.
    let component; // will become "App"

    // React deliberately throws and catches an error, in order to
    // determine where the call to useState came from. It uses this
    // knowledge to store the current value for each use of useState
    // separately
    try {
      throw new Error();
    } catch (error) {
      component = React.parseError(error); // "App"
    }

    // Check if there is already a stored state value,
    // and if so, use it instead of the initializer value
    const current = React.values[component] || initialValue;

    // <<< FEEDBACK ONLY: not required
    if (React.values[component]) {
      console.log("\n    React uses stored value:", React.values[component]);
    } else {
      console.log("\n    React uses initialValue:", initialValue);
    }
    // FEEDBACK ONLY >>>

    const setValue = (newValue) => {
      React.values[component] = newValue;
      if (current !== newValue) {
        // If the value has changed, wait until all tasks in the
        // current event loop have finished, and then re-render the
        // component that called setState
        setTimeout(() =>  global[component](), 0)
      }
    };

    // Return the current value and a pointer to the setter function
    return [ current, setValue ];
  },


  parseError: (error) => {
    // error = {
    //   message: ""
    // , stack: <string shown partially below>
    // }

    //   console.log(error.stack)
    // Error: Who shall I say is calling?
    // at React.useState (/path/to/project/folder/closure.js:7:19)
    // at App (/path/to/project/folder/closure.js:42:23)      <<< [1]
    // at setValue (/path/to/project/folder/closure.js:30:17) <<< [2]
    // at ...

    // Isolate the line that includes the line of the function that
    // called useState. (NOTE: using a regular expression would be
    // neater.)
    let startIndex = error.stack.indexOf("\n") + 1;
    startIndex = error.stack.indexOf("\n", startIndex) + 1;
    let endIndex = error.stack.indexOf("\n", startIndex);
    let line = error.stack.substring(startIndex, endIndex);
    endIndex = line.indexOf(" (");
    line = line.substring(0, endIndex);
    startIndex = line.lastIndexOf(" ") + 1;

    // Grab the name of the function that called useState
    const componentName = line.substring(startIndex)
                              .replace("Object.", "") // "App"

    return componentName
  }
};


// Export React as the default, and export its hooks separately.
export default React;

const useState = React.useState;
export { useState };
