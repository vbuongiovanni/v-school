

// create function that take a string name of an HTML element's ID, then either:
//  1.) apply random background color:

    function randomizeColors(elementID){
        
        const htmlElement = document.getElementById(elementID)

        htmlElement.addEventListener("dblclick", function(){
            htmlElement.style.backgroundColor = "#" + Math.floor(Math.random() * (900 - 100 + 1) + 100)
        })
        htmlElement.addEventListener("click", function(){
            htmlElement.style.backgroundColor = "#" + Math.floor(Math.random() * (900 - 100 + 1) + 100)
        })
        
    }

//  2.) apply one of font families

    function changeFontStyle(elementID){

        const htmlElement = document.getElementById(elementID)
        const fontFamilies = ["Arial, Helvetica, sans-serif", "'Courier New', Courier, monospace", "'Times New Roman', Times, serif", "fantasy", "cursive"]
        
        htmlElement.addEventListener("dblclick", function(){

            let randomFontFamily = fontFamilies[Math.floor(Math.random() * (4 - 0 + 1))]
            htmlElement.style.fontFamily = randomFontFamily
            
            }
        )

        htmlElement.addEventListener("click", function(){

            let randomFontFamily = fontFamilies[Math.floor(Math.random() * (4 - 0 + 1))]
            htmlElement.style.fontFamily = randomFontFamily
            
            }
        )

    }

// initialize an array of HTML IDs for each function:

    const colorChangingElements = ["styles-content", "greeter-content"]
    const fontChangingElements = ["styles-header", "greeter-header", "page-header"]

// use loop to apply function to elements in each of the two arrays 

    for (let i = 0; i < colorChangingElements.length; i++) {
        randomizeColors(colorChangingElements[i]);
    }

    for (let i = 0; i < fontChangingElements.length; i++) {
        changeFontStyle(fontChangingElements[i]);
    }

// create objects to represent the four name input fields (as an HTMLcollection) and the 'Greet Attendees' Button:

    let greeterInputs = document.getElementsByClassName("attendeeInputs");
    let greeterButton = document.getElementById("greeter-button");

// create function that takes content from all four inputs fields within the HTMLcollection, removes blank entries,
// then returns a customized greeting as a single string. 

    function getGreeting() {
        
        let output = []
        let entry = ""
        outputGreeting = ""
        let nextIndex = 0

        for(let i = 0; i < greeterInputs.length; i++){

            entry = greeterInputs[i].value

            if(entry.length !== 0){

                output[nextIndex] = entry
                nextIndex++

            }

        }

        if(output.length === 0){

            outputGreeting = "Whoa there cowboy - how am I supposed to know who to greet if you aren't going to tell me who is here?"

        } else if(output.length === 1) {
            
            outputGreeting = "Hello " + output + "!"

        } else {

            let greeting = ""

            for(let i = 0; i < output.length; i++){

                if(i === 0) {

                    greeting = greeting + output[i]

                } else if (output.length === 2) {

                    greeting = greeting + " and " + output[i]
                
                } else if (i === (output.length - 1)) {

                    greeting = greeting + ", and " + output[i]

                } else {

                    greeting = greeting + ", " + output[i]

                }
        
            }

            outputGreeting = "Hello " + greeting + "!"


        }

        console.log(outputGreeting)

        document.getElementById("greeting-output").innerHTML = outputGreeting

    }
    
    greeterButton.addEventListener("click", getGreeting)

