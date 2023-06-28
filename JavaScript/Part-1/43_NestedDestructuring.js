"use strict";

const users = [
    {userId: 1, firstName: 'Sohail', lastName: 'Akthar'},
    {userId: 2, firstName: 'Mohammed', lastName: 'Shah'},
    {userId: 3, firstName: 'Vikas', lastName: 'Jakkula'}
]

// Destructure the objects in array
const [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

// Get individual elements from an object inside array
const [{firstName}, , {lastName}] = users;  // Get firstName from first Obj, and lastName from third obj
console.log(firstName, lastName);

// Get the above values but with different variable-name
const[{firstName: user1FirstName, userId: user1ID}, , {lastName: user3LastName}] = users;
console.log(user1FirstName);
console.log(user1ID);
console.log(user3LastName);