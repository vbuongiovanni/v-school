import React, {useState, useContext} from "react";
import {UglyContext} from "./UglyContext";

export default function ListEntry(props) {

    // deconstruct elements from props containing details from .map()
        const {title, description, imgUrl, _id} = props.itemDetail
        
    // deconstruct context 
        const {putUglyEntry, handleDelete, inEdit, setInEditMode} = useContext(UglyContext);
    
    // set state of ListEntry
        const [inActiveEdit, setInActiveEdit] = useState(false);
        
        const [editData, setEditData] = useState({
            title,
            description,
            imgUrl,
            _id
        })
        
    // handler to sync changes w/ form
        const handleFormChange = event => {
            event.preventDefault()
            const {name, value} = event.target;
            setEditData(prevFormData => ({...prevFormData, [name] : value, _id}))
        }
        
    // handler functions to for entering/saving/canceling edit mode
        const handleStartEdit = event => {
            event.preventDefault()
            setEditData(props.itemDetail)
            setInActiveEdit(true);
            setInEditMode(true);
        }
        const handleSaveEdit = event => {
            event.preventDefault();
            const {_id, title, description, imgUrl} = editData;
            putUglyEntry(_id, {title, description, imgUrl})
            setInActiveEdit(false);
            setInEditMode(false);
        }
        const handleCancelEdit = event => {
            event.preventDefault()
            setInActiveEdit(false);
            setInEditMode(false);
        }

    return (
        !inActiveEdit ? 
            <div className="list-item">
                <div className="list-item-container">
                    <img src={imgUrl === "" ? require("./default-img.jpg") : imgUrl}></img>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="list-item-button-container">
                        <button onClick={handleStartEdit} disabled={inEdit} name={_id}>Edit</button>
                        <button onClick={handleDelete} name={_id} disabled={inEdit}>Delete</button>
                    </div>
                </div>
            </div>
            : 
            <div className="list-item">
                <div className="list-item-container active-edit">                    
                    <input 
                        name="imgUrl"
                        value={editData.imgUrl}
                        onChange={handleFormChange}
                        className="edit-input-url"
                    >
                    </input>
                    <input 
                        name="title"
                        value={editData.title}
                        onChange={handleFormChange}
                        className="edit-input-title"
                    >
                    </input>
                    <textarea 
                        name="description"
                        value={editData.description}
                        onChange={handleFormChange}
                        className="edit-input-textarea"
                    >
                    </textarea>
                    <div className="list-item-button-container">
                        <button onClick={handleSaveEdit} name={_id}>Save Edits</button>
                        <button onClick={handleCancelEdit} name={_id}>Cancel Edits</button>
                    </div>
                </div>
            </div>
    )
}