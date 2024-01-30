"use strict";

// An array of objects
const users = [
    {userId: 1, firstName: 'Sohail', lastName: 'Akthar'},
    {userId: 2, firstName: 'Mohammed', lastName: 'Shah'},
    {userId: 3, firstName: 'Vikas', lastName: 'Jakkula'}
]

console.log(users[0]);  // Print an individual item
console.log(users);     // Print complete array

// Using for-of loop to iterate
for(let user of users) {
    console.log(user);
}

for(let user of users) {
    console.log(user.userId, user.firstName);   // Print selective elements while iterating
}