"use strict";

let age = 20;
let firstName = "Sohail";

// Print: "My name is Sohail and my age is 20"

let method1 = "My name is " +firstName+ " and my age is " +age;
console.log("Using method-1: " +method1);

let method2 = `My name is ${firstName} and my age is ${age}`;
console.log("Using method-2: " +method2);