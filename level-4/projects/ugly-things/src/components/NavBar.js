import React, {useContext, useState} from "react";
import {UglyContext} from "./UglyContext";

export default function NavBar() {

    // pull setter function of uglyData from context
        const {setUglyData, inEdit, postUglyEntry} = useContext(UglyContext);

    // set state for form data
        const [formData, setFormData] = useState({
            title : "",
            description : "",
            imgUrl : ""
        })
    
    // handler to sync changes w/ form
        const handleFormChange = event => {
            event.preventDefault()
            const {name, value} = event.target;
            setFormData(prevFormData => ({...prevFormData, [name] : value}))
        }
        
    // form handler functions

        const handlePostRequest = event => {
            event.preventDefault();
            // this looks a little overly complex but I believe it is necessary,
            // prior to making a structured clone of formData, state wouldn't be updated in time
            // for post request when image was empty
            const payLoad = structuredClone(formData)
            payLoad.imgUrl = payLoad.imgUrl === "" ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" : payLoad.imgUrl;
            postUglyEntry(payLoad)
            setFormData({
                title : "",
                description : "",
                imgUrl : ""
            })
        }

    return (
        <nav>
            <form onSubmit={handlePostRequest}>
                <div className="form-labels">
                    <label htmlFor="title">Title of Ugly Thing:</label>
                    <label htmlFor="imgUrl">URL of Ugly Thing's Image:</label> 
                    <label htmlFor="description">Description:</label> 
                </div>

                <div className="form-inputs">
                    <input 
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleFormChange}
                        placeholder="A cool title"
                        disabled={inEdit}
                        required
                        minLength="1"
                    />
                    <input 
                        name="imgUrl"
                        type="text"
                        placeholder="www.image.com/jpg"
                        value={formData.imgUrl}
                        onChange={handleFormChange}
                        disabled={inEdit}
                    />
                    <textarea 
                        name="description"
                        type="url"
                        value={formData.description}
                        placeholder="Some meaningful description"
                        onChange={handleFormChange}
                        disabled={inEdit}
                        required
                        minLength="1"
                    />
                </div>

                <div className="form-button">
                    <button
                        id="form-submit-button"
                        disabled={inEdit}
                    >
                            Add To List of Ugly Things
                    </button>
                </div>
            </form>
        </nav>
    )
}