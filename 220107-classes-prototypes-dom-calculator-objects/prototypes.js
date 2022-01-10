/**
 * Adding functions to an object and to its prototype.
 * 
 * An array is an object. You can add properties to an object,
 * so you can add properties to an array.
 * 
 * The value of a property may be of any type, including "function"
 * so you can add a function property to an array.
 */


// Here's a function
function getLastArrayItem () {
  console.log("array.getLastArrayItem() called")
  console.log("this is:", this)
  return this[this.length - 1]
}


// Let's add it to an array instace
const array1 = [ 1, 2, 3, 4 ]
array1.getLast = getLastArrayItem
console.log("array1.getLast():", array1.getLast())



// A function that is added to one object is not available to other
// objects of the same type.
const array2 = [ 5, 7, 8, 9 ]
try {
  console.log("array2.getLast():", array2.getLast())
} catch (error) {
  console.log("An error occurred when trying to call array2.getLast()")
}


// If we add a function to the object's _prototype_, then it is 
// available to all instances created with that prototype, even
// those instances which were created _before_ the function was
// added to the prototyp.
Array.prototype.getLastItem = getLastArrayItem // note different name

console.log(`
Testing the new prototype function:
----`
)
console.log("array1.getLastItem():", array1.getLastItem())
console.log("array2.getLastItem():", array2.getLastItem())


/**
 * WARNING: If you are working on a project with other developers,
 * or on a module that will be used by other developers, you should
 * be very cautious about modifying prototypes.
 */

console.log(`
Checking if the prototype already has a function with the given name:
----`
)
if (Array.prototype.getLastItem) {
  console.log("Whoa! Someone else has already altered the prototype")

} else {
  Array.prototype.getLastItem = function () {
    console.log("Array.prototype.getLastItem() does something different now.")
  }
}


// You can use Object.getOwnPropertyNames(...) to obtain an array of
// all the properties of an object.
// Note that Array.prototype now has the new property getLastItem
console.log(Object.getOwnPropertyNames(Array.prototype))

// $ node prototypes.js 
/*
array.getLastArrayItem() called
this is: [ 1, 2, 3, 4, getLast: [Function: getLastArrayItem] ]
array1.getLast(): 4
An error occurred when trying to call array2.getLast()

Testing the new prototype function:
----
array.getLastArrayItem() called
this is: [ 1, 2, 3, 4, getLast: [Function: getLastArrayItem] ]
array1.getLastItem(): 4
array.getLastArrayItem() called
this is: [ 5, 7, 8, 9 ]
array2.getLastItem(): 9

Checking if the prototype already has a function with the given name:
----
Whoa! Someone else has already altered the prototype
[
  'length',      'constructor',    'concat',
  'copyWithin',  'fill',           'find',
  'findIndex',   'lastIndexOf',    'pop',
  'push',        'reverse',        'shift',
  'unshift',     'slice',          'sort',
  'splice',      'includes',       'indexOf',
  'join',        'keys',           'entries',
  'values',      'forEach',        'filter',
  'flat',        'flatMap',        'map',
  'every',       'some',           'reduce',
  'reduceRight', 'toLocaleString', 'toString',
  'getLastItem'
]
*/