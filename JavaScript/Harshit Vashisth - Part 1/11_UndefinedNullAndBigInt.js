"use strict";

let firstName; //undefined
console.log(typeof firstName);

firstName = null;
console.log(typeof null); //object


//ways to declare a BigInt
let firstNum = BigInt(123);
let secondNum = 456n;

console.log(typeof firstNum, typeof secondNum);
//console.log(firstNum + 56);   <- Causes error. Can't perform operations on BigInt with number

console.log(Number.MAX_SAFE_INTEGER);
