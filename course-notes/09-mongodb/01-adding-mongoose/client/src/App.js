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
            .catch(err => console.log(err.response.data.error))
    }

    const addMovie = (newMovie) => {
        axios.post("/movies", newMovie)
            .then(res => setMovies(prevMovies => [...prevMovies, res.data]))
            .catch(err => console.log(err.response.data.error))
    }

    const deleteMovie = (movieId) => {
        axios.delete(`/movies/${movieId}`)
            .then(res => setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId)))
            .catch(err => console.log(err.response.data.error))   
    }

    const editMovie = (updatedMovie, movieId) => {
        axios.put(`/movies/${movieId}`, updatedMovie)
            .then(res => setMovies(prevMovies => prevMovies.map(movie => movie._id  === movieId ? res.data : movie)))
            .catch(err => console.log(err.response.data.error))   
    }

    const handleFilter = (e) => {
        console.log(e.target.value)
        if (e.target.value === "all") {
            axios.get(`/movies`)
                .then(res => setMovies(res.data))
                .catch(err => console.log(err))
        } else {
            axios.get(`/movies/search/genre?genre=${e.target.value}`)
                .then(res => setMovies(res.data))
                .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            <AddMovieForm
                submit={addMovie}
                btnText={"Add Movie"}
            />

            <h4>
                <select onChange={handleFilter} className="filter-form">
                    <option value="all">- Select a Genre-</option>
                    <option value="action">Action</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                </select>
            </h4>

            <div className="movie-container">
                {movies.map((movie, index) => {
                    return <Movie {...movie} key={index} deleteMovie={deleteMovie} editMovie={editMovie}/>
                    })
                }
            </div>
        </div>
    )
}