
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

const squareDigits = (num) => {
    // return convert result from reduce as Number()
    return Number(String(num) // convert input to String
            .split("") // Split string into array
            .reduce((prev, current) => { // reduce array by taking square and concatenating it to the previous result
                return prev + (Number(current) * Number(current))
            }, ""))
}
