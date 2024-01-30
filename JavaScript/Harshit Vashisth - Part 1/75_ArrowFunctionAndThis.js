"use strict";

// Arrow function doesn't have a 'this' of its own
// It takes 'this' from surrounding i.e one level higher(Kinda similar to Reference Environment)

const user = {
    name: 'abc',
    age: 20,
    about: () => {
        console.log(this);
        console.log(`Age of ${this.name} is: ${this.age}`);
    }
}

user.about.call(user);

// OUTPUT:
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// Age of  is: undefined

// Even though you explicitly specify 'this' as 'user' while making a function call....
// Arrow function found 'this' from its surrounding as 'window'