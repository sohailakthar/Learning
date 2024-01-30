"use strict";

// By default the global object is 'window'
console.log(this);
// output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}



function myFunc() {
    console.log("Hey world");
}

myFunc();           // output: Hey world
window.myFunc();    // output: Hey world

// As we can see, both function calls work fine.


// From line-4 we got the window object as output. If we expand it, we can find 'myFunc()' in the list
// meaning that the function is inside the global window object.