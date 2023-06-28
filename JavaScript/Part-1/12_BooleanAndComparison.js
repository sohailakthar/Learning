"use strict";

let five = 5;
let six = 6;
let seven = 7;

let fiveString = "5";
let sixString = "6";
let sevenString = "7";

console.log(five < six);   //true
console.log(six > seven);  //false
console.log(five == six);  //false
console.log(six <= six);   //true
console.log(seven >= five); //true


// == checks value and not datatype
// === checks both value and datatype
console.log(five == fiveString);  //true
console.log(six === sixString);         //false


// similarly, 
console.log(seven != sevenString);  //false
console.log(six !== sixString);     //true
