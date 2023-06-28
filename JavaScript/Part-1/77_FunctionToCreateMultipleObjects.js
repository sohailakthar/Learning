"use strict";

// Till now, we've followed the following approach to create multiple users
// const user1 = {
//     name: 'abc',
//     age: 20
// }

// const user2 = {
//     name: 'xyz',
//     age: 18
// }

// This would become hectic if the object has lots of properties and/or there are lots of objects


// So, we will now create a function, which will create an object for us with specified arguments.
function createUser(name, age, gender, mail, city) {
    const user = {};    // Creating an empty object, and later we'll add the fields
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.mail = mail;
    user.city = city;
    //The object will also have 2 methods, let's say:
    user.details = function() {
        console.log(`${user.name} is ${user.age} years old, and lives in ${user.city}`);
    }
    user.isAdult = function() {
        return user.age>=18;
    }
    return user;
}

// Now, we can call the function createUser() and save the returned object in a variable/const
const user1 = createUser('abc', 17, 'm', 'abc@hotmail.com', 'Hyderabad');
const user2 = createUser('pqr', 20, 'f', 'pqr@gmail.com', 'Bangalore');
const user3 = createUser('xyz', 22, 'm', 'xyz@hotmail.com', 'Jaipur');


// Let's call some methods and check if it's working fine
console.log("Is user1 adult? :", user1.isAdult());      // output: Is user1 adult? : false
user2.details();        // output: pqr is 20 years old, and lives in Bangalore
user3.details();        // output: xyz is 22 years old, and lives in Jaipur


// As we can see, it's working fine... 
// BUT, there is redundancy of the function user.details() & user.isAdult() in every object created
// even though the method is completely same.
// Let's see how we can solve this in next file i.e 78_OptimizingCreationOfObjects.js
