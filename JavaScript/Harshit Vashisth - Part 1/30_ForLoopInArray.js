"use strict";

let fruits = ["apple", "banana", "grapes", "mango"]

let fruits2 = [];
for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
    fruits2[i] = fruits[i].toUpperCase();
}

console.log(fruits2);

for(let i=fruits.length-1; i>=0; i--) {
    console.log(fruits[i]);
}