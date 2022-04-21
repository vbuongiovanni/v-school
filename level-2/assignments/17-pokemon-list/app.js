// Create new request

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 201)) {
        const jsonData = xhr.responseText;
        const {pokemon} = JSON.parse(jsonData).objects[0];
        data = [...pokemon];

        

        data.forEach(element => {
            let {name, resource_uri} = element;

            
            getDetails(resource_uri, name)

            // let listElement = document.createElement("li");
            // listElement.textContent = `${name}`;
            // document.getElementById("pokemon-list").appendChild(listElement);

        })
    }
}


xhr.open("get", "https://api.vschool.io/pokemon", true)

xhr.send()


getDetails = function(resource_uri, name) {
    const xhrDetails = new XMLHttpRequest();

            counter = 0;

            xhrDetails.onreadystatechange = () => {
                if (xhrDetails.readyState === 4 && (xhrDetails.status === 200 || xhrDetails.status === 201)) {
                    console.log(counter)
                    counter++;
                    let {height, base_experience}= JSON.parse(xhrDetails.responseText)
                    let listElement = document.createElement("li");
                    listElement.textContent = `${name} - base experience: ${base_experience}: height: ${height}`;
                    document.getElementById("pokemon-list").appendChild(listElement);

                }
            }
            xhrDetails.open("get", "https://pokeapi.co/" + resource_uri, true)
            xhrDetails.send()
}



