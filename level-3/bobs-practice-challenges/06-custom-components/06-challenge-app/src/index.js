import React from 'react';
import ReactDOM from 'react-dom';


/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */ 

function UnorderedList(){
    return (
        <ul>
            <li>It's pretty nifty</li>
            <li>It's Composable!</li>
            <li>It's Declarative</li>
            <li>Quite a few people use it!</li>
        </ul>
    )
}

ReactDOM.render(<UnorderedList/ >, document.getElementById("root"));

