import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import {Routes, Route} from "react-router-dom";

export default function Main(){



    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/services" element={<Services />}></Route>
            </Routes>
        </main>
    )
}