"use strict";

// Let's use reduce to get the sum of all elements
const numbers = [1,2,3,4,5];

const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator+currentValue;
});

console.log(sum);

// Initially accumulator=numbers[0] and currentValue=numbers[1]
// accumulator   -   currentValue   -   return
//   1                  2               (1+2)=3
//   3                  3               (3+3)=6
//   6                  4               (6+4)=10
//   10                 5               (10+5)=15



// Let's understand with a real life example of add-to-cart, total
const userCart = [
    {productId:1, productName:"Mobile", price:15000},
    {productId:2, productName:"TV", price:25000},
    {productId:3, productName:"Laptop", price:40000},
    {productId:4, productName:"Headphones", price:4000}
]

const total = userCart.reduce((totalPrice, currentTotal)=> {
    return totalPrice + currentTotal.price;
}, 0);  // 0 here is the initially value for totalprice(accumulator)

console.log(total);