"use strict";

// Iterables: Objects like on which we can iterate using a for-of loop
// What are Array-like objects? - Object having length property and can be accessed with indices
// Ex: Strings, Arrays etc

const name = "Sohail";
for(let character of name) {
    console.log(character);     // Prints individual characters
}


const myArr = [23, 3, 54];
for(let number of myArr) {
    console.log(number);        // Prints each element from myArr
}


// NOTE: Objects(key, value) are not iterable
const user = {
    name: "sohail",
    age: 20
}

// for(let user1 of user) {
//     console.log(user1);      // Causes TypeError: user is not iterable
// }