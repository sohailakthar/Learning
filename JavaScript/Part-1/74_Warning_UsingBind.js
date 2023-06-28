"use strict";

function printDetails() {
    console.log(this.name, this.age);
}

const user = {
    name: 'abc',
    age: 20,
    about: printDetails
}


// Cannot store it like this:
// const storingFunc = user.about;
// storingFunc();   // output: undefined
// This is because, when stored and then called, 'this' will refer to 'window' object which has no name, age properties


// Instead use bind()
const storingFunc = user.about.bind(user);
storingFunc();      // output: abc 20