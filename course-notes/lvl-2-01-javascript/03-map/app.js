// .map
//  returns an array of equal length to the source array
//  can be used to apply a function to every element in array
// in a way, this is just a substitute for a for-loop.

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.map(number => number * 100))

// objects are treated just like how you would expect:

const team = [
    {name : "pete"},
    {name : "david"},
    {name : "julie"}
]

console.log(team.map(teamMember => teamMember.name))
