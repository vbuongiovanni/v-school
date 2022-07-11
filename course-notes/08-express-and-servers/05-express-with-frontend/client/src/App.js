import React, {useState, useEffect} from "react";
import axios from "axios";
import Movie from "./components/Movie";
import AddMovieForm from "./components/AddMovieForm";

import "./styles.css";

export default () => {

    const [movies, setMovies] = useState([]);

    const getMovies = () => {
        axios.get("/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }

    const addMovie = (newMovie) => {
        axios.post("/movies", newMovie)
            .then(res => setMovies(prevMovies => [...prevMovies, res.data]))
            .catch(err => console.log(err))
    }

    const deleteMovie = (movieId) => {
        axios.delete(`/movies/${movieId}`)
            .then(res => setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId)))
            .catch(err => console.log(err))   
    }

    // const updateMovie = (movieId, updatedMovie) => {
    //     axios.put(`/movies/${movieId}`, updatedMovie)
    //         .then(res => setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId)))
    //         .catch(err => console.log(err))   
    // }

    const formProps = {addMovie}

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            <AddMovieForm {...formProps}/>
            <div className="movie-container">
                {movies.map((movie, index) => {
                    return <Movie {...movie} key={index} deleteMovie={deleteMovie}/>
                    })
                }
            </div>
        </div>
    )
}