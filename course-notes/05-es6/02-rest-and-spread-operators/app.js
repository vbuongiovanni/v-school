
// spread:
    // When not used in a function, it effectively breaks an array into its individual parts

    const quarter1 = ["january", "february", "march"]
    const quarter2 = ["april", "may", "june"]
    const quarter3 = ["july", "august", "september"]
    const quarter4 = ["october", "november", "december"]
    // replace this line with one that uses a spread oporator to do the same thing as concat

        // Old way - using .concat:

        console.log(quarter1.concat(quarter2, quarter3, quarter4))

        // ES6 way - more concise and easy to read:
        
        console.log([...quarter1, ...quarter2, ...quarter3, ...quarter4])





// rest
    // used as a function argument - converts one or more inputs into an array

    function addNumbers (...numbers) {
        // numbers is now an array that we can used .reduce() on:
        return numbers.reduce((final, number) => {
            return final + number;
        }, 0)
    }

    console.log(addNumbers(1, 2, 3, 4, 5));

    function maxNumbers (max, ...numbers) {
        // numbers is now an array that we can used .reduce() on:
        return numbers.reduce((final, number) => {
            return final > number ? final : number;
        }, 0)
    }

    console.log(maxNumbers(1, 2, 3, 4, 5, 2, 234, 2342, 321, 12, 932, 124));



// review - part 2

    const button = document.getElementById('button')
    const output = document.getElementById('output')
    const input = document.getElementById('input')
    // change this function to be an arrow function
        // button.addEventListener('click', function(){
        //     output.innerText = "You've submitted: " + input.value
        // })

        button.addEventListener('click', () => output.innerText = "You've submitted: " + input.value)

    //-------------------------------------------------------------------------------------------
    // Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
    function collectAnimals(...animals) { 
        return animals;
    }

    console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
    // ["dog", "cat", "mouse", "jackolope", "platypus"]

    //-------------------------------------------------------------------------------------------
    // Use destructuring to use the property names as variables:

    const vacation = {  
        location: "Burly Idaho",
        duration: "2 weeks"
    };

    function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
    }

    console.log(parseSentence(vacation))

    //-------------------------------------------------------------------------------------------

    function product(a, b, c, d, e) {
        const numbers = [a,b,c,d,e];
    
        return numbers.reduce(function(acc, number) {
        return acc * number;
        }, 1)
    }

    function productES6(...numbers) {    
        return numbers.reduce(function(acc, number) {
        return acc * number;
        }, 1)
    }

    function unshift(array, a, b, c, d, e) {
        return [a, b, c, d, e].concat(array);
      }

    function unshiftES6(array, ...additions) {
        return [...array, ...additions];
    }

    console.log(`product(1, 2, 3, 4, 5) is equal to productES6(1, 2, 3, 4, 5)? ${product(1, 2, 3, 4, 5) === productES6(1, 2, 3, 4, 5)}`)

    console.log(`${unshift([1, 2, 3, 4], 5, 6, 7, 8, 9)} is equal to ${unshiftES6([1, 2, 3, 4], 5, 6, 7, 8, 9)}? ${unshift([1, 2, 3, 4], 5, 6, 7, 8, 9).toString === unshiftES6([1, 2, 3, 4], 5, 6, 7, 8, 9).toString}`)


    //-------------------------------------------------------------------------------------------
    // make "greeting" default to "hello"
    function greet(name, greeting = "Hello"){
        return `${greeting}, ${name}`;
    }

    console.log(greet('Emily'))