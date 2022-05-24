import React, {useState} from "react"
import MemeLibraryItem from "./MemeLibraryItem"

export default function MemeLibrary(props){

    const {memeList, setMemeList, inEditMode, setEditMode} = props;
    const [editMeme, setEditMeme] = useState({
        randomImage : "",
        topText : "",
        bottomText : "",
        memeId : ""
       })

    const toggleEditMode = () => {
        setEditMode(priorEditMode => !priorEditMode)
    }

    const onEditChangeHandle = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setEditMeme(prevEditMeme => ({...prevEditMeme, [name] : value}))
    }

    const saveEditHandler = (event) => {
        event.preventDefault();
        setMemeList(prevMemeList => prevMemeList.filter(meme => meme.memeId !== editMeme.memeId))
        setMemeList(prevMemeList => [...prevMemeList, editMeme])
        toggleEditMode()
    }

    // create object to store properties and callback functions

    const memeLibraryProperties = {...props, setEditMeme, toggleEditMode}

    const libraryMode = () => {
        if (inEditMode === true) {
            /* Edit Mode - Mocks main page with various minor changes */
            return (
                <form className="main--container">
                <h1>Meme Editor</h1>
                <div className="main--input-container">
                    <input className="main--input-text"
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        value={editMeme.topText}
                        onChange={onEditChangeHandle}
                    />
                    <input className="main--input-text"
                        type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={editMeme.bottomText}
                        onChange={onEditChangeHandle}
                    />
                </div>
                <div className="main--display-container">
                    <img className="main--meme-display" src={editMeme.randomImage}></img>
                    <div className="main--meme-text-1">
                        <span id="meme-text-top">{editMeme.topText}</span>
                    </div>
                    <div className="main--meme-text-2">
                        <span id="meme-text-bottom">{editMeme.bottomText}</span>
                    </div>
                </div>
                <div className="edit--controls">
                    <button onClick={saveEditHandler} className="edit--button-save">
                        <span>Save Changes</span>
                    </button>
                    <button onClick={toggleEditMode} className="edit--button-cancel">
                        <span>Cancel</span>
                    </button>
                </div>
            </form>
            )
        } else {
            /* Library Mode - Shows a listing of all saved memes. */
            return (
                <ul className="meme-library--list">
                    {memeList.length > 0 && memeList.map(memeDetail => <MemeLibraryItem key={memeDetail.memeId} {...memeLibraryProperties} {...memeDetail}/>)}
                    {memeList.length === 0 && <h1>Your meme library is empty</h1>}
                </ul>
            )
        }
    }

    return (
        <main className="library--main">
            {libraryMode()}
        </main>
    )
}