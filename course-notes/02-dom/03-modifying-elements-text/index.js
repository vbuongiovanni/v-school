

// modifying or changing an element's text content - DOM Object Property - three methods:
//  innerHTML - can be a security risk, so usually best to avoid
//  innerText - can be computationally extensive 
//  textContent - best option for changing text of HTML element

let htmlElementHeader = document.querySelector("#header");
let htmlElementParagraph = document.querySelector("p");

let originalHeaderText = htmlElementHeader.textContent;

htmlElementHeader.textContent = htmlElementHeader.textContent + "... THAT I JUST MODIFIED W/ JS";
htmlElementParagraph.textContent = htmlElementHeader.textContent;

