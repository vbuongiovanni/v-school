
'use strict';
const readlineSync = require("readline-sync");

/* 
Create a function that takes a string and returns a string in which each character is repeated once.
Examples
    doubleChar("String") ➞ "SSttrriinngg"
    doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
    doubleChar("1234!_ ") ➞ "11223344!!__  "`
Notes
    All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.
 */

const doubleChar = stringInput => {
    const StringArray = stringInput.split("")
    let output = "";
    for(let char of StringArray) {
        output += char + char;
    }
    return output;
}

// Testing:

let testCases = ["String", "Hello World!", "1234!_ "];
let testCaseResults = ["SSttrriinngg", "HHeelllloo  WWoorrlldd!!", "11223344!!__  "];

for(let i in testCases){
    console.log(`Test Case ${i} (${testCases[i]}) results : ${(doubleChar(testCases[i]) === testCaseResults[i])}`);
}