"use strict";

/*
    Falsy values:
    1. false
    2. ""  - empty string
    3. 0
    4. undefined
    5. null
*/

/*
    Truthy values: (All besides falsy values)
    1. true
    2. "abc"  - non empty string
    3. 1, -1 etc  - any number except 0
*/

let trueVar = true;
if(trueVar)
    console.log("Value is true");


trueVar = false;
if(trueVar)
    console.log("Value is true");
else
    console.log("Value is false");


trueVar = 10;
if(trueVar)
    console.log("Value is true");
else
    console.log("Value is false");


trueVar = 0;
if(trueVar)
    console.log("Value is true");
else
    console.log("Value is false");