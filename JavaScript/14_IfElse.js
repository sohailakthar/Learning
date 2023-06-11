"use strict";

// Check if eligible to vote
let age = 20;
let isEligible;

if(age > 18) {
    isEligible = true;
} else {
    isEligible = false;
}

console.log(isEligible);



// Grading..
// 85-100 : A
// 65-85  : B
// 45-65  : C
// 0-45   : F
let marks = 90;
let grade;

if(marks>85 && marks<=100) {
    grade = 'A';
} else if(marks>65 && marks<=85) {
    grade = 'B';
} else if(marks>45 && marks<=65) {
    grade = 'C';
} else {
    grade = 'F';
}

console.log(grade);