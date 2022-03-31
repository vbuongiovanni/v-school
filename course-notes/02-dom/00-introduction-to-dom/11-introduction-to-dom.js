
/* 
# Quiz questions (type your answers below):

1. What does interacting with the DOM in JavaScript help us do?

    Control elements (removing/adding/changing) elements or styles.
    It allows us to programmatically change and interact with the HTML coding, thereby making the webpage actuualy interactive. 
    In a way, the DOM is the bridge between .html and .js file

2. Why would we need to use JS to manipulate the DOM when we could just type it into the HTML/CSS files in the first place?

    Because we would most likely want to manipulate the DOM via events, such as a clicks, input boxes, etc. rather than typing raw HTML code.
    It is the only way we can react to the user's interaction
 */

    // Color controls

var purpleBtn = document.getElementById("purple")
var greenBtn = document.getElementById("green")
var blueBtn = document.getElementById("blue")
var redBtn = document.getElementById("red")

purple.addEventListener("click", function() {
    document.body.style.backgroundColor = "rebeccapurple"
})

green.addEventListener("click", function() {
    document.body.style.backgroundColor = "forestgreen"
})

blue.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue"
})

red.addEventListener("click", function() {
    document.body.style.backgroundColor = "firebrick"
})

white.addEventListener("click", function() {
    document.body.style.backgroundColor = "white"
})

// Count controls
var count = 0;
var subtractBtn = document.getElementById("subtract")
var addBtn = document.getElementById("add")

subtractBtn.addEventListener("click", function() {
    count--
    document.getElementById("counter").innerText = count;
})

addBtn.addEventListener("click", function() {
    count++
    document.getElementById("counter").innerText = count;
})