"use strict";

// Let's understand it with function inside function

const commonVar = "Global Variable";


// Lexical scoping: A code-block would search for variable within its block first. If not found,
// it will search for it in consecutive lexical environments i.e., where that block was defined.

// In our case, innermostFunc would search for commonVar in the same function block. 
// If not found, it'll search in the successive lexical environment i.e midFunc() block
// If still not found, it'll search in further successive env i.e outermostFunc() block
// If still not found, it'll search for the variable in global scope.

// 1. Without any commented lines, each function would print their respective value of commonVar
// 2. When we comment-out commonVar in 'innermostFunc()' it will print value from the midFunc
// 3. Similarly, if we comment-out commonVar in 'midFunc()' it will print commonVar value from 'outermostFunc()'
// 4. If we comment-out all commonVar varibales inside all functions, every func would print 'Global Variable'
function outermostFunc() {
    const commonVar = "Inside the outermost function"

    const midFunc = function() {
        const commonVar = "Inside the middle function";

        const innermostFunc = () => {
            const commonVar = "Inside the innermost function";
            console.log(commonVar);
        }

        console.log(commonVar);
        innermostFunc();
    }

    console.log(commonVar);
    midFunc();
}

console.log(commonVar);
outermostFunc();