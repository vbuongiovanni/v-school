import React from "react";

export default function Form(props){

    // Deconstruct props
    const {handleSubmit, formData, handleFormChange} = props;

    // return form per requirements
    return(
        <form onSubmit={handleSubmit}>
            <div className="form--inputs">
                <input
                    name="firstName"
                    className="form-inputs--firstName"
                    value={formData.firstName}
                    placeholder="First Name"
                    required
                    autoComplete="off"
                    minLength="3"
                    onChange={handleFormChange}

                />
                <input
                    name="lastName"
                    className="form-inputs--lastName"
                    value={formData.lastName}
                    placeholder="Last Name"
                    required
                    autoComplete="off"
                    minLength="3"
                    onChange={handleFormChange}
                />
                <input
                    type="email"
                    name="email"
                    className="form-inputs--email"
                    value={formData.email}
                    placeholder="email@domain.com"
                    required
                    autoComplete="off"
                    minLength="3"
                    onChange={handleFormChange}
                />
                <input
                    name="birthPlace"
                    className="form-inputs--birthPlace"
                    value={formData.birthPlace}
                    placeholder="Place of Birth"
                    required
                    autoComplete="off"
                    minLength="3"
                    onChange={handleFormChange}
                />
                <input
                    type="tel"
                    name="phone"
                    className="form-inputs--phone"
                    value={formData.phone}
                    placeholder="Phone Number"
                    pattern="[0-9]{10}"
                    title="Numbers only - exclude all dashes or special characters (e.g., (8014561029))"
                    required
                    autoComplete="off"
                    minLength="3"
                    onChange={handleFormChange}
                />
                <input
                    name="favFoods"
                    className="form-inputs--favFoods"
                    value={formData.favFoods}
                    placeholder="Favorite Food"
                    required
                    autoComplete="off"
                    minLength="3"
                    onChange={handleFormChange}
                />
                <textarea
                    name="notes"
                    className="form-inputs--notes"
                    value={formData.notes}
                    placeholder="Tell us about yourself"
                    required
                    autoComplete="off"
                    minLength="3"
                    onChange={handleFormChange}
                />
            </div>
            <button>Submit</button>
        </form>
    )
}