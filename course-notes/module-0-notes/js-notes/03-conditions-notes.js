// Conditionals - driven by boolean - if(){} and switch(){}

// Truthy and Falsey
    // falsey - all of these are considered "false":
        // 0
        // ""
        // null
        // undefined
        // false
        // NaN
    // truthy - literally, everything else is considered "true":
        // 1
        // 2
        // fdgkashdfg;jadfg


// comparison operators:
//      >, <, <=, >=, ==, ===, !=, !==

//      '==' means loosely equal, and '!==' means loosely not equal
    // Accounts for different variable type cohersion.

//      '===' means strictly equal, and '!===' means strictly not equal

        // examples:
        if("2" == 2){
            console.log('"2" is LOOSELEY equal to 2')
        }

        if("2" === 2){
            
        } else {
            console.log('"2" is Not strictly not equal to 2')
        }


// Logical operators:
//      ||, &&, !


// if statement:

if (true) {
    console.log("IT is true!")
}

if (false) {
    console.log("IT is false... but we will never know")
}

// else statements:

if (false) {

} else {
    console.log("IT is false... but this is running in the else statement")
}

// using real values:
if (2 == 2) {
    console.log("two is equal to 2")
} else {
    console.log("two is not equal to 2")
}

if (2 == 4) {
    console.log("two is equal to 4")
} else {
    console.log("two is not equal to 4")
}

// multiple nested ifs

if (2 === 4) {

    console.log("two is equal to 4")

} else if (2 === 5) {

    console.log("two is equal to 5")

}  else if (2 === 3) {

    console.log("two is equal to 3")
    
} else {

    console.log("nothing was true...")
}

// logical operators:
// PEDMAS applies as the order of operations. Parenthesis can be used to force the ordering


if ((2 === 4) && (1 == 3)) {

    console.log("2 is equal to 4")
    console.log("1 is equal to 3")

} else if ((2 === 4) && (2 == 5)) {

    console.log("2 is equal to 4")
    console.log("2 is equal to 5")

}  else if ((2 === 2) && (5 == 5)) {

    console.log("2 is equal to 2")
    console.log("5 is equal to 5")
  
} 

// switch statement - will run starting the first case that matches, then continues to run until return

var color = "indigo"

switch(color){
    case "red":
        console.log("The color is red")
        break
    case "blue":
        console.log("the color is blue")
        break
    case "yellow":
        console.log("the color is yellow")
        break
    default:
        console.log("the color is not blue, red, or yellow")
}

