"use strict";

function demoFunc(a, b, c) {
    console.log("a is:", a);
    console.log("b is:", b);
    console.log("c is:", c);
}
demoFunc(1, 2, 3, 4, 5, 6);     // Here, 4, 5, 6 are discarded


// If we want to store rest of the arguments in some variable, we can do it like this:-
function func2(a, b, ...c) {
    console.log("a is:", a);
    console.log("b is:", b);
    console.log("c is:", c);
}
func2(1, 2, 3, 4, 5, 6);


// Another example: Pass any number of arguments(numbers) and get the sum of them all
function addAll(...arr) {
    let sum = 0;
    for(let item of arr) {
        sum += item;
    }
    return sum;
}
console.log(addAll(1,2,3,4,5,6,7,8,9,10));  // We can pass as many args as we wish