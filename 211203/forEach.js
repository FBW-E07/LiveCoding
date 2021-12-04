/**
 * Demonstration of Array.prototype.forEach()
 */

const beatles = [
  { name: "George", value: 1 }
, { name: "Ringo", value: 99 }
, { name: "John", value: 66 }
, { name: "Paul", value: 23 }
]

// forEach does not return anything.
// Using `return` does not stop the "loop". It simply prevents the
// callback function executing any further for that item
// Using `break` or `continue` would cause a Syntax Error
// It can be used to act on the individual items...
// ... or to alter the items

const result = beatles.forEach(item => {
  console.log("name:", item.name)
  item.group = "Beatles"

  if (item.name === "John") {
    // The "John" object won't get a manager
    return item
  }

  item.manager = "Brian"
})

console.log("") // te create a blank line in the output
console.log("beatles:", beatles)
console.log("")
console.log("result:", result) // no value was returned