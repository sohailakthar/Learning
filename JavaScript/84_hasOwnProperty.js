"use strict";

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



// Let's try printing the keys of user1
// for(let key in user1) {
//     console.log(key);
// }

// output: name, age, gender, mail, city, details, isAdult
// As you can see, it displays the keys from [[prototype]] as well..


// If you want to print the keys of just the object itself:
for(let key in user1) {
    if(user1.hasOwnProperty(key))
        console.log(key);
}

// output: name, age, gender, mail, city