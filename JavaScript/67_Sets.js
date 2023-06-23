"use strict";

// Sets are Iterable
// Can only contain unique values (no duplicates allowed)
// Doesn't have a length property
// There's no index-based access
// Order of elements in set is not guaranteed


// Creating a set:
// const numbers = new Set();  //empty set

// for(let i=1; i<6; i++) {    // Adding elements 1 to 5
//     numbers.add(i);
// }
// console.log(numbers);   // output: {1, 2, 3, 4, 5}

// numbers.add(3);         // Trying to add a duplicate
// console.log(numbers);   // output: {1, 2, 3, 4, 5}      (Same as before, 3 wasn't added)


// const set1 = new Set();
// set1.add([1,2]);
// set1.add([1,2]);
// // We might expect that there'll be only one array[1,2,3], but....
// console.log(set1);      // output: {Array(2), Array(2)}   (Both the arrays were added)
// // This is because each time a separate array is made in memory, therefore both having different addresses
// // This causes the arrays to be identified as DIFFERENT even though they have same elements inside


// // Let's check the same with a pre-made array:
// const myArray = [3,4,5];
// const set2 = new Set();
// set2.add(myArray);
// set2.add(myArray);
// console.log(set2);      // output: {Array(3)}   (Array was added only once, cuz both arrays are same)




// Let's see one use case of sets:
// Find all unique elements from an array consisting of duplicate items
const array = [1,2,3,3,4,5,2,1];
const uniqueElements = new Set(array);
console.log(uniqueElements);    // output: {1, 2, 3, 4, 5}


// Check if the set contains a particular element using the 'has()' function
console.log(uniqueElements.has(3));     // true
console.log(uniqueElements.has(8));     // false



// Set is iterable, so let's check it out
for(let element of uniqueElements) {
    console.log(element);   // outputs the elements from set
}


// Set has no 'length' property... We can find length manually
let length = 0;
for(let i of uniqueElements) {
    length++;
}
console.log(length);        // 5