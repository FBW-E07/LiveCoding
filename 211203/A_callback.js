// CALLBACKS //
//
// A callback is a function that you pass as an argument to another
// function, so that the other function can use it. You have already
// seen callbacks with array methods:

const beatles = [
  { name: "George", value: 1 }
, { name: "Ringo", value: 99 }
, { name: "John", value: 66 }
, { name: "Paul", value: 23 }
]

const callback = ( item, index, array ) => {
  console.log("index:", index, "item:", item)
}

beatles.forEach(callback)

// Many examples show the callback function directly as the argument of
// the method:

beatles.forEach(item => {
  console.log("name:", item.name)
})