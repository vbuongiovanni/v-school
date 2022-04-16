// Using the provided `peopleArray` (bottom of this article), write a function that:
// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.

let peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
   return arr.sort((a, b) => a.lastName.localeCompare(b.lastName))
        .filter(person => person.age >= 18)
        .reduce((final, person) => {
            final.push(`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`);
            return final;
        }, [])
}

console.log(sortedOfAge(peopleArray));

/*
Output:
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
*/

// # **Extra Credit**
// - Create another array of one or more individuals and add it to the original array.
let morePeople = [
    {
        firstName: "Joe",
        lastName: "Smitha",
        age: 55
    },
    {
        firstName: "Paulie",
        lastName: "Looney",
        age: 25
    }
]
morePeople.forEach(person => peopleArray.push(person));

// - Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
function filterOutYandA(arr){
    return arr.filter(person => {
        let finalChar = person.lastName[person.lastName.length - 1];
        return finalChar === "y" | finalChar === "a";
    });
}

const newArray = filterOutYandA(peopleArray);

console.log(newArray);

// - Remove the second individual from the array.
newArray.splice(1, 1);
console.log(newArray)

// - Return the array in reverse order
console.log(newArray.reverse());

