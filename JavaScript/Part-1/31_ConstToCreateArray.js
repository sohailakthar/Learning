"use strict";

let array1 = [1, 2, 3];
array1 = [4];   //works fine with 'let'
console.log(array1);



const array2 = [4, 5, 6];
//array2 = [];   <- This causes an error as we're trying to assign new address to array with []
console.log(array2);

array2.push(7, 9, 45);   //push and pop works fine
console.log(array2);


//PREFER TO USE CONST WHILE CREATING ARRAYS