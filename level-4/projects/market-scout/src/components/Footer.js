import React, {useContext} from "react";
import {AppContext} from "./AppContext";

export default function Footer(){

    const {company} = useContext(AppContext);

    return (
        <footer>
            <h4>A footer for an analysis of {company.name}</h4>
        </footer>
    )
}