"use strict";

// Before default parameters, we had to use this approach:-
function add(a, b) {
    // If b parameter is absent when function is called, by default it'll be 'undefined'
    if(b === undefined) {
        b = 0;      // If b is undefined, use b=0 as default value.
    }
    return a+b;
}

console.log(add(4, 5));     // <- output: 9
console.log(add(5));        // <- output: 5 (5+0)



// By using default parameters, we can write the following code:-
function addition(a=0, b=0) {       // Here, default value is set to 0
    return a+b;
}

console.log(addition(5, 5));    // <- output: 10
console.log(addition(9));       // <- output: 9 (9+0)
console.log(addition());        // <- output: 0 (0+0)



// Another example:
const singHappyBirthday = function(name="to you.") {
    console.log(`Happy Birthday ${name}`);
}
singHappyBirthday();        // <- output: Happy Birthday to you.
singHappyBirthday("Sohail");    // <- output: Happy Birthday Sohail