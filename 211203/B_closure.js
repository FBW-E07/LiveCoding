// CLOSURES //
//
// A closure is created inside a function. It's like a wall around the
// variables and functions inside the enclosing function. Code that is
// outside the closure wall cannot read the values of variables inside.
//
// Closures can be used to keep data private.
//
// They can also be used to allow access to certain data and not others.

var ring = "global"

function myPrecious() {
  let ring = "my precious"
  console.log("The myPrecious has access to ring:", ring)
}

myPrecious() // "my precious"
console.log("Outside the function ring has a different value:", ring) // "global"

// However, an enclosing function can return a function that allows
// access to the variables in its closure:

function frodosRing() {
  let ring = "One ring to rule them all"

  return function showRing() {
    return ring
  }
}

// Note: a function that returns a function is called a Higher-Order
// Function.

const trustSamwise = frodosRing()

// The return function can be called with by appending ()  after its
// name.
// Note that the variable `trustSamwise` could be called anything, but
// it will still execute the `showRing` function.

const engraving = trustSamwise()
console.log("engraving:", engraving) // "One ring to rule them all"

// Here, trustSamwise can READ the value of `ring`, but it cannot change
// it.

// USING A PARAMETER IN A CLOSURE
// The parameter of a function is already within the closure

function forgeRing(owner, ringName) {
  // A function can return an object with function properties
  return {
    takeRing(thief) { owner = thief },
    revealOwner() {
      return `${ringName} is held by ${owner}.`
    }
  }
}

const ringBearer = forgeRing("Saruman", "The One Ring")
console.log("ringBearer.revealOwner()", ringBearer.revealOwner())

ringBearer.takeRing("Déagol")
console.log("ringBearer.revealOwner()", ringBearer.revealOwner())

ringBearer.takeRing("Sméagol")
console.log("ringBearer.revealOwner()", ringBearer.revealOwner())

ringBearer.takeRing("Bilbo the Hobbit")
console.log("ringBearer.revealOwner()", ringBearer.revealOwner())

// Note that it is not possible to change the name of the ring. No
// function to do so is provided, so the name is private inside the 
// closure