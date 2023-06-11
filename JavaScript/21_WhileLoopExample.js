"use strict";

//Sum of first n natural numbers
let num = 100;
let n = num;
let sum = 0;

while(n > 0) {
    sum += n;
    n--;
}

console.log(sum);


// Using formula
let total = (num*(num+1))/2;
console.log(total);