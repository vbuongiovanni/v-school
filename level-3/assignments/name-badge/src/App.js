import React, {useState} from "react";
import "./style.css"
import Form from "./components/Form"
import BadgeList from "./components/BadgeList"

export default function App(){

    // Set State of inputs used in form

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        birthPlace : "",
        phone : "",
        favFoods : "",
        notes : "",
        id : 0
    })

    // Set State of array that will hold existing badges

    const [badgeList, setBadgeList] = useState([])
    
    // declare function to handle form Submit

    const handleSubmit = (e) => {
        e.preventDefault();
        setBadgeList(prevBadgeList => [...prevBadgeList, formData])

        setFormData(prevFormData => ({
            firstName : "",
            lastName : "",
            email : "",
            birthPlace : "",
            phone : "",
            favFoods : "",
            notes : "",
            id : ++formData.id
        }))
    }

    // declare function to update formData on change
    
    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevFormData => ({...prevFormData, [name] : value}))
    }

    // consolidate props that will be passed to Form

    const formProps = {
        handleSubmit,
        formData,
        handleFormChange
    }

    return (
        <>
            <Form {...formProps}/>
            {badgeList.length > 0 && <BadgeList badgeList={badgeList}/>}
        </>
    )
}