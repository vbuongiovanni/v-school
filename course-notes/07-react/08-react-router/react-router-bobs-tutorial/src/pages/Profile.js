import React from "react";
import {Link, Outlet} from "react-router-dom";


export default function Profile(){

    return (
        <>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to="info">Information</Link></li>
                <li><Link to="settings">Settings</Link></li>
            </ul>
            <Outlet/>
        </>
    )
}