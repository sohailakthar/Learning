"use strict";

let array1 = [1, 2, 3];
console.log(array1);

// Using slice
let array2 = array1.slice(0);
console.log(array2);

// Using concat
let array3 = [].concat(array1);
console.log(array3);

// Using spread operator
let array4 = [...array1];
console.log(array4);

let array5 = [...array1, 5, 9];
console.log(array5);

let array6 = [...array1, ...array5];
console.log(array6);