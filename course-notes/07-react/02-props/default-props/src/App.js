import React from "react";
import Card from "./components/Card";
import CardClass from "./components/CardClass";

// see Card.js for implementation of default props.

const App = () => {
    return (
        <div>
            <Card cardColor="red" height={150} width={75} />
            <Card />
            <Card cardColor="green" height={75} width={150} />
            <CardClass cardColor="red" height={200} />
        </div>
    );
};

export default App;
