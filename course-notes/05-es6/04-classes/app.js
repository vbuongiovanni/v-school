// typical constructor-prototype design

function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.honk = function(){
    console.log("honnk!");
}
Car.prototype.honk = function(){
    console.log("Vroom!");
}

const honda = new Car("honda", "civic")

console.log(`Make: ${honda.make}\n Model: ${honda.model}`)
honda.honk()

// ES6 classes - a more concise way of doing the above:

class Vehicle {
    constructor(make, model, honkSound){
        this.make = make;
        this.model = model;
        this.honkSound = honkSound;
    }

    honk(){
        console.log(this.honkSound);
    }
    drive(){
        console.log("Vroom");
    }
}

class Motorcycle extends Vehicle { // ties Motorcycle to the Vehicle Class.
    constructor(make, model, honkSound) { // used to add additional properties that are specific to Motorcycle
        super(make, model, honkSound); // tells Motorcycle to look at 'make, model' from the Vehicle Class. In Java, this is known as a supertype... in JavaScript, it is a Prototypal Parent
        this.type = "motorcycle";
    }
    
}

class BetterCar extends Vehicle {
    constructor(make, model, honkSound) {
        super(make, model, honkSound);
        this.type = "car";
    }
}

const harley = new Motorcycle("Harley", "Davidson", "beeep");

console.log("the harley says...")
harley.honk();

