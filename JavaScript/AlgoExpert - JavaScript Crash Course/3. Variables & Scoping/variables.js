/*
var vs let
var:
    - can be hoisted.. ie even though declaration is made later, you can use the variable
    - can be accessed outside of the scope it is defined in.
let:
    - can't be hoisted.
    - can't be accessed outside of its scope
*/

function test() {
    if(true) {
        var varNum = 0;
        let letNum = 0;
    }

    console.log('varNum', varNum);
    // console.log('letNum', letNum);      // thows a ReferenceError
}

test();


// It's better to use let, as it makes less buggy code.