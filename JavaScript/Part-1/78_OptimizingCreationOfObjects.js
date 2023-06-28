// "use strict";

// In the previous file, we created a function that would return a new object with specified arguments
// But the methods were redundant i.e each time a new object was created, the functions were also
// created along with the object... This would waste significant amount of space

// So, we're now going to create a separate object which consists only of the methods

const userMethods = {
    details : function() {
        console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`);
    },
    isAdult : function() {
        return this.age>=18;
    }
};

function createUser(name, age, gender, mail, city) {
    const user = {};
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.mail = mail;
    user.city = city;
    user.details = userMethods.details;
    user.isAdult = userMethods.isAdult;
    return user;
}

const user1 = createUser('abc', 20, 'm', 'abc@hotmail.com', 'Hyderabad');
const user2 = createUser('xyz', 22, 'f', 'xyz@gmail.com', 'Bangalore');

console.log(user1.isAdult());       // output: true
user2.details();                    // output: xyz is 22 years old and lives in Bangalore

// Notice how the methods are specified now.
// We're giving the reference of the functions from 'userMethods' object to the 'user' object
// Hence, the methods are not going to be created anew, rather being referenced to methods in userMethods
// No matter how many new user objects you create, the methods will only exist in userMethods
// This helps in easier refactoring of code, better space usage

// BUT... there are still improvements to be made
// For ex: If userMethods had hundreds of methods inside, we'll have to specify the reference for all 
// those in the createUser function
// We'll see how to optimize the code further in 80_OptimizingCreationOfObjects2.js but before that
// we need to understand the concept of __proto__ explained in next file 79_ProtoAndObjectCreate.js