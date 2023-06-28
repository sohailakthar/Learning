"use strict";

// As we know, we can use methods with arrays
const arr = [1,2,3];
console.log(arr.length);

// If we print the arr, we can find that there's no such method in the array we created
// then how can we access these methods??
// The answer is, from the [[prototype]]
// You may wonder that we didn't use new keyword or Object.create
// The answer is, JS does it internally... We use short syntax to create arrays, but arrays can be created as:
const newArr = new Array();

// We can use the Object.getPrototypeOf(OBJECT_NAME_HERE) to get the prototype of specified object
console.log(Object.getPrototypeOf(newArr));     //output: [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]


// If we log Array.prototype, we can find all the array methods there
console.log(Array.prototype);   // output: [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(Array.isArray(Array.prototype));    // output: true

// If you notice, the prototype is of type array i.e []
// That is because, we can change the type of prototype.



// Let's create a function, check typeof its prototype and then change its type
const func = function() {
    console.log("hello world");
}

console.log(Array.isArray(func.prototype));     // output: false

func.prototype = [];    // Initializing it to an empty array

console.log(Array.isArray(func.prototype));     // output: true