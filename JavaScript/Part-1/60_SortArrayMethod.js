"use strict";

// Sort method sorts based on ASCII value and treats array elements as strings.
// ASCII of Numbers < ASCII of Capital_Letters < ASCII of Lowercase_Letters



const numbers = [8,3,5,6,2,6,1,10];
numbers.sort(); // Sorts in-place i.e modifies the original array
console.log(numbers);
// output: [1, 10, 2, 3, 5, 6, 6, 8]
// Treats numbers as strings. Checks the first letter's ASCII and sorts accordingly
// ASCII of '1' < ASCII of '2' < ASCII of '3' < ASCII of '5' .....




// Let's confirm it with a string array
// const names = ['Sohail', 'Vikas', 'Faizan', 'Shoaib', 'Zaid', 'justdemo'];
// names.sort();
// console.log(names);
// output: ['Faizan', 'Shoaib', 'Sohail', 'Vikas', 'Zaid', 'justdemo']
// Note that ASCII of Uppercase_Letters is less than those of Lowercase_Letters, therefore
// justdemo was placed behing 'Zaid'




// Let's now see how to sort numbers (We'll take the same 'numbers' array from before)
// numbers.sort((a,b)=> {
//     return a-b;
// });
// console.log(numbers);
// output:  [1, 2, 3, 5, 6, 6, 8, 10]


// Similarly, to sort in descending order:
// numbers.sort((a,b)=> {
//     return b-a;
// });
// console.log(numbers);
// output: [10, 8, 6, 6, 5, 3, 2, 1]





// Let's check a real life example: Sort products according to price(low to high, or high to low)
const products = [
    {pId:1, pName:"product1", price:200},
    {pId:2, pName:"product2", price:239},
    {pId:3, pName:"product3", price:1000},
    {pId:4, pName:"product4", price:400},
    {pId:5, pName:"product5", price:800}
]

// Sorting the products list based on LowToHigh price
// products.sort((a,b)=> {
//     return a.price-b.price;
// })
// console.log(products);

// We can also create a separate sorted list, instead of modifying the original one
const lowToHigh = products.slice(0).sort((a,b)=> {
    return a.price-b.price;
})
console.log(lowToHigh);

// Similarly, for HighToLow
const highToLow = products.slice(0).sort((a,b)=> {
    return b.price-a.price;
})
console.log(highToLow);