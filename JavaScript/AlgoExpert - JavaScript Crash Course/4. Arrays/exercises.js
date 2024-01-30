// 1. Write a JavaScript function to check whether an `input` is an array or not.
function isArray(input) {
    return input instanceof Array;
}

// console.log(isArray('w3resource'));     // false
// console.log(isArray([1, 2, 4, 0]));     // true


// 2. Write a JavaScript function to clone an array.
function copyArr(arr) {
    let copiedArr = [...arr];
    return copiedArr;
}
// let copiedArr = copyArr([1, 2, [4, 0]]);
// console.log(copiedArr);     // [ 1, 2, [ 4, 0 ] ]


// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
let getFirstN = function(arr, n=1) {
    if(n < 0) return [];
    return arr.slice(0, n);
}
// console.log(getFirstN([7, 9, 0, -2]));
// console.log(getFirstN([],3));
// console.log(getFirstN([7, 9, 0, -2],3));
// console.log(getFirstN([7, 9, 0, -2],6));
// console.log(getFirstN([7, 9, 0, -2],-3));


// 5. Write a simple JavaScript program to join all elements of the following array into a string.
let joinElements = function(arr, delimiter=", ") {
    return arr.join(delimiter);
}
// console.log(joinElements(["Red", "Green", "White", "Black"], " + "));


// 7. Write a JavaScript program to sort the items of an array.
let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort();
// console.log(arr1);      // [-3, -4, 1, 2, 3, 5,  6, 7, 8]


// 8. Write a JavaScript program to compute the sum and product of an array of integers.
let input = [1, 2, 3, 4, 5];

const sum = input.reduce(function(accumulator, val) {
    return accumulator + val;
});

const product = input.reduce(function(accumulator, val) {
    return accumulator * val;
});

// console.log(`Sum: ${sum}, and Product: ${product}`);        // Sum: 15, and Product: 120


// 9. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
let names = ['sohail', 'shoaib', 'faizan', 'Sohail', 'sohail', 'Faizan', 'Shoaib'];

names.forEach(function(val, index) {
    names[index] = val.toLowerCase();
});
// let set = new Set(names);
// names = [...set];
// console.log(names);     // [ 'sohail', 'shoaib', 'faizan' ]


// 10. Binary search
var items = [1, 2, 3, 4, 5, 7, 8, 9];

function bs(items, target, i, j) {
    if(i > j) return -1;
    let mid = Math.floor((i+j)/2);
    if(items[mid] == target) return mid;
    if(items[mid] < target) return bs(items, target, mid+1, j);
    else return bs(items, target, i, mid-1);
}

// console.log(bs(items, 3, 0, items.length-1));


// 11. Turn an array of numbers into a total of all the numbers
function total(arr) {
    return arr.reduce(function(accumulator, curVal) {
        return accumulator + curVal;
    });
 }
 
//  console.log(total([1,2,3])); // 6


// 12. Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    return arr.reduce(function(res, curVal) {
        return res + curVal;
    }, '');
 }
 
//  console.log(stringConcat([1,2,3])); // "123"


// 13. Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    return arr.reduce(function(accumulator, curVoter) {
        if(curVoter.voted)
            return ++accumulator;
        return accumulator;
    }, 0);
}
 
var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
];
// console.log(totalVotes(voters)); // 7


// 14. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
    return arr.reduce(function(total, curItem) {
        return total + curItem.price;
    }, 0);
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
//  console.log(shoppingSpree(wishlist)); // 227005


// 15. Given an array of arrays, flatten them into a single array
function flatten(arr) {
    let result = new Array();

    for(const a of arr) {
        result.push(...a);
    }

    return result;
 }
 
 var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
 ];
 
// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


/* 16 Given an array of potential voters, return an object representing the results of the vote
Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
*/
const result = { numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0, 
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   for(const person of arr) {
        if(person.age >= 18 && person.age <= 25) {
            result.numYoungPeople += 1;
            if(person.voted)
                result.numYoungVotes += 1;
        } else
        if(person.age >= 26 && person.age <= 35) {
            result.numMidsPeople += 1;
            if(person.voted)
                result.numMidVotesPeople += 1;
        } else
        if(person.age >= 36 && person.age <= 55) {
            result.numOldsPeople += 1;
            if(person.voted)
                result.numOldVotesPeople += 1;
        }
   }

   return result;
}

console.log(voterResults(voters)); // Returned value shown below: