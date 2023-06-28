"use strict";

// Function can act like both, a function(obv) and also an object
// Function has some properties and their values, imagine it like a key, value pair

// 1. func.name  - returns name of the func
function hello() {
    console.log("Hello World");
}

console.log(hello.name);        // output: hello

// We can also add our own properties to the function:
hello.key1 = "value1";
console.log(hello.key1);        // output: value1

// We can also add a property with 'function' as its value:
hello.sing = function() {return "lalalala"};
console.log(hello.sing);        // output: ƒ () {return "lalalala"}
console.log(hello.sing());        // output: lalalala



// ****************** PROTOTYPE ******************
// This is different from __proto__ or [[prototype]]
// Prototype in case of functions is a property, which gives us an empty object(only constructor)

console.log(hello.prototype);       // output: {constructor: ƒ}     <-- By default contains a constructor of itself

// Let's try adding some key, values of our own to the prototype of hello function
hello.prototype.key1 = "value1";
hello.prototype.key2 = function() { return "hello world"; };

console.log(hello.prototype);           // output: {key1: 'value1', key2: ƒ, constructor: ƒ}
console.log(hello.prototype.key1);      // output: value1
console.log(hello.prototype.key2());    // output: hello world


// The prototype property is only present for functions and not for anything else. Let's check
const functionCheck = function() {return "yo"};
const arrayCheck = [1,2,3,4];
const objectCheck = {key1:'value1', key2:'value2'};

function containsPrototype(arg) {
    if(arg.prototype) {
        return true;
    } else {
        return false;
    }
}

console.log('For function:', containsPrototype(functionCheck));     // output: true
console.log('For array:', containsPrototype(arrayCheck));           // output: false
console.log('For object:', containsPrototype(objectCheck));         // output: false