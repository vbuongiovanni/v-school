import React from "react";
import {confirm} from "react-confirm-box"

export default function MemeLibraryItem(props) {

    const {randomImage, topText, bottomText, memeId, setMemeList, memeList, toggleEditMode, setEditMeme} = props

    const onDeleteConfirm = async(event) => {
        const result = await confirm(`Are you sure you want to delete this meme? It will be wiped from existence.`);
        if (result) {
            const idOfInterest = event.target.parentNode.parentNode.getAttribute('id');
            setMemeList(prevMemeList => prevMemeList.filter(meme => meme.memeId !== idOfInterest))
        }

    }

    const deleteMeme = (event) => {
        event.preventDefault();
        onDeleteConfirm(event);
    }

    const editMeme = (event) => {
        const idOfInterest = event.target.parentNode.parentNode.getAttribute('id');
        const [memeToEdit] = memeList.filter(meme => meme.memeId === idOfInterest);
        setEditMeme(memeToEdit)
        toggleEditMode()
    }

    return (
        <li className="library--list-item" id={memeId}>
            <div className="library--item-presentation">
                <img className="meme--meme-display" src={randomImage}></img>
                <div className="meme-text-container-top list-item-meme-text-top">
                    <span id="meme--text">{topText}</span>
                </div>
                <div className="meme-text-container-bottom list-item-meme-text-bottom">
                    <span id="meme--text">{bottomText}</span>
                </div>
            </div>
            <div className="list-item--controls button-container">
                <button className="control-button" onClick={editMeme}>Edit</button>
                <button className="control-button" onClick={deleteMeme}>Delete</button>
            </div>
        </li>
    )
}