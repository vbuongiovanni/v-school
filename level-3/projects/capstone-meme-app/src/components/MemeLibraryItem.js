import React from "react";

export default function MemeLibraryItem(props) {

    const {randomImage, topText, bottomText, memeId, setMemeList, memeList, toggleEditMode, setEditMeme} = props

    const deleteMeme = (event) => {
        event.preventDefault();
        const idOfInterest = event.target.parentNode.parentNode.getAttribute('id');
        setMemeList(prevMemeList => prevMemeList.filter(meme => meme.memeId !== idOfInterest))
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
                <img className="library--meme-display" src={randomImage}></img>
                <div className="library--meme-text-1">
                    <span id="library--meme-text-top">{topText}</span>
                </div>
                <div className="library--meme-text-2">
                    <span id="library--meme-text-bottom">{bottomText}</span>
                </div>
            </div>
            <div className="library--item-controls">
                <button onClick={editMeme}>Edit</button>
                <button onClick={deleteMeme}>Delete</button>
            </div>
        </li>
    )
}