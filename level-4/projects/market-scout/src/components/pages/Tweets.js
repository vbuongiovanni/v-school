import React, {useContext} from "react";
import { AppContext } from "../AppContext";

export default function Tweets(){
    
    const {company} = useContext(AppContext);

    return (
        <h1>Tweets for {company.title}</h1>
    )

}