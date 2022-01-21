/**
 * promise.js
 * 
 * A demonstration of using JavaScript's built-in Promises to retrieve
 * a result (or an error) from an asynchronous process.
 */



console.log("start")

// A Promise requires a function as its argument. When you call
// `new Promise(resolver)`, two things will happen:
// 1. The Promise instance will call the `resolver` function,
//    passing pointers to its internal `resolve` and `reject` methods
// ...
const resolver = (resolve, reject) => {
  setTimeout(() => {
    const boolean = !!Math.floor(Math.random() * 2) // true or false

    if (boolean) {
      resolve("boolean is true")

    } else {
      reject("boolean is false")
    }
  }, 100)
}

console.log("resolver created")

// 2. A Promise instance (object) will be returned.
const promise = new Promise(resolver)

// The Promise instance possesses a `then()` method. You can call this
// method with one or two function arguments. The first function
// will be called if the Promise resolves (succeeds). The second
// will be called if there is an error, or if the asynchronous process
// fails in some way.


console.log("promise created")


const whenResolved = (result) => {
  console.log("async promise resolved:", result)
}


const whenRejected = (reason) => {
  console.log("async promise rejected:", reason)
}


// .then() can be called before the timeout in resolver is triggered.
// In this case, the Promise will store the functions internally, and
// will call them later, as soon as it settles either to the resolved
// state, or to the rejected state.
promise.then(whenResolved, whenRejected)

console.log("then called")

/*
start
resolver created
promise created
then called
async promise resolved: boolean is true
*/

// .then() can also be called after the Promise has settled into its
// final state. The Promise stores its state and its final value, and
// will call the appropriate function immediately.


const ifResolved = (result) => {
  console.log("promise already resolved:", result)
}

const ifRejected = (reason) => {
  console.log("promise already rejected:", reason)
}

setTimeout(() => {
  console.log("")
  promise.then(ifResolved, ifRejected)
}, 2000)

/*
promise already resolved: boolean is true
*/