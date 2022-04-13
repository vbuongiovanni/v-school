
// Write a function that takes two arrays as parameters. 
//     The first array will be an array of people's names, and the second array will be the alphabet. 
//     Using a for loop within a for loop, create and return array that looks like this:


// required Output:

const expectedOutput = 
    ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"
function forception(people, alphabet){
    let output = [];
    allCapsAlphabet = alphabet.toUpperCase().split("");
    for (let i = 0; i < people.length; i ++){
        output.push(people[i] + ":");
        for (let j = 0; j < allCapsAlphabet.length; j++) {
            output.push(allCapsAlphabet[j]);
        }
    }
    return output;
}

const myResult = forception(people, alphabet);

console.log("test case match: " + (myResult.join("") === expectedOutput.join("")));

