const readLine = require("readline-sync")

// const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

// const shift = parseInt(readline.question('How many letters would you like to shift? '));


/* 
Requirements:
Implementing a Caeser cipher using Javascript. Your program will receive two inputs:
    1. The text to be encoded
    2. The number positions to shift each letter (to the right)
    note - only shift characters in 26-letter alphabet. Print all others without modification
 */



const testCaseText = "V School is Awesome!"
const testCaseShift = 11
const expectedOutput = "g dnszzw td lhpdzxp"

const caesarCipher = (text, shift) => {
    // initialize key
    const alphabetKey = "abcdefghijklmnopqrstuvwxyz" // alphabetKey.split("")
    let textArray = text.toLowerCase().split("") // convert to array
    let charIndex

    for (let i = 0; i < textArray.length; i++) {
        charIndex = alphabetKey.indexOf(textArray[i])
        if (charIndex >= 0) {
            charIndex += shift
            charIndex = charIndex >= 26 ? charIndex - 26 : charIndex;
            textArray[i] = alphabetKey.split("")[charIndex]
        } else {
            textArray[i] = textArray[i];
        }
    }
    
    return textArray.join("")
}

console.log(caesarCipher(testCaseText, testCaseShift))