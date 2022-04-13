// Create an object with one of each data type including at least 1 method.
// Call the method to make it execute.
    // The method must use the keyword "this" to reference some part of the object.
    

var pet = {
    species: "canine",
    name: "milo",
    likesPeanutButter: true,
    ageMonths: 4,
    interests: ["eating", "stealing socks", "biting me", "sleeping"],
    sound: "woof!",
    makeSound: function () {
        console.log(this.sound)
    }

}

pet.makeSound()
