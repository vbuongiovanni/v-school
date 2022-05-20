import React from "react";

export default function Form(props){

    const {handleSubmit, formData, handleFormChange} = props;

    return(
        <form onSubmit={handleSubmit}>
            <input
                name={"firstName"}
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleFormChange}
            />
            <input
                name={"lastName"}
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleFormChange}
            />
            <input
                name={"email"}
                value={formData.email}
                placeholder="Phone Number"
                onChange={handleFormChange}
            />
            <input
                name={"birthPlace"}
                value={formData.birthPlace}
                placeholder="Place of Birth"
                onChange={handleFormChange}
            />
            <input
                name={"phone"}
                value={formData.phone}
                placeholder="Phone Number"
                onChange={handleFormChange}
            />
            <input
                name={"favFoods"}
                value={formData.favFoods}
                placeholder="Favorite Food"
                onChange={handleFormChange}
            />
            <textarea
                name={"notes"}
                value={formData.notes}
                placeholder="Tell us about yourself"
                onChange={handleFormChange}
            />
            <button>Submit</button>
        </form>
    )
}