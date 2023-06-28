"use strict";

const printDetails  = function() {
    console.log(`Username is: ${this.name} and age is: ${this.age}`);   // 'this' is the object which called the function
}

const person1 = {
    name: 'abc',
    age: 17,
    about: printDetails     // Notice that it is printDetails and not printDetails()
};
const person2 = {
    name: 'pqr',
    age: 18,
    about: printDetails
};
const person3 = {
    name: 'xyz',
    age: 21,
    about: printDetails
};

person1.about();        // output: Username is: abc and age is: 17
person2.about();        // output: Username is: pqr and age is: 18
person3.about();        // output: Username is: xyz and age is: 21
