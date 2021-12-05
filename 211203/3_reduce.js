/**
 * Question: Suppose we have an array of objects. How can we the
 * with the highest value for a given property?
 * (Take 2)
 * 
 * Demonstration of:
 * 
 * + for loop
 */

const beatles = [
  { name: "George", value: 1 }
, { name: "Ringo", value: 99 }
, { name: "John", value: 66 }
, { name: "Paul", value: 23 }
]

// reduce iterates through an array
//        arguments: callback function, initial value
//        returns a single value: whatever is returned from the
//           last call to the `reducer` callback
const result = beatles.reduce(reducer, { value: 0 })


// callback function receives FOUR arguments
// 1. previous
// 2. current
// 3. index
// 4. array
// The first time the callback is called, previous will have the
// value defined in the call from reduce()
// The value returned by the callback is used for the next value
// for `previous`. 
function reducer(previous, current, index, array) {
  // console.log("previous:", previous, "current:", current, "index:", index, "array:", array)

  // current ≈ { name: "George", value: 1 }
  if (previous.value < current.value) {
    return current // we've found a new highest value
  }

  return previous // the previous object had a higher  (or =) value
}


console.log("result:", result)


