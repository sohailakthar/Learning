"use strict";

// We use this with parameters of type object
// Used a lot in react

const person = {
    firstName : "Sohail",
    gender : "male"
}


// Normal approach
function printDetails(obj) {
    console.log(obj.firstName);
    console.log(obj.gender);
}
printDetails(person);


// Destructuring the object in function argument
function printDetails2({firstName, gender}) {
    console.log(firstName);
    console.log(gender);
}
printDetails2(person);


// Let's try passing in an argument which doesn't exist in the obj(it'll be taken as undefined)
const printDetails3 = ({firstName: fname, gender: sex, age}) => {
    console.log(fname);
    console.log(sex);
    console.log(age);
}
printDetails3(person);