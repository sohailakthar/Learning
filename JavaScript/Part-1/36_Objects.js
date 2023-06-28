"use strict";

//Objects are reference type
// Objects are good but not sufficient for real world data
// Objects store key-value pairs
// Objects don't have index

// How to create objects:
const person = {
    name: "sohail",
    age: 20
}

// How to access/modify data from objects
console.log(person.name);       // Using dot notation
console.log(person["age"]);     // Using bracket notation (keys by default are of type String)
// Modifying name
person.name = "akthar";
console.log(person.name);

// How to add key-value pairs to objects
person.gender = "male";
person["hobbies"] = ["coding", "walking"];
console.log(person);


// Multiple same keys - Only the latest key will remain i.e the value for key will be updated
const obj = {
    key1 : "value1",
    key2 : "value2",
    key1 : "value3"
}
console.log(obj);    // key1 will be unique with the latest value i.e value3