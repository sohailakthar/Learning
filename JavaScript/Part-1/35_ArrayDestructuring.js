"use strict";

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6];

// let var1 = arr1[0];
// let var2 = arr2[1];

//var1 is stored with first element of arr1 and var2 with second element
// let [var1, var2] = arr1;
// console.log(var1+ "\n" +var2);       <-  var1=1, var2=2

//first and second element in var1, var2 respectively, and remaining all in arr3
// let [var1, var2, ...arr3] = arr1;
// console.log(var1);           <-   var1 = 1
// console.log(var2);           <- var2 = 2
// console.log(arr3);           <- arr3 = [3, 4, 5]

//If arr has fewer elements than variables declared :- (extra variables will be undefined)
// let[newVar1, newVar2] = arr2;
// console.log(newVar1);        <- newVar1 = 6
// console.log(newVar2);        <- newVar2 = Undefined

//Skipping and storing... ex: store 1st arr element in var1 and 3rd element in var2
// let[var1, , var2] = arr1;   //Skip the second element with empty space in let field
// console.log(var1);          // <-   var1 = 1
// console.log(var2); 