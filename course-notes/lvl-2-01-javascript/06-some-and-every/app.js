
const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]
const namesNoSteve = ["Jack", "John", "Jill", "Joseph", "Jackie"]


console.log(names.some(name => name[0] === "S"))

console.log(names.every(name => name[0] === "J"))
console.log(namesNoSteve.every(name => name[0] === "J"))

