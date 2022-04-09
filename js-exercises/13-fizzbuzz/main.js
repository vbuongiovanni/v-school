/* 
Write a short program that prints each number from 1 to 100 on a new line.
For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
 */

const fizzBuzz = (logResults = true) => {
    let outputValue;
    const outputArray = [];
    for (let i = 1; i <= 100; i++){
        outputValue = "";
        outputValue = ((i % 3) === 0 ? "fizz" : "") + ((i % 5) === 0 ? "buzz" : "");
        outputValue = (outputValue === "") ? i : outputValue;
        if (logResults === true) {
            console.log(outputValue);
        }
        outputArray.push(outputValue);
    }
    return outputArray;
}

// fizzBuzz();

// - Write a function that keeps a tally of how often the phrases `"fizz"`,`"buzz"`, and `"fizzbuzz"` occur in the array returned from the previous function.

const countFizzBuzz = () => {

    const fizzBuzzArray = fizzBuzz(false);
    let fizzbuzz = 0;
    let fizz = 0;
    let buzz = 0;

    for (element of fizzBuzzArray){
        fizzbuzz += element === "fizzbuzz" ? 1 : 0;
        fizz += element === "fizz" ? 1 : 0;
        buzz += element === "buzz" ? 1 : 0;   
    }

    return {fizzbuzz, fizz, buzz};
    
}

const countObject = countFizzBuzz();

console.log(countObject);