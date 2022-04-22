// XMLHttpRequest

// Noteable properties and methods:

    // xhr.onreadystatechange : property that will fire whenever readyState changes.
    // xhr.readyState : codes 1 - 4 showing where along the process the xhr is. see notes for additional details.
    // xhr.status : status code from the server. 200 and usually 201 are good.. everything else will probably require rework.
    // xhr.responseText : response from server

    // xhr.open() : initialize new request - accepts arguments to specify/configure request
    // xhr.send() : send request




// Instatniate a request (xhr):

const xhr = new XMLHttpRequest();

// define function:

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        console.log(data.results);
        writeData(data);
        
    }
};

// open connection:
xhr.open("GET", "http://swapi.dev/api/people/", true);

// send request:

xhr.send();

// external data to process and put data on DOM

writeData = function(data){
    const people = data.results;
    let listItem;

    people.forEach(element => {    
        listItem = document.createElement("li");
        listItem.textContent = generateListItem(element);
        document.getElementById("demo1").appendChild(listItem);
    });
}


generateListItem = function({name, height, gender}){
    return `${name} is ${height} tall and is a ${gender}`
}