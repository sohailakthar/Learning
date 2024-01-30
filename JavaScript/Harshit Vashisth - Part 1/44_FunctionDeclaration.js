"use strict";

function isEven(number) {
    return number%2 === 0;
}

console.log(isEven(4));
console.log(isEven(3));


function singHappyBirthday(name) {
    console.log(`Happy Birthday ${name}`);
}
singHappyBirthday("sohail");


function findTarget(array, target) {
    for(let i=0; i<array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(findTarget([1, 2, 3, 4], 3));
console.log(findTarget([1, 2, 3, 4], 5));