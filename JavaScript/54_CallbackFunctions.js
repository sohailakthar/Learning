"use strict";


// Here, we pass function as an argument, and then call the function. Example:-
const person = {
    name: "sohail",
    gender: "m"
}

function getDetails({name}) {
    return name;
}

function outFunc(callback) {
    console.log(`Hey there, ${callback(person)}`);
}
outFunc(getDetails);