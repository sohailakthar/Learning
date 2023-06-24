"use strict";

// Last time, we used the following approach to create objects:- (till line 21)
// const CreateUser = function(name, age, gender, mail, city) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.mail = mail;
//     this.city = city;
// };

// CreateUser.prototype.details = function() {
//     console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`);
// }

// CreateUser.prototype.isAdult = function() {
//     return this.age >= 18;
// }

// const user1 = new CreateUser('abc', 29, 'm', 'abc@hotmail.com', 'Hyderabad');
// const user2 = new CreateUser('xyz', 16, 'f', 'xyz@gmail.com', 'Bangalore');



// Now, let's use the class keyword to implement the above code
class CreateUser {
    constructor(name, age, gender, mail, city) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.mail = mail;
        this.city = city;
    }

    details() {
        console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`);
    }

    isAdult() {
        return this.age >= 18;
    }
}

const user1 = new CreateUser('abc', 28, 'm', 'abc@hotmail.com', 'Hyderabad');
const user2 = new CreateUser('xyz', 16, 'f', 'xyz@gmail.com', 'Bangalore');

console.log(user1.isAdult());       // output: true
user2.details();                    // output: xyz is 16 years old and lives in Bangalore



// As we can see, creating objects is easier with class