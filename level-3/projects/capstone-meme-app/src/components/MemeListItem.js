import React from "react";
import {confirm} from "react-confirm-box"

export default function MemeLibraryItem(props) {

    // Deconstruct props
    const {randomImage, topText, bottomText, memeId, setMemeList, memeList, toggleEditMode, setEditMeme} = props

    // async function to remove meme from memeList. Async required to implement 'confirm' functionality.
    const onDeleteConfirm = async(event) => {
        const result = await confirm(`Are you sure you want to delete this meme? It will be wiped from existence.`);
        if (result) {
            const idOfInterest = event.target.parentNode.parentNode.getAttribute('id');
            setMemeList(prevMemeList => prevMemeList.filter(meme => meme.memeId !== idOfInterest))
        }
    }

    // handler to call async function necessary to delete meme.
    const deleteMeme = (event) => {
        event.preventDefault();
        onDeleteConfirm(event);
    }

    // handler to capture id of clicked meme, set it equal to editMeme state, and enter Edit Component
    const editMeme = (event) => {
        const idOfInterest = event.target.parentNode.parentNode.getAttribute('id');
        const [memeToEdit] = memeList.filter(meme => meme.memeId === idOfInterest);
        setEditMeme(memeToEdit)
        toggleEditMode()
    }

    return (
        <li className="list-item" id={memeId}>
            <div className="list-item--presentation">
                <img className="meme-display" src={randomImage}></img>
                <div className="meme-text-container-top">
                    <span className="meme-text list-item--meme-text">{topText}</span>
                </div>
                <div className="meme-text-container-bottom">
                    <span className="meme-text list-item--meme-text">{bottomText}</span>
                </div>
            </div>
            <div className="list-item--controls button-container">
                <button className="control-button" onClick={editMeme}>Edit</button>
                <button className="control-button" onClick={deleteMeme}>Delete</button>
            </div>
        </li>
    )
}