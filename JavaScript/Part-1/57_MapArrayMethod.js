"use strict";

const numbers = [1,2,3,4,5,6,7,8,9,10];

const square = function(number) {
    return number*number;
}

// Map function takes callback func as argument, performs that func on each element of array & makes new array
// Make sure that callback func returns something, or it'll return 'undefined' by default
const squaredArray = numbers.map(square);
console.log(squaredArray);


// Make a new array consisting of firstNames of users
const users = [
    {firstName: 'Sohail', age: 20},
    {firstName: 'Shoaib', age: 22},
    {firstName: 'Faizan', age: 19},
    {firstName: 'Shah', age: 20},
    {firstName: 'Amir', age: 20}
];

const firstNames = users.map((user) => {
    return user['firstName']+":"+user['age'];
});
console.log(firstNames);