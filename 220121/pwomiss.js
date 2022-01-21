/**
 * pwomiss.js
 * 
 * An childishly simple emulation of a JavaScript Promise.
 * 
 * 1.  A promise is an object with a `then` method
 * 2.  The `then` method can be called multiple times with different
 *     values
 * 3.  The `then` method returns another promise
 * 4.  If the two arguments to the `then` method are functions, then
 *     the first will be called if the promise resolves, the second
 *     will be called if it is rejected
 * 5.  Neither callback will be called until after the current
 *     JavaScript event loop is completed
 * 6.  A promise keeps track of its state:
 *     pending, resolved, rejected
 * 7.  It starts in the "pending" state. When it shifts to either the
 *     "resolved" or the "rejected" state, neither its state nor its
 *     value will ever change again.
 * 
 * 8.   A promise also has `catch` and `finally` methods.
 * 9.  If only one argument is sent to the `then` method, the `catch`
 *     method will be triggered instead of the missing `onReject`
 * 10. The `finally` method will always be trigged after the promise
 *     settles into a non-pending state.
 * 
 * The Pwomiss function that follows is a simplistic sketch of a
 * Promise. Here's what it does not do:
 * 
 * - A call to `then` does not return a promise
 * - No `catch` or `finally` methods are defined
 * - There are no `try ... catch` statements to deal with unexpected
 *   errors
 * - There is no check on whether the arguments to `then()` are 
 *   functions
 * - The Pwomiss function can be called without `new`.
 * - A callback may be triggered immediately
 */

function Pwomiss(resolver) {
  // A Promise starts in the `pending` state. When the resolver 
  // function finally returns a result or an error, the state will
  // switch permanantly to "resolved" or "rejected"
  var state = "pending"

  // When this.then() is called before the Promise has settled into
  // its final state, the argument functions sent to `then` need to
  // be stored until the Promise is settled
  var thenced = []

  // Initially, the value of the Promis is undefined. When the Promise
  // is resolved or rejected, `value` will become permanently fixed.
  var value


  // The `then()` function is a property of the Promise object, so
  // it can be called from outside. The arguments should be functions.
  this.then = function(onResolve, onReject) {
    // Call the appropriate function immediately, if the Promise's
    // state and value are already settled...
    switch (state) {
      case "resolved":
        return onResolve(value)

      case "rejected":
       return onReject(value)
    }

    // ... but if not, save the functions for later
    thenced.push({ onResolve, onReject })
  }


  // The `resolve` and `reject` function arguments that are inside the
  // Promise's closure. Only one of these functions will be executed,
  // and it will only be executed once. After that, the `state` and
  // `value` of this Promise will be settled forever.
  function resolve(result) {
    if (state !== "pending") {
      return
    }

    state = "resolved"
    value = result

    // If `then` was called earlier, callback the appropriate function
    thenced.forEach(endWait)
  }

  function reject(reason) {
    if (state !== "pending") {
      return
    }

    state = "rejected"
    value = reason
    thenced.forEach(endWait)
  }

  // endWait is called for each set of functions that were used as 
  // arguments to a call to `then()`
  function endWait( waiter ) {
    const { onResolve, onReject } = waiter

    switch (state) {
      case "resolved":
        return onResolve(value)

      case "rejected":
       return onReject(value)
    }
  }

  // Immediately call the resolver function, so that it will have access
  // to the `resolve` and `reject` functions in this Promise's closure,
  // and can start its asynchronous task.
  resolver(resolve, reject)
}


// Create a resolver function, which will be called by the Promise
// so that it can use the `resolve` and `reject` functions from the
// Promise's closure
const toBeDecided = (resolve, reject) => {
  setTimeout(() => {
    const random = Math.floor(Math.random() * 100) // 0 - 99

    if (random % 2) {
      resolve(random) // resolve odd numbers

    } else {
      reject(random) // reject even numbers
    }
  }, 100)
}


// Create an instance of the (childish) Promise. The `toBeDecided`
// function will be called immediately, with pointers to the Promise's
// internal `resolve` and `reject` functions
const promise = new Pwomiss(toBeDecided)


// Create functions for the Promise to call back when it finally settles
// to either its resolved or its rejected state.
const whenResolved = oddNumber => console.log(`√ ${oddNumber} is odd`)
const whenRejected = evenNumber => console.log(`X ${evenNumber} is even`)


// Call the Promise's `then()` method, so that it knows to call one or
// other of these functions when the Promise is settled.
promise.then(whenResolved, whenRejected)

/* SAMPLE OUTPUT:
√ 49 is odd
*/




// See what happens if the promise's `then` method is called after
// its state has been settled
setTimeout(() => {
  const ifResolved = odd => console.log(`√ ${odd} was odd`)
  const ifRejected = even => console.log(`X ${even} was even`)

  console.log("Delayed call...")
  promise.then(ifResolved, ifRejected)
}, 1000)

/* SAMPLE OUTPUT:
Delayed call...
√ 49 was odd
*/