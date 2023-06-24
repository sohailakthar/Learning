"use strict";

// Let's try to clone obj1 into obj2 the following way:
const obj1 = {
    name: "xyz",
    age:20
};

// const obj2 = obj1;      // This will cause obj2 to point to same object-obj1

// console.log(obj1);      // output: {name: 'xyz', age: 20}
// console.log(obj2);      // output: {name: 'xyz', age: 20}

// obj1.gender = "male";   // Adding a new field 'gender' in obj1

// console.log(obj1);      // output: {name: 'xyz', age: 20, gender: 'male'}
// console.log(obj2);      // output: {name: 'xyz', age: 20, gender: 'male'}

// As we can see, the addition of field-gender was also reflected in obj2.



// One way to correctly clone objects is using the spread operator:-
// const obj2 = {...obj1};

// console.log(obj1);      // output: {name: 'xyz', age: 20}
// console.log(obj2);      // output: {name: 'xyz', age: 20}

// obj1.gender = "male";   // Adding a new field 'gender' in obj1

// console.log(obj1);      // output: {name: 'xyz', age: 20, gender: 'male'}
// console.log(obj2);      // output: {name: 'xyz', age: 20}
// Now, the change was made only in obj1... Therefore, obj1 & obj2 are different objects



// Another way to clone objects is, using the Object.assign() method
const obj2 = Object.assign({}, obj1);       // <- If you forget empty {}, it'll work like obj2=obj1

console.log(obj1);      // output: {name: 'xyz', age: 20}
console.log(obj2);      // output: {name: 'xyz', age: 20}

obj1.gender = "male";   // Adding a new field 'gender' in obj1

console.log(obj1);      // output: {name: 'xyz', age: 20, gender: 'male'}
console.log(obj2);      // output: {name: 'xyz', age: 20}




// Trying Object.assign with Arrays
const originalArray = [2, 4, 5, 7];

const clonedArray = Object.assign([], originalArray);       // <- Notice that we used '[]'
// const clonedArray = [...originalArray];          // <- Can also use spread operator to clone

console.log(originalArray);     // output: [2, 4, 5, 7]
console.log(clonedArray);       // output: [2, 4, 5, 7]

originalArray.push(8);          // Adding new element '8' in originalArray

console.log(originalArray);     // output: [2, 4, 5, 7, 8]
console.log(clonedArray);       // output: [2, 4, 5, 7]