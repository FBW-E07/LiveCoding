// USING CALLBACKS WITH CLOSURES
//
// Suppose you want to keep some information secret, and yet give
// some kind of access to the secret data. You can create a closure
// with a function, and then use that function as a callback to some
// other function.
//
// Here is a simplistic demo, which will not actually keep any data
// safe, since you can see everything in this script.



// THE CLOSURE //

function betYouCantGuessMy(password) {
  // password will be stored in the closure. It will never be revealed.

  // Return a function that allows the caller to check at least 10
  // guesses. If one is right, the function will return false. If they
  // are all wrong, it will return true.

  return function guessPassword(bruteForceGuesses) {
    if (!Array.isArray(bruteForceGuesses)) {
      throw Error("You must call guessPassword with an array")
    } else if (bruteForceGuesses.length < 10) {
      throw Error("Call guessPassword with at least 10 guesses")
    }

    // <array>.every(callback) will return true if the callback
    // returns true every time. If it returns false, execution will
    // stop (like `break` in `for` loop) and it will return false.
    //
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

    allWrong = bruteForceGuesses.every( guess => guess !== password)

    return allWrong
  }
}

const guessPassword = betYouCantGuessMy("my_secret")


// THE CALLBACK //

/**
 * checkPossiblePasswords creates an array of potential passwords
 * and then calls the callback function to check if any of them are
 * right.
 */
function checkPossiblePasswords(callback) {
  const myGuesses = [ 
    'password',
    'qwerty',
    'abc123',
    'letmein',
    // 'my_secret', // uncomment this line to make callback return false
    'iloveyou',
    'admin',
    'trustno1'
  ]

  // Add numerical passwords like "123", ... "123456789"
  for ( let ii = 3; ii < 10; ii += 1 ) {
    // Create an array of ii (undefined) elements, then fill it with
    // zeros.
    // NOTE: If the elements are left undefined, the .map() method
    // will not work.
    // Once it has any kind of defined value, set its elements
    // using the index value of each element (plus 1 for luck)
    // Finally, join the elements together into a string.
    // 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

    const numbers = Array(ii) // [undefined, undefined, undefined]
                    .fill(0)  // [0, 0, 0] 
                    .map((item, index) => index + 1) // [1, 2, 3]
                    .join("") // "123"
    myGuesses.push(numbers)
  }

  // console.log("myGuesses:", myGuesses)

  return callback(myGuesses)
}

// Call the checkPossiblePasswords function, sending it guessPassword
// (as a variable name, without any parentheses), for it to call when
// it has completed making a list of passwords. It is the result of the
// call to guessPassword() which will be returned.

const allGuessesWereWrong = checkPossiblePasswords( guessPassword )

console.log(allGuessesWereWrong ? "Told you so!" : "One of the guesses was right")