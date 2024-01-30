"use strict";

// Checks if every element in the array satisfies a particular condition

// Let's understand with this example -> Check if every element is even
const array1 = [2,4,6,8,10];

function isEven(number) {
    return number%2===0;
}

let isEveryElementEven = array1.every(isEven);
console.log(isEveryElementEven);       // true



// Check with a list containing one or more odd numbers
const array2 = [1,2,3,4,5];

isEveryElementEven = array2.every(isEven);
console.log(isEveryElementEven);        // false   (becuase, array2 consists 1,3,5 which aren't even)




// Let's see a real life example, check if every product in cart is priced less than 1,500
const products = [
    {pId:1, pName:"product1", price:200},
    {pId:2, pName:"product2", price:239},
    {pId:3, pName:"product3", price:1000},
    {pId:4, pName:"product4", price:400},
    {pId:5, pName:"product5", price:800}
]

let isEveryProductBelow1500 = products.every(product=>product.price<1500);
console.log(isEveryProductBelow1500);  // true

let isEveryProductBelow900 = products.every(product=>product.price<900);
console.log(isEveryProductBelow900);  // false