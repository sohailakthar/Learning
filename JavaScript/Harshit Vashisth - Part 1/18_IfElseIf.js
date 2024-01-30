"use strict";

let temp = 50;

if(temp > 40) {
    console.log("Turn on the AC!");
} else if(temp > 30) {
    console.log("Too hot outside.");
} else if(temp > 20) {
    console.log("Let's fo for a walk!");
} else if(temp > 10) {
    console.log("Cold outside!");
} else if(temp > 0) {
    console.log("Turn on the heater!");
} else {
    console.log("Extremely cold outside.");
}

console.log("End");