
ReactDOM.render(<h1>Hello, React! (created via ReactDOM.render())</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

const newElement = document.createElement("h1");
newElement.textContent = "Hello, React! (created using vanilla JS)";
newElement.setAttribute("class", "header");
document.getElementById("root").append(newElement);

