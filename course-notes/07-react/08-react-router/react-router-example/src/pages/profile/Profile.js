import React from "react"
import {Link, Outlet} from "react-router-dom"

function Profile() {

    // use case - we want the ProfileInfo and ProfileSettings component to render on the Profile page
    // in order to do this in V6 of react-router, we have to use the <Outlet /> component,
    // and nest the <ProfileInfo/> and <ProfileSettings/> components under the <Profile/> Route on App.js.

    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to="/profile/info">Profile Info</Link></li>
                <li><Link to="/profile/settings">Profile Settings</Link></li>
            </ul>

            <Outlet />
        </div>
    )
}

export default Profile