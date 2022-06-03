import React, {useState, useRef} from "react";
import "./style.css";
import ControlPane from "./components/ControlPane";
import PreviewPane from "./components/PreviewPane";

export default function App() {

    const [styleConfigurations, setStyleConfigurations] = useState({
        colorOne : "#ff0000",
        colorTwo : "#1e00ff",
        colorThree : "#04ff00",
        angle : 90
    })

    const [showButtonThree, setShowButtonThree] = useState(false);

    // handle update/changes to inputs
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        console.log(event.target)
        setStyleConfigurations(prevStyle => ({...prevStyle, [name] : value}))
    }

    // hide/show button 3
    const toggleButtonThree = (event) => {
        setShowButtonThree(prevToggle => !prevToggle)
    }

    return (
        <div className="main--content">
            <PreviewPane
                styleConfigurations={styleConfigurations}
                showButtonThree={showButtonThree}
            />
            <ControlPane 
                styleConfigurations={styleConfigurations}
                showButtonThree={showButtonThree}
                handleInputChange={handleInputChange}
                toggleButtonThree={toggleButtonThree}
            />
        </ div>
    )
}