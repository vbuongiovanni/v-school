import React from "react";
import { AppContextProvider } from "./components/AppContext";
import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Footer from "./components/Footer";
import "./style.css";

export default function App(){

    return (
      <AppContextProvider>
        <Navbar />
        <Main />
        <Footer />
      </AppContextProvider>
    )
}