
/* 
arrow functions are compact (somewhat similiar to lambda functions in other languages?)

Limitations:
    does not have bindings to this or super, and should not be used as methods
    does not have a new.target keyword
    not suitable for call, apply, and bind methods becaue they rely on a scope
    can not be used as constructors
    canot use yield within its body

Basic Syntax:

    Two types of expression bodies:

        concise Body (note that line breaks are NOT supported)
            param => expression
                or... 
            (param1, param2) => expression

        Block Body - used if multiple lines of expressions, then use curly brackets.
        Note that block bodies require a return

            param => {
                let a = 1;
                return a + param;
            }
    
    Default parameters are also supported
        (a=100, b=20, c) => expression



 */


// How to write them (transition from standard function)

    // Traditional Anonymous Function:
    function addHundred (a){
        return a + 100;
    }
        
    // 1. Remove the word "function" , then place arrow between the argument and opening body bracket:
    let addHundredArrowFunc = (a) => {
        return a + 100; 
    }
    
    // 2. Remove the body braces and word "return"- the return is implied when using consise body.
    addHundredArrowFunc = (a) => a + 100;
    
    // 3. Remove the argument parentheses
    addHundredArrowFunc = a => a + 100;

    let addHundredArrowFuncBlock = a => {
        let result = a + 100;
        return result;
    }



    console.log(addHundred(10));
    console.log(addHundredArrowFunc(10));
    console.log(addHundredArrowFuncBlock(10));


    
    

