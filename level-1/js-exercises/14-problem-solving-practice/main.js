// Write a function that takes an array of numbers and returns the largest (without using `Math.max()`)

console.log("Write a function that takes an array of numbers and returns the largest (without using `Math.max()`)")

const largest = (numberArray) => {
    let maxNumber = -Infinity;
    for (let number of numberArray){
        maxNumber = number > maxNumber ? number : maxNumber;
    }
    return maxNumber;
}

console.log(largest([3, 5, 2, 8, 1]));


// Write a function that takes an array of words and a character and returns each word that has that character present.

console.log("Write a function that takes an array of words and a character and returns each word that has that character present.")

const lettersWithStrings = (stringArray, searchString) => {
    let stringMatches = [];
    for (let string of stringArray){        
        if(string.indexOf(searchString) > -1){
            stringMatches.push(string);
        }
    }
    return stringMatches;
}

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

console.log("Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.")

const isDivisible = (num1, num2) => {
    return (num1 % num2) === 0;
}

console.log([
    "(4, 2)", 
    "(9, 3)",
    "(15, 4)"
])

console.log([
    isDivisible(4, 2), 
    isDivisible(9, 3),
    isDivisible(15, 4)
])


