'use-strict';
// with a DOM object, there is child series called 'style' that contains the style properties.

// let headerObject = document.getElementById("header");
let headerObject = document.querySelector("h1");

console.log(headerObject.style)
console.log(typeof headerObject.style)
console.log(Object.keys(headerObject.style))

headerObject.style.backgroundColor = "#abcdef";
headerObject.style.border = "dashed green 5px";

