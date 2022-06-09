import React from "react";
import CTA from "./CTA";
import "./style.css";

function App() {

    // application of the React Child
        // effectively, whatever you pass between the CTAs will be passed down the component within props under '.children'

    // React children are especially useful when, practically speaking you are making a reusable component that does not have well defined structure
        // Instead, React children should be used when you want to give the user of your components complete control.
    return (
        <>
            <CTA>
                <h1>This is an important CTA</h1>
                <button>Click me now or you'll miss out!</button>
            </CTA>
            <CTA>
                <h1>This is a similar, but different CTA</h1>
                <button>Click me now or you'll miss out on different details!!</button>
            </CTA>
            <CTA>
                <form>
                    <input type="email" placeholder="Enter email address here"/>
                    <br />
                    <button>Submit</button>
                </form>
            </CTA>
        </>
    )
}
export default App;