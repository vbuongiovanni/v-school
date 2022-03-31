// how to compose and create functions:
    // used to enforce DRY principle
    // executes a series of statements

// Function declaration:
// function FUNCTIONNAME(param1, param2){
//    
// }

function sum(num1, num2){
    console.log(num1+num2)
    return num1+num2
}

// Function expression - store function in a variable
var mySumFunctionExpression = function(){
    console.log(2 + 2)
    return num1+num2
}
    // In general, function expression and function declarations are the same... but there are some nuaince
    // differences, so its better to default to function declaration.

// PART 2

// Calling a function:
    // Note: Parameters are the default placeholders of the function that can be later declared
    // Note: Arguments are the variables that are put into the function at the time of executation.
var result = sum(10, 5) 
console.log(result)

function loopThroughArr(array){

    for(var i = 0; i < array.length; i++){
        console.log(array[i])
    }

}

var anArray = [13, 21, 23, 344, 56, 7]

loopThroughArr(anArray)



