// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
const capilizeAndLowercase = string => {
    return string.toUpperCase().concat(string.toLowerCase())
}

console.log("\n should be 'HELLOhello':")
console.log(capilizeAndLowercase("HelLo")) // => "HELLOhello"


// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down. Hint: You'll need to use Math.floor().
const findMiddleIndex = string => {
    return Math.floor(string.length / 2);
}

console.log("\n should be 2, 5 respectively:")
console.log(findMiddleIndex("Hello")) // => 2
console.log(findMiddleIndex("Hello World")) // => 5

// Write a function that uses and the other functions you've written to return the first half of the given string.
const returnFirstHalf = string => {
    return string.slice(0, findMiddleIndex(string));
}

console.log("\n should be 'He', 'Hello' respectively:")
console.log(returnFirstHalf("Hello")) // => "He"
console.log(returnFirstHalf("Hello World")) // => "Hello"

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase. Hint: If your string length is odd, use Math.floor() to round down.
const capitalizeAndLowercase = string => {

    return string.slice(0, findMiddleIndex(string)).toUpperCase() + string.slice(findMiddleIndex(string)).toLowerCase()

}

console.log("\n should be 'HEllo', 'HELLO world' respectively:")
console.log(capitalizeAndLowercase("Hello")) // => "HEllo"
console.log(capitalizeAndLowercase("Hello World")) // => "HELLO world"

// ### **Optional Code Challenge**
// (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):
// Write a function that takes a string as a parameter and capitalizes any character that follows a space.
const capitalize = string => {
    const stringArray = string.split("");
    let output = [];
    for (let i in stringArray){
        if ((i === "0") | (stringArray[i-1] === " ")){
            output.push(stringArray[i].toUpperCase());
        } else {
            output.push(stringArray[i]);
        }
    }
    return output.join("");
}
console.log("\n should be 'Hey Friends! Practice Practice Practice!':")
console.log(capitalize("hey friends! practice practice practice!")) // -> "Hey Friends! Practice Practice Practice!"
