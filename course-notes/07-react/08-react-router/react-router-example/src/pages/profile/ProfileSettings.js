import React from "react"

function ProfileSettings() {
    console.log("ProfileInfo() rendered")
    return (
        <section>
            <h1>Profile settings</h1>
            <input type="password"/>
            <button>Change</button>
        </section>
    )
}

export default ProfileSettings