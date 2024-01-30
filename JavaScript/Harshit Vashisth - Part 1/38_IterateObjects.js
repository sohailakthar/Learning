"use strict";

const person = {
    name : "sohail",
    age : 20,
    hobbies : ["coding", "sleeping"]
}


// Using For In Loop
for(let key in person) {
    console.log(key, ":", person[key]);
}


// Using Object.keys
console.log(Object.keys(person));   // Returns an array of keys

for(let key of Object.keys(person)) {
    console.log(key, ":", person[key]);
}