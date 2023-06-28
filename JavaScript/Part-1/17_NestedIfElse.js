"use strict";

let winningNumber = 8;

let guessNumber = +prompt("Guess a number: ");

if(guessNumber === winningNumber) {
    console.log("You've guessed it right!");
} else if(guessNumber < winningNumber) {
    console.log("Too low!");
} else if(guessNumber > winningNumber) {
    console.log("Too high!");
}