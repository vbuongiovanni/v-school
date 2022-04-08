// constructor function:

// can be used using the 'new' to instantiates the object

// note that the first letter is capitalized
function Car(make, model, year, honkSound) { 
    this.make = make;
    this.model = model;
    this.year = year;
    this.honkSound = honkSound;
    this.honk = function(){console.log(this.honkSound + "!")}
}

let jeep = new Car("Jeep", "Cherokee", 1995, "BEEP");
console.log(jeep)
jeep.honk()
let honda = new Car("Honda", "Accord", 2019, "MEEP");
console.log(honda)
honda.honk()

