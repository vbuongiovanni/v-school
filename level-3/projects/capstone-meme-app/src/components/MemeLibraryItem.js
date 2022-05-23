import React from "react";

export default function MemeLibraryItem(props) {

    const {randomImage, topText, bottomText, memeId} = props

    return (
        <li className="library--list-item" id={`list-item-${memeId}`}>
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
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </li>
    )
}