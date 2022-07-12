import React, {useState} from "react";
import AddMovieForm from "./AddMovieForm";

export default (props) => {
    const {title, genre, _id, editMovie} = props;
    const [editToggle, setEditToggle] = useState(false);

    const switchToggle = () => {
        setEditToggle(prevToggle => !prevToggle)
    }


    return (
        <div className="movie">
            {!editToggle ? 
                <>
                    <h1>{title}</h1>
                    <p>{genre}</p>
                    <button 
                        className="delete-btn"
                        onClick={() => props.deleteMovie(_id)}>
                            Delete
                    </button>
                    <button
                        className="edit-btn"
                        onClick={switchToggle}>
                        Edit
                    </button>
                </>
                :
                <>
                    <AddMovieForm 
                        title={title}
                        genre={genre}
                        _id={_id}
                        submit={editMovie}
                        switchToggle={switchToggle}
                        btnText="Save Edits"
                    />
                    <button
                        className="edit-btn"
                        onClick={switchToggle}>
                        Cancel
                    </button>
                </>
            }

        </div>
    )
}