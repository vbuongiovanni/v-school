import {createRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
// BrowserRouter is actually a context.Provider, because of that, we will wrap
// <App/> with <Router></Router>

const root = createRoot(document.getElementById("root"));

root.render(
    <Router>    
        <App/>
    </Router>
)