import react from "react";
import reactDOM from "react-dom";

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

const jsxElement = (
  <main>
    <img src={require('./react-logo.png')} alt='React Logo' width='75px'></img>
    <h1>Fun Facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by John Walke</li>
      <li>has well over 100K stars onm GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
)

reactDOM.render(jsxElement, document.getElementById("root"))

