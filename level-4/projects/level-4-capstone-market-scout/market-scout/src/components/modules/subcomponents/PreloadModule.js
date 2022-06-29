import React from "react";

export default function PreloadPage() {

    return (
        <div className="module-container preload-module-container">
            <h4>Select a Company above to begin!</h4>
            <p>Enter the name or stock symbol of the company you are interested in learning about above, then click <span className="emphasize-text">Search</span>.</p>
            <p>
                Can't remember the <span className="emphasize-text">exact</span> name the company? No problem! 
                I search through the SEC's existing database for partial matches, so just type in what you know run the search. Just try to make sure your spelling is on point!
            </p>
            <p>Scroll through <span className="emphasize-text">Search Results</span> until you find the company you are looking for, then click on it to view the details.</p>
        </div>
    )
}