import React, {useState} from "react"
import {confirm} from "react-confirm-box"
import MemeListItem from "./MemeListItem"
import MemeEditor from "./MemeEditor"

export default function MemeLibrary(props){

    // Deconstruct props
    const {memeList, setMemeList, inEditMode, setEditMode} = props;
    
    const [editMeme, setEditMeme] = useState({
        randomImage : "",
        topText : "",
        bottomText : "",
        memeId : ""
       })

    // handler function to enter/exit Edit Screen.
    const toggleEditMode = () => {
        setEditMode(priorEditMode => !priorEditMode)
    }

    // handler function to handle changes in Edit Screen.
    const onEditChangeHandle = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setEditMeme(prevEditMeme => ({...prevEditMeme, [name] : value}))
    }

    // confirmation to save changes:
    const onSaveConfirm = async() => {
        const result = await confirm("Are you sure you want to save edits?")
        if (result) {
            setMemeList(prevMemeList => prevMemeList.filter(meme => meme.memeId !== editMeme.memeId))
            setMemeList(prevMemeList => [editMeme, ...prevMemeList])
            toggleEditMode()
        }
    }

    // handler function save changes during from Edit Screen.
    const saveEditHandler = (event) => {
        event.preventDefault();
        onSaveConfirm()
    }

    // consolidate props and callback functions that will be passed to child components
    const memeLibraryProperties = {...props, setEditMeme, toggleEditMode}

    // consolidate props and callback functions that will be passed to MemeEditor
    const memeEditorProps = {...editMeme, saveEditHandler, onEditChangeHandle, toggleEditMode}

    // callback function that returns either 1.) Library or 2.) Edit screen w/ editMeme
    const libraryMode = () => {
        if (inEditMode === true) {
            return (
                <main className="component-container">
                    <MemeEditor {...memeEditorProps}/>
                </main>
            )
        } else {
            return (
                <main className="component-container">
                    <ul className="library--list component-container--content">
                        <div className="page--header"><h1>Meme Library</h1></div>
                        {memeList.length > 0 && memeList.map(memeDetail => <MemeListItem key={memeDetail.memeId} {...memeLibraryProperties} {...memeDetail}/>)}
                        {memeList.length === 0 && <h1 className="message-text">Your meme library is empty... Create a new meme or two, then come back!</h1>}
                    </ul>
                </main>
            )
        }
    }

    return (<>{libraryMode()}</>)
}