"use strict";

// Difference between Dot and Bracket notation
const person = {
    name : "sohail",
    age : 20,
    gender : "male",
    "my hobbies" : ["sleeping", "coding"]
}


// We'll get an error if we try to access 'my hobbies' using dot notation (variable name can't have spaces)
// console.log(person.my hobbies);

// But we can print it using bracket notation
console.log(person["my hobbies"]);


// Let's try inserting a new field called 'email'
let key = "email";      // This is name of the key
//person.key = "sohailakther@gmail.com"       //Will store this pair but key-name will be 'key' itself and not 'email'
// person["key"] = "sohailakther@gmail.com"      //Same mistake. Key-name will be 'key' and not 'email'
person[key] = "sohailakther@gmail.com"      // This is correct
console.log(person);