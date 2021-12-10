/**
 * indexOf.js
 * 
 * Using indexOf() and filter() to remove duplicates from an array
 */


const vowels = ['i', "i", "o", "i", "o", "i", "o", "i", "o"]

const uniqueVowels = vowels.filter((item, index, array) => {
  return array.indexOf(item) === index
})

console.log("uniqueVowels:", uniqueVowels)