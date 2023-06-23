"use strict";

// If we want to make a new array entirely filled with any number, say -1
const myArray = new Array(10).fill(-1);     // 10 is size of array, -1 is element to be filled in array
console.log(myArray);       // output:  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]


// Suppose we want to change certain elements in an array to a specific number:
//array:  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
//index:    0   1   2   3   4   5   6   7   8   9

// array.fill(element_to_fill, start_index, end_index)
myArray.fill(999, 2, 5);        // Fill the number '999' from index 2 to index 4(5-1)
console.log(myArray);
//output: [-1, -1, 999, 999, 999, -1, -1, -1, -1, -1]
//index:    0   1   2    3    4    5   6   7   8   9



// Make a new array with all initial values as 'Annonymous'
const users = new Array(4).fill("Annonymous");
console.log(users);     //output: ['Annonymous', 'Annonymous', 'Annonymous', 'Annonymous']