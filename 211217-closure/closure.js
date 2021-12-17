/**
 * closure.js
 */

function rollDice(player) {
  return innerFunction = () => {
    const diceRoll = Math.ceil(Math.random() * 6)
    return `${player} rolled ${diceRoll}`
  }
}

function innerFunction() {
  console.log("innerFunction called")
}

innerFunction()

const John = rollDice("John")
const Paul = rollDice("Paul")

console.log("John:", John)
console.log("John():", John())
console.log("John():", John())
console.log("John():", John())
console.log("John():", John())
console.log("Paul():", Paul())