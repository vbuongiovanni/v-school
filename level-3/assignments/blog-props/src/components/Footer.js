import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'

export default function Footer() {
   
    console.log(icon("twitter"));
    const element = <FontAwesomeIcon icon={icon("twitter")} />

    return (
        <footer className="footer--main">
            <ul className="footer--logos">
                <li className="twitter icon">
                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </li>
                <li className="facebook icon">
                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                </li>
                <li className="github icon">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                </li>
            </ul>
            <div className="footer--text">Copyright © Your Website 2022</div>

        </footer>
    )
}