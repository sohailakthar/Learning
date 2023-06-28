"use strict";

// __proto__ and [[prototype]] are same... [[prototype]] can be found in newer versions.
// For understanding, we can use either interchangably

// BUT, prototype is different from the above two


// __proto__ : If in a object, some field/method was not found, JS will search for it in the object's proto



// Till now, we've been creating an empty object like this:
// const user = {};


// Another way to create it is:
// const user = Object.create(SPECIFY_PROTO_HERE);

// At 'SPECIFY_PROTO_HERE' specify the object which you want as __proto__


// Let's understand with below example:
const methods = {
    add : function() {
        return this.a+this.b;
    },
    mul : function() {
        return this.a*this.b;
    }
};

const myNumbers = Object.create(methods);   // Creating empty object with 'methods' object as its __proto__
myNumbers.a = 5;
myNumbers.b = 10;
// Notice that we're not adding any methods to 'myNumbers'


console.log(myNumbers.add());       // output: 15
console.log(myNumbers.mul());       // output: 50
// As you can see, we can access the methods add() and mul() with myNumbers object.
// This is because of the proto we specified while creating myNumbers

// First the methods will be searched for in the object itself. If not found, it'll search in __proto__

// If you print myNumbers as follows, in console you can find the field =>  [[prototype]] : Object
console.log(myNumbers);
// OUTPUT:-
// {a: 5, b: 10}
//     a: 5
//     b: 10
//     [[Prototype]]: Object



// In the next file(80) we will use this [[prototype]] concept to optimize creation of objects