"use strict";

// new keyword does the following three:
// 1. Creates an empty object.. and makes it 'this'
// 2. Returns 'this' i.e the created object
// 3. Does the work of following statement: Object.create([[prototype]]));
//    i.e assigns prototype to the created object



// Let's see an example:
// const createCar = function(brand) {
//     const car = Object.create(createCar.prototype);
//     car.brand = brand;
//     return car;
// }

// createCar.prototype.throttle = function() {return "vroom vroom..."};

// const car1 = createCar('BMW');
// console.log(car1.throttle());       // output: vroom vroom...



// To let other developers know that certain function requires the use of 'new' keyword, we capitalize
// the function name

// We can rewrite the above commented code as:-
// const CreateCar = function(brand) {       // Note that we capitalized 'C'reateCar... Just a convention(read line 25-26)
//     this.brand = brand;     // Instead of CreateCar.brand, we can write this.brand because new sets 'this' to the object
// }                           // Note that we didn't return anything. new keyword handles that too.

// CreateCar.prototype.throttle = () => "vroom vroom...";

// const car1 = new CreateCar('BMW');
// console.log(car1.throttle());       // output: vroom vroom...

// We've wrote a much cleaner code with the help of 'new' keyword.





// Let's apply this concept to our 'createUser' object creation

// Functions as this one are called as 'Constructor functions'
const CreateUser = function(name, age, gender, mail, city) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.mail = mail;
    this.city = city;
};

CreateUser.prototype.details = function() {
    console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`);
}

CreateUser.prototype.isAdult = function() {
    return this.age >= 18;
}

const user1 = new CreateUser('abc', 29, 'm', 'abc@hotmail.com', 'Hyderabad');
const user2 = new CreateUser('xyz', 16, 'f', 'xyz@gmail.com', 'Bangalore');

user1.details();                // output: abc is 29 years old and lives in Hyderabad
console.log(user2.isAdult());   // output: false
