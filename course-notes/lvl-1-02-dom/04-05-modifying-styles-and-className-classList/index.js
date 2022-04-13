'use-strict';

// Lesson 04 - Modifying Styles

    // with a DOM object, there is child series called 'style' that contains the style properties.

    // let headerObject = document.getElementById("header");
    let headerObject = document.querySelector("h1");
    let bodyObject = document.querySelector("body");

    // console.log(headerObject.style)
    // console.log(typeof headerObject.style) // headerObject.style is a nested object (object within object)
    // console.log(Object.keys(headerObject.style)) // Object.keys() shows all keys within an object

    headerObject.style.backgroundColor = "#abcdef";
    headerObject.style.border = "dashed green 5px";
    bodyObject.style.backgroundColor = "black";

    // you can access virtually any of CSS properties - only difference is that the properties are named camelCase rather than
    // normal HTMl notation

    // fontSize
    // background-color
    // display
    // textAlign
    // margin, padding, border


// Lesson 05 - Modifying Styles - classNames & classList

// There are two ways to apply styling to classes using JS.


    let classNameObject = document.querySelector("#secondary-header");

    // 1.) className ("#id-name") - least preferred method

        // shows the name of the class(s), however all classes are shown in a single string and space separated

        console.log(headerObject.className); 

        // The class(s) can be modified by changing the .className value of DOM Object:

        headerObject.className += " red-title";

        // Note - it can be problematic to REMOVE elements, since it is all shown in a single string.

    // 2.) classList("#id-name") - preferred method

        // provides a 'DOMTokenList) or an object with key-value pairs representing the class names.
        // Additionally, the object comes with various methods that make modifications much easier:

        console.log(classNameObject.className); // shows the name of the classes within object

        // add new class 'green title'

        classNameObject.classList.add("green-title");

        // removes CSS tied to "title" class.. e.g., reduces size to default h2

        classNameObject.classList.remove("title");

        // toggle method: if element has given class, then it will remove it. Otherwise, it will add it:

        classNameObject.classList.toggle("needs-border");
        classNameObject.classList.toggle("needs-border");
        classNameObject.classList.toggle("needs-border");
















