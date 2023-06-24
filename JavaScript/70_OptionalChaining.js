"use strict";

const user = {
    name: "xyz",
    // address: {hno: '4-234', street: 7, city: 'Hyd'}
}


// console.log(user.name);             // output: xyz
// console.log(user.address.city);     //output: Hyd

// Now, we comment out the address property from user and try to log 'city' again
// console.log(user.address.city); 
// This causes:- Uncaught TypeError: Cannot read properties of undefined (reading 'city')
// Because user.address returns 'undefined' and we're trying undefined.city


// We can overcome this by using optional chaining i.e ->   ?.  instead of  .
console.log(user?.address?.city);       // output: undefined
// Now, instead of an error, we get an output - 'undefined'

// user?.address?.city  ->  If user exists(?) go further(.) or else return undefined, similarly if user.address
// exists(?) go further(.) or else return undefined.


// This way we can avoid Uncaught TypeError 