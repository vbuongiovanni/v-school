import React from "react";

// parameter is named 'props', meaning "properties". This parameter, whatever it is named, is an object
// that contains the properties defined in the JSX shown in App.js

export default function Contact(props){

    // A common way to tackle the 'props' object is to leverage destructuring to clean up the code a bit:
    // you can also rename the new variables 
    const {img, phone : phoneNumber, name, email } = props

// alternatively, we could have just destructured at the function param level:
// export default function Contact({img, phone, name, email}){

    const imagePath = require("../images/" + props.img); // however, you can also access the props using dot notation

    return (
        <div className="contact-card">
            <img alt="some text here" src={imagePath}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img alt="some text here" src={require("../images/phone-icon.png")}/>
                <p>{phoneNumber}</p>
            </div>
            <div className="info-group">
                <img alt="some text here" src={require("../images/mail-icon.png")}/>
                <p>{email}</p>
            </div>
        </div>
    )
}

