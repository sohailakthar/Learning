"use strict";


const singHappyBirthday = (name) => {
    console.log("Happy Birthday,", name);
}
singHappyBirthday("Sohail");


// If we have exactly one argument to function, () are not required...
const isEven = number => number%2 === 0;
console.log(isEven(4));


const getFirstChar = str => str[0];
console.log(getFirstChar("Sohail"));


// We have 2 arguments - array and target, so () is mandatory
const findTarget = (array, target) => {
    for(let i=0; i<array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
}
const myArr = [1,2,3,4,5,6];
console.log(findTarget(myArr, 4));
console.log(findTarget(myArr, 8));