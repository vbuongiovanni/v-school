import React, {useState} from "react";

export default (props) => {

    const {addMovie} = props;

    const initInputs = {title : "", genre : ""}
    const [inputs, setInputs] = useState(initInputs)

    const inputHandler = e => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name] : value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        addMovie(inputs);
        setInputs(initInputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                value={inputs.title}
                onChange={inputHandler}
                placeholder="Movie title"
                />
            <input
                name="genre"
                value={inputs.genre}
                onChange={inputHandler}
                placeholder="Movie genre"
                />
            <button>Add Movie</button>
        </form>
    )
}