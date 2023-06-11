"use strict";

// STRINGS ARE IMMUTABLE. SO ALL METHODS RETURN A NEW STRING.

/*
    1. trim() : removes extra whitespaces from front and end
    2. toUpperCase()
    3. toLowerCase()
    4. slice() : get a substring
*/

let myName = "  Sohail Akthar  ";
console.log("Original: "+myName);
console.log(myName.length);

// 1. Removing extra whitespaces using trim()
myName = myName.trim();
console.log("trim(): "+myName);
console.log(myName.length);

// 2. toUpperCase()
myName = myName.toUpperCase();
console.log("toUpperCase(): "+myName);

// 3. toLowerCase()
myName = myName.toLowerCase();
console.log("toLowerCase(): "+myName);

// 4. slice(start_index, end_index)
myName = myName.slice(0, 6);
console.log("slice(): "+myName);
