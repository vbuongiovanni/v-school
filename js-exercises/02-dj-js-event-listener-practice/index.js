'use-strict'

/* 
- Blue when the mouse hovers over the square
- Red when the mouse button is held down over the square
- Yellow when the mouse button is let go over the square
- Green when the mouse is double clicked in the square
- Orange when the mouse scroll is used somewhere in the window (not just over the square).
    
You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) 
and have the box change to that color. Check out the key and keyCode property of `e.target`
 */

const squareElement = document.getElementById("square");
const windowElement = document.getElementById("window");


// declare function to change color

backgroundChange = function(newColor){
    squareElement.style.backgroundColor = newColor;
}



// create eventListeners

// mouse hover over square - "mouseover"
squareElement.addEventListener("mouseover" , function(){backgroundChange("blue")});

// mouse button held down over square - 
squareElement.addEventListener("mousedown" , function(){backgroundChange("red")});

// mouse button held is released over square - 
squareElement.addEventListener("mouseup" , function(){backgroundChange("yellow")});

// mouse double click - "dblclick"
squareElement.addEventListener("dblclick" , function(){backgroundChange("green")});

// Mouse scroll in window - "wheel"
windowElement.addEventListener("wheel" , function(){backgroundChange("orange")});

// implementation of key control requirement:


const keyColorTable = {
    b : "blue",
    r : "red",
    y : "yellow",
    g : "green",
    o : "orange"
}

backgroundKeyCommand = function(key){
    let requestedColor = keyColorTable[key.key];
    squareElement.style.backgroundColor = requestedColor;
}

window.addEventListener("keydown", backgroundKeyCommand);





