import React, { useContext } from 'react';
import {ThemeContext} from "./themeContext";

function Header(props) {

    // to access the value of the context, import the themeContext
    // then call the 'useContext' method from the react library:
    const {color} = useContext(ThemeContext);

    return (
        <div className={`${color}-theme`}>
            <h2>Theme Context</h2>
            <h3>You are currently using light mode</h3>
        </div>
    );
}

export default Header;