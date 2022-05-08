import React from 'react';
import ReactDOM from 'react-dom';

import '../src/index.css';

/**
Challenge 1: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */  

/* function OrderedList(){
    return (
        <ol>
            <li>It's pretty nifty</li>
            <li>It's Composable!</li>
            <li>It's Declarative</li>
            <li>Quite a few people use it!</li>
        </ol>
    )
} */



/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

/* 
function Page() {
    return (
        // this is called a 'fragment' - it is a blank element that is a parent to all other elements.
        // Alternatively, we could just make a div element that houses everything
        <>        
            <header>
                <nav>
                    <img src={require("./react-logo.png")} height={"100px"} alt="react logo"></img>
                </nav>
                <h1>Reasons I am excited to learn React:</h1>
            </header>
            <ol>
            <li>It's pretty nifty</li>
            <li>It's Composable!</li>
            <li>It's Declarative</li>
            <li>Quite a few people use it</li>
            </ol>
            <footer>
                <small>© 2022 Buongiovanni development. All rights reserved.</small>
            </footer>
        </>
    )
}
 */



/** Parent/Child Components:
    
    Challenge: 

    - Move the `header` element from Page into 
    its own component called "Header"
    - Move the `footer` into its own component called "Footer" 
    and render that component inside the Page component.
    - Move the `h1` and `ol` together into another component
    called "MainContent" and render inside Page as well.
*/

// child components:

    /**
    Challenge - Styling W/ Classes - simply use 'ClassName' instead of 'class'

    - Add an `ul` inside the Header's `nav` and create
    the following `li`s: "Pricing", "About", & "Contact"
    */

    // function Header() {
    //     return (
    //         <header>
    //             <nav className="nav-container">
    //                 <img className="nav-logo" src={require("./react-logo.png")} alt="react logo"></img>
    //                 <ul className='nav-items'>
    //                     <li>Pricing</li>
    //                     <li>About</li>
    //                     <li>Contact</li>
    //                 </ul>
    //             </nav>
    //         </header>
    //     )
    // }

    // function Footer() {
    //     return (
    //         <footer>
    //             <small>© 2022 Buongiovanni development. All rights reserved.</small>
    //         </footer>
    //     )
    // }

    // function MainContent() {
    //     return ( 
    //         <>
    //             <h1>Reasons I am excited to learn React:</h1>
    //             <ol className="content-list">
    //                 <li>It's pretty nifty</li>
    //                 <li>It's Composable!</li>
    //                 <li>It's Declarative</li>
    //                 <li>Quite a few people use it</li>
    //             </ol>
    //         </>
    //     )
    // }


// Project Organization:
// place components into their own individual files (e.g., using export), then import them into the main index.js file.


// note... by convention, these should be placed at start of script. 
// Additionally, individual file names should be named based on component name (similar to naming of java files.)

import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

// parent component:

function Page() {
    // You can simply make an instance of a separate element by running the function using <'FunctionName' /> syntax:
    // this is prime example of React's composability feature:
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))




