

let inputBox = document.getElementById("text-input");

// the value of the input box can be accessed via the .value property:

console.log(inputBox.value);

// note this variable is created when HTML is initially compiled and we don't have an event listener
// with that, the value will be blank unless we set a default value in HTML.

// you can also set the value of the input box like any other DOM object:

inputBox.value = "overwritten!"

