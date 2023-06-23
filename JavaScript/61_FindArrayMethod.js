"use strict";

// Let's try to find element with length 3
const animals = ['giraffe', 'horse', 'cat', 'donkey', 'dog'];

// function findAnimalWithLength3(animal) {
//     return animal.length===3;
// }

// console.log(animals.find(findAnimalWithLength3));   // output: cat
// It only returns the first matched occurence, therefore doesn't print 'dog' with 'cat'


// Writing the arrow function in short form as it has only one line(return statement)
const foundElement = animals.find((animal)=>animal.length===3);
console.log(foundElement);



// Let's apply this to find a certain user from the users list
const users = [
    {userId:1, userName:"Sohail", userAge:20},
    {userId:2, userName:"Faizan", userAge:19},
    {userId:3, userName:"Shoaib", userAge:22},
    {userId:4, userName:"Amir", userAge:20},
    {userId:5, userName:"Shah", userAge:20},
];

const foundUser = users.find(user=>user.userAge===22);  // Returns the first user with age 22
console.log(foundUser);