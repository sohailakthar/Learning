"use strict";

// array.splice(start_index, number_of_items_to_delete, items_to_insert)
// This is used to delete or insert items in an array.
// NOTE: It will modify the original array

const myArray = [2,4,6,8,10];

// delete 6,8  (Starting from index 2, delete 2 elements)
myArray.splice(2, 2);
console.log(myArray);   // output: [2, 4, 10]


// insert 5,6,7,8 after 4 (Starting from index 2, delete 0 elements and insert 5,6,7,8)
myArray.splice(2, 0, 5,6,7,8);
console.log(myArray);   // output: [2, 4, 5, 6, 7, 8, 10]


// insert and delete (Deleting all elements, and then inserting 1..8)
myArray.splice(0, myArray.length, 1,2,3,4,5,6,7,8);
console.log(myArray);   // output: [1, 2, 3, 4, 5, 6, 7, 8]