import React from "react";
import App from "./App";

// React 17 style:
// import ReactDOM from "react-dom";
// ReactDOM.render(<App />, document.getElementById("root"))


// React 18:
import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))
root.render(<App />)
