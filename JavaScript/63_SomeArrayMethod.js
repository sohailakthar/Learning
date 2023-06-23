"use strict";

// Returns true if there exists some element which satisfies a certain condition

// Let's see if an array contains at least one (or more) even elements
const array1 = [1,2,3,4,5,6];

let containsSomeEven = array1.some(number=>number%2===0);
console.log(containsSomeEven);  // true



// With no even elements in array:
const array2 = [1,7,3,9,5,11];

containsSomeEven = array2.some(number=>number%2===0);
console.log(containsSomeEven);  // false



// Let's see a real life example -> Check if there is any(one or more) item in cart with price>=1,00,000
const cart = [
    {pId:1, pName:"product1", price:20000},
    {pId:2, pName:"product2", price:23900},
    {pId:3, pName:"product3", price:10000},
    {pId:4, pName:"product4", price:40000},
    {pId:5, pName:"product5", price:80000},
    {pId:6, pName:"product6", price:150000}     // <- Cost of this product is more than 1,00,000
]

const containsProductWithHighCost = cart.some(product=>product.price>=100000);
console.log(containsProductWithHighCost);       // true (product6 costs 1,50,000)

