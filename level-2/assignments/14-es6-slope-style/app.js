// Green

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

const collectAnimals = (...animals) => animals;

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


// Write a function that returns a food object with the array names as properties. 
// You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

const combineFruit = (fruit, sweets, vegetables) => {
    return {fruit, sweets, vegetables};
};

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

// {
// fruit: ["apple", "pear"],
// sweets: ["cake", "pie"],
// vegetables: ["carrot"]
// }



// Use destructuring to use the property names as variables. Desructure the object in the parameter:

function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence({
  location: "Burly Idaho",
  duration: "2 weeks"
}));


// Use array destructuring to make this code ES6:

const returnFirst = (items) => {
    const [firstItem] = items; // change this line
    return firstItem
}
        
    console.log(returnFirst(["very important", "skip", "important"]))

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities));



// blue

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
// You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals( ...animalArrays) {
    const arrays = animalArrays.reduce((final, animalArray) => {
        final = final.concat(...animalArray);
        return final;
    }, [])
    return arrays;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]
// slight deviation... but my function takes any number of animal arrays:
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, realAnimals, magicalAnimals, mysteriousAnimals, realAnimals, magicalAnimals, mysteriousAnimals));



// black

// Try to make the following function more ES6y:

const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1)

console.log(product(2, 2, 2))


// Make the following function more ES6y. Use at least both the rest and spread operators:

const unshift = (array, ...other) => [...array, ...other]

console.log(unshift([1, 2, 3, 4], 5, 6, 7, 8, 9))


// double black?

// Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

const populatePeople = (names) => {
    return names.map((name) => {
        const [firstName, lastName] = name.split(" ");
        return {firstName, lastName}
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
