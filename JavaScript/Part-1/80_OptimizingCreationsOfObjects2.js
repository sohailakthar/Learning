"use strict";

const userMethods = {
    details : function() {
        console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`);
    },
    isAdult : function() {
        return this.age>=18;
    }
}


function createUser(name, age, gender, mail, city) {
    const user = Object.create(userMethods);        // NOTICE that we're specify 'userMethods' as [[prototype]]
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.mail = mail;
    user.city = city;
    return user;
};
// We're not adding any methods to user... But we can access methods through [[prototype]] ie userMethods

const user1 = createUser('abc', 18, 'm', 'abc@hotmail.com', 'Hyderabad');
const user2 = createUser('xyz', 16, 'f', 'xyz@gmail.com', 'Bangalore');

console.log(user1.isAdult());   // output: true
user2.details();                // output: xyz is 16 years old and lives in Bangalore


// We've optimized the code by accessing the methods through [[prototype]] instead of giving a referce
// in the createUser function...
// Now, we can add/remove methods from userMethods without any worries to make changes in createUser()

// By using prototype property of functions, we can organize the code better as shown in file:
// 82_UsingPrototype.js