"use strict";

const key1 = "myKey1";
const key2 = "myKey2";

const value1 = "myValue1";
const value2 = "myValue2";


// Standard approach:-
// const obj = {};      // Creating an empty object 'obj'
// obj[key1] = value1;
// obj[key2] = value2;


// Using Computed Properties:-
const obj = {
    [key1] : value1,
    [key2] : value2
}


console.log(obj);