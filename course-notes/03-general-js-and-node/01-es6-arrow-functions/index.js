

const clickableElement = document.getElementById("clickable");


// typical function:

function typicalNamedFunction(){
    return "Clicked!";
}

clickableElement.addEventListener("click", function(){
    return "Clicked! By a typical anonymous function!";
})

// ES6 - Arrow function
// remove 'function' keyword, and replace equal sign with arrow '=>':

const arrowFunction = () => {
    return "Clicked!";
}

// If everything is on one line, you can remove the 

const arrowFunctionImplicitReturn = () => "Clicked!";


// Note that the '()' are required if there are either 0 or more than 1 arguments. 
// If there is a single argument, you can leave it out:

const singleArgumentArrowFunctionImplicitReturn = name => name + " Clicked the button!";

// the following will print "Clicked!" in the console when the element is clicked

clickableElement.addEventListener("click", function(){
    console.log(arrowFunctionImplicitReturn())
})


