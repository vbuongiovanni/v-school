
// var is old school: Scopes to function

// let & const scope to nearest curly brackets


function isLessThan(toCompare, inQuestion){
    
    if(toCompare < inQuestion){
        var var_phrase = "less than"
    } else {
        var var_phrase = "less than"
    }
    
    return "your number in question is " + var_phrase + " the number to compare it to"
}

function isGreaterThan(toCompare, inQuestion){
    
    // This would not work as-is, because 'let' restricts the variable to the curly brackets. 

    // as a result, we need to define the variable before the conditional
    let let_phrase

    if(toCompare > inQuestion){
        let_phrase = "greater than"
    } else {
        let_phrase = "greater than"
    } 
    
    return "your number in question is " + let_phrase + " the number to compare it to"
}

console.log(isLessThan(7, 5))
// console.log(var_phrase) **this wont run because 'var phrase' is scoped to the isLessThan function

console.log(isGreaterThan(7, 5))

// Difference between 'let' and 'const':
    // let can be redefined and does not need to have a value assigned when initialized
    // const, or constant, is similiar to java's final in that it cannot be changed

// general rule going forward
    // String, numbers, and booleans should PROBABLY be a let
    // Array and Objects should PROBABLY be const  (See example below)
        // exception, unless it is expected that the entire array will be replaced

const constArray = [1, 2, 3, 4, 5]
let letArray = [1, 2, 3, 4, 5]

console.log(constArray)
console.log(letArray)

constArray[0] = 10123
letArray[0] = 10123

console.log(constArray)
console.log(letArray)

constArray[5] = 1234567
letArray[5] = 1234567

console.log(constArray)
console.log(letArray)

// constArray = [5, 4, 3, 2, 1]
letArray = [5, 4, 3, 2, 1]

// console.log(constArray)
console.log(letArray)




