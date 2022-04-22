// fetch - streamlines http requests - is promised based and native to js
// note that fetch does not work in node.

let url = "https://rickandmortyapi.com/api/character";

// by default, fetch does get request

// fetch(url) // since it is promise based, we have to set up a .then() and .catch() to handle resolves and rejects, respectively
//     .then(res => res.json())  // .json() method is tied to the response, which parses the JSON and return the javascript object
//     .then(res => console.log(res.results)) // in the next .then(), the javascript object, so we console log res.results, which shows the actual results
//     .catch(err => console.log(err))

let result = 2 + 2

result 

fetch(url)
    .then(res => res.json()) // retrieve resolve, then parse into JSON
    .then(res => {
        const characters = res.results;
        console.log(characters)
        let listElement;
        characters.forEach(element => {
            listElement = document.createElement("li");
            let {name, status, species, gender} = element;
            listElement.textContent = `${name} is a ${species} that is currently ${status}. ${name} is a ${gender}`;
            document.getElementById("main-list").appendChild(listElement);
        });
    })
    .catch(err => console.log(err))




// // using fetch for post/delete/put - we just 
// fetch(url {
//     ***CONFIGURATION STUFF HERE SEE REFERENCES ONLINE FOR MORE DETAIL*** 
// })

