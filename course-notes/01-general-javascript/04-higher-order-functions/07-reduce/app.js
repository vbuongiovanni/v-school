// arry.reduce(function(final, current){}, initialValueOfFinal)
    // common convention - 'final' is what is returned from .reduce() while 'current' represents each individual element. 'current' should be changed to a meaningful name
    // second argument is optional. if left as default or not specified, 'final' is initialized as the first element in the array.
    // Whatever is returned at the end of each element's iteration becomes the new value of 'final' for the next iteration. If there aren't any other iterations, the value is returned.

const arr = [1, 2, 3, 4, 5];

// use case 1 - reduce array of numbers into a sum of all numbers
const result1 = arr.reduce((final, current) => final += current, 0)

console.log(result1)

arr.reduce((final, current) => { 
    console.log(`Starting final value: ${final}`);
    final += current;
    console.log(`current: ${current}`);
    console.log(`Ending final value: ${final}`);
    return final;
})

// use case 2 - reduce users into an array of strings of the user's first and last names.
const users = [
    { fName: "joe", lName: "smithy" },
    { fName: "tina", lName: "johnson" },
    { fName: "rick", lName: "sanchez" }
]

const result2 = users.reduce((final, users) => {
    final.push(`${users.fName} ${users.lName}`);
    return final;
}, [])
console.log(result2);


// 3 - reduce the array into a count of how many people voted
const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]

const result3 = voters.reduce((final, voter) => final += voter.voted === true ? 1 : 0, 0)

console.log(result3)

// 4 - return an object that has a count of voted and note voted

const result4 = voters.reduce((final, voter) => {
    if (voter.voted === true) {
        final.didVote += 1;
    } else {
        final.didntVote += 1;
    }
    return final;
}, {didVote : 0, didntVote : 0})

console.log(result4);
