


// setInterval(functionToRun, timeBetweenExecutionsInMilSecs)
//  for setInterval, we can capture the intervalID, then use clearInterval(intervalID) to stop the execution:

// let intervalID = setInterval(sayHello, 1000) // wait 2 seconds before calling function:

// setTimeout(functionToRun, timeDelayBeforeExecutionInMilSecs)
//  for setTimeout, we can capture the timeoutID, then use clearTimeout(timeoutID) to stop the execution:

// let timeoutID = setTimeout(sayHello, 1000) // wait 2 seconds before calling function:
// clearTimeout(timeoutID);

const sayHello = () => {
    console.log("say hello")
}

const stopSayingHello = () => {
    clearInterval(intervalID)
}

// together, this will say hello every second for 5 seconds:

let intervalID = setInterval(sayHello, 1000)

setTimeout(stopSayingHello, 5000)



