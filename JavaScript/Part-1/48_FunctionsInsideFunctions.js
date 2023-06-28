"use strict";

// We can use any type of function declaration (expression, arrow etc)
function outermostFunc() {

    const midFunc = () => {

        const innermostFunc = function() {
            console.log("We're inside the innermost function.");
        }

        console.log("We're inside the middle function.");
        innermostFunc();
    }

    console.log("We're inside the outermost function.");
    midFunc();
}

outermostFunc();


console.log("\n");


const calculator = function(number1, number2) {

    const add = (num1, num2) => num1+num2;
    const sub = (num1, num2) => num1-num2;
    const mul = (num1, num2) => num1*num2;
    const div = (num1, num2) => num1/num2;
    const mod = (num1, num2) => num1%num2;

    console.log("Welcome to the calculator app.");

    console.log(`Addition of ${number1}, ${number2} is: ${add(number1, number2)}`);
    console.log(`Subtraction of ${number1}, ${number2} is: ${sub(number1, number2)}`);
    console.log(`Multiplication of ${number1}, ${number2} is: ${mul(number1, number2)}`);
    console.log(`Division of ${number1}, ${number2} is: ${div(number1, number2)}`);
    console.log(`Modulus of ${number1}, ${number2} is: ${mod(number1, number2)}`);
}

calculator(10, 5);