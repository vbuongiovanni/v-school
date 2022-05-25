/* 
Requirements:
Implementing a Caeser cipher using Javascript. Your program will receive two inputs:
    1. The text to be encoded
    2. The number positions to shift each letter (to the right)
    note - only shift characters in 26-letter alphabet. Print all others without modification
 */

const readLine = require('readline-sync');
const input = readLine.question('What phrase would you like to encrypt? ');
const shift = parseInt(readLine.question('How many letters would you like to shift? '));

const caesarCipher = (text, shift) => {
    // initialize key, split into array
    const alphabetKey = "abcdefghijklmnopqrstuvwxyz".split("")

    // Convert to input text to lowercase and split into array
    let textArray = text.toLowerCase().split("") // convert to array

    // refactored solution using reduce()
    return textArray.reduce((prevString, char) => {
            let newCharIndex = alphabetKey.indexOf(char) + shift; // get unadjusted shift position
            // Reverse shift factor, check if character wasn't found in alphabet key
            if ((newCharIndex - shift) >= 0) { 
                char = alphabetKey[newCharIndex >= 26 ? newCharIndex - 26 : newCharIndex] // Adjust shift position using ternary 
            }
            return prevString + char // concat modified char
        }, "")
}

console.log(caesarCipher(input, shift))

/* 
// Test case:
const testCaseText = "V School is Awesome!"
const testCaseShift = 11
const expectedOutput = "g dnszzw td lhpdzxp!"

console.log(`Test:
    "${caesarCipher(testCaseText, testCaseShift)}"
            ===
    "${expectedOutput}"
outcome: ${caesarCipher(testCaseText, testCaseShift) === expectedOutput}`)
 */