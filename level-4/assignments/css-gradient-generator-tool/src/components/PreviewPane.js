import React from "react";

export default function PreviewPane(props) {

    const {colorOne, colorTwo, colorThree, angle} = props.styleConfigurations;
    const {showButtonThree} = props;

    // ternary to handle logic of third color
    const colorThreeStyle = showButtonThree ? `, ${colorThree}` : "";

    // text that will be presented on UI
    let cssPresentation = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}${colorThreeStyle});<br>
        -moz-background: linear-gradient(${angle}deg, ${colorOne} , ${colorTwo}${colorThreeStyle});<br>
        -webkit: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}${colorThreeStyle});
        `

    // Styling that will be passed to React component for presentation
    const activeStyle = {
        background: `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}${colorThreeStyle})`,
        WebKit: `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}${colorThreeStyle})`,
        MozBackground: `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}${colorThreeStyle})`
    }

    return (
        <div className="preview-pane--main">
            <div style={activeStyle} className="preview-pane--display"></div>
            <div className="preview-pane--code">
                {cssPresentation.split("<br>").map((text, index) => <p key={index}>{text}</p>)}
            </div>
        </div>
    )
}