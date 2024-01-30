"use strict";

// Maps are iterable
// Order is guaranteed
// Unlike object literals, maps allow keys of any type

// Making object literal
// const objectLiteral = {3:'three'};  // The key '3' is also considered string
// for(let key in objectLiteral) {
//     console.log(typeof key);        // output: string
// }



// Making Map
const map = new Map();  //empty map
map.set('firstName', 'Sohail');     //key:firstName     value:Sohail
map.set(3, 'three');                //key of type number
map.set({'key1':'val1'}, 'ObjLiteral');     // key of type object-literal
map.set([1,2], 'OneTwo');            //key of type array

for(let key of map.keys()) {
    console.log(typeof key);        //output: string, number, object, object
}


// We can iterate the map like this:-
// Map returns an array[key, value] each time, so we are destructuring that array - (let '[key, value]' of..)
for(let [key, value] of map) {
    console.log(`key:${key}  &  value:${value}`);
}



// Directly adding key, value while creating the map
const newMap = new Map([['key1','value1'], ['key2', 'value2']]);
console.log(newMap);        // output: {'key1' => 'value1', 'key2' => 'value2'}
