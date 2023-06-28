"use strict";

// Function Expression - Storing function in a variable

const isEven = function (number) {
    return number%2 === 0;
}

console.log(isEven(4));
console.log(isEven(3));


const singHappyBirthday = function(name) {
    console.log(`Happy Birthday ${name}`);
}
singHappyBirthday("sohail");


const findTarget = function(array, target) {
    for(let i=0; i<array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(findTarget([1, 2, 3, 4], 3));
console.log(findTarget([1, 2, 3, 4], 5));