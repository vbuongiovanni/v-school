import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom"; // BrowserRouter - usually renamed to "Router"

const container = document.getElementById("root");
const root = createRoot(container);

// Wrap <App /> component in "<Router></Router>"" tags
root.render(
    <Router>
        <App />
    </Router>
)