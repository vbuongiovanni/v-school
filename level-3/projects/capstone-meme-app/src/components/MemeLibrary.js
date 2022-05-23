import React from "react"
import MemeLibraryItem from "./MemeLibraryItem"

export default function MemeLibrary(props){

    const {memeList} = props;

    return (
        <main className="library--main">
            <ul className="meme-library--list">
                {memeList.length > 0 && memeList.map(memeDetail => <MemeLibraryItem key={memeDetail.memeId} {...memeDetail}/>)}
                {memeList.length === 0 && <h1>Your meme library is empty</h1>}
            </ul>
        </main>
    )
}