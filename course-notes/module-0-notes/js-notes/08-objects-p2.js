
// Objects, part 2 - modifying existing objects and methods

// Attributes capture 

var car = {
    type: "Honda",
    make: "Civic",
    wheels: 4,
    specialHonkSound: "Bleerrrp",
    honk: function(){
        console.log("HONNNK!") // since this function resides within an object, it is known as a method.
    },
    specialHonk: function(){
        console.log(this.specialHonkSound) // same as Java, "this" can be used to call an attribute within the object itself
    }
}

// Can use dot and bracket notation to add new/modify attributes

car.hasHadAccident = true
console.log(car)

// calling method:
car.honk()

// calling special method, that uses the special honk sounds
car.specialHonk()


// How are objects and arrays referenced?
    // Passed by reference (same as java)

// example - this does not create an entirely new object:
var otherCar = car
otherCar.make = "jeep"
// instead, this just creates two variables that point to the same element in memory:
console.log("otherCar's make is:" + otherCar.make)
console.log("cars's make is:" + car.make)




