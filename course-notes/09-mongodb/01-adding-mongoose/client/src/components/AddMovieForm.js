import React, {useState} from "react";

export default (props) => {

    const {submit} = props;

    const initInputs = {
        title : props.title || "",
        genre : props.genre || ""}
    const [inputs, setInputs] = useState(initInputs)

    const inputHandler = e => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name] : value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        submit(inputs, props._id);
        setInputs(initInputs);
        if (props.switchToggle !== undefined) {
            props.switchToggle();
        }
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
            <button>{props.btnText}</button>
        </form>
    )
}