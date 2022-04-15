

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr.filter(num => (num % 2) === 0))

const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

console.log(movies.filter(movie => movie.genre === "action"))


