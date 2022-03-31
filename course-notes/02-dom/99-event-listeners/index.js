
/* this captures every event that takes place in window

Object.keys(window).forEach(key => {
    if (/^on/.test(key)) {
        window.addEventListener(key.slice(2), event => {
            console.log(event.type);
        });
    }
});

 */


// Steps to tie JS to button:

    // Select button/elements from DOM
    var button = document.getElementById("button")
    var buttonAlt = document.getElementById("button-alt")
    var buttonRemove = document.getElementById("button-remove")
    var buttonAlt = document.getElementById("button-alt")
    
    var h1Element = document.getElementById("element-name")

    // use addEventListener("event", someFunction) method from the button object
    
    // the function here is known as an 'anomyous function' because it is not named:
    button.addEventListener("click", function() { 
        console.log("button was clicked")
    })

    // you can also use a named function:
    function handleButtonClick() {
        console.log("The alternative button was clicked!")
    }

    buttonAlt.addEventListener("click", handleButtonClick)

    // note that you should not include parentheses, because WE aren't running the function... the click is.
    // Thus, by including the parentheses, the function will run right away. 
    // With that, The following is INCORRECT:
    // buttonAlt.addEventListener("click", handleButtonClick())


// Challenge: what are the most common events? Find and apply them!

    // dblclick: The event occurs when the user double-clicks on an element
    function handleButtonDoubleClick() {
        console.log("The user double clicked one of the h1 elements!")
    }

    h1Element.addEventListener("dblclick", handleButtonDoubleClick)


    // mousemove: The event occurs when the pointer is moving while it is over an element
    function handleMouseMove() {
        console.log("The user is hovering above the 'CLick me!' button")
    }
    button.addEventListener("mousemove", handleMouseMove)
    
// you can also assign listeners without creating a variable

function changeBackgroundColor() {
    console.log("changed!")

    console.log(document.getElementById("header").style.getPropertyValue("backgroundColor"))

    document.getElementById("header").style.backgroundColor = "#" + Math.floor(Math.random() * (900 - 100 + 1) + 100)
}

document.getElementById("header").addEventListener("dblclick", changeBackgroundColor)


// you can also remove an event listener:

function removeButtonEventListeners(){

    buttonAlt.removeEventListener("click", handleButtonClick)
    console.log("ButtonAlt event listener removed!")

}

buttonRemove.addEventListener("click", removeButtonEventListeners)





