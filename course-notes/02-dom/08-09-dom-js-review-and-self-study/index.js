'use-strict'

// Selections:

    // single selections: 
    
        // get element by element ID:

        const idSelectedElement = document.getElementById("id-identified-text");

        // Select element by CSS 

        const cssSelectedElement = document.querySelector(".class-identified-text");
    
    // multi selections - 

        // get element by element tag:

        const divSelectedElements = document.getElementsByTagName("div");

        document.getElementsByClassName();
        document.getElementsByName();

        const cssSelectedListElements = document.querySelectorAll("ul, ol");

// Adding Content and Styles

    // single selections: 
    
        // get element by element ID:

        idSelectedElement.textContent = "I added this using JS, specifically the textContent property. The DOM object was originally selected using .getElementByID()";

        idSelectedElement.style.backgroundColor = "yellow";

        // Add textContent & style to single element

        cssSelectedElement.textContent = "I also added this using JS! I used the textContent property, but this DOM object was selected using querySelector()";
        
        cssSelectedElement.style.backgroundColor = "yellow";
        



    
    // multi selections:

        // get element by element tag:

        const divTextPart1 = "This was added via JS using a for of loop, since the DOM object was an 'HTMLCollection' selected using getElementsByTagName('div'). Note that this same text applies to all three div elements.";
        const divTextPart2 = " Also, it is probably worth mentioning that this text is actually an entirely new HTML paragraph element.";

        let divContent;
        let divTitle;

        for (let divElement of divSelectedElements) {

            divContent = document.createElement("p");

            divTitle = document.createElement("p");

            divTitle.textContent = "The div id of this HTML element is: " + divElement.id;
            divTitle.className = "added-title-elements";
            
            divContent.textContent = divTextPart1 + divTextPart2;
            divContent.className = "added-paragraph-elements";

            divElement.prepend(divContent);
            divElement.prepend(divTitle);
        }

        // adding list items: 
        const listItems = ["This is probably a little obnoxious", "but each of these list items", "were added in JS by creating a new li element", "then filling them in", "using a for of loop"];

        let listContent;

        for (let listElement of cssSelectedListElements) {

            for (let contentItem of listItems) {

                listContent = document.createElement("li");

                listContent.textContent = contentItem;
                listContent.className = "list-item";

                listElement.append(listContent);

            }

        }














        
        

        
        

    





