// 1. Write a function that returns the sum of any two numbers you give it.

function sum(num1, num2){
    return num1 + num2
}
console.log(sum(1, 14))

// 2. Write a function that takes a string such has "Joe" as an argument, and returns the string "Hello Joe"

function hello(name){
    return "Hello " + name
}

console.log(hello("Pete"))

// 3. Write a function that takes in a number as an argument, and returns the string "Even" if the number is even, and "Odd" if the number is odd.

function isEvenOrOdd(number){
    if (number % 2 === 0){
        return "Even"
    } else {
        return "Odd"

    }
}

console.log(isEvenOrOdd(3))
console.log(isEvenOrOdd(12))