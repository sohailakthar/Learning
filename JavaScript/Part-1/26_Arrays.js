"use strict";

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

fruits[1] = "banana";
console.log(fruits);

console.log(typeof fruits);
console.log(Array.isArray(fruits));   //true

let demo = {} //object type
console.log(Array.isArray(demo));     //false



let mixed = [1, 3.5, "Sohail", undefined, null];   //allowed and valid
console.log(mixed);