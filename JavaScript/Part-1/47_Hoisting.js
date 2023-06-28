"use strict";

//console.log(myVar);       // Error: Cannot access myVar before initialization.
let myVar = "Hello";
console.log(myVar);         // Works fine after initialization


// Similarly, with FunctionExpression and ArrowFunctions

// console.log(isEven(5));   // Error: Cannot access 'isEven' before initialization.
// const isEven = function(number) {
//     return number%2 === 0;
// }



// console.log(isEven(5));     // Error: Cannot access 'isEven' before initialization.
// const isEven = number => number%2 === 0;


// BUT, IT WORKS FINE WITH STANDARD FUNCTION DECLARATION:
console.log(isEven(5));

function isEven(number) {
    return number%2 === 0;
}

