"use strict";

let cars = ["bmw", "mercedess", "lamborghini"];
console.log(cars);

//push() - Add element at the end
cars.push("koneigsegg", "kawasaki");
console.log(cars);

//pop() - return element from end
let poppedCar = cars.pop();
console.log(cars);
console.log(poppedCar);

//unshift() - Add element at the front
cars.unshift("maybach", "ferrari");
console.log(cars);

//shift() - returns element from the front
poppedCar = cars.shift();
console.log(cars);
console.log(poppedCar);


// push() and pop() are faster as compared to shift() and unshift()