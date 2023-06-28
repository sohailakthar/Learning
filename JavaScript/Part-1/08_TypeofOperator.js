"use strict";

let age = 20;
let firstName = "Sohail";

console.log(typeof age);
console.log(typeof firstName);

//number to string (method-1)
age = age + "";
console.log("typeof(age): "+typeof age);

//string to number (method-1)
age = +age;
console.log("typeof(age): "+typeof age);

//number to string (method-2)
age = String(age);
console.log("typeof(age): "+typeof age);

//string to number (method-2)
age = Number(age);
console.log("typeof(age): "+typeof age);