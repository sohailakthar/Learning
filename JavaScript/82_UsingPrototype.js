"use strict";

// In 80_OptimizingCreationsOfObjects2.js we used __proto__ and made the code concise

// In 81_FunctionsAndPrototype.js we have seen that functions provide as object to use in prototype property

// Now, we will use the prototype property of function to store the methods(details() and isAdult())
// instead of using a separate object - userMethods.


const createUser = function(name, age, gender, mail, city) {
    const user = Object.create(createUser.prototype);
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.mail = mail;
    user.city = city;
    return user;
}


createUser.prototype.details = function() {
    console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`);
}

createUser.prototype.isAdult = function() {
    return this.age>=18;
}

console.log(createUser.prototype);      // output: {details: ƒ, isAdult: ƒ, constructor: ƒ}



// Let's create some users and check if we can use the methods
const user1 = createUser('abc', 17, 'm', 'abc@hotmail.com', 'Hyderabad');
const user2 = createUser('xyz', 22, 'f', 'xyz@gmail.com', 'Bangalore');

console.log(user1.isAdult());   // output: false
user2.details();                // output: xyz is 22 years old and lives in Bangalore


// As we can see, we can access the methods and everything is working fine.
// Also, the methods are now somewhat indirectly part of the same function that creates user objects
