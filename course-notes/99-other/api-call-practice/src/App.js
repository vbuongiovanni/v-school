import React from "react";
import StarWars from "./components/StarWars"
import UnsplashImages from "./components/UnsplashImages";
import TwitterCall from "./components/TwitterCall";
import authData from "./components/auth/auth"

class App extends React.Component {

    

    render() {
        
        const [unsplashData] = authData.filter(element => element.source === "unsplash")
        const [twitterAuth] = authData.filter(element => element.source === "twitter")
        console.log(twitterAuth)

        // <StarWars />
        // <UnsplashImages authData={unsplashData}/>
        return (
            <TwitterCall authData={twitterAuth}/> 
        )
    }
}

export default App