
// Creating new elements - use the createElement("html-tag-name-of-new-element") method:

    // step 1 - create and save new element:

    let newListItem = document.createElement("li");

    // step 2 - find parent element (e.g., 'ul' tag)

    let htmlUnorderedList = document.getElementById("my-list");

    // step 3 - append item to existing DOM object:

    htmlUnorderedList.append(newListItem);

    // step 4 (or earlier??) - add values as needed:

    newListItem.textContent = "i added this bullet point via JS!";



    // adding new elements

    let NewParagraphElementIntro = document.createElement("p");

    NewParagraphElementIntro.textContent = "This is an introduction about a really cool list. below is said list: (I PREPENDED this element)";

    let NewParagraphElementClosing = document.createElement("p");

    NewParagraphElementClosing.textContent = "As discussed, the list was very cool. Thank you for coming! (I APPENDED this element)";


    // append and apply formatting

    let bodyObject = document.getElementsByTagName("body")[0];

    NewParagraphElementClosing.style.fontSize = "20px";
    NewParagraphElementIntro.style.fontSize = "20px";

    NewParagraphElementClosing.style.textAlign = "center";
    NewParagraphElementIntro.style.textAlign = "center";

    bodyObject.prepend(NewParagraphElementIntro);
    bodyObject.append(NewParagraphElementClosing);


// Comparison of innerHTML and textContent

    let myList = document.getElementById("my-list");

    console.log(myList.textContent);

    /* Will return the bottomline values, irrespective of child elements: 
        0
        1
        2
        i added this bullet point via JS!
    */


    console.log(myList.innerHTML);

    /* on the otherhand, innerHTML returns raw text at the given HTML object
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>i added this bullet point via JS!</li>
    */
    myList.innerHTML = "<li>I added this element using the .innerHTML property</li>" + myList.innerHTML;
    myList.innerHTML += "<li>I also this element using the .innerHTML property</li>";


    
    bodyObject.innerHTML += "<p id='new-class-from-innerHTML'>Added with innerHTML!</p>";
    document.getElementById("new-class-from-innerHTML").style.backgroundColor = "yellow";

/*

## Tasks:

1. Search Google to learn a little more about the difference between the `.append()` method and the `.appendChild()` method
    
    a.) .append() accepts a node object, as shown in the example above and text, while .appendChild() only accepts a node
    b.) .append() returns 'undefined' while .appendChild() returns the appended node object
    c.) .append() allows multiple items, while .appendChild() does not.

2. What do you see as pros/cons of using `.createElement()` and `append()` vs. `.innerHTML`?

    .innerHTML could be good to initialize value (e.g., a table using a loop) because it is quick and concise
    .createElement() and append() is somewhat cumbersom... but everything is much more deliberate and explicit

3. What happens if I create an element using `.createElement()` but don't use `.append()`?

    nothing. the element will sit in oblivion until the end of time. It will never make it to the DOM

4. How might you use a for loop in conjunction with the DOM methods for create elements?

    By iterating over an array or object to add items/values into an HTML list or table.

*/


// Using loops to create elements

const powerRangers = [
    "Jason Lee Scott",
    "Kimberly Hart",
    "Zack Taylor",
    "Trini Kwan",
    "Billy Cranson"
]

const rangerList = document.getElementById("rangers");
let newRangerListItem;

/* // using .createElement() & .append()

for (let element of powerRangers){
    
    newRangerListItem = document.createElement("li");

    newRangerListItem.textContent = element;

    rangerList.append(newRangerListItem);

}

 */

// using innerHTML

for (let element of powerRangers){
    
    rangerList.innerHTML += "<li>" + element + "</li>";


}


