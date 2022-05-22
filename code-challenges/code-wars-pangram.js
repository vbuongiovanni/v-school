// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

let string = "The quick brown fox jumps over the lazy dog."

function isPangram(string){

    // my initial solution:

    // let requiredLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // let removeIndex
    // string.split("").map(letter => {
    //     removeIndex = requiredLetters.indexOf(letter.toUpperCase())
    //     if (removeIndex >= 0 ) {
    //         requiredLetters.splice(removeIndex, 1)
    //     }
    // })
    // return requiredLetters.length === 0;

    // best solution - my comments are added for explanation:
    string = string.toLowerCase() // change case of provided string to lower case
    return "abcdefghijklmnopqrstuvwxyz" // declare string of all characters that are required (complete alphabet)
        .split("") // split string into array, each element representing a letter in alphabet
        .every(x => string.includes(x)) // use higher order function - .every() - to check if all every letter in alphabet is included in string.
}

let testCaseTrue = "The quick brown fox jumps over the lazy dog."
let testCaseFalse = "This is not a pangram."
let testCaseFalseTwo =  "aaaaaaaaaaaaaaaaaaaaaaaaaa"
let testCaseFalseThree =  "abcdefghijklmopqrstuvwxyz"

console.log(isPangram(testCaseTrue) === true)
console.log(isPangram(testCaseFalse) === false)
console.log(isPangram(testCaseFalseTwo) === false)
console.log(isPangram(testCaseFalseThree) === false)