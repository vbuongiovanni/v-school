import React, {useState} from "react";
import "./style.css"
import Form from "./components/Form"
import BadgeList from "./components/BadgeList"

export default function App(){

    const [formData, setFormData] = useState({
        firstName : "Bob",
        lastName : "Smith",
        email : "BSmith@Gmail.com",
        birthPlace : "california",
        phone : "1234567890",
        favFoods : "Pizza",
        notes : "I Like Stuff",
        id : 0
    })

    const [badgeList, setBadgeList] = useState([])
    
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
    
    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevFormData => ({...prevFormData, [name] : value}))
    }

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