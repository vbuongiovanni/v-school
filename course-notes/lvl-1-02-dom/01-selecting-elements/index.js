/* 
# Quiz:

1. What are some of the differences between getElementById and getElementsByClassName?
    
    getElementById selects and returns a single element, or an object, based on the element's id (should be unique). 
    In contrast getElementsByClassName selects all elements with a given class name and returns an array-like object (HTMLCollection)

2. What will `.getElementsByClassName` return if there are no elements with the matching class in the document?
    an HTMLCollection of length 0 (containing zero elements)



3. What will `.getElementById` return if there is no element with the matching id in the document?
    
    'null'

 */


// ****** SELECTING SINGLE ITEMS FROM THE DOM ******

    /* 
    A key capability of the DOM API is to select specific elements. Using `document` gets us access to the _entire_ HTML document, 
    but we usually only care to make changes to a small part of the DOM like a paragraph, a list item, or a button, e.g.

    There are lots of ways to do selection, but they can be generally divided into 2 categories:
        1. Selecting a single element (returns an object that represents the selected element)
        2. Selecting multiple elements (returns an array-like element that represents each of the selected objects)
        
    In this lesson we'll focus on one of the most-used selector that returns a single element: `getElementById`.

    The `id` attribute added to any HTML element is a very common way to single out elements so they're easy to select using JavaScript. 
    `id` attributes should be unique - no two elements should have the same `id` as each other. This way, you can pick out the exact element you want access to.

    To select an element: 
        you first need to use the `.getElementById` method that exists on the `document` object and provide it one argument - the string id name of the element you're looking for.
        Once you have access to that element, you can treat it like any other JavaScript object - save it to a variable, call methods and use the properties of it, etc.
    */



    // the document object has many methods, including .getElementById()
    // this will return a JS element of the html element, which can be saved to variable:

    var hello = document.getElementById("hello")
    var naObject = document.getElementById("not-real")

    // ****(note that this can evidently only be seen through the console in dev tools through Google Chrome)***
    // from there, we can console.log() the element 

    console.log(hello)

    // console.dir can be used to see element 

    console.dir(hello)

    // if the ID doesn't exist, then it will return 'null'
    console.log(naObject)

    // same with a button:

    var acceptButton = document.getElementById("accept-button")
    console.log(acceptButton)
    console.dir(acceptButton)


// ****** SELECTING MULTIPLE ITEMS FROM THE DOM ******

    /* 

    Sometimes you may want to select a number of elements, like all the list items in a list or all elements with a specific class name. 
    In these scenarios, you can select a list of elements using various methods. The most common are:

        * getElementsByClassName
        * getElementsByTagName

    Since there could potentially be multiple elements in the document with the same class name or the same tag name (like `p` or `div`), 
    these element selectors will always return an array-like object of elements.

    Important: even if you only have one element on the page with a given class name, 
    the `getElementsByClassName()` method will still return this array of elements - it will just be an array with a single item in it.

    For all practical purposes,

    */

    // this returns an 'HTMLCollection' in the console.
    var things = document.getElementsByClassName("things")
    var thingsByTag = document.getElementsByTagName("h1")

    console.log("'things' from .getElementsByClassName")
    console.log(things)
    console.log(things[0])

    // this can be treated the same way as an array:
    for (var i = 0; i < things.length; i++) {
        console.log(things[i])
    }
    
    console.log("")
    console.log("")
    console.log("'h1' from .getElementsByTagName")
    for (var i = 0; i < thingsByTag.length; i++) {
        console.log(thingsByTag[i])
    }

// Regardless, the elements can be accessed through various methods:

console.log(hello.innerText)
console.log(things[0].innerText)
    
