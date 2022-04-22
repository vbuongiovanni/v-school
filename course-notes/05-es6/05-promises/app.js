// promises - demonstrates how promises work, along with the three states:

    // pending - no method, just what is available upon instantiation.
    // resolve - .then()
    // reject - .catch()

function flipCoin(){ // returns pending promise
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 2);

        if (randomNumber === 0) {
            resolve("Heads"); // if the random number is 0, then the promise will be RESOLVED and the promises' 'response' will be "Heads"
        } else if (randomNumber === 1){
            reject("Tails") // if the random number is 1, then the promise will be REJECTED and the promises' 'error' will be "Tails"
        }
    }); 
}

flipCoin()
    .then(response => console.log("PROMISE RESOLVED : " + response)) // .then() will receive whatever is resolved()
    .catch(error => console.log("PROMISE REJECTED : " + error)) // .catch() will receive whatever is reject()


Promise.resolve("Manual resolve").then(response => console.log(response))
Promise.reject("Manual reject").catch(error => console.log(error))


// true asynchronous function:
function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve(" - this was delayed by 5 seconds"), 5000);
    })

}

getData()
    .then(res => console.log("RESOLVED" + res))
    .catch(err => console.log(err))

