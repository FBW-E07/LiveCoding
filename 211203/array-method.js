/**
 * Question: Suppose we have an array of objects. How can we the
 * with the highest value for a given property?
 * 
 * (Original question: how do we find the northernmost capital?) 
 * 
 * Demonstration of:
 * 
 * + Array.prototype.map()
 * + Array.prototype.filter()
 * + Array.prototype.find()
 * 
 * + Math.max()
 */


// One solution (but not the best):
// 1. Create an array of the values of the given property
// 2. Calculate the highest value in the array
// 3. Use .filter() to remove all objects that do not have that
//    value
// 4. Select the first object in the filtered array


const beatles = [
  { name: "George", value: 1 }
, { name: "Ringo", value: 99 }
, { name: "John", value: 66 }
, { name: "Paul", value: 23 }
]


const values = beatles.map( item => {
  // item ≈ { name: "George", value: 1 }
  return item.value
})

// We can use the spread operator (...) to convert an array
// to a sequence of separate arguments
const highestValue = Math.max(...values)
console.log("values:", values, highestValue)

// For all array methods, (at least) three arguments are sent
// to the callback: 
// * the next item in the array
// * the index of this item
// * a pointer to the array itself
// If you use more than one argument, you must use parentheses
// around the parameters
const filteredArray = beatles.filter( ( item, index, array ) => {
  const testResult = ( item.value === highestValue )
  return testResult
})

console.log("filteredArray:", filteredArray)
console.log("filtered object:", filteredArray[0]);


// A Better Solution® (but still not the best)
const objectWithHighestValue = beatles.find( item => {
  return item.value === highestValue
})
console.log("objectWithHighestValue:", objectWithHighestValue)

/**
 * Question: when do we use ()?
 * 
 * 1. Calling a function or method:
 *    const randomNumber = Math.random()
 *    console.log(randomNumber)
 * 
 * 2. highest-precedence operator
 *    > 2 + 3*4
 *    14
 *    > (2 + 3) * 4
 *    20
 * 
 * 3. Grouping parometers in a function declaration
 *    - function (arg1, arg2) {}
 *    - const fn = () => {}
 *    - const fn = arg1 => {}  // <<< not require if unique parameter
 *    - const fn = (arg1) => {}
 *    - const fn = (arg1, arg2) => {}
 *
 * 4. Immediately Invoked Function Expression
 *    (function () { console.log("this is an iife") })()
 * */ 
