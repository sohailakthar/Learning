"use strict";

function outsideFunc() {
    return function() {
        console.log("Inside returned function");
    };
}

const returnedFunc = outsideFunc();
returnedFunc();



function anotherFunc() {
    function insideAnotherFunc() {
        return "Hey there!";
    }
    return insideAnotherFunc();
}
const someString = anotherFunc();
console.log(someString);


// Such type of functions + callback functions are called as higher-order functions.