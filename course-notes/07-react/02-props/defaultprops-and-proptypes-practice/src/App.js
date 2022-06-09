import React from "react";
import ClassRoundedImage from "./components/ClassRoundedImage";
import FunctionalRoundedImage from "./components/FunctionalRoundedImage";
import "./style.css";

const App = () => {
    return (
        <>
            <ClassRoundedImage 
            src="https://picsum.photos/id/237/300/300" 
            borderRadius={20}
            />
            <FunctionalRoundedImage 
            src="https://picsum.photos/id/237/300/300" 
            borderRadius={100}
            />

        </>
        
    )
}

export default App;