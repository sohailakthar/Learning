"use strict";

// We normally create objects with a function inside, like this:
// const user = {
//     name: 'abc',
//     age: 20,
//     about: function() {
//         console.log(`${this.name} is ${this.age} years old`);
//     }
// }

// user.about();   // output: abc is 20 years old



// Instead of specifying key as 'about' for the property in object, we can shortly write it as follows:-
const user = {
    name: 'abc',
    age: 20,
    about() {       // Notice the change here
        console.log(`${this.name} is ${this.age} years old`);
    }
}

user.about();   // output: abc is 20 years old