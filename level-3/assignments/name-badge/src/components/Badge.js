import React from "react"

export default function Badge(props) {

    const {
        firstName, lastName,
        email, phone,
        birthPlace, favFoods,
        notes, id} = props;

    return (
        <li key={id} className={`badge-list-item-${id}`}>
            <div className={`badge`}>
                <span className="name">{firstName} {lastName}</span>
                <span className="place-of-birth">{birthPlace}</span>
                <span className="email">{email}</span>
                <span className="phone">{phone}</span>
                <span className="favorite-foods">{favFoods}</span>
                <span className="notes">{notes}</span>
            </div>
        </li>
    )
}