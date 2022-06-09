import React from "react";
// the parameters, from react-routes, of a given component are accessible from the following hooks:
import {useLocation, useParams, useHistory, useRouteMatch} from "react-router-dom";


export default function Home(props){
    console.log(props)
    return (
        <h1>Home</h1>
    )
}