"use strict";

// call(): With the call() method, you can write a method that can be used on different objects.
// functionName.call(this)  <-  this refers to the object on which you want to invoke the function.

function ageAfter10Years() {
    console.log(`Age of ${this.name} after 10 years will be: ${this.age+10}`);
}

const user1 = {
    name: "abc",
    age: 16
}
const user2 = {
    name: "xyz",
    age: 21
}

ageAfter10Years.call(user1);        // output: Age of abc after 10 years will be: 26
ageAfter10Years.call(user2);        // output: Age of xyz after 10 years will be: 31

// Here, we're calling the function ageAfter10Years with user1 as calling object in line19 and user2 as
// calling object in line20



// We can also pass additional arguments to the function like this:
function printHobbyOfUser(hobby1, hobby2, hobby3) {
    console.log(`Hobby of ${this.name} are ${hobby1}, ${hobby2}, ${hobby3}`);
}

printHobbyOfUser.call(user1, "singing", "dancing", "guitar");    // Hobby of abc is singing, dancing, guitar



// *************** APPLY() ***************
// apply(): Similar to call() with the difference, apply() method accepts arguments in an array
printHobbyOfUser.apply(user1, ["singing", "dancing", "guitar"]);  // Hobby of abc are singing, dancing, guitar



// *************** BIND() ***************
// Sometimes the bind() method has to be used to prevent losing this.
// When a function is used as a callback, this is lost.
const bindFunc = ageAfter10Years.bind(user1);
bindFunc();     // Age of abc after 10 years will be: 26