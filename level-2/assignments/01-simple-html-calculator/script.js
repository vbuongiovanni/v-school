
// You are going to create a simple calculator that can Add, Subtract, and Multiply.

// **Requirements:**

// - You will have one section (`<div>`) for each math operation (so 3 sections) total
// - Each section has two inputs to take the first and second numbers
// - Each section will have a button to perform the operation
// - You will inject the result into the HTML (not an alert)
// - Your website will have 3 colors
// - Your website will have proper padding/spacing to lay things out nicely

const calculatorForm = document.forms.calculator;


calculatorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let additionResult = add(calculatorForm["add-1"].value, calculatorForm["add-2"].value);
    let subtractionResult = subtract(calculatorForm["subtract-1"].value, calculatorForm["subtract-2"].value);
    let multiplyResult = multiply(calculatorForm["multiply-1"].value, calculatorForm["multiply-2"].value);

    if (isFinite(additionResult)) {
        document.getElementById("add-output").textContent = additionResult;
    }

    if (isFinite(subtractionResult)) {
        document.getElementById("subtract-output").textContent = subtractionResult;
    }
    
    if (isFinite(multiplyResult)) { 
        document.getElementById("multiply-output").textContent = multiplyResult;
    }
})


let storedValue = "";
let operation;
let secondValue;


document.getElementById("calc-input-add").addEventListener("click", ()=>{
    storedValue = parseFloat(document.getElementById("calculator-output").textContent);
    operation = add;
    document.getElementById("calculator-output").textContent = "";
    
})
document.getElementById("calc-input-sub").addEventListener("click", ()=>{
    storedValue = parseFloat(document.getElementById("calculator-output").textContent);
    operation = subtract;
    document.getElementById("calculator-output").textContent = "";
    
})
document.getElementById("calc-input-multi").addEventListener("click", ()=>{
    storedValue = parseFloat(document.getElementById("calculator-output").textContent);
    operation = multiply;
    document.getElementById("calculator-output").textContent = "";
    
})

for (let i = 0; i < 10; i++) {
    document.getElementById("calc-input-" + i).addEventListener("click", ()=>{

        if (storedValue === ""){
            document.getElementById("calculator-output").textContent = i;
        } else {
            document.getElementById("calculator-output").textContent += i;
        }
    })
}

document.getElementById("calc-input-deci").addEventListener("click", ()=>{
        
    document.getElementById("calculator-output").textContent += ".";

})

document.getElementById("enter-button").addEventListener("click", ()=>{
    secondValue = parseFloat(document.getElementById("calculator-output").textContent);
    
    document.getElementById("calculator-output").textContent = operation(storedValue, secondValue);
    storedValue = "";
})


const add = function(x, y){
    return parseFloat(x) + parseFloat(y);
}
const subtract = function(x, y){
    return parseFloat(x) - parseFloat(y);
}
const multiply = function(x, y){
    return parseFloat(x) * parseFloat(y);
}

