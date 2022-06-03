import React from "react";

export default function ColorInput(props){
    
    const {title, name, colorState, handleInputChange} = props;

    return (
        <div className="control-pane--color-input">
            <span>{title}</span>
            <span>{colorState}</span>
            <input
                type="color"
                name={name}
                value={colorState}
                onChange={handleInputChange}
            />
        </div>
    )
}