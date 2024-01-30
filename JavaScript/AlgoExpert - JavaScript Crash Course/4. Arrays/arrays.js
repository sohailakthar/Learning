// const arr = [1, 2, 3];

const arr = new Array(5);   // An array of length 5
console.log(arr);           // [ <5 empty items> ]
arr.fill(-1);
console.log(arr);           // [ -1, -1, -1, -1, -1 ]

const arr2 = new Array(1, 2, 3);
console.log(arr2);           // [ 1, 2, 3 ]

arr2.push(4, 5, 6);
console.log(arr2);          // [ 1, 2, 3, 4, 5, 6 ]

console.log(arr2.pop());    // 6
console.log(arr2);          // [ 1, 2, 3, 4, 5 ]

arr2.unshift(0, -1, -2);
console.log(arr2);          // [ 0, -1, -2, 1, 2, 3, 4, 5 ]

arr2.shift();
console.log(arr2);          // [ -1, -2, 1, 2, 3, 4, 5 ]


// Is array of type object?
console.log(typeof arr);            // object
console.log(Array.isArray(arr));    // true
console.log(arr instanceof Array);  // true


// Slicing (subarray) the arrays.
const arrSlice = [0, 1, 2, 3, 4, 5];
console.log(arrSlice.slice(1, 2));      // [ 1 ]
console.log(arrSlice.slice(2, 5));      // [ 2, 3, 4 ]
console.log(arrSlice.slice(2, 1));      // []


// Splicing in arrays.
let arrSplice = [0, 1, 2, 3, 4, 5];
arrSplice.splice(1, 3);     // Starting from index-1, delete 3 elements
console.log(arrSplice);     // [ 0, 4, 5 ]

arrSplice = [0, 1, 2, 3, 4, 5];
arrSplice.splice(1, 3, 'hello', 'world', 'deleted');        // The deleted 3 elements are replaced by the following 3 words respectively.
console.log(arrSplice);     // [ 0, 'hello', 'world', 'deleted', 4, 5 ]


// Concatenate arrays.
const arrOne = ['hello', 'world'];
const arrTwo = ['I\'m', 'Sohail'];
const arrOneAndTwo = arrOne.concat(arrTwo);
console.log(arrOneAndTwo);      // [ 'hello', 'world', "I'm", 'Sohail' ]

const arrTwoAndOne = arrTwo.concat(arrOne);
console.log(arrTwoAndOne);      // [ "I'm", 'Sohail', 'hello', 'world' ]


// Reverse an array
const arrRev = [2, 4, 6, 8];
arrRev.reverse();
console.log(arrRev);            // [ 8, 6, 4, 2 ]


// Output array contents as a String
const students = ['Sohail', 'Shoaib', 'Faizan'];
console.log(students.join());           // Sohail,Shoaib,Faizan
console.log(students.join(' | '));      // Sohail | Shoaib | Faizan
console.log(students.join(', '));       // Sohail, Shoaib, Faizan


// Traversing the array
const numTraverse = [1, 2, 3];

for(let i=0; i<numTraverse.length; i++)
    console.log(i, numTraverse[i]);

for(const val of numTraverse)
    console.log(val);

numTraverse.forEach(function(val, index) {
    console.log(index, val);
});


// Map function of arrays.
const numMap = [1, 2, 3, 4, 5];

const mappedArray = numMap.map(function(val, index) {
    return val+index;
});
console.log(mappedArray);       // [ 1, 3, 5, 7, 9 ]


// Filter function of arrays.
const naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = naturalNumbers.filter(function(val) {
    return val%2 == 0;
});
console.log(evenNumbers);       // [ 2, 4, 6, 8, 10 ]


// Using find method, to find the first number greater than 70
const randoms = [23, 54, 62, 75, 23, 67];

const foundNumber = randoms.find(function(val) {
    return val > 70;
});
console.log('First number greater than 70:', foundNumber);

const foundIndex = randoms.findIndex(function(val) {
    return val > 70;
});
console.log('Index of first number greater than 70:', foundIndex);


// Using 'every' method to find if every element satisfies a given condition.
const evens = [2, 4, 6, 8, 10];

const allEvens = evens.every(function(val) {
    return val%2 == 0;
});
console.log(allEvens);  // true


// Using 'some' method to find if some elements satisfy a given condition
const names = ['sohail', 'faizan', 'ayaan'];

const nameWithA = names.some(function(val) {
    return val[0] == 'a';
});
console.log(nameWithA);     // true


// Using 'reduce' method to find sum of the array
const someNumbers = [2, 4, 8, 24, 34];

const sum = someNumbers.reduce(function(accumulator, currentVal) {
    return accumulator + currentVal;
}, 0);      // 0 here is the initial value of accumulator.
console.log(sum);   // 72

// Using 'reduceRight' which is same as 'reduce', except that this starts from right and goes left.
const difference = someNumbers.reduceRight(function(accumulator, currentVal) {
    return accumulator - currentVal;
}, 0);
console.log(difference);    // -72


// Using 'sort' to sort our array.
const unsorted = [23, 64, 12, 72, 48, 75];
console.log(unsorted);      // [ 23, 64, 12, 72, 48, 75 ]
unsorted.sort();
console.log(unsorted);      // [ 12, 23, 48, 64, 72, 75 ]

// We can define custom comparator & use it.
function desc(firstNum, secondNum) {
    return secondNum - firstNum;
}
unsorted.sort(desc);        // We're using the custom comparator 'desc' here.
console.log(unsorted);      // [ 75, 72, 64, 48, 23, 12 ]