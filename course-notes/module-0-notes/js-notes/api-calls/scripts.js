

const apiKey = "935f2a66f5e46db715bb02f2e776dd66"

let url = "https://api.stlouisfed.org/fred/category?category_id=125&api_key=" + apiKey + "&file_type=json"

// url = "https://world.openfoodfacts.org/category/pastas/1.json"

// Method 1: using XMLHttpRequest

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint

    request.open('GET', url, true)

    request.onload = function () {
      // Begin accessing JSON data here

      if (request.status >= 200 && request.status < 400) {



        let data = JSON.parse(this.response)
        console.log(data)

      } else {
        console.log('error')
      }

    }

    // Send request
    request.send()




// Fetch method:

    fetch(url)
      .then(response => {
        // indicates whether the response is successful (status code 200-299) or not
        if (!response.ok) {
          throw new Error(`Request failed with status ${reponse.status}`)
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log(error))


