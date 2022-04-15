
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]

// forEach
const newArr = [];

// this is basically saying if XXXXX then do YYYYY: 
arr.forEach(num => (num % 2) === 0 && newArr.push(num))

console.log(newArr);

// find 

console.log(users.find(user => user.name[0] === "j"))

// findIndex

console.log(users.findIndex(user => user.name[0] === "j"))
