import React, {useState} from "react";
import "./style.css"
import StarIcon from "./StarIcon"

export default function App(){
    const [contact, setContact] = useState({
        firstName: "Johnny",
        lastName: "Doe",
        phone: "+1 (719) 555-1211",
        email: "itsmyrealname@Gmail.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */


    /**
     * Challenge: Move the star image into its own component
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */
    
    function toggleFavorite() {
        setContact(prevState => ({...prevState, isFavorite : !prevState.isFavorite}))
    }
    
    return (
        <main>
            <article className="card">
                <img src={require("./images/user.png")} className="card--image" />
                
                <div className="card--info">
                    <StarIcon isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="card--name">
                        {`${contact.firstName} ${contact.lastName}`}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}