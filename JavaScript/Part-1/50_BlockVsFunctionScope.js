"use strict";

// let and const are block scope  i.e variable defined using these is accessible only in that block
// var is function scope        i.e variable defined using var is accessible throughout file

function myApp() {
    if(true) {
        let letVar = "This was created using 'let'";
        const constVar = "This was created using 'const'";
        var varVar = "This was created using 'var'";

        console.log("Inside if block:-");
        console.log(letVar);
        console.log(constVar);
        console.log(varVar);
    }

    console.log("\n");
    console.log("Outside if block:-");
    // console.log(letVar);     // <- causes uncaught reference: letVar is not defined
    // console.log(constVar);   // <- causes uncaught reference: constVar is not defined
    console.log(varVar);        // <- This works fine... can access variable defined by var, outside block
}

// console.log(varVar);     // <- causes uncaught reference: varVar is not defined
myApp();