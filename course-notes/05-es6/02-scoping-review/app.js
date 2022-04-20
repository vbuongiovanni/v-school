// Why is ageRange not defined?
    // because it is a local variable scoped to the nearest braces.

// How can we fix this function with var? 
    // change all 'let' to 'var'

// How can we fix this function avoiding the use of var?
    // ageRange with let before the if statement 

// Why would you use const vs let
    // if we know that the variable doesn't need to be redeclared. this case, the function wont run w/ const because it would have to be redefined at each if statement.

    function getAgeRange(person){
        let ageRange;
        if(person.age < 18){
            ageRange = "Child"
        } else if(person.age >= 18 && person.age < 80){
            ageRange = "Adult"
        } else {
            ageRange = "Elderly Person"
        }

        return ageRange
    }


// What would the above function potentially look like if we destructured the person parameter?

    function getAgeRangeDestructured({age}){
        let ageRange;
        if(age < 18){
            ageRange = "Child"
        } else if(age >= 18 && age < 80){
            ageRange = "Adult"
        } else {
            ageRange = "Elderly Person"
        }

        return ageRange
    }

    const person = { name: "Andrea", age: 27 }
    
    // Why can we add .ageRange to person when we used const to define person?
    person.ageRange = getAgeRangeDestructured(person) 

        // because the object itself doesn't change - it isn't redeclared... it is just modified. 
        // You can do this for objects and arrays because they are called through reference rather than by value. (e.g., they are mutable)

    // change the concatented string into a template literal
    // console.log("The person.ageRange + ", person.name + ", is person.age + " years old.")
    console.log(`The ${person.ageRange}, ${person.name}, is ${person.age} years old.`)
    

    const springMonths = ["March", "April", "May"]
    const fallMonths = ["September", "October", "November"]
    // replace this line with one that uses a spread oporator to do the same thing as concat
    // const fringeMonths = springMonths.concat(fallMonths)
    // console.log(springMonths, fallMonths, fringeMonths)
    console.log(springMonths, fallMonths, [...fallMonths])

