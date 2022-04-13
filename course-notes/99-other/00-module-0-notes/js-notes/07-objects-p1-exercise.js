// EXERCISE //

// Find 2 real world things you can describe in the form of an Object.  
// Give those objects 1 of each data type (string, number, boolean, array, object)
// Practice console.log() items in those objects using both dot "." and bracket "[]" notation.

// Object 1:

var person = {
    name: "vince",
    age: 30,
    stillKicking: true,
    interests: ["skiing", "paddle boarding", "joggin"],
    pet: {
        type: "dog", 
        name: "milo", 
        ageInMonths: 4.5
    }
}

// Object 2:

var vehicle = {
    make: "toyota",
    year: 2013,
    stillRuns: true,
    features: ["four wheel drive", "four door", "heated seats"],
    owner: person
}

console.log("Vehicle Make: " + vehicle.make)
console.log("Vehicle year: " + vehicle["year"])
console.log("Vehicle is still running: " + vehicle.stillRuns)
console.log("Features include:\n\t\t" + vehicle["features"])
console.log("Owner's name" + vehicle["owner"].name)
console.log("Owner's age" + vehicle["owner"].age)
console.log("Is owner still alive?" + person.stillKicking)
console.log("Owner's interest include:\n\t\t" + person.interests)
console.log("Owner's pet:\n\t\t" + "Type: " + person["pet"].type + "\n\t\t" + "Name: " + person.pet.name + "\n\t\t" + "Age (in months): " + person.pet.ageInMonths)






