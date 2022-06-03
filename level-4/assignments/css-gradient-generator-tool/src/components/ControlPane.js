import React from "react";
import ColorInput from "./ColorInput"

export default function ControlPane(props) {

    const {colorOne, colorTwo, colorThree, angle} = props.styleConfigurations;
    const {handleInputChange, toggleButtonThree, showButtonThree} = props;

    return (
        <div className="control-pane--main">
            <h2>Options</h2>
            <ColorInput 
                title="Color 1"
                colorState={colorOne}
                name="colorOne"
                handleInputChange={handleInputChange}
            />
            <ColorInput
                title="Color 2"
                colorState={colorTwo}
                name="colorTwo"
                handleInputChange={handleInputChange}
            />
            {showButtonThree ? <ColorInput title="Color 3" name="colorThree" colorState={colorThree} handleInputChange={handleInputChange}/> : <></>}
            <div className="control-pane--angle-input">
                <div>
                    <span>Angle</span>
                    <input 
                        name="angle"
                        type="number"
                        max={360}
                        min={0}
                        className="angle-input-box"
                        value={angle}
                        onChange={handleInputChange}
                    />
                </div>
                <button onClick={toggleButtonThree} className="button-style">{showButtonThree ? "-" : "+"}</button>
            </div>           
        </div>
    )
}