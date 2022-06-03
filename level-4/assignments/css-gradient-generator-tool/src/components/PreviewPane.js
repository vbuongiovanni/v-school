import React, {useState, useRef} from "react";

export default function PreviewPane(props) {

    const {colorOne, colorTwo, colorThree, angle} = props.styleConfigurations;
    const {showButtonThree} = props;

    // set state for copy to clipboard functionality
    const [copiedText, setCopiedText] = useState("")

    // ternary to handle logic of third color
    const colorThreeStyle = showButtonThree ? `, ${colorThree}` : "";

    // text that will be presented on UI
    let cssPresentation = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}${colorThreeStyle});<br>
        -moz-background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}${colorThreeStyle});<br>
        -webkit: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}${colorThreeStyle});
        `
    
    // Styling that will be passed to React component for presentation
    const activeStyle = {
        background: `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}${colorThreeStyle})`,
        WebKit: `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}${colorThreeStyle})`,
        MozBackground: `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}${colorThreeStyle})`
    }

    // Set useRef of text
    const outTextRef = useRef(null);

    // create handler to copy text from code pane to user's Clipboard

    const clickHandler = event => {
        const content = outTextRef.current;
        console.log(content.textContent)
        navigator.clipboard.writeText(content.textContent)
        alert("Copied!");
    }

    return (
        <div className="preview-pane--main">
            <div style={activeStyle} className="preview-pane--display"></div>
            <div ref={outTextRef} onClick={clickHandler} onDoubleClick={clickHandler} className="preview-pane--code">
                {cssPresentation.split("<br>").map((text, index) => <React.Fragment key={index}>{text}{<br/>}</React.Fragment>)}
            </div>
        </div>
    )
}