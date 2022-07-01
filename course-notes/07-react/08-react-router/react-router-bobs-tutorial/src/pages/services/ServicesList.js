import React from "react";
import serviceData from "./servicesData";
import {Link} from "react-router-dom";


export default function ServicesList() {
    
    const services = serviceData.map((service, index) => {
        return (
            <li key={index}><Link to={service._id}>{service.name}</Link> - ${service.price}</li>
        )
    })
    
    return (
        <ul>
            {services}
        </ul>
    )
}