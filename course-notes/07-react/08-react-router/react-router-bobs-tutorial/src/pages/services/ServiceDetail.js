import React from "react";
import {useParams} from "react-router-dom";
import serviceData from "./servicesData";

export default function ServiceDetail() {

    const {serviceId} = useParams();
    
    const [service] = serviceData.filter(service => service._id === serviceId);

    return (
        <div key={serviceId}>
            <h2>{service.name}</h2>
            <h2>Price: ${service.price}</h2>
            <h4>{service.description}</h4>
        </div>
    )
}