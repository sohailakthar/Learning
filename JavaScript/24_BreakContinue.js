"use strict";

// Using continue to print even numbers;
let n = 20;
for(let i=1; i<=n; i++) {
    if(i%2 !== 0) {
        continue;
    }
    console.log(i);
}


// Stop when number found
let number = 9;
for(let i=0; i<=Number.MAX_SAFE_INTEGER; i++) {
    if(i === number) {
        break;
    }
    console.log(i);
}