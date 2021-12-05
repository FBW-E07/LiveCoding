/**
 * Question: Suppose we have an array of objects. How can we the
 * with the highest value for a given property?
 * (Take 2)
 * 
 * Demonstration of:
 * 
 * + for loop
 */


// Another solution (simply basic):
// 1. Set a variable to a value known to be lower than the high value
// 2. Declare a variable to accept the optimal object
// 3. Use a for loop to iterate through the array
// 4. Each time it encounters an object with a higher value
//    * Update the value of `highest`
//    * Assign the object to `result
// 5. When the loop finishes, `result` will hold the object with
//    the highest value

const beatles = [
  { name: "George", value: 1 }
, { name: "Ringo", value: 99 }
, { name: "John", value: 66 }
, { name: "Paul", value: 23 }
]



const total = beatles.length
let highest = 0
let result

for ( let ii = 0; ii < total; ii += 1 ) {
  const item = beatles[ii]
  if (highest < item.value) {
    highest = item.value
    result = item
  }
}

console.log("result:", result)