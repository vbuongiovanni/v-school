import React from "react"

export default function Badge(props) {

    // deconstruct all fields from badge data stored in each Badge object from the badgeList array state
    const {
        firstName, lastName,
        email, phone,
        birthPlace, favFoods,
        notes, id} = props;

    // conditional styling to color background/font color of badges (alternating based on id)
    const style = {
        backgroundColor : (id % 2) === 0 ? "firebrick" : "cornflowerblue",
        color :  (id % 2) === 0 ? "white" : "black"

    }

    // render list item, containing existing badges
    return (
        <li key={id}>
            <div className="badge-list-item">
                <div className="badge--banner" style={style}>Badge:</div>
                <div className="badge--content">    
                    <span className="badge--name">Name: {firstName} {lastName}</span>
                    <span className="badge--phone">Phone: {phone}</span>
                    <span className="badge--place-of-birth">Place of birth: {birthPlace}</span>
                    <span className="badge--favorite-foods">Favorite Food: {favFoods}</span>
                    <span className="badge--email">Email: {email}</span>
                    <span className="badge--notes">{notes}</span>
                </div>
            </div>
        </li>
    )
}