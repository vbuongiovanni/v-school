import React from "react";
import StarWars from "./components/StarWars"
import UnsplashImages from "./components/UnsplashImages";
import authData from "./components/auth/auth"

class App extends React.Component {

    

    render() {
        
        const [unsplashData] = authData.filter(element => element.source === "unsplash")

        // <StarWars />
        return (
            <UnsplashImages authData={unsplashData}/>
        )
    }
}

export default App