// https://www.youtube.com/watch?v=568g8hxJJp4

// promises versus async/await:

let url = "http://swapi.dev/api/people/";

// get request using fetch: 

function fetchSWApi(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        
}
// fetchSWApi(url + "1");


// alternative using await/async - it is promised based, but it all happens on the backend.. so no need to worry about then() and else()

async function asyncFetchSWApi(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

asyncFetchSWApi(url + "2");

