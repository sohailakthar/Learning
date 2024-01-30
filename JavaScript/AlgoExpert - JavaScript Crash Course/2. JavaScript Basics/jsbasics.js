'use strict';

let strNum = '10.5px';
console.log(Number(strNum));        // NaN (Not a Number)
console.log(parseInt(strNum));      // 10
console.log(parseFloat(strNum));    // 10.5

console.log(BigInt(200));           // 200n

let name = 'sohail';
console.log(name === 'sohail');      // true (Unlike Java, Strings in JS are treated as values rather than objects.)


// Template Literal - use back ticks (Above Tab key)
console.log(`My name is: ${name}`);


// Working with strings:-
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabet[25]);          // z
console.log(alphabet.charAt(0));    // a
console.log(alphabet.includes('efg'));  // true
console.log(alphabet.startsWith('a'));  // true
console.log(alphabet.endsWith('f'));    // false
console.log(alphabet.toUpperCase());    // ABCDEFGHIJKLMNOPQRSTUVWXYZ
console.log(alphabet.substring(2, 9));  // cdefghi
console.log(alphabet.slice(2, 9));      // cdefghi
console.log(alphabet.padStart(30, '-'));    // ----abcdefghijklmnopqrstuvwxyz       (30 represents minimum left you want the string to be)
console.log(alphabet.padEnd(30, '-'));      // abcdefghijklmnopqrstuvwxyz----


// Creating an object
const person = {
    name: 'Sohail',
    age: 21
};

console.log(person);            // { name: 'Sohail', age: 21 }
console.log(typeof person);     // object
console.log(JSON.stringify(person));            // {"name":"Sohail","age":21}
console.log(typeof JSON.stringify(person));     // string
console.log(typeof JSON.parse(JSON.stringify(person)));     // object

console.log(person.name);       // Sohail
person.name = 'Shoaib'
console.log(person.name);       // Shoaib


// Working with Map
const map = new Map();

map.set(1, 'Sohail');
map.set(2, 'Shoaib');
console.log(map.size);      // 2
console.log(map.get(1));    // Sohail
console.log(map.get(2));    // Shoaib
console.log(map.get(3));    // undefined


// Working with Set
const set = new Set();

set.add('Sohail');
set.add('Sohail');
set.add('Shoaib');
console.log(set.size);      // 2
console.log(set);           // Set(2) { 'Sohail', 'Shoaib' }
console.log(set.has('Vikas'));  // false


// Working with Array
const arr = [1, 2, 3, 4];
console.log(arr[2]);        // 3
arr.push(5);
console.log(arr);           // [ 1, 2, 3, 4, 5 ]
console.log(arr.shift());   // 1
console.log(arr.unshift(6)); // 5 (5 refers to length of array after inserting the element: 6)
console.log(arr);           // [ 6, 2, 3, 4, 5 ]


// Functions
function isEven(num) {
    return (num%2 == 0);
}

console.log(isEven(2));     // true
console.log(isEven(3));     // false
console.log(typeof isEven); // function (object)
console.log(isEven instanceof Object);  // true


// Loops:-
for(let i=1; i<=10; i++) {
    if(i%2 == 0)
        continue;
    if(i == 9)
        break;
    console.log(i);
}
// Output: 1 3 5 7

const nums = [2, 3, 5, 6];

for(let i of nums) {
    console.log(i);
}
// Output: 2 3 5 6

for(let i in nums) {
    console.log(i);
}
// Output: 0 1 2 3

nums.forEach(function(value) {
    console.log(value, value*value);
});
// Output: 2 4, 3 9, 5 25, 6 36

const demo = {1: 'Odd', 2: 'Even'};
for(const i in demo) {
    console.log(i, demo[i]);
}


// Exception Handling:
try {
    throw new Error('Custom error message.');
} catch (error) {
    console.error(error);
} finally {
    console.log('Caught exception.');
}


console.log("Using console log");
console.error("Using console error");
console.debug("Using console debug");
console.trace();
console.table([[1, 2], ['hello', 'world']]);

console.count('Step');        // Step: 1
console.count('Step');        // Step: 2
console.countReset('Step');   
console.count('Step');        // Step: 1

console.time('Timer');
for(let i=0; i<100000; i++) {}
console.timeEnd('Timer');       // Timer: 1.982ms

console.time();
for(let i=0; i<1000; i++) {}
console.timeEnd();              // default: 0.028ms