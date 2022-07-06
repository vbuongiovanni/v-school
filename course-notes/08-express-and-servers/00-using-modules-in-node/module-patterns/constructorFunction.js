const User = function(name, age, weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
}
module.exports = User;