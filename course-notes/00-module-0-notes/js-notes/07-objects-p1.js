
// Objects - best used to describe or abstract a real world entity, 
// or something that has multiple attributes that may or may not be of the same data type


var personSpouse = {
    name: "Judy",
    age: 71,
    friends: ["Morty", "Joe", "Sam", "Samantha"],
    spouse: person
}

var person = {
    name: "Rick",
    age: 70,
    friends: ["Morty", "Joe", "Sam", "Samantha"],
    spouse: personSpouse,
    address: {
        street: "123 street",
        city: "Somewhere"
    }
}



// two notations for accessing an object's data

    // Dot "."
    // **similar to java method/attributes**
    // this is more common, but not necessary better than bracket

    console.log(person.name)
    console.log(person.age)
    console.log(person.friends)
    console.log(person.spouse.name)
    console.log(person.address.street)

    // Bracket "notation["StringNameOfAttribute"]" 
    // **similar to lists in R**

    console.log( person["name"])
    console.log( person["age"])
    console.log( person["address"]["city"])
    console.log( person["address"].street) // note that you can use both...




