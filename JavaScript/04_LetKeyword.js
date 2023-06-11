"use strict";

//let keyword doesn't allow to declare a new variable with existing variable name
let firstName = "Sohail";
//let firstName = "Shoaib";   <- This causes an error
console.log(firstName);

//var keyword allows the above thing.
var lastName = "Akthar";
var lastName = "Malik";
console.log(lastName);


// Main difference is block scope vs function scope