import React from "react"

export default function MemeEditor(props) {

    // Deconstruct props
    const {topText, bottomText, randomImage, onEditChangeHandle, saveEditHandler, toggleEditMode} = props;

    return (
        <>
            <form className="meme--container component-container--content">
                <div className="page--header"><h1>Meme Editor</h1></div>
                <div className="meme--input-container">
                    <input
                        className="meme--input-text"
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        value={topText}
                        onChange={onEditChangeHandle}
                    />
                    <input
                        className="meme--input-text"
                        type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={bottomText}
                        onChange={onEditChangeHandle}
                    />
                </div>
                <div className="meme--display-container">
                    <img className="meme-display" src={randomImage}></img>
                    <div className="meme-text-container-top">
                        <span className="meme-text focus-meme-text">{topText}</span>
                    </div>
                    <div className="meme-text-container-bottom">
                        <span className="meme-text focus-meme-text">{bottomText}</span>
                    </div>
                </div>
                <div className="edit--controls button-container">
                    <button onClick={saveEditHandler} className="control-button">
                        Save Changes
                    </button>
                    <button onClick={toggleEditMode} className="control-button">
                        Cancel
                    </button>
                </div>
            </form>
        </>
    )
}