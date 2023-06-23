"use strict";

// const arr = [1,2,3,4,5];

// function multiplyBy2(number, index) {
//     console.log(`At index:${index} - the number is: ${number*2}`);
// }

// arr.forEach(multiplyBy2);


// We can also write the function in forEach(Anonymous function: function with no name)
// arr.forEach(function(number) {
//     console.log(`After multiplying the element by 2: ${number*2}`);
// });



const users = [
    {firstName: 'Sohail', age: 20},
    {firstName: 'Shoaib', age: 22},
    {firstName: 'Faizan', age: 19},
    {firstName: 'Shah', age: 20},
    {firstName: 'Amir', age: 20}
];

// users.forEach(function(user, index) {
//     console.log(`User:${index+1} - First_Name:${user['firstName']}`);
// });


// We can also make use of arrow function
// users.forEach((user)=> {
//     console.log(user.firstName, user.age);
// });


// Using for-of loop:
for(let user of users) {
    console.log(user.firstName, user.age);
};